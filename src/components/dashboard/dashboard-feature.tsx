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
    "pMPxBjq1s1GDcAFsJsrpoRS6uRpZVthnATfW4arJ746cJSbYEqnzBSvSPbPWAbNPCeC8vsquuVeA6wUNRivPzYB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cNZ2ZoQarzFBSnPMRrkkLLbXRZERVNRxFW7LCowyb9qsmd2JJBw4BhUrpXH7y8aTYmTKEzBZDBeew2pL3GbC8bg",
  "key1": "64TDfDJjR921WMhGuiV1s9G3N4rZAifVnU63Xx9qefXg3QZ3zHfTWGueyJ7TVa6RSrXqTovirhRScAoeZgdFe6Yq",
  "key2": "4sYoVyboeVtPVCHGzUZiwxoFW1Ef5wacadGd1frP2RRz12fJv9sxBBVqPDNwMGo8evZBGnJsJ4TnAE34xGv5rhSU",
  "key3": "55X8xQZ81jWG94nrXkbmZsLGRQc6CtRSSXrs7GAaRxMJ6bnTpjDNic4urPrwoQNAYcV4z3fQovWcstvtrCTjtVxK",
  "key4": "3aTzoPgqvGGvwVbBoLm1G36XYgN4YVRL9nbayMbnQ1enc5hR2QeLSddvaCQmDXF8qf9pdyXm4e9ToqWqYMsNcWRx",
  "key5": "5SuynTFeaU1jB1gxrFb6UaptqTVjWMVaqFdd2unayJyoty1YEAKyKqzy2Cq4WTzU8oTDSPhEgm4Wv7uWbHnsXJd7",
  "key6": "2PaJurDgAgqrdoWMBkTrH1kpvttGQfyRuqBgHXwh2TZbVC2jK9rERnwJWpdnXQvbmG8wkifuWnxRzmuj69BdzPQB",
  "key7": "3FHwC29ajiDB8KmXg5CtiGuLue6Rt4bTakrz2VMPV7Dt248oQxPBpcERrLMPXAFGM4NkcGjJVoKmS7zCMvyVA3o7",
  "key8": "3MY2hFKtJg4vu9jW9RPESSzKw1X1PPZug4h3869yqm4uma51hCpQ65JroLEPvfHpemFaBeiRWYzjxKS9wFUSbkP4",
  "key9": "5qLGiu93XiqnRaCtn6Em5jAJtZqh1CUtiXHa3cxVi9eGyzG1E99jf9cHJjvC2Sgrocam6yW5kxzpdyRGNY62bsjX",
  "key10": "3YbSjajYVVSkFFNu2MKsozxGSDvZSxJKJUXUoZTWgf1CXuocxhF7BwWZcQaJrfiQB3svbtxiJzkL3qDCU7vDNUMn",
  "key11": "3gpAp884WWLzBmaAcxki84nnVpHBgAzTFpEp8ab7376aCeHUAawnK8paa9SLriD9v5vdvvvvEHyemhkfQFwH6jY6",
  "key12": "5cpXPnZrD1CxwdSXsDgRNoPCEnnG4i6TcjP5fmdSsnbeCw6LFKDsk7iTuVtsZK1yFcViqzujdEgFse28XVGzXFur",
  "key13": "mRuunkLrruiYLXsyGN9NSijJnPt3TW7w4wUrZqTVvNuK1we66SWAHLr6ZUoaqVM2f6MS18KfyMuHKqu1iX9tXFu",
  "key14": "59YN49SjpGrdqcW7LrnWR3JMeFsMbwyw4rquuXQMUPsmpCtLpuKeR272rXv4H1kQSikbkS1oBYUc1M7DCBUVmSmK",
  "key15": "KpmyczMtQimMP3cSCUSg4CeE1fD6GbrNhQWW4CnyKPurBdrgiA6i56a95Wx2r8rELmDRatfxov88f8P8YVeiCxE",
  "key16": "4yoJ2HDLmNRngkvrXkYCsgs5yjoDmcoLxsq9rHWCXK6B19sLzSjHNAZdeysBrASMjjRs27Ku7SeBUEvx6h6FthE7",
  "key17": "2XBwTAeYVQJrwXinYQcD6Vz76dzCQhVw7m8rzM9jWgx5rEuJqGNqWz7159HiEXmmCvVaqn5uJMFUDQuDyVczT8MY",
  "key18": "479115yPkADsuuh2W5Kk4C3mLR3qZayf5ug6aP1FrupLgtkXBYwj5ruyiCvQyAoueeZbVpcLuajs5vhBXUeGx3bw",
  "key19": "5F8x5pujcBQeGUb4qmvJp5aXJfQJCeG737i5Mx1Ktg5B4QV1fwpugWM5JA6NMBw1zPQ2gFaLSeUYLyaup6nZ3oLb",
  "key20": "2QohUL6rB7hEn37MfRxx76K4v98x6tiRHFo2s67SfXtP9oWZwqDe5MeGozqcSMKkBQFYb6qyeGvD2xjKNrgkVNjD",
  "key21": "5iDej8sfxEzbRSM1787DefhSNEFaDGPcQ31G3TNn98iYCEdYAgyEX4rrNiqq8V2d6JFcV2fSJLy3kCbcWrYkLQQh",
  "key22": "5sfkFpe8ykYJjaghXFVw2RcXBKC7HTjUB2fktd3mvkL1WP2oYHgWhpM2ZyxdaXgGCBN6CAv3D6UWmpgbSf5DkAuH",
  "key23": "5VV5mVHDhYQabv8PsDpjcj8NXV2YaHP6RdpeL7n6vcVSjrQ8hLXffbDUuucMp36mKg8XDQw3XzHQssAabmpKhyYP",
  "key24": "5Y8mnwVGZBnjEJGcZsR1koB7JGJwxJbFzt1j2ha6xqHpMYPu7H5kKgD2oEANMBnWYHVDbk3wV5npnA5QXLEYkwuv",
  "key25": "34agdMY1AdPNcZEVKLcb683nAUxsZaiCdN5cxztW2ZnDK3zrZFszxJWM3ppGiN9NKR6EAGXb9ptxJWXy8uhFa4ky",
  "key26": "4Hse2157jxgQCDGftDBhfTHH191Vx569ebGEgC65ijxFjyyo6zcCqmXwW3YmbeEwjQzcSYTRbCh9BsRQZb2exFNn",
  "key27": "2WxS3327FmYU6kLm18QccP9kRRJsRhhxzhjvpe1VteczLsbQgRw3NbWRAdi5HVsVvxzvvZvjf12idLM9JiuYmqFn",
  "key28": "5rFPjc5N2en1L65QTrtrp8hNZzZ69GPLv6HWNx16dD8u2BXWhtsb2chZhweEDPh2mZtr1d4ge596FbMgyWLomTzS",
  "key29": "3U1Hjy4q3MjH8uMeWsP9RXA4uj6eGfAb3S9vdhDj4bdAj6FAp161kaeNmasumQfNyhYqZjPyEk6wzswGByZ8w8Nc",
  "key30": "5VZvUx92HmZqVFMM7Dz6tJhbY1qUZ8XhQGkrWfQ73RwHiBEi4y6tmgBexxnVgYKty2q8it32Gx5Pb8MjNMBLX7mQ",
  "key31": "41eCfzoWwz9Xsc4LCL1UnNfK5qHgPHQxQdW4AxYBxubhL1cnd4iLxRYUYkxDJLWWP5nCLhHcpcX7Lw9Rcjvie5UV",
  "key32": "4mSKQfW71AmRFx1BE9QsrCwUuxMSvX72PcrJHdVnoy5fdWuKKfzorJmS47FzY8rRWqnHTsU1kcpG58VjZgrx8vVq",
  "key33": "4UHJcUURuJ5YLMmdoWr5MZgCuMB3PXvYgzDXBNkxqLftifwtRXgp1qzPYz695pU51jinB2rK8SL3KbsgdyvUegTY",
  "key34": "2wNtW9YKAgVgqzmK5Phyy7kdij2cEPUQrgdroBC3vhYirVTjKj1gMH2QKrYbcbbNEyxHDjKN9oahRRt5G877aMCm",
  "key35": "66TdqvjYJGr4S1EohDfJJnxLZ1sz9gg98XtbfqYFWFtPzVwG7hDZzcbBmRh5Urqb5Vrczuj8Ak7uTM8k4Z3KeDrq",
  "key36": "5ezY2MyeiJrknwoUADZUhwYH3AiyQXvVW2TQbZi2NSCG1ysAGXZ5EBnyKBGzw6iJTWrDXSQ8BmUDFPn6mYsMFdA8",
  "key37": "3QJFbC6JqdNSzwQM6d3kVQFghDu81GBkzH36tZWYK3UDYRbaVA7pxSRV2F6QoR53XJF8gV2EFhVPwpRLUyNZ4Ry3",
  "key38": "4ctueB1YBKz1LTAYEhTfAWKrsGMEaab9aa6KFhCJs8DB8DnZtQvrQz9skQMfykmRzXTEeWp7h2WyN12EicDzkpTL",
  "key39": "36u4rXmdT5MJJA99JnRxiiPFfUC6VzSyrApXGoH1g3KftNdWQpc5ofNcHvQAkpNQRUcwN1Py4uXJbADC1zXVDUgy",
  "key40": "4TYKefXyyTfLPy2hpBX7Wn9Aq5iKZFo4d2rxXegee5ZUTmgxYrk8RCHXvAhR4zG1ZxQmtdaQNzJ8fYb21aHdTTHw",
  "key41": "45jBephj5cNRQVUzsLcBkHRnShiBk8mH9tDWkfsG4cpzdqX2Y22Pe3CnK44vuik655yGzFbWthwGcxtfsZ7kwSzT"
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
