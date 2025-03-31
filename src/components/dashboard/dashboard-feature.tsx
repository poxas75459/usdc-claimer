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
    "63DUcoEruzbfYkt3Y3rJBuy7V1jGa3ziUykw9e6kLzdFQBiHF3jUtG1JKCKycGidFGJLDwFHwqYs1A7C1q3eHBkn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FfY3ngTDgRSgaWeK8td4ACrThekjT5jBFvSr2s1RA8jFvjyfTxrNt52rZ8omExuJNVgrBH97CgwfmGjoAMEfS5y",
  "key1": "227QQsBdc7akRh4fabVtwENxdqf3KnpPCpgzjk5RPk6aB4syNdhjeD7ibt16boAwwyrGsCBENjt5g8p5ASYwn9du",
  "key2": "2xof726LDaWAoaUVFbFQGdu6uy4Dsty8EzMMZqV3nv7uHttendqy41VtqprNeVDVxmkymNWtPjHWpVyKwoWcabZJ",
  "key3": "4nbV5yVwhprikyDBxFEphMrb4QFdjWPceMMjvrSUAzaPzB9BvYSmgSp9SajKjidVuWiW4KWaCYnDvPhGbYaKqaGX",
  "key4": "3VCcGMyM2Gbd4ZXGAz2eFwEpaFGgG468wzgXkNaqxVV7crZVhHazcKCcARpdr672bQhBogQu4pWCkacSutQ5hYwN",
  "key5": "i7PkGwp5D35uBLvyzvzXpKKSubk1CVJkEQs2x3dcKmRT1SKqf7tWDDtTyqPTGrZQXgcedF97XKh1wYjfbLcBGP7",
  "key6": "328Te12JmeF1X3YHNNypfbAwdA6d5swNSwvbNee9ynskMprdFCpqEf1ZoLChH9woxxHrq8mZZfAV3jxxWi1UTzTR",
  "key7": "5bRT7yVoXTEqj9wSwjCz2jPgVg5NynbeZMq6ubSz7AUGQ1w54BJXHrAxa8EjGwV4ha7yCnLnzccchgCCZiCZpfrK",
  "key8": "JX61vQw2xu8Yjy8ALVSntAmeVSSqL88EgJhjZnjj273X2DzQLTtoq3Z5Z2dUEyubFoA1SWF1APuE1HqGVMRckHQ",
  "key9": "5oLSEcgoFiCGv3dUTqcW1nZQN5rRq6rYULkRm3fHaWmir1AEUGZrh7jn5sevXkikpYC8naS6froJXr59f16v16wK",
  "key10": "4q3EjKkZCvPWDgBXAGWDGW5fnkQ95wHQhuHKgmFKMSmRWePQaYP6VThBqXpDmM1B1edrXiy3kqAywtF4vY8TRdV6",
  "key11": "4t5ggbWNt7DnxZnvceEqySP8jWDmf7jd6BQRafAxQJoX59UgN3mXHYMXLbxoHztheyWAgou4cbvFKV8b7QrQ15V9",
  "key12": "3QwvANRh4ocy2WR4yF2qq1mqhTxiAhiRWawBj4NsnuJXyN3KZKkNAr2PZ4YpSikQe63R3oLK1nNkbvybWiespUAt",
  "key13": "63uqJW4ZgooCyV1pcAgnmgffDCkMoivabFq2CTChSY1dLE872AwCkQ81ZxNhWWYGb1aTfMYrRU6csrPmq11fNjoD",
  "key14": "m6LDchqRjXoTmxCGskK3DRc9REn1bYjrAoKrM3nUVANiPgsYBm5J4XN6zUmL7Lm6gfwQYAbW4XgUXZ3Jmig8Y1m",
  "key15": "5GeKbbGdpQ7tys6FwJzfEfG4Cpa482ghz9AwBNWduFQJhcnxZgNTdDhcPFFT4kJ5prCzy7n9hskNJgsbFmkuoUkn",
  "key16": "39ixxAagx9zgQ3PaNQye5SERizdjhGZw8MrTAs7Xp2DDzWUdt7xiFYgG5eyyeBvc71UsUM3hUpSn2yQb2YbKYm5V",
  "key17": "43pmLSRKi4ZKVSPcsxDnMSagmML7SEUr2hmCubhMZagGD3zcV7KKT7BXtak2cGVzFJFvVFsVLkWZsdXoRHEgc79M",
  "key18": "2PH5NvHoqdwAZJ3Ls8gHcXpjgthVfaV1unnvzMgn4KYHzCE9E8H8TzfuezfajM7A5yaWTA5ayXaYMhGqAuwoRaAU",
  "key19": "59QFRBDFtKBjs2kr1hii19DMnHjkajSSwbQ8JTfyvQLfY9CZCYKUiDvypKXtuCdXA3LMQ9aGtaW1HqssA4VLmEhu",
  "key20": "2gwPRWQfv8JW14HH3GoaGqFX9u6ixu3Vr6eP8Tu2iXuT1Ux8ne2sCr1SALie1NXamRPCJiJMTxKwAxifaaiykSVh",
  "key21": "5bySvvHkh38RudoABLbC6MDXSngJL3VCkkSLnhnXnaQLJ8WDXSugiC86oQZNusW5C7LyNVn82SWWhKZNq1gzErbM",
  "key22": "24kXzgL9DA6jzFL8cQsoHQjHckQUiGbKfh5FEGvXZbvYNufzd49gV6fiXfvWUMznHn3WjDV7dGbrNEJ4GjRsCLwd",
  "key23": "4hofU9wtUyecxuCihG8NMa4zTfGAgh7AE8EeX7TzXTsfZgbJrcNRzmuuQxcxWM11GpE8ttfP8Gtyd1Vi159LyS8r",
  "key24": "5RDuN7FXL4urKkYvngx9AgWHcrf4QjLfLyjWnPRvL7MrfDyjj1kn2avNTm6Jz5douCpbrtE6N2bAkzREt3nx6Xg2"
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
