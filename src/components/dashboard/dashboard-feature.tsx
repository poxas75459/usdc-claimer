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
    "4GqqRg3uXx4ugBSu4nUYcbwPznqVfPqdgCiMyGjTuHTyyoQa6kcghySN8cPWEMamuN2MQQPZHR3GFLzQ4ok27jRX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fkyng2RrHNoTdsHhTb8f2QSbhRDoksxpGRXwCUjwP4TuwxuA4qMYFmYExVmizYMf2uNFaAm8cXe3i2nrguo65JX",
  "key1": "4Qm9MMt5SRPQ5f8HeUHjPmtPwKSBGbH1zgqPPbxCzuvp2mi6VeE5qad5zBBTXfsihyBZQBZxNAfebHaACnMtMM7p",
  "key2": "2C5oR77i3Cs7ob7Pa8srsrQ3o8e1W7zRt4VkHBABQmWtQKShSp4qEzaMMmSxxMpceYNimvKCBG3N3i3RjBfaFJTh",
  "key3": "5Y1yXdK9LuXn6cciBGGRMHBxqAgZ4MWmeJDMm7JuKha27Kx1YNBoJUmk93eyWwBbGbT8iWPciwqg67J3sKKtvJbL",
  "key4": "5dzTS3WXE83M6GGEcmWMnjTPuo9vNFWgSBbKBNLPgNyUGdWdr8niySryFAysUb9sECMJjGoFG4iyoV45VCgDzMeM",
  "key5": "3zJmu3wyPZyeZVovPZuU1Jp3XYG7EPVrFrgDf7Xn3pWom4dBiUodZk9UF1nXUW7oE4vRCdbfWXhuBDoGRsDkPHBS",
  "key6": "4LEgrHWMG8iRJegpgjCJgyc8QmMJhnqU9zvtqSJf49iiXbJdJXwVraqtyenTCekRTL95LYrPZgiJrtPFjDk549dP",
  "key7": "2uThAUofttHEFAFRNYoCJUZxMJtWJDJvPexWKKxXWVQyQChnGFyiVPGuRaFPrjijWa9GWuNEF6NV4UaGCWKN32Ms",
  "key8": "5qkSxJq9ZFw3j5ntT1ED2pwr1hWKSomgGiPHETovmh9r6ugzy4a5g3FDN66zWwFLNFQoKxXhKEx3ogf6E2V3xGjy",
  "key9": "4idAjFsrNimokRpwABj1EjmAkWXa7CYBZbWQNi6mNa4HwgRQk7wnrxWEuZtcnp37DTaHXuegwjtj5T6rXXNjhHzh",
  "key10": "5CfWhwosgDa5DVqeNzczCERF4DfKkyp7tEUDsBtKNFJpkab5PbcP5AxmHm91HbesjsqMrHWNiwPYu5h1pfzf5AzF",
  "key11": "41yZUWzTe7fqSVBPF6Vqyq8MH4aGPQjWdGeRbEDVfGwyQiCAnbjRpNE3YUJM8aefGALupXmj8wJ3qV8rFZeWgo78",
  "key12": "toz7kAiXUbMxGtzvYYbbw7C4YkxbyWw7vXWsdyFX436qu9S5nyZQLki4pnbDUw8du6NnGg6XNeUw3ZpwSmUvy9K",
  "key13": "2Emdud5kmWk1HQpbzpALFrxS97AuNpxHpsuSfupnpRouZn7UnJpBToMvXnAsjkqe9RwjNgfuZqxC7zGDXLYVksa",
  "key14": "3JLorXejXagq4CaEY3TpRepxmK9W5vnxdoub3wcFg5pFqshGBCbDkaqX9YzpVxZdP7Jd7L1LmWpYzFGnjrfmSjUS",
  "key15": "4d7Pa8XnesQZhWjp9s7yM1x9WgHxFEx1UgmGTGYUJLLUiRpqaXghrThhvu22nDso7v5HDUepwuXXBHABFHjCCMiX",
  "key16": "2xfw5n6W9EpEAMq2W7nK2WZo3i3m2ZSB8A1VvyF1BTbpzmZc5Ygps5mkfsZNnsGcbjaTpmmX25CfBr6iUBD4e2W2",
  "key17": "5QY92tdgt8MJcjev6hD8UbyqCP9vzcjjJc6dkrTG5eSBpgrtpEVsKv1xaimHaCeQpvu4zzSmJcWDojz9nnesTbW9",
  "key18": "5AaueHtNcbPriVVANdvgMPxGdUjPVyvXAGgGpVQUm7XBZVkYfpoWkWghxMFMe72Y6Smi8ZT6cC9UQ3HBGbqFbNtA",
  "key19": "4doARyYx9RrWq9qhNKzZC3jobXPpsd4a83RjbCPFxXRE7XUhLUe9pCggkNP746DPBA69oLBAhJPTw1fg1SRaF1zQ",
  "key20": "44chJZURFtH1Y8iU3mSAx1Yz3dFmeSLXgd4462n2CskAK66NobkhV8o28xFuyyQcC2dQm6jrb7hmWkJDVDWxr3ft",
  "key21": "5gxjxwWidAthwcAKEAmy95JsS4zcLUJPsPpAWeLf4d2vT7ENtGgHNR7DKpP7kB2LoGpS7oUab5r1aY2PqztWauc3",
  "key22": "2tTcb3pCUii8bcWAZxu9AXUSLStdZvqxh8xQrrnyjAjvsHhaYK2qtxKSw8AnPYCPRCn6siW3N59tQ96FfXqxShs7",
  "key23": "3dQUK6byEB2wrfyG1UeiKHBU7uveNfto1FZ7buhTkhtyG8pxrtnmLanDMQ6FXqiarRFAxmMKnwmKxxfjqC52wsTG",
  "key24": "5zY15wVnSKDVjq6Z5pjqJdndMENcinU5pLVoVpMdnn8pYqVpNEYBMoy4SHGfBDe7LTLBfhRE85Zje7BXg6FrXfCW",
  "key25": "2TyXjEauGvBjtWmjBEV67Muyz5uapwyuisCwJUTtPFTAycTCFapyb4vunP3tL3LgVACHBoFg1heeddsUfrP76Ldc",
  "key26": "3K6FSTLFFQA19AABzo8beEvVuskFrHwcvG6WigHKNbaY475GdAFEAGFWTkVcXmmjutR38zzxbNiTQzwGaD3SvUqZ",
  "key27": "4RhmkH7RhXgf8xSvAz2EcYMrziSKUTwm4M3ieyFL3uokYXKvKW44NPrptYjrfX13RWKL25gDdD1Cz3g1ujYAeNxS",
  "key28": "3BbAAUpp5pCwqayTPrE7GdW4hqfNedhFXNjsetiQEAhTaqb19DyfqgQWbeommuigizWak6cwcpN88kZ3MDydhak3",
  "key29": "4Wz4Z2yVr6UVSbAzVVoMQfK7YmWYwq1o2ZZWiJk4EHh8X7MjVNGuu2jgaDSe18cubHBXjZn4wKcumAHGLLmG9tBm",
  "key30": "3nfvgPevkP9KFz1gHjA9Sj7xbXYtigz4aFmeYDn5kLzPK9jS6zaAiZEeMQapErUruACQTKSebuAfQGQZtvzyagWo",
  "key31": "5ogvyFUfCyVXzMAR5GbovyNEz9JrygRbXd1UzKdbX6rJ287r4czoTVMkcZcbYLVhmcgLU5yppXUbGbR756APtFPx",
  "key32": "evm69rVGaXaMepTSBZobxMbSMvokivpprbi2iAENJ3ssGhE26M15AfDpFjGbCjeuc9cxsSiMttn52ZinxQbLuMu",
  "key33": "2saRvYLUz2UBei9TiJsPV7dR33fkx38AGSY1XsKzFGnqhJ5NyZkKTA2iGw35Nipb12G1evVR9GXL4ivwutwWUiYP",
  "key34": "2aAJvtKL31cn1KKUxjiaoHCbYtUVz7JwwGHR69RQvhp67b2usLZJnZcxKdhHzBJW7KBKRs1uNsyVU49BqhnqALqg",
  "key35": "2YRFXXAEGb7rUMxnm3P1obpkEfckMYvw1LqhYJiemDZ6UqXDPaJubzDjBq1XPaTAfX5rWY8gV9TKcn6HpkGiJ8Zc",
  "key36": "Jjjr92vDn1C58b28BcwSmchL2kNy2BQVrvzAcwdh1QhbhLLaMQXtPLuwpbHQqzNJy2GQtRdnhHAbz8ZJ7AeZHZY",
  "key37": "v9eEWYqt7uRkidbY3yxnDK6RqQhEYmViQB4MPeRrL4dmoUq2QvbaJQDNVQfDcqyWFiVgozJY443KrJSkQvojLAe",
  "key38": "5MECCp6yk4h2GB6ZDUXcza3sAv8z9dN3gDd8GjN7f4wjYdqDSGPYMP8qGg6SLFGUmGCD56Zi5poJGV978NaLHdfa"
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
