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
    "EP9HqWwbdeFGpFh11e8W99bri5Wns8GY7xgQmZtXH2pVdUJRKRPTnU4GtjmFtD4Sy4FwiUWK9tUfkLUetoGsFMe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PZJPL8QftWn1LCN56DHA9BYEWwUGoauM9WDgUaBsBSFU68BBzHQ5pkgb2Hiuq2fn9AAWT8un4AoJLcX6ibKNpqk",
  "key1": "4JjqLpPtXi38LZu9H8Gy7Si9NRqn7SqCkSa8Yzwt57K3qFofKa1N1DFRjDns7FwkFKdHyji6nJb25nCPWw5jRMPg",
  "key2": "5Vbv26ERgwKuSVncaSBhZCb3yZETZhbUN464RetPZCegfVUT2ZScaBiGJetpUdsr3KhH3F2CPM6Nd2DsatmxdAqP",
  "key3": "5NNa77rzNr35uePGvn7J85tavuVh5ms4tvNENXtRtB2NU9s7wQt1TegYMGgMtinD2QdjiZfcdn7Edvh1wYeSu54y",
  "key4": "ys9gZcksnBqGsukQXpqccY8QSfak9fbYYxkZLpBWywuMX5vKr4bZJFstNsqUXVwL3qUDFzGUouKiBEaGyPRJFr2",
  "key5": "EoAnJYAVaJ5TfXQtRa2KXYQmp4KfcM3dLevaijrTqfYPAoYJUv7nsgvsiGUe3LccRY3syqXJmdy6bWBSBXbkCk5",
  "key6": "5x2jRDJNzycUbtD2u4k6HMVVbqTQXehge7w2WBGjFESd9SxBcC2gVZGmo2N3xUhfD7snYXDuBAkhwgtRURqG31k7",
  "key7": "5QZkrg6BhvnUiNz4T5osFcQowaiAPduHPY4JjV9rmtdP6kTzELCMCDpbWVoiwb1fB6ZCD9jRNDAvxeamTiegYzc2",
  "key8": "2NbQt7rzMHg7cXizBeDFdfLxb6gbMAwf7ohSufrtaBNYyJHr5G4KPvADY8fkUjDQWukczUXreXh2EUfPEsapqgjq",
  "key9": "3Pgi1nVEPrKB4hsRoDwmovSz1bVAmJizSj5bafqoZnJRZDvkfkfh3JHEEqjzYyQMn5UahkmVHdeQ71vP5bcV2RMg",
  "key10": "JikwKKQmGe8KEdseMbZViqCxf8tFXS6bbaykzaDUWyTctCCR3X7euuoEEkRQdspR9csYhZhGJ8g9HjjoaQWdida",
  "key11": "46HajJd9GVaqHt3ttXsog22tkaTLasQZcroAjAdCpsyhtzuXAF7Nmo9rzej8XWCDC5RiHF9YVTjJ9AC6MGKzvn8U",
  "key12": "3Qcp6WmXRuSCbZBkfBQexTxpKM5ceZ24FN1eD1ZkZDqrHKUc3HhXoq3dF9Xkp95C1Dt3tdABnfEsLYRXEFC9uqLL",
  "key13": "3UJw9A9DPQRMon5zc5aPCnis79KNm8gYZ7AtxP8GYhT5HG7opxpZQTCrupo7bCrNN34b6NoFWeQHFKnFzpRBctza",
  "key14": "5PbE4QpKWHNVXzsbtzsSb87xKQakC6MYEMA5eoSAU8Li3SohZJeamz69f4CbkzwpPcTvhYcHb8kTzu3VnUa48D84",
  "key15": "54uFHkb2L4bB5LveM518u9YAjkmeBc5zybrjRhCJG7ANDHhYTPEa699JgWRayZQbJLXA7s5vRP1A3HpvRCBnzhnD",
  "key16": "56zLgRCUBvqFzivUubYvcdU4xGcxNPMukuN6Hvwe7okq4XJnJ8ypsKFgy1T9sfUcroQRcN8UXbNny3TiB5sDXzfW",
  "key17": "2RvV6kdMKWrHRwQ1JhdDRNQC4KdNPyvTRX59Xsp8wuQdvTPy4Bgroyy6wr8irU6tFzocS6F7TBWDPwMKHNQCMsYh",
  "key18": "5rfffwZbQ387swp57YSkPUreSdHpB3NEsuZrqMxK4i1DUKQheoZRR5isRhmM2XS5bJSYqSTAuUVt5uGbUyD4WjPN",
  "key19": "4bvzFrad93LLw1qr3vfoYpeHBSQ9TVTwyroa8Yx1Sjj5L2YGVu44gfcUoPKQhH6kVi4JiUheutpE45xpcACQfs3b",
  "key20": "4JEeApKsuCitr2XUqpCsgx3mi1SkEYzmHU5Ewb3KsggL8vG5Pq59RNe5Keioh73PY5e5GppMNDYMHU43fb4RVsFf",
  "key21": "3U5pzP9GAVAguocwjXCiU7YaYtHFfTCHvLFp3zBppBghzSTKdprhmuHCSM3Td5JkeNXNLCGPANrAmQtse4eQRaTG",
  "key22": "2aQNJ7Tm29VbQExttfw541AQhBJw1RsuLuzd5xSo8EVvgzG7wSm6UdLYYY899JEArymBdcBmfhxfwzT2iV3Rv64x",
  "key23": "31LLbsdqE7E1Hq2d3JXDCkJKpL8DE9L5ZqYamWNHwwqRLSweb2NKYrH8U8XWmQYrubkQWKdSuYh1wcWXNAbyyHU1",
  "key24": "t8jBgw8ECL31hKZ7oUBPe2UGXWmX6y8pg1VcHNjQXZGH8i7fSorsSqPcUHsDUuvzvcmMnrAUvVejwXCbKUcZx7a",
  "key25": "49DZua5H7pZJG4vVq9wFacTn6eUBKE4aswtXaEotKeEwds5ruPwV6JNrD9tSubwc5yJ9gzGFqyTJ8wSHAJ4U86FQ",
  "key26": "2rPTHktPX7r6GhPYttiwBCLT7HjE3hUWevBDHCJBL4jtRSrweVZjzFHxFKL5DW6XdHsjBDfJ3YZHqH9SuTgyPXbz",
  "key27": "2o2jnh5JfCZkJsi5Cjq7sd9C9q2FUHB9fZu4VUpJAjuRZfTgWAPz7ba7C1zNdU4Kb8fb6eW4rQXNzFiryi31rRF9",
  "key28": "zDiq1BTQDSKwgcEZs7d2pDvWsPBZPBMYqGGX3ZXASD8ub6fYwymS7igCUegx4is7MP4nFhBNVYqajWycUhkYpC9",
  "key29": "2hykTTVqtFwXUpcn9NGsBjeyn4PT7RqDbj8RRAoymXzrGKuCuqfR1ALpfMWzVHzc3Fvwzj3TNVRk9zzoU1exLvx3"
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
