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
    "pESb3BiJjjrxXUdyJqjQub5P3oJsS2GeKxRKU7rJeMtrWmmUcorZ32bVHt3PWD7G34QREHVNQj3K9FeFth5rAGu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4GBz4wvEvLLdAit7iEyj9x4Qnxsmrh61YSDoz1nT4w6vj4QiK7TJfc2qjPkh61WcdFAhjN4QXZtMoWvieXGub7Us",
  "key1": "43xVTGeKPpkeVFfsQPxfCp8fuWsqCCtXVQ7XjXHydwk8JjhRfLM6UkgesGCJwvjQ8jbNHboZNhDAuVFAKoDaEffx",
  "key2": "5CPYArtpTiUGF6wh9xVzXvdtEogwkv4eJTkSF6vxMgJFLA6Q5XsDpC1PECuwqpNgNsJxvi3jLPgVyhBSymzRKiz7",
  "key3": "2ZnyW2xYXrbUUge1xcjN3rZn9TCjq3x1ccpznG7eDVBmWvdNWckXyrNjtU15mby43EHFvmjhf2R3BMKajZqRevXx",
  "key4": "22smTa4VBpNT3N8BygkMbm7FNqNcUKV73awda65ec78xL1KYx9UsTJKFGeC9GRFrbUjr3Pe1DSWCBhLrGS9ftAQu",
  "key5": "2vhZiTJAZ6wT9DoPSEyLCusVXTPBtcdp6vKmJBbhRKv3vdZ4nugJa22SMmn9rHyHzMCkgZR1Tm3ctdLCCUdgYnv5",
  "key6": "3PHs3FuGxDuZHYac7gvwyA9PupX1LrJbbkbF1GRqPL8A9DwXjYE8pAMHUiGggLQ4RXffLfw3oVxAJNHSfTDwAmDv",
  "key7": "UB9cX4CL4s2aUPaYh813UXNKbxJNhgqbQ92mJ57eP1G3YKRPgX7pgfRofSLVmtMFPpAcDDY4ZB8fD17tGEFHjUu",
  "key8": "4Z7xrKEb2JmB1ozQFaoD8k9Rv6n9LpowTsc5GsFkP3Emj3traa9mSguZdfoE5rDGBQqzyJ5MqNccKKCPN6aaVqVt",
  "key9": "43o6GwpMoe847YXyYvXTAQ4cowpV4cQMfWLonYKraxSYbjPkT4ak5eStqruckU5tGvArsxvZdSL56nwTvufRnVQo",
  "key10": "3jFrJZA7Kf8Q85S4kvZSHkgapJ8QnfXqB8LGsWxutjxeb4myog1ECM18AGafgysd42iizdq6d7uPXqh6vKfTV5oA",
  "key11": "22cfV7DNBZ7hB9Xzhk2XsTZmqGGg51yuS6KpkyKAYcCAM88ro7BUy19b8iPXLZwtuHHD1bkGndqJcz7wxVUjA3ye",
  "key12": "2TWmKgTQtRUv6rmB1YnsMHDsgd9nNNWBtY9f2wdRksc3hZ23xycF2LGNeQU2S5geihY9ZDzm5v6LzJdrq1LyUbNA",
  "key13": "2v577PbnBaeZmgmzn5HwPGah82veyeQkSdF7zvyd5vPbenweb3RQoC7bkUdTcCrkN9CdyFPMLgRETmurys7LUghZ",
  "key14": "oKycc4LejkeQhdUPx5T7gn61zHnW4AYg1L9r3jjFDhhHRKXvLctJAQjwNHmNmJsQoR86GJWXMLC5BmFWcNkJUWL",
  "key15": "5S9GdBEQYu8Skx24vav8UR5UYJMvt8zFdaU5b3nt9DRYdZQMhaKTUNhtia6W2RELQWNkdARCGg1YkbihBJro8cQF",
  "key16": "4uZnqcH68eGXBvL5KSFg6Uipgi3rWKhA2BQ6Pa4rZtMQb6ZLharmpsfts55fM2uw8NVGAmH4gK9A6Xi7RdUvQzYf",
  "key17": "3xzCTFqxxNRPumAaknBYPei9UhCmhiYN4pwNvkPwRnmxVbGaFzWzyg49wAhbivpzEHNT1XDkYYAeHNViegXPEPsJ",
  "key18": "3CaXXRqnBudPKosgE5aWJfQRzpDbGAD1DrgQgKJfjVhP7EF2WvV4PysDxN5zoPYVAjVoAFfKtK9tLGoMMCBNjWvi",
  "key19": "2AUa5C5dsjRVpNjTjKvJTEtFkSbUKQkjmhDsL7hSfzQfe7HPxtMKz4XR7Mu6K5NDeANvGanoP6DKqGMgAtmp5qw4",
  "key20": "2nbmy47kdUDFXwUZx8vXmz5v6kPRhDrrzn3PSRaZr9gitWz7rVRGmUEd9h1QXECRJXHJwXphyzE3rFKsgcMK3XyJ",
  "key21": "Mwd31CyyiLsikA1odmNYGcECKhggiay3a2K2CDjGxMttDWqJdoAmiGX74kZx5vnqD1dDUDB4xwyWZ4VNoA2jv91",
  "key22": "WsotFi6DKVKiJ5173s1zWgt8bNv25nchSFpsdUW4eTCFKYv6A4q1qidUq9JbETp3G7qMsbbDhMSwiEt219SMQ28",
  "key23": "jyNZAUU69fE8DJ2jQNJbCEDayvcLHYEK5cfbdTXBHHucQmYTau6f8irm9o5S8E5xJu3LUQmuqYpdsdBPPF5fmGB",
  "key24": "4V9muVtq6vLXXxrzLZ9aLg121JHpxFrj5gZ82frKQgR5UTZS1FZqDifA5kKqFmst6ZAXQ2FrekCvBF73bR5SL7pm",
  "key25": "eAvJzsjCaHxWDyBZvNorRBx8g446TVARMNUu78HK4gvxRs66CDuunRy4wukK38JVZ7GKJLeHWc6GCdMLA9Spcw3",
  "key26": "AECBsBRTYNMzYT1gU4cTTHt5jc4dxh5TzGbtkD2Ea76FmrrtFS4AWqjmDuCWYRaVE3kNHferBSTQ8gM4Lfg6JQd",
  "key27": "2ao5kmYBNrrD3TNCdtZ5hfQE4dfHsGEYBJytxUHfX3mfNvPw2wxCvjUkUVN1Be1CSWTEBi5eeBT5pcERsaanQU4t",
  "key28": "4SakaKjtBzbqFz5CzSXCNaZ7R1yzd16qfPX2rWBYLAZPRqg9yVKCgHVU1pCEkLUUZsonto6wRLd2H3pDXYCvZvz6",
  "key29": "5sQB6W3RCgsL9ZaEMqUAfgxJvWdpRSgN1yjrv9iVkCur4W6Pbe1ST8rQaxbETNaTN6QEfBFsGeU2V8Ai4riqDJWT",
  "key30": "4SYhFmm4y1jQpwCznGc5HWWF4gHSCn4cf9PhmLSJtHyTZFWAMHR1DdcfbtqvfKTE8Jjt7EchNP1aHEduRapHBFu2",
  "key31": "2xDrg5cKZbTZSLtaUbWrLpbcAPusv3TDSVbirjCoqfiBK8BxC7GsRax2oDBAHWEr61U2YKWHJfPGxiXPNLrfHt8g",
  "key32": "2v3mZnsKiZupXn7jUFSQ1679wc3FqcmvjMejwKgbfzrA13o2Hp9GoMyuoNNgeJFHabNmVCN6ZzcJBkjhrivrS5ue",
  "key33": "5zp18Qsfy5uPum4HCNAe8ZutvNutMELBA88eAaJjNzS1BAwpaVJG3Roc9SPTgJDTscBpgkrvF98eYvSAGueDBy4X",
  "key34": "3scoANXNFjB61SqD9XvzHcfPFr22NiYyH4PbFms5EHNUGJHoZBqeNpV26VCQ1NPy1J9pKobmMYVTgg9XE8sXBh2u",
  "key35": "2z4FzXUNp3CMzqmy4L5TuU1gp6YiaHFQN2S1XfqmSPsFsiB4Mee7shG5Yi5cx6fYCZubAG59BfefNyycjZ4uiyJS",
  "key36": "LsCVM194cXeEvNwkSkR1zJz6FZJjKBeNZQyB2WhvBcWnAyRqz7aN7ZGZU8xZq48D9icLrUoKkkQ8itoh1X55xaX",
  "key37": "5VQWQSnkpqGpVYty9xcWhDzjqZFGZyhHU6v3f52ek9YPRPpL3WHS2NdTfGSL2QvdhVkT6BC2yUyaaxQuHrMjPqAX",
  "key38": "3J9pbbZLE8xDBnuJeUFDHCMNxBdQrbbrVFV4cx6eDpFB1NmicxtxiPVPkPoufZfDgwHB9PAD9RmAEbB4G36Vy4fE",
  "key39": "3V7cS6qxwevCno9Jgps92e8GUGqg2wfpgzs9mjjEmeh7puwsAvtXBjTFkFmBppZZJTqAU3NqDt6Xj1u1uNg617HX",
  "key40": "TY1QGiEjghT7voV6gyYqi8EmRGPRZHrqmCsVaKSwQtDa6LP1X2aZP91kbrVvctp8XV5cia3qHKJSPE72SQ4sywj",
  "key41": "3rmftD2ACKYssnqB89gmK6uj2ofHoFimvYsNzd7tJKLoH5wVjU4MomvSBSeo2nL5dGvRoiUWA7oWwVD2mykDxcRW"
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
