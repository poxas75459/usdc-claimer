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
    "3fo5EYTU4a4uSooeiUkeoM2vNCvPxwJfL8WbU2yhnt5XYtXvGFuy4HcQpsLKR9ZGSvxz2NDTHZGExRnzsWKruZxT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dad7P1PLuuce2Nfy7xNo5s4pFsfFodG4LohZDLJKsEH5nYC7EtwsduqLUsEf7dUeXSWFMh4U3hQ6ccj4JBjC5R3",
  "key1": "5mSLJK2zKMHnoaPNeV6E7ht23ZeoKh47w35iG8iZrq1jQUoySqSdkC6QMfiiSfB85vMX37HkAR7aCqDNoqcg88fm",
  "key2": "2TaZxMGyrGHzYpjUFsmtBZMd3UJbaQv2ETXta6nnCbMqPPSBAYuEzYz9hqzzEtnU8DHj1HN7YRQjGDWMewj9ZsMV",
  "key3": "3wnFEQojnmYr7SrZsvwozCrfZPLT3ShWmwAUUTb4AtwSwE3oGYRrBaYAKXiXqSz9Ban1pX7dTRds16QQtJBJnrxL",
  "key4": "3ZsU8TSZ4UyWSahFrjcCgf3UhiVGckv6k57KdkzyWAYggdNYeAKjeivJzUBYhBgLRmoKL5hxLJpaDLH59hrhWk8b",
  "key5": "5mxmAPoZBduYN1jkog3rU7ozB1zCAVJEDgi363YNb5NAWUAcQAZHyuf6MFNRjhny6DaxjRZiiDUaeCgaCtaYJBYE",
  "key6": "47LDkoAqbw1QXNLvuMZx8Wmrg8xhT46pDmeKYS4nttutHQUkop5Yr5JzrUXKXR68SZpG8amEdDvaVaBSo7khHdoK",
  "key7": "4nn7UuacpEeaF1s9ePK4mNk8YeXKoALaFkc6rCZ9x5EJK3ppqKf3PThSbhvMAjC1FjE8ib33Y5ThtypQve8pnE1u",
  "key8": "2zTME9B7KPP6Up9aoLRwsKG9i9nDZa9xt9p8oQCztDVZVVBLoS4Ddz2uJ1ADsou6H4CxadYjfGoQCEmQjJLk2bMG",
  "key9": "2rbGSJc6V4P6q9PKuwGQ6AdRKEU6erMoiW9tH3FuQnYspgrvyagg6yVN1CYJq91wwDpKpDXwmMwGgbeY31Vm844b",
  "key10": "21Xg9ZUUNixSKqkj5SAsLgVLTzW5qamaBdDqdjmVPrYgf4YeZDYdEyYr9MqfyGTvv7sABxwruUCx1cEvqjawhfSW",
  "key11": "3y4Z5qeeR1ikXSwQjZiC2m5o1gFsho4PzS18ztj3gneFU6SWdZaRSz6qZuDp23D9nSjT1hrp3j1hrnkNTkKsUMbq",
  "key12": "46wuLVvVicCcWjsJAq1SmtuPxT2EDwnciuEsmaXGCF1Q1dbk7QmVJusYyZ56sFAtrBQ77R8ErQNziGsKBmU4rzwP",
  "key13": "4Zd6QQ7fYUeJDtT7RSCdJWS9qxcnVpUqJkNwFWz13SjMLd5UFnD7TdxWK5eY8bN2szw6aGBgerYBqTVaKrFNzpbS",
  "key14": "45nEdDjGna6Pt9jMuWccAT6kwsF3ughXsoJQTwXiRXw7v3MrEU6bZ5th5m2U4gQccySQZ6DbD4uBPQaQ5N9WuXmL",
  "key15": "39Q1aHDy5F7D2CMxykNcTsbyiH56x3yqj4LB3PDdcFH8aDumgUW9oEisZd5neJnG1j5qGkT7GYkBbFY7hs5gVA71",
  "key16": "5mopUjYdYY4AeoedMPtfrjvRwpqUGUGrZj6WvK9Kb4kbbFZG8GsVLHULutDyjAfU5eW4axpKZrv4CMNG1eVeJjyh",
  "key17": "3awacaY6jmt6zyrm5pa5q34NBnyASu7WLpPXRUAS78mUCKHBEoayk9CK3EWkJqGJgjXp5krZgSaswNquCKSyosDw",
  "key18": "3PbiXcxg2w5sEaZkKqDhXWLEGNpy248pPHwiTCacp8aguWrefHropf4CCZ637hXmkQxswqXWYCKEm4BcB5gCQRiD",
  "key19": "5RVVNHWdDeGTzupDwYtSBv5xJ3hr5dB3B74xBg4ob6YUkL31yUQSsSnVvwStcAkvdugpw3H6dFcac3LcSgSBBqrF",
  "key20": "2s1gD4tjPsXFbdMR3peP6DxZQSWPHJxWvM29qXg8HjZVvWn1CVUDngtp2C5zLbszEsixrhyMWXjgESQVX94oCJj4",
  "key21": "2o6fTPaRyAjffuo9dTFBJxBVu7ZW765F1GJLAvojXeDou9TGsn29z4911b1AhwWXmcpNDeYfFPpU85yFABtWkLkm",
  "key22": "59F8LWgyZs3rBMx5AFMeqjmwDT6v16siepBACecfBsWCGAqq81YnHdJ2B7c4W6hU43YTEpoLTvmCNsjFnE2XdKKp",
  "key23": "2fAw3uByZAkMkEXFYSCBaDkxASvKbPY3APS88zG5Fj4jqWJXR5tyy6PJVrPRnnvqSYe9ycYcBpEzHoqKDDUwtYGq",
  "key24": "3rptCbrPZydWYa1CBqvAeP6gPR9GZg8tJ2tyGVuA33nztwdDdpJWs1ZZCyaooUnaSzEzuNh3TZ9VwDvvksD3RAPs",
  "key25": "yatK6LHuDWkuCD9Kne88i6u6uxvMz9htBYUaT4bYdQr9fPJVAfv2mHkHPdJL48Dx7rJJ6cRv9xr2yPatEuSycji",
  "key26": "2r3KearJggqExovaG35XXgxQF7zWburYtEDdvMamcT3QE63cpLjGum85skt7akY13YESL4186LA4meoZram6gDoC",
  "key27": "2gHfF2s4HoQ2UiHeV7iknag8gmJ5ajMBzZWCnVhoYPdL81scowvdZemzMStk6SHNe8E6pszuqnsy5pGNsWYvTy7D",
  "key28": "24vaHcc4prbLbG89zQ4LXSXQ1e5U8o5x3gMSstzjw6V1L1UNUYjAujjZkEYSuYyURMexkbVvQWLadqiXq4T8fMtY",
  "key29": "31CubTNrJvWsyxyghy326ih3NEv8DFKJjPjMkU59B7hJPwdYL2DuoFyraYcWGLYdrA6jJ2x9hCss9u5rqbySHpBY",
  "key30": "3Tcch8q9nii1e36iUpVt3uK3hJmPxGBqiWrpJEjZdiphx3uWJtXip4t6nD6V2F7s1oV1ukhyhXaMP2Ji8JMQfUvK",
  "key31": "3c28NCqYNM3v51jxYGigZv1e7egpb5MnCSRkJd6q47ErnsVMfL4YQXhdm35ajLyNkzMpJChUzhtKDZFREUxyjb75",
  "key32": "5zcSTsydW1NbP3PEf6kiCuCNyt4gpFc88N6bEHPxbK5GxuDziqrYFhdpELh9UcMcpz8Xi7XFf9jaMCvUYnMMWqHc",
  "key33": "4gfuTLyeScApndBb9dLmcbd6pTQ2Fpazk1CyfwArrLTv29n9pQLbr5odDXaAJKH4ty3a7UqcGzoDDFAktbuQrqLj",
  "key34": "2bsDmZuTAz5Fp85CDo3S16SCsQLdwp4AkftwjdF46SEwiVHstddiQ5FQRG92DU4VkhDNpZ2Ayu1LWqensemmrPG8",
  "key35": "5b6J133ce8U4DqKhQf2HiCunV4hnosv5CDk2LkM4zgDRes3zTGFYXii2f3Uo11qTwyHkSryyVoDDHgMqvk2ri6is",
  "key36": "4J3cWL2nwYL7v1GrWL4C1htbvChJEErSMLtf3zwnKGLSzJHQyYpEfu3FRtww8RJ7FvLttLnsqrvp592W2Usd6RDQ",
  "key37": "3xgjgeshyw5cP4kZjQFztGdSRkcSBgeHWPAZhUTimYM7tqTxvhyUFQwNxUtvm5VSmDy6x5mdSv4oD9uq7ufX51r5",
  "key38": "5tf6LfJ3V1h4uqGM5vQzvXn5kZPn5P6z29g3x5FL9qaZARHSgJgWvaQfgPPDEP2Tz5cs9yUokrmJxw29pVUXmPFp",
  "key39": "4ypQW9Cn7RBU6dxTi1bh1yB5vs3GH7UzZQ3RkkNjubf65K1taQb6hMw8vwyo4J9xQ9sZC7VxfaCTxAya75gVs52h",
  "key40": "3FcLPqBBw1w1qBmJViMCtdsG77jZAVgfwrNeCfUFxnNdRgCLnMMkZfFXLBDa3DL1wnyHLgca4QLxexXygspauYbX",
  "key41": "3ByjvTnXckt4asJdDYVX19MMVgG8QqbJnMu1b5r6g9rL9XFZdUaCZaVntCqkVaJCrM3myrCdtJr14TwshafF2G7J"
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
