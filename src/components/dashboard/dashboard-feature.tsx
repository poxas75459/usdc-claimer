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
    "2dmNp2ihfV8TRG3pgR3SJK8wHuArLNVyxRd3N6YGTntv3A4rD4tsmSxquimAs99nF6T9EummwojdwQQSQfV6pwHZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WA6hEdk8orRGiA9GvvJs2w2YHx35PtkD2FSNV7skH87iQvVDqM76etqprhtAitmTuTDc99AtiMhKPHSZpkyVpxr",
  "key1": "2weYGj4k5d2vgvYjzzvzXPk25Bi5P1LBEJ2RzKPzHrzRZLuApXjy4tagmuXCPo91mzE7dsCYvYbM1Jj2Q1L5m8ba",
  "key2": "4Qr1zTuZF5JJfkWSgJGoQzen1RDwCdrCe559fLRyFwTTGNQF9U7SNWypWti3YiyEyH6QRpoAJjSgmRNeo8Fui6Do",
  "key3": "2W52dTpX7xQRW3569H3VhSr4mMtzmwX6wpQCptoE9KfG6vCWRVR5Nd2GdBhkAtA9woJYtUNRKKx5hXd9aPshfWvm",
  "key4": "8cGHrBMfDJoEVYGFtNpkGuNk3CaYyyZ4Ui3YsBUVXvaJ6wqGb4S4HHARAHYbwtb2NqSQ4WRyruBsgoqdq5tDKBZ",
  "key5": "5t5ojA5enM9cBxu4pQzWZjbsYZ1MgjRRwf2TjBnViwDKh3P1HM6CLdwavaJ1bBjSUGmvWerJLF8BWysF1iGcgzA9",
  "key6": "5YWLxVwTTDunrruuKDuk1f4SC5vURANcJUkRnBKtYa91mNdvXDEWaoFJAfsFxvbmu8765M58dXJbEkizjdYqp8Rc",
  "key7": "49omW4KXJxQ3uGTV3DJ5sQaVo7HScjRMCSHAwU9PD83orrrFZZwiCn5bVvDE9Y6bDvBzkceKfpRb2rZRVqP51LWo",
  "key8": "5pDkWJKyEZjpmYQHrGkRFnMFEfMMiJ9Puta5Y45tBy3MuSgZz4uBTCvzAtAYFzxfVjN2UDTt7mdcKPy8iHPYxgdH",
  "key9": "3eSfhtNekhZRWYJZ2qSCPeytoYdKcZ8gnskCdsuU95aMozAujJwPpUSqTcbeHXJBvBwEdQwg31yyM2ev4mq4zrRV",
  "key10": "Kz4kuXkazpS3414rxLW1VTKLNZ8VYaZMJGsgcb6u36xmebDTZwySM5UJyS7kwbxoankYvptEcXigboJGC4nw1K8",
  "key11": "4jPfTsxd5U2oGFkx3zTuBM174KBG2MiWuJQBZ18qPQani7c4YsPtXDSwhNn8KU77UxMLpGMkwcsxED839iByQavP",
  "key12": "3tUwi2j6PqYinr8bzzbX4Cx7e3rfg2yaYKME3H2rfoh1jhX8ETCwLepJC2ayCEuMyHusvpY2QAuZK3A4rTUjiR4s",
  "key13": "5yTz7PRBx9ERy8u9yFEdHFvn4mvtMyd8RoozyPxxF8XLPSCFJToB6pFkR9xmhty5WTzmTcGeaDrWsvnG4NKgXrYJ",
  "key14": "4L7g9pjNdYS8pniY5ys4jw1W8GkkcYk7DCaWHBWzs63yW5FPnUT9oSyayMaQdK5P7rirrT8yUEF1d3Ga3urfk732",
  "key15": "5QekGKaSgw4eTKfUh1hkHsKKKX9nXTALqJtsWPs8td6R7PTdZDCAgwEhnwXH9iBPw7tXZzRGUNu4sdHwraE5Eahn",
  "key16": "KdSqeFUY8phQZxQ73ZytowDHyPTnUj1wYGbWmCebk1X2YBjxoGfdgWqMZmRcUQ9QFrLgpwdecUHnxg5fzKxeSHu",
  "key17": "6zQpBUrzAzfJurqiZ1VR5yf7aHqdx4dRBrvEaRk6dwpAQtFfau72iKZvxeV4PMESQTyKEobGSoYUuFXiwjpq1As",
  "key18": "hug4fAYkBqYTWLPA1cJbD5bZJX7LfFT8L1CvCsDzMAy23sNE6nMZCjt4t8TbUy7KH8W9cq9kp4xZxpyg8PUsrwi",
  "key19": "DQqFp8VvdGyx4MzHCxzFm1y4ggn1DPFuTqDuXjxSDAjV3ZqUCwqDG5aqama7yakCREa1XYTLULW3t761X6tvUyq",
  "key20": "3KpxqhCAGBYemfNq5zA7RhCk6nNGM9jQf5JjqxqkmdkFbXURoLXrkaBjCejeiMcCutZy3r1yCu4usKXXBgz8MCg4",
  "key21": "2R9e1hs3BAUUZ3dLuNDhWPHhrvUdoTVfZuPzbK4MSTsG27NbKfwKw2RgdK6FMYLjSMv5LYdaVPVJEJh9dRp1YWk6",
  "key22": "Bswp8a5RZ4vPqo2YkpvaqdpVtz1QYt65PgDGjPMdF726znc2r6ZU4Z9rnZzkgZLutEr1oQH2CGYGiaXFgd3EDpY",
  "key23": "juGNon6BjPv3EMHowkmCa89sLNSJ6odWGV6sKLFbZcCeqp4LhY5L43Ad96PWAKSHoW39UhZZiYcaPSUheKeYAri",
  "key24": "5qcQo5PGGs39CM58RymLHDoQz7EXei7ZuteTRayDMPjayCkF5Mq6Gs6kv72N2dyViCTQ5dBaHj6wZemCBfey7GrY",
  "key25": "5Pb17zTW7e1v4wYvNTZb6AvcbiamWqApnuLsYMWMnZZsmaKGmuRzf9XNuy7jhXG7FkyyGDNP6o5EhzXemKUaNeTS",
  "key26": "3Pb6Ca4feFWJxU63TEfBmiDTFgtmTzxz7yZRBMhZpaeAzQfaSBidBc1aSjv6n44sHQaGzJzPdtPz4QmNDimiQjz3",
  "key27": "2QB345beBTERbeEh1XAwqEUnKC1oDVhMo36bNnwMs8VBRKd43XbtaL6M3pWyZYxea4eMkbUgzw9t3SF3WcQGJQ2P",
  "key28": "3uiPR2rmeVJst17P3eF2i4TdoDxS9iu1bEd64XyrAvhWLYWvusZvYPthyvGExkhVS15XazbxLP5yduPLx3ERNsS5",
  "key29": "4ysygTLDgriSQfQxexKMDd1HiVkJyMJhkrEHz7Vd1XP8KLmFKWf8aAQoVFAyAvoCGT494Wwy9R8km11hYJ2sLuiS",
  "key30": "2FFJ1NJD2D66kk8X95sLNWikG2GV78J2YMTuS9oFz1puktUpJEapuVFCh9pS44FGg8mSagjWKbLpua5hRMsRMTKx",
  "key31": "2c2xhyTtv9EjCYzMufyzJn6rKdcds6MevMtav1F2nekMdSa5qzLB1AcJmjCsL5uYtncR8WVnAACj92K8GPSo6NNS",
  "key32": "3xH8HCUP6ZL6Xn5cKejsPjY8Es2eCbNqiBbphov6jAhYatr9sAbPSSY2rKPPDvbe4NAT2e976TLEntANLwQLKA67",
  "key33": "5YnZFGcxaCan45Hp9hUraTFoCjs485CqrASJJjRuXJJXyFLLoRu7fiMDX3RG9S6APVys6YRjR319adaNBvXcgPfd",
  "key34": "2KpNZqSnmR5B43ng9kgj9XZuBYd9EmxhQDEho7vET1hperKAtFPkizKWBxQzxyPDrStV4M7FzsDL1SaG7B5VaKxy",
  "key35": "5uw1idXbU48BroYS6tjRpJrKR2oEzE5GxMgsfEtxmNACPMNcfT3mYR9X7rTzQctb7EEX4NjX5fjQ82psCHXaNpMw",
  "key36": "G2hopNo3mBohVCr1SrXcYRy7YEZzWRk7QVf2upFc9FRUoxtfqeH5mpgWC8DoMeH2f3PoariBAqFUoejypetbFsB",
  "key37": "5qLUVrQFvXPm7HK1r8EkFF2aXNgGaW4fu6LkCZ5TJeKpW58pXLKUUqJ3Cskqmztp8nTDHChHiqjkEtBYf6obhmUH",
  "key38": "dAjG2Uzz8QCehpgf6dSSHiEw86WZ8fgCrUsuGReX7W4TiW6DCWpPZ46TiRuDdND4AXHktCeHHuQ3pY9ENGg7LkL",
  "key39": "4NMZsw7BsioZZQUiDVXd3fujAJMZrB8KLG1umHG1BJDh69B7PDzWkeN1YefdmWLYG7yYzJZi4hwB6TvjEU8ju9X4",
  "key40": "4dvZmbaQnXCvaD9bmd5ym3ZNjxDbFQatqd7mPG6NPHBVTD4smBfWY4sXvNUo9QbsQuGDQPppo1qay1hTFGvPWQJg",
  "key41": "4N7z6cwuBBmQD8QgAaVodrUjssYS6aB4id9BaVTY3G9jPrMKTwtdbQ8WLRTVz5guRUbucXjRQs3WQmgbXVTASnX8",
  "key42": "HUPFyvyC2oRrK7hyfbRBtLJGaVKZ1mLwxCy7maUARjwwpkowhnVfsz591A9twhvbKMUgFusKcBJCCzMvcWEsHWh",
  "key43": "5gG6iYKZg8m89YBbbvMvKsfvmkkv7cDN5ZuZ2oA7PApH7fPZu55dThBXUFVWCfuqfGhG6F5FQrtqLCf47gCNq7zv",
  "key44": "QWoFquP52sS1WDH4FJAXLFPcQFPnUVQHLf1r24G2eHJuG72yymmb8TQyXDUiLAPJgEje6h9DHKGpkhRkTVR5WnQ",
  "key45": "54pGSv5q5TJTF9G5dsZzjRLCE8QtTCmrMHkQpxVVMnKMdnSqg4QpjgRNG4UCoBmmwjhWH7d8ottN2sqwAsE339r7",
  "key46": "KniCGJEYwL1LWVBpkY6wQa4YVQyZkGEVPoVnYhaD9BdHcHLZYAtGPi1GxEMaUP5DiiPJZ134giBK4G14f1zWkZ7"
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
