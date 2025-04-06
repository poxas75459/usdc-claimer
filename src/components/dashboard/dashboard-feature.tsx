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
    "3RN2bTDuBLKyKYT9JLLucXaQnEowgziAvUJf7hqBrGbPhSRAQNUiFeVtZAXiDmmGUw1mDcgoC52gThZ5mRx2o378"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XB73JC5uHmNyVs1gbHd4H1sPki5ZnM21yX5kY7eGnggpf2EhScx3gb2ynG3Ld2XkT7tjHL12RbD9X2tAyXRWZLo",
  "key1": "2uSJbYvjkiACPgj3zW78Wjjjs1YpCTu8LGE41K6uXWekv8fKGM7NKG4GTpXBdxej6rAHwtfaKJxYdu6otpV2iJ1a",
  "key2": "2FmDb5uLx5RM3PijvskioTHSrccWWd7EA64XccZBhQjb3pyB2zP2pNq7DBWT864jmrmNwtjRQS2UPaxFLwgC6gPg",
  "key3": "3RTegvHowHswAEKfTSouSEPNc9sz6NpZHGXh74Sb2ZxLJqxGyVNgmvrmhzFhLed6jJsUwYWCY7JUYuwng129eF68",
  "key4": "4gnz6gxkuFqtixE7SXnDRrTa5C17iN11n5CVzcz9E1VRBySWHkWh3i5XYzCfKyuEed44jJJuvFNZ8CPu1hzsRbtu",
  "key5": "5TNyasYwyXBkRd9cVUVXQVGRqb77uyhbMF5g3x8BnzQbFCuomdHbbK1j3E2sbNmK4wbfSK5LdkaFckwurikaqn8K",
  "key6": "3TDQUASGVVCB3h1rsCygmtCmA3qL7f4DuwBKiuhWgF9aeNYogw4u8pYdBe6bU62QnhAvbhfEqJQwmA8kJg6rf8ES",
  "key7": "5ZP8smMpEMyeAM79i1uhQgVyMJ9eZxuMUZ13XApY4GtfuY9j9bgyCezFgkgeiCCQDGmUEa8yfbZDrCv7zS85ctk7",
  "key8": "3ZPT3w55VPAn3Gnt3h2uPMF7oJC77gSVYoMwmdQQJrtUcCNhyQmVRrfVsi6YnPirYe5oyzbzm7J8k2q4biPH734R",
  "key9": "5kZi4L4TR7Kz2YyqCJZj5YJUy4a2Jn3dCrDqw8CK9hHdUFnusDxHrWPAuehYRo4xjdzDCeuaAtmPMK7pPDWqrK3B",
  "key10": "2b59z4LgyDnXcPAbguLbVNMGELUnEw3dQd82c2Es4hohxwBR6Dyxo5FSDEvEXT1ZYN3Bzj6iNn6aoNa2UyTwZS46",
  "key11": "RwPymjgKgQgJiXwqvwNW1AcP1db9rBr2qTRSfVQH6aQZo63cTnwU4qtaKqh1sCEaAMPU2ifKiKG6nLY5ZpYCwGG",
  "key12": "3yQjMMQ3nL7Fc2VoQgL1i58gEs9jKiKkPPnHeBK49gJDmT7cFWoJwLSqwPRY3bxww8cbroer5Q7nAKUmKD6oiThG",
  "key13": "2WUiCdyYAePiDpUgDEt8uNrvRFsLfNE7Ps7wHDMWC5gr9CSRL5yAzYhRiaUqXT5XuQxmtnUPq768UB8QaxGxpnvx",
  "key14": "4sEymyiQMrKpU2PbNjFjNu639JjWz6DvuQphYJrUoEmxfdcVuSx1WsnTwvDDuDAWC4rQprbypKzvU51zP27FqTxc",
  "key15": "3psxZyvAmuRQTinMJcx3EdnLth7mYm4QeUUh4w7w5A84wbttu5Avrp1EkUNB2KFB3b7u1mrMfCFPgwQMcYG1H8BJ",
  "key16": "66S2DAdFhaJ9ntDAtcX5BvLkYdY14vWgjom1hSCCdkcce5gB3TJp23BVbGTy6LYPdc6Xx2ZUpkWPm6zmEkra5dY6",
  "key17": "wuyHs4PQNQ8CPvxmFEfEmcZ7QRzHRuZ53jRzYbpAEbXTHEQVbzJ1EV7wqBnVZJTYVjJx8d58wwyS7EbXSKmQh16",
  "key18": "3vXB5hKp64wJerDdma565Ecm9hkEgYc4huofAAoRYzpqnR3MwcDUrDUjZohacvis6FLGo7BedpDzW8y4g2M5Yniw",
  "key19": "TbGrr1DR86UbaUyC9MHThPbChCnG4krWmXhnkxjrHRbUgedSuB6hwLGnB24j925dvRKY6Hne8Z8TrU6UxWjaFF3",
  "key20": "23hmdhrnLJHoTtogiogAgitYArucEtb2jET9nSzocEfxWwE1aUWJTUT9USEfm5UxME8jj312y2WjDufcMWjcaSGW",
  "key21": "3J6iC8uRakP2smxpBZ3C7gvbdRtoeuJLeyzcKy82hpqPsYtU2RqWrxMfDWz4vZxgcZKQWXEDCKGeZ74QyHEzJhfs",
  "key22": "5gioxgN8rahq5ruqWzN5ejM3x2ZnLfDZdtthv4PgZBCda32hYn6NVtFGcYHUKY6mwhgZ1Xawx2ANky1yyP9EUSEZ",
  "key23": "3ZH1N2cCahnvCs6TQCANPJAD34UGxCYSprQ7ZRvgsHfpYFfNBXVtGkS9dgd6Zjh5v2CoofgE3wMU3XoUyC4Z3x2A",
  "key24": "3johhg79v2TPaGawu421Njic3g6VaodmncNZfKJUbdkDiEC6N1taniKJPpVMHemc3jQvWJ1GeGTcTtUzRMpQYJJi",
  "key25": "2i7MSPYRVzXkL2h3CcThK92PE5y9CQHoBfduDx9zJY6xbazLh8S3SagLUMHJnYnJoZAxUUR6CNRUzA41zthNWrUu",
  "key26": "5uCGCVdDDehWEpSGo3CebwkzdT43WE2KEqZukTD9vZaBjo7vvZnYFXKWFQjcoGDWTCXGeV23eeLDPiAvJigLggL",
  "key27": "vBxcEyjrtEiFMFDYUyZ3H7Z9r44nMnwCpTdQknNXKYwXcxQZ4yf3xuNAgFFSg9gq1r2a9FQyNayW1zyoVaTcfCB",
  "key28": "3EVnrbn1o9bbHZ5D9yEtYFuVjwBqM2L5LRgL9E6ngo4CjEWs6ZAfyuWZDUZ2raSjwpif5fegBsYu498K5RW9CFGk",
  "key29": "3YinQLQ58HrUZQxY7Ts4KNukK2B7vujcmpKpZ1cbq6ves7SDXShcyqmXdP6GqF6ok55bf5tcVtgJj32oKLkyHNtR",
  "key30": "48y8AAVf7AFBwroQj2Rkdz2ZHvkub19WrEBqvxcR6kn2UHmqvgPmJVWPEpKyJpqZnxN8zD52DAtAXdu7eA4xewxY",
  "key31": "4ETXKUat2SDhTmKJLedSXdBi7wk4jS9TanbovTMHGp1HpnmirUCpSqyzGHyY7cD4rPzHbuTNszFqQjv15WAAAhYo",
  "key32": "51p3PZ1Emsxed2uL7H5SbazM52UERuKZ2DAjeR9obYpZb7V7kfj3oKCv8Rg2GCMqG1CfKSm2iY281S1tLFPFbT6N"
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
