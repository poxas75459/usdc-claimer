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
    "5gY4MeYyFxsdvWiCdGqudy3azYN1bfPeNGi3gUTCYTfvsaEnnPfG2pti6qaBLkF1EtUxRL1oTrdsVPhHvdHDoYUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L3WfL3tNZpUKRmAD39tRTmPKjrSfKDJcMpuq1eJjRxeeVDXNEjdfP6PjD76F616G9sANADyJw8BZjkxppB6pDbV",
  "key1": "4BUP8dhGymo3XKHyDyVx6Th8B3azmfCxbATXsKCJQZUtqjNRmpoBVvExSPSFnvFNNz61BvtdTQBBa9Ca99aw6WrJ",
  "key2": "fJZjf1bHxtEmWrFj6w1yLNCaQsfvfrvBo3Tasxpf34us94eLfs1ovPCwqaNjJSyfwLsPDRSCt3gJKKgr5jEBCDU",
  "key3": "3EmjmZVP5PfYkHLxgH4KXQha8RoDkc3xZ6BcRutMjQWezCG1ThkL9r4MfHUSTDuxw4SigC2HEuRNH7V44WRFkCNR",
  "key4": "4LY7q9BDMVDGyY1L9ZUnsxWXgnofM7Kb3rWkVZJ9vhVNBL22qEveRtc4GTHG5VCPbJ22pu9Gy3MffCeyvoxuo4pd",
  "key5": "4JZ477iT5kpRrL9ew5B49ayHy1YenoQXnjDDakYmNyjTSMfDqtnWUDHvcLm34tffn5SHaQQgkTdssZkETcSEJPbP",
  "key6": "2D31e6miAY7kt5EXdzVmKWNJcJARXX7GTNv4YVqniebQcdzsBJraBdgtX7vejFTvSg1GBu8oh5fkzdz5VKEUQnkX",
  "key7": "4Hr2s9HGQnZp61xYDveeYqWkNAsK72J5iPbhfvyd3gvpBc2eg99YF44QKZThHciuXa4vGFdugPiPgp4qdtbDUdV6",
  "key8": "33upqJCuYtTnsdH7MDCQV3LHZLverhyC3wWRpibp1dLG29FgTCEmXrG74b2f2CRJXzC6UzmNYX8ruRzoc2jvNfsd",
  "key9": "65BDPQ5p7rKdD6SYwrn16t7ibEksxKLPrD3FEvNuXrVks3GLrnQAkHfnvbjAwkMGfPm88BjKP8GrkHeWQingkpTm",
  "key10": "5CgcrWqzzZqtz2G31QKwurAE3P8WCmD3SCBvaufmyqwvAByxf9niUvqYWXemog5nzVRrybzRJnoRWAiyWadXj9so",
  "key11": "VoyX5JNzStYEJecmujsGjwrKnfq4u34WQPp2VrDpHv7rVGLhvRZ9rxgGprgqGQnK6qKHcF2WispgH26kM5ERHzF",
  "key12": "65taxj6P2uwnA64iN8wDAPLxhKefKSQuw3xQjDbjGKu4LxgcaJZjeJSiZeRVCtwKM52HXp2KsHQJqD79VL4oCd9o",
  "key13": "4jRxNMmFW5oB4Z2gXvopHHcKpXm4C5kPR38VysssqdSoZG5mzvQ4K49gsfZi8Q6J2f62VC21ccv1zEaJuhWpywrp",
  "key14": "XPJnPGeUSric1pvv4gndRhP4z6v9z1eqb8S5ri1bTeXbWmSorQpxzDUddz2wWr14RiddiLAGeKSm7miUvX7eLt6",
  "key15": "5yfBQAPrdmaamdb2iFm8bXfq8E1N3ky9xNHwCE6x3LE8VseEQrTDCbDgaa3LFDxBBFWNbZDbMWnNwtGv3Fk82LP",
  "key16": "ZVdjjQNinChdK4ZDWc5sopG2Yxr6sKmJoQjLRTpKCqsjuVDJykzfU5u4Cghi47pmQfkNcHh2J8AbzW4bjbPzTV9",
  "key17": "4U4Yf7F8fy4kCqKRjR6SR5mLrLNAVgk1rX7h5hNatviRrM5PoYtyj2WbzTp9YmsNnnFeyNg5Y6PEF5aBg4p1J3x1",
  "key18": "2t9CMAoduz1YFvvKBzpguLAzpchc5Bp7mUS5RURUvVugVeFxrJqzaeLnSA6GS4jzvoRfJhasyJCBqApnsb97hygC",
  "key19": "3Puz1As35fWaKKFSyHjrWwVpUaAKTtXhzCpXBSEAMyRgoMPkFHTZVTu2vgxMHBBP2ynH8suZbm97xoo1eJYj5xXX",
  "key20": "2nUvJ3WbGuiKwWYRmNEF6MqBWx2KY7WbxYiRBBrnf26tJw5Pc6aeAo9NdTxBFPR91noMdKgXvJtAEMW97qZEB4MR",
  "key21": "66d7NrbRXvSAQisQFz4RjUkMqFRyQEKoqeXF3bmx9pgjgWLe6NZ2oaAwkbnmw5X2XvB6hAbAvfKYFxDEa4dJrdZc",
  "key22": "3JwM1SMLduXSCXfs9x8KkT6P2RrBhigYfWYuTJNP79gL29u6H24tUW4PDiktRRocf59Xvhx3r6GgHVacj6vT3RpU",
  "key23": "n7BBsaVRUibGATPwEW4BCANUeCi6EY2qumKnj6qBSW4zLvqD3rcQVH9a5eRATikMx4Y6eRU5zfijsDQEpt7Fk9Q",
  "key24": "3ua6dJ6UWacH3t1MnXMgwRg6SP3mNfSdjdpVKKwG89pdXPLVVbcebwHraf6Nn2SAWP9iUYQ8sxratR2EnVAAorqg",
  "key25": "4C5FK3HqaBGct3YpYXzdqjdHtFfXTjejJhksUjPSqEep4jT4x5PEti5eAiCUeu3h1ZJWYqA2taJpnGYmkZLtErx5",
  "key26": "4NzWzVkjHXoLTrxd9xnw7Du4EoHzkeqyyo3hPdGF5T5GEh81b21vZcB4UMQ8uJQqhi2FxHVwVyUahUBTeMnEE1ER",
  "key27": "28KJTVL6oS3g6g1XVnRwrq7eqATEyHhKZKuYRqKSN7GTvbMarViQB9i4RqbFS1ajd37MgkZ2d6MkvDJqWeLtBRpg",
  "key28": "9yzSdCKSXKYAt9eg6dqYFmPD3BmWr5qEoduvZd1Fv3mYxrTwHhbgZg4KZZQefCLgmCDKutjMNrj3idZat2w1wW5",
  "key29": "3SbrFcp5HNzdBoyErRWBSaZ7hf47g5hXo8GPYikrGfJhhiW7myizZNs1ptvCqR6CCzRf7n7UxfEqmh6fZWVz3gsq",
  "key30": "o5FSkaDJH3Yxh7PiYqx2Anwwoz5zprBeZoaAYZgoVMUWEbYQcN5Vxojftf3k5qFXJUtVK3e1aRfUbnE7eK1DU6r",
  "key31": "3txyArjGJsxhmHeudft9EtMZFyq4UUoEvWsTd337KsNvjGuVc8Yz9mh5znHXdp6uWPcXcNRhZk3gXzs8PQCWiZkk"
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
