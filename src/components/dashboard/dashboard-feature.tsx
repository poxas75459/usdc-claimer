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
    "4pJYdt9jJfT3HegFRAo9HQ7gPb82D7fARTiTevSUkvxph4HrP3eac46Ka4197yRyi59DSMCDJR1iamfMue3ZqvXH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aVoYaY5E5kXYykk4pbaMMz63uARmrodmAaKk2TQkTCrXBZcKMTbJpqFFj2op8xGLdibNA7iFDL2WBf5VHw2Tsf9",
  "key1": "LqoX86fF2n3sQuSnHVgDjrJ1HZJiYE2MtdsPoMEHRjXUrzd1LzjADQG8EMQtNn5kKpGZKCq8BiNGQy7PSdKM8SZ",
  "key2": "4U35tgeSYAEXd9pw1GmhopeeDwCRBKFmJeaKomGT8cy51kVLT61jsZmNBDtL7P1vB4AadK7o8CZGep9tXzyAtjMf",
  "key3": "42mSxRDZpAtTxDMnnCavUtr8NXgTUxN4zvts8ZBWhydMZoEogii5PV9vfsuCC7owtjEnWmhgBzNcrLMEdgFJRgSW",
  "key4": "mHBEzeNeag7Y9P3cbsHM5nUcXgaTmdYVT7eczGt4ftbJbbU5a62ykLCATSFjTdwfERcQw7wR6QrCxWok5QVu8xs",
  "key5": "3BwRMEDh48TRpVZuVrRG6zDdeB72hBW2AVGY2GG3WnnKjvNSbLEUY7MbLoLAdCjbQ5pJ9cPp58FS4A1ieQUbUNXz",
  "key6": "2iPxu4K4JXBaZS8BxTLkZVpmB1CGe4ZpAT5DjC4P14kFjo158MQwTXURoqxWSi457YpaCLWnpwTdLCz1Cr7gdH3Z",
  "key7": "3Fj6wxbtb3uqKNbyXJJ3Evg62pADRzdUpffZss6giQD72sr3nmQFSRuVjWdr47AZBm43VMfKCt1qhTMJ4npLUfgf",
  "key8": "4EtXr6UGS5T8Ba7tUKMogTLrTqgGMV6r7Kgmee5kXBXEeECYX9PgDtq7SxF2LUNBChGzixAMgSzNFKE3ztBCR5t3",
  "key9": "5z5UVgxw5DptLjnP3dqe97JiXaT5ysTrf8PBpteMjWocCZQ1x1YySMyCKwX7vQMkG3F3oyq2ppw94jU2W79RSg5E",
  "key10": "iLpSYjPAsUHJexjkEu45JrppJN7uhcXg4EjNK9LaJCDaHyq56kHzGep4coGkuD4ZJzpKrCNnYmEoFvx7SJUGFgA",
  "key11": "4xk8cVdJnMs6BWKtYMHfuRZRKjKrxWVX5szcuxkPVNXb87dX9qsUoEFKbF8CSCrGQt7Hkj3iPamAnNCvuLPgLtXn",
  "key12": "64d3tznZzTXhJVW1BJTs6MseNAxsqZdtcG6bPcvrNxAeyaFJi8GCpxCV7ifjSGQgkH7fonPdmgfnXnLxXzHdQYF5",
  "key13": "TgqAANT4ar965pPwVbVqVufDZ18aDWuhT5AdMB4iSNm9TsPL6qsrWNvasLkpgEsoTfFGoh5SoxaX6ii2Bve9Yy8",
  "key14": "67Z7FHmREYttcHABgfAxvAmtgxZXi4KwR3BAMWuhUFFvQpz8w8Hcnp2pov6YMtnUg9po8ZPGSeHFEAnMUCDkDDRb",
  "key15": "3Nftcxe49zkVYGHn2cCCUVSo1ApQKhW73HMiMYrHqEnzaCsEkiB8oMwp6KyTh6xkvM9xYYCtfwTjJQFfB6Pvrqs7",
  "key16": "5ELjoF1rD2jGid7XieHKo5DP3aoxfgKkgV2fsr8hCZc52Hay25kncgFB4vz7h4V6pVUgk5twRvRyUNYB1VmueQt9",
  "key17": "5EaXUPAjM8jnSpjGGCsAN8bbmvCMMab2FJxQDzKebcnfrR3TukCmyenL35119tecCwobfbvsJdZjWWTyLiCpVspG",
  "key18": "576UNiajcsquiHoQDwDzQekxiut6ncstR5Upv6DvCNh6seCBfyZWHfW5PTdszbdeoYpysie77GfcKWPGdqduo6sF",
  "key19": "4F791rNzzqtNjbw1fjaLPmS4pMjmRdHhWkqHcfZnnZ1aaL7SBXqU7uFm7NcXYbucKQtB1yvdnpJYmC55FGRamhzY",
  "key20": "2wQBfBExuityxfgiFL8bBuxB46bD1iNbeDkvS1kgcrKBShSJ85PDUAMgY6E3BBBixRJd5ZMpJfeRdWkpk54S9Swp",
  "key21": "4rBHf5L9SQEbMSUJJhyWVZnsTwzwRmbGb5B8TW71jpf5tRRQputDYJJsDZ8ArCdycdGkWR1cS6YqDMqK5XhGp2Zd",
  "key22": "52QjKb1bm1F6K3mZqHmTj7imZhFWL3j1jxS2VGMSBW2erJYeQG6NnZC5aY1wfftMSjM79bZDS8yyjyrq3EcMMJR5",
  "key23": "4Jks9bG1NXg3ZtdvnQS6hUwsX8C5BaDt1YNSssJy8DZSS9xt2bRe2WnL2PUfq3XYzWensDYyhFnxAPipyZNJwLQs",
  "key24": "4PMVcsohdjkjpqSwqfDp8m6jkmqxPd8GauuF59nuFPwJqrsueDAH1xy8yXf57YEMpzyiBjSSibjyqYeyFXaaqmSP",
  "key25": "d6Hz2gHgseCGRayxDuTXwQHoTwuT4nhU4QL2r8HbZ66syr3W7xQFXEnraSQKdTzr1q7CgFEqroWpPuxmK7ZMhgw",
  "key26": "47ZnxBeFtGzQTHJaxcRDcyZmWWLUjRMD1qZQErRaCURDMMjP2gpwPAt1ggmon7sZE23D47tHYVUE6qLBaRHbw43d",
  "key27": "C1Xpb3XoBhTA3qDR9XGdKhtPicgtVqp8uKZMkqZQbCpQtsLzNoovwLcXGuUG4RU1u2nBncYfk9hNDUSecPr4pyo",
  "key28": "5BkkMmYsCKcr6LQBQd68w83o6pu87fSemeMjQwnwTL98PiXzX7eJzVaZYMu5GNpYZaFDL1HNZreZvsu5N8kA1xVV",
  "key29": "4DdRdUBvTLE6regbyQqzLENiquUqCT1i34HSLcmxq45SjHKkJuVxLjn4N8LfrW3NTeSdt3KRPdRKpPCfypTcG55u",
  "key30": "6wfTfeG4jHewfBNdQ3DH8e9DizYLkUA1nfQ1vVdKuzgfn1txUnPHQbioDGxxnZfTBJeKkc3BME9cE1knzwPYLX4",
  "key31": "4DV8kp1CHbHGjHnUf7bm6x4aJzSCbEDK91VTrbZA7LEtiWUtCgPZFyipW2xXYo1X56qArLJXFkf9wxUs7uve12wS",
  "key32": "4cEM2bUw21XjhSrfp5KBcJgiB5MrtEkE5RCaPoqzGbcM3wbE4t2Wia3u6dNnNzWi83ycUGBpuAk5fqdURtXCrHNG",
  "key33": "57CZ1J95AThUbnDqDWriJkCKsfjAqCCYK5NoPXWL6AUknPyGdM66rdqcm8x3ccwTbpYvAwodGPQuCkHjr2pbgwry",
  "key34": "4MuJuBPsGPsitqA4V8ZgPwiooSiDoyNTpYCKm53LYiKNP9WbVq4JHfVHQiBqjXc1bhicHRFNQfWuR4mycHagiJtH",
  "key35": "3Lyn7QBujALDeK6FUNad215daydmYoLn5yLHv8Mk8WVoJpLyNdMeMxAxHQTyppXK8Zg9ibdvPxXFmTGfyT3uq48x",
  "key36": "3v2oVURXpmbShzeDaFic4KKbLJ8aa3HrVTYRQQSe99r9bGKsBLpqaa3wg3zcmdaMEBkfdwow2GD5e1AErBcAaQ98",
  "key37": "64s6fcaThtLyeRx8pbyLFeKRPZjuG3c5Bs1efRZBgo8SJnL6i4fqGSBbsq6nnYqZCyVkoBL2o6bcJ6FApXbngtVL",
  "key38": "3Ab2McKbLYCk2F8wzhvg54TtFDy56asy6gLHkqJRXyqPCgm29rWwWkPNBfcpQCJK9VMeYsTPJjr1rQtPZv3bkZTr"
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
