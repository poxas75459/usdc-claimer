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
    "2jZr8E5zNypVgcPWobice56e4AjMCneLu2N9zSoLFJXhJijgt5sJkPxiPfDrn2b22yUbBftfCaH9RKiJHgYJ5f6j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tsAqn7Wti2rNRgAxXHdzFCXk4swGX2EjxqohiTKvmmry3CzSFF4DwKnRu9n8gppbSvE75TPCxxyRgNRpf3TGjbH",
  "key1": "5vAieV4c4WF9BPxLGPfGCaz2tEYFSGph7Aj6g5GjLEUiGLtokPUTcHz7u96vZkCdJe7pgxgsW4bddTr9krQZefNd",
  "key2": "t3c9AqkzNJ52CAVSTuzsMQM7iaZahSuNdgZE9hRZhuQ5HD8Ck3ppLgZTrW8B3FA18JrpqRjSDrmSEgGMyZJZSS6",
  "key3": "3szu92a7isvYR7wkDh5ZQPtggrTJbG2kzpxRtih2XetCJ9XA94crnY9CHXzodoy4XoYLfAzQB8ZEvnzcS6KoLyCw",
  "key4": "4EYk4cPwrsfRHr8LEpr6JZT9tbvDWDfzWzJzAQTQ8ETUq65pKXgsnEYqHt498xVp9KbGwkjCVKR21cPzj1nKkxZV",
  "key5": "4A1Us3Tyxv7aGrMohJQSFLgianvhTmpzxYJXopr6jMsfESAMb6nUyJKysrjrAAEtJWCgS7MQGxL8GmbiWtXLcTvq",
  "key6": "4rWurSTtQ5zWTfnLdcetwpy5gh9ambVoJwo7H6CUw6ADrGWxP8QzTtvuzTEER2NcmtoP8nq9mdv8hMRF5y9vc9rh",
  "key7": "571Aaw8QX1NeVYr8bqWzqRKSn3xAQnCLbu8cEEQPbCiAu7WA5y9Wt9hpbb5ax11TfMe4fVafcwAui8GKLexfqKFa",
  "key8": "aLamYLhq5SwYyGxSseyiThdLLwKHUpbVAooRLpGNG4wK6Vj8Cc1whWdMScwePwB9K79xYVTAqgq2TjCTaRhTVxG",
  "key9": "4eAYLBhaJucnHkPznYiMdwq4xXChpUqXBjR9CeaXuJoaxiaCeRWqA1fiNVGdRLVqLnGrujptrvNmsXa1zEWU4XSw",
  "key10": "4AzAtP75gUEHmRwVSiHoWKu9RfuyJ3uRki9xKZ8MJZAMtEAsKM4BcEYmCWMtyM9RcC174Yeqa4ZH5BShTaGU4gTh",
  "key11": "36eaSY9CzuwKfX3rpyCeYZn51AEFiTWgfkJu3JSC1Tt3t7o4uHVMGb7GxUd42yAytMQU4S4B7jPf9yJKnu5WY3sf",
  "key12": "5HQSbEU1a4rSnvs62aUsK66sNmPmveH8dq9sR1qoNRig2m6xM2rArz5BjNZhC2CwE8nei9U6kW8fnFXW1vh5vYp7",
  "key13": "2cpocJ2zt2ZedSLQwtZGfo7UHFknPwnezJLmtrpUu8n3hducJSqdFFqT3XYf6f65HYBZ8d47fE5CronZqNtewhYJ",
  "key14": "3Xv8UkuVJ96XW25E7oerwsqMjmhVdmMqAVshAFFVxuAQpWRa8ChmovS7eNZRDYvycnkqXKwKDTBwGHsqGWVNFpeg",
  "key15": "2VELnEiyYnZS74yoe6nXMsUVm1gnJbY8kB8SovwXG5px6gTC7woZ8uvUfR6BvaAGv1i7Sj7uXv3RW4qFwUmJEZ8R",
  "key16": "7m2bmEyYHYA2Rni3AgcEW68g8pgYmkEtjyo5opYSj1aYS4BdQxeCg3MhnGSSdHFhv812iYAMAH9dN5V743zXrqb",
  "key17": "2vLAGKrAQw1NtyehE2pS4BTE9QWNszk894JAwCUDreNpwoZrSwKjVsdwy3GCmzuGtGfq1yL8eJPPBfecNzjBqeza",
  "key18": "41oSS8fJTwt32RGcYBTaRovVcpufTBCv6wLo2sgmECw7SfJwZQbwhNJkTPPAwHPKoRPsCzNBEfna1zvaiSQMvM5Z",
  "key19": "4oU569w1yH7ntEg3ZFMgn9JH1VUGadxHJ7SyyJ99PjBs6U5UjUX3SHWJviLAMxq8MLZdoEcJEEKtm7xm4Trkj3tT",
  "key20": "2wmTjjNyutMmRFVFx64a7TdNN1zT7n7U9vQQ1RsHr88xv24b3KbHUrW9UamP3f2J7LUsEWYvojMfy7dUoByZpogY",
  "key21": "2rbDrYonho66Y4D3Y9zsdwCFhUVZzY1MCF7AucWkW32BWMKaXNyGHKH4pYYzW2YsJrKMDJfEucW5pyeSSWqkPYFz",
  "key22": "nZ29RBR22ibPqGMhxh5Lj8mwzzKq9LV5xf5pbs79kK9xjfFt7xovwaob42UGdeEbvcAzGc2Ps9hkXh37ebXRorG",
  "key23": "5HHP2jWNVFEtPxoeWZFLDfuxzqZWqvMNPmowHU5KEcs7seTuEVxAn11LzwdqBJoGyvp1CPvy9M6fXwTpHdfqAzii",
  "key24": "ePJX8nLnWgmFqn3ixZ5zcuDsjQdZP2NsUo6BV6nbNymAa8FKsvdL2CFVYvCs5it6PS4pD5SjQ7koEY1wzFwTWJQ",
  "key25": "29Q7pkvLEXdtHLRPy9eGPUgLaai9uHDWGLdox1yhiJVDgaVaPKjv9WAroc4fUZ9Eb3hMaxgB1qyzxE64zT2CDEEW"
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
