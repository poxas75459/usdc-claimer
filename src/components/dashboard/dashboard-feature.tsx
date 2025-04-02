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
    "3o4k6Luwxi7bryWRxJryRPcKC5yRqbnbwK9KiZxVUj4iym3hSHM31Ka9z2rpYfW7gs3QRhPhPVUptMdF1xUmkwZA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Qsiidv8WDcNYwhJ1NC2ioyKmYoR2YZzSZZHja5UgSTDVirQEodfXvnhhqNkJCCkDNRy1hkz4WaqGfoZQHpNZK7K",
  "key1": "NxCF2vuZR5t3aKMv2f1p4XMHx99p9v3SpBp9bAF5D9PUQshPDzgk8rWthQ4SQ91Abb63LUpVXGNbxkUKHq5HZxy",
  "key2": "46TjAaEyjvvAyrjszDMAkZ7UhXgePvZ4PH3r98dJyupMJTggSXECdpWBuTo6kRJGpXiCSXHgFnsVTCkBj1TpqyEF",
  "key3": "Hdn62CiwPGxdmvuHmV9AnkTznoVfnV9VwXZDoFjEZLbHzbfSQTyhT662S5u5E5kxGDmvGAwRxumvWnfKMYujHPt",
  "key4": "53CGdC3mMM7yAmHb14rfkfwPRmQA1T653EDEVUy8yKv2nnq3bsx2xTMXBTRD7wQ6HbiiYyGUeF6VXnFXDxzjxJd3",
  "key5": "3mEqGYBzUShehTgfdXsoWceNE3tpMrvhxfc7LvbzMWV3VzXB4baUjbgsof8fTSkRN88XLNxXxLv27T9VDx4uUMD",
  "key6": "3kbunsB4sJgG48hV71rdeWuZNpTrDUfUi9wtZZyhJSCw7buKMKHs6kmUGiVykZFHVbiBVJfHM3zugSsZfhsb8u3R",
  "key7": "5rcQJNUwgwrv6EAANUH8JeG9qm4DPwvYMVNkvvpyfsgYU334MxLeyja2sPsYk3Yhtk2t5tHEEuJhHuER7iAJ5ccc",
  "key8": "5LucGVtKTKFEC5uvwUJ7yyuXg47uhyXV5hSCb2Sc8FpAWtemVcGYrhM9fNixWzN9eovgnRp2PKnaixrjDFYQb5QU",
  "key9": "2LmvhtdsxsFfwCH8vFXHc68b3jB4t87bLMWesWWmKo4QQcLzd7F7p6e8vzD652WdnjRSb5BuH2HSwhWffG18crD2",
  "key10": "2Wh9kfg9NZsup6mLN6x7Q3vuoqcSB8R9tkYicz4AyHvppC6QjdXsTVdDBWsytFJPqCb3g2pyXkFV8pmBEH4z64xR",
  "key11": "4mBc1cZUmD44TjDCHbtb4q7WHB6BgSPNkuJ5ZMoTCftT24pEJQ6fZgbUBHF4Sgg54fVADLGVSaqJz3D2n7DyHAJi",
  "key12": "4xtgJGxEWWRvpt4km1qr3qYTTRMeyJnCGR6xEcnxMKgkN3PRd1FnyeLyhHGvWtMp86jzyeyiD8oZqxjjAiry2xti",
  "key13": "39V99CVVcaJXdZh6nd6o4B2WVUgngk5R5LGiH6sRcGUxstyb7cSjDqcN4Fyz24UzRfAKUVikyqFYPJj5CjUwnwXw",
  "key14": "BUo4nZVnBQsLsDYHJjuE17kqC6A65dzVm1uPTk958D6Wy1dgmegSRxfWZcdaYNxMSkCoZxteqEgRS8ccVHackFZ",
  "key15": "523w2TusG9FHssgCmue1mAooNs7yvdBgHaJDX7i7HhL16sVSaKNNJRoR2oQHCBHAWykwiPKqJsF5WV4sNa5hB4io",
  "key16": "5imJDrwBXbFbeGcS3admpnDx2K61v6yjFTDxoAfmXdqs4yZosZf1e165Hb53QKv2p5buAbFMgi8qxty9fhsH6tt9",
  "key17": "fhWHjgEbALDSDxoVufcidJiHSGjwukDhNN7ENzFw2KQpzzbot1G7TPetWtqLv7vFBDbkcHJ2rw9kjTnBTV4FPh9",
  "key18": "qy9pvg6PJvQrC2iJnHZ8CqkDMMcSWZodrwV5yC3wywZevzq7qq7ejrbTcZkssw1qPEy7ihMgprFGCG66TMBg67Q",
  "key19": "4WEwY7JokbTE9MYLshFcKY38HJEb7RfgeKVddBPaxyhrn82N7wGDMRE8HJN6UqFKnt837SppxsLBL5vsKQEVLdzH",
  "key20": "3oFNdxjsMeQ4kCTQg9L2EeU6T4aZCPfdWJUTXcNbkqRAaDtU2X2tb7ypEPYcuLbEL8nZutXdKKRyjmqd9fPVb6eA",
  "key21": "zABoKjRhnvwR2b7jeUrG76A3CWLEwNwLXRZg2XnY4y8xsJYtYPTo6HEroueZQzNmhnY5iGcCS73AsxPw2rELBGw",
  "key22": "NYQ9Crr4WFcZsgdhv8R7L3vDcnFtexRJqML8cTkwVtAY1Vdwgzhhq2dH8oE9xww2mBZ9bqR3wBrrBntNtyoDu9Q",
  "key23": "5ox1EPZY4oV389r6t3gNCDQpTsGCr2XZmUmH4dnqbY2xUDgTmMS2PjY433KbPWGdit1GDYJnpZLA3qhQvDAsfdva",
  "key24": "4u7qCwPBv555h3x3v3pgEa3X5WXxCUN7iN4Zud9oQAEdeptveiNtVCZZMXAcNijBr3DiFx1JZefWkwJqiW4hLpNr",
  "key25": "2cNPXdNQ89A7zGPiBFZaxsSnTtQofwy8xFKCg8sBDnLSbNagyiftBjDfV9MYrgFik1yHyzA79FTV3rLJfrwAgHe7",
  "key26": "y9RsfDeziiKsVagoeuFSKSyErQQjUgNQC42KUG7Me2A5kAnfYjtRCVVRRJWHQE4omxV3qyrDme48V4UzRSRvmQr",
  "key27": "T5G2qEYds7ikwp7VdpEQdL9Gt2i7RZgEBtVpGZADtfpeRVHL1DNYhskW3b4Gr6Afz8Cj6hNAzhkc22vS9DzBJdT",
  "key28": "3tdVFQqexCxZS1QpYgzt5fpZ5roKdBxprwG56oV7n716LaAs2TTcV5BDvy1WnLhqAkbBdkmaKmcErJixxBxddtzq",
  "key29": "SAU4Wahk7aFxHvx4LfcfBsC4oLUgrB8eNFuGYGC2PyRWQvAMy4RqPmidzD2poHFEpUHzdJToF1eK8vKMQSXNy4K",
  "key30": "5FrLfBGRTh5gm7MwTcdiWtzye5ERRaQKtUxo8LXiX5CLemTREBDyUjAnpMtWHfaCyqdfh1nU7UDL4Trm4NUNZVKB",
  "key31": "45Kg1vAa5eSJCKXDZ28dejxxKjRc9NFwWhAGsx9bBdE3otp4TBnHMVV2pbjnfz33AjLHWFCeUmxUjcokSoLoo39s",
  "key32": "4E1Zd9HttcVTqsiFJM3mdTboNgoEGk985GKFQBZWdGM2GAuofSVfqxmn6DsVmMv4jqNTCe9NwkPFKEcQRXzrwMY8",
  "key33": "4N4Zh62RYDXE2TF8bLdNQhPPZJJPxaN5ZT2KujHt3bpRYcr5zuPA1xbTAhJQ3DQ2BTu6V27FX5Zw5STPx3JJAzif",
  "key34": "DSnh3jd4t2qmVVZWzv73om72xHFN8uNs1ug9zpxuPR32NNDEnVSfT4sZFZifKy6aC8AtDBQxGg2xVjxGkG1rDmn",
  "key35": "3rGakkpzsdwGC4EQYSQxrWGAK5RyzsHZgXRSLNbxkWQxPYHWRz4jSSqwAXAHRqWb6WbhnTgpR8TYazhEJeVtGDYb",
  "key36": "41rJG2GxAYN84sNtmdH39v9Hz1Dky9V6Cu8w3vc35yJVJWGfxXeoZRQrtri3dUmf3dTMPBnf6URL1mQuGFt583Jv",
  "key37": "22SckhFppftYbS5MZbrWDwo3pX1sVpyctBEZofCGBq1MUQajpp2D2jTwG6f2vusXpAdRHLT8MAo95xnqoREZLzR7",
  "key38": "5YJU4JoST5puexHbZJADyGQcNAGXLKuj6iJY6rpLonMne5j75VoDE4kj9rzBBnDQADwQK1PeBzAehyKek7hfsLnp",
  "key39": "59HasTgjSvjzA86eYdYnLL7rMod9bMRB8PY6QsGCYjLfYWnw6NHJc6rLgVnv1m7oQrhgfrE6VFoMroQcf8GaVzik"
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
