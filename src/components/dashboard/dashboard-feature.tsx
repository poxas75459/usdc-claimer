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
    "438zCe2bLcsvHQ7iMVYMZmJP2b9cbgFj3z74vb2BXxbpJKXM23c2nCSjPTnjm1R3DKd6aDPK98cbHF8CFRwL22kM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rM3RqtGqtAwowR2CK98y41gFWgt6QDh7YnuVQcjsc1j42b83LGY8h49w7sfB7Ko6QmsiaRRvVQN1rMEr52GyUm1",
  "key1": "21M9bjUS7LxoWjLbxYN7Q2X1MiDADHymPS9uiUZA3YrH6Wwb6Z3oPfusMEdiVMVmojRaEW9UaQQsfsXiUXWVVitq",
  "key2": "2JgmQXYLLFDBQjD5JHX1gQRWLuaBDRbd787JQzodTP3hovfVerfHj1t5XCnh16TVqkZxqgmAT7rzqRLFE9n1h31a",
  "key3": "2XCkikbdRdNiph1i6hRr97P65QZ6UBvr1kYKP4FiUVFRgh852N74ZM1kMPBZN8rHW7fpSCibhG1hiTG4JNXsZcFa",
  "key4": "3fKtJtmJLrxT4Fwmcc85AzDmpotHgiBaKAg5Z1Fc2pw3t9NomKeq5QfS8zkBCa72KwcqhYX7fBTCWZVt4YZS5PXr",
  "key5": "3aDqrGPdUuW3eMpgZJn1jhS3gmAz9vwnn12FLJDm5arCxnx2SVAsF4yzQ1sxy2VB7aAaLevsre9ra9JqdBVEMJLj",
  "key6": "46Z7soDDuAitLe6GQKLyCo5NXPkoNasHto2epQ3PuDt3XFSTKQGfePh3AwRht2P3QGcpRtAcRwKG17LLYmZymWzv",
  "key7": "5iQSLAdtpdoRqJumBjNMNFFxznnyJFVsKY81mocV3r4gCSfL3fGF2jd21TcMr6HvTRMJcyLtBzYBMx3bzVuQEr2h",
  "key8": "4aovHRt1dU5cSRQ2DgRMav1YiMFeFSby7b9zKAaSDxtAULJJyL6AgHxDieBBr2ptszi2yHkgwKwGXggjZYdrS6Cm",
  "key9": "2b9T9onoEatcLMqBczgex8kjaMYH3RvM24i9GRekCYhXSBfySrZZCPxeFcrzzagvFxUwmEck8FAWnxqC1sLbTgkh",
  "key10": "3q8JQR7G8ncYrhWgMamDU1cAXMwqRaeoJsnLdPEhWAktAGHVVP958SqLMpn5FZBt71sb7Ns3NHhHfvemCWQcxL7t",
  "key11": "3m9SzMWzFM27sGgKXTX9LUS8Ay187KqTnNdd779sRUE8MGucs66dkrGiywn3boFm5rXCG64kZncZtX83UhdnNyFi",
  "key12": "2kHX5UbgBUw5WQippJZ7AtuQAcHZbFQ5V4PvStTWMLCXUSwEf6vraS4z8ouyGErzvdc7kRt6wUgjckLC2ZK8dJ2b",
  "key13": "3SMJUAEVX8icLbo3dPCCVDZKwUz2m9TjK7fH46drFzmJ39Mv46vCGamnzFPsTEDeGd8i7UDUXize23jepqKb3Fki",
  "key14": "3Dnp6V6MHXCiiDvgK33FixAJnL212HcgqGe3qA5Cw5gpGcJex1b5g55rtt8pjnf3FViqRvi1RV9Fb49BpEXtkz89",
  "key15": "2H3yeRUe4RLi7AUdR4mMKNfzVhnqGxcQ6bUuC7KD5VKry5JWDKy8BTScx12pzZPYjjLKhUoU98AVtwUitJAuuKXY",
  "key16": "4VztPMzNSb8uFpt2aLc44hj8DXBWP4mfFRQHxGaYM868h2C7QRPMEuvvZ837cWnbPeE4Z5AihBEnnFJirWeNaS2H",
  "key17": "4ZDE3bLERznM3uZGFCxeLHH4og47RAdD6EbyzbQEa7AxQnqdmR7AeNnrDT1motYrLV8B9oNaDb6dKzT5ANiHg9jm",
  "key18": "hDHo6DfbjFVWPvpgctXpPUrV7jEeaHYs6fTMJaUhDqXRuJvjxKDA98Tr7rW9H21o8XTQzRrNhTCYwhPUnayPMEx",
  "key19": "3uM6ZtkssTPcsLVDJHVzRK6YwhPTapThxQ4qgEmHHXTDSw9WeNxQydTDUkreoJPY1i2HjwMGA4ZubnrHSxPGF7wL",
  "key20": "4L9P8vC9VG5scuj6FCRxjBkCTnYa525kRtpVWM4Ad7iKQ1z1AFKsvnYMTdBErUdGoVgVWacCwoTqtbuaymjT8774",
  "key21": "yLRaL9gXiQyKVyHDSwpFZC5tg4Mw7o8R6Xk8eeCEEJCUz8u9HJXhH6sCWj7PgMSj6UCLKN8F79YVyVffVKNxC6S",
  "key22": "5k57H985aEYYiLHzWMzVZaEHx1NxyRoFPLa2UNfGVFKYnFpzue9is8GcwNAbdvkf6mys1FGZBNRmxw9Vp2rXWu41",
  "key23": "5cHxUeQ22iM3zfp9zpYZw8uPrJD1mx1rsKmrDRJgfF6EMgM67m362WEnovghAbtncgcEk2zoVKNGcHnbwMeu32gj",
  "key24": "5wzZw42tfj2kr91gHTskrZZzpo9S7QmESxQjqpzuWRqD6eHmhyd4C59RoqCSqs3UJH4yCPuMGSQNMfKj9izA8G7E",
  "key25": "3crWzXpEzFfcPSDRR9L34qsJq8NnF7MNLDEdKzFtEfH6HPfqKBEfNRdxXWPQnLEoJiQLZELu5RrPeQ7BHkhK4Lg6",
  "key26": "2mfyNqaYatkTbhd4gg6Qt1p812XwPBo2v45sggd9N9UVodopbiwPZeDUVH1dkNvJE52fHQWD9D9vyi7ZVRnDxYbh",
  "key27": "41oykf9UtCeWtggxGu2brtgoudikpeifK1osbfs5fTwJEXJP7AbN81cWhcCc8WM7kKQNzZG3pjQ6QcUMqW5JoRgx",
  "key28": "5U5NBKJU86MYdEVPwHazUxgAyNvPKjVdLiBvknDyWaMGoXt8jU1r7Wzz986D7Q17hFQLYGiyiCbZHTczm57iqBLw",
  "key29": "4QKWVFtSBQs1P4D1UKBAW1yny1iGg9U4AjgjaVDjHFdohde4jHQovHvj8h2GVZnFgA6aLq7yjdyvq9gh1hchceGK",
  "key30": "4aPSqpBod2zfCb9iEK2CmDcMXSc4qBSQBQHC9piyLMmBwU5rd1Z31sk2sNPYDzHNWMvC3CKLssjMhHZ91PSa9vxv"
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
