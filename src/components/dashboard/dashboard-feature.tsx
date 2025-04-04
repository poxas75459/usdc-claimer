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
    "3MJzGvx8UxM2pMgPCgUButicsnCCPqnNkXBHSiohBxhXciKXuGo4HH45gYp6chMcj91gjk97Tg6VgjNDjYSesA8r"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rtw2SwRv2PVM1ZjXw87X599DJFHsJ2AiFyGDkJZ6FyTGSFQy82NU9gi83DH5D2LYzAqnwedSoZTAdyxaUv4LdBh",
  "key1": "2tkYCh8jPvwxjoKMQtKAhgNmpssnGJEYUE9nbX1sW511ksVVaJgRXhMHEgL6pMF4SokGxijZJRDjdMqPMKa665sZ",
  "key2": "56SVUF2uLY1t5vrWG1NNv4cotiHiTRMgqNFBeryJVsZW5A7Lk27pNY7cnr6JuaB1hvuj5W7dedi1NuR27314SP4z",
  "key3": "4PAc5h11oF7TfZBrDozJJbnAsuxcZoSQDBHvmaWDBqkdKnVDmCwUFKKNAuWyAwpcpojaKi7mhAKudHBXQpCLXmjx",
  "key4": "66Ss2yEBBqWw8xmpgPUmryVitAtfAx9KeevMhuwQmi9gevJqVz5LfLwMdmDTaF37nAknK5Ng62frW8Gthw8a6dpk",
  "key5": "29tBVibWefPiVND8qfX2kMEpohvCApCCdXzwYzwBd6Hgkegcv8d5mduJoW5Y6RMvXdZYsTvecdFJtugMSSZ3buk1",
  "key6": "SRX5z3HwmV1Cgy2n4VRmwHzimBhkDJffx2HNTkTdGUnqY59SGfSbkh9fMY9phssKc8nRBc1zMfrvbDaMosd6zkz",
  "key7": "38xgo1Aw4q9YHmK8uNCznkbj59z1vYuuph8pdTM2fHyQsTebr7TBQuuYVjMp9wkACJNzTk9sjMtyb5z67fpuJvus",
  "key8": "5YnUDGSp9jmmyahhMaeqauMi6mpcjLRFVpigBFeuVoLWTcHxPewGZwsHir3fkq6hX1ez9Xcr3fNNYGDEPus9Rh1a",
  "key9": "5NZF652xY61dH1fZLxrzbKrA4k95xDUKKoPYM68aPQcXKiBwhNhZUVbEr9G2MdugCfudCTr167mtneDNQN7Lidd",
  "key10": "3WSJ3RhCC7isQNjxv8Er7dJmCzFj6Fy4FruwYEeRAn8yPtFK8Acp2CYR1WgTANjC9cYmzYqD2UBYKTBpWDqrbMK6",
  "key11": "47w4FshCV3WvCNvTRufyfY1Nvu15VUQZRjcRk2EfBXf6dUH6YzG9dvebkt3TZGCFBT5WpysaJb9skXgxG6poABb1",
  "key12": "ukNB9QsNbEVT2a5cRKCBUHwxddCk7rFNqqqe7anyGko1viJpGQCiCzYdXfQSvFNadfcy8j3u9iF24AaQxPGk5Zd",
  "key13": "S14KdKiMs44MGKQwvCrBRbPWkbqmyoj4RbGgEZHZzx15tVZYqi2VMP8AM5jigh4kG4aC3Q5zM5efCAABqf45apS",
  "key14": "32Me2n7VYg2qjc3GW8EV4UiURiaRxwUMQB5U2JBtKDYAV19FHcGKe2kYfghCfPR9XtbYYAYgw5hNNiH2vxjWMnaD",
  "key15": "4Tud5gqHdjKKQHa1z4VXwa6DU9qQVRspzEVoQ7Mi4MnLDFJ44TheMjmQHvBKDHkmyAnswHZL4iGXDnjhodNjWtvV",
  "key16": "qudQqSLdFs5rWwkkXuQSxWGcWCyYv6H5W7S74GS4VTykEvTAnfpzQgy4c8oXB9GBiGfD4QMinYdoTwnc4xCoyAt",
  "key17": "21fq31nJwfU6fXBqwk6qYnognNEGgPd7hKH66MpCRM14i5HiWcHk1yD8irC7JEekPYCAza4CYyAbp79LoBPHnaRZ",
  "key18": "3U16UacU95BWZ39P3aSJQjeDfnrCMnicdKuN4yogtabtUwRWfJL6GPtGxspRZS7jWr9ht9cVKvibU233zdTune1n",
  "key19": "3JCMbQaW6qoV5nRkkTX6S1myuWYNH8kDABDbt8wGDGYmUBFrXSD2VrkCU9j1nqe1BQj72Erk7fcPJY1F7JBFs6fv",
  "key20": "5o77FVeah86f79KF5WC6VncMontDFRe1vKp8kjwvCiqib7YkbBWzfVnCv6g5vwfAzYDESTtwVph386EfwmKB3B8Z",
  "key21": "3UawbRfUftnmHWPFrrBnXENwGzEuWQ4unJaSu2QU2dWzKsVXoLYjAgHJ1M1Nx4ZPUboh3owHPr7HppWEpC3SDyoi",
  "key22": "5oUEvhkgGmvtUMhK3pbD3GmMh3abd1wa2wmgzmtGZBt9ozbw4iumWerBjdHqbX1DCvFBNjtkqCtFJY3oU9jKXuVY",
  "key23": "4atrKUr9YicLf4jndzgefX9ps1uzaCCjVNdnFPr9a5DViHxjh2s7MAYkiVZ2vTSPuMuB1tsAwVo84UCZdpqmfNMc",
  "key24": "RxvPJRY3XrGPN6YsResnTu2h3TGELMnhjnVRgifZ4wG78rxwCmsnh2Wp7jVmQfiR9ufgjCc6z862QqV5gf1unMH",
  "key25": "4FJzC5YamoSqwSYX7BYjepYQbEnwQDW2fR4YSZn3GGGjTgTXWDErGZhvN4ckmQwCcmngusMuxoTka2Emi86oYBEx",
  "key26": "5dhx912YbwpXCf6c7jdBhtJafUfdXo2TSp6eDDc4Ru2EZDSShFDyZMTvbPaNy79ezEBtsRLNfSyBBumNDwZswXCv",
  "key27": "4QNb6coFYYQYKvY8rmhKCCNayqeVBYZ5ogT61uiB1NVcrYKQEajtsXDnxN6LkSpkXhy9Y2F47uj8FqbiZzcJrgee",
  "key28": "54XhXpQ6VxSCLwhtqVsFHY2DRU7VWjyezixncZ4LULoFLs2kg1uhTqPFzh53ZvXzLHJnT6EzbhfehWau7LUPjwue",
  "key29": "XBi6ka1qiJKpEBfzz3eXWpqrpmxtFQqMikttarx5cFfXgaV74BuzCocsUkv9TcQ4M8r8qCxnhfe6kUFqY825KCu",
  "key30": "4BTSpU5cXtJNiW2FqACrHmrDqFdFkARmiyovwxtUovuNjVYYHJW1AP74VJ8NHLFNEPkLZbZRys4ffUYcHn9p5q9V",
  "key31": "4vhBQPQkShCaCsccMwkpTBqKtHjGM9CQtqSBBTqQcLQWRfDewPqqaGu5T1p6RK25Rq32Lfzp4G9Ez93sqNxJXKV3",
  "key32": "4JLGGXeeUgYjWbSweKXo4NUTGMcybRZuCcScBKrLsvXgfzRCDpZuVcNabL1cfE1m2v1GHqBCDHpJ5RXzjvRnuS9C",
  "key33": "3ySJw5XW2h4iSmP7PDNFchAfv95pGjQPhjPdXrJioJSniZJ9mPbDnpwvTyjQZguT9CRXozhtRdyEukv9S6hu6CTA",
  "key34": "58YWv4EZ4ghZptT8EMCSX1SWu2B3TBHZMBYdYgQYHwPvpQCy2XgQFyxSvH6wAqcMFuA1WdUJN7EDMaAKbLYeWti6",
  "key35": "36xScU6s1HVurkYFNi48atvpN2DB7RRSPoKB8gc4LF5xgRtnztxB6E1a7MyNtoTG89HiSzER8uGNWWWJRKW6X338",
  "key36": "4r5a3m7fh4UVooA74Mwi26UhA85GSDVmi8Ln2U2t2vyreJyLeYHhH1kwqnJHPVtNccWtCivE5x36SJNiqpyXYu4B",
  "key37": "56EbHhZW2EruWqDu4VBwW24gJjbyE3f86e4N1StuA3RRyG31EJtpUw5s13xAL3GxNHW9VXXnS34Dg439yp32uFQW",
  "key38": "4FwxFV3TRsSHs7FRjJRUgGxZGeFKrA5mQe1i5GnW8cie88GVqBP5wimGkD8AB4j2GPbtFCGefTyxcQVArs1zqsGd",
  "key39": "oz8BhTEqQrLFbsf4zthKk4oPAggmfrV6Jg2kAzSt7zzAvVjJvd9TwLHVtdcPejqxsrNLqYEquYLLttUB7D5jkDh",
  "key40": "5m1T2BgJYbfXmkafMwPExdZoTQS4FGSGWUyWqh2AzCbQDqSYor7Cn4TtFgSN16PYDMjbpvXPqokYdYy2jgm5Xdyy",
  "key41": "62ATGjxgQSCFgjmt2jnLiYNMCSbHEcBtXrTu4PKHMzpLWD6fgfxspyabLab8Zjbm3QVXeMz7XmEnBvpbjfCU3Rtq",
  "key42": "2XNFmjCZDi7dQ1gHdwdVyWQUyAnpwUYfECx1TZ5dbhFjX72xkxfUVUAfSV5qjVdwW7gfyMSvGR2pJQiBLenHYpkh",
  "key43": "363vzFPxNZiojeNp1AiM9pHLmgn9EfFpuPxXGGwjgpJZ4hi5PCT17zQBsfMoGa95txCNJDt8xjyZvKm44VmvXbFH",
  "key44": "3W8gdWhDU3oH4nzs8hnBL7WTNhDCQ7hew44qwobGTAUiaJtHVFoashagiZqi5pDYoAnaHrC2iidNJe37KpqZUQFp",
  "key45": "38gvLViX8XdTwenAB3VVsGuwW399LMQaLqLmzC1zzVhGi2Ayv1MxG5Kmsb876MsxDw4s3tgF5Mz7uWkQekfzKYHE",
  "key46": "bXMkcngCipndGFewLiU1VEC3hsCie4mXeMQzBpR3bKtm1LSpWu6be1QMuDMe8wPJ2wcbnG42hb8rnifYejqJC4L",
  "key47": "5HQW5VBvWzaPDCVXJke9nA28yAEkv9tyu5jHVwqiqZeaML1VRsAKrfqywdctauhYYjTq8Xi3JUSbP2Dr76fMsVty",
  "key48": "2xDKAuWNKFisR95NeJyigzF22jugGA9pazW15aYnyANnqmhNuRdeK8jh2XQF4NwCTqQcFSh4JpZUjKpxZNWZW95"
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
