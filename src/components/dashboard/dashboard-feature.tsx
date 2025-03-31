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
    "2VGoqvPwVmtr95QEj4i6bEuG8HoUbX26vz3XfAQgXaMs9MdYurN1ZQLkRcuY6VMG7NAkMWfKuSXKew14eAMr8gfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Cx9Ckg74Zx1tKs4uhKr8zCZ94oZszpVUBDTVjXsKyumSAcjvVE813Zmn4vRHACMXTSpLE8CqK5V36Wa57mPmHWi",
  "key1": "q832GFako1J489tnfiu3oXEHvbGei9cUNa64bQ3qWrVfcp2BVt5mVYD6nVcVTPYKPvcZ1FuKAFUBk6amHtrBVFU",
  "key2": "4iP7JmfUhyFxgZxJSmMnsYfGZbQWC1qkgmQQWLQpGKyh2957Jszq6egKHzwJ14mbsw1Ap6SwK9oPg5FrrrtPDSYS",
  "key3": "5afcowMxX8irSXPgTLpz8Wf8EebJmQvyy64xu25c19DjHrEp5Vb598VCcP7DwmfQsuD5Wp6VBcpBW6N963Q6KrJh",
  "key4": "2P1ATNu88yKS1eyV1RdJvXK781Za1Twh1Pmt6AgyL9Le2HFAb2JYqM8mpZfKDLyKLfX2VQRvQjV3Y4snQcHHX7jf",
  "key5": "3cR5tfdzAhw9fqZ94ppKwjdsQskbDrGuT5eMNCsA4SL67q58yfce9tZS8RfTSbJr9YB1JK3wxBQFQQ8XrgUFYvj9",
  "key6": "RXjb87s7kqZy9VJnXKsK6CT7wuFdSqo7VQPirJb4DJaETZn5piKjFHqHDAeswnwKM5QBtkHWXafCdGe4eQVRbNg",
  "key7": "gS9YjqVEDekujsJSCiyJZfAAaRgcQRnABNRxgRg5QHKDTmE3WGKBcycDRn8ssSnZ1Stg4wLhnkRcMyjkmdRTfxD",
  "key8": "2X9qjTz2C5ysXaMGS1hwejy9sLCgVqViTjabu6N94JSN7rT929n153KuteN3QLg53v4uWPQ9zo1NUWShtfipCTYS",
  "key9": "3HVanXwNUbnaW8eLQiZajoP9ZZ9TmFzDqhXe9AD9Ss6RqVznRLkyGrBCr5Sn52JfKMtc64cSuXhyrhpDHaogum4e",
  "key10": "3JGpskDbz9PYPwkxcbFj9ttNz7W6hKFCDUSQvYYa7iM6CodzHpHnczzFAAVNrgsqcLsQfQudfoqDyx5kVGj38T8T",
  "key11": "2vfa3Y8TRaqmvfixQ4iV4UL5JobZKVLFmrLmqJKd2jhjiBvii2heuumiEHsGfpJLQ6ZGrLL87b4Z2ejHpav6d2So",
  "key12": "4A7ysHvA9ksJz4Z5qhDcgmd8dcB1ypEhdWCdEBHa54DJZv29DNiWgi7gXFGWLTw1ajcDcrcwe9LaeDmag3Demd5k",
  "key13": "5vusMKWoiSPXsKckEdnsmZgHehv4uyjzFkMhtgLJgCoqeKSnj4Kr3Pxg8ExNuiPgeKjdvPuSEo38bHPLYkTEcKb3",
  "key14": "5bSZceaSa7XwWHfKYZiSgoByBKuQpZYNw3ZhmJh1rEAVFyCgax5AYdwGwqt8NQF7VtLLcmgbWPiV3MV28fmjqcj3",
  "key15": "3etMcHLSZEMjJjewYDCAmmBU7BUz8ARTS4yd53oWneWHH3eb84ZuW8SV5WiXPp2scdvTH6t8LzJhnBwuRumqo2pz",
  "key16": "ssGQqtA9FHm8TaCWPiHnXrx8qZ4UG8Lnc6Dk8HtB63Pnbocqnc1nyMwvGpoux4EpgLc4VGdVEj9M22hwUZt3ixg",
  "key17": "3tASxJZ8geQsXaRjBF1yW2NcWii93htfTVgY4Bggk8YanrZF44CbsqLKcj9MAtuQEuF4pToy6xBh27bYKUZmGHC7",
  "key18": "3pXck8aYGfU9iRMDTToqBLfz3vaLqbxDvLbkzRX3x2c58RcBVMF6ecfj9CbcEmGLsm9WxjABJGyUWovXdPTc5ESa",
  "key19": "3n8yv3b14t77CV5up6e95jS9McHbaNRtCkBWMC3m2dQJ9PQxYYU1DCGsGjBeEgykW4LPHVdBXS61WZ9cfGWwMR4u",
  "key20": "4cyKqYwhbTVCFRJRx2XfDVNFApYa7LvS4tuLxbqJpfTSZZojhXsGBB1xWKfQJMGa9YzG1kQrjFAFw4GTqUaEGoQ3",
  "key21": "4vCm4ciSF8iHWZJwucC1PaLoPXEEyLLX83on2qgNQHtWxWwK5GTBTdvMvqSnWXFTDRbnQJrpiPLuMaiqa3vLHVB9",
  "key22": "5RwQoEFwg9QZ6d4nzeWXbFsQ95w6XNsaDeBfRvcPfP5JKcfT7Wn44DY6rgXddzApSqnknuMU4gwfMLbThGR3i4ze",
  "key23": "3r8YjLXLK5WiBEpvKJcZRepjDvS6SxjRmGmNbaXbZ1ZEzfWn23zNdZr1uhzMWzFQKjCNPNNPEdHMXAn2Asy8Gd1N",
  "key24": "JYrmv2z45RVsKxfRmGsuXZNANkfL77GL8cANPjZ8TL9NrGM5GuHrvrXsxWkaNbmptWe2e1gaYun8mvdciuQq9Sa",
  "key25": "aqZhivqe81MEgmaDS4fZ5QDSHUgcRDvtqf9ssah3i3dcRdrXgWj8f3vt6MSiPpNsGifvED2ZFn94mo1hwJugwm2",
  "key26": "TwFVG5NyxgQ3mfftU2zxLFX94KsH937fLf6WNNfJAJ9GbjCaCda8bPVvcxXqJEGBviKJqX4ScYU9wuMiBW7WUKR",
  "key27": "fr8UnTNQ1Hyry5BWVzYExEMhcH1Pm34zkysmgj1dpnDSWLvqTjCqNkEH1muAA2hp6NDp75dz6R2t65tTNKaUgNT",
  "key28": "4qBBzusVAXwgtE9hLqxzYVXPDiTyZzvSf2zzMs5VJJc6UxEQarieryC1qudjGKSywau3h7komriuUSSERPJ1CeSY",
  "key29": "jMX4SUwD2As2XtrC3HnkRDjHLRmXEyHraYE5N1HNHmTpjxCkLJZeEkGHDbR7Gc1A1WvN4nBEY7Y6DC4Hn8Wg2Xf",
  "key30": "3o1VpKbEJpJGed4mea1rrS5hK2q3pZxEd4BJAFwawARieTeUFq8ceEV3ApcpgmsLFy8kPiomprTHuHN7ZadpfdgT",
  "key31": "iw9gnyHBN4Rrp692TqbM9fuEAQsZzfWSYLgDc8gCeTGHocw3xDotPLD8fwEsMF2SrpWVa8geTYmafV81HaHXgJ8",
  "key32": "5ZPwy9RXS2XuRjqY31fRBcmM6Tm2Wg6yyvARsv3tsdKmfwErdEdywrfff8Bjyu8yZ3jwGmZAMccN6jXPMp1AxyR3",
  "key33": "4mpR2aMd1F4b4KSwxCoGkwBxdffXgVWCJmnxSRu3snzrZh87JnNyZDJvr5dnUSWcSBMpyYkNqS5XHk4prUuFVkDB",
  "key34": "qBqUTJjXjmsrwnR8pTFfD3RFMS7c9rKcEZPTgioKBUDARSj3ezi8n6gc3MotqS1Ptnw8uLL7FczHEsJJdK22diP",
  "key35": "3CMytNaz7gPmgqhJdCyUvU6SpC8FgVp5MYh9xRHgLqqLN4njybhk7Eyp4aMDi4qJywT5ZWmnYP6rcvpDKBH7Xpm5",
  "key36": "4pWB9CEaf53xnW9UdyWVQPR5VWgTyuGqBZGxUaPAr2cdGvvuGN96fYvtB5ALuceiNRCkr7tszmffxSDmywKvBd2R",
  "key37": "bZ9NeCQNrHpGK6xUG6YmRBXFAywjwKwRuwZKZ17CAmpTN5RfYyNnuME97zuBMoZWGH6v3axF1qasSyeHENETyj4",
  "key38": "RuaQWsYvdBLBzShi9BHixyJfZ7ADUUBzQjpfDBr4C7PYAYEdoTB3Ng5HAHqbjb2XPA7rsy5PEfobUHCMkQkQG4c",
  "key39": "4stYjT87PtRQHVmV8EB6M6qRv6zaFpxrw6poP59JU6XkvzJzG4HPrHZuBvn2KuYk6UtPhHWQSdPuQdmRyLswfSXs",
  "key40": "3SbK1Eh98u9wyCE1uZ4xu2kXLFwFRCFMSV1DPUbFknFkCApRfc2BNEcMchjeCaPKM6f66op86pNTjmMBZtBhZKnb",
  "key41": "4QvDUakSSVmsPBdPYTa6SbTnSA2ApD5tPy5M1pMGqPnk2BZo3XTCf6gELwYoc1VZjQG9ihkMwy6K96UHp3YnBv6f",
  "key42": "3zA6MqM5VyPXuWQWUiLMggf6PMdjhot7SsLrLmnjPoAxN98BQXGAbbg4zoWU8xiYb7pUyEAnNg8TWVNEMApx3QGJ",
  "key43": "2dSwXAaWF3DduTs8eLcr4EfiADgrDgz7VPqoB3LgrCW7NST8DtBPBbpdASqU2rKKe3LCQ5cvfQ8A4Uga7D6SudjQ",
  "key44": "XGri3AoGskb9qDT1n3bUezJAsczXGS5EjCH7MkBatNENnK6V2xqyQ8brjkS3v8ojSKc8Pw2H68D7xDbG7zuUBpu",
  "key45": "2FgJRiPeSRPMdRr1L44yCcX32M2vgZVRJE7GdGbndoL9iHmXmrHAzVx32EZ23uioYDFkDZJkYuWQDgXAPeUWmAM5",
  "key46": "4RWD8H9B7cyfvBWRMaH2ZQtBdjN5iyxjs89ZeuQAVWdemJhjs3guVgZ2B4km6j7kUnL1ZAKFj9turYSE4igi4DSv",
  "key47": "5LLVPFir9ros4G8pvdhuUSfGRXQeki9rZMprHp4aLx8svHHWP2qU7XABJKqrEmrKPcGirs7DtoYDkLK3Cb527CFJ"
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
