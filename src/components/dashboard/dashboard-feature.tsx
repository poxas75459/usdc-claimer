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
    "3MyLvqHjLE6BsYonhoGxERcuCAen3SG3coMbezPXkFfM5o1Ve7HHr7jWMpgepTN1cHPkTiDFxPXuLL1L1GaE41Fw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f6UwDMUTSzZ9dyYvEDPFGSvw2eruLH4gVPQCjkDDokJKCHCGdgSfpChoNwcDwFZ1YdJfg2pGGZ2jVLzMxgLvYZs",
  "key1": "2F1f8QbthGBPApUs6odEkENMuTjZPov8jxVsVSzbo6SSF8LQdUFkmHS398LZGnKUqjtDq43GuLfeSPve45d1wmEm",
  "key2": "2N46aefNCv9TFhH61F8c3EuotcainxoVMKHYW94Wzt4z7gqPeW41qKuxykNCY6RyciKUJWxp7Gx92KsXCktpZwpK",
  "key3": "5KXNz9MuiTKwYPY3mffF4wA9y5Mh3PstKtWVEVs9zXF2QmKvbvzYS1cYXDbVk8agPb9VxctgCwpmE1vUzzVMZH1D",
  "key4": "52X9fcwwVS5rrQJDbu9Y3JLBvEwBqK8paw7CTGkSCPRjLFNAMGE5DDzbshtxt5wYTCXBZqrqkNcLMrpec1eJJYUo",
  "key5": "5ppxApyXpY6qRngzEzEC8v8BzVWctjzqUJ5bfXkRhT93QFYYNsjFUNdVMmibhkcCq139QYWm7FmikJiB7TbYPsDo",
  "key6": "3W7YZCviEPo52nafXK1R7rgNFZoxJqxS3rLK8SyCnNCZ5JiWMfgW7qjaBhp4DxyFDLmiGFcGUdhkHEiAVD7fQJpF",
  "key7": "5uQ81Bt8ugQ9Pafnos1vKzJBjfvhfRuEPbmjAs2D1ewWUuJ9S7hM2GmHGepwjaVCP7MjhaQKjyTvitHfcf5wLCYX",
  "key8": "2Rop3q2yrsbQjVAWWneCvTsv1HHJwaNTDkktNjqdNZshJFg9NogPq11J8e2jbSGdqtCavPgv5Dr64PGXZ5qdkrEs",
  "key9": "63ixPqDFogdmr7EXrrpvfURsy1oawASgWNnnZJEiLvx9WzhGk9Yd3tYFKqJdKmt1mXfSQ3GGoJcP26FTCZthoQR5",
  "key10": "5ctRdh9k58dA4eUPGgxys6SqntutXZ6x2zYx2Gvne8RpXwqfQDCvDyVaSK8VL7x531J7siJfqTHDqEG433Mbtgq3",
  "key11": "3jpY2zTBFefWTGTXTSPeFYZVoEiXuaFqd9U9hVHRChNQe6EAGeFyFFWN9ZoaYx4kGzEAqLTfF7C1Jy6XCcr9S6cE",
  "key12": "k1xP1aRtR7VRh1VU1Fv7dfgiitG43Z9F56KTRNNfkH8U9fZMQXzWFQkiBq1NnfbAsdTwLTgVgZvLMRa9ChtujjT",
  "key13": "6366TeExViK4WJDCiSdvWvgrDyZHpHYvqoMWeEAjnLi6spBppGgWcRNvM7TKQS164pfkVb31rQhK6ShK3gpsiFeR",
  "key14": "4M2YJcJLz7mXQCDsgyP2Bh1JuGhhWy7uPUUCWURrRzCeizHCXgu4SykZQTsUM8MsdQDQ1BSEAFEBKnG2zbFGxFAw",
  "key15": "4XyYZHYb8P87YH2GpXsGUf8fc9YyDgFLpo54xUJPfmE3dkcdYB9gHRoX17LBqg6zejCofNpmhi8X6z4BT8HFfP2W",
  "key16": "2Npg6iE3cKpVGRyVdg2ucV5Ymq7EAYG55eNbjxBiRHaKqMgZfkQjtaj8wvr9EbMLQSf8xXze4RfKvqkacUWx5eLv",
  "key17": "351rEGpio5ougzZPw9jU6iQ3bkH4Z8hzkrrFJJ1vUfquYTM8gJDGMrxV6yD5Y1UTUok6tFirgPEj1yKzuzme1Deg",
  "key18": "D2rKZ8D3rbDESYz56taioctH6AnG2p84aiCihmweaKtBpEBFemn75fVG5nunrhNDzD8Uo9SGP7pZTf4Ty3HbVvk",
  "key19": "EwDZABE61jwwnHLFMi6KW2NqANEiSzd5zVhXAA1kGgzrkwE3MyeToh2HKtzUhUHZem5HFKNbsWmAKmibU44V3fg",
  "key20": "4qdxdx1v21RJmR4pwfMVqr95aoyJhojTkqvx42oHRKHV2F4rFEuwKQoU6VBS5ZCajs4Xh2JyWxDGMdksigg3uFfr",
  "key21": "51PBm4x5BSrHPepk6f6bgfF87qZPttyqy3ou6fM9UwZZjRnVyywUMNDrMYE5UUiGrkA4CCNAWAvqEHEBmhARgqSh",
  "key22": "2TCHPhMdEeu5RCS95YoRjNxXq3oAmAAM6y4yfz36q3gLpsPD9umRhGuWjNuoBkPqWNw8iN1pWgxk4KPCouBiREFM",
  "key23": "26kDRXtsA7CnsAQJxewjx5jUMfYqU5u14oy7xZ1gJLUdsn6DNmXyXQYsouZzY7CMcR5ru2Lvuvp8DLDWzp7zYjnj",
  "key24": "5iJLygyGKgGfLL8Wss213ZzSELQR6FwQWiqdcTGzpS7ccPJh1jXxB916LNFmQ2yU6DVA2r82EjmUW8kbbACXKVy2",
  "key25": "271yZWtFSJvRzReSWT4XWQoRDsf6qUUF9UeL6XiiHT8Zem2NZmREDxHJEKzASo188sQNUiCKfqjw2i4wELzmmeVK",
  "key26": "3KrMdVGYW35bCMM9WLyEcjxuBtzyos8C4HPWzLbomU3vKh9kSXHYdB6G9JPPzQiL6RqrGhFHFQhg6Q2uLo9PPLY6",
  "key27": "3xXZXQXaeTTgJhRDKYW7ajE7EYXYTrmx9GZksTwmL66wV5x4yTQHLoS85Jdhuki7tsiZNiCXdRt8MjrKQ3PYhGZv",
  "key28": "hD34frmN3z5KqhLfjZ9jsziakpkV8owHKi65WGPPbFDkmZNfDQ1iaTKT5KnnoA2FHMibGnCmBna3KNh3i7bp85t",
  "key29": "2Y2uGZWhgWETSsK1PwrzMEP89F3XYHZVPPs9LCCaTbDfRNqjng6bz5AuexUZLBAxMuBMBpr4vm9Uv64AEPWgDLnK",
  "key30": "4XuF5zHLrN1Gr48vZM7qj9M7u4tHqcfFTz7Jh4nrLPjgJ9xQ3cJBJ23T1LvT7YG54wVzwufTpKG7JBy1MsddtFp9"
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
