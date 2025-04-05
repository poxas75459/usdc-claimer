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
    "5uhFsDbFX8DUXW9JDwDjKykjw6qoSuJocN6Y4ctFrXZd4X8UvWLEHWbeuKq2j1WV3vX9FQ8rJNyJRnxP7Rz3MDq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ikfJS2xk8UQZQ3PaDe3N2B6tfm8uDxRZJz5td5UYYb7G3392yXYFGpJov42qQH1peQ7dexJBrefcTF4Fr3iF7Z6",
  "key1": "2nGNG9KrR24UQVak2gSscNmNyx1zjQtG18hQg2T123TDw2LoVhGN25GvbGUW9dcx67wCP1Jiu2wT6Jk82A69avGH",
  "key2": "21B9i2ZmEJvawLEYjAbDLhS69wDfoZbVeyWt3iQWTbuqFzgYqDDMfaiFLJaZEz3WcaRLoY4mLSrq3m46C2sfpPL1",
  "key3": "kW78hmPasDC5am6obTFQBCWJfem2p1ykqEWcDLQubKRbE2tUsp1KUHPeWtQQhFvSHhjrzXFVEBKaYxFsCgeGUTL",
  "key4": "69fiPKktVYjkAx7dRENTt7kGBUnKDSeDa5sHTeuST4M6EMbU2mG9LbF6XQ21iECkzU3uzetdRJSxKDGSybQQXqM",
  "key5": "2Nf3BYhPALJAdLY5adMZR5szhuZ7xZCezRv21o14NyGen1ZXecp5vmN9fLp2qmsD9y6C71tdtmud6fEyDWBgEDHK",
  "key6": "63WM5rgQL75EMHk1smMnGH8eD55PK4zMHKRpfjCvgBSgvLQr3k1uJbeDh9sWMiiKXwpehNsxusUd76MbFf9V8Y1q",
  "key7": "44ZEMVwQub5sZ9wAmFEfKA8Biko6cuuRRf8xzt3ujdPKqD5uzB8ehoN6N3o8GU7b5hya5Jmcqd7UavWJUG6vG2zH",
  "key8": "hpyPugU6NBusw3mEeSC7M8A8oDh2S4H3xUjVjcBDTx2NbrRajW5Pv6eBJRvY9SRoLc2RqQTr9M8RQn8aZZBqoa8",
  "key9": "2zczqQt2zNeReLYCbXaTuomuH4ebDbhhpAHokrjLg7DpVQgeLSMJGNTETdHKeZLkqxLAr5HWCWKrKXTPtFdjGD68",
  "key10": "4URFoB6pnrCkQfwcRMmw3Kre4hktx4jMXAWwiKQyzrEZSfDGcSBkrRqFG5VB4nWJKhkujiM7uf7tTXKTsGvrx8J5",
  "key11": "2eUUhcAAGzrW28rMemoP9JBTZhuRERaUBt9BbnpaoRBut6YTQxueAQALzd744ERrZaczqyJ4Pv2oY7bfU9de7zar",
  "key12": "5S3h1PYwNBqqwD9Wahej1gzpDxcSx6cGDeQDtP4YGF6z7QX92cyqc5uUQf44d2wpfHzVgQ7CewDGVrXTE5VpcKQA",
  "key13": "27WYkrCT3UwHFfJAE5Fy2viFoxx56uj7dicV9GivHpXiLxfZ9kN5d8rW6Kxp9vR7EYTuMiwGmf1xJwHSoB9dwDW5",
  "key14": "2gs7jnreKttCwfqign8oKQ9n4itEzmvc4vfcRNuZJaGTMWfqfbbjESEChTmkyg7MzWLecff9XbyEP5UZBiG1M5pM",
  "key15": "3HphAwoH2Fu4ENpd5z9yYCirSwuGnaxKTFtzbuny6mhpT4nL8hvKyaXN9PLpTw5i9vhY7dy3jKwKAxapU8DqarLz",
  "key16": "2CmXbZAa2zpg4ByV54zVD21w19W3RfYJm4uJp6YasSPm3SgAsv1aBxT4HjyYCmBEPXYGbM4oEEoGne3dBqBFz1UP",
  "key17": "62CqCY7KKN91rj4PtucNg154oi9mhvTzcu4i5F8U6YSvYxEQq1eMQYVQnj74GyVccAU4G43TPGYhRS64xeFhshJv",
  "key18": "52BFj2BaHPvmDKCFyNVe4Mm4KYwoicFqtvkDHa3fTnmhWcZK6apwiwKSB8vNaz3xd3ex7vxTyis2bjk6zU21hvZT",
  "key19": "5toHBAfVxN1WCza2ktbXB5pQZtrRfg61pPf1BiUvQz7zALaqJ1qifJXPbQ1KCY5pewsmFxMW7XqV9iNuHHcBBcJy",
  "key20": "4bbU6qQJyUb1hkubkY148FUARq7ysY2mQx2JWeYrMFht7KnV8ZpVpEjhyeZyWHGmtSvk4wsZuqoNmpjUwtm7fZq2",
  "key21": "4ZfaEVD62kHCdT8UkEKRxmrngSRaTUjzbMoVRz2FYrBzNWF9cCdxmiijnNESggXpqTz7JhXghioSL7NeXRSzq6ti",
  "key22": "4CC3s6E2Agff6nMbmdHr8vHyr96aA9kbV3RJqLgC46VMUVS4eKyzcuDmoaxneiHWHG35eXnyfbht72VhcN64Yibf",
  "key23": "31sDYvEtcyx9zXxzZocCzgJ1KPYccMGCSFVZFsJp5x1uXDTNL5mhgX484ZKdRibWcsi3uthTRJsGHfevm9KDiDo1",
  "key24": "ut1RKT3KWVtupTwvikSWyJQDbJ63XfdCQdyjy2B3hPWccCvdTv55u8EjaM7NMeRhfa6RH2uXiAywgdVBb2bLF72",
  "key25": "57SiivM73cFjTN7e6tstzZdpKzfK2fKTzh2EstMHYZ3DtxGDrBrppkAjD8NMBWxpPAWxnjXGTndAmy6o1Mv5z8mP",
  "key26": "3wgnaMkGDchx6nHszE8viBHAEtFoptQPohQG7qRbEABT3XVWpCaCQ8rDjYgwSWtv3AG7g2oLaxA6YF5M2LWwgYuR"
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
