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
    "i8yAk6bN7V2HbTKDn7CNeJgJAZ8firvPzN3kV1wr2A6RofjoSVXBFZ1FH1RCGZaTgiMgLePW6gv95gEHnAdQnDH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J7bBST1dZyn2q5UU1rjdaAWHfMcv31Vh7LdWtDspZttTQuVut5nehXzDDiP8tzCX5AMDgsDvC18WTvfyjdNQsPZ",
  "key1": "nesWBHfiABCxdoxAeNqAMJWnRET25evLv1rZfg2KCZEpsC9fpQBsXLuqfYPi3kxoiiUxf7iN83b63EBJQyBodru",
  "key2": "5j4b7Frr9ZqanxS2yXfPW7eNFyK6BjLdvJVFBVakPrq2uDRQpPQCqfXuQ7L7zZzhndGRJGhiJaUhPMZwrUiFYrFT",
  "key3": "2hi34MRfw5JSK5GF2zny3PSVDr79BUNU71cDnFLucoKeTGJQyVGesftLufEEVLBiEceJVgK49qYM6FQBHBvD4v9F",
  "key4": "2M6hhGm5oR9xCrdpnsFrchfQJQ9s8owNarRKZSVFvSKpFEQwWiyX1vCqnd9ZE5RSDsbRKanY15VQSH7e3bTVnBCU",
  "key5": "2R8J7o2Ke5rchGkWeGuApcF5vUYH1mWWWwtMc9nqKgc17exZkYL5GcyzKMkC1o2Wh6jCpW3vZXW1x7JJ9hrtvmx9",
  "key6": "5zDUYEsYdcmQ21psxxgs2FS4rbzVowhwFJe9U3PEQp8FXTYmyY2N4kV8duzLXQyXhgaWEBSjYdvn2uLds66YP3Tm",
  "key7": "2sp7D4uyEtJ3zPCuQwreWnVn44rv1tFXKtpY9qEGMpGmPSxKVftXbfLXTHm3JK5wuA898kNsyTYj6YgnJD28hqTd",
  "key8": "PxE36X1VegEuFLSyxP2H27KuouDL2MexnLJUYKjc4xLpovbm33ypxte5Lo8D9LyhhfnrSM1x9JP9F1wnFch4Ai3",
  "key9": "5awpfnaEbnki8VGdUuCZpnGrntZZSZ6pR4MYvqcdPr7xMFcDWeWz9qna9XiyvrcgyTH9MY2D1Q8wKjSDqXVsYhCs",
  "key10": "5tjMhVwoFivfABhJ2FCGpEXGpW9nP4Y9QSzyMELPEH14yuxDPLXBo9nsjxJiU4oENXh76xoGjwjzfuieA1FMhoSD",
  "key11": "5VnsD6iEHYBs65a8nhEwEw67J1Tik4CJaVEgPBQyNZNxHC37AeW4H7QniaJiJ5rp9zPX8jcTdjDmomirjmQXSX6G",
  "key12": "qJeJQ5cr9BYfkygEHh74rWjS4rdedJUPjP5Lc4wQoSDnZc8M2c7dNpo3Xus5UGs1XxPgGxXTof2mWW7FSgi57Fs",
  "key13": "325Fzw9sHGNAFvcU3tj2vSxMFyLfM4keJW6MJSZRC3G48BTAUHV14mJ7ChNGi5zcn9sahLzmMSNU49qDaDUB6DqH",
  "key14": "5j2HED1f8MzAaVLPC1RMCs9rivMBN2gwYkMfSVNdev62DiEoWQ39mKnsZAz38wAT4WaFRpzBnxZxgmQ96ULvq2ZP",
  "key15": "3hvJ8Z2wz3y9ziZYkvym1ZHDewYrNh1Ubbjq3iAeGiv956egqxgv6W9f6uTBz1T9kpHV5MHV7o5mWM9bQKopachY",
  "key16": "EfSekNQYfdrtFgw5oFzfNBNoryRMzMweCeXVGpQvNZbtS3GYXPvgoj6V2hWWrJZ8JF1FkM5Vc6s8fLTSHY5TaJY",
  "key17": "2fQj8AEgnQozoBuLHtJRa3Cpi77SKLeprW1sUXKYMJXGyVqX6fVCahK3xFDiyQvEYtVuefqMLdGdWL7EY3imib77",
  "key18": "RGBzy75jRQ8355aQbn8VGNx9GmdZasQeHtq6hifdaPRBQW4Uwb4tY7P1QHh3pKtcauQumfALoXphQMb3BSyi4SV",
  "key19": "65eNP8bTPpVPRiGKLfwCsv7omA6y8e4iN9MuxEbwQqq6puxWJeN6LQ8xkVyBbzgGSMbjgMsudWaADrtK47HzjmQi",
  "key20": "2TKoZDxuTgMboWTuWhZVTx9gqQ2x8VahUZJ1h7rpmfCYvRuHU4zPPxxX5MNTwHBZcTzyRnGqkMpCCLQZmQboeMKg",
  "key21": "3nRPP7Vdvb4Ac2p3BEMpEJEQbkdK4fdg4q1UQXKYoQE1ukioeZdrg1txptWthB6StNdQuVb5dYm5J6ZbPeqEAotp",
  "key22": "5AVDwu116mwhPo6ZwTZDA3E4LRQWmxuK3uU9bjK7P8tngPCd1DWpCoJwy9TbJuDFSU9SYKo65ENrvHdHfcEgNiLC",
  "key23": "2vjG8RfFhUAbXEXD9RuLeJG2kYEibqGmLFPdjeonDhFZuQ1NJkYngTK9pzKqbZxoMBWTyCXtQpyt2NfNKjietqxD",
  "key24": "4hEe6qawFpvW6LNpgrr9rgdfPrQTuDSMANpK3xMuBbYMaXnZyB38tbVsrRHDJ7jPi2E9j6nmUGwiihBy99JaGUZy",
  "key25": "Xua3eUawD23emHi7h1nztpUaHDf4EH1amX8QQQR5osVVC51gpsdPSb3xmMHYZdA3VvLuPKcnHDw9a1j7F2hEPH1",
  "key26": "55DQx4RZH6djb8TYwGK6AouK9m2ZZ1E1t6dpR1YFsCqJXSiR3GAfWF1dZZs32NQXbCHFz7d4ehTLCMT3XGwGDpRY",
  "key27": "X9XruSaJnTuAwh9gQFR5vwbbJvS79JjaCSD5AUJYqCNsw5iLjuMiaFeDajhgYfaPYZcM1ftf1Czm4XwZWRdnZpj",
  "key28": "3D5Fvuca3XKLwBVXhx3nJuPUHxSbvjKEjpkbZm6wVmm3jGnBVmjMUu7eBeXYA7HJRbTNaeDcaxdC2sK9whDtrfZy",
  "key29": "2usmn6mQ7Y8J4c6DpEYRENendsXzcjjXqMzJjjqR5cbJFN36cDAAoDn3Fd6bWd1me7VmuVedEqNbrSdp5dz4wRum",
  "key30": "2frEmoomq8TqjJCPyj1qzDQ5aaJrK2VQMFibP3f4m9UhqRSGswPRmnSh8E7GTMykHxYSZSccGtkMcRsRFWgs67ED"
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
