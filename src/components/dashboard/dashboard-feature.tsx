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
    "5UBpKv8Q2YzYajS1RgtTN4wVqMzVZ3QUswmgCsQ9bX8nnnqy8VbVzUAYtwojQwA4YsFbJtVh3oQQRXQSxK2bB2Rz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hn93egzGw8U3gzZPiFhPzdsXNSYdkrSnn5EEyDBndNXyVtAmrm7mqgER5MEGhc7Rr5HiAzqMekjkEv6R1t89wQJ",
  "key1": "etBC7jA2AvWa4CzwPKtk4oLA3Thw6wXW7Zg26m4pngiqUkdraaJZw2rMT3Wfno5JQWQ3vavpinEZRzBm5mBj19i",
  "key2": "3q1ySYLTmZJELskryu1FaJqTqbYrn93vTiZe3MCri12nguA1E38E2SBDzdWfS1xxQzyZ6cfgp4EgLtFax87BkkCM",
  "key3": "49euUBv4pkL9gjpRzXjr7EL4gpPDxfSZY39gqmT8c7WWSj154ghLwrL5fxieTRFL5dLpyLtStdLxR18aRJj5NN4s",
  "key4": "4JBGBXSKsAx2bGuaGg8U5SxQceenL2F5RpKzvpaELYzgKX4kSm2HaTTFhT2E9JWweD1bMDLH5DtjF51JVFUAU1cN",
  "key5": "2JjF9sZ7qKX9f8tnPtkYE3ph1Wbo3uynS6GmEh7TfCfiQPVLTARFW7P8dmoQ9fKSx7hxwxG47mhJ6JqMybpDXu3n",
  "key6": "4bTXeULhUEprkhifNwjXSXVm8DYFY56TDFTRKphmKva5s76AGVKndGyYPCurQQnpsNMFXD5Y4pzFNYHFyv5QWzfN",
  "key7": "2iN5eQ7mA8Q7oJiRJTmj6u34KeZMTetvHES7fFC7aFqxUUvNJz1Jxcr81Vb77zi61rcYHc8gvBVrCJqaerKMt6MS",
  "key8": "4q5H9Ytsk2PSfcKLf8FaKrrvLUYKdfm5hD8fCRegqs1FCkVGGqpvxiMPxV5zXrJDyZ5CxsdqrMB3efTXVSQKNmtx",
  "key9": "3seszTUuX3ZxGgXggXjNHit1BsxMkxJJhVRBxLCjWyp1tn1gNghDtnK7vCW4HPm21qbVtYEDGVnyCRRBv5drcFGo",
  "key10": "3wGaSKikDgPppcPweNMJ7M9rdNYiESXkybwz1WiFJNhxeysbHJ7KYg1aV698jw9sDzPnG4n24SoqYVivus42Y3Ge",
  "key11": "5SAuCCM2kNqSN3DJCa81YNUy13j6m9JgzH2u91iTjk6tDpQBhRrotA9TFbK1nunGSsjdtdvPACn1z8TSrGc4vihj",
  "key12": "33wT3yEnDFgkubaAJR1XKmRjFZ7rN1KA6aQRSHGfqpA77GkGtGCrDxzneaLmZwfztXQ95emhyqKBykE5pUwZKPpN",
  "key13": "3BPrKhFLyrh357aArKy9ir7EA4X5wd3bsRPWS1JYBswZReH9RrHGRjH6KDgvY4kF5CWvordLiTmphzMTxc5QpxXj",
  "key14": "49ZMAnLmeD746mcyVazUYSxXHijVmZtHtDFdmkYfHFP5CR8vgXUaUdkRSJ8RRUHtw7kWMmZoU2XUYV3VTueW1RXe",
  "key15": "4sM9S7TvbCsMFdNbvY5PyhB756KYgtumW5nHzXqgDZAHjhecAAwbukyXPBvBmUvPVmKLDJhWCLjJoNi2pfkNDSzf",
  "key16": "388vDq1FbNFJ39H7BrMZgTr1zeEfbEzMa4pcfxTBf2DXdirU3vPVXujq1kPMc1asiLP6TYwpN4kUZXmSWfPhPcCS",
  "key17": "5kggA9nnbLKm9cysdrvEHXHZNr8umkqARUFNyconaZoSn39JDy98qjoNAXTiZmbo2zjAxqiRyhAUa2AhCR72sVEC",
  "key18": "38askokvV4AKW7FwFDHxffdFHxTZ3CVyAzqzyDYRKdVJ3mSLZH7hsw6RzkoFLyaLPyQDDCir6CcJd95tCNQPZwp9",
  "key19": "53tste61efp3YBhdSQUb2ZScv5dg34UpR3TUjBZfGQDv14Vzdy9frvjAm7VkfvCbVoDrKCYdrAcZ5hcpU8g9AYv5",
  "key20": "4W7Lozf4txy9k5qLrDGrSrHrqqHoQKzvnbwc5438xCfEgfmzWzGMEH4MZo85WkMMkCDxvCNM5bVybK8vHrS9f6bu",
  "key21": "65LpY3XKhfSkqyS9a2mZsiNwbxMbbMVeeUWysNKRyeVdeGheN7LbhGVgyahnuC4Sbws6ErU77QQxjJJMUWpo5MML",
  "key22": "2GKTWJbiDbfw5bzVciHC4TEDy3MBPN4CZnaGZfEMCCNc4mwgKV8wYe9fpuTash6UTFRy4FoDpVx78qUtzGSpDgDM",
  "key23": "5HVRpYjvQtcGeXTYmfNrjsDCr88BA4FPYtjdLpjUiPXbf3mWcjoAwWUJvLgrqEzb1deZZnBuuumg4DujnxRcYYpV",
  "key24": "3YuLCwuecjEQAiUpxRaFwJ4VmLA2ib5Atka7YxkbngqYCZcMeSBuZeKnaJvj9kABZGKb9xYavuNMp41h9oQHoQgv",
  "key25": "5gnEPYgRp8j73m3LW1vwMikUoTpQX4TgxtoBYRzFaWuKa69K1fFLAjdSofwq3ronWSDwB7QDEjFAP2vhJw5i7uFf",
  "key26": "bHeBoodsJthLRnKNFK14nDBR2wnyf9HiUn4CaRVxGQpj3y9x5puNo2W8RGnqatCEuMMbqrncG2ApEKfBT2B2SFc",
  "key27": "5dwNmGa27zmtxLr15SThhf6cms2vB8QH3VQybyGy3YHUq43QsvvkiB2umrg5iPXcnA4GqZgU7JjgRZpWjnX7hSPa",
  "key28": "2m99YtqZcfgqLRavL5XjR2p9aXjGmF8zUGtic7sdDCi2ft2zJ9LhUk76uhrEo8wEZLux2WZ9HDf8AQkp9AHrCfuT",
  "key29": "4vvj2u7W188JqfgEFyyTHMdJqS92i6nC56gqyGXNRPjD4ceZnkhhrYxiYs4uc6CkMc726B79uZbwHrifo6m8KkhQ",
  "key30": "2X4RgjEtwB7rWMkqnMZhHivCRubVDbdbArzmufbn3qQ2XVwDG6sKaCC3fFE1ZMYdzVdXScR5549ASfiowNPPj82N",
  "key31": "oxB3iRpte2j7LGxTpx6tdEWPKgyEWvUdHkrwC4E6peneEmWDh2Sc2cUqS3KTysxUBaRzLfFrccfVoZgzG1FQj2E",
  "key32": "43EddtH71pMY2NyPXwtJEffYE7w1g6Y4SU7P79QsGVb4rt9GPkXz8c8cmDKH5tzdyd4kXSzjD8YeigsfpCyrJ5Sw",
  "key33": "4YdMPbLNRuPLoH4HmJPouMdMqNLdBTRS8g4DKzUKP21CcLsaDJyqxV35fJWM5aXJRfq4xAYBoqeQ9AiHcYAzEPAm",
  "key34": "h5faaE2TAcSPaKfzUeVAY3XPRQTrBikb5LbgZncgUQSeXpztL7Sr2jry4wKjGQNDHfGouZmyYGrVhPogKQe5yTr",
  "key35": "4mkyydb38ghC53DY3XQSTx7mcYWLgzjv8Jw821tQUFXEyGxWN2VCVAsqwa9JG7eWgzWgi7AywTRLu8gYRVCzzSjp",
  "key36": "4BHdt2PkE6b5F36djbNLwsaCTYG8gqdW1aVv7w56xz2vGiucFfwVrxUx2zTen61V93i7j94icJwTnjbQTkb6PMN6",
  "key37": "LD1yZMh2oBLdXS3BGTzKTCpMRtxK3P3AwW4Heng3VjtpwhkEMK3NFFtpYYtRT7PGfw1qR46HfbXW3vrCWD9SaRS",
  "key38": "2bGsYWCKHZ1mGAZX241AiQgyqz4pmGGUKTBLfwTrrFXASLZ4GiuRrwGXusLdD5nFo4549erJfwbDbXK7egFV8CPc",
  "key39": "2u2DByEeuWrHvwNXzqQQobDhDK5rFTDzNUHpYvuUBHmA5QrAeqD4UFg88zd9w7vjgM4PVxDRXXArZFMdJzhcpy72",
  "key40": "3e14nMhfYsTCDVKogPcT5BJgzY8FGYa1AVp8bXF5imeasrLamZhhjvYgk9Q1bw2yahjgUptguMGUr3EyAUkf3WHP",
  "key41": "3AGe3JjvwrDXMEdRzJ24QfoBHrZPSHiQEeMq89DNiSaGevGrGW1svyRm24iaZ9L1Tgredux5ifMxe37ZZDSrN3jn",
  "key42": "37vFN5CfR95pAufsK3UvkZPL7RZ6wvQTpSr5hN81xchyrBWzG1dmCCpJYixEsgu1TAkqkfLLPZbNV74GKkwfWpXt",
  "key43": "4WoPaKyeBzxAtuKZLVWza1GJ38aGXY7cAeCknSdoFHprvq5KWYHbAp42cDz97vsBFShWPy9AXmkFuXTFaS78o5SJ",
  "key44": "5N1tASDrkvBiCFtpusRCcGKEZPsgzJgZSPnpMhN8UJFvKGThP59sMN1T84xzCdpJDEHokXD696FnwNSwFG1Bmqn6",
  "key45": "XjNpuk3SBNndR6wEkSG5YrbDYprDgor5fzDNQ67otjVwf2V4LPtvzWEdYkrnUWUNTz9E5ZTNHxhL7itNeEyM5ni"
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
