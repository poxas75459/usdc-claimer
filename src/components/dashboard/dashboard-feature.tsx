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
    "49RxsARbUgQKU7ZFf6c9gvgsUFYmCnbXBv9V3aM2Sow3JmNEuxipwhUey5eXXm3exYtUGWP4ixivE5rSoVmxPce5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wXmMivpvrBY9BacNDQPfFZrSyJCNghNbG4ghhDmevqGEJdYWxbgiVbKec6Y1SbuoAgHFBifncWj7JmWdcnfxL1U",
  "key1": "36HGJW6P8dXWNsuY5Zcd2rW2MCW7WhhLT9tWYxCT1vRxyxqkGLUaZtjRwXKiUxPyPgvb4fJCtuirMTm4CY1yk8kP",
  "key2": "5axYShvv4xp8qJEMPLMgYXkJu8nDvBCQnWcZWMAAmdjuzqntf5vambizyDCn7Y66tfGT1doXz9mVDu7XCTrvSjLp",
  "key3": "3tEpYXzARPFRWzNffdZDA1sa1hWT3Gx7NBWxjsvUVE3LHGmojuM19pfZDLn7Z9jCh1Zk2hJcH3cEeoZ4GPMWAWn5",
  "key4": "67UEiFvSGNqPWrBDuM332sUzcMk39zSa8dZrBMUGiRnUL39gZnAMoAd5wTEzbnQnk7kUAbu1gsd4R3J2fgAfhZT2",
  "key5": "2Bpen1mxtbD8Ymuv6PdrYcMt1vkvxuzGsvYy8bQXVrTC39fJAJqLTWkQzqKbPqbgiZT5Xm8dmBxn7LnqBd1vncRj",
  "key6": "4gpPPytqHNAfGuRTsv16Kj1eMtSfv9NKHizFL8ouv3uhsaURL7dkdfpxy8X3uCgcd7jdQVsGS2KLe6Lak5mopCHB",
  "key7": "47pMCYVvo2b8fR6CUfTNfsP9PXZdFauks5m1avpWj9SPWdiicuap8uLNKXdP57Ye81fdhD24er8v2FVS3R6tQ7sX",
  "key8": "5FHoDU8WGZ8MocBvX6e5yMzKttV85tVWSYY7R5nteLrwzJsmgjDUuVR1iCuziYdHJ1a46BN43pwCHixuTqAnQ5YM",
  "key9": "41v1aaVXZWxXAZAWfwhA7Z9zuKCyLZ8WPD92iiBQF9pCFM1LkTzo5q3W8PDYjtjtnGMsJ2N53Kf4Aehqw5rJRvRB",
  "key10": "63Sd6WXnBaUfYEUCCDzsM5Gi2uwWjsU3A5iL3mZ6Q1QQXaMDoKnLZqEkHyh6YdFeJXxg6Hmw9tBevPq3grPbGvy7",
  "key11": "5v3vMeeXNYqJvnwnZbXLHJUiv6pW67GAXTsUNEWGxP6VvJ4rNQUBZx8aoxPazTENoHck7LtLa9rXSfU2Pa7u7krJ",
  "key12": "5KXd4Hgp8kdsbfBwLR77e7gWUqcTJqmpLNeBQbW31jM3yDyMLfkkTmsj3qodQh9i9tcoKEXXQ6JHV3krUjgSfkGB",
  "key13": "4vwr1cEKf3U3QXRmux7WNoG337mXT912LVesuet7fqo6k6jgY9ra1Tam2Pz5Q1uFwPnfidNeDp9eZDcf9NvUzagW",
  "key14": "379fjyfbnvTU1ZFCyMCz7LTV46VMpp83qjXH28JAbQcfspTem5Abn8jAqeVu15uHsPD6f53gajBzcteWgUtgZ199",
  "key15": "3JER8yY8C7ucH3C1AaRwxyAmEc32GtrYyXUB9FzdHgqwXo9ABEWPap7PJdTsV2mSYbfB5wuMrfFpj2SYpCvW3LzV",
  "key16": "62ru6jjuSo3B4qM2hEwXbD2V9Mm5hLzhwXraXxSrwHhyS79F3MA57dVJw4bERzGnsvRaYqAaQXQbkxh7T9KBANzq",
  "key17": "3Af4AvHRu6ViwsXAyq5syD2bX4bMMYDHhZQviTLP7BKacgzNaQVuLiaf7enRFik11Mb7pSDCyHjQ2EaqEtHEo49i",
  "key18": "TBgYhttrPbV6e8ahP6Lxc12Rt2nKe89nTHoS5244MnTr79VdAvdMZeNyAQzM4DsMcNmd8sU1htqJk3Dyc2jHKx6",
  "key19": "3GQgxywBFSbfhR9xTJnmWCewed3nJHcDv8uinVZBxDh38iHV7WH9QrtCK3fuDqTC16i9KK4JCzvNuSMKtCtTHLu9",
  "key20": "2WBk1LzwEAPpBkWb8CWTfudsCgz67ehLHuos4jZd7GEwFmvQeLGszPQYs6mhxsrAUcKoXYNdhJ4eDyQuyK6SVubR",
  "key21": "4t2rV1WDVAxhuPKbFGMaVcPJaxiqaCLN9BTzdZW8aJLe45zZeo3mea2ESuVbETS4QtuV2Qf8Ve4dfLnGhFn4zvDb",
  "key22": "42tjV63KqdGVk2hsyqBVPwwdnouAVDMrzsrUPrPDq9xMv21v8atAMKN92bZeNwCkJrP2Q6BYNtSQvc7ZJhYYVDi",
  "key23": "5fuqAH3nxXzm9KYAhFjtkCzceiC3nyXQRLzp1sk2UhW2F495CX4Jt8TTfW5EYgHdJBcSbUbt5Pf8xvXqBCTANZYo",
  "key24": "4amZjRAen2D4YoV6PF5JSqRHRyDBrNvKuWRDvssxTiCdGmrYrCxjYsMJN7oc8zqotZ86NNTVhYsTe4V4AvNUM7R2",
  "key25": "4bFFDW6GmiQLKPSwjvMn8oyuAAAQYUknS3dTAVyJqZk1qgsoh4wva18ko4WFmzkfFmMKFS46SShUS9a8ouJWmy6X",
  "key26": "5mwn9Qr1A2insko57z63VDCuHVwwAYyrCsp3taJZRQ4EDvDwEVUxbxRM4gHyYcS9TXodD1R25UQs4oPBkTfnMFQ5",
  "key27": "4hakJwLaJq3rUMPTLB2GqsduLV6nzVTGsrQYZoEGnz2XfURuzT7V93eSsGTKaknSsuEv1Mo2Ea8kpPT5BsKAT63q",
  "key28": "2mWAkTLxcVJzbtgKxzhADqZdNgL16TAsHMTBLLMcvqe9Jt3fVLmgCM49VmPCce26nkpR7rJSxy14q2mgLWsAmeNj",
  "key29": "4e9XE1pwJZ5Tyh4WnZqunaAMUmxsAiAoDhCCgBsNRM641VrqzuK4KvpkgcDkdbtbqW5griZJPbTCE3Atsg9gFcW9",
  "key30": "2BgEtc9jUTU6K5PMVKMay9umtU2KkAbtsVcnr4rJZ2w4yKiZ4UeCqrxwYd6E2QbgMYR5xcq2BYTd3t1y4XN4Yd8M",
  "key31": "3RymttMtKbMHHbzhGRbBJNpvFsKDJ8wxqJFvToZH6aLKj4xEcMLgjvJ1QFgxNmF3iyfSPS1ffg6JvcHZqzqMNKbt",
  "key32": "3VUyPvy6NWBVkvcsiqYosXXsUQsh4i8WjGF2XJh69XEhqBvG56gB5xhKyAd6AM2weRnW31J53dEu7SC5fQ6CfTkz",
  "key33": "5bXj4s9W1YDrJ6AuEwak52E7rXuVghZdmpjeCGgdSeihFYmVb6Xk5LVy6G95nkXTFB7YQLtNdJcDJ992J48VEaRN",
  "key34": "2pWGpwrRqiH9qwFYw77ASkHLimR2RqSm2zXShkq4SrHnhQezBR3AG9cxorPS3UFCrGwsZL6bPs8ZCD94UsedxA1w",
  "key35": "24SKrfAsqfy68swxoPicGrQXoVfsPvPZqRYG2htHTocdx2ha1nx3tAjsEq7w7GArJ53RZmJ7oyWnpD8UNw7JdYaa",
  "key36": "5syEcUuLkGdQxoBXqHACKg3CCjEbmn6NoStkCNPkwEsRp5mQJRbqZtUj3N6eZzD4kDtpAjFpujmikTNwgzQFo93g",
  "key37": "W92UM42tHMs3fqLKGYHnsUqjKyMgjoJ5eASSkGXpyBV1h34ZmZsN1AkY2wVVDSLE93tpFKwBj1Hwcj5zzHN9JBs",
  "key38": "3vPRsYN93fWDo9rQfpMMGEydHUtqzMeBSWRpvuutoNFSzgRZ2Yi6r6v7c5MyhnuTaLVgv5mh597wdYgSaSEDfrQp",
  "key39": "aEAvRa5EUKciKWRTEa3MNB95YWbbt3hqzWTFQRGCWmz1eQYLp6MuhzCVjkPsZDQJy9yhjfn9dHLGwtNHME9k3mV"
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
