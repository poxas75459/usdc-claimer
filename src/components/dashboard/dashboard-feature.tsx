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
    "qXoPBcjMbnb45ZUj7QbZBBVVvDAXYh6vKXXd1chicSazatD7iti1Cz4465zE2pX7D8hxXdmVw1Rf8K1gGRDeKef"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PBpM3fkJ8CkAU66kZ8GUoK5Cw8u57TxvqctGv9ZsFsh65BC9hHeLLJkk7zg4sSEXgNphwwE814LsXcrqhZD2T1a",
  "key1": "4qtiBCZbQxogRizwQjZvfjBtw7t68wY6YxJ5nQXcdU4YxDXfxsrgJBo1WQsBgj5ii89YJRHRPja2mcUqFVqDNbns",
  "key2": "2yH5VDV1ppvJNgAsG1sfKFc4QLZd3bcfdVNMKT7pEp1bCeSH3TamR2krLGzweakjaKsKanzdjcjHD6WQURn7kLdJ",
  "key3": "2cCprTawpbmppLCbt3U9vKFj9YDveWMBd1juXMiJocqrSAQ14yfXCS6PdLrpS4NDrXbYMavU2UfsiwbGBefFf3H9",
  "key4": "2MmUDLkN6RcxaQj47JGuCA4WzaVWTnDhwnLbn17V3eKRQQ5DbG7yWf8t7w4qjWSqtHVxZtCtNzMjkX5AyvtMxsB6",
  "key5": "2VfWAdBX6nNVbNf5N8NNGLNdPDWMZ25WH4m864geGJqV7fmgoGtG5PKgfNJRwu9gwaoZLjYo8ro8piTZpT228gDy",
  "key6": "Rt9ZtWbjksaF2vX3owoRXvnN9RUD5Vi11S9cJh9qyPf3BkNM9XkQwup92yXsYriYUA6KkQRiq495RSsCwoxiKHa",
  "key7": "3vWWe2AEPLPKr1RPGeiUr83zNYmHpdjWMR9KiqPocHAcPNtR2pLVLH31CLtsJoXw97UQ6aMDsc5TsHCNbgrSnL9c",
  "key8": "5oqgfW7E7JRX7LjK5PxQDu4abYzfJDT63iahJeThdZPjqB5SDc9Hh9wSqhXf7eqRy51AhtQsPxp6dxhRMYYv5VBZ",
  "key9": "273BdYdjgKqbpKoa9p9W3orwud6cPfFd6Adq1ejrCAyfjNVf15ETywsyej6hMZmvAHA6f3WDCejMy42wTdhZcVzp",
  "key10": "449mLESZAohW7PG7fMwvqQszjfnrF1uraqW4nnhKJBGWEzWGj5nGfkLccbVv185xwxwCBcdfBuVAszNkfQpTCcHB",
  "key11": "3NmU26X4sQftH4hoQXqgjG3e8PV5bWiXzCbB67HQPfwZF3Kxto4nkbZ6JuRg5FgnC9BkhhWkG43ATis474HbxjqV",
  "key12": "2WaPtC5g9rJzbW1P7QEaVVYQEuNRgGFjG7FZq3wY3m6SnXZiTR4uNCsRX2LDoaUY7cKbepAmtHkweKxd975oHvDP",
  "key13": "2JgMvnP2HhUuhCPDxm6SbCF5v7UzyHLkkKNycFTJQpXJTXBnqAfLCg95rsXngaz4Bwu92Xj52FkTt4DMKJAu5jBh",
  "key14": "5bJRqUJuVYGGQSq2Gje7wXhDUNYgqJXcNLLebSwCBSvyYwjnNbjRU92SHd74KKwTo9uvSkPs4PXjxsmSf5xu3imm",
  "key15": "3QVwqBLgDm2dhWxcVB82FeNEaWu4Go2UpBDssUq7G9FPK2cUuamZfjgN99YShrBKsGgefSS18GoQSiwp5JmLbt6C",
  "key16": "hQwyCmgLG7gL4uVHaTAk6HP4cyPnHRpRA4DxhszNyKhHSiYXZVnYanAwve8gTTLWWyAfVLyxDriKNwP9X3SdZGa",
  "key17": "27x4ZQocs2a4Dz4yEkpJoQv53i829oq2dAxx3JMTLQPt3zD4hWKX95MGqu59EAicQq3UozWKLzpkdYyE43L6JVE2",
  "key18": "3XVzZqDb5vroC5sb9ASRCYxtSEyHwP611eJznaMNqAVCwrktKeEnHPRyZTsSbtDb4Sojybiib92b7tRwJMeERURr",
  "key19": "23bdKS4ZTxKNc3LT9xMTo5sxtkCVFM84yQXQmXkMHvXwMquo63WPhdpunwbfg48JyRS6Aedu1bYj3fDHWrSEFWZW",
  "key20": "26fEB4W7NZrZ3XiHVhDBz63KhBFPDe5QU5Jyg2Fmn8q5iPPeTzNXTYYEGxVLCyGyXNeR2xPVKoL2Atk6pghEyyjf",
  "key21": "66qz9WHHTE92tdk3pDG7BjJsJoF6sMdudrNwWhj7xd5TiC2KJSUZ82XZNeBh8uTDGsFgh15wW2Ae7BMNkiD7Py9S",
  "key22": "apb5bNe9eqR2XW1BWQ7Q3zni9zxKDE52U3dnRtRQfnjQpsZgFQbubwz6ZFw71JEVdthV6ngmYLBXhSHWZwwR9oW",
  "key23": "2ZB6FR7z3a1GkJkGcwtVPk32qVCUpxQdXyfEsfsAAzWEJMKj2r7pyD2FCtgvacxPcjsjir4YRUNRdALnnQxJFW3e",
  "key24": "29w98y8C6QmMAzpFSZjR8s2PVMvCPKwJsaSSPKaTvgae9JHUSEbSghM59QGm8i57BHThB9vgVgqgsfTwJxDgUtPW",
  "key25": "3niEbLoNFQr1LnFYR35joHqLa8LeoyZBiJXf72uZFbjqw6gyfRNnTCcwne9LCpNHVkyUpcUSNhgMGCckFfRT2MYX",
  "key26": "LcW4PqTKQ6EWhvfQjncv7wH5oDNYoRkw8gA2GC2vEqvxmb93ZQWhY7mYfAvtNxTz4szgavnHvrDewNAHng9SZKw",
  "key27": "DenDXonxpRF81P3Tgz4vyyzTsV9Ca7P5nEvWK6Upbt3kMwFobbxGnsxmgVjbhccuDPYBoeveuTuYU2KPSyiWs4T",
  "key28": "4y4zHAaYELnW7a4grknoUfb39goYaA7TkD3kkAraRcUKERAV7Au9Kz6VpiZTs3gXNaQqbnYcJ5UcoHcNgJgby7n3"
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
