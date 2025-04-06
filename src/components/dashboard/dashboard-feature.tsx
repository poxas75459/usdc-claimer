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
    "2b5GBBYJhqw5A78ma3xAZVPwbJpezaRyHxnH7CSKHsa3yHBXinphzBKCxYs5Lc5ic64qYkNMBLgaXiiW69P5U9nU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZyAZ9PvTDnYCmhQB1F4FZAH5otpJ2G9fHBH4Menddncoy8AVH4X7BeGoAW8iYdEFAkJiLEowM7WgVREQvET3QJ6",
  "key1": "ZJodarUGSphwPwKxD6CzRQrCFE4FCxhy6VR7UcuCnfZxPdjgAc7EJb1AZmFYacEuNnfBkD1nK4ku23crLPct6Q4",
  "key2": "62EZxaQFHmmJqyoNVxK8hXL69RTD6g9iVg5LqRrKGTcJx21wgg7VUjRiZiJKUF1zhGFtrEtZQaDqwoLk8qXwuZCS",
  "key3": "4YaawQTub81FvPAZb5cnxfJiTFzBUTSJbDHYjc566mFmLEs9weU1pnnKHZGuFQmsdha68x1JNbEMQS11C8MXz9B2",
  "key4": "45TY1uPXGjEXHUqhPZPsvCGtsen1dvTnpmgvw71sFhMScPi2rAmTLy2Jddy685mxpvUpS5Fa7hZw8pyP2yTyE6Mu",
  "key5": "4CJKmrrJgH5zifL729kG9YcCKSKTg7Qqd6FWDpukFE1NoWvuE5VvB3AyL5DGg2TyNjeiWJiY4oB9nmda5Ls5Yn9L",
  "key6": "2hBtqrioM9wPJGkitMBEku3i2AnMKhPSDJPQcyi29gJMxgag6yGMqXJzpDwViRREBjvJM5jYwM4zcRWTuFgDZgFn",
  "key7": "3S3wgc8noCbVwAg3SD2hG1PkapgYGcr2h1WYfBddfK1oaMWPTeKDFCnmH52pp7EgBEKMpQeiEEPeF6427fXNmZyw",
  "key8": "3HoahGw5hnwt3kt6KHnTdp5Xr2pQrYNbR49cykADgpiBsPgi23HpZMH2Skx2HCfBHsjAKmqFM9fhuyJCHRHqShT9",
  "key9": "2jvaKUJqDfYEAexnYg6Zk4dAQ9vcrRXSBxLebmQUF9Grn1soPr946tGsSNJ3kpgRfNojmHGjkV3TQmKRmms315DU",
  "key10": "NgZ9pfwFm5PcuPy3UVooAnQLnmqdzbncgsBB33YQwU9QoG5RtYAkYN1WEBcXE4Yj5uuXKG7nxCzmT773yzFAQ1V",
  "key11": "5KGZqeMnyw7jtxCusLB3YyEvoLZQk73mvxfGA2oT8K9VRb7HkCjZX7ZhXMQdgQW3vSF2eScRSwd39tiUVwYEr8XK",
  "key12": "5HMkSXfDLMfK7GH8VxuRHGSBSkfsUSoc3i5Pw3UjghmzAnXKrxYpDhBFXk7kPDqnV8ppokCUqho3JSfeSFt2oWVC",
  "key13": "NB2kdhqikTN8WJhGpk3Rbhg3cYgyXYpJ9jBqA1h9khibQpEb6zfodLPGxkJVpCtsZ3dY2p66LXFkXWnmTqUe9Ki",
  "key14": "4gq7pqKCaSU3J7uFB3BDG46rRCGCiSZP7RETgHSASDXGiCpAHvNkikSALvWaWpf9HGRxCd1ZV3FaTMJknUQay2sU",
  "key15": "5RAVubK5tACSwCbVBQNyq5tFRJGkwd6geGjHLnZnbNidxbwshaiqS92TjQqD5Zo9hKSL5a6ZcKmN5aecfk22UWXa",
  "key16": "4iGvW5TQXzzykUgufix83hFVFtZakaf3Fj37reLaQXVB66hTVxTDWaDCt8BXxCXVoHpfhVGbKb9adYKJwutYjRmn",
  "key17": "56moU971F64zKUYWJhiWTSymSUtz6hf5ttHc8XbccT4Df2W2T5u6NeHvrLfdiCL32y6ovULRnUhjxJN3wxgeQ5aW",
  "key18": "3YX9B1Hp992ZCj9gFxcyxXuqS57ZJ5HGx7ew18tEsue6x1pYSXR31QgZYcp2cdafPpk3t6y8dCmP4mVfcbZjy7uy",
  "key19": "4GeS27VjPoAVwGGA1mGnJQKnvq1TarJsqWYFhH8mgzzYmQaaYJnY3bba8p535FeECHNPRuPv7yP3xXtvmDXY9BHs",
  "key20": "2iwnaLLMgz9GeMPq4MkpDrnFXDiNb71Q64K2umYrTmBnxSvJyosq6ywb6iCmQP1wxTtnFpY5ivpgYXRVS6Qffk1x",
  "key21": "2A8TMQW1grRpA2xr4oQbpDykPHAEtmkUAsGKphddw42iT9bJTYBiN9Et1keYccKwt4bCqoQXffyNZnes9uXwT3d8",
  "key22": "Yb6iFKngsWjq38dhvVb1aSMTjwGom8u61GiMKTRCmQVhaBY91T8Z8wbQ6eyH322yLSH6xqJcmJ1GuSdVzhk4xzg",
  "key23": "4bD9uPJszyRbks3NBMNYkCCbvLVdgbtFYZkoMWae3EfUGF8VEiX9ofdJf5TbX78Wkm9yukV5ZZRcJzFyGpH2cCtV",
  "key24": "3Dt3BGQi5agQ1yu4bsqFFxfz5z3DxGwn8SRUH6bqJFReo2Q7ATUF66KFW11wdRP3E4M6k3GuzxjXxsCvvYFjF7bK",
  "key25": "4VEdQ3Q4qhyrYoFEejvBfTo1wNaqHdj4i8PEwDTanqvcKvEqJFKrohCpdRyiXeEW73M1PeFPv9wkG4zjLzirKWs",
  "key26": "UdEjkxd4z6izJnE2b5JSF8g3ZbQZpFk42sbaiAmvCxy3Dc4pjQapVJVzsTxQFHKt5MJwsyJMfsbM9Mp1qMcARdd",
  "key27": "HifahgD8MNUBDE4yHSGaF41WgWCBJGLzHHfcZb1jkAcipYZC3ybKE91pKrr522BaTb3RVdDEcAfqw9UjhYUcNu3",
  "key28": "1bESnMLYoFmmJ7KX9sQ5PsAxDb74jFRhpDYJk79iFUjvH1DGqgZydtFYFHUVoJSSEcmN1T4oSfLWqBnAXvpFvKX",
  "key29": "4W4Nr7Heno4REA3Xan8gNzq88Ewy7pCaWM9oK5FGhCR8mswQ44pB6FQYK74afF5haK4xWYhyYd4xqXeHAMWR5znM",
  "key30": "VfEicAJKkaJSG1HgG92Qt6Vn5dw2qq8BrgTtyYXqJsa7U3rVMyKFww4bSko9i1Xa9eD5iXxDYAqmTFpiiYm7dhu",
  "key31": "4QkXnoPdXEfxpZxWwpmKMkE1rFb7omiABSF5B5FyY8tfJf58VMxmEcYHUCwkKrw3VqbVzytiwWNP5a6eW1SU739n",
  "key32": "2fKx817FYrhuQKVq42BGQSTRHJuptfCPpqeDJVL1NG3uZYfgSPQGQKZzvMDdw3KyE4btg4eaXq8Ri8m7G4qf2AQA",
  "key33": "34KgJu4t7J65ungMaq76UYQw9epheEooPNYoaNNsjaV3JNKpGE3TFYovV2ryoNJ52fZyYWNiJy6rvRhheATdtZTG",
  "key34": "5uUU3Rx22bBgbbsrEZNZSZm8FKY5WvRvZVnQAiViCNkJhsi7MLUovuH3mnMg9MdCzLUQgQmyvRP9KsEGEzo2yGa1",
  "key35": "Emz4qgUANADaP7ZXGo59bn5BiV9M7zj1W7pt6TC3exbBBPeSN6gw9UNevzJL4EmKHFdzCe41P9RPqZ6q1sJA3Td",
  "key36": "5VEko9kg6nuSvcZRUX5N4B85qVvsAU2H5bNokjxGKQX1qAWTo5s2GJFh8jE973TooCMYL6biEUVY5Ar3kiGjfvvh",
  "key37": "26uYhnuXNrjdutzg9sw7S46mb14oMft7wivdir7Wo1cUWZjRW1oWoAgXjddXH4ZZZYKKch3fccgZwzouP85Ftxpu",
  "key38": "5A64bCkfe5urkJbSjH5jEGPAvKVS6BN4ChZJRKoD1oq1ESiVgKsn9UgKsrX5ZHDkSiuQoESHuUYGskMWVb6w5NQ5"
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
