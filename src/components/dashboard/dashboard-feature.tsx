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
    "2AVr7mjTGfKR7FSFdU84tuE2Ao26WT6yqYWwjJxPFeXhbLa5Zrnrcu3qrmqr5z64eugtrhPmFVZkvYKgxCnyythA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3j2poupYVgLqhFrm1aGzFUSHDvGB51yC8KNpDxbha7mAd6Y8b1g5VgoVR3F9y7WWR6SHQQXweGEz7GzCSY1eVhA7",
  "key1": "4KhQ7a5dYQdiPXvemo5vb53ZSPJFXm8UVTRFsQEPz8VNPqN1157GAbphEsQcym6KCJjzaZ4DPDZgQV9xkeq3NXd1",
  "key2": "4jK9TP9CuqjskBC4uVuCnG2mqin7g4NuT3QmuSf5qo93k4eMdb25qC9TcQeuWGUDvi4kZmiVMc7JqjfCWC85dJCt",
  "key3": "3pGo2HPgJe6WHkfXZxwoPyqPi4mHdSdSFJrHsNfjLkJGcA9TLTiVfuovNoeF4sCH1PDG7QtgjdaoKGnnXU12Fsmw",
  "key4": "LUMUSFC3mS3Jy7Htdoesa7g6BXT7mGURWAKU3QTbiXQTWcYDzxYA752xQ9U9hhAEXpadzbUedfJTLiPzJXDiAVL",
  "key5": "D5MpbzCFNBt58MNHG3YA4f93uavb3JdgoajXLMNug9kWjge3ewQc2UdSs1JLzXN8n6TsBeNLH5LE6TfrNnLYstw",
  "key6": "2GaE2373ufaB9KmxfdHiz27u45F5mXqUCYzRmKK2XefxuuySGofJWAYMbzhG1Huw7bJqZgTNENLYBm2Kmbswx6Ud",
  "key7": "4bTh7Hveu432wEi2LSoUSNqXjgkdd92UhmCWVsRaE5Tkxejm53qCTNY99jPWUE1SRsX7X1ALKzZoVmf1bjwMouag",
  "key8": "393sgsCaRxCHa5gDEtgxPR5myMetEGaXz13UhN14ugxcWp8BxWkyAkYsfS6W35ZPqBBoeCi4oMCRKMq9bafN3T8v",
  "key9": "4cr2uKL9ArpACRQPf6ScZ54FNnDabacBgTFmDp5y2haFTsy1MvpUAZ9X1BqoJDFFXoe8Z1dnVQLAd9XtHvJW9DME",
  "key10": "xHKuZo9gbHe4tyS5cQFpfyyiDbx56i8P7hGFRAWNu55cEM1kYsvZrzpPS8GLFA2c63M6e98NHRidihNTZ9TGrbv",
  "key11": "625wLNx3DSMLfX9565oBQxcnH1dWuyMny1FX5cVzWG8Abg6yvrZKsd8eWwQVJvsuKpB2a7K6swxx38geHizkESmx",
  "key12": "2GchYA7Gc32jA1p9oQykxR44Xv25DJxZ9yuP6RJZZjDmXDbod1cgFnB1sM5kTiV53tvwDA31AuxxTTgVvdnTMEqV",
  "key13": "2oTj9pKkCyvzkCCfkptx5ux8nsPFhxHrJc4WTs1d6ZQdEAx1BeM6GYz7Gfmi4Zi5NApqMWB1sbwhFYMf7VSCCGCP",
  "key14": "3j1V1gNn8mcJjfCAEWT4EjrUrM7BVRdNAre42eJ91FJngzdzghN5xXP4MSf14DmWWSCpuz63tZZJFaupXS13sTCJ",
  "key15": "3BXXyLxGgcQh4QC1AFSAXSrc3xUgdz5PDytsQpgzSMd69ga1PvDhacguVh3Sp2CHrRaL4mbJ1Wh8zxpQnh6ezGi5",
  "key16": "299t82ikTo1h3CFsgSbAEoUwd72xKwCgBohTXAWj45ebxakjFPD5TKeFruTwyV5LkGCC1xzdAvjKryegtdxrTjxH",
  "key17": "4xyYDbJisKgWgPth1vTh22RJfwnvtgiZUC5b3oHsZaVpLF1ww6EXqeodegTP59VnsdLkyEzaiqgJ6xGopoLWowCn",
  "key18": "5EDNMv8X4azQBj7jUv5USDRccTvj1W5db7m3uoKDK1cs8JU5E4JvwSq14gZEPPZ6DaQx7KyePS7cjKs3cfr8HkXH",
  "key19": "4bC6FbuY5zhddEb5763ZKqD8eLk2q8xkBvc2todkTqwtfGkY3RzkCz7F1GGRhdsvPnEHbYnBt7uiXiPfyyirJey7",
  "key20": "rLxvCw4vT4xSLqTyDxE4Rr5zuWv6a7MXadQFVJwvGRWC675GWdou3DUaWjbXLdofVWF7Ww9z2wGa1nerEA1HNuR",
  "key21": "ydyL9JhhbFHAn6ekR1j4K6R4SUucq5vLdLqvaZR17qonUqUx8CdpAk5JbYBSG7ajTrVzzU1XrEmHgnrioXRQUXF",
  "key22": "3c1DMFqcjWg3DT9DdTWL2NWhPtJ3oHUDuaJp9RuABJDiVgc9savkgd5HamXjqJgNiauZUrJdDQ8CewezFgMx5wSb",
  "key23": "7N8S8RPLjGgRVwWjzRry2JFFKDXsv4AeHNBJy7nLEPiJLYdS6zhYpnqBtuDNj4njF6vPirP61AtqiesBisL5mrZ",
  "key24": "48xXttGswzE9TMaXUWYsjTz1yKwfYyiTnprwDdWsT1QHXEakJ964fcRcrDJGjS86oD5Wbs8EYkUGwcLiPiNZd81t",
  "key25": "2ZQLjyvD1v3n3Ar9qYHBWo8JGZQ4cxNTU5SNsejXD6kxwQMuPMgF73xMACWwb9z9QhtD1Ne9eMoXfmJ1RzJ27Akk",
  "key26": "2zFcnq5f2ivt7NDwXKWH5bhLmo74FiMB7abfFWvLm16fe8QmjBUBhgu4tBdXkTqKNjybYCnvTh9YeD4oPLE7Vu2W",
  "key27": "57f2N6JynMsE1FMgHdDts4dvDLyeA3o5zf6e4dzyqfv73DTosKB37cLdT5pzPZC7rzohgjMo1wdCyv8obJV1G5XN",
  "key28": "285HESrc6nsvRwa43gJGrQhkg2UHrVWrQPTSf2zydJawPN7pc4JTGzFjwoGx9wPxUg3gGGf179DVj4eHwhWejKxT",
  "key29": "da9mEbArKLzVa8JmxWpJyHEKfvpyRSbDCkhYNHKmVrEYNKYSvW4MbKJ1uzWaUFUf7WZ8P8mPYnYRw52HkZpkEzy"
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
