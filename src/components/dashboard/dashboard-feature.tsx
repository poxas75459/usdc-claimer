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
    "ceTakzzpj4iKPpT8ufzusjiUZACjc52CPGaxtd1ijsH7PKBHmJgnfx2boszhNyHEDPQtxpmJyLya4EK2TzfAVy7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uzYRuosdpUiAs9ZzPVy7qEswsm5HGPBfW6MJqMjvWNPpp3Jkb2QxMZyqRrVEHWEAympA36rF8SJUHTJjDTN9ZKA",
  "key1": "5n3q8GD9xHxWaU2w2JxS9CVsxS7utaqxAr2foukcV4i4WG8xVhyy4W1Kd2KhzKSpC9tuK2WkH2qBJgb9ymDiymYb",
  "key2": "g8C2hMjGYnGAwjiLn43s6zswnciknK66XZk15A1Tj5c6B7UiQoqvFgUk4W24dzqjLZZkFciSc2r5PAg1AuD3G6N",
  "key3": "f4jwKGmYPa79zhhYhTgMajdR7CDdyDqkjHansvhMVAJMtH1u5gXjSg9jBLC9EwgBdWfvTNGzCyNgWrcanD9bVMw",
  "key4": "5yMqsA6XseksRaVTonB7yoYMfHkBN7N92k2Uiy6YBZGb6d3SU6XvUG8uRL4xDmKaeGMm9UMoNde1nq4u3xejpwrM",
  "key5": "4LNSsz92wipHHzyPht4F8fBayvkynj1S1hiuYCz6ppiH5dqCQj5A4h6Ad3r5zTpr4nDBZaiRjD738UsS3myTJZvT",
  "key6": "4AzUeGwvaZDHociJhWqYSiHJYdh1yQ2BCa1Rn5X2Gt1sA4bGNdQCUkfjiLVBE2pxSmya7TyNBkBatJQuvYXxZ4yc",
  "key7": "4LGwwxkKvTX6SUjTBvHRaQPGCfV5R41xi8K9VD1FAqBQhsKxo9MnH9v8NKyXWAozohGbaKUqWQ7BUUafqy3XGGJw",
  "key8": "3bKHxX4pzN4CFAuDsKPqfFS1Lvd41qVh53GD9hG6YabjBDiLfFLWjZTJQWmLQg2djjzjC4VR43xBQfyfmhDSKddb",
  "key9": "9ex1XF6z7CzZZumyD6nz2hc6t5Sc7WEXGKiMRe8MehgE4iWereA5mrFdHidQWS5Zxsw23P2WYnkAeqRw1QG5Z4Y",
  "key10": "2gKGbpEsX3FEx5c68a7ownLuiGKYMHuQYi4R3w1oDPpQS3B356ZSdaYim3t3sCZBhsK2fdxgx2yL4CQ5hR86XRYn",
  "key11": "2GtCweXR12p5AATxn38EvaSPtNNnu8oq7myg2M1Dz489sNoy5Sx6uxfsgtjKYqaFp2DgUWFucJknjMrAN6v1wh3h",
  "key12": "58vUJJgy8aYwkWtPpyubrX2nXVZ6bB9KjqJtzi6QzyDLqNav3PevkMGWsPHp4SFsUDyfPiynYD2Jyu95xHERUpKz",
  "key13": "3LBB9VZvYXWQCR1BaTHEshszVuRXaQLeyg1q3ViC9898gGfpDbExG6aF2yaz5rsynP1Gu38SgFfKTid4QykWx14W",
  "key14": "3fvZBN8LmVEs5iJbzQMTexrTVUhn6vVQvWvHwETwpB7Kg68LdTdBYhwxdWAXbuGQe3PkTCfRxypBtav3Q5pBK2hA",
  "key15": "2QLbsESS5nt3sMj6oMHt2qyJQ4xDidjDgUjs6Acdf93PvVYhPweLqfri5u1rbnRGHSEfe3BeNigSD3Up9G96Pc3Z",
  "key16": "2FhxrzKCA8VDRBxv91ueTK7TdQsAjjJaWcuYbVSbnjzBh5zMBhxYpcdhWe4jtKczNYDFavak1aeqdFT8gwY3ZD8v",
  "key17": "3TrzdmgvVv3EAqXG7aNP8Ywwb6khittfesN7WJcAzD2GUwnmpaaSND9c4VHM81MzqB4f2qzBV5L9SX7qL1QdLn8X",
  "key18": "2pRNstXKcx5aSWDqQroMWCjQDLW4cqNSWA5kaUC4qJwH7vbngGFZtyv5p5S68kYPAHmWpVPi2JC8H3eBr49gN6jD",
  "key19": "3kiVRzqSTf9X8YWmvr72nXYA7PRozNLK3yK51hEbW8Be8p27TEn6V5pbLaZBsdLYagCPuP41TfiYnwJvH3nauV7",
  "key20": "46v3aVT2x9Bxx3xc2AajiRVqExdHP93Y1NMd8rHvYrU7EGdJkSvZpjdogFkqNqAxAr9WJtvBsXFeAEze1eUL5Zho",
  "key21": "5BrPhhzN6ztnH2fPDqGcUiY98JoTasa5L4FGrwBx5RBc5eUzWrMdccuoDBLUBb1Eu3hWPWycEKGiKwBtBmnc4vKU",
  "key22": "2JFe3izLX7sRbDnb921pFUj1Rdnkti5DFNgVXyZWfZdRHXr6RPaCqnbT7bSKJ5Gv83ja1DK8yPuchYAm4TDqwNjC",
  "key23": "XctmJGV6RF3gDbkLiyrxhPVUnPV8QJuinMQv9qmNHXyMpxqhDWwzFU2vPBkCn6r7Nhn2qARWNUDhXGq4ZfjCWA9",
  "key24": "5DuN5TDRTQRfYQPQiGUpNVt8U2HZbvXo9kZSmY1kGvYPdXHc2YDfqtHmbyaBrKyFtaHVgCaKgzQxeASodbVTx2R",
  "key25": "bwKLbEkXWoKBBWpYKPePAxoab4NHpyLPQTTYic77n5SzDQTnGnUHVSChaGVHoQgyK2iiQChy1KgNkT9RXF7v5Gw",
  "key26": "4SPc97iQfnsP7V3zL27sbuMNER2WK3hnpgjvC4Ztc6oVg5ZprBQS8N532gjhjpeKDbfjVqzevYytsY8KRF7B3A8B",
  "key27": "44pfygmm3N9Pci6rZGNWK1gfrjFcVFvezrKcb5ua34Z1YZ4tUNokztLL9dU2cXPR8f9cxheyNmNm6ETaiNpcYPvE",
  "key28": "63NvFtdqJhe3PUUSZHobSHu2ZhynDtMcewLWnZQxN8BETv6T1CTPWccN9AJ1LSkMAXwaKHBjuR8ZSgPZsnunEj78",
  "key29": "5DCrbXkhucrmDoD4KVXJeV5zZ3dJaCB56z3zUHT6PH96Zt36vCBqxV6HMbBnFLYkBDfjqa3MTan9iBTsgib9Ur5L",
  "key30": "RVuoa6Bq4LJ9xA8EUznp84Pnk9iKbHGPqqczCrRczmBFKzseascXMsizb2w28sRgL9h831koESuVZCHJGtRkA2k",
  "key31": "4x8NJziSFsjKJKEQvtwW6AZPQEStzbEV87S76smTQZspXj9LSK9YmwANUxPXUxVy3PFpXuBdCZGKmrP9jfevhMhz",
  "key32": "5AFnSrDRW8cjYUvH32Bs2L7DNJv4tRSaZm1g4hkpf6oNJzfAPzNSELggiQhLaj8QHxWyaQMtZ7LR3UZ7mCnYY7PT",
  "key33": "2jPEwBuFFqAUrUbb8cLv5oBMRedcBuAYog3qEgv389TjEmrT7hpTnYA1AE7eVp2R1yPntjUwV4fDoY8yuPSfh5qX",
  "key34": "ceSzEtdZk4wEcBjhGmCUCQFpkajjYcfckCa69EM9QhSi6DyK8yDhfRoEdoyYtF3taoXjWu1CyqSnBq2pjRBYp6x",
  "key35": "3Avt6Zo9DVUi3W8syojM1FEiNnLYaPv5fjMdHR5LLWcqQufGX9VtrVdNATyPb4ax3LczSNwRt8xB48F3zD9UH98i",
  "key36": "3JukdhNbdPEqbofSg8DPELPT7SP9rhgNUDt5F3L7pWX6fyBvZJKdeGvdhUS1m7PLk3HD46CqEAMYmJJ2j7vMtDGL",
  "key37": "5mLM8ie1jQPpaCkZ5Ggb4vMsqh672vsW7agKZookRPo78d7iJRnqm8D8UcBPSKWoRJ7CH15bgciresQL5ynPrS5H",
  "key38": "33CWw92NuBTpXeLEuqunNvqxkua4RF1sPu4VbifpJbRHD54spHhUNh2nuyz5R1C9Z3gbveVnT3naRP1JkrGnfGHV",
  "key39": "4VRbaEpb72aA6xdGT1dp4dkur6vR9Em183EaW7b749yeknoSZbXgmFu2RWBVnfEKHsSrYFAUdnjs452618CRwTPn",
  "key40": "3W4HDahHAgXJAJo2xJortu8wXuc2s5r7XHFUAyK2hYju4Gjc5yA1Jn5Bt9YWY3RMzxLEbuXcL1F2TpRJQ8Qh23kg",
  "key41": "4Js3EgQKEPsmoujHBtaxzVGRqXVwRsddcwbLN5TDcWfagTzx4nkaesmbLNfU2pMebzFpaWbR2uxpWUPb4Rac1fJy",
  "key42": "8UMKAZgU4RiE7AMreWVraZsUJCuaJqxaajUK7SEkMcYmbDVEHe3WNrQGMMVshJhCWMR9AQ1rEwPF9Tx9EmvTy61",
  "key43": "2zohgbxtEyK15ioB6mjAJepB9JrNvaZYNkhyeCYemWMe4xVMygEzLV1F1jqTNLumckLxoeTFjanamhHdQvNg9Sod",
  "key44": "4paJwdG89Tb3hby8H4b5hwrBi7kaPVmA5noYYF5rATAZvrap7xKFwiWwaiirWxmfRsXRSaGucQuGjRmhZ7QKsVEm",
  "key45": "5aa7KxaFzqb4Q6FkZ7nUDJnuizr7hfTN1SAnpEqfPQAxgWFRzPJRXEao27NyikBgo4Lc4Jph6AaFCdwD25NbWWcS",
  "key46": "2DUbkkz6SatzLjZWJAJL5rgCDchsQgYgLXpscc8pGcoCzZ6YTeCgpxj6gzo769KHmqteGNEeqWnHhL92mmUaTwoA",
  "key47": "4xEdotM4L6oaPp2yY3dH6m8U2bKKVWVE9HdpSMMdC6qSZvaVyNpFSBo9BvK5SjX6kHVMEw2iYjNcBY3kQH8cGfKx"
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
