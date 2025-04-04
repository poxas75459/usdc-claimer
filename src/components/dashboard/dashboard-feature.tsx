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
    "5kaJNphtpq6QR6oBkSPQ7kdA3obfP38Eb67LSopT8D2zdSDH2TTHDzCrJ1WSme2rtqSrXrcN8jePhHN3ka1cW5Tp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66TspAUsdhiMqbYP9doqGpTsD56dR8cV87X8QTErhT6VwR754YtPXNoNFUK31CDpCFdsmpfFwuG3AT34e82RL9iw",
  "key1": "9C2p5J21Ht3sYC2CEieXMkYSe8ggHgMouUARX3XhUBZJYQssXfGVtKEwPo6FRjMnLttbhCo4ZZUUGXFvSTkQ92r",
  "key2": "27vkaSRK8DHHF25gw4XTDixX7PHquXrird8ZTQdUpgDAPKzsNWK57fA3MTeLTErWqKtLt6HqgUdPwBJwcsU3kK8r",
  "key3": "3N8manShQWiwJ8RRBeeL5UnHukuriddzQR3nMn4PZynZ8ki8KwPJxxfYux8ztyJzy3VCUCmGDxQjS7MSXWniTvZk",
  "key4": "oKecwWzcbbRGc5aWJFz5ELY7rjbhvpZrPqkFzbnnejWMMFSCBYYkNxb3dbFSMrYqVeHf67yFUTHGKSGzTqGavRp",
  "key5": "21wo7c3szFMX6V8aWtufUNMcxRZHqYGW1o4Jx6uVk7P65YFphi8DkKSTC3hywN65KBMsiA3fyyJwf7HhciAjRM9f",
  "key6": "5Pr1VM3gwmFE5Bffgra6gT57QULSEMJb9JrG2EgnBTXxoEugAqn5d8J4HE9tPLtL5pHZBk4oNNtNvQpVUsdS53yn",
  "key7": "5fodH8XTxRWAUZm4gacmFbkXkWqF5AFSbKGvi3W441SH19G4KTmXd7Gjmq2xMHpvncaDnJwMkwuhbhrsFGW6UhW3",
  "key8": "5r1YJBhUC5Aojz43w7d4rcSYtRufX1qNNFcJ726c9TJ6TdAhe33WuBsygbrAPwgpS5atZksguEWf8qT937qzYShf",
  "key9": "41c62T46ByX34zCihdzimL8iTJNHeF6gJhzz8k5drhytRNhTRVsbwFBwKBjyK4nFQGLXmtULfK1i97ugviogAvXy",
  "key10": "3xUmuN5Yym43wcsiLPX1iCxTKxzDskTePmuvK3g5bRQzA4uZTHtGCd6wFtDLpoS7v6j1ZcTvUgYH9Tn2JThzp3sL",
  "key11": "5geWoZKUkssFZxUM2vtzjddufkXpGztLHb5MagKq3wLQhWaygi9SBGjjjAkkZBu68grmvAmv2X9yxkYrd4JH4QbK",
  "key12": "5F6HMusujV36JCXr5envPK8bcBRjY5piErTX2d2QM73QG9xpH3PoScuioSEk3Y1Ch3nnjosoELwGWUTaQmWKcD6g",
  "key13": "5fjLAiDWQmMGBnWL39Db1i9BK84DhE3t9YgzyBEwK3B6SG6GPaa9Vdxr6gX7RnyUHaWGQef31WjLpeJeSEdamaSh",
  "key14": "2aYYoYjHtMvLHB72WUuYwKSYtHoR5ADNMewVVNXTsHh5CvEUKXZzjEqzXtyRh9JRrDF1z2EVk54qMRzmG7x9kW1c",
  "key15": "vaKZiJdkDq5DRz9QXvFscGgzS3TxUjYZcei94FrPC99mnmMDRimQm4nTMcHh35kPjv9iAC1fwfYHHomv8mJJCT9",
  "key16": "5N2TkfU8WiWHhXPSYqrbgnpL6eG2CL3Eh4kFkTyJtUvsA9JvuawsJxGnkppwcySewUqbfhnvPzkhNeWGUYmCWK77",
  "key17": "2FL5jUC4n6pbWAjVxUsy42ZvqFXrcxujWqH5ZpWr8UEXo3YcYq3e67LMBco18C8Hv7rHvo3Gd3jswPm9NsfozFEr",
  "key18": "EoRbYEfLoSZCVMWxSc9RkW7LG8GZLbEfMffbGTEEFE9oES648enxZJbMs66oBjsjhCq37hyr5Qadonq6YhjE57b",
  "key19": "35ozqWxgUEPAChdBZtHAa7Sw7FwHseBmwoiiNwEchjKjEEfEusaZQrJLRfi6Bsv1Gw7QAdXbJhk5fmcF6uCdmBh8",
  "key20": "G9TBstbjFP8q6i3X9XCMHNWDFkA5x74bHF9DVFBMt6j282uNrm989wquQ4JDXyG39NMiavb3CMPgBZeFYMp2vmq",
  "key21": "4GNkLiyuZ16i8GyjNV5jY2y1MGZaB4kranV1dKEpNc2T5mcjhJsvHSfyBWX82AHbxaxgZenwGxuUfi3ZiAPhm1jg",
  "key22": "5mtfxxbRNikbkQvE7c3ZJjqi8Eg6AT2Ccp6QrCCgbYX3xvu9gLUu8CwE66bmYgZoTrv57f6XEvCQNz9R2Q8g7uhq",
  "key23": "UDnM3TNLjt1GyKRbC9qQMxrxLXsD63orQQyYZAtSKfWP7Ras2sXVdxBkv7Ay8AJcWQvzgxeEUkb5u87BV5r87gY",
  "key24": "5PtzbUz8Kq2mdkt8bSMvu3FCVTtuYZb2zdsx7qHtjBG84bGvA6zHwYReQkFyRbdzRYhRgoaobVViWEjmzimNbYxR",
  "key25": "3C61ahgr1odx4Qx15mAx2r4hTidSfJgDLY5npGikTqjSiFHaKhFho21j9QQ3i1xGUZaVfkRMacBySCizygzg74RS",
  "key26": "3TKSV3nwCHsNZ9gQWhpWQfcmJtzUyqEHgoMpGHHbZZYZxW8jXoEDpfexPNoKwJ1n1pW44zrBFzLg6cKePjXAt6xA",
  "key27": "4W7PC7mMASuRfvsr1RZHZhDHWNCGZBsbVYHgXS52nMiUn87CXu5GjDiDx1aMJHwRKM9xbnQSoqPc1riVMGbNDwvm",
  "key28": "5MxAAUSpfxd7qB1yJ9knE5wsvFiktAdeh3fdajCQZ6shFvJUNPZdLAJbupWWHpFXV6yPwj6Ng6qHpkm1C8qewa28"
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
