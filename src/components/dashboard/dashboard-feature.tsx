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
    "66JbT5vQehqLJHHChthAgj1oDvt4WLJHaE3auMnkDqy12DrryfcDFM9hTYdsLGcYPB53iFsBaJrE8uxPL9Dtzd4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pRz3k1rojaEWV8Wd2gt3kzGTFzWVwjR2eD9ixymkKP1iho12xXqy7M9NDZcptth9VqHht5LKGokhRgDCwMqpLK4",
  "key1": "2SxRNU9Rfmfkg6iEzm53Vo4fe5GX6NGhJjUpT7HJwsUXbFpY1WYXHvsoUXk6R92DFJzrZTzmWxvMcnYmYMSwaJG5",
  "key2": "2UmEUQWaCcT3gbCtHfvr6t95hVpq9LwC3Ft1RdF4c4gkmg8Ghz6o5J4eP9gqwkcQ8upVQ5GhKmLHxc8QGE8qbrFY",
  "key3": "2fxNp144zDbDGUBRXy61VkY18n3ZkH6EQ2QvmL4rchE482ZifDpSTtjM4wF8VA2AFKbUCzDT8n6BXhWUK2r2mWhq",
  "key4": "3qeZ9WG2X1Ukb6U3CyTRq1qivyC8PUL8k6fzEQCM2nNGu3X27YVJ6uhCESzj19dnDiauR3MWTfz19zrfKX4uZZMc",
  "key5": "GVyRgUGdwrU6skVspNbHMmEZKeUBngZWpJuSBSSrnMqtfggzGwycHP85ebih9FM5CCH1YSoPPbvfXkvPWg1BjFg",
  "key6": "5DhJ8hiY9BkMJ1qq3GaAifA5tGTvKCPhdyPqo7uNE6UdE2JSfUrTm4RZV6Nrz6DsxKjLh9ir3q5DSfBEx4VfZ3F3",
  "key7": "4YSfRPdR8NEuRi6LVT9ssiKRJFL1qEzcb8KAkmhbEC1nsgxGDXtKTrKeFRuboX7HV46CtNVxC7uwqKnp2rTx53e8",
  "key8": "64gx1nL7NdHXG1SWLTwUmhaFYLwTnmVdoeDcC7y2vf9e13P8t73wwz2NPSWkRivZcgKtkpyR16yQgnYAGemCgZBQ",
  "key9": "2z3ra4qGS1f8uMKtTBNoAUhpapi8xSytGiCxsKqq1MFnNG85rN65bWU8VspsRiLQ4Wu6euEsGboRfddo5GEigss6",
  "key10": "3wVHNFCfKjbUX56MKpXzhqqUdeZAwLaPpYMTwgki7oDM8bgqyasc3zpK2iGbgA1tYyLKGKXf5834MnNaWxe7SQYm",
  "key11": "3bj1TTRRFVYJt4DXohsoEoELZYhYwNtVpVjLRMZ14h7C39c7XvXSBEEcsq7DgjDzFmy4dmwYuJX1md9fzpaSTZ6h",
  "key12": "4zKpuhzxMvxBWJ3hkvYxNF8eU3unfmLeovsvP9oC6g4mgoMR1NM7kCjndCSobySMEjY8osc1jrMAtyhbfPjLZvHG",
  "key13": "aNhtLQPVYY15V32Mh3td8AqJfPvFY8gfNxsZViAasKEXWxd5aNymKKoLsBQ3H7e4TUtcB9fxN6UbhB4GA9taoTi",
  "key14": "2RHNpa27yDgUVWFMWyvW2JkFok8wpdtBuXYruEj2sztNUnouiqCB6kfvgB7SnyUYntxzYS2NNZGHyJngGmv8nfTP",
  "key15": "5waBPBFBLzhrj6YS599HywMSuze6qaKAeW9iQC6mAnD2B4EheQiVM4RTW4NWNW21mKeahbxTbHfjnoZswhNK7xep",
  "key16": "3VJNNS8JzvRqY2idqdZbkt53RFE3EZbxGEFfwspNbGfe1pHY7xhzeu51s63Ku6Dc6RNSDMckxftCCYgJueHnAXvV",
  "key17": "3Wq1PT37bxqVQcdNwfgaZyuzWt6WhdmhZDtPLRt6fuKQ4dXfM9MEuh3dxHL3yqPEJmW1MRSBdm7odfNxpP79RHjS",
  "key18": "5nwcUs5FGBf7Z1JZTEh6jpCZK6SKdjQdmZGBSi6RBqGmzJCSV1ei2S2BSuqhxQ9M6qXCBRdbeHfte6G45LBfkyFj",
  "key19": "2z3SQEvBz18zjXUYf9PB4P1drjdKjJG3cCsXA4TS1mY6HJws5p5SRinZGeD1GjrM5bWZgmVFeZy27SksZpbS28f",
  "key20": "jogCKwEZBuULUaumovPntUrfkqryuB1pmmrMDX2BcvsEKnbFUyTyZneL3HCjXKQKKq4SMxG4MXNptMHRjPbrWD2",
  "key21": "2VC35mNhV4o4G7ZdjZ4nEpUaeJsREj71xQtkNf2jHy8W2BBUJvbSA754ZGeZzZ5aPMvusqubJyxbKhscM7MAgehG",
  "key22": "2kmC3niyfWtiAk1v7hZBawNx68t5yMLNqfLGHpPxMfDtokhPpA4QZWV318tEd4cv3CD6CYRaBqme59TBmyK2oWbd",
  "key23": "2JVLT7UWSdZaAv2MJv6uoGnCniuL9R5UYaCmjU4TetzqyXaB7THMznADVRHdnFtevsk8gZMqh21tzaSE7L4xyAud",
  "key24": "3ym5dswq7cbxGpJauFuU4WN8DyKPYTjajcrF8bwjkQxJ8wXpXmNHXUJ4U25QxEcZAzE5DDRWPQN8rF2XeoSCt5fY",
  "key25": "25PSDnVzADXv9y7ksDnCCNqP3FLuudsQredgT9S3ahsorBfbvPzHt5DuCrwaRk78ELei5dpmPh2bwyW5eVaLGYPk",
  "key26": "63fq2oCF5VoMrbqGFWDnQBGzQi5vDCvpcsvgf4g1QnuCGyeiHHF6RyjbhB25Eiqead6weTmfmuxJv2xsZuggvt6V",
  "key27": "5HWBHWVYcKNE1c2sz2szcCk7u864QgAjZnxDjJPJVBr6bnnUBGmcvk5zAyw4ZHPdSNDSHXYAmeKpqaqyHbmaricm",
  "key28": "3G2V7wdC62g6vvbSG2XSReBYtSisMarYvrW9gMN22ee6fMhfEw9kT88eLDeqJ4HCF7TkzfgL8FEtiX7ZCjXvNFjz",
  "key29": "UTRvsoq9zEX3nUSKKPzSbvgMVP5cdGxvnF7EfmcqB2EnQWpQusTBjkHiJB6rdWBR3NmK6HCY3J2W1kieTZNAxpa",
  "key30": "3a6FYWFrnJZpZG59tseJiM7rJPkzTo9nqUbSoizXFio1vGRFTCDLMZYgE9aeG1AMW5ef9uroWpx3EHwoiLEFU8nx",
  "key31": "5NaS8FMgTxnrqzVKDCDtjo6ro11oC2ZtYM3zV77bejn4zvor8ngzdhifQeDerkdwoz93GMtKxk2RrnGFQ3eMeVD8",
  "key32": "gQtUX6T1Vs8fexoVKajoemEd4zXne4239J3nPVsvAFETj9GdrG59P95Dmn1Ydh6XEMnxEF8qXHyv9ToKP4n156W",
  "key33": "3gL4ra6kCUEg3awQxKPUgofdx4qALy9BVVxAYFMYd2yhPiUZXdpwtrGsGY8v6muEmyTZ5v7iVLLWfQs73mTNY968",
  "key34": "5JY4FnYnPnUPZ7FyP7ZVEYAtBsYNqfvqutsqHsyH6vcDqPWxkXbSpyi82B52mJ24WSKkWPQ1eBvgKZgBfRAeLDXt",
  "key35": "5TqhideeSjm3NYYvotk4hHFKeACVBsCFXMBPLVQYg6VSEKBStLB6HRs7MttawyEEnz7kMALrDz5xb3zW3tcHbzUg",
  "key36": "3yNSUFfvickeATok7UzW6zPxb8keZpA1XxTkzVToBuTrm6cfnXY1AXZeUX6f3Fs58ArW3RbQEpNJ682Wu7wmwb9W"
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
