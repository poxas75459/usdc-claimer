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
    "5mUe19RFJc2hzQATt9LZHZ2j5nKJwW4FBgcUUBew5jYmLbVjkbR1LfRzoc4LMCK7Hw2uTreWsPuBDVWeRJBbpmPz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LLoJwzFApdxmEz5mZ5hAmmcLixug4rqUG2kCH6fotsGxMn5LePXS8GBYEB1otRPmjNMSpvmLjj8pQvTQoiP9r3x",
  "key1": "41q8wDdjybooPjnRswunkQiTVnYR2wWXoZ4KLhADonz9mHq8T659nkQNmhDWkWpZxnJnESJFXu4gdPWyrvwqVw3y",
  "key2": "QUaVssZTqVbrp4WUzebAcyjQA5AJnvT8JH1NADAxTT5mJCoskAdCFNdvwJpwUgPeznjvCb5coiMQoQry8zmf6o1",
  "key3": "47Y8dZChnXUrLV9rXSqYqyxv4jKuNbgxYmrNvtnXyahF9xWNfLUMywayUkGAR28sWnsc4X7HVTgYJU1vSaXPsYaN",
  "key4": "jBKUQYbXy4dqRJq6wmTS9GT5bEDbKsGGLKiKqwxFPwoV3Ah9Qz7vaVQwdcqfanNnPMiqGsV5jJNSy4TanY4yQnj",
  "key5": "BSYW4H4M6at2eVb34ca5zCctuyixPmRNzySriQScA4dDdXxca9XiV9jkFcX8eYVkebkCAvUJLtbThvRLPFBgFvg",
  "key6": "4UTscpwCwbZB8DmkrYmw7EMTH2ouDsogZ2w8mfyQFGZrxX5WuRqqXe4d19wmnDUBCtBdqTrra9FTQVSmMYVWcX2J",
  "key7": "29Kt8sQSeiifBteoG4UALNcWnkWBiLtUa5sZ86qVD8cekeXyTaxDmdWBhUTNTEXSfHmijjTmcPU73afR79oo9cit",
  "key8": "3TikheCw9rJCazapK86qzZZo42xQA5RmYVvmgaA3DcCHntraULiSKHetjnGc92pPxEc7RHGCaL4rem9mWuEv13RJ",
  "key9": "4BztctNhBcLTJF7Y6jn3JUAQoRCAfnZCcxmntUQKRpB6pcBWNbxEgx8XKKFeCXztqagLFNf26oQc27KTzGJsSy6T",
  "key10": "2k4AU3ejKGztU8h8CKnQTFFPHhDtzcyLVeMis3AsaYrm7aC8gReecsiVc4KAv6Rm7hGdFMAvAcr3Uvu2KrZ53A1h",
  "key11": "Hsj9XoWCkaHCb4Q1nUzpQQQD8opoMw5WpHs22CCaMbyosZQgZJbfMfXGkqWpTSbZJo37E32XrzbmmjMFaH9Hzbh",
  "key12": "64mG2wWQykixiw2nWVSTYtABQcc8AQubyJeQTespw4LtuWCmKMzd9XUjYFcqhCvSuyv2VutdfN4RQL9zCfk2kupv",
  "key13": "3ymhWdZK82uQBcb453yj2KZWqrA1CQ6qkmndKvNyYSpfXJpCxwK4jv6SyWdgcRVGDjQnJsEQs2hp1G1bUeH7DFyq",
  "key14": "3RyCTgGz3VtnDGPJfdKXoH1RLwkYQ11s3Rr7Wof8nMJZvWktpZDrGU7kwssP48qaGBBxc4Wecxe6ZnUwuYSzevSt",
  "key15": "5rzvNBmjEQecPRokheiTVQQhMz5ekKwsSmB2P65PAKUVafVnnbJ3EMb5zfdFv9Q8b8Hm9PNaDDF6pSnvLUY7EQsv",
  "key16": "3qhbWknbHVaNSMBQhuKRCtss1kH7wizUUA5YftgVWcr1uut3TyQoK98vndP3mpd7Gmy6PXsgsvWJTKyQcFHV4kZC",
  "key17": "66kTHcSJV7ZrDa4gdM7bPLTaFsqgKaHDSdJUL55BqtGowjEgFuw8ZN13EVt8GSWZujHipUgHN2pqTuSgUqMRLdxx",
  "key18": "5oZ56BPBHpQEgn4j9ztx529TqhqLHFN3yN9FcA8cL6vFJWTikmLDRWyc7hN6H7WuCGWsZiBD7LGw7c5qYMsdQGLb",
  "key19": "34s4qnksB7JDZ2T9xbbXHRtbfBnuvD3QTZQ5AKzJJrfgEzyUmVw6seJSJ1SpjsJZQxAaFkDC3VqtPJ2rGCEiMPtz",
  "key20": "2vFGVEWSL8eJe96zcCqJwgFwrTvKhNqm5yevkdgQdadnCvKaFM7zsbz3uukmXz5rqLVCXhytAhptpaHm4rMUdtvX",
  "key21": "3JPefyF4sq5DEbkzq4if4gWwWpV69Q1WdUH1YaWZmQYpQp9CtswEK5srT9XR2fjJKMXwf7RDoL2e8uiF4VGjFzzn",
  "key22": "39qykmTPfJ5jPuocEcy3knXN3yVf6hN84M4dA9FKLR5NEUvfhwYGpkQKzwMGN3qZK58z3uZAA7ayfJgzRQShSh68",
  "key23": "2aXbWfoVHtYt5gZQcQTeCeNNQ3X4qaeMoS2HcYygvxHZ25SM2rqxZSsFuvFSuZiwiPZrvb7SW6AeGVy8WEdiSPuK",
  "key24": "34ocjncGK6AETY4UPSn7LUo8AesTboCYNYV1HuPdm3UJHt8yvcmuRoenUgpcTi7yfDkKhfh7PpHe5ep49DnfAJgK",
  "key25": "4xQXqcx3wbdecxdGTXr6YSWyWck7sUsNXLZX9yhWhYDJne7eamDACGS1wkciVer1jNRYYAuznkYM2AcHgWqsGtZa",
  "key26": "2f2g6gGaiL1o94jHxvwFxzqERFZQyxyPry7rFCM4oK2eMfb5GAAQyGQszGrvoTozVPXVXLQnBfcWuFrmpgvNpZgX",
  "key27": "2WDjLJan9yhB9Y2wbVhUJskLU6ZMajAfKcz4ajXMfHsJoHF6VmnRisT6h73dZ6unrUhPo2tyRcFXV97w3wxuGyeN",
  "key28": "SxC3pq287aYVf7HPdw1L7jQCwXwTzxZssF1zVeoywZS7PLs5iNutPUuSPsaKPYmzmJSTspF2JtnmDqvhGGZvkWR",
  "key29": "3ACWo4KgtuMjRCca62yoYGzRF99XpU7TaH6M4vfnJFEHx1gSwdFGnxnShrAQEaoXCjwZcaPEd3AW8ypCdAF5Rt9k",
  "key30": "2fbu1xRGKXabWxEsqRSzs7vb3jah1VzNbFaD12QtyXQha6DazibJM5XnF9thhAsnC8LdVYBp16ddN5pjt2ktYsMX",
  "key31": "k1z8RNkjVoLJLUPUziEgC55xP9zMnsVGNHGuXyLCtb66aGWmSvyvpAowzjTEMPBbtdmZJVPQzHMNtushr3NnfoX",
  "key32": "uiMP9SeR2iT55MeC1t1tEvT8GVbWCiVpCPUDYegPSYPusfnrv6ZDqkSmLYVwHAHoQHAt8s19ZpfMwyRvqRDYdeh",
  "key33": "2fScWyda7F6S68SWVkWaH9NxyY6JfxGnZqtrQGwQFXhePxgWigq1v8c4G3ER2eSJy3JwiBFJAwgB3rXVcszMnQM8",
  "key34": "2FitNSTpoQwaXivLAbNZBHC7W8kpazgd3HD7QWvjn5bDRWt7YAJRT8LohRt6WerTwDawWS7vydsuH6UaMH4fJwNa",
  "key35": "2qH5rTkNDDwPxZTQ8o9LtJDVi8GXMwjk3rKByJqYdA4jqT13V2ZcLqeim6kLKbJXwkcasbMqXW3Fz3tFws7n9fZN",
  "key36": "34L3A1XQpHNSyMQXNkcjGTMRX6T7uZxoiV5F4D6oZqckZcifNPj8ZWxR2jBquh4ycX7eNQCgobcdkJ118QpxfYeD",
  "key37": "5Hr8K219MtCbKgTnB4uRUop2JicVQor3uCPECFoFLdM9jro8CDYnJmJJcLDmiixQemHieSPWtThWoqnhECQvPQyn",
  "key38": "573sX2chRuDdeSQdUhCJHSwuZwTeA9Wvo4WgULkfWuCQMgWf2xF2E781D8TZkNTqfqz7dLEkmcv6RzVXVDhz2fng",
  "key39": "4ZgJJRLmL4E7xGSR3vzE9Ev4onVxYLdiCyzWxx5DN1PrnuL5HoD6tr2w2rTY6azKJ1uTyKTTfZXQ65hz9QeUG9ZM",
  "key40": "54jyDBx7CzSXvbXjABMuoKwHxtSVoNxxs3tB9votNn87PPcSETDjKRrVRNMqLnDnZX5iDfJ2E8YzEDKb9apPD1RE",
  "key41": "TcW3WZ2HrjQ817i1iWQZNC2FN6MNbtwUzKuLk7jym993A93yLvxqEUtxzT59zMSY4JZU6aXSw15uBN1VJALHSjC",
  "key42": "uu6UVCBajN4jAkrsNJEx2wDCtCZtQDKmHLdhfjJXAAmWxX1B1VohcHXhZLy2dfoai1h3PatVLJCAm1ZsyJ3weRx",
  "key43": "2KAr7stdUEthx3LqBQR1XuBQfpJqsRf4a8kxSU9QmFvg8A8wSpAnyzQHcWCKG6LBKDUY4LpmGy7EgSuQ3uQZuZTB",
  "key44": "5ikrU25Lm1BgrcSb79tHzEcpRdjbWzVNDc5QbM7XbAZw6wbgaESGdYPwsChiX2Vny7WN5AYLkfdAgbkdRXiCa7T4"
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
