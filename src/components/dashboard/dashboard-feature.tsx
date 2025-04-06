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
    "4pZgpzJ1UhVGnhhkKSfhc4BxESP3C3fB4r7MFjEME5EEUc8mze5dm8KZZXfNvy2qSd2v8jbLDwg4bUKLdCCqPuLE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DHFqogPTTqQs9isZjmXPF9RQFqbaiMrLTb53y5RUnvQqqCfMaJG9etJRPA62QhMNjQVNJ4dHaL1Z7MYvi3Pdz1w",
  "key1": "3eocnKcQjQbPQwfeVnw9gbp3aLCpCJ1ymNL7ZxJZgfeurJgf4p7Uo6pzmsT1jUsJF7V5QKnEce8kKjEspWadzLYd",
  "key2": "m4rN41PqS2JRRMMhLnFdUKQBG5DjXSXmzGUbjgY6ngrWiknFPJa7njkWi2XiNUyeCrX8FZfocxGrbEWVHJizY21",
  "key3": "2CvaT7kv5pjYJsVG9puJ6qv9RKqvWY7EHr5NeHTaNSX5f8hxMSCd9JesndXpi84W525wnonD2PLAqUfwLuz76Rys",
  "key4": "3dTm5t1LC4sftFf9n2KDMoh7uqPYHuFp7jSCpYdFidEKD47nMAfPirKKmVvVKrxkbyNtspKHc4ox25RY21obRnxC",
  "key5": "28Zp5bdgRzv2qeYjwQuTho6od4J5zi4NEqA4ciTSizZfUWHBxySMexgTQPoMk8avLJdfzFAB8oEanJr8kfjhkwTX",
  "key6": "645iD1VJqcHAi2F2f3ggn4G9vHc2EH9h4GodASwokav2WRW7BL42e3xiLjYgs7vR8XbvC6ewJe4qNXqpN7qhdX6B",
  "key7": "gz9xmXFYYkkKij8MdW1wSqK1jdaPg78688Vbj6J2VHgeKnbWEVg6BQJFBEyf8pXN7n8kRmjecPX4xer42A9517L",
  "key8": "2BnX3ggRU2T6EnPCqKzbcgsoZzFQpoKYUYu2TFHHe6BLWteZi7D6nU4sdsKHw3p96tDD3fbn8JvWmuW8MnQMuo9c",
  "key9": "4BMueuU7JBSX8jqNuQwrJGBzZwMFm2jKJZ3xvMwx4Chun4x8SZNmJUoWdpgoCzsoUKFLHtwHXQiYxL6CvAAKEE8",
  "key10": "29Hq5w7k15ToyJHgt6LurgAGpPqQ59sYyjdMUzerrxXjcqavzEjmREwhpt9pE6gpqB4xWyDDZX8a1xn9h6JrwPMM",
  "key11": "5MnyKBfFE5xuo1atfJ3n2v524hhTK2MAknt6LBCwsBG8EJDesPm6WCh1njNVbkhhdDQcBUSrXNTSsRvJu4bnKkoj",
  "key12": "5oWTbTbeXmY1XiVQdD5UVwEoG4PENQT3riLC6j7Jbjk4vsWKev3RGk64EA875irzXv7KmoQc4R9PGb53HdqG8Wz5",
  "key13": "2QgjgmG9jPAaXJrXLUCvDVo92VN7ix1Wn1jgWBu2MhwRu7pJvDcMicfZVrZpaiowZQRerZcG8NaJjMapf7iJ6Uig",
  "key14": "4XuBnWPDhqs5JmJsZGaWPUEjMCzf4kSTKDMrog2zYnP15AzVodGX2MNfpKkT7LRSNLQxrTzAiEDPj8Vw9SuyCvvY",
  "key15": "65gf6Z9rGnFph8ZcCQp3NUT2g7LG7PqmTpa3jaudPicrmXukdjiNgzaSDAvD1BqbHvPuKHU8LqEKVSyYZF6MVyva",
  "key16": "2D6JttNLeCU6nsJLSkPE5jPN2qJeDQvBcVfjPzxNsnFHna6g1HkDJG5DN1VERxaWVwchY1WELYms7eX2rQpj8835",
  "key17": "5bd5pJbj4kQSr538mYRo2LqhUctbaZKdsR7dPGHHcnkr7HimfcrfM5ojYkaS4r1uNeCuJVMfza32kcZhQaoMoWea",
  "key18": "3nyZEh23Tk9e53cUndjtiAW328t5i7as3ci6uJaEAstN81ZqpiV9GtmzK5cekkXVBt4rAR1pcCXmwM2PoH2qQFbt",
  "key19": "1UxaP1jR4XdJ17ck7ZtbHhBxj16pTnRhk9ZBC5hmZwGXvcXmgyK6jGb5u2xLCfFbW3dXb1kZqBF5KRXQ2EdDvM2",
  "key20": "5CRj8bzAUz56WKxy75FtAovKjzQ36Uig7b9LSLDPcB82JmxQ6en2n9N6u7pBRyhaH8srLita6sHkCatLHfoCWn9b",
  "key21": "5znDazVY5gvX2Zj8aPq9MrnSztcunRJKuBYEZHeCct1aGrVUoRMXZQESdD4KUjApriAqv1iurn7np96PPk3PSASv",
  "key22": "2MN2bYaxdmQsSEm9yuamdK5JadnpiGQEb8Ek1A6VkKVfhA2pZkyzfsF5ZZX65EiGAZPZ2JnhbDdCU9whUpDGh2q1",
  "key23": "2keryBq91kQuDKhqV3JCTZPk92YyMiCwnKsM8bjznnKwL8tPG5fx3B2GQNRB51JFL4UCB4ixQp2W82sD6zzVB5Nz",
  "key24": "3g5o2WatakLXEiKN1hDWVaeqHKj2VPeG5BcUZC4oyDysYykobSAbWTfD8Tp3DXiV7kePQT8sQpHVeW1ojYo1jfza",
  "key25": "3vgYFUjhdxry589dAzC7tE7QtVUykp5Y59eVonDvrHfwMp1FaP79CYjoin2aP46UhqhTxoqF7u6rJtu7ZYRoED2L",
  "key26": "9Xr8R5K63gtYNb2ARa6sEGcgbiNhYd7JQa68fHXddLFNXpdeAGAQ9UXgbwUeFz4mGqYjHrmWdcecp3R3WRrsvHc",
  "key27": "5xEFDnDQGheRSnoUcwpTe1xSyakPP62DSD498q3nFvx6LEzLML643jJvwaZg97os2BM4nUkEPMfWgoM5u7FT4wA7",
  "key28": "3vPmTR2F1WJ3NbcqECUSxxNXQjhioKH6PDaxkwMjQcCZLLKY6fj5XmcUNjHPLpdqPtzsjNAzyFJfJyXAWwjZey1f",
  "key29": "4wYtdRhfY8kNNyNheftkFBQTGkTU2AFvA8Apr2oxcezKjJBEbunkGa6PPrt8ACg8N9sE3NtXUtER9B9qRaduPzU6",
  "key30": "5MdbYL6Hb4UTecHXRJ6CBEaPuRCU2Wb25uZQtAXYAL4FCKvCZCyGux4mZxBhdFQjt6ecFE4Qye92U6KAuWj5w674",
  "key31": "63gvPrYSPbrBCsxtyMRLzBxMLJtAjNCU9UUPNwGeiA1itHvACqZ4GBNqFJcVe7jNatR5gSYv5rNtVJxkqbDFbzPw",
  "key32": "3KyLS6KAJqcwoM1rtXTemocT7kjUCoW8eWxZWd6dRNs4rrmV2ZMcM3FvirNUFcStSWqus2Qc7AsMALnxBrFrBg8a",
  "key33": "5WU48QhyJuokSXYEmeonuoZ8Mrnigk1e3M47jZzV8qcAHXSsPGKZyPoJCTzhznwQTDMAdjfRjBk4q7ePSz6WuCPz",
  "key34": "3aZnWvczPXEq91XnK97LrpjTsQE6FUiRL8dqHqRYYT5bZbmNJbzrEtNdeexW5soyoAswGqqamBPVfHZYzY9DzKpc",
  "key35": "63P1m8v9r2VsT4wWRvPpL7Qv9hBRyQ5oRyvEFDbNzjJcX5VSvoWC8vhzKtoBtxWLK2gjYypsXVDF8TwS3TWy8oDJ",
  "key36": "3WtQBfYyV9xdVtNda4KbMeX51ijArB7wq9pj8PyVj3x4hT4suTBQ9yqXLKH6esBm6oVyDpyLsG28c5iQEFLuQ2fR",
  "key37": "3yihs7c9Z7ydQkpfJwWGRKR4pV4UcNnyqu5iKtFxHP5i2da29zrdQ6qsZMzoY4fWaVVhDKxyYcHMhWRC1MRnPV8H",
  "key38": "5zwsv8fUYPbkc1QNdizbtcMQWjx5JPHQRd88z1MKfkBQNbrHv1wgzU7r2vL4LhuTjd9nwxHLNHJYgjiHDcq3mBBd",
  "key39": "4reXXZ9tF2o9HUKKVvMdRh5WFqK2sR7Xmji9t1hfRVucgyawbS3QME4FXzdaCTWKzoznteJGGiWH3z4rxyQ9nb85",
  "key40": "4Uv8L59296DGgx8CWCg9GHvjnkh3s57Xh4JTTtToJaL1uZCfNGoA6W1VQfCTBTnZXudC6PDxXqUEbectQU6JHmkr",
  "key41": "2VUWQqSMUSFJFTTqr9UNDHEKKp5nfVQvFtga2L6LCrAHVN9dme4KVo3y3H52sZuRQ5vZnFi8rFuheY8VGBUBuqkf",
  "key42": "4UjF1EaPM5YNcq8QTf78WoJBYkThnr23UkQCE2B57D4kXPR7Eb6jFL8v9Bdk9qZY46CKHbAvEJdoU415ahkN7dVG",
  "key43": "5pnpsVv4MVy9F4erQGvgGAMJ6uebPkLbkVekC5CcQwZs5p3Rd4KyjyRvmcvi7dndt6LvC7QnVRg8DfVs89HxWnaN",
  "key44": "3iVgBXk8Fe2xZboBuqHWmxdKGwWYvM3P877r1VC71ij5iv1zGwjy5dqqWFpSg4aZ4hUbRyShKUmkJKPaNBJioVJC",
  "key45": "35pEpVP8yY4raMj4EuFLW6FQp1d9Be3V8wgRWRD9uiYRxmEqxUvzobMtfcPDfMRiKLVD2VkXzBZt6P1vRcUmPCoK"
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
