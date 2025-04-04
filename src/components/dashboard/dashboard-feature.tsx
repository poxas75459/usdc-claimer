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
    "2DxZH69n7shX1492RC5J9u22S7YtMA3J7K5U36LXFnLmPeprQpeNkRYYEiHdUTtDXubMT2Xisvb4UqAAYviWkNb8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "659taXdpNBD6Z7g4S47F5nqv7qqjF6MNioehRjkBg853XTT8Q4xuq5XNNNtjD9jJMk3RafYBDyZKS8Tddq8MiEW5",
  "key1": "3ymyAE9MLDQdcKivxK5vcEZXcAzzhVbdHMNQWMM9Jh4B4D2wTKHugCyMgTMbCyfiwj3ATYbzUa8e7q2eiVpsCBTe",
  "key2": "2mjyBHF8KfUG7RWCwvhDwCRCLzXFsYFoDrN1SjW3e463Lzf8vHVjgo7M2M7k2tURJ3VzLttUpX73oGgh5iFUj3WH",
  "key3": "3MonfE1jcQPr7T6QPTdqKv24Ti4Rya9iWvHhZZTuR7YFeRqYF3vcvA3aJUesoRW7PNR8BHsFsNNNV8iuPuaRzjcq",
  "key4": "599GiDQc8PhdnpXQdFo3Dko132Hm1sNrVrGV8xorGcmVcBULudt9VCao3LYo4WZq1e7tKsZ6P6FHCATHUf3APFpq",
  "key5": "5TKxWw6fKrAPztmvrLoL4BsDB7APHNFqt7P4DzQNeyAJoJBfB2BXHSqnu2rE4VqNcnVXUKuRSmpx1oom9hrt2185",
  "key6": "2SQgneZMVw5BU2txXPMhrHqyEoLzPag8NxNTktLT3kCTgdhX3YDHzTFwpvYdMUtPYQdocyG6YVUNvUsaC19DwnKz",
  "key7": "35cz7GE3yh76LC4T6yvE51v42GBqruVGyf3PqCKrmkrBUEbzCDPniKsL9EHsjBhpJuAQPbR8dbT3NAs1bT8G36CQ",
  "key8": "2DdyiWBphHfASAruXAGFqhjCK7ezMisUQPWwpEvHSksAzpsitp9sQiihWWrVyHVRmkfMMPnbt8hcFeiWwwaL7zpG",
  "key9": "5LsfqyY6ZvAxkAVcn42rFFvKf1M8Uq59ZZtn9oi3viBoqqY8r2wfdFpdo7rthGwbiouekL8meQM6HqEprJAuk38B",
  "key10": "2Mr7TSCqKbPVa4gPkdxSMsnqYTjs3JRkNcYREEoa7ocmBBT2veaisu4pNxZ8gZhx3FbZTEJ563Yg3Tgy3MCRuwu8",
  "key11": "3Zhqm5bo6knFdiHC1DHRB9W3AC7qdmSZpX3D4mMAFFj2XfZTqFroh5ttziug7JQgisHwfdYBm7u5PWag9r3pKQu8",
  "key12": "54vdDZ81qz7gH9Hv2Pw3Ve4KyQ3PGs4hAo1fscRp2V5HL7qb8xuLrboEram8MR2gqjKvw5BHYqeR5kxsyRJquQXp",
  "key13": "262evQCid9pZWcNUdffWWMcsvjAgoafc3uSWpGVSiDCwtrgn87spQFpsqq7QXfY9zwTNh6jcYKVwQqm3spJhh3tg",
  "key14": "4k9W6G74siWfU4Q9xkjb9M5Jc5Ka1F5o9YznB2c1nchQ2dnFHenAVM8s2XdkSiMwkykaZDouamgSAhmohh6Pgwna",
  "key15": "5ynkmixW1jNr2LWYakdoM7ToXA6PkS43ghTdWChTr8ZLn3mkS87GHknN3KWMb2MxMHoGCP7FR4hmDQHBYk4mDkTL",
  "key16": "bgH951SVgX17HnfSPjFovFq8SqtDW9tRs77djbZdYXqbb5QoPo9AGJWjeussJWXVbkSUF2Dryj7s1KX3M1MveRh",
  "key17": "2aRpKRaXSVa9afFrPYfSab1nGFoZ4BDtmDeAqErvqNVq9n7HhLFXLW2Vj8D1KR6Dt99efDdpCuv7Bbxmb8GhAvHS",
  "key18": "433Rsq6JPnHpAwRm7sJLXEBiPKku4rk1QRDFEzptGWZEYLJA71iuzBJJmu33FWahLoGsaLUqBMDYhd4ztm2CNdCG",
  "key19": "aa2A5nVy2DfmyaGLGgym7SbkwqAXGFrKtcDBNEAXAENQM4XSFSPHHv93WErGyUSR1bDUWuRDPEfbfbX8Jc4CjSw",
  "key20": "32wAFmeAFfM3SdoMTPobeAVzhLqu79ZVggv8suVFz6NySbVizUEegy1gGcjuK5EZto3PD5oUt7hZzMFmim91KtUB",
  "key21": "46iJBpMpYngwfKi4ftUVk9GqYCZ2iJAh6QZznXYaZPawGiDZujr2jbTTgkEcjcgRZ3powKy6Tq7fSkALUMp46d4S",
  "key22": "o9a21S1PCeKotW2d4HwKdAn5BR7Tqc3bqzRQUwYYgnyLYhUHzfuXwovLSfzkHjVVV4X2UnJdqtzRS3qjj59D9Td",
  "key23": "5fcnhpmZBbxZftJk1obMpxAe4HHuC4taA9UKNLcTuQmkarj35cVsm58M8dYS4jYNA8XhwxyHuVwodpdk4Lqp4o25",
  "key24": "4hoyChM1L4aDD5HgYRB5ky1DpsGnoU1JwrHoMVkXamLGRne9ineHQ1bZaL6MUxJHDz2P4ViXoRqFoukbB8eKfUzN",
  "key25": "4rN8hM5JeBz1qQr7CfR8QFLym5pXdkuGvAvVQWEky2SovzcuKZqAn3TJnAwFVnjH9h3r7iD1jkG2CDwKxEz2AZLZ",
  "key26": "4Am5Gq8fME3MPazh8gJgsUJkbUtupxWaEAF6sP7DgFynW2kht3naKFw3Amh62J7sD3TNJt1GTBU5VVAZjbj36iGq",
  "key27": "egjLFJWmJ6YyqNZmi1UJLQ9JMAbnGh8jsTXEYjDXYNmHxzLbzqc4WsDguCDJ4YA9EXZqRxXhB5ZLDqaBZsqqfVm",
  "key28": "4CtRLAFcNK3GYHaCDiP2st9uiwYG5RoGAqYUT8LrYe69Tk9DkynpctgQyZdTxt1eg3DXBoVECavnzBjFv6ZacP1t",
  "key29": "5wMLXN7qkcZ7FuRfyYshqA3yzxgg9nKorYJLtVSsWs1ToXCZ8mmqG5k7FaP7cTSSh9vF1wLCXycECFFgHbRXR75W",
  "key30": "4WTGQVfm8Wu2QcwBKmwEuFNpk1h4nMGEhKpYJ1Des6j6NLSJUTaiidqsiUpzpNQw2bWVPq2dwczHhBUPwa2XYND1",
  "key31": "3QDcNsPcVX5X1N2SvxwA7N2rsginuAatzVmio7zhDChdcUQawsF9SrAAKj4K61s5SBDGGHdqxkUn71hPmVoZ9kAA",
  "key32": "66qRMmiN5vfiMPiNP2LwhLcCNz28BTtC7RypnYeghXmEo3cZj4nGGieiP83Z6TBGsNS4ZXT5zpyTztYwUKffmk6a",
  "key33": "2SBNjLz5M4sy5YCfVKyrLbeCf5qKgTkHgt8ijxvSAHsSS33x8uYknYgDpUBn7LDwEQtt81rPKvePkGaZV5m16tA2",
  "key34": "4oun37ACwfQy1B5wFtSGyMDfc7pjfCsHnhcy5UdmJQwzaam5bWuZpAQ5ymKKSHeVYGYVmEXozbDqCXMsjwSP7Ne1",
  "key35": "4tkTyhZVsRgZ9PJDgvmRuiUFC6P3MnGFUqJGtA2XmZzdpjUNjDi1SuB618SX7CiqjqMYDAaQ27Ga1hYDC7FcPf3b",
  "key36": "2NNJ9Nm412u2Lf2xodpeXtF942yvueSPExgPgUydLaJGVUymdBUaJYXBB4BSVFanjc7RQTatuREPk3PTagQjcRBJ",
  "key37": "esCmB1uJjuuvHx9QspV1oZCssP9pDvt7R6DdzJnRPUKxQwmbmjKwuYPqW53G8vZRjCuLT3wXAXFc2jSV6UpDgXH"
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
