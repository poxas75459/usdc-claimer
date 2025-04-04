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
    "5EpxASP3pXdgzhcsThaLa1TZLedwdnmRjeLeaip3Zq4Xb2jc34j9jS8NM9mjgcGdAjL7kDepJLD2n7QTtaDecDDQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rhaiHDnP6ar6WvsD3yZcgY7odicWi4M1iaHoDpcDBh6UrjydFRb5JTLbSBFFBwSnpDM7yp8VZkekiNDTvCfFQez",
  "key1": "65Yvadj3aRfpAovCFPNfzmNk7L559uHXTKbtMf89hXjH49okfHrg82XeBfANoTCZcJXRGLaGTrXv9PH6TunJS47U",
  "key2": "555ebNnZ8s6pRfLGtiSWuKsuWAwvaAPxmkpaGQ67cSPYbM9evWcoHnUpotJFXm1d8B6e8pNoqqmVR4cdjhsduq6A",
  "key3": "2gguzjPjW5Qz6PwptxX1DH8pWFXYdK57FjJ8LfhVTKDMW1TvZx2bVeFitPro9sLtdCbeJH1nixUVN9WD4asm5KN7",
  "key4": "4prbdrt6GbBtbt1WuzGfz99AF5ykFs7A4nqrf51LwCvSTYyMs58dxY527irPAVHi1rMS5i1r2ZgtkooMggFmSpmf",
  "key5": "3CB5ajkwP1G2rev9ENStrEruov687zspnk5kHyCuaMUdUWdvScNyBZV3xfa57PpP3DpiyaQ5mQMXfDNPZY7xtMMc",
  "key6": "T5SNRuZ4Cfg5xWJhttFzGSa7USERsYsgtTtudSr7ND5Z8kt7wJVNEcnegE5JSwT8KxG2HL2CSmgRXXg6WFRjSxt",
  "key7": "5F6yma8TyHkxhBvPhp5cJB8ycEHWyWZAoKsQhAYioAJFf4uuGNK8k8uvifkF2sJPRSxGVhtkNeMgoLeLbMJQgoan",
  "key8": "3MumEfYixaVaJFJRRG3oeqefsZZfyMMNLWkmVzKp9a8mF3WvBgWHsCMFgo7zUs2MVw5vzYoC17pMiWvmyyR4gYDa",
  "key9": "2XdiPt4v9Vi6jf7KKuRnRvWk5FivTMvFqCdNGZcpWW3zRvAnDUHViDss46sS7Zng53kCsu2VJRphvVVvwLTrfiub",
  "key10": "WcvAGQgBQEkHnUY72rBM96JYMNp9dd5yfoQNJZjjDW1Kb9mfy4SruuQmtsM5MvkD1mun68Bnr5ZhQ8LgBuWW8Xg",
  "key11": "4FyY8Un7EqU21x7SUcQgEVxJNFXpP2XUGQk33A4RNigkJsXwgwqgot4cZmxo8XtEDXx9gVMMmkWmAZfT3ZTFNCo2",
  "key12": "38gpTJQeZCrWpm3RVkEST33p6NCqLFqtigjK5HP2cXwQSqGDLvG9WozbkgrsfgCUZXTPdisDAv6N4PkKWC2TCBFc",
  "key13": "3PwKZ5E1PH4SxgVnxn4TiZD5sKoeTejYQmFxnh9SoRrZdhv1jxjV9oGXmjjSoRMUHFcKdmowpRFXyD3gdME9muVY",
  "key14": "krdwticvmh4c6oiRTZUsU7BvXqKSkR4TRbVnm26UkZzcGb2yMJ4Ff3JcfoFnY2NypJJRuvYKdCRuUxd5XV2hF22",
  "key15": "46LD7Z4rkcF51hMevDaYfyirAeDbheUtoSkbAV9h26jBcEEndFBYqSTLdoEz8khqpFmktdQy8dZ2Wb15B9njuWCr",
  "key16": "2Df3Nsup74XHax23BPhyepKqa5phob4Jv3CSevdoBY7bcX6hwcEzwtoNHRXnufEpwxGrN56XbgtAdBWbmYXJsExf",
  "key17": "3Rh6KsrBHceAwGgUfuQ1fGZdf8vQ3rN7jh5gvY11EdEjxTH4RptUYZNQpESipwFV7yoxgT3wcPJFvSspEjBii3c3",
  "key18": "4KNuvxLtjfzWhXX7VjjTJ1oSVuV8ZBgZkEXob9urn5yyDNtS5SqHeRYqS9FEQ6cEBzbRgq9q8VrRb9H8rn8HxG4n",
  "key19": "2gK5bU5WpJmDB6dEPBJBR4YBLmiMRE1umWkCTd7cSgDyYAdZennPto2ri3R4xqL9m65SQvhV86DHkhvk3hzP532S",
  "key20": "3jsn6Fu6veWmK1kZM3DfCYYvrwN4EewoqNkHwP5PwZVA9uDnhibYdkbcX6aqFLcaCZ8D6UWVSVZ23svk6JPKoAWo",
  "key21": "2dnJFjJfgVLZAvA69XCKtNzyVfwxkvBCJ56WySVDaoo5e89PKdEsvbKYuXeVBe9uLbSHzMCtoWPJiRj63Kc7RNck",
  "key22": "2G6iyJHh852q7EYxrzsunCFmMM7T9djSBdpmqpz73oqJAcANkQvUcJ5ybkE2gWaHjzvoThPvxhofnWWdjQ9PuEXo",
  "key23": "34fJP4oZM6NwHtHKsiUyCu6fpwqh5Etrmovt5DZ7tPK6zUBo7gYhpZUYS7Av1yniGUgei8SUGRE1r3PPt47ppN4q",
  "key24": "2hePENsxVNrbhQJXRzan8ba4E5R1eQh9JtGzZnBwNCQ197QsQUTQPXCyyVHobSkRNLBVgt7kqgYfKsJyFsnaMRF6",
  "key25": "4nGNV6jksmEbqFC17fJkbBydDnZ63zRrwBFKt87qZVDxZWnRPS4k4WGLM47JPg9iZ5zgZ8YEjoB6i23tzFz5H6M7",
  "key26": "5ZdAWfNk2N8btVo4ZbDzCSSEi1SAhsrc8xiRh8PDanm5z8jvgnLWp7AyCMYoGmJU28CZcNpaR1pTwjCcng5y9jjh",
  "key27": "3Q3h9K7jNSvbamv8FV69Mr7etvYzxKiXQGo8M1YrqcYdKoZXzqZYKkuaWEokTgAewpFu3sTuj4FNForKtRzJwWWs",
  "key28": "3bRmHhAukrqSqJPuwMAVj3SwPgvrbiYYm1PqvFkxe55Ec1PiQt2afcoRCKJYb3VPuV4okpLvWBA2gLC7CNAe9XeX",
  "key29": "uM4a2idHLM178hXGKr1cJM7tsbprFSjsUZVd8JehmqbEtQYb4EJCTKLb9qbF2MQvuTbjaDPKcyk1kR28QRKyubi",
  "key30": "63kRQRWz8kYJ3FY7uHs3tehVtmX2dN51mZF6JpbPcgep8fJ6wXhBDNvLEX666wB41aYARctHPYzqSBPXHHn8KcjT",
  "key31": "3ugAFBQP2K4eH2e7Jg7enVojj1Fhbv1fMfgEoV7P6dKV7XMvAgQeSoMqdHMEWhXuKG142V9VU5GxigUPuSnh4CNx",
  "key32": "2auwrEEWEmmLwViSLUiEVj6TL18hFfXutxvzndXEvGx2LgSaxXRUAKnyyvrEkBM2jzZjNvk4L9RxSFzWjLnWoFjx",
  "key33": "4nKiQDmrX3qm1bWfjbQ4ibmhwBRAc5UHPMEzA1Hsr2XKazqwA9EDwga8MeXumL5HnXr9GnszSDffRJq7vjf1XQb1",
  "key34": "5bUCPmm6wqTZ6NfD5sBaCKmp7dS5VbeFjh7ZWTHGRjVgB3jXuxSd5Lf2cq37QnWNG7WwwYVxKyEmyDgZo5RdfFRE",
  "key35": "5vCTbdtU9A1vQejfSA1mQYSV8wmWrzqNQVziSfDePYiHAXmYHZX5jd8mgvNkQNPkWt2CSbCAWMsC9HyCPRKF4vab",
  "key36": "3zRLyMAzt2F5VFHAuAMCoBFvhqpqbB5c8DKQFUoUA4Ggu3AzbGUNrm97rXmyeCnQZtmuqAaJQbLLHZohQJ1p7xbV",
  "key37": "2Z8daeTbXS3jZ2tXxJW78cRTvJmNkkjJSNtacgVUTikek7TXJm173Zui5iTiSzSjnRTNA5Y5y9XnatunX4HrYDfK",
  "key38": "4K4aBuKrzQ8hrkmrrVJZq4ekjaZVGPnWR3VkPUocWd3sgWjizqEzSNTiCNLEgdyCfHdeXPxZNsXeJ7AtnD3dAPiq",
  "key39": "5TMHS33XZX4rZaanz6jGiuhvsYdXcD8bAz2a5WcZJke65AS6X4VB7PUpSDgqxM7Zwkfn98Gj3p9k9ongiZRnjnQY",
  "key40": "5EaVLBFjPhUVGwW5rJD2rawq9MTMdGRbpd78yNKQXJ8urWjQTChutypZvqpywXz3Xf19zPM92zcTgVPTb2uTmBNx",
  "key41": "EjnNPV1jkr9ZpLEvqtQf4m1ygk2ThVg2q3edNYknnD75UwXabrd7pEgLQNmwk2eCbdzJ7FYAWx4su1EFbhRbeE6",
  "key42": "5HsvNpfooumx4Y98fs1X9ijot1rmK1rcpkLpjJMdxgEwJ1bymKGA14hbH63HTuHqJKG1EKxCAJwD41uh2a5NTvUF",
  "key43": "63ZTE9W1Ryair1pykSjnYU67mV57viFPL2js1U7g2seB9S7zEeCUXaQzkaduZJiynfFYboyaXgPe28Kb4FwbaM8a",
  "key44": "5eQ8NT5F3NYnq5C11mmKK3oAex1dPrGhuvQUHP3uPprVtLcJ9GtiQHRoqc9aKir76Bp4w9LhPc3sx8DGALABMHfy",
  "key45": "jf3BzhTXFcfdrwaH3eh1FJJBJfSv2gssM3gmfcEE9McuSjpMfMLCiTCApri7ofgn86qeTrTycmNGa6ickndYfuX"
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
