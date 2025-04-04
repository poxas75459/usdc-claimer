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
    "CkBpXkAeCLb5kmru42cxX3BcouqMz266Hqja7AuE9BrppQz3EMfYnRDouvEQntGT87zAbdpLobeRoNmw4YXoBSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CZ4NJKHGtpqXSYgzk4HFhcU9ETsYtMKdB1gzTcLvoGw2yKYqDk69cwtnGaNwXVo3mdU7FSJpFzhBRNRW4R1cM4H",
  "key1": "5j4Dtnoynq6HVjkkCbe1dG5RPvW4sCAu1v1Nb7Bqm4HaYFkakNnbMgSfHsSck2YYPwQZ1HrdXRS4PMsnJWCbeinK",
  "key2": "3UhBAysZsNRzx7ZAWVkd2ThktseQpqYGQxjkxjrxehHBwv9R2GUGLB8wByAcdsMKRxyMPK3JeF9twi9WH8JYsJba",
  "key3": "3DNzyC2iGagTQmt1Yce2SbG6z1rjj9Ry4WzUYANm2sLENMnHacCz4jMPAcTfXQMHvhmRGXuPNKF5LHveskNNpK2s",
  "key4": "2qL7JuP5aPFvDP9Bm5nKzZrd3p6GJCfc5EwuRfFHMFENBai32EUqyuRwFncnQRbE7yrcVhM67PxTA2Ky3D9QxCxk",
  "key5": "GkrtwEXNG9UJS1AHATT4YRd9aB28kAjAHmvuGVVbh89muBHUPP4WzzzLbi3JhfUUBmTqPshifYw2deEyigaN1qM",
  "key6": "3o1zBNBsQqZYWPixrAFnKUFMThWeSDQtGGSrW89grkbJHcPhTb3vDNe6Wu8bKtjSDLwm1iQN3ozGLz1mKz6xRvRk",
  "key7": "4bZt2etP6RUCp2gUjzf1YLCGiLjwti9Fe2Sdy2bRJifPaupuMTt5UTbyTxUYcSFk2JwiXeZ6ftSDFhH3HBBjouSj",
  "key8": "5ojJMan4v4MAA9LNBhtPCTuvc8cPEHvgMpnge4cJn2kCToqL83chtsAqDNzAcRtY3B33SkW3B2CUga9ENBDWLVSB",
  "key9": "4ihSuAtpjbDfRBGMFzJbcs7GHBh3kyrZ5wwfp6SEJqN7hSfTB9eCyubzBsouXSVUACZ83UPFYAzwxG1p3wWL227w",
  "key10": "2tCS9cCGrdLAqCg37bRiFNS17w4epoSAEYduFD1VHrHzdD8dfRwbXSAeZdoQ8edGwSipWGNbLNPqBaefvxbPwBer",
  "key11": "JHQ8BG4XzU2hLmuksBuQp7c7uQMxLNp6e53dJaMoTbKbxxFseeBnwP8q5bk2MLhCiiX2h3EiqygBBQStD15wDHR",
  "key12": "5kLxf6RSRgMZGLenZUKQyqRc63Hnu5B9jiBKFWEYr3C1PuX9FNB3fK6ZJVep81d4veFezwcRW1qgte7QtmU1Lsh5",
  "key13": "41EwwB55k8rHadxx7jTS788ZeoY23pdkSG39DdQzigb93ZyMy3LuQ1ozMtswJHYoqbMjB6dbrNRPaz16ZcsVWMpX",
  "key14": "2AVMMfymhNQGcnCyBtUL7fv9P8RWpvLGgr88jWvsh4ZNahRB5jxZYCRPpZ85bbR7ecjnPqymwDHsneorsQfqDfT6",
  "key15": "2Wwm1kopr5nMkj7azZA6gj52o88rBezFGivCgXiqGF4MPK82MDX1bHKAdJmc1ph81Jpeh29arCbzR2LQZs3QZ79A",
  "key16": "BjHEwbUe1ir5vGiWhYddzDbuqVCWftSokRYhq1UoanjTrtfqib2WqF2nNxthr8Fm8WcxrpkiYR6spowZ8xW996M",
  "key17": "4j5ZxG55JjauGovg9p4Uq5s1ft3vrdnvNxiXaHKupVGwrdnZPMPQDuiLoB3fMjE5JetyfRuNjHeUF3SfMDuMgVy",
  "key18": "4okX9AYTQRgXQjGCHWYXJ4Fm4atmXxHfwovJyZXJHYMU1JkSpHSLAS9FQ5MzV6AdnVQ4Yc3TWGDMnpEEjrqLu9X5",
  "key19": "3F1LyJL2DgQBBsrH2gpwbdSZVjyq5KCuuTdFucMnkHZJZsKLDK1T66sPp2euFkERxxSiiddai7uNeRef24VdBj28",
  "key20": "5yyYwVj82YjmDjryuoCR4dN5xbDoYuiv5RsQ432yukKADYaxoZRFNrynn5Y72NievqqfawAPXG8ZeGrswCwR7EBs",
  "key21": "4UdqWTfUM3tnJtVR988EMkPK5eL1YCVnAskvMsX6BJ83e7neWDajPwPn9k5WjpcNKCuYTUFW9p1VXHm9MFD8RUZB",
  "key22": "32vecnigX5P67Q8yQRzY2HRGvamfppVMsgVwZ8KzuLkWbGUemWstXsmA3H4R3UhcPanLVzmZMzjLKyHercaFPoDs",
  "key23": "41M7ViSwkvhMEZSknUMAcmPjQtbjiA7tbAPxmtZi25FZp66zQmrQ1tqrM693EKXand1MxmPd8FVG44RWxfwf2MTS",
  "key24": "TN3sjPtM1Gjhu99e3eghizDoxso4tT59iudkRfEDYP3ptiH3g5xuuE3kQhrzMEYj1Ueu68UkFSEGJrV7kUtJRbw",
  "key25": "2YXgVLudN8UjktFdkXYL8UPE3Uo7SQRtaNEZwbiyoD9Lr72qggbvf8Dxwd3LdN3ymjUzpaG4i5rjBjeM5z9C5pzb",
  "key26": "21G3bk8Z8dAKvY87ZYN3WjxYumrLaKYPGN6692hRDN9jFVwZv3pyqjnLgVaw5dw5JuccChpUZ6rRrGUP34kKbon7",
  "key27": "4iQKegZfdRSgVNxcvNXngi5ArhZ4CZ1Tic1mVVpfiG2BUF4XS23HjBTsicc6Jcf4mSGFH1eR65111MijmXCgDt4y",
  "key28": "4B1LAWXANKGWBKE1fJ3j6FiuorqssKJoyqzfWpXNM8garLxSVNtZc7Dc8pXn6bNX6o3LND9CxnF22yGYBug6uBtC",
  "key29": "441uG4Q7rY1odGavqR5sC3rQDNHzEgVdUdeko4Tz8xs7i7vasa4G6ysNFHbQpdaMsCKX9oEbFTbadopkDoNJPbf",
  "key30": "5eW7ficdGTYFFqe2oouwg1aNLuHcjk4JxbkwsjQByZeT8mkxNvQRno8DfBwFTDa9TiHascvnHBjhtGWxMkhDJvCr",
  "key31": "23zVXxbBMLCFqTm6FgdMEoLChog476BLS7SEraMV5RYgXRThd7tqJyouBVhfHyumLSqR9MdrWDW65q5U7qw59mb3",
  "key32": "TQ4YHgZiLv981puVPtRXaQdyUu2gGccrTAVZe9oU4RmKK6SYSYBQzc9rydCSynF8KRbyjzdj31wodZcmjUS5R7p",
  "key33": "6jP8afjTgW66LkpaNTYVD9P4XeuvdGZf3gNKHhRUA3dNRqahvh71ZkR2iUi4K2poyuq9rRnTb6nnaiJLRPQC92k",
  "key34": "4UYGDx1kHDKRjmFRUA74BJ92R2nv9Qw7UxdevQnMjroah6W5iRaEBmPGxXJ6VNo4ViBz7eupK56FeN6FySzRamsz",
  "key35": "5dAaEdZYQHkKKwbJGPxLxuikg4dayuYYQ78hTsTy1Papzse3bC658X9HhvH7K6JD2DAhQHddR7Zpx5qHUJX8eTaF",
  "key36": "2qbmwFtsuNd9TvyUQFmutkWs9bDst53N5Vs4gTtU2RSB3N4TfkkqxAWhJAfdSdRQi2uewpaxFPyaD1MJFFMGYk2J",
  "key37": "2fCnj5fB8nUXHHxitYVYqmbnjTeTTJguyiZdo1SodBUkxNtYC2pmg8AFYmdbQfg97kwEcCZAUzc97wcm5jBmMKSS",
  "key38": "5d19G9qtA1GBCHFWDiUgBYRGVeusjsGTgGbhKfrivrPQMQv7zLuvY6fmiP5ZM4hZySrU3aGb2myH8oCjMNdPvkS7",
  "key39": "5W82FKm8ojN3mso3TZk5u7SCyBk45QxV9kQb3bpKFsc78ea5vE9cSmakPS9U7w4mrKBTNmaiqRhJigiNa1FCSRXP",
  "key40": "4kWAMV2AgwjF36YH7Q3tr9PDdytNBRJUZxX9nGFkVB9b1G5jM1YFj2vVpCJ35Gxgfd18HtezUoYozpp4qqvGpBxB",
  "key41": "6WjnBPxiXa5SuXBecZGFT8cLGFBLqe27UfhzwzxFCNcJwCmgvCzNCF4nTbZjPPcepyeARdECz1GRqB5c64VfkHe",
  "key42": "4LKhNLQWSzxVytyLQWid5zpnvzkdpV2tEA8fKW9QMs7Eo1KQFtg25c6AkWHZdcCxsvWHmDsyepYRZtUGpwFuT6t4",
  "key43": "2ZyHpvLDPFEQXurcyy9FSbVdzfi7tGs3GME43NSkazKVs7DhsWtAGuxyiWJFYkM6so9Wq8T2dPYnQCipCWFbM4Zv",
  "key44": "vKPfbd4okjuUvvNe9JSuZdzSDKekc9m85D5SWURk9pzzmLw9ynpnhXLr2ukqXz4iyJv2uGExDXZPajz6imPRmvS",
  "key45": "3EropVcAKShMGsXprtuWPkWFNcpshRqrYgTtRqttCLot6Dw5uk4CVBYnyheEJmGyAEkWDRNa5BdnoNQNH3dAZZi5",
  "key46": "53qy2ww6L1zGrPfcnmUN14badKNnJDzd9MqjrgtpzB5KyxHZYHoSCCjBVmsHRhAnB85CqCBQbDVNrFDpd6AEMB4t",
  "key47": "5ZZzBqfKmNNz6dFkDZyZTYmvYb8DAHq125KXFZhTg4cvaYwxp9Rd5WfxCW4YsvdBw7427yt6bEny6cA9fQTLvm1m",
  "key48": "5Ef7RfLZj6jFBVjgFF2UEPH5pSYc96DUCYRozBjbmEumazhQDGTNqU8EGfM8AiqRhtRsEYUcrtSsqm4ikKvY8xX9"
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
