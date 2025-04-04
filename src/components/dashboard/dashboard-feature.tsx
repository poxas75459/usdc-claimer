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
    "KhqwPve5JSnE8f49LRjWGtifKY5deHwbeqD8ygMtNdUEq3jeGbgzNRyUTLaHDC1kuzD3Fo8yZcY4nCt71j73RNV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24CXWFG3RP1rzbES9CFZ7gbjnuRvXjr4jwv47jBBvvKbpACgQTXxRZoiPXJhMYNMZ9hJsgWdGCUPjK2FQxhaqaCv",
  "key1": "25emDfYqR6g7SNtdaksbpayq3QmpfCs1vVKPDYbQnnFaptFMtd8HFpmEDrRLpsQ9deRWQCgBc2Zps213ZibZ9jJ1",
  "key2": "XEUydtTgFhXwFTGX94VS5fe9PHMqtgUWhPh3wv7A9VfXnfE1BRfxPsWnLTBGMZU3CECxZTXc2P8PBMmRR9PUMgJ",
  "key3": "3H6Y6dV5Q6uUBfu2yxzkCe3zC3wkx6rc5LKQ8gh3FTUfNu4JuU1hPw6acm4bHVd1QRbSzKog2ctWRTteJfesWAer",
  "key4": "3gCMDTRxPmubtwC6ChrEppTdQH8zBFtvFDgu617a78iStFPfQik9TY57jiEuj7DQuysR4s1jYYr2BBFr6ekMATCr",
  "key5": "5dsPAfxwMrRxudGT9vHTYjjShAibwgkRmxosEPLWVstypyUiQSWE9SFX6W38jZ97z8dc6pYvaE51kj5cAun2gukK",
  "key6": "3ZXEqv9VAAreM451EyzM8c6uvENSJ3H5F4qMNe1XZLf3AQgkVG6Tnwmk344r82KjCHKFMqysqvcHQrudBNWBDAYT",
  "key7": "rCC3rg4kowwXvcCVnSy9fCwF2dafuZNUj1CMqPBKBrCEoUR2LG2Abj7b8Wv1nZvAcJySArubZZir2bEUo1ZjFcm",
  "key8": "J7njAKDk61b251SZjaL4EFg888pbeSggWcxDeA2WoBNJ5J8nAqy7MuM7FGZooossCGuUMbPS74ywzJqPDefYjzb",
  "key9": "4wmdM8NxH2xWiC1aAJPGS4BY5scfsWbk8o3DbUhwZPgz5MUZ5Cya5uqtsdaJiCKAhwEbt8qSFzXuwEUQmkTytobd",
  "key10": "5qp92MpJi3GyEdfhnDpiXwAgEmQLPFyB2ybG7FCkJvC3ccoe7Y5XCZXs81J8gFJJ3YLEFMCp8aN2nbGT4W9vDHMw",
  "key11": "4PjRSd3mYFebFF622KXm4Ampep3LWUj9NwyBmnaqT6YiLbZmpTmXYy2vem9W7TRDtQMrQa3mwCax2DFjFSSC22fK",
  "key12": "4yj77CTBTHy4rKGeFwZhQPYFXkPPEFQVVoHQgTMUxETLJDE6vgzavwSnJmGbaG41yLs3RPGr6qmbD4w4ZvbtLYp",
  "key13": "4pUZksZm8KU4R4awY5ScVqQMn2yyG5DY5nmkFUR7zJtsZSne8UoNG7w92quCnY6hpdgRfpcT14JoQJENLUm7gsLe",
  "key14": "3C9AqZqYULF9sf85eauop6R4KDCEuTHBjeGafcr8wZXGFDhMPhDQxdvNBhdG6w5Amf1FC9rmhWPn1ggtCYzPXZ7p",
  "key15": "w6y5pdByHQB9ZaRUf7LhRbkRZWKAMYwZ3HMfFqRbhJ329Ed433iGJMBdDimjsjmAjEUrzARm3LPNjUfke9ASUC9",
  "key16": "tyuZvGtyBRwYmgFwLrDSUnTWdFjL75ZjUq1ALigHR14UyEPXyJTuaxigPrQvr8EiyFL5jknBytzHVzAhsQGm4Er",
  "key17": "2XtGBPNoC2bwgBhsKh6i3Sh9rY5kb5uSKUbCs8V7doVSAoquUZsHUrDdhKgDe3mBtQRyr2isMDzyStyNqzuir7fp",
  "key18": "2MARfJvFdssoDxsaEtYBvXNUzwfinYgDrzuEcxHNGeqHnPH9nP9iBZCWnYHuLjKPnC2CWZGMtNemP8DNbjio1Pst",
  "key19": "351b23HT39QUj853qsvEVzwinx2xxLXwSAuQX8Ej3xNxiSbAqeNde6CyYxnUoCWGTCMDqYYjiSNspPLpX6eMo9Hb",
  "key20": "3LE23G7zvNKd7jEkDmS33TbEUSBqjBicn3Fd9PL8RgQ1iKNUqRMNUJroQWNCijhsaecEwBg6PEAPyEr6eqE7E8xf",
  "key21": "2kiG7KdmCYpoVwnAbhT8EEvju8GJ91kqvb5Lrjx5N3Qw1QH6KvmexXU3RNVbytkGnNUfZumXXJJevAxDofR5w73Q",
  "key22": "6YrvKy1ss15Dg5LT1SkiDGJHxRaLBTw1FZimuhDUaFmPHQSryi5egN3BzGoYSnsH7otzHth1ex5585FVqThSTCq",
  "key23": "FQz96M5gzaxJZMDDMGwiAhLidu7xUcDjcJPNTvVunLZ6yhxnCA7f4Hi4ttojrTwNLLLttLzFoMjnCxnVVLVuSwN",
  "key24": "3tZfgEsjaCFCjMR4ZXdqpuSDjWFNkAyAwvYWsLr66JxHiSXjVFFmpEGsxJwmsYoqrfkLjFkTkgw797H5Wc3wwpe",
  "key25": "3WX1fmgufWfVDQJeUrnMgqZkJpwMBW356R9GDHAniTWapgtnEhXJ2oFckna3eYeBei2fryZbKTMWAWnUVFSZExWP",
  "key26": "3Hb6DQm6zKhfHMRvTsVPsCuudkst85dobarUH9XBKwtE6j3aMhsihmDRfd1JokfqybqNkeZPrQu8TCGL4MjVd58f",
  "key27": "88UaNeXcihrxaAwqLPZiCUPryJrFsJjjk1xKqrVwRVa7k2AWmsuMPQsqufybE5PB2EWHSLBrWPkhH3b2s6q7wMX",
  "key28": "xMZATFApbZt3biJmF352vdjDWaNvH31MNr9RdR4fJppjm7ChecRrtPhvuP5957o7L9mp4JaGoaqtzniX9VCTuAP",
  "key29": "4HaeaBFBYDxcUW4a3tBZdCeM6iZekbjzbSZAchmjJcr7z3uXKUebQ143kHr9tc5oVf6Eo9r9J3DgkaqhfVrEijy6",
  "key30": "2ijSEdnYqfLghv8pCB6hoR3hBToDXsUjERR1Ak8sVphJuSQctuK5FB6NS43L1ePPeTn5qbo9fLpMb16LdsRWsxMo",
  "key31": "5ZAgsxd8uGQYSx8A2LZhN3zUv3iqBvncN1gdKkSX2siA3H6pfe7Z4b9B9ToHnsveNqbnhF3zQ1r6PqC2SqTdZiSS",
  "key32": "3Pmh6qes5dA4wnehs1XyJY59oubDXpMrFbUcua3vq5zPaWjdccFkZdS6DF3FwhuQjxP3zDWR5vAu6ZWxbEC37S1F",
  "key33": "4tkpLdLaekHywPVjegP7HuStMPKB4vLsDihx35sJVjUmj3KwtqhkBAkubCc23r4v3meBi5cb13s1Ub9oPeUE7yFX",
  "key34": "4yZXoLAD5BXoARx67KpwWtdZYyhutfeLjmFmCpY6PuyQd27V2FWm99h5r55nZV2C3jNQviBnUgXq2jhgDwMewJbG",
  "key35": "5MHL9YouPumpqa5V6dZBJwUDdYEHLXakUdP4B8wMRQSKHXjSXKyhqgS2QQM2ooeFCcehMKwtR6n4vcgwKAcvbU2Y",
  "key36": "59tCs8hcQQG3Q2suG8v3y2PG75CoiTDRFtfSEWFNy6oUhYWBcTWAr5J6w3h21pmMbJD22xza6vwqGGkYNWNNgDSa",
  "key37": "2ojqVPy1eY4JyULktqeXMK454gZzy6vZxkLTPkHGBXnuf2ZFXaN7UkC4UyNHMFd8whttdvxjKJg6a8LLMujkcJJq",
  "key38": "EkYjnfSBKdirJ6ctxn1GWjTjPjwb9A4ksfCddn2epdz6mvQzc1Dax2ksFXcGovemr7YooX4rpDeeUbgLT4ycf9F"
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
