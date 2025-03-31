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
    "3mdVua47BDtsobTxQHVaNSmwZ5bQuffgvwxy9jCgh8kZ7KeAcdiPbQmQY95J5ZuDcAqYv59aKUGSge8tejBsxvcQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nVXiNQiMzoPSTkhjMJ9NzfBXWNSD3inJLSa2AYCkVJ5AQN3EBVFwWV26oJK7UkPm1GoA1ufMheD2ok1qrShYae9",
  "key1": "YCo7Vg7tp4skQM6Bvr16EfrqgkqWEkTXyaz7maByBndvn67uU2wQpRhmwhFGuQ4s5YRmfHHeXqrXWG244DvCERD",
  "key2": "2maVt7nktJYDUKBYYwNnYdt7v625cTKeA3NVvAbFgw9u4dNgQ79WU3nb1zktjMMzjjkb7iCwgXKTj3A1WzGHGxA5",
  "key3": "3SboUn3tjx8sAM8nmCYFKfSThBn1ZcXwS2RaiiVPtsG6gUZTCMqUXsHTZhW7xXeeRvLkxib2c42ytyJXeZd3scLp",
  "key4": "5ki9TSjSYgDhYxSGQGdo429TY2xpxSN9V3esXL7J2cn8WTsuPDdVhiKRxkpBVjoAhr9FWQd3HmNt2bGWVqg2GeQ6",
  "key5": "2pRmCsa9cKVW1BFJb5BE6taTNqtF19Ye956672mp1U5r3acY4KbEVCdFadAhebZHM5czjv6w7KDAhaHYVKbZLYuN",
  "key6": "4hkKjcuUdkqFUVAsV6aLSJdZkryJmLMvXeJuhqon6aaftZ6N5AMddbFpy2Cn1XYLiM4Bv3vPrn3Qve7kSf5ewPUd",
  "key7": "3evGgJt1KrdSQSbykRKCSac2dnJLqwGcAsCMAq6pqu1GqW5Fn5Q73B3DwyC9XLtyMq8KFL3aVjQzB2QYcQL5Z4ZE",
  "key8": "5w2qdLK122HJ9mMVc3gcJzWp1SGMHm44ZS7niJL736EgNQUMQzQ9eC9YdAwxqvTDKzUYyzjNZqd72ApT3ms8ZNrj",
  "key9": "32DVad2KKxcMUqUpxND9C5aRATx9wZLLBuV8tMrX4CvxWR2Kn1WuqkNBYjfKJzbBL5LWuAwu19ESvkLP9oRi69AS",
  "key10": "3jPWYzVDi4nBHtrd3F8Ccap1kZ654hmi7nVuoLqS7FBeP3HVpoWVUMHBXyPQQGTBNA4Lz3YX7ahEY1d9UmHrJiM8",
  "key11": "53sVbtw8RFmEFEAFYkt8wgRdJmXggjvdZjXjTnoh7XN4HxQTREfYtHJL3K89bbLkvL9tTp9pcRAQdMAFhwPm5rym",
  "key12": "5UCpQHHxSSDGHXuks3cuRZ1A7iGJduG1v3MHucY4VYQnSGQ8rmwmf7F1ZXg2ZvYCaNjHhFFu2m5JwSDy5Zw6o9zP",
  "key13": "24HiUeaPvhmqS2zskGLjXFGx2gWrvUgEwPTYA2YVCbGZ5prtmka9d8pLW1zNBcLEZUWcgyH5WtW1Kc6FTLRhyE9g",
  "key14": "2fr2yiKUpXgqZMgji2h2ui7mLhxXpS6ApzVELUPZSgyJCCNEjfbC6zYNsLkpSGEG9LA1CtVzHG7fHUrp6k5HsfKf",
  "key15": "4NoxRd1MuXQtmuR8uxXk9jELbzGEdeV7fgSZrzoZSdPmhy3nTgj248GMTxcMxuNfW2k4dCooA1xPz6ykw96UC3TV",
  "key16": "5Dtmi3XgQzmYCAasHsHgwErdJUW2yUY4ZNDMNpDQvne2KU6hwfteuo1W67PMXHkAsjEgJnKeSKk6sLHQQjLRNer1",
  "key17": "1bpwZQhKG87wpsX7AmisiNCUYsx2T2nceyt8iujiv2WJeTiM86PrVwaxDbBBRv3DJw1hFLaLs9WMU4BbfM5TTV4",
  "key18": "diye8NKMPmTh3tUkxVpahVBA2gvJydd3gwRsRFLdptu4brfNFxK2LpZhiHgHPTCohArpsAoNpLNYowN81xRe2JK",
  "key19": "4oyvggc5xGDPyN8ikNdNid4apNcL7NHwLysJXw7UaubfZrBhHXpg183tzUJva6oCBkx2ZMXZx4GMkx3CGRzYsAic",
  "key20": "4XUrzsVoMzWEDzBR7MrEqnm94SCY2MQFfBvAvTAe5fAd8bsyvxJrf6Qs6npBUEyaBU1A9Ex9ckqVPWWdfgAXWdgc",
  "key21": "7i3Nypa4y4tk2NL436yQy382jYmxWNJV6fA54bmgXUidEGXxKqZbFnhENnvL8NCnGpDJpf1ND8nENj3DEAq5PtW",
  "key22": "37GQ8BiR8htBzEF42zFEWEfTotw2p3KKsdvurb7PbtuuBqJYrx4B9X59tBnAkmqLpPPYTLDnyJhvohm4R7v1Qz32",
  "key23": "2CSWgiRYwCSzGJEVW9Vtq6cwJephHTr7iygqjXcz1RqRJFjtDgREVN28Z6tyGAmG7QdhpnQGjQdqbjafQqjjDhpb",
  "key24": "4DL4KxYbhDfAW2nNZErq1vubEqeVbom3Z7YewckN6f2rVNCLYgEAxc5EPdykntMWKVBQre4J6wceR6kQtNicDUk9",
  "key25": "2gmbzhRJPofGSKUHv7AgPkw1gP5Jm6YJ5jhtG2JWPTwuuXPDMvKhHUqGnQysdfQwCiRhbWxnbQnUe5zPWAp3zKq7",
  "key26": "2qNDMoh6ofqpsciykQ2fSrsqSXMBctqB3gLbX7kFMTqcz9UJKRZ1Mhm8R8etwgeLC2K14w3kqiij5mXwayQzaqKD",
  "key27": "58wTU8qx42MZGAu687d4qmi4NpbRQL95AUaMeYjcabyb1N8Deiox8WaqPoFFhskFBVytbS74WV78emCLzCHvdjRW",
  "key28": "n4s393ZqUrHPjfQGY9L8wdqsAqpL7aeA7vWSyRJwKhBrRPAAFGUd1BDA9EZZRydGAuXxamFYfHQa2HfMnx9xbU4",
  "key29": "5ycHgRJNXHHBDPUsfF4yDtoMytQoWVpH7HC8zwcvi9mVDjW4nrGhVaBt6zimAuwF7Qk3jgP8siKVzVR3q3LX2XBj",
  "key30": "3nhLNnBzoTer9Ks7qUGUL4zLM1aZAtpPWgtEMeH6EpGR4E1opkWVoRTEKD3nCbp7rLQdX1qctZsAvRHKmSDfggV5",
  "key31": "5C7ZcJBLgL3xLK7u2wh2jHwwvgqRVmekkwZjb73f5FMCHPN9wx2LsbcWvVtHNWjxknLc8yp5UQCzFR1c2tW57eXM"
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
