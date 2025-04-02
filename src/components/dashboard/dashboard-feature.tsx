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
    "3KaJQWhqHzaShEGteRZLaBtK65xjnUFQjuX2Bpp6Sc33nJ1Drf9bWSuuVsZov82dY7GS6fJME6Hn97u4DHkZneJe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5BQmCQv9v6UsfFyMMv5RKBQxPCGW2S8aBZR2cGp7Wjq6ddyMtW2dHZQDESUVPrzTUT1FXKhjAEJjqhQMpJBowssD",
  "key1": "Auc1obW1AFryLRzERbKtpXk9rEM2ghpyBqa5ob9fGzv1ZVQrf2UgqNuSoUAVFT3CWpiUvhXz3FSQ9n4fc8VH2Mm",
  "key2": "2C2RRkQW8dsRYRD37CEEM214rRP3VnLbckWZqttBt1ZHq394Siab15XgWWjXPKCiPjTPTm2fZa4sWnjxV6FAjHC5",
  "key3": "D564MpbkTCQHKYcL5JDwFMEP895t58nv5WvtmRyke3fw1YuWbfHn5SZNDDwwgSkTrkmUwMq1RBew7SsCtZfh9GH",
  "key4": "9ui7P6tmGRWqc3G9nr3h87bNoqHcq1cvtjxoG5wzzNmm7cMgsRgd7B8dia9kMhswpbskjFFbi2UQeShJNdWeWvb",
  "key5": "63F7BehavrTmUra1R3mp5Qpk5pFqGarf9787MfRNGvYXPuBMHD14M7Y7tCATz5NgzdLd9gPkpHLGNEB9jsMHrSAx",
  "key6": "5if2Xf3J7BWDdPYXNFoKmRkY82GVSqyCMh2QoZ1uRNw8Zga1Ue4ernqeQntrQjt7gGpjYHFxb18vw1x3Wk4eYbP8",
  "key7": "5WJqT7GW9c1FUQY3mbN2Jcdd4oe3UTY6HPPBE65eSXWtSws1v9YHyaTptX79fcLg7VmDEHwyJAXv9SgUT5accaFd",
  "key8": "2W6kVSZtmvVZzFYtQWPBP7iey5RiuhpsM3dQHUtAfzaGZ3jePSr9xdjgBhhs7CeboYZHxT53uCCpGNEJbjk4X2xK",
  "key9": "d9wpJHygQSipbC1VBZMxXdrkipdK18Ty22FpB6mFgUVzKAYKoSphquGB94Ch3M53uPYUEqozTnf5BnjeUW6CZDy",
  "key10": "2B3hd3GyMxSMomAQmyrs8wYgbEyvkQGCP42J8hwnm2HUDiJP8hBjaQkDi4dUp1sXTEH6n6rYy7PQNVo6Et7uwtKf",
  "key11": "KEJgojgVLA1Yw64nkUXp19a3EMXXASyxr3z54hUJwfbfkz67A5hEYCprGvsPhJSBS5kcSicVW7EB6cpvsMZXLZD",
  "key12": "3BYNUbT6JPRHS82J4hbnP5Zp17dt6yccsN9GxWp8jvMehw17HQy4Q3CVu5LcJeZohmwCxEND1RLz1n6Ah2Jbc69T",
  "key13": "4mHXuVjNjouvmqZtJzJfo97UwDqEcDXALGExcf4WzRqRQhx4XBWcM8KZ2wsSqmKFiMRNFdwrQ2ZZ7mMS1J7HWRGP",
  "key14": "5RsrRS9q6mnwn5QqQqC5R9GXpddN3EhUbGSsCTnRWXFMU8KcZJPwJ5eEDsDg4WeoMBGSokaHnfsQoE6Ls6PVH5Xu",
  "key15": "3WWLDKgpueEReyXU21yyf4gb5iacQ9EoiVzdUiiPyRGmrAMytddX7QhhqZf34ow9sDBpky2hv7LiRLnWeLPccema",
  "key16": "3b1T9gmWEG1yEWh8u8GaCy8xSvGPFfVPbSFnj4n9CAyCHpFD2z9KncJCVQBBjGP4uhtmNHuvGEd27UcN7e1JgFbx",
  "key17": "4be2mPy2PMFA6ZgicGFTLxhDGXSqA9XiAGtQgYGKmWvLj5PYZhZiC4nVBB2DitWFid6LefsM3nUmUtFAXwQP1qDB",
  "key18": "3w7qMYj7g5Ckqw6x6XynpRiaNpPyebB6QBv1QDTAmsV1zmY1yT3ZAH6T81Y1qSwb66B892RNS9tiPAMU2zqWEqTN",
  "key19": "2hHgZ6cfmZhfbU3HAVzUSBa1ceuc96zvNBAgJBNRBjjnPuae7GWXRzCcGgcf4kB4j8u93diTnaei7Scteuco8ZZP",
  "key20": "41a8x77Lkgx5XrZ8dqjZk88dKjfu53QKix7UDgjQ1KYkf4vjE4TJvPRkgbEHFMtAsccWw8RvdmeQL7w94xesbd53",
  "key21": "mAVzQHNuGarzQicQafwCipEKv3HV4M7x5khNuRFfUSSsLGjswVYbKemggQfF46sqc5Ga2xTpmYSreBys74jsGpy",
  "key22": "x7c4kcqXaxasXQNFMpDtKBvGMCVxbMEm5TwibpjU6fiSekQCjycLsgjWKLEGcxitKYL7TMegttDKpudmFdCVrPN",
  "key23": "5PNP2ejW922ehJTuRicmTwq7PoKCknVgbJ92jPNGQT8a2egrWHHHkxTvaek7EeDU3ohYQDEUxFhx5Ndih8urCvSQ",
  "key24": "3kP33kMmPxxPAZRssjxLGMSCNuHrUqwxproTSB94VhkFCXd2HgTT1hPNakca3XCU4xjALGaxGx3vUQ1DaJQoxxbN",
  "key25": "5mHcnFfUQerNVwmfyXvqjn1tRGSpk5ufDXjgDTbMcKMAV72z9P5oCEuGGpSJT2imVfEDMQ12REPzffb77xbNEq2K",
  "key26": "Maou1M2PEwcPLPXygYXjFEQju3jH1Uwc6kvX5N8bV16xjvcWAnFcTBxFMfyQxoDNyzkssqqD2WMiNMm2e9CqeAg",
  "key27": "3BLjJfVa21uHVf57KmcRx6yoccALGxSCcz8mteHWK2q8fKva9FDz5oeFCK6UKbX2bLJdGjgoK5quJh1ypNDfCxva",
  "key28": "5PwoFeKFAVPZgkEGS4jxp2kqSZz5aqD4z1xbWYksEn1rcwBThquSY9kzJUZTQ92uUEmGZmTToTTNbi5S6RytyJuf",
  "key29": "4BdzbdPxiPhKGXfVJpkbi8T3W7e8FM8MqRCJESwrdfg8E5KgzkLnFFuANEKueqE13JtHbND3ngJS7DvjmJvf9Dft",
  "key30": "4PYPvR4nB5xYyJnsWjMi39WGMVZH474HxYGNwxHqSUNT4AEs48D5YbdypJzJorwZjSLbX7FPQS7wPpzdtFfgUc7U"
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
