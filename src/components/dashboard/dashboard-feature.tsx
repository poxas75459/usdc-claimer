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
    "4smSPBdJ2ScyfCuTV6HnxUwnFUQvPrd697Qhs7YRfigdiMZXEe1Cz2aJyj4RFBPxBFLnmGCHqMwDQzo16qi6xFsH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rM9EMPMdJQ2twCGD98sXKciZXAvCRHzaEgxMQYqBGNsq75eangncv1q4UxZVKFAusYwr9oCqJqEgwsuhxLWZkU8",
  "key1": "2ukNFrSq1ARee4h521cbCwtBvuzD4YtXuLkwQrTzGVEXZeV5nuYW64kVmGk65TKwecarTu1oLQKGFXR55TDzzHCd",
  "key2": "5cJM8vNq4NonyXkBpZwXx6nP4LLFkuYrPnt5oxNcZdC7TKrxrE8dZsTtaY7f2CqJ47Ytv5mynvPfRApv4TL9qAgo",
  "key3": "2mr7pKux9DnoxdoQoZCftT56ymxf6iweGNjLPrc5XKyZ6EuLBEfXjHaNEC3hBaZMxn9ZwphJ6Xeca7Z6wjxeGApp",
  "key4": "3YExHZhN1VjEAsBH6tJHMmCY3nCKku9qcy9z6MoEXRGx6HxWZqRKNZ4pjocnEU4XMzjhPfXwnwcTWdYLb6QsTSo2",
  "key5": "54QoN9PyJm2inUtqJid1Bor4oeTNTf8ag9jTBuZwhWnwSG7BXLdHXNSBhr2E84Kuxm6u7NAkcx4KibdzetxJiFg3",
  "key6": "3FgSKy5Ln6o7yLJiWm9N9Q5Y1dEAiUsbszufB9F4EVPfi59QV89PuVSp95D6v1P1Neo2iWGYeThSSup7ZiwPUbKJ",
  "key7": "34bD2KypTy4U7EpeSPnU5ZJvpz4VcE51ope9vRXcSjDNDZufhQEGAB9wySui84exvqstmjJZftf4Jf758biMnQyn",
  "key8": "Bhts9vvrXfy6uTma5Wf9JX7Ke9pYZMLk8UL82uHpajFzsYumqCxoD6uDgaWY6xmxL14ivEdcJf7BZyVM3vSS8Ts",
  "key9": "2fREiZPHC8TE8u2KPyrSw91vSzW5LZZ7NJUqDbzQNNmuacntWBYK7Fn3Y2i1RTzTwBgWGuGsUTBA3WcKbSaGSy9q",
  "key10": "62gR3y3fNWjSUTtkBMs6Cg484mpB4ENUpR2mppvAEb6gDWCu1jtUESXk1yEd9QEoyU4FzMTmGqihVFRR2ujgtE5i",
  "key11": "52pbshSQFguS8tFZDgLTBocekLBzCxiRJaJyD7qDRVMAYbwnniFooyyqbw3EJB7uFxaLjGdeAa4ZAENRx5qXriZH",
  "key12": "4mZ4rF2keNFYdg3EEqxYNJerW92PkUSRkq5MADqsjjtv15WqNmzKB8S5zn1kYEtWKQy1fCF62AyPvwzfNi5k8pgB",
  "key13": "3PYXfzLdteuQDW4gzHMVya5cpsfrwgCeGA8tTWfxrYvdVw2K6X3j4i9U6Z4X8dMkFnVuaT1CtsfWEPCQKu7dfRfu",
  "key14": "2rHBEuTXiMtYoG8aS5GzWN6wMrjdgLgNtw5FDxXAdS9PohrpAPxH56FVkGjseGFa56EC8CVTEnkboLErJiZYg3ww",
  "key15": "2PbbVx5PbsiKCb8yx8UV7Nwdkk9R9KsPHJEZpzm61FAQL2exE74jwevSgtw6GyogNVjP73XurrQYcNKsCko2eVM4",
  "key16": "5pG1C9ixsdq6w2JU7kBPEy6oGBvqQWZFJMhDYNA2BQBLm2gRza81JZbWRcTyM87N1wRzq7Lkd5fvVRfpJ5FniRg4",
  "key17": "58pD7qUMnm9YxpATb9bM2rbTpS5rSyV3hPdnb8wexJLXPbB7pPAKr8UHW6B7mwECaPDEPFkZqaXaaEhvaWVEKkRb",
  "key18": "tqnXZToieaRVqUJJpw3z7Uz4AK6B6bsUj2ANZf2pDNAeorcrmGW9RwSJwcCeUGvDWDcxZHaFs5RqcK7hSn7spxa",
  "key19": "2Gh3DKU6Fgsh6Vj2rBxVGHQYYxDuUuRMnzn8dCXTQhKGrpRdv52epc1nqaYTqUPS1WQizvEgeVdDQ11pm1QNV3KT",
  "key20": "5LEqgVHiYaRmKa2jrBJqJvRe7EsShqwaHNMaCBeWnnz2vd2LfEHhJYHYhAPjQajtiSbXpxyJsWwnMuPBsE5caMf",
  "key21": "5k7qbd82ZLgPm2JPEgx4wUCP3ai772f59uAYzoWCabhVJ2mn4UEiaY8uUdoJz3sv1xwauUjSUwXSHqyM14FU9SAt",
  "key22": "2TGDtWD5YGjB3J7x3LA1B36YfhC3QkKNGdNeAf4auTt9HyB7DsAmwrGLDnMLxG5xBe7byfq8pjnimpUuAf1NkQUH",
  "key23": "C52iULoT2rdQZfmjVdubhCMac5R1Be9GzBavhegHwDkLPLe5wdUK3kp6czSzMryWJrpHR5HquXKHve4qw6PmcGf",
  "key24": "8nzYZjMFg9V2aLbweyiXyv2cPdhsz7g7uSpkhMETPRjHZvZYapFij5GpUAkTHS4drVzwREcKVoaMS3rxvKBkJVN",
  "key25": "5xEMGrnYKw6HZqdRjNqkBYSxxhdiMU17hzqdF5mPs55efhA7Va2p9LFWNt5XKmKuWNPCC4QmDWSNK1qEJ6YzSxHV",
  "key26": "4oHX6taWFWMeqUCQG8JZSxwxWsuvKSpYinZ7CJTHkxqt2X79qSmZFvtx3Xa2YV4vgiyvWNuQRRN5cggjkvL4sh15",
  "key27": "23eJmxk7iheAbypLN17rdzVijVvUZb6KHEibUxpzFSiVmTR6Gf93zr2SnFBE5X1CQuxzMxGMYMB7Wgv3NvT2k2Ex"
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
