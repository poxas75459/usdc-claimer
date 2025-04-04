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
    "2Jho8K9a118wuQjvfR2Sa8DAR1sHZpTKHmL3CQW1wsn49j8yK2GSrmkqVkQa73TTqWFL1W8KDQy9MKnKA3wuxZgT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XGPGArDUnMfw7gKU6wyQwQ4yXPwtRLhkBEzfZYHK6s8rX4JxwwXTiCGkkxJAKmHeLTUvLUoTXRnmC76NvqUUQNd",
  "key1": "3krmfULaof7i3eKCtP9uc8KnCCgJ189XuDrDLShGUCNVdRWVLqr9gZjx6G4niYy6oo9pUU1P4Q5kTmVsifvg8r5L",
  "key2": "565mPGk6rZgyfv8WZ5xMeMgfjgcro3Wjnkv23vdbnRChLz3JMVe8GB6SbHdKUwJz5nicrYiKuaxsqvcy9NKAPDUh",
  "key3": "4f7uTrcxrGwtq9yrxNQuzDdTzDjf4WpwUhpEVWxffDetnZ8zKPXMy9aVKBQXJ4VrwF7nFu9fcSqkvDyjKGsocTpt",
  "key4": "5zvDGo41hEiayyj1jTXSus8xQrSEVbGqnJwfZNqsyzobPtFyDFLVafQNJ7obYPcpmiX82uggBaLHmeBNi6dTwuUb",
  "key5": "5gDsFmSfB7zuPX7aDU7PPP8oBMC122Jvf8r44UajDgZMQhoW7S7vRT7bn1M6BoNMGnFvcatbuVXPaTzdtB2H4oUZ",
  "key6": "2WeHhGFmZ47cTRJGzvVYfJEobosEaDzhsEMMLZjdxpN1pUPamY8pNMjajBXt5RmGCcAHvo6w83DbHN6zAVBgrSDS",
  "key7": "2nomXbs6T6UfQvTxLaVinueFzVaSbmzGmJ34RFTt43i1ApD4D3BNXgNpdpKM3uHdPfkM2PxiBgX8cvASdLbDkDRt",
  "key8": "2VLhrsEQcSxRKmeaEKzn2k3Tbwc9kQoQGWWqJ9rhHxnskk7VMsWz5n33k11D9rbQBy3iWRKE8kHxShM8pHAakRik",
  "key9": "59B7b43sHLBkaEYWGT6vvWLqtLuFBJwu99LhJVyfvjzs9dstY7KaTahQ3RVEtkGYF1mP4r6B4y4V22Kar8rNFPYW",
  "key10": "DwK9omB5HNovkf164uABwPK3knzukmDCeFQ2fLSLxYYUM7wqVCpNFVdvTkDyBLXXJmYDMReHqzgKsy4UhbBHdGd",
  "key11": "4UL59ShPiuisj9ckBDATy2sQ4hq8wiofzfeaNKPzji56D69NhicgSN1gRzuSyTCzueAV3WvbatnSZwSCbkD23MPp",
  "key12": "2z9hYzE3PBgCNdyexDyXhUwVDbZYKNgs8StJcKEwEiQK1xeR72kPqx8pzxy7exKjzuRxSNs4dzjmB9PXGoT8nmtz",
  "key13": "4Gv7FVUYFfmG2UwiNk1RMZVja1BbjiehKCEgLSsogec2Zsp8jirZAB2zJ13vqFseyaneTD9pq7Z1tLa5a6Q5zeoU",
  "key14": "4xU9iKFCGGAPdSUPZBPgNmt99rK9AUSUsebgnHacxs5Dhe6T1QqE7HvtjjxsrgewrnQJCzzYUAZLd6Saof4qMBqy",
  "key15": "3rxGdqDM2g5ny9HuKBVSG5K2dX6WNb9aHVYvAsr46D4nPSRHTFgay8xJqrboa8tf72595vEsZZjQut9W7rjW3X8y",
  "key16": "3w8R3kr732x6hrpfVGppAnwPcrLYYfivNnq3BA6ZFeUJJQyvWpCtiUTn26cHpAkZTm2BYYorng6snLa4vMyLvVmA",
  "key17": "mugz58WehAMx8LgBUGdLiHjQ2jqpXXd5WvpAe9PWu4LxxpMR61SGLYhc4hdewg1D3ZpckuET7mgXRFiB4FfAVfs",
  "key18": "fSgr3AbGnsGorTEnc99ntQ3vxdCtmc87eNLA7gVQTB73y35RCYeSzyWQR2FvgEimaJ4edLBVXz5wThZDzNf2J1Y",
  "key19": "HfbGGgiTHg3BvFfunFBe5NhnPoeat8bAeoJVKQLVK2RD6GmYSuzahU3tbnxRE2W2TS375ZvrfokoB57Ez57S8ux",
  "key20": "21ToTqAskzWqavQ7wyCP5p96sQsvFJCdnunFx2gbftc8bBazvKVanxo27j7jEsnSNoqpZLPGKwD3iAVxVGebtp6A",
  "key21": "3VUoWnvesaV6MwLS8kW93rSKw5NZJ2bB82HyrK12x6Msr9E2qTuvti7XmmNgXFKWRLEaQRyS5uGbRkNniEJYW9oq",
  "key22": "V3YGLpxxA9BdWMDYLn3QYvT9G7p9LmsLLUNhY85Y165dMdBQA5npWuoyW81CneNRuZ96Let5QriAgxtXsKEZq1v",
  "key23": "21NvokPmnfKg766169XD6ReJzy7JJH9ayw3pAgK3o6LyffNn6f6EhCHZ15ECvn4fZAkYbuiYtSts93YWDWbdmEGW",
  "key24": "59PYxtYkaLNYhrD8rxy8QDeHectZgAhh756cBjXuJ9VfKouXcDDmeMLHQZGuuhcKJpz9LghC96dD7xzusgpyb7q5",
  "key25": "3WkoUT3zLzVHGW9fvfTLmzC48SYrffi157b4qoC24ABeRSEFx7mPy3KPBywhQbZnL9G7EscE13aLKositzCkQ132",
  "key26": "43aTazT5TQmcCqqmVjjPJESavf32PZJ5Ds4UBYErvu5PhbQJY7mYm83gHnwSFtLwN9d2JjhbFy8mSmE4sMKFCYbG",
  "key27": "4HPAqPN6eP9egHbnm2yXBuGnnEREjnYW5A3TT5bjqgu4iCxjWanbVTAxgogHT9oQ5rUXNfBp59etZfBB5Qp83HER",
  "key28": "UVSo9G2HPTqZZT73h7Gj5vy9vzX7ognbYMdTjpNEB9qAcWmZveNFwymYG33uV3qsaQSfkby1ifUviWcDru46XzP",
  "key29": "WBF3zWKvPc5HyenWuETMW9XiPqPvJbjg3TQXtaWXhSXRVNaYRxwDwpMioMwGa25HfLYyttwTtQ7o5nXErdESvth",
  "key30": "e6d7PeFKrtJ8P1DYDTGExLctX6uGrZW33GfkAiDNZVexn66sURMxkG67svyFtegQLAyR4cSAo3CoE4YwmJrRAqx",
  "key31": "2YL4zsALNgFZWUoyQ8kaw2cCiGv2oFRnbah9NwbRAcErBtoW94aESC6HdwPWCzNEgP6VJCTxLtvSrcho7gU9udmQ",
  "key32": "2AjrU5KEyMAatjjaVXFJPvmHJ1wL1x3x69XdgpwkjaV2mBoJYrYjqzSyt4LjLKTb96Eu9REp6ytCXw2BRDVxskfw",
  "key33": "qPBktYt5iJiS91HbCWXR2f3svdnjXVaQ29MfBB8XMXwMrxmrBC6NUtqPTRhMrw6sE9ErY4aqrsRsBGgeXwoGhnR",
  "key34": "hncC1k4F5AYdhhWwkFthjhF8wnZWqnjraZMwERp89jK1bq2Tn8oJnpwtybg8E48Y2yhH1ZckqQJTTUNZivEFgBq",
  "key35": "4RQ3z9RbzVNcH5v4tVf5v1Rot7JQ5Fbe81W5oKTaSiV1ec8zWus2zDJ7X7dX4CeHuPoB93huRYrcBzvLfDMZ9ntK",
  "key36": "555pUM6qrSTkb5mbmWZbEU18bE5mytU6cNQMW9twGbumKNCdA8SqZYrPeRVKCZABLCKizUXy5aMVRFaV2E1iT835",
  "key37": "2NoKGUHzHBpFzJN1SvDuC7JHyoLuohc2cBWdKQjmoqJsnmLACd3RmcsMG596QZ39hKxesX11tqgSQaZjqrukHphN",
  "key38": "5EezDr3sHU5amh1dNaZ6f2xQc1uNtSM8fzmp3qhSN5xFuqAsPLBLA5a8MkwSXZ2hN2CW2LP9Qnyh53ygTfEepDr3",
  "key39": "64p3xcodn28v7guzLJHdeW1L35pxuZQkpvi2k3RT2iK5mVU59kKh9bcatX1odmj9ZUCWrSM8bwGCNAitgTx7SFn7",
  "key40": "kmsMHxV4nPX96BaBsKwCD7uwFLC4pziYQxs3BZ91bMDpqsr8Pm6FC9chLbnHFeRAyv1hQmhUmmhyZKQQVmCqJ8Y",
  "key41": "2MdeN6WtZcBG3HPCoJ6ahNg9Sjp43TMF6A3wiotZHQQfVUpPjaoQgbezT91mAxpN1GPvF5bcFvx1BzLLDXWAzkZg",
  "key42": "2cbvr4U6FyNeUiXoqsmcVzSHeLuhUSvgc7ocsomNEtPNu96VS65cPPeJG7psJ5nv94QSx2pguoQXovWc4rrhQuSc",
  "key43": "5jEN4GonLVoo16MYhkXQNppy5fq19f5rcj3uW3wySG8VpYnMWh9L7iZicN3yUcPUpKhDAR8REUyyskBeWsJWY2v8"
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
