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
    "4PaWqQsqsQM83YQ37S5hVq4itXDmCVC76t6L7Xg3e7XnVu7nJfKQGEWATJEMCEpSybfMAaUJPUVJM8zpHFqm6x1y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "496sbjA3wWFXhNXSrvQYYz6u2ZuPsvdycj9JEe1tjTmM8pCF8ReRiXnHeVQw9SY9f3zMZ8hJJvMVB3FU7Di2sKzT",
  "key1": "hg8RPVLeL1rQsH1wjRBt6t7Pbn2n6yDTkaS5FhuTn5P7UBGt89LBwHKxyC1Z7Dgzg8wR7hjk5nd1rdVc8ksBz75",
  "key2": "5wLWRJmaHSKoBpfJNn2uPZia5vB8onq6MACD9HV1km9MFMUyuQS6k8w5rFwnxK8eq7CKyRc9pjVGDzcZ4e3cvMVh",
  "key3": "4jFq7JAWdj7G3dLpHG6HhYfKPRoHzbvNo7sop4q5wfek2n4DeaLis59VSyEPssSFKHwyobmeg6PcGwyczeSLrbNy",
  "key4": "NmGQzcJTtUztu14giNppt2XxdTN8EgUFNuPc5RyzMKDKqL2BhLcApt5eMsCd1enPYVdZrZb5az6ZJaCkZNTB6fu",
  "key5": "31x2ysHY6fx2q3unKfVGZTBACGNkVqGdHVzHnH5VupKXBNs3fktpAvbMTwHYAEmHW5NfWKvEUgzzpGPwy42cjeCk",
  "key6": "2tNdycW9rVAENHbp6WoL2hKRnL4GH7mB1ZmFe1NJfeQPYrKSJuGZ74vLbpNXDd79YWwSh8ZcVb7fz5RKESJzCrhh",
  "key7": "3aWVyrWuFikzBJizCsjUguDc3QTNVxuvu6FZ8JpnitfEfg13VtgXRJERUyCks3Ri3cSHyCrXFfUi3nm19tsp7ma4",
  "key8": "5bhWVGs5R8ji4hXT1bLSRTycGrjDC79on8tkmZTJMz57DmLeFT5KVMvEctwqpGEjGMEKtFc1is3htg4nuHA4vkkx",
  "key9": "2MDmLNfvbDQwTxBivDqiezgkb9wD1ReCJ9SEjghDmzAy27XhyP4ksi6Z8knfmX1r2RCKcGCtDTuVr6fRDU3t9xrm",
  "key10": "2UPtmd1SqVHQeQJWMAPiyg4BfBzkFRd7c5pJdj25qiGnjzZEoxF9PeTdgSV8QnWoD7L11CXbFVXjkSzo4Bxhvkg2",
  "key11": "54YPfgaXJaV64NW9dF9VUHK3nR1cxWqcfw1aMD4UZzMjxn6M3CwFRrwJVpEwbSQ4hLSBSMeUonHAoh9ZqwcR5CjL",
  "key12": "2acBVLKKwcXAcBAkUDN8zoUNQEfbPgcYnMwFgXpaHosu8rMmSZF3TajnP2a9DuwLjqEPEVxyjGVGsJ47YYGgcvmY",
  "key13": "2q2uWgUJkYQDHGWS2RqyBWcBYBJi4mmcuKv5Bc5sCfCJtwjd3gHt7A1deqH2v7fPR2EWPfEVKrisZVytHFXCjCXd",
  "key14": "2ssw6NgVgMFhxBQRduRML4dA4TL3M4BuxkjY2hdHdJE9DgY9KvcYW8zbW5cyPyjtQYnSstqz9mWzdndxFNNHrZMU",
  "key15": "4hJaMEdnA5MhLm2Bn2cMhqzsEee4G4c7WzMayM5pJ2yfb3mUjminDi1jmmNSj5k7QtkM9mSrSJBF4Gfm4DpihB58",
  "key16": "4AQqL8gqcNqXa2CWC22vXGebAZnfkYr5rAsYDwHPP9i8aV9qiRVQqVSCKGZqfcemoWZExN97ffR5PyoKQuXLGuFL",
  "key17": "2KnjoNBd4pgWJLgWunBX8LJTd1M9VU8QjTWEZzYj1pB6ZLizGCjPACzXz6XAETM9d3Y78xK6MKMBhRKy3f4oD2iS",
  "key18": "4tq3npL8Z78m4QZkDXWWWj6F4sWy17e4P7JHp4fS6zEheEecpf4zHc2EEJdAoTQeet4VrqWy6XhLKpgjUJFNzjGi",
  "key19": "2XHbmNBk6GMXQaQW2YR8eANyFANVeVsXqoDoNeRaE7NobQFPEqyVMbrbdv9LgHBgP39bvAyoWBhx9UsmAKWaS2qy",
  "key20": "q8X9ameM39ZrrDtxH75wATTnRwMdzCfjkuAWiaRTaCArEwCA79ZdTktyazxV996NGUtQBYSiEqAKa4JxwfPyMb9",
  "key21": "62ghLCuP3CERC5oJxj9cC9A5czD4Ftr7vchh9VsoNt2gSjhdVWCwDXP5TP96B9ZF5urrTgeGigNkn7x35DnLREWN",
  "key22": "cG9fcBQvxQTbeFQD52knLiTBJKb5SpunEGGPiXpds8AgqR1xx6kZX5KsUTpFLabFo7vRnuDdPswvssqzo8Bicah",
  "key23": "3c3sUbTth7dtPgywKscNiubsdL3zzNaBQFwj3da1nfkzjGYWnr14rh2TvptqS7d27uE6aRmrgaCHa3c98SCPuVAQ",
  "key24": "3p1zEYfcXBXUoRFFv8fHqGb13jY7a9qyXASa1rgttD7pKPfBgTfVJ5bMzzLqso9xHcpfwThDfQVWXFGPueK9AqYe",
  "key25": "opvXHq5ESBJnTictsq91oxRMp8Fh3D8HfFQb1kA6QeHaTuwMCT5RAc9BaDcyf5JHepFwKDdMXXPh7L8i5EqtEPj",
  "key26": "Z15YoKXXm5gecC4bLxGFpt44EYfFizNSiD5E2ZSGS1xssoVA5G3uf5qvH8q7R2pf63G2iNSPtstQwsj4xXQNCmS",
  "key27": "W4yzz4oi7mWuYWnQwj8KcyMc7qMRbCgxUwGFSQwuHPhoXjrVHCnpYzUxmioZpKEscYNyLjgimrVEfnqnyk4nys7",
  "key28": "3R7T7hPjCHE3AdUQkeEC4cqsoeSMN4LHcjfNvwMvJtFL35xgEKQE2Ztwb3DAunLVhvJssRcEKLacmzCCFs4Wbtv8",
  "key29": "3sySPWCQmWZANAumMCt8XpL5qjkYbrR3KG211HvczKfTnTLLCDgTHGf5ooNeYx2mbCd5NVmRNfT9m17zyiVBSSA2",
  "key30": "3GJfWyN2njMfLHy3nk5kzrrgjzHEz6PaPJgRxrqvw2M7eS1HeDHC3AKR6DotSaUq8jK7GCDBHsUKiZDKKyTeMpU6",
  "key31": "5znivqw9D1V8jnt31xAX9pwpansXFV5HsBcDF7nx9HQaCupgRgQnYqjtHhUshFSyHPwG643qBAizDn2xKrrujBh4"
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
