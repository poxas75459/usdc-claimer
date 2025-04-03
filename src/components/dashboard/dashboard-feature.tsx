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
    "5jZGgWN4h2o5eq4pCsTC35nbiaBXgPNPekaj3V7AKfHMRTsHZt4pnB4zHNwPpwZ4zvT25Yj7E4QWuUxmGJwmiHkX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SrPgTHTxiYVnvSTC4VvUkqht7VxzXgjY2rC63V3dRWrEvWoKazzF4KLk5TZmBnc9P7rwXhYS46mapS2AXkxeBi2",
  "key1": "mXFmcJM9y1ur4ErYBKWtnqi9imrryhMZa3PnK2F5gAXsgfNpPFaXt2Rha2ZMkvqDecuxP4LvsZup3AEWKuy1afp",
  "key2": "65GFYPGkRM5N4x8L8EBn7jPfRHvvSM6uoMfnBn3Tu64zp74jWe6RMguiyxj2V9bvmQxV8ADzjZSRrb1RfkrL1jb9",
  "key3": "5iBpTfQR5dBm8v1N6EM1q7eAuCWadVPBXF5o9QaMgmN3RJF7UipvAR84c6qHDc7yRQK7QtdtPtv9RMR4fDfdZqz9",
  "key4": "2sQY3T8rR1WaiSsLBEe84QebPYT4Ark8y15aCbLLLmB4pnmz9A1ZZoQZyaBjVqQ3pHCFbXvegUyAVP7uwDq5hPuo",
  "key5": "TYoLqSYPNMxbAo2vkdGCu1NAaoUMhoj29MojGBQzdVEaCtqxCDqVKRYxJDrzbDSAn74HxZpfnxWZRnzJ7xkgCgB",
  "key6": "4BRj4Bhahd1Ki8Fo66pofEJJCpnngKz7humzSKQk5RgYLqHmpXmHjyaMQLTyrdXLTo1ryzTYQmByy8VAymxcYNzq",
  "key7": "v7Ht1FTTc4soCBQZk5aLmnJeZ14RRt6uP7TtQ78bCUDHNgrF8RN5BcNuM7QZjSpqRJTCaCbEi75bzAenRArzqL2",
  "key8": "2VXo5gxfK5S4zMcheyPYQ8G5iJcYxRZ1WZzKLydcRSR3KQAdVsVuH5efN9iAFEn7y1j1wtkgBvL2rFG2rRH4Uo8Z",
  "key9": "37JLDUZbXiD2k6qxy4DcHe3BNP7JQ7GyQ9nzw2kj2bnuDqVG22KUxrwCo7SdLMPR1NdExeUcmNea4SFATu33aEY3",
  "key10": "N89Y36GX3rictUemMNYMHJqScFWfNN73WeHZV68dhGQxomzjg73z5nvbssKRSEZdPhcUpUiwJaU7KaPhx8tDzGm",
  "key11": "3c7mHtFEfoA6UnUdXP3AX6z2iakAYgPCGFTQmG8VHgfY5dTrwWrmPSMdimBbJu8qxTqDeF3J8xS4wmKWCxQngDLV",
  "key12": "sJA4xtFnuzXbQZMDMgwvoZdstdRdNCLNWnjEpJ4kAXKx7BDwybpDgRoSB28WVXSjFGVV2vnuDgPdsQTxeBsZMiJ",
  "key13": "2TGxsvVBCq3aQ6iMpHGLcQFH2HWAvkTaFPoU1FvBLgTV6j82bHmk22ije8MC5imF8qVTUT5HJeshScFecus5S4gg",
  "key14": "61vzky7vMyVQTZKjmmoH6snNMkcdvUHbiHzZajRNchRTsizYDQCcxX4grQvWe9gQzii6PeKNf9t4CPyoLahrLQph",
  "key15": "93mvf3oitWaPivKrq6nA25E2Jeef9AoQVSjkarGQ4voYL9RLR1tzMKREE88pCkMWCfXv2fmapRLZHHVsnj8ohuL",
  "key16": "5qvRcLz4QGqxcWXRmzPmgwihBHYB8Bowud9mDPNWcXQPQDnWiqy6zNDtwKRyESFQYDKT512rcnmucKhj3ZwBRvzG",
  "key17": "5k55wHBmGT1tAfJVpxVvmdfaSwkPwwqc76EjnBGLtSBEKrZZHNEzJ5HzDr2K6RbWMYNrvkRnKugYqamvgwWZhCpo",
  "key18": "ev1jJNjSuisT9VxaHnmDzSDm3hqoMt8zGtnXjYTLNj7fUQ4U7MWKLoZt7JFMG51RyiPL9wgqPujsnzR2euUJyea",
  "key19": "5Zao71k7kDHvs9fw6RPzHAzj2yVRptNNyt1AvkGVWcCLWCtZ2Xbnmanw8Lg3GWHW3oE93WBNEAdeFQaawTLBSfrt",
  "key20": "5DqmhmCw526YrrJH7DLSnfV9Rc8s1PvL2XVXpJ441nN4bAwepEno7JU9DJkbbTtHZUUEDo1LrK2e1Q4E7LSRfA5J",
  "key21": "5vsaEH9bJNuq5L91ZgKFxr4uqxxtb9mMAzzUNXCEfVnkPbLCP9XRL2QiPBzDZHKgEHF8WSxSg8Qv51Nh8xzkByGp",
  "key22": "63rrdDUaVcRejiM76qJnhojjpWK4BdbCrEDW1D33qUhRQcVXWSMzdwXbkZKczmR84WnbcwKvdS75KXUELVSiarnB",
  "key23": "3Pm4m2CSEibQyM26XfXy6oKiZ8cgq4uS8AGo1z6Y9Uvs2gfB8MKWiWryc6QCYw92VphWZRMZQzhfJVpHgZtLWQHA",
  "key24": "3xEcqnFhSU6AakHR7RbzQVigDpDXwQwG2BHJ9XvSUakW9hTTneUnFo2Lb64DByjyYLnjxsyLvNeVRzpGiQngRfvf",
  "key25": "3uyBstxkDmZ9j9PLv1Yyqmh6Xf4F7wPeMicX2K9ZS9jibHDRZmboeGQiKGSBQnNyK1ugXBH1fR288DH6LUn251Qm",
  "key26": "Us1j9BhaEv8DRm2BzPM2e74LQiQYa7L8USB6EEiPLWkZP7jmbeLVUpRNoJGaE6SHTP8LzUcjWPHRQpvXnGDRiJN",
  "key27": "4PcB4sHTJarcuBKkdPoFmmbeoix2zHX8NJHpray1Lhbfk62fM5TzqJbNtkYFmD6NtBX4rvD8RCeXv8DBBwwGDXa5",
  "key28": "5Z7C8bgRMSkm2EFTR3Jp4BbNyN8sQwCTRt2kLmBuyEsLdnEZcdkWSASmMFaBK684i56fYZ2JXscevVaQooFxjTjg",
  "key29": "mjSsNaq3FEYJ8vSmrxiKmX6voEpMWZsjjxur7mqmpWHjF8hKnejoc1ZiXwiHzWqTpESWn85iRCN6oUCT6Tw2SXh",
  "key30": "2dXrWTBrGcS1ynBXAmG4VX2t1eAmucyqXQgMbVMcXEHpnzj4xnYFf8p6Ua3b8PFJ3LS2xmSe6KKbfFcdTvg4WYHc",
  "key31": "4dYydBCghyHWdWZ39pNbY4iwzTM6zn5oT1xa8KhH6BtcoS6MeHQQALhgdfBtrYCVVq3EADaQzYRW4wYZckr7XNbz",
  "key32": "676byionSV5JaUPPsgonSaNz7Doa2tU4Ny81ou4J6TzP1GDokmdjhwU5PtxiQh4uW2uLSe2i9ud3rMu6WPZGAAfe",
  "key33": "4TCupq4YMkxAmqQW2WdMHm5GdWGGr6eHamYnSAGZDwGcHAjfpxGxig7NFfto8p8B9zFwYrNkPPf43vNFLVApsJgW",
  "key34": "4ysDXZsQV4SGac9HFzGAKVwXiF25orjbMkERp68eLpSEqzZunAPUR2Jy6W1bCQZrPGtQ1ckcgUPHz1FxN6NmfctE",
  "key35": "4NrVmBf1DrJD8NCQPkEdTM7KGPGULBNYFmqLbWBJjCbEK7boUoPZmTtCoiez2GjnvGSyo9hZYciNt6xzLXLegnZD",
  "key36": "5bevJrHTxAy9XTQLbUq283Zk3QGo2zUks4fE4F3iLi6QY3XSgG8MFHbRcchc8RJJSWZkbW4niYKMGoGLEBwbWUzg",
  "key37": "2bmUi2SLEqNyUJJLHyP9n1w5sAMjW6qnWLt3bvdgWxtrAFc1jRBbKqRg5r7d9z95j7Mjn6ZK242cxr9YT6xa37bg",
  "key38": "2YUfqJ5z8cXrf5HZkcX3a3HSSjVmD3g5NAVr3EukkzWip6f3rihHTayWas1xGdzbQBSrzdzvQg7aD2wsknWyyze3",
  "key39": "5tXujcP4qbqQHfkzRf8gzm8ET82cwMDDA5hjwVHZf2fMmgL92Z7j3bMfSk7iwodUncWcxoXDxANu8qfiaBHu5KfT"
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
