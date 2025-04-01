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
    "3U4TeXsns2DnYp55ZepnrowNs3vGA5G3NmraYaiJbzEsCRrVGKK4sUGgBkc5nbv5YLdejZ5cro1H3PwxXLHDLvvH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BH92SPPofMegfs5rRa1FxD8Ktx4Y1aS614rgkHtUv2fTGGGsSoXVu3fqYRx52zAunS9mS54SpQYi6QNqmMifNEV",
  "key1": "33UL5wnBhCq9QTUxsCB4Y1ELRvDTUPdX7ur11mNotb9Xr28qqbcVdFb8VGPLxMKm7t2eQGpKWTCEhwBa96bGm1XN",
  "key2": "5X7WZZ4TTS8oo9nQvyrzTuDPHzRyvYgJTwfqzGYKKM1BFVuyDrJQ2AreNtVopqdR6j4Yt2Z6HgUoLjSf9mZetEBh",
  "key3": "2NHMdWNGaiSRKX9wo7MztoyZjQv8Lrhspx87RoyFbFFfZqJ9Wou9NT4Hg3LYqh9vwqaG8YUAhRVwk6CL3QW2x6bQ",
  "key4": "5dMHdnfx2AwMXU4Wwn4shgPpS1orp9rj7M58xc7exXkyhBfdM1oFibRsqhHAp6PNH8S273StdgcCquiE1EpV51po",
  "key5": "61aSxx5PMg9vFARnuaVt4WfndreHaw9GYeMkvT1oBHE2WwhwjjCYRABSXUojtFu4jVj1acu1iryQGyojxfbfQCWN",
  "key6": "Fqo7rNXTK74isfPMJ4X29zwk98pfM83Hxdm8Ue9QdHkr8xruenRisf8Km8B8FqaETfLayQSxpDc14MyaB2e1y9G",
  "key7": "2t6xCs2D6kHEjdSy8mCeLU7ysq2Tr2kaZtm85oQhxiLVcU8od9ukXkQ7YZsCyAWoYGVpn5pVHifgFQw84kxkv8VH",
  "key8": "3Aq7AAP1BbAfvwGuEyf7KcKe9DBwyabRTd3oeLp5i3aLhCSrEZdkDzh716FhKsPNYRkd6kqAXML5heA1E9JMVpbw",
  "key9": "58uGWn85w9iwmCNVycRQALkNhhoVztDk3MoLgkyQcny34SWkcNuVvTASN6Nbc4KJxT9PDRzhW5Q1b5LednWwVeqp",
  "key10": "5T8gK2Xtc74WXLEk3z41ccAQfvGAR8PErPTRFrpjwB3h9yp2Sk3zrHkomrPC5CDcoWzgc3pZBUUp4mynMma5uAzX",
  "key11": "2KGMDiDqCwHybMa9Z4RybxcnnRRSNutn95aq7u5RKr9b3nvqG6g8ij83o3wWzFJU2Lgh7BTqgB4yYtLhwMEkc9a5",
  "key12": "Jw5NabZuGxeMAcbd4ZpdD4Tvig1HUj5yHuazwYBctVoeXbGtdpnA9M6x9j1RHpH3s7bWhid2dH1RAhp6ukGNGsZ",
  "key13": "5uNpF89uRLDuwmXcp2gET6GjvvnZt5Bmey2aZYvjr72BgNSybt4hfXhqX9ucCNYrKC6S8VKB3WovnZEwaoSSqzmE",
  "key14": "nNamwd4NnfCj5Tq9bXE8T5uWuSWSxDTYTQSKkhHbQTPjAeG2ctVYDQ76N7DwP1D2YyLsBkbwwSwtefVcn6oGDKx",
  "key15": "AwVD8qzVNMRvsiLWT9iYQFEbNSdTxvJpGZiBKLNKm3q93M4nX3s4a8rRpoHrFAmGeDY7PBxsXwYMbtdy8cq58HQ",
  "key16": "57sujpQ47EN9qBvFbc7vJiWf8imn3kJHA5SUUDWKy1WDzCGAfJR5F2vb4t3YgPvzBSubozUVna3VAiKGn8ydS7G2",
  "key17": "42dC5seQLyGuuUVwDTUFXQZi5eQuR6WerAhHNrf6eRo4w7onrUUyvfda6vJUBP78whu5krmcZPddDurYXAVtAN5q",
  "key18": "4csGn1RTysH4hKRhvYLf8GrptCg7SkikTSE9yaVfihKdGet2pCoxqZXEDVdBbzRoRm1khFmxecZpLTwHqag2VWRJ",
  "key19": "5Fmn5DiNS6Ze3U5A5RHfZBD3LfYpKB1xffK7LP1QSeVDhbxh9L5feakYsbVxLK5dXLrjVVrAFEc4tKPfPKGP3Y7S",
  "key20": "3CEyLeEN3BKrK1KsJhRSX5yv8m64pwq5rx5Eoz2pyzxVwB9wiX7o994h74zuV14wpjZ2AZ7QUgEtTtLm4uDCc6PE",
  "key21": "3QPgYcey9QRCyVbDyadBcWvgFHcD3uDKLFtm5dz5Bta41q6TbqgeN7wVXinQGHW4zoTpphizg8tRjbtoEh1siEQE",
  "key22": "4WCoXfnisoLKgR5pRjRAhFdfEfXPD3hDZiRRQ9XWVQnDRbf1yFjJfU1gPPFwVPXvHL63wZ6D9hDXaFDFbMn9DpVS",
  "key23": "3j3PK5kcLe3BQPqDYFEvbPRVMyn1mqiMhSbLNPjFKRWRbBdgGq29ZZ79aygHziGuk4fZmEtGmZ2EpgzSFsa899cJ",
  "key24": "5TxUFZsvzRa1xheFpyRxnk6aDXWZoaxyyyPqvawxyC4wmqbDMPrgxZzgURwdghZ2cbe29csYhHdD7N2cW5RyeGv9",
  "key25": "3fLvSn4xbh2k9b1y3sBGZcxvWXsnmfPZf1bd3XgXqGS1jEAaKAbEq7Jxz45Um4gpfHGYuEzjTyeHsBFQ6zgdyti1",
  "key26": "EwZykgoAi2ZpKTr7rvXsNGc3Z3QwJEtfNeE4VHZYMnZDQPqZ6hizUE9FaK1HJmSRQTpAtWyMpiTUzwGdvpgBqyQ",
  "key27": "eb3MD3FDwj1ndd7jWg1eyviJoregkbQY3b8bmRok7btaxfNRkBUC8nR1ArxAqcQMYLUuTbjrRke6xbzujcawAxo",
  "key28": "36vRqWsDdJkBdKwvNBpdWnvYTPVP7LEXGKdxwXGF24JETCWWccMF2boNruXvRnut8ZtqV2yoqN1RL1sysSTAQF47",
  "key29": "kTPoit2kU9991oXtxAQ8UaqPB7yxoK6EUVoDyfTdSkSeLPfnkBDWB2xDHowJRBTp8K6GgNNAX8MCDK5nA1y18hT",
  "key30": "qbJaFdEpCsKYFcJD5Umt5ERpBv4Nx3Sr3VHwUeJuAQLRNrvEkxwtJHLSyNBZA7AQT389CQEn1FXqU3UqcRPsH61",
  "key31": "56NVpEm1ezzA2MLY6aYEJqsbtX6t7WCSD8BxdMWwMW7sNsoq4X27QEze7RixPv22aMtRGkhMidgwU43nimw61DqR",
  "key32": "5HA4EFHHpaRoTMEULHBS7UVFmmry2QSC7i51xQJBdrqfvm66PV3Fjgi2SynRFgh1yK7G2yLuukSKAGWxBidCSZ4M",
  "key33": "6sQcsHvzkQTwk1VD4cipAQvQMe19UF3RuVC6vaK1h41ssmtFHEEn8KiuQNSdN2Le3uEkUow1KXVPSi5DFDTLQ4H",
  "key34": "b9ueTa7wtA5f8FxP4sULHpeXc69piJXwUobeWP2DR1tPpHUBAgPidNFSdSXy9dj5c9BfnNWSda8pZSfaM18u4qk",
  "key35": "WDPxUchF9J5qysvQg3qEcetJRQgimuQ2Hezthg9PhcLXYSSN9GDVdtQ9KcAWb1Mc4UGGRnw7WBKTvDMW1HxGEod",
  "key36": "wZxP8xr4ZAzRVWe668ySvMrJGpSqDHQXeAZeTJgn5NnDF4bxCdhfHaXqtsX39quvUJ6GEBQFfc3Nd6NkdbAjCWq",
  "key37": "5LgySZdW2DiH8GM381Acu4nDqpzj7ToPjuFUEBpMpY4omd5Y4dVnmQNHMV1hQzT2V8R4XfVb46VR6WPAMiZX9emw",
  "key38": "4dX4n2tKw4ibhy1coHEtb8fbJnuLHLPHZHuBR6ZccvzThq5bFk2VyUsMms7jqrpFUyrz869gCEg6o8qCoyxk6xG5",
  "key39": "CKJ1WmLtS1mDvAoZx8o2aKhuWwogdr9oAqw6SBYsTg1EqU1xhuFmcJnEMyep5M1d8yFrERtsBxeowNkq8CpZfti",
  "key40": "3BwZci5GNe17t7yhzPDn1kCFMr8Sg3nvhBKoF3awVb1tW8kRUUJYVUwqD6FqtS1htLpc5D8jnkN8GFR91kMTxS6W",
  "key41": "4KPEVpmJZUvTHynEUR39j3iHZQy4QtEPbBHJBbe2euMPJJXJRK8dG1Uo4FiAuDLbqwMJ34UeFMfSPdsTAqHPJESM",
  "key42": "2tHbysWXhg9fmvThvFi39qaQeJcUxbZMoNFvy28c2fSFRQ9yPmvjSpioJSELBfwWBhrjmvp9oKBegNdTHmCg8PHU",
  "key43": "27KVkRtpjX6D9Mh1zq37mRLiAJSo5qrkx3iJe71KvUMJ9jqbtyZPAg7z1iecPZgNL7fNXecoSFbArHvGqmQYdFPb",
  "key44": "uixQMLteEXGvx3kGFVsSyinjTGfSowmofAiPtxi9JGYZiUHgrQwCGTW3wF28TPPVHCNmVttYm9ZXMnGNmebVZHG",
  "key45": "3oBEDfkxQCXJqZKPm4pQGPwvaCHXdWCfvmSQmQ726PduPH2EfAtgB56ZVMf465mBH8Ku9r1VubhURzZZtZ2LczF7",
  "key46": "AUNSC7RA16QoCdz4m4VRw7mSQUJxDBKN6CJ2fGQs3qAuwC7TyAbkF5zNix1dfkE56FPXMihXkrPH2Yf37iYu13U",
  "key47": "5VkaCS7ym1oyHEfgWX5CrWbdGGfgQaddK47jWqYoe2sKdiKNKzdiTTYF1NiqCKn7ee4GsYEgiGx7qXDFkE4d1rx8",
  "key48": "5VwuiPDrCm7amw2vHnBfnGFACYb5pb62dpjBHbEpSvGqHzj777FovjiPeJL2cj76DCuUdQpWrPyKBWqzGyfbfwjK"
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
