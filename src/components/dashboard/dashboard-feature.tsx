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
    "ePsRfic1z6peZGi2cUhLhAACpdWYRCSgzZuWfqUEnbtTL3degZNbqVL5SM15eritCgaZsxk8CKX9BDfrLmv7m8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bsks9kgNMNTbWBVeXuXpGTeCMRjA32GcpoSuLPVWCodyDSiNR5fZGNV4nxzzDvLoZcdPfwtcirrdWhbYUvSZKfi",
  "key1": "kYUTTs4JZCH7AEoHH9VW4eAcModFyy1FaqWiihDmLAqjrvZ66S7dARGuThp2LYcBZEvD7dGUhswtmpyYBdpZAUQ",
  "key2": "4RBfbtdsA4EkdhigoFrrm31qtcyQe9CYdzQu3SGEXjGmAcUHkhBvADCZoTE9sJuPwbS8hqX21kNrP2jmC28Wrxjf",
  "key3": "5gjg5hrtbAVGWHVfvNuWUTNdJx4dyvkKpTAtVFZ2MFFBKK7yu5Pzja5VVgimjhPYYLGP2dLictLc56nXSx2YaSbZ",
  "key4": "44FN2qmHfRX3AMknX7A7rxJYtNqzbyAuz3S5tawgNeP2xU9pc2ZKWAArTnn1cADuz48uWfXvfauE91HDbRbYkUno",
  "key5": "35n6ALA5zQUfM1ym23gSfEFfG686BvFbLxohZ3Y3ev4DjzgW1zUpLSgtSvghQSFWANGcryXpjk2Mxw5ctTcsVRMo",
  "key6": "2oHKsEm9YQzLjrNcZ6bxWChNNBewjKAB41euaoWJJdU6FuSy6LVYkvUnw3iZd9n8gzczqGVGNk9cTq7HtpVZ1Stg",
  "key7": "jsHw9tpW5cXUFnBeNwiGn4MqcPJ9jRFbPXmwLSrX7TQQzvc27xyDuqXP6Ket3v2ehXPHh2MVaTpUT6EfwR3Q4mx",
  "key8": "56PsPxpWXe4hhdtXRpdgFq2SEbeGa5yeqid22657E1NNTtSgErnUWjijGVMbYPiwvXNcYi1qKxVy2hxUy4tJRpXm",
  "key9": "uRpj76wev9uqboY17AfmkvU3LJFr8qoqQHsebQVFqeRT48RJGkTd6pSKaWiXqXmccVC8Nd4P2XYfepSnsR7GTzR",
  "key10": "4Z2VQDTXnkqxXsobGaWPfqioJC81naAW3nxgCYrua7citPWiHNdkvY1oMG8c7TwfVpX1YWtcEmfc3HXFZnWBhELJ",
  "key11": "5rKDTNHHoNK7crDKJPvL2VM5iJZFkqDifsVCVZFJABZvJ6TkxGMAHU1yoFY2Hu8GK2Y5Mo8pybDirBZz3v5hQTjL",
  "key12": "jJEtRGD9sMCzgpAfdjRgSafWtwq6fK5WoKxQDCmuxWkZmXX62V3LD2nce25PdWwFj3pV4SxfKpLT4HhnQzHSFJo",
  "key13": "wWGyYv7z5fbq1WT5YTiQtx3cujQXR1Tnr8oJELkB8LedXf6x68ArfRxKH6ifj1GouesBG4rfNXRUduzmpxt2fZy",
  "key14": "5BoEq7SNLZTAdDDbyMGeMwV9bmqHVNVxVj2gTLGYJ6LjF6PvuMKvFXJigqGgsFGnoH2TnfEJ2d3hdMxMjUyjh1nG",
  "key15": "2VFP7NS2XVns5ruoiTAJY9i4aqMgMVihHtDuj7ZrY2KNPTKEuq5Fkr35dwtnMvBR4M1HPZEnTpapW5ym1tcupQey",
  "key16": "3EaPGvwiqtEWCmbATXfFeTfPWZS1TbGARVzzaCeYFbA8qTuTTLFmTN2ng5VB1N5r7out1KrzFiyYGC5XZLL8vUBy",
  "key17": "57aGJDFMD5PXEZ2nFKYRCyhp9esarqVXJAAFtzDvmrYb19nsy9a1AyNCLXXxVTfYYUqyL4XRkhdnzQwK2pZu5of3",
  "key18": "59sgdiqsAKQcnU5CRyQmvDM8VvgkhsTZe6M8Xazby7kwuKGHYHE5tY6WGqZRJeLHzAfxiUEARpsmkbHRcrxfkoGS",
  "key19": "5A2xBGuyb16DPgBNed9EwBxfeKLutsEcUE1JYmPyqiXDwQsqwzYw4pm3kQnYuij5v3PorV4VTMFjG3ggR5iLAKCG",
  "key20": "xi8tjzygcZGeqAyNJ5Me91Fob272KDW87Yw4pWgizURsC4YMgtsYkALkV9XHtfatLhxeH4jgkVCeR5PPxCQRueZ",
  "key21": "37rbT5C1TpacK2ms7nBfwkXSETgTYH28erwXx17sNZvYWvEyCFqoM8jaKeQZCkyjqWFdDnvoBcPHvuh7NuyCLdZg",
  "key22": "XoiTJzcokoNvhqDNg7vT1ckPwrJjrMZMPXLtcnKz1BVomKY122dCuD3qigTe9ifJArdzvXEddH6Kmp9HuGr8Tpx",
  "key23": "2YFdFSaBZypEUwBp5233FFzwZrtx74kK2t5aFnwiXcbGAhDd3puxcF97CrobgBNpHd7KxVYm74TuTXed33RBrZQ",
  "key24": "DFCgrVueWtsiPegPh7U5zBP1CJiqRQkensfFQBY4DsNFCdW8grbxQeEcmvK5tSxabpyPhuYCazT7dLxT28tMgEW",
  "key25": "4PpX1kaAagUiX9QUxMeVGUUqxtRM5V4w8U8HYiJdaQ5RaNW1jZo7AaLumrwc9ax4KPBwe4byfkNCBSzT7pWfM42Q",
  "key26": "5EthpPJtVr3Tij9ynJHfkBJSNTnCPDPyBu5ugRktJZ7PSaA3yrtxiC1ymmp635SGC9KiM9C2htawVFnT7jcsJsSu",
  "key27": "4gaW6rVpNMjYfaZ9T6eNyiPz6FDCUqqQvHY537zPXLqv65yw1KKw9Y3zhngFfNY7rBQvy6mU7kEsjt8Kc9W4YvNu",
  "key28": "42rAnfVppdoefV32PrJfvLDzonKhTzdZjPftS8u7dcYYqryWA5gk9AkNui3WLg5D4nC8DqCLEmZuSbGv58bjpmpJ",
  "key29": "3uxU8kTNmmtMnxk2AyLNAGi5dkSfTUnTzqxM48955sxFLDhNVPCBs8DZEB32zEwNot6tXmKUgHFjCYzMkgLvC19G",
  "key30": "4eNwm5Sq6wKhMedN6kweVwtug5iV7dAypaKb5AM6Muv32jxqGCFFVyrszH5oTvgYJbtxzgC8EDnLe58gLBijJxf8",
  "key31": "5xph7o4aihK8xWnGE5bj7PtBS2rTcRNUa5WYF9quJ2oYtnuu5p5fbifTpeo24XSNtuBG8oHYf5zUUwVLfu3YMK3E",
  "key32": "iiUrgjcUJSXcbQNQ8Mnpq22qq9oLPUsqNBZZw1sbuXzn1QGeqsH8LKoMHs2iT3vVRQepRUouVW77yb6oHdVNT4v",
  "key33": "3PitX8LL3u3QDoVspXbAMk2UYjDHb46tGrDeEbLm1auY3tUaxj56bKCGJowyWp2mqTNGQaW3dyfA2Mgri1gxcivD",
  "key34": "3xfcPwobn3mP89arx7SpgMtqfA2rHhipB3SimAn4gPxYgHCDn8aea7zSiwjix64mBq3GChbLHGFVQq8UNvQv1XWT",
  "key35": "2Y8nztqUbsJkuUwur4KxiYzUGHaY7XzsCR4661aJirawLKaUbcpExQaVnttRwPc44axTNJ5G3i6AaKTZA8nMDzEM",
  "key36": "4dqSs8fmuiTvC7rwbrxcK4XxyjPGaBy6torQmJP5JXgEEercSXBGyXSy3GmYZiF3z4L64YkwjwJ2hA7ChVo3KJXt",
  "key37": "2ECacWzTXU9EY7dmfX2z7UScp5ZR8J4ZKr2s1y2GzWovq7TTPWQeTDHqPVPqokonxFe1j8zmHXsV38X8UrHD2NAV",
  "key38": "5MqukcXKPi1GKRUfoiApYgUBYHnnKWfpKAS2fo35VCUKHyFTHtqGabDu7q2rqGj8TmeGSGEJSbXovYQ7WuZXUQks",
  "key39": "5rtbhnp2zQjUNxcwwjagVE412tB4mrXCpSdJk1CqhsyqZQKYuppmmKmnoYuErhc7cMznadryZYPhp6wp5AsH5gva",
  "key40": "3YnPJPLTaqDF8Pp8p6oiTKxJyq7zhuhhdry2myA7RQB4Sui1yQZU4uuzxjuRo88U7y1tqCFpuN4inQFx3uFfLBT7",
  "key41": "2GJ1fSPPRLTPPhSwPJm9u31T52vCvCQu8KLyTRpVKkZWVCCjw8TLk1RbrD1dRZpwZSgc5AasVEqSMqVJ4yLFwKsi"
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
