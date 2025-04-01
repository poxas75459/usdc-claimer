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
    "3Luxd82mAMdGTgHmoa33XPHBLbSZhDDe4CJYsdBds6HrcUH7N7W9DFAJL2hK91364hUzYW2c9EHScsSYEcxiQoZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ptfQ5WWNFzgd56U4XXwpJSiNDtkvhjHcVZT2ErBYYsoBxAepgQr8QfmEqzYDbaSVt8BFVqNZ8fBirKzQhmXwck8",
  "key1": "2SzUHnKRg2V28h85hCw3C46K2dACjA9QAYzJ8Xx5neTFs3BxzrzRCnKMfaVsexiw1AaB6pa1REz3PomaerkkoLXh",
  "key2": "kRoE6nSUAx55RQyG4EXYNZQaZi6h4N4vvyZtddZdVk8JZxw9bZpWjnQYUV8QJYCqbvEbs51dxFzBq5RJm3xaLm9",
  "key3": "3U5Z7TZ6uL2hD6iLNcjuGqM85iSgQpBkLUc81VEtHz1pi7U1Ts6zwtw1cVNhk1P2M64E7JjNk6R13e9CUHArGyM1",
  "key4": "hvcm6RBPksKoW2F58r9siqCNM9cG1SWz9g4BkMMTntGXHk9GWM4kdZmKMCcFrQBKxn6LC5L4PbbkrtbkhqnVc4J",
  "key5": "2ooTLALk2zEhqhP8Sw6fWWnDxgNQYXUbQFo7mskV2RmFstdonQZsjrRNSE3U1m6DkxHNi2H8KnWLA8zfjKDUNgfb",
  "key6": "4tvmNbUM9iwn3q8JnR3b45N95Th8nuawuxKzJ59YwU3zCLYLQuGVmFqo6mGTN1Ym7CpMDYfqcRP17ZHusSvwVMzW",
  "key7": "LDABrS9ux23ykDjsMoryTnrNpuVjHxPFjJdSGti3wdUtutzNxNme6PmGYhbZ9RegykcSv5PkwCttJncVE2GaNst",
  "key8": "3mJKaJZeKAQH4Hf2jA7y6zsNbB4ARoFvPEDo9J2tSBhABKioN3NFAb8gNTHmXr5qNjodxLvNhkexFBfmRyC4ewTn",
  "key9": "ye9cG1fmR7hWxU7J4TNHWTuESdBmH5hsKTbWYsFn47jjMdzkxcs6GVjCfM2K2Fgz1zwfNNMYkw7LxoF132wqkFq",
  "key10": "5TeqiZyK8SPrw5rAqSrrWZuee6gTERUq5AD7PPmQpjbR7PhERHYsqtMj9vMQ8WtJfjiy3F5661JnidrHNdb4ADgk",
  "key11": "3xBYftWBNaKKzXeT71iSkUayFyrYRQBV7f2N7csMxH6oYKLAUwCuqDYoQ5S3JEyNL9zbzYutVYdaSabY8bFvmLxa",
  "key12": "fjscr1Sd6e1e783udb4YkHG4B13oMsNEmYGrzFLEtjmhBHYoinPN5QDU65NpkzH14rwPjXVcTkC4rLQiq8pGprP",
  "key13": "4L1rNGCHzspBaCJsPDWzZqh5XQ5WQModvu9Ur16QNjT7VR56HG5pZYuARWQugZjv1vrvUJtwBGznqc2bXhpGp43j",
  "key14": "3ES4SZUSaTSHiFCdQ5cSzcGXATyoDk9WEb2Fr9YszcyFzGQDRFsefCfkppWrhf3ZRmJE3Uxqnh3LWHva3bD855Uh",
  "key15": "G9Xr3Zfn8eNk99xgDETazMcdg3fkPTjk9gksL5EB19we55NJ2z2zQAQ2imJJ8qDpuGJwRY6PxHBVg6cnxB56MX4",
  "key16": "2UGzM4FovQjG37KVXhDwc4EEoAvqyxBRyJroSnP2cZCHmY237mNiyAFWkaKCuXF5sRMPPgmLWETm1odEwxenw3H2",
  "key17": "4CFKLsv6gnSvFJQcRYhPVoDnvmZbaTRdT9HwCXJZo9jyeuMmGf4TKse53hoYUJbo76LaXA9QV2GtFRvHmSZzLgSK",
  "key18": "3cYA744WS1rTASsYS72QZ8xJHt9vBiHyQG72YXqVG3j5EwEEP75wfX5t52zoQue9xXjQ7ENYRg5SFZs5TSnmxufn",
  "key19": "j7hiuW9rnu2PvNiA7uYv9WyK1wDeikb8mYHbW9RJeL36X94AiszNMqPGzEbKtWNqD1s3AXXq5J2KPeh4upkeoMx",
  "key20": "4myPEyRuwLBVVR3wXtiApvfEwbLaZPAiQVgL9t3sk5n1raGgTuCz9qjjc9HsEBgQCF9uFCsaxPuHStZox8CRLnmt",
  "key21": "2Ld8Z6riYoTNk18XPz1x6qfgctbYJJfb1i2JZjHAoQBQz73joAZC1apvUyPLL2ekXV8xgEgKLd4TwKVoVQauJT5P",
  "key22": "wF1buDBbYMwzpTW4ExPrUkS2ELLzUCprkYhtXPLTYBLbaPPNv8ea2rzz7mHeakPi8LzfwmnZvCWjy3XKF58Za6x",
  "key23": "5JaMk1xWfoa8cJKXdyERLqjRsVtLqTbApz4hzqsUGwQsr5mKMyY3XgyTAqWpHsZ1RyDM5rZFw1Rc7eG6h1vnAfRq",
  "key24": "mzndESFUxPKpTARrU9h5f7B3wu1Ab7dQToRu7d53azSaGHb3Ei3JhH9Byh9SnftH4nSnDy2GwHQDzDUgCN6FLnv",
  "key25": "2KkNoHKs8YP9g4NojEAjrjJNbMeyPHEmVQVQYhbqA14g8C7cUwqCZWAPEHTBLGs9JwzbfA25GvtKdzEywNUZ3dXE",
  "key26": "TzLV3vwCPbP4fkM8nHwGZG4QUtCzWWAihv8w2o9iqdL4yjzgA6tYJg8MTHR46hsYyiou7AEapUn7Qze3fjRn4VL",
  "key27": "32RP7mnU3st7pxs5pANV4KNBjHvjJuBaHKTZsT5XWXrfAqGJzsuXo4fQAR41Zgu8jshZFkftTbLUPGbRygqXhy37",
  "key28": "2b7viFngysuNYvzGTF49aEoXL93cFbBQeyksko8xKiZezMFAEncZ4pkEVsbNA97RPAQoKn7QqXyC7MFGaYFobpfd",
  "key29": "4DE5LJryTTqFNKYipT3jG2zqa1cELzqgu6WeQQtPPav4ktDMeFq4Up9QxitgLN94ANmeAANfedFEnidk9pTScD63",
  "key30": "SR8EzppjUhiKTYLPnsDZh9yK1BdwQdSZaxBQJx1yNdMo3MidozqWnzv9VdcsF4ryaToEMTszei4XY39e7Y1enzJ",
  "key31": "5c5C17TKEiaHixyL2cvkpgQkMvYkWKhAJDVmZavYgHj8BPRyReB3S3LQH3xZhBzarUderhMrbP4rRPL1BQ7XmYzN",
  "key32": "21XpraHDkFQKeCdj2N5sxDfo8reB7Q5Xfv4hwiN14avQ3GEE2ZKaG3xUxWUXzBYZGwFF9mAkHQyKrNd2DmzC3xFP",
  "key33": "3Cz89ywX7f2RAuUMEzLWCcZwrNyXJLTBLDUJhUhiTNrSvUruPVrctbVp74i8FkFcqRKXJn3NKxKrqtxZGxrp9LNA",
  "key34": "27Unz2Du65ABourPtPeC1Rez289Cem9jaZEWKM2noQCprUd98Mj7VhXVv5XjYHBUpT2FyzRFrrKj7DujQuABkhba",
  "key35": "5fKVhyaAYDtSVDSwKGdppWdkdCaMWVMZhHR2q8fw457bhrHtPNxRWRpyBWGUjaTzWFxvk1734B6JYc2Rs95GbHfG",
  "key36": "2fn3L3uSEafTkU1VxLRMPDjRsMh9zTdPknHsw3FvtTEn9Ru4vKDNtHDvjHzDd3ZGmQDWYQF8B2GfSZgDA9qkuNRB",
  "key37": "eTx2dMySwHMacvwNcK1chxdVvJympAiYNFfsffLjVkkNYBXbZydGoaukvmk52fPSoKgtp26XDTzi6qYBppCm1o4",
  "key38": "xiTPvKJeWu38NtQkZSdQmK4eWXwVhcAhrv1dCMBLLxYDcRFoAWWMRZpo24vaPYENkbF5c8sSTaj31eCZzCg7ZQg",
  "key39": "27oi6ow7QDvpqtTJYzsGdkb1wnK4gHP1tnTyZeUcJmGNbr1gMH4WUPWoFXESajNPbcGKun79bPArKVpfs3bWZsWD",
  "key40": "4QizT6GdqXxsGYJBURLXY6ymofAfg4cqC6TtcbJ72HpnZbTYf5NPevmu3KJ8xCfe1pZMm8FcDs16XNKwxcCkKDoG",
  "key41": "hsnCsxKD1vR2g3nWDbGKuFeVxuA9HQgXD5JJTYuRLPZm83hZvKQZ2Nw5Eiq26mWTT7dYezL8ABM9spY6rQTHgAs",
  "key42": "62ihLM6jSkdFgSH3orx7xD9Q3W58yFdoA9qTFpCnDGfQW37vKN3S7szPe5pjU55NY3TQVGDPiwMAFShRnB8yChec"
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
