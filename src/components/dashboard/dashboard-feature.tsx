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
    "597CLDuNr8YjKuHemQh1RxBr8znTGNEy1NSmPmx1ZeG3mWzPDL72R8TCnnaEkYYGqs3A2g6mUYYJber7C9zFJPEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Rt2k9jGZgw64qVWxfivuuAcotUDt3GZi1kduKJo9KWN9gDPWYkHGW7M293ufYeoCMYKnVkwrd6L7QJxMLabu71f",
  "key1": "43p8wcLsWdwgffFvfcpgB5KAuLkxdVKgw98xNKssYueSLWJjsP5TyCEoV9Vvr2vRtdZtWUMexCwr8fYePYVAMjSK",
  "key2": "3cFhdNHuexkyqrx86cjNosddt6w4jxEdkZ7FhusAMxEq4dAujDcAi7PxAMBjqTWvXvZcBa1xmhFtuQqm87AqbsrX",
  "key3": "61vPxVqPZ4BqPVX4PnaYQEh7TYknMKUV9uMGDSwt5ZwL4JJ6DEsERF56QPbPRmMYvqcrCQPBtPTwWRfTbEgKfPeC",
  "key4": "WGy5c4RURvStyYgszgteERd92NiyHBEUrTEg9VktkL8R574c9FHc5xod9yijmHxeoabHpE317e2F9JvxDvJ9Z8W",
  "key5": "2bpR7N1HFQKyHikQWsZHhmPWkrBZxqLGPZdtGBWrzotiJxzWwW3jC8HbwYVHvMxRFZVtKm86xmmBMZBQhpjVuxH8",
  "key6": "48z2cCn9H3TesPQtAdqLWvCjK7bTs8bwvuhpi2dAmGZTz5ccTNAMoAdvmXW4kNY8cGiWGGxeArDRwMhk3cta7uSi",
  "key7": "59zcE5E8rKJp4yJMiG3RV5rt5Ay1yP1yfaNpRVkg9T1q4SBbDq9Lg1YxSuEtYrya3ZCz9Qj8BneQwpdspVt5VMY1",
  "key8": "3SDuu7BeWhbCXyazNuNAR8zvrwELGniZRH1kTGa9anGEG72imGLPerSUiS22VfyyJ426sSpnhM8vBakpbyJ8XRCf",
  "key9": "67o1tT9SAqHMJpKwhHntTxG8MbERJFMgFMn2d5vNfnKrjnRjK3Ndbz7PP3mLGwFHNgMqWQf6tfSFEtKc7nMDPpH4",
  "key10": "4L1gu7QwNRXZZnGF7BrTFN2KpADzaEA9SKdi366RFgahbMR4B66yE7GEKNS6Nb31TroiRwzNV63BV14RuSEj5mbX",
  "key11": "66ib17BpMVo175TRzJ3EcpeKkmeSnSrY4Z1oUst3cKPwb6SL7yEP1UYpJSSNKtqVH7c8p9ewykr6qEktG77znptY",
  "key12": "2uCB57yFKqcX3irEjXPDNdPZMNrF64Bc7Z8EiVdCkhUxJoE3PtggJGeUnQmJ3rTcqQWUsrnduUuXzvyUXD1BCJH",
  "key13": "38BaHZeD8Ues8kgmE2dF8pyQcu3w7BYSjhvzzN2ASsa7tFfPDcnKGpFhnt1jLWmZudGmtL4gSdcojzCUBGwiptub",
  "key14": "2BdFQQxpf6znKzYvV6qNf3b7HLkGdEbz67Ta6AZ9gCSoqkbChM4a2fGUaHmAb4jcM9hhdrWmfxJ8uEdch7mnFA8t",
  "key15": "1dq2cJr7LR5FGFWxMeZcNUiixNKZTKRuyLb5mNS9AW9pto6aG5ZHQPnzmMufV5TEbSvmi5ZTbizm9xWhARGiEr1",
  "key16": "5MSZEqFFw16xxGA6AWYX8hdTwNsRrivHiYnwziEXRwMFtagMCRXRAMS9xrt6pSkLV2awJBmkNvu3WkKirCAREemf",
  "key17": "vi3mf8veedkpXjEfhhMDtN6JUFoqE5wHWHT1UQN2A6GLAiNYnnrAYfg4tqyB1gZ4DHHuR8sgozvcJcLemkYpzgh",
  "key18": "2JtdgRCtT1pJmyGsZJCopuN49FZaXDYTFDVatrnTiVLBREDFwsGHxnAvY8w67uHYSv6AMp9C4CwgpWyjeaoUMr5q",
  "key19": "2LFXGNKwZAHhjocSE86uLdK3q9V2xytT7b47o23gF7B1aBEF9ieY7eF1QNYGmt9SUDidkMhGLMHFLRZtg9LZL4FK",
  "key20": "EVJXXkxrcz8fAk53cFUAsLLkqGUHMnBd7W3DkuqcyNFAeJaNJ1VT97obR1PXyFUtq4oNneyQhuUDbbjbj94zJ7i",
  "key21": "3V7hRSHiVDFJCYW53VmTahEJMKwm8ikfUhLStmkJmjGg53QxKwHgd1CmRbu1BBiCKDMDdPZkKsc1j1vYvmikWn33",
  "key22": "2MBWKCYr7rA6wbsY9R9UDqLaDhx2jQUQefYFdioz1siFwbisJbJRXo6GrQaJVNuTweuWdWc8sL5J2kYWqpShVA3G",
  "key23": "4G2kRyEtGRr5aP5b4zffcVo1XQbhcvw5BLL5QwMp4niZCmdLAEDKWLgwUJSuzGFFSUSkLmNPQTh4UPEXBwvqJocF",
  "key24": "3ikhuDATmW99vJzKjXDhuS95wD23zmy6GRsnGKmv7JjwH6ywk4CaPf34LJPj5W4ze5JTEZWN6ZBHBALJg5MRuEsi",
  "key25": "5YQUhMhgxWtehCxLC5dkbPGFaQA5htAyWQX6PfChx8TPeJaA6UKR1kMxipvpVAZUv6QbfrujYQCP6STjALR39ZUm",
  "key26": "4Hp6FfJkMcGsDqGUq3UzPmJWTVXrTFDsqwTZLx7yksU7mkjUzTHmK6ktN2NM2CexgYXmKQkkGQETmgoSHtazYP4h",
  "key27": "4JCNhsrWc9qTpA2GeKnAzUq9ZXqo1PLJnSyyaLMhmgmcHDsbXVwUhX9yfobwqSCYrT7b8kay54C6Rgf1kgKw3Kh7",
  "key28": "5CRCJCDsy9fudu3Vcbw78cKdE4qH2xHcM4xhqHprTyk51ng8FJy96ihTqotyfbgrSBj7EDHLqc1QQSfxs4ouYbfy",
  "key29": "4h2PRE1NXy8DPy9GGYj1AjzZSp4YP4uU48UQnkoxUN1Lsgp4YtKT6sWzP8T4mju53kStqBMH3fxUehAawxYojyxH",
  "key30": "4YEFTcDo6XgRUcjhKKeXh5uiaLWZd31ZRh5CvDHK37N8RhAr7YRtCZ4NFH2SczheMDreSsa9JBQZSjDg1ieC9Dv9",
  "key31": "Xk4B56buMgMUPWMyw97i8XEiweVxuG96UcuDQv6JcgkaQaZBEon63De8Mv6UxybxZKuLqQnk4cFsjQgapy1oRsG",
  "key32": "A7TQHN6SCZkhiGPjpQQji6neQu7j1AA9FhKXBnW5SZvqf3rW6o1dVhNXYBU9Tm8sZVginA5w2vXyyU4JpFGTXad",
  "key33": "4xkqLnLYjTnUtmwi2tQrPCQLq7v142STsvkrcfeM9JE39SPKTHucz5EPdF17gLajdVjVAGezgrU67ejcDyGnBgFH",
  "key34": "2nBWcubNJLR6DqwoGv1kStDhh3Q1cqs1sjvjNMfXirikdVRsnzASJgYrAPcXdp6AxAPztzJbce8zeKeBGLeZ3Em8",
  "key35": "4ARx9fBpGasqo3St2US4HdPsShN1EvkumTsTuBHijhaYayPnvQjQNq7vveCfFPbLWRRsA7gBZuYwcUmoBmYuGwKp",
  "key36": "BeE2aMFbMxRVpsonzwadtMZNgUyae6gquNxLP5ZHdS6wJMbGicoD8EcvvDUEGPcbob9NFrVxpjAevTc6SQcbZdq",
  "key37": "37MtyFqic1SzNZ3GbrHTNaxgqt4dgi49R4rxH8gWHJEN31qqHLTEDTK8vYFTAePPJSVttnYQHZZJNznJ89MJsxzc",
  "key38": "r19PBq6U5DRWL8Gwy7Mbm7X2R3SvCd8mrf1nJeGFSVhBMsLEDLxeZ3f1QoVe2LG53EaFxNs3zHvoFRmowWodi2S",
  "key39": "4bZZe7tijwQxmW969cDoT7uE1RY9twdkHMGkr7VRkFv83ZbC11CwrNef7eLZYgwGTdkdLUyTu168qM3k1FVQ7tL9",
  "key40": "3kHb9RpnNeaUVmQ6gDUP3WuzuGd796Av7mnRW4rPdrDFeHDSiTiX1sBhWBSs5mkc4tKsz77KdAmtic3MXiVseDuR",
  "key41": "5wq7aR2ZFhY4M3DwvLYsnjxvmfZcztzd1Gtf3LhPFYhTWSKb2T67angndBiUUnzM97u5YSypNLFb1kHZsUrk7VeG",
  "key42": "55WfFvTcEXv2hsP82aehcGL9WhKVKehwzWsyAGPeZmyRnamh1kTfAommM8Rzfm6XRjEsREA5TGhtU2PwZVTsfZGi",
  "key43": "53UNeUohGJAReMHDrPxqjFg8zqYyPU8DCoMxzH6EwwvrLbiegze8oxhrAp8sSeWxVEoTNyCbQBXMqh5iJFA6DhSj",
  "key44": "5iQjDedZSNSHfBbKUnk2uwRAbPMmUbCGJTjGHno9ynLbkki9PUVmFLP7VSk4csdgfydmZHqzjoN7qd8tKXuUwsiC"
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
