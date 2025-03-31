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
    "5EpZjbtjFksyXnsEjRBP2UMKcasVXTAwyZeidAtQ5AMV7jMxWhZz1yyBH1TRZauLbJnhwNUz9EH5XM8635MRHBYo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pxZ2dQ91UwUVFbUu9NZYiUJyYS6ooWJSpEww22Y9H3TEvxU8MsHSgYUHt9x26kxDLxemyAoNzreYhHJ2An4ncMb",
  "key1": "4Wo4iTr6sTAZNbpDXqASZGQHCM2otutLifsqbo6YABDv7uPTuNmVdipuBZTgNbbPPheXYdSrjnuzwMQo7gfnfHTE",
  "key2": "2JwFpUNAHM9XiYRCBHiNG3r8Y7NSipm6L7M9XpzUoz1SG3hgTU7CWQ12AFUy9itrHrxqtq1CmkTxaVyRzLKgM3kT",
  "key3": "35GLaSmoWtsV6KKrUndaeYSCaPufJCnJftqFKjDxxYXj14anoX78EtTmafDEdvVBCpqoirv7hqpDtyGDKWuufhiy",
  "key4": "5vPyMmes6t3CLUbj2DWCnmJ3Ue5u4NTeKv49tdYwAhyTKT9KdsK54yktyzJ9Snc59aDCUgV6iUQQm3pkqPbpi6pi",
  "key5": "Q73rjk8pVNBmNA698za6Kfy8ACoTGqADRYmUfx7rEzkVyGSUGkEo56KkovccF6gupRoQVqb8kdM1uDDVBWqJtBJ",
  "key6": "Qf7LYdEbZPPbCjbT3aPyjyemwr5Q4JBrrP3NR1bqujM9nLGsGZjfNG4pknUhm69GrGY2emAcTfL43wp6q5iTxXw",
  "key7": "5kpJcf1FAytVerMiok9AjqUb3XwDHeQZsb598Lr4uKAXp8zrko2AXByEyszXo7mz7f1M7hgmbsRMhMVXAxoDZzyf",
  "key8": "y9QaMvo6JW1cSipoE3EX3py5HFZxP3Y6r92tHp2PvAaamN8amMNpK6txJePU8sRT3Do4sraJQaTvesfw9PYHfzm",
  "key9": "tvcM31RLg7D6AaEMdgSy6XBJNSmfoDrix83LpoJZ3yyvo67VitiQucDvmvhEE6uwczjAL8yoEiErU1EAqCisDup",
  "key10": "5Rem99HE5S8UqGsLJSXdWvkkK1hwmdnnou9tuMXB9WxAzFP9oQkyv7Uxr7LuWehERX8aqYvQy8LES7oe11JchsTD",
  "key11": "56u5cQG3R3dFq6yUavVW3BR1pQuL2FAK2QdWy8pk5nBd5csJtSbfzymsue9dexgZvsytJzPYqoCMQswZjXXy2pJM",
  "key12": "5HPgjNhS4ym1EeYWJCeYfequzWFKafknEJ6KebzNVja6q25dupu5P912B75R7VdSJk3Arx8wm5E62ymprVknr9fC",
  "key13": "2bhbbe2wsXBdtijrVtVnPRzBv8Jo1LKzF8graKdx8jS8fHk1QcJLcLzxTCH9ZwBEYpdmhsYSSjVhYVXGA5P3fHVN",
  "key14": "4tArAvoo9RMK7b68EBsnAhYKg12AhM1DYYsbE7GsxaBuUksGgzHZnuGT8hoPoSBhCbQDYbG26czTVUqbZyyKV6zT",
  "key15": "2LuEJCyJJtx8kkH8vyyM36FvD5NYeEzktaYHhyFyZ5gNebL66KNC7NJm3AhTgKpnGXL3uRXopR7vnu7e8m2xKbdg",
  "key16": "3zC5DGSHM1bQadKfyDkSxRpmpsxEK2kUzm9cAp2vyUvQekMs8yMFwjhKuLzzqVBoF9VT5eaZ3DSxtF6W5HctfJjn",
  "key17": "3DK3Toknkz6TbJQ7dLWTHHRvf8mPdZSQ9xuqNG6uFaizox22FH2jWihWhedgK1nSciv2jTT2Kp5J1kA2DBabLbmU",
  "key18": "2WgzLkYBvwRucLpnafiAqDAYqezQtmJKaKz1H3nSXta7jSHjDRE2sxEtHkdJu7XbAVq61G9cekW1cB7DWS9J8dY8",
  "key19": "4Mz77jNR7P4uM5FyBa5tokGNxxoLsRDFgp1kUvvagGzZihX2sE5CU2Rqit1jPu1YPi25TRqhR3KiZB3PuFuZHaqF",
  "key20": "5ia9oKJteaWPSWBXRidg7UupYZhph8Gw9yrsNu15UGWHShYf4V9avPLZmGeBP6hcPZqzf4kGAeYCLM6Ri5pATDXE",
  "key21": "yw78Ch3ywsEHJtb1MYfrHB7HCGg4kK3Y2196T5diA3D2Lv9uptpQc8C3enufeYjbuhPFtymPBpqJTwUM2VubEuf",
  "key22": "n4uzaVDLR2k53Nit8VAYnEFr4QvLQ8AW4n7C3iHrj6sUH5whcfXNFzNWzkLhh7St8uLrJNLmEkxgcuPp1PFgxXs",
  "key23": "3riWckNVXG32BTKLAfD3ubigwf88xXDYUXQJ33WcgqrVbwMWWjStRiLADzBGbypNRueRTqo1oWXEeL7KXgZjd77j",
  "key24": "2dMPfVwxcLWD3WJ99z1M6TCDKJ9ToovqNXYVD3r17G7MXLZmxgSaLmLSAUHK9TtwWi77VA3TocNNXZs7eQgHzm3E",
  "key25": "4wzgcDxpEuTnBWyUFTu221NK3z5bunN8WpN85ATW9wm7iBjSPxoA1Y9Cwk156Tenc2Xgce2F2VtjSJuhG4YFTYAv"
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
