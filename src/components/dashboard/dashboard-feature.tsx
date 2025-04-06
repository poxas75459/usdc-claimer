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
    "4sPaSMubATgvBUiakqEw9vhL4TSAB93i6U6PGEA2SuxiCfBX48RmNyH8JANqqxRGFoqfdcb5DCCPpMiv7ewSd9bE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "364zDE83dM8n2KTXUzCMDJH46fZhUsZJTStf9GgKoqXEpNkBhjSkSVCpS4vQYA8iiroW9kKh4KbhWAftPA6pbXKk",
  "key1": "52iV2KiMp19Nrq84RSm1Vrs8cjQ8qRHHDZap24G7CwPQCidWopJhHhcLq2btbzMXjS85rKo6xjdM11swGKTEUKhe",
  "key2": "3MrMnchdh6hu5cEpg8uxs5M5hHvvDWeioNcDJFXHQqUK2SGL2dGCbNcbMNJYskwYUJ7Gj83V56caRpjBV8fRGybs",
  "key3": "3pbHQNAvPAYkbhFYqNZXn4NKit47xxh5uwVXbmgbimws54Bp17e8aY714t3bMpKurkDeBhvz8pt2GYGWUJEuLwEz",
  "key4": "2vTruBK2Rw4BqXxmLSqkc4h8xkDN8di2Y98ZbYggeKBtScLK424FBUw149ZEHHeThzbic5eBNaKmRNxtUSw5ZqnS",
  "key5": "97qSKxFHki5BJXHHS7HR5K5PzZCahz8ZdFCzZRTzXGcmh7E5DhJopb1bqhgNhwi4WAvDK1ca8SDovzggrGG3bt6",
  "key6": "5RRrAaCktL35LcwL2JXzyWLikFcbVbt8FUbtK6AMzxRdV4JduRNKAHyjYfoV6cjQXss61zUfMFX1Vu6Mf7qD2SUJ",
  "key7": "5evJKoaMCKEwJ8r1SmrTAHh8qbn5nFdiyF2n81AZJu7i2d5vkAo3jMgxDiFy6iDXjyxHZcVsBqZusQVsWaNJWafu",
  "key8": "bVUviSPxHZjbd7NQtiXz2norKmj8pP6t6ypSyRsCCGbrBDDWJnPpKbPPV8ALRzBumrD3AeZ9yyDhKkuW84cxsX6",
  "key9": "4gagHvfGPJ5QuWhH6q8DyQveooFZrG3rr43JwcWjtyexV6GYmjdeVSjPJmTkTqhfUbSxuLbkqvhVCftsPawXwuxK",
  "key10": "3Bth3sG4NV6J7DW8gg3hLYWJKJpVD5dozEgHyucnMUBcRh747LSPC5WHFzTyUZ4wmeaJhs17Vo4KgkFSySDi6zi2",
  "key11": "35AQ4jHc8zshQYjVu15kPe5QFf2xcvydXhsAyTykQnaZiC6mJJfNoyvAyEJxydc7rzh4iW9oaZWpDh7HNRc2RfQx",
  "key12": "4WuoHrzvf3xR2LYmJWatYoz1hWkMRKRnwWZTo7wczZpjqxkSeGYL5GUTYCDuQbB77NF3azsUPyNxa48bfauaDRYN",
  "key13": "3ugeU4uDnaBsKWWHRNf2ADnEz1WKRS9pWQfDAuRTBcRceuaNKDVKJBTvcHHEgxmEUtXoGfTQC3kQb7woUG8tBDDn",
  "key14": "3wD2mUTtYi88hM9tsPwLVVYywuyH8XrwawS3KzT3gRG9biQqvgxGA479ZjnnQLrUdFerqFLn2mkwQzFiefitGJTt",
  "key15": "3qjB87qvfkCe5BE9exknGhfSnA8ZobAZAbt2uQMF5JHUxwm7sdumufZASVNAQh8byMp87XoAopMcMzAsfeVY7seQ",
  "key16": "2W7En7VFH7yaJpEY6tbPhtfZX19T5SSSvjvXSuPipHYqu26vcCfJMyRNd6xTaoNnoP6egNWj3psAZCYQ5tGuvuEZ",
  "key17": "4iw4JuCQ2yQiTs3x2yqTBdDbccX5NaGXaUnbYeikmEc8VKK21D4oskYmTbxwXUd2tpmCVspBbBxtsQ7Xj8Kp5szD",
  "key18": "49ixyFGmXYVLCVozNtHXEMCyXQdLAgA3iv2JUrndwWFQAjkTSKjy2ERAdA8ZMDvozAuKSFvtkBXDSzEbfptFpuFo",
  "key19": "2H5by2Xya3inDYGcV8BQgtimWmyCd3aiaJTyAKWVegrRQDasmwiwtQG2Axw7F4ERMNMJ6uA2J8nWZe6W7MweG3Ab",
  "key20": "594px2bHKrCFq39iRB2fubBgtKcewkkuQQQqib814wJUc6StiiSWhZA56rzev2Mdo1CwGSTBA8T66ewEUNKVptpf",
  "key21": "3V9nYBmnwbDjiEXwTjGqzXFoJ82iGFwfUW6njD9gVVqwyLSTtXkzstAwJzRag8USeDdyNcZPD5F5mCcecuuYheuQ",
  "key22": "5csZX3nZ5KnWeof9fhkwArqENsoo7eisdQdNWx4L1QSUeSP5R1c4jDQdXSivVff33XzRzccsz5MbTPsLBq2VT9Yr",
  "key23": "TcuppFHChgfD3S8LdK4wMgUnx6xyy5d8hSKhh2VAyuvV2wXcTK6HGchaS5nqakznGDQe3sbiX4Aiv5yJWN1GaEp",
  "key24": "58hPaDi8xirKmB1nWbXcocgQzKKxBMTkdRHDKaQLZa9BLkMXBZyivvttmZxD3UVcanDACM3qRhbwnjwD2vGUEY4c",
  "key25": "VfdSrZVzdjcVd234UH7i52VoXrwZ3mEa8Gdj6gaVjqJJ1br2v55LM7zmHPMjyKds5zT3wcf9ZmXPTb9LGQiP4aD",
  "key26": "4qwuUodXybk4PzSKFACrL3NLwkK2cipbSH5fzSbcUWvTrdFwtBeCZWm5jZ8ekJ8S46Q6PXwV9fYtoV7H1g1EpJmA",
  "key27": "4H9hiB62v6UcRb4yivrtGve8TJq9h3VLmMWcutECVuqyWN4ztkUdqyUNgChvSaufMKhgM1oHi1uvGphCsj4SSZ3q",
  "key28": "3pqPtco7xZY3mxC1MjcypV2bi6K1mfhmzwPbommjLVVRr45Z3Tb4NzLBXecv4eiGtjyG1s5dAJwFi9rjspabES3R",
  "key29": "2DErhK4cA5vg6vWTSnDDRhDP2JhewL8VdurpvkGdVxccpNd6LDta1qXpiFXWYJhAyxDd1fo4NEg42767j2qKRrkq",
  "key30": "6683VFpmmGoeDTcnRFwCL8jxgSDFQrRRoNBT4n3jqR8W1P9H1p5bkHKg1uWYtnXJcTjWfc5CrPtEh5FpFjABn3Pf"
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
