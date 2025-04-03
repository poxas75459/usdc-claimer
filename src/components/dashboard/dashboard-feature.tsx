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
    "zFySZG9wJMoyov8mpoQ6gCSsTXz2ydxqHdXUqPHzShDqZFt9ypQ1GkkptwcYkRtYDBWW8uS99WWqkgbQMDMyYUG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38YRTqRB4pnB4cmUkbCQX3FH9KLVog5kTUhYeLDsPsFKLPpWvheiFJUxV4ZNqezPoriWbCdL97YdaQC8yXTW9KH5",
  "key1": "4iD8WFmQkqpqwruFQLrygEBZCAuipmxSHojBZhxgwBZnooDBhwNLeTeWAxgQZNtQc9XvpqNGANZ3CVeHYg3wFhHR",
  "key2": "3bVhStAemDBhPRUyeFcYh4wTpUmQ17FrKekLMFaUh1b1bmDnmregfd47GmdE86ygzhc6f7kWhYTVat4SiCFSCaLi",
  "key3": "36gV7HuX89LCviHv4HFJkzatKJPRSo6SsS5jJbUQrzD6ZroQA7Gh8RMpdRz6b7cx1rdBXSsTGvcAZkFgnXajdJ5y",
  "key4": "5mow76idwoGGGWED1ZmaBMmriz7VMH9VZx6p1cnBcajJeFE5erJ3Nx5LuXHrcrFXGqLuioNJMwjufEW3F54kSqYh",
  "key5": "2gbMrp89aKAZXnDKVmUdRof59hDAdZd5L75cjx1gcjAergP4MX3AoEzPozXfLnsvQK88QuuGcJiWZAjytTZLi981",
  "key6": "4UFFRJEvxqdN343ff2aTmVgL9jFhbKat3FzkSZuHTaWPCGu83SbfLLTdJsoj6vtnCjdJAKoRE4uzuKyq9ovVwZ6K",
  "key7": "2LYVvLiBZ1CGXno9WAorGknyD7BXFq4Yerg3MBhDHvw7Z8JBvsND1GjU6ryURzPc1JvVVsWJcq56UobasyVufiNG",
  "key8": "4gAB435W6omNpwaaJmTPJfPqBFdc69XN4xna5BKe3gUZTybBHidR7G8CzRSG1rSDqofDpxj66Ur1trFSich2UAac",
  "key9": "2GdnjB191ZAxfPw2pL6KCyQBmqWJkkPFAhmRDPFqgnB2esx2pVPECHG318QMo9PcFJhqLzksRCpqK31KNb896wLF",
  "key10": "ECxp1iQoY72pv3Evtn5TrK7d33fc9r67fn8bZSGnn7ce1PrC9wsZS7xb5hA26okLy2B3dsQ7iVPhw4kbAEwpYZ6",
  "key11": "2wNwazCgnHw3nGBo4Uh7sp2o7CcmHCr6DjuBYmXW7R8xXmvA1EmkzxYoPBU1RMAAmtGke6cTnjP3S3RcTZ9Y8jiW",
  "key12": "2zvEqQxvynLBVDDxB1Qc3qpBgQqLq4zifk3RUDkzv24CjCMqcDATjaxtPzQaC1HvGFDSYM5RBPXChTLwPdSCa1yJ",
  "key13": "2i6Qoc6DYgkbg6GHLHBquAYVHovkpYxCUQJSAWSxCqSJErPAQavW2PFktS9KpfYqhheyWQpUweKWeXEuzFH3DGwy",
  "key14": "2e6ZcVS4tY8dw8Zd8Rf8ME6BRKYxzCP7LYeXfVeTp65xrfjU7UyAbSN1iFeXdz3HdmdeZYQxK7Y7kdzyv6z2PcY2",
  "key15": "zz4tvnFNr7zbn5D6WM5KTACdE5rEef3c4rXpiMNtvbPUKDFG18FwGrCmEToaXCJpFjzPRYSz2YKmUMzNSwr1c4V",
  "key16": "4TXHDCxW74WzBhbGnDKkTmikZ1NKFiXfQBoZnumWYm6hiKnsamycf52gbEyymywx889xy1LSijboBaugZEZUhqv4",
  "key17": "m3b5dzfVmix3bGR7C3q8kCSFofvFLqL5bkP3tT9vKcgoZs9y693YYxsjFDSjMgPuAqd9qfscBNaMK4yjoYgckv5",
  "key18": "3SYm1y8mUcERSoWhCzFuUH9pqpdCSM13GayKNMnihZGdyGCyCP7NtfioXggnxFNiTmQAEDr1zyNMymR6YPVhrmJB",
  "key19": "pcsXav7YUasT1LKFqFsr58SrXw3FRuyumphzj3TMgvYi2X1Lcmos977pJ9FE6g3Di8ywAupm4wioJntUQWSLRSt",
  "key20": "2FBn58qAkyiU3yuKRM163JHrzwkWqM1sA4a6wGRPPp9yvbZ6pZMdGX8WxcvwrnqnyNoXzHiWxHeTpg5MPBYq7Fxe",
  "key21": "2BeBaFxrLu3P5pTU8mAEqP8fKWxXTVdz275U54zG3jP6vmtvtQgj6bLFx7XPbauuxKATDreD3rLzD1UvdNyofgeZ",
  "key22": "29N3rnZwCmXQE6umFyavqtGAAKndSrvftEpdv7JzrjpZ2g7mcX1RhWmhSe6DjvAzNEbjcNR48tBhpjrSfaT6tvBH",
  "key23": "4s3btvvWKRoK8GGiDknUQcUC5o9nCmB8puNdUx2noBXWEpEmwsEafbWXeTAZnjFAgk8PRqT2DwX1Gqt3BHHdSrus",
  "key24": "3RoXT6UZHf9KDTCiGg8JVFVpiJoZVRcs5dSjzqxSnpHnQ6qzs4bFuFQcBxQ3CMkLZVZ2cSDzK1E3owHyaP6rGnVq",
  "key25": "39MDpmKLDKxmPDAZ8gnhtyJcaRNkNLRSEr2gmP21nKhLGVRcuaFH15ru8HAGgA4MXD11RdFQdWu9SGfiLFhJBahJ",
  "key26": "2Y5EBtbBbhsZNkJeDHsktZYVJDArzQJED8E2bis3DhbrT2vHu7tzfJu3XVjSRh1MvcuBGXRrTNgbojGYk7hrfqWw",
  "key27": "qpRyoyALp9oFJfThpugRnhKfJeR4q1Wk3X4P3gUzYvDLHjqicMGHk4FfiXcyLemjxM7oQCyGaN4e8nDT5ZyTWez",
  "key28": "oL7ghmxS6X6yGHjCBzxsu5K9Bof5TRmBUM1ragCwD61wsnyjJnvAxktGqGBKev6MXNiiPsyb79DEcUfCoLTozWP",
  "key29": "2GMtP7XbFETcRq8NYfHhJnB8mmK5TmcY5hXzoza6eKkHv5ymwQ2F2Sr9SomdPFw6jvPfyLjbmPxAwDcBDTZEocDa",
  "key30": "5VCX9S7ibRh5mkoTqnpQgJ5Y2mVKKHK5dTE8FHqj58DDzjHWcT61NHGZ6iebgfVaEuqiUQFGXCAqbYbN4McDVeVj",
  "key31": "RmAKomY1U7XkZ9SeYbkZAY3mT24BanJPoJf6qm95FLVYZRVFEgHBNaqS9Mz1YcnYcJHpv5DFbFTEJkuA2VcCKJg",
  "key32": "2eVPXLf9BnXDMAWvEGdEkoZrAnC8ADwceEX7aWnHTnNkn2hHmEGjKYfKsFqmg13z5ffVG6SzFefGzrRsckFjQcD",
  "key33": "5wTtvbHowEPgitywqDkLnnHpJN2i6UvmY4r8LxnVyMR886FUoqkXr5LQ1Gz99w8RRS39mHBcWc9ppsdiRoTNkBJq",
  "key34": "4UxNbzzYqNk47fbnu4sdPNAzeAyJtXjeSZNqdcBzDEBsF2UswvXTn6xBHmUATuE12DVdo1Rspqz7Hc3LcGa2xyJS",
  "key35": "3ikiKqfG7ireaYwd1nRzVMTEHsPQFUojQt7zefYLSCamzL44W8yuYF92t5CpcjWCqqmYdfS98psz2a3qWb335eec",
  "key36": "AajGFDTCmn2QBVWranJeZk7tbSyyj9MJ6j4xhZFXGpNPU72E9Mn7HArZVH3xELD2NXuGAR8dkem4QzaGCBfUiSZ",
  "key37": "5ARKZkAxJR8akx2rbQDE4aQZYCbrQG1R7btx2WtqUVS3oVrFnJm2kGYA4ygMZ5mVifgTAP2xbsfFc1GthYsfGGVu",
  "key38": "3M7PDVXjzPurtVxWAb1T5ruZs7KAyswUJRxokBPk6GPL6gWn4ZqYNroenuM1qADCwg3yfyvPktdZreM967VX4HEs",
  "key39": "5BRHqSJeJHZbytRgdS6pqBN7pdaiDDvTa6KVp9m1Ph7CT7UB9FttqGCA3uLngs8qjbYG9e2Up9btth8W987ijcFY",
  "key40": "63LTpZopCUWU5Et4YFthSWz7tAmcG2zYS3C9wqrgng3AQ2PZPiRVB4Gdg5fEe166xxCGS9WH7a7Dy36ywmB1KiDE",
  "key41": "341wgdotiYVtemTtFrmkwB6LcYHKS6B2cDgAowboBRz7oLx3AWu5XmzjKB1aEwRyvNpL2RsxT9zx4Zc7mJaeteLS"
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
