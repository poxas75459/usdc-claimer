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
    "5NvMhXas1qdCWRv9mb49yYLYbgEVHFgarYKj8VC7iNPkN7ogQmSBZSvSa8vSdzNskHi4jskkeJdmnHZJ53Kz9b5W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KAQdGEHFZYGYeFjHzgMeQpy6aoXf4NHciBhjx1feaj4S17Dg8a9bj95dqSg9mZpcNXpnwC1uZoPte3K4JtmSufY",
  "key1": "523gFNwF82rpRjx5ehJLjivSaVev2UsQ4gNzKmAa4fJJmxiipofa7qrFM84SkSb4tf86BykgWNKrgB6oiSACkUQV",
  "key2": "4UfgPFVVzadi22me8Yu7DrMbiARL6HwWG1r9PthJ6X8izKPtGaShgU9efRAG9zJvZ7Nt8i2b7NEiCcn4coF3uEJi",
  "key3": "BhTtvL3guM7rwj7smwJY7FHfvKCRvh1mzMYTVU3jx81qS2kfXBMSGB3E7ECEmKWMnsAg78iaWpaXNVKTMFXPTbU",
  "key4": "3P9X3wEEvnMFyLBGbHvYxHzBU9FZYWKoEmeQLDAmwsZkhD5WEWZonuezFzab8CUDvbA8eHuhp3pvFGD7LjtvHs7F",
  "key5": "KiWdb7pKQgDngvKLwp4hvSp2DxPEeW5RPDsHYquXVycjB9wiQdcD93pr6vLqCXvT7d9jJ3vJt2Jn7ZD4mV41ASm",
  "key6": "TCLKPVY99TKULTmaPgSCDH5eg3Rx8vcbzbP69vHPPdgjLENeZFPcST8hpdSuRFgp6crKRimizDSjWPZwcpetoNW",
  "key7": "3DXPYe7M8YHMmv6WssreA4HqGRKT7zMTVV8sBJ2MJVFp2kJnnJ76oswy3Vmjyj5j23ZHr8wUxtARY2Gnhxv6TDxy",
  "key8": "3fJiKxHT9mmwoB87qD3RaoXmED7g4Ag5PdyRjVnNDL4C1CnHVrqHCj5yFa9x6PcLsLec4Lrb8qofBciLxrHE2cA9",
  "key9": "225dhTobMfAEpjrYtmVKzWLarE8gX53U9yMATD3k1NABMzkw8JrUmE7dGSHukCQMKAEscA4qivr83yPkLTFb6z4i",
  "key10": "2Z3mAE2pFRRn3TZ6eG6dysTfkavLD8ArDykPackrLG8yTMeybsK5HarJ7C1HJckcDPa4b1MK97aDnXN6LNiRbTt",
  "key11": "5u1Li7UoyEqJTP51p5s3cgE1nxy7UfhXb7N77wZoPDs2AJukYdNoxqL24d7vykQLhF1QS1Aa1e4qK37yYqe4x171",
  "key12": "49mLGX8c9ZrNvJGBHgkxHEJE2YiVFkeqo8s4vZYtYPRRB5gEhqtSsEdwG8fcoADFFF4rpq8ZXoj2iYWqDCUMM5y9",
  "key13": "64NuP4q44UDmxxYobgMGnpfnPr1pfWaqSGTL2sPYCHyQxeus9gAFvc4on8x56FGCWxUvvJMobyup7nLnjCfcGcfo",
  "key14": "4a329JkpQbCjZdhS87TjRM6bCiewPVbVXvziZvmb6uTn4aAukcGN9pzeTKB4qscoD3xV2jd1J2viUoX8rm8nFpCx",
  "key15": "5V6UMoqNvcnA32ufz3k26vZH9P4PcELkmPKDxV1dSgmZQcdkzyRizQVea3VoqVaMFdb6EsiLsYAtxvbxYqpMeNwb",
  "key16": "4R9mNUZ4YVYQi1EasGDZhXLZvrtSiCiSsHJeqwxXGcaGmmHzAd8UxX91PNxKEkLWEcoqvxVDv6E5dY7CBUK7EKb3",
  "key17": "4Ua9gQHEXiwMYBdFz8Qf4kP7DnCbBjEQgRPd32z1qLS14RqZaxSkG4PiqXiRxy4Qwo6W8gd1W62XocbTtckiSgqu",
  "key18": "5bhB1nc1tfeeS32DuvTH8GyCM3bXU2RAP5de6zuZdJ1kZxgMRqMy9WrvYTctYcKLHJb1qqZ8vW7e2yGQGbUiDrdG",
  "key19": "ymo1j3RmivKCUCFetV7ReaY688GwQFLd2L3zcqmdRwDS2GrqzVVr2xLm8wBLGLjcafbKe7PAijSbAtzgrLCXjgE",
  "key20": "zLR3opD3qYGzNhsgNBohDKw9vspCQ5QnjFXSFrrsi5pN1Vjt13dxyD45kymKUoE1C6wgmaFDcd79SSY4VhYWhxo",
  "key21": "5VrEQeAP5bdscDeK2wgZY7m515JABD2EeyLbnysAkRFcqtSarJVFWDYZMAyjNP6Ejd8P4tXR5G4cBqMgfpYH7s1K",
  "key22": "KBmvwkB28MJyr6WrFfQsPWGByvXaZ3so8CvY9c2bqHTuVSt8PidzhZo8XN8avVpscUsVBmX34S7AQ9RQmywoKGK",
  "key23": "61vgcZRApP187MgwMdBkqGQeNhdbB3WUARj6GJYQqwF3Kerx3oeRpvvHMSdn4gPr3EcbXyPvUQfX3WTDHuHV87x3",
  "key24": "44reScBgBSkLYR9rdteVkSG9QBpwCz1b43zTrfTVuKs8HcmbZUYotYkq51YW5FGh43KZYmiqnu9oeLEkMSTFkp13",
  "key25": "42bTW2Ub3ZDH62oHd5WHtaFU9qcQDtSgsKReVkzDNG1KP7az5qKmqhAnRQRQWbiiGXxBWVSmzTt3MpaQWtBMjm7Y",
  "key26": "4kJD3nWtNY1rgySpjqAuotfoSdGbtLxhGSr4LmS3nwKZNPMRoW7EaGo2nwTX8DHA8maqL4HZoSTrghMUDP631pph",
  "key27": "3Tai2PbegxoYkaFWs2AuLmRRLMco5zLMTUBXBXp89TVVaK67AWiws7rFg3TntmHQfVpvRG4CHWYbyPhvPdNkvxYG",
  "key28": "4giaihmGPmDsoqDAj48na8kMGUzaJYS36NMkv6cuZAtdMfCZWb92VcZQhgwt7CKK66euo1FtvzqjmjC4N9aRjZGP",
  "key29": "5Te119VRBFLbBTqVjgwtGRBhDmnhCxKNrubGxuDND7bnqsSa1fVomWs1UKQfgoVhJedcBc1F1Bqo3KF9oXo6P2nS",
  "key30": "BN4ZCsyNHWQkwMGQRs5Hc6SLtjPuYM3SytPZvQV2RrQfqeL8PG4tSGwseybrZ48XCKdEikPDZbcn2D9S8xgxxxt",
  "key31": "4Zp3RPNF45zdPAiMdUfDME9ufH5Efjwn6sqJvHCdyQSPozeFUGoEwU8X2KJHvkxJafP4yKyUTXZCWijz1i14nESL",
  "key32": "2VVPXA1Q8S7o1rSackgYPzQDehMBaLdSorRNcLT9aaxB6EHEw9wGF7TViGn95T6arnYfRwsXtbk4jEkEBrweL7zQ",
  "key33": "38D7kpTuq8zW7YjDPTfmK4jRL1QXVcaJBL8ptvyt1So5kbr3wwG5XudvTwCTsrLHcACqqgZnpuDFVUuny1gYNRfP",
  "key34": "YYYX9pfCwKPgEQ48zNVhS8XwAbCnHP5eeJqXEt7iuJQVDvu8mdUQULNqyyCHUyHLxaGL6bVA2yv4iKWRMGmG7Aj",
  "key35": "557AyQswZDKoNdcyKTiAEnLphiXtBqfoBgL76yMS9y1iXgvVLxGsNvm2Jvxx8zkcMgxY1yE1w8AJufgDZdmXj34C",
  "key36": "4RjBUhKqBLqcdiA3EZVEwH6GVb2AJyje2BqVkUNyiKNNyHd7ABHpWEHLLEBtUJ1xpAYhavgLeJd9s9ZAWowwdME",
  "key37": "UH7a7az7qe2VRHeBgcLScgjuyksdGsZrjrqpPcqV8h4z4UhJ7tU55XPw8553nUfoBqDSL9zskXqpKRMMTXx9sTf"
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
