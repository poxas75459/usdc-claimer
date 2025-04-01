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
    "2GfgUQN2iZ6mj6Y1p53LTCaVEmqbJyQDDwwrz9ALzTh4yJJUYzBDoudWfWNtH943v3s2ZQyfNcfvHtquNke9vUo8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bi2ZTqeZuuC4GSaihRpmKLnC84VtYRUZwenWWXaPpGg911kRAzm2JFQw6UNgaa1j2tyYmvKkwfQKmPjoj277QUX",
  "key1": "3oyQfoQY2ByeWfX6iqYynhJTFaapj3xvNdHfLGYrFyaDE1HkV4CxQGEHmR7NGQQLCu59wvL3su3mgAtNKuifUz8u",
  "key2": "4Cx2xjaBUyew34kxsjpSA1hp27BidhffWtLq8nru2Nhcu8ZAfFtJWAvk7hyPvuGveyekFo4fUAcY5Ca8MexgzbPq",
  "key3": "5oMb6YxSQReHMrjY4b7Jc5riyFhBxaSLrcNXvS6z728uA8WcwuTpYJP7P8roZdW9nGXcRiJRwzH92TuEBFSr9d4X",
  "key4": "5YezczjDLAjB8xsQEuACKZKvg3vZMvTEr8akxkDb7Pnq75gqbHA2mWUB2PQy6U9fdqWbirBTaymj4TJpomhDWj5",
  "key5": "4gh7tPNBfMrB2mpZCENKXH4gatsTygrp1LiUWuKk4WX2X7uCwApYJvrfxgWDQMRewTmrMBBamop2ywQdxkLAHRfg",
  "key6": "5BZVcumSghmEe2av8HQEeBAJhT81rdfu5FFBSrDukt8TnfdtbrLCn5pAx4DC2NXSEuRTZEYehofTVdpbqSK9TcUR",
  "key7": "2bg6qxxdYxyuB7e5QEH9jUZibPTyiYoRXCrYtatSdb92w75KEWDzaAkgbDFAKJR4Re3Lz7qF9B9SK6fGKHMGXx6T",
  "key8": "2GCCA82ggwt9wJR6wPj8yb3Ha4PS8tDb7PigdtjSFq893Jon4c8SDqh7RDoHkPTwMt4voZYXR49NJ95xKuYbY9Zr",
  "key9": "4fioBmCiDHefT3BMRhpPRS2tY29J5SfrLz9CbxBzWTwxKeT8b1RV9o19hsQadhTUTPKJf9amAf9X8EZJcQghyX1g",
  "key10": "rVKGa7E6H6FJss8cdESPKiNU4weyStHC19V7Rh9g7pCCwZanPhKfukednLiDypUJzhspgTzMs4tDfiuFUadrLAc",
  "key11": "2CMJUWHm5jnG1bQLXonbxmNyHgfN6wu51BZPxabFT3w6Wvxjoc59LVb5hGGPgnzR2sKyVJnEvvfraN78jpYSjAX6",
  "key12": "4sPZSkGUwxRg56irjbngiNBqgS7bQRD5ETQ7FvedR7vTMnDMSqrfVD1JYg7v4MkznzzBeq4sarzMerLLFKL7nFgE",
  "key13": "2CU2Nt8BXLsGNncycANMTKtiCWDUkR8cRfVVW9hMux7SwkRgE9EXMNdFXLXHKKvgugXv8kz2k9XfYsiJCSdsUw9c",
  "key14": "E7q1cUFgHoEpvKLzhRKBhwbiKgMWAQU2qq6GtbwcRuzMXG8DyZcAnNEz95G1es4WtqpXjLvSQWtEha5K9cVvKdM",
  "key15": "3KG8BJPkJBu6d2XA5JzEAFBagkf68y5MDTDg8Vgq8koMmhGtQWujoCGbdd6bpUHfhXW3TKvp8tZZsodFyy5NZVvp",
  "key16": "53qRSj8Bjx5MF5yWgfqMZS9ASCfnZFS3Cmze4rYiUd4bAPnp2f2TAgUh8RCR24CPjD8V7yXwcpJ7TqerYBputvyK",
  "key17": "4XEaD35RSDUrsRfjpngU4nR3YC1kWYXWgXETV7fhtyXWRJV9QTFtniGTDyTwAiDaeRfUz86qsdjzK117pKWZAa8h",
  "key18": "2uhBVYC8o9rAmPHKRzv9bb5ukK6zwCnF56NPC6krYsf8nFXZbDELbdTYDfEDEbCsLoKVYunCmdVEQGs4yDqewiCs",
  "key19": "3RJjExfMGJwjGhNDwRWDrxKSQrxXet4Fgq9uJXb2qpSqNCjNEzoHYqQc6Wy3oWDPHA27VbhjbbHzQfshwKGNmPFL",
  "key20": "5pGhDS6J5jS9he9i2N3EsnQ5Sib6JbPqFkWzA63281VyZSCns52HDFpf8W3U2tCzEh5BZyNNPQN9U5b66ss1nihj",
  "key21": "5afXVhopD9LV5TNFLoWrfZkAHVGEFXFDg5VHvKPHCPp6DTXtc1xfRUeYmyTsRDTd14gLfsH2E767QXsP8EytajTx",
  "key22": "ZExPxNbh7Tx5Np78zcW13qsMBUBQDrJxS9wAKbGQq5PvqSU4oc3rtfK5cApLfoX3mfUiWN9ctoL3txR4VpSbWNP",
  "key23": "5raVdD6EU7CJ6pnNfrZZgAUYjsf5V35yd81V6HLsEoyPfhkRacDXKLda5FCqvbfUrC5zBNQd1Mi5wEqgaJUaRLbv",
  "key24": "5HGDZNME9NiUtLJbZkKKPUprMJ8rA9TvKxFknyF3ZD2iqhxfdMwjkXoPsU2ZfTc7GS8yAfcLPrCXjtxpYS6A18vP",
  "key25": "31waK43psqb5FWyngVsHxQApjEZuN1zQqynRKyigShm4dr1EqvZvWcJrAy6t4JCc4Y8GG8Sonfh3yLnShPmzp3fL",
  "key26": "J2ddLujdEKcg3hnWRvrFX6mANACdsV7a2kRgmb9QLaSfUEomutG3UVJg5KdPgDyy1N8pufNwx9wuVWcrBSaEDDU",
  "key27": "aJG8JB49APMH7DLuBGHRGQN4pjN51tn3o8W2XLmkWhXg5CXwGenutFiXiTQN9iLV1fk7kJqxLEpNEtD9UFy5o7y",
  "key28": "3BKSfbDyTmHamsu3Jq8YTw324hQ5Pm82nYcm5AtgipMZaf1YDGG5atCNRJuWKDxxEejLHfSkbLtjuDruAtHDjNgT",
  "key29": "293kKfHFsBYwLUchU1YJSuRhLRC8ERu8xVSs4dQzcbTMe64FbL6wfsg7eb9V3Pi5UQFRa7A68797s3ktzSRk49GA",
  "key30": "22eJherUQYeGaLVSeiaH8qSQ6UWmMahpNPXBxmefyrqXHARLPqfgzwJkL5b9hqSPJQEzPftFUFCDaGjHgrGU34BF",
  "key31": "4YMXNnLyQB6J47Qyvo1r6CkGn9oo24gZphE7vCB3uacKvwtvv4SreieKVXfHpHsxDz1YV5APSfg5zunTdgpj7hg6",
  "key32": "3WMgEKYkTMBihWEUg1LjGAc1pZr8GDcA3YT4dHYz5T78eBtzbThH62YVrpBUxfXWPrEJsT5epwsYakUa1r5ak8Uc",
  "key33": "2r6U3ze7LPFQX62BYtx6FtbWZwC5ELpWqw2R6ucxvSvMkkDjmHjwD7SWj1rXxzwVunxTV8e77U3pXNXwmU4ozz1Z",
  "key34": "i6NcyV6MkMLdvis3gKyGcM48wmmahvH1g68ds5gFYAvHNLpNn53BiwHKhKRLwDHnW2ZeXj1D7RD2Hegw3Y44beV",
  "key35": "45DA7u5aSc4sZjiZqBvrAHNG8dg6Mqog8Vz8dVZzxE5U9PqBTYtrvo2dcfuqay4TwNp7tSa2kY2b1jHcHx7VnzCw",
  "key36": "2FGg37nCWUaKact3j5ytJLHZae5ZDx8Wgd8Wf2nZdzpjRqVmBwAYUCCKx9yLTmF1eJHxQEbado9RkNZ2QF8etRQK",
  "key37": "4meeHjrVcLyYXpHrrmCmRqX2QAJ8QqFpgUYRw71VHUBxjyacvs9T8pMH2JudH6oun4KJ1guLXpusEpTPBsZc6zx9",
  "key38": "RxPZhco6LYVoPLfRTDTWiCKEkGno5WXowZVMJPLi8KZMxNcozseE1yRTPUwYc5iULJVw4LzWmSQwE3HYZ9aVKA8",
  "key39": "2cKcHpwz7JG9ybo2FURmu2G9aRppAAaVbGg6TswptU8UzrskNwHuqwZXvV5BuiHzoXqsSfawxju8gaW9zNK1PpYq",
  "key40": "4kk3doja8xtVHHpHWVKr46qww6gQyzbs2TU9DrUPbYKFWCpfTrtYcXkuhAhi3Qtb6qgYCpGBgMVzVnheP2x2Mfjb",
  "key41": "3zoUcN1MWGFvfQXEXKWRWPScznPimCLGEnza6fzsdLWgYaF3kovm4t4qwyD44ZQpqWjtRGQYW9hNqriPDCSzjCf6",
  "key42": "c6MMeRyQVYZfXQgZjvcP1pAyRg1xsRG3StvLvZtQL9bCe7LK24xJjQY6mPpAAegLtgavtamZ6paP29ZeetPZNge",
  "key43": "5kingwCYVy9TUHADaHB6yBkZH1EFtDxGtBu16GYPqEBBpMcht187ZyjjQM2FfHmu9hwKdo8TfoV6X4G6QZw9WuaP"
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
