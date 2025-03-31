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
    "8zNpEBc3xVw22KQFbHEe7a64BsC9dBCBvKkjorsuZwXbkDLmgd76ZWtxGcQEmiCCsGmmw2ENLYh3Wb2zPBPPpZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Qd4FhrZd2x4GsQUYx2xu8tQLVQUySbPm3c6eWxMMqn44EPMHcVntZpWVNmKMkY4wTDB7CYTmj4G8G1Xprk3yBq",
  "key1": "5WznhM39JrMfUxUsuKhfMprkKyt96R5YCMhpKpjL2vXhTfe3R2jhkCJH8k4n2eV4vFTD8XGMpBndMUoWtsSgvtfv",
  "key2": "rHwjAexGv2dPMUXeHuauQaBaJxQ3TA9KgqKqG85H2W8RiJkgthAo4LjgvsXpdz8c9RV4QbAMm3EhWEPdKRJavMd",
  "key3": "xa7HwGNqUEGez5bTB2A4Tz1obeVX5AscuUDbpeywhQYJcfaqnKHM5kgHLneKtXMw8kMrvHUr2sceNJ9tE6UgTnA",
  "key4": "fXmbZtM6dvsQ7AHh5rnGEHsgFv9UW28ESxHcy1bTKUfGganpZQSTwR9meFHbYaFhJLL1jvRxDe1qqtwcG2NmE5o",
  "key5": "JaQyqC5ApW7TFvUtmrvkCXU6EiQBWYRer6nEAk2bTp6dKuToc9tvFhBadw8n5A8y2LNAgQAKqK3WVcGnAbPgudU",
  "key6": "HX8K64geLqQyxmy2fu9GDj6sE3dASj7de7eST9hdUarz7AhGTj8rAKBcEyjqQ5QWUZ1PZgi8CkVV4icmuUgho3L",
  "key7": "3cgarGCTvtYSvGWkQP9z7dSgEM9UQLoRWm8uaXTZuR5YcBXmz59thBnCTcuUBJ7ZairF4DLJ7hDXzMw8LrATsSf8",
  "key8": "2HAzSDGn1iJRcvGrj7idWuqTfCKw1V1xZHRXGdf96yhRR242eCC3f2cayiyeJ7A552SnsUNxYRzT5oUY4yMvRJi9",
  "key9": "66S1ZMqinkgBAmYWKoqQEBMWZoSAKtBoW8rKVv4KmVm3J4S7qCr9LtBWon2HrJ1c2VV8tUzBtLbHv2B1E9r7hpbf",
  "key10": "118YkmfD4fBJsyRuEH4hzJYjfT6kjcHkkyztQdD6pZZRBe6LxH6pqLfc161QdBoyJDWBgZ5HShR4sS7fLUyDr4R",
  "key11": "5FueCDYVQ1u8h5AFNdJYNfKSsKKu8om5N4cQgHvFx4dBVFqsnjQK2eruJHsvbU2iGg8chnqcuqfqduMaLWB792ky",
  "key12": "4QE62u4Nfbt4qgAvc9Yy2Lp24CvWo71Lkxmu1CqPKc8Stazgweve5cMLbsGQary7uHKfLnitjMJWdX6o1CBneXrx",
  "key13": "4ALzgh1y9bL2rby9ugk9DcDyraaY5DgrxmMkRybKuyh53TzPrkCBZdfvxChjbyZXL9XdxrRhEr4x5Qq3oRrFfCdK",
  "key14": "3MjZznyP8YAxto2o8vfAHBMWH1MhLGD9hhWxd5g12YiogEijn7YzCM7ZeCqaHdmaGKrNs1UjMff5okeav66QWVdi",
  "key15": "5kVVFM9R9DW7RsVpnuBix49spJewy6Cg8zRvrLo1Ff6A8VRKAnXtsU2jgyFjQXfn6pS8Nb21WJ6ZjGuNid2WEQgG",
  "key16": "2sQix9jJzJLM4Ni7bSRmFiX2J8JyqvsifNULvoLz8ukkhv4yfgTwHcXNycmp4oCCboK9aR3MqdXAMZjQix4SLUV2",
  "key17": "2comb1tKpkMuZdC5sXdqD6qcXk2s4nyqiG1zjtqzUrHP6aW2XoyXZ73XKHZ1xn2iTAgRB99yT3S364rfwU5yR2ML",
  "key18": "31eMLNZzsqp9vnRmrfWticgoZ4c4MtcHWNjFPTm5v8ofcn5BLNgvKkJZMWdFtyewL3N5ApwTaYye5cKHfZbtjRtM",
  "key19": "MNHumLpe3SSQWG75QPFGzSEA3ryrxQbvhEwWSmR9vXZJgcsrcsLpkCruyKpQdDDDidQSMrXK8CiMvPCBsPYtoiB",
  "key20": "2DKh9sTtjrSrAqRHcovqXc7s9pkuWicz15zpc3cbKtczQoh8bAynmCavnT4hfFA3zx275Th3JetVWMmmF31J4pfG",
  "key21": "3VRetqqvGSYcUbdUpBjE53EFTmkzpwNJDF1L8RCaSZmHhHzG6iSQF45uk88uZxDaoj6biPj5pm5qXqtta2zYfTPz",
  "key22": "3jdHpQktnUmc2mGW4ft5qdL5JmmK3BnLpPgagaWDRqsyL1jUrSNAsht337qtet8TwFZ5iymSiZi7RjqgoZEvx3KL",
  "key23": "4Z4vbeTD2x4cD5sjHn2zEPdV4dFXwFx1XCq4DNGx38TMRG9oAAe7CJ1fJpi7FKKNicU4bx7fw4h38hn4Cq26VXG2",
  "key24": "2f99YsZmNViU9rVfeMWU4oyDH3ogkVWepLfNes4wFwuoJ5QuqABaxLD64dATBoN9z7bdm36Qo4QakBR9y1RMAGhv",
  "key25": "3RAuPZ6Hgjxh152iVPTQcp3FDrFxPBNoc9mCLceHQxGtF562eJFt4oEfAPFfaomwiYgCUqPfXbGReYaPuJwfAi4M",
  "key26": "5hGhiYTFxdTe7E3mLUQX7BV7v86TQz8X8nTFroRpFVGmpEhsSg7jfmjSd7GSvjuj9eUN2wtYrDUj1wruv3KduXjd",
  "key27": "4DKbzTGMGxd5BM9LZ8U3SfanPz2SNdzpjqyEiy4Sevzs7PAZcgzXf1UMXmjFpEPzFe1QepJbDsYt7hX9Q7yqgqc2",
  "key28": "4vkPxNSw8MViWzTBveksH7R6e5PL3QPjPy3CUZqZTKfqp7RkBSLP43EmQJV1wNMZTMa4MYcy3gmLrPkmYRkVkQS4",
  "key29": "3JRRWydmW7MrsdZYL2KFGEo5CAvV2nY3JwkdeLjcoKp72ATbmdZFHEm1bs5rEa8BqyP7F2UTcUFnGCcr8BVjSPif",
  "key30": "Qs8P9rvQPxJsCk4e57uQe21rAEyULBEY1RyMWYvBVC4fiWyLUUgBLHmWrhuCjEDc7JZd78yph8mE8wbmMAPiGPa",
  "key31": "sLCiV9tGTgTUjfK4XTyHX1xTtDmXgzAHDPheepR5NpAL4232Upqz42PzHybKguQZtrxdfsTrobtVpqwBS3FdH26",
  "key32": "4wSAhpThVHH33DdB9Lj5cHekrhXX1sMFH5d8ePvizfBAJVWoJigMg2FFDdiWrM4Z2wewXipZpV9ynhPugLpZED7c",
  "key33": "3HuyYF93vAQZg9QSet6oB4BqVXRn1ac2MSLBiNM2Fb4TRhAHVKwLYQQyky8341Xc33gPRZZWdtwLChRNPrz2apf5"
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
