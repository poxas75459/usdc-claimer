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
    "2ru3y3DkUaAUeVDg8qRqLuYpKe26xPewmRvYwbSTrxckjYcq5vcMuJos1NepkCpRSNW2UaWe8YrB2dgLsMZVnx5r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66c6hr9cvKQMvNvkBxAXYqx8spCWWCYRRpxp9SrLFpes65TjLz6N1NgvpxTtQiq2iSqQcMdsm1xNSJvN3dbjnS8H",
  "key1": "4G1wBmZweXbU7efTLn7mhE6QCFaZFK5iLwayEVuiXxgJ4Krp7QqsHLCK43BHEfV39bti9pCLv3aZr61HSWqSFugB",
  "key2": "EWHvEVLaL5BeLaNjdpZDBruPwxYWenSKQYkytzZz8dFM4UkwvKohoKLWLJmuNtJd74b1LQKAyVhEcrQWwv6UMHC",
  "key3": "4ZDMebg5K7XD8HUgaA9ihfgsAiPmufzyzPFFWEVfnKBCoKPRB9AGHnbDEp4E3EyCf7bFLsfJPmJRNCbPEyJbU4EE",
  "key4": "4AkS8m9aC3c6fUxaVRnwbLgFjs3CjxzSdmXPkDuPXJG8fVxADkDr3GCvC4a4nU44AJC7zgfw4f9yRCoddSTdBXry",
  "key5": "4hyg6tPh97ec2omoNHKKF16G67WFvQhBBg4gWfKHCVfURz2q9QKQvDRQQULNBL2fpXymMcSd5pRw8eNMLpdEiwud",
  "key6": "5XCxx6mVCQuPRnPiefPcS5VMnL9qfY9YLtTCncn34DEceCFcr82ku3PthMSMEJpmi1fycJH1jXFHUkuzDgaJPzPu",
  "key7": "TWy7eUqkCbgUGhA6dR1qwyyL3EWWEc887JWboU7ucKNNzmiagERSrXviF2hy8wxDMc6aGCNjzywGZdc18qWaLfx",
  "key8": "4Y9vtMQYgccsLD9uv4BuxtDQT4RyyFwpRqF6HL4SSfjiNx9H2kDmfxtMjG8j4bVY5cVof3czC27fy3t3hoASXjz2",
  "key9": "HFLZ5FDhvoM49YxH2dRkijLxUBqrbvMGopT7imurGxQuj537EYKchiyfiS8jzVoCyEAhih7K4tQk3oKRCdn3TCt",
  "key10": "5g5RBt297GY4gsapY1bhxAjokPS3cTsTRQrMPsBz4Xo63ssdGCYRdJqbbSRVTyj5atYJTHVy3Eh94WNdSw9ziKpk",
  "key11": "128ipxPvAtKxW7MRsFzyvARrAosRx5i3jhDoZgN1Lspmg5kqXJTZAytW1wd35Bo1HK3xhgESBHq8jYAmFFWi64tW",
  "key12": "5pSNPqLg13Hzz22yNQhquJA4Y3N5kC88GRjg187jMefKurHXYgECZUic5uzv3ppuGbHgwmV71EdPkVdLYonWdcnh",
  "key13": "5aTc6nnYCTnQoVFpig7hEKC4SDStSS1XxdS8Te7UwNbWH2n5j3AMkruBzLt1SJkE5DCcsANEL372SkHp1mnGqd4Y",
  "key14": "4DzwGScXuEnoAjRTBd988ai8pgNq6fo6twco4FmJvuuCBp4ADUxc4YMk7B92Djh7NXjk5JeqM4NYswuid7BXNtnt",
  "key15": "3iKBTr2UVpwJ65WFEgbUqTihgeAnCPoqtWk5k7ZfVzKYaHuMWTz8GBNupMTbAH9G9H67K4nQ9UJxoQc6fqfLkeeL",
  "key16": "4ot4LAAYDLo6dHBnVtpd9o12tumoqS8EKj8vBmoTsMY2vxaCfwkgkxoH7UyE4z2aBiXkSjhq1RxKgCYivmCZ5z2K",
  "key17": "23PCVi7jVy7WLVE8UF9r6WoVc7im7SRYa2kzGhTpktMKEB4HoC326zKuCkaGXMFcwFqhwvh91H8RnwaKpZ7i8TQv",
  "key18": "Szt3wqseeVv7jhUxm3jfpjUWHwvtdGDk3REsr3fxbJmmCjLen8AibGQNXErCwUM29UEDcs7jXMXoFxBaFzshwo4",
  "key19": "5fnwYfwEhWVqnJYJ3zwwUH8TJoi7waa7ohSRDiBDXcHotHbQW5AqNHBrQSoLgmwk9KmnozMtZADyzWG85ZVJ9YsE",
  "key20": "3e4QG7WbHxVbGiEFrVnQYavta8wN574T9gy4myhRKJUJWrtG96UvWNuxweJQEcJq2YNRPjCY24RY9vVsjRPvFmn9",
  "key21": "2WLCceGd7uPinpLvGLAJhm3mqWzAVGEDVmNxT18MjqEXjMiYad81fVFfbSAp7humpt9TZqRy7cDUTtViQSnC9qAU",
  "key22": "4oTU5VbwBMpjRQqrnvr7sUmft5FMXuz5MTmMaBdf3CCKNRzmRBDqDtrwuyLuxhsLsbGGegtqHoMikiEqsSKQkSTR",
  "key23": "4vD38u9P9nJZE2xkY1vm2brgRE5Qch4SiLYUtEzKjXtdFT4jVrpBWrhNyz94Wwc8SQqTy1eTAJsekNxJ7jSXHKPX",
  "key24": "4qUcLkL7EMv2zD3wjt6TXn9AXC6MzZdwFBwifC5u1x4d2rHVDY3tuDPfRHZSZgN2hjegUyZRxFBR4ZYaBmQztFoR",
  "key25": "2PFP3t8Hv1mBAYkmP4mWVV6FTMTBmq2Ncs9vHLb2oueVrnfiwzZPcCQozLVLhohcWZ3gRXZReopoRYpHnEiJsXEP",
  "key26": "2mEHPDKtYv9JzUTjYzNYgZZ7orNFnBcBTNBUdiTSLwiHrFiPvw7Qf6PdWR6PockcPAyNtn2n2SRnUEBjdXhmqmN1",
  "key27": "3egWEG4HQzSh4CDZ7LeNRz9Hn8BU4WwXgTPLqYiswXYSSQPmSgAb9ozhZN1i6ss4tev1rRRDv1RrtEJcMG82TRKe",
  "key28": "5tGGeWAH4Yb4mSMU2XUZU5a3gKwunHxqxHoupz8ywanPgfhJ1kBxnjkYdwkfeZ5TWFiCNzYHX9mMX3yitCcpyw6F",
  "key29": "4afdXTV1eE19SQx53HpKJZCuKwzfbrk8BzE4sddpQS8xt1N7RS4a3twqfz8U3jAXM7XSZPsXqHamKLxp7oHKHGf2",
  "key30": "5BuqFQKc6WBcPhPn21fPtTPegoDZEgHs3ViHaYRjEMeTwbTK6Ut6Hud73vwUeAkSm8TBoFRjSPxJ7gqp42FdZTDz",
  "key31": "3RPdNH1qcor3Adaor6SDs1hfButQyQLSr6YkFhRK3rGU11FmEGAhmRKDAWbie5uXYmgxdh4WG5wXZv5nb5SbSWzo",
  "key32": "qRJi1FmQS3spAbhz5Nb4JYMDo7wdLqkQJ87SU6z34iQyYjDJ8PqN1kTB342wuAopSsj8xMDwKyNKghCudSxJdf9",
  "key33": "62EzmfbF7N8mTNoC4rVUF2jVAtPKR24My7GrfEmp2CbmJdAMUc3Buuxd8Swr4r6CfYZa8Rs2tV5nfgmpxPxaG18x"
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
