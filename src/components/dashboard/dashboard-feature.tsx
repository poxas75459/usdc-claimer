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
    "3nEwSXNA8CzS2igLKQFNknTFt1HZdLFfbfmL9q4smBoBnWb4de3qqjYfaTiPB5kaa2hEEAtEUNJGADYDJbt3Fk8f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63ZA5JLtL8zZZUrCQHhBkJDfwDt92ARmJ4xKHr9Cf9gDuJTrPa63bFQb7SMen9GjasmqoFH5ZwsBsLpbFbwuW93",
  "key1": "4gop4tLbnT4zN3A2xBZtVckacfenktDpLxxPNk7vHBqqBCweR2q7Q1wQC8DPCausx49edecyRaKaQx1g6qfVGhHQ",
  "key2": "te1XKbQbSan2y19pCWvUw1k2p1jue6ij6AQvB9QtYhUaigWtD5bDbYgjrrWJ9Ekvu4eqUZPEG563UgLbE63tXGf",
  "key3": "2XkUbwBmcw5AgAGD8qJhWjhMRAh1PJn3WScj5TdQRZoYbJyGhzyd74UuxdvyLf4Bb9Jjra2QaHPojJDwJPWLhwP6",
  "key4": "5gttuzNcSmVKNARugcujStTLssSVzE1CGkPTRcnUCenyQ3rhke35Eta7NqBciuUGKiXrWXnC6Q8qZK8DYi8f16dU",
  "key5": "2G7CoBdYFtmPdgYcT21ugatJJbwkDAMwhHMjDqNwgDNj1F4yLJ4Wj2e1NUzuoFdHVCUzLKSCUgMSFt8kJupv1haP",
  "key6": "32zALtxxKNosy13fNBVyEBsSdN9Stc1W9Giud1ANA77F2ZpAE7mv4Tt6kpTiA4LQePT5LscQbE9xfQWApGky6mQ6",
  "key7": "HPsuo3e9cWFvfFB6CsZwq14eQbtRhZBasi8pyPffMLtyL2b2qjv8Gdvj2EE1UrwsjwrfH11JJTYw14UiTSnUddV",
  "key8": "27s1GSWshjeWadeiSKVqwo8a5MN2XL6aFkqx1432ecuaAKjJp1X6p6M2FuMjRwxLWKrHYS2iiPSsNMBXe39MEzoW",
  "key9": "4sxN2DLHMJ1zPVe14hUsQxGPB4Fv4Rwp8UUyHjrSDvmAubbkcdtYEfKmDur8fqryBGJywzsoDMudsS2AzDUQRLUQ",
  "key10": "2PW1cfaRt8dHZDfwx6Wm1vv5NF5cCfWnxSnmzQt1dk1Y97N2FWTXTxhZwkQXqjoo2NE63h5XPjAfA56pcKMxVDg3",
  "key11": "8zBNBqkGc5WGACA1WUYsqcT6U9w4hhXv7PhWeTQMotxg3v3z6iKDtk2qpoWa72PtGChEukiBh59YoSzXSN6HPJT",
  "key12": "2kco43RmdTkL84Y2R4DLFBkjkNsAZTUmuvvZi3vikATCcU3S9W58iQ8b1mW35mwSy6jEr6CfVEXrkwwaUAW8YYhU",
  "key13": "5yjT9kfGh6sTEsgQ6uNbP4kZzF2autmV8MJWNxR6XdXV6LouzZ7WPzXKgpg4zQvWdjA7WDhB1NrWsybeHwHRzm9v",
  "key14": "2acZhrMyjHTnXnD95h9oe25x7o3CYyArSTCfM1gk7e6uQjpCeaH4bzbwitdhZnUPYP23vuYy6546Dj86jdcpTwsS",
  "key15": "3cJmPwQfaaHXq1FJapVe4VBWx8eaHD9M55xQr15VQFCcyRHvaChUJWC1aJdHAb9mkBNfe6b2Qhex8hKabvfLbnka",
  "key16": "4mvADvaiQy3VshnkkZSafxtf5JtkcwHxcVUgxWQsLjvB8vFPgHLtM8LSRtryXwwbar4yRjRStfxTVCAvz123Fskb",
  "key17": "4XSvf4Xk8qkvbGehiKBe8gSokXzNSsYcBMmJfQtNGFYNbbgvVKDojNBAPH8G2FYucKjsvms26TpSGUA4SxGcPkjx",
  "key18": "5EYtimK5wW8pV3T17HPT6WYiNgPUs7RXiYGruJUR4YiYx7pWbBdMBGXHqdHELJKZDSpoQvDvCm9WMYjpDCDiQfAr",
  "key19": "4rn3e9EHqRghncqFJRTYp9H3UD6WbG3s22FwbKz1JyVdJbhshBktxkiESKfqqMYPU3k5zSpYbZptqrUR45Zfi33G",
  "key20": "5TFdfHybs4LQf72YN6JcaN51T4oYMuSxxKuPrDRsKgLiMepMkhQmB6JmurgQ8x8VkY2QkheF5Td1d5ZmidaHAkjD",
  "key21": "3gWyVNPThBpJS7SSi9MEqQWtnRreJKYGCkQwVuExgfBcBAQx78gH5gtHkp9Xhhkpjy5p3mq7LMGkHZxyRtZdMMVk",
  "key22": "5376M9g1wNcSd1d4RTknBUynLBE4sveMvTSXRFodtX2qEpwbvKuuBPDa8rHnPq3oNgvDdng4y4VBQWHR5FxZ668a",
  "key23": "3sJ7cEUDrsaQFMsCR9TDgqwGH4KvBjU87iE4JhBFpVKo3gSSuNEUKSAJiaU8u9MYRXFy5LZi6vC2ib1MSE4T3QoH",
  "key24": "4t2H4QHn7peasjZ5FBf4wGX1a3CvhYYcnHSWpZ7fkwkZzGkReb9Y5KU9Q3wrmtPEU8PoYGyaNqk18taSZ9GaWVqh",
  "key25": "2A4eGiXFP36MjKcQnuwYmaqWNN3gbcmZryG89KPJRXHpackSmNsLu7XXE1Y6djRadzgkaHWjo81QoEDhJXeS9hiA",
  "key26": "2rEwFCz2WGKdvkuFS7sL1V5eyGjPMcd6vudPBgJinCMiV91aP3MUABZJNU45TPx9J5JoC27nkdAw6ipRmgtPXnrX"
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
