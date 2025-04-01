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
    "3raNAx1ivRzNJPwE2y5K5gyXEeRQHHW6MFahGuojjP7jFea7LxxCBTBqCoVrpNukdJRqARQKFy482fZ3c4kaJBBe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3EYqG9vHXHGFXhvS6gGcRdCKFd9aYXGyQgxKvg3mu93xWSZjxUZVgYq1h5XDe3wkhU45PzkmSkP3sfFdX3Z6tvQJ",
  "key1": "3BkqED96hNZ2ye3ouWwxdApEtembk7mRnVbc3xBtdgtLyBbKxrs2sVAqCQVrppua7ZsZePz1ysc8SwErzEMMLgoL",
  "key2": "2Bah1eifJEoi719j8qtVRf1opYw1h9hPoWVY4TzpCtnDAW6avN55R3ojW7buu1whvFGDhPVkkh5ZajFooz5Hgp5F",
  "key3": "Zmj3YHDwvoGJKvSX1jnuNUP7S1Wv9xv3Dk5V6emj71QPAtSZmTtUgh3LJxBgoPW29ZZX8q1n8JZM645uwQQVJmq",
  "key4": "ZFP2dBjjYcX8gFeFbhAJgMjkhmUVi4R8y6k4dFd8DypE5s56iUo4ndCuidDXMvRhvjUGhMQjkKmWBQ3ptE224uy",
  "key5": "2VcK1iuU2UN4EgnsrESM5xEJ9kpX9bSzY1P6oDZCLgPv7odn3QUxcqFV7MJ2H3ZYgu2EcZTmqkheJoa24yurbER6",
  "key6": "4NzZ2cXRv8ohTsVDVjQwCz6GAQQLYvJj187JWZc8tpGpZkxhXhB9wKYLJcp3JNKjDzVA53qgRTABdseLRLNg6xBW",
  "key7": "5G4LoHRmJPVG8xTdzBvDpS5GDHmGgezZwDSCAZxULYxAszwtVvusi6yeQR1YCPAo1KEBSgP6HCjdPYJx3PBx9tRE",
  "key8": "gTAzapekM5wrspVFgSw7fPZYqZU51wb8YuePEnyTwfPV1vzJzRn9UxSKmiDMYgkGdCk1Ztik9jqxD8b6zyXt4Zt",
  "key9": "4uVzaufn9Zsm9fBBuNhq1LUHwD6CCsJDmMyovPKuhZzVTULrZ69Q74LSWMvSSozu1e8D3eRxAcWC6o11aCEqi9gr",
  "key10": "5HCZwMyCXvEuezTAbvUTdfq8JHierHt57eXdw8MnE6b4YXe648KwzioCjfAAKQ82PKQf2XJXHCa6x9iydjYx2SQa",
  "key11": "2LvLcCpE4zB9gJYisNWNjvkAYtYjaXam5pbL3s5qrEbmcSnz16aXJtoGhMYzKJqz2xczCVkmGdaLy1pa2Zh2befk",
  "key12": "2ZucNZA3MFURR775huM2LysnWsbSKEuXoNs6PNsMR41GBc36DdP8SuEVJEK8eEVYQ3GJLGxE8Kvoi5J9B2UPz6TD",
  "key13": "5oa76BRdbJ1WQny2JYabceoK8nuD8wwTbCWKp5HeGDgX42AGo1b9o1nocuMrB7zZWverkyCTjVA2PzQfSunzRuPQ",
  "key14": "m8bu8bG4bLj68phbS94FNs1iAibjQevcZGpnQXEze31uA1z44eDCSySt32vXdTNpuPyLT3mjbH5iS7kpXBYh9Fd",
  "key15": "4pzqhFUCyxbXi1SM2buzbxZzg3j4eDXfDMniD5ktUXh99MZRfw4FEPG87XeSjcCqeiAiJzY2fSsYgX2SxCNgGFXi",
  "key16": "2CFjXhJks2NV7Aaf11szFB5Qvtwn7ynrg7JLbZWowUdPwtR25im3JJoLZFPAhFbaqjGUXN4ehVHQQ38dtuJgaLzD",
  "key17": "4FZVXUWzdrnYxR2VYtWMFbXHtphmWPv1KBn5j3g2MWVezCYho8TEE29oQVxszqLjJC8p2TGJRfcVN27VJUjVSraH",
  "key18": "4QGeRt8NgNgRCJYPpiRi4RofqG4iMF95DptVEV6gkGwV5xUMwjBVoKk8gabC2nrpqEvZkYeN5WMrWGxUSZXQySv1",
  "key19": "3BezAVjGqcA6b286RdyvqpCvj5LjCfV11v5YRyEsyFy36pNqXXhbCzqyytTVv5yWJhcu8ETpNssLzwZaGPwtKeN3",
  "key20": "Gg6x7RPiPQKXA7E2wHp5KptDhLBjteZQ5qhqaKgPT3LwTnPjKWXYCW1EkUavpgGiC9ftuEqoEX61Ab8T8es1898",
  "key21": "3bX4q1Nf9VUPxZw6233LMa754xSab2FRsY612KdXXTqxzzRrQoyoFUfRJ4wE4DaCtw3NLxQ7r9FvofPAqTyRko6c",
  "key22": "5pm166LBgzo9AxDdujvTnM2oMGk9G3Sc7MqJ5QVBFJZWw9BCVYmBvCgFpqgh9DkBBqDSoaTqF8ds8KE2fzJhwXWu",
  "key23": "2LWLMytSAWgLuLY72aAsyM4D2qSFeFa3Zmkga6tFu9nuBX2Zmo1fC3xMJfmDsw9gKzJo9ST5kBpZSxcwysMWkTpF",
  "key24": "2YptA9Z8SQdnUs3WRWUon1XSDPvZTxfqZnheXGqU2PxvVHLTcQZzeCsEtcMNYQB9hVFuVJGSbh9KWAbqZfvC5mid",
  "key25": "4pmP7WU6SeCZSo2NTpXxVHmWYpSuM5KMATmhvyuhSRQsqayw4hzibhjbCKSH8uLst9WqCPDUTXh4zvrGQWDcLk6S",
  "key26": "3TpfmihQCYYvdScQGmZi28nv8mY71LLrqMF8kYSj5yq34rpFtMFKSSrwfxX1WTdBEDRWmLKSB7bBeviXUC7s6kec",
  "key27": "3pdrUB1VdJm3YR5AmkRybEkbr98yA1qSzUKZdMpQ9s4JaQASCC3369bWe5h3TKVwnm8czDBm4B9HmuPSbZc9kwqZ",
  "key28": "5tRz1tgiqGR8ems8UxeyRzjXADGtDK2hs2jWrN7hvhzXnxo7wKjz7UaSRbSKmZ9nY4TukCmAv8Nvf87M7Caw7Ah3",
  "key29": "Hnhx6GVB3dw6RS5UmjEmkrmz5YY3oHoSyuHp8svkr5VQJ1rgR9P9E7AnfJYmuc3NEy5BvWgwXHPPZBfNn5eXZ1k",
  "key30": "5ATMiBAjKER76U1z9QZbZvVBZCZAs56yexKFpPzGdkUCiFUHzMJYeR8pz6HVm6gU4dAow6j2zaK8vjaFkchCG4ev",
  "key31": "4R6zQgKJb7BvCNBa8WjVotzS6ayrfnftZJZm86cb7VjWnPps4T3i41YNR1BCAYh99oLSS5u8sWNb8PeTJU8Zri2L",
  "key32": "KjSDmw9VkiENpze2CuduuPDas7iYKYfUc5RqwFLJT9hvAcm2gvbx4XsVfpDT8cE7gycQUo6Ek32LwoFpaZqnK9w",
  "key33": "27ZKw9M9wGW5A7dhDr6EEC7QuEu2cpsMQMFggV9swwJJSU5dV3iGQQunxT4bK6ee8Qio3G5QTeZbeHjDiQrkxg8D",
  "key34": "3ff4c7peD5qn5CMGP4S8uedi7HfZoRuDRTYK1fbSf642P465opkTPEWbf8tRTDt6ZYjBi5vk1gZWpMafa9H5HFWj",
  "key35": "4RkgivbJz3wycra6TgEp4x78g9DTghDyTBeSfne9qXPau6PyLB5Bgj7m7NMejv5ueaKA6vcK6hUaRBLaGdnhYyFu",
  "key36": "3dJBM6tkTGKYESxcjtDYgsHhqJv67pQMTmyuLWv5zQuaZHNmYcNR62YRgfCi49cYVXQGsug5tCeK8riuGGSSnyTJ",
  "key37": "6mUpuvDFc8d9uYEpD3bQ2HnehnySgq158Ku3CFtGWQKP7KnhVNvGnCgwaDtujvjjiLk59n3EJe8aRebb6FwXPax",
  "key38": "43fWwWkLTpxBuUga2u2TM3TJ52Pb5LVeQyTB7FYi3iqAK14JrAemcFmkyiRakHeiuSFoDwQchGt7wWkQYpJST8aG",
  "key39": "4piq6YL3f9wyPbqFqkuTawnuWwex9a8f7E4rdPkWTE8g5X8onrhsPTBzwSLKTo4yUCSpK3o1EakJ7fdUfxyx57cM",
  "key40": "iFwdYx8WkS8QevBjC19yEisxJoq1MtAvWpszYzenZNHjecZJ73xXor8dQEQzuFDtR3pRa5fMDBWb5q1mriE91Ru",
  "key41": "2nVPN7dkm5CjMyBaoACTSEYXWVQCV1EMHetUigBoMLaMNxyPVMwJ28Xfiyef5MfjBFYoGdnJpRnAEPGhBcTkmP24",
  "key42": "rSEQEcUwu69fzSvunFS6BZAB3hYZMDZifi4E5iUotH76XNjstzCtGn5xKnvQKrQs5kNcKsNy4tDNRag5qkReRy2",
  "key43": "2KLtE3GLYev1AJJF1REnZKjYuWwtLhpLUipaj8ogZtTWPXbAW8rjijkHjbSqZsKcdgA9bgJ5Kj95piAsLkjMiPz4",
  "key44": "5EJt49TARhRMvq9WitCTFAPoXqM4mfEy6wUcUkURs3xAMu76W8tEgjjdFHxgkzHqoXYvg2RyuLF382bG3z36juRS"
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
