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
    "2b9QZLxnP2KXci29J7j9eRBG8uBudCDwepqbCxDDLB4o441a9r8D4vKHCTuGdGF9T5gHNmv1UJxrBotnUScombxQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5E715PFoAXf1hKF6f5amzp57Gs5cyQ1fjRK46cUS6HFgVbRWpQyYYZMS7zP4REJQxLeoyiyx2o8fXHa9J1ZeF7ce",
  "key1": "2cx7RNgp3TNQmhQKUsfSXpKwHYgsba9A49zRCuvhLfmFuzmmtt1N9GTHMe7P1EF2TVLqpjVdnFGCTu7M2S8uLg4g",
  "key2": "53M4GbMNPGhiUdP71gUVU9GWqywEC2fumvgPAnDCAvqRTH1zgDSt5g8KJjyxc56gnjAVnfMZKC9eDMUMKPgccGEa",
  "key3": "2d9Da1dLEwLMowzdnGbBmqLDy6jvFhig7YkxvbSmRDmmtnFxR3ZbV3FnRKxWjscd2t4p2XJcNZ65cufdd56QFDzm",
  "key4": "2aDWbkLG5mDHY3KF2DXdC4GSg3WXRhL1D2z6HXN84q22tSKifoeFAYqtmucNKooaKSixNB2h4gQnD81uXX65ULLR",
  "key5": "3PuJf6ioYFbv7szFYuybjGNke8CHR74eZ8L8Y5jjQedVEotEBEYkpEr7VVKfhjrenJ7Fmo7sRNjsXkt1ycDfVbxJ",
  "key6": "4r2rruhGfRa5mxUMftdqcfnYgWbkyS7SQbsLwah92UTzC5r7NQvRm6KzCbho1MUFcuzHDiedczLzjfiwgwoVZ2rG",
  "key7": "3mPxLXXkvMLhMabicNmELYvykizDMEJBdif7SZe7NP3Y3p7KHNdioUsY8uGViD5gMVnZqXypc6bhaSrmNBKXrhRy",
  "key8": "3ha8RSwrRbe9RRdauEMYTMViuaJXfqXLV6U4LoRbkL1oSJ7VeehKPTcAL7q9pN6nrw9EPkCSSiz6Xedb3fmDbgHo",
  "key9": "5NdeawuwZFFCAjhYJEqFAmVK7kTaMfGT3QDcGVPt7qrbNQgV8TkuvMEsYHB1GP4YG3AQtwdpZnUzxwrMQpDh6f3M",
  "key10": "2NvF8pzuQaj9e1fNWqBj9LPChGTVQRya6dpGQBJq1ViSMat6g6qSF8yDjce1gZwTD11JjNSh6RsUUfkMsdobihKe",
  "key11": "259rwAFiUfnJrTUDoSN4S7h2jDs4VLendenVtofWbzJ2sN7GoB96xHL4zLxL1fQU4wmvxEAnZsiYZtUgQuaRDcrV",
  "key12": "2SmDGQBhBaxPurdpQbxJoV1evmvvw1RFokDBd24AxKjSnRnxzn1SCsEivvcnfP4cNp8MLQamvJa68wjwjYDkQZiL",
  "key13": "5qY2WZPsRLXYEcysb7Ko6PvA9r3DJMmkzhLv5xksEJ8K3iYKCySCDbTd6q9bm7hCCBeJph8zruTe9cc9v8J9bLwq",
  "key14": "3UhYb7wMFntnDsNEXdTiBVZafjnzVYfiUshFd3L6CQhUacrgFP5RAMNmGdMP7axnDAJVsoBDbKBnyd59ZRGAeZeN",
  "key15": "54RDKwmmEo29r5DfZZ4gEmcXN9nJLRsLQtj8urN31yX6sMWVsNwy67k5v9m842txDNBRcwEGa5APqnoqdP8LWDyW",
  "key16": "Eo7HevyvjnFuGozcZFACDKS41pY5LPA25DpwJNtMdMUwg7Y4MXbu91pjtKarUhdnzwgCqoLmFUbVrzA7TFxrSL6",
  "key17": "5vBSvrXzF6eY7dKhzwmpkqBxe2MqPcL21jkyiJQFW2qC92S648oerswiRGTewUWAgz91qEabSmZvYsTB4sGqRUVa",
  "key18": "5hZUh1ZhK82eBrwfSGUTSgjQ248HCV5VGkNedjJLsxkJ14DrkrRSCfW7g9r9af3ycLRCCMJN94gr2qfFLK2Dn3SB",
  "key19": "2kiZatMTMjfjejxZosz5Uauy8HhEiiug3FNgsEmn6Gsq39he6BjkJKdhJfGvEeHKUqz2NT1BRwq7iddNCPokjxTa",
  "key20": "43vXJ3arC2TbkhAUXAUWo2SXwBsFLn71iNfLg3zCHjdmUGXaQTnesxatoJBhV6j31uegVnd8pET3YTJ86vgJGWgt",
  "key21": "nKbE15ZXbdFYYvLh1FSsiyFsDpam3Evbznr6LDa8xQAS4Y9KvFbuLnjxaV2wkgxL3UgthLZy1wAxxsWgUtV7XwN",
  "key22": "4FUPe723XThiQrjdcwmNrczmaiP8gNScQ283jB8VjXvjRT3pKAtszBWtSKKWgicH5UioSqtZ25t6bqwFMqRypJc8",
  "key23": "5WpBbZtiGLfriNEGVFniDcVrcj9rKGZqE3EYhYB5jDzGf6qVGYZog83gd1zeTSAYUydsHbWhYefc7DxKWmz3Ujxu",
  "key24": "3E1rg26YVL6mtFsY2EACFiqw9NtQ4MCoLk3ErZdYoL3TNYksiHVV3wqiZxToRixc3qfLMSTupX6aUKfiQhB1arxp",
  "key25": "54vrk4Y8yDGLtKinZbprv9gUZTVmQPsUeWz5F5ht6WhGPMN8r6J7uSmN1QU2j2rg3QKPpenCSDA3YFkY5FmAKBRG",
  "key26": "3RD3N8QTJbkkkxPD6pWbXcD8bjeByg7FAdrQCVXqfFHN9AfmWc9ahfTn6xwyAXoFh7iBtFj9uy2ni49WwHruqghe",
  "key27": "3H8LRYAyrm4EA3GCK1tn2g7usPg5cZ5Hihfi9YVSVGF2pidUnjw8gXgxNcbNnR52VFzfGPSUfCfP3rBCPsbmFykq",
  "key28": "4W7ez2bSCSGPNPhM8iF8Wk6VakhdsiKYYzhmeXNExPW4aqnnQ6d3i3xBascFeNoopzRYcRM82QVBUGbT6795Jwxy",
  "key29": "5ktKgvuLJQagzA5WN8fvXHMLGwgxuDVaLzeRi3j3a4rfjNKWV9ABvTmPyPofpfkyY6FQXTG3VVVJJZT5MDAepw8n",
  "key30": "37Vu24mLaYDNaZbA9SyjDX9a9LXAirmGbQBk4uVHMbX38GiRTKCywdn8QGsxZPWG5FJte9XcC2zDpmVNghQ2UJSt",
  "key31": "fzvtzzuE3b9dfLQABSn1L4LfBqjUiAdkpmGT3U1X2gjEU3EneUE8fy6AEmGB33grixdL6Da8PYW5AFHUYonbFqk",
  "key32": "57gus7CFdMudS94pW7Tc635BChSMVj3sAsvEDUpLH9woL1TA83eWPS8Frf4wGfq1sP4ZHPMa9gajQfTJUceHCy98",
  "key33": "3BjYDYdDx6bLTk7qQFRGR1mSyP2zSZ3H6TZFufhsdz3k4xYZdGLQqynQnJXhAKXABaJZrwqwkDZGXtBpM9yaAhG5",
  "key34": "5122kBYr9zbukpmverRpV5uLEusuXwGThbZByRVHvqVwT2rzAJGpAfVsCu6Z7gpFffyjENGGmnEkKM29d3p1n7PM",
  "key35": "2Mq6dRBz3N3zXPGiNc89g7gmEnCToZKoUHgm4ccJjmfUGTbs5kwsSFvTXRNW3Hj22te3KfR6owd9ZGKzrQJMAs49",
  "key36": "3hAkwfTwo5HAqDyyjktEqVHuiHbFEhBVHxi4w7AHEKgC2kTctM8TbC9Vr1zFQkJjRnkYkxf6yqjtGhbjyutQFdmM",
  "key37": "J3VGWj6LEG2vWsAwZuqeoZZv9cBBphxpyh6QNFtXRK67993tBU845V8NgMVDUExTwU1icZFLzAHw7dRCK7nE6ZE",
  "key38": "2mCVeqKTzaByDkCPeyHag8mxic6qruWojYwExhRms8EVGV88ew5cg1wHRCdrD4NrWZNhLveYkwoxg7ZxfQtzuBeV",
  "key39": "AKAMA6BJCUvjjjwrwFbZRgboyPFgD6hkeKn8yZ8dW9pCFqsH9MTFXgR5ynAXwEadEVkib8hRuKCs5cd7obCFF3B",
  "key40": "61UvG7p7odgK9os67En2cud8rNwmJKpz3fCpKEX4hhJLr5zozdgqpSJQbaY6rG99xtHJ4Rgdk2nAiXncc3KbMDv8",
  "key41": "2cLtSk8aurf6h7SSAbsB1LLtzxx4jHNTXtjnJ3QYV3kmUvDAmgkVfJT4vbkivPFW4RrRdNavRfHaDmwujKK7gGqm",
  "key42": "3ZnMFcpm1ZySKUo26t6BjEBBb4zvKvagtvUg58ormneFqNmZuoj8z77RQmcxt72gNsfLLpq6K3QmiPMLLYTZMKfd",
  "key43": "4VCvGjvuLfXXcaa77icCX8ixai1oBSbNYqTwt25B8f7dAo3etu9xQoWzV7zbeThJ17LxQWQ3mGfpioEAccpJ8p2P",
  "key44": "3tNuuC8nLdpccFpn5KsztW4puxzyoPxsh63H9AxmeUoLqzSbZrsU6efbbDoGpn1oDkuVJaxd2mdB3h13TqXviD5b",
  "key45": "5VQhVwGWyQB8cZNKs3zgFQecVcdMVRLgmy7jsDp9iHG2NdGxAVDBzjxMaBoY8H5FM69N3gPyjh4FVkLBpvNLMcnQ",
  "key46": "2dprsArEkECRBcTZJGqSVTQJHDKfWpPSHx5jg2hMVUNqHhga9in3P6JZP4LDduswZ6Ud5NqJpZZGkMgPHcRhcGJE",
  "key47": "5fhdTat8fnfTysJqmgNCf2URiFck9yCACDpDbtnv2tVBX4fVkeLgEAFmDXpviJuQHFgfnGZ2EFsTATFTGCb7DwLc",
  "key48": "2FqgK1X1Q2PY74JBssfN8sfAyFJVU8KKsmTXG1cWZWhTqUKEqdR355TUfaJTARho3VicmMFD5DGfDbAQB49wuoYE",
  "key49": "2iWVCPtdQ4DKWyN73LjhZj7hzP6gEg69nXm51kXJ1FvU6fwpeBzzyfJ6dsCP6u2r1sakKcpHL19cGnn4tDbR8Mh5"
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
