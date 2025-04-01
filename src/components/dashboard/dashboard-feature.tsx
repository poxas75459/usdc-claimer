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
    "4qcqrmBpXPY8TkePsFgEjRSaCa2TbcX48diNMXxrL6gawkNUzJYVzpjys63wRApDVAqoKeHXkWBJvDPBs5YTFtUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jgAecdty8NKqMpqeAghLbQGV2HA48wE6iZ1VnRJ2X6DUeQt8oo956qR6e6Fe9NaKmhUcZV4VFtb56uLGaPiD7i8",
  "key1": "5DvwxKqpph4D9i1ZRr8FqGygVdnQT4FaztE36V8NcYHXRf8EzLyXUaY7UfzSFKA7marYphJqGRSBHiiywkhekaTc",
  "key2": "3woupK4Qy35CUsTXyjm2R3ihydZ9qDFrUdcecysNeqBjX6QDZdPh7CASVJBVKPciMEZiDiNXtQiPgDEAmx4FwC5v",
  "key3": "26pAyTfsicFRyc124E7EuuXZd3Gt3aWrNxeCEf2b8owRGisRSir427eQrHmPejCEAtGdAyHLkP5h1mZ1Mfiw4KjP",
  "key4": "UGtVksoU1HtVSAwAn6w7GKLKvzqB1ypbFUGeZFCxenzNSWj6RYmo6uBf9g3S6ViiShXUNjhx58TEdvCHVxPusvu",
  "key5": "452ezUWS4H9v2hyTo41VqWym17MJ3iMbY5rW4S9ZxoWFroRYcHQ93kKaBjE3hhsKrZxwWDrCyjCnG7JW8PsFfiGY",
  "key6": "3fRY7X1VAvdsQ6rDiZB6A89WMHUzSrQqtMCtPUZmXqTvTjpbXK8fnSWEUiDuBqBoey6d3WRVh6wUmEevtBkQ7Pp9",
  "key7": "4U72X3pfSFhHrueRivguh8WNKpMdSg8nVSYSqUqeNogxm9hg2NyTwbmJpJB3imZfHgREMw8E96VnpivD92EN3osd",
  "key8": "62BnU5tfG39au8smKXTw9e89JTjW8KXnhcJK6Q4uD4dYx3kMEEAqcn1PwcdnrXcBsMFwkzWAHv6CyRViJAozMHoz",
  "key9": "387vRP2Troraf38Q7KttTD6HkVqeF6T517qsxfVGmo5jHJygg3vUpUsTBpiisCvMGM6G7ABQYkuwrbVxSvxDYFPV",
  "key10": "2QtFoT25g7WN5geVWTfZcZMiq39gT9ZnutxVC9pcccJJEXmXoEcKk9K9g7ubeZ21Wcxa6vwe7Vt3qhsbxLSfBA2m",
  "key11": "38dRJJNtgBSZB6mKrGW4F1JPDCoXfGTe8iRLpq28b73vGEi2GWKEArRA3RyFFfAq4ev63aVGmb4mRWpHzgZUTa2k",
  "key12": "549VoAMjp1C6GEGMh7wkg9u9wJgGqGmeZ2awhTtha9VCRS9PrFvYUZAfwXYbDhAiQ3oqMcs9dGVypruN99BYCabQ",
  "key13": "2iaV7EvURVX9otfe8x74A8dTfKabgb3EwmozKDdukzfzgknrj5JDAr1LLwiDymkTqKPbQHvvnNJdDGGkCTa6Hhit",
  "key14": "4Xx4m1AnjwRgB8AysjsqKbQYAPDkgrYvoKNjFe5a4caNoM5K1Zp2S29Ht4czBJq7Y3qQtEs2nZAQPuWCAuU9ev7",
  "key15": "36Eunsz7FyEt86oeFnRdTkd7zVmWhAXdHUcLRitLfFWtoExW9RGdhu851iQg9qCNB6qa6r4W7rw9BRPsyED1Wnzd",
  "key16": "2yaijRpkqQYLPNAj9Q8FbVQSinfEYyt681PRkf8BakdmuzyAW7tV1Adgqyuoq7WtBzHxgNukVR9cmCa3ajMxvecx",
  "key17": "4usp3nxpiWcXdRHwWPc9GDESxGj6ou4H8FWdHjhCdFKpkenyoMnS91zNi4M5YvcxSat4aZPxoMarQHSyD9w7fixY",
  "key18": "4go3VsNzq7j5jVHayaHfD9P2pRa2gFGqSNi3j89zEHPyTz19b3RuRAeXmcfHqapVs1vx5r9dP9sVnVJ9XMnD9PAo",
  "key19": "41ejVUiJfrMJaWCLU9oFxacT8uv51z8MD82BMBV5PBUiwnSbG62Rk8rHSokiNqfkfq5FCkUmdkSC3MKbZMmTFMg3",
  "key20": "5fSpfoudKsvHvXWSNMqjSD3yMeSiLpdwyATW214vmNuse4FVcjuxknKrLrnQqy6fzMw9gp7jrLQCrVaE8GPUjhhf",
  "key21": "5LRnRKFjYbXAUSwwix4oBz69HjeDJPwB4yj6eH9RJVE2hwR2xRiwv3Tog5pByUNVhggR6jrn3xQvzFLkDAuSA7A7",
  "key22": "5y3G1DbiFpALRpixrFKR782jtZuTd5wZ71Lc63dXNCSgbPG1apy2wmKWJqsU2i5GFjhPfq2EdyD5epjZyi7HPCdv",
  "key23": "5hXEG1zP9oPZJTQuwc7Xu449u62ZrSZq8zKRU7mcBJFT3mTcft1gEjo1Jq166tMfsnzSNZynNBLhEsjiCCPLjKuz",
  "key24": "4jvND2uTYWqKBZKkXezngKLwXNNL1fd7A3ATgMBTARkSUkbLQ8E5B9gnLUPhx5qjFzcUMbRhLezYKZwGTiZ8yRPH",
  "key25": "2Y37JoKib7GNiujkodYEFupLppwr52QHqSF7H1KFiLY6QrEJ5TU8UtkcgKAd6Ct6VNuVJJX7qxQGH643Vj2WFeQ5",
  "key26": "MYooZk6Nw7Bgu45SUmBa51vGvkordYHYFHrqh4eUT3i6v7rh3ZMHapfWfpixu9M19r4KZeoAMzYV8K4eqqKB4u2",
  "key27": "2Q88Yg4D18rQ3J9mfh9ziKwKSAUdWgnP4jkP3FbSLWTg7hAGorEEBbZ6ZBmAQ9STTAJxbXoSwsNA4bvLKrSNG4ec",
  "key28": "35ijKkCbfrz1RHEwvTgs863DmEDiAH9MC9dqMXkWcKe54PyMvQPMQ4n5Skbf1mFjfM4BSCiANiNT9o2eAffN5KzM",
  "key29": "2WhuamaGWAwvs9abvZeKrfAjfbMU84LjJKJQDj7wLMbQppEGuxmJAKRfASin4zmTLZRjAZdX7NdBBfNBBsSroBFJ",
  "key30": "2MfFZR1BByvVdcbXDjJc58sDFRtypMxNdPiKW3anr3dFE9gktP6Dtgi2dPb1VHGH632WBXf6iAfCfmA9skU91TMt",
  "key31": "2Zs8Zed7zQDZfYAJE4LbiVXCnvp313vcL3ce3TjH35oPsiQr8TdxZXBKyZF1NHy4uX9iLfcHLfcbSNQcoXAoSxqf",
  "key32": "6574jmJ2eX3pYs8qToFGR4KbJ3vWuj5CGyG9JyjRCbZytVfhnpy3Uom6Cgtd66pjPsxoAA3dNvjgMxewceS8Q9tb",
  "key33": "4TfArJNe6XzGsC1Z3em1kFgLFXVEebadBev3v8jxRrbmnUzi6pLuoD4Hatha7etCsM9XYbYYd9TCPb2h5ofPGGiC",
  "key34": "5N3XpDEXnGF6iDRL58Yj3aNJzfp3a5oDRS62zDec3nrFrCbYSbjRLEUmtvZ1XbHq2yDmxdMJaGX4sVLcj73yakD2",
  "key35": "4ufiTsCuHtqHNmrpSpnrZuztNQTFqZguDnx8FZ85MgFdSSe9sP4ctoyQE2CesqpcRyNifG4HZQNwjH7pJaB4dP9G",
  "key36": "4YDFkwwjstiwuesr4imPfmatBfJdyWnABCLddhARCt5FgnKrTR8aT2HhKSVTrB17mYkqJmzsuA53gfyADHaeURF"
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
