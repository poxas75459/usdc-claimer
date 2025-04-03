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
    "3Je9eDH6EZdoadoeLJruKqEFWRhVbaQkzTsW8osVe6NPAPXYVzn1Nhj8rokijWK2k9UhN9NeSikpuaoFXxrhTsYx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q9rp8Ykqpyi79oTbmBgYAzobcPGQGeTKvEJyBDvgLxVYN587buTh4pDP3CL9AS5Fmjjrk7Xxef7qMH77qEtkP5k",
  "key1": "unqW1dhUbTveEEBdtcP3VwUibQ7taYAP3WMmhwwr8FZeomF6v2FcqTdhLGQps7yoKgZgvn687Rj8f7it6XZQ4ZU",
  "key2": "87isJgq21SAGEGyEVHbd6ez7REPix6uSfHUB5t3si9wVFrPWxUJvu6Zs9FwCCVaQu4VPCQhLPnrFThaRVzTeEjQ",
  "key3": "53LyRa2V6GoC8nDfPQiAmUDEHHW6D3SA879kRRDTCFEcyGGZakr2Ce54pe6cQjfvfvcGiztKr3bDUhLugBZc8mNt",
  "key4": "2rYuXihen6fheaYfp6mDjPt81qniuo4AhKbnCtKZt5m6QfmjXATGMP2CcYroicJS44Cx9qo9D3VDGhanaqVWnqMs",
  "key5": "2LtXFy9eBwA9nwZauNwQs9WABSiZ4AuLXVoqXBLQtg5jp8NsnwwpX23Yjg5Qis5dMCGrcsLW21EMgTCoCfjMop37",
  "key6": "31ZfUvtPSFnhsyY3TJ35eiVyoELRAnXEzkyQ3djtqeGdusC7vyXeH4ckchyWmYJZhp4gYQggsnHFJyWpbZDke18z",
  "key7": "2r6gMggT4xrjy2BEbuWRutySemitJpQR7iMJU3q8oxZ6gT5r2KDnFEvZVB7uk5EQukMCKTUE61kxLEGXPUpLCPfA",
  "key8": "5wguCqPSRpDjgB8tiA6Q1XSXRQQY6KokZayz93SvuYJ3jeXLG2k7oG5ZDUR7dBYETiWvYaH6TTaz6uhPXJBV1Q81",
  "key9": "2NQG6DLBve15TDvShXkVKpJhs65A4ir2rwFAejKbaJRR6ayNU5FHjtLyKdCToDSenCaXmPPH2M1psendEL9yPxx2",
  "key10": "2JL1HrrdNCk4JYSnKrFDTVUt53Z23Xp8JFgJJCrmMNo5vZfaJ2GC7PVi4fotEijri5CAfjXpSHFUUeV2Gh4DwRm1",
  "key11": "4YhWppnxafkABuVwaHmzo941zA3o2yaWucmQdAmJifsrNq9ftSwvKoDKVVeGM44WYyRvMn5rKknCQUXuxHQQ4cU3",
  "key12": "KWhynhxiagh6atTZkbPjwqmhAoh15U4AninCGxRZmhkkvqwg3nXYf2hj9vTc9PsvDEEKgViZ51e38FxDfes8fYN",
  "key13": "2gEAvBBLzxZW1QhBLVfYUCTMktDfMx5KiM81XApRCKCr1War9fX8fLcoNLidt6QxAtdQqsjBATAQ9GYqLqLQF6ge",
  "key14": "98HX8AZCjb5noadnsfhirkcvpv21T8H9J7V8dxVuWJ9mMMR2788P7a2dGxCL8mPncwR5brJm1qbEMoVCSPju2Ay",
  "key15": "5kaitfxvnaYZSuVp7JrFfKDzvfztNJuWZtFEUfoBEEhmME6KDWUK7zGwAgV3s2qhe4kBWhadknNeoJJbYHAtxB8T",
  "key16": "4hCgtvSnDp8Vw7Ep1Gi8Jj48PMfNUQVDDj6KT883S2XJtaDpKCjjWzbmXCsUXZ3e6vF9iMPmTpZCbTCKKEfMuEW7",
  "key17": "furYXQ7JmLMusasQ6dBskX21FdSvra9NFTSzmDqixnBU5XFQn56P67kPrtmQVjqiNhekQA4q7HH9GTSgTkREBnB",
  "key18": "UY5SnKaMPXxA4xVULTgbLbNNBxZEWgws31PhU4Kw5wEkxbXKgJ9gLyxDF2m8SC1ZEnU5HMsnLnv86D3hAUjtCfh",
  "key19": "3tdniCkK1v4kRBA9jKBJBsSaAmsiYxrSL7FYSYL1oXw4btMpgaXi8rByF2t6T5Avu8wGAJM6s3S6CuwnxTF2Qpff",
  "key20": "4tNMkKm1nNniJgNJ8pvXZ7KFoQDGxNyLw3R3695zyh3EcQURBwrhLaexHfim25wEAwJQskyBE1d4XqU1jYsweBcy",
  "key21": "52B2yxxsvnquYjsrHfNwVrETWud47cf7Rji3Qx6MTDznox1bmqQJZYiLv6zAM6FVcJ9zoJmNUqzzzgbBg9R5odj6",
  "key22": "2aBdQkAMzLDNxzZcEbjrsUWWnBQMfo2DZfRbH4ouBsr7X7R4DxYJbYnrcNAABiDfZdwwjTgEJPJwgnKx3mK3V6TN",
  "key23": "3RFTfY1CQEUKT2p4ikuz7KWpDdyD65r8MmUejrb8QoQwnZ5rQNr2uxx3N3dp99kAyhN1ScRrLuSTHtevRKNUfMcb",
  "key24": "2NiZxLB5qM1pQiMSxnRAr13qqyU1z5EuFjyrfQDu4VKhcATojt5M1TC4hJHr25oB9cjHX4foXZruPoLYPpMj316o",
  "key25": "4VNXgr4azHa5zmUkKgXAyW984Q7RMHWVW41esDmiMQKd4SM3QsFNb5PKynBDQAzCviLu1gxTF6yRcsuHHpiADKFb"
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
