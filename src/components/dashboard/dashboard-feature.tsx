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
    "22UiqiH1pFboybMg8dnCo67rczP3uCj34hFA4Da3tvik6t8v2Z1HevtPE2BXFqEcBJe5DWckeUKMYMmDXr1RerjV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p3C7VmzsdNuLCCQckmzSq4QBvuFVSDgFCJdp2NW11rawcCLZJQFV8fypNviVZcqx4MR25Uvua7sc5oCxSUWB86V",
  "key1": "4uUxTzUgSfTtydQsDDYBdrE5fBjMtALFYxp1BZEXXQDe92jrT3Y3jzYg6viVobzokEdyri8Msco4u9A6RRED9Kts",
  "key2": "2nVXaJW5MWNqqfq69zXR7LiJzcjZMgQ2zCodx6j9f9tV1CVJ3aWfDs5zu6rAugkHtVXAcNs8QBqwDhfuhVVQiT9X",
  "key3": "4zipiZsuGnEuSmdUZ8yuRxt2QEwMKydcTMR4ePE3DcQowrBv3z9jyK4iwfgJarfsveKfaihaVmpxqMSYPgH3YDtP",
  "key4": "2Zd9Q8ABarZzbPRSnTzjvJpkHN7XriwwNLg9QncxxiRziui3Dfkit7ygp3fJFHrwEBGct4LQbU1goqfi55SdH46h",
  "key5": "B7XNzQT4sJ3BFWr7eCmniMFTcNKkcSf6CDzWfZ5TQvoh5pyjC2X28oAnWZL8Brkb7BGFBJEoKhnp3hawcn7szMV",
  "key6": "56aYMMj6v81qR1tsya14btUjp7Kc4CXnq1FLRHCnrCuezpJ1ccefz23G9KL1wNU3oLjkdsDg6ebAosREH6xKwWt1",
  "key7": "LPMJ8JrukZxRKjZ84rUeB1g2yCBzg7SBEtmtAnhEZCk8qFWQRchTiDG1s8ExkX52QMnZQ15wr7PcPMtCJ88FKiE",
  "key8": "SajLmcYTxSxhZJxqLt2tPxMbgpSvYARuJmaYC3Gqi1igmG2H6w4Tp6ZtHjCrpDWebkKaCb19U9dmhtDUupWEs6P",
  "key9": "5yb9Zp4fzU7RMyq5wzLNVaxpAvZuwpdjZCa1FQjXNKsr6S37WNByoVJycNYtKWAWWtz6NhajtPpeJXFS7Svf7r2F",
  "key10": "25NAf3zL1ytXkh4zhhnoLqmZRbYtTmKBtu3JB7kBdc8KqDdr4MP1GaNC7VC5JeszpwE4doSLL6JkBt1FLTns7Ucb",
  "key11": "2pu34pPx11ZiiKjvujzrnjd2yyozyCf7e2uEjybE9vjePMpXV3yuiz8NLBVHAuRhCG8cUGUkd7qbAjGeJUStxspv",
  "key12": "36SggivSwsUUEtBjszgnPze1MUJR88EhJcs5L6R5YP5fp1jPETXnNsU6ko3dhzCUfeDu9SAenqU4m3HHgRL21NJz",
  "key13": "3StKeZsPp4N4NWaQQDHJxHrpHbVMawNuHJjmcphXXfFWqFwvoHo8RMX3gbAALptT5GM8rDewYeU6H88JEKmRLMmL",
  "key14": "3Qm56ir72WWS72dqKoctkZqWpaKMEs2Bv3T66vsGDYjjAr4KcjJLPHznSTJmVXazbFvniiShT62wtkpAxacMutbM",
  "key15": "4JVbmcr6AAkaqePrskmJpDn16qkKcJFtcwUm9FRwz6TEEQYCaZq6TgvoGCyJ6kbkyPwJraXrNqiY4vZxa9tgjUEC",
  "key16": "3NR5zUdAb2NR5X8H5GnzXKNNqoUBP2DmgbKwvo8ZNYp9VQN7MCLpMhTuxXs7BhqCRbrxtotz3KjtKuX6bcnpCrDX",
  "key17": "5tQLoVjU4aWyjvdy7HWxPRdXGdYiqQXjkekfrfWcnva3AA1tdpHGNcEuceXRA38CCCNTEb6M59gxNohVzmH639F5",
  "key18": "3goybu9HxzxW62mpNKvet18XMHBVxq4sZdMk4ntT1VwHhyR9BJqJjQffbupibexRuGPden3mF2AWCMsZCWDToyJo",
  "key19": "3Nz5Thgs9ktLyd2x3Pt8mXuiP4KRGERsJmCFKa7fm5zZaaDpm5zoVvjj5X1oe3QmRfkpyEs4bqc8qc9hNZMLVmak",
  "key20": "3npUH5yfvHS2xCFa8pxxsom9ciYpcYkP69Wo1D2daadie2kHU3qNk8GoioMfdSZ6n9htATLQ4gwkqVQtj39ZBZN9",
  "key21": "22XisHNZ2Khr7BBCqB2Yz5P7vY2BkniVNameVof8KSMW1zQVc7TT4NUW1HXJNa68Q2igdiwyzq1wVr6wFkoFfZNG",
  "key22": "7qxoc9oJDvWj49CrpBkaXWtzrTk4bDQbMnDQwHEXz5i9QkysGgFfHSVsrHDokTYqV5LPtw9k22hgyvKyv7WkWRU",
  "key23": "5dog8HQDxv14u8HWrXZKzr7oYMZEuLd6XuDXzfBK956eazUesdpCQcZ7Yu379zZbwhWX46F6b4rGswo27Zse1Pha",
  "key24": "2Pwxcfoxgn2XjwTbuE44UyFmSevGJqcryYC3GrfoSVZRV2P4C8cUUUCe9by4ihfosKCbmBd3jMb3Xou5KnvmeYcu",
  "key25": "awKX3nYY4bvpDSVr6ytwPWT2qvMmY5Lw3Qw9s9qxyCsoJh1v6S1MQn7DMAhDwtsJuFSw3H2onHWi74H4q1EUq1Z",
  "key26": "3WXNfmxtgbuLBY5jK4YagzDiqQ9yVVaStwoCeqYGfqjMLvuJ8SNSKakwfkjhhTU3rg1XKZwpYoyK75ivmCJX32vQ",
  "key27": "3LR1hmYKVCQv2jY16tev3GXwvz3ZuKVNfyMeUkhu7bmCh41ScKyD1PbSZXgAcyVrQVppHBhqSJNuya8xFdnLyPD6",
  "key28": "X6DFpS7oDHd9fUw7Ev3BEeGHu8V5ndeXD8XzF6aizxMu1wPHZQzCHs2aSB978Ya6mBuFeZoArikRJHRz35myVAt",
  "key29": "2jqgWt7aubuAYXEWcTGVzidqryySxuJDqkfev1zGSfDwvfJrCm6YpeejHySEATZH6DbfAobPyqietKizpsAa5WN6",
  "key30": "4oaCCTQTehEGuvzHwqyCawfP4RzBq4297pEbAzbzgFknCDaaYqN6NhHocsq16kkt9nbByoKgRdXHsLkoSX19o6p3",
  "key31": "445KTENGHDARwG8BLdZfV5Y9wnyraUghMSeWHMtZoSXzWbrqJfPmmJLWprwVh5YX5mfM7tEnjAXLfSNBxEKvz4VA",
  "key32": "2SJC3snNuTmcQsDvWf57ECpbwmuARE5nuVR8YxJSDLUcw1m29H39CfLKs4yYE35VxfTp3S3oZ9mvYHvinTCgigU3",
  "key33": "38oWfc7rsJg1rxLm2Bi9BD3gXMA6CMcesyBfs6vZVZQZDXhyaaWzcqUmTYAc7Qtdj66zVD5Bu36yGA4vfkfWaRzT",
  "key34": "396a1KMuW2fks2gPe6NfDFnieMZm9phudcpWojHprWovkNobumRsXunH7kk8awfy6PJjx4dE4Ht8xr3mFD2rkgyn",
  "key35": "HHA2xYwjKptErYJ8xgo1k8XMXJzNHJpbwYcLEnSYSSR15Dq7WgPDeQNxxTMY27DnBXbd85xqZVPVjPkDXxigAT6",
  "key36": "4TPk5YQjPfryFu2NKREBJYS1X72LFnpird9zoWhbCeua2NrAkUssSGxSkFAG7hHjV5qnmiX2WVNwWigcmD485nf7",
  "key37": "3t35AesuZEN5g6xRtz6GbUfK8dwwUHMuGvnkRc2ucAG8zoKdxuinB781jK47cHGtVUD6hd3XEUrbbYwivXz8iy3f",
  "key38": "4NGt97vvsBMzw636nRpRP118GNgeu5J2LH4DpkijdiH9BVZA6hzSJBrKXSuhtmgfDNaGgVac21JgS7SpuRYR5yG2",
  "key39": "2pQtTLtdY95pCeQPD5AcpWMiqizRbhfNgCrAjTZWg1Y7KeG8VBNmDxHhCDaP1zptpFitnp7D5Gss9KixzWUcjudH",
  "key40": "5DzadVJLi4PLghWy7iNhPSQn43AvXJaCpG3uggyakbfcgnKZaCm7RyG8UkBEPLqPAcgyPbkBtiBLmDY2KJsnGztE",
  "key41": "3ANBJKvmQknxPi4Z8AXEjBZKXDsdvdAKD4J5RMRHTvKCJVf2vJJsa9xwUG3h6Qsw5a4eJFLCUwT4dbdV3B2vzcYj",
  "key42": "61BUx4gewrobB7nu3mEgNtEsLFhutXGRcR9TUEPqMD9wGLtzmVckmwTPs15pkMJ6yGuxHvmGuKeVFTUEFMCdB56B",
  "key43": "4akUb2Aichd9XUiF7Q32CEZoBy33g9Bjn5haNcvB7oh4og1V5SjZaVdK4pKmSX74hnRrHLx5M15hy8v3jx2K9DbY",
  "key44": "55JQARWUuLF7VJP7EuMWGfYEk4n4cASzNaMrmjUdLr8Ad7QrroJqwt11D8Hg9UjvrhgYGY3fr8MGufmit6qR2FJT",
  "key45": "5aqpEeEhauKKntvPBYgHntL4SXJze1B4tBYovcYuu1UztEHjWy5Du9PusHJqN6idninvWA8VUg7HTrfth9Bm9SMo",
  "key46": "fFTbKKUB2NeCHgAFKTfjuGQGVZ1181y6LngywduTs8VhqwSqWemikGY1N5ZmnddjVcHJmcS7xA5uPMToiUgLWpw",
  "key47": "3zXysjXqLVqghF7TWuyASmzkmkYPES9w5kTSB7E6aGv8e7tvvrnFH6qfAq2H765v6jVeB2NMEpCQ5MuQb84mNv3R",
  "key48": "5AdqFHYjwpHeNQCj3W2kWFwAKNoeN83F2uM5ofXYACMi8v6VnPCzcZbG71urKCfSdrj9FqHD23QMnAxmPLRaKdyY",
  "key49": "4HQnP23YfrtkkXJJ96PCqoHPbdD4XcFuayJ8HRSDgcqDw7yQJvqGV9N8J8rCM6ovAXQJXvjET3Ykemkp7ixWb7Vd"
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
