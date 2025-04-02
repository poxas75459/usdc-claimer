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
    "5BEpRTiYahczYE5vkS2J9zVgNfJ19auWTeoFdscEoVo8HMWbAXYqFWAL1m61tZBtrwkMfsEbXRMSpwaQDftCEAhL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9k6quAdPR19HgrpPMffkHpXRH7X93xKvVRm4Ueu1TbR4Qo4BkdmXAn9jfwBkMptKrJRKP5JJokA9VHJGuv1W5Ln",
  "key1": "39xoaXD6sVPZrxgGkyXDcTZTvg4ub55RsaUZZFKX2tXQR1zMc4rtJs7xrxHNBeUafM9JmiKqmy3SSwPtUE85c3cA",
  "key2": "jNy94x9PV8hg7nGjAg6fRQozx3iZtaNSq3PfYJCLcD5JnMgmpDWNrrp6L7pzZBskancbNaS7TYiYXi8e4nWgGdw",
  "key3": "43UQDgsSimqtramL3RbZY9pJroQ7AhoFpqVYcTQEyqvbfnxX1UbRzYJfRkAuqfzUysuum8xN9H89VyYS4TC7T9B2",
  "key4": "2ADyAE7wkNnKugMEc5iPZtmmiVdSfFf7rXf18TLSj4nriUMcKoZkBa1FD3nbdVfKZykHrhSbTq12q6dLbmbRcTUs",
  "key5": "5JNVQ7uZF86rnoomWPm2867s1QC4wY8nenqtS4GxvLTbsNY4zD5wLJTBL9dX27VCyPVWRoFmj7iHHhiKZAWV7k7E",
  "key6": "3DK4Y1of6bxdyoAPi6irvLLmpLai52Kts1QtiFNJiJpSDayJhvXQexmgq4bH19gXtmjg3ZZrkyUcVVN9d2LeXRaP",
  "key7": "38GHHVeL7vy8TcZyUWCqyfwK7t9KhZbGUf1aSaJRugsPtH27e42ikDuuAHyA11CfUuGpsBqMNuQub8VkNyMGfDxF",
  "key8": "5ueuoYawtUccBzYuWDPeTtyWKNxtfUYvo1C4HSm791GdGqSxBJeUQSMqBSq89MxSP8E8soCt5Xn51Jvx8z4oUAaU",
  "key9": "39KZkch8uXk1qn9eHZMKPeTJL4MXcGQBtcT4SX5HtjUpUXVJVbY2GX4EAVQ1zKuAoM4puDVKNVeHbdggnHr8oJGb",
  "key10": "3ShuFdv4m1yTD4PRiHkNtFesnbdYrjqdSMjRFpgemdYhowBKEp78iK1aY14rXpH6V2gjxy69DuYDN6NANFGUPQTX",
  "key11": "4JUh3Hv9stRF1Ao248tYmzvdbNrN93tcDFtrpPDhhFdU7cx9eRddajLgWztzcJC3L7dCLWksdHr8RkaCyjV98t9B",
  "key12": "5Q4u84UAitSgwEr8h3LpaGcbbJ75tpqbATxiieSSwtQZwVr94PBMxNZTRMpxzAcSSRm2yLH8gewBCHrzdnvFkBmm",
  "key13": "5nfdrENFuCikzw6acmcUcU2BNGJ6XxBJLSsr8WfMXYv9aGDj4sBHp7FDLjSs3pB88iCu3y1ShtGBLMTZq9aUdJXk",
  "key14": "5hfH2GnQEJo7krGnKL7eWmzsQqHQQaBHoiYpSu9r96fmBWPuVpVcifZ7HrbsQUGrUYmmsuokoMvDq5DenZnKB6rH",
  "key15": "2jCD8r9V3a6bkHXq8K5ESWcnpK9v7zsjupdhwSfxBSaHHPPMp9neuLVqECEqU4ULkcZtkbxwCrGhJndWTsMPYatf",
  "key16": "46H5GphAkYngkKwpUCiC8DzQc91pc9GBRKynCEFBTBGqN2aor6Fu1pEF4mRQwJoWGX4QNtZVxRUKrRVw6BT8ro4z",
  "key17": "VizyKCDEVAGhFuafk9w9EcwKXsfDComEdEMtcQj4QdAtnSJNkAKZU5utbPhbd2x3xyyBxYpsty3f8WWYSRfPgWt",
  "key18": "qYCCpZxJXymQRd9iYY5UQF1JYreuTDRFFBsYibTmv61HsaNeTV8sFjfizBhPS1UyRHehLfD8bNFSZyiD6ksdBJ7",
  "key19": "3PEF5qv6yYQSP5gL23FZ5F5QBFs4zKhmJ1EpxS7uzm4cAVbAM8M9FrjSr6pLo6VpDgxvYFDPtru96SSDyssZifcp",
  "key20": "5kHdajzADbHDsHMhpD1rtwGFYrnayQSrWue1g66WKiPzND4z4LoKmxTQ78uh1TXJpw7gkfJ9pfT5sM917fLMsSLS",
  "key21": "aZENeBvXq8cMFi2L2VQZYijXmSAnr9acXaFEZ3L9xYhQsu1befpZ7u9WCkBShaVisxngFzw3iZCnaeHgJmVTZrG",
  "key22": "5EHsAT2pUo1ttV61YqUQGh6ozTwYvV2UoR96jr1GdSWMztAfRLoBr7LhmxanGEXJDvCbLCA9HuBhXFxkrDDZ64DF",
  "key23": "4aFUypRDyu1svvAa5kdtHWPzT1DBse3LpQ5QNH6Fi3ZyZiH9wLYQGUbFd375KB7Zq4zzs2Zae8eHb2W85RwD9QUo",
  "key24": "3GcTaeBBgz4SFmaJ6HjqRa6xnHYbkzXCzmwnCfWpwEmApXpRaSg62QFhnZ432dJXMafiJjWqE4GcbaadhnGTMURU",
  "key25": "2DEp2PHD1ihgVAssCYNTYSaXGHWj5m2uCpKifeV6gkg45y7w23W1nmuHp3NSvJsxN5JJMPKYXHumenDkDXawvwDK",
  "key26": "2GhRfz5swjjrhvcJ82c3nanu75CHKjBQZJsDvYrEYkRfjT6oBdEPcfo5txaKfUXxn4rkM1ahP2Qq5cQfwff7CRJV",
  "key27": "3o3iFL98Se9g4NPKKkJX4nixda7MT8Xhwduupoh6WFx295xGe5nWcmwwNchWJM7bekVxmgF1NmACLid6zJf9BHc",
  "key28": "575nTZhigLiqPXLyXw3wGxuBdzU5mmg3nPRa4hsrkyHkHYAKkk1LadvFxPLmkjFssz6KWLi1474TpPEdGyGVQNfM",
  "key29": "44E2RmPoxmFvKfqn4EKtJ9EoPCjJYoQ7Je1L8UUPsQrTLiDhfdRzQJgLuKdeWEQugzJf8kGvRpWn61R5kP2Hq8ut"
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
