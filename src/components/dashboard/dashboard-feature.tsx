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
    "5Q1Sncd5TCLo7XKJaYNJkSf6gGsjeQppPBKtY1StCvECGak6SkHHvVEhhuCEEK8qugR3c1mJ4YdYjch2ATt8Wrnj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "reRoY9BU5fLBDUhcoqFtb67AZbdYwxxKdqf9bR32dZ2rnb53wczYa79HNKrQyoZsSe4JYp65rPhBvbYxbpGRiXu",
  "key1": "ng763xzDH5mr4FZaGX98HRpMxin4tJ6bRRugbEWkaXiYKp3vtmZk4ixpjXfvA3g1s45WsX2UQ8Msb6KkJa16rXz",
  "key2": "3fUWgcNEUiDS6HrcXJXr7RbPLtm5S72ZaK22Qb51oT2WFbcFE53b7HdnhLxnepuU76x7pjpSpbZMsD36MLCxHsn3",
  "key3": "iBQpisd8AJfPyScQN51eRMH1ZQykBGwoYAd9b5RkvST32x8ccqCwgpCjwoEfnv6FTwf2iSuNccST3BNsVghBUPi",
  "key4": "4skGzUMyAhHyiDbCBBuT6XZsoqmkv37tAzsumLs94UzbGarxDJQp1gvQXNwExYcYAxjUkmL5FXhxU5waVXJjx2Eg",
  "key5": "5fPZGYRyAe32NNLTWYSC2PoFvDyJuwL3UTnnjJsBzEmksyPz4dxzN2bDVNptfXG633Q8CLs3qvURRMsWwftyLbCE",
  "key6": "3iaYMPsFxsmHrrrqCPkW3C1GiPpbBSQpx6gpMy2dZMy9K53YwYrComz748WQXjBcJo3nYk47tTuBJTGRwFBdaxCg",
  "key7": "4iQmiKRc4WUEV7BakYxPzvAEufuYJ76iaHTDMDAXmaDJeWxAJp5pfKsSky2xRxDPhtQmsFMNksmRcDeuTvprRacC",
  "key8": "284r6zrDkzLcurQkbZQ89UADaV5HWEeFg2f8B1rZ5gTpSi8iEv2ihrEA8SRnq5TrCdBtL1DfA7QDTj87DpWdTTLf",
  "key9": "HkiCaTC4KZXfFAz9pV1recdXGAUyDen9r12M9H3zgv5MktNrEe65sP4WJ1uWiMmLcSkThJTy3kG4yfNFbGfChTS",
  "key10": "2wkYd8MK71gAmGdbneU9fwQwcffWCebXpTWvUKtMRAeQjyEaToGVqW1HZQWzGzzopfqKWNMBKpFhd3WQsnxnDVNo",
  "key11": "5W1eW2CjjpNk76Y4AqTdrBVXog8RcHTicip2wKz2a8yC15VSnhwB1RQ57i3Xb1WtyF8N7rWbzJh4rz5dj1RYzC6L",
  "key12": "f2x34nvBpursJYwcpEuBMhGHpUthgQBFSjnusug7z7L6zQfpRu6BYEMjstvSSArFNbJhA8hS6HRpjWjxgZj97cT",
  "key13": "5LHAjAKA7DDYJUZXjduwSGe4mBD28TSaduNWQ8LL55fAKoA3eSZ7XWAxMGESGFSBe2heTvXp1JR8wxbz7WF7xAjL",
  "key14": "459VBVGcgapaX3DMhSuNsM3gsoCojrSHcWbCn6D4eZ4GGZYTXkQSzYeDixBL7ap9V3cDKagY9mMB92JczyoRnadc",
  "key15": "3fefUHLk6jAVady7wwcznc8gyHCEvvhqPVY5PfBSGghKdub4tLL2MW9ofnFeRxRCvkoiX9L4z3ENg8y53RNTEhkB",
  "key16": "3egMp8nBkQM9oYuMYf2Y6jftFdzQtqeWPc4x9c3qYGuWsRmvwJzzhp53j3pNFScm9dkmCoGSnWYV4hKy4VLZnb38",
  "key17": "2BKGRdkjChwiVuGLGrvRcszNFnkewHVYSpvFkShcFV489Mcu2YDQAP8E6BXnywBg2jymUvCrW6SDX2WJHA3REgZb",
  "key18": "3n7rEHHFfWXJZzsFgEsCc3hekKdryQdpqYxykuWJVNMbx8sh2ZxyiPwMznDDkY1Zxvfjjm1eGZHcSptAijBkmDbS",
  "key19": "31zDoCYQdcufnLTtTM5N5V2RCxAPtK5HEyG5GEAA2sRykNBqvaERSRA7tBbQtVB99dLFry6aMPSsdGyZCZohu4K",
  "key20": "iQANHCtfHhkQY9iDMTyZKThsWhsYYrEpTWgec4CAyLcAQ1fzpf1Jh5mYSUxHLMoonDJBW3nNSf6vzvjKNjkvVJe",
  "key21": "JwrUkXUJLj5sfSeivXcQe6UnbRMEidLHXEhRNtNfqWSdWBSC8tRxQTrFc4xEMPS49t13L43UcqfG5w27KW9Bno5",
  "key22": "5WR79NMeh13oRDpdBCPgYDQQJ5ANojktqphhP52SZZgzuEVjfGcPGKUzjstvqWh1Ek5q8TH6SNJ92P58Ys9x2sDL",
  "key23": "3HrsjB125A44SSjbfj39yAXuHUj4tR4LFXW2NJ5AeLV3yy3cBNyHmcSxKWAMmcA4tu9kqPp4VoY3dbbkewv6gacX",
  "key24": "4bdbay9JVAN25iLA3tdr46yQNgPCyW1TK6ikg4ZfY3cT7jDhjTkvFo3aPhQCwd5tgA7B3G1asTBdytp7G84SAu8P",
  "key25": "26k9p4Ve53dS7j4wc9rtFTn8AAHV4KgCsibq7BLfAjsQBguZX6FTR4ViAqGdAdxzmXDUGT5Bz23uxTinyBc3sSZr",
  "key26": "3WPLpWPfqceVCeeDFkPLccviRL1jnRwvbqfd1h6qhVRQjwpBHouc4d4ZqDga4ajoNefWtZQ1KcZ2aEdh258Zd6oo",
  "key27": "4Z44NjNXg9qpRs8YmPYZnntZUJqrNNFaT2aJ5A8yMHTw9CtEhPE4NEmiKdB5Gso2z5ARbZBN5oftxN3dEp5o7wo1",
  "key28": "3Tf7MyEL5RyZd9KT1JtQvWCLZrAZXEr5sM39ya1QXGV2oHQp6U5YMmJqDuHMNitXDPQGGW3H68NBwKABTBzASx4e",
  "key29": "2y9CXH3SKdDzG9i61rfRs3Dujd4KBDyYqigrRvJB3JqPxu9Gd7Wc6QjzgMBXNBoKWzMY9n2wTzBcCqtQY2C12nBe",
  "key30": "5Qo8xFxwNMoAyfLNhbhkQ9uGuv6UKvmwm3sDhxM68j6y9jf2bkndbvMz8RExeFEFoQfpmaSLMnK9zTB3UPxhFbeF",
  "key31": "2c7yTY6DaRUnmA5ZYFdUgAwmFj5o4U2XtnDLchyszyb6Dk8qZ8WYPh3kdxQPzjK1JCVxSvJaHqq5hgMkAZdGBhNx",
  "key32": "5P928bZ8Kh4g3Dvf8LPn4PYcBSK42mmGSdfcXvZxpYuJtjgruC8JSDx4oYRcppjf2NnGkSNBALsZvrqLNrFyj2e9",
  "key33": "5XLExBvVhZZd52YeyT73pgLMTygUqbfJSXTqyLEAu1RBJCinjakW13RBtScazjXmBxUbbppdjXV97QVWUrw3HQrz",
  "key34": "261pSiZN8uwfn6bL61ArUoWU4M54k3G9xri7DuQeihGe7s4mxf3gfQPrw2kHNjcKsHFp75niEetKfAer7ovBUh1m",
  "key35": "5MLgZ6pxEwyDfXoE99JxxkGC2muA7Wn3ByKxHoRkCFLv1h1pM4UNnAZH8fJZx6Bd318rx8zrwuLAJcxhsSUSQHdG",
  "key36": "j39q3YnHX9FtYJYP1aSG6H7DDdRJrcQeCqFjVdXWSML7qKeriH4WuYvXVFpiSeVQ66NN1rgStPKvkFm4oheg6kt",
  "key37": "26chjzpcu7X57jhDxjVpyNUZ7mjBBLLi4xaixdMx9dwiDss9iznJo4pAwSMNmUcbwVxecrorLPcBUGRoprMcDFoQ",
  "key38": "4zBD9BYfrsa6KQYSUrNWAi8BetG3eg8iDqY36bncwHJCNUZNYvhg4Mpi4f79cfB2xtMB3j1b7dBvEU71d71Yz7HG",
  "key39": "4shQmqiiF4K25ab8umceVnwnGd59XTgcsfqdGHvcrh36zaYTbFNkurWz9k2xpxrsmsui6pq1NFut7aW3XqDxJ7Lc",
  "key40": "3DRe7FgwomPmcoWDYyQhFM5D8rD97MA6UVWPN8wA7jUxupKVo8Rg5PCYXfgGy5dk1Q3ZSDhNDqELfs2yMMZeMi3y",
  "key41": "FVN7kHYP5SMPjeXcBHunu6qpskVTpJdaNRN32cm5FmuWsgQi2PEEGkLsx2xvhbnZMM2W88kYHKxVBZH4W29Qnuw",
  "key42": "4foSFq8pjCitLvyryYNthvHj5curVy7rUWtgWrC7bpVwuCT7zZ1wh9qEti4m3v7Hses1UxwfSaACwvSgorqnmrWg"
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
