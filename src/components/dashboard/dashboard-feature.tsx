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
    "wUTPK7iUAhGeu1gBoacV8Rkdc7atWrEHsfw9mfATxAvrVJ85rhf8tebuYtyZtpZAS3D69qFjhejJRRKrjxohZRE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GHYtNuDPMiv3ckHsVgzbVvKTU6WXUAmsAAcDAL2BPSbUHnbBVkwnZUXBELEsv5zXR8hXhfrT1jV97Z4RQQCc4Xy",
  "key1": "sY38BibJYWJYBRceQDKXbJuRZJt6KGU42TrxCP6sANjuL2KYbCjqiLkpVBBQdrhw6o2yzgzn8VQPnf6kyuCs6Fi",
  "key2": "3hzghy14wvNvnF9xUfy8AcRp3cxZp6Kbbetj9yH2mPX1a7zRt978pPP7QbE7UARakym7yPjqKA8YDbsi4oBGjwpe",
  "key3": "8TW2TUBEN85opunzEN7fEGFn2AYy47B9AptF5FJsYkqs32F13tQaY2bjfUataFaXKwgpxfvyit1j42nibBPwWRx",
  "key4": "33vTKzDjv2yHeEJtgku2FvJ1iQr7kqvBbpp9CprSscp2EMqQdPRyWkX3ZQDbXocKbA5qKpUqJW1CwL8hATsSjoik",
  "key5": "3hXVNccw8zy8Had9MoNmJiFvYSt5SYv2WDTJf3AuWGx27NPNWP1iZ7uhDwLs5ETMLZikUpTPY26ibyqW2WXE8PuK",
  "key6": "3sirJc1REwh1UcyoXATWAz1hFg76wMuHFnymDFaMEvRn7jihnYcRoJ2EShkGETkqZptMxUY9ud7NPNs9ZobpqpGY",
  "key7": "3AFbXyPhzpB8Ed2pNp3Ro9nYa9dyMXZ2WqC6Kb3CHWGLK94m7iQeK9pmrKEhYz8jhxCJW6ej9kdHeuRGcMRyfAvN",
  "key8": "5v1bQur3qqjAZufRRpNN4nw2thW6tvB2vnUmjuAGjaBTpt5xHDnKTHxSCGa4EdRAFuXLz9sYfmVt7H91QEVb3KFg",
  "key9": "2hVnN22AkUfPXfxYojdFWDTVRSBH84HXktyDuMn1pEaGTKMKjxhPVNCozpk5hwLYvLqbAMrgTR9Vyk4co6LDFhKk",
  "key10": "EAHMRzxDXxySowUHcGUGUwho3Z5MX5yLUfcNBX71zbz8a2Fm6yQ8wNit9AEWVLMGWiU1abosKMgVvM7BjpnEz9Z",
  "key11": "4QHK73dWTTMYuGFfgo1Hmt8QuQCkRPKLheaTRTYdMXYXQNsZQ8s5o2UJen4vMGxCNztsfQxmstW1FaMtswDB3iGD",
  "key12": "5gUsiDw1fTEtLmFLYVTLRTawb9gx1LbuBDCBBjy6MXuHMPHiyce7Aev2RpmXR98dRCwKSVG9yF4ze3Vpk1cbN3WZ",
  "key13": "2bfPXHruEKm35GhtzxfQEkjhZa3Hm27RL6hTjyYfyhdKQqhnS8Gpn6t6snNzUmXe3wVU64FHP5mHiPCg5sL9pYSz",
  "key14": "9Ks7PUTS8v4k5BJjy8ExENbMhmMoZ9q3nPAobbBZ2UBLKoBEbCFHfVydKtidd15SdzWjLNLdFWnxf5cL4Nt8Ndp",
  "key15": "2YYY5Bf69GJX96x9ggXcYXRWBA1QGGAP2uUDF6D5eCLPSTkBWFBo8kwTwDrb5pz7bfxPef1LDLX6JwDtCn8sZAQb",
  "key16": "32iudznHedR3wAm1CH8UxeMUUbkSknznn3fkdUURdUXDKvtghKpXAZ9QBCj5GhSyLyhFwQc8qwzZYHmSqhnmMXh6",
  "key17": "3WPLZB6YCqYkGzREEhFJLvXPZLdVVGeK68bFjkEzjtDAGkJdAA3gSEZRpzb8eUQyCzKJcwAbRoV7cfBp5DjmiRbD",
  "key18": "LcRMxEhhgSz1dg8QXUdfx1o9JYt5acJ5m7mSmjYY1iiEkZQxn3A3ErYXZ9mrMQcmhb1tAHSAx3E8S1EL7jeaRzr",
  "key19": "3fwzWnJ5CyLWPLdUw1tMxdvTPgiLMRxmxRSMjRZWMk34t64wFteaKgNWGhbiLTNN2LDTqogpNtZAHP6C47wPqMFo",
  "key20": "3pghSqKCiLinR3xQmDUmw3GRZ6vXegMGqqDToxnFu6gR95a2c7XfMvzmf2Y3ktEHd4CktjzXjJCN1xJEvEJHDATH",
  "key21": "3HgBGuoYDpTkUa8S7hKJhgTCXU796hd3CnNL1x1c2Htz1jKJKunTfLJ7JMAARydALbqt1yPCR4v8W3MS8JR3ey28",
  "key22": "4cLX5c4LYRDk1S4jVsz5svcQCFWsN2CFK1PnmUyrfnXZswzth3H8a5qB88aqmksTJu6YyBGdyjnWSV29Eg19YoAo",
  "key23": "3n98GXcwcff5pFVnD1fcDrCMgGS92CinJcUgkpLJKPUq5wy84GXkBvJj7y4q9kEznjeqcEcAXu7xh5j8gQ6agp43",
  "key24": "RDK82EhzaUbZZA11kmQS1BrnMapCXFmdQD3nmH5V2e1RPzYHJXB6W7vxGwJfyTHPW2QXDnHPCev9dWHTmw4rsF8",
  "key25": "2vGJGnURijYpKdpSfFtphupX6EjnP3C31YtEiizNiW7wT2ubPKD1iY2rG7nM351SZsumNzzK65r9hDstTAc6mcAb",
  "key26": "BukAVbpWT6qunt9UmoNopjeCdATM9UuxzLEZ1SCrdUmynjStUyCQmfX2L85hP75muLFWsgeDyqNyFrcjUyqAH8i",
  "key27": "24PyvEqohy2bCwgbJirJD8bp5nqtZHzgGjPCiGx5nfddGhCM6PVeMAqVmoxgnt3cMoLJpV3tZ9VunQk2jBMVg2yL",
  "key28": "5wwqqZVmrdgJc2R2p46vEVb8NEU9nzuiuW4TmqErf4AH4WkhrwtTGt769A4iJLnoDZRZkBG4BfEzVRUNvnFz6dEV",
  "key29": "3vxXe4pqtETV8S9K3xwmvNAXmJr8c2b9yDHsjKncpkvJ2hmNQ6CnhTT3WHZSR2TuAAvhNkuPLEskxbaCS9rrH1n2",
  "key30": "3tU18FFVoMjpT42jCQ4J88cPM8Zv3CVuhnjfy9uJ6VHnuyDripv2TMLtfKiBqNvb7xunFiEdc4dtdxpPV4TbHj3J",
  "key31": "2b3Quqk4GUaSz83RBzWgcBEh2Fa8NVS4aqh2ZuyV9pmCCbzh6RSwyhtvcRUFyNpYjijsrmw4Q4bqaoirACGhqd2G"
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
