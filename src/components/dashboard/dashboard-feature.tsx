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
    "hrvNyt3pGGNfLYWo5XP3v7u6UFYpp6asnTpsbehAo9VJaGdBx6Y5E3NbaUxyzKPdYhFCZXV3P4yEPxihhPJXdDc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JnjBh3kBwVf73hEG92P2n9j6LjV4R3FgsxvJXQD2DLxZZ21X61N5XG8BcoHoF2BVvBBjJWnohK28HjufsdB6Ysw",
  "key1": "36d3UCCBgMe1ANXna2tw9avvkRQPi3TQinP8U3aN2gLjxB5G9bHW9DzzXEtNVdemCT3xz9mVZ93cTJBFoQyzG8h4",
  "key2": "h3dwFktDFKbJPvHhuJmiPKGdnqpWQYNcFWrNNVbSADjLn2JnQQdwGEzg6vrGBCK5knPMzfwDMsmeXZLMi1vD1bH",
  "key3": "eTr3d9jjZ6DMpWtzxchFiNYb5pTmkqF34EmQNnBfbu9oxWWPsaYZdtx9aX5DyXrZ3e1sAXGwEmif1tuzBiXppdL",
  "key4": "7Yj2D27kkcprp5YaydFUTqtMJMNXZPJFzK3kkDaSV8WgzixuzRP5EX2ifGQ4D4PMx8xNZHwWp9iLTtvh3oSBtSB",
  "key5": "4SVNt2Eyt1e51JZ1KK3aHgmMfSQDEyFvX1LwkRN4J1enbdDuovVdPzir8QxF7u2DwB5vULinhDXTbNFjJvmQ3QyW",
  "key6": "3iYoDztVKpCjYvtuqMKy8p63p7FySMdRh4AsSPnfx8Kyrx1rRo9hquiibuzhUx6GGwmVhrKxUPoUJTup5nPhTeKp",
  "key7": "5Tk7sE6xv6CWUEYQLtp2kgyPXmLtGC16FaEKBk1CuM2mx7DrZGcPcY54yN8tgBgHFHa2YQs881nHyd22BNtWQyd1",
  "key8": "3cngukfHBTtP7qXMFvKehJY31bYcP4yitJBXXgt17aHtH2qg1takRitQdeAVeUgkJSj7bauywwmwDMi6aFFB5fuY",
  "key9": "58McQzEnAxHxoDbKoHwXyoi22D2CjCHeREo9aF23tqU1rXXKFAcRp7j4AapPF8AxwFRdG4sRRGQ4Fjf3LHoWdavF",
  "key10": "gJK6Zr5Re8hixvZykfhTQTzhprkvtAU3gPjc2VBSN8mbrvH5qWpVxopNStxdFaapDdHqVAGvxRbpBbXt8zAYHk7",
  "key11": "3TszP2pTo9XSvFo3LbokD8La2FygGzmq9GXKkZfsiYuBfWgEW8YruC5QiLmYVQaKfXiecwnDoVQJBWLupGta6wpS",
  "key12": "2oVTTTdm9Vw7VJZ8Y2QwHXydBLBLGw76NTyLYf8VzmFj32HM3PihxSUHvtPWi5Q9WDKkh5eJMpVzgQaSm35UiWdU",
  "key13": "4PCQb7PG7YDgT5ibT8FAzc3HnUsUofmfEhjMyT8J5NgfYoBT7RcnB52rQH1Kb44xeoc1fNFSWBkotVejvqdznS6x",
  "key14": "aoWBYLNzj7NFybQTeCwv7RHMYxBMThknhKLbFym5BksQGCcJZtCKoden3wVTiyxAEk15YWSbyw2Zq1Stjax2s4K",
  "key15": "9p7PWr3mZQyi47twbqj4LoHzVSBXC6psV1akc87RuGfpBs1ncKG4Muqe6E3Dp3yK6Z255yBcETHu99291Mq1kfz",
  "key16": "4xPbwoUUeGYTm9C9fib5bxEakfZWa5e1dsqKfv8kDs6WeXqbcW4L4BWiL6imNNDKD5Tf6ov2uV5HfQA2VE5Bcs94",
  "key17": "3LjhdaC9UQdoYdLBYzNJbE5xK8gJtLnVmUhe8evgWXDpMm8dnToCkiwtLHRt6sh4P4wGZj2fpprP1BHNdo3XTWgw",
  "key18": "5N395r6k2ZWxZyJ6Nx7Ec9JMuRyde1oCCpSUpW7ZSjHWaV2Hvt5K51smMRyRyJ51VJDAfbi9cgSBuLHs1qUYVo3j",
  "key19": "5ggw5TSoQ5ujPpWgHHyeemj9wyVpPw7rG1HpgWpzaVoWuNo6wmxEuBAqHKbZ2Vj7ubxHoTKCGBcMFfoDwoWdxSb7",
  "key20": "5B6qoZKy6e6mf3HVFH5B4ahWcWJj83QG77dD9cRz7SyHQhRpm8LSsoWFZsKgTNZdSEkATtEzjNCkexeeEFcr5odF",
  "key21": "4L552uRtemYHDf9NwZzuv7t9h5Zqd1bnuZw658fw1KHaGQxq518Mnro8pPJaq7QFgpMXtFxT1BQvQcusf8grTZig",
  "key22": "jxrWqr3es2FmuZ3fp4wWEobmW6aRNdjuswLKSEufw1NNyguavDECh56qaq98ur7EXY3btRQ9CudmdDDUCX2iiHS",
  "key23": "4BpdH7oxg5A9VvVHQ94C7xbZtFvU9kdNyBfb7cYTuH6Qk4QyFsaZu42stxqbJLnr15Bvjt2659zsT7wgbjLbPiqJ",
  "key24": "4DdFEr3sVy1CNpSKxasXiiKNYfNcjH4cstY1wiUhX8kz5tLjwXpRx35txvcBzpptLNZ8dhstzKwpLjtYVuaUQcoi",
  "key25": "gCZVt8aqXNM97x5XyKny9ponegqmomupFpmMZ4L7coj5DURdaWXPYfSL4wmsEbrjazrXZja3gKMLTxHBuYvmbFx",
  "key26": "x2mj6nF45j8E2H5zP6EhXMw4QJ92NsdFC3YjxmbbQEvPQFMioLe8PTMD6zqHsv7k3GkzGyvMUZ4vWMEUsczkQ8h",
  "key27": "2DdED3CU6eL9JpRkESosZTgBRcE9RcijHdvA9wYarsHH5oWrJHrxr34cqJtQ9bE26i2XjHn9JSxgsPKjE1BXEvFh",
  "key28": "5rL5S2sDi5NQv6PFCN7YZZ1GwR269hTPbMiVb4MfBoMmjmjdovrV3V4anusX56nSTRS99gNHj7hg83fDHbCnTR1j",
  "key29": "8dEsMgerwEQ7JBENxYuGxdiVTU2kpL4mUicDndHohWuUEayyWWE29kgdvWLp5xHxRhZKrUaCEmhjPRyMYjyvJxz",
  "key30": "2UbXTfsBTz4mLctA2VRzXATtmrZ1urdXCHmEr2LVmLfUM3spjANbMBrdxMJYw7B71BagGBCwJEBYtxKqNYR517ER",
  "key31": "3eNR9Po5UJV36Gg4Yj5585EEeP3YMi9Pe9KQSmZUifyRkJgh8CFyrSys9WFZcAxxoJFT6BjuvqnChWV4fzHNXctc",
  "key32": "g8ZQyctacGqQqsmPLYFt3DoqWLrTV3Vf2J7ssjuMRKo66EJUk1LQzp269tTMoSvSFaRB3YZiZLnbGjyVpLyF7tm",
  "key33": "2vNA9y6DpeqnZvrejQ1ftAorFkMgMadbLELhd5f51MwK9xEvW81f6vq568HDJGsaTT9DsUAGuTSKjyM1AV84FA83",
  "key34": "3sFHVHwyLwP5viD9gezViqhdeeVw583wrMai4iqmMuntSWeh5BFrr5Rixp4SR1uLJxpc8oGP9edRqMhu3sLZP7hs",
  "key35": "U73wEbukAM3UFHvwqToN71rPKt7YWJptbgmuedyiRAp3HCiECuEMb495JkMqd33hwTRNF1PSELfExxzMxqKMkgs",
  "key36": "4FZkBkeQ4t1iZ92Fg6bZeBQnYwscFf4ZB2SuqZyR3ffYhwdz6C2ntTeajRHgiN8AMmnMjbZ3jGfhfK5jLWEaS9GP",
  "key37": "2s8V5m9A1GBYubXxXFsXh6QVS414Yunz2WVqomhbTEnp8wnk5ZxD6KYy6yEfhZo3okJP2Zg2XSgKxTNdio596rrX",
  "key38": "4DH6v6jXUuqroBq7LXmGuZJDCe1KAv4XaiWThFrpJnu8ZWPn8ACsmZzsz7JR6hzfRi48X6ihEKFQGD5ZnJm7hhdQ",
  "key39": "6m7u8QXQvjzKfXEu15kD1SijPQGBh576W3ie8Zdbdd4xnUK3Use5QoVVcXpnYPpqUEJWPemh5qpcamANQR44qQk",
  "key40": "3adC9EhdbHvDTxvCySmQPsSoq29c8SegT8Q3eUTqvNxY1aVwAW6ZaXVDgwjXWJZoHjYSUTTNT3ozCo2BaUSxdYvG",
  "key41": "n1maUmeshRq1YBYUUqSLJaXdGD425yq698ZU9ZPDBwd5K9iYG7tSXc3X5f2ocXZmd3vr7EzXjGP1PTgDjJ9QwCd",
  "key42": "2E1qWjpv9irLZcvJP8nKxYGCWNn7vHVeYCKqT5qXeA5AVeAzzBYKvwXv5Jr7FMEhDesikLYfTHQvu3SNoJ82TTgU"
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
