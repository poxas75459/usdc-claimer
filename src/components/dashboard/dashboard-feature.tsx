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
    "2CJdvnTZU9zWQQv7sCK6wsFhgz7CZjt5N2Zo87PHDLm5heSg3zRbXnGdbCdPkaGXeFGNAA2T19VNCWq9yyGmXcgE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V9fw11Gp7onVuneyihKU6JezTHhvUV4uXjufDt3PQSDtWpfnRfbu4vR1EwBTnaKoXpPpywKoC8gNzEq4uweR4zz",
  "key1": "4M8kGmXsvudw6hj6cXhDK4iHTdGnGsVSPdPEiU2Hyafh1r9UjQcCRxM8x9EmTNwCL8dasK2t7ArMFpN6NQPsMWJc",
  "key2": "3SyRvYtuAa54m7djMM2aPHc2tgqa1HxE26HDqwCA9iHemhnhgcSUxHs4NNVHHNTbpDj6zzrfahynYSvA97vesvxM",
  "key3": "2eFvmUJpbcSKmfG4z6YFhpNoLEoYzMbNpWwvUT7pSuLqrpxfQnNuAuBgAebiJJZymMbRKpkGfzMfYYnwPwfZUEA4",
  "key4": "4QF6PbGP9mH3oVf4zi7eiP6k6pGBLq2Hpcr1J2DqSbMEFCN4oiuxkSju4Rkcbunu8tRBD2yTZjbmWFTsLCNYiz84",
  "key5": "3GjgGj9L2MmnGkXpLs64LrmGHpDxHJDETNP8ym9T5ejydji93NSDpTJSFMM2iaaXZzLHXEfgNPqz23sZvhRBw2xm",
  "key6": "2mpczCSL6TbZLQjcAi3HJytHrHZ7n1dd2H6KapTwGUP6TZDRxcLHjAzcDK3qFaJTmD44mNTaSkWf3HeaCBwxhPtH",
  "key7": "GC3YciV7YjUFFCYrkcVQrxRhPDngQXTUPowH83TT5FzQQF2xVW6TyDV93LnpFAx8BtndvBTRrURfpDmNyrgBaFc",
  "key8": "5WF4R2k3p38yeAMDGdRbkdDBNY4NE8frxb5nUaXrBfY57gYyurCG2FCjEVFQPYdSoWgUvCkPhTHR3aLUT24abr7Q",
  "key9": "33Wh4uRPANJFAWofqYoeKXeZUzYhMv1QpSFZctppD7UTdzRRyyLRNR3E4j5NKu3PrRqMukSet8bHBE5HQ7ksEhEE",
  "key10": "4ynvYABYgsgxqhW42KfuMUD76nWGEoQVfGHimeN8rff5MBQkUCu1XUGPLn2cSzvUFirS6SG6qUfeM2LGx7eYqCLD",
  "key11": "4anxUVT12U9bbTZwLB9kCdUVAHaQMXupLucZzv2YxH1BxXFsXLS6Vz2HcSK3vxhxCMphdj5HC2RRRCDEwTyLnLd2",
  "key12": "3Mgi98U7AbYMkWLvAzkexP3z8NG2La7kohDWvSgYMR6zjY9es7KCVSyc8spyvhvufEY8NKpmW3y9yVDtpLQV2c6m",
  "key13": "SrNcvmCNtLSmvtLzKuWaAdJSXkWyqivEbvVNJdYFobdyrqafwwNKHxAibxmpaeDWSZLmh8w5sMqHCek9jasaRjW",
  "key14": "2xcWHHu3uHuMqRwHyzNnTyz4C5jagRMQDZMCcXKzCTtF5GEjYdZFDnWXx6krthyTUPiCttA9w1V8Pcrcd7AjAcER",
  "key15": "2d1hc8v39SbFNf1aabPwSkzMgPdne58cYoE4giD3dt5Gn8mqzqjuVimtHYLCupnQh6JufPkiUrYp4qXoEBCCSe5u",
  "key16": "5qLrv5KXp9wAZKuRsVvqwzXowRBe9ZBgZPvq3dYtBwat6aNN3KjWFk77UiyBSUQFcwezNmcJ4QaHvGz8ajqXVjdM",
  "key17": "2PxomH1m5QSjREY7R8rdH9G3Etgo4Dnm4P8DnB2CazXjA8oTi9L6yBYwrPr6A4JmFj6UckR8B4e3PW42j6o2dR3b",
  "key18": "3YUL8DzZ6aPiNhjW37S1UHdBQi3sruCiTPDZcu3enwK8sJPeqwJH2Uj2bEy5AiD8cZx5DsQC9WwscNnz7BQTJaed",
  "key19": "22MWVZ8GiYhAQ2sk9jcvCW33zjVKbEsrYUhTMw6nKLCd1RfLyRsgSfjcC82HjXjZJoJ9Q3Lga7sFmuV7zbJ3pXRj",
  "key20": "H2hdJLa4gkcmxTwtM7p4f6yqGAKCcTSM6ZDM4TYx3hNCAREWSjQTafkMcuu9urXQtboXd9Pc2vyW6tr62W133mD",
  "key21": "4gr9jkJszBM4nDEXxgc34cAhTMSEbWhrYzHkkSSfk2dKDFNcY4NbVGGsjCKGcNNrxj25BFiJyQdiGcdbr17jY7vB",
  "key22": "4XZ9pHmtZrGRsEkktahbJwbYYdPPCSnfFTiEkGas9mLjFSSq8xpCUFUpMTYdLzvF9mPWycWQt6Xqe8HKMMMnhUGq",
  "key23": "5z8Q39ozcrm9pQNkSHKnN7jGowwRXaEUwQzYLabDvK5R6QFHv9Ctq4Kx2Qc5bLP5pkELuUWm2CJXFeNnLPFE5wrr",
  "key24": "cmai7TyJ67LFi9bx2QnQrXx8zzjbKFSmRcfrAhF3951a5WJWBjBrgaVE9wRPdkBUKcSfFdEMy5Nc1CnsBxQEaMx",
  "key25": "XqjvvsDeDbXx8katoEJYiPo8bQUPniHZtDcvd49yo9BjGQAiqzHqZZmHpEaPgmrggGLfhMRAUAXyXf2E9tjcSDt",
  "key26": "4WT9kQsVdnb3c5rDKq9g7ed7WAe4BEn7c7N1LHNTXipcshhEMHABLip3LUbJhbRy1YHPe4JtRuWAMCb7TeFG3BLN",
  "key27": "4CHLuzqMfZVvCWSCtKgCDDhmETKFJnmiTTPcF68T6FiBxo7PjqQe1ik8xK3dQ9gCCB5S6eJ1EGar8hT8sRsToyzb",
  "key28": "4SnePfAvsKimBy3DhNTNoPWc8W5dx2TRE6b32cPFSDsuPKLQqdMj7VCksrQ3Jhsm9dsSMDVrXtudX7xjsjZdG8Df",
  "key29": "2rCkNScMzGe2H7fnur644xLq6iNK7j8XBv9gm7N1h4G1utmYm4tT6UfgyL2mR6RM1t1wzpkw2G1maDKNty4fjdAE",
  "key30": "3ZRzcu399fWn3jimSsxWG8Yj9ebprcK4F3VUESMJFhqVxDkMtQ1QZw9MB6wqZsKnMUyVRb3LDqZk3aJ4oeAhoSzB",
  "key31": "5cmYpn8FqsXEhwj46aMStdqNxb8YhAgZeG2nTuE4NkrzeTouRvpp8vbpHfTyaDfm4Aea77osXi8hUQq5t9KSc4CR",
  "key32": "fpjDyfPRrCGY6BifnM6jKVPkZkz3vcMBzmiqYv5j2n3v1a9rM52bf5w3iA1aZpn5uR2KMb1uDEPbftirkN56CzK",
  "key33": "cjrhV3Z1jeiw6bP4BQfF4T7ok2vLKrL7a8E44mUvg3s4yWPexftk4EP28EvHTbVRCic2QzfzYWdVi8mbVuqW9c3",
  "key34": "5RxtBPYEonb5wRnaDcS5sUzw5VSDZzuvyftAzCCNeQcJekcNW1XSnG5gHiX1nWBnKKiNQjUnPAzYxfDZnjhfBrdn"
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
