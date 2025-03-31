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
    "faEto5wgYUK6D2Ra1q5y5sJoXqMb1bwqxsscZPSVywxPdmVvjL3VwYMXBRmRtUVWb5HThPaL772b4isnSdUALbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f61y1fxFVpAWqcuEqDfW7FawF75HSva3LS2zN9DUjAmj18psXAZ5LnPqMyAhGctgbuAKabWg9vvtJCgZeGpmpsq",
  "key1": "5SPBryFCnZmEg7YjXAibCGzQJFq8D9ejviQ5btyYTCHK4C5P81N3duxifedESeHAH6fzp6YjtJcov7ADPB3ZKvGL",
  "key2": "3juRSiuBWEaGtmUaTjdnWn7wMgkHoYE3zFbFeebeN1SLQwSEXfyPSngjakRARXxKpQwxzZPEeuR2DgTdQ9jSKE5E",
  "key3": "rKgB1nKkr8rLEvVcKzJHpzyZ3oeeyeEn2k86diwtWmKAGUWZygwqHiCdRhdVAuw49ZWMLbXDAesNzQoa5VE6kFB",
  "key4": "2xzNXcdbMdrHzx7eavVtULwCeBkgdSVjkTsrWbdqd8dWRnggbBqvVxE3wfj59h2d69YeZXFuSYgCwMHUwRtH8yRT",
  "key5": "p7GbfJ3fpLAfoBpJg2g2CcW9YPHhVmpWXm2LmMbz45iFDu3Mj1rt8kQaxnugzjY6vt1cv3ZyMUoLhVyPYVJF2Y5",
  "key6": "4fnWvR2XMcZv7W1MXQaJH5qfuCrTNNMXvrpdcCSNzEgABUVwaVo6X2E2BEifRk6QdypGsA3oknEneN7Lq9LQbpWa",
  "key7": "4wtMisBNpTU3urAWpC1DqCq4fAdNmw5LbRq5YnQPLUP6Ek5m3MYtp4ThC8i9piXTdQuCX6PzBJFYusTnL3q6TsQp",
  "key8": "mGGVmMHGTpUn3paU3hPgwpUojym6e84zctjCvBePq1YF6F6NQ8sAnRHZrMsJMPTuTAwaaVVauH6VUBww1LkYq9i",
  "key9": "xxHvuXMo7akAVNvt6PZ8U3bfeGGKDejbgqbR39JpWbtH4JaoZVFTfVdRuK16V3hfhUL717KZS2Ly8dfCEtdhAyu",
  "key10": "5GxgsZqQWsNZvSr714rZxdw8RcZoK28k9XzTkAgGsMA98muiRcSiU2B3dbdotvUkcQ84uVkGdoBopS9bvg2cbRLW",
  "key11": "ypsvqpPtwrhfMU3b1DpSvRedcFUmxZhnMNxfPF4LRcd8iD4jYPscuZmqsEV3oQMVp4g1JvXevKRyQVpJxt63akj",
  "key12": "2ELTLe6tWKFWQEDTBwebGH2rZDMFQDjNz7FPC7FjH3sKR63KPsPATVNGBXooyhPRhmurwxRehmne8adRW4CTUySp",
  "key13": "7kBeHkNLzQM7QSBRuQn9NBzccfDkZfBcGyDgYyQ4MJ4za2URMDbPbWF3adfd16SGKt3aM3SNPYNnuSZ5HLeXCcD",
  "key14": "2AS9gaGSewprLTSL2FG7tfVKFHSM7BpFgRhUQ2GpqnmrPJ1h1V1SoM3nLZ2vC5fXVrJSnkyqBgFW2F7x6u4292BJ",
  "key15": "22C7gqeVFDYwLf7E8goc3WQxU9wrqxUVQyKZs7hojvmcSebhdrLf35upgV78WPs2rsZi94Lm9GD37UJse9jBDT2V",
  "key16": "2kVuKBnKDo72J6DaP6mqj7D2h2EtYDZmZ63fhs2M4C9V7QwvdW9XSNcC6sZG7PNXTYduGWpGNsbW7xCnZNRifvs9",
  "key17": "3jvFkMm7Zw3mrSxYFik4WGgwL9CFkEYjmCGMBi2u9iYFeRtW7vjYe2pMxzWZ69tbuELyPAGtCpN3TE5vZAGaBvyq",
  "key18": "5MbTP3KRResaL9GtVLqtbTjJGrhECP6m2H15mz9KmYSJKu8b4WypmXeg5dCRFzR838B5YSM3DfEesQMMSM8ey8NR",
  "key19": "2mbjunxxDRW26CAA69UPeL3Hc81prDbkGvP8JkT3KT2Gqgmu33bU85EVKZi2JywWYdetJU9oYh5tJMStKRpn8T9e",
  "key20": "3qYZm3LxyucE4zXwHAxpQgyVyVQ3JF73iKpeSUofd1XYCbv3uBVUeNzHdjNGh9hGhMxPjBZwSZwpjp7pgKry3mbm",
  "key21": "4jQXdXYYstakvhsKLe8mRRkTaimP9ZG9pnKTGoc1m96iLZVU7k3Ru9ZLUsh8JD4XgnDWLD1NdsD61c1KwQLGL8ky",
  "key22": "3DfjUJbY1GfJpcw8mLJm1jjw1XHXBvNXmH1fRbvjui4wK9dP5Qrx7Qxkp9VFimXadaRz4fAVYUTxANJXaXviMMVL",
  "key23": "56qzP9BqqLCtcm4m6KnAYA7qEmnDqB8DAT3aHjasHnNpiaeMR7wRGhhxoMffpZ8GCAbjr7MM788TtNZNDLcFeA23",
  "key24": "42TVFotyvmBpSP8BFVqtUw8wFbYMnwgpsz9RUcxvGJ8S9oB68E3SbAQqFfsE2KXtcrunKChiXZtqCqcCShQ2c2QC",
  "key25": "2z9EtCvnFFzkfSV1xZY7Pg7rSZRyu7uuZ1fVs3pkJBnFxREaackirPajd9FVA2iN5UFVvdf6N6ubAdF9W325NHGF",
  "key26": "5zBpnSv9ydTcJ4A1gbWJVQjcz4ASLiSRfiJEqNQmpiVSuXrNYDw4Teu4o1VktXitJcsvAawaVVNgfP98Z1rFjRmr",
  "key27": "48ZS8zZUyE4GwcMJsgniACS5w85NWBjUEP53PJGGrAsBnT4Si9k1znGnF7J2wrXe57NsAo4gdDk7AnbKRNbkcrG2",
  "key28": "521UTtcvonTn7PtWCS3oaHeLrzPW4YV2drS1ej9V7oW64MG54mk7erVkK5NvNt5i2xaipRjPTqqmau6zJFQAWVN4",
  "key29": "2SU9tSs6J3Z1hiJwJPPteZoNRKWJdek7cmj5Rou9kS6iWTT1vVvJaFrFBmFb2CXAH6Tc7faxDbGBfUYmVoKfTL4Y",
  "key30": "vYEurjGG71pJMGE87pD9FPe2Syn7SDtS2k6Nu5ttoYWi1gwmWrpfkEHe6ADa8wS2wQwmAXVaNMCmKnRPgudHJkz",
  "key31": "33nKcb8AA1G9RKCitsT7rhcDT6g2gVjvfxmoDpgsuAsWp3dhfpaVUEBXSWXcRoroptLZGKmpGDCbjyb9nhLTxw8j",
  "key32": "3bsnM93fPq52DB1C8p6hAia6gpQwogN4EFWDwLymnYK7wrDBVd6Xg7oJKoQehU82EUHT2Db1ZhnhDg7RTLZxp3GB"
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
