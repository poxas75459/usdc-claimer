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
    "o25BB7BXfKHKWywydGKAHKALJp5BbdEyPCYoztNdt9v4vabxYsEs3XkFazTXMqvJKfWGkDySLTyWE7hBTGRYrUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wHEDmWozDFCdB1VSRtMvBLycnHjKVQh46xaopXVCnGMa787d8kC9YR6wqQzqPLs89imTb5YiFVV9SN3Td3RrZSj",
  "key1": "3fEBYYN3MSwm48QwigWSVLVa4igrJ8ngpgi99X2iNPBTKtRvhWWHRSaE8sLiNNaK9hpSk7RduzdTSjSfiWMgZT8o",
  "key2": "4MkKyKHpLq3JSMfu843mpRCJm5hQfbafrhsZPTrST1CPsV7N7ZKhxs2yn7emRzWYEFTRz87NoW9TWZRajnbtSAME",
  "key3": "312RMvgkiwnQzJWKgAPjTn4rr5M1rTmGi4p4HKuP95bedDnxruqaQBWtJCh9igkVNDH3MAf711GEG86JojDGktMR",
  "key4": "h1AugqympSQFE2PyF8hj79kM85JB2vfb4kgduxKGg6W21QcYGawQxjC25V2jY6jq5TJWezu5u75NYwDKgbyvnEr",
  "key5": "5pDfwhs3rQ8aBKKP1mTiAAUC21Uo1hQabWQvMcX7WnmQEfUuE4pEJNA7KQ8NJDrLapXHE2h2D5U9Y2WbKBK9JhBN",
  "key6": "67krpTRwasdcdjUT7nTeuNY5RE52FLdmuNedXWuLyoMz3v6XpkRP4avfEiEg9gvHW49LTqCoUrb9h91vqJuvwbBW",
  "key7": "4w6YfZeaUWmpHnbhrNz7NmdBMiub8caFc9c3wQThUEpcazgRzPUfQoaJD6KbuRnxdYMuCXxs7ojD7K4QxSStzNLW",
  "key8": "5dsqsL8UXNFEGLQWT3bYGVj61Y9WYsA2oGjXjRQ5m4mKNYkfoZSY8DszhHcQ2tZwG57xDZwn4YTCdyXThWesHZeb",
  "key9": "29f5xAEkvQsS1FKdg9PmT4jDhNCCTVqdPnRuZSfwqhQwT1MU8ikULkg2SqDTCd6NEG6fkY1iw6D9jQS47DB6ndNe",
  "key10": "8Y5Sd7F1D4ZtHhe9UEeRi71JWZNhKywK415cEkk1noaqLXMBYRuwerwdWL7y94XTkS4Lcm61pBhoY31GK43FTSE",
  "key11": "2RiEMDE4xjhcWyTtFo63Qr89p9n4fXUwgn74gKqjHCEB452v9Jqgxopinaff931vPR7Sg3REgX6Mms6kcgzsNe6m",
  "key12": "2P6YxSabGrrKaMc4qswzQoNePzesV6EssGgVqqQs64owwT7YUbK6Lz6t6BDzjbfd8CpsnXmgBjRwXdQZXnbT6KCY",
  "key13": "2k3qUxDjqzERneTpYa1m8pPmjp3wXyNiXnLyQFdhTVBXajjLvV53xq2apyy8RjhbVkLaNcqm3cjX5hKBjpVLAsTj",
  "key14": "3vnJoqSDVvcnrubLa5nfHdDrywZzp2wF9r7KmVwpRi6XeLf9yLPoGyKFkFkkH3bDhJk5S2HT8QqLnvXEymtmNgiw",
  "key15": "5UEhogHiDnoXPxziHFC3SDC6KAUzcYsLB6VesaizoRZ8y9nEHuPgQhCJajt8BrHA6FxmQ897yRPRSeSeuR5MvEeW",
  "key16": "2DPFeoEqv4dLnquMn7bcLF7nFLYHGewWYiH31MgZsRphyKaZgH2z9Vk8Kr31ofYV8ivLc21uays3yFQAN6ftJVy1",
  "key17": "5DPniimYYwumtuaVMgXyYS4VsYz1QhqYV6zRSLpuUzvZfBnpteToEao8AgUTb3sodSYMaNS3no9txaAcNoxoAdpG",
  "key18": "54oDBwEeMBUZN6VYL4uVGywHn1rqcuAxTygxmoaixm1QGVqHmUdBU2WnSgWeQM6gggk1yQBRhfS49xSBn8SH4WDQ",
  "key19": "2LzpA2FPmBjrCaUKL5R2RxE5LLLv1eGgqGPRVehzVNjMMQZtxPHDgXRfxJA4bjbBuG5YuBwySdadvEygE2EzkMMd",
  "key20": "2FtVkryHaCoHELG1GHD5Aay6BCcH3toZN2DPFPUzc9b2KPJybNY5hoSohQdLBac5eZFSSTXHMRxpGyCeqPWGqf5o",
  "key21": "5zp2qiNGigbYorboCUZ9uQTbUB638D6zrfe19FaXvbXoFdw52hH2rXPjZm1LmxH6Jr1NhG7inQbbAtXmHvfKn2yn",
  "key22": "k3g8widDiSNoDbRtYW4jeUTehbUi3oqMuyVzZ1e9cVjsfogznHLKz1ZHgCr78d2RXbZ2Ct1ChBC5rtfxdueY8RC",
  "key23": "43G7x1rUozwy5KA2gPxmAzzCwFo3wJxjbSq5Qgg3nZrQ1yJwJ9BdfifStbeSB9Vd6vdpyv9zv7QGsKwAwSZNxq3n",
  "key24": "3cHMKvpNnzn5HwxQjDtgvqY7dhSSM7t62puhxLQB24nzMEd7eHNzDQSuEWUXDiBsXdDmqd8Z4LhBQCEGYhkK9KX7",
  "key25": "5cifHY9JPPw2Wu9hk1AQgGPREusn9Gwe6gaweTo56LshssP5FGVcfQxMSeo11FiYJeFTX8s5XDZAJoZo1Z1Bfrj8",
  "key26": "4dGhQw4fAgrn1VUWGZPQAWZ1xM3Jw4hs3Jt2o6tn9bY1ETe3fuekk9w2p4vkAnKvzcGeUb1Sb1eBta8Kw9VEmKyc",
  "key27": "4hGXFnX8qnYjDh42n4AMbVUMUvgvfJFc9NdgsNWkMmVJotZW4YRz5AKJg4qXfgqZ8k92EzLUo9oYcbPc9wtxji3g",
  "key28": "5QDKwCZbjE9gB6eLu4gn8QJdhPyrXAmEoj95b4Ehg2CiQjTzbri5Nzy1Ekw9KhSu5XTMWhkpgh6sp3yrEGGYdYJf",
  "key29": "KxUj31BzdMtt3WQsLt6xtTiTge2WXb38exqPb9XFNMq1MX4hmfGgXWtLXxis4jWNq9qYJtEc8gvnsjrBYkWvjss",
  "key30": "4HJu6qWv4qrQBNfnFtenSyzraTsstY88SwpFRLTRkgjEBeZDHP8TuyEX7gxrUViyjzGbraCsf6W3tGp4dMzKsHoq",
  "key31": "2U6wc9JD7wNiiQeutogPj3CV4R1gSBi8JZQuvKc625gY4BoqEDcYf2yAgAJqNFf7BngaqzcA2t3TpZmC43xLpogG",
  "key32": "3RSShqavqnYAPzFJc2ACjESZWcjQnEHwZWeSB2WXCGdxqwPZFfCYiQ4Sz1ECQX3s48xCP9XT4eGkzkpjaWXKusWy",
  "key33": "5SC4kxRpQV8K3pwkZLcuSspZHZk1wew9zL9Skn2jhmyWs2JS6vVTPnmnNyXwb8pu8tiecX4b2WrEVxDxC7skpKsD",
  "key34": "4cotCpW8wg18tRXdesBt95r9MGdR4EfdrLwA9E5kPZvasxJ51asAidZmGxGNcNpFkTepxWJCXZAWc94si2yMJM3W",
  "key35": "zkmQdGgoUqBZGHHGfwebeYRHEmGPd8RuTEz9FajowpR4opWP14cYZenSd8e4MHSmsiWuJK9g92iXUdk3tgugq5M",
  "key36": "635YPrC59HccuENmKJ8NR6skVSk7dPY5tokThEgSdfagQxQD55Da4bmxXQqkM2KCTdZtPF3QvmVN3PpYkMD1HtZ9",
  "key37": "2Uz7DqhQiWc6F5ovRSohE2nMRRx4iyVSF8WAEiMsxLxQxdeozX8RUconfmion8D35EHE75CyqBmzyVXB3oJetXxg",
  "key38": "yfCWZdaHjZEQ2xBfkY9o3PHGLsq9urz7P95tRj4RuKdpymJKEuauUHEQUaX88uzNewRTG5bifP9GWhMbu5SXQSV",
  "key39": "4Bnstc5h77k7Asj19w8sUWbzWJEwVVPdRtUEJxq1B96e6Qk82ABDmxfQC8DffbHv5nFFgWkAtUjboZS2kJm7AduW",
  "key40": "5fF6MEYrCkN6dTBqn5TXL25Sqq1M45cdaLvWhFoQuuePoMk4nSTmsq5fFuxbtSNNAmmXeHVT7UPFia994sfweTR9",
  "key41": "qJAxQ76FwbbpU5gAniWU7HYGyMBeaYUbPw1rvfta5tEbVMH4R4SWe5NUem1i7LMTCVUqmuRwWHVUoNmW764XBGh",
  "key42": "46h9mTfSJxN8A6aTzebXqx2jcg6rRunEvWyrYi9bEkdRapK4CuvxF3wmWKA6V2ABji99gadRzdgeQX8b7fVkDMK9",
  "key43": "iTiGnvSfVji6Ms56cLjnjQNtA12vhLfwpZNhkho5Uh3ZGR4XXBDHNfzUETY2Pi1APJ74dWPweF4X9K525zEjFBu",
  "key44": "2oWwuQSPShNFhadVa6szxfCCuRrTwRnnUgmWQ5T1r9c1YN6fyF7cdQ4KCHPPyBysu1AYmxDB8ifbFRjaWm9PZFdx"
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
