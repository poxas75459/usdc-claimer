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
    "27dd7Q8mNC7tAjjx3wDGjsW2W8Qburm7LtYbmPZVb2CjoEmkgUagh7GWfZVNVyQzsBTc9Qrqv9ibMVwvrt2jiLzH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JzCRjJPL1MpGYgZ4j2bXHuxJjC2cdS8txfqiFVKzsW9hNFF3ycLsshQyTRydQgsjDfCqHfXj2J2yoT91KSSUBz",
  "key1": "2r4tMJyJrcXZ1owpXbqKVxp6zeg8JkM8ptbx6Bu38xjTFoVezYGFYEapdk76dvgZfSXqMpcaCmrHG2GXtwSiR1zB",
  "key2": "4HGAKR6PTs7JXq3Ap1a13gqbbDuZo96K1dou2XbpLLv6uifCPiwG4eAeVoxUKD2g76WqWZzsfKBdTGhWjQAxDRHB",
  "key3": "63BDvcTWezPfVPpPpAipwvCdvZ3SAT1M6x36988i4sDA2QHin5xb5q1ttQNh1oHdFoQSqkfaFjXcvrHTz6ocU1na",
  "key4": "2QJpz9jK5P9oRKApawriXgvisqMqjdxPJhSuY3SNp98KA1aPx6ZmrMBBrKDZLMvJZ95WCFocV53kqBXCeJ7dt9E",
  "key5": "4m18xyznbteV8kwuMChKTGZyfo2rpML5yRdXkrfz9bw7qquB84XacFLkaaMnKcjk4nbj7xgGUH9Gc4y9FPTpE13M",
  "key6": "5Vn8RVBv81fKTFk6mk6Rc68McA24urUmSy5DB2LMCC1fTjiEq7xcghBZk98to45YuMXsH33qw2Vk3Jhij5FoFpYW",
  "key7": "5KxBZoNY1r6dWXSmYPaWQzbg2XezWaA5upVsmm3YWE5eGCJ84REvpzJAhD1JNJkh5Jdg62fF9zhCNz5EaGnquDVg",
  "key8": "3kRjBuVTcbTPohWdGHTia585E25JwZTnPQwePXjcmGzbZ3mh8XP4m3KnxZifXEc5DS8BeVvRH3ewGgK9oESiqES8",
  "key9": "2tWHZjgHUMtDg6RvzqYcVBgoXUb5ZySaxUgPrmERX5Yy9i4DHXwsJCd3g7sA8tfFgewK1DPH2a9cfvYkgtWyE9mp",
  "key10": "QvSZhBkgGFYSBsbLH6DV149h7qk5LgiKAnXubA77izrxKSzN6E5qX98P2QweXzUKn3xyFjdtUpqWLnFtE5UfPb3",
  "key11": "5au3tns4mSkNggcpu6NGqJRmFShTWZXSMsDjsJmzzg4Z65EbckVNxaRQU9YxC5T88NPCso8yKfpLzM6a6RXiBbMU",
  "key12": "c6vnMqVMoyiXZj5LSjeA81kjiea4iteq37UiSqkrJBwpLTLsiKKt2SjucydXPVuXzNn7EUta2yMgfWUGDJwQeU1",
  "key13": "3ZhdCqUj4i7vpnGFwkQfNzNBYLmbxJXp8up7seKoRLP4RSybdRD3XRQHLVXL1Ri7jK2yLj2UECva1y2rSQhAWqWX",
  "key14": "MdumRCfg2acXXzC1NMPt9RWeVaUoPrhcNJEsK4X6iDLoKYVTc7cCFsxVxUhqY93oQWvNNprdVFYrKpHJf9k8Qnh",
  "key15": "5wBGRzHPBr5M3R9Vtk8dgaYANo4stwALXFrHenyK83wtHzyzjCzZvWohcjnV1pT1WUH9Z23w5MnU6BnN5YPsfxz2",
  "key16": "2CvXUqVQDi26dYHGs43XnwEs5dVmrxShYP5QZUgte3UpQJqDfRb8m8MfptvieYpjSr8NaysamxZ1yMLQMy6VFEBS",
  "key17": "2btrGomF17HZqwrwbA1DrK5AcEr6AXyVNnpU1gBKQ8bwFUES4gJL4GrXiSCVR5iXSWJTtCWfC8F1iSXPtNLwKfDT",
  "key18": "5Z9SvjNTK5k69urvECJkU13BeG9GqD8tdmTNL6VrphHsc8md8Dd9cMej79WD667Eir2WdfVQM69C8LymYWscdaPu",
  "key19": "4FeYnjCydbUu8eYZf6gCnnkscTizztVLCj5E7nUAZsZK8yRAgbEL755UsxEtBdgAX38y5Fz523gv378vg6qVAgHc",
  "key20": "2WkGzcvQqFscCb7kCh9a9vzHqDxzSS5RsvEAdHzVoR3sgexWdSSrZCUeXV5f3be9YWcYvk1UrRszKyK732aFEZsg",
  "key21": "2WRxBonAgsg2iwrttyK7htdZPJA157mA76vzkG5Kghj2hhg8A1rUUtt7yvpezs4CnGoiCzREAxXgxqNqjYGgqRsU",
  "key22": "3fojCkvYXCxsSZDjgrALGqN41RGmhoCZSd3tDY5n2iRetWjGqCWYSjj9QMfL8vescWyp4G8Fg7u86S4gCmavaLDP",
  "key23": "3mFmmoMJ7A9Nb3Vrh26tNTar3n9oamGHndJ2rVCYNhwE8adpKXT8DAFME3nmtPZ8UMm2rQW1KJd3WN7u8kBSh8a1",
  "key24": "2E4bFV4KqTmkgHKn2kQrcK72jfRpBnN5mJaVZNxS49Kz2t792GJtqVC6HpXqBSeHoJB3NYrYVXERhh1srJycvQ2L",
  "key25": "2mmKa2eGE3qdmZfa9scx1i42ReYrxtbRyfQPZDhoextbhqMZsVZRG2p2TQXDvYZ3tAtqoDs8T4CiaXuqqXSsSBJ3",
  "key26": "4F81KFiCFVrZywLdr51Pt8MyCsBYdpFvpic41nymuMtXAWos1w857vm7Fqy77jeBBNDxE9nXgSQDHt5HQLqKAExJ",
  "key27": "4xTCQF5d2FmHpJDD52FYu1N1npz5E3HZKKNBVW6docRC4rB1KugUoK2eZsneD96FWzLsUDxjqvfZBUm6CRTM3wGa",
  "key28": "TTEvqUqXwKr3bDXvAFcT7z3BKS8ukMWsC7wZmUQUnoAPbb2JhRrFkn3fBmnNZfKTWjx8HS1AQcJPtZy1YfacQtr",
  "key29": "3KKJ45aLpXXRGEHtJG5hfjqtUzy4qcX9ikwBEohs4eYRDyFJ3SKDyJf6hKEWQVfg6Mx86RDcS8Wje7YQhp6mcV4r",
  "key30": "43LLja7BytjCXpYEzetZrcFjS19MSMrvFRxf965wVdMyPDSbATWE96EMK4nVQJPt4UfrNCeV292bupZEpAmxPMX8",
  "key31": "UyxFcEJXxECri3yhxYNLAAz4fuWAdqXuQNN8yfsuapz9Vh9BQtHNxTTdSf4mrV9izzEXhu9RrXZXrFQPmiyVvso",
  "key32": "654XyGQyxUdhSzErT4Du8nVtAMJ5jTr1ZnUcEfusgSGf3ZFmR9uJC6Pqi8VRNcKBGUvQLTsGyXty7pXgs357zXXD",
  "key33": "45BUi9nPvnHmRz6xYDSLMrfXXadGobrBWSdnmDHguATQLFREDPxHFbJjYA4wF2jMeUHwhiXLoyCMJZKrAXSuMJqk",
  "key34": "2qH5mMBQGoyGGMvnnkwq4avsNfoN1ZmfeZ2T7qkksregby3msG9fajVhgPoH5qC6xGKSZ7YJAP6wzwQ3nVvFTxPN",
  "key35": "iy3dKdLHbMWQDY6Qq8qH7uuS8BjyRvHxY7r2SCXTQAMBA1avvr97ouMZbS1dnqqMBpsYsbuKGqqcPeVskdQBYXK",
  "key36": "Ga38e6pTU68rCrP2ZBtMPfQ1H7gR3fhkmwBtfbsweeF9mTeUyfiWxT61vPScPusSYo9T7NZbcDCyZUQscyvggtE"
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
