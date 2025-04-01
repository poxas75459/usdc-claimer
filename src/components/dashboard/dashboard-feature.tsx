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
    "3BJ8Ds9YrJTFqSaNTXVRJk3yiyj3hubmKqbVW2nMk9kgQ6wWgiqCat1EQDTba9oxhSnwzejxXZqGUjsCxDiauAFc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "C7ChyrVcQGMWoQ9tapJUFgoZwAFUVm3i4WBuPGaYNC5HXu5JvEPSMRpXMQ4Vh1izmLNFFdoYkDNvYHgdHdDWY3k",
  "key1": "2jfUBsz22nX5Ns6imBS58KKn8tHN8WNAB88eXvNocHwt2J1EptCo8R2Jj5xejfSxPbAKzAy7SAXE2RvnqQhaAJcm",
  "key2": "i2q6jhMGGym1JjbsbFe7jLPQthfa2Ehd7fS13EuEEoeevCkreqvjvP65LgwnvwNYdF38wMA5BVUBXDqrFJxyovb",
  "key3": "27eJSiiLyeHu2gXkuqSHwk2YgHs5qCJYTcD7mWEEvVyk114nbLVuDFYx6UJGmezKYSXq8TReGgV9hfBQHgkVL4k9",
  "key4": "4YR1BkbjJtQcy62VfpNPH8wpuT6MNWjqTSb6NgpCuoojUMMLnPUfEQHtb9bJTWVpEdFbfJMLr3iwpdMKT2W75RgD",
  "key5": "4SypTdc19PYkmxifbuf4BRJFTYuxtPW2REh5xV25sVFYMvM34pvRrU41YXW1go17VTtpRyv2UjTphnhUYVzyKxgc",
  "key6": "3QAdBNpAuvBwARs7WV3fzDECEsnjcUAEUxjhak53Je3JtJmaPXkj4suL46S6qfay5z7s6sHNWKaJRzqHjwcLxBx4",
  "key7": "3UYdHTKNiAwLLRRG9eik5bi9VLNum9dBWbT2CdDEYFAmgWDVkXTt9PoiWgkM48wXVHB2oZ7WwDBbJVuozTbeyT9S",
  "key8": "5bhTKVps9a8Z6B9r2av6BbhJMaJEQrJAZjrai7kt6qn66LsTergCvn3EgNcc3R5K8DewDYqqQHZs4oAzKBktKjDw",
  "key9": "3Ronma61qWXWcPRGEjZ3f9DC2neGeXzg94dK1DaHMVCsu2FjT2a23Lfudn8Z3zMTSsYUKEkqFoKFVHBxKmvw1Z9E",
  "key10": "ASfxXd471ZBFcUiUwPA6HfQLdjWSpXNPrfsy6qCwgnkJuuZJfpjrCZcNZWumet5HwbiTUuANS83zaL6fxUpd2Fu",
  "key11": "3pJHy6kp9h8ThgV32CsxkDb23Gr7XPSov28jAow2Pv9UmTZyUT3F6CQv4QszQSX6vwbGvV6KZvKqLEPaj9vrEZQV",
  "key12": "5vda7Un3783y2KTw2pmBze9EXxS3jQJ1SPmKCtmAEapDNBRnKRNcr1PQP3v9HEh2wX75AXp4gtWZ9VZz6Nbxeevy",
  "key13": "48W9BZ7Q1osGYoWCDaRF3rbf1gJdvjPj8xnYi2LpssRfp1Su5FjnmDL7A2Pvv7BRLdRLNVyg37kEFWZHTBRAsRQD",
  "key14": "4b8MEmM5aA36WBjEzizZiMW4qMfFKqCrrjT58GdeXNRuSrEE5oF5t5a24UH24bcTZEySe8SuyTBhPsXcUfyywDJe",
  "key15": "3UEzYZ94CT4oe1yCqFaLPCfAiBtkgwArbq9s3ifntVM3FJfAXA7QukKoAS34f9n3sR1Pw3rHSzkuoSGQcQeqtgwn",
  "key16": "4MeYU6HKmVpCLqtRQGhYgoxLahqpmK7PZMg5hADJKXQYEdAcNi6t1ZpFsnYbzBiaMZb3hVVU6KJfYgmRTbSsSahj",
  "key17": "4dcckGH5JRXPcSXdLTGf3yAjSRByLLsXNXn5LKYDmdLyLk2iDDsMrUkEQ142KhE3Ck52jgUCZeGFqr6GsEF38aZv",
  "key18": "vNQc3GiGc2Sap8UHGA2RibKse36vzQeBFfKbtPXyVmM1qgNyU7Vf3JeXgeZD4vSdCuiXPqkzPZqqvDz2qzaE8Na",
  "key19": "3dWdwzji2M4uhDQPYe9zTKtvcMjQLGT9NKqd2M8vk1NzrJfXyyHpcMHt8BDag33NWeQRcANzCSt61q9Cdm2W296t",
  "key20": "4eZ9BsEgdLqnGvBorZHzJs4brwgEyNhEjrUgX8WkPpcsB2f8Na55cjN71YfJT5A3CftZyYuQSaGNTVPj2hCyjvid",
  "key21": "53VuyNYLrvThXMxvBsqdoyHmvVGYzb8JwdXgHVCRDSd2vkP9Dg6LNN38eqzBpKHaxhDrudigAP3tHX4tHAMnTwuT",
  "key22": "42FA642iAc6zJqwVBsGzfgycyqY8KNFBGkjBomr4s9XFf4wXAUuJtTC6F724oYm7HSmJRCxUHfwFLLrTSQNnkJz4",
  "key23": "2zQAT8gzmLTjiQmURUQ85VD89QcvNTQ8PcTREfX8GNBVM8WaQn8PtG1Phkss3EFM2c3ETJFygtQH9oJCHQwQD3X7",
  "key24": "2xSYAm7TFr8JrSpSrUvHQJ8pwsaJattXfWdLj1VXG3jR5JrNkhn1TDgUy1B7PGGMV29acBmqLuEYWbt8Sq8MEy8c",
  "key25": "4LVov4ktirHUuiQ5tfo4MhnsD8vtYp22xThjE2WB6JUUfzHUNmspRFTiAGFDQKnFdGoeL1VGrQ822AJgH3PFAXvz",
  "key26": "4mtn9n2zmJoXDv8hSMDXcrRjFVegXLPrruE9rZKezCCwCpU87wAReLG3W4Dkdc5DSkYmYponMNZvCaNAuwPLRTfm",
  "key27": "37XQ3NT9AJ1NnW5Bc6nbxsnAK53Swzx5TgN2QDzqTp1JGXAS1CCDatqFooGPPrjC2XNC9Yu7B9JUANByyAr6J41P",
  "key28": "PL7FevWiCAqH2cn4Uqju5rMyF5Bpv8XMTk5pzz4JjgXpFqT4hZKZSdcXYTZWHXCMRmtBffyuK3kV2YgHhnk5UUA",
  "key29": "4L2miSo7NqS6ipxrb7Pj9QxNDpZvahh2ydm7uvsXZfX8X5Nw5WDfx4JV24fBHeGjwpr7Tyr6g2ipCPU6AZJnVp4u",
  "key30": "GMJMk4psEwNosxbvyztJv43CUWvDReYMm4tg5gpuAsiJNPz8S2Lu5Eiko1HjQU7kwCm7gG5SiD9XH59JJgcPNhy",
  "key31": "4HYxGGLACNKehYH6FihLmXX71Cjovb6xUMssz7svzVLiuzWHdieo7gqnf6YgyEqWA5WJG9GJt2sVMxrarXys6vDg",
  "key32": "wQrxrLEszZEtHbVwq69QgGuGbkFn2YuPEweF68fbJpBe796SFH1TU8ftKC7u8i2Rtwo5JHCUpJ8s1oCbZRgng74",
  "key33": "5FW1X98LhJzd4wEgjp7KFcW4zusmKqhRAFpQot4Tt6ZJvrm9GwKHZoSFPkEXQiahBbDkpicjPJZjr2jwYSwyfziS",
  "key34": "NnKRaY7uRLorLBuvjMKCjo4unG1BKNe4zDQqyCdEuXAo6GaUrQpSSG6ieTCKuwJU9nkPS7QXBguM995aR5pDTnU",
  "key35": "2tMWEkQE6GW53xWbDKNE1j5h3ZUf6x1TC7HXAK6x3rqC2whubcriLgYtSaxm8x3adzJE7hNSmU4iU4x3kw32hUkM",
  "key36": "3wQHpZogbdHeZA3HnGJt6BvAjj4wMmQ6NLNfG1yayokFw4y8ZNbwF93kJgjUpQqftzCtn4pGfB1Jxn2HT4bLMnGx",
  "key37": "fQMo3yxgrchpEPsnz9Cuk8AP517ifDUQVkV9nCrPxc3z2q6vPbpZSNg4o6euF7Z1TRUGjTH9UCq3FjcACkiZTKx",
  "key38": "4q4aQNNonwAibzuYMaGaFYx8GJyoL9GSs1iWuoekptskfqoPC8zoxCTmtSUwD9Xygtrf6p1W4B4akBWV3jpee6hy",
  "key39": "3FDT8hWg4rUqqU3ssHmvnxAQZdyngywjy9B6NDr9hs7NmpMhYCvb1LZM8ewFDnsxcKNhvqeriwh8phvyLt3ewa4e",
  "key40": "3zQRbdK3sYwk3aFJAcVoBmGbFQpysQhoogCZLBC8j2kddcm9DAsZyfJNvueSjs9MzA19mmPuHekHY2ctdALiaY39",
  "key41": "36f7dihH22185svMYcudstfhWWg3Lzpp56YFT3qrYWd4ia42J7JyrEuD4zsH8BL75XQihfe4RJ8eGS2JxK9xxfoo",
  "key42": "vcH4hUtw2WteFsTSPBKpXgcshnGgWU4gZG3U9guJrxN1EXcTbwT5JvW1QsN1MJX1nfXTsg1bLukC35wtQ9VzsAq",
  "key43": "4DpF9jE6btp5K5RhiaqLnKvvSwE9kMHC6YwWfjHgefrMisnj6wm1CjFtA6iqUeaRFoXm7kFdCix3dc56MQTGjhmE",
  "key44": "4AnRLvGKKDoxAuo96ctt5gJndVKjbLqETh8WbjKpfsk1vMvMAkAq5fhQjsiuuRvsFrkbr2JyqnDhxsnF7GUowNiM",
  "key45": "kNu3smXh5GM1q9h7wPEcEhoYBARVwsSfgA1XptRsnAgSpau1tbNxcftUKo1qYACW9xaMMsmLduPEVFh5FrB9Fkw",
  "key46": "3CgLX7LYN5xxsCQYTicGDXt5QnL4cHuCKD19jYVwxDkzbsvyhe64TMcfnFjnmDpAztoCbQFzss2J1feQua1Mgzuo",
  "key47": "24mQy2NjfzFUpvVAKvnCQwnZ7e6gxrPZopxF4sQCLa7A7zSax7cG4FTZqxo5WhvTccjQf4Vr6Bvv4jwPDwLRnUw9",
  "key48": "2RUN4Q8FYvtBz5DhrsVqUY6LWUbKeeF9Gc67jL4UV38kEtetFrPvmYRdpL3xE58533gJ3bSY7cGA3ktQywFCDq6w"
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
