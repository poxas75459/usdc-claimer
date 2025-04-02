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
    "C5DjhbEraV6SJrExLyuzuMD5q7cN4wRXcbhxqz2B1iZYhnMb4qLCoCdoGNFgErJjVbfLB73CGWq1kCWCKL1Dwdy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xL5FMxwbQ72bTjoy6iqrwdpVA9iYGRhZosZ7zUFpFj1eDnCysLtzxYhFNPqJuBKyJrSWcj5Hwm7KTNYx2dVPrfv",
  "key1": "4zSiXxN2Rz164EyPLhHFGMH1itnVHwjHXbmuJpRwe6TF9boNxATKSaid2hmZ8M72PfQnedyYj3Fgyfce14rXvwRB",
  "key2": "5njYtSshHQHzgGLD19M9XzXML29ARuE5zJj67mLSFBzDNq8Jup74dbpm1MXMfbKoMAtV4SKVDBWyc9DYWCpYF7cV",
  "key3": "37AKuUsb7CFkiR9B2jfkmdEyXtDNWio9BDFYW951bZHJ79ACtAhCQXiDTRU6pA3c9m2LfKvxrnjCAVsjtxTC6Raz",
  "key4": "s618ECaqZAnyhqVyDZupGhHZCvTBycA7tJuihvhus7we2H13dSCrs8fMAAWJywkoUuJiSqSTiWBmVHX2njhKDA9",
  "key5": "3EQSHhsuUiza7BC79BxX7fxfCWdoum2dCKKsG2RQKRcz1TMnJvPfp67LvrYPbbfNYhzh2NPerttfcxTvVdb6Bds9",
  "key6": "YCFU3EZfxtfWThzsT3b3uiEnNPT5QtdBj2246soaeQG4xuiFNgGYJX9zUh3phfC41pmwxWSry1ZVJG4v5yPVsgr",
  "key7": "Swg2muyX8udqAfq3ry5cwHKASzokVSx2TmmEqkHWbnabYcJh5FMtUNPngj75f2wjgCNtgubeAhp9LCDj9Hd6mNe",
  "key8": "561VpqMHczdMZkDgYBKKdtWjsMCVBsSrPqVpRa2sNxDiqXRqR7kw5hUtHQm9TUCVESZpuUeXw14iDTygdwcwjwjy",
  "key9": "4SFuaxCxYhim6p6aRvR5sx5xa7q2dv4F8Fq14JhR1kTuwb16fU382sxYPmAW7BsVo9bRDxbniyuRwch1Pv9rgZh1",
  "key10": "MMavdywqmxrwZQ5fokC25sVebSNYcSYkzPZ6LfWM2XKuHwu8sG59NZcbkP3uA3ARoNHEg7C9ajdAh2EcHULXERD",
  "key11": "3AEfTiQ87VLwJjXmrabFzpTP69ZBYikqx3gKYsoJ2iyseMghuAg8Wgvw96mc39EFH5osuS1rCVRXTkP8Q4Ra3v6T",
  "key12": "3UJESmEoBsKu9s3TTpnLffb9UKDMRSJwP26tKD2syPeJ2cU5vqVnZfMbJRJUWzHZQG7Vx27aFJ932WmGh69aPrTt",
  "key13": "czHsXGsy3dF58Yp1aSyiK6mjdyifKyq6tPnxwNv3G6ZK3XgFBcZGrtXgRYwa52Ae1fvgAex6dEwUEGLuJ8jH12a",
  "key14": "2G76aAcpRG2gaAi6ZhEYr6eWgNRr5T1jpWeHUenji8CHECDK7rdusxKQ9PZWAX5VN5oS7om7Woa4GcXi88CFNYZy",
  "key15": "4xctrKGp8TWzpw5yPA8GG5sn43VToHGbLNL4XCfWYGNfs5EYUiHuKpQAN1Wz1ArPM63aAZVwQyER7hDAxMgSHhWq",
  "key16": "TpKXArZi8PvcDJejrY1ZTGwQjgeoP2ahn86sn66Y3XrzKh5pJbkCLN4YYdnqyxU8wrDrsJ8XJjrtLLGS1nyHeJa",
  "key17": "2iZZm3yHo7muD8odMuuUFH9vTb62JuXKCCmQGX2qo49eWx2s3euca4h9aLMf3MfxvZeuZAhTU3o7isLU279HUiy8",
  "key18": "3otKLUPk7QeKbFXg1NKtvR45bgkyMP12DgeufLFSZK5KiYQoejy57asaJfZu2e6ibvr2oxieDCPSnk65jzqJQ2pk",
  "key19": "2MMG6PeXFCoRvRQbDkSD2GgVTuF51JyLdJKJtMDWnasBG6dFrh6Ky8khELCXEQmUJz61AfcjmddvgovYxYHGorz7",
  "key20": "2tUiJDnM73MQ19DCixXzRSaZtvXWaWKFPXo2rA6AFjcj9AwryPZ6E1yq421h4RDW4qMXq4QYaJEqb5VQx9M2QTQ1",
  "key21": "iN4nmzqUV9ZcuKR9jgUiWzCJD574ege2mLhr1vN6akJLKBFLhxCWSx56RXcgbfPq5eUTr4a6pbaQM2b6G7gfKYp",
  "key22": "4xmZdcSFnD6knqYwgiRxY45fGHDae584EesjmAf9PCALbPNL82jkFwqgSZ79AFVu9wmYNw3NyYJePgEewQok1Hu3",
  "key23": "5pbbDwCiAyz9Ctofrth64Ro1kXNAXX4wXUtCfUcwxE1ACbpejXxS3rrJUtS8oNGnYdpWVK4oPYJbZjDhnoBhUUG1",
  "key24": "4PViwnSr4KeS8wVJJsPp6e2NCwZE5UZ7f6u4bUe8SAw5P9wLuFXDoZjFWVmDjZqCJeBPxL9BNecUsy3Bk453f2o2",
  "key25": "2b7M8oKChnW6G61rXS8WPfQCKDyUkmWB6J9x2hD9Pn9Q5EdEwsbPV6RJo2fJhB7W3qX5dAd1XkvEAne6o4Sz8ykz",
  "key26": "499ajJf7tRQyU55UFyoKASLpY3CfZZEoZV5mx6qZ2GwNY8FZTHBTZ7R3EVcoNPJq9n2QUCrwTQjM6tLH5E9hnxAv",
  "key27": "3dM8DFQXqsK8Q5CNuFPVjgEGJwvLE9XxKJeL1D2izXvpqYmCJPicZX5tij76AeVBgkSpZYokcgdBhKhebX4dFxKL",
  "key28": "3bgG5wgpX2f5t3Va8rD6UmDYmgbwX2qPnq1e4nZ9got197ykFaH6NVjKqWs73koK9PNvg6sRjQRWZjmB59j6jmeA",
  "key29": "5GJt8eh478QbkoKpXch4brmWBTpYkVgAiNAA9cEquXuhDMdicqweQcwxPrV8sMUiGEkEHVYhCRbggcv7AV2xBFyQ"
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
