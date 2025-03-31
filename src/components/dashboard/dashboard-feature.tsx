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
    "KJ9PkH1MeByckSPPPx1hzG5m6oT4sDuW3LdX5w6NFFagVxrMjGuoimx7D3k6DT5zNRzdg1dDeLCUazYTxLM1ury"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BiUMMbPUqogc5LUxnjsqqoaR1hCsJf6CtfjiS8KofAaXxySX7GPB3oUEo3vyjd9Bk5vRvTfdTpXqzG1LB9CctUr",
  "key1": "51Ai6gzk711BDhVWUghVjAxYSQhGTjhpwkBnjuoCgNSApNcEChtHqZiCzDczQkZMWY4Qh75V99X95mdUGjB9dvWa",
  "key2": "4tck8MDK8vJ7i5cWSdpmcKgGcS8RTUAjMLiJgDUVYyVRfZrqdsFoALvhw7BLCVUmt1HiQU8CupT43N3RH682M3Rs",
  "key3": "3J6zDgfcReiPsSj1AvY5KgbDUscR6jAs5g6bRW34cTqkx8nBB7NAXExPj4PFarXuPU6JdcxxuDSCL8QA95UF2qV3",
  "key4": "2BhVYkR6SVCF1YojRCDNSSohvyUov2TCiVJhJmrub7V3aW4HoeutLk7RJWAJWb7HiJ2PCj2qWH4jEFPCze1XjshL",
  "key5": "62F2s73U1Sd7UQxMHqVHiJzag5dps8k1NdUcBguEHtqYnVkPt491jEJtPHGGVzYiY6egmJtXCwVk8NwnMw5rEUUK",
  "key6": "39KAEk7Jsp9rw4CaUQJLZieZ3hBqdLYmsAYwnhqmMBDBzSsVrvkCXEALGAoJuwjYsWfUktJtaDB1wpAcHoFV79AT",
  "key7": "6xw59x5KGkmRe2B9choYsujQmhVxJTbvRhHho9i9coJezsEzMD4SvMC2pkFAQkSqVxyHE6kyysnjEETo8YacAXS",
  "key8": "5Vn3AqVwtuReY2ayxUVoH4Bun53fGguaas8zLj3YCq1KmVAQaEYaegFAPUshV9jjvxDW2Wq7pzZXKVgEM8AJ9suy",
  "key9": "3shVKfjHS5nTwUePWhqZY3WaJ4sUa3kne1mg7fvy1WdiRcJcMhEerkTzYY72w1vZUC51CRBeV4tw7xrxsbufSrRt",
  "key10": "5wq2gzYfjXDQz5ABDEvP4fEQiEjWXmSHvtJKAAMNmmt8htW5LcBXDSjmNpSg8jjzV6HKDuub9dkqpvqrbwARmEGt",
  "key11": "5UKdabEzyNSQnpRw3oq2ywURNJ4XWQqD5HwkcYgUit8i11FxNjnANsoy2sPoE8B2SmXRAzYLdy6sgwhLTbkm9jEL",
  "key12": "2Ppww6Vqrx6VyrXrMZrRa6s9pkqtCZhqstF2qoSKCjV1R3zRbpz7xVqA6cMDjrwxd5LG7vWZbXwRFovb72mCGaav",
  "key13": "2Rh77eEHmr69S1RUMsxUvxegvF1mgduZP6sZi9n7As218hwWqVQbwerRugGN1RoW77UYkAhvvYZeLHo2hNTZaWTw",
  "key14": "3DgLF89rXqPMxo5taCMBo5Q1iMm6HNMhb34EModAh6HpnJhmPqkqYuPbAr9FdMpMSTvXSeUKsyZ6L7GLyx1kE4cr",
  "key15": "4g95TQPoXvS2aXaKZaqQUmC5Y6gb5r4s1MQzUyWuH72cFQ43P1QV5dRmU5ho4kcB2oUjWCM77ua4eLMCkUai7oUG",
  "key16": "4TF2D32JZFDgF4z48o7G9p15mhN3nZqrazJonzoPVA8CRDSRoEcJxDbmZYV1jmA3r2HZkwTqWfJXs9ArayCgh2Cj",
  "key17": "5BCJcB2QadoADQRke37o37SDkn9CR6wvhaXxkqmhJmH4c4RfmrouDpn5TLLGHfdUnP9V1usmzUG71uNcz9AL9UCj",
  "key18": "pu1gFLSXENX6FUfi67LoCQrHZteaEAwNGJXFUFLr4x8LeaWm2m9bWbfX5cdysGvdSjMefHpU65vSVg126MvKXMz",
  "key19": "bR3jSkGCaDm2rZXR92JL3Zn6UJNQvWCQmLxN9wfnwmUhQUnSoPBRpucK9JHJP5tvAHYep6DVseEM2QpcKCtJEK5",
  "key20": "4h13jxSPcp9DpJDBHEe5HzCzzacbWCbyR57RX3Veqh1NPwJBonmi5XXYsu4PP8L1AuAFrXDbauUPUDpJpxuzDk4M",
  "key21": "4KmPczUW1VomkqUqwD7wLr73Q728dqJU6zH8HVN3XTHD95wqJ3Lxx6bde14s58Ran7xsnt2NPtmWTrjffdyDuhiZ",
  "key22": "4We1PqJkRZxMivYpM78EBsaCNHQJ1AMqZtMfkeAy1G5P6TpEaBXjaNHrSKw2kDJAXB6rJmfABik861iXd4kyNkRV",
  "key23": "45745rNx4eg9AyXMgzAHaVXm6vP5geJhN1Gv9pLnj4KpHZU91qbi2ii6rLskiWgUGbujVAq1fJN5e2yvDPQS4Bna",
  "key24": "63ZPWo9egg3mHkN5LfyfbFHhmYAc3njFMmFHUWLFHCNyBbdo1TR7BuqDxwTcy9WBFFpdECAqVLZcwg771SyFf4QQ",
  "key25": "39yhg9XDwzhjrT5YMFG6F5e9jGFffWzDXrxD6aVAHEeBxNC4jw6MkzcEb5f6WNDY4jNteHbpqKDb6pAD7nrVnRfs",
  "key26": "uwx3WwGiUyz9s35UJz7jM2Fr8wRXDzaif4eBK5Nv84UH2JganYWKo9ycpfZxsVKEACzMTmS9gi3AQHmxJy1a68h",
  "key27": "xFPEDXQ7fNQDuH7voLt8BaULd8bzv6Wf9LNkk8n59DtAH7iCKKoEnv3n9qFBiCg1LtatF4YHMS9YfxhYK9wLiiF",
  "key28": "51WMAwKhzWVNUPQGZpWVV1nYgznGapwVSGTCgX4uXZ3FSBZc4YrjpbeEMab8rPLgNXh6pdp3tmYwZ6D51PY3W5HT",
  "key29": "en7NTdJZ3gqis1nvN4M2QenxCFcoFsp4FxMQPBsb4CBkDxkRoEPvTV9hqYd6T8x8C9NzfYrbdJbgS867hsDpp1y",
  "key30": "3rGoUf6jXGozgRfg5CV6Fq3u7icKHDanzQ6rVoba3GrHaUC1VxVkH9M8i8hAk3vcnARJ2q8AtkJGwMM2SPqmGnqk",
  "key31": "4vj79DmyEANbMwpRvcuxApP9DwYMcdQiRVj7KiCVmxztaE7kEtTjm5XTKFejz2sLom9X8xE3moQzCf28qRHNXo7n",
  "key32": "46iZ54DUNDzajnmHZ4NAoR9P4xq7u7q1bDZ8f6ma1Ron5rA2aUswaJ3mKTtn97UdZKUoUuCZah2zavZ5saguAYgQ",
  "key33": "3j9tavTDZ6cHv8LmHkXrum2CCX8gB77rbPjn1yxboVwnmAea8N5oBGH4bMia4z8aFwUGj3j1MtVgjkTdc3V1UqBP",
  "key34": "YQKGcEHiuy51NdziJvYLZTX6WDZ4fvq7tf7n75izkgKV7dSsJWWrbaY98CQkjhyujHAvUAcCNaLngnQ7Bm63dSA",
  "key35": "5qCFrHz8SSzhfx3ufBWvGet9Wjf1qgKRM3CvnoshxrKpLwtptA9fmsnZXpLWLsMvgPdD2dutZXSorzb3N6t8Xg7j",
  "key36": "8zT1zeZ64NJJNiWPf2EnEjffFS7ZYjCV618ZUgaKxwahUknDDV3s58ixArhVKYNh6Rks4kNsU1SV5xd7fkrXrc4",
  "key37": "5JNoNC6UW6wXYMqczriKmodS9PMxJ819wFMYoasxPFr1cPkvEJaPLHqdMMa9CZB5tZuyXiPmq2rsDkqHDReb8SWq",
  "key38": "3vg5ZuU6KkUmhfHUihHVwx4PBm2PLCxJ7XJ22SUDpoR2yqduMow8icy5XMVShdhTvef1Bt5sxyajmGoAaaEH6X92",
  "key39": "3BnC7bDbWQ1Q42SCNgNf6jxULUuqeTsjR1wE2sDbeJTmNGNGC9odBTWKK1D9MgRC3uHQsg1ZgCiqcgKzBeJ6xSKB",
  "key40": "2c2w5yimc9Lj9XkKBmwHhx9YnHVDBBAbwwxgoaXGukT2fEZNsW7vS9xj1gvXuJQXtQUtGVmAZBmEVkNFHYZCKpKm",
  "key41": "2dkUcoJr22RpdicvKbF8NPWa9FJCtQcFY28btdnG5SFvcDeNi9zsetN1MurkdJMLathBV5XEysRBLwAcRcSi42H2",
  "key42": "3LH6sKD7p1wuesroLQeNm45HPVtoWt8zhchanYqvLFWBPb7U2sps7RjG2yLdEjw3JZnBRtJrKH6UxhM4pB1eGscD",
  "key43": "2SMmox86AzpHRB431go92UTdPu8Kbgicvu7Lztypg1BLbxBNWJTY37Ukb3fZRfp4k7XckNY9vxi7fYckyCB1YndU",
  "key44": "2mymPDMszGkkgk3rEQ2jQrhmbM9zSP1E45o6vJMXdPXkueEnC8Tx2UA9tEaECUaLbucvGSHFskfgYnc8qc2k4poS",
  "key45": "4L7JPsc2jyJCnSgDFJmovLH4mCsxpdsopUQ7w7kwgjNg7dhAgJdm9WP6G8DttPHNmwbBLgR4iNnetm61afgrBZVB"
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
