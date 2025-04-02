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
    "41GrWxSNWteMTheX8qj2ddFLcN9i4ufvWNDBLbku4CLKM4GaSkzCfqxFVAkUa53P4DwNTpfEgFhgyQxuSHuaumsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5QGG3fEjyYbUYq5TFZeDMvsDD2USZWjsPAV9AvDjLyGzLCZq8R1Midcwo2MEHmk6Ujafq1pANFaYgZy3T26Z7Goe",
  "key1": "456UATnRHYvqXnbprdXsBeWQgVQXmV6qhMb34AjFSrefKDmK2MzNF6Zo7vM3LymMxYtMx2vJGUq1iKAJnYGDVqvj",
  "key2": "4VWSYRydSfAhtoDh4bvwMDDp5eLsj1g1NHjrNLL6Bk58hqX4ahipPwALetqk9SseztzB3dS1i5hj2TU7LT5GGrKR",
  "key3": "2UH5ywnsL9DSVxEXZuTr97TtKy7Xycvn7Md9QNxkozmpLCi1oTtX21xgXR7jLN5hhqZNW4xLKMQ2TDekMUXJktxn",
  "key4": "3CBcK2z45FRhgnRHJfAcatSLLc17XjT7EdaWpKu938se2EQvURMeARsbbbUMKjrcU5gSEdoTYDKxr9gwh9vzbUDh",
  "key5": "5dY2FZNGKCe3AuxrXHUhr9L2zKXt1PW5SgHqKofrwLu8SYs1tiWuJub1tm4Sd8BSKEnxEeTZjkAxZMJLJYJvHCRH",
  "key6": "51E6xhSecQD8TKdXUBF3FrAEMMYB2ofb4RhpRui1RnCQFk1ktg9vDYy84CcbxTUUUzQQUuGNfSfX74P49AJJuiaC",
  "key7": "5yGKHtLs5e8U4PVyVAy61jsT9vuHT3AqJHCCzyeumYrHrQ5K2sNRm44Jexc3uUPFRiCSPQLzFyugK5zxSMfjH9e5",
  "key8": "3gU8rfGAexpxhKHXRAW7jNKcyN74swX4h6v448UFdRiaZpn5RSKGNqvn6R1kcBKpfbA2fyuoSqhvRV9Pda3qCtvh",
  "key9": "5Q2S3PKUm5dXA5GxLQtKADrLBUqHatLunjkubozNhEmmXtxDAvo9Mma2z2MQTq5ZyQPjsYydj66dSU6MvoArvKGW",
  "key10": "3fKDB9FyKza8uuEtiAJ1gDMrLdB4EFcyrbVLQ4U6VCToh5TZjXHWpfJ1Z8qJ7mLaNctziLmDH62WBYQ3seTtGBe5",
  "key11": "4xsYMbTMtsJxm9Y2qyR4Xibbg6sM8zwCgQfz57e2mtMZYJ6Lt3GKjeL6FEBxZBn8HFsF2fWWpJnxMtthV3MaS1AP",
  "key12": "2MaePxtcRjqiiPJcZxVniKFX7Si1m7RTi1ohU3RZCYMYW2LL837D48DGxTeCerTZmrBiCEziVMcrW43WhL7L4Dht",
  "key13": "4axpxTBkgSb6DE52f2jmg5YcWdv7uM6A2hDb8NUqE79sz1n9ocBXHqdXEGGPQJgejbZXWzsssvtGRMRM1PBjMhnU",
  "key14": "23mZPCA2Kk71HKw99u7PetXCDrs82Kpx7Cv2K5a6c3Qcn2n4oBbatBamyoer3bfuXLWNj4y77bw3T79x4LhELJtv",
  "key15": "2gwfsx4BRdPuwm2K79xQGVoy7k1jGfcL97PaXX9NGQKRVLgwFL3h4ruou8p7AzeintxPdt4jQ464izT7TfuqjbmL",
  "key16": "4fq3Zums43PBiq2zaBfm8ztxrBXeKubyFtMgBZZTVk5ehPZ3vkLYyc2wEKE55SgmaxaaQ3riioZcHhuYdgMHSRwL",
  "key17": "3K3jhKtMwDoMWz5TnGB4SD4bVog6VAb7dEy17yC8Li5QeYu1Ve8BWiweDNk6bpNWLyfKNhLw4S9FR7sFLrWc2b7X",
  "key18": "4Z9i9EiQ2P2RCxfW9mwixrG625BFUFcDXV8w5V3pN4m8A2dwA73BqwsjwYgQ8qxW7ftb56XHbgKq5Ki6Q3fzbXVc",
  "key19": "48Qr1iTHuSHxzUPZXN7ryBYKuNCemQmvRJAoUmp1VgSZHzew1k3s2qa3UgcMkpeZBfcDj2XMS5V4twBWqPGdK2E8",
  "key20": "5H5VxewS4CoWEmHTQDYTnYwmo4SRhge2tmUCZNdYuFiPEjHk65eyMSJvKhXea6hKtDpVdqjVBcZaxH6jHk1t4Rk9",
  "key21": "3Fwbyj7Xz6Kv451edNB4JNAUjLJpfsvBTGDE3P9u5RefMPcV6CW6syS2FCJv8g7XMnfpBBsNxFziyzt9dV6TgLVU",
  "key22": "3qTcRFbdjfrr8UMpJz79ahVBSuGqHG2LUQwdUEW31f4SWd6uKLagfZmc4xhCHGx3iYr4sGLuent73t9HtysEnrY6",
  "key23": "BbpprPhLBAfhReWxQ87viXtM8d6wKWc4eaJBC13jwzCa3VYB6hcWpXrAK4oazMJzh6Q5GBqyVdZKevL4dibQn4G",
  "key24": "2Jr5ec7U2ERdH9LNn2WA1WAuso7GxtN1dejV96rAK7RtxvFx4fJkw6DVUooQiJVuGoW1t19EAdGB8wj8m2ehfsMj",
  "key25": "4RHTaV6n3nvkLS2ZpjsiFxJcQQWxGmiCRAXsiJW93jGeiULZUkjwLAaN5cpedSiZgg575D2XvKd5fhPVp5SCzEtu",
  "key26": "42y4jL3g724vVMbUSAQJQESSDMbpf45bTHZfpbmyCs8uMGwr5THjAGWxUrJ5zQzRNVScfccC61oYk2MyyJW3dL8T",
  "key27": "2tYFoZDY57d8pyaYEyuoC7TH9eTzmLyjqHkipMkqZFaeYq2JtoHjfTYHB2vxEfriHmV7qb4S5QeyKvZcKqy1po7d",
  "key28": "64omUKt2NxfHvcHveZrtiDbg8wkFr2vV3p7cxSxhSzj7x31qUCwh146cHV8bWtDC5yoARzqHmRQc7yq9BHtngkT3",
  "key29": "4P296qQpRjNzWED1XcJU3UfhKN77W4deLJmvESF94zuVsLW4AE4XfvEHDaUtYqbD4hhhucHz5hQDw84gXZxCKgfA",
  "key30": "yxvBcdcNxuK7CeXd4Cb76EErGVFZ2g2i95ZqehrGKxiZycoxDVZrfujbkpRA1bknAtVF58Dd6ry9PDNGtVT8Ej7",
  "key31": "jNs3y3LGkohPyGkmhCGvkNQgoyyF6xbHne34MTbkYQxJTZVTtDizwYTbFaBrD8tkvYi4wwdJjsUDAAfBBwuAMkh",
  "key32": "r2SBrcEQtqp1zATbR368dMa3zoEbP8FN25hZPKBzTK2gie1Rg8Nq6BKFbZZvbmcj5b4fACZYo1HEax5MkjArN1L",
  "key33": "51zBj1z5526ooqnyHvnoiuDmdbqBN8hv9HBx6MZvohoHTL8D2jxj8UFopF6N5YQuTXKv3qgZ3U9VXWmcJ54K6Dza",
  "key34": "3pBrb7BAP5w1V8L8Mx2ysStF2pNxKouhAhUVfpAiRerUsTyytC3UCRNh9neCx6Gr8VQHaov9fWrNso2uvBcNEyfg",
  "key35": "64sPh6hrmvAVhf83H37b26zJzkM5u8k5wiCkzFKHq6C3UTgwXw5s8RPyE8ZzUHAtRSKNnB5A7eXBAQgsozWzw83A",
  "key36": "4DvLY2ymKa8h26wP8kffbr3XHc7WwPXZZyNjzhmojrWuwedxLgvdcYDK3KA6MRothhWUtig63uMSFqAVpvdWoVob",
  "key37": "3oPX1J4Le2yw2PJVwBoodAzWhUiwxnP8SAk2FfH3UB1uzKqru7HZsGeVySjzUJCV79Ytu4Ws16brvBB2vyX5Jxkd"
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
