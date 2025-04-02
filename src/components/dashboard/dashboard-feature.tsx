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
    "5ggwEp616Y8XUPgvPCbL33B7H58HFMRzd8G8aVwSmi5jomGQNVWafbAbUz7StvHUrVuVBteimdF9r5D7n6sytDtf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23rVKzVudpNHKeHhsDwuMLDSsf1wYGEpxKgGNT6LuzHxUC8NQ6zY3dR9ZCBEDxcyZWwggqEqK3yKmSGHVvmhESG6",
  "key1": "2XyeKQSVXa61MWjPTQVEe6boj2SetZN588xXxxHeAXSRUxNLqhxYgPU475hiacYpXyDUaxTrb7p8rDauHbGhtWnz",
  "key2": "3Eh5SriV2bnwrcASyCAvq8iSLnfd1uzHy7u2RdPXuYDTBAiK8MwqPHdmrjQqg2Z29xzTSu9rq2YUU6iKB8EpXhPX",
  "key3": "4XeTqvHu4p6cdu3WPxSjH5UEA7pZKXNzZrVFK6Q8UHuRpb5mkoPH53ZCVvzTeBP2jD82FQoHs7CfGW2A2dEQw8yt",
  "key4": "21Br5iUwYyq4VpHdfEhG6SBbUzNGzvV2G5NqvyZ5sd91i67ZEC29q8GXkCH37rTf9qqtKvZS9k4Ch1ECtYvrtq9a",
  "key5": "4GdUwJW4TBV2msDfcpiVsAfN4G3Fk8eQmMNZMRpgEnKfLi5hrX6PW67Bhxi2cEALAGn8eUnDwoQRwreALWsN12p8",
  "key6": "53BUrvGpjqxf9m9fE5FTAGu1nVtTauFa8GDfCYeRqT2ZvwornBdQ5jFmjhwyhHFLgth2xBkVHpCGUUhDQ1iqyxKC",
  "key7": "2TkQo3LXMf26wztSpAP4TpSGYrzdtPAbfWLH4vKWousHediK78FLhwr3X6xA6zNVFpGmVaeTGb4aLuYKA3iqc97r",
  "key8": "2p7iaXAUCe1TaoJ4i7ozWgcQqbcrqwEmpFLGm2cNCxyRp2c8MFhABcV3RHjNXLXrozQ3mafBm6TCE2qqv3dVbwJw",
  "key9": "36AGo9YRd7fA9GeYdrFb5DKu12m6bFCm62weMvsSY45NuzC4WgDvu8fFYzMZZto3T6u9hawRoUFJHxiyxNK8pWqe",
  "key10": "3SrkvM4dhfaeLRbnxFN6SugEQKBqae3VN9Z5K3u6UGWsuuXxPkHZbjXK3cAHZmDXk2ZVEAxmh2ZGNmdwxk1tinpk",
  "key11": "55w92YbyZCJHXQm5DjKsnrQokw4Y6bKbnzZQKSkkqUP6e1BZqrQs17sr94VUbUBRCXh5DV22nquEDreL6tSEthkX",
  "key12": "J1mHH5q7EfTCE7jjqPMJb47Nsk8fhpf6as573DetCXxUSKb3hYXTmkkRgAsP5Vya3N3pK4wFSw4yNLZiZq93BXo",
  "key13": "2kKHrQ7WjyveEyXE7htBL9vx5iwwzSuzEHiPLaJ1aoJg9C2NWfH2dCgqkgQeSa2YsPYJ1icyZmCz4UcXqzUfZ64C",
  "key14": "5asc7iLWaW9SSr22N9f2k1aXusPX2JTYPwuJ94Yu7VFz7fmbuaZFo896k9EwDZYaYYwx8mncuH8FEkRLUvqvFUEf",
  "key15": "5t5hqUdg4JGwntY76FruGghU86tXW81PNSnTCkQthFZsbq4fsvLmo4htdmpaX6ajr3KwdXfRfmWhUaBFE924UGKM",
  "key16": "4FjnNf4ADeAR6BdtYvitusRkxEizmwwZXUzVDYgE9dQ4BvhvszrXfqyTDpYj8akkYzjkQDkj3AR7MRo7hGDDjkVZ",
  "key17": "BvdbmBMhPdTH28G3K87gWNJwTb38p7v5HVrtAGVpYZ59u5FFeXRTnRMzJ1NrP8NuQHwy2S1BXQMunGCrCaZh4yQ",
  "key18": "4QHSMPaccrfrnL47gJKnPs7YBzJFDXSnjqfi8c66jrVx3ofs1QLUMD11p4qday4gtViVP8qv6n2PvAiNKFN9WNkL",
  "key19": "2KbpXUf8dNeTDVkox3udvTyykwuzLXnTNeMGfZcF9xszU2fXbSTLKuU9a6D2YGKhEvBAEPk7iCh8sV9etUT3VmuV",
  "key20": "NUZdqKAAgNpJdiPHQ8rnfcs1oCMrCikq9ACSX7tXHtdfqiqno8NuM7HJ97VhCWFjxyLQG6Yu1mimQuPAmSNnXWS",
  "key21": "46hkkzCu9oA59z7MpgaVxoUJWxF4bPcP9yGkCFYnshXWjQZM3oChkU2G7LACMKewixiduT8CvEHDZXKLDBv7Jad2",
  "key22": "2AsQxYwHTXTZBpi3qqXb7JZbT2u2jqPJTTTYmLBfD76aABe86BADCikPq71W3brK94EBudqify85YUE3T4H2bMVr",
  "key23": "5AcQwako53g38J4miy5fw2YUpRLcYhVspcmtCGL276SsP7v5Gg6CopeGLYYPM1JdHmAfThHaSmVrWe9TqQbfRHVt",
  "key24": "jvo4qCakajMunVtuevAsTVN29ppJQgKu6RjHYwXdoVjYtWoFC43BkM3LvKRahSNRJYkM1TJsAhWvWVwMpfkrztB",
  "key25": "2fEaVxNBwkJaZHDc3eTqTbpa82r34tkGQBgunjm2JDRuy2DvgBK5d6m37bWBSjCW2DQxemXtr1zMkZLCxfk2G7cC",
  "key26": "mKE3jTGhAx5vMui4miJw66MpAThZNK9E3dkcXPZxzf3tY22NWGDvHdxQDxQfsZSSUpK9mKFhEnv2xhFNmrW6Wou",
  "key27": "3mrBMJM5CGe7h7GC9QWBUHZBpSxdZasM6XmwpY3XfPZgQm4ZViRMYJbnG1AMCsdAbZpH3pwBxTWwgjAnbLEGx3J7",
  "key28": "5wTwj86VPPrjmSZ7sMquJBRHwPMjhYYPwXhrKsky45C6biEeTmKxfaipeRbNmZZ464CMZFRb2nH5BXEbWLyRVUQc",
  "key29": "3a1ovXLpKRs1ucpgTxz2DJpe1unxjBnwAoK9cTKktcYzNxL3YadkuTnGvMBeNhBSKxTMfUrxBZEv9bXcVCxkKAqh",
  "key30": "4PWnFPNLnXdsZxDQzgjyW31WBhg5PR8yVWLun6ZsQmHCVARWfMzg1Xd6hj32y2mvDfUtpPTNhTfHYJNci6CXfPGF",
  "key31": "23N8cYussV7jT3NhSzST47UVuRDv3LSMRhqxF7QW4u5m5fBQki4dr8acUQhv4CqXQWxyuwXbvEFjtGzEia6oHFRi",
  "key32": "33W5PECwFoemwBGQZubHvwUvTRkzaLRWRgaT5zMoXiC1TuTNAVZsD4DTwGffb3S3sixgHddNgskTrhPoBS4a5VXb",
  "key33": "5e5mHaE24s33sMqouXdp49zHzNKyXniuE5C13WvWfmvZnZrzcC2JTfAfyhmmoKe2t7JnWy9p15Qdvc5PQQ8TqKW3",
  "key34": "26Gh9FMB2rGrqdnfjJhpe9Wwy4YQG7dEBBxdpZAoeHWD23Jit3Ti7REo2rNxdkSs9B6S5k4LXoiYRDCyne6JLC79",
  "key35": "FPuukDJE3i6Jn15mnueWsBFB1Nn5jgW3STqYXn8QTXFbQ9gjqtKkbTwMDMw9xHA5mqhvjcTi6k7NDGuaEehxAq4",
  "key36": "3LUnej8MiMfq37Cv64mqpKypvMssrP6r7UEUyUkf2R1VbdBVP2NDudhF1rgoEKmSXhrapWKC1dL3Yq44XB7Ty3uV",
  "key37": "3ku4BdEu6vsuuot9985CmLdMHmTxPREWJCNuBJixZG8TXNZRi3uPoD4139RXR29H8mKKSQXyVSapnhVdWMEiLL5B",
  "key38": "S4c89NbZJBnvoVVRhwBM2xA8oMLfhxPamQDqBQyh99HTD5yUZCmMLWZkmejZ269MFC1eE14TCnKouRzUCrDbRzP",
  "key39": "Ap9SHjC3Hfw7noBUfXFJZ7j6nzPeToMzMLaBMYZqak9snW947z54srxiBEq6r8iwVdihq3nWMUWw9FTr1GEbKEd",
  "key40": "3Z7jPWxu6PoZk9YUXQG9SyxpbLadEuRCDsgpUABS9JubZnUv5EnmJaxTpw2j583EW7xyqdx77gPhF6X4VG4BnRb6",
  "key41": "2ZNYMcWKHHZhgztLNJKHqMKAt1r8GS4LuUobR9DdKc1ackgbaLLZFuLrRCgKBb346RRKdW67Hk56nepgz5hbSqmE",
  "key42": "55heB978ijimr5GV7CGq9p8MJDMHXbKLCanT5jf5YnGVoHvd4fXRtD5j9J2ADr8VkEdDwRhhGQu273FGvUCYwyrt",
  "key43": "52UwbsT4JRrxmpoqbXUEgtrJ2kPn67CEqWcgLtVLjEkZmfvQ8JEcC4RT38tihdm2qRAYcAdrsyCEf515vRc7DtMH",
  "key44": "587xH5Q9FirSLWiqNhSSawJaZzi5bRTgXeoGStuugPhqRg1ahuPoWa37UjPder9Zc9sHedZFy9zgvsjqU8y2gpLr",
  "key45": "JLwAw1Us5CBc1UqZHv4CkAdFZSqeUog1X6X21WJCzQ5e2ffZ62XmhzLXi8rt26HQFBzEb8nXmrbvhKkAUphqsF4",
  "key46": "3fZSoyFjXYbuEdEnEhKvyszoLTGFLJPmMnfozUAdznZeMNfotMxoXGxgWPtXQKSrUnutdbwbPKqS1vPKQqeSwHLu",
  "key47": "3Czk7gCmvUNVRC1ZtZ81uwFjRFE1tbhiDLe9XZQWT65v1XmD7gEe48UjW5j3DdRJE7uTVQeQWB4JpBt5fMhBaZsh",
  "key48": "3nxrwBVXdPJc1BtrNLACzmpsKXcviULkKWc129zWt5YcF8CE4z3bHDV7Hs2BakfWUbdAtiXHG85eWnjY9C9BmoFE"
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
