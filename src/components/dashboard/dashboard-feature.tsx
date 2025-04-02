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
    "6FErMf6yu65y5gUYaKarxb3w3cXPaeyVtpdpxiqNXxAkA1zAaFbCFosoy1hDGVYj58FX1myDAVJKcMyiCHedjLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35UBYvDsH2xnErM4rqY2U6Gf8iqMZZWhSMAnWua9WztwxNqgqmxuqUiJW9SuKcjWuvGb41THfdubu29Rqb76bfv9",
  "key1": "2wNGoU34SvEnHEFxtEr53ohVziqRqvfqaThGxVqqDzVZw3HDpVUgtd1Ed9suVyabD1sVsjvoQocf11eBKKSESPKz",
  "key2": "32SUfEAdNjHfLbHq4LybjaQhL67UrWdppUCAgSjb6UrpbVmaWVNR6jQb14sLFs1TTtjR9wAaxiXFgNQq9efxmg7J",
  "key3": "5hkaPfngETFpdbXwTFFBq2UwjvjqBxQDtp7XnZQKbSBXA3udgk4UAUT2oJVmQbBPWj7zh3EgE2vipXxnVyjTDvFy",
  "key4": "3j25xAmjGDdsPShb8oyCpHDXoRstjpuAcpo7rY8Ycjq76E36s9bFqdeMLaMjjndc2L8nDggFfc5RJfsqm9qRSf4v",
  "key5": "2XE85iJpjQm1gsy72gdAVnFj7E1tWKfEj1j6DDnKEVLKLgT5ueQExG2iPP7AmanEUnwVBauKtnr57JMU32xiQxPo",
  "key6": "42EveMjaNwbXS5xrJyKqPeT54CpYHGRKAgbWSfi6faPi5ykzboQRiiwvK8rxT7Cj4yb6zfNKUN5UfPBiDYMjmSs6",
  "key7": "4cboiMAMXcsSCHVfMtCXRTyNo2WP65bgQmd2RgjGKJwQnf92f8VQU6x8CmzTiPHAQNZFCw6bxJwa794iwFPgJ5UT",
  "key8": "3gCVvPNPe3Hut9WYnSdmKEbQqJPs5dTsBSdmzyr4dKmu2pyyERN5devbv19b88APEfxzcipCDUEeFHd6QiLiUF9J",
  "key9": "wK1CPq2GzRZyd4RPA7cEM5DiQ637WZhwmw1itwn2K48umMsBxiiYtZB8FgeTtP8z81SvVG72qmeWoGf7cPZSK7Q",
  "key10": "4j4WKYVGJ3c47x9eX9QGbm3bJ4P19HQrcL9cnSCLnPWw87eDtqpomYy3NwM2zixWpWtuuLaBtXBXaZVjT25uUmjP",
  "key11": "csWsP9AYw2kF6tYygfW3rxBgjw31fm3deyvKC6sN9CPURi6MP7R96s5J8WmoCQjqqT91V7FHgrQapZfiqWWATTd",
  "key12": "2SLFoa9KZesr5NNYzDymnWfZ6zh3vWEdkRKHnMeTAPGzeRWyXSmztt5q3mmN42FV77RAntj5HJ6z515c9oycN7Li",
  "key13": "LtJDrvoB9FnVb93FhnvpcLbFzkLppiu2mcv4v9NMRRUwzj3yGad6vjSwhiurNY9yym19tbmzWERYxfuMcGViUs3",
  "key14": "397g9FQHe35Uxizi9qZ36jhG4dMnPswuWfnzLQhs3aHuMNtDDApufvTaAkdgq82Vtw3E8Lr9BqUomRjQzcFakiYy",
  "key15": "5PTtP8WiXTTobQZtd9kE27D9KH7pGbEAHQZfmBidiThYppqjNysVJC21vEUHYsKT5b2sj3T2TdRLJuRUF99uy7Cd",
  "key16": "5DpjcNUo9QDYH9WGgGi93CGKK9BcYRPvzs5JyFEHBQ3p2QKgpCxupcwrmyBPq7Wd9pqJp44gBuvKQfzvSLv8e4ha",
  "key17": "MUwsh9FAGqM8rxhDbFFoLPzAaS4EKT8oLk282ruKm52JS8xbQ778QmqFnQ6Z4gFwWe8z5YZNDcosNKzzNWZ33ra",
  "key18": "3MwDjRGS2NiDG6jU29CTcCcgvFXsdRpW3fEzYNgTa9Qf6MdywuP9pfWzFjv3zf4yTU7yLTUCdC4XL68MMC5B1Daa",
  "key19": "5FNCFXb7uZkHS9HDKEsp9yAzqhLL5ZHenuwQcmUAdF9e42u3tT4pWrt3uQSNVAe9TFC8NVkUGmKYaoyx4rYTeuG5",
  "key20": "5tjTpFPQfgbypaMtnVQBDAmX8XsBw6K5ZWRJ56ewWyJRaoYhqK6K8SrC38MpdSvyY395iPBg5hw6nYuu95DCJdcR",
  "key21": "4zVxZ8JfPUGFUQDAtqpgxGVky3nmLG8NdNE1PoeWpWeZZcsuZaG9KWrSPcbhPzor72XpyFkUHkwqVcNeKVteoK1d",
  "key22": "7pUfUyQAHr8YnkEBcsU1Xd5ebJqZPmfAT1KzQBLeDqzQgww6LuGFsHNT6TbsEmK9kM8F3xzuMWLRQDuMXvGKT4u",
  "key23": "2nBUSLEo2y7UPkNnZr18inw4xmYbK4fM2UHhseKjSq94CK4YCZgekaYT42hQiTqXmex4Mv5gGc35oRM84J8ZRm7d",
  "key24": "2V5NBtRWpdEUCaWfzBb56ezoVZMagMnh2QiWzCHjRTK84rNGyatYJ1bxmgAN3APUwQDQkiMz8JV2pRoVwtTGkSa3",
  "key25": "Ec2GDrGmMtmPgBbPebKzHyPDQbsgRVwamLsgvBeAfGfi5BsjtQYJyg24ECw7ULCPFg9oarRN3x8fuEShaGb3AVH",
  "key26": "CvswvHo4spVRT31xgDHr5uZNeqQ28LsHK8D4oHPGootRzL5mFXee5WwqfQbFCvzXKwcGpfR2HpMJgz8haDMLKyq",
  "key27": "21Ki4iTyRdcYJRWqBntTY5FVhvHSkLKFAYvfA97mhTmBsKQNiw3oqXMrckTRaqYFdT9ZLWZxpSNLLHfmjsxdxyQc",
  "key28": "29mDiJgE4vwZRAKe2fLmgq3NJmN5DyVvs4HEJHgHo9Fx8XRmCnp2c7dWeWRk8aQichgU8S1pcoCFvy7CNgFXaJ5g",
  "key29": "3eqgZ9nnEyDwnEMjALTZTvWq8G6cU2cVz7dNU6ZdL2355y26bgWXdbdSuqhL92htYuZBeG5n71gc7PGAvWDo2zso",
  "key30": "25oh7NHw1cck7ZePsjkwtMMqu6wyd53qGdgPzbx1omkFdNPRwpxqQEz39kNjZZwYLETQjp1pSG9T6JXf6Mo7K5t3",
  "key31": "jUUvDwDZ6vCha7BmWekcGmkSzYGBM4RW6FVgCHhLJXpqsn91Mw2WbTYTxwYRYJ5rKuea4uBvaVNXydLPhhHBHGc",
  "key32": "2biuBRsAJME73hyqYNV1kYgpKyyJyioHHH9f7ekGTkXuWemt44vSveQhCaoLLnysrYY8yZfLPEmLP6MYQGkEzmTi",
  "key33": "sn9DVWS5BosDQiVF7G9rnrWY8Qh7f2Xj4WyQ35j1VcwH9GdBKJQ9kCPn97RhrbiYquGd69wuhLMHqyo8aD6FL9K",
  "key34": "pTZk3dtmFyDVSjMnaeMffHjDAHhQxqEqYeHcqRSXjbo1vfx2645Eqob32pF9eYXfwUU6nt4TYTYe58Z7HS9hfXH"
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
