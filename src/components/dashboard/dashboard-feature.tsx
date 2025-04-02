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
    "67WsYFKaepfX4oFP8EUJ6xDpmf4yCGWRdBFN28quXfN8LJG7kffnEhbb2oLTrKRQhxQP1e18xm85CT15SQJxyXC6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UQnj9akigA1Lf6SgQQPRieGxEwUoydY7vDp8uftqyM47pG27sADa4sBNdxLZKfuhE9GwpMedkq1Nm2hqmw3VyWf",
  "key1": "3fcT6oEq7hmzSB1o83c2EZu2yNZrHs993zrhnge2bJJF1KPvixHQGyUtS7xqKBUXbGjXKhJz3KuXxqBWNLDxX9U7",
  "key2": "5uK4x7CeXtv7idu8Swtzm7uoq1U3GzxDDgFd1NwwBdwDNCubw2jWz1Y2RDLzwc8juz4qf93Lo9dMaBSYkeyG56bs",
  "key3": "2RYRSKtB9ft5FWRANsBu1ZsyjtXs8GEJdTCi2S3CfNzhzutwBE9mKCmuynFj3iC56Mf1ixwN3gNCNF69S38LqhUo",
  "key4": "YzEMSjN2DU7Bd6bFRQpLwMYaf14amc5FXTiUtLtNgY4QhBygaRgUHUxnN8ArRCNZGgyFuUasAhougNDuGLfT851",
  "key5": "5ZPuLEJjHEnKQkmhCCkKS5kCwcodgsywoKouS5jGzMuY1Wa7BvRoe2aFN31cEAXzrmWWRbAxtMvq3tEToszrx6D9",
  "key6": "48BPuvs19nFhMPooQvzTpfui7WJyXWQZNn5tRH6tkvKVijqaRFAcGYXYzoes8YxjNSxYBEZNZ7CSRhRpFu6bzVAF",
  "key7": "4BLN7wXf5KkZPdsb7ZTbKqHbq76gbgzrLwdeVHEHV8EDyuEr4Vx8ATpiR5CPdNbeMhpudwymQyJzGUESLCLd7pnL",
  "key8": "3xoWSV9Ts5coFAaNLH5nvaBps523ffmXd5aXQSj9d2cbwsQYCeipD2jTnoBBrntt1Gosz37EToHVPsbsLtNCai9V",
  "key9": "xuAbTbDjrEGnvo9FJMMq8kZw6sKS1KBM85kasZ7D5C3tVbQ1faFE7LnBWDykv9hmcbpFyU9FVK3ZbWiAcnDqBMQ",
  "key10": "unyNpW1uuYCYQ56rH3QbRCecu5fyM1vAbtPhw756rX3Xz4HtEo3GctrfbQuQmFMWxxUt2oYP4EmyCo6ePQeSsoS",
  "key11": "33kigsuMpJyKdDwAXW9RuPMpFKKQBecsj8pLamzzxtqdyHsjJr86SPN3JaZgbGzF1CszU1UKrJRr1kSrNwDZ91SL",
  "key12": "TmmqA4PgwnVrKsjprctDAwSaBJ81jhYL1dVXsnQ3pa7gVqs8AdUFcFmHTAEkRr94grcdY4T4zJ7pHzmHN9NQQf9",
  "key13": "5oYUUjn9zxrdixhpGqU88qUXPNk9W4FnLiaZktvPaceTesTBw4tdnGxtmFjru73JvcgwiV5jCgDge2Gv2mqcpzgp",
  "key14": "25Wf8ve63iXumFoLNGJNNkovyggsEEfwqu8babuZxwgTh3uWCGtPrcJPaM3T8csEEWqi2rtch5yaAGraemB6Xis6",
  "key15": "54UC8rogJu4n1uEMxJHrwm7vgocXkGeMoHK52Hd8m8Eh8UuzNFSyTj3PE8QE11Emb8mgn5RoR87gvyd4Kj2NkVbN",
  "key16": "2bjCwvQJEKXjFJDm5a6R4dKh6bmadWnfdwWZVEW4beLhGbCULA3ptXJkfrvnoZmNJ6a62rEzyZJ2fnrdhvvLbaRd",
  "key17": "4Ku44xwXjNMShxrUwrfYpbHNK3Yv9EBPNohhk9zPdekh9Ya5QisuMCoNNcdCEQEezgQsWFafPeSFB7g5zoUGotPr",
  "key18": "2WsshRSudqLL7CWsTT9caNGZYM5yduVmM8EJJLQFLgyJPjQXfJkoMm8Grkk9Jz4ZWAG9YRWLLic8TRvPv6acP4ev",
  "key19": "rqDjgiGJegaokvStDQus3ttfpkx6CbsBpKnwWP9Evs5vGj7Zw8VJc8RYPLkLtx5sSS7BD282ffLWvjFkYVha4qs",
  "key20": "4R8fE6DVSsSX9LMRt1uPjvB7uqHrpXg9kbzASFLQuphZyTH84KKAAcK7wWBsMT1mQcEuCWFWaYzxdTm5MYtX7P1C",
  "key21": "3XmWs1WB28xtpkCjv6aTdan85HWRieH6dSYPFLm1GPuLd551SQVxaTf4H2s9yh8aK8p4fTdjreh3gRprArr5Pqan",
  "key22": "2NnateJZkgUDbnHY6kgf5ihzyMpjrdHuYzv7czRXq6ger6jPYoNafaTQMWCqQuhS1Y1zZrgjwsxY7ixhSYUoWAwb",
  "key23": "35qH2XBQYaHiS7meniv2YCYjZKCMmUbDBXMVUpXf57fSCdYDAzmyQ31XH7mVcNMaiHEtiXx3PASjpCxHfQadwT3W",
  "key24": "2YbZNb3eHY82vqY1xeSFh3znH8nSadZoQK4RCW4d6FTEDwZ9sAsZtRvrotRaw2cbQChNVe3HMS2AMb8DRJvoed2A",
  "key25": "5dQpGRNnb3rr8JR1acMEcyuoZLd5FCCeq4Nbyi6jDC9HjVL3r4NNtBeJNg3kaJ7rP8HbDageKH7crHy7zcPk887B",
  "key26": "3Adm4oDPAMYx87qVLFaqcFEWE9fwxq8MLQEsRg8T9WDE6kkf11m22EbrdCDQL2JbT6yJssD9DdvLcScQuHTbL93T",
  "key27": "2md5K2AnMR9nScpLpFZYC44aduZaP8zT7cELeRJyRFAgLDfHXdFgx6W5ipohcEhRyteGsb5TUsY1q7ByigiaqRa"
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
