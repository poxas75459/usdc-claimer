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
    "4mWoRM4o1ejSVbLGrr1Jzw3Bpasoc1fnUqSydRMZmfTJmQXomLAYFwioQ4bNEzCYPffGrP5VwoCrkGNwA89WFgPJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "523qGkGHZ2iEPTQM8QUhMf4Cu3kB3dX3CjTEmLpYXJW1FLiBBgvmVfveQLRJ5tjtymCxZtbN2AVAbVHJ9pmM4ZZB",
  "key1": "RKQjKwKyyeURYUJCmCaeLHAsfXA6TGGXooJkDQVuextgRNkRunutjfHWW9WGpDvKErpJbPhNXTyfniXTWgS6nNk",
  "key2": "3AodcRn8HuEf1b4GjgdP5S6wZeUC5SzJEhqUzgK8NyhX6ru46GzBfJ1gt9HG9KohKJ8dVUho2Xw2etsVYXcDzpDJ",
  "key3": "5ShxL3JrwbFN1NBq2W35sooNavtwnxYMiv5F5np5vv7WWxEM61gDK5Qb15M9fi4ix1zFFczcHsXCzfDcLM5wVWkd",
  "key4": "2jr6HWNT5nzfhTRg55aN9vVrpH23fvd7wZHHpcaSqKTaHGigZGUZs6z5MnSSh3DM2qL17qkedLXHSsJKmmw1T14F",
  "key5": "33nV5FUkajLbXVzNNAeSTL4axRFCC1LcD5kKZrCptAVMX4z4TaHxPjAWdLFCTUvdQEU1TbJ5ucj3sdkubxzUCZqf",
  "key6": "3C5sbqAD2LGZth1q1aByCRDa6dopZXXdRbWaNzx8DrjswB5n3dMdur4JjCcFDyucPr1XT1A6kDo296Eo3Awgb2EE",
  "key7": "eUGo8U9hSp2kL26ydJJJN383KeXK7jSXURhBGdg98GerM6nFKrT9yH6kR1VQokGxgQQpbhG1EPhdpxKRtnQStdx",
  "key8": "1TW76i2t9g3YriEki4NebiJv9Z4vLfvgCVCCBao9zPB7uetAUcgpHCisi3q7UiYo19XJyxSREV4W8TsLP1zxUub",
  "key9": "2Sey2duHzid9MSCzcEknGFUujzpQ9cx1Z1vC79LYf9E8tP7yW127kjsHqE9b1k1Nb6M8z9X1516KVhDXZMqiPEwc",
  "key10": "3NutqX1GLXCd1ABs4Ld1DjCms9mdWZFFUpnFKetLy4Z1gkua3Cfwv8ufKUf1zmVxFwnwwEn5eZwMg2pFegTrypkW",
  "key11": "4ZRaHhmca53WXuoXAb5XDgHRwNnpC984Vue1VUhmY1ALyw9oMPWkTDGx9Mex8zPHBYKhQXfEEsbi7dECkJ3MPvLf",
  "key12": "467fep6mY9o5gndR5ZwcHHL52q7mdt6Ev49FfW5MfX23vbiYFYzHP3j1J75xxS9nxMze6C6M3KpNFuxfY5C8tvir",
  "key13": "52WWcWLS6XQzZiGmbyZdNPcHMTYiyroC1qCuxxFMce1YidTRfyYbAYaqMfYswEcE2cbu5hAedbSZFcCXLGTaZHEu",
  "key14": "3cxs5diKZWq2hR8cUfKSpRrPHiuxkRE6ki3DcSSQkWK7bq5W2dotAuuXk8W3vL7gd8cdYDFE8fYLa7NkRpjDRTgE",
  "key15": "2cAwSr4akUtzACm98puYDa4yWpVbvphRr3CmAkeetqsNTjDEgzCFcegmhiv3PaVeAZhkgkzCKxtnrdeaAwGAaxAU",
  "key16": "2Xb3XZzSg19HpaaFfUeesvcwuFAJ4etfxSy6bFjki3W5Y86MdxqCKJ3YB8J6hLqzJe55D3bgjL4BXXRXrEJivAh7",
  "key17": "5QhcShoMvpCsdFghKuzqeJGnDwFpGcwiJ5PuUTH5nrsVTjwTmtEF7wyhHzaFGP2ww943f1Lq1tdvuR1PVzw3GQpH",
  "key18": "3imtC4yc2KHz8K28xRSnbEY7qzHscL7W3zAtrpyJuXaTWvACQpUUHBDNJ55LrBcrLobibduh4GRcqZkx9pA3i7Yk",
  "key19": "4iYG4YFBckBVnTKCkwDQtKqUsYoDdLWvi6cy2iZbaLn1Z9LT8Mdj4DcTf3wZMLqk5J2YC2qYUiyLNjutGpyiDFQQ",
  "key20": "5WjQn49SRpccdnnboEqede3tVq1K8qEhkq5QRY4KZpusyeQ8dt2uxj63LrpkFYH5nummDbeJpqNQndSyGHjQVfLS",
  "key21": "4YsA6WAvvDQRy2dAkEeaJ8CNry83eC1s5Fp7gTTbSKnxDBcXmA5XKfcKsThse3RPCYvAH9HGZyLA1eCvPT7tD2Au",
  "key22": "4AqL97BLhZdSu3xgAb68T1k5sSMudXDUeJ5ryfLg895a5KHdgyvBubXwcWZBzUEu6WWoee9BNwCfQMQt4iYLNmrY",
  "key23": "5W17z1UGAYbEfKKMoE9xzfFN8yNBk7xpuMw8HdwjzsfKuAK8cw3ET12a26zP4M7DEUanCMmn17mWRBFpTvNiCtWA",
  "key24": "2ThsWdNhQi1NLFnePNDyjwCbUAUv4cDGTyE9DRgGn3fRdQjQxPvnPPfynbHhspjttcUTf73XPmFUCFpXY1SwujB7",
  "key25": "46P3h66fWskAwZXXMGETBpCntpQXeLGMShjquRDmY91RWPt2k7WqbWiiMH52gYhKFjA58cbQRZZtAVA7ZMKFedQy",
  "key26": "3Huesf5GAxRQVswteATjxyPsUj8ceQScgcw5rXgcLLBPDg1E4KtBuNyo92FGaNbHEdLuLCsfagGmTjHETDoa36wN",
  "key27": "2RpNaSLVe8wp86FiQzASgC556hdY37i8jL65zMxEXi6DgC2BNWxYoY7a6b3kAhvpjNEpwC7bkXLtzWmSFnGUeNZK",
  "key28": "5ncbbYY32XdumXdbxByZh3cjc3v7Ctn3GTFiW6RRjN6hcpL3LATUVve5VnVcg4cKcFW9Q8yVkTW44V3d7VkqSrXY",
  "key29": "9C3vTFqUaGiyEV3c1oBdi9rd6SLxLbYit6AAUz7drhDoEVSWR6BkM2R9fRsGyrgKwENvV2vJSJWzqQrqLLGbNiE",
  "key30": "4gWDjNwTZdviyQ5mf9VSm98piCvsT9psVXh6y6jpxy7smJ7aNAJDpqDA8zR9C8tPbBfmwVNjzv2T67xxnWj8QbW6",
  "key31": "3fzwyAiF7kHgpWaFKvWh49qbCAkRFTr7ZzdPsFVTi7LnNFhVTQat9MuJXFDmsrVvBxw8YmyMyr6ZyrzFYkNmvmoQ",
  "key32": "3QdXNZoPsvVNqoo65Bz9vr7uQ2WFqknhC2sk8LHAKPBC7dkiFVNd7urEDzgJM4wPwiiPvF4FgJyapyR7ZrdiYhh6"
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
