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
    "5Wg1i44tzRj6ULNbmh3j8ZLS5PnPatXicUxv9nA1X9n1GukEF9JzPUxipXZ6Qmc96wkQhBGM9fdXPNe7pFVrnhJv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5etSy2q5Wvdd6JxCxaG6PeSTJxNXpWayHJwdJvW1TatmYQQh7SVZj12WHoFFxfq7eB2mAjM5xx1mKZG87MR4q7TV",
  "key1": "FswGDRJag6YnNj4eVfHmTePinRgi4G9nicgrVkTjHJQe39Sugqfdv38yTHPFFgy3CHevU9ULtb3BTpnLdqwpNMr",
  "key2": "2ZWomtxsA797bRXwhSGg3ogpD6DgmA3HcmKMh5BHncXbaLwizWnKB5s5aydGT2iLFqBiUWexvbygMXC1S5FvrbNw",
  "key3": "52weyr2LfwxTkhUKKnkSfUciTUMyoyXBmPy2JuBWQ8BxhDXyq6HmDTu1QdabojW5Y6eBePtB2d4Sx4pkUwPknxS2",
  "key4": "2xa9WbU5DCAsfutMu24F6VhExTWDMA6s2YBMZ3hj7Csu4eKLhGyHhSM5NybHGbeBFkKuKTiE8btMCHnNUaLgnQ14",
  "key5": "5LAWKhQQnku51QHJiE7NMw5Tk99uM4PL52ZYszpi337ETcBq89eup45aPjdC3fqN5kCnc6rEkjKBtSYWooQCgBqN",
  "key6": "M6upMJJUxL9NdDtwXD31nW9FjsQRZPPRqYHB38UbaMEV16Jee7wNtEbCZJWZLiQwjeD1tQeb4C45TcoZsamGVoa",
  "key7": "65iYtFCpQ1oaaU2XvRHFiUjM5YJUi6M1oY8Y5pou59Bs3r7NxiUVHSR1Vu4zKyuMuqzMEhbWAJPezKrj1FJptuUS",
  "key8": "4kJDWaCaRJpTHtTo8o86diYCqw72npTWZJuM1eqbbJECkQdKkvNURmD4kFqeuvaCgApLZHk55Q9CzWEBqYGBgWeW",
  "key9": "ryT1EkZRpbiZ3vJCLZ64LEQm9s2dGs9BktUAFrBYCETdoFTfuN7DgdS4QVbWsrs4jM7ktVAavfzUDTYSs4h3FDJ",
  "key10": "5NzY8JWtnPk52jSdpaAcvvceWo7KEqJdqhn8BuB5Mi7aUTFGEx1yHGdTPxCJ9r7XJinA843czMvoiHGmea9NEnTU",
  "key11": "EEyLZtntt18wTDJKccNKtRBekUMdzU3F2igRwEGgeEeooT8uNk2JuNKbT4YR2y7JMQFSgMQjwNQuRpkzfiYkVVn",
  "key12": "wyjUDthYASHzeWRiCMfM1eTWwPdY98UJTQHhPNSdHykzstec8Gm2S8QKugA5YPmgAKK5zjtxefiqMmVkwNGfKfC",
  "key13": "22P5H7AqVSvZTLYYXPmH79EZp71e9U4KRZkoM5N1cLhrTjH5GhPXgfcyRbvCJuPP7t2pFXXuDUtUVqv5YMfFWX2P",
  "key14": "2ZfFwagik94PriV5XJnREeXmz7MFD7KtPDpsySQb4knQXiR4Hqh1kQdSgfVV6BgqyFHEE1wwFRYDjF5TdxvHBtp7",
  "key15": "4WWsmoZ8Y98NopN5dPHujX2BvzdCYTiopHuDiMpq3gN5KNfjAZqAkr19bLQiMSJSTVimjRX28NGXwz2zmj5qbCuA",
  "key16": "59PZwNmGtW2j3Cqs598K1yqxeQ5cdeYYvo1DLiiZkJitAkC3X4ej6hTpRL7gG2ak8wzCWMyNP6KWiT9Sb5FHki8r",
  "key17": "2YrJ15K6hqnkQ7xY1Kya7bPo4NjnHMMqiMzLXwWm9E5nkyGT5tAJaoavy49XvvrrAyYHWLcs9jboJ5Ya9rwFR8J8",
  "key18": "36UN78Crwe5qPMzv69NqdsGNHZgdmiKnCdgZKFt6s94BwMsG8DCZgPNguVDLMq8kMXYWnT9hK6FnfmQU1pFN9UC5",
  "key19": "25QW3KG9ERE4eEmSJQHAdP6c7G9sx62ku6BBW8Kha9qLWrxw8aWXbjKazkeeWQ7cxsLaYRaPQ5sqtfVJc6dZvcBE",
  "key20": "59ZA73ryuY7EFAHaeTt3oJaGrxY4oGofrmBt8KjNKDtUjYT3EACpLctNj9gdFoFSBPjcwTJ9rfoBQHn4kSLUEPDC",
  "key21": "2ERBYYRGpdjnBj24yEfTmahofQiGypTthphFctafBYWysqQAUxdonrf1YSdhWiuWD4AwhfcLFfos8h1AcAB1j61q",
  "key22": "fB5ww5EEm3vgjmPDyTUHQ6WPAio9GAYYP46Q5PNEQx2hANKA3GPK9aVjjcH3vBKhcsh7r8TAJJTXzPEVkZoszn4",
  "key23": "3vTx9LhKSyezv8TLhj3NfkKsqmqTeeToDaoPCvsu1VP9NTa2zX521ALoRsq4A4ckL47GFUaFLVSz7jTFw3ZbnF6T",
  "key24": "x6YSAJ5wL8wX15VZ2niMLdtiTpJdj8gv1XGCedwCtTNddAKmDeAAyjFVUtqEppdpNBCt9jZn3BnuGv6ocsW79Yy",
  "key25": "44Vwno5wr8TZwbyc3DettNXbCwfN9g1qfpW4LHuF9QBQ5HUrYiEDTTQ2jEjJHDndDidzowVSKSCK1eR49c5Kz7ok",
  "key26": "5SaLXMwS1hDUriYznn9LrwqXGmRbiqbeMJnjh1hqQ7PQwnecoKhHky6CGHGqfMhodmSFr5bQBmjQQr3KBRyWezRL",
  "key27": "3u1o1Yo6RLethLKY4sws5X1DCeHAW7uEjoZVoa25UD481jRUw1e9arMRNSvVM5pbZEwaqDHn3pS5BdaSoSJoLTtm",
  "key28": "3tYBiXbCmoDj7pGk46Yfzu5uPsL3SpMWPTEHGNQobogAzszNQDxTtjGDb9S7oh3j4ri3HNUhk8yJUL6uEbfw8SAg",
  "key29": "St637fXoecjyFyxk4qDuTjKz1apxSUiK1AgJu96Nrf4oqyZYg79xX8XPg7yt3eqMxxhBBgANCXxgas2nXLCpB4C",
  "key30": "EWaj3Lx38G6mnm7dEznVxx2Vgv3qokrUv4imZ4zGRDnnNiCdPvZ4k1BucJdGvHqGzLUe4TMzDNxz8wpsHSciKnJ",
  "key31": "2hPHxkno2K7yHUTtoMjC4VbqWcBeB1YxLtR1A1SE4EEkGuqfmrNnrK49GR7x9vfKMgQ2dwmf1gqxQ5zZXVad5F32",
  "key32": "4y85WCkzui4VDkHz22jkC7m6DQaPsZCECQ9nExQkxVkt8EQwGEQUBZ9477BaUm7Vvzgn3hyv7dGHk8akD6Pn3KiW",
  "key33": "4257NMyoN7WL82pnRUsLJdjSGZ9GeXA2DmXbcVEZGj6Z85V6GLMwah9Y5WwsfuJeUqan2PwjMZLY4nPoo2CEanNo",
  "key34": "4bsKoigh5e9JQL9sYoMCyPJT3JhV7QqxTkyVM1YzyUX221U1738XfvFDKkRX2ud9j22wNmGJKsuAXVYp3JNwzPze",
  "key35": "27nfUNJq5cQEMDjuPXPDUgyuwW53ZLKZy6DZnaGuZ5g1kdwQ5BqzqXEUYj2oYHbsYuzhSscQFUhXov2uYvuKsAqL",
  "key36": "nuZuBozMsqGWBKvqVcMRbDDnkVSxNz76S7KVeQW9ywKjZufRuNeEUBa7P4gymXjzLrD4w4m4ooV1VvMQMB4QAwr",
  "key37": "2f2YoME1iC1dEr8eLqHbQUsmaFRE4NWXKnyPoDpi5vRi331rn1hKNCVK4GgVGCoExHE9EiXifV7jBTk4TtfXfxCu",
  "key38": "2AZEDz8fYYeErphGPtfZWk5ozStf36iEXUxNx3Y2GD58NGwNxrRHxVRtu1zSTB9YYacfZywFeZdtbB3uvcAu21Sm",
  "key39": "31phffLGKCe4ppiwyC1tcurwG29GvK3x86C91HxHRHdvC9ethJtNVm7otrsdiUXBGeSMwUNE55yQ7bNH4SGATjYs",
  "key40": "3xmTDzB86Fhjvmej6a288xNs6rHpsAkvnGy1MeEcMiZ86tiCYhqrU5s8NnHMVNRc81rSa1AXjDaqrSLFBwCcBvKR",
  "key41": "2te7rQiGwHZGExeNVykeM5WEZcVt9sXvYcjDnu9FP5x4Zbkt4ojrMuBuZoehYUBXSMrKCPSgp1Fde3JpMCksTXmD",
  "key42": "TCwRbk1NqEP91hfX1yQpLRWJW5J9Pr5QsbT4WfU3A4xgBQ9wrbtSuSwetmAJ7GMag4xZXCJibwTMy4SbiNsZMrM",
  "key43": "vuHtEKVv9FPGvAbPYhTk44HirggU6sjQGFVCEsNv2f4dALwxtb6vmG2MmJXpg45ELPWWbfomqHb4RrZXzGdiE8Z",
  "key44": "4etbRHQeZL3tmCNvoPA8EX3i8X23jnUWumvEHNiH1XxJAkvigrA5L1QPDZWpfXJ8oB7ZxaBRjxMeWZdg1CZwrx9D",
  "key45": "4X4YAkhk8P6BYFsuo8V3GXVv9cNq3mFs3WCHQxv2DYTzM9kr1gigNDG39ABb8ZTYpfuSZtzjuZgGwGXZNZbw7t8e",
  "key46": "3Xk4oX5q9f17JQ8gXjaeFG4ekn4jspVKL736jdYAo5nJtkeTQC2kebAM8Wkowje76hFi149u5rLG4HywQ1pyqSRC",
  "key47": "3KDqKomjdt2F3ZbNJKsyCreoXrgFR9gDBp6Cb5YjCksctFzSJaEzY96j5XCwbyJms6xFRNuDvJjsZ51tVZ6b2P5r",
  "key48": "4bQMdW5F59rPKUPs16hJ1K5q3DQRxaeS1PcE7x5GYszLtEvUCRaLpUXV3JVCsgbGWb4VdZqwT8q6dtvVNSuhocpw"
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
