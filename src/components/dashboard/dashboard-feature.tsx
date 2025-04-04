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
    "2eTcyMu9Z7GQxiAHiRknai3fk6WiZ53b9yWP3bHLHLYpzff6NxWLr6jr2eKYVwZw7Vr55iSb7ZA8AoafVBY7ixja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "441MmfhWi1Rn8TyNpQa4vcJSbN9rsUCgQ9em8QRzPXAaMH3pTBG1g88oRVnULdd9wRCf329823nV3HLF3xndjHpm",
  "key1": "PHPPUdXLg7xXgSKDyNxkWsqFjRwskpELpkLPijp53THGsRNwUavHxdrAzsgKJFQo2RRFSCXeKcujPpMQwkwL7kq",
  "key2": "2jNR16NMN1HEmhYQYJWC4ZamZiVddd5byZjAK3rENmiDbfBmGC2qEiRJGvB76oJuEsMmV8CUrDEtqPXjrJoF7u7b",
  "key3": "2ew5YZUFpu8swDiiH9QsBCu3bAR2RvyX3wza2xitLjB6Ca6qwzRMPEERToj5uzuJJYoyviD4d2pQeZW2GW1NDVJW",
  "key4": "4f5uPHnjfQzcZwEBapnyoqnMnCijuP828MvtazM4yRVESfaqdbuo4dPb1H698WXqVjwSDLf6ZyG53RphcEWjJGLy",
  "key5": "5NxtLBuCdGt3sdf1Qgu1rAwmL8ZYCH7HSadXmf65mP8JAQda76gZdATU4eM5T5bKfx9Bv2H5RtGrDieL756omoML",
  "key6": "2f8qnymsHf52QabGvySPAvqvEL34u2oWkLPfmw1W7ELotrQcTdpWLaUzF5L1zfVEE9srJYzBGj2LNT5Q2hjv7KmM",
  "key7": "5iNzc3hcFpjrHGJTKWn38wzVLBx5P5FbM9fazFJBahe1b2MJUr6gN5JCQk17xFQUu5VSemhye51wx4rYz22aZbgN",
  "key8": "2KgN1RJ7rGe3tdj2TNYWpGX24mMSP9sWDpxCrfwhZBJuJiXGL2dZBpCzQBzRUcTXjs1egEQJrc4EoehMhh5x1fAJ",
  "key9": "tjjtxwHzEr8EdjD3yUJkbTRYudppfBVEQdSLybdE3KvcCXYB3iWPbDbZBnkHKuyQPgkb3YaAAcPEru4fNpEjvmn",
  "key10": "4X1QYrjJ2iRXudZRvqyCkmLUsBwgikRUaqCYTJFG5bkuNZoR2RKbHc4JKaKKQ5B36d6T5JCzZcbsMXpeFnPSriKH",
  "key11": "zMnv5ZrcC7ComrSSvYr9jeA7QaXWofVmi6ThDiZw1a8UWFMYpAV1U9nkEZeCPW61hKvrm8KPrqMnZiUdUnZmvEs",
  "key12": "5Wyh8ugLna6go2bNj39TFdUdTJtVoRqGJC3awdcvrF8tYvkUNh4KGbdKi89xUiXZkx89zkHLeo3xqEDoQhVUo675",
  "key13": "5xK2pt69wx4uAfhWuUNEEHtFtYgS5ptknu2mTYwDa7FNYuBvUnoHGi1oTXF3ZTZcuSbacQhhK5QYQ3J7hnw43nUw",
  "key14": "3wFuecQVq4irs765bRJSpqbqyhkZpxbD6kvH3TyLwja19R535yC8d5UKFQUgNxTwc3EmV57m2Xev7RK88s2KboTg",
  "key15": "5tghUHxsx269ZreDbeKKgwb3FV5CogBNSA4wPGyhdswZn3cWDwjRy8QZCygc3uU7kvP3q5F6asx7C67g82bMHMAV",
  "key16": "ZtZQJrhiexNP77HvH1KGTtyYUDi1oEXWeLbC85wLwN9hn2pdGr7Xh5WSRBd9uHi8Aw2gRfofqzSbHaTNzfRZ3bo",
  "key17": "2LBHWtbw7t5AXaiLcGN7mHvjdthoLnJ81DUhE7kxy1ufrAgA3CyfZn9BgirDw4aUo9WxUhcxvLWhShp4Jy6R36qk",
  "key18": "2GFVEm14A9EzM3a68TBbcWHBeki2CpYjaCVjUUoo5wQSef8DrNTAw6StDTFxDaxHmTV7HMKCZ1RnwRNR4VZaCTLC",
  "key19": "5nN4kNPw53ULRz51K5193RCteGmz3azMVLzVYL4V7ibC6RVVyEBdJn3MYSXbFvgQVEY5dKUdccHJcyKFRHkUvXYy",
  "key20": "4JjcZTgKYAG4QjJg1pXTLwE47skACTncnSv7AzWVFSUVnMJD6PRUFJ3NAvXRGYxKdLcGBhVwFRSfgJANUmarfd7X",
  "key21": "2e26wMhJJVDfgvVjefFSokdkLjbop7JxB6kz6vZs9rgth5MDnqE4g7n6ivx4hAmNrAabqKrw8Qcb2vWx5KE3G1x2",
  "key22": "2iGMDZT2ty26RHNtHxD7hpfk2BAY2cp1im18WxU14QhFWHd58fHLqVskTjUSPWnFD1QsmBRvk7t294T1VaP8pBr8",
  "key23": "44AF1qGZtrMWopRCKxfw8sg3s1MP1wPexszKEFqSb5oEiETrhSNhJEd3nGKP1uzLFUrB9oJ4gSdBsBYt7tsEqDz6",
  "key24": "5n1eRhcNWQcHJfNCL6mmKG9NoTFUcSGfDX5rSGtjcDVyPXDkHc1CGjqNRTsbijfaRAxWpLf8xcdvVGnfdcgw1Zcx",
  "key25": "Zi5Tc4aszrJGrdy1F8dDZ4EwjukVS1GyTNc9voCvPopagTAhCjSWRJpK2FfnQPfZxNcsh24rgwayuqvmYWgBPAt",
  "key26": "BUd6S9rocanhL89EVAEweJjoBXnZbmgNtWtE33F5GQ1wEx5n6PBAr6m2edrq4mvJFaFnQ6KQs5sGcfTpyJgZdnY",
  "key27": "2FZYMs4j9KkNrtPRi9TPnbPCV32cBMWW41RPyf1FYQNXAq7pmmopvDqYt8geHSMMmHsjABnERpvdnsZjwUmnNP4Q",
  "key28": "FpSHwjTUU5LfFH2M9emgXDhqZRVtnzKxhRhchB7iFyRXCTkxFd5ULEGyUoKPgxWYMC96tC5KHBFqywmx67wCqUc",
  "key29": "5xswoALPt3R8jikE7ZvNWxqCeY7pJXdA6Hs3ivZi57JpVGijCM8Hc7WzLAcPHaDyByCwghsruED8tm4fq1yrs7iE",
  "key30": "367EQ2NuBNg3ALWPuPbuJtrwZzhMp2hQxzGEKVvmuBiU7D8XKaG7acREwhXLrUnoc7nDeuQRJcQucsM6zViRTP5y",
  "key31": "43XDoGk7bBdpeudizCVeL75jL4udbhFXUJeEVLrUrtvv7oyXw3GHZTDWCSN1XDrXw1maVpa9724F6ryE9ddskvvQ",
  "key32": "3zdyUi9hMmoFHK6hwL6K1Jio5WLnNn2bUL5DzMarYJnnTo6wMJK4car9qcdp6s6vVSwjJSyL9K3nD28YkwyohJ91",
  "key33": "4H6275QXUaR2XCDYPgBkb7DFX1xXgFctTstE82oNUpUm386eHVMkwkdpcF5vyfiaa5ybSFAFujWgLcjF4PvBLqfq",
  "key34": "wFRzNMjUheer9D2xiamHZoKU8fe7MhgBZz7dTSY2qucW1X554geaWNRuZc6bapiymPoD4bBBB1z7s48wMUWQtz9",
  "key35": "5mPh9QBAHTn6vAdqUPmWKUVLqmr1E7WYmCwGRkmK37AYdXzcqNF1cT9Yo9iYsJCmmdSEMstrEfWyk4N4dmxg1CY1",
  "key36": "2tTKEHrwZ61VyTAJFV5BLVDT9HKmNFneSzg9im5TPBy9B91GUTa8S5ycqkFLrSBVHttpbKuRq8HpzPRGF5o7WhUe"
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
