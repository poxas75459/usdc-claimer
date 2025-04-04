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
    "B7Q6YPVaFPevDa9Ytinu23XggsxmdPME17KnTDKU9gRd5WSxTCd5yUy3RsQqZtHTpgR7rmd6LoSaT8xEvSDCpZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BtpHAi5wEP2tD2QikpSF7bxU6H1aXCkA371xgY9hCi5f1pYzhyH4KurnmHQcon6hJbK9noT7JEuQN3j2mRFdBgE",
  "key1": "3sZDjJLjpWcYmJbrUPJvepJcyAoPJvvKhd1FVWTxh1w2zH8oi8MHMf5bg8GQ4eDYiB2aUmTpT1r21vsx2oWG2AkU",
  "key2": "4dg6TZ34mcAp9DFFmi3KbsFLN8Wb7g3ZPM9t4ynYJyHuWsf4qUFdrpesS8c1tx5zmDeMVLUwJuhYz7ohRghprbF6",
  "key3": "5Zk1BRa9hdc7tygNHWCCvhWUpAuuVh1Aj5NMXJtLkyPygqgBL1PgHctGyLEv35tQ7og39pvckq368ms2bXiBkrFb",
  "key4": "5P4dF5rwPU37wUQh8rMPRQ7eK4pfBsXLNMVcFbxsykfdZKgtYFbjCi6wWqFzv7aNcfAkrCCzMTyYogKv6wYsCygQ",
  "key5": "2dVkiChwQz9mPzikYRf53rsreJkYuyQNgJgqxiTJf4sEwdDEDyZuaaKKy97HSk4qbCGnkD13R8Ta3T41jqynTxwq",
  "key6": "3HuuyeoJnbjW3YrHJ9JwCgCuWWHzHsULTM9A5LncbVtNd12T6G1WR22nJqpR5otgfeXCEiSWMmiD4891aEucVoE5",
  "key7": "247DxdGGWft7BqR7MCaJSSKGz1rdsVzKWdLZfueiuXh8ANLnmi2z9D3L47kowSnkW6qSsFJNKuZFSJac48J7n3By",
  "key8": "S2WZLBvpJdBjDKt9vJyqFvYUH9qKKeAmB1mxQLirToxaUh9mwAnxdvQC8AmSaWejP74mQVhd665L2oB2521QDHu",
  "key9": "5ArCLtqTSUo7B79WTVnN8umyWaWpdmSpG8dYhECcAgqPpk6P9KiHWe9N6tZwco5DR9Pahmm7HcFTgiqumLoj9Evj",
  "key10": "57FFrMUzMUCcERnuBfWqN6md5PnZQsFk4mKZME75ppp1kkHaNEYaacdYjvxqhujX4WMcHHhgG5H76cP7hseYgR5K",
  "key11": "3aqqxuSQqFDv23DcoFcr3yxyzcWgYHG5KWKbTmxZHkhBTLZKZU3WgFXmNbjkmHmcBPHPsCgX7h622zkWGXn9PTRJ",
  "key12": "2VSxB2kJ67sKfPvtx45x3H2mdtwptrTkBwEUo88X1CHxY9j7wQAxt41gWD79MGAzcHmVdTiqB5YGJRWyB96JXfaZ",
  "key13": "5Gvfs7CDKoQNbXG1LCmyrjPHyYaqYgApqUJyYzyVmG2WqitAbQyaa8rCJm3gGrFzQSNncbJHtaZvei9Cyiz3VKuL",
  "key14": "55res232MWHhPGse3K9jKcsrzf4CeLxpNuLEHd5AHNGdp2Bp81DGc339HfL9jMb1BDENfAtp487VziYpk3TEJvjM",
  "key15": "4vsmWCRnYtYaeU8e47NwDm1NVabpBAuG3WNSmGHxRiUpWn5KXuQwGbbQZtkViXwnXuJ9MgUCsQqueNS2iy9ftnje",
  "key16": "vVAibZ71Yc43KPpHHYKsqTkiBzgEcLtVw3m54Buz2KvReMLTwGqCKZyTS6Wk15AYt31AZSkHJNkVDfdPoTTW4ak",
  "key17": "2vx1EyBraqSxW1kQRLjDQAkUc9FebMJ9EdtS2Pf17jWucXAvZVJ7FektCYYhF1ENHa8gTyc2KWU1PfcWEv3ee1B1",
  "key18": "3oBHpmcWrhmbgugfRJnPDH7stGBaJqzVz69izNvJ5CyPjVtpaiFiMtuZxYJq2dPbVYPLM5JejH5udU1pwnE6rV7M",
  "key19": "478yYSwXQ2ZTNZuZtWxQsBojfL1BMWyzq9six1X2SyEjv3nc5qMxbeYdA83m5E7Pn8SymeXC6yvXoHcUWdTqN6q2",
  "key20": "4Tt7zQf6bVagu9yNNoKediA7j32eFz8D9PGYkZTeJEpXR5Z5QeXPug8UKgbB3Raw6VfaZZPycBax7KCB6wdXUdnp",
  "key21": "3m74Te5BwpyPddeMCoPm5oppMCQEgJvDAEDY58ek4V8iUbDFKCZQiAPXfmD1YFyNyf1bAMRZshRqZjfmx21rNrzY",
  "key22": "y645rxf3HkVWn6QkXCp8mNjnJs29xoAempFrbR6T8eW4r5WAh7XxXSbpXgpYySmbdiCYxQQ4BMt7SjBERRe6u5N",
  "key23": "3pqgza9wDqErGQh2Br7qM3d6bMFbZwEEHwtzb6A62sShmyRM8HcFMN8aN46fwuBZd35rHcqAdhvGwLSz4T5ZFB9Z",
  "key24": "Zz2z2ysN6e8roopq7AnTM9rzyKkKvtpvQ53GCfr9F7zMYErZGw1VCVbYYgim6PNv7sF7dUBwHXSJRubYABdiotR",
  "key25": "3QYx13QumKDoRyUzrNcvAayWbFaAe4RD6MfNJXL9MhZ4K2pTgG8jpByQqyDEKQEaDFvmy2WcnP4fcAZjALQQRZcA",
  "key26": "3XJ5Utpa9Gx7FUhCw2pYAzJSkCEKzbVJWvawNJVkZKfmizCXQwUthe1rcqF3dbYQWc95pkkLS6bHLGKEE9AXWKRP",
  "key27": "2s5XvTUYo5Fzz2J6ZhexrjKDJ7ALzuTL15LEXF4Lzv8v2H2xpZV5ttGpmR1nXHBSARJ9Uizp72N43fEExTr2PyKR",
  "key28": "27M38pcweTx75Ccq7bcgQCJQsYrqHKT55V22UotpaxyGSx9AbfcLids1dwiB1HT6GzBnxDpJ9QQvN8NKE8J2HhTQ",
  "key29": "28c7QUs6tq71e2kWMb8w2pyCyxLmAMGJstKkEQpX17D6H7y2cZKauMUUAuxngxa6NZc7taUtGxzgFXibnRjPy5bb",
  "key30": "3uxx7cobxZe3RNRGUxHrFieWNDhsaCH7G6GUZ6HW3zTYsXbn6ecRvrUhQZsbH52iGRPCNg8j4kGp1rMHQhuhxJy5",
  "key31": "4spJqurvcxmvBQxGS6pKWSckjSN2Z6f4QLCD3vQSSyckeAGZbw4Goy5Bi1wPjmS6SaohpkN8ev5SRF7X5urkmomD",
  "key32": "YABeu1rZRAaKAGU7b1wVXJD5QRTP54GWaERQwHaMd4JkM8gXeybR6Bk2yUsZXPj2oN9Gi1LjC57LPtTMuXgVk6K",
  "key33": "uuwqSWyS5asYyrtnnKxYYikPT9Csn1PJ15GjpKByn6sRWoKqqX3anWa7bLFKoi6nMhC2yvv3P9YBiW6rWAuE3tj",
  "key34": "4HeyhHTb4pc7JZVeY3fHPkziUadwTaw4g9WAE2AbsNvPrm4mxa8LvpcXCtyc3pGuxqy9oMykoVsJnTPn5vjnWDJP",
  "key35": "3YhRi91eqCpPtq54agW1rvvK9pnnyP6kKSiTTxub5xv3d4jNNkmXRb12KK8NvqLQFLM7MQcfXi8Jj8qnF9Ytjpir",
  "key36": "352cTpoRGDdESJrwpkwVDnzju1S3fuKJvxcxwuiJDD4hEScfDG9HS7HDxnFhmMxCkAxShRYk4V36QdL89ZWXidQp",
  "key37": "5iH5XTuyyvEDVWbBP7jgLUaANCr68hfmwc6TNvffqJakkDfK4t6PU5qSELEF1GTMhmB29Qo3tPcxiggRM2K9yjeA",
  "key38": "3SpSWWjpdfmjyDkTYTHYNX2yU59HhUQhZL3YmMmzYA6sa6f8eyjhkRL6GeBntXGayGCrT1jr9UzdT7axnYJgUJG6",
  "key39": "mUMCu6yRCVPHiDbfEbrVTisMzAtrdRwnCiLLsZFtAdCY6nKY5SyVA85CJgPG4mrQvcpuaXe81kdZthpgXwr9x73",
  "key40": "2pTLXniV8RmNJ8r1Qh2cUpi7x2Xq4fGBnthLg75zD6yFN3nuYnD78ASfabmQa9eFscTjc6ZpNmMmegb7CjKGVFnQ",
  "key41": "3PLvY7imQFCnGs76xbfApXiMxLdZ69SqpcfKB9aTPvvpvn88hZye8EXhS1Jfua3F7jDo27ogkSRZAwANYjH5LP6f",
  "key42": "49N6j6aUjHrhFwubQrCLUvf6sYg9AodEypKM7EWwA37PTaicU5tZ1MBWzKKhu3z43DnnZAca7Lh8HWmGmprY5bPn"
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
