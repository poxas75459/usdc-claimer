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
    "3N4mGM16hbYfJE2ehkCitAMas1Uj6t7W4nu4pvTi5JXt9Lar8F9Gm2pziCNUxVK4gFNwehXpArqqNvhaCYi9VDST"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jQnwN9MyV73jjUhYgGWaM4Hbvm7H7Xqv1VeKAMwETT6MwYEfw3DY6QkJLDrXb8iu8ArWPK75Kk9tjJD1ervb2CK",
  "key1": "3AGsDUAjbfn7NsRjbFdW6K8o5xmCCUq7WkoSUQ1C2zjD1uV6PTnqH2THZxjjDc7gr8S6ZJz96WDNMDaEj9V6xf86",
  "key2": "cn173BeRUKetdXRcQmcSZs73h1gNXx3xins2mNn2Mb2of4LQFciExxJn5gkMvBG1zpWYPgMTzESBoR5P9kBxgTL",
  "key3": "5woY3YQwwX9sY5S4MuVz31ChGueF4mgE2JttHYBoHbuPTirrxh5RGSgkm77r7tJVzSNMWBfDtCtBzJsqiWzwrrZZ",
  "key4": "54twpLq1kP1rR3VWu5VmZfUpVrjSeWMvu47de1YztCfTrbWkYLAjcvn9jM2XQCxeUpYkz8Rz2cSccDniZRPh4dx5",
  "key5": "3dPvcxUFVB2WWnr5tZP9vkvWt6NwV9HNKLzZJWS2HVTBXfLLgN4RUsSfk1VeETL44C17Cca9dQTw8u45fMS7ZBwQ",
  "key6": "4iwX9B3ceddFfbQE9hNr2AwAt22gz5EptwVjHEvcVr9utCDUxR9h6TJqPNsyjbxJ2ap4hM3CDfexv9iksjDKHQPG",
  "key7": "2psKgx2VKGY3hSNgi2DTGe7gt2sCta8MjjV8DrymDpWJLzC73TUNKWJouZb1cE6KZ4GjN9mSqUmMN9TWFo8BAa8U",
  "key8": "4p5LUahYS7tN5AnKViawt3qTXCfCHrd831TssB6odbkHZpqe2vBHfHcNvWNzGku5YzyUtFrC3QatzVDJBB2WiFWS",
  "key9": "28ieZn52Kw9eagv7UhpVTnabBNKoPe1DXRC6fCUF2BXS2iT3frcYQ2b83XaGiDEYKo42xDBrcwVDkoCpoL6pBbX2",
  "key10": "2kMZpRafw5Djideb2xXYVHqinxQtbzA5ztwWAwMSYRiPTz1zeZk4NyD9e3RmZ1HfSJLv9jfCgAdugaudoNBgF2zF",
  "key11": "sC3v9QNDsh6nCVRtPQGV5kYTGpZrGi74g3RJ4kPR8MNV2c8Jgh2rzb73yAsAwm6Nkw43Mb1WMjZLfFjmL6ttpMc",
  "key12": "49hyhtHw6qW9qxVcRAQivpvTRWUHCb2thuy5mQZ14zQRjTAqcPfVQ7huShV37hdncxScFWuPgkMkUxA1efZnEZvU",
  "key13": "41jTGJ63mBbEQaKzF9LLb72DSf8YoKAYgXjjFBPpWrS3jyTpJ18bqBbS4wPQTErpvLZAHfE86Vz39SKfcAnHoSPr",
  "key14": "28SW1iW3q4t6GGKYHDpRmAMhmHeVweZB6f5azNLsa21DnhZj8WAaLLqR2YK1MfvQ1XsqZKm24Nx8kPbaWsdEBczH",
  "key15": "cy8deqNkdEdWcrv37y9vhhuMhigFi6pMUhpYimBksW1qYpXbKQfFk3NmNytNuhtR6wxHdvB3AcP2iWfKH4G7uMr",
  "key16": "2Pjr435zvDWbm3fYpjAaqPozLpoY84vMSm7dm2UaQBnavQUZwzYsxki7G8RCwNkoBftgimnFcdFsFhHGWoNs5T8K",
  "key17": "2Fs2FQ9T7y3GfbZFb4Sh6nSAGssYyxqaySfu3GJZkFR3NdACdR2Jwuo6Gb1538cmSL3QwrtcZZmrgW2vrLj9SQVS",
  "key18": "2PLiCTswHc4gvFCiLMB4nMvXzXPLzYmkzbZbD6eLhbLG3LoJReqnPytN1fRDzviqFSGicvudPB1vXgPJpX1CThFp",
  "key19": "3zHHdyiyxKM54xoAq8CMAHJiSrbg3dLjt32yht4Te9yVMJXoHx3MJnX6FKBG6mwGvJo4yGDB1rkJrw25KKjrjH9R",
  "key20": "4VG2CEanp1rt7oKWhQySFrn1HHP3MXdX9AHAji17VpT9xgEMKVGDHhWnvgwcpcmssrqAfxzSPcAcsxExxYSg9LZu",
  "key21": "2mntvFuYe5HBQt1MUnVDD6kTjzu6W8FJFqzZhAbibxwshu8YQov4yAjWrh5ohHenQ5pobC7dsVKAv7zMWm65AEfG",
  "key22": "3Qhu3YSbybQNLExFny9qtSozfyDRQFVbuG8DqCzbWfQkHXTp5SBNaipsPKAsEYXcJYSJw6fGNsjniuHQB8W1pgTL",
  "key23": "2c1cu7Y1hJbm6uaZpsp21BejmxdpsFWuco3fyw4DAPKztqTcDSa7a9pFf3Pv8AxijuvS8vK6MB1PchiYgwQQ2RCD",
  "key24": "48qhKB8VkEjcBEhURw57xChSaik2b2yW42VkoE5UcSLpwrH11GphWZmhgjKJmjkpmRnzoD3eNS6Px8ywcAUT4oqt",
  "key25": "jy727YCkTrD897BqHT2JkQ34qHdBoEL77Bcinwd7rZBPs9eQ63sNvgDhcHyg2XHmqLHjZUgkSM4X8qodjuoZCVn",
  "key26": "827AfgkeQGXJmArz5ZLG2ZBbyKqaennrziUF1xJW2m6b6UPLRXoDYAAyh49ZHye89mg8NKK7x94oafWExxHVMsE",
  "key27": "55PprCKDPpS4X5qRENf92D1wZa4BGdJPq6rMHcdKrAEJhF5Jsp7hxuu1sjwDxe9osbij5ztuWJaxMA9w8X8xxnE9",
  "key28": "4ZH2SNwuoa2DLy163LKRHLu2ZXaH1FDWkkgHKKkAXd4m2oekNbr4dBqA6c4KkRLc3oGCdQG8bkgUAc3CRpD4yiMM",
  "key29": "5bWQxQxuTbmtiFkAvT5bQPr2L9XS1amhkxE6mgf4wpJXY5cucgygZZEwjUJTyUvafEUoE4GVGX2huiBxw4DuLLWf",
  "key30": "3yuGt7C7RtVJJt6xDoKemQmgftoY1aAxdozMpyaSX9KKJXjq6GADdunjjEroZ7CnVCokCfTtCk1UFfzjhQfkfaTT",
  "key31": "u2Lxk8b6XNMv331a2CxRva3ZByS5ZZ8LcpvCaSwiBEnLmzzvJsfo6NBe76R7ugYSurVSX46M4dfPXrPziH1ya3t",
  "key32": "2Kpb27GXFibMcBzXoYv8Sae74SvgisM8fsJqaMKxub4wD2a8V7YQh1MZPXDhroFbWUgqh1dnvLNbjUEP4QP2R2H8",
  "key33": "7fGdNqd1kLhYvjv4kQrZWCMKJxudhBZNCszv4ZER5A9vLuixRf8w217YacSzJsJ67xbGUUR6oFJztrvMa2aceUW",
  "key34": "4KfGNeG34erK4we5yT75xDKy2xvrk6FvWKRu8nKHMGaudFmXRCJKvkc5a87Ppfg2re7CDTWxBM2PFuuPmNmdeM1Z",
  "key35": "QTWPuV4Am6C7Vv6bs3DtX435vLeyxB82qsGiTQg42ojxZw5SvBgESMiDT8NAxfuhxyjgY6NiZVaEp4SrMZXAM9r",
  "key36": "4TbALHwnjaeG8S6yaqKkwcidf2kr8QrHZokb1PeLvTHTqstp5t7r9PcrTacZUfEzWfCpr3KxXv57KD7cN3qZbpWa",
  "key37": "S76Y1cTFntpMvTVYxeBexWi3vucSeChrr2FxKD9rfrPuTnPVS24wwGFZnfaeU61DA8rL2FT3zoSXg19UbXfhtJS",
  "key38": "MGdU1docBnqeMS4XhfC3uYic424j4sqKyUFmynSzLdcoCsqbrkuXGb8anQ3obc1iF2V74tqUfHhKzWQ5xXqmPJ8",
  "key39": "4Bgif3c3UmmYwmRoAEvauwdPLTWVUEohGB35BLETxmJEkTkNCHbXZ6KpjZ3JGimvNfwVeMySaUrHpGF98wEdFUWW",
  "key40": "vbet1VZZn3wQumtCpmPUznwhSZxJtnHu2CGdWuiiCCDQiXVwDsDGXNQ24aV3bFQuMakKghH5JyoGUGzKQrhd6ix",
  "key41": "21CzcgwfabGdWnoJP7BUKRBbiFwRuDNf9qsKx9YvGj7Kh5nCcFB6vGFGzoDjMQAMQeJejFrYTzGa6ib8NZDFumBX",
  "key42": "5EfbEipWcjcyjt3z49fANQHT6k5MaecD7EUsebEDCL6CLLMNeyWBzyb9SK9w5WCCFXeATBifyDHgXXMsLUYLXG8Z",
  "key43": "3F9wNEbqyJ9YzjuXByjEkeN9ggDoVuFiuVXQhR42Bj6Ah5LTn7R2i7iZEoQAhzQmm4TUsLw9ZErWFTjV93bs9YAA"
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
