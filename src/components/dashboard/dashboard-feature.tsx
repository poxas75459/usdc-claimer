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
    "3URogDDgfH92kTzfQ7LUUT63HKou6vN1S4bZ5kffrxNxMeqEK82qsDx7i6CAMoxoS35GbHNo3dd36rqFVrR6CVcJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TQdnJZWsMZqsdk93FR5wWtykgXxpC3xiiDVLxZ8q31dK51Bg1ZzsAknFPye29XBwzQ7YdpJ7xx4TbVupHG5hHt4",
  "key1": "3sTZpJUwoRJTzufxMWWbAWMHFqAXxYAA7X4rc5dbmQnsHUnRL9B45DprdqvAXkuYSLNzJZSeopoP4K7ARbJqyWAm",
  "key2": "3dc4hgjQ3fJ5SYw13udb5YpRUVh8L6WpTA1WvgLPXxUkKBTYURehhDsDxUNrxD27LCggjTKvtKmC3HHtXCaFo1QP",
  "key3": "2HcSEda8xE1Jb7UvztBviuxehA6tKcvCC4iiCKV51sjG9S2YwF95n64ijE9SVMNhUCasNSYPm5TGGVi5eDJiaCYh",
  "key4": "4QqdgKtaR337sRp1mYftKWJFc1LfdLzyJUUoN2mVX7bgjT2fCCsz9H3nFubseWhLvUXJSBMpjBuhKywXsVcW2jX5",
  "key5": "2Mu4T8zCXN3aFubxHtPtcJr8EpwwrxcT7WXUYcP6zGZDo2AemKfPmgkFcgCDaHstzkZHqaQV7wF5hQYwSZcnnXYP",
  "key6": "3f74TMQr9AeCCbSP7qhLFXKCcng1tdtuja2cRdEoqDF7VtsVoMuuN65UeDKb7KRhNaBzXfcrKvuAQYPuGCWDw95t",
  "key7": "Ch7Ma1gpfx67riWzvfs7MXwmoBPEZu3szXuQJ3jNoWpqqaioZUew4TpDEGuCxDo1qYu57J5f3ximEzAz1ET47Fs",
  "key8": "2ZMzEBhJsZePYZk9zPxr9pc8KqZv3mWGj5ysTSqepqZiQFDPxVMcMkMcvozgDmj9dADss9e3UZNGyRy2f6SA7DCN",
  "key9": "332WYezbQW2YkruonnfK1rSXLWq3TJ8LFUkUawEHU5i969rAMFdfsSXa9BBaTcT4W2hJXaD1a8qnJJKgimXCmbrc",
  "key10": "2as2FupeYw4cjKJsrDsmBRs25Ekp75bk5Tp7c3aTNZdkgG8EbThbCfiHTZ3URj1s9y87HoXkFUs3iUeXvidpbkM1",
  "key11": "2qkwKQQjBaKZuq4YWCCPKrbWCPZ6yak21MFihdRMNyryEYHYTzkigNvyfn967XgNVFPQFPe61BiUHycKJgzQfMAd",
  "key12": "21E5eJFs8CuwK4nydeFTEtPY9eq6jaqiCuMSSWsZ1LGUbCoC86JQWPMJ26DWp3wswHamoWL44jnenfrNoDYSm8yu",
  "key13": "JJ1cs9fjeBKzBXcNfNAvGDk38qpA3awa2vcs97gvsUaAbkpEkyNJxdizhYN6exhR1rRidpWyD6rrd8usQ9MvNqq",
  "key14": "33oRGAoGmLnLTirKQFJs19gwQtbkYBzKhUwon38Wn7cTzGJ6v6u9AqGwNJ1iKWd7aYctKhukGXY2iKsAVi34wo49",
  "key15": "2jLBFNNpbmr8EiQqmv2UaDDWMCLhAo8Xau8Fwgnbth9DV2oJyHimrSKSz5xZwFN4bsREpX7gGrc487PeVrYpiDZx",
  "key16": "ji9VaftVTJSeJ8gXCkza2WTBHRsQMfAeUiQPn4s5dEUzajKPKTUCDCQo131Dj1XnqRKYwvTq5e27ts4q9cTprMt",
  "key17": "3LTmoWzhzAHLAcWU3B2FKh9oQsPbgPfmPL5eLGixyRPfyttXV1xKHP4NPuMaxfQBNBWTgjbgH6nNfR2GyKD4LMjk",
  "key18": "5Ddm1sn8ALaJZx3HQehC9tTv8MtPZ7uGQvnT6tW7EcGNhpPK5CFAqap3nJVfWULTnHkJzhdv9fzD9UPz1jNvLwg6",
  "key19": "3tTJ2Ww726HyghNF4c2EprLrLvEGT7xSfhh9w7zrrY6NtNfXbfDwnLXodLDDYhAf5ZRK5EDp5spRC349mVm3qmKH",
  "key20": "2B7vYwEgSqGDpok2ShtQ5tEhZ66ThFfXNDPD2QSVYekDPQq9UjbUfaqXda5iy134GMbF4HyV9SNcEt7Yxv3iCyMk",
  "key21": "4YbKXEh3Va618tm5iTwhQGJTSUWgiF9bXTdKu3sAa9dg3Ct3xK5DiRPdZYohLo6BKputsMTgdd13F1XEWaU1kQvK",
  "key22": "WV44K458cio3JvKXHhz92Qjyv3RTdg8n6oK88ywRAdxaJRtYLuthGgKjUCmmsqeqPrFmsJrmi8oFmhL3x64xcNZ",
  "key23": "2vWdTpLVZ2qPJ6RHC2wXcrCZEV2DyvUgAXK5LXWmXdDov7cf88w8mLCyaLJJSPGxVP6KgoYeH1hA8GREK3ZeEukW",
  "key24": "2DhWU2nx8578AbKUDqf4ZEkFGNdn9e737UKEQXN65VZRqNot1Jt2baQZYp1xrNMGMwTRekYvhKaTFFbCr3L2dWNh",
  "key25": "5nEQe2RUuQQRph1mo4tkjqkuNwFg6NgD9n6T5veGZuSHVRoXYyAnNU63yqh15AcV1M6eAnsaVSLhafiLeZ1vhx7G",
  "key26": "2zx8P6mD3HY7xDWNGGALZefxYQnU5JvUwFP3CY7xUEW3xND4A2h3URmwwRCqPgLVzWYMQQU1G4niaFKMsU6os3Po",
  "key27": "2NLbQ9hgdYvVfMRZnybLvyZVC6DK3uuAxVQJhjHyqHCcqBiS8THx8qrCFagSpcZEfttwbLNx1ACrufKuhcuf2cb5",
  "key28": "BFQRB9k9aw1Dpg8YsR7LUfUjvLbsZGzGBsVUM6NYjh2qKZhHqfmWVSnGMn3rCnEQmvivmKe41LzgZceeBxYtPfU"
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
