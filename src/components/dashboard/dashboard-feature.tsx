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
    "njvXk8qW8WXPkEAV3CBnUdR65EHjCrtVWii7PnSTDngXrMXbtz62XGgYB61U3ZBAgyXerb2kgkSWs3dXXvUnt7e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "q8JG5w2V95et1xmqbJMLkC7hXGaRvgRocC75J6hScWm6nDqXMmk4JgjK28VejLBjh6zK7AcsFkSRpuDyhQeLgCJ",
  "key1": "4uZ622VUZv5Avz4tURLENEeGgrk2DsEwRr2L6bFbYnGmwXmkyhUk6mHgBDiHxcAqcv2GPKtK87EuYq12ZgPHjeus",
  "key2": "3pP1gcBa5VP1stoGJwJbhwp8hWcK2iQXeQHn3YTTBciHpQmZCkrboGySqtSTCiAk5msBoYyCHo9nMEiVByPnfuf2",
  "key3": "WfCfmr8eEZzADvjyx19piEsai9Q58PQWpLrfTgsTaKvvjKxvPBXe7aAwqnYWDzFRKD73PAWAQ7DQ7nJw96j87j5",
  "key4": "GP7giV8M2pbbX61AEnHM1iv4WAmAwk95SMyxYqs9aSvNiLFK467CEtFVK6XePEEoAsLApHGWmdYQPq8M8efbPzR",
  "key5": "3cLqr5j2LHjjoqbG2maKvk78dH6WQ1MPVSJYqPvzpD8VSGsKehBbYHU5jhzLCP3ecLbBD1JUQAAX8TbhdCvD7c1v",
  "key6": "2zEc66vjh9NaWgFSmYXdpynJUke5umAQKWaAbvB4ZKxPWdMmZSCNMtpEGpviKJyRF4nD68x6tuqyXTVu4psMCZjd",
  "key7": "3aVoYEgGajMnLM1zrGB1SE3PJU8K9fcaQs25EJPPQMuU2JftytBuxKE5g27JhfrYeNVx8ju4sk7HXDnbDdwJzPNc",
  "key8": "4259tm9N3Lr28V53ttvhKaFUaf7uicqcr7UJkX3GmDhpfcwhg7C9XgycZbBT7PHBCk6FiSg7VpbLHsVG4u1LB8So",
  "key9": "axE9D6YWnsyqe22cwafW6YN2ZcZFt3uWs1VijRxu537hzhDNb7FB73BkeTViH8byBRaQsdTXWGVN3eTj9AnryZb",
  "key10": "61iDN4rfsGNq2HVjBuiab4AYD4NP8nNrhpXpUktzwVqi3DcWcB7KxsSrkb72ETG4LakmZXYywYz2HrETZYVPPoid",
  "key11": "2TiMhGuKwbjuNWoFNRPAcSK9tBBiUtoULt3sN6PbyG6ipVN6ZY2VpPJ7uAN5KB9bC434uu1JVF6nbLPVduanBtxM",
  "key12": "5G5Tz1datGkK23AwQvkEfFFRhzb4niRBo7vzZKaLMcpeAeWLDUYJU7UK4pihsHtcmnmnGWUYKHRUtyiKh4KGBBTs",
  "key13": "4bEvNCQDU8zgosEqC1AAzkSWqnC4y1Jdihs9GkRSdFxG5xvg8Cdg4ss6T7nbtWiQ8SdA1qbY2nFm8rYEzaVraia",
  "key14": "5pSN38hQWVyCWcQYnUvVHvJPUBL2i5KuCH9HAMhJMPdqfV2ujnpzo6FNoRqBTbSdk27SzH6bgtgtRfxsBVMyMcWi",
  "key15": "3DrYJWtboxUNcYoYGZ7SmEZrzCFb2CARi1Sec8boBFNJRrM5hdjnDZAN5FvDtmTnSrtLTtyWQKF8cy6d3T3eJAXV",
  "key16": "4NpdSyvjRTyxyUi5nJhHR1o8UDYkM7T7e7eHPzQNjWaMb77bt2unDdXumoeVfeJgtgPJv9wVfCuujJ2hHa5Zth5t",
  "key17": "4tFzubn1JKDq7hFqoQ6TPuLKoQCGt7zMuBpQVKx6VyMFfHTyyFDSGah1CWJ48FDMyARDHDk5zwEf1qGcEcP3zAm6",
  "key18": "3JCUuGLdnP3qAAxvm3p2EAfQqAF2ZYmosAdDxpxzsRdrBEHB2LPphLbK6QjmkLueSd1zQxTsd1tba9XDi32sjypj",
  "key19": "2Bcf9NuDfixjZ2iWcEZ5CasSkKD8e3z2bj5VXnoYUYmtrGpJk6EbfRGkpAhaJngdsqs7G1Q2r5MpM9CfVsHen6Sn",
  "key20": "TbAi57VkUeK1aVZodYXimQhFiASZCw8vCd7cZXpZzUK2iqRYh6MpABUNk3gkLHn2TmUoRcAiq16wnKKb49HnJ2R",
  "key21": "4UpZXC6pF5LTpwWr5njjCNP7k1h4Q9SLFB3cGJ8dGzBWGJEW8fqtMmS1b8AX41r9Q1aYehpbeB1SfXVNCjsHE7YZ",
  "key22": "xDHDzkthP1zwtXjngMXnDnYPZhZ4kEbTyxyWFM6BPfSuiyBeho6Y1VqQ9mPdeEFgfk67PZTuqdnVkpMLDbWzbbb",
  "key23": "46L1TVbjnsdZDhBMkFJYgc449CxwADCrD2uZP3gQBFyxgkJcfTHTX5ZPFx1e7buMdEskJJMzBYAveqSG2mbJ9qau",
  "key24": "3kpoPGGE31SxuNsKgpVjRCvDofhxVzbYBx8shSrCedpNY8G11GUP1ZnTa9iaS1As7JCkTYurX5DThy74ZBPvzxDw",
  "key25": "37BjeXMg5EHx88L6aez2qnDNoTNRJqfaACNgYTi2i8bTShy27pQahZBnqLUSv38gdsZuKEh3S5QARoXeDrZdHh2h",
  "key26": "4xGqzLAiH6YF2AJdHj1NYtCrRWmpV7WtSQsv2Jv81s4zfB9NxEhzb9qbJ1cf5QZQ4DHzxedq1fzCdPCniyigHwFJ",
  "key27": "Re9UWFvaHDN4nAGxgjygtE1mqt7ZZ9mFHkunWHJcjmXVfLfqHVhqXVk9e9QSrpLSygqJcNuxTtp3qpoY9JTXRFF",
  "key28": "5EoMAuhK1syyc4xdqthEm2DrjSXBwUGE3m9rAPMyEj89AL39qjHuvNPTzYM3X98GJcSqdJTCxg1CM6x8xo4FFshT",
  "key29": "53a1WgKc58c7s67VpKprY5q1AsPJPLv37vQevBK1jXUE2WzEActnjt1pwyQYPntgW7rBXueVeE7DgR6d4gRBkH5o",
  "key30": "3aWjQsR4KFyXiJj9Qhhcrsf9ucGFD25BT991jsCmuanfLqMxCTuXxsekY2ob29X86ahi61ecieidzCa2KUdCLYSu",
  "key31": "59yZ59YKebgJbwTXrDc5UT6mkAe7uK9cz3XsENDg3f5LYN4BHEdjDRCmZ99W6mmi3KwRqVzkUnvSfBCM9fCTxxeb",
  "key32": "5r5yJEWEBrntdWU8pNN4mmFWk5J46ZbYRDaj8zDJBVePcTTktMmWDwbDmqoWKMYdeLyKZLWEGQHCWc8eZtgfWQCZ",
  "key33": "3u7phuVaNHrPs9Y1bwgq3mutTHkvUPH26fzmcRsdpVKZt34tXbvaihvzha5FQYUMqSN3mXFsxfosi3W3JwLEu4eW",
  "key34": "5S2vadWsS8qtcSjrdaT231qMAijC7QTErNG4UhGxYB6smHdLpdW4wVu5jjCnFSyikbDeUbFeoZXhHTL9AnPnYopw",
  "key35": "5ad5hdnstvBqV7TCacBUCaFnTyki5rySpPepEkLxvCgCZ3WcM2UQXVXZmiKnXbhaFBVnc6kqtJSgrRFMWbhr7LJE",
  "key36": "57ur8jVdvWoyqCAphwP7u4C3aJsUCKAgJFTJZXdAV5JiSN1a5miqYeAPG8fLMaQfC2vQnC35yQ4Enjm2HDgcaANf",
  "key37": "4ifMkn3aaLRG37FF84z77my347SF9PmGca89mfFcL3HKEkFpx1MrBQ6hWscWWfHEBnLE9DW9MViNGyVZD1ZPQ1hz"
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
