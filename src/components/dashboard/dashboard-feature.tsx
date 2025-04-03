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
    "3xvhHxsvNJzaz2cwBhVn7kTs3XxfKTQ9wA5WQQSax52Exj6Kgm61NX9aQgxK5XmgBmkX2CP8V5HsYbCXgz25ovZk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QkDLvjGw2mj73XBBP8jiCRTAVBfCQCGu547iBBVrXRAyBgq32ExPn85GVLubHGbBxBBxre5AKSpaLKMnfbiGXRM",
  "key1": "2ph8E3gf83nUbXtVUNqKh7HuNuw7szBTGZzre5hFu3hkKguhxSFwyR89bZj3E9YBrhBD3JmkuVNZjuNeKLQZCzPu",
  "key2": "3SQkRyBKxA8Rg7KBjRv854QkUz6ekq92faorRPnLZCSqZAq877HAoLtXjawdnAdKj7ULKwNV8a4sdaJY3PcXhDvc",
  "key3": "3CN4uiiHvbU8aqnUMz2DkpnANhqr4EQjgccQb6SSL3gHHjqwDM8FFfRS5dmQw1AkqYjcZcBJ1tvxjesdJo9AGVQV",
  "key4": "3Mw68XWLqFDnuAdE5i8tcvE8psNm9uXYKuUn4vjJsyrM5tmbzkAEviatvab12HaTF68HoieFoHa8gKpB1fixQWs",
  "key5": "4wJqLhpgMCREUAY2VqiGsR3tsFdxkjypN9DcQhJ2JtAbFy6UAcTWXV67fHymKGi5s4QNwiwrp1K4pS63KorDSemv",
  "key6": "Jn6ZEccKiPBirAUYJ8d6KT5Q9SjU6KLN5QUYup5TwP3zaacqRZos73KcS4aN8v3bBThRoddjZK547ffuB1zZbyy",
  "key7": "kDdFE2gC9PVtSBzY1QxJAEroEmiqDKBXW5SLA766G4MV4z2bojHbRUo3utUjtKTdfapM26VSLMRcZYvLKtgr8YU",
  "key8": "sFNGF1mJj2uRbtdbw4wNMX9K5EgA2ZNFVdoJdUWUGxJSeWPet22CGJAQEJLW6yctXX5sCHuxdkdiQRMrbyn7L6A",
  "key9": "UhGXWCgdwyz2qzr2jfBnmuSD6KaCn6SJHTgFN2qnsLxhX6JQ157iFB3GnnDxRafgzVq7Lyxfk1iAsWHadNx8veh",
  "key10": "3mcmjCG4QbYZdnJpR3kPCKYhw6pa91pTo2PvVHBW6CL7cnRXjhsgZ7ujs7gsUj7B7TbUMVjQXpF6bNnLjAXiCA38",
  "key11": "uqdenFqZnd8355tRonBuKtvQyG19C4BsWfJYDbW4abrYRBgfmJPiUw99SS2sywtPSZet5MDtQPZRXkpSNKa8oca",
  "key12": "33St6u8Xr4aYGgNw4dcy3zWPtMEPF2cdoXFETv5Qy7w8UpNuumDoUDXtt9pE1psfyFHYvXoLGBS1AiGT3LjSUqTh",
  "key13": "3rnUzUpStRLKsxtKp5Xtgd2MncTnAwPFCz5dsW2j8atZXJCA5p3Rn93CHWojgBYUb3bfM7Up79RHBw4efhHJviDf",
  "key14": "4RQHSEjXYRJGfabbhF5sxLfZdpfGuRpf4cDNUk5fhAtU5QqbTKGR2c2bArPjnqWXKhCX2vf9RERakXrnSVQiQ2nP",
  "key15": "4maSmdtpLMhj74d4GjHyY3NCg4x5L8uus4HBRr5oY25Ds6E4EhgSq5765Hm7HS6Q8RiWXmnJmnkVsYmuxZ8UnZKT",
  "key16": "5oV7hvmvTwBgp5F1ZHwPktMywRXbWetVdgsZuWAsLocH8dak5M3E8fLjURTebhFwFsDPRhRmsukKKNYzP98k4RN7",
  "key17": "4vg4pEn6Vetkm1cwxUPJbpGF8j71zqLdLWCDPTTvAVhBSFyBfnbnzPHZ6T4cC15wK5yDtCBvasapxTTNSRzRHvV9",
  "key18": "2vnEB6rTeJxJmyseFeW2LSTDMSFbp86b9QtYaXNRytiFkgbR9258v2q5poGkGGVbnEHKzcAxjYSUh6UDa754Z1Vb",
  "key19": "4wjTrj4TwaiUWyHc4oVR9chXmZysq3vMLynnoKo8cxtS56a8u4mGRjSc5ARjynvNywyD4kJveWpu1kGHF7ioSivp",
  "key20": "5Ao47V5tA3Pugg7FzPLgYVFmn26QTKXjHB13ovgGmY6obTkxoL3rqkBGKL3KKUbJWnWXrbQQWx8ZqGocwnSq6f9e",
  "key21": "4PbzhVaUe8P9KVxtE9rRa8nTkrjboPcwzhjn9RyUqA9FQjNedwhFinrjKyDNb7NhM5VGr1vN9NYF2t34E9PKd8KA",
  "key22": "5Zath9cwvJ9tCeWqvY1jfhX1hNfwkXtFks9icsegYYqoK5yjxqttXCy5KQKHPrpbSj4UV49ciyenvxinFqYH8Tb2",
  "key23": "5FU2imgtXHcd6Y1gcLGETgLUkgddYMpxKx99Mv9nbqPZ4hhrQaNQZt2966zBmEzf1St1f6XCEijz74peVE376EgN",
  "key24": "3o3ZmrTef1r2qRrjVviXJVphe8c5pJNGsYKNxhk5Qh7Pd49Z4mUvbbUGBpC9GPaVEJFiDqJCpzSTz9HkG9niBQ1P",
  "key25": "P1BSqPmaSLNnGepx9k28EfDK4hfnvM51MRG1fbY3ybi9x7ENgDPmHkfLxTfyD8cPMZ3zaDBg1mGdvhJ6EvbpNbB",
  "key26": "33LoyAZo23vh6ksTsGbn5Pap3Q75D7eq5asUyq5CThRC7mRdy8esW2wEwW58XCjkghFccGfbDY85FTAGd6XfixEK",
  "key27": "44DU57wEhGYAvtdFyHn6nes2nZegM6GqsnvZWi3rCqZrKzHYYkPf6fBrxgfemjEZwuNUQSFcK7nyk91szjFULDQx",
  "key28": "vLen5WwQen2Un7dFHriyvF4dmWRQmvLfc87d3fc9R6zDUndMoR1QC1DfPN5zUMq1NbZcBpUUqojFoPezEzFwrqz",
  "key29": "4tjd4z4Rc3vHjekV8ND46AWKjEHFfAceQWP4japdiYF9QcE7pq2Symf7Yjdrce9cV53xv3n1MQFEYjcvBzM6Ervh",
  "key30": "373TapAgZUYfC5DGu5fMAtUb7dZW7zsHdJsCsjzdeV8KgFBHtdSBjgZwsCJE8GdZWqRNy9fN7pa3DTLYw1up6Z2h",
  "key31": "5TiUPYGt4w6BbpkrK3CpVy6u4VZVao6FErj84kJUqufLkLWNAfj3N3Zz3Qv56pwsCL2jCTbsLFXEpEZfoYNcXXWk",
  "key32": "55guRATCKLDXaVmJQFP2A5w7nHJ37ErGA7VVKgZ4XrKVB6wjxR5227juNBuaoyeEvkFEAgWKJ628TT9T5awe9Mbn",
  "key33": "2rXVU8yQzpA7wB1CHQcn9mJvP7cjGwan5WpVGmFFkHzMUCq1bYS39eDmyhaYcAqwzooKCASDVFdeBapfKXq4uogb",
  "key34": "3tkcfSkbp4jBCEYXzJRJWZNPxHbtnCMWRNtYzBBhKFubkoCGeQy5NGJSFDytbXQFKm1SFAW1sSHksLowWp7RuJWf",
  "key35": "36XXPv6omr8NcjDAoGTBYqK9pZza8r4RbCkS7YEwFeaBhsMFWQ1rZ2rMKTFHAfDGUhzmFekRNzG5EPoXK3Qe73jS",
  "key36": "2uzLnFSGVtUUuGXNE6FCNHxtdxzxGv5UDGTwhZhhaLPLgH6wnhVGCUoZ4kDx46RM9GTDPAKzJM3bMJFzBy7r8pjt",
  "key37": "h11i955N1Ro7eLKdENYLHb1STg2u7b6ADagEBTYvcuac1XG2sKHCJfMr2oMcWwttLVHBD6u8MjhpmABrwjHqyB8",
  "key38": "yPywiQ6zLjBGKGRNgubiXs1yKL4rkhUkZ9SDZ6UVp19ye3uoquVAfXhAD9VPPMwiGZgFrycAjqnX4MEekZBywZm",
  "key39": "2VXHRT4AzKn4iAy6JVgrAH73NqoGoVnc9U1RAvRgYn4XBJ57dRsDAaKoJNT9iRutzkjj9LV469DNhJia3KxCBn7t",
  "key40": "4nD8Qv1hV6KjUL4gbFAN92TK62aEY6nZeYv1Ae8a4jkNNu1zNj7Fqrs7CPXsPV3mPtoKnrZCfALLEnq5zxcxfAcr",
  "key41": "EN9nZCWYBxFWXzQy6VJzXMQMuPujELhpxBEYXek5UNJspFqb4EfuGDfjnzkbR6MEnmFtFcjyLhvcnS3dWg4qugN",
  "key42": "4SekhqDt3SzQ42T9D6M23R1wtKwdEyv4KUStTSW1m3pkKN2iUFxuLPGSJyRPG6HMRxC1LsP82BrXLwDrvT9t45ms",
  "key43": "4ZrYXwUishXpDjDz54KJqkWDYf5hFRewYbmekbwANyg6Wm7nGRxGQWFNhpr6ZLTu3BMtE3WLGcJG7renR8dPkuvT",
  "key44": "4djKHb8GnNZAJ1aiyS3MeYn29Zj8Bu5SPKyL84JCNMV4FB2UYWpwUc8Z6AdXrhxcjQ7AdTY2qeLsTNd1aH4poLcM",
  "key45": "5KNRpu3f3SGKuXXRLQ3NHaf55AfGdJ5dZbj5dUQofwRmW59VnVuxD5WHk6eiF8DtPsScMzVFi44GzsTZQndvyVPD",
  "key46": "3QagAEhmrZycR6oUNzp7ea3d9LV9697r9SHafGNKmztxLoim2JcFfCxoDRjyTzj8cwxQ9GQrMqPSA5kPjqgu437R",
  "key47": "Rrk6edQXbBdZwGoYmqzJeri6htNVpZM4nUcMGtjrG3a93QLi1UgaCJfb3uthDtes3ZPRWxpMFtxy6UeqwUQxW9V",
  "key48": "2V8dzNpRD68JiyAErTVBz47Vc5rNfqPN1BUarRyzfEv3cFe7rEcNDsT9o1mRRYuXna437MYRgwM1cvfhvcxthGqR"
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
