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
    "2voi3sqosJfeSjLtoaCZFqwXgFm7Z4PpPmPXRkVAPFdemFkgWyji99t89KQDyt5QhquamuFVZ5Tcqnq7XytK3Li8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2mmz3kLAvQmHaKxEFiP8CoFjs3C7eHindqyhGyhvxW4BBGb7VoTFAnTgh5ftZDRhNbHKyn4fiV6k2ZQmHHNUBq",
  "key1": "628VUmwxFxnyUMKRDD8nfVBKtXU3w86CkNJPLRJGqxwoZey6oasTn89LYfK44LpvYJKGMKktyd7jsFTrEHjUKAj9",
  "key2": "3tYWVp86pXgsn383G7FpihCHS7rVQzZZq8U2zi8kATvTKw9vFLcTQiGBQ4sS7vVkNbLDG9A9ozC6eiccHHGBHkBp",
  "key3": "4hbYtvXkzFYWq9Mk7eLzCEBpUcyApiUKW62kJn3aE8gzwFrWJzuDYuwyZ72oQQybUueDsbEedndApKxGs56Mqrwb",
  "key4": "4EFKXBSr9rzCT96V3JwvEoa5yLAGm3mo5fpiAuS9XDyLafVe9ovBCDWVcpGs1PdZxLQktnFJfSDbBAomBPomFwHQ",
  "key5": "665UqbzLmike3G1ERADUv9cHcsFv8b5bgby325cXmzBzdeE831da1KNebqJkr5Wrxr88MaBwvSJY4936xmCf62BV",
  "key6": "1caAeder8PuKEvAJQstUYXMgR1FkbPKY2xrkMRG96VGowhMUXfrvdQGMskt4TrgBUmwNGwMSknA3oo9mC4nizKS",
  "key7": "41DKbGmQn78JpWcsb9LHiuqVeUZn1pzd4oKpv3c6jCirGRJSTb8WWuW4TfBTvvGfe8R5T69276FLTencrE5rVh5f",
  "key8": "2CEx4ALRQXZ8oyj7AdpyWxx5Pi56VrGRpaHvC6xEBZVsDQXyC2HB2EFbyXJSSbEo4FFLpk2HgRJmnWRwi5GB5yCC",
  "key9": "jY8CEgKt1grQDFdCMxugBQ577rUzy9ySi4dKTTU1tKkSUkrUeFti75iXHxPWLYcWtM8ikf4LaG3CBz7wsPHcVae",
  "key10": "4hBgYddTeFUdhXDU3pSzEvaaFrtRjXG19SSryZbQkAngg1BUeXbSZMDT2kh2aC7Wy9P9d5CguSscTGssm1wVAwVM",
  "key11": "5DiCnMq6AnM2W1XC1UzyKVJkDFCeJQv4R7sRCiUbMY3XHbZUqRMCpRbGbjQM8qEy7pCHdACmGJLRAVcmoCUPpjS3",
  "key12": "3wf45YFBsM1tVTveewLHUrzMGsUFpq37eoC5jJXXgyspovxQRVXWbp7j4xDRRDew4tX1QfY87Zr8QRU6NM3XsWRM",
  "key13": "8EtpGT6eDrJnobVH5YRDiB8pFDDqttsG9Cwpj2W3H4czZB3uGUSNknWJu3jjPJFCPVM2DWtXjXTj2N8E4B3KUeP",
  "key14": "3h2e1p5r4Jm9gtg6fNGHmVmR6rXVZYU9tX4DvuxXHaD1vCj8mboprnsHQCv2Tog1dUQ4sYjeyyvJe3sgMqmmuScu",
  "key15": "518UR7Q1vvQENqf6eYnVc6zgYFv7ZJ7ZdDoHGeJ3vG8nxjmJ7N9M6bGRAc2jcck18M3oK7G4bmHEdHJ4V8r1Uotq",
  "key16": "2dB2mWF4HkRZjw1vTtSKTp1HzninMAerGguUTW2y7a168y2jaAqBWFYmMX3e65AyQdXVshMCu3rgPoNV1yMGZhKq",
  "key17": "3RAC6CCreE3FS5D7tu8QCwALo9wBaPG74oZvSJeQv682BPDxBnwmq6ubVGAKVgooSPfVRobrZL5aibVRPrUf8iAq",
  "key18": "5cc5BnhT4RwUdZfvTCx3QyrH3rF2xKk9ivRPjbcS8RYDQHVXiH6UKinQZDNR5RVmWRBaQ7Tv1Zbfir68DMfhvKb6",
  "key19": "5nAFL8Db3DYb66eSBRqRW15cveybUf3w1Dy1Sgj5pxwcdA9jDQJJDJ3PBZLXqPKwZ37M5CF4WdeHhg8mLgR1p1Zh",
  "key20": "3GiY2yWFr98KyaVT38H845mSZpQcrGsXT1iqfiHF1DfVPjPGStVPe7iqgDXEqdfvrrW9PC4V97EagSeodade33s5",
  "key21": "2pqy2DyiBK8QusomJ5Q7RmdwveYqzUYY9DU7w62zXRto5ew7b9rcu62er59jLsMi3iy4RpeHNasoJ8JDpe4YKUbh",
  "key22": "5suJpVXroEfjsD41NL7oYvgyVuAVNwRX1FG8mfAV444HxsUBDRkt15uMKwpeDXRegwqdYGjs7wD7kiad5RqPX15k",
  "key23": "2pM9Sk3at2ymad8cns8J9vEs8tHpFbSid8dzANHjrPx7rQrPgeGShL6YAtTd1hzVU7UetLSDxfn79zLtpWGsKNP1",
  "key24": "XwVSP3beCByZUUaNEYwsj7Ywr3DwEzHNSUA2N4rnKpFbkb3szmRnRDoXDE4CfJLfmd9SiYZYyiAVbmsd4FcGH4Z",
  "key25": "5pm1MAmcL7psDZakPVnEVLiafNmHaPn1uWxCPdoACwduDmu6pruUaRS212hMac2D5Q881gQdiNo6jjWjJyF2Yf4p",
  "key26": "2AUD6shkYDBc3cztfqQDochkj6r5CdC249NcvPnn1HLJxPWEjyaouv4hW4eMjUuUGHnTP7tBVyouhhgE4p323BTZ",
  "key27": "29Gwp232i6L2SFDjB4w7PoTAo7QJvBteVUzBham4j5kHJzwJVXsnUgguqrayQd4KCF7MTouvJWox4AxofyqcxwG5",
  "key28": "5hhADbrRZH4NRAvWSKcBF2xeSHXsC27YfNQTHCs27BirgyM3nHzf2HXCEZZoiUbBPFhRZisodXmZqsVNRscqFDSq",
  "key29": "bMgFPejsWWGZ3Tfbdmfmpdv6MrWwk37HUmwShgnbQyELmMUFevLESc7hzuLxrasByMr4w2pWxTjEqGPVfeTmdmw",
  "key30": "2F5TF4QBUrdpCdRi1a774brGBLmoNn65Wa2gLJKcwLHsgqUkUCp4vsDTnNicN7EyyV1ZUxCfVvWj4noZSFqHQNt",
  "key31": "5qgUootGzM6AkE59SxuZCFF4zs5E2L7u8v7iRWNybzz38TFzq3Br6MjYQJgtjfWjk5U2eskAtQ2rvxrzcZRsqzH7",
  "key32": "3DCEXT3eFKosGdJPmXbVQHa8D1zKjeUuVtPQbeuwpPUhiprnDcLK7MDgn3cVFRjihvzhwuYKUQEptNxq9VRv2a77",
  "key33": "2atTSeKX77udt68csKfdek6zpmW6oRmduCV75E5ToqnwcmM28KZNmHtanwHAZvV2VDqPwSjhcJ5tZTcB3j1CoAYv",
  "key34": "2MmJznyY44WCCaPQHJK8386ZCUoV4Z4cJp1MZevpaC1w47DMFzbAGtLenPopgmuh1SKSu462qmuRXendEpXDq2aJ",
  "key35": "x2gsaqJ8nsLP3XrztM5fWKjznQ1adMWRhPKFguAJj5PCfqYj3DHNuyWqULpmUBFLftn2tjBaAHZgTP1vSsVj7oo",
  "key36": "2bRk7mW5YuZJ38p8baHbuKzzMibiiF25i8UisoLXbUbE66F1hoZCZRSVDZ7bjqAs1NK3KSvL1LphaVbu82y8FaVo",
  "key37": "4Dmmzaed8E6B88SX78vJZNSpZwStVMkmeZqmuHULt2PGCukuKWZk8CtYdga6pb4t5nzLrJuNwHjc6WZDBXiNSydc",
  "key38": "5YSbeHrxr9u8WkJ8oEdHu2pBnXDvL3wkpUXMJ6yW811PfN3LMKvoPbrvg1sk2dMwjzKjy1CsNBpmPFio9DBicAUo",
  "key39": "2kx3Qm9AFiwm6cqxsaeGmSzM5WBM7dy6DxeVHfR3LLFNG4qC6wxKhb5SeGLpkNyooaJX3bnsVmTJqct9GjNgHa2c",
  "key40": "3TmhFWyEWnv8deC3xV39QRE6dQajsEAzVhvDcNPeyCv1gorbHmnNFuvDLKWiPN7vEE3RFuyN1VYxfbzQu6dpaPw5",
  "key41": "2t15KDXYPshnqJPxynyMuoWcUyc1WMRVKq3dtom1WwY6kVyzy847QHkyRNxs5SywSLcGyboYztEsnPuivh8Vs9vF",
  "key42": "4PuFD7gUcNp7TTnx2YGoxjF5oLFSxyaeTMmN5n3z3an68RYqLrD6mHWG8pMdFshT8tktrCg5oqSwo1mV3oEA28Pb",
  "key43": "5ecHaFM4VKCYegc1BpbB3SPnS1XXkxakTYUXxBknfaoRdFQBqhSvt3YLqRCD8xzU7pYZvVXssSfqACtxJXaqKu7T",
  "key44": "2qEDWkCKs8gtBMCcfPV2WrwuLGaUSTPKJHvBRkrc8hKg4uAU8Htp62ePiZdLg5NvC1veJWktRd3dNcXjnFYEm1ta",
  "key45": "334ryUcFLd5XXLyAYgGzwqRtXwx4tAKSHEzmX9Yo8xaMMgsurnyuNLLtLSAETVBpMC34GGs15YH9Kbf1UUNB7sny"
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
