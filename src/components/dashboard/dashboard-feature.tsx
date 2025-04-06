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
    "54MfZtgfA6nfhV1CTwwmkSi8vckENuQS8n79hueqUE4tidp9EEVK8QNgu8mhQ5dH5kH4Brr7wXatuVSm2FR32CUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JdTEbWzqvLbNMb1uwnRbzwp5XCTUAAxB2MMGHS7yQiWgcUp8dCNSp94JaE4TNdocV5u8N7pSSwSe6T6vhPUCHxr",
  "key1": "5DWWwHSDcSG1D86YmknC9u6BJpdGase3tRX4x71kJWRuzR4ebMxCkjzx8HRAuaZuZ3yjAoTQnAvCwbd9YrfHLbo5",
  "key2": "fFg9fD8VAAN3iarZdREWx73gv1AM4JayaxRtQgEMne1RqonMsvdpyTHyovwqTgCKLqtZiD8DBMi8f5LxriKE63e",
  "key3": "5agJxXqQG79KMCHjvceA6zvvwVEmq8vtGtAHN4vytENAL2wDJ2hZDWjTAq56yPHdrSPxKM6e9vvJpkYZ6QQu3aey",
  "key4": "QWoPSctS8UdqvfhUPmL1GsambJHH2masHnzZ8YzQyFJLGuwYynuRta3Ccfo7hLnxUJSUpu21739m9SnGqKswjvo",
  "key5": "126mXSxoLsncURpv14vhmw47tkC1Qbyiu6zGSe8asgwjEmMjRjiqW23Zc4Fbzb4M532JGtbj67WNY9vvis6YPZcm",
  "key6": "4zdNeiG3J3hSsqV1H9WrV8CarkjcYb5773nsMGE4pvLC8UM23J1PaSUzZByCyZyynjPuHcdnfyFz4pyN29C8viWi",
  "key7": "5DGAsr6UVivskXRLrAX5ig3Ly3fi3UdfZXBPQJ4priGTHcz7JvwmWXDrsAcf6DT7eNv74zhh1LWHkLM8fY3BiyLr",
  "key8": "4hmCTKSFuR1a3ewAxarN7NuizuUe2SpPQHXgmeopaoik2STymmJs5Sby4Vi6uuGDTBnTSbWY8T7prDt88yUkyg3y",
  "key9": "444UUVDTTrKYT6MxFr6AoeMz2crEajrByrXVDhujsTWhsdAnZ7cALAub1Gvqxnh83UqNKRoRDtJqEMip8Ey8pZxb",
  "key10": "evsSG279d1A37gZwbKt9taQhJzJuiWVqymSKq5ExBTCmbNQscoRJK9HMWWk64MFKtBFQLnZEUhD4Guab2huAvAf",
  "key11": "5yxeAQWv6r7K8maAvPjK3WPgN62psiV3HBV848YvUiAwT6ozWtcEJK7f6mEFtqbJ1m6tLAGu6HU5Nr8yTZD59YAF",
  "key12": "4bdnVFXArasxtgbrDGjH6iP9tqiyrz226D81sq7jCSbB7xthSuJxUAvL7hFtB6YdoHKpam7VGgmpxeF5BAgYaF3S",
  "key13": "3xMXbTuQbxTvtDLXLRMBCNoHvFFRsypqdNd6JUfYKHTPgiP3DX9SLUAJiQuoSYEFNiHv2VK6oPcKgU4GLUFyhFVC",
  "key14": "3rqGsUK5ZhYCMUWhnuY9FbEyaF3J3PoGLVakfh46fXoFDRBaph7VJc5RHhC58KHrWwm35xEVQb95b6y2r4ZPvD1v",
  "key15": "5C3Nt5TJRdtjGhUULZRApGNuXbm3XPL7VEqr1uAYn7CmLXuzqk7D8sK7QGysNaFDSowkUwbM5FAAo68jDRZU3eiS",
  "key16": "5gX2qvPnDF4ueFirJrUEKYWeZ3RaPVkQPCmX5q8qt8p7FFXPd9sBpefZN4cHDGHraXqGBUjzG1UtEPXp66MKn7vn",
  "key17": "48iYGSgwvcfxmGbi4fMHe3LKwTGBquxzhTbhei1qFYiJ5Y7LHtcMMbHMjXtHctyqAnymrMSqsRQfLuxNwum3jPk4",
  "key18": "3xsMxi1VajnZWUGDjT4jizkkFk5wneWyRp4zHUe5AfU4gkpcaY93yYLfA9E9AGecNPt4QsUfL9QMHQfLckX1CpWq",
  "key19": "5qTPNxHgwMFUy6wVG8wCiHH97w5RQifRuHRWZuih7sAAP9HRb9YiMf3SHHy9i1FqSeKkoaamdf5Xa5QXq8hWCmXj",
  "key20": "39da2aSUEng7N9S6KV2XdE5Jd9ZbNSMqCtXaF2jM5ZGazjyqdQnUSpnNoiXwThtbV43JGPr8t1jjtmqf48Fj3sjB",
  "key21": "4qLRmfrR1jScJrXjaoC36oYcV71YsCbcamb88rydrfUWFA2oKSfciSWejdAETu1u7xxadifxD45WWajwLC4ccMvN",
  "key22": "3DE1xKrxHub7TuHFvqjdrAdhacDieHqSHGj8q1AFhnkBApfj8KWhqTh7RrMWBDPcWegdgi2dmKq4XzwNdg3hfE34",
  "key23": "3VKDt7V6cm5FEXzQ3WrFQKz4y5bXqky8h2NVe9zmxDzfXQ5fCoyzEdQwKYsMASAPGvN1yv4r3a4vSPMop1eAmAj6",
  "key24": "2e6CTmVG2XCgYyT5xdNFytaqY7QmPCCiTi5TgDke4V4vXbACHEAr9LMJCyxsemBSytGwntaWmRDn7TiaoFP1tACT",
  "key25": "3iW5ij86Y52AKxUQ3jfAfSQTvNcHBHGeXmYfscUbSR2wA5B628XKTf1KNwdqWMs8ZDUh5jZpzLVjz4KBwVBhDRVC",
  "key26": "kWwa9MVp786LFFH2RAXTPmsJZS5Q2apipGdkaJEiTdf4cYZnjw2eej6DmUNK2qghWR4ffgS4LrxW72reRuykLxS",
  "key27": "2NYy7Xpot3crPygKkoPtodA3oCGwgWtGF97pxxefxjyUxjckeA9w1U1WPKdumHva6CRgdev3ps7zX8xkeySSaDdd",
  "key28": "5JFsYQtXwjTcPDXU1tyqicRzNwn8ZGkEUxBcdqXqVcGytuwsuisRg9JNdP3e4HBSo3z1b3wEe5HHqs6twfMCdxZ9",
  "key29": "5hVhbCBTgWyxMzasaquwTtTG19Qf17S4KmfvHRZ9pE8gqvqWqr3TyNrtGtsu8mhhkZVpDhFkfpc6rRcpYKhpii97",
  "key30": "51u5kC3ZVKvcuHdZ1nhPzML9Ux2Bpq7ZziV3Xztpy3pGKXdT3pFeaDGsraex4uRQUju7NyDf2HcrrJoN5uoFKiwP",
  "key31": "2r7omkwfWHY3iiKTj1KzxnMH5VVM4p2LRjQMfQrciDWSvpKYWCgCR6FUP9DVZuVnZ57BL76GPkEDS6PuPdSrXmqq",
  "key32": "52gygKFaiWYY6ZWdLUgoitc1YKpiLMr8udB7ftNYk8SWqXjVFxWtGNXwch8F1adFeCGQky8eXrHbrmtDsb235okm",
  "key33": "4G8zyLDk9Xy1jx8V1VUbUGgsSdHauv75mDQDgT4iXWu65MaBD6WNTQm2xuRAMk4SeEoTiu2wE5NkEQtLQzTM7q1f",
  "key34": "4PqhtiiwHbSBNyqgsEyvvJA2iJmtCPKdyJjNssEfVVRfMEGpcRAscUBBtifbzkrTdbbevq5YUbndHD4vgUjYERgn",
  "key35": "5hsHBjgrtUzcFghThuJzDYtnjA3BS3RAexMyKuHDLqE3ezhNKXCaTuHmDnq2oiot2mAVqPTFsmRksNHAQga8ANDv",
  "key36": "38MS1t3FxFpGyYXTYGMBdgh7XjhgmEu1bSqZjy2CpqbQwcJSnFSMypwfPuqFmzxWFVw3mLQ8S9oW8M8idSadMsvi",
  "key37": "49A5dC7XnT3FMi6Q1rJ1jAxf2ZV1pCFRfMZKg78sFVqkBCYZ8MLYYYeG1uKNwyYV3YABvm6nQCeB1RkYAtVqzxia",
  "key38": "5ArQp4GEEcHMgjZ7eWDW9rBoib8CBYRsWinBNLC9tfRe8fjqQS5AFZqe2pY8Y15mWWSRvyNQnqyBcpsaNXt8NTNc",
  "key39": "4JmMnCAWCsW1XsETGpVqSMSrkF8agPvQABwcYRmPaThP9gfbHXoe51xGNBYhpcyMmjUewoYnEbq4qTSgYTaY4AtF",
  "key40": "zBQcU46fyh7EkMWysM1qcti83UJT3EAuFhcnfEE21NGH97Ggu2X5oiZvr3fUJNWXsDRyrrAUaGmByTMeb9xcmET",
  "key41": "zwpKxeUiaJbk5uRq7AyKPi97AztLzpgrHxUpyMj4AV8hZ3Fhy8LB3qmWUUwQaRw9PHP7tLDpEXQHPQRe8jyhuDS",
  "key42": "4Akh1zXWeqkdtjky8vDrGo6igDgsELxZHPWiaGgfVxCvDQPu8xTfpNsUUe6M5XwBCgfjnm7mcbrQR2uie3uXu8qK",
  "key43": "4buCUCiAjre9sfW5jmQXFh2pEw3r62cDgQL4Vsie1YqPuLp6tT5q9GvDTyvdMTwurw4cxqVHQBYwiyvdMAePACE3",
  "key44": "5jGNVBjEm2NumxP8MJ4m6tADiAB727bfEErKm16gjm8yCSwhD7vNMD9nkMzswzxHBwhsaEEqe8VckPjogxNJT7Zf",
  "key45": "4HZNvnT9a6xHzUmF7ie6gfPvf46p3hCfLzFhwUt4WJxeGvspjBy2gYq7459pSN6pFaWmgYA89LE1z3gU8sm9DXn5",
  "key46": "5yQirx8fefMBydMv5nCHHEC6JGGKP1BBLkTpDfavNDF4nJYsufTtQRQCnr96LwuV8K9UssGA9f6Nikzuy9ZPPZq9",
  "key47": "5G2tEVcbJKr8r9UYggTf4jqQzLA43S8NQXPkvHfYE2AH62RVVizkm69qvzDz5jjbAPFvrXH4vdNtdTuPcY67R7KV"
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
