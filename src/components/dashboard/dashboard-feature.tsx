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
    "4ktYeTUDEjwnr9kZ74nK5QNYESjFX5McFZ7sW4Ue5QMVtnPDE9r2Ct8PpKweoG3dZ3Ti8JUioKHF7XE3bcDxky6y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Ck9yg83NydU16HbjhD28uNuswWkYUanZTJESUBYPN7jeuiFCLVx76QhizgaRB8u6mX5eMy8ZdebTGJXLhn7AG9o",
  "key1": "4oZpuKKo2wcxFuXqcrZUP8FdiduzaXjmAKXubGoKgUz2WKxHXtMb4rYk2L7QgLp7bfAjFcc63mzTkozrxv2uPxPa",
  "key2": "5b3o5R5KMTn4eQYDJFw22fwpZmrndV1tss6e8YrcaPUWCyioB7UKnVxX3LLWS2Hc2HojapxLB4pY4DAzypgk2FFS",
  "key3": "3TRy8EM42rGqVYtE8Swb69aJFdEymzpJ9Tay96yb8FYVN1HiTdzTdwXTHG7eYUhJD1QKVSoRCGC7yYo9S2eGSMtk",
  "key4": "3yE4HgEP9r7JszGeRLCK4r7xyaU5Tg7DerSbo5AnXMVY9fDszDvm7B48taNEq4YtJpEHKzo2bxDe7jHCfv6JQqtz",
  "key5": "HtbBWFTyt6VPv1QYuEJvEBJcqvxs7NZDtnC58TnAoqLGAw9J3j6vpcQh1MaEsqzw5R2qKtkRarvHp9vH2DEFEA4",
  "key6": "67LXRWasyJtG4bYWbhQn6kxerZQMp8g4MFZtZcmB4Lu2hY2RcMv75oKi4uvEkzPFM9RFrw78hTofgygKHdRu1Umu",
  "key7": "4njCuJm6gSNeS9wKZtNYA3FKRZgVbGZfETHoEM4RNGLwNb1LNeajT2FrnGtE2roQWBbuECgKQsm1BeiWykkSc35P",
  "key8": "K232VVcHVAzCqa2CmDcegSoLnsqUh1LuaWLuEVdx59er4nwqihcYnBXzm5ZvxeEhR3q4BJ6jH3b4hkta43iW3QQ",
  "key9": "392f8ZiM9b8gATCGVpMZbsbnMA9LU1bDtEsRns4GA2Bm2jCvS17NqbhKTrssqLHW1TFt2YSYqgjnRsjBLxshSZPs",
  "key10": "3CdmDPGmhHdBW2zUmWaRdF7WWtmFmY9QHwwJmX6pEfV8iAk2tqcoSgzFocLMiJde46LDY4F12UkUKTXvnm55JsLa",
  "key11": "3XUwark6jPH1UZvvECUjEoAk2phcGQtdewRoRWAV2zg3pSohjDhhHfnbNE8pPs4Y2QL6m9qW89DmZsmUFbexmF4x",
  "key12": "5FQcrho5fW3n7zUwArKh3Cb8Ki6kjj96LTgKv3uk16KP8fMgaa5FwuvfsH8UQUVEKStehR6dSqVmmidhVT6RGxbS",
  "key13": "3AubLEU9WpNqKTTsprYfkN9SkJhNLFPuBMt2A1bZPiKNQ8UUWZqkHcPdBEXoK8sCzitYydj3TZdka8gnZaRLw5su",
  "key14": "pEfrYxjQZ5qT7QVwwDurX4kaiQUU6EZwa2kJ8vv9X52KPsVs8bSqL8RsxPJsgtHSs2G4m4obsKP88A8ZzGwpFbE",
  "key15": "4eB17rKQMnRKUZRQ2vRxMxThbNDtvWZVH2E82BH6oAUNuLihdBtCLSCJKBbw96FkamS4rYUuToPqCwtveTymBBmX",
  "key16": "2P2qUdRZBhs4esLmAHaFioTLKXfEpFuDyGCPUBu2KqnNBU44AgWNX9hKCaLsJocRnGr5qWFjb4CxFW4iHsKsU7Wb",
  "key17": "2AiTqMnM9Jah3tgAvYcqF3HhruA7a7pBoQuFx37y2AxLi9AcsqzS54hAp2iea51eeL8mP6Uv7TB5vMce4wRCZTiU",
  "key18": "6rQ5aKtVFaheP1qUHJJgdhQwJAAkmmmzMPEdCbeuFCb8AWfcFU7uDwpwEfhG3ZYEmEAetFpWcNZ5rn1axBQmv5X",
  "key19": "oCUQ34uGa9xHHvaPfnhLoWWgjT9iK3mb89NTttntq8sAqUL4EASozWA7SNxnBDkkSQxx7wJFrF2VJ5GVeYDtKQi",
  "key20": "38FhgJpR9Sp6yPQ3UnoDoM2XSbSkc2q5S1nf5TnbAXhiTfSNMwXzW8qiTzBKhCmpg37Hd4ZnxVLsDb9yrF9eHpxp",
  "key21": "5pvdd9ZkwaPWynVZwwLP1zoVEQ6TEtumJ1ujveLYFE3dikTAVNNM2ZcfzhoLeQNT2nAsFeFFq838UHEpb5TMKQkZ",
  "key22": "5zW3fNYky5E4fPhXLq5JS2i6QLPa1KM7kjtAKeLmvXTpJfgdsK6f6WxCNmMB8X82cged93MegnB8ok78nqr3XMrg",
  "key23": "3XuwmRLGB5z4PYuzXPnb6H8KU23MXUSUGUUYDayLvUoZpjMB8HFzC8kzf6dczQXa9yeiaFTrhjRqrcCzF38oL798",
  "key24": "3bzuAXzUT3UKUw8UzAVAej2BinxErLJVBsJZ87YJyLuJhEbADTKvXtKzENLYAMo7qN1H3SAarTgb9uRaKiCTycob",
  "key25": "mA2GPBf99zrcAU6aqr51VFnzq11c57EpXP9Mm9gVcUKLZFaicfipjRZxA9oj14TqKrh4GSrSnepXN8fQdx6SLwF",
  "key26": "3scx1FVLms8U87yh4QLeWUkx2h9h64bZWTwHrRiQMVxseU7wRA4Cu46ThEVwyAp4rAnFHBjNnc2DaKLdhyvjD2iA",
  "key27": "LTRqQZcofWZRoy1VVND27JAjL6xw4EmCcPjdQsZnXSmtszVP823AjrcNjGajxvxhWzTu4thd1UtesbPghQdKUrH",
  "key28": "4PPoXzdhJcyQZkysgKsPS4f9Pyf2Xj486GDDqvgZRWWD3G46jGFpaEpFxy2NGMVRDN5FYT6bQSwWTJ143nbjMFgt",
  "key29": "35PcDdyHSUe9kjQtgGh2Nk64Lqg2H7TbezYHLCgYFTJDCJjYPnvn6drXp5U6nMuK4BjTdTFWzuKJJcFFpSztJCuW",
  "key30": "4qsKSP8r2DBrtzDs7Hrq8RcPjYSHiJ6G871ncupH17RriL5gp4Ra89JJtZnCvDkwQv3sDB1nijWHoyUmHx3bLX2y",
  "key31": "2aGYfojZ1iKCUgLLeedJvUCARiw286vnghHijFUuLQ69uDcnaLsGK3rNf3R6rqChcfZahRKkeHcqE3XA3yRRiTq2"
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
