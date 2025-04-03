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
    "5xQ7xESsXu48fqkkPp2zmQZX5n9GndvvGFcjMSHGnuU9b2kwJqTv7gvNTmkHxpNyCCYShr2U4XQAarmqwd1bGQTR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zTciPDn9EWhhyS3AoLtfgkAfp5R6ywyZAXc5mumpRKBFP6axHRZHN6NZxkz8JtFbckLiPP3NYswQn3zVAEbDGbV",
  "key1": "xFdvRHYKAB8ERi9ByK7eZtMXuteUHnScktJAFxUgjo6y7N86WSfDRyeCCZnBnFL4jsbRs4u8BkqkAGC4zmyqFVQ",
  "key2": "5oDuKpcdDj1z58UP7BqCHh4C1KPh377Rhhg1TgZBaKKbi8C291vbDyHb9cWXyCcjeRHB5EpmhCgnkuur86R3oiQV",
  "key3": "3CsWWXRpuNo8q2oxViUf1mcPp2nHTZyzERXw24tjMsdnmRUKk4crBWSBYsYcWQQCSaufGYEM3f9efK9hXnNP2zrP",
  "key4": "56cpymFqAbSagFaV7ndREs3RDQbCgFv2wXnrF1pVXHTQtZZ2R6WTpYSf7da1s2eb4mqz1iBwZNKfHCtmZwtoz1V5",
  "key5": "5f3Sa8UbfZWPE9uGmGKSwq94GgqkKTcXticBMpKBqemNMhqeNM3dr9eoN483JJdQwt6rU12fXpkE1nQ1gvaPCxmj",
  "key6": "2knp9NZgJQ9tQA4rV6uaB4RnDoY3gaQdBie1hTLaJYPxQKK6nztUVBEczC1sZ88MQSdivWXvajSgKjf2mYxBzZTN",
  "key7": "4RVDbt6rBfGy6vYZ6ndX9qApYAQ2mhAtn5ciNiV9VGbgMbEvHXebQM7quurvhDFcimNwwBtqWkz9y8cLTbEc256b",
  "key8": "MhqptZYrJcXf4xd65Y8dLoq3EwrYF3XxdmrzFEDB4PfohmPLKzAVs5MUzP3n9mBzNXbGdmtTQ2agrRr4mzPyfzG",
  "key9": "37JQhzVVMdviwtSCxDGniX7A5yDfbrqJ26wCh9ks1bgt46HeKs9BoSEHiyehLRNmcoe76LXRbM7mCUQSs4qGZmw6",
  "key10": "dcRnRPVySKsyANb187mJMA7QEpGNVvaQRqoWpJ6qTiBoCWtvxfDxQJUbn3vBoM22FU9B6UX5dWD8NuqBeim8JuA",
  "key11": "4t8ZhhbA12PrK1uqAaDstmajc6Ddzn89fCnWvKUvfWhnuqFstNvV2QEAa434ySb5CQvzvPoZLehNyDpV7gGERCP3",
  "key12": "56e6LRR8AfHJY4TyL1eWdKqf33sgg5cryueQSMGdx6TtPYjLSgYpd9HBMGgV7kBCtXGx5AvymHthYkbXNVhuK9R3",
  "key13": "2Kbicu7KbfSJX48zMkXjhM18MyEyQaA5L3Gq4PvHdYQDicCZ38DmVhwJfZLS94eLGA9FrMMt7KW7xGmpLRVgdnTm",
  "key14": "1ZfQiDQe8RkGtrtLDhZSiH8n7TY8LH1jFC26Jow4kKTRMcyt3pPTLkJFzjS745Cx8dkWTM691E52Gksi6qwNjzc",
  "key15": "TuvnkKZYSNPuoBEaPCktUf3DBs684eenBXbY4KurRpePRjkwbfEXrWQrcLUvWAGK5fTTspmi1eAgGq3dnQsbBmQ",
  "key16": "2ce64j5ckC4XA1zPip4WKaZWjpd16JiL4bSLKJgj15Kjqkcxie3So7wJijDtTSjoPULvyV6WktL936Hzhf2chFqL",
  "key17": "fnUPQ2Ec8fBYy94cDgJS6nUuHs3e5K3tvAeQzwMRmzbV73UJf1jY7Ea1CXWmf3wR2XYyJVm1xWKzb6oeR9wAnmb",
  "key18": "U88YBqS6kfF1ZJjZaC3FgHwwbeLbV2vwcGpUJy8jdBnwqrLEG9MzGiT2Zew8pjAC1P4ExhukrWzQWnj2znX7zmG",
  "key19": "4CE45WGfXfA9HLEhg8rnTHZua1nKKmsFeTfyzJ3eZayU7EfgnxGzsNh2eCvXWDbq3EqYNAk38Sg2urgJEuwE5qU7",
  "key20": "5d4csPk4km2YhkgCfNmjD2sLvzk4b3KzCsfTEgqsvcPNyLZnhTEZGVRdb2n2d3MfToNDAfnPyxDTy9rHmhetkZUe",
  "key21": "2MF8zkHuPway4Y8SonZ1EHucgrQotEPr77n17tjj21eVDWXfth7Mgg3Mnw3cHX9YEkPCvs1ASRJ69fL6vpCg5mAU",
  "key22": "3LLfKSpSQLyYmhYCARN9DiZrhrg8YemVMoJEGyXVBiPL8uFGAmtxk7N6oEsuF74df6JgP5BGzN6dSj71PYdKfbW1",
  "key23": "5cJcD6pEP53q4JA4jwdTBtUrw19bowryJfNefP1iqDfsrwiuLCtjyAdx5aPpUYcjmfar68shUMQXoTa6r7U5sjnY",
  "key24": "AUFjHLgAEcnJLb6SqKk5UZVKvraW4ctGbn4VmiVnrG67gaCD6Z64dwaccM4BGMpYa364MMw88NPXCnauzhHFKpb",
  "key25": "Fpedk94Lu7wbT3QR5LgbCgEXXSVW4amvxrB1p9Bb5LRPeJsAz2QsX8QQAkrmRYs7VKvTWnX2a5c4xv49iXwoNjY",
  "key26": "3AnUbA42i8EwLpLtGzd4seG8GUHzZnNPhQcA5MPBEknRRiDGN7JEsnohMRyKjpgP3A4YGDBHrH7Yi5CDxZwdo4sb",
  "key27": "2BmrTvRFZPTvbNK9kkR9Mgy6KKmEDwrwJY5YjG8B3wBGtMmKiMahUrYSJjooz4ftJnVzKRLR4xVhRy6dwiEE7zD3",
  "key28": "5Xuw4cuXvbcj7E7rvTpD72KqPsyLbyuCb7XShn6bkygrAet4gv1GMo7bUKYchQnnknnztL5w34zVF5m5d5HiCLc2",
  "key29": "3UuwJV7Y5nMa5Dgujwn9vAj9BVHgN1xSBnXR6hE55CxJei3AHsZx8fzKcbKg55X686jFP4yYQkcLBpRFAj7DAZdJ",
  "key30": "5YoWCRUcj5HTw8MvDQCQNyJmn5j4nSHfQptECSUDgihNBKnr2ysxawsouEDJGWCa3de86EVzdrM8rFm186umuUou",
  "key31": "28hJkhZJkjQdrBye3pLM5iusVP79GGXGBELrpCY2TzyzsaUn2cdhsxB12o54cgzacmXLhwDwq3gEANFZeSqi9y2z",
  "key32": "32sm5wmbjUnGfayPC9QvCSV3zR8CSn3ZQCdDBGDk3QM8kd7HXDpWsc2niLheaa1oMSGGzZpXpLHEcfpnod7mpJ8x",
  "key33": "2Ak1BUPBDk3drvRn6oYbCUj9xG7evJuGXQ435jvyjGvpyj3MGpXxaiNePkoJVE79G3gy3w3ozPbmpJuf1tpz92nE",
  "key34": "Lk2wXd3JBKrikctfoPAkcBrCWdhAvrDRcP4qiUmtay5Fbj4tPKbdyACY1b295M5KbVRrBJG7q5MXUprJN1vdwJJ",
  "key35": "GjDAvgpiC1SqTCoTHMtR2VxAjWF5ZFrqjxUQ3yvwmxTd6tMEidyHUo2tPLVtGzUjUqzyBbVgggZA3Pm9HKa9KWd",
  "key36": "3wyivi1KyRYwFdjcxqSSeMskPQgKCcTeMrMq297Eh9sfk9wXKWLy6JP2PGTF64PiEn9cXsy2CihgZszsaNG5NoMw",
  "key37": "2Zs5TdQqeHj85CEEegJnqpmsiyy8hN2QX5KStC5G7QsF4gyWMaCLhXkq5cLR5hQfthxoeDeHnHJ7Mr88wmSmsY6b",
  "key38": "4tNSJPK6WhhdWQQc3YosGm916eE4UL5TBdGjKi9o4Vf5WSnwt3beTh5Ffe6k94uDi5th9qXravAznS9JooYHCP8o"
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
