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
    "4MQQa8JagF1PZik1rc4Yy2LeDvRaKxLPQsDYyDnK3ybRZ64vpYEXDtQEViP85L2RiXWkirqyJJK5nxoGTsNS6JSN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cfDLJMGGmANmXzmxdmZd6Hj8yJjqmyigdg7AEY6BQpfAmW4RcURzSWCsN8WNptTXy8EtRFrWi8VRJNtKqsHJC5H",
  "key1": "4HERCPqszrA3NzT8Hn4RTPoNUf7trDhUHLvSi6gUQQJUp8RPGnQAi4A5LKXH9LC5xit5KcFazGeBsMtC8rmbmYKU",
  "key2": "2YKU4hU8CUAkkt3gUZx9cvjQr9JAzp6pK2dGLEBniYsBTDFHs3w3kSzhnt8KCxEoJb7kfiDtWQ73bfURsb9Zcrbb",
  "key3": "55as81ekZdVbmyauME1n483Qpu8BsaVEs7Ytn9FEbgyUim4F2XvEYpt27c7b41ohiRyAV4zRDjiGu7rKigaKAUXB",
  "key4": "42t5yTjiCcCsNePs1peZLvHM3CNaGP9UfAWSBGQRivVKbPc1KaHwvrZhSLoZ9YH3ceSmeDoKvwngo8hyPS1toZYj",
  "key5": "5QGzFc6LuLoHo1kDANsBDcpsUDd4yHRhqZbHr7DkikavyXfwHyyjvr1xJNttZedQJoEcPfV6LhSbbGDxBSKHRSu6",
  "key6": "2gQisbXwMBjzUZzhZLnJoGadAuaQuK2Px98zmKkLQtdcAMw8SPzHeaRkL1NWtT7VTUbYDzXiG7DBxUz1g7Xxh7ez",
  "key7": "4bcowesMM7JKUXXGtGiix4De71Vx5hLwzmpunqB5qPbwuo6KJSkTgH7Fs1Mv4cg6mbHRqE4eu9AHWuPkHTBWRk1q",
  "key8": "3LcANxemwBaTfaUTQD7TurN5P3cQfQbC6oDtSP8NtqMdpnfRESYikoveNQTQ2rf4D5CjNDebJHNtKR7ezV23eWLo",
  "key9": "VgvTj4mgvYbkQMcKXSyYSstpR9sUXRjgK2EabX6DcqfsLs2ZFSGmk3Pcm2zpMne8s4MGxk6cNyDwjSkzbKXTqmN",
  "key10": "39aQZLxVBPjTS1rfbCMbkmEn9XaffDNpRiCHhzciX8BvorDV74du4WqtsEWBEVQnhXktWibCEfoYTqSZQgaf2pYX",
  "key11": "3UuAVT2quCXxbeKnqBpyYWkiZJCj2p6MKHvGXjo1Qi3CSQ4hxNartd6jUrjZvdxWbZVJ2JqDrhhJo9r5Eje78RUh",
  "key12": "VPYhwuzPYVDVme7YrWS9DMqcNcowcXaat534GUb1e4f2QLoCM54n8bx4gEh3RXkNi7K39RgBVw5wVkDVaiTrk4S",
  "key13": "2rs7B7Ebt8L8z8Lp3T1VBJHtwR963SNiSRhAJ4drVXmUDKKBjCDiBKbVMdEfmtw2qBVzRdji9fWqdLzL3wRmkv1F",
  "key14": "5H2pAvYucEvWejVMfLmQJ5dYkBdDYuH25TURXdpnB4D8DDeyqvqc5R9Q84UqR8h2v2FqZykrqhe2vgkFm5zMCfdf",
  "key15": "21vA4FaN2v45UrtSBNtHou1yFkxdCiNsmoqWchSjQoUGGvWVsfSd1cGjprUFqPRP1NgnLapbmUS4cQbjcvmRaUDu",
  "key16": "uYrRHBM6nwH79nMuRCHELisLMoucX4CxKLH9mXF8aadypnbni4cooGtd72h1BvXGqiJForhGYoa3FEmVGm9tNFE",
  "key17": "3NsKx2cT9uejzLVnTctTGH3s28bqrGoNegBsZXFFVAxkC1FRsooXz3bVtuBzV52AJ79CKTGkVaUbG6sCBkRTBtSN",
  "key18": "36xqSNH9zmgwxBcdANTg6BMpJqPqSxKuGaGjG1eTa76KiWqnS73vKxC9Mj7yGmAAnZjWsEhtSovvAdnEaRVFRG89",
  "key19": "4QeW3fQjg8R3B4DbbUBdbMHg92e8vdV4fA6CKCvML193TxVj35GqSgf8b6zf4VMB4ZMasxb8X8X6NWqB4gFZPcR7",
  "key20": "4pXojhd15CUTdHVuhqbXL5nH8kZVMwGLNg1zftYL4kkNPEQ1GMFVXQreAUZp5YHP1JuAz64W7RQUkzKZ7qqLcVjU",
  "key21": "2j6HYUrxp2ik7XrAWcsWu5K97hgEoM1Ts26U5c2ucaTynokqqLgEyMowrtSs1kMLdYNEabWyNEBjTvQaLPGCka7T",
  "key22": "2Xfr25dJVbMe2e9tSsegtwLZyMhPDrLmLGTfsEH1NCWqWhbB4cirCD7DJ7MuJiVj7jCEWybRahxmjSLyyF3dokHz",
  "key23": "2G6fuCEq4e2x3WH61k1GqfwxjgvQuTM5YYXquGq2meH76aiFjiXeRFo1f8KmtbzDcG2Vhy4fqgq73S9wPNexqQyZ",
  "key24": "2vQqSerq8BxuuqV7h7b5AAdsnrM8zbZKpUC7Fndbfxm6wGqDjBKyVZ4gNqwz1AsUf86fy9KLwyZQ5a4fBpfg4Fjj",
  "key25": "6UkpTTRVVrhvP6C5yPmsAab1sof1vyxp4Z8ofYT7tjaoQRVt3FKGTP7sz25ArG3AxtNShqd5dv36n93rb3E1SNm",
  "key26": "2wkJRpHWpS4KNDX3CjgdHmBpMcYMJcZWF2tatFzESmQCfT12XJdDzpUKF6dNocUPu1fLEGcWUhXzp43E2tjak517",
  "key27": "ytJSvJaNFUm9EUPp2fmnzz9cute6mmni4x12xPynSuALUzjXx8MAf7cHJhWMiiL3iJurXvULvPXv7sD9cvbpSry",
  "key28": "41UfmDT19gJ3QAet9hhNhkyHKmmQGEEi8QyYWFKipeTk4GSRETb5U3GsaqBZmbnd97pH4NU6dTv8fJZnCmZUvVRN"
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
