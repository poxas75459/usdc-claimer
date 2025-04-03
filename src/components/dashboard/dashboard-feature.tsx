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
    "2S6zpfaYuK6B4ytZdKXioqFU33QNRYyQu4ex7KHKwFfaScKvWPFfz1J2a8kB7sAhZ6XNndymLkhRotucjBmUe3ns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nKh1aP91WbcgqFgJCcsaT2985572KrnVcaayFmhDwLbj2JKahnvKW1fYuykf2z6h52nAp8A7ApE9YTkUvdTNm9y",
  "key1": "2jqkxY4zRRbib2UoGbsQ8qyWazmkJeJ9djAj1vvg2uPuWTXMFy7hJWYGbXqH5fbuLfjMMZHwyVHYwNde8XJWQXyN",
  "key2": "2NATWVPskWpNaEbEp6iT29fKH1SdeUfBWSCsafhuJ7NAJndenKwHvPbng4nmGu1LEJFymS6NchtVksbkj3gwfGgb",
  "key3": "5FJUcnWsCwVNFpn6HWhd6t95kqDBQPphHJBG2Cfgv3Q5VneGmBWbPZDoW8MoEETCvZaz2w9CJvLde3sS6baqtQUk",
  "key4": "34w9TMc146jCoCAFKkCnxbHHwBci5f4dRoqFm14QZY7emaTg9CfwTWryc8ioi94uVKdFGsy74MhbHGYkntA9YuAa",
  "key5": "2tNig2ohF8yQLhqNsyDMpxoJubg6LkE1J4VAj2gmzeHEEX2CyUe7et9THFGxNi1c29c6tbgp9tNSLUVBmuqHDbGN",
  "key6": "3FhnzJmqAQEKPgb1KqjGdG5vTpEEUHbq2zvCyyZ1XmdwDY12BcMhy4AuQ5CanV56YpqdHbmgQEG2wHhn8p3Fr2js",
  "key7": "bvkqadwf155jcdUCNMXtY5EnmWxf4bhTWngHhsvRymmKRJQeheTisALwpcoKrwXXvzp5EtCPnT7bFzPk9cimDJb",
  "key8": "4DFucJ5PFWDyaBYJziNcR7AuHiaK9KW86f679ewThxEE9JK9tdpqxkAPMU2uRR67Q8Tw6zHfBpd8Wb2WujbL5YgW",
  "key9": "3dkCrhoLZdRo5xju5CriQ8UuR1sty7cRY7MPqdUfaVa27WKTDAM1k4muZaMVk2PUnnVh1MAVNQmbgTo9Fxxf9E6p",
  "key10": "2u5K2c29deghoAFSe7KoLLAStvcJxt955BBkmBBbw25hTTSgrvAf3x1YP2JkS4xGNtr1LLgqE7cWDXmZHiStVb62",
  "key11": "3gRZLXvSv67STqnUD4Hzd1iy4dnePJK7ib2dg8VaMjqM1Euke7vZE5yYiSMTzxExireMsKMTVDJAZmrpuEKmjQBM",
  "key12": "3Xzc9PgXRAQNEaLnREjYmXD79gUA43mJbf92PBwZoiynJLG7ZDkEvPto4AmAgWAWvRNxX71VQxw9cvdstnXUEERN",
  "key13": "3FEqtxVB4YWdbaNnkRQ1xrVU43cnCjKc1yoKiaQzrToSbnRCJ8Kzdy4QH4kt2knfGf8YhRQBzbDwTnUDHMz17xH3",
  "key14": "3qEg7y1se9nVo7XVQA18KHtBBzAZk1MwRtZhkDeYLhuqPJpUzERbJeVqZ3gvtNVCL4C7Q4L6p4moVjSLAFY7xste",
  "key15": "67mWU1bVvGc3U6jA7BnD2noGai2owrgqLMyVMMdUqTz7ECSP8WnZAtu8endRKTqbwUcjnzoxeqJwAW8uzVmfTCd2",
  "key16": "39VCvVWKQd3uGGUuUf1qcn7USZjz8jxiravAH7x82Rsgp9bBNns1cwVHJeDgfivbK2ndt7D53suYpCTg13kjWBe5",
  "key17": "n1Q7FLFNa1itHRKnjr5ytf2ZWLvp5YWzaWkoiFDMRRbG2TmjRkwa3qy4Jf3CVv4uPFmp4ecyusBzptvwiNGrqBY",
  "key18": "LUZUxkYQ8LdkMxu5geb8E91MKk2mqWNiZpB2voTHec1L8TMEFTcA1VXPDPhsiJ8ayKEVhC8dgP3nbrzFtmC7HJR",
  "key19": "2VFCxvAD1bmxd2MEsFdacvVWjNgSmUZijkunidDw61wnqntW5TYoFoKwqtoJZMQgvSgCUn5fMq8SqHT2ygHNjvob",
  "key20": "3okR7tZUN7tytaYFirv73gxq4xj8LF8qBtnrhBcPf7FcWXPfq8WJPEopqLrJXJKfGu2UdzARKJYjJgXNcdUs5YA9",
  "key21": "3nVXbmrq5gCi2d7SeumcdMSp2aSYsvZKJWe8ck6769BhdDu9uUCfSyzQq46PrdaSVpfVX9L1uK912vAKTwmJMkkp",
  "key22": "32T4f6dSCk4zbQb7NCPGZRMxWvZv3c2YiYJHnveXrPYemr3piiE13t7ukdf9pvnYcxcg4R7spVShU2ACZZzZE8f9",
  "key23": "5rwcXo77ZcbLkfcQ33fbXmemrbCqTBZJ4X1A9HtsCDe27UZnoGSDs2839njtUUr9iqY14qb5w4MKJPt1riqmBytE",
  "key24": "4zhswYTebfsnurTKweRtbEfEDiUx8XS7az31PS4sxmaFcqysU3jdxj3R5uNdCPi5t1EnhDTyGckBkGj9PWXN4rwV",
  "key25": "3utXmfJ2ccZonrCBgxjQZ66YVcWy9AerFvThTXRrdQTYfYp29qsHVoiBq6f7W69T6FZSY3xa6xvGGVVAc2bTxxM6",
  "key26": "32tZVyHmqMpzM7RSWoAcPKmq4KUpwGD7opBpenWyWj3K8uL23fsgejZbkr8n9MuQvN4z6wT3TVKUS7ziMkkZveNs",
  "key27": "mmWdR4YEas2CAvmstPtv8N5kJKb5XbgUKeXKHtVcgPeuLoAuAdUs6RY5kMv8wmQHgxw2aueTtdpa4YX5e3EdcNp",
  "key28": "4b56qL85zmXmmLEefUzFMDaVDeNpviu3mbjRJUubZFo26kftHJMHBsXVuwrqmyhvYa3Gj1TiZKzBo8axfdF6DZhx",
  "key29": "4RCrju9sHx9noXWQ1ahnhLBu3fu5ZCFDpQedFRUFQMmE81T3sxTdDPFEmxwEaVmrqW8nEqUKfzUA6JYzUQaVRJAT",
  "key30": "46BKxJ4tA7ib2HKW12t7ahbqxYHZB2p8EVdPNR3tceSAMfwTGmWsX5nvNHYqZDPu3yLsnxD5fE1MLET6yCrZW1e4",
  "key31": "53UuYJUgNiHwX1sEuFUhh7BgmKF8ypfgd7NHAPGfGarabHz3BiHDEfhDkeVghBkEBHJhfPF9tV7Q6BY1bqNjkpV7",
  "key32": "28KaoRHwzjpQU9w8y3N9c6shHrx4DnANKXrmR2Nq2tmGU26CE1zKcncWceRJP2XCtcxd8CeAv9kVhoxARyn3FZYU",
  "key33": "3MTaEXnB3oiATKwf9C2kYnZBFHA2ymQBztKofZZx6GRw5jdh7nxpUXfobWWfXsYXM9gdMFPvDe9jFubNuq4aRTop"
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
