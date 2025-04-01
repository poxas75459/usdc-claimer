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
    "5d8vdGvbKMhiNiKGPzt1vNt1ETGgZ2adss8u4uBjSRnVz9t7fzow9V4rRXnnmfXm6c2f8UHV9pUxFswZMn25rDow"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59TGXwU94QVU9sHjSHHktchtYsMWQR6YweJbz3JKNRevvuUyeibfQSgZzQMpmhwSVhvrKD337krp3GAuFSBUPQj8",
  "key1": "d5n4pX9RuWYca6Ukhdamp2VY5Nn6kPgRMJwAB8mcMpHVid4V8q4TxtyW7SsL3Z59hU7NQuUBt2EEEtXkqNkwMko",
  "key2": "5yBE2vGkQdpLFhCxUN8Hv38qZdmM714UTkBaNUiBbCgoaBk1XfVLdr83MryWc2ApgVBA7e6ygNCBPikNveRPNBsD",
  "key3": "5dvqgudarkGYhNy5GeeMd2Jn2reoo2zcMDGWFQcmPiaf6YhZxxvyHjSsovV5RvT4UMmvSLx27DRCxDq7sF59HTNg",
  "key4": "2NiqA31eS9GgJUBYE7TfhbUcbnNGy2vFp2uxnuMBRQPPkunQfUEMw6Ze8fPFk5fkXixgzmUauYA1KdkkGcyyvgz4",
  "key5": "49CLRGWSjpfBSmGZmTTu7WY7TuuufEedLoxy5qQb1seVG8akQmhHFG79X3zaNpFtTPR8EMbYpwwnw7eaSKtWkYga",
  "key6": "5b9uzG3qLyRoydRZdgwuCCAoKuVggmB8HxniajNygGhWVf8iEQxqsoujpeovhiZ4smZTBNSpPVtnGbJZYRGpz4uK",
  "key7": "2EpRqkkLBLvcbuZ69ZVpzKL1Dy5Nn8d5SCs6LqKFZCpPe2mWZmmowBWSXuqQdsFk1QUjVLri1YZ29Zbp6sw7YVfj",
  "key8": "5fjkyLhQLQzVPanbL5W11Zs7yfGRioC8UnunXJPhAiYBPtHidQCfGYYmn6XQX2777D4Jjvw2qHvuS8z1fbz7Tsa3",
  "key9": "2ro6oLELvPTUexdREY658YnGA4U4yYs1deRHMksaVvBnrAh2ECjBdEePhbcUspEWowbErSjFBPJfqhsNGnZWnWbo",
  "key10": "2vh4Bvwu29Km62bgv68KRt4YJ4oRkLwaCRRPmc7vo8VS7CCnykYVwbbV4aQkphTErmcH4gDQJNsGEXwnzsyGwLKY",
  "key11": "3CD9PUjv6EMp8yZqs4DcCpucgnuwbJstDtBk3633HAyt1hmES2B5gAg7qaueY5PVj1XSLChNCUU7fwr5dtrqhwhC",
  "key12": "3XiZVpTZ56VNCQnd1XtJ8f57J7CqDauZUJhCPrUYzvKExvVXHiaBpAmMbuLnT3un8S5LsPXWKLBNgnJ7TJmj9rMM",
  "key13": "43V18XqhqBdWGX5o5ETGWtbVVFejTXHWk9covQsoGsiQkDLJtMYKf5LvkGNTZxhrJk9QzuATmPH9ouEkwVDFnRf",
  "key14": "2WFnV5HvYDKZMNPzjAaPbW4DHEQ4qxLiBndF6TSLd9G5tD6n2Zm2wmfogPseW7NynmXy3G4mzBHsCf7z7PwyYKvY",
  "key15": "5PqKSg1ysvZM3kXmWoHiuBB6aYq86QYKzELXMDVbGqqhSLhxFNzvyubtkiLeRW4yFBtnvmVL7Mv6typMySNn1KHH",
  "key16": "YGzrToKwtYUic63rSWqMMH5AHGSVygc5aXdaioAagw8bwZYJFEoRcmbCwMhkbcDPzmzeqWQLGPAUATB4rbET42L",
  "key17": "2s2z5xCVLZP1qe9ukazPwTQzXHskt3e25iap1DwPYxf6xzUU8aHSKiHptfLZJd87MRnTqMEP6cNJNH378kqiyVmb",
  "key18": "4jvWka8a7hraBpUd5kNLCA8z6qNutuQMaGd1scxnbJP93SrmwGCkDebk2YiVZNNPFvU6QC6tUaJa9PnkcKVsGvWM",
  "key19": "62eWRV1rH2g3WTs5grG7u6fEWYSAnzN9eWDbjatKsy5HvzBe9CvJJGHjJGgkHWjqvN7nRBC9o9LWJh99esrNEbbA",
  "key20": "33bqEfvjHLpLy3GAGGXkVTvuB7gxXxfJUVA2BUPWW64U1NG7U7B4iPkFDWktwRSrtfH3eSxVFVmER8PXxyBrEaeF",
  "key21": "WLFU3SdoxNniH9mvZwP71VoWS7kSZwnSCGatPa2fDHL6v8ui3KYgaCE1tZcK6M9i4pkMzFij8RVwVrn15YbVerF",
  "key22": "EeiBEJsTZeSZcCJSrg1YXuEAFhenD1SV7mqUmzEKdAymJGu6gCCMQJ4Zw6XNitQTjfzku5adVoYR4VuqnA9o8b8",
  "key23": "4VJFTNoaz6FJSBg1eU9zD8FT3syrjP5SBfbPDxAi2E6FcPuo8ELNXCYs8WmJWd6JWesUqh5hJYnyvgf3yLgsGwt6",
  "key24": "k2gc7VjPYJinNPkAhZRTo4Ma2Q5uLAES1MovkM9hjAa6EmBBW8Fwkv5GQjVCmveQMnofnEuFoPG4NjoLuGpepcZ",
  "key25": "2trhsvToUa1zmLGT6KXYSBGfFwDc6AoUhmHTgmLGzjyvS53FXReSm8KS9BhjE3BNaLgj1y4o88fD8AeoFQTPAXC6",
  "key26": "39tBhtVgXadH7wW97oPExoocjUdZtLyiGySqLEM6s5ZcqGWZM5Fy8CUmpTdynhoNeaqNeS1ZQzoAd4n1J6AEKpNU",
  "key27": "2kAEZKRwdKQQ61ueNAxPHfYyGXnde1CG36kr8XgDizEiJJ78QF3PDP5UDk6ZTBx5VtaVZjF8GeG1fwaouA8dEScK",
  "key28": "t6u5whH72eiT9ZsTfRw6PXTB5AsKiArboNdHN5yiSdGZk7dfayj4L3JLhGKi4mTAZF4Rk1h9GJ5XRDbc8QxbgTV",
  "key29": "yMYaCb6XXJJgBe15HyvQvfTtSEXFzcYNB8JZT7R5JGTCrVBVMGrZtr2gMquyBLcaobTUhVGYZvCnEEW21eQHSVy",
  "key30": "4Gq2hAQE2TmNyKZHb3JvvcT5QtoSiagjc5rwz6AiE2bYJfLhg5hop6u58hghL19254cfkVmTwy8K5UP8i7t2yWRQ",
  "key31": "2DieAn6kMS8aZuzukscKHtYFVr4fYbuWaqec5p2c7GywYyPjfMjviT9HabTX15BRx5g9TPcVpggs4932w8rjDFqP"
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
