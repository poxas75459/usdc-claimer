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
    "Q2DXLgynvnVV5H6uTrXZUy4oDWbZ9mpYKwbk6WMZugQviRcoAysU4ZqgBv5KNTT3VrMQdkaUNNEncBnMmaP1fbo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dqhzVQQepjsVcX3BujciEGqiL251GvgX6FDWjghR7icQUKM8E4vk8bKA7mNkcLM6Fr8sgZ2gKcp4ekFrjnREnhv",
  "key1": "49VZBZNbd8PaB3eLHAjwVSBnyCgWZxosyZnzWNT6HKNUmo2fB3b7mGPGNtERowU8k1bgBdiXznG2xQ1LWJURvBBW",
  "key2": "2VqcYaF7L9ceyVHS2gSj8LUX52y3YWFT4u6LjcAvJqVZP5YcqABvvZiGi95FkSnhf9RvfdfPffbeoZ5TsPJge4PX",
  "key3": "5JbM8CfjZ885bEMQAyefahn6gAni6CD1kLP3w5sX9Aqj73HbgoE2vzsgezuPtGYh77C4wYHXxeAK4frLhbkP9Snw",
  "key4": "3TBNVu775X9ftYiuhe4nGHUpAeBv1tN98gx5Bwmdrbnd4UApQAXKJyrgu6suLtiawuf2TTwt1obuWTp4MHz29eYP",
  "key5": "4R5aET1UUos34hjWN8FHfi9vQGvjJhSerxE9WHJviXN5vGfHFSQzsZSNwLFjtE4PCddT58jhKwWmnaBbAejfAFLM",
  "key6": "4g1ojb1y6tfR8qpTJrBsjcaemv2v9sHHSFzrJK3BToWFSNzAiCGjdvXm6U3zV6zRKfGiN6s9EqRPsT5sKTWtsWNS",
  "key7": "5wf7UuWP8DGsEPdpDTiSi1MVPodTAA7BitxVniCxBWzyR5GmzDna8SwqBszJX4Ko2yiwmsk7Y3x14x2hArHsCnzm",
  "key8": "BYrvxd4hLr5HedJHwnvNQG27KuESsB8fGq7ooBi8AEZHfosV4UtNUah8Tf9ioGCHFSkpjXwSSDj8UaUarAKUEPx",
  "key9": "5gg7X6chN2gMn47yR7rJ5xUAWsMQpopvSgmsvdSZs9CbDyFXCa9vu1XMXrbpxzjsnHsZXjHBqnEGJEvZJ475RQW4",
  "key10": "5tzmP7fqY4XKK3R34Fnwn4AkPywL2HCqtC758nDHfEYRnmhZVmP8JwwBZH6jTDoXRNqzehUg291a5CXik5e1Jzff",
  "key11": "EoNnHdMLKSUANuU9CUJ4FdzyoN8Qa99Mpy6iDfXd3BFdiXQobFbe5hxkzdNufkKYJ3PShECKujzAdWv9YayQEgj",
  "key12": "2T5tDft75zvQ3Upg1gKeH7BtsKorvrZ2cSd8kr5gM6YtuknTxK6oHy58bZHN68NHX47AqNY8U1CHeZ2eASYqqFnf",
  "key13": "4j9F57N2phVSkdE8AqQdTR3s3gzrL8FtK9HRUwejsgHZeTFXr3kwKKLwFBYg9ubPw4JdCpmCvmhw928TZkfxciYb",
  "key14": "5mtSHVdJN9KmjNDuUWGMBSHwmsX9vRcQjX7s1nMz4EBeX68WDJs2N6rHDQjKXCkeudWSVg35aKSUuX1sbMcz5pJh",
  "key15": "36FNVTuGuYAgdKz2LBLi2LypsADnquVdc7jYdn4RpudQb8tW9WG9sb1FAcvSyLxsj91Gx7JEUiTdUNjzQYCn8vT1",
  "key16": "2pyQ3V1uoMBVvgfp9DMoexozQ9zpTNGvDJUag1nzoC6NTTXf6RjtNDX7jP1qfyf7Q9gfT5z5nbcsnzzVCXrnu9qA",
  "key17": "31RvJRhTC5mH3Go7FqjGVD3j7gtjWkffzM2buF32Y2Y6kLALe5sNHRs7jxuZj7AE9RRgQ4TdpzwhWW34iGAyLXuH",
  "key18": "3ufkCNF4qZo3yzc79eGjS2t4gjJo8a6bKuawHEuM7XsZVQ3zM9UHvXs6BiLQu4iVmg6nBTbfeHjMJb22HgkEsq3k",
  "key19": "4YaWSJTXbDNgxipvcjXCDgEq1jFMt3cgvPNGjiuad8xLirGFfebh9QJnQY1aFNWor3rs8snCbB7gWACyiBgnt1fm",
  "key20": "4csTtEUhp43GYckX5JXbtcoXAWgARE49Z7D6TqXkP62oyzzuUPRmW5qqo9c43SvdnJ4Ajv4ZrgHc3MXAzMrv99jb",
  "key21": "TDhTYMSwLqo91z1UhofeLy337XEQXxz64yZRBmhfe96iUQvHWkAQigQD1tis9j4X86ZuQSLkzUuin5H4waByyjY",
  "key22": "4nJmpHYrRp28Qy2K9ACBUcmBGX3Eju8a7xk6ZLp7obZF7Sn7WqbfHyfJeZAG7HG2hXaJwB4zXRHRDesxdCe26Cxp",
  "key23": "3d4Zob4MsyDPGFiY98reEiSekadUsJrNTcKS6z64giUierhMeL1pNyywmCzmgHkGSkURfsN84ahz2aemDTDPbYHA",
  "key24": "HX8dwDDuGS9cTBaZUj1WD3UTEN93PhWSnznaCBXWxuwcKFsByYqqsMyEf9i8zyw3RdxycWZkHzgjj446k4xM1dZ",
  "key25": "27rZwnoQPrdJkS5Fhuix1GYJgV1HmKMf5WKjdxHJZgXn8yB6qk9ncsU96TEn4iZ9UdwibfQcqtpcfx7q6S3HezKM",
  "key26": "5KnckjjdDNiAQQMcq9dXzw9TotL3w11Cc617QXNPt6QGEauverkJDqtJZ3rjweSaswBKjbhqNxNZ9W7crAmjbUe8",
  "key27": "RomSQvcFMBThFc81pfv6Z4VYUS8z5Bk3cFhHNDELQg4LhQbvhUdCcibhxB66oWhqjyrma2RKWtKx8SA73gEACka",
  "key28": "1of3q14eUoV3MVf3nME28r7Q2u5jUP6pLyJhg3xFR9BNi8puK1Gi8zFr3Ynpy3H7y37oCNUa7unW2reXBKXiAmx",
  "key29": "5j2MMSrc141g9fHMQFStB2niMdhogqrUML3WYKR1pMA3p5cMxGEvCAWhF9SzrHFrPoC8jJRaGZL2mJkqtueHWt2Z",
  "key30": "5x4moGGfAMrQyrDvx1k62tJW6efdPwbQKrrW6yLkrhtoyFAhftZrDL3dKWtNSDp8WsHXJu9aUjjD9MGH4zs9xgpz",
  "key31": "3EJeKZpBQLSg7Q6pSiLSyBp9c5uSEWjyKzSDMhta77usMeBSMTz6444c3pVBoR1LKQ3LvvtHM5WgcFTdbrNwpAgY",
  "key32": "2ppuHEHijNFCTTqvyRPQvLfqwHy5h31N1mMwaEGAD9UTh3q3FuR1Q8JkY6jHnwPBa1yQ9f2veiLkkAMmqFJPuhto",
  "key33": "3fMmzjqDtVChphBNtKJNb7fxjtQeXdfD1ReisxbssWLtYh68XFJeTgXBXeMzeFq4aeVCbWYhn7evYVdACtbuiCyy",
  "key34": "4T738L4ri9maGBTt9bMNkF9onHREHAu69cYX1kDFj38JsNwjtAan9tytZvejBKVB8qMRCqs2Mh8ZTmjamJ5bTKnp",
  "key35": "2vCiQ7h8ZRGLeWg8ffgRXY3nMUWULEKHVHD1UvAzpeMZJAgze44wCWm2U2NgNBCYf2VbkDXe6fRE2ingkFvgno3M"
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
