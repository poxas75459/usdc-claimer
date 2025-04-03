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
    "SwG6HjEkvowDEUUqovAuBpHxgb6wxD6DxR4Fxee2J6RLpnunHQYFr95brFvfqq6HCTVusL4e1JBWN3fKD9aAkwe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "eJyVztcmPVpHMj4ZbD4CVtF8eKtu952Smpdqh7FyjFGNjUF25S4CGbT6KdpNH1YqTs4K1bGJaUcpdsQAjFRGYxN",
  "key1": "8SDSezX1HEdJ6hKFyJj2snUVfYu8FJS1krK6M3UprXbSsPm5W2P6dgJ8NPFCZzUTaiMqKGJWxRVY5MdfYibyekF",
  "key2": "5x4omy5kXdoMiCRZEALkonNTo2waUWviLWdmg99vNQAnRPX7nQK7w5UXxLXqHhYpmhCEuMgVui9mvm6tJJ8YJf2m",
  "key3": "5oezKfMEJNuW8ufAnh9wLtFTjtAg8RqeThrgrWJqoSdr89wspgd5aWYQPN2FWYPT8FThwy2AYuJ3zpxKsHF4rcwn",
  "key4": "58HwfFEdbzgF9ZiR8kAjRbFWfrnwMvDBdTeZ9XU5h5BhMm17MG7x8vyKbVtFfJQk79xCZMhSoczDcdAAJYiavj9i",
  "key5": "3nmGhygtmojqqqBPiEjFrFFuHPFwCTmR4TvFfg6qCqphfK8i5XXLMx9DxnboebEUwVnd1QAt6qq6ZY5YyjNyEzVK",
  "key6": "2URE78THuL5uJnYyghYfSMSioftPhxMUvBdffNPGvTC9hAjhZSogvQBs5WwkBMjKPe2qPwCo1Mwgryuh4tPs12x3",
  "key7": "3f1f7qVRegPRskmgjoZRQdPRqqhTC2xs56m7tepVZt9EnpwHnS67Ye1Z4JHBg8qRBaoJTLCHErvuU4KBrUHfkGC4",
  "key8": "2TbteDGXDXD39NF5YyYN5deyuykRjxf6NGo8FRm4w2gNqoudcWbvpkBi1ES94XHf9F2BxaN1oQyupXjaMheSYKBe",
  "key9": "5UnU4RsgaJDB3aAoBbDk4CXy6foz6qWqSLnamVD2sBKB17m1EZtMW2xQSNVWY561wmwxqgJfTeRJ2tC3YmmSNQrQ",
  "key10": "3wnsgJosDnT7CTmj6cKviJwvJ8i9BJtCZj6TrTx1SqaLNj7Cq6b3k8dC3FgZ8xikWRFdztrhr2828tph9DXc8UNc",
  "key11": "4onvSwvk3LxhQgfhYDhynG9tnb2YoaKbN4KD31kX9v6BxkSyvZgF2ESU562DZQB9kNVqNpRRvCM6VVcoofsgEZLd",
  "key12": "4UKFgXQjLgGzRyBwS333iJ6hxsGtS7ofhmxecAcre9PMXwyuPjUyXF3tLrzny5PVj1WsbakxMFvAFpZFsuCYbzCe",
  "key13": "43b1F9gsFYCf5NSHJVq6t2fUmaSckrjFJ26Wnm6NPfjUKZi7bmdmpsP4HwMsEzuL4PA93QWpdEM1zdyFaRPrSP8N",
  "key14": "3z9dphbGDt634oUCxASJKQgRxFV9mVEfNKrHtY1GidrZXVvGKFt34zpXzL12vZccDVrzZ9qbHbM8vxxm986mwbXa",
  "key15": "4bZh5gkNsYS8porPRa343Qkgfa7f3dJGLx59JCe9KcPuSFBbCBMjPzmxfyHscogZ2RhR222RfyjfAW6nPLcuyAz2",
  "key16": "5SBfXGDnxRS3V7MqyCDSovHsmHok9zorqGainzh9JTvN4vobRbDYg4V8TMcCJ1trkGxf6gj7k9GNT14xVYQ95xkW",
  "key17": "S1J72mTPnDWk9T3TAF4PwJgHZ1aXP6y3XAtjbR3rqovCDd3G67TykjACUeRZGeZfKFK5kDZpvhewaHM8vTXen3Y",
  "key18": "2LvCpedZLhyiQUhEkt9ohWERMxdjtGmGkfnf4EFFNNDCr5MFWTDvqxsowUkZyVy6EMrLy8gZmZrdBeNg1xWAQkDE",
  "key19": "42Aansv3qjr6rhaZPbBhMXCEZ4i2ZoztGeNTDyuQizby7tWjmhnzkvD6MWQWLEYoeKRFQBmU3Jvg74TuAfSt4pnZ",
  "key20": "xJHcJN5dGkZQscnzKMHYyfbo8E92n51hsoTvKCjFoyLejuA3tewDTSQMKcBQGZeDBY3wSfApYpKkda8aK5P2tbV",
  "key21": "5erLkt5aQPHC5tBmgPWwwZgdxfijvFv6gUi6CMZnm8GmkjbasycS4vjhdBejtuNkLm2oDrXC6w9nnUpanscCPSRp",
  "key22": "2RNSzPwaUyAkBxkT9hZJ8paag9fN9f95vQDtdmx9mNeTeFrURwBiX2QXpskyKXRaPQgAq7PFYPXjg3FzkvfWzUtu",
  "key23": "Zqibar7sHLoqUHnpYvpWiMQgpdMgVGYmb56yXRB4mseeo21mL7TvJ1rbmJ84KiZYnwQCfgzxK1dXszPnbQn8FzU",
  "key24": "4WzhoTbtSHsx7guUS79zCgh4iKN737x7TXnw2kDfqvZQxheVgGb4QnQF9qH1fuDEotTW54Lkc768XAfP6hdZT5LR"
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
