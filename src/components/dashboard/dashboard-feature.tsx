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
    "61NrnwdEkuUx1NZx6pbwmudFNpUtVsgkYkTsQejKN44G5LQRDZyzjFKEkpo8nT7xQgToKbQLocdR2uURNE6zhUae"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MCJpLg9mhR1WCK7NcNEy8yimjxjfBFaDTFikQF9KEx2BCVRfEYeR2tk1UV4Cavr9UcfXW9Lma19e3rnATWGudU2",
  "key1": "4XXEJPExuapbpbCYPEzNyThtmG7Q6ukWHT4YXcpAHL79NWSMREUpMZJArr32fH69wvYncSJa7bZ4L25t28YFSsbY",
  "key2": "2vgAjmScv62wdd2H1pU4fE8ByjodKgsS1BWiXjd3wZEPkLZe4Y68MET7GUjn5DKnH1z1eSAPYrSrZBg3fkNVw6U6",
  "key3": "4voXUs4JKhcEAK4qUhsSnNfGJyuhk6ASrT71BZftcepsuUVLk7UFmYJabKDMH7gKT4yFyApLZMNme5jzWdT56rfS",
  "key4": "4ZkAoxHPfih7KgXs6xrsiQSZ1vHBsdN2WPA1WaHRC34WvNxVSVsxWzv6Gj8c1R4UsgjbGLrP5YYz7z2xsxfbNUe5",
  "key5": "o6LTV7QsbpzbjfLrgMFCKkteMF7mrdT36GZfyQNUrLKJmUe8EUpsE8ienmB47FQgrMsuHtssW5b75tpbMnTXfE6",
  "key6": "22wub1ZtV5PaXfCfX61UsUnVhrZpn2kACucd1y4xJvzR5Hj1hckPPUFt6vXHEToDi8p6VnDQdqHSnewVx9MemoBa",
  "key7": "55tirCKEHYR976z7nhQgNSo9Bz1pFtGGMuvVSZngM17Uvzsis2ynWcPNw4juXr5jyCmDuNnbdveYRthLpx3UAk1v",
  "key8": "31LjETSad6GkCbJqcAEji2j2E1G78JYefHU8mSsKHe9PDnXHCps3G4pWR18dWszgdBN4Ly6D4A7JzFiUmciBEnAa",
  "key9": "4yCJ7vEwawrQ7jjWc5cKMCySYPFHZ8745f48mEjgsGLMFUZoYcV8c6H7Q62kbxa8jkYLzKNSvyuqgsvsRzHfqyZB",
  "key10": "3k8DY1dnQTn7YkPexwx5ocDvn2Sefn6vRUmmPyLFxPyBSfkdYmHScfJFApKGscLbivz95Fd541gV11So64LuiwfJ",
  "key11": "5Q3VVFSWMwjhuBFozsHax7wkJ9avKMai4npW42YdMkkRVcN4u6NDLcmrMNn442bU1x9cvL3dcev8hukmqLi2B3Mo",
  "key12": "4VBcWrFbzAmZBFjz43AYM8jUEYMnV2dYS9prUCa7XqCXjpWRyCP7gtdeWhzwhYd8AXR7UWCAsbBBXYLj2FdGrT4R",
  "key13": "5XW3RqrtvsrJgqaSX9DT2uGuHjXD7wEhPDNVz4TSSghyEmYrJw5YxTy55doeXDe3zKKVZNykFuGS5D4TFzYFr6Yn",
  "key14": "3LnCbFppWuRCQv6UEhdG9iYzLBxTPnZ49G6Bb8TR6ksCSP9EipemHYpvvqLvQYuRanzsNhMvnkFTmaGzChpkEQFh",
  "key15": "36nkwtpG15csd2kqCaPYn9X9XbxEjA4je27k2fFeRZW4jridakgK7pzRG5k2mTr199M9U2ZrEcxrfD4HZefuoTiN",
  "key16": "5bGTgCj3X4EMa5SUuotS5ih2JCHWgsKcYforDBafiEx1H1J1nyEH3zKExxatkaBmZXXzGEjBa8SgG3KiiiGJ5Lmk",
  "key17": "4eJK8rUfvtTBAeHx1tcJ2pfX2vUM42Mgrn4v1jpTFpVNbJSBTXBLZ8X75UFk3rt5vfiux718dGygnsZeNTJFwgkz",
  "key18": "4FPQifqK6boJU12r1Q5yyqbTwEm6opLoC9RWssTMWBH1mDn4hj6uBHXQoTRk73MGfL1sdriGScjQ6DydtFRUq6PA",
  "key19": "2ChFeKVqyhHEzf12oi8YREFUCLztuJNk5QAPDSfYBQd5YVBRqa98sagqRbRXcVd8wWkHHByJ5qqakAPRYYtHnfpF",
  "key20": "59Sda2KPdYnwQCKxw2kxNMmNhXrbv5eJHw9oj11qBhL4XpY1CG83ZN7fXbnSQccabbVUQezqdSLWXDQRVjp6QFU4",
  "key21": "554UzRjn2HzSemgbPnkrJqHEsx36w5MUrci9WzpVpisaD78DGPL8dnf8UkAdg5zQVBtx55Ln4RV77hFTerKPZvx5",
  "key22": "N7M37kyU1f7y2fb9USTuwGWWLY7n5BGuppnUDifrytStskZsKi44YfwaiSk6vwjv7jCQAs4yx2W4FeHNmfxpuCq",
  "key23": "4ovC7SJYhXscEKXySC77c4s6d7eD64pYHRsdMjLyePzwefN3HdYdFAYooQqvHmAe7YYQkdEhYk9qS5pPnNKT3sPm",
  "key24": "2WkCqeUhpwAy7yVqrAHjz1sXzBuNK3pZGAa41rwdvtNrYMFYqi8q111JhSNzYi3A7X4zWU4txvq4Gmnmmr6pwZ2k",
  "key25": "2JrN3qSWhrsU4e7LHTyfVP9hvng1Tf26udjBMkKRV8QmuhQne2qR8fhMHcgQ2XuDBvcnnYgWLWE5B82LwdQZJbzd",
  "key26": "3mMcQsZDvcre7JdnZsJX9erhtouopCzDJyqG13DgyFN2FFQA3EDyVw6K2FYsUS8CyWGHvUHmR1vHiy2Z3Qh4gUE9",
  "key27": "2u5Xjw6qMzRmbjcoSGjrMHzgW5k8cYTSaLwt2QrXBjT8dVHyQLhDrjZ23yuGCGu2zfALSqCFgSyr2LVh5tHaBtri",
  "key28": "5Tzr7eG5GE71vsEVzU53tZLVfBngnbVuMH9Xt1dZSWPTiBc1BRCYTx8NbbPtHoEvYyTpx8cPMwLzrvV1ZfAyQWcD",
  "key29": "4YBdfa5DH52xn1ZU3Hx2YPTefE3xvLF21KnTBovd4yg6LENCaFAttF4hZtfc7LrCWmW11wcdBrgb664Wb248hUi8",
  "key30": "3YZ5heb72wsR8G2hb5VNvq4iwo1fec1C5bpSVEDSs8JSvPkedznb3YcpfaWUVyPN4hfWmpMQH3BPHNdjiQ3CeLpD",
  "key31": "4nSavMEvtAmoJiQM5HHR1wwDqr7z8QAU2PfYfFJmsofm2yirRoYC6uH3JoQJkBWAdqVYHCe7fMnuJkscyZx9JSnp",
  "key32": "48YNBBbFviFBhk6KnY9HWdNBzbtvUwQ4aNFJ6quB5981v7VdLHQsH6sxWPVxZNyXLSoGeiDN7d8s3TCAQmNmM9e2",
  "key33": "4qYLwuc4SZz6vDdEEichF4cnqk3DbqFt5ZQSEcyXJwMtjX62H4gM2LFtAukagAXq5AGDF3kgyACSRth1k52W7xdX",
  "key34": "2kkER6Ty6EQVzpqzxGJvy1NqdS8y69cakb1VDQ9PkHxQb7gZrxqfvZwCmL3aDkpW4snrNcXJ5N2jUdFRRxsZT94o",
  "key35": "3GnQk5Q4xmu45M3j22J3pSRi9jfHruDhYANpUbPSV8PtVeReRkgJfidk2JAosafamJqKETU57eNJZHr3KMzxBh88"
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
