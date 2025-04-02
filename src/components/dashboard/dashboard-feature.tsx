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
    "48wYqPnuZ6FG3geFV2vABbvDqLQQuu56otkjPR6BfTu61AyetpTFVFSbN9hWoruGQbB24ULXWJzk1Ezp9vTtQYrJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EGMXhF6x2Xace2hLCMsuvWUxQo7iaxmxWadJjK7tuzLk1HdXR5AKTEiKLM4PUKNwHnyGuwdaCvZqbtmEdkaENAz",
  "key1": "5gcuGyhsVhdNWojE2xqs4mUZ38M5VZERd94NE33JZBvn1coaobotVLPub8NptUkviFcC7PXdX5r8WxH2Bg8HgCbV",
  "key2": "4deuEiE1ws1J8cbAku1re27fYCLPsLfG54LAbGijd3fDqNRe6cT2nh61VYvfUJWDtoD1TxJwQPK7o9YjT1tteJH3",
  "key3": "3pxxJzC6942rL6YZGPU5wDX8nyRd7Uw2aKpweXiNwNFYZCzGgqhiZQKDJd1eefLchec96YvgjxWY3XTWmdVtsXyv",
  "key4": "65YKs1eviTAhZKj6GdB8jr6YUvxR9VYL7xcrtp2kNTCWLoPV8crqLCLaivi2haUR2GYiaEejpqSLQPg7ew598f5L",
  "key5": "27d16MpmgWcFLfcMvb2Jzo5Y8GCfc9fNRsdTixygnLvSxMxEcbNUMUAhg64QKxW78D2hyRUUJCeoabKFH7JoYtY1",
  "key6": "DcBfkCGcRxnMQFFZPRsiiWpQFeFADBzjnEBKod73Z83w5KfUEuQ2ATuZXPr6bMertPsV63QdPESGeFuk9ode3jr",
  "key7": "5DxguYehinnb7sHngk8ybcawVHBKRK2BqvWZ3Qfr6bFHL31oZii7KdCPCNEv99rZrLQXwKSFjPneZ7JKz57VN8cU",
  "key8": "39sAjEy8f5jX13ws1Sw2fCyDpBtXREdudTD49xEx2FT9nqtwodMERaBSzop93PxxF9evrgUW8qDMqGFR6W1UaQWD",
  "key9": "j1ApQgWkpdVxrjN873JHn6EyPK2mXM7UmTfLP1AsvXm3TMSXn1mWvFdEyszVgY8ztX1s8yJWsDSrpREEc85kY6W",
  "key10": "5cekHUv1jfTXsrx2G1FSrN5rDqiaW7GE7uwFEBzkEqiuMXV3YcVfLDNH57cyNu9Vnk5pJTvr4gzke4Qu4KeUCnCG",
  "key11": "2YWdxbYH2q7NHsCrqbEtJpTv2EF5BzMPo4SauGCDhCBafNoaU2M6aLXb12Y2UNfWxesSNRzCNQETRMGNnag4CJ9e",
  "key12": "52tULtKC7roHQ4f3Nd2TiUjEzfTdptYrHKbuYWxKKUTKsRsEDaKeZVbZxFZCgpaZqjjeKFQP3mcwKoVCPhNSAhuQ",
  "key13": "4gwdPSiNxnQGAxn6XiFTzasgxNsEDFqGcMLYnjcRxsqUaR3C5R758vqqoNpajUMyzYDaXSXWtBxCq4kXCiS6A34i",
  "key14": "4ECCZJMQNyfYaM7q9bs7Q5MSZqPqRUNBdzvcJ2CkkMMd8RCXabPudhhQiTpK24dMgX1rzEPtGiMyyHNqVrNWW1P8",
  "key15": "41C5bduY6CjSNB9er6C3cVV1FQLCxj1LLci2jxgGWY55HU2zvQeDQJCodqVbjvFxeEtWHmrKdeDAcVPfYE6xJPRu",
  "key16": "5icmQraa83RKPF8kCHUtudT33qF1r1oNH8vELnowrAW59pmzET3xuua9qdp3sQj71Hqxr1HPr8yT7hXeC8DNBT7M",
  "key17": "5bnRuvoJikzjdkTV6aFxZVeqsa58T2rgYCHgfG5WavmLcbRVTHhr6iG6bGFnRcKQsZ3P53eoM9F8RWexY527hydu",
  "key18": "EhT3KiHYvsae1KAMQzrgLDU6Hp9Bwvu4uxmH9V3pRF6ndD5SWN2JbAZd4LcxCqRNUVZqDr545rLEFfyTeSap4eQ",
  "key19": "4mDE7QVjCFod778bQcpMzs4DmWJFptZDxk39qqpcvykkFyg67WXh2KQ8YrpYEdWiA99DtZJ526evV7teax1t1fhk",
  "key20": "4TR75Rsb5q4J8x7SgcBP9Fg3TbvX4N21LCxF8bSqZUpfzrd53s4zMfMQm5QVcsxdUUP3Mg2jxu71xpH7x9fSBHJz",
  "key21": "2fjhbPiBkJnusW9E6dbD8XWDG3xFQfx6EpoxZmH7EEo6xNR3r7JJBzA14qeL1eR5qqWpyUYfr6xbJz3ycVzK2pMc",
  "key22": "2nWskpgevJ3vZ9GhVGBSZKJX5Nm4A2LCsWNFSdoKLD7eiFfPVjRbGMNkQDVCumEMHR3YFXyHnTxjzwZn5mrmXJwt",
  "key23": "GfLbvnAeq8KLHeqZYLmYXL9QapgcByZ4eoK4G1WsxKbDdrLJxPuDa9mVbpxBWeV3RdhBRX2e8xTPjQb8usqm5AY",
  "key24": "3GzY8TC8uv33c1yj2qT6fYaJRNYck8m5WCH454LW9LsCr9SUP61ja1C7wsZNE2F2yw2Bkd8xZRspa17kbS8sCav3",
  "key25": "4xsVZPtm7NGkuvt4UgJQ1wUUk8Qgg1DTTdV98D5DEqQJVCigxu4oT98r8VZVG8aR3hpNNsmMm2NZ2FJTRFsKWAx5",
  "key26": "4oa5cZLn6hXBN4fEBXq93ZrQ7fPXdANubStbeCKLxUL5gdKWC5dsXS2T2mfthKA1RvnDNMs9hDc1CCcVw5mm6RFA",
  "key27": "3S2vnmwkeL6oGRAPWrXjfzi8boe6mPNYRbKRfvFJcRV7WQEtgJmnbgTSVqLN7mYkc5NX9XCQ9y3TCDbXU7dYJ1Ay",
  "key28": "2x9uj6pvTeZPAu826UWaiukHvSs8keGp3GmtYDKiqrwVsFuHhGdqThxs6jS9BmDjohYDCtxsWg9VVm3JeQH1otE9",
  "key29": "4SBoZskZ8qtS97tHfNRwJexDHk6tcbfZJi8DQhFBxXenMN3H1K3ryL3Ze4puFEopcjTF8BPZu5uCoLMgcVDvrXRE",
  "key30": "31AUNv9TqPS6BfamJuZZdDxVpSX12QNgrrx6tSdohPjcirPyPqJrTjYbMcEwBQSshbxforiHiwwsQ4h3jR7DUK1M",
  "key31": "2oxJcrxPaaYUFJgLNdNdZAURaPPMk7K9hL5f3bE3orQdtyfqbdf4UkMWy1eJVACztqiBefSr71KbdZ36SiD5Xsar",
  "key32": "5rmJFBf5rmAgU2fqTzqqKkCuNQM2jPrAaEXiV8TGNGZPENxJMF18uCyZhg87GQU97QhtE2q4MxvPeXyKaxg1VZnx",
  "key33": "SVYmUVUmBcAjhu6K6gHQri83s78PJ1ogmA6tMgj8ywgpQw3sMPoUeGcTcwyCD8XeLNsvRE7UaAk5eePCCEX1JUe",
  "key34": "5qPBmsgYuPtV1WCNZwtJ4HyPY924DyMHgJ36vSAZ8sHfDE9eCEvgVKaCxGM9TBamshxuqWXbvibjP8RRrQ9FGC8z",
  "key35": "634ydLDMK3fGdUiNZEEC9Hb7e5EDgC7EDtfMfztU72hKYsTcWbx4VSeuYsrVCBmuFwWb2FcMQ2zWq6pdVJxg2XJS",
  "key36": "5ybqex6r3q5mAWUBadkHnGUUYCJZzd5jMc6MdtY7kApnVyQAiBdtTyT41RthsjWJ2iJNBdiaQcBTVjBQqLwUvQns",
  "key37": "3zssDdgdhhWi7k8UpBeut6FCNyjzRCbTs6huwKpnsRfQpPxAdM4GFjxct1Es4PZXDHcmmAKpkV1LqxTgLBULwKVG",
  "key38": "RHomhiV1CUzRgvTgWkGrJ12BuKQrZTWATen8eU1nfe4MmhVY23c6siCD78Nd5BeDcPgaDNV4zcxrjRSQwsXcHeo",
  "key39": "3qk64XBwCSSFHqfbqdKdZh65Bcg8mqw5JVfyAKq83ojBYiGYnkUhVd8sSnjKscgqYcNPkqkhsr9edMzBnMLqfdnL",
  "key40": "3p46ZssZxmUnuRVRGdC8eYKx538sg4kuQMPZuM32EsfWUaujRw1yRhskvFYY9b7WKA7i13H2TjZSHuWBRht1qecx",
  "key41": "5yekoUtf7J6Am9FoegvtcGiULhRpqmSqZsXxQYWAe1vCTGHX1mRfHDoVtx6Xcx1pcuCfyWff7F5g2NxzdJyAbdzo",
  "key42": "HoPRw97FQNUNrJVVLAeTXAJrY7q1kMFeYvpzszHpC1MGMHk8wp6bqGT59ip81nHj539zLeweniH5dsSEyTvW1e6",
  "key43": "4outtXYNCRt1ApLkXoPdS1Sjfo6xXfaQV7poFuLxCRL3yUKLNbvNcQS1qQcHm8MmiKn8F2uh3nAFBV3NpWQTSXxJ"
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
