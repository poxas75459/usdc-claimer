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
    "3pSvdGxthqx87hXBWhhHwPQaRqtpaXDcq4DPwoDoLGgJVb4aKh6nXG1RWVNG7xKjctcNrDYiUrwN5WUYbJHTFs8i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LEBPMM9gqBHU7ET2JLGmh1fkbrpG1fgsvYSLMUpfJp6C2g2JUSUbGg6vw9RhSiNn5M39xLvGVWL6hirGyjAZR6d",
  "key1": "2BxRsD3C9cgqroRTfkvibQBEYdShdzfbCS2WNCWF7PxUweJf8g1ymLdBeVsTGgaLwnhimRgtnFPyEHRcLS3QTYw1",
  "key2": "Lq8Sm11PPXvhAbyRo1bb9vcQ3vd9yuKtudvnWJpfZMLLvVG6ZRNUxdqezfgbJE5Xku2z71mt3kER2XB5YARvLsm",
  "key3": "41mF4qbh58Jc264XuRpv25HuYnY4xSPPJekaozkn29rJrkNYdmK8jxGfNVRPcF3NG1qpBb4avkFVKdySf9dSQ2m6",
  "key4": "FZLhzzdvjStC2HbH45Zu3ygUu6t69h5sA2vLUZ37YJGDqQSP1hZZUdjYehWLvHmmaPjooyMMq4XSyx41ciMhhRS",
  "key5": "3oXhqWynseRM6ZNm2hPNyrHJVLiNCjA8Fh1Jt1cGawxnZP1Jjo3eQJyLQuzyY8jA343FXTp5vmZtMiPz7YM4cUA5",
  "key6": "1c9a69hXCxgK1fFA86KK5djWsN7svMGTUcEKEJ11grFjukQSfWSbyLzu4f236Jmf7KbJKocA5Jw3t1UCPkEn6pc",
  "key7": "4sSGzqypWP85wXLqjPXfRavWwSPbDbu6P5oQH3U3UMT1idoDrUujdHnn21CDhEpf2HQiedq41YQvhBiieye28ak6",
  "key8": "2V963TdY12p29Tfct25f9hG6fJDdyRuC5itCr3iSpfL5B3xTtuBSgtq2tND7m4iKZY4XV4XUWc47JStsyupZ21ev",
  "key9": "2crcETfsygt99WuFPLfhcmuSdFxxs4pEVmNaJTwPbMqUd6fyUEsid1oNm5HMrJCvufyK5q1KCc2shTQHjU7AaLgb",
  "key10": "2mX86yy9WRZBAp87r8op7rYaMN86nPithevfa9nCtknSPJHeJstHHEqBn4pyrwYLVmwQkE4W7kpReHscUcqC7RsJ",
  "key11": "yPoKNjxV478cAkT8rUBVgNMHRsrEV2Ymy8fMJDoaPcXSXt9TrMqbGZAciakdJgnDpmWhVi8PuVJXZjmFbpbYdgt",
  "key12": "2Q4aLbiJ8fyj3KCnqiHugUamm8d2ahxF6ZnJxUrLcUAFRv8XUP6mkdb2Ds38D2wbFDXpPwgHixSnwFvWhWgHfW5p",
  "key13": "5HDcjkMMLPk1W6Cuz1oqnChJRqmBaUSjFNzQDZnMFeTyf6VmtRRoqMKUh7FYFQNrjjSiVtm874PkerQ7WK8BWw1H",
  "key14": "216eRoEqNLiLptu8WJreggq1tLrJEo9vcn7TXbyxgtNHXMRPUPw9Y4UtkGjARkyTvVZcGkPmJuiqo6F5VHEB6Rwg",
  "key15": "vZs2k2VhVNKpRhg74NKyCSzy9s18FJFUipozbWmMafJdqqTxkrczPwo3arwePsPqdSYKttiR5LrdDGR7ZmyeUEt",
  "key16": "4Jc2EP82rqJnmAPs6gdi14w5nryrpGXSqin786PdMukBaicFUyqCT3GANhLSS9bL37hmouoShzZjasLkSg4Mxt38",
  "key17": "wmamktfQVB5FNFqBPWtwATdpN3Z3mabDvutFDWpibzLhWM6BPWFFQTEob22288WDvfumqtRnboXKKKkLDa8Myh3",
  "key18": "3crKd8egnmUq6tmrC4N2jcjTx1FSbdMAYDvbvLkFuKxiELKxGbS5Y6jh91b89bst3figxnqvr93F8vexRnBetTCc",
  "key19": "32h9SyjxEoo2T9fZTJvp32UcSXYRXaN5T7gokkJoyhkTv1oHdTRZjmyq6MuvMYNcmidTS96fJVEPqkhghT6S7ig7",
  "key20": "4Ws7GWZGjXJkMdFHu97v7nXJ9dU9BR1xk47RCWsmaNmB8FZ3V2k1JFmJX8ZZWA4Zqv4Lvxu2tXtDYBpYCg1my8xJ",
  "key21": "23yzy2ZnXQ5gJ4i8Ra7kHobQizSMUd1jX3MjxgM9radkmmBu68UR6vBaez8jBhq7gNV9f8huPFVgub4ARUzHL3Eu",
  "key22": "oQMQ8ceMmEcN5GCG569ZBg8V3cCDqLmZkwHYHcjRaCyUgaBDLtdZNxVxVbY71qBMy6SGHKoJ494urjq536A2WfA",
  "key23": "3TxTLnURNTb6ka8VCZQUnD9mUPhrfBxDTtuTahoJyDEGbJ4hcCyKFasSh2PXVCgD7c4zaQSo7EVXBK94LCzT1NZp",
  "key24": "oGxfXjchRMbvK2kE8gzvDJHtanZcAVrNk9tQYTLZ3zzDX9BxKDcWwmW3aQpxaB8HrK2JQBRPTQem6T35GFTCb3q",
  "key25": "2qNdLer99sfBgyHJkhDJMDhGRqUNp95rDYJaCxmk2fn2CYUQt2uJoM71RToDAcLanBurbkfEvM3YJRAVPktDj8Nj",
  "key26": "SXRJaTLYJm5fCoHTdquoYcWX8WAbnfax8HGeW3Wf6W874sUV8zaWS9Nb964NuhrRCxEM6s5yEZHLk9R75EXqSBR",
  "key27": "5b62RxTiFomjP3GV3yJZbfyCNrUTtRPwTojQAu35R95jxMXoaRePgoB78dSrt8mBJ3n5YK3t1NiPiXJQpADz8so",
  "key28": "2nhw3b3iAxoY39f7KZx2ysAcr4uAAYRk4UQYy1pMyAMURK2Ta5BcEzjquJQLniKgKinurZWjSVzxyBbjqhSVbtMC",
  "key29": "23hRqQJEy23n2Ugi8BmH61HYL7HfsMVbyawt39nVPpwiXfvTpKJpixNGxCnw7oyQJCTLpYjiXgaotMC4dX3cQL83",
  "key30": "2E2wtmMZ4Fz26nHBAHszT818x1RVBJqD7sFdL7Jim65UdbhPeTZpaxgB2GGvNs4EPvhV3dTuaixN8dii54MWWgGm",
  "key31": "2qzFjbjmkWjNhJhFNiKgQVjxFW6xrTrUqcf63XwTXTKwKqYrmFY8Yb3kJq9WJaFnQhfQy3gDppU7BF2APueQSydY",
  "key32": "4RRcFotNXMEqcifcggwYBQva11uD3LdZAXkjayq6BvRQo6cchkoXpu3JJThKQcEcb6GUiaz3M5Evbh3fqRfvtZaD",
  "key33": "4spkKjMdob3n74uibi9QBnXxSx1u4YJpUR5MBG5UPKn3AufMuTCNxehmS5H5nBSQH5CcDWJTtpfC7ggs7mLqQigZ",
  "key34": "3FCsX21kCmtgmhsYfCweAmFXuM42GkzLzQDzLxzux9g7p3amqn4hLVCH58FSuVf9iyjQRRDXRak3Pdkb3NBwefmR",
  "key35": "rZeBedm7DaaA6XhqqeQ5eg4g5sBqe9cGVaJ2C5zTTdNeSUvg4rp6Bp4dziLpmP9oJrhZ3wyuRBF4djmumAaqfSC",
  "key36": "4DY3Z8t2shriGxhby2NgGpJz6xXELfipBT2WL27sWhdBsrnmfXcAkiGMtQRKi6JLF6p7yknMr9EsFVNaHY7zTUwb",
  "key37": "Yp2xx3E8beiikuNCxMtqMozA4MaSAcrnh8q9EQvQR3PUBDc1FomXHAGyST1oUorsW71VtetWHxYrZqq4fidsNkN",
  "key38": "5WQ3VEMWn21yqeuxVSaeVYid87ft5NhQywbjaVeP4xGAN4sxaKB16hsjzG49shzjvovtfMiRFV9TLbckovnVzxLK",
  "key39": "3WqJaEcLsaz5rANR7cjKXACLKzLPoC9hpgUoStfFYLk7Bg4gqpQXh5jSzvsX5NUAqUvfiLn7nXo2HYtiratnZUEF",
  "key40": "3rmvHRNCCfVscQzYvd2FRqsaVL2fWoicso8S7XEhWmLkg1hJdSwKYQ6HPb4okBYEa8ChFkqwobNp1TbNoLqdZs2V",
  "key41": "47xY26Pub19QuZHhScjAtrVGSUEu1WhR9T3Q8aNUs9uHfJMb98RxWuMf9hN9W23mGoPaALfBR71ZE5zNpzfwdLJM",
  "key42": "3s9pLKqZudU8gWZtM9nuf2XVQy1DUf5im4myyDV3U4eWGv49hquQhUfsUGxh6bFsgKARTmX9ZTNQosQnj1NnogPk",
  "key43": "3skJM7i2h2JC9mf3t9onyQdBshgP8JE4dTA5rW2Stwbh6PL85RQ25BaUmM4b1aEERAN2kN1Z7q56H6QpABw78iuC",
  "key44": "2cZm5YSXwWaAUh4KkSJEARkLpTpqpzpn4HTHxYZoeYcJbA2mD8SaRTjJhVBo2CJ5xrEp4892SAT2Vd1LjsiWqV5m",
  "key45": "5SYUEZh8mv5rnze2sDP9YYdFRNcy4xo7c9Tmy316JVYw8XtoCJ3ChjS5hk8VPbCSbT1vgaQQxu4Mq2drQpABtQf"
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
