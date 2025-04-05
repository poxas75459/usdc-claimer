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
    "45YWxWtJtAGL9UZQ827hHRMUeevFVr5rhneyvUoqmXMe86mzoZkYthZHovwntvNEiCRnAcjx2Ax4QEC1oz36aypb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4p7ybRWkxRxtutzNfgD36wkUb7qi2jM9T4QVFDqNxmA3NzJzr44F3QDBWJVhgjJpA7UvdZMPWuXmjkDP3WPBnohC",
  "key1": "3wUX9cXS3ja4nW68nhHECxDiUr8DERqwoiGQAdxujqYom5iEAgaVCmiZdJZsSMdbGBrNzkDmRntw8rHs5oVS6XFU",
  "key2": "3g8DYC1U3Rebv3qKHTqGG1W3EJcGMFgZVYLk3Ppw8FBLNcsEzY83SLxCvm1jVmCYTd3S1Cmjxd9Jdiy3XuYr5ygq",
  "key3": "4oXmTAxZBc2LrQVvHrPfFPtUbD5A88Z2sUzL48oEFpypdPBEY4PUnr8DJTv98BuCoVDsWiKd58GHWqYADhfFR4oR",
  "key4": "3JMPdwtbTKBY3cWuwXAjVVA2DcTBrW3dpx8E1jnF8Kw2M8x8aUyPzpa19dyDQ7UB4AeY8tpLPoC2zLhBVbFmyaYi",
  "key5": "3U1adW3Ppbn22aAhXvLJrWN4QJo72dmw2Q1cZ2RuCHRBfgeJxgVyLCyq9BCM6MRph3aEVvoJ5ooX2T7xuK7Er4Bb",
  "key6": "4C6dwbxzzxVBY4Nafhffm7p9qr1e1HQBrQiyhcsRpWwFS7uhYwBPQEB25CqR4AwyQ4aUEHEvjiPhQUgNKbBoxGae",
  "key7": "1uF3ahqjJPGQk2sRUX2tKUwAZ5auqX6QmLf5Zh7NT91Z6fTo1AvvxAJcvJqtX7r4p7FwH8xKmD7eFF1keVpJEpF",
  "key8": "Y3NKBzF1dsJ9bVNRjm1gRq6HDLYko1gmReX1s18yifNyBMGfKer6zfe4RzRryAHfYuNUv7q4bZz7Knjucb1v1Mf",
  "key9": "58XvvUEK5cqjWb1NJnS1DfTX5LUCnB4SmquPh943y9jc3HmWEAPzazdY5NnWaY5GL1Hdso7NCbLZ61wTPEDjMiJG",
  "key10": "3zCbvGUw2zWQTc2BNVnvTA2W5fRvMnvjt2TAqtPLG4SsG7uchA956Y4NSTY5ykguekpsB2SkNAvSwagkiTBf2JCG",
  "key11": "gBRa3ci53pFsJUwoP6qYdfwQerBVU73xscyuGnXEAjX5hMAJnXF1TnRMbtnGxoP3rhsGZFjCkv9jK8MTpWqvKaR",
  "key12": "FPrZQ9iwKqWLuPGbnvqYqumxDZDPBHouKPWbp2UvUqcHQtdLt2PZahMdGJwhS12aBDpbPrhJZgPH4aCSuSMnPET",
  "key13": "56dgtBjXGF7AMKyBZztgPdiUiJM1MYcsLYKEkY7AdmnioWAS6KgdesoVE4SihjSzM4ZZPqKBp1cgXWHG314gyoUS",
  "key14": "4CpSTvA51AhA62ggjYP5VhveMtYZVRaNS2M7AzBKjYuMYUAM1McFfU6z2nRdYKQZ3KLcihpiGpzcdKCXbUU1pchP",
  "key15": "5MNTyAUHXF14GkzuVdJnssN2EmiRPZfJfFWa8zSWNWxAH2pmxghszkqwXGQCecRzYCB464oM5xmWbhpr2aRFa9ws",
  "key16": "5ncs4WmrgJvmLaqf5XGSee9QkCXNiL2zLf4AEVCK9k1ZzYfTa9aGUMTdUaEzsDKpk9Daze9zVfh1LAJN2BpThGc4",
  "key17": "4XfqBegSenM7o26TrneTdNWSzVKKu6rvLaFf1qGr9Ch78RjYtETbigf9dNgjzcCWsApHFscEqaDxcqtRJA3vUn4K",
  "key18": "2AoV4o8MYwV5mrX2FTd95B4fAj7mHxZL8xUgrcwBU7aQso8jDqYSTTKRdTjAR18j1jLnopXxXTaT5eonNAgNpVKb",
  "key19": "4Au6pw6EXi9igm7yLm4M8EjdzMLYc5YFu5zURtGY67722byJhuBGfNstqc2GvWrnd5EK5dJAjNtMNWyKyXx59eXT",
  "key20": "5eN1Sjq4STm4qmaQzCnq4eTZCSoQWC6AhTAqbCafGnVm2ivxJiXVfazjVwp2ahf2LopJHpKqMzd6yvJjm9yd3k7m",
  "key21": "3otpkdT5QZrjRswpP1YdWffEb44CGPWqiTrEMWu7EnyLJQQCjjG3XaJ7H5SEwHr4pMCrSntKJE3vaw7d1JYTXctW",
  "key22": "wrNghcVSFB2xBFktFVrWJN3RLfpqBL2QQ8uT4w5G6oDCNUGgAmkCPhLX9eyyTB41MGoiKb5Ds3N3CvVbXdhHwUT",
  "key23": "4ktEhtsRrt991Sftm4hQd2YFtGLT49C3dzDZ7BxTsZ9tHjPiBuf8aZGaXAoYQc93za4FDDcTPKGJ1GpDsThmZj5p",
  "key24": "3D1fXoKXLJMjQbzgWKVqXFUdouadnah13HTY8AUWyWuKVkTe4eVgoXnyZKTCR6h3dboyVJevmLV3jazzT6DC2mUh"
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
