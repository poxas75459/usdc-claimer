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
    "3BwPnV7dkw9VzkyTq6r2UUjfcBoioiR9chhU3y6JUL4gVkErMTsVVm3mfAH4kLiBbDbmLhVsm29vXHPYHYip49ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mxuAjBbwxyUVRqkgQQKoTMFoNYcptP8X6SBk1p3gQ1CjvGjSc37Ww1YBWjtGoy1HcN71KPShTdjxWNT4tqCW9Mc",
  "key1": "579a3qBPfcx1S6WKkv6B9nX47ozJi5REmGmBA8sMfNhEUNsDtJanc8BxNynprEm4rVzSGpswPZ8tSUmZuf3G36RR",
  "key2": "2pu9RvwDGwb5JKXjjrbUxSTp7WGiQizFyZfzqUVNvPpbUQSy3Ah7YMQLZFfDF71crnbMqkwcYTTUAAzTAgAB7aE9",
  "key3": "3xnCKmvVsFudH46zcNwqR5KNK44wu9PrxmcPWKoMY6gebjtxAHvKLQV3SQB5SA1A4krrRZvgZ3Wxiha1zQdFCgx7",
  "key4": "4ssknYbHba8wfbukrZE7CEx7bafVjnaBbQagsT3NbXfCej1StTLxkDhzeknULnAJ181KKuYbptYY7mqanXNiZD33",
  "key5": "5nz3HNpbS4o6eVmasWT1aKxFBL6juhq7divRWsexhmg6j99QDnMcdSRPaaJFmFYq3EspaMiNh2McstTimvekxk9Z",
  "key6": "3YnnYq83AGzURmYV24rPkiauS2cCEj9iqCfVetEdueTA8utptmXHQPFfjXSL8yLLXdGGoSBDDyDEDuPXtZDjgjRR",
  "key7": "254a8ZX2wKBgMFFXZZU9XGdwcp9nHk5ZFKSErtTEbQHsiN4keXCKUbn2tTaFTV7ZUarXGd62sDvefiULQpS3AXZ7",
  "key8": "22AfQaAi9NsRY5tLutFAB7QBwCdEKfTh8LzuCBLTmRERdqfdbh3pgkFRM8varddkQ29GjVuxfrE98QHkXX95uyfV",
  "key9": "2Eftgec2eyxuWiyL9iDbcPTSTYdMQfk5ejLXDderSswh9dsA4CaxYaG18s5Qz6dKGaBKFnArKRuGXnWqTUdBJ7iv",
  "key10": "rNSUgtxG4ysgph4pwo9WcChfugcQG5fYvHx3BtEfAixjA5hgXa1HuxrAyYVARpW3nJxPj4wfGW95gxv2HdkoFRn",
  "key11": "3fkkvKopS29EdiJXWLvoz61YLKtZHdw3gPcg8ZzS7RW4yRbjd4ewrPyBuHemBnh7Y4VMx7MYApcaP6yVqRDp51CY",
  "key12": "5XzAvJv8LEETc8f2Wn8oXxFcTfWogFAXY7Rt4U2MridQiCWsmc33CvuniRRBzHwt8ydLSDh5pJ73k8bPjaANikPr",
  "key13": "3Ca2aiZDwd6PkdX3k8Q4ojiC1KM53F3Fk3pBWWNwXHfAKNBSgxopd5b1DbA7NRpCWBadX72JFon6uRHb5sBe9Qn1",
  "key14": "51UYchjMojSp85RhaPuMp1jHn94UZye9FwpPWNJPy7jnXRa37HZwRgbpLb1c4B25tCMQGMynnc8xLfoTZMY4oK8t",
  "key15": "5YHZroF78ah9DLVLtiJzmH2QTKaPUufAZqbsQWeu8t5miFVbAPRx3qPJ5W5fkn7vpyDo7fPMCBC5HE8AuzKjWekd",
  "key16": "5s1AW3ZvYwSsXFGBCQTp3zawqyCA5mwnxBAkoTGsX7M9VyE9eWcn7tXRx94qqNeVLrhdUBPJbgkqc6uV9vDd7DhS",
  "key17": "2rsuUEZRrHF9yERiyhbfhpXPgLzQb5U9hkiigV72NC5SmaBUsau1ng7mRsxgFV9ziHcskAaiLPdWJimVE5gQonkt",
  "key18": "3mprvwbMrj8ameDsMbbbv9pc29LnRo79JjuFMfSXvcLh6Vog2fSwQdM5WJHUdZj6aGQLNDFJmu28USkQSxQvNee2",
  "key19": "62PaxumZmShkG6LxZNwntqHBM1vzXwxiHVZpquPo4c54uNyj18VX7Xd5uabvoN931hybLLJHMB9WXUd5y8BvoK2F",
  "key20": "5TGPSgCrwfdvJyFYyfyvxdyWuDcyzwnz7bDWvfVXM3KSQxghTu2Bh1u5AYfL7a18uatBZRYwCFcKpe8nmgDvFyfp",
  "key21": "3UGFnqnvARBy1tJoRWVVSQdSTi7goLwxFPg63NsCtJJevq6GxcdooqdBYgCc3AFatnPph6cJAKVhe6zq7N83tnZK",
  "key22": "5NxV39j4hJKPEXN8uCR3Ae9X3hWuTG6U5uinPCD72ToiexerEV1WVfJ29VGbkL6czSsm7cerWUansTgPg4TycUPJ",
  "key23": "45beVdpgxtFEf5qBx3pKFfX8rFGFXbnQS1GHXkeVCPn5K8qi4yrm1uTgeCkJ4imAzTdbiviuFHQt6NQzDNFcGqbN",
  "key24": "3APDYUK3G7bbF2E7fv4vDdxK5UGLmJWYQyftaegkfTpTfdfsUbT3va9hjfviNiM1LtVRwE1tyU9xBFDTXEir5W6V",
  "key25": "UJ3bv4A75DCrPu3zuXmDqfWKLJQRxai1kKSDf6mUy7Mh9poTKnSUwMBzDJrhX5b7g3RnyD7LPW7cpHpQd27SNPj",
  "key26": "3p2XcviFE5ZYtcjmE7sR3NThN14X1a7hXhFCk9T7vbhZ1ZkRASUxyxMr2f6dTkcX116x7R6v9yDbz5WXfMv6pXhk",
  "key27": "2Ah9rbQCwhEdfZhawvu35bZigdgMpRu9aR8fFBdXbmzd2TummaeE4uc8N6JXZUm3Y5xvkTd3j4mbdupUg8GK5S3E",
  "key28": "bZLRP4wJMnzXHuqdqY7VPiEPwB1jNVchideLhVhZz6LuTWrdodkg8Mj9gyGYbATyX6LPuszgJwfQevuofUr8KyJ",
  "key29": "FPXCpP1VfXZMSD1Ych4rzxoncqeT7uQAE8HChhiaZ4wnRQq1mHQqzD2CSGeeCVoXBwC6yLJjau2DDHXoH9TmdoN",
  "key30": "4AnERMWiV1BGGQiLNmzJe4V7AEznWkWUzr26Yf5eLo7jVeBeoGvZNtGdgoWux7CyAbVf55HPrd3ZjNpoU199JnPE",
  "key31": "4EXDuLQM719sAt2i2JYUbEXcmnQm1J8KrMRiehq9YdeZjQB8v513S5MrQ7E4CrJCxLe7mZ8cprVnTBvkKMTLFDwG",
  "key32": "5TaFggxYwzT6uivGdZz9k7QCrmAxVmJ4LeRDvVr9RMPhTQd3aoFzaLsU2guQrdYStJovccNRT43t6qSZfypDfeKt",
  "key33": "5Go44CHFtyJgg2gHNDiLYAE28cdZqXkAsZ9GaA2VM4UuX2T4XtuntVFMQAC73eJXGEsnJM3XwAXg6cSwoWbdubyV"
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
