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
    "kkLnJdKcYQVod9FV61AdEaQMpyQQjNGV8eBbvizJhHSeFmRXNX5yJYTyXKLcSr5rrAU8cG6H6ySjD3QsfJ1ZGzv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "321dDZLd7FbjRQwqCCQ93iGRJsiFPpcfQt1kyN25S6UzMnBXZwNjKmUWoXjV17St8XThsgdAmHb1DG5ZM83EYMTG",
  "key1": "5249qdiQuAskptsrsdbMpGfEs6X2pdLF67vSAsFmdGKmq4H3vbLF9kpDcggiaZXmAYu1ZmU7kvjG6vrL29TobHW2",
  "key2": "3adx4DCu9dLqAbt2ZbbxuQmRB4Xsq613r7qFxD1Sv5o4Ykj4DD5ZrveKecpRfe4DB4S8LCk7Hvu9hAoubtA1gbo5",
  "key3": "5SdiEnwhfwditPwkyD1eRG2BEAUynq3LANk3muqhYWyYBqVVHzhehtcWv4tF4uv5dMKHMWhktRWnFYDF3EakxKLr",
  "key4": "2ThXLPqQdvQ44sbSaTuET63zkZNVfbCKf7W7a2DmZaTEmwyxLAzjPngHzUg6oaMw9Vp9scFdgHG7em3Uwr5RKTVy",
  "key5": "4UF58pQNPLjgBPFd8nRJHidkx2qcpv7t54tnWuAgyzGaRxS455URy5VeX8KUM7z65aKxR9n5n74sMgKLz5NsAw9m",
  "key6": "4w8Bcq1KNWwn71L9gHyH7MgyfdUTbFsdpzppU7csoTTu7GhXBCz6rxUDKBEPM7jjVoybF5WGtXrPK7kiVF774fZZ",
  "key7": "3hBHkS2qBekkiizT3FGezRJML2uZFevPiA3toXGLgVgsCXSDS5b8StKcejRM5tgzUbBrtmaRWfKrS6w7mbGTV7ao",
  "key8": "jEmKrucCnSqZBt3nZox4ZtfLbXb2iWMpoKZqsZMwnReH96jSqH2bpMKXtoRHGH1TBrvjPmRQQ3dAFt8oxGDdcS3",
  "key9": "3LTgRwZEBenBycXYcCYJym2qgq3kWuhmDzbgkP1i2oLSvtKCgHJqhNvy9AXufPXBdKMAk2EFauC97x8swaABJyCb",
  "key10": "zYS6DEtEP9KGYAqGDjiXm8avJbfRWsTcqgTTP91pgYJL7u5UEBRVXAD65tTm2YcZDLSdLEz7DNeTQQcvSGMg8RU",
  "key11": "4ZenHBU3CydA9kfVwt7YbcRjZKfomVkDMd2SRgD4svCxvjPvkwLJcLaNaG5wjUmoBRW5tFT5AYJbiTwA3E8H7hfe",
  "key12": "4XVSCYLUtKCiXDKtkxBBzxvG7wq9nBpnAhrBKVY1BkJgiWnTxWZBSJZHPKCNpKzLSf4qeCcCWJdePUfRjMbRtNVv",
  "key13": "5SA73Kdbt2KyyW9NrZ8tz3EwC7zL7oY6cWnWY6vha4digfoSCAvyn4pf61i2ZQyybesZhqkTKo8uJ7A7AWaeJA78",
  "key14": "2nVYcs9p8R32ADyYb2rwNCxAuaptaxKy2Nfn6gUeN1AUDb7CfxznnUyXHTuWpGUQVG6Z8wh6y8ZYK7K7gh7uS9zk",
  "key15": "fuad7JSLrpzzdjUY1vdK3XzxCRfgDouPztHhFFFLj8HdggRDmpu1v7K2Vi7ztsLgR248hV7JF92f2dMCYgXnuGe",
  "key16": "2Jf4TjjtYksZ1JgoSprcYWiQ7AfjnoW8t3oydYiV9axhVKzi7egsshRA65auhd14t4LCs4NceobeWgZ29rqbCKAh",
  "key17": "4qq73dwUM3yCsEQKnnVTcns9WeYkuA49YLSHFPY9QDxebnHMp5eMbQ8bFF8qdbcj2bgWjAJPCVxwAdA2r35NYZCh",
  "key18": "5ggQ23xWNvh5LGVwn96oGujCKin5mc9xkjEqE561ESLGM4cmYn7qbnMrCksrxeADeAFe9YDGiXs12xhtMro6HsXj",
  "key19": "34pLkr64tbmtWzWb7MXZMPKNXAPHqpQMsmvAVMRx7YQEpgqinUPtjoxFf3CF6HqVv5WZysAKVwzQZYpMTEuGMDzX",
  "key20": "huR6aPin32v6S17uXkcnz7LQiEjwDHX2PPNXEFTatuXr4BRLbh5ShqHCDqJKZFs3DCyAhzPyYzCMiLfTBykNWTy",
  "key21": "KssV4KFjgqmDMdsUzSAh1vHgCchVuh6eAFR6u4LH8VHMzQ9pHds2FHZC74AiFa13yXggbuNkT6etqC4hWAVap49",
  "key22": "62G3jE5qrKTjEjko9EJET7gS6bNPLfUQaP38ik3hjaF3XPjynjF7DW659iByt2RijYGoReSTxAF11DWo412qsg7K",
  "key23": "2ANRhusvgYCAXTb2tCcnoqVqJS5WsBaKHgVpRR2TSdeYP7JxAnwkrSchuaGsUPbovPopSSWAHLmNs2umGfkgwWVa",
  "key24": "2Y4YMocNtrivGBcptSFrRHdA1MYKAbqFicjjF5k5tqH3kuoMhgLKrgxXiNUSrdEd4RXoNBr1EYThhBz3xCXNh9AN",
  "key25": "2eS17fWxU66oFnCqVs7mbdCk9sJXP5xUkzfGXxWTLEjnV1Z8Dj2hZUUyJhPMTL44Q9Q6m7P4wJxt7PUrVoRM8ktW",
  "key26": "5qV6WBmtr7D4S6s8m6R6nuPtEvyKXnmdiuvsC2HCLYF6Qw96btRi8xkvpewc3wahYAUvLpCxyAkuC4jNQJHoaWvt",
  "key27": "5q6DSqseg5zN9bj255MY4DjB3fMEJs8Tv31Z9TCgS1HbgYnjhszvwcpGnXwdAx3evznvAdhaPvX2xdsW8tLg5LD7",
  "key28": "5r1xy4Ey6CMC4ZzqZ44zKBvrDUESVh427uyJtbqv7ue5Y72woBgqgRfLj4cEWNssiqCLZdJj6uiU9RmSAtvfxofx",
  "key29": "3ZGVuE8eA8CFzbKuN5GFJqpP1up5utVCL9ZkDWbjt5N6yHYrcg5hW1fADKKjz8rmNqsSZwQVWeKXCfSoCDpbTmq",
  "key30": "43DGR46VDkJzfUawnVBAkFZE4xEz6Z4qTneqtw4zGoWz53uWbZvfBN1JWDZZtXo8Qqv5wHKvNSUif5Tk5zFzc2WZ",
  "key31": "2JQ6pZ7WvsLDc8byr5uGN7ksv2u9g59c3AjyPwFxymCXx5L47NvGTDHbfxMbequhB2BMqKhTX88jskU4DCFFcWaZ",
  "key32": "5bCmJJ6iJmG1Eu9KRYP6FChJfADw1C3oj3vZNi5hgJooNSo55UDAAdFkRuHH6Npeu2YBHZtEtfsfgf8Ph7jg1X5E",
  "key33": "ofSzpTLVn6zLhpet521Wz62QM3NBgiW56TaRo5xvcnwUZ41NkX9pNBnGMe8mnbZDiPeGv9GnDNtpyRpeLXtKLTf",
  "key34": "2E7GdzVRNs3Mhq5S8LvLWwzwTDthQf6fs8rQSnhLgyfWNdwPaFfTKvik6SfBzMRgBJMMCpDZYSonwzWePL83WBHb",
  "key35": "5dUhKRWxNttkdn8vMn3VSPHaTRSxbXVjjahuc6u5Jekqh1yvAAMpEY31yko51mnJHwcPLuDgZ2bEeoTbfLSCd2pT",
  "key36": "3rTMmoQ4ZKsCA5zRK6F71PpD64kwR7WJ5X7nZqP1R6XSkBjPoZs5tf5XhSnjRxX82aXsikgBfE4ofPdjgcqvsd4L"
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
