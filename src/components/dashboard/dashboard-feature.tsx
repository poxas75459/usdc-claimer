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
    "35jwMSor3b2JEJcnkjVrYMrGXyE6dh3YcT6CnQh48LbQMLA48Jii2pBtfDqitW625Q4XpdZrXa4o1rVPUGLo3K1P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HXXZTXcjE7x4H2uxLAW5rmjo52fQCdkecBTqZ2t2eQTpNNWYrnqFPjDDHTxpwB1XMZa5NRkRRbXrqpswMDKiBXc",
  "key1": "4X4pa52EDr49Sz64gzJSvzLVSb13x94Z9tHiSwidkZRHBTAAzH5k9CE33DGMP4caEUrt1obgGq6yFJgkjTnaBynJ",
  "key2": "2t2KiJ3NCPEAazxrmtEXEeVVs5x8678NXqRYcj8qDNuNRmPgey9pzkproF8XwoymJGmzwGWi5KTHNiBnx93GwVZv",
  "key3": "4hmD8arvoRC4Q3Kh2qYqtNHgh8YA9qaPrEdgaWdZ1DLGpq171RiTFKM5dRgD8ZMPcQniSCdoqcgyeFjvVmjfzbEs",
  "key4": "2F5ffqu36gQf38MALmoYPjiAjE97TJrZWiQ8zFxgb8zCbPN5YNfDk4EQN72CrtR9ehni7aqr3wreeAy1AncwAt52",
  "key5": "2mijHjxP5c3W5FVEPBemMxAaf7XT4byd6qVNYd8FNxrJiNpP9jqEa3o9R95NRh48zDa6P8eGLQJ4hbnbuEK5AqD6",
  "key6": "2jmbZudWtKHpA9jaUTtWwrksLvgPWAEmvNmg1zpuq8cGDwEUoRQLQQxL4KANhMGXbQYCJb11d3TMCrmbvjbNx5oK",
  "key7": "vMiXjyn3bEtqAvCTbJUwy1PGoF3sUVCkdr3HHDoXNrGAont47c49hvGvZGiNv63h1ghinDQCiZDwX3DnB2htLTC",
  "key8": "3KbM8hiuUGHXrrdHnCWdwwm2k3tP8ihbZsutMp1CeHshczARK1Jg13CPfN84q1HkkgzfmbLeAcTi1k9pjitnKFbB",
  "key9": "4fnwuY1UWKcde4shgjyJKQYVUbs3XdkUKRPANgpQV9zW2zaknbAKt3RNv1Gsgi8MpJHjHXoYhPRjX7VVK31oH3Qz",
  "key10": "vdacSJGVXScRGQ6zmHR6WHqET2XpCz3yX8zkzcNcLeZcfq93y3afEa5Lhtwh61qoBEvL7EDZKo3pZGW7HMKLBZN",
  "key11": "5ihSPQMiHEagLWJU4hWsv65dyVGmxcM71DBjDQkiaxBCLPUApSyiVA7rEK1WvVx5xTJUALqXtgBMgxceroGCytLd",
  "key12": "5CuY3tJKw1fC3FryQeovgxjfPe5MicgmckrVo4FYtmFoAXmMEcrJ3bkmYbzSwCoJwQxJv5WY1dKSW48Gb7QzR9g2",
  "key13": "5idvoJAURaLJzJywdsWY5ycaSwtsoP456GpViG4HsNZSm2jcFkqR22UkBnUHVVWJykrAkmCqfNrQEvxfbTqorxbR",
  "key14": "2QtfHv4U9kntVMQYe5Gww6bZwdpHKkrXjPyoFohdWGmdSPKCHkPymdEkMR2CME2fanF4X8WkCCWgS1J47yafxHnk",
  "key15": "5id41TDvXkoLmWAY8cbZ2RYyguLDfmD38CtM6r6ixew2fscNCz6Arh5fjMHv8RWYtbNkBHtSBPFDHcGnqckshHti",
  "key16": "5NYK2urTzsWa568eg77tUNxw7yHgRrcNBL9vgPwJkr7RHJqDftvgBEyN2D8ZNh5JwtdqNXpEyFaAP6EiZpb5jaZy",
  "key17": "3MAQZmzj34p6DU3xEL3tsY4MQdwppteHdSr2pqhEjJymwuic4goqxDKGHopRThoENF1okbg9r1Jo8WhSKw2qZUjt",
  "key18": "5AJE7spxUeiiDdUL9NQssjREw7NEKnaMmzWJ1A6sQb5HVssDv9KC3rmkkxRGvAAKYv5ftK6z5eRv8TaHADrdiQjF",
  "key19": "4PpChW5Y7SnJrj82GyVDUuGiFSW6SZ2qLsadJL2UMSAp4s6zwo8CjV5CdDwocZkygi5EyeUu2zto5G9beqS9Nuhz",
  "key20": "4WEyEP9PqARaYdzQvPmbaHD1n3eGYdWfrfz9jD3nib1Vv2rVPtBvcYRp3rKrfm95vRh8oQQS5pQSg6rcpdFMmPrX",
  "key21": "3W8B3tW3JEBYgzfs6vewCEPmHKHFn8uapQtwWuyhL9Bdz2dkxLoDjaQZdD13DDyXNZWiRDFzaYBmQepGNnorgHoc",
  "key22": "TTQ31XfFgEcX9gU6y5yXXQjvqsUwHRnMAZCBJMNEdy6JxXNkn5VJh8ngwQepCsYmP5iHhMmFTReKrWHrEDcnhdQ",
  "key23": "3B9BvZ4xtsXYz62zioGc9HMsZ8tJEbh65ApaAdwnQwNNFiZzVrPKYGpJu93upAPGurvLabk2rwBTRtgu4t4tRnwu",
  "key24": "27CFLXJVUH5WsXKmdnh7i2e8EvkA6ubhnzVA5xfAYdvPgNjD6mv82iay9V8Y6tEgFdjzWptH1omN8Cb4thMQSznM",
  "key25": "5Ramvh4YTAUUGGFNmwcTBWo3wXAKJH2riCgMeTbPTQABfr5usk38hgWf7sniKkspHV7vJ4fNGM2z7HcKdSXo2X18",
  "key26": "3KSSFBhYbGVw1MPtEe3CXrZpy6SxoA3JHGDL6xyT3U54SiiCjM21bFJGapKUTQVsGQWVoM8RjWm6cA7mcjSmBAHs",
  "key27": "4oaz69MhE7zqQiVZRVusjVTB3CW7VA3KY5APrHLYfrzkJF3uUNoYkhmjBPXcbS4U6NSbkvmcu7qynQz2jcNMdzQQ",
  "key28": "B1YjkMAQLoqypdxGKg5cod4BNyrA9s99E3K7idZTo6cPFaF9qsY2H7KZpBFLKP1xmuAHMidcsSDVtCgFdtsR6pr",
  "key29": "3Sk6wHJPr9zLLSXacnmWtCKPjDzwQdiVqnn85mfAjzwhrhdL28VhuKC1J7YvuAeiPPLJ3AXTMAnh1qHmpbMN9b3G",
  "key30": "3rSyE7CHr6Pmj2Qvy4VqQxahfPcuzLjCzuT9JTWkeQE8KqmuHjdGKS3tzTTfrjY2sDgNRmSh8YGgwwVpCsRNJxjG",
  "key31": "5pTT64Crh6YnKx2Yz25PJK6VyAQjuup9mtHdLamnHSRTwBVrrufrkji3Yo1aw9bsbtbwx5raGxVorckmfKGfbXzr",
  "key32": "5AoT6JF6j1HG9geLbNYTuGq9zdQiKf6yK9suwQXAikVHnJKeYXHh3e4C8fRKQvZLNF2MMHq1LSmuo7RDAczYZCYr",
  "key33": "Z92hi8c8iEMYyRqm8Fy5VwMWGMi6iwZUeqMaVf5ingP9zPFQKLSuqTdrwVdNomtGafZh4FySfJjdz3orQ4nCz3d",
  "key34": "2k92BTGzAP6DQTUyRtMWU3vWVXNxkciqLTTB35k2bDaDQd1BNa8KkaVvmpx12pcs1FAmqaqxEhaaafjzfMUTPWZE",
  "key35": "LFh9hiAAju3PRRNcC3SjRxBf9hMQPsoC6BxC4JcYkVyPxjzhCMZ3rJLTj2MaQYMRwcu6DqrpHSq8KsDMoGU3p4r",
  "key36": "2a5iLJy3N7WL5UjF2cUZFSvxJdCtRM3xfAAVTBnsgreBJqbNxvpjHZsg9zXVrRNPrSMkFaKRPwTtEgHafhgpVNnt",
  "key37": "3w6S5oCnhoq9qnB1CQ3iynhwTHGgFUuvraHR44w6WfNaVqxPCczLYb9czAtabY8oyueR45yqKdDHts4rPCTsgKUY",
  "key38": "27BhiHbH6pgGgRqUZr2hp3wTpPsgBjbrtVKZDaSteYhDtKoyXZ2KXgPhntdkL2aUfg14WdjKbox217VeakPJFnb6",
  "key39": "4GkVTFsRL33UL155drepQjt557NMzj5YQt7YYSqNeSw37hKzysjpPKYzKZM1aBukz9KPkWpJr8kaRuddwvLPJqXN",
  "key40": "2rbbYKjEUaYRra4RXwNmu6u6hu4S1T3EEbfSF3E6Dk8K6FEWQ1AAZuyy7QCPSDfoqg863zohmvcwnbK2mUbrEae5",
  "key41": "4ATbNumanddgrr7wqBEpqybRJvbnpvLPLZeh2ExanejsFNFMqbU2WZxCNhJupMxyFjtfoCwU5c6WECg88RuVbLvK",
  "key42": "2Po8bAtF8Pdb4GbxqDBaYrzz5w8ePJorfJrzLdrfsKHBievW3s957Fo5vUvkbmdEedsWokuyeHTsdPUEFRyjWCnH",
  "key43": "3f6a3rHNw3aMVSbyKSHYFC1UnYpFXJey54yfTcd2L78F1jckUY1iEAbowjs8wqFYxrFtEYcQPVrpJx2gS6eVTZrm",
  "key44": "2obyb2rJo94zKHyzaLW5C6p4S9KY4ESFDb33D6utzkUp5WSxySADuiBHCvnXySuNGs59C4u5Q3YQd7n8Rr3quXT3",
  "key45": "3tJQ2G7NFzE7V5PrKg7no6TrREDBxKByTnMkLuU5ygi6PvojR87xejCFc1MRWGeFYBAsDQfCvXnNxY3F39x6daUQ",
  "key46": "4v3xmsQmm8pvS2pE9xGKX2efzohd3HtzR7fWQcH6ETQxYvvWYh1GNWovYr2Bssiz95YxyvDrQLMJWKPDffwHud7f",
  "key47": "4zMMNfNpYi2dNhnpXFFCQAXyu2Fbw2aqFiX3jwuh23GaCFjKVnR278M7A2NTFca7Gggyqka1SPEepgzWRyFdPKDM",
  "key48": "3waGUVBPjbF2NDYtpKgAEzgWieApjbAbfr67kNeYryVQQ5BCMAg6frECoyNuoVHnz9VMa7ukAH7MAqobXVJBT232",
  "key49": "35KcR8YvAwVpgqeWf4kFFaEupetWWKxUWyEU8gpPvR3nt9RQWXiYSAKfZvFVGQJ3EGuhY5j4XcbfmVCGHopuHGBo"
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
