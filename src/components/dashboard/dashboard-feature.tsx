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
    "2Pdn9nmFzrhBLxHjdNacHkce9yrhpnHFF45eRydyLeP4RLCfQRqbWwMPAj4qz35QtgWTmFKBicVik8JyshHEbeQv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VfP4Yyp9Ne8zx26sef2v2j3z4vxvcCA96HB1pa1MU9AZTxJpVnTQKsaiLuwEzWgs2VitecwMZyHkv9HS8Fx1uP4",
  "key1": "3rvYQigsjcMqsBMJzcfUuAYGocVuE6fv5sj5fbXMgKCDfRr2dNbyL1ASrgygTYPVAME7LuoKJmP7ZWEQ9px5xh61",
  "key2": "2CyvPHhiWSWj3aD1YvVuNFuFmHXnrgScaKVzGtP6npCDbGECWznwBBBaFH1U5JJPqxqXKgqojHL7aALQWKCSV5BJ",
  "key3": "5Je4wG4UThjt2aQiZdDq8hKhPZs6mCHJGmEiTebScUEmiUdjwxUYxYVmNubEQVCYAYNpT2dhcyWbp7DgrZU4M24G",
  "key4": "2L8byng6UQFeEAiGYYVLkyHqvh1hW7gLCUCYCb9W2KvhpFHuyabJviwUULBbi95b2rvGW6Cqn4fYnST8gUrRgM8z",
  "key5": "4DtDUFYpYHog1oDRYXBGBN85HfQ223kQ5LRhqbabgTtpTHfbJyPCHeLzYgRWsa1f2zC15enhfxcLg6W8zSJX8N6R",
  "key6": "2ELkUeLgp3kouXCoPfBAqb31X4VCH6vDpFAVgdquoym4rVUY4a7ABvZNNsp7nqVfaCjTynDpmKo3b189JRBTMfhZ",
  "key7": "TE6Ao1Q1DjeiNdzYi1Kx8hT2twzdiMG951GftUAz4v1LuSu7EsZ37Rit6zXSSQfivY5Ww5NKimxUZb3rRQusJjm",
  "key8": "4qrCU6kfgh9QedKdASadgC6mgKANmq3r7DnjUwno125noXZ59D4cUwva2JZN1AD2Tty8vFDRXUJTWDCW5Rzc85b9",
  "key9": "3CyBKq7NZksqF5328JJ4EVeSEBGKQyWEGNvnMqxLG3724VMMMoCcQF55HqdkeEGDRZLjHRjHfKuu1xGxgnsBoqqZ",
  "key10": "4KBxie8zuERBRmKr8dsfMgQCcjodzDZYQfp2LVdrEiZmAZ4nZ95kvc9r9gEXKd82bSoSdGKWR3EnYgawhysN1MNf",
  "key11": "2F1QArnozN4vtJXekWmHZLdrPN1aJ5xB8Kd5k69AaobTmn1qiKkhUa4H4g8qeDdAv74udJtboXBVyQMs1oH6gsGj",
  "key12": "5B5NCZVZAJQkBARPy3LwDXKhmZnNNkZVX5MmtAgx4gbL2PMRsYRUSozty79AhLP3EkkqkYtFgtm1n5HUCVySDFBN",
  "key13": "5jXQcBv9L1DadfkkkMkTZvhadrtbQL9cSs6813LTRLppRJZ4pzm5L85ExKafEFEwr9YSQ9Vd1oRv1dSFEG2yDmSK",
  "key14": "4oHRtQUd4xBb1WFDNFHyYmgYDj818NhYPx4Y48JEJ8nmPfV9go4atd5sfr4YoZoZPbAemX9N9aSiVFWryY28NjcG",
  "key15": "ChnS2CUuSJ4xhRxC2ZThEPYTfWf69r2n5MT11iMgCgWF2QdFmJriNaqSY83d4sPiUm8FyyrdzgUtLejMQ13CC95",
  "key16": "3jei9pKbM4UJ2tW225jp2Z3jcwmBuMmFEsDd7C3gc1hfvgbEyLGbctxn7j7GYRFkbxwrCwAGQatcHCGGCk6L9rzH",
  "key17": "Gf3jEFKatP2WRGBSjwvgQRNozhCComggXLTy5YTNRmFsDDEwET4TBmJ9FKc8Zz4vEZ9opb9QiqXs3wGx7bD2yJM",
  "key18": "4e6We3nBeFJuH3gPxktRADCFYwYZ9K8A3ChGAJFQq2VZv5aZShTUMEWVLMEQVYHC2cg1PbKCYad39awvwJS1TDTS",
  "key19": "5NwBv4caqmo9BM6G7R2nEUjTXonaB6hbb71JqZGV6VWpo2EMDHTYESWc2e1eNhXxSTGym5JkaVyqTdmzwCMEqjxE",
  "key20": "3Kto6xxBqz8agavLEsT4mSdLShFGM6vKv4wGGZDf8WqTb4vkmzTu34oszbwwuFZQxzqqPyn8ciKWHzW4sEv61dD9",
  "key21": "2UzFUPVsEPx3EQuwr1aoRovFC1eKss4scGYC9RTb6CJxpve1yw7SuujJara9VXCk27Jr89Q979QdAphAGEZN2REP",
  "key22": "2nqQihxW9MPbpLkMFgfisG4BBiEVRHMT7boaNqfZkzVLGz3fEjMQPjgNXZE5bp6tCd7MvCGyNCoJc2RBenDdDqv6",
  "key23": "2MXyPfS8y6fasrYhmNJgyi8ghbDS2F9Xtcnr5FtsgZFFdxQifDD1nSZtpA1mQtCmWBUCohiwr1HxVt7ruEEimveT",
  "key24": "21PAdJrUcAkv7HzY4diPfBVWE67QqrGRsePqUVeSKYg4ZWNLW4gLo93khVipuru2ushUo1ebtmgzTfZkn83dxHHr",
  "key25": "f5nDFtr7ZYZfNZdSon9eWK1cH1qodk65drZnBWzK9VPbXqbUBQLwo4tZ3VrYXZVrbbCeQuuVnStyi5C96sinU4P",
  "key26": "2JMWKQNQSv4q3YkL6zLQUzUtgcAtNYUdbx64zZbWxik5uz9vSFcuvDHc3UU4RL9ciyYM1pnCn5XtSC1hRgYGTKG8",
  "key27": "6766pK8QpbwFP7BDr1GmQKS4rxFhdkkhPrm2LJdo59x38hjVnbaNQvJpZhz4F1YcJ9BcKwNUb5oig3kwmZdvgt5P",
  "key28": "5q58YToXgt74NJz85sN3zmpqwPV4tXKHfUMALGjxqNxoDtebqejANF3FV2TGmKU3tzLWcBhiDw96Z6VNVpeobcG3",
  "key29": "4FSLL1dqKq65CJSgJPHZ58scR5eiDSVfimf4x1q3kD6pPQX74wR7HywvHgDJxf893hPh3breE4yUeASoDCQguVNJ",
  "key30": "BYdxBR2g6RiYEgN3ndEWVNB3KDZgJcNY7sUdSVPTp7FpUYoJCckpZuRaTYkaRnh9xCF4oHmPbcnBHSWMw3Y2r6J",
  "key31": "fSbRPUXTXZqS721iXDozqpL9XTaP79U6fDcZo83cWuqe6cyf7uXhF9nzJBNp7E46JEsa3aAc7JCspoqB6zzQQZL",
  "key32": "2KJRZY4zjSxdwuUBbV5eiRrebVmWX5yve3A4o6GfMjwjhQmjm4pegoVajWtWmP9XaDjT2toWNbYikTXoupmTxmq2",
  "key33": "2M9mMMP68c5qD8DyLG4aMcStBetDjttHNfySZaDACUWsXmjFXfJqfdKSSVi8QFn4QRsvNHEm1pE93isY5VMbAVBR",
  "key34": "5jZs36ZE68GWeqTrUoKe6jnqeNhFwg2WtdSfrZth912YGytMVNFComwysexhHFmrGgCCdhB3kdE2uhPQXMD9uAtT",
  "key35": "5wrGbwKfkh7Qg4Ttp5s2NC8wCsiPa9x7pZXcNymcFgkpWVH8MokPaqiN1jLRssQtQ9hPbAooYxc226RMPaCEtw9j",
  "key36": "4NQ9nXZPg6kxTiAkmD5uhAJuAHrfvbjnwgPBrazTMxV6Wkp7KBne6hK6PzhpNXSFA9nqhrvgw56aUSLUmqTDoGTP",
  "key37": "36FDn7PBmNatFmMcDT8RwRYsTDe81XZvmkCtBbL7qpvxDgcPNQuhGHccvuCVVUyuTLfiRPjS8dz5c4RkhzT3iEDk",
  "key38": "yTkNQA2oBB8exbcotLhS3n94huLSWDqHdDvXxupurkLsmYZv2JiBMNNuABjuE8LymugCT3ED2ere1gtJ6R1g5Ks",
  "key39": "PqyEF4NjKwJ6roGuUzdBwZnvEqpJXDVko56MGpYWzp15fgZfTCimUBEGuzSdpCS7Tn1n5Zv58Moq28PdHKxpKpN"
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
