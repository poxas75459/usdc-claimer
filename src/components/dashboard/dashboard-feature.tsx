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
    "51Bk5yWmbn9CZjCsRzaEx7jktcKJNjp6iwYmq8BfvRLeHpsZXzzvX7QVwAdPWjAF6H65TeTcMhUm1G89pGc3Chzs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ScG5poXTM5aHrxTNuXrSMFx5yHjDzHBVgnXkaNgYAiEqNLUTHTvzj3bK2fG91grfNk7N5zPKctkU4EhiVHJhoT",
  "key1": "2QWy26TYewNUEs3tjw74iuHH8DRZhrcZAZRuC695UC7EW7WgPn4p6njgyHEXnwNkJHE6FTxrAuamhpJEuodmCkH1",
  "key2": "2xcpUwvM9W3o29nEveRpg8MrSnsm6jk4SJSPu1Q4hZYY5AF5ywMQSdyokhDJKGKLFQgpqrhoMcNyvsCPgBJHd8Eo",
  "key3": "2wJTzLSWxGyZuca3W5fHQ8oTjsWkC8cuVxBBezvmGK8r8xH4veL5rzBA4SsgTvKgUsc2Zxd6zXRcuB8sK7runjvz",
  "key4": "4BfRrwGddGRj9NBDHRjYyVyPN9iVWQ3qswxeemF6maRDrrjhhxibDKk43C8sbSufgzvLn5tHsyWaYKYBSAfUthA6",
  "key5": "BJAnr42q9bxYimG3EdVx9wZpX1JP412gUdREYeoPPFM4EmSFqyLzGjhYQWpgA9zbi3nxNLHR1m3abxAP44a6fgm",
  "key6": "5xdWLeacECADXQYKEGFa4LAiDtUjn3475ikjCXsp7JHnB8jB9qRLsDGu937P3mJvWzkZNzVTYRZSfj7v5kNBHJu3",
  "key7": "4E2g2WHzemfjFnxi7p7nrhehRPVoynH9GA1rVoV59MDkgw8eRbEnBCRPQdd1r6B8i9TuvfHzpCTVoG8pvPuzCzWJ",
  "key8": "3mHr52ZQT2dBhyarFi8paKLfieJnqKRRKEv8bmyip9Cgps79SQnksZ2f1GKyt1Y88Qw6uphR6dG88DuqhKiZxmsz",
  "key9": "65fe93VjocbQEH5insGoB8bP1s3fwiq3eoTE7XawR9vMnDya8maK1v3Z4WdZxF42ziunP9fXG4cgQR7V777BhEfR",
  "key10": "2pbmTmenjBY66cdVrj8eGgfKAyaKrNmpdWXgh648HnpUNLgNFhXLy6BU6cb8AaYMtBwTL1V6fYKPPQPdTEPorYDW",
  "key11": "5Zex2MYw4yMVfZe9BCJR2nZtPLFCNoHycfjVFmTq3JsUUGxArNCio5uNub3PoYhSqXAmnMB1CxCCeCLuwdkqmVWQ",
  "key12": "DLo9mtD5K6hNDwBq3FvoUdyqxUeQBikRwNSB3kvzu3xaLa4DmXsM5QhsgbGgxRubRyVw4ZzRg9ctVfFC99iGWEn",
  "key13": "5msWnmVL6SpAM6gNKvXP1GiCS9v3vW276TXbCdrRJq3twyRR4bN1p8JqFDwfmHdH9wGFmTaB73DBoQUesgr9cCeq",
  "key14": "44G9pcf5dZAfQDKqorX4yh1W5bosBvVDqcTYNN2PnpRi7PAERrJzkK7BtW883DEnpbycwpt3wvU7yLDvXZKFewep",
  "key15": "2V7bgpphPNCmy7X9m2dYhh5SNmsfcxfSAaEe4rU8qdJ3DJLSbsbeUhFZnXRoTsro2JmhCKfA9EXTS3wDqPx5emAr",
  "key16": "39VnzWWtNGgruVkYULCazWhDb2LpSu7fQZrKSjQ1UBJMGQQAgeMEYdQ1J1Xa6fUm8dy195LJG2xPXsio5EnPk4QK",
  "key17": "57HvWt2XJ2mj1hPyxXT42Eb5G1Dz9HcDWEytpPW4MLix24fRBTGSaikxqvXsvjWAc4XhrYqZjm3BQeTQmcVaCNyG",
  "key18": "3SRCxUZSFHYeP24zKFiHnFEF4g9EaBaG5fUfBxDPjKy8AFsjBVZpQpjvLZpUQaDSMhRsE9nQGeCCeDcXHJ4tgmB3",
  "key19": "2fma5GUSrKn6v1dAWT7aMB7QVPbCu2aMeFyjC8CaxRBGHP6V5N5NtHxdDjL5nXR433GZEJ5eU1AEnjxamYysTFrN",
  "key20": "2xqYMZy8SoWb4asdNGKFm7LfQ8c6VEUZsJ3VgjqvYdeAxQgtVG77ejDS4Kvwc8dCcVqThLxrXSwhRzZqiRz3jzwW",
  "key21": "28dHbB6GYScQqVF33YnRq7XbY99GKKk7NWr2fTWPHaE6vHx99EiRsbjjDw1D8qR42GQbarnD9vAMPwJstRZW3V4S",
  "key22": "2iNoo9VouZV8y8JZG4Hhq989mGCwF3bSr7d38GgaQQiiWWVPhJn7sbv4NYkE8CXdmQ6ttEbws3Br3s2S6zQh3fxP",
  "key23": "2fFtGTgfuJF2XRdcFJSSsjAm8bd7GcT1JA5pDWmtXJPYe9vjVKr1y2Wz6dbadz9GZwQ5ys1ZpN14JR4xjzaB7NYP",
  "key24": "61ZbRarDQ4r6uKg5GhEu5aPS99uyXYwPn8LyE3VoNpgXvs6WBd3eAS7bFXgnF9sjnikqhd815uWBszhUC8XpNHZ4",
  "key25": "5LDrMvA4UoC6Hq6LwsY6fRu7nnfTmaHmhZTiynZsA3rw5PYPnVsfEMjZ55TKQB97qBbiv4PvQp1THRDLTss6DUWi",
  "key26": "66gBG36BasQ8nsBepKdgEBS1AfP6hQdbFxhzUwYn8yxyAEZC3fKDaG3PBkU6e2F8RjjbJJCFDRBiDY9Pn9JmAkxZ",
  "key27": "3Va5EAMZxvDr2jLgZRTeU8TVGzXN9ph9JbXxfF17wGP7kZighjVLwpmJvun32bBrQFCrqhTHEavs9jpZMXkduh77",
  "key28": "2g47hwXcLYM4mStnifFLrRDRgoC2h38KPi3N2ry6As4F8ubwAFhDW68RjxL7tkbPXcoN4JEXJEbN4iDz7kiUYMA4",
  "key29": "4yoXQqpJfswuqK31FogPDEtYcXQFQyLpdTG4Ly2J3TAgiHReBjL9iR1XfUEN9GtikLPR8Ru1rDN7fCMgU4MyPjdj",
  "key30": "Q26VryMAzQiMysDUWNGBjA7iVswdhM9c25gj2b4QyHM9sPTebcXvePzGgkRnKRn4HQDopEvYxLdtqkca163dfWT",
  "key31": "5ctCwTUwnq7RFt9jtW5i3Xu9Yvc8wWvKTVXrJoKdBsC7d37hgjQPYx7GWEW1RqpF4d77gJu6NnRZ89AmPYmfZeks",
  "key32": "38sDeeTdeuk4Hboa35RvY5P4iz2qPo4zyRVJ4NApkdJCs7kmAG87LnevUtQS4dFQ8D8zPzpQTcjjUJ6NiUybsxCZ",
  "key33": "5FsLLtkz8nbigan3tB1gdgerZaoR6rQFNwMvgJyNMaQS9znpwExryUCNvpZjTBtb6vXAS1iBUZrAVUi2V6jG5ijG",
  "key34": "3FmqLFpAjGw776GxCz7g8qjMbRwCrea4MyUFUo7xxHKN1mm4p4QSJwSRdMRr1YAJSMtMXnTeEuBcZd8EGYgzPrzg"
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
