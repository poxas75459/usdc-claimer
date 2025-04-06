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
    "fVqwkaASYzsuYq1z1Lam611fpvbQHesQTqjy2ggyfQEowFLcyZkqtfHtVb6GRPaDT8BmvxEYFCr5UUjqQ8Ty2gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AnTHsBwPhDi2rKEGEz5mLuWAdgqDd4bXBQgKxCiFWqu3VqdNXktGE65EGLEZ7BBPpD3P323QN98h9TXFkgyCnbU",
  "key1": "51mTms3J6RoxUPdKwbHMCmVWcwdyo9NK7zWjggiPyzndWiKCB6TRFqPZuEKzGPYKHJnGNUW7nq4mthovSbBRiWk",
  "key2": "R6kVjfHtKok2zheqnPzrbY3fYLDeewy6KrXrxsaHbNYR1QYAbXF4V6nJLqAwGAPNR7FFCfMyQLYUiEswgsDGjBd",
  "key3": "3r6EnBDyGNxSH3QJAex9psM3hsaBWDmh7Ex6mGJLFv8Fr1XEjf3t8MpVB54G7ezhtRK1dQrViydaJZ9DYPY2HwZd",
  "key4": "3PcEp22HC55yrkica2uPX1drGKHaCn1SvYkfAXrKeUGcmk8C7xL58p36HvguPbGgPLmEh3vrnABRhkEyTSqLr4uj",
  "key5": "ByjMwdu8dCAXUmfGQnXTWw9L5ezdzAbnqNqS83wKn2c3VeWx1o9CTa4KiEVcJNR9rgb6xn7FjRuiXTF5teMzkBp",
  "key6": "DzPTkz7oDpknPqPk5CSsxP4dC8cdmQ8ZHR4KRX39HQYJ3gzfpYYmyPXW1TGP4ohAz2AGWufoCSLwi9m1CfCaMeU",
  "key7": "2Q1LB84iZpnwRJ126gtvmsLUmRGRVj1xLtKXCxkvjERzJeAEuczFAvJ2VFoZfAZxSNimEcBZYQz8HLBUkqny7T4V",
  "key8": "rDRUVDKq6NhEASfASsFxVgCNr1es3BSTXa3QJCEmzevscyUxVnc78CTAmy3J7SMzgipkMS9MMtXeKHyFabzCaeH",
  "key9": "2Fg8Sd874AducFMsWVs3R76afZzgYd5kvk8LjhknmtwR2p2s3GrFdnUJsMvVx4sS3tim9f9aGQcsPJfdSZZ23TxQ",
  "key10": "4rAjFy4knSamJxQdKiLmCBUGgBdaRdDnqUcVmoq3ZontPX4mVFWF7Tmw3hqVg5cwpCPBXLJLgApukYnXc5Mj2vF8",
  "key11": "64u1WnCAV35aJsL9CwqxpH6KtcMUhXYHU4aqHnDcKsRLb66gjbC28icteuqkbXrtytdp9NsCncpFWoL86mQedsyF",
  "key12": "3q1KZyHY7p1XqkYFR7SboxJJ4ht7wyYvoMuEjZa6DoLN2vJY9WCbndqZVznrc6huG8HxaHuDw1tSkBRQNKDU9eHF",
  "key13": "4EzvKSevSKd1Ahk3f3z6yoNWmrWxwyYfMCPyLZLEMoB8wp2o6mTnE2eNLtHGc1octyNKyBX3qzhcmrs7YCY3t66g",
  "key14": "TzM6fPKhCHa772HKo4cSaXo5tXtyEwaLDj8vz9CaEARVgTFSeqab8r7KPQmwt8pxxzN5WmVm5gB59sDBHuzqw4W",
  "key15": "g1z8K62WxBV6geRqpejgLktG73e5zhZxdULRUphkZ3v4WhLchE5YegLk3u3w7AMqz7gvhHmCsnWVketw9nvr2wv",
  "key16": "3ux67TuonTLeNZwE8B2rtxf6348wmvyyTo841kZxZNZ8AHzJkXcTwDBjescJD5wxUQEd3uVLYHJvign11XhHHrqC",
  "key17": "3xzSqnQ7hBN91P44oqKcZyPJouat434isL3GsH1zZNomQdXuNhK89vs39SWYnE4gPQPFDweqqMaPaUx8e2tMD2tP",
  "key18": "3UjR1M6RojxykWwMG8q98jUHApT4KETM56oajdziT4UivmXZcDpuacUv5YNTRcrSkJPDBuTfDyB1aV3ag2VAZvrQ",
  "key19": "5kVpJUCA5DwgEGaziZ5FyFRyoehZrMWsSqBia3DUBCCm7Ke4Nr6hRDUHkLvJDSQrEdQyPb4HQwN2H3jFMngTj9b8",
  "key20": "k4t8cdBy2LzRNcvvmjdYhhVYt3oanfBV29YbdpbXHZgkoEqW9f79ENgvEn2dv2JwzEfu8CW5BexDKG3iXWfsZCC",
  "key21": "4Ak6YDAP4FUwGa5CHFE2a8UTzLrbYt8KirHP4rXYtv3yo33LDtS3BgsFXVHNdehGzjML1PoteZAERAGLg5Sc44mv",
  "key22": "2tG3CBEti9BEB57u5Y5UP7ewUWy36xYrkvXsA8r3nY94ZEYus9D3qd1dGTkhm8d98xnWxfqohqtGU6q3qMeii8cn",
  "key23": "2s3zUrV2z5f7JUqWJUNMHC8rdm4cJ3R2FV3sChgghepz5ye1RmfXH5QaMkGHKbjkfmsjRo6BWrAqxPvJ7XecmfBf",
  "key24": "3YhbAtZxEyMvz64GBN5ybPjQk1KmuPU3qn1FzLyWgjdbyKT3zhTo5Zw6VK9eK1v4F9vT83MB5TVczdaN7FNzKoZ4",
  "key25": "3EFU7bGmPD9VxeStj3egwRXQjAyNKgZCJzUbqR46CtsD3tEdLE8yti3cFiFBsXUeUusuU7ooNiV8gnpL5YZ5JCUy",
  "key26": "HVaYxiLmPq8nnMAHrrmJXW74JrSAnxbAZVJLfVh8KEgzPFbJfam9JouvcU1g9KVYtQUKi9tkKS7aunFZo889BQF",
  "key27": "3q5G2mF2c7ovajnj43NaTzfrdz5MTwuSU1FEq4MFVXdGNq9y2yKW7yDCguBiroRe1pChoEGufieBmUJCFesBHErc",
  "key28": "MwLdahVxncSYk4cDhtHESBexHX9XZSXTEbFKX4UpZdd1oKfNGsAUVpEn9D2Y6p2t5NY4ynwKFgknZfxVE8SW2k3",
  "key29": "37Keuz8NPwddgyjaNnqBB7uj7nst6xXq8hMSa268CTExSNYZvGUR3s9CZtuAGxMKgrwYUruuSmgnZaCxwyLEoX5j",
  "key30": "3c9vMdUAPnT6REmFJRCnVXysmv5W6K6yG2F4vQssD5RjhufdsPoPDtfFyPRcKNpdPUqtDaUtZaqNV4KJkACmfLoB",
  "key31": "5kScXMNFZupUcucNkeFjnXYSsxF4UEH9ooCMgfgtyZkX5jngzXwvqw96P3jgcjcbayv6wBiMtDJYtzFKiKykcPAY",
  "key32": "5h9FE37oMDUTacddqUd6fmD56s5yr6rQnnMi2fGdW9HALdWKJQ6UK5JNK25HbmzH4r3zNC7KNUBoUzHUSvaS91XE"
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
