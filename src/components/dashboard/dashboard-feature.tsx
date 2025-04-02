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
    "3MdAKoEmGRs1nwBBPCAht176R6E6sTLkKBeLCc4uJwcYoTbJnGaRaf7KWvsx6JShfD7X9wBu7Wtp37zq9HYMHW4e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KDBQaJS349zumk1rtgPGA5cpQr3HY8qGBgCFGmqW5x1Qx5pwzD8qTuEF5PaEQhSGyLfjXeZ5QCqZYE4cUQZdiLe",
  "key1": "3BowooUA38bmXzCVfQ3K5oXzWmh2A7wpJgv7b1RcxNw4dkkCJmB2RDnz7qzJZn1LVrGPw8T65Vreqsc8Yw4omPXA",
  "key2": "5hvSCtg1oCWA5L8LmsAd68dyzH1aK8ee9NfijHgkr6bJDWpuwWk5N9aLWFHF4gqw2XCLVEyt2boC9ms8m1tuwgTf",
  "key3": "4VaAvchc2iFeZr9gxM2QqEdxzj32JSChDvg2rCY7hAC7JaAgm2ScAmrw8DV8Uu1u4C5YT3Zt7pzhhH8NBHozVTye",
  "key4": "5sPwsAN6wwJwfvLiiuqLYgSR5pLQed7kxWw7GeMWKgMd5CATfu87JSci7m568mifsizFbrWJiFnD5G1EjVcMPbK5",
  "key5": "2oPaqjgKj74tEGYjcDSnCii2ciofuNC5unbz9C9nguQtBDYhnWtJ9oZzDkE83SjfsDv12WUTLwBc29X5yRwFF2DW",
  "key6": "KCw3v8KGML9JKsXagp84H4MyMot4ZgmNpumwjHGnJEKVAbiwpaJea4xqwKDZZuzfPzwhoxacoWK3GeEDPk4hs7X",
  "key7": "36UJ4CNg68wYkszzb42r6Ccg5xatLkj94buMARPusqiQqU9d1aauQ4EbrQma82g1DNWJptg3wYPNbdkkpu4XZgt1",
  "key8": "2W4YgQGUWwvyqc3URZvqXUz32o7AhRk923GuzX1DYoNUdVeXszBwAQVL2N1JqiLn3MwMeyhha7ZMrYyo1sK62ghJ",
  "key9": "5V9jWeQSsKPQ4xfdPY7VELmGGREcUEcGzaMUbEbQGbcgjuaEeR1BSmtSfrHQwDp4YvfBtq9Wb7cZpPyY5SF2VBa",
  "key10": "3rqvuh2uGJPEyrmvB7voTVzU4Wjak7aXYgqymGdS4qgVkETGEwYAEiAvHQhk1H894YkmGX1BEgP28VKXsRYBNQJp",
  "key11": "4DS3jtGSLb9jM6EKUBZQY6EWgUEmy4fjQfdDxkXj8fkbHEN8rAhg4keDv2wpUiJ7eDNvXgEk7FQ3G5bvr2NE5fJC",
  "key12": "44FnLfvvDjsksrbjUmDdnXtGr1M5aZe7ReGnukWiHS9m1jHW3hju6XjhTPCeWyUK7e6rDTuRgrh5fLAM65k8LjjR",
  "key13": "LZQjYmcimj8syw7iHd6GqD8ogzedzijQEhrhgufQF4zKRv3NowGJUGL7dD95GexYLaMTBMHVCVX74LuPys6NANT",
  "key14": "MRFN9spva73rAhyHUWhiGSmwkkQne36gXEXELJBT8s25WXD2jbCsHqruB9qXM2V44QKx6A4xDGrN5rLCfhM8Yzg",
  "key15": "2TAm4ejE9MfGbo6sn4M6w7S6ZBE1fJbThyVYp8T1EpAWWeJ2rLW3YLEcMoj6yjXXWLo8pd5ipDtxSEnCTNNexLqD",
  "key16": "3zesudyfHAHdCzptajnEYSmpX1q8u2s1GrBZrd5Eh1hWnHPB9ebwCQbjtg6b6gXiJ1hjE4godHmPMmLFcSr7xP6k",
  "key17": "2G2PP6huzWKEzK3XXcp2wirUGPmcknyVL9AjtmsbvemsYERE2zZsihuHh3uTcythugfAict69dFzpYXXPLrMNBNC",
  "key18": "pfSnKMRNpoUgWzzV7oWRyp7bYe3LS5uMPfSVyafd88QLA4JEarBnpwYNeFdHiTnPGup7dph2a3ignyYa5xMjuVY",
  "key19": "52LVoYEUS3pgRBUT34PJqY2M8ck3P72BpoBuoMSjh3D1fQSPKsLB3SDAttug1vXQPonNGCZhZmBUDkksRSaTbVT4",
  "key20": "37oRhy9eaRoVK3myUjKaFCKj5Erab9EBAALQnp1L6yN28YQGYvaXov7tn1ecuaxJeXQSY1hhHDW3X7Ng6aTsJTdr",
  "key21": "5PtRnwa98kor2nonuofBuPoZgvN2hR9VUeTdQqEchV5smmP3FaJZwVEKeojSsegXTHZgtyKJ7TqsHW7wktdmA7jN",
  "key22": "4QrUKsPr63VMMajfissCLG3YFTg4sQAPzNJcvxMdGV43PmNHGTKmMzVEZjFKASSzDDEoHTkBpoPTENQ2ihDveuBB",
  "key23": "R7QS5os5ik2T99ZvgeckntcnF3zYawBYyqXDkNPcy8nQhLg99TNh4KZqPu85YviVJ1THhWFgL9brWgVpFVE4B13",
  "key24": "2h81NDHfukRZot375eSQbZkpEM7U7SGC1YGgjXrm2VHeucjAypUh3Nfg6MPV5fTcZBT685CezFzEP5haDxMovSb9",
  "key25": "3JWUzk4fUR4FYeERP1mkXR2TDye2qVFXemtvPmeXPMZcKJMVF8uyLKRWZHXU8uNidiy6N1uKfcF43WTLz8KT7qSF",
  "key26": "5rws24AaWafdvP5wSsikuFWVQ8rEUYSXDRrMZSsVDuDTHDmnd5MVLJs44xuDpe8aYNJmd7e27if1G6iZNBYfGbnn",
  "key27": "3ZvRfkAPN4ySaChgPEbuqZ2nAVne9bcmJ4rsJZazC1oFbxcDSq31QtTiqAqtXNEatJke5HUTqs4YzC4LzZB1373t",
  "key28": "4GSxNqQE3FPTW7zmzs4GC1cBcXJGvbPkZ8HnC4Pgts2aSiLWdgEdKbawLQhQDPEZv2fnzRNQZTwQtz3MKg8B4bmC",
  "key29": "2igFin3cFShJuMW8aAMRbLPZVZP4tFw12eyeDf8XMrHi6WCzMHjexSJXNjnpH8otHkk7jFL5BuYfPvwhKD29sy7a",
  "key30": "5e8jPq1SaERXFx8tVY2XvgWtnahFYf6Kq75B5JPGTQnVv1KwF2JTgdeJmUfecvGKWHbDQeMQp5WZhwLX2he7itw3",
  "key31": "2AYUxMM5bhBeukTW4KJMDHZ2nRKMhtNUJDbW3arEKJRDz8VkdQ3mLqNv37a1PWizCmjs3BW5c13jv85RpELDcAci",
  "key32": "2FpgsKCKkGWF2zR9Y8DPTvWRsmucfnv5nZBQrg2D2jQQrbgZGHCfyntBEBPiVh9eWX3wxDkbaWpYSvMzvY4rx2SK",
  "key33": "4jRFwEQ2pRhaehZYQ2qEqHbff8NLnxM9ZYp6qzf1c1drdygmQdNabG36bomkUNPx4DDkKQLcPhzvBZ5enRPVHRna",
  "key34": "5ob3Fpk722a442scWWRW13VGtkAg9GmMEq2p2uLEuV7rQQPjWNjgWiV12Kj1hjwtKDEjKGBCtQLWUKQp8uHaS8a6",
  "key35": "3bHuJN6i5WvW6NZBpUiDcXuQunJ5JvmN7SRjdeJYEa4wbkEzrXt3PFxfgduu62QrTTED8wWdo6ZAvH32GwVog9tV",
  "key36": "rdL3JFLpVWpTR7MhwJLvuBk1kP7Z2QCy5s56fHKZp489MkdtPzniBD2n8m1PxmrsMRySALKJvYjxa9gMi1tCo1U",
  "key37": "5yvsFhVTbTCxU4ocqoLHut4ZbGRWFJsyQXy4LtT6uPwKHMDx9HeE35kF7qRYzW3DGHtWifzxbHEahkWZpHSDWpMQ",
  "key38": "21P5eziBgVFXaVsbkX5NJAk56ufeFP79uBhx77QXmbhezCE294bDLc7nb2dsivNtAPh49VfMJkThTn1pPyBBK9M1",
  "key39": "q7xbFrmWZf76etUt3z9zRGQxrw4nb7H9edr5b81CsfAHyqHD79pngGivt8rqnXpeWM6LNCpH5CSS1YAZEJKtHeu",
  "key40": "2QDEZQq4K986sdX8U74EYkkmpicuR1CgQC87actX5rY9s33yGmSDUibQd7SQUdonW3LsYBKY6LAVi4gbhKzAuDq1",
  "key41": "2ZbW3uQemShGM8LrBxiwz2RpCsx5JBwmBiz5dSoTjreoZ2uuSPmz8GGSqbujJ9QcKbL1PDChsyddcsbLBdzE2vNh",
  "key42": "BcFqRt9z3aNRJWyh6Rw3H6yd8EXdyrPjtGwYz46GAAgTtK4sNRaJYBsxQywJGjigS7coyV3KVEiBZyKtjcumpfL",
  "key43": "42yaGgkZjaXk4HKoe3LLGm6RkSUWw6LRU5yWFUUQ2E3WDAvaboC1QUjsqEqbmzpidbDUsK8Smu5CbQsuifuFaQqP",
  "key44": "6DURMWhtYywzKtxRRU4aznj7k7cCAsT6ALsfEsnfeMwE8drgFb1VNqoSmTntoaWVyymU82utgskk3LRefYArGJr",
  "key45": "5XWyMjTCbb5RAkYXNM3qb8nqBZxTkGatCktHPZZotwKqgj8eMebmtzto8CogvWKbk8kedqiPMp7WnfUUcr7tcgJ6",
  "key46": "4QKkpjCoKNEdhT6y4rFuUAduxtN4w4goGUmtnU4Z8WgrhpJovSUnvXv7JTG2nndnP1GazrhYKRm9vRW3rnjYAi6"
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
