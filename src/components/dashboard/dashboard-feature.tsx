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
    "3J1VhtMMPeBU518Fd4qPRSuydfidn95Q8vJhu7FmaG9zxwjnhW7wv4d835cVcMYe49osPUZ2vGeSvw9T6GCYmaMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31WBpAKoYXatCbNGx9xCnoRpvYKJ2r9LdfWoPfdEfTFVSpBGDwzYKYNhGHsNHgynwREbuNkQWH83tCYZ58swSeD3",
  "key1": "6fhYKrQbtigS2dVfqueCUV63ZEyEpt3n9DZ98mV777UHJPxjrKhNyGBRzCQ1mHgTieVqWmZxSy8MjGu6GawdqhD",
  "key2": "4SSRUm5pE57niWRdwEKsB86fjyT21Y6Aut5WVu7KzBLMvjNjenHYRHwLmPtcwYdXTSXzEDZbbFgdUianmpyrjLVz",
  "key3": "2E43AG5Ypp7prMP77ea7LyEq54xMX7FMKbqCeM17cq9Z2VPY9zWJsdVTNspZ1JcNMkZzmPwUBfpnmWzRTyws9dKY",
  "key4": "wwmWRrSQLrwL4nhVcMyh9k6GUzggGhAaMgTVh786CgjQRxQM4aCB4FnVBNqc3k1y5g5WtKULRZXn8TjSLeNwKuy",
  "key5": "2ngXm58DS48qkuYxn7i7rTFERMxUgJRoB3xC5qBCysKabB64C19RMrWm88ayvi7utyr3QHKGVjLd6ZrfFEbquMiV",
  "key6": "5Bu9R7FfB8e6pYuoSTLpi8HmZvwnk8pr9eXNBNpDh8poYTGViBHQKLmsn95uDFSVPjvLCRw3dVe258EhXzLbxpJS",
  "key7": "3LrjYE726q8tiw7KCizbrNFfmbuUt4T1rNxvZqKAXM6LDivhQemG1EPFqYytpGg88ransjcJYbUN4zJK1Q9uk5Ef",
  "key8": "2BRKHvLcLucw32X8ezswHLUUyf5PMBRdfs9GEcZDMij4k7G5APP8Pr5ndfnMjEMzTWsrFexvFgufvLX5enPCku5X",
  "key9": "4LJvL3MTzPGNe82n9Rbh4EwZswKUC5hwFRnGQCNuWMt8Xs2cNADxysvtCrEbCVB165eg5JoZiWN5FYAVnSG6eQvJ",
  "key10": "2qeqp7qBf5ncjKkeoXW81T2YqVyzxZMkKk4iiRDPnpjm55szXJEkM1uZ4QVuUYVDpYCtZZaWQ2evyEJVdo1aTDyL",
  "key11": "5LGfz5NXAMJqyz8UxjcpciTKJMERsM67FgrQhUq9Wdhq8sQGjcATxeySp2RsnBb1VWrzZjY7b3MqA3JXJ5KABn45",
  "key12": "wsEByBHUm1UYnERaEZNNsJ2HFMNFt4ZCFKu91L7nSASD4NVD21hD9V2YBnDPBnmptmXbfifSoQbqJJAu9ka4uRj",
  "key13": "5VQbEboT9T5WkaWufcPq7Bb4HicNPenJwz2K9feEXKqfKw8X7LG3ARXCw4VvUw4MqvEKsM77SDvDt2HbYfhKUEwU",
  "key14": "2pkhhfJqc9JG3D5PrHpe8Y5BRAvdPTGSddpCohMFmsdkxtwZdmLACYceanqbz9A9hak9bPZgkEwCNuDC8pHUK1iQ",
  "key15": "2ggAx2uJDHsfcPaAFvdchjJ82QYUQHv2JJSA3Vb3P75zEd2D7QkM9E4h8tAUZfRZxceEPR64EovpQQTgAfLLQcEQ",
  "key16": "pbQi6NAUUwBzgvTrwboidpcqSRuMR5UHykwAFxAr6FasUGDJsrm6PbhQS2yBocww8VQwihDW4kcf7fWsy1hWoab",
  "key17": "2z73TgX5WwmEzA6Phc1ZPmUjWAUDR7rxpxEbmuPjhuvqdkxCY13ipHz22nLRGjRBVwjc2SynULRKrv9CTyuUjQ7M",
  "key18": "3ZxirGwqEuAWRXssLJ5VSGYWDNiTaf2ip9KNuDQyYG2xZvSDh2Tx1wdw4Q3bruMvhZ8UeqphedQPmQKXAD3pEBoK",
  "key19": "244WXhM35ZoJDaUwFBvjJezdGNCLibLQqsxJBf5nRFWngkQLLnm2jVfsTeSCgXvhDnkKnTiFqoW4NkmvhUDC2yEX",
  "key20": "5U3MD4JE7C7w3JZECnxSuDmxVakcaB7U9jsV3S65aTwqgvq46qmjqNjB3sDjg2hrgRLmmttpeut6BtmD2JN6KZYj",
  "key21": "4rJ5SEhGVEk4HEkHAmTX2nWAR34wWxhgN1F1P9QcTLsBHJopwsEWwPkCkt4rcrM3gkCmLBB116bfWfLovyaN76NP",
  "key22": "53H82NY9wPM29ViNTERtUr5vTdnxaT7irt9z4v5QV6P3Ws2S9KKvRyebTNicHFhSjzLboN8Yf5KHNBeFnWiDC8rG",
  "key23": "4gEGYQ4RNrwkkRdaHoVc38Nvsv1CRmmr6PRhNiQC3d5QbhsTFABP9qR6SGBUwyoxb9w6UQMNncdsxvYwLMYVW4Av",
  "key24": "4SMrsbyzSbbqNHuKDxcEaiRZ258tDbwCtxh3DQxFTdmpwsEANZvcnkZCoE5Fp5bo3g6DZ4m3nBgqu25zLG6uSD6m",
  "key25": "47cezx3DNiTNhKPot7Ja9SePyfZngcgzJrjW2AhaARhyP9uJLaQtn7CexDDkw25eyueXUFpuUDWtNMUawwCtU8na",
  "key26": "JVvHTvv1wvfkRNPVrzxADfCnQiw5ioD6tCvUX1rqxN7AGN4WCvMNZHwkrJhGFtNqqUhLDGbiYcxxazRx38KLAzA",
  "key27": "4e5Xv67UEGDBguCm4E3RXbQ2ANzbNxStKagsgHW7gXzE2D6rdJESjqYLSBTyJxKZDBpwGggUq7uHmTyt164g2HBs",
  "key28": "38n6QhbW2XqyvT6JUbpxNAD38VcMJfAstB1R2XLCSPT1cRxRpHyRq8gDMYK4VAhgVT3NvWZELMxjyh6NFzp6MjrM",
  "key29": "5GGAMEvicVmi3Sk3knVYyXbT4kN1dfyuW5sKipKHkPamf1tSVhqcBZ6CbeBZuKwD6GeRZ4vuYkmZVhw2V3WvT8Tc",
  "key30": "2tUjMUknp6s2jpiLhmodLAVgDKzvymBNckL1XkXmowjw8Jjhv7xYknbCVBJfkmbGxghHVturaiwpF2f1a8DmiUFG",
  "key31": "5mH96iYXxVJAmMCmsdXoGdvjyH8zkcxovp3BTJ1VbCrZHM4G7BPeuoPNYyG94zt2DZSbQiXrWv3AzCfRDJuQASy9",
  "key32": "3GqsbHvZnWDp6EyGDjpT9GNJFK9cg6cmMuQzimcEMXiA1Zjth6x6o3T8HUnUE8vWBin2P385aJRFGJmpMozjmHyb",
  "key33": "4JzHNm15LpfWWsyi6s18x8T1aP16LsTuzr9nf2H4K9PCLRWZFJSCwAbHDGvy4DBJiTiieqJJELKmTTjowtZhU9FF",
  "key34": "5dYjBRKBri2H662iqHd4kq1n4Crn3QZaktL2YfwGCShKq9Fkky5wowVYQkFm5ygm1vada8T6yVtgCFu3PoP7huNf",
  "key35": "5jJNTYrECrBL6YhHKetGSaKincry5hGh2XBfyHz3u26jHUrYHsbV4wQk42N3dTA76mrAZ59zLs28Y9wPkcj9njD3",
  "key36": "5VSHe72vPTpD6zc8uZmuM63SJy226M72WfjK1VTbmAWcSEVVrnS96qXc9yNjQbYvcJrbfbQupV4YuP7XRqKvz2Ki",
  "key37": "8yvkoEoTK6F9R6RDLc9S8TRrM7sZxn81m4RUypwwkCck69TAakiFh4PYKRiKVacxYgE6NUuKMfaqHF2Eqdnw2fa",
  "key38": "2dFNAJWxyHDgAV8sbk32x2eUoo5eEDCR2U9pA1id6TcPGkrJycCBtq5rQqg1XhGYsW6jK2U1LrCBYNBPayFkKrWM",
  "key39": "5E1guDgzHYnwJYk65QsqtZa2SGgd8gqvJg69KSqu3tipRD776NZ2195eHC8NzZ1EphJvHfdanae86Wa8FQE3eMsT",
  "key40": "nYsQ9f4DStzWaiQq3datCgXhm4bqE1PGHJM2oUyydZYZVDrPdj1qmPgSh3c1NpMs8P5b31YVVwtxfnsonyh32JU",
  "key41": "4hzvwZLkdgqfGmpkxf1K9meXMM3yGwmaPXqjtNNxQiBJUZsk2BWA2CriwqcEKQeCeqZyQgTYBtNmyhNc3MGbMi7t",
  "key42": "4KERZHt3PL7Rm1PAi2qmnMQ1AadTfu5Mb1ZN2yYWtW4RU9u4s4L13jiXhxQ8nFLx18VBiEnfWNJcUYkvvrqdGUvf",
  "key43": "5Bm5fd4s24wxkEhDZdA6FPbnxfeoYbYszfHrnpGs8KMiwE6jfv5S2szuMez1tuw7iKyok5sivjWKC4TViCLSvUg4"
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
