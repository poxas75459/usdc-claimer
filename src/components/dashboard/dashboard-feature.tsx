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
    "WBFxUZNXizX8BHy2PUWeAmUzBnDA2mS9vGzhYY1yr69gj6nX68jJDRc3CrAzqvuBeQt6GJkkZVDt7pNFsVxYQpA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t9gQwNF5rGTPtPG4araNK3mU7NyxpU7YpNUx4tDamtYuyZ1dxqFyfKz8qeccX7o6yjsHPiosQXFrFsh7pg2Xngw",
  "key1": "56VoZWFXPbiKKrnimmrFYdcATWfo1evWxjQSe4WDTkFGEeUKSVEEDmMrow26XzjwvQvTgNuE3ajz5vTdXt8R3GKZ",
  "key2": "2HLLqN9qpXsWFFRyVYiuWmA2BGCpu1hFN6mVtMde4kMKdNxeRxVasvr4LvaR2ajirXv3LHWmCi3Fm2Qf7uATpXut",
  "key3": "5eW19DxtZw93FZqu32YmpAkS3tM6msafTn4ZYPfMq4N6se84fkKShWkwPbK7dqAvEko3Jk43ouo2xSC9oQNptsLw",
  "key4": "5gpsMUtCpY4xNpmrwsakEQKiKCD5rwFuCD3XpjUY3dYw8T1rnP8yjp371NqgsEDezdysV7pkbvvab9NwcSWiGWyw",
  "key5": "3fSAHQPKSKX22Hn2CYUrRxhgNzzJfw8BE3Dk6U3vfqjyYAJnuZBMMciZd3uA5FQ7sCeax7KVfjykonkLf4kemanZ",
  "key6": "dzMFLVnsJ5rqF1UGvr4BmX3WquxBH6hbBVZbid5g2RYfLb7d6HZ6v7NT67rQ25iFCyvw2n4rd3oMDjijtEeFmY2",
  "key7": "3VyDedsnmwMiQSHv61EUH4dxGFB8wgUvD85Gxv1VQSeN1fCLwb59k2qhJYr3jR8XXXzyEE3n4dhWN9q6vSFV7RZJ",
  "key8": "cBvQB4UkW2FTWWvqfecouMthaCkxh3D2g7t8CB2bXNHRLY4P2x6jKnfSCdzhMKpkqBeWEkPfykH5SpznvS9mxmj",
  "key9": "2RswhUAcMH48KHLKznSqEoYkQiCJn8oRTWWhf4P7Z5ssQZHRW3SMABWo37SseP6SFAFSnFkTWm3isyNPP9LGbQ1p",
  "key10": "5xmgEJAyLPQr3ds8tUBUQ9Mjr9oCwLyKxBQY75ydo89UqDUBdEKx91toYamDdieQaVG3h2fgBc8zEyxVDJgL3A7o",
  "key11": "4KaoitvjgwrCKJLikU7tZLXFpbeVDsD1m8Tmie3atUhV51h1ebUCdwmz8qTKW2QJYc4a8xpNSERNU7nyKhe21xi5",
  "key12": "3RoMJ6mWrpNj3SLcugKLzfhn3P23QfJTh41KySQ4veyZgioqK8cQh1vrezXoedhfgGKyRRRrKe1CGn7iH7UqoCbi",
  "key13": "5BXMUWRxMWzweQZPSw6R1XhHjAbBduMEJRDHaQRzWPNRJcPvAtxy8XAZniRhmDjCbK12nbYSqiT7pEN6bunSsLhG",
  "key14": "4vwHdixvZgvDGDw6x94J5G4xr8dxDoaANf9XjGaitnXrSKFshjB9f3aKLFTFpNvwGoi9QZqYHuUhx8yDFqKRAgTY",
  "key15": "3T6hEUy9JXZsWjgH1SE27KVcTuYNSSsciDFT3Ch89pBCk1vumrAxW6bVrsggztqGcA4MEWfLgSAG4f867FsgCHkW",
  "key16": "4JHCfRyPwaPeSY4phcWnRNhU1C5j4rUbh2uLHPR4q88pbtuYu1wdrTZk1QZFPQ5SgBuntqg5X9dpEzwR8MXH18bL",
  "key17": "2UFNATTjqu6RgRqtD7pHEhfJDMpgb7RtvdSbcMZAWkmeKjEZXvwoojxTNx6gTtnszTX5AqHZFRLyVK7MiT2p9NqK",
  "key18": "4aBUohT9wofT4Dmuk5JgoTgWLwueRSVucYvKgnRAwEYtVybD8LdN11LzxrbirremoC9s28LSgQaqguir9uZs6jo4",
  "key19": "4tssEqTy2sJFYwzz3ZxtsKPfuzCdRnctffjYZivi25XRQAhSq7ct3stZ7F5nP6ssw2C2ha1fEvR6QdHMdqdSLyda",
  "key20": "F2wg2HKDYRUrCdwCJyZtz6WzjLKJPjpvxZnn7NcNLkPLsv7T2qAntHqFoDgJSQY6S6avy4AF2MiKYNR1Aah8KBD",
  "key21": "3ALV8U5jGkjE1Xi8qaS4C4YdYc5nQTevfxnfNc4TxeZWGAjpP3tQDmMcQyF96w8wke5iLkvEJacp255NE7ka5cy5",
  "key22": "5QS2TEkkfNrGbLLaEMZKp9HpbUULgCHf4tFQ2YgCpuL9spLjNisD2j9MBfBhEtTndx8Geqi4BDYz7V2dGzeU162o",
  "key23": "3NwX91PSkUE1ugc2U8TMs6odxayvY7jBqUWhg1t5VSieFqFvDKVqvxHGjNZmTJc5qWxFkk6gXVTGoxiBFtKJF5pP",
  "key24": "2yLhzf3scQnwwXLNbWAr9nTtEGkG3PFMXVnBAhFE1H5GeRqpViNh441TmoHugwJ63Jk5eBaDYduTrqBxPXZFSHdx",
  "key25": "2L1XtDx4DyrYvUrn39tD1PUrwfsoJecjR2HMA4NHpZDX7DbrAyrrEPB2kmr92Sg6cEyQWjaNsWv9SHAty4V3SMb1",
  "key26": "EYcDabXnwfENnL1fejisXNWiHMhUBrepPEcw3B2Ky5b6Fd3bjPfN5nC7q5zEL5srE7UZZkjxA91Z7CYDwZ1b8oJ",
  "key27": "UpjzDxRUzqGj7JidgCUKJLgdppdqVxaZ2d6XRnuaipsys4DnErTFmYjfmyxpquTXz2232HcFHGhtF7W8hf2JZ8h",
  "key28": "LShH4aoHt1CAJw8tS2fqUcrQuVdEZEjL5TsxxqLgJUH49oESEdFMitBacHnvV7JqaZNBMdkxzR3KRoXfULx4tDm",
  "key29": "56VtnKtBcP3jLGdY5TFhKVWBNgbd6cJoaUSH2wX5x8knfQrr6Bq2QHCLPUR7Ge62rfciQCWXhZszNECo7bSpaZTW",
  "key30": "2QPsxEoTA7F3Ge6NdU28wDtrMoVAZmthJmKy7GWvM4GjtM77dPEReY4a4gYRGqrKc5t1UdgtX2jys9C6V6Saxsu2",
  "key31": "48PCZNpuBF9st4vRQivo5tKpD8F5MaSzCEjZhQECj6cHvnQ3WSqcnABhrYiTaFLsPe3aGKafN9DCRwPRHYL41mSp",
  "key32": "59BY6iVmYhQWuAULTqi2dpU4JnFgiRVAaxuX9kytVEcMEC5PGGYLL7oNQ6DVN1T6LtDjL3Tno7QUHAFeMTko7Eoa",
  "key33": "3nJdbfPG8xNop5wUBpAckTRsi33VkdMBWMyg8YkqCeJt18koGsCRDQNXFVWqawEF7RS6x5Veiacd1UwngYYyfwfR",
  "key34": "3gLL6LgT2fbEo5mVjucTYQAgVyeGWkAnqUCMRggSyK5SitCGY3739NT6a8fHRaefu7JVBvncwojrvmpC9ubW9qDy",
  "key35": "28k2Zoriseyk94sw8Gf7kk5773ztm3pgCekL7YjeoWUheJ7aoQJXh8dyBXXFaVHerS9sTm9hwfx1w8buKgM6Mb4r",
  "key36": "3Mo8uzKh4dWiwfjWNNUv8a3vqLAKipX6G9RhhNPkFaBcWnLsAzRcbUyW4V9QKsxdRaCNmG3y9vEp86Yk9w5LMLPn",
  "key37": "3YLktzfVxDgxm3ogPKjNW1BeVZe8qLhweTDHgHGnoBnEGx4wn7RWCckjh2z2M62AMkVEjdWNertadb6turJhoQUo",
  "key38": "2gMzvEn2fh1xr5KFRJCdAZZK8fWTcAsaewjSvyxV9Nudou9ddaz3n3ssDq4QL9HsyHKjKwhRyEiVxZBc3117aGZS",
  "key39": "2zY7YyD8gjUAmufFJZ5cjscQMDLTxt44xYHyjM5X1kBiqrQtjxLNfrNuYFRZojq3x1WiS6TLS1L3xtABrqjBFQ9u",
  "key40": "48VDfCtB9sL2XCi8xRdq4ttsebX2SXVwccVkCyD8PG9QHUq8R3g11F1VYZZAwCiuRJjwpvv9BLPGHpygNffuNy3f",
  "key41": "39b54cVrdUbc8hz6LcNcXydD4sqquyYaQL9FsUi8vDbg7wioNuS6ixMaU8j7FWbUMQ6KN7YWb5tqnxijDhtR8VTj",
  "key42": "3wC2tWykNdRHVZdgazbgRQUfYAHtKHipXhjyehmtoaRMqpZS7hVdYP8qx2RGBaX9boLBthH2FgB6n6PuTwgVSHPu",
  "key43": "3hofukudQfJM4pKYzz5nVnv4ddhvECb71yvJGexwhxR6W9LkoBmMKvserzARC1WkDeyS2EuZBf7MhbmVntHUvtxP",
  "key44": "fqHcNaDK2LZfMTVHWZ16rxJraH6TcfnvZLiy77iJ2ncZFQ9f7UsWs7QKKURc1Lh5MSWPuiTDAwFwGspjHjbsvcr",
  "key45": "2WCCTowxPhHGjkqYf5ajuAdPbB4z7eaVHbRmAucDKhR22aYwzTCatbz94g8gKft9BmNPGtriqfHtKoAy5STKw65U",
  "key46": "2woFzZtwVC6VqZhfSrUD91scFxHMabBD5FS5c6pWb2xu6ycZoUvKrn9AHxUbckJH8wFmhVnCJgafvJaeLxFM3j34"
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
