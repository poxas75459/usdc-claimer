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
    "2QQW3fp2eY9C1SDvHefpSELpSPE7oQ4Hcbirc8U94VxpvSUzaQXQ4rev9KjGuuqmP7bPXHiEYL3zttLtzsMtrNHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eWkcPR2sLBpV4xRVY9sibX6CmQXHgquRw7i3ChKtruhrULfGEK9AvqJELVe1gHZ5ZW9tcNAQWRLrPfMDjVHTKSP",
  "key1": "6dyyEXGVSX5p3qDccLGKuEeGceNpyVEDwxwvv8rhHwUThZD5TH1DHjP978kUmStjK2vX5Pe8Vp4f7KyrnLDLmVN",
  "key2": "ja3sAPhwJsfuZP5HXxNj2GqohYw6H9Eiza7YchaSh75AsLXFpxBkZxTzYmvApb2sujzkXwbPQR8V64LDtQRdXmP",
  "key3": "5anebxVkMXswA6yVYHr3FipsKSLHKYJuLsjvxqXVMPD19pyu9yp4cSmHAJSkFSKGB1fQMA9Q6CLskNV33hyVEeHf",
  "key4": "5SW7684vFxhgrteB7mfcwQ2HC2F3C48YA5e39CyuvnttBraUoijXwfsVvqJNgefZh6u7Eo9VywkXiYansiuYtMZb",
  "key5": "2pNfNhEBiFS2TrDHvBXa3EySjAPB8h2cnsBctRWJ2hUrSzFPCimHFrqs1rjBH8qCxg5WDKus6FJcqXjt8dsaNu7h",
  "key6": "5eNpjysEvVhw41YnHdpDgLXoD8AKTQRmUCWXbxoSPXi3k1nBYCJ1GTVb7fsBuP8GZbMohxQMeYFpfYXAQSog1S3c",
  "key7": "2RD2ovXXab3ctidBfj7su3CHstjdx78Uf3K45gXgbh2akeiNC3Gnn91mCSmQoDiHh8oZ2SgjKhLQ7T3KLjkWA3e",
  "key8": "4F4CihrJz6zSD7XAxaVP2E6hkWGFWMbGbaYckaALD4qHs7U7i7HhsHjjscG2JetURgK2VjEWCe6dWmcPEWdk4oU9",
  "key9": "5SZEeSvd3epv9GV74NX4AFJCiwZ3XALqaXYJJQRhphhAjjXqbvzQyYabyRXYM9qTobZo9Fj6cfwBP4huwSNwB1q4",
  "key10": "4KaAK9tSqCeAiVKUd1Pho7RwjinALLBBZBHrM48ZVRzn9vdjRrB25jYvh8M7txJkpUJba1mpib3Hphj3n6Xp2JU",
  "key11": "3JbmG1U2yU3ECBGZoCruzp6oQMHDXXm6E78mkafgrf982zCaTMgJqxSCBUxnkDpxJw1nKYuuxeiiXxKfy5ZimdyN",
  "key12": "4xY4sJmEjQJChm3dfUaMKz9dkyCvCTYCqCZ8JrYz3LtbHZU2ub9u9eRn9cJheYbkqvkXnBYJdcQLmDEfrYFFnjWB",
  "key13": "4qTuRJnTX8qJdNNt8micjYG8BXDSDyVsNkHYe3NqAjafZQbBqXpXBCbQjeAPSFXybkjPUDNrrFXYG26tejZvZDtv",
  "key14": "4uHSaKwzQFwPN2pS67CiXhzKBgmVgbmm3fzoa6TYdAvmZ2eKeiDwwFxQBxhpdaDThMHgu9WsP8TeU9TaPeekzuvo",
  "key15": "5cgWzvbZXNyUBjoFQWLpnBpFy1FdRDzo7tWizw8U7jWAokS2cLwEQHNUvaij2QUe4mx78unFXT9MFFbMXNAzdU9c",
  "key16": "5F6F41KnbJD6tw1reQJZNpyYmcifLMWQku1yV9d4UBgqFGvzJRCyyRA8B1kYTb27knXg95AYqqawtWJS9dbhxnYe",
  "key17": "34zemRkQKki7QTNzdzCkaiR3eu4LSbRcyKY3vfdkoUXSKPBwAdpnNTqCZbM1jD8L2Wmn6SCxjVBuFL6GF9qAHyfn",
  "key18": "48TiLsW9mK6mHrMvjosyTbxwoZyrnYyNhHj9q4BYjC1H2ovHn6RZTaLu61Tev4qKhYpHEoace9Bm1Lv5EDvepz5o",
  "key19": "2LuHVpuVYYtzYPcuRAG3VreHntB49WbbzAzoC95dEjzFBarYbGuLpb1ZwRqS2Y59QLdcPfnRjwUBQKWgBdBa5H3e",
  "key20": "43bnkoWtT2snbuLiYWf75JxwKDidvp6c9JG2br8RnnaiAUVpWcpP8777xpnzgBuSSKAACmK86tXQF4u7D1EcuRWi",
  "key21": "553MMoy98hHXHFbPAjfmW6J5iRMFpn5yig48CSzGTW38hXMTRF4oK2SrmrjTv4zVpKjy5CakoQZzyE92wMidUhBB",
  "key22": "2Ke2tLz5mEATyjpC2iY4eDxkpsR4JkWrTSrAqcSjcdEF3vPpfvXrNqg4iV4Ap4UuCfAggjLYoEt4hNnxVkNAegxD",
  "key23": "1MFR6RNenMCksXSrfrfR3VqwVC4QK8Zk1szDJqJovYnqGiAPNN4wkUeDY4Np8BxZRDzfZeiNBpnuSLayc3we9Zh",
  "key24": "5EgNCjPkVvcBL6wo4N3jBJXsaNp3LxqvyR3RZDs9JwnaA8ME2gLkbhrW6Ur543y1PaBigPS3WdcxXzdZhRBihd9X",
  "key25": "4BbH6Cfxzfatx1fkwGGTi4dAcNMrhUQ41Qff3jETukHUhtvMqXihUfmkRVcpDTCsVcUdTerbV1UU4i1pmnqeNBez",
  "key26": "3WHSSrV2RCw3q9EAqeGv15GP8mctB48TrqGD5ZWidX6nw5J6eGD3v87qBa38z6KzvDXx9CiKF1ryi7Z3ujekrcr3",
  "key27": "3Ncnnc6MTvBJ7MBTeCZNpvwpMxAYGDbDUDPaDFRj861xM3BvSXn2x31FDvWqYtUR11M3S9mTkytkbNd4a2oXM3rX",
  "key28": "5zf46cdwSmNFuEcAS7GcGBnr3tBbAFTBoqoBy9iX68udAiYMwjJBQYsPq8rLppwDWeoLH8S8h92t5EmgjAodpH8g",
  "key29": "3t6Z3czxzWmkLRbcCKgJubuKTj2jCwHZhX13NdF2vGgeoNN9CJ5r2wUv3BoPBCDGgHSGcutPnEN3gUwJBKVArYQJ",
  "key30": "55naMxDsQeZqhQttZsqHXZXdQh3T3SqBENvza7e3GbihEigkV2gNkWoewTPD4jkxsXLMnxD3kPpkhBmSx1DqBWAz",
  "key31": "227X66R1UoA66pkdhdVjqV6Wsk8jhTAYaZZGBhCXTexp5U3nnyT41vjyNyWAvXhRWoTPK6ZkV2NKmBvTcL8rAfkM",
  "key32": "3p7aEbm5DPkP8yswJPQmuy87aXf3cvs6vqJ55eTfH3BXn35LkvWZr6yi9jmuSfdPp8X6uMmyoyipUv3sBYVhtncN",
  "key33": "23wTox8YnXqDUTFLSsfUwygLgjWRRByYNdQ8Z95hoczPfJRZuBUJGJQKLfk7i4AsMyXJagVNobjGorW1YVuH1Gy3",
  "key34": "3PZa1T5BKhirDAGEsNEoNzvrmfejRWpGUuJQMyi3Ei8NtC5Hvghtae7QXk86qf3W9GWVksGHUuRuG5H2cbUyq9H3"
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
