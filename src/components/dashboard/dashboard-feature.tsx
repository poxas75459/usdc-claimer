/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "481Y6znayo24h4c5JZkWwMFPX7Z6Y2C4JzUTZNEcnpmZEHNDiwgqkA9JMyMHX9AEpHFarUJR3yJz6L4rNh3zrqfL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uKN6znWVXJk8TmJZvEyaG7LnRKs3GCciS9deuCakeQhtPGKmTuqVjajx2bZYKkRcQPBPuJZpDUia893mN9UYzPj",
  "key1": "271sCYhN1nuSt2pjAkLmt4S59hqsP7YVj2G9CEYm5NhxVL29Hh9MUcVkTHMb66HeAhsSc5tzCWSMJqoG7DDCJK62",
  "key2": "4wA4brHXiDgVDXBfXqG6Q2jPoc5wvYCH6jTC1NkN84vNHSafvJ2ebq2Ra5Yg4dXY81V4PuRJr1HEhoiK4vKbFTqQ",
  "key3": "3uqWvsrADtrYmnuS5vLZHGAFMATnBjWjwxxwciov28kcW3VHdYdMBRQXS1CDEbg67ESByZVoFcR5uu9EXoDHUTgY",
  "key4": "5goSiwgVExjPe9AyPnwAUQ87Pfqayr9cLzk3Fai2dx3cwFsEZKi5xQTbrBVfd7J4BbJiTSEABy3K4HnGXFnGJ6u5",
  "key5": "2TfTYr8FhzMGoieFoTstEidT82fYW3MtmhYvsvMorLNTsWM9hfK4L1XFfcS1aH6TMaKEK3Ay65gmCw3y7pDV3TW4",
  "key6": "4RsPwzFVcTom7KcecQdFq2Svtpi4n29Bnj1XdkW8GDoifeRZiCPnsj8m1jnf2CvixTcuDjDjmSr6kdsULhPfLh7d",
  "key7": "3HBWwetqWi8w5ovm9t3Cct4CUkW7Ks2SHxYgj3mX3hVe48WoTeXyMHZYSEAnnuFAtCgPzjtxb28akC7Cm5JenNd4",
  "key8": "2nvRSBVNXQQtVGkEjsF1Z9itKuBmFaK1pJ94ZSFYTsUWEwFyvpT58sRnwU53tK5e5Yn2Q2XDUBAArF5NYnFTUXRH",
  "key9": "NdqEnrCc1MXLyzKFfPpMQziRRPEgVsSt2stkGJzkXRZrca5we4gu8KfozpMZu2b36GYghfGEHGPUdxT17eKYRZ3",
  "key10": "5GPF557yHNwAe7bS3vvkMcHX8rJHUNdUj6BMi6X7r6iXXyb9axNsRo11nUMdoGkGrkzFnWfmQgTAzevjZ3Hrpkh2",
  "key11": "HZa263x58qnuEG2ntihUpBdXgN7U4VbLy6jpQawUehd2ejhghYH78CacwEmuL2fKuW987RQ32iuHsp1bNWsak88",
  "key12": "5e1L8125gVjBbwqfupGVhYxw3PEtxr4Zq7qGdrhMW4bQzUhnLrxFV3LBY6jkTemYh9Nc9pMESZw5QUDxZvsFB8N7",
  "key13": "2MxNm831vQdNWgvgeoHiR6p64fjFyHRvTuwZStXDVGwo3K1bsSdVhSVoDcHBf3Re3H7Y5XXzgQnmhoiMYLYD8w4q",
  "key14": "3Primt88c3CHjhnSeCEA1P2zXjVKzU4UmzpGo1nVdVobmNsczuK4Tamrkd7wF6L4XyhYFyLehESuT49GQq5d88Yv",
  "key15": "5bit3zhV2NPvGAiyyVJ14u6NrepyMZ1FD5wdsGYPZo8NMBiRGfC6ip6SkkBh9dkTiMFY8Yh4woC79y7t9a12tAas",
  "key16": "2GqDyBbyXLUT9wp52obSxtmNb4HkKzqKGLsrweDkPxZPnaaweh6j6edwkN8w4Pot6km197w7F4Y8s4YcmxB5Chcb",
  "key17": "4hgNGtEjNP3ZQyMF7aAHSZ2dk99aodv88cZ4ff18KnciW5fQWwzbAKQftpZnMDQpetBW6V3ZHtUhzXTQM41UTNZd",
  "key18": "5QFQQS3368tSBfa1VMTaKBew4DyHw9T238d7Aw1XvNxxiGRRhnkSbxwcziCK1XxqgrG2Z1niEqSZDxhDntZAqv8p",
  "key19": "4pkBDKXc3aF7U3MCq8wUiCRcHoY41rnxKPcFdmzFhrNDAUxTDzCTUAe6gpjfP1GZKy3rP63MziAYUSnC1yNfY7Ff",
  "key20": "6bTvhAFDa7ky6MFCvPUJVbM3MdXZCHQPdpj6Pp833LYpyt67KLD8cMknfmyKDMMWNftopzTC7jjUtw5wvCwDh3N",
  "key21": "3DHJqkdxamqPzq994sdLxykVENuCx77isntaHLLcUpmgsmdMzv48SBaPPbw1Hs17dAr4YVnAbnbSjW9ZpYCUzqfV",
  "key22": "37YmBtNafT83XfhxgDG6VYYGY9p5snRPtgw4tqg4aBm2ZfzxHo77QmYxZCtZuoQkPPVQxcuaxDXr5ejb1ewNDJww",
  "key23": "3SLXocPP8EFxMMG9bzM4TU1DjuvikhjzHeni9JAeYnbMReJdaJxGqCTFm7vy18SftQinK1tP8EnoA8mXHUnk2pKw",
  "key24": "3zpujbWCVT6rSUDb1fsAiWMs6WHVvphM6rvv3bXoZ5SshhcwpPFVaPD6Wum9Uv6AHVPxfHREGbS2S4qszgVAj3W3",
  "key25": "4xtxStojhMgrL9vfpLeFCq9dYueFijYcsyiNVuGTTFYe9tUfBWjtYzSpJTBYyJjrJU1mzmxA9JtKiGbwyWjgPA32",
  "key26": "2FAPDL2ynxkgJueBiwkP97eY7sQVvGfAgpcaDeaUHFXaCHcqPWqx1MpyTw9wMYMqqwWbzxobQNHnMzkYia42wkaK",
  "key27": "oZqzJ26UqxGtKvvhvG81FLZVJvYaJAWLAwhmQ7Mx6hbxH2CYV4Q6hYyV6KEmF7qxoUTrappeMPCghwZuLV7zQJt",
  "key28": "gx9F2MEB9r8xyHT5a3EkeGoM3GumeiCofxrykKkda3t13uiH4GTZvoZoEc8HGZmuMsvLdseYWWWZqhNwh3xuaUD",
  "key29": "pf8sgbL6WoqXdENb4YfWLNdmSVcRQ7oHjVHpPpWL4bhi6AyY97HQsSyxttyu2acoh5n9ntwmLMxrX5osHNAcTV6"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
