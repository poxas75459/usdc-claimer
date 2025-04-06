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
    "4AQQAd6waDe8qD9eVmaVXZdeAbNZNEeq89b9J83FPvy8NC36bjtZR2D6Aei8wiU7DTzdXRiiUDvZeCJ49NPCVSKQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wDMbJzUS5LjVjcajMAxbC7qvr8MWqrGP6SrWufMAXQVEutW95cA2rpgDQPsQtZM9p2C1a4jnb4qbMbXcCKdZbjJ",
  "key1": "kWMybiMGkETqF4VpYWdjeis6tzB16fspAR4xJUAPrsX3NseW3bUTqdNZhqTv2KSn6LzbUtAQSA1kWHmPshgCY4Y",
  "key2": "3hvqvjYf5bTDh4MQtfmD7zerg1vY2gJt38cs2XkUvmSVHQuF4ZMo7JeDVrvmcRCM767V9Yag1bMYd9GpcP5Lk1Ve",
  "key3": "3a19h6ZXpivfZvQHtepi2HeJDcSpm8hjVzpp7Hzszfqf5XTV8GgXpfSo4JYEbJFFeH2GVgy3nwEgP372XjCzBZrC",
  "key4": "2qCLjPxaN7Cy34R9R4uf1eWoWyRyHFRHTUnWP8jJvh8DrhHZ7vggzzqAQR6TfkNfxin3in7tA55R6v4ae2M5bAFg",
  "key5": "32JHPrDj8qZKxFS6Ja4kAxgEM7taKQZ2T8i2GSAnsH7zq2EhUv8TAFhES8J3eoXPq8vw9EMEqXaoPRTbjLaTC77X",
  "key6": "3UBXrArzjBNa2QDPpCwhLQCXSfmy2JXxnPiTsnibisZg6Uko1Q1m9tSmfKpi6YJUQR7WX6Vm2km72YgaD1Dv7Rng",
  "key7": "5WCYYHhzHaWQkm8Nre3PQvZdFcP1VmPbZdkZcsojb7kkkt3apiVeTyBesvLUh5RWp8mqcSCuxUu9gGNfYQ3wiGLh",
  "key8": "SzWtPrF7nBo1TkuMsBhXQRwsMtQJ4Zcr5agguLUdbomeimoDrhAjifgbKfFSfeKvqSkdxz2mvMnsHpujy4M4PUd",
  "key9": "4KpeL7mjwCS8h4LZ1YpjCUPhm9bK8VhpsNME37ib1KPoeGdHUx3smKiN6HtRJxDwumEBAgt8DHCz6vMx6xLtiMNx",
  "key10": "5hMTvWWm7jDSQAuzaxtHwSPKaHgjqiC6Ap8dPbfmwyoRc6FMHRSNdksDZwoR3HmPUUdm2rA3uJ8tz79bbbyofNb9",
  "key11": "63T76E1U7sQaZ7Cgo9MQxWyttfhgpYfAb6L63nPAGjxxYoZQAwVZik5FatDj5wffxyLvcu2BZiFon7BZxA1cUdno",
  "key12": "emfjpYUrBJE8dvedHamFjaex6Z5ZDQBs5ZGgChLhGVfufRgfRTjrCmRFgAb2v2auMbDYqNVMQUeJ2nwVHYnteuw",
  "key13": "2qVWzk7UXQaubcH2EkxifpLUg1SqY6JonzMiHbQ9oTk8dy2j9mYpTw8n4tHREXG4Cx7bMEeL7aticVskLkJJa7FS",
  "key14": "4WfBapT5wmEX5bnd2Qw4CVFUgFNT8PZipBF6AgnjTqpfKuPqS9rqUxLFyGi6a5mZj8ww44p2LpPJHEckS7TRzkhL",
  "key15": "2Zq1qtUY6ynkbMHhx3zadmBiRR6oXBY1XEQKsvLjJHQRyqR6ogcxpZANZFLu3it5caudrfkATFGiKoQsgjPcGQdi",
  "key16": "i2KwX1jHMapVj4PKFyWL4ya67D68abrMCMNmZWMcQyPHsEo53ze6hWTcVMjbyAmvHZg4W9K1ZPdLoGszmKTK55M",
  "key17": "2USgjHhUeNzrxUCXx3hMgSMkTjaUr99GRVVwGkACMZzekfAGkVMn1M7jPfK1EKKaU4qPBXjDLvgPoJHcTQt93XNS",
  "key18": "5qCJ7bdRwSBdDtx9vNBR91AH4EZ5DX5Y6DnD3uPLFkjtYSFPz1eh6WVmK7fqE25R7FSqcNE9ti1JVfJXqUWFUbiR",
  "key19": "3urrhUy3n5MAuoavXWP2rXrMS6bXhBYJXi6Aju1zF5eMn5JjRRLfnKMNwSZZtDw98gw9q8zWY6wnL4WgE4yPuwik",
  "key20": "7JM42nLpAhV7jtP1rS8qMPbmWwJMXzz4sJvPgK9FuQZgxwMDc4yeathFCKW7BMPbQSsbmZgNjHUX3jiXBpxdpsH",
  "key21": "2kp8SavbEw7EN4R2Chmh8nprMsBFmWkCiDKcorf7Zt5Trohqexbh6dHdMEJsWA5LRGNysf4C25msGNzYffzFFXvk",
  "key22": "45TMvAMiwXkLXSashwXht5xsDJFUTLavkc1C6Vz4VeWoauLB4Z5fiWQQjLuCG5XW9AhxXSZpuv7CbQ51GSmWovKf",
  "key23": "MH65LzAiJY8v7wDrRq8GqeKiHQ3MVQBy3CsUNXePbGZmzpvhg775gCTVAKDSuHX2M8kQ7b5yjR26MF4mSwZxPZT",
  "key24": "2gPvNG2C9WNibX7itZWE8b6pRNahSrxxEs2sgv6JxCXWMjKDEkdngpvYT2oB6yhdjpqy4VtP46TfpPvEbo38SUnD",
  "key25": "2AZRLuTHUE5Vh2YKkLjC964nsdDXrkM4Wnf2D3ReJhNgNNZj3Tig1kxoBuwb63ECv7wudB7V4xZizSfoPeCwrN6H",
  "key26": "2w2CmFUXa288RqGNZftAs35MPCkYZVWSXvpdku6V114pMhEzuqMEY1vzSUEtm1xRjfq71QCVZAoWg5aZrKwKDDyM",
  "key27": "Q9N7rxwJusTzZPfPKLgPbJLXvXZCJygv3sb1zd9VrzmCQbNPjeNPyQaQgUb5MwUMNDYEakuwVCzA2VdyG3crqNC",
  "key28": "5tuRfDXVAyRTRHojSGfGDCeJdU7Jgona1vSDfusjeJCXy3r2pK22Y6BLcDKzQT5b2aGTRpHE2HMwQsoocPP5rMpo",
  "key29": "5EJT1o8VHkiYK8hgoanBQ5vUNBFw16jVo5UMjScdfYQ397572xwYYzkmTwgL3Lj47jeSzPCwDzaXkfQh4BMxWPkE",
  "key30": "34vdzaQDRqGyxqRb2CF9Q1CLRgNGCzNtpSPEvK3PzcAh3kAUYmDccvBMwNEUJhN2xsstSvLmkd82UoeerB9aGagQ",
  "key31": "5ZYrb9F4YnhgG4JmzWC26uQMtkPM3B7ZGPnQvFTPSdHVR7f8DcKUKy162tDZwU6NswqgCAnXibKaewr73dUwebSH",
  "key32": "4ea5U5enueAUrSAQYEyFA4sb66cxPEfatb5aJAmbWZqJyAkNxJ8MLeJ1NFxUUCYs1ZegCyfekJtzEr4pMNAdcJx1",
  "key33": "3fAmaiZGYgc9Qf2ksq9pzF13LjFLnH1DSttoUrKXdPsDkCfJ6te1Zi43fhkQBMbpzj8DsSNEYTTb7hCszeA5BaM1",
  "key34": "5eKCoBpvNh64dqrkKLmGYzRTpsfGwDnx5C7QiQihWFkTL4Ksfjdkb5rq5y8MagpcQdXh6ropiEUKL1A3aZ2ZxJsg",
  "key35": "NVHFsQRrocUtys9bZALw94H1KTUWqD1BGgdRfAvpdMLpQDkxkhhTVy426RiVT6tUZtcnuZuEZNTjGv17pj3mSU4",
  "key36": "3zPaRizcqd9N9mWgvB6jTamu89auFsiB1CaLgqgsvbJEm5T9yXA5vbpdteRySPYRxMr5Lvj65sNks63nbgF3wZi8",
  "key37": "oHRx9nxLbvTLZFFXwg1pvZVbJ2ZHiQBCy1UorPCkYf7WoHZgu13BMZzigkzPPKmZGjmTi3mwREHMDoU3YLY9LMj",
  "key38": "5S1Fv6kBMCfRtfcFratEvQnLf9Fvky5GM3mkHxZzzu9M1rsnaDHuwTYdPBoSsxB78mCyBKUYJzJ4VnHaBXbtCNXU",
  "key39": "3btAGacNySkw4ya3NaULRsRjwBKCNXUSPssPazTUacgJq6vjCSzNCMCcgcpXvqhLasB98MztcojnkqdHvxPMADGT",
  "key40": "2JbD7YQ7vsm2SmDTY4R7sFKYNX2zrsqcvZxRFqfU9dvwRwzUmnD9edWHDLEmGk5AmVM4KKdY8nkVJQBNnubKrrxQ",
  "key41": "443gQkBQwvq5gnFa1pwA21ZKjtwkeHMEQjCCGaBK3eSV4wxPdBqJ25YosuWYEbt3r3SyLE3dQcnHxP4sgULPVZdV",
  "key42": "4y3yW5eZY88yy4VLtV62J6ZSueD5GiXv7cDZUyJMJBkgtonYyb51Rm8VQTBTTFYUNdKhivxhLLyUrHcMVL4gKiDq",
  "key43": "2FhUSVyxJn4fkjR9eehdtUG88Z1PVEA7cVEvJ57n2zKZgx8d6mPEbaTbZow14beoAT8EvJbTdM5vXypYeevNBz52",
  "key44": "5TTf2VRJL26pziWrtFi6x8WFDSutDdcpjngpfHhxND3wg7w1q9HukmrGnh7wWMxbJTQVXa11BY1s4mYyr5A86nrN",
  "key45": "3E1etN4cJZPyNNa4NM8QZVBsbNX67gdmKGiWxhsKAcSTLxKkqxahqAn7AcmQ52pHVK795Zjw8Wn1x6gwuQDXB95y",
  "key46": "cWdMbBrJ1nq7sS7DJtEuadhuaXCtvqbqLWVon7do1Jt9NCK17CMFWFJw9ebN1fRwHAcVeaFf6tVxMmBABAXyjJj",
  "key47": "5BdZ2om19WNQMPAnjeB1w2jw1JN3EW7CVpa8vWme3KZS2UAUkwxJGy4zH4byMtuB1BP6udzQdebjkhj4KPNSQ2AD",
  "key48": "4fD7vd6PgN1TtzfER1AYB2MgHyLookA9UBEVRH928WrG1UvmGYKcFfhzjcMgvPL1imW4Qrt53kdq4vSQW1jtnvwW"
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
