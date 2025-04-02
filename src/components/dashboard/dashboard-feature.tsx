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
    "32vTay77Aukrj47hH8jxhyTgdoF4mQazSthZ9u33nMRtYLUf2d5BL9nrnGmgkdbsAmtKhzrWm8CwkKxgvydCLa6N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KL4Q1xsfQCP2pa4SewUrBeTBwBQpWbJfkqJZ9vnHuNMMujbHBy8dkVAMi1sQe8kyLr257cxqZRLpwPw9qx47Ynw",
  "key1": "2YnzYjrQrGBrjA7WQ3sy5WyWYBwkMG9PvJdwhthhN1BtpyLZxBFdkVs7kKK15TprygqzKzgvrpFSk1rPVLcNgEq3",
  "key2": "qF1feUBLbBUMULLFgNyrEE2UZ41zPx5EdoWUoMBB4VzXVLLSTMWRybX6RBigPmTweY6X7AX1BWubh2wfFnfvcjL",
  "key3": "CLnuZdyoPzSWbcWQSyUTf8b3KeckxFFj8VMkCR46TtC2xhu718FNB8wErWzzL38XG7ez8HFngCyE862Ms6GWP82",
  "key4": "oqdKeMokCsqtyLuSc6V3ingjFQb8mkZteAirpQA5XRbsX9azdVWYckqCD1hi58VufG3XWX4qHDcahcxpUjSTwsK",
  "key5": "4JETQXrzavCq5Rd1PUPhs9V84oPP2nb6ZT9WPd8neMK9XmkrY9UHy2WUfgE72mtCoeWd3Th16F8q3ATX2yi4agM8",
  "key6": "3egxumfXFtxao223Qp5Nf7sGHTdPMUTwsMbyWSugJS2CbsctGqTrfQrNPsfxSGjY9v6ijebx86TaN1TF34gVKT3",
  "key7": "UwDqhbHQ8cLfTKvQnU7q55j6jeFPhpHRRsGVmHgKqRvLEnFu3FavhqH2J1Uhs9pitA7pXw6FY45TacsX3U4cdXp",
  "key8": "3Bwo6PKua7XQNfAR1YF9kkZ8H7HkZkmfKLSEwjF3q13gJxPxiQSU8WirZcac8ZMP5uTXWAUiXNWHpuW6JRQZaRQQ",
  "key9": "pQX8Psd2YyJHqJTFxXtJ15w1DqoaiMQjEWKgMU5bzjZbuhMwEmYLAh5TJqSeiDFcYjitoUMoTfpAEuTqvqMq7YA",
  "key10": "56HWZBaYNcxRDw8E3WTA81xc9uVY1XDvJNLidPp6LAA25RbRxXwA34ayfkJwx8rzou5BSNEX3DLs7TsStNZ7dN4q",
  "key11": "2FkXp1MMMsSCYHQbXyYeJr3Q5y3pbBjQFopuftuYmMBQWeMMMsbv1dqughdd9PGD7o7noSzCgZBZmdTvT9CYMnBK",
  "key12": "GPrWD7SYNepogsjPuBJrEGd8SQg2Ht4KJvFgwFCZoeJ2ytWQAUyfPh728cBV3oHH6XrqxAGodk6885wLskvMKDM",
  "key13": "2rwGKn683TNR6ZZfPXeM7w3uqYknpCsTdsTQqhZ3Ykusm1mkMiQpHV5nBCDLYswNLMzJRuSEoJCky3kTkS7Errhw",
  "key14": "2QueftNU9XzLRjknGviWCSrbqsPkyFA22Uf1acE1zTjfMEEt4nsK49iCC2gJu9CDZbnBJwU8mFabfdw236BV3tqz",
  "key15": "VURTRxq4cidrNnZ7dgxYidKSnkMaNGqrztmCdE8cKBQZ7oxYbKmZUbNNhuZLqF32ky5F7Y1tnfddDaPwig6iQM8",
  "key16": "Y8CyCsqm9ouaCpiqSNu7h5MCkLbR2LwX2kNdLz5xhNGiiTgkpyaXTPV6AYkE5ujceRBBZjKLfMqH5666C9TkVWB",
  "key17": "2pVnaYVKmCyETyq5nA84UCojs6zJXJqs8M6bAdonGjQd7yD3Tzq8Y9H1tAp96eXZh59Sy6eNfMdww541Eei3L25C",
  "key18": "C9zGobntDDHxCHjM4s9Js2ieiRTTy5PP227QwAzQq2zS2waqieg8HVfXGGq7WkULpdX5yhDEUBeP64qVDRHbjVv",
  "key19": "5wUi5Pqcb6dQ2V2fLUerp26on5U4eKUPrPvEvoek4wmDGckbTmeMLAGGMXpsFY7oJpDK8ptgRBj2vbWx1X2TZipw",
  "key20": "4q6Gwp2bynQm73Mcodmz6gswfmhunrW712MWBehQ1XQ1sDjViHzrL2Kvvu7wysukDQAk22a8YyqRn48zxhjWuR6o",
  "key21": "fLxqx9pCJuVS6KHfUq1gztMqUDkkHCgGeLxdADnff3RM4Qwdf3ucdrJ5fuSWq38yVBpNuFBuGvtCdQo1NrecY7c",
  "key22": "QgSxacFYC4JVPs4LPnVmPiJ558nyFtceXctVDYMD9q6Dj7AkipJDSMrNMjbiZFguTZztkLL2HX2GTHbrpgkR1dD",
  "key23": "2EY8qu8nbrDT8dvGoTYNcgVkpUt7fDCu9grPQJYit5TB5UgTKw4K7z9QcNMfXxZPfyGq9oSPkEWhNPnDpnPfbwhc",
  "key24": "TqmouU9FquKq9iNpfLFvRkWrDSB89b2qtRSUjoqSYZeWPcGssgKmNtaDigG6Hj8SS7RuiKfqSFUyjnGw4kyztKR",
  "key25": "rLSukiE34VpbkuYErBExcUwybC2J5Q4xPK987dLsEgfGyKWgRCGPN44Ef3d82KRN7JUPvZaddaMoNkz1WoYq1PB",
  "key26": "4dWpCrcT34V7CswQ3qaeoq83Kpk6CjDqt6n6d1mXmupGmTjW8hRJ8YtWmULKDTVYKoUzo5EGzER7vkLsxRvUXiXR",
  "key27": "scpetqwvzCD1yE8mnsMLkekpYZC6KKyZ2QP5Spm3rb7H97HMEgFN4xQFKgm69FdsTxngb9oeThSiS6BwHycZjfc",
  "key28": "3GTsd6KfiyxMm3zRCRWLuXcetBqSd1riMH8L4rw4faWq7W8253P7MFy8gyqxSPGyppeBcN8ThN5yGZDHoC4Jvrjj",
  "key29": "4LaSgN2uUSnzE3NwG8ShgAD8NikbpcZkUqA139ohrjvpEpyjDBdJjpYCL5SnVWyiahWLkkdDUJSgV9dx9fr2iuGP",
  "key30": "63zMfgcre3dfyZJLbr6vPgTUbZV9pZuMSiyvdfed57ay6JTPhWwKrS9ZqTbxuhWxhGaqUp4gG9un1SAxfeAWibuZ",
  "key31": "2sBXmMYAUE6neNKhmM9YuJcViqMHXKwhv3RAwU8A686iN1gDqQds9o5C1Lfh9eGbSm3cWqavzH7Bnq6exeT6maYk",
  "key32": "2vxYmbknRzFhw357LBxMSYCDodnJS9snEAAhErWiogX9aVsUcfmWib4oPpUGNzTns1PGwxL9ZVgn5bYsVqFZuo5s",
  "key33": "3ms6eLmvGy8VKwQ1Sx9HJBtNswFSgkQW6cK68P1zBz1nYRxR3Gnys45vkiSenBaxaUVpRq6m6DnhhXfJ6p4MobzZ",
  "key34": "5GdE1tyGe73z6iMXUSnyTgmnhxmvZ6hFe3TvrJkNgnYBbWUp3FQuSAuPSfdzpqvaPumaMcuzuzRgXnXbtA9PCwD",
  "key35": "byc7XTeCQvvJZhz5NRFbjnZaQdCSCd4eAPLp1kRSdYEpHMwufYQrvN9YG8DoyQKa8s3z7QvhXH4pYp5s89yaRQg",
  "key36": "3ubSp3du4SLf9VxeYqELdKvDA4dXSiEd9bvTvbBhwHZ4odA1qN5hSc4P11oWyBYE8a7KcjauWR9BmoRDenccoEJH",
  "key37": "4ojvyJC5bsrChiF1gtassBP7QVWJoMfuteDFQeeMiP4MCHsw7CeUm1aWwyqajQ1gg1ydQEZGexvsnKG6w3fBwDzC",
  "key38": "5jSuR5CG9rabDNek2VZubHQjFMaUPDwcsAQzxM9p4aXt4dErw27f9YxgLncni5mEQuupGMzJmTMvNT9WPHsMPjCY",
  "key39": "28ELD3Hq9PEmQjRA6UcimNpp7BMDvXQZXeGLbkhhkiu8yGLEmN43Z3M4j4ctvTmbdg3FWCJnBCD7GMMFHaKdDDBj",
  "key40": "4qcLnr7DwFQB2jq16eW83mnNYJjXM4HQvm63LrxdBsr7WAGzfdVA1nt3G9YtkqFGjpkeqZZFTDfCDfxz7gCjq1qu",
  "key41": "2z6LTMthisPBHzuUYfVNauNjT2uMZRKrj11VTzmciLC8cxXD4mY2wwSusg62HnbXRLgGy3UcCq5yuzXSgmbHoY52",
  "key42": "43W3iBn4pjdF2BwyDcMum76KBYFR5syTNN55UVFy375v3cpLMAXh6jX1sTRuqdhe7qiEPqJUeg4mECpPW47wmTy2",
  "key43": "37JmJmnpGUXQ5nDiJCErGYv88fa2BLfN6xP67xL7Tcpn6tDZXq3WXdXn1KEQV6C9VyzUhBt4Wu6prZf6Wu35Hzzu"
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
