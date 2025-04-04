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
    "45SpmuGGBtw9Wb54pD5kV2aGesuRP9DBrUKMuXZy3TXptPZZeVZc5RfKi8q9M1Wcd6e1Zf8XCGNB2odCVQK15Zni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2R1B3i1drcLVnWQmrTw4Mu7tmPQr9bj6KPpsAb3kc97UtXQnCqjSQguWyayF9ffNHDDnCcALmvmBPFJLxymWrtLN",
  "key1": "ufAyefMrB9xewYUNBsjAJDxhNsCKBF4ryeM8wLvHQxAiai8fBVDV5BXxZQ4n25W6B6JFo65XqvDA4TGt1DXD222",
  "key2": "2wSZ16WUVfghT1PJFa7PbbRwPRwdKWnXr8rGMjxt8DdPGsvRaFqoa8ZYU5p3FawZkj4inDorEhAEoorJeKMGCp3R",
  "key3": "nxioWejhnXTrg1UV4sZWXMVkkUzsET9SUgAoCKDRbADDDh69xx43awpqYzoKy5Ve76JLFh7r9sLH9163jhBNKbU",
  "key4": "43WvS3X3rnniPymzwVwH9Cxx1jyMQzz5JG3NZXXax1EkSupUxeKLuJTNpzYvNJHKaYVJedjmV3tPLrWmhfAaaa4u",
  "key5": "qK8nKTa6VEQbUoShXSca3DcT9Gp5uFswpGFe5Nr7wrap6gJrGNkcVCzykpaH6ES6qm9DSLR1MBKrn6r3pe8z68J",
  "key6": "63hPtHfwzCXBeN4rytfpXkSHzK8A3qptN2bfw3YYi16xwkHfps2wRvqh4jeqjKVf6Mr8Xharffbu97MdBEMXuZ1U",
  "key7": "e7TsqRCyxEXGtKsxyyYXKmXwmWmWXtHbdqsaULZRVUi7BDUS4cMdxTeLXbghThxJydzyYTPMoR57qYkpXrQWaJA",
  "key8": "2Ud7G3xzfm7WaTWKWBKCa3qgNsaXvs6TM61RkjHHyDxaFo31cfjk134rbWgtL75F4YrMg9aWH6k6NVXPfyVtPVWU",
  "key9": "2d1pj4vygRAsheDVsQvRJp3RUj7FL2c4DDYb1Q7zZDBQ2uUtVVuWAjPi4X1YL52gRRXKj64o4QTb7ixVmT3EcVpW",
  "key10": "44UebkMPhgHRHoK2hdrq5JcE7TZDA3oK1m2NUMuhaSp4m2eZubxSXz18L913TUW7SP8eouTsgysL6khZcA5o3zbn",
  "key11": "5Q9HPzx8nqdk3fLejRozmjiiBVGAvA5DhBFZVQHPJch2j6FSV7e5pf2eqVzfpy8q7r3mSxdqHeyJVdBWbRYgyr1R",
  "key12": "2yWRrykJirWEhbGDwYsoaPCUsNpjxBZzjVMVuZtNS6bzQstVQgv8uLFEHFa9AGcrhGW7ahcsiqnyFJ1YWteY2rSD",
  "key13": "5UB2rvt3qSSBC8cYSnbXTEbBm8vk6KEkGCiLXugVsuPy8PYCubcaTvKmu9fUEwqF4Yw6h89BuWYrJi1t6ukrTJvX",
  "key14": "5ZJW6WR9U2yZDgdrrsncHzDmQRGVZSrbpFsPrDRwugjwnAoJ5JU2cHUHX4WKbnhTcFjkvrbpQgk9VoFWk1qsZAcw",
  "key15": "5Wu2dUcADgTvQsWF5WLXTRYRxtFnbX7DdfmisgHX9BGnuidkygvH59i9bsbfiLQSKZSUM8q8BYbH6iqs2hUqJzkq",
  "key16": "63XfU4QMbKxXdwfmwtGVr9ZFbzBZmTCES8CGeGKui1CmWF73Hw12iTejLrCmwz3QWyv4vcvhr9SPTFvifMTvaLNQ",
  "key17": "46MrRnLZ5HegjV1hmiU7dnooQQBqFHZ8pSp76pFhPCdH3PCJp59Uj6TkSPNv9TJmkCnhv8WXosm52qxFCF2QvMEh",
  "key18": "wtQqJVDGAHKHEXapU9AmVm2XzxSPR485U2yuao6GQ7hRqH1cWZhGnEf1JtpCuPeuB6U5JyX6U499BT99BrHn2Td",
  "key19": "3bJLi4khUEJkT6gT2DzNzc7Z63RvrNujEs67GYgigvhEREBBgNiFUDqe21fNZTXJM7Gt5t5fvm2xnnquV8nuMLJs",
  "key20": "4k7yZbVoKhssp1EaXK6Ceooi6tUFd24CQUYsewiErsZsHVb3EVHKW7rPwDLbWBHVa6EHRtexADmsDbgieEdbvb3d",
  "key21": "3KDN9kgSGz9qAgf6Hw2LRaWZoheZbzHyVVWtwA2dWbR78rA319cob5jFro4epAZEhZYJce8Fur5czxapXzTxn4a5",
  "key22": "47J68MWCvJBrPjQdy9Qp4EBRRnQGUmQNMLaDM4oafsN7dBTgTJAtDKsspzwxv41Kxbd8QsCrs9YS5977zudwdvoh",
  "key23": "4vV3YWfgEHuPqqGJgBiWuRE4hTZ7fhT6EAWQLKy6wbnYWkRyQ7eNNdYGoAbQPgVaQ45ZqMzDFrDkZSuboD9JQuP4",
  "key24": "3ieUYA1MjgxbybgVn35dG4MDkajnNa79QaTm8BgznPstaSuixxoFA26yjSdrWbgy6Jr3tnPxfbrWed9TWsyFm6rm",
  "key25": "7uGJQgRoEqm7kcV3AUHnmHDvXQ7KTH2Q9XvvDZoCCAQ86cHMmYxU665AC7KCDg7A8yuWEdF5KyrxBqsey9MVTQ8",
  "key26": "3JHqUY1DrFiwNWdRZz1dzEmE9WDG43XKvZxQpzttMnfF3KWv78xT6yNwHLjr2J3YhXocWikC73hFr6wqcfwQxkbc",
  "key27": "2nF4vmqqLCtvSkusdSMwvoT4m47Hzrfm8KqcjkrhpXJN7szcF8fYGZun8Z8SqqUjicsS2pvHz4r8BqDrEgK8y9za",
  "key28": "5FUWLqk5smcsTy7cc4eyzFmsx58z9joTwynTXiN8w38Y3YGjZ54LED5o3zPsvH4SZHPHGsgmAR2L7ko6qZETYBiM",
  "key29": "4BX9JXz7QVNRmtBVhQQToddL9gxaMMh74N8CYwFi7GbRjJvc2PSWFCZHm8tVsTku5US6cMsKAUZc8vaD5gw5JRue",
  "key30": "5bYMTSgZqugPXrLiuSLN5uqfs742nVdsVQxeKhVfx7kq847a9kNLEzCboSHVBXTG3QLXU7QWw2X55Pv3rCwmk1tx",
  "key31": "odgo7KqK55X5zodsFJyxZdH2NJ18enfw5S5z3WfjkrKHKQsTcvTBXwToLDyrgdatVRM9aFQxRhq4YSoaC3VL5Rx",
  "key32": "2AnVGHafp8LqscPJj6DGHrrSDdS3UbzaYfBx89767LAABnusUxRX9eSWxiv2quxNeP5CRsW6bRWRfU3SKWseZUWq",
  "key33": "4ohduiHmVSP9Nh3gJWMMm4oibojtcaCFFBUct234NXoaEXX91PbzAeqwaPFUdpnvyZY1yRfaoBzUWSBtQnWgN1cz",
  "key34": "5yaA5XPZJmWBDLWysaaRJSzc8FyG1hfhGwU5NqunGpMDFgvFjxcWurynBipSJDv7wf8kx7ws7QMGohHgkGQcsSvG",
  "key35": "5zJ4QRhtq9RSJatUzmhgz7XHHLuSEDUUgvMmdAheJpFV19i96EsAjSbWj3Nrzsqkxf3gnopKNtj9zhhGmg9cSPqd",
  "key36": "5R4KuL9bvKmAU7ohLvJ6o1r8sAbWQghCvLMK1Td6W2HnqWc7VRruL3g44uJpi1uB8G4SebMjxMJpMbA8fQeEx3e",
  "key37": "5unTgGHT1HHBnWM3YhtMqM5KErwUnhtsteqhUQVARo9QvFvLTLtrjBYzCST3oR7z6L2pUGXnuawaQZFhs8Vgthsd",
  "key38": "5oYXeMytEDpL71KD5xT3VDpBzBWQ1cqFAtFDeJKCxucHYzsbmNQ3kDpkvM3mSbcKHJJKe1RDM5NnFuZa5SEjj1mA"
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
