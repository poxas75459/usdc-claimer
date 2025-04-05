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
    "KQ8gfefuu1Pyv63LndB4Lz83Nr47f99cXmVqvPcqBPLX93tRe7M2Rx29Vwx328wjUnWMsWrHrdzdkaQuxcGEBor"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pKToWTz7gHaQKz9D2xiqtVEqys5cKBpiXhey4hW27UHcFWavdTcRjoHSvxSRZbg6B8LcbPTXhGt2J9zW7G6GnM1",
  "key1": "3Wz2CGjv6jSNjH93JAvkkoiZopCQ4jeePdwmJTaN2D6frQTgZVsTfxbNnhHy2QmBrjbSbaGjha7VHfbzMk7mw6Gt",
  "key2": "4nAwJX8JqpTtztXtJTW4RKRJAJZpT753BoR1162htYdXgdCeVqHjtyWm3oKEK5YjYtoNCu4QzjY43W5kmWVkD1NL",
  "key3": "472Pjxunc6SbBacQTn34XBhLRVrCp8cskZxBt9JvJekp2M2NmLJArif2WihV5GtQZqE6zRfSEeiGJavhqQqwpJkV",
  "key4": "5SCjZJFwhX42FWUW9HEggnQ1C6s3upYiGMNp6aktFKLPUqY4Sd6sCYMcWVn3pDQdNbj82UU2s1YG1TykzZRTJvna",
  "key5": "34WSFrGVjA7QNN91gKxsWdovAJs54owjXojN2gfC9iHGEgQq8cAyYKzbe3zmr2rMZUNAjfmKTq6LoS4n5dFnVZcv",
  "key6": "5JBT3JcwsVMhenP1VZcHYfLM8Qc2Pc9qjKQnDee5CyQkEDjyD4rn7TkRKm8Bh9xGfRQub6qtHYWkCz2gq6A69PfV",
  "key7": "2FiSSfSwuPhSbdXdYPj8iLy5TE6t7dXRiEeoP9gP76Wcqv7grYuTMTksMtXAreZxT1d9hnchkbfdutxcRjWfNcEA",
  "key8": "4Dxpor9KgNw62yJLpSbnLh2fAKzN4frjRDbu86EAoCzdNunKdZEAEHTWfvpci1RixmxqCGya5i6kn7PZtnCFddez",
  "key9": "5epne3XBcc4MfWCqJ5kHp5AGSHJUwzjBb16Vxb4zGPC6CnQfYnAGJPyvWK7znmPP7NgmSHAC4VCRiTw3t9iQSWWQ",
  "key10": "5xFF3UdkK4fpTkwpSA3U6RxDbryCM6rVQ3sQKCqb2XDP7Fi2GnoQXodhRgjE8UmvqCmUAdDSvFx8tGbi3prBYJny",
  "key11": "4ZgDoxSkiFpjmxMYb685i94j7TjMr5T99XBKfmLehU7eponAyr4vkpkaNBn2E1dmmyHsDiXpdMzGMP9btE1iNdVD",
  "key12": "4JNRzdj6kZdhSn9fAfzGghNAGiqFrFemeXRxim2iJm9U1LPer17Dn1dvz8KrBGTHwWBhJS9MhVtR65tpWnfhZ9y5",
  "key13": "ehBAh1bArmWz86XZQQaGWNNH6p17huH5HRvyTfgTXpt9kCsX2dBZxL6RBdCmtVZfq3PkZ6ZWmi3TcCa5vay7cYd",
  "key14": "1hJfiyvF9Tc5cNS4XiXWUqRCoSBTdUS6Lt89uTn3C8UUNNMvfrdyViGEh2cHMpgJ4eqVHmp7fwdu4K37iaKPQAx",
  "key15": "MLfxQfbA7Df7dfe2tgNRqVc8gniChYJQGxKq9wHR7wMFFu1bZZZGeY2E5yLUfpGgbgc2s9aeArBE7tEf1BBpayc",
  "key16": "2nawJh67wjijHNEvHonNECYuRkVDFT7cpFK4Aud2wS47oKo5A1po62jGshPGFuQZziTFqsytVEsAJCxDAK6VHGpa",
  "key17": "4LMi49EAFPqSfVCbEiAtvvcAGEV5AM2HqvJ41cVjXsic5fN1mpwjoeXJ9wsnqwa1xfh3SE9m9TeWLsv8NdzqGeBB",
  "key18": "3gk4UpQxsjBc69a8MhJtGDbJUFWH6L2fveei3qFgxf1SLfwUxWkU2Vzjt1gEfrPaLmgR6BYfL66Ah1Fxc282Z65j",
  "key19": "EEuPG1bvaqU6qAU8BD6Nj4oMXkXoB3E9rqBChngnSroZdbkVgRJKfenrSBGd8c94LqoijMRzusrA4DjuH8UePKg",
  "key20": "2vY9sEn8QABfZ3X3uTNaKwEMee5oNH8DtX4HsEfcgRcNR4c2jwgywXxuVxQjXxUjKt7eXRHrCS8hK3vnqwSHpzeF",
  "key21": "3gPsMtAXzoqHpFw5MAfzbz4p8bvFfgGEStUBQGaEyW7Gj9tpfQKFQfyS4DFW65a2hXLEnbcL3dEEU5bWabVpvc2P",
  "key22": "3Jiv6ibqyT4yrdTxgTAshcTzf2LAvoDpddgRaMF5kSHudpHJPhR8Y6PoAyXLdQ7Egja9DmTzX9wDYvwj7xGiuKrU",
  "key23": "23wWyNomnEhwsH5VeffzBFQHacPbGY9bZLBeJipdjF4MnKpgvTXN4Q6mi2duWVAhpbWfZMX3MEzFnSfa4EEcTMJJ",
  "key24": "6CgzroAqVa2D9zFAF5hY6pu9PgjPmf9oxS2wmRee8tP4iHT1ht9jF5awN9W1jfu6KpQmypDGvSg3pn9XrKgmBJS",
  "key25": "4Zd3nzHaGYkZVrAhHwG4s3GZzzf5SfddPzDTM39966a1PTQc3Mm3TqMwU14ikSJfrC6gfUuJXqMDGLmqWaCS4VpG",
  "key26": "FWqHB92H2Zo3Wrk4SfGpD8p99TSZri3Bn5Cawh2wpPZ5gmdQCYmBHb9HqEgYfeu37Q1mFqMfMfXSFxZu4SaMMz5",
  "key27": "455pUqz8X3s39LzsTmdGbTbhXgCUkyA4VPWypvXL1Z2JDXqUCPdWYTDsxnqH2vrgo1Eequ6jSKSztnZH6w3LkLVr"
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
