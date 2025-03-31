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
    "41VuF5DVx1ZU6r5rYbsHjTHXWbeoTezWX1a9ktHWtSSNwJQSLybHcfhhUFJdyckoJ6WhQhiLPY1X3dWmBdoVn5jf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XGjMTf1BcZMDWHLcA1bWNUmA7JFDGT8z7JA7tSxqePRSVNDdMpYfhvgNQ4nNc3Ky7NBrCXhh6KMwU6TvFqbthXU",
  "key1": "2x8oV3QBnsYeq5zhtEDX7K1xCS7pCwKRnRSLDyXN1xaFn8LaEZhWPpJfKZ75e4GEkzsJrntZ11L3GF41VYkeQ4bK",
  "key2": "ZA6i2pqj2TkPjZgvLrLncz3sV6f1ZCdQgzfKxpDRAto3wGFHMbowZHc5qysAL6joFzoexZv29TpKdV1SuuagQHn",
  "key3": "587MN94kB3QMVWUYYYJ6H6dcyRxhFsR9o8rTqEL6b49z6MmpGEbdawcmYFhbFfXGP8gLjSF548yLxokToiBErXv8",
  "key4": "3t7xhtNaNperEgqgxcnYB1kDdHwGWHw9si8wi67USBoaiEQEvsg8YXCdd7YaSYEtqmHxiETwGVTVqYWPAHcpXJxQ",
  "key5": "5wP2ntkZkzFvM8BDWKNXudCCggthadirbnxHzyZKUNVuEd2NPwY9FTs736JhKbmEFxhdvE7rvYoUG7RdhdX26JJp",
  "key6": "2tD6FkFGszUms1EitvTDaq2GFVBaVmWmmMGR48rhzBz56KeqEFeaZaui1NFNf6vXHGfa4DzoyxDPBV9sG5DUFCmb",
  "key7": "F6m9W5wZuCusABvEofYrFPY2PeZL7RRJkyXV59PqHK9Jx1Ew6meb8PHj7dQxMYVHqdCMmd6WngbBeTSr9wruzRB",
  "key8": "23yEpg6EL89Ao24nsCq91kYyRBEXKDBwW6zFvL3ddX5U9VbMdEirh52DksFjq57GspQMzTzFaawp7ruSbwvg9DPu",
  "key9": "2by3P8Cqt4H1wL68EgxLXij8azBLN8sAzgo6qGbEQ3wtbunghUnopmNvfN6yLm342yDYB69JHLuCDtHb5xoxHcor",
  "key10": "3QRedLvW3TGg4EgJ6M8NjxxDFVCC7omK4nS5BP8zVv1HZQ5JZyjXWsRpiUi53NBHN8KV9gMrCQdeSPBe75UpyxcP",
  "key11": "1u8WUnaH44Ly3uQkdpknDHFS1fntkFFFLVmbVRzgkGGvc94pMzSnNEB15ihWLL9gPYTJiBwHJyBrDGY5x6DamHq",
  "key12": "5aF8teZZcmweMYgc23M2c1cvtWjC9JnQ77yUirMA5HrZuosE3jR1c8mumibxTTawhHXWUDm7WPCfkJdY33hcrKCU",
  "key13": "cP2LUaejKEqMTLzyaQqR7sQodfK3rm8yZFzeVqvAGU1GWcJq1XUNDoHXgsFVijbAwqYfQ3htq5Yw4qPRJSL8yvL",
  "key14": "56ZZZavizmW1ZsivfYdnjGcRJwN8UtawevjL4M8MHqmU5jHct3JaFmq3FHp2GPxqNf81DEeDFwVYfxYXBDuywtpN",
  "key15": "3XdA6zn4EaWwBVZ8B1RrM3AwSgr9bnNVpTxzpNDxduP7gJJPuhrR4hcKmpkEqmBa5GZxbYz1epaZa2CCGb9qFqFK",
  "key16": "uNuqVe2jmzTxzwhxviQUoxESCjfFtqJXe1CdFWdTzBajyWVxftsTrzNRU4xkd3tDE4jMm5EAr2kxTzgVvuAMzLN",
  "key17": "5MhnWnPe8TKwaXkiJWt86Anq3aavtTjLdbzc8QbprHy3np98YHfAjF7YLGD9RCfCtWoEvqKvQ9VWrtVoHkmN9pRK",
  "key18": "5yR3zqShqDDruTc2KxB8JSbFyGFjawmxS3ydEZrg4p4qaQvZNYuGtAGvQonM7nCNC7G1t9G1YuaSHEBCr1wQqkMX",
  "key19": "2ad8cVWYYqSoawc8AmvVkixvcyNGShxYEoag6Rn1o7wwAdM2aQRn5oBwx17Dgoua9u8T7y6vJTGPSpWN9PNbr3bR",
  "key20": "4ggSuCxhpNhP6QmPM38ucykmxRnQNh1DvpuYQQqKkMUubn5MNQA1bKaEYJjt5V8J19oSYsgna63y6CZ9uqwM49dC",
  "key21": "29zppDK8jFtAzh1Ve2DTD2cs8kXGnKrux5bqtSFYhzgo9rSzVCvAh74w5zWn6BhJ5vfosCwboVxmA2xyfP87PMSz",
  "key22": "3moyMUBDpKiRbK9TBRYNgp8iZfWnHm2m3G3mDndHMYZJfpNtXeE4CUPfWiYiomwhaCr4GvUHjtJWHBecDmsZDwum",
  "key23": "3Tqz8XZDz3xk8GuN3PUFdWXMYJUaKvnSu7SxjN7WrYhoERnjvBe4mq8fv9XnyPjsWvgPhjjwSmXiPnNJoca7fY12",
  "key24": "5bzszRYYZPBYf5A1oYooa34ptyKgNXFBmt2S3avLNvBqtNLCfDzGmu17RTs5fZUuDZuNSAtC4KXXkovUasRvzo37",
  "key25": "oPjKh7xBYbni4JQRjmrKqhjifAmJ2kKqH8Gx5RGDLa4H5bUY7LnfrR711fGSdtug6syBswX2uQkmvFdG4zFutST",
  "key26": "3T7YuAeSa8xkeb9sZYFJT8nBnGcfekTQmKjErDreYJrWoz78SfwH1idLcL4NYn8GDRh5B2VZdCRK2Mpa9B1XDrdN",
  "key27": "4CN8n4zm4B9DkRE3Hgcsfu5jNBUYPXZYigM5pEf4SbDvs793NUYur4KqSpKMbHA6JfGBRgxBwkvcVCZx9hHYE81L",
  "key28": "vkfv3HA2p7Ytb3RZKrDdgurAh6uG2A3g4gsWMmbFmrDqVvcMBuj5UTa72V6FA4k3dHuepXUYRG4EeCrA5jJCdTb",
  "key29": "VTSkQ42tsorpGVYmipiBkKk5ZdUDbgYDj3Rt7LgaxXYvXg8jrQTgWp4onEPbRWwptjCWHQ3J4yTQbsnpwjcWH4Q",
  "key30": "5oLhDzLULk7EkxqZ6ypmuhWpTFUUL8751SDAfnrRz4N4TrUWiEeaLNTSw7YG6xPTg4H4Wh1jVSjVGvhdqYxPAS6y",
  "key31": "2vcGXxUCbHmcpoSL6mSiFmYvRsnFten1sJoZZEGWuayu4jhGibT2V4jEkSgVYnSnVJG4R2GvGt1bAfn88AUYuRxw",
  "key32": "2WToM9aGUkv9JBTNjrhsixuFjCQEDV1tA86JaAtsksiGLARNXNFQQk7xbozAeBtH5N1Lrmmqvvx3AXhcKkKhS7D7",
  "key33": "4YjUuzTrU6exS5EiSv1HthUzsgUyUJWRt2JjDdCVTLVnkvZ5dVuh3sAUYVFwV12Cy7zLid6p1msEy6ij7zoBGqgH",
  "key34": "ENSmSSQJxiSSxChJTStPA6ZmNJoGBx2AV6KE2nNWjRvXXUWKGdFNC1THwaznfwvffAh1UK6hKscbDECUrsyTtK3",
  "key35": "91pEAgZkPGz16FTvboAHf9y63sL7cLLDtCL2Jfw4RvjyDBMxqQzTVU16Sf9SZMEyxx65tzz6jdwZ4xocW3vvqoJ",
  "key36": "1WAckNV64qsDN7kKHif8j64UFsNeCR8TFhTHyQJvLhhnSgDxzuPQ8m35y9V9yaDY5CbA1jWAgJjJ8h9JxyTFBZ3",
  "key37": "66ksPW3asDCdutF8EF7TmaGBXyNgPSk4UENy2kx5iLj1duhTBgyMPYpkZLeWTe97D2qeVDjRzkZwsHBWiiaXgwdu",
  "key38": "66a9MdTYgyNwyJ4sknACqNJZkJtwWQhEF9U7TvYgQagcLzqsSdNdde79NRQ9ZwRHg3LguQuA7FpBd1k2rhc8z23M",
  "key39": "2u852bunCCGNHNvfDz941o37fRHbgJa5Q7bZuM3surK2c6tSTwFb6qf5MNXj5J9Wgh4oMAxS31kiLL6ywRMYJzn7"
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
