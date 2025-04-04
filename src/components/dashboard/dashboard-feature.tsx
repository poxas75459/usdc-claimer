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
    "5CrRGonSoxt29hN9VLNnvCzm2DjWT4SzoSBJpytHqtacgMhL3ihHe6CYK1qbMQS6qBwqa5yids7rVChXgXUGmCRZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xirjikNdzUasSwoMZgHCVHB6ZRccauxwKXqAaUV5YEu7jP9q9EFMPJFEGTWPheju6ammqJPu4BeeadvnN1nFDKH",
  "key1": "42Dqde37HgmUmq8eVsiaCGEtE3wxTqvfSQF1Ef7EEfKwC47kfbhrChL8gqmH2gYvVJC8E3HK4F6sQSemqgxWiEjQ",
  "key2": "59uSM4jebQUwapbG1Tza2xpRta4qV6bbTfNBZrG9wYqgHMmWA6oVC6AzbUmLPwJPWiSZ5gWiXw5X4huunLdWEs5h",
  "key3": "4hYuVFfPnfNn3KmcNGup18CW9B7n2vGH37afmTt8hF8J4rr1Qn1qHjHWZhmUa7zK473C7yH9FLFfddm8GM3y62NE",
  "key4": "2m4ybtaWDP4AB69yTkPsiX8BQzN6xkqn5hUFXNtANvUyXH2wfFKLtrgMfSnt2MyooSFJQPHPJWefhWh1xr9WEHx9",
  "key5": "2kLQuUfbymdFHSb54Da7gZXgXRL8eezKoRCpLSNpQCGbYkHLwdV9cnaM7GQDE49HkbKMWmUzMuiPgZRS5K8yEyNx",
  "key6": "4Jn1dYoVkAZmj1najK53Sq49UHdpRcC9W4BoyF33ZU7QVCQXtWGjefZK8M9EPPXd72YGp16QvkPXS1BkcxTcqkki",
  "key7": "3xVuscLY3Z5nnANYJs5JFZGY1KQZ2GzSgXMpYqETLXYCC4aUh7nCLVDkikhWrnywgErwNrk1pJxnkXBJ7UiVjNDD",
  "key8": "HfnALfG97eTcD3tQNmPTxm5ESrHYs3nno7BwWcfER714TNKVWZQwpNiMqnmWsLZNYqCEraJefSyUZJGwkqJJk1W",
  "key9": "397a9wQhkYMnqds8mvsHPmqiZkCoucxheRrQxJnstcfSmH6Go3ZttPUfvjMsQvad8GPgSv8mdb2AzGbz3CZ3Ywci",
  "key10": "4qMpjkRHi9dfnZBYuVEx36uPNNUSPGafT1pWsbTaNsEE54BMDbZ8SP3TEnrAVLXPkC63yJuQBSy2jYdHwCs5TTiD",
  "key11": "5nQKAbnWtMGMkevRX1U6AGJVAAvk39htX5ZaumQubi42zoYnTPRQn3BUAwvoivuApGLcMbA8RzezKwJexGHXvqFg",
  "key12": "Nsk9LMyXvpt33KjpumzCjqzuV1D2PjSmCdVQdmNW7JnAzDjZYLdoD3PCjkLjG8LVsWfHmc5znj9d277jYffQFYi",
  "key13": "3PFcDFyQgAhJtjhzdsyhA2eRf2NyvyGUGqosXHgVNBBVtn7X8wz6RYJi1nTnGGzkET3Gr6fX3vwsPoRVXRAKauLg",
  "key14": "61pbUYq6XenYR6S74teJtPxCESkEX41AmfbeBtFUQEztL5dvABf26dHq4kjCniDGrst3GGgYhpSUyKyKo2tjKLuJ",
  "key15": "yzWQ5tgURCNhsd4nNm1mYguoLWs9H5XZ5HJj5hNtqfX6uzL1g45bbQ9WqKwd4XwCXUE7p3WeHyBgxrjocpkJj56",
  "key16": "3G8pQBu1U4UVFKNqQhdkN5PiyUYKnH22qcEBJHvbc9amN785XPWMG9NidevJN1RTzZidNZ9oWKhyTBGvabUtPWn",
  "key17": "38F3WTDYUAr9xgc8NZG9ULTZgCZKZLcY1RsXnAVTwbiBnxPcngD1MkywgEhcAhfiBKvkDS2yhM1XAz7DTga8sye1",
  "key18": "56TePFoNwPfy2t181xRsPTtVoZTK8JsZgbfLfDCGkFHqAsTYwebcKQYUy4BKe55hPUnh298wS1jRGVQTF6KKEHjo",
  "key19": "3VXF4ao3kHvuckpDwLXmzpzfjmx3CNgcskFWZQtXAtEK8mN6ujzpLyfCjDfhAKV2UZv7E8F6SoZG6hJpEhkWMPs2",
  "key20": "5b1aURUTf6HGsNBtC2VhtM5DDXmZiGhYFqvtcTZTRgf9MuUoQULSHCW8hUS7dDQ482DovCm2tE28gXZ4ySskm887",
  "key21": "4XYAt1G6Lvfv5pnUwpYaew3iSMLy4J6QzgDHCEeaoFxZm7F5yDc2cg5KLB8b9kRuq28WZ9QrJn9wAJ1TUBLsW3FN",
  "key22": "4Ff8mnazU1ceHnqFu1DA4myJEhoxgJKVMahPcZbG8VxQGaj3VWxBteoYpiYTwYW4a83Ya5fkB6dtYmGkQz9dhCep",
  "key23": "4tcGa9ucrddkCmYUpv7aNWjy4UDYhjndYULFKzgvqYzgS46EbQFXnguKFMz6YMq1hqzU2MNKYWByCXMywg3PajkW",
  "key24": "34yeAgQkdXsMT1ByxKyjyszzniBb3pgAs7Vh6P572CEtJJQ53wxuYXzp8SQd8Z9cJny5cWrkzXD6FukineUhSHFz",
  "key25": "rfhy5wFM5Wbh4h5oeDbQq5hH9kGypHG3B23fjcY4ZCfg7zV5kWPq6Ae7L5GnfDt6FwghgDHqXPnZMYaYhSsaXka",
  "key26": "4mihf1EGr4CwwZyMkCTBdwd5zQ6ijDbTFXyK1LKNJ5NLnvsmVR2fJgUXBAU6muiaqR4X37NXpc6VAyD66fGkVQED",
  "key27": "4RjuV53T1qrLPxDwCnKTU74GxZepJSYZsSZfXbVVyJCx7JLhSr31B3xni36SKVDrGpG4iRPY6VAuPv1dqc94TjNc",
  "key28": "2DuGGRfNHqYfStB5RgCabTJYSvcqA8QPpC6UwTLW5FvJ4ATnQ4uXpfLub4NpqcY11SpVMHWGHXvMZjT7wtBwkghX",
  "key29": "4jPZCZsQjU3v7Chqtv6diuYkx2N5XDdXyntP4m4RgpgcF3W7HFa4yttcEqCbq5AovFJ9p8MjUckK67EkpMJP3ymu",
  "key30": "2RYgjeNJ6L4mAKF6u2C88oUFWN37YJLLvnPKomgQncRDRgdiBXvdwPPPQ5mVMwqcwNBWDENDQkcwwG1NggTJv1FU",
  "key31": "65EefXpTTgVUHNTKpLGvrJxUfassPA5FHGmiMCaQEUXWRARMgaS2Fg2eHPNtNkQKnENXBySozeQs1zDw1HmGjppx",
  "key32": "ZBCEs6itDuC3VXKdevu7CP2uznwWFt16Zs3FFZHUE6QPqdQL8PExyigznVu86VorUUR7GkQXob2kQWq6yWk3cnm",
  "key33": "5vx15pkzbnD5iLKpQEJ3wzNMSn6xDo9RzfT7NXhjPfcr4vPWeqeRNFJnzXVx44tUc9gSWiBqsCYJpfk4VVJ2XN8N",
  "key34": "5quQmgjSVa6kyxF2gG6zQ6R3qAxeaeEveZfkJNAvR8V15MNWY4GnXN2bATf21woRruB9ZeHzHsC7XG6fwm3pgPah",
  "key35": "ZWUDRx7GJEpvT9HXNpZERcfhKxrmBKSWgw6MdSBtowVDjSvnnvFcyZspHUGMigXK4WB2Tn5DXwyYb8jHg5bRbUG"
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
