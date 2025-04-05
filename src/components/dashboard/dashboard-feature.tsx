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
    "5YweAYq3HAcGcfgxvNzRyEBQ843HUwWE4PyAdzUrQxStAbEJcx4CA62HQu1qDoA8ZBzCruxDW5r8X1uHCQ3LaqwL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3W9DSsYMiraaYuHc449B1AWa1K6bMoR433MYt1aZuYrVnk2wgAxjEhV5PPUhSe5DPr3PBxK2TUJoXzmzGqaNzbmy",
  "key1": "4NJUdTau7baACK495B72Rh6pfkjCPtdWw2mtYY5XRu8Pz19pQCLdFuEuKRzjavsj3QKsT4LSsmxWeReDGjwLZtn8",
  "key2": "36D9gfrvNHrdZDk9NUXivwTaJxcQUxNJ472k6irCSerMwxzLQaxAb58ofNdtPyq45qqrAfXCYYzJ8FkhYVkEPpwE",
  "key3": "4u1BjKvzcSsPE8Jzn5seAbt2bJSsBBChbfaJsckNH5zxHHMJKn85qfh3N2kLxTn8Ym5nUmFmD7Raoc1qGBoai4iV",
  "key4": "3wXe5UW9MqcRwuQpy8dPz4mvxSSCoWNMK3cbW5DvXKbHmRh1cdWrNhV1Ps6z8uMT8EWceaPxbHMMkS5DaJ93Zttz",
  "key5": "2mi8XaMurseUn4jUEVzwzF5i7bELyu5uQZSrWNvHQ7QdrhzYzLpgjtBXReMSGhiu4aLeSjSZnpwfNtwpGxFKoMA3",
  "key6": "3GCkqM1Ywu5PHZcLMYjvQnWYDGYJLeyjafY8UsZJ4JMtGpz3HNfiENuSikfrhajAnXAJnjxUEapeEi9Y6RZfY9Qh",
  "key7": "4XAUJUUTMGVqdmwWrac9YxC8aQkYsqGtiXcbXAqcHuPCqRD5d4wQC4pxcU91sUZyEEaV6AwhWJoD3EYbnTd2DUsL",
  "key8": "4Jy59fRk326L4FTAKYXE63uNpeEW2R9KVgYzeDcwQKVVaMhXZUFHDEjfXobHGfkkdPWmNhNfRpiB5XtNhJjjkoaK",
  "key9": "355QjMxvkTKx7wCZRj42f3DTVJLQx2WSY2yvizAEQFKQ5yscjqPndNnExGQGDS8YPgYgTtPiMQ19SfWTWDvdKEQc",
  "key10": "2aVZ4vkJUJPmMzGHF18G5pxT12tsFjS2fp4yt6kdHnect81JzSv5jfXD16wDnSYUAft6wVbCmVWWEjbeHLnfAVE6",
  "key11": "2MmBm2YpvSi1Qcx5HWk7aQbavquT2qUczgiMv2LjCqney8sN8XxJpUrc4BQy2hWiqQYmEDD3thxKxWiJsTmNdGSG",
  "key12": "3qVeR1cZQMmDL9sghzmcQdwJCZo4wL27eCEWQST68vgrFZ687feazh9P9Z1QT9E2gLL8ohir6xEWrV3bhcfrJJG8",
  "key13": "G3yfHHz9nLZfWZuApUPjT5YDtRpNqRpn57BCKpphhDAEHfGn1trndoVrgKef7CupMvFauq3QRT2p2HKbBX7ZhTr",
  "key14": "4459XGsPj341y8ARiFJ5pZnSsWYyvXT17UsewZMeXqm6h8MhZreWiPMHgejTgurBJ1wjdn2CxXsTRHFNTuGoE7Yq",
  "key15": "m6Zt4oDzrRLSYTopYo5doNjhmHnCf3b6QoBMiSBpaxyaxWp62GiTcQGSxMjvfoWNKukyJ1cUyvMyJXy3iRKCKWJ",
  "key16": "5ZaaDheXSzsx8biZPdk6ih4KC8KD9Tg4bL9NZpAdD3shn4RWyoB8wBxURsxi51yeqKnDx15BJeV4aagdGb9xQJtZ",
  "key17": "127mbtWPdnEZ7SbnoR87DxrotirmrUbv2trCm7cK3e3ocbivY8g9AndeanWv6i5sQFuNP5dGKcpLx1yWWbR6EiLa",
  "key18": "2JFJPU99mJZz2pZSrgPfqeudqSPUpebQ1oztERD8kn1QzXkKH4GUBJzeEuuVSFDUHpDZcGKiMqrZwt1Ea7MDsV9Y",
  "key19": "zN1px83BqZK1MLco9PuMFXxtGB2PaKSxRBuLocdvVj8D8LbidCRbGXv38khkbByRkEte8Hjaj414qqDNykHyu1R",
  "key20": "22rhgvVoqpwG9WQwpcSRLAthBa1m2BGZyQG4VCUvrhkJbmBqxmGAhXkLdG6ka7ZhjY5gHA2rC6ha3Nk5KsYQktvo",
  "key21": "5cp9o1GLMGqd6dKEKVimgj1g1f7x5z7MKB6d6M8GwFDrDg1L7TAm8HvaGpw1v3peoERuK1Nn98jmceue9SQCCYAD",
  "key22": "6muuSHw7uwWdCCU5k5jdw75Sn5yKQosRDnBj8FZRuRRbWswxEkoGSpuBQCb94bnBQ2GKSyPWEgDbDHqveqxemkm",
  "key23": "PBkozWNgFVUswrkpTwgHsER1eK7Z7YT5WqgaWc4DeJDgUGZESnkGvppa7wuiJ8sTuYPKqvWPTeMUJ3CoPSkjAFT",
  "key24": "4wEttW2ATfkxCmWQMviUM9hdoQVQvByhhSjHPPV3gwiHqcm5npvTjnWJKgVe2KmL9wYaB8j1RbKzqPUdrpnqnJFi",
  "key25": "ZPg7aPbyRdgbwGMsminznBoAb14cCUiEZxM7ZFd6DQLjwiUoDuqsGTM9KFBx97Yqeq7kzn7H8nsRHbgvLEhbhep",
  "key26": "299yb4gk1wfNC6MYZSAAYLiYu4E5QiemPC1eHEbbfa26MhuBBnqxtMi83za6LebKpPrFHgAouqwKNks7zSsnxdV3",
  "key27": "5sCU9dCBANQsDcHJbWujC38oUR1qx3J3sJuG81SZnUrZbwG8cLsTapZdeFHXa1sRfryiasgmM6Sztguh8s93TGTv",
  "key28": "5BUpevdUuxvpgdNncAcMLX9AhqhEiKX3fTt8WfqW3tETtVa3hN59oQB5rZqRPJKmQ5R2Xq1CdBVsarXD4qmHekLD",
  "key29": "3i9D1cMUWS34RskzeXkFFPp56SB4g9pY5uJNHoSLFgZqG6ah5b4it9XbETtqMxi8NQh2ENqt6x8SZLdQ7HZvyGgz",
  "key30": "2nWnhXxs52aF5JRJTAWzrRNS6WbQVLR67tXA3mqutppaetkaktxUxXytunzQHdiLQeRY9v798osJvVBMjUeZN985",
  "key31": "egcrmrDnRH5pkx538rf1nH8FZ4Gp6MTpazp8M6s4yhXQoSeq5Cf1phQdr8igFmNoMp72T6ehqCa8BE8NoAsprwz",
  "key32": "62Xs8aAKrrXaHR7WZbkVPmHJZsFAttHVY1Znsko3beiag55AeXXK4MMN95ApE4qefJFLx3Yft97WpKfR5MdzZTgu",
  "key33": "AuEQD2fNB4MetX3MgZGqYYomk9VQRLt6m3xM3t74hyHzyYia8niqcjToDPggKqWt6UV3p862tRFwpZPteDpP9Yh",
  "key34": "5fQdcmaMm2fKYsFUqrw6fUhPBy6JMzyacLndxXmqHxYpLKRogxdBnkNnViRhiXdr8FUbES9e84dQFEYR3dZNDYy9",
  "key35": "3pFE9HYmAwg3rAkYeRxQvg9W36tC1DuTa3zizWkQgpVkehhePDzr7GsdjtWPxaFKFL2LT5JYrRP3RrEtmmtJwU4i",
  "key36": "387nUAWngcJjHcodozktF9wVHJQC2Ra4mD9jYaK2J9ZH254d79M8syYZiRVBMHuakq4ShHcY8psWsPNPFyk8sBA9",
  "key37": "5poqvAYyyUzPBZG4gCjYmtDHcVFgPrqDxgysUo516PsgRSnjQGwfhpmWJyi2ykSorheu1MtoNiQYAo4Gh8aVqCQy",
  "key38": "4jovv1rff7Sr1UbNMauWrBM5cEETqRj73soj5MYYcxBbuVMGP6xYKiNEEiwinhtX1QbnKRaGUYnGH6zwdg42jWPj",
  "key39": "4AkiVHwvYRD2nVesPUnqLxPKYV3wWuKcYWQboJ6AntJNajmFgTrDawWB8w8FhfeqvKdWtZYRWUS8gZiiMnBiRy45",
  "key40": "5h6hyLH5rmrzH2rj1nnGrYjJmXPXpamEoRRqjSLxCvdPTnE8oepo2Yv2ohMULZFCRb8ZkQfCjbGCJgLd7fTtZ6A2",
  "key41": "SJJAqrUTEtKwtEyBY4j3d7Gu9imFmyX4JEeFddNkzHxh1KZKr5YKoznnZEAEw9cjVWWUaSsmVRWmK3HrEKasPf2",
  "key42": "4PftCBMfZkXAFHQP3yGsQE7jDZ69YHeBus63q7CP7gjSNQkAxmYMesBDdsxMYLPkGy86SjSTxcrYQoufZq8iLBuq",
  "key43": "3TAD3aAyYFL41fq4uJdcL23dPLqi9dw9BSiABg5guAVtxMgsQrYe3EVdaWaoZE6teQiVzg6PejUtUU6uBeJhNE6L",
  "key44": "3sKw1Ko4ka3XyU2FmX3gSTjtLANDUg9UA78QvVZEoYkCwk3RaYhyXMx45gn1a6ndLu2zUy7V3kSuY92XfkV42L1i",
  "key45": "4EB1gqYTLiCCXkKk9BpZjZzKfQhkvpkCpAh9mCHAcg5XFPh9HTZM2q1ZPsNh4TFPmeyYCxcm36wUCk9nsiLameBj",
  "key46": "5ABH8u9SQozm4V5SyqUHeETBnwarX45AqoPCGhPjXYN749mW3Xm6B8x84HZnVrXtyCM1HnNKiMEG5Tu8DLJhyMXC",
  "key47": "2GMA4KEkUXUwW51VxQQ3JrZ8efEDpBVugNYK1wxcDCFsZ45nUcKjRrp7Una4dicvWHFYVRzDkmAptKYbw6yKV865",
  "key48": "2hWZmHJsAjeVSxFDt6ncRbnGi65dLZYizXoJSg9DCftrVZ7GYJfKES22eRRGupBqpvP74P44m6nZTAnfPCgvxoed"
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
