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
    "2AJLuo9993AenGZpgJQnXvnxw7kwKESXSZBMUpwsqSPnTFF6TiwCwQ8oNwN91r5CMUW2EZFmr3aP6KYdmou1PH4m"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g8wRist6pcKt2kKSaegy6KEktGbBCvgMZauZELBnnT4GzwmEXLMwjZwRGwZLJTNKJV9BVi32CeXLHJdhm76Hd8L",
  "key1": "VByQKfHFkoazbHAr33f72pZD1FsNqNHidP94cuAqKEAd1xGycufTj71QVYukefRTrckMdBHoTugk1Vq17FYubuE",
  "key2": "v8E6uvNRgy1n2KNnvZ6bKNrkXsLi67yR6eC2z74XATaw1xUZzer3grE9KeHFMzNK9482dixv1encaTtbXDvJA7Z",
  "key3": "26eC9Vhabupz63nqYSrV5c8gGqizatBgVi3ot3iSpMW3a9Qtot3GV3uShp79TpxpWnxgZz7JptTHMb6QK5us9zKH",
  "key4": "52p9hQr5KTt8A8Bt4vtrg74z2soh3z7QWqtYsiKa5UHEvTe9Jv334USSiYbxA8QeCjZoYPqYaJgFk7pMuNc8ShQ1",
  "key5": "XEGC3WYZMNVUvXUXmgw47wSFj99XYNGxCmVRrbbKiLa3aHQUXnvLWGitYhyXUDhMnhd96WajbZHFTBcixkv262v",
  "key6": "2cDxUV1HjH5awaTQJ9ZVTFLpYfBM4UHL4Q4FFzHtGwicCU9Yb2ob2iusFUsPZhKG6ropLUpas61hbWuqQ1VJYowU",
  "key7": "2ZySag1e5NkUNtvR9mnc5qxw2k2rbhdHY7TJuGK29aNxyECaNcZTf7uU1RU4DWsFqtrfgDX1SihESFcmsy6gc1b2",
  "key8": "3m71MREReUxXKnSztqipn7o4MnGpbrTS9ETmNtrbgdfcDjSGynx37tmfwMqGf1Pg7Ace4QQex8Py1Dv6ftdCxGbb",
  "key9": "3TEyPZzYmwwFVpfvbfJGfnAbafDDu1xWaRUDYdzGrNsudT74ipyawmDooBoxZCC64B9PW5Yy2L3PXv426kZrKBgw",
  "key10": "5PhFiQwqTW1SBdt2GXCRe9wdJs33tGwjvAMNWCecw84mFxgSWDrijfXMNoHJAQG4bfXHjRZe49VZGEmK9hRiTykZ",
  "key11": "44MsCpDDPQdUs87Vk9jzUpKieCzwL5ozkMsvHYAZkKBtnk2hgHusiVwy8QfpXstkQgtQxt2ABjPcd6JeK2hVnjNs",
  "key12": "ph3hHU3kktwXox4ArkT4ix7FrjL7Gu8aAQbSmp9QosVpp8Eq87z2NptW1GsLuj1tbB2bjEGfL3T9zjbrbmXGd4N",
  "key13": "4BtDEtdj17rkmcmn74thMWksZx9pvbsu3p59EngPXw9qqkoxXqNRzdxNoi8w7eZRHGiou7YBA6XR2For7M185M5V",
  "key14": "5d4fRKJLqYqSSwdoo8pENRRB7t2cVDoSL8Kh8qNEzfRXrKyVA3sy5hd7u2yH4tqHymVwkFYw4jNtLRuFsWK6BpDx",
  "key15": "oEHfxA7ggQPjwbM184QqU359QyK7w1goeU89XXPZpez6C4HebS2GNsYTfvBkxyVxH2YwLBjajemHi8uBhzbEsU4",
  "key16": "YGeK7xMGaYLqFmH9eS4wiCBUiEW1z59iKPRRDdQSGckcHBQxYpSaJEU16unBUxTEE1R4qeGJ7yZpVQpbhce6djX",
  "key17": "3579atngDrBsqN21TX9LMwcpmYhyXg6TXbCF7PQjy2YyQz1NH3uNouJ3em5ZL19NCp2VMGbgUzNZPiFgicuqFMMQ",
  "key18": "3QEyKgQ3fcNHyfSEf7DFvq9CTDGxKqgyjBDjiwz21QzXABcUwyooYgzt9KpsUck47xZUQnQVh1iSeywRdxtSkoGq",
  "key19": "5w9jitvtdxG5Yh6iWH61pUNWVUfr3cdbd5ao9jwkivHuVmyTR3Rd2Ak5tYNwdbL81mqA11RtbNoDY5HmkUV4uWT2",
  "key20": "4doyteMVFW9cDJLGVYwReTKvaGcyfvw6w14yj1f2GC4JxSh8Vs5DDDSzU5PZd4q7iHbGWfUm9miA9EaNAZEWxc6g",
  "key21": "3yVbLuneKyub7aSwGzB9qZXBuVpTmR2RLzDALdqdwu9nAZqYHvNV6XrS1CLsmuSyaWs9ho1uFA17MTqyJw31rxS4",
  "key22": "5ShXTBymaow9VekjZGZLRzWkeXv7L3fG8k1Qf9FVPsuc1NdkFvy3HgPKTPRaAjWpi63ha3hFwgwE3Gk6oKn7vdPA",
  "key23": "PiYRhqphx6Ngn3FQn5oJX8JEtCeo3yYWww8xJtAjX194vRGpcpYJqQatEb8UdwEUwqDJ83NPNNh6HPr2AMhMDTD",
  "key24": "57NVGRJSmyuA431emx7EZAZL3KQujg76AyUH3hRzv92yaBJYkHMZtnh5HgaKtrc1r6zz3R4jRmvMo5vL7X9ZjidC",
  "key25": "35fdw5BNtZXyTMJAnZTuGE3WLYH6v8KxKQidQUSTPjXXbtCM22YTC3ERbAkzbuuwySvTGYSYkRbsfi2Zwt9AgkvW",
  "key26": "Jxcsik3xJUsUhMoCYBNffLKm1qkGX2sS62Rmftjrm6DSx2RjtEQQGZKrbSBXH4Uiwzd5QSQQZ3H2TNB7nk4soGQ",
  "key27": "2mqCTpuADZb6FCMkZP3nNdETHjAdzkFYkCKeimgR38VDjU82j9bamyGYsEEEiSFp8nuoeUxoRFJKhYYDm15w8A7n",
  "key28": "5porg5gGKaFcUFqCtU7Ewxm6DX1PKsidvNx4V619Fnft2uNpSmoD7LK9LPWS51hUYYUbwh3jEEyLGCjxtCFXybX7"
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
