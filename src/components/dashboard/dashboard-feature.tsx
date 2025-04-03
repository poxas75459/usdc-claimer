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
    "4AD8YPGcrC3YATLjJSMiV6z2RKPeJHojdCMcLddzbR9ggKjdigvifV8gv6kQZajKi7MmkdA4SuhZvYTXmfHhSasb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R1vxPUL3sAdUjBovF8P1wqvmVyHdseA1H3HujztN2yTQxKNRpcpiV3BNFus6xqHLeA9UrZjcVgEfuGD2xv5uHKk",
  "key1": "2zAWPZP3FhkL57LWC6QMQSJfWYj3oDUzrzbpPBZv9n1spZj4AV6L84GCNUWWbk5kLndZgty6Kir7p2xXpBVCvgSR",
  "key2": "39dAV2vXmAu7ximPGb8FPSPkjb7hBym1hVTeztobbxXaHMSedMCn8jgx9BgzTASMkALDpmdiZTYJoeVYYteQiXRy",
  "key3": "FqCbAissxBQ11oCnwzpbaP6NvyxmogmA4XxYBNYTcpWxJM83QTP4QxKsmNZTzz7KBBzJfuyRJyMPgJKHwbdkJb1",
  "key4": "4s5qcr2S3gQgd3Xceo764kRLthDhejfZmHVW3FXmoicqBtp2RH52UsEawBaVhoJsPv2ivTDn4tD3szAvyvbiYDXW",
  "key5": "2jGpQsTWyyP5tD7yMs1JCPzvnJPSSyKVaYwgawidGbpfgwovfq9VqCVS5Gk6Mg55eVDrdJtK98FWUoMd2ibXbXvc",
  "key6": "42BvFpdKMAUBhKA3ohU5sZYp21XHev4sYojwrNcwLeeJdHUR5qFRYypsPNJ9nSCBeHQyY3M3GUEfQxugPdRABAu8",
  "key7": "5UboMEEgycb5526nkzcuQM4J6ei2UXGJkn17dNpubfbTmrtqNofcXouC1jr4RXas2WjcWgUh8SYBoNSK3HsKHUi2",
  "key8": "xUrc7eStEGoK3oUEcUF8a9scvzSaFt7fHikX7WZVBVL8ELo9eYy7c9eYYsXs9BZgWvvgzhgTWXXVSqmynQUvPyW",
  "key9": "3q8qWqbvF4vjcCEWLxUJY9M9b4xUGAuv6x4pormBSWcZdkQ73W1tefhHLoMm7uJU4ZutbSQyvfC6dwMQrJSHex3j",
  "key10": "5gdZisB7rSQEzNpiGoTDWScmDRvMHH7aS2FqSWzysUBo2T4TEvTFGPYf228sx16takDwkzcjTy6rmNzsR474Y6Gb",
  "key11": "y96yp4vqvrzgDXx8gemdaUriWvjdU9BTg4HWDW48cyYR6DTS4QsbBQTUez1ovXFiZrfDZTKaHMRath4aYeb8dJg",
  "key12": "5LJKnCpqMxPEwdA7TsAz5sGLdLknutWDWk19mVd6EMc5Phm835j2ZgZtgm9JdHrhsLZcCcHR5sPBUe4ateeuMGLM",
  "key13": "3xxeRSarFuaALFTMVhhsqXyNKNy3zip7Thxps1XrQdQSTrS4T8sJK2UpEPzRMVVGBcYmDWJEjoGiHS88cv1WXiWB",
  "key14": "5wY4GDyS33qrtCKe7gEUNVxMGDL4MhGR7X9xXF7qnQzjf9iE2wJdfTcxs1vNWUdhEqeRqKDmskWasVc6j1kcdKLv",
  "key15": "2PhQACSCypqpWEuzYBL1rx8vqToeyMjV2UaN7Zb5R9t34F3xpTH1FWM4ZFwRudT3kkpXRGXGMyK9ASVzkJA5XTGn",
  "key16": "5pT5hbGRddiHCjti8FaET2ZmZup3tdC6rSpu3miWsw9SNd28zh2qKmECsKU46dJjMcDm5ZTxxiucWqpnNFREiF2V",
  "key17": "5A4FTxZK7BCsurBySNe577UZSkk9DtxB2mEhAb4aG9KJ4H4qtTQWbWZw39UTsnNNzA9TwFq6SSYvMdpkwXoCHkFe",
  "key18": "ppusRCX2xoVNu7q8RvJs1oMsGeDZ4rkHjc5rJRiimqoU8iSBNqwGmWKBXMQrwjQhNcb5aViJe8bZ6aXjFCCmGPN",
  "key19": "4SwW5jzzFhh2MCat7ocQr8VLPGKiGwfx1yETACoF8Q7dmUBMPS5rmuLyGhmpNepdQtMFZuijuNfvGCQzrvTaXr8R",
  "key20": "4KdT7u3QTWGFttQaqpfwdWoqa1VEvRMoufUoAj8H9kBCNZJLEBH1bJ6ZYcEhdBT8r66t3Muv8tHY8VMqTtYBspvh",
  "key21": "3hCyjpJb9Thw6GxmZCzahiZiHfjqieUbQsA6j7jYMXgcZRqLohBaXWUimNaV2yStYky9zpDhxFjDmRXQ2SRFG5YX",
  "key22": "5UVoPimcdYoGaXkq2XBWPBcVUNLSxmiuVifS86Dzkrxcr7bWRJ3zZLpvZ4bj2Vw95V8SqJGn4ieTmwCfnnzh7Z13",
  "key23": "4WiEruoHL5WycLeS5yGeQZCKPEoBQhAKoG4sq2MAKVfrpwZtJqzQmsfm23KepHXeHPeYurjdJYQJcyCM13qhMFq6",
  "key24": "55rmyRffjEzzMvVW1oiD5evGncXa172kvKCyWrmpVBBXgpN6eTRKgGFmMpnQeqtgLqmUy4WTubuirKt85srTeCF",
  "key25": "5iEaZtWosKf22GSupNu7GQP6cd2uGxkpvGwzu6bH9engEKUA5PKEEJxa2NkPytRUMFP9r2qgiz41Lo7gNhxUpQ8c",
  "key26": "4AjKuDMo4u9jyy54hZtScDWkheteUHv9PoY3JCLa37cBRWzk5ADCPz3V4Yyfw4i8mbZnTkKqbSRSP86UAkFF33FG",
  "key27": "3rLTHFpLowPFnbqrvdReFYTC9vfCFxnCWr8BGxZK12iPNMbxhHdgomAgyRYzeSNaGN9nBGjS3ReW2hsKtP1Aqn9y",
  "key28": "rDm9J37bH42pD1PHefghCgZGhQciyFJkfeBwdPLEjMMc9k5Gn1Qk8fABopcuUE2RtxbpbJWRgAND98kX1Pd5owE",
  "key29": "49jkhDHGKiopVN2zpv1D7n5h4HvYCg99mQY4UCuEk81NBiHXE84jer4uQhU2VJpE8v6FWbGk5dK1EqfyyCZ3QFyF",
  "key30": "26V5XuVtRd4S4ZvNRz4G4WLz99gUPyHyu8wTaQvnd672MD74wj9KwawCYtvUrMpCLvbSs64xJvAf88LQFwLDWv7s",
  "key31": "3fqS2vTbHKdueAnzG7H8GoHnBLk4ixrzf1gDcA7SpBsTM5fXUg5uCUVBsW43M2SvXJYu1YCwk9UiPXJrEJcs5iME",
  "key32": "2xvbPXCmpeNN6PSRUXxMRhgwUyxecZg3mMbvFYMakuE9V6SFuMmh57BabfcNWyZfvLZnRd5VM5bJyWeYD2BkEvMP",
  "key33": "5uTJDjkFc8z1iGvGfJFR6ABV2wfyiLCr7goEAogNXo3X3ko9Svi41aaF6k1tSnf5Pvr3K4DrQTh63Nj48JN1nPS5",
  "key34": "2eXWtGqYBZS9fcte2ZP1TF4z6xw6thVuNLgfKGg1n3QzoVkK8awPst7iHrc8jCjjY2uQWt9bG8Ytajjr7f2uxq7n",
  "key35": "Hu2TkTHfArrkrCnUmx8FukzF5w5MraDKxLhfcwXX3oT7EADvfodswg5ULqCYzkh3HFf7pQhRZoiUcf93j5QCUnU",
  "key36": "5JVpGGSrhxecGWbBqxjWqGW5TBFuLNrKfRVWjwXcxhbPzsrsYR226U3jfJ9v5XdU726Z38M5gjDJK11EKxLi8Xx3",
  "key37": "2i1hhzdWKj9DmSqW6vBcnBQu5GvnNVtKH6hbKEvpMqgC9cTdSX6wsfVoTgr9TmHE83DH9wVRdWjWF57mwg2yw8Yn",
  "key38": "2YmBHvdgnNrPkCGKr2o3rTjsA3hYmB3kdA78LHGnHrguTMh2ZJGnoVKgekSCaQh6YNc99xTTek5t66wzdXGcWv3X"
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
