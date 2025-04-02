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
    "4BhCnnuoLaebbfh3eq2CXpK8dwx7NzqLUgKanjKLffYbBuk9FoRPX3MUmuNoVTsFgmjb93orabvmYgxSEtQSFqU4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i8mKxWv5pLpuFfx3emSRQhmxWihkTrRgkXnVYyY3xPE9uMzNrTrbTwPZjecUxjMFiaCYF4MgGrRqtdRNX4BZC19",
  "key1": "2nF4m6kawZUkzSYErntRDhGis24wZycPvXw5MCxHUAo8bnBqtDqgSed8LuYvA4bmbcrobanryhkxKKUNnuREfn5C",
  "key2": "oeeRZGjpvev1xmzZDdZzg9cGBknFvFTPAX3W6iT3RFH3o4XXZvnNNnVKPPTJYw8hkkgmS7MZpJCW6q3fYUWuqed",
  "key3": "545QUwUK6ZAJAoRHUXMXfvxWeMmQyeLyfi4cncUsQtUkuahDBR9nueF8JdvwZAPjoagFBAoXT5x1TDPCfVoWcu3R",
  "key4": "pKeT6ZBQ4JWLVWbitmc5huicx7yActbLeTYk1XoXbUfGUpSzYq5zuyGkju7gbi79d8Hk4a17CjxQcQKHewtwdoA",
  "key5": "61n1wE9BrCKLsSKJyiiDgf19j5QsjDWeFWabUq4x2yPrfjswbM2fzcfo1FVgjLCo3h8cSCnQbst1z8AsYYQaLjnn",
  "key6": "5mxtwCHrBiXLB1sPC1hhqheciq7pA7AJsWQNACWzjMWBDxso5o8PK46YS1KsuH9RYFxeQmeRmntc6PJMusEhuwsu",
  "key7": "5EeJX21KhMfVJsgumbkvEnrKE3fuY2nDbnqktLNXbsXVyiu9pLssvz3mVPFTq3qJCTjw3ty7VG2w9p2Ko6P2dxt1",
  "key8": "3MXKErCJqF2ztV7fxPVTEWCVBoDhB3MQ2PonGGrY2kZLZJkQ5eD6sfMioUsC1YRH61cSHjBe8YJqHhdxMPqBykJ6",
  "key9": "djz1P5uXtkk5oAKJCdBir7aTZxUvvcWmvnnaRoyek9aHWrsW1QWATr8cB46fX5Wnx5TMygNNJR4CKsWyWqtrVY2",
  "key10": "2gTua5GUKu2tmsodKEeYw3dsK4Yrhp6xxYR8xsG1Xza89B8r6tTzerXhVtEsuuKGuAvNFQ5Acqbkr3HaYgtYGGdP",
  "key11": "2KkHhd6wVJJ6kwyi9uqbc54bmWZPqaq1hf46tU4aYQrxCJ9bv9E4Gm8sWUQ7BZ8szeHYD1VeqvzG51azgDsk9H4B",
  "key12": "4kNsb1ydJedC3iLMfhnztLDjTVE3mcFWcbhBM9Rxgp7vF25cpCpVuzMsus7f3p8coCY3AnJQimunz2zvg6af625z",
  "key13": "4kAEGU3XN6EK53nSsh44Vrs8sFtTGr5SL2sQyAJAsotNzEGFvzkewvCkgcvzWy8WFK3i1UAeRNtLyvQ6uQXpDpwK",
  "key14": "3SoVcYe7soXJhq78ircw2d9w1dz615yaXzNsPQ3qY3JMMPHFkcXzfqvCdGeuZswWL8ZToFdp85igDtXehfazQkPa",
  "key15": "nSM3i3c5PaXFxLEcJWnDzVtxcKwkVn9Axipk2inzM3qZQwsVKbXhesD6qYQfGmmzEpGhrnSM1oiNVbnKWprCxJE",
  "key16": "M7MXL1GmSQndVL5rFBpRubfguvtFJBoY7AJ1kGZ1RyuPrY54ab3KXfZK9GewdngSSE18Ggz8Ut1VWKdVXoZdaC1",
  "key17": "4snBnCcQGH7FW3BSWiTQEWX4Zuxq8u6gzdymGLjYcDVy87wV5Z1ysGKzwXhSbPxaayHzESjMRBg2igEQ6JitWhjK",
  "key18": "3eQomNj8xB8Fe5X95Tdz8EmaGJV6MuJFynt9h3voAT1gDiFxhwxn7p8MewLvxAquSGZ4BFGNf6DYfNyShiPxLcd7",
  "key19": "4XDSkUyeZbYfe7mvNo6kUDTgNBH36HDpw7nwE79fWYbqsdcuqWsmwbkSArP5Rv32iwZdjeMn5i5zTgSusY2PhHFk",
  "key20": "4uwxRduVWB5AEZbTWWXFjjiigVu8dsfQhLySMjXng8UtPyecf6aRn37rahYvn2F5nvE8bdTiyVJZWagau7ABK39k",
  "key21": "4YmYTsAP1BQLmD76Q52gqdQxq7YR7Ad4MguH5PCe5tmUeCvoxEnz4fMzYqZqByLHAf9SiA8yuezDD7PfGDs2HoLq",
  "key22": "65rR9niAMYKm2EF7caXDajyrf6qCHPWPp3RSQdKhqd7ePEe9dszUXtiyaXiErLy6m1D2ZbymPhigBLWcy1ch2vfX",
  "key23": "Ms4iYfGcbdMLbRYy7QAnxiVcCKsNx842nkCvkUu6cwvzxgACKdfkQ5VxVF6rHVSKj8e45Uyf3o6gum2GTErS8nw",
  "key24": "5B92o4pbY4jim9VT16JP16u4zZ3VCdYk8VvmB6uFk1ZiYqkkAr3mBga8x94YnJBpgydp3tq9au9UwjiCjdRnzkK4",
  "key25": "4EcxBVCQtLeCxhFgKZNZgYracqbRUa94SgZ33rUA5y81f611rxciKipSuLbS2kLp52Lx4c8CAcBAXEu5yHPbpweH",
  "key26": "cW3rAg1omVu4FQY2P6EMYK4vJAVPVq1TqU3Gdf7sh3Tg8WGvCTjBikwhHw9fCCCZBYDJKMwD668gD86zfuE375H",
  "key27": "3eRrmeytLk7Nvn45hQxunKgq5PCxXRZ82crYzZiV8xMzdQdu9Pe1FqZkcmHG1XZhGboUeQPJFdDuh5WjqoBxrPY2",
  "key28": "2qAER4tmQ6osRwCeyewmsiBJbVJUT1KDdbkThjfcZ2uj1m9nKAKU6pZXdgr73hpRFZ7aZbboDwYUg6WJ4kogqehE",
  "key29": "33bpAbBz5j6EVwzFbPzBKWu8tqsRs98zfpqBFM7AcqZ3n2kTnKnrqqVJy3bbAEa5rLGo4rtQBqjkaYEsW2tidCFM",
  "key30": "4deFgserjceP3SFxxGMyJMquXsKRf8P281tFwoKG2Ay58sGfM9j1jjfmrZLExsEWmMwSDgaZZEo734AXW2ouBt4k",
  "key31": "3b7iqtbPpP5b8rWrXNzog94u3F7T3dwMxwe22Y812tfBif4KCeVJV7sdtwy8oYNdRtZMDLFpz17Su45oJCuyWEi2",
  "key32": "675x1PhrH4jYdNa7GDgC87FBoQNWr7FcW55jRPCjJmj57gDYUoC54EnAPk6yCAVsncpyKopyMwfZB5qvUDeiNjWb",
  "key33": "kuGWg9HHJ5N9BZKSF3fJLhqBdTWTNdHVgCrpxUf2T4fgGkRvPBNkDoP7cw36adpiBRTtYncAcYTR7xf4AfB8aUJ",
  "key34": "4ySkMaUfw1SejNGvpWt5R2Q8eUtmUWXEp1yCS1GASgHpy7A4QPKpMA7QQuChPjkYJ88enUUfA7eS9Yxzqtg5P3vX",
  "key35": "3saE3EBc5dqSCMB8wb8M5upjA77wnX25TrCwswFuAkt1N8nxVXGpCUouDZqj1JzgPQF5FMBMJkY3DeZ8DJULMQJh",
  "key36": "5idm3EbUiKo8bXw1YdPuGdmgH43YTF9bNKpTHXhgTmKFRxSCgtT6BTks5TiUp8bw3FKj5TX9hDZcGkt4ZEv9m3yg",
  "key37": "423EBXiySB9r4zsUH9Trbh5GSqua1qQBghUJDw6TWM61KYYe2xZ99Zkp8Ep5LABxXVxiR2Q1dt7ixhkN6rHpjUCv",
  "key38": "22qS9GMBPLqZVuAeBQs7VzhWbdoaAPKrRbnLdSarpPmEbV82BXArFbe4mfbE7Tc2Sms2F3ismnUDisY8UdhUFqEK",
  "key39": "5b6AhJqoCuwxgnbfUmPPP5p5hGSR1bCFbnGauQMCvsEm5kgPW9qxX6EB3GgpcJqFtEXu2YW9tpJbtgF1j2T3JTci",
  "key40": "5rY4jJcWBTyKfuazAZYmaUZPkEZ2az83Z9ZL3kd3nzzg3zuvhutMpjeiyKcQfsQECwKQ1mA9UmKVQCEzafAks5Zc",
  "key41": "4fk2bHAW4EqokyL8y9pEHEfpjuk5Y6nEoZVSBfvs1AasvD7u4nuVyud25VKQJSp6YwgKZSdsfaYaKyxcwLKjndxk"
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
