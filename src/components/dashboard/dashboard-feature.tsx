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
    "55kDtkFDvnGUTvqcTuuNzk91kkeU7ZWbNuPTCSj7tdYYshX4JZcbeJAGwSDr4k7emu1iqbMFygjwBq3Ro6SELejM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oNfvmPJGi2Rb5rfFEdkSKooi245Gf6VkqnkGdk76Z7uuPh2uGdvgz3j2KWE6cfr2ySj5k1csvQhsvZcwFtNwhMz",
  "key1": "32mhqnu6V6uoe1ZNEwNYmJ4Na6V8CGjMWB2U987k2z9meFWCWJepWtGqMDNtxMWBHhK1KUzK1YiukyB1qE2RhmZL",
  "key2": "KMmGQWR4LnPzjmhcijiB724e9G12nNbvtpASprfU1xjBbpKzQ8rhA65VP5RViJq5Ca24t6ZSKUPk8dEMKp84nwt",
  "key3": "5aZjebQxmTzvQBjm1beLcNBgjqwoLgJ5TGRE2MKumvwnevY2RUYhd6UypJaji3iEuHhfUTzt2hW8CKNz5pHf2NET",
  "key4": "5CWsUTs3VNGAWZrajZ73D3LL92TbPpJefwrgoeNDKAZwPmzt1Jj6bRkghHhNyco96KXFsFMfMQNkuuH5M6VK1tYz",
  "key5": "2Nc34FMt8vkxEn3kSAmrcLts785CHv4mrBe7DggacJmNEnVDoXpNrmMF2nSdgHynwynvBcqyCbi8vy9p4vY4b4Ap",
  "key6": "5QbnePznh3uNe812h1hrXAxtGdYuxYhPVRbQKsXtbncUGbLRPkah2nSPssrifskFDVhLxbg7QNaAAq3kTzHCpfZ7",
  "key7": "5wYVXsWEinLmtTMAAxA5neLXJVZywN65XAKHopwaQh32HC65t9BVPf2tuJRrqvFKYpPo4azCqiHDcoPUGMH2zYYP",
  "key8": "37pVDQLWAV6Y1zwEqMhuyK7KLTjYw9EheHAhu5dNeQkEPqsJ7bEZLYgfvhAPEDopFtTnrubxkW8AwsTj9Tt8WCrP",
  "key9": "22XZ9N1V1zNu375UWnVkdN4Zw954VY1maPL7nPvohHr6sP2ZYBLkFMxUNkF4QYsWKEidyKdiKX4iRHwVoCCwfhYn",
  "key10": "SyxY7LT5yszobitf2c7HDy1VM6perHXFvk68Eync4sMLyuQE9dkXmgzR8TZM1rB3o7CJdBpjqUkKW8FH3arf6aT",
  "key11": "21w2Dt2k97R63CeJ1kJNcesx9TeHsNomzm4vnbhYcTRbvFUQqzySssavTi8qxrTxoHyNHbm9RDq7QHEs886RHtPf",
  "key12": "2jErjrto6hmnQcWXUdGS2JQXPAuEmNReYDHSpX5tYxMFGDKCVteo4Yw7wGoLXsA9e17tZZyokDGN7cMnYgVdkA3h",
  "key13": "2xouXrHmeGGfDr1sNrqUCzssUd12z1AG7YaH8629Xck97qwcU3g9a8Z5Hwz2YXPFQEfx4zFdQbfF3Pew7WYcoSct",
  "key14": "2reE64cBxf6hJgbFzWWdqnQDsHJPvUSEy9FVwDWgXiC2FLqw4rAPXjg7Y6aMK4ciEykpLQh3pm1V5SZihuYBaVVX",
  "key15": "5ZRzpsYmZMAa281jDinSWXxSx5vbV7yHwuHdpGZDLyZfALRTFgs4J7HfqEgx7Unyxd77DcobA6rkhHLX3Bmfv2uG",
  "key16": "2HTTnNpxUvVoNih3mmtGUDqAoJvWNqgQf611tUTVtGbDyjC2LPMqavExfw9EUNYKnqLbsYjx7JbGndSEG1zni4VT",
  "key17": "3kh8JDK5tFaP1LEQ8WEhP9P8BmLbSFaCGfbpmpSygSFejTruUXx1LiCFHGwqssoM5wWdmVJHYSbVwhEaLcYaysDG",
  "key18": "ogRbZZmYP37nxAUgMxwrowpig1zXA8o32pCaQ1skBsrryLrDxKuCe7FNhPM3v7EENR7t46AA6vWo7JBKCB3S1qy",
  "key19": "58a14ZFpTfULkcbAFvN4hmkLAwpWZRJNgwwgRwPd1rFUVpaV2gyW1z3KCFBHnPJ9Egyd4VUBRcxeu83kzXa5aQpJ",
  "key20": "2637hU7R4949JN2etZUdZUZhjpMgb9pq4VaMGdbWUSknJa4cQ5xk5QaST7dUYXspzonvrPS42HAtG1aNwaN8xtB6",
  "key21": "2xpSsQuXb2SCMTtfZ3okbYB6M9vrX1b6BdKUqLECX1QZgS4ZKu7iRLh6ARkmXtYfUjK8HkWKUDkRsxF2ow4bhFE6",
  "key22": "27YPsGu4NNiPPt8jC8qCLz7oA8hzP6id2p7nxt3rBJtuWnDXtxy1ygJyGHy7z88TccN3A3odQDTWDkXTmaEjheLx",
  "key23": "4GeA1C3fGBNPAc142Ek5FLNEwnQJ4JdF7wohekzNNqYce8oXB8JrDVcw1JGB74FNkCQsx16wvib4CaiP1VCkNmtw",
  "key24": "39iuxjv8ixfiBRJtRPoNRb3ZHLoiutu7vUoPh6z3kgBPjuKFeLvVJxkjzzg4TckpvA4BHguTwN7eNMFFKgVmjZxS",
  "key25": "67atNQ4cQT5SvYhsg5mQT9SKdv1hJGDaHsYmZ6WwDXMGNaa3UwkgDgUEVWS4igDxigsLg3WLNvVy1GgaF1CYpHDo",
  "key26": "55eQDvCPY7ArhtzzP6LSY6PJJ5xhhv1gMxZ3vvnPx82LtNSWbopRUoEtKXyS59bUv12iENtSQS8ffXqmJtZ7aeLr",
  "key27": "3EyNkFw8yNmemwBfwL7JaDKzwY6rBvX7aQr4W6i28reSmMzyVMbd73p9hosnwGP7Dg6MmJkeeTxMzqtALzjg727a",
  "key28": "Dj9Z6Aa2JRxF7mzbCvCECSpJxUHvgyvULKYiAFBUWti6q7dbgSVq8mgzTxa8k8Do13n68dL5QJEuaLm1BCxEWwV",
  "key29": "4ozh2xeegKrCaVJRzX6VRwcG2Mvbx4Db8Rdf8YAbMKZcpH4uqtU13xRA3rnBJgpw2SFonUgPeur1zdMGmpvVAa2j",
  "key30": "yTpp4RLnTc6rqS461zJJVjDdSZFWpLbAktqdrCoUCVTj1esGoynweMxQKBkcu5PXjmTsu8aQ6drL8sDqUcbjZD3",
  "key31": "3HoGumEK9A3Tg2SweYjWLLjxQ43h1PufCxwc2CjB1C6K9ssJ1vGJEpM5rtFXGC5HsjPHder4EB3VxBsc7Xyrj3Az",
  "key32": "3n1R3EKn87Pa8EkjKFi2ghvDfWAUQhTyNk5p6BwMFPFaZtqw2EQXoq76ZUGZ6XFdGoQcJ6TzaAh4NH2YcMazAHxT",
  "key33": "3SgLRaMiZGVZ2WKupJ3Fmt7j9fYJ1z18E9BKgrYYufYrarHfz7EcnPWhy5e2t73HVhzLdNMH77HtpEchS2mp5UQE",
  "key34": "ot659mizgRUFWrT78KMeyrUjwYhA1P18wwBhaSdeD1K3GT5wcR7GNkniLN52KMJY5LJ5ZLKJLMPFcH7F2r5CjB5",
  "key35": "2fF52AgdAgZ1V88Go9tgmENjpA8KcAkVLxb74L7arVYKVpfQVkBGaEph76cNT6aqtiLe1ceZJLgUJ9Kpni8eYDf8",
  "key36": "3ZLQLzXJdDVqzPhiTbanAT2gd6HnpUcse5euB6AefEZjScPooveEphwr4BfZH2CuijYaZXteFuRN5oUmiEgPdC84",
  "key37": "444kfUfjSEYN54Gq6jYmX5FYEGFbU9bWGpNaVZuydjQMwawyWhGFSk2E7utFTVRcSUzZVXSS2bH7MmYtJ7K693dG",
  "key38": "62eK3YYP2qPtVVeXqnMgXWNCZEtGUvzGt9nkTLafevMnZ2W2Euv8ZQcAC8TcLCykcqxM6NwimRcMxDnSFwCUc3zW"
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
