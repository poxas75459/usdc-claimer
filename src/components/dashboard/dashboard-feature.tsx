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
    "4cTyrcu1PNPyMyRU3hMCMMTAGugHB4qwYZURFNEvYTTDUoWf9ypbVF51r1FRf5U9BedDEqUjiCMUNWu3eiD1nWSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JXKBmM6ixqEVxT33CBMLiNZGXzTZ73j3oatw76ZtTj3wqnctfxZsV9PUrWJksyLT7qNTGRi76HHko5CnpXFQFTF",
  "key1": "5Xc5ftAcjiMVWEfppieRgAeTyLPq2wascSEXu8U24u15K9hQrh1jp1SLRe3rceLvLdFZmwDBNDxEJKGPHpndaETp",
  "key2": "4dxy6rnNGKcEGpunm7Lo7CVKjnhzTnizfmXWh3pf8BXFzRpJzb4woDWUPj1gdDvFoCD7PB4k2NvF64wWTYdJV9ap",
  "key3": "4YDoAPckmbp8iqedqeWsWYgzqEFQ9HgonPhvtjrt4FxAwqs5EMaFuQSZaEhxFGtn4QqpYAxVNfzsd2Qsk7zFb1bS",
  "key4": "27w4mzhLQ5dpN9PbmTYNS1oWhcDrNXRyTJ9uGQAzeDWKftenbp6dQckTzUUZk73gpSHbvQZHdznpoA7hUgRomU1j",
  "key5": "3KgrYbsHwGeqFQQ5RPLmf96Vtju51ZxRaovsUkKKjYhDocxQJJX8ioKcDQEjG3E4PZLp7cJSwM1E8MXYTbQbqWPe",
  "key6": "51mqLnnYVkaq2xFbAB89TCZ8nF2U35puQyD8q7bJ1jg9pa7LuEci2VdKRnTjpxmifu1aUmA9gZ2P2o4tJ5UTLkkk",
  "key7": "23pD1thWMTAnxrgbm9rHAr351d2Pfmzgbvp3LPxRhd7ba6UaeimzN4LWniQCXzSSbKMETLVHzYUq5Ca9nH5aEhYd",
  "key8": "657omw5aW4Koe9eDCvfdBBGcT4LNiDJQCWppxMAu4DXR5RUFSzHbFz85WazcPgDWrYWpT3zfE58W1pYCSNq5WA5f",
  "key9": "7b3uZ7uEU6TMmKyBN2pJCLKDx1oRLzVzDn3VWyhTL2D6g8svJMvrUZFfMjVw1Q1iiEFzxxAPHfQBeWNWheuSXG3",
  "key10": "5DYQtcNGobSDcepk1mc5FRzaZeMdxMAvZANjA3W34M7HqLWULH1iwFnWERDbjKBkv8bVGwT2kHx4dnHhXzUs2a2e",
  "key11": "5cVCXjy4DJ9ZzMc8iYCUoGcZm6gaSMUE9NRCt53FBDPvMwjEh8MGoGE11qhZF6hENQb9dRXWzXYTKTrLtvATUmD3",
  "key12": "JaT9a4nvVauU63t9DzsjEjpiK5iXAtDYMT3acStA8gVA1YP8DdBfsrbQ9D98FymZdMCRbtXot553AwKfhBmejLn",
  "key13": "2PXMiUni1VX9JfWmA8EiFN4T47k6k4y1jDrZoQq9Qr9LpCCbW6wxpYfePiXNK41pwZWyB9dRP6ouvx1nmTGLN6ep",
  "key14": "43zTCRLjWjxSadA3Uahvscxjw67dvDjRF6xypFU4tiAqFXcbob2jf77SEf5AA8uGcNuw5YPmz53x1ut53F7HhMAh",
  "key15": "2V97zQbFSWE3Kd3b6QULkBookmkfcjv23nbjGjzjaXwLAZP3hxui6y8XbttmryigRyDzQJo6gyXD8h4Ln6EDNf3f",
  "key16": "NChbUyQ9imdjHJ3LEvCr6rcYcAMCoQpq9yNY9ravDCebZEuimsrmw1qTQkYrwitDncAPqPFztq7AAumvKxPFLf3",
  "key17": "3CQFFFrUdqA5GPyhoLeueNnjdft59gnQeYnPKZzsLdUrZYkxsD3X53xkZtTdJtxdyecSuvEatLPGCF7gt7DCSut2",
  "key18": "5UEGCm2xRnpsj1WxZZW2yqrF6rjoL1xE2uFwxD3W6CX5burcGcBSgxoSyVuwAE9jXawkDwFPpePLWYTsX7MCseS7",
  "key19": "3DmNzvYhUHfQ3Em5hSbvD6vtn1xjLf22Ehfvi7x7GkEquyEMifeaountr7B174ThzVjV1zAt2Qw2Z8rcesawj9qu",
  "key20": "3dR3QcBUVJePPbihg9ebGwPoAk4HdRDa3JocJ8U2xV8238ru9cB7vbFKwT232ZUHqNkqdgkEFoqGGQrtVaV2KRAW",
  "key21": "12Dw3apuyGmRZycTWy798YaEaFzaEusCghwUaaNM78rUp5uF17gHANU2B9Fr2t2iJBcgyDis4F9gJ9gzo6c8bSP",
  "key22": "4CiGgto9dPNy9TY6Twiq18fzNT2YXVtgTH4stJNkJG2UMHk2YmaWn5ZxeZVELxkML42gnFSnJBTenZh4W5DRJUSk",
  "key23": "67762wpKPpNxJukXHsVieexYKw9YZ3JqDAJTPVTnwxJYXYRTdchM8nxk48txbrptonEfokXT9DrQkxqpbAz3jhVN",
  "key24": "2iR97biZEZ4MnoNk94Hx39xK3RFCK9pbDZk7GLD69FeerLdLt4TGGyarZA48wx8qarg27yorTYCyJ1K2VS6RKheg",
  "key25": "3t7GvRPfz2exnkNVBaqWkV6A5dnzt91AjJimZ6rbjXcUWcUQY5MiBRKJA1BFK2yenPPNtxp4gUdeR6U6MEYYiz5F",
  "key26": "5nfsJY4SaDhVpM6JCKXEcLqP7o9QPLK8gJft4Ge1fdZbeaqAsTWfToJo7pfMnaDdUv9EF9jzHLX11nv62z8545P8",
  "key27": "3g7pdoujvViRofhKKGVzXEk5LXPfqdALyGKAguyhEUbK2VTy1M1sUfSMNQjDvXPf2xRi69Z6D5vQQgqYNKf6LQ1d",
  "key28": "RHCD18sNzPzAdqEj9FtP1mcNk65m1B3dtrbtXcUT4xtPQUAYj3cJhbHqsZNovmbh4KRDdoQdfypbzjanMM7SyNH",
  "key29": "BN2SoxA7tiWqawUyPD9bxEBedzrWoMdPqopPqwPrjxiky8f1jhMAaZyz4hzKhH36UgQYJU5Si6JrFKwEwj8P3t4",
  "key30": "4mHA2Qx5HAGfgJvpnvd67c3USBDRvLiPmMnzFdGbRboNX2pBhxn9FnHbLkxppFK4vh7CPoEttMSFBkySKAcaLNFG",
  "key31": "5hnYxSGB8WYSWt5ymaQtaFPtECrix1CmnUfRBY36nPVPPJE8roQQyFcEbRd5LF1JW6FABabQV7tAcyc1iof39aiw",
  "key32": "jb2nTfzNyugPTBzpZXJua4BFK9kApXVs1se2kWPmnsLbsi3WixszUEheywdk6ZDRGEdsZfmp4R7nWR2rL1oDoUk",
  "key33": "4MuCq32cHXfyiR8wJpm8kjwm1CwugvDKuCX2UhEnUwirckhNZNgeUVaJ7i35JY5NABykeAVag6i117DbfcSmaoMn",
  "key34": "2FtBmZTdCHiWZmjR5oeHob6ck35Qsu4LkQVJctWbGpzJCBkFS1xZF7op9yANABxaNrZRNvnNc19iZ267XdmYkYpS",
  "key35": "3ixSqQ2tfTYDN2TPsDqEMYR72StP6XR2gRVW2iJmRcen5n5qjqnMnarXGk58biPQ795sQ2Qq9aFb5eYrxYRMKrpx",
  "key36": "4dag9zzgBiv4SAPzTSkbfy7Y5fwE9QkyxVqMnuBrcD84v97Vx4aWT2UweZYqKDD4Mfh6sW8Du2tQnQu189neS9GL",
  "key37": "4zb7wdaaK66J3gH8JggifF1XCwvegoZJuNKgTreHyXH6F3AuoRKhG6sU2h92FXLu6YAEmD8cLTaYvVmFo2zYLwuJ",
  "key38": "oQdkWsX5AXctwpFmTK6UNCfwHH1ST9n4HtLEqz7oEEViQYrQevd2LZWTJ36e245Dzs8S7yp4CCjjc7TqWRm54f2",
  "key39": "gFhmfoQdp9ii1JKi83HnKwg9ihZyStVHoiQBiKNzihozsxuTikJa7kMeDEDR5U33LKtq3SX6jtskK1Nwc51aQCd"
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
