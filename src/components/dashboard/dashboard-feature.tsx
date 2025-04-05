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
    "5H29QykFUayts3yCkHfCVT7M3pt8cLQvuP6DeLR7nYJdkzDwbec4cLFAFHfbBcNfjFqQLaUGj6YnZscEk7SybTHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58fxVUxuEX16q2LfdG2gLK5GiRibQUFc8jDY7LtDY293u37s5KWf4rzmr4xERV9S9hM4A7fajCRwZEnF6SRQmaxy",
  "key1": "5ejSCuDagB4Pqg6CzAtXAv2bZpnXq2M9erCYdurcVdEtLzQEw8t7bLXEDn4DDMwbxjLTykMEQFE8FEeMNqtvKnSd",
  "key2": "DPdVWRqqxnQu4DQDaMaJSbqPtkc1sMZwRZXa9AiTYt5MjoCh8xzC7AkjGAWS1Mudhm1G3ixXdZK5ajBCNRXHdpr",
  "key3": "4XCW7qWX1qATopRh1DodhcVf7iNt99B3tQ8RVomcZL6aDogH8vfmezunEvWh7BXK7pF9wLoSRQQe6wm2J6pm5dPP",
  "key4": "3N5ibKHf8JdQJYS56XmuywCN9XNsK6g7z5r6NE3ziqozco8uiqa7Vf79Kio4Z4TKN44AcfS56dCghrhkSMo7jXgM",
  "key5": "5kxK2zD3ZJHKfhYeeXEriZcpz4oD2MFsKARQQAyVXwR9ShokUJwvkqsXvDjx792PrUndT2gbzJ1G2D2YNaBiSryM",
  "key6": "SH643EtMzpkYTiworfrTkqT2kkuqVq4yqQQ5X5LAQNEnDqYq4TBnyaESuvLwzq3xh2ZX8to2ML9ZEqXrLUkKPe7",
  "key7": "5u1t2dH2fPFCbdK8aikoTGsd8dx4nfmtT7m1UurM8CAMrBoKLX3mAZTiP4aWDb2bTh4EjA7DaCfDzEQUCdTqKzkZ",
  "key8": "RGmaDtcZnnhJcMNohDrDypKrmmmKsBEDKaSRaWHYKJuYFLb7fXtxYTdm74htzz6vHre8xecS5oVxX5Asnu6eQRJ",
  "key9": "1wwuUHd2T2rAeoedZJFaWWde9qog2rTKbcU927X9bAw6mkkhiFdVMpBQVM3AYu7LjZMKACRhCGDuhzQa9ioHno1",
  "key10": "3wgbp3Evg675UKdckasJGMkqpb1oxoUPYW5jVoCAawHcQ6VVXNNaebmMz5Y4PUbjxZiUEC3xkuqWDycZreq3kRVu",
  "key11": "2ie7KNHswxAkMa3Jr1ajtKaN8YpBhrCdHjpJQix3HSPb2qsKdTuURcekRzQzcsspPj4wsnH9bY9iG81V7xfLMqk4",
  "key12": "2h8uy7iWU1pDkw69tf9jYqXZ2xHjxm8KEaYw63JGcX9ZsHE4RWMiPE33tp3a3xfzcL9hYYiMXSu2TNFBfqDwTJSG",
  "key13": "5nZN7gaAfH29pZ7YAQ4uPsB6ihyVWdpJDUBFYd6NC8Q7VQkPLm5xgDE4dBHL6pYxPEYv9dpb7v6d5oXeQUpcV61A",
  "key14": "394eMvVDtK32NdXbK4Efy5g3WC4KZK227rA28kWr7SPtu7DKDbCRLiRK4WWWFg1sfXTnttf3uYqCDe615457wKau",
  "key15": "5p9YPy6EeaB38J1A6C3s1NCSyv9v856DBUksYDEJm8v3eA8xk5yp5pLYy17cezfvuiHuMfavYeXRDFRMFvX3txU6",
  "key16": "2Xok8HefZ4o2kyvehYmgRXV78V8bagSzPdUykQkgE1bncdkCuuKkXLdiFM1VXQo1jKh3Np516LQ414jbydrLjMWq",
  "key17": "ksPTmJKoDj2jMc2yeVc4XABt1ubWVhwXRF2RDxcD6bnDaiYm9AemXQgnPpGywV4SeG1kv7rpDzzUbfcrhVpzNob",
  "key18": "5CGrLreyQHFES83QyFuEEBuH8hSP7EJ7B8Pxzj9o34GFeFyvd56Rnd41smPVpng2uyqqjrYR9fHTQTLZA9FYSmov",
  "key19": "2Ux2jaHRLvBY4YEAguM3JSN5F3vHMT8PWkhwQpXP84yerqnejmiWQAVcEMCZz5Ywe1ovmmAaHCgjJG8EPDNitG6k",
  "key20": "4Q6LmL6gmcy51M737XR5R6hWNkp16SwxxHvoyvoHLzFmNqtHmYA8jJay5ThdN8KVdRDY2R3adBx5g5UFUuG48zrK",
  "key21": "2hfLC1hWqEsA3YcYCZBuGth1WzUcHe5reUxxcAeDkSSjmsSSeDAPMpfqGXRWAeuGLjzX6gkKZm1bKsjP9cs1MorV",
  "key22": "3z9aXd4JrVuZtU9ZrbuSYxZKiFcBf3CyCZgCChP3hy8MKCgRGRt9eRNN4s4nfpfVrCNqBbrkJavKiQwkSoCUq3cY",
  "key23": "U8v7stYMszj2KBM66qskLzDxSeikgqQLMLa3ngeZVnjhcYjVD4P89onyoc77AiuUkPMshwagM2F44A2VX3jG7bi",
  "key24": "2YKa23FhqZ8ryago9SUHGmMpb1sUnCCMnvCAoiDRRNKkHPMjUKcAUmvXJ5bcaVTGiStMFykU1gDA99mAKDPAbiuN",
  "key25": "fCc9FcVbGxr31sqWyfRXcSowLCxidZhxf5nrEY6wvsYCwvXD7NovZD74K3HLh9tnAkQry45T8Qm16Kh2ppskYBr",
  "key26": "3yfhN2aMXrvPAnJ7FSTSqwT2CUXS7qwGjtwYKX7nPQigFvTifsRb5bbdXFSSvQfk7puXyqEYBvRi8uiCDSSEuxcv",
  "key27": "3oWCuvKBQbMkb6gdso62q9D91iw12vCy4rwUf9G7Xu6YTaFGLBoFavaTR5qMv9Ncypo6tdifxRtkZcUbPDkSkcr6",
  "key28": "38947AdUu9SqNgLYWGT8PnCWukDm4R1wpgGK69hRW7ayj9D5D4aoRSFwQARckueph4LNkuau9sM29XdYP6nS8o7u",
  "key29": "278vnzenaeHrUYnkzXVAj5PGsj5C3rnTWYaCYNMSrqfYqUpNWYR6GDdCk83WsyPFYaVbMf5w463otCNuysDpvqau",
  "key30": "2LH3K4zW7RsY9ZJsZryb76BZ59ezgeDMFnRNrPSyGdA8teHo3igrSgMRa2KMEcKsv6k78SQsahr2K3jVwwBSL6L9",
  "key31": "2cJcjH13omdUQcuCHc6cxbw6ZoVbCbQkyUQEnRwihjZhQVa4paeLMrFb8RCaCXNFMohC2CUzf3djevr2wCc44ka9",
  "key32": "3vvP3UCspuJ6GGoBkspGN7W17WEtX4uudbbzC62hrvxQ6ZUXS7gS9wLMvAGknWqjiHKF2JWPzeTNm2oNxGPc2a1e",
  "key33": "5VYta4rX6FSpkfLqxUmTkwqoKk8HW3pdGvJSoXKMWQrVaiHCU1s3a7ZAFwBCg3MZwccsHc6RvR3GiHFfEg91Ug7p"
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
