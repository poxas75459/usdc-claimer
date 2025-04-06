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
    "5jDxnjKxV1wf4UxhyvusGHvphnTzRLnNsS7jZFXwFszLxAKstdrKxYSoyg9mDP54UqDFo1Eszoz7foaPiG6iXgAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37H8kkCS7rraj1ikn5fQfjTUdvUfQjJ2hVsix1k65LA97UhWn2mpnXWgCP1CXdzLKWyd516y2TumehFAuimxEz8m",
  "key1": "5FRNXAkQKp2L7ennu1dhTYgjnFYLzVt6ngHpDwQ2rgmdqoToRjcWWaShtzzDCLtD42EzVbcVysDGNWXCriXrEPVw",
  "key2": "4nnKrAuq6GK93LtVWkhxHfT1ACgAiz8RfeoUGzesPj9VtqQm5nu61eNBWPaE5EP4S9gix2wfTWUwcGuWGeCHoqKP",
  "key3": "4gR7842Zc7EFp3JFknZu3DXqeniKXAVaDWr7BMRkBFa1gRnYa1cYgGBr1kf7or1r4hMzB4q3XqankrYaq2xjxP3K",
  "key4": "iZHvLWyXGoAD4Mpcn93U5hzFVA22hV18GB6pMyaGUHJCbYmtzDRB71wWso45AKDJxbCQSGbgPrjwEr1YCB5HNnr",
  "key5": "5Lsf2q3yEzV83yt27EqnNiXm1qJEJuvYwgbr2qbDcxzc91fRDpsHKUjbocfrd2t2yH2qNGkBxWzazWcSTh2mc4XU",
  "key6": "mXoBkHAzxFoboaJg6FFcVPKhZg1g7UQNMGAnWDRgZ5zHL7ZY3qyWkUNiyCKmZRsDEcBfprcwhbN52oQpENcZiX1",
  "key7": "GMQicA9eTZPXU2M8MaP3kXhqTBbzffMQgv1kfCUCAgkyYnFJjdXVd2rTE7sPbe6fCL4dWTL9GaQNekDmxaoz7qB",
  "key8": "5giEP6LSqcxbVc5MGGWjfbQg6GQ89C26mqNuXkcUtZpWkJ2GtxgvAWMf25VnfVUyQBNNY2aHEdtHz3cfaMXVQyEY",
  "key9": "2L4q3hKocWNv2ZRR287K7SbdzuSRatGqD8inJQomtGjLwkMGTHiTd443v6LyCDpJP2WHgyds2PG7JyhttbYsGyi3",
  "key10": "5spKSY6bYzz7g2M4KFd5rJziYaZ8NfXSziBRK56rC1PfwUpuoMxcZpECE96akh1LL7FZevBZCt1vKAs1Kt97GttT",
  "key11": "4PWfyiaF4ZcwMo8gTqj4t7V6T1tVdYDzKyX7gKqqvJMJSK6Y5Hjpd2ANk3VMwcLys4HYeTno9e5axRTAqFAmt8Vf",
  "key12": "4NKcyK2V32HvejfzZqxhpd1bT24rfFqxtKvjJEhgpcCSmRAvtmBPGTVtdzVFSob6sei1FSBsdf536JERjDUnCAEp",
  "key13": "yPVhMsipc2sLVkfLTCuo39QZR3qJFXExaWgkmEjTqfnziPdmCYufosHvKTYnGVkG57C69AVpxjwugp9PaD6YLnt",
  "key14": "3Ao9u8ec35NKEt9cVjZVzGioDhLdUKQ1VRKWCLa3R3s8LKMc7FwdTc4peKcrB8Ke3EHgkhwEqogWov49HXPMVHXg",
  "key15": "B5T9LvLbqdxfurrjnuTjNwqoQ4AB7FDvmw38B69M7uZED5p8MU9UejywHuqe58uHUyqwCyXGTdhdzb9FDVRm2Qy",
  "key16": "4bnWH4skcHuMoaxKwzeMha1p9jwBkQq1GEsPAuuPeL4iFn7Jv7D9FAH1Fk9b7QBJpdovRZJiMpkJLa9XdwnVDn23",
  "key17": "2pQxbCZduSXyLLZembLMEQ4KGFQS3cf8Pa1H6PHU78iYvnFSCYdy78qgoohJKTXuT3kjCgHfqCsY2V3H8jip6tbE",
  "key18": "vBHjrhkL2htTzBiSG9h8n8fRRvKxLFXcR99FkUheDRkPyP4KC5n6KcdHXeow3mB368Z6Yb3FkBsJZLY5J9uM5XH",
  "key19": "4HJAUhdCVkAbcTs1tA6knaJ8qxmtX8Ja94ZeUCAvaBBgRwVojjkwdd9kNtAnpHHQ9V1oNyfzcBAcHtopezTFJ6U3",
  "key20": "3PNqzsNoa87HyfvHH8QQBVZhfR4LkABFJne5xM8o2ZNcXrW9CQUHBfzFukp7GQ1v6qazLDT4UcyGzdZn57JY984Z",
  "key21": "44bPiVhw9PLcRHR99KTGwhS7EXWNEztuN5aATULY5u42cXc2nmdDaoWgMZh26RVRKecX1EsK8LXzJdshzpEU8X6p",
  "key22": "5yTwHHNj9AERK1RiwJeJWx9EwD61ufGAB1p4HH4cFZTp6271Eem78Bn4jtynuuQDujyJRBEfY6EP6F8PVZbrvvvL",
  "key23": "2kifciTCyGVErMXdxLwR7aMhY5QZuygVBMkmvQxt1MumMzhLFKQrdDAaGwMkmGxqHArRPLy3XHdwtH1mPdtMzzQY",
  "key24": "gnZp8waxWvLP1agY7CGCSK4nvTMsjGSVtP4NMUR3XTfVia4CEFkv52ng5pYThuFRnKmaGzow6Xk9nzwJv5RjsdV",
  "key25": "2FvZXPwAzr2ce8EjpL3FRyz4LySTcZY1R9EAZm3CZ5VCvz11YFrXyLmt6nT8S1kTJVU8FVuysHk8Uc5Lf7SEx9VH",
  "key26": "5SntjBGzEA7ahUn43nDqWcTbLn7M4FD1Umb43vBgUuSmAq89pSa8PdKaCWNpw6KA356yU7bKjMeDNwTptqWEWU45",
  "key27": "5c15kDeDj7H167gRRCvEnZ9ahi8soDkdAzWQ9uGEkc5gvGiBS9j68U4DnrKuUfZ53f3PqmCF4WRcX7KkHaHjg6d2",
  "key28": "Q9tL2GaErVoeSMaLPSoNVesQ8adoCgSZhCKanr7fDZrveUm63HfXFYM5ZbeMQKS8UqSqvFYreoYZyxZfNvSh17x",
  "key29": "49TxXZyP7T7eAW8eLYjNscdSAD7tJ6NXJ2V7BNwXEn49SsucK5MPBP8NRy1KkQTRkr73i7YtkfJ8EtVR4fNEye1n",
  "key30": "2q1AqmhVZiNCP8swb14a12rtbT5qf4PFHeDcZNHQJPPNmMZtBhaAjkNDpho8S7XCW9WFHTE124gRSXfVD15A5iB",
  "key31": "WWepuuRwYrZBnKjeH2qy9eqho76rkvhPH3QfWUGeuQju4XuLQMnqW9CuVNREbwXXKdjCmBeG5GPnoSmuN4aDWNb",
  "key32": "5A61GoZt7UY1uRZLCTK8oK7V8LAtTxZrw1KDDHky46oFXZu33iRL3pdFUhvobi5rgc5j15WEG4dXkX1LdLTaz2es",
  "key33": "3Lrkv2wZqHvXseLW2Pgt12nLAxGTszNVCnsSfmsZeS57tZmJ7BYrKoQLbmsgSvGrTfNSmWvWUQy7L4GfGazkEyFQ",
  "key34": "2b1ifEPuyT8QBHup3u85qBSWJVgLJJd1ZV5fp19Pwg4cxHS6fHn1Yc1Q46yBbSXtJ7JDwJn6uhbK64PMAzLC3wk2",
  "key35": "2kwwVEk11VjDWriFaGDkCddDqj14ucRu13kRM396bVzbYnuLCnd3NvZLfV8KLCSMmo9LC3kndb3U5pKiFuiJEYkn",
  "key36": "4C6CKVEZfqeWRyCffuPmM97EaTW7sM9CUY8LXwTgRXKgnfZk9a7qW6inDWyh9myR9Dz63WvmZx78Ej1i3FQd6dcU",
  "key37": "2fMLkxQ3JYGv8pKNow2znoxVZgQYP9uzbV914RRCMbwy8WNJiMwA8KuuaFB4WBDCU4ASd9ReSq1PaEEV81Aaud82",
  "key38": "3wnnGt2wSpUwydLB7rHeaSBsPNK11cmKxvAxgmQfLCs93iXriyMK9DUAxfWDYwyK6QJjYB9ZVFzwJCcNWcx3JW2C",
  "key39": "4298VkzjQguGvmHTYKC4R7rMKPNiWjcz3rTjPo79vUAfC8w9YprnL8cWs39ktx4qqWuRsf9Pr9miHM5TDuEKsg11",
  "key40": "5QUv2b4vfTT39BsqvWrx5aRWnq3HqcMqKgPwq3cLyyEX7RrP1tvx5vQP2Q8DnQQkV3zSqxJxJeXdGajCAgUm9shc",
  "key41": "4qwXG3Zgyn74jm9ceFJYMi9shtaUP55umXiVZsowQwb2bWKeDVAFmjb6Yk87yTzciAC77hWXsRgtkbjsdkYKGod9",
  "key42": "53cCyJHp9FQ1UTGTu4mzQWvwUed4Z1uk5Jj791TTsmA5vVP4CeFudtLYnmv9PRALmTGZvpHxdPMrfWyhQdHy6kCT"
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
