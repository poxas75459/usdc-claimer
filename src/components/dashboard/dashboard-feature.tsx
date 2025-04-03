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
    "44mrrPYqtSh9hb9AqwphzvGfVBS1jCwqkmJEyjGPMTKzFkz8LkeHbJ5nBXZrCiCXGpeprz81MFcXRMfNaMeKtTpE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tARmPQrBmnNnz3qPQpWouoTMmQFYmfjngHLU8ZbqhgAisjAqhDTgXDjRLsXXbiV15bUBKHXcn2kRLnTcikFHkcC",
  "key1": "4CFSWtwSghYuFnySjcA2qzsvEMzTjZrKqW14JrmeVXFjJceHzVco72LiQNu1Qc7X2x89u9WssBpr9tPSBXwKiJF",
  "key2": "22DztwgNAZTgpSBFYoAWRBAEEagf7H3s8hCkpFkgyrxdnFJbYFnnt5RXGwK6q37od5DvrrNDYuRQzZU8dUYtz3Si",
  "key3": "N4eyZcKraRpwGqtMxYewrxvwYjA57NhnTj1K8rjaXssk4efYfwsefqGVvrv7Tx56fki9U597rudpjrYwmxFLzCA",
  "key4": "3htduu4ukbDRFR8L6kcPHdmQKy7v79dsbfAavkPBCJERhQkdRniEjbsPfRjJmeLGV24ejaJbQsJA3iT99HGiWRua",
  "key5": "4Ubf6HQWd4um7aLB9VPYcHcEhJH3itX3fE2aXqgU3Qf27XFe8Phqe9s3SLhGRqtaS35MJQSKfbmh2AT9NAnjPp8g",
  "key6": "78PAYNspqqKZZY727DXFibzG6aX9rbZgNHV9GQfPMc9MizHW8mrVfeTj2NQ2Hf9Uruzi2ucfGNahHTj2qQru4MR",
  "key7": "2PtvXWJVWYRw4tZa8hLZRGUVgSRPc7WfhhJrP3kfjgVAHAsnSk1SvmFFCfViiD517KTkqFMN5dDuPP5qzE84fpaH",
  "key8": "4thxuHW7nHsA4aEFtQKrixwt6CKAJ7X2Z1gtyjX9QbCL6Q9Nqjdvih5uc4yiR57a9xM9kiJoUunYihixBMePXwo1",
  "key9": "2sybi7KKbxWMqYLQbaPW9TgeQMRXJebHkvcJ4YT1g7d32oKvGrkWcB2jfVMZ7PDNmKV6psN4s7i8cSCBpP3rNF5n",
  "key10": "h3M78wJu6zaHrDQKmSxkXo24dpMC5urx83jK6wVZoSUR5mYAySp4PamPXDUJQxBuhKAMYTabNhKqoKfhiVv6tXM",
  "key11": "2rMRs2xS8grzcJoDFpzCtp4SMDD7gxsNPB4PokaASwqBHeY9jgo7Coj6KeSeAedSZi3fHyqzm1K6UqqgyykypqbE",
  "key12": "h7oUYXPU4pYCFtAG88sUdYMZoGbu4eJBHvAhj3MH16jDJipuBr5rwMTubDymqtJoczkhwQ7oz7awTwZSK7VgegJ",
  "key13": "2YzYo2ypeCa1rqdPHQePYqhgjrXJSTfsxMBdJG5nfE8wRyZvtx25nSj4ctDuFwBbskjciNCpFMSx45DQPw6LJ481",
  "key14": "4DnRch5LJPSXAy3ty82BGXu1Ws6PacJQyCcFkYMdqaHcJfPBQyQSeKUsK1S2fSnbQ61hZbesfpqTmyfqvrMDXQcd",
  "key15": "5rdAUdtQRuN6UquUgzAFA1HS8ncXxWYz5TSihZsZDGMFL3Nx9ZfATu2AhCatSg9RD7QPNjyLZb7GYxsiegYfY9JA",
  "key16": "636Wdi8miX9nS9jY9D8qvQr8vWa8rzFNGUfNfcPtF9B4EBKVkepqFgKBLKeqAC1tTwwS2rvJ5shSBwCj5QpqpJ7K",
  "key17": "667zmzk4vACv9FFqaDQqoFDCdetpi5SE23FVoRpUAkPBnTaYjf2Fsb24KKPoLkaDGkosJvDFriGWAs1rrYKRmdUC",
  "key18": "9FvYGSnKdzap2x7LfoQgyu9QcgFEZeQAkVo7vy46XzJUf7T1Np1fgqS3sbEU5b9R8fxzKBKyWLrZj1mJzsYxM4H",
  "key19": "2C9i4A2gAy34BmofzvZSXWdWsTQfzvjRCBVmjw2GFjqBMKqv9ahegd2fjBmxKWD5T8YeKccVJpWruQdkLrYxb84t",
  "key20": "2z8pWyR718LjutX35F2dmN4aMz7hZ41GePJXsHcU75m1dVYGsCp8azBj3xcKTdtRxoBT1B1qi93gRqTLLaFi5VtZ",
  "key21": "4jQ6dpxP7Z1jmKnjAjE2XRiHXFZidY529v2SpdCeCfweEVqKWMUZJrbrhBsNfg7HX9nGy2BwYaV5NNdLS6uWDnuN",
  "key22": "5ninLBhHsEZdguLEXgY8gD2DUBEtvxKy2RF2CnPSaKBvNVZLfk9AtYhWAKYG6ybnLbYmnPbfmY6HmH9ZvtmSazsU",
  "key23": "5gH9NsqWr8PPq5cg5YVCyBQvzfDi3fjKi8ZmoSu38rQaqnREAsvhNP7CRFLAvpkmvkWmcqeXoVq8vx7tdb7r8x93",
  "key24": "6Z2PMpi1BktZKJirrieiJxxytxgW9yUZ5Ppj8VRDXunBZLdDpbjakEnnsH3NCWhQu4PcL5FenAGWxR4Xf4Pn7mH",
  "key25": "2mi8E2DDc8UsC7g2HCBMiq6i7aV3MMiNvb9UWjGjn9MnacuFfpr7pZaHsFSDWA8xp2naj8gH2pGRKmZ9BTLmZ71L",
  "key26": "5WShzww39kLi8193Dq4EWDafjkmebZb2DM7p2tnxYEJ9HjZjHJX6Ax3NcWngt29xb7S241bYNz8hXhfCnh8GJc8N",
  "key27": "3qxxg81KmY97ScJaJdccN56Vsg8oDou3JXJZHDYhUTgyxrYLWF3FBEoNggTAfUevb46BuToroYWHCY2AGRv6vxjP",
  "key28": "3g4hip8LUs6JqFWWE7jPTk5aRWH8bsAXSbZTcMhUXkh6osaQhYu1wZyGx2G1pLruZDr1zdmUeibGiu9aQugnhGEX",
  "key29": "2HcvNvjsaL8iNUmwzKtKSeQhjqWQEAjFAmBCFMWn1WahepHHdsQB8Gk9xnNHRvRVoxKxub5Zv1G1JqPTeoVLWrbx",
  "key30": "5NjSdo5CHdV6FDyhvjoGHsSbjN4ndsoJmB67fefW1aGZTVg47Zg18p8jGbfcnwGL5mfhorG6ffVdGQ9MUUnMV4wF",
  "key31": "4L3NZBQXRfe7bh8329aUHbZoNpwDeLRE8ePj5sbR8v72sCc6LzifFG6aecme6HqU59UmdTn1ocdX1HzYhmAwDfBd",
  "key32": "5PLBcGmqeRcCHhRxv4fPBxwL53x1ePykGKxDJXfCjbvVvBBpTzwemighDj6vacJEXnV5hCWfSoHdK1d4whm9VoZ9",
  "key33": "5aWxMp8BP3hXenC4XHCtpGjLC1cUbauf5WntWaNHeJbBTZ7r4VZkqDFZLadFxRqyPySYGtQ5xpB86hd3zGYgWLKD",
  "key34": "Bk9NQocKYAH3HZoRPDYfoAKPrMvJfphrDcNxPaVbSx1pdVZZSG3niyirz7duYnZ72NPdUDtyZq8B3KvjQ3YMrgX",
  "key35": "wTs6QzoR2q3KaawmLi5SbRjnNjfGBYJD2Yy4mHRbiiPs6mABie7NRmN9hBfU3a4NqofgqvFkfzo2U43dvs4i8Ue",
  "key36": "3ZGNQVfsZhRcHyenN9wvRSe8gdxvTGFvfWjNNEvSvcNLE56msjYehY1MyX7z43wobBs1d3VHFX1gb6hhTwcZTVEF",
  "key37": "5qgLD1YdtNRnTL9s8E9QmBpe6ZSyyqZQGyH98cjy1wvk6i3n7uR5wT7tDYc8PMh1Lmg8Tg3Go6vxzq9DKpnhYErd",
  "key38": "2HnELjoCNtDM1eLhrMVaHcBxb2gZv8s2DdSqvYxBkeYA8rL5VG8rFQ5Yczerif28EPerbsqzX5U2Trk2MDsrEQu3",
  "key39": "S6SHotVWioJMQ6ewQpvcy87LTtDiKw6H8RSp4raomeRMjRkxtZafTXxREoAARcJqcMVeY47ULqXDAppP16NRvV1",
  "key40": "4asADBSzZrSjhWTnJPGAcnbyvtSQqqoZfJvxW8ccqdSXYZftsDDmFa49nwFNdjTuWJ1d1fqdEX2otQdpeg1i8wt4",
  "key41": "4pyMAQdRT4xn23CybRYf2CS9ak8YWExV4YbW7WFQiiMKVccTDnzbASVdkUZ2Pf9C9GTcCUZDPhuprJdWhyX2jZnr",
  "key42": "2avCuc86NW5Lp3HXvaNyS2ywU8rjApBtV2kSaQgDYiYbeVskjqNQiMZMQjQcTZex47EiTozpyg9eTuiE7VYwYtBD",
  "key43": "jodRxkb3UT38Bg6SMDffKB3RRXvC36JuxhE9jVtHBi1PCKjn4i1EYzQMZZqjSbfhSpvQhiBjTr6cqkTX3J2hcJW",
  "key44": "4F1mDvN9XV5QDTrk45LvduZfsdEAMDMPXXMEWVi2RwsP1LBjQeUqq9HMdUT7ytosGL8a2eH7xwrAAMsm3jn1d6CR",
  "key45": "3rQKczZtjpHTLLrfQRRUL2fECVP9D7YWLoq1AYfuCCLKJGbWsjy5eNhygVhF3KDiiHs5Y13RkPh2VRnnXEuxqbum",
  "key46": "mwxJYnMiRKGoQjYDJMfbjuJhbNYCG5byj4Rud7sAPBME4pWBkKVUo3c149XvmRY8fhCzZdweTxQsDHd7whVtRiB",
  "key47": "45CWFVKsMktuJjGkBz2mcYPmSKboqVPdXHGvt67cTKm2csFjStmZ6hdNQRqvqGKuS7MkteRhFkXdS3MxbKPi5AGJ"
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
