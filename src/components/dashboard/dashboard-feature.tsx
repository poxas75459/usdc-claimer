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
    "2YT1eJLUKYZu1NF3qzPF4QNQheQqVRvMoN9kZ9r9WfbPS1pByU22ReP4HCi4U9ocV6a8y6j5kQRQ6NKaouVV4BaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kkve8eaTFSS699Xto1QsG4KiZUzvq6i8yya8uGfza5vWN4yjkF4bNEEdStRSEfXYNYxWuyQUgDPqkFWSCEAo2Wk",
  "key1": "5A8UZTse9JRHvWX1Ts6iwdDwdammd6pnkrgQ9qFTpAU4NouNA84oPgsgc6AKV5jwWQgwKL5nhpX8hArp1nVnNyHL",
  "key2": "fWhqQQFPq5XwYhBtja1WCKaEVPSmsSpFnMYARpMGzvs61o5wp46KgyRZLqoE14i3n9oCep77BdUJT8BFnqVcUzu",
  "key3": "56ejc36opLYbzjjqXjeoqYVBxfHskUFcx3iqEmz7btHjreNKPyUexmKuD52Nby4dAdDMGcVicb9Cvwgj9QyWqTh4",
  "key4": "46393oW54pVhdry4P5tyfpnYSYoZGKiUXsMRWGLDtXGKQ4KzmSNDArVN1PBEAvAGcwt1AdrENg8dt4xx9DzxsST9",
  "key5": "5p9Mo6VtCNXoX4HXYUCV1VFBGqDVK6CCKjsRL5WNbzPJ2hTpuNinHqYpzfFCPM3QLKnYwEvZF6fGFcVZfLXh1P3s",
  "key6": "uBk1FAyJfS3K4ydbo1sDVJziuX7JJ6XhfZAoveqjcyroQ6YRzVY9GdsG9dCudctvjtC68mteBK8ABEtbg2U5qks",
  "key7": "41JdcxsTqtL8vcyYwzKaCiyZxhkCxEp3W5R95vZFKQqWibehzqfh7C18R6kpwTMUtDZ8vEWbHPpAxzHgURe6aDDJ",
  "key8": "349JHXdbsMpzgR9gTeLo16PA4YFsufAaXEZQxm96f1rFcxC3BCRPa6wB2EyKWsAMErAB8m7oycjw9Cd3DXfA94Xj",
  "key9": "3fU5np9dLySg7rpjytmkWcnEEMCB62RnAhHTXPeWTmszYxsx6FBJChArrrshErJFNwjGWTzZdReYZEJ9HaCfS2e2",
  "key10": "2HARNEL4yfqHF64wFHTWRnTJitcYyeEFbqLze9BDNxdCMpMdSwKVfKjPMLMrQ3MziZj7JHswQ5oPtG3hkVrcKf5P",
  "key11": "5awbPkumAm4ZHnJ1rBLBH8dhQq7Rzso9SpQsN5tHPVTTY9Z1sYqvTxZAYLYy21CASPsKsuvuTGFXuq29L7Mi5hjd",
  "key12": "ARqqPXiEZ5frHfGgH7bbt1BuHi7nVnuQG92Tw67ZgyiPYc9nY1pF9krY8sCno9TuPteWkFhmyH3NvT9yf8gizG7",
  "key13": "3HuQniFmE4HYUv7zrd4cdU86zD24aGSFGLY1Je8HmyAWspayxYYfFNfTWwNPS7d3dzxX8CMaNNmosmgdeMZai36M",
  "key14": "3PPjMnD67XbdbYumWsv6bjbAdw3HqYJC5PnVufGG1bzYLwB3oQcVxhU5x6vyCormd6gUrp8AD2nZX31iNz79XGmY",
  "key15": "bb74Jv9JFMV9UHcYFDhLV9Vi4GysPmmNqMZVgRaAtuh6kNUi7JmfPHQMACYyjd5mQLJ6rkiMVS1B7NF4t511ogN",
  "key16": "2J6nk1F1A8sEfSPp6ssYPNhL3HjKP5pizaKxiqB3hqcxT9QewykAFChPiagVeJHZG3Pn5KeaDLYMXehEQwS3PVMG",
  "key17": "4QWPpvcKwL16mvAD8Y6U5xEgP6cXXUKiJpGcfnxZJtVjKN3TMxkkrayZwK9hSfwQWb1t72iBX83GHiXpcuFYGHXH",
  "key18": "2sQug9Mum5neHJMYwWfNC5p11qYqHWcQ8Ggodnug5xk94WSzKH1sA8FiLmoeS5BMRTDibaVx5sFebRsALruQESnn",
  "key19": "5XfAHzRvfuEKWY5oEpGc7VjvjzwKARn8LhjsP58eN6jGotKcdq2y38on17nUWQz8msct19jHeg7eBVgodmixX5z6",
  "key20": "2FEFZh7QpX3fmd3EqFQdBGSps6qEZstx3X6dqtLoycT2qfHmciatT8rdhRds88h7RRULFq3AfjNUMB5YMh2fFdsJ",
  "key21": "33b5juVbpoNw28Ss8C5ZGuSXgSHqt9vCchkotdXweofLsjQf4xerGG57krfYM9pELSPMZjyvpkPMZau4xmTphPAN",
  "key22": "34dNwXnL1aanBxpJD3hF3wxGgS8xfcohX481XzX7WGPKadczbBXkaBA7bk4k5PKnnPqXYLFrFfg2M93bBChRvHhg",
  "key23": "ogNNXTp4YoKBtYfHw9j8KovMav3dHdjUFMnFsmJGiCXCYocUjGkdwmD8bhEzMfvw9mZyDWQ9njTBNzA7Jf1qXBH",
  "key24": "fa19bQAPzNgpf1E67oai9X3qSdxofC8KqG2T31pBPyw4TENpMUBcuq9srojuhTLsamQEXA91sEm7iWPoizwfdY8",
  "key25": "SvWSDQwtfZyf4jUwSsntgqRvQhuikDbNzwAtFffNB2iACs1SazSe83hXfyby5thkgpVLVVVEVmkeUvwcjjgLyPr",
  "key26": "361q9bJqK2kXP1dFxBH7kWkjYNDwU4ZhnQRsTT4EoxATqEfzYr3h7zw4ZnDsrZBh3gdvjJLz3qngacY8jK9Qi2vR",
  "key27": "4dqAsuHfKUQNHeEao7LhoZFaWLaYJzbsooUMFsorQF8WMgWq12Fq23KZxJT6CbYCoeWm7gUTfHSiRJUkbtHigRBv",
  "key28": "5xV9GmRBHKr45xmtkPvLhzDKqUmpW5gUCrK48Vhfo1EVCS8TwKAbuKz1azLqDoty3MrseHaVAfuxz5JhnM5MzgoQ",
  "key29": "5tGQaxS9S4ZBCKt1BYgSX8Gwj1nMwY387mZWQP2fpDT8Q9CUHCTf9q6veQnwdFrRkVwyWiQrDqSWThRvqauvGwLe",
  "key30": "5UXBQ8KTaZmpUPYAHWuBPXTGkncaenkHgucFgy73xcb7bGn8r8b61CSmXKRD9HVTCmzRfv1fAo8osmSppwRXTg9C",
  "key31": "2QjQ2GHwgRmhmp1ZNXsAgRzMVjDZjCujh2Spar52SxyZw6p7SasmcXzPrkqXm4TdA8Q6gHLnMKgadbmoNg6kGh7z"
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
