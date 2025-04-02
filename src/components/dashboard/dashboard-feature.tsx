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
    "2kinkrePkxbfTPpkjKwfPCCKB7rbQs8d886rqRvV9p8uS5H1zKb5sUzqsAF7nfN6Z5N89xaAGcJSnNXqSVhUY3kS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QV8kEYC6jL3RuhMyQYjPtHgJmwhvyCs9umdYBt5ZSuXFnd1tgQocfdMD24XuL4TEzFvvbm6ecETbJHasmXDdgsf",
  "key1": "64HqCvWnXaV7aXQDNdxpbdu41JQbe6YftffcwGNANdv8psf3Y71REWKk6fH6LhzVB5nTEjegCA4WFicNKRfrYMHU",
  "key2": "BeLqq23EN1WCuwSccLJMMEdf8w42QKgeXE9HJJrz88oDKDi8jwjpdQENkRMB8HuqEcpmBQW4bG7zyFUrncJLUY4",
  "key3": "29S9yKTviJuNsRH2U7deGtA82iCFYaUitjndr6D6xxCwPgYuWWdcSnWNuDG8RAB7uAHnUPSsZe4m2Qyawkt9m8QP",
  "key4": "sacXdak8Px5c6QTzViUcsT8GEBH3DjPzXPMPFGTqXxnJX8qyh3ZUDQHYQuoCAgSFEJowZCayEswUmqWbJFTTWMF",
  "key5": "5gCKdFPwQehQLBSccUqqc94yFbaYR3dzNpW81JTtje1LSP5jkJRrbLZ9qwoiYm7ypfceig5YjQTgTUFuZuuqhN3f",
  "key6": "atsFE5qpuA3u8JtusijGB6KWEnCbvX9CFkeE7f4LyyxiTgazdREiqnSmVLREcFPt1DFteXCBHJAkyp4txuXdtop",
  "key7": "4K6YfeQug5nCDg1RS7CZ5EMEwDnFUGyJN2TGeg3FSwB2jiyUW8FsqfvVqiYFA2GzeUawhhmUCM2WJQpmcVxR7LKB",
  "key8": "5qUoFauKbiUwaPTBMaU4PGw39bBQnDEeEmaFj5Guqu3UuyHYiwbc5kbBsSNW9ZWWFQziTg8ZipD4smPimArY7U5d",
  "key9": "5xoKTFM74BNn4w8cGei3sH5tPjhWRSPinC7XoMiHuaJNeAGJkaBMV63ha96gNH6R5H8dodpEiBMVoRSPL2GXLbE2",
  "key10": "38NebiJsyhsa1NAi1UQfDALia7VZHhdBHpq7XZCcM3BYshsXgEY1PjT6sEkp1oN5RPeJuqF4vBnDJSjcuDoL2yV8",
  "key11": "T6R8koKJyJbdAKz2QVHs53ninFe98voeE8K6KUKHz3nZkcJUKjU3TDuqy6f8GUu7g8Zgwydj7NpKHdsmX2fHBxW",
  "key12": "3gv5apwJXtvLNAR1dpVAQ21R42mTQ7fwiTzPKB3WapXDBtvJGjiAGvq3JmBQR4pgbVwikNpWTabFka6tymndqD52",
  "key13": "36CBRKVGfSBF74bc7aT5oDyeyC5bxZYHP1wR3m3mGMMGcjeb2qQWqamtDfTSYXLdVUqCR9316UCM3TC7xP2o58wQ",
  "key14": "5MD5V3PaRKzSuDWW4wN2tdvK4RhxabZnRp12XSt9tPz4EEf9dEYoSdjb75vd68VUNDjjcqSFENwh8RrrW6xbHeUh",
  "key15": "Wp5LyPSZhWK6mrUVqVyFDoFKtuVbeQfXiB7wpomCfDfk1fZHNJuJUcLcK2ouGUuvqr2Edv6kSxdjS3cKn2y3SoU",
  "key16": "5fTvvEYQ51rq1JF5ZgV34n97m4qW2qRpN1wLHRJRqxwyp7RtcqtD9qNDDCLQfoneiPcguXNrk8MpvvuTfVvFkPVN",
  "key17": "4g8Ykm9QmULVwxpmLBa2W8nRJGQ3REnBxrs55W6Ve9x5Wc3yTpQ1H3DbJJuei4a6sg6XyycxXbB9vpN3vEZJoxED",
  "key18": "3dKeM4dX2yiejm7v4RqmhWREqqRv5aX8JpiDnc6stVwhwQTGRq3fbqDyKBzPJwtm8cEhag2DPRRfLrmAvkeqCxFv",
  "key19": "5AVxdLnkwszRG9B5BnVBJ7MkXCueAyTzTJewiQ2qkH6AJHqTqt8ECx99hcjqHgLpPht9oCswKexFHBJipfnax1dX",
  "key20": "3P769MuyJ83vmhcYp3KduiYwUVe42zT4S6sTBtR1QCkpZoV1CBDfj6HfA4xCx7RQUKiF5VT4gfXYHBTS7p8Hug1X",
  "key21": "pPfypT93SLSriYHGPzHtchYC63G79ixa9Q7LwCEhJhTsuyJH3tZNKnMc3erUxFbnVT7mKZKCqhCxfec2oMYbN9L",
  "key22": "4VXQQ2x6vtpE5SwWs1SwAu9KkU37V9carYY88sdSvDRQbzPJNjt21EJNY3Xmi6r8Bv5yJM5gRVbQEkdaFvBiwLpz",
  "key23": "52QDZPoQDeeNU885BTNTsvsdeucbzrgakFnSiv1nJCnze5T6sbzDFgAsw2FSkVnPh63zHGgSEnP2PJsbvUhW6YVv",
  "key24": "qouF4dHf9E1gr5SBnm3XDs1MFwbrm5o3vCfCWHX5mueEkb7UTdvJ2xJajrxLQjbVXUEgXHtFPk39gDpNF8VyUQc",
  "key25": "3nNMagmJdDWarLT2cSTFraHAAHWe1xWuCiRoEGjbyH3rHZ7ovqmkB2JUBK8Y1x4MyPZBh8hQ4q8tPBuQGDavfUb4",
  "key26": "4BesDq2px1c3n3Pe6yRrtpnoqayCyKMGK7eYWJzLfhxq1j3MCtZhXNE9w9eUsypwUdSakYUFkNYcYN8AyAyZaZwy",
  "key27": "66wJJr4WabGv56iFTfqDwyYHACPFb1ZudG4tW3MrYACpXsrA6kJhqDbdyobeKWNoyjMb2uuCVYHY6YnKJtEUhMCr",
  "key28": "CM6kBUrF7BbAeYx4bjXSbKqrfmgpRRVtFmK7zpnmy5VZEMkxq5DCnupR11XWRWL2N4M2RradPFvjuL9MH23UgNQ",
  "key29": "4c3VSnuKkzRtRSKnKpGNU991kyDAhznFd77SxB3ZHL3ozyZ3VN7cGUfj1GQkAcSLrfitKx658fGv1t4vcGn1cCCz",
  "key30": "J2ibYVwfqYk2e7ksXGHEZLviNW7GuH768i8FAKsUia66daJ6intPawWgouziapjdwNhVh6ZKaNccr654SJ7P3jS",
  "key31": "5KZrMzcS7LPrpyu82VeWzAqsv37MqTibN3D25q9kStx9SqhN2HuaB4iTPwEaLCvNJbzuF4YBdmZchxvH81tMPuwg",
  "key32": "5vtwXbUStsyiepfCEYhTiKjEDZ1cGbc4VMjQ5HA7kNDYknHdr4tUg7v7yCBEUisTJ5qCYAxVcA2mdXpVtZuvoBax",
  "key33": "PhMGW1K1sQAuncM9yBwJuWofJn87N6yAH9zUJknjLp57yK5XPz5zQ1iMBtccVFqsVRVN6ij4stA6tXaB7EvLKLU",
  "key34": "MgEPiY1Q3UkF1rnGJcwBXb3oJ5mDL87Xh6z2kGNmtfbdQxog79EpxZM9Fku9KNNJpvTesj5otxRbdLwPQFcXBL7",
  "key35": "3iJrsUqkgm5JLfPB5F8djZnU4rp8JhDA9j59ryzJJhAk5kLKQXY97c1MkM2uqdoLacakzgyVchU3RPUnqo6n7iUK",
  "key36": "kALQdPM2fHpX4nxYUDcMED8PH7N97fHY9ReeXXJ4jtrphSTnk7D4P12rg3oYoTK2uguLZj33kHP1Eu1uTkQ64FK",
  "key37": "tHfKQ7jWtKs52kHZSFYc9t7Pk2wX1aC6pBztVEjr5cbR29vJmaQSKD1AvsyhVWjjMDoFepeJhns5GXF9T8GEh3g",
  "key38": "3AMnchE7X5BE1oYz8gMC2fo3NiBQLJgAH7oPS4R5SZ8z5VzbDaNhLhX3GDKDNg14sv121eN5p8fTajNoUE7Czhpf",
  "key39": "2FLQrjWGeXLf8uxnJuVbfj6naYEUpbfTQsw1pmALtUAGs4xa6uF8EhiBzLLsuALuVSjAitJeA8r1N6ajCa2EuZLF",
  "key40": "2HkiUGGUxPbk9bSDoaMSXMgWRu9GFWAACvcesnFa4HuKU5mBAwLqjn1AQoWzUvUP9tHQDWntMPX72XXmvo35nPQ4",
  "key41": "4ygCPSU1rz5CtohYXDSbpbsKD2EoC9WMCXNWUDCZgsBf5ihShk4wm28B9yxT9ffbXKDLUhwssWCiaY3az43DsQao",
  "key42": "2HkJ2Z1wcSxjPpTX16FarJ1qXGzeNyc3gBkB9T8AEqoMaDcK5tC18tpLY6d821QN8QsyXtM1W79Qqp3Fxz4P6U5i",
  "key43": "2y3mZxA5GjEm17U6bA9AtEnkRB8Jpcm6RyVBky9gSF762sntyX9NzYhkCJFPrwca1RNCtSQPNye99fa1k1meBW5E",
  "key44": "4FXtTXpHPr9FdsLUoTsjh65LQemxo3P5tXJZnDHXbyH3zXHzSe3h8XWScwk2YDDYhxXsGt1WJ1oUxEkkJ5Qbpb92",
  "key45": "ujeaQGzEaW436iqiqMpoTNigBH16oEjQJR1vzue73s8B1zbFf59p55PMGApGFmVir1waM8o24NxHGwHZ6c2L7iW",
  "key46": "3PbmGERJfDs9u93m6UeGUyH4rZcx9UjUfd8nBwXGPKAXaxiPcPkh9rTHREtLNgNjoi5cUCHWFzfD6JPSA86wVMfU",
  "key47": "3ZQX4ZWgE9G4pNZn7QnAitfH7XihRJUgyAcNy9vezj3WNDa5zNdKDjeC2azpFkSpwoAXhgj9iH3gcxuDtoTRBBGW",
  "key48": "vmBwgmqx4MjExBthgxspvpDUwsU58cMSDcqwmVTeQc1v8LhogjYH9G1uR37NFoTxGgrBPAkMeFJmEKHUTCKA6S2",
  "key49": "2aL8RWLRrcnp4VZdtMbFSKYuWsbUb1NzVTLNG2MPgHMDdnXz1qJaDDR7fbemjpxCM2i13SPmkvW9wrh3NX7Kg9cv"
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
