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
    "53RCnf1JwFJtr7y1wdhco49gtw46Q8K13VmKKqk6XfPE9RsB78nmi9XCmZVv6YSEM2YEFFQh2gqSFH3jCr5a5jA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bZm5xDduzJwgWWZYJHYL9jxhbwZrvmJf6hu9T55DjsgTUoJKhGGVgYkrcTkHD35RTMKw3SusEGydB44gBiqqHwu",
  "key1": "4YCcADLdZzp3m9XsUxmCP8QUzWKqaWwGiNMUWNgBrmGRzbMyTpNzPeMw38zTXe2hXBR9k537ipwcuRxQz8rbKkY9",
  "key2": "3jUKzozWM4MEifStP57wN8XKAn9DBgyHXe81YTEcptPP7rhGSKVWzm9tckTraaLuYMBHGAENNgGBn7rtoRoisLzk",
  "key3": "4pytB1omrjLbcWFxejTYKgc4Rufoo6D12C4aQ1uug7XjsZjtXfNs2wF96fZGvJuLYixU4PrEZF4xkJqJQ9g8QXGC",
  "key4": "5PSUKGcoAVeLWrDvXgMrkJpwjzjEPoroGc637XUWCPkg21TP42q4NsnkZHmSFaWYxcsfFrjBJ8aLj8eLpjJJnr4c",
  "key5": "5iTzCG5KU4E4yMHKUAW8bYnc8G1G32pgLiU9oxvCjKns2JnocQkr9gku1Sa5CzW2TrN4U4ahVbLhdaqSEytb5KE2",
  "key6": "24LMdofjh7wW2itCtEuM8PoqS21zRn4CLZck3yTuPBxivG9gbso9V7aw85jYHxBVv461TdbmhayTjwsoF47z85nk",
  "key7": "JhtAyg1XVyzkXCKhhLbkv7PBCS5mhsfd2NxL5c5kq77dMmpehGRdDgjpYrHs7mLHz6ruKd1cj6dmaazzzv59vt2",
  "key8": "2oGPk7A9yNEkfvzcAhv1i9tN9wRw5Swe3kxLRL4LPYvK2BANado5Kwr5VCdJDGHc4gQ7ZQMnj5HLzRmec7YZ3Ec5",
  "key9": "pXeGQw31CXYeTTey9BGquoihnhinqm2AYtmF9Mz4NZmLogtQQkyx1q7BpXNSPYkksUhRKp7jPQVzYUb1tyt6C2S",
  "key10": "56DcXuEG2cHXwsNypnDkbQk9Ha14vrehFeDFX8ZPmHPNAwY6Tm2L3XqU79gc8E6xWyYk1QgneCFD1raP1MUaf4Er",
  "key11": "Bib6sVPP9nG7bRrM9KSdqvBoYTJaWEhsLF8npxxSBqXPBq5ErdATk7XP5KEUYrLrTzhyu5Ti4CJzbA6dCYXoAsr",
  "key12": "dXRfCvtHVh9o28L8Zbz7qY8gF4uQusyw14yNncJzzagoPpymBX41AtovrHd69JzPG46ajYwVEPpsVvC6DQqxvLn",
  "key13": "5eL8pTmAVNwzLKQj9J4vxtft6ntA7HuYscm65EKGfEJ1YMPBczYqrMv1ChF6WT3qLrTZJZWkhhxHPrRR6mX8WACn",
  "key14": "3AUj9PFddoxwLfVEvf9j2kbfbpkcc8pp6KrGxtEcTz3Gg9syW5ZpY9gdprCcFrEmrhCz4jRJcBy5jBUyJSjT8zf",
  "key15": "2STkwaUsFrhZK8c6p8aThmgazmigdbhTyT2Fw756hmSC8VWoDAoK7hD1n8SBw8CwBtYNsF8tWzAKimRovUxAC9gx",
  "key16": "41Ci4MHdyHrfYHfriKj8ooPaLyq1BuBdRRBByWX4hpvRTeNquu6shztk7aULvbD6F9LGtbGPydEpFYZJwfdTraMy",
  "key17": "62ux8coAYKMriYYsU6HptLvJHSWcERftFUpqLjNpRPFNDtxCFzDu4iDq2e4SHKY9qkGz6p7rTpm6NBFQmZa54t67",
  "key18": "59uTy2gw1fhFyAxN7ebnhxhwMmNYTt2d7S8cHyNNFyx9KbdniwEfRBNpur2FooncZghPz3zDfsXyMBH2oENLDvN3",
  "key19": "2zxaRZLHybGRHk6Ji17ZF4cd22dJRfinqP2ZY5VhPQubUe1ja62mWVyqsJQ3aoqzRHKinQvhE2P3yTuch5pqfUQq",
  "key20": "3HaXNoLdD6kdzMFrqFi7uYnbvpXj1vxd56tX2z6oDDRyUsEzKo4oi9WAsYYe2gr4PUsoD4VsQ4nAFXweC6RWPWq2",
  "key21": "4eLTsLufe2sN3ykyKUWXRqY6bEX1DbZ9zPWCinwEcuAhz3RARXEtoQZaXSXACFRfSskrjhNcxc3JXKRwfxGoHjpc",
  "key22": "3SW666Bk8q7zXfZkpg9zBCCKsWowq91SAVvkKFNN7p15s4tJoZDaQr9Bs4e7yNa3fS6YnzjXRBJyCqVZKiZyExgr",
  "key23": "58RrYkEHguH634N7YcAxugPG7dDZYDqfpHCne91p4ee2cTZfTiurRstih8Y2WsZtirXwgeMgdRFFN5e341kszUn2",
  "key24": "kvPQXG2iKXpxraaQnLYV4ku9vhptuyh5ayXFJymxbYFPZgXKerssfUM28c8xExKnu2EHv91UprAUvPH5875y7hG",
  "key25": "41NxfSzBwYvP2aaQwSihG6F4cLEWi8RjbE2W5zton4999YSC8qPiLGbKG3HGtnhvZURNRsEcdCRJTMptQUdutfUb",
  "key26": "3uJzdGstamG4qtEYdSiXrQmWcqgVfeF6Jc87BLbZmV7KFyF7DiaR41odDMJR1cRtYeF7Xxiz3b7zidphEYCGPifY",
  "key27": "2CaBv3Wt7qqkaaG2kbogxySqRD1G4VcCAmpU8N8ArSsdoXDYqeRdV3XGBuG1ok4AnAjmCkbWNUT58bLaEQ4zrwQg",
  "key28": "2p2axQbRN62bvGduxnLWYb5zV2SkVjaZMV1YYg5r9GsC6p59YSquThKjCfGrd6KkGHjDEdF5cyE2SncWjDfUTZCx",
  "key29": "vowpc2ddiHpARecec8jwi6RLMLtVUZfT8y7Sig2jUyHGAd6Kp7eebSo3mtmDVFQT8yMJ69KnVzwSootE6gG5dGF",
  "key30": "2DymiJn3iFpkpp4DKRAj63AD3X282uC9RcijHsrP7daZanjZc5hd5MiNCbQ89Y4s8zg9nS5vuWE4ZT1J2dHe21Hd",
  "key31": "61hgNFuc2XdyNszAftUe76HYz3wVH14pMQDgiKA7WVN1DwtFMyBuuQ8ggoDfS5JmAsWNmqD9odBtL9Pxfe358c9q",
  "key32": "4ZDCw5hmz66c6H73jnx1AvhgGkijweQ2aP9cdhSjH6Ju3hLbQJdY3BmmJJ4YegNCvGV7KVUPSmZf4KBUMgtksABB",
  "key33": "q2vknxoJTSkZF9qSMbTYkdy6W7VhAQz5E72Gxx6PVFrynKGc4AXvDWR4tQtpKx44HReDcjZc1RXN92v9dquSH1B",
  "key34": "Vo2hHuAC4vzSisPXDDVjBMQxkn4HBbA1WDvZADjVKTEA1wULRwLoZRG1G3sFGskNF3meN27UAioiuceRyHGMVXk",
  "key35": "2gb1sA2qbqojYH8ytdayXyFcxcZ53bhac7LNtQuaj6C2f7PRrsoE2kg4uYSBQn8iq3jBGnE9vdZHPBqXYZksqQ28",
  "key36": "57TqXRmxCrULyRiqrgeyNAaQMWi2dNyq7oWAYsK2HHcJahhSnY1cVHBfiMhVPajLHiR3XoxoGRfcvUwtBexeAAZ",
  "key37": "sEAkeqQ7JWQzhtRKjQFKsqCQA3zpieynhdsJeVxSkMCDJuWMJBgapf1zXtqFjmY4DBoKuSVomt8owaTMS6zgS76",
  "key38": "5yEjz4gFMNa1oZa7vpcnaA3EsGYVBywjj9tTaFs3JUWkbQSYpsRwX8NyT7D1THji7qXMshZjtJww2sdymzmKQWdA"
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
