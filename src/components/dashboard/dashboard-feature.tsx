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
    "4gXd5WHFpKFLXK2TAVuAChMxj4yodo75GuXJ1FCJfmTqkPD6K7JY7aX7oGVT6H1bCLSHNDAKuJC9gcUAYkNtZaP7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VpH2MNJLjtEkHB9WBuesvmj1qcbZQLJyVR2GabUSqPgtr2Hh2JmQASL7yBmLxP6oQNm8Ueo8bzoySTSqhfMZjWQ",
  "key1": "q54vYXvrNdmS8LA6CFd78aQChuT9vfCJfU64swb3RKpVDy4TmqWHgcVp6FwKjp6v4xp88BJZVR974AwW8eeFUGC",
  "key2": "uEGVcrgm9FvC9iCDx2Us5Q4vsvdzsppTXuoaXYRhv6LAvJwg4JmwzRLNLtT89XU9LFo2rpHYp7tBxZYmVweHxqE",
  "key3": "5Nexjdv1G2Q6ewjB7E3n6WXQma3bX14kXABZ96WgY1F6fSDGsngiBWWyYoKZQnK4ikzn5X9P2rbu7xNdfMH4P8GA",
  "key4": "2shEfzVvEZBSb6WBaBqZD3Wj4EDVAPdqv2NWu5neZWXiPmpBxAWf2r7oiAEKW6MczGHr6VL2NQBoWBzzkGXH3QFw",
  "key5": "5LFGAR1ZFzCRcHRk9zPNvtDX4zHtiapBE27gqKJoiuvEZEuGkdfmXJg1gwnaitUCQ9wEgj6DA7P78kMtt7pFNWwV",
  "key6": "5itYFk4pHkFVzZff4uiuguN2kHBHP7xNPzVkyot87x2SAint19ERW7BZkL3mRN8a7EUjZj36WziPLYa2x8Ky4SP3",
  "key7": "36Rj2Yhw9xHps4pxTaz9ZvAwWWqvz9DMZQuKk3M3ZR6eMTgyZVyxNvndjmXkEfkqxaVtVUMmoNFm13DC9iQqNmoW",
  "key8": "58TxoSFfjPrBUFdhBiL8pJu5Z8vfm7pz7wjhLepZAsSGNNzjyShDF7TytfQHQLpQRhQY4i1SWvfmHxvQoUvhHmDL",
  "key9": "7PbF1LuK1ohp3qGeae4gn1Ln6FMm3dLF1u49HPGynrY4L5AQ8pjFgVe2ywjoDjh3zBwvNFc9nxb2Vem1kj4iZYS",
  "key10": "22ferYzvKrG8uQ7AZBTXzdrbCyPCPJVfnj1Ncj7iyxNmSKkYgqcvJBNzct2dcnwF1amGoKQGgCFjYCBKSzHwXtJj",
  "key11": "43ksywkgoXwNDhN6BpSecM94NjZraJAFLQTEaSEZs5zT3dSDVE9WH4VKhCKCD78GTCgyi7FmNF1PDFrUvq6MFTr9",
  "key12": "4V1Sy6UrQhgrVUuvecDCrLKpPeh8jp9thsoPNWC9y74f3xZeM5ZM9Xdh7vAXwoTfJMuvSUnFjchVy2Yt1WD9eFSZ",
  "key13": "3JcXsUXYoYmhWrmHiz4qeexfmSFGuCoCS7bn8FMYsogKdGEahE7XkMFh2aLbuorCST4FooC5FXw4S8FHfqvmzucx",
  "key14": "3m3AJakiUFF5KRrYu1qemVVqZPNuzLzBkmPC7UA6rZuZoMfUBnuGaEhGSp2gW9w2DFpc3sJ5cwLFHhPB4JAioidB",
  "key15": "5gNF1wAvf9tCFBSfwbXNSZeS7j1uUQK9HeKMLmCw5JyuEUg8adCbn9afX5xTxNCSRzj8MvGKCCos1QJF5zhwNz2g",
  "key16": "32HxuTGGbhgsmjL2gjWi6xxrGeGZ8iaHS82DU49dpt7sPM3REchjwz5EBFayHHDrb2APwYtfEMnMgo64aiGtPRUx",
  "key17": "4hPekbN7xEG1GbN4QYRyUpCmiyPj13BJStc2smgDZZNRVPfGpxuiHBKEyozz1brKK3NKcAqMHx8UeMNANfDq1ojy",
  "key18": "49vHsfEJDPiWgdduxBcTnMMQ58UYemKGQDZsYcGCHFPpevtrFLXMmj2h36jSdLWd5GTxnNfAPzFoNXP8fEqvyjrg",
  "key19": "2jia4J5h4YuJeqVVEmYt6dqqVzEuKrpoPWMxSXtK54W8wM3xsU4JGC1FUmEJTgcZyoWYT3z9f2nhQtH7etFXX9SM",
  "key20": "3ZPUHBqbRiFbGceVVRYvU16TsAkYrYdaLTmWCqsszDDvUDso1hLrSfDtW5zcw8gE5K2trWvrAVaRMJwqigeL8tvA",
  "key21": "HE6QE5YAbjuvqXsojgstJtSK3HhKWVm5hetR8mEz9paFTYhgJAaQUmPxygsTfUuqvwYp9EERAcHDxW49y2apPmk",
  "key22": "5rAniDUk6fLr9hVfNAWMHooRv6pcrotxGMK9uqcaqsMQKmetQiGwmAuisfrsK75QeEZZ3SJd4bPunGukQwNgBjCC",
  "key23": "3vHi4e2N1rZApnmRRyCvLVnnCH3AuJVwPXDBKgaiobTxDbR1EVUPWZukA48FgqYy1J4T6a4kBYxSx4EcLZUEvQXX",
  "key24": "kc7ryvqhEWh2u1AC4sAexhTwTUvXZm5DfQX2WzSFbUMiPgxpn2aFkKBqvPeb3zZ5wjvspjSbL2fyUaMQQkJ78Fe",
  "key25": "5UGG2Q8E6BLceXnb4k5tZPuj5s18VHFNQjEMoLXqkAY95mhSHUbFP8VLmLmmeDUM9McY2qmFq2MzHaxgJcNDAk3v",
  "key26": "3rz97evWhAM9rFKmbc1SHaWaP8gBdBHtLXzVXNCq1F3e81JW2AAuPYBM8SpSW1i8RCtrX7HtQ9afWpZzsKnMMzXy",
  "key27": "3egazHfUwCNSb9XUxigPTpZBdwcQq4u9gJ5ojR9pgtthmuCqabSncYDjwPr1ZARCA4MTFqGNK3ydjUFfuSCqfZex",
  "key28": "D7xa9RFycqBLxR4MG7LDTtN6kFqivN3w9rnu6DKQcZsKrsNi4oz4iFFMiA557pc5hrCixWfMMsFdz5pVdFKkUc3",
  "key29": "4Xfv3jbe2PFGcHJa6QVCrkCwybjpTyQ7ujZoNx6JETHGJJzVjQXHmgyDJGRLpX4Fzij1C8ffKYrwM7Ev3uFh9n6E"
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
