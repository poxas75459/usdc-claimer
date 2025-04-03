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
    "3etFRQ1SjF6q8Y5JbUZgxUosP9tVywy9AwJs2VkZz6uzKrFxacxXeYrwX32n5ahuyZieuFXDSX1XWkBKDqwSqDjF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MRxHJeQU6WRk8Bd9uNecQXnFbNPcQcXjtgiSpRvgHoeLqW9Dh2vZKg5qAzdgRBu31Vds8Wp5k8YAhWDsRLFLk5w",
  "key1": "4xo55pnrbBQvqSb4rjr3HHEwqvbQK8PEfSPk8muJZEdomGoJDhD8dJGqRQXgpCbjpkXVoXwLYf5qzQrAR4iJQfFt",
  "key2": "3NysLQpUCUjcPPP3i1gxvnUjS7v28VvPwdRE3SGuqRWaoqTPf254yWzxp6yhcsLjvXwyGUi58rzoa4xBdf1AgiEp",
  "key3": "3kiMs4SEzUSoWdndvFJfsSX5Ef9rKeBrfmJQm7pN9KLjbANZtKQ1EEnD49e4hZxGRiWAyeXtpfzdFBomZ3G6zGzs",
  "key4": "3pNrnhKWDeK3Gcc1Mt7rBWkgRnpqSuTQZ5SHwK6sEk1A7HjAkcYvfCSGX37mviEGstutp8kKfDuEbVkQgy9eczjs",
  "key5": "w7Ldfu6Cv6udWi8fp51saHJYe4m6pzzcvmrCfCdYrz1VUc9pHqBJsPiX2WcVE7JiKwQMh2UTmSr3jfFKWUnqaiM",
  "key6": "piyHdkxCVGX9GPFz1j7cH6kzcxyoCb9Vfs8ZeEW4Bz2YD3FttuDbpFmNH8K1YnzJvZtJPSFChSKLgZzMNjJpcN1",
  "key7": "411eDDoLaYdj79hsSjZXd24tmKWPUGS7XU9HhpcUPexoGoxUPB2ZMAMVhe1wZeqaTmf954gwpbKQqWXJYb7YAxzA",
  "key8": "3YMy9SvAguP5fFPDR7RrHMXRjs9betFCvmpXCMfGZRyg7ANc9LRdbkfFWgwjcQBRPL8PitG6Y4MoNEvJqXd8qtiY",
  "key9": "5CnK7ihT9MFnj8nMWVP9CXc8LdFEUy9Bjz4M8rC8MvhaS4rdCMthdFrxtrmjsEkgRHUkiEginDZgp9r6y6F7fW2D",
  "key10": "2SGMZuAKEpYg4wtVFjUDRyEczRNR5nUcZBtH3eyqi2VGGmNUMivqGgdBtuBNrNivFBDYbfgkMRrBB694BgcJacnW",
  "key11": "5iEaXWMbAZXpwLir2he8uptwGjeGuFq2DKawnzq6BX9ycFfYJB4F4RTVW4o8Hzmtq159uZNZpgq57bGL2ebZ1xBa",
  "key12": "3grWc7ecqN6CSJeJx4tLEs3KzgVLZj5twgGJQorSxmFvG5bNouTcgxtXDsUbuxFNMmZPRSpvdxo9P4jTFzqcHFyh",
  "key13": "3Afr2fcqe5ZFhz5tskctbJdGwojHhdKXofHJKcbUuHqDfJzgimZxxertRhuASx1TogLwyQaAkXSBmNV8VqNqeijH",
  "key14": "3tEiFg1kSi2wsf6BVfw3i1QKy8DdwgSQhbhQpesMQpHX3CPV9NRxTG51fbiLWN3fcqdCLtD4B3UWNrguGjRdj28y",
  "key15": "4uAQvh7GWwjFMA9jkmKdqhF8bN9b66RjtbBiWEWLhZ1LDG7TkCu9aYUCxtwr9SnW6sM1R6b8z7qzBvdg8TKkW7TX",
  "key16": "3uksNJaFMthrKbERJ1xCAaxvS8cY2ERX9BAqTyWYU5NwZiQm6oqUt31ShrMYyeMDMKTH6SJjsQjKioKAdJT4SWGm",
  "key17": "53Yiiu8Wq3prDRBPQEWEnHbRfP8YYZgzDdbrefgQGF8sNs5gN3GorkTghg2g31FmBhFG3oYPrUtRPDzudPDjUA5L",
  "key18": "3accUaWmWoC5EWKFpKqQ1bjkhkzhjjf9UpbsBMXvBBVcAzJZFg6TdQaWR3dHnkiSNnnjT8YjznsXC34CKqf39T67",
  "key19": "22ZVhC9bKgLSkzXL3hkved4P85igs24TRorcsaqMKTSodurojRFipvkWtTQciZto4FaqCP2dpXUGDzmogvKzerHA",
  "key20": "2LtCbffRGWuu72xDhHraURzdRFenzHkxBK3Dw1AnNDRHoXTNVfjYSb4XbK3ATAh6WVB7Y32tw8gRnN6MMJn4dN6t",
  "key21": "2Y3i25VeygqTMQ4D5Zv8yzZywXKmhCwuYbUwCRgWk5iC6AhfRRPZKnjRN9GrR7HNoxfbPgbkiR2FFoJjobMTx2Ue",
  "key22": "3nqiSttVYb2H8cAX5Pdckkb11Hgeae6nJiBZHKmZyGsK3d2YxdPbPZSZZ7RkuHP3NiYEAGJHAfuAm3hEW5x8TPRE",
  "key23": "2aUtyrNHBq6ECitXxQUNGbvkzgPkHVdVsBW4gSkZ1vf5DQLwNC3RRDAtQXmyKBzFWpVxht3Xy4BQoynsd66vjxK7",
  "key24": "X6qwarkpYiCQDQiKNAiAom3Mkuyf6MzDkJbMaHLitV22Jw1sxVnwwU3mQymdJwoduMJhKHHd8SoKhyHPgw6EoND",
  "key25": "2nsxcpvCXQcHojZqpowvqwoHDryPhWhkDYNJhufD2An8KdMhJpBbX76CuowMXajKSCZwN36hyoET5eBfsuxg12xE",
  "key26": "Q47uaPCu9UNxWaTNKXeHtNtqnUh4saJkcrH1bkF4rY3bZe4jCZtvhrbnXyxroYAMRpkVpSKUqh74rHt2vXGevpu",
  "key27": "Q1k8jkdvAQWihtU7kaMnu7ek6hTXd83SyDSUSDqF2Hy4daWCR7uMFfMg7pYyibCmsPVhdxDsW1PUN9neL8JwmVY",
  "key28": "e3Rj48MDzYhEfHQuY3bHmPmTcg3ySRVnGQ5j5nTTr3ygvdrwPUZ2K7jXSUsPb8oDZoKsGYiBnW2rLaqaZXrzyvy",
  "key29": "3A2zcaUD5e3huK1iMiw2SWTkGLA9Bs3Juca4STsqKshJp4okjk78FeYukiefYrtboEmZ8GbVdkDsmZcu4qCTRtZF",
  "key30": "sjkkKw6jdozL6A7GXEqyjAggHY7T26w8g6HRJfS8b6iofHmHntQSGeGZsZ8EencKiPh6xuPyNE8NTgsS7kZx9y3"
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
