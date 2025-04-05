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
    "3BTsECbwGK29P46afnm19EvJgEgUKiFs3kptKkJJAt2jztbFRdfbRwpss68fnWrmrJp1U6C7U2cY1SzUvtami3QU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wBKCZpRJomhyrYX8VSXaQWW1VsMizouX5Aq1vzCr4xDR2itSqCpiWyB9sdnhcWgczoaJfXy4Q86rfCCgKvDNS81",
  "key1": "Ke5YGtQGPf3QKsgPfrMgVUZF5CAFzdJki8uApxDo6b4kcXKMKzGCUSxQkiWPnxZ6AvaFpDzYcZgbb6tQCaQuDRh",
  "key2": "3d2h4Ap85CvPkbU6oVxF6esPR2Aombrv7VrSa35smVRnr9VcTVfDRPnnBxhaYusjUTPDVDw86uCbHE86iZdyjRyP",
  "key3": "5pt3vTjfgz64xDJ5KPyvPJ3wnMY9LrvRqjatt6nKmdaKcxFBw6MuJdDVsYSysYAoH1r7y2gZraexS3654gQj7und",
  "key4": "4R2qhcZbKmsPjtg4zWY1HFHcZPo1v2nQiR6jKK5KWq9iCn74NccH2QrwWbpSAc5xDh4noqzcxqakeHKubdszgQ3S",
  "key5": "534sSLVzCeCzroNhF1vEne42nxJ4gv2CfdBb3YrfTC63auiNdn2M7fdqwjZ8EkhtriZ4oSxdrD1pohV6paZPp2Sn",
  "key6": "Y6mvdVE5qsyeTvJy7yTb8eudiTcTM4WgPWhCYYywyevhovDqpocREFGTkGoQvjuMpUXKX5J3QMzbqz9tophAdyY",
  "key7": "5y84fpnw7ZZzBz6tTyVS364FFedpvB7Gxxdz5Nw6VTgbXYU4MUvy3TrS55EdDdkoBv7wSg9Zd4Zs4Aiig5tDffNh",
  "key8": "4TVRUryQe8reoJndKNP6TZJhfNMHa7WMgmvmQDKCy6Gz1S3nEeV2ghzy53Rqco4aFr5pAvCzhBsTobiDU2Db2ECt",
  "key9": "43joAdgQ1EXBAxKe2MNYzNERqdqbTYRHecGiXNKESk4TcqzHxpisXweMk1U4UW9S9PGfwqFfRuEr57789RJVd2qd",
  "key10": "5PAKyCcbrMJ1K84PqxCcC5GatGf6bYmSW2tRf7N8FS2UVswHmTBEkkYsdNmrP2cThzDRvpAGdQ1LxUF24sqEKS2o",
  "key11": "5BaRKD8dkZeCHkqQC1zzyvQPc7xGKaBHxSLzmvqz1eSiYJnQ2X451hmbV1oh6vcGPHJHjTX9dteE81xFXiwgDwn9",
  "key12": "5XzErf2xEm7BM7bXf7eXCE9GgNDSGm9iYGS5W2FbPViC48YGkKrtA9nLreGjej9xgxHsifa4JTn2bpbwy5Bg9SZH",
  "key13": "34ZSbWJ33b7L2r1ZSN6A954gH6cBX7dL3UfajgoYSzqHAJoe6N8dmfotJmvqCU7phFdZdsr1WPVbDTFQrZF2LxhM",
  "key14": "HfrpnQpjp8dvvj8TeZ1aiYS5LoAZyJwixBUBaZCPvP9ufy2xGfTEDmz4SPKimGfTSK3QKvPErMQdZBUXgfMfyJe",
  "key15": "3EVmNnfJoDJ9kwdej8DUTLtpEzVQF16uFK7N2vKicoYvjG2qRRkfBxkgjq5BSxoPbJWs8V5G2C6FwhFwkDrzUh11",
  "key16": "9uRgYoX6ZiphF74avayJndxcmLcrkUWWMyKNFXR3x9jz8oXXDnpZyEtxWFdTKmso4fpUdfPS4sfa7CqcJsMqgeY",
  "key17": "RorieFVVsCLBK8qaXtob1pGvGhX6hfVs5CboQVQjodhyyNoBBSgsztjPBbBpkY7yptBPxTtNSiVMhFkkFnzriXv",
  "key18": "5Wmo2uhkW8GXFGbySrnq3yFfDMfKEyj3QfwbkSpfnRt7UmVPAe5ohGUdQUrYrF9RbGdfc9P5ZyTD6vUqHhCQBuaa",
  "key19": "4mNwhWZZ46qD9Hp8SLUyJWqdTnbfAF56R6rNcerXrfpWLPVhJippxq2qWKNyoVEWM71SQxujPgt1A2Q7S13AYPvY",
  "key20": "8zqpzHttEY5mHgawSrUuHcFX8TeSiFS765aHvAMrcxuKmpkhtqXtyp1XQhrAMsk8dHNMWZx8G2Sgt7zegwm15Vd",
  "key21": "4trqiDSvVCRh1E4UeNvhukAQ7HETALcZFvesccNsoQRU6PK39cSUWxoiHiHMryYyiCMr9Br2orJRMs5rhbRr9u5D",
  "key22": "3fnmLVRmF673GMYgz1YnhM9Nxq8DnZxysKqC1q6SMVAg63nnLgxyJKDu42BBGeT2onku35A86NG41dH69JACYStm",
  "key23": "R5Ls4djLpcEeiVDn8nGzDBw9x5K1DhmkGNScbFLtU9SbnCJXu6RZNqtByEss2AHT3CAifgEYfJJeg5pYtBGb8p6",
  "key24": "2uLX37hCaJtcFmXyWLMZdQawU4vnzPpiqwVZNgkXBTRSfeHkFSJ1XfmM91JZvCcmzkEz71bzPk9UfQaQ34Ls2nZn",
  "key25": "5zaPd9txhNQu4TnvuqYZdiB5MmYNNxGP23wpLrZvQ4eEdxFA81TnftSTJ7p6fUkTrnCrvbdYHihRAbTR4ra5agrf",
  "key26": "2J1sGvnJcfFmQ7XT3SAbKu3nmTB5EZJtmbDSvGRXabrWssDJT3YcDhxiVYfEwHZhRit8AYEQE51ZQU2bJ6xCKiKm",
  "key27": "5sPqDiTjzq2hWmGYPRXc5XvD5efrFZ8SZyXQQQzNMBrbRuEATGAZeUWRtDGambHBnwtq2YQUjgbiH7k5owxdyXhm",
  "key28": "4V4LwGs4G94pgTcJ3i4MgMciCeVB9EQ62ENN2pN6Uc7rxBPFbVQkCWHWoDhbK7mwSH9Pxg37taMcA2QpSNtAKVW9",
  "key29": "3SZ1HDrSaCwTZzGYxq1CEHYzNTiTFj4rxBQ9LZRriaUeHHRRd5BEgdmwQ1jL4HABVA9VEbL28gPRNFyssmooRA25",
  "key30": "2vLgk3cWhZhW2EXTSNk6RnEjznmq3PEbKvX8ewRRhydioxvxx5S8nMySsDw5kWKGABwosjzgV1FeAQnkBTRWgUUq",
  "key31": "5TonztHYtnQt4DhqE9CP6huuqHxJdTFMnENS6E9VUuPyrYRD6KtWCXwV9rVxBeGigqrxDrHmxy4T7pw6aujGS9Qb",
  "key32": "4TucZgAPUfaykT85NZ4gdSzHLg6mzLJwTRFSX6XLQS4JicZbMmkrczVirtCW8qdAMAr7pbsT32Q37EE1FGNrDhPn",
  "key33": "5LwLzqsVau67xtNwvFcsKpYF4pEmxMBpYk1nPxqFVvsNNmBMehfaAXp1vteJKtCY26Rvbf4hd9N2FgZPMoYCCnoi",
  "key34": "7objRsw2g67r9EF91k1v32U3AcAfNGDF25NtTMMHBeASsv5MTBbuyKdseB64w2pbaeaLu3yudgfeN5EZjLD5R9Y",
  "key35": "3eenqNZYfKe4CurkEo1yrP1Tw7gj9iEQg93R7dj5hGENRmAzXP9v9yrhQhkCR6wATpcd6TwXVT6ho265rz8X43U8",
  "key36": "2CYxWRkkdMoQNihQPPzmzr1hHBJYkHQTYvkDZAAi7SD4pbE7QVdgMJB7Dnm78syh8h3tww8YAEfWHhu8JxgRBNp1",
  "key37": "5SLPR5ZodADjSaf8voJwSaVpSjvV4mFHYRS7p6XRunyjSKVYnurAvhYWEZfEUyHcYSYVs3yNgLzq4gm1MzUeor7f",
  "key38": "5A9TEF2RJE5nqMr8wp2cruTGqukBStKaHFnD9h8tNUAgP1roxwVkedYyCMCoQASiHfUutAghn3DYNLPos1gueJuT",
  "key39": "5fiD7yJ5Pj12eUtxWbnqDkS5JJYHSbYKYSAZMZW1HTVbAVnum3ttbQJVaZDc9PywmdQjR5xRoF5zVk5wAytKCPZ9",
  "key40": "M1ZrupPbGpQaobQUdgGvgJ1RuQmwUA48YdFXpGXJ7LpPWW6kqyB6SQZD2DFGchuaAY3eQhUFdyeGf43vyDyG1ts",
  "key41": "2GomSbrU6JsZdYHGhff2jrLUobJfsAusGSHqcgFijdQVw6WUrZFKtDowkcXaJrs8m7Whe3k9CXW1p3b4X6tLn5LS",
  "key42": "2YKPhyjmUXKXaubuvBLbeMeWN2YGsmfYwy3rS68sQNAx83cZ9YVDwHPJzxbb2fhSbGA7ZxU47cnR3hkrDw9FZsMw",
  "key43": "bBuoxreDywdTBuBhtpaC7Pis1cwNyjRinHaWD5SVF1wS3u6N7SDrdQsCR22Yh6fRRiG9Bf93CoGaLvNHMveKMb2",
  "key44": "SyavvEPYD3YDfuNdu19CwtFBpXP2LMMXjSyEyGeTQCTch5AKpS2BhUGrTSJpxbNe8HrMoFC7cHXTxTYEe1219uC",
  "key45": "nERtb7nhKvDSoxcWeHsnx8TUPcVoRSA2TBAzGWjy9LbF7GWQPHuTYwB51JStQgAMbvSbzDUoAi5ytRkstyvsb8Y"
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
