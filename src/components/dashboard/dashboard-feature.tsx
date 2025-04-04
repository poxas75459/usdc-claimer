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
    "53kwPipfExBJXMgYEC56wYuketjJ6ZtygS2yS3p6AaeHaXSdQBH5ouCWmYX2VABnpSyhowHP6dafE5x9X1S2Rv53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9P9iNWkxaz5WnDY59VkayCF3cdr9tVgxLjvPXHVfNqY6z88aGsiEEtNyjtLApzke5BVrxxGA5HHKth62XHv38BB",
  "key1": "65HhqEG1YerH8bRgCNduBHFPNHyN7sTXgukPNU8Zvv8UeJKtzn4skpbigGUKzPfaKfJVZ5Pz3s2T5fc5Ai32iDdo",
  "key2": "capGx9jjWyTheZzbEJVPc4hNJCFihKVbCNXwbhvEBFsvebCWnBvh4RBx1f7JbvPzBgCTphoR1CFYvNrxfd6ygfQ",
  "key3": "47vYUhgRiUf7pt1dpgJcWS8UhMKU7iV69pjN6XQqvnwX3Ag1sKquLT41q3SqT6raFGsuBwpRmc8hEWh6FUrDceNd",
  "key4": "5bTARKogEiZdSd4D5j2BX1V6iHU112jD4RbaBDPa6j9gZ6UJYFAdbQe8wZbwKp4FQeNjjdUwR6wZFzkn88vqrWak",
  "key5": "5Nqxm14W8WAmSpjKQgqWuzrvwzD9CVVbBw4AK2kTm2fm6uNdQrhC3yRMX5v6ZiJK3PKKazLVJT8RxqHcSnNhbaJe",
  "key6": "2yda3EhKBLrPxTepc8iD2FaNcbMCtjrGb7GpBGFDvo6CkKQazrCo3CoFgNznUJE5gaZpFsEro2r3EjRJjZLDjKNh",
  "key7": "2ijL3EfPMXjg4fZKFyzaQ4yUk7NBESzgZTK1Zn64ukj9bZdJ12Cpk7WXZRH6Qngv7jE7Poc9mQzKrbuWapSwYxHb",
  "key8": "3718RJqo36cYjM4CUHEr6LRttTQcspeg5qjKr4Go81jWbvHXoDeVr4jkGZP16Gs6BzHbnsTAfT8z6pCf7ZmSeNFU",
  "key9": "Gt37xJoRtRd6gakZorCthDBqg9ph5zgn7aMu9zN4dJHy6a489ZfPwUA6EcBocU1xtFndChsDmWCGzmKGabkVCsH",
  "key10": "5ETCtCPmd7xpKnZE5HAAmjs1XHXzzJeqxpfQVCa19VE2e26Ljgvi9DoTzmeqD4ELKZesW4AMRuVXkq3RtVKbhFYB",
  "key11": "5xn5Jn1zXnv93g89zZRGabf9xz9VxdMVcgduJ4k4vwZXBHG3egvJGkKcyRKrLVSWCREku3TLEypTzMeUCiWRU1Nz",
  "key12": "4gW6WUsaKfN7udJQG3uudmY21mQtGAUCRe9XAnTDRmpwNTHE6TPG7v7jWS3Qc7Yx1kaXGtd9qWYw76QZG5JMzBPF",
  "key13": "376AEY2ZXWxpfPA1aqVf3nmMtdB1zX9yq4cWuQBSYooVJLMTKWsfxn91jCJu5aAZtzcnvYkCdzEYDy74At6fiNtM",
  "key14": "43b4HTDXpgWvvXzMZ8s2zNBudMU9D1iJcHGERnnR2oVCQEQ4h9ev7xyv4PeUpQbYzy3YX8dpSzs3peZsPJg4eKDx",
  "key15": "2GHtgEAB66rfc2nTueCEQencaCzbeoHeNhtXaxFPsrHfjPBrW1tfxmFHz9T46g4UfYRVPd88jewN6HAKggxPFLdn",
  "key16": "2dvqp7hHPHmYTejeq8ytpvhkkai4GV7wc84qP5BhsVH5G1Q43w24xhsy9SZ9UnqC8in9h6RNtVrdqnQui3FffPZ1",
  "key17": "2y2i9CuhVDU9JgBWWMm7SjbuL8RTeW3NVBam66avvM5igudJPxRAcy92UVA9TTKtdjFmVHibt5N15Lhbr2Umkx58",
  "key18": "4TAJtp4E7BDircyzJuiciXfgoGAbDCrnWJtbJJtZcpxbdPPTKvy5eXGcp5TsYSjoRmf3Jnk6Nno3uGfP3DbPNXkm",
  "key19": "4z7obAoPTt4ATWHxKNyJMwDFPrxis7ZeEeKqzE4TkoSLE3UKFHTusEDf9dx7PKZgD5b8dGbuLjPs2AxZe8TEkRrA",
  "key20": "5wZAwV6H2XwCBZvLHetzBqPg3y95t4jG8UenN4CuHHdV4g3rKJUCHGVkX8vyHUk7csRqGoF964213Qi3V99R49Ym",
  "key21": "4Qg3Wiq2niuhXfiHuTUQgABf3tw5DEjVekxD8qUYFQFKYBTF2napFkbx8cnKhvnhaujFkqo5Gz4rL1yCkZXTu2m5",
  "key22": "3vDHrGjjG73S9zF4ekcJs82FFXT38263AEeKxKb4NteZ4RdL5kc1NU1nqSu9dexGkWo6jQvWnUWMPTT7XoonqiUX",
  "key23": "4ByTkiFfAEyQTbTsoUwHaZy86p3x9kn9oN114L8c5S8W3uBiatD42j3K3E3JKfcbMyCtjZmfGtBYHtAfYpVoU2Mq",
  "key24": "47ozxhcDyBvhzRvUFXnG5MTUSu2mMndbkEAWm2aoEqgtwGohLVHqdutszAbFAHGFqHemMqAekGXdNHhyq4yCvWA6",
  "key25": "4vSg1EwXgbL3vcKvkhGX5AVDWQXqJdccJWw5yCnRSUKqygXW3y14YK8xMgSmHooUkSpiqMs7FHixxB47aXCMq4ac",
  "key26": "4xs8UCMNGbEt294eByCoc4fK2qDo5GM7goaTzKnCNcouNJhPHLQbVXVKZBEpbpaxvCZYbUTUjibAuHUwskoakNp",
  "key27": "5MPsXwHf21AwQtdFfjMqozKYBUhRAqnh2CDbqVt1QMvsowgL2aVCir9AdsdY6RZggpE7bNRNHbomr8GoXRdhYZyE",
  "key28": "44q7pfycJBp2NoU7nx7cv2oT6UL7JRU28xRLbY4GEAuCGAjKsXCtecvfFirrorvUQCWS7BawQpCVhS4vWz6pzvAk",
  "key29": "2ZMRYDeN8BndssF3yude6tCozwaZZfvn7S1x27fYSo5isTxk2zpQdQUuwsWhU3XqsvnExYhNqjbqAk62VmKqfNUG",
  "key30": "36w8shuN6KEswF7c4uvJ7W5d6fgy9ZF211kZfpyfNVQ5LRHt6YupEAoHRA6nEBU2oXzM1jvCmkrWRZyTmUVoCjqa",
  "key31": "53fLAYUKggXMcrESVtXjRa6jnaD1NEkS9S6vqPKLz3bmCUC5SxTVwmWDaWJJrYkQkU6e9oSH7FEbQLcy89C6Eacp",
  "key32": "2yff8o5p2x1gArCXhnBC6UUrK6Tjd8APfB5T7tZ1FZyJ7zwTQd7umcfVatxHXbgVA2KFcSR1KNEGfR82BhtRyfhR",
  "key33": "38Nw8HqE9pXVuBQtjLZGAEeeASjrbrZ7dnNJbRiX6kfYMbGqvAp9R6ENgg76h2XVpZAfepjsecVHtR9nvQdqGmZw",
  "key34": "cNapXdxkA9snLGw5eKHPZL2ZUxwTMDcGE9gAVtsSHXr2w5WcrdpDDq4p8u9rG8jvmQQqetGaFmjMNwnST2VVGHW",
  "key35": "3xpAFEQuTixR967tJ9cym553BgbzJzeqSDeVYdwT8YSzPfam4mhiVYdkZAekLhwFmKPYB5HS1KPz1FBnbL2LZkZ2",
  "key36": "3pxRWuBjBfoMxyJhDF8dNcJRGJcTU76gvXd84s33JenQMAaDgDmFxkT7AwCH69HnWPQvQEUo817V3qarYS1C8DqR",
  "key37": "5mNEGfWH9AvrxKK2vZMwS3mjrCdqA5m471myGUX7PDCvyeSqZgc1dzBkJhVXJjhxzFJHu6Jj7pSzG7D6uJkAxGCJ",
  "key38": "4Xw8RqbZwvThP4cpBvRnugd8bNfhKEYAafYkHChRX3tQc9w9aUKpQjdKzPu7oSTMrW1aaPaXNiaJ5JTU5jFNhd5V",
  "key39": "gb6bVoTrXdb696CTjxPi93914PJ3WpJHUHUw4JVyWh5eiSrB2oYHeoYo8WG7kxGbtZo6wMqwi754ky2iML2wf4f",
  "key40": "51fe2EaNvcDnriJENDLmUJtQPVUuH3TW8aSRg6cbyKQ8wXc5kK3apcdNDyhjCFu2MSfyn7LpdgBZeeaMQMYi4Uy1",
  "key41": "2zsywgUj3r7RD7NXJyoQygyVDTu111JUaYzt5LE4J6bFMEEbohwrttCk2F3g8ER8cKVrg18mHanPZiL2jsuJKWPb",
  "key42": "4AA6fNFkgrgm8u73M2T7jtijSmHVmtzyBwJLnDRJAgFDNUnbQoNCufAxfqVPRwAveHGJARanZXMCN9qLqH62JuNk",
  "key43": "4WAJXybawgR4QcanCT4LzkhXJpQSsfMPuoim2FemRFPNtXdtqkwM2zBjyZ1KKPedosUpNm3rj3sWisLic3qisZBS",
  "key44": "4XhcGJxHZoao4bsxdzCzHp6jGT1xAvXc4XSHnvNQpLxMGvnY6cpcyEEyrtmX2BwfWZuLurjiSejrCMUu8eVbuGtf",
  "key45": "C44V6GvMuaBLoaBfyyHL5LkHDYtKngq4iPyvXaZhH4GhHqn6MeZRu7zBTpZZrXgHyyMBFLHio7ErdYzq6ftPLai"
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
