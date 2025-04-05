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
    "2xHHTs4GTco4sFaM777Tb71GkcUHCoZuv8EY36UWwJnXWQksdrjL9pFhnsxebbKFFyPQmpUudo6EqQ8cSLHvES4w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TUD64uE5V3ipbofqtayuqYsUeknZRkixtYLS4TEGuHRkPLLfizCzsNY3eGk63MobM2mAwTfoMHgHH7KkffvonFy",
  "key1": "275o2vExoZ2wjAFC5hb5bMbXpEmtN764KAcXhRviqFSza29sMpueFJ9duAN8baA9RUeb1s3mfgGKd5uxPoGDwj9C",
  "key2": "5bZgbpeSH44ZiUroh5uMNp8DnRTNcEMVbTdjFgHLzU2X8pUp32B8UdpJm3rT6k9qA4N3Jf7ng34wFnZ1GCQZhiVi",
  "key3": "3DrGc38KrvFrCzM97266ar8kmTyLaAVq56g2RgFFPjdqiaRFzmKjGVx1QVh89XqMFEGJu9xU6wgMm7GC2FcirYid",
  "key4": "3CSdDbnfnyEHv4kgTDym8qARF2wK1bdWP2Z3WUBc5856jGBRzTPYWte5vS3YuRruCXEerpPGZ2KCJGHiAKPXiyF5",
  "key5": "2dg6UwVV2rNNBizqkdRvNEmv6u7DTXqaz8KnbCpL6FDNT4Rxxsv14U2hCBhmhW2ypWvLf7JrMLUYMLgUWR6i4vda",
  "key6": "3T2cAe3QukptxEbuvMwwLWU5wf2omdRwFsz9QaxsSdn1jWGdQEC7uYVeHzdGjz9Z7B8AXTni4mg2kBrLiG8XRSxp",
  "key7": "5kdzZMCPFuLYWnGmEXozM3ZRjXax6C7HnVKBLYhmy258Uq1FACQgVzNrrQHsNyAkiZdpauEBhrkXUQhHBk25se5H",
  "key8": "44h4PkdigPNSmxXrzpcFLdQAohdiA2UV5SsF7U51CnzdXw8mkrAv5pkXT2bPVDFByv5PBdCJkUMKN88PbTBFGByk",
  "key9": "5PnMGHbqfqouUN4HhNYgeaEuBGp64EQrw1Wjp1UJrnk25zqUZD8GXFqxtJEKULDx2MS5utQuw2SB6YRNup5cvYAC",
  "key10": "3yjfFc22ejDxExVmefkLEpgNrvAXZWfTNSEFvQ431TWB8WLnS5wXpGoWMG6RWq5EyGGsheR8ssy4pufndHdBqquY",
  "key11": "KfzNhz2Suc3gqzEDaukhk4y4tx4VkzRHox7iGQ3pigPWK1pgG8GcoXrH5627HRwKcsM9fLHi9Y5mQzChfgJXyqw",
  "key12": "5CsqF947TaprZ7eS4Ya3zuzsZ1kRz1oVXNhy9gB7CtQA3HVpjR4B9844GeSwBFZWeNfg5wWixLVFP1TY5FAbXLPF",
  "key13": "m49k7b44CVAotMzZngG8KxaGkhLhE7q1J3HkFLSQdT7LsLmv8fs15kL8nhPJcTZSjmmJVSDojzBAYRM3wiEeMUT",
  "key14": "7icRxjLL3AggCKcUw4kD3KS7sm895dnZtrsmeEyPPXueKPevBNpKWaNJtYSbkwch53kLYRgcdofgYJVemPXaHMs",
  "key15": "5RQUUS2dFiq4zPdL6J2n5LUgL5KjBiU4UGXLJvzPLc2NoQ2FXTyWTMK1F2A8NKWmbvvzmi7r6oGTG1kx7hNC2ZJE",
  "key16": "Loj3MsiDFnVV6tMAvhVKREyvAw9jGQhZSSNsBWPT6ggkuHopoaVnEbsXPYUE4AqvxJ6zExwjXo9t7hoZS3Fpq8w",
  "key17": "4SwVM88JjHMeN64wVhbpohr8o9iz9iswstGMJAZvCg2ahQzy9Fqi4Fo4d2zXy5UDh8hhLcWp1vKK5D2UzPwEkza2",
  "key18": "3xqLkSaP8XVCeY6CgTJkBD3sq7YVCQjDbxgXZAA5z6y6N3YSTBmaAu9TV25jPmLGsVhYcmCT3gV68VyMbhtpNHmz",
  "key19": "D7QhCr5Gv328cTGnJ2AhxBv96vBJ8fZF73uxsSD8ih8Neb9dk7uD2FDcpdzVQZiWdvmhMwnF5DcH1qwM3cPq6Cu",
  "key20": "2htPSQn3BgfdQTwqop8sHf3RnMEnJXw5GewXGwoBEX7JVJzC1rvCySVZDFMxEGzfNnBgA8MFnYxY1tmNDtbRjnpw",
  "key21": "JhEvSDmiMMcfKotPvVCUgQxhKursP15UPtkZGUCC299dD2pwJXHoLDrSxiuz6GbngGafhH2eL1tWhvffmRKSDfH",
  "key22": "3KWNy1KQyceGBMxoMCgvgVAxUj61veKEoUCdsMdJfDR2rkTJgVu4scYiY9YTWz9cFe6bNRfdi9rXiBrYwVGG7A3P",
  "key23": "3YzkDYJEFGpBGnmCbZHQGiYmdkHt3TanU7t7MydUpC8eyimkfYGq7gLreXAXVcvjDCfjVyK7nodktqHt3x75fczB",
  "key24": "2nu7wZZSw3Ctym92A9i3EgqJeYjxV8WicLkRHg41Lq31ksQ8bFMhbHX7K3cf5SBA4NXtYRym8rGQ7TCeM42rc8i1",
  "key25": "4Kf2ghDTd3KhA8DiYLxoUAPskMW3i4e6R3cRAFB6q7iUbWu4VWv1nx1z3hZWR4aLDJdVLGxyrPBE4DHe5s2nrHQG",
  "key26": "4Fr3Wf6mfgKPzmY8KY9BjY6ad134G2Pz1Cn5i6K1J6f9D7Fzfoyh9LKZb9NAauY5zWQUB94GcWXSmvNedDpk3NFH",
  "key27": "2a6t7wogpQWshLat3gFCUZMxmmAvYPh6XTH4RgLcUt49QuSuAnk7xqjJMzGkrwNQDxo3ZDGZV3ycFs6v2dMNTFUG",
  "key28": "2cHfpGjZVp64nvc2mg73uraeYxe7WJL7j44Ay5r4eJjhFZcqqpTeSQkxXjsWXdeL6A9RGocwFPX1TAoNeP3ansCf",
  "key29": "5cp7pR4QWxs8o6ch2o2jKBP65R5XxJZenAV5udjHvCUvFWkGjoRGni4LBtMATD6r26E8jveqGBnj2QtB9vYtcgEX",
  "key30": "4Jq9CE8yEZ6Nh1nCFGckkSafzbPP9Y3mTM8U4GQmLxK9SGAhkk2P159xAQ4MKZa5s4byV9AMRfVnTdZGpUCE6fre",
  "key31": "5duRnpZfVv5Gt9r56n4WtQSYapA4ZVyQPJc26GuC8Zs6giHPWLq1MQncbqUqoHhKDCB9asrv5roZ6EjTzVEateua",
  "key32": "4qMWcnaDS5U63HMPE2H2eLDKPUzWsPPPULREsgq6CSFrrsHXN7jqPQDKzVr23Qu3YJA6oeiyUg9zmNSZrwVEPvZX",
  "key33": "2kASDK3exXaU9A1hRc5VZjthSiwUPbEs1KmG1KgPipxHGncbzd1Pxt4u7EM77kGU1TYtytGQiexWjg1ha4HyALgE",
  "key34": "QMmBEnKAf79r4UjRXxkaa6Hr9isb8wkrfxcavkZ9NYSb6pqzJ9uWXGRAQDyfQ2emtr1bAgEte6Sz9pzUCUx87rh",
  "key35": "5ZwWKSCBsstkRa5GqsZinodnpTfUPXhACvX6Kgeiq9vyRSj4XMRsKTHYiXDDWKH4CrfMd2u3zm1qY1GRqrx3fs5v",
  "key36": "5xRoFHdEj9KBngBGxamTMgaAN7UjUTGSEanxW1c6Ehnj5Yf3CXGtgwoxzfRvMMkDrXBDkseGYESRR8SsK8xkgABT",
  "key37": "4fAUPNefvZRiqU5QjHZcM1FQpDnpz28ttpfVvncxk16VFYDfvF9oCeF1a53ahG43uWVCtSoVKEreNHzLsjDTTkB1",
  "key38": "22Xb9tMzsdH8Ph9bnegct3DRn9yRXp5HhffeJeFuoeYnV7oN71Bhbiym3XiLKKNJy93jRBqfnCUEew313EzMtMhe",
  "key39": "DiMZbhSwXyB3Lb4zGnM7624hmegb1RrmxNxjkQZYuqeDtG5SEBEh7SvqQgTSZa7AEnEN6epXYbSwaS3jn59kiji",
  "key40": "4kavT5d9TgNQGv5KZ2WVj9FnNvPBPr7aDNDQ1mPiuWQTdsqky5E9H5FmeSmSv6cVw12LFuqTzDhsCiJ7PGyoiTNr",
  "key41": "FWFU6X2devcqGTrs6wjdNXxtH7UTFKKtkMLdMiMv5X7Y99b6s4GmTBB2g6x25VAaceEPExoxzufvC2ksBtE1UwD",
  "key42": "4fXP8neJL9cAcaCrFVBRWKwzxWNFbBYkU3RDFdcHLfpxAVsRKyX7dMHaPjuppMtDfGo8xmzLjoRx1ihp78j1VT7L"
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
