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
    "ZSRMabNMNvb9Z9YLkJ3LePnrVSozhHaE8E2hHH1w26L7mQcjyp78iRG71Vb5E5Dz5xAqyUEU6bGtxLqmW29qP1M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TaGG5TAMzrgbcoku2QVtebJKk5ot9sd8jHdWSVk9hdCQUgvghjtt8MuEvji1UvoC6pqK4FUVr6qS6yCenQ6kyZT",
  "key1": "24m6u3qrGLmJwQRp4ivN6KgD7T96chZyjkLbA4o5Qqj1LZPcuWWQUq8nuC2rYUC5CTVr2N483AzrX7gKbD44qanp",
  "key2": "BLae6dTge2knzRuQQ56qESvN5FxEYowssYjxsGCgNB4pYRWMfEB7LypQ4sS2mjTdKRyg3GFnANvTiEE8HjsZxtx",
  "key3": "4tYJY7o5TrzMuN4idcFsYkSz7Tr8hbDW8nX3uokHtezvhfmrqZB6YuWDULraBKepsCrWPmUmXkKQTxdJsNSyTpeq",
  "key4": "Drr2A9Em6CHJ5kh3cHTXtmRZvTyidiMNKRYYXBDqq5fiF39RQtQukbAnfhL9T264duiBfLHisFRX3EdjqHoULAo",
  "key5": "jFpWf8StK4syCgkRnJRnotxm9ZuPCQxY5RhthfwDDqXzFrW4Tqtr8KUu79QgjrFbc5U7tHr1JLbqmEzVbKfqVSm",
  "key6": "4GKvhGw5xCZjA2pSTyq6ZwFTy6jC84CAaZWRzkPPSgNBJ82vzKm2rhCjzVWoMWmMEhmpkUw4dMLA1dvTPVF4Uf2C",
  "key7": "26bXNzqWcYr3pp2P3wSt4zEw4YMuFLdaAXLwa33jMxGCgcUXrVdCytAFaTh64cVMkAdj2C8Ur4euCf881LBnB3P5",
  "key8": "43ipF3D9Dd4n1CJrzx8AkrVTEmL5AU3FUgf2Y4kBtLusTJnxES6nZpZT6fdxRG9LGYM1WYgHW8RcURr3gUNGYNK6",
  "key9": "5kGqfXdp1oPFngXvhXimFUTCiskQD6WHKzY7SMPmiunzhau8kungVNm5gvFJsZCdDX2kmqSXzBLhTecPqfYxqZB4",
  "key10": "5XxapBFhNT9mjSkCmw2pQyoxdUCxvMh8qtAVzqK17vJpFExoAoSRuLB2QGSA6j16SttEUSPLTACASUVykJKKZmse",
  "key11": "RcDj2h5oYZ2i8rZ4WmeWUXZaz3BUPipEDxzvwAaYh4VuCgBouGwmbAtHYHs93iAUKSgqiRb7D43iHSsN9unKiQL",
  "key12": "2Y9z3Lch24jNGn5bzc6HC2ERGzjvAEs6Ui27CATg32Kjga17L61DyzjGkzfmDbhDjRJrejDkNmfeqf38QmY4KupC",
  "key13": "mwPb51xKz8w3xikMLMcAzbUkb87c1tTH79ApZWVWLC9Y87uEhVQfWmreT1PBcSshUT5rCPVDXixHvTvqFWjyD9w",
  "key14": "5THgwTNekvPAdh1QYrLBja7JmfhJZU79MHSTX7qyXVwdSbF1qcNYM26Lbp2ZK5fbhQ5oDUokyyH4pqKMyYF2iSbi",
  "key15": "cYAuD8GKQpfLYnJEuYHsVXxy4NdQyKsCGA8mVXVXv571P9LwHB89hf96pfoN2c4TPawmqjLVGKniH7Qgy2f96n3",
  "key16": "KXJeYoXFWDcgFm64gjtr1gRU78p4wMpsSLNGyEHknybfs9S6TvgLp2686RN58nRdoS1pYHZt6WRaiweNoogkY6s",
  "key17": "39RKR1dZTXyVgSo4VWtjUF4S7a6CUv2KrxtVnoZSwMRnhXWMiZf2YpoxEHoYMzf5C3NbQFQYp977FgDjyRHgACLb",
  "key18": "4iahV2anyXBNqCSeCHz7ewnAvDdg9zWrJ9RCiBAQgAmt6Z5RfQzJMgzEUnLm2ZRUzTtJ2CtHX7eLSNrtS2kfkEnG",
  "key19": "5TaVpBNBang8RUfgf7ucXjCBvYAy1k4RTX6Nmx2MzWYFpmsDJK363iXTm8CxPg5M6crYZ6RBXymFrGABKz6HnEX8",
  "key20": "3LanFfeZrUzMZNkXKDEHs8WQ3bVEQdY1GEnKyye47KLWwE2qBGvWsHtKdDrn4w9TwbLo8PVaSgTqNNRv4hgn6P1C",
  "key21": "Gb5dmCxCYa8y8nk3GKTbL1iQuhCRMbC4FpTVBFDNhmJKjjcf8TVHL9smkfYZFzSnJ91i1C5K4H5orsnw7yqUQbw",
  "key22": "vbhsKsthu6dfov98qSKbmTkw3NH1KeR7qZCtrb4j7nn62TzSFHjaFst3GGGKEMk7sSUMaSKaZfZq7v2D6xfcbot",
  "key23": "bbRhfWVrRR2udujHezcARuV3Ffxiw4pb6k2Xv8jraLUgCpMnzkjDCwFZ5KMwzGVqCAMjJC53ur2BQJMfPpjjSYf",
  "key24": "t4sTnKnzNfJfB9a8gACJSYXFYJCLDnCBQ9ZxM3Ao6tbPDVC1aQogse4WE9burutw4gw3HP4t9aCXbNqJV52jPyS",
  "key25": "52PjE4f2tohgsJCdbXb4y7DEgfdRkoYqQNg7BF7mqFZPLfVJ26zuZUFtnrsDnosW8iEgHDZwxv43aox53uMZHTXY",
  "key26": "5gxjozmhSHZJ4GEPHA9WMd3GTyzSSXdhXCLCJmB2JDPSqRpyCBTEiHSKk8yX8qrottnHesGjc7yQRiCuSJb2RYmg"
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
