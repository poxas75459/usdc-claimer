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
    "2BTmAFSKfJB5Fvry4GL5KKZupXE5MrfqhNw3Y9eBGGtX11t4EuN6x6pxazXedb3Lgzgtskq5yBMJsfYA7DrQHgKa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vLToc712n6LYpf9tySZdTv1kQVtge4KtWwCvf3P3X7usvnw4DwMnAXf4MeU19Ujv4wpR1dndzzeqWtfRbWuoqBa",
  "key1": "2gAcMQN5WnRB1bK64c3gEQScpaDKX8uwzrhiFABPdrBzr7Fy9q9HEtQ1EErn5Apf9GUxtMdiJfJ7m6feyi3nZjQn",
  "key2": "DMfbRxTafgGQL3Pjre9xjsVCQU7FtXuAyXU1ngSA1TptbhHfwu7Mt5fuYhRKnaHvS4aaQb9Bk7MvTQ28FmrGoCN",
  "key3": "4dfZRknCJdH6ybiegE1ajWndG4VANURs1TTeH6uwVvNtAfCiR281dgvpNgeacHzzK6rQ7K2SGTTJSgmwXttaCoUF",
  "key4": "Zd8r3qbesne6fXCbcm7iZCDqBXS7tiTy1q2GrsHmtdBtebCvJ84Np7Y8i3rSvie69YejCT9rpUxVLejFgPMdzBM",
  "key5": "23yCtWgyj872mF4nBJBcnJdmJZ4axUGn35qfAfuDMzQM5K47etcen89rcRtxxAjAERpcVmhiryXZdd34MyvkoGiK",
  "key6": "3vHZnS7TEpbEK4FVGXcTDF5vfdrigu6PLqRzSXrzakkEsKunjrgYmSmcJA34ELgPqR7ie4chDoZsDmR1t4hiLuj5",
  "key7": "4Z3H6BsSRLsmQ1ZzWNsLnceKiXScYZCBeTjk9FupxJZA7g9TsFYrHW5Ed8J6vuYfJjESm9BN29F7YJd7J4Vpe5tV",
  "key8": "4CfXYb4NWUaKp1GLZZZz8wrqizS6ak3Q1TxKC427qoo2f5udM2FCFjKHyC6bVEBYcufeUUuX7EYRQjhRXgUEMMaQ",
  "key9": "2kBNEt4RxED3H18cAP1LyKquZCGn8RN8xjSZxmioP3qodiFbopxKGrAJg6S9gYSooCUuYY91hH1D2nyfXkcaW79G",
  "key10": "5apcXgLoK3JR52445mMGWEghibynj3ihDGk56H8xDq7u8H8gvmUpcWfxSGtkKkBp2JZrHdnVQM9WoPmoCpmUXmxZ",
  "key11": "32njLkk3yc5ZAjyM8swGPXRszE4VmFHAW13M2zBZrQ8fiwhdyL1hRGJ5bFVFuHaFiV81LLnJasoeGR1nLeAodmAw",
  "key12": "2uWvahMb93938mCFF41V6TwyBwgFyquX6s4CrsSRRteRpRrf1x3qtLAhFTsbntSDwEiELYvjViNSptPVo7ai843x",
  "key13": "5oNqRCJtmz6Fpvt76Ei6eLJPFSMEjyeaJtVEidHfGPDbcYJaFrytxMSpGpzny2KX8JEdVnK9sEpxxhAKp2eBRdhQ",
  "key14": "WrBA3XxVHKQWEPT6BuhzWP3t8j253Z3LUuARFoiE1g1ig8e5fWhJNPxcw5uR6NwKW7CiJYJkPArppLqzLtD1NBq",
  "key15": "48ohVDd75ycCG4R9d8rXLwr3sJ5u48Mseh14xqbCnU289BSXa3xAaZvCvhYreiN7ZYdffrnXcZ8gcy7NrHjpX7m8",
  "key16": "2ewqjMKKmoH8LncaNcN4friK5dM6Um8SqQKmLQ6c4ynfg7Pc5FdGNW3DvDzP4pzXpGS5ugtnrHQEBhBqpeh6D7Dn",
  "key17": "4cKCHnNuDsmvGk7ZocTDzPRKrv5cuxTwFf1FZ57A74JuG38Kj76Y1QfW2KHqKXR4WEbZ9tvTE9EBvUrw1qsHyPdp",
  "key18": "47fgSGMgyAp2NvMZZeYvWM393tygA7mj8PFMLv9DRGJTjYqpQEtQ5APQ7Pw9jQYsEfhUCQb1zPJeUZ2dMWrxNWSi",
  "key19": "Y4k8hcj29fVpE2juoDaNmoopKSqooK1spJKZMSskSgnhFaV1U9G35uxe9wv8YEL6vHE8CANbtVtuR53EkbvWR44",
  "key20": "48FY1Kads5oKiCjSWZ1hHerfYN4hKHCtdbLuA7QwADFE55xjcvFgiZzLBtyHE6VwADn4HDorTyZxmyWYjBfKYVFe",
  "key21": "56fLADhR5LCPaEKnGu6wTCY8J7uZX9YZ2n1yJQjzYAHyAZPWdmMd3oC95vyDnkJSUDyfVtfiRF7dxdtJhHPNTBB",
  "key22": "5JFwfMwifS45JRiRZWDFDPz1cSgDD2V632MSW856mpGsGueM2NkBVYgenjeBvV41eMF7xAfvdc69FBxrzBKYNTJF",
  "key23": "2Qd6SyrBJjYf1TwZcvQqRdYCHF7trdbVVGc86m2h4YkSBrtqtAyArac8pc2zokbYAHAzKSx6ubrDXRNsKR7mtA2w",
  "key24": "4ddP4unVUyT3x58iXzjP7vB6PeWyMuLxpcUzC8xMNDBB3RLzM42tc2k9W9aWA4Ez7KacHDXvbZRJ8vfEbFZBKzoW",
  "key25": "23GMAgnocKjWnppmkSwE3PQsFM1rzNTpNmvsVsxc8XR66XitT1GSwwwSbNADPBU5UvwXdZrtdgRSMPWSq1BkA9Ry",
  "key26": "32BpHfajFhuQD4cDrU6vytoN3B8P1GC6sTswKURyrTG2j1oCaj5zv4cmwo3rmZgEYcXeH5BVFBui3mDyLerosFwQ",
  "key27": "4Z9pPNwBqrtpqprcVa1SjU1HyaSQSFXbaXtXgrfkRPNvj3ecB79QTLjET5GkmLgrjMWXABJE8THa9r9Khs4Nt7xz",
  "key28": "2k4wo6yrEaqBx3Yvdhsib5tyiPd4ysYuyFcy2ZkNjsfcYtuWdSsAiT6RyhrHtGWcdQ1WhcEUiW1moTNmfpSVnkV4",
  "key29": "6179yHTM3ZDg8AdhaBr9druzwRn9pZiap7atEDADXwaPE782BngggDhctEAPBrhPpgYqzCY2E4Gr5CXcMHFG9FJM",
  "key30": "2R2jGsEEyrJRfm35euz4QVfnHEjTajJXoDB25oSuyprC9g9N7Fos5dJHAuMxjRjYGc9iizQFDCPTmEPboHwhpmSa",
  "key31": "WZ6scqqjfpUCCVq9duHLsxqgVJtKHU94JTEGruFivWDDmFAjMZEHmARcV1TjmGY3x9mjdgrKjrf2nnawkU9Cg2M",
  "key32": "5Qe8TjqbWJd3yhYj74ANhAeoYDZ7ntBiRTnPVU3XbZ48Ch2vygyr5yeuJ5k4Df27rTSCLggUS8BXkxK1y2ELRTUS",
  "key33": "BF1ovcsbKhSpFWjS4CCL7AmpewGDRFPQJmQZkb5xi68zYcrrgNBJEUTpbkP2vcgUCQLi6SJy5LDaeUtk7nqxtfD",
  "key34": "gCQZSZutzmHD8a3FukBgULydikqnaGwc5WVdJsP1s5VufFSGWvxHA8eRWwxzsR6GduKgvyb3Vk2NzzomCkhPdD3",
  "key35": "25PrqXm5U66LF3QNfuM5nwem66XWWvz1KMdMjQSxAxQMvJBej745qu1tpwSrMbgxkSYnoRVmvNvzvBtUVYsVKxPm",
  "key36": "2fCuveZArWVPHwqFeAYAWXisfZA1988HEV2LxXRTaZBpQrmW1DdfAWpdBJYXBoRY9At7ZvJyZHKAQ97mWkjEunzV",
  "key37": "36gfMLm7fsTpwabU2kE5EtXWQv7Nzzrq88hU78EsopTmYQhtZq69gu9Z16QoKo9Z7ahc4BTxYNonQyTtq7HS1dk4",
  "key38": "23Mz5czzUSphvLJdnKZBgyPbduRYTTsfVWiamma2LuYi6kqJEG5poH6eXN8Ysgt92Cko7qfvRBacc6yP7fapYuAT",
  "key39": "45xNTHyypmEzampYnDXyvecyh5PuwA5rNdmTuebLBv1aoRQ9cUNyXnKk4Xx9T68XQTatUZJcpSYY29DXj6XBZZe6",
  "key40": "4fmvngGbExnDwbpX9PbDmbGciScEmRHfxB9gEyGL3jBregbzyfYp5VmfyTzsqFVz7tyboKMGYX3kSrNFkrT92jiD",
  "key41": "3uggMRtvv6zPgPupKA5MZyEovoLz4ZVU2mDDYFfppCZ2zyvm3z4upyiiWeWodFk47MMphnMjGzesNVV7JvqdTQXB",
  "key42": "5MiG3146bTS5tDwNUuyBNXpkqjAWXLMX7JVmELUpmddwJey2Mp8JND2cjiKnyXLXVhEeTbGs9UeRvEnuNBAhUyXP",
  "key43": "2CkBDs7oWhiDJWjftTiawy8pgKXGo85g4zbFBNzaXmqW9sTZ3HSSHgFyyq8Xojkd2GX2z5pUSUcZz5DCb9g4Nr2L",
  "key44": "4tfemWHEVA1MxbZqH7ywt24UPAutXGtSLqu5HYxJsqbvktXfQheQq5iQCwh2T4CwsbPPaq9t9u3MhGKeobhkEGLS",
  "key45": "61o3Ae218BGfUqUGuJsnSSkKKLNZMBHSuVGExPRXGNLZKTLtpvNCChnBrAHc56jbXiCMfZYUn6M7BapMbtCxGYK7",
  "key46": "4Rx75sCw4jvKjsDcNiYcB5wjcgu1NUhkFLdgjRroj66XL9Wwi8tM2Fdoi3vTSZAoUUZE6EKnKvZjT9PAgoS5Q3ij",
  "key47": "5c5xDDTepmoSrj94h8zbmo8sxZ3y8rrqfJTXG9qbHXT7DG9amWoocxvNag2BRfbYqfpX2USvd6pukUZjiEo5wcdV"
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
