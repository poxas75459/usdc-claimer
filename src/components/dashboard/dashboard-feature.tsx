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
    "FnCsLtSupqFjzPt4caFLaWYn7DQJdcyPuiRNBhy9yM6LqXr1XBLxtJcQj7rYqSqygC5tBwqumAMd71Kx7DnfyhQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47da3Y4wwgTuy2Cmxrho7XRCprcCootW3WMfnM8MLyNPJcpdSsUqxJa882ndtWWkEpRFuemTLtaUWdHYq6cS4MqX",
  "key1": "32mmAUmp1gXjf8JUy4ZqvNSCFC8FFgigtTGJvKkxEHL34ra8TSE3fWZzqUqQT7fePahnfy4D6mafVYiz4ibypeYi",
  "key2": "3iK73rngPE1aYrBVB3BQTz8GGkEAvtYcEXcd74s4EtbnhJi38teSGrKzfvH7Wu52UhB7Y1mE3fvsTURsU5VotZ8t",
  "key3": "RNBKBBVURptP8kH5c8aR9wa9KfPyCP1SwLWSq6r2UdghoWLh1WDrzPk4SkQRdD74zqY4Ym9CrgEWCbXkzsaaa9R",
  "key4": "26q23iU173rTxEwpJbGBYppQgDLF4LTQjfb4xYqCXK6AfRQXsVtt5aPvnRv6vR87na4LnYHd6f3wRgc48GUhfDr6",
  "key5": "31fRW818J2egbDP9cBfB9e8sPSraYzgmW2fnVhJRzfw9kfxUxWp8YDQaPg3ZuAL3AbysyLeefG4gWxF4TjdP2eSz",
  "key6": "2kfjxPToW918RjAWNW127GXGUd7cCMqDMe7eFYka7uCXaJsbsZdiFasj8VjckhogtU4V6EPdGcRMvfVQpC56Jzu8",
  "key7": "2XNSapenwJr52tqLqsgUAsMpEuXPYzRdmAN9y6MFcVv65QL5WCprgMDTALLLx3wGWHFqwXkdrTuT1AspAirabjPt",
  "key8": "5NnzTxb5RanvH3y445eyqg7ZjSRdxvgWn3jhAAPAeVSKfFBEfEGZpnWrbMo7zKtJRBsCjawoEEkfMncULb5K1T6D",
  "key9": "2RpTvctF4kuPGPUCj9LnhWt9D8D3diGeqw6FPWuSLDwMrdUBgCgZVRv5rtpiDDdnMr1njafCPMfbryAoNDdYK27Q",
  "key10": "2R28LWxp4udo9TYppLdDW78BvdbbNQLQgRKD3ufQMJ7JCuSMDTSjhi16q3V9doKaSqpD5U5UyDt4zXnT23xAAY4r",
  "key11": "5roXDJhcgxB4YtaxqjStEQGuyJSmAhypNdSS1vJZ7z3QzfAGFka5qfphmygwhXUXZ3mcaEXAiJXkDzR26Q7mGcqf",
  "key12": "5GZyuwCmpMxvva5pbQJYTX4ZMDu58mXSHuwpd8Fr4woVBCFxmuEbDti8nvD4jimUcS99JAWymQw6SMn2DcaLsb1t",
  "key13": "3jKMMhQ5KpT1Mu9itYV5LBnjtRM9Bd8XTdQJLFyERDQxsoaLkoug7XmBhZ4esygNU5TejBHPT4Gi9Zb4C9Uv3UT4",
  "key14": "2XWBzhkd7iNh4bYbzzGJMKTYJVmcthRHAkbi6kT63f3MQS7PZ6Ny2Dac48rDN2tqr4SvWZWC9FRRvKbgAqAh2Ua3",
  "key15": "3dJFHUGh9PnbN1fm3rQJzEGg9DwHGuE3GXgggqhbXadVqEmgjintREYdCEHG437GFYPLBfgceMzVCQajcbLF1Q2E",
  "key16": "4LBPLokbbEKbeZUU5dgap9QYPGFkvN4Cd6beaNqsRND2LX2ViDbokFXR6e5KNK2FEcD2j5E8KvBW6uEbuVa8Py2D",
  "key17": "447FT9SmbsP9qovrS5Cn1V2wjHRotuzhWiQmuCQUgzDJeno2qUFYm3dTKFcRmBkp6ipRBY12rPauX4ZFDjH9zTM",
  "key18": "2VWdaEvKiQzc3r6hwWCdFdAiWxx72qpzm4hb8WEpoVYAx123xWFGH1pbzRXTVhQUA3orNxvRWLT3zjKcz9DLKHgc",
  "key19": "44DHmArGGF7EFCh6mJV1tTPkzhuL5m1zftNkASzrbZgdAL1oK17RGkPwv5KtpJWrKpgxBrNjBGCokXNz1KUGAr6p",
  "key20": "3SzKKnhgpn8ypEpQu6JWXo4VU19Vm4URnRSi6W2H8D5JXDCyxBadYJ8vtuXMGTQyhcxwcT3vGfePtxtQqN3DSDM2",
  "key21": "3qRTFyavoRMp89xGVQEuzdBKp41m3BS2tiksMh9RC4w5ghcx6WMa15GTru9pvnMXVCzT5JVZvUPm2Jgj9QSHpL9E",
  "key22": "4TBx9KwieVWf16jq6spWdKnQ8Pjk8f3SzzVEraHmFDUDhDTTKxMWE8FtYMTNZqKTza8tA6oM1JqQszVufAUFJxTP",
  "key23": "55k6zuNJht1huCvr3WvQgy3rRytoYbFhvAgH6zJ7qziJjF2rVpYmfXzhvuTViS6hF7531MAPmzAg6zSvrFyKKZHw",
  "key24": "LGuAAaJwpm4cAXzzUB5jGufXQAcXnH9CYFBJfFYXB2frZGSmGtUeYXNZqGgsvCcb8S2btf7RFtAqDKdcnAzR438",
  "key25": "2c8emzjodBj62rFQj2Do1p1VByZxg94KEvt2c4ZxSocxtC5WiB14ArpyEJmmeTSPKvKwYTFBLAwG8uZZywPLVS9t",
  "key26": "3pBH5p7jK6HKvAcpEdyQmyE58sKJNQzUsvcUUGWWD91dbWXnp89mZdMTJHYZEPBCHQPkfENL6tGJ3ckphCf2vu4Z",
  "key27": "67SpU1TvkBv2NXThHPbbPCgiUhqfXhTjsxBVbadU26t4uF9ZPjGrekyWXTUn6YrPK9fqpAjeH6gCCJxwU8Zc6v8m",
  "key28": "JxaMbk5kbqQzDaW9FZDqzqrBL7Z6GecrdUXZLsf3w9d3diErWAEv5ZLGsxvkdupU7xemt5sgfNLaZN4f5sFqD3W",
  "key29": "rNP6FQ7PjcTcQ13EHYWP6z3RdJ9FGW9U9DiQEvCf4EqE9U84yQd7Fgb83HG71W8dEfJi293HX7D2G8R4t3dK4kY",
  "key30": "52sbqHnuDHG3pbUKQuhV7uTNKLmuBnpKZamuZKLiMScd511A9bDeDEFPsto4mayk13VCN2wMV1MTSeeSypPbc7sw"
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
