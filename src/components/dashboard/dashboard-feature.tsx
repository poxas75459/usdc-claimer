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
    "4sMAYRVpU4oP4hm5HsHtw3oAqVjZSNM5XG9ytspfBQJnpo9gT3koPkmZ6i817sB5Vak3dYkBH4J6n92ydYS2yHib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LXVjvES25YQktUUw65YbdxJgVbHYF4mkx1BdrYLMxs83F2uJuAQ3r2FSnhUiDniQz3t5ehNaBXbyANwP8kyA86W",
  "key1": "2shwMdzaMjCM45rmA3SRR3CdHzj22YEvtSjYiUsn3SJJLAcP1dBypa1FaHvPEL6Z3kkDkGTYrU6DZXDkTNDyD1qf",
  "key2": "3ZJFKNgUyNpZe1HLpZ24eMaLHq4iHkPbRY5fjonbqFQHWAd8DsyJoqd1vZXnAZbVysCUGyiWt4Fm5wufo3F9b1uZ",
  "key3": "2MZtw7JZ2sJ5ybntxrjd7bp3dr4Tpp5w679zdR3if798GhMADmxTvssUVWmV5q7ELJXmm3wpmxwdhsNMk3q7prkJ",
  "key4": "2h86yD8SGBdbUnS32ZVkDkmda8HmGWMML7vb3238NzMcAty9RaDDYde4TFMVydHqJHroC5uDvHBhifcU9NYVnXhv",
  "key5": "3dMJk4FXtVgitwSr9wUDkYZKr6emebacdSvC6ummwzD7HPzg6EbUA72VTJm8MWmpfqF7Wy5BgqRkna2bkjMbg73s",
  "key6": "5V7tvhZGVBtgHaZ9bypHsjjKdymDmqvkHUT7oDJT8ASNLqXfjthMPYEp4h9XeD2vPAmW3aBTG5GPcM1iVtANgeXP",
  "key7": "4qyA3YHu696MpvjcunoDv4wqXnZ5En6WM1MdkttxvFJTTFd6P1SG6jggwg8mZHDo8tC8ApwCNpmHdgCut9hVw7Y8",
  "key8": "7PjmWgXt3hhbVNPvE2BBpW9PXhGnpaD48thnrwH6qek7dB3yRncr6HxfTmEfYFmnLaZ7PBNQ2hnvBJXSxteaKiU",
  "key9": "vbEbPq1HD6syoMqrWC3qnJ5RhtnKb1Cgoz23kjfVa3Yd52tYsMqVdLQGZpUmCUe1Ez8XCwJxFg7fud5yttDvpMC",
  "key10": "64ZhnUgUSy1T7VE5awEmzNB1A7yzzPw79v89Ur4mbvEbQnRQpTRUZEsrSGP7ex3DDvir6sHYDNd3bdPELypeeg3F",
  "key11": "yzQzMLHrPjAjtFHrNkEG1AwcQ2fJP5P6zQJoyKLK1ezfWeoWWjEmf1GAttCxjVjb18Er8KGqv5woHytpQ4mjyNw",
  "key12": "6vopdxM7o3XHN5DpbiJuBy5GK5SqBemA4LTUn9N9tJvyEBzzyWcJX6wEJnNT9T4rbSPWqU93Yy21pM6xRmV3rdx",
  "key13": "2RoZ9uQ1w35WPhptbS45frpRQNg9dntMe2R8M2DxF2e96CdKoaujWEhwSKCFhYfqe2etoVyC2o3DWwBrs8JYetbw",
  "key14": "4gA6fpLxinvZq1qgbzAFrWDKErHrhr7xY4BBiG6beRLfoDVNqq1BQcJGv3BVoj4mMMxaT56YkVUVvPR5EZSFoLiR",
  "key15": "3mW7WaQsaWxxL9Ca3b6Xnzk1NR5jSmbVoEZ8FLX2gtEDdv7aSsHnPXfvPXU9UE8M3zcJqMRVYwnNAtDHnJecUVSK",
  "key16": "A3SpsA5bXHzMCuz83LsNYEskArmY5inAjt6wuVxcdNqjxwBUZZbnL1ZxQz3dY1JneEbPyNH4JpBJJhyWxZXV7sU",
  "key17": "3U8ECfnHA6V5CQ4zXvtVbWs2whyC9qJYzWmVkGMpkFsTAiyqdVjVipkpthFbDkVYRP4nhRWjhjz94hBCuqkKXubo",
  "key18": "kEeJnM9opNypqMoEYBXfSPzxMH8pJrUgTHnT18cfZo5QTfhEK9S91CcnuhNa5ZQoDAug844NznT21pdZ5Mpsk76",
  "key19": "3ypfHUwpqAnQcytJ4jcvW1vLqbBF5VGEGNq2nb7NbrL5xhxR1BZxVRdxdfoXpxcgZvRSaVvM1P19MdHGAW9TNS5Y",
  "key20": "3ZtwuTyaJp1ectXRPBvCZUJbZRwAbubkuGkzWFPDwktagM4eoJDYSZnQ69YzHv9JDvRJgNNFeGpeAYk3D1JP8wSK",
  "key21": "kLm46UYQsLnwaZHHKvp9Cc5tS822vhTJ8rRZhoafhE7tw8GSEGZxrebodoFDvrF14tmUB8aViouiYak1urEUU32",
  "key22": "5n4CMWq919X7ivejJhbVeHyvotD2C91CNPj7rd3oTE74gbcLnjy2bARmzLNmBsWSwYgZzi5jQmvAwEUhVJSHpug3",
  "key23": "5xPGd84iMo867SF3B2gD8MYCT9KzGBeL77RqMfGsALjSgNNaJPcpNtQHGP8RYvKWcjj46hZhpVc9MTPQzj5p2C31",
  "key24": "375eZ72UiuawQyidWVkPWrzGA5tpPAoq5MkpP85Ln24J57tDjMdWo6ZBuuBTMs5hJrfj284anyMYrJDTQaQxDESp",
  "key25": "3eD2qWSTkAmTL44gogwzrec7hPpEoxdtCziKnfFM4w48i5dd2jtkCrkVR9NSNvTMYHr3GpPFcH1TnZPuCSWR9adM",
  "key26": "4y4HCHiZB7rcDn8S4aag6KF1UaKSRxoRNr9YzhNvGu6UtBtzWzSG9zYhpzpU9PkWk6PAjLUPi73K2Bv8DEWipvZH",
  "key27": "5tqhkriBMz8GkeEAqL23nZEKm9aMx2RLJg4UC3qnztuL9cYWyifhjTyDsQAua2UVMfP4fHmL8kjpsiXUBgUdXm8g"
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
