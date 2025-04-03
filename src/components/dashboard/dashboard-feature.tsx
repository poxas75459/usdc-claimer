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
    "59NMtppAiuRfpf9tdEYkcdBhLNDd6DH5nTFm5YkZ82QET6PAJZ7huzcusjSTNYiJgF4Cfh9vpDW7E4eTwbq5Kfrd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jcvEgNsZTkFVzjt8g6iHDJ9NKJj6oN75yJMEwbHsXi7ycg2aPPsgb9KU3trBQnbyFeFcMRtWB4jJ1g5JPaPPTwX",
  "key1": "3Vzfyfph3KsjqottPtEgKJoxDPXwmivyphxnkxSw5D8hHHtftNW9hNFRhg4tehBRvV6UHTb2xZEYivHiAkdWznEm",
  "key2": "4qLFxUH8dSTkZf1Xd3chXtruR8SrWSxRYVLEKjyzNTcf5dUB25wqax8bEtNwHLQhV1frBFNMkB1ZTkgdjDKmPqLk",
  "key3": "2fqah5dRp9PR7wYkXbMhaAHubrKcwvTuc3hU9EVediYcDc2RFMxGpmKm3Mc1WL9DbbCZZiLqrNoiWr7iBmYkbkw9",
  "key4": "GyYYJX5vtqVjmWpssszrVbGokHYSG7JRFBugDCMrPGR4oKn7qESPk5UDSNWDk9QUFfZ5BJ1LRDy6fwRvLYXGmNz",
  "key5": "4o5fbDMUmBusRSWvBhe93JLSJaJokL3chj9WJMjsSCqtRnGHx3JZc2ZLhmriYCZ3xnwgNYDfx3Ptpu6khQ6HmSPv",
  "key6": "4Vy2NRohxH6itdXeUimFM2UB43K5jakAUCUKDN85csmCJavSrSxvQqai2NMwAvAxfeS5Uc5swEqq37mTrZZTcGVT",
  "key7": "4wNWZVbTSXDAZy5mccaVXvgt84BaCHbw7HnHdtBhYbMEDN4aEbYSPA4BSEtvzzexabuk6NKRnttrw1F4yZK1Hkwt",
  "key8": "61gc4AWSWU3fRUWjB3BpKCYifcVJTEPsAC9YSzfpysNAtY6vVscnEnSwruY3dLSLvRcpDsWH6i2MjQNFfyFXUF6E",
  "key9": "5tFXj4mpYJyvt51Q6YE4rV15Q5RrJsWB6Uq6cmnA7jXdKzQm1LVYPw6bnXFdL42xQrfYJUjxUQigFHw72rDnGamp",
  "key10": "5cCXTEwtTinkh8uB62pYmvCwVs1KtXvUuB1MEE4s3b2MQxp7VrvMHWWL4tacF9qAeAg7kHFdpb1FhADxPULhAQpb",
  "key11": "66a97W62GwYuHxRS8BgsmftYW7thD2DgV6C43Qd788wkDnJAFHFP8F9xGVUT4P7rf2ETp7KC3rwJPab9zJd5Rxuj",
  "key12": "MorGuFbe3XuURrpCVTQQSQ8ppmW2K3ZTpV4hR3bcwnC6nezWM2qxXAF6DucXqcd2YV5FgEGvSinvPKYkkbrmrkU",
  "key13": "34cjbEkvpFCc8fbiEDWsG9ymFdcXmx9XMSYtPZWAWLi91gnphLD3HRPzP7TYjccc7vuhpRB1bXRtjpPXbVnZVL1q",
  "key14": "SGWz4u3eyKSVpceHyCTFr168vCqVmDtXthrMdqQrzKiXDqLC1gBy7eWFm4TdUQ1W4TGUWX5j6fUr9dLnie9vCjp",
  "key15": "3TWuJP2eVLVd4qm25XQbn63aBeTADiQpKHz6gQAtBT3yM5PHbfq7rC2rNK2bc9VJG7EFdXe6ELwox7orEyudpf7k",
  "key16": "2cVmZjhCe1nwVLYXvi7n7f57gHdjrnJ3XQHb2uffiNEm6mevkRB7NiMyyuaZnQJBNJuViewdpd2UoxVpcUBogLzu",
  "key17": "4XfvfjsNxHDLPrmSdNuqxEV3ayWuuZSjkwbw8yotUcNyQ7MKvT6aCSHNuYVkEgnyLipijzPZk8H78pX8VsT9PNhA",
  "key18": "4DQ7w1cgnkVYn1JBuFQU1k5D6cnuUn8iugaUVpV8G8m7xC8SW3QLN2XuAdK2rW9npypL3kdXCwo1DUshWAGDEkaA",
  "key19": "fFDnUL2TUGTuc1gZ1vmet2n6xS5EdSRf6Vf2TY1UeUNS4F7bH9SZqE28J15LyU2v7vkYRRWZwi4DwSdYguzMXJ2",
  "key20": "2wVwGx2u3vk6XUZctSFkqPUkURMwrYyAUVZuMzaTzyqMzZJqKwkp4CzhAsniUZfMfJDuQYVNJEGCRWs9aLwWwEHP",
  "key21": "5FuKTrqH8qoifEbbs2FUoLZ7QaKRqB3xkHUn7HNZkj1dX4ZbaAcQ5phZieLgJDFnwnqbW3zcDwAXDv21NeXCWvK8",
  "key22": "3yAJKvjV4FZb7b6v1s8VWKBAX2mMj6QUHJFmuFPGB9CoDKq3bStooSJ7R9rRznzZk5s3nxqaF735cC4ddqNCoTkY",
  "key23": "4jSb1sNZLCHK33WrfJYFuSYmSfW1VzkkmLFbdCgjosmG91i1pqT4SucWqC4gzxqWihTwXfcAs4bLMyxRtE8DvDt1",
  "key24": "2ENA51RH8f9Nhkx6zK9R1oEoFPZCQkEjWDru4cJJ269xPUgUBYv4sthq934rjoq2hPKNntffYsAdkHjwsro1utcv",
  "key25": "hGC8aRt3WWB9GkiYJdV2EWNdiYMTJwcgRBi9gDx1fVPeQYNYz4W3ZV1HYyw9A9zbbToJ8mgGtr96kzDJBqfV7ao",
  "key26": "51GPtpXigYgkNAoAv97DxVf1gyR2jzLEEA68soqF1kxPsEcMJFPLpsLLzSwBHs2zjo5hq8HNvYprZVwrpeAWcTZd",
  "key27": "3xqPbDmEXbiJpjdQ8K2MZmJuj4EhNzHSbPvxXwa3Y1vRNKoEf9ZogjBH261GTJrPN7c2Lu872a79eFKuSCDvWQf",
  "key28": "4uXccJGPzG2sdqmkwTrsFU9RCmLPMnMMy8bXv9LcV6QX2Vq8iLmfTHNPnR4sZwiyDUht7goYFePX2jadJLcT45Pa",
  "key29": "Zm5HVJgjjJyHPVAkan9hAdDG5zmybTKgvzkFTDv7HtvbuEkKqW8MYrxhAZ5GpLh7gBVqC5hjdpmvPB6d9muB63e",
  "key30": "3BpBCsVJLXXvkMvEZngrTgW5qCvUGvixcSCkAnBun6cojM9ccqKcwsSc9AxQE4xu3xzdCWeLuc8XdFGh466vQwis",
  "key31": "3kA2EkBJg1Ki9751TaLCvmMMPrL4vYpEv6JuVcrLMcLYz65y799qhUtNqBYR8PhxNRJDDLryteXnuJ4JAfFsqhS4",
  "key32": "434MPTZnGXYPZWNV6cjarCns7KWopVXkAQP4apcpBMXpTKuX9q4edvntffJn9GYjqcf8UZBzPLN36Da8XVNzUvob",
  "key33": "5zsHgijxsYSwTEHNEjkpM6fYcawoNWBQYwTKzZbeL7wr33EkbrESZ93rE6h2gGXBLFao1jB9DrZEWybzDmYrgn4s",
  "key34": "2d8QdkgyBBameBQDHxLYbFFfz6maEXsyKyE71xniCRWRgNpqZgRb7cNgRgb8LmQKZHiAt94CwyvN3PEz49HfxXGg",
  "key35": "5YzZhJfH8BbJ2q333wUiMyrD1FUSR9ppnRM98wWM2RZmkZPghpWcVJpVcC4WMiNVEgg5ium5rH6t6wHekdS32uiT",
  "key36": "xA3eSMhpKBj191Lxf1LhSyZt2dWKWgkfRJZkzKhVSTd2YcEhDZiKiz9GYQ5iJs62nPrtQvL6UUyMD8PUc3goXV4",
  "key37": "2vnhHMaYgoRhJKmFh9kAnrZzj9DyWwuq3EcMcha5bfFT6361nYY1HWfeD5yd2fv6c5wfnipYbkeWtd9mfHndUJQc",
  "key38": "4FgLJoYm7VZRU959NimmpaJcEQWea3kjRntnUpbEJpWwj32GbkZWKDarNL9swSppa8p9GyyRXs4YE9rTkHDtD6Wv",
  "key39": "5pbnoWg4EFwcpnS28caCwaY2i5x7pCV1ifTvyWBPa8SA3H7dEDSP86SYYCo3HRmpQKVjvAPjHoFQ9FNUGVQ5w4VP",
  "key40": "4uGBTeFPHMkHyucPjGXMwWkGF7UQnsYkN8o15dqnPcsV2YjEj4uqXmiEZLGeVyiNFC2CE9nuhQzGGZ8PFLnz2F22",
  "key41": "jtsx5sLBYhjP3q5RZ2GXNtYk7RLBeEvaoFpiC9Ujj5DEua51TTmjA7uYJuBtbtAQ7TJ8ssczX4S983AH8rQ3RaH"
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
