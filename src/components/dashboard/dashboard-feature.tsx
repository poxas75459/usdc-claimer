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
    "RfvjjiaLkrkWehAeQ8mHSH9nU52zgjnw2yN4Ri8feZCF5GSL6XsX3eZWEcNbUHYKZ496Cq5iwQjnhytkRZzXuGT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m9QuJbiKNyqa3sgaTE4doKqbeCtwDTR4Lqgm3We58k3aZBLvwsJgUVyYM8u6JkENKxNSU3UaMZiGYixvwtm3c9q",
  "key1": "mmruuTXG4wJUz1xoqMcthx1UXz9XkVSztEPWUX1P4ASZQZHaJRCY3CvN5CQQoGmrRGnbrXNPSgoV3z5smBAi5uk",
  "key2": "3nwJrDDwzPQDBfH5nAh72KQk68srNKJhxdfxWo5dAnqQgtZqv7XBzTcraosk2fsMR38NYhYaUY1FDWfeUHHVSBRH",
  "key3": "7YH1xmgyJjeHtyuUYnHvn9Si2JTiwTH1phBj99vaVnZWQzmLBV1hMNVajNmYF3q8zUDtAUWpBwrpmQYjo51QwW1",
  "key4": "4Y7kWxaDFnyDBmLndLfYJtrBpZnWWjXDeFqHnADhRdueRjhjoeFM5FbZgL4nubUvP2brPFM63kcsw8wnKQodDQcg",
  "key5": "2tgBku3CpLrBEknJyNVasXxe17SnnuRDVsqiG7NqLvxZuA4hdF6EZtqYrqRSsvahJTfjuWfZ5gr7sBzn1SDmhpLe",
  "key6": "7t9VQYeKMoR4tKmyXz1mxzVwRHM6UFs795AD6WcjesGAQbUMGoRBPJKghAr96LWqGdHG5ax8KEtj8okcdUG2qKR",
  "key7": "33fJDCkrfd6kx6YDV1gWSeLY5qo1c9a1tswfEWzvxZ8pmnQ8buZWn71cKKwBgd8aShC1aA7sMuRwQLCcRuwYmRRf",
  "key8": "2md9QGb8sEFJ2DrenmgfzQGJrKaKKZzTaUNQxaxK8cqLiteSJ45YbBzZ9qoBxmL6NyNozMjdwZ6MTVkKbbejhDdn",
  "key9": "21zWi8LeBGXVRo2t89Fs5SSHnxWxhKgFK782PbqCCR61r9cHNJbo2hVutq4GGcunkNs4XZCFNjjCY8XUoNCu18KS",
  "key10": "39aYSCXxm93a3JgMHQZNa8KGU5yvSsirSN4bqPbJpc7QGUci8jrCp3KSsnqvxxKuuSJ4jUEPBriFNo5uJnW7XHKJ",
  "key11": "51kfTrT1sWxz6B1AfBhEetTtSn9Ffj3MVuCJivGLHK4T2eK37RJyScf7YQMpwDqeqUM9X3zsKMsyjsDThyyMPo8K",
  "key12": "5u9LEeQfbrxbhB5EirB4jYHyxHZMeptKAUNnZ14fkJJrXEcCtEneWv78F9RwXXsRxANJnQwDApw3wGwauUrARgdK",
  "key13": "2JUHHzQiQ9RsT2DNo8WSzN1Proz8LuFtNt2BQPMUt65jeiW7DjPoiooT8zbpceW46H5A83d5d1ZMXDqmAPpdvEGa",
  "key14": "28M4tSz1G9BTvd7Ta11EvHUyCnw86HXbLVLsqfFxQkYi8AYsss64gPyGFxu1ifcnLeTtMrxtkPHGRECazjGxam3R",
  "key15": "4jgaLvVQsv2dwTEb3hyHjsGrDXrFTwQ9yrvzyF4sxEEN5n1LTuMjnwpGkZc45Fujzinnc1MLtn9jjcpZde6NQwco",
  "key16": "4Z1GjuDWoX9VV8FzhBx7vs7MhDy9T3bNvKMUPZiuVen2qArSN29mZd359No6ZN3nkVoVZ1pX6ijpxG4KK623qEVb",
  "key17": "5hNqRAYrKDoNo9GhPnSsV3nkbfvcEzSzVcLfgVcP21ZxngTNNu7ib1JUQsEtCkNzPKHmmb4QB8Kt3Lwv7pSJxH27",
  "key18": "5NXcY6TbxNzhmkTHqabZYMY2PDgtuZmauWBKzUkUBBbQJGvhAGxxCi1McLuBoyBQwW1XWxqknKasVC83J6BBXRNV",
  "key19": "5hDx796i7dp9QjLwKNS16ePMXi2HTJnQ8WXwovGs5Qvc4QwQQAqpCicnPi5mA7k6p4Eqf7yYUTfqxYWgPfMeGHcs",
  "key20": "49uWLXscDTkWU4LfCpiTXfdcD5LoNhantDPzf6BGELH3oDtyH2jzFCEPmo8kmoDormYE6gvZCRMrdn5vMjT6KBqw",
  "key21": "3ErhQ3e2SiRH3zt9J12s3oh6dYvM5r3LYRTZZQ9676ksNhPD2uP6VGntvfcSs3Xz7tqFr3EdamMBo3mrCS5JVrUk",
  "key22": "2zyA2iiuyYCKgUx9NrcnvmrHbeXnbubehNXbEAsjZChMFrt7Jk123ZDk1skFDwHhuidnMFHFDpVKmq4EDtRdgbgF",
  "key23": "ANkFLPSwKP2zWKvsFTJyAafVzMUN5CUwaB7AvSwPh4cZBQdaUEKEzzX1zKpshrgwV2j7E2zk1n3byckD5833MKy",
  "key24": "5V3mxehi5jFgT29uf9iUastzr7nkMdDsVcxe17foyMY7fUsMXYwxdP6HLj3hCUELNM7ApcPo5A4gEefk7FrdpXNB",
  "key25": "41aNNv3nEYPZjpkJEjrhLgs22qEzXXF2cbMyceKWx7thevmyqFbfq1qhxp2sfkeabDEQ9wQiMB49rcjvbrAUDWmd",
  "key26": "tFm22gFoH32ivEp7jbsLeiZiDGLYjvPvjmaauzB8wJ7ufLxB9FBwxpUjRaocAvsTJbPGGTgGjqsUkno3o87LDY9",
  "key27": "44DW1sLVfPQmKZTPgHrQoGY5i2uo8g9vFVRTB5Ko478ztinE3u2mxTpfcszrZnjDQYZ85dMCgcrWBGZtDka9NcXi",
  "key28": "3wXERzNrmLMfi3PDmSjuNBz3WRUQAE85Pni1DhvE4Q74wAp4SoLBNo8Z9qgMDNbaCuGmAy4TBard9CHeachnstnf",
  "key29": "5AYGxUPAz5LirfmYVfmeXQQJ2eyVndEsgYR8bpPEZLpvHKdBmJtk95SZCMV64T7zTpkYGXMGXG6x11qx96rvNzFH",
  "key30": "5FYDiMXTk2dF5muVvw45ijPmky4aVETw9cY6o8hevmcM57xfGQZ9sKmS5kLtMhAHdeY6UTgGL4cGzVYu6bCwHw18",
  "key31": "2t7zJuLS8UixGsrAmbhWba1idYZxdFLTncVc1gntTXvQNqXdZwXoVbaBVGg5U5dhhBjq7LYGgVVh3fvssa7HHpMQ",
  "key32": "2tmFyBVmG34hUZA2xB8FjjNNoFUN4iatFKoQCLZ6h2KuoJMqsqBw63kG5BkKVHQgaxgkzEwxrDGvS4jikkjDC5ps",
  "key33": "3W8bdf8Bn6p8t3bcnDXfp1dGeYidtG1Q1r6BnuQpPaKt91w1kyBeyQQpAiv7MSu44wpSMbHMjRVQ6u8cyLjuHJSL",
  "key34": "4w7roioTyvedWb3m2rBvstqjW8Hzw24vEzPfANjtqDASQX3tGUE9AtrKU1bZKnWpr95Ut82RpaKwfktXm5xG2uXi",
  "key35": "hyHa3qRGrndPFeVXkzHip5G7VSTn5TEeeKdWradA9zE7ntSnm93bfZkPRTmCXrn44omx4cqhza7PnqsaBSnF5Au",
  "key36": "TK7xbTLtLQoZXSy5rguiqoDZnNat2Gekkxk2CesDrFENQHkmzq3WtHepzHU16Eq7LUuGMCua9KPoyNbSu4gsqJ9",
  "key37": "Um56c6pJF29XguNMxWJpFfjxzSSgS9waLTav3iNWs8a17gmmFq3ZfEjqaz6UGJmQMeKNYd2KRWuoMsJiTJz1eC3"
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
