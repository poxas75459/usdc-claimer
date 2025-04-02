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
    "5niMhae9dDxg1nuyoLWK57Q21jCvLbWnpvWiZ7DxokTkQCiViSjxTf9paYCVixHrGmz6eborx5xxetqLyPDJpXCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37UgDqizs6UnLXVUHAPq8Fy3pbCUohh91WX6QVDcTDR2Ui7vdPTkrNrfciBej9ji2jo8bhfFZ9mnN7bovdzU18Ba",
  "key1": "2Rs93GXUkyiHE9Fx7ykvasWw6gi4zzd9ABuf4sqjSNBGXkPrtuVEayTfVH3pdHWdsw8C9iwoHwhw1Q6S9Q3rgPVA",
  "key2": "5GVD1kxbyE5apSJTBcbPVxnv5uGGJbB44mVtVP5h8LvE3jHFYhNnwhVGPpbkwq6cEwcJbas8xxCd3Qrrcd7iEWgw",
  "key3": "3r6wcWQzcgmfzBYENCXboZ6BQcBrq9xfubT1Cio7r8n7yyJW6aFNRt3AGq9Dk5UP8A1a7gzRhh37VYguEscrcBwM",
  "key4": "2p1e8CxeTdB3EcZRnhARYhiz2xYD6VPdArEcF1iqREYhCfxZwHCMLVoxA4459hiwWBrDakChqTbLvVoZUvVg4nsi",
  "key5": "4S6Lxqrqzpw8pdkSfG4kTPiW7hCdVaVqoJxhwm1WgAx2s7NKzk1CLinKYCpC9jgoWFpqFpV9evkWHiddCTKkkuEC",
  "key6": "635JdeFMuqYm32kxeQvynrRRCmwSddegnw15dggK2F1NQyxLEUJmax9s776csQvLD3nZqyx27hHxjbYkUfEVRE5A",
  "key7": "221GafWeuw5Fzm1ifw3AiVQqoytB2oLsyvYZzVxNSQ11x6Ziwoiy95YngmTSM7pA9i2pSrgY5VsBnn3zQdFusWP8",
  "key8": "2cUu9S5kL7J2R9NU32A9Nd1TywYnYY1k2zkUvM2DzVKWJV9aiXVFL5M1F3BBDihQY7qp4kAeXHjw4hcLAdSeFy25",
  "key9": "At5LmFRCSTY8ALshaZaSESbU7wdtByAPkbkvFVjniaP72KhUZJuttWaqM6oKDm9ZWnPeCxApMF6FJs8NgSimRBy",
  "key10": "3hHG57dh6cXXqUp9FgtN6Ab2ga58ervEFzkkhjyHhe6cQmkiudPFoHw5WgmYRAgYUFeVt9bfe5sJ2GyiwArzHhCD",
  "key11": "3hjwasmHCmF2banPwDuEe26GS4aHjxcXPcdhB8CifiFfwCoa13tEteWJSB2CFtWisNn79AsHee991XiLN9MWD3Ay",
  "key12": "3GWXC5DzKNHw1Y5dc4X8gd9Bk59Brn4MosSAuToKgcSj4HB5Uoru1XacV3xbj1iDNsyvhbX9ou3dB4eK8TGvGX1V",
  "key13": "3ByCPeQUxaDr9HfG7FFDEoEhCTTbuiv7xYB2cNfhkgiDSwAnDysnY8QKqC3kCLGTweeodUFenQbsUQ7YarLCxjmi",
  "key14": "Mndhbx6Gub75r8TdCfBXuPNSx9bFBLiDzMP3CeS9uG7Ed2k24BGtFLrE2c4xYVRMNjnKotYQBKQSNYfG33zEmYu",
  "key15": "3DvqBfjKDNGXy8jhVBSs6g7vt6adHHgzZ5xxCvc3qbVNmcJumQf4FM3pzHjkbet3cuycrkBjoBRrQGgjQ9EVdcwz",
  "key16": "48TwH3RqBEcxeD3pxn45gHQnEbwPXBZseGqg4biM54S3LooLbG3uGTotpMQ5NvqNqMDyU4DNhv79kRVjNBuj1QVG",
  "key17": "39GG15YUPHusU3YSLxAabb39FwpfF11phGTYkd4evhb4TsLa3v9JGbu2XUznBk2VyEwnQXuyq73UgrZyUYrMcoNg",
  "key18": "iwih2urn2YDhs4DfBAtN9wFkVBN5yPTR5tRfntmj89oMvHnJc8shN2e4d2MAshdhXwxy8PkLNQpkF86hkKyeGVn",
  "key19": "3MFAtLCoDNJQBRztxE7T9u5aVnEJT21mJ8E26f2HzGfrrjyX5fRgQYj3DirkgdfcB8nTAorkg1jXKcvitsAjEqwL",
  "key20": "2geiKbKwgprT33HtaR37NMQG3h5nd9JdikPFyxRxL3C6fBcFmUA7Y8bA3zYFhVEd3GG2o2W6mHm67fDQfZWVbwx8",
  "key21": "2F4gehFSEGdYnG87cphk8MrLhTwGA2zCStj857bymyz7waH185McPNYkPja31mrbkMJPAwEtacVWCsVgZHcmnM3k",
  "key22": "5Eqj3pdwwpRR3f3ne31m9po5ZgcNp1novHNQDzGqatrYUywBpE4kXyXPvrsGzCjcBz4SM7WVkXCGZi7VMy2qXi6o",
  "key23": "3fpZ5DizN5FGnzbsVE4hvFuKFQXh729zDhmdFXc2eFFmv8ibigDuV2sw8BM5gvKiAsGTaxXyjhg9Ysii8r5CnSNX",
  "key24": "sr6HGRLbi5nSY8p9CjyWTQcU8XmwuhAd3k5sX9DV1cfk9FL3sx1haDav6FFH8uE6q1NR9gTetwdu5zT9F1Z7Ahi"
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
