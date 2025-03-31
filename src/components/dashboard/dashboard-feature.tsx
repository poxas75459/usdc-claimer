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
    "fcjZzdHkpuMKQSC39EwZgBD4MkbvpiB3NPCGcF9G68LFXmZ985ZmRDca3uQCgQAScL2r6kCwb5UY8tAQt3CQ2uv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WQFHqHCg8cDnPPYhbYcMTXNgJ38EQ5xMh44vpWDTAUfuBVc7341CvCsaXRPjbZT6EDSSRT1qpuXj9D3BipD1FTa",
  "key1": "2AyfUtfjCP7jUGHZquoSVKcpr9vpyEEjDBXZYbpEgfEz6cMaRy2XzeN9GXY7XQhX5KqRnrNYsh6XhnDLzCytt9mP",
  "key2": "2DXWEqU8LYFSgyNUGNJV3MkWjPgDBZ7GPsvVXPbcXXdwUJKJZmbtF54nYi6wGGNfqNmWMiFu9AbJpx3LK4BDaw3t",
  "key3": "5t7u6T2skKy2Ebdwz9vYahdcZZz3aNy7LFjdj4nX2u3ACUUZvnwAjf396Uwp5ea4SqpGiqZd9oPjG1hxJWebg85T",
  "key4": "yTHTZLFNXsJwFDbrKYH7zqZYWv8vdMRMBiGY4ipHBNbAPcQvjuYN61DdvLdf1Rp4mwjhPK3yGaSQXK6kHtau4GU",
  "key5": "39ABdUMb3zpQY52FmdkP6bJqdWh6oWuvRMtaE4nNHcQuzCyFqva51fgNrb83TaccT8AQxaYK1aL2rGMKqU6gozLY",
  "key6": "37fP1KPKj9LDuBEky1cQb3je1WAkjFUPGAHH1VD8FGZ7omQQsRuXN3KMKgM4EcXVJvvm5K9nKtxBZkchVjEMc7fC",
  "key7": "4NjgpK4TEAgLvWToQbdLCSVQYXt7NN57WJQLJ117q989N7QUzdFxaaR2LvvEqvz5r8hTuG9a9HZHvVzHTbHL68nG",
  "key8": "4RXAHdXAFvB1kWgffx6GadHy3Vz3YN3LKg8zfKK2PMeVjcPZWJyEwzWVmz2CcKZRp2i9TM7Vdmnbsw78LJwdrbH1",
  "key9": "oaGZzNL2rJLYmziip9NvabRjjJfWcoNbj31QfT1y7U15cJd1wvWYjNWhrJNiYQ53UVpreZJF2EFGXEufq74aGpu",
  "key10": "3LZ325xtZKYWq7iUgB41pgvVermEDmkLnvat3pyFPS15YYDJASmQQkXT9rhZrdzmQBpBhgWW8XXmaCdPPQ69y9jH",
  "key11": "3oriQwXisqKP5bys5EX36ebA87q2HAQc4VE1FS3KmbcDZnMrS14Gr8U3kgVoC52Pg8VmoVM1NE8MEfXn66mX8Y5C",
  "key12": "5v96kS5wporQ7Tf923w1P7hdkqbsddoqrZ5Z6ne2j2RXtx4ET3cAyKfcUghLsZcS8SpTjKduuh5PrazDybXvoed5",
  "key13": "5Sv8abbsFFhV57TURPEzhXZibyACWL7mHsNMFqdxaNzMm2GKHtD1AcbAmu71mXieY7MZL8LFkGCArD5ULbjXtysZ",
  "key14": "4jSfXGdvUo1MUFxzm2vbwSgRJ7ekQNBUBSqobicrcf1WBCKwqbWDEJ6aCRcnLraTUGGm5VyCXpMSM9ScVfiF6kt9",
  "key15": "39eCaRn1Wtp2HpfgQPxx5QsNzsUpLs5E59iohVJVRtiBSkvNjht8f445obY2FqGjx1LXK6NFNgkNwQ1hyyshUuY7",
  "key16": "3gWSC2uTGwTkN1xX4BnVy5rTEJr4mvCiSDdjJVMVptjju5DhpnxJubtgF7E9ky3DmTgxg9xa7ZsMVhAKbpNoRheQ",
  "key17": "AQyfx1g8UvQPxuoy9uUXDhZbMfCqgzamDV3yt8boe2KRAD6ssyKnbDowrad1FP8c82LK6MGV5AdeNcCigKFdqcN",
  "key18": "oDTZs8mLjrwJ94CiADtb5N3rGJWqoDGT9cjowpVBYsek8kgBeTx8aJdJ54TAW2Tbj18gruzoDkTkKy7HvVS8CYk",
  "key19": "5zjFdn5TgBuhqiLcKiCsoxCcAHjgKjqiPYRBtrfK18HUo95G1BL2swBQzzc56Gin66ZTgCqVScV8utwxniSi4wcw",
  "key20": "5RgEdrejvbF3dkJeaSjJnvsLVowdooFyW92w1r2tuZg77agpfTsC8YhpYUBhWhzwChL8Lg3K42hSoZkLKekn1MnF",
  "key21": "nUXCrM21NEMzpwJH3CcNkAKNh8Kxhk8LzZKKxocVVKhwqqWzc9wAcvPGL6V5Ns8mVkeGHhKyZ744Xezzbhw5imV",
  "key22": "ymo2U61goNqokjamjGtyYR6UidhyJpfTsRvFe18zBq9Dpwj8aKyWP19NWc2GPCSnBYmL6K9GQCL31N1eCSECkBu",
  "key23": "57PNkkZoWxQPKbbS2nScEgkjdt3gEg3k1kagHmxGMNACc7kyixq8T6Z4YoEzSa5kzyEqSgZAmdkwAn6qTQqGExG2",
  "key24": "SURjsGhD3tSSRJma3ER1TgzwdDph7EHPgo4qvvfVTKf7CWXoEryZdXaY9L6LmoxXjPbu3Kd3YQpwBZmtTRTkoHD",
  "key25": "4W8GCVkgAgFF2oakKGUXSavNa778gpuJridL2ZsLSNZyTgv8qh47nEtXRPCRMBqR2fiTmBZUvrTVNqPUuP87Ssmu",
  "key26": "2j74UVVk5P2eEDaZ1YMUGJDAFZxtsg98Ar6nHk3T8151atymg4bZSH3BEGkxSv6bvNasM8hBG25tJsJu3kjtG3J6",
  "key27": "3JSGxrJ7yYhP5RrvxB1YJGNmRr9qEWw5GBYLfWTUC6qkUEwuFZxwMPYhA7DF8ziFUQZARVdXTGcqMnJTCr1yD4SZ",
  "key28": "5r1hJZ3tuvZSe32jkKT5m1mSwcd1SWCF83kHta4SHWEUr8h1HsXCER6xajaefb4XZVZPZvnHACEqCD6QnHQCUiqX",
  "key29": "2DdETFE2ydL6uyb2XYmHB686kyC7ZD27N5oGdyLr1wwfGGiNcHJJNda21jQ4pj68RShJhZvyiDGma859yCXXKeDM",
  "key30": "2V7D9vFdbAR7kcmA6MiSYESjRUKgUK5qUUQGtpgHDttMsXxbvccraKNBDEaQeHCrP5B5ieLJiCkqQhMHXxbaW1z3",
  "key31": "4s3F6rLsKH99DULVd8vaGNiZkdLAsg1ffqiKvFpacwxQdBimNYFwv2dy3PH9QdtksFqj6atCLLRk8hTKZzSFvVM2",
  "key32": "38BaPRrgjAeCWdCN33akiSSEwQrxuBcwjWVtWW1k9nuB2a8QaNbyYJMs3bj8PVFdAP5j8sRt7pfhM1XcVmWedPBK",
  "key33": "NgyL5wRqx4yMSuDYZ85ePJ49fa9YYyntEmZzETkTn72c4eRVKXEsiqKjExox1T2WuTkfbxKPiy26jnu4WuCABP5",
  "key34": "5QPAta6q2p3UNXCS5AcYnsc3HN1THns3bqeHip1wArXQRHN3gzVXQQyoviisaXjAU6SzzXtFMFd6kUFi8V3sJvpo",
  "key35": "5jGnJM33amnnADDkjoAmLXkTy6JjTvzogfAUueqsx1mufy5kL7t5Ro8U2o3Jus455gzoQCLiDnrgXHVSQzC7Xnq3",
  "key36": "4T2JzmAUK3adXxHZVPbMuQELfBExGBZHmD2rZbZKsG9Tg3N9EGSM8UFpMAHqfvLfempiwDXQ68TRwVHXsadKMHSS",
  "key37": "4G9x9n8n8ZSHoS8afYp6Eusu3qUxdSAdakTtJfa318KjwxzX9dchtZQpCuMrnbrdvRe96LnB7x1y9DofuTeNQs58",
  "key38": "3EUWEgAAxu98oKF5NQPBG7iTRcifNE2R99qKaH7rXmhxSykCBRpSS4PyYs5waVcunqAVupDBeg1tj6ztQD4RN9Z6",
  "key39": "62YDkds3vEunPERMQDrQveSzLrb6QJpu8BtDNmu63KoQntqEpNRxgcirWxiBebwgok8docgCWa9VUXqdQu4YeWfE",
  "key40": "5afAtxdRyRA98z5C9CHzBx4Dd7qF9ReMYvgB4cSyDiqAQvZEkSFX8LpEbfmUYYWycWR1BsVE7JAo8vXrY2HEwEQ4",
  "key41": "64JC1x4YQLcJ3J5DqokUTud5CdvYUSNHeas3ZaMAk8mB7zrLLMPY8deZZABgB6bC5UJH7JUHPuuxhpbbWfC6CSn9",
  "key42": "3WJ9qeR3CZBnkTbaWKHGBy8uTtMDeC1ue9Rxb2Pn6xi3jUQYNtvCHGSXdLva1iVhXPmvwKgZhctqKgzYJDBSdU1c",
  "key43": "62Wo1mMHJtALDi7u9HurkR8wv4HusGUCone2dH7wq9jXv2P7xETZ8P4qWtxbsbZoYjdkYUqcHW97ebnyUirw4DGm",
  "key44": "CqyukyP1dMZ7u4AA6279DJLRg7P2j7PD5y61F1zjbKdYt2Q5k4EvfhDDgGT3KwDqPqGwH2cXNqNVKQ7HVN3S5op",
  "key45": "3ZXEi9kJeww37Buw8jRSy3JJVexsdCrchEtPpvPSuvmDDZNXzveh9akgSE8ztdCu97sCckFP4YyxSGVcbGujK2WW",
  "key46": "63eZpZHi6tSBUN3JrAaa1eW9SpN3wfzfbWbfgM3EmJaEuX1fDHqWTBm2GGGyRAju1S6s3MZAqN1nGcbCm4Xt5g5z",
  "key47": "1izh8QEFaSqYiKCuBTFJC21H8M4Eufw4PUdBkseopY8HMrfHFNFRneYhWXHqZ15tSG9NbmPvP2gUSUqqDhbXSCX",
  "key48": "5BzCRw3kg7uXEqKvEnLXyVviznSv4H5QwEoNwhR2i9DZJUmNxRfLCX1bRj9qByaF4xa5w9V7ZQjNBZVCLdFfUZES"
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
