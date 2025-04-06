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
    "dF8S45hsbEbd7pTaDw2WZaagKUHBRjdPqLJr8XujXnYQP7CwR7KhAHzmpiDgVxwhp3dVuJvPhQbo9cJDqJF2oqt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EBGFuKuf8uayPkWjNhdwVy4fGGM7WyAz5LsXyn6VamPMcFn4LUii3hYFcM1TbY5LRi8RB93m7CiJQNtYLdUDj3N",
  "key1": "v68j7J4Bg56EKj346tWpq14rHem4XSqVLMtQRD33ZwpXMbPisnXZ5TeYtmWUnVA6NPu2i6BcbyGbNXqmjmp3wbL",
  "key2": "5i9uG7f1E7yftHNahNFEfeg3zCyvhkhVBo2wciarYqZ2yn8eSNNZtw5CwjFuJDyEJx8DV7LoFrsDT7n7xZJXxG2W",
  "key3": "3RVPbL8gxbqHuYeRSricywSunQs33kurYf4oTExqQtzgp7nEmCHGEZBWm8gRiHCDrCr3VtzkRtgeUWPPeK352toe",
  "key4": "4pMUFUBYANd31wUdDQT3sBvsdZBdwv8YZypQSL4UUsQyU2HSJq2iD6NbGXFD63Sdf22wYVg7EQE5doeYw3VkFTLi",
  "key5": "4wpVfN9vRd6o3b2ne11emrMmcwMQpfaodHHx7w34atKMz7tktLcCVHNhYVN2fa6eccgwbcrYe1CVFN1zshYzPjr6",
  "key6": "4MN4VNHM4wtBqND1gV2ho6je2JgHG8soLzYeJJ64Vhq8VEoXEwQsdifCqSeMcBunf9Vf1ZU7BfjnxkoEUm2YxvQd",
  "key7": "5tVdUsmSaGXmTuARhdG8NdRhTcvh3e555oMhZUqt2kcXioqDd9G1tGpiRNjw365S2t6tathLrGuEkzCaLAcbJ8Ff",
  "key8": "2jShTBf7aoZvHKey3kgwhvPNg8TnjmuttA3DAVpVKspbaTUE9WrXAMi1guhqtH1FpYZ4Y7ACSgYRM7X9fAWoVYMs",
  "key9": "2HrLNW9sc4pXaN4rNJUuzfwS6oRS9RQM2h9YBE79wVkyF4JmqvgxDB4XPjtNvaHmrrv9DxRXoZ2yMoNxgWB2vxCQ",
  "key10": "5YQyJCMStpWCeb5UP4ShCdorYN4FTjv8oWtUGfHFV4s7bEGfsBth739Rvp5p27XBoKwUWHbcFFCZ9FL32UKFzCvH",
  "key11": "3ym1y64Wt6jmYjqUf1WsSZmeSP7WhxEHJ4P5SsWL6EpFvitXHLtRh5Wux21zpqUKPsk8hJi2XC7YS7WDod5fAQe5",
  "key12": "oLGJH1Ht7YxGNyW2x4TcH3ZvWJ5V78CMfXPnXkJrz5XG2fVPHR4apvCycvMNFsqLKjQmn9UkyqbVZpvyZXLRQ2s",
  "key13": "kd2Hcu2Wtu7XkanNJ5jaZKtsXhtJBpsnnhvxxdWtj8RtmBDc3b864urWHfGnJAykWdzVQaJkSNDGvpBE1mcxi2R",
  "key14": "2ExzCGFJpGKn1Y2vLVzN4phceBMud8J6DkT97BNN8ZjPR7BseWxAk8q7iu5aMn5UFpC2DsZ6xmx3Xi9xGXckpbi4",
  "key15": "4AVL5HMgA1fg4ezxnyJqpjaap7jCsc5NYQekvwb2VL7bM6j6UcvtM52BJjqd5ruhg4euDihRd73sfMaPNhEz1yNH",
  "key16": "2Wz1Nre1xH2p8mweWgk2nUeVo9pQg1BBwhwf8pfxnr6e8zWTt4VUVEvSZhwcKFTaVbptvmrzZVhBr9SuSKhV9mKn",
  "key17": "4wqdDLSKBvdNq7ax3aQBqdUjZ8Q9tALKgWppkHPzLS657RxWgYTe6p2WY6hZrunrvh674s9JFxhxwzxs72ZYPtR5",
  "key18": "5XRSfyyRREhFuoU7tW5p64SAohtt4pyQDdN2xXJSv7hFrsuD9mVtodA6oPM6H4yQtQGzVHBFJvBhrKeQWzvJxUUC",
  "key19": "39MdNizkc26hoGHAoKvxcN7XXinXiec1ZPmB9u9GMqGnV1nD2wEfJjqBcFQVrgy6eaaJH9G4QFtQMs28Fzg9B3wj",
  "key20": "2Y6Yy9rugmtyhnXMEGSVt4U6snBmS4Rm2NLqmrH5nQuQ58tmPMG8b5Ri45G4giZVypHoqmcZ8yQMg94h2LP3cATP",
  "key21": "4G6fcFA9eRHPkVNU87Fceu6yAprfVwKrTMAvo46CdaSzguRppagr6TdMGXqjt4SHEVgvmfB26crxX9SJuzRk7Pto",
  "key22": "4J8zHCjeXMLftiiHhuHAwmsxUP5FKGDQGmwZw4dir5kyLNtvhu6PggxcTMY8coppAzA7kNoBKszXg829JqUNPvZN",
  "key23": "2MtahStzbFVTWJJpQcnhnnGyUBAuxPgah27Jg3gTTH6emgcVp42NrYFRttLXRaCA4cWV4byRF6SwJJTsHP5gXUbJ",
  "key24": "5Jas8dRwFGCWqH7HhckmL46jK2qKbkpUHEDogPrydAUcR2M9LYRRm1MTCbrwDx67ho1DniKeikCXgjTASt5yPfFi",
  "key25": "3wG2e6QWdjVhvWAAhRgFis5h8g9mJdonxeA2VFPRPbESPsTGaWdJYiegHGhNFJ7XrAe3edE7Htc8k8fVQbL9xi3y",
  "key26": "2LaHV9nDHZ8SG7Tb8ifuYghcaEMUhMyi21mPk4VUJftkMRp3acevvoaVDMMm1MYgXByZNpK3HzwZNrGQpwxSkFos",
  "key27": "3XiAXgaoMkRAokxU5SeDg5BbZJNyzWtcdrKefT6Ze5tmQRGGoLZQRaHPgDTGT1kPGNq5QvMBmgZXxovivKaPgpxB",
  "key28": "3MNnB44QgHU5SS23eRgMXa7QkahFFKdWQyCtoFt87bAPJAYzisNUa4ioyeC3kaReBxuWKc5HFKo9eivFTD9p6tsN"
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
