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
    "34hPE9pD9PToDhTMi1UsLHGLt3LBV2SozmMCUQLCXSArdWuYEYsRzWYnzdAmnFLmdiZYYLpSFKf18xMiy2JDcSeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iqc1VkD5EbKgNnkWpSMZ5UY9cpDwT9x7MrvJ1sx7hdaTVYehJmnVTg7Q9HmsthuCumK8qnGPKNhEidid9nW4eJn",
  "key1": "3k1NtDPGZtnJWHaokY7cYTqQMg49XmJnRdfWAqTMKHFtxWHR7HfzoJ99V44WuVVC7up4zkxmybKGqvA4tGUbSVoq",
  "key2": "5cgoxyVYxmFUykWvkXvhC7tFwtQQhZjfnc1Ujgstft2DMtJWKu8QKB9tuEC6cXvcLjpnHtttpcCPm5F4onYtjFDu",
  "key3": "2x7WKDqaJwiXNBZRiwvr1XjoY3FaQeZZaHxfTF6KXFJqPRAAMoeLii3sAmfS7JPknHbK1DuvK4nRnFHkHcDJKF9X",
  "key4": "38UvwbmrM3ssJzmQLvCTxxEAC7b8UT5D2jsxs9b2QZBR61dyRWU6SGg26c5orpo5KDNHvm3yBDFkhzKDvPBLuEVn",
  "key5": "yLzLWgrgkBRbkDGFUZT1sU31wuB9xkbsMtNPE5L3it1pYJfadsN3JTdWAXgUz49E12RD1C3sLYR5Fy8HLJ3scmX",
  "key6": "1EmmFVr8hkNSgopk6er6BTrQ6jFVoZYvZmZT1XtodDpUTS7fagMF67Aakv3EaNwCqSesauGvWxmSGeP61GZopsR",
  "key7": "3bgG1XLX8P39h4muqwr9EpCXSu6vMaaDQ5EbB5MmbiSKmxyrPYdvAt3xLKfqtLYcBDED1dhvwC4QrHWfN9XUmkry",
  "key8": "2iq5cap7bE3rBHLmUKmnCGFn4FUTHmieLAHfo3QqbQkFh6cRAsCJbjTqitTd7SA8a551nr9x17H5j9PziAUwC2iS",
  "key9": "5nQFHqukTsiUc54fiPxddrJwbX2zmYiQT63ogM1XXHFjx49ahyTcqKtVzuzyGTVi7594YxK9H5RGVhw1ji8M2qYC",
  "key10": "2CUVS61BtxpHhpbpq5Zgti9WyeHN4SNPzZMmu52Ddoopkjvk2bypsp5PqpgeydB75hsqapZLV327vG2auWkKsra6",
  "key11": "5JBN93DjdvKtvaZGAsycEwF89cRzE5VcH5PAYkuwrnjjNc7Evt8qfYC1m3GRMBZPxtQyGQD3eyZFAKtwSQimvBEg",
  "key12": "2Ag6DAebuMAqm1Wn9LG8ytu3RfrEDLvTJmRRMAN7xxtJ8CWHM3ujvyS9NxdYTFPSijseAaesyuzdo8nq6iGVsodk",
  "key13": "5rJgNkhddD2gZcncx4MRzt6VYH5pB2GgpTyg3qKEpa9Ycmo6eqPi1HZPspgYZpCvTskiYT33RTsjPLsFViiD5Ds5",
  "key14": "3YBs2tJ8Eqg96wqh5sa7Y8xmBfcEoL9Qn5diyqa4MoHv5zmWYyE56ApVhEmfP7z3P4hC7cNmGXc2ZQfqKvj7dYWw",
  "key15": "6hfYnaq4kHnQ1ZJLgsiBtrqfmgUhfzRHZ5njzobrHXM8ZTEFiJTGwDFqrrXxAZ2Cc8fHenTesYWrCSPagppp4Tm",
  "key16": "5TqCpb2sG7chn3Qq1XnKsnwJQivf7pch4yTyDMMB41NrSF4iTtCtqXrzZKuZk2KTHzFDrTWW2dd7GoCqdKrJrtxm",
  "key17": "4jaNgikfVyzxRzLMJbKQnXEfRiKjCMUGBPgpf3yCs6nSCVsuWD3HkpJKMHdaJnH15Sao5wUS5MzYgCuAKzptaiyu",
  "key18": "2VLygtGkj7iDyio4Knu6GRJ5JMhMAr6sMHeqmwazNYC5TSRVqPgowD1JQMNmQcnV2iCjtW6naceNmqrcoygrBtCR",
  "key19": "4UZFhG9XzXNMox5K5juaqiMwFmV5DiT3HBmbP3pZfnUjfa85pXiYJ4v28usd78SPXVHNVSeQ6xaYefjTc6yLSpLz",
  "key20": "3usKDQfwHzwfsUkhDC9kSkW7xmCxypTRbaFE3i3wUpzcXo2WZsD7xXJPU6AQvXsN4K3A91P5AbwgQwfmVKATzbTq",
  "key21": "j1qjgEmoTaEgHm3se4rnRZ78kWJsjWgjpQ2wnfPFPJhWH27nks6jedAjBFyhAtcChefmCUd4LmYiodQqM6UnY3h",
  "key22": "2p4DsLcd8WEGutcDEUL7Zz7nTH6vZLsXy9g45dcwbXY7yjBQpkRBq1wWFxHZfLg1Bymx2r1oC7HARpoasyX4M3MC",
  "key23": "3Q19ULuW6X7tAQKt4yza4R7uYrNsQ2owv6TcoxRo2JRky58mRnicgvbnwcPgMFUgCPHLLYKopBxc3juEWsouvScC",
  "key24": "S6pjARPKM12jewRjApbtC9nsQRTa5HL4Twas7NxUKASkoG9QDUcAqgCVXyind1B1di8Sfiv5D2WqZ9LQrsis6DX",
  "key25": "48UX3AZY9vrtA9J6o7hnQj51GamxMhZbhmRKAP2sxbsAUPbDPepopkt86ipgmt65MMxKFu4ycgHtuDujgKjnPhg7",
  "key26": "4hBPfgr8sRZx7ovPjKAHXHgPAU1VTptjjNZbLw46cCejArR3e15Ye1H5bFmBLNxXeXgNpuUraxAAVx9fVyGrUPAG",
  "key27": "3HUPNfy2gaMrWGMmvL2nJntoDDBqyrZCoWxDdPVLsnewYgWzj2vWUzJiJFmeCtPBZsZ3Z4sQsEdbYgJvUoRuYEM9",
  "key28": "2z4QjVkfAnvH2ErTpY8QsSpELmCzHDJg7a2Z3h3bpDKuqACPXCFUEte4F9ABHadXuwa1iz35ueU3t5FwLjkUdsZH",
  "key29": "37AFqW6TbicDDRPAigvBxFhEreGULrwyymrtFgUwuPVawb1jwgBen7CnuPVN7mrwj1goeYrvCd9m5S5NaBn35Ya1",
  "key30": "2Tk7jxwLJMbSzywKdLoWEhaQh7Qyt9Tdw5Eu4y9pxpJWjjWeRkpqXecoKZWjDyfA4LMPZi3LaAZmTyMvGLwMtsd1",
  "key31": "3rG7426Zy4Jmov8SiE4paViWSP4Lf9QozHCeFpBNegFi7ugvukr3E9ZTTBK7RHKNziP11DDa2oNbqMcSBp5eFRVv",
  "key32": "2VXtqmbVxkkdCdhLpM5FZdbZqNVWYbTcnumGTjEhcZdAQHLPFDRhC8agvAyVqUuJsf4RKZsS7bMHeishsix5EmMv",
  "key33": "62cZmku3uWQyYvXzzVoMRJvyDSCU1Hg5TGP1DXYJ1NcUtLHS6NRHwGanVFSxWdcAicj8h33NgvbFwBCvsjDJa8kL",
  "key34": "4kPUJsuJRzcAxNAUQvD8fH21NMh5vforvcou4KK5VmHPRpX5yzTVqHtUczJojJSA2X4tYAZycFfe2sPgkUdv3sgs",
  "key35": "2oLFZCweq2oN9Hw8ZK2cjCUj5mvo7Mkca5pczYHYfj5c8p9wySsUdheHRnBXtWVWLdGGZFkvpqhJPEQJgiM7CkP8",
  "key36": "2CDN4ZPUAB596oBv4TGx85FLef9io8TNu8FhC5MgssvR7iSWw4985L9juQwc3wCHXSAHJVsNz6CEyAYbE3F43Y2P",
  "key37": "4ioVBhgWrvWL3ohyTK3NQD1urT9nq9336MtPM31nhEXHwQn1V2ty6PfjDwADyPXUmLLHakoszCeWch3gnYabUGz3",
  "key38": "2wDMfmoBTHCfq6w8th2k8dx1cRqr79q3qGrAW8m5211Bs1BKAYeCnR7yApedXqKk65wmbZvMjBF4tc7ftxc7fQWS",
  "key39": "4TxBcQXTv5PwAoAgfuZu47A4GBWP7W2XozhT1WrCjbNcT3zamgtkMuNdSMNmA8x2wyozFU7xBLVKjxAdFYgPJ1aP",
  "key40": "3bChVQvNpTTgZRCVgj8pK33HyhaKKaypNRmFNuZ91cZUZJezBg3ywipuKyi3DFzziDp5zk2rGK9zyu9u1nPiSqkC",
  "key41": "4RS8A6s3HZ3GS5V2ipPFNnPJHALAsXXz1YJQfZarCV75JEX72xpaVVEvwNW7tELGiM5ydP6VRgSfTYaLnQc3kcyo",
  "key42": "64UMznDubJXdKH4wioskJZ5t85R3AJV5iiknCnB7RMhoejz4DRSyRksgjbTaWtYXwMWEefd4zpMKGKmTkVxyzmkv",
  "key43": "JS8tURRhD7ErPozwVhQqeRPWfLBnGNMfNA9jVrgV7Ge7NnZUXX7zmcUHyKhe6kfqwThMaa8tdcsncxNcrMnZy2B",
  "key44": "3bsLn3VDcxPp1vuMTqk1sL8SYkwkgSmc4pE1Fb9is15kzzoSijn7okPRvMboDUDhbT7qEnDf33XYvAaBRrBTPtPb",
  "key45": "4LSk52nBZqFezdtz2BAyzUYcK7KbWYB1Szqh3Jwi4fRgiDZBaYsw5r85MF4CsMSFysnvwZemeAPyqy2U9jygDos5"
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
