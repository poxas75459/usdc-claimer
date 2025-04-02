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
    "2SYzGDya1EWGhif4Kww1yG3X8NeTMjbUytWWoG9cKpLJT1RJygatgebU1QK5vHpZUJxewQksKzxKtB2NnwArHzBu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M6qmWdfstJLotY9nLLtdbKETn33KMmhF51eBosEenEMKCujxx3mrnfAhDVpd5YUsvpyp7LoVYdrdWk1Lp3fFCAX",
  "key1": "5uJuzE1jFKaWU5H3QjUGc42K4JpaStdgn6vmnLK6MRHXR6kHXykX8kWexgvspWS99TvaCHLNdbuBjobbEBgjJMuX",
  "key2": "2jxh3aStpXGqAwzYbPnRi4euJaqj6k72AN1JEDxvCreP7chJAb1TMMz8voYpYfMuZiy6dgLQcq4ztatSP7Jzt1Mx",
  "key3": "2ymR8tZNy9i4TTVz8jANgC3BFmAG3NSCYWHseq5XQUPYkP1ChgCdKYNxZtaYCLk1mPcsAHmsEuLm3rKpLn1ivreK",
  "key4": "4ZtVXssUvsEiEnq13K5jB3guN2FgjgiABh6rvjBDkMEerXmU3ZQxxvSFpF7tkUd1qW5dBpGV48sjDBUq7zorzX97",
  "key5": "Uz5JN7qiKvaQhhFax3aqG2vF7V9suvk3thxjpBdaepqGMGMsM5PJdV2PaUYyppHFNRqGjidm353X8o6JxtEYNLo",
  "key6": "548RGkgZopiXcMgbsabTu3P2iF6k5E9XrZGdvmaMDLi8URjaZUqP2YExeXsv2FA38Y6qf7N5vZd8UJB2ecdbvTDM",
  "key7": "2Yq1xpckzhQmYkxr4PbzN9astcHoMuWCoDgCqkafjtfxkZrMkzbKEw1pzEmv81BBtzb1vziwV881AWnZPqhv23j2",
  "key8": "2kvkpxqbjwNqwbjheAtSN72s96jqTJdJgNJWxz3yPsYrVZSjwoo3tYQ5JSewHaBefH9jKb2xDUGttfQQ56AL2ohM",
  "key9": "5drNgk2o6NvfX87ymQUUZndRAm8LdMW3iQC9cp56ycKsAxi1odLV1F4hJUjFgnikjdrgi9dCZrE8QR9YNZJBCnt8",
  "key10": "3VL2XZPsFSD9mNsCmNiuvs26aeR6sXUxByX2QxJgGbVoeeRZqn6LG7zTuQJL4aR647KJfVFDSTDuCxVfWbBRHPTL",
  "key11": "44H3JxjmYJBZaZKDG5nseiESUEkJsqsLU5fUxkwjhDKE17NgDDuex5unQ86xBkhtY9y1MZrRnTxUVpTYf9YPgw3M",
  "key12": "4vfVSBYycEMyhopDYS4jP8fGawgYS6KqyusVcg1ftYJcV8XwkpSzXDHqLLrUdGUTwzR2S8VqgKC3LbRz5zFE1bsE",
  "key13": "65dKFfMrzbGehv5aqNW1uSASMKvJ2toWTrSz1Pqg2kWUgaTXRCyTJ8Bwh368Nze3pVV2mGKUHyKHaZWSD59ZSFJ8",
  "key14": "4YdtNssmrBosYMZKLTvYzWpmCFSSwXki1uVVoPJGogmpr9z6vMcZna7PwPwvkL2hJ5zWxKsJ18XKWFwkmqtoN1ac",
  "key15": "4Mg5RjeZv4M14sY5Nj3zQ4oSJcZo8zrp4oNsDVTyMZGz28Vo9oC4KmWp23evJbCBJtVfmQ41nFETcdfWpjVYHVfR",
  "key16": "61vicyYfGbbzgABKdEHYD9TUd9PA8KzRfmZ88KUNGoJkBv1dx6TCvzY1RbMMMjjrLV9NpSZa6E9y5Dhz3Tbum8DT",
  "key17": "pogJGL2HtwrgTzpPXv2QFj5tJX4yeCMRM736RVFESweLBnWUCW3JJhCfnsF1wfAWmgnP87t32E4iwfwp1T1NAG1",
  "key18": "Uj4MyfrWiq24onpKJoyK3MPTcnNh1c8AtVd9Umy3cRvQ8nWDQ8N51KfERdZUbXGaLEDdEivEHKg8snzMx8s49wC",
  "key19": "2Zb4CVtyz9W4aFFSJtqbfVdhiFif38vmuXV7LYL4L7KkGgiBQ7qoZPgQUoMj6zL8jZZ3BgeWKUfds2r8eJUPxBkL",
  "key20": "XpPmohyGdFpu3ZACgm41Dt5vinVXPnhYo6WoC9HvdTB9eK6rSdBZWRcb4Reb4jbX5keaew7XCq1B2SpLthJsTtJ",
  "key21": "53qjdZfgPUVPU948J1PA8dmNF3UiNXzQXberYbu13AWmh9DjdxpzQ8S12QgnFTFsnk5nw8qd4vVDwQvp18QH4akW",
  "key22": "2KSBSwNdu2rJmbbMe5YZBZtPKm9uQjQKM5sTNLkSaX39saH6EfC6paVEu9DbkDk28vhPKKX4p3bBczZUUY7ixXvV",
  "key23": "5XKhFRZttce8Zxz1KaNVN7JWbdak4WKCPGNzEujtFFZoSGw9c38eWSn66UP4VXWZ5bsYu7xD69jZ2WrwoTi8HnTm",
  "key24": "m4ALjKoRtizbczzPbTbZ3PrFsbicHkLNgCj15sTA8xUh7xBC9BzY1TjVjGisxKvfn9hykDi2yYwfrK2kuZ6Qmky",
  "key25": "3JywZiZAxpVVH2Vs3rp8xLi4xZHPpnH3PwoPypn2hAPAGY9aJmNYgAtve11n5ZzJ6xSxHYa7nmG9TDVdjLoKKRum",
  "key26": "4w3jUakfcSDsuw5GkwXg6Rbr9n82Sgo8N9unqPD1caiwVmSMXphsZNmCLFv8YCqoxYGQhmyeFG6sCCigVjhuGc2m"
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
