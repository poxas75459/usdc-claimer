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
    "473T8S3XFe4QffsW1feWKwKijFq7eEUYyegBc3wGiNDnbf9w6Y1oGgkGfdsYkq4E2gSPVkEnZs7Rt42TXFMCst5u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pRx4L92fbBq3WMNyTgWpdV94jNSStAXjMC2NEPdJECVQtvik9VXKzMTwcXwkXge4ScxJwPJfZxrwwtH2Lrt7fLf",
  "key1": "2dDz3auvdcJb5URTdYfrnAC2KNzZ3dwwhYC9GKzpv65wgx4hGeVHxkL7LPVeBm3PSi4vJfhcWHkVbULjeR6pcSjj",
  "key2": "4yMTijirYpP19KHY9rTktnkEn5nxQyWv8ZDmJHzVVnzBDixj5V9ypH7A1cKdcHVxGwyqjz2LWTCHV9qgQ74Npdwj",
  "key3": "4fN3ouNC5c9QxNexC6GYtG1BcrP1mJ2LCipU43MpnWXuZ9CLWADUEswMA8i6aSNJXwr4Te3giRsN5tKKryVFnyzF",
  "key4": "3PcriAq4UWr9cx31cjAsFxufXrnKsw7xycMfWmWoaXY5rV6FzxGgTqzw8kJxPkHfcQaMqRgwp8d3PjNGETgEhEjA",
  "key5": "2m47pxYT2KUdPywSJ9NR6S7RhEdkBeVi2UnCbKtK935PaJnqWDs9r9S7K9WqGJpJ6gbgYCEcREz6f2K8qB3wYETW",
  "key6": "4FtqwwobuuZ4SLeiQ9SmLNswJwCwu7nc1qWpzXFbHEzspde5cKkDGXQKpZFF39diEaN9b7n9GFLCuA2QDMJcxoz",
  "key7": "5qjHmUoMP3ZNgpMbkfrcyQqJA3dhcmv3JnUxQQkLTY3XxJoNN7STuCc5RLvpam4Swc8UxVCqRPXU6kacRHU2A12L",
  "key8": "5VT81Ds738GLjUhsqzVq7QxWgzFt9UiCxccYC7hrUqxRtdeMVJwLR3gVvxe7zXLJxKFePQ4qMqAEsfbaG5Tvhfya",
  "key9": "5pud4gjpEVdAZdxsxuu8oUV8ESh3dPLL5njX6vDCptHqpm4Xv7xzBNDFL6tXsBLnvRgNfjakLxDqK2tkmbfQ9SuK",
  "key10": "4bpX7TVB8LenWzmYmFDZHyA8WViQxuvCuhcmWQenHspKA5Dc8eqWtxGqSkHAuk8eyoGsPADS8MxXEnDaspcWfwWb",
  "key11": "3vB1F1q1vP9PH7kvzFGXjS9sKzEqzXUTiKmsFneerCnmok3sWWfsH5ihGwosMCmoc56F6ZooiQCtW8JX28FKunBp",
  "key12": "2S6xs8zwhZqNTmXjwqxLNXcyRB1pQCV36JPPooC9MZxtrEncHufmondX4487tL9ezcfw12Nkfraqx86AEKRm6igr",
  "key13": "kV6HjrgLkCJpUjZojR8a7QB5sHnVCcBAJ1eVXHuKQDnZyrnWXbqY1okiT9da4N46CgDJZc3dtNnbDUP7RpwnMib",
  "key14": "R4PUzoenvKfFBLbPtvjjBSKD3KXxejCr8Dfzh8As7xe3JLCEvgxQCMubLK33ULmrBp8to2TukeRJXP6LiuZpBm6",
  "key15": "2JFSpjQeccuFmjmciK6jPjSKxKUvJ1WsLKhFDgg5RGkziSMqzWnh63qZ6btuDTNgQuHNFaz5kPSZmNUg1GC2XDEb",
  "key16": "3TimBnN2ttuYJxqLDN2Js5tCfyTKsPhaMnBiteUGE1LAVEmiuZQmu3GhPDHaup8nnbdu2J2ir3uZPRmxWjGWPGMc",
  "key17": "2r3trFhs69s7jSrUFaQUxGKZiCuZhkkouXYFAuCXZXkzj9R5EiA3W5b9PSELJxR2kUgy6j4uXwnezmJGeCfxqANi",
  "key18": "43abyU5iSjTqT6bgs48ygUucPUeYZufatzL8kVhBQVg31VY84yAC3ys9RvxNjsh22j6JEb1QM5LpagVyqDaq5owQ",
  "key19": "4gR7xg1k8TkbVbmLcfCZ3RYNmMsfjv3kfDJHsuo9WrRcN523NqLMET8NfbtipuP6tSy5X5vbjcYM6Y6rzLYxZvma",
  "key20": "3yCKDpEyhqn7Kq3TzXCEHLUbUexU6bR2Szkis9i23zGjfxbzG5JPUvz1G7Z3PE92s8zZSXAQTyzrFWG6NrkbGvCz",
  "key21": "72qfKxcbxLr5TkkWCkmEZpwmRAp7pTniZTfLSqRVdLhsrPhhVp2Hin6X2R7S5E1HoesV4fsis5RmzDTR4suopED",
  "key22": "343bR7UydsfnMzBFi8iPy7EzpAWbtePwvYQ1y4zjBueyVkDSD73VkrnjsiJNPkGSYXsbz6gDYd7torHeUXpmc1Dy",
  "key23": "4GrD1ceCoy2EfY5XgPc6V2di51kuzWX84EmczskRaTSzxp5sFtVoVes9pD8Fv18mq6DBKyEDA9ChBmnfeboBTJ1i",
  "key24": "3W2AvzxLwDd7u6JhYBV3nChG1vEmv63zqTwRymYAi7yzLwovRwny6oArjzJnEtqKaEvU5TsfP3wFXHSLHSU9Rv9p",
  "key25": "6413STrFsuwjXdceNdobZgCrJyFB5RXQ5FuVi8RxKSRuXLhLs4MyC93ndW7cExGSH2K12Tf1qsfTzKYAdyyb41Jo",
  "key26": "3BYpxr92zH4dNXzLqqfTNxMhbxWr2EpG2gZayuujoLFXkPnvCKrgvNLt8jBsg2edqs8kcpNxu1Rds74Mr8MehRT6",
  "key27": "3qqud5LQnhs8DSoiTdbJPyq6dnCTLB5ATjwamX7z26dMfuUJ8Ui3T6CRqbdgZrguL9rA18qTaXF7RxiG1uw4kKcu",
  "key28": "z7BEdq5rWrxrEVHMzszMf3aA2Fcy6o8C898YNxfisH3BGChHzDQE9TJNG37uMVci5zBPoT3PdFjJfZW27uQaxav",
  "key29": "31882pT1u33KjmaSfdBjCxYHb8qqMTaEm9eWjY2fwqU6azTUoqyV8HwAHrKEnGfk9zzsSFDNKuk3F4HWzT7fpi6v",
  "key30": "5UhRCNUXZFStUGPMcYaWqxedN3ZjxB6M9FuqrbmvHr4dqVBArGhDJZTQZZSQczi2oYPY4QXREbq2RJz4wB2wKgBr",
  "key31": "4QRkZ2X4uk9dmJpqKB6QQD2QaWfrjaNwiFoiPbq6HP3fTdjQvfyDMo2BMjom63XYuadkvAp9uSRht4PS6hg3XFmF",
  "key32": "4LaqZ1aEb5xsmMZSBaMgqrtDqnBex9qaFuuB2DMicTRtTzYY4jAD5aqbX4VMVigJYcQesArLAyfQi8gya2x1xHTm",
  "key33": "4s5x8ztFJudApthxK96a6UhAWRGrUQqEzu2o2YryuiAcM7RepC9AmwEHvWCGUMgsbD21q9o5FNKzUapXkMzd1ScG",
  "key34": "3R77gs4Zq9PhG2cStxa1ZFaZjabMjP5LozMTQYc24PBqA32QkMacMz5QB9PKxQM69jX3wDgb9xrX5XLuZhGuKLAy",
  "key35": "33gNEpPTtnPs3aspEpxBi7K9gqhYXGTv4yVdxvSEZNZ7Zv44ftJjEpbGQZnQgFwT9rehWcFG5TRUd9nFDi2ynAqW",
  "key36": "aATeN7TEHqqUmNXnrnouX9bXf7KXfQDcbWxmHR41dmivMMhQT3Sx8oknhBYXy6cdb5KnBokhLEpcAtTibHUJkQL",
  "key37": "4jG86xHf1738RWYqFbseB2Vy8WPXaRibeQhFNfVmRUnL9Nx6Fy9HJQXsDvcLSub5uuYzaZ7HJ1JV7XcsQLsSM3zN",
  "key38": "3z9shXK1JGQfAHDpr4e7EEbDu7ogoqZArexNAamfPaXJsiFQhLkxpHGFthqYXd2D6Wf3rpnQkDnwkn92yvXBfVW4",
  "key39": "2yZSDnpc455jsk1ct1ReWGL3XF9uBrD5z6n8uTM1aTzVUrHib9WPE3xAb44dmpxkdRM12YDkdwgDAUxSxjDU4cza",
  "key40": "2UXKsvr2EHzLH38cwZztHa3SGK9m42Z6wmguvAkLDcDwEXcv66TEkMTphEyjiYFXbQfsEp97eVmaht4ESn95ALxf",
  "key41": "4HNXQzJ5XhnxteRRoJqcBAncJt2cRZHrgBq1CPMYKcESvPLn2MokFGsXRan9SxyVdpodAqhdj9pRBx8WiKpX9tmj",
  "key42": "5MJzyWeBuHt49Nqg3ppDD2qfZo8R4JEGgRYRkMpsDCUFvVoqGjKgB5yuQ8xrtZbpbu9kjAJSARYxfiGrMdHYa3WB",
  "key43": "3DtuBzU8g6BuaDZgSV4J9oPVBhfakm6SMZP2BDNQGUbj4r74SUAXmbS9LS7cSyRDhH2gW2SVCEF9j46f2SNv7UFe"
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
