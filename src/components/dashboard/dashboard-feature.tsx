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
    "i4D8Q542TQPuVokVFuVJzEcTJqy4hMRwKz5QSR3CqdzYKrT66uJvcpSbPKfgfRZx1FLbRriRCcFiErSxtqsxavZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4z41CGkbjY4BtUA7mcLtEgyU6hThT497g57RcGrpg4P18iArgEtAXuSSGK7xMTS7DDL83MXJ8LdhuUQt8JvnE953",
  "key1": "3qoeoKqY7x5HMsc6yAPCnEJED4v66p5DZRhxPWgB7tdKj47KBHjAWniKcRPUsJJAYnyxpTGDYU8ekXyaxCHiHYfL",
  "key2": "2bXEneWNTCoa9uYqoBnf2om64WyHGMxGYRFaJ1Lp1abyjgKKhB3w8H3thBeWiJ9xhEzedvWmhkZHP9hxALtfG8Vt",
  "key3": "3S6kYQH9MmrgrGdfJY7pYvK8CBFZW5gVgjZYz1pn3rQ6L3N9K8zWUkk4HC53AmNMXtJ7ZmKphE5z9Ed5wTR2UoNX",
  "key4": "WwBpcXjDr24B3hKEFHa7AeTteqMKmLUChdixLC8jw6iUb4dnKea61ooiozhXsBVKJLEAFKqDjHNnjFcF4tnGkYX",
  "key5": "5mxRwJot4e2DedTcaPLSYhXSAcmmkckrTomosmWtM5Bu1qMBopkMtSLDKCRvf9DYKF7JEuQiqLjCUDtwcJ2iFjTm",
  "key6": "5CWH73oASZXkyG3SWq9ukGviLnkBsVJtFo8tj4Co7ygnSQh4YjaK5Bu5uAv6GwBFFKQiGahDZdKNJbrm61JKoT6p",
  "key7": "4wHgUrehs3mQgQXfHyao89rdttGM1ohzWZojDdwHxMa6aqpjDRtwkkM6oBcoojGUGjce3nvNkL5zYCqn6ToSab45",
  "key8": "2K6kNfHRf1gArypcVjEpuaqeNrhWiyKEqv46GPRT8aNACtsjxZzyKRKMgAnq4rvabwZcCnis8mGnsPgoVc3NEL4v",
  "key9": "aBcV7Bcbu3YnUZxsX1jgeXvJJJCwSFovo1xbtKaK7P78izVQHrbCBP5eS3RwvAgQMA7x4SPtBTQdx7NQ33tubUF",
  "key10": "23dGXhV3syAW8R2C763hd1ax3ZeoDVAJuh4UyKWkenmaYbUfTG6zBoRRuR88Q4wkddQpX354w5eRMUPkGZudsfXU",
  "key11": "4k7xdU6NdaUcQEoaLcnotLwqFwVShJ3ufBnbKwiDScY7hFtdVqvS8qN3JRcnohAqzEX2qj7SJqG6Ht9jJGRSCdHY",
  "key12": "43rX3Tp7JGiGj518jGhmKTnHiaPP93LhA12RPHFrfgX3VGQJK46PnJfaAqsMwjnPGurJ7xSRscWtFt5yy6i6nyw8",
  "key13": "5BXtAJG6Wu1tdLVa53S14F26YGqMwJ768eukGBxXPEZB8P9mdE7WxfEENCQpGzrv7zeLAj4UJGPFoV1DAWwLDTaF",
  "key14": "4B99rXuZzW2iwz4TNMzcuQTKEE5VzmVYboWmk2SyHZPNdfQEiaAjBHnZgt3fHA1HTHzN6AJg2DRCymnYtLu1qwj2",
  "key15": "4HboeUFP9fxZNrJMxDc1tsyCRKod7jVfFRp278WHxW8kb5oZru6V96LEWbr5pkkJEa3BVywNmxr4jPaShnLGsD3f",
  "key16": "2Eoix7iiaTgKn14ooP1wBRwm4yCf3PNzvt7QPLTLFbKc6vLTcBkgY6nodRPt6W2c9FcgMjt6xm7kiEvgpJqxG7Hz",
  "key17": "pUg1XoS8VMngcTPQJ6vYkEjzy4pvqVuUBTchhLHihBZiufpQmdPDSaXZGUhYss8ZB6wHYdg9bH8fGUrtqak4kbG",
  "key18": "3NCWitSrUp4tD4vHevpXm4sDbcEoUT8JuJvyHa4yS8ivq5sc3GFy2gjbc7wMYfdEZsgr3x7M9bSTRPHwK1jrMqbG",
  "key19": "qjBVSm1YfLJDKmKGuiCEi1vC7dHxWR3AEiEYbwLLr5sJkVKSHRTcj5N1JPhhJmajSFJ47eFLGjcV9BgZtPUEz7t",
  "key20": "nrkrtyfjryjJMSXyrcB4MRFg2r6TZnPWm1vmiyEw146GbsjsaHjkDMwsnxW4AYLjhhWQE7AgSmpUKG1A3qso8Jw",
  "key21": "4RbbNsoEvFks9kw22zM5KK4vA2avF2XzCQhEXhJLXRQfow6zweFt7pXXJjN275AbMbdrJEDDzweK9qjfW3kXQJ4L",
  "key22": "5LFVtMaWrcBLfyLjGMzjsMvay8GKtLi1gpWuVSxhZ67N5Riw3e5RtVf4gLPZ7deKT4YopBVVAH6PkXNmsaBomKtM",
  "key23": "4QzsuUjcc6zietWVGn9qcPHfV5ewZzsrS2mSinHq21FH3Qj8Y1MGvRFZTyxTPjXLFJTvw2bJBXVZwuPGiighQ7u3",
  "key24": "3SVDBJPC8mkyyWHvEKhm59UYZwyb7mGpUjmEfZrTj53BDzySvPAPXfoiAk16wUEtCVNjfqKdQFpWTjXBRSm1xNuX",
  "key25": "5h2oUi7yudNhtbobkk6rBVQjdf5wF1YftF69dg8QkXfRjPtAUeYBDVM34yZT4eHD6xPB9BqKvP4e8LGWFgoUtoby",
  "key26": "m9UGG6p6WXoq6xU8daQxqijTvKqfBriAMrJ29XbXGkSW3LxHZejnWi7uVvezW3LnGefMy65LoY14moFMruSyJvG",
  "key27": "2udgJtbvK867TVpPpN9MLCwSz6kJTqXdQ9dUPQcqdWqgpqcexoFLEa4cPACoMDZhqzUhiyFXhSKAYEqjs4DR1fxh",
  "key28": "4557e5nQY6HDYaDJ2EEjQ2uyuAKTETdktASZzGFGiK55wWMJNz7EGBMixNkb9porAwWrMLQXVHLHofZGP5Yi3knz",
  "key29": "269k6oicGB1B248cy4kS7WVoFQ2tk4pcRvAWBLDJnwrrPWbox78nAbjq76Tpn12dTS54PDyWUqP7Ze4ZPmHjpFZe",
  "key30": "5a8HNQSyynUSQLMGxyyFAFLKCwiBLU15hudVXKcCu8VcFy2wCXZnHbY2jjLoWsVJWzTx4BGypsQGM4pFsLFPQyPw",
  "key31": "s7cYKETJA4LbwTJAnRV7CkqNMtJepA4sDg2RQpUwFmDihhj6j3AgEeZtsYMujQTjDu84Dwda3MDE3zgqisidWQF",
  "key32": "3CuUJsUF5tbG6XMnxhFqLzV7YyByXPQVND3ypY6qqpZf4JtMHVCgQi1VFxu25xNN3NfzuWeGXT4jqZYfSVv26FUi"
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
