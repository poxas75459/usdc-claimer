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
    "44k9aQqJjVRr4kSK71BUYVYbmQY6wVXvd9xNU6Z6mSqBjMX5c5udaanpHcNJ35Wv9ZQVoGcZP6Q6qDKQu1ejCMz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5X9vQskk9m2s4JUPP4ctFhysQiT84KK5eLzWrNRNzzkJ2JhBKwwNFgp3hoDutuTyPB9n4tVXtG88dGvBKtx9rNkk",
  "key1": "35EW6EgrAX2s6sfqdUQ4NtH2BezJUHCYqAeQE1Nz3NgEstSBEtL49cCi1yfwAaAn8nbd2sbdoYef2FZJUtJ9jjkY",
  "key2": "3siN1Q3Gkia6K5JMzrQTk6dF3WBGSK6vY64VjjWvhgEi1FYJgrhALcuuz591XdrjEzQzaibAsBLGae2uUqJyK25n",
  "key3": "4oAVLq6MY1V5hLUtKqLr3eJY6i2ZfnSrdeVNQuqifx7SSA68ZCdMCEDGAeGDFo9XwhNkTHzBLwVnrzEvAZwSrbN3",
  "key4": "giGQLKcC4APRVicAD1aykdwzcYb6DzpZAztb3AvFEwkJmFi8Wp1M9Na2Eg8pJrKkJNUcV4HLETqYW9vTYvQZPyx",
  "key5": "63FVayDqX2SAhoGPS5HRkE6qt8FUx3FtKhf3NH8SCkDx84d2ck7umrovM1bNi9SEoxEQM2HWMY3q9p2peEp85oxL",
  "key6": "EKaUs4Kwi3EAbcUvSwFCYpASDbQ6oSUvYCWa8EVyKkkMPEUteqi6bfX53F4awGer4jKLvv2QiPD5XuZ1wKuS9Eq",
  "key7": "3XrbaeAK4gwG9LZ3Wtg3tLgX1baWYnhEsjnRc7Ffk4gC3AxcQoLx5W7qtSHXfGu347YCNQcBLwiZNWCny34XLrC1",
  "key8": "54B5qbhpvEjw3xpPWDrSYcM5nUTVzN8wyt9fTY9DL6pWsvwigvbsAQtwQ95mQPeVQZPUhuUgSS1TcQf2SvGbwC8u",
  "key9": "LQH7W4r7M4qwXzySu7rYurSiLpTtx2fjLXoEG4YdixLZM6RHrNWDLaCRV3ZPzUB1V2jueftTvQc1WZS6JPkKyqJ",
  "key10": "2eR1ywJwz1fdWLpHAHA4yCg2BQHVSz4Bi4EwvsRvDtQBR9zStdSPX67pzkzPAtThZoKCER8GYZD9xa5BN7Gqb5oT",
  "key11": "5ieJtyEuh8KPSNLhF5k2TjkSYu6VV1or2tDg8ULnJoffbW4Qt9zM6wQ8TSJkJhdFsCjE3D2Vn5nsiERHAP3Mcpah",
  "key12": "4xCE4L2CGewWFhNGPc2HzxQfsgh7Qwi3a2WTF46BdM2hX8GeQtBtMdwUUKuvbNDUE1tQmvPH8oxmf6C7HhqUXRjY",
  "key13": "3icxL6ciqpGfgWK6ujCSPkWmN9ZgNykmjfNU1CFQokNwaPtP7vgf2EJWc5EPVGLz5chWSRWwxWhrNTctMcpY35s",
  "key14": "2gJwJqTxUEXMWicy5Rd9KLEtSnBARgSMf1qmxQmYvT1HoT5cuofxyfULygFbNUBeTmWGc5Q97cgtFKqpq847PAem",
  "key15": "5xiNZ6gEHp6JYTwQhkPaaHcb2b3RWzQCQ8wwqgg9AwHwKZdWGBSL7moJqTfMEqMoekhF2ZmzFQ8oKGmDpybcjomu",
  "key16": "3Weg7HDpru1ajF5yn3bcg3ZwtwWWVRKLGJ7CnUxv99aVVJgbpR5hmg2F6cXGVaFL3fLuqSFgpq21nctc53S3BHgU",
  "key17": "2mtjhRow3bRdZP5JZP7oXE33m3Pqh5HCT3hDmWpXJtydNTuCWEEA6f7JoRiJtHjqFp51js6B6gLcMVoTVj4ArDQQ",
  "key18": "3KddW42m5wUR7n9L1PL8o8Esvo3P9bbvaWosek59uDGRcF5kt4gFrFdeE1a5h1BdSkjxim4vHDJBjvzVhTtVhJki",
  "key19": "5inEMBxaSEwn5fFUgjQMdcccPScf6GcNQvXz3K913GUuBLFFHyjhUqCs6pvgAocrfnJRR2YReRURq1cqp9MKMtuU",
  "key20": "2xgpgVqCo6MjxKs8LkoySQxuDYAJCAHZFFqm6qPFUkvNAqEDhgNejPN3dB3saLsYrCxVfVFpWsCsaLPPoEwqVdFz",
  "key21": "42QVor8UGUzYQ1fxtLxxpd9VKy1N4dZ4fbfKx1VntQN6XY8YMK5vXjLeM7XURMoejnskhcVYV5GkFvFUXJpkqYsH",
  "key22": "fdwtqFFHX8bapNMsMCvf9csoTs6muMfT9DgPUQEWbYtRxnQgVtyFQgZMWtPC7UMww9PcHa9AM3xTsUxKTaxp8bU",
  "key23": "5MzCoWY4EixoHCPT1mJvhomH2uqa1ZSXbvhbN31cTWwT4qqkCjzSrJN7a7CKsfTAoUYXTmPsKjPTQzF4eJqdS42F",
  "key24": "5CT2A1j6jHSV4W8dHUDroQUy462CF7PsjQbTpQzE6DVyWBRvgERfhaeaPBNnGnd8NsCHMa2kK15EE7Jy4W3dKKeG",
  "key25": "pY2GPMokqY6Sit7wdfrpKmXrXSw8CexuGd3HGfN62xZoBaGWGe9mWNz9i5kQqxnwHxGiyuAHja4mbWCtAmm3Bat",
  "key26": "47XTLTpvWASktgCFJMasX2LNtgcu5woKW45f2xanYe5BRziXQKBQfF8q5oaeoKxF6pVFvFEfgvHsb9Co91BKDhRF",
  "key27": "34ZNo7EsEZM96mEPazYaSjYZk5AQTnpKDpnhA7JzjXHiSK1f4GKiZfoU2N5Fx5zLU1iexZyvv4F99wfDGD9U7DML",
  "key28": "2uGzs96Wr8dQ4ai15Y6qkgqy2iEV2xMfxTRpaXauNMKKwV6MdoQNcYbs1GReDw9stuCA16pxFhVnP8nwBeSWCAbp",
  "key29": "2uu8HwF2MrwwL3jM2QaFQk487QSZznrScXENCm6ULvHqboGy7NQPW8tbwNYzpn1FHMwnZgDX5v9SNmo8pihwnNkN",
  "key30": "516vbr983gcNMgq3mFBXwSfnPeE54aYmTdZYbBPyvDXEJevJKJi96w3fFm21z3GdCpov7Cg4rER9pr33nz3WCgDS",
  "key31": "5qrC9Q6b2rMCoLHhw6zc55s9oX239E25F8JkxhHHQcBpaPdhxjFzSYZcX3dRJNbb5QTZCvJcuPwUxtAoBX3H4TrY",
  "key32": "3ANeBFZ3jnRdYS7mtgtfrnqkbwEYff6RvsJvC7ynRQBBfZC54MqBtwBf7EJgLao4yLtr7Km2ZNQHP5c9Ctba4NXs",
  "key33": "iFKvh9abeQrvJUGnsbrWMzezUhqqtKR38eXEVsieT7aRBH6N2KxdXgaWbcMBVb5SXrFRVBfzxJnHsp7TGqE2TQ7",
  "key34": "5NAcdETuaojc4m42CoNZ8p5CZQuLBi2RC54WLLmReGEjepsiUbZQwfT1yDoPQhVWt943WUfbvV9xFRzzwNxaG7Rw",
  "key35": "3C4dFMjKR8yitfF8iSkKJgZd3yazsyqb9hadFzjRfizHFLbsJ2F2e9Waf1ceRDNoz3rcxpH5YVvEyrq8iMYxrzPf",
  "key36": "2ii4oHirnU6MTVW73BnyUcujDsuWqyhrikhkULndgaDdS7aqYeBwWcMX7DwthTVoQ6o6XrMrB3HWdtMViU9KBHVK",
  "key37": "2FYfWcm73vxyjAJie7vx7KRYTGjDPcNWTG9EFrqvHK7mqMEh2a3UfTomEkoZ6L3NLUSThg6sg1iuzQhd5fdoCEeu"
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
