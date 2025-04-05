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
    "32VMYZGTxsN9JX11PbncxCwv3922ChRXgq35HydsQRbn7FoyEMJ2am91ipEfXhm1zebF3Zmmc9iYffTVWhkpMXwQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8GCg42h9Ub4Dy173dgwjLAjgzufyzSJ9w15bCXafnm8YxnfksiNTL2nH8azVA9z86Dx9QkXTZ1pZ1g77opux18K",
  "key1": "4BnNMEw9jnW5BVgbSfVYUaRL1Ew2Fc5ZPSeXtRKtRTEYe3A7PEuLihiT7Jcc9vZHouj2iyfSmKT9tz5HwzX9jN16",
  "key2": "3hX345FtMrYcGqjnAzaa6dpTu5rP4Brxod6h1TAw61AR6qYJuCZVLmcbcnMVKYUYpT1m27pa56AyC7rzuDZoYTC1",
  "key3": "48rCT7ahcP8Z1nG6P4rxdeRDPCwQvJULzqct1Hdan2zxZQgQSBiukXyqimkB5aUEJQdBGimRuNQtnjbpTvD9Q23d",
  "key4": "3WYHsGdBA6ishyKRmUG6z4pgD2Fje7u137pxhuWQ3wMDGFzVcsB4aQRa4dChHXqjBGCj7673TCgGmsKAV8B9CWXY",
  "key5": "4EMGk95ydzFDKzyHgMmAw683Ae477mciTUPF5ESTCbX9sJnvwxWUQKkMPaZU49LykQcYH12PybLAHBTqjCWgsEzD",
  "key6": "5w3y4SBiCjzw4N4TdX1VBfvmKJf4x9o9bUSdCWrHndsWwWEHphf59EdwZs6rPNMFVaHNSct9hqrr3PcaPwpvS7rh",
  "key7": "2zMjRH4e89zEFFTHJwzwFQf8A2Hd5Mxvmg1Xv22jDx9kaQbAduUmNQdk6YBHEhqfJUSAYkHTcoSEV9vDRySJCFUU",
  "key8": "2FK5opwcdB7bsLHo2h91cTXkShoNJbcQ9KM19LAJibp4FvuAxvd28b6syDqK7F2J7WN5QWRsCbsqNPyRF14tAzY1",
  "key9": "PLUjenKJfREg5GZsKo6kcZYuciPmoBHg84M5EJgqY5pBnN8rHtytnTkpVgUtZWSyXFCTGcvmgFoYba9B86PRnMk",
  "key10": "49kAJsMacCnLjWU4ehVWvyiRAKGPZ88tzsrRc8nWnbQFDLwpi7669G5dCdmVVamdzrmUcvQMFRhwGRyPXPqpKf4D",
  "key11": "5obecfiRjsCW3C5SkRZGtFKmoUxGDwtCqT6DCDojgM65pwo13b2BwaVdD4XWLHgA7UD5NNmBSgep3Nrkrw47mV1h",
  "key12": "3ueC4XmGwqbz3f5Am5D42nvJAcS8B8e1hKRdPx9j3zBcZUXPcbdWDxU9khYWGRxy7ai4iMtjKu2uMqgBas29ZaXu",
  "key13": "3JuqNzcKCRrmmbxttk1LuTJ7gfpn3Hi9EFr4RkcdP8fz5TnAo1zsSXP7AXeidmkrMvghC5oJoMqT7AqHKuEmUWYD",
  "key14": "51w6NnrDvijbw1MjQ3g8q1dPCr9Z3hBeqonTqZh6MLqjaYCbZAu1iPncY3NiQyMYZe7QvDFGWhvGqQxSbvGiKhik",
  "key15": "8ZSArfPHpaedTjADs2sJ2ZANvXj63oc5e2hVVCr3iv7DiBUNw6C9XCEvNo64QDWm1oPursjj9QSZtr89Py773xp",
  "key16": "5b8Ym3yrT7fi6oiffP32McE41VmBDSgRMZpNZX96rKA21rejnooZVA9BLsxUiwmSMFxF1zxyY3AnHht1uj11yi4q",
  "key17": "ZErKsHZXGUYgBteV7RFL4Qg2iD6hD5EhiELsgebKHZReGmNzLKPH5fnDiFYoP8eV99YbmN1YdwcHpLXgyALKGnt",
  "key18": "bYsq3Be7bc8avF2fRez4VRDCMgdBUzmGkkL41aHVRJiFV5c4sAqqjbrArU6uw37gS4CQFMZ9pXW7aXhWUojrpNw",
  "key19": "3j5WxxppJjojGemb25gskAxG4Tn6dLs5YVUbeJZt7ALwpC6JfxwkUVdMpJmemFW52pDidvDJEyU8kPCeYhivwbGi",
  "key20": "5aWkcYYdkVnJPREhhE3G2z5LpThPXmbemMgno8kx72bwbHH8R4nVWpRoCFpuRamTp5ToP1KgCypu8NqoQtPpeaMb",
  "key21": "4vMQo8j7GSzMpxEPh1tHLwSRxVHt1i2q5cATn7xUpCSLtbiTJ9mnuX4oUQfSFmd8SvUVzWNTRcLTFJX7ZMwCjtrj",
  "key22": "5YJyrzZoC6Rgudkw8KfdLUDAQPYD3fTWZnrk4Ki4LLkaN6xxzGa9vGfnThTNbsDZPLJfD7H6EfLGpiHxiD3A9hQU",
  "key23": "3bWXrswPvLS2AmH4c6FUzMmqwV3xWciNHpyCAX4dbhhHdoH6Ee67HjYNnWxwib39AqvU2kCio8rAuMgR9x6Y6Wxk",
  "key24": "5tLxvKFftuFfmvF9VTDTeTDoSt8aitKDnrYwJKN5B39tbwweccw4y4tpfPTrD8rbD6gpNFUrJaVMFQtRRs7Yf315",
  "key25": "4kM5oKo9ttKFUg5kbNLAkhTpMpBPT3PRXyRibRw8fn8nt6EYNcFPjkFyDLoHRGBGU5dt2Mn2XFKJArXrAchJAGxZ",
  "key26": "YsvczAe1zGLgs8wbNpPvnmN4mUHNEDTwDYq8yfMVgxca2a9mU8xir1NRTwSD9XKrqGdWVwtysEcDZt5aHhtiYH7",
  "key27": "4DyKz7r5hPswbER4dEQJnT8gSoJm62JCChid7qSeW7P1KRGhjGzuwEThagZMSKLVSddD8LfqNp1u1X6Rykh6KqC7",
  "key28": "2zqeyhtUcZo71KciiYgjPotgPArUz1MeSTFHq7J4kSXaaz5uzGFe1x51YJmJuq7PKE7vERsNVkDY8MM3CQQxnqvi",
  "key29": "3Mspj4PevdLEdpTpXNAamJdXemM9WhxNauHH86so1s2C3267bct4RepMzXcNKubLUYAesF1sJksTcWo2FHfjbS1E",
  "key30": "5cDLVMY8iQqsTZVTAk9FXnQ4hb1XLZEtLM9DNHVWvcYALaiie195agAC4ZhUqGz9vqyukrPrkxXWWTMP7HN8MPsK",
  "key31": "4bmfL48p7W7MdkkoPkeMPNHi8BveKzXgchobSQUq7yogi2A3TGjHaMeYLw339GSB2e1fCf86dEoD8QGnyQVaLgKY",
  "key32": "3H5ASivZDy4HJLXiZSfowb4QpKmvoFxPUM1HEx5eEKqLdJytoExHWA8uPJToVaVzSTCJUAuNLFcmaHasL6pxgF2b",
  "key33": "3CEpPNtpGm5NC9PTiNuRTr7cz5M9UvhFPTWkfmDZZgoT81oCBpiTR3XHtov16WuQSAqwHbudfracQnqUrKxYF7Kj",
  "key34": "2pXyf3iHZ4QP9jQzLZQKvk4jbs9ynacqTQQMoyZv1h1DC9LsGSrjTFo34jovtk66viXmQRpY9QbMBrpfMo7bqRbm",
  "key35": "28B6cNcewR5nFaWvc5zuCzKVo5goXMmtsaM4zkBHnpgrWz2s8UJy9MhuvKe9hcNuXjqDzjEnWNU3MuUtcus2YAPA",
  "key36": "61mv5snD3qgk9Y8gusmrHoNqeTK3yhw9BUeMiyjzCmMxG2tY2K6FPf7rR6trbYx9NpVgmV2xN8waoVKaGV8BnLjd",
  "key37": "2cTvmMPidAv2eeesMtZEyS2ZSEAPp6AaiYkfqBSggcm48EfvkaiPmTgGg7ejN1NocvSqirVHQX5gAQGKugZgAUTX"
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
