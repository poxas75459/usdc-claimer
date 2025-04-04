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
    "2YJwPwQXn8MUfMAxxeGTGXacwPpwpDdNbet5UhTdH5qYUzEsDT8xvkkVPMVxv6XA9x6RmF4k3kuRFjisdsBEpCkH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55dQ8unzcoXp5FvF7ijgjnGai6tE4mfjE8ovTx9VbmbPpfxa3NgcFbVNbYwkppVitSznsBKpXxZRpd83QPh4z5t2",
  "key1": "3Cp3r3ZUD7UvZA7HkoE2NCSp9xTnpKKHxL8PNn6DyeDxx8qTkAa9xsTF1VqeJTjd1akvwQfG3SjNurng1uU3hk4K",
  "key2": "3B2Q6xvTjv2XUezVUuz7EuV4RiZHDDoA1oGBTitQtqGL3Jw8n3JNtyYfX4yWMwyiWXv4tpqDy6sFydGdHZcYUjHJ",
  "key3": "36tvoZzdmB763TVUUrs6zjsZomj1U56uC11g8Psd2BzsBYtMbWgV221ZDrQfBSszDB9SZauR64A4i36VU4WnHLYC",
  "key4": "5ubL5jK5HpqWD6oWaqzouYQ2AC1eNDRCw6XYCG1nw4jSxSwZJeWTRx2M4iVjYCGQK96dGbL6VWkr9aSNugtRX8VL",
  "key5": "3nsaKq7iNGkaET4Gss3NhTXYRrNtppcu59J8YvfSkjqcTyGXijrY8nkuyviAief8d3wRpfpXBcs8FSA39u7iyppp",
  "key6": "5VEmXB2UD3RfF4esoxPwQKZuivsEpzSZrmaa6d6aGiTkZTLBEzzhYbBjUeyGpmydwrkyKHZZ76hnyTjXCofZwaWt",
  "key7": "4ET2jpdSdWvovtgsGYSM3zJTy8vQ8gyDDKCF7Bt8rfULnxzpXAwcMBXzkbC6qkiJ7msn7LvyExH1mWNCLjdwnsgr",
  "key8": "3yhZgtw1LcF8QQwsJvgVKr8M3Ug9fz61TaeYeYGj2PwwqjnpkknDT4ucnqcLc7CiovFtiqzMwCx45GAWUwJxS8jp",
  "key9": "5tYgdHE8ZoCqaRVZ6ZbWhEoBnAMyScChj2dsDJxAXw51Dp1VvpHgn8xoNgWnceR4ir7L7UdbsUzqvmZo6kpTZeKV",
  "key10": "VkmtrvLCmZhqHvMn53vMSsVCZX5T2PJYU3zstAZ35RZCjisk16YYjRkLz94wLKWUvJHPivA4nga93p1nzWvWiwg",
  "key11": "2eTNag164Zr3wBUUDG37axpFam6QCX8wjSR7iTAsmmmrzFs5L2pCivMicQYsDeSEZhB3FKVnC78wJZJke4WXUgPt",
  "key12": "5GyWwnYj8YVBpFxgQ9K1ZEfRGUAZNKb27NeExBW1uXqCv7FBB7CoMY2vc6jx9xTYgqYZp97mDj2juMfooJLMX36A",
  "key13": "2j78hosYyeRVNeLXZSmU8GrKcRNoyAaTZeQ82vJUbyyzpE4jRaXWkqMB7KgKf1YYD3XYa74TfGVmQUQyfoaB5Qu5",
  "key14": "3d6ZojTbHJHNhcNQTomQFHjr9Jok71Sr1hQ56RXgXM7Bj3HdUov9GWKsjbDYrwKSdWCp1cHSamSuCnmyhm7hdvVj",
  "key15": "2vzNEBHEBysKtmbqwef4RXVkb4G73dybaDv7DKbr5zFgFmvK6mSAf8FHnBEnFEERsahd9MKcGXRCFnxips6a3mcR",
  "key16": "5CDPnmofyj18MfjfajYP73X1fnmpHLd9CAQoQCgsG18vxk7tDKWTbEJipY7HcRc4so3mxoyo4ooPAcdoW4HSmFuS",
  "key17": "4tTMjNRFADyZjZSuXkCMe4cqSEvtR7nGGDW3jk9n3uSVyFDdTQyFrhcHE1mwmJJTdSn4nu1c2hbLw71ar9UrMKVE",
  "key18": "27HHGDfBTimEmzEfnKGyaCTak9sGdgpsS9BTRopLrSqRD5Unvwu8QZWRrKjKdriTdjusTa6yTGfYXdXFp5y8KS16",
  "key19": "4psWAkWvzejeQwB3UPqvxAvfBZ78SCTpxUxXUjZiEZxFSSp4c2JHojvqJjs7pTdZM6FkzV1P7JgbRRJw7tKN3rVi",
  "key20": "3GhCTjkt1Rot8ZPHcEg6VCnyX2HKaq4PFyrP5VE4ek7Z6qMjCGYzawDT9g6nLgoisJPaQF64v4Jem1igHfW61dbA",
  "key21": "5Bb8jxZ74bQFqXsMmRLsnZMoTbQff65UqqFgqqXEYa2ZjqT1ogsDevbdvsr9bHZT1CvR154E6ACERkrd4pDMARUi",
  "key22": "5ws2gXQGAYQMokETjGqHLaH9HTYXzvJWY3tQBTqi7ENGWbpP154Z3k3ms586aqjq2yTYMxiQVSMqcrqCuhjnoR2q",
  "key23": "5G71ZmRMipCxjpaPbab8ieKHWbtZTdcMRBHMeoAGQWUkYQDDnvx6mLWzTWSQkCQyoyxVnHb3jLn6VX3ZBZrm1YMB",
  "key24": "4JJSUx3GKoGtxvcoNaA9cEGwSdLmvNxMf3gkvE2t9LvomQYViqq8MSaLXBRWb87PeZqxTVpF1JvX4VkZxYSeaLr7"
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
