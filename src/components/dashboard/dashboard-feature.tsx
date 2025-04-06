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
    "2DYojHLE4faBmDGxEAKX6LevFWBwHeM1W2epaxfKMeupbnakDzYSHqjmEgpiFAcnj1c1k8opaD6MS1N2kUKv9Xp6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Pa2Fvzr6EwhMpzeGfTEK2PmEbPGrfaaNZpWmNF6AqCJdezZ2EoNDSvrv4pdnQHQvgFsUux6heKvu2GKnGybHYCj",
  "key1": "613fkHm7oacrE7AA6QHB6qiZE8Mhv4JkcaW7jD7za5degSRdhBZRktcGReCiVsXeRP25dW99BKNDDMXShv2y8XUJ",
  "key2": "2itkuav7NAuSLDRxoUW9KwCv8bERcSchcpkLBwCdA9gxwvLmnwjnKU6LxsemxVeKMrhorSQDmxDzmgW7iYskKJFU",
  "key3": "2dbhYdSB6JvofQDK2wJjwfLJDgERCtDtb5ubDseXsTuzednTgG7WW7RmoE7UneP6JHtcSW6JNg4M81XkJHqdn7Q1",
  "key4": "2ncKPqq69QHf9ySRFD89GGQnEkQRDwAdbkNxb1TPinwdNJKRnuoHMgF5HFdVqngoLYXsPB3kynDrDzfTE8HiLPti",
  "key5": "4PrSZNEnL16DuoVvn4Brwur16BRVQSC3EadNEb7hydCPXKCFXXodAD8qC7B5PS8JrxPc3CyxdHwf5P6TrCoNBWTv",
  "key6": "5xJzaBj5sZQFfQiQ58FkT1GdFfiJEvAQqTR5nm7gVMbNxi5fhdphc5Xn2rvXFpNpg9vhxTD9JQ42Mhcy6uSXUyxZ",
  "key7": "3gE5ZyVVEQQZ49kn2cVuBHaNEDXFMrWCcZdn5Wk1c9MjEwuHVZkuHCZKWXKZJMGduw1FF1nb6YpBeR4G6smBQhH2",
  "key8": "5gLDy6fEJd5LVDredz2XfEz8A41dTj7PfHX29962mMqQ6EFQVvrnC7eEABy4p2NGtVJJGegDT5Lc3EyjDUUWzB5A",
  "key9": "LU1W664d55HER2A75R833mFZKe7rkeUHERXKEe97UBayp95h99pDYsvLph1hzNy7QozGgqkDdBRWJgdAJCNC4WW",
  "key10": "65cVb9JkZd9NeZD1XFFNW89QCnWUAKPmefTdaHe5hY8spocJSW43eqJ9K1nsMkuu4rVRUcmjXcZJqTB4A2GorZER",
  "key11": "67kJKNjwRj2cW4dsQMPsngmWL7sn4h1X42HF7pcDRbcPZcn4zgkEnXeRYKgsD34oBqn6xEJ5XpBuWNf2g5uUWT8B",
  "key12": "uHk9VjgdC63vZFqnSuoLvgavAuj9eTi32PXHNWvLy3UZ2vm4WDkkv9QijGvEattbVx5MsLRLYe8dTzY2XdRX6EQ",
  "key13": "4CBepaHyHt9G1uXgJPrXEdGQCCoFVZ6t9mie1LHrexFieWBCNQQgPxM46WZhZrYRuZ3d2pF2d2PTduL9z7y8BRtg",
  "key14": "5ftGn5vZhvcgLLh9wJtp1MNf2sHZ9X5dg2RH7Zjo5skAMuPLWATkRL2x4jgX9agWt4Wnxp2t4nf3FmPXLPdW6YY7",
  "key15": "4Agz4yv6SXmbikbPiB59AKP4H16ipBzCuAxfJrzTzggxAvexyQbdUgVnhuwMhitx3yjVrdRnZTcfSaptmbs88GMa",
  "key16": "5SatypRGXZzRiUgfqQodz8h3udeo5spmWaGXgdRJ6dDNm6t2KcehShki9RxEYFVZU42Fj5hSTX3p5sJ5Ea9k7T8h",
  "key17": "3Zyf6T2yFtytX1vNnmz9RAa5zpCKSucU1cyb8xNM3cpkSyw7BCTrcQbiJYxxgkWorH8P2d7peqrCHp1o1TVadWMG",
  "key18": "5dGpSEng8sSeucB9yiFuadKCnFSCZnpjbUWNQhvsZqeZxcDxekWXbMrDQ2ZAcuKRWBTghydeY56dmGzLwpssQYvB",
  "key19": "5HCHV5GNb4PKR67z6ihCUciAqUbU2eHKRCfe75nxYP938mCRcuMPx32jK2GvXBmWLiFv35csmS7aXCg6FBtUpu7m",
  "key20": "iRJGZZD2ikQFZcBtQsyrKcDDpZeabRko3HnATRkUrspPdBGviPGXUVAEuvjytkvJdkQ4hZdssfGcNpvf5R326zX",
  "key21": "3dWT3dvA9HtU1PE6tJRHAdfUdRZe3ZUVwGZqvPqD8Qcdw5hQcoJ9h1RjR1dDP59C8vpuLhpskAy928M5XT4eWH2C",
  "key22": "5ZRX6duVJCtWXkAV45o1Cq7Ko6wfnQrbnqbswwk7CTMzdX8Zzi8BhRgJaH2KqVumn9D7WqDUoR4NrGQmKLgvN2aQ",
  "key23": "2hngjjJFoWiywDzirahnckcwdRM7duifHHv2pp7TyR6uK9p4sz3ZKD2zMYJ5d5bLnC6y1YrzeUvZXtKkhmPe83PZ",
  "key24": "2K6obLyp2YPz25VBgV8FVuoYYX6bcqF5L54q6ixT27yMEJ1YgPynerMTdmvDHFEY7k4b7NTbUSxNTiwSmCf43x6C",
  "key25": "4XPHoQADiaoBpfZpK4cPjE8mZh3UEeW9jGsfA7eNwwHZkABtKWmaoHRoAbhpTFa9YkzJnC4gN875gu2yBuQv3xeR",
  "key26": "pLpkk2UJ4ubYNhhasbN9bcpCyGXDBQTmZ6SaiwTbwNUie3Ea56X6S5ys4zyenHkvnaH44hv4Za1d99VN6zuq4vS",
  "key27": "33PoGZ4R1QuedZxhbooYnzD9raJ9rQsXginL6wvTFyrKhzCEFQcKFNhwCMUT2shBLG5kUgnASvxadM7bNhBK85Y3",
  "key28": "2tBp7qtx2ijBDG844rviLSbRkhVsC869vpdBoaZU6n19DoGUohthd2bpig9f6EBjxJ7A3JV8kViJ8ogCY7RUxK48",
  "key29": "5P4AJfLC5vuoAVdTGZFe48dVNwRGPMFUkQQJkcj9MQaHXkkb5LgX9TcBCv49XqTNNRbYNewuMMiEX3mvsVqnUiN7",
  "key30": "59G6VZ5WE44kdmRPQKi3j5Ddo7FpR4W1EHKjGDbj9M9JqHNp724HdddCs8RbD71umFHds4MJs1jm66F1YHNqRj1v",
  "key31": "F8a6Kzc24PPT9Cz9mdiszF6zyZropquog2okYzYU3Rode9MJtJuDjfPz2MSLwSgRnVXbbAMe693iECSxC8TQ4JT",
  "key32": "3MStG14PNh3KHxTaKsuBdqCDqYrWYYjTtV26yFMMqdWDSvrKaPUf5m55FEd9ya33g2a8Ggoib4uFfeRCaS6fpXc6",
  "key33": "PHHUgCxzZSkDEPJuksYcKHy59jDYkMX8rFUMp8nqZJfdCSKvBaEXiTjdtX8KsyWJ2TxtbQWMbUqErGGiXLGevsY",
  "key34": "3xEHKLtf1FCfh3zVQMhETfLTgYfa3eH59Yzx8a9H3Tebin93eGfovsPodzfA3HeGskjhFoijJMR2X5BVhJ9V6g17",
  "key35": "2HizV5GT9CF8GgDBjkr4WteYmnH9rUJTnamKr91i6Ng8hyeYbFsgGJ9uEo3ngZVgGGuxR5cxNxozjQPY1ZYhFhWY",
  "key36": "qjYVowZ73SBTU5ATMVEeCANAUM1TfNCKV59fZoMxRa8qjJr1HrMnWP854FhHVZNJWak2CQmXpXkRb6ZGuiqXkre",
  "key37": "52YvDVoVkGvZTftXmtQLtbHQThZDAMoQUK8hgHAMTjiHMHtjYHSjCdfbFjUDiPXPwvt3edHfJSUZVFjSztXS7ay",
  "key38": "5UbLJSGtmhyS9PJnXxjKCpVAywxocHfAGq2j9iG31H27CQ52PfTLBa9nXVfMERrKYG4FWDHhBkX4tRUs2HsJfhk9",
  "key39": "bAds1BMhHBNEHoWWyQ4KN5b2pEKu27T6mwg755U7sQsjbwS87KaHBvEisPzbXUCZeTVhUj93PXXTMP2uNBww7gC",
  "key40": "21vQEy4ZtVX3B6fw9fWvXPThW8fmYmKkwoTifBAJ9ZEH36GAm5e5hDE7iE5ixtisyXh6JC5EHuWLtQSRogrNVN79",
  "key41": "4DfRWaUdxvJnGDEfQdacPu5FgDLggfQ7fpZXsPQHSQSyRKaq5pgck8XgCHS8cVJoWtTY3CCaASe9RQcDBwgZ2fKg"
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
