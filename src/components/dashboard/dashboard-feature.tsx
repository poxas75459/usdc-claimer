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
    "39wUN93dYNpDndbk2uVFCnTMULvaSSnVJqsidbHM9GV4X9EuNKKBeovK95FzaGmfxLcVK7HhvuVVCFJLRmFauW6F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KT4xcPHHf4bKAiEyF8zETTj2prq2uYxi6NBWGExrG4CLtR9xAsHsxbda6ezwWdLDBHVTwq4RuKdJUoC7By1N4D7",
  "key1": "3ZEcTCqeGzshr4YRkg78W5R6yTjT4mRhXHCyyD815w4nQj3zjsA4XLrJ22nuftCtWSbo5Xb2CZaZBaXqBotmh9MD",
  "key2": "GBtuQo46qNo3cjeZenAoh94m7dVrJFRQUciT2EJVA68tdEKbfzeXMSsT7JV5TW5ZQ3FKXwf3czBPSZk2vjGuFK1",
  "key3": "PTM5URQCFxKETCDRiUpUcGJvpbd75pz1BgwPn9vV2jzbLoP6KXYn6w1HHdTJG5DFLH5A6RD384Td5qPFaskKDQE",
  "key4": "4jc95s2nTyog1rjXKZ9kmWiXvPVeTMR18bTDUFFVKQL559FMwtTuKmXnC6D5Vh6FZ7tB9ZgVBVJatPLrWtw9u3UV",
  "key5": "5mZBKt4YNKRPGEMt8rP7pGsNqx9Noc6Ma99NZuXS8D8LoYfjt4gmBthoaGrKu4d9CukKkNJCXGXd1yFqgy7Ph9pj",
  "key6": "2rSuo9KacATuzSGe5wNwChZ73BgPx1cCrQ23SUU9xUXSEWWtWJJPHWoVjiwPkxNXzgsyd1ogVcevMcZVugDt52Vs",
  "key7": "25X4eJoRVhux117f7RtfMKPxLMFMcjWsymWQsa3mYmjsd8NBdaf19ZD9nPChp29z8HqYb3HRzws69Ee5fgb4Ar89",
  "key8": "3GcPNEoxNPrmoNEAE8XLexwMnM1ZwtF5VEwYAQtLcWNAvxHiLWTSxD4qftmfDgCcNbSvQDzjPHqoMZVyWNsXDjnd",
  "key9": "HjDXimd8aGxC3QsDoqzmg7BdDdhYYqUf5tfVc66Yix5PFX7oCxWpDF6TL8CQ9DSoQmfwdJ8feHehAJNncNSkJgY",
  "key10": "TUWAZWYawdpUXRzxwsJ1FUwYpj6cP7PiBbSnt45EExzEadNcGMUNhNq2XKAzKdUnYep5UhgVChUyDhPWN2PickQ",
  "key11": "2JCMfxTE1Xex9fGHrqQxXhdfPDjjhbnQYyM3Jc4CD7ACoSMG315RbsLPCHHioWwFQbnzqekMe8dhVLtC6m2SXdGJ",
  "key12": "2UmmcoxkfKSG3K61hwrhS9W8xLTq9ieSjgVoVr9XYvkkMywoPsoujo4drq5gCtZvpt57YXG2sa2XhLty7fkuaLrp",
  "key13": "HT9fXC9CzouCZ9Pq8LhY2BzSS93vbq9P32L2FoKA2RRbEt6YJQRDxy2PJCsMfJvE4A4pUiXF2CXLwkycQiRhdv3",
  "key14": "512joFUKggTXYobbtSAykWFebUq8ER5LbJWWpznhKUxz1bss2MuYL3jDYiTGA4P3BWvMSBRT5FnZ5PXG9wrgmGL2",
  "key15": "3895EyJsntHpHnK7pMN3kRoHjS5TPunNgUVbLfrGx9XPwuxGKcxspB3hAf4YrU16bPT3TXMpJ6duxjFiBApeP1T",
  "key16": "2CpeHpLPzmS61QJtUZwneEwvtkiJLvLLJauRSr9XTxG2X2mMcRBRPqNfw2pTLVPV2QmrB6SWLCHma3WYar6C7HYF",
  "key17": "2wNHebganpnffWKt6E6vmZsGbqxUdzdtKG79KbhK4m3iQ4JUNPZ8PLhsTLoPZYgmMviybmpSztnY2cg3ykV5W6cW",
  "key18": "3mYQM4fPHabf8h88TjQjiAhR2msTSRpC4YnCYVWfdaxeRa51JX8uyTEk2BkYdD6nS3RtAH3nVw6yLZh9GQ1FNGR5",
  "key19": "5KSfrwEN89iSFKmhmBHWBcSNAXcTYCeZWDzrz7yLkhoMwbkkGvg64AkxwNvTXxRKDZ8PdERMSuwy9wVjJwatT89j",
  "key20": "4rdZHGq77q3a7PjUBo1gTVvecnFS18QdxhobXPWQTSzb77paCwmRFqHCxRKgESJQGNVJZiaL3fPFRWTVQ6fHWYZW",
  "key21": "3FbgvRgi9FDtMCdmfcA2VabLZcdv5D7J5iD1icV5iR1dkuPTfe6Zp8bo1qY1CZwo6fMoCxSJJByWPjzoiiQqaok6",
  "key22": "5CJmoVmmPvVzsP5oiWFATfWgxz9678QXtAzNNHthyoazsDJc8DyULWqfvBAbKv6TFN4wjZg7cwaGZBxwMX7A5Evr",
  "key23": "4LZrwxh8q9QeYT6yQ6ExEHXLsVQVwxmUGb8WUZBTZyqWwSQ3v1Ep5MP6TxzHHV8au48iodJHoVThK5NC118DmFNH",
  "key24": "3H2XmDN97nF834tNvUgqVuiXC64UyK12avRDBVNDmdVHdx23rWjgnkWATJ4YMshqu7WNKp7uatBzTJb2DMm5A8r5",
  "key25": "3x35H3ZkTcgKLDTwUrLYcrXtG7LXwYvSfaCj8PyoKLqQTTKDR4p3ph8XGUGtmfpfhD1F8QPxFfFWeocmGSqJapKX",
  "key26": "3b9iGLQGtQmfbzR9xGPdz4eaNif4avLJu6UTCuYBxLcQkH6WcU3uDvNfwXTcJzyUFMVw4HC2R34esKWU5fQt45AB",
  "key27": "64LY4mVtBumx4QFCGKoeYWzi1mNgx9iRgpfrxEbm1e4u2sKWvrFmkaBBm9Es6VR42h8r4aya6F3fzFPYM1U8q87y",
  "key28": "4TJ3ieQS9rZ4ELwKc4QZrkzfjv3fcQcuXGe28xiU3i8GXzHvTyLnFyojrpCH4dUJ1R6TX82QTK6uVkoF12rDBLGv",
  "key29": "3M2BHv6JUd43rquxVjBRVXwABKScw7N51Jxuh2BkBw5bEeHF8GeTKvX7HeeXagznHv8M2jAjxK6Zg7trdESXpABK",
  "key30": "4fYMkKC2uZ8eK4BrGcSfoDuWvjwACvGzghe9h6FXAuLxm7yW6RiJhze82BV6Ned27n2Y9BBLxuf7Wjk5KfnmJuvn"
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
