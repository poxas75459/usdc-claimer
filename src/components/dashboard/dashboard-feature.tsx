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
    "4CBrCdxt7r4KGez23gWgPLQCrBtuj3HN6yvZW3oWJCotY8pL1YSCuDXTJvNQY6GwP2cvXZjWaLGc8n3DGsAEeonS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62k4G8MF3j9zB6qPPBRkTguavnAkGHJPJjkVbQspa91CjQ772bFbECHrRW8p2sFg7tEVjLRWYSnZp6D2Xmu5xvaf",
  "key1": "2v1qHNHXwCyCj35T6PZBa7kzgittSSwTFd79i52cqZSKZ7rP1XcRraKF2u2yFJNFDKNhGTALnuBZ6Cci5quMDhCC",
  "key2": "QaweqqtrPvjhrepgbYdzp5gpFSET1fSYX5rn9vUc5NuUXoT7zGNLAiypgWxYg2sVQ555XKBgsSLB6GmSGzmRyMH",
  "key3": "65J2xLocZGX6YsNv64vhD1zXynqnLJbWZ2sM5hkuCPPr1mCgKsrJZSFfWDXuKyEGRRZSsY3mxu5t6KigYs1DAY2N",
  "key4": "o2Jyh5p59CMnMDvx4hVcYyS8VBXheYkRPRNS1bByqSBXAeyHzadgym9J49p7WZ6GYKXM5apjsMwAgjuN1UkSwr1",
  "key5": "3UxUGBmPueLbB56FzqCBFqrm6LAdkBvyzDzDPo8KWQvYx7R4XDohSEU4CBEx7hKhxsB8AF4wF2r9s5pbBDGK3Ame",
  "key6": "37pgJe563XWjcrVZeB4WgiNhWMkr8mmTCQJdkuLDurAPUXTeDfyC8mWTmHqPF4zzkfvw6HXHWnVtVtaqfMVgVDMF",
  "key7": "5qJFdGDCJV1bavmYm9r3kL4eGaKwgxfgXQ6sxTFrGWgqS6ZcYch6iTx14jsFHH4nU45ySRTFYZzt45AvDGQJhU9m",
  "key8": "5zbYxp9QRu22zCUNNrwUAerP9ABrHokaVqnB9AMnZjN31aZBpJisMarZp6rYgsd6FjoeYsYFcyShMqjzqvApaUzF",
  "key9": "4GcyWkxYgeRdviCru6CPubQiUdpLXYAMfwRw3L7Ty6z6WiUejfmDLhbaCQLoD135t46wS2KG8mBV4nPgn4UVRZ1v",
  "key10": "kpeGUA6U3Ze4vSpkPmNHkp9nSvzXehBNNVLULRShQLAMtMnRekpqrLxd9eJQUKuAUBJVkMDGZczhzWgi3V21sEh",
  "key11": "54iq1AofVyn1JeNkeB4zyR7SVMzpCU7mgzeUnDWvNS7U524gcfSLRQFuJxGxk194yNGZMdKCSQkcYup3K3rSg7hD",
  "key12": "3D2n14voTx6rLSQywoCKHBxhgeeVZHajZ4py8NXTfnvR11VDv9W6W335kcFPqM1zRdvNLT1zSEDWkMkGwpP2qe3z",
  "key13": "4xzh5fKGVvRKx7G9R2SJLLCxPGCZvv8SaVBMTfpGxo5DYaffh6oQHuY8b2myyhb49uQnoA42T3HiNWqK4AFJwCt8",
  "key14": "5DEYKJBRoQBh84EaWZT4Giqaj5dYCZXy8oPmyPZnsTW5VDvm2MtYXerGLdgRN3NAb4faxa9Z9D2kMGXyq8DQ6H5w",
  "key15": "38uciqRhr8RMXTo3XHDFCjjiMV2sppYpcFtzpiNUaGiSjJG8bCM2fwTLWDrUPQ7ofHW3peAaTqDrsqTbhNGUZSjr",
  "key16": "2gPguaTqz8m6c8pXsrvZD6VGySjChzg3UwGHFdjmgbSY62ohrSHVh32ZeGEz17nfoUU7Hk1LJpasyeDjeDCBweww",
  "key17": "3MM4C9kktfm3p3RSHzkc7EVDDrTDvQrfX5BtaJV2eBGYSmZYpw41BpJJhEofk1HbkGphShVgt1V54XD8jWWmnDah",
  "key18": "2ovcLMKJcHZXbio7gpQCiGSuTNtHz6VZ4hssTPEHdixwPbRS1tUjQv5pL3Us4QUAM2H6Cwd1Q2BYLnfKvJJYyXA",
  "key19": "2U5vXpXMLdhJKnG3Tc5X8AMBzmaVKo2wh7Aydha63ZcvYpstX62LZccyVZvJ8xoQnipHi8oTg5NL6N8mz8yKXoQm",
  "key20": "wTyPUxML64LFt9t5sMnUFtohKPPbTSztnCrvrLvPc936qtgNpy7cL7QpQUVhMoq7yhL5tfQsav1R5X7hrJeyzQ3",
  "key21": "2WFMhEvAmGs5nAgt44CY5BJ4rg6NZyD3jy4DxyvsrivJKoiRc3etXjVzwHNBFikzx6KAn6Aa8S46ScP9V5YGpSmk",
  "key22": "sebTaXiNFJ68f6GcPUb84XAwh9zvAPRmnCmRmttZ3R3o5aiwsYCvKipKiQvMyukomvBY7c3eAWecJvYF9nm4jiu",
  "key23": "2H4HnCutSyHFNxATyQ61AQpPQ5qk7Tj2DwysH2aVKbTfg5HNuVYcbYhwjtB1joT1T19dEra3ETXA7mu8aEr48ZYh",
  "key24": "2UxgDCS6j3xxPtgXg2XyyKKfmMkyehh75csjY7PtfugnLs6uUa4S3uFM7UctqVy9fBc9UKVjb7HgvFMZebzSHNHP",
  "key25": "5mg2eNsboCttkRkRvdsYDg6SS4LZV8MDzt788K5nne8wFfeNvCHPr8EhvRAXMuo3apvKJKYe7s1W6q1qZWyCr6Jk",
  "key26": "nqs2aDGFp5yzCa3YLBt6zXDtHJFtyASVqutVYrZZ1L4Gjki8ayrDWAxb35kbdQuLHEjqyR5WkU8rZUqpEipABKw",
  "key27": "3kDE7N2zAy3U5yQu4H2NisALmdj8r91apFcd7Ubxpuig5orS6sDF6qJWdz2mjtQyrUdnCFYCnM1NVJD7r9suM5jL",
  "key28": "4Zj7igZqgAKENQgHsojDbPbk7zyXDkcKsRC6e9RXx9Lu92TVP4KCVamLMUSsCoRMmfLXLCXt3rpPzpC5bYN1N1xm",
  "key29": "662dW5PopjQSQWPPJYEyXRpJ9WjTEsVK1JmymHEUHNt7Lazh3WND71bcVJduEHrBmDJjCJVcDKLqPzmtYpzrd2rJ",
  "key30": "3a11BcwtEfwyAvdKxkgmqi1W8SmT4kUFRXiHuRSfWooDKQ2zeLHwmn1MmwZRb7F4hj4p3aXg9JnYUSYMdJUo1VDQ",
  "key31": "3TSdHMp4J8Uy36dpb3us2QVQhk6au2N84y1JuVYCgrMSbRL6MM9S1qopNzarXu8yJsx4ypKewr2FKfyLepWgjgmm",
  "key32": "4PvdRgEB7NfhLyPBRwr7gcXovAiePYBEEAKBE8kjMLKNdpwbfimDS98Q62hzzqsNLNG5KiNWKLhhFcxVZVvMMfn2",
  "key33": "2QQ4Wg3htyruCJZCnzQ8CrTXyZ3cnwD8CHkKcb1HgDtWVdpzzgc2iaZbnQjbvUsBkYnNEAsT8NJGP95bQCQCLqgT"
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
