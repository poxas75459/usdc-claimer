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
    "3n4TjJTLANLNQKstvmqNG9gyJXcT1pffBeGBPzx9Fu4YuegP4MgeZ8pqc3Y6MDVX1Y6ptWmGsSSzTDyhzwPV4jpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4N56Ge93xsjivnc6HNYjHthKX3ZpHGzCb9NDJLiKR49RkBM8RArDk4BKdTP9AD1xNmG9J4YfmKkniX23ZgrsXQSM",
  "key1": "2CmyEH8vvF1TJxUFvSwtfS9x5XnNpVWHvebgxUKPWDnTSRsyvZYYnMY1VTbiQPSGsqU9HH8vj8uYD5Y5RXx4HaU2",
  "key2": "3gjWLTy9mFcdK5Nnive3abjwcwcGAmNENjqGgdeNQzfHUEGrSFgGvLosCUGpHikBe2SZLEwYKgxtHVx79gXcwYKX",
  "key3": "4khpyYS9MxLNHMadMgqcTsdbjdgmSzyqcu9WHbJW5MmKBKeWrnVhbWAWw1EdVwkyKQQE2DxoVuWiG9TWXZKe4L7r",
  "key4": "5vJ23MNULvdGjCpXq1aDzALZ2FEDcmUvhaLfKMbhk4CN6XCK4QJMzDaNLHhAcMbpbfB7CmF8hgQUaz4GqkgZBJdS",
  "key5": "8XhXpYp2HmowKh7hh7NGNCtN3ytjcrKtKUyYRoZzZPRVfYjPgoBU1VzsVdfXAvpHG9g5gX9YaDF7NVLTQSc6Kwa",
  "key6": "5UjquBuUKLmVMPgyrwJYiWxERfnrQMt1yVndg5AW5t1PTsVaBQJvwQ6xccMQXqMQN1eA3peSQNRimLyNDe8TF2Q9",
  "key7": "4Hu6d2Pp1zxJ9qi2Z4E8kxtvsdKasRkir35nfE7T2hnYP9U3C6air4JhogJLRgwsNEsWnU53UY1F2q9hfynGaaVN",
  "key8": "9unaF5CpUqUS22MBMWGNf8zue7zAytxwDRKuKPGYM1a5TpbTFYTMLPaECMT357knEydu6X6EwUGy9EzrngwXkFh",
  "key9": "481wkDt8Nyi1s2Y2Y9sqvsAZoQRKiwkm5uDAi5K9R2mGUFjussocGuy9mNr7e8ybGwk9agBBA89VYjfowLe7vJmT",
  "key10": "3QowKBgmMrPA8TR9GW45kTS3vpfH1DuMdjYPJsoz1sHyBy5ubZd52L4TT1m89iWtJtHXDD2Y7eCKffybzqxmVmPM",
  "key11": "125y9nQyvQkCX1L7ps2xhsaNvuhG5jEpeyEbipCTmP5pb25VsJajwWBgZdh8JSpTSVUm5Y6T3Uo4BoG9Jx9FVyHM",
  "key12": "3JMWjhJw2i6qxMahZ1TvP4Z5AQFVpDMLHYgfpHvQSjrCufsi4Cx4uMXCGeM1RRHpvF5mURCGVGBXZetRG7UAEqvc",
  "key13": "iyjemj5EEUQd66egeBjAraXH2AeexDVVLrjQwGVHrkRoUv9KHpvNskpxRKu8taGutTYCcjF995iKKBWAfTDZHZR",
  "key14": "3M1CJPMzGMXVz3aJqNbckWY5iCVoNX9ZvAeKq9c75EEk5t5rs53xKpSbvgdSiJhrnnNsyohbrNTwaAkv3NT2i9NL",
  "key15": "3NhvDLbbY8r5Q7TVhZBgnE2WLsjgKo7HC7d2VxUv8ECpcrEEJbtP9WGvYW5Q5f41T46sojadG1sHUKYa2juF5ngA",
  "key16": "5KjH47qufEV4sSnuPCW9hzmDfFkxP7nCnnWMfkQb4rcvev3oTVduF2NCc8ztth4J3cECr4qb4ueSFvrw8sbTW1w",
  "key17": "r6PvnQEtjjSJQgYNE9fmhUMoXjifeGj97exj9XSZrhX66CvCHzmKxNqgHHfhp1aKA392ekkoatajuarWZ566WNf",
  "key18": "2jgGHre4Cg1rE4P1EawsWu8WLfRCpVmhfRrnWxgdSeHkViQSM5oCBW1BTU8EmtjXjVUcxoEomf1NQ6aRdFbzp1pS",
  "key19": "C2KHRSa5pLM5AQx5RdAQecnQjRZfttLeoim1SVnt5Hq7kUkZwsTD4Qi7iQQU6DnQgAr3dSPNCSMoA3CBgqP1tCz",
  "key20": "2LeYey5hYqkLZfsgG4LTJMnTz1NLphTtw5qci9JWbUNeQMcbdTD3gb2m9oujgVV5S1Svb9KL2PZf3tcQf73GJ5uA",
  "key21": "3xTNcKBhp762pTwBJvJTQnR15uS3qrmXSN3XTUxqA8ijAfePCFLMgokUdS5zf9Tve9v3huC8LCxY6zB3SVLJUn4K",
  "key22": "4WiB7P3MVdkRTsX7Bh9kZr9mRJbFjrwDuXBVjSxwTLJ8YADe61WD7cWyCPrauS3zbwuS7ggoBnxyMLPwUmGuLpAL",
  "key23": "5wzuZV8r4c7CWPu17twG6Rz4Ndc8UiGdJBeg5QVujHDBe9NXGoGhHJkM5LGwCfBrFiVHeSJRPuGnFPX6QqUTSfSx",
  "key24": "3c9kqf9w9K77QAmVdnCX7JmwZJ8vKBAMfbcHU2yGcce9Gvdb3quLCHzP31hmqQycGEzqGq2Cox6itihs6mLms9Z8",
  "key25": "4znGq3zTtJi5vsH3yd4nxnwNUcuyPGJbvKs6ebSxbtEbD9qboXtH64mdCKTiK1MjexqpYmMnwFPww7GkyR4jKybX",
  "key26": "5zr4sSuSmQc4YH1KLMZWVyFnFXXV9pwGqL7FXBA1AkyFh6MfqZyMcYbeU54RUX9jnD8Rbf3woGJ55TUDAbrZ4haj",
  "key27": "4eSEvQNNZ9zvhjMYQ6b2KWAL2dcWgwWSTfxV2ft7wfYQsjQJafysXB2HvCC4nF5jeFyBpn6YJoypDFr32uDHQtxj",
  "key28": "5eERVEiL9ey5qgR5ofLXv1SRgXXFhmbT8qyZ38mtuXmStXjZguciWQTWJeMhsrV6movezqfmoRVtfMYXZX4ws3Vt",
  "key29": "xYfjTR3DsMJjTiV6sGW765ArKv9ZXTFRMDqTct3YswSGKbCvehXzN5bryfKiKqsoExAMS5g1EjVoxdr8iZci7zF",
  "key30": "3iHvQNrqzTobcDFW6ifVRuzkNVn7zBd8eNkm9PHHTCaeZtTFeMUp6PqVEMhKyd1KG9yX6XBX4xxMUk7c72Qsdys",
  "key31": "4TBVZA3RfnStkydArZTFNKtL13yk4XChRXbKDLyi8b6stDhb9yNyRwGvDMhhCXZSs5HMu8aMMA82A9RvSEWnuvQJ",
  "key32": "23FZiN41A6ZPZzW8L5Cap4n3SJsuTAdFySHuHe3jnTKG4FLTSP2UXEwnTbWJpjCT6wpRqjaXpdkpUEBLJChzRN4V",
  "key33": "3pxeuTYaMHxZ1VVAbch6Vc7bCM1qcg2HuQjKRS77mUakHjXCgB4cnHcdUs8QrVmbMwxq5abfd6CGNTav6oktReJh",
  "key34": "ms3ZLXcmfc3Cit3L19CBaNA79dJ4NgYSKdLWUn3ZnrE59a5XSE1itFUta9dKLX8hPyYnYDGamW7z623BGTh3cx7",
  "key35": "LJNxy8M7rxmku7mMbRxpv89mkbP3rpXhDaHuRKS3mRRhfbQYWadLBXfvFs4vzoURdzh78d2SqiQoHnwYphNxHXL",
  "key36": "4typ8uFoSbvhobxRJhBhc4VhmbALogp81gHnhxFon2R4jGiBMbRXwwutyFbCPQJxQNWBF32DatNqR1sQoDcXzWNm",
  "key37": "3BTeEgDhpQ3LsqmK4Caf56oGT85FP8PKJY5XyZLf9QWq13BBpij2K9qKVdrb3NfBZPdtbEScuCTkXRFTTtvVsB7W"
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
