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
    "3VVgTnS8ixVmherQnTFRfS6BWoiPEiECFo6TE2258ShPm2k57kZaGeYEXcvA3Fro3Zq7zKBe47KpJBAtfCx722qg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eLbxLQdYV9dNvRzv8aWLaGVtFyY6RkBT5GAWavBspBxs4a1Hxf54VJzpVgWa8NC65Fupvq9436XpQx7smbqdi1c",
  "key1": "21YgG2jFTUw8qzTi3TWG6eQxKvSb8z3dBddTpyZXFU9rxPDsbMBbkhB2ouAxZ2NbY8eCcn5EbacZXWYYJ9N3nZHk",
  "key2": "CsVgSZsviABzW6S8tFwvn9DjeFqUGHgCBn3m1NgfmVpg4VSvLUSLof46mdYhB9WMyCmGhoeCcd7shkBA6hrXbtV",
  "key3": "4yXxAzixDqLsMbLHk76DwedkaRsTVQ2FQnYdr1HGzqkzXyePbeTPhCMGMmznHNMw4tpVW4pQuBJ6AR2dQ6WCT4kh",
  "key4": "5FRQmD27HAo2B1BmeVWoTQQfwtGDQw5G66XfW7xzo6reDFx2tTTpNJb8aTL9fKqqEASgNbYtdSDY4Ajw7Ufn1BZY",
  "key5": "5299781hLovhWA9fQU8LPSwmNvRMyqqMEWpNHgFPBMqwXLmCwLMTFpkUNjkfz6Tcr6WpdxBEKXWaFUpsUfjwkqAp",
  "key6": "2v6H9zrqtFiNC7Bxo5f9UWuA42wYquygn7fHT8MYcMHtToto2jJQ2743kvNBDfBBNeTNtDhsfQdC5VixiVL2WZMv",
  "key7": "3a8EwqmcUv4XsSxX6WS5z45WZDVshhPoH3FpziNkAbPhZS4qCnbLtGRJXVhTjmhWoenrmejo1Y9mVLBtRNQk3LoA",
  "key8": "41M2ej3kyczpWiWWj5YD9iRdnAV98SVmneqBfoV5vCGvteHHnWGGdJref4QZ6SREdibK3kSZRSpxEr2QzmbnuJPV",
  "key9": "5otzwtrYhVFEoHEycSKowWS3H1wzvtrjRcL5iSpsvNUTMGVBUXgPf81BtHuqrtXDL2BC8unjhi549eULqmFCfVdB",
  "key10": "3qBv2ysngxbVxM49JCnomQQdBxhefNMbW3se2nRqwt848i9pSYFUsTzF2CYLXhn3dcTywDkCvdDbiKpoTqmgEsio",
  "key11": "55W6h755YmccmqwiXc18qrcwpbpeSFyUABhzdpWBTJxnYsqAqfhRg8yktQ1R9vJ5Ux6MkccBdEJQ7ftyknuVSFSz",
  "key12": "5KWF8qi5w6mP6LGiqbJxYnU9jiQo1EM7yEhHXczyFsXV8pHGCXp7wgbj2VZgH9V19fjrAzh3BDMXj6ZXspkVDoN1",
  "key13": "333aS3fyg1ce5FvK75fYBYMG8rKikkDMiJFf4jc4stEXJwY8ejLYJNy6KdvsFXV99XKS8xc2Xnq8M8NZMK6RJPtv",
  "key14": "2RJ5SqTs7Nh96U1xJAf7ubbbEVW2DWZRZFqKAts3sucK45fdQY5pnQstwiexTaT2uXvwcQz6Z4xZVMCjdovxDcXu",
  "key15": "2VyVvCbfgPmpBztjz8ABiFFcZqYZR7SzCzbuJpb1jjpCxPvTnKEaUnuAhqd6Bw4QLy2QudPn9PQNdd3rdr8eihrF",
  "key16": "2CRvdUgCEbw2ncNJb5Cc23gZN1rfufsrSYMFFogqpEdoYC8DWLpy2nLLsdEMPBQieiBrwfENK8hx5PECgPRyFeR8",
  "key17": "qDYTQad7TcXiFaQYTF3TcaxU5bNvYL36zvthPVsPssquJEMkfsELkFKy729iaJrYJm9Ar31EHh3ptVwvvy7Q7pK",
  "key18": "4yEor2WeyEHP3k5s81fNpp9C72KedU4zGk6QnxJ7SkfTvrSf5nuEVNkqSxkcF99RVAFTbBFEpCAUdYNXJLefRcE2",
  "key19": "36HNxUqCkrb8GDpzarZrHi27FB58XcFtCU12TDPmTjJ4iqZJbpcwmCSfmF14jbMp39VZAjwgw1UvHWhUbvu5RUM3",
  "key20": "4hZhukcE4tmVa22rqYG3mnPTQsxY3umQ5Wsu8TF1rnX1bMDcGZaXt2Vy8hHdoMDzqrov1YE81EVppPnhsfVLR4Pf",
  "key21": "5oAmHTGsjRCN3GiRakVQLqTB4bPCdMRFNbcSr71RSDpextopEM3fzwVq8fwPPcdPfsPdMMF2ptVUYq6tByGNBdfU",
  "key22": "43y6HEzpSdYeKByFXYh7iJZ2vJFieeawTiai6VZLCV6xufb9oeJYTNgBAoYD1RCUX5QGtJcXTrrSfizCJiJQPzZy",
  "key23": "22b8KmAMcMDtZM4Wx5AF3aCt5c9Xi7wWHeWrmzCUTADFiRf5PDKcCfRyT4XfrLxfiBfmA5fJLWEQYkmUuHpDFEAu",
  "key24": "tiaVyRM9KpcBzXkKR5w86qYx9y8YaccGSxL8G6iT4JMsKS7T57sUMriDT8QxiWyQGivNMxwSjBxinHcYM5HRy9t",
  "key25": "2xATfib5pWJJNmgPM4bJhG5erqL3yJjZ3Dy1ADCeAxpP42S9kXSUnctE4cxCHsrSsSGtWm8DEDrafWQoCmGfmZs4",
  "key26": "5jpRjSzzjyLL4xoDQ6CpfG4W134Y8wJ3XNm3oRt1UzM6hScAMEzcWWGNzUzmGT4iqGdV1YE8KSLkQCPiXej5Yevd",
  "key27": "kVeNT3iiv42J7xpRVdepbnfZPE5FgS1gD5LyRDMbr619T8ajGxSWZSRidfQVrhuXwaqsycBT8fjeLWXoyfcyhas",
  "key28": "4t8RqqjViqoqb7551zvKGF3xQPQnULxoANrMRhTtFzBeeWS812MkeNneXp56FQH7cBgMFX4Rzk1zswqRQBWfEWKq",
  "key29": "5W3hzrRcj1z2xXNp1d1TU4AF2zzYNp1WL6yDCmZQX65TV2N33rJnCGoUK4Ef32sCXxymoAaeCYzS6A9rqYV26SjW",
  "key30": "4nVEMPVrCpmV89y3H4HUN5ysu7RRtFyM9ZSFAkPb6SRpeDTaNP6w1woadpeGN2iTNYJy7w5S1G1MUAMDVdTcnGZB"
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
