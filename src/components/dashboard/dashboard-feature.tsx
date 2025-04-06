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
    "3qaFYHidrFQSq6EXcDDMoEF7WeMc1wdM5aKm49yBYwiXEEUbcGhPngAMSZNtqDD5P1VhF85LcuDyUNF6QRHJQP5k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EKMz9Yq3NXky4Wy6MxtfxjXiKVZFR3t7z8WAFHc86M3zX91pbP7UHVWvdKkd65j1fqES6yyxWvtK7dmx7ijyj5Y",
  "key1": "5HM2Z6SWNnPnRkmUSQeHRsgy6cy2c242cuofWLj1dscxW8XdAvGaMiLNvfHKpoboK7ycFqxTvsxbiGBqvkvtPNvC",
  "key2": "4DBRo8bYV4xWUFszLrWXqAaBL1Eq1kc8pHVHtgTTrSa7wAjoeSDWGAGz5jKusd2oqrVPoH4vKDUs3dBnNYtHYfnM",
  "key3": "2hUZWZ2iEU3CXugqDncksvPzGaecSSVi3YbSyp3tUxqBiX5DZBFVBwRNLR96Nx5q5RMczAcaepTuiTn5wz98TZSg",
  "key4": "3MorMoUoj7YVdH7aJSLSx5ii183ZVvZuDpt1vV1D9dQqc53M18pH9fBztfU2cJhZRKBrFXDns6Q3HZhR4vA1tQ4x",
  "key5": "5RbwtE9xN4gJXPr1y8u5zMmFwCnSNAn16jtsMCsnvyhSSomDwQZnPMmpdvEAj5Pf41LBnnk5vGtgDYrcxAFVgwcu",
  "key6": "3Lg7pdn8h62vRYQ5QNbQK8rjhoqchhmoN748sQAVi8arNdp9q2U38WJ1pjCt55djVsHUFfcdyVCkA3evtHaQRMTn",
  "key7": "56GLSYZhe9UYrbTHnjF6LSmUUYFRJHxDdDweXkfAqpHUwkind8Bhpexw8uBkfBYnDkXiqKH5LPjHx3Qp7Gt3nZR7",
  "key8": "MefiX7kYvoL3RgvKkoEPvLsLeYtMrpT72V1MkPoRxfVaCcgEJ5panW8tG4tnLfXZtfeK7w25ynk4vxZzR7J98Lo",
  "key9": "5MmWJ9unfSUcV9wbhDEY74GKf4AumcSMTvkdJc5NhaMBvHGmLyzSoUjZwYy91d9Y8EhKr8g2akJBucLYpEkvqAzf",
  "key10": "2AsHHsopHEyJ4dJCaidgr3oCG9H6WndroHMWptaxhA3Uy2vFtFkGnq342HEbCbeYyj1D2Da1ydcXW7WzULoxY4pk",
  "key11": "5pJDQbAfzS9tum5oKYDNoUayzv89xp21FHeAgETYRDhHsEz1vKiBZrESDw4FiGtH4FknWHmFgVQ7dw8UaDvpyrNK",
  "key12": "4nYzFvmabtYJuoXAhtxFH76fnRsjz6KCq3r5eSxuwqHBDaNe2AN7ASAc9t7ck37nZiYM91Jr8frUzZafbfohAnYM",
  "key13": "nHQhXq6jAxMZxMKhE6KKXy8sA2zEZynsVsrAfpuUck1c4WmnNBdtLt8UPqyNqUJ8Quy653ttDubvxrYWkAitMnK",
  "key14": "3omM2mHjTvT3ScADf2pLxCvWu6kePPFXjbrxMfFoYdgnMKbdpDDBCXvFdviG8jEUg57U41cDjzywEpbTrSThyUEF",
  "key15": "62dxPdyiE1F6U68sVi1G88kD1QAdrR4wbnK2u3g2RuXY8s1coj9BcnNKC4ipUMqes6Dkww97AhCiGHN3BDyfopYT",
  "key16": "2QQMrJv1ENd63La7Ww626yYZaXErakympq94mJqCtiiSwz4TJ93S9fgkbdK2idNBz8C5EEMTKbtK8Cg99N7oShiq",
  "key17": "4v2q4eqxGfAdH83vfJrsjv7vinqphjTUYRnTmHQgjXpmWNA4C7ap1uxrKguLwgn22K17ZQBx87dr22eXXmd7AB1W",
  "key18": "2HB8gEtewQr2RETTDM7mBM57YAkWHE8sVxGAvU4B2ZHsfALYBQcqjEBEoFEfrTvmxFUpfUYUMAT9t7Q1YY6hcHo2",
  "key19": "4WNSCnm2Z2qvZMk73ojTmeNgDwCNrktK3cJY2EvTjGrXFrcMuNAErvNNMyC8j7PJHBcXs8ZzFwmgfi1YxvPTc4pz",
  "key20": "2Fk6yx5SgWBgemu1SaiArXDKQ8xQ6wqvTgmNdvoNecvKSKFKVxKrDUSdjQWx9gifgTqM9SPr7vRE9CHPFPHFpp1A",
  "key21": "1iqLo6YsAbQtMymt1e7BYtuaTa6Xus6CJHsZ1sbKb4E6iWW4TTEbvg94Q1QZ34G1EvZaVPRfjPX13Trm3wfVv3o",
  "key22": "5H8JfBPmKkN5MoRyaRJL2y1q3ZgP2zHLzN3VnZ1xjXzGcQ8uL1ToYfTBr9uz3Uw9u1HfsWpK4Y2h3h7n84HYbktq",
  "key23": "KUdvn1qxDVEQfw8X4GBwBfV7vDS4tfNc8Fm4vp1cWtRxovU9iNra1gPgrPc9LNtmjz8HEVDB5B5ASnDbnLJbh1u",
  "key24": "41z3XPexKuD4itGDVzUDEsaVfCdhJeNSAHERu4Rp7LeqxKSUN8mfmAxYSfTXwJiJeAtiQaCrd8jqttfmxXyo8DFB",
  "key25": "2L636dy7ifzMeM34be55JTcK5z3RERVA3Vus4De3JYYUZL5PwGbP996uquNLWH8Qwnj6rD89y2GS3tVkU6YLsd5F",
  "key26": "2Dem4qKMxkV8ToMkuveZVPhthArVRdiweTkScn2Z1mCgyLKs5Q3Het1E7SDcBwWabgBeftyRJAnSA4ojepLALT4b",
  "key27": "2txHLwVyt5tu386jx9zf1915RgtXNvKyN1KfGcckuRNRjFZsz2hT8XM6oMnKwXQDe2C4k2zSczcppMfGsCTvTLZF",
  "key28": "5n9XPyyw2A8ErqHYC1tQpLcPoKZvVsQ78d8LCSgVktovnA9csK1M2zLnjiLhZaPWWB9NhTZW2sSs6rqf52V6L9WF"
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
