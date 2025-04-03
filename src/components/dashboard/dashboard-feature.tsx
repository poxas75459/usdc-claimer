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
    "DRQ4bRJ66qRDgHbuh5H8T53PdG6xGe3USWf2S3o1uYmVJZV7ifVD9j8Ft3hiQJVJ5y2txb3dKdNvJ23f9R4NDaF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LyUt6hhnCDBFaJcCRqwSotjrJa83RyuhwmQHm2vEEoEVAheBNk73L6qJY5DUhXMP6tHevb8eFkJ99DM7jfKSYaK",
  "key1": "5PGQQZRRbMDTMAe8wmcXThH25JbkcmzGJXeYnz3HkdRDMTAHWYrc1EaVnGMBrhYh5JRfaLZ3rmvq7FPnqfXtiJ83",
  "key2": "5JxYqTJFqhNWDeMgg4jDfYV4QBh5n4MRqoihCsE1cjK5A6UTE2gTeVr6ANYBpykdBNLCozBrFWf9WnTxV8AtHL1L",
  "key3": "3YsYtwuaMwpPNGfPK5B1tAGSk4SDMKQ1jX8wboSAP9HMPjctiz8gZHVMn5TDAdkWf9fVkcd7fEwcKUDJBwRgysP",
  "key4": "2Lub22dfxazRnAyqY3tsFJLgdoh1MtrrjeNzGXQ8YfWhNAysCzKBJb2rhgdTSe1BDj9g76YazA1ckKsLRAAVcVNU",
  "key5": "5rawPnVmTXpjixBGA4p3m5r8tY7EYfmxddkSr8bAdPpMZehHo8JWZ5T1uUMt4h2QsrpDaQAfvCpJfDuSLnG5riNh",
  "key6": "2gXkuEMrsEhMdRAFgRN7vfNZ1gsoPuNTzo3xG5em8G1LDrRygQYQXhXyz6bCcNHb3rvrKuRmFt1vLZkbc8Pccrg3",
  "key7": "4T945AByH779ZofxiS7Pk7YgAQjnt5L1Aig2fN8C4DJi3Yd5UxkibTGx2nHzVcmvHGREYrHSBj2ASLBdvj4253Cv",
  "key8": "3ntjNdSUcxo3JBAUrhdTTEnzqFPvX2pGSFYwdDsErUBmJW7dJbdryTVLAdg89mcu12SkdCNeX3XXTmDWAp3TEza3",
  "key9": "3eCgtSq1ydynoHQm6oUWJSq6veLrgcJwFgw42cyc1D7dmCEmW22afArv7ze9yUqGZF3GBbJ8b8PPURUy4DWqrksz",
  "key10": "4sFt8griRfxizJsguVFpd7ZFNh5z8rAWFiqWthpVs4jTK6gmdoga7RzLVGENJ4sVvHNk676uDPPbaN4oARKAGtt2",
  "key11": "29CLhi6EWA7mDPTMZXhWQqfEjQ4BmLYvwceLADnWHnLGWt7Ms77HmArG59KrE7qgZEsyvZUZRVSD6zLnd72rkwyd",
  "key12": "AHciY8ZN5wrxrVuFVKxTT211ws6W9wEFV2eUTkPkHUiWGRriuNrH3hNg8dMZKP55oBHThueRYht6jrgh5VE7DET",
  "key13": "4A9hg878eFp2oe2EGN1MnDUzzbxD6CdB7naaSVfKZoJto6Cpt9oxiphJx21VAdgTs5B1LCWREsuCJK2aE11g4cbp",
  "key14": "84S39LRQcqhj4viMVWR7jxbpHPMazN4RMv6N36Gk6jHDFzeM814mivnqc1tRNUK17mfdnygBkUNuDYVgdLGGMkj",
  "key15": "BQzJq36zvkewW3e3gb9e65paNYvKfeAmo69eNPBkZiGMVxcfFijTYEseJDzmCZmGPh24X9CCwj8rCD3qTWoRXhM",
  "key16": "3AgvkGTxY1SYNYNFTkViEZHxQeFv8FGqaeTv5zYZ7h67u94LhKXfQHESBDUSQYyqVf2neG4EeRSD8CUjWZnameYo",
  "key17": "4bGwuLfepZoUsbGfgs8GPVnbohBbZrhnXnEMfg3Y7YaCpWPAXXUenJcBRUnkN7NqtSYSndSdEZ3efYJjmB617xF6",
  "key18": "tfNBVHHAw2BNibhUR3fVneuMzP6GvFcTjRoYc3kkc1dPEtxb4g3pWkZ5ucvphW1txyR37aZVay2SzumyxmBY5LV",
  "key19": "4NZ25S9qQyc4ZWBCE7BLgN1Mp919xxpBXUmxkDfz6JwL9Y8EFi26gkLoJgK4oPi6WbhEjS29EXTUbUmPiQY3BmER",
  "key20": "7hn9y9jGCgnBrDt9Y28ygSKxNLCjZUkbWUAyrgyPbKEJS5gATQwqWBtPvxZ3FaUM3ziBbmCg2asz4f1vN2NxDmt",
  "key21": "4AtCxr1a5Zf2tKNYNdgwWJwWYMCSbrZf1PbQdp8F9cauS932GmyAxKyiom2a1NEGKTcMBzZMFtHme1He3mqYF8uH",
  "key22": "FYUZKPvX14Qzo2Ti4xgwzaF6iXiX7xnFKXXAPeTtBtu1NZ568ikMhvgCBiQCeFqGiki3g2E3iaRqXNTMer1X6Cn",
  "key23": "2rijGXgwNVmD5H45nVJ7KE8noCUzW8k1RK4t9ps74L9Wd6S3LNY8B7fE4iSrt12b24csQTxskKzbvwX2Sndaz9Pe",
  "key24": "4pK7ES77StoAXggw8U3HHtiBRtzkUiBrcUfmTYUgE32ytEohJoZggh2w2K96eoJYVxPxby57rzE6LEJifQij2dax",
  "key25": "61XP46qQz6EkrpEwLBxU9d8w3aVDZZoRQnaJ4B1Yw8rcnRnv4pP2ptd2bPAagcHjotcdMTxAhFRYjt2m8MCpqGXZ",
  "key26": "4Rt7YReSpPHw5381BWVTKQ5b72qgZGgYxmuhmtR7AGxxj6gW6MaW1MQy68wVbUsyyz7GonSpBMBhg5Pd6d7RWPfi",
  "key27": "KXj43k85SCM942ND1YtRqxRgKqAo4q98gM6MmoLeBAQPEDawBmgnD3PrgC9h1wfsy983BxufjNVaXnkfW3UbRvK",
  "key28": "3H6Xm1jKPxPYFyHC73AJtBtF1YGvat13T5FmpfopmMmnEoDncPuYf4CTf5FtNRAksT3LaWnypze5gbUXwNCK9qc4",
  "key29": "463WGbSNe7iZkZ465MVPxHCb2o1HAoPaxXm3PrN7JYeMewhzDTYAuJijmAAhcBbyGt7X5wJLYyxGLGQg5LZ9WUzj",
  "key30": "514kecU1sja9kbvTKd7SBCUCRjEaWnaqtZYBv9RPqKN6aWsAEeT1NcB6hFxb2TU1YCihdrdJ3eYoryeZDQPHZw3C",
  "key31": "3xig3q5mPk5QougNmBy2B6hCzW7ZFvPNmsu4yBegB7JojruVEmvY4XWSVxJJNvwpHJhBKCxJ3vRVtmNPxwFsHeAp",
  "key32": "3B4dA27Xzxk53ak3Cjjv4svJQJjbsaq9QQVqSerBVpmu64HrcsfKZD5wkDQDmBmeqUj91fEG3Y7k1Y5vZmZSjRJx",
  "key33": "3kCTv2bdwKHc2WycuxjfhLojAUcwGRMvZ5bK9y9fMZxpmode5Aq3R1VqzXkmhW3AjVimMUmtkQQbzwatePWpeNnk",
  "key34": "shXzMs7XsxbJ3hWX5uqNPL1nfaoR8D1AsrGVJuuXk81LQLv5hyaDtxDVLUTwDw616LMLvoKtKzahyCopfeX7uJW",
  "key35": "y5MnfRWSX3cdi34HAsuBLg3it5pTGRuF44Umk6sWtdi7mZHxz2FJTGzeJHzn9SCQJs2dapz1amCb5q24BZ4Xmov",
  "key36": "4kVZe5yLcRxcYmwPNr9LDoG2YqniBMS57fn8RVQkA6YRpf4Y3pNSF9ZMyFPxFcmEYRXrrGACbGsZgGXdnMtKke5A",
  "key37": "2yRqGnV8kyJfUE6EK2EHG63Gion4FJZMLXquuKJxQXvhWRZFEFmqtoTRfu2HU8MKu9NMYZDTHMXAfuUubFNmZknd",
  "key38": "hX3Jd84NkR4aXBrmy6dv4ADdenko3XaRacwZMktL4qRiAYXMJn6mVeAfpY8QsnfPNt1dUPrKiAj3q2n6drFsBth"
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
