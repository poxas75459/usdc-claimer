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
    "2j6i9VwB4xcgFoqi6kNTz7koWS2mJNJvJ7vj5uwxkJYLE3LV3Ahy73JYHFXxti3hZ79fEfadQM5XZtdow3Kc43uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4M527fia4QD1pLuVvWnT9dgC61X8V1od8ibxkvyRMRdzo5rVmDSiqAdwnjW8bkxUZbmYWEi2ed1KdBGuwz9jkMNw",
  "key1": "2dgbzPbv4z7P9yu7hUjjM7rDBf2uxKNV1ACmDeoKuets1ij4PMiJJCpDPdHcjPqxgtWNSNrbNHhLEMDnVARYuXRn",
  "key2": "4QW5ZGMFVPsn1PwMDBbm8inKPvH6zkktWK5Kop8Vrbew9VjnNd8Z81Enz3xH38wWFkNVcbHBX81w3jMgGt74HhNk",
  "key3": "5MT2UAEFH49M81XMJFt5UkWWrM64qqzNvav4bPod8cJ7V74bU6t23o6WfKn4tm7KYXBMW9h47r8aWWL9eFGAQcPQ",
  "key4": "5W7AZFVTkvGFKhhdxVQaUi9NXSJVRfsf4kNv5Hr65DbnsiKZjdkQHci359TZpqXRRVXGQk14sR9Ya72zW59b8FCN",
  "key5": "5Ue33r7GhvXhJzAsGURtdVHE9arqyTur2FNKQAQBdCPikV5CComNMP9VsArTCZ2jnmxRD4wvo9kwz74o1yRhkEDg",
  "key6": "fF3CmCR6WoKBAcGhQ3p53sxHiTY7VbQoF5gAthvmNvV2h5rAsrUjh5VmNEKb24GpKRgFEqXgESdejTV3k2AK8Gp",
  "key7": "sVzxvr7Tzv4kz9r7FCUistBbQwBQiHnhaEQ9j3w3fNvZ9ANMzntSK9kMLm9n5zbLNMBZAfTSEqWUqLiEsV949Ka",
  "key8": "3gTvmLTZPuYmXUcQr23e6pH7KR3SwrEELjTJBjdMW6NexvV3ukHdLMrYRy4Ao2aES22nPw8YKLfq5u7if8p1QN6x",
  "key9": "hTYVKXofLthrYJLeS5wBnjZ8PKynGfWDU1sPTJt7A6vyg1oaVeGKhCvNzWn9tcnuoTy7sdiQnP5F91TQqtXnmkk",
  "key10": "2rXZ9enfDLAzhDF5B4oJfufj41fV4rmnE5ZNZBZYNYAD1i2akHQt4r29BBFFRfvC8mLfgUCcVbuj8TST8sWufAC1",
  "key11": "58EDAXSGMRkVXuBJAxz3eUmsC1wEkr5vFwzasfUtyaCZNhXP9TBNwYbAmQFsQCkndJJW9Mi1Vd2EyyN8Djo1aC8f",
  "key12": "4rnBsYE3e1XuZtAFq22egrEfgay9YmSgFAzQ4fjaoQK3M96dUPHbLA8XXcL5qLvxu5wrzssPKgC5UVzVgF1cbcsm",
  "key13": "4NRhpGDnbL3hQG4hJuiR4MR3PUa17BLTQ9gTP1KEEomHyPcJwwRf7Zw1YQvdDJUYxU1SMG69izgyN1A6moJYjWwF",
  "key14": "4fPDUBBsY1wrM6frry81ajJs1QRsyBfA948sq4vggS8ea9nFoTajnQDfHCh5MyG3nSDmVk3kN233aquvrQc6ZfCa",
  "key15": "2hgzpDEGs9WJp9fwSzYzkhjb87Nd1eDPA7hfvkd1iTKzDocmpvheVka13CA63DvTGaVFQnhAuactMCV5VNS2jchh",
  "key16": "4rQ96SkcmeShCYUfaiuxdK5vNCfp9BXvXBwzRQ4b39gXn7avqyNuphj7UG6E7jG4X3KPTL6unKs7zf473mdxXd76",
  "key17": "3wh5xWK3RvMENY97H7wTWW6GNrtr5zboMZhYxq7Lo6CueoNcmqLVksvJchvKhDC6mR3xYE97SBacBij7fhgE4jUH",
  "key18": "58kE7sZNRWfwECc8kyLfyNXq8eT2W4geC35Za2q8HHano6iCw8c9yuTGQWWJndCRhbN6aVBzRsnPMbeccF98MS7f",
  "key19": "4b46fzcXtAd6KMku6jKAaSas7vNepViq2TzTLCdXuJiBAbtC1PBqXVZZhzvw76T3iurvJ3BE91B2RS7qhMypmkC2",
  "key20": "2QQT3di8H6bXyjFgKTGfKWxVK2DCDMUvVtYFHjbKa2XkM2PU7Jx9SqCGCWQDb4S4pFg4syTtdUSQPNuujip6MYGX",
  "key21": "2hVj9M8fGqW7j15RSUgGqxaGHenXHWtpKMJc8FgvA7HR7MVEmhYYhom2YZ1ctn7h5UMtFUJRVSZ8UVWVn9qZjdnE",
  "key22": "WqtdzJgfYnkwV2ABUSssGASEWA7uiqfrSs8TrnweRCy8SDDPedFUeXcPQzbGjzRHqUM8L1eevSsmdsP4uKqTjvB",
  "key23": "3zU9ykswgEqFytuhiv5h2LphWtRdu8fr5ZEEMew2gdtHuJFHYE1SAHbqr7NZAdcvGE9BC89P51MTpG8ugBk7L93Q",
  "key24": "5nkMqTExioGaFTszpQzTiBE7SuxhhdtbigzMNoURUtAWrzWZTBAdunmnS2b5yRZianjX6AKLTjR63VBTA5XjkHcs",
  "key25": "4nG7rmc4mqoE5A2Ma3vEUMLDrscww2t9AWF7zd2PgN58ebyTdFYhktgNziq8skGmKpn57CPACaU3Np8NAKjxNUcs",
  "key26": "4EXh7t4Pr5XwDhVaJZphWaB77DCaA6XgSBAFu8N5SJa78FQGCAP98HDJSD7eum6isaS9RJpKhJN9n7ouHusbPrS7",
  "key27": "3v8zJvTDH3AsxSBu8rZJktFKY19ZCKBZBCALwd8BoF1pyMhgpoP2StwJyDfo9Ask9idBocmuCcMMwNptXgb8phJ",
  "key28": "2gMxbDKnj2RowutHjgBQgbMEaieHne2LhG75sTCefof1bAPNCK2uf9p7GLfu91yvaGJxNRvyqKkxGe6nt5WWmeZt"
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
