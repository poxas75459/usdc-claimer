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
    "2tsAMMM5WB1drQtGewphhiZC8zranJb5bLcDwgjpK14CScwisEhqLJ3SPtGb8RcKMj5HPDaBTKFPES5NQEz87NGV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Aenk5nDnbFZEYNn6SoDoWec1gH5oVSBHwkyRkModoRGoyo969Ayx46o8dHf92TsdSDyNWCuXeF3SEgmq4hnEoUQ",
  "key1": "4p1R1Y4nGdPSvhTtHzeVtLMbsoeNMecS9J7hsSZmmRde6mBfwF7mwPDtJpTjZrfqkSrvSbsnzwvS4f2nq9sNvG9U",
  "key2": "vdMNKuVBsCwvn3u5pdfnyTCkWuevU5KZhkR45JApzpkeoZrgEgf2K1xNZoSYhsBJH3sJ2iBLhVEQLhWJeF4ASuv",
  "key3": "54JXaCNTBQDAqrAgTfKxgsQgh6Z4XYbEnQcJjtk6XQmXUk5gpT1hzJySb4bybFgrhuuEdGAEqAFUd8WmEFnwRcs",
  "key4": "3qfUSahKCDNhgoXL3qNL9j3xBeBeNSTVbt6PX33SDBGaJ5dfwkmbBST3t9DQrvb4anuoNQCkeKpzckLnbSvhzk1n",
  "key5": "5ze41EhpA3XpU4UyPVKesSmzd6BNJQS7PSHrEZmDKd3dLf4LsdUY3pqLNDN3fnGAJbHbFMrk4D1ytLwGYsPV3J9f",
  "key6": "2wye4CHhqqhiMXePdEfJMENDPMS8eiRjA1AVzR4hZu9ZSVYLhNFsJQ9suAQkUNULKd9fU3UrUcaPxn1dRtdZg4b3",
  "key7": "eA8jyRxz8rfwcgHXgDtsCftU7PCaabi4qBdaGT6pqiRoA6G5kuPEz5b6JrXVQq6R89gstUPEGXbrcH2mgwJxyv1",
  "key8": "F5gRrbv6H5pEXUU6PvnGxYu1AYnVvMuS69DLbADiYrYuMahS6egT4cGTqwYzoizmojRrVDeZTHd8YYcZEcoagRR",
  "key9": "gteUFYSMNftxp3ScVN21qwSwP7RzEtPtJpHAUBubd96XUVW3JqiDALb9G9PxfbdVtuzjSZ3sA8t22N4EooQAGDf",
  "key10": "4o8BU5XwHXRZKJixquvDQp366MUs4VGfdoXh5n6J5sV9hCqoU2knvFs1dbZSzc3oypBPiJsMzTgUMt2TvZrAXqW9",
  "key11": "3CMp7p57G78QueZbZyk84NEehdgH1Y7zSJy9ETar8Z4W6KZzRPEZfwV6zhz4hJemWzYiQTr7TCGfNg3xVCuMzfzj",
  "key12": "3FwEGiR5rYuZTyTNCTNmFj91m9X6Rq2CsVuwsBgYDWGCxq6KhKNWr7JXkJpepq7B8paBnwH749137YX8dgs7JTyS",
  "key13": "ow8En2G5gejpyXxhmH6NFUZ6wNJhbUWxm1H3tVX4UcBpaXvVc3kMnX18JAJjzttcEQ9UjBPgX1gQvcLRRsWq22S",
  "key14": "4C1PHR64Bm2gSLv1DatgGQgCV1aCVtAKd2mDGXDbbzVzqFDYQSGXxoBmrceYE714f7dfzcrqEQwe8ueKCbNh9hXE",
  "key15": "61irzScG2fgub9MudNTs5AMEtaTZBZGxMR2aP1ikTuYNLNfzrHUtj3tXpgtUkmbRbBb8bfJ4SkdnDjL4ykwnB9QM",
  "key16": "5xasBH8oJCxA2SeBkb8oPKkoahcEELDSLkepeQ7A8oGPckBP4DtKdjq964vJCT2Qh8out9xP4SxW9J9jGNPVu4b",
  "key17": "3aCzNxWxDRW6Fi5GqhfZcdi9WepwsSVLbEsvjzsPqgjjhH64hB2PYvTMD4eCC8EocYxoAbxDJ6YGd47EYrRHtAiS",
  "key18": "5T2gLtSvyV66dQSCAQmmU8o6VgLBagLV4doCQ4MotNXme3q4gJUvnRDPiVzE11fN32HyBs2P1bksuUo9dT4XiJSH",
  "key19": "3DjLY1nAcUoPb5xTUJ73THWfh1HbUjj7YGo7FqMNV6ZW2di6vP4p7uAkR96Rx3rkvXLbQde6WbadKb2QjhfwPiot",
  "key20": "33DjQEzV9mJSgi2gNFKzfGGYjBoQv74KD3WBaPuBBtq7bh6mYQQA4pfNmgwiNwwJdRUx2JxDBaXd29WQ1DaRDGaf",
  "key21": "445rw9Ka4mW8EkpSna9kVAsc7GkLjf5rzEYYjTtQ5QFNXvgzuLWWTUj1wLJVAq62YuqoWk5e5sHfvzrZpMtWcs3g",
  "key22": "5NSvtrqxoQuwsREpqHkhm57AA7YVNTW2tRFdB254p2N2kbsyNBtK9Y4iHtcq4ZK4d6sJLiyag8P9Ef5YaYPELxWm",
  "key23": "jxAQHJ85YpGycFFk1eEwqTeMPZz5KcL2bpL1E1u16mdxJtq9KzfD4LfDxgWwLFRRpXfaSNUL8vSgg1wniCEMi95",
  "key24": "WmkieJZ7oy4VkH8vF6xYGYAGnSUQyQZ3ki5oyFWggLmRoNAeHZPamQ7zZGKgq8Y8Fc6X9dy4Se7eejruN9P3WpW",
  "key25": "4QqAbxz78ctReszuAcu9u9WTKaVJP9ETdVUw1vbrHsnpATK1gGudtaLuoq8fsijx1UL6JqB4x7f9ZFG2ykLFKSXK",
  "key26": "4Y7XW53K45kBQEibWnfBaE6gDzRYSLz3tijQeMhTcfm2YxaREqrZggxsLWwXggLJvZHsH8MkKyPPQqy7NMPbxBGj",
  "key27": "47sWyd6WfT5Hc63Re6u3eqXtavZtcSreRAW2wuQUL3Gx1aYwav2AeRLBye5S8ZL5TiQJrgnY5jEyBDXKXvrhK5a6"
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
