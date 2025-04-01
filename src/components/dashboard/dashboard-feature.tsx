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
    "2BdHFKNXoR3qvgrndoUTDTeGQsEPFSCr5KKew8HYc9ArvagDjFHUhZxsaRi5KTLSChxRiPBV3MRMgAnrRW37hAw9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qPCL7fjtPz9yAJFa8HzSvGLkfy2keGq2iivjqPWer95SQC8SzGKRF7DUVhyqgmpAheaXxk2dMhbNdfT1sQkS2TW",
  "key1": "654xxYZsYk3H3c7uJ9UpJHpEGE69CBQfzjYGqvhpqK5h4PPVHDoFxSevwGTFKgWVavtz7heVLZRRbj6ESnCmXRrn",
  "key2": "3tztCekTFbfBBjWtYxMa3cJtPCJ1y8esYJrkuLMJiEEUFLMQm1jDfbMvu2dgQakQBejorE6rRK8XM8fvfKBgLfEp",
  "key3": "4Misp2ZC1M9bDcF6dTd85JQqzvimUZSYrEALrBCnsb6QQV7y3C3VxcAuW2JxyUV5Jcki92YDY2ZJLzhwmXrLaFRh",
  "key4": "5GoeAjZa5a5CacT55n8zjtkV6hjhYGjPpXA1C6Z8H7JiiBEGeYz8eiTf1HGMnSPinKtMZk58eixLoaiHNVwyVgeT",
  "key5": "5sdWRV5G4dpYftwHVeSYkWmu3HDEF5ARjF16kbD7qwJdeTpB1QKmSLuTYhGcUBnRHxU2fUbjvQU3AwEBzoS3HXp6",
  "key6": "2oXUX2ZfK1ypxeZ6wUmpkqxfo3wFQytNqsbvjfKuBBwkA3RNrR186UnzA5qjPV3WnweChrtbso82R1RqS6jkHw85",
  "key7": "sd15tN7GGPEWvpveDQ7aLvvpExnDfbuUQJW6PSgJxNRUUhx8Yx4LBQHuzQ8xG5aker5GgBSWBGGirR9Z92SjGou",
  "key8": "34Fya5SJu8pXiGnGY856fmX2Fg7c8QcngeRdxm7zTh4igvKwavotmSbUUHmW8VTuJNmxuFkyoXVD2CWxJuziJFP1",
  "key9": "2nph7kECFmbGMc69cETyB7HzDwRKTt7TiQpx6Rezvx1tuKAMGXBkCvN9CindiKXtsdBbHQyRohxVvLrWFpdkp2UD",
  "key10": "2fxUeERuuGuqpd72srQkzaRY7seynHBLgrT6C9F1XC5aJEJMSxLM5vRKrxpdHzFothJLLsuPX68GUjKHryhFJV8j",
  "key11": "2p4W8t28YPdpjLi6ErEsLJ2N5acCceMKYKnZoQwyMzM2vDD3TYj9hfQPLxidPNgNYvzFPrBN5fsrPCFCiTEK2y3c",
  "key12": "5fxdFHGqho3W3HtRQsbyHkGjtSme9po1RpuuTedBygrb3XjCM1KZS2Z9J6zDHngV2HnzmyRZoCUHjUaEs6xpYjMm",
  "key13": "fgGVU3AMFAL1oTY7k479aBbxN5QjhjXkGNPSfdiXXpVNcHTmGNBYHbfkCGVe3vucTo7k6E1czcWBKYuLU5uiQ4s",
  "key14": "3NZpJKsbHBBz8nrxWCFmS21zNDrhctgVx2d2JL1uLsk2tgF3FC9Nb1tVS5GqPDCfNsUrqZ23CHqJurFRtBzTRwfd",
  "key15": "ch2zNX52MMRjsv1FapasSS6fQ62hxCLnPgp8iWjtNcKRSnwT7u7BVHkh4W3NBz2dzhrDNHvPMDuiPVaFrp6Lotu",
  "key16": "2FpBW2hqAYAWJpTDHtRcXAz2fD1ax8TtBUswfeG6tfQvg7jYJzbKuLjimKRpt4NgRnPrm5U5sMFWdax8UiJbncDt",
  "key17": "2AGwbNqdGkfYQMytcXT6yuEJ9WSRbL6Sz1vX2vsxQTSQ2EdoLo99kMF8N8RZ6HG7fae3Qe69xfNQZjj6nzrqqHDv",
  "key18": "5ubdgXpsqSBVhJ4wg1MS4JK7jbGGoS3WhjkKuXw4ZYmZvVtUSR8qhBarmBxJqvA4eaw3vCtM7oxT1M6irNrtxNmC",
  "key19": "fphvth3AdvvurzfUaFU6sLAoFZ9tCQQYnj5498QcyMXiqF3g6rcMEN6spGidrY8TU4EJju2XwmEExx886hwMBW7",
  "key20": "2UjjQY7GK8Wq3vGXVJpbXZAunTt2V4FUgi5yeaAoVPcPErqfeyBmpSVZtHbHc6tqd6JPNrEXt97JRyXBW4G2tH6C",
  "key21": "5TMTTQDd29oQe8itecSjr3JvRB3Y56zcrXvy9bezDKSAwGArvKQecxoeN4EwEAL4j9EgQ9D8bYz81HJwgWvWCFRg",
  "key22": "2D6wXeDAo6x4yRDmHysJqNfrtZ37RPnjb1ovVupagjgBX9JPASbRyyp7vRZSphhVNg2iH3gR2XdHEmtra3Ucu1zi",
  "key23": "5QfBAG3KaCfFGerhvjY7UtevP9hJsvM5QHvK3YEbFgaAjqretpg9VS9xNvuWPdj1ne4LRoXuvWCTetA7qwwaupuj",
  "key24": "46yjHLn4c99irHhpxW8VzEmcAhV28DNjwW788z2zdNNpMQkQz7NVRT2TFN25drzd7u1SAz5sk6AWRXNggvDNb2rd",
  "key25": "1NAiKTgFHuGUewfdT61oswUhkAeaHtR6u5iY5DMY51qEbPH9fc9t1UR9yG4hHbHWoEkJooiadkHrWq9iWu69rAN",
  "key26": "3VT1So4vA8t4H12epvfko6MS7X2jnu8BHXdqTAgYGpbipbi5YGZTrgBMuKk1PcJyf5Ww9XdC2DDAmzcKmMiKCmoP",
  "key27": "P5nvYe5Kn1P4fz3AuLXAJJ2gqKVUz4J7ecYp5nrVxJ2w9H11VjU41KEYhxCQS4LADBPHKkPs6oLJrdCw2UCYjcG",
  "key28": "4TAAuLpuTvHAADffsUp8ZdFsZhVUSRsr2ZK3iGvYpUEFuSzXfnDxuC2VEkSaRwDNJJ9goEpXaXHM4YZ2FMTZdmtb",
  "key29": "24HhoWqniRtxkRJ3XYLAyJJ4KEkKjrmzRc9Ny4hVnbv1y6mHV7i7A712RnPSv6C1sa16iDPS5ahp4sSp67wFxWCa"
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
