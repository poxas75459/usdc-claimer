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
    "3wuGiEfSuWwdNfzcBit1J479ti7VYAnFZ5P5gTw38zZYehuAGLwtcgonQQxbEnWLiKGUmVjsdXN8bw4hD1i6Ri4X"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57FqMtp1DGmBCm9KnM6fzrihRxUM8yYBTzEeLjaLiTuRi7tiPsb4eZZDxJ2rfnGa5FCEaagygLAMmqLeyQTj22DZ",
  "key1": "3mChGuZdFw1ErAvoTM4QNVRtMtKR6AzZMSLg94xuTmCparFfXqXgiNqe1RSR8AQcRwbB82McvJyDizSrYEdHg81h",
  "key2": "5jm5BeviNZL16Qu2FTsGAmqoD8LdRpEvHZE1ZpTeqpkiVYRRUvdw7BE4DtCNX7btvbmzkSR1EgvXGTTBunpXWx1u",
  "key3": "4N9J4e2PBRUtq2x4NRbFrPDKsyLrMe3Ga9LRPMVcyDeC6JmXsa5NR6N6LAeGg2EJx7chdLt1BT4rmhnv2c5gm3kX",
  "key4": "4QffSNqd3MboU416pqV5VNadnrSoapL3X2LcuzhK1hyEPuCx8sdG1T7ztKdFgSyPGFiZ3yziBSYWXMdKyX7Jfon",
  "key5": "vd6PdQpMiJj4zhfnXpw96t1zXvY3epJqwjt3Z3oApZ7ZWZz5c5YH8y3daQvP8jZiKFagW91FW3s5xFrEjMEWsbn",
  "key6": "2Xex9nQo6JF2S5tDgJSXNr2XStCdv6pqvF7yREuXpTamLB6MuiS6kCo89FQhLz3zVYPan9jxY54Tp5ESFmRK9rx6",
  "key7": "kpj4zUCDUse5bwo79LhLRDAsm68MPW5cNjW3BdiRkkcMzkeZqLQcRSAwa5GAcN2NBjvDTUu9NjiSQ6TmM7t9eyx",
  "key8": "2Pmj97K6g48GgA46u4ByuUEtLPBTeBmExvhw6P5YpT6bBJhHDfjQxG9aj5s9U2LZTnLCdkKdfdQkqFLGLBwG1cKc",
  "key9": "4U1CyVo2861FF9Lq1SNGUSNZtxV4UxRyZqubAKzLWGWT87tvkEYA3EVLVZUs4B2yYg5Ed8hY8ru3PG5VzPJkdyah",
  "key10": "2mSnom7FjcyRKgJGAHGRY3K7DqrhEhXvpqH1YYgXigPJ9P8CKkUBgQuNGTFE6JTs74RyZGJHdNjGKZWywzSkP8EB",
  "key11": "4iovAHe6cyFjAbHMZ6c7UmL2tF1Y91BawUzDv9XyvbepeLtZQC3gd5c5SLkJc4Hm9j2aoWABefKKMceK1Kcahoza",
  "key12": "2UgB8VWSyoYgRmrxG4CEN5w6dF8wXG4HV48ziSR9YAW4zJAKQwRXLhDqJNCBr7vRqBJH2LXLGAiW5FXAA5T8D3Jf",
  "key13": "5FDVjYXZRAsYsodJuAmiWTcaEvUJpBLM1Xi1VZHTsKNzDuc5bnbnkVLRTm9KywJq7GP8WX7zNA3UBGWtrBdLVDsE",
  "key14": "2rZZ62NGi6Agu2AwD66nXjQe7FDRW4epSQPpKJdagcSCrAx7t46A5K92nzKwdbgXiCm9YjM9JjgNMkJAGmwvfcym",
  "key15": "FDQT4n4hnKrPdKUeEdtiNSPaFpwC2q2jx7U99q125E3BYUb8gMrmxhfkskFJxsQVE3VVzfFUXdS8XSBvf9uk8uM",
  "key16": "41BVKJZGVBEfwZ1KUj4Knfn8V9BYmKW9fi7DJXVW5dhvC15AF1wxHnTkvvsK4GF6m3qZpxsknKVXeSTNoJk4SiER",
  "key17": "2fJNGk4JweiA3LDoBPbxExJK9WUYeCwLYNcY5JU1z9Km2FaumdHYsSjYgptvT8EHyjDHbWJcgBvtnsqxfJuAeyF9",
  "key18": "4vBEcds2QT7AS7CvcpqiJfEKkB2cR6T3hjsviDZ7pF7fbeLTp7wjg4iVHEfGxEGpuxKRUejc3Kx1eSJZv7kwXQd",
  "key19": "7RPgwaTqWMFM8FG3J4eKaeCHbj3Rtekau2jTWbD6xyWsXhXXbWxqYK7CnyHPzpyMkC6bSSCwTSeMjDYBFwfVzvs",
  "key20": "4WxyWAmE7NuWsRiXfVQ58JNHRy2W1fV2AiDJqcFvKKq92xGc7KkS8KLXQ45ve6myX5bbhrBtB5AdPX8s2yHDHhUr",
  "key21": "526y1LBAd26ieY9v6zaTonjqeMk99QRuQxo9kZ54doJ9j6navhWZZ4NwXQtvh1M2QoxdEwAEDGfp73kqYGYwkxFV",
  "key22": "2NW7zCEYumy2bYYDBGon2ySUNuJpSEkmJTe4qRGbLcZmXFexGeaquyUxz8jGsPTqit91UP86Q4uyH21ogKunx8op",
  "key23": "5cMcUxgud9W9JhS39skXm9h45Tv1GkqRiMwkotuVRVf9QWSccvCNokHGBAc1gvkdYou2w3XMYgV1dMftKXdZGMCH",
  "key24": "2tcBScZ2ZDPBNERiWbebobQMXBSEDMXZjKugp6uAgXAbfLnxycGLC7aUNf2kmsVaiKfdmwvGv39kJytdakuQRzY9",
  "key25": "3QExQsARyrHTHRF1iRjkRwDue5Qw92nfwEjVhYRM3cLSMdzbruwoRgkAJn6p1PGzdZA4eGDY3JHDZgm15JUhmeaD",
  "key26": "3WbGM7AToypjipvbEw2EfLy7x5eztcPWAfVo1q7yTZmrUaKf1M8bGMMSLTiLSb3tbVS1CpnQ1sDCQYMefEFovEdy",
  "key27": "gBfw8gXxFAxQZwA3ACdhFq9CdTR1vWiuQBNibYHwGN66TDfoiqLMxJrg8v3wQJGsZFnRyPux2Yb927hjZjiHcd4",
  "key28": "2rG6DmRfWVUGwkG2c34HCPQfbbE274EaL7AevWv5g2SmfxxaETd4Jou2M3eXdTuLkS495LYUTH9zZonT3dqtyYRi",
  "key29": "4wt84m2S6VvYi7FA9TEFu1sEq6J4QD77bZQPgvScAekjLn68ahoQQh543rgztZGwAm81MJaRpmKpXetbyaRvik8S",
  "key30": "X8ijeZwN8bfTRWQ8hgzUMFNvDYztBh8ShLdTzqsnUAxFzKiPLuf7CSSkWuaut4Z3KiiDsQ45rrTNH9FMH4R1zGu",
  "key31": "uNHRnzEZd5wcgi5gD3uMLoyZYSSDoZ831UHXEune4xVUJQrySzwa3gJyzS1zRRGngPmB1soH5AWPfDz1aiue28F",
  "key32": "2qYtYqZRgL7uBCPGiFtd1UT6jA5PNBcwCPtvpePj6zzhzi3KuTMFTC2nwTUdBbqvhz4Y34HWFco5kbyaKxQngrDE",
  "key33": "2yku5ib2H8U1ea9spRJNYymMM7DMEYQsHaThswzEDK4mpSd11AvZbemdD1FGeo3zBSWAarg3vScquoTCZbgpJzJ9",
  "key34": "AWfYhWZkhw26hDCb9YEd97d1VeYvVrKhzYmT61wWb5VpxFb3uAHvZkkAxe6sU5hNs7dsVys6HhwfD3pikPQnjrL",
  "key35": "4fXuf2oP4JiXFyV93fWFUAFr5DLr7vpExo25SL6cV8zynuNxHqvxrjwmfR7tmjiUPvW6g62PR9NCV3dgfEtEDZ7x",
  "key36": "39YJFUZh8Fwb6FcxyMsMCnNY24D4N3nMtMXT6UGmoTGNbm6McrNKmzy1nkqD6T9USwQ2xgjqmkEBD67u92gB8H2f",
  "key37": "5svqyDRopBBQMBms4JSF24n56gAbLyadyrN94cx8kKUhRHkhzp78XFJn8fxfxxs9SfWY8CwkHoX7dHmUXC6SeYC2",
  "key38": "5QMxfj8zjKB5KMojGv5YB8XdfZvYQzo9bDCpbv4vcKqiqGdf2qT566Dj7nYm6y4pXCkAAxifn6NUrQuESTBGe6xS",
  "key39": "d5TWiGbUTNsz7FU31KjEgLR2YAfzvYrFeKn8UmevMEyw2kw5EEgvjjbr8yUXfnk3heq9iP6y4Zknysn8ShGJ6Qc",
  "key40": "63FuDm8q7RwkvgTPFkaszw4AFsA76kQ9Vxt5K59jAS4DL9CS9UQgzza3KhJAdfqZcYEfuDt7oP8F4yBgP5N4LFi2",
  "key41": "3xXiySLAhzvjs3Q4qzScGtML6jTXURcMv9uHJpbCREGyV8UZRAS1LTXcLyPMSfK8rxx14JnT7yfTXdCxs6F2c4mv",
  "key42": "4B6nNVaGNVU4WC4P7LeRco4QBytdNVHXJG7g5Sd5FNemFn7uxmWEGFCY3xDwmCQMhc2E6jjPLkdroCcWk49MLYM7",
  "key43": "4a3PES96M2a4dmTUeYW7o2qt5X32UwLAW3gMaJM1a2xBAL8uqC8YVeRsRZBiLTsZTXk6aBy1Epa2k2t6af5nBFBq",
  "key44": "2R418CrHpuB9yH1kCn3N4UWhvGWqVCj4vzY27q9i9oeDT64CsykEUGhSSmra8nWZkSbCumRVov6TPmfS5mfyUqJg",
  "key45": "4Tqv8omJVy5sdDewAXT8ykaFXuxJTn4VZH3q13ww2uo2x78QUdhPPTuvyKEwH5YN2tJ1HumSoDKD5AZXGC3E4ftg",
  "key46": "2jv6VeGmQybvV9hEp91sZhNYHfkuDtT5STJrtbaAubvZ6Fax1VDnqe96EcDChuCUbZ878g85R5PzTSKPdXwwiVvs",
  "key47": "2rXzUQ2j6Mzpj3dzeuSL4u1gAz2cEBkFtnPEJ9uvgDMEfSoxKo9gZt7wHGHdqBUoHYHCuZtVFHVBQwqWDR4Z2R6U",
  "key48": "r1VG1h2drFMpPQeJ3p2NS9MNDszYQXQqjansgRRMoe7PUdfU7n6LUuZK6qSbpMw44tWwRFhXpf9pxymYHtiG2eH",
  "key49": "2sS98GWpnK6jm9Bk9EeWz7NPLucMn6a6ZCfE5mYAmpJNdAWTY7kybdm8NVkJAUDL16QUHY6kHULZ67soaRPgLb7e"
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
