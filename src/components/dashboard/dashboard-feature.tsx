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
    "9NJYoqPBEXZbsohyBuQ1g3niq9G3kjorphabGuhbb9VmDz3jSisWocfeRnp4HXQxabCe6SFhMMUoasyBRqQnMgR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ykhk34oYUYdKnSAtqoPkPVysE4Y9q3PumDgLAzqeKqT7ZL62pnwxhGSDQWXhYcBMmTAHVpQbCN4s4bHEZpsYBT2",
  "key1": "23pfwp9ubpm9acwxm3aGtivx8hJkoWkYX8y6Jj1bU7ajMwMeiKxbwpUju3x9qG4EsHM6gGnW6bjzvvg2r8JEwNZ9",
  "key2": "5YPDZ79v3Y2taL8zUwyRBCfyBYHdKMCPEKagxwMJx9iG5eWjogx2AoH4U3zkcC3ekTN5v83RnH1vM3YTnRHzWM6r",
  "key3": "usiGRWX2fJNPfihFuHHWF6FKgL3EKN4XEYHABe2EzEp6yeE7ucm7b7AujZuJKXiHVTeMccVW8fPcEqwPsc8CxfJ",
  "key4": "3yQnwpyyxF87Vj7ia2tjzxdTeuTktw39HoZcBHNvDdYxqgFP8BPevVMxyDWhAm9uQ1NRYkGhovrtckgvkXLa1bxX",
  "key5": "JERLw3M98xoaEk5H6ZBqgdCs6aiiyJD1mJh23Qdv2oDmuHMRahRHUKxsXFfZ77oPMSkaAaFf1acPT6U74WexoQr",
  "key6": "4GXRV9oc6E7PWmA8X3AWZktoPhgbfSNQAMH7Ftkj8xviTCeGAeVQu3f2sLN4oq9ZzBNt2dFChFncoC1zNW4xv7JT",
  "key7": "61kCbB6T6x5grUWhyDxTLoudbg9t5qA3Th87C2Cqx5ZyRMFuikjzvyNLopdBmH7CuVTtcgFyd1zd8aCXAm11prrH",
  "key8": "5AYgup5KVFroDvvk8dfq4JdgmVGwCfJnJGDwCm4tYvBhPv4p53zng4ZjA3ksNkWSjJGV4SvwVba3A5PHqdZX1N8m",
  "key9": "cVbgxB9WbMMDPhm2WPMe6i7RqzmA95YKZFbkHina23wXPyS2iR9nq2LCX7Y1cNxbmhEgd4zBMxWoYeFera1Lav3",
  "key10": "4kXjuDwRASgrzLaJAmYouy2kYSpX5JYPf21HLFQwqCj8frnmKSVHYUqvpgBzyb8F3QLEQ49K8HaL6HxguJW8URxT",
  "key11": "29CiSKnRNy7LSTJyJ6FnhMSGqNJvVfGy9esAo4xhq4JLZ5XPHoNNJfazodymzFKFUzaaCiaZyxYvxuoDWo3fGHAe",
  "key12": "5LfWdDKYgbQ7cnqDUPjzHs1hjHyBcj4xt7Wvxjn4sAe7veE97uXZ9f6bje2yubq1FLRQYDmJPdLYByqwnN2wpkmV",
  "key13": "2UBj39zWFr71yNSdkpeLx1ANVjCiKo56dk5jJ4gnsdo7TbJQ5uj2QVJbyqD8JF3MmjVjkfzYwvccTQTGuvgKnfKL",
  "key14": "3ehqygpckezSsSKjdeHSafj8xSrXxXZszFYQjzvhH5k9kpu6oMzfck8vbhcvnSwCX3my9U7fop29ZytfddUcmR12",
  "key15": "5sRjWt3L9AXdJguSSGk6WQZrTTZyXWaZM9fEd4vSk35xKk3P6s47dHSTcA47xErPzCYUfZe2GFgi1XVUZxk315SA",
  "key16": "WUfTnyYqGZ9CxtcsKfoyrTcgPG992tWTghCWfTD1CZd2SiBxvgkYASG78ziyvKNH1WVjeafuoCL8QkotpJJ6YFh",
  "key17": "2H7SqUxifTAUnFSzudqaWfMRxDgeu6uGSY5iQ9fK8Djr4Kp2vuQajGyRiaJGkKwBLNgKXYQnygxSuEEfH2oRuizm",
  "key18": "2ivA9a557ZVfpZxUXZNs87PZKWF8pRAMA6vuMk4GNtBHCxxWM4zVQWK48e4eFCR3dxwapfppZaPSqQEW4gBRLpPo",
  "key19": "2miWxjqZuD3ekZHPipjUzA8BU6JLgXX3oMsK7FkPq5ViQVjBJFuRL6BSJkeQSVAkKZGxZBjtTtoLMTqMWQJ1oKRh",
  "key20": "3L2F6HS2apPgAjJWwZ8tvPS9D9Yucoxjun5dnPmWrvFL8Rknt8RwkkuMsEUC7UrWD7fb8MFVBg47TfUi5TeetVR1",
  "key21": "4oSbhXvBscrF1wQ8dezWx8d7KMChEdZNJvqVYkPr1kYZKyQpDkXWJCwszmxq3s51ePUEXhazte3FS4ve7XprHDwh",
  "key22": "58QXRUJmpGX3d12kbv52HasQrH7QLwtRJFpFEC8CzwFeuDo6BYxm2FoZmqacx52hXGicnD4q3j8erCTBXvp1ZYM1",
  "key23": "5DVAgkvXFgf6N1r8ohqWLULFDxWMi9JQ7WX4UA3NTEBFVqz4YW6nJG2rdikoBuqu4ESCkoWbuhcnv56rEijBWzM9",
  "key24": "cQ8QaCGosb1gxy4HjfftMcPGBc5J8HSyLxgpL6oCn8YU1i91HPgTSCusZm9XvcjoKGZJERBcoBvhhzEqjT73JXg",
  "key25": "5KnC1cn7p1kGGmRpPjqu4g6RaUNu1vG9Wr3eLYWovNJ7hGP1Gv2G8BfwF88r2wisfofQhes2JxyF537V5vZ4XN2Z",
  "key26": "34yzWfNQGNyZryc2oy7pV8gh2cqmCd7o4N4v8F3LNwM79E3bVHTbZwvQ2Ty1qJoQmcM8WZsnwBDrSdqeLRW7QFwf",
  "key27": "4m2MGYzXwKcESjh68HfPJQT6cyhkCXwGGk5GQaSWxYUBa6fyGUoKQZGhjAZd1h73EVcDXAr1vrUduDBt6j18CuL8",
  "key28": "4jUpGxBF13dW78uzPSLKEoRuUfuzNCzZUB3sj6HcL9NxChUfvitpNeaKcqmJM4sW3B14wp44T7meZYCBnXbY7ugq",
  "key29": "RxG7T3z4Dvj6846dzGNKMBMKXRPBfvSvkCjAbXQ5DL2C5eo8e5GLgchQaDdxEveztqs1UFMyDcpFe6QUrbZb5cZ",
  "key30": "3V7FjTcDDhAuoJBLoLTPf9VGqGqF5vB4g2QyH8bCoUWf9RB4YAonAdsPyMCVtUtd8QcCVNVurBjV3NwGB6xY885E",
  "key31": "5iVHHYuUCXXUpu42xufQNSyVfXoGew27u8pj7CvQRhUdhXTG5RqcZcW9nmWhYoPcGRzUVxVR6ajdditA9f3aF2Fp",
  "key32": "NnAWncwnQ7SdM5vsSf57wLTASMPy8maP3g5YDMGXhXP3oPQorvtAd6PBqiiJS6cKroTakGSqu2oyetjJ14txYbJ",
  "key33": "2bU2UcHsCTtkxKMLDXYdtYuBT2g7LfBMZpJtHkQHeE88doD23FxVWBEE9w4hMRqr75tTuGcmK4ProkyfZX4jVznU",
  "key34": "54aXYUqHcDNYFHT7BGXmqvBHfsjJn7zXTYhW4FJBtsfigNfMZ6cGM625CmA4vTunYQfpzYUV7h2qc1HxQcw7icLL",
  "key35": "3p2UW1XH61sWUmb8RHeLRvYrt6YUw1zh1xtCZcZ2WMGBGLwTew1NCtbmUxUdouzAFhgM5Cfkb2vknmDkrhKSmLUJ",
  "key36": "428LmUBd2FacELUw5zsy3Q8cjAM7zpZuPVnM1FiBnPJe5UZ77DavafnQxkSMEdWgaHKXthTLuyH3e9LCRXJuaezp",
  "key37": "4WDmo3y97eanC9eSp24ZuDK34Fbkdvez89AZE7zNjFUmoLNoxZMhFVHmeYDdVsmmXY8rQ3BycnC9eraGYn6ass47",
  "key38": "4mRoUp46r1QyTY4pFxWkj898SQXZK1paZCFF2a7iRfpkP8eiPWfga7YQreah2AMsRgr5kxopz1o6TpAsZdHZ3XuT",
  "key39": "4zQqZEYtpXvs6SybKHvnzV18MWnYSahwwEVsejUjeAo5u5GiuZJVKpBFqWdn6rXE42pUws1mpCa5BNoijpxx69dJ",
  "key40": "5dAh9f7gGccaF4zjRp7vHsGPUzpcfiqhp97r3NSfRZBWPa7bGxGjR5YEsRstNyi2BrqjssKcZgEJbESbZqFoCJxk",
  "key41": "4dpnH69tYVh2u58dmjQjtrRnvkmHJ5FFQ5n5tM2aLhGBdBJmDkZRQddJimnJuoiy9UJm3Q5e3jSka1FZpXURtmdf"
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
