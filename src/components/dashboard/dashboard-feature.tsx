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
    "22YHoLufS9uGFqvxN2GbBDrcFVjsRL9Pvp3K5goDUo9LKfMu4NnZzgxgSNNVU6fmVfr7gDde8q3WMhKPAXNtAqrC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4chpeZKkPEBezHsEAdw7LeLd3xDnmQuyiJLq9bAd4ux8sobY1p3NZcny7PPX2paEkpLJAcvgfKPt1kU6TeSqnLV2",
  "key1": "5wNBjHCPiP4H9xsHUACFxEcxASH4BKCqNdoPTyrZd3HwhnMKdQogakX8GqtRxrTVHbwTizh1ENa5dmgzx5SiudBW",
  "key2": "4JDwzRnqM9TqMC2LdmPuxCDXeH1akH3mPqf4zXJ8asTLMAG85ssmXfssfQuTMXnYDRsNFjx45bqwSE5wnSa6Lse",
  "key3": "5PSXEt23Q9hbvd81JzRVd7q76ymbLXedCUNn3bdSMF8ie2N2875trhmmZUzHGZHQNv1MYjzdZjKJSqpZqs9PfV8x",
  "key4": "XhbLN3dkFg9LcERauafvbWc7Z1ZvvbAxavhsNFd11VD2RGj2NaNLNJCn9zYipnthxRHAqvum8dJS9TkUvJJLKja",
  "key5": "3vpwaQ1NvgoCjQe1gAxRR9fXNwHBD8y8xi5YCdnmf8wXhStoQMbQZdc2okcv8x5BQqsmFJbzKijaPv1JB21qUuFx",
  "key6": "aZ1ApC6cWkcfEu8UMjWinpDZFhyZYyx9ky9u2GuQvnDgHdUQmwFRQY8HhmbYTyz5m2ZdhLXKf75GTB7qAsAxQzZ",
  "key7": "znezBtEEYxbSRTCusVhRaemFZawBGkVKNUx4EAzahrVVzvNdhKDG9GisfLsWUmyZqxEbo5ax61g9fCeQy1wrLKc",
  "key8": "vSy2it8hvprv38tKQcRJpp8QuGxC3zxfvQessWzf1GufMbUmrdungVHoCt8GJuEz4eL8TdtzTGjd4qV9ffP6hWv",
  "key9": "48yGevZK6geHg5VM37jjREE3TGJ9dWTYS3whdTb2FzNE5VjUckUknczJsXaKeJSuyQfXFozqbWCGsebmjCYZkF1W",
  "key10": "33Y989UQifnjYiTMHUS1FQbCmgy47oYnGooaEXPuKo8f1mx1GxtwgKqvhfjfjJhJa3VVo13pYjrg9cwdXm9xBjSp",
  "key11": "2gjd1t7JcDriQXKv9J2xS4gAAbA2YhoVx9MiepQPv1XqDHCm8h1oBZzfRbtW2r887DgxJBNeWaX39NvwW5myGNm9",
  "key12": "66rnYvS3cq6gae8JoXXcFpv5epd57dbULmawzxJz8h991SLNAH2LqGNrfyoA9oykztjRd9DS2UTqBqQseG1Ywsoh",
  "key13": "4gdGXsGhXatBVYteuWBQzPeeNjzMEZFPnNgP5d6WWiRRZMk7BBJaVDFfLw1ZSbRTJyfhuxNcdVFgwC7XZCsS4nC7",
  "key14": "29YVPmN3LibE26QwXna2ANzXNhPrCtv9ZUAwgqrpkmMmM8daesM3Qk5BN49ENPCpKPg2JJCG7J74nS7JMgnSoeDg",
  "key15": "2Dc4QLTeMVga6yvBknpJyXk4vwbMoCwLtKzUngngmyUqzV2VjYLozQzDS8XU2w74CrK6k9qYSs8sQc4upc4V8dxs",
  "key16": "1sTUrUUemQ7Y52Ad6AhhB77wQrQRLueZtjXgTnpgtMgfAm6uLmtFV6y4e98UmLMkdDoZ4tNDawj7sp1Zruue5vR",
  "key17": "2G3btsYFFe1RUkMjKpg8rWLWxujgPXtzFAd7Gm4e9fmEMD6SLyESnGFC3J4PYbwEuiu1pHreE5chYBWc4GespzwM",
  "key18": "425TuJjmjGE8MbPRJH3fVsSyAQeycgbtvjckVQcV6ESPRY19h2azZ4RLbP4k6ZqpSyNoJttgirSpgnQhYTxAHYVj",
  "key19": "3hJppQV4Jvu8Q31HmdoKnMwnBwgJvF9KxeRXUYkgvgVUTEQyUHq2Jb8pHnCEGScUKD6SFp6nvT9F9erjrD45qcJG",
  "key20": "39uFym39727Rew6JZbvjGDnq6A9Z3EV41xSy31KYCXq3WkFfkm9FaXe9cJLaJyCwvar1KYrHLNpzTByvbpBL7rmq",
  "key21": "3HU9oJNBr8TzFkxAogo8ZAhhow7Sb5TYsHmBoXxUTNyETYJkpjVUMtsLGGpCMfKRaNfMFaaj3oN7YBYFgzTvWwyY",
  "key22": "yg5ZgvjW1wxCwZJ8dXkn5va2bmFGt7EiXtFhxoevATT8wbf7CFbwxDq8sTJTxX2kJpXLTu3WKaA9Kb6wgPioomi",
  "key23": "26DnPSMLn6e96k58bTgfpnLEFdzxNU8cU4qjPsFgZn74SF65bu26rrVH3Znc8pkt1xHE8o8BEfFmADhjTZZvMUzC",
  "key24": "4eePUcmQ9jowByVwsMztShfyXwbQz6HtTBRE9xe6csFPuegrajewnTsiTRLZZH7DMzhPDquaB5VoMpuJUuYzW11u",
  "key25": "5Kbwnynu4sHWW3jhoAkeZ1gML6DGMmQVWBjjNvFGVjBw9EBkpZLS9vHwqUC3w5FxtAue93Ky9TXdkwmFATsw2tiG"
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
