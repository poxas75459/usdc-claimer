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
    "67Wa48KXUsDizNkxRxnTKtSk9MMowUpd3N1ByrAnEiN5CHT2M25zUbo5rKdWSmKjqRYJ3GPirxfByMRnHydqZHiE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QB8qgG2TSQKBhuiJzpCgchAVBUWa1QJqQuC9pujWC7TToX4uSHeJyd8qeCxHV6WbPtRkze3WiF9sEYnq4cAuTVc",
  "key1": "nwum1dRcJtLoryvUo4jQR8z1Z3ZE5FLe2ZvwPWGK3G9H6nZkpbnpF5rTrucaQvAS1s5D5dp6D9rPLJ6R4onnoXe",
  "key2": "3pwePXQExNGj5AozcBSNfSqoSrq96sbprziPh3nc6WGsHRG6xyJqitgwct7L5DTrBCaAEXbUQcPkGSu5zxqhAUEx",
  "key3": "4hwjhbbjJYmjQ1a3LtFTxEr2cBtSKUAG9UxfERMmiWroWmoB1zLgByjxNjDR6FHGWhp48cCvTh9umDPGpsZT1Zru",
  "key4": "C8xit9ez4a5zpxd7xUMsAVgWzQvzMEUHUsyYQhypGgg5GfMHUuS3972MD8qBWvzjeBwx9Vk61wgfUjmnXizEZCj",
  "key5": "2w5tKS5qZk2EtmqB9njdcGKHjyyAf58zX6qf54BmKwneJWTWoiHd5QiWXDMKsd9agXDHTHecgURb3oNQAvupYaFQ",
  "key6": "2C8vNkr7JHtykTuCidfRWT1roww57NT8AvgoKDM2mGgZzgDND24nB5ZmBec8gfs87iJx6oDYq1gaLZY6b45h63vJ",
  "key7": "2zUeUQSkeMe2nCXbPjS7Cb8Hy5UzpsznyprJzs5W5wSEqVntnfyDNRrs6U65Tzq1bgyCgv6EGTGCDnkLSZsFuhoa",
  "key8": "jim64c3Y8KfdqzUE32tp79qFAH4b4nLHa3ZTs7Fdunda8xs8S6oGJkMP6nb1dGdyq5yqdHkujS4aax63LD4Vp5P",
  "key9": "2X2ei8vSqxd6FvFtgj14xuXt7kEa99G8wPB9NvjpMF2D4SbmquN6QVoCtSgjhcgw4t2nd7BfZw9DHsZZsTFhSBdf",
  "key10": "54A8hBqAwr2gDbzs493rBUFakczHKQa3hkfCna8RRQPaBHYBcQ38fXUHZhFdbGDvsSBoPDsqHbkZXiUyNjxS2TMB",
  "key11": "4UVqLpXdHFpYqM5XAumXoABqcDTm31WZQrRuYKuUtVivBwsJwhm5ZpWY6YPKNiL6UeYzLg1DmKugH9niGaqN684k",
  "key12": "26KuJvoxqE63vKz7GSe5MXyvXQtVnndakYNeCvN14A7RSR8EtNqTHkLxYFYZWaSDFPtHxusMpEFBcZMNfNZy1rF7",
  "key13": "485wiZKtBcpHCj3L1taowKoSx7RzNjR1fx9B7TWpdH4jTmnb8nTWR1YtyugLy8iJdxSEPg4586EmifRCPmuXyAo1",
  "key14": "2ev4UYgSYvEvaWeFkmrjLuHfTfizjakMSycQ6fs4YhwD6C4J1qmGXnT5nNYJMKEMdMzjms9db9JtqxoHDVN2s5iE",
  "key15": "5yFKVmUYQuRx7V5BddNnHf2EavhbLzk9anPEy7VaK21eQarB1VtBTtvoWMwnDPzAihDjvsbVgqVzTweWZCwenTm9",
  "key16": "4E23FHmGNm6ThpoZBwxWN8jCFFSKEwRW1UirZP8nGmQDkGwSQR7vbJYXrhvzKZm1WJm3EZppdPLKPtTRAMJWGAAM",
  "key17": "267cqJUZTkSJhNxeptUdH1JTVvhGSGQcg1UBDeyfRd5MLbHRdQg3J8XFZov9spX1Unq2tqf7EpVr8PRie7uazbhv",
  "key18": "4sgaShiDwbhwtGbepuUuarTgUGJp3dTTucFuFzHo1wzQJqXz9hWJkn7NLHmybCkG68B7r13TQLMLLjE8hhUBDNDe",
  "key19": "63v1jgKy9LBtcxZG97iXz6ptW6MqPnCmp5k59Qfa6dwRmyNFQViCDTDnXjq9vJsKkvMGjKGZdCbcnNw2VhmrJc9R",
  "key20": "3Z4K5bydiDeDmMnnSEvGdKaUjHMbekXLrGWkQEE5dDmQjYnhBv7BGN9C4wESsywdZR28ow167SUgVSZM8vFyQjA3",
  "key21": "3nLnWyztGq6edcS2TWEBkhguLcHDxBxxBX4tYuzFJfLjgWHbQGkJNwofmpDFSCtx2QizG3qEaTsAoUedFMmqrfeg",
  "key22": "3rq5ezBX8xefjxuBX2zpT6Px9nCVjymFuYRzd3awhSftTAppub6Rh66eSVbk9yrZRaVSRzoTwonnq5Kjczh1kY1L",
  "key23": "5j1kUFrMZq4wwUdpB2efGLm5ZriRKSogRrtabCN8jQH1rarDpaMz87PdSXjaZ1PnV2WZ6YbtduFfmCh145jDrdcS",
  "key24": "5chdDbU1apSnw7nkwfuMrGPHJmXuk9C8WDnJitxHn2xwUax8jUAssVsahf2FfxEcq3jmm9N1qUCLLfiTqobHHnwx",
  "key25": "5GMwD1dQLFLw8j8hmb3FTvNTzBYt86R5vbzdtcUD98BnU8kWGqLg83tqfGDCBkjH44PhtDKMVoEmVTZnRaS2nKvV",
  "key26": "2zEQZ1k3PbnDTPemegbcV8try5YTshtC33WzJirLYHaj9pRxE1mfZaLsJhxSjTfZdbAq3W9fbvfgEPpFjykc8ZJZ",
  "key27": "5nng3AXKXgu1bmGcvZqdFjBieh3nao5xAgmPhEZPdL15eSkCTb6wZjFXkdw5tkBRXw9ognsPVGtvWWvUc2azZH25",
  "key28": "4GFSemWhSgDJgiw4s3RGCru7YPbnLhcsgYZLbPR5ncKrLX3J28yGoN2vgyVDbETUrwV264JDHzABXDt6Rstrh42y",
  "key29": "5pEwo7rt585bdPfJocJxTwuospRQhCPVHsavxqXPp9UQR6Qg7U1qLHXmYDWWYvpJAdm89w8JtPHjHihShL29Zhqy",
  "key30": "2A4shjSiXHLLCzGQYVAGXzHA2ejxmE55M3CYZ29m76zJaXSuZqgvbtt4M8mjEB7hHb4U2Kmg3K8CcaYHC1dfmkGw",
  "key31": "v3ZFsg8gdBZ7ChRHBQCQ53LZrxMvCBcfcEL5F9KLkQDQ993JvRfPUizMj7VJvFkBfjZq4Axy37y9HxrQUTKPRRg",
  "key32": "bpaJB4tpWyChgU9VEoBNbEmQd2i8w5sAtDQttcSxhkDjJAvnaG16LLCcoGb11uRmtVs47pgmsyYsuSAEnLVDLg6",
  "key33": "hUq4aNFvg9cLc2EwDDNZZxePC9ZMQvhgYSaEKcFDhuZzTejbQEw3fKLaowsvtpHfFV1ttjNjaPjr8B5cKGwgkw1",
  "key34": "2BM9yzA6GFgUpfPCbZoXYcn7AjuzHxn581nSmiMEsNz7WaHAk5Cne4S12cEVL1L8rDdLTWGMDWWKUAKYZz5pgUv9",
  "key35": "2VQQrEKzN5ZRX2ze6jnBqzWdeJmFuX34yPUovu8VhugkMK4iC8fiCDxdiDtWsUUpP3hn8obv6vxXArDrtgvkEbHg",
  "key36": "3wWCGXX871FCCTQ8puXMgK2XiMtzQj9BvHdYGjTY1kzZvKdet5v3kiWmDugFQNB3Cry275KYrnfhQesWBKYKsZov",
  "key37": "4rYVZbmDsW4P5gj5dDVhsNxU1ukGfheBq45AGQMS7ongud8KjimfSQztNccYPYbdopm2HDbbPb6Fak29Vj3eCJH3",
  "key38": "5Xkz4FyfBUhtNuZ213K9jq2HXAGcUjY72pwtBtdkZmvivjAoku4uEujoYmknqKqyizwJJ2WjcDiq8STuBYaqnE5e",
  "key39": "55LoeqD32s7NNjoPMQEoqor1H1xLJg7xNsoPWWniXSNp38MJ1oERHqbktJK9dP5JaMrTYTh5M1Rvy6sfAqitnG3p",
  "key40": "3wEYjLKucUt4hWfuByK1DZH5XxisM59Y2MUiVKGRKw1gTyEt8zKbpzN2EAcVKhqJbzeWBW99UrHndtdyvNVogcw6",
  "key41": "2hbyTkmzi2oqChhHtyV89Z6DavDGe34ADyCmvLNcpY1Ty7jJ1uzVe1W5EwihjNyFMkjcF3LqPYH4UYZ7iXhkgDSB",
  "key42": "52uVZ7eikDbeQQngqdZDXoQSaUhLJYx7LBkCZFoZtX3GrPfRevsuye5HhA4ByYGmpswNqyZmU5cAJ3r7vcTtEyD4"
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
