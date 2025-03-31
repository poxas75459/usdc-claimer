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
    "5M9Pk6mxuMx1TfYE3mBUPeALyJRKn9b4wPpqiNVHSj1zrPPevQG5ex3NciLmgZsE8jPS5B1JP6dVc7uiS2xdVqhm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kaGhV7xTAz5pE24e3HTGy8SFYKNRN64CoLi8jKJpvE2dF1a12k5gCuNkjpXryaB9uE1VyUsBVNnJdG7jsr2Uesu",
  "key1": "3kcimqzPQiebAMu7kNGJr8GLkKabM6QhK6FXDKNXuLTcKPhaj5w25KnMaJ1nNHxADpvn887VRJjCqbm7DRUVnTCh",
  "key2": "UcEX7MQP2q9TacsPCDbhjfYgudoAsLyKM3zUy7oDGTt32qXyNDHeEgD9MkUtTbFhod1RAdz3MUwQ7sooYM2yTYi",
  "key3": "4GQh6FgJqja7T2QBB6gWWsSWvTgzQYpwtZ8pv64u77Vu5ZDPJfLcVzfQTXyUGU3sEHKy7wpr8Nrh8bdi9NDfrQCX",
  "key4": "5aYX4FVzVPdHQnFLDkSdwK42xprKKj887o1eaibxTDdLmif3LHLBSLm8DW4NbqpcGYEZJYmGMzG8eePGy1nLyJxt",
  "key5": "3J7yx8voPbgP3Jvfn8wdjRwXwBpPn7rWDnihCT93PA9Vvv7S1RM3s6udLEVrsh1XtGzW9KARVjhzjFeU79zPhv38",
  "key6": "C74S76Db3HxbwNukVP9u121jEoiPWgPVx91VEayiQLxyBZEDdihhnT66nE4S5Sgf2h44mG8cdPwsonDprU8p2tw",
  "key7": "4rGVD7esUNQVgLeQbwgAdpxYHqz3YwE13czYbZ7ukk4fJscGt6voxkNj9BwmTAzWrVchcNeqRvV7C93TQYnbTfDo",
  "key8": "AnYSCNLLwinJHwyv1orwfLAYgpcRtseqSjSaBVRis3Jk9g3u9KVg5HWTvXGtT9crh9B3x7G3fZNPemdu8MB2p2Q",
  "key9": "5nUrGrukA1FFiQ74bcYwZVdsxk8pVhmB4m38E3MkQ2uyLpUs2qe2qnTNbx7AcfaZu54s2JZB71SDdhHtjB1zARE",
  "key10": "3j3qJcnKEGAkq7TcLuYuCawyjbTiZiZ3SyJ3VJ2kpjh5xbLGSHKpkakQ8BwEnd54C9p6mDGrMDXqxBcqB3eVSBLz",
  "key11": "5hAzxgQXYRRz5e9sGH8puZVpNb1JD8TJ9inBAkaaPvqV4CF2ovhKuCzE23Hff9qcettcxWi1R71T4KfnHR1WPdxQ",
  "key12": "4KC2MgUApaA7uswU9vA1gp6JsJUPvQkTgo5uUDiDpu3B2X2tNDtKdZgi9x5qTySr8Ez799UuWYxGHfY6dcPtvhWj",
  "key13": "2qgL5HBid2xUrgrqh7nsJMXUdVdopBNAa34k6ZGdeJ8shu5Aqw8MdozyEW4ZtExibAiAnsdKKXqXVf8SUPpNcm99",
  "key14": "4N59ywn4cRFTFHqvFMdwTQGduBd7zTLpk4AMxxEmxZjjp1vGJ5fMJNQxSueNcXPTucrritL2MnKTT8vxb64JbKix",
  "key15": "3vvamBJDi1FoecsuVj5D3jdpt2DGADyuPX4MSaMwrmhT5zZZGWj53xZDppsEQirRvWu5ASD2SyygcJcUE7Bn8jyj",
  "key16": "ok7iyKV2X2H1rcZ4N3Gx9cM8cdwKMvq1MvCYt6vCjoFuNaGRnDiGBpUWCTy1XKFxXwW83w9LnCy16Jqxs5nDHca",
  "key17": "5GT1pHXzT8hLWCSmQKT9gjhpwwSX5UZ8gc6aJj37MMwqSBW4ViV3UxvYW3NTTFDgdBeM4AH4RZqgrjSUCJQZh5Ua",
  "key18": "4QZjk4T9fW656jaunq7MVQDUv1PUzKe1tkfuvb5LYZqQfdHJDGCYh3cW9DDooM4sC8HYyYD71zo66cySun7Lb52P",
  "key19": "52EqWbVKTjbhqhVJZZRjgRRr45fRHMwyVSghLdLKwWtJTSDVmCoKXyMYfkujVvqehm2TyPgMG2ie26GwH19uqhUU",
  "key20": "3YtVvnxVSLq1GGFQPFkndrw7Emuji6yxvrKCQLk83rtgiHpxuzYJK2kRFpktiR4xpRa2zSC1FY76Rfp6eK3tz1u6",
  "key21": "V54npNa9wS57vFAfjt32aKF2j8uRa1xTET6XUrq35icWR2DWVxnEMdXiRMWXpAY2oEs8Pigfhww2T3ivC1xdQWo",
  "key22": "5UdjX7JMoEx6Z92vJRzripKQcHD8UHsMvGtMSWsBCxsfgS73mFpLtW44D96sGmBfXu5WACBfKzTie2jEk7GTPDL",
  "key23": "jpZsYeaynKZXR8DHLAfoE62dzBVFoiHRUA8d4wEHSbiCjM1VNKdfith4751xrFQqEvLYWtMvVh3DsYmVguTeVWy",
  "key24": "3P7tNbcg4y4XmhZkheDxavZpcH2LpqN4Y3g6SStg9iYmoKqKcHfekuD1RnJLouEudZA3fUx3QqQQPpmYzZACrnkH",
  "key25": "2bVmQTnCrAmY8q9vju7irYhKW7CCqDsUsZFzmnvSFKPYMJqj323RMLje5wbdkgrBBCwjakxSKV1j6yTwoW47y64b",
  "key26": "2Sdck12EUDfUYVCMXLU5iXfJ5VXCmZ7vCy1BXG28BNxjHEQzvj25LSk2NHM9ZpdKVc661f1dP8VcSwUGWWt9fkJ8",
  "key27": "2aPURaN5gtqzxuJAsS8q4Yo1vtzNE7yN9bpKhLQYLrj1zn1rr4yewqNJvbDQ9Q9BHZtECqCGPHR93vwugKibqv4L",
  "key28": "ghwMH7NdjH2GK3j7roDJWaN4QdAQ5CJgUggwkcgejoYTZvUvie8HmE48uxjErcnQPm8HPUDHhhBCyRBgV8CRPRJ",
  "key29": "4kwmpUmytfesRYu2pe7GK2tjYXkgkSznXbWrR7QNNdsE6Vj7HrDbB5yabFEMDbvM8d3931a5MXas735vVL8EaPLB"
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
