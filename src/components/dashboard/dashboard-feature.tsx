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
    "4KHUnkQ3r75C8efCj6tn9WXW62uTbmWchnYcioT89pYFcCW8PUsqxyp74DWkoCPvPX7VpNvPetfx9aK1EyJnhbgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V9xoypWcdTu8pUV223RTVTvRBNuob1LSvH7cr7WboBVPjPssbRyHvgHzaM7QLact3c6xNLQRQ7figVaRrU9xD3x",
  "key1": "5DQTLh5i7y6env371K3iD8Lgnfs6MQdcg1DMPdh19ua1USgJm9Rgea5VNqnZgniM3DtEQ2LySjfN9bfguanfY2nz",
  "key2": "2SK2oSudZe2chj1VnSSBvCvhFTjLGGgpPG1pcYjSNPVKPhjDbnjMDynAChMstCV1CyPzqCCCG5r25QpJ3BLow4KZ",
  "key3": "2T6fZx5uHFsUBdfupu6B7cjW3QeBYY39ELLTK2UhJUpnFiNecAA9QxG9uNWjY1V2SXSCFDvfkEQvsTyM1yi5JbVT",
  "key4": "wPx8YaEetfZwcDabXfYrdLqZpBAk5m28V6oV46sfWdbmbSNvBqDsHLzP25vmb7kXR8XcUjcjjkaYqXNFiujsQ5o",
  "key5": "569Ys4mz69uHef9YppdXVygbgbBF3mCHR3ei5i5RpNiWqG6qhHzAJeAEM3DEJh6VxH7qJ4JcmYgNm91HqSeSPnze",
  "key6": "5godebWGuGDvsqfeQRWUNkc2rALfoewVehyzDnoXfzqcSQr8a3qzbXJ67B5KYWEHLCVhhFWV6yLPLMrfPcS3af9y",
  "key7": "xFWHYQihFXbGAs3FKxZwxt9XCnMoeo9ijqRbLsoqXeT7F86TRf5dxFmtfHX2hDt83KdHAd7wtQfb9fhQyHeZ1wz",
  "key8": "3yRS5bhJ7cKBJd7J3bEmMzA6Qp9xUo83rAthTPfgzZKLvaFiCLqcPYxhtr7A1rq48BAEXc28EDcq6qmwcUR487i",
  "key9": "LwdqYYGH9PESzixBiDiqncoV8cUpoznK9CrcQeGsmDqMjcAhewRSr9YPciznfw4n7gshbpt8BNYjxdZCnU65SQi",
  "key10": "5efiFrVBiMZk6GqAf5fkEXBHj1B5JmT6HcWbWvktVKuUusfXYX8sqti9XNHqwjXjKdHxcKDhx3q4JAhmtAwtXatJ",
  "key11": "2WvJifKLoxkWP2xCxuJCUdR9ea2gVdThSNtV7NJsYPeFZgj41bxFNn2hWMib1EjRUz8NirhUagfUhtRwzxghvb5H",
  "key12": "5mSfNDmVng8d3TRw7KFmTmuMhuH2zHMmEScjRnzxbs2oAdNDoA86rFoUPdSdfMu6HhAn666mrYzBvYDrGpJubQxr",
  "key13": "365EAZxLFtJgPJNfJuGwevfpc7FBKFMqQRvHkTsidku5921b8E4a7CnfdkH8njT7f6JsmmB1U3HLpvcSosjKPfRc",
  "key14": "3RAiw2YTQ4rX94pRcSRbDmWjtrSz3vGiHQjEfsMSN7TVr3NXCEPTetkH43x5xL3r8QSnMGCKnXZXGm2RQ1SDZcGc",
  "key15": "56NgiqUj3UdyEe89AHzajyg2knG8ZjKu2CR19tWFG2CvpZNSTcF7vnN896SGThTMPWWeMCfygKNy73p3pagufVUy",
  "key16": "3GHCnLYTMNpZ751tANjoRKWBBKFiRRUriX9pHPScGeCpfZ2CxP2jSPR1UpPLbD6eVbL44mVtPCxUU5YdPEstyD1k",
  "key17": "4474GzqE91uWcHnHhxHh6fTvzJGu1ioDr9VRXySd38DRTyJp5WUuuHVCQshv1Tfi8Su7FnQybDEeh2mVNhJeGm9S",
  "key18": "52rkoFRxWwXbFJzycWxeNGCa2mbxWtSbYPJazADC68SqP8BEwbhPPvdfnGgpvJBFVQqKA9soA7hzbUQzCJpV2KhL",
  "key19": "2ALHkG5xgdpiRKYZJ9evuXT4aZmnjV4VSVnHPh4CWVMitBLNVwMCcHgzXsg3i1mj35wT4KFZbpzK3DxTo4mgNW43",
  "key20": "4Vey8B7euBRK89XBVhf6h3JnWNgQeBgfXYMFpXFJ2bKn2Zex3Lh9wVvZ8dKDqVpDNbcxYH6STXgnHKTUTh2JpfwZ",
  "key21": "5nAoZgbUUxSzt7uAC8FzjQaKR7LiijpS7JzYU1gngwFWjf8Egcepvmk5PBivGiKcarEgtqjvLJBxMhykBNsDS9YK",
  "key22": "4f98cSPdW8Dpw9Ez1n8LCfnPo1zG7oLGDLENfYsQJEgpAJ4MD8JPbnqfXx1T4CqJfSDLF8JUAsitwb28yLw5h7h2",
  "key23": "3PQjVgcttNFYRG7WW65sPAb5xfSqovQdzSqQx9ZSYNrPEWcZP8UrLzMPnPSYHT8MaXCiAeautbkQxWymGEPC37eR",
  "key24": "2J1aE7g8ZSu6gYLf2wiD2eDyF4bnyWtkzxndYizqFuWBsSjDHyKYpjvcmKVBrvdM8yWPxhWooNLEMVm7FcqAJtMq",
  "key25": "3tMACwxvpgAMuw2Ah6MafcajSarKDcBv67PgT4v5wB1zax8rdfdrzi2G2u9JbTDxBHXLB3UsE8xU1MkPX2g8nC8b",
  "key26": "255q97CHEWPm265EFAgkHXx2BUcF7dqvkqQ29sWeobwxTbPpwpXvmX6SBmQgRgYDMaiPAB7G7LEtGUpjsiVUz9w6",
  "key27": "2aifJPA1k3MYeKCzt6qhyWhKevdKoAWhuxdQErSsHYcG7ug2uyrWgufpfUygTXMAzNegKnf283aqGE5A9qoyNDPi",
  "key28": "XahMXEdBgjjfhExR6YF99PoNGRJqU4XpmS87ccAUvxXEVziGpLN8CCXKsyeBtJBoM54ronCrux236m8RmqAby9v",
  "key29": "4T9VWdF42ec9ptohwvsJNFAmghdhzX16Svi3UUtyvTUeh61zk4FSWcQqkwQpvkqgUoDi8owxv98v62Rqi4taBRY1",
  "key30": "3miHdE69WPP8Yj82iTjHtopUcGgN9sa3MG5fEBwZ1fjsiYJxY3yyJAWTCDgVxMdEnUSkvLM3E3p9gnMa6VhHqDNi",
  "key31": "2ESXHqETpLHHaZ3Ew61Fy8n9aXXG1trnSwqKDoPBbQ9xzCYWbAj7oPEW8Wj4Zxz7Zzxo6sp2mT3vZrDs6tJSQmr7",
  "key32": "4VgdPiLKioNNqxnMV7eeXbqMHtnqLjo5nXFTrnVssr1zNVd9qumfFRtcHsERtY1AfuYrcFL5sjEB7JQPgWQYyYAc",
  "key33": "5k3m6ZzgmJobWTpXwfdHGkM98QkfpVHNLweWZDABRwKKrmnosY792EpqLafKMs3Lmc7wrm7XKPTzLVURwnqXkAnK",
  "key34": "3c7cgCt9N9bA1fU7a5sHMajMXkp2oF6xigk4efSKzUZXVqLMtEAQadm1Dzp9LY5aY8nk9B5ibkhjebKuCACyjbEi",
  "key35": "4RNNdWn9QBzfVRaHMoHeHttNWPFLACckzQL2TYMZWWwmEqDNpoXN1V8pq6WWzZhjH8JZEvRtJy7ERQGUoT29Pcwo",
  "key36": "3wcL7ZzecK4y4JdJNHJctqRvPqHp2d8ixszyMitVS7rCiEPMwwRy8TKztoWoaQiURa9VZi4e1dj63jT3ArLTdDtb",
  "key37": "5g72c2GA2Exjxp4ST9N4b21qp4nFVjD8ZFxEAZfXqr7ydC8LwrvX1XpsaLTnze6ocafswNjUag6kdqdfSMcQq86r",
  "key38": "4mxq9XA7NgqvzAiyGEVoVZdJaWfVWbdtZ7xmcFGcWVrdNEGR6St1nGKGuoAmy6Brijzw5CGuGbnJRHjUtx9iAT6S",
  "key39": "5ypoTe3tFEL7AMNTBcjei2ZgseAfbR1VzTB6ifk8LqsasC2xmqRtAKMfaBKfo8vZsZ9ATJ6nvgKVn2wqN4Z2jLfD",
  "key40": "fvTNHZB9HBpamg9isY4B9pjVysLnNgpdps6b3N2bpKq8SSewn3kAJqk4t2ZdrVN8rwkFABKNv2NfK8NHenmEDhR",
  "key41": "5KWNstmdH3gfWodu7fsWwp5CLGFuDZcUu8yxLjqxwjPq85MsPKAaGyckLbbyfAJUaL8ctmGkpHMKTfbsiWnzKL6u",
  "key42": "34NnRV3z79SgpsWgG5BVid9VoQomFXE89kDWHmn1HBuHE7xqFGuTaQnvTmd1dHDrtskinRMrcg5z7qgioFf83gUR",
  "key43": "5qh6oFt8awm71oLDWjT9W6LLqa27mMYYixCx7KiykbCSmvXVYFmdgTEpPe63y5hXR53KVegr4n2M2CQLThHPpgyZ",
  "key44": "4RaStvSiy3AN7wTJwpm1mymA6Bv5ukmWWivcwH7Vn4DGogkyLnWTxuEPPMMQHz9cMYNJssYcNLdQyCA9MrzeMEpw"
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
