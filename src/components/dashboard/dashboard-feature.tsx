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
    "4jo7ePmJQ2dTZs8MMpvxkXxcG7zb1jdoUfTip3DYLLtLtdgUjaUfqSDkGbBVUBxU35iHzsEu92UK9h25Y8Jo86Kq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ABR1qsqzYsAvNL6DsCmWiFqnRJJfJ4eMu71Ahat4Vzf5x96XBcYG77YCxNMAKdrgzT2fhppyjQCGT2fR4ij5dSm",
  "key1": "258j4GJuJizN8tZyepDJ7RKNW2PpWjGHEzw82T3sxQvWM3PiEDSKntx2aWVwsumaQQu8nozhcSQ5JXcC4u3FxX9C",
  "key2": "5MreR7E9AknhBx14zrzxWUxVauVtnAE28aJB26ojTTUJfqWrPbn1E2UV4P6udnhohy1mt6MLhN4841raFcs4JPbL",
  "key3": "5FcsSjXNorJmC2pD4pUgDi5r1n6D5UZjLwzpyFriTLspcZrsU8YNtaYFwS8v2xRD6ndidr7zgzc75qSJ5j4asZW6",
  "key4": "5nYdwyVQcJr5fggcKVuUjoAcEvcS7zHxdrvoxUMsYdwpCsD6LizBpvampYgzyX4ATCrs7dKxSy4wDXm2e2ZKYWV1",
  "key5": "5vzff1savmC5TJWxtJY9t1Ni1b7BciuQi8Z9VKVq9x42UPH9GxSpVtfgcQtd4on4ViCRJL1TVZ6uQZZwhssPWsBf",
  "key6": "4fVEEorbt1L2TutnNW9hYu6m7tKgj3wYZ9jGRzVpLsR7JJAg2QsGtKwZBtrS6cYpCicpJGAPmtgG622rGQVX8VMT",
  "key7": "4uh5AcfV4S8XUL9S26DxGMLSyM8znj3CfV5X9PyW2VLqAychfiVtYU4GTNunXJSKuUNtGiGPiPyWmHz3zXAPUWKB",
  "key8": "4hWPGqz9kYJy5VpAfPMF8JaJ7KLaQ3V2Cx2rkTW1L8LkYv7kw4vqCnhjH4VzcNmt1uXGgo8C3VSjMgguvtXgsf6s",
  "key9": "4cZn2qERUkYXUCEfUrFtnjGtAVCgCgd1sKnY5eaZxr62ovaKuyJ4L4bAaUZQEv8b6cxTyKktbV8m6UfJuog1FXCM",
  "key10": "3aM4Rr4jTGhqaQzSH9RiSN3BBMrgpn7788N79xCse2CH4yCUJu8tFzQwuCxd2sNsDrUkqjfczvmUmdvmoMotwxqc",
  "key11": "5SP3iqSbzLpRKUFMusuPuC8JpE7LMTHep2tQjXKEUfqigb98TbvJNPbGkZLY61YzDv4ZGBDm19DoAtxfzmL4nKFx",
  "key12": "3zMTCUE3AVVJN9vCCwJJaQvVt6dAkgBCAxLfezjQkhWBkq5bjAcjG38JhiN9AP1kS2KfgSPFPRkHBFzmE2NGbmkr",
  "key13": "3zHV7iWg84JJ8R6wvBbxKLkavybcA84qYnrPrjFusEWq1SXV4QEVw4RzZ8uWYm3DvNTteAhVRyoFCdSmABoJWpRx",
  "key14": "9Xzki1ajMmmWSGbVbss1jFjZhj3C8aWYrHgAqC4nGSsXQRNaHZuYjyaj4NJA6CbXT1DFZ7DqRBhoEKLaXYzXN32",
  "key15": "2JbEyXerd5CKJBUtiUkxtnBcZhyA3cvzgzpQYuFMFirTcbZhCy29RmfqmbvjVddPLEbbESY1sTF3wJST6RqEiBYK",
  "key16": "5j9hi6EddnEbdS35ixdxALev6twXCFUzKrNBzbWVjkUvWebnjqoNvBnDLNZKAzpYvVHnSbc9WnZAaehShzyMo2TV",
  "key17": "N7vxdHt9Zj4PBeNJJo47vRJPkJwgSHVpBPkQvtcFo5RT3YnTKqPoBq1gjpRvC7Dci1a7ymwtMwJee1jBkv5MTA9",
  "key18": "3Lezipay9PVFh66c9k4YLveuiJskvenhLDJwvm4ZkfnW3BAotSjaW9jmocVKP34s5bDGQn2m81cLnb8WB54WwcY6",
  "key19": "2ib4RmW6wddJfJVB5nLGvSUJsQKh4zCPHEqXCnujzNyAu2hWftbsbb2Y9ZUJTc3vhPXc1A2LW9fthzpxRWthSrFK",
  "key20": "2B8CRj5rnF3F5nJEJxef1y8yjev9cAMTZz59cJthg8faMDPNxdsg3wxVo5UGPHgtCux5NWyFUE8W2LQx1RfC2HnS",
  "key21": "7mpQHhTyvqc7ej62YWnnF8abvnbqCHkgCG47fiSyYhkL7dNzK5AKqzVGaTopxdNMzhDDW4jeSyCnZhQxDZ3QaqW",
  "key22": "5ot8BxmcdxQ9MzUjo2Ti4tr2Vw1Bgm83f2bU16LNmpgGu4tKB3Zxt1sLT8F62NbC6rFYD5yMvih94gTp2SyT1qXs",
  "key23": "2ezXRZTPWLSBhPfCPX8qymZsC24FrVekemoz3Vw2yFJYy7S1FqQ5epVNR5pHkHfU54xiDay7xfhC1ye7K2qz8yje",
  "key24": "K9i1UiT4msXDQ4viiLJFN5g9wDpZZVVGzSSFbHKVDpG7bV5RLuSmizds1PHqybEnuNSczEhDnGANzbdNTkb8Tts",
  "key25": "4REJBxSiB9JoL5jb1k4VpjQGZpWUWyaJ5jAQ6noGwi42LR6fHCwT3kzeKV9yPeg6YT7vWEFMWhBWdApbLMpHFwf1",
  "key26": "3aXiQJNWFmiHT1LNRjpnnYqCAxcNaFVr3znEfrD75iYxUh8XNPXbRE8QEVRCBCdMHtjsEvxoPMYSDw82mX6GwCM",
  "key27": "4rGdK8yH96UPQNvncamAKcc9hKBxeFbqSSSqgyfW38G3rkW3MWrPL5KdvDXHa5TLVYCYEi9cAT8VpYhL7EjbLhA8",
  "key28": "2LJRY5JohxZ4FV5pjwCtoVzAVDSk44kMVAkBNG8LCu4x44qsNkAszvbAiKTeMVHgYCM48Z1ui8QXA8AFHGqck7ur",
  "key29": "o75nEXP5dsvKR56YVzAxJGBr2oSL7ZkS2HZNsnR7L3rg6jLLxa9weozMyt2ddLDJw6nYvQG9MM4FJrKcibQaYGY",
  "key30": "XHXusa2V157d2w93jYrpqEHg2u8XDg8sGNP7rZqg5jhLGomdYnqtpH9HDKPkr7Uw6axQaEbG3U4ZZnkcEnPRNKV",
  "key31": "ux9R59zZJE1W99sHjnJGGH3pyYSYuhxg3pAaWTn3gbJ1NUmZBeVcDtei1jt2oi2jciWfin4C54Nji4LT23SsVAo",
  "key32": "2JhMk6UwLzS9SsyJjSVng7XdhPbUoZgrXEPp19Z1pqNo47z84cB7wpD46GXTUoj4eaCyrWNH4hwzGBYi4MtKbDxf",
  "key33": "c5BXwDVxNJXmG6QsNKpMS7hoV5qJX57Ur1XfF8m64b9hPEFVPWhqHpfizQjYXY9vEYrqmPpeJ9WfLLx4XuQvnvE",
  "key34": "3ewgUqhfHwNgj3XaxT47cKa9P3avXwi7DebNQbsF9uEjpCvzY5nX37a6BqyUX3hmEubE4GwYa25qcgHTFcvSZD8r",
  "key35": "wBE7e2MkyBA4EdoT1RQSgTn9DkAz5sZr619BUQewtZnKbFKAQNQS6gtf4g6xwKt9SzFBrrgZoGLYeNXuHNVuJ1R",
  "key36": "4bUytr5eeuL9dS8EcyBYoWnYbXEXYocbptHYXeSEE3pwnNM4iKtW5qMEKnj3fZ6xHhKhaW8UEuK75iMzUHFrZGs6",
  "key37": "MwGpvfMUBqhJZrpP5EpG7BAdKbJNZWg7dAYQNaYgzf6riGXhcP2yt4PSnn9LZwoy45r49ustsZd66mCYP3HR2Fk",
  "key38": "3iQeMzSWJLNnDm61ztdBWp2BftSdcVug2ej4NysWMGGsXPQziJ76Qi731nMawrg2sqENW1yp6ZDL4SyGDDwCNZZZ",
  "key39": "5SgyzoScM9PgCvd6pDCx6bgDGLiFAoGnXchBzc7B2BgaLRUYAoH99c8Px7WLMwthKASsDbRfxNvYe5HAhi9GRBD1",
  "key40": "3RkvA6B3tq4mD933xYmj2fGXmihkFLQjdx2dKewKoMiybbvyvWA8BXpvFFviwAMLvcnzsEcEE9Sk6HTpyTpAXhuE",
  "key41": "5nFjGiUsWsw7C8ifys2gPpntEhoN2n3M2BNFyFQM4Af1WcXwrL7U9kGnDMQp45bBFmpJPBUaqSZXubrAYCiWGJMh",
  "key42": "H42i1BWGmARU77gCtZ2FgNnBGYmjbQcSbcvRSq9aJeW4iR9RhM64P2HpB68ZjEQj9wdnggagFqct8AZ21HCw84z"
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
