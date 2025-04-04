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
    "5NKWyUyvPJNrCAfJ9fTzuZ31mrWRFKXaKvBdniWmaaqKkmDVQqgj4dDL9hNcX7jx2zVpj1rE8Rfz9xwvzqymufdP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aVHA4G2tpeEiVtwSdyoJixjwTGTQP3MnivHPWzYQAPVZKCLqFievywXLqct3pPVUgysU9msGz5VPnFMzUsfudVd",
  "key1": "51PzW7KnrPDxXU8YTYDHxRN7A7SJFGvrNASQB3zWAAtMhjgAoHn4R5WcuYLaBvSkV8SLbS73Tx3zvfSMWGXbymbG",
  "key2": "QXhMpnDFqwSXs7rfbBR9ypJXD1sQZgwEwJPzAiUNLpVqZirAWk8eVN5fiBTb2masn9rWkGKMHiRV4UNKn8DoTQr",
  "key3": "3zFWVzfL7ynpcjRgSZFx1ms6Z2Xujtxp6Xkk2QvTtY418CTsvAB8SnRvuADwciWCvZwLrCDGaEeSKspuDEoKK1Ho",
  "key4": "5sexpiZFkqPxc2MDJTzbMRHqJPxE7MVb4knKM5EuXkTg2FJprJPhzv43hHmpccvHPtzCVe1kvERa6yKQkLSDtAop",
  "key5": "4sFT4SE2zg37mTAcohsM7gJgUxXSKuTQWfUdnynS8eVqEequg5Ykn9aLTBHrsz4cNYBjyEGwD3j6X4Nsd7ax5KoR",
  "key6": "4j2q1qB6MCNGYGJXChYr1D3M1JaDkycrLRXxzz8tdXYZeCvXkMRkjeMuBeqjtDNFTZaYt5mWZqgSKD2v3YASUL3M",
  "key7": "2FQD7mDFUByKyBMknGW8GaCJ9HpdAHjmrShyc3cFcUhhqGp3m5rogzUHKn3YBaR1HVtmLQ2KftgGeTZnf8gcLdB2",
  "key8": "24WWPjRxFSfNZrjzA2cNZi1TVsjnpML9m2SVjU7rU5SNb8gdPLGFpNaTgXAqjkXNjhxHA5JfXaXN58h1i9TkF2eh",
  "key9": "59fpspgNXEusjGFwMzVf1ALpkF9fY3PfqSeTz6nsk6H62F7Bb1ADCzEoHd1sMmNhNbb4yNYvEzZGtgggZLN8QT4w",
  "key10": "4q9RxZPny1AfVdxeLLeJEMkDJdwgm9eimcMUnAAXycsRgD6ZmCBDygxNjUhTyKZ4YrwnpBTxSwr7x4R3bvHZb6D8",
  "key11": "55PD4jKtyX2Hpwq5WEXKNpUexNBEBsdJi3Mk5iUDbBKm7vyMoCxzCf5qBcyiaUsNKm6mxy6yKNKt11fF1pgUgB3m",
  "key12": "3Zk9uz54RN37E1UNuUgHj8txB1wGAhrgDnqnUUwiHNwRzTe1dbEtM2Nfaz2HBGyviqFfU9sB4jApimHg9NkHDjWa",
  "key13": "3Lmkah8boePNHLUFZNtkPng9ZNhhc6Q9Ltnb9jdkEGzcZB7dYXtLYx1mN69SpTPDagtjvojT3vH2TDYWgUsz31sn",
  "key14": "51rFRj2LEAGdfD5KvW4HLaSFHoafDEWscY43KUb2zHk3udPnfkFDTcoUFTkpkKUrrs8jyBZzSTHv17KHbvfid66C",
  "key15": "PbcGGRULXX2VMybBqFrP1Ppd8yfpMes9J4E7zVGEexnhPG9ZQPHdoB7devaEw9ZuP4o7wtdkXUAqJ3ntroM2MA3",
  "key16": "5HbUEDNNcEMBfiHeaJaA1RLe6JkxExLKf2hq9JHCGNpcGJTPZss9maFW29H9WDTSxWZPiDTeBimKQREJ9M6rt28w",
  "key17": "Q2FcsFCqxMsm9nomE238y5wNWZxJhihH8k5c3eNL9TrR9vNLgrkx3PmsQypUSbXqfjXzdU8VVRhEFJNWddKZXk6",
  "key18": "C2SFbK3cZoGU1pXmbXRaS9zGuV4DcQ7wQxELYK4RVi3e3Q2FVXCidENmQ98CgGtyDAGJB8BdpWFha2vt51ZZ44L",
  "key19": "4A86SwitPwSFe2rDyDDpx2NF1rZfFbjBqnnJrFioPRwxZk1PGLQCbDn5jeGArKanUaP97AMZSpSBc9hPtxt2dvyc",
  "key20": "5Azaqu86L3JSdpGX6Y48Y2anWLfSxPMQTWy1UntboLbpaaUqs1b94XDjgJ1wrtkEe4EqG1Di8wSJrKZGGuRa99aK",
  "key21": "5woX56E9wHFnbosztniLbq3hgC6Ym6BfsUNhXkNCQq6t3dvHqa23DcnzfwXuz4JJHk7nXs4UByDo8oXUbL2Pt1wa",
  "key22": "3SdDP3CGfSbBvcm3QQW9NT16Dra2yZ2yBSxJ2bBNPHtibmJkkeC5Bjnt78JufK1B5PAmsHewFsRxzT62hr5TXZP8",
  "key23": "3ySwmCEZ7hpHyC5oxPbJCf7EMLy3GougU6EwRbd2awJgjGBM4hxnY3UjYn6ujdcrqV2aNyu4ZJbnoKcG9nFnA4r2",
  "key24": "2Q6s5qtr5Lj5PtyKvsav7t3BShSjvLAzqcXXDRx516xkuPNXpxWDq3K7X98pXkNyC2MdXVVzBUcRfJuLmftYLsdn",
  "key25": "4ebWKMNmL6AYsT33yJ5HeWKrMNboXDnHVF9Cv2RH2Dc87J2ntz2BHDyq4uUxgyFrb3kuP9LwDrBn5YzAi5oTkWy2",
  "key26": "4vp8xQhbXcvkQNsMUWSDHrNCTJ8rU216dCNt5DNa1ZoScTmijmioRRb8xwqLTCd58SzFqbBSiqVBHGHXayGR1VWM",
  "key27": "3Ckh7PQWbecwQnqtYg2g2LfmErgWNuMpogecWcT1wtr8wF7oePdwFKyMAfGaReSSW1BivyMdVK6xfNSUUbLTrBDG",
  "key28": "2PKQXgnZZQMakzhrp2NwSBQrrqAXN8Shz8i9ETfoyEPpCD7sWNkteDdJPsnTxkg2A1jDUyNPEt5nLVsooGoJKDYE",
  "key29": "5ej6Lhy9tjGD4LdPeYJuEwJUbo8wnvAkaEASmBszpBbWrCBdbkqQaMAdrHyEGVNcu5s2d3hyUfVM7eGi5RA11Bsf",
  "key30": "32pTgifTtV9UaHPNZJH25kGgX5opNnWw3AoZZ7t3yHC2gQrjboXKcReyi2aPQQPYGbjMn43dThmerjpjajFz4fxj",
  "key31": "XZ8uAys44ECizYqPNpL8JecBW8YCWakkMomVGZU49HMoKqr6ziUfTJcCD89PiQByEZhNGa8qGx7hiJXGGqZCLht",
  "key32": "5EVFHW61SZAXdLhQXdsLusTvSJqwyK7VeyT2YwGByRkf3Ww6MXKjeYeH5Wgg9BzVHmQooT1WJnd59omEmd3qxXh2",
  "key33": "28CujgQencY9zC4cetgWdJkok5z4Qn6TpChMt9e35wLT78WFmJB5NEAW59nBTQU552Huw19ri24oV2SvsCJPCdqJ",
  "key34": "3m9rVhWPCwiCN5vmebEQXRL2ingQyPbKmq1yLZzohBZtwJ2tgcP23A5ZUMc4AXecLkMFyKDGYpHtxpCvwQzdbQKh",
  "key35": "3LhFZHXm9YsQ6ZGNfqrBQiEfznoPuZZt1qJ29PNPjt8YtxBKnG4u22Y57JAn5pbRv3Drgvg2ZYkdG9qc8mBvApwh"
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
