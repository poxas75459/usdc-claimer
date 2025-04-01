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
    "3Bjss1J932yTj8tZBh8MUfvCLdFjpWVySbucDAHFPCnSTW2uYPgJMLbj8vFbCvQTFuKhmtm29nUftfrUZ7hfVtVF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z8Yvh3fzM8ssjYKiWZp3GYBjdJw7AdTXsCw5CQ8hvknNiZqQA8jhgk7aPcLjpxtv6xqCUgoCRFGzxsyda9QyAKT",
  "key1": "5njkup6q68DhVN4aVDD9FENpEb6r7VSLCHgTGuX1Dm7Qw6QBdZ1r4AvVJ63xGwVaXPh5qGvV52emKfbVrbEWi8Ug",
  "key2": "2TGYCXEHnvS2C41a4YqLHSFX2SnXskmq38hQ186MzDto46JH6o9NHLaY5v8egjYyyMxjbHM4R3SMRHN3eWZHPNY7",
  "key3": "5o36FzEs91kNjxzsMTTTwhFYSVu12rvhSTkvk7wTPASFLxBP4eYWofPh9MEmBrDEiujge51yTru5HXkyXQqE9qxX",
  "key4": "2CxeZibqnYPANjcJ6MEKKhareoAasP1o1YawUdzeXAzvbxEeCxiivmfp7wCfuzaGg3htsSJhkj8cPXfA6joeJwo1",
  "key5": "4ri1XE5nxW7A3TSVCJi74RaTf8PYgYCgsM9HBZdQr5pxiQkd28EQnQWK93HFDTuMSGPQN3LTZXnPuQkfxDigSYky",
  "key6": "3BjiJKqh5StpqRWsHAirgy53sgz6cCnezeMvoX3d4QgZgW5cJjTwiNYYVYCPf2Cpzsiwe9YgAZtAADXfsuJpMSwh",
  "key7": "3k78pbarfhKdcjTuFGegDLPzzCCv2EMzChLDehdKx8RVp9DdJbmbqFcfjugJKgMVSHfdciSDfd7LW9CNXGN2atVk",
  "key8": "48KKnJ7ffEgoRhiV1gXx6SLc2EqGjWAoVj77zvqvhUArAR6bM6XcGgA333yXf9PcUxCaqrWrtJTWpPq5z8LfiSnV",
  "key9": "5zWpstaS97BDPtzPXt4ubcgNnKYr5TDqFYaAjMf5BsSArf8WUs196mHE1rff1niDhNYcYcZ958m9Usv5ro9TNgng",
  "key10": "21jk7TSED18p1EUhjbDs7AzTmPasL6ccLsrB2c25MyQxh2x2C6QBtehEqwxfJ8qjDg1nM3tcXYy41xWuUDxMtChd",
  "key11": "33w4xNttkPyzDFEWTByTL8bwKgyiTM93NpdLEsY1RvUGCFoazGBZFuKoqqiG4VCwysbgzbrRsCECfGNads9ssmSU",
  "key12": "5Q4dnYN1ZVqcbxqsozhu4AVrJrq71uRgjm3Sg61CtVCKRspSzFzxsCLtGjemq9rsYTvpEDZjo3X9DnjHvu9meUBQ",
  "key13": "4zgwtpatooNf5DQtZmCTUyqxtsmi3iPd7Yzb3SefWj5TYFh5sQqpDNhAtxBcdpNqAcDowiCVPKs6euiW2QNUHAH8",
  "key14": "5U9DRC4xy36kMh5nXQHrTJet7qDKBLcNNUvEdrpW4Pcm2idpFjiusX6rmVQPbsCZRsBiLPgmqLEERbVhppFwogiM",
  "key15": "5JSJVojEo7YLPMsTCCBsngQk5K9MJbxJvPt7SjVZRDuZ5W4JbX2bopBxPRNKJemLhjRkrgtytUbJJBGtrqmT8GGz",
  "key16": "3cdNCK2pd3Cvk3EZJkYVJecG5qQBij9XXTQbcHPwcDc2varkqLpaWGqvRxTjXHUGzJNmiUEjPb8PSLko99gnvYei",
  "key17": "5n9TiFTPi33sqfxkQHP5yTbcE9zqUKmuQEnUBadSuz1YQrzQwG3QN95N2mFeMxFGN8U1sVivm546Q7N6N6PvVf5r",
  "key18": "rAXQGgx3wV6Ht2kzXgh8SryQmScQcXiELsefqC57fUbJFnhNap2s1yy41mfLRNv1Z7MNPdgoL3ZPk3DqT7ZTW1o",
  "key19": "ZwKabt2VTVrnNfjqiisfLkTbivZAixb8iDSKXqTjXitHhKoShwG9RhcAH1DWSPXZHZ9GsYvGzUcM8MiPcBRUExY",
  "key20": "PPzkqUNjgqfuq3drCCXWw11WmE16Bra8V3XCY7fz7nUyktLMz9mH2NYyWhY2CKgyZLwnqjTQBtLwsfzsfKCQ38y",
  "key21": "27hWQXNzSvBcnLRccKd28Badq7asxZmkx7jRRZEaRnNqPJF4SAdGeFRhGBYmMHHpTC8GDGs2fD8quSikK6jcxTjK",
  "key22": "66ANXX6rhN5Qz6eVXbXSFqbLxs7zekR5xYpcenmD1GxuhaHTmkx5it2Jvpz1njMVGs8b4oeYfPFff9me7r6fGrU6",
  "key23": "2hdhFKdf324q2vSFARLNrTLwDTRoe8bxn3uEeWf8uJjZ1VxPqUinKayAqXt6BETc4mbUhEh6r4BK8K1E7jYY7WVM",
  "key24": "5EqLktbT9u3w6AabFTQVhcZaMaUiC8Uq3qJMf3y1qxLJp8zUm1pjgrC6MyDcCvaHu3R4o5w8sCvK1zBQHRnhGRNs",
  "key25": "3x7D4JGrRA95GGG1rJmHtTYTne6ddAcBsHFGYY6fMxGFAtKLrNLBu7NkCzKz61nwmAnsfqymXG8nR91WRkWfUEcY",
  "key26": "3vKjcfoFnp5WbrbP7rX8WqBKvsTjptC11MZHUt9yUpSS32Rogh9MtFtSaNUB1KQiLVYZXFKnWmzhpXw3cBDeCaqS",
  "key27": "2HnD7ZafXoTt94uCMP9CKb4nRzmuPsQW3PuZZHtTP4Z3846v6wR1ureGPd6TW5gL1G1iejEVXvqYdn6J31pJ8g5q",
  "key28": "2u1aV7CumGWUiTgPtPkzfrHU2HMxTcZm7rp8KNw2D6AA1ZQxs6iTjnHNTxVZwYWxZnFts1t4roG9An8nx3PmyXA9",
  "key29": "Sk7qMxJgFL5gLGgbcFN99ta7NobDbZm7ei22zwPXYk3Qa8qp9jrz46mm2aXSsd1vRc3tLtxXZxzn7YoJ1FMgyA5",
  "key30": "4YyH9rd3Y3KCsPdJx4zH434reoGMk9G5QxNhx6HMR6pnh8UtebRn6AKR2JGTaFz3mNtobYf6qTkCPxQjWjtPNYjH",
  "key31": "2Mmsh8saC3szEJgQr9URRuXdLXE26hPa3wg5FNbWZsrLNC7CmRFdcoGs68srxUT5Aagk1voErCUqSNezxArTBr9e"
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
