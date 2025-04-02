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
    "5zYtftCmRo2TJGhueHCSPDUe6PbjJVZfPED52KQfronXdJeND63BGmz2FeU3U4n7u2dE9UFAFuzHLEvmd2A9WtSz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "zSfDFwXBq8GTdNUppd9SsAYdQbELDGvLus2r4K3itz4cweDKxti1zHB5im285DMKMXybjQsV1VDFti9nQXUTPhV",
  "key1": "Zc7KCjpYEYLbvuYsKY75gz7YmWa4QFAC77ehPgZLFr5LUyGkWcGZQtfXEptBcAaQZ5Uy9FyzekyYxK4dZU7qF9N",
  "key2": "5EDbqDXbZYAP1UsaPzBx1ns4Za627RY3F1Af3mGP51SFe3bpkdhDJHaxdzzzoCopxmM4XJaotNqDVwmHzw1A7ZBX",
  "key3": "2VB2BdFNYuMxe8mahR9XEyBJ47cvu593K37Wo3hNntP9FP3UjozfABVNptrN9gkAKyvhRxDvotSMzP2nWTrQMaV4",
  "key4": "3g5bbYVywJxhYmmKjBnsFWhPc4peVb1wSkP1N9PogDAs8W6GjQPema8XjfijaLN9eF16WSXBeAntnxsFDqVzeJge",
  "key5": "2hGVFbfJbR4XpNceMwvgxm8bFVcymz223yU4pwuq6cKYu9ZipNf5kpyzsmivkAb7k8XD3LtcA5uVBeP4QjYajr8j",
  "key6": "32j12KTkovB19cNGyyxhxbqoJEB8PWDoLSLt7BLkN7XTnyejP1sf6NEesRd9qZ6HSa6fRAtpdmjknfeAJv1tT7TC",
  "key7": "2Mx7gYBzrVAXstzgK6nDuPuNsy4GLMphQQyR3xqM7Vd5Em7KM4rLdAbYgX8aQQqU3itZ13UGURsZyLGWEGgx6E9E",
  "key8": "3eeJzFZAA4E3TpeE2SogfZwQRPYju7YZd93CyNFzLz8QEdHH5NjSCETJvNwnSWzNJCybNUtmYzXwxGEZ1xUvmdVw",
  "key9": "5iEqvFAAxSHU5jrBjRPmRjPi6Da5zwqFbwq1poA4eZbUhz6Be5zUuErRSHm7L2NavGksQZfAKXjaYsKmpAUzRc45",
  "key10": "Wxm4CH2rnwDEgmcwPPTNixJ3A69wQDRPqAFLgj3Z5k4VjC2U2wEVoRkkRyzbUMnAdSKADcoYvDAocxmskrWpis9",
  "key11": "2das6U2ybdH7eQkr3nxZrnA5gfmzEGk1qKcgW1BoadP4ZnpKBCsosFw1V2dgSipCoxzDiSJAAJqWPA1jftTVWckx",
  "key12": "5HynH66UeeF42T34wXGMBp61iq6iM2nvtPP742fSRP9okZzHEJWAhJXCknvFE3vHMd41yqRBLoRDrNastUkHe5sT",
  "key13": "dWtcHrM3T3MqUpJBhYded1rr4WpFyJfjGFFXCeJJN74X95V2EM85hG3A2G9GvcyeW11UCB6wQWCKZWiF6ohUuos",
  "key14": "2t1LY8oEw6DG5VH9MPVXKCgddtgAeWrtfGyR3D2CNp34j2xeDhKubcFkBgEv7Pqq58woRLCYSGTPrpgw8AJfjAHn",
  "key15": "4zKZ9rAqZgv5Jkrf3i6JywpPRgrCDyk5Z3bXfQbhgVJwA9sC6onSRmerA674NigqNPVuJMgzn65VGPAeDvbnkf7n",
  "key16": "9btFe5pgZQfBQtEMsJMygbLyZPd1eYKQEZyHHKEBvBG8zSQwLHsnXG3NpmXFqs2WRXxFpBbkxbUP21wKPze5G9U",
  "key17": "4maumRQ8kcT6H52Wz1PBNNY5NBTxLzF3NBGZKrvYNQ2BLxbV1EdKePUDwWHRLJi6C9RcUq2zce6i1GUFtXWFzHpa",
  "key18": "3ZBnLQmg4Kk2342nDHcae7T2Z892nYatkUsnExqkdbKAEuTVZwqB5F7QfEJvW77RKWHR1CFbNFvshjLftoYoE5rB",
  "key19": "oiitBKyerKgT4WbC1GH9SsuiyFBTT8The1k8B2Jbdx9Fk9k6P3M7hvGYa8gzmRu81fk5kExD3gNgVEgmYUphc3o",
  "key20": "h4caFPpDCyQsn978PwytctCBecvKexPvgsooFCLsUv8mcDdWSRefFZhvb79W2RLjPLVEymABmueBjpVFueAAmgg",
  "key21": "2bx7TUo8Rvmf4PpXF2TWkDrVqo8xVmB3WBY8eSECc2BFQq4J95rp9wxhzxUaBQcoD7zJND6y2A4ZCradt73nqmYC",
  "key22": "2HXAQV9ViZpWPMG4p1BwVwEHJeM796SGHAczYv4rP9HdHy7mJc579vpYXiUYFQYbWo3GehE6rsLqr5PyuW3MxxH7",
  "key23": "22MZQ14r7QPo6LjWhH91sFcUbgR9AhGZ8P4cuFo7GHdSK7yzQHdTEHDowbPPPwTSNygi192MjT9nGRLQ8oWqJ2BG",
  "key24": "3CNanw3vqrDEvY3G1r1ukbZ1gQMsSyMrXUXPiy8CrxCug2ctTEXrBpmYNSsbKFymEjiDRNyTMMBE44T2aeEC3F5t",
  "key25": "24TNeLQH1fCbRjq6WGTu5s7spEXz3N1BUT9WwZAazQo2rLsAh5nDe3U9eiKgPSnef38C2YTjHXMRah7gXrpGjn4z",
  "key26": "4a7Ei5CeRkS6r5ppvmnDJRuMn9Lu29kg53tUDvbyAwhM6U5tXPmuiHHgsM6wiaHrDd3hqS5vURvGfG2dDdxoFadf"
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
