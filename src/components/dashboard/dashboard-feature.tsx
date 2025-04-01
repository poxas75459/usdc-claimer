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
    "3hxR2jmkxZoXaRWgjngjZnaa4unvMt3hTMG3uds2XXN4HAGLGopTtsac3GRieK5pgJEY4VuKNNw8mJCu8XpVNHxH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PwWyNe2mUHVA5ho34YDdiFqL9T6jkxtGwwvSuV5dkfh78r5TJUNzaAS3nKaMZRWkRYYYF7njRZHcwLZQuB1m6qQ",
  "key1": "38D2Qdzw7Vz6zFGerSAYrTSXbFXfrTiJfrnVs5uwzLFwTq3Z9vtkLvKjkAAt8BMp8nUpxzUydkbRQu2AocmScepz",
  "key2": "5UbEr5otpjqCqNAnkTho7H8QPK4DdVHXgNESai8PvnFERGdqQNUE2W6ryqAqAzkey7JeUkgyBbFEFRWSGf8vR6De",
  "key3": "57N6jXwX5MTkAfnVU6uK4n9RUyEQsNbeFbYW5vZ5iNYHn3U49s8hoYMjEE8HS5ptHFiaQEKMjh9g1ZKQxv7mD8s4",
  "key4": "QsM6s2ekotrWJRkxQL1bRgbNfE2hS1AGuNpjzvhiXi6NG5xFaNMtWGwnZ2NaoUezGkJqVfasgWm3c2S6zKnJJfB",
  "key5": "5hJodq3aeZMM5dqokZT44BgPYf3iW8TYiVooFsZirMKYL4jFc8aCcXvsQRz5kJvXyD7kyKqoCh1g5FULrRMzRn1u",
  "key6": "4uzR39ZaXUAeHECjBTAXw8jmc64D9j47EpdfuxecoXZb6pknZtzUMKqKbALdPvk6NgbtSUYkXrJ5BeESqJX9T7Qb",
  "key7": "3etbXR9wPgxVDxgZRfZ96CZ8VWHWHy8AHKkJakQJWhJuur3Wtz8uQAVpWymS2FW5CfHophkZAcd1ghVpbap5RJaN",
  "key8": "5EkFnTvbs4yB4guxqUHrpuSJZLVtd1NhJgCbamrwiRX3UUriYU2ieYEqrJmmojxfbQuuxdFBXY5pNJN1x7uwgJQd",
  "key9": "3AKykWysjd8XovWv4hKbpGLW5Df7Uzk5Kr7AT9oyUDjN6ha9pq7ekGHALojNaD3RVHMgQ7sNVvdeaYY62yRuLM6n",
  "key10": "4gyRvL4tt9yxfK4BowJe3GAHBfKqyyjX74epcmRDFh6x5n3JDmMdJbUYURq4Jvu2MGnUaHCAuDW12AUpK6Ev1tzc",
  "key11": "5AnMV33m1T14JxpGV5yV5S2oiYgnTy27Udbcvruo5uYUNpTuMDQF4N22EsmaMGhPTuiw1sps3cv8JDgo7C58NBvh",
  "key12": "Wr8mXt4A8zQyXTmefcjr5BhaRRVifmePWDQBbWZ4dHfn242JDFcY66EfNDeYgmWHLE9RARL2gCHgo7UuzqhhpTe",
  "key13": "3rUXVDS2KFGquRouFYviPgkE2SXASi3zzGYeUkzonRxhqySKm6D3KFBiDdymfZUeT73kPb157iA2RvDVXnZeZHDT",
  "key14": "qeKLRSn784YGH7SR3FRhQFt4mpSHnGBpLwyKzng9gHStRvj7Ukrmh9ZQMoK4dhJv78fJsvmJYFBx93cCtEqrm5c",
  "key15": "yxCP1Bbjkyxnjo3LqDV5SsuJAm4wA94X9ApccRCVHBeLHmksg6h3sxNg5vS7y8A7REuqRHEEC3hzL5YbCZfc7H1",
  "key16": "A7i8Dqg7CcRNZ38ctkwzajjY8gbthzUtmQdz1fucvNPHEmCnWi9tQguFtgUWz3NrzADevHdX9xf9hepHyvgWB82",
  "key17": "3u1uxm4cr3Di4NGGNuxCHvvQVS2gdSqhDZbfeuakNdourg9A3rtHWjVbGjSjvFTuGpu5uaMjUKrX3UdFExXDoHJx",
  "key18": "3yf1TEFwTBDXVBPH8qB16CLFxzicHX3HEtepNwbMucqJXstvVMYwRhC7hqgXfrd6u4GgieZTKT9f4gh18o7mAQp1",
  "key19": "4gqBdGq2E13QL4VTWuidNfPt98wixTFMcsUjUJgUocBTa8vr8UscR2Wop9LkiajugcaHz9NAovHmnaL8PbAoH7pf",
  "key20": "4SgKpVAkvk5MJTWakcdrGrWdPymgAVhisXcdTQBZu1sdAciN2eBHuKeyEEH1njahbUTKHPGADEwjoLXfZjRSBjYr",
  "key21": "4A448LzKKUwzxyJgWkSWYBXyTg77LNZvVYx1benS4VKv8VSGX3n1mWPfYitqCYvqkHvKWKuByFyCGufZWgkr7wGn",
  "key22": "5c17cEsXSYk6jiVsGcsX6Fpe25Zj3mVn4EJB74ZHMMqhg8gyjQn76H6GGCxoq9DWpHbdp56mH6J26n5U4R9uQoH8",
  "key23": "3sLftAFwfn1C4ANSPR3XUTEadk1n8g63sb7keqF7gZz4REZuBbRLn6qMh1kMCuDsLmVPVUnsxQypEYJTDbZxMPoz",
  "key24": "DcqfgHYAbj8eJuj1nBj3Ed7bbau23wcQ5fgxtmjpzKFvUGjcgRZdCWrrkhTpQFYQxEJFnsbixGhC2StK4RkYFL5",
  "key25": "2ddZ1nS6bskNxrdFbf5EfPr9mkrCWDqSo2FiMQ7dibDmoffEv4bj6BshztUi7M66XfmM1FKWRkzyhvR3xnNTDopv"
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
