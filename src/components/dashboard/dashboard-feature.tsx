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
    "42ZzoPW7qa11ndB28x7E1y9fsiBT1vVRs2LrdMdgPzJ2y3TjhRwntny2N3oZdRbd6c1n9qXqieDYFQLaJ9uG4auL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xdMXyqc6gfKPvKzNjAb8CU7bx4DP5zf8whgX44NiiK92sympHRsuTpHzu2nxnPaM3zhycA5iXzXsuRysX5qCFqv",
  "key1": "5NV2VxDWXzPGRmZA4UC3pDzNAt5Wcs2Pja3FwqRa4zBRj3UKB2GbfvdcnYPcWv56u1AeTS86uRBhWPQSAKxumeCh",
  "key2": "2M7pvTA34VLoBuPKkj2Jccs34xWzWJqVVq6LtbeWCYVcyz8AZkMq795FHCkAGPytnKqaa75bDDUT8D72uy6CXSF9",
  "key3": "31gXV9BfjYscu2XbN8HPewxGSNNN6v7SmLXUMBiACeZr3PoNW8ZauhkkLuP7DsgtNb8XgdecKG9BRG8Ebqhu1piK",
  "key4": "qJDJc28a7X6VEBPejBm9j1mgHieYajmRUqZHqAPJNP8BCzTYtAzFR8vfPhMsRwdhNwLaftNuLUH6EKxpK3WyvG9",
  "key5": "4U8oZmuk8jPKhNPTmz5jWKCiYBYj6GZTVuwnKEELwz5jeBDLTX5mU97v1gU19nXyQxLmzCVgUBdqWART8GQehCmQ",
  "key6": "2ZLZqeVjQibEyR8DBYnsBzrQTXDqRZd988HEBTGiybVQHjYvuPfRYqbR1bU5SuoYDwta1JpY3UX4kDtKrVEoBbam",
  "key7": "3RBeKGkMvAG4YJj1eTyMBiqT2HQreoaryfqB3myYztBPUKEVrkDAjgepyr8ByjMnry7HiWJURfoHB33totoEYyuB",
  "key8": "48mvZ8gVVKyXCquf8YWQryV3uezdUvqvf1qfVnSF8G58A7QmtdsndSEJBBEaZuaceY6LBL3gWDTd3TSHJbiDuuej",
  "key9": "nLdjubbnfzNs3NLUmu9jmwncmq1mWqqvfPVJ6BTJfTf5ZrPtH27bz9yE4FVPXkoZWV6EkVvc3PrdS8odYGbt3vD",
  "key10": "Y6ovuiPSoxuK7Kybjb9YhbvY3oeXj7RRMgCVb2xSTiKCGoEjLEfWkQq2knhtxvK7dfRFXxxqrsvdahk9saaept4",
  "key11": "2FCKN48Ue39CjVzYdof1gtsACmsTkQ8mJm2trZRPLskkWUx5sGdWGxLWP9WirjyXi72XAQg4Rn19T7Xuiv3Dbc4K",
  "key12": "64U2RPLRZi4ofT52jLbawBeY8kQbhxvs9FqzkErX7ZeN9uifEbAeahNVVBGsa9k5Tyw7jMq6Uba3d9BsiR7QQ2zB",
  "key13": "RCBfSRPkWLa487vmXFTr1ckfMaXnMoHjKUr53XcmNSq3CbKjjkRhmifDAmoXNJS9DLTGBkCccF1t9G13iEJkye3",
  "key14": "LSapxjKXWKWsKtiyYKn61g2oBKzH9X6KMNV8tbTHy6tqvgyTnqhdmKcRX2GHpp5SdXsDwTYwehXrCuRZCP6pepp",
  "key15": "5m3SoJLYiUeH88LoLwbGUdweX7LyxdeVojmiNkKw2oHXSyTBU84AjxhZ6jBAa7QX8quAhq7e1y6Mr3RzBsxvFKGa",
  "key16": "4rHmxyA9ynUaqD8bgjbSt1moCuJc1HCaBKFLPj98e2zRRtwC3MYAyXpsSuZRxfoQPwQurhP88oWTeCtG4wKT2pUw",
  "key17": "5n9CkYVbvNEHGHamn44wcS26FpPrV3TBwphbrUNnhUyUU5mGN4XyjPjiy5LDViHcjtXUdGXLNq64nWr5zfYaun6T",
  "key18": "3oiu3CPxSFa3outPwHzpmN5zk4wXu2aELRzbtGA4XByjjosuNJQg5GreWoxSv6cmcbATxMTSxj7NntjCgfSiiDtx",
  "key19": "2H5j8E5TAWwASaXtDiM1feJfQsgtZhrdYXwLmTM8XcijxySkp1mkPfnGH1B5UVGqPComC3DT6exH1uavbZKUXzZ5",
  "key20": "3dLpwBar7VC9vjdca6MEPwS6EFvPxYgJkKid7Lod89A5nAP7Pfx3G6fnSk5XZJR1fwsUuzTUy31Dacr4NxisgnA8",
  "key21": "aXJzDcymkYnhcDDD8LRgKfxN3B9zM1rFrLDVBiaSxMNh3LW1HnQi7S7hTKezk4FDQrYPcMkGzjmzhDNDsZ4KTde",
  "key22": "3KLK9qmRnovBgEfenUF2EKG8AMNwXjaQKLgJJCjcMR6NG6B2bb1NVjCbof53rbCkKCys4HszCn89XMgXWVe4esL6",
  "key23": "4jWq1cK5G89MDCr5gfCEx6nybpDfWiTTbGcQC8GLdRHSK3cnYp6pSqU2T7VSjUBvXuukeWyZ4LMGyBS6G3ggNVda",
  "key24": "4nS4DjYhtX5CsnHqwV6bCv92MdbBz7fW22ExPu9hZmhEhSzcmicnQ3QMkV6y9ikL88wB3sKvwRGoAnYQpvqsH8LZ",
  "key25": "3PTVBRdLqj9d1DvPXVtJ62Qc3Fpjep8aEnaryZJuQBrj2x13hVzyDNwvD596k51aCp8caGWp9cNdhL4CFRwud1yD",
  "key26": "2cu2TwpA8PC4mnVjwGfiAjLutgwempmrgyoh2zo7e6CJSqPgDNSakBeYbuPVgTxzG9rdLCAZyefuBVyMz3VnbJXG",
  "key27": "2GX4MQ9xK3hfwZ34hCPyzEmWft8YRD7i3rPocgr6h2jR6ynPYQviMJWoLmTyFR6qhBZGvYL3X7TyxBTkwdNrCERD",
  "key28": "5ksPe22S8hCFCLna316ps8QMXpe8yQRp7RATjCuqEvDLop58JyeJ2UgfYkeGhY71an6hWSoddjycfzuZJhYSRRP4",
  "key29": "5tExTExE6aKab4KVoZX9MvAhpNckKbhwaxbtNAqpnSWkyKnj2NTXBKNb1Ly3r8rk8fKwE7qPtctcfBpfycWkb3wr",
  "key30": "Z1LfojUNFDEDJK3pqLdCgvvVaa4D7jQouD8UzuRWGQvvcwkQyghjC1r2aJHSg7dbKQ4STdqqYMEP4mKpGddYki7",
  "key31": "4vCxVtHGCdTshKdrU8QjFugao37A6pWe263Z72SBih7x9W1APsayTqMbGnv4v86TS24k6CuyH7pxDrdYVPgh3Lj1",
  "key32": "5hR5bmbScfxMwZLVQfnf6rsquzH9dCeZSxbXcGtdRNcyHCsFRxu6CYAUQi29kJChB6yEV1CndJHFYWCx7CjCGU6K",
  "key33": "4VTWm7NXug2mMhffZLTjyHd2ppMZT32xPCe8T9AXL7UmMzPjffaPMZHDBbc4PNSCVMDpog1nttTMQevssxghY34G",
  "key34": "37DJ653Ld9YiUBcQdZZ7R6UgBKERDoxTaneh4UC8J2vKsJfvj3RakKU1GgyHrWHdrXSf9pwzbo6sDHDMpRuQox2D",
  "key35": "3TB5RPX4JAoz25wHmn7dhkfJ5JQ38LMnhcCETUBP8upUskBMypVi6v9ud28wojbR1wXcAdZesGPGdrAXr7Ucp8ug",
  "key36": "hmxngjEzQxqSjBAQ3KZHCXQSujnAqM3FNiCQBN8LPHNAgvfoBuE1idV8FFfETcu6pEUe76YiDpaaQRc8X74BF2P",
  "key37": "24ktFswBASMtMHjRhMBbhQX13MGhg6HZWYdyStiXi5NNv8D7YgHPV5f1HXCGLZuLQW4Sqnt5YmhYWAwv8npF6Zx6",
  "key38": "3e31Mq7TXq89rZnRfs1DFmegPrS6EZSzPpFTZZpY1UDSwm14946EjRMPb3Gro9n4o3tNKyoNPHVBG7YM33Wk6xFC"
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
