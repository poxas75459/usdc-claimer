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
    "JcrLkXYZBFJXRwwDdJBezLM7ZdwPa4KahJSESNVBQVjWwEkbd1qB2D6jZaej1J7q3hGFF2toSBxSZat9GX7wUqs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tpCmwSiZmK2wHwcHBwgpb8fNZtCDtWdrYttFLvy6ed2nNinViVcbjanEU5GWAdm9rY6t2PbpaKWzB4TgAjBGiCB",
  "key1": "4Vyd4kxqB9psjALWFTri7WUUBfpeq7jLp2NXGs1i7KruVTbMYGBNwKZc3wyVfqoukZjUdc4Gz7usFEoRrnm76CFi",
  "key2": "4DwNiEYN2zLP1hppBjga9KPuwfAW5ivrjnP1pK6vJ1WGWG88YPEJKVJGt1wJkjMt1YNPUN5RYH8wVYVMzhBoRqTd",
  "key3": "21HU33PNRwuNaZGcDcT1PeELN7rT181GJyxD734LvkFWSrqQ6wNqUowAMg9Gi7r3JK662QqPMvW9KuEWXhhK576B",
  "key4": "fwGmPam9H7ZVoVRvUTvhpRgAo3BYNwZVpdnC4JRhwsgtyd1mg6EnpaNUUC2R8zaErNRDdjaS5Jf8vyYKgyqd7Bb",
  "key5": "3Jp8qmRcLWo8k3YvTBrfpXQWrZxikVjCM8FmnVYDnoPtGTfd7u4edm73pU6553dhCa8BiVy9cPmiguUTeiVxYUZR",
  "key6": "4UoYxoVWYy2mBraQPsZqFZrqbD2bf91ZGdwGuEfJ4KcTuHUbJvcTyHBRPiL3JHK9RgRNajQ1hf9Zem8egfz8M63d",
  "key7": "28u3ZdzgfXWBjpoEcFxiaXo2PzgSn9YxmPo4D7s2v7xM364b9KiiJtZSyNL1f3vdq6isxD1o1Gjpr9uu5ygZrJFb",
  "key8": "5FEB2Dh3q5ALx4fthHzfuDxq1sWAXCytF3GbNWM1v3vqzdfojp7TE84nnLPXmZEP7mgXdBNRKGgRytrW6zc1UMBi",
  "key9": "3JdjLH66a9AZ9XcmTwLzQ7w642dQc79FvFLwnWyrFDzcPYGkGx8pfFJpCXJgPbtKjaafVK6e9buqnAGZYSTsRjWW",
  "key10": "53jkxpKd84NiY8F1HPm4buETbiuqc2AZmG4ABAxSJQUBR6nxjT1q7LnLEuUYJG3VjUWiZmQ5xdee7K7rwXUNKd4n",
  "key11": "4ZCVTo599szBo3qD1hTV8VpeAVMi2jHcZJ4pVhtYJJ6cUgK3j1k2fNEZK3eJJ2yRLMJKdHgPcpg2G7Pwy5vebfSH",
  "key12": "wcv718JsVJFyoWG6FeQ8yozQzXvRmmhDhbv11RwmsRNWsQa1jCWH67UvGw5sbFfT7L5v1jcHqHPSB3p48XQtu5a",
  "key13": "5RVuauZEYcyf4uwy8qzJSu9ztTWLiUX8XuGufUyX4Fe2Jb54SCmLgYrnuzeuSAmDvSSpjiqaPuz5EzbjtGS9Y2Ri",
  "key14": "KqW6KFgf3nY1yhpWusZaWMWvAkfjYxwVvHxhzCMaF8ABL7mpLYAFQ9NXVBCncYncY7s1sT6jTcVJE9puUYFMuec",
  "key15": "PzcS91ZvfBmJkEZQeKHbftDjmpqUHyNDXEZB48dy3YuGbpSL4gs9o4WCTSHPa97TFDEvmZoen7E4TxFSsKHNHPD",
  "key16": "4Y3V1AAg9j2dNKeJtyyAJxLiY1DpBjyM59gus756A5aRZebi1AHtNWHT2v5ER9Tm1MxGf7d4E5EkUG1H8sUFZtcj",
  "key17": "2kUTHzzq8aqKmi1VLeexCoyWqDzca9atomZNqo93QhRtZztn2Z5QViCHtPb5cH21Eyxn2fwN6L3Qdfbz8aRrdsHA",
  "key18": "ys8ximc9efNYZMt7quAX9NvVaZ6khxsfVkkAB8rL1DUNpj2iWCEZ1C7jTgEe1fFy4opyuhSDhhQ6rWxn8HgBnuH",
  "key19": "3SnwpHaF5pJ5ofNA8qpyzMFyHfCHgHcMQZA3b83atTBuG98qV8q8euoeb3axGZqHCGKN1vvYs9BvG81AfzCpoXSM",
  "key20": "4uqpornV4iiWEsawTmNm1ZgLUb7aDmFZcs2YXYJvHAFKkwsckrLKS6edueou2ewDhNgwsWu4U7kR1bj3MNaap9BY",
  "key21": "41bt4RnsvKVmywUBjcf4V3APatuEPi3dtiVtoLqcdLmxKvxoFkTFNnPZVcF2Q8Hf1KTEaMZsQsD35JdHE3ba96Ki",
  "key22": "476HrK5pk4qVuU98FECzPg3UC4zehmLAxpQacGHYnTeq1bBg4ie25knzGJaBMWJgkuxZ9qVF3C4Lo2HZayZKx26X",
  "key23": "4zqYj6gPT6uoLcKx5EvP12QwJgPuzBPMDDftUBgnsJXH3JMQRt9gBkr8veS71gSpURUjK5q2Ly6vmqCwD1CRcK35",
  "key24": "4WozCf23eoVQdk8dPSkryK1uX5EvCXT3j4k7Uc2p9nqq5SmVsH47f1eDqX9Ci78eKkEcuRo9Z9s92VVwheNdTkAN",
  "key25": "RAtkHwWnpNZXNXaW8i6zYZAqFswc7MpLzjcgSmDvZ4FRPSHxwxj4AxprDxiA45QKznfrBFQMfMQejtVvHBA67qt",
  "key26": "2E7g9mdCEWbJBEgpdqdf4JeZSBZQUMpxmtiFSCo9LJeFkokPbFPBWWTjyNW7Pf9qQqN1Z3pRABs3KmzPzWUQygtZ",
  "key27": "4X6rFianTBZymzKHXm11U9sKGoFBeeD6sqFvgsRtsai4BmnDYfwcHgVgVdg4QDFomQgCxiGAM99efcRcCUra7Knp",
  "key28": "3UDn9TXFpXWBwQUVt2RnSVp37MEEJJ5aprNLbhjjJQbjGJqvkXrhb3SZRDRgNAaJKrZgbPwT93HNdc9uRt6GMGFy",
  "key29": "49mT3pUJBN63MpWyW64Zy3TKwvEvjSyi5XMxAFvKzvxwunHEstYHz9r6JXxWro4XiPYZbPgb3h3siM7wmJWcYUxA",
  "key30": "5wq6E4angK3G7fnzeR8Qdo2qYtzmuqgBQgLxyagtV9744vXvDZBhUsKDQTBPtLyiMZTSrxVWYNTRsuD4TCKLiXyD",
  "key31": "2BVp5WwBeCL25UnryyKQPVp4n3kDADMKq1ZggNDoBGrikJuzDKB59eJpxHtmD2S8w6SyHxwCf7hg68GpTFnYwdaS",
  "key32": "5PwBfSWuMbWpnorbPNYjTqGGWV9RofppEFkkqFNGcisPaPp2cM4jy2YF3rtUwq3ZAfzEwPsFZctRWeK5ouoY4Qm",
  "key33": "4KWmXZ3ey8KnqUk7Bjdw1jfUH86RQ4m1bPHBCtroRMTaVGAGEySa3rmjZ218N7oQVYwAAm3fE7Rk9iaAMrZGkZQL",
  "key34": "5HteoFD3VTnvXVnS8gtxEGk4DwxdxUdXtnfD2ZQhTmpiQ3QGf1QnwuLzLLsBUWWmWZj5iULdUH3FsmrEDtEg2eU1",
  "key35": "44a38NejcRyWTK1uVt8g8jKtF5NBsaw2xqhuRi3BZyTeQuiMA4NoZ78wPYTSZ2NBPnPJyvb28A2iaw4nby3QoYNX",
  "key36": "4La5UT5wUpU2woC9G7TMTjMY6saet1PZzu53AiLxjwuix68DmoqEbGrDZF9ta83cFwP3sgTJTEwJchSrgcv2eNp2",
  "key37": "2UeYtjP8TdkeozfW9NZqP1vkEw4A3rrFoXkzBJxPexUbd7gUZTzDGrDSN8BvpaXaf8RdppYWsavJkRKKq3sGM3G4",
  "key38": "4UFw5phjCcianEDb3Y1nYQsbJxNP6563Xg4MatBTvwk63UM7MgwRK6A5usa9Adsw9Y8Rzu7PFpTGPN1vuLcJ5d1T",
  "key39": "5qdfdXmvm6DzwgSjhD3eA6BnPYSH6CjtVntHphQBSS9BKKn3AHpXWexFMgPk4gZu3xSC3T2r3XethhbQV7aWuivQ",
  "key40": "2ckCZDCnNckn4v8wu24KCmJDZJUAcdxW2WvFbrPLY2Y5rRAQRQhhyKiqgodvQPaU2LpFgDuxm6aFmGbdbMQa5EbN",
  "key41": "PHJ78ZU9tnkyr199UFEWXY5AX5tpCn4iNBkyaj7xqNyCwEWqYrjP3WWstYce2gS9gKsrZ1SAdZGXgNkLKaiZFBZ",
  "key42": "2JGBQestWsqP1qUCkXSZ7kEX2cwz764q9ddicj43LFPQiHmxfU4iaiURrB1P6RCnxe6uPMgyNTsa9yMjTHFk6qUR",
  "key43": "n1ox3MkcLKQAWFSqzZPJV8kRydu4PBpFbcN2eNLW5mqJAgoewNnWWaPvEcxR97XLprQCY1jtfoJM3rfjy4MFqQw",
  "key44": "32tAGJnjwxxNsHesfPK2td1XRtUKjhJpsT2jZHNppM1ukR5uyASViCw42aE9Z81X8mLaDadrUSdpBhfC4gt7k2YH",
  "key45": "4P2VE2msHAmkLWjdmE3TVgpeBdWcqKHwzv18xvz4xQwaDvAY8h7pprKjVndYk5ekiufPfJFXdo9g1m4fJFUGGuwN"
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
