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
    "2E1GkUYbE1hgZLZ5TuMTgPN2CiCW52H32q1GBQRV8RhDUAkHvNnywouzPSpm9Ntq2imKQLJTNSerKeF6LnpaWBUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66tprTD65FuEa4jYLEFVwGrGf3ZmXj1YPRuDyA7ooC4FbGzaC6xm6Qcm4wDibbt5rnst51UpLC9VnLBA46x5qsK6",
  "key1": "2MR4WmbwzSxYm6T34aUxQXVtABaTer4RmPwGfCP7HkxX4Uqo5RNcvQsUyusd5B4vZQNTtnUwGPtNW6NLNAbtABaS",
  "key2": "2qsE6or2dZx5ajmkSHTHe9oqGMHgsydtXbhFnM6U8D1scz1HqQwnMCR7FUCA5A7LkBM4rq3HEqQjBVkCCkFu5kjP",
  "key3": "4hivRhrmt9AFonaSUwYLgKCRsBWueabgyhrjfaq4f9NPTQfTATnJTi4X4Le2mK4PhRN7mDvq4JA5GJZedHVa4Doy",
  "key4": "2cTpRdpNnEeCaNGrPaqCdeF6GKUUr9Aa5eQ7qMGHypo6dvVFAk5dfqy4ao1s4L2LKFs24HRpyLAGXiLV3jwyMGPR",
  "key5": "5BSGtcu5ZwqrB9ocK2uVUkDwmWSoViT6fDVi4UnYDiScTQRquoJHLaiiJbf8BBRoTkdZjh4egWTKViTHZ5jmvHFU",
  "key6": "29iGHUkEigZJ5uBCh1udjZ9u1EGTXPxwKt8BovS6VEMXWFFrVu7Msbywcfe4HSpQYEtKxbbbKyksysucu9jixTpj",
  "key7": "3JG9Lbwiav15JLnkMnDCrwLF1z9wBq2HRB1pQbyEm2EyF9NrRZAiucu6Gs8bAuhkqbhFAjcVy2dnHYaMULuzrQaH",
  "key8": "Zw7tB6NR9iA3qTAiNCqbyDZUn9ByJRdx13pbf6d1AqpNH7jz3Fd6S74CwJ9ZUaE5TmPBEhm2mhPRkGaGWetPhZn",
  "key9": "5LZ9RaJKJkQCTgpgpc2PgxS2BCqcxCdQraRFBDoXeTyHjpTYrXC5yygMqRSMtqUisz4EzLRKfe6TheWwTxYX1TD9",
  "key10": "3xRT6w9gBaxwuSdEz45kegudGaVk8Zc3hGje5j7gK6W9afzhxxiLv4jpH8AcAWEysjXGtiT8MeXg8s4mTxa68Xnr",
  "key11": "3YDQitb26NL9A2HsuKqjiP12jfpx1jQ6NZfHJfxqKYztxj1gShsWqWR5dueBYoWAGA3XyVCwbbSrtZAVMmEpEDp7",
  "key12": "kDZJr7hPNarTeK7hNwMeiM7thNTae1LeoKLvhMDwTpZfjswG2wSiLpuz1R9CMZ4bxrSFNqKnBbojHjDSJn1wuzf",
  "key13": "4MDRyzoNicJgrkrWGbzLCibWA6EeCFubespLWUgh5mFfznY8ZKe17AkC9t8bLzF1yCZJFtNz3nRJR2GVFLWmagub",
  "key14": "qeiRkJEMQtLLQ3xm1bc12yj6uzd5Np51sm5Fdar15uyaW2Ddguz1MA5YeydK56hQabNKsMzxBUF31x2EN1KeMaY",
  "key15": "ZAN3PmzFJKQ84QX3kRxm7bR3UxKE3i6ZNZvgoeBcQdNkMXzDjkVoccaVFwWd1A5MhbjjK2juBnHPZ1ws5XZT9mX",
  "key16": "qMCHDrEy2jb3dJ1nqkoYDhPvABqv23uuDGaJZpNbcAsxBTE51y46JPqbh2F4qC6C2iXfsHBSusvwn7xWZbx7qEY",
  "key17": "4mQMGdSVzghgLpCW9SSn6NX42jrqkApcAoxP7jfj7W6NVbFme8BemiUm7ddo6r2EkL5hCeiBGvqGff5iKTbj9TT",
  "key18": "5akpmz4yMM6tdc6SJMtDXQQASrD6bwZ18hrbLuuvKE2oCwWzbPLetyZurzXjSUyKVKwBqwxEpNQSpa9T3r2t2jDD",
  "key19": "2eWjzJRD2CnWNzDAyTTfZBkTXMu2XksY1HFGbFozexfsP24jpvGfHUJxc71EwRgWB3NnJ8tGEK6ibkeR7oM8KAm4",
  "key20": "4DUFNAmjHfJPUA552WAgwCPqsfWnT1KETzyWyCu9qweJnfoopV8Hw7kCjRGEGns37EqoUpsJZSiapBdgcaKa87Sd",
  "key21": "2nR5qftMVbHwaiBTAjkHeiGNjV2LAe9d46ktKkYYYrW8UqmCNAGmWNUBwTeRybzBCPjERdHRbUsGWo3YHPQoJAD",
  "key22": "2a1wE9kQoHaz4b7tA4QS8QfC4VmFPruyj6LCbGHnmUBerpZt9gJoeo1cGXXyyRXdeoDdKv3GJh9QyWwdFihygzrZ",
  "key23": "5vYNE3u2iV9ZJpfvPiuQGCBA4H4ya9TxoJ5EuTscKC3Hc9RwGDYADsTEFqG59XXXAm88BHPr3cpvu3c13jfUnrc",
  "key24": "4yXVwEmYanyGp9hnTM9HTy5cq24SEQL9zJiXkr55zXq9HsirdkPKyJeDgJwHjJwZg2MHx4Mwi4AuxucuD8qt6i5i",
  "key25": "53YJTUBRenE9gTYLJ2NDXGs6LNzWjDwZ1RoemtsqcowZF5QSCadNJmgQLgwJ8STXeEQLr6Ds9Ga9Lw42mM7XzDB6",
  "key26": "62b9Qu8B9S6FHMXmH1dvDhgQRNYmUUojwJuwzuc9EaDdN6brDibfrEPWWgayNeQSQKGp5B4Dd7h2Jt9afC9vuiZW",
  "key27": "c4prLXz1Gm6rPALg3W5foNffuVYZXCrDXifV2a2VtP27UFy4Pb4UoRewbArEz3TrA613cuxWFg4X6DDkgAn2SUV",
  "key28": "3Yx79c2SmJx4vVX2NZRu7MX2HCjjknbRnNc9ZFKfaiQpNmPL5oZ5CzSzn8jDDgAk2jhi4ZtXdAL2HDhnkWRh8Dui",
  "key29": "2yVTMps9Wmgwd6SrquHQ7PeYJAcBv4q9niRkrqNrXk7n727vgpUqjeBSU7TgbNemJ2oUAskXERQ2VTDJp9Wm7y8i",
  "key30": "2977yefG3HXzJb9KL9qDqSir9CouuA1hAu55DS1E8fHSztR5bQCmUZeyp5twUeArHMQogRoQHbkHeNwjU29j5atd",
  "key31": "VZQwVzAuVqPNwYguG7a31Fjuq4eBuUdveNUj4FXodZBH5Rf8JzFdhsjziJ4fDStsf6r9u56ySQKUoCxiiBRXLNH",
  "key32": "2yT2HKJDj3HgCFtXfK9SiABAcVLuE42VEAu3wHHTDiUDRm5MruxEhbGsQAJsckJvkgQ19WE5qpFasF36Swykj4XF",
  "key33": "5NiGzrMEgiP3uxwGCDYTY82MZhTgSgviV8Ex2jfX32NJ6fQsXzfQGLkARhwXTnYnDKYgwHYBaGcJNQ2WLa6tdAca"
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
