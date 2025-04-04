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
    "ckhyqAv9cjfS7oE68KsJ5735Zu1a9RPucLwKXqiNPPuz7CoLvrvjCroxjwjq7mnrWF8qN3xs4PYwMKdfitahZ6X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mbviZcnkaa3KWrdrdLPCAoEqMhHq3m6SHyazfv3tV7GXTNZyamupios3Wqo5b7yPvBtdPj5FRmeQDCxqaaFcXLe",
  "key1": "5KzUP1BFVbZfxkCKF4NoaqrKUhhiMpd9WpAQhn7xaMz3coJT3rLZZ2Bse56V3vLL2bDZCL571PrSXjZ69fCbiGmP",
  "key2": "2pHDUHCiWVuLSn5VVFnqagKBd4T2M7AY2Yf9PpyknMQCtgHrbBRLKUbMAczbtUzMWkgguMdsj6YD7uRsmupSYgcc",
  "key3": "4xCMoenyvYQM7DwisYGMpPQ6x1GfmzxGVFqtjrNTQhSpjoahidXqRt66xfHTS9n8552a1TDEhhpqzH3VbhSzKdX3",
  "key4": "5BARGtoTFwZmv7dnSRbaAqDWkkze5dmr5kA9Tfc3cyaKz9VYbWBAgVZZS4HNGj3rWbHn3DAwUQxqRcGAbzPqbR2Y",
  "key5": "tamqxSf3frvi8gYRcF2EWyyScYMCqUb34LNC1DBsrmgWLvu5cmS46mEoJadHzXBfdZR7UibvRzFCs5fiAE1PWtJ",
  "key6": "57hw86M3apoFH1qQW1cmA2zVzhwb9xPSzE9vuUoXW6yaERswSe3Wk5dhVzbShBdjHxXN1YeBff9kP1FEnab6ipdL",
  "key7": "5E3ZK12TZnsnkbedXyHcjPdtG7M8ve9VHVwS7df2E1fYtEwBDeYW1JWyvX457E5nB1DAoTCwShvgkaXzUmT6fx4u",
  "key8": "5NEeAYgFgB4SzLmkciCuodCVt5v1KTnt7fycphZmKqFNdup484LoBZrCsrxjkWVHLxmXve4XDYCVqbphcyBNfJTM",
  "key9": "pChpYMzNbzSU1xtZp2wR1ChxYhBH77zSh523cUSJXaViC8CtY5PxHLTSxJPCQEz3nmVb5fSZgB3Xrzz6eoq3oFP",
  "key10": "42WBvbx6XquGypXT9dB8BADEWLXLeJ5e3bVN3u3kbTLJe8FU3t3jWUXjx2oKdgUNAzXjQeWnJDMitd9hCb9qxeud",
  "key11": "2aeosgZFegftTu3WraCKTGrDmKvumtvE4cL11RHn3K2DDBTFqKGkKf3NsWhmBoMxUfaPGdakAiVkn8JzRjBDrk7f",
  "key12": "4Kwb23fBEWic1BQbJzgsfucnNomAWdgR8QnDU65w94SJM1FZAebrNQUP6WJDLdG3hA52B92GejaxwdKoXB7XYWyA",
  "key13": "5n2cMqLRLL45pyVpcZqMhSC6XaSy2XqAWXZ8JmYaHtiyapZKTqoKGdG7RmBMvLEnPBZERm6dgiPHjHXjCemPwDQu",
  "key14": "23Jx6maK3VBDkqpcpET24E4owmT2A71WP2pnJnQ9k6ujB2Q6EjHF7vva9ZGcH5qz5oPZTAMuCSU2gPgScu5H5DGE",
  "key15": "2gVnZVq2AfR25SLHp2sw34PNS9mTg7pEH3nSdrWssEGJE7PRWL5mD7sFuensBiXoM8HzK9uTbELcbCivdh2Z2Yoe",
  "key16": "5gZaUdy47w23bRce9j4v6H6L5wuS7MwwQW2SySed2Ec7S2aEnpvHMJaCANC8A7Bnicye9fjDvUYzA3qGxXg68q5g",
  "key17": "5yNYkTaTMv6wnEia7kJoZUZEazDM89EVMW6cpuBjxG6QfirpqSYkAkR3Z3sonJ9HQ3rtXeRU1RxuZ2TCALfuq7pi",
  "key18": "2QBrVU7bTwrfhCjZSrSua78XdmuFQauPex3HvERohCMXA7tmbkH8LS5icSzmffKbSib5dMDuh6tfM6fuicm5u4nq",
  "key19": "5tJozWYCPZZEZa884rGxBh8fSvikaHwsMaMRT5uBH8eu6BffyW41bvoeAtrxYj3Aem87oKaq5JPTf5zM7hvqPqcb",
  "key20": "q7VpZKN7tLnZteDymNKUDFWugpAh8VcXJfqPUAzV86X39FhyvAbQVjfQbPGkiHdkGKJyzfmJQmftoHmBXtQHzUw",
  "key21": "3SWszAWdz5z6YvZqJjRyUXJxio4Noofbt7jkk85hxTqrYUjsdZUyYZ1KjNcoYm37ZJf6em4ZRqNdtAZDggsJehdT",
  "key22": "28yaC9MwHzf8pnD12R1cRFQRYxzBqchb58FynE4wUCozZK9GbKaMvwYmSbS6Fe73s5W1zLJQyp7njBDCTajS6vmZ",
  "key23": "4oDq3UpeFZPap83B7rNPpFcCFTDudLP68M1quv1gQiQ3bXLcE2FGEsF66dh7vXtqbL575YazM53wbAQ2bx862dTU",
  "key24": "pbrvJPLbrKc6BGTxW8ojni2bkxHm9gDQo81VF23NmMghNusYfea7JFQe9ts89DTdPfcH2KsgdScy1xtyyjTNjWz",
  "key25": "5vMiEK1e7kaYjurxjUwPPUqR1n461th29oBBrgrWj3PNBb3nkYPyy3g1ZtU5UJcmF9EU1zrsvsoCXEJhVnPNq3sH",
  "key26": "2Z8YL3Ck6Phu7iyJYMjAFxpJ4sm8eUJ1oUQFEgwsztLh6LqfZffLNf2j51PaAScQyTVuTTU3pxRdUFzukfjJjrKY",
  "key27": "2S4xvxGDkemVZEaobNfGBDgEZvMzs3du85BS4T2aJDtim4Z1vCZ1bED9r9ysozCaxkzzbmU8epxRUYdzWLBQLQic",
  "key28": "4KF7NCVyyszdh1ZyskxeFCCZjwSqX4krZQZDhqKccmmDLTjNSvNsAXC3563np4Cqrtn6WckdQuUsKcZLoWYwMiGK",
  "key29": "4HGmUVdCdA194BrfPNXBuYvNTLtCNrBgRKonbbPb34dL5QSu5oqM4dzTMx8JTYRXmc2L9gsUnJdUfDRdSnuFJxJp",
  "key30": "2u9hsnnJDXTzoNam9ZnRXzbY9TL1kgf4NXgA5mCcuL3r6Vx5WbdCL2ZBdpA5JveA1AKUKzeh1vpLa2Xsg4co6Fru",
  "key31": "4nvai1S41e5UAatX3gm25W2372EoJYH65LaMXnv8jpk4aLFRVGXS5HnRsPGCtQnB9m5P1x9JUvJARqEUyCTfDmq2",
  "key32": "W5nqe9fjF2Yuy3473JJpaLFkT3j8L79KE9rTp2yrGZXeZGz7tUj9nWBoQmzJ4QJAmCXkezKzoC5js1ByfJU953W",
  "key33": "HVcbvePV5qMReeHeSouCZcMwXpyzaeCKfCTVCZ3Pp8DAAu6HAiaDuWHSTzZVpkkMw8Eoq3HEEvqC8gpmafCArFv"
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
