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
    "5D5FvwvRExJ8gnh83LFqzTr3aKHgUHupiANgAaTiKQUYZN5ZasbHFada35WJmUiKwRmkivQY8Cb6KmU1tAUqCCpX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66M5xmbcrb7cfrVUot2mvkjzHVx9RVW6JTx1ezDP3iJfTu7xmDUk7opb4dihdztvoA4z9KG42D7iv6CaXrd5PMzs",
  "key1": "2F6wLSGvY2sV24yC2thFqkiattv4HEvw1P9JZbNvSCqEu4yy7iUagpbCm7hmciwsr1xNi3K62SGcufippVoqiK17",
  "key2": "2fdPsZgVxokZgkc4TT7LcnKEd4MR2wPvuZhATwLEMmKDD1EHYwp9dEQewrEmq59qYkKtmFnEJWAY9KHHFQyJbzQS",
  "key3": "49zWz6cCpNpspdAAikVPwQ6Vxr66ZvbvAPo4vGVSPqXLq7nEUKEcB6zk4ikX4Doz15yQEgxqd6GrC4rRtC9Ef4An",
  "key4": "4UyuCJVeuyg9di5f5RETuNQFy75hwPStv4Y7aLqn6Sg1erDbjekxVc1fxB6AQwBaEkPF2YS4f71gFifJsmG12Wx9",
  "key5": "ivq4VJrMkpMngRudaQHFxmj1nd3mdQ4nTDUXTsoBpCB2xifnDQ6K1mUrQ3niuPTHCY1L8FtyQo4eVEfobrgNX1e",
  "key6": "2mnppV1ck9D8E7Dj8jwFFcSv6XCv4fBMRJ7SaxwvssQ4vXcPfYwn4jX1Pm2a2ppAEJ2iGnoMjZy2Q1J4oA9PoJvn",
  "key7": "3yogsx3ee2egL8chDdjuW452FQMrWUDAoQJtL4EL9ricsWVxfVyEUeFA1jnA6WWZByaSDEVAWKQcN8XJkHQyiL92",
  "key8": "5CjgJhXNS7SeAi8iR3VMBoHogDe9GNpngqKTcGiUVFSZfuo2BDSrtn48i1M3nK8ZGZBph7oPFBeRGgqQGjqPoTtR",
  "key9": "4wM56iLtn8jGVd8bMdZ4RgveNYRkjsaxKJMLwHbZFCzoQZyx3JwwJiYUmHztnaVAe4rA2cxKPfW8RJgpAC19Qik4",
  "key10": "2rDVwRvUGprnNMfBha4LicdbntwcfiEP8rjggotdZd7BmFpDs9XGiHYSo4Nwz7MZVxqzJ55FoL7PT9BAMFDLjBsF",
  "key11": "5hW9Eok6Rr7MB5jHdLfsWw5B5pywFmhAxrRXXt5ShiJLTiNKkQUH3qZwsv6AxV9UJPGycQZEGZnjyYqoghwaffBG",
  "key12": "HriFP4YQWm5aV3DvHBJbd3vDh8mbjBbnvtTcCvKMR73Wt5pSr29sPnLqTwHbs1GsQdQWoE5EPRaAz5NPnBBx5tZ",
  "key13": "57PrghzmyxRi3mK5ykfpJwiG9cw7SW97CBaNcRiKAm8jUesw9NQFRJeuD8Suo1F14fvRqUuNhSvgUBcJpABAAXnC",
  "key14": "3ZLcMVfkms43USu2wbAwKn6U7Jk7vYHfartTQDzh1kordvtmawiVCovQSFi15WydT6SfAQ9uv2mhzFuWKqtvmJQy",
  "key15": "5PyVRy3312sJFS2GWwSPSLMf1YsN2NGfboRSkc3mCpainuoqB86HFjobyhPhCuiWRSPt7MJtrBNksJj7eBwQn4a2",
  "key16": "5sA7bZRqgFcV7M9ZzUgks5FBwkxxHdGMzDTpV9SDg8eT12vABMwVGibbckRExx6oM9tzgX4NjZZYxqxinkGHH3Hr",
  "key17": "2MTjeKXnTXNGEvhsyudojgq5E9gudk46RoAavkRYyt59fYZA1g4rdZ5EnKLGaHnw1Yi368pFim5LyauhAEg5HUHJ",
  "key18": "49D1skiA6cJz97zUM87cVe5CinDRPxHLB5aCiNZx9NMuxA9fZaN5VgFjwUkX6p4h3PdJ5uybfKVyTUQx57gRLyKf",
  "key19": "4DADrTKkPCNzWbm5Y8SJpvZiC279wT8hTZreovjoGzfpfV7tznV7iA9JxtQ9m9zyg4Kfh1gQW3Ej1nkL4PrKuUS8",
  "key20": "5BJfgYSvWj6Dx6rsZWHhcMPyxjDfDpfnF73CmNqVZLJKpHtDTN2SRc7q3YZp3nz7WA6fSKR7VnKwdsSgQdykMYwY",
  "key21": "LLWG5DeVTju2VYAWNLmbWEd9gnp6D8dthVtHSN2rsnA9ixA94VPX9qyfH972p3tdobLGc52TFnkMu62Dj9AUGtz",
  "key22": "2E4CSqFnLQYrn84CpLKCxYtPsufdbqynLwV8BuyFsdbQUnNrC1pWCGjfqz8s7wNqopvsvhCzmrkdZGY2r5oABh58",
  "key23": "3ZuEncvWoWW72AWoy9HDw4WSNxArYNzbfhvSehjWx2tFxSB6cpusMWa6EUyxAKVBUAXPz3R5pXX9dDkmU54cWWi2",
  "key24": "2X2ZmiaXjJoUb4ngXbBjuJkZ1n3q8tTMotg6kdi1sLZ3f2hujJ1Mm8657MTXuuMmgvCjBBLfNVFC2mNvC4af9YZi",
  "key25": "3xfpTcJjU2smAXZ7HYNqHUH3uKCz1gc9pVv1JhmD4sMneTCmq36RgnPAcLCigMi2DNiMmvvetBce6L5w8kmztJSx",
  "key26": "9wwByRxqzma8KDU7VdCCh8r9SW7dkn8NZe9KJ3gA6HoZTW1bVkRGCnnTURv7LWv2bHHzw8PCLQDDxaA55N5EPiD",
  "key27": "5FGAHECGjM3FXJCspGw3iRz22z4rTS64xk1oJQ67KyphqGZLBm5q4Vep1GWifyPqhBckrMinT485cz6NR3ddukEK",
  "key28": "4wdhSXBoVGYViCnn4u32kjCdGy3dEgCo6SsK2Fmio7S5Lsvo52XvDNYVYisNoAHCytjVzN86yX7qFd7zeVtBgvJV",
  "key29": "3JVvzXE7n7aLfKnWa3uyVtEdygrTpSMfmXiyd9bB2oYLUUyie5H4wvpuP8JUDSVMof6jPSZt862wVJUvQoKR5RVC",
  "key30": "zQs2pZBv2cyJkeorunQjtvh1paVdzSCj3J98zLRC6Tzpim67a9EwBF9De4bg4nCDUdPtvwYhiscw56pxexNfvaK",
  "key31": "2CMKsS5YvLRPTCKx9aDz6uUjuLSEYK6jykBqnKGzF4bWjqPWQtqftrJjQdTpA179RsQb47ty9Y4H7VxYsXhTVVqt",
  "key32": "2LPjhKwrTvXkXWLmvSPaKtunnBKv4XrqitdqSebQ3syEwjcHNfgXQXZbTD1dy4kGwrVybcuyk6xG82mR8gFRnDt4",
  "key33": "3G1ePFq9j7DvqMvoxsnp28iP4ye8jXJRBRf7pL4TADm66dJ4qJp3hJrHQiZesmvS1zcDeyuAS99LTE3Ni3vUM7PK",
  "key34": "44sPxiLBU4uf1nmLAWNJG5mtBC2mjqi5cd6ubFCG2hi7Ajc7fcj79RBKC7uiKes1KPXYvaxqGFdjko1nS9oUAsEh",
  "key35": "p6M6QA1AEYEbwHfspkLHYmKJaoq7pdr8K68aGwUtu8P8Ez8BtGKNDi9zccaeiBQqgbWa444X7zsa5LYVppEZEjt",
  "key36": "58qNM1T39kBNxtcJjaNEndqbLbSUFRG5ZSp3fLabKqKT9WtwbjLQbXqTnGpL4UymR5r2EDNULExKhi9LGFzPSzdm",
  "key37": "2gciDNddHgZNBFTJZiwzo3R2C8QYufehAptEhrq6NqrLMv1VQpPoo4c14gAyY2zrCjepxWJBruP37KYsvaV9DWpD",
  "key38": "5NbVT4RAfXqaZ873UxVt48wk5EbZ1eurR9yU77KuecczhS1UzMT9UoijBjDHe2C1SWXZRygr9xSA7JwqhAYDRGbK",
  "key39": "4pEwzk4eHYWXeYwQowyczwnz6wpfCoYfiNEecjc5DfQD5VMAjtxSPwju36XdkmQHUFJwPjH5dUcfsLzkQKtyFuaj",
  "key40": "2kTb2YP8QeWkGDA61ypsBXBdh1Qcr9SHkBkWxSLLZ8VjvJTbege58sCUKWTxqttied7pF1Z5nWqoAW1NQUfBYPRu",
  "key41": "3QZjXS4JKyeK7sVJs4uXquRfiXEPrM3PpL2EP4R41ahuAcXr6cSzAj4v9BPzScytFbMZ1p5pUu1g2XJ6PVpoMEG1",
  "key42": "cefdZjVuuxQS76HudWzN42PXmabHRs5245E8Es6r7CKQgGgUHjJweLsj9LmD5Bpndvt2inqc6wbWa2mmbhtLcsC",
  "key43": "5emcjgVjQr9L6rZmpKmpBrzceUPDWj5XT7z7N2nXcL9zBA77v82ZsXBY46GvYigbSKMx1TWDVdJF89JQ59eyooaT",
  "key44": "33LLKTH1iMjHaKQuTe1NvpuD4sbcCunT1vpmtVECVkbVconF43Hpvd6xjpVFyV5Wna33LjbMPKr4jqz1KNxqj9ns",
  "key45": "3GaBJNiP4JoJXJ4J8BUAYLPDBaYymU8R5U5K9T4My8ypNUjbkqAxqKLJumvWsQZmJax1tZhZFq9c4GgodPgu86Pk",
  "key46": "2FvexpTCkxQZg4AkUqbBPaNepjJCvETZmv6b15ButviRCXLhayo1XzaKnvXW3R2us1qSr4GcLALWSDGRBLV2kRWc",
  "key47": "5vmCRpb71x3bSiHHhR3ARQKLBxGBHkge7hSFhgHho6PPT2UMPpRz6Cs5gr1qCDckJ8WvFFJ3PiSwRjSKx5UGeW9S",
  "key48": "4Mx7yzjgAchPfrb7TuRmqAvHEwRkXHDPVQqYpgYEW8pkTY2QF1uuYHA4JbxuexqyiyJrQQwwHHQQVLr5wxkWFF2t",
  "key49": "587gg467TicbXhfELCpNw4xmxyM5Crz3FBRBEw8qdt5SAtRymdezBVRPPVMK5Vsi1auS7M2PJgUouaA1SGCBLjq9"
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
