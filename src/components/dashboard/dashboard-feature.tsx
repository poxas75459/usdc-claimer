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
    "29xEct2E1GJCHVVcUHiuyskDXsSr3NEgRAwxKnDXACMSw8kZZEoeRXegSgiZ3pDNtrFTaSyUvcCXUu6NLEEs56td"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BHVSuHEaxL5VrJKSrGzd2BngWetiL6Ewn1PQeoc2eFwyiQ76cDY1t3LJdhzg3XS23LNvtCZsbrmxkrhDdLF9kVh",
  "key1": "5L4MSnbZnP6Vq7Bpy114FfyhKbzWbS2WFp1s5HuJYRhwBXNDchkr99cuRNG4xuiZ8j3kdg2WRJ6HGRSXfHwFz91v",
  "key2": "2MbbBdHotCRVwipe3cfQDM3BQdrz2bVxMR83ivJqr7hb2xhRLZzZ9Ywb75WB8fSamjefaMLNvjitzzRybsoEcDNk",
  "key3": "496gVmAvk5yDS3p17EqZoNtFT6DUsbLy8rnpodZk3SQjqn1Q9Qg36HACPdLnCJ9RfQP4iBF2EgsUWhW4zspJra2x",
  "key4": "2a39CWmjPY4FC9dkMaSPpsnbehNyGoT2rThEP2c5Hz8GdvMmg3qzJShjkGA81dNWNds9w7syJaMccENvYyGtdDw4",
  "key5": "253ycMdQC91vTP9zMW2UpHGGBMjmnz5iaewR7Y5SToPfsfyt3v51D3u3MHuKJaxuAbtmg3abLY68gXcVj8AZwxgV",
  "key6": "4jMYFu5y6zPcPgvM2pqNcQ5fJfUbJiSLxzcssV92FNNmihfhyCw3BvuafnQdzuYJDTd8ZNCngDGqrjfkTttRgXkb",
  "key7": "4U616buT8uqcvmnNmBaXhgH3up2VUXnwZi7cuqQdbXe5rZcaXJ7a36hS5hXhKsio5ARxjrayfVZUnkyi7M2T5dPG",
  "key8": "2zsx52Btx3ndRKja5sH1ASBDiUQXzBdBqiq9kG6B5rj1ouWAdhqK3YnYoYpNe9PHpHZtj7b4Z2eBCEGp7ZD3s8rL",
  "key9": "3hBxBC25tHVFrsiErw7mxE2fEgXR8YGbAm77kDi7BsfWLh1eiABj7puyuNZjKPUc7CbqSGTCuMf23rTfwYHdupfa",
  "key10": "42kfop9HuuFfj4HVdUxDu6MUCe4xHLe3twRG9ekLW1yZQo7WJmQEgrASsph3a37dsgBTLqV21p2T6xLtpKqWbAJL",
  "key11": "WNqvATGUUTEMLaaTK2Dq3fyhMVF4HZnqdXtU4zR9iv7DGSwpSJawRSf3FLH6jJgxQF9npRVino7ZCrsiTC579E6",
  "key12": "4VspM6opfEGk6X6LtaFCM3NLySVizqc2bPmRzdy5eA1U2nTyVdd7GEa7otts1f2TWAnDtb7oQVeeWDKPzMZDdGqq",
  "key13": "xTuiHPxXAmxDtbafZtvmWeRxrQsjXoerevN25YTYoPTJk4UE8aodeUsBs29QUVWdL3xk9iWrE3xFuJhxGmm7ViD",
  "key14": "2XWboJt2H2bstgMgs6scMGruFKjNVFuWmebbEmEsGAwsgpjdjW2LRorN2kgPrVHk9YVzGBcpC4qS1wYykpqt3UT7",
  "key15": "3f3d4583sJWCYajkuBceVvZYycQetgQNfmeBUjs6hqhdF27U2ReQspmra9tRWMtWEaA5B45NxLwL5gyKp2pxF5sP",
  "key16": "ZZ37rDiRx3FeLR63HkXV6mnD4qd8P1gce1bkxEj95w1moeVXVoRcb3rPpBBi5iRAB2X1HEiWmWMS9nFAPSsnkid",
  "key17": "4ygYYy7fhp3RYrXE84rWB8NrJiCgpatd8Bjh4vutS75yTWNZEiYFf7gFsmjmhWhTCeaFtHawm4rfmGsxfXy91ack",
  "key18": "4DpRy3vTS5nvGZVU6RX7U3gcPGZGayx9sAoxfmRWBT7xvhsX61dCE5DUiP2ZdiEjBLZ23RUBaMqxJRMdoVLpCkwt",
  "key19": "4ERbWsWmoyhpEvatJAaTV1jx45iB8rtVT83PUWngidEB2F3cgdtVw2C2FnShtLJSfavRF5KKL27P6STk3jdeytiL",
  "key20": "LV7HfzVH1Bs1ckFpgt9hARP1EwcZjirjibJWYwXp9RgBwdExJv9zfCbHC7AoQy2FAAWhdpxZYGDtRYdEBBTVFFs",
  "key21": "GVwd6cPT5E6eMVpyE54fHSxc4LSXPBsnfhaKkmneZyCWXoGLUKqEFBQVYxovwfLoNFxcPBGwJGSyNsCN2DbSzgo",
  "key22": "47mYdTMubgq4hW5WJiTjRksU2k7qv4Ag5ZBoYJ8kw2wEjgMin6YDcFSPp6RNGybDiQBozDYWmBQs4p5fy9BZZrcT",
  "key23": "ygDjk7DrjJYvMU1FeYhW2qJdZSDuHnXqZbC7fAiXKqyZciSE7fbRwfgrECLDDVRe7NPLoTJzxoQK32n8KwCFdUf",
  "key24": "2BwAC1yw7nc8iDz13FaWt6VL5FvfRF8hyFudxwVHtcLJheD1rgLdzt1UWHSmCwKMX4giEWrVFq3V3AbqFbmZY7jG",
  "key25": "4xu8d6TxEX8JxaFhyg1a1c9nHWCNDNHgVukeWvuS699FwQE4KoJUErgPjkgT2Fvt5C7asCCdmkQ71CTgfx14Jkgc",
  "key26": "5BUCmdXPDohBrS7Pt7mLdKvkgFtLmaFRiy2u8zYp3yuJuH4gZ8RaTfqeiAfBHT9BRAxu3ofPULSuRyDdppm71Mno",
  "key27": "BaTpKkf4Qd6me6zwsUqk7QLxM3hZAoob5pN657HntpXkRFBtEEyPNDBBjdTh5ZcHdsiD3KhcbFv9AMh5UGM2BBV",
  "key28": "2NSmpnxeabBBnVTTuV5uZ4fESRdwL4cb5L8MpKyRiAw2uXkBpCWdEiGbMc2YDmd8t1uApoJ8RC7gg8mcoFG8hg5K",
  "key29": "4cd38TVQ1h9KE228nQ2xr2QawtzP2JxTSnVaq8Ds6bf1KHT5yhiFyQRtoaQv6cJSEtcLKz76KfC67moB8PN8PaW2",
  "key30": "61jPEzp1uL3tWVYijvUe5eyNp6NPWiCrvvweTqifZjbEGzH2Wzfr1vcx2n12fVeFKd1h9ZZMjqJcEbV3ScqkNgRj"
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
