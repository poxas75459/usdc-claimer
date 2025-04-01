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
    "5ruJ3GUK6LJnokN3PjsafSuyPB86dtAC9bHBk8rctmEq36jvU4oCwrtP9Ys8qj5WkN6MywL761eETuTzeHYCTwWm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fyk1hEM7MzVhnfVCV5ZComj6XVy7cQWxaVJAFaaWvB5eKD59tQTa8EjpR112SqX7kQFDjwA2uiWX81uhCxTM6Dv",
  "key1": "4S15z3iqozEj8R9ar58qkWrU4W739EorUwPTsnjn4zWTiij29yqjbkSDzVaBfCayKAbTYuiXKqkQAzWsFV4jymfA",
  "key2": "56WbMaieqChcRmovWZko3cLvx7We3bzAqvZwikVE9Yz5aQk6KAYYcs69P6jK4xqyNS1VkutFsEnDSVzw16STdh1P",
  "key3": "Dq7K7Yx6qumw8nZ8fWtjE4tKjJjdKumfsp1NAQazmQ2PGwd4ztzDYeekLvGW9r1k6zLYXcpFvkRbu4Lb6qqG3f7",
  "key4": "4xQ6DtLH1C6bFDWS9JTHYzS31tPPdE8r3bEVeSvfpgJ4wBVejhhWCskQNC4LFh736z4G1wrwxbX6FQMU9yMRxiN5",
  "key5": "2hgXPgqcoxcszMHBtrrJ4UtCw3voJy272AQtbdobpfxkCUT4F1LuiQnngMHfAQtUYRrRkeV1mLXniXw7okdM5f4u",
  "key6": "4JaxwJbCpUcHgjRpRjSo56ZKrfbE4ws9FtR3rcFXN9qseRL352LVEiwSFECAj5D67AFzjZiqEbdtzQ9CSXZMxyU6",
  "key7": "5Dhq2skJXSvRbxJJaPWFJC2JSvujCg2YcQKCHawgmGUW3Bx9iwYVmSb7RsoWrabkgsKAjJKQ4WAscGKHXoabmT4x",
  "key8": "467zQ63asHLoYRtq6xByAXrWHbjmZcMy3jGpFQMMH24y3LfYf6susLWHvvAFYynjSRiZWvzr7GByrnHnvWHzvTkX",
  "key9": "5ZvxfPo9DAwR56vgKhoaGPBgxsK9qTm9q5MD2wXiHj9XkxEipTTs3PfEsdqLBcq4G3yyXnRpKUwfoxsPdK3mNM41",
  "key10": "3SutU31mQQhGctX5BzPwutMjghxgTHY7bybj8YN7SWjK6zAV5GnBKEaDzofk1xF6be5VgYJteg5Qode9kfRE3czr",
  "key11": "5XhhcFCdan68YJkS2x3k5Ei9fY1x9krnrigfFpsKUSyr4yMWmy11rKdJT4We2Rfowv1Cph6AKtiCHP67uuwpfvJg",
  "key12": "4oXJ4fcoNCUG75rh2xjZq9TVZpHcyxnt5ZcB49yKB5RNKib6T1fe95LLQKf4vFzxeHUyUP2ZP7uf7wGMXUL9XokB",
  "key13": "4dGcGpG7cy4roEnd8uwxTazFZQEKuc3K276AXdm4C9vEGASe7uPAE78oMuu29NoZWmcLthtoa3kmMDuvYSgaLSt5",
  "key14": "4DutEjGTBgPubZPzxmBpRvjCTbgzsXRqUJqhA5KwkcaopX7FuZykdkvGD5GtX4LcgaETKrW3Z1aZ13TG1v8ycRcW",
  "key15": "2RdjJqSibgXr6m3ZMQR4HFMybFeFvKfrF2ggVY2Hr6zbgphDqmaFVtcGEHkANvcU72xRkNAi1parrUEKytosxMTb",
  "key16": "3LZYRaMFSs4JgH4mU39Kr9bcFP3v9ciatWMBw9G9qcd92vfNp1H4VMUoT1CJmqznpxNeZ4hwvRXGrtUwTc8115aE",
  "key17": "5ZPX2mdYGnFbM1NeTLa7nNXGELBpmrd6zGwW96pmFFS5gawf9TtufZSJr2B8nHyHhqZtvR2kqTbvLa5h9T13UxYd",
  "key18": "544bHVnXiDupVRAoF2567WCjWiNfs9QdAcRBZWFF5CUBdtDdGehbgeKpHvT7uavzdG1bRt5dZGNtsZMWQNbykxRa",
  "key19": "3WFafkP8CTyXifZ8eYtpkegTYMnvy6agAuBTskVUMn7LNN1V5NHkGLntgqM7rbiNAsrMLtx42czwWfLUGKjqP1X5",
  "key20": "27oAEar3wyaQ56mSvdE7452Gt6ZyAiNC8hif9Ad5pN74uNid17CAvLv9tHeS2nKoiW4UsnG7NpmLpsCkzX98fo1n",
  "key21": "3bmY2L2dsits8DuXRbqQPQ1jd3ZYVDYDGn2sSapJku5T7rH6BNKSxC2SZfQbk5kdCFC7hygqzwmfYz54QCszTwaW",
  "key22": "SKGp8jrqJJFj8gqZKCHQSBNHgpERbWNX6EM9j7XeBsb6NfokpjrpyKscQY8U8xCa2Lrj3NkDoZ4jLHjPvWTqNUc",
  "key23": "5YotDFXZCCvET5rCj1Wzc3LV5ADAKZ9cLzctqEjAgTCXDAnzc3T189o48urSfZ7fkrsJagXxRHh2eEaLqNYZE9pL",
  "key24": "5RCo61d2E78zoNrf8gGj68GNhZ5WcscCsnr1ZA9VCJFkXXDaeUFTxa8btCDt1LKBSbrtcMaDL7KaJnvkkQq6HCDL",
  "key25": "4AHMMwgqTTtGMT4P1WBXBXTzhsmLaAdZbTCVTfRmsz11jVWD3ZuLUfjMokySQETEt6LdjHRnEDfRMyXuH1Y3aQo",
  "key26": "yBkJjdaUjqNo62W3oK9N5kgndAUGUFwcbvjcqpiepWMJwqEdqZcwJTvRg1kENTYFgJN5Dhf9opV7yxLjJZTs71J",
  "key27": "3ggRQDYxEskTpUWoxoJQKTPga6dULFTqdNpFTGtzkY3mCxAvP3oisM7efgLWqTniDpTS3RtNaPcst8re2ZfktWgB",
  "key28": "NSNnngVKLjk3yWp5hTTNH8yfFdTVrqgmM17BdHkW1uYMS1CW7AFfzbAB1pgwhguVLSwzSNaWWT693LSV3ieMesk",
  "key29": "5pDNbNNT4grS25M3bpPwbypUFHBdCbX4k79psd729duXvC2Qyb89ydoCrXE2RwjYn5eBKTbWQE6HHH9i5FNevPyp",
  "key30": "4PMMDbmgJWtpwEA9P9ixeJCtiwaT4dZk9AvTSrqWcBRWToEpMWXBPgcSLwFTpSQcfeyqF9xohtPSVfyTS32SbBQe",
  "key31": "2HMTJmm9py2T3jiJZ6T97sdmUtBeHABtMrdMbCGxEayw2U6DdLhv2cfU4JaqgjLdngZyt35RmWqooAt7juSDb2dh",
  "key32": "tRUtLRRcXc8pWrrhWSFt5PK897KUGtVrHHcbZd7BfHKSYf3KfCRS8iZnL4v7kWKJaEXkFgGxybxCS5DRwknaA5L",
  "key33": "5zceW8fNGiytf4S67NjEGTf7qsJYucwhNZbhByQYEruj7hdqJcoovLp4UzdQRUMBKLj9sJDjDen3n5tqzyNrnVk3",
  "key34": "3e9RSEaxAtuBXZeCuYQv55qRka5mMspDzZXM95U2SsDDErhvemQTpafeDrgNzpUEDSKbanSSLPVVeqL6UjZrEFUD",
  "key35": "5hRdcWJ3vUMmn4F7LPF7VqgRQfasLFCvnnkTn16f5AWDVUnrEpg7sbiub1nhhELq6KZP9rJAb8vTZENaeJi5S8ge",
  "key36": "J52Th53gg1HdEa6MhEbEMbugE6NsqtmhNBj4QBZTNXZtzbD54TxDoZWCqRGpMBDBSoz4qznrzJ5myR77qMpv4K7",
  "key37": "4NStZZbpgzd5pjKMLhYUDuFChEgVpNQ7XR8dogqt39jZeVskQe2zB5wV4eKPqXL8msxatrEJRJEQK2kgHcvbFFuL",
  "key38": "3y37EsNpKvY7tT8u1Ab31HkqVv6B8qAHv3FearsovXSS6EVtBFKb22k4Lg4urqPpBbAKwZCCmLsMLcaAevGWQNRZ",
  "key39": "32SBATZNQzLsrkYnQoqRKsQv6CrCNXhHrffqkJ5S39rBJmeJ7CkCFL8TJ5S5BauVfHnBp752cznFWxfG6socYrWt",
  "key40": "2EepniEe164yQ2sGs4ci5ZKK5WYs4w4MaZeQ7Jjgyhr95sni3QoQYbfouPk9fT7bDAXZk7rqe6igoixS2pYNkC5A",
  "key41": "2xcxcKq9HhaHcSB8kTtCX6KUDRb6yTxDGDap8sHde2MbAQzRaJz7nXHqgTdBcTpUaHwhxBNaeV5kBZWdBSeGckGv",
  "key42": "6ELwnrNgS468Rg7mBCW36jnPRxQezW7hqojurzczJDzwkk2Nzg3smHKEwAbKAfYegw6hKroC5CYt2oUuDZFdE5E",
  "key43": "4rhi7tRJTpyugnHdCEFizaV4br6DVtmTgsNyaWWm2wEEdzXtNoGnDB6FGDwPBPYoh86FsjRupnLEXybRBgpApymY",
  "key44": "MehYwqXBm779VvbdLERkqYP4TDv3Y7rF6avdwGWxtzbLU1y5CAKEreCyiJyNspZ2Jvd55u77fnNuikohcRs2jDZ",
  "key45": "3PQVATGyxZ5XfQLG8BPFL7oBB3G1A1RZmJEpZ2UZHDgc6EP2fBxqqrSUSMVPjeQGo5k2a2iQHWjsG6kTG3Dvxn3V",
  "key46": "4E4rxmjTibJB9yHHyQdsuLpo2GwH9TtCBENYEHN4wZf4aEqLWvYmL4wGsQ8tYXToRDmvdUkDfAcAWc2cfwcsEjSK",
  "key47": "2EyjcW5Zr37qAZreTxweB8WzhPHNsVW1LpW6nN74zdnETRbVJ21BfL3tVh8NjEAwY6xu8mikcVDG1HibYPfMNFrX",
  "key48": "3ciEyTCZh1EZc9XZsaKVEVVySvsp3KrqogU7RRHAN4sPKorq1oSgraMw21wy5th3tKmXxdhLzTbUjzEUYi4NQFtB",
  "key49": "3D9e6chzLCJktJRLKPtNqNZQz85hVEbF2kmVhSywk9yqATGXn4azjCmqt7K2m7B3WnDZRqhpFkrrg8yTPVDmZSgW"
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
