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
    "41c8WzkjNHXecJ8XM6xKxcPaA4XGZ9LVyv3Yud4LR5uraJgDd4xDzSFGe39BLB4cfrwK1R55LWciLMjiA3kLt99d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t1zWUf1x7nFiZPdFYbkKLnSWvETQanyn3Gu595kF7tGuDnoiy19NCroWiiXAKWeNYFnVFwoHMYxmPfQKLunSwCb",
  "key1": "3fxgjkEeCQG1UmWHzBZvoYpZEAN249nofhARHZVksq1jX5bxA4xQCAD6pibpiLaJJJjFk3XUgzht84iTRih3Xvc5",
  "key2": "3dipt37mtapwyLScu1io6W7AQzGjdpNHZaaupMw5bYiV4zuVxUHzwxUjRhrDyjotryKc7t6NkPcF8arABDvBwGSm",
  "key3": "3m6bhbkqebEA6sHZSHXHPny4vgQcchSV3cAmUGvtmjwdrG4r9AsYRD11WLUzESrz6HzEEnXYfSVtheyY3vVMCRWN",
  "key4": "5TipQvvVRkc8XiuCbdVQdhizKH2cVHqDh8VbJEaenCZu5tLY3FV5jTCwv4Y9ztVmcQiess7fdpgpnJFTbFdpH1Tc",
  "key5": "5jvLHwegdiwqMjZmQ2Dc8TiGf43B3fneEnsCRum39PX2m7hpL27pAeqocRMKXvyN7rWXTn5hh9h9eDYpQz5HUxcq",
  "key6": "26fZCnGb5fysum4ZYJCBH6pywj1U6xfGJSPceyQR9naBquC3xjGSVXG4zoz6dzpsTi4QuLaXakBz1GDLbUdaoMag",
  "key7": "hNgWdMr2gq9taJBGFFDaSxZAeuQy96txXWxW4Vzodr9tvcsHLeEwQMDsCXXZUjSXqFFNtAhH3R2jBnsyvVfyCLK",
  "key8": "2KSb4tqo1ksoPQwHhhex1BkcRhqVwEZ2fSSXPJLzCF12zoewLXegFfP6W3kuEsvKQqhiJjEbtYcBXhPPeKvWXUPd",
  "key9": "mwC6nGDBv7BNyh3gVCMJ73MtFNXbfm1ooMjoBSa53WXAokH3KFFd5XicAoNqGjgmTuYfFMJ6AJuGNSxNhkaYz2V",
  "key10": "3UeKymbj5uasi4G58BALVchZFvQ1sZY67jD6SzjJqqxCrjgJQTzAgysyjLYTCreB1bsakjo4jsf1VFmZ6SaxNk5X",
  "key11": "2cEijyhdAGn6X52r4xT4jkdeQxDgtRaCUdPChLEP3BAS9NaTyVAVdbHyyTq5sdxYyS3hmPVp83YAv6a6vDFFyinw",
  "key12": "3SLJUBzdWCGoncQ4Wfn8rR18oWVZ2TYXiB62rdCyDkcNRgpsFVe4pLpyAt9mZnMiE1xw9ZxAZMQnxZEfft8Jt3hS",
  "key13": "2yRJW3TVwKdSUAVB6eDJRyJ633Bc2kBEwX194fcCcJNJVbkcN3ALURv1pAirh6EgCK21QE2QvZoKhn63TRwYok7A",
  "key14": "KQATb7nBLGeasKJqCmubnaNozoyovDkfbYxMdReH7emSCvwShYYd16msCXk1KaZ36zGdg94ogXJPJb6zCY23zmj",
  "key15": "5NWGuTi3x7uNC9psgASSEKbga7SqvgmkbC8UQhDBAc4vkuFpC9tveCsqX1Tdqv3jdGf7Sym6KHxPGFTmBHWL6h2u",
  "key16": "QHs9QSm62uf55mSsW3zrk9mEESs9WcL4ncK25StghhyQGrXTCkLLbg3ejMYcssA2DxykygvTTcQkxgnTgQ7w6MX",
  "key17": "3EoH1bVEqiMrKrpJrQQWQFsGbvr3efqqiaaKjDAamzW5Wrms94zNJwp24JJmwtpXhecTYFd819jUTcsXmmbHxQRA",
  "key18": "3BkM1AbHSMD4XjXMEPsEM5v71UvznEyR6wiQrtJeUPp5H2S7fYuR2S9UkxvTuDEfNFot161sr4iRsZ5FGRgZjVdC",
  "key19": "41WNsy8wnZ6JzkxTLrem4V6Ss4pmVxquF622opxfnTxxqcCEhxR5D74wpFNddqFPmFypAFtC5CdJiVxys56V1bs6",
  "key20": "3mqY4fr6FDxzFdsBr7C5KFJbRkyeD9htGj91kQgzaSv1iYfvMoa21iyXTDTHBQG5BUWPFzyYTFCdWNGDmtsLx7Jg",
  "key21": "2JyAD1nR6C2sP6qYMP6nHAG8kvZ2MzQDM6SMrgd47SaSqotNrMNvMBU6ZJmix4zwfoCqURPuDN2hec2RiRv1pYSK",
  "key22": "59nBnguieBVb9WS3KQrgQXuY73SBUBnP3vHcPG8bTHSyiamN8XBKNhrGFHkH7xoAyw2YB2KcDt3dfavyQbCjMbF4",
  "key23": "41jWCQSRR5UaGdFyiSJTx4NDG1Hteckk5raPgRKhWHRK6RnYDjD9pX3TBy1kGm5t68y2qkN5h6ZA46orB9J7R9r1",
  "key24": "CSZFhDnDx7xX1tpYuJF9Ba1qjtXQUsH848aYGeSek9o7RLg4gAwPq9wBewPz926pUric3qAn3VndD4u5XhrWK2L",
  "key25": "3uUke9EGzRJwPLF8KvGK9Bv11u9t55rRT1VihNheGp44q9thuXQUUG35ZrUVg9j7q1sqJw3KGKSz9i6oyDitrdeP",
  "key26": "2wWeKB6AMfeNcb4wCF3nzppzHz87cq1xc6fBxGyHwf99zhPVpu2Mdy75Q9AGvbAhZb9W4kjFrnLn5c3JkTVYtsC7",
  "key27": "6576cn9pZZyHHJBZZuutAHvBeDJ4EmctziZV4qYpcFHNQLAkmoSApoHj15sMHzrtARzAVM4dGdTJ7gGgihevGgrD",
  "key28": "3RJr4oSVCgnm7BphCUqn6dMUKA25PEFdeuzVSZTFa4S4WeravBx9cY21Jby73hCXDcXPS4Yh3UCzLBoX382CeQkm"
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
