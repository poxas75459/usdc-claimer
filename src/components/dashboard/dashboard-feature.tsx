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
    "NLYpiMkjQJMrBeTB2nvqueqZNoAhsXU7YYApfj8CDtLt61avm1m9w6K4wgRuRkhyRzQG3rXjBWDLKCAftunNqLn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GQenV2PWEPjcJmuwb7annzzZg3HXL6om1jxHh3Ra5xEoJmnvx234ziLihq77jkrE5j93koGfH2QntKfFqU2N1Yi",
  "key1": "2gNHxPZVVfnSpt4QsdkHyxzz8gqsnfJcBopr4qY5dKWtms7GL9dvCELyAPZLiv5jGTgzjGZCYd4pm6nXjaJYTMWg",
  "key2": "2W99RPC9oZoWeUZN7vMgjDEoiH3u2dcyUc12WPEhWNLJpMW43gxio9B1kZCwL4Uv98EJKpWas8NoNWm918pQQaG1",
  "key3": "5m92YzuGdLfzxszuXsvzidmXH6kKSamBPLEukJiTbLgU9V1xbfwpRqtkiZ82zkwFKBAHasXYzGSs12APhpcz3YpH",
  "key4": "H2em4HTK9vSh1SiQfm5exHiGheQ4Fe8XX2pRBfttok2owvXJM5cCZ29xEZneVJvdHNpS77mBQFBU4BfF21Uz5pu",
  "key5": "mmQh5xgT1tUsrmqzPqjVTDhwXW3mh8gM65FcbD3WopUir7NxdKtJiH7W1c4A96Y9KewkmziuLGDpPPkr5ju7a3j",
  "key6": "9ojzu52Yd673o64A59Jdu8rwuHZJdnV1va18jFkSk7oqW5kgQEr8C7aQovgjL5QPVS42MBnhPZSHZfHGumFsrdN",
  "key7": "3e2AA9fGm5PV178rnZ5EhkwoDjgAXpLxKHwB15UkHdFk78YeUyxFTaFvbJfDxmYPMGkm36Nd7a6VTbBLCGjgQNM2",
  "key8": "55sfd44yCoJtDVs5Uy4aoxMfmJXMfM43SCyX58Zrib68Re48ktc6aefVqRXbiNkr3HvxrLXRXbXoE41S3EQq9KJZ",
  "key9": "58XD49Y9A3J52NzBGQaxn3XLRUWQyWyRJrLUXoQUwmuaijxCx4BMfCZDBaCs5uUTBAUM1hKx1Bf8fcNtYRjenZcW",
  "key10": "5D9LnM9Z4L1bHpug5KwYbAKdrqePC7hB2zArh7vazLoEdqqhbB7MFtnqhaEekQ9piFAyhn9xpmKpyiuW867z3ekR",
  "key11": "4i15jGDmtMzcPovFEShX3b8SeAKa6FPuaQ4tK6m5qDfNVhwcu8jUbmz8cDajdbkuk88ZK8gELiBcMZ6GPuvmaWma",
  "key12": "2ywvKs2n6s7kBpU79pFoVpTKY6zPR61sDvJKRLM2D1ipU5viUoNq9pMdS77nzPxS5Tr8o3F9UVTnLtjDR1x2XMr6",
  "key13": "3yMVkAvnCKUZmevAS5A9SEk8BqMzxpxQ1x7XJAhaj5vZn9aEc7nDQi1sNt4FKpBDPeUybHqkFrVt4YWNPa8MCCgc",
  "key14": "NPbvB2NnfBda21xgt8XpKDVzu564aS4eMCaBz6rQGyUoVKAe9iS7c9d4ERwZzC3JwujjiBvbE2eDUArLbmGSzVt",
  "key15": "pe4kXaZVE2fvxjsXHbLqiQ8oUCocnGx4j66NY6PGauNRhu38PqvLCQRzmvSbhS2z7LgR2SUZayG4NXk38cbRgGu",
  "key16": "4GztqfF2LNYpRhytwQFxHRv4TVCN9M51wKz5ypsHSiG3Yaf5ssxEicfPG3zwwyLsNRiwBLFam9gLMSSJQmqSeWzW",
  "key17": "Mkk7jW66XK4kZKVdgq4ohgN2cKunMpoojjuSkcrmtwMPKNtohwqnDAk7h4orJ1QvT25fXnGLzN6MVsPB5V7XEef",
  "key18": "4E9veQMycRMjKFX9qsNuH5NioG1oXN2ESbBPK2b7MzFmWWuM8Z5MH73gYf6rpc8RqQYo6TC2sS3bvfMiN8CLLD1p",
  "key19": "ouFmKVMrxXb4ZRDZq6H5CBHzcc67BAGdBGQ8eg668n2pDmHR9eqHy3rYauoxYYWpwoZBg9Nge8wgXGFCkVZAe2C",
  "key20": "3fXsKdp9oi5zUeJyjHaquZsv3rwfm2NofFWY86GCeZZsyMU3hz1X7FYgxC49eik9vDK26bxees5JVSYaJ8n33nzn",
  "key21": "4w4vNYuTBNHLv1ngE9832rqBzRLSSAqTaP5iV2FieqFiiFtLUwjh7FWdQT2EVKENGYpSbTYPuMnMgYrxETV1xhiG",
  "key22": "yEk23TDVuMTwsC4qgGdbJjRvvUnvVspZDbrK9hJ33rAQKBgnCSjD6aPJKkbNhFHV7MkCT6uJVHmdgGDGDvBoyox",
  "key23": "2v3o41PkuT6nXee7NXWmkx6qukdraDD9rKXmsdxLJzVoCffhdRzzUKjBwvb7iSL7oNdZbEhFv6hxDYnsKNHXJoHK",
  "key24": "5XziCJaPxE87aR9diYSg26476tfqL2WHeGNCVQtGfmupPy51CTZ4v5rUi3CboZgJQmV3gN67vmGqXSsgr4ckqDL7",
  "key25": "659gumdLLpvshXeQxHxzAZLY68JUqU5xYP9HXRxevS7f7nyC5xbvmczg5X2ipPw8a5pkuwDM3YHmMQeF8rRn6ZES",
  "key26": "4FRAkB6EsSyYgZXS33Yyo4ttJTZUxTfkZ8drMV4HGAoC4VyrGmPxoPu6rqZGZWmjxKUxQAZKVkKzPhXhLi5Z4sJN",
  "key27": "48eSC61SLVmkkS2CFnnPHsxCgjzdDzHTMmTTaHduKAvtMr6T9TVCz7F4QCwZxBvxPEaUHgQEvBruQHTAoKAkqssf",
  "key28": "4GBfuqfQkZAgA8xa1NNvYodnkrJAjBQ83P6USnYdLx3j62Q1q2mDF5ZjFAvNofxjiVdhweiFNdyfJVbksaovWqwc",
  "key29": "4LDRDZ7qR6HTXFcPtUXBhYxUNKbc2Z6X8GtuxUAfabdtTCvEvkZNa6RHAeutjYRH76Tfaz3xvvg2y4VGCRtJbpHz",
  "key30": "TDsr6LnkSdQqMpJZ3GJR8PYGcHhVzg2fw7RnNoKvrVLw7w4sSGL3Cx8iotZMfravipwb1mLS8HZQtM3fm3oE87T",
  "key31": "4hc6tvXv9xn3zPrqcTLSPH2bqxMowPNjssjFDzQDRi98iGkrQtALiH1p3nhBD4KCNHHbAjq4eL6Aema4dxkwjCpD",
  "key32": "2AP36iXBkB9eFLfU5oj5KMo3NyYExygFLoSgPF87P2LPTtuhc192D2wc2PhzNFgCrBt5ZmnssuyxzsDLGsBgj5QA",
  "key33": "fdHtgTgTWQDS4as7kynzSxvm6ReeiFp83shF1HSmLGXEt1Ss5LZ4GqhwbFDWtnoFUcb267nGP4zvfiRDXKsZn9Z",
  "key34": "euy4RFjy7v5mxf9XaQYEnfqpnMGu97F2EscY3YKr5KEGriEQetXzUtGvRD8pare8h1jiQvCbwxH3dBiNd3f96Ua",
  "key35": "5roFZDCx9ng9VdjHJrB6Kk34jJ1sH96n3kJ6owomDEuEq6Lm2d8Qnib5uVVBFffBTS5W6Euw8Ms7RmE8m6NuUZw1",
  "key36": "3bz2yqVyE8poLbBkPHGmFKu6GCdGQ6FjKY62DiA2SQ8SFUc9dQwyMNxb7nz5mh2dk8EwCcfaF9ePwj9mAwuEB3m8",
  "key37": "58S6xeTgswe24xyUQXBZq23R6hpnvmyPdPCs6MB2JNZvNFFQ2k81hmg6Bve8eH5RVcStuMHynw4ACiBeqUfYGpYX",
  "key38": "5YTJit2FQ8AwpJptTTVfCS6pK7caxZkoqw3pkvnAeyX1KwE5g5koXVQvXfR8pCGxsTCYpmk1VHFYXAu3wTX4VZr8",
  "key39": "5zcvRWkYR8aKFZB2s9Df9kGhPfpmfbgT94SQhdrCBaGPLDxRtKMS96HJbHjAiid7DSCFqrPsuPoiXmVtNc8Shm86",
  "key40": "3G3QtM5d3csqXcqM93sBBXpDEChrMXDuq1NcZWfW2ZtamcsUXjgz1LZddWLhWkireXs2w2F973XwEHWNnVVbKpsS",
  "key41": "5puhxerFh2rAabNmegsi3V9PRHxPDPaf3eo8jKHuHK5JmNfr3wFgDGCKsd6P8LG1tiCqb8uhRRRnjsTaEvWyE3LD",
  "key42": "toYqyrvGUGdYQT3dM7syP8qKCSwHMY8M4Sy8sNJT9PinjkrceJoBGUBTwEUJCPuUcSeTPwSq3zxXaisyLY1Zrt3",
  "key43": "5TBchzcwDVZzuNhVSdgfS25RU7Yf6yWg5scJbpSNxfUxumXWJLboqBfSqbJtMXZVUL3Da2pev9eRBTtNE9fPU16P",
  "key44": "35oMapWyoHypG6qVVv16vabUuZLwrxRUZLxcVQM2AB1aYcu57mmgqvKTw5y4SMaxnWuzZDTx8vR8AEfAisPY99us",
  "key45": "H9pS975qaqLK5S61Pfi8dRCJPK6To2QP6CyimhNQAmrmWRtLzi392yhnLruZhjBeRM34TK8A8TZgX2on4AFVaeS",
  "key46": "TzhdRhM2NiowwJuqRHmnDhwFv685tssc4XPVB8p61UeuEViPVfLrtXBG6MZHMzMRhafNgnBHW3TupE5CpASdMVE",
  "key47": "5Qme6szTjyxp6KJHyBHLiJmRtfo5xvPvJXRkTSpwW3Veppko754UuYqAqAxrTY94Mb5SygPRtBUtYf4pCRsvxV98",
  "key48": "29MxGTZ5LwaSqeyCqWFjfvj8w9Dcpq3JMM7ysC6GCycTHRMFsCr1hrfJJZjixsfBJV1h35yGuk4jf69p5CZsVrh5"
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
