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
    "5Vf85hneeKQH8s4w9ZrXrFocyeevPpSwjAprVDjmP7eQPWwzwzY6FBzHRiDHCEoD1DSq6S3N9p8M4hBpa1vDGELq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MSXGtJAXd5WGuxXJW2xXGSKnRU54zZsaG6oUyj8ph2NXNw9wxbNwhvkB4F8YpHPMefbHzBBsFvKayUe3yqreDYo",
  "key1": "2rhbY5xov7TRniUjk4qpdLUg2MBxZ8Fg5BRyKpZs5tCfqE4ccMZ2fbaoH8usDyX2sVqEY8c2Xs6uMrxjsnnnYiNd",
  "key2": "58iqtcinFc2gu7CPNNNasMiTNdHstur7noFiaokupycg8BmMb1MSu3qct22fNq3tfB6YHxUP4f2XYwKPFdXRLJJh",
  "key3": "5t2H3ijKXqSRZxV2R9q3xgfPnZeD2y3fEbCSLpTguHd1LJmRS9DnbX3Hj39r2nyAba3CSPPo226kvS622j81dLDQ",
  "key4": "2d4hSuBPDsokP47nCjfZcAJodrvDLPLBYcLpUNd6NRuC4PCkfGvZWNfEa7AhJJoY7fVVvTzYZFDUouXXTaJdqC5r",
  "key5": "3CrBN5R7SsFZCkr21Hc2Bqy1bN1FrHzrFu3W7AkAUatsM8ZTEetGa5tbciAXqwKLqNgnewjh8Wx2asFrqjhJcPcz",
  "key6": "3Cad2SB6n7nCDBXaUm3qgLK1T35z4wcHRZrwrtygoeoV3zRW7oFKGioCtGabKxdzJygjtikXgiSGDpX5i5HA6n5g",
  "key7": "3CFEuxXnWhVo1KUG6VUjbJeoLBaZpr5HoAYhnYZejH3HJSQtyN6ZrWtxvKsh2ASSKorVqNwULLgFjdVeaznsTsEa",
  "key8": "4DavXB3rSjPf7VW3KXi5T5vtfPy8L4vXLnNyySgtQpjkm6oEm6dgS34D4ADwQtM19xEHh4ZPUqSynz4p3wmRAm5s",
  "key9": "2RjiH2DenAvxKPT5VvkPALpg92R9vNDjK1XXyNFak1WFQ2YtfqHhTi4ARsjVZB3ftCWKmLqcBW8CPMsxbjRHG84F",
  "key10": "5x667iKTMLaSA4b2uENQgDrWeJSQedr8geur9Uj4JVtX6LgiSyXXngL1J3x67HKcjteU28h13fZwsDV122ydyHBc",
  "key11": "5tPLamTeJTaaGzyUEn425V1mxDS3kYbsF23BUUgXsocora1iHgZbuKMQxmbAttSt5cTbAMXq2MXgHdveUSAq8wiz",
  "key12": "2B1o6MZQPeCenzb3Dzm137p9CAb4HjriteQ1S5pJWoBtVsSJ35W4Up37BeVwfQ4QmPrQAnGYzDKGbD3sZnibYsgt",
  "key13": "4EvvafmSqAYyX32bfrXGCPnrLdq2KRnhHND1UbZ5cxXMGFWcPeDzE1NHv63bD67J3dCSXBT6SkTnZMibBjUqYBDd",
  "key14": "4HF74xoTw8ceV2GkR7hq7EXBcSGTGxU4yTcFrFhzFxbn41HAoGtPRrvdVVFHgSGAxpDEFhP4caXsjHtkcciiw8Vi",
  "key15": "4z8xbENrUYZ7qAqC2wzL4bMUv8qoGkfg6LAwn1M7TsK84qpKRovshdcmfWwSBydVFkC6hhmDAbK8sLv7MisYdhnP",
  "key16": "5hHkpLdhm8mNEHSA3ddy8zuw8QnzRTL4QhDixkcUcYHS9DeztkR2ZUQGNfJ1zvUX3dWAgRfDBLDSc8HyFE3HSRCs",
  "key17": "4BnrdifW57u7Z1PG6hy52Xcoif49k11vF1ngPhdJWqzCg8A8uWdq2VNNPzFTYcwPNRh4yuYoeihyDRretK9FDvkL",
  "key18": "5SWFAvHpiJf1XesxV4jBScCVgpJwzDdjyiBZapPZqMMK1nZiNsrc1moNxxeCduXBJczFbfEZCwT5d2LAEczzAErz",
  "key19": "2fRFTEsJBS7Jo3vnDYHocmZJ7o9yP2jgFmwGqzSbxMU4VSwidWB8ZD3FMJzRt2NzbBEHRfcMksRCU8cbD3FwKgXD",
  "key20": "rLnSA1Ho3Cbtu1LREfgfvv9mah9ynkEyueekofXH6LtQCuzM44NFxTojZ5DWmg42hHwZ8d8qMoDhzgSWnyMtps5",
  "key21": "3768Lf7J4BxGGTmdDs3Fkh8wXNYfGFTUVRcVnxGwWXFgwStQEFEM7zUsxf5aaCUqg4D7qAn33ohKwYFNZPori5fd",
  "key22": "4nsi3cMxGXW89zVTy2eSHN2wVpWJvdLstqhW4ExqFtAHxkyn9dEd8bFhKAd6SWnLjT4H9VgKTvtfyYP3A2hcRaE4",
  "key23": "5Ry4B3kAmQXYpEhZhzkLpVVuSJ3yBS5ZgxbqMX7c1gFMMgeKZyzTgMU62geCX2PiSHnZ2V9HCyNZcLfdhfXud5qo",
  "key24": "2CqvtjS2sDSSEwofmsatFvZyGBvAToSKa635De32oJDidMSZzKEPGooJ5F9D5s1va7xdvxHZ3MJYuuuBwMzsS37n",
  "key25": "UUp47ygjYtVhxHjRNX5JrutXPkqw3F8kD94H6rE7Uhzw9scixXidfxduWiXFtavvLBF5Atc53xudAuzSNifaQfS",
  "key26": "gGLJ1ZWKBqE9dcAqg1sK7LPk7TYHBiJGepmR57MG51NJwkUWK2Yfw8obueUNXLd68PFndBVVWWom3pp8WonspgG",
  "key27": "2GjHHEeC1sJrqwodyBPqpFFkQJwc7a681tJ2RHrT8GNqaUzRAwyXZQUE541YvMtFzSnCAZD3uqK5aJ3DPD5TLH1L",
  "key28": "8K1pcYtVkuzKQWVHUJt8BXhcaygwhtafexyjXfUcVXKpCsF4UFSFWQTvs8r2CzDrs7yGSugcD1W4xQUCLzKyPoi",
  "key29": "thvhfdUMrCQL3Bpo4VkCNbizkfhqEe1FztpiE8CY3AWd8uD1dR6TDuCxVkNK7Q9jvQCmw54HMKbotj8SGd67yN2",
  "key30": "daVbwPnSokZdU8EBgZBrNNuMDk8bbHVYRXJwkztBH9fBg8hTA43j5dbdimBv3HunGTVt827mCuErxbkgK1UXfHi",
  "key31": "3SJbupaRu81fPQUFuV2FQtqVhujTKTduDPYAVQPC1ohk3LinQw82fgCfXHpVpKCQH91wtfxuuxDgs3Ldrp17bSaH",
  "key32": "2MmAp4xTLQPVzNNHWmhe5eNQbS2ASu8uK8FHWtYjDSCpxu1mc3UFQEYZL2HV77GSt7z6BzYMBQCVppg3bn1FZcSa",
  "key33": "37NgxXjgZsdkXUkiwDgUfd9oFgXDKProTAdgJ3Phu2auhrK8xQqoZhuaBqkNwBec2GahW1pTTY7NDwpbGWktHzAy"
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
