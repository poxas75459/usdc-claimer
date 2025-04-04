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
    "2EgJsaLAZcDAMNuNNyoi4sMC2FymX9K6ADfTY9qzug5n4g9p39g9DHoBXPj7F6kfUVH7Hbr3P9TWKxaKbDLKXkak"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s9LD8aQsoUNpAoSnJy1eoJkae96fGyYPFPPQMEWxAjC44oA3bXUDmi2wcgi7coCHFG5yjLuuDne3yc2wxrKFE7L",
  "key1": "yvBuPHmUKVEvQTgtbenCA93R5Drifgpkc1Z3BEL3WeWy4had81FJus45S6S1BzmoVJJUDz4HuUJPQGgg1WEfDgG",
  "key2": "CUhkqq5ByH3jqfBGgbXkYrP9icCj2ndjuSziYTNStwu94LxMLR1GbJTLLNWdQZYDprhdVWEKNUPcHrQ8i6XrFjR",
  "key3": "2kG7DAXJBr8GsxcMbkRkZsT7gNL2eodtGiai4e8f6GebpVDBoyjP13q6UTFKor5DQ4cDybuxSVKHLeKZ3gbBYQ1Q",
  "key4": "4gF8o9ehntrfLQjje2XgkCJZPrige6KFotaokfhQSR1AaCHek5HGvRm1HmrQWgWafNhR74WXiyUFVsndZ2P7D4Tf",
  "key5": "3NhHwFGVKTL6hpyqGBsMxMGNXBgAhiAfk4VEXkgeaPYqD5JZv3kE9crkYjc16wpR27QX48sjhD29VzurB8x1YkHm",
  "key6": "4Y8gKUvsurkKWuKZJJopVWih6Ga8YofkJN15NvuEGbbcoqA5KKj1fsJczhAFHvQhPpRMqDriPgox3PMCXNssaDZs",
  "key7": "4Dkbf4v5hMvg6ov8ziMFefTVAQsfeJusCLCfa1N597w5cMZ3HPSgGuYPpeYRC6ypXhhMDYDhn67qxLfrkSTntRnF",
  "key8": "2bbbGE9xggd3v4VsUWabrQXMi2BnX89qHbuJZaakA9Rv3ZXcWfNPTDaZjH27sEG3hGtA9YUGpjRgkA4tZyhxVPmJ",
  "key9": "4efgbB68BfytCAUMUdzUUVqFkt8amDNCBguwcHrxAxXScq5uEdzzc3DbedyhwX1qraaQZxZoeKoj6HyVwsGc6EuN",
  "key10": "5R8YzUsGhEiWgc28Cd2bdazU2tyWeEACUXez61Ve3QV2c2C8LR62CkmqtiywHnH1eqjtyDAsuGBputiuBc2tAB7L",
  "key11": "3ekoSvyXgFYxhXD8MXXzquLPX3zS5zDZFrZArjmj4XdBpzqBhS73eioBUEiFmdpK6JCkiXShpEQnTwVSdT3q6ZdV",
  "key12": "2moZGvDLFmEQ1BCtShar7e37bbuX3VivTVY1K9NHHcFm5ypyt1TLAqS8nh4291GDiTWA5zUHA5wfJAzEbkqchh8J",
  "key13": "5V2gZ2Kapkpyd33XShrnidnVmpMtdrCH65ZA4wepDsya8axD2axPkNtiHFJ9UcQWDgnPGTNAv5mYdkUMbFZDDrcR",
  "key14": "62PcJ6ktehYjNEjxmPUAAdcgRGXJQ4x7q5D1QAoBa5pbneJnSrZnJtGm6V934DumDQV3s1nZvZLfCij41BGaqVTB",
  "key15": "5jEyw33SdQFvnMwiWuvwPHYEvGBvKTNeobxXMQVsJVdYJGZ8aJvnJtAeWLRcXTsTCr71UeGNQ8bfM1yMvhWfF32Q",
  "key16": "2Wd2JN49LyeS4oEib86jFeGgfWZPtTcN2YbqguGvbYvdKLs3BjUyQqDZntiEey2qUpuY6a1sdDvnPYJ6wSWGK2pf",
  "key17": "58mRVuiJiWG9D1xS9drQPBeAhTdUeiEGwXHsVrXS8QnFmDPNkz46QzYBC1vSbfcHKsnxUVed8FthMDCgMAGZFk1V",
  "key18": "55nJDGcp6TrGpYAdK1FFghTAYrFHQnc7bEjpWZccJvD7cYL323MvrYdXN2BU2ikxYKckpTEGcuBH3stswBbM6jbD",
  "key19": "2LE3m5xp9K6gvquzBG2ZPFucBLaW5q169FPWA7FF5oNCosbjqzL3dLfUmh6LHjp5wswxTTAYBUXa369nTjMf1pYt",
  "key20": "28s1JhGePxDFBPAUYdXyNywiRxzYu5MC1qNvABgmdyPSKhRW1Jp64iUvcbTNbcEJFRty4ifqx4bZdVcj8Aa1dGpR",
  "key21": "3f72QBz3dauKXCPWBk1fwyV27xcWBtkzdTpJa8PizpRKZLgDW6xqZSMRci2uFf8RxoKbXSMJU2Ke9x43n6a8vBXf",
  "key22": "4vfpKZFH2JDDX6EAWzDkJuaG8N7E3dpV7cY3agNH7k7HXmhCW2CxwZkrQN3288pqyJ1fS6Vp5yr3c1Lif87NMWRu",
  "key23": "5ZwbbGf9vbgYiCMxuptLcyrVzpX4xDjWtnqEcpKN2xm24E7qKCcW9MNdxxXbAz4ugDBL7TRSwW3vZ29CpdGs8jX3",
  "key24": "vy1zq3GakPTTb3Vmkj4QoEbSjwT2hF66y5xim89iynK1aRk9QhfgHVwUysBPCzkvK3xUQmLjY4t86bazBTtFcYR"
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
