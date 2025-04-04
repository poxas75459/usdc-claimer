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
    "3bB1T1RfNDeTd45rnaTmjsyKeZc7ctF7HvzmjMSrHhTGrxxe16KaVesEzuguHwv5dfU3GChTJgMpAbvA3eEFmL6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Q1AiUFu9eHq27sfzM2KNnqpW3E4rNBbjxkpo9vtDBu7GWeyaEYSN6FC9EXcLBQu2kmxsptkVnVcwFnsaV7qB3Ma",
  "key1": "4eX5LfkcFY6pBTwkRi2ZCjgCaPXBC3i1uQeb1xYFNXU5m3a6sHYDt7U4xNbFwpVQnZ474FdCdMJZ3akuW6FcBzhv",
  "key2": "4NThMKJYNJYsA4hCFgFcjBm9k8476tDWpWSHkZ8BDgb2PBkQx5hCtCVxZkcsbCrP3yBmxxsJ9Nyc51S6fvX3T35D",
  "key3": "iRhjpVFsiAU8hGNGGY9kC7aPBQxpfL4Afzm7u3VcFFYWNaWxSHG2W2TgS7iHD56xV5jD8yVbY4ipsADpsvEX9Nz",
  "key4": "477pajX3u8Mitsiz87gU7hoQicMC4xbPRhnXtuBkhm699cTtzwjrQcBFhbiK6jfuDEpU2p4PkSiP8coAD9dB3Zu5",
  "key5": "2hsUsXUjxjqbJ3shG76dNoNKRVeqAisbPN3yVRfWvD4jvZvGwtKFvNimbYTTuiaKMYHASrQpvCUkqs8VAeN8TLNP",
  "key6": "2qXXi8UYLdMnWogGEekSLM5DZP935rfJdxCBTUNDSVQJonRYhr5YcLJi57kuXqqfTfeehwhjomZXpEPDnFaWELQE",
  "key7": "5Wn23kqwvPhPsKW6aDZcaRPU2bFzwMvD9yydXGVSkG41FV9AJJB7UXJbyAWpk5n3aiV687G8Triqa2Y7v3aZwxby",
  "key8": "5Z3LoA9VJkBSCzz4ChDVkkwrUUhY3Vmw1pGWzXyhCtnsWWL2RWBwE2uG6D4qHUzoDanXFkgYrX4MxETcAoV7Biat",
  "key9": "66XSkvFTjvcxojFwumFakVwYvu8mp714KhoTvV6ahSgQDKzEkHr23oowYwSEc338WqByv9SrdAoYrZ21AfvxHdZg",
  "key10": "zxvAXN4NB2KmLyVa1yYxfFQGBgQFPAwNo2gpcpkMDqwsBsfwDbzDg3FURd1nmSbTJJoUBmJNhF18LFmDzvmoVoS",
  "key11": "iqMucyj5B7tqPc82Bbo9BC86rgHom54uckyexHYk5uLJonosH9tzc8MR8f2yhdkSYdKNvJxZNJMNBzSbt4YLjh9",
  "key12": "2BSwFH6QBigjxFebo4b66mnah1HcRNHBo2EsoGGdaq2SAR7VX9Ys6kmb4QxcDtwFQsEsLigZwNDXCZhz4XWfZyHw",
  "key13": "2usXFCUHUAecEWRgDHDF5w6cumDXVGbxHrc4jgfeQJ11zCV3ePLGQx1MF1Hi1pqZasyNoX4JPw87EMys6Z9VfKSJ",
  "key14": "3wcUwy5qZP4NKVMfQzvzmb7TfDokPfcCzrxFBn6Z4KRbeL9GxCeDNwqftQwQMuGRSRmBDqtdnc2WRD4FLJAfojPK",
  "key15": "2EGHjXWMBWwHRwMQB8a92Dg3saCHnooqZqznHkoThgQ7tm6sR8xh5zakpfNS7mSpebacR4DGh9S1WxBmpvthu3Gv",
  "key16": "45tUKRhxmYZqP2vMKvnjMJzSX9jxni8feSTMr6y8NRsd48Uq6VQyoSdVRXj89gdteHFaYWsZzUfqGHJLMbh1ocm6",
  "key17": "V2R1J6qdRsdXt4dk4r1iLXFFf1NmQvpnnemnQFRULKiVLLpkiWNmpzgGKQpuNknhn8JQbqHjySh6Twx2WwjH8aN",
  "key18": "5z2jGtHEMyyWxzhMz1yAZ8SuTpgoSCr6A12VQvCghn7VtFgowP86RBF4si6s6NjXMCrh9dXN7vY8MXZqnUbwNzEP",
  "key19": "5FppbCQq7HY4MpCQcidtetyVKF1Gmxnx9BjjmZmhLbuouVSqEdzD1vMFzhssC471LWExuUHsz5cTVPKNaFhx2YE1",
  "key20": "2DsDhZSycza3UaggUSK5myDeqczAgNp8H5gW2Prgumnvv7QLBjycQZBWuzJFEXAdGVzpuziLR7NbYSMXjeqG9sR5",
  "key21": "4EX5eDUeaPnZsh4YccNfkV7pabzDG2YMsEzxYHTAvZsyfWSgswVvNMVwpRxVF3yHS5g4CWvS89YHMx7bkXeNbEQr",
  "key22": "2V91TxyZb9cqZw8jAyrHes9MgryRm7ip58Pncr73xMbTo7SC515FeKpciHDxi4msL2t6ccgN7MQhg4siH2AVet6K",
  "key23": "3YHMMh56Fqp8sZ7mJuh5EkGAsMU7UagB3gvUPnsWVjSYGnnZdDCR9fM3tnmUDevqzgeJXe1TWSA4EnxZwnnAhayD",
  "key24": "3THQ6xvEDBukQGFB2hRHiinotGr4wBvSjVZnX7JRG8F38tSjkCcGvn2k9NWvaFCHbPBkhZkxv7jNkq1h1EoWg4fP",
  "key25": "esd7LUZynyvZ6zRTvRciQpUWbbgfwSkfF6VqP43RVn34LShdaBb6Jpw49WtqAftaUrdHvMKe2DNVsYpvQj6utCf",
  "key26": "2Vjbed26ed2HCJGXF1nTpWGMprnpaYCWKEdL2YjX3uqibqdcmSiurFYHDbUx8rA3U4S71AYXofy7mMRbX8NKUZaa",
  "key27": "4YSuUqp38ghYgyqQvYT8AtPCUgnjggq6eTuP16Q22aHqkwnNQwXN4KzYsHLd6Hu2dosHe2ihzg5BJrhHyzCjipqw",
  "key28": "2MZng575QHJvCrqnt4uqugAF5wxredqH9GbWDgWXgXFEp4CMSit3iJKy2fH8GV4Tde3DXCctyDrBr4fbRZQc4jXF",
  "key29": "2dcRXAESSUDrkT8VrvD1Tgy6PLbZnXenYhhTivwNDGofGJBGtdcqropbBQogrjaY5hBWxAk3xXBweNcXvSFyadg2",
  "key30": "5p3BcR4hxduG4p45gndFCL4P7oXcjFGBkzraUaNHFA7SqxZJCKkexXuo1qGNMqCUHdM8XhEFbaEiKeAitsDMEEMG",
  "key31": "58NMBKFDtikmtcZXtgHKfTxWwc4wwZLUpxApXu4obY9AZryXeGyphPwaY9vZ2Jr3Bu5zbSXCojA2eoMxdZzVxQqV",
  "key32": "5Tq8CUBYCyvDhc6DPw7ETnx87NzmwRUWfAdXmG21ZDCpJAVyBEJKMiEnBRRQLojVWPB5bs6UqoiR1AkvUHyuM32K",
  "key33": "3FR6KeK84mhQB2p2f2iwTXxKkTpabyevrtY6bR4MoXtYeNW5Tr6MExvBcJJSdHtSBvWyM1XCdC2hGQULwFzFGwLL",
  "key34": "4GbP6DyhmXS1N8g3JXd4efBz8PYQaXdMQsTHe6WdfbDqxsHB3npy65kifpYqZhkGDf9ngrnULPFejkLsRyKrdebu"
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
