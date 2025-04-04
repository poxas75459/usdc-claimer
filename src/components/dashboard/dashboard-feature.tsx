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
    "5B18s88BKCtCQXZKHmXDRwH9qF3RkVoVm7NgHAej11wNSY7mTr1cEFN7DLKbHstJ92nKuFehwonu1EHwGQmATeXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8cLJN9VPb19J8Kh4dDP8qqsVxyCFd7mRnbLa5yYWCaFse8bmr8dJNoRc4nCuR8TT79dmgJHJQ42nK6CNtuq4io9",
  "key1": "2hJBi6w4YfWP8RacNbLBCpM59zvr5mLANfeZLaYdKyQjXN2ZoRYP1yX7LE2P2vPiQKJjX8TFJvegvfNsgbrqiUuf",
  "key2": "4JnHMKNwJzwFWkGWBRHHQBdZArmVoEY3C6DA28o1o5c5uqtepmruLrMoJJnx4AKYA2Xr1BQiogNyHGEDw9mMD4Nu",
  "key3": "46Pb6bSXBBdoUgueb6D8ZY1GYVuCrDSfQ8eoJMGofpGczmfGXSfCvupa18QHXT5iQfDn4TkEEaAGwqRppK6LRUYq",
  "key4": "5TBxehajDyrREYQHeYbeUgVArqh6F1EeVbZSXJwY1Dz4YD3SWgiz6Hcn95SJVwQdzJdSaVtWGd16pgVkG1Hz2y9u",
  "key5": "5REQbv5seH6utqPbEWo919WQPpDsZKJTdNJr6LGhmQdEPbMR6YKvcYgm1h2bnXBfumW9X7AaPWoso877gMmnVvmx",
  "key6": "4NrDYrS8dabzh5Pydrp3PUX2Wsg8KPPZTTphPGTJxAWiSK24rw3WxRV3HsUj5ysttpnZz2m3rzAXj8bMoEniUCFN",
  "key7": "3MQqWkBowtNgpBvScJ3Si5jJfuRsR796KLt2RsnwFebY5wWyxcsoCk5AqvdsmMeLZQZcsXzp5PWoojrG2D37UFBz",
  "key8": "2oZGZbZADZQEbYv68rk3yLUyrcoyQo433nYEPf7UZQujTGWDuKiEvxCe3dRkSLsBzXryVnr9UHzUm86jbVmgniSw",
  "key9": "5MSrfDd9X6bNQA6yka8GfM2P2txfRxt4ZA4qZbHatM9UYDcYP2YeT76ZutUvhiPsh2zaPU9tgMkdoH3wLbSo56jK",
  "key10": "5tC9GPC7Jug7gkJEsx7bVPM6DLx9Bgq2ECh4s74Gc5rrdfuUYGV4yQnsMPDBHwmSrDoA9ewLL1zTtZYjUemwbHMS",
  "key11": "66VwFJxpzUmy7WGR5MJ6wQb1vWA3CNsE9yQcWyW5B5NNXNK8RhqLEjdmT2zcksj5Q5yCnt4tNJ1YXz7mbCUszCZT",
  "key12": "58uQ7qqCJNB7T5tYUd89AKDbRsPtZ1vR5sBxZn3xKwzEbQ3H1jCGxW3qDBLaVKFSGEubwQoku2kvL5vdG2qCXBLZ",
  "key13": "GiY1gUChMzvdRaN7RbcQjcmdCL2icTPJY9FEBJYJsNnvhZnoJ9h3d5DUhJa4LDETce5EALWwR4ffqoX6X874Y8X",
  "key14": "66BfoBrm9cmha45yYjgEQenUkHrv6mYNCki9Hzuo63iXNdgWeoJKoNPsJze4NfmbatJS7eak4mdaX97HU76NdAGT",
  "key15": "39Fh75YW8Ee2cEHvPnfcLkvarNHQX2VwPkTMhivTstfxQrzKJQ6dZGtnksFbnSR2URc1HPvFhJ9QyjX3uap5qvvj",
  "key16": "2mPbFGSrxBHQ9K2NfuopnsuUmBVrUyeyr5yzSmaPCKez4ZKmRDJvUqsSqUWSeaJQQY41U9KuxeZjLh72NNmWCVkK",
  "key17": "38YM2cm9TJugjeZ8EicFqftjZssUbuSLSDWtCifs8y8TfgdYPVCWi7G3bS2A4ESKnibZPGvNiXFprQn2fxYFyHXU",
  "key18": "4yYWWXqBzXdNAUwT5DLaZcNBkxbBBJ6W1Pi5AdrQSNXGE3feoF2ihNYUXTHyNL9EwSdi15FBwgeDG63pm4Cjd7gi",
  "key19": "49tGmTD6nyJ6h9PTeZN84Lf3g2MTPL6kmUR1disFQK7N8DRWkT3PXCEKKMNBjYTo9gFWvjX3mzArGUkpE4r859qm",
  "key20": "2MYPggC2ny3evA9cuvLMiut2T1LEcxxJ1Qn7C366161cJsbHNGCjoMzbg2yYVECeGXRnhD67MQ8ER4xt1KMEkFde",
  "key21": "31i9NfcS7YK495LBXWQh8Q24qQiDRr4btq2eGc9td2dKRCKnB5hA8xnNJYMwJxu6boNoB4WptczXi2cEPZTALUrU",
  "key22": "25aFRVuQPVZub4oFhaSZcYF6LML1Wmve6voVz133QDjEnqj9aP9oEJGyHbMwpu29aDhaoTyQWriSJe7PPrLurEap",
  "key23": "2ByxRm8fYqymfiNeWdgi36XQC1wEV3VugcmvBiych2bg3VKRJ4e9UmEn9j8rPbYZwLjU3Hzkjexpix1ouNh8gY8D",
  "key24": "4rrwbcS4bC2jgpW5WZ7oDGcmqxqDBtaGRERavmDjBJV6qwoZDTKPWmfXiCsvHNdQfGrTHTH6nVHyV9v34Jy2dcu6",
  "key25": "3SaKHJGfTQEoxhfeTj4sTTP53peEfgqeUHwSyYPNUWoEGwJiMjjt2ayBQuLtvAHkvBj89xaqZu8EKckNNKadcHRv",
  "key26": "5PYuiKzW37VUhQRSm1a1cSRNJtCeNuiTcHAxs6pzcyUDdvtPJNBb4BSJTRk5h8c4VAcWB1zPAcUDsAsQ6yxpfpVi",
  "key27": "2JoG7aUNV3mUfeo2pjcZ3oR9EgzhqENpytgSvDwGizQMowpyAA7scYaeCM8SXaggB7LfieVEXcAetSANPqreVGtN",
  "key28": "22TL1GafisxKnxRgdEmbnQM6nnWWXW7V7iL3KwgqC2XzERcfGn44ZWAVvhZRM1RMWusc52qCXcDEysmFULyYcXXk",
  "key29": "52Nq9LYnScMVhDiXdLrPnrQEhitdL611PD8GkutSpBcbkPsFAHP1HdAubpt7YkuzDRR7c4sJg82wtDx2sdNWDKuS",
  "key30": "4pVHXJTut7YupYsh81m4GP9dyTrdm5XHx6o5YRxfy1NCSosK3sYD1EofKHs12pvT4q3cPtHavYjoUbouhKDPT1Zq",
  "key31": "44QHMwdevjJYsDnFnPj6c3xLWMvQJmAxNQp1PzUGvwESpQW4wYtYTtZRcoULHAyKAG77R4faMpCGRHHJusv1mqmY",
  "key32": "5Etq39bqzbi8WAGB8vNzkpMhVXycvbHJ5N5exHGrsh9n59NQqjfE4qGCbBD99w8ijgDJ1MSBv8WMqxdi8XboAacj",
  "key33": "4SkDic9c8LmwKMYJaoY3D44da5NdTqEW9tUiKhXoma7S1atac4hmnoSeaC8SjSvvP93pzZG3VBTuK3S6s6zvYyEk",
  "key34": "4FEZQpERb4pg8SqiDRTJSvUCxnGw4VGKS5XeKoJjkeAhKS5AAfMYf6k4APfLLjf8jYJ912NjC2dZs2hVZfWrofs",
  "key35": "4V9LcxcnUwXvRjwYwY4sU9Gw4raXnFmK6iyYbTDPRYTgFgefPJbwnRaH8BEB6mykRTDZSZdRiRajprcEKLxc2M4k",
  "key36": "4E9gvDdfZbNR9rwS7jm4CjHTCbqkEuCr2rRXyH1jTRx6JY1iUZKajZTmPus5oREsuBcGAA6uECSz2wDdMcvwD7i8",
  "key37": "56AQy4HSYpd3AoY4tktp8V8kuPya48wfQeCYQiTEqCCPtecjvkFrZz8JzUW47K7Tkhg5KSoYChRLPLGYmLrg1WAR",
  "key38": "RKH68JdN5Snb2vxz8NXjgBjwrGaiG8jt71NsFSzJgiWPZLxbDBwsZ44H8kJ5xfeZdz3YuV3d5DBat34W7hmYxqJ",
  "key39": "2DCqQK79Jv1FSAsyK5YwR2ExYbfiKTgUpFZKqReZecXUa3J2bC3Y8Q7PoPhJ5PjShMnLbZD8iEv4WTRZHFwPBQim",
  "key40": "pKxjmcXDC4YBLRfYrdJ4pQyFX6EEAnDKnhq8RM6yHW4Anx8Gf7ppwstEhY1CXngtHVCdmrGbLcZDKBBWiWcJqrH",
  "key41": "2ffj2YwSKWh4ac3zHN4ZCv6Lj367nbXeLgVSgxUgDtLfdBUpAVj6MufNAzmPLhywUnb9sQWPyHC7yfw3C26eR2ax",
  "key42": "4wxwumhAiP7vM9uStudgs716ux4eMBNCivqkjmWifMNYjoQ3DpiiMCdSdDLDz9wYd7wVxYM58owcn3pcmVzscAwS",
  "key43": "2XfADrccgCcYmL98EJmuoCx4N86SLRaZbBwNmz7V8sc5QAkgA8xWJcX311hHuPSuKfvsvPaJiGPjWNLJiGd8BCx3",
  "key44": "5A2uwZUdsQcQ2fMEsnD9yRJZuvMetq2Jcp7M1g55Ejq55D15YhiAmAhxMqHQhYfNNqJW6CHMJo7esTsXqSfkvUnP",
  "key45": "Y7LUDyQnNhLzBKzgJBpU5XCDcdV6cJ1oKKhX8iHDZYRutuQueccar4f9rramwBr5oJ1h1eusxX4BCXikvd2FHej",
  "key46": "G7UfKvaqgqebZRvr5oGvbpsH7hCdXkkQmgV8Jar7ia8eBW67oVVP9TgqRwZ2JSjSttmPsrV1WwjoNLs3qbDaAfz",
  "key47": "5rSAu44C4utk3gyTquxKS7PcUwfk4Fg6VZxVEuTX73iDbRacULUZnWyQsfJo1bbJRYmJCMxeaGrekDjdrkUmFi8C",
  "key48": "459pr8F9VDFbvEoAPEX8Q67wTc5BTYfiQWbwrJTcyBpLb8ge6VgWQUkdA8PoCbdBnkqFWAJkyR2HzmCUtYH1WjG4"
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
