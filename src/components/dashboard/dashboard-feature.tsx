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
    "5XGUeHsau9BoPteidf1ae9yt8yg6C8qfopWDigurHL2oMi3enT4MJpZs75Ap1JdhbqskCQNFRV4hi4FeSEZhgNxz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XGdifCf4LPqWMa32LDxUWHABfugg6Dwq852yZ7fiNmGj6rwzY8vpso2tJ8b1fuNE7omJAfY1KRHwWv7mycnWn7r",
  "key1": "d5qZeVhrYiEK2tzUp1cNYVSZ8VY8jWQ2cLae9U3KaynLMY6N5LiE4rpgADT58as1HhUzPMwrkddrn2rWziVBkMX",
  "key2": "3w5w8BzMuMWXkkE3NqKHBYGBupueZfS8oTJ7EenvrmjZqECRQ3J5bWJkSvT9W4WpKJDVXfSaBNUBb5KYwnx9WzMU",
  "key3": "FKGXFBJ3sVmNYjLXifdJNrv2YuN5tV2z2w3cyZF9koePSZ4Xa4BozrkbL82MK4XLxnTBJd581SqqwqX1sCRWPXq",
  "key4": "jBwowRP6xnpCPX3eZSxu5phAj1mN7Mm6EC5yyhW1fthqeDFz9CYXnz14mgY86Gm6eEJTvS4oCBANowt9xARj9Jx",
  "key5": "2RNNJAdgXXMGAXqGrDEmH9tUNwgR619tmVc3pDRh7KJxCwDyzfvS5AmrVJYZjUGz9HLYACwVRzCnLdNsriH8grWb",
  "key6": "t5BMdFek6W543SFTm5J6XRpgsJxW6CEnGfGe3fTz6hwuCba4eJLLu3zZtSnERPaj3neiLJYgnXCz9VpBwBm26tW",
  "key7": "UL8ChtHbwcZTKhfG37aB7Rxc6vCht4YoWRuRyDwzZ4gNVPSkUEZRke5DgoGguNh9FbXUKpAAtNwGrircWboHfi1",
  "key8": "3UXnPc2kCVDML6AHwLmbvFiU2CydNuofT6EDgNC3wE5zQ4wfYdTpzZmF7NwBVnpD45ofmZw7bqM7FN2yBNbqDj1T",
  "key9": "5Pk7DrC9JxPu9MFxnQGpXt3aSAxJp4vC8jWBD79UJZhJ5rFmmocDjGP4RLBrfTsjwQUsT6X16vXMk3zu3nUMH5ZE",
  "key10": "3VfzPigkurz3yBa5JxjVXXabh9UvCckYqHpJPVua5jTCLizvNJDT564AvoSJRMTuU9napE5muX7ykWGZrKqN1UCY",
  "key11": "2E4i7wb45H77kiHo6b2TgrwQj1UG5bRjGkJ3oJqaJuctY1mXELUvW7gfdKyfcxuY7iyZsCk5cyLQpmdvGVzwJ4qT",
  "key12": "52Z4pUvVPFmHK81cY5BMgEaKE7tkfXVkBADfA1FzSM7GwduvVT2WxaXgmXdAR3q3i7VqzJfW8iqtnywYBU7LxvHs",
  "key13": "2VpUdSLYX3TKw85ucgHYSsEGE6KoWhK5g75EQs1M9Jr1w2M28R9ftP5y2AWXTqdRKKqZ1eupMzZim8RsrAVeKFAQ",
  "key14": "4TCyCyMchmZBh2Aq5SDS83y8AHwCx72TtZhn2aug9Fo7UHxQfMZJSVXjs8rsXVRYtCp8vyiPgKocCmifWoiddxTn",
  "key15": "DNt1FF6SyJqwsz4BUwFxKB4atQAm4dqbV8WVFYW5zUPZRT1BEv2VG6vCB9eT5UHmMpXPSzF62tjLFHpz9fQsoSq",
  "key16": "3YmNhThtq6AGjCMrKPy6AcVMxtNBtqbavsd86Z93XWjpqBtN8JmESQDtiVUA1pKnhc7nBnCRc7UyEFUDduSYknWr",
  "key17": "YfVW3pQHD5etZE1GnBcqyTdUFRnPZy7atMk31rbq3wjkJReQZbGVMMqf1CL4YbbhLYHzKzr1bRfwUubFLwQee5N",
  "key18": "TeNZDyenY37MEe9V51vh9yDZ93cFhD4hkaUBQC8ik8n9LMVWDrXX2jsxtcjNxdT5CykKU4EsryATkVCE63Q6iWM",
  "key19": "23d63bTfXxWBKKhmCdtsaYpCQHP5mZuuKNPRAWnAeX45GRX55NN1H5XSUzscvmuFwabvyZnWqNY61NQRucoPvSof",
  "key20": "5eFcbemwBYiNK6oBZjuvp7U1xf3KsdBoW6RSdQSSsdZ8pvyMXfp22udxF7843ZtTreHr1HhnF7xw7xoHrbvk43qK",
  "key21": "NTN6TtdvsY9TdG5KEvCZpECEaXnnQwKjBFuq525dftND7sAax8Auw8bpuQusceNA2PsNdn91NVrR7o1CkiuGYLD",
  "key22": "3ri4XWsg2Sm3zVh1HRfH7p92BTbo5kynQqEDFZHGrDvVTqXLhjJqicS6jPbzuWAhGKg2hgeaaocbZTRGDVyx21t5",
  "key23": "2H2DXnwxbtFE5dmJaW9vFa4ZNkz5qjbuYeVKDtnDW88AweerpsG5rzfNPibjFNHjWX1NSe8rVjV82MzK5LRq1Ggg",
  "key24": "4ABBG8hVJeQpgzoZh1XrFchxm9vNxmMXT4y7zTSygiowC8wDenxsoq7MPpgBELJ57boc6msNJUXJDyLVHLksD3nL"
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
