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
    "UwSg6zizyuAk3pWWNWyV3muZaf5bA2yt67PKU9ucjQ8T1Gxt9jVVBACcDvgWk2UkqnrocAVxd7XoTjoNjf6qLAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3usq4SGFnXEFzbSLqNcVuJVy9vv7CbwKuxqRokV7V3Gb6mjBaMG5AqpXk8UhyMQ4NMkr1BqUdTbjAksTB6q8Kzcv",
  "key1": "52tsGQENmfGY5H6tYn3z1ETSwEH1TmZNb3WzANSvM4G8rMoe7CM2jWVCsNHJKDZoVZvyY2ANmC2NhgjYYa7sEekd",
  "key2": "5gqEwD2FJwM6wwSA9YJgaEe2CWvmRwfpX7iovNxJWwNsPsevim3bAX53qUssquPWAgZ41ASqhcCWJsQFNkMCJpgp",
  "key3": "5WXJ1ndTVsobrZ3tXKniqZXtP5jC37MgaQtpBU7s565BQJdJcTFoK1mpZErAox4Zt8oZc9rri1gK5jjbKdUrYTo1",
  "key4": "3hgan6v4mHPZys9fhepMJsftSZbWqfPSUEz3uMEgumz7Zqwe8oUCe6EmYSE5WqyjzcKgxaitQ6t2yf7D1YFJnp2j",
  "key5": "5swGv8NtJ4zp7uLskbNEWBtGQt6iHQPTxrFp1xgeHTnAqPvfKyBrcSWQR3Sb5R4vf9ij4cJzdWcqYPjq4oH7Y6a8",
  "key6": "5JsPhDFkHVbwQddWKzBBEHqV6E87wZACstvGfmyXmiBDfB52Xz96kEvRSKnFA9kUCFRBXyh6FLUwBaH4bzmB99qN",
  "key7": "3kBtULxJp7uQ6rcCqxU5vFNuZKgCEmm2RG5MjiR2NmWHWiRFLKVLkzG1r4hYN2sFHPwZLyHeM42pMBmAwL2gi88a",
  "key8": "NLwhBjLvtYKZRfzDrrq7qVmc8MgwPBMiNkgaU6mMjVPdMBy7PqxvBjXPHKZmj343zHKvNvD1N2eSuM96jCDbEex",
  "key9": "5niW7pJztoTW6roKdaktKq2U6kD83JTBqWG34DozEsygqEqG44pn8vTvTU7spfpAD5REgkyHMBaYLZhmH91xRNoN",
  "key10": "5PJT6UWjPHxT4erL7Hwso3BGcNXzzvaYrGhrRubhKwa81Y1TYi1NVNGYBP86uwyiC7FJ2kmZ8V5KWsiuVLEMzKHC",
  "key11": "65gDfsj6U6yfdSCtkZGYC7n7mLSyPCSzrw3b6gsJzZ5mweerwaVpHGPRSAgkDC3PfPL4RQreceEvEFk9PtufpKU3",
  "key12": "2UxTQW2AePJcF8PpifxWBWUZAfUw4HrT2r51MkX4XFGrkQMRfGkJNuNMvqieYvRJXYFkrQHLsSNaVnvyLkKJ9ckz",
  "key13": "5VsPQcqy4F49TtuHK7daxVFtmFXDVojkVd3PPPnWR4KQHyVwHLELyWFw1U2aH6sMY2M9VsXdbMYMN387jbvqqCLt",
  "key14": "2JRURmDAurJMBYfMKCPfhacg7vQFmJ5ySYcWweMQRBJxx4DKdEC4xVLyNYv2qxJiH7yBVmHX5pvmgvN4ZwDWHCJf",
  "key15": "2RHqZY8YJEpjQ17yFKPSzU1FHrLHDJK2qfXVvZuSB6izegJm3YeERnvEiV5tRXnMeFZSwBhWDZWpti572BLNdohd",
  "key16": "38Ua3E6TU9NCWBzmguFQjTp8FFUeS3aWdJXzVMyTr7ZawMRiwU2QeR7CBC8kzyPMBpkvruSucwSuYEwyUxAdsoY2",
  "key17": "3akPY47fk4ZUKmghMnkjHdjiHZFCc3C6JTt6NvuhyYYZPtUrzV78RJnSdY67rCQRFZJJF7RfSfr2yryRDCPdWYSD",
  "key18": "Y16L9H8CMbBXK7dr7rCR2M74SjVY9Xpo9wSvBNrnr5AXVzxgy1UHGufmgAzDXXTk1eDUoAUr6UpTXFmrDWUSVb8",
  "key19": "5BxthUQtZ9Vxrq4VwrFytShz1CycpiqRVo2PnvMcDKXd8mNmR4PYhb2TsDWgZ4e2ozMoiRVyfDEXJ5M6SVzFooe4",
  "key20": "5zWFV1tnqBB2WkuerykMeEXzdTwMv5vHExhbUoGG44QHqZvnerX66mSJs67cJP8tFZAGAznGQYChGzHQgUtLhy2S",
  "key21": "rCFS3JohpvnC9m1XMHZ42LvAivso1bU3jVN7ZZ1tAeH2pie3TnGssoukDMhkXrRfvQRZgEn6Ud19DSGZMoRnXCB",
  "key22": "4qWW2KHutpMfecmcSh98t6E4DYxwvSZYmEWdTEDpVepDpX79QN3qf2HAc5C71s8jefSB7cmLteTkUXA9jnY7XuW6",
  "key23": "MzUGMEVDGyK9cBAyFy1uK6i5Hyfpwy5nuj14LP7SXn327hnS16ybmassuMojJobUu4UbJsTwbGfKjXjieKaWRtH",
  "key24": "3uSQgYQD25zed8UQy3GkQL1ddYM5BrfheGMAisiDMzwc4ZRg1W39s355c3eoGxa57bhfnqf1UT6bXPT4nG2dPzYt",
  "key25": "67WBtmVqfWRDyGc31iNoRTRej196YmhBCGcE2qHuudstVwAUXwZ67jGGG1H1vYErvrJwH9QAWUcpFiu7ajtXdMyk",
  "key26": "5Re7F7ftXkBY6b8r5cuoL2g6iiKyrNRCUJxAiwTwBB3mo8L4dczPy1QUHEFZj5HTXqoXK1gBM1D3mBW2eUhBfT8V",
  "key27": "5ff2jaMMg3gjMbzvCwCSMdyLBkmvSRYiGhXP3NEXssv1iV6tTmAAjGzyoH95UntceqXZPUdfvz2yym6iQQPWuPB5",
  "key28": "443Ugutfnm5gFgT7hGXa2XHvEUDu8NKeMHfEvRWHu3B15xXERPXjYLyyQNPsjbXXSqhX44pa8A9EbXkFXMpMQMrM",
  "key29": "4JJXjDVmbCTLHHVV6261cyHsTMi7vdK3duFZwHL6r1WScG9iRdfyRqsATtfEm7spYmUmt3NFXtC9WX52hPwnDFqp",
  "key30": "4QKwqCxBwQnTud5pZ1zyzEU3vmoer4b9kvcYvTh1LkAkrncHn3D7ASsMoYGMbNjSYCndRGB5pd2i8w47bAhSLECf",
  "key31": "4LvRC3au8fpwYv8233K9AHsoMBUHBae4KHcP99Q3vLcLvYuKqqLfKpW26Rsb23EuFH48aSnasuS5ucZYZYJePU3W",
  "key32": "34ZZ3N7iiUiY7e4YZ2yhFPijRFtyxmw399KeAcMbXV6M8iH6ZhsWiYVJdS1u6bwthnV4tCeMtMaJEDJGurPVjhXp",
  "key33": "2umwvm3zJGjMQBUXU3fQLxBCyqNx63Kch2kbwhMN7AAheHRmUTBn7fEhSEVXWjQDfvtvRgLmuKtqpYyw1HWLRkKS",
  "key34": "23yjwnTw3PBG4gSLBXyebgoMjw3J4tNeLUd8YVmyBXwU9g3KAZPeuMiH1bQeAhnXQA9BGgpkZDvLCyjDEez8ZqZY",
  "key35": "3V3u5mgmsGpSxnVmsoD45kEB9CsG8EyDWTZ13WmcFRMvYwhwtJpTAyT8X5hG3kq2HJu9cQka3zJfcmtsYpMVAo88",
  "key36": "3siQbqJpaj5iFDpkd5mqz9EWcChaY5sui2YWKCTXK6quiYtc2WJdXGsMCz292DcTcQbwankK4GHJf7VC3tUfACmc",
  "key37": "4qvHAEgAmANYK5CM5yS9vRNvMkuWFhyr6kdU5bHnHuDLxegVKLBcX8fkhEXziDh7cHyEoDz5i7yTMbA6oNQd3fAU",
  "key38": "umktNLyUFKYowwfdYNWPqEun4KdBoFaM19snrercLYdxakJH3vgNLTR4nFqGHGJTsL41xRhvsHbGjUtRQsWBHZ4",
  "key39": "ei1rBR3R2HhGBCubopkpwfuL6G3fLwxePq7ZWqTmB284zkvdfR3opKPPpHBU3soQ2R7zxUyi5vLrruQ4tbk94tN",
  "key40": "3tXBbmtkZWPivaxsjbcToQYnN2tXm27WNdkwCgLEufCU3BNMp1CneidZj2mVnB42JRW7qu8iBHRWEq7A6YSLWwx4",
  "key41": "4moiDHQzSF98y7KqzLnBJLTyCWTENRitvDr4GhgJNDimqonpPThcxf8LFd6qnBXUKBogrkwHmiyEYoEZbBtSCALP",
  "key42": "4C4KKdAjDK1fyFfDVuCVu3v4aiefxu4KHGBCLAaDwvdnoHTJRvrMnZLie9yWUi1rM9xTQRpQMLhzyW2AwkwLT4n6",
  "key43": "4SrTG9hqSfkjiY8rW2t9cvW5yWN2rQ4V5uSFLSf3CMxG35iNEPJcWtK3Fft5ooq6D4ebjp9pivh3AAVxXfQ1QM42"
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
