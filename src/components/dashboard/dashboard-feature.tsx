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
    "2VgD1UEZkrqymjWePYCdqwXQtzUYHUeRsWavjpVcXeETpQsHQW6Yx4mCp9yj86jsNdcjoDT4JvWCKFHY184meYet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Vt42pAZWJSCZNgwDYt5gAiGHgzQEaAsmYaWuHnxUJoGg3gq8DxbTrhoXDoezrcCrMG6y9hAZKLAtuZnZJtdJGNV",
  "key1": "5jxHknmjtJCZrPt9ejGGpTFJ96yMUzS9F8Mbbd3jqM4sV81tFDuBJafNB6MTT5E3ARrVSbHo5BaejaRfR4sKVVU6",
  "key2": "4J4cMjJAsxvqkvknFNmvmpq92Pgt5ALfByvjvDJhaC61vP9QvZdmoJ63mgj9TMEAGjNXtwNAmsurfqL7NJm7fAM",
  "key3": "51pNnAQUUGPz5pAAQ9Q5jtfKc2QNnjPiesuNdY7ZVYymxNf667wdCpPX1KxfirZSPwpWKgF79QTXGXGLQzt1bru",
  "key4": "uKCw8KfBDKtNtMSsmLEQEdsxMV6gd6o5VfHKVgXUpsyhG5Urh7J5ZN2LVqQFNUHJNi7Mi1hiGUJ1jw5MQobCVYm",
  "key5": "3xd1qcnw2vGFjGRxTZobCM6piF9zkLG5shJNuAxaw1tu3bNC76sdqQ2yDsSLtXgEWSTkjWA2icS5KMVnwDu7Qyix",
  "key6": "2XmLTQiMzU9sfqkG949DczHLjkqVdJ9ejCK1BS7HFLK4xdYYPS2ZVK49FZWJ5j7PL4u8emxTGNEGWBdMAGuRtDtv",
  "key7": "2TeqNJrc3Ui2MEsoPJ3s3VBM4mcSxtVZzH46cf7XyZvhtX62e3DWNDo6xkSMntkDAyMMmbyhRyG4trPoRUrvxDfX",
  "key8": "5D3DytBtBfNdNxd12SZSfNH24h26cue7NUjidwNGDt6yjcn14TasCJbwe6wsJepXPE3ZVnkt8RwejQNZdDuyy7Lp",
  "key9": "4peTtsRsSwdtrMQZb3dErRVcMEe2SAWxzGioDnR2SW1UGJMfV7sTzxXSrKnSJhgWx9VLmSLPaGkD3bMGahbRZvef",
  "key10": "nq4z6rzzmtJ9uVwHZBWopGeK2Xo4w7Y6kQsWZxSimz4Yod5oVWvpuhKy5mMn2EppwNgf4kb8MqdG6rsoSZpShCA",
  "key11": "3hoDfn2vmNyg5bp1HKBqU7a8513RXVYYiABGPdioryWBqgw7LURvkkkmF5hPYTiWXY7aCeTj1XLkWfFoLU56CS3f",
  "key12": "53dhi4aZvJEJ7ytVk4NRavdmoBsHmadpaP1GoGfG3NaRWj58V57GGomUuEe7TBTPyBEzxB99DXNdCzPScDH646h2",
  "key13": "5f3kzKpx1TJkhUWQHUP5soxjjeJ1ZFKwZpZLca5EMoiWo3pwkCwMispu6CRzwdRCtV2BWjZjLx4dYgroHhLDHG14",
  "key14": "4vx15CTx2sPHVEXF3hPRXyCNRtcTw7a5CeoZYw4CJga8pR3hgFykWTJUGyUxmrMkrnJRQZSa99Jq1A5R1KUpQp76",
  "key15": "5wHCKSzgMaG9xNoTjyDcadh9c5eAS169hvbrxwmXy9sorkXo7eBYbQ575v2wpgHyNVb1eqoSUPMtt8EUkm4hwkoc",
  "key16": "4knCouBEXMbvrCDnKdVPewJjnyGjsbndGHCPoYuA8v4HwiwFf5usgV2mPJosqZyLaALAkiqBHWQDXoUQd7LNPoJs",
  "key17": "4kSSfmXaAXupEXJxWpgYNUjcq1fcrMmdDBtZcfW1gLCCTTJ8LvaKwWRJoJozF8My5xZjGcpAZembSZhDwFKivSGf",
  "key18": "SucARpJUXEJ2kABE37iL6Qb8DuE7sFu3UJmPhHyXmTEJdC7dqf7ehMPv9Htbc26p3QoTtqKR3cBfRwxSfseHrRJ",
  "key19": "AxQBXYCHtCCrpis7JihPioV4c2wD4N6iddjUtZDoux5kmceZoCdiARHre3GEeDREiG4uah1hyeWCyW3m5Y5mLo6",
  "key20": "5VBvucXgcgDCvKNkwS7NTsDCvqVcPkE5KfEinTYjqCQitGRqW3t42GvMLVxQLDtsGxGtaMh5juTB6bTNuuZyAEZ6",
  "key21": "4cW5ohSoQnFLfPyiWtae3XbvddLoS3c9eHZtPd7CfCgRu6mjKv1ZVUk97ZsDoERnHoR21uT3ZKSGqxmSm3GCTd1A",
  "key22": "gNHWbAwECYzM55YHuvaqb1DXN1rsrK9Sw8JR1BsEKfE7B7bfMLw27PmjS8B1U2b8uoG6pEWwc4qnSmR9PShDhuS",
  "key23": "2X5E3dPCBowBiB7TG4jHzpvrMzjSCjgKGdFNtaSqyeG4Jb1cnRVZTwsCvmn6wYV9SbFAvCLyGuTzuCS1b2btqaTH",
  "key24": "3zGX7iRBKqZ6bmq724XC6tz9wfkva4PRXXEyf6vtS6UcYPR12arDANDYLujdVDeScvBQbQWPJ59KLc1zn7MXkjD",
  "key25": "3vq6DtzpbK442CqA5bFEQwDJe551PPJ1R6zS6jxqAUfa5crfDNYGGRuXFA1TwkNfE4KYk4YBPyheK9QBaKFAzUNK",
  "key26": "4ge9H1V2P2D4hSwSZ2Ueg4NPTQvJtV1QnrxYE8qv7r7NW5P8CjsCGpEECnyQCEATJc2XUtfmxhQbKwUtjLsxtP1q",
  "key27": "582iAEKMLJSdFgDoXxKeyy9qcRcye6FjG5gKY7N735RCjDaTgWwzNQrQ8E7H6io2Bn6Te8G175nxJRpy5LGJkowP",
  "key28": "o9Lv4QXsFqnkmkzmxsGQb8JnbvaN6XuYhETex2JRtge2LJUvx4L6NjhWSVZr3Vnywnb7STBaBSX8YScnJPeVrh2",
  "key29": "5or6nUMjLpNo5C3P77qwaJWeBpTctssesNxzn4KRNPGVxGea1mU4z7def1kd4CjSEZsqvRcSe3rSLkvxg2w3gphe",
  "key30": "5nJ9nE4KBsggzssJKiJ4wfgzuPzSJAo2mHZyT3ruRopr9fG1FH2LCsxQddrfuFKYimXeAY88YFBuFyrFFXEoHrRs",
  "key31": "3PNBDnEbqS62aYeKxfa6kxpe9FL6xfit6k9kjDgwsLKY9PjKqkDGyRPACruCc4Zd6HC36jvPkJ668M8MZHrzrsRX",
  "key32": "24Dxne78sW6i7cFZGBU5v5b5XMFT12YPUQVrejAHQ5LzHuTTAFjjARFeUy9WJ3XqFP7ysmSfqVmsYvjTYJakMkGY",
  "key33": "FxVcvNNXiZ9ate6EAxzndPSNuedwgoGBVUJPAzjmKkNr6yJjzegGDcKPKugNVt2LRGvXxsbNoEoAKq6sDma8wU2",
  "key34": "2VsnaxoGLo2yvkCToWfUVmRbvzwa9mrQDWSJzcanDTyd544qbGtDvq2izHZc2gNRmSqvUyPKBKzwbWNzQqmWg6Zi"
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
