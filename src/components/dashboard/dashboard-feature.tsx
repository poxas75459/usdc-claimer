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
    "42Ba6t8CEDxQMUP2z6w1BbjgU8Tn7r3qCxVtuiAB8L27png45EnqQvEuoXTEEPA1XPavwRHrh2LY6aaSZ3p3ZnMm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDNKX5XqE5PxUiaQHUUDckDyu6LDTmL8WEGowi42FP2wH6Ko7Zm8BbAoK8gLG7he8WceGCf97CAxpaiMUpT6kj4",
  "key1": "367HhNXZ9KWad1eiBtRQwVSp38J4XuwgRP9hMapZcYNSvZ7oNiouM5YjjfTQ24kV626gZf9ymdyL8quUBVY3dvVS",
  "key2": "2isSB6ZwL1TTmqs1DAggLKikG2znezdetSU5UF7gbgV9dKYKUX3ijGv7FLsRJAHr6ap4EcQqVikS1DghxTF3bFiW",
  "key3": "Y7AGh41FA3AhwG65NVB41UovzSPo834vBSApU8xxjAbHkmq2FbtVWYFmbbVnMDb9ovosKhWTvrp5pvH1nTZwBZP",
  "key4": "4FVYFWHxTdFmWxeqj8UxCJpGcvTgGCHf4bU9CZbM2M33u8TTXxmWuuLdhSaYRBptNAGWKRA3YRokxxVuWcEvpLh5",
  "key5": "4Ge731omMrA6qZUtD6SV4hQTS4aqgFHZgq9ZwKhDUetXb2J3yxkDCceDNpEQXiyy3RrWCdXEQhqPeqSU7dR3vngu",
  "key6": "5VLuRKMAfjEQRG7NjRuCwutcqGBRn11SJHLmiXYzXP5W4Gy4AfL8bCqmvNdcTC5rq56hZJEkB1TNtVorMTLXStE3",
  "key7": "4N26SzAmgJQ8V4WpvLS93JWSJoc5gV2WV6vyhjJffirGaUaJLdUqsLWRYjBVgruZM9UzThe6BboubMBVjXEepCYR",
  "key8": "4ReYwVYk7pMRmSpfLcvSNZkQmFHwyLdgfsLW3Sq6fehhMqjoLN7GB3Z5KwmZrzsE3VxzxCdu2PXrGZ5dp9vxacwi",
  "key9": "4nrWAu2PNDy8cPzcMG1SpUJTCmhkVkJG5nXzEFUMSJcU7qJccSboSDNXzt7DAk23g4UGP4EixN7YXAyLnQCD5Uda",
  "key10": "2RFMdg442ZDP7HNxahPjUAAMNTQC1vK38U6A9X3hHQ6viAaWtdnqdSmfQEUfGsUX8Z4Xwom9eF7htLXhJ8NrnyG5",
  "key11": "2mEpeJ4iE26pEg19GWAjACZH2TzSBLKqVgQWGENzzB8DAcGb5zCK6PaVeZj7bKYLrbW28KnP1DDfg1b3DMjHq7x8",
  "key12": "32f3RAufzCb1PLu95p83oMenYA596tGhTC614mTH4LwnTRxWgjjNURkJMgcMLAFmQ1i8fqzCnTLdcmMBVXPhWnWx",
  "key13": "2pW3HkFW6fqPftCX9HtgTEMH4YqN9dbKpAs6Q1CyBBWDJbLGJJNXoZYdr7r3ATtYhnf362mFqndx6YCqK1VALkRg",
  "key14": "5FF4RPq3k83dWvFLXn8aq3r3rFGUauKB5mb8iYRpTgCwH4BARiUEis2DDN6SGGNFrasmqNABfieku9j7b4KShzLi",
  "key15": "4dXEB5BZnZoKZty4C8FujhsoHmJv1VKa7uaotXiwemEZdE9fpD48q2EeC8WakkeKSheVGSovX98g1SReEZgq5q4G",
  "key16": "3SxpZFqQJ1TQPCc5tUo5CPxhKCczX1j8SVRsXXABVTSz4RH1QYQQWAtDuPK3999kW4XhaT3GMFcF9KtH6VuP2dkS",
  "key17": "5RRjj2rWn8Qba84ua94wCw5WdEtPAyPiznEoxKEAE9Q516GwyqzwHVXDoA9aCzabXFzyjydFENeYMv28xT83s2Lv",
  "key18": "43CCwRtu7aQU1TJCqGVFQFYjSWcLhs8tbp5ELg6PbgxL6m9PU8H9Y3HjxBP8PSdSas44hepbn6ePgrraaRvMzuJo",
  "key19": "5Sw91pdChQx34NoPYJEEm6Swybtu4itLMgayMvoq7mbucYiwoBa17GVDmTDfU2XAosj5kZc4xm1q4RurmHuqiGvv",
  "key20": "xEk6Y7i9PXcFFKfkQHLvRKg4yyJzUFpcJqeZmmJYh2kJwDjCEoA9hLFGJb1b1g4DGFDamPvJzkeffjyUvoqwuye",
  "key21": "3WhSKSXKpFdBgHnTThHHYsvC7qwWyVQLbS6fgA4TiUm3jGVv74QXp9eTCQUfw4Bw1Ztzk3jZGsoBhoPBmiPUSwVu",
  "key22": "4Z1Mp8Yji1P9ZW4qEN7MEVJYb8tPGRSoDqUSijWQSpoojd3M2aDcP1pP5uEgRyKZxZ9gzorUCKQ2RxKSoJW8K2B7",
  "key23": "3jzLV1zUtNrrDsd2jBiQXuzYtLEmQtHX88sVwSynCfMbwdrJdRizeL2Zp7zWY2vKexZTtbzfuy8j6RL8CME9xgeS",
  "key24": "4dANUbm2SjbPSJSNAPKXTUWDZn3JMnDW78CveR1QRZXGZmpAaNkby8Ld8P6GHa8oLJhWCkg81yhaBTAjLcNzaixT",
  "key25": "Ud2yYBaEKVutvt4kGYGnTWHVS5Vy3Qp5tYaSKotzD4CVKGLKu5bmCtV9WCBVG7DBCUVtmKntm63LCChvkoT38g4",
  "key26": "31Zyhxhu3JTizoFzGe76LuadYRAbCjpUAHEm1ry1jHzd7ZMGJA1TTWkKwiY83LUDzRCVbXvpEr5A84hzbdyLem7X",
  "key27": "5eRjLYhF8azd49VD1P1CFeiayPKT6cMv5w9zP6sput8dPKjEgjEp2iKN3QJ2dqTnGqu3JjsaFxosirgSpe1EbXuV",
  "key28": "5k1urUi9Gb5Ju8fiGkAaBdjQeVkecXvbEG6BtYMXo83NHvV252msB5B34rXrcHH5QP8TuVCvZV3JNk39rneK7ESR",
  "key29": "AXsjhFJQVrh4x6nGXfXnxY2Q1sGMap28qQ9iD9yxzzrDu35ChNRSjLcSw3iuWaB3gV4YND69uVhn1AgaKuuFZPj",
  "key30": "3Lwtny5GrLe9h2pf9QSMzSihgxvCNQJtquN7GZcjsM3jomtweaKLoMRWsMPGvTkRyGALfrwTmstZoBLetyqME4Tz",
  "key31": "rP9TKNagaAAEHRerMdRHLxHMUdknKnDGpqZQB1UBz1MaaAMSoVCqftbZabAhmvtQF6MedLaonQegYX8K7KV3u4G",
  "key32": "4eWidKkA7GfK7Cp44CnvPA44kSqRT5fbPjRpm9MZqPgLVRHT8ShGB3spMjFgpZkVRPCskGRFw6v1Vv4tVAqtQ9JA",
  "key33": "4YtZQKRtEASaZsapBQ2WuoRHhbKLv88ZodYEY5hqjAt8JSGtAJ1SAGStsE8gnR19j3t2DxT9waC23DxfrPTha636",
  "key34": "2WPudHpkFF8HUcZPfrDg58h4tUBiZsw7BKwFSwHqDDmCLG48NJSRkVqLuDoedLN5HLdxPfJfsc2yMdUca6KxogJx",
  "key35": "5NuEdvtz8xjfyLPSryTLFxwJ6dEW9kXnJKE5b2EFicfoL7ARg8ggHmTBt1QbMqj31D1gC3uAVRfrnGwdNrF3RFvU",
  "key36": "BuPCabHtG4U9F7G2sex9kZ4UWLPhRJv8YZm7FMYD3eZoHAem2N7aAndHmUp3AJfdMkcjTnn7AaRUssMiWkE1Es1",
  "key37": "3hXWN6uzNrJYPAX1LWZaGEawkMmrduDdk8oqkJGTuTu6K5o89yks1DdcEUVCp9z55ZcmRajahfvxVWeHEuvJABXb",
  "key38": "65rronUeULCb3Q1ADJLcomiWdy1deJQqC9gh6oNgHamEmL6QQxcWH2CboUnuizbGUSU2CHPoXTh3RNT22hPCYHpK",
  "key39": "5iqd7nkgeRwZ1GzmjemTnU9hTtm6hVuuFm7yyE4PNyqJ9gvvz3ErLds5ANjCkzycxRyG46o7x6AepAnSZNCocTfX",
  "key40": "5y7jeGUtRwFx9VS9GVDquJeRBx8DiHhtRJUEpHQg1ij1ec4aoUnABdTLEf3XexA9zYYXpc97kUDaLfoGBF1aNCi4",
  "key41": "TGawAZREunQ9JJth1Q7g7TKupoZgTJRwqZpuuLR6hAEFKn32hW4svH29MrCM1qdJu9jEm3CvPY9fbRo6rDunfpk",
  "key42": "2o6gJv5qif7QFR4mBtm33hDWwnMRXwTkgpmbYRUxGbW8SaqtSZRzPbAg6wuA6oerXNcQj9iNiqd3VusvsyiadvUT",
  "key43": "62piHHqvjBLmzUTxJ8rsGUKAsEMPrHLHeSURCbbrLKdFas8YEYbsUYW4Ye4XYuJFfAGVABN6ZoFe2XHg6U8i62cX",
  "key44": "4EMP2XXhjEXdTrhEGRT2Mvadwf6JE7jj3GUdAanS4n2s2wxrfiXr4Ggpo3Cxm4emzTSBh7EhdoCMcn2YhfKmLW97"
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
