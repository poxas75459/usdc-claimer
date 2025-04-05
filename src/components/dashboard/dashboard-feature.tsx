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
    "2RXDUAUZhe7npWmDbUy6dMmxytECFjqMfaUgoDBCvHezWrhjZkUqLeS6vPNL9eT3DorUKB39EHx4MRpx3AyRDtdJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "THJNcpb3Qki7SpY8B5MwZbW43RqY7enEAQbrUZUjgVx4iHWoN9ByRJgjRB4wLRhJbkoJAhzHJMDdzFZNVTanknT",
  "key1": "2EVZWt9v4xHDrSg8JTSfPDrRqVuHu9WwkbwrtuRdvBCd7wfvwom1LYmJLYJMBaKHqsiiuQsTEYgboJb5G9KKzcgK",
  "key2": "315cvsoBM5qxUhAqXBXiAHUYr67HV6q5it5JhsxcsgU1iVFWXPWjeeZKoZ8yK72xkpXLyBVHdTDM3MBLAe8JLc6Y",
  "key3": "4x5rSHkL6nmNDdT5Prc1Rf4GkcKqvixhxsJEXKvofQu9qukY699k8Xg5fTSgEyfQTPjktiQcrRYcgsd2GZP9ZLwp",
  "key4": "DKBRVg484oPweRCoUsNcPLeJcKUsCJN2nNCjbxNTotAgb5n8ZdgWMBnhfsaQ1ean37KQWjXkS6KpCkW3mFFkKjc",
  "key5": "9yiPfTksZoomgbQAf2VbygTxEZfStfhhKwjpb9iPUwtGbTWXdphkyFeRos6HTG1AX7fWb4dif28b7uQJWejPL7e",
  "key6": "4FrEtny6RfrQn7x8A3Eezqgd9mz1kh9e3U5pAzznDbiMfbfubD8FCp8anRrfHPpBeWCjRcCVi9x3sWRU2W9QDf7e",
  "key7": "2zyA5B8zQqudiEVV7sz14Cfx757KUgdzqfg2bF9CKG9MfYGSCAijtjrVVRZHiFsLceYcs3EwK4Z9XNefHAxymRbM",
  "key8": "5XhG9ik4FFFZvuDERAFr9BW8AgBRwWE4zH4EYpMZus3G3Jz1gJdmhdxVBzfVUnzDYZdAjmR3gxxGxHvF8V2B7k3y",
  "key9": "2RVk5nABNzmPo5zkH3CaANaon9QNxhNaA89eKyYFjAQ9AWx87cMqWBPuTnA33SqhdewHjwNgRve2HxR4XyAqAUKG",
  "key10": "5UweGW4XaMWK3gaWxTtpCsr1eovJhhh2JuJYSy6zNwNEvZzrrn4Gpd5R2D2dkSi9zZjWpttigPr5Z9BHsxuTYJZP",
  "key11": "5gTuavBD1ctn96SRbmLVtF5PTT7E38Xkz8JjVggpXxa8G68TKY8JoNfZZegUEyhAQpVsYLjJqw3LU4n3jJuWi6V5",
  "key12": "4qvnTH7xH92qxze3SdstokuzjJView7iaP3Gr5Nw2y2PWJyEcivmFxnGcKvms1avCVbuUMWr8i2rVr77MddZhuPd",
  "key13": "62CoqPzcWEosvFR2tWpxsSjcaeUzqMzcRZ71KpzGBmTt2gpSxWqE3D6tgPWh593Y9ocnasDLGFJACXSr63cmPbwT",
  "key14": "2FZoctLQuu3NDZWWVZwmfA6xjGtZR99Dnwqd9MmfYrpf4WtwstZmnDNviMUSztdjGvxRLqPqngAefczfPL2nQd3",
  "key15": "kKkEy5bmE6u32C7w3tCZMARKL2b78wyjApbQvZMSpSkpdwaHptnw5Mo3Fz38whMVZHojtYLx4TFaNTg2q3GsXFz",
  "key16": "2fqaa2XyF8sWzQJxZgn6CTRDSZ71kznXafARWsp4mSFaQysHUJT3i9fvrc3gR4jjqwH67zpUiazBtCww22L54Li7",
  "key17": "42daWesxyutQ8n1HrwyAs4HXFTsLfxpnAMne1iSve4HDznMU4M2VqyjKRW5WGu8GrPBRYJtACV5VrmsjCMT6Rr8R",
  "key18": "XuUELyoW6ucEF2VXBLVCx2u35YszsJ1gszWsrBX1TXqY58JupzYSeL2SF43Uhw3jHNzkR4iJNE2MLGavLYaB8Ke",
  "key19": "SfLgACH7zDuphmSV5jxHiFoubRRduLSbedzWMjCfw5ETamiyELBKvn7PyVF3jkddXu3fj5zprBkYS62fSH51cMm",
  "key20": "5huEfNm9ms2p5RaE524QepPAMPDkMZsN1RrwjqBkq1fZzYhjfAfEoqUegCbpFnpsYSLpUqq5LH5qPe6bzi2VmstV",
  "key21": "3VKvjYF163GXomzMxYu7cSaTQ9872uwE7XypdrQRSJJbpWFw2PWethSjxAF78pMWU4F3nsANgzTTpEU9RQjyjTdf",
  "key22": "a5RCiggc85BRnAZ9edPm1dFkqYyMgdiPSwf3M5wgBtFGmdNdieqqeBJyGfYhSuJFxrZLzYNVvikeNqSazPtFNBB",
  "key23": "3m4ExE5FQwnTE2o2CxHHy7niYwBvWX7JtAp1bWebFkRqj5Z5xLFfKaGMuGYu2fQvZBTUnsDmRyyzx4qLFmvUagtV",
  "key24": "2kbFwEJ5SS9oaaCc5LGDD7TEtsmGDkGLqchDoL7d7rqTcyyc57xidYkV2zgkZdHE5Gep91wfRmi3jgQD9RskUW4e",
  "key25": "3mjW3ujYjCJPadxBKPmW1obon1yEEpveEKssamZxvP7bZuVC9j5MHJDHoqMrGDg3KjbwjHUFpYCBPSAztU448t7C",
  "key26": "4sSeB3ofejD9yLPMggbEJR6teBxqsaF5WG6fnd1AigeRdKaRXXr6KgiYJARPiRkrcfUmcQDs9vJSt6t5CoZVHJuk",
  "key27": "4FxZA5QwMsra692v6fcbtYHKskZJFJNniw3JNTBbK7ruHtXxPfWRAexj3auFMrQXmVHkMJrfTxrxLZdUf6i9Xppb",
  "key28": "2x5NJ1maioaA9WyPZUzodpUTZuSXxMtzZR4SK5PMfrqHdemQ2ycJr6kKNdnh5LpLqoeUDwFmMvWtGwMUwfAVoe93",
  "key29": "3o2vKr59wmvF3JvWxbsR4XMTh9mnsC6J7cPpcMsTgk7K8DvNnqh5JNTrxzobDpFn4eiytnQN6iTUhMsyQCLvA7q",
  "key30": "658yZGQwvNK32AxBbh9W7m7zVT45dv7R7dexiykEjdG5pbPNG7ukVGaQtkXNrhu82RJyEZZLVesrqfoYqAEEizVm",
  "key31": "Fzuygca1rMcSyFEE8KQxyKnXi23oDYbUAt29UFwehLZaZXVr8YozRMHQp6rvhWaLiea6MfQYisDedurwhHCKUtF",
  "key32": "26A43QkQhBe58eZtFGejyL2hpXcq2SN5QVmgGHHNENjkQ6V7Sy82prTBM6CRwgWMhgs4MKRgC47uPa4K47EaZPsN",
  "key33": "hqPzm7vARMeM6cnQ1An5qZicZnbS8AftdNBcH8BJzz6cj9R1ixeduT9zc1TF7aB3A5iaA77xTBjspHkcEb5ZP52"
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
