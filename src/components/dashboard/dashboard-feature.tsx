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
    "35tUzgcpJz7yBDRTAinKC7PWeYmtdGgWp2VWz5ZkQbmrvpB9sgQbBQ5QNDBQd4xGatNT2xLKTAP6soTJXNWCYTYD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nJqsWwRk6oYusjei8x6uymyAY9UVmBk286gupetxW352zg5RVYcM5jRR514Jfxeopnej4iZ4ohtH8csD1HfZVye",
  "key1": "2zVuW84usBcu4Dpo5V5tzqmJ3564kWoAVzJ3vEmko8MhjWjVE1uLvn9vjMdh9SvwtjHH4d32kHJufjU8R59Nnkyu",
  "key2": "3RrHjGVZvZ6W3MzkcUAfLVmsLgYLHkYtKUUJpastW6fzSLvfL5P6gNbKuiiAcpTKFUQFjBktFyNCDX6xwMrkV4Zs",
  "key3": "4zbYejw5obeGL2pagNEQQESLAD432RQWugmicbJ8F8Qivyv9sJKHKgwMAubMaomr9bu8jgeWsUjUndeEwTBqRsih",
  "key4": "nFbd8tJU3rju4u1KwqXn8oHEUZf7UXHU5uU1MyMx29gqkjFvJbeCseXKNhD6PfHhuRizTscXYqC25TAXmmJV2oh",
  "key5": "4DAttzpPA8edaTauYrju7gi81RSdyY6nV5oFDrxF2NcbxQmMt4eVWQQVcEBB81ZVNWpFKDYYRbM1xeXdScGwJrnu",
  "key6": "4TNnPj4ebQn27bgH7eh9nnd5eYYyggqeSHSVkisApWSv41pBbuQR1ohXXHt4uaRFb26e3QUsJf8iF57k3hAy7sj4",
  "key7": "49LdaRaHrtNbMKdpx5MCtSdidigBh6BpDVeFfQYTH6yErV2VrooHmjnoLBHB47PrG47ropbrxzPAbi2cNPsJa9Dv",
  "key8": "44C9t4Bdbj3KQ5dkxM6wEwS9Ez76x3rkuPJFdtvW2hLjFW9LY4k5CuxDuD3ve8jJz4Z8xhmnoRKEWkoVWc2yFcLJ",
  "key9": "5bnCeHqMHjFMhx3uMVEJoznKURFcsivvrfZX1pbSmZxAvhsYciaPkfK9bWywghw8im9aRYwhzYq3UGhJG8r7XMC1",
  "key10": "31zm3pK5PGLuwPqzdA6m34i8SDt7kAad6UwhgWeMxhBy737Di4LuLHvTtwSimw1NywNhs5SsddLXVxqeWkbjWL5T",
  "key11": "4r6ZZ4mKBXe93A3CFiheFqJxvW2wFBzLmFY8Hyg5kVcqbtfauPgUDYf1aGkrjcnbdc99pjPVCmWe33iawJKgNg36",
  "key12": "Zkd9goW4YQ52zcbyL2vGPzt8vfWFw2tAaqDtQJWkXaV5bVVLuqiX3NSbGGhrFL2aETDQXxh4xZyK47kNYmqCrNW",
  "key13": "2oTZUUnDhypMGoMXsABRgGZ8imgvwjtjQFCJuya3ercQibnD29HManq8HTUfsfHxW9C4TYhf6fUTbcgKXyiDqhTX",
  "key14": "SjYNLjreRpeZgLTPnU8LA9LAPkF6fMcMneoLe1wdGxmE1dCZZKwR9gsUbKJiuNqbnSFKWiFtzjRmqAk6oNjPM8z",
  "key15": "2JYR1auM4chEwMYfzdQUHXncKUuxPSexfY6G94s9mgg97MM59Uj67zRR7yR1eT69V6KyhzoNFnNFt4YRp8YfsmtT",
  "key16": "37f5i62niZzRsJGaHKNMkVKBpqoAD3VDZaWVtpFohRDoaqvMe3D95Yt5v2j6mYy5sLdinKVkqXdVQDdNoFTtf1Xe",
  "key17": "4xCRgbyNbBTCcxPRZjSVNPmd5vxnUFvmpAp5nNjfJ5hwy2qoo4STMXLuFsy5fvddyknrs3GhniUU6Ki69Fmwcxu9",
  "key18": "2uFN4DPfsMS5x2QDZX7sep6xkGUgEWcSwH5Sg5HRtKfwrwkPXRHwrMaQhRCJaDfbDBFeaPxZqPP5h2fcgpoboiaQ",
  "key19": "2xWyqYd8gErgYMxsEiP6hMRzypK6CNWYf1rvQtcHu8x4tpoFCt328tPHmX9oAh7ihnLEbaJZ5AmgQPr1nQkGqoC7",
  "key20": "5Ltm1BeSdRHSyEMs6HycfPDCU4u5mqnvhNJXW2kCMgkojJV9BtXEQHUzad2zxcF3xAVgniKxPBSFKs83fSrgx5Bu",
  "key21": "26eXsVg85mWCPobAuQFRLDYW14fTnDnfVhx9EfRNRUvWKbZ8xLpEqS3CC7MDKVxzo7hz1agrpC8jLgDggfKxhX8k",
  "key22": "3yW7gUe4HxyQV6zDq1DoukzsfmRpNbU7RMAdEsyjZvw5YXrR6pmbzWctapUjDg9gf468KbVsJjiTjVi6JmfY3wvU",
  "key23": "61EXzXuCkPUVujg8MvvzyBNDCWdSzgtFez51GZtk6VegcgwQWraCEqgSz3chwu9X5G5TJ1xnqpAvtMHZB2sYQe5Q",
  "key24": "3KamLAAvCK3BCKtPSyHuwXzph2P2xTGrdULTp9otNMVqeTPRAnRrJ1gpSxCykKKGzJmJMPD4e3t22q6VtqLunMJc",
  "key25": "64PwDskynsUuKsBJV1fu8MpYEy9tMh11b3AKCi92oSSJDkgZXX8fDgZY5RDrfL2aRE92KFVxRu3ebtHRWtSAfEUi",
  "key26": "3q61ErVtmUYEqxoefTDnXVgStzmwctjJzA5822dGEeistfTuDs4oa9aK2mjcjmKxMwHhU9MCQTkFAVbYAoGEU3WJ",
  "key27": "5FVuYVWq2yjU66HJoy3XkWTbtk2dC2Mzh2oyfMGsYVer84WWLpVzTddqdNwEks7JobZWPAu3ribXuFViBmpS2r8b",
  "key28": "5r57jZK7R5ZsMF4UtZc3otHJ7F3pv5yaKTaAGsMLY83YfPxSxhuksn6T1938tZJTPEGTtm7i8G44Ra3PyE4KvnvM",
  "key29": "5L6Smy5WwfPxqkLHidN1vP1Md7hmHX7W9VL3jgXhkz7Gtyre44Unhp5gfJhKm5dggFAVXhamU5oCFT5EakJKZDE2",
  "key30": "2dceDHDVPGZyuRvbr9HbWNMGXoNQwjkoVge5bv72Cr6WoBfYANf6w1HB7MsFmBn1xaY2K2n1sERPQXYLCLJDhVKN",
  "key31": "5SNAWHCmSLAuH8BS1Hzvk4SVvCRDDpNuogEB5A71qjuLQFVqYGsy3sLBTRiNLzJYGXBaoPayX1gMCL6g96xtEcLz",
  "key32": "iRYrKfwzEPtv6tbeHTCh6NphDwUZWrHLgcCPBdcwCBVEvTq34eJR9eaYHUa8x8RPiV3JRm1Q7MtPz4ovX6cHj9v",
  "key33": "2LXaEnCpsePsqP4xG8WJqCw3DzjuwhbPzyB5w1ohXLJ58fkEPsd63kpba8LUciajFYub2SL5kdcPz7SvgZJ1ezxy"
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
