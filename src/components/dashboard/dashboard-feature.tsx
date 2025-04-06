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
    "3h7ZN1vYDcgfHvHMErtt2kKEgrBTnHFXaLdYzc8hprUp6YNH775o2pxC9jwPHn1qQk5S72v6EapJt9AiSoBKoh5R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5m3fAfkDjEvcGFmeXRieVPXdQKrBoq5mHb3dF5cs1PHobcNy347AFBk1cEhSE9tiHQ3vqtc1qgiEJhMbH8q1bfbu",
  "key1": "2KR8eT45sf6WMuLR2nke8vELdLthrHrGTY5kLWyssEVD2n1hMbLxrzFx94BcoKQa1xEiYEHece7opUwdsZVXKFVE",
  "key2": "2dtnGWSaY9FqbcE44XYD23yZiyRHrz2T3q3r4pzxnJwwQySd8gkw3EJZTaWZF527X3YFuAWf5Gtn99TMn7f21hMX",
  "key3": "3u2BrSDHWVRG8uJugnFjaJ6g9BDGbTdRm7knVNynVZQGfGVzSvuoBdVF4BnEyUUm9yJ7wWtVytP1BAeZkRwnt99v",
  "key4": "5SfFA34HjEenr5DJW5rdZg8iftBPhuzFRNhCMPtynN1v46ZQBzVdrM4vqH8o8o7vp2EGnvSsPMcrQRHgdkzhCT4r",
  "key5": "55wFtRxMbG1UDqFRaSFJ7GJr8MeerABGmjfQV1cbo9EGU563eYzejceZoY5QUx9oMSHKTXpi9PTQ9gHSRrF9MweD",
  "key6": "3AA9W3QwTWC9inZCcKLZWYfMbinKq4Apq3sEqGHjcua3qQszAF2sYSNU7y53wxVTvgC93TNpm4mqPhfHcu8pgkzP",
  "key7": "36vFJ5Y9KzwhnSLYnk59F1Fthko4ynbSmYvwM947z9fCAPZymkszv5h5EgHdCzCATqiaVaYJU9ii3ttdVbR2JkP9",
  "key8": "2VmRAKM9DDbQP995bRs92QkayfG1WKLwVYB15jnK4rMGh2vPsp9c64x4Lof2PwbmxPBL88xzLAPVqRpkj7iiZkj5",
  "key9": "4VY6Jem7AzCWsam6aoRsG1M1QJrNFG9AWXu6DAzNSr1wdHgczxXqmGjTokapzRuZZY1hURSNQkMyEFCEsqKA9q3S",
  "key10": "2irf1RgvPhF4kMzuLepnsCxK8EwQtuRtjsb5pRBySpuoufFRH7tp5hBKG7bskh4EvbDMFXQJn7BSyCpLER5A1pwS",
  "key11": "3h332w5PunKdQLD9Nq2pN1CVWVwvpXWQeGx2CNgrJ97NPaVNoM5CkQPqLA2f1RpgPm8dxsjfxpa7kC7qw99VHuLP",
  "key12": "5TDzjNwNs3HJkBdB51o9LR1Tm7HCnza2sqry7a2FiptZBYCHJ9QYFwESg86fkME5AfVHPMCCT8tNVcykpfBctQgR",
  "key13": "4sJyXdkMCC5WVe8zhwaeYsGeibnS2mDgBaGWDN6Bvo2cmMRY2Z4WYk8f3ECReTBVjvfovKcLvffS73fmZAQKc58q",
  "key14": "32o5dy2nc2M45cRjWMB2huocxZR4wm3A4aLSNnW4KVzCzNLbQLCym452qKddpMs5v5w98GfnfdLdcGCW7qN8Gysi",
  "key15": "2HEavwNazC5CDscWSnFJSnhdMdSLnocceZuhjrF29nwXJJKKJ8JXnWcLsJqFSdzbbHQfhnRU3NXnkgWEiKVTQE2D",
  "key16": "4bzHFmKwgTgBqGfgXhEZgEEf3EacEob7D46Mh3sP6RFXPKoEoYehiKnU7FUeq9Ght4h1yH9jUpSMeMZddrRagnhk",
  "key17": "3DjzytajDpW1ETxAWoyPaqgMroWYr8DeEfUfDmaFHTnVHTHSFKAdcJXtJywsyr8G3a8MwXCZxy5x3LuALJLiKjxb",
  "key18": "5BZ8mCoF3uSFcTbgPyJs32gVFFFX5MHg14kw3dSfErK9sq17gV4LsU5n9zyvwHKmLCQqdm37vdxiEr3CxbgjVTaa",
  "key19": "65c1iQnPGVDwLg7aWV1frVyCyA2CxTLd3GxaqQFbMvPvYPnJjo6QMic8uG37q9jDbTrwyRkaAuoCPTLpoWCGSPSR",
  "key20": "GqA3UrZ3ctTJsZP2DNe1RXGcGzdoA98b4PXE44CbpYBNvXnm8zaT9hhHpJu61aisQUzAwQvpnPLW8RN5S7CXNkR",
  "key21": "5KKVgSsFXKLYzJi4DcY6scS6QkjuivzUze6dTZi3gHbAxjRmkReDdejCDvrGirwuiVD5b3ApZZ5qzwRwNAaJAUrB",
  "key22": "2qEM4S3KCFKNKTBgzCfu1rYkpK5EchR8uzavwVwpEF4qERgEHzY3KuXFkKbQ5thLwS7hUCrZbcJp1AK2nFPcjsTL",
  "key23": "8PWTJ6W92mkChfVnoRvkYS5XHVodEh1cpJuLxfWzxj3AsWKvY3rX19f25XaspJKV3YN41DUetAGGRz5AmXnK5D6",
  "key24": "2CzdspE53aESDVnPdP9busoTaMoZAunjWnvJyu5nnVJzQq5jYxJCq5CQe2pD3q2DFGNN7ic74sRtvdnj5V1tieKG",
  "key25": "2LF2TxV5C3dYRYqMAtyGJpzVYKZAj2tQtRpY1vR8xKTF1ozMd4e5UeeSKpjYSiJ6unsHi61ztft5K36geP2Lyutb",
  "key26": "4qKhuXavNVuiMTqCF3HL7fxdyqBUTJDcHjeT6NHvUYCdx4rJWf66pAkb6mwqbxuyrsNCicZpyyGV1RiNUFdPyiZV",
  "key27": "4nxqPNCJieSSEXvtE3UPCJtyyxSviCkEXmXMadNFKk5ej8MFPuccQYTUPzKSRMQvkvYbDVXMwBR8Q4ooLSJ9jrCe",
  "key28": "5ZgNCDtftgM5WNRJdQupGPWzWWwfnZxHNXarZifXxEDx7nvswMWEjtvhV7iVdQFZFG3Df5wToyULULrZpfWZRw5d",
  "key29": "49CJuNwN3X7MckJWjNkan3dgjt9bnTFHFQvoHZtg2jK4SqsdiZp2BEGeRP5hcX27hggX9cs5YwKyJQdPa7bnKxqZ",
  "key30": "4yCP4fskiZ66azeVsUUFrPBrk2YjZRfoppbFTWKVidt9pVr4TtcsHomavKSeiWqsgUqGR7avAz7RTHWmqv1E5ehm"
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
