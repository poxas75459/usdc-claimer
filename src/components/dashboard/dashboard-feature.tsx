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
    "5JDWRkKmYY6tLvMWocqcFM35J4Zz7VqVp4kFMU59kqE5TeepwqHY9vPtJLhV2miSpourhyFj1gadyEfEbqArfXJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jzojJQ7C4yc3unrRbfoQqDFjTXK3uLHLMS5vqkcJwuej7XnqHQ4nvhw3V7HWdcYQNEfEGiPAZz8vGvTUpi6cfeX",
  "key1": "XxYb8DZRrGU4yBtjiZXZJgHxdM4kAtRbnMsfYU29zMj2gUginJXE4JYHN7TRYWmPWPJ7ZZvMB65J8KHwRCWnxiX",
  "key2": "WfK81tHp1J14jDq9fZDMLbmVwNJjwRPvGChQfMQyB73B3aRnmQzAHEC3viZiCbqx4RijaYk74gDzwq7YpwZa2n2",
  "key3": "4y8RKkVqTQNHUk4nXoWFMoKmY3MVPFv6d1Pk4dMg97tPegjB4LUw8FoCiiwHGTxCsDC9mMv85SCpkMgmHKdoLADE",
  "key4": "4kNgfvDbCusvChATn8TZRKuUgypyNHD78HcfFUAxjzBjuci4aq28xEYTKThrF7uDWG66t5RNFMhnKCDcbccTJuW8",
  "key5": "2PperM5cCurY2dUGSsiDhDjirADFJdnNbYJeNUA4RYhGEGRm4q3UP3DXowLa2QEBLCsiKTnhtspDaUznT14zeEpM",
  "key6": "2e7bRqkNCUzwbrsmKKvskNCeDnc8RkuWNuAzPBgnkWZQhLWm5WAUEheErzw4hgYCQktMRPEJoGPSjLGwxotSgs2i",
  "key7": "3bpkLobQ2CgiztkQvzeZSW2WBskSQhfRpRbHqcPATWVgXjk7VEgtF7BKo3EbQHLwbiHBaaoMvCNahnwPfBfKkcS6",
  "key8": "2Q2y6YqyzH2krVdQAA842H4QgQAaukK6qGSRgsSTxdPu5PYm8t3jMQgDaJ6qmVijbdECVX4qVdFWc318kd4RUgeP",
  "key9": "2BzD3xUBFjJAHpoLZkwa8Mbbe1uTdMuiyR3z4MuSbHNMSGdrjM61mmNGp8edfcVrycAKwZnT6WLBJZRVF4XaEyi4",
  "key10": "5Rq9ZJ1F5GSh7uYKnshHVdCw1gbVd1S9QyTrd7vbvSNtTq6gow7RMBPEJ4erGGAs7hysHWLXqUdcYYK3yK47Kdey",
  "key11": "3NGVH4afU2ZpG5gWC2iWrJMxZbL5cBj6AqetWRpa2nGNMjknewbjTFfYLaQTNgvx94rk9LBpi26DoP683mer9mgr",
  "key12": "28jdaqnCpsA9yz3zDYRCacQ1WHVtMYgryYSFtZ1p9sAGYMZUwGgqknReuuKpdvJu8ZvoE5MjNmTJTW6vmucPyp3w",
  "key13": "2cTUYVpz7ZHdirLtZCgnQ2jLBgRwprpTX8ZeZfcM6YEysXjnGGjRKudPGpVjidENsUPHMLrFJGXnVThoGia8ajUy",
  "key14": "5mdywdNx4fwosXXLkwv4vEFYetaj8bNA6VUrE12zaMUha6WXQUEZtwVWM3zS3i1edLbE2hqgeK18H76NekThVjJ7",
  "key15": "4ne5oN6NHjbPhvCusekuBsHPds7n91x1CnnPc1F7shQmi4X8d4D8vJKX9PR7Bqh8pR6mG51X6eCTuyod1CvxBwwM",
  "key16": "5b939Y2T81LkbHxhRi8WcjrFjP3e2hKMfBSSzqKbBN4VUtrDsAn1ePPt3p3eF7o1Z9dJS4cd38YdFzSC6EuvxYis",
  "key17": "2QJvJiH1gHdaguJGrDf39L7Pc9cBkw9n7Ap86EdzrLQYAJTg4KCPapQQ5a8TVE2nUbwTySgHtieszqM14oEqQ4Kd",
  "key18": "5tiuJm4E7BZXWBJg8EDcXa31EeShdtFdZKme2Cx4FvNnBv8rVo6W1x4mkR711dd2houAQKumuHpx8fbcwvy4SrDP",
  "key19": "4EaraPRtPpAuYypyrAdNLuiBHrik3xGfo3Tv8EtQN5Bg3fu5nmGk9MvzPMsoYmgFyUGzsaH8YehtiqpiC4faQboG",
  "key20": "5z6reTfDDtCpRcDQ6bABbmy7VgRcGAq9WEFbiEToz3NEnmrA2GZtYmVCCiUj34kRrtCGM8ubVihZ1XMBKBWfGvmK",
  "key21": "8ntQZLfU3gLeSCAuUyctBoW7gtVUsaoVjHwTKrHYyvzgYyu39HMaX9P1UU363kr7vKuTejNGG4Wv7TyKFySCNi6",
  "key22": "66BvnYZcUGGPAvNfccTHBECG47DGibu4AjL52d3rNrEKU5msULS36NhgdZeKBpMMGvJfS6Y4fHC24NSkRCQXraxd",
  "key23": "2coesukwDd4aus3PdZMAaCf1wsY46H4BqrgpbvxbmfRnoVXiMSp5pbLo1vCPDyFk7KZnj3qxdKrLE5GNiS2pSXaz",
  "key24": "7wLcabJGX79dn2NEYAqNUmdf2Lf4mBZfcb2VuytRJwdmSgHgAQCFSTh7J9kwsEUAbw7psyDScKyqGFaH7gGH6gQ",
  "key25": "YequNChu4SiDsdse9bsWDTQGweUPhKo6fXFxo6qKNnxudsEXaJJbXNmmRUZpJbVq3sQnmQNzQ9zaJaziNKRqGPz",
  "key26": "2tdsQQVknqHfWDWeEhZaDsUQ4cE2xPpgKnvUKnhqUiZfVhxDrKcTxiRHJEYiB7nMRKsggaDNgfyaj5nWrnKwvPyC",
  "key27": "2wTQHjze9xPHdfXxWeU2YL1ZbbkppR8hyt8YTGuH73ukkrvvvVP9TZbM8LhrxmCQBWohTS5EQVh14PttWMvfw6AL",
  "key28": "JLVZAHsNpLVoNP1Ti26C3rpccWtxrY3m5aFTX9dair5RT1uUL1qbyYiUEXCY9Y5eDdgR7xovaADfQ8fLWERHMSR",
  "key29": "4uimfpzjvPe6CNMGpEL2ntR9QvBoy3LZHxU3SARRomvn4jvu1qB7YmUq5QyJMtoKLJZ4rYidqciVbBSebBqFJcBL",
  "key30": "2cVMmaCQwqzCJzb3m4gQHNmqe6CfJpMmgCBUYat94PMxRM43c1napHghvjepJDk7kMuufBMcwQdHSGksM2oSjTPb",
  "key31": "3BrPeEe8LnUtbBKbHGGo57ynTnMXuNKUN6j26MB6AiyRATBqqhmn2Et5SbyE2WkwyMKjUTTk9FrpCJPekqJ4vJZD",
  "key32": "26ikbiYKSm3SLhzK2T1otCJJd5FMwxVpDXdtEbj8QJgqa5M8H1C3Jo1vYDTKBRJKU19pLfjgsbQf4uBwcV5Qt3Sv",
  "key33": "4shDMrKVvhdshnjex7y9MEQWbLvWBsED7GvXr3MYC26Dr98TDUMvVeq19LkwEh9baBPJtmiPkZ8hwBTKbGUgKp2h",
  "key34": "39qgcdMGKBMarEUmLBpK5MqCdVHiTbrKcY4fSEAN27QPMk7wA3Ggi9uuyX34WWcuxrqLk1v53dteFnF8dQo9b6NK",
  "key35": "3YUEN5tbqzbSCVaAvjwhkQWKXA5cUPnABeLeDPAPNUWiK9fRzL7m3zS4estJzNFwJzb2kX2gr3SkfLAcDTBK15ed",
  "key36": "59ZnDFBgV3TXroc7pmSmbZWsnHKPjx7BwRWVa34GXMX6fFuc5PK17wTnZPNH2YejA998PXpuyKbMqL9FiBpRzwBz",
  "key37": "3dTBwPEZkFiUrQ3cYMks5R8rpLAJPuXsk2XAwzcq6UGkmS8H5wmviYbPqbEL8y59tqgE4e7j3UoGYu7SzY6uetgF",
  "key38": "2P6YJQuc5irBa2ZaRz4oCL4dmf8Ce3pQ5weNYLuz8FrtS6hsWxLAjTDjSycApt9qmZPGtrBLrCU85DjxDXtcQ6kX",
  "key39": "2VNXzVHsZd7kM8po4u7LLMNAiWkGHfs3r314LZ35rNRRLkBdtL7wXRiY5P2rjTAdrq5ETQo6zQ46h5NYk1tQvvt3",
  "key40": "5YrKUaB4tKmBbbog1Zx6D1zrbMAwus7VjEnPt7c5QKd34zruwsCqYdhs2i1vfT4rFwUEeRYwqNisMXzwCLjzM67S",
  "key41": "3TdSc5hL6hBoRYuGmdoFVFF1uChHpi3Nxa6jMmaSnA3X9DZ19dqYM98kgSTSuF8P1mg5PniobYFT4p3NZEE15LAh",
  "key42": "3ndsDy8KL6LrA9oaQp52cA8qdtscUYPdXZtWix9Jk71pfyW3U7qpPjJnzD3aymyfCqKE7tTdyspJdadciAS1gMgP",
  "key43": "yo5LScw1uFSNTxcbefXycSprMa6RwyisSbbFNCHmPAmWmig4b7DKujFna6QVuRacDjh7ic285Zv9t9gexK6rFap",
  "key44": "5S5CiM9oDkujxssKH55M12JXzxmQ3hZ2YDyVZryUZhTanBQ8aqz8zZaKASDf37yAdJPGo3puLY6qLo4ra4pYczoZ",
  "key45": "2JeVauUaYUceFRN3wPnAcnvQSXBeLWjxqtevXvXwwRTnmbmjKuABsAxMoyukt9EDg4c7VcKD27JzjyDu3zDyb6En",
  "key46": "3Xd1PUiNdszEJQojznwF4UL1HPoEksofuNVubuAbH76U5yUBqE9h82T7fEn2jaadtuzwjun4hsYqeGKXbMFamepQ",
  "key47": "3taXjH3i7iLHsdVf9kcRVZCqcxEaePL8YmvdR1YkA8QsQbBG8Uqmqw8Yhk3trVcwJSHTKvNE5UjNhfy1bdLfHoCj"
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
