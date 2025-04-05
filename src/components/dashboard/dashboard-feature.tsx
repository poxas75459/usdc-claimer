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
    "2D3BJYhGDZvueUpCE3XgBeZ3ziCDLzsNPXJVa2WxX9PBfN9scN5U4rrgvhTMvLCi2b3qty3WnR16NAxZfUJ7R9Tq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZcS9f6aASe7WzxiNFEGF1Z7AF2L2gZW4aCLnYBZHbD9qbnJ4LZRkjuB2uryS7azbn2fpyjNY6N47S5txJvKnu2K",
  "key1": "84Kr94jXfr6gb3UHPw5KLw3CSQHNmXCnLB5pNgugS3bGwCpWZTeRzkbfL2FimrYiE1wtFhQaKsNxFcY9V3g8XGF",
  "key2": "27JrAPiV6CtptSrDa1e6hMT94uPBayBMWNZ7M2gwyDG2rUsKZM1qVmYTVKMDwTrSwcnoKKk4r8VM5bXBRdRk8NYC",
  "key3": "4ZkCB6yW51XfaLxk6QGm4MPWsnhvPWSgasqJmebt4xSSRMtcrdjKFhhWeMP21wD2p7YFqn5pxkpgb49g2mcLP4UZ",
  "key4": "2pVjuNHVWAmXikRseUrAEds4Zk1pGm78vLaRrUNfbKzHsNkAbgLttamaboSr7mCgh6J72UMT8G1VwE87CxeHYttr",
  "key5": "KHNyxqNyvFzWNmt1PqBZ4jtoo6Xq9N6zLoiTfEDTCwyQ3U6XjGQQEYTQ8S5U1eGXmPaB9BSUNoA1rYfj3pzdNmc",
  "key6": "4GssoQ85HovPCHNi5mWUnPoHuE2nHMtHULyf9DgtR8rLej7rC5bmZCQKsZwh5oZr19oCd64jtkwYfrsbM7B3MVXc",
  "key7": "ZNDJo8XZAaTjGLTUFHrkH9GvYWV4YWaes924CMGXEK8JCFTWNTAFZ8j9zcVvdsAN5gpztdVz7CGPiNmXLg56Wqz",
  "key8": "4wGBQr7A7xJC4KkP9ZAvDj6WXtAyVrVhvefP9MmRKwNwFdRiT9ibiZuznCrE1DPmhKcE7z3pB4QyQKWsCowygDbT",
  "key9": "4SF1cGEvY96apECqhbkrCbKpU6z14ZSdLEkvgPY2Mtbpo7Mf2wo3CYxGQ1GtjruTte1GLUNwnv6DqNwxrUcPtC1Q",
  "key10": "UjdM1AxzWMadBRGvqsybaVm7acwXNVwrMVCQnj148W7XE6PrBGLSsmPJA52R9uJyyAih2jDapc5TFtTREQQYAD9",
  "key11": "2yPDn2dwWkYEqkwxdz9gCyNuNnzjAyozs9jptoHsvTDHeXjgJw4gJHtKXiZXc5RpEPrCYUx3qo4BaUZDYHoBoQrX",
  "key12": "3Pgtbq7L4dWjFywDiJDtSxaLjaCWPSk5qJoiqPmGX5J2XByfrKN1aUPDULEbHEnCvTXjCQChLR8txmKYinWymHDv",
  "key13": "3bVp7YvktqDgi74ca5W2dhpRNMkMNHtztR5wBRbXcLYCFkVmyZyLjX3VMDRJyqMyv8xBquBZrBWu5kbSPAeu5W1Z",
  "key14": "4cYL2rWhwHp6Mm3mE8fUXm4q8mcvi84ntycfhJuFoTycjsHzBMQZnWmUkzYgL7KVEsDtnR6XhkJfhSoewMiYUfuF",
  "key15": "X1tgnJwgmQ7RBbNxsaUdnVGvwYVoZZwE4fxCBtDQsvVedFs7LwYmda7SXWMAdQ96qXSkhYkoHWHxA5hRF9Att3X",
  "key16": "3yiv98w5G2GvLBDosgo1dmeR2Qriq3xvMWSDqZcwn3DseaSDefWAW4a9YqJxKGGMLiQupB7zfwqSFcqhygAMdmBK",
  "key17": "4ayFi1TraCfKmm4CAJ9tg4tFKHDhBDiEwghQm3ZL8vEfU844gyt3qtSLCQ8nUKtfZYxHMf45KQhrFiiMDtcTxvYv",
  "key18": "3CVSCJ61bdo2ryR5JHs2ZSo9Kk4GaepGLfBvomdNuukPkn8Zt4TRGVLsCaGVS9Dek8BuSTW7QhuWqk9sk5KadcXh",
  "key19": "4A1CHVbWfJDQVfDZnathiKbPekqkbrtVBsGRAbx79VEbibFQo8MwFQwLgXioPixqNcnTYik7DCi99hZ74yAZtC9o",
  "key20": "4xVWUwU2BDeLbRsPEJDmrxswrSPx5Yy9VRQgC4wUAo3bFWdjccj6rYh8z5TgA2Jve87iE4xLavSBQsHsKWRbuLLm",
  "key21": "gxbqjNmrXgqFht6cLnWriTcJJX2rc9UqmwujhHJot3s2TJebnjRHG7qCfRzokHnvYBiq2inuFp9fixafTNPgn9s",
  "key22": "stBvbvcFUKZgHWS1mw7VZcADyd2LyKqaHPuBBpvD3pPiDiNhYQPJ8ZEYqNsmq4W3A8SS1U15298mPVRYM2YCcAc",
  "key23": "3nzZyTp4QWou4zn7fWDhPFR7hNLYP2Z9mKLzGCXDwcdTB6cckzSX6BkyzwDq9qwBoYrhgderpWKTT2DWad9A7mtw",
  "key24": "2DA7zahoBPvwZrUu88H54NNZrXAdoSW2c2e87Jsbr72ULnGf2FRZD3eYcLy6R9JGXN1a8SyG6jrvgH7cT7JihMKU",
  "key25": "4bYgrRzcewA1xeWePYYF9wHLakHwm8veBF5JJCMv9ccvkLrywrnkffEwbRn9p3UKAHpGvJuA56prhVR9t8H1wCyK",
  "key26": "5eSBCTpECZRG9fpNU2igScVHZGHA6B4XbTSZhe8iAgAEd4dL9djVCfE68hbcPbM4hAT3D6EzmqmpCjG4AsdDEPFN",
  "key27": "3ZL9xSDp2E3i35AGKLoqWUKUJwwrE4WRr1xb3XEWnwbdpd8AMhsCTzY3Kb8BkFEuYhJymx3WDEdaCvkNpKdHihZd"
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
