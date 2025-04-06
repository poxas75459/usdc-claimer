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
    "4ejttCgJDFjiaiwvkCZjm716xXSzeRNexoua65zQniU8DyZrJpVVYFCd11RAeKfs1C1gR5CncQYD4HagUmaKXpju"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hw5DkpiNnYTqy8kvZ19iEkMxH9ZqXFRsiEowZVbjj8cckC14R11kZyY5VFD5ir7yMkMjmuZxa9uSTFB9PuhYcgJ",
  "key1": "2xfztitYugEsf9DTFzVfGJWWxFLAwsUeEqzWdMuJav1doVDnx5Lvd1asaHT4g9jvSx7W1suHPWSQejxrguUTP5rL",
  "key2": "R9SwUNwtXfjbJG9WYqcHgVK8g1FtuuLEuboCQ5yvvMuoJy5UDtHsG7HLychTS4CfooUeets78Vgx98v5EY72wWD",
  "key3": "2a6k1urmUwVzWN3TbgRZMbJvPyxttUKr8EqaWbqedvYh9iwFb78fAfbKqMv3y3ky6Pp6tHsvuMFmEbwx2yHgTLG2",
  "key4": "sq3FuFC5Mak57zZpNMdSD28WPRr9wy37MxRRDAXpkg7CVcQsPmiH7gL5iUkb1sE3QCgwqzt42vV7HPTqh3x1nbA",
  "key5": "4Ph4W2sbFMvX1vGZ7QwmLrUKBttYzAXcsUkFGmwvfySGu3fuJHCAmT7GFQegWf97FU7sWcyV3BjeFKrtjHVTV8yM",
  "key6": "596gEwBzdYMWv45NfZ6fujs66ARfcWWpYcpU5Kyuay2ByKLJBn9WJS6hMK4Tj25No7Regmcxat8ZRbyiKCyfQiuQ",
  "key7": "4Azv6RTHGefRQAJk5fzr9W6tL65ahuuzg3aKtSKKNLhWiBU3z3qCkZf3ab3Vsw1ER3eqjC3jjp5BiTKZnWXRNc8y",
  "key8": "4GZbnrkeUNZFPwDUsqWFQzEmCVLe5QURF9og4f8eKpdWKLkNE9pwaGLf5Sr9HJx7oxFaKeF7Fg4v7eJBxQzyNH4y",
  "key9": "2A1uQ6BkQU5BN39FWBKNyzcp6BqGpdnXDviho67iQ3DKVC913zAQw1kMgB7DkKJ2VoiRyi8XgefuQghLnzD2k6Ja",
  "key10": "5PTgUNGrMsdoMxJZfrfaJ1gdBHWvLeJw2TA7vhdtf9BXTAvz2fMbjUMWS4yxeKuKhWaPnkUA6JwWx7w7CH5CyB2P",
  "key11": "5MSUMhm2q32uMsY4aPN9tUcFkzq6DXN6C4mtRdUYN8jahqaK2H8yv98zZxzusydL8HLsX7JkZLXZm36qyNemJH9q",
  "key12": "3vTDsnG8j39v2LeTdph83QXpGaG2mMCFEzT7qG5TWAnbwCqakEDMccjw5oGySDHCymV1XZFJWQX7YBRps4DzJNSi",
  "key13": "4jcwsscpCR7krqGrAaBxZee4xZJVXPzZDPGNdwjY5ognJp4VA42gfk5i7Af1twYiaMybYfEYh9452Qpns78mZurW",
  "key14": "3UYnwU9LDcMVoDgdTKfBPpDFhfEE54xTCqSujNrCMPkMcq5Sr1yDtoLSPoQdXZKUZ8Ak4q1eFv7Us1LNW56Bh76M",
  "key15": "42WtoxvbNikDXsaNYNFLf1PT9vQzsG2SL4E5jugcF61QmrVzCm1d2sFQAs7znRbQDvTKM97HChrG1LEgt92E8AHx",
  "key16": "4raQ43PizF687WxX3dM7CsotW3gLECJUZMJCP1aEgLkY3Pw9pFJkVuvCtUVFh4ePQWK1AuEdgh2eF8DCAKNpVQcS",
  "key17": "2dCe2Ti4ZfnSYv9G9stH9S4BEnYDKWdBrwi8VJx8j1Lq39iVz9ueDr2axPxJwkmpH6ivY8kA8zJZrpHDNisycU3F",
  "key18": "2FDNtx7fA9Gg542NCTy7EbRQNkGbLctphW3CDeTe22kkW9RytfUrZh8mjKgkXfHHD7jFa2rYtjwLT89MjvyhQG2b",
  "key19": "5p1TyDjvTyTx9mEEi4ZUx4XbwXqtpntKq4HyDHJkGd2j3QbAUUg81tcBjKT27xskcGist3hd1HzQTByiviiTYDLE",
  "key20": "4xP3JV3C8nnh9H7kLwUCaQoQdUT9hLfxoRRq9bq9PPX3deNXnpc22f8u8QC4wzFnEWBNCLLpmomdTq8rYEg1bTMu",
  "key21": "4Ys3nc4hj7bJffbNndfATzduscYxHju73LYDZPqJYsAEcJvJSfhynPkYG9zmqR9hfXtgvDNfgUtgdkc34BAByjqi",
  "key22": "5a1hnEPSTSRQGH7jiRXEe4jFpnJJABBrhhvBRqDUxxk7uxd5tCRCuHjD2U87Q17e34AYMm5jKbH8c3gHYhy7cr6j",
  "key23": "2sThaYmSjsYpz2hj1DXWMYnG8qkK5Ae2dokESGNYUDARgWKcmckqMRJ9LpzvjhjeycHJdXFatnsovzs7cLDt3jbP",
  "key24": "5sj7rJL3UFxZJWdGrBZGsJxY29UhJWA28TaUcs5msJqoW43FbMsGjrqKs9K9N1hMrFgbD3Jh77AnkbrphYm4bJiD",
  "key25": "5VtxxqB2CiT4poGBE8LmGux4iBCRHEUAo3PM8UhKDXsACHHPZqiPnDQXNt8G1GBw2c8rC1DzbHRWuhjs2KCWZZvG",
  "key26": "2odnHhFiCUkqpscaTUK3afbX5uU3DEPdNyyhcKbKHqQAkeU3zTmuDEzi7EYggUrj22VEqUJxXLT2LoYEjd85ZEZM"
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
