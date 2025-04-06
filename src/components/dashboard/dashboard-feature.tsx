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
    "56yWaJUTx3kfzPcuQ3NWoyFkfD9qhEFSFUzu4hc99Z5q3vtex2k6eCWryx5496RDfX6c4Yp2ehVatEYYAf55VQVB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J8jiV7GiavSWiV5LdvNPXK6LZNtsVB6mFPEJ4Cego9qcCsFaHFkh5qtu9RYypgneeagoGu9FShjz5HsPMnDM8Zw",
  "key1": "ivLzF2cQXBtvBLtnB2sEhrtfvJNcqq2meTmFvgjYwD3HsdndqGSQCBgbD7LVAcjjQhtmTCjj8Wu4dps5UefiiCe",
  "key2": "4pqUDadFm3QGfkfPcVD13RQBVCunnibEbiC8fWUVvURjrGzQFEhHt8CHAzSpxoUWV8H2i3Bz6BMPE5Sm6FzqtSJt",
  "key3": "28JNeod3JPKGpK2Ff3FG5SUZ7jEtYtdN3BxGHyeBfig8jLrwuhPvTQ4o4iU2ZVxzhEAnX882DhagJvHRD7PCGCHP",
  "key4": "MGyWA9oW3V3QP9XyY5YC2Bd3NZ3jwJzHJ14SPr4f22jBbdMvhSCcJbHPayhYAqupHyULNwkSEAcCPiCeXE5Mx1Q",
  "key5": "2A7JyGRWfuvXBt3WgBctaxhY4ePrZtgS3PkBnsSG4aLQLvweN5JzgnsDdh5uCCCpgXHxQ2VUR644W8eReMXvU23q",
  "key6": "6bCMWuAgkqWE1UA9SCXoxzdQ3fmmGzLvE1PocAZsffpBT4HXgRD5UgfmU6foHBZDmMrQbxzNCxu2PhNxZoQbLqJ",
  "key7": "35tVogNvza36oEhpnAwKQPLL2ZWER3HZBeKBNKRw5jQnfXvBh89S8jGxFS1a8tfc9fYnQMSDZFfnXyhFjtGr82Ey",
  "key8": "61e7MxXUghByoF7arK8WBBF2iZqWG9WMke1wtHqztuwoHKq2SzZDV7Bq6xUWDmA9XHmL1MU36AHxPGfhopFtAHN5",
  "key9": "3RFTMmwTpSNdJTS2YV1J5WcbcNPb1gyi57EsxK2mRxiScTNum8utZ8kA8BF2jbgJL1WTZbPkoc1ZmQJoG86MrDBD",
  "key10": "3sukSUjihAVhoEcgL4HHJzsyN4zuA68udLmNHkz2NMBWHSeZEc9R6nugEZTpJSnaihjzY9ji5cQMjLaAJpANaFyN",
  "key11": "3MwSLaEdnUpLCHdJ2wMZuaRG8cSFpzo7KbRZyJx7gYmMUca5wG2FsuQDbJhSiYuXr2QKKBiK4xZZy3gDt1UbTX49",
  "key12": "5MnzhCt2RMKyUNGkvAGAVQCDLpavoT6MLGvKL8jsSbC8j4ADE8A8wSnG9nxFTnjafPMCfVJtiPwhhgraqHitT6KD",
  "key13": "364EDB66E6LSEcHETf37Zivxf7vfmU5yhDjTuXfEPcUkjvq4FaRXBnyZNRX733RMrf9izHNtwUFhcSbuyg21sJbc",
  "key14": "3xLyWRXpFtWJDQFmnE94uojEvhPndU9D2D8PPNGnAxZvvZerL4ru8W411AyjzFaP7fP8HSmcfRnNkEU79SASjoLu",
  "key15": "2yfbk3DXSCS6si4yYUkMvLKZ4dR9MMk8G93GFXixT5eeEqXNM9UJaL2P3wVLdvz46giVuXusv1vTWQ29qRzLRPUC",
  "key16": "3R8UcsoTAkR4nA1YhFRuJCnoLuQBHXmrHHZBHLhnbp7MJvZFgNNEKPiVEo51DMHaRUNq3shwZFvftqLd3XABmVQu",
  "key17": "623bcGmscDNqNbkmvpMcoWeTXZaEq8EdpUKjvWbNUFNvyvBabiV9GbMLVKJAGoYVqtJziU53KS9eg82a6TK7mJ9e",
  "key18": "2SKGatCbJB7p9gHUjNdTdGB74ZqWcvLoyQUtgieDzABzVHccnn4KMt1hvyum88qsrhSo1iP1xkyg3yqXZongCV6Y",
  "key19": "5TYNzVoSbQYwujJqLGSw6exgbs4JoEcmXmC6eYwnFNv5S3QRHz5TLBoQMvKw8YgtnCnpYJsMKC3im1P6H7ews7yY",
  "key20": "4CsWdrLv4XgNo3J29zMEtBi3LMWLjWcQToQNnezCJaZ7FrQAufwaQ11EqGQDyz6RpGm5UvwxDRajU96TXxSKcian",
  "key21": "5uvJfWPcdTMzDNJyo9Xph3eMg84AAfeBriNMvNNdL1SkZSkM6fZiDKgA88GrAxyZ61AhZ1QxPqBDn4fj2bWv2S6E",
  "key22": "3ojHrpqF7UqZjQ4TK47ReasehFu1Y6oVWtSNSRS2RM2hWLeGhsbSrsq7UEz1jMPSye3nhvk1GFP3WZC48sSPunhb",
  "key23": "EPXPZBucz7WTs3vafY6tSibMjj48FY3Trv4YaXr5LsPgWNVarxi811S4dz3DCYErTJtHcRerkQ6Km8emB8R3wFc",
  "key24": "2ZEUjNigZXHPVy2Pjm113UFmaGkSjbMRZUjWb8oe1wY54KVBvsXzyrkSQwfXt1rC57fgWy2bsa1whVsnANxHWQFX",
  "key25": "xPT59tgPp7Qf4d8pkSL4JQeet8LVR2o6UheuFN4FvixtQggTSVgDk7MMF2irqonsgF8uHS3Hg8wWfL32HAcBuds",
  "key26": "4UzzFoofLPYD3naTLzy86Mvmo8dG5MN261NKNNh6jPQfMtVyA5tcuirGJwayLeZbuPde8kKnfKZaa3fzQ2DgmcyH",
  "key27": "Kk3j6Sj8PDxDfdkTF2XXm3m9wZqwied5hAWXhqdg4yKkMLQkxwMSNExsStFoy9M5Xp9CU9DtnjZyVL6MzfnPun3",
  "key28": "56pqdQUkSGGU7LkTyYUs2GhYxwyE73ffoP6yj3cgfk7jysCqMUbrr5QwrGNT7Emz9mprU1WyZNWiHpnCYvPAmKsq"
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
