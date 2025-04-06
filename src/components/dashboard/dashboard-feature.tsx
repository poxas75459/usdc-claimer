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
    "3kjBRe5Gz6akgT3RAKoN8PAE5r1r9Pj1tqA7BnGVedhZj2aPk8HdMqkLtCNA1L1Ht1QgyutL1axeemVrH96ks5sp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jHi3Bk9FaZi3yJEdcNmXzKKxhyfnewyh23x1wG9BYJg4BX2HpSNgqJjHPHZmNLhyzsNzAc6J4Bj3XMyZdJoZjqw",
  "key1": "53BWqDjGMi8BtoDm4S1MV5fUefxJ35iiXw6yRqE8u5pDLjCmxgs5jACawHAiaFko6YHpvKN3qLCy2kU3QMhQQE9P",
  "key2": "hZxu9iLAJiDhsRFoyRyazzC8mK1ccYKUcr4vdYf9kpSpysDoWufmmYyXq5TP8awi7n7VMcSUGdc45D6SfCCvfgu",
  "key3": "zE4eGCj5GV6wpoD4BoWe9gJT8bKYjRSgmU6td5rvQAta8KcTJ2rqdxAEzVpezV13zou7uqPNR4zKTEnD4ArK4FW",
  "key4": "4QkkMS1ycF29Q4jGpqnRuPppXTBqcXvWWEL5ttsTywGmupYULPWmJzfCcZ6pcu2CX19ymVrKeDnzP6R8evjb5KLM",
  "key5": "5aD55fnxqSncLAfRw2QfX8oKaGkQeSSLxdoE1PUGdLCEpGE9kxLtQKxKyGAzUBjdB6BgrqXdQqNxTeNhnGN2dVzp",
  "key6": "4dJg2Kih58jgfBGAB6ec5EWCg3bpDvs3cWxsVx5Q3p8wdAQ8AhgEpdYXdN9VxodV58jnHMHdh2QnEVP7QsvXsd7r",
  "key7": "4gY5fXf9QTFo13Qwc3r6S5z6LVcstsU5tvggFVVPmMcdNi1g4CWqQLRDQuQ7RDFPApsmAKkyRix36RQe3sV29NX5",
  "key8": "rMU2vnfhyRgQWHzHZQk49Z4NqbXapDYJ7qQoovWbagsRvhtUHHMKw4tmc1FixYvv1k7SKPBHJbspJvKVVHMzBqm",
  "key9": "d8oF2vPgb34UiDp1FxLTpozqLhL8oNvkr21ifxn3wQnrTt8xr4cBwKWh45xJ6XrpqZePbrCXdeKqtLaL6vt5HEE",
  "key10": "44yypp4zMrpw9GQCDwSu449QfdNhZGgQ1UVsPF76JeQTuTQ6pdDFZ9HefoyzdokPpNsnHJEG7bcj7HaWjaG1kyCA",
  "key11": "4w3ZLN4NRJdHUrzN4regLoUxhynBCAhGPGQwmVWjU4h7XXpk1MrGmkwUiLJjLCnijC7ytqr1SbZtYmuD14wMLEKN",
  "key12": "SUmoBUgouyHto2QsEp3aFPDtMY7DUkstVqzDc5neC6s4Par9AyqWzLGrFrRUL61DYEXbxwxe2335xn2eF5KU8Rx",
  "key13": "5gbBd6W98Zx56H7ff4pCmjxxG36PEKq7LQNgCcv78fiQPs344NhUfJ8Am3a47V1u6oeRR6pztbDXU6rjr1b57dDU",
  "key14": "YWptuz2cYu4dDqr256duewegMyrogJggSzmLCcoTdQSvwSSUsFVwtrZejvtw5Hq8LTK3bqGPCM93BCSTJCxim6f",
  "key15": "3ZUyddXX9DAEjYJhVN9zPuxtPf4k8CvV72PtEYtwjJrPiHE5mQpc6Z9z5GsDwjCJpBDx6zRhUAjFHMGkDadinMS1",
  "key16": "yxNWPG82bZfmNtj9TJtoSjtfjgTNnBRKKCsmd17GHmzTUTQBFxgpygRTjwbAw5Yy3DdNJjSyjgETU4r7Kkq73nn",
  "key17": "5AibZNswtaKofcm1m2pTjkcCntNxdNQahD21MTvqT3h6tTzaR1H23NaL8Bi8CDwy3eNAQLDnHcoLgpy6mwgpDkPa",
  "key18": "4XwoKG6wqJ1WTdEPrAr82UUbbnhVghkQLLsZV4njHRQaXPvB8ea2zogXs4qJM9dhZfwbHDH2LhrMED14dMsAqyHX",
  "key19": "5uPjWJu17aUm8iNPTJg9h6GAp15UmP3FAddLAaSBfmW25T7aozBXWaFr5eReDUaLbq2mFSsmhcngWSDPrVAMqXVh",
  "key20": "3WQf2CU1wBsMxdnVBDE9K2p9sV35rjLxrUBUzEbBDJ5k2Ewx2aznmKg4wNaryB1zV75FmdNbNE9p8vQN7madvE2u",
  "key21": "52aT6rYHupxFcir5AycFv7kwYtL1qEmMnA4abEeYBcEHFzNQmrFUFigrpyhN7SjK9Edu75ZoeSxcWwdWUxp3W9CB",
  "key22": "3Hg1VAniVonEGKSbYThrbdLBLFCRYTKmY1eyhjXV8eDBj9GytGxDT8WD88tWBx8LwqdxvyRYJ1yd7Vh93MBAZhtL",
  "key23": "26ZkuZH6uQBSyRwqTcQ2PZMj7qkFPbMrbYqCyN2sAXHPp5NAoUXCTmzB7gZFQNceviuKoc8XJN7kaBHyrUHpAbJs",
  "key24": "2xMZ89T8qZSnvUfZzSFQNtSmKzQ1xqjFvJexDw5BU9sfLjU7Pi2cZZY3x9zDR4zgwPdrmWDoUvsyTDSs6ib2i5TT",
  "key25": "3TNFfpP5FiEGqS4iejPofucsqbEofpPiS6pcz3c1veG8sQyMXMNsgjNbPTjCyJuMC5GTandpUMkadJXUSYiLLWZ7",
  "key26": "2dF1CpvKecUfm2UN7DMV2niey4dZMuY8HUSxdgw8HMfsSkDPZoq7k8gXoXdrkApPxVTLmbqQ9rVJhor6DdSoMWdC",
  "key27": "N73nrtAg6d76orFiQwiRujrrhvR86se5xJT8yAsoDNhkFUDupjttyH98cKhQoEc317XoYNyCfMsmaAwU5zcexFx",
  "key28": "2SudmEKCfXrc7nncDDyty8VXVdWsdeSNnSpwfc38QoL4wKsKGFF1SWi56FbEP1UkBeqJmk5kDP8GnbruyAkpVxgA",
  "key29": "5kUW9PizhMEW394HW1oLgvzec4nXfCJw8QTBv3p2RLue7EVt4QUhqQQUCWEiG5xNdatKhoxKQ9JQPMubhU8oh4fB",
  "key30": "2x7CaqH77kJEobYdzpUtL2aeHDcHLKSmPCzrde6arrS7WCjhv8MT17vsnyAqTcSd9W8bQAw7cDvBW7YFt3WGCgFx",
  "key31": "8CXjnvspEPuHR98SXWzMroih4N2hSeqyRVe1VEffg3tbLRn7teM4h1Y5XWq6ZVnrNBpXBMuw9kfD6YSHSkTWSzi",
  "key32": "mf3KDg32zkWZUR5E99BrYgtbaWtRCX5USwBsBWFVJyRYz4rF8SLFB8Q1vksEFAZmRe5E2EJPTepE7oBwA5D1kYL",
  "key33": "3DMfXKieGkTscM96VMPBchZvjF3LyzEY8UqyFiLNaLWeE2Qepze6o69pphxQ1efjvDgUNQDE7DPNuAjY1cb7dnnv",
  "key34": "2BDwproZaXRRnZGdNyVkuCNFRqtsWDLDcUVGV73xtgn14cXATM9rF3oBPLeamkS7tmsCq3fxQweRLFJPXtiEYrXT",
  "key35": "4R1mAkRwcF6ymEvnbT8xyE6QiVTmfRqqvAad2kNyDGbmj5xxQ7QFXNYLvFdYXZpoPufjTsG688LQyyKXjpZ1St27",
  "key36": "5HLQTzD83tds3r7atVhPaoVxHofWkkjyQYdfFh2AsPJh2gY4JiPFCHH1EVNPFredtLKRtRhKXRxthqULx5B6KuV2",
  "key37": "21YTxnktNAaHre2mY8rMWamYaZ9pMTT6z8b3Vrf4oeNq2Koe2SPF3hC5t9L8PetF8FM5HjFFUUECdH2FyuK7sspp",
  "key38": "4BWpKYdbW8hDyyC8iTwt743uZPt3tqtBmGRVW8jJcbFwyfR7Zy3DrkbFsEnAehsVBB845GiAnWFYDTUVByHBXoTu",
  "key39": "4fXBDDAeDHY2AwzRguLXG82fcSMwJeSsmFMDQmmmvbjMhUoBNUXF1N4UZ9osa9y3V5yeZ4imUMJyBSpKLZkkv42B",
  "key40": "65TQTEYrMS5bJkheCULvF9qYprD6QcaXMnsHRYq62hTRzkeM64R84N9ELJMdtVXeus4qbZqGBXv2LEb1XFq6XMJE",
  "key41": "5AWWvAAxM5QME1NoQ97mrNtL9w8kE2UcmnjXvo845iUXvEgdLEetY5aPgFcPqdRduGS9LPQ8zC1NpwqBG8NRt96Q",
  "key42": "5yJkmKJpuiU1N1gUPPDiuzt2JQrdPoS1XdnEixSyRGCNNTXXmLDDsNANwrAUZzvgvKrxg46id2W2BxYK9eKhBE2g",
  "key43": "rtFgaB2bhmg769RUSB91G7uamKY8WAW5Kou6f6ozV9k8Ka91ZbQV3yL5mrGmZPWfmb7g2b83JTm8JmAxJiDvqhn",
  "key44": "xhHsnjrZYWKxzTK3EMnAGdqWNZk4tRtHkCHMEuLHNTrquqX6wguxGE79Ve7MsG4fbfBFg62TVVtUBubhHLSN2Gg",
  "key45": "4BarnKzxdsvXaHbiuqkgx9khCxBMEdbo5pKzc1kBTMZeuJx1GswKrK3oy4D4fdM6irLHaxNyqTinDybfBCHEVmgN",
  "key46": "23FbHTZUHDaUPpurnfCKbdYD8FSE7iRmniA9QDwjm3dwrZZZDwEwsYvRUZDCsEkMMAKEopnpU69wZ5LS88881zaG",
  "key47": "626hcbY6N5p8mhE5emZNg585SVeEkcPegsQMySuJvyBBJ1gGCARLzNEpdpkNnsegFAwxEQr5LZKxFxPCo2nJKyvs",
  "key48": "39Q4t8zcvWsxmEo7FNkZhbBGqZibMfZVwiK29zkQPHANMkruh9MPptQbQ2aM1Kao3QtkrDbq35yCFdFH7kzdvJLZ"
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
