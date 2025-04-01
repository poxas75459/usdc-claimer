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
    "5VrXZXy3ZJgcAZ2w7rGEDU34iqTiU54QXbbCDvt7UqMnZSAKwyTDRXMPsEjCaVaa1wfANrQrXotubwdfrREVvNhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GuLjYodEMSTAYMDnYDUFgobhSnPXzsRLKHeeVLhw4zRAVa3JiKgg8Gf13jc4NAfYmAKhyGxrkrnesc3zvBC9uU4",
  "key1": "61VffGVLdZKDzr7GZf7YkD6Mih5owhED8tCWWSgdjdc7KW3EbPgPeUzfmS8YFSdHKb2iWjkm7at94uMdmpNbYx5q",
  "key2": "3WobqTinJKBQvF8nKMGSaWqtQxj5WnRcjao4Lf3gx7T2kqFKNB6wtw5npziy1HdLjHdXDfLeXrHi4EArki3aENeH",
  "key3": "4cEo75YQAjZyjSCW4LjWnw5LQX5sVDUNbwHtFKvPVqw6tb6k6GnJ7G8NMExCLQKpnodF6LcLY1AU41XKy84sQtGm",
  "key4": "3KK76mnJVHSWUjqUriwQXuyfyCRa48ruC8LEoUmRqxRXYRv3BkCRudhUoDKHz3ZpeV1ukQgBbnoXjDs8xGG6dv7K",
  "key5": "64HPAG77CM7X2n9VdQZmJMQRoTsyfdcwi6risNN7guKxHAukmQVdpbPXMYN7WfiDPSKFtm5UvLZVMErtkSHh8Hjc",
  "key6": "47ZcxhmqkgkPE6pzogGUZJWrfphFn8octmos9SJBEqda5vHvKeKQgRdBzD1a4adjse8uPnaKaV98hMKktjxyZNvH",
  "key7": "4LyJ6s6qjDZqU9LxmHpo3kSNdB6DqXYrsiCJ8W1p31sYzKDxQXe9E715rPhE8JMT6GmoYgKis15MxTBs5ig252h6",
  "key8": "2Sq8aUp413QsSXLvkFxmp7PMENL755Rga619rgsFm3FyKCDQPZKrk4yBHCrcSPghCdeJodbQmzDuAh6krR6CfHsE",
  "key9": "5NzPXt2RFdQ93PwsNw5bcNLBW7z4zXnWqiQmjKft5v9s3ra7SFzcF1cx2ik65HbPUK3wpGzZ2r8uUfAvWKa38CCf",
  "key10": "4LrdiLvyTTmLMH3qbA2GpgdAZjoHXM6A6SKcAbMSSjPGjhmrdVGamgy2A2qfQsg9pYAe38SuX8AdEy4TjeMtK84M",
  "key11": "2TCy4k618WbRYeLDx2pBL5Zikm9StYDFfmUfweKiq2KJu19cPWE85RZsaN8VVP3TPxwxEeNBSVzw2WNPzKL1sVXe",
  "key12": "5H41RExSs9Q8CpfufNo6tm8LUXLwSj5b1D2KcT5Mq3ioLVXuLYLScyegzgAKYBPDYhdNhKLW6xG7BoHpXBAKVaia",
  "key13": "2YDLF6bLcnc53dxxSBAs4iku3NEk5vyKCRbKhuPZmP2JkWXaJbC3Bmer4mWTQMT8YCGM8GWNiNGjd9pYbTHhfKU2",
  "key14": "28wtp2Uhpn8qmC47JSLUPZjNmFLARWdinyKBioP1oBiVFSoDSxy5ok3BBBohc6RWmEAHV39Veu7SbQhCk4BhkM2z",
  "key15": "2rnorsTqBCeagoAccZAxpez4xirJTuz8nY8Zr4ThQXGfXKQkged1P1N9RABoC39fRJa4HNtuxjCk6xZ6JNYa27BB",
  "key16": "sHEgpzdeX5H6eAke6VYJxxyKP7gpuTptronUXYF49evwuL5RoCTyoQ4QQrDifw3S5Run6B2nrLqwtqri7d93gtJ",
  "key17": "3caouW1S4eDGNosc5GTnbiurtwotyoMLeuWrazn3a5emtC2fYViu1bs8V6bKsLSCj1LsrBzSZP1VcxbSrTRGEQzT",
  "key18": "4G1h6jsukBH8Fy7T2d8ACv7Mb4nQqkxu6wJGP2G9k52oVwUUAUxBxtixUq33LMCBQDZiGrefUvMRrncGWQ9AJ2zJ",
  "key19": "3tgsLnP2AZBZdTRGFo5QtHjzgPGQiAZukx1LEPzNroCuSRjzatjK8QDJ8PUuvCM7KroGoCctHfy4geT37iMZtagu",
  "key20": "3onkggSyeqY2Rgpj7NsPNPrjGTd2cHA4nGhScCPBCvmmbhzZd5xbLKiskLHCDdcbGWneWh4PLm8XaDAs4m9jBWKh",
  "key21": "4bJCAsaJ2GniK9ecZKoS8rmv3wbRAyVKJiH3EuVoW912nqnBDVpFXCR3bT15ykLJg5LrRy3qFZZYr9JEYdG3WfPS",
  "key22": "5dRxxRH4mJsauHpZegYXutufa9DPDiavgrkBmTZkVA6uA9bSr5gkimGNL9RwLnfT1ND5xaScDRWzckBZ4FtSrgwP",
  "key23": "2aFYEr7RiAKWCyngazUmsefxeoui6RDURjZxKXYAfhsuiGHbFwWE1hgDX63txo5JBhSfv49iESZrbNFAvvYjJEPn",
  "key24": "3v1XkQ65rYRggfAenthVUa8qcbhVDWAVv3MFTndX1iQPoC2tr5HHgZd3kPPGc5vSLw8U7pHymkzedd7RrUKV25WW",
  "key25": "3zyddzNaCzVPnEYPkca7jZMymaTZQ2YDnpViRXxrAcWbHsu95uN65YVg3SzSVB63xryh8adNfqtaSN7MZg3GB812",
  "key26": "5U6qAYVC8VvZwiBkBQYXWhu8cGxW2BY9K3g4BbEw6mGTLSYJwFFFAC5wYbUJVQHk13zcodj19MLpAQGdnJySbfti",
  "key27": "22LjUBwQxu3b6HFYnxRshDp1p1XbQ6ZvE6oHR8wFW4wnmjvPsD3NEXpcWM9MWT3UJ25rczedPusoTifRtfjWok33",
  "key28": "5kNy9YXkS3DRFgtrX3X4qehsoLE7JGawLtXj5ugadDKWVcaWUEe8t5m3dDd39psYrGu3RHbEnb25fV65baNGpwh6"
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
