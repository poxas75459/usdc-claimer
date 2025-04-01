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
    "5B33USZ5BS5D8ZxA1BcQ3QNERNFVA9wy11bg71vjKRrSd8989gKg6ooh3PanYGkqpd5xyasmudEvhVx89RSEKZNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WJyw9B3ZeqBVPvv5maeERbgFrV1scyue4kAEg5Lx7uYCCRRnKudR7oA9wio2qJmMcnBcVdyzu3iALYgYRcg13u9",
  "key1": "4CeQjbCmwDzYtNzhW5z5w4rxRH1f9J15BSsRo59PDSqwKVbenCG97xJxpKeJWY8BjZcUjw3wHodeG1fSwxsUjTK3",
  "key2": "2oqHCZTn7REFd4PFu621zpzrCaVCB9NnLT3rTYvfqQfBGgqU6cKQQHYJSfrfSSfwbVmL7XckRLveKBTBokyEC9i3",
  "key3": "3MvBh37Fhbm7K5ST6Awp5aPFbtpWCS6b9gKY54jBXyE6QyoykziUtVPLcTxU7dHE3nMHwXZ7gCCUYGwyTLfUihLs",
  "key4": "3gWNJCW5wjXcQHo8pJpBqFqHVDdMRTFiJujP3VSah2kN6XCiEqFJH4JdDJ1r8fYi8kSTo3L7PkwPrjxKwLDM58gs",
  "key5": "5xt3B17oYRhkZLjyTvupw9Uzi7kfkszG1MyU3MYpwq5U4ssxjCWSrsqpuDugSn3eFcykxzXacYK4pUfGyj97xLKZ",
  "key6": "2vQYUR3rr9YjD7vSL8zgNGaL5Ci22TkiKDqdyhJpifkECs2DeaGjaKJ9XUrZut3nKUnGNzodmhwwW4CLBBWRywWW",
  "key7": "3aQrZx5EV71vHjUXmE8P2yzpzpf3jwzMewxzww1RPsNGLvw2HEwYWpwRYBr7qgWAUtSkdWkh1E88EQJthP1kGNDb",
  "key8": "2hFFsJGmzj2pDwmn5DgWBVnXZ7rYSZ5jyPrZaAb88egbcDyPwJi78e32UjF3KuEd21T9trDGBGeaYB9dDRbSKkKx",
  "key9": "3iGXLJVfLujyi3HvMfYvZm21yP3yStKuEyJmVo9Stw6qD8Dm1pugGxh3TzdR8eJAoSVHhTgnxi8CYXFz5RsbAadD",
  "key10": "51pHVpRWN11YtRXgCwSxzijuynAueZuBjziSt759Mj2jiyDGaSJ59qSTdkG3ocqztuNPk1qWdYKRCtRajyvngAeA",
  "key11": "5EqVrUyw1uQ84ACPotKA6BynPWbpxRASZoVCYkSNPhnAah9V6gXAeeGX9e4KvFd5xfUVCnmjXCfMCYmZeEhZ8kYA",
  "key12": "45BwDPakvP934Vd3SXvSqTeKtsWTPedcjTYvcEGtJiqwfaq8oDhZan7er2vofi6Yfnne2cm33sfWyDLriNy8SWuC",
  "key13": "23wSWDMh6ALixpWa1SBM2qA7RxFWfM92XaoptygRqCNHXw9dxJpwZUSZukq8CcpNzcRA3G7qAjqwvWDcjLLuP2sm",
  "key14": "3Qd52QC81vZvYwbtDsTyghPD4Ma1oEFSzkxtjG6RXkTzMttRiXg5JeZbKpehKP3P1ZY9tYgkH5CsJn7zN3YLDHk9",
  "key15": "5hoycpeZyGT88rH4gYRNSLYeMZ63cUHPkoiiYgteNbDH41SmUYGd1jiR7Ew9yjyfQdVFfG1J1hQGL6UyitTUe1fK",
  "key16": "4buR1mk8i79vhmZKrJXs4N8eqVW7th1sAamdJANKTKh3RPZevPgCCptC7nazeJBhvQvbW1VU3nK2xEzmPgMu1Pwu",
  "key17": "LxCyfAyw4PqwHirMeEdfHD2HuJuNGSEhRivgWxBGqceGUMeMF8MgLPxFvKRh2Vuetc6kvRRFA8Bc6hSHiQYsC83",
  "key18": "APctFBGuzcqQvrdDMRHJsGT5Vorf3YZjNNYkQx5213eVUNBQ4qqkBkR79cZcQ8PrsFYftu21CTziQEroo6WUqeB",
  "key19": "3mU77huRBpPf4Pkivbj7xDiQVptBPG3hqX3ju33NAToYKZcvuWrTcpfNfmWKT6WWohMbVEkQVxZSJswXh2xkKDF",
  "key20": "2D1daNegmdWMq2xUTi8mm3GcvQSyK78R3sthfrKNYQkAeFTgQvcuFDdvP6DtMB1TufztYWBFT5Gcg4GWj1mcSYa4",
  "key21": "2rrD2bv1nBHA63fijymUtoKg97UYTPi9VhwjkVmtgZHVxRsGZF6KVLLriFcTfHWGoPGT44CafgyZP87zSd1tpwtx",
  "key22": "49tbBpXBQxfW1Rgb6vHBvk2HGNYVMR2XbW4VkKEvAagbpVwxy78m2qxhWWUgfy1cF2eQ4czLeW2rPqdDg9YfjDNs",
  "key23": "coCZWga58WDNRFsPRkCiicHKR2u5CCXGyvnrz1BS6UhmracJo2MCDwsW3AdgF96gcEfJZAWXMqHxP7xH49iT9c5",
  "key24": "4e2PMcNQMxPjNXYTE4oRpiLeqc94Donnz2K3eezCniuK11foj9c2XzMCbr5GqzzuxLQkdEHWW6zWSA6LAqvEW1M1",
  "key25": "5VsFc8HQKFkqmeBNC31tnUPcVTGP4YJh8XteNB6mP87zM4kjxCBzFkAHVELEKiW3jM2HvuNkcC6mmi1iymcZWEAa",
  "key26": "438GyLgpp6ZXShWkS6mdLDVQqY9YVcu285417UzgWKyDPRrnmCJa4pmvjaAMfojnUSxchiCLh3qkZbLJHz7hXavu",
  "key27": "5pGroiBWPEEYbvtC8aWK2kAzUSdonsUeYdwV3TcVUftqCCUfaJxWQNF5EJNverimE7jjhrHBkgcubUaccAcr5ouk",
  "key28": "5TJr4KnNDZ2UPRLmQf3G4zhq8KacXXEmGCRE7BRM2v2ExDedEavhAwDtihZQvqZwUxf9e5kjCofunR6opq9ESq2Q",
  "key29": "3oUYSn2Fyyr9RAaAv2Hm1KJsbuyUvRk1gMCCmnxJWgjgTBuR6MrJ4MwWT5mW3r7QV4fSFAnuyD2YmskpMwY65RZg",
  "key30": "McJowAE54JLe7c2ZbHLYbAG2U3j1CeQFNZ39YaFXgAAEeecVDr6Xi6YgvqiRNq2TkRs5ou5iNtaqPS8z614zaYm",
  "key31": "UbQcssERyk48BDyGuBFGNW7Z6zEZyzKSpbgfBk4NH267th9szW7ycWv3T8sCCaakQWTzuZA5g8BoMw8BGbiMQao",
  "key32": "3QZhub1feYPvzciuvRqjcJwpitib5DPcrXdREjwKTEk6cohuJm4jPD2z3D1kLiuGZncRo1KaPVsmPQVrXF41ughH",
  "key33": "3BvDFGipSSJmqD9zXYgTwJRXUhu5R2WKYcGEQPxb9gAGASpHmdYY3gtZz1eoG4S8A293iUTPczo214DgZUTqZBoh",
  "key34": "YuwgqnsU8N8YwywBJKEfifKSViT8jiLw6UfocxSQJczkrqotDRmGx723e9TxWtJpSgeHXc2b1w2xKGJwrLtFZPr",
  "key35": "4KC2Q4eJaRQQRCns61jMBXnZv441omHzpom2sBBP7sSjpWhHkv89LdNEaVFm2WsrA2jypf467AT4GhCnUTraBjGL",
  "key36": "2WpfTbT164wn1Xuu4B2KSY7eoXjjEKKCGCQCj8n5Jd6DaBJ3qkj44RFpm7suZdem9gVkRQ7a3uX6N3eHioy3FCd6",
  "key37": "tS8xfBbY4PEPBW1hY3MCpj3qMdS1Bt3PqCbtTtCGuSahehoqbHribe7KUpGZKmovoPs1CfYkj43ER8rsZjZoZTr",
  "key38": "5dxgPQtVwD8CsDLpQWoVwmumKCP6z38hqMZnKmqghcd8iHVXpVcKtfGMdydwXfpxUT2Qv1x7fyZEyQGernhf7wgm",
  "key39": "2FjDBXFHteFMbTQubUrzYXjRZFvu8SKAeCkvb3NyJXm7jNeUmiGc3NNbLtkXWtedpMbrsG3b3FqFWU49QngL4Jru",
  "key40": "dNt3crznMuMjijuGsAEh8TtiWBWwmTZduaSAdV54BHCXU3q4spM9tyr7PiUkKX2QQr9NwYka7csGRqWkkZdVPov",
  "key41": "mub6etrdPyphFHCRtZvDp1bKxJ4guQ9FEyS81gjraVZj66CLqBBnnERieVjiaALKqq5a5snjHsWLnQg35adJWSw"
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
