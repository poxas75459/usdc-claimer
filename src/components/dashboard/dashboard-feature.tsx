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
    "gyKDPD8rTTTDKNCd7AX64w3ZrcTPVCNWPvX2qPG4tJd32bc2NK9fwXHzdqViAxva2a9QEwboWbx5Egd4uiwMv7K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "385zPKBpv3NrCELqe7Ee6hqcTNxVN3wkMAYHZpWt7xoj2b9xZBmwiquXDRzG81ZoC6HSgg8veZeLZg51dSkPN1Aa",
  "key1": "5AV58SuhwrxmaQNxpNQEMoUD5g59wswuzvMcrwFQLmEwHhDXE3uwreQbhKoGt3F1EEmJrHnci7WaDb1Bk6qQe4Zh",
  "key2": "5Cqq7kBTh8YXSca4vJW2ZSvqmrM7BVMT92m2Z5nMfoi2QEK7x28uGKVjqGtvB9P3t4JWDDgQHd3hXMpkuaSwr6ut",
  "key3": "4LfxW3zBabqEiNNsDhjrUFLFeRtKKbTLmoo7PW7qhRUZUX9iVgHhF5DGR5j5RSdGganBrPJK5w4fc2punYc4CXaY",
  "key4": "d56PdKx3LmFHQ3XRSdovpHNrJ26qNDXyBCrM5S6UnuTYe5vEG9ZGTgUswRLRQTSanDe9WczoyEQykaTG1Buif9u",
  "key5": "7gw16r7X4LYUNuKANFN6DuVezasjYeXFvJENbTp94c7MsY6pigzjPBAopC3pz7YzL2ok2JgkEg3FvVGZbfdJSSC",
  "key6": "C4c3BMtR3GH2bU8K7T6dFsjn2VZJ9QaQbZiVXFP4EGMuBHvihARcdA9wcdWm6s8ADCVdbfn43CewuFs5KUygYiC",
  "key7": "4e1my63d2Xier9i9er9napncGzsPona6a6TaZ7BzWWGko4c3nbD7f5njTikgsAGpRtWnUYX7WFspr2dk5DmL3Wxh",
  "key8": "2namAEVJd9dNJwGPaL44ncKeg8YZMtm9hBgnKCErms2U1b5MLuh9Kn8yAGEweBJZ2ZMgXU4uvJvyvLkym5VRPAHW",
  "key9": "2FfitnuEFeD5wcunr6RPrAJnNBcxAnncjgoPEByrNcip2DsknPxVB3u15rpA9wwCme67CvVcRsMZdtxmwQUPnCv7",
  "key10": "2wQi6xhG5xbeKwPuCoAcNfZ3D7zB2N9civ2XEN7JauJag4amuANzqUhcDBt1Vepy89BBuVr4P29yxdxwGHSH4rF1",
  "key11": "pc5zAg6Uk4jQHANj8eBcVJb9HjQbD1NKiyxKFubrkmSw8Fpxi33MR9czK9VJyxJpZLbsBZmFiZRJNzPuCSmNDVk",
  "key12": "4hzKwQ1v4rk2hR1syVHtfbCLADv733Jmc8gEWGRcsdbQdYPrFRR7TjNAX2N6yfjhU7incwbMCL5uPeA6wN9Qqhqy",
  "key13": "5ch9vGQGaPxug2hBY2VMWdVL9xyYho2ptU2VUhiUPrJkmiTHMabzc8sQzbftssMorkYKvQURMsiH22RVgwLQDZdc",
  "key14": "5pA9RQ6gvda3pBVwsGSaD9gYUQV397HZEaAHsU2ELsTrbQabAB3joZZ9PripEYMuu2RHvSYgF3nQkGz6fVaP8qwu",
  "key15": "4u1WUh8bMzisyoiBVuxKSUH8BrAz2HJxwfEW3T1cXUdwCHfhfckcnJhWfJHXBPLUXBBKQKtRLYzni2VUzBoQUaHD",
  "key16": "58ZkgWQxL4E82ZRSb8YzoJvuiHj23kf6muWqLerRA6S26LM6krdFPgLMz6mHfakYhVTCF5SoLfiC6E124tPXVdEo",
  "key17": "5fBT8H8XhRNwtThkS9WmY4C2e9nmgEcwfm84X96Lu8nxQFJ5cSghsLpR5B4MYHqihWjRRRprZfhi8cvmnzV4gXXR",
  "key18": "4eeWT7G448K5HWhrjh8KP6ZDixVyzRw7aTvrMB5BwAnDJDnmvmgWkE5ZJ9Z8xpVSUV3bYs9hYj8ouWq4AxCxpLot",
  "key19": "2nbcpxFvsF7YPRDwKvFKaeYdPAT57TwBBtF5gGZTgx3c15cghSJVFQtBQoBQSgsNyJFxeax8HWduBGzrtcDvfcTP",
  "key20": "31AtfEu1gjAJaQBXVgdYshmSf5ZgfrLsHEDzfULz4HVFBG1gDwXtAo4bHJaHd61q9Wg8hYBP84cj5Da8AMuQUcro",
  "key21": "3KMZret5CP6mZNsYdviFQg4azYSbzvtRUommqG6LramCYAMZiVvsnv2uC18bh7YH9i12GypAUF9rGmm37g8h7NCL",
  "key22": "8FQMxLZNRvdepmjHZb8HsJhfWJtSjW6HSd8EChFuYS8Ug8faiZ5zJmi49znWk9HVYrwum7TYJvYC2UY6rprtodG",
  "key23": "263fmKVBxw7hTAQv3rRy8uRo3qXUSgtCymcvLK2hbbYmeoT9DNT7tegahqn3TADEnX2RrhXe77gb4fzUoaZW5Gpy",
  "key24": "5EehXZiqUo2ufGLAqxKNJAV2y3LDtCZGwyo1AbzN7GCSMhf9Lg6k8ufGpiKJPtgPMS1zQtfJcUePesVXr9U68sME",
  "key25": "2HpboS1K5p4JCfpXFjrNmChVLMfMf64zD1P8p1teWhBVg727Ab5kXmnkNWrQryocXGnQq4CkqnYN9N5zKbUeLQP4",
  "key26": "5bGGQjfSyTUs5nCbP5YxLeG4CPLTdA38uVVPHGPWD3VqNm9cZXFcLYKAkA2yx6w2mipmepqcNRqPG2XpbQFovsTL",
  "key27": "cwEYn9uTVS5wHywDBp4B1Nr9XPuBhM9ETHQ5y496nNmSw2VmS8zP3nBrdfevRMjJEhKZf85GKdViXgwJFJXuiSV",
  "key28": "RuwdztgpQH6V7G5SHswim4qFduZQWPhFGGmySrNdgCQp8svpaxLY9tFPWP5iCvLE8S8Rx9SH5S5NJ9jk3bXNA1W",
  "key29": "3yo96Cin5Ehsi9ojLN5LnvSs1toWnk2rrKRxbYcenFZ1Sx8bDgjdoTAirZRnWe9MSwgxGHwFVz9Ntai9XJS94tcV",
  "key30": "5yWq6KQ7csp11sBLzAdT7DEKVTzoLoE7xPnAJ8ocYx9vW3L1n2H6qMBq46PQbXFwTqFqaKXfNiv6NuDJPkbU7wMP",
  "key31": "2R6uidyq11JKLJMRzG1HJZYWvquTyyHEc6JbuojRAra2tVSkCKNxZVDNPa1yyqRTeRGoA12mof8zw9Y1bwJRGxkY",
  "key32": "5UnA8KaaRiWkfJAY57K3SRpinndeZB1EhkKXxiAG47h5FTfARQXBQwhkwXgJwJcsdTkRPmJngAuc4hdQNU8yjTXw",
  "key33": "DwBFk2YYmHB2dUJ72WaTPZjM8NThWfhDZcEbPyetoJw44A7XJRNZb1Z8mSPSxUuWkT4s1AiPVoht5BFsgvUcqQd",
  "key34": "4eZoZuYjwUFrcfGVpPEGTYccZF1dPgYeZgKSm4yQFJio1iuZ7LXfGryBMkQ4MqCj2tvvoFQQAFYjCZBkkKknskUM",
  "key35": "313zw6oMSSZHozGiqYyMehvqan8oPxBX1B4zQyXE6CpFNvBU6htUcTioUkPNrN1KDDbsgoyiYWeZPv75XpZZ3YBp",
  "key36": "4suMsfXmgQJCSQt3UesoUZHjWmMDqgMcAfFJm6s2jB1KfKD9ehJpppcjP2BEUWtjGqZvhkZ9TeswEa44Yo9bLx67",
  "key37": "2dJe41prYb6NACwFv4nfHGDbVWsuW7ZDAUU8vwa9o18RUJJVgeZJHKgaCB7dNudDLUQ3eqywv4y1TGgSRCJYcHHo",
  "key38": "c4cjHhbSAZoa4eWckyYywNNAbdns37VNyjfByYsfaS4HT5XNxLSUrYa78GKmVNeHTmnhwYi9ezdNSGzpmZTJ3eH",
  "key39": "49uonZUEQYp8B2o6Pi2CqvzV9dgvSSxGUEVoUW2SDxyPAVjEagRUeSs8WzydRhJPXBFsQLzVwtYFqRjhWdBEhHSJ",
  "key40": "48b4MyjiLmhSwnh1Qcbxbr3ctm4gKwgtbx2dzT4uk7Tc1sqCfQv39gZvyYJZdS8tnwtPtRzga6gsfu57osfJibiM",
  "key41": "5cjdEyig2cw54kbzTBTUZ2EwVgLF7TbQJy2sBiM1vPdx6BA2cu87cUnjSPVGRCjm7XvMssxmuKHR2yGjwhr8344i"
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
