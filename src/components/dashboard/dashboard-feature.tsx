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
    "2x1CB6ERb7AX8hBESmjkp5DWEj2EJZ8aWm85pCXQaEMppFvsQBzSaNjyqncZ7UK1UmL4tKk5A3jgECqaDBoqCgjU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3E1JDy6GFUJjaLA5Jm6y5sPbfw63JygKYH84ubC4Pg9ssQuvoWY95wnLWbNno7MUb9gay9UrDdJALtXk25T7yTJG",
  "key1": "3XvZQNvY5X3CaTBdP2ZJYnhgG196ygrpBfXEAz8FWYUWJEqRcE5Lff5beW8XFwQB1X8kojvqATTMVzvqni4LXjNH",
  "key2": "52Mte5BP3A6ADDMdrqLFsr5oY8GDfKCLdb4jDRcsa8Q3Fy333WgYGeyBeDtWHMWze9hsA1nFfwuxFJaZgeDRbxaw",
  "key3": "51rqSfHN5AVYT7d8ENjE4CQwJ7zKHP9BZUXPghXbGL6Jkef9jPzSqbSh3Fc8EsAZmovmUpdzAAWrSma7Ku3qC9DM",
  "key4": "2QAEYkh8StyXU723PJk1yoTU2kb92NkZfVZgx92HCQunQ7e3oPNbPoG1CG95vCakWUkxPmEDdrshSiuqc4MshWey",
  "key5": "3YqjC2EUnhgfows4mSwggrRpLtsYeiWdGiW2WnP6GZ9SpmVNDYyqyiRbMRjrFnHRcrEgriqPxE7hytJPKgndZGc6",
  "key6": "j5XY9jpCRZq7WzotcJq1KMTsvaKJhEt4jFnJDsWb5JbHE7xC9QukiDhAwabPoyBQnEyTSZnW7AoLhjqR6UEpD2M",
  "key7": "3qXUCTD5sDAtmMsg1Z2D9ifJ1GyVwKFBHmwJN3fxdbawEwDTQAcGhLxaxterRyb6K8S6PShaZ1jBhbkPfQsAV4nA",
  "key8": "2vJSem4eGAh7TK7V2DPph1EjRb4FzZHU45s2vaCcu24qUTR8VhdWdo3A2tTt7SvNjfbYkj9Xf9LfJ7dxKoteR5Zo",
  "key9": "xSArd5gzZ48WMSkwYvXWiaCT4sgoHsZfHoa2JZvdRYck6wPPT92EQi8M2VhUVdVjrVc45bu6acyai41KMTHWbVa",
  "key10": "5nzAwVb3JsCuM8HRCfRHuViW2evgH7Scax9wgcUwqiUaSMLUVxjDMBmvULgGYJPk8EY7xtKENLMWxk3jKL3daMoL",
  "key11": "4intoJdGxrb21fbdxUf8zvjTDLd5UrrAemqA4ty2wiTg32Mf9zZgHyEUR7UEGjiXwW7Hg5743ThsGWhrHtFcHSJK",
  "key12": "5MJvkG1PE87qxSLodBxVFxQmLsNb1j2ynDofAqFWFaaocw2ChFrz4Aimhn5BvE4aNtMCh2a4ao2hrddWFMBCtRXc",
  "key13": "45HMbYvTBcWBhevvSfY9rvQcCT2rnTqMG73GQhrkzUWc5X9XvR9kJFQopvGorzdZEs5bnvqMh3DEPwCoezGQcMwh",
  "key14": "5nnLNTkubSWZs3VuVt9YDYRifL8TnRaCmh1J4sxyvRbcnRdFUY4rTCPKkzuvYimWmR3KSGuy78PcW39E4K1tNabU",
  "key15": "GitxhpXsgrxYgt3pZD5GWJgzXkKdQgoMWEPdVRYqgpLhB6MnhD9KFyLHrFERbssAHBZnSWMPxiwNyJPKta84BML",
  "key16": "4JUWsBXeB81ozc1S5ECcWLJyq4jMNY3qxpj7m6oP9rjBpAHrhqZVanJTPBzPTVv9AhXabrBGwcbSLdDMJ8cwJExQ",
  "key17": "3idVkvkrm26HzF4bTMXkEcUSjTcidbqK278QoJH6WkoUumYZTwYWrjFfuzNhkBtaQsNu17Q6uULEAZL3p7rXbcrJ",
  "key18": "9ZRjFxb35SKe8Rfnum1pETU8Cg6oCRJ7z5u2oKyd6chpsgovU4z7JsyPU52sNxUDNN4nKVTNB4h28zdnEGtRuWQ",
  "key19": "3AtrWpk6C8zoCYMTvx5Q39mnnmVLNpDJSigiULeJypjFA7NRW88oRXGyQZTgHgfe7QRVSBMHvjPh1Qs2fXXFcxhD",
  "key20": "5cxJ3SSKpexLK1HpgYXYsuVgfTttHZMwKtG3gZKLLs7qMYCoxsiPCWFv6YprKTKhomK1ohFYs82aeQzDnxvgU1Jk",
  "key21": "4Fgk5HwpAxh7SuTW5ALt7YnL3mXDRvd8Md11JAqDstvci8q56paf7WLC9pMw8Pin2VDwyTdBfb3nmSjbPKt3pPSW",
  "key22": "5pmfZGRbEUxJkMEEX7HC4qmPU6MfJogcEkSP1qGWDk8tPrbV3ZKdNS2vXVmJxdMeS5H3L16Q3nVKCvMi2PRVAn7T",
  "key23": "7Xs9sdRwaDPMmJLrdQFQEtafNYyh1LLMcTXjQpXd7GUhg2b7UaaVf2z9nu2nAQwtdRUb2qy3mUMbczmFgoHejPu",
  "key24": "3RUfq4aAzNUBsHzVsBaCqvAWiJ3AhatoRiTNtMgmbQi2K9r1UW5hBHx581wGCFeKiuGhcdpLg1r27tRhb9WaLBGV",
  "key25": "5hDoQ9pRypf5c4zDyDkpadmF6Fq87z59hfAQrrGTRhBTty9GAv6XDWSczVrkMxe3gFvnjSjHNAYNKpw79jfomk7g",
  "key26": "3HmBbFNVM7Eb2SYpUDkMATvCPFgZucAFoVgJXk2j4DARFJrNecf7X8aLx1ZXDVvEMAqpVD3g4UYFchsZ8xzSaPzY",
  "key27": "hJSri6KFFWoWXjUrSnjU3RZaxazTw7p78Er4vgNXK7d13nb9t3FhSCEzgyrz6q6Vzh7ez6xn5fwsPvnHDYvzGzZ",
  "key28": "5X6GSw7sqENxXwTeC48HfR2X7QrjFJhbst18kMyRM9s29zNmGGqQ7CTYx7kfX9BdyTDEEAgFuXYX37hK2SLLSrGS",
  "key29": "RDgNCxqCgZwV9Efs9SnSBMDe11pRLxzjdAJu82L3pMX915cve7MZD28tZZci56Y9oE3kv85T6GMKANUy7txFPvy",
  "key30": "PyPsZh7rNDum4pgHp1eY6Cd33Q56uVJcXAfQ7xoJm7Lo38sLKDv7bukFdxvu2Lu86M2ciNq82uQcWFe55N2FqfU"
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
