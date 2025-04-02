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
    "5LxBSfZFPxSte8jHfZtnVn5QeqV1MtVn8x4ZhKWyg16sYvdR8Ejom1BY7v2DsWLoHdBjgXazAHWZbM4h7WNVCBCS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "215qUV3SLB7fuwANuvwauDeQC6qLxX3Fg1NKMLymUvUMW3Qp7BG5chqhvYqb2oUh7L1TnG5RPbgj3CNv2SQftcNG",
  "key1": "4GR7B6EQGHMPNdvcWiuS8aBs5LoGTmR7AHn9NseRDoPS2v7expEdwH5e5uatJ2fVRgj8Pe7gHBp4LYyPPiubAsWA",
  "key2": "4hjuxKFnAvT7oyGDU8LUbFVwNroDhf56woNpw9KPfc5puHNm9q9DXcspvj2yJXxfkLLpBMrh2BHziGkz326aj738",
  "key3": "5Syq9WQfjxRT8TPbMSHXRKNXmXoMp2Z9X5Z6cetCjPKqWno2sAJr5wxYhxfegGX71vU4BYaXjD6ExdHqmnqCfJFc",
  "key4": "2b2zhwFrAMTftCENftGb8VY12ATNd7bHyHPYDhwitfxXVjsw78W8WmSPDpFm5Nq8f6a9pNKUJyV2ejDYnqhymZR7",
  "key5": "4a7UtbhLxrAzU8cqxYCRs4p1dtheDnzRWEA2RxQSnFZrhNRZEVBh8xAdEf5dDNq7aRVv531NPGZWz1jhCL4vaj4e",
  "key6": "3xvxJZySX9Rw9sTaKyukKYff6eFP3iPSYWhJuXhmVzmZiUo4kC7KVRT9x3ZebipdUkR2fDpuuCYiEwW2y2sXEPxG",
  "key7": "YmrcnbcNGNeaMQEiLNB84wBAUuUtZg6rYjVPjxjuhpM76pBVFfyJ7rFv4QGWjDCGN4Z5SXvh9aBy7mrMUu8r4ti",
  "key8": "4jyyn6F1bhbAYTCfn8EsuBUiJMBk1E3AW3QtF3y7HgdXFHk3fK8ocRzY4DnpkQyZFonGVoBZiVXDGCbucpr6XRju",
  "key9": "xAqfKk6SfGcXdr5MKUVUv2Vc5HuSCh7QiSpjk6QfqVbEL2wmXaezGSngHxbLaKryPeNWvm74dDDaNZhe6Jfbmyj",
  "key10": "3FkhiAxgvUV3ufEvtdFLY5coALqPwcb7q62F6chBtApvdAbxMPp2S4EPRfEK1dgDRth8PYU3tSgGsL8oLZV1ZBxT",
  "key11": "28L2acyi3W1jc5SQpnvZ6tBxaSr6K4Hg6fjEAo8BgBe2XQkicY1ijhraPEMwFkKuy5McqkxYnqmwksFtBJ7wmzSm",
  "key12": "4aMZ56MD1o5BhjM6oGYYbG1kj6zRUGjEFi5czC4CVvcZEWTfjBKgGNRTw8Xwyh9gpTVTnSFiQU9hAQxoSaE4Neyk",
  "key13": "2aWNAbbEL1T9rHDTDK7iLg5sqkxwmEzRv5aoXBPPQxpKrPtRKqs5AJVZUMawoBXx9SYoLPyHet9aLrNSAg2f7227",
  "key14": "3RBnwxsbY6mgYfwdcT7WRMat9oMq5pUvVEJTvT5b9dERmeKyA1HLjEzf62EtpNTcR1btH1TpsCKToP1tcV5WFnFe",
  "key15": "3HDqBFuZ27Z4DVM3F4Lgg8FSao7icvjcnfnrwq45Ka6VRYiRpYCL2tBchAjjacFYt9988pwdevHncYY3DaG97B97",
  "key16": "2R4BcVdwbnEQDv91YwMQmBnChWo1nG4sCTpLWQWR19M8TkFGJvJQQJND3A2MMXG5XNdWDsq61iEpZJfiHTzKBpfr",
  "key17": "UuuFWtF2EYFSipWNsk8hG4YPee55gkdS1UnyUD5BoJiqmaBwrrMsrGaWWNdG4CbWGerGrd2VS8cNFe9tZLGqN4q",
  "key18": "qH1YKxuqYi3SzmMUWjR2GqgwcWhuH3W4mZdDnURxwL45KT6BjVmvhvqp87fT8HZm4UgsQXSHWL4eykCyP1C3NrU",
  "key19": "4gHh1tNANxBHJVgzLMdkoR2eMecvYANmkHaTazKEDkThjWphyJ6T9sq3Ebtxmr9DAkkPodznMzJ5VbUxJoRuf1KB",
  "key20": "3ExRpbsSzTmeY1FXF1AN41Up5V3NqzEp2Sg5sh6vg4g5Lwtue2JWTC9xgse5WFKuJwk7GgntYmKWUCXVmEwCqutF",
  "key21": "2gdudP9EuK3Zj6FADsrF5H64XxLGVVod5CbcJbmPqeBjL1LYmppMcZfoHkquQvT6o4KRbKqsgX4axzFCzbWrK4u",
  "key22": "2q4S6cM6juayKGC9xrhbwchTzBazSnqqtdWZkLAwH2xA58Va4sEiGyPj7q5fiBptyY58tDv5YgJhRKPAz9AN4kuv",
  "key23": "2XWiBoRxYavTiXPQ9BxmBwxP9NS97GKgR1eYaCmAHs7tT8F8d7574f3PXhcr91Pu71UQQYPA66UDi1gbL8sVMYvm",
  "key24": "42AoyqfzU8x9x1YdpuoL3PWkd6aPrcyYRdjsWv4gQuRmzRY2MvrG9c9saLduioJcRFDsLu8r9uBmjKhXKuUWmai7",
  "key25": "MXm6hhMTPnhXwGvva2mtFKWM5eeR2feRbmbZRPZG6yUpXMqYbpmdwEkS41W9Xf8u3vLb6keqRKkJmnzBiU9dUeP",
  "key26": "65Go66bztSsVykkxbPLAV1eusy3eqEeNSeH8cu13Xum5jYN7GzKvB57ymGzb8gCeYx9N9ahoDkXFcf2GCUUsN6wK",
  "key27": "3g1MVYf3hwzs6AnWaTbMVi7hqCUL5WySM72vqWyBp5DbiCxukcbt5rVjLrETxEzj1pf9Pr7rUJ4wwDHnG8w7Pjsp",
  "key28": "4B2ZKZS1Q7htjttjsBmN7WA2qdBc5vam1ZKfohz9gFKMJsheLmwgVK3gdNcLnbJydBaZJpjP3DbDC3TvrBySWT5L",
  "key29": "4XWLkNmZDVfRw8PHqQnmd7due8G3esDjTdw7b5XJ3ArwQvyo3Y9Z8pYxqnNukRB2ZVLoWhdK4A3iPyD21t9F62Kr",
  "key30": "4SXDitBju89D8KJQmFuQeyxnxcZ9S4ssZyepn52F7JSdDcrqYrosVWd13NZCMcGCwu8QBGKhMMeLhydQm666RjZi",
  "key31": "4kaviQA6zo9qRwFuSD1AWNBTh9dFrMaFhNMPSsaWwMEmnR6GyHpGa19UKAuvHvBq2sNzCvMijuPNdtNmqJei7QFZ",
  "key32": "4JY3reo2RMjhQCkGw7PjEoeFkreNSPiuWKxXA5RPCAKG1iSxFGZgPuvunXFf29QqbzGzae6xM9D5Zxj2pRLvynC6",
  "key33": "HHePCQumnkCxTLzyZkYUjR8XdV66UHid3x7qBGoW3EsGEbebYnTgfCpxoqykoVd3d67XXRpQS2Q1q6HkWQqQ89y",
  "key34": "5RcfqP5hz3JmPaFNxNeCi8vpPsxeQbpcgLN1SyuNfgptSfzXwn8in9NS4aX3uaV2j4ge4Tp1w7kwBYWWyGYGsJ8U",
  "key35": "5DktXjiBRF6oA66zNNvL6VdyAuftb5AHpUR368EFmC1ugKCpza4jHpWQzMqtC85LFSPtnQgKPXucugHA7TBECPL3",
  "key36": "4zh3VoLe7EDCuUETfznTkdJUwy6Zmqtbiw11LoU5n2YQiyiPxKjdjy6gH4o3bFAXPe328airmv8kyzQBAH5Mq3VL",
  "key37": "7wRssKJAq5i6jbEjQhBhJunYLJcsLZxx9W3RihC2J8hVGZUCgyb1YvjtVzhkrwatQJH4Mf1Lt1GLCbZmQ9QzuL7",
  "key38": "2qwvZbiCSi781Txd4YjsTgjg5cHUquUc6epn11Tyy2vJuC57iXkrfHz5FzbQpk6KTj9PHfLM4x6mCPBHJm45nLMz",
  "key39": "2xrZUx4HhVPiNaiQkHjUyHJgwaBNApJBKwjawivr2korDnKDRs4wdMmRKCdqH27xn3mLwjAaJ7XbFt22GHqK4JFH",
  "key40": "2peLsySutyQPDigkVTUD2HEEbjCKF4SsxL35Nf99rBKkpoDFgpShQxa2kkZiEGBZxgUpULLRYzuMjYvTDj5ZYd1A",
  "key41": "2m8Zzm1YWiaGJMK2YXeShsuYror57EGhKBsY4pGUcEtKAscJzz1eMaWPypTfsfCM9kG3MmjAbk8xo7ZP2hHEn86t",
  "key42": "64KUwjTceGbwZNMt4KWviDuYqMYYuDMeasCpAWDXQdeHacFYfSnd2WFM1QeCEGrmuTbq9X96NK8cfycaZdPeGF9b",
  "key43": "2nD7sMmjRL9kL968hMyA42jUq6aGsoYokgHaKzR9B6MBU57iM5Hhz13ZcYa6Gco9XLpWm6t5pPKoC4RPMnpA1q8V",
  "key44": "5SEjTk92XsJpQyFc3jvh3JjBuvjC16Q5jurRafGXGCzDL26f7qKfMiU3ASqEaWj28Zg2MFt6LYxpxiq9CDTQKAu5",
  "key45": "62MHQQd4jqjLxsD8CAw3oF7wDJQ2LmbjuxwpDFprEGKDkeRXGKgW59MVS2LSstk64UcdZCLMg26ZY4iEkrNU6neZ",
  "key46": "4o9bBcZGmK4mf8UgrThPbrnZ5aw4k4BzCxDqXxry4ysxKpymSukidYndyc2ksuVSDukXFJ18KntjH3JAFFBXm86a",
  "key47": "4FvF3GeAHknDgB9oAv6c4YiHPxj4VH7oqzmRGxT4AzfEgShpGmLC451kPQ2rVqd9eerapfus56SzNVuvADAEm7mr"
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
