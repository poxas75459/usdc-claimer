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
    "65C1eLw7a8CDLKFfi5qWtC65e3tF4STfpr4ycqyoPLUk2LSpvKYjVyYn9sH1xZG6syDAAA8pTFq5gkXpMutCiWPb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QukhER5D8WTppWCgvtmuhXGcszFSrUDszBUixF4KHNmfFMvdvPat8ZvQxHfd69HoAmVYxXkL2xEXhkBqCLR3PCS",
  "key1": "2qVVBreGHzzQYXA3xJ9X75xYPHgzvsDapckp9VYfsFHG7MK9doHLqSDTu9cEm7hnXEptHnbHKHgrC3pcDaekqucq",
  "key2": "32c9USpi1CQ6DoV7tgLxhkUkP6mbqYpZ6eqrDke1bt3wt5nibDfZKdZfUUeHQpx7HVu13JbbtKbrFKoZH4nXMnj7",
  "key3": "4UZoc3YaBthNyXLBAaj9rs7JMWTKDpi1qrkbF8w28Y8GwUfURds5gfTD4i5ZEmKzFfW6o4rQmTRRgpvYCckUpmaV",
  "key4": "KYsttjGJMZF9XQBZ36nvxe3dSRtxCTaLMdvPfEg675rqvZumKBzkvTKP9TELdKMZDBixwEn2TgzeGmMRtPWedh2",
  "key5": "3uGvBR3vVLGPbM6Y1TMXb1Uisybx1V1BkKjnV78hxjL88DsRiNGg5WnWiKDcniU4JPmc9SnSFK8ueTssf27RFrD9",
  "key6": "4nU5mjn7quqCEd1ifssBtNcbVhvJ7ozR5qz8zALLMSAXYmoj8AWL66wsdUEkmQfNXRuwLbJUWoj4GCAwbfaAvEv6",
  "key7": "2Lkwy6SbHYJJn3Kr4z6PogQ9iHh3hVDKbpZXwyWDQJr5MLpWrD1nqKZb9Vnq5VXA5sXM4C3GWxV3HQBMM13y6CGK",
  "key8": "3DKgoHZWB6WyYL4EVQ1EgV5Rm9dYnv3icfDRpMJoBWjCRWKDLf5jEUSRe6zn1yKAZ8uuDeKzAUpr2EGRMBsBKCJA",
  "key9": "3EMEsiJbuG8KgpJUmcXmfDmqXgUUUgsrx21Z6rGUocHVmp8deqxUoEzR5chKDTJXbhQUTJkSDmJ9qGM8QEP748VJ",
  "key10": "3Lstd8x53vEJL1ALbajsyaGSbQVLTUrK1StAp8CJPDFosoJhyfBQGXuqbahZhmvDTA7WGAPsba45VwR25m7VUbo1",
  "key11": "2tTAYkUrzrWFwgqEnRB38c6LsBuZmCwPiLhGjTLhGaPAspFqQZptAAoDa5kbTR5B6f3ynESErQNpZJFDujChBrrf",
  "key12": "3vQ14sYaGFXaANcf74a2BD7Fd7AAKmw5WMyCTqkkPSgaRFxq4NCvLdzzr4ShqvokWXux62MnmDnjKKPu82j7jYbn",
  "key13": "3rFpCzVqxGgGW8PqBQnSwV7kwjUCYg4va78BdjAGLEX5jPMJRypCtQYyg8puvVKGPWzka8Ks3Z1xL218jeqWrMWc",
  "key14": "5Kz6h9h5nzdiG3dLZ3mr7mtJj2QccGnWTwN51F51myQBUyWQMiJLP5hgvVPAySKEfC2dx6LYPtZ6dWSZDNbPT5hX",
  "key15": "2UNeJUUuE9ZVAzGEJcs6PmMn7hMbjGnJ9gSMUKWhBGbb7Wb1GFVMb7m67fvNxsvYC9ZPTkvS68xTMVniLUULTAFF",
  "key16": "4dDwv16D3C2UNo5yJKDg1SPBHFUT68BXHh3emc9okqCwxSjqU9ufJntzxzbbY35xGcXs1ckHAgq4nfjePrn7X9Wq",
  "key17": "3G59hW9H8LCEe5pSUfF41uu9Go2JkwHwE77r16uCuP4mR1no53QwpLjms6YwumiMy27Qs9AuteAgfPxkKJ8aVwnY",
  "key18": "253EjEGMhBoqibdivpnyZg5RQtWcTUabJ93JYXXQ6NF9ASbEQibsTu8kW48ECPif8toy3DMz7moVE9ffWVbsDZTV",
  "key19": "3TDzkmVtgqXGLFjHZGEeeXUDfxYAsdD3QtzLi2aFePTRfu7LF1u74HEFcTsNon6zcjPYwzEetQ6Ny6hUCmcLHBPS",
  "key20": "3LozkBwNBH8KD5iBoiY1GgoH7wY2vUXYHZ6e8KqCR4TGwYbnLKrJD8RNcmXHCp5YhWuekoRx9gVeQnDvSgw9Ku89",
  "key21": "8SzT4ZzQfPSCQ2Dc1PKWs6bgTgWpJNHtD4Jtx94vR5JrcpzR7ZUN4ZqLpGirgLfNPfr8tPBLu3cw36RuK73fVvh",
  "key22": "4ocjiG2kpTT6wgvta1f7RaMHJJvQxsffZJ5P7kdGtSQ2WZrPJVVmywiEdiihdYE8s41awNxSgXveDjgo3nXpZtvj",
  "key23": "2NHnn4bgH2EafREVhvndf9F76XtLC9zfuQU5tSbQjDwHgKTNg8RDXKduDrNBvCJ2o9pBMPYafFNuTwkiBqewSzFK",
  "key24": "2Z2mtVY54NQQPK8vvJpcnBL9ihWXSA43CQgd9j4XPcQndoCUjzJiS1iYonTrYB2D2EB5U2ATrsD1YjYWLJzTnhzJ",
  "key25": "oNQ2opE77QHnHU8w52rRn2NAsZRA7WsRPR8SF3EDmWh6tcqoEktg8wy1fTrbNF3ttQJjD2VEbWWf4CmCxY8J6cW",
  "key26": "5qbivvnnwDWWPGnPwXn2P3d5uYsZhzZGAE1mevtDasd7Kx1BguuWH7ZtDzc2VwazsKoh3Gx8HTZeyzuKGwVo7Zoj",
  "key27": "3BNzXyG7L3LcA2ki9AngT6rn4ydAUKQZuFk9jtksmP3KCFRsh57zf6uo4sMvy6zXeufCEn9YJhVz2ZvvsBD159WN",
  "key28": "2uJkeVMbdxqv3DN1DwAW4XmhcZphPxbr4GyCy4Er5BmwUnBfWFB8eGXvkS8uzfhqvj5E34i9ojhbvQkGZMMLdN2i",
  "key29": "2dThDARWmwyAkhjxeXQo8x8iANTEHBT5EgM8miC6iJFB4cXJcodrX72Qu1WG5AF5vSkcP6CthUdRr6QcciW8XN6f",
  "key30": "2Txb3ruGaBbqgKbHPqH4yy25kzRvcXTxzevqrBt8UmutNjG9GF1mek9h5mWu2iFfBH5qWxkUp4dRUG8M6XQk8uab",
  "key31": "68YfBoYxPiTBF8Zv9J3QRgaSCjwF9A2HyskKjx3SdZK5czFowTQNFy2b7dTsZxSxgBe93Rvtu1npWWZE5RUh22e",
  "key32": "3dnjct8kjU18e6R2VXHGWFVcfDJ3C85K2YDDZkCSg2YFHe8TUWPocBS9mFXYLP91r6xb5GxBmdqXrH5cGhNL2bZe",
  "key33": "2Bb8gPBcYefxPYLazRFLCrBpDrozPZJCYArgtQ5BcWWGETbr62m3oe5jUbAoXYPTTNJsqVmxTahLj3iewYnvULaY",
  "key34": "34d4TG14Pzz8tyVsuc39pMZM4fm5d9KTfSwVKsYpsWzLbNcqK4HEKmrG55BRwanQtxTeWaUfc9kBywX5mMQ65tuT",
  "key35": "juA7DbbawtnnQySkiRaj7QTtydFVoBL7YiDXWomoSK5ReFjFc7zYLhdhEpHC2BVTdrw6PTBBTRaqJRig4U4gTM1"
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
