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
    "56sczMyqQ48UUkcftp2DWZXKi8yfag5tYDLuLm1DW1ironDXMwsBcsH1ji8zHf7cF65NumEE7gcJrZEWKhEtuZTN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rPk6Jt9isWozyqJjDyJxfL5d7QBSkr5XkZKVtLJPJzyC2DucEwrCEsNU5rVFwpZfCG362nd1viDjhgALaaXNkRE",
  "key1": "26acKUq9KsQJSn5hgARxz87Sm5ASLgbYd7hga6GuYTv6VwjhLprynnnXryW9Y7FKc88h36mmLvLUkEQuYFP6Tpxp",
  "key2": "2YnWDtFjTyVTubxZ8QfhNuVPP9Di6bm7ffKKm8NCghXNptFbhJD9SzoxXPY1TjpdFwQaTNsV82FFCPFDj91e9Uhr",
  "key3": "4byc8tUD6VKKS7P2x2oCsKFBpoJPPJDwRJsVJVSqrLuarnuHbYMfQxTHmCez5GEqLMmTR37XAi4hqwFLxcQCTQ8y",
  "key4": "3Lhn43c8y8vDUaKVt1HqS5WNpNUXaptJXTaP8AdNwwfcnykGLNqag5ja61ieDDZX1krxjFGQpPH5GScifhAhDDQU",
  "key5": "X3AvFvXA6dyWgnHrpLbUznfx4GK4uTM5mknCGAjAdKJcWj9d6y5ie2Q1tyhmh8DpWyCaXPLDwVL2deNsLv22kiB",
  "key6": "2Lr1jh3EF5SrZPuvSPe4RFmS1GCtaLSXN8FEVhj5AHwsFXwQVswVyjAPLPGQSCfTB4NP1jB17d3iEX2j9Z1Tbk8f",
  "key7": "5nv3urtmDKRMn77owvPnwJpQALqcE5SLMCY3sGyurQSUdBs5wVJUDtL7xJiXL42EosmkVJGn3vKEyerhntQboU1J",
  "key8": "y2xNARbDVh9NCTjVGAcyc86sHWHLzMx6CjtQVxXhTphf9vgpdv9fnih3MiTkckhvGrN4WRwMTgeYjJZEvdXW8pV",
  "key9": "7piw1KVaaa1RN3QFfMjrawEwsHgXEyJ31pzUmmni3MfvA5DoaAN5DkU2fFxzYLPAsGBZFxbRo3yYxFBW1SBoe8y",
  "key10": "5s5Y2YRpr2SsHK87CFJd4bGct4CNs2qjeXnp5pQMkmRmLJfjgiXokCLdUjrQqPKZVG4984vrTJXemqNkeJGXFahB",
  "key11": "5Tud4YYLE1QVRjLefBurwMBkEmunfEpV5wN7dbMuzVtnKjDJ37uDDLjBVuN88hkLHUkb5YjSEBDi3Q2keGSEfi88",
  "key12": "64JtN75vcvgKUbmnN2ni7WuDzbXr3SPp3JpxKCwWG5Tb5EeJCNceHG4vRGs75bVhhoe8FY6aqBLCKayWoipLzskC",
  "key13": "3YJkXxxLnUjBExmK9RN3p2W3tbtZwBaWddvzzgnLm2HXb47piTEAnBSVwbmkNjwY5LCg2MahUmjPmzPojpVkudrY",
  "key14": "5j1Fk11t2e2S3T6Y7E2YmStDNnqdwW5tmjTQqLNdp1YmmaVGZe73LBNaztJjpcP2Kk3Wqy5bFHnS7MReQppZs2fg",
  "key15": "4rtXxsj6A8YR6gwScUYRjsBJeSs2RBpstu2g9hwWuMZgFFfYgaWF69pb45mHt66nV388NiUekh1365t7ie6yB9cd",
  "key16": "5PiQxhDvBV9rCZrKojAkjJziZknAkx2mdJ9pyqtNhhMUhaJ4DTTYbiyc3S83btP82L5vw992s7UP5v61jpeFsFNX",
  "key17": "3yGpojXgAih8VQBFyhudCr4hebZwnT5UE2ZKeVm334UstC6XTCt5Zzpw1s9jpWrsJeN4zp3PqAP8UTpoaMgYvrCB",
  "key18": "3RiTX2Uuinhm2dggD5VjzZnRCxq8xvW3qBYLFbVohcBAV99askhkLQg8A2gQVa64V5atDywdG3yt1SB4AbyeacQM",
  "key19": "3XWmgrbM95Cg1XSjcW8pieYhshFLXLAUmBGxGqhRdQJy16oRKBSP3g21pQ6ZGiGF5BiEpd3xrdfWj63jEVmYwhhH",
  "key20": "3UgsSqyXQ8LY9Wf4Qpw5cNQZ6ybQhqfG71g7LamxYrufsK2LF7zhsZ9CR1kroRfbcJEhm2KKeaP57TwSdoLqkoxi",
  "key21": "R4fEiAZF1ixkDJLoBjb3MzEiaMYBNSuGiDdK4add9Jd5jBjPXAKyDggzhNk2U1a32BE1idedcnJH8hoWDiWnKA9",
  "key22": "3QJNpmuJfZD4PBaFucQebDBNgBv8RAbzARRuRQjhgJHr3YsV25vz5rtu9eurUqdNmtCMfjmms9AWrYM4W5mMfRU9",
  "key23": "2F1fh66ugfQJomdhyC7DMb5WW4e7ZwsvV5BXYpPh9LBtZHWq1qZDVK3yrj1uZs1UHT1Ej7fGB2BQvdZsBEqTzqqT",
  "key24": "4jgNv99iTN3JLbPGhtb6zsUoEeJM6Tmwg9grHYdLwWuWsSzBENL3FQ32teMv49zPmPmfEm5ayiZcGWbYGPq7VisH",
  "key25": "5usQs64AxviFoHJWtbVb5cLjo8pGRkRCmkC1p44nmyRyFKBZM6vp1SDSLvrccTZPgy5uALtkGcWDkVmDSrSozwrC",
  "key26": "56txiberephMEhfc9nT95aQHtjcQrhbheEDH5nG44aqApKEXcJPr61JB29YWsTCztvmma5CCndLXD2mV5Cm7HP2r",
  "key27": "2VxR2TtiLWDg5NC3VoiVTCqnQDqaofkEKasGHLKwrtpFnxuJUyjpwVWX6SPhqkKYNVkRddMU7RqQbCoK2ZBdCdnM",
  "key28": "5dCYw39e2rZsbXu6MjMWBVGJtXmhyrTUwwvjXbA7k8s9SywCqRQDvLYczKqC3Sk9jk4xSqFVgaqgJJXcVaNyMLs6",
  "key29": "3c38nj4xrkfPpPfaTqLbuLK27xrzzvkYUPy3XWp7Ph8MfhTZt8p6491G1cbWijGhoUsWWTa25Ais2o9z4vob1ALf",
  "key30": "2r7SF1DRoEZBtu3ci3QQFZUoo2L8TsjvLuGFXmfBePbA1VirF5FF5VMPjEPqeZ8N8mmxptHf6ew1iZ37JUQ6c4zY",
  "key31": "8TpnqKRANokgEAR1Mu8BCPdn4qQGWrcB8Go2neTmj3cK7v66sKLfUzyFUb9pWPak4xhbWDFvt8BaQ7Sy7epd5Tk",
  "key32": "5UcSrhh43oyxDamnB2vRWewwAaEHjkRzKuXoDx16fsdEZZucUfC9ewbkXwAFCcVr5Qb8Aj94dGnKLPwx6xz5W3bo",
  "key33": "4c8d7osmfLJy2UFKnkHKnn5uVyqiNWTMTbtzp145x57Um3WF9FQcerWan9kb8ViLjNBbxruPAMRcaDCXJ9HyaxiL",
  "key34": "5pjQMkUTyHwbVTe7BLUrgY1Ftohdu7yZEumpVDzhAMjnVNDiVikvGyTxSGBKcjUGgwZDUzBuTjcVYau3uiLiGWUR",
  "key35": "2JFg4NhyUnFoBvwpg9Y2oF2dRGMovaeCTaubn5YdwABpQBwy48DdpESn7cWYUndJRt1Fc54zDHFWKaj1ZgqsV9ZU",
  "key36": "5H5jTjRpGmU4xBS2BeKGt9cdaRpPG2hG424ea1j5UgwKbDqchd44bkuDerVUBMuyME9RvLg3ZfgBJQBxYQiK3ba9",
  "key37": "2DJmu1uM3KjtvAhxK6XBdGhggi9dQ1RBT2BRnXvVZfiJxPSeXzgnQb33FEiiRAGzGiPpHGfEBXwD6JpnTw86FoCq",
  "key38": "5EYzQT6UPNBMpT8rb2wWYjzAUWrPFasUWSCKHonYYiwFZNqgjf9z2og68HNHEUQb6B17DUynTxAsrkGLVSbHXeDx",
  "key39": "4PKmuFnmY3nQBDZmhRrfvwHYUjJfypXXW6YxaPBvRwNvz8EzNWfesXKfYD9snYMkq82dJDgp13ZsAu1fhHK8Gmb6",
  "key40": "33Hbg8pxW3hBri6YiHRMHQJtsueXEDJfcCX4moZj915SA7QYAFrJAJGyb2TVn1vNngehCfCRRdyeD7M6aRqpGYaE",
  "key41": "3PF8wLUe33s7jfrxfiut4ShZ2ioXjgn66eXAc6NXWsVaH3iDznWRSvi7JjXPiPTRv4See6w5DGVzSYhRmcqD6KnD",
  "key42": "3U4bzpktsEmMLUqmrNxGMH4tFiCZf8dwgaoiRtNnyp6AfhbRCoc3vPzsZDRv2bQFePqJQTMeLn4UW9TiapnNRK8f",
  "key43": "571UQDMdc4UDFw7KPnofugD2pkZQVBrhS2KhRM8pQF6Bo3WyXgNmNumqcdQT8mG4aAZMWCykHyugu6Y7nzjtFvoH",
  "key44": "4DXXJigGiyXuSe5Y5stPGZ6ZQgbyPPFKxC3kFSHHeSXqXeagLFm2cYeEi8Zi1NZTi2fNEsNFhsF4HiTeU3gC6CD2",
  "key45": "2TWUJqp5jUGQS73rAp6CpPh27aEaqmnLVF4MMHu27XgcFrPdZgkin3s879fj4LB2aTnSD456KnNkcCQvWiY9yDhh",
  "key46": "XKwVBf5irun9JhHBvApe12cgTUz5A6QwyvU3KUw11TAZZwS9dFA7azMg4D5fo8v9inY6hDMZVGvMpWXimwgrrcJ"
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
