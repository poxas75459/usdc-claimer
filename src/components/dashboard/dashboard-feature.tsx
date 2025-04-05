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
    "5DUpU22bsgJ4ZwMK2jmtG55uZ5o3tTrUN7XBHftm3czzrMzRdLnvZJJP5oTQPHRy9FUtwRKHZUS9nNf6vsf5GccS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35HWJgJ9cqNXNihFb42qQctjfA9AUTJvTcPzjmegBPDV3dAWKgQLhTQAUMtezmtMPLimN5fhiLFMt2dNSoEeYmYX",
  "key1": "4XgEMt3MCQuaf6QBUqGzvvjcJAwwyEgkBmc5tt9TyS59CEcRmCZGgpyFjHzY4wobQr6VkToiUegRrv9SmBvgMMwi",
  "key2": "3QUkzLN6q8zzmYA3UQUFxBo4aUfFQmv3zLeSq5bqFF2JFXF83be3RffYh2zubNFp4LcyF5DHC4NdV2sDHfFa69fa",
  "key3": "4Upn9bYoGbU2XMojnYPEd2xyBSb2L8XTLotqdU6qWEwxfYQ7E6JLmPZhJkKNowrmQKdBmtoXxVowCtoshQrYwhPX",
  "key4": "3z8adMfWiWwLzYU5d7MktAaRfCrnnPfb3hUQM1eC6V2gJofHYegQ88FpoDyAZxGh2SaBmFredupYSyHdudd8cLSL",
  "key5": "2ehJEiNZt4x6UrtdzCmrjAzYeMLVWd4qiEe5ynCwi8vvBVSEEiTnCqqCyXLTca6h4wFLNNLiHfsjAvRdB3Mny8PW",
  "key6": "5k39dfMrz5hJ2xGJcU91CSZgQhaCaJ6fbmFGbDUhjEcvNCbZYz3op4X7dw5M9rMd8Ahgcg3N68G6o6BXM5JjEGdf",
  "key7": "MbfqFeoxjFwfbYfDyD7tNMA7sGBHPZGDadZsvwBjZktpNYyg7XPsD3LWEMTkDYSFrFQt1F57RdSHUsB6bbK3zxp",
  "key8": "59fxKJjGuXXPqBXYLc6cNHAeE4XesRSTBKjHKzpnjNQJEEeEfTpsvFD2dfjLvF4cTELJZiR4Qvp2Hqxxf8b75de",
  "key9": "3RaTa2qfsqBtkvorZqJUyKYSEhL3dHwqpWpkVLkLdR6H77xzexp3c29pbCP3Lkzvj1VHWVUDTWMQUKsq7ASWzZD8",
  "key10": "3m6RKQM4EZ7k3WWsScx2MeR5yzNEUDrUrrzLwKJLrRamkSxNtjCv36R9Px8Fc15KTdAebLztm54Y4atLnTjtETco",
  "key11": "42JYcAL6guUEqaeyFVoNuKpng6WBhyhBdhQVZwCUuGwCmNYKYaGzmbWE1oUQazWANXZqhqCR37q73F9pZXp628mw",
  "key12": "5fpSG7Epbpa4yXch95x9Gvyw7pprsJBi7MPA4TZZsfxxamBma6QmoveyvNeZwY912ZPDwiyhbDdAxT931og2cEgN",
  "key13": "2oJGHQoi7v5dgY45CGrLD1MrLysjTDaWBqR2nxScEiEK5J6Y4YveFYhucQKH4mXgfFuo8z3nDnKSedQckd1GvEdN",
  "key14": "4mbbqTZK8M4Ki3kRfsxiHBtqmgV9QL9EJFTuvBHXj78K6AgZaWnbFE7EG7nYpcFuH7mtAhaWqCVqmtCuEeCmYSSZ",
  "key15": "3YyZnEVpUcnvZecMB8F6TzJTppee993SHUwqzYECKP4gGth3gLyTUYUHhF7XCHEh5xf8xDLTYZgBBmHtcoopK4UW",
  "key16": "2CLTZMWBwqRswwWwozdKiAFBJ84WxxejqJmbNtn94oqpagQeB2pbENpSk3RTPLB6Fkvyu1ghvjY83T1SCU7bqUFc",
  "key17": "2r6RGxSi44Ku32S1TXYXorvr79NgGai8rBL26bjm95jytHjDmZiovncnJ1y8NMbHa5fpps4XfkGcbdv8S971QSFe",
  "key18": "2eXKCD1VywiUMTFXv47ThtfZ4Sw4MGkpVgVzFtbyvrVqNKQjknwmMxHDmVySZFhdFfcLpmUHgijt7GJKPZpMcL2M",
  "key19": "2GTfrqJWorofQz5e9ssqFsKDUmDPAEpw1gzxVC66AhrUsWdGLaLh8r97fM1NYsdVkvp6DpYmXpFtaApGMQQ8KXBb",
  "key20": "3kc72s4BTbQXQX33tGrtdyRmoiU4EE7owwvrRF6DaorCEPd7YB99tX4SKL1LaHi8W41B3ng28nbwcL7sFgDHzKqJ",
  "key21": "5cPuLz8gvisn1NheB9m1opYmk6PSsiTo7QbrhT3jdkGLbS4Z88ig9SiNYLjFY4171njxrwY6i3ScZBiq7eYs1KAy",
  "key22": "3Mw3uMVadr9PVHoSGXdivB9qHeKAZpdbyrugB1RrXfwfxedxQC2tHUDVeqpUunb5ifLQNdP2vCC8jL6USFyEYFaN",
  "key23": "5Jr6TzK2gTE42YbctMVWGqp2BMEPRg8gyR9EazX31tbEgAzKB2QqNjPhx4yPcy5Z6CZbt2cw7E6SsutxNC7yEWAf",
  "key24": "3h1ond48qCBL1pcC3DUE53tka3Dq19XPHRCNwDHaavpdorsoBaezZTarNECQcHZQiNDHLu6qH4yeTCHvFBSTyJFi",
  "key25": "2T7aX4XK4PnfdUzEp1Rj6PuERq6N5TF5mgkUHtjjCNyZpyQLmEg8x4hDTaEBEM6nHMwdRg5dV2bgGSVKzotzwmTQ",
  "key26": "4ZChR8qVpVsN39nQUh7XDrNGe87nBkmzgpKdJiFLhcMUrMmEwa9Ra1ZfvX6U57cyYrULBKRchdBnjFJXLPtr8qqT",
  "key27": "5SPqYqTh4mQy2JiFn7hqMFHS31gekAKVho6mgDhVaKSb8GPW85iA3BuayEjUNGKkxs4HP8j7vcM9BBTyveBTUPQw"
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
