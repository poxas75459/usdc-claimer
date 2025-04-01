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
    "3s9462ksN525QNUK3Sjr4pQ6MPytQz6XjNdCTZxAHJLiuvahij3WpiTniQimNj8kjsmNuQn6MA16GnfKTWGwmXrg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65o7sHxhHP3Wt1oVEBgvrym6PNV3ddtBp8gAXr4uuSyxho8ehQszsHoU1qk9buXkMo5aM8FzMoi8tzzQe4fKpbA4",
  "key1": "5DoeCxcrRprsjGVEPUnEYBQgro1gPZPa7RD1vZy8adpKrDUpcGKx691ZF7dtvkHxdU19XhjoF4Hv4wB1nXHisAi1",
  "key2": "9bDDJR3Z1M4fVKawVTkQgvf9s8kJPUkPL9QzRkiXSqC9wMCFEe43JYJrryFVi9TUWn5FaD4Q4kmVN4tELQGRsH6",
  "key3": "5dL5LzHWi1AwjLU98VPzWW92rxWnrFgnBedyrsWUsAAiV5NMD6op5axmV4JgbwR2Ha1Fq6p8aUw3bitNTzVJpb4E",
  "key4": "3aAviatMdTnd9L1EjSKkgMM9nhiNuGFzomqMKBt89fTChp7RxrjoK4rsk6CZd9P7n27iFH15hYoG32T7t26uRNKu",
  "key5": "4uAXXMpdUVzQa3YmYFnkGgBEciVtobSCUd7RbRuoBr4LrHyu7bMRDqqKWGgABW5a2NmpV36ffV6Bnsbv65M3zgsu",
  "key6": "3vJDtFooecWjEyTYcKteTqPr4pzu7AJRQN93JDgu6uoEKYjaB5844KiK5QWrcqSVK9pm6nMiiUPThzWFxb2A2FQq",
  "key7": "5jPntWsvXLE9ueXAXZBVF6o6dTJ6T2WHSfu8VQqSMmnZBvAncFkPvWAs8zZnY7v5dVHF99mucSRGm6H2n6CPaAdS",
  "key8": "45rzqMCATyRLuC2TjqMXwDphXeaFTrGf7L5z8ChtCaV1dMFfxL2eeLDjinYMWr79SDcJw5LmxYQCGbgmBHHLRUb2",
  "key9": "9u68vhMMcCfbE9AbyihVmgDAkzzqVKiHAVrzsFW1EbDFkGYL17wgiKguGdyx97uiDQQpwfetRTEBcuhoLDgM1f8",
  "key10": "4WsXttZDYcYdSrJwd1EEj1vc2tyuWmTknNJAUPNfWfpae5TgG8SQy95NB4BJ2HBa6vBS7zAi8raU5dZMhEsSVsSP",
  "key11": "2MBo3VRnWJKuXY6WYzxMKqJxBNcsxnyqrmF16LmGpxXf1ZugHyq8DHw45yUvQQAXosKw85BTSE9ikd154WcR9e3C",
  "key12": "5W3V7Q5Yz4PpVbiP6CF2m8jTd6CPcyS18aQtuuEfahRA8drthoZqTCYcoo1jXAaVv4SghRnW2CxZgm94ifxRSn2V",
  "key13": "3y3HcjR6FxpVnvE6nanDL54bMJDcWMsDVzDLcEpj1EGqfo7EAv3uEUAaJFPxQkTFpj8YHX3dNMkCUTp8fUs8QsEM",
  "key14": "5iuDpuNKaDeGa5NrPyrFDiWwZiJSEw6vsmmPiaxymAYq7TtFBdiwJUyQcUr3itMMtBi5KLEC5SdNhHunzBe18pg2",
  "key15": "2gnpWiKYWzAz4aSnTygMH6CcBJaUrKmrag3HYGtr11aD5XLekrigEyyCMfwqKgLEo7n6DLhEvZGov8kp1TrHJt6X",
  "key16": "4sh2ofShhdvyXvkjgVmFbJhMtziosz3d2Kf8YNFTEaqaMTsPzexXYix9JGq6MJW3TbfVG7KSyu2cFopfeM1ywx3W",
  "key17": "4CLoFTXN4fJ3JAgoTBrNyUDkQ28qZ81DWbvm2T7Wert1uBZi7Kz3tnBiVwS9uvjUEjgKoP8ZzkSGoUoe1faDUx9H",
  "key18": "2wb2C74EymEnEEsiwxYsjP42FgCxSQBzMSf7mHeHcY1xhy86VfoFvmVHqGWw5wjRcGquhtiQTPaVQhthiYHxsDXf",
  "key19": "5AxseF4ZzAitFbyzzhSRoKGYeedq42R3ZanKKhP5gx8SMVuvqC1jNZsTwXeZdhKnahnq3PLeRGcA7MJBXRNrYGzX",
  "key20": "6mRphNkeJrWPXn5cwfbGuPZUSPyASNs1tC1nCgSQXrXcVArWVWp5UzrqQFkpdfLSdtv7zhD4hjQPdbJCd1rgGAu",
  "key21": "61Tx2f5TMbASnUwhdLL7WpyYZx6Uws5XHQ4EE8eQsSA1pU6BHCc3mv4LdG6DpJPA2Stdsiw1K5y8CJg3anGXafN6",
  "key22": "3ujvWka7sTNqpyxKEgHRuUgzfoT5Vp8jUBhrZak4bb39sV9rc6A3MrKYB5bKnnivn2zpFTZBKtVVuDKo22rqs3Y8",
  "key23": "bMjPfd6QJeW3nMW6HbgrDNfytnCgW4fxbizpDMh9RHRtKeYUhLgkPoekKReNqQXEL6YnpCh1qxLmUqjcK2Nuf9c",
  "key24": "573G9KaTuHaKMeercy5oYTqrauFT8VASmLHxikL5hq1518Pxkw8pQkapv7as9jPPDhc8jSpHMRRQ4oZAC5LeAMkd",
  "key25": "35ZWLX7MkaFgyeeZ8MTEBnSdUSWus58u2Tv6yU3Lgd1gp9CnRK1QnKaStwMfoaMcgBKW2PVQ7FtiTJvr1AU6Syxg",
  "key26": "2LTHdZpuDu8w6GUf5oEpTs4w16v2R9sYqR5Cy7GCZ7LvFUgx9gWs8qkoE8GGc2xfen2VemwiafPPmzVB3uQJJ9n2",
  "key27": "67e27riAU14Aw1p95hBz1e6cokVgCBi3w5oirfbbtokJU9Qi8RB2Y1nALnpDiQDCWNXjsMhA83vT1au6fdxdD9ii",
  "key28": "Jo7oQ7Sm3XM6DGk8tLKWJh2ygPX3aDNGYLs3qWHJqfCdtDkCMvSaHofmLzvyunARZ1bN67rd8aikJTbxUzKAWzA",
  "key29": "5FEK2GoBS3ANmA4p7WnVAc1rxwtdUG68zL8nDMTC7CG1c1fZ1dWuHKJbzeXN8qFVp8ZPBVY4BXGanLKoE78UZiMm"
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
