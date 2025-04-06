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
    "22BkyGx2zUmXnFEtbswsawgiZirfvLsDRv25RivjciDUvFNQu773rQ4pRforUhkxrZrkFxdsuf988vvGrgrat3cM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iQJwMGGfGgFoTqgDmWd2GEhYw8g8QCPK1oYsfFHdPjuLXZkHPQPeSJ7w7wjdtrdgeMf4sk8Rt2d1U27tzzKF4mj",
  "key1": "4hj3Mf4cJLGWKqMPSyE5jzQNsJ1v8X369PJrTsDfSnBDzxajpKKSFCLr6vi5v3pPuhszK4EHVace7vgMeyt41G5E",
  "key2": "52Y4iUQqSsBNypUUESa5aZJf2yepZUPaeK2u8uoXPbHU3VFAjxk1SJsxx6a8YKfzTrMUX4QDJaT4DsB1NmKVHGmm",
  "key3": "313iZxb2zXQUCtKjuLx7jaZfF5dNuSZh5HfLFNdESRT8Cjtwh7ngTvR23uruUyz5vBdVbsgUvAv8YVwTWVjdkU7f",
  "key4": "5e6B1AhsGaN6fNnG9B95Uc3L949stvMgNS8FeHYt8n2ZREjisn48j4V4LsvCJvumBrFCFAP8f6sRLFTYGUDY45Km",
  "key5": "41jbk8ebtXjBDDWx3yvzTvtmm7eC7bdwxZVqr98eiGeFkBHvn1tv7H4Rbv3dB4kAm5CeRKcyCTB8uaYZCbDtyLYX",
  "key6": "3cjC4g2Bw7FoGHoZEiW6YS4jDES4kwXHYf292Na8BExf8GugsA6vM3TxXT68xFZsY25EyHHgzUMgkfjA227sY4RX",
  "key7": "3MU86b8thxYtPfGTpZ7epqpgMYAGzQUVrSw1y7Q6PpgTcybK5EMbWgDvWzXVX1YZ5A3fCiczHrtU5EtwNgt2sDUo",
  "key8": "2Y7yLW9HVspkYHQVdaKNGZfi2GBiUJ8j8i8w6DZjDU4W8x7BP8R3D7J7sPG264ZCMtQg5kL1ZUzXfJLEFfQDGHeE",
  "key9": "5wXfGJd3nEb5FaCmRPL6vWNjLKhDc7fxboXXprn6mYHDrePTYuNTBs7PXWrFyTkHySAi8XLn6Wzvks8z2JGYm6hr",
  "key10": "2HXh1qYNMujdaabf5PeazhwdNzxt7y6bNQZCR1VK1JZWsNYT4VnGbWAKZ8NuXVvt6ZXJqsvvXVpiakDKgd9Qa2EX",
  "key11": "4H8ajNnPDcpSByXGycPLDeenFkvDwFxVcuLsUpfgvhJQ6ZYbayzk2q8obwjyQUQYBftPdLQj17AUDEvJwjRiPYDG",
  "key12": "49EhydL4J6XyLpeyZPnwsbtx4T9bz7HugAUUb4z5LuDzx6wqPWre21E6qVPmrKtr1L5RZyXoomeYMYgiThr1Z5k4",
  "key13": "Dnpaw7nXxkbizaDsr6PRt5KueeVvhEcQAwAs8RwqkvFeQo5QqLsj3LLQAMPJV8DtdYmXRZ9yckaoAd1UokMRzFG",
  "key14": "5UvSFpnJDJcVyCSNhSAGF7ov2nwjmzPiB9Un1fSrhsUCTrcrMdDWwAGM7B7mj13rUWLKxUugcbA6dpGRJsH4LY6N",
  "key15": "5GLktT3E1JU7XjzUj5KrXnxYrqYniqtzhz6h2zE3fiF6hRzKPxwns7NLJLhayg1vGiskkEz2Pr3bEQyGRFdL4Ld2",
  "key16": "5sYMLxLMt5uifhaY5kR41qp1LXmY888ArNC6EUGLWdtjhG7TSVqeu2ZUAZbhHKGutVqj5kPZbaBhvQZbvrdUg94U",
  "key17": "2akkZS47fAH18wrBqh45vLgZ71o4S47M2fWJUWs9aTUKkJrsGCo3xXHNUQ1MJv7AV2V49yNi8rCi3jwGcPwe5cDj",
  "key18": "5DJCKB8gViAEhbbBFXuVKiCUMFi5GBtNdtM81RjbSBw1hmiUcu6fUvtGMcaV9qtnJ5ks9n5yeZZQFzfD1ZNT1A3X",
  "key19": "f4sgYV64B4KkHddYN93SFCMvSLosmHNrec1KpSECVQjeb98KLiyPvfpdRR23oRrceWeCTHJEFDe87snJuCuUKov",
  "key20": "4pcdqYctRCVYfwSNRyC3u9HSwPjvSrRb7tM1VtXHG3YgKaWM93tEqFbQTd5pPQBKpyXHcWwENFCAHuERxQbYJVFE",
  "key21": "3hTZCy5C1nbii68VtLdAoETGQEMMBEywiYGZ9ZrbASy9wS4YdCzh5w7w1QB9LMmcdyRQft6NboocMiciQW2Mf6VH",
  "key22": "57H6j5mFP9pCEgJ9uBHZvwg3DgzXv2NXFFaEvJwp3WfbCFM38rG9HnSd1QtyMTTBkW9s3cmt99ccPhZKZgMZDQoE",
  "key23": "458CVui52xmzcZYG2VR7LzufkAcXA7WyXVzJwzTdiqUxVKbSmWs3SnqnPTgNMiT7bGXYARunGj33z4ibMZ2r7bgy",
  "key24": "5wnFynpj3KmoKS7DzUXv9xrFZG8R9f7UnPc54ouZPDxaZyv9MNMGoiknstMp59CibvGnFc5ckvLz9W5HuqFxGkRU",
  "key25": "rTYs4DSrRkiQaBxFqZTpX3DxFyeSYU9c8awDKRZ8jUkJocrQo7KcsozKEMhGygBAdVXd5H3GX8upjU2cQLf542q",
  "key26": "4tFoWdZwYmFJM4XccLNjkxiRajAPFVayR27pSyJSbR7BWWZ1AU8WTXW4rXWVWZpADPxwj6PsbCguPWfn4vogKCeX",
  "key27": "3m2WNe7byKoC4yDTtVYeEYYKinHYoUSyZzsCU3T1LmQPUfkCPHgB9dmZvyjFAmjFXEeXpyXDy7xUS1r7WTdFw4en",
  "key28": "3fJqF9y95PRZGiHHB6TdYZtKKGqVQ36jBnCp7G9fnWKR84a48GKUQHvgSdeYQD3cDhn56yAotrmdUA9yE2bEeT4h",
  "key29": "4btQk21DrTAbf6HZMELAQ4QP7Lft3R8iMi863zeKPp791gSeRwMAQ3YWMcyRYd1tCvkKWLUcVgXZ69g3DQ6ieQL9",
  "key30": "C8uhTwEb4kvGoTRKggq3UiTYSXzthpJszpvBcpDjpZfxL84dpqXAyzPpvGfQMvorWmNeSrcCA14PdGB3aMFwZBS",
  "key31": "4AzupoHjgLWTxZ6gbBWMxbmDUzaAYzgqRVfkiUQycrnXuCne6EMzDHF8xnChiUuiB6iDZdTMbKxm9Z6J8XDfPPdt",
  "key32": "5tVyAk56Q7jJEmFSRGCJ73ccMdYZ1rLwFL2vN4WHEWbFHFSHvQbLvkoh67CP4HEJ3n44Vd2KTsoCXL4C3bNP1dv8",
  "key33": "534CWjfo77p1Xstte18VkPFQYKy59XMbH7UYkgmoxA6adQgjesmmh3CR1QFV4mdSAg7LNJ22LoLopDRuCAqYBmsq",
  "key34": "4oHwhCQ99RJvGm8ZpLkHkNKuipLNtB8nz58LszMU6Lau59C27WAtDvdaMUrzZV3rDmfZF9FJBbW7uqKbvHciQ76",
  "key35": "3oZWsAQ8Z2CfDzh69pDbHepQUj1gtykHjdHw3cWEMEyqZikYwfPSU56KB3bfcS72zZppTghHur9Apbce2zyDj9AV",
  "key36": "2YFhSjXwDLp9PdocNrqyyiJBP5xAHXBLPXSGKn1JTNFkqp1Nk5iXLy9K7drmLs74vS8UjsxQQk2SKRAT7njdk8zQ",
  "key37": "5rAcPZLLtffXvan9FLq4ZAgBvdCmSnTtzq8hRy2KMP6zdgUADwMVxxqtBQoT12ewFpg87TpJDNAnYqYmhdTFqctG",
  "key38": "2BVoLwzV7nPZW8X43GNJDuvpHfCdsdJfVPYohk4DFT2dCspwinWNBw6qD6N1K9tnzrYnnSdwB7xhKiYzjz6rMWi6",
  "key39": "2n73vwQXejuzAYYszLuPzRN4ZLkm1urZRmScFmBb6pKdPUnYi1hxMx8yxbnRpwntfYbVhD9vN9DmeHKRsGqMVofH",
  "key40": "KWo1TKK8gENzDmA2ebCrCVzpAuDNV2boRdGyeqWRfk3VJwuVmvYfZaiBgkFMoPEHNd4aWa18X6vtdw7quGhcCiq",
  "key41": "Ji17atae3dN1CENhY7M3v4Dsbd9Bv29csgq1EUd4SsGS1HztwZGZYfDsMQQPnDnJbrPVQiq4svawtEjGyqvKBiU",
  "key42": "oXfKbRFDxqdk6bGBftQJ233hkFwF3AeMC75uose7E3EMFiAGXA4x3F3mjUyeRw52JZaET9ord1Uy6bUsX5n2pjv",
  "key43": "4KzZuqWoyyvEEPWRnfsDxxfSoGrCfCSuRLiBmsiGnzRPdx6ukZkx9vmxahk3TrHfHkNBPYpAPPwhmhpJwfzbn1aG",
  "key44": "4GHnYVWubw2HyziXoFAhUQUKLizyxBfgnCaFLhy2xEdK63kSUsq7AvrJJJ2qgx2mrNt4oK8v8WV16uy2Go8gWZ65",
  "key45": "46hQeLLkeKH8UTEuYutEX9DxNe2BEr5Bt7H2t9L3exs7NNgWXwS7427PYECoXYg8dYifTLNDAHZS6org5vhgPu24",
  "key46": "45rs1JuSMV3amdkFk4NCFR4d1QA9NgNJddGdoQY8Et8ggUowd9tG3EZYA6pwf9vfhF3Bkr2Lhc93gS1ma4DEbTHe",
  "key47": "4extFpzxzhRrEEc7vnUZc3hPpY2ackDVmsyBjh1QpxnGkSMaedJEyGnPULKCdkCQWvGctnuuGBtKz9acAeD54bUm",
  "key48": "4hX7XEKdwc6rnJfQJMHhHrQPXvcpf14g9uBt6TBZ8duc1STw4z5VgyCWrgEEh975GkwRSAyBnidsofyanWcczKLb"
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
