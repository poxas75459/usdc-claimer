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
    "3mHbvMrDfLvCahFqJLTkWQQhEZN8m3CjZuUPZCWnH8imADZY1MgYsFNYNFNHeZzgdamDEqtb1wtcBWcJiaoLPJPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "449EMi3gQdetmojTvy76ZD6pt8K8QqhxqpN3HreeHDNTVPHLYhjD2ingvV3pw5d991qXyYFboAxUVU1XQvmw5DYg",
  "key1": "7RN4U2cVRYvkkPy4bAw8FFDmvckwqt9bhJqkqsMoL2DPkp7fTLwgfE71ZdJwjB5ToP6CDSU6sJx6ZEtXhA7WMdF",
  "key2": "s3k6g8StMyxe4U9wNgFzTMqnymXfNy7WWE8K1PeSsXGzpQFghZeyqYqdkohFaqXoxPVj3x9U7oB5X8DSTpbfoMc",
  "key3": "46VqopVfbGrNytqSrdQMoPVKUfpG2UjxTg6BB7VVR22J2WTk2HwDmhRbpBfwG6iBvxXHsw45GanKz3iN9gnU3dYy",
  "key4": "5AxtCgweTxPJjEkHrWMigMc1yazaJXXzjhQx1cFtj8G44WShcWhSQwAuFfy3som7SFrsDuhbT1hvmudCnfFKKKfY",
  "key5": "263wMxLETUSxq71HJWLC85T3d7RnDsREWc8ZX5ryaUjsd8r1zDtar5jtnidzJf4WQJMMNxfrHQ5HUF3YobUKYNYM",
  "key6": "2Y5sADBo9fwCdT4Pi47q2v3fEGpvEBc2HVvjCKHar36WnckZMeHq771L4fwPXZepRdhnJiVjVfChtaYgawA35Pru",
  "key7": "3NgWEorxNXs5ck9v3PC8qsKKKEPdAg3gbtA4Ew3yfhoED2kUFCbqy7vtoi8ruUqtTGgcsQwDsBzbQ9mntiTUvNP3",
  "key8": "RTV5Xjmb98PQXkCyiUabadjy6jaUr4MMS8MENBxi1iYHTyckd8wPpGJwn3ksBE3up8Yf2NexRGwmGZ9YEGrmj7Q",
  "key9": "4MAhDEMojuVRurPnq62ZUoqsZFvRMVi3AfjypBLzZSYL7Xswx6SeFbB7jAZV8nzZXQi5QCvZj2hFCSXT5HYaV74e",
  "key10": "AUtc7jgWN6HRVxRuK2hD1MhwYJ6Us1bDHZbjbP6mwkrm7691fYY8Z4yEHHwQdwRQGT9hC5c29rdJ8eBNEH7QkuN",
  "key11": "38UUzuemYYGT7qdfkxYyhePHYhu3SQQZaS1gePfYL4gsnAjKeZMfFbqWeWpdVUand7E3Anamhsyg6qorkMAvYyZ1",
  "key12": "45CxTgQC5CYNdBCumJtBsGi1aXsdAL4Ky6XhPRjsXnKZcUbL1Wzotpy7Q7UH8EV3LfchrGdyf3vaHpKTXS3AMk63",
  "key13": "2d6DK8FwtzJk5EqnvkndqPdX7ig5EYLjYiRy6vpnXLB2rFJ2WePGziKmdZgAEyxWyCLZsJZ7NMaTB3B1kF25q2Tk",
  "key14": "4UPE3DVKztYr8FitCH4fVALneiQR3REFW5d62R1iAMBmjtd7s2L7hxipa4ssKAuhqnNKNYMyY18yJX1RECFHyCFC",
  "key15": "2LTe8Azjnj6dz4LeHiWxiCALi8mrcCU9cAvmfPjsRPtuFDLyxdrdSf3P7goSGzFPqgpPxBvqhqYEVnLThwMcZja9",
  "key16": "5bo9Pdc3naKedLYqSDqatSpGEcXFtGK3hnUZfmrNMEDFbnfi8P5qfcTEpUPqUQcCG8Z22NmcwsWji6TtoUMLoCDn",
  "key17": "2g3BkQ2KbU6Vg9nxBzUXDRqY77hBs7ZPuQKFTDzhmCzWtki3XQXPa8P156vBTReEtzYzYPe37HgUmsCk1NRVnDao",
  "key18": "65T2TAueMEQ5ZjNhNGZnzFvEbUMDbtLhKNjbSZKdKjbxpHCKW4RKETvP58iaFpcL4U5HiWWtdumhB45V6PmywSWv",
  "key19": "3AeEPMbxQ2wwsDE1Eo9caz3DcxGmjPMfyqCqFCUntLL5EmpETWohE4sfZJkVziWbGGcKpZGAfkddgdGEQv4QtFa4",
  "key20": "VJfgMyp5WAcwypPKymoMPjSMkR3jteefmTyJGTNrPyU4rpH4r85pRrwQbg4paeS3cR9dmFfgShKN7aduT5CYax9",
  "key21": "3p7aJYrCkgZrnEff19mdNkSnqhx6JUSdHD8EJDZxMWEqX6NtXxbrtbwvh8E59mCrBTT9NbNJGcVHxx1KXv6Zgqd3",
  "key22": "5qwnfZ2tKpiP6cetKZsmbyBzbHBMEQgCPtMZHkZfEgPmxG8ErHD8hB4eC1KCGqfAEV2TCDDLDEtAZCpyJLjY9YGJ",
  "key23": "3kLpTwzWxDwB2NrkiiYPEaBPhwXzVm424caLtAgH3XaiCxc515sndg5TdhJov6BaJPPpJqbbH5rR5nkumgCR3awL",
  "key24": "2KMPf5nrwPGT3dA4KNQFTW1RGpEpuKfe5WZpWWEAfjhMN3eFKrrh1BTcpg2v3acJ7pFGYC1JL8KqaXbo6iomZjR2",
  "key25": "4ffYN2DubLzCnVCJt2aLdKqqSNSSRzZGQ8t9rsCRPM3dmVxfGDeVYK15TdbchyWFtoVQHvrtnNPaYnTsAZQnRiXe",
  "key26": "4dfvdWtewodVhEmC7fgLoRksUCXcv967WmvEcGTR8FQFt7SWYhvL6WYJ8axHV3yBj9iY9pZeGzhiVrvVEtt4b7RB",
  "key27": "5WP4HmKAnDnDcxeu58SVxr8S4jRSyisUhiJrc73LuowfvftXB7musrFBvX1bqtoJ8sCt3s4xxyXY7eae1houE3rR",
  "key28": "4WGGxp6DPsimcMxUY221Wvv5NtnrXpbn3ysGxga46kHXHMozsgJQ1UE2JFdsGFSEoQWBMmpPXyxRjYaMvEh6VPiS",
  "key29": "41KE4b6umbtiWK29bQLiT2TU8SFuDfzbvb3ge3bTr1j8mzjnLvfGdju3aNiDMYwoBSLz3qEwptM4mMVBNgZLKJTV",
  "key30": "XRvHx4DLsfWhkpFkSmVyaLmJJXJ6C5EfDvoHSNCafHHN9CixNhNcA74ioVEnowJX2YvDPiEDcNDTEfWfDfB5GTY",
  "key31": "5Nz1TH9Q3vV47BYaYp54YjQurRybmTbjvPCfSAzbkwHkLTqeiRHZKPjmSS2YTv7inWGahNsNozZffU27yTnJW4Wk",
  "key32": "3WrzjbittobLN2pacriSofmewh57P38Jjsat19HEUNcq4cArATnG4XErNDjZ4hHEBuCmHwsLoig9J6SMssnEo1Gh",
  "key33": "HWLqSCF86usjtK7q5UTTc2A4vn3YNTZCWZhnMPTy8CQiv6UB23DiUY7QWsLZ2813x6RSsWA1hMd7pox55sbQTtQ",
  "key34": "4VhThasmh1XvieEs2WuhhiwzMp8Ab74i4oNpFArQd3sgaBaKdv7HxNvhKkm3fb74uYbPhVV1Pq4JPzBDuSeYWqJ2",
  "key35": "26fZYTYUKXnMGLXvki8PyyF2StfqrdJvv8MKQG5r8nU2ofpYA3xF6odTDJhFrsu9uQeGJodCmgPdc2DBXEiBug67",
  "key36": "44STA1G9C6MeGXNhrVURhv4pEFSeCmShbxEZ3y9MpbtqonXmwYZh9n6Qsc9oFPtFjHiAycvWqq9M6fDHvqCzdwad",
  "key37": "3Abh3vNgF8gk7GxPAEqa9iftZnRUD9oFBQJgrnBdy4hJRjMM7dbkN1Cy5Vawmx9rgGB4QXYfYiAx4EPk7swWBkRu"
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
