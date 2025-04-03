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
    "41e67RFcncwGfAYJFYuAPhj74ZcwRwLwnmHtUUA1vWkhZeMs8aqNwjPYyHWhoKYCnY35m1gMYLJgzS5uvfaVbMuA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4e7uG7SSrHhmndmeMhUvi9jirmmVehUHvhUE6taR6wf5JY6wbRr4tS6aauxsdFNg7LfkWo5MurnjYU28iuY8uwee",
  "key1": "4bta2MFTnHhgWJkTh1H9YtLvNJfDMk6mTRBqF1QKQdjKeDRfyg14vbVuYLsJXN595jaxeZiAC9S3umZePEuhAmqt",
  "key2": "4AJixKMynBdDELv89tkF8mes8J9prDAaxNLi5DAJQG6azUZnAPGKCbqSEFWNzd2CyxmGQxQenG396NaLz7uEQmC7",
  "key3": "4faLc4GBh4wB1kv4VRHwFm8A8RMfiHVroXqXeTwEmgi7bfzfrrjxo8dFC7hLVPmHaYbPC7RQkkDNMqMzYVcAqWRy",
  "key4": "58exN331eJsdsRjMSLnsf7Nak8kRiKMy8tQxLmb9coNgYrJPo3zRcPhc8DffGHpQG5p6tDMqMGg9vMUewccArvEB",
  "key5": "4VL5xpCWmYCwm4qhQYM3Zy3D8HnAa5RttTBqyTsabVXCSH6w63JfVm19m8yazFTrD8PYxzHG18brfURRsnzBmG6L",
  "key6": "qs1Q7HteJ73WWiGZaXjUsTKRFDUBtAEJPJTz1bUvvv8gzvSCrHFYttnjrupWynqyevxntTRqFJLawCQnJFFVCLU",
  "key7": "4q9DhvTKuEfTtnBwte74nvNTCiXUrN9Pib28Bt2wiSTe1nhdcmKDCBru6pSWUnYfFTRebLC6tgLGLqNv2mMktcVs",
  "key8": "2SvY4UeYGdB57W7r1SngDRsWXMf1mTURxauaABQTFVT9Ur3xFrBKtwRaCLjiWfEzh7xCDH4Kv8PBs3gK4d3Y2frP",
  "key9": "2pf8YNCHWaojE9cQzGEsCX7omDvGbu8B3tvmCFU9wtUbhw8qYrC52cc9Vdgevd2B72jZMTPEDDsTMdjFeBZsiXaq",
  "key10": "3A1AD1jcKjdPQTDXnW2f8c1QTggaQUUp6xXPgAN1gix9W9ofWKTGdXYEXXGPDtq5dJ7825QBwto5PPLzSYj1Tn56",
  "key11": "z5DR7KXrok8CVaoxpBoFNpPiVtxLRyQTuyHLHvNsHKKhQBS5vnSgzePQQQUvyCd3npm8KvzggPpmMYNJQAuKbDN",
  "key12": "qmsea9qeCRW4qQV8acdTqBC4kj9eXCvysSvBMYrKWuRPATwjFZPXs3CMRe5q3ZAa3EmeHvWxHk7DCfkmh4nQDdW",
  "key13": "3TynRJchhFQ3XTHBwK8m5JRjnDRjCszrBSoRHN5no92nmebtTWxjXr9RpGBdrnY7TesjMwLP2yghFUYhU1G75x2B",
  "key14": "34W1VgPSCBcooEsznqhyhxx54kaMuZeqbJyW9eceaQSUexmc4Qt12uSK4N6w62VyPrP4Akh3Hy3Wcq7oTC7adJZj",
  "key15": "2Y7gfjYb9NQ8HAV4a8FFyRLQWo6tFsP9dwBRQdDRp3Et7Azji6CXHXXTpzWuxvLg2jHjjzt92zWmfgkbE8qUHE8H",
  "key16": "zzKoH4zFG1obRbJzrGiBuNHqZnfWMwXRaebyBwHYnNCUgxuMYnBARhKMHqjSyMA7SpyaYqbmGUN8XXGSjNVhtCJ",
  "key17": "2t29yXtPfLc2zVayAWmrxs64ravzUCSmV4hcecS9gD8MrzSZ4NWcXH1Q34rejVHx2sbkuVRUqhcuwi5cHq8Dm7SD",
  "key18": "5KnH2jXciKLoPh8HcL91ykixA49YXS5maWx6wZz8xBtbAmqeRy3eNC1yS86ppw6Y5Jj7kXR7c4Kzfq68hjfBmnL",
  "key19": "2qasNhkd1Ty754gEBNZLuCGqC7G8sqrFcTDFvTKArKLW95T4NEE4Kh9XxhzqQuUDXDFLNpJbe6RyrxCSY3BgsBgF",
  "key20": "64aMoz8sw9KxS2Ue6Ne9Zqv1qq1KuLfrHZ3MnFC5dcgNDgFFKAgRoYWzZNT1LnxAwnSgKSnWBYVtjCQHtm2K6cfo",
  "key21": "2ib4MzYNhEj63MJAF26Gpxzye8KRA8pbXAyd7YNvMuR4P6hy6YzsRsk1vQC5wUdr5atjhLzj8ntcsN8E8KnrNkNu",
  "key22": "Y3yecyUmMx1h59xUaC9ac4m9Ut7fwvFGpEoSLyLcxZBCaPek5CKtD9Zti9sCsVSSW493As71Uw61kzSgQbZvgwS",
  "key23": "3tcggcbhnY1cLXHocmp1MsUkYuCt5PPPwJfPaCFzScQrvWV8ZFy5CGgQf4gv3Ve2kqhuR6m7sLWo7LkdAXg9maMX",
  "key24": "7P4fhkeAFUMdt4hqve3zptQFFvY9APiT5YLS1FSxDQHC5fXmcyVtGja26JjvcNkrcx63UTf3KMUET3QKiBCevNG",
  "key25": "9wuRckQby7a4gC6mLtsddkeyqingVYtM8troBsfhniszFvPoWGwTHZZXEc2LgYxjcAQ1BfgNvJiMNURNhhmD9Uc",
  "key26": "5c1osyjYGKozKHqwFQg81aUUrJwh7T8ztbHFiEJsYaw1Wgm3BUwtFKQYarfFB8MWXj6qvR3pTa2cK8oxMNyWYmrS",
  "key27": "bX8M7MmtdUba321ZtGBhGRSzWG8j5Xeq3WUnAHP7n4rMFrUw6UnBGsFnfYwEs9PwXhxhP967o7B7ZV1BTsWi24R",
  "key28": "U3Mb5mk919KtBPbw1VAVySuZyWjSYLZbVzoKVghLSynqoKc6qu8XVPhnazPdAsxmZPPVLEprd6hbW1Qdhv7NGXV",
  "key29": "59duhS1xGU8wqiAKVeQA1HQUzxxuogRXoYy7SMCamXfpmbXdQ7dpegjyEVtDALs4ZSyQhBVPUrujJERfDnPtWpVZ",
  "key30": "5XaYWqcE3T4AfExAJhVuWkQ6awqDASqSGrVKSNppPsFhNYUXpUX7yDpCtQXPS9VPUbT3H9W5NCqM7Js461XeKL1k",
  "key31": "5Ai4QKo8TbNQR2Vit7W3XqNyUyjgMzBUN87fKU3wFLV49jwCZVjtrtVrWh4iNMhXjVa97QrM3qRkRBK9zXQCpvAL",
  "key32": "3dXZvix16icauVoqBZiGAaAdqxRV3tbhBzUTbRoM94JSJYoqm3JdESvpqrQq8PvzHMi6rYjsT4WdotKExBXTzFm8",
  "key33": "SokY8obNJ3hxZ1SQ6QgWxqQ5hZjoi2Ts2jetwHUP5cvmw9V6onGMRF4fe6SJFQBTASxwYkU3ErYMsHKhR7iEuiq",
  "key34": "2V1pn7Rchet21jpLcviwtA3fputbDVHSJyMFE46YxRNdHbP8cMECRfv4PFZcAdZXuBqTQMhN6EPM5sYaJb981oSL"
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
