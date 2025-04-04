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
    "3AwT2zqaoHN8rxUw3BJu1fGQpQeJj27BdUX9SrKP8zocHhtFWrMtChSujceb4BcigCUWt6WfxvnGe3fHhbXyhpkz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "smKcSk1cFYd49waMv17gFuzxjtGVCvZLpGteDVoCBU4tYJFtVFUJJDpUqwpPRNxoYiUajF7PMSdBR9HvkQ4Yz2x",
  "key1": "277oS2LVwQfB5zk636UBWJroGUMGyKYDNttPzYBykLBWDa6QXeYEoNJmbrhffcWroZxBMKqFUquRCJrPnxot3KGj",
  "key2": "JP6BDKR7LkqU4qhBvF366vbT63yHsd3f7H3FpzoJS1f3NYD1kxicPXcZPeYnCdjha3gmgpksKogCuJHLsxhbYxo",
  "key3": "4o6m5HqmT6yjPAp3wuXDNThu8s9KwuF6saoQZsjLiBa5YRZzjAQDkU1rHR8Z4U8bBDHtFCAUccUddXpYbCUR9Qta",
  "key4": "4BZ56eFX6NADK7C1oaLLRSb8jg7Zz4D4KxvLqRcmWfKauA79qKJcyT3n2uJ3MwmG56eeNgzQ1ewrG2LvTuoHrgP2",
  "key5": "5LagjnHRqbrdbHB5oZLTY2SU4eDGZtyX92jovVU95r2x47fhH2eV2ptgtYL5hKmXZi6L3nYbbjaRwEm3j2T1V27t",
  "key6": "2RuHpXqymnyXePAbmyaMnHpd6zFZkX2a5pWQrs2SjsJjKiFJfh4wpBPc5S61sU8GjGhkAcd7CSJLuF7fHbtBqYMN",
  "key7": "3YpbCrRT7S4KyA4s5qzRQJcADJVniMTMPhAfqZ1KLNk6c4aX38uopQdk64oHW8y1QX8FeFt8fqLdju2iFiacXRt9",
  "key8": "ufKHbR22avN9hsWXvqxn2REoLtS6Mwr3VVedVAEsCoDV1stqZhaSXYwE4DBDwycRTv7gaauSqrAG949UghEXFjR",
  "key9": "4XC2oewZ24vMb9rH6jV3aJ1ZR5URkEeoRjTTSJXSnFyeUW1SXPHUQafEdvV3ZS4xW4azAiNpTzH6iThSdZUromk9",
  "key10": "4qWZceQKN6kjkdpxhWTbnKwoy3M7PFr27evfvWixVNQwaXyZ2fAJJpHRykrsNLb7TQR3TDPwWrxnnVSnEveCewVh",
  "key11": "3hyjgoF7veNxBq7Dt4uVVrMDdqFk3dD4ebdH7s7Fg2tT48DUTQ2UpwLgFh14AfWRxUvK21n1oXq9L4p7ifWvYPcJ",
  "key12": "FusKZteqBXX6ncaJj9PC8dKrg5SQYBrkhiM2kMqy6Wczf1SNgLK6KQmTYhyjvgYNGDw9K2G14Mumf1bccuMHFAP",
  "key13": "3bkKnsmK1v15k44odhVHp31J3vxWTK9fwtbZkGNyd55jetHzWQrCPRuhWD4SXMk78AthvpstUJM21CHZ7LRXD8Pq",
  "key14": "4vEZmuAVntRwWpyssrCSRjogYp82Krhe6pVV69SWbmCxrPMD6jmXfP6b9W6HYFc6KGjknsMjLa1PJSHeeVBBoaZc",
  "key15": "4HTwWZPY8fFqny8Re8SsLzhPtyuHWCWfsmrVRepvpGBhr6ZiE8CmRvPAnmd29AWZKKvrTBS3epnainqnLbLwSG2B",
  "key16": "2SJsFJjzWNeNrPg4sowJNZXEqToYxff9QJL1n1agbxr9qDnUmGeH46MYgnPrAY8oVSys6oGwGjWEQ3KjnjdK8bZo",
  "key17": "5EvtHTRc9KqDx6RAtavG6m9eBzWNYghQ5nm39hhDZZza1uWZLLep3bWajn77ChAXCRCRWvqPJfUc6FrqQ81gCmdx",
  "key18": "5YB3BSLifJXFb7C3YsptYErMeU3yzGah7YVzwcNP9x37KHnPNUeP9ScGc3MeSdEsJpyu7wT6Fn9eaeiv19cJ1aJ5",
  "key19": "qg8tYRg44Ut27oWZeAm9Wyq4FkM55HgSceET93NR7h2snKdSiGfaYS3sjMtZ5iEEZP4eeDJCYctYJyKWmx2GzJh",
  "key20": "29WNtj1XpJS11n9RqxsTbZFpHZqFWXYxuzFgcGBHoV66yX1i4DPbeAQwW6yjFrUjEtzANJxyJVbcF3EJNpmHtQeD",
  "key21": "3VmDVYU3YM5knPSwa7EHjYzwXhf7Mz9nH4Qp7DuqGSmrAJj1y25zBXHbx7T2VhuBwQvqBEkWo62AJK14H3o9nygf",
  "key22": "4e4Rodbu5GRvhJzs7vAmAWTL474xycuWRD1aYn8t3XU7SLrgJT9QkWuNLNoDmbvme8eLwcv9UJ55fxAHMg3NrmEK",
  "key23": "59mcCmcBq6zgrAck25D84NPpHmp7GehUTUtn2i8ZC39QaFnRk3AqEgTfqhwiaKAoyXdrwvDFyAwjFLUP2wrDrret",
  "key24": "QDRhqANGgY5yJwXs15stEni73Q67Ho8u8Jh545Q92r1WugfxiGruVAgXn91BCYMk7a4pQKa6hftmgfHNqFsmduB",
  "key25": "2Nb4qbKzgnqtA18UdSDgQnNDQ9WvFzsy4TemYogn2a9GaUy1ZG87UQJUkq9RV8oz2DuYZBkeCQPVZdjueohgCHu7",
  "key26": "4kdE3RzXfy4wXLEuPgErmMuB7dApBNj4A8oFfwGrqTM4fXNoxHWbndyUSZrCzWS7Pujoc1obuxK87qH9Sdv5ZM7v",
  "key27": "5Xq6DT2KJzZdtAuQHE26stLehs48kHBJ8PG6QhpBhWHfjpLXwcexzvFwe3uAMLDDCDprQZ7bZwmUQwRPpzF62LpA",
  "key28": "4CpT4JdSTSk59yXocFyGcN9rQQV4DNEALdURjbuEZ4ursmNGMAorHqKsEUT9apczRGgvCNyMRhpzsCRQ884R8rym",
  "key29": "AoWSopCszh4JxhEUuAyUmk7cXGgLUw136SrzTKS4ry9pKX1nWsFn1eDbPMgEdvfQbJWCFR7gyBpSrCkkioDTDnj",
  "key30": "5axqpNLK24WSng8HoyCBEWDJZeKGDZxSQKw5ZJUuPehuY9Jvn6dPzdmkmamwuMYzSLr9PqzmdNqWTbEH7LYcGUdU",
  "key31": "Nw9NiknToXCutBH5mCo8GnrctfTZxpop1ndFdzqpSiMe6zhhNHF3Frb3VoAjZWFZowqLa3Zbn4yc1mDd6EC2L8B",
  "key32": "4YEjS73rEcKLpAxJKFg1FxGtL2x6DgeBf9cV8T51X2gJugEL7H27nUaiFgrG4paudmdShLkYqeeLQWtUpXWeBvzE",
  "key33": "4hu9EpbsoATSWpxvvrg31HJTxwWJWoDrBMNiu4Aw7eGpdpPQEriRnTdeRjZ33TXb4mXPgJAjGyJr2fijFLJyio8y",
  "key34": "5MvWnJNYxfXqCBBrm2omHJG1XSgyczwP27eckEwgjEnMaJgQSe86seCtEKLcSePwrrUYt9CZJrHJRX3Z21LV3Rir",
  "key35": "2Bdj55E3NeVSMK3WjjKwHDamYpL1AcQPMvYK1qkX4x8PgTos26iiumGYgoBS9hXZKtSZrJJ591k6zFzfAKdgkBXH",
  "key36": "5uMqSEcWbyjHvrF3wymwThR6pcHzz9ke2f2eUQK5uHyo91EWgBhKiR91iYheDLacpcs3Pw7ZajvGXnwmpfKF84w2",
  "key37": "42Xs78oie5amU5ueaJbi8CniG72ZaeH7NudJadU2doKpTqsDsYzFwfrFoFaCHMDNis7LPrwRcSSwv6XoHwrC2aya"
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
