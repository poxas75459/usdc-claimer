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
    "u8jL6a8rMGmvEuHQuMs5pbbipDrfr1qLCxtejdc5mzjnTWXHb7q9TxVN6wSoLEGTRUdQhuRrarwaF2Pwd4qFqCn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3n4xM3Bx2HYVNcAwYMnhDecGqsBRW1ZYANDAXpKN4xnrqXC2xAiPfwvbvHJbn5iZppK6ut41pmn9YgZTsThNGTxo",
  "key1": "zdhH58UMFqKvFXoddzm2U2gjUF9aY7Ko38t82neCVb5FeqwhLfj1F4rrwHKXhTRjCrTN6Ficy5KCEE98NihqrCY",
  "key2": "58Jy9CQZh2t3TzzknmW5tJUGVDGKxBfHLmgEJ4VznynhEQb3FpVt1JSH2BF8nFRNAmLG1T3A62F19UVSBVZKYjhH",
  "key3": "5ntvJRrU4mwWSyosrt23qJeVivCJ7oPXnuhD5mib3v4gtypDm4Z9MiWtcAeVjfDT17AEUz2k8zwpsa4WCfdY1CT9",
  "key4": "3ygHjyAmSyKLgCkcEE8CAqbZ3fcZSFhuKLXkoGs77YZNWGKpDU3eAHqLZyWBTpU6eU3T3vfGQSwuaLhDZMiWteJg",
  "key5": "rnwSgJQ9D5dvVxnfqydjifsWTf1bHpHxzxQDqnxDP5JkCprsi5Uc6KFbwpZZEL3zE4PFoHhNry5t5HExt9pivdd",
  "key6": "56JEw46L92b1SzNfBbZcEyQHbFRTFibgZmeczewpzux3gjmvtick5yEj6cjYvVQhPABYk7F8999AMbyviJgZ5LPk",
  "key7": "259Pt2dwLzhADorZkTG52tb7vy4rNTd7uDzkw5So5HHXUYPHATKepXAF6LTN9fmxcjwL76dZDfMC5QjM7saMMwzU",
  "key8": "5bGXuR6grpwPJcjSEHTrXpRRPJC8NnGVcfr92gsWzMCMuhombskEVR3ijjZu6CLSPk4e2aNbrkQ4jyRt9kmkUeiy",
  "key9": "58kkZiHq81R3A5M1W7n1sWG5tAvt2bGL4d8EiQqwjvU96iJfTZFMLaRqPm9S8nb5XucwGmjr7U8j7NeuWd5eWk1d",
  "key10": "uBFBTbbiGcmRdzxz95vZBB8b9612gnkruyyKZQFydtt8jm2EpxgFwz7BEzngudeFvzmCWpZpt59sKcE8aAyVQsy",
  "key11": "2mwJSf3cDTm9L696MGYSVLkPf4EZ6S8WcZ9ikWHe5ivQy6MSydvyTP1yNsHu2ZTCLbuXegTEriTuq36K1kRRRcgC",
  "key12": "2R3Y1XhyFoKBMQyu6L1J6MqL7Z5tdmBnujiu9m6JGG6MRmGhrFWtkBtpFca3tC1qyv8GWGqDChEyvmpMcqkWSaUz",
  "key13": "2HZE9tcxGrBL9Ah2cLGJ5CL3sLnmsdBVRDjGHJ68KykexQxe5ymAjjDJRpd5wWhWUVeTFP5JYHtcar1m7v4oSDzL",
  "key14": "3RXYEGUjuMvxmoBNoHXPGuqkYQ9axGWfdMbY77FwGeyD8iWQQxXEuuz38w3cG4AUANV312R21eAkanHg1XQy5VHQ",
  "key15": "4NHTYEY4Q5MM8kCCHYVvyjFWWqqN6oFYzcVNVkBNeUT3UkKNHCGrgTapjowfxYPTdPZTUxwaztmFPVPC3qxKjGET",
  "key16": "3jTiQLcKzwAvvzEv1dcpYfJ2Wed778LZbHFKcSx1RKwsSZC1wS5SzMMbG2bUtCfQzRHAvKHoQ3nqRkdc4s7uKu9j",
  "key17": "29EJFdDwwFuWfMPthGkqkErjmM4t9FooRZzPwPXv1YodEqoWHYU2s88waPMSdeMVCgUkzDUVzAYZiotWeymBHUex",
  "key18": "4sgL3VqVNkSyam8j8VemPXK6PZjFA1okrq3dVyLdCnrAPHavgwvEyEdEPM8iPNy1kwhb2qaqNT9WVFEJsWx1koo6",
  "key19": "GX7YT2ALd4BCx9WcJWPTfmh9DGBxHR6oGayCwLd6J7tj97pv4DE2ryQs27vXV84MvmcLpV8EwqiV3QVBPqoNiB7",
  "key20": "5T36YhPZoxgJaSPWf3TKVLLnCoVQy6LZvijRCqu8XoHwp4fvRiquBdko4RgSZFzBQumV9o8X6Xx6MWX1JLztNY1N",
  "key21": "4kvTfVjG8bejGQVayuertcKMt2QnbEntCnd1m9bF3C1TQzZeE8rWBEjHrJ3CZNMg3YLQCXbjvxw5zyhDk2JRsqbZ",
  "key22": "5BmwT5VfUVd1hmwgiHqR8vBXaP921Y17VF62XXZ18biHAuXNB2wZwLEKbNAJLQE8EQZPAtbvYVe9HrRcv2oGk354",
  "key23": "3GfFFQKLi2G6NVLfJVg63qYixFYY7zbF8wVfc2vRDRRK19P6Tsjj95N9tH8nmy15414DBvJTjyLyyGAA6sahbG9Z",
  "key24": "2Wa9aKnXWy9Y9qiH5Pa3SUqq6xBf7doiQFoQk4e2vmkrdyTTQFRw7g9k7Hs4GkwsjkZVDWtKLUuVUsM89e7gpiXL",
  "key25": "5FgcYvafbtJjHdGvrphdkitoRSY5Ls58roTu8NJa9mqokbtqeLpdsE3tJZw8JL8BfJmBq8GLY7PcWp19Sysz6jjN",
  "key26": "QJYrtLtSa4RdpWuB2cDNk1UMNMaM9tmKkF6GHN9pGuEtJfCi85gC4h8ooBCXJMBiK2uaHKpBKBgFGpmzaRgZhvS",
  "key27": "4KUzkcU4j4UTsuhEwP4P6aAaiFbgKFm5n1VDswcNKHG8HkKPFzSQgX3LiiBZm5LsgdDU8fmkoSXNYFCX73pAPuY",
  "key28": "vKRJx4TTiEwEUnypC18PCJ51CfbEEErE6vBshi2LdNnd4L5WiEToTVHDFyfKce8uoE9ARZf4UhTUK5FV8rkbGJ3",
  "key29": "3G9DycKjwHFvbJKm9S4L5MHwP3PWQWQCLqtNNeQyLZdfVAozmHyBvbTfCBfdBqSSx2ncJDFMvbKRo96zJ6EuyHLq",
  "key30": "JJPWWNaB2WQgKRMtTRR6YT2qcNacnr7xYDhmuS1pd4qkDQSjTaVg8Eh6YZkjnKwsc129DzcHHdFarJSiRoYhsro",
  "key31": "3MYPajU9MfpZvgJQBE5sgZ2XgTdVENt8p9XrL8YkcNkthW9V3XkcqdG7YneF2TG5hgnSh1Amv1xqHUtZA9haQHCv",
  "key32": "CwDmLTHYPeEytMs481LEeVVauriDTELqiaAWHqXfmev8mAiiEqYaP6DKgaJPvGT23nyErJvM9Mu6zpH3ZJNH8wi",
  "key33": "YHkkU3Hubau8Ai8vM1WvHaWHXMf2qLzSFs1dQeCx5vAcYRnfnzgdRhemsP3TUQ6aB1TBmCyNmWNZeTezJ7fyybe",
  "key34": "PgmsL8AsQqkJfKSYM9GzhziSdT1Nmyr8pXXG5VYRywwssvu3tPLiFq2yaYZeTaLW1NTR8XEknVhQ1onZxJ23dCP",
  "key35": "252NoGa9jrryb9wb9TLmxHm2qbbawHcNmf8UdFLBvae42QvLr3t2zNHJUVp2c4q9DwdKrdRFYwHUx7LELa1VGP93"
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
