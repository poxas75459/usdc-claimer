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
    "653qL2LtxpM5mNr2BSyyHdp42S1SGvDfYvQPyJWkWmxGvBThkQuRK7tk9LVo2DutgnsroPE2bqUMUSZqEXarVbLu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EZXkCn4HoGYmyDeCXM4z4GNsHiaKjri1EQzqtMYap6SB9CLxxd9iAdazhhsWcg24sa9Vmgax2gWnrjKN9KkL7w4",
  "key1": "2Aj5LWdTkmicyCWyQSqzmUqi5JJfVymqk3rdZ85DHGnLobyZwM2VzrWCthVmyM5iYRYNXwRCAogGdbwjuK7QWuGz",
  "key2": "25HyhhVRdBb4U7n4FZmYrxrbKTTXvHU2yWt76kHcCEvsYjoW5PXJeSqDHN633DU8K25Lzi6x6phWFteQYAozWpi7",
  "key3": "61PikGdr49Ecfo7QdZkrK6x9D8VE6cHriLc4K3sC4V1eHXNiBi3FEQRa3x6VXrkdrhrdKfvV3G2n7FcFJCeju7dn",
  "key4": "59xXF23ruRixZPNyMokyFqEmXszGPhpt1t985D6N3sdJ1oqRmkB2QtPo1Su58LZ1Qno1o5g9mtKqtkVDyaMg5unE",
  "key5": "512GAp45fJsgBwPhEZthqUctnqxDBt2WgRr6etX9pCNgRiiHgHWJ5gv4yoL2UKA8P3FvctKamKe3nWcu3ahfaUW5",
  "key6": "4JyrsjK14Y15b7Z5pCqRHQceiHdFirxZos4LzjXQ7pjnWPiSSbwbWfTq2jdU3VSd2zjNQ6M9ezooPUuT8L3ki9n",
  "key7": "Bb61mmBNH5JHJC7qZakiqf2Sn3tmBWotHTJtXwiZT2Fx9X28Kbsnt4pm8d76YZsi31asd9WYp5QS1vXftUNVeKo",
  "key8": "3qX86cgQxCTA4t3jQ553qg9vSU8VMyZ3DmwoRcPtoGU6huhikCosN86kM2YZzBcp1wv2mvjEyELxDAKAd1SmoHju",
  "key9": "3NfvrVQgTRZnpR42h5jMVLvK9HjfoSXzbrXiDMaXyaTXbwsEYWaLQYoCcvpugEdSZeCfyYQBnn1dUMAvNh1aqu8f",
  "key10": "5XpXM25Y3sAuK2s2S6My4D8BXgbmJ2jhDz6C6NbadwH6EeeKdHUDDEZQ4YEE8cpFkXhVekpMHD469dpmmefSdCNq",
  "key11": "3nWHheSKyBChtfCeAMxsUoJiZ6LPt7ADNnLyBDUYKkHcayv2mdqbZwfpyvuADhsDEprDddt1nLpyAKGWb73wUXzn",
  "key12": "4SToGVPSMAdJSuAnmSEY6YKRWcSoam37YNivS7bF8EAPVonn3rz9QGKchLTBYLKpw6SeciVrNBbRupcKtYVtM8mY",
  "key13": "2Joagpexxup9M6NX9AgyN1VFwxuDG3RExHJpCjfECHwUwB6iK12zjbvtPCWQLVqwxHEECaEDrFAjQgATQC6sdVJF",
  "key14": "3ohc5Gyuff3VXwPbvEDfy8UrqFxecd9syMnTVZPfj74RQTjKwJFC9Lfff5tHL84j6fQjGndh1DmAzwWsB56j7Fba",
  "key15": "5TseT2frwShP8hPxjbr2cNddmnuSimiCGetAK1uWQ3LNA1SnAtwyFaGWt45Mwn6yJ79Yj8ey5s6MHqnr3MYRBTqh",
  "key16": "2rUh5cPFojdBJoj2RtUKTMGk2Q8xMdpqqzLaqRXZxQDQYvRNnmNihxtyWAiJCvU53vjRd21q1H9tE7UsBAtBqRSN",
  "key17": "5kMFddWRiuE5ySqtXx7RBLYgFzMPoUQ7PkChAF66dw5BrYtHsYATfWQGn9VybbJTuQZUcr2ZtbgKZ3EcrXVturSs",
  "key18": "647qbjCv9HeHGPyrLeA3kZNYHZMo81StkuGQn1wrkHXqP9QKrnorrdaCjU2w3gpZxtCd7MhhNKwWCJij4V7vxyCH",
  "key19": "4yEHyAT2hR7zmugSipsrz8yJ7LX5qpsGNWV5aJJTkx3QsvsqPSAJTSzfsMSmWh7SSv32i1UBqZCo4FJxo7TpzazS",
  "key20": "4Yk6r22kKcQxhR5LrZV1j3QLqZQzUB72N21JRyrRTq2dxnPufYC3ZbYfgTfEgTypruLLsKpXqx2ZQRPZZgH5eF6c",
  "key21": "5htc4aeha9mD8z4p13m7JSi5dxQ7qUt3N2sQYic3ppxhXKNcsKFthD94VyWPyS4KedBW5EVuDujpxJwGM3tkeFZy",
  "key22": "ZQbytBCyPhbtaP3FBckn67q491quLxeGuoBTFs8TCFfsrsoMxRsZptzLRNvCrkB6odsPKLR7nBfikyoQiq3zfC1",
  "key23": "1QSi8SaPhFbazePYt9swYwnrY1EFdDsokxVmMtxvGpZaZSEddaS7HrvvUHJ8WVkx1MYJF9zEa8uTirTMiEMDsJC",
  "key24": "4oUThRyKfgh5xZ7MYjrfH7rjfZziTe2emyJZLFNAUjf74uGWSrvKxuAtuTyM1ZViJ4VcPojPdTZZYkTFSdtnnBWG",
  "key25": "5xQu45xtpjnTP9nuPV3MHTDV2GX4bnEanumBRFgAGrTYaKaE3KU8RKwxzLJQb8W1uMSpkYMV5vscKn6HfJK377kF",
  "key26": "Q7Eu6EjHfm8ZMFiafanuqQebcs9As9TnrPZFSNY348TThNLUcnMjjF8N9wRcqdWTbPzWJtxYKQAvbqkE64ftD7n",
  "key27": "4sziup2Tw4YKMvxiFi5Dfv6Rhcd2PFjJDXQi8i6ogbEDhL1TFoTNZCkF9wxTfQXzaahYCfgGBadwvXaJKraEmANr",
  "key28": "4bZuKp2xtW7QpfvF3K3fxDcd2TUDAC7qpFjUCKcFkGZc5qPSXMcVvQzwb3mVJrn5yzrfFgLACUqs7xAp8uN9Eied",
  "key29": "47eZz8AkZajQ58JofBUV9xU7zHH1yPM9kguKbwqA8EECZFgA85LJz4MZ6oKbwcRVp147631SufovQczZYZe39Rqe",
  "key30": "4kRxdN5HVj2UujDU41rEg7tZCKBNY6MKHtjDZvSTeQjmB3QecY8SVkDnwqH5B6MVAVmFxu5dBeH9h23jGbXZ1L7i",
  "key31": "4giouKGba2voiZtoTPLJmh5NysixkoXJeVRv9EigGHHEX1ax15Dm3pVo9Jq52mhFn1mkvmmgXGXURQvNsUcz7Kc",
  "key32": "3Sr9ogqX74pLKWAZhCLJy8zoTBRzuDtFyYLzuYZqiomRc4Ent7yUie2Xs4HSYEJzjYJxMiYEuSggpWPz9tBdKDAH",
  "key33": "4yZ91QkAYQLWnLQqeMqRCoLaNxC1EBSZa5YNSbL3RxT3PnkyyWrpnJkefPh5p7DyTwvFaeQoUgF5LTK4vVkBzgpL",
  "key34": "2y89QqJtsmm57gP1EqtWe9vmBzKBxATwS6bGRQzpSLgmg5v142LH675927id1oshsBsW6fT8m6J3QSL8e6cCyWBk",
  "key35": "uffeLG6qbWRQMk1ACzA7KoyzEDJbfTE57ibUq9jEFibo958b5m3F4ZjjEtSBxXQFurXewdwqNysea5nEYDvN3G6",
  "key36": "4uSniBsGYCDVp8XXbFAazds5JP7rWKKdFXtkx1gri5pj7rWE8UmzhpAZJndnnNPXrwUiFTUpiLGHfS7hWSDHvYfg",
  "key37": "4kbMVWipeyWqrHxkRjB7FLHRTCkHU29V9gn7uXKG2AvmL756EvgyYh9PgiTkpa4ZNWF9n3SKMKr8u2iUJL3zBbMk",
  "key38": "35m75nnYnwr8P83euwza1akSEWrk7CXa4g5Hja5VjkUdFGQsHj7qcoabM19XZcxQymGNx4WDXJiJyJvJZrZBbBMe",
  "key39": "2J1fy65UHiH7u6u5x8q1cFoVGB1sQyAXXsDJRbh4KvzYmfDNYnX2icUGt57s4JF7svPr388E9JzR1KS8Pk6edue7",
  "key40": "8aLpjrbJakRvBxdWBzJJcDRqGXLqBwWj4mCEftvDyKbirPn8WJ6gyrxLXcWZK3YZVtdH1TfjgSRkEhDjAH1sAnf"
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
