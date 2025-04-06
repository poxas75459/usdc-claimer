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
    "2K7TZm5b9EbsUPkV955adrXdaJgKxitXszH2jvQEbPMCX3Q8J6mEX8iQK62Vz9qhaEpsmY6gdSD4bxisqG7MFQ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "m9kdxStmpRhNQSKACpJibT1uG85vKPG6yGftuDcL67oTR2X5Txz1ARmgwGEWsLLqB4Bce1oYdgMAm5j7H7fKcV3",
  "key1": "2917JwTFrx9r8Tshq4TUMrtbD8KhJhVxPw8fL6NDJDwfJUjvnQ2y6g1CMXB3sK8cTt8u8EN5aD7xNHJNLj8MmKMg",
  "key2": "3fxpFrdWoK47DYGcq4oh2xRGa48y57sq6mHA5n2TphjveV9kCZtAsBjZNCrEy5qjRVmUGogoBsXimKASbQdjqgBt",
  "key3": "2cCAVZ3ursqVrzJnnoEUH6sjfXNWm54fKXczdzaFiHHvTBEaeEiDqcGD8wyo7F5Ra7pENdxMxT8b3nfH8rPbmzba",
  "key4": "ZrLxWvwoLnhkMXWgjG5xsDmQGawY5fyd5K2Du26x66QuRunb7PBn1vohgb7fRGtVjUkGbarVgsEnC5QSAVonADm",
  "key5": "31kiVBVXj9uPoPHvn6V22VH2GxWBGgaXASyE7pcsC7zdR3gUAPShfdNFCbVmvQBYp5cLA5kKgER4oE69agS955jk",
  "key6": "4rJj8hdKoqry5e7uYKaUi3CT8KTbd1hNShopo2KEQk619bUaMqYZ4JGbtsz3tPVUa4xNn2ikHnivybKB39uBfYt1",
  "key7": "3Lhd7qKGa6i935xLYaoQ4CuNB3xp4rxchgKrYFaZGm5gsGguZqZWumdqU7zXer4GWNyNp8cKvaCKohvGyTE6EW3n",
  "key8": "2aBU1LTFRKpN3FuswRB4FKeuRfz3yMvVUh5wssW89kVe1F61NramDkzEYb7xsMwh8unZKtCrZdMc58npDQhHeAp",
  "key9": "4Ym8MtFkFzeJq6HVBjq64TaPbov1a8uopRKnfdAGVpHSALzhB1nWEAyxUNEHL2iNT48cn8Y2sZ7UNiuJn6ixGzos",
  "key10": "2PCNJfErCZuPVUBUSUNev2hTypTtyosbPoqeFjdASCf3PpyE64p1z6eqHoDfkSJqZHeWX66mmnniNxBKTP9XKFSk",
  "key11": "4pPBpeCBzaG5vEzBox6NYCZb9TRzsnVeYtmy8ViFM3e7jd6CUWJSXVr2JKGcZrSJh3FjCZM89A8Z2GJBJ7zE7TWb",
  "key12": "JvZJkRRxZhAfTWdwQYtbFUCt7x261YpKK3Yqgn5wVWf5Gx4C6ziZshDPaE4cjTcRXQ6TFGQSYSnuFhDmYQBazPv",
  "key13": "2UDeH1NmQYzL1tjgXCKLVQm68ZBMSPiXXUg8CdxA3HDtBUY95QM66wKPtR2Cx8W2cCP3qgjpqn5J1jDvkQPNCbGS",
  "key14": "3Vi1gL1rEBjrfAoMDKro29R2mWKk8stFFW7qww4bnzacgHQafbNGmNoEwwbosib3rEJjwXXJoLdCFtuwKkq6fCUK",
  "key15": "22E6hEntmReM9wfxTvuxijrEfmDJnayLs9fA7AmRFLPbkewucoX5e6WWkh89WTdiXWBWzEjohHBiNQZnt3bySA9D",
  "key16": "4FJdTUBtButroiNvHmyjwjJoYGnfS5YVM4qGH2ZsMUQGsZRpyCC2vSkDdmf8yhAjiUcLboY1MLePqxBADmmrJHMP",
  "key17": "2qcTbpB3YLn5vzFBGZ9HsANjfBWFuJ4DanpudbUgJyiKqRCGKxmLtnjE16iwc89PeoCNhhH8tqVF7rNbjJ8ux1jy",
  "key18": "4zEt1N7qeNKcaoyzcbD45FQyGuTNidTEYFgeFoJfHjqzekADCwxMJfqGHRV7FqY3L8oAC6JpZMe3V4sxV8EuUw4t",
  "key19": "3yx8sLLoFHXKjywD97DXeXrqptBYV47YoMF743msqJwfLBh2F3getye7XmggzJRw8mtHcBZsHhttPsrLQHjYwmbv",
  "key20": "2iCkzn6KXjY2MA1YbPG7LCRxfcQG4jT3RcCossDmeR9PopnPq5LjnFCxHLHqyVuataV7fgGEEb4ccRxp68TjCNrP",
  "key21": "34N6w79ATogMcYM9ByDdbVNgrDv7hm4pnFDsHSEp92EVsD2zmhgEBt4FuLK5ZfETD6TqhXxWvzBVb5cexJyLBvhP",
  "key22": "4ZqmVLWqg3gto39kqkL5CRJbUiFyGK9bQQwpGjWkhXM11akrMiFsWbr4UGug7becXFvEtETbkGXJFZEvoi2LmwTu",
  "key23": "22ZDqVzxHMxTwawt5F3UL76t2jyXCxcHLig8UXJSMWe1L2h9WR7jiXsF6WVXkwsBUGJjjM1AXXgBgZQUrzPskQxT",
  "key24": "wNFPcvE5JR1pPqqo9HsqEY7asLY7XHW4YpoxivZkaFcbdDppojbt39WHRkgfDq2BuVVTECb64UPdUHSH8cH2fvv",
  "key25": "3ZreFhCS33zW13MBCVV5Jxxdk2qwkKMZQXNj6BXFiPome4NwFZzDC8xwvzf2kdWgqQoqvdNHEFbiRMjExoHLGTeH",
  "key26": "61gEw55p8CsBqtDocsZk6LQm4hH8WtWZHmuPsFWG3qre7emtAhDP4ASS1FZgumraLy9hkmuLkhuE8twEwEHWZX7b",
  "key27": "4HgDZNh4NaZtH69pP3GLmBmGdJ1FtycSDeeZdWudDyvuNTWJGNB6ALox3XLqxMq4kJdNL2frE2SQwk1LJY5Cx9oD",
  "key28": "3okepJak4TNp8UMQJHktzYZkCmgU758hgUGHg9EHe8SFYk2PBcSsdQyXrAjY3yTTMjqpj7FSWbtH8qXDnnDZxmki",
  "key29": "51w5AaK3bxc2S85xcamLhzXEhupFrF32m4p2G6giVNjMoKRyDtC8aKdzXytvedjNHdsftanNvdzMgLcJVDWMtRgV",
  "key30": "4T6sTjdKaS39RBeMfVk9WbSFjNwaBpGE5bFRXaPzvF6g8euGpi2kzgELRJq9BfUmFiMXeRLMnSDtL1Q21oyfTJLf",
  "key31": "3Jjm7bTMhQFWpAv31hbiuNBsPVH6fQ2GNWutwU3HJiNn9nE3SudftMioWFLu3aaBwsFBNYCR4F4cJ3iab17y7p9",
  "key32": "4MgB2ffiDShPiqhve8B59farnhEWyDiKkcAxyDZCPoqctJ7FCYd6HFZ5RUmvGXwPAhS47dkQC2RdD18pwq15dvgp",
  "key33": "4r1RNXAafeXXMGCKUyXujVmga9nw2vDCqW5zmY7AzSLS9rRrcGrCWpp2ptikf8Lt2EFmK1p5PZvPBwipjNpWwNM7"
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
