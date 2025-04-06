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
    "4q7uEB7mJ9iyeuP6Vj8Fbp7ppJfPxgcmV6qScvMM1qkqsVfVfb2sEYSemCePRAVcSV9QQXvQiGqn9RExPfeFHANL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4D7BvP3ioH2PyLMAP7YhHtTJZLE6C2mS7eNa5nDbcivVz57pwnFkcTMpvTNYcFsiZo1RdUpUcjxxiD4btr8QRr7F",
  "key1": "5fmaQ4PpCVqTnfepixeeLGgPqewU41bXTL13FjXjnVoXDvSNBYqWAgwE2jFXaWt26BawEiXAXg5bDc3htWdd2XDW",
  "key2": "3yFw6yztD6kfJRMXXwqsSjM1fxHfGhMZ47dvLWLctTy5gqCUw3FvUt1r5kGqKYDoWZJa2pF3ZXdWf4C6F17tRgW1",
  "key3": "v9CCBGBZ9k8shEUYnwXN8DzGx87rgmQhNoNCqUxLPxLREuAvxJZSu4jJQz9djoNfxy1RAcmNqBpDiPBJ7wisSoC",
  "key4": "4vxQBZpemYCqCAhsfiLYR3QD1ew1EYkV2w9zBztvo7Qd6hsjFcKUaKjDSs7gWUapkvJCPNxJcqd98X5YnroxDz2w",
  "key5": "3sXcLPuGMhzWVwhz2dpGeAMFp4EWuEZFYWQ2DNtzsmDaxzFev4MZBBiWnccSi8bnBdZvpSNRmR5jvKe8nP1vgVLH",
  "key6": "5XWXzNNV4iDztj36CRF2MWNvS1LzvHjs1SRdUNcVD64GtYqco3hyr3wtFWjqRyD9gCJaNEAxgPojpWwXKnNJshoW",
  "key7": "5VSn3qDJSJZtqro1YQTaVgjSNZWf7B34yuvzddzETCMsfwL9o4KyThW7rdYsRYBEHDMp9VwAqj3XcBqSVeBRXdM8",
  "key8": "2qJgn9YwpDyH8MAYx9gkpqaRkcF7GnkRXqUGRZWmCLnUyMjLHgATcPJv2TwtL3Lt7uNU3fj5zYkxtYz8jHigjgM",
  "key9": "28Pj5vjUWtg7XEHUUudwbbjMQcVXhpjnPxYZwUaFFkvTXw36dAUs1XyfE9UiWdMvDu83QrCRzEjn1qjB8uP1wh37",
  "key10": "4AyvaQW3UfTLMuHfMkR8oKioq1rSssN3yGcMBz6JyWTQ9hCSCgo1TRL8WbVZgsJ1BueBPZKRVyGceMEbou6ie9Cg",
  "key11": "wG29vDTYz9kBtAwrNpM4tMwxJdHbgsJpiQKu5nqUvjCEP2zivyJ6a6EidwhYjvwb3TUYJmJVTUptp7BYx4qsgUy",
  "key12": "4cFenQvXUdg1hD3Dfvn2AmE8XzZ58WJxMTnmdvP1C8BEFBoV2qgXzL6vBRdnjHPip1zkvKQLCtts53hnEMF8Gnkq",
  "key13": "tJPkhFqAkdMDZBUX5v7HTERdJhV6GgEf1CaA1puDaPWszAiLgUVj8XTjwTK5sn5vz5MELKpKYYEchYPau1FGhVA",
  "key14": "4Ky6MyHd9YTc8WpGzpAQSf7em8iC8nkSnQ2U3GNiCaTsduErwPJSyg9G2xL6N4Ug2Kmdr6CDzrBmND8e9rXTuK2F",
  "key15": "5rKQbp983cn6wS1kXGDQx6JkQbvtXViumi7qcW7RYm3rd3Ty4j1spYHxsUSKQhP9Y9P1zq6MQyeC4kMMyySA2P1R",
  "key16": "2VQ2PnGjCKNZu6S3rq53kR4MFGh7GoTmabs4WuxhLBK8EaJ1LW9pAL2Lmu5HSTRNwxBefkzM6Y9wXAzDDbB2XCEH",
  "key17": "4ix75XAtxn6mAZLmrdTaSJttXMgNLCFEjHqT7S2zJvE2GdSFrag4tVVgLHcvW4UXJojZsenAr9M8GLBNxPdD8uuQ",
  "key18": "5HgaswM5e4yVyuo4G9h7ndifaoRXMJj5veXwF6iXvRaCQFJkPKzP441g7btcgkNFyWoLaHBjJ4YA3QZT3UqtiRB8",
  "key19": "5xrHG5mWFXvzLzgzP7Fo8N8fyRCUSUCHM5sZHEwHfbfyrRhwJYW6iCJEYMpw7vqwsZ94YUBo1D6nAAs3P7GXm6dV",
  "key20": "2uCvgyDuXJXP3mAzSXyHuuBUTHNS9d2MqxW2HLJmMspqP6oGPyifzn1bg5mykJN6mBdEHAokm6BhN7mWeE2nYuRY",
  "key21": "46CMUcgeKGK83BQFj53UpKpQGQ9529NnmmQoXjMGGQH1nny4zfu8oFj8FWqxeY7TdeudEYHTtws5LhHpP4Q8Cxhn",
  "key22": "2hG2Qcyn8ULNKdEYpp4mgimWAe3YyCib2CcD3gjpdxq4tAtpiGtQpDNinBs1AeeY1w9wwuUSnPfPAndcaWQFEkij",
  "key23": "4h1ZF2uZB54ijRPDyESD9w3GW6VAHfmrnkTCShA1L4JknHNDTym5xzkgwZnTJL2qLkNtfp3GFJq1CDdkvXzhr2m7",
  "key24": "2VXRWnN1GNmVmWHVFKzayxJSxGoQJi4EVUjCUUaADoZFZqkqRDomzYMVkAxiaSybUdKoW4ijD1eKg95WcetFHPNL",
  "key25": "2dVvHhHJikUqwCHa5ZzAegScGN177uYdjRBK51yYsY3gKpf2cBj7WuWVWSzrhjQ4FVZYL6AWwGwrJytKDf414Rna",
  "key26": "5FSgHtcszPNKX9fHuTcnt6LRqAGCtfZNsKoWcpYxXYfJ6YMqrm8c87UQQd3sFVBccAynJsvADtMcBUEkEpEu1DDL",
  "key27": "2sGBZUu6juQTWnRLWsxuuhNtUCjDNt4CSngTZA2733xfx8BmRqmLDxEApde62A86RXQK2Z7Ba1uEDRwBGxMPqPjr",
  "key28": "2oH65BrkQGxHNK7vNDZqCVwuNR4SRx75hsU6AFUreGjTsGtrpyEv9hD3XubCmc8ryHnKKPV51j1ZHVobi6exo3m4",
  "key29": "2CTgxbLQmgMK7ntQqvsmFsyDfVcs75b4eJGcoE6XeyJj9c3BThuXxJgXCFLHr2yzaJdYEjsV7XvwJB14Nzs2jur4",
  "key30": "2Nrmzo9KQ56QPZ7eg5Z7tAmJJYVM1u3AxzVrjoADzHbX9LtpGJ6MPYc7h3gcymaxutgrxSgFp68qmZuqiRtQe6so",
  "key31": "4HYrqEyAMam8HLCdHHhsJVAVa71Ym5FyrRu45psFAE17T9gqPS2KzVJ313qz6eM3hzpoVShgrD4qmewn7afM9a7w",
  "key32": "2x5GgxLCBeBj3z4V2dwmb9gPncadvNMtqiXcP8JyWZKSTA3QrSZJXTJw2RazUJXUvKCvYJu6tCZQLDnxoUibBLqw",
  "key33": "22wMeCWZmnZWT6CmS9SYM7nULRNgATm8hd9JFnaG3rESZ6kenGYAQejrgLmCeuEnPusXXh1nmkgBPiF2MDAzt6DG",
  "key34": "3HRx6DJmghRGJ9aPEERqxxAe3N7q4sZ1588iGJ4rNSWtm5eU7MxPZMGGYnPkf5LMUmmQZm7s6Aa5Dfx2ZBZ4g1Nu",
  "key35": "58Vus2KZ145UHr1k6tnTfMKF5bCi3JbbNruBa2S2P1jkMqp28Tb9kfWqvAwU7wctkaW6kwoJyektM4CVcZS4SPKU",
  "key36": "yxNiE48uMHUH5dGPWJPsoNXTFAQkPJhaRwv9h8ct3WbCsPUw1sUuUK7pnzhETerQjGsLusRnm3omgmHrJBTw2Yv",
  "key37": "PHrtG1CLUKYCowdvPVJnvTE2TfoZRF6ykjDgorxZTexHCJKjxoJABbhZWvQDG15D3F7b9abCLkGP9p9pMbSPzhY",
  "key38": "2dcqkXzHFW9SMUpNoAxKr5mUYpaDFaAjdViNpSz8L9XxAADg8ibeihVF7stQ9nECSThBuq5GvoUjerzgjnwADSUe",
  "key39": "ttuqDMtp6S6oHXAe2uifJpYakzm9MoCgDH7dBHk2VoKdhVohxwMbZ1JCtsGJCeE8xhLikbgeKF1YScxoseQiwo1"
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
