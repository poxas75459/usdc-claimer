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
    "2hzi3o2HTJkMszSSVBZGpz9aiT41Wj14YjbB1rKzRNcVVdMSyXPnANqobcTNvjSMYf8ctezXM5e9chxJmbK3DkyK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SWtVpVXcP1PbvcNxXy7qvFY2yUrtLQM2aJG5XsDXgcZTz2Mtob1esU5MCCQ19ezunbq1ax2N1nh3YxEKNd81zM7",
  "key1": "2fsbNRbe6i6sosAPHVp4n1HHzexL1mobcg7sS7VNBF69vMDDSzneo1Gy4aRMMz58dL4wqnPZv9eg7Nes8PRvG5hn",
  "key2": "3TfJ16ASNPdp33RMxZ7cW4nLF5axdu2ibDjJRrQrFTtNNNcR4Ps4A5khZAV8A2xan87x78s2i9A9vzzdYCdcUJup",
  "key3": "fojyz3udchGEELsamiwNuDLDDrtyuXZyqTm1JRp5ZjiZeVH944cEX1NTuotWXZXUaXbvS4ztGnaXYfA5PGJ7wes",
  "key4": "2Mh36EDEmrphmxYiFT2WYKKAx3d86LsiPs2QQAwwJ7HdmchA9kXDRmUhHGxqQAoinZgTKsUQJTTRVDaMur8zWZfM",
  "key5": "644bN3RP9LrnCPRMHQwjNQ8Hkz5WujDs73CxY7eKiuTqJSz6LJGCJyxGoUAsDpvMZp5H43SEZW7KYrUgpM12SiQE",
  "key6": "5Fd5jYpEhKxPixvSmzdmfAsC7CwZjRCD3F6NFYA5F4JCTDB2f9tiSQyeSst37C5NXYqoY6smSqEHHfMrKUkt7XF5",
  "key7": "52zC5ST6D1bmfRkTPvkvSj31HcfhykwnXfphJUaHmUXFKimmbfiENe8Y4HBVBWer39BCgiAhGmaqAjWedsjwjyK4",
  "key8": "2xMGsQQxHbWvJssfqwf2ajd6kz7zGLEVy6sTLyDfw9xiYY5zigvWMiBr8oo8v6Woo52ajCJHTh7jAkmJ7Q2fPmq4",
  "key9": "4RiJD2AFTpUKQ9jqYfkYei3uJ6WFe7Rh46HScu7fJUu8MVSN4fdCEN4Shpmh1dGdkbFnvFFWScxMhEGJRtpY4J6n",
  "key10": "3rFD7LD1piQJvAcKk94jgoFdTYWc6HwcKmFU6CNmrxBKXvAKUPSqNrto4JjTkxsH7ngY5kXeuzDGsSHGxjBtnRoJ",
  "key11": "2qctAuk8rgVXvHVUijdPricmXKUikUSUNSw5hH46FZoqC3q7Q2hHoVCSjQPK9HJ9oKaRSyTuuxyx632yG73Krq8Y",
  "key12": "2z54iFD2H8WVFSjn6MRJuyYqisHBSWCfgQkPX5k7Xm6d9JtDXdgNVTAieXepQK2nLfXHyh6RwuChvdAcikogvR8",
  "key13": "127zQj3w9trSrtXADy2UUibTTzq8DE8boGtF7d9KdnauXUuqT9igHrWpTM3tARFT8xtJL35kmRwxrSXn57LP19u4",
  "key14": "3idLAKe9kcbXjA1c934JRALJXwqUV1WaS7QFojuToHDVuz7KMZJ81ypxSDf1fNUyxydCbPMPyNmR8C6xE5uGWY4k",
  "key15": "4MPMa4KpUiAaTZJkEjftAgyY17wEvAwXbTTuU8s9i65MVyEHic1EX7iL2N2anoTt8NH7XPVh5B3YEDxnyp3AYmN1",
  "key16": "SJSB4mbm5emV2eHt9BuKSa7RwuAgZxpt7iUxtXLqsAWVB4yWmQQa2ePiP81wGuiWE8kWYNWoQMR9W3MNJhTmKJj",
  "key17": "5TQRYKeq4rNbp8WRnUBiGi8Mjhtar4MaiYuYszExjVMKYYFzpHePcuffn1dvh9gwS5RjuX3yBSuG2ohaFZsJxQMf",
  "key18": "3QLa6BgXrvJjY7zGx1BrcjeZ67wCJtXEWaZNeoS3kDmi1YDrM7AP8Sy6tw3ua17PbEdENd7XTXzj2jzqhXbqE2f1",
  "key19": "2783UmQqTdNWhu52NwdLowXxCc7McxAnXH6qr8T6VaSeLBcq3FieF79LL2hrZvmzdWRhM4qqMLPTMT6KiE8PRDkM",
  "key20": "2Ne2x6ZcPqMeAD7eoCZre1t2F266FB6ioFnpCSycFDimXcSuyLf5xHXYdJbbrLvohg7GG7Qq3fYjizoQiMRZbsbB",
  "key21": "fzNzozjjS9Z5GvTXhwPjitewthCCmZUYgrDDiyFJEXJwPDUmyKPEPtjvXnBpsKNeNkF4ppK47a2D5uKmHTyVipM",
  "key22": "46eWbnfbepzeSa38wWGakB9mxrqk3vxBnNCCsbk6i69VRtwFb7HLRQVxVG9XoXLs8i5zGPHhtWBBEvLVBznAQ7Tm",
  "key23": "JQoQtv1k25zuGwSXSHC8AVHuuiU1C4e7w1aUKpCGzaJLnuN2RWJ3UNtt8goNVppgVvXgbk9f6UmyPV7dbTzymSN",
  "key24": "2rZKUUWF6Bc3V6LgbNjiu65vTwovA94oSovXeptqSWPHmkHTouoSFYbpP144QomnnstkZZCdMDiG4x2Sh9KGJyFd",
  "key25": "ryqKL7FiW6Zy3hUJkQEYKv2abXzB67m5r6F7c8o9FYAiLi3o59zyT2VYdYyt3nDi6LQuEjFU9TUNmLLhTAr3d18",
  "key26": "4eaok3qRhVpWpf1BcodQYQBMDLzX1fm1ymwfy1ppaWoRaDcKZKeAnh2ex5moH2Ut2R75yXXcE6RHhnUHNcLWBe9R",
  "key27": "5vMJJnoAnQGoTrz5DkZdDuScCBmLprWqbXmspkEi78u1S3QWeNdm7arxtfFp4Gu71AbjVYiwHFpQBPJyikJ3AvtV",
  "key28": "2jXetz2ZEQxkcouu2EN8sM8iRxPS96NMrHpFQBmcRKuC414jMpZKQ5nBSHY5Bzrv6CM5BMnqHzzfvJZxSqbjMPGg",
  "key29": "376j6CsXdQpbDsgsjUcFYsUzXjcCVoM1EktZHvHxHbRnTnyJuNa4ZwjqF76fYCxpxKFyxGATRabMWdxZhbZVE2Ta",
  "key30": "5ZopUzu4csZSgFMhzRMKZZjFEcRnryxomvEDUNM7yZy4wJpB93fytjUJxcgoqtZAHXcBrJRiCedez6ekr5TFBrBn",
  "key31": "2CA1CvvRzE1iRdTadhC181QYGKoLm7MpH65S6byW8b2Y8gth4j9sXM3TcWqpJe37gz3EbXuRRcgcWYdN2AGyXHjQ",
  "key32": "4SUMCTy4raTkJV1YRHMW57JwLTEdALC6kBCj53CNMpX7aThDEboJEGChenDZ8qzSM7prMJqHNwdryie5WaBemapt",
  "key33": "2TKhpKNioZnPAYWYk6MKCCTiCD1ayeT3nAFteBz7zFfYpw9fgUyy8H1MRqvhMdhh6Kdfj7geHLBUcLxabvMtHk5Y",
  "key34": "3M3HhWh7ic1w6dKdLYHTU8aNFjNs1ahGwBMSyk9YBcgUiTGgF64F25pxqVthFHYRk9WbvHTh7wo5dhAJudR9Jn5N",
  "key35": "3JuL5cEb3DpQP7rWnryri1PGgq5qbNSTs1J6VuEodjbrzt1KfERFENjMosA24EKkt2KEfYbz8k3KJuRxQqV19Jag",
  "key36": "Fb3CbNiszds1XZbKfG3oqZ9EmhN9VHTzFL8oX56FaNQAatotWCpBBCBTj88tyQGbq1edm8ssWKBMKpY1hAM2BS9",
  "key37": "2CPPu41LkJ6rdaeTXZ6zSrhhYMHSrRZ91WHPzP8JsogtrqiwGQgZJWnDdLzW6p9CsPvRrCQHLWsGX8VBvr6EiJN2",
  "key38": "67gatUYgRjVYCDi2U4X8m2GGd5BKqCAtvmpaAvJzvBvpDqPxwtJm9kqE7zFgZnKnh61EKFFAcVJzVmaG7uDhcsC7",
  "key39": "3WtQCp9NYqkhwYAsUH2Qmn3NHNddiKjezn3p34DVuzwkKpGb2YMcRg1pMLVFcGu7Hc6SpQVodTGZmrGEvo7KxrZK",
  "key40": "2eBYK1o1kGnAKHeFbAF9nXbPJiF4XoB54zGWnRWdAJWRfyaotUinXZZGcsbaDXLKWihJZqmzFtvfgg4LhTk9JYtA",
  "key41": "4Whmt9ezPHrkhrj6A7msSBfPU7D4rxCtZcjVS6DghnYD4v9dgmDqHuujBXw3TBSRA4RngJ9YYS4TAmiGoij89zWH",
  "key42": "3eKZdw2HgsBzSkVbGgNj7f1QmajU2gHAoZ27LiqcNyDTRA5zrnDEjNpdrCQQ3p2up3KovM7pamrmkwAAkGsrpb3x"
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
