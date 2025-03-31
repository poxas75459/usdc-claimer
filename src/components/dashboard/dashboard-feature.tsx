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
    "5tpcRft26izVX2HZEqB6Hsoh6tp3Ri8x4aCaGGhGKjeaoZ9nWw6HYysw7sTmYrK9ZeUvEpR1oab13muwTVN5WEte"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67dm7weZEJ1kj87h1faELk9L81Yvw9v8bPyUwEtcSFE5XJQXFcjod38m4dY4qbnMW458EX6xtX8tMwRr3zR9kZyV",
  "key1": "3gUvViXfZ6fNN5ToEAM2TRV2t9sbqbd1xTAQkQhrG81oicKvorVYgvc6gDsnC2pgmieNAUaDx3X1QQAt19AiA3Hs",
  "key2": "34cgqYy4CsPDeXuCccbquvwPaEvvL1CgtbiYcqht8Unvd4ZXRta4yh6Zorz8cuh7H3f34o5ZCTyExQvEuKD7wJU7",
  "key3": "3LCdbVEc4UU3AKpgXxkfB6HYZ72AiLoRESuL6jmVwc1tWBx7yg3Wa15N9YyaDssBG9AkhrkAwhq1UgmDafrjK4F9",
  "key4": "2WG4XUf4zi8VAgsFh94e4pqCmtdyvwkj14rdVT9uU46T1mFvT9ZBkXX5EZrGKPJEhpk2XWUehBi4TCQ9rqNc9pZ8",
  "key5": "5CoRv4E1Na8daFhkHebuasTFmaortUfGH9CE1kp9xz9GJKg8DoHjkPebKMT6XpZzsZxwjuhUqo8SQZaYUmmyvyio",
  "key6": "gufvucKKQpWN9UbHueU7BBsupgU3jwL7RN6ZL5fqyTpNU4c27ejHwWVj59m7cPLsTyX89P8HeCa4Dw4N9sBpx2U",
  "key7": "3SY4nptBCWrc2dsSs1ixESFTyMg35iaAcX7rmBtamdbLMFDCdPHiRHaZWjqZhBkNNwRRRwMGy2BSufPZBbvFTLR4",
  "key8": "3JtLz8QMmayVdU5PmScRsuraxxu3BAWwnJK7wAizKdDSWBGhbwaB1Twyy5uJ3CrfaTPxAhsCJb23sWV2ukXQsUTR",
  "key9": "2BnW27h1AcWwuaemy9ZLZu9r8bndFwQwF2DJHAPszDhJQEUEq1cncFNZv9bDBRnp1SQddSJ9jXF2xpSmoSoxytPR",
  "key10": "4WMs186vMAysCWbQsx8HLZbEhSyyexdgtJg8ZMS91ogcG3Bv5RL4KKNEBrdDnrJBb7mzW47WpsBJXSycJMrv39Bi",
  "key11": "5uPTLvsaJ4cpxJDwUe3t2N3vkRMcyaMWvvx8qxYZFV8dCdpnNUHEb3WFcoyko4z33AqgwahTUemegEk1zoZnVhWu",
  "key12": "m9tMt7z7gZx98tzsiSiY6adKAbigwVKQr5wQ7oPmX2bsjFk5kwuXYuCFbA6bXr3Lh3yms1njuAmJ42Ew21Uc9sX",
  "key13": "3hpmBcH7BfRWkA2pacW3TtyA9E7tNCGPQrzSs9BLdzrRSPE5kHvh3z6EK95q8CD2VnobjaEBRByhBitTE6Sx4hWX",
  "key14": "5nj5j64trTaPSgeStyZNPY5ooDTzfHGXbgJyabbhE4m9cqmtDthdcNKKjjqJ6R1aLgx5JZMUNKTNNRMY6yVXM7c",
  "key15": "298EE46XGoXSQxqGCTGmtiGMWf4FvTgupu92isoJWhSAHgN3mL2b5gV2MoywExdfh4Ti66qPoqoE11AoKYA6kvk8",
  "key16": "4tMhe97GKx5G5dF13bGGBrxiajpFhQimBR8XisdPNgJSPAHghW996Tzd86gqVML7A33UxfZV1V2QFcphzSn8yRym",
  "key17": "49zgETZexJak6QggTpjb5Y6W13wDKMEu3jb1x6jHupa9cyVLxoRcX25Xt8CWo5QVWoTp52ZPwbisBBQ5ZvW9gMCN",
  "key18": "5S5JLwByrehP1tyhW9oPJRTi2a8557ppHCCbpxhvN4LiQQ9MT8TvRywmghszQ4dSQnePsBzfRzUym7on385TKX9L",
  "key19": "2SKa7MghRkJZaPe7LLB92r8nLov3gfqcDQf4hqjWf1NqhMde66kciCLB4ZoMbhQAVQjkDfiyeLW6nWefAwX1SLLC",
  "key20": "4q7R95JS149n494u1TpXDKn7RCoGQ3Mn79nKyUp4VYf76ASRMnuGa9sbUXUkk1xKFkuXkwQdnz54hmRbFB3rhrQD",
  "key21": "2Xu3KAY2H9ayJe1NEeqB8hqTtQeZJuWnLpbcJEYnf27HUitv7v7ZEqK1zQWSeZhvx4BSw2Nm5SjhSFfRerCTpCkH",
  "key22": "3TRZ6xAoB7dQ5dZYhSqD5BV51rXA9MsfXidkrp6gPZeGTiLxspkpfK3zcKb15dEqkBs2bsYFxWJAtp7hdVAEBDv1",
  "key23": "5epb1fKiGqngUVDZ1nhrsUUzNqfketwyfzcp782jaq2SiXCNuFdXBoJ2xRJ3yEL5gCXwt6dmz7VXw5yBu4vtr4RZ",
  "key24": "2rHbEsn928yTwTVCT5P9FLACwB5zWCXwRYKxwfMzWuMNhqA24Ur3V7LWsti1TFhFwSr5pWyJLYrCXL4k6Xq6JXLt",
  "key25": "56ivBSUFg7hjPX2DccMi1XDaQ8emCXY4k1khgKSpsUu7kfaWbnNXJNqaA4qbiL8dYH3Cvd5Z9NkiB79zUgpXJoK7",
  "key26": "55UqFnt4NZjK7tpYAXQ2Se8pdMVnPFMoyBZofRZpWVAo8viRrWb9S9FUXKCaJnfj36XJJYfUa14vuvLnUduqaua2",
  "key27": "3mkZfY2fAHYgHRyp2hE4VwPXScrHfBDcTASAbytFRvNaUJ1FwBrpS67CFFcX8kAbrnj3ydn1tjRbAoAr5wBAdkDj",
  "key28": "5omUVHc2BVe1xrBNAecKKLAxA7xHCt8G2cxnedMcpCnJTJvHVWgLd5297dLhqGzrBM3J8aiEdS1MebuokASApDny",
  "key29": "23eGV7H9P6UAXytkPK2NDQEmwwsFK6zAUAZDSJjy1fuB1NdWjrPBPnAp1W88tgvEdgiN3VPje2BkdUHm7zUPhRRi",
  "key30": "5e1xGzQfADDrJoHC2kxTQ2QupjsLzDjsBqjkkuhXc313ZjvhH891k3ChD4x8h1Ecw8Y2C1A2sW77t9GXseDGuLt",
  "key31": "22wPv7svuS9dYaPiSSznvNEkNF14mLBKoayMBpRUUxUm5Uf6JJM6oHcsbETm3KjCn23Uxageh3YZdQjdDp2fpKAn",
  "key32": "5FuSwwA2KKcUSZRezg6XTnGp5Y3zfZu5uXFDHBG6L4YMRX1U4aZHvsLRqMqF6dhZxSkYpmhEs5L8S7JDK7yuHTXs"
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
