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
    "58VRGu84c2nUPUpN9Bw9cizfZKA1bBUpAP1PHR5dEMtU1MZUPATtDkPCqPXmrKHJPuvynwsqbYcS9puL8KCjiY6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LzHWfQcrCWDQT3Fz1dUEqftd2wL1z7UiD2RKKnNy7CSEqF5XUethVCHiHRwSEcbCeMCGaeXqXAifdCUB4Lyat9V",
  "key1": "3icHiqrQDn9KKEhqMftz9rsgKrgXvaHheDFS8JgNkEPrqn8S3ji3z3Ldv73oJP3pZj6xBASp5sdYaoBqVTqRwbe1",
  "key2": "51eYHwX5GtkZjmiQ8vTzAjeZ7HkYhL64FqfN1R2H1taLz2iWcNtwwVgPgBdp3zf61gMyhG5adwCMYT4riaBSwmxA",
  "key3": "4ZuZyBybZD2CRYm3ksggHgG9fw6k6b6vjSj5FbF9sRATCgaqUcGVCMvBjHim1qQoPpTK4ACxnZYTBBQQxpwVdUHK",
  "key4": "4mTqpRGqt6bLEEjs23XvUYKyeJGCxh7Buc4Cz4qeMAx1WZVxN9R2ZBHzLYCtcjKDwoGH2o982wEJD4xUvQH4ZLqq",
  "key5": "5BZangmjknRPfrdK9Hx1oYgr7dKNsmuXU5skYAnyhiQxAkKfdn18jFBxBfVysBEgiTn5iyV87modvP8Zz88Xz4kF",
  "key6": "7MRKU6JCuJpfhiMcWauCXAodnzGc9muKmzMtVdcbJnBFCDn94e4gpW7TWSPbcMS5hTFpeAjx4Stn8G1JdC3EtCw",
  "key7": "5sfyeHxsmA4VBRMTpeHaFw51t9zjTd8XyqS8EtcYsvfN3KkXxTTbnXQgLx79EouSHcWZKdYdFDtc9wyhvCWS9a5k",
  "key8": "3nBT7t8gcMS7oeLxuUdJJX3oPLyc4NhsTTSubY4xdypKnWsRaKikRvgYc4GzHagfsMMvhxrjGg65SLyURzMrQ1Ch",
  "key9": "3zejogFVis4s6Un2LTKsmtXFC6r8TmvQMZ3DYYLienF2pmjPWBEz593P1hLpug2Wr4hRL4rby43b38QzMVvrUeZA",
  "key10": "21DirJg1PWR4aQtLkiLnFWWnfYVzhsJQUMxXdjg64WcGtzfbrTS25ucoMvfoXbrzX7FdUdsve5WmXazymbr1Hwgf",
  "key11": "yp8AUJsEG6Wfxxw4LtpM4CzmTBfoQkvnLKEpfLfMt4LxFHjVCHqCqfB9yFctaqthaT74VA94tfXhm4P498L8rgC",
  "key12": "3ymLweDzoTyGusZWDyMjSECp6XpNX21DZEfj1iRqB1kfrFqJoyVBRhUHhtWxjhRDkjmKLkjM75v66Y2JabhV5gNK",
  "key13": "4KsyWrrmaGAwZT1GyDRKbWdo4f5ibnNmB4mSW75dyDtAGZ5HwMzvhYjwYUqJApjJyH5rCCn32Fqs7Amkh2CwZQJs",
  "key14": "3Koi2h5hnyFd4YzGsweAF7iZjnmhWP92RDzJEgdUFiERgLkJt6yEdMYVEEJk2o5JS8Nz6CqCCXKdsDhcfkXZxkN9",
  "key15": "2SV1fLk1RYKn25fu3rumUjkGFJukuZaC2bzgbzm3qHKmu2WnibCAUk28vBkJCPZ9txEZGcAgtenTgcUrCX9e9xv5",
  "key16": "41gqbBSxJqX5qMAoV7MpwhAUMnTfLe1PASLAxUMMFVhnypdLHfGghiT93ZSfjJtnCTqZuSMsEsLgqPSSL1jB74Bo",
  "key17": "5ak6wGDTo8mx2g6DSDv7w6YjsmmeeQaaZfj33WhaokCGkeKhZYxwiHu8WvxYmiDempKvnzMgrh9m9AUPfYRhYpoE",
  "key18": "33ufCjyquQwirb6iKHoEKYzToqs7Vuvy4h15wdao95EaS1eQmdQ5L4bA6XfpiWjjCS2hQJULiDpP4TMonu35gGTn",
  "key19": "49hGG2DgvWwk5Wk4xPW9eghZEfiCdxZBsGHXugH96Q7eH95QsEWXcgAPGLnagWVffrVrX7xdRoEEnWAyNNgJCrHx",
  "key20": "3SCuDi7M7arsCbu57eWoQnsYot2TGRxk8LBoSZGe1mtLhSJ23aFgWeJLhBoK51zkWAWHHDyMQf5UgvfGnGs7Zox6",
  "key21": "46JBuMsET6GeQsxDk8acyqden6zELv5oei5rmQdN69eamNW63VZivPtJPJ4iE3ZHEMwjWeswtV9LsXUqV6PB1YM",
  "key22": "2sZWhtT8HmW7m9ADWHJ66VdMPuWn2eL1k3fY5UNwCANWEPT9ZXs62m9gdHSaruRXhNoX3zX36GzYuNqZtnY8Wvuk",
  "key23": "2oBStjNcKyUzA1eAME2k4mX8pMVVUhnrikxJTsJXDLwYLB1eyBsZRM1239zdN6Qg7pWwpgBfRJDhqb2dbW1FmuY4",
  "key24": "5Z6neSxD7kV6Yf2H56HM5zRMiyT46m3YMvU1r3vHLGxqLTufuLRQSUcQQiWquWbiamyvxc33naFcEfYZnLjm651b",
  "key25": "5gLs2aDk8oydzz1S5yaztPELBkbkfsbVzBrrK3DptVzpbHPLR2aWDjcqn8FdCf2Sekayt5rogdBpvXiJHf4nfR4g",
  "key26": "ETQCd3BiBHyefyEySG4BDK9vovPsFbYVU27pYG1Egt2azJgAGvMNjTTKp6xaYcPZ3LbKQ4GD9NidrYuXX4Qq6MH",
  "key27": "4YW4Ndjimjfkrp7QBcDBCYUfxwTSmKNmnmE8eYWNtjz5v1ntt3CbAAUj7c1sSscKf173n6EPp17fxXCzaQDbainJ",
  "key28": "4PGapHyvaZJrNipMHShFWFbESnYetfn2tykfkbQBFuF9F5GckhPNcoPszvQLZKTepr71dcorVb5X9yC6LgRq9y5o",
  "key29": "3LibKpf3xMRZEC1sRQDxKaFvFH4yJqeQahcKkzLPQJstADysLTHQHrQSWE5WzvMwTo5sPbfLdMSmYJGfstvxZqig",
  "key30": "5XNa2b9VB23ttfzTXuf2ipmi7Er6hdrnaBq1nCxi4GjJc9iNi6ZkccE8DnEHt5zzNNh9KfzJ1TYny3iS56rNh6P7",
  "key31": "34sMYBvqh3aRfnAfTfHo7TsXUxBSKEzEnjrR7CkNbEd17d5nMA8Nkph56P98BgmH6bs4xXWQkAy8yAJhUWwTju7n",
  "key32": "GiosKGtBf1adoN43BwvgSDjucBvo5XDmY8szLk4oHXXsxWcKVNsYMq5RPWDWLX3fz5dHQWEeQthdNRAJ88Ti8Kh",
  "key33": "4qyjWfkkFPKPk5VE3ZBXaf31ygk2ts1x2z9AuruU1qreDj3K51GfYxASV84QksuPykuGHr2jZ7BrGdT8BbDHpvjr"
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
