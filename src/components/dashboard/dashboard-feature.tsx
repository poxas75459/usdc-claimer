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
    "3KzCd8x7EiixiaggbFFNjEScuuynrVz9WNHEaLuFRbQm8HZtfufWMxcoCyTwvCRsXTyxtPyYM8g7PiWFNbZQGEP6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "neRi8PWNffjzEv6C2eDQ8EfJCwrLmgXEQTpTnmVNLcNmmBWP8YbMvhppHbu99JkYnjY6XYUNR79s4bPw7aLVcZH",
  "key1": "5bopYGb9ade1nkNb3RPoSEPHGXgQVDkMYPJ77yzXBx1fxX9y6qaWMWgwsaFwJrrs6uL1gpKXz7BcaWfWEBivxye4",
  "key2": "4gZHPWDR6rsN8zb4fJVT41RvSLtdC9hpFVukyPEqYyWRLntGmNGAaygL5M25tQ3o6hXv5YyunimGycgTme5tEh5H",
  "key3": "2qK3xRWQDEzYyg38XNu1y3ETCp5EyDCVrgkhCtpCMynxHAz4CGQLHYq37WnRZ2axh6Bg5aZmLCasW5pfBbspmjF5",
  "key4": "RPvUqadHecQuo5r7urgSzaLrjd6VggnTXhhkGoJ8j6zCzgyoR5Eu1XrH2GMookuH55rhRsu5nKinSMf4QL9ruxR",
  "key5": "4oXvnX5iQwJiT9dSqrwm31WKgu3DuHzr43cC6MiuusttCprAEMTRqfD4UR6gmHCHGW8izeXv4cPtfuzAbf4bZKmf",
  "key6": "3CmJ4ac32w4Ne9vvADwcLGmnoS5rkbjb4Bo4n2LEzacMMLYpsVjvHg67yktQMntTnrNU5YuiPQ4mtRw2zWLmpp1h",
  "key7": "54kXB6WBDoY3rAHFLchCpjX48EHdwRVBreQuKootF2iHRT11H1VqqByPDtpUPh2gWecx6DySmGWEzpzqRvRdp9qY",
  "key8": "4Km986y5Pqn6NYJoKdY1fP16pAaakM14f6kvVjgHfhyZ1e3TkytWbPHMGLYESfE4wZ2yYnHT7VW38KeKri1RXtFF",
  "key9": "5aFub2PF5vrF3nj1uZ5bdBCSXTyNjeJh9KPbRbvUd9z9qnATeLoTY5mXFQijDhhV4MZmKYV8N8QZcmhEgT8r6X6q",
  "key10": "3w7ZV4vDHYV2nKTpYBfPzu6u7d8Wq5rjRDiNnxcEHkoe5jKyHuizHVQLMVQsb346PbVaZvCq6MLBXGCBRM1J5heC",
  "key11": "5M2HVeYfSDsSUq7iAnkTwJKd1aB4CXuAstLNW2dHNZvAJcABqDva95aMDXjVz5eyjBW1My1WYiATz64iymGtMFZG",
  "key12": "3KVCMkXHbAthKoZDyYeHux3Ke9bxFVk26vdRNAqB77dfC8Gjn6s7sfZGCVJniYScL3Kve9wtKD2H22shYSp3DosU",
  "key13": "3M6hj9XL9LeoQHkxmyquimd4PPQryMdhUieHcvepULgCk9HU6N9iJXPUjEkeXYmEKwtcVav3m2w5h6uaCwJG124E",
  "key14": "2mvcyb8A2GjNFsEDeDEcmszch5LfVF7dxqbMXn9hYCkm4bWEV6qCXQa8rJU68RvsL82pxpdUnDrAocBRnXerLXAq",
  "key15": "222fybR22QewRsWGpnMrGWmRsBUowZjhKtdjSqvhC2uQvnnwFcJMXV1YgVU7Zs8fnkZ6fmDkWVThncpFpzYzT69R",
  "key16": "47CGARkevLzYskMCFCfaJ3UG4tNzR1MHQrr4zKuQheBkZPUFhr739oCYCFYFDo7kbvKJM8HFqVPJD4J1eruz9RFm",
  "key17": "5L32szEPbHeDjficr477X722MNJA2dtocU6LpTQWn9bPn1YwMnaNHeVnUjUz5zFvTCeNjsWjzm6LiMZ9zxF9Q9iG",
  "key18": "Nqxe5oS34XnuwahhvD8rhmPB6RudhxMKfk7r3B8bKSN1pJtMyWsPaDhimcYhV5w5vxfCWf8sFSVcTgNngvKnok2",
  "key19": "37TCdY8JnRvUNfJrXjYNEJ1EVYtvAJ5SBhTeKieqiHDsvmoVsZBEcasUD73NmFwR6VcwTRzzuN3r2YbvR2dBVpch",
  "key20": "5TrYdU8kzxcN4tQYprism9o9phmt2T3ACyqRfmDFfDzJS82KEuCgeqGNbsyui6GPjToZEYESk5UbhwF8hxSwDFZt",
  "key21": "4c2bD2QSCsoXhDbZb1JHtVKpUotcs9uAxmkq4Q63f3e7WV1u6onok6Wi6isToq5SwsWc5mFjMmM6qrCBY21J1xRf",
  "key22": "49x81uistmrn5XXu93gyVL5bPyNk1CnESfDd4Thk1EX5duZ8Vn5JQWimMtTVBe97yaREhT9XeEvdtYzhXwvEGkmC",
  "key23": "41KzHWX3qcHTMXtgEH9ForJgXPhooWXeYBM6We6uGggRDDc4kH69w8J1bzDVNTrE1Lfxu8tnxBdATSQrsKhY9tdM",
  "key24": "dbq5pHndHPUqD1E8hnqqWF7ou72xsuBnwaEaQnzHcDaLwV13hNivLXCMvTYT2uuuj1JN65hNKMAFSKrbyxAZn8t",
  "key25": "2GQnQWcU4LmiqzNuWWiR4oYFzr1EhPx3h8TB8MuH9My15xkGaRN7N25P34gMt8PCSwGTPJBQyhaooQ84pnqHkRih",
  "key26": "4msdGeoGDbbwr1khskK76wfEqATHPUY8CxBoS93KSnVDivCGo2LXrtDXfe6E6RStsMbnbbkB71at8szvaLVBWNgN",
  "key27": "5tBku2To9hLQQsXK6oarM125V2WbsoRdxpbCM9eCqtER3nxXZ8apC2DE3UySFicuhsSbuGQF1j1qJg3jtFkdrcKv",
  "key28": "4n6X5Xhc1uXALnjuGNtMqu3vjNQJXyvZX6AJAKfdTBcdanYQ8FrDmqMGqkLWZy4nPztELepNhQRMAK3Bvy3qkmeA",
  "key29": "2253i4yTWhRQCm9ZP9qy593kgM8Ec1sUGJh8aueLjh4KtnuZXGri6YDrKx8kDVgA5E1E7VxFo9u9vx7n2k6tQ7SS",
  "key30": "2jXCQz2yh1sS4J6eg8mkF68CMMYBJtxuiq66bGpwbUrzgdiJDind3cYQvEo9deQnrjhgkn7ZAjrbtUEzZrM9vpQT",
  "key31": "3xcod2cs6RLDnyDDBm5AtzvNy1G1KCy477RpYDXC5rmRXJXJxcK5uhTUjyCpDwHuDtiBijFiQ431n475stznvMqY",
  "key32": "2ULBnm592d2LAPt9DUiW3x9EXTAJSvKKH4knz1Q9QU9woJCfniRefxo4boaDMcUsUE1dDbG78HJB5XWKALimrSkG",
  "key33": "386tAXN3ZfQu65MfC55r12wJHapdL7Lp3M4VfiR5hQDk6tma2inKAQHsVHNLwv3tbrhv1DK2YDvkDAvSNGUxLzZH",
  "key34": "38v4iec4R6h5HkTSq9K5m4x4xxe2nh22wnvt7sGVepZyJKKm6R3CQ5nFBtcjwtrV2odcEtyUye7AV2NRpRLpboZ6",
  "key35": "23q9ajSVHpjKq8VM4axtrY8BssWhZqiXDpod1Jg8V4izZakRFwPPfskmPvDdB5VpBf54vtM2nQMAA4NLD9QWZpCo",
  "key36": "fw4TBszuCCWHTqy6PjUabWX9FUYJ3xyUzEVgtMW9ST9Z6f31v7JjkiJWPRixBCxXfQGrw9kMxvRYJrQZbLmyFSG",
  "key37": "4GPaPmuFi741dALi5KWTLNDNGf4UStRHgr12H1fAtg8SjpgBMFm6VDxTAs7dUbaJDV3V3b5TnHDdCniAGufqdtYW"
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
