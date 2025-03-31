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
    "2pub4hjyK4aCD2Jj1mzRQG5VR3TTH5VkPgxUZjCtycjroSAP8xXgPu5uPLMeFbRtPwZVPKymBGdtxVasoK9CtbPH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sD2MNhGsvw21Yk54PB3fPi2WGc8yu8TXMhNm4aaDsmrFxjQg4wCmrHa8NXfvcXDsJsfzaS9i2RfQ2FHGsESDWeu",
  "key1": "4pxWSnYVTs4nSYtvSM92mvHuos6onPWT5VJVY8KD3pEQteXwZPYcyNqQVj78GEXiRJRPB9moFG4LZu6ExaHuhfXv",
  "key2": "z6ubQCbFEwutqd8frKiuBKcKZahoFHPDey1BPZM13Q6eotwufHKE8Bzrs8TjgCM8aWL7b9RYiwhFjhkdT9sy7FM",
  "key3": "4whoofrvoN9xhpM2U2v8fZ9BH1XuZjArGuy9LNVVjvfMPcSbko7wwav4Wwk8ddwBsNY1LtKhkviucre7HmeAiXAY",
  "key4": "4DLQwdwaExtThxRqvwNtx1hpYKqLCtZumBXYqBEtRwwDLkoyxPPdpeyqchWBHXhia2mVDNd1Cq117Awe8uaxsSNZ",
  "key5": "xxQrxhKsbrtPZ3KJNfh9JQTsRu52dLCHkEmvxSrgqPYBES4aJRa2ZRbxG9NP5NaruvTMftKfbw64UiiG7bXHyi4",
  "key6": "5b3cfWHcGPGQ4AHMw73jcTTGBjZCiWqnQsMpkZwi5xkXY185KsLorFyXe7ZZzrP8ZHCiMuBtKDGqZSdMG5V18xKi",
  "key7": "59YTQx6NwvNbKMGSAoGttL8S6z6yszhTRvP2m6sM9LnPAyuXMDQGAo8BRMU5DmanKsaqff4QW8s2yUDJVDMjQmFf",
  "key8": "5DhsPLXq4k6bZypDLhYAGvhLraQKxZNQ6Axs8Qe9JRZeqbJDyyuY44CbdNgHXtgfLJMsVNzv9DszVCvQ8e7agoXb",
  "key9": "2dbq43ZHSnVFMF8j1Dx4negttkTg5yTTPjvzS8qZvNJDm2zMhnjAWCwxr6i9XWoLLjXifk8DAybRz6gK1juJdMDi",
  "key10": "3apJtKdFAQjkVBTRhTUAvuX3YxvZXYDsCPyxBf4piYtssgsVgdPrucLwvzSFghSoThAkcLxYqW3Z8ACpHkpyZJh1",
  "key11": "hPxFGaaZ3DZ6cYNwohqyKSRQp7AdGtFtVwrko5aGWqTbt7N3W36RZsWaeXqtMt5BfUEHcYH3unaL5QgmEGZcvNK",
  "key12": "WHfN3gBg8ftDiTAHWUrkdf9cqTqrCAWh5CUZAD9V3oHFefC2L9bh9Hs2XpMPYF4HgbQXPnHmXpSdfEz1zNY9Mzv",
  "key13": "qXGNRXwxH7usCsiEY9Df4LxHNRgkd8dRoDUxvU9gKFyLoBZC7ffLJ4UEhnNBybPccwxMk5GNMomX8kikpwMU2LR",
  "key14": "TkCac4wPH9KaohJBcVk82bUj1hXJU5HzjJeLuz1t9MA4eJw4tAeauHzkq4MYuo2MUfHEaWqXSnMkBCVCMsvyppN",
  "key15": "3RFFarRfGNWsaMFFpruU16cqZwpN9gq4QeVEbYQDeA1VzksMDFYGPUEJXA6rHToHQ9RrcdJ9i85nPGw6FjtDENZN",
  "key16": "5Nw7SfQifAG4btSShLzuN68biwkYRVUBNPzzfYmAXzDenx9bzbXHUDgri6cT7nLJzfyXqFh3N2TepMbuX1HcCMXe",
  "key17": "26AEgsr3E2Gsmyf9NVptoCf8z3VzugwqrXVbvZUq6MzZsj2gWCeANkiHZhjaYfRwRBU7cxTacLJPTSGjSKDjKjbH",
  "key18": "2McTRPYG5KvbEqsiiVH8dyWXeJME5QibzFFPCFXiBTjn62fVZiBDrtkdS5fmu1STz6dcSCL7Z6EJUZ1w9gH1hviq",
  "key19": "2cfvQHhq3SLmwvJqCgGyR4x69Qxs2dYTBMXtV5sBkXMD1ct4Yyb14Uve4TszhjF1VYkQsWt4wKM3367Y1ker6PWU",
  "key20": "3FKwzr9FEZaAM32eAcJ61brGZSyD3jcU7SdEFVZAdA5Q1mosTVLyAGQqYjuvh8CxEsw6sfhutbVGSMdic1cZ4QgQ",
  "key21": "2HjwgGtqX2EhxiF9Q7hZiQdsXcFwxF6nj5SdpfaTrprkuLsneioKvxzcXX7t3wgak97LcWKq1wHXx5qEsiywimMp",
  "key22": "5dU9jZVUrvitu8cwGDQNPT5Fx9m5DPLqKGFGDGNb4UTV2BbSeyP7Pa7CmKvUujPqsDD5b3zTqHMpad6TU1JoN8x2",
  "key23": "3JSgXSKkw7K6i83PrdZQvVjMS3epfSXHMzKS2DV9duLM672cZ3xM4rvCTeAsg8K2CFULJqRwexgfW84v5dsv3odG",
  "key24": "4XFLVhuDCovZ9KFzvv6e4ZeRxXA1LvCskx96YvTyifLD833Xp5w57894zcNcWmVgujADPRZuHboaMgTvdsMskzsF",
  "key25": "5PXb79YwXp6o7VkGfto4ZNxmAfumjXe7WEzcoqjcrXcuewFtpGViC2diaVnKB1gs86zxJs7C5wxq2D3fncbWk8f8",
  "key26": "5SCKodamLzXPypgi5iuEVFPfzTdGZFw52yNSeoLp4ycC13bAm7ruu4tuEBHVJVyBjv6dfhnyFkpQFmWT4NVnjbuS",
  "key27": "45XV7w3v6qj73Dpky7fhjrM9FJKQf3V9oFTdhWkBB3jBusmogEzVa8TT6vv6i66KGw8JjyLqXqLzv6jf7oVqmcHs",
  "key28": "2FnAanCUb9uD7FHFAyiyTRNsDDCMNTqpe9XdcP4mYv3yFjYSgibHuJ2Sp6Zo83iqTGNGHvxmjbUfLRBj8NChMdTX",
  "key29": "zUfaFijhJy4qWxXeBVZNw35kFCBfkBdJnmxXZMVC7n7oFG5cpaTgjTssiEMy8iXkzM9xdAMhz5iXHvyXqXDr2Ph",
  "key30": "2imtLBKX3vMEL4hHTSiRDF6pSYTvab7JbQVrbRfzByqas5Cd9mqaqKzYQVzkhmEN4QrUg3TbRVouHT6mazgzGSTN",
  "key31": "3epcXjdQzhzZs4iV1pw1EnE2Hcrr4oXoR3QqkZZ7RxMJ1xXViNPcBv7JZyUGZxRAtXQcGZXpUiMQbSGVDLKFMRWM",
  "key32": "4wC42RDvLSEkZoZs1wZjcwpon2xhvxzXkczGHhZxZKCuvjLMmJaRaQerchHBAbEP3L12aXLrZVJbz5Yi6dnrdycB",
  "key33": "2AE14T33KWR14T56CRSG35fvEDRPw6iJ4HH2MM3ZbC6Hm9DiyHv2HRwaUAXjDm5mmquiYmEDz2682ydKpCdgYYQh",
  "key34": "4QYBWVrqXfU2Ux4v2PX1nFJP7AB8UMqJ6iSsLCzdGDZTSVP6RQy4jqQD3WbVxQKq4riSe9FuJXY522nn4skaS9zP",
  "key35": "2HSmvwXq7ymcV4XGeCZ7zLs6caxC3dMCriCLdnZ7WaWif9sHVw8vmu7PJdMvezwmDECFBLbRihaW2H2X444GpETJ",
  "key36": "5ZN1jQdAmBG6kebCyPdxV2YnYWuKzzuwkVofttpf8A9GVmVzRYc7ohHY3a6aJ1hd4QtHLvywEfbn65YgjtiBe4rC",
  "key37": "4UFpACHqb2gDefcyL7o5JNfR1cHtvnmfGXgTXfht9m5o3R9QZoiyRQjFDaxWAeVLM1CR6nn5Pk6aH8AJXnc25kzK",
  "key38": "2AGkcrNEUWQtyA8Xpd7g4TarW6FZNeYEuHzvdrzKmxeTxRgKiPtSr2HU3z3aojY5xsQcaU3ADgHhQtCFqxsvY8nC",
  "key39": "5Azz1LpAMb17b9tXhCWXFkTe7Y26CpYchwLSXB5MkxnoM3QdU1rxf9T4D8P7q5pEAQNeTBpJP6MSvHQ2mMuSegmb",
  "key40": "2WrQNLSPrEZMhQi9nBaN9m3DQ4GfXh8ot9Gz7mjW4t3LHNFPpTFzPKw4Z75v7Ydtp7HkpNJ4qgfADA1gyzUnroeQ",
  "key41": "4NsHC9x9PEWfDyma8h8niTbgrs8yjVsDYaRtMekneV4ojaM7sSLD834QDHT6CnHKLAsDHqf6m9yd4d9giYfNqbCt",
  "key42": "2WuWtS71sUN8jichpQGzjzaE3QWFD5WqWdpWmjhJptyWLBFGxe4iuQJuTsG2Vvv7GMwfX9BNi6diuNFtzneX81Ni"
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
