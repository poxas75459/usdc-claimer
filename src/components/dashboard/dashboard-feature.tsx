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
    "4oGNN5ZbHBnPSA95ufewdWoPvubGQN5Vvz6H4PtqD4QuBJHUapqDKFNoenvo1XEY28p8ZUP2X631as2WkRH6T9DP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MYFrVZXPeQfnCVUKr3h5vFnQvEepx9QCeGLHYuiD1Y1VrCwKW85cxKUKzKPrq5xzc6ACsRKHr72FeoyxXDV1ZUR",
  "key1": "GjR71aB5mAx5jbwpe7ct6HEpRerq2hoDXJ1jdyWvGiphydari3W9zCzXc7VfZHSXCE2jg9QGMoG6wqW9PUJo33J",
  "key2": "4pnBkCDSLzY1TuQn33EL1emo6waucGqmKQCDn53cMKb8u891wvKEQTDFKREgG8VupSqAktSWUiAYHwoWNJrPzRE7",
  "key3": "2qFN7o51sUz4bCsiJiJJJhxag5J2DzVY1KLhnrnt2ZiH9T4YE14YMt46Tz5XTsnUJ37uTz134FVANt8GtdkMDk2A",
  "key4": "5kL8XJMzZUiKd4UyrFYXPfnZTzXDNtYWa4kKQEKeHK9TZpnQVM68gy5XBZ4b7it9g9AL4paRnwpYwvvAyzEx2cKt",
  "key5": "hBE3STGZA67NDKbaTsspbTwZwAqkwxYxDzYMx362PTCHrTVr9D7SXTgtYzAgiHzSSfsFoJvNoFbgUSyrJoEsPVJ",
  "key6": "J3VgJvQoLmNHdySs5cS9sHvHJkFYDsWor49uvHCa632STnk1Yhs79WwC4aRoW8rkYNJ2JGQcQM9AdmCLzhxgVCA",
  "key7": "616Pm3ds5fB5n9xifL2XLrPhrKnj8L3agGs5UMdfJxbDz1iPazmpKzQ59bkkJuuTgdRoMzP6MK2UuX1C55igVPgN",
  "key8": "KhZqfBVdxt3UdG6nYsswMMDGntvZVmQBy7DVgX9X23BheUvcStyKC6vs3e1f4NytCqGxnHvJpqkQsauzbfL2DWc",
  "key9": "2tjTBVhzWchEmDYUgN7VFjwKpetwWNog7TSeMKQHMY9k1wp1rexxSsZdcUSpvyxggTdS3PzUeV8B4Dg7y7skgjhv",
  "key10": "3qTtRBuFTqeSSXNCfzPZnBS78Xg8VNyT7oRSWAKMkaDkUTsooMcpK4CDaiKfBbHnzEWdoVZ3zasz7V1BxEyRaXHK",
  "key11": "289zHUYtQkjpYzgntsuH8te1nW7FufJQWp1JaQyaphVtGhHAQEKv245vnyeKHKDd938ye4WEexkx4nvEBHSFGwyB",
  "key12": "2EKmjfntCXMhB1z2LZ55ERxN2KqJ2JpAwRAnnvx92XiauazdJtnXeKcw9GeFiwdhC1pP2Fpj8NGReQ9jqq7Rs68v",
  "key13": "2QYeWfLAWRA3nVSxNnE856wbDd4ro53FM5qfDsMBvHz9Ymsc8jMPcHaiWm8iCu7V9WoV8mhuMA9zK7cHx4rMbVqP",
  "key14": "UXUeWFUuPdgLshvJxqyPR6AC9osrT4jMMaikcSaT8XNUReQGVz8Sj4Zb717RNzkgGF4Xhjh6WB377UMML2EuqpC",
  "key15": "5NkKEYP7qTJPWQcHBdC6KQ8H1mrHBCS8kbxhLbwMdNALGARr7vXmM8Hew1ZDqrFdFzJyv2JGDPTSubbJjArW4Vb7",
  "key16": "evZS6mBuWQ4cYagqfxxhsyXMFVpmWLSPWZvWRdLsX17qXFZnBChD7A5hn9QYcTYyJL4UD4AyEhb1tosxQGFVQqe",
  "key17": "31Q6vQ7SMBvDegyDVBSVnELhsrfzLRs9rx2ej5YCXPJHQsjUkSvuEumBTVfQzjZgbvZ3ZByr7U6C8YLJnme6hBUm",
  "key18": "izPQ5fqk5BG3zPr1FwNyzxC62RMmHUvXW1JwDAxNapCpVdM5XSPiUVZbvHqXCqqyvy5voRwTtU41D8UUKNBrmTW",
  "key19": "498aSicvTJryBJDTgkPE6PayFdvsCJPWHXUQQqRouFFwi1UWWBkEPjyJozvE6J7DGHdsiS6fW48yaFo65Dhqxhzj",
  "key20": "2QxLkij3YNqoCy1LitrVBKxCw3BzsbDSSzuaWtooJbscryauoaaUgNhsoPRDTTgFGZRNS8bgSBmynCvpEnZrQ14s",
  "key21": "3bCuzUL37BCvzb4ZcVLHVM9Y4QJLrzsS9CReVy97uhzdvDgEVFmAttW9681GbSx5s9467BDJvgZfPF2CpoegUtrf",
  "key22": "ftSqcH3aXswyxrEBxWgFtii5fwYhtW3BSdMATm6Ds4DwhyKFxGWscrp4QG6uZAaYruT6HVYb55qhFiqjdKecaea",
  "key23": "4jMZRfJnakj2JY1xYYhbrVmryFCxpTPKhQeQehGn5Lce8KMdHSbHfFv1TjhBUXQHjS8egitA74szNokUkEodxQi2",
  "key24": "yFX7v2gQr8Ui6SzVDbNUqJRLDKRYJqFZ3isaiyfo9QJtkK7CrLUpqamADHJksif2pmH2EZ4jQsHxi8p3PAigtjQ",
  "key25": "3K4D3AhPmwJ3YYaP9tzFtgRjb2kt9PN8SDV2Fnyi5L1nNf475YnheQ9FL19Gr662Bp6f6yoJ1YzjsDRiaFRjz996",
  "key26": "2TbRiun4SRjFza3RFCVwmrvB6mimzaXncBVjN7uXrQYpzwPGAWYpcEeawq41YU61TDjEL3dWWxa3hFPcFwGm871M",
  "key27": "2e65jpMhu8tU2gWxW2rWStTMDd8vVPRGjXwf77eRxJbq13LvMJzjdmG12wmHPSsB452Gn71kTgDcpqa8aBdmaXi1",
  "key28": "3Yvxgdb7Lv5eD2ku1u9mMV6EpptpinCLkVoQRkGzLsz6rA6gs6w8ApBN7HPoRDRpJ7UcG5ZSvnLi2cCFsHMPvKNw",
  "key29": "3hJ28b54aHbNt7b3ywfnhCW9QgLr8yhvgabqym5kXfCw9j1NSCiEWKBq1MftBEynu9m6wKBAWB2aPMDE3hr9k5en",
  "key30": "2VuaKA5CLWKXtQBKSf5eJ4eZv85JSa5sbCgtwAJQGB5JA3fCufJvWvSG9a59QnCKykLCoH45hVvvYhhuJXWscfxY",
  "key31": "21kNpcmbxjT19GzjYtU6RMUQRPgScMxbfatRYFjxXPk6AMeTVVidJiP4RJ63e7cmzLhVxNhoyA54UY4CG4sYBjmN",
  "key32": "4FVUMnnZ72o1hCGPcdDM63E41gitW4ffGUSRLARFYR6m42jrJKvjow1Jk6Q3xEmLZdmEgB7xWZp97oPPkvYmwkE8",
  "key33": "3ewgSq7hzJMyb2ynwc6XefZcd3ekh6gc3tnPRwCDon2HHS5TVscXLm85NoZD5VrMrxAKfkyDFFg4Xr5knfFaKW9b",
  "key34": "4DiTtotuoFriWDn6dew9aLd3nm4ChZKGfibwxnmPfW1JVSgAQzSXLXZWHJVNTB8B9NZzdFAtBeTZcpQ5HjD5p6xV"
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
