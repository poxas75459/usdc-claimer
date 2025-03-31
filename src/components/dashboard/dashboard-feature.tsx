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
    "2ekZQ57cwJKZXAgU4QZTNSACoJhgPwjUASJezJfqNwAXoSQQEsuEfrkPTbKXfZteiS4QsJ72PxzAEZVG5vKjPAXb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CH5Y6PC6So4HrbWfU2AkWzsSkxzZAcRp9p9WnNSHJnSotiYBC9qi8nmLuLDXZ5H13toXZ8S7DeyqsHBThhPrcrh",
  "key1": "2GhShzR2JWGR7cWBeSJk8iWpi7Vx6dGETZLAT4FRgn3XogDVrVEzm7zdqdZbeysRHtKR2vHg82SEqtQknbXqZMRd",
  "key2": "4fAJF2EPNiZFbxdxYMf7G7eQPDRzHsUbmS3ZYkdY6JxWoQedemogHAziMXtrEFkUHrcU9kKPTdzXT9vEEtcDxT44",
  "key3": "4vGg8oX6jSoHUbe85714KkZD8HMnuyfdMf9taefsBTzRiVzxgipKgGc86CAwRnuwiTZwLgpXt1vxBxiwzrrsfuwB",
  "key4": "45EMRwBDJpVicFHtk792hVCC98DZRFx56HYpmcne4AUHySabZF5RzT2PBNSUz9VZnx4J1yjLLDPtfp371AABkzgm",
  "key5": "4rCTpJ1g3GfvfF37LeraXz6qLCRk586xPUpLH7w2tw5XStqixqCpZBJfXJ8cPX6cfLoGRPHWdFCrXRdfARooS64P",
  "key6": "2n1f88WUsSkWVt3MTH4m22RABViaA4sPxEFsiJbeJWWZBLXsxsuhjDRr2AtXZFHTUujc6Z9GjUKXmrNyG3WWChED",
  "key7": "2J4YaFQp8KjQxroJQ2XUhwhHyJQXhtQGcN5FDiUWVwbUeTGZ9ZFyAVgA8uETFpCibpXpRg62nFSoZX3RPrtycYXy",
  "key8": "FSffD7hThnRPEGe6qRX4hJP6vY1Do5CuPMsyNK1ZVcMk1HgSZSunPZaYVm4QcW8H4TVQuyWFPgeVNoJuDaobcBF",
  "key9": "5kEa3hqNZ6mhy6Pi2N1SnVPT6dKiKcRp1TURW5bDFg96VViZsWUpSbpugN94DwmEFY8yvZ3zxhK1GnpPZiR45twX",
  "key10": "3oDLujokkTixARpdkGPGeuqxJnbNn3tCRFj4UmcAb7wajHxEuvYSix1VTrTzgyGf86J2JbKVJKYTGcp2ZKHBU4Qp",
  "key11": "25cqUMhWBGXS2oUQiwQKwJueWkn8iNASn9ApgGjZYjAFfa5U3CPU3JKJMKcyedFTrEGcJkJDq4hLgjRFzoHu4yEA",
  "key12": "5wAjf9Dx9T8TmVHoHsNdeqeAmuqBWksjFZrpcn63K7LQYv5vcPhWtZusm1HvHT1BEcWEgXw7kt6P1oY4YM5skZ4w",
  "key13": "qPyd2LFATXbiMnxRyKviu6gNVwrbvh6gBfcM1JQ6qbQNVqsvwFp5fahBKsA1LiR8ACiCv4o9J5aabNg5vhYUfTB",
  "key14": "TQvX61kJfoDc3Hqghpzfgowj5n6jZNFQgRxTwzg74j7Ls7AaNzaCyQag3eYLWatnKSXRfnrxFZrQ38gHf4Zdzvx",
  "key15": "41RjdBG8isSGAVoJpQ5S1azRiXv1HuvtrA2hyNhnrTsmC43peQx7obspkLfzDZF5WYyJjXWepyuA1QAcTgDVx25Q",
  "key16": "5wxuMzDgQrnWm699mSS41Vr15wUaFcuGYNTBARr6iJGNtCq7kvG2Cu8PxNpUNcKFSrP1J5f5twGi8ZUg8fPtMVX5",
  "key17": "4rxzHuFYGCQoazeyFS58pUWcHEhPDM1RYE7qvMTqyroyRn25SdBfNVmZQA45a4zRM5m2mdnA8vDZ6ZZZzyzJRTJC",
  "key18": "aQJbzePspXpKmGotRKY586xXPFGKCkDta7NYTcSqpsGTxpTGMBhXfTBzTyZrLC1cm6vqdfakyaip1NceQKp4WBi",
  "key19": "38aHmysNgeRcKjssoTidAEgcAuVDhPRQVzQPYmxG5zZ4nAjgbCNJ18L5rmAd4EEjSkp39YKra4SGQGraiofwpAKs",
  "key20": "5qrwaEyRj7hfXWZcMBiMGef9hcX5Rg8rPGk2kyxDXu7UjAjtyPHbY8ERiCCHmwY9eNxiBJJz14ghgkgND4qtfAQy",
  "key21": "28rJn31SzeoKhJsaB5hzQVqYN2dUi5GBxLTJwzyc6VbfiiahkGmLbXebFPzwBZTAYJSSaQwFpDpKauZ6rfLVmXJK",
  "key22": "TEsomH8tYz3vLfaagsebweqqKfLzMdfXGWbqY61w7eJBmd3o8ijjs66R8EPFymZAfaLrTWRmD25yx4PQbhSnxny",
  "key23": "4qAVqDorjmDkD6EJMsdoZPuZFRZ4kuVXXb2wH1WHuEyiAqu5kiTxnLggAYPyQzq2uKUj6BW5ckTSD2MFgzj3vZCd",
  "key24": "3kpB4xdGVYqWkrMNtoQRT7Zejmgb6nEmW5gmdxCz2UJvCNgsqJwacHoxokcEeHFmtcW2gKsoha8MNUjHZf7ip6Kb",
  "key25": "3U81krYNEC1XfjDqAcneSpK411rd4ncJAkWYHKybPnS61B1HVchjYzsU1SudwWni18x49CXVGPT76C4PQ9PbvzJJ",
  "key26": "4M3eapzDnRujtasDvpikEV3sePrquZ6kBowcYT94oLKFrnxyoP3J2G5xeGbHJoqKNDxkksL5ZuXs8xssKuXQWaMj",
  "key27": "2gebr3NvdCKBfLYZBYZrieFGcYKHYBaPcakAkRUkXB18EoXFDXpsvG69B6wPHvMKxLp1hznLvjHFEtuLs9ewSyJp",
  "key28": "5VqyXAK54uC9ecrbWLTkjjBaW7yeL1fR9UxcKbaz39ossvShKR2BCrk5FUcjnjHQkzgy5gBhUr7Hzs6kPzQ8gq2c",
  "key29": "i2PZJHYkBf5MxbnYarsevJzZHSf2nrexSDmSu49vM41TX2w9WiLpDTN39YZXmrRqaWu9CSFU3A1HayhrgGWTY59",
  "key30": "3s1L3jJn3B7hqYRSTf8aYmmYEGLRZK3ausfjiUpjEaJpnhq1976VYfkqKSYgstyscrjdHgx8ZSzUTY8NKDG4NMgo",
  "key31": "491h7sBcrdsYxanZPQtwXY5SWe96ZbTgoTuUaeiUHU3WRmc3fdKtndykjjRkiqdP1Q4gqSHGzFRHzKCUWWafqjZc",
  "key32": "PeigEreUGyDPeK3aootrQKH2qShFBQBxvUnsnnNcivGKcrXxQjY4mRCD8t2gHRe6256v4mANS9LvcscojHAgWmA",
  "key33": "2Qrfy78d9rTChf3whvDWNraN8fVmf2pSbnV2moxNGJM15Z1u9Kr4FLwDwQdsQ9SzhiuFiDtP7xrSq1F3xJcgmS45",
  "key34": "JMnBRvZzjnhYXkLe2BRTDbMtwTypCnzBnHJVFfXhLjw6urrhBYBzMg83QN8RFmEqD2kkCcCnA5nsww6LRSbWs9x",
  "key35": "2xDdsYXi3awVYhPiRb1sALGVNDP4PEbqX2kesrXbxcmXF29m6PE6VZjZFzXsqxbujM1ri3D5fY6vpkmjG5GKaFaB",
  "key36": "5ehUuTeQ4L5uf7T69KCd8R9EnLPrcBULAjfayGdXxoXmsWexbARUipEP4F72oGxzukHVso5RATsTxwdVz47LNTjm",
  "key37": "iuPWqLkx3hiwQn6ZViWFnqzdjbwmhXEk6cZJ7trPUZbuZ2VnGiB3idKk5e2QC3UPUUjaUNNhWPZbg8ZGU581Aqi",
  "key38": "4WHrE5mqc3bp1Qbo5K9z84jnhFrtEo22cEi1jsm4zEEJNJbPz3cHihp4aetVqCP85k9nsYDm3USbNrMD5tiyJg8V",
  "key39": "4gekSLCwxkN7zMh11XmV6uZLf7Gz1ZU1C7pAF9jacTeFoE49jBvxwUfWTTtucTyCpGzSvWhkbGJLk5yoMa9bszHn",
  "key40": "3AangcoU7HT7V2o6K3trid8uCtUBvion9FWhoSTMSSd4D7KF3MPFst6vJSwSoiJnnnVXzsWSj2FdWBM1gZ4RRfR4",
  "key41": "3XNryWAm38t5bgkoVpN7REEY2M67ZTeL1Bnpr8nMCcaPKMF93Co9vhNB2vLyGpzw1uFD6hjkfQyQwYSK4aGADAuq",
  "key42": "RmdZyHVghfwNMZhD1gwB1CniPMLTXRbvmKvF2QsbNtw8nMUtKnPRxs7RpjmAWjqoYLf1ndhXVdZREzqb32RCNZv",
  "key43": "65iEtHf17nSMQhRCQA1WG6sZg95xdPMsxGxB663gXiRHXvbzWr89AEiN1mrWZ5vrdFujMJZFGEECMgqMe8KhFn3n",
  "key44": "3X6iMKJDjL87ioSpP8hyJCRj3XW1UDcvbmSnxpi5GWPGwhzBrGPdf5RaJqusKU4KvEQtzAGM85BgscXPNfeXkGqF",
  "key45": "3yoKSFZJW9iY2VRZiLWASxbaurEDzyk6gVyfw6D4TfWT6kb46c75DbCdVyYzCxe3KoXnLYR9ipg3zRkxqjNpS8y2",
  "key46": "4U7znqrRsm6kUpuBsCeKi6AYNBjopYFmGCMUKtPVxNm9tXx4D7xbpPuRNwixvX1qVjjXJwx4joJvoGxMdNTZgcS1",
  "key47": "5Mj5DYdegKSnCQeaAAhctSdUXc1vHtsrTvxBQZ1K8qCoAtSuuLACVdmUQtf5Nzetv6b8H3quDwrhHC83z3Efx4sh"
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
