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
    "5ukQBmAiGVLrti9tmik4dMeewJBEuv74JrVgAD9ssCXd1dWWuNditt8e2gF3PF8yvHYwtLL9wsRVnsJ4q87Jyojd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UqdsEFFhytLwc8MqW6RwsWr6rmxYHS2rc8Tn2nG7LtUU5SquTgmDeer8mE4GAXNCGRmCbp5F9zVBZiNZ8NpSSVo",
  "key1": "aXVqgJDqePUkQzroJqESTXWvKohWRQU61jG83hH3tp1fGU229R4oLBsitufMbEVe23yxNuSQd3cYESNJJRn2ekj",
  "key2": "hX1hS2EdfSTHqyjXaU9jvsnbQhYRTz8hLcop5tRVxwQm23nth2BrrEePYaswfHQckwidbcE4RSEgrcKjv31qfP4",
  "key3": "38Y6oz5nvFxQA64jcm8s6sjzZr9AS2dWxriwBFnaSXyWFhWnp3zt7yTeu4k6HxCHNnc4a82ZJdos2n6ZEwhHTDpe",
  "key4": "2DFahRt3BWZPe3Hm1DhxaUCHF1n6teCzvTEGd228zsZnRjg8x6Qv8ti9Pka5tF8oKcmRg6fAJkoHXQLrf1xsUw5D",
  "key5": "2DEh3CfEfSXZ5jEVoQrcCh65KgNvFPyvUD2A8j2mNe5ExYHAJ5UGGPip37fetCPQ5RbrZVjsHBEiZJM1yjZDBgbY",
  "key6": "444iUt9fsT4EwgYJjSaTJX8HMbpn76QF9xz9GbyAd7uJzTdba6NGLVPSmQApW25vP5ZGytTd5YP2WRVGrveSJY8c",
  "key7": "43x2V8DiADYTDPkYhV1QBbwuKmWmuNLYpZf22KN2ErxtsrjvMWv9f43c5uMxp9KGWYL6MV6BiP58c7fSu8u7GMiq",
  "key8": "2KBQ8ktYUDGJ5a8T3hN6vLbWRorxfQEEySUEoSXQ9TnqwD1LrYuKvhYLFp7VA9oXRUyuQhT2UPqtkhMD7Y1PdLvA",
  "key9": "5sMs5smyKM2x8ab16jbr6YcQCGxn5FeGz1kdz4uSgjmW1HBNTBaBGSda3PgHZQ8gcBmDMdPrjvJs5peTdSXwGkKA",
  "key10": "4WmDHmReCdpxGoWbLaorVYLN4ueHuNGxu5dyfesZHDzSjWkD7EtWuyqLsSQ2MPZSZ3i2dbwZgsmGF1ER5H6YhYTe",
  "key11": "5PnmaDSnvRxd3PXiAk3zgNXGCGx9ViHWKWwcDhQS9wSuAAaZnH5qFxdWHw8fSUKpRqq7AAE4hRMucALsmAZkFzn2",
  "key12": "LtimS653HrsiBMVugbzHfzJVVk2dtwMGaAhxQ739TCvuc5MGYv92nRnrYaMBP3qy9GDZuyRAeZvd9wkS52PQLNW",
  "key13": "124fndhHZqVtex9Q3NRTu3J1UXcW1zpGJc67UZvZKte9xrAiKfNG4QFMa5ZDyG3CvW1Sk9qyVavrDnP4utoWNeK4",
  "key14": "5iPbzHafmgjRWTFk6pmPKjZ2SrkrV1Ua61S1zntvijHHeiCaboJPHUDMkxh7aZ2rNWm2CAXkgyUkmAVampgoQSBx",
  "key15": "2s6quew5naeReQobqDWoevaAVEdybWHSdRRP16sqa82fqB82XFCSwsM3vyWUG2s4j19fgpvLA5j1WS5rnxDvUqSs",
  "key16": "38CgVgmpXJ8wzfpVWeqRq11YPRMQjjGwNeyanJqGf96QKcVUzTawg1qc3FnoDXGd6VH8wj4gUP7SQ3fR4r6vKjiH",
  "key17": "22v16mmqbukFCZbvmZWuZfSGjZRVKN6dh9ftc9K3f4hrXXEUjV8effTWfQB23srmLN1vNNAczkaZJbQFdmqJbkVj",
  "key18": "FnM9XGdri9tWRoXeY7LYVRHe4K6HunnxKyPVT9ngBHDKEfsqnbphWbui1WMfrqRFGa2TBChxc5jXFETYiefxkw6",
  "key19": "2SCD8CMpFTDCEasfCUSLakz5EAVQku8wbgtjWYWb3fJf7feWVgTfwzW1G7SKpVnS2GeMm6nfhZtesWySCBeJ9f8a",
  "key20": "51P5zUYGZS8UJYjB4atUr1UWqANUA9tr1BMiEUD79pYTdnNLnpoBeG866UenkxZnQmUDQYUUkmQNwELApnLm75ov",
  "key21": "4Te1MjhQgr2ukt67WctWyf6k4FCmMrGU3RWn3JWvuRLzERaFiGp9BK1pG7gib9asUAa3cHYcxRVRwPsV3m8t59sR",
  "key22": "5xUAKkfH3K9jqYmGe2YkSkU43otQnThF6bjLP4ninxYEcpAM8oyYojcGai4cWEq3JMi8N5jLmRsts23T1YhyEwdL",
  "key23": "44JVf917fTXgPrfTiyHr4igqHjvbS1nqALBKPXVtjaPMtPMpdw4Xwhqu6sUYhL7SCX7A72ixHFgDZc45Gcqaskm5",
  "key24": "2dGSqtvN5TZvrMP5tdqyXtFyk1YBPVttT758f1Jm3gNnz46yZ1qEzt1goctvp9ZRsDkRC3imud9pBXty5HZ6wXr7",
  "key25": "3BAruoeWorjo5v1mXHbc13nHhVpzjhq7RCyLUSqyJGLZFhWfdRB6fLaE3GFK7DpoGbHGCg6Q4XGw6S58fe3N5qiR",
  "key26": "LonRPhx4odqxi4nw2MzdqjAvjXwhEWm5KpFz4ftuP6JXqaN5En8tUpnbjk3fqTpNjMR9tYcxyDnCpv6x66qoG76",
  "key27": "2SeNZhbq9LkSUwW4fNRZJjRgdVgZDsx5Ma5BP1DYHFSCch6ZYpmNyeoGbQpS9pUkL5igcsfJqUyqh4PZAJwhi4eQ",
  "key28": "2jBiqJKRZck4aLvehMPGkHFSuJRmsPjrAiXtH1emmKhAVZ9HtkVCKE1EfkdA9gZuUHkSRoL4FeUqhkikPisrgxEf",
  "key29": "3UWFN2tyPWnNXgpKJAMZFiTL7cyhD73yA2fPqtmrMcZzzUQESqKEsb7qYjYX9hvPdkkH2EaoN4Qtbn3SRfLrBg1h",
  "key30": "4BNPwKqnH4FjDBjZU3LvVCyiQwtJGhWgetUB6x75LwruCnx7tLfbaTEYSkjhmEtmYEgiz77tsgWWbWon73FSUik2",
  "key31": "5xsRv1teCLyPPDayiD5exoDLwojknfkh8FioJz65MD2xqUEqWTZytTboQCzbYSFiGnhLYx39bfH3u4vDBoGXd5ca"
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
