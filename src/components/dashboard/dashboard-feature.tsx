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
    "3e7YfkTC5zNqpdfJFKdkgSH1sy9HT5yWNYjNG7J8kbQNtL3aSyHeL6nbZx8LaKvSrM9ooSEex6kzKgL65U7Uy2yx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wAjauGgByK4txHtKSP6SNJQzc8iYoe85J9RfL6WFMkV4cpWg9qM5TdLd9XqMGeMPHyvwSX9oWkQHCUnwFyxDwcU",
  "key1": "4tFm3Jt9cSMfveCMVKNjNsqd7yvmY47EZw9MLzfTmiuUmu81CoCD3nf7qxJUn9uarHi4SkSEpZmeiK6nT7hKPXFR",
  "key2": "5Wjn8hcvNMzi7Tarjh87qT1rWVS1XdfQMxH9AwdmxejDqtfiVQUDu8ckpsEPgHHDvARZ4eszMz7X11bjWVUV976T",
  "key3": "61Sgc2Uviy3ktN7S9ThNXhY73ZMZZ5K3nU3LXPy9B3r13P7U4hGxrBcHg8YnZgEqm3Vr1VbsdmdgStT7JkE1buMZ",
  "key4": "4R125qLepcgsmgk8H9atcJFNMuptSdVFE2q5zPG19VN6nSUPVJxX8pBc8FhcbfK7as6xxyyQfYJSCiuWDU6YgjTK",
  "key5": "5uiLiiVuVdn8aHGSw5MuB5xrutfXc67Kw2zo4aAL9ojgmw4dLySFduk1hgUA4PWBDwd1sRe5GvSzfJRVHnsko3Lf",
  "key6": "4qTNWbuDhJETSeo1eNpkBw9CrmvyFAVdKnWdSbrk57DtRrWZ5inuP4KBrr9QdgTxJuJNr1dAJoKfMpzd5EZy5wUb",
  "key7": "3TtppHtCJ8H4dJPpKPzERqY6q4w4k9QBNQv6WNpVLGNnKm8868rjqJsCGFYy2ds4bXVKdktDoFRwCHXtnzxyB5dC",
  "key8": "4hF3J85qCgJpuTcJ7C3R3A5vFGHMjdgQrDNo3RoDunzyfvqmiWxpzjfWTjejixAaNqpMofGYszdVRSLoYsxLJWHW",
  "key9": "2FHy9HJtZi1nP1YetVUuEW1ZYcRHx3GuccTzk6vQh5vN8tPAQL3sQnh26fPCNUJNjUH1zLeaFFg5uhnYfu3dJmvD",
  "key10": "2AD3qUHWDU79joobr3JLaNLLHQf6oM5DkfkSq9pAB8BFVanFGKhV3Me9EE75kXwD8JLqbiJkn9JDTVGWKXWUhd9q",
  "key11": "3Hw7WQyVcKPzGFsZ8NdvbsQwQyxqLZuEBitBAvcWiEMsKbmZG6gxVeXje4XGLY2KDmnPYvv8QnyPVMyqPfsCm5i5",
  "key12": "542xuaSrpbTQPtRqD7sro1p8sH1BaJXYdoqxhjHsXJSztNnmE4LjuUYmLZvKJMNckdjevHcBEiRYWuaGMGp3c2F4",
  "key13": "4DvKXiCz8QCBVijATVVkcSwmhc412ZGmfWUr7TxvoBAJrZ6qKcZPHdzgf3m5peC48NNkDK86cr3FjARaj2fxoACW",
  "key14": "3vWCi2QBCGaKuaPEDeeiJXSFs1oHDaw1u4RttarNyXgF86in5w4RbSxXxmiGSyAj6qMZp1stdNZqSCrNM5Rt5BJy",
  "key15": "2R91MTPsYLNVxqSR8D38CWgjqpjeDGh1dqubyCq2EJ43k1Lb9hBJ8XttpjQhhaiJg8S3Y3qQXjxZfbY8VxSRKpcx",
  "key16": "37xSPByreNxjwxP7jwNz4bPw9KmZ4YX85G4PBy5mTuPNrAiEuJWVmXsxnTrLFA6ue8DdQ7p6aFAocjYkmX25SSsu",
  "key17": "4uGFet4CS1S1sL8igHb1Q5KwBpbW3d6rSRL8h1PQN6mSEndqDYLt2LXUUpGFXqfxURcPT3fJgt9dpEk2ZofCghak",
  "key18": "4izyD7UJKVetKQthQm4SB6bP3QGcq8ipL96wSg14x4KwEbVP5AMzQExRK3MZBzCWxSgCen5dtVXze1SxoW6RSHC2",
  "key19": "J1B11C8mJ1sdckqntfMsg8Jkhfcy5sc451mZH9uMNepWjwZYMk8XctULhiKAqN87h4Wab9ZkKjJx8xeoWAeRYH3",
  "key20": "43PWp6r99oDvMByHLHTBQWEDpu13JU9usS3yFcymoeSbEzh79MPPubyNPcAf8ELqLn5Mn9KKBHsw6GYpjFzcMJSV",
  "key21": "5pHGbo272jxTpewJp1rXhcmwx5hxuJE5YrRZ3G2jffcQYManoD61U3C9b7Kz5qTHfu8h2v8qr93Wqa3PFYpvdgCR",
  "key22": "4t5ffB5UZGs8iXiyK9ZroDQ9pAohRNvMhJ6CtGw75w3jbepH9BPwkQ8pkJbPc8MnMvff52zj1KbyawA1MAUaT3NS",
  "key23": "3rXmmjZmCMPqGwGvHDTReYattzHzix13EAjFifTjxktpd8uybzQXFJXk7UVSLBetSDmSpS1R5wCtvqR6cBiaQLPN",
  "key24": "5fjurUQLTKykHBv6wGaB1qaESwuTi3qT5vD9w2q3U8ir82x8BoHUnFLfaPPBicwyYMXfkXXhrBjTjntY3J4DtwA7",
  "key25": "588zBHJKXM6EN2b8bZi1XrM9DU9pd7tcRmMCYMyX5YYr2Qw5J7EYTLL1umYAxuTSx95wrhHYCcNLhCQEuw8Sy2KX",
  "key26": "FXn1Gc3EgbtKHkwwab4sRP5LhQwJJfzaj571zq8nW6fDJ5rs7TbuM4PcspUvRyZ4oDfxEBsX5t5zXGKdYFKdAYr",
  "key27": "43czWWGiULR3TLX5Pt3DbWK8woeQGW8TXfbkqu3xBbxtxkmUZXtBobnQKZjputxhRJ9PiRhw44284fkQeatTNgFe",
  "key28": "uqcttzyoBLTcVpTapYftTfUySGy71Wfa2pYKFEPew8HShXkz53gwNse5xroaZ7M1cEPbSoPwcirVnpGrXRjDo3U",
  "key29": "4uK7HJM4Xfc8H66bKr8fpVBJCnLp1uWfTPKpzDZ7SRFGsSbVXbczS5rxdw4TTcr6cqnujJATwHTotoe4SBoNaFBU",
  "key30": "62GHmfHDvgSwfM7moPvApUHkepwT7wpMdFoWCkyrvR8z7P6gaujAiEYM21FRzWN7yqsZ2SP6SbBZmZcFmvqhUALz",
  "key31": "4JDhuuYjKDaGKQqPGBRoEVRMtS1W18m2s5dyF4HKqQLF1tc5EAmV4SZwCnau9Wibmp22kP2TZeZJQTY6Y6Qtb2iu",
  "key32": "5pPVGr5YGSH9FcAwSXWwDtUiYpVkRFuvrLxDDJtRfs6ntKaPs1qC8abXoj8NGcq5htPnABvfCXKkc3YqAjUNb83w",
  "key33": "2yonfiFfuNaYyUbqBh9NpVwSgDvRKJb8uKxuuKjQRXA2S3fkNcC24u5qENMk5gAHLnaiZstKvNnPf5ARHVs7zkDh",
  "key34": "35FzAPwBUKotfLsUgGQ9WKnKh7xqNcVTg3BRZQw64xZN51gFSKobB6EfjimDpEYAvAYM5SK21fJNfEPLjFW1f1BV",
  "key35": "3Un5WHMt52VMtF64faGK96CRPEh3XR36iNZecJ1A3TXTvDfomvNY6gyrvpsAvNuTXxrgiL87Lr3NhT2xYWcuiZ4y",
  "key36": "2AKXP65b9gPSPoC9aVGQki7v2zRCrmy1LK5xyd5qDenQoZGcFuRZxnk6QVXGzE5CoxRPNWn6sYx2bLHwJ2G5tiXr",
  "key37": "4o5EiaU4cZY6QpoJ8jrVFrnUxH3uogCFwqUujRRE6tjWeWKjQqyrfRXdwnXW8GKbGYLE8UEv9PMA3dwZo7iYxNLz",
  "key38": "22pa6LDJtMJDvkiNmHraKNTZZc52MbpaXuQcqhR2hWty4D2HB31vsRNdJjyvcBC2G9Ejmhevd2U2oCs7JFDRu3H9",
  "key39": "4dvJf32Mp3SDKwrcbThXEg5GhSELSvZrrjiwp2Tvf8bSgH9ecRHzotsTt9ppUYwAKGrhWrg7znfXDMVfHc5NGK7Z",
  "key40": "3E1KAXx9QKMkEkUihxcV5s7SgdayrwSXJBtMBkKXNRvNZ2sbVixSjjJ3AwCC1854jtFan2fM4q8jKsVHdQvYLi9T",
  "key41": "3iNJZC9WmJQP7AigbaYnTSWxD2bhiCc2YeqSNPA2f174XJcZeEWRQr4eFgrNCGzj6bQ2AyCGMuEJUMRDqVsjRkyp",
  "key42": "n5G5cFu7ZwXEY2JDrBBU5mxg8sm3kNRMk87UVLcv9R91pqm4P5TZgpg9ZdcYmNYZgf3qhmCi81V3s4vvMRYKcux",
  "key43": "Vp77UZWungjepGxfdpTzQLaUmuT7Rrt4dieiRwQkpGJyM5d4dgCvPm8KADAoVJ8fZ9f1t1U4Tbwd5Yu3rvQjVMK",
  "key44": "2CWhxama2VLYnPoEj11oCDUSfVdEbAVSvdDJ3tXkSXTdWTVTbn8ruYAvs3HanCKAPkGiZ1TuTf8hdEuDiyE7BmtL"
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
