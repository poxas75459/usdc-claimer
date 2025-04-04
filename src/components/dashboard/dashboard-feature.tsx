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
    "4PgUxywDw3DnqcowUW1rKUHN8htyxq5fY5SZ7UUxoVrt1gTrsjsdbeuncAbt5rrkqhFUD1X4j1RjLWo8NBsMuwu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HmS8NRjZdy7MyBDG6vxUE6gzAjWGaS6hfAeG1KKSihhW8Ypn1XeMPE2VZQCtSQ4RRAkdq6HeioC7z6Yvckm3Tcb",
  "key1": "x5d6NDH7s6h8wZFbn6CfwjuFkM1qZosBaWgH3ifZuspSRvV5QnA9DFFDaR261tFN5FuAA5dibPoFav9RF2tbKVP",
  "key2": "AJN6Lq2G7KSQ36UFsynGwD6tJmdr8HWBrcEcs5MQw8be9xDKaR2wKSMUxLRZXFPGyZYEGSoME7f5BmBH6hK17yY",
  "key3": "xoQZy1zvJMNEdNoJXfWhDz5urbx6FiipGJPCPBaaiBUk1md9wtXwiLXmTYirAmYJZfL2MYjwypd8LzYJ3Emk5fZ",
  "key4": "TFCW525wWTZcsZaDnQvNeRmssdr6EMKMAHwuLHpRtMqM1CDSeRuUGmetCmP16M6gDWAZrEB9ksq5sdCXAX5mGEb",
  "key5": "4cYgzh6RdN3fFdEKcdyKHbLpQW5J3Nq9ty3BBL67Khoh1kL97Ek38JRqspptSMLKf4oewgWVsPteqWbeBANJ4pAF",
  "key6": "3ug4HNz7d6eKjSUCkn8bJRw1cQ3foQADnvjLFExLVo9wcNLGLjhtjQTgeCTfJmJ1yTDbVXDkGVvfBHEZMwKnyLpa",
  "key7": "2TRcRRFiGz8HKiSXcLjHtgJRiDRnWz6aJe1y6ZnPYNMdy6KbaX1Q81RdsyFCTywYNkivadRaTicfWoPSvc8DqLSQ",
  "key8": "3hfZu3EsvhZcpjMFHZHUHkjVw4btjesfanzdGPX9NpovP9JNTb5sKhQt72sKR5D78F3hnJNx9XKXVKm6FZMTWLG5",
  "key9": "3QAfpC97hbrtFxA8PhjSjqHoomnTtWp6oADd4FBqSwWPsT3CrpS1VJmobyYjWr824cx9JqjJXZThBwvCnCCFyk7u",
  "key10": "3wyWcLvaodHv8ZDqr45gyBmFcrYu2F6KyfytzXUkYka39KM1qJmYaucRwzesuWo39K9WCVcqF9DivmSLUQHS6SJ2",
  "key11": "5TwXreVpxk5K1gXtFawGpsbeEjqKPWmTJtNTitN8Mbzxdu3tKGVi3C5b8fRCSitqZY3V2XQ8LPQd1CsMZAjfx4sN",
  "key12": "41eNgtJQqB7jZ2XxBMPwEU5u5Zche92N6DTYVDg3W3JwzN6Vt2hNxHq3gfdwLVP4Px1UKs5SYnYT8QQXqyu9dsUw",
  "key13": "4hubkHHMR8Pbv3z2QL688B73KAZW3mY3AM92kRhFRxYmTCNpG3799g4JkNXNzUmPScMAJ6yNvCLVesrbZjCeebjZ",
  "key14": "247xJRB1iZTWgGEv1GPKZiav1wJY6GzMtJcEUmcGG3XXQsqR1KEkG1fBamwtAH8CeMKE8zHWu5NY1AZ5HQZUQzbs",
  "key15": "d9TxMTBzDhwcphsjZGM4NbPnjqU2mUTcYSSXESkGJihntsSkUm39Bkry4y35DPYdY7wGAtsNB5E1s7gznw27pMh",
  "key16": "SdSE4XVENyjoWpcq1XEBQFkRM6y9Sju583t19kFgunvAQanwhYzt78Cm5rJQec5rzYm13ZyvzD4BAuZSVfmPxZc",
  "key17": "GL4uHDXX36Sx5Bkr8KwZtLmfYgLN1DTk84UsuPwgMpu1iDtcShU392wJe4h38QbeoMKMhNdXcaS7nb3b1xYmfnA",
  "key18": "38uQmLhPVdSk18P4HjU6SupKYqdmvq99HfHDEeocuycAENj6n8rcrGxdta4bZVxJXgocSBpyao2zsdYJ8wZdqbuv",
  "key19": "2QKRB1QTnomiziQcBYBrc397kLRXr29SdFKU61f3Jb9wwABBS2LnyKPxdTkQjT1t2tfzSf5DJVBuT88xByYaddyE",
  "key20": "2PtjaXgSzAXo5pPLHzWHLqCKM6KdwxDJu3mADK5UBYNQ6gAh8o1M9oDtqkSgeUzmFjXLLRRbWrUjRJHWdp81qPXr",
  "key21": "3faaHbAJorEdMQXfZg72CjbMPP48qb29VoT1j6LCUZKdP9dAz9g4VmqEzAbs7oQvJo5GdgAJhktq1EAbPA2zTbJZ",
  "key22": "5njWhGCKe9he2Urj4DMqZhfDFhfRHbRh12DHghdvq6QRWNf3S9yqrJWDURXa3DZuFAcenENm6QEkijFtM7b5SBsa",
  "key23": "3qZkuHR3oDNyBroE69bP9BfFvw6aj2FUeivAG8JjnZca6p6Xtm1EDfmnokkoffcE6RiBC3D7E4hmgdBy8Vg2aPWA",
  "key24": "ZMAeFZKDqcAL2MrRdm9oUoGb5EmXZxTt1izmECM3qH5q8DMQsyKi98rvoco6wt6zfgYg3aCBSZcLu25j5XLgAye"
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
