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
    "5BdvPd3vLSUzn4C5RvBPomdDxoyU7Am2rCaTu2HfaKRnghVViPfB2HsaHNBx1g3k2KBH7LH9B3sn9kEd6nWsG48P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TzsgUk4EvAQfDKCNKrDyxv6NuT6fjgUWzdzsytPZ8fqE7yEjMwFGtWwxZK7s6EexpWN68qj9Wq2yicnbe4FNbYW",
  "key1": "2tXxW5yenzBp3qndCPisgtAbzXST8Q7exoM6uHcrAR4dBuEbWAXWJ4WBNaWWqGaqnv93LdNqaaGnu6vZMyiZ6kcz",
  "key2": "4MHoHLov8jxqtfdhGKYsfvgFprmXtfD9MRwqfMNM5eigJb649HUKWipdUC5yMGzkMuXDBXiiyPN1xHux5naJVzUv",
  "key3": "4g3kUrJzJ6Rk84q9adCHhWagEkii2y7QPnHWbXVKduGxad1WXZgaQ338MwpHWfUuZc49Xvqhq9WJunLtDWAyqj9i",
  "key4": "3wEtJ1BHaLfGnS3TLG4RZoMnuhF9s7UVMJ1NNcxZyDDDPEq74ZnbRumMfAfrP2PsnS7xk3mpP9Pf2QR4LYaiHJpa",
  "key5": "56rbEZfgqBzN6fX4ncWKyELAS1i3d41HBceDJCkJVNzhK4WoqHVysqn8hjEKcLp3HoMfSiHU9cDGtWvwTD45PTPq",
  "key6": "hJ92pfQAQ3jcdt5JhYzk1NiECU2NkH3ijQ3FEHW97UyhEDpv87J8Rg4ssbioHQGdRanzcPHRp1Nk2U2L8JqS38c",
  "key7": "2yMmYT6vyTzQWfH3MkT8PqbdeSSzARvYxvxYankvrhSbvhiqmYTEwCMzyad5bkDR7h8tZQF8d1tLqDZdf5o4tYJF",
  "key8": "2AMagNrWFffhtX7k2CDa7YX3WdprmAWdsGpp2zYVM7AG4twCRo4DnDRMUcaFtRrEypY6rLxnaoZaAR5zguQYmdoT",
  "key9": "4nZk1GhF1C6AKhESh85Se6tsxPhyarVB87gXFFbxpJv86y799c9e2yJNeFo9cb5XF4F3oZCjxJsZi6gt2gxdyzeL",
  "key10": "49WpWLZ3vZ6iPpdwXxwFst5MVfxxPj241a46DnsNRW2gczvdcseWGBip9Aqi5GUQrHkcoUDopyJma9sPwbNFVBDv",
  "key11": "3ZfUXL2rpMsyZdtrwCLfWggKgCKxFLdAZuw4nvvd9LuEJRupqxrUy7AQ6xW6qoD65YVyk9T9s2J1quJCVNT1ccJp",
  "key12": "2nbP1Hn3tXCxVLxiHZDU5cXf3chKMQw1zjLpsKdH6Uq3FouFf4pWJii1axCyfQ1Lw4BFfWBuihbbtvfERR2EKtNq",
  "key13": "5PHLavjtizVtjr5z7mFmyYXS7fMGsUprcQUwxP9DRTdhd47239ZZ8L2C3jQPHkK1q5rEvTzgUeSDwZ3sn3uUdiyo",
  "key14": "2bP8s2HqF9JBG489RaWTHtk6hxGTeEADECpaosv7yAA4wWnWNuXe1rkSoJ2Eb1GzZuFgMuGFFR7GScrLSuQaiHEm",
  "key15": "TgjAxLUcNMCmb2v5zCx5zrtSB7VfkQBUybpVWHMdb3264rhgvRMN15r3TnCg2ckuZrBpFkwZe6ntTPJ19GBpf9x",
  "key16": "4DC6vPyNuNqQip6rHoPq15hMAyaEmkeXP1i7AmoEbzxP6ZRKotH3s2YmdzFhztivysCm8KbSvXXpRVgHHUv2P8T2",
  "key17": "2NjpszX5ofdoURDAgYutFVrf6apSptwFi1P8BwfamPeuTVc2NL36A43sQH2C9MTzj3Wj3MXHePwwNgLPJRMLapNn",
  "key18": "4KxaDLayvVjCwPnGxzxK2QjWUaJCc9QGihsK9Uuzm4vUJmMDPZkuFdEjWxo4efmf5sPz3JsMBNuNF3nSnizXpHwF",
  "key19": "5pvhAZLkTUSyYtL8JTEmpsRRwEWa8uUEEQLMZBvCK4knPH81Pa7GfbsNzn5bgpaeMQey18rY9uBkWFz4WW1VLrzc",
  "key20": "2Gx1KJHahwceuHseygmgdgGNAr9fecLsvDCdkN9943CfEZwRU2FUrd9nmKz9zTNSLspdQGxfQkTWExAn97RYczFe",
  "key21": "5tspV9ZrpW2Ntn4YxLKMgcquLNAq2JDk7ZcFiYEmfY3mJcz4SCc1Kr9m8s682VeZCMNAdCc9NAeFrU6YyGNvmzTp",
  "key22": "3SmRMXp4G2vfXXd1q3oGZ41sc37ArZQftLGYDwLwadxEHxDjzjZyvqLDFX2zr8EeNvcc1NQYPNXJqpdezQ8FmZXF",
  "key23": "3SrTUqDzj8A2udQ6wmu7neRD3svJVfv63oouRpaQsqoQUxCYsK54coaQ5j29YguR5YnLEuFMQhkujSRNvBioPPHH",
  "key24": "3dph4SmcVRZjsi8SgnBqNzGQfUYGZugnzGMGVTNorXvS5Qmr7suEkWdkAfb9DdyxcBZmz3WvLHHjsL1g2gwd36Q4",
  "key25": "5kHTy3NVU8Dc2spbCPF2GHVUCghUXQxBSZoQ62J7cV325MCEJY231rynt2N2MHFPWACxLfPagUR7RyXMtGZFQyrE",
  "key26": "RKfBz3BN2Rar6FShRSHcUTJdmmv5AmWKfn4FiauKr9SvrzSRgTBTKhvaKskwjHiNEYhzw3wzu7wTFQeub5a1kRq",
  "key27": "VQbCrQkEuAkwZqwossoxQcPDErm2XDiiQ3LrpN8MF1vFtkScfWB3jbeRqvoqapEejJegEefnHfGNnUkyFaVyx58",
  "key28": "4rcrvbTDML4b9uh39omwQqPFmRJ4SfXQdRDzV8PmSccn2zLdAqi2CiaqJw4zuWWkKEsJimfH9ngWu38dEbkK4vX9",
  "key29": "2yG4rtgcx3FtxPP4WVoHH646pLhPS6js4sD6VRrxnc1HdaLFJCDUdjbXhpzkTghPFkNn6ZAdfqxChPBsnuQQsXJY",
  "key30": "5SLzSv5uNqVz7qrWscEGruWfLxxtx3H7bXt7aW3yNDK1jmXJXChUKDJKH64FEQro7Hwv2cHZYNe2UDdzYqFqxQwG",
  "key31": "TCdePWuQY6GauscUd4KmEjjV66u5Y6esn6474PkAPqswgeSskfjPjnPqjaWWesxkHSTTT1AMtbuceGoZdZF7EHx",
  "key32": "vpVeHv5Xm59pfLAjRJ5ysZJQsyTGy9u6PgLEih9v9NzB3BtM5yFQ3XubmyL4S7pyJPP5ckUuzRwL2B6yjtJCW3g",
  "key33": "5D6UL66eQXfnEPC55rMYTqivMsT4hpGRrD2uzciRuYgmUKGLYA28nCGQLS3AkYkA9wTRvQKUNPx1uWkWjWjFVgB5",
  "key34": "23VLTL63yw4g1ZpsQfjZv33BHLPUT6kECbEShJ2qLxuqaxUAU6fBh4Q7TiT8NEomdaKZQ6AoqX7ubmNhu6CYsT1x",
  "key35": "5hgKtfCWSJCnoz7NP5X3wwRwviLiSNJXrRp6QPYVSVv1WwhDUhmBiXeVQWm4TM9a7B3Woq1skmrV77bxeXmFSvd9",
  "key36": "o8poC2sZrCPZWEf6M7vZXYM1hBuyYHxJFP7SG4E8cKqUdqhqWkJVZb54h7ptw9rsW52KtbiSCmMSdfAk3yz6wmh",
  "key37": "41QKxQATKVAAcARUiqSR7hX51xHdk1hFb3QtcEwvbpyYyJa5G3EdiuvhWCTNUW8CD2ysiHSyjCKszoXs4bbLiioC",
  "key38": "3qcqD7ohy1MZK38MGt2JV9f3ETUeHstAExNb9G5mPXUT1k49EZ3xMk8hC8Msmtqr9awzZJkRwtz1Hhjzyg3Z6f2x",
  "key39": "rWyqVbFxyfLbus6B91NLSjSFFPRpjK5CfvQBS15ehGQzh2qU6XFJZCGJ9b1kufkddLPZ3uE92FUYFESt9X6yqy5",
  "key40": "4qqtGTJotAdMd2J7sXCAWypLhFxkuNdszQNVQ4qUqAW2syJt1j8aFCXxAUMzbYyHSrR6VXEbaRVswKimCh9V5Ac3",
  "key41": "2bqHGHJDdCQGQYkp1cXSjWmAwH8ph9Gc5TEQs1mv4wwjwv8314EiLDMtxaXx1cuDi1CX1LZxmdUB9YZ3yU57xjSR",
  "key42": "MGHsLQDb3DWiE8yRJbByM461GRqUjhhbiuxQJ7Q3udVdRbDX7zNhx6EPRXVfhcQi8A5cmusy8qPgMLPuzxpLcYn",
  "key43": "2oSvMqr1mrc6o8orAnWRpVKtTBYTjSqhGki4GxBwZSRxn7BVpMEmbfoU6miv6tAGVzK1mt5t2i8bRZmVgqgUh9G1",
  "key44": "2eBuPFxWaNzuGFvrDbtiPNRS2nsY3V6qxKxgSxTy7bheWA1hZGRbS3EgzPjQK2ynecVoBnBxXVvnnWa3uUmBPq2B",
  "key45": "3zbMAKMkJ5oci4DNU9vKHZkJkSQ8eg4e5maCnP7raVhnQtaUWWcqUVXTX7eSN1X5vNSwprBqGmMDxx1zpEd8mtmz"
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
