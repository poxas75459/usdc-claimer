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
    "5PTyNFu4YnLYaEczGSHM9mtMrvzxNdfgPrJW6dUBj2tV5t9em4WibEReneDdm5aS3tFcWUTrJ6iPYkhLetAC1C7U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xsU7FUwkt8yuZjcyUFeRVEjdSJQSMUVsRueF8J4gtsbyrc2edwp9DXakD3cLqoHeKCwPeyWW4vktCgBCzRg9ESs",
  "key1": "51xMyPFP1MHSmR9C9NR6ZhVwV72XsePMUDKnSx4nEZ9ffSQNMBCJ5GRQzFKQ4N83hrznGM36dQTJwhPG5joodtTV",
  "key2": "3KrXnQAwo2Rasvx2c8NoaSr3fssUUGff6QG2qUb1rbuJeVBh3zLbbNuRKs6HT2g4xHPun6TzSvhnnRVrF6AvXTCz",
  "key3": "5Sj7sdbYktHiQxMFp58iDQP6FnowsjuEqKVM95M52Qwj1Y9hJfKTugu6yABc7TLf8D5KmafVtKF9u8KcstyuZ87n",
  "key4": "4dem2iYm1wtC1G4tVFeG94qZsvsqJbAbSrkxj8mvCwAA7u67vowNb8ZsnCiW2GpYDMJP6gmPi9Yg3SLr3iRVRsNG",
  "key5": "73X7hnJLjmnczL6u9wPPNj2m3w1bKR7XEjULSnNbt1s9ajLU1krTWffd4EBPkTo8fvvq34u3hxX6kBqUo74h6tv",
  "key6": "2zAsruTaJ2iT18y89gSC2NsJseicEyyGr6LuyUFtUhqAWn6tfKe2eC4J8aLy3KqTTQjPwDefejoFxAtiiFoo1emm",
  "key7": "4vmCVB8WdHuSh6oiUwwZ7RwfpY9MXK3R1WwTKq9AWfMyB56gWHfxFR1jvMv3QipuZEC9jSKKi5QSke61TapY77kd",
  "key8": "4UysSqH1BrePavECZm8LEGVUXknxnwXuTxpUccECPnDpxUgv67A6JUsrBWmS33PuNjByYd4M9YiXN6T3medgkGWZ",
  "key9": "5YqFUM33mT3jridJkbJkusV7qy13et4EPnzfvJz2cyXHt6SBry7BD9BUF8geyzVhPKoHrLFogbMLGwv4SFnoLT2j",
  "key10": "vcvZnxwKvnbTPu9pF5fWY2NuFuz5miuYQe23z5gqZ6vZPsWdhVC2o4qo5BjjojFeYUXTcstpaPC2J8DN7CYUMP7",
  "key11": "4ou48ocGLi3ncnsYS2hxN7UoW2R7kHz9xJEtbqemPJivCTmPLK4PUtASoKDHvz3yj2us6AkTAKAzAzc2KVrjFJvP",
  "key12": "78326YhjXf2M3h2dY14MPhyTGPQ7DUvodQshru3i7UNpXwe5tPhh8zGKJFrXBTa9J56MU167H4tNZQuEJHxnXvM",
  "key13": "42vBWcYGBig1N3Lb7c3EBEP9CQVx7AmrbPrRYXiZ9rTHRqva5Ttfo2uLfRETPoz6HpdBvmqqPQfL6P8j5gZRTF89",
  "key14": "3TwzzPmNsqhTzHK2VNBRL17qKD9VGcizTytsywMJKjhDgqBKoZwJVHzeSQ1YgTs667rLjPHzsBzy8BYE1XPZrSKA",
  "key15": "3sAcszgh88Vf7ZMxVVHGXdkhsCWC9AMjJV8fzep47UHs1npvdn9GU8VWDdyjXDQKKNoZWJQB2ammxLFjHLhcCd6w",
  "key16": "2NuC62XbTkCZgUD4aAQA4A8fi5vgvS1yAEmHkCgD326rR7mUgAP98zjJuCD76NumSKT2AmEXR8W9Jou71TNifgNv",
  "key17": "4tAjetnaqVXtMSWhR91rXgChEb9jep4u6HqSc9P8jqDfo1i6s2kbtPvDvMJkBdybEWa5Qk9AeMA45dMyngqwamUQ",
  "key18": "5z9py6MQ5dKgaLiVTrzRscfM24M3EGLtgi13sZBipz4aiftSkXeHw1J8BxMy4jvnsdKRN7cTb5Sxs6ZoMYuWMhRM",
  "key19": "64mRCyKZs7Lj1MfmAozz63CSccJzAeHtoshwtNy92mYp3Uayqg8ks9kU9iJNGZ5qKeuMcKges7UCEuLvzQ6cpECa",
  "key20": "61DSxonoahhJ3BNhmyhHcg94E179noh8JjNkKviZcse1KT4x3gmsnns36c5o28AEziDAvNKNZxW8fsQ2PYCL4F6J",
  "key21": "2T5eS9TeP9aVdJDtQgf6BEn62JT6ULZfhYo2MUHWCd4569c3RyTCzWszymz65HkSK8wVeMNsrFStscMo2bLwVG7t",
  "key22": "31UYkfEVYQybhCgH6wU2xvXFynvgpU1piCgtTeeCc6URkgtki5GPQVvoGzdv5LbBugMbSdk1Qk8P34uDy7nacFGG",
  "key23": "3cRkDfHgZBsQtMoov9RiL8i5Jchuq6W9mxyeS9JU95cLLjzz6hGJgjrtiFWxZTMa5NJ1pupZKCTvvH2qgSMC7rCZ",
  "key24": "34Lh3gaYA6YFoLN4hpuh8GnR3smaQDijvGnn6FqqGcDxxe86BY4Ux2GPwSPvcz4hRGCMRXNE14EwoNkB95aiJTZz",
  "key25": "2EsKCcq1pUFh8Mof9f2NzdiAXxzfTQ8aLgySUwAEpioMj6DS7vPj2RKH8xqT1Z8H9kk7sm7dMafzj2KugJ4aczuW"
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
