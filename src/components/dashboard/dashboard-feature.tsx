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
    "3ZgrpeknWZicYFe13PSFTFqdVxvPWgSHgbphUsHuiqDipgR1wi9CFuiZf98wY9xnRhJEp45Gd3F9aAtgacdckBUu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37f6DxmeosgqWv3gRyFeGe4vpZmJSknyAKSBb7wM5YY4jKhok3dYKtidYFikz5KY1s3RchSr3TpBMDrzpbCs5kMH",
  "key1": "3N5fUhR9Fz8P5UETnxdPFJmXcojcb6TKTBZvo9UxCYRQZSf1z15XgGETT59qBtDFEbPKuMYk5HhzyBmaWF4cAK8y",
  "key2": "2k2o4cd3a9Gw73yJSFeg9zC4EQPETceZWb3LSYKQRpEfNNvhBiSrefb94VWYvR4NEM9Sdd8gWtPrMFc9iM64DSbr",
  "key3": "3zhp9oU72Coc3LsEjjxpiLwf21ugH4hThTk73C2hrhicWfWwdn85Hf61Y6Ex5ugfxhoHCJ2DcGtfC7aUBVyTNfME",
  "key4": "5BT3n3vg7SQ4Ce1gwPwefkTfXFMVdcFtEGrVJHJfvNsk53dr2PPitMFJHHpPso4FU8YKgpw1dDbGt9h79EPCMasn",
  "key5": "4tNVyGhVGbCbAAHt7NkKx3eyf6me5DK334dcYJkKPba7GaNco9NgV26thXN3ajqoHhg9zp8ZbyyjbMb9tjebSyQA",
  "key6": "5y6fdSwCKvQhuCQRSoWUJe69HVTzs7p9Xk79ZG4ie2pXcWRZEA5gCZKuP1VK24mZFLrywJ3SWmUds5EiTnRm1D5t",
  "key7": "5nMkN4fzwspeKrCE3Ji3F7eUrEaWNJcGUi6QycDN1qgFdSnEQuS6Y7DizuHxMN6SuhPUuwiMmCNzjkGQEK9DgpEK",
  "key8": "3kipQYUHR5td7Ho6QMkavtzPM7YRduCP7zjWKm6v2qHK3jimDSpgBnAbQBiqaMxGyTM5RA6WwH4WstCtEEngYVh7",
  "key9": "4rnRCjKL133LF4suqYz4yCptUF7M4VdbuWxWhr13UsgUKFa9RjXRUkWU4if5w4MopJGK5z8WeXkjWV7QaZXUr1L5",
  "key10": "64FTuLpkj84vSxV2Nxdw6x3d6ktN8zDU48kTQeAAifG8vmXt8kZt1J8VvqfMPwZbVYrRoyKAD4MtyPTAetrn98XL",
  "key11": "22C2aqKV7Rtdx5KEL5Qr6c4N11btMcEryYv3o3YuRYH5noeQrT6NW6jUpi7g3fWoCyRidQJqDpU4YYFjAdp4jHC7",
  "key12": "4jkgU2VHg2HNQAXXFif34LvQQqwKhu5ToGABUVXAFRKLJrpbCbuCm41c4NgMNwq1PrbkqPv3HkekzcGN6dGiN1wy",
  "key13": "2QFpoYaP6id39qm7bwvDHVDAaKXAqja4G2KrZb25SiGbW2sZDxiXquaw6tnnD1n9s7F9H6HnDV9TwmwrBkYvf866",
  "key14": "4CehxmyVmyaP5tohXmCBGuYqDyYsztUxeb1sME4vfzPwvmCgDuMmyegyGtqcZbBd3VSC1ndAwg7uXchJG1Ar1FHx",
  "key15": "3HZvZJbqNgJBxR9Z6njbyf3iF6nY8DzjSo5bxUAzb3UcgN6KZGW1hcKqjEbAVLSpvArGnJrny9NEhpHASUaJ8pV3",
  "key16": "m2ZqhMUWxR4vf6anTMoDpLMfZtBp7Z4sTggSqfN3QWiYHuRu3WBfWjcrMtB5zrk8dqdTqPsTai9ewtwm3SKcDWR",
  "key17": "5ce3nQEN63rSY2eqKnxdUL9toEYEbXayzSantuf4vZytK2w82xZNCezbqERpY87jXz4ucE9NxnZxaW5h5SW8HgS4",
  "key18": "3UQsE5sWDFRW6s1aornWyAzkFpN5JCLDBpiXcf6bPFRALKGLKtft3N2ymp7H5brXjXXsNBThum7yv4orzbbaMB3m",
  "key19": "bHhsyiZyycNceGw744LtznuTzwnDVZn1sxZgWHjdT5dfrD58xQtFZygVpHQPv2dv5jWpobAX2BByebuuhGypnst",
  "key20": "67XfbquJiafdKfBqDXfgCPspK9UPP7BNsT2C6WsMGhLabo4mh4BEG7sYpZo37aNTKVw6MMDsT91x7KLGTHF6HV2W",
  "key21": "66QvgwgsLR44KZHqXUgqNYBNFSyiUqEduPRsChDpJkvnpqPdi5Cry7CgZ642aHC6xBAsLXsuA3xUYYU6jbrUYJA2",
  "key22": "3cogwWEGH4YUNkfX9GYPX6hUoty8feyS8Zf7R9r2ovVS8VpvDQT8qdeodhTTmALiWjzFufrDpAk4bZCb4gz9WQhv",
  "key23": "jycHhxXVbyXDqZRNyfGR1YSNScJpBPh5nJnvw5nj7iVU66d3pkp3QyEgKCgP52rpLeenBu8qtCvt1Pz5pHHvQfn",
  "key24": "u5bK9QRBPr8xNbQzjP22kT9FnZjCDYqDYh18ES9v7G1P1yi7MikJd472b5UtCHGjMZxyarCvs45X1r9RQyxMcdq",
  "key25": "2yps5nQMBFFNiME6j6T3EYNQQgKTTVTxW45rCPbi5M1BsU7eEDdt4KvpExscfvAb2B3eXyBVXVSHahKdbkmRgqA8",
  "key26": "4AAHRYmnXd7TWBYfjbQ5oeBDUFQ7zVFQ5zcabQUmKhUytjPGgS8qaZKYUH4EJbD6ZjYEPtgC4BcE3fGY3MftvVdN",
  "key27": "4pRsN5MEHv1pdZBvuxGzDfQwmxkgT26RMZBaXGUdvWietYfKk24mQwky9ESn38GK619NHeXK4ndCMUpxsVUEvgTU",
  "key28": "QAb9MSMcxb5oxjj4rqiiPodzjYRUDQtNTYcZiTW3wWpHg7RE1QQR2ii677w5uxQ4YRToyngcQw5BBnzJ6nsBUtv",
  "key29": "4ZbbfgjGx8qc9fcagpzX7dgpfZNdA3pkZTkBuM8aAyY93KLVeKCviSxggcyqAwQGzMpRsnCgEHcJk572cNdDSWT4",
  "key30": "27NiyfJXZuPnWeuxLJexzsopnYY1ML2SrnDty1q74LnFEPskb8DfRYi9QRZL6a8rRpjyjZNzJyt2vjq7CqfYDs44",
  "key31": "5xzph1iVZem5TC1dDKdUx4MiJT7iMLBK3LQcUcpFr6Bgm9tQJdBeG9vGRqnHo6jcGMsN8ggM6VcbQpCaFBmLNCon",
  "key32": "58kpPCyqVwzNnmThjNrUHDrkiSv5uYgaBzzCebqFixDyFHjRyGdnWqGSJ9aoT93c2nLNwmobLCRfCynvZBsVEHf8",
  "key33": "45Va2WafxLbDKSqkAaqPEouqmL9T1vnWNPeaxguuZ4kgibNZSD729knpkgQikpqXSXFDGXM9TFqMRpvj8ZEubSsV",
  "key34": "3LYhSbJefE8UcvKvhuJhZX2zJgh2vB2AbmU9f95tzApuBw7xZ6pNDXkTKJAcW4vScBSXp5Ay4V26kjPRXxGDNL7",
  "key35": "2WAJBcqPxt8VatqiVAVSXPzyEjxpCCGj94rZSEcd7t4kgm3f1FSaBAYQKwN1i9LXQEgm6826S3w43iWkWn19oXzc",
  "key36": "KAvovjW9sFDSqxMwCFtCu1Zwdou3QxrHq8L8ZEsCNhYrGJdhaCNo65FykFmjNnnZXcvNpaazwDqQqdgm6VxKdPd",
  "key37": "3snnkNzAEuUNkhyZcQn8meiyvLuApGeUgpuEYzGdMcDWByUZGYv7dYZiHBf4VQTTqeQ3DzZJHtLhoskHbWnFBiji",
  "key38": "3n3F22tALKF3ZwStEdof9mjt5iJsTfQeqmtERZUPVt8fD6FWqW7VM2hJGvTMcuKfMuDrP4rgTZSJRxVSspxnHCbv",
  "key39": "4X26LUPjXpe2YYoXzSNBCEmFWA53NTRejfKMPX1shykSbvFG8ruYcVjaLnMZ5MvtAsuU6rqTmsmbAG4WZMPpFREA",
  "key40": "5sAfBX5qxc433ckh1E3aKb6HnisSzoyAEMJkfWVDDKCfWWEkKjg2spW8zggnR5scZeu4R5KUiHcUW4LgJSTSmVJR",
  "key41": "5BUMA6KDGYe8FEzVW5eGsbBQzHuKpusPkeeevoGpPijtqYVa6SUoy9NzvckT2WhNgHmjpnKy4sv4aZA1iMJHhtii",
  "key42": "3xEp65gP45L8Hjyf9tQ94Leh7PTPBekEr4Sxw2aRwZX886PgkoRcvMVQXBzT5v6YnZYe9hZzMQFeiSVCVhne3fk6",
  "key43": "3KyoMUtkXDFifUGriNzHseW5MBbeWaSe8eFbTLgDmwDRJj399G634pAo3S1ecSn5yjFjSxTPMYr6W7jGFvr15WxX",
  "key44": "49mBmbxShyihJqoTsvELKGAuiYNJdKVAbSBQ4H6cxMF3diUCStSdeDhWC2TU6tpJxo9K676QgppgQvLkwF5JoeBc",
  "key45": "3ahdYTE9hJWJVzBo5cgqrtUVHYyVsxVeNmsXzmGRCDdh4WDCXSm48rjYTRYLSeSvnqr96qXb8Nz1VpSZBTV4oxsi",
  "key46": "wsRHnBP48WcR5KGYWv4bjpQkgmcQeF7j3sCxu9gvkaX5QkP41j62yu3jeinxqDAt6fN5uKbXefsbiVGmHogymvY",
  "key47": "3f9ptVCWrbcMt8Px5fwSbejDRg1XPtsKbgE7uTuGsr29BTZw5Cowb88XoLAJyKp56eTRfCS9CaYa9MaKivkb7G6z",
  "key48": "3WTS8RgjRdA1e9HQayYfE8MYUia1GvfmGiJKt5QdiN4P6bk8JNQ9ZFdMn4A9cZ3n1dJ7bXo75TwxCfVtBFQW1Cdx"
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
