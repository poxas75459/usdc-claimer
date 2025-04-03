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
    "4a4h1D35wrp1M2g2WoPeQexsPqcMENG68dXaCMTbFZ9wbKcpgy11aUtxUpHFatisnPv8SwnrrSbsUsxuahubGbAC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jYFVXbsYtGMxweeWUo4QZ8fgj9SDhFREko9VtLhJDLqDkE5WWcuAQyt7mzM1F1RjpsGdPhu6qe8C1Vo5jFSYLzo",
  "key1": "3z8RSUapHrrYuKDQwnT7vw9kkukNjsJpHz5RmAjAYTX2hwg1UMpKB99BUkaEJkWR2MeKLdh4XcQUUxT1Bgcgsi9c",
  "key2": "625pxwhY5sNzSFzDCikr3XqBWCn32vuRg6sXrVDRB8mXbEeJvwhd5PcpgVRA9GaqkEAmcNvoP78RMjkkvR144EoN",
  "key3": "5W65ZCrsX3kAHmJPYmZGr6RDgRn7L62tfF6ggdsqkPmWKfX89wBWaBZ7uHJ2zHFLa5P6d6VSbXW6xvibqsxeyD75",
  "key4": "48TKGsMyqZxvxmZ9ERZvPe6aLLbYakcaBP6unXUe9HgKQEHujej29sc2z5xxdv8xp3NHMHUkTwcgs53ZWkYGfFVt",
  "key5": "Ziv6kMy8Kg3SGiA3mm5hudZ8nvWekdpG84SsrbzqQ5DY4oDp4YcZbqKu12PcFGwsX7noA8eHEP9hZYp7EtTxb1n",
  "key6": "54Jh89uCnvS3vKmJhnfMALd558vVYUuKB8XyUW4FsRUsxGxcuBThqvXVijBV2WkJJPQqwFHVyk9xvSs9Bv6Y3ZrX",
  "key7": "5gvaxqRMxUcM1f4gj3uUADLzrs76dNDM2UgdRABSDYMMHyRu9EUszjh3VTPPNvKXRTfcH7A7VJ2QizZqnXPT48PB",
  "key8": "5qZm9MvMmvDcT7h9Wypn8RjXCnEest3DdJCLyVXwgRxDwE3N28czu7V6cvT4ft3qXjR9wCFocZYKuV8xXJsTE6Gj",
  "key9": "e4ESwuXSpbW1yp6QEAuzAdxfS3gbQGVWfkz2JKW6XjfCPJnZ7WzY4zEB3hQLczXsW27xYVSx9eiyKCUbE2N4XYq",
  "key10": "4KNjr9FUPkbGeVpYNLuYYAUExSPBhDAnF4xHFKiqcVCKrENswsTgJ4yQTBKWU9mB4hcCXBuHtXvdDVs8uxCikJVo",
  "key11": "pqiLACvF3A2VRCcZf3S7PfjCwU64qZ3Kmu6UCMtSpVoPJsV5rceNt8j4JTQKsBcFLM8dc8ASh84CP2brGXRSJb1",
  "key12": "5hgJGsVLBu6eLDSukR2PSGR4qBMfJmz21gwtmwQvsRqo3ntdq7Q8DoWR9tPx5GCmGvw8CNBceXDdYAq933KXPTa",
  "key13": "3LAMoE8oNWQk4KvpXqYdd1PCJLrXhSwZVmCRY1hBDMnQfyX7wqjkPnCYKGc8V6UaZzpsLd3EauJZNL1DG4Qs96pt",
  "key14": "2a4McrvzyskntXMBMeMfKoZ16u9M7rTyNzYAYX2gZeHCvV6bxCJ3viB4h3gKUo1SknEWU791D2rLyCeUDCdQne5x",
  "key15": "2K5mTT3NA2mvtYvTALRyhtwk7qsQus9hUb2eCDCabeLpAWAR4Yy3DsUA7Fo21goGBLW1KYcRCajxgGo7eBU39J9e",
  "key16": "iGuDHJDZDaLbr75eypcGi3pwCmm21uk8auTdYjza3Sf5HhZMLKzio3B3gDPkSVWaDtNtdFUcHVifvZZAh4YqSLE",
  "key17": "4YN2jEFR2KHYYVtqdn3EDeRTr8HBL45PEr3Sp9ZWNhZwrM45oEQLYb1umBfwLzGJN2Ymk8wUKhHzeqScn7trMKu5",
  "key18": "51Fb97C9xepsGCny52LBy1Zeu9jNqSAnrtyMUhYaQ6MJx6Fz5sbDtnLLUyguebjms3QLHKK46eEDBfMvK7uWNhzu",
  "key19": "w19gngLHiZSkUkdyt5rHSVLQ8odsozwpjhaeoHc1vyY3GPo4F3dV7HwLiKV2U51P1oFL1ztSwjKBCU5r3dgJehm",
  "key20": "5N4Q4j3XAfi5aGbN52X98xU5X7tNeu4c8TncYQ8zpMoVg7jYJCL9QN9fYYH7jHoTP5WnegskJksGsZkqxqfCUeZC",
  "key21": "DXZ5HMgkAQx29uqNSvw6CkDe8gQr7eTLvqFd5SqUqccP9qjRvxxjc8nQCSxqEAWuSiTfbypYhcnT1bDA6LTFumW",
  "key22": "5pJ4cXkXLZqjvLvWYnXExcL8oTpL9LS8zpqH5N6WGcpqWgRFUynujpj6ivxGoAVphgms3rfKtPtTNHmNAYpRjnxF",
  "key23": "5LihkRxJnjGbxXony5JWMw6ptZbXb7QSDrCfHygLWCF1x1SHWNLKEnKQRBoDW9AXkZtjCYdbxN4ysmaQWc8k3CbE",
  "key24": "gWxZ3SPcCTH3Mks8dwKgAwEJP9ojeTMfDq32GRbHXbdFcG57Kajg3Q87RzsV7MT5VfhVVXXkrXAzg5EEdTskFm8",
  "key25": "4boVkS4wE3SYe7gQmEeLaERSFEggEwQXMYiur3UaXv9D1FhvnSJYy1E7i8AUgrCcwUrvcy5fy2f9RJKxWz1tqSRJ",
  "key26": "Qwi53yBJjKHBNj8jsCo33ythxyUEa6fipYRZwd9rg5DuLhKKarmrCT1RETd39UmBYnqKmG2x3Aie8p5RgEgx2mg",
  "key27": "3C2WSy7V8LB26jooEH9oM5AM2QDBbUgLq6txABmG7WJSrk914D4NwVU5cxRwd5Xqu5kbzf7PqguWaD5uWt9KzmFn",
  "key28": "125vqnYX5NKpGjx4gKpshdnTEqEB9MjbcAiedSRDEFtDCXko9pvhJZDeHnpcQAGqaY2epzLJhJv7hbJ5sWWSAhF7",
  "key29": "2xkKR6dxpmS8PoCU1kHGMaefvGwG6jTPkoPSWNBCsvCw1VqEqTeunWZ5R2AzPHgbSA6YzTn5fxuDeaNwwDW3c3kw",
  "key30": "4mYciYTQWD3tSayn8BLBicLT1RSbj2FqYrxEgcGajdAWobHfYiJxm6CXemXidkPfhVzTb44LFqegXtCDNDZcVmz8",
  "key31": "2pPFirf2t8y5dwLK8eVbsd2dyGhQ8DeXm8gR6tmPBn6PJJgHqC4nb3cvay8kNuwNRCfTtLZXgJ3FjUE61mZ1BSFN",
  "key32": "3MTsZuidhDQ5Nv1h6F4ep5fHemnVPo2tiLtUuEoTgHfo7ancgZGXUPsLeoeiJ1HV6sP5wC8B3ZafCz3PSKckTARR",
  "key33": "4TVXnjZa5QYE1otSymz57RALm48mqYksXGqMeRkgZnwvK79AQTdyNjqSWcJ3LVKfEY5VkUibW4Xju1h6tAx4KDgc",
  "key34": "2GkZcbYUhwbMetVXYG9reSkeLJLHPhGzuyB3SXDKVrHY9vXXzo6jWCC5cpk2jr2YJr7YtQdKqoRTM5bDr5EQTYXT",
  "key35": "7SiNgYgWEjNfopdvgU3FNnNBq2A8V1iAjjVv81p9tmSoLdvgnwAH3Bs67YE2T2VQgAh5oGs3URYYDzrbSKrbuZy",
  "key36": "5gKe6hJQVnDr4ii7UzBJSKvwkypwaao3EzNtEDvFTN2ARuEmPDunvhJ1RQatcaHRjsfMCyhqpuhCJe4s5GHqqVbr",
  "key37": "5ATEcJD1HS1PV2Mp46JmtP7o2tTZ4dUvUprEMSkqGdt5R2XPqbF8uq5977DXj1qAV4N6byDeNUGWXmZCBvDPFQx3",
  "key38": "5QAJekRsGZQ6fchZs3AFF3UgzkFAqfT1MQPk1vjRzk7Do4knVe7kmovDaokBjRrAWSPvVTXGA5bUdaajfqNDmY9K",
  "key39": "5ZXWvf4LE9okz1iExDVc4zSf3NfxdV6QjDp34xVMNJnYkU9wnFPvyJpdtd595sE2pupLHbGMJigZ39jgivPnCyzo",
  "key40": "4NcAiJjqVdcW4CpdtcHsXFKHqYpWz21FHWM148nDU54zEnN67o73MQftz9mNgMpxLiUzTqvNEAXpmZd1FPN6g35J",
  "key41": "3gzGuNX3BY4PqiSWEtrw6zwvmzxYN524Nym1nCj2FSNpHgCUNKvfgNfBzUsJgBncQb5Go9TbrrwkfE2vwvfEscBt",
  "key42": "4Xq3Eh3PQipzAibmbE5R9eqzp57wKmmwUdPL8kpWAi4rx1EG2gWqpojMBwG9hZETEmhC7pcKfcRvEqByQpfcXX2X",
  "key43": "2YZXUW9ZTF59VP3dCCUbxaNqDzjNaXdBsW1biwxzajc4Pv9pXuv2CLGmW1TZtpiQ9XHWMQbvYD3NKf5fPRo4No1e",
  "key44": "4rMjGsoUjUV2VoJBhtZ1E83RSbpjCRn2amqrkCju4ndoz5esRMQnYsaGszXswgT8w36ryz48R1hC16Lt27tZthQS"
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
