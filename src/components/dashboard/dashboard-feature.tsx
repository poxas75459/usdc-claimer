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
    "5sp5i4jayMppRtm2X3rYLfEuhvTB6ybyojvnKHdtBk9hsDPk4iQT3HtuWGoFVevjRVTPZ2vSaGWoUavVUDYg2cq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QFwekNT6nBjXEGgcMXoBQrnwAK6UN1Dx8aCr2kVY3rsxmERyoFdnTRX6r4VREonwHDC6qbKk6CoLMkBHRXGkP5y",
  "key1": "2iUjcKAVVaZbkNp8QJVTgp5XNydT6pfW9Rjq7uCnN7pPc3wc3bjp2fVZia1S85ZYybpbTnMcoTMuTL4Gp627KYwa",
  "key2": "3gDb3G5mecTV3PhMq2RUCGMc5Gg6ZCJKDJRMmd2TfzBsXrQCtCJ4HrshLWQ4Jmouew4ExAuPNV3tDp3VSa33ibAF",
  "key3": "4N3gE76hv4D6UQSKkZWRu1mTHrYbVzWYVjpFM6HumABfx6YAsrgzmgQXkVgiP6ZjozDE18fVsciBcY7UZsW1D961",
  "key4": "5eocNnorzDDumP1EFMK9ncHWduhREUaqWURxjxm2NdWiVQAJVanheEgQw7Cfj7Zgj3VLvfHZYKsMwt4DYdKmY59f",
  "key5": "3inuax7rCNgngjBoKzryrV2FyKqo1wViDQKBVizwU16mTbPnDCe8W4UsQxVKaz3fn8jz6y3KT6nSV35sxqGb6mHZ",
  "key6": "2Tv3s1G6TzsbWk3dK2Ao6aviYHRmc3EFugrT55ek5Cdfbhsz2chUddzBDynZ1QYoTYTUuqixEbC5sdv78Qh6hDdN",
  "key7": "5ri8PUi3SZwq7DaewQ4vwrLwCgKFCVJo6UeqkmWFB9wPbKpx6u1stPhvC4wEyb4XAURgD9ttrAyp5P3E2WHGDjPw",
  "key8": "3cDmJsbuda2RFqc3y2NVWvDsoauZ37uPy5QqB8akBQ5JRPr3r7hPFKHBLzqbDJM5PfLA5t8GXEqZEnH2KU5SMG8t",
  "key9": "65DQoT46dUyMJZr4zwpza94PrQvBhk7FhrzrFgKEtYg6s11dA1HegW3EKyEAYZ2gff8Z5ohMYeaYqm1oZJ41r5m6",
  "key10": "29LphgtK1KeH7YwKtjKigkgV9iu2yvzHkexSrPRgSGaKvof8cSHgXSwtiTsEzsVjJv6DbsqQeskU8DGE1wZTxXyd",
  "key11": "3Vbc6Q6ysvpUR3wETnvu44AuGGHYGzXLvuqZEbyjDkcFwRKJdzxCdZSugCsjmdpNR5PAtbu5WnXrCtdADnhinGzp",
  "key12": "2B83So1cQxikhxXgyvsKKVnwocZuxBc1khbVzCKQ8PFifcdTEyrsPrdCcKmxLvHi2wR9jtyitETQ6Q1623WVujdT",
  "key13": "5H2sPVHUmPPjczwiGtjwHj47PcLKM2qsLjcusvAUt8qdGp5rtz3yLwDZ9RktWn79Bt9DwLRupvReFfRxM5xsmDyq",
  "key14": "5hxqUWr6Mfx2QiRciVaGRru3wwv575eugLcJ43FmBqe42izFTyU6karUDkBjqCP2rWjxUcbdGY1XdQQA6yuZLgZd",
  "key15": "2SuX7vRXV4fKz92uiNUB8pUGMe91oNQkhwBPqgDpkoA52scGvAfXff6ocwv64Y15gJ8TQUnZLkeiPTjfuNxjj5jZ",
  "key16": "KcXxKwCZJQCNo65X5HrHj4pHYstNEnDxv5RzpTQMVs2n4DSFE8363ruAk8qqnTUDtyUhmQLWj5RG8agsd2EnyeS",
  "key17": "3Bqj5D6xBrMNLp8Qk5rFAXWD4G9QMZh7FZfQgMAyGskXuVmr32xaivGb8GcEnwQtTgwX2gDvjrjFW6AZHJofYNs1",
  "key18": "5gdVZMJWYVXX8UwZD2AcGQd3a7cGCm2v6nxLuDNk5WVwufxkccwSeuA98JbRa2wCWfcd1VLdFbsoQpRepAkxZTcm",
  "key19": "3gSkyXQ7QwdFisGUfAqGmSa3to85KDo5vR31vJoCKQWWnhgSRRQCngVNX8jZmZ5gE83xoesj8WB7D3NKg1hsk4B7",
  "key20": "5bgbFQNT1V1g2aMpzBZAwm6z5U4RjRTNTPAk7ZskeC2eCVpeQiHR4Wzc5ER37KQgPd9dqYoQUWgnemrpXm23xopj",
  "key21": "5A9v6yFEEVf17QR1ty237hiM3ZfRyXSppPj4sdYnPSxovZgLtBsNiDe1jMLTh6Da8S6Grcwhujgwi1TbY7NyMejB",
  "key22": "2YT4sCeSuwPjkJhhqdwhyqbyhTnMUx24hLgoayJPMT1uNGFTtpyMHWtBncA5EpbFhXrA7HBjdkBzZjiCAfGSWD6D",
  "key23": "2YHFsYkfVZusRYrditPD1tHGb9oJPrgDpEvvP4RFktH46pfG9AQ4a1o8cWQ28nU9KpZATf5MRxRD39eVwjvGMrrf",
  "key24": "5tXvzDmPJgLJgs9QYHxM4obSBnfD8mPFqWKT6fTfC8MdCgW62mHBHL58EHFekYihAwVDE6q9zPEBzybmBRE6fXkx",
  "key25": "2CLtJ86uQkfWh9GYDSDT2wtadFbC31V1xWyeP1dP6UWrgYQmsUo2SfyzisyxbVH5D7urzAhrNuboWgdRKRTvz7mY"
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
