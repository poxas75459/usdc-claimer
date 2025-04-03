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
    "2tsW7Eg9R9Wiy48u3YQSSa1Xo77hZ3rW6ZitYM4z9QurM5WEp1eW68j5APdvu7Av5zfaZebpUvvnJagduUgnPHDa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2Bh9hVsdoeckLt4giNX3jrRTsfo8KPvRrsAZn8ogj3PneHtiGSUeYQBEYgn8oP2jsG6vNeWGgB4WiC22Xwox42",
  "key1": "2JxwBSLmznjdZTwbS7dzFa7GeDihALLhJNGEigSpTFXYu9bsXC9drf7g99UfPaFgD1kkneKmRk6LcFA24eTTisjA",
  "key2": "2Ko5LK7KhtTHC9wPGVPgWwikBdtCmWro2cdJKWxoUdftYwUMyeiP5iy5pPhaphKdDumvUxGLAp5ptAYSk9mvFE5f",
  "key3": "3tDKUrHjPtdEE3P7Dm3vyxyUQfjjX5uYdqgXHKYMEYfo5FExFCZn1WQypX2Lops1B3cK621oAtfqiXrcprre66e",
  "key4": "5ndi22FstcqBDuh93JAqVYz4t3Arsh3ANchEcUBQKrZba5KL7zupuezcYzRMLFBAou3NsZJMG13uXHp8WfLysEmP",
  "key5": "5UchRrNfJJvQkXx64hqDtrgcYjhUcb8EnhzfVLyd8uCqgCZhDy6HD4rQ99P9Z53cfUhUivsJaC4ELzGNahzXrJ79",
  "key6": "3a1LS5Ap3LXrWzC95tBvGFCBkk8i87xrQjcNtcbBa53ML1LqNUju5NzJ1teKpkgRhLPAZeGGqJXBgA6Z5M2TmS7Q",
  "key7": "3BhyZheR6pu69qXSufb3KQ8McdLQQ8fwq6FyNznUTGQhLbbm791MvKHD1eiqH76A2wnugvsxzoYKcVr46oirkhA8",
  "key8": "276wMkqjUfSAy3RU9J9hdz4sFbwEfb6WLcSwXhZv3iykFkYo9gT37mUZWtsJqK1hDiTdio6YYv1t1GTfPqrXZzyW",
  "key9": "245zFffNe7nF44MMfnAUhmwHw6vQQxyWbnG1c7QcV73gvT2xxbmNgh4jsbq5SBorvacXX2tqMUXfo9SBxKfmbdaK",
  "key10": "SguE82aUuFowJJaseLt7rESG9zv94C4FmnVBagZ7VGGwVzXZgonbmEocBqkxQfae4ujgb5uCEeBnuR449vdbdJD",
  "key11": "4kVv9FKSZb8srZ4QPZQG6kPSNYd2fSrETnRy9uzW9ATEB73ATdnj5bbxgPKm9EYyxo8fULwUbcrt4Lxfpp1hsNqV",
  "key12": "5oFZTm75QqcMeF2hEdrfbL5QoxjQh2h7tE2HuKLC6aXmrCVMBPZzLu7upSLbsqP2myT7Ruxado6c65UeJKmoSQzR",
  "key13": "3L7TK4HqwY6wvpfXA3DAs3B1wa3ckMBt8YJ9Bs4SNtaGP4XHbAYbUFFDXMjTXrgLLN8AXWiQo4GDpYt8KLt6DEWr",
  "key14": "3CdCdgDfTzTEVc9cAXuULVDUQ9HvcL6Wy4TJkpMd1fwToe3zfhmdXA6tsbChc5YVYsJjg7ziLh4QyJ1KzE1Ygez9",
  "key15": "2wyUfzsSiFUKYx68DfgRhBXBmvU5uutGinZqyVCs7FBsi84zkGd9kiHFjqiAZzrg8VbQMwLzA5wgzTjRagyxALYr",
  "key16": "5NAyBk7xtUiRifYMNX9BeQXLDpsRkDLuNY2XdBRa5o8BPWfsH4tSnZS6gNzLUYSHjPuFZdUgLLhE2jL97Szw5paT",
  "key17": "FxZmALoLjtq5HCWG9h53HqcrgGzEX86ewVYV5CJPsW9A6PkiFuR41iyQEHwxXayoiD1tphsGCS83vBuDMtAiWik",
  "key18": "121CbhQHzrTFkh5t7QnPFLtg62JwwK8wW3HBfxc3W5Q2cgCRgVJUCFFi1WWghvrw32PZXfzBb6oU24aWLuf6roAs",
  "key19": "3vfWwyKz2oBjAETiT57u8ywRQ7H6Y9G7J6akiFW7GHZXSNawDSr3h3yijoUfpFkBMpmfAjCvLSh682URzJQs2qsB",
  "key20": "5oXM94QRxJ8QsrJ8AbBNik6RAWvpYzJ1Uis8WZuiJuDNpzQqJ1EUjZNK7MRnUVUYGi3WeYDP8mA8A5P389GzDZoL",
  "key21": "5rDSDxbdJccwRe7o2EUzFcWX9fxkHBaEmiFzHPsgZNVAYLmucJqisa8iV5iufkQY3WMQMz2MzdHLEnwHRNekYW7z",
  "key22": "4dKH3sJXmYwLksxE3L8W7mAdXRBWqRNXQHhPZhJu8b3y845AZMJoKK3HsG22Sqi9KewxeanFvetXGZZanvWJjmEE",
  "key23": "38wWX63kTNFQhHqFvMNeu1mFHeqo6pmxatYRAninMTsLYiRSDiAgCMr7ny6s8HSntnZMT8ge14pUKYKQYS9mcrrU",
  "key24": "3dJkdfWLWsNMEfSCpXWRpEExuucXBWwFEJy5ZP9EMGVXAWpGnEDHFbwbpMDBqaXSwUX7A1ChGhmNhW5CqY2g4jJx",
  "key25": "3nk8nvyG1G2NACQb9NrEEdcw8expVwv3ho2UNR7fayKqGDpEtzjLsD5PiofH9YN9qDTRwx67sPbYdzdKRowyrsuC",
  "key26": "ZxRMF4HZcchyaZDSQMSENb2fiTNrm8qqvfzTTSZ5gvTsvhw8ACD23d1EfjSAGiWVg1UT6PZ3vhkZdwLs9YGn6A6"
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
