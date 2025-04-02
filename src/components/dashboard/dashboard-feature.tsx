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
    "4ApXbNQZGa1Q1dhJ9vFwkLG7jLDqQhgFcNMGfBHuqPbj49bWoZTypMfwbsM1cDBPqRYmk5aGsY9ETfvKHer13hup"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TQqj6cYi8TS4L62WydAhHqiA8GviAR5BUFAMhWf5yu7NmeCohUJABaDbfqD2ZMvWmbxM4s1G2cZgyhrZ5kejXmk",
  "key1": "4RsHTbz4fxeYeD3adu3kwVLXHytY8CX39pmxED8n7x5bMKvGSoP4xJABKNeVG9s3zAYfd4cgNWy1TNr6KYtprGKy",
  "key2": "bpePzbb7A713GV6HMG37LP9U5f3TGF5NiFCT3UsEGFQfDQBG9RQec5zLeaF9hesJKkwFQiWDvmQdo1nUPinZ7cC",
  "key3": "4L8c7n6UDzgxnZ1SYt7CabxEWLrvroPJBpu2w1RsonpC1m6ECqviq649fdEKa63JBWitd6MfAA2wXHBkE7iEvBQa",
  "key4": "5mGQgnNgXqon9kRJdbgg3qvt3m25snvB2tjAZN4irm6xXdeVMGhzXeG3W4YoBhXjPTnRqf3xm5dwrVgXUo7Vkdve",
  "key5": "3onXg922JU23RxZQX8coy9f9rmF8sG7iQrfHqwidY4qWYnEYaHiGpq8oedtRP7phuGCtERscdSQZvHtu5YUp9gdJ",
  "key6": "539x8SmE9aCRb3YRMnFugE16HL99sDZCCDkYSM9w5zFWHyw4J5MMoGv4ygCh8uqZ2LkmP8EGVhJj9q3doyFoUDYa",
  "key7": "511gDb6UNmdaS2nA2M6Z7omE181djg4gpXnGbf3oJAGvA5CKp4YKAoEAV6DoSrE9N5L56MVgR4yr8mPhatPVTPG4",
  "key8": "4tyfx9tCm4HJhdG54eKFUvBBnFNHxZAY3WFArejatXB7uYWieXrK6SzMnjzWdoLfYJa6AMbRxAKm5SBVSphdoKtY",
  "key9": "55EnbQv5atrKWEY8C1Vi54vD6x94xAoaiLh1hUvkAwJCDmXFd5KHP5cV6HFFzcp3AJwiZKTdC7hNJUzitHmVXsXS",
  "key10": "25pC2GtfFWhCS2kGFjfTZcZTCevk3j5DuyBdfGxUPtUm6cfrm7APVDLWtfVer2U7eDGCpw9Cnx4FT4x4jq8oxX8G",
  "key11": "4hi7CgLWd8Av8teuAcWV3RWkDjSS6sCUaxy3W6tWki3yTUm1JEqXsHF2VKtDJb7WctUhqFYXYGqRomvEbDBrPNFy",
  "key12": "jzwxtx4bcEwWQkXU9iG4p2GBrBERjkmpcDkWwnKeu9eAu3aVYWsFYU1ea4j9pJbhCqfCJ3A1mRMLptFz2AkbQK8",
  "key13": "4cJp6xMfQYCnZZmgVz3RJc3fown78Z2LMf2aQjJqbqnD5SRcZRCVHBwCpccoesTYZLdUUJeRvr2aRLDJoQJGV3x8",
  "key14": "3Gag462zjme9HXi3MZwfiQ9gYb5XDVgCM7XyEppXgc8pjjdtHiosiVqh1v12eA2J9rPBXeXBL3XDFWAjiExn85RW",
  "key15": "3ZV6NRkUbq81NHZk52gNWK4SLF2Kzj8c6a9PVN9UDt4KFLFC3DtsV8KoA2tyQCMofBZt4bZQLvnJ63FM2spcNcQ1",
  "key16": "59ca4Ni1ajNMUg8TiJ3y6aARsXk6pNS7inGCkarwBsWL2otaXoiymiebTZ6a7HXtct4x2P5mkRoMPJjTDgudG4Cm",
  "key17": "3EfFHP2GGY8XSbJQphAS54hj4JAmfQh4ZNu3cx9omKrkNqUcqV4PvyB8GuWMwD9Ths2RvBJSiHFJSoZ2W1BeKSNZ",
  "key18": "w2Wtk2AbwJL5hVbED3eWQgRbixpdfDB6iSdNX8ZwrP68tyBTXCSVWvdDekvYqecL8T8VegmoLJZnMUUD1SKh4xi",
  "key19": "9ecjsQiLqUmTQsqSJCjgCxfhLtdovXye7uojreVBPSDq9ft3r12cBpac9BjxTgmHq3fBQJff4HazFAH4XQ1TXZB",
  "key20": "2DGHGeJ9Cf3ZCYKcofQDJ4diRqPPAkyHNajzUWWgciZNxyrtXcSxydoF9So43ZkTY5qvCj7zJFnfaaDBuThZyuux",
  "key21": "417vBSR5MpwpycLpQJnzgFqryCWf7uJBPyeydpqP5GT7wcPa76i75XG5Abq4V8XoDJ67shHGMn4uMRzjZTvVNfjG",
  "key22": "5fs4CWcL6vEd4ooJcwUDi4BJDSAruGv34MJXZknnGNR7iGWk8bF3mn1Jm4tEHV7Y8UbgPXEBCRu4dSaRB1vdGoxZ",
  "key23": "57wKqAhqoQyXCge24SmC3BEYJBntDD9uYG1QPAokaVPjwoszuJMrQ5CPZDavR2U8NrEknKprHHHRqLaf35tFQPDq",
  "key24": "2v73k2NzuKyHPXdkhMTUU88hAnDWGHegSRhjeztwZLpNCKeQBcUQCR7wfMxwuRYXweqtXYLWN2wpNwGR9gaaLsZ8",
  "key25": "5M5YftbVV7xPN8wB2yVVuzfM4aeStF5F73CGkjoVnHqmxX38SLe85kmbVtV7taYgdeVhcvAJdX7i3UyfEQvHGyvs",
  "key26": "aR24GtWWC1HYrWT188RP1yQE8guzFMEEFpfQW5KMhLDVY4YMwgA9N2GX9eUA9u6eaFJAY4E1n1Gc7whFbrhAZ5T",
  "key27": "2kKQhVzwL9bvPAVqVcSYztZUBFedCbFNTs7gLoAVUt5ZSckB6bdk1aErq6T2gMGr22sNyWoBameaJ6zFGSb8mvuH",
  "key28": "5MunLEQBbNPqR8FZcYEX7Mb72KAR7XCTws455tdG9j3k7f437EN529dPukvRPmUBgYBhjNyyERYZ95zR1nqCJKaE",
  "key29": "j9fYnMMPFixEmmvzv8aSsVTVVsCHs55ecapZeBDDuD7gjJsnYx5ZA8g8nt9AhAMtP6Ju3woNR9q57c33gSLnVMi",
  "key30": "58fcD8qY7AJ5BHtnB9sSXLQqx1MH1JVejPFNZ2KoVbcKn6jbaaDBGbgGvxvYnyes8GshBMHcoMZTptCVToY539oE",
  "key31": "49vo6ZSvC3rhj1HawRegycWNKBcGDdtFxb4NAwGakLG1PgGRutU2Gtwb9B9m7XGJmBXYyAdQDEYXCmbh4iChPkNS",
  "key32": "4UcHcNidhcX3b8yzrefs3HsyheugD4SQLRuNoFwBX4LMfJUpZh2qhe6sahdupbWFtvRtor3Bafmws1oywafJSkGB",
  "key33": "jaKseDHH8QPhDrVhrYnoRHoRj5HgrSKZfrGJx8xJcPbXXSvDgstE8zxqwynLwaHR4ZSCabsNjhngPmru6QLD4pb",
  "key34": "YvHAurjmZAzsH2YjXJzBYKrVuhi6p3b1P9XEAaUkNE8j9K14Phpuhg1eZshT48AB7hgmChVNgrX7jeoR5xohfAn",
  "key35": "6GjuQYJH3Q9E5Xd4sJ6a6RbMWAe6hmH5zUJMESKAVFMPJi74KuNtv3RPFfQsRvKTbLk2MgV42uHEdeHgNCpnTqj",
  "key36": "pH23AQ6HakeGNRGq7HRjXPDnnab6akyzTDegQzkBJXQZQmhgjzNpNMhg9LRuBn4NTmSvdiRxSC5Mox1s4GNemP4",
  "key37": "2aSuoARvbmtxnbbj4N5pTxsK9d9zeGaSU93YzuAu6RhYQdy63EseAYdXy9xoenkMkRSu4dQJQvuRfHxZnX1a8mSz",
  "key38": "2zVC8vt6chJ3Rau3niqs8fqJxpcJ8WyR6m2Qj8gu6LHQAjzARdQMbe6MeiFAhcyNKRBBu3Lv49e2bnDfQB8NDJzv",
  "key39": "2RdAVg4xK5kKLHkqJ8tNsp29zxHavJZjojvMJvN3MNepaATLMw7cxnCxoLAnx2zaMPv3rifpN9z8KSNJ3MsUpCRX",
  "key40": "4kygxY14XGit3TjNfkfn6XPcGdJcRqi4iT8uWc84eGnDR7Y5ZuYwANhkbXY1gC77LMtD1LNMXwQbirNTa99hJ89T"
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
