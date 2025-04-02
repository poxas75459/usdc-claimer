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
    "5Cy3GeiLi6HNGaZSjoXCVpX8dvXHpLMCcHY9T93QSEWhswZWGfyfzy6EGeHhMZhZDZpCUqHCix5D9PG35VbqbGQP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3o9aEJReKiCHeRTcEcSyJ8GH962FjYmoTAHQQvJcyC2PL9W5yhXyKooiC1b7VmgD1Eh58s8awCMhFAZkT5YMmy3W",
  "key1": "z3LVF7jTBHganPS4HnZDWoHAn71AtfJjBC8RM4oHHAsGK8vJn39FrDY6XnK8MzL7jDNpxxE2G69fe4pwsQcch9P",
  "key2": "AU1q9rYs5nGR1y74gFtN1Uv3y7Qkc4P7GMd9ezt26jen2LWfWcDXVnyZS588tWMFG8gbjLJfssVPNEcWFbAPAHA",
  "key3": "2DGcRJFXKKKWoo2s3foJagWULBAGL1QZ2wa8wSPwRjqdV8QuLMGcpAYsRQz2XhabUWXTTR4NRwCt412aZ6SYy3SJ",
  "key4": "445g8ivyKJAttts3KLiWPyn1TnYL6pqDxUxJifTSXT9zrGuNykcHCWGYg912PiFDHyVd22BfGgwicHVebcRwusqf",
  "key5": "5DWqMLTuKQGhishRVC6EMgwbBxaeemdcwRaSWzeRR9nYTD73PDXi1c5bokHdqRxWS9h97k5fyPoj4Qtq4ncP3K5x",
  "key6": "41fWJ6psfLjjrK9BBFFuGg34QRtNqTzUCCifat3R1iXDUz9m39hcv21rCeRSTrcGVXfJ3b6xgTD7opmNC79N6ATN",
  "key7": "4Fb6vR3nswsfEH8w4N7M5zbNGXc4pvChCAK1hedZztc3nx1zu5thWg4oHKBYXEUuVSZ7b3Le8vEEWyKgshdqnQoG",
  "key8": "2QgKBnCCHCpch6pWvjKky8iNz12mb2Va9KGbGZvtDAXWA9K5Bqh5B5EPGYRcmgpgvD8UpK1r1c3AobWsTXwMp7AH",
  "key9": "22wnpUCBGRf5qptgCf4TXx7Jugqc6pazWv4XaDSkcKXmfFnZs7LX7jLbruDDwWPRWjdomztnhA4gsfdNwKMP7EJr",
  "key10": "27si5sMfPF2qM47x2ynFbySDhpuLiavJTvJ9L6UowBd7BEB3XbhMAteg7q4TeF44oRaerUAzmc4KBQcYVukn7714",
  "key11": "3jLHG6KZ5FweDy1jkGBPk5J9gZ9E5HH2ag2dbJSRKqx45AtK2ZUtWDZpXZpdvJahaqeESdXirZWnopujWKeeQVML",
  "key12": "5HiLnCp9bq1ikf1VvjhW8Dw5Jcr7vuspwGWpmK41x4azEHdQJVqXvKKfxwyDyP8VHkPXg2QKx2cHWAJHxYV9BLp1",
  "key13": "5t8PwP2EFny46YgSg4NdjSRTtyDDGBxU665LEWZndN4JotyBoSVuvk7jVJ6497FMadpr8smj95mqSLRg25uCcRok",
  "key14": "5Uekjo4F7GCVxdMwHmYrqqhK2fcWRKqePGSxLzykyUSRcDm4e79kBPPQuHrsuDpY2n5ouz1SkEpi1tvZ6cTY8HoR",
  "key15": "59ZdFk3iau9Vvb8V3rPCQdUQvxXyWnft5rAnjCKScaPPZzg9s4mJr2nzPXmR2LYppH5viHMVrMuAN5rfk13Kk2S8",
  "key16": "3w4vAXoo3fAyGAoYb1uBKChEDSy64MLBtShtBPg5KaST6ZePUiRV5x4udFNxsz1gG4KQBup1j7DT44c5Q8wEDARB",
  "key17": "5yYuNGRqUV9RzmMG64ya5SsQXu7g1wo3RDeKoJ9jif4VeXgqaK2LwtGg7Vym4aNbb67AvTXYmDszLgdJPJW3pyKt",
  "key18": "35K62SAw5Dxs6heeCrcRJR7BdXe9pH9vyXomt1FzHtzSBiA4HW71SCSv8zvD37GbQvfy3hutCfqryYjW63RKYCr1",
  "key19": "4FGHbRGtfuVW2SeFYxZUgJrJteejMgYagVbXMZs3Vq6GU3jwaVvYXAzZT9ahaKXsswef9waThp8ZkTvLUaVFHeCs",
  "key20": "63joR84AyBMPH6hrPXLAb8NH2xG85uUbaMxcqS62HzykwNY8XXmgt5uZJmEE3691pjY2mcwocLk769AMvT9atAdR",
  "key21": "28eBpq3LsQ6StiNKYP3oFLtzMsaiSr2PGGTcKVVs988HHXRhV1rc3NioweqsfQTk5m9nBZ1r4JKXLkkDKNfS2xTf",
  "key22": "2KNB5hNe5g2AZRzsmHwv7DKFXywuKmBresxDQvFkzsMxxUx1vUXNt9tVYHj58oBiDUFios9XdgtE55VTjaWDrcgV",
  "key23": "3rwheakBBi2uGusV8UrkE5VhcFEYpPaW3kVv7TgEKiEUpoX36JvxqVbK9M3BzqAGe4MPdkgx2ty8rspxL49vNaKy",
  "key24": "5P9esyyoWsnHEGcMuNdThuTa15BMhvmRn4EJoRdv52ENcGpwiVf5c2EMuVy5kvPFr7AK7NAsGTzaLnAs3CYa9jJF",
  "key25": "5DJ2R2iz6CBDKSQGPm8bpbXcSC7m9E6NokcLASbSjbzGSgthAvKdxYRSZj5YxGD7q7mrmY6KLdowJcNYt743jy7X",
  "key26": "3tnUMn11vcfCcNnZMB2W1Pkbf2nCp69HcLkRSkNN5EVFopHdsJ92c311waBXsRpTmwtHvCXDbxiwfurUWoRLy312",
  "key27": "5xuaytpAmjhkCYAQidPvSJH9E5qgFtnyTjdLD7kHdREd2T5fWrVo7vLH6tHjfbs6w5z9aiwrfLf8YyswLWzbePym",
  "key28": "32VtgBvdhBbyaRA68wEE5xEXhNwPy8831CqFu9rb71Q6SpGhdV2pZNFzCnAmwUCxoFbqhAxnkEBQkf8craJfGguC"
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
