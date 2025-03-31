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
    "3fp1baA6NH4v7i7zM2Dk4DdF94r9v4dC7tV58Fkx2w1VXAerFG2kFAZBJZ2FTfDRKRy4sYQE2bqbSvmh9N7tj7m2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kBNjukHsd1Mtx5Rw2NFZvwCVaUjzJgHbKUtYz1yiWK2z3oB1Rdq8jAL41gmLuyvhmPZfvCEVFXivntrJjFKeLaD",
  "key1": "5S8xgZMHT8DWVJZ9Dpce3riHbEW1YEcNatW5cx2hH7yHBxyp8APCaRVhy1VtCVAhEGn5UZn5dJAgAr8tr7gzsPRt",
  "key2": "5q3eD53iHbQHPbGSQGDqmBDcGHW488CdZB9oG63PaRzGTSFRK3oWba2qBpfLE4a4MdKiQHhLcUYcDtvCSoW1jxXf",
  "key3": "56Zzy9JTA129QebDKUxPamNeJWWUdCgRdEYx96ebxcjJZAnVrxsjuXHjXwqZMU325jdnxucvwsQA2zM18ipzYa4i",
  "key4": "29iAkscSJqY2atLHKvC9N8MpLbtJbM9qzNFvudYJJVtSknrCPbkW9KVfGuvBenkEpKy3q8ZLChcsDpBu1M7GDv2Y",
  "key5": "5hBuLkj5sn11GAGJ2QrF7MKJkb5w6r6tGnNwtX2AjKFQjxeEjUTAeoXfxar6uWv9XdjZKix4R5yAuccJJcJ47bej",
  "key6": "4hEXvcpjMArxxxCJExzG1pnYZfRAiUwfkpTJNzcjtFtX1SSaDgb57aKeCKxdCV2FGWEQUHUWEGMsUzqsmLzr4u1F",
  "key7": "CyS8pH5Ehp5r2HeJmkMFpTUXU1q3zJPGqYRnX3amSuu6m5iXYLMn1TRiaWJHpsAieAvUzELt5qP15a3JXEbUSRk",
  "key8": "2WMvfyHHmqAU7gcRCeHWGUYoNsgNtfJt86NT1jDx9Qr2PGbBJ8xd78w9oPqrmgtP6Ljg9Fss5794CFA7bwjySHVf",
  "key9": "EELJ9VKHZkPgSj3DYdz7EutZT5NdW6gq1XjgMAZFeNLraHsRZWtoYfhRu6m8cX7TKxjNKf6a2NAWMddzeHzTuda",
  "key10": "5CF5AiquaezheAuoza3CCasjPwc9uPc5yGYomaEcqG2tEW9AKQhK8XGRu6powMpaR1wZe6eEjh5445ozCkSWz7Rp",
  "key11": "hr3u8vEZikoxnDUmtsVQCZLfWe5oPx3nXPMioTeUhrY9DEF7QqESCJkMbkhoc2AgjS3sA2NRuSXwQiRFLRmmjC6",
  "key12": "yJswMmGYoDp6jgnSniZa2jVfe8yNPqAGDZPDwb4jD1ReqDMgg6Hgpx11RHHuEG4A7wD2S1kAoKx1uJXZcqeuh5p",
  "key13": "3w71dhiT9UA41iugP2mKK1C8c3fYkSS2MAv3Dtbuw734JF2Hd87iURUWinSVHJ9jQTQ5FvfR9Z5jodUDuBWYv4h7",
  "key14": "qJvmPZMniTptGCQm6FrYSmPZ5S5JeU1zxwbf8akasEPNcG5v7edMwbckS5gy4eLoGAG7fsd8PMw2av98LxZVtJv",
  "key15": "XUsDEiBzmGubfgu37KxpVF3VR2irSSRrukpiTbTHspseZtCSL2FzTAKAM31h6gS1m7wPseMb8JSMSdzXknvn5M8",
  "key16": "jbCDgGy6VCjsYRNHJsF2Eq66wHBYV1BDUvXpXQLZhfZqAoAdtqWFP3X22uMQtq1s62iYeBDeHKXDiUHeX33tcvk",
  "key17": "4iHAQLUWgBYJW6JiVH9Yxh2c2fMkDT3Hs1rLUaqjy2ADmmdqtWqUXKs1MNBHb2o8PDsnAmFjHQGBLe2kh8kDCi2",
  "key18": "2XRoZu6CX3bYEPq6i16LFbiChAc6KL39i4cjDgWmW2bdRDpHaJRbBhh3LhWjSgs4u9yUx3PgL2C7kWAEVubGpZDy",
  "key19": "4XSvRGtz4wAD5oUg7oZA9oFW84EC7cRpStE3EbMaGmUxQmLTNeokyVrKFMLRVzXCiWyzy1vENHiA7xynLtgAa6na",
  "key20": "5qussXGY8eeAx7Fzjbcs3ZqSFDFBXcqm3iGq6crVNfQKzFMncJY1NrbezNrgkk8SJ2A3DHVbSJswF81h7vgbBVY5",
  "key21": "JG2cWrvPdbALQHwuA8TuMamgPiSo1kW7NL1oiaesvC9gPS7uZLqFMUuc7sZnsvEiNiAmAFrHLraL9kghm2JnUeU",
  "key22": "4CvdZywwKA2otmLSiad7AXXCdPKvtB6THcVMX5UP7Q4wSvyL1rgBFCbRWqnbmv6UNWX3AAADoryPVLZDAGzkHTWM",
  "key23": "RCueZMLXL97Jojn98bE6V1nSt9tNqvWjCQjFcvfbofU8DzjDVPbXQqvdyJMq4dbQcKBqgcX7WtnRa4HUMghkrpT",
  "key24": "N3ttG71JEimLdiUcjGkPQSvzsE8G53jbNqob7oqBW1UJiHjeoE8U24EKkmM8yTeAY8TqMDw4pdSZULHpRsfsSz7",
  "key25": "3iUkyw4sgxoTfvwqmXgNfdog3UQmeUDwbUfi6ys9PVtZkuEtyVd334z3CMYvuWf17ekXTYGb3zYbBSWLZ7vg2atv",
  "key26": "2KDYgszkdMveCkFmgxES5mD8boQayLPjVw1gGdzkehbEHezLtU5WRKLL24kw7kEmBG1uEhnqNytFE6mqYnkuYyc5",
  "key27": "FBXRhvDSDJvAusArsPVU4TWyyN7N8aD1oHgGTb5EiTaL2kNcKbuqTcAZSTWaqYrBBfnhSSsp8hwPPo8x9S9HSyc",
  "key28": "4pSB3iyAEBWr9esYkQ2EoNkDWBqEddPC2MVMk3gk8tvXmGaaY3V2dgN994QhriVUfVGJ4fTuxQT2jye4dRuSuNQk",
  "key29": "4zhwD3EFmSPxSNHwocC1sdWJQm2ur43pfBgeSimfyJQRL9Lt16yQhyyUQ2CduzY1ZGeDfSuqzGDqE57N7M221ngM",
  "key30": "32kVEnK4Eg8fRBzWBeTtEWBxWWjz4LCXhn2yWRN36KRRYFSCe6yKgwe5NVt44jc649oWMVyGRA4DaFVZvatatkDr",
  "key31": "2CBmcva59VMmk8QWKWwfUwSFVeQkFmXCKP5VyeyrUhsD8gAH8WMFfCFkjBjVCmbu44rZvCwmfZuHt8xirbpWJvxi",
  "key32": "2oMRRA9Q8xUbt3cQuGaBM7uHeu9o8uCd6MawDLFrogBXSQDK1NH9QdejysYeLnRQrDFNyEKfFZsP1574JsijP7Vg",
  "key33": "4sBNeqGYAE3AvyYwCuTsVXh7EREyF3HNrPwvrYDZmhgh4HigxYCQoi5tt8WVpXiFgyQ57kE6FJ2m3KsVea6eUjzi",
  "key34": "5rSx6p3ATQdmYbxF4AWNDrp6vjN3f6x94xAT6BQ8XwDHAvZHNMMhbzGgQgqL6sB2ZfXKhDQzQjd91nDVjpdFyGsg",
  "key35": "XEQE9m9eVwivtNgRjXQaesZHxoEexJKuR2RmFstURcnevCu1qHNSCqWmaXewT27K56m7cmN3erRW6cwKwCcenBD",
  "key36": "47kA3jyRfPcL2TbHBGTSRxP1Qzcxovkw8h9CD23qspJwu9cE6UAVegA62py69C4kRngzvv42kNNuETKAjjf7mJGz",
  "key37": "5xR2kZECKB3A8Kp3WA11KcUu2rwmZSXQHMS4ENoQm33Jy6NtbQDrut3iTDXST7dphfjjtWhiXJrxUSQXBsqMLKdN",
  "key38": "5q3r9sCV6JG4pxUwqgn94Sf33sDK4TAKPSqefpYWFebJFkNHcnPUKE7oqwE6VHgaby1APQ51hZ9V7dTGBdp6k6hX",
  "key39": "GGBX9Z8QVwE3iC1TmD3dan6jGmBsJp3NUmpa5VVTQTkaqVmfDHVnP5oZ5a5NPcSoEwkY4D66PwTnJXFpJRH3MxH",
  "key40": "5NQ5D2Mg5Q1JvA31tuAUY6dgcm44J4g1oZJr6ivt35gwBfd3oqnrwpjxf86n53E1BBWQPxvHn2QuzAMTYVdAzvXQ",
  "key41": "73zFowyxbNNqHS3C8hTRxkcPk6Rv6EiJLXUdAw3aSNCNfRucKhzqgor8wUtDnKMP7Uc99nFhbFJ36nEQmiPAjFQ",
  "key42": "3hpmBuMQ7mNrhBuRJwfqhFh7UfTiadbSfKtH9592smosABZfjELoZeUUDjt5bm91wYJ6kwbQR1JXaEh3GcYCQrq9",
  "key43": "375q3XXEkWcQe3UcLV4FjCQvNXG26RXoibeiuLZ2xhnFZf6dxgBUHgFpiv5bTV85yky8oCV8iN8qPnWcTWprUm4b",
  "key44": "2bTx7o1JHjtcsXg649e2vpSBW5Awk9Kgd1bVyVMpZ59vQjFDX6xrHwHds1ZDtCVeq3obCsHC22p7KP7tExty9UrN",
  "key45": "2EMjLZuW29UptrD4QYDvyLnraZZ4uKuA89fYHdFuQWTMozyXAnNH3NXFWdpih5cF7ZWtJavjVwJt7ryt3CPdgWM",
  "key46": "49z1ajxrbeHM7BuWJzQXgzVvPyGLTBkFx5gnZ3uqLKjLGbJdPa3MvekCQmyjmyFDAwnXVJUkmF8T5XwxtKj6Rv88",
  "key47": "2NdqmFw5q7QdeQkNe3nVYXpppUoMD5N58Ut2RdiHfZDHDvs2qiJswh6pptRdt2oLMqjbLKUPVGibmYGkEUbzTtdJ",
  "key48": "3BFqMrXLeqG61YExnFKQUpBHWtDt7op7q6bMHAjsi5n7dYLcpNTZKKntukf3oAkrVnPQXRmN17z3Bbm3EbauaWmJ"
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
