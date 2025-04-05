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
    "3mEKpKWqqsBDVjLdG1gZhvRCbxkvsEUkQzrdPwhEhGSFKQhab1pkgHHtrNKZftT4xVXPRUHCfwY8Db53hnLpWqza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QGpUAvryNzT2Qc8MPVCm2Z7nhtaW6BYgpuxyjMv2UD8edHsdDZdetnE8sTbkNx6QB9cdbiUumULV92rFJXhgAJt",
  "key1": "3Ju28tYhgUP99UZV1SrFVU91rN4kevcPJgbGcTamaozVpSXRojxmLMwcTCw2fxHyLn1uDZpvxKxUMU35Cb1NECVX",
  "key2": "2YaQCYZeEnLxjF3SLznvjfgNZNWAyfHMrZxTUjjT9kxWpSuvscDWxBADdDpEkP1iDPTc1Qwcg3CWg2RvCciox8TU",
  "key3": "2babYNTYDreSFAwx2yLpvNjV5Y3cAJ57h7yQXu9gXhTTJrum6mE94tZ7wjSRGCkb9wmp1Qfumb9WTYvEHF3GY8Bn",
  "key4": "5vzz46nYHcmz7YqybxTh5VF96ZEBj6EmQFacnhaNhJ8jqnXo9X8SLBSBkNtBP3FnvKr63h3rBwzj57knoixBRafS",
  "key5": "Z2jEEk2e2zRpjkDfxnCVjs9vRQ13ow2ZEgqzBiFHKMVAGatvLsAHnBPc4GVXzbABMmgaSTBGB5SfJ99CFHUFjsz",
  "key6": "3GQ1ypjAYq6vAyfF87iigyBUiBnqGEHYZiHheuFUjMtfxHh3H3T3v2soJs7agAaqmAQaT94KE1Ms5BHXo733zaMk",
  "key7": "4g62LY7fexxraHkPX6mHydgo5yqRoixLsBS8bo3dju16HRuykhkc6ecpFKv9vGv3zCAutBmxScDZoL2T51fnMqrA",
  "key8": "4BywqgKbyFRtemknLvDxyZstrcZFLEchYNawuRFMd9sRdf9gFvCEuEEtvoaKmpWkX92MmLXrX19grNVQHFPoHM6Z",
  "key9": "4zreCYg79TvTcjms5NkRzzgxQGS1MtbhWu7u9MHmU16Bu2zV8K3wi8jEX4pYmV8DboQDeGcYXqbihbE9qXEsx7ej",
  "key10": "58Qgibj2umjLwNZpccyauBdDWSkkyfp1ejhfQs51NwU4g5hR9rAwAsJNZsNYoZMUkVpqBa6mvVvBs9CL2iZdbAoa",
  "key11": "2ewu3LTpHrKiTFzLnnYEqXo1DWqp1doT8xctzNcWBbtmazqyafEFAJn9fsbea2MxUjMze2kBPnHWJgUZmRmSyyY2",
  "key12": "g4r3iggTaWYuZzwf5w2uam5kQVPVrM3uuT8zxtbRPSrcaKBGAsBzGm634RXcVsBYzeoUrVyAPsaqWQFAtnctWsM",
  "key13": "21Z5J4vcFzsbRhbGJMhU4ByRLQPasT3EhvkpMvGhYxy5SKs1kYMMAQjs2Z8nZ7iGAs6g2N29E2YugpCeGKQxhZjk",
  "key14": "3Xbf2ThBcCED8Wb82bzW91TcDrGa89Jy7qjFsANpx1bUWwSo9kxdoHHaZuuQRic967EmcDQQoq4xkXdzy4pHPoto",
  "key15": "ddNwnjPitiRv9QJs9VFsHnHva5dPmUwp9oJEyCGoD5zBxqHHy14LMBRXZhJet1iQLnZjoAmc8pmzU8K5TJTAi1Y",
  "key16": "3x7nLsDnKcHA9ovMFwJ2LX56XkFGk2Uo4H2RV8fAYcnxEBVxA2Lz5nTjnUsU5EEPoZUU2Xqy4CaHXLFTTQ5316VK",
  "key17": "SDDj2bRUikBtSuZEwhqKqZTKB56a3L6Dj73QP38tcuJPG2x6sdMv6wF2ofttkaYJGqCf5VFCY3bn5QNfPyPEGqU",
  "key18": "4JJvoJT1mSnBzMifbitR5YR16RNJSnRsMMRqW4yRjmQVwXZBFExZmhZZjgKcyZhCnNobVAUgPNxXyeF2EkX16GhK",
  "key19": "4Rx1uhm4ZAyccgiDNjPTtwpuzf7PBzWTTJoaA3XVnBHkaHXwM3pMdvhqAzfXM5B2d8FJzZegjG3sDY9a9DShUzHJ",
  "key20": "29v6sLa6bxkgkfYQXEcv6f3rGfLFNoUVWaYz9EGCNyd1GKSdiHD2Vx6Q9moyrCHKLr35r5xVU3L2618NyLZyzN4f",
  "key21": "5yq1HGe3Jvpdkkz6tN3iVQ85wNbpiZ46JQpuTNiarJurhv3oJoTVSA5bstkgD4EgoM4yK8E5FzZQpzvaVvVjkt1Q",
  "key22": "Y2HjbW2YjUR4cbcKwdoWu9wNt5hmoLdaskZ349F91gNaXuDKzbSuxaoiQeG5CSogZjuuxPBt9o3FU4cKJ5AP9M5",
  "key23": "63qFZQ5jsXSoENG5xB6SFMWC8zdxGR1iNqszYqGpB1caJa94pWyXFvjY5Mvjqd1bMwtVddftF9AC2Be8WtAWtrEr",
  "key24": "3eKat4QX4NhZ2N9ZLhVF6Tp6aQWYAS8ZfEzjtpVd2prwRmUNLFCFAgtxFYQPmJsFokEHT1Hzf2apDRHuVgWiMcCu",
  "key25": "5ixuNRyM78e4HioEzAPL58ZYwVc6BHbtJ4yoVeZntNiZ269Xy556jVzPR7DcmqCZBWXn2cKsGqovKjupe5vvrpTv",
  "key26": "2peYdtpuEA5onBsXotys1mtoSN3ukAEbocVBUgJ9HGyCrQDuP5uMr1EyEWvWaaSw7STsFdVhmKhdJxyeh3sv7oBY",
  "key27": "3x88n48bLcY5Cn7wd7iwsdnWmrCAY8cSB3fCydWEUNBaDB9R6je8tUVmNQRViSb4RgRJrbkK7JRqkMeEikAe14VC",
  "key28": "kckQzP3VhYEPh5xuhc6VuUEG9j8mAX4Ygs9HZX4Xr88jCJbTab9po8tgzYnFd6G47f4gGvwV74oyhWG4WFVRypx",
  "key29": "22qSiUBqE417tB3mBMZGzJVyS1RwigPqCXufPxnufetvHMaQS7iJsx4st24sQB4xQoPBGW2w55wcBRoArcKDbFXW",
  "key30": "2Cnnqy5wXpYUWYPhRpUvu4CYtDZ9SoZvCXWzRT4NLnixAxJWLVBRsaYFwVY2FbdM5ubtWSWB6NHZv4gLnipombCr",
  "key31": "53gFsTJzDWdiTDFPA3rzFYtZfbCPus2bfTjf7x9iczszdYAMQhWMz3T63LYEUPz2EipBS8eQDUY9VfDVi8nvLs1Y",
  "key32": "2VwzaL5QVeriYbYinhADH7n2GHCUt4TDLdY6Ln9bWokGcfZKKn14ojLqHWGpefMTDHqdqRMU7rF9UDavsoWDWd9a"
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
