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
    "44542hfk74QAatnxTfkCxNhaWVNLtYsryLYxrbnsoDqgGhEzEdgjL9iANteip81mgNs8L2SbChkW791Fz16aTH3z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39jSiZ1MPdeTfA5esM9iRZihADfTMhgf583xLe5Fzwn6LWKu9mozSybdEKZYmbgXcpCmz79TwWqbRZCz4VKUaXCN",
  "key1": "kT5KNrZH8ByFkfFEro2B8Utqfkbi9HdAhy3KnyfuEFwS8kYzpmZuvrJ2rJG1rQtg16jwWmkfBBpgrffV6QqCXFw",
  "key2": "2nyzdV2H7rh3aBEkUC7WSTecGJm2PpKdn6ir9sL5Doj2PFEHxUzXxbWHpjfQqFfTHrJn3YzKAGvRqNZ6cxNVKoBP",
  "key3": "1Y9DEmdnpb64AwiuySkg1nd2AZMbsKJcB4FGhoRsWpodoUrbrrs4HXi1zW9Jesi4SEd47M5GdGU9mTrhBcAvUiQ",
  "key4": "3FWHLk1SZJjZEKkJzUzxkG4oYN1zznxxjdv9UBz2tWhv9mhkk6JpftkKzLqYKRYChxqw9Fqxy4piVqwkUq2sFtkc",
  "key5": "3kGoom4BUwTt86GeqSsVgfcBzZHH5MNinK9Bn7T4yyB3ZupZjt1YDEapjcEs3axsdsdermBdxqRchB8SjoNTHNg4",
  "key6": "2ZXk4c7NS3cQHnZawA7MBSh9hFcBbhxXnPjWsvDYvbDPcsc4fvH7XHThy8qz55UtdHqMSiVjzFdEKB5YPNB5bU3p",
  "key7": "326frpduqCbJ3CBVvpoGBEkQYFzDFbedJBRAQc9PKZVkE3iYedEXAeMHPEsbaQNyFoCf8rACNcFD4AjDN4tpx1nn",
  "key8": "4T3qymq2zfCZYntWrZSGKP1kHjrAUhYacyN4pFxpb9AtuFzo2Sxp5yxUYa5MRxFiKZG34KZtCrUwBZMZEaLdiK5K",
  "key9": "39ubs3BwFFRFSdqWmtGALw38cH7R5ttbxWnBEzEeiHc6yHCqnNs88hcpVi8XpCGAHhn9iG7J2ovkrdSNTnZeS9xL",
  "key10": "2MXwdX9BRobNDB2FZxzytgN4A5EK92GAgZJxX4mQmKnGwmR1GP7fVoNRZR6h9HUMTGeopMTeTZV5nbkDybn7HSou",
  "key11": "5Rp8j7u7RQvH1e7Hq1P68pWuZUpvFSQqrZj17TJv6JyWjnxPCnkamZfiXK4rdQKjtweJArqSrwzcZSufSjYimp6k",
  "key12": "3uSc57ahKEC99tw2be5WQtHnA6h7ni9Z3GyyUURJgZpt93sBFvuJxQJUGtsKv7hGh1XAL8xGJzhu92GbYwBxK4mM",
  "key13": "wzQBtLzBMJZG8V37iZHKRyXudFP5JzcLp1e5LFYW7duKCgTPDa5ijeuq7UzfDEnUzGpNjgSB3qK3Th5bv1vtdMd",
  "key14": "3STDcAbH6Noam3T2JzNH56xAMfzmPAUm4kfcngh9zRuVwxfKExi9rW7LrAzAayk64Jdaebq1mykuxNgECXTfe6SC",
  "key15": "629dvmd5XvnRZr19Td8thmSUP66sr9DNhCv1khNLJJxBKy9EshX1PTxTjt1ajSmPoJSNmzJ5ZaifJ1X1NpugRw2F",
  "key16": "3fnLHdh1mnHYdbnna43QkyTQpPhJn6YuL3rNazekf6Sf9qnuqL6Mm4Ed4B4LAQ9iWhnEFk61syFv86ABXqSbwnsx",
  "key17": "62HZJarQowjqjTiAE5wHeEueea1fhphsAZBvzqNkYaoU5EkGiCWRKDKaPCKBLoUA9isR8BMeqEnfA9AbpA7gZPzg",
  "key18": "21YKZ8Xm9yQAcmqR32tg1LCa1Dm4QkkmBcwrUMRtAy7w93LMtpkkYWiuc7z1iEExv5xgC6DkRvndsEgi6B5eVAmW",
  "key19": "FQEKLdnfgxjZdVikcdnep3LRrT56MKUAvtx5ErNavj7vQpHE4JDjnhjJv7hzyt9jsoajZVt4dZPtYwvFEKjg3Ft",
  "key20": "bayKo27iW5s7QTvUdJ74Hw5ZKsnuDnf9VqTrXHBEPhkbcjhGCzu19ebyakGMz3Qvf3vQxCEMPUAt3cLkQKXqpyX",
  "key21": "2PWdzqiqnpfEAVZcFfcDGQk5rjW6Fcwb6JyqqeNtnnDuBN5bk8bavSDyrg6qHNxB8rr5YgjseHhux3wCQx2rEUTj",
  "key22": "2qDvzrLk6jzK1PL4ETmK7ZVwpVwunYQne6NvbPjUhQNm1zHyKJ7N6XGP2Xvr4WevKp9UdMMYyN3nZxKGxV3ux1WT",
  "key23": "4ht6GjUN7K718hGsnCwGHN9whgv463C3c3ww7eX7J78p6B2C6Br5udRSqFwP7k6CuzpyHX1qwXnbYAgeTjJqWFt",
  "key24": "5fbCc9ywUQ4JxLhpzWTvzAkgaELXrjty6m4drsuX7fmu1RxR8ik8xwtYo75sv2Dzi6DTUPYNz6LXEPTeyknTnfnc",
  "key25": "2mXp1kwvdk2ryx5c94F1c2ZCqrp2idkR53RiaVG6ZGjnEAN5C2rbNdeRTw4uCpisdyuZVLkiGxmLnwnqkCz6PMBf",
  "key26": "323dcAGTtJ8Lz6oqPnb3CRySvQdfK4BmEq4A9d5Xt8uYvKnMHdCUhJQ2kC5vrHApm7YQhRdyfxSNGnq7TFkLjLBh",
  "key27": "2ex9c2rit2c2ZiUuYvSsy7wF4YxoHD9fsZDtNjH99br2kmqKsw6QLkuqe9ehjvQGiwBmKn8g6F9wpqA7z6QDLQx3",
  "key28": "48tmUAXagMKfdpXc1KVLQoogqvithT7ehByz9MKXz4xGJVwnfbkiqAXenTaXtd3QHHkJ3RJn51L2Fnanx3Zy7aH3",
  "key29": "23oaJdMLSTMr8jn8FLut3cSsejhewN4mw5tWrYqCNTDpjp1wcv96DGo4yP8qdW5YP6WY76L9jNYKjEK3LDcGVLg5",
  "key30": "2NP7BtYSNJmkR5RBv48uSt23t82g3sYfKgxgbEA76ajg8LTQ62auYNdMeRtfoXYzuKhaAgL8k1pJuoPD3Zfv2bfS",
  "key31": "4mibwX1DSMatz4rLeykwWo2AKa7Dhxzmn1GSzK35CcgRgGN2nU8q7NVcX8r5Cyjks4FirfuVMYkoYfSNPzea93ri",
  "key32": "3T9dvYVLkoXXR8eKQho5o98RMhpvysAV499c9F2kjUvQAQoSMEd9eBFgqDKgNfktkbgLbfjuEHpu8n66A5EKyT4w",
  "key33": "48Fev1tEiKbPeHYsfmEZMTx5jNVAG2b6j9NdacKs1x7EjHxSC1ewPFTpvYep8jkadZD4RZwuKviGkXkkbynkjDfw",
  "key34": "3Cz9wjySqJPHnsHyBkmDoDNNMj4x3Qj7tpCPLUEujhBLHyBr9owoccewvtT5HZBnDPXnZ6UAG9VS95hzwK7jWuQm",
  "key35": "2DWXLmb4xj61iK7K4GvUwdQhqivRHAobGwz7UofJ134A4DLJ6t1J3B6NGkwgKeCqVRKg1hPjH9kjeh2iAwaMRsxN",
  "key36": "4LzrK2THze8AhwmXzpcJtaX1kkWEKLANXxo36m17YU9nLwg4iGdLc8Cwym8uj4YctHA4TzCiBcUAfsHccpVpe2UZ",
  "key37": "3a7tuNDzXqcU8t11q8X2zUaK2X9pJskeK3iHMfNBSt6jk82oMkjvcgg2gmFYHXXacCyVmAYCQ5P9iSx39CVQkTwG",
  "key38": "4eYiCNGJsdCbehxg3TyA5YpX2Bo13uhhG7BFQ4RwecXngj8vnSjCgBz9JCpc3VKswsmP6rqXYwWDxnrMaL4mhxyb",
  "key39": "3TREmzrgZZezFTTN2rRtUgJZePYQaijTJgsy3t1i3hHx9TaSApTAhoXABQAYk7T6rFD2G6TQ8wN1qztAfR8X3aQ9",
  "key40": "4M2hwiBWuoJCfXN5qzMFr6dVZ8B72HtbVqe7kASKgajncysp9Pj6nwhxBu1KHsnQ5eJhxVh5JUFb59woHZrKmggH",
  "key41": "2hB2HRhYstk6pkTM4TEPyfscXHpnRNDtFnsZqRZg9mC6PKfY7MjwGP113uPCvbvG4QXfvKcyr9XKUrGZkmQAM25G"
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
