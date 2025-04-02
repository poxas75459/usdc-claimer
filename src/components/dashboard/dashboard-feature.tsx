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
    "25SN8ri7QvPdgEEojpTtmt6Tv8zdsRmr2Fs9gzYxUmy8fogwJ8jg1z7yxM4nQP4jzQPtbsmnDKCb1VzB8dXCAyt5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eswUm5D6d66ZMHjcfkDEW7imUFGUE9hXRn2aBRRpf3hzNQXrSyNfxEkqqzxfrX2VsoaUiHVxkL26CzVoB9rQsPa",
  "key1": "4FjZKDSqUwT5dwCHK2xwvWCd6h8BuXW17bcnaTyWuEr1jvbCrQCWCKAPrDyTxvZRGEDx6YPczjffFvFWdTmQwSDM",
  "key2": "4Kz1LbKzHQ8hGXpVNiTCiyucppTeWmoWHtDSarA2RtCSMv9hncJGrNvPwrqRbZWBAR1SLoonmGZ1SKwoFVyVkdSx",
  "key3": "3ZPGY2YqA2sdE8KqziaFesTKnnXVM3BUvXqid86djSoU9NTxVNSrtTRmym6UZanv9sdEXaY1HNHjxatTpugvdX5Z",
  "key4": "2fGxwaGk7ffeCgJ3FgzLYftMnWL2bw1X54S6UH28CfGawa1rb2PzchYQBLNfovdfYwpJ8TaYhte77HcjuXUaXtoV",
  "key5": "2eVHvv9AA8w2Fc1C5ehExWxnQjzdHgm8FTgMsWSZUHASSNG8Sen5BVXiewQsMQRLZEZsbSak9tbdifH6gn9bCKiU",
  "key6": "my25tFiLr83nyBEa3dMG578xoC5FSZBAFvWAxbYao7iZEQoDg266E4hgg4AWXWtK1EACzQhsZ9VR3kC624XD5Ks",
  "key7": "yGdze5q22VGFYLBrNGebpKV55773cfqMEqHbjnzzpVXpst9xSwVAEYfxgdySRsoFoLfk43yyZAkRjb7uBBLT43U",
  "key8": "375jeiRoM9xxdraTkEr3imjSxxFGeEuaEVA1wcoWosPpbxmdGLaf63Ag6LgwXbdA9WNoELL1N6PrP6bT5W6M1VEo",
  "key9": "3PpJ3B3o5DRw32kwZSkcHHaB5TqFdeuDe5rUrs3tioPrup6UcqvJxCNoaWdBRPvuwHwRscugeENhNzCLJJx15w7b",
  "key10": "48KQbdJie5CMHLmU7SmxefBJy4juUzfVoQYPs4ERyhte25XSFXF2aBMQw2hcPm4y5DZZ48uF8y5hvFAjUm2La9Dk",
  "key11": "3gS1QLTeUFF5RhairZbUDwg3Vh21FmGEL1t9Ak8sUGSuPVGeAZMB2zgDG9Sy1tytpumQfp3u3sECtocKr4Cin298",
  "key12": "k4DPdqBZQSSbAgaNYk96bzse8TVtiGd3vyuryNzVvrUVWxEMqSrjfPRqABFRo1QXLqsGdnwvcjcCYYaa5RvGk3Z",
  "key13": "5LfKALvGLS37LQ748yRfsHZN5zccZYEQmEYwTbFhJf9nDw1NJufB3nL2YwYRTXQyS2DGboJ6J2tYKomyd357SYmG",
  "key14": "22VNJby4DbnEJyeFSM776dRMNxXad64Y85LyxAoighsSrXRasSi8LutwQAEakPELEwjeqzuaMrYUDvi6iBgeMdRf",
  "key15": "5m55G6LNEPPaCkXARorS7gYY72Ttrkc2oKG5912oYbE2AJbHw72adsqEaasASbXbQds8wZeWoX8GcfAqRkLoHi8H",
  "key16": "5Cs77uio7xKyX5DnitcT55rszadMCPDZqU8mxeYcU9SKdaEZ8SczjNvEnYAjy3t1oExkdN8PL4DmVp2dckEbMhAw",
  "key17": "3G98WUCXKLTPwpvRtWdxaMcbwZHKyaz5TKSu5BvgtGWq2d1FNFKYxs2krBQH3vCEXJXBf98HR5uwk6J3MUnmaAcR",
  "key18": "4JePw8q41Z4XoYvR8ezMLyxRmwrgmEsjG2Y9qa8QbqJfH1bKKZt7TxyYe1ZWMzn1751CowydfQDc5jk8ifa6meTo",
  "key19": "4FKDoq7nuD4nKPZCvPiaDQ5epvnQ5bhoJWwmSvLJ4cxpnbYU8sgDNzzCBpaHAMsw3BQqmes4mS5PKHwDtVLZYbkw",
  "key20": "2tWMJKApSZaRJ6x1iqWkxccUShGLCg6rpndFiopACj76GB151rYwD7nKfKEJpuKm4xdCeVDnZTqyQS5mbuFffx7V",
  "key21": "5DgPWR6fkwdWRvg5NyG3o6iEryQ8FjAhWkoRcSDHhYzGDnYSKoXz6v1JdJrKKhExFNv6W6E4qiNAq18E9fXtRHcG",
  "key22": "LqZmVUnc6Ee7mcpR3wJtp6BG1uBuZiTsKK7FxboFL45wzdNN9uYpVURrBNZNvJz33XN2FSc3zytK6uyRGncBDHT",
  "key23": "2ULRG16H6Kxh3qwQ1TVQtbvhXF7djYKmk94PjnbD9bSPd9pgi6j8Cbh2ALnJT5sWruBD9Ln4uxHYrzZbqNfgtsmm",
  "key24": "43Eih73myFXR1YJDqrTRQ3KwYwbz9KW9fPE3DkCPu3pGCCarSL4SjpFwKcdviUVX7KB81eDENfXKpUUZmhM87WSb",
  "key25": "zPHzUNRTrmwx8BnF9YxmkSEntoCPMpaSyZqHdzKT4JKmLEn8xzi4nchLQQRHjkvEHtXoJrpxJFUs1vHRwomiigN",
  "key26": "3KWmcAU9cNwghTKhwPme23rKYrQMRaehW91UJZPFc8JGaKbKZsgzGY4HyMxF6MT9Rj38CccdgSDWY1B9U5kvm4zR",
  "key27": "5FF8hk7RD4jb1XS65gL5BzWB1Rk6LJBUD6Qn3i91qhUfCqodk6zRiuRg6jC3ahgyQk8py66k7sHK9LGhaSxzrsVw",
  "key28": "QdCQ69dZAZV5kuheHLQWEnSzzXi2kFVFHfkBpNRiX2RgrswXCZRpzQsamr3eawYJRXSCMNXNY7ExA4LaxyeBEkc",
  "key29": "5VFp91qcpvBBrwLqpQGXebFvmC7LmVHJgjTn5CEh5VQsuTzKXp6tyc3ACFU69c83j61BPnMAPZVypMjhazWhG2kt",
  "key30": "5vooVqmQDB9JGLdyxdYdt73aeVhEuyuY57myTTtB6BCM8txbGKDEf4ARyR4dQTpznWUZaJcJ4mP8pwrZDkug3DFC"
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
