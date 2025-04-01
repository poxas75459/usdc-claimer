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
    "2jGgo6UBY1JDyc8JFVe8Dur6JfPA6K4kxsZkLRwtALc4GwtgNRBvbHDy6hUprw7ZSXXrTFpHmNG5nKHbsQFxFfMU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FavuP8VLY5wUSX2J929fMrrmuj1PGxfQCuoMMSfHb58AkxWtWYCt8n5NmMvAqJ9eNEtiTFnX9XmA54VySxo46sF",
  "key1": "5hz6BY6j1CQ1gtryLtZYLMHQbAiqUcZxT7E7Kw8JzFCnFyrhWamf51UJzxWxXL5osA7f5XhuiPZyWvpvZ2gDTQe8",
  "key2": "2JpUjm5Exr1ziJHycKDL7eNN7yBDn884WvWieVQqk8XuzgaRFS3LxYAZc4oPXKFLrFfjbfNxN9MrsnmaimFj5LZt",
  "key3": "67mePD8EXUVQ6XCzGV8eroZ6NKXJHt8Z3GhTi1y76ZtLvGM7Uvie94LpeySSa5sb4TAaxG5YaS5evXoMJzd9c4Y3",
  "key4": "56hU8D1aVjw2GGrdWXMgKniQBpwBsCiNk6z2LBJyaVQ9smQThHTsxXUE9swETm2QqbZEQMUQamRwvsvDp531KF3R",
  "key5": "txAkdmS7BYjmhwy9nNcVQcKkYQYDJvYD8Mq1cTXS9oFoyoaPxSAwkuMbPUSueimvJW46P3J2xukN1XgrTaJAfRT",
  "key6": "2xJVFTbnTHrphEo2ntyLzAVFA1XRcJCbgVd1ULjXzm7oAkXVtcHP2TrJC4CpAXdfbD7TFq5cdFzMkMSp28skFHhG",
  "key7": "2SM7EEMReL36HRjcwUVmu7cipJVu5Rq3iF1U3wwN78KxBRJXnojEoRW4E6fzBVYKKhwQuX7vtDjjkYYakJr8QAsZ",
  "key8": "5jkFxE8dRjf3abx5NuDLQNQPs6EMRPSGdVBqeupUDhSjLb3QpfxXbLk7ycvbiN5mCiu8TxVF2kkBcCgYLqCbA19B",
  "key9": "45FT8394BnPLWGH4NK2FVyd7x2LyxH86tL4JxZz7id43sFJojncvedwDMGbx3Vfdt8TfjBjmkmTQdS6qDVBUyoo3",
  "key10": "3f7jRnbkZ4CX5bFeSFTRTScPKDsTXFTN8iF4ewvky7R2sthX5iBKBMKvPtkgV2JiW5JCjbSaL7twAsRUmBxdbsEN",
  "key11": "5P5rRo14mNwj1Rg28enaE6hNt8aUaoRVs2Vbz5BpL2RG85zrYk1e2RXrhCjxVpe7pS5UMu29H67ByFfiqdHmKfiA",
  "key12": "2BPRuMFBrNbZv3bnry8zCzGEpNPmAyxpALGZ39FJxuj2bnaQaGZtGpewsiuL39aAFRNoJZE6Qeox9PLkXno3yap7",
  "key13": "UPPbSsz1wd5TQHAL3K44HKkZArrJsMSWBCzLms1jiSbF7GYWa6J2UmuhGdDDdkGsLPEn5BswBqiihFfHK1FtDHQ",
  "key14": "44TiHrraNRwN6mVaFNQBdMP5j1SuJWYPdqEpNySK1X8wKZZvnTXp6RFKfx4CtiX4ERj91WRGWGGN9dMZrNEJQfYr",
  "key15": "4s78qXn6mhdM3Z5uqdwPMQyRzRCvNRQ63Tr7iwfJHWGRCjxo3b3U4Ktu3dgDamcFUZ9r7VpDJChTjXnaYUbYr424",
  "key16": "3MztdEW8MUmEEJc7kY8Ro5QoRJK7cH66nwcojSAhjFD1d98EUegubaENn9qEK45Tme8EimWq47u69ffFuKRo9G3r",
  "key17": "5zEvYDuJgng1tAcScGVNi7ERTcXykZM2Nd6WV9u6XYCEYUB5HLpJ5P7nJfvPevDYfonExS9nvBidoArg25DUH8x",
  "key18": "462rSnN359TGFgHrFMg6vP1cNnQdscPKYvpksseBTq4fkgW3ConXxv3bCNsWB1faqRFd1MK4Fsaz72RAH4tUPEPR",
  "key19": "66SjpiSj2ipNUajSzxkG65Gm3cC9U6maGCSjD7Rv2kSdsLj15YWbUaGnKhkpAHgTizunpjqBfHSViwWAYdbqmik7",
  "key20": "5hirvjUnoXJf46nTUFm8WXjk2YeX6NbSQWuX6gYJb4rChagDTrLGfeby9iTmFj6AxAPwEE327EZfZo4wYZ44cYDi",
  "key21": "4QiZ3MaknYDd2TDkfiDLNmg8zVwaXT3b11sWf1eR8NxKPbUsvxd2G7Uavcfobi9jG7MWon8wKXNqJCo8WcrPRQoN",
  "key22": "5MXytSmH7jnuWKzc36BsohV7jNdxaM7sbW2KWniWiKK2v2pHqHKfPqdgNxkPrELX6gT2eA3ktGaYKjypERimYi4t",
  "key23": "2jAVSWiGRNDMv3bk7HRaxaiB93K1Syjn4taQRf37iZqPS7ZMUvn3LdZdZE43yHsGYVLSyeTFaTypDNuaSF4BRQuJ",
  "key24": "2nyEFdPWVV2KHabxwVMUifsAc3WKc9WvnmUVEz9ofmw7uneRBgaRSrxjBi93m29fo5GTZN9HhWJxoXj3qet54zAx",
  "key25": "4dXnA9C8MojL2aKssi7mxZGrp1ahTM5myb79SrbLWsCVLbij8wt1PfM8LQLtv61Ao11YZhJB4ADT94FSyLKKLYcM",
  "key26": "34GKShsp3axzVhHorBkdmZLrJUazkUfTxAvcH2omTbGnjYpeEupjJLJFiCV58KML3kXmFj3Nww6zpNrmGB2rhgii",
  "key27": "241wviJkLZMc8nr31L9YAKXXKH2zyNt4Zkdk35D968v23s9uwbVSNXTxLh7KXxG514VjgmZqzVRSAJA993ijUFEY",
  "key28": "2nN5kMHsf9hgURcm9WE4WKmN4asghETTUMyGagtsRSzbxoPCDcN6r4a4HsMmVPuL792mdz75a5Zonx17adKiHUJh",
  "key29": "5trDcUR2FLtfbb6FfXhBdwrBkMoi5PVZK34v9dbckc3zp7FdbARkmAqzW6ESvpXbtUG5Qvpjie4Xm7rFT7dzTLx3",
  "key30": "3gPvTbP2oUZXtNMW49H4udhASuQmMLvfJuLShRhkTgqn2Ld5VrXr3GunFdoSVVT9ZLV1YerHRaBhzTFSJStkUg2h",
  "key31": "2VSTRfH4LwpyVxSfJ9EUYNs5oxAVdYzb1yPVospabZ5aXRYFUTD5fNJiBRdqxNtDam5GeAHcYKQp9tE7odLPn4NV",
  "key32": "2g8RakkMhzkE2PbiRHZT3e8Mf3HY12yM3fv1VwA6DcB9thdF8nwSYV2Sfgiind1UWtsEKQ3uz4BYrnA3KFjHCbnZ",
  "key33": "23dkFABUNT6X5nmgUaZc8W5FyVwF4m5de8N77t3Rhea5ucSKFXSE9B2hMnXZqVdgeWcujDmBceMU6kwgafvtZkZS",
  "key34": "34uezACtS35v8syhA2ijJBFdQGgWMX1gpF2GXtLcpcRNaD2cJUJidrSqr1ucZm5PNVBnKqxiGbsTtMnrVa8wcc9m",
  "key35": "3UJEgEbGQkgLVuJFhuwb8RUqvemYbybHg73b1stCtTa4WGrKTrJCsmGq4ZBjCjCsUftKDbgakh4gjeokdrJ555i3",
  "key36": "58pyp9zkuih3tqzJmsoduD4391oJepjfe4VqoiNdQooFnFx5DGSqLDbSBeP2jM3uik3RxpAMdtNhGtqctZojcbwg",
  "key37": "57HzcS5uuuvijaBrgndceLvPYe1RZwDL5evbNh4rfWZjceLopeVrDTmZxkaWymb2PoY2R88R1JRcPQU1LN6PPabR",
  "key38": "4jxDujtQKZqD8ZmJhsarphumAPqAr78kFweKuMQVR62i9RTxovj3RpmdYh4PvjZE6NYW647AAb3Cb5TApuoHhCXA",
  "key39": "3FgvP1xLVP85TCkfrN1rYZpkuoCgY2ooFqbrvjDAo1UDwqGo3AndQE1bJ8Re1vfGRpoGNoD7dWmwzyRBis5SiB78"
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
