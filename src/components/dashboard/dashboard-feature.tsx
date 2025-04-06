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
    "5qCbPLWi15JhQSRDZ2JLc6AJvUhpQnh6FGZYogoQoahNBC7oJsWht9QDEKXYTnofM3WvSHTNh2HP8557rBbKFV4o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UAX4ZGS4F9qFwHjQ72rbdE9kwiubzeuFDQyBYTzx7CYFHW7W9AbGS971j54E18c3bdAkJvcNYckDPCA6P8GGsZf",
  "key1": "61JcLDXr2esgkKRRFYGqzy95wq1ztUAQWZ5WJzqw3PQAWgdpZzAddfXnALRLmVfuSpHktJ6nH7LETVw6QgfnFyTu",
  "key2": "3uugn9XSiSbBHrXXujVzaCkcpo2HXuScjdq2LjmsF6SgAgLRBYbGJqS67bxWp7ncBohX4WLHP8XDZB5Np5LtLkr4",
  "key3": "59chzRw6VWV9ub25H2CRFBEpbKgkU2UnQc1EZ97XopRn58kRaXydp6UKVXYSstJFQzXAf29vB9orBWVVdYmToSoV",
  "key4": "5tmCXzqWtL1HGoaN6exKxnfEaMRN2Z3zbfhApWKLMKkkVmVspwPgHt13MMDgjmZWAE3C4iNx5otTKpwmCfvWVgaM",
  "key5": "5TcRmweg7MPTq2imYTFhUw23NSzCxrft1p8nHeT3NUKcLBfNziRZr6dA49si3dgdj4s9gGnRo3SwmmSt5GZjthr7",
  "key6": "V5TTocmFcKGwMUWKtnyYMfVPbhcS2mC7kCmi6TeJNxAHdnEHMWPbYby7DqvsRfnKrBMu1Jd7tYfM3Pi5k8kyZhT",
  "key7": "3HKhe61WLWsDDyB16RhtWjR5ojsyBMwTGyg15MagkYK3wDZjRGdeSF16iYiDMVYBK7sschKMetvfTf8GTe6RvMxW",
  "key8": "4KD7AjKqyKHhuU3TzDpwtHQAYsf1Jw3oe9wRR21qR3pj18hkp4EDvroUzA9eQM8zoKRXwfuBVR1ASBmZD1LzUu55",
  "key9": "RLVp9WLHyzE7XnvVDtHeDUGNMAwDwrbHCVGAfVfqnWNjMgo9dnGVg2EYmJgwcyh7FdcamsKXhYsjpT88jQsV6fa",
  "key10": "4Uc6QZe14sPaoxLpDFxNTv4xvjs63AfDyU2ZDUC6hkiN5SFsDKVGvcLXosQqMVNUEZsrrAYdjagTxchVNjUw2vnR",
  "key11": "3vGDecKgbnxznDARHEUdRZP1ynB6HA9QYGdQUe3isq4gi23LZPJAqXey1gpBLpCZr7CDihaDdNFFPybkTbxKeSGr",
  "key12": "aDBhhC1aJMmMwE8nbty6AXB4bNVMdn6k8zBPyPcdpSK39ZKNj7gJMM5AqAD2Q5qoys8Gbyng8qrY6fqkFdbC6cx",
  "key13": "epBdHQvbBC9LKpDNW1hXW8WyMqNGWvyoEEdMePuQ8xrwpsi1yRQ7YeUzzsiZUReKyM332FVGCeXppLesgyA1Ck9",
  "key14": "63vVZhoH5SiBrJrNa9fPo1YVkKZSTrVuqpcExhNCFjRSvsodh6etSsnvvxmJNtumySqP25PjGYTpo5TGk2s2mCnF",
  "key15": "3oVyEiQXidj5ysrK16tQQhGtirqAMVSmBm72rySexA7jUwV1M6srTfhkeAcJET7aLPw8G2HntvZBK47pN3ewtrZM",
  "key16": "48xq5fqMDcbCwstSVugkDZ8Yvtmof3aU2W5fX1NpzNjTqTG65PM8KxEZfqgTKnWv36QnK9nLaGJhZ54aMkeHDhYB",
  "key17": "3y2GJLMP7QjPojzPtpUWgXkTShvxDaV4VXitpHy4rF8vk1aF23NY6SvA2yfzuFJVUivCtem8NyJVFxCUwRbFWEXG",
  "key18": "48kg2LctB7X1q9u6rFSCegbb3hRvaM1VyHK9bzryAMUkKnXpFW4G7EvHTiZg86aZJizNrsoeEfqjPR7GhRb1W7FF",
  "key19": "3Mo6HXeQmshJWwwBftiGpJoNKgWFXBh8r3oepa9SqTv6hf4JHgLTWuBAbWhKuroxe69YXEuDgPfWGFHHeifJbwvF",
  "key20": "64LSyk4ZUWzhPtHnyW9UuKRUEmMMc59edakDemucKy8dWm78rWC3tZf4k7mo3QeR273eWdXz75sg5A6bLZLvg3SN",
  "key21": "5FqBounYy15xiuZiZ4rJgZ1QcPrwUR2wEDNehMx8XJNkN9mJtpHFNPZrEpgvtDphepu1td7zFK46UT61cD53Ek2V",
  "key22": "2R9xUruPbyL51462nYVX5vxnzUVAreopQbRD2rY1CGpyXj2VjqdB3f6BEe3t6beyhW3XF1CMKp76XBac2jZ3kn5M",
  "key23": "35EeQNc1CuTUTfvGLNeePnWDGP8qzUaP6NCUfP8ti9RwDBPp4qwTaxZhT9sCYAiCQMm3uM49baSmMbUKCaR6128F",
  "key24": "35X9KtWtEzCdezUPzdGruCtnYtCiX9PGv2TcqVebo5TGTAahfyG2qwP9gfkgFAHt7cz6Xetq1VZK3WqUn3avE96B",
  "key25": "53mDKG8msDuRzjPC2kVjtEV3KeVZ3dYEZPaedzRWR5aTm6huL6ZRexkkcCTKyzz6AefspSfU1AHoLYi1ModJhKpR",
  "key26": "3RQYKNmBxcQq8THqGSG4vwZ29RoKf8WPcCFGYarnxjgxctGTu5cFojP6TMNLBJtGychzVz2Jhm7qajzznwdVpvRU"
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
