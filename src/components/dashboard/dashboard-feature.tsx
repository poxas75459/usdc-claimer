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
    "3puZkXnEjPs4g9C2WfNU4aBhm6kQuK59e96iwrXbketY25KHuZCyXV3R7QXACZenYBCLURGfbm2dCe3vyGh36akz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jvg2L4GnRdKiXmVyT4PBqYVBmkD5yKRyywytaoUEeiEo3V8j4kKRHqvW6fzYr7iJM622A4RQauhbQ8gm1enAFzb",
  "key1": "3dPyUpaKDaAWsTWLzkQ1RFhszbvCzMhfyWp7hCYjmpEnfArqijJXPWeBcpjZV18iUSjHkyFyX3TLyfoTbWrTU7fg",
  "key2": "3QCq4yrkgQrzAbmgZCgQ9oYCk3wgqUX4XobrHu3phtaV9n3ASuY2YYmdvsq9BoDtnyuRN3vXBA5ySSxr4jETh3fP",
  "key3": "4fup2TM1SkXhMGbowHKru6UHHFNmH2G63V6HTAkPMW6wU5rVqXGcZnupH4XosmaUqCP49MCzvZo2Kc3BJPUN62mt",
  "key4": "5a8NnNedf87MEi264tTof8VebUo2d67shMMV5cvnWVe5MvVrisQxEYHm7DCH8SfYVQr62oWWjfTWC3JgKaorGiih",
  "key5": "5QncBRTwMhwu5DnGaHHyPKYKKv9a2mGNadYjJCN16VeJY9WdhhG6Xyt9Btq3aEodfybbRBPeiS8iVeYm6SDsGTVU",
  "key6": "4avpNSUMJnyHowngQJt7qAbHAk7NSHan2p1dZHRVWdT3MWEJLbVeV4EoJ7nGfzK3SEYXCbEe1TqbQUTNpJzrQr7M",
  "key7": "3msQvryHN1wcQRmS85poRRriokMBjRxp5LpAYXPhX2yXgubQh6u7wjuPKeXFEbNnNvYdt98Pn3XgMeiApLhwQAXa",
  "key8": "4fem1h4hY9DRQtDdhE5SzyvvqpDDSzRkF8bqrVMaWAa2fGaq9V4RrwaNG8wnXVKRXRgTHsujZ7mDL2SZLyDthCcP",
  "key9": "4VRUzwGmUvLwo8UhHt89WrxPscwPHMhL9yQkvPyDSm1rM8gcujFqJRFCPy726w8PNDP6syM4ArxQtwq7aMY7fQ59",
  "key10": "2RV393MChFYeHuKG81eb4ttpL2HSF6KKntPFoY48r9yXTbmkX1YkSN7h975yi3esHzaBsVBG9L914v7fEnnruHom",
  "key11": "2L5wDEj6WfwkzEGduzAk2h7QLDLpiVkJyacgxDHjFaUU26amzqaMoVtjjKzk4B6PHXBziMoQpmtbnWM7iyb1zQt4",
  "key12": "3hsXB8SubbRQArBZpsPes3mY8diUcg6Vun2QDzfMZJjwBLmEcsV8XfnauDW2Fc95B1thhywPnxHAA2hnW83rURMk",
  "key13": "4EdVawjutc95XjoFNVp5McAKFVa6pbnFKtTJCMuQgGsyCHpSntp3HX8ANq4eaC2uqk7xH7gg8HVabKVs5GJFLmhK",
  "key14": "48Uzom4aYQSfEQ7F5Un9HypngBTpiAqLUwcMV3otjPt2fqK8rYFfrfn5rBoJeE2Ly6DPfzqhx1jtmmuJ5783q32E",
  "key15": "63JNgUnFFAZoDrSXpYnkxcbdpkishk11aiKJoBVXQhnkucJh1oWdyNoQgyCBLSAj85PvfXchsZSaoP5qzUuk3yf1",
  "key16": "63LqihjucMaU6PcaafjPz8QLfSx3rczEnj7tCAYzw6pkxq1ZMv7a7spGNbpq3btuLGCQLWuGLkgk9HRQ37NydL2o",
  "key17": "4DveTJjtHouJv8pir6Z4EiLnyZYKmCY1ASTZd3BWtPEoNx3mE8Awa1GWcKWHAdomWzerVcJpcvGgbL2bmhvDM7Mz",
  "key18": "2suXWABVsh42aHTg7k1an2TqJMkeSDQxZF2LPYyPtS6QYsSNJhEywFH6aWVKgnz2GPFpEVufpgZYiNFn59mSV1k3",
  "key19": "4ooBnGpzEBQmprVpc2JithsRazrJsQ9E8QWzQjyXqeJZYEkBA9gWHr9zQ997cDPZuB2KDAwjYxreSiZibH8uWUGq",
  "key20": "5iZVMHKvFvnh9BUGxzKJXFB2Ym683n2Fs9MuxTVEHWZmageaiMpNGivxCKqqCGrhTJYHD1oxb1Tc9xcuFXifHDQ3",
  "key21": "BnhbF9hC4bzzPpvYFMQZueH4nQh1G2DAjCPk8R6P1bZj2vq1aKi81W7UVXqodKuM4SaxRB93DKUGoPJzbSow3u8",
  "key22": "328yXjqMU3oDPRRk7Ue5e9fk52Si3VtijuDw7D2tPfFr8HRn6pF5rVbsavYUL65A2uGeKrovWRBj1k6mnmw3gtfh",
  "key23": "4yzzqf23hkFzGbwgaE9nQDoovX8ABCCGbEGhaWk3vLSDKVwwugZJ9QAa52bGWTAQxTYEYkNQSex5PcGdA5hZW1GB",
  "key24": "2bfj6h5YiPP5WVbaXWmrDw9xzxK3RiaC1W42NR6tHYJNM1nMZ5YVB9JS1bt9rWyVhAAu819ioRLTLzRNEckUGoGm",
  "key25": "3oCuBRCkAheYdG9rV6Mf2jM1sLUEqx72avp5zrKwwTMW5bjy9rqoT3hRhaBDHruFPrZRx68xg7o9zXUEGQsoskyW",
  "key26": "4VTi5F8dKpYEKRiyzjioWHuoHBxC4B9oLAm4wNZ5ReVCQxtRm31VFCpxRXAuAtTmyGEqi8kj1M7cPjtd5QyiJwxJ",
  "key27": "5JkAwCpn3ELD8dSBmSD43n7KzYiXQxtJ6cfmJvEdoYKXK8WfxXCu9cgkLStBHfza5JB7wovn92nCRAvi8uhstXnh",
  "key28": "625eEY1U6jfCrrDQAJN95qBtKBX1gYsYS1QGAWpCg1AyTv36m6Gcay5scYYhuXSHBXDN11HsM1NkjiXY9Ze1Pot6",
  "key29": "4CRTXYd7vosvrzw2DkdfDhajHM9398K4q9rP1P8HpakLs4UA7wjKniUwvtSNfurkxAN2PSXPiZwEGbNmPacV8cSQ",
  "key30": "gff7Zhw8buf1362muNvxv4eNJj2vf9XWpX5ckXFxGD6JPa7TBgNynMq7K3UhCszvVX7KT1oa8Xx69ftR5TYdPL3",
  "key31": "5JFJmHShguLH8mkiFQGH1QtEB6CZBPgK42bgxANueL4m9ru4VAruXSHUsjbCNma1JZgEa4wUwRPjG3xvaKsu6jHv",
  "key32": "5auqnpZamYmetYBk5DKeu1CihbzmLsWQv72FzsQpebHEXffdJerkDdqEL2F3nSaMfJp5Pcf3prV13oz5Exz4X13t",
  "key33": "5tfwphWQg2faWGdMvBtBy8tq8bpGfkMDespURqmkTPnv93zr9wb7qYuG4fJjKFrJANUhxwxbS6LxGyvqafzPDV8D",
  "key34": "2nb9iUd3dM4TMF42JxEwSBb9UbAEpUWAZc3dFtQSwUp7F6Hp5kNWAuD9dr8pCMBSpLkyHg2RNih4t9kzy97hZefX",
  "key35": "25EFkxy9QiD3BmWJZQRDMLD6nGSNfRhbPFKvG3gT3sZYQwC4vqi8nS4tRSnRREB8jeMB3yPR6cMkmDyUZZ8TaD82",
  "key36": "5BS9poeoodWBxdT7BW8WHEaLLa9YQiq1FsvikpuWeTqwBBe2rwFZD89df9Bv6MgwXCjBCm4mfFh6DK5QsHAit7wR"
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
