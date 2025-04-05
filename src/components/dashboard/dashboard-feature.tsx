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
    "3223bx63zHsYGcf5yJ84akxnEiBJcz9727rTL3PjEhg6iFpWKiw1zWw2bLhtECvCaFvHjZbcxFWp1e1sb57K2M9r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54ak7u3aMcQBufm6XMm1aYfqFNwirmLLBzfHuqjDxya9RSzb4Fgid8REhE6QSvceVX3rkpkuCx5CMyBGd1SPYSxK",
  "key1": "4i8548LqHhQsDCKgvJyDySvH23nfp5Ggedz2Xk1sKJBrjAc4QQY9h9spu4Be1Kbfd9Sm6M7uxaTs5pT1Cx6NAvnz",
  "key2": "41KUjZ46sovQnPVMd3BzuZJjLb41xCfDnWrNDiPLHnW5PUqiFH6ZNUfJVwQBnN1Mub2wpsR45GTb1kQz5fxnja8m",
  "key3": "xo4UuKLvZWYcBXEo3uTtCFxUoeN5Tqg16p8HQcyD2SfbAq6PiRBFZxMvQk43zKXeCMgxH6Hqb5iLXSuDQYCDs9z",
  "key4": "3Af3s3T8vtnhfnPgqmJ8Wb2cBZSTmgr7NW29c8qHA9WE4J5YtEkvQDXTqidKNmdf1k2TXYXrvxkbvenczbHXezJA",
  "key5": "5eLo3kJm2menafGWn4SPPgL8qrefbtvi8GDcQfdkT94PS9xiHz3UZ2DfTpjEM6g2AXE7ZvuqH69TPkeY95UM5dRd",
  "key6": "3UGDgL3tyfg5onciUd2C4dfGJv7TmEvgd2bTTvvPN7wNLYhHwhEL3ZNHpydytKog8hKNS1qzr9ZnPet2ThqSVRcC",
  "key7": "45jNPf11umpAXN1hTwVy7HyT142PbEbqya79EPG5BHoG1uxpFZpshdvcTcQZeQJekZsskWeLpeEZoJKFEYXABUPm",
  "key8": "2GVv17ah7ajT3EVBDeMVCivRJx3ehgefW6UgYyEeQcp6xMY1bjngHzoCW1t6LBVvaZKWpCepzMWbdnsJ8aqZdkup",
  "key9": "3Xxo4jHmyz63nSSrZKwGRxDw7S92E7uXEiiDM4d3PtmdwHCKetju4N2rsBs1mG676atDrWxNApXtiCHngfxk7XP9",
  "key10": "3rJYPygTLm3AGySHM7Bh3rDKMwQ1GY8qnYvxakSJcZSEFkEDHk7BvFhNTUfGuXkmzEqkBuqV1sK5yPb563cNyyJo",
  "key11": "4ZBfxhf4ehuAgMQqwTstEPv9fz91m8JRjGpURqutyn7rarF7NbPGoZXu3QwF7TrB45BdocX1A1heoy1ZqMsenJje",
  "key12": "5HEiurtHphBYSugN2PxVdsZMHzxxrRE8hKLVrJuSGk3Cnu1GN1EaDuQEYNatdSMFzY3ZsV9AJbSNH7uRZfP1jNzn",
  "key13": "pc4nkhP19ijbvBEjaJ7yTbF83MrtaTES3m73jigVUqDpc9UVonnjLT3RJHQayZguoofXwCDgUPCicMScaYVQTQq",
  "key14": "4c4cdeSrvmfLZ8URgDB7BRraezREwpL18zbxY5nJZjDGHnFQLHDurpthfjPWo8fkH1gFhgJBxVP4oGdgVyXejUgc",
  "key15": "59zMekHWMCrRMwVCESkqDuS5Vx5QkLRkkSjndwknxuiZD6FmTNssXZ6ZoXV8VYgQMuXGbqPCNj7g1nbKCgrbEH2m",
  "key16": "2mHiue7cT85LyymQTtz7yzG4XFmy1EmKVbYjQpBYwGtFYkFnkEsfSJwDGfDaDbJ51pW8FJ1KWZPhrRDqaqMBxB8i",
  "key17": "5hpiJbQtMk7VeHKTvQRUXhzhVcXExCM4uyez8PDFF1jkfEZy8BrVRKcxUkQwn5wQJmyDrXHjmyq6sPfxP5iQM3He",
  "key18": "49Wcn2tmywkMTkaujMjVRmUS7V6951uTW2kdoQTJW7ot1YuneYnHBm7PHQFAmvjbSgzXfpH2Bfqn53a8fKB4Myoc",
  "key19": "4yPjcjvRUoGzLXJiucAPAsnfJazXTYEBXVENxFrDcQKcc31vqjLzMAywquc47Epz73mQHiVAEBcScHJxLPTsVPpG",
  "key20": "3Rztbhh41JfJDvvnRqzRGFC1ddo71DkKByMApTZcSchVoyCirC5vDCnz94SkquJwSU5TkgBQ1aTpkR77eNPWpYa9",
  "key21": "A3K2EzMr6t1nAdDVbBmFLzy5axrGdBVLymUup97bVizHZhHk15Vj9E6P7G5ro4zmrdUDDHKaQjxoJ84yTZ4fvmG",
  "key22": "2u9nW3h1FAbb8Tk9t8jGokFY1VcroGuxMued3Nak25nHpgQMi4Az4Wn3BMjruxAHiv1ZJEr52LKawJa3YyCvK2h1",
  "key23": "5Rdt4BFs95wSJU24iT81sBvmp4ASvae8YxC6ABcBkhfs42yDdujhgNVW5yqgXnURxaisYJQHLCgAeduXy9AFGLcR",
  "key24": "bc715bE7bfYiLJBxo2G1HPe1pxjb2qZsTDxuihviCkHb2co36NcyGL8RgtubmWURD2z8ZpU5LMugbt3LEn18er4",
  "key25": "3gbVypHmLmhFgf89K2ymAgJpgf5HsDstdyPtu1x58KyiozvdeieX36JCjsmCaBEqZbLobJvPCSmFXxTTNnXwGVUi",
  "key26": "4KCXQsicr7kDXyp4psaQdFKPnUoPTB8M9YwsoNpuTymkRyuX9zrb34cjSEhmMfYQEx9B5G6s4AYmfpDVFFKYARy7",
  "key27": "32BRStU2jkVxRoeZFVPbrr8cYK31m5zAcVuSAqVsc6W98RquU26kbAugZTLMAAFgaxm6KagdoPtv6dbE4Mm7hJ9k",
  "key28": "4WZ5uTRo78Mm6YE9xq7gfhhPJJCDhqeh4Wk2fcBSCSBC9rDcmHANbV4BkHsPhRv1odyna5e3JNTabebYymVDP56p",
  "key29": "4nSput5t1Vk1sG4NVsLV5XazLm767MsgqYipPj4chP8EtBz8hQ33D5FDdqGPb2nX2iJAjgD9DqaGBSgbgK97e8hT",
  "key30": "2i7wE3z2oZyg8VaKJpdKWzqm9hpfLFZacNL975atSwNXgvoWw9BbXdWqAXchcf1YP33y75WGR7vjqxTcLXKfk9Qe",
  "key31": "3uhEDowjjwWaimL5mwWiBBJG1ZNNyRQMo5jzDYsev9YmvMfEJCETBBzw5Q9zQoUUebsodCTVbGdXYRdkudTiVduZ",
  "key32": "wx7kMC3vAPRKDvssHKTfrJKxeAnmeFxCXa3p7a36KJ5LjWD6doXAFshGVA4z1Hx3CwvHoW4sCbuk4cmBhBKwAjb",
  "key33": "5YzvP3w32yvCAZWpjSX7CHVoEX9VysikF6Sq3VrMngDdWKLMXAro3efDNWZW5QLrjPa8hEpnPDQjF7R7QX5e8WGS",
  "key34": "T7mbwLwdFTnJkdogK477UgrnchhnWKcoTkjwFtzRNFRRbrAku6NTcqCWxi8GwUyxpKbYL89XYCH2FxLz8n4wdG6",
  "key35": "4CNkhK4XH8fZTkBS4t3gjMuMsipGzewfYRAyfPM13cNECwwsUjVGCjXFRSstJjQCPNiThefCbb3WymaodDa93HZW",
  "key36": "Nmmkp1xi8DSkQgJMc9eYvXM7FR53uJByBUjzUbeGwJCKLKuxD1RxEircpuufxcJYnFqeAxYQpEh3uV1BZk7hh3x",
  "key37": "2Fvt72x5hqaY23ksCYBoSdWzcMPMyGWtRWVHxQXmR4bW77A2NF3XtvqWD88WpWnQDSW6CwLZdnp6oKTEBAhNyZPu",
  "key38": "5RswLkhvticrzBvBZdXqKAgG8UkW2biC22JpfDk6qWH22Y7SjwSCYBSXW17WhiUYXVizGp1GjH13Zs2ZFSK1MhLb",
  "key39": "449QV2d1zkP2KJh7R2TP6c3M78nyeJyuLe9zZQfjg2PNPRGzwjYHtXE4mDVvux9jmu7xNaWUUA5NndztZbMpivqw",
  "key40": "3BairZ1aPyPKGazA2ru6KDREXFGuariRnVAZpHzNQkwwuP3b1iYFT5eBSaU9wxZdoZw8ZGb57RdxA8i556aZPLj7",
  "key41": "3E8FuEqBSb3gRbtKTZJJgnanYg5EZNZBMEh7NJiWDVSxNMdWgHjv8pZi8ZT79MkQt3pUCgSQHVugNFRVPCL3VNZE",
  "key42": "GjtiBXUxMCBfMrHC9677uZTfjAeW7bQZGLAtGGa7mkQCobvtZn91wPXyXqxQCcUwtsbV4cBqopXhNABjsC21UXV",
  "key43": "2mBnKdtvy47hKdJF3MFkC5mWxxNvb6Vsis9rDaduXXhYVgnZtsGzBfkrHBtMdzPy4diMPzUnmbdQznx4Ekbzzh9c",
  "key44": "XvSCR6td7q32J8uP61L8rDMZ9ZuoBMYm7chfE8tSp7b8vVFiegsMrRSJF7Gr7eY4vAsTauxP4QUzaZRbvm2SorE",
  "key45": "5B49Hu2F1wG3ha8mb2ewEKezd48bSTTPjtgYM4pJUjai19HPGfiUSKRY1uVnXtFRrXddMXay3CRHdLgvU7RgH5FN",
  "key46": "313vmBAM2Qzk1VCfjDto2v9dFXBX7SJoDMauEUDgw1YquGBezvYGTuqhJ1baEZeir5XfvPQezyxjKbe5NJfF8YzE",
  "key47": "2m2Wa8hsHMiDENZVBqQuydFjAWURiuT364mCbiskPuNca8pQPihvBVRKPWDDgfofE8Hj3pXw8CyCumnFoZ2oFCLL"
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
