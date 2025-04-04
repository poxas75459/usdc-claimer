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
    "435Ce6XNtKGc3MXbQT6drN6BTZqaDedYJDNwFpqs9WRQtUJEcKDkVdyNWDh9icrVNMdV9V1wj3eee8Qu1UhAPnnZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dJ7ssafnAZ4TCRwxBKwCtD8Z1QE7gfMzdw7xe5ApgWY8mCAMF6YkFs4tn6QWyLa6rYyvoe9QorLAYf1AY3yh7VW",
  "key1": "5yi4xTnfZ5FHhvofvoAtWYzjgkbVtsGbAZgSgdBbErvjsMUjF1biMxrsyfDxVsMVrTeeLVzxdxjAkp1HZF1N8Lge",
  "key2": "65dVJQANQitv6yNFXvSq12BNzGuAreupmupBwnsWmGB6L6YcnP9tAVEwQHQuJv4EXZusBRL6kSbzhqM3F4EN5jst",
  "key3": "5aY5JhiTbyyfHRJ8oEB5WNWB5yaP2QGvVSkNqiNXCRqoVAPYPZA5hkmr18CGAhnY6geJcVQb7MkPFgvYhMXfcCfW",
  "key4": "3xkNwsNtn8mW5c7EMqnoLWB8ruybniNEhgRxbMUtdcmFmoR7mhvVTybCGfQEtTvavvJatwJZGhyK5pnuYPaXMeEN",
  "key5": "27EWVaNWdfh2nCmaWS6fZ81LFc2yZuhy9WMfXJa31PE9f2eHB82rwdHrn1DfDYcWansjgtqAa6tUbkYnzhagb3ro",
  "key6": "3dnf6ZNk9NbThCzJWZXbfQZVK3uUECNj4Va4h5Cjtw2pk4eyWg9aCy1CaYbe8CtkkSDPU1CLoMJY17FjCparFdFX",
  "key7": "WkXR9sP1NEBt1789ZorSaB5VaoRdqEEHbkamweMYxbJpQi2gFYj7NA9RDvXm88spPjQzU6cR69EipNm9cGEq8tk",
  "key8": "51y4u7q3vmsfKWWV4WhfJSG4G63u36heDgMHswQahDJLDKDLVmR5Z6Lu2h68sBb4Kkd5mV6kBqfPMcS1A91rEQY2",
  "key9": "5Xb8L88xJRXooem7cebxQZpvDGpbCpwLCgyyaer8uHg9bDonG246eGG1JMZsXV1cuo1aTvtPUs2s2mMCxbcBdTdt",
  "key10": "5ctNHrY6ToqJFTU4kAnm9xzijPkqrnLLnBUDhWyZR49QVEBVFRiPAuL6j51MPv2audPEjnFXKsMMYVpqjU25h3yZ",
  "key11": "4pjLh6427YcukQw5fqp2n1cWsYjw4BJqEJQkXBqe6tAmeEpMtrzKvVH9muKaZyRnyABnWPK113r49917oejn124Z",
  "key12": "4f7ZB4YJJNzZmchiXUkAJyMxR883MPJ2Awq7PbRse5ShaonH59CDPpUcMV9ZKrUWrrz9pR3oBTmSsc5Wb2LxdxXm",
  "key13": "5kijdBCxrUq8VHM248B7uWNJXEDbeTirGeqApdMHu9mVp3EvWSUe4Ze9NkyN2xZRfnDxC6rDqZdavU3FZs7DmgYP",
  "key14": "5Q6WHc3rzZCmUFVgjUp4t3u3fWfgHSmEWRXs6XqfzJgLGvNCKmWxS9nDRuiQJ9tE8HXXLLf3Xz9rGSVqw37QT3GQ",
  "key15": "5QHv2FcrVYojrwEn4r8VQMPgEppPt6yf4efDQxNykDTbT9UqRY4nwZ2nKGaJEVM7yKuZ7miLdGQozN29AKJaNypc",
  "key16": "2BFFwvwZhrP5kojuwoDWft1Ewt3BnmgwS1FLCeRdLvtWZmBHp9uhhxmWyujdUU7aiSiu4wdmhvXDNqyz7w7iEKVt",
  "key17": "FHb2EuLi3pht2RQtoGgHZFkXpDyPqg5HmBPyK3SwqWGBBujrvzpjjjR4QUutb12qjCBSZygvbxp3pZSQdNuCgzd",
  "key18": "4UXxnPsYrDhGQ8p6xMDkZnnmax2swhdGBdba85uzozsVPocyU4iENyKqLWsduSJvgb6wu9m5APofyK8RFr1htg9X",
  "key19": "3KmVtgCVBsuCCJFFrjQPUShEuuZ8AWg3Yvt9EwHKXb3Vuh9CsVn2fzDShviwdQEQrUKBotwaNZTZMqmjyX7q4XWV",
  "key20": "3uq2jLybzNcsddXnB4FyihWH1bcdpftT9u3BfYet5u3RbLsLxBc4VgcjezzACRMQYitBK1DeZ4v6gH29ZeY2EYAk",
  "key21": "5z4hEXASw8YppovSAqL8ZnV8ZqHjCkeumyv7VwhPYtwprJxyJTdXepmNmDqy7gPzWTsy22cvHmoeGB6eYhiwhbo9",
  "key22": "nd1fLx8k4oSutTyTRQMCgenr2zo8rnzvwndB1bpuJvJEVggFDCXmqLJTLVBqMLxseBhNN75ue3XWXmWbV3PQ5jh",
  "key23": "4v6dkc886gbHJLaNRPQMJCpTg4eh6qB4iRG3caDw9pnRKwpEgPSs7kTpxMm5fxoPtKYehGrvwu2QVXP2XrmFovBr",
  "key24": "3y6s4zGiuYKVBwr5b1qggRGBx6LHECgdNiorV3AvV3YET56FZRPUB9E7yN1VX5m3A3HrcPJqyLeGNjjt3WtZmKY8",
  "key25": "3NgHyQ9TvhwyZAm4mbmYxemBfkqpN6XEHJXASJE7Rex34CdxjzSfseBmtp5ca8YMWCJ9621msiHwMU5rnA9U3ghM",
  "key26": "3wqsTvZnhL2GeG8sSekU5CvABJYXoy1DZBpXvpe2LkkSB8a4vTsnMXJnFKEvmDwG3QW1YoFnbTvgy6MrVyqwhyT5",
  "key27": "2AMWCUSjpb5wWrPH1tBVowEShRATGrtEM2WGwmRvSbYrn7txyu1UrnBMqYSTJpKQPnKGwZeMtXiTYrXjtfbjB9jg",
  "key28": "3sW7GkwTiHWzDDgco6oKx1XewXy6n94rvEFW6SxrQqGj4pXg3futY7tpdUcSzNgNRhGMCy4f9pGdUWBYMswevSUR",
  "key29": "4o8Tg7SUY2Z88HUDQLgaTfVVWnP9RANB2QcC6MjKNHx3KspD2LMeacxGawr3comywoA4VF67ZnpvRnQjPi1HzWQU",
  "key30": "5wtwsMffj83XnPa53ekKgACx1ho2YNXXH4pY8FwdhEkfGmdCphRzPYEpPx8uYWUCV69Td1tr7omnxQCURaM5AnKw",
  "key31": "sZ71TpG2xrgLN8esxCsZZDBXS77otdXsM78mSPQN9hQJp4F3r5YJesqK2SCnyEzAv26jwjorY7g4GDXhiyCkjaK",
  "key32": "2bPUWihzFUE39CjyuuNxm8FT2RrRJSpyjRCgEbXypppsj1HoAC3n1vVZHJWUNNo3pXx84hCtKvGksGyQEbSuNQVc",
  "key33": "37QFWyYrBSYNhEyno1xbLngUtgC7MsYSiX9cwKkrqYF9gGD6S5ab28tkvQ24RdRaPfHM2PugiMa2aH3xQT8mkMzy",
  "key34": "2B8F8bJgNRSK9QcPnpkVhTjrWRfvLYJUseLSbbcctuB5Z21aCHnKRdir6idugF9qEmNVLzUxCoJgcB3NDSW9BLWu",
  "key35": "XCmcHoE7rVM5ZUUAdWaTmM8NAX8G3jvVfG71rZduZU6zctVFmYRC4FUoBkWzUGgs5RD3c7bbNqhxANmvg6wM8jG",
  "key36": "LHQHosBaEfoXqUsX5mfK9d7BREUHhiM8wVk4mqMrzNsdX8QeSoW4vwuSUCK8WFBaDcwTKQbELnhfpNSCVqF9VXj",
  "key37": "5QEjDkFnD6DcZXA7ASm7dWDSgFepX9gCayynJBkxfMsmdFseAvLjjK2qh49oPWjgTCMDLYiuwcBJAQfyhVJgA2Tq",
  "key38": "3h9jgRb6F6mzrjYe61DLNdhbP2Av3C6uNnCHw35SunKH1qVXDs5j5vNbgPtmcxpbd753p9XTdSmpDeFYsyVt5wzW",
  "key39": "34xsDKfmgeGS8BAEVph4Gw18HFgS2LygGcA3YiAXmg7ZjgHDwJGXmQXxoUhkUyKPXV3A1LF1SmzJvCzQAWXEoxCF",
  "key40": "teDyQbGAdXMxvhZfABuTA8YiHZGqEKVEYU7E19Sg46tq67y8yE18bM7nA8u2QQow4GeHL4gpbfZfNinWqMqJygJ",
  "key41": "4wR2AcZk4GpLMT1z4Wow2a7mAYSmXaHVGFmBCrFTQx8EozGQkA6SjvFw2e21ixGjuqa1LUguGddpbQk6z68cefpd",
  "key42": "4xsJ2DEZhtn3bQHi3nTg355imoSBfqx6fq7PhyeXwxahjgdiPHMjwADpG2Pm9foyjrk67HKcWxoG1ghWhK95i819",
  "key43": "4RrHS8tjFj4bVHQMpcxPf2PnkPaa3BAvEAiW9Mr5mtHxiyrWRNG4J5aMVJNEktpSUPRfgujjVXg8CJpxHGMSX1Lk",
  "key44": "4C5dNMzRp1YF4ctBn8Kfa5UC7yezDth84WgiHeReTVhUVB2ZKodM9sNWHgC23DaxtaLB3ZQ2XaamSooDys2gwZu1",
  "key45": "4EhgRgrC5fZuMqxsfcMcjuidichJBH9C8mGirkQvDZovTivDAGGp8niuNRmGuootSDC49gjKyzvWThFs6qApkt2c",
  "key46": "37PFiNGEqw2DLshFWNU3XfGF3QEtoLCiqLpdCMbd7cDPbAzpK2QedTXM5aVfHfiQTeyLAhAnRnh6NJYSTiyGBXLH",
  "key47": "2xJfcC36LSCoeUCkDttb4sKLZY2CF3yAG6YJZ5u3BS3Y2bEXFvjgwSMvH9pUK2qWY3MRZFd72SujKt2QVac8XcMA",
  "key48": "2HW2cr9YVmbSVb2XNPMPrLNE6uxCtn69J2UZpqBcsYkYffjWBmN8zTbX9ugCXzQNhDzzxoW8UgeutF3u8VsoJjML",
  "key49": "NCWahJ61ypjSuZmMrqze1btR13dEvCFqJNLJuAdLEbrdFztjJFhTSn9HVG6ZRsHNsxUXxRLeHdFQQ1uBpP6uwmf"
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
