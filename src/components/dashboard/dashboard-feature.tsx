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
    "5qz1xodWDrnpL2rpnKWUASaoC375Vo4ta4oLN1zoK4G7YdCTB2cXWzPbqWDzWU6ZtEpP5NefPyPmwXYAtsc6eUPG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dEACAaSZPQFwJaVFJczBYwownRzD5thsAiCvxWCFYS1pWLSvvHpWhuEMzUYKaDNULzgsjoDqGB4AdykDVQscjTw",
  "key1": "54uXJNBUAErm4H7oCSTV7KZfGQqRiHc3J1A6KdZKcywHdUB9QFowG7Bb8F9Yi4kEJ7ohNoTdLTCcwY7UwgJ869Tc",
  "key2": "5ShyLejwP2QmwuSDBuoTmWFRxy1W7gpDFzEERQgRySSVfAF6tEKm8tgTdBS96hKwMvySPNfQk4brGfx7KzSUE8cj",
  "key3": "3Fi1p6VVm1qNzFcewj63HvH2xDy3KXjfkwTvMWQQoDKHRBJBM9F2nohsaKZuBpkpJV6RadXumgFru6sd5m6vsJLH",
  "key4": "4TvtNMnJDywmncE6BKrM2w2qHCwBmQ2UZxiYc2bt8SixrUaKLqEknZVSF1zhMqvNrrPWNFyyxgudar2vWnFvLThi",
  "key5": "5eM1ZPSkRr3NniCn2jidx2VSScFVAskrcdeaQXgBT5uEEdBexGuhRkSiwHjhV17qnfwcZiec58kaRNSFXtuocxmN",
  "key6": "56zPNRpJ9yUksriteQBGsRZwUBRHNkjJx1boATZvMyBBvBgaFYHMNtZcP3g18Fg5uEAdMMNR61LxhyH1YaR9kysp",
  "key7": "4zYq9DkXBKkvf46BEANxMLNm2rbfTtjGxgGJsGCMjR7QN9re3UTdmtyNWfbyNEbZFo63ZvagkqLNeoKYtf88EyMi",
  "key8": "4vQcVTYHQuMaWgPZY4idq74h5vSmhcb5B77mNFukpXgaLcCopr9F55QKhYUpK5qZGbnkTHMBkcGVW6scajYJKDe9",
  "key9": "3KgHnNpQmZdNhk1B2HUcSzWqqRyywFpXszojUP6eK6gnMQMzy2VsJeykBvr7cpfMkMb4894vpT1gwnVJuiWszEKB",
  "key10": "4wxmPP8fCaWH5zJLJR3wurJHH4cvAAFMdSbPszNVZrCSEVWTB41JpM7rzgV4ktqWnX6XnUCMeaoW97zhjdZRUu6j",
  "key11": "ZzxLwSfKE9ZU2zS5AQj34qmDXQJsZQ3iGRSh4HMCvmVE3WEUDpY84xK7mTutQt3TCjjnxxS8DabFumERuB2n5D9",
  "key12": "2pv3K2NKXW8F3CJvjGv6Q57wFzy5f17KRCm2hWRH9VPo15XRp8F9znWSWCwkFRfn9hkqXZZPtUMH5EgvnqvvBv75",
  "key13": "ACVy1cpw6mxqvkkVi86bt8wMNAaFTvf9X2t6h1yyHaAvcJDVr3ttkYpyFWNPumRX9oyWgaYszrCbPbbRSEvTMZb",
  "key14": "VJmUnVfxJT72UBcbjMhEo7nyDa8Ahfko4vMHqBXKsWSgPg9dwPrDd4eWvYvhCKNUmuGYiyJFPpJ2HcsCD5KCwZp",
  "key15": "5GJNtXALHKKGWge3RZ9RkQHbhvDB8kmdw6H8Qt4tVzuXRLBXw8GPnxMifCcEs272FJGYACRpUaP89RYgHrsK9LhT",
  "key16": "4Eqjjey2CnVP6zfoNB6GcPU7GknN7kPz74b7RK8PZ2ERDtGbb8amybTXPXzgsWAASy3Z1dCySzgv9W4qFuqwFtmE",
  "key17": "FoRK9aLYLNidKx4u6G5cYtJYDpyMPCQFLuj6FYT7T7zTNaD3oP8K8HDazK6XRMBCpJmt3tyYwTytXgxDNHMp3ib",
  "key18": "33cm7TRKj15uTc5wuErmU2roRKgYrah2FYrNU7CpvH4i3YTUWHGGAkxEHB5akjXknWqrHgJs4k51kpAgJzKs2CoU",
  "key19": "3h7XGHjGwszapSYwC2LABUJTjf2mM4Wu86Dw91en4QRAZ2gSaXKvTjY6JESMFKTxeBdSSXwZu89VUDgERw2VbsVH",
  "key20": "5y74i5frpmT4ivG1P5ZVmwrA72PLUHzA3jJkt4JSH4pYmGRPAY39srnT1qQ4wDrU248pVYrL6HncdHmPKnGL7iaH",
  "key21": "5gg2U6kBqX4v3snBNQM6RLfByXF7hVKziCGukdetVZWpkHAougzp5WjuZEX8FsLB4SFo7UC8iXHpRYbcaGCMByQU",
  "key22": "39hG5ocLxPZbF4skmvWF21jh98JsMaEcYsokP1C5EdNArrvakJrU132V86WRPTYvPKKuqqfseJ39jDrjMSuxZSPD",
  "key23": "46cUKcvCfuNns3S3LzNDy28wXTPouACyTjmV44fTrRETegCTo3T3XigT72wGdeTT832YVAfdrTFZEoarzgQB81zp",
  "key24": "52cR9wCDnhSxeseQvUWJSBpY8rhFj2JpjK6iqSHYQrZ12CER4Pd1pGiAzDK3YuzesEq13JbDwufxrDsYBrZYbGXk",
  "key25": "4rrqF27VC47fV8NrTqQh9vFX8jBSzn9n5UnT5pQyZZ6ipnfztw5ABq5fiZ1KzuzUNSUb54AXD2MVH6kxur1M5Q21",
  "key26": "5U7Age1VywxVycddWMf6KTEaPzsRUAcXc3Hj4dX3AwPF5GdCxPHm2MHhyjy5hz4b2AktSrFhFKoLQomByMcjZGqG",
  "key27": "5TpLXmRsPp7WdVC16EpjGjcQBttTyu8xx8bShyyEWXodWboHgkMt1knBw69ZsW4jHMp1BAW3sc5ZD6cBFhyUguqd",
  "key28": "62ho6PJCNAibmg79dEqCc863vZcum9rQfwdEfKhFryigZbMGVNo4LCut2wKiPwAtQochN917WQdt2iFo6hxwsc7Q",
  "key29": "hmN3faPShECM8rhRbeAZ6KQxHb4bMu8UyMMTiaCx4ksfaJHrgxinN6ov5afhTGKGkSYYd5Ynr5YqRM56W4SmuA9",
  "key30": "4XVbmz15tvgkhKTFXRZXdPCFTsTGPtiWmmcMFPJ51Sj2Grrf8mZYuAigj4unQjadKyjD6siSyQKwSZa5DeSJSJ6r",
  "key31": "26eNbixcCm7BFJxSoBFKi6bPgEon7D2pJpcuqPggewz3i2iZq7kKkSkgQjMuzJiWLtSm3HfWuGves51L5aZCnc5W",
  "key32": "2UCrG7QuVMahXdBDXHd6r7FYxGPiBKFwpbAPiS83GFkUgcJiD6syuc7d1ZmzfzDKZm9V2ytM3nb8Zko8U2VVic4L",
  "key33": "61Vdfv6kv7AFq1i7nZZaAnTEsvv5TP2FdJStxictgvuqDVo5tq1FaBM6vTnHHJvxjki4gHiLGTjK8fKLduAhGgoa",
  "key34": "9pqp2MwsYDiKYx5kHUzs1NR6nPpLWqGgo9NVjEAEftDDox7EeUwwiChqoZbjbNEo1nrydHjqpLoBpspx82S8TWa",
  "key35": "5T3oytH6x3H9yn3KwVfyFKCmZHwPJxJafFhfF3tziRafFz9Sacmyzr2sQpraqjR44oqpaGATzpkGLaHRqRJBg7UH",
  "key36": "5Yqj92uYiNqJx8PamH4kZ7ekjbdhAmJERcVY3rZ95sVivAFE7x5bh7ZHYeUMMejy3Ed3UdeihisfctzEqibGUdWk",
  "key37": "2SiaAsv9Up5gLwrR4C1dYvzP6CVpZW2EGfwG83d9Pk2V6dutR2JTQiTJiecaPRLVLhrLNXCXqt8UphYZ8GACrN5r",
  "key38": "4pFD9peHDktM8Wsdrv8r2i7BXcPmrDnghy2DfuF5ofycwBSX3AijczyvxAimEhWwB7P12tKZxi5EGZMPhsdCDrdT",
  "key39": "tnHcNJ2Pp81rSs1jswzWWAex7XKCVwaAJpz8nHDaiFydq3poeifKAugmNjuK7e5Kv8ay78x2Ru4wo72FLZG7Gbz",
  "key40": "3R6FdLkXtnN1bwS4RnT852avRgdUXtUaaJNZ7uvhez4rgFoT7WFZ76aMASYBUNhSW9CQ7daNKQNi8tsXZo6WUgAb",
  "key41": "3F5jKRXPaZxcYo6FH4sFUszNvUu3aAWCfabq1BrdpPV36NdG4PZfvHUuBk3XrgtATR8oAZrzFX5tRxhYArTuQ3m4",
  "key42": "5AH3q1SPHVQZwFD9irTp7fkhgoBSSwTv3ewCktpaFwDHfNEuhNV4nsTDcGJ4tnPTNhFeSS9opuhdenA2xJTHPHPT",
  "key43": "5EYjFVwJXpmnmch5FB93G4ELABY1Roz3otKWTA6Wghb775f45xBQMznvs2q6ZY94GQDsZ7DBJYX2N2yet7Q6gRan",
  "key44": "2aS21MVHjfjgEJJFm23h7TkJiRJq2VGS9jD9BT4HzmVD8qU85TCA7y6ZXzu4Vm1AzTJMLQBDoGnCe16sumkXoFH9"
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
