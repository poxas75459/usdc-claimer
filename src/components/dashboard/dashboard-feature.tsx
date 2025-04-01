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
    "22JxuFsw7PaDGKHux9HadSKrJYRNXFCCfqjiw9pWt5tif5HB9WLaFpe5HwNowppDWghMRMsX6YhZ3xSrbvpEApyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gf65Mz1Q9Kxfu8jLiht3jS8JiLDsxj2mrhBaRps7Jvz2UegoqL37YMuFgsksLUcyxECrqXNNdgLnHELPg4R1w8r",
  "key1": "4ePQiHHVRJ8XYoDH9avJM7wH4u8Q7B4qwkWhPHiJBWG1ST6T7RnJqrd6ZpmvkBwytLfgxjHtrW84fpy13VejBNM2",
  "key2": "3t9ryCV7GYu3cTZjXZvNwmVR84yYf1Qjjti9tWaNrWreteRArTm3hVRGuwsqcdkdKbaydEJ7UDAj67TTGCdXCq9N",
  "key3": "3mcji5N8V5DJRhmhC5A6jUMv59KWQwte3ULz8dB2m2jgwVi5ZThdKR9D9PZRbq33CqVyHWo3Vk6utm6zMPJcf9jE",
  "key4": "hVynLLmCubVVMRhciHThWMtus3SbjQHcWcuDHieXLUMHN6ZsK3awPatFiEoWvkWG3ehxB5399RC2YeQi3FHFn2L",
  "key5": "5GEp9uL8TqJBeQYScwj8AC331DCN6xYdKUoXkEadKdBPebHrSmu7EAMZMpt2WMHdVJXfcWmVYGEmmYP1eAFuLG1i",
  "key6": "3fk2n7jmMA1cqUkgWKchub1CKHZbyB4HcMRKopkSEypcy8fwB1rbG2huJtuVfd1546Z9aRD6GTRZDFyuwYUV3RiT",
  "key7": "2wuTgnxjHXKLNCLxaww4ajC7bTYyWbza4uXcmXux9p1RXTHjQC5r6QkRTytwcK1nXu6em8b3RVcYCSsK6M3KhH9T",
  "key8": "3U56VXXT2KjuQG5j6EuLr4SNZzkHJD413c7fwUpzEfrtvKFcq1dya9scZDcnJ55CQkrVdLfGdKTE4DkjZNEy1hPJ",
  "key9": "rt1iYQk3GB2YgXH7dGcUWo8QEJm3Qcw67FxQNv29tzidb2b6QPWenhzNUfTzzstFdBMXoGrZjsMHdvUPwv5NBpM",
  "key10": "2a3Rd85qnPZeozqFBbYXB6NsRZESfWjKnsCsm5tLMTWZq3t2oXug4wye5aw5e3MqN64f8LorK7YYhdYLpSh7vLQb",
  "key11": "38c2Vfxp6AtQK7vWXerELnsWqQKUFePtxVLGaeW9w3Ykh2YhAV6ZQV1yFGhfohQAQ6196kp1DBDwE1aBmzkPfqZT",
  "key12": "5odDgQx6Z8cUwMoiZy73mXMvGUg1bSpsAefzH4wtPyqYGG6ruCH8d55vrVEfSQ7pgkB72QH73xz8BSbpwvzJH1BU",
  "key13": "2QFK1hxsY1AGmBFqHJyunnt2UrRuA9AKKBiLmFwZFDjS3BFibxraHvd8dEqzr95quHyrwgUBtD8TBec3ZjxkX59C",
  "key14": "5BR7fn1TaAQ3jNykRsm93Nv9asDVAeHUpfXyjsGTCTgwJ6x2BNuURRnBoefpgDb2YdpiNvPg8WkVuer8edbaM3Ey",
  "key15": "Rz6197fuEZXK6Q8XLX1h74bXykmK8Vmyu19mhmbC1dMCvfjkzJBUSX8bFFind7AF8GhyU33852AbMY3nu4R22iB",
  "key16": "2CL1pUyRPRTiLkny7vVusNrh3W8ffS2ktuRPnBiXAh7VhCW9HMXs2Ayh7Wur2MoipU7SK9SawXy86zTbFhWRoo9o",
  "key17": "4iT1k6x7jXKNu2DjVmJuFfRvAWJTBDDBwqtZhJiSYfaCwbDsGU8K1MP6Prfkw5fRu84xADNehZvzkpNsa3pPHSia",
  "key18": "5xpesJ56ymytUw6ib2FPUQjS5GUaGTCEJficQZRhKy3JXytBNMFkvLWmryXg1JBxNJ6MshSu1MsnMcEyrjGGd9Wp",
  "key19": "5BRMiFJMfAmDV7kYVBb2vb2QgxtAg2hhkf9o36osiphd8e4qqcNseUJxciqphW7NvE7i9gaoKRnqzf6Krz5V4FYp",
  "key20": "KNF8wLoguYrMqRHcqJqErpbMtp1gZnMU4hESYfbvXQqvpoLBf8t6tGLBfnQqSdypC87EawacWTHWaFYUw6w5oqf",
  "key21": "4AEexh3LssqjZu2KFc3z2N25F53S4nHtbmfrAfWhhPT7ccHDw3dkTduevNuExuvuKyU61NV7bZYJGBsgLHetSTor",
  "key22": "5jQkUahZYXHctBfwoXHDhwK8vVNhWeXbMhbZQ9jizni5oLPEmxdNk1AMi5jaLPoNDXK9UnrEvW6MN16WgzUL3bJP",
  "key23": "3MdCL9DBiuKqEGnbokzyCyvY8y8tXNo4cndwbwCqHJjDFfqqYw7f2z3ahYqUWDTegTMVXZQpLrumbHuxwLJLqGee",
  "key24": "tntXob9UU7o4BtXpgcQQC3W6ZWwTz2Xvv1P29vYxr6yLmAdhoxAzTzYfMVRRPfQTcEiYgVr1eRpiT7XYh3fPoRm"
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
