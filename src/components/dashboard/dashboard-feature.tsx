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
    "2t6cg9z5bpJMS1NJmTQFx3njN3ZgYwWfZXLdYRL2vAXfMkUtLNMt6QySQaj4AemMCjyZNvcn9KsBmoBGG6uNpkjL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WDWgP8QGDnGyrRkNBg868R8dcvtH47vv3eopS9sSfPs9hK8jjjudYv7TXMKSUaSvEbwidJ9uiRgSzuhVQ3AxzHh",
  "key1": "5Qey2Xj98LJfCkUD83RGy8ZPMds6q438tKekR8Ad6cMajsGr5ezD7A5iCpMs6YzpVdVBWwXfsWFAeFwbeGHt58ND",
  "key2": "XfKV2gj5YgQVryNgmDmJc1xWRRx5YkPn92eAXCwhee3S4Y4u8npDN1sBSozZdQ5gCTGLT8ojxzTBg26DwMckm4i",
  "key3": "Ux61yfe5qxwcox3GLcb3myuV9P4oCCDExUKQYfvbHQ11Wj3y2KZTSe1nxFE3fXYemgmULoo5euQ4FRAo5tLYCUj",
  "key4": "44ndftzoWhKGbqRVpbR939hi35LHuYAX2uuzg4F2cjKtWhBEt2nU5aUgMC6DbRXxX8LrScWCqenDtWfLQKn5eRuU",
  "key5": "4Z6UTjPexQ1iWWkVuZxYr65iugn3S8xjgKTF1QvP1A5ifnYyQMZpp7BVLCXxXHdCHcJZckoMqP3z8r8kGavDfynp",
  "key6": "5DBkU2futR4VVBx7QqFKw2NtNHrnxUbbMDt18j3xRuqVwqzgAzwqPheeNTXFoW34AuY5ndhVwFqsZ24E5YtMkdSp",
  "key7": "5gVADD2aF3oUDY56rLPtq1VVwGuQnQf6VASiNano2iccYXHPTeJg7JWt2Wy57dPMMfUuykZTfgh6zCmuwJea6EXt",
  "key8": "9RiP3LLWaPhJBzi6mrYw8ZfTRAqkDgV8f9R8F48bxwksCzdzyfKb28V4LAMLnEoYdMrorxTdM6fu4jfsUX7j77T",
  "key9": "2BALx7jBNmCsarKYngU6ssz4cx7qCX5RMyWQXmJ5T6ceZRSiNayjR6LmcSWr6D6Dy2LLMykfd8gMe9Fva4bNkpFc",
  "key10": "2Xj7xnJTQbMf7JStTjKrHwGoDHT96nbsPvsMJj5qdSyoMKkgde5ecjmGggnjDrfRk1FtvAn5ooMieZyPZ4dB4gXQ",
  "key11": "4UE5ErX31v9uXAGgPQxLdXLL5dw4AcEYXFSNykoq1L4akM2AkthtBVqMnUDxWdqi5okq1mzXZjpbaE1G8o3YDiJV",
  "key12": "44wq1dGopRsaT9HKXH3tbgC9o73RvKeGofRFDmDTcUj2ANNbAfyPhL7vQei376zZwjhuFk8FUJrciPL6NsGxvhqm",
  "key13": "2Q2zkVXbvgxU3upJFKoGoMEdsk8XMUN6BVBtKJ6WX4EChEDMZqLL1MDQaBa1KyGpwMLmKGqHx54gU8Vq1Vv8LbYK",
  "key14": "jfXLCT5Z67TEx91WzoCch5SpNXyRob4CyD43zStHmxQ92DgtUes4Gpw3YRbQUfriGUN5NW8PYqYzFYEdguLEdyo",
  "key15": "3v74LANQN6LS9xpuENFDPuw4PeCqxikDHvgTLeQfvpyjo8ymAAPaBqmbYC4nuG9bTk8knCaSRSdrJUrg6QziHeHp",
  "key16": "MaLGM7KiUh3xyyrJv9g3j8cWjwz3jWx3Lbnj8936BwT8KJYaDoPmGLei2CCajH51ZdRd9mQem69FVyBYzfQE9sa",
  "key17": "32pd6fSAVT4ouTENzTv5g1QJ4eckuxp1CY9QcVcgKqNEbgkSvNsDweXu7ZmSJURpTZuqMuCrRJ7PjJALLqv2v9GA",
  "key18": "bgVqJknczWm5vaG7Z8n5V1CSYanAwXx9E6aoLTuh6uVABmkQ23nqeuuFqbkZXs58W5mz3TZau7h9os3hxc1Qre8",
  "key19": "tBD7tCwZFw8V2xEVQpQFfdgwcyXZ6pVL3jgEJUs7LyznKEqyHPURoZzeJvYAMQf9LY7YkUqQAEJKj4a5EnLRZAj",
  "key20": "5TWPzJSaB7Cex1YBM3YseuDydRFC1HB3mt5PiKNubji9FTZQVFZaqoCGkQ2obkJAMEQi7qgzPv7vWi8BwT4Y8Fdv",
  "key21": "puJc19TdKf7LktUVXJpuKLgq48KtchMCqmLPB6d5aXNA8VKv6kNSzEWYDqZVjGVrkX3W3DSehQTguTpAioCvR5j",
  "key22": "4XnPuiLUrPhaQfnTnXh7wgZCMvMrCYkiC8YHWaPkLauGz2DRxbyMsAgXWx5WgVXiaeRy1DGhwBGG6SGDVmSAcCeJ",
  "key23": "3SmoJAYpjru7KSLYorQxHrmmb2zAzvKcg9jC3RvCgCZPfQM3WshQxtkq94Fqav72T9x5QdKRYrVh3uZRbE51hPyo",
  "key24": "4bbMUJ1sdJJxbM2SiPZM3RmbY3mjroycfj6gM3bzmnJGFrZ1HXaRj2AgimSnmL9FKHJTxRRfepd3Vpp9b3NywjFD",
  "key25": "t6ifj6TgrP4nRVGQ8DLtTh1QgoY2mSZvdxw2gV29ENT78iAr7HkpPsKFa3CETVD4xjNtNqbnKC2ydxB7zg1zoNX",
  "key26": "35mykdkTXqG9fk1f7rMR6uWFHSfw3p8NHstP3itHSYsGSRU1VbxscuASfgGgAvEd8SHrS99qkmWhkperfbnrFHVy",
  "key27": "2o7qeW6YaruUsTqbMyGxXdimtESDE9jQzQwtpBQSMoDskMYYGu6SrRBceXkBTDQr1xkBTDrGsXMByxajRmmHxGBp",
  "key28": "4rBMX5JfFLDGtVaBGxPbSFA9p4kSWgW91hYzkkWsNYuZcCBf92CWZb3YbHUEMBurkTTqzwKfjHXzV5ZTiHtUo1zK",
  "key29": "5MH66WZWr4NadeR4Z1akEppQRFGkidrsEtzhFipGZKQic57su4YBBRPmPUHANSLeP9FTntpyXpFexJa1qGWWMeBS",
  "key30": "5kyd1MHF1P16FThqgCxGWyjPuABC8512T9M4od8B5k6WjNQMb4FW15FoKVKv5QzeMV56WgM1HvFjazD7WfFW2Rkh",
  "key31": "36xJAUxzf1Tt61fcrmAhRB4YHLorjwM7pwKLZZnBBgsmdU4sojXYSszKsR4w82QEd3zX3DxNmCCrbWyqRSexregt",
  "key32": "3Jni87XiHwH35hBsXkaEsbjux5ZTmvNcTNf248A9cDDqR7TgXgFrxgSD76puBVKE8bCsN3x9U9gVwpzkDHqdnZxV",
  "key33": "4yFtzmckdcYcBwRtbRML1hC3v8kigcnTWWXWqedZAQi61kt7845nK6udGHDyvQ4v1LfjbAcfb5X7j1m3cuhMvg6u",
  "key34": "5JEj3nMHEVS2kqrKqhkLwbsabWpwRwY7C8j7xG3oA2hqo7zEXB5gEJgftvFQgiwG11QmWcv6DNVQdJWZRV5xaAf7",
  "key35": "22GSd3onh8pYnzkmgQR1wraJv6EH3XfEaephCZEikdmpo8PHaQDECmYutsquRQwQjfyJ1RFNP83dLvYovGWfg9T7",
  "key36": "45NzCMRjeMfzt4WyPUTvYCyCTTAYL7pDdAk6PLkgSxdTzVbhPv53DfP6wWRkin1XsCgDuhYNvoUVTmsRJUqFDRFb",
  "key37": "2sRLYdYPrKkB14PneTEaoJhVEGSdqLY5MnSUcd8418eo71BHKFtp4qM3vrNv6uBnX7TexvhQu8zRutDJu5ski2pT",
  "key38": "5U2b6ZodiY25siew8JQkbF1Zb8nQTAkRRnju9FGZnJLF3dHtLWsMYcTAw2Hnebi1phukKqMudoAYP2k1rn35wnvf",
  "key39": "3SY3m19mWiSXs2Skb8vhUKyfrKjgQQ4uFsHixyNkAXEn8Cec4MQ85GksjX99vvhq5Q9KFcbLa5jwPsawUhzeGTWD",
  "key40": "zEj27V5rK889wVem9trZcMbreTJ6qCdtDbP9b2bHWwNMsc7Cj8Vet2vDr4iVU7H9SA71TvS1XJosSaML7FW5i1b",
  "key41": "6FYMSdyWDa47k9eNAjmuyNNFfzaF37VXGTWRTAxVCwV2ky7PM3esc4TgqxHJo9hp7S4ukyGoUtVicvGQFrA4i4d",
  "key42": "5cxuTF4biv8hu9f6eR3gcYA8JdkhyByC2pFre6K3HH6U8UbJPZo2LYhgqFjRn5ciB6nCrY3ZgxQF4xoMBb9zotvB",
  "key43": "BaPbNMNG5vGGoRWKXoUNN9dEoEBtvTrGX37KwFTmnnaDZ3xfWoLnhKAPW8sBRAf6pxY7nnk57idcwRjxk4CdXdn",
  "key44": "5uaAc3CFpfWmLS3nkKcGNpZzW3SrArCi6Eu9AjgYcFEbHCcTnzZAMvVPboYtaSjqFBTqh5wrsg65FovWjQUJ4RGg",
  "key45": "2o5Z2osZxm37m5Rs5wwRmxn43RJt329ZUdv7HJEjh9ERv1U7iD7K7AbRSoUn2J7vn7yqT5nQysk74M3M5gXKAVno",
  "key46": "62E9PBbxs8fnQZFeB6nha7SSBMGKfCUq4UwTPPtoQ1iVWPrRoZNdPMxy6Kbfv9p8aiM8C9Hdw8tGnGvNZEA4sRTG",
  "key47": "3k2BqTVx4mZ5tWw8qndgsD6jsqP154wjb8VwZCtAFPamKQsqtTP43gBGWp65iEEWB5DT5xGrGQ6RGPsfavsDMQ44"
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
