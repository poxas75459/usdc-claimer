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
    "4uXrX5y5DXuka4RAVK2cAFrkU5MS359V7MsqJvHfoaj8JJo4gs2Gt9x7RZmtJAjsHNJrVk6aJer161yJLNVhabB8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Y9VHCNEq8mbJxkiWcLA7hSR4XYQwWiwrFoXwJGPr98LNK6uTQSFXLra4mpUx8VH3bntYe3Ti3apLbJyuUpFgzGj",
  "key1": "48RFzeCi3KzNp57NvLLyAnL6kG2CVxW2VqkDTfkbJoDGLDLjfdfDKyLAFEJvkgVtTj2ewCBNK929d9MCbwGSzL1g",
  "key2": "4o2J1oLJ3pud7rX6Ji8gVR4XheDYMVBNYMUgcCqAfs4j8yJEJhmy8wEiqMs5AD6bRnZVAnxFfyMFq7oNwj6mQw4P",
  "key3": "43m8rN2tRq2yK4r7ZxrM64HCYc8D2GnVK5HM12xQkLCP18aCmQX45Az48m8FnEuMHKFSdK1My9gmghaqmyr8KuRw",
  "key4": "4o1vRSSeYWaNjSmLsia7Y2Jmvz2WrsMLXYGaksuScqetBY3rg6hnREp5e6zfAEE1XYoZHmiXWZjsejhPmKWQsY4W",
  "key5": "2rj3xWNFwHRufjFQPijxfirsqL1CEeeJAxTTxgmvHyZu38v8iMnc42vaj3F2AYoDtCCW26nJnTfvR8t3FS7vuQBk",
  "key6": "23qha4SMZjXAobDQH6c1NJmgvNJLA6aHzvEMXfWuoFoeGm93wCtYG6zjWv5qmcFLRTAzxjrYbyiFe4rofG12bHr6",
  "key7": "uUNAkqrq7nczLyVruGjekpgq48NySFGgUxztsEVMaF8YJvNmyAvVdepYZWwpDYqRiVHcEK1xpHRkiZ1x7A82RaF",
  "key8": "3nJGtTGCDtEJT9pXTFVqzHW4adVtE2jGmR3c6YCYfQgMzEyNWCwrBYx4pQoTTp8h3KaiUqNhL8BrSsFtMuomopNr",
  "key9": "2NZxZUyydQpCeTpxxKQD6rVazN9st2U3v92MgnyWkygkBbo8KSTSQveZUozYpm741G6QR7Cm99GZxbPc4uKfuvHJ",
  "key10": "zFxbTSwJUbNpij8ddCBCZ8etLgLCaGaKUHYhEgNJ9H28DXMwAUEJeHMcdYuLTsj8HD31QdCqmU3T2vaBELMJ5nL",
  "key11": "52xhzDbbaMuyhYWGWA4RiTu3oH8aLKyJaSFjhNhNn6AAUKRE6uGEyyxdKMBDyhuNwGUBSnRN8J3cFSKjoih6JqYo",
  "key12": "TjaSExF75SzNY7cw9yv9tN2jdLzzhjrmKS8BH1uaqSRNceqWfRLLEDvCWMumUg4j6tE3agrwD2tGsEZubtmDGQX",
  "key13": "2Tj5gn2p7MXh4o4FCGv9raiSoZJEWiB3KJpvwS38mMqzbNPkY8NSKfY3FaaYpWjPsHiEbx6Etr6mqZFvCRmB9zPn",
  "key14": "65TeqvXxfBWQwjeceZMxJhk6P9pAfMGQjREFPuPxPhuRa6XSBVogKghRxd6KZ5BiuKknxDrzWWDEg2494WaKxxQh",
  "key15": "3BveManRnWPQiokPHZLygeup4xdk2YKEUYfdNh5j9T6KbmYtZTbdy3ZMS4N3udpv2QrY6dQoXhgSRB2xdvFphKQJ",
  "key16": "4K32J1DyTGkYubejeM5jGifFVdY5EHQpW9u2oxYtCH6FBJmkafLq2epzrKwzJBhVxTt9pEW8r93fQFuUy1DFcQ6M",
  "key17": "4CmAFTZqsp7h7FejQMhFg2Yuo8dT2vKyJibXCkG1oGiaaXG92SvsbzxHi4E6w657qZJE1E8QMtaAEswe9QjNKp7e",
  "key18": "5F3x67gxRG4VUxhQLhxhcPSFqs4hWjV3FBic5moibtfiqkTtJENwe4dBBE9oJWd1q85UcQ92deX28SGFSZeJDw3U",
  "key19": "5SijVm2QnAKaHzf4KJPFF5pSNqcScMB35kP3CwPfG8GEeqbYiuwNnEHoUm22Ry5ovvoNhYddd46aZD7gEVAsGNiw",
  "key20": "34k1wXdkVdo1EEBZP1r9QwXsLVCEY7qmMrCziyZDAt7pZXKJ3L9euXHkBZJRggYbYDs1TNWo5ihzZS8qD4DVGpah",
  "key21": "pMuasegHKuUqDCSzVTuWJogkZsLPrCKc4roaBbvLiRq5EVi2GY69ZzgihstSvPFaNCexsPGGpRm1rXyRCS7ttnW",
  "key22": "2iBmPeummrTjbNP1SA8imxqhWbEc75fkkUZVmtEFZbps5ukPE51qmT4WVe1rLwG1AmK2ushMWYEowiy378zuraFf",
  "key23": "eARcxM9T88m8ogfXFJPTZHbps11kiAaZkgmStFeu83L9KtpUHCZjivGdiRsDx5943gB5guiyRZETdhzqgyzvxC5",
  "key24": "3pwuFFGEp53jfTwsEhF29mnZNuNNDqCTQu4M1sTo8kLd4HykckJBJT7dK3emHftrnhzG3BzJ8HEHKhQZpdTuE4ev",
  "key25": "4GVEifTntBR7LGKazB2bZyARNbYWsnUuZHrZesj9mvzELGwu37AiMGujt4csVbATCfu8Ut4rcdYbGn2i9ajhectE",
  "key26": "3N4vYrEmLCTcuKPBrS3BVmXzjUFs9QtYVPRkvRXx63a1t7VQSAcwosY74quRDnciXeays6qV6vT3yQYaiAyibLBX",
  "key27": "5Cbe39XbR7kcFefjJPnbAyreBSpB4WrFUQrEMfFWk674cnwx9L8SEq3GQqXn41KripogH7Rt2FZdaHVsXvdWr8Fe",
  "key28": "3rFfU71VjMxJ7vpWYBfc9aBtGcB9yEFqCWKvmJuosDRaB42GTiU4Jf7g3MnWoXjtz8mG52XWWCBuV7kLgcyByUZp",
  "key29": "4CBmkyqKubyRnjgTZpuRE2U2sdnjEkGY7GSDiDpGvYqBwozmJMqzTWC6JGFhaVnbKhMfUM67dEA7XRADWeMzUQg7"
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
