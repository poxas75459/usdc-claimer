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
    "5pvLm77LJDdaYuK3HjSdUTiuFdwq6gjbZRrsHvQKCV1AV5e4p9G3d9tzb5Lg3YpjjjE5Qs5cvs6tLvApXGr6tPW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66XeGqM41NmNGCGDuegrwyyd1ATaZoRTdtsmZ6YkTGmXJFe9KMpnda9Qyb1keXzgVpgznCdmhW6eSLccbAZz6yVv",
  "key1": "3Y5UF7zXNe9zQdBBcUW1vYYigST8EhM3iZPQX12WLig94hEpwX7GT2GFX2aRWwPTTFkaVLabidbXXZSEHsSaXES",
  "key2": "A9bT4RekR3bXJL3jGgFJLfUKihcgZRfbAZk4icHW7HMF4LpMFQYzT6gRe1fTue6u8zwAp78C6gQWVF3zyBN1D9W",
  "key3": "4VY6nEU9i2Y49j5YPJoZ4nxg1DHJh8uwom5qCQQLKCR62qrx7oNnTneTn5gZhJ2RuarerrTh9zSA4YxZ6cj6knPb",
  "key4": "61nNbkZzbnfu7BaVBGat1m6gd1rcGhVsPaHtLvS99DZxVNMZ6fvGsf42sXJrEx9Feg67eJchprvmEANLS1nXzKXA",
  "key5": "2aSHU5NsiyDukNP5q9yMP26u7oCuNvNddJYGA7nX977R7z3yHsefufTwPCvB8gne6MTv61oqwYVaGhyB38EYmv3g",
  "key6": "2eai2aeLxjBHAPb5UJ6CrcsgFjvo76XcxAtRi6JADb3mxYKXxciuRNxmdTj5XPtiHFKgRQy7ffKewUqSHyQoQpp8",
  "key7": "562acnwG9YvWU1Wxm4cTeKLexsCnFS1ZxDyVM8xCnfPdXWKL4FeZ7toX1EHAGPTS8YVAojjBSPCZPftVhcEip9ve",
  "key8": "5efEVnwT8wCvUDw1rXtefDJEoM3bmFRozRtSxMFy1rNgdRT29j2DaJAF7PtNkNrGyRhtHhVvNBJbYyrmGxPHnEKn",
  "key9": "33fa7E1GPi8nyYjrmsn9Mi9yahocpgJhafjKXz5DtUqHxMBrQpcNJVXPhgFANMjB9S25rmooALsZzYYUASLnRc59",
  "key10": "4MyncLV5kjzjiKNjxBexUfonZxFfVtp15mszHEt2jguFLU8RWUEcGpQHZkbVcEjKFkFN8wun3ortroQCAq8QoVHE",
  "key11": "2G2uUqVR5mqC9AqHxwKSkbuJsXybBMvxrR5jqsPcbpsbBKBihgRQM6AgqcT7XV2aVxZW96hcBCbqDJn4dXDH9bte",
  "key12": "2nTjJwTXZ8MriKQd9m3Ksr7LZ4TdLoWmHnSQPRvWKeKCJfkW5HFST3s6r6gkHu2tsGaG74ngTf8THuMMEog8zarc",
  "key13": "2QGMTEemJE2Un6n27GGTxwwZKknHYQozKtfHxj8cfNn9piQS1u6c8VBdQmWTbnjDfxwJFV8RcAQdApyo7FK45UuG",
  "key14": "qoh1ou27v4XJ7KqXMYVwrrj5zvhqig1XAeFADXq5TSYJdE2XNYU9JkoVuYaFm8PSNri16R6AY7X34R9yN9vrUan",
  "key15": "4mJm1VAFZQSCYRzb3wCbrbCXhByXTgicbbRZfs3LdHjYiG5SAuCi6A1DvYJBnqrFk3rTEayqnhrWwULHB2Ao7pHJ",
  "key16": "3SM9sp1wieqir8jAzRDmu2DrQY7ZadC3pLtGDNBmEMCpRnN57NUHLFE9RAxyEa1QZHGVYMg5FBgioiKi6dgxMJij",
  "key17": "24Scnp1zDn7ApBBrqbsDCTGf848bysSnssDT13UWWggjjRP2UHVhaBjNELb5x8BNxw5A3m8aMgVdqj6aiLpRhCzD",
  "key18": "7bf2EfKkfvUBDzYDiE8bnLmzQYnSriLUmbCTeEHxPXBpApS1Bro5vQkUoRjE1KvCK6uCbk4hvp1EqLufQq15C9s",
  "key19": "5GdKAPmGK7qMbGpfevxsmvgsd5xiPkn746kzcLCDyFegNsVNzQXZRQW3BbczQWCnRGu8Ag9qTyUXmJDwKj6EBYeZ",
  "key20": "CrJyYE5xWjUKU83wNvpBD1XVNSFTjxMHnA3oxwPg6DExhkqGRQTF2XX9X986QR8VCE93QcnbqmvdrUhe8nHcWhj",
  "key21": "hhe5E82XbDKo3CBw51hiW2q5HjSCNQxqzeoszVBVeQT3QYFqBE1QuitWmffnNbzUSUCDdqMZn5YkFYB4FEftfLK",
  "key22": "RP98Yrizt5LncHym42onhS5zW2TfhFMsZMqaBocPt6CSJBsMSkoMhwSZqfSG14ALzsoPMEZyR1Qnwpajj5ugEDS",
  "key23": "3ksVjpkjCqcGovQAHJc2aqh2bgo8gm5md33F4pyc6UaNke3Uw2gbuphWnyhNVdZKffPqKgHBWBVMod1NoSQZ1qvX",
  "key24": "5XZb3NgEWsjhmQTbHK6b12595j9KhKsGJVU3gemnPkmbgHMUR1BV9Mxr6fPfftVHJnpasURodpfbfb71MjVtAW3",
  "key25": "3VycotwqqS5EXfXfumSTB6PtdLm6XYQX3LCuwC9nSuq38U8WG75VDojhoYDrHan3E9PdmRQws36xKgpaJ9E7vShn",
  "key26": "5ax4dkJLYsaVD39FurqmjF3VoQRt1VWTSzPEfzkwCiuMETCZrW52eaDvXbnpZhu3gciLu73CGqr86T4otwbsJqCk",
  "key27": "2v6t9FSMqEvtL6EBmuUCJRejhEm6LLTwMUF5BYEbFGLn85PnpyoeRb4iYSoEAAHcRpiF7fYM2hnUm3nqPgUgo6n7",
  "key28": "8jcn7yHRmUcutDCL9jEowdXgL7sX1YD7MgZbvVduMJ87nJUhTTVPXMvPBtgh7xMZLgWwbGa6WiENTQdzUd1dsoo",
  "key29": "o38YkBMFc1ZoCzrng2YFQTkf5ViWpJzhdNycuFxmbSPoaNayUb1JDnu16php8cENXPvpgd49kcPSXWC8fC7X8qn",
  "key30": "59eqG27VrGJf8KitPkYgvLUeZDV1yAAUiEqiQQWqJwkT7oWwtYh52RRo4pEb6wJv56ho8XxUEHUrJv2ypffovHq1",
  "key31": "3GDiUbs97kNbLngNVEHFanEj5qhp65njgnc27gSTd3by5wB1FCwthskqZzgbtCkrPhTawkKmxrRJEkFycMW68cTH",
  "key32": "UB4LTredyvzhkFZK3WJTzXeXvEfQcBZbfoy1yFfyvaJU5vY9W7CccF4RXSf5AKCeQTc348sdVHPoXWPZ3B2QptL"
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
