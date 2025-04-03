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
    "3oWK2MdfQX3jJ88piWtSTxmGumVqSSWhXNQ6LVg6qDX7tsEQ1zkuwvfe1ERLKFtFzykLQ8hLd8K3kwhmapmC4ZKf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41qr6MtCepmX76mMqe2HA7sxrYUXFZGBURqjHaniGAsB1bFCZn4gH8n6Y44V4PPDdhtzUf95BXeBm4CrvewFvLdf",
  "key1": "3x2Sy8TdJTv2vbZ58m3FseH8BrjPLjZghEQoXmXNsphg25qRjhMgdhWw36URmGYzgfURmGNjyhgQxaqfEr4zXhys",
  "key2": "3SFVjVdve852TYef4Uu3P1nZ2k1gvJHCMFeMKzZqwyrLaCio6HBQkcyyfVBgGhiTpE4Tq5jXn9f57k7WnJJrdMwh",
  "key3": "2Dhs45pZFDCFBkydTWFndAKbfTWNS4HikWB36TJrtJKWtHihaqxUuQkdtdFt3dqH3GADtNvm3fs3E6gVjU5uKwSk",
  "key4": "5cgZcb9sFztBBNZr5yESGJXTsfYAQp8favuPX5VtxVwjbXSoUvUCtWx1UatpmsSL9xMohi9WeiSc4ee958SZp75W",
  "key5": "4n3qseKGV6mzCy8rxXjRidBkRPLi3yGyS1BpogTvrCG4h3CFZXKBqTPMno9ZcsnyEAmtxRcZHD1geD6N5wKjqAxs",
  "key6": "5bxcxry6Pkqi9as2WTwBMNs9Rj9zKhaAEeTVD4wG6VuQA82vN7Dd1hgzzXiZQ2SrgjSDPYVV7or6ySe7aasMrXeu",
  "key7": "4pQXfUwAanVuy4a5Jdmjcntwu9PNg93qpBoQudDZfadNvSZmaWWtU8dT2SSHU37M4HU5vaXx5okELGVCZoeciQ4F",
  "key8": "3B3ZwtEweZRGBNrjyGRxqtourqoq4dzFRFT3eMsmWAFgnKurGSMSkpJVPfpyq8XJVS99rcYwb1HLFVMxE93Yxjig",
  "key9": "4Y1wBRutPoaNwhnr22XtJypYPQoxBRWxDCBNES2EJsi4BrYpTBtgLPtWoVCAXndSmw3qiBRRFGr3fRxCRtMnMDGD",
  "key10": "g4s7Uy1VTPpsCKbMCTNGMsqm8Kg4zz1tgM2p8wXw8UkHZBsJLcgXP69rpnYuUdHnwM4GmgwJ4xzZTxz2pV2ibP1",
  "key11": "63k2EWGmq6hq44GsURuaV85zuw1msoKDf47VHa9iCV59XZprJUkqerUCfBbiPuYmDYWvyrcDyLXeEW9hxYFWtQq4",
  "key12": "4YMQ7zGvRdfY3D2g2jC9e6Bm5sCkzMH5D3jjy9TUHP8gP313DEWwPvuvP7ZZavC7DWQWdYVR8ejbnsiFWmxudbhq",
  "key13": "2uVGinL9bbL6opEpTThHEs3YDWeWVjR1YHxJzwzjJKfvYuRa3YaHWWAYruvMR5GJfrJmWrTL6smTuxeYmB4pQJsu",
  "key14": "4a3oi3PHHRzYNANocJmqJVUapPevvWv8rLfBuhWUT2G5MpMji3PMDf5qYq2tfqpAHUfNkcHPNBnSPVZZ28xAu1aC",
  "key15": "Tqs2cmQZwjekG8FD7GMCg5V2usE7GQDQDzF8B4HNtb8wWpM8SH6p3poujhEJH2YjKWY3GEG7n7Yr4dTGpWDbDWQ",
  "key16": "5ZhtBznDPpVcWt1FkmV9xBgqkn4ExwnThx7owGjH6d789cXoxBx3P1WsrKBb5ptetUa2BFwZHUgpGB8HGrvfhSYh",
  "key17": "5MZT76hAxAzmsujqWFHM91Tieubv7oTBrs3actah2gmfon5Nj465NHZ5wTCwNHrvGjhit4G1MBy89ofvLALHXYhq",
  "key18": "4ML4B4SrLCLFBQmsBgg2YzNbxNcMWfSKvwJi6sg8nQC7dEyKr4B9ScuddfQYQbZvaYYZrc9mqFwMDHtWmpwKeVn",
  "key19": "nuMyX6PHzXKp3XVVdZq6Zdr8zX7KJQUChrpgd3G4gxwzFxCUpyRn3rjtPecVREaE5qnkFbWqbqdNdPwwJVGjeze",
  "key20": "5mHqjR1jYBUCgMac3MfKzyJN3FPmH8eJM4fZQ6Vwv8vj1pPthxgwJZEWF8J5piC4ikUNZNG2eZaXxXECkF8QRUMj",
  "key21": "4dQqZEoSRkZhVDJf5aezYNcQUkv5PZh6npESyZ1WpvLyMg8bfmj45fa7wiikWvqc2V9NBMxYA1kbB1eAYkUYgQeR",
  "key22": "GodgYnxxv5zzQAbQ9ox45Bm2ymgRbxYtABaPn44azmgkZdV3imhpQh4ys42LkujejXsNKihtyKzyMsv5r17DmfE",
  "key23": "wncBvgoAP1MpaaTrnPSWJUBDyaKEr1aZdpySMDok3CjnodD9yEyh9bNNj244cT2ojmtyAXYs7FHkN51TYLx3jxZ",
  "key24": "67ZnX8jCbaccEgkTFRjx6b8macq73vACUbXAFhnpmtaS2Ds5fn9DtARfrXCWte5Dvn4LNMhooxoBqPhkLp25z2Vp",
  "key25": "2vZLpXGtDVmxwh3dkuEzdXTzuH5WSXaQTEMUpiVayugmC7WBiMSuXBpAazeqirmXES6HwabZRM98fxBtm5cmf87N",
  "key26": "3CswtiQozAtK8YxxY2rECQSj5ermYhkFS3qYrNYcQ77LDmCM1YtkZZvtep6sfx1TnNDwBxZ5ESQhP9Yry6Ra6TkX",
  "key27": "3EPpt8ZVgWxrYmprf1c72r4YcCJxLg9ncnMm9US52MGFseiWS32ukTmp76sP9ruZ2e6z2ioegoX2gZN8F74y3i2z",
  "key28": "VgLWnvapf3xVQWaNtueSUZ8gdRf1m11yzgMJ7tFSGxuAheLrknpPzSsVqQGw3VGKKHCS88GTdXUeDxWY6DG5KB2",
  "key29": "5EmwVpYeQZHz6cypVYkBnncd4fr9ZG58CpJpKbzJpRoehyMdxV6YfYez3wqviLfiwfWi5eh7GfgBDSpWoDXUFFZz",
  "key30": "2D7CkDQvEnDkN9NTFojRvh713Nrhzta9gDNkFSJNSKF6n3SHFHsvH11XAa5N1cRZzZfyKYE1q7bhfksFpecCgB5f",
  "key31": "4BojZV1ebayYa5htVz8j42oVRezafdhUYyE78z7GimEzhwUs8MA1PZ4y1JrTuD44nRRKHnmX7FhL3EFeper5x6jy",
  "key32": "5oQfddWd57PXigqnq9jHB6vLVEHjEseeSMoXfHLpmBqTtWp5uuywF6mQoqLGs6r5baxd7nfWScARYbHhwPgiHVZa",
  "key33": "CMou2PAU3xprRBADmK145JtmpvY2yudgRjgDEPtd1DuaUeL1EnMbcaTqq4XCKYvnrYkGmtGKzff3CNtDc9UTJVk",
  "key34": "2GBk1mMZ6KDuyn2pXJcPwqXUQVXA3Q8p9qFfuTc1DZ5TEhV93iR1DUrhaaHLumeWMswD5jkvaQHxpfo7dmwgeuyf",
  "key35": "MFDvNHpxg8yRZBtNnUsNtCba9eS4z6qpLqFUAN188HoKJFRvevsDZSXSaLggLczG2pgnDbsX2umBBqhRXfnFgeR",
  "key36": "2L8ynLkgn9ZboCgvYtLuVyPgPMVcyBdiZGjx1vvw99tESuHqxcXpfZShRsEd5McwygC4XFAzSoF4BREYZuKcDojJ",
  "key37": "4y7XRrcVgsJLwanDLyPfJVJhbwbXcWiNhH52p97RP9FFc95UbM5gAbLHVgXanDjmUFejXBg4iKRs1CDCf1SpWmi",
  "key38": "3rrLT4tSfcZmVc4DYBmLFT2KndX3DFvJsvErPDGr3cn1qyPUwK7gh9m7nyVggCKoga5X8hyTjF3sb6mvJPi5BVaA",
  "key39": "V8TqTEFXQTLpucVEMtt8sDXMRuRA5ueXD1oUt2MoXMPLsoVMrjUJ6M6TMdhwyixdCfwLLqDYKq6D7vnQbbUcsMw",
  "key40": "5ZGSWmWfF5HULQBCHbU9j1HUz4MuU7bRoiAcmfpCHSeFnyvKUwSVuo6DUCJp5Zp9KVXeWvW6UdsWhUwDQ9PPXiG8",
  "key41": "66YN6VnNPfGswLyFYuEQU63WGyQuNmxwfyfkDVoCQoDJubnPC8qxh3Sdf1zzNiAeFP1bnxiYABY4o25dJB8Qspev",
  "key42": "4mribKaLGwbEa2qNMvWG87wN83DtAT8XrshkHvS9WKxwYSmijeRCZSqfAMEt6A7MAdW7nbZL7dL3v5J1wA8fZmj1",
  "key43": "4FR77VtWNRwHiDwq8hrQcMmnnU7XMSsrpdnpDAKaXhdsZ2EfihACu4knPPb7xucD97m6rruLiHrV5nmGDzmurd3L",
  "key44": "47vbEnsq2bFz8CwX7qsKeUdiu1naVfJytJWtJswNEFhXom9jyPtbwiVXYhf5gQ6iRpsrJjAitPgkTd5L5HsGAkr7",
  "key45": "238qxVkT8gFbr4wdpQUpQc2ESQ4AuPtzbKYwYdyaGpDQLqfdY8fB3UuMTeqbWxEPW3gV9Fa8geiceqmDzqHhc6BC",
  "key46": "37Cmw9quLUY8T6kMCMi2gMqmQUeuiAmdjGTLi4t49hq1xyatrP9BEcV5jtNTj6QRPRpeYipfb73uTjsH2ZA2GhKj",
  "key47": "66Nb3Ugcd6fzEUvFBMyAGkHYTaeYyf5ub84hCEtXecCQDzSFcELZPrQsmNSe39W2GxiFSBzAok8MtxGcCNFtzLvn",
  "key48": "HnQhY2SwLggByjuRwhaDXpZCpKaEYsKY8TNjVWHFCFgkqwWdzYYTLeNpn2Yvhq5PJ7RvCd1Y1fBCo7HBKw8Fek6"
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
