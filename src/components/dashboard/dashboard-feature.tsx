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
    "2cBY8wzArrTgP7GoutLeXv2FozMA9AudSyDmBu5n7C8xCWC9kjKQzUpQX4Zitmb2p3qP3Ky9AX6izivX6Z3JjpgS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GbhhkQBvGqqmJBkSk31eP1xgknYQ12UqmiQZQc5FhhLZj3irdcoyroRjn6oay1Dkypj4tXgPPN4pUim7KQXkqw3",
  "key1": "szhgsrPM4x6U5mkWp4g9wCtKLaPamPgA6uJcgHFJb1mnJvg69VTorRYDKfhBUkap9D63nCnAPyqSWYqN8WkMAoU",
  "key2": "31FNS52yiBK6LDsDnVr9b8pHrkPscXUqJuqAEqty6MMLYZoYCoc7onXZGzbnVf28qVUivRXSUZGVLrDDFUYLtR26",
  "key3": "xu3CFxNdhC6ouiQjaKkd8VQraoFkv6h9hNrH76syqbU3QZ7bzFZ6dUEUK3cR38ZXxoEH2SM87jC7tK9gBzH1sKz",
  "key4": "38KsvTgUeZVsh3ZbkyhSQ5GHRZsq1frPh9iSJ3dS4Xfkhy8tFmrhFDW1ogSQ7fm8VNHZpAg2gu4z6SzXSL1JXrJb",
  "key5": "5z7zvRFScLczgqeJPyaJKZSwAn2Da5ge5WsKaH1Jx7EDShbR32Z4ZLHJQHNimwGaKY2PLsqKWVKzo4hBBrHz5tXv",
  "key6": "5PrUoFjim9DqisHC8UZxASPM5DaGijP9uiKEJrFzQVJsmpsiYK7DZi9ozH5tGchGp49FmvYhTEWnVdpTDE6RyKQ5",
  "key7": "2rQ3JnDWKbXmLswMKBBakJeDkdc1dyPavjvEBN4i3Pn1j9tQRTHi2j6heNVxfqYAPVBQ36Ut7ta552ePtnxmXhXC",
  "key8": "3ScZmRa9btjYZVPNsv5KdoV5eMSexp8SWheRpD67Cx299hCYkP8TKANK6JamPhD6GuQ8QM9nFoZ1dcpFR8EMb3Tv",
  "key9": "5fHoD6YdcPXVHYvDZQengJZVQDjJvu5kMeY8aNt47zU6t47PxRMefddkfzdfBvckrUWkobL6crHYnZMKeRKymBks",
  "key10": "5ghC33ZmCkgdvAGLYnjUNj6Ax8qJnqznjKuSMXYXvYGZiJAoqKC5HFis4czTDwyFehbUZm4feT4yC5aSaZFnZzkW",
  "key11": "D22KYUd2PDDPvWfQFQATQUx5fM3PyzoEvcJqPN3CKTYcevNXcpdTJULY9BdJpvtFJKvSc9d8Fvt4o4WCHEKozyC",
  "key12": "4WNdzEAqMi6u2kFbnGCdidqRgK6MzJViP79VRE268j97d7bjbeNagtK7v62afPvGcefb4Lb8J88QVrtzK8wfH1SS",
  "key13": "5eB3x9cuWaK8DUvHXFuS3GmC4YTim5gTJyuGEa7MEKYJfRce6qrUwbaedrG3EpQeXmkVyuPEDBwgX2wiuqGiJejT",
  "key14": "38aUnJBrGnpMJfc1KAXjNizyXZqK9PfdZkZHWh3jzbCX5hiUSKadzns8tNAUq5qHTWvy44mos16ZDAFSbCizi6K4",
  "key15": "6383DFxaqt4SQ3fuYyNAaMPrGUeBL2NJZLFrsEp5RYfpBkoiFeGB8eNY7s8cBHpS5caREmHY8EWr9MkcsysiWx3D",
  "key16": "4joFEZDN4pEKwVV3GmgFpGYCfyF8fAKAnNHtffUMk2jkcJMyNPFp26WtHp84w1UNuLxA3ePxcsFc7BH4ebX6JT4K",
  "key17": "3551UKCjc515o7vGsWmcj4girkxv66JuprpR9N4j64SYvxJq1Wv53Gr689YpT1YPqosLeCQFD2XWW57PbNq96Ytr",
  "key18": "2GCLEvf4RQdzBUq3rqpX8P8La9f1B6LE6ow8VZnwsD2s4XDbtEVAp18mgiSoGy4kgxSa5nZ8sQgFXwuai3GVtefw",
  "key19": "5gRfzgxLovuvKcYWpMNWSxd1ZqFGKCM7Yt5HewZiGChi3jtj75shYccwf1CP2FnLzChro6znqRGcQwRJiZzqeSNm",
  "key20": "3tnZV5t7PTtBp3497nLEeEGHAsmQ4wZipaupjt6HGjopZS13VxtJp9uRQTZcsxJJMekeXvdzJpow86ybhjt6BtUM",
  "key21": "aeZnXXdrtLpkxtj3iRMqeR6m4sEizimW7wE6asYbHnPLyFHr1ctsYatoCC7ZeDTSBwWTL4n7WmdB4qjD2KbEuuL",
  "key22": "2TxqJwHU8943Po5yZPV9cE5ESmUP47X4WmwXajW7kZY3BFq3pZdwyTb1pwM6VNFe4EouokFxGjkfpNxf2zcJHtdk",
  "key23": "5SZPPBzTHVJpNpeZ2dmcBAWaR7BtgVypsLsYpJquVKSu2zUZuxTzwxsnjHoB5VzLUSjFVfHr6AV4X7G7o1hK7iAQ",
  "key24": "57TR1izhtAPS8kmWyvsQVadcwZXxQo5VtdCakh7Hzyn2AodB89Hr6seEUKNGb9xJen44gy82psd5tDodHb5aoAzR",
  "key25": "JRxX937A1rsRzSwwppAUhMxrifvPptEmGXCgx7U1fEZsUQCTZJdqGMaon6JWNbckBzf6zgqvUV6kSTAebWuDCdx",
  "key26": "s9BFprNw2C7KvBqAp4xCBRc8p91Chtq5xxyVEiedCnvbsA81x2mXsQ5CVgh11F4EHa5wTEnDdKaz3p4BbjWGs3M",
  "key27": "tK8L59kio3mh8HJhyLJpHRH7XwTeQhAnHJH59M3zphCL6fqD2YVv49ZPEqA1ESrMh475diEk6vLjgAsDLFubBrf",
  "key28": "4afzJRmPrTXSnyDfm2AZJ8C1SyiGcsHqvfqJ288okPdnVwt9h2bSfTUHYi4SkrAb9J9kGMyrLuE3Yzh7FiENS8jm",
  "key29": "4KUXV2QgN7nCvrmyBeJbe2sYPG7TnKhgXpd5vAvas3vVuknzoKW3FFBMxoZrhwJ4hwmJK7Jb6mFrFzXiuH6A7X4",
  "key30": "5jtUb3TWCRftYSCfFDZpJb8XUc5m8m267YhwDnJ3t8cghr8MAVnNUGqvpyyfBYsu2oABuV2okjxbSMsKuedDqEbe",
  "key31": "4wiqzbyrpkuimvkqUshE296ttyXSgsfNWqd1r4mxsmaMb6NirD2BtRL93o4s1PsZLoBDkJX2ktMgPoW5L7t5P87f",
  "key32": "FVhW1MMuRT2yS873aVe6wnJxRTch3jhaKrsM4HF4i5pURPVcAaNiuVCCJfaENpW2hJd95efUej3dUMU8Uhr3sEG"
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
