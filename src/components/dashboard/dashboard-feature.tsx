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
    "4Cr53dt6qjV6LCgBFtQMYb1ZEXntcxAhJhRpwc8CQPE5oKZoWUA9kWsaianNR7vHVC7asKuqNAD5k2kdDtrvcjDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p37orTs4ePHXMpASbSfnQvHitgVNpCbFeXEYSHsrPRtdAqPPwHUHayfEHYpUgKSabR5vEjmSLcPMqF8vaYNepHY",
  "key1": "4sRLWn198M8WsusXaenMwqE8fvRkfgtsrRuaamqHRooN5S5mMsUdnVUQADhpfirZKDp1YzAYnrHbFzB8DEg2Jag1",
  "key2": "QH2CLE3dnKrQgCzKGYaqnUnYvwuh1RKx4SqL4EmLf41THrerzyLoZKpwTYQ8QFeZc4nzcMfFakm9xhcH5NHgHL5",
  "key3": "3s5hjSiLntWLSwfJ2BxiCvUSdERVoj2bnajLRjdHJpwRoCeQ3dawDWrihvcT26pukDWjEmNFJvZHmrpk1oV7FzBH",
  "key4": "4MH8UEeQrTw9PxcMvZzfJ5XmyrEtKjoh6J3aCdXywc4eRoZ7KWxiXxWiXdPHCjahm4htsvBTLodR2KaTtLmUNbx",
  "key5": "25RHgxUyTDTwsnchpJaxq4hx9k2Y67B2kRtnS2ETqskVXUXPjfBNBUtxNmBvjSNkUBJ8NSoWY88QbKH7F9W3n3yC",
  "key6": "5LdTzJAcJj93ycbqmY8ik5GNr1ZZBUJmhNjS3EpmtUgk2iX2ctwq9DT4N8ys7925cD25huD8NJTqkTacLgmteFiC",
  "key7": "yhhzSSQVUjBi65aCqLfqFw7W8A19zgm8GQrQJUoHF99Xi6abYaY9NQ47zNeYQAJAJSF2PRkwvRG16DwfcMWMj7d",
  "key8": "5ube75rM9EjBk4T8bQJr8ApkPtXJ2B3pDmF248rQCj8yPGbvz6GtCdgxjgt7mKDCwFpUBciaGfLoxamDYwhUAhas",
  "key9": "3pJHwfqN2J2HpwMQc2SKkYcxV2RNE7hTpSgJf1h1mJMaMjorTXX8vVvmvCXgX67f4jRkv9Q7Wm8LBSygJp6PMtE7",
  "key10": "4ekdHeqRGuwUE62CceEicAxjLsF7bMAt6LEj43bJYq4HiyZCdQLqtE7jHDH9hkbDp4HP5PZZxvkce8LMNLfTX1eX",
  "key11": "4giPXz4juxN6rMTEg4RAyuT2FxeGPKqEzVw1oB8LupKNcSCTRZFD1xmFSJ687Z92daw33n9xhvSyCzaT2BDBgLmY",
  "key12": "44Cudvw5TEVBXX37EBTUXLGMSkgUEhsHJidKMJhacMkhszvvqUQsXPtPXbwB3uNvtY7Ci3BWhSWJkgpcfqv4Bwqp",
  "key13": "5imA6gg1du3bk9G5cGorMwXHD9j5Es7G31J5xLWfHjnEphcwVKC7HXUYf9w1RKyJiRj4tMTnw8YchTJsVcruZLKd",
  "key14": "2CKw433gVqBMVng6YDJVL8ZuKxLhtM43RmspCAhFNxnApgup549hTAGhPmDaUGgDEVJcHJJ9Tgek3uVZQcbUQ5XE",
  "key15": "37dDK7jiJBeLhTxtN58NyTCyN2gmv1QXyrShw5p8PKroXE9gBSJYudBtFpj9rtPbFyEzBN6kbXDq9PYEcLJhJ2qZ",
  "key16": "64kJ248PgXL18cRNg8i1BbpA9gZM8sianTqZQG8bnjh8uzpXqEa5jigTR4CDFtqsDhcHFMMkX6BEghx21RNuWN6h",
  "key17": "3k3X9vHtcRV5i5i5rSbJ8pDEzNiEXMSkXDVzHrCcdh4jkFMtsAdKJqDf1e7XKo6ccsmxDwSx5qoE1BtYSNJhsC78",
  "key18": "bKj1FtUndby14dvAA33EkqsAyknYKWYn9cjuxhaojGw1DPyoDbVMBb8M7fSU51m6BqnMYAc1jMQKJ6ah2mzsBah",
  "key19": "2WbUjQEyTi9LSAxPeXxhHhM9f5VaEKAt6arHxKYcAyXpnppQWQ7z85v3Sn2bHeG4xQuq5DYpnRqXhZko65AKzE9k",
  "key20": "31cAX2RTuGe7eByjpeFSMZpMo1gFXbrZcwEAGWxZBBU352CqD1Bw4UDBfScaZoD7FQihHECx3vnBMhsDABaM1PD2",
  "key21": "ZfMXDiT7Fb4z99NhD5aPVydnfdi6eboQEnx4Bp9mYE2W4ZdJJVRNHarEj7qta79KNormRDccDRJ1F7DjbgahWQ6",
  "key22": "3UjuzgPxgMwwxGxBdzAqZbQy6r6Dd5AUoeXLEeprNZohkhpTeuGJsLYaxtxYx7GoBn3jh2matjJmrxpeXfDmv7AR",
  "key23": "4wZpUgV82y5vTAgwBbfmxnVducYiXiiiQgYF32Y4rYxdE6wuskvPT55eZ8kLrN9ZC4gHkPvyaJquWB4UYZFcd4N7",
  "key24": "234SdZx9CRhoqYgry56CJbosBEVmXnaraniWXwokQ2CgM2aVqWRsrnTsAJqAT2hxBbTNcuWGJabCG4XoqxUiYvK7",
  "key25": "64DBbvmQ2GR3uS1MocArfSXuxeot1wHJGTwudf4UEtFcGvF1xtDmEN5LJiWebVhkxKjmagGhfXDZX6tMjjyPpXXU",
  "key26": "38qoh4n8xW6ceQJVbngqYAV4fwbvXyzCQ3yuoRijunZzC6rqZjbZvh7VBtTTaU7WMxvQCYzYyXanYSkac4qj8mkk",
  "key27": "5tAqu2KrxCMdizDcbyg4MtRDZXgAQgTbBVgrt2KB4TpttmyZEko5ftbQHwHUpoWAcq5BPSkcUnucDmrXNVKc9rqh",
  "key28": "HCD95UfbnT1hz4mdcakaPLTZ5dogVfYicocaLZEN9jopHnCKb92WpNFJ1XmnXYKXTgJs3dXL2yp7v76qakeHqHm",
  "key29": "EHekjQrPhbj6Qm1mqUPZopAR9CfswxpPaJmg9vU68V8JZvcPqPHtGb2aqJbF2Fqjr5GAbCQsmu1kGRgGwffyxE3",
  "key30": "5wJ9FR17cStvX9PKF6ryp3ouBBxvVCgws87ptt4yD5XHByfjDzf9VmtY4ehdg2uAa6HVgHHR1VRVRzZs16WX4fCv",
  "key31": "2qtjZg7bMwQZYSCDFE9nMAdRDeLDDWAtGg19JkmGqEohFSAexDWbG9d3GrpymYVo4RdLgeLW7qzk1M5F9DfmfLAV"
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
