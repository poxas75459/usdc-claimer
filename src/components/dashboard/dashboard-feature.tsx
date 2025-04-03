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
    "3Tqq8gFLyDySecTPvZpkDAJgMCNoiKACYTkVwnNqGix2EXvY99LStA79Xgu8pqkV9UxJNWVB7yPeqbH7DSkChMRe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VURjGoHjjN1xXWP9YFfNhG9gRLKU4fDWUbYNpABsGCu4Tc7ZxurbCsLmKqt9Vy5dZcrrUTpqTvarjJt3LaZXXDe",
  "key1": "5VXyxDbgJvxwqGVBWKRRBuCrHe2D7PmuEZK9AF2mmJXXBjNrUV9is4LwqwwR4GAiFN1rWaSY7qf3yNeqmwVXR89S",
  "key2": "5y45Qs23rCDfA5JuxhackVbexk7TjWJDhz4W38JWLed2uJy9W1UFeSueSHGu499eU8GeDwCoRUThEYY55A9kPN86",
  "key3": "3qMwxYvwyemzjpJzL7zPLHUofxXemMcLFNfnRNam4zixz1C5ftRWyoY2t7J6PkmWVv67LCenjzZ4TCt78UJaS6ER",
  "key4": "3zTibPC2s9aECvPfYCKSLTJZq7xb6YLA5FkJjvPeTDwsb6DrkynhRdTMEkWnygGaAY1erJmETxqVxQ5gqKkk1WDB",
  "key5": "63AvTW7ieumTEKE1vo8NBmu6EBXxywckGBg4Ehwqovwys6qsXVrrKDUHsDorBALDDipTbLvZQsyAgPzVF1aacQRo",
  "key6": "5U47xaUegMRtWsxNKmiGb2QLHgWtiARkzb5nXfBadJjDVKTS9Uer7BH2eVaz41s8wTZVCm4V5NVjiu61JyqmfgtH",
  "key7": "38rWksnjteaoAt4JJaufnV7buGghMM2F8CWBfAzjB1TKp6XDm7LLAwV6ptVzAYxxUJtUKScTunRfQVobYeC7dgiL",
  "key8": "2edGyeLbGuxtvgjFxwyM9BEUn9GJQxXetq2BCgzvC7PaMzRLFzbaaYtmWfbJLw4Yhz6Nt6zkeQ2wRThNgQpWbTiB",
  "key9": "YPuRqEqfk1EJwxaiCUVuReYt8KRzoH1RscRr7rgFxvQf2g6f4fb8YuPf3foMa3Fr8FCHmH3S698pzxY1pVrzXLf",
  "key10": "24MTXTae3wiZTTGWCo61WPwjAfJsrJrYatVdCTiZaVZyF9RxQFE54RrotmwKebruLwEhiKT1cEWGCAau9Pu3nGh4",
  "key11": "eFKpBCxX2raGPpYTsYT5nVfTtLsYNvTk7osWdJXfNRZjScEx2Yuzwc1cgvzahgXLa6oDkhyZxvVRqLXtNaduK2h",
  "key12": "4n73XUcpGq67t8AHcT7r6y6FWweUNASKmXu9VH99fsQ5ySKuXrxuafH5kgx4sjBavdmiRjrXLH8bGFwgnwk86drK",
  "key13": "WvAdidCdCPtAeL3NMGyRznHNDJKseZYabFmFqsmxvVfoV5Z8NC6GHSqPhpoake1BETVqPq2bxnA4t46RQBzyQc1",
  "key14": "4gUQtAaucVho9MYjZt3B1Z2mueHWEQsRJ3SSiHCqMrT6Frdh9DvwEJ4YVMrx15vATTEVAMkgvTG7yfrhUJvgJihu",
  "key15": "2kqvSY22rhshBrcBTzWzqKHRGw7E7UojCBv97AGKn5v8E2A9TY59YpQBSbLrHnGq5zS2ttsjVeLQmWuf9Rr7Lh92",
  "key16": "1Yg8zTmximmnkjD63cDHaqwvoCWHcGnQFCHeDWK9HzFov2BXSAFiGtjZa6nLhBv5ayeHDEqxW8BeXhjZAuv2c1A",
  "key17": "5Pz6ABnLDFNqCcgE725cg8SesTu8vbmbpiNwhMNXQGCTiAJqGtjTEasuz2dKi9LAaquf3f3h3BgG15U1Hhq2KFpU",
  "key18": "3jRxxr3JHU8eeKk6y4Y4uf5BBW9Y16xSkYS7bMe4BXCS4ZU3K9ptfatQFkJLhbnPnGNPA6yHSTPHjdG2QyKd9s9o",
  "key19": "NxZacWLitoRGDaTchhPoxSouRRXeToQUwerEVCvUoWEcT2em1Mtk94air7dLU68qPQeR9tbt23NGna6kCjJokJ6",
  "key20": "2YUpXPDNaQxxpM6oXywNeecQ3e2bJhsgTAC7rTZBwe9yjcJ88V3327bLwM83xMHMs4czzfz9g3Qsab1Dbe7DVbmd",
  "key21": "2SRG1Pb9FJ9vhTRKBdsMfLSbciS5kyueRXDZ2y5yWvJqtDzVV6bbGWAFW8fsvR5wzWNiN7c4fiyHbKZVeuTaZxzd",
  "key22": "4i8t6RSjJbRnyEjxzsb2KMgfnygx1ZCVRqVa5pyxdTcwaRdqnjvS3ziu5ADQkKuCV2FcPban5pjzGGSvczTHoRJx",
  "key23": "3sfrJipQSkek3g7jRgWfhHajPeUy56T7f6p8WxSPfqVM1B9c9oGmgmZzUqqKJaS2YaTjTJrGpP5rkhhyPQXdpcYU",
  "key24": "4P7R9XsXbWovu33d3jNJ58tEEDL8EvJDNc7NHJEfK2tGzCyJCd2N92e1bw3WSCraqfpdzWcAkfC8hjwt86Gs8PzD",
  "key25": "3GFU74Way582bEmAxy1LJAAW34rUVMN1ZzzfoyjPGAcAftuQut8KQ7tNokshGhW3et4pH6jMfdhze6F2RLtkyC99",
  "key26": "537E6vnZspVQRFhCngamZunuZdDBobdAPsoBJjM23ijUHMWkMp1eRx8rzT6kVbRPujuKiG4H6YNmD8TzV8MXUMHN",
  "key27": "5nY7MitJrT4dMjHDEFwcnXhmsNWPGWHcbdpj4bmT9GfjyQHDpuB6wjkhFygWW8N332Dyv1T32KdcfnXQmRR2YGU7",
  "key28": "48q6uxWm64EeDMKzt4VwLw3j3jv8UGQYbQA7F5SkpSdSwv6LdojVmfQfHkvxLZLAa4ZsDjHPdGTaFnKRW4KfN8Ls",
  "key29": "fGbBV7FhBsHNSY1tR8ncMsR1tQmnWG4V8Q7sbGcnLDTKLWSMchBoKi9eqGwUhAhUjMosvz4AiWH6VXAMwfDRLZa",
  "key30": "2LxgCBqecNdTMXHDBveJ7exuvewPeW3j1caMJgPUUDzqJrxZjoQ1YFkPkWb935UkcBbqKsGGntx7nMjicuKosAa8",
  "key31": "5yK5bPDQR9GXsBLV6MmuVXvGSZBmfD5XRVqgCLHRjxagQ5Y3aJApUi3cc4SnCn9RjbuSn1mrwZJ5a2weAL6BkJAF",
  "key32": "3G3FgnPNKVj1Q215Z3uYERSEeUKsD2wr2MrD81PVVmAj6Hs8Rd44FezsBitk1BX4wTPcDXpUJsZv61DiKKMiyEmT",
  "key33": "4KakeCsVC4BxeT797GaqUtXP5CWcheCFtmxTLmiS4b1JM1tsTmnMv2qRaAV6wbwXpmrrogbNuHZsDYADWUjdg8qD"
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
