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
    "eSigqnPzstRUgqVy7vCj8Bicup468peJ3aduU6GZ3xdvUj3jNKMMd63UrqaXdNvEMBVpWxeMTdcWUKpxRFspUiK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vkgmgTE14JSZt2XkEjfov4gHgV2WijjRUk56fZp3Xhp8sHf7fViRHSuGAtFC1wms8YVojtZPVgTwrHzHyK3nTZf",
  "key1": "55G5dGtp2CFvgS2Hpt91LKVkCdHf27YojQHBq1i4Fyz7ZwvxNtixHuP9sFcrYLgzbNTjHUgDQXQcoe2KaxE5JnPm",
  "key2": "2e7rT1WeAMzNiyHshZ38eu5P6awAShxVKwifM2Am7PjwKaVdXF1miZzt5hcQyCXXvC1yivyotvxcj1LaJgaXPSsg",
  "key3": "4LkSvrbNQrSfP51gZYbRLn7Vs6UVbS9uNRRP2Gznb3BuCkqCcuHSo2vfncd2KSCGS4dFyma9HZNh47PGQ1aD6WSZ",
  "key4": "5jmr2prpqKjN72vA6kc4Z8KeB7Ewuchr6gS8C9XYMr7g5QadRVDYbgHeuXqbbic9jEywusX5PHAZsLVQicdKByRt",
  "key5": "3S3Eo4juXtPy2mteSBUDyiRoeuQw1zV7a3NBeg24mmAUyieBQDW7FqCWPUkytiVE89fpmYbDY521UgN4KZvdCAr",
  "key6": "4NVevPQy2NDuGMKjUDqEF1iE9hVBYqjUz7RFTBCvP1nNmTKhMd4dnM1gtR9xfSSXqNVuiXZ42bvEHpJXTwuF5KSC",
  "key7": "2XrFbDcRa1wWddVzgNsMroxRTieTZpaEqXLzeqgoZfrkDDGLoT9K7eMZU5XWoxZhPodSUfX1cfkajybk2XTmdEDu",
  "key8": "QBknxqKWfgdSypfkVequqZELPTHfjKyBKjK6YzuiMgkqQdx2DeKYvXDuCZH8KTn18WafwB5MTmRaUwtCrVxD4Gf",
  "key9": "4v4aBKz9AJWQtehd8oswki84QwQrBEtzrnHCwdXspb6hv3Eo9wvNNNvXUHnZ22BBSGLq3ZSzssw6EWKu8LyyNgCF",
  "key10": "xdbSED18vquG1zWAFV9wYJn2nE5vXuZaYjQTLqaRDoXwe9SAvFscvvM7JvLApWVFJWADpRizwBTcJD6X2nXmpFG",
  "key11": "eH46nZzWfttN3DpZ3dwak9hYcMzradXAeB72ntyCrqYThnA3Qpmx1qzemaMtVKtsSLHJmDtP7EFai29rUWAjF77",
  "key12": "6yA22FNLi9BGaRzDfHWXWcyJEu4eiYYZfLgdhBeXLubsgoeuhbRejwD6nG2w1gS4aiEZRUKQvEMNPFQ5q9WVJSC",
  "key13": "5njmYy2p2g4h3Zob1U4ce1V4gwjxP6cgXYFcmAn7fVgpHu2zX8NFcHfAmmEF94X3aa9gv9vtnfvfcJgngS1TKf5U",
  "key14": "5WUHPYUYe3UcH1xh28Qnzgf1JCfwrs3CrF34n63ukztpJUmyhVeESQsYgKj13Lp5Eh1HV7q6MW4cUAcS6t4c4JZ7",
  "key15": "3a5Mypq274cg62N3YRfQyWvFo8Ee9CmeYXoLiYC1DbZ9ox7hRcFj7GmSaPigLZcDCF5c6tnEGjmNFAS5MCN9ruxH",
  "key16": "5gXwadte1e9oepLJVDVyZERxbq2TQheULGRforhrH8h4xHG9tk2rsRxZqDxdV4WJPtFJ4Bx11zRvnfurbzgifpMn",
  "key17": "5GVCMLJhmiVa4p7i559gJohYM7moGHBLL6tgp5c3QrFJgPpg8zRLi2gdiDU9eZ8vbfdCS63z6NodC2BmcWTDmLfo",
  "key18": "3XVuRavvyMTWh7752r7U6ZV61MdNEV7M65BUBaqkAXGvmi5WzK5nuejHemPV7aTn8hg3VjhQZeYSzkq539qfQX3c",
  "key19": "4xamv28ivZYyjhNH4eNe9v8WYNnUzuRPJ9M3wo9semWFM1K82m2pBiUcZ37ndA1anHnTCjcsdmLYpWxMdPSFDUik",
  "key20": "3LoZ5wZdUHzSLhkzaio2gTQddzv4m1VWsr4uYTaLCWqU5bdyvormSdg5dedjsYWEK9MWvmSpewauC61f73JYxANT",
  "key21": "3HGfcyAqsa37fx6U6iuXGmYRWedx6s7FRd86aRKsDomB2rV7GMmVWWusbfPMTyvwPuv8fEpNVDoFikkHudKatqdK",
  "key22": "51iB4VGHkegqQtgMB3hvKEs8pSWWLqCJvzAzGuXvc8DUZtw54eZaQCJp2Ppc1ouWnq1T59r6AFuB3gpg4Q11VnF",
  "key23": "5auZq8tBkKp8JeLcztTR4d2u69bxfE2z4BZfxi2mwTJvp8ubDenXrf3oB6P2BPJxXKPpNKZKJbt1YrxPVA4ydaZJ",
  "key24": "3XpkvGtJrk3TXmMYHnvBHBzqtaq4ukAvceUS4bGidWw5a94dQHm4QEKUgHqn3V5KYvq7vXhiUM8u5rjWzYAAyXs9",
  "key25": "5yzu4zKm14Lc6fqAupVGsyd4p56GeqbEw86zM7YP3zPLg9nnx7sCABD63Ncn26TwnkfUEbDxz6Z95d5Gyma5fZeZ",
  "key26": "23bhSj1yMv5xgpDhkJRygpygJ1d3rt6sCtkdDuhdnxaWSbZvY986EUR4PskNjxmsRw6LKoLLAzfhKFZzXh3Va2Tb",
  "key27": "3vdia4HxT1Jm3kW5iana6sGhRzEFaTK5rcoCBHABn8DnWXjU88Eo3nLZ693Fwk793Zgxk2Sypo8pouiFDAw1r7w5",
  "key28": "58rfeDs76SkTsfmvZ2fZLmHqLD5Zbx3RXYyNLrtikgDKrAt3anbiYm3pZ4bgWHgg4VcysCzNrDYZYTibSC8a9AdW"
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
