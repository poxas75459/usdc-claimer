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
    "2hkordqLxNL8pemWpLzTjJMsf8MYaKgHHAz1ovkFJQdJ8L75Rps2ozPxhah7BY7oHaWQh2cjgJfq7nefWqGwdCmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "489fdpBzL2DgHL4QXUwhEBtAcEu26Nw17GeK1dMnJZ1Gs7MGadqxWthJxTpn4AbceGojKZLaLW4rQbEVrWC7GQDq",
  "key1": "NjWjuUJaTeZ7rtKJHSHSvtsue7cVFg69xv4Jiu1eENzHtt2HEeXGB63tbuaLebzD96m4HyJGiNLJy8hsHiead2Q",
  "key2": "5LGqjfrALtK17sAmvficN97o7apZY7mW4pedXgSy9e5kvFpThYuR55qKNzo25YpTDv71STk8AEGnmzFppcLQ6EHH",
  "key3": "28utrHBpGhZjSSqwjWxyRGQFQJU3BwkgVfUL9cBihQ4p81gZA6ZHzHot4Cf9GN3PL7g7imoYE6QJfokkGgxf3n1R",
  "key4": "ZCdTnCX6TRFWaELeKLyXsB7unasCQLvn5w4B9JgRfHCPFFDonVdU31QbWhKMk6WFJEPrpDKSL2ATdkrF6N8vBVh",
  "key5": "4aW69yRsnNXoSSqX3D4xaLJ5HJoJAF44FXYBDdWs4ESBXA85qSyZ3bZNTPaxyxTA8X9Q7nTrN5NjvapQSQr8WZ3f",
  "key6": "4MvcKbwFNwWouqgXv3E8qeeu93bKz6cvaQ1Nbp9qq2aEYjnVoexok94p5MDKCwnSYmiiuuJ1ANyJWdxfEsWsJLQf",
  "key7": "5WZLm5razuKf95z6AsNLGiM6KrynwC1NzufS5E6nKE37jjibKUGyVif1SXsqAj2RcCBqePY3zvUkux2iuTDAKAAE",
  "key8": "2uzd3zSjR5ozmn2eAXYHfahy7e23t7gMjWtsCdbH1e273A1TKNc7PApSL6BbFNQKANw9gfGiaRbsHQ2kJWejr9YV",
  "key9": "23NNBNK61AE2E81SVJ14xk5DpPCzKtutAcNPJgu1W7tU7ezDKc1WuMBxc4747239P5rdw92PsSrbSngJuntEwdog",
  "key10": "47DJf8Zum5rkJ3D7UZ6Gkzg964ZnrTPCZFZXUd4jznHfAqyZDnMXUutiW1vLXFGM73uri2WXVHxmtPFvLqmGUmng",
  "key11": "utwZhoD8i7JnMf18jSMfL3nsS7RFqXAC1FKeZQ6aJKkZB5U1QEcfdJjnCpu3HBbXaUHfKzdt2XGEHotF7xCVkp9",
  "key12": "2jwdzbpoESjHHn1k6WGfLZHjWv7K6bP43MtpPe2CDReSo9r5zUXi8UZuJssugU83eZ8ksBccsmA5Fg6wMTcQZjdk",
  "key13": "3QHSFwhP1MU7Qr3oPPwhYy8T2qqYKmZA7qJJGSoeSqRktEpgkMkacnVifTbka5H3tQptvrPt2TdBkzx56YfWeyM4",
  "key14": "4KKmhEKphGGY7EYdHqGoy5xP4EkZMYDQ8KPgEqrEmreePSBYsc2nepBF63uPqcewuiDnKtbp3iRaihj5bZbZqGzp",
  "key15": "5ZhJh2o8mhRY16DVjU3Di1FCZ8exqBXtzvTo7rp7G6F1Q8LjkHXny4h9gZhYWq3Jj8hTtUEBdHNBc1xCDiLeYLU3",
  "key16": "xn1UECve7J9rPN73bmUwDMFRMDjqEJe9WJBPZvHYoh9HBYdsUHDzSxFZuaD68jHYdj3jkS4EoyCdNBtJPFhi1Nr",
  "key17": "i8nNZ1EXoeKZwiySTJ7uZcPaFstHENz638W7gvM3wsQZLKeinyZKgn8hAFkSnfvZKw2sBJjbbqTCXguvKHnhzwx",
  "key18": "35mdwczrdKone1gqZNoxR3qwRfbteQpwokKJKnGXab1ZZjc1GD6kqFSaXMErv4JtPbL1KJRJXugt3jEcXRJue2vC",
  "key19": "2ahdxKR4GNSV1uqPWwS7froYYHQPJBP7HXRZfbCHgS6oM6yMP65bmHLVMvHRNzEefsWtivsupxLCrsk1Edryt4f9",
  "key20": "uLbVEjNsEBwBXsgfXjm7JZhayW9ZuAAq7Q3rsWG4xXAS7MPoP2gKpcGvL3jbk2GR8WBMZykEXLvkStXX2S2zvTA",
  "key21": "5JWNvSHAKWkHbN3knnZbJVVWepHhYXcAyv1DugKRDnBDKKV25D8ZxntswoFqzbwRw2p2LXmWj3F8jXfjdwDQfeTv",
  "key22": "o9QMLubJeLacvrVFjYdfWF4qwN8YfQsuMeq9in9RZJLDe2PBdrfXnbszeQJvz7kup8H2nd39G6af6mCyShh89vV",
  "key23": "3s6zVA9nSNmQ2bKZEqKeekMDBSPHBtWvjdxHcrin2reB9D75zk2TX3q4g5hKEzKasQu2yMvUY5bBinN9vo7LUYRy",
  "key24": "5hWZgjhjZzrfsuJM4PvrLx8x9gRZvM4BoYDzkFuv4uBtXTZfDQx4Q24U6Xk2SFdBxHo1o56dCEaMczUjGg1SZW1Z",
  "key25": "pyxUaukchMFBKA6iq4b7fBQTt7VyUQSh4uJQBFYxEmxVaTwrigsrZ5y4WVjyKwqwQYGHFLEio4yrocFBHm7hzya",
  "key26": "4mW5bkhaUT1d4sBi1uSjUHycS5CMZDztSA6DZWhUmo2uSa9w8tL6yBdQxQZZPGvXQ33e9ZkvhgAx9mgym3ADcRKC",
  "key27": "25EpNxhGiTAJdAWZjYFxk8GJvzvz3vvEmm1LbQTghy17BjV9zJg7m4iHuWaz3u5CS6DaXPKi1hJVvgmCEJeqJevm",
  "key28": "4eFCd3S6NbrkFNrQBDawd9QwiLitkU48NEQXtEHAKfKwJasKPKewf8oEtyHC12zMztjaGD8fduXLXimb7jufUawi"
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
