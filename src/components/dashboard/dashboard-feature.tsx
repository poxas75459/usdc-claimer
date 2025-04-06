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
    "22dC1uuQiztWqNavu4dpo1tkfo48mrEkph3SB8YTo3e2bjNKHFqbz4pV8KXxGUmeiUwt9EHHdscYJ3HGhME9jCwM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mf5eLYMtUiQSXzc1nvcgamd6CnZ6mSKxaFRMFD5xq8zxUeo6jrwRRz6PTDN7sAbf55APFFKNE6FFKjb7qCmz4Rb",
  "key1": "5LxCdUjxv2FCKavChxRJa17VNSqGFeibmWxdGaVvcfxLH3Cin46Vmr9PGpF2b19m9PYk5KZDsHAELemnZUWKZu2e",
  "key2": "4TEnwPfVgMfjNqz2VAcLokXKDW8wmzMZH9Ty6YkSz8zEqm62z2ejawkRjpJa73LctxdCaT6SMJWREVeN5LnSMt5s",
  "key3": "4ixiMoFG22uQ6m1wejr5yPHsRqFwSEGydoYTvCWwfd6QsjVppkk5gaP4BNGkPyTJvKdf8zgcRr44MWmEMNduX6Vq",
  "key4": "5AARy9MNoWbgbU3oH1pwZFp8UJ8pVbn1Y21vZT8sMsjPKTjbAkBb8zMJNG6hBpEcwRYtfFLpG3y9Uv4biFgEGq3s",
  "key5": "3xRJsoXmL7jfhtVjs3nQHEARjMrzFrnaVbT5cH98KDGW6tYqp14UaMYAuUhto3mq4F5vt9SxnpbniTzWJaTjippc",
  "key6": "P8B5BdLzt5to8VPJJRQgoGEHou3gtKv9ArDnqhpXKWGABhnUGGworn1EU9oas36iHdTQHH1rEU6CvB1kEfrXHce",
  "key7": "5cKXtQ5eE8TZRQ2LZsmwDMgsbDNNDjsYfPivfS99JWogWc5ooBZZxUQYN9G3GNMEECspyyaurGUBFnHoJRzNG1cH",
  "key8": "5Carac42bpDfp6q7REtutMM9H5xXJuuR7mrLfBzijN46K9ZowtzLNXMSRMd67BZGK2uv94VmxyV7bRWmERniEe8k",
  "key9": "7uMxu6CxFHo9aa516iHYsx3TaLvn8PXN6QD2NebCzmCQEX26gkqT6SDGwmSqgGKpTBZ7kddLuxWoW2rLdBJn1z1",
  "key10": "5wp48kTKTe5s25Aa9jCJ1WApHjA8sstxubcA3LENgEsvsCjp3RYNNohk7E16VPfBWERfsxwzk7HVajNP7ZXWt4AG",
  "key11": "2j3R4eWRt9xXeBzNjWdE7LcAgcmB93p22K4AJcaR3qcZViKqG9JYAUQihaZyJaVjxFavEtWBbJU48ipGvSYjDnof",
  "key12": "8Hvgk9rBPLJxvxJoaZyhHvcEhdzF3ZTtpDHjnNL8d2DXH9eAoLuwpomZjWnxwufkzaaxRcg7BhZT9BVcWGnBfes",
  "key13": "4sBqdNiizW78zrcNrGUxgh5JbCSm4wrKFFHSXqhqceu6m3B5XreJ5QBTWsnW8SMYNsTzdWWv7HHmnc5sp3fiDemR",
  "key14": "3sDFqL15BZXHyoBcvkHJH4oUCwBbDE3XT6rP2E4DAssbSZVS1taKsQTjHZj45P2rCmxdxfybNXjTTTBDMRUBsGLi",
  "key15": "KC3YtMrW6McDETyg4x8hkjv6dWtxd8yuHgLoiZgw8fAcvETV37oZ3ZiEnaBq42imEzPokF7UE26Pcbb7mULdrRV",
  "key16": "2wwHQqYHpSJiHytpPdAYWEEhX38436Nb9AFLQEGNFd4QpLte1djCSeuU9Lssh5ieziZZyWwXdc7x2NJTNnafRWrV",
  "key17": "4hKUxeGXTq9SP4n5aadJo7MVpn6CuZ6dja87Z2YFbCzPAQjjtH66Ktd6XuqiHVabEWhRbTPwHnQrYDs6SngkXLKx",
  "key18": "pkrVyLTR2hfK5ikAwyRZBtvuw1XmZrs6DCTFQhPGdar3EH6TepuzyEbGnZDKMxhWjdx728LzGiZPm4sFfat3wpT",
  "key19": "5Z9UCQmDmDA7y3qNkjC9Aq1oWNXgxqm1fyLbKfh9rHttd8C95aZQB3hoivxKo56ryCazqHfkRdLwEw4fff6sKU7N",
  "key20": "GAFi8Ads2HCnG8sLw64ty9JVUoEWWZqhwHMD2rSMGiDUSSYUdmepc2BEE1miwnESUKmduSu3WLkA7uFJzJVrf2e",
  "key21": "3tz4ZCZiT4QmGPf7giQbvwW3HTkuLaGH5QaGxhf3KkezqfCiZYmspmuaDrNyomm8RHPWsjJShE73VGyccMhqQgvf",
  "key22": "2AHMiAd7m7oXLDyBJRuC86RV3nmKh5NJoVbshuYXk9shhDWnUwjoaMnLhT1kvfRnFavTskBNLuqAt41gPN6WmhNJ",
  "key23": "4RvXTgwa4PJpc4CjR37yncM5nee5Nj5ENTgsxgojyDGpn3XocdMfmwxbcXhiSkJqmJVXULDNphTUaALcfgdrV96D",
  "key24": "5ctcdkXGYChfjrQEgx2wapQb37SbuEtHUZ1ndEh7BPS5yMjVbr7NqgJyX2ZjHX4bQ9Jb9SWN3ARNjpEQaJwrRaYp",
  "key25": "2ZVp2BUPds28X6UxabdS8SPMi5eYtXqohavtrQTG6KS9ZxD7zVqZRTWaed3mxJGWQebqdc8MjQkxFU6ZNLKQ8YWb",
  "key26": "3XLds5wZsJWHQ87SaeyqWjbjfi3hs7RzcNW1WjQx73MtLczk2DZMp8vzmtdNZxD5J5NvEpxYBMho2FuAVecsrrfu",
  "key27": "2f9oczVeqDu4YY8Wkyo6NetyPTtfLhJmJvi2cZBcJsdCTd7jB4hKUdFqFWXp4Xsj2ENA4wWAgMohmSuzjohT2aWQ",
  "key28": "dyevQrGATNjfjQx5UpFWkTijh6cofffVsUg1t3aF8RaieUMTkVthax9s47TFKjPdnJUpuhyzgomgo664SPFDm65",
  "key29": "2m8fPZW7G4ySgnMzUnqrn8NJniiTf9P5wfcggBohSYABLqztnoUTuE9DMkXYdaJvqZHne5dHYJkaf1BACdrddBz",
  "key30": "67HFPEpbQXZc5e1745CssJbkUSDUKhAMVgYzzSCMAUDLaYH1TXZFumsYL6rx5QEDZBFHCQB5MkEUEf9kZaoZVp7Z",
  "key31": "2J4tRXbBRY8mHwxJrXGu9tZWeUmKi4zbJNg3kCcWFCHiq2ozzJeRscAHHzzRpENbyoZ1Wv6eEwTQB1RGuy36C5bH",
  "key32": "VYN7EozJr5yWtFDYzNydemBbp5JS9ozvUJ4Jw2v56Q5ECqZ2j1X9i8PeAbPNiDgAHURFjSTzEG1HnPaJQ2AodZ4",
  "key33": "5bR3onXvWSRMvZPC6mFLweefNUh7kFWx29b7pyNa5Yxnh33NgS8y7q9kusHBP89mYZzh4qo6uVS7Ray25DHdqFHG",
  "key34": "5B2WaX4W44NMs7cfVRfUgM1X91g4fDLFXouQc47YtESTfjMueDratB5ktZJabPNHCXv82jkUYfi7AW6tMqxAdnov",
  "key35": "22Sa3Rt8ocrc3Ch1jfUVL5cW5G2s3trSrnyjDBz6mmEWgyZqvneRCsNpuBANY2zVHAprKaunMHxf3CRypmJ9n4Rx",
  "key36": "eyU4GH3HPip95HE9ssatD1Yuz5vhGBt9ju3VtyMs1uJupMrsuHtoLj9JdseZcNpRfzH1kfkAUosWpLoxDbmMXby",
  "key37": "2JVSdBvuP5hhFxPXbENrtBhH2KvdKSMTrZLy1CCKEfTQGYXE8pf4JAD2LFWb48caqNd5jtu1U3ntJnPfn9GTzWpv",
  "key38": "2SVRPJLKcSqxUJzivRQCfweHvQh6vMtACAQYnDonRjVP6hW4UCj2c1aNfGFEgxVAFYw2dwb1ikagr3NdrEAohKDH",
  "key39": "5iLgtJc8Qf9qr5PPNBDytBmmQMiYGU3nLTHmpioESXhzpTieraoNUEiDLVTQQV4cP8sKKJhWqXZcz9XscMadYxm",
  "key40": "212PGqYuXJfQYRFSL37b9iZZ9g6DbL3yvDsxdXR1KoW8TXujF5PuFuqsjU67B4CSpQ1rhbxvzyVfrWAXQhtjnLz5",
  "key41": "48rZR9kM3AHem7bEc9T9tpGGopxH12Q64D9Hqi5T45DTNTDXHugAzcwN1t7B5sQ69aLTSKa8F71T69GhQteb3nvF",
  "key42": "5pxLjkuB6yiWAHNnPmSCLa1WyuDbgxRjpWA9dDnRPyspN5X4BWPbk3s32TCtnYrREG7iKkXiUsABfJtzHTvLAnfa",
  "key43": "4bcMUVD4Z7t5uVnjpYq6uVqphf6HtenZZLKhDJHBG5chz1jNGUkJ2zteKYbd9t9Y72FPoeyNsKEPqdP4rtL5dvS4",
  "key44": "4A3vFWTtiY9GJzLAa21wiMWSWeboGt1GVg4GN59UKLdXGJgaaAnKbgG7dWV6aTjbB8uqxNppKMqGANMTU4gyF9YF",
  "key45": "e616CM2d3RM1t4czNcsFoP4FaASRMnUB7bYtjdn2c1CkvfwsAbm3Ey2W1rkPBFtCwEEya9wM1VTPjc3jtzuL2KG",
  "key46": "4WPveZHzK9UF99saJoP8fNFodLKsEBNv4cmpzEknURAAdz4tz9vKuVXE7R1DNALaCwxXUFdkKFjer62HbioXPpFF",
  "key47": "9dMnmgmRa4k7gwabvmUzhwQby2m5Q4nYFfZxkuCxRys7M3f1FWkDdoo11fsdidyQTpBaorU8JC4CsLj4ejovVws"
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
