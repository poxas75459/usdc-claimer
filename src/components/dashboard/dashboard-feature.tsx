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
    "PvU46qcnBey7WTDb2ai2np6UeUDQz2XEVb3uCEemyhvb4Po8PRfXQfMQpBs9GX3FHLF6AqbdqMvon8CnNFXtkTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YYDaYyKTXHfMZzSETcT9hAgAMuoSJ7C77acqMMMfx8BUpY6YEH25rTFFda9ecD8Ezzv2wBx9gYg7ifLUsuQgvbi",
  "key1": "imgrrxHuVdtyjRKjF1zxywUjPh8Qrp1WrL95cewyFESJy6RbPxdksxgdywoqWAxwNnP7MeFD4BswxqFvmjGDCbA",
  "key2": "3cv3zW5jgoLR6YX3zfTp5YY1T36YohMbT7U7QAjrQz2uEqjRnbXjCZD4kRKrPjy4YvS6EkpKF5CXpp56t85D43HN",
  "key3": "4jHLub5LtYuaZGWcEt15LhB2NzynSsG72A7gU2D7AuuR4qpMrQjA999FpStaZndJHwFBiNdGbQLW7RUwJG7p8une",
  "key4": "5TtVaUoC8Nm8yobDqM21zdUcsiGdZU6rnpzyTXH5BADUgwzvPwxLszqVVB5wSRAP1XcfGvaAEvi3WCQidi9Ep7vq",
  "key5": "34cg9d1DfH8wuXJdqiRZnminTCQjFaK5mpD66eSAfyFBBBEBgc5cao44XExbmDYJ3eoYLCZJXiM2rAXEq5S49Wh9",
  "key6": "5NWNPMoGatJzw2kZvJCYe2XdRFGze5XGZjnzvrxKtkZqK2sjtoWyMc37qyFWWvQdmMRpsKjvU51YXH2ckRwBmSJW",
  "key7": "5PPH2z7YXvjzkPJXYsuuWaEvoLCGPfB3fFuCHv6ATJQNCp3k4iYNfWvepNwriuP54Ugk4pB1JZUpNCGJtcgBLvBd",
  "key8": "2LGywWPSvaqjuACmtRszy9UAu838NaJdFvFFFhpHgeMC3KmdJf1WpxmGnACfKGTds8yqkYNBhHLmLvuCcWk1DQ2c",
  "key9": "2mvUrjvC7tgE9YwhbU7XxxBERT2Dj6hRvytYEGqVEpC7N1y2uVurevGbtfFj1MWBYKvRXofyhQZuXJLrRXeJMibn",
  "key10": "fjAeSRqvYFBqofQbDzfe6Z4EFc6AV6L3iHKjmdT3cwo17hTL3VfL3UzoFCzFDVuooiMushVAp2S5WzodSwVMwgy",
  "key11": "5kDaoSaUUgdwW16xynSYoPTKfozNVrDjhz2UekFp3oEV4B1C5vJV1WegPmquiLtkhg4zGZg24qimT6SmJ5sa2cwt",
  "key12": "3nqr27bpK2MFWhmcPjy6bq6xya5aP2h5QpSzkux6JmzFEvCEWrNcqeKLW4BvRbFHHLqGhbtKYmntBwgtZPrzbQ39",
  "key13": "5KH9v1gvyoBv1xA4nJxdF4wjJ5zD76xut3RgmDTSazgPoRsK6B1ABdqeD76BbEskNgvV6ygzEzgfAsopoqD9m1RF",
  "key14": "5mFP5ckfyyhFMoKeGT6CeMhrt1ykFfaR9vG53K1YEX4mqaQ6Qo12wRs9aK5wZGvJeyeR7iPi4jqSb4Y6LxC7pPjk",
  "key15": "5mKU7LEJTT7Nd155MXyKDJAe2Fya6nYTSHtkDBHVWbCJbUYwQfeoBzoCniLhtF6LT67r7JvxaHJPZyn8y9D5sgDh",
  "key16": "2bskJuoViko9pBiYWtV41qh9ApEA5WCMdQZDFpHYfbpyrMJgtGrW6RmVXN9Zc2ZTxf5a8gRp5SkfUm8zwqHKYoV",
  "key17": "3f9T4p2aHbyRSGju8NwvNcEhq3V993PDkD9YuCa3JCFpY8ThChVMWyRXf2YnbeaX2DGXmo6XBe212XaYwN9NMGnt",
  "key18": "29c3kSQVBNc6iPGCBDvYZ6YPQU7xtegijANiWuZUYSnLZTfvjz6hXekub3hMzGrENT2Nb6MMexqJ3cksu9GwvCUX",
  "key19": "2d9moxDnsn8KY8cZJUuepunj8Aczmyk3ps7GCW1Y9szAHsKTLfopyLpxupDrwWZ4f7uAnj5Te9ndEyRBPM557mTY",
  "key20": "36e9Y82L64d2z9C9XddPtxDkq49wmFSBhAdhtUUYfVpYyVHPW5xthfcnNe3a5HziPvo7fKx154gx8DBWHgSnz41e",
  "key21": "2LsEokj8CwnoRddpn9oKVHDUAHx15joy7KBqBUBmwfJ2vMfQE2orUkRwc3jxameZHezH3E5ydWimd38mxWsgvoik",
  "key22": "8amuMMrEpdoa5uDojmQnDPj2usT7kxEs9vwtn257VAyPodTY3bJXSV29bpLn6fGbUiSFkiwqTRyT3FcjXMzaabY",
  "key23": "3S8RYxpvgsVVmkMdgqQMnjTfTjZipf4GhAbZM1FoCsD4YApmwVgwGefKQSe6jrHz95N2zMkESzPxLa6Ti97TJXdT",
  "key24": "2mpzxqZrA8MT6FXZWR9dZpJCvVa52G7Hdeu8WJTLPvGthpSJSgFrW9CACBzWmwZwsAbr2Jigg9zMEWNomPDe7YuC",
  "key25": "2wvkuUbTfsRWECMHHeKNuzvWLb67fp2CL6tdKAsFUbKLV2tnQuCWQfB3crbtvZdh4sbEzRS87hUXGrsDeXhx1YGP",
  "key26": "4YT6Rr2kQFb9GJ48B2NGNCMDbguXCPjfU3S3BXmk4ypmn76GfKynYqiT1iQNvfdbDH9HtqjAEXW984R5RYJNWq8h"
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
