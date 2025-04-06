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
    "4DxDQ22iqrAjPELGNvEYZcsQAUPA3JPAfBu34rWFvbfsTSBPbnWr7G3YC9AyJRNeYH2WMAYEEZz6eGzaUU1cC2gJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DneFjiiRqjuFuw9LHtTs9N6fratmzzQGCeU4Kfedz7asGSbirzAq32UAWAiuYefUEjiRMNM84icXsi5RrnvS6Nw",
  "key1": "s5yE9MYc1gWtPcV1qVgX9cwzWdH1rt6rpjNXMWCtzBqJ4pnyGUEbbBf6XqfkwLz8s2uo9ViTXTWapeCnzcux8fg",
  "key2": "2KYFZxPFxqgLcHQFhHoUGtP8xnSZdN8BG2W6MPXYWfN9xyej9s1YaioBfrxYBuSn3rgc6nXNao9VbHDK8un15mpu",
  "key3": "61ab85UNciAyEoGyJEKtsCmxMdrqgzAzyPgDnKHc5LRgADzUyRVCzC5FqwQXZSCcTCENVtA2gjiCS8d18oA2HkDa",
  "key4": "rmxfUcHdh2T5p3tNpDSNZ7Emj53VSuv2VELS2XzjXt5BcjeZQrW8QaJRqhVKuMDZCYjFWrvzkQyu3Miid9br3sx",
  "key5": "4UfE9jYawqtonRbUua8i4eC9ZE7aFc9zQUAPvMWttC6hbT8uxaHwMCr1GCqYw12yrQTGP7MY63Y2PHKjXvsa6oCV",
  "key6": "2eez8816isyAcCbijwYFrAZLV2GL4TqYnmkP1RjBgRE24NAeB5XZK1mwf1GiPd6FgmaEzevEJfCyzs5mZ8m9xL3f",
  "key7": "4om7rDGbqHPMF8zy7DF9JKR6CS3eUfDKLRZYJiMPucm76R74pDXSfDfvYCTpG6ceHgRKWdJpgGZaudRPWPCUeRHi",
  "key8": "61wcyYLrsNTFYyfHqEYtvBPQHVVJxvSBVuN7ityz4bG6oz4Fe8S1SuZtTLGvwrpCjmshXG6YREhZaQVigBRHHEHY",
  "key9": "2h2fhEL1LQDgUKHyn4hwHeJDe6pmTmvNVJGr5eGZb2rK426aiWT9YKpLAAEVWtpKuh2vv8A6VpoFZtta6rxHCaNg",
  "key10": "4uLQSbqjFHiiEw3ECCZzbfGLJnYMotqnHHq8bCvGCdB49sD2cq4Fc2x1K1RjD4tY9Eovj35W3AmNJQbZGU1pondp",
  "key11": "3379VtsDyyqfQrPatiz9tZ63EnAVYJTatmJ9YPYSMMJDxUmDE8RMuwgoTnMuNUmUCKuu8VtDHW63VAiCvy4qVdzv",
  "key12": "4qDn3hp4uFM7EqgUBy2yBaFWs4NvwTZTCE8R7V2dr8MdmGHWEbmpheiBzePemw3FA5B5gC4rYXjCEgWQJcxW4Ryb",
  "key13": "53q8ABtzdufYLs7RA8HmYAyafk8iDgj6jv17xVe9w1iPNRfw637tyQkw4qezY4U1PF7MF4XGroM7mWCXwBcRsCpy",
  "key14": "gCeBpRghcMRwBggLTCtCRk4WtGkeM7zVQFbUQtW3VbBik9kERPd2nH7X439vq93GU7F5vdeDFaACPPbHaZPgaM5",
  "key15": "5u9kDYHJLScFfrw1wjk8oJ8pR5pZHz862tM3qw7WXTGjsZ5wLNQFNKqKYY7ZFMVEZWwywmbYqefXAhByLprXmpLG",
  "key16": "RVui4G2DwBrKaSNmPLDuGdoCoKU2ZdopGVdcuMDXDkCkNX81cFXSwzYkWvjhUDHWo7voW4971sqREHBosFAEPzc",
  "key17": "4iVfay2y5nRYcxboauHmz28s6DnZuh63YTvsdWECtYHve314RXEojuBr6w5nf1GVhwNWNcFEqoNKySC38NwDrZUF",
  "key18": "5x8ocEcQxDTg2Xgqtx31fKiexR73B75d5dJ6auMMePxAZuWVFWyqmP1RF6NvXe6pWymhnqz1jqvQc7bwc5jGrgNW",
  "key19": "4yQiwGsKCpcbZSSM2JvhK8Z5AHo3vGuPV3hGpiaC8MzXcpDwKUfH13tegia5x98tkSPBJJECVCFgnMy8NeweoDbA",
  "key20": "SsiyNn3C3GUTiTuHtEQuuzcFGNn5wVSWn4T5GhNhJsQJQJnqbXdAnji5urZa3JcFKcE73th8RLT1Z7X318QXpoU",
  "key21": "46HnmWChXu57HYPEpGPJVwgUdcxBjfcDkgYTDU2eJiw2v5AuMXkhJ5ips7RCjEVBgmbZCw9W4tpKSmbceU8mrywN",
  "key22": "53oxzNYoDC98bTuYVahAJdzFQWsVNu4mPJt1Sp4mGLJqv451v1oCk3mWXEACrhTDC11cBVhYzngq5N1x52hHcVYn",
  "key23": "2RtKVPXurxaPjuFwp58yb53igqKztm65GcA18JYuHCfT4xrtXVJ8NPProSmKLwBrgsm4TN844XZTsJJp3K7KQTPs",
  "key24": "5xB4MX2VvRthxsWHQLvH91YgKiUj8A3HbiN5dQnibCFbxCS9JCud5tjuVrK2d1uegcJpDUaR4AESewA8h3h33f9n",
  "key25": "4DEVvzqdjeaAWmYKNm6wN2igEhoTsPAhBo9xgceM2VzraeGLxAApA3UWD5vAdpvwgHW3CuhbB8onEpDZKR3gDPZh",
  "key26": "4QgS8c4XBLz7Nh7TSyZKsyUngk1fTBJF2UwQyCqHPeixEyhDE1aL7GUwPcZU8XYVQViA9zK1fdQU99L3KBg5asLx",
  "key27": "2wCqkhdkfAWeY2U5EC815N3DMonYJRqCD25S9taPqkeiK7TUZqTVZ9xf93hHxCMYqghcZieHHzjtU7CkH4Rg54VX",
  "key28": "i6WS1JATyd2hK2LBiwiG1WPDmAnLUpTG4mgBtgfDJ2yhLw2tbyyZmMP9NjTUqbnxsFWi5Ga6nq1zKXsSrCt5Dto"
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
