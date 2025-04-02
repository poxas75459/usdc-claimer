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
    "UAjLkUPuXVexCC8NsRpiAdAgVtfvaVnAKTPq8jmgpxY8oCQq3hW97z3idJLbdKVcVcK5UKU8uuNBRWVdd2CUemq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x1s1pgrJsQ91uKcgX1fiX8iQQGLwBmSPbEP9GWwPCGuPJrTJQiEodQaN4ncWGHDhfZP6UviVRJA1RnXbwuAhf3b",
  "key1": "13GPSYTPtqG9nz7KZsJBGkxr4HKq412Dk3poBt5km2xmgiYpkvM97Lv2jG7y5NU6F9d5y1Ti1DsymAqQM4KhJvD",
  "key2": "23Kck9YJ1yTHWtKiNcMfKx6nRdka9tQtPCkjpe2soYd4qqwjPHCobNK7NdcZdb1cs5ixCrMB35uMNqanA7zbMMnb",
  "key3": "2xNeDAFEKxBqZk3DxuVQXkHnjQ4HtRx6Tn24uctDbpHE58utkTwJg2WTaVq655MaT4SnxmxeFRbqzH9vtaDJVqGQ",
  "key4": "2wWnYWxszfg8Ep94DMTHWfutS7zWUFPvnGGj8QjAKqMqk8Txg3iDd9vkwmauDuReEVtZK1ufvagiURhDLG3i28Sp",
  "key5": "2CdChoE24APrgRmCVBXJYmKw1BvX93JyN1gPNkXPa5DiJMUzTaLuzJ83L2YUQNkt8yZzPptLtLRfDiKRXrrUfVgZ",
  "key6": "3cUYncjVA5RR4mdJtAcnSyFHubnxPDK9LtFfsWfmwCqsHgjpTzbKofGJusJz5qTUQrTWLLb4F2uthvkSiiVkVNu2",
  "key7": "4rS682VgQVMUJigQQq1BhidkUuwsrWgme1p413DqDnVz8dt3cHd6Rut7Hd1G9KnN3GJ8Zn7pQNhyNNmd4vEBb9Lj",
  "key8": "2nZ6jpsVTP3CUHXPG4WpZztt7n7uLdoMXs7UNb11QgV8pJJ1JEuCqEUUePfC2zxA9KHxMhPJhX2meYCfadVvz7HZ",
  "key9": "4vLMSaxa85rNBCPTzgaTPo8XsBhXu2fXdLnYwPdjdfYVAjdmovGR7DsUq76WVuJrz667HXCKyK7u6nfzYpCXAQmg",
  "key10": "4VodoA85ezdipzEv5bDMyBm8oF776zQvFffYawN3mL3F5Uiy2LBE29Ww9Uxyfjog16LfHKtjJKdjbnpqur51ioUy",
  "key11": "5K1YXeEBLNa3jx9Mr2XXgjSnjoGX3NhU6PyhRLXfkBHK5CFi6dQ5bdsr9s1nBf7UrreAsgwYXki1MmGKZt4trtUp",
  "key12": "49XvByxxiesxnWJQFk6ut6Ui8ExpWbpEWjvNjwW9UJQtbEx3WHaW3C99whztSPzuc7QzdtU7GKZSVSKEz5WFeodK",
  "key13": "4bto84reQr43NYznQDiP4UkWTy2ZsdWRdXP9g15mikAsqWvVKfohCj1AdVCaKGSrJYZd4CyaxbqSimwctn9bzVVn",
  "key14": "2vxBUKLFvoxeKLAzHAmJBfKx8zNj74YiJAGHYUv7Lj41a8j42akmPHoUYZ4EYqQauJFUnAPu9n1LQezQiMp5N28M",
  "key15": "5AMph11hXtBbYQhzUs5BFmYuTBAov3kdn8vhXGHWAwvM1xPCGpiZAe7ab9jGaZEXzF1azcPLEjAtrA2jpZ3fCFhk",
  "key16": "27whJdx8kgWCgnU13SVNQyopjZZSuBhbostmsm5JDj3t1epUqzuMy4pRL3xjJboCd4gRipQaZUnzp5x8G4xEr75p",
  "key17": "4B5u9tvw89EYi14FSqfHJ8bnCF6vNghHMv1hbcYRCMC7dDSwqHnrF1vPGCtS6nmJsobJE32j1HT5iy8BKpxwLiym",
  "key18": "4uiKfKznb75oaFDyAiwZvQxZZuzBe4wc31waMp5XPNgZLPpFt19Z26udyQopv5ehBAW9i7xVDHdUxfEtH8rovfeV",
  "key19": "2PiMLmtiPQ4gyEzV4iXjBd2pHWf5f4Q42DePMAfVyxeAj82ri4ToMnJFdHKU5sXYeoSqMFRaoZc68AZqDpQCMPR4",
  "key20": "5s5LSVjQZnFgziuAkqyoN6ovowAAVSQjewCsoZeBmF7i7Khcwtx2cT8zzfiXX2p26isJbYDuJeFFJK3zfzMYVwFe",
  "key21": "YFxPzWpCxHAFtB7NBZ9tVvLZJ54VzeaBd73CYCjr3YwakmQEdqkHcvJG9y1SBFmsvSJo7yw1PS2EmeH9HhVAGfu",
  "key22": "5EkWMSHPiesfoGvd6bJoecsg7DrbGgJBqKfp3yVB2M4fDBJajM25JQVLtxKRdgMJxGU1YU4utqJvAn3Hq6GjF93g",
  "key23": "49nDeTRj28ex4xQzwc65KYkTK2Cb4KLGckMYzLGegXc1ZSjnkumt8LEY1dzpaBBexZ6Jhd8phGcodAuETmcjZczi",
  "key24": "4GdGxSLK9FRgYUZHsraqJHZ1ZgwZmcS8ZJba1oF9F8aF9uEiAPNxDKf6VASz9hsRrPcb4vBTbPfs9buz4MJ6zuWH",
  "key25": "zXMDVTmP8RiPsbYo81YVhF67u3USpup41A3yck6j5E28ERjNqexXSPgeNGcYkXim5rTL18y6BBrZrneKj8xKDKV",
  "key26": "k2DXYMaxWBPbdUnD4drFzVyjtX1Nc6cRdBQtya6KenQ5UX7MUg3y31LxRGp6ALG9jBx4gzawxjEj5nQ1w1yc7q6",
  "key27": "5yuzBZWAW9eLZjwGmYh8cGAJHGp2gorzCSH9HxfXmALgzAbtDW9HrpvQ1kJS6CyTsTaYAirCGZr25o2N9fYi1gQD",
  "key28": "37VnJ9Qh1s7MGMVaybxQfsFzZsNQ6ZSPXg8PXahLm9MqPJnn7xyRsGLwmuKp2KxQT1GTEeNvcR7GtcNCwexiKJ3b",
  "key29": "2UYnAk4i9BdUte7umKyrSctZpfcNcFfg968ggtWgRVevLuRanzHbcs5DBrhgjZCAhX8sB7RgzSFjddqLUzbx2YkS",
  "key30": "4aoFt1jnv4FKAfGNJBk3argqbDkVnXzETqboy2isLvi2QV81wpschcGM45t9unDWhJeVXw13Fgd1t8xg3Vj7jfUh",
  "key31": "3VdKLZ2ou49vJ6krH9msVh2eow2M8bu3CSv2LEKamvWzHYDdDDav62c7BSs9pVxsDdZ1gq4aDssK4ZXySxX8cF7q",
  "key32": "3e3H5qSYwvMakcUcGqmKAtDsJBbuqLoGWsSegnn8K4noucrHUXpMcC82i37SAFxxQmgFZh3Ar7YY9jR8MHqrUKyE",
  "key33": "5wCTdfhVhyWygHyG1mhWmhSezdfMTEZRqwkRt6JJxJYn9Nu2CowMkxW29pETcgCrKmd4G8H4txXZL3iewpr31Cx9",
  "key34": "59BiwQTXoNc8JKd6bnD3JCi6gbW8MyAoYrNYcS3C2uG5c1KXvyGe97vy5G3uRR3msG9AKsBFioHDdQhq2h3km6uB",
  "key35": "3weipDc83icHhU2AMdnqyXMjNyxC4GKXYd24mTykPwvK7CUXgUCEzv32yF6xDtrg7VUSNgbYs5DJzbE7ANSoq2iZ",
  "key36": "5RHqu71cc38mr71pJemErCHQT5uYMH5wzdyGJm5xFUH3FRhDjMS7r5GtcwLcux9kpWGDbMxGkLyKY4vfmC1Yg2xZ",
  "key37": "3mZGsTqVGLSFZNjPFcC1u8TSHLQGjn1YUoC8nzKphYWxB26f3NehL7dXUTYcCJu64pd8qLZTCXSe1J2opGjb5HRL",
  "key38": "3m4wK2uasvW97XkcHXMCfxgE3hC5XoKCDfkPFdFWiN6CLWPxoEdijQpqCSLLGvMexeRCDLMnhaLujtRUAZfaEwR1",
  "key39": "4Lj6f48rbx9pFxZCb8tM2G99etmthDBRz31zDZsHcKzHUbJFyTf6B3yZ1udyKEDDUzm87y4FhsZbvm3ueKMf8eYB",
  "key40": "2EQ5bLZ9dj7cegXBDK8NN4i9v2cGJ92dLNW91MSSZEjC5GberUuUZMmDavhNrPSWmTYLy9NbmCviEkYKUZpTSXau"
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
