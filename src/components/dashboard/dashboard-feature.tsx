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
    "2AxkoQyjxrDVYvxfyQ17Dg67pqEksDXReQJixhhjzKbnRykmhTTaX2bwU271yDtWQCuBvw2WrRH6pVigRMk3KLMW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s5iLbsSvRMW2N151uERZaaJaf7noRhARYwyTet1uFDAG3Rv58bqcrNCgwrXwZLnigFaedyJ4Sh3VA17X6uPmaaA",
  "key1": "FrcEv7EA4WnRyuY37LRTFjbMQqt2nkkdPGoKRdAin4QaThVLzYxTnHYL3dGkrzgwp2wAmBAadumRvtLihybhFrg",
  "key2": "3FcgFryFh9DGzHTmU1rSyZ4uy44RW2D76YtFyJWWQ2btRf5zZzMJpDL66gFQ7GvTL2MN1TFK31UzBCfHbrbwqsLn",
  "key3": "8ZMV7we1DPyWta5eEpmbAUpegRdg1je6x71tavQiu9rwnhfAU4phD7Yq6dSr1kcPuKtDs22UwA7xSE51qKKpbDj",
  "key4": "TkRjqutkDhukRXMMUuhGLdQdUwMQtuhac4ishZWuSWrZVThxLRFSk6akqCNKWw5AGaGgCS3FFcpRkhXFSPUhwtn",
  "key5": "22Hs5dNZvo7TsFbJShFZXaZ5CkScZqMeoBrAtrbbVhWeKBfhXRSeWeKB5C6uEYomkwajDLS839nC1ADaC4nCPjvc",
  "key6": "5cBZxTvHDPrVKsdp6LiERhN3XpsWqcrebE6HiQn7ijR9iW2Sgs1f2TvegZHqxhzXDQdUjumuN3cTvYAwqVhkbyAh",
  "key7": "4LyyJwx6WRRCvCqsoq8uv2AnBveoDinGdxTPsb3RQM5w2cWPKaqvfGGdHKDjLGLDhTBB8WmQHXVa1B8NWbZVoSNH",
  "key8": "5CwhmbCbCq5yQBQ7ipakp2cxvrdRenP9QjMXxSyY6CbPrqb9DAFGKGhNyXek6sULL8eoswcLU8LHYaKZGFgNq6PW",
  "key9": "5VK7tVvu923Zbn7u1LxYgAJyzpJJ6EXPYS8Htha7R2yWppTMPJ3jCjFCLXZdjUh95SVS38QdX5JiH3EDKfxdjF9z",
  "key10": "2Yta7th1yxurYffA1iz7FqoGbukqd8NR99T3v4wXGRfu8CdYjpPrjY3ts8kY832BsQTcThv6NbeehmDW6P3rmrW4",
  "key11": "3bXhx5g3tz5bpdvEHGoqXUndz8xn1qWzgjcWygcLgMP8UCaHSUqLhVnQyUE6ia3L955f3BWghtuF63gtv8fVHzDy",
  "key12": "4wL1ap1kkLR63Vc6mNNs5H5ng6KAidoc9FnCMWTFLv2AZCjhr1ekRG6aznAJW2Q3PaVxj8fBtJ3MZkm4vfwpy2Q2",
  "key13": "YXkrxY1uvEdYxan9ppoGZbJA9Lb8ykfr4927MbwdyScw9J2S85cT72xpsw1DT9Q7cpsX1N6u7E2Lqh999bfspJ4",
  "key14": "42gYS23t1nCcikvacJtmwJN29XpYgScNvvfBgYXZ7pfj247BQR9YAA85RCqZQ3w2Bp2ZVwsABG9CBPyPqfmYbhfP",
  "key15": "4WbRnZcRyXaCunSakqfVLY3r3XyJCPHt6Zne8efZcBQHSgLhww7f8hBYoxmmFo2ssveYfMM7ou2yKAnRbVmbYKzH",
  "key16": "4JSCEo6ScNc626wenr5Cs7VYiJdyct3k5Kyv5VkQGbRtKoZywWyoWHJDZ1X9uhK8wEbiLTNo8tT2qsfa41PZefy8",
  "key17": "2vsQxBQ58Uv8AnKi1t9yVnsqs8G2ZM4ea9UHiDLBGTEohSCbbg43wK8CQRj7X6LBKK2ihTvtGxPzrBu1gmV8BQzU",
  "key18": "63PZoqkEC53iN7qsr7XFyTEZYaFB5vhuWeYTYAg4c7frXwozKFsF4eGTfWztPYgUfQSgvWUzAbrmfBkQHHnWJmkM",
  "key19": "23Ra46F5gPCq32GfRJgVFR57m2NUB9Jdg8DFS1of8KCBv2QiXbwtYFcwrFJzBGp1cmWFqXtYcTuMdq3j1TN2Vbff",
  "key20": "eNYSzRfNmEYxSLhS4SGDqYuSTpbUHi5a7KgoFcw766jUCw3LZzVAyojRGPWPDzuv6Bsn9DdhG5vWvZx3FANJyTj",
  "key21": "86FVEmSY17Azt7jdonSHkac9iC6nwmsScZTy6xVqViH8vL5iFST1b4ygg1dCqoibVWGhpTQBxAnaRZX7t7pfszx",
  "key22": "4xJUTSAGT1ZEvqhS62J6s6tJVXvbRvHKG8t2ncsCsyPt9viCBfKPBeXFwbHPyRhWvUx56g8eeXvHotZecJkwd1zR",
  "key23": "4nfjMSCCURu7vKEv4Q8NuhJ98tv998tH4yzvZsgFYJEV4Gh3QULPXvQwJ5BPPABj1eL5yRgEsyrSJHRdvP3UJhHa",
  "key24": "35coxWKdNRaQo9dX2fZqJWoXoicKzqn3pADPQ4uWqBYuN9nZQrMwrd5f6bRoeCsTFvH1Wh8b8CGsrcW31s93aWk5",
  "key25": "2mS2XnvYwQuJbQLw21JDWMqZtfTnJgKzkzM1X66rEkrnk7QQJJPeJZ3N6nQ49DbCocU7Fig1x89ogWFyHA2xecCy",
  "key26": "W4pV9ckeF8ujiFRoZc3rPLjDpnLEFJMzUTQrngNs7V8W56mC37P76yvm7NQKoHRGcEKchNHNJR7g6bu1YHo36bS",
  "key27": "5PPEHUcAdJsTSFfopxhhBGdkiwYor7vyUmpkkA4GzwfCTbc59HAiH3t1UeYTwsRAmupmbKGeAWGcFhX98dKDVm5e",
  "key28": "4hktAR9xmd3xfQAfaKXCheLA8ZEmk4JGfqjjNc8GZ92HaJwjCs6K2ygKwiyCm1qZRZNbh2LA8EvnNTihmqJf9h2s",
  "key29": "2LGQvQasHr6EW2xmDw7XXijdRiLZUSEqL8F377FKsSi9dGcXxPdK3FncP8YCusRqGetW4oQkaAWAkjEYmELBiyt8",
  "key30": "2qAqkwe1Ywm8YkZbUqZrFnzDMu6Kp2qCNgvYG2C96dcbn6VgMVdDZTUgCbBBU5Jra8kqvmLK3YEJY2pxi9MpeLcg",
  "key31": "66eKp27yyQcv12rXT7zD9qNUAdraBxFZW8HGG8NdbjJziN5abStehst1hGW7eJygqodJhWYDERL7TeU8HhHRkE2S",
  "key32": "2rw6isUtpYqbGzWWSUYfe8NW9YZ3yHZ2xb91jNqDnVLsYbqqwsYL9xoWPi8k8XVJVHkNaWVUamc1uLq7JyM5Kt8s",
  "key33": "5ZPQuCoHVepZm17nByMxADTmwiLGrD2aHVhkz6yonXRcqoFJ9Zb9SqwdpK1vq5DxiSKquStXKACHnoWtKUfWoQC5"
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
