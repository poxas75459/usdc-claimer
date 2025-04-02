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
    "5yBMAeu1LmfTfk3Ti9WRpPeNDdT7u9xgeQjGbLzHgR8mx2iSatvYBHVugcCAYvSz7sx3Goa8xqH5hJGcdh6ktEAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56LzPoMgSzf3mM6aDQsDaKu8p99Yre1DoQQUgwh3fhnitZDyCvw5auRj4ePzA2f7o4DxtbjqdvzDvn3FjyrqGML",
  "key1": "2SsVqSBDH9sXDuhroPcGxPUHkProGUAf3hZt3yugGSbGHPwKP3TGUR8DywT8ErdSvWJi9kLdjhfjzt82zLMtmqhJ",
  "key2": "5vBhwtyyiVjRrZ9o1akvJ2RQqr4HmAv3KWXUQabbbA3WWSDyo7KMvXfhJXwB6WBHT4TBZhJkACsJSwHA3Lr8JWfw",
  "key3": "4R42SDxxg5tae4oRv7Dt7u5gME3PzDj8XPj1ZehwKBAx81Afzf4oU85JDL8PQfEjvjKy4EncGQqKUMeT9rkqm1e1",
  "key4": "QskSnozaXbSNPahyqsZBftmqp1yiwgVwiDfnxmLRm7oUF3aWM34znUvgQo4Fp9y8bCFgdLFZqfNHTaWzsbxaJRu",
  "key5": "65iZJUahsjh9cXPUE6PNQyUGrDzuBMGWCCjHyvfd7bZLUjR7SSaS5ZAQAWKgLDwtGpRYFq9AZs2r6Uo9gAGyRa7t",
  "key6": "3YRa5hsNNRLzrHArmfeteHyuP6RbcrAx85wPXPb3vgiBsacp2moY4wY6n6uBSo1ttqDYBA7rgqe4Z725hrkSgE45",
  "key7": "3WbWXTFMnSsaCXQRHtcBDkD1rf8KvK2NUZEAJtaoYd7znyKwmmE7zk5GPLHAUKqSvVicUBSjjpH2hX2oxjGKmw9K",
  "key8": "533V6Sb68hQuJMcMfirixhBb8EBHwRc2m1sbvxNx7bCXhLE2VFT97BcEKp4niEXCxkC544hiQfiwk6rsA3mpw8vg",
  "key9": "3WKzsX8f1B3yJzyUTPkXm7BoXJRoCFSsD32cCgqdGys263k9Lcv3g7L5EJTMGvyZ9HfsUCRBVY6EpRRr12G2Us5y",
  "key10": "234HhUgHcNkx7R66oHTsRcWcvnhBNMgPkyqRVdgxznArBDedbqMwqCV7nbsFEoX64iVGgBsV2U121GkQ6nfcNuLS",
  "key11": "3pDXbPyfFcHqxQfUiJpFBBWLAcBAW73oMugT3iHSz7bDx9b3RdRAKpdBeRffwb3Y2TojywwBRmsgwzA2U2SzxcoS",
  "key12": "633HnRaUiWigJvkEMiZ2mmbz8CnvCwmMF6m4LS2RnHDtq44SgESx7hbLKQeSsW6akNTZoJd14deaQZncddSS8CEc",
  "key13": "2YuW4fB3QBjLS9XPRfdv5TzrGWQVV9gYXPmHGbemW1tACz3jYuoiTuCBhqdj4ZkwHKvmnCLKNaG2cy59u1WhWhh9",
  "key14": "4g9PwFfowWV5cnWv2v5QebbwwNM1JzMc6pMFUP6N17rUuS8nRnposjreFSVJEYueqquiMpXshQJQHcvdk6nXVwLk",
  "key15": "AeSV74c1APhnyjsfhP9UZemW6jweqKStUb47Wm5yMsgZ5TrCPDX6yBDqEyGUUerXGZK3og92pkJhXU37aNGDBRr",
  "key16": "2gxUte58L4ZCuMcXoCKoHq6TXbHfnEG3iGcqgpu1TCGhQEbsyzyso3cZW7avdJ1Wd8Ra8yeVC2iykT2TzNMwXLXL",
  "key17": "3934DyXBSEXLXsJhchPEcj1AJvLPT1u3GzJv2vmTxtGPJbQbtSB7Tu2ZjAguZTSxb9pg65oE6sVmvmQNyhb2ZsKJ",
  "key18": "2Eme7Zxf2jkf67iqt676SnEz1H3aEtxQdnpi3GS1q89fmm4ZhXAvwVMk3ND8iNZtrhdkMXVA3jbSUDKhiSk5jWvb",
  "key19": "33XbqScpgvB1bwpf5BQxqL8kbU7f7HwbRwbvsMciQ94taEvmLxEv2etAfQJ4GUgta45SvSdfhMvdJgc7jLTWeinH",
  "key20": "32BieTjzfun584x4SFKwFs5UGUhkyVpHG7Z79X2j3aPyAxMgEy8chRf9A3cE19ahmqCQypegycS2oMEqCf8bzdiB",
  "key21": "21vimW7c9AqYjPTCiS2ykNcpSVrzunEHBYac62tNweCPH9tnwuxBokyAEEayVsFU6QmD4yxoYLg2Fw1ZYa9rxuE5",
  "key22": "2ijHTk3CESVHudYPAXKuLN6BdDW5nj6fQ7dibLnaDCdWGxnht58Cd8J6oum46xovirWuKDebggACNxuHzMJdj9tY",
  "key23": "26J9LBNqDhAvVsKryvPrV9yRBE6B5Lbi5meZXKpF9Nzp3xtaLyuPKJrJ6uqjnums11MHzdjQWuJjPrZfNgcYK9Jn",
  "key24": "2EwXbpHBQBLgqHUxYonUPuJJ4qQr1BzYkAkyBvyMC23cPKxnw4VgXbBXmTFU4w7Bb5AQaMhPFpVH21vsHFimnFTc",
  "key25": "3K57NjS72bBv4SHpjCmm6pMEeZZVM8tDztc8e12EeiE7nBnwmi881REq4WzCpbX8TQJZ3kXnPRG9q8TWTz8Kr6Dx",
  "key26": "2bqbbwRDKvUyERuo25yweWHaN7QsZXRcuvJ8EGUHQGnvn5Jtx1QurvDPuTxf5ScnnCuvmPyDZyiRASSrSKoRv5dH",
  "key27": "2UDMBovwPxnEMxo1vCUGr98SDX3tRKfwHomLUJAKDwRXdqikwErtnfKK5y4jByJpY4UKsr8vMK5zJ17vNp2HD6Dx",
  "key28": "963obbwVYRHjSNYGKBepikyZFGSmZ5cVnbThegwc5CXR57vV8pRJrMyCGv5XNMBn6a21pL7Mz8DtEBR5xi4Kfx4",
  "key29": "3DdinLHoxQYz6UY63wVLWaJtLLvKaXouxQQnVkNLVemHSepdNr8j2nDohxg9wvkbF7ibLpiCkcXfs65H9VZZocA8",
  "key30": "hiSjYmQFJdiuLtYCToWNmAMQa5CCdY1PqeQ7sdmbRVN1K9Gq8XAUQuWTDeYGbZ6yVrfxG5ZoNypkT75LA7jCoe2",
  "key31": "4Wdz9DgVKPwkZwRyEfmExavgBvwPj5m46CR7717MY1WonnyVejkUtHPVgyoxRySi83o9VTnH1N4XEfSxFjKZdr7a",
  "key32": "4YEP8iNgTrVxDCbQcp8ddDpxD6kGnmr1RsXaQQberih3NTXzr84EitkxUatyZK8t6HBWxcSGUzsjq4LXHsEzBQzK",
  "key33": "2Qo5P2MrrpvEtSCQxhYf1LKQATfu4kErxFwwZMceTr5mX9W6E1aw1vVkx8R1ZB1w8t9RahRGeTHccKGPDNQwAfuG",
  "key34": "Ech3wqAvYxWhWDQ8X7n5Mz51cXSgPVBFhmYq7A3huWP7JtF768nzJDtd5Lz7L73XxWKzQHEyLQmQVde5fk1CVAQ",
  "key35": "5LywCpqbSSdnzPyvcmv12P7iwGdKYDhYYvNwZ3pAgHcp2Nq4xNM5Sp6KbWw3US9KDntgaDjvfceLv8uhVWXXNH2V",
  "key36": "5x64JmE3sgnCBD9dVQVa5E3tuRjXga8xpptUHCKqWG38Fc9REQyrCVXoCPLXYRoWkW9YktpMX1s5GZNALp2nsAyF",
  "key37": "w7i3hLhV4zCGAxR7jDpj6zfwouqxArDCpNqVvMKECxz7xYxrNmsezyUQoeWx8ZmV6vhtxu3FbhYHagqc2gJJEPR"
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
