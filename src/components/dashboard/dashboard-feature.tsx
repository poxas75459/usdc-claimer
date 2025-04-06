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
    "tD2YK7ZkWCFLGhyDfgjRi74B5sp2wNEH7Y1yjvXkdbujYH3H4saWiNnvXEZ8aV3SZFAL97Pi9jeNhRTGxQ1Zqx4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hU3wm1cLJp2L6m3vkbHyu7J2gMMURrWb8DdaHiktNsn7Cuf4b1JpJRRxARE1uXzryXVg2vtQUVTNkF6q6QjsxoL",
  "key1": "x8j9SqyeWnx53xsHhRyFobasyvowj27LEWiw4nSsGV6RdKLLYKsSGW5Ag7UQqWTCBNDTUU3h4gpAR4UVnY1YFfZ",
  "key2": "3w26avj64dRA6hKSbP78aggf219C8hdKe3FRWGqybJWqFtsuG2zmTQj4YUNFG7rYgGhkTreQR6sfcAg6NXKGNbXq",
  "key3": "2auagHzJ7tVfphrneXWMAYawHn1Ew2y9Mv43FrBk5djynfXDCaNqVpzgNMzFXft7nQv1crv99q7Gk27dLAPgWuSj",
  "key4": "dLDvULeod1WHcA1GV7sxLd32Upb448pZ5e4TVj5U4m186wjnzrX5jzW3uTfcPnWgo6c6MeUPoRTABRUSvxv1KNM",
  "key5": "4GB8Cg2Zbuvn6VF8i47RWUFHGCQd9PnLjDUZed2gxUi71Ht9QL5b95oezUx5LreJpQGGUPSZonsqrBJBdjm47ub4",
  "key6": "5ekCxyfQuaV3E2drdKQWBw6RMZjk5B2v3Ecf8Lo8UdrpTbCCiFzX8cjjAFNkrfWxrT5nzMXLtKnA1kqDBrxkC1ay",
  "key7": "3Papb9kPoKYEPYSouvdPn2VeDdFKT2YQEqmG9uUuSCWqMfw1qF7k4Ayrn7DoQGZR1f4Q7ov1mLZ4wGG43wt3tALi",
  "key8": "NuHEi3qeqdYq29iFZYPBUu6Ra7qd2C72YUFuCPthYFMfHGtLypEV2v57hmHLBB9ERE5LmHkyEKPYs9PR62QKcDU",
  "key9": "S52MtmiH6kAmZ8XQjcbpqpk8kZoqh76YjBLoF7Dix4ZGW9j8ChPUepTZHEoXS3UqM9CazykeRTRviwDGa4nReZ6",
  "key10": "5Ci4ZHndCZtEAUe4dVrCpTWA6oZvwoR28t67fYFdGcx4aZYm8hcLQLJptpMDFruTBrur5JG9GfxbXMm1RxhCZVKd",
  "key11": "3FVprQPArFjSqrsg55qYXmthGLtPdsTXdbj5CtWsQpQEgcCcFUAF75E5ryjihxKjDQf52VGmgX2tXbi9JH3MFoD",
  "key12": "Cc4ACEMLK5N93b3Z9UZGVyBzoXzKbgmGP9gthJuupcZ26tHe4fjrGS2GWYRhPZyJGjjBU81QT12X7zsB59i6HCY",
  "key13": "3QTY2NgJnP5VFKfoc6jrfYfrQMZdmbLAqywSf1izSoV6ZqidpUQE9cTPV1XjDGNUPBTPBrnPQdkTn8DaBqoXWB87",
  "key14": "2fux1TbZkKtQVGyt8YTzmKUv8jvz9KXKkAsG9hxJhJrsTYSxHAakzKqzTfSrB5e8Q5ZcsZWUMbZZdrBWzJk23LF7",
  "key15": "4QJhrFnxSP9znn5eTr3NG57V5vQZtTPSH2NU5q6Gx3eod9ZSJ2XN1XS3mhXJC5U1Yzn48yZNV327VAx5mEqMSsC1",
  "key16": "2XpmLYhrktPPaMTHDj25DTPVDUZdhrwrrrpcgghkx8GWQAxsKGMHM49hkwtXAv389QHBDuU9Qtnr4G6fds8JTvso",
  "key17": "5R6k5y1ZPcb7nasY8iDsx9PfS7UMyCUW4yTbnpJecZD4BB8TmG1S7nQjby4pep1RDgdstRfpmX5CgLr5Y7myGBmL",
  "key18": "SUqpJ29ordpqGWDYwvxfPUJkBbPCP8JNaVjMHSXbqbwXznkGoSJGdHcBeNQDktZHsb6ZFpDaTEkiiGQtXgrrSS9",
  "key19": "2CLFfU9j9FoyBbYAp5nR4BXdLWc5HZ1d4jC3UwQiPTfpD2rj9KyP7GayHn5tVzNvFr7a2xqHqaqHWFPP4pT6ihFn",
  "key20": "2PMsBRGTyV2Ct3SzsPpjsq6UfV5ecc8aV77RtnzNCKdiNmkKYJ2MFZ5NTyTgd9jCJUdzVcQbRBxp9hy1dqKiZ1aD",
  "key21": "2Ee6GaQM4ZodZyz8YjHEUeTj5vEvuoHfiXpekP4dMTjsE15frgYufkDaYmYVyTn8gxJxR7ooW3ktHjc2cyKy2edS",
  "key22": "33opUQCjE57VY8pUY23fYkHY2etT1mdm7i7P4FCfMF7dkZshVUEGsXPwBiabXXcMZtMpRTjSkBN3iiy8iRUGdd2n",
  "key23": "415hzb3Byc6idjF1MknsEw5e8qhcZB4RAUo6N3oJBEughbkHAQKa66o243zPYQ5ZMs9XxjdaiGUrjHB7GB5ZSKda",
  "key24": "5TURs1eAy8359ZWAF6LRs1XvkKqwjHrVxJLrtQziQHhAcfpMrq8esgRjyqf8TqWGC24VxsrjDpTgMLW4oP1JyWpD"
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
