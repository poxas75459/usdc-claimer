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
    "3V8keeTuHT5CP6j18MxRC1BwDuEcrApvj3c8mG5deNK3qASoGuRiJvwSmpq75Yh55yRja25SNHfsvSM9xW6EdC5D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QQkGregjLeejU1eF1pJWK889rtMoBsp7J733XQd1TRcdtsVrWTRb7jYwZsHg6eKc7dRGu218u9UNuMM6gKKkvjs",
  "key1": "tgj8YhMJbSVBQYxyaqf8mkM78nVkdXFhgbK8DsVkoLs4bEXPGwok1zCPWnJ4tGXrP5FxpppMvRYLmFTfsEYVWP9",
  "key2": "jBdc27NpV2sq8gKKVgz3zNPCFQ5GDa9EQVpyU4d1mHNEthYJD3iqzp7g4EHnbjKzEGt84jyUjYL8Upaaj2AVifh",
  "key3": "3fUvNfrspHE3x7RCnbF3E2WhQBQX4ZtcKNvju6pZdSGZ4sjtu9okZc4861ZGLz5Z1yhYGWeHQPjehX99JHA3tvGi",
  "key4": "Vx7AWxuKe8G7hMrzJN3pRo2opnA1nsoHqaHeTr6A2QnAtYJXqVEmoWBKWzhGAHQg2uLF9JLVUJSXLUDWGJZkaGD",
  "key5": "3XE11Jib6NyzdPW9vJQbhJWfB43KA4tmtcSCL6jxzdh7M65PQBbhudBDvrgWiav6mPXJuVP2rDPbBLer2wTV86VV",
  "key6": "3BkG4QBuXBUujMVa6K2VNFc9QheupAgPgs2hu95itG9VD2oG4enMCEbqvdXsMsmV1kbzyZ71PnbuXHkKJmkcoCo6",
  "key7": "3jUZW4ydMeCqR5eFjsZ4JCUjd4tUEh1ANyFyJcTDjzixpFGYQ3GUjuk3FEyQhEedUos8i7pVfyE7SCQgUDfrGdUV",
  "key8": "3aT5JmvsfdAvaWY37CKMRwbWgZqqJKjFZCfE14ZH3jE5FsbgtjczJJ3pReYtQAp1zXtYcq7jWrt9wH2JJ75X2ctT",
  "key9": "4cfJSxUVBfgzvBudpFa3Ke2WE3vg8jeTNhkcK8nPSoDjNPyw5e5hBmALJwSgy9Ge81WV6BZfVRynYv41SixasAnZ",
  "key10": "2MynaziCfehf3vAjJRMaE6TnbFvLQULidJjwqBFM3KqPNHm7jJN7Q9QKpAwAmUaaZAfe2W37LiYRK3XNXmeDqEn8",
  "key11": "2Tqj6FiEr4kSwF2xo2ffrvmSmjZZWzeyAg3Cbbnod32L3bue811k7j6Y6vqTzBZDEnYgpBCzvSaugV6cwQrPNo2x",
  "key12": "UUDw93nVzbPw7uCb4cAJxJKPxApGyH3mKtask9XGp5GMa7t3EsgaXkvXvdafAnhn7JAGWH8SBZfuTEHiPtNCjmR",
  "key13": "4bqgKXW2wEM5tBvVZS9hSB8emfSQGrS9uH1fvwzgxkBSebQUKLHp1rrAgHiCTxYBrgUEngvtRT822st5QhvvNrdk",
  "key14": "NF3217d8iqsNrPetSSGrnhfebo24k5n6UAnCFsqCkqtrjhnkFfb4sZ28bkc65bQJRw3gcZt7CtRV5Q38uyzS1kD",
  "key15": "28X98tnt7q9EH3wMNeQ1Q6BkUzfyoEMoJ3UEoeM2p1jcGASZSX6fq5k5NcoE1esmgWsLhPYiD5ZWSBabMLEhBsmH",
  "key16": "6228S6NLpxTjo9kwoTeUw1E6G6SLYv6XUhVcxvpQ3TxpvVx3GXofpfD4Sac4HsLvdpt47WgvodHsqoxeS17EVWmH",
  "key17": "53HAv3w72LpeeFo1DMf7yben2JvBX61p6hSWEtRb9iRDCzaTyJzSfyjDfPEEFP3FHZ1NCLqWyHHCwLtXxRKbEMos",
  "key18": "3S29BTGBAHXRRCBz4CWDHDVC3X7MkyXqEPgaqTkr89tRd8mtum46W5eGrHZriTG8TCQWcs9TGiDfwyysQpn6CWoN",
  "key19": "27EixRpJNMza9YDFNjiKXsGUiHQV8erEFVxw5sQDj5cFPzvBc558rK5DL7VoU5YakYLJh1Pakm3BXt6koW4kpNbi",
  "key20": "63WXrPLfH8Yzr9rVEhGQEJck27hybnxKyMhMkbHmb12zuXPoNsyeUZCWMoXkWM9fNyhzreuBpspgytTaHih9bzFu",
  "key21": "BQDvvXRWtY737Ei6a8HQ4dV2fowikLKdiirVBjDKd6MtPm1JFzaMLDaVeQscgkpjqerrxBfHyqv2m1eACLajgp8",
  "key22": "XBoV3nyaK4TV9fKLRt8c91hwDbf1JTgDfd87cW1Znh5XRLcDb1Ngv8zMhDwV1er2HiKw477cvrJaUjCCFyqsb4a",
  "key23": "yefnn4x9jBw1cXku5VJBXssLLVRNNFvKbaqog2VVirAy9fog5QpuZPjXvj4XWimQ4YvhqEBAPJstjmTSoB5jV7j",
  "key24": "2aGHrpjSoPfhifNuZoW6DVvzVga91nDWK6ECX3raYuTzTZjxBBLnXakyQy5kWEHs1rAvQErGZ9LS7cP93qqZjfRt",
  "key25": "3xpHntzceZd6FpyJ71ezag2XEtM1KJC8jrEXoXzH2YC2VuSqVxBwtQKzkJ1sQqJ56avLvzgd32eW5pTNdnGKnPYn",
  "key26": "4YFxr9ppq87iu1mhxJSwSzXLaaoLFHgxrgAQdWUPQmNHdq2ZTAtMXVcQuFLVfjC3s8rkjkF37FesXZwp7XEbemfV",
  "key27": "r9EAg6sHNdmCQWPR2Sd7YC8rR1fgcn35p6ZQriYjBLeyzQGDFPSx1VEnvxm9XuTNFH68J6oQwtQusyABy791eAE",
  "key28": "2DrgZETV1z93Htu4PT6vYkF2TMpwCshV25minUZECL4qVkiVRtp8hpDKzDQN6oGKiyz5SWZwCLYBu1WUSSr22PCL",
  "key29": "AkFcEgM11z6HinuX8QewE8ZuUezjzYc5UYBzTPVnMExMdZD7WZTHb7DSwbnwNWEzqA3jiHZhgbehG49y1887EfS"
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
