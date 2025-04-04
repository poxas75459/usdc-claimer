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
    "1ADXf2efKKESwru1VQ4GsGTeeu8D6BidcQTG4ezaqYe1bPYWSaGrKaWVa9MkhG6nyvtXy4H2C4WVCfo5rnHXBsU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tveQHrC4LrqipbTJept8TuZzBrFcvPAv38t2yJeEPGKtBuoEoRkpL6xD3uNmQA8NxMj8Vv5aCjPXfM2VbdKa2qM",
  "key1": "3LDJHmWzqD6hs3Foft7FwBzGEMAuVgjtMSoJz6f9QrxnrnUZynpb6sSz6Y2bK1PgsVaxah3NzXb5JvU9M9v8viBT",
  "key2": "4temHpTrWUqnNGcK7uNDG95axHMj5eVTH43ooz6xj64MsjFa4G5nA4DPV8BrGcABYxQPdu2CXTumzES33vNSGk39",
  "key3": "5hJSXixNL64amRBoGTPQAvmw5nTXC759XyL4CtypQ9izTpk6FPY5NnSCEbLbHZ9nGVAmieMB7JWdpMtZT66SAxUR",
  "key4": "2g1cV2iVcoyvD6wb29QuCV2GBepcdh4u6yr5WCyTf95ukmREqcYeDLAbDvojYhHLympcdY2PQyo8ru5czMJsnEJZ",
  "key5": "5GyKSvHvoby5kMKJVRjryTtYmdd7vQB3rU4KQpkTbkfGcmgs83bB7mdgDCzH4rqXYf1bvXRBPxR595fgZgEnYhwz",
  "key6": "5ckKsMe5tCxrjorgifZGnFGNDgL2PvbZJRWPGRt33p5CBS38T3bHeU9qycA3vD2bghh2T4k23GYurE1WBvpXe6qb",
  "key7": "28Ej7RJBh2ZfW2VoFaunXSXYP9fnfuRobVy2GwarKck186YjuAdEroLLYvaYcvYEFTygwgRhnCQHd7sb7bcYEMLH",
  "key8": "5FzWVKc6DfgNvNPTpeNBU5DYLAfwNAoKJK6uxu5sUsbrgsTusaAVx63p4Gxb8nwuWXENo4xpF2KaBZQx5m7jKYNq",
  "key9": "2L1efzzJS5gEEe6RMmncbc1UhQ3DgbH1o7oa87yAL45WG7wieUbw9BiapnvEXaThpRX86BvV4S5YJdaTv1maq1pv",
  "key10": "4jJaeHdgvqbh9jWHP8kxWWMyGZvo9eJFZkGBBKnuBDq5ahG62Ac5WJwtxMwfCqye5hst41h7MpZLeFqCUJCmSRo6",
  "key11": "3PGbLvN2pFKDtNC491KVydqCoFsUqjpQWfo4N4o5Jw5Gug8q3rZz3qpJKWWXELbU8QYJfPtzaKjKtYgvVNRtjqEC",
  "key12": "2RgFqqu5aDRtodnteZatqMqgyCVtT5q1QU2aKYuiXgYBsXfFhcs4DpqZTgvCdNdYyXg1SLDVwLPYBu9ARzwV7H9s",
  "key13": "3AvtqBaTfLP298vZvbqiANvnJHeczsmmn28fMAmg34NxTgtgv7ng2W7rjF5u3E7eLzCySvbSmfhRH7JG79ZVATMn",
  "key14": "4E8SUbw16mF1WDtporrFzNG9cW9Vc2ffaMHW9jQ9ZuJKtKGQacZVDXyyoX8r9MXqHfRX3F7nhPKC1z7Lnq8pYBwK",
  "key15": "2kmAyzHZpMQhm7tctPe2gYbRG23qPNqi8A9YNJE2EUpjQA4VFfPnq5bNd6o1rXmdtHNbrWgaTLVQXon2jFRaabdH",
  "key16": "5CegywPRE2fKv3fQWW5YGtB4K3MSGrDWE6h9FuDjASLcXJKdBmjAFCRUeNREG82BM1RuVK9tMG7ndx6kHmwyNsx3",
  "key17": "yCXbhyFZiFWApxwt7rzaZerE4fVEcCE7zZND83yVep942xaxi4KNNF8nSfbWZoh3WYNtDet7qM1zN7YpZkycwQ7",
  "key18": "4FATCH3Xy9W2LsaK9vWDaRyLYskrPuF4yuCTpk4A18x5SjcKD38io7xjAeQrnxjVhteCMxSvKRt9iTtL1zzYzuX2",
  "key19": "4Ljg6c8oWZsPuUwfvzDKrE6u8zdUrcnTG5og2nucgk9FdqrKSPyEuUMhNM1XEiB8oss1DwB9jgGtYZRKwQ85LUjX",
  "key20": "3N9mtMf5fHz5QrG5pZPKgQRJJC9rE4QufUSu1ZReGsk38aJrUmLhNydkXiqijSk7172k3V5xEzKe47QUG6gg7Dap",
  "key21": "KS4aQs5UcquzG5EUksrrKdXY73cP1AAM7wDCtJt6BhoPuVrxLv7nTmJSiwxVPSeVpwvnRBmsKpYcaeXaEEEqCa1",
  "key22": "51DZK2nQJGPRS3q3QcrCDkWD6q5rqAJ1jFMGqoe4sCCyjjncLpR2B3aSo2gfUwQJ5GGfFHepTaCWxVXFaUWrkGEU",
  "key23": "2HDgp3QrhH1fBaamitUAkbyfFMojcF3GcmMC97V5Y5H42pF8sQaKht6TckRj11iaEGuwQoUkJVvMKxMn5T791sXG",
  "key24": "4meyT7FxPuDwDrDz9DawZP6bbDXHZuf5Uxkg91zcQ474X9jyiyXzwrZrPaYA7mCiA2sqTmfK9TrMXRSdABAxeBJE",
  "key25": "4cqy4GJcghjzGkYok3BRVPwbNanCDbtreyjWgZC34UoRSxdKNzPLftHoMGZ6iee586hsn7Hw1EuqHUxtpHfFPPNR",
  "key26": "2vnrjSasXWG5vKNKJC9pyXzzYiJHSxzXSRxxqKNuAjLSSs2cYhP5Ca3GQ77k7RYLuZbbJKfh5bkgWQcGtBD36j82",
  "key27": "4wFJWRTEpJkk2Bzo6BME9HYKLqfeBGenNBXR8rnuuEZLhaGYnG7WZDS4c1kG8FGU56hymFV8E7eK2rfAJQoLd4vb",
  "key28": "3oUKGz6GpNhZQVVHFDJczJhFHZdQHfkydG3K5FEFjan356KDGr4Q3b5UavDph94VnL4c9EGNUC7E6YtSv7BWuGmP",
  "key29": "2EACukWYGF26G5am8Hz6AA2MTxN1tXKwyBMfb7F7SPVXipEmntjc7MxZmZFP7nhahvLDNCLwxDCa2k4zA98Q6Wsi",
  "key30": "5xRQkeyEMtbjay9KBvZG22Ri8GWcMDXwjHwJPf4DkpdJdkSRqEnVEdm6uLTQwwKecCVDxjqfSoW5RarpbYZm1N4",
  "key31": "64fcUm8UGaZ2yw5Y8JeMUmizKu7RCkX2hjjEag8iCCS7RLRVDq3qaQpnWfduMjyDQCtAdcnqMuwxbpiSFP55g4nw",
  "key32": "5gNPNLQqEH3dFwhqeGyvvh4UgLuC6Sfg8hMpmkow4kPfBeDFXiiuQDartmHuP6GbveVwH7cJonP2SZ1Twhi8SK9m",
  "key33": "5yqQMay83ksgbX5Te4pXppcZaUFdtxthUBos4dwdeN4pXj1qf8SyCf1YEzYk3yG1gWKmKMbDihzHSSEhWQPqBwvH",
  "key34": "HkL2r8oEEgZXR3Lafiqt717iSvTNx9xJKH6bDv58D2FMFiCCys626ueTiqzRBqMm321W7vsTNSKauQ86wEHHgiA",
  "key35": "2Q6fyvxEnsxsi4QL7QWQRgSgm6LsWUahHBm2fNZ8u5XmZMYztkHhUvzq6WLtJ1L2i9KVcWLG4KUEL6CBEFzRxtZy",
  "key36": "2J4SvBjSrkGAs3RzPeK6bouMFvECWKVeomy5Vf4T2caSm51P6S7ioLQbEqKiCrRpkeqcjn6nCMV6E84KqhAWmAqg",
  "key37": "514wCQRjPu6Z8wah8grDHjA8k7EwGbi5YiwFKenJBBVqgMMDoa4o2uUbe8QYa8RHCssY1fU9kpncNSPcxuasqdE4",
  "key38": "UuV84ahKELxTg7Kj2sKyH9t74ykBx7iZTb5mKPX3arwGKXGbiBsPr6ZqeU8tvguqkodXfts6pxHHVSqmtvHPWka",
  "key39": "5nTHnSf76EiHLArAJiU1TJTBXZpkVsrUUh5okMRLdAGU16xFckJPwLzUQAtscoh4s9UEvfgoS9isvifP8V473eqx",
  "key40": "3QMGtpBtDrsTcDozoRXzw5SdXrgZ4HHJ7VDKXFiBiLuUwmHGKLicYhoMVNvdWLuMESvKsq7UNyynYWdMARewJzUB",
  "key41": "HyK4uf51FdzemJcuo3QY4XWEvxgQfQmhXYyQHTXKxqid3aYjkhfm3FDJEiVWkrhSa4RWUDPyTv59AF7VkvSMdQo",
  "key42": "2Xi7SXi6fUpDgwpzaF9eBmGtfEwbC7pn9YYwrf8ZMRRphJEv5Q94HW82bFknCtwYPQA2ZTDokESgukNNDFCNeLwR"
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
