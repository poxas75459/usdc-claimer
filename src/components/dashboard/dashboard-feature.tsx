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
    "2ivZfUfeJYNQHnwbH7JXuzAcWjQCC9Y299Dqodo4KbXgCQZ3b6rdBcS4GTBz9GDHYQ1NcRMQBadSt1BHfA8JxRab"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32L2ktcdCqX8XPt8QJ3TcQ53creA8p2rp4nRgoGH3SuYQVzUiLNDm8eknieBFrgWAZ6wVXfnKYKNDASxaMhEFzGn",
  "key1": "3iYvCxsmfdYtje2GDzgpCrJkvYdaW67GvxA6Py5M98ygtMwdTYd5FPW7B2m9xGpW1UoCnLxY9PuhvjXB7Vc96Rac",
  "key2": "4zcDsQgS3wtBXai1H8n8wFSpBM37HRpDvzi9kyRTY9VgMssd2fsDXVCth7U271aJJyanBXKg1u2hMF22GCkR7gDu",
  "key3": "4C1FzUFmA6hQkXe2U2JJxbyNK9p9kTAfyCzjBMshgnKdFezJqDGnkaWj3F8hgfd13D6wPhyLaVhXTxVYWvckQE72",
  "key4": "4vFJtXnNSUsXvUa5w1pojgxUQBAaTFsHYAnCxNy8PFMoaFJmp66oxcbwDNs7YZaRczDzcdfk4FAV7Jp9cx3h2HEs",
  "key5": "3GC9PyLDx8cAvvocZFsVpcv7GMFu6mXLVjsYnSQy77wEDiGvhhtPvnMG42VUe3bVUyzAfoaPVDJSsLgyfMAYREtz",
  "key6": "4VrVs9eeSYpDytF4NLNn21LxB92SeuMjcM3vkCvAFtC1sjcfoPSpCpNJZaR4UySBqCNUv3pcur5jPTAag2uMhgtJ",
  "key7": "669H5Fe4xc4BgnYiNnei48GEn7Z5zK5crTGkPGfFo2FkHxWxLJuSsXQ5av6C2fkG6NX8bouZ8fv2s572F6vv9GQK",
  "key8": "2qBSR2j52HQMiVRbJMVEobddqBcW4psd7B6LMmrPXNBwDJt8xrUZ1ts2eeW3muykZUUpKqZnXs7n89LmTXssM9Br",
  "key9": "2ZYRLpwxiKwkXi2RkBj5GgdbyueYqB5iHV691SgZiALzh6x1fi5TxeW8aqDjXPyHy6xcmo2Mxsu6FfvudBnAA6wm",
  "key10": "2qnutX2zKcKzHVrTUbWJBxci9tdjSSCEAjfMrnND2zRnmL2397v4ZDcBamLMCPwT2q9HRwPQDG2CSzuTrfp7Nm7j",
  "key11": "3vt3iNqaJCmEM3aVZAAZ28pUy4HfmsKVx4TUBUNVUo9gKHCvHCP8yTvRjXsfAujYQZEgr6SoatCCkVVEnFMVJcbr",
  "key12": "2ENTein7DpzFMTPL181UTRcycisjatnuUCEQKyXvJ966a7jptNUdzAXZpnG8yxNdRdvqowCnCNxvCwLzkLcmvLso",
  "key13": "3H8BTXzTDshbpDFXr2GzjjMokqgU4Woqfc1UyTTd2HdAQpQganJso3PRD9DVdBVukdVc4nu8AvFTGKV3rVZcCAGC",
  "key14": "45Ec8Zm3BUCUHaqSx5pWtCNEZ9wAZocSgnhnbkq8sQ2JznjJbtdxw59vsnHsSCKwfqvvDS79LSFEeHYuFQVKqzzR",
  "key15": "7UrHWjsfNtBtMFsaNL95ZiPba3zvmNUVDwbMJUaMcvik618qF5Y4Ate85x8mmq8ehegbWouT29bL161KhUxU93q",
  "key16": "4k59xfmW8Q5PB8kwSPSdRhANx1cqGQbssq9dxRh1Weba7pTvywcQfNciZvJvgPEdrnDynHXzcZyqhjLXhnSwe9rU",
  "key17": "61iyCbfS8cRA3d1qwjLHWfroDx71htthQqAbzy9NcHpp1cSuAqQMNP38StgC5bjiLkg8jJgXbmMHVG25MyWzsx1V",
  "key18": "4MbNqkw1H2N9XTuDNbZoGWQeHxrTXWVUSjxyF3KoePyH6pTBM6HA4oTqqgT3MnZMj6BJ1wUPzTQ6oxo4eKdmjD4h",
  "key19": "48iq6a7svAKmXaDs3bboRNPk2YpWvuS9211DJ3sVqEBdLe65pZSFu1ePrPGR7UHnpkBbfMcptUCpefw1prHLHLUp",
  "key20": "4d7oRQPbEEhtRwbpvbo78E4h8WJoU7JccMRhNjdXEVx6vX81pBrrGaY9U9GMWddCWN6WZDK3NeTvsKhvtR8dWL5c",
  "key21": "4QkFENpRPzhqpeNLG8YZN7opwtLYyRBs3wRLBUsPAWAVMCyNR3eZd7oeLDs1SQ1fvvNb2r68mCQRhwZNnnKpPdFH",
  "key22": "3Wby15Kfr5hM3tXMtH67RyhK7fjTCaGRBWUbVhEvzFDgs9ZMK1u1Q4jngTnACLGxeanQvFXWxsMKdGZ3Mt7YYAkd",
  "key23": "3b3P8ZLURBKutKGDF85SHi8LS6KaFrbEE7N7UYB5p3fxLa4RfTqdjwHFCG3zbgX7VPYY5MCEZcpCzfDGHcjrZ1Wv",
  "key24": "56mzs8nCQXo3WusiYmkqT3EPcqr8rsUwzW7yeJj82i14ch3pwHRYcbcG6hezxwGsNkxvCJBVEQv1MPear2atv5Bq",
  "key25": "5UcYbopeHKFhru21ijpMAN52PT751FYnzqpjh1QAEr3j7FVnsv8B4WKSmdc56nF4HXxS6mcxC1bQni6c75pG8rfA",
  "key26": "3Wq9VwUwBvegFJ19jtqvpXXqYR1mef89kPEGgaZojd3qGjSpae83moDannrbcgbaRVh7NVP5dpx1t12CXzBNRmfV",
  "key27": "3rcdDJ3dWf2xkdAAK34PHPUQYgH4qizgDsmySqQ7UaqpKVqhHhcqkng4MsLe7uPbF9kjMyMLxeJt4RBomXMBCAe9",
  "key28": "2G55ZAWYb8U6Fp8bDiECX1frFpUeGiAmZN4HPDciwTZ4j5RToWzFS8KhrZTskAdgk2XWUeQaCcnhGfneZU7aFCpx",
  "key29": "dAjWct9trJZo3hAowsMjJajzwbYgrTEJThaQUWGkPzWJxoKZzXET56yMRaaAmUmBEV9C8drNpKEVDNviEeXMqbG",
  "key30": "KacyWk6b8SMzutQNBUgKfsnpehvp2ZPEA9a1obgrZQ3NtsnDU9CYC83bweoPgXskSxR85uTbGGkqNtJgDpJU5R7",
  "key31": "5WX9UZ39g4JrepLZTyKXfi6sMpxaVwEgZ3rPve9tnmJHoA5TwGj1miodN77DZvxtu24pnPL32tAeK67XrL4eg4fV",
  "key32": "31nqa5sC2MaxDExMnm46SSKuMJmbKEcChvGb4CrLyscZP4u1Wo5jty3QpqijwFpJHPb2y67cVsxrZ6dHtzWwVQ2C",
  "key33": "2YMqSQXS8o41b54NJkcdrMBHcHGUHd4iwa4KAY8PKCiE2qFNmwnmEWgBQpm2Mton7jeosXXcjfy3LtojajqzVA6w",
  "key34": "3w3WjhJG9m1pcoAruJCcLhQB3ByoztxPBeQvbRCudCC4paE8r2YNZYvuZSsvRzamZ65f7Sc5mC6m4TtRwwTupRtf",
  "key35": "5fDqT9DnjNDWzG2AFANvmxTzQpWe2D5qXi33ZWJHLBJsgvU5eDB8qNAbsALAikBoyT8ZgC5c3T5GgyTnJ6eaKCZo"
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
