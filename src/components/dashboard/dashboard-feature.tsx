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
    "4mVDZFFvohzTmGsDaHJN8xw6RUzt64v4mN6bLSKoCbH3k3vDPxasJV14p268T5VwfJXhZ9BWmjb4GUhaKP5ExcWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oFZY2eSU16WBK3PqF6aVE3KLzUg1Kyh6woa6sT63HBYD4TnmEJT4yaTo8ZwECQL1j4KFu3jmJZufZUsMYk8FgCQ",
  "key1": "2VhhdY5D53TAp6PEkGGwDB82vxGhr5jjjasKjpPGV593REvvjUSS9Yi8eiY2xkMrSY3TutpW8C7dvrwe1dTGMHuQ",
  "key2": "25SW1ZzCE3Jh8S4LK7xq4LNoypg9A97jz6Ub2CK1M2d9z9zBquVPifLGvXH6vkW1FKN8f3Pvz5dE8CPPKt27nyoj",
  "key3": "5qFufqSbTKPN7obuN1aKvaq1m55NNafyRsdo9txwPPjAUVjK3FWNqTk3X4wjdCjBrQbgNaUuahHFQMZo3a2qZY4K",
  "key4": "4CLy3LeboaTuZexPkwdmtJpr9omrox5733pHy3vZSugC7gavT3HPSrYTbmMLd5rn2AT7456Z72jHxMXZmYriVxB6",
  "key5": "2yt62Fwr3gHyeU9MRFAE4UzauCFcY9NTgDUQk3gtmMPZQuZ6KffbQnqWQuR3PnXZHuZZ3hduHBCruSBs1etCcw6c",
  "key6": "4ZV9HGVNtkG25cUqzvPKD7s89yE72TjPutYNjx2mpYRrk9NwtfWLopZNuKrf6Li4bWBm2Cmsuxz4wkWANgZzHQZ5",
  "key7": "4hYSifCU5pGc2dqmuAi4p82WmzYgZznXtevyXyQvHMTj5JUg7HRn44DNV5YN9aQ6YT1oPCRKkwyZkZWUgwYUxGqE",
  "key8": "4mNKK4oG4SZ856ubZraydWW15Zh69YBLUuQd9dxhB9pEiqArYCmyMHcZy1XrXieF8p7rtXWeAjUoKcoL5cFPYcWZ",
  "key9": "3rjGK33dzw6J2CJ8tvgRPwd4Hmu5a2Hin4Bs1dWzXUVzRS2MHgpr4p9EpH3Q5ax5iTQwWQ4oTEjh2FQMTzE2y22N",
  "key10": "2TPtKd6xEojZZQzhnyePgrnnuMkxteQSYUmJdzuCy8rwRpxkNmMeUoDtXStvZExrXTbsPr5MPN9vGqaoC1Z9cypz",
  "key11": "2gHgcfswmeeiUAq3zy9xq2ZRYKzNQCeJFWACnQhRiGaWDNmnfKi8KFzYwhtHWUQjrRDjZBVkiFRzggvgTuNZzqct",
  "key12": "ufEuZAt8dL3SLh85AzV4ai4JDx6ksACzx8noSywhd1i83zVAhNn4TFhyvq8JNTwsrbe8rKr6qEubQNL2GqnuTrL",
  "key13": "4gvkFNJHUVnZE45AVQ3RcJPDHCbVQ8B11khykARoqDepwALdNqzTgXLAnSKbTXsSBVnp8hGeu3bx5SwDNpTkBYuY",
  "key14": "3wZQeiqpJxYACNADUiug8QdtNSj5vZdNSL97SEHrw5yuAkCaawzE5EpQCmNJbdkuXTNYrF2ZPKBFHZV3NUKtg7cU",
  "key15": "4xKPGKMCVRwruTAFmUNQCEEZd9r8ziWLxot3cbo2N1C7KQP3GF2dgredU7WSXBw5bwDEUDyUokeZ5yPkkUu9uerS",
  "key16": "aMMtuMCnbAtip5CZKV1itYPueTSVmmZD9Y5zN9KuHcUyFqZBcxAdgzsPQsYYvj6xxvUiu13jV49CnFBCcVGoNun",
  "key17": "5DxzEEwAgxHUk9VPEGCP23RNEPctuH98fi4YhRrk6mAMwuTxJjSHydTS5UiPTWFfxbPrtekj8VP9DBMSfb9qdQen",
  "key18": "i2nVwYjwqm5a87z8Fq4rJA13u22Bjr1MXTxELoN1jLMoXygvDQ8tSHvsELwt8D5ZrEUhLqLPVfWsXuzVL2wJsmm",
  "key19": "28dvnPM2MgEjRey9zbDECzpFMdhQG512LAGtQxV5gyFwk2VyVQPtDn8FDCb6oi7Mv4jVy7Jhmhp4ZVzcr7aJNXc8",
  "key20": "HrochJDfDmugKGd4s5KCNg7kS7rP4suDV7UifStroZRvpjzBLbPMyPto5RfLesNZiPGzFwEL6pkQR4RumWg3fpk",
  "key21": "67Ukwwgw8eKRBenAiMaHCz93u6tgTyGtpRXfgPjEeaoCBcrzBHNs3ZqfXyhZaAwBTrf2p4F9wr1qidukvtqvNAeC",
  "key22": "3BEjg5NeYUYFfzcmu74oa1D2V5MdaDqtWwtDMJxy1A4YrhSEf31D1njgK2o26jPgUf75UcRtgATABUxY7KFmw7H5",
  "key23": "Ep2TwBKknhq7X2uQnMyYXcWTr1pMWMgDcJw8Csos2EkRQYTTuVm6soZFid7jsX5kmk4DSsmEoF3LrcfmKKofPoH",
  "key24": "kJyvz1ADAaXQGT2ccL8T52YixPRiitgAUPD23nhQDvFc4wACq3Y8PD2UPV8xoAiJ2DBrphcp29aT2d2bbNwMMdN",
  "key25": "5UPZnArFaqmEz7DwAGYayU2eLDEagQXFiXdZXrTjQtYsVWsyvWG7UiQKCp2uG3Mq6wTFjpn44M2oNXhHv25LjvHk",
  "key26": "3RJV9r161Z6FYdtujwzgMq4pzxPSvkkAf1DZ77KJCFVrcRZkFyXzeduYmq8gow6adFbfzuEacE55fLgpGQq1Ujom",
  "key27": "5RKADvVkHSLwcnyvciWquGyciaUdvqz9rgCRo98UrJDpWqdk4oRTGcYRhFufMBMgQmNSkdQTANZfrCn4CzSbDnPU",
  "key28": "674GZd9T2n4XyHuX8CKCRJtb1vrYH7ofmEbuLB29uGnys8Kqwee1wFhCeWQhK1uMVmYs34U4xZcNdU5k9UhDfnkL"
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
