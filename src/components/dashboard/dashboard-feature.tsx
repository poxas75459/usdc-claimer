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
    "2tQcH2yz6Jms3Fd1LjAUJzyWwoum9XETusoTQXUaHDmmJuXz5gYri2VzneNdE8ZKNX1jynkBCtc94GJbBmRJPR9t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Tfjd7rHsDiMUPuQTQFfmvJrfFs4qC94hqXKUseAoowUhjZpxkXevEHhePFb2nH99CBnXa5kgtW7nx7ASyK7CViq",
  "key1": "37m9EYmCmTjPoaykR87zXg1L5bksyWyauksAxYFUUhmJNXnMNeKY7C2PZePJ9q5NLyLmkBZ19PqnsDWc2yGwatcC",
  "key2": "bbbJGtRqRwwg522rswme2NL3obGPGr95p6sSxxtmwY2M3JAhMQcHLQxZPEZdtH4KPBFRJ1MhvNs5oPSFYbbMns2",
  "key3": "4KT14fBrKMUBhL6BMyVBBKUSWegKx1Ryts2n2cSoTSThBkBjqDjy5X5Mn1Aes1wLXb5xZkTaZ2ZADiktE67cSjFa",
  "key4": "3YbJR8JTEcAYCYeDbKsch8ogRhtUN8FCddsiRBSDEy47HG8nkZkFja4cRtu5YGyPohfpKx3tkrQzySeawr6ALXar",
  "key5": "2CX841f7J5wE7UyQUm82BW1768992PsPC4GZLeSh2V8T5RR9BJnSJRqstkkySM97nTnefM7yd4YvLTjqeJxp2AZW",
  "key6": "r945m3PZMF8PKc1Un1aVw75hgiR4AUJXXswNsdrPv9DgKSnd4Jwce9wSyhNZXrPB8qKndmJhDCF9fhVWJ2naJhb",
  "key7": "3UwYkKsWf1bcaWRYqVe8MWnqWCNyPz4WYAgFr9ugRFudvnXk2JSCZopXfHocqr2z93WnbYJGk3kr2qKN6JbfNwBx",
  "key8": "5WbKunyossWijpTgvnxX1No4yNY1zdXJYGWLLzKUuKE2s3xVDUWsrD6XfR9DGUEiNm1jDXHhyjB9f79mBE8e6kNR",
  "key9": "VbEvzrn5c9gj3K3hhzzFh5SnXJvPpR4rGNnkZfJjb7KVrdCBnop7KoXMv7TqrfBt5opW8MvRJs77s5BrVc2WDs6",
  "key10": "3srKrpWoBeVV2f1dpbS8NyrkxVgswDYXjB6HUhg8kLj1vsW5KEQzsMH71xLSXVqVBj7uuH5L2RPRYaaBCXBJCMH7",
  "key11": "2Txf1Kpoxe3zXJUjCmn5vkfsKtdWvRqUfi7xmKUCRmNzkAX82BcahxjCHcA3jZiT4SZjWZ1VEmfRHSsx2rKS1QLX",
  "key12": "PmKHXoiVfg61so7HfwwALfW7EVgjint1t4mRkimwvHFxQToAucWjxdM92SSaBFoEsuKsoJh586hsMo4Z5QkPcHi",
  "key13": "434rTRnTVxvf1Z4r4rDjkxj6ucFptZ1X9e3C8gZ8ktrD273QM8WRUn3tKNgKYdtXXCrjXB4zWgou1EuNsPEovuTY",
  "key14": "4oTq5qabiEwCVfFTcGmQG7etopSCH5H8bMSE6zdy1MVqwNBtNbPeTnHyPdtkTUKefJD5HKS6qSJhT7xTKQULCjPx",
  "key15": "511cGWDMcoQH1eTUCNd389TPULGVBt4RzPMX5N6nt9VT1TcizMDnxYqihm369tVFRYnSRepSqvYAK51uXaSwt9id",
  "key16": "3QBF8ReoCTam5BiMjFDL9CDt3HcfcnkFtEVgS8mXpFYPt5c5LetaPbJTCqjErQgbKq2aKqrZHLuKPgchLkRXZU4k",
  "key17": "4J9gKYVS2HSbEN65g833922p4mjA9Yad32QGKkHFaFAx4EMhsUNG1c32KTGCUdafKuSroms8fTPUyLwS7QwqAV2d",
  "key18": "3Uynw22A8KC5hGNCeHdgyT7W3HfwT7ZjjaSgJgcDpiqSKBCwFqdjukEef1zutSa1gcAKuEDryQHx3tstJto3xbXZ",
  "key19": "3DSzAN1SXtFKeEEsewKuGHQEjrfC1ShHhMCLvBjNUYvS6oZczLAZr4u7vZP4tXowZn8YVCv7buwH3Eodf7bLGVhh",
  "key20": "52SHa4HvWd79JdhnyADSx5FSLRNH4dfXqhqsfZx65Az4gRC5spihB1wxfNjH2Lvg1kczdd3k3TYHmD5NWg5ArtAZ",
  "key21": "US3pVF1T8BJWNSA9yswBc26ZmqdUS5VjUF8zcCnFD7s2x2nBYxGVcE9rN6cBXtXoU7dv1BRTx4qc1MMAeSa6ErR",
  "key22": "2AM6AUwKUS3VUNf22bbfRkWVTJXWcBMXyZkCHs3pLxTXR2noojBTEiARFu2uRmWT3ao2nd6pBHiinwfQM67uH7TV",
  "key23": "18QkbonHcQnfyiVddV1WVR1LaoWk2Yr2zcerx3Y1gvpHU8ywxMSZXS3QMvwKFQytBN7Uv292oXQySuJttgzYzKu",
  "key24": "4hN5gLVUJh8RCaJzU5FP5erU6NiNGf7saiAecDDAdQEjyv5LghJVY926Yc1HG1KMcRFTs665uybtcL2cJYP6Wgdx",
  "key25": "3NEUiB77izdTswP7VaDXQk5e17Ju7vehx5px54BTUogxDm6c32MGer2hGjswNT9xPTf2JYF8zxtSoPKNvW3dsGu5",
  "key26": "2jubJm4SkvH2eVPTnKteC7qs7NN3Yqne8oZWsutNnwhzH4jZmLoxpANUQATsCkPJNQ1HE3hGb3xTShKJR5hNk5Hd",
  "key27": "4qHppa4wcmDQjkWrZkkEdwXjQx2WGwxVaxxvqGGZefdAYKZe1B2T5RAFw7H7WxUs3AB12cDpubbLhTh5yFTL8Uoc",
  "key28": "3htrHs62DDi3PDZU5YpkfBKeMW1ubv3z9pvGPkuC482h4ry19AAoqCs2bJWSTkGwAHh33FJzRzJvBkjiXSPf8G4b",
  "key29": "7ehZ8kpCHKNNBrrMcQHGaBTX7Bt7itoGaLCyVKg1pRqKPNyXsD2symXccfPhgREfN31fhB9jAVxy4atWdTjnFur",
  "key30": "4b3DToGgTT6bFhRjvKp1d7HcpZYGmpjaQrFuyHC9hZvKM7Z4cKrUtn2Ccj3udeD14QvWFzCnUaQdamacuEYEb4Yr"
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
