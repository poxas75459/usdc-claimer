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
    "2449bvWUBnQrRaCGc6hkNqLFGaz2tr7BhoTUYdP8KvDmkrFGj14fAoyfAymoFn4ujDNTe1G828jT3Bhq3bMxboDT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KD9ojYq4zZb9pWNhyC21LiT5xuVe6idE3g5is36R3qM7oab3RtDBDzadSRSYx1TXSohVsq4DZL3bk38WJ8R31JL",
  "key1": "2BMQmRv5vSngCJHnShh4FrVp4xUwWBpAJXvQRcHpX63aeVC6d8piV1itZSwtn6frZ1Z6N9FLuYzkm6eG7zRVhBav",
  "key2": "4WPKLtA5GP5notpkjP1hDBZ7kDPwaL8xmBRRhUMPu1HofHFKqes4dvQSL32ct71pCn2W9YsGQu8hk6j6578eHgyT",
  "key3": "4SnnRenfaAPnbubkdC4rXCponEMSVejFzShY6ToJdeMdwUjVcVzDEowFuiZSgjdzhjtqauNgiMn3yXJxYwxD4KZp",
  "key4": "5H4qoVcVHogAr7p8eaynhfpWt3UvAyEPd29opF6GUCWvAAV6ccpNc1CEsoGjZphXdc2BBQx4FcqwB2gqC9zXWVBT",
  "key5": "MMh1z3o25MGLzFfBfK1woLsqHvv5uFM3nHbhCYKq1gP9n3TES1erz7CWzwNUYhNJMHPNB3faq1RiiRqa1Sggant",
  "key6": "5oTRLtCU7kVfrrFfGnq2xjzfzmFDrdh9ToLBac5PmWN3Q6TeB6UPkdkuNFxfvJv5q1qDgi2S5MAFMXiAVkWWSiv3",
  "key7": "2nqDu5FVriJ8y7mVrHRVKJ2wEJnDrJhV9DkswqZYWuKhTRPWsafNQ5vwDas1Zjwgu1JiNZwga2gNJHjw1diksgao",
  "key8": "5qQoUrQeynyB9UA6edRjrpBZbeHfAPMRJMSoySVp5wFqKHMV5cb85QS6nX3s1GaEUKZ51jhWDTyhiWRE1DwYEYKY",
  "key9": "4E9R5xT2Xt48qsU1ZHZwk5u8rKENg5hYDAgVQi6EZtPCibxtL25wiLZXKv722m6cbPw16HhFLrGTYCxcsnYFKHHD",
  "key10": "v79wWgCtVV2sn9f3dRheweNzNNCgFbwrhZkYFQBh5w7YFdVKTjNXbiB2BWctrcNQvaJAvstRTUtsLx7uLGmYrTC",
  "key11": "2MJHyvmJGqtyrG6jBgMCp9LvimpLJ9NoKfUoFZ7gQjw2hFrbnaC9NautGNPBko9N9GVpMMSkgJqc7ATWmfpf9nVQ",
  "key12": "XefBmRB1AXU158sHunxksDmNCGAKzhymSjvbQX149Uw4AQvjTdHmkXed96FSHZkrgtVBp7pZFbiHC6MegqZobb9",
  "key13": "44pSoEeTNsNx5uSr6cNZaNRSY6qjaHVn86QoXxfeJJkC4mPmJADjrxTKqCfK22C83Xd4y316yeFiKQVovNjpCXtu",
  "key14": "2MC6QHTYi4WpBDNvgLUcKMDaVyPtrxMMLj8zXKHS3MGjsftza1wGbVEaZUPsA4kBpWpPbafoS46MT3heqjhSucJF",
  "key15": "dDdauw8gt67HXzESzsHShNYLWypZkogS87xArMnpTNXRjQ9LBrxdX4bb7cfkwG17LS65Pt631zAfhrerVPYoSPJ",
  "key16": "3PBTpv9z4u2b4xczMVTFuX2vYkstg7DnwgUBnMWMBEq8PgFJRQbDTWmJqmMCdUsik8q1ftqWSeZt34gNXVDANZqm",
  "key17": "2P8ARMVq31E7aMdy3ntnFyDH6GPsPKeY7GWmzhSP9YcNSsemQF57EambLikRAUxcWcy6re4e8qrbjxtJyt63RCj6",
  "key18": "45E46kUTiToCMjvUVSjapfVjKb1QR9MNDfM4eg21KZbFhBMtL44ADdMVoZdKAbi7iWFEiZwZqR4f7kpiF57aY8Qx",
  "key19": "4xkCRfxYTVaormgSMAhtg8yq93LtiXc5BAoZkB3nRQcwKjA6gbG1551WbeUU7jTXuc5qvWVm6gxP8JRapqD9AWmR",
  "key20": "3EXXPtjMK87PhXqHSSuAoL8KXZMRH6SVmLisDNtQKaA3UJcZhNoTcLfWd32cwV7zLzKxzH1rvBzkpZz19WEFnXp1",
  "key21": "wi63yVzwcV88AvCQNpkqGB4cHETTPK6jvDJPRMyLmf4FG1ShynGTiDhJG8iAY578k5x8f5ajz6YV6KWm2puzEwg",
  "key22": "4FM1fGxvPfp8XTwrWB6iwjvqS7YNLAXC2a5Sw2Pa7FvS2i65J7KYwtdpKUUjPyUDpFpZSvmjVRh67bnkwsVkCA49",
  "key23": "2sNd6Tm9NaPLNUTCEMp1sp4JTKWWUvQBPMHgkdJ3bB6tUZrSqCSPYAbn7pgJMbcABHB7pEnzt6y6qQ8wkKajRibm",
  "key24": "4tmqZt1Mo4JMkJqSanZCubb9Qa1ThykHPY8CJri4ymeNaChkP9wKdk8Aofpjbh8fpsi6WCCc9NGWwCLoQZCAT6iv",
  "key25": "mQBHF5tWdoi9vFnNTGAgBwgcmWRzhM9Z6t7QzAyCDpbTdhUHKjqTgDuP1XnwimDZXuqEj88ABTUfV74YaX9rpmR",
  "key26": "2cU67tzmExLKPUWYQSGoMd2W2EvUqgQktCrGMiEb13mpXJBXC1s6h6XX7qkw2U7aL3RErghZLPXaLCUQpqnioAgY",
  "key27": "ixxArFtoC2NTmh7DXEzc8bQUCJJQXiFRaUgNohoYAQBLTrMW45NdcBvFiwm3sTo71s4pWUiiskr6NEKfeSkZPEV",
  "key28": "4EkvZVMyCG6Q9knrmVZtg4LqBgpP9UP4tQW1RZgoGifsE7EEb9mbRX7wscdVHwRSH18Xkn5HkStzX8a5ui7jPG8h",
  "key29": "2X34Tb6K3GEtvzFKpUsAzj24RFiwu7b3Efv9JbceMqx1FGybCJa1RJ2muNGnkKpDzX9ZbdWbbhuPi5mtSpz795WM",
  "key30": "5SrBAj5R2SSsNrH5W6hJjPS3sY5dQGAuiPoLk1p8qXRhirVjvvNaqDoNNUozhioiJkHi4nRv8QMinrA7DF2qD37G",
  "key31": "4JAm5jrUubD6rcnDQ5GvztAHVGxWqRyZ1zWRvKyQf9n8YCmU6MZKbvKaDsWvEMFXQHMB6SsvtEAAwoBmsk3sPNDm",
  "key32": "3VFNZNGZcgmnWnqV5WiVT7fzh8MREdz8oQSmH9ufkyP5rPjwrqtKcDCzj49C9ZzAkRBBhoUXDt9BFp6Zx73Mu1Ao",
  "key33": "3ZYdg1deC7Bh1oXyw48iRrxMprbSS8eThBr5AR299nhrBf42GFo8KidxShNZtdVoVoCr9LMTYfYrZv1NU3pN2dgT",
  "key34": "osAXxC6KjDqaRssSprMFHuRv6DSgoxympkV1fgnKdAj8whSTixgbEcDC9kSTveWsZuk5MgFmmwpyoFnYUrvVLew",
  "key35": "3SkKt9LA7GbW7iXoqUTYWFBbHNXCg6cHBqP48rxiXq9jHrCxxLHTrSBCuqSgKsGJUzoiVpETtCkgcH34rRU4peBn",
  "key36": "3BMDPcYRufxSihr3MrVEQWMQF1UbMw1eHzR1nMBvsQqQJnLjaCuumsgGn4kCmgASrZ5EJJxY7rfXb9p22TG7oGKq",
  "key37": "3MG1yzYxc7hnT6SHyZvis7G8Cb3xtYDCeMJjrWvqKUKVf66obrL2XWQwiNA3pHeATNEZEZWnMEuZCx6dphuLYDKj",
  "key38": "4fSg5VqpDhbonCfuebYpVdZXNK8rQbhZP9HjJxLfe1iqdSRS2oFt1TfqLM8HFFexairVbu56TGWDB6VLgkd2qQPW",
  "key39": "2FE1AyV5bAEBUzcK3iHyD1tXFAkrJZcS252euE9Za7z6xe3fQGpKx9hFBLZHZDgTsgoaL7euYw8Uyuq6pesN8Sf2",
  "key40": "21LjCgjHcAz4cHd8LW1zQAPGX3wB7Q2TmECvfBRTYaQshMJ2FdP96hE11FmbMuSHPmgTPYKQDVp1f6KoCBmHcfMT",
  "key41": "sHCBBK3ZL8u2rg17gor6PHYsRtXC464gVQZcAkVqnQHp2sxSPmfguh5WNEYEVPdWm6wE63vCWKwtKhLtbjfJYGM",
  "key42": "23QGbaixrmQykNS11noSgBbnuRaaE9sPwA5b8bu5c4obRWtKNcMbEH5NuExuhdkkDt2ssujLb2oXbWwLB4Q6PWkN",
  "key43": "2FNnS72tUYJLyh2TYputaKGHVuno6usNkGhSugD56aozx5FNgV6YQZSEdH8iJrEh3BZ1uTdh58YFLWErADazpRzv",
  "key44": "4xFJddEurL8VzwQ82NviTBkmfYmKc4Q2nYmm3AgHAwWuwb5nViAwWdb1zPUiqxhdkNEmewCu4nrfJc5ScUmKDi7T",
  "key45": "aq1DBrW9wsRQx1wsqqtqSWfePW7MEbgPfFVFcKw9jGrT3oAjNhFYzmW58BLRjBj8FHkcKXh9k6ymRK6k9pimhJa"
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
