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
    "4CQ4U7zekuuQVhJPfHKDeRUJEXgbmsKkkucodd27p6H5cPXJcd1GJY7mNXMBvvgJKKk55JEqdiM8cpvP3cjVR1jn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RgQxp4aKWs3yjMX7MgfUF7xf4bGPMU2c7rLnxJC2WfbAaRSYhud22j6cZqU9u21rFdR3sPuEWw8rGL8BHYu7G47",
  "key1": "4MpDxQe7cykBLr7xn5NEtwdS6HrTGLheoF4tZTqQnuYHj8CCAngz8mU5JNusmMQwnUqsfStwxdfhLEV8zcsrLEfA",
  "key2": "5h9vzxjPZzT19M3EUX9N242m3WJmzHyCZEWw4YwXs9UZ4TRc5nWhJJoRqizgE6gXbRFd2XG9wpdzF6nDCaajMaxh",
  "key3": "3nUt72kU23ehhSJqn3aeKvmPh9DBCtms9DEVrMGU7ofAH7bxZgTuBapuSWBiRkxPmimsGmL2SHbcxRh9cDh2cRMZ",
  "key4": "2CvQTFbUAXZz2AvHgdQgCZmd3cpVaanC93SmgLG6b3tvskZVwZXbrhwADify3pnwWDdLJxnEAYkTPVweMs61KiZe",
  "key5": "49hvjg8EQQfLRYcaiqXd8Zk7S8oRghvm5XpjCpQKyFKYWTuKK99UHUV8gUvM3NJg8n1ThfrJ5rpYgyuAJCU6Ytkj",
  "key6": "3AFrTaVb4MFL7bqjTX88Qh6hKshMSRkYxV3vdz1wTxjGFXiRK3KywttDwUK3RspLMVjeyGfJ4sAdWL6yjLZUfHrT",
  "key7": "4GhE7eUFXheiRqm4BJ32TTTqkGtsoYm42yWiAahY54vrPCVajXGpRWUzRQ9jM4GMu19BGhnYR54tvCfNqhhRuPJN",
  "key8": "2bcM2SJKRbTnHwhZ9in1gCdD7F73vLEp24nuqbwCyD1BTNSm3kbXDDxoodS6N4Q9PoGDm7tjD3j4n83i97Jvf23Z",
  "key9": "2ad3h956AVorrdNXRCPDCw2tr3ZtfuzegL66c3LAchkHRyhm8hDFgyqXA5ZF6ugRZwtpWqKjXqPDo1qeaCotjMpo",
  "key10": "3bPCvbvNTHu75gZkSGjt6WQzJTGHeAnXtjHact7s6XEhz6z735DrKtozFNPxHfExi7ZsSUt2xu9rsfqgSb6Hsneq",
  "key11": "3TJ5X6WK5TsganjtrQVHJMuWF7bJGfR4Xr9VqAQhUxWnozjxBsDzmCjWBgVmeqEhPNB18K9KHArRRhu85n5oqoMN",
  "key12": "3o5oGrtE2ES5UXdXPVgX3bW1TQG1itjpLCtaZSbthMqneDKHsvX8fSP9NTrjVQLkEsUJiW5EwFhcNgz3n87fgMty",
  "key13": "3q5QaXYUVdPUMgVT6esyKudzxu7163XWeWLJ1hAVrZTiivsGsr1MGTBJaSfBCjHC742yPLQotnjTZs9thmdPHnXw",
  "key14": "5NFniivS9hzSUjq1pcW1TDUv64XzsPzFi5QevTkHQqN9MvKQ6xL5vZkHb4cfftNmNfWxgXtu6e9ggaC89J2H4Q56",
  "key15": "37aHhxiGTSNqZ6CuyqAdMPCMHYVSkTpNu5VXppgLdSjNiCB68d8BLeG3CQh7asm3J8AcVEW8LTCAAjAVPgbaJfAP",
  "key16": "uvjt4SrMghewzAmxUNe8x8gGhjQQ5BK4QzKqHDz2GZ9qaZxMd1JSStP8yFgcB2rzPsUDd3Stc7aR81jkPzmQzoK",
  "key17": "5Nr514FEZFxrPQ33ja59PXDeeTNakBXsVspCNSNe5AJSzR9c4UG7xr77r3je6yvqGyYVPN8pmac1wMNKLueCtQFA",
  "key18": "3sk7okmEayCzBEg1CNj8BD9FBUoq7A3KApw1xxYiosZ6QNZjsr1ZcQagjVzUFuomdtHdHvrxoXLDwbBZ23jcqK14",
  "key19": "5Bqqqbkx2BmQYw3Qvsv8DV2Hw4cNZXx1rqTok33W7Yvx1B3SSxvuXFzZB6Q11ZAir3azrXcfGAZRYoTFUnxTsf8R",
  "key20": "4KVGR995MHWwk8To9KAcZR2xQHJJ4ooXFpfQzvp7fxoYB35YqzYsjGENgeZVSLx9StEtoEZRWAVRYikvCiYaUHQ2",
  "key21": "2BeKdBtXn8nDerddDNunXxFQKRq3rVPKeXK5fTt77TDTwa7Ew86321aMazrzyMjKhs4eDtPA7286nf5WN5cicXMq",
  "key22": "25aUqh6srkkSmh5XdnNmYgoLB9EaGgLoo1DzvzAydagKq65SciceL2BjN8gLJpmTQ4ARu1Gmuod9CTiwdSRkxg5h",
  "key23": "5FkP57JHKJE1P4R1wH8gYCar8JeKMrRXShX3sWUq4y5mc8rrboHjyijzW2ECNxhruyBxL7CLRwdk1bdLVrZv2kPJ",
  "key24": "4VTvv6DnCo8HX3M6TjGFC1fbZhDNDfv9pdm8Bc7SCFmB3EnFddgMJQvpf2aQshoMNKvMKYVgCQrfJUn1DJSFY1NR",
  "key25": "6Z6pYk1TstMui7oyGbuD6KtETedpKaDvYA1L2YTAAM5tC3rU5QintVbfJci6r4zLnfxtpYjmw21phLUzpKRCurm",
  "key26": "2ag3X7EmpSGpkDsT3Wctjwz3EnKR7uKaoZwYr9MeWZnBhJnKnQYv5uhmQ4FZrs49DqzF7VTPa7JkzVhcC2GTJRij",
  "key27": "3Ned5QSXtQP7mudqVF7gdbZMVoBCdpukLa8qexAaeSNKL7SwDohqtGsAkDvQoha9bHVVq7T9WSri8AYXkhC5Fd7j",
  "key28": "2QUNLK96NwJ3ZDqSCTr5rspDAxuUjF8LUAzZfYPfhNScVtRy8BBbr4mefh3ivepMGTFBMDMCFh81P8p52VKUVyyb",
  "key29": "4fTJKR4QJUH2hP1HJKHtZb6zw2uUnn5SBF5rPbgsSXGAU99HndDPms98e9pB7r1jZcXqBRAZc88bPib6MpAgP2st",
  "key30": "6D7HTSjiRy8zTYtxQ8fUnXvDUdmKeCqUfE8tTP9W74iPkmD1aeym2b76dTqaUMi9nuvST29skXXFMKNXkuysXjE",
  "key31": "58XMErw9T15PiSTa2dwvwMYXWeZCdM1R5V5kNgQJLmygTEEoNFcj97RosfANaPpkQwMGRDsiXHDvxrcWvkQB9Lks",
  "key32": "2CuTMyZMaP7H8udNG4WVD45yU4oT1c54Ktgyvzgm5PXAE2rvRc8nijGuvURzdDScubgAgtH1Uo68tqUPbvHpt6DX",
  "key33": "4aHwQWjQJusNSqZBozcVrrw4sVn8HcaevtaWBMF6uX7XNaQPNKjyWp74tRMGGMr1PWRjNjoai2n3zZvk3fV46mAu",
  "key34": "3Aqppey5fiNq5DVweVEu5ki9W7eixDk9jj1XsP4xmxtNBhnUbfncn65mWnBDrxZVmHVoFPf7pZM5nLMdDmcKwBrt",
  "key35": "4NNDmQuyH75LBwfTU7teAZVNpULU84vTM4uCZhqqmMBS8K2xJKhjD6CRhaFZkYd8h2odN6yaJcmetKZPZUQ41y2B",
  "key36": "4PVTfMYqDkRnrXoyYH2Rf4bAWVQY9KN9NWhh6qD1NCicqPECUvTJzkjAWYLohSrRJHhLfZbnYpRufKKrBRV2REiz",
  "key37": "2aiuAM8yn26cFT9ckvGSwQDMBMr7NRYLwB2nkRe3i5LRWdMGd1hsW2V1XY3rQSRZiUhFU8vycpfyy2c1456LaG71",
  "key38": "5SqJbEXt8MW4bU49x7uaPsXuHcCrTPXogZDN7wXFnd2M5jfJy6L1KbvrcCcLhXAsqMsMjMTTP7ojFNTBp1eJBz7u",
  "key39": "3nqcQwGqvqNu7gP992qRe7x4dHnpcw6jdwkWTjasMzXkEhv4DpEwjuj81FNntM4j2jwLD21yvmdDMpZmoPuf6wZ7",
  "key40": "39dA8yXWLxkF2H7yet96vswbNHzCu4rJDA1K55VaZGuMNHyVY4P5bj2Zm7Dboxpf7RKtk5yajmZyCEnV2h9Z6kQB",
  "key41": "24tT3TrETaEDvBTMY8m78yFakkQU1aKLyRtw7nmTZUSG7sz5XYqwXTfX6VWDHyGMpuTu6SAoXwTVK7Dt7rYM7wJs",
  "key42": "434SCwCqVUwjDNYseW6159mTLAFv5nVgjKCXxFhKACzFnPCuCz7ANxUoPcbC3a4FQk4K8Be3soro2qmTy6EfsMCm",
  "key43": "BBPU542HVsVtTvGF69TYhd5y6GxvQNBSB289cVoFmAugoCQQZDx4nBReFpGh7ZNoR62rMGuaUPrzTRV9PckNieV",
  "key44": "45gUmgYRd4nXykmhQ77vqcRqhzBdWrcni9UMdFF5vqE9rbuHUzcgwMKs6Nfrwe4s7McNYeE4YPKm53oXnwpRvTBB"
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
