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
    "3DxQ8yYk5FCtousiZNxA7qVfKp9Q2Qhw6gaXFYzAsQUNyziymKavwNQbXj1XfsjPxWXsAL9z2RyBeGurrss3Jnke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DAEpepASWiVRkfpaf5wSekoqrrekEmTTSxSRLkVz7DQMpHwbNbSu1d7uyUYe6kovmwUwP1vhvKgAgcWLpwxeGpk",
  "key1": "65kFczKVwUkjmqZkhVNQTpS9d1r28ggTrSDHUFB6GjQu1ygzsERj9tzH7cWqGZK3ppF2eXRZV2VQ3PeXUc1JgDSx",
  "key2": "3cGM1xWo6eC6CvkoECCKZc8wicv1rFmSns76dShJXSu5vXTnzqTZ1RFgCw6kLjqYAeQYFzsmPsQ7gRaDxUQsgbVV",
  "key3": "2R8vgQpCNvQxcJmi2a3eFMmwkypNjiSibk7HGyHMawpWwJCuRFWVsxyMj19XkfxBDQEfte28tSRvy4XbZtVQDqyy",
  "key4": "2K8PnbR3zDZakVvikrfkRbHmM9FMwEvTocdDTTAZQ4AyPk9cNHPBj8n5vnYMnPA4LPs5U7NT5PL386GgTUc2eHLc",
  "key5": "3wT5t8JTEkZQrc9TAAmyKeMVkTCMd5ZEHuWyxgA3FNCNhKBSRiDyX7AK82cUQEid8ZDHhT7MMFGACEZHZqA7CxB1",
  "key6": "5uTkqvwsZde4HwufiowYcuARwmJnHB5DJP9cqqdokHifyAFCWJBd62op1mJHDY3qdsZfpiL8pqiyxQvmF7FT9J7T",
  "key7": "3juDg8WR44ooWyYao8Zy3FbM8rxcS1MaN9o9QL91iaTJwacwfbqU3fFXDvnAiXpodVEfh9kVHoKoaAFUaDiroN3q",
  "key8": "4YrxFLWJiQ67HaHM6fRf9aPAg7kzQY3C2rvUuWDFG5rThvnVvKFhvy6qn8CrxLUWrf8czQxwQyLSZPh19EBjYxXq",
  "key9": "2uZMaE6iku6xZh8iGHut62KGaFdUiSviuaqhAEjSiSunX1nABVh7jAsswNKWamTHfKG2qHomYyASyoyZcbVMvqCJ",
  "key10": "cqubp6YZwYFb3cEv1hUXtJgPjD3H551eFJ248eWv1F5VBYMEeVUCRgmNrFK2FiMWLBqweiCJgF1MNw6KmXYg1uF",
  "key11": "2dUUoLk5tA8fptQA8LjT7nDCeEBM9JTEmBZmkSjqHEVtXxDnvE6YXSDGLD62Z82CGaQcLG7fgznsWWi1Q3emZYEJ",
  "key12": "3v5AjEkSFGCUK31hjpn4WJFoaM4gGBEAYCEarYYsqmAXe9yB4kHpWiAre3t7SwWWXjtt893gFkiL2kSiPDx5Ebyi",
  "key13": "4epH6Hf4Bn3YDMtx35BuTdy2wHzRipj6ziP6Qr2qBvg8AUk2rkEGffybpdD5nrtUFViv5rXyvZkwouRQZc6KHQSs",
  "key14": "wEqTrhMBkoUBD9Zn5Rjqf7ERF3sr4k2Ln6bGCxJBnmUBVyjJ6uQCtSRwB1ffFzbaSsvjPeKwKiuRdAVtLMnjcrV",
  "key15": "KXjL3zrQTmHJNnkPDUte6rV3iGmFRnDeKRz7cy3dyEz9h8imbVXTos3Jksw76j8wZiitoUJFVm8FV2n41r9Enpp",
  "key16": "5tLbD7j1qYptvmbrx8jYmBM8YkDH3ZWiy9PKRFQBkvGLPKobTnheTfAzdqiF9PPmNaP2uHAoR7ukdZD1QNV38RYy",
  "key17": "5a4yhiTy3D9GzFp6wMmCGHmvb2V1P16BAMqeMdpNxjaWBB1awHgjyiHHd7FKeiZs8v8Z8ipZfinfa56LPz5E1DGt",
  "key18": "4xSCUxYYrGLLZzn9sBacRWnyLKZwNQbLce7ZHnYpRLdDGyoyQ2zuBoEpJtHHD37zkUQgFPfegdxUL6JwH1mL34Sf",
  "key19": "3yZSx4rvHxpjwXJ2UXgghLfBkgfSJhpqHtXRPeB1oAPmahjVu9o23AySMAts33tBGwwLmJrPGq6jAVFMrTPa4tZ",
  "key20": "4FSDAiscUsq45EBLdRw41HnDs423WBSKBXQCcoCZ6DimWLRUrquGQXfX2W2T4PA36dusXcae7EGdZEQioSMTyMqA",
  "key21": "3b6aPpopY7ZAqWYMM5JC81Gj1jMgEiJdbPwGLQqGVLNmyKTi8Yj41xAJN9d1WuGLozmXsad8Lduc4W88S6ybMJ1E",
  "key22": "37yHs3aQfkXP5PAC3vaTmFJX4UYrc3GPgm1sbdRQ9buYBweYiNvNNyHf6t5S2cDsXhctbiDmXCDp1UQpKy7i61TS",
  "key23": "okc81tW8FYt7Q3aY1qVcksbG3xvKkuRwB2AwSa1w1Uxd3yZJVZkzNNqcEBFhxonML73Vmz6y786zLMbeRyVQggt",
  "key24": "5squrWh2MhRizQoaz5WaTufTFARn3G4pAKGeUBQ6cKJrGnVDTxAuVhQbBzoibLRVnf5oPkQ8o4DroZ4wP9nM6Pbw",
  "key25": "4cjfQp5eqGuMDJu7oh7j7GeBSGK6X641iD6ErHTEweveJvqYaxkH9UuJPBcsXNiowwtdGNziPaj1dx9YRZRgecqy",
  "key26": "2vqLcFBo3W2zymAQQp1kY7ktwJdL5uWYrChZed1Qq3Ayb1jRphL3NBgUfZjhdCVsRDeV2q5PuY9fAR4VnWxdEzHu",
  "key27": "4AoCyLtPRubKumfZkWMrEUP9QjjgTF5oThtfNx1ZT4TsLcg4qUEsRhwobZVvD7Mt4oCb5T8FKNFqPmXpHDGoFsSv",
  "key28": "3tZSc4ed5fRR1b4PZmz3nw3nhrSBLXCN2s98vnoSrxkZeavY9tnYsk56L7ZvVvRs92Nae7b8sT6H6PF1pUeyev5X",
  "key29": "tUBamEnMURw2AsaaabpnAgcQs8DY9ABJosBj3kKQtwnRuggZfhYt8gEQGMCCrCSj43oLXeaFU3SuPaek6sB8sm5",
  "key30": "2DNZJFqn5zQq32HksCLMqw5R9u6yK1DwqRCgTH9J4bFDJ3dURoJmd1XHWWv3YFVwp6KjLD1SraDG38774g6p1BGX",
  "key31": "4hkJgUnmb3vZFMb52co2FUzUhuq1uGYHVGLk1pJGfh4rVfCwA1Z1eUKs5nW9kDqvJQhDgNtRdRUWVeUwbDvNFqNh",
  "key32": "4S5SYz9R1z9DToRgs4gakkaBYMX56RfLTSf8X4BQuruX2ADrxvXahPHBY6k1cjL8z6beW939MvJ148JohuJuWmqf",
  "key33": "zHKZ915UErkj3FijHg85azzu8vrmctiUD71pKT5GESZWME2RsrTM8H8dAEQVUpeuHJYEv4vyc33BhkfZA92Uwt9",
  "key34": "5ySLr3z9381z7gAPibnPKAvkzMtA1CKCYuRrsVUaq5iXca3GFhezSXL2bro91XyjtLnmTtDEz8WDKfQaGX14cfLa",
  "key35": "2B5kcr63ckZP1vaNDvYx3RKq2h6Xd5cSxmNtKo6X8vpuKc6qujmoA5MWhJWZ1XMpK7zwWsJguDsz4yNGT64NgExc",
  "key36": "27exnnBQRmrry4WHH3kSJtxexnJ1Xruaiz7ZkpLiG9CzEGrb99Z1u5T2HtZYYVL2NopA4guCu57XXNh9WndYQD7A",
  "key37": "5aYW5oW3tSCBLq931H7MHB2n7Z35ezo7Y6qgeMuEvATbuqaz9zv3LfSayRN53oi26WWwhiTTXFQNr2iwhSANAG2j"
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
