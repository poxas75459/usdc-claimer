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
    "4nFqviNyVw4Ku83wQ1tAAtMQNLgqS45hrKyCsQNkXjdhGVqCnqeButhtyssCG6LYuZ3UKJ4gmaAuZv3EhaDPHjBd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zaMRb6rrhCyK8Ck6ePYeKH17wVLBFLr8GkE7D7RHHWXXhAKDV45ECZ7pbrCKdumuoBXJkhBtqFiVYc6rJ3zcM4Q",
  "key1": "71nAj5J2Y8yvQDvRHFq2qyynasPKjvAJFoH9PaBbAo997PvH37hq7ZvjJNXw8jZAvU3wqyYj6HbkemhnuaMUXvt",
  "key2": "2ir2QfEWt5yFSrRLMkKXDRKMumsM5QzR5MmW2jVz8vtBHpC2CHeixXp8Y5gKoyteD8r73o1E6M9jHCf1MVxUzNCs",
  "key3": "2h4gj9H8fEFN6ubKtHhVwR7sunVpTTrb86goF1Q71HkUKgJfCfNBMpgyTQmTUqvCqRhty4PsFmTGG86DsX6Gwo6K",
  "key4": "39xHrjFtyZEB27Rm4QEymZWNYc1A8od2xGhWrfnJmsQ2r1YDNed6NnAf2wjEyqN97VNfAqxh4MkfyDZgT47bFJDL",
  "key5": "4M9MnFDWhWvqhEv3HfXxNT5jDiuNyQhobeF2ecLaW7BsSveCpKgLBnffvefYzo8v9FJ3dp14bEJHhBzpA8aVw1Vv",
  "key6": "4cduZyFqaKiwT939886vdAtRSUANuZsFzc6njbHjwJZjtHB5qRLEJqxgjaoN7W9Gq3HccXyz1TgKft1xs7jtqyDS",
  "key7": "4bY3sifEkCTqqXpSEuvUBvvaPQhfuZmAFj1pKYx1gRqfumPTwN6fq1GALCjAVspJfs3Y8z39t3EBeqSTq1bApnGK",
  "key8": "2fSkMVmQBeZq3R9dkzJ8AKXVLBekDHUZevthRZuWkpuGr77TUSi6mZbrC8BVrkmM9i6aEeEWbY55MVMeAdSKvjD1",
  "key9": "3PjvAiRPpLKC3N39CBhkivsN85iiRcEc8MnyBLT4ZwRCzR8D19LjT3D5nEphrNVFE4wujcZiU2qkLgxhQ9yXfeTK",
  "key10": "2oozPtqHZdwZaCyGKXmkDrbfKzmtLZ1izwS6LZgAEvnT2HF5YhXFFNQxBiUhbvBsHfBA4d3cxRFvhRXQWkuwFWHq",
  "key11": "hJLCnUerRVzBLzdAwZamHsNgGcz9KG49nKuzezD1M9ai4oCDrd5UDzXwdsSfw4gtZcYS5UVbnyxr916zxTowRKn",
  "key12": "65qw757fCxXX79bDoxi1p7XmufCWPjvfXoSLiEfVssWkjpjDvnGwzeWkPWDtWzG3VvNvDffFQk7z7jFjTYozjLUP",
  "key13": "3P6MygtqgZPDuWzxRa5vzh1imEjTJmKtHVtNmFFLTmhDrgsZdVP6kuSQ2AuAGeauBivNkaqFXSk6U2c4HbairNnB",
  "key14": "3y2gjmoEXCQb3Seb9ckej1UN8phcgSovFhPrbed2HdmvcxDKhVZL8ScMe222wPgHygVxDeHGi2usiXp7FT1JyN3C",
  "key15": "3Zdn27okZVoLUg3yH84BnK9JMdkDPaC4LnWya2tTtdeWEzVkiGKNTdpMigjopa8LzsqTnDYtrEXTZrZLkBdKfjtL",
  "key16": "4AWaR5ru3dKicw6mckoKN3YR2XwmvfKjeWk5Wz8qH374VzCa6BtaJA2q1Zn8aSkTiyXYVx3a7bhdVj9NKBxV2WZ7",
  "key17": "5aW7qG9jUhXRUxUQQRmnZcUyWejBaqcHQkgVNZMZudgeESKchFGXZZREnHvNHHcsn5Myyd8wNRGcH2HnFo6Eqwao",
  "key18": "4CrTJhqZeXYnSbE5XhzfukYYqzw1uyC3iZTWLYN3wTQ86xA92KSkNJSY5rnWCsRrkEkE5gyGHBDEcbYwsyjANxaL",
  "key19": "53mWgBtiqk523BQizfXbPeTRMTuMgSeRxFLVoJE4M1Wy6tbPBvDr8BvN34R8sBJHpFawQhBqhQGHXEQgUKwPQFTK",
  "key20": "cs4jMcNjBM1rNXdru4e6hbid9iwUTt8Kh7qnmxjAGEfknXX8s5V5dt37775UAnEnmd6629saP4wdw5EQLQ7QFgB",
  "key21": "5QHC5XVWJESZnyh2ANJBszJYeDwHdnSox7kmKssMYkdezNeoY1cQqqhwBuKNuhTZS5tiZ39sWcNAycPe5gFs1SE6",
  "key22": "2W3SvMDCetzBxq1UMMDLvwTxF6QZnbMUC2y7ae1nbaPXvnsqi9WTFokRmj3LUvBHHhSJAPHLHH1b7rKGkKuHTfNU",
  "key23": "2tuntdaYaNaQcbuAEEgYqck49faW3ZPfmihN7LEFtYygPHK7keXjPVwkrkeD21ZAmmapyg9e7e9feMAvsk6arTZW",
  "key24": "2RdrVmow4Hu961hbKu9xvJ7mtkYCxi14roTqjEh5g3aEUCuvvSZjssp7UB3U7wg8CJDikmGuJbR9gN3DegrUxU8N",
  "key25": "499kHkKBCTm2mgcwnc2b9j9dgpWKCzvcw6RVtK5yomvz2pFQX3jT24w5yRk5tR2ZxQV7n2TXM2Hd3wCHe2EE9ZfR",
  "key26": "5zmXG3V3WhuoAEuj7tKwRyxPfqDvyiP8boMbXzuheKMs9Sy9smuLFt9hUKrgRoLdKB8EX6SbKCCeoaWC3i5Lw6Bi"
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
