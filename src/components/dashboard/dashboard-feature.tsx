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
    "2AmdjpjTRVzh2iCV9CYCoZAiKzepsEUGoG5zq1Q3f7WGoFcbDffTUH9NzyLnukwiaFUqwQHLHTTpkQtUEBTJenQ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D9QAtgX69k6Uc9YfvBpBPxRqXjLMyN2QKZtESH4TGQJKXb7juvxkTvCTCDJ78rKikyJ6FsZTwCg51xKyzEvxoAz",
  "key1": "3GaXo5UDAqch5nVapww9DnWTMcnoVmxKZW6gqr4yJPnyNTnz1GGTsjXgM7A936Z86TaDQ7WQibdANRRRHFFJNGgm",
  "key2": "4eMcJHnYqHM5MESLpygyeAojbEv5trx7qK6qgvHE3tGhRdBPrMK3cx8XwWKTe3cJY5ZGboGdsjW6KdYRt2j8QeN3",
  "key3": "2foVBayXgnL3mKBZUveTbDDpE15GxGWfYNmVGp5N3PkEskwXr9wE3QBvNsV1XPGCG7UqpLneUcGYQALmsegmzBrt",
  "key4": "pZkC37m43D2aj1N87KsDWDiHXCEZsrqFUDQEqTFhDXBhpu4JVQxyyWh6iFKeYJ85NgqLZU21NTm59tRyKpATTVP",
  "key5": "5U9JWiiap8k9WG6NLx9Vn2XRZJx8xJCU9gAKxtzLDAdQkgqyN4ngWaSMW78zuutEvCBc8XQ5gKCdmR3pCyiRfQYj",
  "key6": "33vR192U7cYxLg2CqV4mThSdhZMTrhbMsk4MPjj58KDtabwJCqdszmSJNnowbYAYSADfnA2VqZEE1Y5peLofX5QX",
  "key7": "2J4a5p8i4DEm2KjhcekhFSTDHb1jJCAk32qaNUktcv61roLXwmceXstyN5xMv5rrgmkBrPJ9HvurNYe6iPiSmmUc",
  "key8": "4dwjKKK6yxnqPaAc4eMxFo84e4EsZBKW5U9JZiB4VvSGZWZGeZVUUZf6WZ1x8XzkdMxLfzW9pDPSeYzv8b5YLQrx",
  "key9": "3z4WdDwWLgZaPMoNwhL3es4Yjbu1hSBmcvwcgr958mc3nbBj1iXhwi3ZB7EQn5CcxLcMTraTQSwsY9ZkVJxt4Lvh",
  "key10": "5kuoMRRTM1zzhJqXwg2d73fEu95XgP1DsyZ3bJQtGSAWtWEGLvd3EfxXZUEMvJPxQyhmmfcy2KhDGdTqdHLVPd2P",
  "key11": "4G9ke39Y9DFbLAjSH6MA2dJmCE5H4VMfdvcgM4nv8JbMVw4pVgMUbPrdcUPyiwotH6pYBKzQMcp6SCQ4BV9UVa37",
  "key12": "5DsGuYMquQAYqD9b9WtCgEhwc4dMjJVtNL4dpwYW4AtMBXbQFtfFcYTPy8A14Y7DDt5KqLHufEnzVkhqMqF1t5Dt",
  "key13": "3jHuSkgjZkcJoAXfN5RqBwcgFwHCcY9fNT7b8fUefc4Ux5Lv1Y7g7nsJGb9gCfQkWxYUYwHJ1GcE5HPJNQxq6qzC",
  "key14": "53svjscJWagkzM6CaxmKom4fLBQNqatc2xDVR1v4uxn3k38fdKLa9YK5dJawZ4cUXkfAewFV3yXDZHcqDFf7zB1d",
  "key15": "3x8KmqzuVotfkkgak7mUyRGpJrqpzaB51T3TZgLhk2oEtuZ5jVNJZpPmwLa96JS4rkULe3ephzNp9u5ZB33R6K2h",
  "key16": "KnbTyiMH8rPm7U1VywrTsQGByB72N9VttVdSJkGwcnckuKLT9QtxRY35axLSLex4La9NCPdZd9rE6QTaUbeUFR6",
  "key17": "2DJziFu9Ds443T56syxQprzhVFsQM6RPqiSN1Fmy1nV2vyxH2xKRR5b61hdagvEEoey1btZ6T4EJrfPCncFRXfX3",
  "key18": "3CroCextmMqniWiU7baysvc8keEYwqwj4jcBHem68wqBGhTmjyJqnRKkof6hoSs3bcXQrc316bcD4PpnUPs4VxKK",
  "key19": "2paHAVLXTCJ3ZvMZo1LRSYEUFkKg3sT9yCoF3MmVan5uwfU3RQZXkso8S5Tf91A2yXd6rTDBjGxfv73wEoupq8DJ",
  "key20": "2pZpSiUr13UrGDuTLvXxurXXs2UUWhAtw3kxnAvuBZmVge45jSLrMFGXMPPNoK81aGEBC5MXBFTRuvDsjPbfZYBL",
  "key21": "nHgheqcozJb1LR9Fpypg3jzDFHcHwMEJE6tTfjj352UJvsTmRtgS5KwRtdPcEKhRmYqMXKWW6BjqpZbAAtrRjqu",
  "key22": "WrDbyYJy3EvuYwupbUvjNcBYvwkrq6ezjYx5FKSUtiafg4dTyxykVuXKPLqGB7hUh3Fr11aPZQyT4R9yfYQX8mW",
  "key23": "TEHVXKSmQqmCaqyUkFbzNYywqueRd1stviiPPQahvgScomVymThcJuaPkpx21C9SKRdiAiFkUePWSWKSemLmzCG",
  "key24": "5UZVFd1LTCgp77arT165KBENDautmeJwWkfsDw8ANy48ZShR5niv1LViVrcAQSLB3u88uKDfaN6XMraP5L2LgMgZ",
  "key25": "kZBCs4ku7NRX9VMfgsZAfbd8UGcnTQGwjidy6u3iCktQYCQbnw3vyeaqHR2Xk5mo7eMWPNMURd1jDN33q2hWsV2",
  "key26": "2UWnod1x4TB83VyvzQT3LQwc1F6cKdxwrJgDZczTgGXeW1eC9CEckPdrxreYn7bBcZWwnCcu6S8eAbsoM314Wwey",
  "key27": "668KDxa1cBRSYkQN3531iLoAtsC5teToqtZnoCnLPk3oW8CacQqDfrmMMaZtdsuLhoQwzhUSR6BJS3RCKUPGGx9v",
  "key28": "5pZEAXEjzfkcuVfLoGKgpB4rUASijzzQvjka4DEak3bxxwR43vyRZKUy5JqqDghJiwwRucex1RdsjR212xAyAASn",
  "key29": "2poKNVLe5QkB5XfQ5KCK89yEFmoxGHNUfyUaRMG9Vd3tiR5ssEzJmDbEgaUPYxzjNbGUEduT6hJEPpfvjQmBEniW",
  "key30": "3cgfXFhYKRws2MRtc7hrACpXoAvdkTKT1DQS6YripyofhMquTqm9wDq7naH2wGSNdQzEWX89EyKUT4FZYy6BZxcD",
  "key31": "3w4Nuq6GAem8HHzCpoAvmRUfZzhjKVmhBD47biuC5EkW8jc7iyte9kQiaWixXMabgcjfwQhSNVRJQTnhCqnLAUqM",
  "key32": "JsFwcZUsJLerDLZW3wEXQMNnemf1TctMLXSUGKXjuXRm6Lp5TkbuhiG5dLffxhvtSbj3V6srdzoh3TV8esHSWpQ",
  "key33": "2jf3SSiuot3BQnLaxkbyHCfyxRbZn99XqS5cSGThNV4GxgLA2botHzsL4mp6opS9Zme7U6sWv3FUua78ZWBSfYFp",
  "key34": "4h6YgAcvvL65AzfNqVuS3qFPEsB7eD6TDKimg1pzSpGrHhnNRBm5SbNYhE7t1z48VtHg8PPez7jyScYx8WwgVJU9",
  "key35": "5F1MEhkamdiNtiHsBGRXHdXDPobq5N8thcyb1oyYV6kz5Cpyfnj47eKXZfkeRiMoE2SUHjtbZS9KbiKXdyLt92PN",
  "key36": "29GDnjE5zggn9K53C3GpWGGWTjQxN43jPbp8RMt2ivQAdrRy9nRjqqMJgcSuJXhb2QBzNfTRA3R3YQCDEf1ZjQ4t",
  "key37": "3L42dS2y3iMfBEdLMngFjigiW6h9XYUVuPRH7881UBSPesjhXeaK9LYW6yHohuTAvMYCBnVAZy9a6J6cvG8YEbQH",
  "key38": "2C7VZwudPusEcPod2HTb2VL4jqLSD9z1rWcDMZgcEXx54cGnJTfWaEoy84GW97gqLQcZLm5CAN57iekKvReQ9DFt"
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
