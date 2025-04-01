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
    "55rdqsTEGg9JTGEyMmptBy2CwX5mVTymYHqavYDudjnHKRFN39opy4unuBcs6ZfCDonjXKqRzkbWuSbSuDWmybm4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52ZXH2b9pod8tZmokeae8ZtcGDcVvWm1kqKGfFtReNocDzCWRMC6BbAtLBjY2ZD6kEnN1yrVTiKfjmssdEnLjC8X",
  "key1": "2bQCZRGPReDprQrimPg2nAFaomZge6DYT3AiXPWDf7m1iPMbU5MDGBMNuad62Yqre6YM3RYi65ZP8xtUTXE2E3ng",
  "key2": "43DW4xNNhd1tt6w6qE6rnQgrNudi9WVmQY5zYbPnMNKsjgmxZeRYvQqPBxeaAREunjcqsL2KcYAV5iRCHJqddf2Z",
  "key3": "3Sc8sqbP6W9X58kidYbpbemicQ4brabsbRTsDdWWv1BcskwUiUMnZkwLogm1N4JwbeA9Up3q98FvFTLmQj7Ck25B",
  "key4": "54uDcG84oDq7hho2ieahEjGekDJukxJzLA51udgSpPxLvUpuwBennLNZBA9xxh7cohUZHppCTzLQjngrnEWVhXjD",
  "key5": "4cpe9QHKUtWofrCAyY8cRVCxMSSTYik7j9qUGduoAyEnY8atArkRKahWXZ8WXwU9ZEvUP8r4jFxSq4oDHSupDKUg",
  "key6": "2NmJG3J8HwbXpohGpkxwchDM4x63rVQ1nrVKm51HSQvYRREDNUrUbu47WxXHRYdWjYHTBExHwwjfvV4EptqsTY18",
  "key7": "4qftupxbmBePVnByqXN8u64FgVfcWLzg1Po6gNSbWY84pJgCHx2ZhqbxXhTLNyZP5avoV5c5PmudXNs3kZX12YFy",
  "key8": "mbs2C6htjAixgU77Uqo5UWmeF2uo2sf8bU8kW3peYvADB7w5C4rsvM946iGB8JUPEBXFk1pm2B1GNZ7DURNHXCp",
  "key9": "3PZ5nkPM6hDzjQh8bvzjyhozVhoy4hnHdqkXJbvAZq368sfWySz7dFcQUwzMkJnCG7ArTPrXz8D2Foi2AcDqeXhz",
  "key10": "2MZ2r4T2h4niGHqQAVWSm4YJoUXfciggrj8MikEENFHx8Y6nXPaEjWB5ePf28rk4vXKD8BbEXygxMe7ktqKd278U",
  "key11": "3ThUs23sXvZ3i5RnDaEFQFdnjDs5sBqr3tJpGTPBW7StqYZ2NBnSPVuEQRRxpvPyysJixKK9YTJUNzeSfdVAGEEK",
  "key12": "3X73di97xpzeD25TUBw4dEL8vSHvunX5kY6j5WBhz7R1NATsNN5DMuNh6mHk7DfgsfRVUErQL4TQNpvUxNGrtbz5",
  "key13": "2qv6fSekJ71EhWLQEDfZTCEf6o5ZGQreteGV5cAmBoab8BvfmxTQgJxnjZxwnuWHG1Z6LbYpxsNWMEgww7zJhYvq",
  "key14": "4g4ErEfqTtwDpebVXToQLwtXKjXRmCYiED4isaraskdGY2RMvGLpjRqCKyU5y5YwcFMzAvb7YnmNJBGDd6EA59a2",
  "key15": "66fi5pLNcZfj2yEtWwhvr4YaK3yyzcTMJ74mcfEqzH7EYzqkQvb58ipGA3s88HL2vMdmwkyDwH8UC45bfWAHH6xm",
  "key16": "3EBJrJtfQ1yr5g1Jz4PBcSFFBzD6fHcgoeZqoXzxk9YsA1633MkMf8H5CsTHBD9hbd3eXuramn13cSrpm9YwyA38",
  "key17": "3FsXje9z7Wg9QTSG6b3dQAyuoCoNHaJKNrHC7WEZt6AkTv67PrupQvhZwv1ugwCRsKyAUprVGHpFZe4wWGBbBNJU",
  "key18": "5c2mwtPg2UqAFacJRt9DR2jhqicH4qKUxycBaPTKMkVTjuULNdYHV5p7yDqQwgvRVc4gx2Kwo7tUh5vFXHxDWyZy",
  "key19": "4eHQfPgW13P9xWBM5whwKMzMQ3hVAKuRXjTu71gBJHiUTtU4JMaSuJZRaAs37W5wRL3J8KXx1anNP5Mr4svB2Bi5",
  "key20": "2symgQhx7yVZK8jLgmHYkk92P4Bxuk8AewrBP56N3Up1JG8936nZcDGKpUYhyqw4auqPZ96F7RZ8L1yPZ9CY7wjq",
  "key21": "4JHU5vaVVqxszM9NVetsQ3y1JqRGBD7GXpYMums9MWi4TAX2TFV5id93DsxJFKdnEcU6vn7LR5pA5JTBQo1FLwA",
  "key22": "4SmDXpSPbDn2go7B5iytbd5WiSctzj31284UDWGWQEYXeCKtjuUZq6y8dd2cufcwuCscd8GfpJrFfk2nkF9ud6qS",
  "key23": "3KnGDdpXDFA4n9q2yNy2dz9dme9R7oTdzY42g8MbZYaLg5Yah7R83FvctLZeLPCKk7YozfMn7wRkBgrtALdVjrXo",
  "key24": "4b5FeZJPtCaUdLPFFRBWhcBo7PjYM1MDhXASTrGgXioxoT5F6HXsEoA7synRpnEcTAJqAcZw5yzWJsUNRRrbkqKV",
  "key25": "5paBk2z5Mth4U6WE6G4cLNPifUkVrPrwkqGnLz8ykWBLdfSd1UDLwh11DG2nKcvaaiPNH3RRkxy5TtnJEPCELNDW",
  "key26": "5ByQWZxnVYKBeDsmUp13hFANQQRNBKgFz9jJAQ4PDech6aoPfttFZgZV5cjRRejwuk3wNHsM1dXUXcvB68Xg69br",
  "key27": "TVjTBFg8kGxzLvtx81bLQokNYyWHBCKJJpvUUbxxsoGiMFvJsE1if2wis4EyorUEEf7mZSunmGTpEga6P5HfDew",
  "key28": "57zfWvsQu97g2LY1d2KBDjhi3AmvsntFmCbPmrSUeb9DeQ9ceH9axZZ3uMABUPbCNbhZhGN4iPXFBwgL69Z7cgYp",
  "key29": "2aWf1TmKWiHaMBHh7SAGUGEN11rrFdp2zdcnqbbiVGiFUckx4kV2narVg72D1JLsX7Y76zLd9PRtGEjt8PUg83L4",
  "key30": "4F7ozgokP9vaK24ZD5zZBZaxCrAE6apU65hdtBjLY8mYEcbLLktA7nB7ub9vzZXCa7Rhmc2EHnp1WyDZf3UwgbLi",
  "key31": "2PtCa9t7n4stiM24GXiLiixZhXNmPJAwQQhjebvsB2HmRNkusSui84qNZcMDHBMi6UwAcPJd8x23QGwNAQEjvV83",
  "key32": "2JNP16yAFS9yDyBWGEJJFwJAzXDw8bRWiPmsuuQRSjsyF1kmGLFdG1JjCVpWzqzbGaFELmgkrUJbLNagRgiCS8zH",
  "key33": "2xTiAeppEBTKJzAkgSoJrHyxeGx1DtMudwhZUDHiVLqb9qnG1dCimdbGXjDDMxLedvjSR9mWbUgwpHGpba3UbQxr",
  "key34": "38QUFc5LhpgPrT1tZMDGetaTnwQ59ej9xFvvSqq3DZ1FGCkSsb82R8ZYUiHcuLQfsA7BmmTSbnpMSbDRymmSVHpS",
  "key35": "HQDHLzLpCw2qtmawd5zDoC1p39EjV5SUsQ6E17EXsXVRnqs7qf2mnMLhCmfhfdnBx4LqWZHGRjueUQbtEfc6jjD",
  "key36": "4p3W2nyUYT5VooWBp6RHbYqoKxzSocfrUhGGVxm9Cpn37SEf1b5Wdz7H4Lb6QnQafiiE2Epp2van4PZEkg7fXdhu",
  "key37": "2WXM1MArpcSAGbU8y6WumYso2typn4NMnPFrJRkJGuBNqPH8qgwkrE9f6X6AmJ6RPicCJjARz9azNupc9tEwsV6r",
  "key38": "4xs1qeDaG6HXmb5zRjSbzYjvKWbwMzQfa9DSiLfzmMN1pAgDXNhnVVPWbntBDFwBUSQqpjX8R3mL12uLXtMREquA",
  "key39": "3W9xCDWL46VZ1nfeZJSNsBCAsEaVvnLtfqoG4rotpYLogPFTbvvjM8AFfgX3DT29zCKC4KWp1qcgg52mrXerVR93",
  "key40": "2PU5D7G73JCEL9CG7sPpavwNRieLdhh73qPDSHn7zYc3wDN4JvpDjeDMf3Z4uLKPbVu3bYWrJ4Zt2UioA6Uq4SCB",
  "key41": "2jv1sDfNtJrr7BnvKAbuBHwBy5xLDHwFRHjSdE5iy45XND96wiVnPJCMjdX5ch5wAcc47WWBUwxykgWf2pv25CsM",
  "key42": "4pUPZYr18etTtiX3cPfFeo7mrHZYoFg4FziwsUnWxApuzVweLtKbThkowxrigjvDb6JhmfFbXEJbq5ZmRgifUPCC",
  "key43": "5oacis9hs9t3z21idBUKzEL7Nz28QWr5ydkJ6bB16jJHhcuNLj81k3z1NTG1rw4pMzNGAqfTR4FRWqKLqWV6Y3fN"
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
