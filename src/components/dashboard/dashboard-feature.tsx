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
    "5Hz1tG6uyeZiPDaDDaMRadMJG61TJZAzZHXcB3bAkM9uewD5d36GLv6RV6wbz4S75VfyNMCqHjhjGLxUtAQdfYLG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vdq7z56XwUUJWhhxC83BjFhFwRuy8E4BC4NeNZL5PzZPoudUxPCWYPG4Ruk2sj4gMi2XDG2xNxqfMEWbwUeZDkM",
  "key1": "veW9zhQimFCDvPEucNv894HyarbHcjGQVVnfoufxo6xBCNXHAA5JMd2CU8SxcyHp3eSghw9u4iF9zMa5uY5rQDJ",
  "key2": "3tQU6PaWRw8vjSZarAarFBKSer7M2sw5JQt3MDHDB2CPr7ZFknsTg5H3VJSqA4fx31gS8g7DHKhL6oNfpzgqnHPY",
  "key3": "5qEYsahjW5fJGxMaRZSbKoYrtGMYoYPpcTzEdr4kmPDoZQ1j3GY1ECEaaTGFoAcFsF3bZZBMfFc2RhDz7ai6FkWD",
  "key4": "59bujMgkG1LGVmrj4Z7TXvrDqithaim3rNBZ8R3ZTt3nM9TxQzETrkeP91dGA4kGf3MfZXYNUZvDf3HGHbDqaY49",
  "key5": "ifub4L3hYJyDXV9YDYynZYGsiCJaa4xVojLnZRPeoLY4STd1BaFRvMUWXVhsU9xd8GZENw5DknuVgVZJQQDnnFX",
  "key6": "4amB67gRdw3do7hrSL5SmgaELqdP1yT1YtzkDxVJv7mJnAyjGd1raUsK5fefvGLX5eigFaRNmPdqPrmYMFVnZDG1",
  "key7": "5g2U7FudrhPj1YsuMqBNJMJiEhT6917Ro1eKWEqoyJHoe13Lo2VhshiiWjxcywpdUkiHu8pJ53vpgpyDGdQ4zorS",
  "key8": "4jW4L77EcC5xsg8XF1suhaV4pcLdqoTzmcFbCb7hLQo7BpH7eocde6N4ANA8JSxQmAQSTsXxZy2zFeJS3TmJs9zC",
  "key9": "4UX6hTQggGQbhPKjuqCLihnU6HqMih9EiAAKvVgbDiwgcmthuCcgqxVKoTM2wjU6SXcqfNgTHPu4KC172E9rAfrx",
  "key10": "3uG9PGdwrJHeNPnVhjadgxU4mRUoKjkz9cLoSCnbnTWsj24hfERs1pTaM9NJkgNLEt5T7Ab9kqxgnuM8kQkrbd3H",
  "key11": "4NU7mUk7kq9JD38fwgjmQ15WMHoeKAz2As3octdYDA5P1dSRyZtBrrRRXkx7ZMTj2NMYxHafXF6xbWgRR3H9CWTK",
  "key12": "4o5jDpuzwNvvRFvz9rG3BpGz94LuHeMJNGbGByxoafJKykyykxJaeAmQC6GbnamrPnWrFSNjsoagHZqwhiYHqASD",
  "key13": "UfFfbeBem9sJVFex27QANDyuRa1cgYakujHLoRT9CU8nTrSsxbZKGMbYi4JG7FfyrTZHZ6gGtriLCckC3SaFuxd",
  "key14": "5kC5zi6krn9aNqdZiJxUJhFQtFLYfyFJK7R7Qpsjnr4Dwnrm8BRoifqoQGKUoRjooFHXLJxdYnEMVqJCV47wtZNa",
  "key15": "2UYaU9HJboA1jZx2JZiGTwu2JJeyCN3CdRvbrwGh9S7s2uN8aUbMxHQdbDZDciq6YErSvnoqFJjGFpcLah4BNca1",
  "key16": "3r8ZyefWK9ouGGQ4TXN7WMidyQawh6qbK3mvvgvgE18Kq7YwGy7ZaAeeYG2M7Uj1Xt9VDD8pwcK5W5W53hGfFhw3",
  "key17": "4aCTbb42jt1cnLziP7Zhh7b1XXbe2omUh1Eo3WT138pKH5keFoX4nUJLiyo3QhJFHtwxDJ9EJNnNsnnVDexVFLNx",
  "key18": "2GnbwS7NXgWzoSgGdV2zHhDJmt4jknnaj7aAUKoJ3LXAXykr48VBG5ogQVX8b5aR4t7tkfXiTzceMi1GMiRNAmdb",
  "key19": "5HvQwRDy8rRGbVUFYMgBXT4JXYTF67FMU9aes4sFtN99aJVcf4xTjjHLzx86yoR9ALc8X84qCY69QCSqmEPAQBA2",
  "key20": "3KiuCLZu8MsPassiaUsLTYoHNBLnXnZCrMUp6bMvEHV54WDZcFQfq1qcT9Qtuz8jiWESMSqnmF7MPW3HGDcTr4DH",
  "key21": "5PZ2bGBvLEByJ5DSAQtWttbfXuw3GxDDwQLFmkeppQv8VFY9v5H1cjXwJJBpFhdENaugNLyiKpum7pzA4HB6w26s",
  "key22": "332asqb3br8yGtBRRBLFnHiaNJ2XmwNLbPrsfu2nKdMP6MSA1RbMVDx6kkMqVwxzdDQazgeG2XLVaV7nZvZSiisw",
  "key23": "3M1J7MGTGS3pzCgEYSmRBm9iQzwMUJw9FDUByrmCQexuqZHWziVfmM2Vx9axtCimddEPGwLSETkAWhyQdB1Hks9J",
  "key24": "TySz4GaXKfGPFusCyyYug5PaWoPceqafMcePc6N5PFVQLxFBQYRg6Sjs47uZoqdR7yPjRPDGk9QPuZjNw4LCiZw"
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
