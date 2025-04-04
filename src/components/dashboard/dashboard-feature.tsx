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
    "2UdxinMr7aq9N3zYGiKu1faUCbpDN2R1Wgcx4MP9tQYHvd2ocTa56iSjqDAEv5kn2AV93HLFnfVqyshsoWXxTtcE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N7A4jC1Lt6XWGLEGL5iPEQc7EHJNMe6fM3gLtdvDE7o4rAjdBTeQzD7d32darwSUCgsyG6QuPxdHvrMJFPqf9c1",
  "key1": "4xo86dk41srQr9dqWLC5gtvVrtURCyPAaw7dFRm8Xz7cab3LJF1a1JaRfimkbpsd6S4C8LxmXiwVBdoTca16RRZZ",
  "key2": "3oPW2i39WRExdZUZHnEdYTnCdLVDsDZUSD6gtfp7s5wmQxVCvLejfkcTaSrkh3UQRUffDLyxchF2ZNMDCfetNkS4",
  "key3": "4nwBq4WqCGX76yfQvsBnFckd7Eq4dUXkFXGN8DeYdTaiL48GBTbVi5D1vfeGptTt5B2Tx7ALG5c8pfrYAgUtFzSc",
  "key4": "4VDeVEr7pZDUwQDxrC5kYpLNSNEmPz3VdCEATBNRcrDgSBLLyMPnTcpvss5wQfPh4JssRJEu9tGQEXjTtYNamBor",
  "key5": "24koqJAA5THn3upRfwQBj7z7JDqZTAunBVoSC1A1Ey98h1cztF2VSmgoVge3tr3sLSTg8gR51vPnT8kyL1Cq3mvB",
  "key6": "5BriGY8kT6XPoYkvr8Bq1f44T4jJ9kgizBcscBLi2sEcGMx2bWxZpG8wEBQ6rmfuw4C3Eg8psAzx59C2wb9tWesS",
  "key7": "2yrJ5GcUcuSDrZWd3F7s4uHKpnRRkRKWXqg4NzisSzUtqXjjMuJcAgVyQwKmrYk1sU7smoPDGRwLHgCEHuYZYWpX",
  "key8": "2uCmasWRuzU17RfWy9fFHDLAPjajGTucRLYMtT1BWQsPf3HQMByAAvQiJLUkfMhza4EMjmqWj8eQAf4BAt5Qsyyz",
  "key9": "5CJk3x5rmNxjEcLoPittxjr9JDzUkFGkun2wQxc441ykC5xyGYhUSDXRbD321jjVoy1ZPtqqLnVhpDH7ApEyWG64",
  "key10": "tXXBdfe4GRdcNpsCTtwoJMFucTydMsnAFv8W6yWyGrNJvZJ23F4QiMwkpiwKfALUp4VT8k5VYuusK65Ysv1nqqB",
  "key11": "2TkdNBzvh6F593GcHUYLsRi5VfJwgiCh5bNnZWs3bbSyCcmCQkMvtTGwFqMukfqS9JG2a1WXn718yMnxBRZ8zKG8",
  "key12": "4pVLJhBBTg27zQZrPFiCYkp6hVpoAiqHo5ERyVagX1Q3YKy5F6i7fbuLaNmsMqFRULipMCDtw8ZaHwXFz5Ywzznd",
  "key13": "3Lhy25wcrX6Gog6ErTxwDxnjEHLRftYVz93ZZYm4KswhimBJaMGobsbi51TVQWhG9JWuRPjXFZXHf1GWie9HWoN3",
  "key14": "QaPaLGpvwJ9C4dgJKCdyiBnJqy9DsUemVwXY9ynRya7yp43wbw9P4KYr3A7cD4fnv4c6gAzSnBuM5VcKQEfYuTi",
  "key15": "27aADww4zhXTMtVwMWRBbYVWf8GRjg46dT7B2PuqxjfUMgvqHLA4GjDmJygpgTMytG3FEvDNCMusqNEk2ahokkk1",
  "key16": "2unduK1akNTaDC6zHxT6v7g2arEbktuurS53dLXCWAVVCMnbGTfB3MAh5puxyqbD9wUd8Nb2LqLj52UpYsVVZdVq",
  "key17": "3fCi2HuYbdD2Z5NadG9vAWCQVaYZ2YcZ2JeG48vYbCa6Ssxo6dEpp62pY7xdrUbMnXaThQ4mQf9eMdhTAh7JYSvR",
  "key18": "4KtYDiKXqm4zSStc8madsVu8J5SZ9i8noPymLF4fHb9FrCcSBRty74BGP6XxqQSM6JzX1rWiKgaxsoN6Pe31Esa1",
  "key19": "3Lh2LJqoELH9WhfPWSyowskKPCzMfwkKUonEZj41sskHbQsnu1jLN13ucNiCe9Dxx7Arv5rPixAa4pvAXBtNZEGJ",
  "key20": "48MJBD32fnvQS2v2XTSPVwsf3c9VV76d87umRExGmup1o3teXDqaTPcTcWmTpuoDN8nPi9To4XmNHSTSLSJN6eAK",
  "key21": "JEgJcyJj7e9geuTE2mXdKCYkM1u7XLmJRqpqr5K4cWX1P3qVKVZoeZbPgyW7m6fcXBTyVtShKddWJDbjEY48AKr",
  "key22": "Srqah4bQq8iou6DKfzduKp8kpU3qFZ2t6LfZAF5vxsCtPYZmjmsSQyngcyRHnjS8az58E6Aw1LJm5TdN2uTMktA",
  "key23": "594TBmis2gVPcXjE23ej9r34MLYBkAdgSptbH8Uj7WtZc6K5u3YGz62QveeqZRt26fMLUpHRbafjdEVWYNS2so8B",
  "key24": "2h1i66zE88FfzCstRTE4WhPBcw48fyxXC6huM4pqwUXdGu17AGPY95vEgM7hBjGLc8XzQZdJQy4oVaE93ZaEoSRA",
  "key25": "3BX7rF2U5vFskuffy7qrYhGEix4CzkDMREUjW1p5cu1nCxCYgCdVhFaFqR8DujtQC15FLaYdpoErqkxFvmEEKyHK",
  "key26": "zQeN8phRWmYBZwN1PBDcTMHs87ApKdUTauEK4yeGK965DP3Anv1rGqqKqdzDq932JuFLEjvA7pCMcRfoSJQpVJa",
  "key27": "5zFrmioNX69DMh23A4vYv8Y9WXxisat8wsW9iu2g9ugKrxeyUhqApfeqcVzpifvaakjJRXsrriGoMsc4E4E3ewBK",
  "key28": "2xWUP4NTsEnFsXpp4PgJKPdAfELmkWNEo2NUtEQM4JU4XCc5Egnbr2A4b1c4X2GYdim7YMzUANbR8VNTSne9Vy6N",
  "key29": "2rSWGGJeHzDpdkLhNvpw7oVV9kkAha236vqKpEtokQBp3zDbQqHg8jJa3E8N3DnZnmKWbm6TcJXBvDsVoKexrHk4",
  "key30": "PNuSWKarzVYNjUG1Xi4pBERPRwDXZeoQ1eNjbSW7MxKAMAoey7NJZKfXNz5PNRtB9jCkVBgJbfjygnf86LuxhXR",
  "key31": "4Huc1mTSjNjEX4mKD2H4kSoyiCJCyKCxoGTidrLLWeJqpJBG3j42x5g5PgTPQhcRySztcmmPCXfsH4W6XYWkbaWg",
  "key32": "4Rsapt6VUqVk23Ck8XazciJE4DWFd23b8DUu51ToodCnBQeQLEGgVqa5pJzhmjyJPMo8KePUf8xr9UA8vJf9ZdpD",
  "key33": "2rkR7vt48LLw8BJbAMERUzjHa8cxmqxm2fxUp6FpYmCdWzAJR3ccgkaiY9nTWMPgzWPG8ZTtPjSxSMJf6pbjB1Dn",
  "key34": "KkRZhaya3vXnrBdfu6SbAqYZU9iGboEqBc9x6vy4zbBx7cVLyPyS8n9aum4HZaTRe8b5iT4kjai663vMmee37LW",
  "key35": "5dNPB397GgqUbLeixR71wKqskw7XYcY3XB79Wz2HmdpzuWiFvir9khBy5ATnvsyLfq3sifdWopwyCNvGF9btRYov",
  "key36": "DnmdNnECePoDrRv5o1FPygEUDSw6WcDz4twr76SfumYb38Yc9CH3GdmBoUqRmJBdGWHC581vSSkxrbYWYYP3cPd",
  "key37": "4rttbwRWG1KW8hWodaALYTiArweRTA4yfB5Hje1qZ6GNQRd41J9FmyiLxUxyYEu7QNi8Agj9SxbG4jV4nbhDvu6e",
  "key38": "31fKNo4jWWAJtf1y2Ldf9Q7hT8uXLQtWELS4TzdavbstBu6sJmT3xzW4JNEjxnK98UsmVPwibNYWzWbPoFuc3Dp1",
  "key39": "5EkGr1yup6jamvYpFEixEn7Vm6FQYjTjJeQjs1bNkmEJftpiCKZEm6yejx84fVrHuoCpe5x9YJNBaRp2ramJ95SL",
  "key40": "2qKfShGcZVKjGUS6JM6J2hhjvPdorfbfrqZK4S52bJoftcMqE3FtwebPRnaSCth7XuFaGeMi345c5whvVdqAcaYB",
  "key41": "4fbwP77Rb3m2MumTssTZJW73Ey7TwnJZfHMrSZCef79NoAr5iamwwvJKPr4Qktrph5h22ydYQQ1wzkBHQSCQgn3B"
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
