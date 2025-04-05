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
    "qozARuFgyEDdznSYst6vfwqvqwg4ByWZSD7Rh9NrdfaJpJGXMM81pKoYeZPvrV1FPHCN8gDkmsNRZp5YY6TkeL8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WHfuB6vKjLkE9QuGPMPxbd2RpP2yqPPBXT1eDdr4kdUf4Uv8W43eQAQbNP4wHDeznppsSyJDR23K6JdAmaaU5Mq",
  "key1": "3UNecBMi1UQWGTFnbGtTMPtCZTNqPmYZdnsaicCebDpSACFjPMw3QaUQnux4tLET26YGi5gV49UMkGqJkdhJJHFc",
  "key2": "4BjuuiGaRSkg9CAUraATu6p2NqVC2YPtAWftCiUsHxVvEGkuZ6ePh4h2kRCfqa6vuKqcTydhqGZWTp66Yq2A6DmU",
  "key3": "4kKjJr3Vxb5XCD3LkhXcBBpQMW76n4T5QCNY7TEve6wfkdCFzAx6GxxARs8mjstmxn2jhtfcvxo2aQagXU8P2yme",
  "key4": "5GRwjwidkw6YEz7My5rFmcJDqwiGDXpmdZEAxoD64xmwCANDcz1BMBspcv2Q4mDKxShtc258PMZikuHHaSXUbLWr",
  "key5": "2Ts3jHU3MRQnSekkgp5vrznzvWGn99acECDH7YcNGPad1HEzJ8D53z6ky1WGQExFV13J7BbZDgzBGHXpib8iNTPN",
  "key6": "3GVb7XAEKg8gQt8VPyQxDnH4wwKnxFaSCVCAuUbBnujmTdxtfcxEP5wBdbRXEo4MoMa5AfsxdeoFX6rxs3RCZPVf",
  "key7": "4oQVJB3YVm6AWVoyKGSAXBxYbWZUEbGNBkWEf3X7HB3wZxSEZgb96d2JvQTwvtubMNJcvPBSGrSKjodYk6YSHGFp",
  "key8": "wxUeVgeTDTn1qS65hgdHpgaWsSfoZKPDd2dKVG4vEuWGqzRwQUP1oxg3ckuZBA16Xa5ZL2QhbjU5snKUKX9dAH5",
  "key9": "jQ8UcaxCYZKUBeD7QvPebDwCpa4MDa1xGb6jXUnCRQgTs9t9CsnueSajxuprBSwYkkSCCWJoxxkopkWxnDeDJWV",
  "key10": "38UEVAKSLDryqhMTNWbBHTKHCkB5ZQCzsvUJayiHrRsQQhPqrGWgVfAFFKKstBdRGuUtVPiuEgweMG4K8D6KKex5",
  "key11": "dfgf7GPyAt1TYDrFXN9AS3EzyeimPWVwxmbe4tkwVEB5AogHBwrLTvge4LNB5UJRXxJUK8f3gC3BmAVr8wtDoFh",
  "key12": "5e1zshzrQbvXZDgWhvt8gHp6mv6jFL5Z84eojse2Ay2U2j2EwTQwgRAsnptAx8c6Tgec8SivTf288rPZ2ixZXy6z",
  "key13": "P7zSncwLidRu3xERe8RzDQhoMEShZ8UoeDoUDeC8trmNyzPaWC2MDmTimXZrnVLWSh1yDLSXxjH8NKmoeFLv8jF",
  "key14": "5Vg9AE67aVXaAKsF2XLiAFfKFx2V5xdwJWho9MWg2f4tAnSbULAeEEgMMDCSkCHQTpSocmqKpQr5dnFZNHENPntR",
  "key15": "WgsxK5VmqgZTPiAyypDHhPCVdcmJLZk56xsgQwMHE41PhWH5XLvwLgpPu7xns4RbonBTjaKxq7QbAj3miVtqWud",
  "key16": "2jmTZEt8Kfh2nBaqfnTypYpyQ5fADWTFgRrRMr4dsEHoLCqvtrtz4GAfxRBx3SK5oz2PUqnvbdynfv9DnMiCwwXj",
  "key17": "2i1TSRvQDfewtHb4VAF3wGqba6ux9ButJ4cEGEBRf6hwsbr1WyXuEukx6dJ182E6SRbRLFQMwoRmMmXEtrm9coHH",
  "key18": "2NR1NNjyynjbeDHFwKFrdcyYAogDSgHTLV3LSstpZFPYXC5BwGTLBBWFprZq7gPLgHGa5JJnd3xWY9WbGxZPUvST",
  "key19": "31f64hzt5hq883hFf1kEYHeYPRwRB1oWyS4q3f3iLLCk9fsfk8T9R8rMFB68QNfvuWH6Jj2oYyn4RowJAvq5e8Gn",
  "key20": "5Psu3PhV4pNczTjR1jHrD5xSdQrEfpBvUsSHrnESxGGeAQaZ8gMaA1nNMicLaWQ8fTaAA42RdgjFn3T4ANnteoz",
  "key21": "5iQcXtJZxB9osKU3suy8ahLZWsBQjBEX76z4XQDLVKtEKNChoXprvETY5Bv1ZKBHTyVPrafjP1LQ3jvENdoGH9BQ",
  "key22": "FQB7JvSSGc8k4Zg44P5EDeE8LydGTbr78kFEsphAzWor1RxJaWQ5vAXNstBQhBYKRbBoWcZPEVyKg4KzrnM9xgQ",
  "key23": "563g3aEcTPjvKwLvid189PVmjBC7seP1cATvmbHF2z9LwwXAzdcWKdMiEqkjhApCXrLwveu7HS9yCa3WroGx96EC",
  "key24": "7J6PMHLKMws4XhbeCSRP6FcvUCCs39d981iPfHyXdZGFuua88jj3EYoit8t1NxWSU8Hj7uETyscUFVrhLko9v5x",
  "key25": "1qpSHXgAcWThsaMsXe57o97JiHkTUD1vkGJiQ6KoVW8PBqfMxC1fhW7NY9ktQDNNUy5s6HVrfhucv5JnVg1ZuAc",
  "key26": "38ibZT3QyCkxXEXjYC9XXAKZWMNTQ8AywXWYZfwqRyGN8meALHHMoypX5J8aFS9kSTEbQsPNejhj9uNGsCjrNHH",
  "key27": "5iHu7ovengwqFU95QFE9fV1eNFxWLoJnwVZCpG1nJgDvqsBbyHLVLn1KeM9FgDvgqaAJeUBY1pfFMu4hrwCi7N6t",
  "key28": "3DtEua3BCLqsCU6c2Jtpc6EQKMGiB1adEdVUMaLAUMQMtu31brynMuudi3xKAPYpMLVsizewqTFoUG6pAnJ3f7R8",
  "key29": "WXjScZacbCsSDuyvDFonqyTShDe2K95d7LsM6xB2CnAFRiJ1LECE5UR5Q79zFzL75aCFwq8xgZxQuNXep3Rd3FP",
  "key30": "2yscLJcwB9RFZ9trj7JEeuUwvTZSEsYk5mYrnbqeVeCMS8His65WfGaziEAmzFKTyxpiQGKAH9bfbcbvZXSbHghT",
  "key31": "4bdUEcyQvwEX7HvaYjgd9kc3ZnRfcYriwFB67JCyMpuL4frhGDTWLHpk2hUZbJEhsMgx3DuzzJZydnYMshznFsSY",
  "key32": "4sBZkJjsjKjX6FSqh52E3uZfpj7Yc3P1TQ4xJKNvJ5kHbS2dELG4SGnVmdijZ9pXpAuW4jDrgL21ccwCFkogewJp",
  "key33": "2w2MAHP8uJ5bUhAmKH69NocrpfPG58oFYFM41FJPoippdDSqiwxaMzKXFaLtoFjL2Y4XwxLKtMFNj3F5KhRi5qov",
  "key34": "2Rtg1fkWqQ1C8hv2G7viYM8NNQBxADVJfQsoLxkUNYuZuhu7ZoUpstAw5LzrfUCmyaRf2vd6mWwKuso4nK9AJT2K",
  "key35": "2hmYzKY5gTE4PGdxJB2hFt8mF9uBDioBh4CcZ3DLDvvVqjCpADySVvSdC47fKmkHSuxpvQpXi6DHa3V3zA3qz5Wu",
  "key36": "2G92axjMxXaRNYq7hj1NaRNiFmDrEFFmh8kTNQxmPRNF4g1mDFHsiaG5QpXNYs3it6faDXvytVjWRzfaiYhY3vhq",
  "key37": "VScEDPopJ3NA6K6n7JaFCs3sBLR4EDNzoDu98SxvF1bJSFQFYQQmmvu8YiFFjEFbcEuhkKzZsSNpprjSmenq9T5",
  "key38": "4o8CjMJA8rs7zRpS5kZ8iZznVpPvXbyghG3kBeRtsLFFtpFoxqCH3c8PyTrsq8dzym65wBGw4dmsR2HFCN59Ck4j",
  "key39": "65HUF6B9agxyVfD7e3sxiKABfZLAJZpkrB5nEeT6DcL7ogvdmDNj2bmv8rTUihfJgnADRQ8f9JUoJeXJqutXLCwx",
  "key40": "4F6n15dVf9g6MdV5QixWfSKSG4hXgQoN1wh9UZLdu4Afjp9eJy3v8qovkpzi4cojx2NogGk1KMqFsU8TRu4zBH8d",
  "key41": "2yZfxQCxh8XcUsmJDhfiBJD3so7gid4ZjnLRnMfkqx3cxdbpGMCwVuAc51qUuuRhSB8HSv1b5pDPVG1MqYkuiT4J"
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
