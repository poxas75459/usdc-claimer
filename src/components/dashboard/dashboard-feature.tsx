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
    "4dYW2tW9gegXq4SnKXqxzaTG3jx1Z7LP2MgMj7PpBc9uiYr1Ze2rJgGHuBMMiNQLqji9RJz8K2j94HfPN4ATUGzN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZESQJiC25Xkp4mbxpU5Z1ebR6tSadip8MfrNyjkgKNUykjqJTDM8Cto85TEk9o2oRDbUmGst9p77EPPXMabXxVv",
  "key1": "4HxvPxhahgFfKxrHUqYQEay7MtnXqNdwqcwtcd3Qv12bALWTDPLBmK61ZdJKGXwXa9BLa2wTwkoyCfjd4PeBaT5P",
  "key2": "3xoZ5Nj3NxRzAcrHQ7gK2meyywdQntJRA6AC2GgeaYVU2jxRiX6GSukXoMaBnz26vG6uipAs6LiGRcCfTMGF6R5k",
  "key3": "3XqqM6FHxADakP3QXHBqmrviWGDPvDcFux7Gma854Y9EVF7ooQCAwvmBHfqtkvXhFUoGai3SUQsxMAj9QS1e2taY",
  "key4": "2yuA7y2TE8NvxBSwRRwxhr88uZGBR7rExxtugGTPHViSBifs8S2C5F9Eg2yK3rqgNbvUFSfU53PXZ9fVrcsXcTno",
  "key5": "2z13aM8SiA6Pp7tLpozNe8nyi6gkZuFkb9DDNhsiQ5JGNG1rbMrEB5TMByc8MTJPZ3TsACAApkYaXQuLyUoJxhVh",
  "key6": "4gbiRomrYqwZ18xGZTkpKFXBDtjKtSyPJvzzf18KpJ3yazeAsQq9LUeiCRTiEyduD8gXFceq9AnLH6dPUHUE7J4D",
  "key7": "NfiFoQg9jDhCAdRp7CfW9gpbjvtfzoAS8Kw1kHbVbtd6vZtrD9GzoE4WH69jnCBBgiyJwSrvd2aGqkzCF8pwcPM",
  "key8": "66z7uog1rtYonGLL9CHGT2Fi4DUc9JwshYkSp3NzmMoi1qJPGWGXFQmFH78s7sYuxsPKpiqZjsayxYJfKJBCTMmm",
  "key9": "3ZpuakjdLPZWGDa66k7tFuwNBEc6ypiyHT9hJke2o7UDy7HnMnHPWXufkMfWLxzkMEDWHLMybpUqetYYzL1yFZz9",
  "key10": "5gs6ijSJZxDrLGEumuLBzX1y2scpgm9hrCcqJPTiu2EQnHepCR8Z6jNQtKyxJmKeaSaf8kBsZgFMMM8Cb1FMVGZn",
  "key11": "4TnnD7bTvZkXfyYJoA6B6AjYUSiwbRUjB6P6h3gC3Uc92magvHr83oexkrNSZxZ9qBVn87erDYti3XccBkW7qmAi",
  "key12": "2kFGmumwUMwk4yQJuvoGAnVo9LCommTGzt4twt7zKLhudQGvuGR1YgC6YKv78FwedwVCShPyeiWkumzQgFvW8Jep",
  "key13": "36NVx9woWyUU4GPpsywaPC4Jc9iq1jKXAJ31sJ2Nk4ZNFdq5cLD8Zkc8s3VKsmXEQkAZnoogf6jdfx3m7vZ2b2Jo",
  "key14": "3fyqfkJ7zWZumWKnVPzQZ72d5gMCa1t3WXfjzxroCfHJzbmdxYHBwCQ5BU6u6v3NFEJuxCwCmVLUeCZewenoD2Dk",
  "key15": "49u6dhWWpeNwoSvSD8jVkU4neFcBaV5tKY3FDtjrqnbrZ3QBH7M84nc5bMrUEfNcRGgXrJ9gCSJGdC9TjLiHh28s",
  "key16": "bibGuocWicAujRbR9sf5BEXBAgHDfjAYbc3WcRbTA7ndvWi48eEYSK5qZZJdhnCVLoLHbTGTuVPkJExVJGjsu3E",
  "key17": "ab7eUu7pxdZyDpoxPY1SA1XfrrTSWHAY4Fd54qsnxZih9J6KfSv2xGAiuJ8RVZwvGo3JR1qpWM3ayiPcrGX1ynZ",
  "key18": "2WQanLyDaghvyjnvhRcwqShRqQ4Q7MSUTSmcoP4Nj9wA46FBvgidwcy3jnq7CcLDEEFbgPyBBbrzXmSsfq4egocy",
  "key19": "5JJLZUpb6CMwbj1qepFDjBrtrHWTadQSsGbBggkpfGxpZzxGpHRF9gx6EAYuC7sPVe4Q8oCmbxTBDhCsyfsU92K6",
  "key20": "3jLUXUYXE9rcRqgSz9YJapnyaK68oRQByajLjqztVB9wJM4h36RhU8QVZzdHssaBARjo4HSJeSTR2E8bTNBYDLD8",
  "key21": "9VNpShnSb1fYcD2DH1nc6ApALbpvp8Q5fEsuv2UBRDFigaVRvtkFBVuCx9BfvrjctBi1nhgJxSkGwqhNBj3Usf3",
  "key22": "5dcXMKYaCSMYvWa6tg7U7DYxqRjZr5ycoMSkzx6pAS22fAjbPDuEMdu792bmC4kiqS6Ptt8ZPjYf6CewBvVWgS5Y",
  "key23": "5ZBWTf9dSBFupKb8VTPwk1gPRru4ep9tpuZGXYkXiGwJ4JDisdm9CLBZZKrVnHKLQXVZckYyshdoR9sSiFjAJPks",
  "key24": "2pcsCpo71FQGkaxKgepyyHY4GoqJFYKFz6AvpxYYitZdDpgq1BjQr8VQ23e3Xf34iSfWK2C4vffiaTAs2bPB9rze",
  "key25": "2TFQiQxgD4dcR5NxwNDnGnUEmpGKCwWvMy4wDA93XvDN2yCMmaUqkjF7oWNxnAHJLjN3EqtFMWuHS9iwbqMdFUKZ",
  "key26": "2Vyqx3BfH7uXXJYknmBtr1rp7sdzwMdYYcxPgtSB2ZxjJxSgjmGaFwQ2jJ83SDiCEeiyUzbRm22gF63LrETEzPm6",
  "key27": "66Z53MXDSwv75oKMmnQXZ7LPH6LT7Qe7APdn5fwF8hha6mRbsQMfR2GsBwfqj2bDaV7kdsCxshD5iUxp7kq3eBf6",
  "key28": "5jdhyaD38geQqgof21ygeNWqZrJByqc9J6Lbgq7oJW56HW64K2GPbCLzJ6myc8CtGkCtzwRJp7pCnJLisjQkHCPn",
  "key29": "2FkZejTtoLr79ffyDZJZabNyQgrpB64xpnjqHqJpwUAXX1UUfnP6c7PwZMsznArDakg3bZGeYK1EM8qxpoZo2unx",
  "key30": "CA28XnGcqSq1VYZ4M5K8yWeriNwjxtMgTfH3qLad9tnpAhCMMiGKmbvy36VepCcWjfYxZC6Cd7989u5J1MK6vqd",
  "key31": "4zbfUYKUiT8BeKd5RuQxgS8rg9g8YRiLcdXo7rSe9X4cwhLSwW8hbU9uBKcaXkDn3ouDBCwdqeREeV7v4vmo2T1x",
  "key32": "3WPFrSRtZqbFPNxfng8ybmnMcV7oZqZHNzdLJzxM4NmavU62W5UVCitaotXvMa2fGpPGbmYzsaYmRnFjNddjHPcN",
  "key33": "fhvJGFzc8RiooSEd5vYHJXEEJWv49MEW4iHN1QFTo7psAcpA8yBwUmtYqyhpuhhtUPKogqmSqR835nrNz9deU6t",
  "key34": "2kMk2i5vxeFoZAD74cvgA6nYV42NSGHGPhVCkKJNaW6DVGyxxfJTzo8H2K2i72KGVTpRadRJmFusZr116WtkG3JA",
  "key35": "51d5jMnSJqa4nqpFZvWd3bDfSVj9PQi6253RCDesBwqGjh7sx4Dd83QfE8bMSAAjcEvjqo3JCqEbeZo25HAoug6N",
  "key36": "5K3wRjoRnWeB47kbsNp1jMLejksgvuGMVvoKZWoiburuH2m4kSdmYDL72Ue39ve75QhXqGmuQigeDYFX7G2AGpfB",
  "key37": "3NCRotkERfU3uHXBoghxJgKoy2yXXyKi1RdSVXPWiZV27K9jVYqxfFt9JugCxh5aZ7FMoRLtYi4ZEPWjeLiMrcRp",
  "key38": "2NMx3rZsVB59dtJegqs9y34UYqrdg3R4BJzXcxV1vC7N3XwAaYm6SQM5MTdq8t8GPauYBwSHnt6qMCiKAaTAjPCb",
  "key39": "3aAkDeHFyQtzzGgQU55KsgKVwjZJfTjjfbR3SmmFd4njXjT39uhJPV3K3ctdGkd2jDuAEwzj5WpcMGfypRqvK4PW",
  "key40": "r2d16oZdamzgeHDXfDc3qUSNZszDKXn4waeGtuBupwnBQwWNVwaoEAMxgMxo4dnXbmRLmAAtGQzWzLuNcY6j3aa",
  "key41": "2pgGWs1nNx3hjtX4Zw2eV82rhnD9ak7zjXVUy7wj1SDKZ9UzyDbCBoFcqeMqSwXDrXBK88h8u5Ya1ZHkY7igBe3q",
  "key42": "3WeMfAZN9UGjA2MoSisNAgu5VfKBp8RcEqXhxhJupgTTzpuMDJQsJoUAZaXhtnrx1sbSEeDDEFvXatAMjXiAVMQ5",
  "key43": "2QzUy9LTXce911BAPzxifh4n9sZc1XpjHtxqWatYbUs7keJeT12rMgJq6MWMTcDgXCx5nFnJubTw8qEWJcePMv9X",
  "key44": "4fF5Z87Z7Yk5to8otuR5bYwcQMwk1vtGRUfrEykpmNdyKqrg2Q13qHYPMXbbj1CXSbNWj1B6QGAjSXpPCpKR58HU",
  "key45": "5MDAZ8Ksn9zLFjLvd9qr4bEda28Cm4RW1K4fPAezqGuYHHK6A3TchfcohqGjKQ7QnbDToFNMiaQRvteMxEFmgbGg",
  "key46": "5kDjTpT4QTVqCK8VE5m5VMezsiCJmrQdB6pk9bghjQKZPLYXSqeJsSdo4k3tPWBCNGQ4uRA6vBAAkWNnF37nem2G",
  "key47": "3qC3HzUF1ueLJHNyfnmJpu5S34EVPkshtPfqZY16zNDiaBvsVMUc5Dnfrt5eDPJhdktjakNttqC457518reYw2RS"
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
