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
    "53pLRt7a7byivhS6PbN1un7D5xySNeQV6DfydwrntCubsaaGnSDt9tAf8YzUYZrwWPHurLx4TBzcwnUpAqkTiLNE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fGApPWpo4T6DLoNrJhqdb5HPwVXp1Ti3zYgHykm7mf9jAtXUDi6txWbGTg9YtUzCtNdeuH28zdUrfjL984SetzT",
  "key1": "BPixtuk4EbtfDneH62e8vhvN4WZ1ujW1FexVNEUhUgbbL5XSS8k7q3134X98QGGHccWZwofDA6CBfUmA2ZzpGvs",
  "key2": "4mYw3QfCR9PxvwTtbXXwLvxc99NBcJFVBz9Ut5uow7MAjPBfF1HpmiHm5ZE9hz3iP3fuEd8cXENsusEtQkHkr6ER",
  "key3": "4jarYhQy6iEhHXK9gdQ6zts9M5wxSadTDwyLtMXFztp5zMG1iywCf54McCRgfB4PJK7njPqUN3WMaLSx8mJfD6yS",
  "key4": "4PrKAdTfF9y5soxw9mpoPHsEgG25XkjDjqAxGU4Etw1YwDcyeevfYDQQ1K46Hf1uUYqkyhnDqvKKWVQtAcid64Dm",
  "key5": "21RgWWLn3eq75rSv3jvwaprkPY3NJAGLsavjEcCSb3agMtEnqScUfKWBeh7b6ikfdiPYip6pactoJdqHf4z9nxmP",
  "key6": "5WQi2e4mZMXrvbVAtKtYatwTK9oeLWuLw88Z55SwaixDw5dt8kzUbg7Ajdi3xXdpMxQcTfLRCZdPNxMaEi12baAs",
  "key7": "4SFMrLshQYh2nKG8ZshEFmDbqmj4mAFpqU9i8PydnS8CqsX5CgF2hUVrrNq4nSRFWfkk1dLCBaCMnTeJxW38HJxj",
  "key8": "3YdQjiSvfQeUA2N5m137n4ofayrXwHgBSqmEiegGyHYYK66Yfy1XWjgzqqLnmm42ogt5whkeNWruv4255RsGoMbM",
  "key9": "232C7NkcBNVFVcTa2s2hGuixw4rZB82vYLEjyBUSzyjgXG2L1NXZBtyRkQFwyACXk3pgw2ACJZQrBw77Uhy3cVUX",
  "key10": "2KsrtNQBXiJzahKRChNaK7LW1YgXQZtin1KiUTyPH3fnk6dNxhhxD3zCfYSmLAmrBQpirxN1xsgyZhoUrUgSgTnz",
  "key11": "41eE6QhPtHqHLpbbQYoaGUwipN7zZWR34oN996G4tfXFQXpshF5geWFF1g8ccBK9RfzC927Bgh5PN7VmxZRdAmFQ",
  "key12": "5hDQ6TgGpPZYuBUyFhPnLU1rdzxao9CotyQjdbuAJre6X1vFtW9kbeuqnJiKH894azM5n1mNGMKypquURrLhoJk5",
  "key13": "2ZWeEdZ6d9LXn8LPmWT4dXJq1B7ggfK3g38chY9KAsbvQHeTEspzoLGQ6hoLe74JzgF52w4Q4qkkcnpSSJtDGVSf",
  "key14": "3ApdigvXEjq2KDZR1qVeucmYFTHrRmy271AZW8Vw5feidML5F35EHYbLpAcXfmfZGdB453eKLemsAHXtrN1RBNp3",
  "key15": "5vmT2kqJYnWVPwbKYn8kJY1dUf5Q8g6HBAujwzYu7JL9MUcUP1vKQ4gaoouPNmzqmYKsxah93apD7ZSGSsxCoG6r",
  "key16": "3t6p7PHee2PvBUqDSfATZc9N8PojoFmK3RrSRcfFenDDkcvH4Dy6kgTe36TUuTTCdoNktQxPFLHBgM4PexLqhDLb",
  "key17": "4YL7wHrMyqQnBKvyvhA84kJ6bAcvNZsuso1KER9TZAMLMDp3CEcRfPvyypX5SrFQCXUjKsNP8KsFmq5ZREvwKr2s",
  "key18": "3CWeLXP57rfvc9ck7kC11BxznHaFAcFkufKVRzVfHf1KV5DYXv1AFEyiSrZ4SUmduHeMkJvTi6UakdrkaGHf8Qta",
  "key19": "5QK3XNoT9W3RocdvmDwZWFV7ypuGS2PMGL5GVyQTHaHSCb6BAePVpFjx2MDMDnTFMULVN273VocaDJYv7uCDuRLZ",
  "key20": "4FyRvfq4Jwx9ySSSjXQAGbbz37Txpx9xaz7wSHouBYbgA6MBM7aLYcH2sm2j1h92u9yHpmveFYvFnH24P6Zo3VH8",
  "key21": "34kGqfdG8eBbzw6nw6XQUP8tttYNM3nKhMFEuhi5EJTTcQs7M6uRX5GxToBRwVZufE46zYWXDpBr36ZwXQuYwzSS",
  "key22": "vkxQb2Ko1eZdBfBtDa426demzBbvZsiXhsw83WU8RwATYDmR6BXsXkDGN5vfJ4n6LDCbMSMBWgEvchJwKsJozbW",
  "key23": "3xjyRMCbB3SY3pWFbzP6TdPJKsUqU1UBPgdTL9Q8U17eeEpatxwdQ4ZHUnArmCJZgugG9tp9eUKnjbWnt3TAMcaA",
  "key24": "3NsMhZ1ZTkMiT1yAUKJfWzhdMw2GPJdjUiBRCV2auSBFZLbmD24s5cAiBjw9bRkN3Wgv9KeaWmY1YZswsHADAceu",
  "key25": "hBaMJkM1RwETuGNME4dr4RD57TvNPbJfB5KRFVRkc5y8iv8rDaeE9Lu187xmWmfa8xpi3DSa5WqnhsB2Hu6R63P",
  "key26": "fVNYUKFrKNLvGeQVm7tHPKWyYGgPb1GHEcr5LE1BokJNsujH4zNQ13xW4oBukRb5pVR1QAtrUufo82U5bzqi6QR",
  "key27": "2aMMX7s7cPFGBuudRR7qfj99iMxFhM8kKGJdTs2Uu44jRtuR7yFX4paNBBErAXf6kfU6kFcwqGuifUmN5jHh5eZ6",
  "key28": "2qGKfr5ZSFEccf3g7a4SFQb7zsKuuP7Y9c4yvyeydimR7RCnnBWUHopPiknewcPfqW73HxvQAPCq9udLggPhWCRy",
  "key29": "2j7tcBpc3si2AKKQ7LFqVLioUgtSMPPmXeqVNL8LrokUQeZR9CeHTkRSFXBxuhCXY9HSasrvX66NrNipArmBR4m7",
  "key30": "NaX1JjCpV1ctCJLv1QzqWNwGPPGEpXfaMs7fr4hmANSxM9wFLLBe1tGtXHevpURsMXF95Pz1LkzPRkBHNsaPFdm",
  "key31": "4XAz3iXmK37FkiZktNJVWwbmT6YTcm5K4QZXX7y5knAXBEMv9rtAtRWh4awGaLnj39UxQLzof2pumjHkPkXeXBpE",
  "key32": "eS1SBDVSiFFLz5fYhkHmGC76154C74ZsqUxhFVfVcBFZD6voZaMdM9XZgr76A6HndMvPXB34xua33SCgz43qUAU",
  "key33": "5cUhazLRvkJgS1AsUTXMQQDHLbELogLVGPuVvaWpUfBdZ8p5QZ39u8nTRFtDaVZ42LkpPb963noK5gaYZ59JcnCk",
  "key34": "4CnYQMoNHyb7Bpk5aiyZdWMkJyUgwQPWvM3PSZDky57iQgZsfupAHogjEHpt5oTEcFmamkoN3sywdk1xF9gUc1hL",
  "key35": "2wZDSfHohssTvLFZqQBamBFxfbzveuHbHPRA56gf7b9gd1rD51sk133Y1hFg6ecm1z4NG2PZWsZPKSHF9Tqg7kCu",
  "key36": "38Uyt9gjJJav6irQdzoDyWBjB4TUETuswx9yCvCpGB6kK4CdcGgGkqkfGNY8qBA9BPUd82CDZ2BnUNBHwnb9oZKw",
  "key37": "3eRjre2EWX741weL8wxdcDj74JxnJuWHSiNvtAQjxNLMVMHiUwstZA7dZFUiUv5LDTN83F7wf5C9P3SvxH1Ci9Wr",
  "key38": "hfd6d1BQCngo5yMmXr9GURQQqLMRdogVPPYgCawCZ81yqeJN6fu2aSoDXrVQDGqAgS5K68muihyhaXqdbh47DPF",
  "key39": "5QaYLoXorLfjjCnMP1fsXVPbxHVX4dtxYnpnL4UyfnnYsB4GNMeWzSxAR3s1t4TRWkK8vgJEPWpdXgVJ5iFCmqvd",
  "key40": "48CXumNy1CdgFjE2eArcVRbc8owb1ra4ftwBAmuykuUuvLFtsN58je3HVcugLMXfvUAs9TNseixrCpvh2zXXyx23",
  "key41": "4RfMwRMb1J9hdFT496zQea9BvLopkKZq1W1M1otS4qhx2XBfnMTy7Am1MEDMKcXcHYmxxSPYP7JrrzLi7uhYkYS4",
  "key42": "2MbvcJepU9GXwKvygc3CD1XhtC4793KQgVQQ1oB6CcCWpzrqL8sCHh8JvrpVX8So6J32wTim2N62rpRKU2HHzd6a"
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
