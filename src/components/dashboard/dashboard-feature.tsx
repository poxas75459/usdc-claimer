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
    "HXGHxfxfSCkkUA6FFskhJY94nh6JeZcJ9bDdWaS8MkMrnvHtRQoYvHHbkbJay4muTYWsAGDV3PfatDNDxSfM61J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BebWQsXroEsYXVgGsMyQsrQxJpdXSZhxwvehQ2Mh4Haza1AuvBFcJnAbj6yuKPJquafufijtTUWpX7y15Eizg8T",
  "key1": "661S1BpYG3UWHapeVPzAF9bQv6QrQUW7YLdEuH5LA3WaDM3PMWYycmGSUe8k32vXPT6q2cTrcTjNn5TjDQekoM4x",
  "key2": "4sDDP9TcPkKR6ctNVcKVoSkN9pcNXrVq6qo8DyF7q1iibUboVFVbeN5UnBK7jxCF9ZYw7Vy3SKNUgW46d8Skv264",
  "key3": "2QKybKkTdTpKBSMNYokEguiVz6MytDxDZxUcaKgmhVTebN7etRM8rqkckL9RzEvhepLFJKXjDKYG31tv2irTs9w9",
  "key4": "3Rby9Uvi1DGYfKbaUzUMVwRtDfyoKLZQBdXk1cAPv7CBCbzVtGscHERqrhH3Vkej1GarHngyX5jjgHsPdDjZbTJF",
  "key5": "22qHPzpoDF8uanxnr4s34Y7EjyvN1Vv1RVQQvKhpqZmmP55JB5BEdSHVnov1j1MEBJnRVf3tBsZBy4iehrU4gdUo",
  "key6": "47fkCPbrC2RjyLY1wjP7jTWnW9HaFiq5z5AKYXCvo1siXqin2gmn2BYPwQphfCUhGLwPxVEZdjTGBJC3tbEMhRzM",
  "key7": "5qZrEJgtEfUeBJBnpzvCxcUzkW2hJ5KPiTAiqg4gg3NVQ247bxU6weWrFiYdJR8bJZywAYY5SL1T7TFy5DzaYE8K",
  "key8": "4zNp4iidEE5iq7TE279tYod126efupnDAG3Y6c2s4R2dTKQEZLthT2AHN2wXzHRtBEbHHjywCLDJQ3Nj7NCgZZnH",
  "key9": "4857QyRUjSpd9DpnQHNFoB41RirPeCyBgrE4mX3FNEaJGLGCdEM9YdMkx1vvcAWB8dBC4w1ooW3u24Gk8tFxFVfk",
  "key10": "5uX131stcNtdx5PhHEtwcMWpC1T9L9ZMxRiHY7ZHFhqwnHXkEvJArZQJbGeU5KzNFqKtCCPMM1vFrCurZsDnS2fC",
  "key11": "32uHFSsFsDzrAtCXVpsRG3ZLDeXZEwPixmTL43URPYjn5J8D7bFxnXzHaMrGwf7mB59iDj61M3LWhZ8E7m68qLHq",
  "key12": "5Ka9Au1Yx7BhXq9bARivjKpATDcw3aTPe2bbyKht69GfozoW4qH9Wv76zqcTSxrwoAnfzD7r2jCkL8XqfZ7rHTBd",
  "key13": "TVAHK2hwqLWoPWBfndzSvTXfZU6DFN4WWrqAFhG3a28mXQJiT3mdiwfFEfHi7j4QQajYgjpo4G4e3RBMvfqa2fn",
  "key14": "HM3P4k72Dpop9MFjUcYXKiaRBgotSU7tFN6wC4zhhJwXbbGfYGbvi28oY26Bc83bgr9ww12xzyQGtea5dSfoZFD",
  "key15": "2tyy7sHWmF6xnYZ4Trc8k3npGWK23FxNv2WED7YGJ5uPRb3BX3bUQu9a2em9WeaeAyYGH4VqV6SfYEjx7aPcePEQ",
  "key16": "5jKezQWWz183hadDHFYxG3LYYo4JTwzBFcEUjofoQtM1nwHAwEk4nFxBQVXJ6Qgjetgr6Non3syLNkRzDjcwL3zQ",
  "key17": "3DuaQMyUouBSHaVxwAAXVQtEiYYt3tgPdCoAwvL7YdRv3tRdsaggrcFq7B3oEDjgKB5GiRavDdARW68T3dsMhmuv",
  "key18": "4qZqysJ6To5znSSNAR6FytEdzfC2KaqRLvhAwSKkwrBtXSY2PacBKJAJb5JXnZ45DLFXF9sQhdm5FRmXzxT7Wvi6",
  "key19": "kJCu9VjikhHFgUffkEFBB8gAygkisYE7vpjvfsLvVNLNm3z2qtKiKK6Cjhahv2RZjVw5oHbT19XyxKdcoq4u6cD",
  "key20": "4jcivWARoWyZw3AKe25HwGxJ7UtQ8XbyQDhqMcjBXhBTgGoxcXdAxi14YcGCAVARonso3BXzTMhXdmcKjV7j9chg",
  "key21": "25ER3H1LhmP2FGwbyVYENc7pREHoyLcV7hxUHvBLnt6ywmYndiXLKhZEGxP6SNGvZgymvA1QbtUhoe9DJgeSEu7z",
  "key22": "2juJRtmUTpHdqAPxeHFC8cxC9MS1aumzSYPE4564GsDfY8N4w8vX9Vaojgsdh5HvbakiZnsrQkMdyiZ3Gk6nJe3L",
  "key23": "4Z6xzJwNx8MnXH3gDnULZZdpgGkGypkAo1npmY74xrnMrDxwgBPA6CvUVngjz7TcjefEMGyDzWMnu1iiGUGdxPpW",
  "key24": "3Ugj8y1RktwmGbGo6ZAwCm7f25DQDbjYFMUqhYGvkVwjf5sosvog11HFqqhgy5RBxvFspMqn4egQY2MzyY4wsz8Y",
  "key25": "35Fw9N3CLMvMeFaABTrQ3zcr525FRun4ggVWxfH2p53uEVCBjtxrLnRsq1kveUYGVkq7XT7oxXS61DZaXhBCw9BG",
  "key26": "gTeKzoMUSSWijyrZkdAEgheNZ6eWAd9zQXbkn2AR9FaVvyYhkAEhewGibQCwtH7vK98tvYKpUT7dRq722GsBjRF",
  "key27": "3iBzxKtJBtCDdzJUvXEr3WvpWkPxDm1tNdWNqTJmgj1KHgxCuMSZ5nEEk8qh4bFFLdhH4J2DECuJaDRZWaLpduDZ",
  "key28": "4BNge2YsxTQhFXgxo2vbhq6XgnqY3wSZaPyGKejQAtQri8H4n8vY6GTcYn8mTM1Z3ERDSW5zRf7UKtG4Y2T7T3pe",
  "key29": "3HPPDUg6w1aVwxEzu72GgU3uuvfeSw4JqZtorkvwEJs3e23m2QTqGLXYK2ujdd6W6efcNfFHPdBwhf1NA9fQPhUZ",
  "key30": "5NN32T81bdf8Ebym2LoWNgvAwbgBMwdw4wntXivmiWPpkt7HGwR3Xr4SbVRZYWy1KTqcJdtGknH7NBh4jtZdXGF7",
  "key31": "5N1GnKJ3r7x3YwkMsEqU2tzrBz7A862jh3oAyXi3o8sYjXLnAYVvduXhrLzwFdTe9apzUHfyBL73Cdsbigfkqbzs",
  "key32": "4Z9MTgyaTwUUNXUniZr7r1u2MGKFSrPU4SCSA8DCNaMxqHGYBkU4zcjWN6HLf1pcT2CDJMe4oDok5oB6WSEBtFj5",
  "key33": "2d2yc3QTcWhY6AV9DDEwgu47ynHydeUYCTuzAynVVzcic2EBwdDzCC5tXpeVTZn7k8yT1dn7Ma4eDjBfhxfVsY6u"
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
