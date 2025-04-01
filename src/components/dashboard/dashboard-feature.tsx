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
    "4umN3Ftte4gjm8bbodBnqYYEtQH2CAhUSGQFVh7yXr9vfV1vgRntHCLY8FTvFoBy9sWo4Kq16MvmVfAGyz1ewtXr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X8EwUKa9hg4kh5VjW4y7armWj1a2JQvLjdFio6tPtDeGAfZ3iQSaYh1aguxdyt3GkuruSddT45DVPbz3BNG52tt",
  "key1": "2ryzmPv3ESxWZZ9RrMtDRzQJB4RqCpSkGYeNrLyggqpKHToiXxWL9wzS9sKihyjtBwjyRtHdiEbiPKCvwUXmBuWf",
  "key2": "V7SshWcVqZTXcS4UFFZNkSZJuzazKHY1fyvzHDSyABoVBLnzPK5ZJcrzRJCyvCTXvKyHi4R2zZUFMtyMuUcemPw",
  "key3": "5on5Txtr7b1qTPMy4HstbToQLGbYXWsQXU9ofvdoVJbKTas1V2sgKd2SgynPhw2W9XN2MzZiskGsWyE7tnmRTj6e",
  "key4": "3TCfZy53puotrsv8sXTT7iwPSCXbm54ke75vSJ4hnxVhaBeVvnQvwAPKR4A3Hx9t4zvtP9Ubc4V4Xfk7d5fzFqyL",
  "key5": "5UhQTmjN6MHbjRCdzoShfx6HXgVUdvNS7iKELAvDQ8jfRRDPvXi7x5pgsGszFuiywaxcCXPGemtf7T3CHJMzdHHP",
  "key6": "3SDfbn3tsnJDZDCgwZyYCfFnJeYrp3kS474dxebwBtxPMtcrd2CamMbZYMbjYfiZLQnQsmMPdwuZbFr3KmyPGWK2",
  "key7": "37p2zhQnMSfLjPpSv99YMGAqp7jLpnoySjRMhpKGgr4wmoe7dSZkpGeziwnxAmWoSPnZgMyPpveWbaPJ7Cdot5kn",
  "key8": "5nwpykzEwS5Da7LPoV4WDzLQ8b3ANMeaQtsiDH5WVwpAz7rM8DomaBvqKqokZ3oXh1bYf29Zf1QzVT8aJieHZmM4",
  "key9": "birAfXS5NfyXSBQVZkeft8dVLHsWZeoZqbQG8EVoN1ydru6LkbngzBSr638MeMtfq3qnnobaksjtzc8UvMNQ8mb",
  "key10": "3NZTPwxF6ebQf7hLW5doQgMJkkDdffcpMHT8T2JoN9iSQ5GiEnWtHVWo6Xy8TQqLsPJGE1T6brdY8MTbmBEvnDWM",
  "key11": "4xVA4SRjXL1iwfQAESAcdpPBTVzgnCXbVW6dExBEoajPhnSXjSYgPMLNCaVW6qLXHH287bSudvzHy3gptFCAtyhE",
  "key12": "2W5vC1mEoKVDsfndGNC1FdyVqZFcAxxvZLFh2PPJkAwhwNwTifBGT5SBaQiAbH9vVZv8BDimcVebxPF54vLRcgpj",
  "key13": "4qCNUatM1Ljihw9DZUqTp393bUBKJzDgGFYUzQtHsERkCs3kiJg83RXJuYwCjGsytxQkkTsoFZTboJpBcquzLeiZ",
  "key14": "3CwRy5SeFPDdjTbn5azr1gJ1MFbD3E4aXU75CEiqS9qLyusAwccP5HHYxsqTB5BSGxhxifk4ExWL7mY55zw3BVHs",
  "key15": "JSCBozwk887CihaB48j8xvABNc5LtKwM38wpVbX3bfDdFhywLT225btU6tFZhL2RQKGhw1tsWjiHXBWAeNA3D4k",
  "key16": "5Tx43vgGxExp8TJ86wZWu1aJcu2cnt13xAigSuRLoTTTcWBpp2CxjEZ2T4fptAuA5zZ66Z59oQrpXMNjhuCUjYCP",
  "key17": "5KBEDfqr453D8a8KkqvPtLw3gj2HmjSiQYtEADwsN1EvnNwVHS7BNXUWSD3hf2dfGquivcYABLoxvP1zKAmzFnrr",
  "key18": "Qhsu1FKUTyzsj5EHQT6FoqxDMsGATvuCpUDojje3Fg9q2qFf79iPZ5LX5cqUby6WqRFrnqmPPPJw8aWEh5w67mY",
  "key19": "2FU4iJNWUscCAF4CmimmRTMM3ePTQX1q9hoVpmhMxuYmN8dEfLRZwkjxBm6fQyu2wzHB2s6bDVakecsD4dnVCSra",
  "key20": "3cu1x4DZ2HAsWB3FM3ckTaxywjyb7roJeVLJ5w7Pky3Ps1ozyayBYmsKEDmb9ps7kCRnh3WdBJFXHAUQiaQw4Fn3",
  "key21": "4HGwh8iZruifUPneRNDWVc9PBXWAdG9CEHjrHzAF1RhNWFjUcc66tF2o53QvBL9mbcSWzrZrChgRjFiJ9AWxLHqw",
  "key22": "gDxAEGAoxQyJUMKzsEw6vGNNmFqvManU5g8QYkA7S8ogDcydbSXYxEY7zByY1DvTqep48Zjaw6SSdRoMRpqKLzA",
  "key23": "9RGEPimZUcJAKdk2xQodufvgmTWSbUXCh3NWKnRtFCzaiNjWgZAZuHMhCdKvRb8ZRb2kEmieYt7XA2BfKZthS3o",
  "key24": "4FWn2N9GTr1MANGyopx7hAChBvd9DqMQ2wrDquc56qVn5faYGczf94FMVJhEEw41cW1cwj5wmUAwm6HKZrkHMRLX",
  "key25": "4PZnpHioXGrkR5rGMH2Wr88QbyuV8b71271jzS5KL2SGN5R6uh8DS3fBHmH2d2N31vcC4FcL8Cn5cQQYo9M56APF",
  "key26": "3G6BdbxsrWzpzrUX5qpoEJ5FmEvnpYdNmxEPYW7sZXraX7o6x6AoQkMAPVjexn55jtaGpUUpQHgyoq9v3aP6ptVb",
  "key27": "F5TjPw1PMPybhypk16WsSa5D876mRKh8jEt4noVKQSGXrVeiM8znonE5N6gzUEBLcc6LwLX8x9JbHaboCfcM6AR",
  "key28": "4zTAzTmTF3nHk5CErLKN8H8bPYTH6xrF5KnV1Z9TcwzFeqe8rkQnmnQ4TvwHuFnqUF5TKRmrCJvxw3kNuK4vcuUx",
  "key29": "Z7K9HMQhwJNiUTa1DQsxov66y4Coij1NNEhf8SSyoEopf9nFVPcPpTozgniRECBLJN7wiSdyP3FSHjsrCUfQo2M",
  "key30": "58TgAqy8FaxnUcuAnXYBv6r7o3uJocso4rJ1ak9smSioFjxB1YAi7ZSj3iapZRHewFpt5YyqwnEridRZNpekGDq4",
  "key31": "4PkfCxbTYTfA9s6a7Bwz21Arn7PmaSdcn9qrQsx7BuJ8Y7NhL2m4YinxsZtt9h23JGZhoaSa5Au54cSKFC1SyJKM",
  "key32": "4uHviumGYtaatK3UDzedqM8JeezcDuw46YQANp9wpqKuLK9rgVY9T1JqTZawVRBAagPgGDR3LRQ4LoiA5pihfuDh",
  "key33": "2whySEVBU2pxNK59we628YhKHo7WVSd3EA78TvczqFQz4sLtTnktZR6wmuYTbUyoQv4Dy5tnVXEEN2TLGDXbheFQ",
  "key34": "3yCgSnic8yZtjyJZj7daqVzYEZ2sxSARnJatHZ5GUGhCJcyv8zXpN6HPPdkAt3xH3kjgVLiijBSRBZQAg8NLzXvq",
  "key35": "2dkLu3V5xeJUTXJKFacAihT13smZD7ZyYSUXJKsGsApi25SY2LFdCdMuaRnFGB5Ua22AZAfpSRG8qnzyBdUtTw3y",
  "key36": "2Qa7SENKczThd6iQKDBaxFDUqXKK6ZHKeH5AxFJKXYzSYwVTEzcjSmLSDnXtBij3cDnV3XvY7ccxjUKizwb5GrDs",
  "key37": "4GuB8j2m4ib37XzVi2SBFd3AY6ovSky2rZmUFTDq2KLDQi1rysmic6FBRRyje69ZXARy8pHjiDUfE8ZXv9qJeteA",
  "key38": "WbFg1rz42eNqD8rY9L2GJPyBaYwDBn8wD9dsU579LKq257iBAAca7mZmxYqLsqdbqRG8RquFFTvvJNawi2Ej31Z",
  "key39": "5V5PTki7B7MjFmesUWittEU3W21owhTmsUEnk94sySsL7j5ogxJQL93LcB5VPNJSfgFMTDEAvKoP859v6wRhYnYM",
  "key40": "4SNcarTZhRJcbVj34vSY6tHC1iyp67DFuYPxLcExWz9BpkuvH3hF6j4iNMx3evLp645T3R9qZEoaZpmsYHGd6uPg",
  "key41": "5wFQXKT3V5tSWWY2dRp7yAyYCFcRNUPpGfgLut7yNYUdTGEAmdjCPryGQFovrjd2XdFYN2zGEaCsFvkeBcACfaA9",
  "key42": "4CcGXdinGr4c6cY5fTdTuSCrJSNbckMBar5BeJXsZhSDQzxUf7KQXppzedAyXXUJngvNvbHmnR7mitDd4sxwwHnD",
  "key43": "5Rmnw5JjUa5noGkAK7MoD8YfDnroHb6AYtRSiujHnh3vmRM6m9ubfD1zerb5yDbom8sCioZUq8o6xaCiBkbJYPWe",
  "key44": "4owC7rhnywRbtbbFyrAWDajq4WAhj5DQxn1rXoaJT3fQPtTSwi2Jx4zkMu5RAaRVe4BNNSM7KtnHarbZrtSqroDg",
  "key45": "3xsaS5XDiQEkYKVt53eqfvAzL4mFdUZe8twGba8UVy12tANVrh7VmbBrDxHnxaNg8Kax4RpyNMyFnnbsmdhfcSKy",
  "key46": "4UPHzpPnR7Rv8vcG8Z5R4GfkNtKNLraDNKsVK1ZHkhQcMPj1SuZvZCSFDWN9SVPqmqPsrkMGYSAfSoptPxC3sVgs"
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
