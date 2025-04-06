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
    "5e7nTaFTcer8VwywUdwuz6sNYRBTXLkSyAT5TxrRbdoGBnWYyqcCTgJ9VEAnzRWtT41SpR7gnkmoaKLjK86vQuDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "F7QqMLosKyeU3cHeptswJXkeoGcnphgcN8k8ukQm3rMWAQDetzkjEK1L7W4BCo36hJWu7PW5bDLiqn5vNP3m9ZK",
  "key1": "5Lzjmtvb4RpZuyV9T7yBQnbwcc445nRcNPouZU1PMeeAzVSpvfD4CTcGzq3nNeMxdjD57hN9HqFwEaBtL8BMP9xF",
  "key2": "2NtTJ8PzoabwQFZ3mvta6ybkKKWizBkVNnbhiKU1pGaJgBHVS7ypfJYQPHqEWcUu1qfvsrBGJF1JDjwmtJALugYe",
  "key3": "2oLfdmy4Y4BJLDwBLQpLNt5ck7xbjZVU3fWgR7V5Wf8Ut2hwV567P4X961QQAHUXt6QP4KnWVBMUzMjUpmWzkjam",
  "key4": "3Zech6tzqA2CSxcxifFvZzeb4sWaR8qSNRfHPcjj9QownpV9rftwvs3U3QPNat4e2jhYatTjrSHEwU4fY8kZY6Co",
  "key5": "TVTPkcuSVTz5srnrtD12E9odxrK1FFCLJdQwkMCedmQF68FhVFVqGNYCXjgXaL67xh4fztUVduV3mCafTBrRWaB",
  "key6": "59q3AxgWaK7mNc1dJZAULtYbarBFqZwvEij524ymaKvRcQ55b97x2QvRLoqjfGKvScYhFDwnepAcfXse6FLH65Em",
  "key7": "2D3VJsupjgaKXtcrG2HP1AzHXnuUV9wrzZhYMHpLnWBhmv7J3cJLBuAXQudZmHXfNLadPwKRcSVKrpJBCyM6Hev6",
  "key8": "4vZw3JBQPBLNkhrR5cK1xjtV3kN3rdEZkxLEhoUkRS3qHuKttnsFD7ciHQ4rC9mrDGBqQen6osfqfCkVVFLDdiS2",
  "key9": "ZwWrM1TsyWtsMWv6TPQs8JX1HwTFj9DBDxj37cbWvKr3KqjQxP4NEqPoNJeTUxuRPPeUFrNDTrkLreYdAJ8VdzR",
  "key10": "35T9Mb4k7Ca1ZNhuSshH3wEmNG8aYBbnCFr3ubeEwE4BFRHkkjYSWzySEc7YBY6EoX4y5YWLZzDLjXzNnhpBqSSJ",
  "key11": "BZQcJTmoKcBbZRWc5h9kmxXjKjocz9NQGpRzLtiiAPevy88V12X6j6fpA8Vo1QF4tZf7fjjxbdnUsTvBXrTb9BL",
  "key12": "2qdCGoSpNJp9jc6aj6hTMhxw1DkMtPP6RFrxZmof9Hc1BYaC4zYkqqVY2zgxPbbZgMzX1479B1N2jRWQxgAWmMhX",
  "key13": "GcYamihv86NYL952CG1zrTrDRKqQda7Gct1HdY8dpN1i5BQs95mDxiAGNYmDqdeGHnbu3QrmHnukUttsGkZUUGu",
  "key14": "2uyZ9guyfvdGWzStU2ibZAG2gk4QEX1WYLVJ8JTLyf28EasLjFEHXbjGhDikmDzGCQcePxTfARp4SCXvXtZ8QW8M",
  "key15": "2PU3pJgoL6CnBBn1QYzaLfGVc1ZNtXMwh7wNNZWNZRq1Z9qEpQU37KKkX2a2vs9LTMX5CgGT5irYUxSKNP2189XV",
  "key16": "4mhta2S4dYjpc1nmxqTdhXz1PoUohpTF6NnRnp3AKeGrFPHa92AvuoUjyaSt9XqnmkCnAK6fs9fTNrjysW854kNT",
  "key17": "2Bfv7NyR7t2ryV8Y9r7ftd2YDQeY2HbmAL6LVc8prhLqiaiKfzyzqfYDYq8rRVEHAqYPQahRrf8NZ9GguV9KiLdQ",
  "key18": "22MCqQ9bR9PHTDYtQbjxcVoTK5YtZJAY6PFsWfsuM5QvKSnMqnWqT4Z9iS9F6QvjwXBAtPXYPviUfdCjbd6k25Jg",
  "key19": "2XBH5WgBoiaFjV2Ew9Dy855RjtwPU9SVnqx5rWdHoP1iHmveEi5qWZ2Khi8XaWBpaQHKwRAwdDnj24GLv7cM28qa",
  "key20": "2dSW6RguBywQTANpHbba2euK8y1DiqGGzypiAcwF9syXFoWLX4r2jQENeQM873xRqY4JSQycotgnJS4mB92ApWK6",
  "key21": "33vgvc8KZeR7CrukrNd6s56gMd2rdofAPMBiwPzNchRLb9zvZjUh34H87E19mhfHHihdBm7oKE5G8jNgB8yywynj",
  "key22": "47zSQwtnmvaiHZ8H5r3RqvFEAd9J69EcJgH53HcAevu5tqYmqPVzEppPFz3DFfh9mvs3CJM1Kp86UMimJak3wqPW",
  "key23": "2K48oF9LivQ1GA33svrbcks4zGFuevqE4W7PCMkjBDY25kDndW9fgNbMkSdRtTRX46WeJufSzkMSx8eFMR2hVrnp",
  "key24": "66MJ8XRkR8daNB4yBtpsZHZPeQojfX8Z7S6LS6os5GxmNfG975nAderdx8TsAMpho6HhGjaeTtNoQkwrbLqV7NWj",
  "key25": "frXYB4cZKPJifZCS7ncj5iQ9fUgDYauBFXHJg43wPBuQ8B6yZVaNkmjvoBLVXbcA6CR1yinvo3BpKprQgakCWrU",
  "key26": "QjMJkGxcCFqGyVaM9z17iK7Qu3TaYyworAxfE3DSatLWcCyy6YJt5fEcbEAyUQXLz6oGdM1cuXLQLfHCbbEoNYi",
  "key27": "2SzGoLjSViN1L1h1x2e3BBECFJVebEaiKz3bKKqGsk3YfmLh5LXZ7gmtnQtQ1UN63552nEsfaGM8n7DAYDKcT8nw"
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
