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
    "5ctenL2K1S7LFHtTRQMvLkvaotNvcpYN9PmSiyt79nqD4oSkFmyN3dHmJCDUTUxTWmcR4HvoujM17ET5EmDNTp2U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HK1g4yiNPgRHFEGyfnQkWFou3auWjJt9PEz1cyH3RAF3j3SuPcDFBnEzd15NoPMmyVc4z5ecA9wgTChkuQCR4jZ",
  "key1": "37w4sMkkg9XicTdvE4htkVjCVt3QPFnsQ2bdv8TVyVpHL3nr2aYfMzLcXejSgUXHef3P4mBpmsqvU7RVUwCkQnFV",
  "key2": "4yJq7Jzgwsoscy99UgqtT534kChK3awJacjQcUEd3G6L1TeZd4cAaja5CSRQLMqSyvS29Bxtx7JfjSLTN3VZmyPr",
  "key3": "4sCmdWeCCquBD899WezJ3pznyrC6pX9tenCBP7sZqDPZ8QAuAWzXGy7q3x5PzVE77yqyqzxTzuLn4VCTEKsk6UJy",
  "key4": "33AVsEbbQGz4fxvxkRdHgJEWAZMcGFFFb9hE6FhvuGYrrwLu6HxxGPKA89WsFJrijxDbAbPMojHfNXkVTtB9xKpq",
  "key5": "5evqgZWbUukQps7TNPeW39FZLbUkf5Hff75TvhUA1vufUrdhZ9ZjSpzcu6jbjk6P1CWfPitkS7xMEw6baq13WbFZ",
  "key6": "bwvfaQLqQqHYvCD49szueYngmVtYc9hUkCUnomWykZ5NXjFJkVdYokK1b7JNDyDCRsRHJ49aGxxcze6A24oJhsZ",
  "key7": "PVobyho6GMAZR6fjTTm4Tw4c6P8hyq6aQR3cFC7fzA8r5ts5i6CgpHzbRGYksfADZ42n8rofhEUud4fx2zQnD6Z",
  "key8": "2YLxjt5BfDyLWzEkYXCVZrJuh2ta76CpVh3jq71UP3QncXJxgXQhWcEEh9sHAXB9jQK1o5pPh9QVYpH61jcbdPrQ",
  "key9": "3az5axgJhjUkTQ1TF4MxU7NH4NeCtgDjinjbt8ALay9SpuJJ5s4JeWiEWgxRwoYoiBUKZ3emBvgwBpVkV4fqtdt1",
  "key10": "3YEwa3wW9vJRKZnEEZQXd9C7SCrX2t3BNHHwU9kMy16TiWZmckng7cJZQAuGR4GiwNE8VgPfXgXrP5QPBEfobGH6",
  "key11": "5oYRkCYzX4VafwX1zV8kmWsNCmPeFagAiyQhoXJ8437t9vcjSGjMFD3FjVLYGQ9jGeidHj4vjGYiCmqU42iJj1Xz",
  "key12": "5JSXQVeRxyMULkzQrquYK9GodZicjzyd9quTSLUNkEFJ9HUThwrLxwRZTC1TS9aTPKCL4pPb9rQM97NtFx6zznEu",
  "key13": "5zsWC5vppMC25yMuwPmo5o6Gr2k3wjh9piNgKx5y2vK4FxLh6VpqsDC9vvM6EnT9ZSUpE36PjqxnzSF35ZXc935A",
  "key14": "47HdmpRtnVPdY2SSXcWEEgk4vjUxQyqF6crgqtpHsq21L4Xg6sf876jKCMtSKN1PEJFdLpW9GQKdwPn8Et9h2Qpw",
  "key15": "4j65wGaYEEvgVBCq6mQWSp5Kcfg1fUytMN2w1LvfKHSWpkXN5qUmtgJj83ukMht615VtUxg58UjdDCunwxGobarw",
  "key16": "1TS4Ve8FRwTEHAQGBUceu4z8MmTzKu5ZgYiPKSAfYSsRNfjN7DjyrNw8jGWfH9d6bhZCSLreh78UYniZbUC6wSQ",
  "key17": "29uiWtM3hVp4shWSphQtXvaddQY3Tuad9XYTP2yHkXoXMrk9b1BuBZwXAAL7UcDaRHAFVkcp1zzu1UdxMytaU7wY",
  "key18": "3cq8NDfWfd6AF87q5nnnwLwwc1vNQdRfDm7dvpJEPJZLpjZMpZweJ7SvHJoETFPjEYfvJ6TXRpKSkmT94cGEmYx1",
  "key19": "32xJEXx2uPD69zqjRpNCS4B3q8cC3X4Q8xQzB2aApdsA9rTZVqAR1pvbcJgMCJgKpZ9ZswwgiiE9mSLNmrwewRi3",
  "key20": "GBTqwDkRTxy1HECVSq5NKvaYhXPU3RWehUcoWU3Frs8MxeT9zxjaYM2ySTzFj5PyWAuFLJGnrgfEsZz4brjZ8xB",
  "key21": "2Kgk2yBwv3vJcYjYuzNYa8jmf5GxfWmXnnvk2jyuiFGgxXob8GLwQSxma8vqF4rEoKiVgqoo9TriDN2CvtiMX4SA",
  "key22": "51GdrkoZqbiPzqx5TNQTdy1ACTxvd8vJupg7gJTngMuMnNZyBbzriAcGxEqEGhPjhD9j3vFJcBfPRPZqNbwQ3NhB",
  "key23": "ZwrVuPdCDnRELRgKvmiPn3y219iEsPCsgCwjJ5ZFmBuLhKa5iSPZodEBVTfnt42ntKtpNHKhDPeBNSE91cR8iBr",
  "key24": "4Pmb6yGXBWaiNa6kzwL2GWMMVob6kxzopw5SRkysvNuX7dSefWR9mnShEiiYKpaxAGi1ZRuvhRUwqbbVsi4sQzqJ",
  "key25": "57eStMJyT1p3qYBUN35aQgA8oQUbxfnNpZKYWPqWb6xpxVieVxsXiTiBstCMJdQ5oG86USfzT2WaDFpvxowuGaFX",
  "key26": "3mTj5AdfRpuoMrNVh48RnmhQJ3HYGidjW5JYBfYrWKSyHF3qPBd2sAfkFTSrrCrosfAv2voL9xG8FkbbacxAPAZT",
  "key27": "2TwmhzRxU68GHSTynftQEkQ98FSEckStpw4ds9DTtt2781hjGKn8seLkHWC3eFexsk9VV7ituc3voB9RRhVmmctr",
  "key28": "2Em9tzrNrG9b7bMnAiuVbe71t8bVZ1JfcL9QJNuEmwY8oaAs2hbZ9g9Vo1dXL5kjx15NE2ssKWKfqwjpZ2oyUkyL",
  "key29": "67Cs4WQrQb4Jt26ccpMn11arjw9qa7UaPUd87AeFVePK1y8QcDLJW1qyiCGUfhprARd65aqvvWAjJh6Fey3UiBbF",
  "key30": "2DePZ1AryHzbiEXg3beJqQaW8nfMKWRJZYBK1GkmZxxsx3i9gaKLysJSwH8tKruiqhYLm3uxoPGqZN3Z1eGDnByX"
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
