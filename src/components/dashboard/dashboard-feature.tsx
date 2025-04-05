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
    "4aKRjHH224ub7CWjw89hFbHrWF31wKmRzSAnFNScYKPThCp13REbSis3VQEBhEVZFDUQvX2xdVdiLJU6NuCpY8mR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cF5XdXD7rgKX6pD7i1gXLScUd8yMSoitc3PaDYeVTLzqELNQu1HzgrDGp3zboDHgKrcJFtksgQwKzy4dBDEADhh",
  "key1": "61i2KSasSQ6gEFWxAqKkqPabqg9drS89ZNrqny7N8oTP5BAbtwMPd2h5kRXtX1o6ZN6XYuzATLydcRjqFyEWu7TY",
  "key2": "2ry7CY27bHpzWAGAvXFbvFt2rAPg6dAnuD8SEzA1UfJZkyeL8cfkkFemHXzYv4xrwTATXM71VoVxDGekupYzf95r",
  "key3": "3tDjPSbgsWAJMKwsnnHaa5aAgPwPuRonwWRDrMb1SPiwtVGh63xc4n9tszGQGHguhqZWp7Nj1QX7kLdeXnJZ35Pt",
  "key4": "3SzbrEv1EiejaJXKR8mcL3QC61rtoBJJTknfYjWpFZHfTnCQ6zDEHK4m7ipFyqNFBVEw612sMyg3AnYn4iSAFUE",
  "key5": "r2bm3kwWQ8vEfn7fQTCMLWqFQ8ZU4CH47a2z1cNW7UJSyS7aTrZSKmTSq1MgXWEThwrtnQZNCEmfn6sNHbNc8L4",
  "key6": "5nPae5eFdZAFv4bBjTQ7X8NqszJYbh3xWmLTJYi7jgicbXK9SHVokqZ2osjQCF3f3MdV53dYsLVk6cFFsJaYokSe",
  "key7": "5i8gkNWo4ZWeGfyAoxFFP1dAaGp5StnzQuM1zWAFphP8wTHridxhXZE3WPqzV4LQ5MHhc6MRQpCSvwG9CA1VzfGs",
  "key8": "47Qac4ea7DYqjSxVPSsdwzuhjTAQwWTvkjGJTgDVdXNbMfgcooSRymPAjRbFDQrRKzBoj6jZz5oc3aAyk7aQNQcJ",
  "key9": "3dRnJR8AEePRQMjCDqQYSxvdJdnRaZVVcPV3e2kM1n9CoQZEhmQKoiJTrJjrM9mX7hxixV9F7pYs1BQT5tNkVm8j",
  "key10": "2vQDHsm4VCJYPuXuoJ3my35o98RsFKMqrScQ25PLi3wXpH7bw7CXQf27KjNUGAw877VXTSQdq5GTykMmsBNqjoV2",
  "key11": "46X1tHpdt8R5MHH6KLV7HWazF1S36pZtiSQLSHr6ARkHbehQAuK5Cu5T9ytJE2fjuh975iLR4xtn9XEMJd4kjNPx",
  "key12": "4i4K7z6QRDEWtoeSat3UKgasFEcER2XDK9DaJsrhZQb24yiVhaSgiJmRDVMhSPrWPMYbP5ZfyVpAfkLX7XVLpDfd",
  "key13": "4tupCPTMcrZNkD5MJwcodUU2kfbFnRK94sDoJxNr3cBidZWtehVEuuukc6hnfU9nCJFeZg62RXseLoovB6kZoP9R",
  "key14": "58CtJe1QiN7kS6xM9BcHNt7dtcV5xp2KCjYWrU36XEHn1ZHCpuiXNfooVaVbETDGzTQdBGoW6MnSEToquebsC5TU",
  "key15": "4Ux13etz4PVuuMMPbwzGicL6GVcJTyAEAmVdE2guLTS6jU8nit4548zKYLhrfCyqzAKHi598MxuAUFXKdV6hVXZo",
  "key16": "4bZ1UK7ovXK2fC6b57pAMCs3NLETLpqoriAZ8Su8quKr34cEY1NiGVuSofDAo5KELHdqH6EvSWanA2RvKQYWAHtE",
  "key17": "44guUZm8vn655h2nVHrhdu5mWmoXEdc1b15erFdpqkvgUdRt4Q2v8h9iU5JMBXxo9fM3soavL6VHb5psBNBRZxZT",
  "key18": "65hC2eLsV9VmAo1bGULU8AYqxvCM52hiQsM36znjKhsw8p3x8SMazUx6iSspUrKH9WGfoMN8WwzSJQRVXh5uWedK",
  "key19": "DjwVJwZFs1YLgu1UeC21d71zb77SXjuhCYNEbBA8mP3yXvC87GMQ82JRxseoWKasmJkWCsFBxwj5dNBcA49aJd7",
  "key20": "3Gzrzor753DhFoddiD5c6QDWxfELaDGX8Nhmrp84aEJ9Cus5KosstT1a9p5RaBsxWX4najkmN1siguuTWo7whqKf",
  "key21": "5p4fWJcWFLM6Pq5VoUvdBLtawFyZqUG7C6wuWV71Mh2YV5vzhvbsHRFuziLZpC7wvPGctxzb43NFYRtKVdTuJnsn",
  "key22": "3iDxpK8avobZ5z5yxkzF5LEe22oX6GnGvh3focE9bB7SSZUopiSwcxJE2ti9JVnNyBHGMsmx3ZoxWbVHSp1Lmaz9",
  "key23": "2yPXVuGh5nzj5ncLLGmxcVAzxE8ZFdrdQPL4cDq7Rvq3YyA72aqnsAdjymUJZfAQfzEgvEV1wEgjuWN7Veb1LEux",
  "key24": "2dSx3KuTmh4pVnid5keG6fyfqHzwFSet2pweFvcnp4TzvMBGJG7PJMPmTKhdtH9NnCTx31BqvbxM3RFMqasGcJqx",
  "key25": "3X6hHeaH6mVmdPtuzSf2k3ihi9TDg55NXNwdysJZkyPyVfbK1TWYBUAT76qV8r5BPjF3emZ7QR873VKhowkJeuzC",
  "key26": "2Xe9BPEY5otSVbicTiNMaJjfhQZMbrkshfv7tKQHdq6rG3haLVhAqw45wgPFz5e8fjZMuvAY2YBoEaExBni2Vg5H",
  "key27": "QVS1Qahwo1FH9am9biny8k8qrfUJNis7un4y8DpSPpNCogvxzbUVGETyPyAY3Gso3joEqWCRv95x8rU9RC8WgE9",
  "key28": "5653C3gm4hD7GtZsgKvTYAtrZdhA6exmwx5676RMQitgG4AvtmYUC2pWLbfKNC9nhcw6MoodetSZfrRwvwvZKa7b",
  "key29": "63dBet37LW3dSXszKT58dFtmq7hMh5gYaVnjZGK2Q7LgG6DJgSAv9Uznqg3m6p1uRJWVLoP1DTstzzUWbJ2ZJWkM",
  "key30": "5JdzyS6KKrmWU5izwuw7DVrL3UzobPgPJpoBkkJYiHpbhiysg2PvoSMk1pFt6pZQ5y1Q6uxbRN1hHQS7XBJLWdaz",
  "key31": "5VkyyR9489SbfapddWWeCipj27aEPXG3oPTS8nrKjpmaKLaCGzDGkcns5N8cr9gaDa7YHzfceQGirD97TA7LrFUJ",
  "key32": "4i7Nvg586YKMhKMPWyLdPJqjuc4YkF1g9pF2hiLf216GS4y5H8BySauF2uuVTT3uizHudN9JDG2ahqaVFWdXcsM1",
  "key33": "5tpV8aJ32dZHkDKMabJgzs5iyrTSkBtLiRRUmUcENqFnX2DEtYVD5MkENexJjsE9Gx19fCAYsJe84khAc7uaHPSb",
  "key34": "55BbtYDRsvUkyFfyLtvAB1pW25zXUPUd2kYV3w3pbsoasfdJiFGHzesH2Mw6XN8nkS6kV5PmJymoJ4Etcp57RmAk",
  "key35": "3embji5myEp3QRyErTFWZdm9Deov2NUZCFvzC8s58HTs1sv88n2WUfkDrvGuASSzbFvG1nnPKcRj4Qv81Xgsy9YL",
  "key36": "3QAQtyj7V42WYeL2C2eN7XR7uf8hNWcEQfcgQ5YuC6piTyrUxBQvu1yGBv4dejJgnuWmZakeB1fCh13bqzsdn4tu",
  "key37": "27ZjMYrMoaepdMYYitia2vm2xsaoh8f9vv1uqjihiRnnkcbrxT6nX7b8Qm6JtndzoxDgps35TQMFK6hX5kSznG2x",
  "key38": "3Avcdi5isRh6sdJe1oyegYKkPUWZUPYLCxDdRQKjb93mipoga5bQtkTZ6o1sR2rwnVo4H3oCvcWpSRm4tyDwoXdg",
  "key39": "2oBtQgfvGy6aqoiWF9hcDuj5EghcJuaNwaLxpnJUaGkwtHc3BGbTyA3Vye4wZdQBh7LomuisiF5HjTFUyPJcgQ1G",
  "key40": "t7AxxooZvpuUHRnGi6cBh11J9JYR7Qg7J9o2BhXbT7kS6wPYhgnq8p9JVDQRuovuEvm6xBPUJGQhP2p8c2zSGPS",
  "key41": "4iTQoA61WK64wim2RzcxWGVzmsWWsRYY7tX9CcWNfJnYvvLxjLTMA1LyK5DjaF2UDbdBRAHGtPoqtpJbxL2oSyFC",
  "key42": "4FhUCU5As4sng33Hs72EUPBrXiNdr71H442tEMMp9txxDiJaDT6ZxzCNoHinj6ScLKvimZxtwEYToyWCm7Vgk5NS",
  "key43": "3jSJp4HtXvVMuRbVpRWSNMXs1w9YqEmRFxM6qpXrDt8C7oh3feP2qUgDPPyLhj1UrrZLuZuxg3aLCuEyM6CBo3ha",
  "key44": "3bruNwxSVMGq64i7p1iRNTASWKh8zjNtJ3k4aAJRZufuAbmG6ScK4Fqu5W8LRr5TCkv9L3HxgBJCjf3e2dByJWKa"
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
