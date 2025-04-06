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
    "WfbeYb8ZPvmvNAJ1g7Q34qS6Jwz167H1Mr1KThqzyUzuAnsStw4jTC7DC6uCkw7pZFSVzgfow3caWVvEuEtz9oL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28CbSgeDUPyoB4Tdt9k7crtj6QzL3PrvjhwtCGEeG6sDcH6HXW7idFA79oBA2jA7wQTiZafg9ekxcBgdwv9dG69u",
  "key1": "5u5QSWZTpSPpLbMXqYbHmSsRdNyawNQoSeocChFAFMgpiFTm3d396KyHUdoypT92LHpUqt8rzQZpGG9mjvDVzApP",
  "key2": "3gfyGh3HEPP6tGoSUUCU2oMpYYQFe7C2QJ4SDgB5u6yViSBdDH8qbZFyo6cY8WHdCHHDr5rm53ULyU713UC8k4QN",
  "key3": "5ZN1woj6FiCbTrZpKfHsTJcy1fkne6GD4N5c5hiHzBgGs3e9BLmB9Hh6gXVQRriFywNZ2KPKmDyP3UjWruKPsDp7",
  "key4": "32hUYp1wWL8CuGPKNcqgk1HajJ5w5tE78e2hgHjvbfEUBEZmWoddjqsiNd2jaZ4pz1dqQAnpknc7c7ypSqDFufF3",
  "key5": "2SPRyghVuokF8brfj2ChQ4hdiB8Ct739neAh7Bk92oWopphHEJ8yD8o9TRhE613fdtUSeKfc1sp4t1ELPkcphYas",
  "key6": "3PrdQEa4SPPCZ5vkZLUphdeiSZzkgVatLtELRCjdd9aewdX5EiTV4FtYAzcEW3ngNbNXArzGX2ZssGGDJA3Dxh76",
  "key7": "4sZphX76z1drZeDUG2E3rgBE3SZQhFmRneV3NBJfETBRXLKYM7eycp3KW5dfZoPcubXXbPosFkpndQ7Bo9oXEa2j",
  "key8": "vcfvfUgmySCBRge3uDpGgd9MBRN1DY5QfzMZzhAqkGuGi7At68Y5KricrxY93fZsahVLFDrHiAVTzrQz7GKS8GP",
  "key9": "5rhg1DnfhRgecGg9MAzovBihiP9yUGh2CaBQ9uPxjA5WAP4YqnQBmjvpap7ukHnThjFsevZDZFuJbWL5efwC7nnN",
  "key10": "4V1pH53LA6yMwGicc4RgeZxoDiUmGA2261NZetHjcFZkFy2ocCMZfVC3kFTCAJZK1Tu1EyR1cRbLU7d5BNy2Gn1Y",
  "key11": "2iJ6qWg8Sud7ZZMkdkxAeix5zX9F77mM5uegt21WUW5ezaAZAVQjRMJVLgQPoUuLRz8V1JXw4UTbgiupepCY9HwT",
  "key12": "3mXLprdEkNmRYJ9S9awT1WZy34LqUywCwjBVwG1a5mM9LuSyKDNEzVy8uKP3xtXyRkWBujFShCNeHtSrRG4jEhRh",
  "key13": "2wHYTi9cfwmgxQm9H6HcBaXxH8G5infEAZSfR67hLT6VHvBuVuL6G7jvsnsitQgKBh751b1pJjTahfnjbBDGH4ni",
  "key14": "4P9nFz7eh9ndLWaRfZZRzdoMGPUf8CVFqf8YXKJ75D3eQp3BEzpWwh5qngkbS8yy5ETd16LaYhBENMnHpF16uEEY",
  "key15": "2ZzBk7tBWuGeCmZLeQSNSh4V31TNg4f69aejJ8BSZDVKZRT7tUJi9CmnCozuSVsxSNQXtBbfrnoD4juG6W4kM57T",
  "key16": "5y7Nf1fR6kcFYZb14Y26ypHXKzRDEz92fbpSBnk68iHbNYbZMzJSaDWoUMsXJxPow2v7sxTB4ZVrF6he7omLiUYg",
  "key17": "21fozbEtZpxxaYsr39azLtFZ6iuByP9yXxjFMgcKw7aokmcFy59eKZbsSvNqN4DQKjyaYkUqUSwsq78ARY69AM3m",
  "key18": "4RsDYHZPjjoURFWW7BFeQjtXXmSW82jAgQAx8SpdWV4K6LYNGeVLjbreHXphVDxULSKMorLZVphP1moPsxi759nC",
  "key19": "3xJzy2KRYd6QqE1pcTiEXCWmSo45TJB4FJR8zFjpLmFvHNXd2m3K8ucytvwTjupkjeQ6ycK1waxgbGBAoC5KFw3A",
  "key20": "KSW5Z2eVYW2ExLhEZTN8enuxUdjV5e7AmWR5vEFZN2sa7L2mEroRBm1my4fY6pYkMhdG98ZXdw1UBBtF6WSahwb",
  "key21": "3vx23W6fSD9PXByuNhtVZYWsAT2BmjuQHiqDWjX6E1rqbMCUGAEesfAGHGkVk3K7QoBFMYnYs42qxiuE5mvT7Nqd",
  "key22": "5DgjBEbDtqLkHW2GT3y9ZAdakVNHThPAp1j2n7rXe3TMvVALYj66QAosVhov4Ttyy9rZZjpxVn2RcaZs8w7KyLSw",
  "key23": "21bnMBifDDPMWYE9HaAfq9QXBAraMJrAydRxCUFdH9TSKXYiWWSBmyLVTdASEwbfdsaGgJToF44HGfp3fdHq31uE",
  "key24": "hF9Us3wjFS6VUf3rfC9ee4PBdX1t11krNhbNJxUbEW3ty2YopcveNJQbcUki4RUwjs1yiM8LczLJjX5PR7oepRQ",
  "key25": "3tzTfyDKR45EvvDJzoa4ZudeC8j2VuUeD3hkn52UoQxJFPHpzdWy5V1AYpb57x6QCgQyY9eyDyMhSrY8tUsCs3ev",
  "key26": "dKTJvybMmo3zpYfwdr4GWKE4if11MdMJk8AxmMcrJQVrE8pz6iVRDp7RUE3VhCSE4cCSb8jJ7ZQcNuu9pck9ohP",
  "key27": "4Wwip79wmSMvm41tgmYksonP4kFNz3GrGTeyQwRy6czAMqqNSC8FmZ6xypUTqLRgWXf86JQwwzXzvjXXLDHJsJMc",
  "key28": "7gikdp4UYhMMtxgfncAJhRwccankeEiNyioPyyisN4TgrY5enVFJnMSburSDszC4XtoUrZG6WwTB4wdciciyyET",
  "key29": "3ao6qGRupNf54nXPeGj92TPq6wwUhtkcuG2DZqabS48oDkCWunv26TnGB4cmKa8rpQHLmZhcJM1XzocxDJqrj8NL",
  "key30": "44gwMFUrfS2Rmnv4RERaCWe8DmtAEpku917NAA6vUieWedcYAmXFs5K7buGihosCKQPfrtTJf6nybsvpDgfQzk7z",
  "key31": "5i24L5QpASmqK9qHyAHyYeDs5cqwGHj6Rg18a6i82WMinoe8E5HtMQmkF1vtSr8pb8ngyVzxN46k92q4Ndqd4rWU",
  "key32": "3LMkE6T23DQ8zgmtos8kzhALDKbMT65FEsyxvkB6cTBpyd1RdkJndH1qF8B1qqY4KBVeGFqBxvMGc7f1zVg4dpcV",
  "key33": "651FzoniparSCyTViiii5Hm3aXBWRqGZkNgxLt6ftRU5dVWuJ9p3rgTCtQzD3WaE1bnkXQHE62huTqQAwRtnkqo3",
  "key34": "3LkJSyxLCrK9yNfCa5AkHSLTiQTqoSeBqE35vAzJGRLiy9T8JrcM25XmDdqw7xZ3TCq74QAMDjGpapDuzMX8itfV",
  "key35": "6wqWAc8QvFssXUwcf1dZmMLCqcJYTHDPKqjDoSec1mzic1HWVR4Lcc5BA4LYG7DbfWcUyCwCv3Yd2i1GJAeBAQD",
  "key36": "2M9sNZr9rNgHTLXsXjRFjLKZQGjd8ssaLvcFeNSp8363h9kGouhZRofwv9wHEkxXMSHkmsUkPNQRCr9anqbHCa6k",
  "key37": "5E9X8TRmDgfpuuTQyrCLEamFR3o1YqVAWFYq9288mCXTAShxSSMj596B4JDnxGyX3BKvhnS6GAHT3i5c68Bz7Bya",
  "key38": "2MzUrb3gUHB5eZ6DYfc4jajPHUYREtUnJaSXswufrJWfzdyhtXtN5qd4S1ko9bd2WpiHJXh8PHgEC4qeaGiVq1oh",
  "key39": "4HCXikgxZRjawrAy5is1wwLoQskgMfMY1WKw2HBA9nR7VBcNXQWxreWeHrMrxSuZEY2X5ncUCZ5jAJnc3PA1hoM9",
  "key40": "4k54DU1vMuZJR8k1FhMVTmgeaLcAXuAa5Qnxzc3pam2qovV1nrvnHC5p9LpWSK1Y6y71JkSXMsAPJ6SSQr9WNDSf",
  "key41": "5azRmDR8MLDFRn6tX2YPerEUFALku83X7euGzFVr3XBZAGa2ag6vMn3zq9VkjaLJ3Supn3bWZfprvkYc1S1rfALV",
  "key42": "ZQWv1wWdDPGNFuFSqhacBn3UBfjtCBfrGuYwaC93pGvVZbnUD9eeptjnJFfh2kcp4wQ7eDHPJrA6mGLdcdDbK3b",
  "key43": "5bdzfmeAujAbqBs4BF2VwNnAsNYL6gwDMfAPVaSbnFEg1QsjKfPsinkXeroJTP82DTkT6fFiSzXBTVEdszXSEExc",
  "key44": "3JiNVkd3yjdHb1FKfAnDHDXNMP2zQ4dQEmFk7Q2vM6N7euuyp965oqMPkyycxp4XW87514eank2gPpkX7KgoA8es",
  "key45": "62y4fEBphvtzH6iLZgedn8EX7fLt9LTPqJta8vrhy9sPA7GQcEwFiWApWRQdfNM8hGRTjUUSbEcMvNKUxu9bAoVp",
  "key46": "4qc1rLV4NAXL2CkHSDehjqnesAw8kGw89xocwuELCwtT5VzQtZ5dcYCqQDTtoXJ8c2JZTfjVfi22tX4fgbBUA5zL",
  "key47": "ize8RArNupagdPCjEtPo5u9YCt7ca3GtqDQxBenAJu4AQJq55R4heU7whykPF1mgWoU6frk4ebS8pHZ9y5nGQ8i",
  "key48": "42C1GBF4tDsi5xZ3J3EpA7XqAgLVQwxfTAyo2dQPa5rsdWkgkkg4T33dVeNTU3Stu6uT5oKt583Vscoudiq8gGHT"
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
