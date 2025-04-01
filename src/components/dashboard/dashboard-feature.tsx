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
    "3SDwdC94gZcYXBoBWwrNseBfKuGZZXAsWVZJ9o1Tjv3vPnzqNTgJfpiDxSiURRGByQBMENcSPXgPwPLTbAviat1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "niY6hkFGwXf6xao1aJGPM19HjQwE3jg3uGYkwU7LAfNjPjNDEn8idXPZwgycWYsuasvo9enWZRFwTLR7F21iUPf",
  "key1": "3MpHGaisSwphy5Nz1nGzC5UcPsAXsTc5dixjuDVpi8vH1BqCzytXCobggP3LHnha1k128ejCFeDheasNruBGrBjA",
  "key2": "3gphnmenzujYbdtSDizNvfJAHYaUnf1xG23aG8PFr4Zht8JZsKhpnTL166MKB7H1AfsWCar6KasFQMCQrvpDdHSy",
  "key3": "4djz7jFUpC15hcseKPc3vEy7S8RKW5pJNsWgmYCbwfDn8oSDr1As8HWEXzsN1yur3k2JpR9NdxrG8nqsVmLSXkA6",
  "key4": "2XRkDd8vvZPujRwiwhetDpi3SFmQy9WXaMYLrDqiAuzVSWdGsd2MFU9KpEmQKbpQkBMK2GwHCa33GcQq9GsGo8Uf",
  "key5": "334nTnQZWhMPSr9KCvEteYPVT94bR25UKdwSe1Es74bhyxb25gXcQk2DiEesuB4i2wcZASHFJLmP24SmeNGj9KB7",
  "key6": "4nb5K5dvGbEoHc3AzbMKG1VjcthFwschY3MniHvcJhUocmpwL53oYLBSPKJutrtHykYb648VhtKW84vU8fLEFJ7m",
  "key7": "cvxKvhuLVtHLwJCK66bZiSFv6q4LmbDqzhx2bmYq2bKmuYy2X1bGvxyA1v2Pzt861HgsWq4SY4uSnm2HjDuhFEC",
  "key8": "Vt1VC4zBUvBgp5KLejLJMkSy691Q2kUMorterD6fFryxJVGq89VZaqtsSuxTW16akWSqa8CB3BgQAvYUJwmmo4m",
  "key9": "2ZCrgyqiXRdNKkVXGyWyyR7Z9ZcEg2cg3FoQoxfyhW3phgzZE1WVDFoHAdXEiLzWBCSwkzXiBwZahaUENb1pcLzY",
  "key10": "4eNiZuHXU2mX1UFsSesY3Hga9SwiFrc4v8VhF7Nj2rNwpJXvtQVzYWG7TaPEKgwYFv5AmD46igErDHRcVbRaKLEy",
  "key11": "2wmxUTys6YAeDuf31C5RwUfCoy3yTTEyQhGYKvpDQNbTRB1nfRMyhRbHdd5Sw1W29AGCcp265MyK5s4FRq8X3AMr",
  "key12": "3mxkJ7tyqZufKBWgy1Zd8vfTd3J3Kb3PmGKAXPPCXVyYet7iUDe9G41eackNctwydz9J3nFL7zy94uVpmUP1Jq1B",
  "key13": "4wz7tf5xrTuH8iug34WSTxz75U8n7gqFW4CjhP5ksFFSutUEHWZow3xk8zD2gdvowkRxMKNL7jz9Z4Ln4imrvVwx",
  "key14": "HSzCe1kggqmnYbUoDgci7i2fh6EXX4YLCFaFNX6tW6oXHCmz3wdqNpBf9pRPuHEsPyppAPZKSKKiCCeoTnhAA8F",
  "key15": "67Kcj9PD4q7MUueQnsBCRsauTA8Zcrm7xDi23ZW7ZDEfAoXjx4aNwVFr1QYns8HwF1wimpZ3vvmNRq77mvEan1Yo",
  "key16": "q1p91nSfJLr6L3SZ6bHTLgMKEqSdDQf7wricKdNu9B3JBT4x63QFTnvHsUqqDw3w8Tkgj9WMMsEZZStSmDdVL7R",
  "key17": "3BwLaCRBMrQRJ9S5MgVhYuDp3TNSMfjUJfootGA6Ni9BLkqT3NU6qHSxU8MdP6vfHG4CWPR4LwE5zBZk63QQUp31",
  "key18": "koTURzJnHmrGufaUsHQKb6ZQNTcu8WeWuYyErk3zF8LimksqHqQQHtHGAo3JK7fWy83fqgoksLthMkzzpQZkQwi",
  "key19": "5LbRHL56qjbvEmmhKgPAoj99DLrv2687HjdJQPkhY1GNVpewpKcC89WSjTrgzPvGgcrs5t9y99pGHhHkYYFdR1Pk",
  "key20": "2bcWVCfrNoHz1nL5HvTEpc3jKbDzTbstTPzRZ3QTcW2HY92A42LXx17tdjbbEmGKf1fY1L4bnHx66EdTb1qAAiV1",
  "key21": "65UFqPmpfQLMqiJSQE7bv2eUwBxA6NGjXXSTfvtm9LW3teGppzj4v42erpWJuhbiGWHctxUVwBUJQXa4gAcEXF6x",
  "key22": "3fvb1Bocv6q43sgf5n4wU3UszPfqeYUMkPCKo3iACqmtAbB8pYcZrhvX9kvrgbi42u4XgWd3YE8h7zZjmveqX6Lx",
  "key23": "dBRianENFn6grptKEchHfKbNhVkPjkfsMRCjKCV6yuDnnkAPSaQayfUFnsJ2VoDs65FYdmN4oBD1b1gCkgYWztV",
  "key24": "41wsC1wvXHmLpkvNVkHPkUCYf35ajMRGFK4QszC9VYaMfgXVJ5gJ83LG6k76bj5oNLn1sgwotWmNrMZC1aaAjMwC",
  "key25": "2TUiYTnzRFCVzfQnHZCr6AheNTvE3tvd114ChmHjJ2bUMBLGY7Ypmvv4zZCVCa4KW3fc1RozLUX8LuKeDNmF29WR",
  "key26": "3vtPKKgTVQ8BLx33HXfU6MppPS2MeLTzeasc8mNsAUj8GaDktmhL2ycmxYamDWbv2cFukaPvtdWXKmCLok6yHZqz",
  "key27": "5CXHz7tsCBpejEd8Pq127oW8AV3uLqpWQaRHPanL8we6VSWnM4kWofeNtT9v6nha6giWh4FphjSQ2FaeEJeP3R8h",
  "key28": "4KCkLyyq17osRGAypEjNoRvCnuAmy4ZnhFZLYvZNzrpRscS8mS9jJTcwETiwnkg8scpHHcqtN3Nw7GXi2yR2wyBj",
  "key29": "4zTEHzDuYUqvVCMM2oDAA8nTapY271xFAoAMe3eaJYLZA7wP9ccdGB7cyAP4s2SgWU1TQ9Vmbbw8ihiJmqi2GhAv",
  "key30": "JHRxW3zYUDuVjkuq6j1zSsh3DAj5BALqVvntn7LA7gRRri9nFiZcTUVDYyEru454d4g9YVZpjjfA7EyCqVZGfJF"
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
