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
    "4SyTHzyNDEs2N8vCjuBsUw2xB6KsvJzkpCrBBsLkDHgVit3e4zZ8uv9J1kDY3Xqf1GNNwAsKxB9Pz9q1DSJjXLYt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Gxeedq13MuATRiNuKuGcxy5wqHhagZkH9S1uJMGXgZR9AuWjv34W1jpV2LM2RpFyRU2VU4L4ZvPjnTJQDfNpcqU",
  "key1": "2xiHAHb83tZDjAKCC6jD1cMv4TfNTMKdprEWavRCdqjTfgPFZQ98XL7ULgfsx8tn9Tj7iFzi4huvcK3MW2WVBYcR",
  "key2": "WSr7TqbhNUE2ECpfaBMYJNuwKWAmhyrbQETwqBsbur9X7HKVTtZCbVwhtSL4duHdD25KM3Cz4udnCbwtgzv2fNG",
  "key3": "62Ptr49DSX9NkKCK26c1Dj1XCfoL28PKiQhasWA7rwUS1Eq3QSXcME1qH9kgYajGBeyW4zcW4ziLmcuwtwBRCaGp",
  "key4": "k71KwqBcrms8beH6y3mnBErjBJpMtqCDawfdM5886wH7YEj11CJVLJTbvcVHpKgKEZerC9q4v1csyss97o2TB9h",
  "key5": "4VAUK72egCctZUnxFa2C1MsuxP9kuW6WNGjjPzcDak6KLf8fhLZ5EiM8x4eLB2R6Hq5MycwkdLaqBq6qU6bi3aLH",
  "key6": "3FvAPbyLvAaaQhpsLM8ngCzfbVCYAmpZjbQJQ8ZYxgHGFysg856AqHSFYPLeGiJtihGNFHRYj2kMwsgEDqTryZFq",
  "key7": "24aAcTMaenyXddQMUThyWD9L3cxtKZykiS8Pu278JWiqZhbWZuWpXEXaBDJDQErE4FznsGiwFsYu3WwzAmntr4d7",
  "key8": "4qPjH6gqRiGfDPEWgkwJvn6oV7ryHwSub3jjtp3xVJHNCbDoK4WFvsbYTAsgcxnz2mK9Ct8nbpi5ZcNRtrQFATiJ",
  "key9": "2U4QZnnv4oHDNrph1XdjsRAjMnETr2pthw2tChHMB45Yg1VxxGycFT9LZEV3SqceUesf6Nsz3dwFtvrc7UcWvb92",
  "key10": "3Xa3CG7aFXACVVnaReZoLvMN639GpFQKJd5SYCiaXDJfZDKsL7Q2euAz8MDhpYiZ7mb8n49J4KCj1YFrSddv23y3",
  "key11": "5pV6CAELMpMZTQe89q2h9FLutVsW7gYsm1NCWzRzjoVHzeYvHcY6Ma21j2toAopHWnJgrfhBCuKGov32wCF2wU6T",
  "key12": "2NeiAeuvM6gGVEwt6TRnmkTb83tfbR4sv74hzvApyzJLYeZ3FC7AN7PJ8MyZf9JtppemRXe8K87ezKpDeqhp7VXi",
  "key13": "9ve8Ryr1LqEWHhspjSbby8fg4F88BrSfn7R4BrL6TcdFEE7yiEf3zuDG9v2E7oPNYjtaiDZg8RgyRfqsoiunnE4",
  "key14": "4PeBLAbGxSBLinJ63codn9fthHDVbvLUm6jHqUhuqdAsWbNQp1f5qJJQoVHhrSiBdzoJfiND3vXc6QBzpRpYdXFt",
  "key15": "123YXdWEA4sxuYPJ2HjvzVo6Z5ERLMmuoJJnoXEj9FVoFQzdGDwqCDSZvHYBmFQcV56dqMLdmcgjmM28i1nrYCpW",
  "key16": "38B4X8Ze3kQFdhoEANdmNDSfLW5Eykiv3zm5Ec2dFbqZrdfu1XXh7YLn7H9M69bapZxiNCKVtfKjGSNA8m1EJQAX",
  "key17": "477vCKZXV9YC3FCQ7yAPthnA3XqyAFADugr7mGgjLuc1aX8vL1H8RhWCJqdDUGoPEgC7nSTEcTxuVCMrRZvCt7hm",
  "key18": "2VSi2P1B4FNyMPGXJMdYc9dCccn45zcgB8SdAenKSS52t8Cqs4rj2McE2e9e3KQPPNVQcZfyfu97ktUABmcG6319",
  "key19": "56YZc7DyEdsYCi4PjL8CjvgXkN14H9WDN7N8UuvDmb5SvQGQxsnYNqrnEECaa1oU5QMRckbZ13Wup6gYmKCbREyx",
  "key20": "svCc7fFkRujTjdbwpLiCcxpdG5CXYyhktaLox4cUDMmjsjn1py51qaFda5X74DCKMUkeH88j6N3aX89j7fe4Vuk",
  "key21": "3mxzNL5QjsD3MFQzgogK4D3Pia4BBc3KGq7hNWiM5gDBS5GDeUD6Cy6LJXovyyQDEyYMeSVzAojnBq9iWBWw3Q4L",
  "key22": "4EjmxkEWbVAYiW4u2e9RfGCXyoyF8Fx8GzbuyYn3dxUfChKQUmcFgbRyUSm4mZVVTSPW8m6M2VwW3rhSPGCMquUH",
  "key23": "mJ6khqJ3ddxcjgbKoA2YZurr7ZmmTPoTj4aJQg4nBFcSnh1c6J9YNQU3ETQoVbuWTeWvu12482wBie9LMK8Fx7g",
  "key24": "4Ww8mPENtv9zZGLHBJrw7gbmGwYbakVXMzuoYfsQLKZ2Tdk3vdqMiTVUw7rizbeTTfLw9kW9PyKMmgUHHB9hTvCU",
  "key25": "3J61dkSRGTppVnVFjTa4po543ivYsGYuDSGqveNgWCbiaw8PPxb7ZK84a3a9tizePFrXp1tzn1bMK8qPvy3j8rMW",
  "key26": "4kfbwXLi7t1tbowPeH7Jo4Uhn5ZUdUXLZXtRo4bd3NNDZv1uZSRXXTARDyuHvprAHdwbVBv1JAJFiS3o3BrqSJXK",
  "key27": "35CT15dTnkFxCbkB4SogQcxsGDdv6AxPujPicmEF3xxTAZAWAkTfG9Rtk2Do7JzHet8YujaXZUayGV1JMFbWU6oE",
  "key28": "291Y5a7TSgyn5PTdANPakbatsaywvmS981Vj3RUVGEEYCzE8hUfAbNF7cYChRKvLyNMmWNwkc1wp4BgtYVtjjZ4e",
  "key29": "2X58HcEu33RzxSQdeJEX1iQKr5UUh7NGdv9nEtbW1yRKrLuHTcWTtBV2nQiEkodFZdjD5VmjdfDVjhbNE262godJ",
  "key30": "3iXqJFspLmxfS2nEWgNWw7sDJJREBGJQhtEar4LuN92zeZUxjM8WFDuUxNGRzwxpEU1Xgg8EnSfQiVcSqNZCC3Aa",
  "key31": "3eCukkDVPNzKM4bVtfdovzU7rHDg7jFqGzHuZm7qbEE9RtqF2WJ26jZCrXjRNGDzSwMTY9yXtnuKDtSaCKiko2MD",
  "key32": "4smDvmzBMdmXH64iqU1Kp865ABdDBUJ5FKSTHU2Rx8cShYas8zVPWSeaeCP9ABwcAn4MJgqudYcGheJLWd1GAuLN",
  "key33": "66Neoitw7rxJDZbGvCSQ199Yrf9AnS91cCs54TwAVWZBYgrQSoXrYMDMn9nZEU9ToLDrTyVApGc2aCmT1BTnfFxZ",
  "key34": "61AK66u8TsNngkwiXbmCw6wMpJPVpL1T7FkzLM9hRqtwVQwUW9Ur7wi8ungafLyXRUnWTHsE3z8cSU8eFkmMNVmd",
  "key35": "5WcrNsdtWrdME2LvgTiuQtzm4k3pMtKyyev11C9YvAB8Y3zrA7Vbx3KikhKgFEAEde6eeLERfcty25NkWhh1MHsF",
  "key36": "4ukS6ShfNPzqs5RwM9J3fvVsXvfvgbadHai5KU3rrXV9Eyr6qscNpSBjDNfc1kurEUVgT4vKZMnHdbHL8GUrwiaJ",
  "key37": "55kZRzbnRnNTJvkGMAL3KHHpv9MqP4jg135DLBxLtwUUg9w6P3ttkewNN48Pp6ekHQzXTZfQZ2PJ7M511ixDxHXh",
  "key38": "46tEuruah4Khmrk8KsmL6z2Z74JVzdrNpkZo8whsQ34SzCkp2PdjcNXBgiJVjef9ifSCuiFXnVrSyj8yQmasRRbu",
  "key39": "4D1Ak9Swf9dMHNYjTeakW9qZnQNJbs5s6HB35CikWhxSFng2Y7V4wzEKweEe9nBmncESZSU7fjNSeLS2qTju8Hcp",
  "key40": "438NUyKLToYBGNQjmxHiLBj6Zjo4znbqLCU3PH2AZBifMUk5NMPKtpo6uMrTzSSS9z2exJnnMyDe5d6hncLsShqk",
  "key41": "jaAgtKusYaN1CNgNkPNVE7XgJpqT8Qvb4Q6aCK5cpzXPj3qj8moanDoCXfUnFhHhj5msXwEDkd3LJznNPWZYJX6",
  "key42": "aynHRNTUbFQ6ZXjtv6rNzSuP3c9rpinRHYMJGHtRMvVgMw6ozRm7o9GZFuWBTZinova9ceLM3T1E3avfAJbZebs"
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
