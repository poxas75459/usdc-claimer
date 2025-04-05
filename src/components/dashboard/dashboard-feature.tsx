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
    "3vsVfyhS2ty14idPGjcEaKgmZRKKNgeD7HE2Pvba7fQHQEiKLiUFZ5aSVugMyqZVxNskvcsw5pkCRKGhzSDZyWsA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pGVpg7W7RBb2eBW4SBS3ZABY9UY1DfAiALg8MdZFmgtxVqfS3hKcT75TxstFBax35yGUB3fquejzJzz6152G6Kg",
  "key1": "5wdoBFk9GUjXm83x4WptBF1hxdLFqyjoyLmeWQgsJGSyfuufCRLo9MCHY6SQyKfSqoibzTiYipfqQVs5VbCHHfhP",
  "key2": "64nLKtxKYrfHkrKpA6YRhbsYx6GbgkVgKPrCQZgoYrYVva6TGb86qv97ayLDWLWufx36FAk9ZHcWVfqY3qcx4V76",
  "key3": "4sJdkzDyWGDwvvFBCaSp4KnVygr9qteahAM4Kn3nfWiZHN1dQtkx1iRv3sjtfmgnA5UUic4B28gVp7BSyDVMd3wQ",
  "key4": "2SeLnSGvLzyPycdjJS1iiecHHt6DQt5A1pTuM2N4TXmsaDHbbYAxLWsuY7FpEan3BVeVU3MMSc1QUL8gnHiswb19",
  "key5": "66beLk2CbfFgipcwHy5ao7ih7byCp7q8RLTrRYACeKXW8sV4Kj3mLVv6yMGVB23yP2asAiRFqojEmY1UcHLcrv1H",
  "key6": "2wZ8dbtDU3bVKVmWiX4kCzq7t4Pxefjs2FN7AuJisjW8BXXiKjbaRNkLNFCMSFgus9gyQMPhHJ37CcFn3vEfEhrs",
  "key7": "4hpsCpvbxmE71BzAtT164AhPfgKyRpoL1QBCuJjeLTDDiJEKn9dUB7hWKwwzT7hVZ2jSrYtsQBQJYxBUwD2HjhMT",
  "key8": "23QxYPx6T7EDyrBRWXpVo9pXpw1YMtVBzPP6aYRJYjBBLTJcGQyfQKSaQVMgqxWdBvkkdD9QKJ5VXtuUFWSHu89G",
  "key9": "mA7eBsxSrEBnBjQ1hVdkcURiVKj6wH5EKnriimyGC3nbeup8kt9H9P4BA5QZHRdVjq5zPArAt9QMCzaPw2PHZrF",
  "key10": "5E7y9MmeDonuxrqMRxFeVfU5XRyU3iPshxPFfoTu8GD6kbBSpTqgS7UaBgCv6jgWj1mYyDNdcuSx5cSoa1odq4x4",
  "key11": "RTZX3DYRe5YrGVyKCVEQWED2RaksJ1XJcGN2npTTg33tYakxyEuwaV6Bq3YZCGSQogvku2spwF2horfs8XwSZxm",
  "key12": "2xw5Mk1rEq3S3yVsGV4WVMQsFLdusXZvkkTVszYe9va2zshJBPkSFuYsyYbr6CBEFv5kKaSdzugUuk4NpfJauBQj",
  "key13": "2ci5L7U9jNdTpKzwX1uc93Zu4JR8gMKeuta6M2ebGdkzuPbfq9bGfWHw3FuV5Bc4e3ReYa1CsUexqE121UfjTLQF",
  "key14": "64576gdpfUycCWkpPTe1x2LDihpN1n5MXYEyuWULvXBFDVdSTxdwrUbAbue2em3QHvM4Jme9UK8qPVrovQU34phj",
  "key15": "2Sv6pZgnrP5DR4vqNtPGP5wYK2JtTkojGYnNF3498L1CtmgAdzE9JPrAL3Y3cRRcG8Tb7eU6wkF9MQ9jFq4KyGKF",
  "key16": "36YN8dFyyZPhwmQXhXc3FaWzjWWoXUp2VzAuUJQ5Rh4sGV4xYodMzDtFxKqC3NX76dMArY2GPtQnCN14mu5b1C7m",
  "key17": "2eNy8DKnbz9dWbeqqJhbEhEFLf6ZoZxPzPCTXREiXfCVZupAjqsg7rjpQnQ7ocu9126eumDKKqCMd28oSx6Gg3Nx",
  "key18": "3YJdeP6hx2tXDytnV3vCpcypzjuAVr96pYsetyyZWRccv6gUJvp4UDHiysaejXg7Vvff1j9VkVUbnakwsrHopjqx",
  "key19": "aqvrcpkzVoRsCVuGJDJi6qjPtjsVG5es3sDG2VnSFTSDYXgyJH8AhH6f6X5qWPJv4CtnHMZVsxURDhMBroZG5bd",
  "key20": "2KrRPJLEBR6xYdXrf8T24q1dAZ1WirQ6AGatT4Bgnayt2ctHJKawtryFxh1oXjATkXkGh2gRmG1zuWrkzebWaFe7",
  "key21": "2r5qDE2XLgtBnsPdYsM47WX5cjE3cx1eZemyccTYaQRPWMUAJLfpis7aeCDDdz7zZ2HuyxXrBDtyzsS7rrJtufno",
  "key22": "MRcuXT1FdEWPPnZTFWtyHrUNVHssoXAA3roWEEyCj7rKWs2udVygi2iY2wH88jRpLaW7KyaSvescuCbpg87NLxw",
  "key23": "3Uocysso735nvQyKY6g6D7pBPkCYXfxV4HB6cSA2AACgYVmV6nXYVWWN2rbaHTUPqyaT8qbPXhL4xXqtR2UVupHA",
  "key24": "387G4a9bAXCAGXUeYCvab5p3QEUVHLvkw7Bfd4pjeJ8sCxRkyYYU9unP7ttvMwTvHLD1C3kD65LayzgzVmPmNhZW",
  "key25": "zuZhjLZk3uLYC9rnNhQthuKWMFojCceq6YJEqUQqEwXU62C9XofCifkFE7xQKa5myJApB1DrJwrveFsmgnYZAaN",
  "key26": "mVd9w1t16DfA2TEZ1Pc14qFcrgNr7W9fDEnfJfHfMWMom2k1ZeDcZjxqPZAqTmNi93Ca6pdjyiP6cKGs8r8gntD",
  "key27": "3UErgyerdPTcySKrTK7Nqm4VFBuZXZUA5BbzpjvmHK6AeFdjn74pBAQygvCSNBw1WuDufJqednzuPBEATwgNUT7x",
  "key28": "3UsbpvaxifL9tYyxjRBKLvnwtxAqQWvjDpR2mEF1m8XeEsCfWPe2NYQWRisT1EfZ5oxDp7L87nfzF5DyQutnKRhn",
  "key29": "2vTJkKhXgVyQgsDbYVJAa59qxgDQFwAsf5weYV8baMRtuiPBe2r2zgk7myjKB42PHShA19F1qWehXpUFto4iwRQ6",
  "key30": "5aBRpuj9vLPHois4asV4RHUov54oMwhbYh3i8iGuuBC2xqanW6XsZndj1HzewavrwuuciUm2RCT1qvKeAfzDRWUV"
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
