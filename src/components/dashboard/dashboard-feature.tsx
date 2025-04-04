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
    "5iocZL2W8Wa3JUPyVzVpVmqJDa9Sq9e7C8veBxMhHFUWJ4cE1xmsVuYXCMVqGWH1GkvhNq9aBjZy4YB9E9wM4Tvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHQMa3DNKrHccA5MGG7y9BuuyJdrvA6xCQx1eG6fFGrDmSLS3tykodUW9CA7wjuG5mnZYHcW9bWGyLYXfvB3ouL",
  "key1": "2EwEGA9tAFrTzi7rMvaxSqQutoQmYUMXiCsyEp8DnxN4D5AnkMieK9Wnm62NG7DoHSSaEm1cBFGMgoMgfwzoB2px",
  "key2": "47DYME73JTY1iCaLV4WPN8d5JnSy3P81LtC9V4kbmwj4bPX6x7fG8qSnoESoADczTiXMPygdpeaqDAuAqmjDLSga",
  "key3": "TtBp6BuNVJW8BmvGimgHS1UvdQgyfHTrQnEzKg2nrZX7rq54FonutG1Qf42Yxg86fTSwypiC5ege1mC17XfAtix",
  "key4": "3t8SDrCxetK9XAYPNymkS6RFfaGRbFbA5kqNDHRjYyv85hprMhaNvh8sDt3hYwch1grY34H5FuzL5JTHEqLRzVbJ",
  "key5": "5bwe4Vv2g9x6VGvWk6fK3ZTS2He8J5Np1uLk59szGEBywj35416zDb1cPJpJ6q1ug27xT8fyBZ9iLRLj8mZizreW",
  "key6": "2mcqcMJtPsZQxkU5uqCPaAVEtjPE4b8LXD4pHTuyhq5oXyyE9eSUMK8mJVDdVBUJYRLJPejndLq86BskGsp7kNQj",
  "key7": "55CJiHuaVoQbrC74LLqMrdihjaToKnGjD7uerEhJvzkccW1ctau8SY4MzaGojAAwEHdzx6iqCKGM1A3neHQGGjEc",
  "key8": "3B5JSkpYpCd4CKjVUfV1fZPWnNdoW4hoqV5vkTBJ3Nj8pmg2ThbKKdYsjb4YtqtfDDn784Mp3hGUkghexMGptmMv",
  "key9": "46PLJBncE5prZA6KaAXvc9EnGoDUZSTE4DMv5N4NA5gBwuQttDRjycUGLkwvATGoBJstgdsQAY26gSQno1FHETp1",
  "key10": "4cEQZAJjWRQamhoG5fETad9362AvjFzped5nJbUMiAhxKUMrcfyRwqes34tGf4sZeg4ePvaV7ML4GJsvrNKr4jQA",
  "key11": "29QRJaLzRYN8miv8FaSxAbaQgbb6SfrjCcH6aHVznV7PSkmqjW8WpZ5JkmHnofQ6sw7iszdJ17U7aAnZDtLs4zHX",
  "key12": "2DymsKtbCVmthyYchkpFgijA7Q3bcVum7PuVpRRyGxJXU53FtWnY5Z9Rr81asYvohUb1Vf5z8EdCekeUp2NA8qzc",
  "key13": "4zLuAwEmSPQtRgsvo8DMkXj7W4ryz5F81zGH6v96shjv3CicZX6GzJNbBGEuuCF5kc2TvbUWsM2Hjm4TwKWohizV",
  "key14": "3U29b2LvXDASZyBemm2bZShSdVLyULzjzUfUb18RqXPjYSPxrsCRu65yfcwt3Wctum7ddNahC9Dti57fVoVMAmoJ",
  "key15": "3PGYprG99ZWubquHYkjdVasV1UzkjuUaU39tobmn6Jne3LkRtrCmJg9ubQ5jhunGpLzjUf6NbdR8SL5tAboeYYv8",
  "key16": "4LrfCYmqufjLEwi98SicpQ3p3heZKvrkWnqBXRCudBxhWsyE46JvC6Ztr1ffRdqP6Pigd7J3ZZYakNGpY8zDPvwz",
  "key17": "2Bp6J7N5cyB3j5DLUTskDT1WWhHCixQ2BRwFyxAK5gGFZ66XH17SSmmu8vuactHhodGLGjEbiHUYHSayJybiXkEd",
  "key18": "2n7TbBYkvaBBmcamrUdfiANnGyru4bUfqbaUnRjgizrK38Hw6jsZQQ4fCTF4RJZt2S1QbheQ46XriCJxH8u3wjQs",
  "key19": "5NKuk8gtHqUypMbVxALZV1EAS68KtKHXqkwmTkuFNt9mso5RzQVCBiHojipmF2YD4LT3a2oESDButaPgLfDbtkfn",
  "key20": "4X1H8cYNLYmJjs7gTPy3FPnzEjmRGf8p5sHe4VUdtQ3qyZXZnwQJQ9CgieY1SQfnFmtF6hHp2wXELHvYkZtSjTzi",
  "key21": "iekEgj8R81nbUvbR2nta78Bppixar7HrhiatshGiYvSa6s6LGQzC95cVwAC3XCiwRnT1uJCquo8ZAwjEbgsjyw3",
  "key22": "3QMmjwEXNqF62ZXfCTRhAMjDREmc4WQBPS8Kt6eCRSmrC8aBE6q5MjiqcDMKaCVYwhozBT9xE2g9EswpLExpFDXe",
  "key23": "5SQxHFp5qfXH6EeUZqaKuFb239fzqND1xLdveFKmBhviMiLhSshZe5e3GntTRukdYHn9Ps4isySCZZisoZGXuDNw",
  "key24": "2ZPMpQx76wcUq1bBKrFT27ozfCnKN5EWZbRHWWWzkafkJWpJ4niCf4RSmPvGXDb6eLkwfFBGFkNsBF5Gjwzf8vb6",
  "key25": "64vsam8dGzcAFazsSEqN2CefJT1jSdsbtEJ9uEu8URSz1f5KdCskPh6dANb5qaUQq3PaXrwK44F1hJMGjcpu94FZ",
  "key26": "3SsMmHY7fkNA3qqYm35M8AStC9DTJFF1zkiXCckqFfVJwLtT9S7QaCeGrSDyXAMz3MspnuTnnjy3xtaBk6To3qrs",
  "key27": "5KXrS8YFMecEqAyhsgH18YjMyc2EuUssKL66eDfjhXq2ixKg7KwPABhjZ8zYTsvRPNYTigQmqr6x2JLJeY53prRZ",
  "key28": "2Bmj8MLcj9PMXgW3URW56TyyCKt3iCVN5GoPTVJmg1hHVnhQYrxa7bfV3TnEqZMJgaerMCsaVteA5NQ1fArFhX62",
  "key29": "3ay9aFdq5h1aUBn8FA57HzcFdKs3iXg16qdWTou6Uf2ZmyzQycSMDwZaGhskXJFio1E5SSLySDTWYn4dV6pNMtnQ",
  "key30": "5p4PnDxHFvMKq7FJLeTmMZ1gmYPNGcRpHknt1uiyAjhGyXLZPAdr2EWiyeqY5Wp7eML8wSLvt1fxtyZsye1QwJow",
  "key31": "2koSriu4u2hYDBcAHBqwpNuvYMwgKvk3D4J4PkAyWf4Cd8uCbYGAbMiB29b3EzhFU77e1cekCPJ5QZWyR17U5NfX",
  "key32": "3vTgb8dp3B2M3nC6YjQCTYri5q4iUD4h9U2qF3mPpGBxC7Pb1A8MLe3p8ur1XXK1QyUV5MjZ5b4NQbpPQPqPdyhs",
  "key33": "NvYhsqQwgHSjjVZaFXoLsyymhaa7rX7ZGAhLGf1Yhj1mvZTC6s4NiKPHJSBp58KU7L1Cab2LyJmx3y4rrMtMorW",
  "key34": "5oyU7z95mNoGwZJeTKMEMLW12mSjfnFzt51CkqJUWvynFcApqrDq3vUVBWL1hKVGUsaTWBuyPc482i4Ap1mUH78X",
  "key35": "2RGrJyJm5Tuo36f92BbZysZMMoRieYjKfUGZKoUWC6HHixsEtmUd9fvkXLMR6EiuqzKdYrYuNRFZWsbs2egVzTpf",
  "key36": "3pFjsn4J58kA5GsSpZBmyUwAgrjbk9V9coRwCjn6yTqBciM9BBqDPSeTy9QpPC9qtRxBG6KdXEYhLd5zpXn5qzgk",
  "key37": "52FHWEWc23rn8yggPoNHvsm5tpab9WgrrNY2oSWLc4pTUcbNv9oA9QPjKywT2F3arBVs8QQRrJahPB3n8KPcWsT9",
  "key38": "3HAqWZftVv73Msqn5ik5uKotEKTBCrTisKDbDapjyyGc85WtvBhvVzCtzg6AY31QiUYhcWQJM4zfY6jeKRX3rFw7"
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
