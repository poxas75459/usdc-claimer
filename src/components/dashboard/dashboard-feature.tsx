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
    "3MBRYRTLrfiLLQyKKEwBM9aTc4gwmnuGua3Kytg3UPibigh9a6tDhEgeT9mmVhFJcweiUTmDYXwaxTtQ49mn6etF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f9997ooRtmr9EZekgXGgDEa3PJm7qFbt2FLbToJhwnJkG2QEHQRQ6gUXjCfAburo4nFBY213c7uLHV43PG9wUPs",
  "key1": "37AdiLwtXF8GmpzBCxPvPUytbjYAq6Q1tEguAGgwf3R7xwRkU4etjdpDwyGLygEnHjW8eQw66dsKKunwbVcbUgbp",
  "key2": "2QbM4PhTpmg8zV8PUkTKTmoLwqzQzbZBvHB6QDpYMFHAo1KTdugTw4MBGrnxeZzQAtYgv2DYyreYV42a39Smghzr",
  "key3": "8t2So94SDMj4Tqjuvb5eHAB7JP37CNYnwXindS243DEwUxXMnG3PMX1k9TTXnnLWqbMjSTuWish8DYYG1hjVBvJ",
  "key4": "5JB7pb6M38PjCngHdo7jn8pYqBFrqNiiWTt3FbeJMudECEMA5aXJRMXHFgtyRf1m1kYS15iuFA2xp2Uc1AuuvTXA",
  "key5": "55VUcoivqZdupLKszmKoABj6jxKGNgj8n2mdkeS69H19LaJL9TdxT8ujtSbMqtCRHriuEFssbzGvGXbVsU9sgSzP",
  "key6": "2eZ7ZhoY8uN6MTvw8TZV4u2qKWxpSbedEt67UPA81jVPmG4NuRWrx2CkRD7SnXEeE9cExz8X3po9UDwPKMdwx9TM",
  "key7": "4j7MMD9dsxRi5m1fcePfQnwpKMDrEF8ApbnYCmvUUKqpHURErRoNbrzMTqXoPGZowiKtkzyBcPeTvLLKjjqgGRnR",
  "key8": "4DwVLeDuDntcYz5osh26uisz8sWoKTRY45uhXQA2uoVfKePsDYFm3kWQQt1WBBBXGkBtWR6V5qEpPwpxM99bk1D7",
  "key9": "4vybMGh1qBTtanaSdrRDGxus1o6THSWF1faJoD223cTHzXciQgWxcZoo5wt339EivQt5aFuvBbPp2yUtdtZbtd1p",
  "key10": "35oc4yqzMqdbjATfefLmNDRMP5vP8GSfHqCaZXeHVvatfQwz3i4z9Aysni7bcVmikMMwBPaxs6D7XSvojeBFRpJL",
  "key11": "2fTwgxffnCQ4TTa5xB4efSMyudTdKo8mPgraW6R2VMup4SWBq5B9Kon876ZcuJTnUWmd4sBBBfjhX2dmZnLwZQXC",
  "key12": "3xJJYcQZKMegRVGPiLi7neduGjzm8WJAAmEvn5ZLczxrVEP5tGYmARFHyFrM45E5RyfEcFXCuCfAT6VUSaYeSfQ3",
  "key13": "22y972ffKDzhJJcMQQS1y5CA79rXH32q4LqNu38mX9wYAnEoDfQMhGbyc8fiKFJsufKw4TZRUFH3Sx4N3VTpzCx4",
  "key14": "2QopSdZxC6gQs7ibZvWhmXc4oh6PVp3oDXJWemzFn3tsKQ9fPZi5tj3fZnLhU7iabp28HL5q95pp34QvhpzhcF26",
  "key15": "2zKA9KjV9rHj8RyM9fxpZPievqFpV5zpjXzGGZv41KHzvXjR8jUa8sqPWCSyL37L9V3Ye5K9GmFuxHhXq6CbSMSR",
  "key16": "kQUweaVNoyxsm5CvhV8HJZcbo4XCELnca4FRgen5oUYcs6RGUdP2aXy8nwK2NjETkaAwSBQNbFTmins7mVRpspo",
  "key17": "2hL2GHeSwrhU4qGtEW2XRkQzJcj2JDQ2Y2XCPr1nDVUp9a28TEMYkminFeVYiGjYRsEPwGZrVoKJvH8mVqpaW6Ja",
  "key18": "Ffmt3CK9767wzeMriKzf8hHRf372MFHPqgGkfh3T1jMTRYtSahh4Ko199X7B7xSonAEYiMT8FKAGEgg2X5vb6L2",
  "key19": "31e9DYVRSnNHs4NEzt9TQqSkjspPQD5LQXevysF3SsgKvZCfBUXwHhPFs9kYrrDpQhFhxRmwSgz3zotYfwudgoui",
  "key20": "42fgpsnq9UWAXZY9SWb1iWN32Hs4vSokp4cSTZsMH3uXUARMXk4m7MpNV2AaKKaAdDeDdh45Aug4QvzKREqNzxgi",
  "key21": "7VES9TNSbCCBmrCdVYcdvXvZHn6sbugMVtcMmU2nVm8eHG3JFwsytENqvnqkhQFzFTLEDSruLhGrw73r7vmW1s2",
  "key22": "TsMDYqVDEiqbv7hh9WnhMxxYxpXxidBzfjzWcPr9UTiba1xN66eeyJP7gTRPJC7czBn47FBXLRtmbW9fyZvFjHt",
  "key23": "3dQLZMWUzAEy6RB648erF2dDK9t9fJ6nYgJhHpAbbBZ6HtuU1V3yMw8wgqP6cB417umKgZ1i9GQR1BCJv2HT9g9Y",
  "key24": "5MnCKpcUMQeFscz3wNw51bmybFogW9znKRrXL5QTUGwVK27oPYx2M3Ru8aiaBwB8zZfneLeZbgxBxHDG2nDascxm",
  "key25": "sHE9ysLRM7niw1VdZMTKAiYLsSNfSpsZrkTJrscnwspjW9xLPrFSNaQLPnKL1r9vsaE4beKrNzN9BGzG1uwyzRs",
  "key26": "55B2k78X5HeDfufpPyUy7Kghd8X8qHYJQgQwFtFNWE6Pi2YFjfTBPU5PidW317yqiB1gVicJDAb3PPVTnrjZbVyW",
  "key27": "3km7Jm2hW9XtHNakxrNagzEsqgexZ4z5Gggo45vPQWCVp7AAV9bfvzus6EsSTfWBkirRXY1hurhWPjqBKVS241ME",
  "key28": "52TdAACpTNwCyNiHQC3vpUAXoFchgyfzD9BSy3CgrGnBsvG92b7Qj3HvZ8LWehuNpRZuhT5UqEHB28N87QgaUJvV",
  "key29": "2v37dn8kMLU5GTEcoNj8XKroTbQ7yCmxFLrkLHABJGF9kZMS6MSMnV6wHSjJZ3MiYsVKdQ5X6tcFJ7WdJjvZJU1R",
  "key30": "52HsvdzCk7QYDamqn4htGwAk8gKZ5rwv6E7Ur45seF5huvJSGSPgDn168hadTu3YWBmNSTduBsFTmRnzxBPCmDWU",
  "key31": "kEZzdgxtzCiUf595WkQnkpSsxT7jACPqFDgDw4doA7nCP2Ft5KGbrJiJeaBgCV68SCk34E5r7yjvtKb997VpThW",
  "key32": "2Kq9ckXj5k6CBBPfSqviTAwfKu6iFqoqsWimf679hajTr73jBDSfkeG8ueQ33AUmAVRowMtF6mSuZBZxx1ro1EzQ",
  "key33": "3DGYNaFFV9T3VskpDfUfdyBpSCEQWyhZ3MxmFrrsu4zns5yqJiriVr2S1KhmA1EgtqLChWWkbM1jQLaUpx2WzCCp",
  "key34": "t8fYCSBugwnP4YrG94QioXodbwQjji1gUzZn6LCpAn5McRgaoSqrNqhb828goU7mVcEBDCUSQXVgCj8UL38s1ma",
  "key35": "65XuqvNTxXFJEh5N3Xo6ARwUChnYvVAXAwX4wq3FnbNVYfiapJcLDHkgtZKWXGDWN7VCqebyqdqWyfoB4HhDRr2B",
  "key36": "5wiC6a19nxFoq4AEupkrTygTsi9TkiioRGE9SVuqdcJ392i1Q4y1PBKoMXY1hkgYpcRZzHUigvH4vp8aQgfx4AmY",
  "key37": "5cEqr6SigpXujw2sp4McXSVpLaEHNxfLtEMLbpsYSvzxCnQjFS8C3uo58QSbnm54e1VjckSrNSESY7pgzzQeic69",
  "key38": "45qLFApnCFTAAoWoKXn2xGMQsopGytE2bPwzJrCGE5j2G7N7aWF8K9m3FqnPa4emjjgtHxaVyNCTmbeW3yhapo2h",
  "key39": "J6ZJU1PF5Ny3GChQ7ETcVhPbGB2bDLN8Gnkpbeu6oCBe12WUSQg1k5HVfvqWs4oa8Kj9esTVGs5dxtVn1Z61CV8",
  "key40": "5NUF9UD8jqodrGSU87EXKsjdmtXANp4CHWfrtm5ym2YmhLQH4KD7BkTiwJ3Ux6QjD3sPPwyiYkNn9tEkTKgijVEg"
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
