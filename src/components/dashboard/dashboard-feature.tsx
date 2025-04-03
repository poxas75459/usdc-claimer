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
    "3GQ2yKePhwxP5ScLyC9umFgmnwfc29rzLopTY4MnhxBqSwcJbT8j7gXUMEofE7Ttze9CAJK17zEnWto7hu4rVEED"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26sYfxkgqnKvKWqkfkaT6jnEE2N1bCjUgmAq8JUxqZkReAEfvfh96GzJfcnNBrh7G4J9nkkWeBJQ1ZByndUdMBGm",
  "key1": "4SQyRdq5XhWi7Lx2jMSGemdRtvRi5qAqAzZtYjUfKrobsRMs5iQskhKByk1mqpR1G2tcSijPPW56sytwYnVEDKUR",
  "key2": "2BqzWbsup4covqFbxy2tfPqZyXqVubxbyYPXYFGkuQGfaWBPHPLxy2nh8ymVsA2kmec1umEgLDENFNQCkhG3o6pB",
  "key3": "5oGmzdw2fFy6uSpnPsH8vuJh5FzXSLZVGx6XP2ZWMc7k9JGFkaMzYMf1mRoRC1FKkxUqUPjGENA2k72pTjmqyp3T",
  "key4": "2ybfeVFpQSJuRCNQXRSgX9XX96BLaAwEYqYLPjjvf6bBqsiC7D9KDMrvAnqbzn68kxcowFiqAtcDmQgFfzzKetb",
  "key5": "5K6LJaHhnwWkBCFo3CwQmJPgafsT4CeG1ZEbMhWHuxEsdp4aNb5TJNNeRLjrmmqTUbBJvyQUmpSHhTvZohGXkF2m",
  "key6": "3b7qvaqvp8cCDuozgVQvHtHdM7sr1v8183X8jJ4vKs2k8zQmZFqw6GyCX2LDe8iZXC7Jd3ycqm89DP6Ztisbv4GS",
  "key7": "3mH4i4pTaedMuimUxLb6i79bt8tb8wUkEDJ6M9P4yFXkHDTyt553c5Atw9LwLGpzwxtpXyHB7djx9RR5DCKoNnHM",
  "key8": "5u7e4YnFc16zjSoFijCq3aXJqibfRnuqXqn8ZfEfBuxumukvjqCV4smTJxKm8Lve3cWtmgzqkVFbXzkvNyApfuB",
  "key9": "3Yi2ivb6C7PRLhuf5gyL6eQ4Cto8UAjNcCL6Mz8bEgSQ4kiHsriZdLvuotVtzLVioSgqCRBJRE6y1wjUH9UKqU6S",
  "key10": "5zmLod4rPRg4ja9mU2wXxuTmqg8KQjDBK6bPyHEhB8sAn4sqZdszvpp8hqDaAHHBZX79GG3AhZwTEU7UgMGBCB4k",
  "key11": "47MBFeTaSmspytmtB2LrHiXVWrupHAiYasXxToNq15SzobayUszLdtC3dDGBsgFPw9Wgas7DVECex6fvs2xYSZqR",
  "key12": "2LDkxhJhaur98jr6hMyHSiGLNmaVb3C72AVHdaGPa2ZT7eS5vazhfHhUU1TwCVFPopSvziKp25GUKZvFXA6J5wcy",
  "key13": "5FMZGDdoSsDTaH58xxo9YQKmvzXg8Hj4k1XnKg1huPamGiKhqmG7Etu32d232XwsavHojDXGqS3f1gUqBEp5cXjc",
  "key14": "jsFoYBSxwmJaj4Vw7ovK6iqRyyqNJZEBHB4aco2jAsAA4k3YLWowAtpH9JE8xTQRx6nbj7hjCdaPVtUWSnvRBNo",
  "key15": "2ZTVHv5M16MMzaNg5yofFGu6tsBKcZSkgAPP4EstBRgvj9xTPiSbxW3ncQxJ76rkhAY9WWq3htfTKKFuNxHkEQ8x",
  "key16": "4ckkPjfAweZE7yuTMdZHueXzMj5zp1Rd8k9J6FXn4j31mzp7dRxWK1neAhu4LcFnW9Lp88YXiZ6JmF3Rs1w3rTy6",
  "key17": "24sAeQiUYUPhr5UnGojqkWDhoVqnUiR3atyBLuSAaYEzHeGp1vijn5uwLtacVSUxzhrpZY3L18yVvmgx3rd6q9sN",
  "key18": "4jkrPK6tJJGEX2FAc8oEB8horeAYK4JSSxG3W7Xtzu8LFAPudX5SHovVYEMQ5ydLmH3EwsU1pyTcAAagfZYwKLrW",
  "key19": "4vALwyvkvvgv8NMZLQ1iLrtPTkSt6NGz6UdVe3EbucV5ZQ8KR2DJqRRkb9wqLEd1LtbACf9UmpLju1jkTrg3atJE",
  "key20": "5aog9ip96TbZFx564DpadJRcanQmfcNXuUG8atkTDeupku13Mq28v1bqYJuuW8bQmZBchKQ4xS7TqoUPGvJUogbY",
  "key21": "a5mkttGLJzJ6Gypwq1Un7zdrWa65MfMLfskVycopiNHXi9hjQPToWYsJyN7UjNZviJ2xXTm2cjGaHz5aFZKzDue",
  "key22": "3ayWNWa9TnShs45J6LNpbbym79GiKhLyioN2H6rs6fx7awJaUzPTrnfhvz4Hq8C8rZsdSJV9X51CNKNAeW2FioXY",
  "key23": "3vTsZ1714B4PoiHFs3MaHEpvh6j6QQUQf5Ge21K5qZYiqmHBuS8u9Qqvik8fAhikjWpqVnmLfVs373nGTwwAY5h5",
  "key24": "41xijATU7KUPSPn5fvcVKVgCxAwWWHpFJfaQgxWmAu4zU7FkQSqx5FoUbcn3wYT2xbP7JsQXgPxiFpQ4CVDsrC7q",
  "key25": "53ZwxL684rveeFKboXQpNPJZ2rcuBra6N4RrSYRutxTBQ4sdkhXmjP7RcK5RHndgS9WBoZQEZFUfYfN4TVBFmofu",
  "key26": "3RUu8oBWRaWkSeQR5igdveRRpLB825NxEyDHgBoomEyQE7HH8ErrmRgQ4z4GWJHi4o7WnpBX4zKxymsWnyHLncYB",
  "key27": "3ercebtxcSf8mSsxhpz6yuP7MhpTjxJvzx7PZJetyDfgUs699PZ8DjQwKR8Lq2BexYquY75PWFBNZ6cUrB5sTMGE",
  "key28": "4DRq8GMkDk2xxJmGQngjGPWM96ZNKmYNNxJYbeeJP51ZgKfYTKvdKmG4LMmnNiarujGrh8Ti2UPziW5ETpRMoE7k"
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
