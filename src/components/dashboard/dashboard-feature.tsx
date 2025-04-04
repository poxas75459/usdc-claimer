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
    "2PSY4byPyaY7V75SbKTny3fCvUQP7EiTjVVjVVB8dH1z8R4TUf6wp4aVqiGos24qc3QDbzSkCih7GHM8SiEamECe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wvHPc3ZuyqhCTBU6kCCxzqs17fBR8qyL4LUyY8j57ZTn29tnPV9kiwspWWGCpeEsQD2kDWUg7qj5KzgLCUgHHrh",
  "key1": "ZCXmYxi2oVHnWsid2Sg28eubN57WHa93x68CTEgDvzbafu3aZqgGhQHEs4KFxVbUxgUquXSB1o2jDJctibtWFeu",
  "key2": "WQCYhyPWA4nWUWK565CcHjU7eeBbSaTKkqrKQqbBgdUy6DeVvsBcYxtGjX7gTfMktUFbZFgybSWsXqPP29z2JRR",
  "key3": "65qaUQCQSqXxskUgMepmg1KZTMe25b27jsErX87jiFYXL2zEBkrCe46yTY38t8njMCnKDVdvrFDxDvomcpgz3K9t",
  "key4": "3EftbwBBr2VUoUYepXqxDyz7UisVtNqnD5iTnnKUQfKrBjHccwqSgTjkedAghsrzVRtvdkAFrSfTCcd8yGakvTYv",
  "key5": "xFgyQEEbihD2wMEVVV3AE1NK9Q7K2JCHqnTyGbrCaL33YjEnSHCRU5kSKzgqetUC8NBJVy7mfhpJbY651fhCd1u",
  "key6": "4kcS3ZDTsNFezRem3i4QPUfNn2qrc4EoQenovEcEmBAoz8bu53zT4TfgMk7JpmtMtjUtF3Ee7iP69jNSa8M8BBJv",
  "key7": "BsBHoS3PtGrkUizwrE8NG2mH1CNnx6WJmqgmfzFxxJ5ussvyTqWqBMMh1vPLS7VThEFKEwuJbuYbCTGw61wAfET",
  "key8": "44h5krPhiuUeja3cSFbCTAGgr4TGCZgVJKKwn9oXeLSWktGtLTFomJzWxRKk7y4vivbd9NMiv4oWaxdbNyVS9dNz",
  "key9": "4uY8TmE4eY2h37fc6BcmWAeRoYybECGeLqCeLTAxaEBS9XcC52taivhogTBJmzLgFTxQScU8TLrkxX2xTyM5yGSw",
  "key10": "4fnskZnxfzWAgFVYfXCaLAG8btHSj9Eix4KHwke7xxNJdrPvbNK4rRCsgstQhxFkqoapepHVbPcrRPMLZwzn2jQZ",
  "key11": "5Vciup3W27rNkhM1isv1QbLHB7XUzKeL9j6H6LsQYw7ZDndwXJJQxJhTLmXN6gMg3dxspVegKYvQRsfzbCZsUH8",
  "key12": "3jLxTq5FrTB7XVoXYzzyoeLvGDJ383U1TN6oStkgrcJMw8pdM1TU9yrgquopNf78V4vbegnmLRdDcpKZrd32oriH",
  "key13": "5UjY399UoV9YaWYpWWZk3RWeKYkL1uRzcUwQF4buZyZjifV3kevXsHKu6XkL6SWA1sQwh7SB3Ge4b5UeThLJ4Mqd",
  "key14": "4Xg7ikzC8X9QTnnd7zRmaTytRGUgkRLazAmTwgXoDsi3Mq1KzJHCotmKfLvnv6Lf4NGvPoMfkrC1Vhp4wPAXkApQ",
  "key15": "2rToiBhvMGntmDrfwauyz4ps98uzzz2QSiZ5aucjF8vEDBfSpngPQZ67Sk14dwkyV4xtzvv2M5Fqpmh2RSTFwoQL",
  "key16": "CXB5XN8SvKukrgakhiAVN6kAfJZVDkCsazXtwfxUC7xP9AbhedSvLYxrcamSJGFLiLmx2Q6vA3bLMSbHj1y6Swn",
  "key17": "2UunHBtnEFWh7e8HmjkuYYurjid6JQ5XydDh3SHh8Hm2y2tn7HfgoB5szftxUd1zcPMVHjtDk8mH5kFqzFJ9NiWs",
  "key18": "4T2aAYAseDKCxSi83t8v6x48PwCkYXkgBX796rAw8XGqfJd3EZbAP1zjJNrGmFTqZM6o3mrTvBjrNbE4v9tfVzNE",
  "key19": "2HQjhC7mRJqGcLsnZmsBV5S2E8CkppYdARqGFR1JU3Z8FRMsVNnzU3fxRpt3askxRmHdJLmuqiwvaUvr68L9aJ1S",
  "key20": "4siwFnS15nEEq8bbu7VchdGyGo7LmphrZFp3WNp7qG9T67HHGsXbG3d7HiiWUMEX3ocyi6AgssfCMXQ94aWdo9Zw",
  "key21": "5BoaFFc4GY4p8iADFCbMGkJjGiG1yUdEgXaoE5VP1bHTiBTtPxYkQBNeNT3gNaXGipTVP5Rhx2Qb6suytFaZtWS6",
  "key22": "2mJcjZTkfn6QRbGKGaTt12FMXrCVBpkYpsUJd9cY4pMNRUfEEPjBz1QciXmD6AMvyriqxv8fmtJfKqbsxKdDiNiR",
  "key23": "5rzrEfcc559fgCKYbunoZ5kqRh95FxQzgMJpR3TMArw5UayCaLwPAT42YtP3hyGt5fN9u1gbYDqZHnmuuWAPTU3j",
  "key24": "ddSy5o4usGCi2JLbXRnfmWykeNkpAJjN7VLWF1FAKwkB1cdKRaubuH1HbHa7hQNkGSzVDhmSWEzDCmErJQBQLeN",
  "key25": "2ZgE7rptMrmVvR7v9gKTNTCQcwbD3RVpPEeZWnNNsRY5YcWDZEd6Sw1CFHxxNGRi3FzwG41VegKn2qa1vzMTD8Xz",
  "key26": "4KtwYTy8CbENXjWEnAUvoC3btBq5SEHyaJb4VWqud6cSGuyv2JrMd7e51ontfYsp5aDhxbQGDVNHpGsxB2JjMYiA",
  "key27": "5Y9e1FAenBvEyD4BwBmCDa6oR6eKjUL6zY8HtrcqLTTxFkiSmr8xj5bPcfoQQHGHXpaxxK7VTozW7P6wE9sWdH4W",
  "key28": "2mkj8tptZCUxc3kTBTghiQkuB3PNstmDzBK4pwGNVD2ixZsxFuqxhQavVqmi7Ys4d3qKBVkSsN7QrSKhjCpF2Py1",
  "key29": "2p4nZjFMGTnP5caWcdJ3miuHYX2y3MMsRzth48HPUYuha4yGKg2vMZPsTfrMNjzRRCqwea2LtQsb2zzYcYJvnX2j",
  "key30": "2S166YevAGYTfcpq41q5FjVWFTbgNrNyVzfBJ6fGmA6CYoZWLS6HYKkPg142gds1ngJRnZuifYiDAMyjoxjwEKbj",
  "key31": "4SawMywNbzd5PZBHbvNSbpH32cLSBWGaYx59HwWqf8aPBu6tsyMJ7pAejZfL6gEDnYJNJaRPaKomjDo96JxjPjiD",
  "key32": "3r6MERyaAw93eoHqds8iZapzz8szQaDkWDcZ6zDpEYFBF42jMtyNUxBWhURtL4rbQo6GxybPhJToWQmxxKciT9C9",
  "key33": "4doVUixScCM8vYbJ6NuApwMmqiSbBmBTdFM7Kb5vZL6J64oAmkdqaJwSVdzEn7f7aV196DeqwnzXKDgYa5qSJ1me",
  "key34": "2CAiFJQRp2hQJFdYF2PnngNfdz976MXaFrNZisQ5fzqS7XTLU5nxYufSWHG8nkTPgaxZqqjXe8VuoByTEotMFfTc",
  "key35": "3AgcD6RpCkYbUVTyY4cY5givfTQG5uoCQeaJNn9iEXTaHXK32MuUxyNx3fTrpaBQzAWZaYrP87Qxe3QZtD47qPk8",
  "key36": "4fyxCuw153TyLp4HScGF85Atr4GNvrxGwWLFJqG8xDPtkrTyvMLENfCyyt2MYLAF43LoM2xWAjwgrwCUMAtr2apH",
  "key37": "hMgpHUb7nmQ81pDq9RoQdXfipTpEAAuahPNoxKo34y1952vs5JnDRbTrUL1C7TXTnLDuaPU7tu71dpEoweWBWMg",
  "key38": "4pXLPtwDiNxEuGfQWgpvuM9zho9pnDYVoqs6e2hmreeqVdAfnq6Vajjag5tbayxG7j5NCey9hGUvHWfVZdArZZDJ"
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
