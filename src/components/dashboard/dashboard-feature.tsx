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
    "3G3QJEH4sYqBRNZ7DKkLS4gizDVJzQc6fUsEdBSGXM83cZ8YnkS5j46WcLHouEMG17cTx1ZLAw5619dYhuZ7FMBA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "397GNLHy8wAq8G8zev7N5NSQKNGVFWZfPTC1wr2CEyZtKsyFmh71uHX3d3FnNvQESa9hamUssGfqpUig36woQGie",
  "key1": "3LrQCfv2MZyrrVwXj5CHgsnvpo6B78X9jzomc9FobguxyDz2rcV1jij3rpa8chUp3KPtYcVjvcoAPrxuoz3JDeZ",
  "key2": "3JgNauoEPMbNJA5ikZ455J1yqmPpMSed3woE3wgYFQPA4NsWaLz5YCxyitbW9tVJmFjrJaAXfyuqR3aSAdc2718",
  "key3": "3QhdoLWhrSnogkijPZLCoZc8hQJtykwDRJ5FWwvpg8mwyJUs4MPZcZviQNQ1bp5pPYWsWgaiWTws9VUdqHQRPTVL",
  "key4": "xT3k6E6hWLUdvcPPerBYHA7oJ5NukUghUyqnCNASJtbVfMYFU4H993ohn3NPPWi3KVsqURPoFJ3MPZyykZEKwM8",
  "key5": "4Sdw3kGMW66rcTyEQACsEryyFEKegNxCNSEs4L471p6QyfRkroooAMVbRYo1giuykWP5iwcezkvc6dThkFbohp2d",
  "key6": "CgfUVq2Bpn5jc6qCaC8MLfqArgcH3oYL8oMzbHUeQC9ueKPm45r1gGuVVYt52MJgsfDhqcXZgKHHRGAYMSjqjgU",
  "key7": "kGvykUdeQxb6TiMxgWgAExLBtgkwno1cjDtKsRJnJgC9DWig82CKt7xCLNxAePqoTKL4eiUFZRgv7dSxmdnkFKJ",
  "key8": "2Xr5j6DChjEB4aSyEeTrSphmLEz4B9Jzj6F5KyQhD5tJndya83pDdXv3UiyBwqkPaLqt9tuNqHE3jEPjbtkHGNN",
  "key9": "2whnx32e7C4VnVGjjmX4RNx6ekZgdYJAH3n57yw3fGtDPGwp5nD5rQAognaqh9GURgKgKrwghpmhYQrhQ5VBq6kH",
  "key10": "4pv1pXpmbGpZNECPSWoP5zbc8nwmxitGkcFEuesBKQmCivWbNxrZ76zXvNKrDT8NJvatvQ3r9gnvUY18soJsfdyw",
  "key11": "vj136hsWes2EwmaxGGHrLqodhor3h8HDDKJjbGRsSKWkFfU9kLXA1cxrs9wzUfSZ9UKf9jEg4T1hGe61xiJxdNX",
  "key12": "4PxBqhKg8WgJijqoDbxzKFAfF7xEbHeXCsCXDKZnSML5afLE4j4gZwVsnuEB2aj5iuSCBWuowgBkb4udGHYtBRe3",
  "key13": "3xaoUEd3G1vtdCJ1EumCTCbnCyox3pYuzvUBSEAwzSmHC8Zm9kLJn4zRFjrfDuAetXdmC6eFd3cinwRWzkjEMTSK",
  "key14": "2yUdq5twDYh8oTTficDPxjRjTeDhM4rBtQeBQ2A2Ev1pGjEC43wnRghRuPWfWhURmrCyCnCZkeZeqyZ4ASJcvvSz",
  "key15": "2GRZsVutW4KxqeM4wZwgpXQT1jG41nhZiMxq2KbLSKT2prGjh8WukaZNQY65Tr956NEcFXXL8Zeb8tiPVNt4WVpm",
  "key16": "41Tse4Cp9iN1X9mS8hfF3bZt9xiVeEr78GtKJhGAwZYh7f9JoYGp5SfJGu89p8dTUfnPPT42keBzT79b3PKcRFM5",
  "key17": "249pBwMWyVHPPtVoFFpDjCiL9sma6yRbUwyfyPZ6TkM3uZnEgucQgjekGWtGHUofd95GYKWfDaUSvYeLLmcVeMfN",
  "key18": "3VZsRVaXx8okwRmXKStLZ3xpDfXaGHJ8jJrnsbr1PTiE9g3TXE7WruqGvSavztbs3dWZfQocA5Y4RKybX3Mta4uq",
  "key19": "TqyJG6M1eLj4yqf7kW5reexcZzPFbDzr4GtPimdmrnmxn8ovpDHu8cFfHimucoqBSkYKmsyx6FL1n5KAGVUYujJ",
  "key20": "332339a32Mxz54yoRsSZcSVf6VsKUU7E1DdjbmZsgkfdc7ou37yTyUsXMWitQ1kQptKm4Ers9txYCp2mBMutBe78",
  "key21": "3s11p4LLSvusbaFWo4wqdUjb2T6gJLLxSaJojW7ZFAnqxJRZaEVaPBAV3KGTAQQACAM2zk9gZZinpDLaJrTXUEMz",
  "key22": "23LkLEdwUXxoyD3wmR99qzHT76E85ULs6UUKj2kkjKAbpeXT5SiVX1jK6hDzJF6RGDNjRoaxTukSrcREvPB9qT9B",
  "key23": "Lk46v1sRu3NdnhdjbyscNsEPumA38B5TaN2xGX85v3JpYDcTDC3WUcYz2hw7krsHcvvhHKudVyA4dxy51XaoiHo",
  "key24": "4FrKtRD3PNwKy9Sre29A22FqScewyejha4fEJEwCEUwdZdzipB7e6rz7Ae28mQ2LHfRK1Nbzzjk3sxqVgZRNaDKP",
  "key25": "657vuDjLbVXcHSPufM6N21Ue2R6eY6jCnh19peCyJM9WXubK1ERoaaArXPgMji9gsrq6yCdAt9w7m1g7aCstdZvr",
  "key26": "3tPsuujJYHTEGXAFGgsBaLsZiaNHJrdh5W9cTFWoA2uqACTtetv8LrEWEDp2q9MtVi1BcVZF7SEj9SMV3B5v4rbG",
  "key27": "2ntod2h1NisLM2Pcf3FvaScnNYh3zLNRz3taRj68JFyhoUTZ6JoENdi2z4mW9idsBFCG23x9JD2hdgPHFDgwyjFt",
  "key28": "5P3pwHxBwtxj3FZdzQ33Svxgi1hHMKG9BbBzLjot7uRgDhPckcUCMesEWTwsNhrHCG6Wq43Wt3F2XsfLJ9dVhfe7",
  "key29": "C8uAVWXZSPCdkhB2BuzgoxzPXYVFvgh1Hfnk4RAkfhkpk7kyDvsn91NWJLVikTbMku2f5apgof9ZhVPJo7TkZYH",
  "key30": "wE7NdDAHUiAs766Ge3knkiXWXHk4McJsDHozhZaPuzHbTYvyJef8UtpGeucKpKfbrRMuHLc5uhRuZE86SgNmiLa",
  "key31": "4kPxdoniXPejEi5Jsgiaebte92uoAbVhLKsYhM8ZbPD4kaXWH22aQt69C5XoUt1Vg3PkPM1xrMpwr4gDP55z1mCC",
  "key32": "4VNMN5mf3Ftd5oFst7VtqW4iDZ72kVcvPLhP7wTYHvC1q4Fo9Zi9uWV14ZXpFBsohvqD4Y9KevKWmb6wokZBDWuU",
  "key33": "4eGrJy6aV5LVY8CHAa34rqRb162DmKT6YxVeLyKPS94B3JgFqCBtxKm6Hzk2XuJR6pkFxKvVbKb2Yj5xAenAz7R5",
  "key34": "2Z5jN68ySoWEdKSJosyMuJnXx8ggWfCFp7K3JCkiGDphZkqxcpfUTZWXPmqWNBfuaZDTAyEXuhov6LNsJjF7dxsu"
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
