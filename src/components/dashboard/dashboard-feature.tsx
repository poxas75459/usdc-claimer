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
    "5gN9jqpnj5dQ69852YW57pAXHgcDUCXdouCtarcuXhTy9hGz6NyJYhFUHuJjxTogAV9kxYAd5oM5CJQp2eadtbi7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JNBykHSS3oLgFx2Pwf4KznwxJZn87JpJ7pac3MJ41HSjNwyD64MjicWV2PYAa7zdkYbVTNcLSWr6YMhk8cn5xwJ",
  "key1": "2o3BDSGQuMvYHqpwp2SC9JovAPQtm81yaNsHtKYNc9FBMvPcohvVcw7ZZKfazxFZqMuivV7GJknpGnwxz1jjaKLs",
  "key2": "5g2SdnsPwQfniHndnS86g3YrX2ufQb2GH5sQwyXKeYVnWAWGGbU99xS4cimFWG677UE9ANyQXKMYVymfmjioygQY",
  "key3": "4vpw4Qq3PEbBoboBzeUvgvoyLR3g7JaPyzGF4EsyjmiC3PFvjWQ7n9booP1QwfTdFPzvupZncUx9GK3Z2uoVNUpQ",
  "key4": "4qcNQH2qF3t4MSDdSGvCb43u3vY8BJDpbDXxnsUWy6oYmteGHJEwxHvFbmaVpHeGDYxw5LuPQCtyQhwD2GgCzuWT",
  "key5": "52qZGA1mXLwTc7iS2qTADyePkfZZQzaQRoNybUmQLszUfV1sRNYUhbLqxm51iN84igdeD6GkEjENPxrYjNkCceJV",
  "key6": "DfwUkmG6qW1ADLxzdM3G6wB6uJ29vq7pizSgVPiBwNYa7hkjyNorivFRTdd8ah4a72aEad69qUsfTdYHTb3YGmJ",
  "key7": "5ywp8oEpfypkgKi48C1Q66XkfTTBWsgfM9P4Ndc8ob35XjzGqcFTAYg1JxiZAcygwUftkecVGNZpdnQjtFRY4UuU",
  "key8": "2pgtLKF2qNfaJonWPK5ncnKsQMP55Lw7LH1PqFnVQrzHp3qDRwMqFQSnuQn1NX9TZc3CG13VvL2Vg8PiDELi1FT8",
  "key9": "5Wf4Jfw1hZCZQiePKczP8TYbK1K3QdQZVUSJXo8Cp86WLzjZ7aoBj3CEkSv4jPgpRF5GHdUt7icGT6VP3vwF96vJ",
  "key10": "gkv1P2D7zkQeWWDhMQLQbbNvhPDeo9fQuz7WVRsoXmRtwv7SiaiHwkD3E2pWy5FqDpWSRn4gjt7jE1e3kFqK9wf",
  "key11": "4CPV8wuqp2ifjhVFQYEfTdb6mERSf3e3gGtz3PSXepv23ucJpA264EZELxxvEcmPzRoB3Dm9YaPvTmYkjatGWhoQ",
  "key12": "3Kdw4CQ82PtncCUaJZ8pcTVf8KtxwptUndHsttQTbiox7t3zwjoDEq2JyRjvZDHhsC91kcDd1FKDV9oS5pHvcXDo",
  "key13": "4c8Hc5JDg8jdErnrcS1rGym8g1WmYjTyXPzwxBCWunJPR9jg1ERMUZLTXCMcsyx8dm2U3z9ESYDRsxPrrzThQaEJ",
  "key14": "2Jp3XdVJmpUpHZDBiHdyrtRBhdbXWHfY6DVrUAy38HJ21phoRWPjhjspcji4LGqWDRbY1MxzAVonvDs8uiQHFR8",
  "key15": "4WDEW3tFS3HxDP1AvRMrzPt1Uv3yEs1CbNGFNHR59jsjFJRAQLdcuYAAjyVCAqmyhnDXVVPnSSxpa7Et35BYpNHk",
  "key16": "2RPmZr57RJ5qyBsggD7ZedzaTfobGDM7rqsP6CgpxuQb48DuxqyX1z9ET2gEsxCDseQeNKBeEexvDBLTELXJUom2",
  "key17": "5PiixpEigSC2nEecdnMhdKq1WiJcxaUL6bmMbtqDbVFyVKXCzouM8dgCwAYMwMMpnY5Xs3uSdMir5j5mrzKDwoJj",
  "key18": "5zS1W5NdtDTB8r7t3Y1NmvFBPZ9UYducbQUHE37NheEfcJac2rqqg1ZZzFnfikrX6DYASCpi8CNhNfLfHgXJvWLq",
  "key19": "3a82GjA3JXmPUPVzpmnz9AAk6c8pYbaPscQNfqTjkDbRHMgz1XeXW7TML7HYMtAJ8hxiPaBKGZEoedvHATynaYBQ",
  "key20": "53k5XrYCUPJSRiyvkRdybR6v8NYcXeou14FKQRFRRm7SxLGqbAMwqBrZvftyKgjUMwnV9H5egKgammHmjvkqY3AX",
  "key21": "43LNCBFhBUvmVFpbSQj95TWSY5vkAdTmMXaD7JbNiL4ViQtCMxCR4uMRSj9EruydGaFRsC9RTXZ7sfD5saTRbnjj",
  "key22": "2FWTw2Rzt4UL2jvKQRi5yvRdi8yY4yzWvEdYfCTU4PgUquZD5oN1sFKHqWaNJYmnxdGTWb1rxqhiR5NiHrnYZeeG",
  "key23": "wmFCmzYpuNgmVNkXb7qzrweWqpZJPs6p3bD8iBc2YyaPAhMRSV9pV5ihxQaArL5STJuUsWUvCHursEcA86WJpDR",
  "key24": "3f9RKrWuJgJHTwe1HhXWCWQb9Jw8p5CnPxCqtcugNCvB8uHrq2XcErBMvZyyCjBRRDy1HvRwPd7NZCEJG1Re1W8i",
  "key25": "3nH7Ga31uS1BebJtQkTEjKW5HNFW37hPD9J6HZ5oqNNaAMXoQEaTY2J8pieYceU43e8KCvVSsEukjXoXrLod1KYA",
  "key26": "adiCBCw7ZNxGGrC9qKoxFDTeZbNUpKkEVVpqjL8FuwKGd3H3VhoU5UEmcLKjUQTboNPry8XUrWjHr3t337Mkd1M",
  "key27": "531tXd4uzCWw1AGa8bVjQhtL9utELQ4DHBDKNVmYcV4FnX1hC2vvQ7v7xZDFJ2XdjZz1JXrcniRvhiE2rD42sFFd",
  "key28": "4NyZ4u2gLFBwMjZpWcgFJJ7oVpUXMRrATWThyStKMRVk4r2JVym1zmhRRQqc2dCgb6KLUogByeoCcDBLXzocsGQY",
  "key29": "4W8NJFfVM6RWVPUosadvQ3FBjJPPstRzoDdHa6WCLB8DutGBgkNKGuQjCGbhBFUnB52MBP7RSztPbLa1AV279T9Y",
  "key30": "3xYqtz7izvLxFctCDz47xnnzuq1umKFM2nxW5aFrwNf1KcFHpWfwCnfagqFQPjjUx6MoRn4pbD92nhRZNexAenCK"
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
