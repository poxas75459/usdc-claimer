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
    "4ex8CFq2XTHMCzvv3mGkTLmui6NzdDNfhZGEyDCpxVRscgWU1Uqt2EQqmBAw71jQY3ND1rmUpbFtkU4MRSUqNz9f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bkW2prX3FEmEj3VuT4RuA4G1SH6xPcMTHbwqNrhkrRvKRTxVG83S5BfTCUzwsTd9FuQGtWuUaAe2wLLu34nPy3F",
  "key1": "2uiZHWvRKcX9dDvk9KV6kj3kzGjfZTZ9KhBYqxfnWnpbzsm57R6yrkGRPF8BMNv2h5e81DN95BZSgpxHCv6FP7NS",
  "key2": "JFMGEfXGy8rdv7vsEaYvmUsyc1D2P7XCtYEercSxAFNrisBaCFPFQPrGw5EfS4Hx221poMvp3igpL7DSgmsLM8K",
  "key3": "4MDEQ1FqdeFXioF72McET8uHSHfZn8zWRF8vBGg7LYgj4PaxtWqqWuFyTyBLBYPx2NmifzsQDZnoSZb2jTzRNQaC",
  "key4": "22SgZ7Rje32HNiJF5oPTtatTbb8HFrXeVrahUp5cQA1XyAow4gdBcWsAGfEFPNLfeJ93Jk5RSirs7XGTmHYBhcuh",
  "key5": "4MeKaJ9ALpxGhriqBtCBXdgmbU2WAebJkEmaPmwo4pUuzRTcQNkFG1BX66qQBofjwVoQY77yhCawkYKFUmZabtox",
  "key6": "5MxwnyFZ5Z4eRjxhkzMWvw1HGq6QCCfHcjkLS6vZLziTYdeBd8vjV8XHuWhz5jLQhj5ngYRUXkNWCUNDoezjaAg9",
  "key7": "3Bk9pjRoMyjgcxZ7172cYHCbfKaDqFfcS1qVjdKWFTSTCTodx37HzoeZZWmu7vmD9mMNECv4ZJ4nFZfwdscGDjM5",
  "key8": "33NQHoBsKZSvZQTFHgncmWXXPZAFFK2zaiSXXkt7abcWshzJeVys5mJxPcj1NjsEvscarvVZx8A89Qao5T24KR1M",
  "key9": "3PDbFwWK3F59egHHzqNSh88qjJSSM5yP4Vsnp8s5RM3TiWhnNFveeAX9noJkPyKdaP3t8YKGSEd4sAELeszNhQi9",
  "key10": "5vEMK871gJ2R3opTyh12S8kjAEPFSNSzwbjP466wbKRzf5AyKkcqNEyiMiRGBanLKo4JM7Ds3Ajb4dKUaAd5ww2C",
  "key11": "mSsvZFLFuRYN9rKUL1SKjA4k5rpeyg2tBdhW9TqCJHD6vEXYHWZ7qVWxzNrbhvQfJDbRoqtmK2zhmo1wVar4Md1",
  "key12": "3n97efH7ZNKDeQPwwMvwoPoxxQpAaa6693NNZwACJEqBSLz568YBpMEvmQGHjocvv6gPVyXRiQn99FALh8zoTZTg",
  "key13": "3bqskm2MB63NUPjvJQZWHeg1uprF1dinosbndjYkxwxtCETRj6TBYZUdd6rwg7zuzD2n73HSv4y3z3FNYUPWqL3b",
  "key14": "3tBN6GtCHwafoMBPKto83z6GW4R4nZ7aKjwF4s7isxAscz42Uiin1J9feCZTxK2UonvxA9PhNi6WFkboK15VfBA6",
  "key15": "C3GmK7CFkaP5jovhr5dd1G6ZWzYHFt73EXi2k8YNsQpoMxb58xEhJF97HBQieePjZK8WDmW8ygNpeABhq2SGCRV",
  "key16": "47NbrmyRixjS684KWsLoXy3AHSrhZK9Ch7JViFqLSAfMapaQt1BH8u2Y2wCiRZgXBVg3LvuWoVJTktUu28bbsRke",
  "key17": "1cQx8B3zqtT13hQgVpzgjbKJsRApBZoAUvchSQwnKS8T9adxdTqXnWPkuU7JkLv39eoeY94ohUCZWaJWhZkBmWs",
  "key18": "4i25ondWVY3hxD6Dr6MidjYjZAEq2TvC6zmCf88azL1oRi4MaqKZJWEA45dzifcJJDr92mGkrrx3QJUSy7esxkWE",
  "key19": "JdjrxRNWJ7Csd6u8Y7gojtp5ZvsfMWHvkaQspopHfnqZXdA1L6PYGc4wVoduuEJ1QmvBzMumPhPiqSSadjPqk3M",
  "key20": "4u8MFSdYK2E7UFARNcWRWcrH7smRdZJtBmu63K8igxtAZu22sSRQrJv65p8scAnSvmMcQipgR1iG6FyhRGLJy1PJ",
  "key21": "4g6PMYWMqHdDVZnaNpkA5xbtVZN155SZ88nQYRRpqpdo73Cfzhfv29ySvf1ughK2P7Aqg7dhXckh8umiPKyja6ip",
  "key22": "5Wm7dBC3Mg6AiTkBvuadGbtg26gawsJwF7tJzC2nYY2WXgrGRa67JnEFY72bXBj25CYTAqKxZYSt92b9zXbLgCyt",
  "key23": "4KjvJ9wacnuyrCYYjXiGM9Kihnvn7pU9wKGJbMH1psFXrvYPc5X5Hidjhn68egcmRAeKK4DhCHjYeb8qwrombFWv",
  "key24": "2wLsKr4yxuR6Y9tdLS9YyuybpcPSHddjDtmhzAfAEwsWSoATV4o4azTicXPywchtyuobByRkgvpnVPc8HJ5JsXvi"
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
