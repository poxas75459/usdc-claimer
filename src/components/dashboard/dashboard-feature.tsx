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
    "2DTU1PP49ypQCvLc2uzGgTxAdJbSDguUtz1L5osMKRVZe2DW2aq1gAkhdcauRwbiNpMPycrfdzbwoJFHLVbArNKx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xvfgCdc9fcFQZceqEu9V2ap5haRo6Y2e77tNnTfqv9UqaXvjgNi5H6dTGeVLk1yaa5tWuSmPTccyK7iymiB93dB",
  "key1": "2jGA2gFvVU4JkwsfhFmNKtvdeZ8yPCvsopZPcKCbYLTGfEVWxE5quszVp2mX1ieLUSUCxMR6RHeeyodzWcxy1GoV",
  "key2": "5mpoNiedwgf2ySjXnPPvY6KCY772Paq7J6PbBaDRwRZALwZ8mtcREA5uUEQ4sAXM3FBPEPhq5x48EstFRZcYxSXy",
  "key3": "5NDyLK1jBPkBn1345uBtNTuKZQd6zJsvsfhD9GY88BmYeyVKcnz3DkYSfMm4ZeguSTPcSz5X7pD7bEzgVJHbhmab",
  "key4": "4ctAzftFBuSVjCUBanphXKiECRQHdtEZpYuhJ14bh5HYZoP4Z5kDHBjCyCSzvWToFnUysVK9W86BkmG7jsxoawpa",
  "key5": "MvHFSWJeW4feN6Yj7NAFBjAMKyR9i3juAzNuZA14tPWpmT3Rw65S7WZH3t6deraoGtVdnpuPWisRixM5Ge8rGAg",
  "key6": "3WQKYjTKE8QZzpHaZQWzqpew7EGZzxnMaGgbtFqR327RZEMYqUC3V1EMH6PbZiZwdtFU9eApxe1LpoE1oWYsrdpd",
  "key7": "4PjkuAu8HNCBJ2n23Yc3NShciMe4EdcrZJX1JFPYG3D6Zvzx32gHQyoM11HBATUMXDUJQVppavUtRjR1bYyYBTF6",
  "key8": "3pGZpWtkb8ioBoi1Tb5yZv6h9QNHu4qyGyrknhwS25zeLVKs59Ss42Xb2MVxuvUHMHgS5VD7sYPKf84ic7R3FkiJ",
  "key9": "gJKqfaSeQmwMZJMRwu77zy5RajMARYryWEZUgHwwsQAKfdnLnhS2rypK382KKGqY81voXhQoJvZRGGNDzdVgXZh",
  "key10": "23pNUX53QpkoVrGMamsE75wif5vhBU7m4uHu1YCZhjSXZQHP8jZuGttmUuVm735fd98nGzaRoF7jNvuvf3DFMh1t",
  "key11": "51BG7K4igH6ixSnCZuj4wBVo5AcPqPz3UbvYvG4bNy14nXXV8UhudxbntU4jtMB28E5NpEoob25QGJYbtaUshwPC",
  "key12": "2ivYbodDprR9BKgLPHRNbxTESp5tU9VAei2QBPM79TKWYMUzd4XDqLYRaF9DfiZh4bK5u4RnuoixjgbqzuC2XdF6",
  "key13": "239uurU4jcAsHeMF1WtZXSQZPp6SgF7Ju3y96nWG1yTQfBimdaSXcjmRswaNFfRbFnbxdqfas6rNxSThkVETMSZA",
  "key14": "5BPvuG61Cg6XCuGQWBk7BscVWPjzVnUGLQFYbDanLuu6X8Vrn9989UUhdxkv6Ns1koMQQqPyf24aHHYRZ7MqwZKV",
  "key15": "2C8V7natXnv4KkdQNRzBwKsLqzCnSmcwdnSoSC7ZP2eNBL14GoX2oxgFQhtMKoxJfxbEuLyQeM1CRvQaDa4tfmL7",
  "key16": "5XfW6Efyf5KRaREKE4CGccivGzmisJ4vG4eYSJPWA28yvPVorcDMFhsdgiAhcrkv8dba711XFbseXAeBZBjx2j27",
  "key17": "ZtwnvnSAB2pRv79DFnU8Lyqe19R8vZhtUfBPoHcUziBVdrTiSWug8nL2YneoeBKVZUjSVi7uVBaw6iGvNDT5TRa",
  "key18": "31W17jX28tFrjYRiNubZUsQadEfaTVHqTzCT7h3hpkREnNNiF9PVjoKLXooScd6Weey52A6S8v3yydJnRpnn38JU",
  "key19": "4bepRa2g21E564aFMbDNrH4vrFY9UuB68FhDBfR7ETJQTHGSV6nt1V3VcJ78kFYqhR9F2oGCa5FHmNCZ6vHBaRRF",
  "key20": "jwM6CK5sAUNdDT1gPXUyw1FUprwwNkZrWNmvHguaop2ZAkSJwPouA1MxXe6eqPVMs2vxvF3kfLz8nL2Sn4dAx3q",
  "key21": "3VE3RBQwqscd9dGsH6JrfLsXoyceY42ShJoj8FTzL5rcbubQ4hYPwtd6eKRm92TJXGBgRdNQoNdBiz2m7XBMKrgD",
  "key22": "j3UiQJeFGZAdxcCrr9xvid8uJfVB38Tm4JCJCRd2USjNUhCPNi4kRG5JUr2tmskarJyQf6iqyEWyBZQwoDjQYi6",
  "key23": "4beGeruQQjxi3jqnDCWtbsYRC6vSRMVHwGV1XE9efzjBRcoyWinyCCGy197mFLiHU3dzeNC3s8Wq5k8f7dsknKzp",
  "key24": "3BsNZh15HhZpJgaGmEnDwvpRpTSH6BWYcsJMNBfPzmp5qbgNtRqG63Rz6XJiu3RejEjaYwE88LeFkGK5o34RSDPJ",
  "key25": "5pVwmkvhSDK78EpAaRZkbamh8iX8vHRh67ncFUg4n6uPbChArDH9oQKi2WyM2Zr8cGq4e6BTbTiE6S5UmAY8eZw8",
  "key26": "25SKjNYKtuVn3Td3c37pUcFJyV3LmEQxEEQEjFjRDbpJEvWfLmVgtTBjjf2Wzy4y1L2CW619qd2Pg3cSuWTJam28",
  "key27": "3Dz4AgG5azKzPFLYaj3329D7Y4VQgomRBDpMRTf5Ed6CwybdbF6U2JWvXPFFPFAHKqnRtVaxkG6LrefxuiDert7T",
  "key28": "2o5acdo27M6TWpysjQgP6xwiBG3WttzdUK41oz7sSrYS3wckTq7mnErJhc45bVo2iUe9T5jb6Z4nPCWsee2dhCVt",
  "key29": "26i31QugyuiL3KEdUhzaGrPSB55CdHuAGAPJK9g2EZn3qj86PqtvUNGGMnec8tfZ6xkca1X5Szh2R1EquHmjERGb",
  "key30": "4aUsybWEeEACpv9baDGWRbNsjRtbgArjCGmBJJNBxvo6yswY8MdqWsnBngp5jTADawsdAjTCzEaBafZ6Pe2fmkBM",
  "key31": "21D6VVbWYtnh7o5uTTHnZJKySbsnB661ZTwb16sejU5JXAaMbzEpj9sES5sbzuzupUKhkQ1eroqoNr6VgTrY2ew2",
  "key32": "66PnM7VF9aEspWhuk9S1onASzUDESfQyCmtS5t9ixWPW4sszEwewYqD8j8VqawdFNxvoENiTSzvTuJWhCHAzepX2",
  "key33": "3qYVsfMFa1RSMzioyg5ZPmSZyvy8bdjCqK7cV8aefw7MJM3D3zAv9omBW7aD7PJocnuuWtXnE3YSCmemPhckndMg"
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
