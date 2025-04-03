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
    "3QyTmhc4spYqw7gGgxFTKyLRzRiXVEBPYZgt4DYh4qQCuganGFAhra56YqK7bJXJ3Yg3RHz3AaEfrSi3eYmnuMyF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LXFaV7VyvNysfDu4HHo3PJ4QFEvyHQz4ruSgPSv9aa64PqCNM6SJAdwV4hBaeuRPAtsPrqHmXcZNdkkn7pQShyP",
  "key1": "B5XLNiL6Ao8rU984EJVYZNa4H8MVPKHwM7xG9CsEEeLZoXsGetUfm3Yn8Ja9s5ek7NvnxWSQBTMqLUzPUFrCgth",
  "key2": "63VeoQxoABk2jd95HRXPpUBCvfcoatCAHEbECsZxiRF248VRn1BgptwaJVrs9YA56ushxKkw2289LVfjhd5rsguJ",
  "key3": "5x1EFec2Cnysq8EdZwefJTJd7AaTi2Zy154YnD3hZhHLhzUVMN1zXQGdakigwUzThVnxzTFh7Nm7QVp3CnAxXsb7",
  "key4": "2YNaWMhwjVRF64rnNgruQ8s2CVc9dVyy1RvV8TLRM59H65bLF6Q67s6Jxg4MVn1yoAQNUtU4DP32RshxY8vAsRqT",
  "key5": "4F3dD5DFkgdz95KxfGgFETBtgNqBBn122tWwNTCfJK5xeMfdEgxzckRhZYPXaAEUcnmY746fGzM8gBKWEgkhMh7",
  "key6": "4DkqsQLvP6DQauMgkx6fehuGkqgRStymkHDiu8nygm89Dv2anE5eJmNkUZu83TPZsxWMJLhL3cRYtqxFFHhhhvhe",
  "key7": "3HYBawKaNGvvN9pAdLbjk7BzB7RY8S7CdDMJG8WcpDrm6pXrxybjkyb8TYXq3BnFWvTm8vkm5sXvySXY4Weheht1",
  "key8": "7ZG5cR71VNaqffgRxDVeMo49HSgKnYtFzcYx4SMC4KQzkZCyc6EUFwySCP9Jvev2gvdELgdJV6yUUFaHfohfJsd",
  "key9": "52HKBnobgjvnveBvKHpjZXcvrokjggtKGdxGyZ85YYAGCQGBGJ1DYzR16LWhkrzYPqPkx2Fpu6S9DisB6GVzDpHz",
  "key10": "2Cfn6Z5rLbi2mNYnVqQgFDrx3DiwJ1JVRwGwErgRpSkcsi3LCaqpDmKjjM1Tm3FsfgD9vndk4vnwZcFpq4r8SCQ3",
  "key11": "2dqAYFeXGCL1K4gMouYWnCEXyTsX1vLcmoEWbkLdsxDximX4HJFzyJF8PSKo4ikbeWDrXWyCua7NzPdEogGgN4H6",
  "key12": "55ohC4wfLp6g4rqkFsw2rgpdSQa9N96DePHtvE8JraPw46XjV56WrzZxgyVs7Hj3wuM2HhfcWQNdu8QSJKGLDiLC",
  "key13": "3xtfDD4q14yMKbGq6hDciADtjhkizCMawQ42hf7NFpN4PjcjR51WeX7q7D5CHEPAdkn6iiCTakmjQ6EocKGodpfT",
  "key14": "4cnKjD54jGfJTpehjbyAQiLS7fmiMX5LakbEyWsQWMLvYh8S8DX8aACVQVXwUfW9bhD4HKiFoi1VUyr4GMXSWYya",
  "key15": "9bTqWxCHPqRpvn4qT1xbGz8zj17GwPLmMjB1JznmKvXhUatnZTy2aPxZM2uXYeUFEbiL1Mr8uqJX3cZaFfPz6Ly",
  "key16": "5Xt3WQ5cM4DqN4a4rX4UW7g2q7fyamskkKQ7JnSLVbuDJMA6aMqJhqcb97jqP5Hutq1UhrsARKxmNkCB7EqMFmKC",
  "key17": "2UxU5YZLcjECpQtECKpJYPBW7gM8BQE4VrYqf7UDqVY76nVnkpCHRzVoRzyVX7a35oBVidZmQjWSc6neKVWDP8nb",
  "key18": "9LVwpwwsVv1sEJEvAFkNmcThQ5nthc2bYCSKJCRzhepW6Y1dyzDgpRKEK2otcyAB7e9QnCsNzo1oUi9WJ3J9sGZ",
  "key19": "24vdCui67L41AZomprudoBrrNYGptLjzJp1MFcFgfQViBtkx1qbd9gJqHtzmW83haYf5UQJPCeNVGmckFKd9WU8V",
  "key20": "5LRP9j4fTeHvTU8f3QF36uMpHgVAgjf6doU19U9Tcym6Tk6G1ZYQenKeApKb1ebJrgbKc9fF3RUfBFEBGXp9aC2c",
  "key21": "2Y12naguQMR9BNuWM72a1fTCwR3SJwnUkj9ftmcT1puYoq4yp3PSpFLFzFTzyBhT5LvXAb78uGm37Zd4XeiZDsFL",
  "key22": "5ZAviDmFvvS4rmiC81ziWGQKXiANruWcKNPqJMbsmd398pu89G4So1ZYPXUWq7yGn3PFG2AjC4Kuj7oEHL6ChbWV",
  "key23": "2tjXKnjyEPu3uzZruCKMpszVjCFinJmXLqUnsf9RgJ641w2XrCXf8a9iZg82rS42wiHvyrQ8utwMwcGQH8aVg5Uz",
  "key24": "5Di9YqZHDrPaNwikhx7QmJuFXcLw6KiPFqoJdxQX2FtMLwMx1oW48Q2N5jijozTrMNFzMNWK6x5xeP2xfLSdorpe",
  "key25": "3E7sMVV1MrGRtxq1e65KPU9x9Czj57FAeoEc7gQmMAZ6zXw7waQBwsGeurY92FHAms3daHCYcxpeuw1ZFvtUtkpS",
  "key26": "qX7EGQQPkPev3q346B72ePucuuFhCDPHPQ52qpHiudG4r6smoqGtrJ44yigZXMG2UE3sXzLNhyt3MERKaXbpEN6",
  "key27": "5siZJS7xjiPNdsqHnj76R6xxMvfjeaDQsGbAgDGaxUSSqqBM7jzXigp6L5tX6qMU9fovEQFWAox48dtJkmLUj9QF",
  "key28": "33Pde6xHHmkvCqyMUMMws1oMb9r1d2W4wTGhKsm4GSqevgjEbpX6WGpLbh48hrybPxXQPmuGLa5h8Hy9yEdSevtd",
  "key29": "3C5x5r3T5zCHhfkzmD2bxBhXrV8pofZNVciy8jgHURjxMybrojmhBToCWX2iE979wkrgERZXEB8JyKKSuykBuRAu",
  "key30": "3JWKVfrKaQbtv44PsTQG4fcAvSDVezHTRNzE513LorVdHDTFyk2tY8BDHYNd9YLzSDtKaN3EC46EmYzNZV1dshKt",
  "key31": "4uT6shffaKj7beEWvUPfgimp9fgtRXJYH6B4B3kVnNqEq2twvhcELddQ9xeJNErcSd67xHBKNJ2W13PSoJ6N2PEk",
  "key32": "3vZN9fucKW9sakaq91DgmPKBMQcCrXsKBJhLVn8hfZiFSDJN3NMStxdQeeSWW5HYiMpUNABsZFsJtavYetzDhy5A",
  "key33": "exRW6XvuzLc8h5KLxLGnVC7TM2w7A15RmVNacbqapvqvsmHxqSjme2nAENSFh5PoZrtpPb9LCh4cP7L98ALmWM9",
  "key34": "5CwhxEc1RirHrTCHyosgzAabbxjU6ZADM3AHso4mcu5hgofjrtwNc5rEaQ7pa8a8g8qawLoXshvbEj9CcUDn3822",
  "key35": "5W9fxpAtxVSNTwk9oh193rwcNsaDf1J3pdqpwwiZZkeTAedyi5xhjCrHmDvk8z8tmi1Y88Dg1XT2cK3kQg8jhbkZ",
  "key36": "3Rd7fG27bN5owyhiSkcxi8r8AsdTy5jEDiozyCMr1RkmHUgGWwzmjrnCzbQ2wKQx1wMunZcMGFCNF9T811TRryEz",
  "key37": "4TLyztNu5JztkXvxnr1kbtRJpDdXNTrTT6JW2qFjGkrKtGkahJzZWYLbD358rjwVPQLCPuLiSN76iMtYBzgpDgQe",
  "key38": "4rm8DeLKmJJnrP8eghHymdVqr2VvuGuYnGXXpFnUi41hnrGEbX1KRKx2KCyKP7p71q4X9EmgQtPwsniuydqS79z6",
  "key39": "4J1NX3gm9CH5haxa7KnXmdxkacAWdLHFsDRdYxnFZX2k6TG9byrcJks5VGWvpfH1tvTFdeBeyRRnRLkDyPRpbHHv",
  "key40": "6iwNCzdsv6nVDfC2NaioNYKKDKL6AtTCQqLHERZ8WEtZ4VCg6Xnd2WpSr8QouioF8xtnTW44tJpa7aZxFuywBuC",
  "key41": "Uy6YGeC85BaYQNtqSmGszmZzeZUeaL7auon8MmnMVjzCt1PChJS7UbNzAaNrkrzwKuiLvceMq4M6AoYKuQBWy78",
  "key42": "5EXpy46sLfnDkmeozRR1v5Wozf5uZJRnVYozk2mU6BwgYGTYWRF651DLH5CHUm53fvVQdPs2iGQPADUtWbioHWo3",
  "key43": "4sVNdVyQdEPJjPHn4ABJxBBjBRp9ECHjnpY6D2UPms6ftErRMTu7tskSxT4a6qaknMSaS4DC9ko5XuwS9Co4rpX3",
  "key44": "xoVA2T3SPMWTxs8rdpLrjKmUGxpzWDToerzQkWXeYsaDj9zqeQxqVZnSQ5uwZejboue4dVNfTjAZEFSDdZcDXyi",
  "key45": "33efBiPRpFdQNxhwGCJinoXsfo3NyaMqLBd3hAc4DGRC34TcSkKFEkjCGBqsPoGNZMjwbR9h7FAD9Rsrd9aGWsjL",
  "key46": "3VAnNJgsGnpec3xGngrvB2kZCUnHuPGz7BduGWXfyAbC7Y5ZofcnTBbT3EW9epcMUyapAKFEFSBMQReKrDZSV5RS",
  "key47": "5VTYbT9ickmi5ojvV6ifdYSNsLMXK9fdgGWENs99R8nZbh1Y3WFmRFviJYZhXMjzvfq1gGHNWrycC2Qo2Gu912is"
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
