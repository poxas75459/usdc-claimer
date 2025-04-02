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
    "5S4kXHq4hqLnEMtQhPxCtPT9RKoUumaLxLLHeLG2sFCY6weg2DCS3tYv7NEKfmfrBh4grA8xXX3oAyrYKpsnNvhJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "428VjGaKd7P1ZKBmJUtKQ29VAVATNeJ41DpSawzZ7JLyuZUkxoqzXrxnCafNAKzXMiXghLSunxbCmMcJMxcvqoXc",
  "key1": "5vfwLCTFHCzgvxgJpTvUqSK29V7YT5uLdwD6SWWqEyJiKd4gcqYrUq1SC3XiqFeBVW7p7W8MZjTiFVwchTLrYKqc",
  "key2": "3jsKGRrykgm9HUeeWrwJsWo8Te2FQutVB5dm9LNsYVXcDFyJg2TSSHVJSRCrFcVV1dP7JZcvNUjQ11oYrP4JJSpT",
  "key3": "TaY6UZYNR8Mvpzx4K3GZRiHJPSm7Vb3apXsEJ7JAPkoAy65B7UkQ3ivnPZLP8qcE5xzzZbdkVqnjNFWSQDA9EKT",
  "key4": "4EbrKbTY6ofzU7FPdSKeNLtvS2edi83wkkaVtVw6FEzcw4zscStc7yyfz7CboTPENKN9bxy1DdqDANdCfPdLYNiR",
  "key5": "2MkVtH5U7Z8vvnFUrVpkQgNu7iKtRf6hR77ynrZhH2TiuK6eW6BTAg1H1TkVq87Gt2ZdT1AfZuP5t78kKrzhPAuQ",
  "key6": "QzgV9bnoQLMiK6hghPbqfzKWVWuPpPtEHjt44eAmLaUfyUhzzFT8Pfnug91cJvxdQYHqBzDLi2UFBeU7159xUYR",
  "key7": "5VJ85b8PpCyhm6cYcDBJRCAzZTsuNwj8ZLXMUKRttniTgvyBf3CTSYAtiqrtX238EdgUTJRrURAT2aecGJ3V33Gz",
  "key8": "3tqeKm66zZc9CKyfKi81DkjofvfUQyJ1ddsqVrTLnccA1G3P6ThVhZB5gM5GuFrYzk7yziyLepupuDfG8GQR6Uxb",
  "key9": "4pGyTEjhm6fzGTo45FQnZiE1d3Ye9LUZHuGnHfqG3tyKNMTv6jH77UyjkkfWhaCtV8RVFXLEd9GGGmVmS15wJ8KG",
  "key10": "5bEzs3JSCggfmkZEDmnmc6LbFK5nu3XiippdmSeUrHrZrpYhxcevcYi1zP5eLWe1HdpdKFQS6EPTSH9t9J71L719",
  "key11": "3i9EHqnQggXbr2xngzTejtKrR81LXviUYg4evJP2wk6sppTWvEYrS6DnFC1zmXZubSK5xnS83hAYRYbP54Us6nQF",
  "key12": "R4D9hQX7AXvfmhHFuT9L8w9JbuAwHRpTVw8NzcHAZ35japZooPXn7gv3XsSceD9PFJNsPzCd4UZQfUUJ2Sjc5bC",
  "key13": "4wCtbBG1PsiMPVVmR4WP9gS3TBwfeAj1JUPoPSVPCPhhsbg7TawBrtZtFbGewZpH3JodZM6AHdX5HZ8csabmDaS2",
  "key14": "2oTrydt69gyP7rueTuSmFm35heMPevh4nmmKLFp1cjQe9UtCZqWbCZQYTQ77ofuHD8nt4zZcHpcVAKaSyyhWwqtc",
  "key15": "428JBq48txp6dGrDjRaBoGLLahgR6iutzwyGspxUzpHqzJURpPcTshBXetFtnMTGfnfiNvNmXNMzDEBY1xbZyvu2",
  "key16": "4QAUuawKj4LknV6LGZ41zuwF8v9eY3zini46xJKHKvZMLMzFa276NqnFmZuLbtx7KoLQjh1c5xRdizJDe68EAdtx",
  "key17": "669mQ9pTjRkHvGtAkqbQRrtdKjC7Hz9xHSESm3iLeA3mPF8qavsMh7n9nJziKTYx1JqGpfj1tM4TZLLnwXCoQPUd",
  "key18": "3zMJdiA2FfdFkWDaPadzGoL4XUVmR4WqpBSMEcqRSffxcXuroqB2zEQGXRqLxxV94Etyu6zCSXzQGxD9KdnEGT5s",
  "key19": "2qXFUSsTv9SdK3sRdTiq3AHhn9AGWUE3k2hSr5qdZecpC1MjBYGnMBJAoRoeTrcTaXCn64RLWeGKWkxwwfSWvSNi",
  "key20": "4DrySYN67XNCZSQisieG55B6JBreQ41hXQnxcmmwg16YXxeSbfFUUWbkBX51mq9w7YjpXHJ1TsspoLRdyLjEYjaL",
  "key21": "7HcUbiCi2frsaRPFPcg1YNXSRe2V8jf8vUf39tMVwLAxLaX2jw4icQBoYryhfHkRMNLVTPXuCvpzf5bK48wnG1z",
  "key22": "3QrmjdHPpwPfWtimDZNJJyqbi7TDbFSwiwba3j2xs1znrWoFpPvyvHsB47TayQKHvj67kstmZdHY2c2zC6pKTWxf",
  "key23": "3P32TQFVbMzWZHrLFq8FKMb21i87RbThkxjkGSbrUX4fkPRriGtdM8B3BHEB17MoBDjUcEA2xYdKfGxoNpRD5cqE",
  "key24": "59vrTfh2JS8ygG8nYBsT593Y8eJwfZFE39vKF6N54rG5kbgyCjUsQTYxHLf2Lv4ftgD4BBmasvAoGhmMGDrusPDw",
  "key25": "FRbt65TkLpgNb5RUxjQKpCdWgyGdzawhtZbKJNNBojd8tVeVAqP5fNBj3EnStywoYM7WD2jvkR7opBV9JcVw1Ha",
  "key26": "5Tj4oyvo48rUAo7mToGQiBPVd3faZVm2BV57PiKFQeTUMDy99bAf5oDVRMgFx6gA6xhWtqK5eBo9ep1gV5uLhqjM",
  "key27": "2JGGxoSgSZuma91nEPycGhz7Ktbzvbe7G5C6jyu1tqU8NXWn9rn2WdM5b869MjVpR1s5dVrNVNLFibf61dpGqdfY",
  "key28": "4n5LZc5x7BojHD7jr94Y6LUNHjdrZaFRQwpuZoVZV3yog4EmH6bFJFdfonKac58cGJ1s1zXAKdFGPXvPHqGaBZ9G",
  "key29": "3K8pb3WH56q8enjMYcb5PTh2n9HyRUYhswNe2w5yK73wNVALMfNfqVg7jv77SNCaqat3UzpnrBjwzwqSiW8b3tws",
  "key30": "4Sx8PuV5PWw3JfvwkFgCdFD6FNJF9Y6hrZ7vyv1BNBqm9wgG4PGXhBPXZ945tvPJt9whkHuhVSq1MiRq84kSQK2N",
  "key31": "5uqyckksZUo5yKEawChFu6yGjCQF3PeWt6ke1ivXH6qUf58b3wLVGrF1zx8Sw2ZDAtf1pt62Nt9xNxfnx753zjGb",
  "key32": "5mgTHAZmbv7SEKKYBBUjuPfZcfQtifE13dNtaZ79u7VL1e6K8DVKGLeZUqqjTB2veHxTi5nWydS8jMyQzaM8qPzj",
  "key33": "4p3G3z1dJSboWhwAct1gRDtjK1XjTRkLGW6ivny9i6rBJM6CYAMCYAahXo9w3rsnhZtuPNdffAf3vb2XmFPcRKMk",
  "key34": "2G4kpcwGFQq4gW1KY5kqz4fom1pPMVrM6Zmy7jPExDThaXxQLXmrLwaFq2dFurzZRqatc8CHyL1nJ9uszxr1R9RS",
  "key35": "54TKFwXKNBbBSevXxqXxG28Zu1aj2YF95t5wLSHvhtAcJeBhNGU88eK3UY1mg1jidyoojzNsnX8naqUYunfhWSwG",
  "key36": "5ibG6UxZm1QuqF6pSySYD6cJMhaSPdEEhXdo8yoUSNG6tPzk7sk4D5UentHG6LJAGwZMLaJ52RMuCRuY67iEtwj3",
  "key37": "29qZQCvm3fkqGTnzHzDVKRnnWSSksfeCu7xn1VzP9YtncfbwxwYmmdmLqwaFggBPHVTAJhrv3WgYWD3USAzaZVR4",
  "key38": "ayesysbmCSQAo3iYNt3NHCuzS2A1BGrcYZA4wdzRtcJKdcJ6pc4W176B6n2nqk5c72RDUiS5q9s6GteL7AdxdU7",
  "key39": "67pph7T4vLEEnFxyhpSdxhakqFie2PRtTvW2Ue2cx85w4sBnisjKbnzKg1qdAUFr1Pp4cJYN7Q5TgAjPhiXpaTL2",
  "key40": "5EsTL32PQV8oCT4qArNSt7Anh9aLVpTK56jWsktFviETFpSHaAYvqBdsyLQ9M8TmTc9yUmsGi7qbebfoAKbGfR2",
  "key41": "aV5wmWmFwS2D5Uqg6JWCk746wRauvoif9j8Wd7EA6vMwGR8GzaSgLjo7wx3j7XxRjuydyV2ZHvDGbFSTdoG4D3y",
  "key42": "5MAkz5d7xY3YuZTEG4dQmbYYnrrKuhNryjermRCZ6uEsBci7Z3NiKF97nqvAkXBYxjBVu4s3xP5qgJm593hHpgf4",
  "key43": "31wqMrVpZ95Azc4yuQmkBVgdszvWrEdHSbPnTbWhkNmf2QRD7VTgKCbzwnF52CRZDmdB6zArsVYcCdckwHL9iCu9",
  "key44": "4W6RPRNMJDif18th5uorjCHwv2yyiyjY8hY4RtNXzXNDdusFiCEmoU2nDATsLi8zfpPAMKheJbpvwrC4hLEnTZwe",
  "key45": "34Yd8PZBvfJeMWVXe1iZTayxpahd6kjWi5oCKgZxPtRQu2G5LfyxGPqPYiMK6Ldw6cithfXQrP8ik616h19RZ8UF",
  "key46": "4WQdeT3nBS9Mot3JssMj1EUVPtQUMmDaYAST7J4FUvk4btQyeULQgbn1RaPQ7RZLjpAQ7MkJnzHMpgodijM1A4MW",
  "key47": "5LtPq1FegmkwgoBjj2P9vRDJwpWNxStt6mdYtqHp87zYw7NGcySX5PpPZfHHhHaX6WXDpigPYxSP1X6fGLXPnWXx"
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
