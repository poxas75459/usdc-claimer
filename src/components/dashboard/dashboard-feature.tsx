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
    "3eZvki4Fjd5S1Pd7NUME8Q2w6qHkTTdi7Cv1dHvJmvkusoX5YHGJ8DGWicqRZg7Cit3L3X1Mex8wcmCyWimRozDr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ECbJV8jnWpR7dXxziVriSsPUHjUAxSbnFBaAmdWa6a75qiBnnBDFjs4HGRYLkTj3miYidyJPD1GE31gyAwUFrVu",
  "key1": "4ZATEYvYkPfx8picC2vL37ksVK6H8Y5zF8KRWM2Y6ppGHVpJ1peEGcnCkNBmwLBR8wpFDq8XVKN61VcJQTra77JJ",
  "key2": "5jGLMnhoT5iUhonT3nM4pAhs6KBjniNAQzGWFTKCzEvHvH34dPjSrb7JG5oBFVygKN7pH9tkm46c8kHG5iN9AmUS",
  "key3": "5c26G4i9Phm8MPXo1YzYyASXa4XaWdi2xw7yTj4fW9jf3XThQTw6uX2RCrR6DjZ86P7vrsVJ3wtM9b11NV7xwB3A",
  "key4": "4kSnrfTScn3h4QpeMTXyYzb6pXugLuiWAdmfCTkGJWJjMT4Ky2W3xYnqEUNMmQixVmGUPnx2i7yXaS1okLfTb2nw",
  "key5": "5YNbM5DFkmzgudZauB4Nc583aMLpSBeCVbKJ5p5mvG6GrpMhpXgQBFe93X53sHumLC2gsFF9wbntzQoQsXLoLa6v",
  "key6": "4jUfhsxV6YqqGRejBwKn6YRmksKMASh63SNGuG4UMPDYPXiBRaDMgswuvA29bHKDu5Sa6FxbeZTZbyDSEBARXyFY",
  "key7": "qPS7KYh6TJKDfR6ze3PLbjrcw7dkRCT46aTQ6gXDbwEBMbHC96J14oPFsyvLreBhVr6TqZnD32QdAiFNeojX54C",
  "key8": "2UsM6LNYApxf4Z4LgZzqsFmhpRBf1uNGiTUjdYXe3VH7zmRM1EQ7zQ6VffiDQeWhHNJoe9RagvTXJJ6BPdumJTGW",
  "key9": "2Hxcz5hBoprYcEWQGrBD1g3j7dTv2ZMyuADZ5TSoVBP8tLd14T8LqKH2j88V6ES699HzDEXUmcwv8dkjSWTKHwNY",
  "key10": "2nuZSn3DHgX2P9pY4S6T6R4C4hUiGYS7gmsFjSuNHF2VD8EwHJSSJpN4nNQE8R4U9BvBmjL8LxqSG9Lrq1wbR395",
  "key11": "4aK97bX6P94vdGsg7GTbYHh2FpGbWeN3JtGdpT168RwVCY1ZDTnpgAGX2uZuRtJ3ndr4Wy9gjc3tt8HTVbZnJKxB",
  "key12": "2vqganMaZQHZfUYR4czTqbApaG9qBc9AVe36ZtcmQARPydpYchckLsbpq2X9LugkgJdhj6gzDTwa357JDA2EFv47",
  "key13": "3krmWWebnNxHKnDZbGjZyUAN7A59fbqdEEbvMu8cq6JobmpHbncwLY2Lb4f6YtGDAkWYgX2vZ4p3xF58C9uKyzTf",
  "key14": "4F3Usv6crMAt7JyN6hu3Tk6fBgjNMtM5T7jHmDNM2RuVv6kHLJW8bqXgSgwy2qRi2eK8GcpBRWDBx7enr8ZVwg4A",
  "key15": "35DheEJu5EJsXKH3k73LWKoooBARcUeDx4KJrxQA5cABPc3bLxHvdrceoYUkbJeDALtuddAbpsUsBPVDxYYtY3Wg",
  "key16": "3HB5zX5NMjHSEgsNJXZeAYubxFtVVqL7rnAHbDzt7yiEEMZVZ58eaTH3ckTtgxFVKaWxLqJZRb2mmbhq1gUY6GJy",
  "key17": "5SwutaNmp6kn6na42zDQzt7VUbt31pZWV2FUwVz91NXFcbCvQkgBjEBH998knUvVztBM9KCiCTrtZDwfBY6faqup",
  "key18": "55udSyWuz2UgRKCvCKzUEvmcmHLDzx8uM8ocFyFmUytLkVAa71KEhSAuoYkoGRpmQ9kbAHQvXLZ8KRuY8XWGpwyE",
  "key19": "5h5eTp4TzJoWnkC4oWTHpPg2Ztxzk3Crx8wVMV3yMBQRFUWWR2zhkvrZMarjGHFtbRvXrj7mR4Ezzda1vD9JsGFu",
  "key20": "1wtWi2FQ3Esi2PRQXgJFFgrKoa8mtkfpchxYc5eo7b3dSAYk3bbFemQAVpax9H4DuDvFmm38n5549ceMgpMThwt",
  "key21": "5CjGLoLecmWnUd1TUZTutiNLBTiToAU4ZxwQ6CjdLtSNuWusmGCq2Y39sAh8huT8aqQhNoMktxCPNEHCgRLXcfRJ",
  "key22": "45YEGRfh9Q98c8LqowZfANNqgYVgpsNqG8vHrK98L2KqdWsmot6DCB185mDbTWejRwHqQp8TcNvJpj1kSKNUXF3j",
  "key23": "bKbuxQHsZNxkkdZLdHbLsQAZpF4rSahJFe4FGNj6BVy72sxpLCpedmEm8HSkmFMSVvx4faVnUHZgBFkQV3dQ3ms",
  "key24": "jb8vKcHUsG4MAUn7N1suvXTigBRWYAzsihqppaWLNDcfub2rV6EvqPRDgVEMiQ8noW9hvC3SuybnfFp5qBwt77s",
  "key25": "RM1b7SP6FHJwX7RGzbxyCLpwtdmKY5UfTh68GStksSSY5d4A4wtnmDt6a3Z4iXWDTnbXAYuUNSLECgB7QPE9Dng",
  "key26": "5v7sy2spcPJy9YmXEJArwXVD5pJXeLEsi8G3vb64GcJvGtDLzjBGrhaaeW7fZx6gCWJCk8gVP46ZH2TessDEsvfS",
  "key27": "5ExrbBoXjZxqzJfxF2wHg9HE1VMbT9bjkMnUD4ZkyhTmvtorc3cq9xQXwJ3Ha3nNmEKS81ozZrdyQDCMZHYqc4VZ",
  "key28": "5gyS2dSb3w7AnWxwPDjczAKMy4VQ5C57JYaXZ8ibAxaRr3CtJv5nTA1NgK2x4AQRaNtsbdUm7Q3UYx9LRrHXzyYv",
  "key29": "4fuFz9bL8dP9VBo9L4Qxmm5s2nZWVyNTzaXrkBqY7A2timb5vGLNFdiMJozc2TGtQoPmLTjLtHtQ3PpZfUCSv76w",
  "key30": "HSMrQ7wLNeXiYj3YKKxpkHJbiQrMw8jyDSeHaTA8MWgCZUpyW3UiVekUSNfVAcsbQFZo6hUG48TDy1F1NaD3rgs",
  "key31": "5JJYG7QoKuyYNypAX5pipdfpKnAv9bnV1DhAgoJjL3VcvSrS948A6MRta4wF1Vzmm1Qy5xnT41JPjXun6yDn3Vec",
  "key32": "2Kx63tuW3pGEYW8JTveWUsMwCHS69Xt9kNAWUkUF46rNDujEqAbgSHfZGb8FPJqZX8SxhNzHd31WFkSJG8ZMc8Rp",
  "key33": "2fnuhXgGiNccpYB9S7HMLhxf3DSsoVtQKNib4q6xyFXSNz2Es4UTzghaf6gRfjTNTb7AVJqcn16tLjvpRxLvZ2SY",
  "key34": "4RuRjWzuhD27SrbzdjFagixE8GFRiqkabj6k1jx9fN7xpiuka1JW6hgTCwEb4GAXibHZC868bT5KJgutEPkNHHRD",
  "key35": "5Wje8EUKQ9W14agLpzqfE2Z5FKPcoKpBK8ioSD7KZ13iCaaxR9Xd8f1GczwRsKtJCsM3dhbhrssVCFaMRAtwqYjD",
  "key36": "273kYiVVRxqaTN2wLJmMKr5XGNHRg5Jhsri8erm14obeDjW1SoY3vb25gecjbXTzGpW6RymrxdxrShf5RxdagDJE",
  "key37": "272pE53UrarRydP7DPFviaLSLxr6JiCGpTMAZHKFhrWG9WkqhCGu8kKq9HCZLmYSYKLDpNbnbyNggoPLQPDCbdQF",
  "key38": "5PwQt3xbnpc3g8J6MqYJkpRhEWPm3pJFXN6SJQ6sEngnJRuchc3WeHSdxaDkhjV3Q1sYvatbgvgNzR9fpZNXhVP1",
  "key39": "4g5tqyfnJjZE26RcVd5X7y4HqCs2m2Wunwcfm68qTCTdo8Rsr8AyqWnAR31RmzFp63b2n8tcAct5nLLGi4ETwMBF",
  "key40": "MqX2Tg3evV9UfJxTJqze5CAi26vXDZQL6eM2d8Q2DGhxgHX1hnzSo6p4vMv6osCUqjEMSsu28TjtzForWAPRhA6"
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
