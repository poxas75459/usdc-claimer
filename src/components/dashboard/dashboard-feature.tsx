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
    "tySNGB4MZcR8pgG9Yd4aMrLvc5CCu89B2fQEVf2SPK7xDvLuKNXuAN24s4jXpsMtmVRwaVWibWyydSrERpNa5pD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Cik5A3LDkpM2qWTg47E76ZQ3XM9U2YDsAM4yMN9y8MgMcyRk4LFCz5CyU6BgNx8Mcxh65aqvcriQfopjiQaX1Vt",
  "key1": "5GhdM91jjUmvtqMfTgUf75SCtNJnu39uupWUcL4T44oNXH1CLxV8ojNMdwDefSDeBzARHqhyE5STkJjrExb6JeAb",
  "key2": "5A3VwJrEj3UcPHPgRfu2ZLzLXBSvJWKwkHGmHQFEtpUF4zz4XZup4oKnXGPFPmga3PYMGZeAJgXWuGLwywBFiyAA",
  "key3": "TjNNrHYdQGtxwTYPW37A1vdb22mxQVVGncxKg5Q7BRnnxu7Yw88TxcJ192KooFAAhkKx61v3RzZxfQirca5N7H3",
  "key4": "2wJPffon2TuP7PSjtrawS1Wq8dJyts9ByoaqaCX9owwCfAT6xmWC1D34Rc91LWvmkFR4Ve2BpT5UHTmP5AJXwYfU",
  "key5": "4P8NA3df27z4T1G75wy2AkxwvsHB8USWLndv8a26bgreG4yfYb4jCqDPjaMzFgp7kxSfh7ujEedQMDTVGRRFAKPM",
  "key6": "2iBkpsYfph7vrkdFb8YpCNG9bhjAvwsanqSWauDYUXfkZPHwAyrPGwPGSpB8HmzqSNyb3UtbuJUWXybhBvEbyYfD",
  "key7": "2KHhoaHatjk9WJZUYGSZR8VU4JM9uAimZuN4F4w2sp28WmXZWnH3n9dcGovHMVZ8BcpGW4eojnsUF6TjkCUmWUQF",
  "key8": "HTADA6V97Jn4qjNwR1BkgbJ19KGarDcEmDY38fg5kyDm3zSGG6pLbkmeJnAuJrKDXKVEtFyEPFJVCdiyoL2ErHm",
  "key9": "4GAUtzi86yTapK8zGx6M7ht2XVKPhin4Cq2T4dD8hmiRm2P3793fNxYqmENwTUumoS5AWwFV12BZLAJx29V9cGBc",
  "key10": "5JQq41X1AQZgdNUn9QzWHn4kDvsGXmCnX3HDEpuVnnFZ3McVTNSDaAEeJ9vN3YRoEDE9oAZnqzdkwDwUg6tc5vkV",
  "key11": "22CZN6od7maZKZcTK7NnAUSfECQxNbtiUu1PyNudfYwnASGreqtenyPPEp3vRPyvBUkZgxKggVyrW6ZaVJyYUYQK",
  "key12": "5bYjHg18proAqdXUWWW4vUHcSTPasYHMxodCL5SiGFx7QKr3eW2gePAJJRTiaAyQedauuixh9YjPzTcG1LQY7xYF",
  "key13": "3FtJYnBiWRszRnrV4BG6KcPmf1C1n3cUru6KnAxjJtLLfmHbcoci2dtucLFiqaRxiXXxrX5ejWp3ujvGfF3gDKCS",
  "key14": "5S6umF2d2FWc7BTp2S6gjenz9bZxB6FR9xi437xiWAohkC6gx9bkw1Vu6ciNKmQcTRM1UnRG5ime7p7hnJwxau4w",
  "key15": "4AWWXrgNNRwqMZc1T1owaB9YXUWcgqddrMxx6ryMpMYGKuUPYNEVbyQZaGqgSHRYsJQYNFfD89VnuL8hcGCM6K5S",
  "key16": "6KTCGtV6f6vVK56mMyHLoYCrdMYQaH1kNxGphpL3gbxDyFT82oZKxHjXwx1s53K33RkyAKTC3TyshUt5fPyyynh",
  "key17": "65uawZcJYCxMAR8pMx5xiKLG6MCxFc84rxxKnGoz9MY6oy3kZakV8p8J9eAejMiMn5BGc8nSu1XvgtvUMRgmNpGu",
  "key18": "2Y2eiAQQ2uEzjjAVN6RPUxBzUykXaEf1oSLjh65ytvwrtdtv1kXB7UmQJPrM7MABEKj4P6QkNNkKCSr6VMoEqKrL",
  "key19": "2AQ3aKtyC19D832SQpNdDBUQUoiFUcjBZVZK3Q5LeDoT1GpEsGzgtvU4Xi3NM7WNJYW6Shu4sQxsMnBGonFDNDjj",
  "key20": "65CkdBYJAkSdRr2z6fx1sp8syfhsB1o21y4u3r8mZ1Un8AZbnc9v8LrJKkrhQKsukU9piTjXEpr5J5qy6eznTpno",
  "key21": "YeLX9efKske5ZVvehvm4dWeqyZntHjRRgqNgKVP8uoHkdssEZGFwNMjGFBjCF3bqqepdiENKtkKWtZjapV6s86a",
  "key22": "5KtF4TkMmqZpzUgvfppSV1efmVnJarELYkdS3ZMQz4jPp8t9k7ejTTkQx81A8Tbmts7Wq3WfKfzHbU9Zi3idJjL2",
  "key23": "28865DoPDKre79Qisz5tkoKnCJskqr4pj6p1VnM73j5byehDvRBs6K9vxKsbL2gKrSbPCDG2RA2SdThbN7ST42cB",
  "key24": "b4dZFT45tGwGTjGv8sFkGbGtHEfjK5TzmuvA9mQkR1KHUVFbJL3UZqqYqbC7FoqgSJYxTiRDUdauFQiCVfTWJ6t",
  "key25": "2wHPvdf7nhesFCQhRrMp3A144UtU7dLSrWYf3eS61Yh4mG9KCntDwGQXSBvhpc3xnzSN1N6KWLXupMkEAbiCsabY",
  "key26": "4RooSZid7YVyjMLiE1DwuscvigWQDgvrEHuqSeKbZFbBw7vjdAPrQtvteACYnPrbKFcUcw2vYeoqvRV9k5KXUYuU",
  "key27": "4T5FGfRM7JpmsZz5FWsTixmm2MrummBqLpUf2646fsn3Ka7Wu4Mc9CrAdm8qVR9PYjC7q6WDrekbAKsqHuPFSM14",
  "key28": "3nDSc7Hv8GmnF7CXiWLeYuqct6KAxXGqJnhyqQZf1LDTAmrd75AJYmJ9FSMFNE72udbEcDZ5mSJ1TLTTkuMLhXTA",
  "key29": "2c1huL2vW7GibJ1sFDvcB4svLaCusAHNJ9mpMYdV8SZfePuRXMYFdVJUsfxkXoMNEgwhhX3pdzgPsqPDaCUdTZ5R",
  "key30": "3XpabJiS7Cd493YuM4LLkPycsv8C71ndcPsZ6sNYVoWSXnhaVmDtpMgex9evAehybSfvb7VLgGKyZZWR8BgS4BHw",
  "key31": "5psPKxtjkYwb3ZkFHG37nfFAc5CVnj98MqdGfN7kwKrZqef1ovqn383u4eLqUUHiieYibyY1LQTLe1jznSFXuNig",
  "key32": "nZN1yKjsPBjVdqpxqS6Ch2E9TyL52TXDEWNaRgaHnnUvXAfa27P8ZsoiovSAd5o2wG5WQ3KYWM7qiHM5SE5hfio",
  "key33": "2HWR7b6kbpjfQcBEAKrS9Lvz6T4FZSKWcYrXvZcbg2LYytDw6k76URDRCE7TaDnZpsfs7kDnRzwMZDkvNjeqhr2C",
  "key34": "634gLiyMmELb9wr5dY1caM7ZmdYHd6LK6BstmW2bVTUdkUBQAwPbFuAdL8xvNMnggM4vFDPnhB2Ev11NHhxxRXMt",
  "key35": "4v7Q3iDNSdPfwpZhkjKpKP2nSyx3AgJ8BL1w6S4M9snd136cmbWatwkS6WD8fy333EYqfpQAFSHr9xGxrfWYAKSz",
  "key36": "47DvRDJzpfu9UEighhJq81s4Q5nkaX9i9hRmBD3mN2MVyM5iKMw6N2NcP6fUrCvzL4A6LLCA9XsH98gonFsNWreC",
  "key37": "23AQiYaP9Gs1Jnm2HPWzEq2VwowXCHQxQLLYFje91X1S8z3eXWuZnCoNkvFWG1uYLpFkBLvFikzuMEdwfbJh18dY",
  "key38": "42sKtwiZWpnXFmdgsuajNppPDHMh8ofBp3AM4JdiPegCzy7JKgc4PQJNMend2Dyg8BHwYseHZKz9p28DQPkxBQeD",
  "key39": "2y1NRTR2uPqt6y6B6rCWAJ3BDXt3DuPnrVTPSW3sc6xBDX72gXzcne56bBwfpousczPvoD5v2H5yx2wJZmdkSQHt",
  "key40": "2WTdrykkhBauMhcx87wMvNZJAFaYujWzS6mEpcwhccHaabzxhQBs4Ckh45asVK2unPh4JpktaubqtXKw4mSpcZx8",
  "key41": "duvvXP3BLZvco8R7tLBGoU9n4xHfezozuufEqWNV9f22hN24rS5Lrt5nDt3x7GBPciPyhuWeDFqQ35BraTX4goZ",
  "key42": "3crUQhr5ZR9kWUpB2mX5G1UyB5N5Gp1bNT4WjnwD8Di8hcjn9SgbXFYwgmUEmotWgWsnjESsswiajqxxToMYSt7D",
  "key43": "38QiSTef9MBPZLkfucVzsM5FSXZV4JjArhAX9wfRwxJ1xALNRFWUMgC2a8mxhhn2cZNYuNpZgAQZx74H35PHSSqP",
  "key44": "3DFSpw9r8eGChGX75dWRaA38en98GruxjW5PZZxm9FtMY5rmJLacAtu1Vspfz1WC14mj6EA1o67fq8L6Q2yRSv11"
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
