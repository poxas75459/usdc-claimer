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
    "44GGZ7Lkkv5PATZjfsbsejfQ7WdVexB24qtct1PGyzaJce3Fk987wroKVibvG5AbJ2HGAP4WuhpbqttEGZwsLybt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KG8vmdSySt8QbtcfwSuApjpHLMs7rdSk9odzUV8zB6ePc9SRd6uS2wo2Tmj6zrpDaXzRXrDG6dzZpxQQgCotygm",
  "key1": "2H2as6zsmkcbkCNBM19Tp8NKxSkoQ7n7dASWprLMyFfvxfDst3zLwYNGkL8AS3brttVCvSQt8jEhkN8daqRH4o9u",
  "key2": "51222aJt25SfWwayFhgqXEE1H7pLXGspyC6M2yWuWYVENDQ6f5pio7mminbywLPFrjRdPY4XNiQ3Rt6aTeMbtbzY",
  "key3": "23cEN8kDuBd16a3zeFqZLLmQwY3zUJajvBh8bujLcm5aympyNhBBvgRxaSWkyhUhvMnuTRjRTi7tbhSGeUeTNWfN",
  "key4": "3uH6rFsheSKCmFP5MoZiiEDczwfhessWJAfTozQixPGnLwMs24NN8SCJYgu2cvj3bzkAj8nxuwbK14eo4LAxb7m5",
  "key5": "3UXcC9kD8YHzDCKJnnebEvWoVBVGcuRLTLT1rrtgDpE1pkpF2Ncr25dPM9LVSwfTpDeutVWZ5aXkiCxiFYgwsH2B",
  "key6": "5tYoBcMGXwmZ95zbbdwqRTGpQpK9nEJwKg5xL7TxBsHRKgHZsRSEAV9TL5LM5xusYzEDtXSyFk6KHg4NcatLMGrk",
  "key7": "4C5mGtTaG8Fd4FWzBfdRGb62Non1jazESoUTq6RXHJh5rQQg1taQVj975WSU2Jn9eJb5UNFXBVyC2rVSVoToe5VH",
  "key8": "4E2vLVBooB4FA9x31ERi4QYGZzBVGJGDZbz3Po3ew5X6WxtUAZf2HCxr4Md5CqXDcQA6aPzTuUAFKHWeMVwTRMej",
  "key9": "3A1SX7T8zsRdnNbdFDDEHDY7FnJwFR1KDnN8xNPR1ggmP3SeJzh7KGLir43Krcf1RvVgBULRyS4wdrFKgdMqGq9j",
  "key10": "hWABbfcD88PUxkgsctAfzZ6b24to8zWfPcSuobj3NFqPRxcAG9ssaYECksGHWrWg48XjGFEguG3mmP4sHrBxPd5",
  "key11": "5f8Z55jNF8gGTVVKbqSGe6xMamhe48GNAiZJPSxhLnRAjtKodv1vf8LMLjDYN2gqP7KqYjesA1zE4D4KinVijGMj",
  "key12": "4uv6Qatx6JLUqV6YoJh8E5Nhb1c2MotEHsy9as6GAX3mTfTu1q2Dva3if5J6kZz85BXBoRdgioeVPjciRstbp8H3",
  "key13": "2EJv8qWfCFTGmTE7d4DfsAkKkAiSoJ7T54GGTxykxQupnnNGWq3SzJ9VJwHXtuDHFTsncWMKtuf8cGmBS4BFph9M",
  "key14": "67ByttV1Mtj4ntdbdR3H8UeKPep1QjcSuJ7R8ZBWHYX4kGqgUV6y9iA3g92K3jdkfoqvMKcGTnP4LiS8YriCnxuF",
  "key15": "4HDuSZn2vTLBSrynBiT1vt7mx7hsngZkrXh3GwTNphomrsEsqKWUUna4opwp4uTn84QD6jgH42iaJyHQA1hxGVbo",
  "key16": "3ou6gpSrgDoA8iKFRdztTmmjpsQd514YhYonaELFgMYfK5vrhU8kxpcdAFE11sWprrGr6mCLeVM3TrhYwGHjBAFB",
  "key17": "3tWLqnt1NEkqihbU3ZxusEDm8meAf9gKYF39RogJ3a1D78QyQVaLsQHtJiN5sFdnDKtLDYfXdrf9c4PqVuqp4H7a",
  "key18": "3SVKUDGmqrLdgULep49fmeTN6qrqJFCTBumbfNEwvUSD761yMtiXsEA4eZznadJiH4iddFpMycV4GViG2sGEqevy",
  "key19": "Nmsdf2jfrp4MAzTL7BDAhuPkZeT9Mc1TZmNTxtvpCC66vabrytpZxf3WCaUtzcrCUHm1gxsMxpRRj53FKVx7H44",
  "key20": "2UTvwk4ZMUh5h3wzEHcUR4x8TYZWPbt6RcGjS3VDeFUfUhb1u5h5VBLWSSg56mA1tWV71APekzV6Deo49SmLRspy",
  "key21": "4RJNkffJZM7DEQrheGynD5R9ixzsSAJqBVW88hVnvV8rVTkwRc1qzhC8JL9qrftZKuo3NRtF7a7CvnBcAAEG3LWu",
  "key22": "5nqm7w3uYxAzkoJtVdtbXGWiWm1QhNVqGCvcNaByFzzUVtoeX6fLkYM1gntnZpZ4pMZUtWLg6C44zen3wtZJs1R4",
  "key23": "61Q6hqHp7rLgkF2dw88Bzov2qBwWqntQTXHQs8JjfLqnaBGFLphEGcmEybzbmk5v7NFu5MMMxkLHfJbCGBQ4EbP",
  "key24": "4HAgSB4izzYHPnke7MMXF3sYAunTdg3RdrsRBPLTJwjE4msbJmkcgDzrFfbNty6EVfRve75yBcaCdmTCgm44eGAo",
  "key25": "5jvtfXMoQ9hgZWW9VV9AsuWWgPhbDLeNLYXa1g3DNzthy3EKLwtUvJ2efYfwfpiGkQvcV3LfB2nEcPvsm2KiPKXD",
  "key26": "RQEn1RRMyz7MHC4S9oraFAHtu8T6mDKcpHqo8VT4coHWS3Yy4FkMh3gLekYjZix2jS9ELXJzE1SbKPyUNmKLfky",
  "key27": "2nFoWYarVhdGASmgUC7bxkzEAu5XBgZBrJCmAamKeXPcJaNxKLTQyiWBdwhqZXA1KYHtFX7Y3usYmp1uPabrAKCg",
  "key28": "4C7h9bd6Wr7EVooR2dbjX2WiemaFbu2kAELSUVebXgvm1rYPaFfxkdL3a2HEE8ZWJ4KhJYU6mJtjkvYVdD2n5MW",
  "key29": "55HYgZJV8sJ6GhxBiJPjUDhPa9AssAjYn36pH36uqEqTWHepKubBT3U61cZKPHgb3DdCbkCDePcs638nKorG4hfs",
  "key30": "4bj88LJifWRnSKvVy1RmFBwATWjg5dC9iXsy8xCG2FrZdtfgSPTnqKh3jLzkEAYaV12TgVrR5qK2qp41FyERpGJv",
  "key31": "3ASkjVyuW5hF9h4U63bNLhFJGbv4qSLrZdeFWwY1YF4gfcKvPwrYmsQjHM7TbwA3Eh3HuJtpcCNdE7cxTCRkPoBX",
  "key32": "f2X2zWLJAgzvXWDaTusVNpYHWdYrc1XgpdPqgDdoiZvb2C2q4dT7zis6ZzCo3MYqXYxpAphMdKCVN5g3JTm5aby",
  "key33": "2ahVN6Mq7xZKgyNQicCQBSv3GeTthGmKiW5pG4fP1rSZUwJ3bUgrLqc4Soz1N3UPvFHLJuZJBDBr5RpbMfFYamGJ"
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
