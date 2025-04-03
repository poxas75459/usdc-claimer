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
    "5Uqn8QErLx7LnekiLtJphz8najr5Ep7Hhdhty1rynJ9qRMTwn575JWqehxC79VQ87ZtZ5L5RDgcWXD44cE9rvkyv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4c94tYE7ncyphRfRKRgjM2j6PCymzMKxJZVyuT3GEyoetkheMBCp6FA4sddhGZ9WM2G7bNPfZT1sdgVBTvQRvsvd",
  "key1": "64MNbBV5znBuzgrhLHAeBgk2ZarpPXdrtY2QabzxAFVB9DbvxKwDYimqZEHguiKb64s86T7niwRef4o3pFMJWZBd",
  "key2": "2fq4C4H7itEPw2T9wy9M5x5bfkoEJ1apuo4VfDetERuZkCB74ziqMhurYocVw4hFN8dWiopBsgsvwEzUDZqBYhvY",
  "key3": "4fBVRbr7CDNzmjqVdfBEg5dFrAc8vAkQmrH1JV2nQZHdgvBZaRBWnXWpG26fPwtZ1tY27y3oSryTf5wJcdUARTU4",
  "key4": "3MnC8gyx6X4oSGMSVsyuLDdR8W2oLepXiEdwhUUGEeAmJuEE5FsxqP2iRGfEhH2qQu4kNjGKp2mcoZyt1VLUiaig",
  "key5": "32SUvNWe3Kc71QTDr2Mrc4Cf3v1ReRADMWhTVbKTgx17MyFmNvcRwEjCXcUebtphrWwcj4aaUfmGG54jPujTEr1U",
  "key6": "3apxdmtC1khAgmhXLhUPzLszjE6PtoQHQA8zkxZWn9437LVB2xqsqvvL96nK8NCvv7toezPjpJHAB2UyYc3K5hU",
  "key7": "6co5eVNqZ1o1u95acb7ku8tJsCn854Vgt4VZgbCEjGCSkuFqFT2UXKCS68sGKDxJ2Qm55suoDWGeuqH4TmpNbaf",
  "key8": "2qVAXxcgmPdTgmPfg1MpgmYw4sRnwbUYGmkdzgYsDJSCKHWUCfVTrrMQegCEs82ciNm3F8UTgeTCjffgnLSt5JNG",
  "key9": "2wt5uYo8ovLRtCv5Nhk1aFGMPBiMMAiL3a9zpAPDwQxX5AD3Y82USEmvTUw8BqK8nmEShKMgoCAJbp9Tr4SZD8Qz",
  "key10": "7eGpUKXoSr2MLpEskNuaLkfW5DFDDHT6J8a1S5KbjHbr7LvkHTq56tAmYXygAC9x5wGM5vwUjnFngXBuRefvu56",
  "key11": "5ttWLckxt4ee15SX8EeBdfKudS49fm5wzBszuwmg5toNdjDWT34qm99Spi84mAejcTsFcQLNzNgkm9RBrbCRBMuU",
  "key12": "1tSbL7jJ54R4A2FqRYocf6rFycJQxxfn6qhoBN6nt5JXDAKahCvjvFfaM9wx45MopRTMYGqZcX5d3NcWineXjwA",
  "key13": "48d3zt8g5X6bmtqgHwHCESr9WqLehE5Mb7yrd2JbGrDVTMfYgQZVrtqMUPiv76RY7wRnntFKWkezodaCfQuMe2j3",
  "key14": "4He8nLkHk3UjKNCWDfKmPYse1xr93HeuGJGV47SYty8s8fud3wAwPnkxmVXR92WJTakEbNDAm38CnsHPT6R4szz8",
  "key15": "2xyZcK16ghDfcydAhNKskX7jmTav2Peh5MaTiNXsZkBtt6U5FBiAEVVQdQLaBvE38iQDUfjLN9Y5zRAbAKjBR8P8",
  "key16": "5LHxcmsjtNWt7wy3ALWqmivFUgy2pacfARp73Zq63U5g3uvLoEvkAjJWUKhdwf4r81WEPVdNYDuwjS9ckvBvRgZv",
  "key17": "NXiLVYQNopzmvN5wuEbSfft3hGPdpcye7PWnbtsthUpBXA6wxVXcn3Kbb72mnMBAr6iw7M94UNXAW6ThBJTxp6L",
  "key18": "5xk1TnS9z5WhfLBCuYZnPLBY64z61zcjVrDwiSA1SMZA8jkCLjCdHzHZCqA3E7i73gZC1TXHNqzMp81Pofs2ohSe",
  "key19": "4rD4iVyi7CpsnFxGRqjNgTKGytT6NqTjAB9Cy5AREafjftAvhZjwLuj5oqBMDwSKCWLTdQHErNq2xyrXETCaJqjk",
  "key20": "2QtRHKtxdc9fV5cgBJM6VMH49Fndz9FCd1h7m51oSaCTdJTqdYWb6PcaBDC4jYD9X6U88d68qtnE2AMLt66cnWvn",
  "key21": "4ZZnXzGiTtepf5y8dn1xsm8D9EhyusJhJBgcLqo97ZgWs7JQcqedSuU61QdcRg3QpNybaCBhKqNHDeZopVZQjqG1",
  "key22": "2Xviawes94cwTrKCNmdG2wKuYqVMVWsShpuERXz69JoP2mXJoX1YyYXZHPdgTRJ9tayiJZp2oCY78xd6jXCnihig",
  "key23": "3e5SwjShsjmdf7N8FM3PCx8je8cqJRdr2huE8KiKQodZM5F6Gw6gsaMLK7M2iFq4ssQdqyFSTyXEbXgUyDZ494dB",
  "key24": "4skVnodKFr2dwWB3Howzfg9iRYpgZP1enp4PApCsSVURe7uiy2h4rSbmSwH1gPAEkGYDVJ9rcX9sCxiZLwKnvLJB",
  "key25": "ULRDSfey6ZFQom4cgihpziE1AYqYj7o5bpUVTABsbg8rX9PCf11Rf5mZWfypSgX9JPjuATqfWi9qiZU3kdQ8at1",
  "key26": "1pT8pd62rL2YZFeK7ZYW8g4aucq74WK5UaEs8B6hEwJAAHEkcQpY9uFDFxVoUsggedtRoECiLQskdRv9TcQg9Ku",
  "key27": "3nB5bvEvGy1uqxcyi3q4RZyT2ANnT29tWHi8cpQQpJwJ71p7W4AAiSYojWKK8zPCQ31PKWSQKQVn1y1VEsA2KTkq",
  "key28": "2RSt46J5TEoan2HQLpZpk6FMPDeP3T8VhQTc983fnH4DA335r7YXkvGnZGGZTFTmxThiyXqQbFeHZLkZ2kYQ4Rst",
  "key29": "z4TvstAKEwJndFZGVnhA9UjY6jUpeZxRh7haNf6arKAV128eU9uXuszA6ekkXdcwNSBPh52RyNQ3Se3FrvJHi53",
  "key30": "4vE5kUaZm8wDhap8yEiMwVL2Pqd5XiAougadjvx9SKv4vo9xqYFg3SveEre8nDxYhWPDrzWonjMP2HasiwriAZkP",
  "key31": "2qiUmficTKKVZvF38qbJ2hmzufHfMRuGXQyJ1AE2iqb4oXAjjT3s1sXAPmT9E5PN6Pd7Z98AT78AJiBbFumTsTt7",
  "key32": "28XtRnWxPqkhbm1uETtFYBX9nShNoVy7mJZXKahSNryCvPk8zKZAPamPxEhcALJ32FoihSSRdoJLP3kyryFgALBj",
  "key33": "3F9qefU7ZyjC2aVb1MnEMpmxgmmFBAfvqdkyVPuvEWjo1fw7G86DMrSRV1t6uC1Zay4X7bPiKN4UHaVNtyBQ4Ezq",
  "key34": "MyobknjR9gakgC9JhNJmMkGjKfCCvQrkRsduu9F5sXQdZvBK63v26my92cpfHy5qUA26sxMgTFto9LmTNWB61zx",
  "key35": "4eFgPXpS2HN8hvZrfNE1CXNwu7W6hHPWuLUHzAiFKJ6NGpjY6k4XuKB5MB5MLbks2986Gtb9govUx7NybQZ8Hchu",
  "key36": "3pcBCFNvTGnnDq2KvKGo5QuJLp8SzmfmbZJUd6Y88L8Ja8QwFBP2L82rVKnHgoqgvygZhx1HLBj4dbkYgGCVkUur",
  "key37": "XGpKA22j56T3omKwX1sSeqSpMDFWHEV45Yw8a7cZBD5UxQwKS2d95odUgKjZrRMoiFSUmXF1u9DpHCvi7nNeb6A",
  "key38": "2ZuCoLmYFFLaujaUPMvhCpqjTab91impyLUJEiGK63C1jjQTX9WHicjU2yRnUe1BmUKrEtTUNwxWtuFETcw933HA",
  "key39": "2TVMbZL5BqKKaCXC24UhMVG6UD3Bky16bAdAFatVuLNjpQnGRAhv6u6bRgkHESWJDbzUxW583Sk6CqrrZqXDqGRR",
  "key40": "4NGY2dr8VNDQPSXXFRJNmModinpwmg6c1Gsfd5RWXCuPmGSHHKLAiPzJDgajZ2x63TpSxXQB4BjyYqDFd3rSEkaJ",
  "key41": "2VVfhqNcKL4tH7ZPoSds1YEKQ6rsAegxLMw4U7ojdesG3WKYghhKaXWk8VevR26qQKpmjEfumcdN7uGpG3X9jVQG",
  "key42": "3q9f6uLDJBjy6s2p2bETh1yXvPTJfpS1a8C3n1LGiNvbJQtxymWFK7rr1oHq9EAJMpbEJoMajEL2vowF8KBFHRbm",
  "key43": "3ht7nLsabyD4ChHKWG5nATvg9PE9mft7ZpUntB1HuyVsrYSn3qGwNzkZN9xxqAyw6ebsksLv6qAEKYxaB517ky5A",
  "key44": "5xwM7oaZp5bb3t67MdamJYiSSgsEwsHr88KRwLJXRz4x2suEFCazEvLiUQtULMSq7WtxhfUgGdzsw3E7dKQfMnes",
  "key45": "5bQrrEDAG7EtNiFHF7BATL2TYSwtojpzwfXHB87NbqYL1qcoCRB3wTY9UjTFpFRoarQBFiHXC8YgXmJs5pBg2ZS9",
  "key46": "yTeE4dvd4BeomhwVkkK4wXpQysenvUcC2UVtkrkMR6oeP3XA8ctWNCF9gdwB6a8joKUVeVscm7zRNmHFdPTKthb",
  "key47": "aw6Hb1snmJGpaJzk3QvZ6o2nGXFkFy95Fx5uiwVKhu7Eub68g8WNhVtnTdGcECrQ5LvjAZFGVCG81jEtdLBjPpp",
  "key48": "4dACPevBQ5BkgE2hy41Ug2gR2dMtjkfBh3pWsyBMTGcu26Y8JmCbPfXtdN8rBFyPvpj4kUWF4gBfgTz1S9GcmQ1G"
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
