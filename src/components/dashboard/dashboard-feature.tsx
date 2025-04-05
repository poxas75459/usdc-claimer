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
    "39bvsWFFs1d7LiJF2vY9zfb2T3RhUx89m23UoMfJNS75PK9TAe6dceiYGfHXwu3r7J7ngKgr5gWTnJdbKfxYZUu8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "213ozd9yQTL1kQL5AvCvwdpS4Qf5pvorq3qBg1yuSwpV8Jq74PnQQaZ6XgsaTXtCrCE7jjTgXfuVCQRbs5U4Yhs7",
  "key1": "2FKnV9EQuri7VX1i19sBpNuyHocVUPnYh1n8pJay3D2pexctTcSAph6HQxShHxAWCdtUK9oQmZYbFpoV34qM21c4",
  "key2": "3riVo3LjL7ZRvJHf4nqojCChUH5KYqo45Rff97cu3YTGdoggrv5oVC6uyisK8zTwPdkzjqhoGEBmpjEnsUtNYLyy",
  "key3": "5JKRT8oQou8fX5wCdZSo5ep7njwZG2XB8y2hkGfGMYAh82RDidJydqa1P3ptvbjuJAMAtu3tTN8xvd6nPeaufFUJ",
  "key4": "ypLopeDSn4reL1hivzqtBEEQHrKCjnB1bsd65w2zxx8zLnD2z2ZjaSUaMYZq1FFUX4dKdHFadYzpVeWeqH3LFE3",
  "key5": "4QLa67BDBPveELkVK9uUU4QeyRPjyyxfjGQuzaa3yyDUaQuKLTLuTX3HbvejNGdHeUvLAZiCYAQwG6rvRVPDGabT",
  "key6": "2ApqNV8sd2pvrf4K8cRRhxFrUvYtAkVVcRwr9ZXfg9X95mCZbFfRqax3RorcpNDP9iKUA612xccwm2gEFXdVR6Ya",
  "key7": "576sByC6q5tBGFG6EME4BAqiYZGuSWDbRUkqHBosXAtskb1jZcJ5JxjuiXrgmCYzq8ba54pAEC9JuJfw5VonEvPr",
  "key8": "ZDDoMkMEy9h8QSBXTGQUQnUfoUk4JiZMs7gqWABGJ1JUP2UdjxcshoQ917SV2dqyHyWeZPPTGyRzPmNzFDUjezH",
  "key9": "5aNeXFLtR1M1MH1buaAr5jF4PxxcrbNJVZK642Bdzg6EFYvNYcpvGKzBR2zrqLPUhvZ24vhCtekR3DToRyLqaXnh",
  "key10": "5hc4nhsf52CkMVuHruerwgUsed5Wup7KeQjG64deKAg4b6T4816H1h96A62pG621tynBzCZhV76kjMs9Vqodbaci",
  "key11": "4XKfYhMRvd22jAGnhn1CEBvp91TpAsJ9ymmCoStuF57bZUCrbuR7ddpj8eyRnY9SKYS4yJS3CftBtCHaceCKGSzr",
  "key12": "4A95hjaSXjgCMZDEkd4BSdDAuu4frvzvNKADpMDHjK3JAzZPtuLAZXeXWQiLTGfCfxtqC3QuRrZaa3Rj8GEhyqbv",
  "key13": "272xiDznekw9i6uk2bRDEfEP72rbY7vraDdTii6mKcdGCeL34aFmtfz92JT2qUpXSSLqoHZ45guS34ey9U5qF1Nf",
  "key14": "3nRrB222pyAEZ6FNVNPRv2bPhcCU1iUqQ9k6Qz9HuSZ2aAa3QAKZbUjFpxZDrCSBxh4BUa5oRKsvbdasdrkE5b2X",
  "key15": "5stGNGgdpvn3r8TogxJGNNZsVVy3Uhv5EDoRhFjzhcjA2krShYKTJenQuPRQaV2FNq9dS9jkiDdpdJnrj6JSAGpe",
  "key16": "ZV19WBnRhU4tDbTcBW8Eei3F57HhtyR6kxbkqafV9ctyZxUTDd7PDVJFcr1mpD8tpMzUkEFyyjQv8mYPWrYNgQZ",
  "key17": "5FKbVXypwifAbBuTQbAHLpfjFv5FfSuZrJ2BNSC6hwp7hu42QNa5VjbN9tcbiViPFj8Pc9Mfco76jmmJQE5NRC45",
  "key18": "5GNLt7NfJHHYZTYiNASk6c45iNzCnCDKeSumtVxz6RT2vJGnuohC53r3kF1LJUhiFdQRE2b4eYcrvv6TWENceJmZ",
  "key19": "5e32PjnV9s3HxYYhbMDMPjMQbg7GLTnBBK5NE1ZWLfmjtAyHQnFMFYAAbNwcJHWAPLRUvJ1uPBdT7hVEN5UpnAxD",
  "key20": "yeF8kiVnmKqEHB2Rk3mrihbUSRdjtPSyBMr1zxVntYTjJ7RWXVJSZE6AHdAeEnkx93a5YwNUv4vBLaVtJGTePgA",
  "key21": "2wZdGudkNVhkVDEAfyTGigiLnota4AmKYSDn3vFjQZak1RAddqznBN2EE6RgcvmozdtjxKcycs9TtRAqZp1znRdo",
  "key22": "27Layi5Xv2qEVVuLogGAoRbAUDyKLYkGkbQzY6KKGpGWanaHWkeBWDxG1cpRDdr6QPoim1ud6Ms6A9qivPKGrpyP",
  "key23": "imaHio1Ud2RqMhx8VBMe8PDrsR9nKn9wuZJ2vUZ7SMG7145PaGk8L93pWm7R9VKLeQWPXALDZA3mz8WokcCYLXT",
  "key24": "3GyRgDqUqDgCDzxELDVGt7H8Q8ZYtmKoxNLHN4oEgstZZVWCje11AF6gruhYXGwrrHBKE2aepLmSqyr37yBN73FH",
  "key25": "5nURBqhEbbgi9q6mQt5NTqDRcRAFd6dEiVvd1ha1Zid7vsSsKABetaQ7Ertwrhpu6e7o5eXWK2DHnvb3P9CdgF96",
  "key26": "2dcPaycGWY38xjndG4xoW3TS4JEE5wHru6FdTnmKN3hSAVLLu7TFaJ1YNgoWYR9kp2bDehEzG6u55HKhHVwgvBNH",
  "key27": "54zzbZ9BbZ7mPkaJDao4jrZgAxF54bN2zUvd5B2nZ4crexgLfrJCLk6hhtLEDZQPqe7kb5ZSU7WddMhcbmrehs7Z",
  "key28": "2SDy5mjd6LkqQVrk9DS7yJTuUNswBAYyXeK6TLs6kcGnzpHmePve47RQod3CD4HuCWDbAYMikfgbHGLrNRFxkR8F"
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
