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
    "39ZRu7gGGhef69BsjXMkQBF7d42b4j59o117mn9p1HHkwqZZnV5332UQeUZTuvP7CMuoDVVmsNUvn6ohhsU1dBbW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZTsCR8SERPCCFFfhRCgjFVSyqjS4Cx9VHB71czCAeY26TdoA54cWJH8iH2E8Gxg4EhAiGdwux2fFrh923W1ANty",
  "key1": "3HNZuRqyUX3vx53qT82GMrwiNa2qkE9gKt2cYiqphf1N2PS8mgr7h9SdvRrjDA8rWcCEeCuDcFL7DngFSnCN7Aha",
  "key2": "4RwpNHyoCmk6hxbwr9JNACgL9ExqYCxVXsWcpyzhAvLKRewyxGMzvbZLDPxTmafSYRF6o6W63zEspwXdNm9pWNdt",
  "key3": "3uVZ4HHV2Q8WbyUukNpgZSU2CMPqYKBU7ypMgjR65VyWTR3FnY2Vmj1uDqQAGcuvKNnZETRUi6hMxsRqgVpYNsvu",
  "key4": "424r6BhQ3qv7sGwdhykGrVNSTM2YbvdP1VZ9sqiGUCxeCFVx3uUmRtQtMcK1HhbVzQfZmWcjzTPFbZ62AdFNDifK",
  "key5": "5ty6KgU3Zo5haUmXN6X2QGxU2Y1cWBUSXLHrQHKgD8XLefPwKA4N1ZRWjrrNF1B2mxLzJbha9LpZBm6FoDNF4qH2",
  "key6": "2qhRiRXLavnp1WvRVvLmNhk2GcNJdQz5NhLTLELijKAYNoFCRygGMnmqfsoGYJYmPYtU1k8PnSL6DWRg5ynpmxn6",
  "key7": "4uhuvh7SHW33HLVGUZMdU4oiwMbaviLmaVQv5zy5kJrP2mi8EgQK68MVcg61M6eCgb4tUvg4wfNKXvJdL8YjukmA",
  "key8": "C3AyvBmN9f7dfdP2in9Z4a1mLvgvoq1y1j2QFC5FXBkzVhuZS87y9jHV4yEvHLwTKJKejkYE3ANAaEELDKMYbSr",
  "key9": "3TyVJNVxH6vhhGSsNidMadTw5yRDhKLqc4oQAHKQVkMDfR8xPqTrTqm2Aq5j9UtTNJ6QTj7BnNkfiJW5FtVqcMWd",
  "key10": "264E8Waa2vs4euCbZB7SFtu8nfsXbsA3W5yypxvpXzGT7haTFh7RbH3aRBcsEDGyEqsGLbX8PSakqMEJjwoSgY9U",
  "key11": "52CSPCKhGAmnZtZF6mKDHuCmKQy5TWGede38sX2t7qJquJUuGUUfTPRfkFC9YWDPb9hMkYHa6daSTm6vH5hGz3ik",
  "key12": "3TvHot4USznbX2fWJwqjUMGAgerCytjpwj5XthviRFjM9GhGJUWtMXofmaAsjaDnMa4Z9UShA5yHMQGNi6Akg4jw",
  "key13": "35hZvrWCA6n2gUYW4EskmVXMKD44LY3RwLuFWRZvXVLxUtQti8Q7GppzfmGNdUhcUpc2LbZmLMyGfNh2LGBQ4MT9",
  "key14": "3jWtKbAXNH83dBWbcaudStxxMHkfy6bvRB45LWgqEkHjjbXwHW86sAvq6ZZgmzAE2MqHbKbXGU7LCHNLGGKJsqsW",
  "key15": "37CNhzk9kixVeCCMoJeZyqMWFASZvKa2KkdWm5jwN6bj1fGDkzs9SSytBXeEngf3uG252g7b5Ksh4HcCC3X1gRcw",
  "key16": "3d4xHpQD31qk25mGXLQN1BtphLdEKyUTMLPzupFwxyG4dj1vLGqQM4imq3aLGpBQ9cNVfNnTfyqQv4PvriyRnWA4",
  "key17": "4f5Z1g3uczupBBJmqMSWeLX8JMLHh7UtumtjPLhNp3KULvPWcWyLE8WLU5hT2JCW7grNVxY9KZuW5EKKm8YHgFPX",
  "key18": "2EQHE7nSLXYYGeAqp2s31LgLazCx89JStJJS2H7Gt1ZAtDT6ebtdsA7H5P7kLuzpt4ybWpgqS8S619mPWt35Swqm",
  "key19": "4PA6mwq75PoAgGJiQ41esVsAcUQorzbtFdmdAuDwDXU6j93h62aeLoHs4jsmNyyd9kiMgGmUc2iNSDmF87FtpCM6",
  "key20": "91YE8Utiq11CPCRxRXek683ZrW9UWnpqjLSzZefMBVTVEiJ98g4HpK9FUUAq5SxgmKXQ5UNCYUhNBGkcU3Mf9we",
  "key21": "5Bik1CBkjY7zTMQy9HxJKmRWGLoXog63Q8L5xt1rkAnXK9qjy3LWw4Czznt433L9WenxsgvQ5s9DbD9eMiHsxNFj",
  "key22": "3AKrCEZBYaJwq61jGza3EYL9HPMzmmwkCnuwnMNjcB5Qu2z5gvhjyvzFPt4UjQnn6nFgCAMT131SxG7TN2GDmeHH",
  "key23": "36t8UYxzTRvKafcnBcAphqxd5KUZovSGC18KuWkZix2Y1eEv4D6pkAwXDeUA92nPjAdFSLpMeVtP63ERY22hTJKV",
  "key24": "54weKcdsZnXhnUSNc4sRmK7Smh6s3oL3TUrurn1Ss7Vz8zdAWJKx2d96Y3ugoVwgBKxZyo4wSv3vn5S5mF8L7VAL",
  "key25": "3mjBfXJRN9YVgw8is1wW5gVeTcJVa8gQkN4FkXFARzCpkZuYaj1vfijSAPrpSs3e5SXPo193s5yvV8QrgL3DwJPk",
  "key26": "2DDNmYhPwkHmG7n8dvAsPANr371edPUCw66Rn3e5mmGaoXxdPWkHST4YdbJazJDKwyMLrH8A71r4zWbbzNsAwUsV",
  "key27": "4pkydbJG2yPah1ejKZFu2yf1jTcJ4oDai7Ud3X52kKUATPvc9tLKAdAbTZS8MXQeCwHyjX7i1cekXKGNGfc4XTZn",
  "key28": "3R53oetECgzitgUroGzfTYaCjucrftC4NujRXTuVvhwEUGqCGcXpmnfmwNMMd9RiUR3PpqDojKEGBRiETbkBcG6J",
  "key29": "4XjuFEyrMzYhg4eXpHCV4P5mKH3mw7PNKHC7mY9cveXFND2MrefspenKDr3YyQW2K5P8NarzT991R2Y89oEhwx7f",
  "key30": "2AaYDN8nUDragVqTEJz3q1YiBkhRuBpLGJd5iNEbSzLZ1L6Ac2pdE6RNwqfEbVXR7UnDeRPDaMV6TgwzefBYFNvw",
  "key31": "4X55dRUFLixXVLnbrwkcWJ3WrUiEicDp78nFk4AHKxELmQkNVZ8cVBaQNW9Tsve6bQ3Fk7SKoPiPbsLovRAKKqLc",
  "key32": "2amTKeMGSWDnpW5avQtFvXDXPfrx2enMx6sLDeyZyw6qd5fU9h4KHuiu7fg9kQsA9221LvyxxXbZK4vaQR7PXGzy",
  "key33": "42YPeTK5j39TSMMGcVaUYp9FVntobPtCD1y6czqF6q7f9r798mdqysRigaJcSig5m3wWKZe2MJ8o7huCZRmbTZk4",
  "key34": "2XEGWwwP2xEk1BaaaYfoACP8VnS3M6xsrVjV8SrjUHk3ELYwWaWkfzTk8bGW3ripYPYBhRh7EkEHNFKt9vUczbpT",
  "key35": "cVHTP3duwRo5JhEksfsqwXnJukUT6ooLb89tnD3LvctSC3m3MiWev5ZJM5VMx4ZEXg9MHwpVn9rvta7uuGMy1rx",
  "key36": "3k7xgRb7sWoxTHQpH3yaQmLZCKni8MSrUMbGUUGfRGBSU7gayq3E1yxtLLYCudVtrYVPsSWyidd6D8PwGWqyDZWp",
  "key37": "51ZU8VVdUgzrr5mz5FCqTDJ5cC4RMadH24CfNAg3qsX7EEqQEmqKAjAFpHR7coHgZoz5skLJAH6AKsHzNuAZAgqE",
  "key38": "48ZycQiqQErFSkkURje6fNvAwHfnKwg6LVLBV9CvcTDEuhRCTYLFxDGaZfD8efBXF5vHvsjtFYJeFbpD4UucVVNU",
  "key39": "JfeLGFx3ja75JyqvP5akZP6XBioun5D6z9DmhGuCCHykfzvKebGarC78sWnxLb2v5F8ynJNoNogP4mCJNHQiLJi",
  "key40": "4p2AG8JtRB8eL9FH6HDyEEnS7NBC8wZVozrTzFWbLqBN423VyEHUoNsqE1UDpSinFpEyH9BZaUXBTDyiCgjqfX2P",
  "key41": "33g6GPFbyqSywHEMNYR6qQNRbQnjmQwUAcx95kfdhcwnCJb5RLs22XXrGbCWknemd81kUcsw11kdvYxff3Y31jCc",
  "key42": "KaEtMEZmbMMGDjScMLh9CwBMFd9A9srJRBvtwoVFLQ3hsMk6uRD1SMvQY88arF6TD78gZqCsfGJMVay5PwiVAAE",
  "key43": "xMFmVCXgMh86KsUVdXCHqysmSFf8MCQtyxyqmfZBBgdWXP4Sfn5Nh2DYVaETjAtZqEFE7HjGZxXuVm6gcf8UE57",
  "key44": "51jS55YCXZicCmbwKwphtFru4bKauuLXqxrqRC6kYTd3NAByqDprpWas6XwN9vUatnU9PZ8SwQzQ9XRoKS5XSP5a",
  "key45": "YfMBGHWMhNojPuKcU8NFh7oQg7d7ZE7Ntdh16kL43kWqzXJtMQU5pQu9zVVnxL8GrozdDuZhTgys2PgfBP9jnRK",
  "key46": "4EABbnnXdP6gHvS3Vgi2QJqHcjjnDKrM5itPa2ZdXjzHXtZvnqry1M6HGuTSNzKvhXndSBrqigSwqPMG6caKCZ3y",
  "key47": "4CRMcW5hJYrtnGaFaobVUa2JkFQxAicQCF8CNFV1JjbNYUZcwaXWJwLRNxUGXwGRuYhMfAL37Lyo2xFBZ75NTGjh",
  "key48": "2Z5mnjYkBLCmK213Cdi8zs5ueA1acrfV6WEMibHvqpLx6v2R5wFpwp3sFsfhGaNAmq21JK7yNESFfhZiXZUcubD4",
  "key49": "3D2Tt2gdY12fKk35RFaV5NNjGxgNNkLfj8ubh3dmUe31fjYaSgo2kJ8u8BSSJjmt35ndAN3hDfrt7KuY8q41XrRA"
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
