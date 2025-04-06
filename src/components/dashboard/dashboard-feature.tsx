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
    "wTmVdHnKdrbChGunEVKFXkrnykEJUMoVpvoViyhbvrYc7UPDWDszK8r1Ht5WCH6Q8iRVNCiJFSrYPMqw5c7ibdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BtnTurzJxoWYXCQw5rLCET3itPKhpxkBvGJ9AJSrmj1EFU5iEpNXGjes1Y4rviBVp35TB9Kyy3m7zb9dAL5v61C",
  "key1": "5WEp4Z4FqXsSLvvKyRozs4iMPo72Q97WMEKpx9rkpmeG23htMnk4Qk8FkfPFMEHPph3rYdn3C7B9by9qWwoV4Vuf",
  "key2": "4m8tXHnqJe6rQCcprWLoFPJu2cHNvLcaGVzzyZAfcRKaEh3L5ZXtv4aB59FLwUceNoXjJv9eyrRUyxrLRhBY6et8",
  "key3": "41LWvJn2WTa8BLVvoA7tqzsjCZMMQ5XF2YCFYps9C5TEoNyuBxLLqhiSMGb6DUugU9kfhPyAyyWxriRv4PFqSUc9",
  "key4": "4SzFqGwCgEcjEc67n5Lc3Vr94sjvZ9XWf8HtK12QGfBAjfMidoVrQGcQubSmgDW3QQYndTrqyM7ZoBorh2eeE55G",
  "key5": "5sPFSTtBJemSjUxsM85qSHBQKEGWHocHpsrfXmfjG46LbzUV58sEBpxvRFxNsPu6SSyq3dWPAuGS9sTHypZM3xsF",
  "key6": "2cW3hEgZg8LTrEk4pLwH5oPGdWYxATXkhukKAvG4wJR39mtP3YTXQ9rUS4ddoC4VU3csUhMpw5ogJEP3FRmTxs31",
  "key7": "2K5YpJkATRj7PeK2ANjHKydjS5b8eynNG7xUBc8FDywakjp78eS23maCngmrTYhfppttQ2aoEhmBmEYcHN6qn2Y1",
  "key8": "4XLvVKiZz1Mgnq9xRzARQwDwUADY9U4HzwK9TL812jw9RSuQqjXZrop3zDRqqPMm3SSkRBdAERUCVN7heHm8G3xY",
  "key9": "3dRGQPBF1A3bRrwkVFqtKDmZ8eh3ZaZKdsKmn7QpLSXzJNdUPWoh1DE9FiA7aPovVc48dCQgZDPr9mC8H4boeMcr",
  "key10": "3zFc8AmtXMKN9U5Uw2MnfLPRd11Z4wDr4vinLXJWXvDDQzxUfDA4uwvKi3ezPMohy6VWXq7eM9SE5YpDxM4opuNk",
  "key11": "5Q34ZDXDXkjapjXhkwcSvBScqMKZgxsWjfYmerATRbi3Jchpng3mnWsVs6Xf1zrNvjPhPCB9RnmuepgCPfq8gyoV",
  "key12": "JWq9nnJ3NPadzNLRZk1a4S3GFW9nTSB4mXXNbUFfaqBdhDK7wtNhCWGu4XbTF69q78makepXwhzLzKhhKdH6chU",
  "key13": "3Nbtkwqu51opwAKgsorBcjHoR9Wp2QFx9j5ddtMwwHPdqMTs5mm8hgQBz189ymeTPFLXPi1LzhVLmaNNr7NZgxRp",
  "key14": "43oEr9GNtqH5MxoUnZJWz18b8WzRkP2aNdRGsr5Z8LoptaezSTuYLnzAWjzMuAuQg1BzHVNhYqGV6rUMdiP2cAD9",
  "key15": "2rTnF98qPyjX2tRhvPSBDGbaychsQKCA1staDMHM4eQzczZ69T2MiG9zvZjZuVUSc3vkoNxeBJG3R2vF2121uAEp",
  "key16": "2EYKMbcgxcqMisqWBPXeMmMdsu3VPkH3oy8c3QUdypSFrhCa8kSneY2SqXjZWNdrgHVWGupfKbAFQmLzR26RRbV1",
  "key17": "7pNytATuNSqdHqsWxaw2C9GP1zqKDEKZLLbjH6C3WP7UVnhYxHPMq9oJ91K2qxJwY6GDsCym1ftB9JkMNj79NtA",
  "key18": "4T1Amu3oghUFzkpPakg4Je7msMUroEAAodJ5kZJwT6QrUY4DqkC7Y8Y2VqFnBvwtQ12RtiJrqXiXUM31XJLnsS3i",
  "key19": "24wawXJn7qw4MTpmZ58AspwtUHe1jT6DNSZ9axy81ZvPcHeUZMJjQeXzCJ5zW4eZNgSQvcXvAAxsv9fW8KMd6fHn",
  "key20": "2qtdQoijgbcPvGCPiCT5B8NWaVc5Ktsb9PdxNqNNA4SnDx5RKFuHPjFqiioCqTytLaMU3GcURgzY687s3mEGnnje",
  "key21": "37fQSCHGr6wAGJSataUDnDE4Ca8bYRuKosEbxhzTqv1ASM4uwT1coddKGL8n8rhz912nXAYJX5f9FrZDuV2phUSG",
  "key22": "3dFAcQKyxcWrxzzk28Ea2yzdh4kq8TfSWZkEaJ9Cun35yYxd8nevhEhx6SX9JsakKAcjfXihb74jU7uFgY9fL64z",
  "key23": "44sDMMRxUDXDAZ31qQCNm95gem8Zjcwb6y4mfA1upL6kABf4nzKjrj87EZAXsXQBKi4oAUuQGNukcA2EWDzoVKwF",
  "key24": "3MNteMY1L2mYSaPmYHXk2a4bt5vtohJPd8L4jDab5F2N2iG1x1chkQmWeb2UAfkSFtmzXspjGjmTN7H32cfPDv2m",
  "key25": "Updx7QLcDfWXn1sNDtxcZCZf7KR7F6pK3xWfwFUqdriUvGhxk2gPrYeguJWNfycVZvfjkgGAvQCgAp8SbEFztAW",
  "key26": "3pe4raaeEXCejxmASKunjNgSXJgosxLPuQuSitmuksKRkQiXKkgF9UH2ENEwwQyttrZC63CjRih5aWsHxkfSfJoj",
  "key27": "2Ch9QR5yqoPrRo9W7kd6RQ6Kg4tfj4dyzkX6k9Sn6MvESxbujiVtAY4JVZRetZy6r2Jco82FP2Y1u4dHFTxAKoyU",
  "key28": "2v24W3yLP3RksmN9pfNeEy28RrJfZSudsyGZJEPypAuTDjr6TxAdyjHcr3PJTdaYw1bAJzaiXuXtis8LpfQAHk4b",
  "key29": "4H5YhhSrvedheh9ZUmc8WR5C21kTWsSMYab9eRPUVNPyHMsj1Gn3NYTbCEECwhQY5RLKbmKagY2HDtX4Aa9WGb9r",
  "key30": "33v9YAE1oSk6EknW4pBjEUQez1mbbZJGp75iPjF3V2J4vMhcUEs6bdQmHsXsRxVzcNuTWaACZhZ6Zc4JcK8Ria7J",
  "key31": "5yEN1JTB3GMn7FVBVJRNRZfZ3qR1Z2KnM6vG3t8Q3bxD8ejec67RG4wTXFgCeYxcybA6yEhxfnTsoBoEmEfm1DmP"
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
