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
    "4hDysve5xj4X5uSsMwAJ2dM61Q1F6L6J4UHnsFARRVe2qDi72fuVR31tgD8EyGSALB9w6pdDsgS2WoJEEFVJtbk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "331FjFdyH22Pda7f1577kjVpmshoRPPLg6F3vkhgUSh8EvgbKNUPuL4u9pJxqL4RoA5TckUsChdpSdvCjfg3Aniw",
  "key1": "4odJtJoKciJyLhENDEPUew3yjWYiV52Dox3XB7uy8zaFpVDZj5XYp91th2xWSrbmELVq9BfMmj3qos1F99pFCFQX",
  "key2": "5jgHYh1aFmkzUqbAH3CGhGGufJWSsgjNkgwUmQ5xywvuFaD8YtPSsYeBhQWf6qmY8rQsxaLtaYtFh39dUe8dLQu4",
  "key3": "4M81JF7gtYzXyAVSHV4pc2XgHVA99nwLfayaZQv6shCARryJB2PsBdJw27DWiidNsxDwDBgYqY2hTQjxrwCUdCUD",
  "key4": "5AS2mmZkf7HKH3HxawCEw7jbrA33PP4ffracKb31DyUvkxCJHjYVDHmvRAjNaxwMfJL2Qp8tDzJgP5vReVbj6brt",
  "key5": "54s7XLaADTby2hB9pn5Ex1nBbvku2NqbB5WoyVHVtxk53PDm8C8FYjyLxeFHf4FQiyxuhN9Z4QP4TFFaBh72GU4b",
  "key6": "2nJ8D3CZ6AnDoesqYR4UuRTCuDZy4zXDTNvr5RNf2EwrU2BdqGTHUgJ3zzhu1SyTdhayeYuqAeHRSHK4xKELSYWR",
  "key7": "4Ch3ziqHSxvYNN2WQ2Wp4gN2qqa8WTsxQDrBtbMFXbZedzTfsT2zHo81VLjzNp2m4p2siDUApEgxQVUs6zTPZnNf",
  "key8": "3DzJVAPQVC9j37FTuo586Y4matZMG4dFBiMA77MhvUmtqM6sYNUemDpEQeGN5yQaicHCBkE9juhyaNoDLPzhPhss",
  "key9": "52sJzjc8RWD3bnkh6xYyhuyykPRZd64ytRbWmdF1BdcMzH84TTo4LkAnrYFpQWUs1U2GWEu6jiMjseMragQPMNjW",
  "key10": "WkTrkeujyMd7vMr5o4ZBvyoGL4LgyzhfAMojVzB6eDvRERRhagtcjUTWhgKiatTyNsFYqrUmvWMDRQG1huiodxB",
  "key11": "2ZTKv1xAvSSN1ARQw8b92cPdgFZKAuamfYPzFD7xeFqYicwWf7QbhTv4Prd8kYpKr2kKdbodGAekEfWhH8kam14B",
  "key12": "2xXLCqcyexMjW7LMNBYb5SMNysPpQBpctpSARzAfwfJPECf6zqyzEw56WcwB4954AL2QrhypyJs5DTSFNrrAJMcZ",
  "key13": "5JF1XX3pM3UYCUzhR3Zs8W4SmMkytBUD7SxVQgCXHmsihzvVoyQek6Ycwe3oiAEpfNvyy7GE3yiKvszbFUuQgDKF",
  "key14": "a8TJoCE1UTzEmKNLWGuu7KG7LtEMGbtBf7cPBw6goDg3YUEinWsU91jcRtiiesAkHvFV5TQatPijweLZfKtJLRQ",
  "key15": "4yB78R183bGwkWn5YVarjS6om3dxvJfrmcyLLTcbTkWgHWcVmX4JKyUAbbxWhxEAu7a59XhD5LLudLfn7ZKXu8i",
  "key16": "4sF1mDdtPBL2ahoxR9kyLpiizxGwCo2j5WpDmuNYBrDaznKkWErnqVFVj9W51ZJ4jpBCowjiQFvSdR6m8N8L5JdE",
  "key17": "2DFwsKuALyxdnaRVeLqzHuDDGEWXhnZdXKFJwvZZsUMD5suErPvTokKxjcB6ZnvpJWiNL6qQYVFLheDEZwoXs2sC",
  "key18": "3vctxG9XDKuMVW8PhojG76omzW1K8KatM8h9rCidbfc52JRYg4uVyrjZXPJQFNoQKvaozZAUoqSTCadTuGdbMKfP",
  "key19": "5sKa4dq8vVi6KU2busN3rvbWvuyKQmtvHaLWA8hEmtyJXXo2972eAPvkuaLDsPRaLYCZgv6WLWCDwLTSmfNL9iJ1",
  "key20": "2RpPjzUvfMPB4djohRtuPLnwSSZANDezfP2MrgX7oJLBpxyZ7GsHsxbLu24ccbCsYuoMV9ZqBB4UGF95Bb6sZELX",
  "key21": "5kNMBB49ApKBxkxcC3ShcM7zWY4AhhRen9WvNdyd25raqQV6CBAE5LQsyesEuQaDawGkrPzfEHGGAJzPH11Wz9xz",
  "key22": "5DxQY9exp13FpaaWZRqnH7C6AAHXsy9u2LBfxg6DBLDhWgpuHd75yetRqFM5oJQVqX7XANdHsEAbSmX2Tapigxmf",
  "key23": "3L7ee2MTnMm6pAsYq3w2F2zLdtyRSMCQuGQetCH67BVWoaWFmkWUBp1ufhrR1DnMCnstwa8MZGP9ocMTsZE1YFsJ",
  "key24": "ckjAszTwKrqL3A9q2rbvq2636ZCxWr3mJAoZ13By56muShdaiCCd7WUcdi1jRx3A95qnRZLEUdMLE9TLjyykNky",
  "key25": "5JEnoCRr91gLu61rGmfbuBcxrarWjHoYVPXCSbUsgRULFMLjybmKK8NMV9UrMDUsP9R3RstTiMisyaLyhy1fMSEE",
  "key26": "64v4y18gJk5YMxCRHXwnuX1KejWD5z9ZHHmSJqPx9UgHkKHryUneqAvNz5SGsGAk411QkELfxH8CJy9wjrLhrM2S",
  "key27": "2DiGoBteSgTF1uVKMuYNQffCrgyL9PddXhZQDL7Xi1odk5VJ4VHC4LjvmgCwvkEHQBDXiEZ7Yt17r3W43vrUQr6m",
  "key28": "EXksSnvpDQFYMu1tG69AKk32FqPdpDrTjYUrTG6ZyL9YYdTLuGYWywZUSNkkqnRaGhbJyv17MuCxLaorTMuYJxy",
  "key29": "63YxpEMxsXKjzSF86DkNNwA8cPoonqvProVCMgeGirGU8tbmdHiPNV83MPDB7Lz2N4eAizLiE8axP3BhPURZooh4",
  "key30": "sRh6LXwpn6rbZtc2oLN5EufpsXnNwCfhUNazjK9sGvTyjFiqiMj3Zvspswp6baKWnBfCXtTCqYknSPbqJj9fa3W"
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
