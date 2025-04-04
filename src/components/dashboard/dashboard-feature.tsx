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
    "58w5xw6k1v9YbCi6fNV65MjAS1Bv5FCf7PviYuGeJEEQtJTJUsw9nyGRRV6Zri7MXwFu3ks2KcEcYZbQFCytyPtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HvTNT3SHQyrygRcv9J1EbQf1R3VPYNpju8xmVuW3d4DCo8gkQZFwZqp2GvkgkcNqNXVgh92iHHw2B3wp1vz4B7E",
  "key1": "3iuhs2BrC9H2Kob7rhvzMZihpyLraj3tQhtQkcW6Q3MaR77mFf62VweKbQ4RU5Wx9JKTu8NpPBwzsJLcNoJg9G6w",
  "key2": "4EFc397BPLPH5vi482zvA1tbKroLaE7MCX3QxyTxdJCey5hdxcTTd6yqixTuMTiwE8SqYBtCwUkPGatwejRk1fy6",
  "key3": "2hnk9nEZgSrqXU7taFaTaLuDPSFm72JZbY65XoMspP2qgALKgJVxDGqNdDjmiRKLa4xikX4B2KfVpqFbLEQaRVUC",
  "key4": "2yayL9aduiczDmj2MHvikamMMNsDoEBBEnLeuLgXC6APxZHHaGMbhWoeyZ3KXMJ5Vm4ULsZwcwMKd32a2GcMhYTC",
  "key5": "Wi4LmN88vkqS5KwzatsX5wnBywwgARRVNqMLJ8PVBLWK9w9QaEHSXeNb1Gh4JTMX9eJ7ppwXSJcxhnNPgZsDy3r",
  "key6": "TZtgtWRch9Rvko1r8R4FL3jkpjt2Ka75iZvfHmDx48wULzUWVqfkifKtx4BVsn2AvgKKzcTZXKFWoCdt5u2BCHC",
  "key7": "3Qva5SAso4kLEFSJZQwas1rW5R2oBSGEidFS9vNyQfjj3SNNQfAjSVyLHY9YwvnQ1EMuytCAJhPsrr6KT8o5hTYL",
  "key8": "YHeMh42Zh395QDB868cLxpCauSKfnt5Znz61aHQkBPV3AfQxwL1iEQMPuR3gpAzanXPNjm5Cxdi35cC6o6qmcYk",
  "key9": "2aSc6N2EAP8gG4z1tEnq41eqgFDTFmXXfqCzaf9vFRYUN4WC4r8JJTH3wkYtxWLeuaZCZ5i2mrQ8p521Kzej8XCu",
  "key10": "4c2pANsDfivh4MevivzFVE6AKPT5btJuyHutP78awU7RcKw9iioSwTbw3L2LAWRbHAnJqe9SjcF3skDf4bMXrHwJ",
  "key11": "5LXjoogJMS5Qvi2ayFbJcyp6kW61Nga85ZraWyDBuHZc6ktsf3nVQKjG4gMUirLev4JXave62cWcNUhuRjPpJzzb",
  "key12": "2tpdERBrchWUjKQJj34fvpPzo2gVv8vDcaLF8faBwrA2X5QMskVSQd2b9daPcwhFNGuGUkMFAiFF27Xdiix11dni",
  "key13": "5dG26cUakgJ7EYmKLjY8qwXRTvSYGK3fi36EQDTceHEiruJQ7GBzKFgX5sRdmHSVo8tESoMG52sJjW8HU69u2oaZ",
  "key14": "4G47bnYxSiqwTwHcYDBKdPnCtQRMBbvtrT3SmYt5hMWNnCQ31ayNnwAiqkFvErwWi27U9cNVxvm8w8g5GKHb3F5d",
  "key15": "XGYWSgHZHYxvxdAgBwBrqtjiczBqLzSceMMaCR7KCg2AG7E6DBuhDy3HENAtYGr1iUpgq4ghHkZYpwaMjvVXnGD",
  "key16": "5wKH4hvVZN6LwsvhPxFXXYArnidy6vjUMYdjDk8XmRGd8oFUdvfm23PpTfPUeXBTNqYn51B1M2pAtQW8TXgEV46G",
  "key17": "zheuXY4FwjDEhsSRLRu14fMmssgW7AmEw6xCZhmCAy2V6A7Qbio1pqV1Kz38go2vg3MX5USPYXxAfYCkMpgWUez",
  "key18": "62o2oAowP478y7YjYpXok1cPnMcgms8AMQ1zKohwcKGMWuGsBKaM5E1WmtWQuAwC9JxsXsZVGPwWGSKt2wyw54WZ",
  "key19": "5GsvHaBMnQwyvvRyEcQ65PppgxP4PeV3sd2HeAP1XZgqjyEkLgXE5MEZy53HTRSRZUayt246k8tw6quQDSsbD1Tg",
  "key20": "2MScaaT9hL4xchDSeNLq3QqCzA6L1afBkfnkuCdQAWuqB5HLvVYzTLPZyQNoMqkiKPGyx3gHGNgnDDmnE6fbd7zV",
  "key21": "2U8B5ABs1juENHkSpeRNX1J3CQkbojDan5fsASnPMDZRu5VRXccCqm2u5jhVqtZNq38E2uM3q2XdVssab4hPY2Lq",
  "key22": "5vzST4a2ng4QZGTjL5SGbndeJn1MDvwGABu2wkBLB89YCGoGZMFPRTPfRC1MRn4zRfi35Y7bdGQ3QZKnvsBgaPbS",
  "key23": "4zQCamVxVBYuJxjwEieF6jT8YkwvsSWxPZAbdR7b1CTQiEPymKpwL7WK1WccBeWz5jSUqR2RA3NZTRvzibSfEASH",
  "key24": "5U8rX51Ena5bizMm8m2gTEiAfuTgoZdmgGfNatVMDXYzfd2ssYRVfumu6Yxw3V1FXfGXbuiBsnZ3AY9G9SrEWoiH",
  "key25": "2rpX6pVDesDntdFXYrXsxjWVfzKX3DX2rgfduXSTUBQHAJbWrxdTMpKWHLVL95QxMWtnefMjAdo83nJzSydaV2RV",
  "key26": "3ff65fLJy7yYJCRdyS31S7RLp4pPUpKhVH84rQvFe5fWKDfPuFD7nMN2dFZAFB2GUn18Ljgz9x2abLRV2uzExmcG",
  "key27": "5o4pdJPjB5MZgRdSgs3fSFHkBwQBEV3CSYEdADPMn9fDGvTg2tDAZfugPD1PzqHkz72bs15J4Fvja8tXkS7pAA6i",
  "key28": "3zSo12ENV75s2z8oTvY2n8SffQS5jXzp5q9f4c6wHk5emYHEjCu9oyMA71MzHvLkKNqkTRRpvrP1ZeMexxRJBmJg",
  "key29": "kVcFkDeCyYR4aGBXtzMrgQHF89k9Lz1d34q5sQGLB6dfs8vjRWSV5cfyjMKKVAHiXys8gPx9kmNcuS9icM7b2gm",
  "key30": "5pf3oqdDCh53NRpeC2KuKH3qr6j217QsJ5MmopLis9Ev8b4A3cQXhomL1R1vW6rYggtkreXMb4bcJ73UQK5bP8is",
  "key31": "4XrFaRLdCjoWxo3Ta6B5fAEQaBGC4FZiESrFEApRpbDUcjU1bv49BWrW76ynkJc57KcmWjt5WGcCJu7dHfcona8B",
  "key32": "kdwpL2qim29HCmtZ6VeFAgR9vWxTKdwa6XGW2MUaGRqLyd2sVozAkmsrixaVos4pABkrKebRP9FUAxNnNkdQocy",
  "key33": "26nAw6GwqyUE8AUK7Gb1drRLgHf7yiGnmwrNJNAM8Bpf4XQG6cyGtCCkQvNLxce22HJgabNRGUHpzZUfJQxsuQc9"
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
