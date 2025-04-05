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
    "BAjUpzgRPRqysgNJ4j8EeGokPWoxF7R5cTxkyec8NNF1WfTzVnwdir81EFMFQUfUZC315TcjVEwCFJDqRBe1vhX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Ff7r1PXuB9cNNUd2E2A31JvdtipvjC81EUGZ1bcV73W9Pwky1XDD9j5Mb6TmhZjrBBmSRmcxRWy7xgF2iCoCsx",
  "key1": "2TVoLgbY5E5zEpo7sPcxAGPUu9Uc6yPGJHF1sJpVn5vpAYAsaSteLs1dw8ZPtCj725w32DPkHNeabHebhaG7EQGb",
  "key2": "4u1MiaUyCMWjbQHPQWrjVoFFiAeaUtsJYBQcDjsx6BNXE13ksEuj6fx1pYMLWtFGQYpgcwP8GLLpwrsfd7tYMCzw",
  "key3": "3eeSpvmQ3zAhbcM9EBghnEo3y85LwsHFANSjqBb7cH6HAFNgDWj7hcm9ikEWdAAhJi4pXxh1pTUd2RJbgzX3hZyt",
  "key4": "5mXJZDjcWa9CQJBBxJUmMCNgdP7FFwXCQ2NxxSYY5SEURxQYPkBizxivkDZS16nR5aXhkHBYDYcfAGLHLPhCvjd",
  "key5": "24Uit8XV8BS4E3kBCJWpW7c1yXzhxecy61oqdaFhPjuQ335vGtVMN1o4UoYkzGGAJrtre5kXA8d3APnSEgsK9u5R",
  "key6": "2kwsNYDCs2J9EFfgbDmn7PSJMeKqLn1BSjpqidv8PF8Mx4QdmhRrubMPRUZKVpRVbn8q2NKByTSJmJ964TB7Kkn",
  "key7": "5b2h7WjeC3VpL1zuFpsYRTb85sGaFZ8tD9kPXQ7FxqthSHcLfAp1sPp6QCtf3upRiHgkb3WciNxdjhkLMRB5AL3Y",
  "key8": "5BAED7zrquLJ7VGprWAnRoPPFvEfLici2F7YXprCkn9QajjZwFKAaHHrQ5btiQJdkQ8eTd9uDu7FdE7vv8mgp6Ck",
  "key9": "3cf5hsSAttbWTtL8W75CQ2raVkPk9fB73kXVYCVDYoxC4BGsnQJrLw5K4R3BqvC2ELrzeAKowCiatyXfYAnpaN5q",
  "key10": "275wSoUiKkPKzaFhQbV8ksMCusVKkhzRMzVis5LwexFsJ44uZmRsEQFtRyFCyG6cth3KhQ951cG5YrXLVpTkQLGu",
  "key11": "2uio1YZNBGV16f2HrYzgceJ8Vhg7KN4XMUi2MAnyphvbuqzCCYyLfqb1MH6myvALghenXiSDx49kJw16wQBei7u8",
  "key12": "59HdbFa8fzzC6twNTGSQYA2mDM6JdnHTgmJ3ox5XCXFRnx8ES1syYokXwv9YSPLt75z6N6jnvZ58zWwuADwB25pi",
  "key13": "451azzSKBQJ5YspJQ5JDunjXau4o76css3QFy8VNDAMFDZGL59U6xsGr4es1NkVqBqsY467dgSnfzY9ASNXsVbQf",
  "key14": "5wgxdNteXhGbDewiJBDYegeKNJ2WYRL2fzHNDXSDfgiQ6NJLBS6k8HK5EkmW75Ji7ufDezNGZjq7m6LSTB9aUuTZ",
  "key15": "4fTQJ9ZeMirFBBZeZ1kYSGojGfouFQr2iF8cwnk3Ne9ci5SFQYKDPWG8n3NdHTVpneJsAH8EZYPTsqY37emJA713",
  "key16": "g8egaHr5R1paE8Ydc3Ux5umeDxmLbsWyDu5vJJTh47bXgUTQTKYoUfKeTEHseaxzvbp74NpX4iaoXx3gGMRJigq",
  "key17": "2wRma7hxezXG6UraikUzXxqa8onZyRNzDfsu3HYwsqAvd7EJFfCeubiSVLq27L8fnZKVBQg7ySuEV9GPfkqjbNtQ",
  "key18": "67YPqhaPkZPLhn6HQWr7NxXWjtFKLAj4eSopmi6YGstKe3tijgm5KUenr2e9zfDKEapuvtf411D9QKE1hZp7YkzC",
  "key19": "5hcESrq9atzFAq3Kf1tX7FmHQUP9zPTxwnw25pe3FwmNCkUYNqhkbhk1UmUWdRt1yhvdaeQ79TrZMdS8fNjRmEu2",
  "key20": "3De4JFqmZMGHYkmyeTDcQBTGnBBGsc8zkLRRPrTGBo2y8bY27TBWVkSh65RX37MsBrZfMGhr2vtzz9SVy3Fv5WFn",
  "key21": "5cTLZEoNhpotarL69YidmB3bRU5kbiHQMEnNCp5bKrwHkzCEhxsR31MnCXUjDoZmPA6PGmvq8VYXBDPm3Av9AZzB",
  "key22": "S1RkVaP7XbYk3Y8wnsveXKd93ZbihzWpcBHyNvmb9zmV4dGCcdrxzw7Kny5vchfrLwZnwhy3uLdtSvZygeBr1tV",
  "key23": "HmFMkUgieszUNQfUDmNifuhy61mMXYJxHgB49A22LsvVuPVviAYViiZKeCTcc7wS2SdK8Rp5SiA8EcVJU5pagqn",
  "key24": "4YaUet2RbteNYiuLunTBp6qNN8mNk48DF5iExLbudbhFgXNpL3v9KHKoNQqBcgdfHp6xVw8K1Ez6uBKVdo5KYfHM",
  "key25": "GFBALZRBpfgTHGoQuj6ADETiD2qCgCJkvhZqJhXMS4LfGjXfB5DWKSMudoaZQPDdbXvevjxwSMZyq9KuRAWSWtL",
  "key26": "3rDk6nWjoV1X6PVDZ8WLkisoqpqRUzkLg2abXkjqMD7C9urKf2gkru7BmQ2ypkaqGe1ppdHkhyXXSAG6dRWBfuuj",
  "key27": "4F1uGfDGk2nSiFt8V6W89Bnc82ffSUJ8SsczEScLF51A9iVVcYVx4ioSXjegCTmhjBEQBZ1TJd8vvHhQ2ciLPzox",
  "key28": "64br5s7vyF7QcN4jz1qAov9ooEfZhBAXbkN58jLaoURvfbMv1ujrgbSkD3AjjnhskXrv5RGrTD71NmeMRdomNMz8",
  "key29": "2zafVbpUDrCTZwkrgvka5ejYxwqGdiSiLPGjeHitXHf4eNiesip9A46aBkdMSrEMMwHCb6qWCy5ySLH8aBbe44Nc"
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
