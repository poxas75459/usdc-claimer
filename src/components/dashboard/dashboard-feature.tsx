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
    "3sKfMB3AMAEgEd6tWJyFsnE4tcJ5QuJhbmFRPfzFd9qYFN8AkFwXioupN8DFqvDGpFXariR5sNQuuabdovdCtscG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WWAjiTjiRLv59RRBqoSRJUzk4SXcRwoixMbvCoMyu8Gz7LRMLnpFsTUbQ2fh3ak4DcuNeCHSGPewABFk1BU9ySm",
  "key1": "31VYxau6cVctYjpfb3acYyU1vMUJyvcgfDv8ZW71bmBkL6B3uVBt41j6xrkSSbsP3u3mwAuXAmoL115c3Am8RASM",
  "key2": "5f8TRHf4R1gtsneLoFmEcELBTc2fkZeRmi7Bk3XfBBMpW8nR6yvgGr7ZBKYWZxCAkd1dSQ7q7hiGevpPZ6FEznXG",
  "key3": "4BCC7Jv6tAeUztT8RgM8WoB5s1cGTfnLRG8ckMGaDwfihafWoEDbP7Qu7CPGCXptcfxkocr9m3CNHEAgPYgSnKVB",
  "key4": "2c93WCaH4v8ztvsvWYmUzA8eXySEpPaCNo1mV6obg2xuaKypt5Hvtf1Jat8LMs76X5th46zF1hVrURaXxrHfKQHb",
  "key5": "4VZCXBRmanJZr47J5KKTLAV7rwcmFcXf1sYyZZbxZ6rFjUDo6zaoRWBfTXGDYigPTiyksAY7rQUbrXuWMoaveZG3",
  "key6": "43XzCptj1asQugCBbxohjcW75gJo66FogmbLoZKbLhtG2hwrBWeVj49XBNUqEFzxEdxF25oBZCFvuGB2XTQSXVqp",
  "key7": "2B7hDD3Sv4emXYLJWLoPPNhR1aPkLNKd4JZ8iuRxo2QsMfj1GirJm5gT6JWAynxAAo74JasYzKry3SZTuuJvmT7w",
  "key8": "65NN5x9ts6ERrHJzygwUMs5o4QRhEzTDhFyNzmHQ57ij27ZHxzKGAY8sF92RY5gtQuFLP3HVD2j2orgFVtdYCocq",
  "key9": "2haonQJaMqCeNESFWHLLtpPSSNw1nX59SvtQaUFKFpj5rxie4HrHtpK4M7wpBmCLG9HV3ZHLFh8as9ZSzUFVWu3p",
  "key10": "3zgA7GX315se6rNQVvsT5YhU5STQdZKtG4pmdX3MFYKwhc4cVuNwBkXvb4DLbgMxMhNxvTnvM53B4CPdkt2rwZ3n",
  "key11": "5u4kXkS9fqbvRUUkc9ZR8quZpqzyUhjy1VnmCMw3DUSzM61Unea5dDrguqBJMcGw7qBWDAzJAQkDkmZudNWMwYhZ",
  "key12": "2WRtuRm8yrSTCL9uGgL56mtXrL9mfuELRzh3GFDqRAymCScrwU7DoEvycNGSnh2USR4KX6gL3Z5T6VECuaifaAsU",
  "key13": "5X6RQL674t4SLAR5ubLnJMeVoJb3ya9twCWTbSzV7on51kHCcqfxL9zR2jDYGoSUPUDKgfgysAb8zx9GM9mxiT9m",
  "key14": "285FNLbdyDKNqzzPvDRFwNK7TpDv6nVPwyQwH7t54Uuvwz2iQEit4cuQ6K47b7oPC61ipCFjWTTcLPigCRwu1Kka",
  "key15": "2KCyLA7Mc7XfYGXCDbetVGNnSexWC3tNqdHtGDJD9KgHPWAiwJKxj5gP5RzpKDDksbg4iywvJT526Pb8XsDwwWGk",
  "key16": "3cWuwwycDQSY4CWbG6kNDVfHyDivWYw6qZJkSuw16VaHZSekGVTg6UiKLGrAPy3oqaPjhJ1QzGXnDUpYmPzManam",
  "key17": "5yocP8uHznZqcJbPesZaQ2gXK7SRQQ3pYfotsfqebPxPgxNBbgmu7QFbcnyftA9Rgqf2MujJJaFraSbXFPecj5dZ",
  "key18": "4QHvEXBT4ZaTCt34M8G5fg4v8RZmJvyjWHRCXSYLgeSRVr8eUWBs1bHLaDNAnp6wUANcHmt63kka5BbK5ooeMqpn",
  "key19": "2CgfrzNoetDYB5A5AZnMDmToJdM61jJJ2N1mYqGs4bvmAsR1ZRUey7roUvC8U2ET9KNLzGGfWPYW7xhH7MdExKU",
  "key20": "4b7R59oSqTXpR8USnrJPpMkeCDKvXqWCYxggcfiZwtDHjkVcGSnT5TGmHaxrRprfRe3UqCZQi2q5m44KBKuJ1ttU",
  "key21": "5xqGVpbDmyBFMqyKutx5k2Efmmz9tBYwu9eF43cyqiEoDjm8o7xgz8tk6M9y7f3kibv8SiukMP9JDxTjPsfB7S28",
  "key22": "3JdQF5XLjhM6GGAUVhprpJkUboMMcJEkKdYAZjiGBeMjz4gUmDVoyLeqGxaqKAkTysQmzvYTHvhWyX8osCp8Jiyo",
  "key23": "GmBxNMCDCxQqmuUK49TCtznGYdT1KfkksyRUqxJ4m9aDYTn39Rz4pvxaabFs5UYBLNQ2cHotSKdgfXqmr9K9YeU",
  "key24": "2GfqGjZYFTs4wsojkX7rZ6G3BeLHkVSqJ4YhSz8WiXgXUU4Er5UVjmUWCnq8oBYUvChikqvSuVXALoJ6fE8igK21",
  "key25": "5yBx4wEqFi93XLMAP6dxADJKz91VQjdiccyhTU6Z4SQZUYo2Bd6eazA9SwaVY2G8BM9XWk9U3UtZ6bwpFD2gC8rA",
  "key26": "3nPyZuVF5uQmKByNgEAiw5hx3KPM5YHGCXK1yNVhxENgYjAvPkL8WQcyabPm7ZjPTk74ECRqqeEUSqXrG7ai76tF",
  "key27": "586PrHjx2avFzv9cB81vcQ8YdFoEmGESURxbNbyUCRstqDwBdBPTaSiKx8hZKuCRbdUdUgcggyy7NWrUsytioW9h",
  "key28": "4x3XjiJAw9Xa9uDCZbxMkVXr2ozx3ZS4nm7SPS8P5EvpfxNdqHt6kJyN5X5i9VnCyk5ceAjw8iH32Pv17sP9mxH7",
  "key29": "3DZyDYsk87nUk7CdXQZjvyGDJue4j1NaSECAW7TJdbEFNy4NZBqwJtDxXeCpUBkvDQRFQqdzV1vsLzwTCb45FADb",
  "key30": "4xkHnGp7eTiSW9se4qdBYDxDEvWNzJxpw1opgrDQ21LCzcFroXG9Z2fYX5eK4przMVnYBc3d5Tw1jFCR2GQ61RWh",
  "key31": "2s5MZERnpBGaEs9HHY8QPbkvfRug6JetUNCQSa2B6ar4PQrL81MPmEH6ZvTCJADUKvQMckPRyQxhiBVRQATYaB2G",
  "key32": "4odF7zKxuWgSDUktokdbXvERAxLY7y1wSZidD4sDLyGexHtzMjcNC8hKJS2TNMvxSA6wdhc8igCHhwm4ank3vNFf",
  "key33": "3ddHV3GdCVGVJmwdZ3odm6ftQkQ3Yp5Q3hLSFZR7eYJXpzmNwGkQBCbc1spsSVxFg9ZJKrroL3hmMcbjUjSzz3Uk",
  "key34": "2KyPK7oK2ZSTCgE4JZo7xAU7rt1WydFfyUGma8ysxZ6bQYNoLytkScme3WiLzPy77oWkiw6Cd2dCtnX5UeZB5zJH",
  "key35": "5Ptktph7dpdKQGjUATNjHGsFDHYfatvcdhAXP5JLTn6apRXHY1ysJcPqSfjb9KPXmCNB7c4dcYkSTZrKuNbEHVvU",
  "key36": "5MHQo8VvA9YRbv4te1sK5VoxasXTr164qFyoPPbepMTcMBHNU8AUcmfjutstcHSbBRYSNcFAXNmPaNngPV9uHRq8",
  "key37": "3LqFNM1g6oxCUyTbpdPC4Fc41J6sjffjhNdDfsNbNBXs4UtkZdqApKSTWXrETitgtqQT1rRcER4BniAMjn3jGzVr",
  "key38": "4nqo2Jv7D7q1CA3stzBfEZzGiGhHrkUGAQQCnateXmwhea9og8TJi3AULkis6P7o4oBnYrXt5oEMEMYDGNkmcCGd",
  "key39": "2eSJfXtZdzWbJNQTBg85rCeGnGK9tfSfkbwzhTBTtGf48f1ACH76MS4wZrf2LapKV6B1nDzMcTojAoghxQLS3q68",
  "key40": "5AVCACsQnmY85pz4keCFUcYnyX2xa8Tq6qUcGF6dGk9kKsuew9rBuHocPZkMMkPHmCrPqDQVKEUWLkFAuLzAxTQN",
  "key41": "32kTEy82gx1WzSMojpMa34hKvGm8UEhRm82C3NT8ZjVumCYfnckXJPw8cM8musxvXpfMjtVfatsPbjhFiuf38e6Q",
  "key42": "1kSNQR3ANW8EqzBAwasmdzP3kPXv8pLXGGUwxtJnLYPqwfFVRn2UNJckGow1ohDQoJpshxcsyRWoVFRbMxtUHSZ",
  "key43": "3zvh8oLdQJVPtkdMiKbNZCErvq6ddLLAqZYeF6vfq69JiuupQraH3kmovxX7CByh68TJTo8npTEgVoKLfcDVmwCF",
  "key44": "2sJnb3DhpSezd5hqnNmeMagK3X5psgQmTLRB8X6gsPcT1y7VHhtZ4ZLX75hFE7pHmEtSNxEEQHBMzJHCU941X3P9",
  "key45": "4LLuxf7tjZyteE6hET1QUyrRjLYg16YfRZWRpSNCSSAjVkbs2xjaNGHWjLDm2rxUC1aTpbi6tYdESjsGzRZwgqxv",
  "key46": "2KbdD2vSvVsVgMCYsfe5QudTKWXSPzkqt53rFegr1kvcLX9gKkRn6zW7te6xXVDSLtdviLburjqn4G66oXEqnGQf"
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
