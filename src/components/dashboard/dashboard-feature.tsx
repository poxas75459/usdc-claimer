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
    "28MVKpTyRisqkgXTy9BTQXJz9DhKU9u9S5EbyegfXS8r5AVBdD2K8ahru8nEYZHPoXMqi35kuThEmuVV55rviSPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wuhLEa8gow8Gy8LhBkcAuDpFNvRNVGsG8iN6vxdWUcu9vQbMYU3C5zGgUGhmcu8kPvoQrDRmS8dBqoNub1ym4uH",
  "key1": "2ye9n5iZcg4wud16HPTwCNyyxkgvMncKe4w389jP8DN6N2EyJuj3So6XM9VfzPraUGhzsyCAAP7MtfaJdBJxQsrS",
  "key2": "3khRjhCXAHWFGb5NDaKWziHQXF81j225a5tzaawDwZ7FMXVWZCpqSiSTQ3CMxAmACv6MAMVsSmUwXZMMrzusTNjX",
  "key3": "2V184kWwtHZNTGY7EdRZdbNTRqhS8PgYoLpqEGkT91RKZPWkVVVPqSg89LRsUhL7b1YLWYhZZHaKLqvH1oPjVWQd",
  "key4": "4ujv8q3Lb9fN8fRm8XMTTNVJsvtMgq7owcUkJdrGewoUU6fwoYt7r8tFxERrBufiuEJkeUvqEikH6cpa5oTULtNT",
  "key5": "5dKRH9tqQEGpH8Q7iFiGhhnETVivZD9UPtKGKQHXqJhAegKk9cXHioNUFGDZdoD6LcjxiNxQy2XJ87vbR3PNaakA",
  "key6": "2mnS1tiB5z26iniyVzVpw6HmocY8T6PCduehRW9ta7oDhM4AG2zbX8hGB1BZAoHuAf2FfR7WoDP4BPLM2RhmkgCq",
  "key7": "1jJbzWdBhMbG39ycDpUgPqs1P8DXRe3AUexcZHqndm5AnyfB38MaBWoV711hyKgEzLYsQJ7eD36L1DutnpGiRWM",
  "key8": "49kspRmsSibAjZPCguUVB5dp8kcncaoDkoy2NVQHSAiXKaeDjH8dZ3iXr9t7uo38Wzi1sq6mmQCgVsEVxXWJoJsf",
  "key9": "4tzHiTuGiAx1ZRjjU1KTTs7inS6sPqGBNJPGoJKKGdzrFwrWnRmndZ13WerWn9rLLrGuxkfuA4i9h42tZmD3PELy",
  "key10": "23HVyNF7FPTYFG1PraZ7ohmW8x365mPD22euWx4fbRnMCcNujtYPqi2hoftTkZ7erSJfp4HZoXheZCZKyD3LqHkq",
  "key11": "42AqXAzsGn7DFrjMzuWdAU4vQ2WpXiwLnWfvwWD2zpcV9uiLS42kqMwgMNmr4b31EdUhtt3w8EV4mo3SA9AwJaTX",
  "key12": "4K3hYQuCGndgGaYBhZT4dhjWax2SuKkKfFN8rZUebMZKLEFMbuCtPmJVHAfqc8uG9wskCNjDaf9ayjJGwx4PJq57",
  "key13": "4sVNJwbLo1Ej46c8WMPWENXCEMujCg9FhvbUsUSjmKVFfUVkjxbHhbJRyZhaJf2xqPd6E3NdDAnSFHqeqMxcDaQU",
  "key14": "2DmzbQwoWP13Sq62TVeA3LfQRnLdoJFnejwUbBkAv518Gdg9JdXRrqC6hqUpCMBrY2sh4bNyEd27cQkhPR6jAsWt",
  "key15": "5hzgW1LNvyMXSJPM595FC6o3oVKmrJLFv1PcxFRX1fkERrQNYZXdBWyfXPT14PkP8tWqoLcHpfZTaXS4DKArDuSn",
  "key16": "KMMyuLWoqY7GwueF7DFQVrRDrzWzkeP3AAf6mj48R7MvhfKBwuQewXB8r9tNvcAkWQATbQUFHK3hTcEd6qSErTe",
  "key17": "ipq3B8HhAJmvGeDLkcV7oxHLWLKtTgVKknyMXKaFFSafdW11xyCSXoxiNWFJSyo4UZFHBUEQqaFTCz5DVWNH95p",
  "key18": "2Z4h91BJB4q5d6H1ieCVpPhbVRP4FarcCvGEtLFncpxSdnMQ9FuAbfSPmv9HzzNkhTmYw2eSA3FQVHSjoqfGVrMR",
  "key19": "E93Yxd4LVhZ1fT3ojnRJm6pyuGSDCnTynmYfRUJLeUcLJr7YxsqAGSEXLDh6umy8pVXyW3Tkv3mkbTYQiD3gwp1",
  "key20": "4WbH6kzPgy9aXi8jDkCUkXidNdBchqM5M2sqgzgC3j7Bs7TLaA79FnF2vDHrE1N8gqCDyFx4UCiMRNVkjKeUxtsY",
  "key21": "35wHPDStaBN7BdP1cLosMdPCfknwtVLZFcP6z1VAFXmdMPnh4hNSXiLerMkPoHY3n1tMEmj6t3CwaNMLootAKUmj",
  "key22": "3ZjwHL8ioGjAYJ6Lz3HcDuLn4f5eHGYz4em7oKkqWpwGhNrPyguHni1BLyiYu8s4YbxxZ6ByU4Dyk5HmLwifSbx7",
  "key23": "3GrG2apx2kq6UhGZHaSsj9pymBv8VzPD3EZjVTwDMba5p53fhTZwfB8FGwBxGCoYjAT1PraJpoJRNn2iBVfG66G5",
  "key24": "e8F1u7mcJMrFuEqvJBPKRpVCaErMjhWmtiUTRbSadr8xPNRaukvrzYuAbAfpjadvDT6u47ys8cgQdNNv5pfc8TM",
  "key25": "4JAmd3ezBi4ijyDJkwDWiXU4RjJXXveCvR8pQfHTPGkz3gfLt3TTvuBwp69XunWGcHcFHr61MNRFYfXLyWbcPdS5",
  "key26": "5p6YC7WR2N1YQ8hNZkLwPptecewpqaNSbpr511V2zeXSkMYQWvGcZ6h1k4gAApX3awDg4Q4xETm3xJzhR3aDEPRJ",
  "key27": "4SDn36Q2yWXZks4gvyBeph7ES12qegRDQDxZSg5EcvnJjyQcZ7jwKTLxety61E86y3AydsafRNxoSEw1DnkcNnwH",
  "key28": "3kyDVL4syaR2jHCj921mC21nTFgjwAAMbExXvE28EcHasFF7FXo4mkbjxanXxoKkVPzksu1qvdCgAeBGyLr9NMTC",
  "key29": "ePVgoRB7nFA37oxTECEcTYXbM4JTUhoNvcHrJ4b2mEEqGHUufw12jwm8YjdjHJ67a7Ts7ur9RUWwziNYkVyXr7S",
  "key30": "35DpzYJcGfXYwKdPDksHyjyLuPSPwKxWvw1r9MEt5qFVRH4m3g1SS7V7dMdGiAmJhpYYbeeScEVsBTUi26sRYjt8",
  "key31": "5MRm6NKf9h3sws3b96DJrAW3T89D3K7Edojj2MRLNYYB6soZE8fhSZRE8xfcJUQ8JYAKSp84YqJi5M9JwaLDYFFQ",
  "key32": "PXFW3wij38LFAxFecYJ18hQY5B4gxBmYoUyEq5iXvjbAdNfQQ5TpajtbJAKJiHt3mEWzSqg9JzhwwJJmjHCm3FX",
  "key33": "4ohBNGj23BJHjpqiaaaCscGgb6AtBuvSZcEdJo19kUp36xXjJ3HAN2xxV5jMajk85WJremv9rxmwiC3bU5H6DHNx",
  "key34": "2CmCWrpivZEefuUgLh9SkcsRbdu4qUKtz8ggJ62sLJrDZ8j1GTtFNtnvinXY5pNn7T2jWPR58YgtJE2u1TcoPAjB",
  "key35": "3JANsUa1hhUZWyRQ7d5fYkZzc5QqvguwG8pBUDmcdfk6ArDXeF964psreSW1AvCNpkajkbWiYZf15F1yMpX1te6w"
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
