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
    "5FbQBH2DniihBJSYoLMnWvYHD9BSLQLRsKa9bNkHZUeS9xucX5xoifoUdJxma6ZKyUCfw5q3ysWgtoQrdLyuCK6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3GMZHN2izNWuv2VjRvBE4zMRzN78aayrkiwSDiVi7egXfqKFoYNgqZSdui8NvW9PQmiRxegD7Te9Hu3DvPDMBuVY",
  "key1": "NZKNiMVR2Jc3RNBqQHeQdQwqpeYThtt3CzGxqwCGXkArU7hWAXBN7BqiJBqWjjkoyWKEq4WvvyU5wuB1yKsSpGy",
  "key2": "iyJcLb8yB4czuATeeGTHCXcLqhXRgKuaJdDz9gPuf4JgJefqkqpzGp6EX513mhdaX7HvouvzmcEzRwt7jZheGpX",
  "key3": "2jSpzNuY2qYs7pUmr4yiabaaWSwXE3xfS2M5FCvP7ESHoNA5XyPQzYM98citRAEstq26EEekHf21J7jbf5FMQkrj",
  "key4": "5SkHNBY43TZ7gfaVEWueTtF2CRoEbKTDPodBf4g4wNkyaN7jkkYDHQhwaJPeAqsg4tCzdWDgU9abtv4dS29manq4",
  "key5": "5exiJEsoiv2AVikXpthm4MR94LhaZ5QHCMnctvzKNqhDBKCj1rrZofFgjyyPwdiA4uLQ9yp8W29GMT3NRDybhjy1",
  "key6": "xCdtvNzMYrLJwSgvmiyWprNk4va2iNYc7GhVJtYR7DzbmMwieP9DjwbwkZ92MQCqKCqwttwz7CogRghJxZMo1ok",
  "key7": "5p6CyX9fWsV4uakgdCKN6WZCfqiNXbJLRHJ4NZDCfaZLGJ5j5Rj3sQW7XUX29bDtkvvBXiHQGdye3NmU7vj3zfkC",
  "key8": "51mTbUBL5bJyEGSRz2SMv8UWhv8VnuJL753ASMEGztJgFhfk1Wh9QZmrr27nsT2GkjGvjGeojssamiXabYSWTGEu",
  "key9": "52k2G8qcvaotNUgjw5sRvpPLUa8NSE8CFLYpJM2euNHhebvu96TB6mfFfMP1E7gecES6PfEKqiKrxsRfzdTUuUUn",
  "key10": "2jPEbc5SH6A6A4x4tV1nUz5pidUNsRCjTA2NaAhZLGP3aG9MuLA4AgxYGiUbGyPrsyuc8WuZVuyvgAAERZP8GtNR",
  "key11": "4CMRDjB26Qv4dw65zU2wxqmE5UjfuEDV6QsgEBzLgUGzn72s7G2WdBjPRyPoPQVzzmSga6EyTuYfS1Ru1F2TZWpX",
  "key12": "MeRyGdfYwxRKrnKDZi6CyiD8w3Phy8yy7yf9Nk9AsD5JsWw9UkxqmQT8wUvLRp66KCuyqnVgfMxm1Htco6pyZyE",
  "key13": "2MRLqUFDR6hdBNFMMy55B2mjVsfg4T7mo2WS1FJVEoxgPARiPQEarwMQrjcZvKjxA46w9vn1iKrcnuaxVXJe6Sxy",
  "key14": "9ak1WTXrq5vACYehhtB8cHsgKgfdBKYnxvmQfXrMC3NbJLhgxqJrz1E8aNwVyJg9NqaVi97TRYvSNW9dm6wo6Bc",
  "key15": "2qCmmcyPYQoXQ3UaL96rub2U5YQpCGH4Xv9PEAKZWqbSa38kj5CvP6jtPa4oqbbFaBbnFdJbs2wsNAqdkefLv8Tk",
  "key16": "3AEJSTdSFkChFHWNwtM2RbFCLRgnThUUeEyLhx44Wdz7uopy5uPxicxzgaq8bsnc628F8qMjNTS4qgZbGfmgjmCP",
  "key17": "4MDK5anaxesEUu4sy8xj2EQw7DpAbNygE1kh5qmNBKRNtSN9ZyF2mKo9NRRCGagAXob1c4A5LyCZTwyLxKKMSpHa",
  "key18": "dFNSYEzAoaXDj5es64n6MwmGmbUrc3Y9FoCngnRfKAWq8eaXYV3255KeVjAREsS3EAQoU15okU2EssiARUXCDZU",
  "key19": "3vbkgSjDo1CDRr5L5zJY5fH3ZSY1PteCYusLjvQdkq1iFJ5oeW3wxccYrbcf8NEcxNbdpPkTRMWhQWiPHGPvLPFr",
  "key20": "5WZDKUGZ9pKfXysjcGvwFtZraup6PiGKtx5QFGPJ2SPucrUoYZrvjAVPWah6zNGDM7J6AjTqbrPeNuzinvfUtwgt",
  "key21": "WT9i3tgQHB4kbPPvUzV4xcuxWiJBwmnXNa5qqzEf7WCzZGTsBJimKJLwsnursCjc4zjEire19CiTWpYKLuzMEuN",
  "key22": "wjEuun6xJWod293g9LDQfpJoHtfX8Eytgvt5Fh67VrP2YddTWjbUWvvqymLnrQc1QDTg4Zx5kWdWxPVr221KfkV",
  "key23": "2A1NxqyuTSNWt7WMGzBv4Mo5WsSihoVd8NRyVqQVMYe2wxHR5cw7pH5n2P3vF7qHRjiHadiAvd4CsWTfPHNmd9DT",
  "key24": "5nfXs5hWTSadkLVQKkzhS6P6z2FVDmm7JxcFWoHQPSwMssDDu8CjgwSdSTycbce2oTUKnaimkCJWgjxvpNinEzPm",
  "key25": "ZdhvsnCrKMa8tiATsVBRRyVk7Ar8LGg8USB1wK9NEp2URiPjswjx6mavdvCS2bmGJRvxeZhEDY3hUyoM9nqhGcA",
  "key26": "64mxDDYAoCmV5UbEnQj5UidcuKZkTp3Gwt8ji5LrTLexNscBrH3yCX2DW5o3g4zGzntEj65GzZgNkip2ypYfCcot",
  "key27": "331tq2bDG61TL645ca9G4jJU2VmbDfD5fVV8NswaE7GXYJfHyXKFx4hddN95HEAgy13jKSy1P2Tem74emaJydwhQ",
  "key28": "vECK72YoST3korw9V1T3f8MxQq4PpM79XHQLCoofZRXX1HaNJNDKynFXLLCc8Kz8S6JYjgCndaJz3cVC5tsGfni",
  "key29": "pHvhSXG4oFcp1kjBPvWoMT649EF5WbmrmcQtrBi6BM9ppaAYQa18wxHsNfzAp53YbFHQgmTuq9YsfwuYCx7eZwr",
  "key30": "4B9EiK1ZUJoKy6SBKNhKxprrQrbz4fnVheq8NsrKPXnjtznuBeBw65wibDXW8msyYZAHx1ddU8XpaeojV9rndVAg",
  "key31": "3sSjDYkctn2FL7MaUP9Ja6sBZP9nHP5sRBtNjYfJBNYkUX8PLgYoGkvMKMGh7sZTuGyM9GBaA8x5ifCUENU84RXf",
  "key32": "21XpTqQPjbnpwHEEFSzwjuaieXwsTWBcqMWjnF4EamqCfAquvwuS8GPuSFhTNs3sNS8oSc5WUD8UxYEgJnez3zqT",
  "key33": "2B9bRP7fMwWfmY3jB6bh485pkE8nPuihzk2pJSa76MjbYBxgpUZqLChY2vDaCfyBCnQ6GirWSZhHbLfXST3qnKcf"
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
