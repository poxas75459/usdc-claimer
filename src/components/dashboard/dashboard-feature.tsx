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
    "38tuaW3fv9k4GPXsaadjQUTjSb1ABFRu8ZTSgdAPY4e6sK9rpSEGy1DXLo5YixthWDi97hDA1Fgtc1WRDHSUs4hS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36fWi8kM4xZAfn4WaZL2yjGXJwxKW2PLCXTB4mY778w4ZK7MQuXQBqJ8KyoC7ZTHQgR6k9hYT8Ccbe6Qz4fADXCV",
  "key1": "5gQFfpHiuFhrZcZMyGeZAJjauLfrkD1iByQJAndbfBhoKpQgabXRCnuCfbHFYRuHLko7gUg7RQdDUAJiHakXdPdD",
  "key2": "4Hd5am7TwtYufGLCvnwbBPhXzgT6HSawEMdcSY8sNjDFaTshqUTEqvNVyPrPzhitk3MpdVAvH4uFsb8fJFLC7Qg",
  "key3": "4P2cQraLgLyhsxC4ikUbpBr3TgwsGdeitDRatX8HrhZNwK1HmrWLxp6gei8XNdftTGzM2HHo5Up1AuJjED1km257",
  "key4": "37memH1WdjaRJ1zwSdpECnKonwUguVzp3hhpYgVXbVTMo8bqsj4EAqEkP9PWy2oaDo6PpUjHZuPzrkBfuQ7C8Coo",
  "key5": "3LhiQH8Cj8ANkyyU6TYtkQRtnLNXpaRoV6icwP68vFBziKZdaNQ4osHzUxdt1S2VQ423cgK4zsVNLtKYGx3GhdQe",
  "key6": "4UdcC599ptHGiPgiJeYq3mJseXyvbLHwtHcii7g5fWsVxbomtsQCMVb9PtTc3JJxoSqQZ1fJnvbqNeCt6NAArZzE",
  "key7": "5oPEYVH2twPX95ZZJ5UWjgZnpTQkNA2f4c9jbgYuAyxDDeevdHJmEQpr1FzvtfgqJv5G326YDzfB2gWPzSKHLqJR",
  "key8": "5d4BZdbnx5w2t8jJ4M1X6ZH7xLjaV1XpNz63CpWnSwKe6NiHwJyCXpSfksnBcNruduZ3ivwBwj8wBSgmNrVppBEE",
  "key9": "4EM6YxrJPpXZgKd2QnviNWvGwKsb1yd5cPRT3iuMosqhx2Yw2t5vfbL85xUErPjfgxBNEu9Vsjm85rzRVJWHEM4H",
  "key10": "2AEN7BJA5x4GfuKmZdVzBVQRVSiVp49MJaPH9VYipPZtE3FzSZcdV2NrSj9dGT2Cgas2uFB9jNE7mtyvLWhGQmd1",
  "key11": "2Z4FLRpuqzwZZWe3HU6W3ERukbJD3eanPufvp3nB9ZugjrSoN45VhmbifCPNdbSm3bzF6kUbQocVCLA4pg345AzP",
  "key12": "4JqSugNCmACgX3SLTyNE83yetVhaSBi1vxEr4wn3BtgEyUM2yoPeMWSXMg4WXUjk9iXAYwtVqy3x6hgeM3fExtJj",
  "key13": "xi5X6nnw3FZrnXSgwwMo41tnasPZ8Z6PL6dx6WkujEZoKXJAntW3R8JppRrQyPkrUsAJUgSbgwM54skQe9WyPmx",
  "key14": "5KCvtEvivGaxxsRDxRsCHUnH5SciXbz8GarH4JpscoHj86stxRbCt2fPjbSBFdwSxUEMJKqkELjWsU5dxJY2CLoS",
  "key15": "35mqGNsEAgx64pySV7CNzwUn67ae5m2wpEhZZCZV37CKoNzgm6TzB4VtWZQ1cNMLE3cYBtctokwqxc14xrH7v4HT",
  "key16": "2AfgkMj4aLqkS7HTRoCs4QBgPfvRQNsnhSg4QhFB4vYvWa8rmimGfijkVZiW7ynrfbMbgHiATZrwao37w3UamePh",
  "key17": "47RKCuaJVJdUsB3GQ6APmRYr4Ewa9XYHLXKSeFTTtDnZuF6LtBf6apbUjVTh9LCNURCUdCVzHkpWqx5pVA1pNknt",
  "key18": "3hmztjWZNyVdQxmDpvzJ2dJQd6GtNnzEUbSf3DaV6CFp5PcceZxvJ8MfQYv87Br3NajiUscztwmfDM7n8Gnq7hng",
  "key19": "5brTQ7kAo8pZV7q5sY3GcBxEnBPmNXLGuMbS1cE7KD1TpPjqXtG4YQq7VRuuU777NrnSNDdQKWQRPvABZ17dw3z6",
  "key20": "5ALkRfiGzZTRc7U8kS1raKAiKNXM1cZKyTQWmQgFYxWHQJVTu9ZpRB4FCmzbVqH7qzwL6htsvzMxnQswabZxtR8W",
  "key21": "3B3eUPDb8dXabXR4Aoxtk4GSSyRBtuN5KziWrPcsLQPG2RoEmiASnCrtvUzoqBFSweGy93Y4R8oo16gtGzaRKcYM",
  "key22": "PvNjovRgwvSDSdn42eH84kBnxXTyuHKwMaKgHG4bYWvkqtA4cX7EYqCS34TFQDBFBDK9NeSy7W2rKbUohugtyDA",
  "key23": "c5RAC5Yu7f5PF1Zt5XauBVaMoriY7BVQHxLRfFUBJ2EHZ1hxCNKCPCwFb86TroSbJ8hq7GhE5YjvH1hCNk8D4Zx",
  "key24": "3xURseuxEsRDLVWVefd7ycgRcwypjhmy6Qxa46fKoW9H6msPsDFa8rJPYTzhhWeSxAL8ApHfYNHGKV4NXDpyEw5E",
  "key25": "2UVTn82nW9APZkXySWa8pommMGHRNDG1BKT7sSbAmb7Yi8mzjvWtm9zFhETg9sMmKJapFDfTy2G7MCmwZJxxE95X",
  "key26": "hTqE8LQaq1ZvwrMMvccT5u523EUxtugymGxybkGWUokwaDa9JbRCQ2HDbR8rRysxPxhAcKXfK5i3sw7f7993BPG"
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
