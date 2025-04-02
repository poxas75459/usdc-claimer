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
    "2t2YmZBB2svK4w5TCErUinYRRSbm7K4rwoXwYUWXDFxKV4Q74zBrEAYPLbZdmqnFsBBKb6VuP6uoxi94GdBXL2Gj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WvVCRfci4zyMiFtRi6XvCZFWGKHofTTzYQzcf6zcqa2s2Xg5exm1gxZerJU1YdoU5mZybJ8PvS9sX9GvU7QVCCn",
  "key1": "2Kw4Pdy1PQtngtWuXdZU2sjdiYd2rfvGV6W9bxftMHnnkBo4ZghLsGbWYPWdxgHbRwdDRTxZP3rSPPYKAjYW4586",
  "key2": "JZxsV4x68mqB1ED64eBXEr7xx1L63rFv3FyTijGEUQtuqgRZRm1TUVdvf4ch3gR7cHe3VovhDSa9q3eoKtbffhL",
  "key3": "2VSBA7ikzon43LbEGkkV935WuQudibKKKeCDfQ1ovJ35qAjiZcjNqW4fPR7dFZHhw69zUtCZpBhSC9zKLZhLS6qe",
  "key4": "2Hxaq9uLc2hLRAwnNSpnLdRTFg9cTnsKRGVKh48nYBsta8tLpiPo8BrSiaf9CLT5Sa5WuawPoLmKfSwVQLtCGnMm",
  "key5": "5rspbjgFL13Rkka85CsxPX4VD1iazzdHSXNnnH2SzfktMJrRbatheSoGumyzbw6Y84N4sCaisQXw8nJxDv8xFvEb",
  "key6": "5545QNBsV2XhK4HCrLphh74ykMHKNisVAdgVz7K2muHDGrNjxCv1KJsGEY6ZbFHTXuxrgzzLAcsoqspXntiDVjY4",
  "key7": "AFQbBLkwgYF8gM9D8yJUp6RmBkRwC4xdHPJPTyEzxHSca67xqL9VPqZ4rwLnxQaHD75A9uLM1EF7xQEW2QkE1Eg",
  "key8": "5AAozemiRPNQYYjyWiYKoxVymmyAJX9qQuFSUJt7w9HJBUVxrCgJAL8874DbSenkgoZFwnrVPFZFQetK1Gefm7Cn",
  "key9": "3TL4ywLb6KbJVPQykVqyJzzTYDPBiCH6eg9ERzLdhqz4NMCvV72JjpafpZgbALyeLBiYbADM3eERqSxwcwGyY7WT",
  "key10": "2j6mTbqXBTXEY3bAEKEGkuXgSL6SdUjSGzZHWbPTi3Pmobar36EoMWf4JqerSDBpbpcyf1wGc5mFxJFnnoQQJJUz",
  "key11": "32kcF7F6eu14LBZzYi5CXGoaCnQQQteC65H2k9iGRWdgbXqDdgJk9SvjrMSpixLBxY9HxVNjipY2R8Zfir4E5uD7",
  "key12": "3WoDohS3bRbXeWZkL93mZ2p1kBjZcCCmdy6hATbkxCCW7uSpGdnWJuQzA2G6zPvDNFtS2jBtcu8TER4K1GU8bLAs",
  "key13": "qsAMkHGCcWNUKujRmMW2CuT5nSBzjTRca5CyMTfi85U1sWp6HBzWa457EfVG2ND9CUfgfdMJTDPwB6AGZgXS9k5",
  "key14": "5KtckvPpbZuSXs5hG1BKBfrAWTTAARheVxik97uGAmQ9TWDCdEHai72poi6D3UCy2sm6QBQDmp2dMSYfzS2FCkoq",
  "key15": "5zq8LMSGpXrjSd1XhiEogiQdsDveK1XfWi7AZVz4XeA2aJHKyUmWX12yczPpR9z8nBeNP9xLMoqw4cpqVrWxRNAb",
  "key16": "4TzB2AvSn2BkqrcVFbjBe5jfW2xgnmcK6emVkyxom8AdedDb6FJJ1N7F48r93PZ6FUYtiSVE2g1VJpi8iRsvP6aa",
  "key17": "5ygus4a1SgsEMYaLVhMFrdWYt43L5hN213kBZnYtBSz45LBnfzirXWZ84ivYHeyiQA7UteGbtPvkSUCEvqbyDssp",
  "key18": "eQFzc9iv5qB3UdbrQPPXPTgaKtKSo9FTfLAWmW1M8bVYDADFwqBFBDsCYJMvxCXS2USMYSuvMYAKat9V4Vsz4as",
  "key19": "4DnmZMKtibK7eFtcxgT3iy1Vjr2BrXaMN9nSSa3poarWsxkgzwB68cEuxtm1MGW789dahu2p8a6KF4MzYsuJSaqL",
  "key20": "2qrJAkALqqXnW6buCdj94V7PaM8AmW7kudwPDAUU4qYzEeB5dbjGxESogdx5WH7P8kiyKHmkQntSjVFib92VqVDR",
  "key21": "wm8QkYV5PUP539d98dUYShTuTukPFPmz8yXBj5dTbbd3YXTGzfbEEVU99yye1zZqRrRmwYCaAVYAyLoxZ5kaM89",
  "key22": "3nJv4659mhre4Y8RqH4EUqujCvXC4xVjRf94wz4yvfpf5amTaY34Vh3HHwk86TWtCesjxd4MttiwK6bdAGW7znQB",
  "key23": "27Sj8VHJGh44z2Gz8Lz5CdnQPrw3MFPsCUx5XxPWVxwX6mTEbTRwibEQocKhbiV3Sw8Q8QH7ooYJbB3KwLWw35uW",
  "key24": "3i2Pc2ryLW7MknHGDYZU71t7FTPkBMzg7AEZyWJFuTD6uKkV6BGnKPscxhbwko1zADMzTa5ioNbeAUw2zeQfX9Xe",
  "key25": "5NkUUhFhjxpmZT9j9veEPbCocSoHkhWD5fEjcF5WvBX7vwMdQXirdC2hDg8CDeLAMEZ4Lj31wV45Z8VtZMhUktfZ",
  "key26": "48mvC34UbSaBxk8LrimW43VhqJkJjzAjWRWkwyQCr4qDdgq7WJmBQoGxZp4D1fPKZWHri2sqvweBrSpvtsZfEVyT",
  "key27": "57HNh6nCBDzKvs3BLciGHZNS2QTJVYJNCG1UDFeymeYKKTruWv6oPKG3FwfLBceJwiUcwHkUY9RzXyf9aQVFABgT",
  "key28": "3K5h2aN2xNjdBPRUuNAwf8FAxsym4F2RNkDwbA7J5HuJZwkkKDhSFiUNYbkpj7EvSGg3m1uYvChfyRoWYu2FoLke",
  "key29": "45Gpyic8E8k1iL5eNVMLZspRDKrFuDz2CMLuY4nYNUHtrxKVPJksgzBg3KV1F8GeLzsGvtQshTVNfq5rfkTZpU1i",
  "key30": "4Jsw4VcXzwNSpk6VQjRmpZXf23Buxad6ywWaEVYd1UdH3rGhYCZjHpdTFHLHZkcYGjtyGcHZ9AFaeeDFr4nLA3an",
  "key31": "4vbrLud8oHt4FC7piZKRNT2rjChkWkSfyBpbKmjRSR9ZPqY87WjD1wZc7zKSWzdkcQ5p58nx8jQTxFJiXQs7pjka",
  "key32": "3ptEeeUD6GoXHQTrAezUAMLDqwQX7KewbZGWDGV2GgPk7tScrwVDgpVVB4EyhU3qZeurNGibzuMzufE8DsJi6TMr",
  "key33": "41G4TCuCTY1fbiMMaBYWGZJrJEnogR66KPwWq1jM7tL6wXfn2FYQc28ZiYeskKggCAsUuyFg72xGBpAypGaTDfxe",
  "key34": "4TXK7j4rGmVa7Z7HX31gpRCx1h5XJbEnz7uDFzZxVQmye4gDvfHsEj6wys6yJZDrYzE37a2JnD53iiBKthj1feo8",
  "key35": "4UJREwaWZQjPeRGf5GXvbgp2VHeetoYo2Tc2utbuiJhPsmfzyYN6kFyq3tHNsgrx3gTXj4dRXsxqH67cnxnCp9SR",
  "key36": "44RVVjqqWnAtNU5Yq1VRQmLDRzKzs8aB7yyVykmT9tbJyoAsFFaBp4ymZXjYsBPMH1wdtQY5dB7rkeymN2pJGcWV",
  "key37": "5nniBkUgeQWjccnsQY2udTCVpPpDtCb9aiL42Gf7yBwA4uvb6mdeuysJhSLAxhaJp2CsCyDRTtGD4zWhp9EUCYKM",
  "key38": "5SoeMpgPDVDhNCDUWBQsEfCdBtZsQxqzEs1xnU2fERnozDdVk2jx1STG7brEH6vrDMVQp8L6PTsFwmdbEmdZueLS",
  "key39": "5unXtXgGPT8rokWCFoSHcRhDNRVNMeLsmEPtah9gYojDyQRBnShHX8CwudetUJX9n8RDBU2ZTLk3LhzEVaFvfE1D",
  "key40": "38s1HzGRdtEURaRDhHLxtzpAvQ4jyVvM9cw4vL2tdePvV8ww289QfzvoDtXfmXjNco7xra6TiKofWxN39H5QXFym"
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
