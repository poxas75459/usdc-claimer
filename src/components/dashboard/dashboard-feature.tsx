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
    "2XAtd1d3QysEfpzJfSkQ9VbgKnSymifK9vsgo6EvAmzS61QftgeRREct6NvvSYfoJaxa3ePykTvGrNTYNtkrQsPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Bdzd5jLMtNbQNPJN9fge15ho82cApRDQE4ckPfZvYpgk2jGqp413oSRUaDg9uHa226gGLkGso7HPL1MVWMLPsFK",
  "key1": "HHLKQbFyPELbkXJF9nWgXtYgRd9ab1NTiUfARp3iJaxxNbLf6996geByRMUpxcVk4B8C64ZvEA4PrC3FnHYpuoX",
  "key2": "64KfJSsh5kedmSncQq2HzbYHwv1xZZETnZ6QmJa9iB8oTW4bq81ozT61bA2BjCMbpYqr3V7GBpWqFLFGaZpTdJEn",
  "key3": "YbDiWHVCWRW9wwCbh49Pn1L3KjRTSHkHjbfPDzoBXmpamkDZB95wsvXYUjxeRD68LbawwdVFD6JTCKDjAQ2RT5B",
  "key4": "64Az2Ui2vveDuepckY9E1a3LJF4G1BhDqbDbhWzZm3VTTwKbUTd6eCkdmgtD1v2a2EfXkBqWFgJyUWJJFCsiEVcw",
  "key5": "wWhU7XW8tNvEAviovDj9zYYkHqUQRgSxt1GGWgznGUgo47ryhcN49NNZUmRuYpPaMDoeWPcRcHmRn2zUDTNfP2g",
  "key6": "4WiJHkAmwAbwD8R7YgWaFxUd7FF6zfUL9BCvb6NKT8Wjfce215SRTxmYJUUmme1nrPZcTZxYniuwWi3669EsGfwm",
  "key7": "4fxWKB6E682NeMoryipizfxY9EaprMRbK7CGad36ojS641XFb3FJ8zRjPGzeSokno6jk2FcPEHUBVSB4k66iSZp2",
  "key8": "4d8KVv3CYQbGUc2eHcGVYZFkXbkKAU1sKzXbjqj8VSESX5aWgHMgFFM7SpGPY4gSXd2hr8WdPTnUTZ4AFp6jtQg8",
  "key9": "5eZoUFCUzLxK6iLPk2hRWUW1SGPazpUVdB8Td2dZ6Po6HeVyRCPUDuZxaHV6E55WUY7McYpK4ss7PXtLieg3qERY",
  "key10": "3UvzW5jKfYZvsERqb3KpsDk89JY7Jz5vdCHqkntpHLJn3pUtuwVSSDY2WG1SpUDpXF4LvVGGFFjZaisgZbW9KQg5",
  "key11": "33Uh1PPKtVgLnZGsrYfwEzWBEc1eMCygUJTCt5J7ZghrpCYyNbnsxpbDseacxW4CsoiDcFWBLLnRsrCkEgyzopoP",
  "key12": "5n8wDEs6wQpDwbpWXW4nXVuHVbVdpR9GAkMMEAGhqem4AbWqP2umLVHRSVCaEiTwHRPaP3Ui2jkf18kvzQTPHoGs",
  "key13": "5nMoq9mMwW5kr47u27dvzTpDsseKfUAMnjCLeJWYskausKE8jk3yGo3VReAu26icJhVKyQA29N5ksQC5nnExyxTh",
  "key14": "b3uqfpYHmutLZbJLuwP73VVmqJExD11AY5VQttML1wRuD2kHxoP9c8u5sFpeGgy2RC3obegcdYMd444R5cEFpGi",
  "key15": "VE8XwAjrZ9MrDGdkDL5itm6h9urAZPQVGx5DVoiHmzVZ5WJkW8qU9DebdxzacNT1tRDeevVDmccUiMvkwuubLri",
  "key16": "3ndbDU5XRAvCBWe5oGQ6qcWeei1Uj94HWk8YqoruajKEyuviH79mrzHkvjDvDBDfEsBeckAotdB5iwWXJmTfikP1",
  "key17": "2Sf8riHxGFPPMmwNyyCRCiTZ7ocDEk2Fgsc7MrDxpTdhtfuw9jo8rLzrXaF64nkbADcTBtZCFx2ANwe8A9BzZQXg",
  "key18": "3zwkxcAfH4EGmgiZDNNkQMeGH6VttoNRPbsEKRWvV957Cv2YHfw7NQsicM58FF39CANgCvS9PeH2LB5s6SBYYWFH",
  "key19": "5tidPjoVkHXb9d1FtN5NkdAhjFcwYyHqdrQntSzgbT6QV7j4v39Mm5j4uA6zmeAJ7LpikZQjaecyNd9DodCPZkXf",
  "key20": "2iWzE82ZsiVQWEgwTZfrpEXUaGAHuz81AQyedtFk2kzviamdS5ppKJ1EkxL5NAG3vuKVgg9nQ5UxWkz7bLnzqzfb",
  "key21": "3Lqf4kFh1PYBNu2H4VKM9ZRnZtmYUK34Xyoqt8aozsEssuR2ChY9E8QV4MKjnG7msKTCxKtZfhvAzbiAU5cVtE6S",
  "key22": "2waKw9HJtR7Vy1jjkMpQ5nYcRUGpFeG53EcqRBBD29VLbzGa32hFtpECmkFwp8JgQMjFy94mHvDWzeSEMUWxpGKA",
  "key23": "btumSuqwSNZqXVbDmAgDeVfPyvmcyikN9rABtmwixA66J9qGTw8yWmHJSvknvmhCC8KvWSonGbwHj53in6UTXNh",
  "key24": "YdfkQWXe181s9WP97K64pec1mTn5YL3UfZ4tg4PZizefyHCaro1KFqiP2S4Qa7auxGX3x2b6XW6r3rDdk75EFqY",
  "key25": "FEhHjzH77zeW937b9LicR5yefJhYg5ZpYfnEmD91cHmD1dx7TGsZfgL7bg56D6tH44GgFrEb1H2WtLY6UnjWdmC",
  "key26": "3NLq4BvbRd5hoRVB6euRhB5R8pBXGEW9ivEB9enCbVGQsjYacmpnjHqhkf28iXn2mDUdWWg7GpRLxRX7bAN6Svs9",
  "key27": "4ptm5vxEBobgejrgbpuGBBKfuetNt3uypkGunbvRfZXkESnyDPvogXMw3GbTiY8XVNvsi1bn6Bo8br5ZvWVFAEWn",
  "key28": "4UoitTHZD8rJ5pNvyewcSoCjVCASRHeK2S851osZT2tua28y47RbUfcPY1CjA8vhf3ok6xHNSnj2PhhPYnQcSvYK",
  "key29": "5QfomU9r5LDJzchKxawAdWfWyKJwJ9JovTP8qrCvoTKyxPvdnukz4si6DNkJpZUsE9DazPt47LaZr5izEczQSy4s",
  "key30": "2J3ogAkDXdvtWZTiqovyabtKotFTswGiq5wDBdFWASrr79a5iAcTT6SVUNxmC9HdSUPC3bRXwF6Txb4hiMXAVTQm",
  "key31": "5HWhYyDRF6A4GQTKhw9DP4wYBmFXsABKSKok3CdGRBHPmoFnS65Xc7XvEBr1dkWVDdu7Qsy62W9Az8BEiz5iBbPf",
  "key32": "3KhxW6C5eYTovdj7MrppS9wZ4tJF8sdHgnkxFLJt4jDzkz28RKzCkfqP5JzAL6T6MYkpVeP6Sc79xBEz7hwvNvLg",
  "key33": "2nnAa7knPUrArGnyvgSPXBqtwAygqdoaiSUTq6XBRgWNiwixyp6ZrW3yyZvM2HpkFKdyFjZHuoEZPejVdKi1hyXA",
  "key34": "14dbTSVugTAn9JyfuxqAus6yT3EgEmn8mYtpe7ZkLWuANPqYBR7BV2wicAhbgAdzJcKQDA6trhsgSomCn9LGVcg",
  "key35": "2HNy3cD1PymaG8ftBrCCH8hNqmNtY9JTREipCdTAGREzwNiwYBxR3aEskevh6vMCi4AQR4mwCRndxWDniSG8Ak7f",
  "key36": "3QcMt48g5AfqSuh32FohKYyaiV4dtUbDzuBdWRWE3UYtgnAKgYqqgYx1aKn4zaGYCfAENFDHqGbBqZpwUu8J3AKD",
  "key37": "3YpUwYmZvT1BGuio85e6xj1ppYSxuALxeJ3Kwa4pX75nGJRr7QvPnTD5wLC5ap89ATSNQhLZwiK4qErcAuP8Du4T",
  "key38": "ZiwiTjQx6Wt7GrthPoNCbbiqdCwzZy62tUdh4mAiE8oc9QDFhkAgi7nuLC31i658NTZo9eqwLfSvV7zAvwRYBRa",
  "key39": "2GoJJCdaFh7jMv1eeDWpjyGkehieJvvB2mzZNEs1bHHp2wAAQAtL6wPpyvuuYXWQ1GZMB4rCGEsp4Wej4CWeGbgD",
  "key40": "38hcCme4MHWuvjF1d76Su9WyypM3GmjDMaDgWJW2huedtERp3FHVWcMHRbVyJiv4uYVYeYRLPZsz5k7XgX3aEFmz",
  "key41": "2TVzs4xAjsjqoZFMjV752YuJeVikbrekaATDaHcUw1NKmzUymzi12n3xpUZhqtg2Q7XrB6KPqJf1pzUTSLnfFjUE",
  "key42": "3dSTiieGQPPKuN93nePSf6HgpCivz5fYhqnxBd1U6ffyUTdb6zj9FX1YMTXkvQiLFvxJHNP7bWmobHeUJYPJXf66",
  "key43": "3d7BhTnzc2mFm3j8Lh1g5tvWb316dwnDUmme6K3UQff5LhjfWF61siWWqEf5McQK7SURMWtw6amnw47dDWKznHt9",
  "key44": "5pLoF4eQHWy997LEuHxbSDyRLAKMJZ7NiNFTmaRxCGuRRyAFfhktsEuWR76ap9J1YhcYJqsnriVQ94poTpV93anS",
  "key45": "5w4DwXin9KcwZ8exBLcK9R7ASi7oy8rFa5zShZdm8dp6XnrMKA1aJmsuLpg3BGjg2EQ1fm8nAXfcCBMsw3n8cVtL",
  "key46": "5FPyErpoVqiTdJd39jxHW682Ax5d5rySt1G4EY8h7bztgdtXT4k8BWvVEBUeaWNtMfeeadJ2KpWq2DzkKW8563AN"
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
