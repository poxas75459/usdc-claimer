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
    "2QUjPWZPkrfz2PpJGMb7ai1TAVisb5ht8k21R24Qz2tJwgkCUdhEuA1kfBdVTsJeu73TneTdcDNWGYZsaxXzTZsx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NAcT1FnNdyccMvkQhLBLZ6tBkRenUJgLE3tDGiDVjJWvQpSfvfMNmfi9ay66hjU4e13BYBsa9HkQgKGkPMjjNBX",
  "key1": "4wMxxGzK1uFeBr4WKsSRqgVsXDhSUz3PmJyuW39D5uhdckQpv3dY8uRzi1ekQYpxFyHMLNign7FGzTQ62gp1rNof",
  "key2": "5Hg7LXxs3fCh9bqhxMqVF78A16WXieMDBa9PeGMoffXyBRygj7kVCTh48fwjZLaUUtQKQxr3ABna59LpXEeJF4qA",
  "key3": "5G6GqCepeDXS5wUFTUz3Rb7JGV6N36wcArAAdZ2Ge5ivHsNoHet6cCei4FLv5HUfYTF6HLAV9CaLruvK83fVRnDf",
  "key4": "2pp3qktLUTEYMorrzBLnPPd4qPkBdGCFZ1GUYdmVKP3MGhVaDarYaWDyJXxLnBY4RWC5mVHmYraRnAD6AEezoCzb",
  "key5": "qPrbfBaxGQJvVTV3YPggk63TuuyPRwpZ9tDbdkiXon3q1nkMMugEFRV1iN3cPQJ2FCLDDShDdCZGPD5cA1KSToi",
  "key6": "Lkt7sMzkBEXsciGLyYX5Cg2sEev3WsyjGjbtvC37XjRxfoMuFBVit3ZgfvycSDKnEXkdjLtCDMCh5XfLsgG86Ny",
  "key7": "38zj68RDkNib5ijQ7n4QbT2QStSHX2JHYWmAhD5nifEvmv7754sftK2T1qUAReGvuLNxh3mBcvjyUVFidLbJJMxC",
  "key8": "3PnEugGoCnUPXS3oixkxE1hYHGV5LxBoEf4aXfiLwMo4zQeMABBCk7q7ysR1yxPRJNHnuHtzUQtkxf9bgbq3H2rN",
  "key9": "qvaqRSAUfeLTg19NgmoMfnWAfZQtKkMvmMmAgPPfPTntLoJezkXitUFkBqnoXkPobkjT6vZRxr69GLupY3xpWcJ",
  "key10": "31NdCTYXCHGcb5t9WLMGkhnVvipqxxv1EWRw8W34QEvSqb8Bj1QwWSC5shefWQyEtPAbAyNtkueVuUWBswAkGEQb",
  "key11": "5ZgRuaxjkvcGChe3yARkveWeBG44M7jRMP22thtyjPwxTwPnNtaktE4wT3w2rEzRdGBfepRKh9NPGXdxk5PMvUFs",
  "key12": "2VjubSFV6epdFK3fKZ8wpN1W7WHisXs6Ceha6tfUNU5GbLtRSa99Erf3qpYuGtMQkeMJkJEqFjf1qdqTxFELSUBE",
  "key13": "36RnVCRxgWdFDpny1SJ9A44kh8nDsnqgQuGGy2tNUyYBDJXfPHnXRAbiJR4ocKrjXVWHucDRsmXkdTMKyED4N39G",
  "key14": "5CadsNEgETg6ZgzwPgZ9DJ1o7xXQkKJ4BkEizRSQjUvPH5dpqrzBot6NbrN1PvQo6co9dWKHbjwryx8BPeN861AB",
  "key15": "3hBvHSWwDmTwVskZHZaWv2YGDtPAuGRmRXgSDwe5ygvLUohffG1w74Jqo4N86q13cv8TjkeYZBvcU5L2Ef2bUFqD",
  "key16": "4pTbq35bv9gtmMPrZGRPSY6DBuvm7GkqQ9JJw5KP7QanAJh622yxrDrrFh9BE5HDJtCHTyTMX2yjxXJgfonZ6uJa",
  "key17": "5hy2pwCbHPuK29SpZaFk7Exq1hj3ZuNr9qyrsi9KyS59wAENAkEjPVnCstgZGofrwsC95kAYeCXY8bTPTEPiDtxJ",
  "key18": "ZzeKcVLoTZ62epH9XLL5GMoMaLVECErTpvr9nF9459NkzmrbjRSSWwUcDHqQxcvi5vW2rmqocU1ycpv5wwNp79t",
  "key19": "EHz2R5utbgZTXDPwQRCbE3bBVc3AuQbZPojerkefuc6mywsckEA8WBWnM9GjhNmPm6viZHawMXnHeAL5jXjus61",
  "key20": "2JP1HK5V6XngVFsx7oBh9GWWjpYWoS3z31VPT97aPFaoh71fC2ukD8rYgnpEJixBHrFnowZKCM2VCSXgPCpGFUiU",
  "key21": "3RspL8sXDEssmFkqGbufPf5h336ctNJhgYUppSv614bXqFyZ1ydMvWvNSU8ZNqmGaepUDpfWAruWak6USBovZTy3",
  "key22": "3hUFnSURDnxGUTQEv1Lofwa3uJf6twzQJKUxcxSaktwW2KLTS5NMxwcXrGQTyBR6r2jNVvbbBysHSRfSUF6xgWnB",
  "key23": "3dksL4K5mGazYYMEnFwmj127fbAbuqZDezHGstSE8W6QBYm9qK2NcN8Sy2MzQJGYd5rZsS2d8Uq9x88o82U6otK2",
  "key24": "4ySK58cWdycAVvu7W5Hoz3TPgkssDUbPnYDUNTK5Vx135wZqNN3kdREX23h11RQUsijWf4hdWgar6GX21A27KHTA",
  "key25": "3Y1hgA48Fq2JRKvHHxj44NWJ3CDCYa1Z2V9LYeD1oZ1VtSduva2Uy6RzayzedTTcUhxGbcCEnfLoVddMRa64hHqu",
  "key26": "2L3aSmxsQMzDgHcghSWDSPKS5nQaoe41j7oVW6VrjPVgwosD2i8QAKAK5ZHEPLCT9BnmxV6p1UcxeLDFoPW69aea",
  "key27": "22j6tmbAVH4WXyoy9EjsGrF29DqtEw5uFka3h7tTxTSiu6dKWgMNVYC8WeXnCty3PRFxmksFfMHcpoFgoKs4xjfg",
  "key28": "2RNnt1sRiZ3hBLtQZcDjvR4b8Ai9PBz1g5K52U9vaQvpbXMxhxoHPP57HwYU3i7Jgjmv6f4NTqaJa6J938vK3ttM",
  "key29": "4YqBxbFSyPVn5UcqfW6zULXb9bZcv2NCHdYYdR23GvtbxAekCbRoaNdGhB6RuEdU5aXhkUN51Wy6aKiDrkH82JyY"
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
