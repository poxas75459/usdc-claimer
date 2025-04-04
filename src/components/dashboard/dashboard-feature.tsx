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
    "2FgpGKYhBG3CgFk25579Cprn3EuLbGrjwoe7SJotoD1L3JVQwkSHNQJ1bguqRb2qK5aBg92CGa8BLC8eiEMaMAgv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36fpvhSUPfWE63Sh9eKrHdskDceRUBgjMVSmjiPLtFqQ2syAa2i8onh4Tihbgm7BGKiW1Fp5BFM6kh3jZsVQDRE3",
  "key1": "3QAR2kuXt4zJ7KvLPJcHmwRkJuLMz67hueJKgRasvuT3jFVV5jq9LL4g8cPoZMkcttxSPoD8zNtZVJZcRcsRQCbf",
  "key2": "5Km6EcqPah8Dx2BxZA6EnLvt3nCwVmiZWruyvqH8y5qYswWfVFZvVDLCF2S6bidqwZfjf4KF8mWaXtUUmu5vQydw",
  "key3": "3aoLHdYQmD6XPKHbjTD1xrotmVoitxidpkwQRKS7XSKaxhSCeyj5JnAaySeMF6KxTHm3gyxBq12xgbmxe4T85Q41",
  "key4": "2oJvUsiWpKJ5U4Gs4jwLMNUh5NTXcALmJYatF41pzp7rSC4DK26zFyL1qYdnB3DtBUxZMoZTH56hWofx2BSQaMmy",
  "key5": "5ucwaZHXQHsGH8nXPhjkavp2NStQHRcUQ5BXGcfXAiKTn41M2GFuuFiciRNXmaHhoz7qMgQT3CAj57TtNAvamycu",
  "key6": "3hrvTxXrqsDAy61irNrH6nrkQQ86EZfnEBM1i8gNTN6yMnnJKoZ91H5LkSpo1U3ivUgAKetozjXaBnmGx9RoKHkT",
  "key7": "4rLyVPEi1S3UNepMiTXU4PKGGLmGwX9QGWkRDQJHFwVNXLbJGwJBsZPD8DkTdj1jLmmHEyLsDyPiTjyVtP6kdDDY",
  "key8": "4o4YPouH69D2au7sRJcEqZsh6z1dLxreMJJbPa1rHVtVjYj7BYGzXp9ictEzS3D1u6Fqqmo7mhRv2dmF9EGYSxRe",
  "key9": "39u9BtadeNaUFpZv7X2Qk2rkAJhX5BWN7PWdsMh7m2pH1AmvEJGgFum9sE5erJyR5RZn3C82TzEN2SV55rj1W6qz",
  "key10": "4D9km2WQTJeHEeibAsXJaahsrv2xM435D88X77RpPAksm9j1k94MdC1rCYeYZ84CLJjiTQHoeAAf3v1WXSvZbUmx",
  "key11": "5ydsja9SMyHrt6sqJ2Fgg8gPqUaFcvJ5bdxXK6jHiok33tsEUZCmMSW6zjMjNwArm6eHG1wxp9xsadSrWsAzdPHD",
  "key12": "3asRU8zLaWCG8cK9JkUnVR1kcmyzfnZ3cmyRRfzwPALxfXJ83jTNpTz9BN4msrjdsMn5cQEzauhkK6Yqrk3LgbZq",
  "key13": "5c6m71bEsK1YTxCy9Hcg3AKUBAp4GjXULxmq9iqgXK2ytAnrSqvsFnLZh4agSXhT8t68QVmuqd2EQpN6G9gsF787",
  "key14": "5PD14PG35Qc4RJziERJdnUsUrh1NmXP37cgq9nQHXJidzCYswCy6AyvRP97QVysFkrir2pykiuw2KNNqPynKJtQa",
  "key15": "3FB6ru7rYL4jGwCehfSuvdwQeYmxLr5M7oCRmx1WFvNyXf8iVR598K4qaZh511UNQbLg5X1hK9AvEC9wg4oEjD5t",
  "key16": "DhEXU7oPY2Dtkff7orojaXTMy8aqkVm7g59iKBgGp9fyDrMj8zcuiBFbdrw7MwLcvxg7SmoCqvEA6XM9dmUmXSU",
  "key17": "2MjMCPX6gLea69kLWDLgbQvCjvrUboP8Wd1wqByHWftyeU6e5Eu8WPDa9AWBrkW56ScEU99nRp8rAv9zCrroM2rU",
  "key18": "4VYjXPBaxqwNzKsucd6sesriMGv8mY9DXD94ivk3ZPtG29p8HjWNnwPTZPBB1w7y3oyJDxhR24im8kpgsyPuaKiu",
  "key19": "4sZqiQDb5wkTK3oE9tZtzqBRx2hGwzBdUVoXVWgahT4jBqQamK1mG4bK2Rf7LjWJXQwKUr3y8JFUh1fFfAhDMpbf",
  "key20": "6fpTPyxDsuCq633eEFtJXKEVW8xdqpH3ic1ZHUpufpXndmWgoTuYkimobd2AH7TzzuwBRWp5RkX6PSHCV6gbMxy",
  "key21": "ZB5eTZVtw6HQrRXE73juTvzbr184GJUhGByJYicUbHwmRs4xsbGaRVt1XDsJSW3uW3mWX9CkrdTJ9NaY4vFhMJw",
  "key22": "4F7w5u8HWgCWnS3V8mMFxxxEyB8KomAwP1NDjWHPYH8Q1zPMwwALv4pnhUZzDP9aX1SDFx4HXE82PQxBzMHLSJjj",
  "key23": "4LvDRT8dxD6yd9h6XvndpuH8bYFMQuRg5HKWFJpps7pKEWA4Cp1MzPs2LXqvihhFFeBzRnKPbvwuV7kZt8QYxmrP",
  "key24": "gSFRET1ENqjJiBvmLgQftvmtWJatXdCMGJf29DPnMSiAqsGuXnrK6Sa9ZCNR9yczNZJFXEGUnQyAv2RPdCpMPQS",
  "key25": "2HFnWKEC7t99mCsCqwqthsL7e4Mida6JQJvTPzypSpMFVQcEyX2JiWbBf7PhxDeZGpNgEcw5tqNa7XREznMuXaST",
  "key26": "3dHDs8myPQDtX1dF6zDitNuxCZEQaWxCUq3BuNhrpAPBpCLajh95u49C9mSiXzzzmEVT3Xvjnpr3UeKsKbFv6CeS",
  "key27": "xJfLsSVkFoPbUiDhbNCdG9PwhvP7C9rSdxfv6aF2FWKsZV3bQ7uXkGeo5N4SCypncHuRfjJGU5ZNFWQUspK6pWD",
  "key28": "2YUj2kD8rYszu35115SBy22a9q6eLck3hDK5tJamYjDN9rzLzCtbeDd1MViB4VZW7rTQv2bSD54bW845SHwqNpVo",
  "key29": "2tnDEDZsahDXQoTdvWziZ3JaA1bn42exWuYg8s9aWErNmXn1mP7euui8b4dQyLATA3X4RHFidH7jxrk1sKB81okz",
  "key30": "5U5CrW4zM4TjrQJWFnCoqsyZVUXwLREStPsH2weTJ9MyubHigVjPYerr2zHKG3R198BTekDpKgFKxy6FrYbccVKM",
  "key31": "4GUzaATA5fL7MnXr5LyVEPnGmESd31QuVR2T3TVBGyR3xwMVinD4c72kadj7hkPm84zuVtQZUK1p1cVRWFruUT44",
  "key32": "3dm3UtJPDTLSDM69qYm88pQQHwXA9SCVrJR8A8jJ13KYExB5vtNYA5mAtyi7JCKxoWaDFxZnwJd38tXfGNfJEsyn",
  "key33": "Z8ujvY7jJRjukHH43HaY81sS8HQYS9NdKUeeukn5QhKgaVs6NfrDSxMJELRw3RASu5zQGipRF959eL1cN4e5yPA"
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
