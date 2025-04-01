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
    "5HyFCGyrP4rnNMCKzXzLunsnE9n7GwQwHpgqeWF8sAdymrZyA4rHcZrTmKvmvsrbLSmVoVTXUPfkKygLwwHgFNam"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cRPZJebbHR1yzVRcDGmPWVTxoQyRrKCr76ZJNyR3fpvXBFRgDtsefzX6yFybvHw66JBhVqfmF1AiaUsoVbkfpE8",
  "key1": "LDNfWZGLeCVKdEArkqXqSwgYKHaWrj7JsgrG4JujvX5bohrDNMdQMcVEsvTwqVHjxsmSL97F31QjubmFSDet4bf",
  "key2": "2cTbE4jJ2XvBp3Tw1pY9c5LbQ97E4rhyRNdSvZKvrfuEH3wMftQ7Nktfzu3pUWVmYxmpQ9FQbARwk9WoGNfGGNog",
  "key3": "nJeVAhYL1XB2GbMPGZSsViyvhtnK5mRduZ69kR9UkdxASfhRkP8RKnkBWAvj7QrzitPw9KHdmeErnNqX5w4ZFWM",
  "key4": "2xKkR1RBFxYz89bEYRK83bjjxcSGbhmtoFy17fmiPQKNfuw9znmrkxiYfBVDYD1VycissZ8e55fZMpLsWWA3FSrR",
  "key5": "39Vatdzrj3zH4861Ui2nBxRtC7x3NT9mKvAuxCyXCp2jJmqgPA3NaKMdFcM8XfDa7NP88RuMpbSSuCtR8DPRADP8",
  "key6": "2jTbQGtdUtwrPJ6XQhNK3jND83dYPL9bG79rQkRD5J4RuANzAqV4qF9nPoZtQ448ZBCfDnbjqPdvP8ioQawJpYK4",
  "key7": "cam9RNY6G6TF6SXawCUSNmffzZvErVYFn6B23BiLf9crVFeuPNAPTQG1PFyern8ZTCisw8JL1bHeGfnbnLdiWsE",
  "key8": "3CN6eB7bUGKrpP4XgYwTZnjwgCT6vDYe54NFrTpzBegz922cxkDQWjCf4L3BpsPFN7y4crpUYjXLUh7eLcXEC4K2",
  "key9": "qCL6N2gigboYXQeARRyUQAuibDkRrJmVsbe6sCFEGPUWNNAmVjiBd5AzE7CGcnvy8Z4eEqKVPCf8m9hkPE7LTf7",
  "key10": "4D4CESmvSanY3Nqr7AxXE7UjCzCA2Fc25o1ze3LNpVaBXRn9kNhpg24GZSANfCNvTVZbwuuqWkd2YM8tDDSpo3ar",
  "key11": "2A3evMDiJEF3SHGv4HWk2qT5Uj2aYriBYnDMz6EYU5nbJ2U7BRoYJX2VVhdHvW4cy8uNsiPH97ThPDWK1L6f8Nhb",
  "key12": "i9L6Hzqz7b8tzEGUsrAwtCrYs1T81wNyPfp5GmL5jth4toaEpQiahJ6G45ysFGcKEgLTTJ4EZQ7tV4uMZEKYJhx",
  "key13": "3pPrN6GaktsPutYsxc3WRfGEuUNLRFtH6ue4zWC14rkjuxdUFWu3QS2fWKW823riSyoE7ZF4Lon3UiGBKhPQ82zo",
  "key14": "3BSacTu8uxHT3cAEEQy3CTZgYqZLyCsephar9bSq1RtCsUDFM5xAbHbz6tLN77arTB7VYaSXQgybsYNT69aD3BZy",
  "key15": "V6R2b6dLBAR9ttdH2WEPgBCBDdL7kEijLKXt2efBSpnZKGtn3XFrQ47ExmkHDxJmkHh1yYppJf1fEVtF8kyToeR",
  "key16": "rG2iBwGznefUeDgyj2DxZpDMtmx9bfHqjadYyS7GrPoKMxfjHRUi2MmW9h1geUJ6YkbvSNy5yFNAXBisor1ZFfB",
  "key17": "4VXosUcF8gdAxZe9Y2jadHvUSg5Nuw4QvZHAAEojjid49mbA2SJVLAgqGH4NpzLggg1f9f4icXAbfAiEUxVDWk6B",
  "key18": "2LKBtdkX21u1JWh6L2YmFjZpXLLNp8PmmgRbmnSBV8wx5yLHL1MMCa425wYKBjBDMqKc3WpUJWwKRBt4H5c8vcAJ",
  "key19": "5uo7Q6s7JiqGSbLm6v86qVypHeigd7PTLWxXdsHiErH9MuCB91eN34T9Z67GZ7GDFh3L9DoYAZ4GjAAdpSx3EC1",
  "key20": "38JDFzQrKE8J7P66WJwpZaWoK4c5mfPe89xNioYcDsy2zGXQaVuF3GvyGU9WTcNywnZsGqxWK9V3KnFkbYabXJbc",
  "key21": "31ejyLk7cdz3UGkgLkHTNQNWD1DM7xd7KnekcT776hs46gtYHQhLinYcDKi7UKTQEedLDdhyWEPfqC2c7J4DuBn8",
  "key22": "1gyhPzesHwTA9gm6eHEjASbrj8wgy7KKHpMDLMzfEJHSZxtrUsVfSifuv7RuBYtgBsMfkv6Fmcphv39MhZ7xGYy",
  "key23": "4SG5dsQ72Fxu87FNuPWRKDSmiG87PG4i7SR83iazDAVSe38RP2BcZ5icpUQWzk3Xa2GDsJ38WEUXPMai1j2Gubwb",
  "key24": "2HZ6g8jRyufdLSisnLMfwHULbn5JAJA2vCfnLiKwxmdp4DDZ6RorLd3fpnMLxWbx85iiJE38rRAutEyA7xDSG1BM",
  "key25": "5spXaatFVjCMoQwb4q2syiJfNmoXPUmjwxuoovY6NVJbEGi4JZkRp3wQiiS3jViako8a9QHrbQ2ATHr6RXQnbucL",
  "key26": "3Laskk24gSNgA9W2tsQxeW3nb16WeiwpPwuGs4iHtQ8XJrNoxUmzkKBktmgjH4iWuVkgj8jHMZG2VcLESTJUV6yL"
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
