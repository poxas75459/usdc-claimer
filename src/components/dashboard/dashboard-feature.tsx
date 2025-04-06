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
    "5iiKzo1hTgKsE91rjnfEZneN2CkHs64jttUV1MQDBhgcskTYAGeWg3eHGUo81s1L9E9j713Rkg5XFsDLkSMPVNvd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FmRM1T8WmZmXebM85ZC4P6uch7iuNmaZXR4fMAvtM4acXXTpxTpai9Db5auaYpd6eQA1rNtSra3JZ1wmS6aywuZ",
  "key1": "34VPJi5vhJPbLCE5g5ofJWZD8CSudLF9PFAdueWTm3kUyYGF9YLRqDzoCjUyr6ipEBMHW7vwpiafyQgM6SdKkqDm",
  "key2": "4Hi3otYkX4kLzm2DSwu99PNd4Gj1mT9XeyLezaMvc81WHoP6Bc9GJAkhUPm9kcznds6sDcaExfdgjsA26rqWEd4p",
  "key3": "2cczG24rbPTn7UV1A3mxNQxwDFk96x5yqtxV1WuMauZh1VcpizK3MXTdPXGS2gskyCci5fRrK5qEVfbSqc1gwtDA",
  "key4": "3XJeJAsLicSCaTyXknZk8HfFzxRSipHHVnym2vS5hbTkb8qzSbN4tj8ZBgbtJzX8K2m6pLTzcjPWADCtLGFdFEjq",
  "key5": "BuhWtc8cJXGxAoHU6aHThY5wJB5wgcicSYgAVGMogg6Un5vgMbZbsLu31p4667nm6wyWcSPryXz8GJ5xe1wjfnX",
  "key6": "2iuCBkyJAGKGu8tJ4G2v1cCgfmJJdrypzTa8z4WDXiyHKXDNNwSikvCpJtkasjxQQSr9GAyfxBMraHFBx9p6iaHQ",
  "key7": "3oPM23Rdbp4gSbupQ7tqDpVEGtnimoDetG9vxPjMMTeqDwV39hWTDHSCJhMTrm6y3n3rbMSoGgy1zX426P4fe6Ym",
  "key8": "4poKFKYCpUegubW4qnrqbDhdskE1Ly5uazsB1tLHKJf2Ct7JrQvHPyuEHhKxuaLGbpkT8GNwo4w2ykP9wPd8dPPJ",
  "key9": "4UcPusDncCeDd8hzsBFfng6KntbBBFAKxRv1TtjGmqNPogTpRWv92VishALweHi8rz9eYR3DqUvHuTx2KGMTx16F",
  "key10": "5VHssHAzJpGTVVHfzeuuR7f4xHix49UQ6AzuHkmCdRsw6yd9WgXmBkY5Nd9eCrjnvioU9u3vhZfdRJPeMaUqF1xk",
  "key11": "66drXGGGJJL2peU8WXtJQd3fJC2h9bPmuNynPuzBZjVydWrNWXw6cHWVi4WaoWCJaWNZyqAaSEu9riLpPUUTAhPh",
  "key12": "53Xw4txYhQ1RYZ8BVZi8gHfkpbbcQEPmqAiF6QewHAGCqAp2EEbzUCw45muQNFULdK4nFB2Rqrh5Hn4ckKNKnv7G",
  "key13": "5u8kHgsmEGydSaSCPV3pGv4Vqat49Tod8zzJmCJ49THXUrPHDYkGip8pnKXJoVg27G5zTnXVi2SJT8ingGGQ9TUh",
  "key14": "3Xmay8uhTFeqgc2d2oGCoaFhGVVBxRPnH1phTQMibFDaaSB5ZYvv9U5mzhbo9WY6wfrAZcUfmyZyz9YEME2xvBQW",
  "key15": "2hRPgm8L8ECw6gKqgSRVsyvFvrmqn8b2WbXmX3TTDBUVctEr5DupG3imgckCWY1EKC23soTGSsdvepqVnQZ53Fq3",
  "key16": "37JmuuwSQv4ooovZjL8jA2mVpwYf9XYrXphWL66XK2sU8XbMSuyb64iVjAC5cYwDY9x85C4fXvyRaZFSbj7mmjbB",
  "key17": "5rprCfNNN5mDJ2LVM7Ne5vkKFNdb3waCyhHXP1A258AKWrRcUjEFBawZkHGS5HrYFXtkAvf6uZ89p3jveHAUqbVt",
  "key18": "5ZpjSigMh1H4MKGXiDCk3pExjkiWPX29Z6q2heDAawJgS4Beqwz2HvLENNrvMvQXuMThMguu7jKbPzXYMmqKUJSz",
  "key19": "Pw8z4tLCE1Z8h7fXWiig1uJaxSTHd9wSf8uHAaUroCMoDjfRCtrDE9MZiTEAQwTV5sTs1SJBC5cJjzsQFisyCs3",
  "key20": "3xtf5VRPyT78P2safgDgBwanuQzrCyFZLY3pX8ndELCeM8VVpDQGSQsauNEMXqdMzv8maC8mVNrPLWNvCqyduqro",
  "key21": "4fD3KEyX38yxrjf56nKJJe3CAqxt8zgjREvTbsPU46XHqRkFkt9UBjnW1Xi4efUD3bXFizsse3uZSPR4G5BC28di",
  "key22": "ddE8tL5NJTiGRDbzAKXiFCot3gyEHoCgyhKaz16EgmWD3iqAeuuaqhXgEZuLN8mz7XV4pUQ3tdkcCaj2aWie8CK",
  "key23": "5cTAjHiiFSecXCbASCiySk1c2LFAhoXxEZmQnyp8EEcadr2pzP3WqvbpzYDkEzUhzVYaQB2NwAzTB3pbnMZtLyJm",
  "key24": "3CKp3B4R5tbVg4XEi7kiYmNXa767L7yMcqXJcLEWu95GDEDp8FWHotzRUNoQca8tseqw7tn9JHHyezz2EwufKTjf",
  "key25": "5qZWnh2D1sVEFSGdSueNFdQ3HoV64f9gKhgZvbmoQq7GmWnpxzeyzn7zkxS3AN8zcB8p927FpjChFaPBaSj4XBwq",
  "key26": "3UcYAjMcLbHnCEafE8qQcV4Mq8TcRK3KqeeiAAdRDq6m1wi7xPCqb5JfbbTFysnw9JXcWamxUHbDFHNgbEa8hEUe",
  "key27": "KiVwMFx4e2DcR5AoGKmDSWi2XykbdDsM9iMVCr4hVM1GV1svRyZu4heCzsMkz8uLEibtoASUhPzForcrZw8hoxj",
  "key28": "5VuuDJxpj3JUWhQnDAHPtPFTfBS7RELMhfSxmn4MwjEouLXfeyTyz3jU8CKm53PEQUvEiDd9vNyjdTXgHCDJa7oT",
  "key29": "3RML6Mv4yPSEniFDebk3rGP8VJWQayzzQEpXcWePCwE5XeZnToN2egBQRFmFm7wxVCb1TyHr6CkzTZHubiM9XCri",
  "key30": "2fCPS61Xr8ZEctJAzUtp6EympPYcXxheqL1NQeRsrpH1e5GLaxSmPRFe8Huvux3LZmMZnP6yoAjiqadtfz3q4Qa2",
  "key31": "3nujgVhuZpt9fACEHTNYkydyCUEz2415aK2kygJQGAWmyjf1Z4mmzPCGUHrY1Y7GupZuG1ke1VByx64D7ggE5g1C",
  "key32": "2TAen3Hex5bGVeGWbQdrXntCbb4XFDDr6V1dcwKcu3CE4rgugH6iKRhoHRmBMmAjZsxoPEX2MU6cDgT7y7fa85yV",
  "key33": "2rayRiAomVWoQZ2K9nEGAmmBp7tV2Rx9cbLrRvQn5pLXhAd1rH5qLgc97Bd9CMV3YDm4ka4dCo5pDgFKwVAYCUo4",
  "key34": "3dzxmNcy7uasMnnMMwVBjvKZ2LsPUsoW2NSdCrmWXu9N65zS7JvqdYNCoNZdwQSEwrrZDZMJ7smJpNLARXCWnbvX",
  "key35": "3uNqnM67qCbxqiYca1v7u59muD3WaqEMsxPpB2PYgQX2JY3gUdefYkr4eTaK7HRndvaR5UyQGzUZ2oJsru6yqD6c"
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
