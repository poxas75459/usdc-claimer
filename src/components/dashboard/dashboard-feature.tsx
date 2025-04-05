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
    "1qwv2z9wVP8S4tfHr32kjZ4FxcCis5aPvZwYt3sCGedGhcVGNnYdrrREZC8z1B2az2Yc4cqWNpNbZ2cYEKgf4p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZXV9THamqw8Nc7oBqJe212Wo5dD3QLEpFLhD3seGrrpQE7zDRoVH3xovymxqWu18AZJcYKwPNoe1m6sH5paavNE",
  "key1": "2puiuKE7TBcJemTcXicBdSKoG1Nm3tXPZwjknm2Nc7kdDGvh3ugiE1ywE4LXwjdALapMJ1YJZsX5caDnWyeRahFt",
  "key2": "5DaYH7JYHJPiQ5GWo9NGiteAG7EbrvmT9gfHxnLkZakcKd4Z6pXBoqkXj35sXoMN7orestBPUyLseETQNbBYaohs",
  "key3": "5iHJ7vC7KuLmPWMgRzCLZwh13CcuFdHtSR57PSfWDfxkmpdPZZ6aZyXNYXBm6dAGMZqFCDJK9aPieNSwZe8kR6XN",
  "key4": "eXcuVsTUyXMeCFNMz38HQ4Br89rKTY2dfcrS9vCgwApYUV3fU2sRtZEBn5TNDVPmQjCHX5rbP9in898PLnhvEqD",
  "key5": "2ghX3Ubo5dTa2xHiRt3JEb4Md2xJQ3AXgfihvwuVFymgxmYSqDhw9n2kr8Ujyq2Dn8TeCETZaqDNPVFWozjcH2Zy",
  "key6": "3nVHVGcDdbe1Uw6LhkqtRb5gkbDdiRQdKtTJYtoQD7FRN8jga7zSWA2EbXSeXivbXjA6pdVG4RwVus5J8rS5wH2J",
  "key7": "42MvusCwHPvWZj67jAxuVMd899LBLjwfYNgLoACnA2WxRutdBBsXcWHf6rNLgiQq73SkVQko3xChefZ35oZfCEGB",
  "key8": "35RnTrF4BMXLdmZGFTLZ2A6KEPAuN1FTo8ciC5dtZhq1GhMuW9ZP9aSfjHaSoAu5cm5BsDg8HKr5dMdC1tmkcNaH",
  "key9": "3u35syZeR81MDe2bmzufNcKGfFSAfNZuE5qtxS91mCKQetos3eKFf69eGVsQfzsNiWf1Ft3DuKj1ZTwmCTefehnG",
  "key10": "3CNDUJvazuhMY4c3bFFwwE2qnhKo5dYhFA761MsqpviBRo4vP9tRPRYa3zEEqrvDshymSN7gACqSDHJgG4Rehdkv",
  "key11": "Rq55afzjLyJPke8k7vfrVTfmT9MTn6QPM1uAxDuUdzh3igbHHZ7yooXyeoQ18vb5YTuTLEpqFsAK9oV27L72KFE",
  "key12": "2pdFYh7yF4b4t4SFySpQZiFtgkmqWMUAmNxEXGA8PUXp6pUhYVHER62Ze9WsnWSm96WvY2GzvZe4kKtRCrc82hPy",
  "key13": "CmXghJAvxmMzKMG4AadQVYp1BdDfT8JY3DroW4TEdW6wbjQRDN4hUWugzGQ17TLiooMVmuFAKMCgEy9K73sY3SZ",
  "key14": "5BbCXA9qjT1myym37K5xTWmLA9H4ihXviWHsrhERDuPT4qjwgM2Ai8CdRbn5oyCWCDvqBvpPRLhF5wDsTKqDr6Jz",
  "key15": "RyBYCvkZEuAymv3bR8LXF363QfFXvsR5vUU7VpE13p73tkuzWZJLBJ6hFymRvd7bzEe2pCkM3diqZ9CVLBhekiC",
  "key16": "4EDhWJ91GEVBj81xjyv3qH2CwCDEs6i6jJP62oTfEEHiabywsxQEGNS7mJdaCpJ6PnJQj8NGXdirLprpCgQbTBb5",
  "key17": "2frstHXcWsS7akf5UzDGaar3jv3oGHzgrBsfPPmbV11d6zUogCXbUXYAERUY5B4Hd8AFAKnKQmjsScszGus8hVoc",
  "key18": "38DwMw8YFfzQ1SMadb3GNyTDFqK2hkmxgTX9U3U45bjUdW51TjoCthsu2tYjs8ajmb3Qr6YgH21vfNDd5NQsj6s5",
  "key19": "5JDh8s4oozhNfUSiLvLQK9pyVCCSLFyCmnZ25CB1ckchV2X4arE6u3Hyr2VxFcUkWySoAqwpKWFJFmfp3csuznLH",
  "key20": "4zCxRBFsB3KEf5HcxYZQAwqDnXF24uEoEZPPRWXn643465WQKLmme8skgvxNxH2kF62A4aDrnxPpXL3tCFeBPwba",
  "key21": "2PeSkeLkLKJ5heaXyQAgJvwEAYMtzNBsWaaSQqH3v7oFW9zHVa5fHKXPsDtCdem22mNEEoBQkayC2BnkncVNTbKo",
  "key22": "2vBSDU6BTeBcoTaWNCTP89CTTXadfcLywrX3h1kHWGVZbRgW5H8g6sHj4orCa2nxeDRgXRJ8y8gD19oNAs2cSH1R",
  "key23": "62ijE9tYbK17p7pDbXvSuGV2jJ2ArrwTYbeeZFS9SqAxNCcNiYUJhENEyqmp7X8z5KR89uCew9UyFRQefHDBMFFN",
  "key24": "31uZ5UDx1S6a1FUnKps7EFRsmiDMoWCBLe8EJKFLJQs5VvxExDnsPLex3QsAe8CK49uHjrBUfEaXStLX62qK7TnE",
  "key25": "3CDzC4qu5pbTpV1D5TAYQCwtm91PosuFh7ckRdaHpujGGzG56yUCb5KBTusQoFziNKXnnFmYpHmMatvrmhXmsQwd",
  "key26": "4kA7ZdHruKhPQobUygDUVP2HQqSMUrcwsVEkKSqTfUSGi8tzXCaPEx9fN9jJzszvtEGnyvo7q2d84hvhk3atpAdk",
  "key27": "4VjFUoxZyMvhuqxKhrWPida5L5NADCExs5cQ8Ti8n7cKMh96etZ6ot7p1fy1kQyUdmzaAfqMByhDC9bSZF7b1wJJ",
  "key28": "5tc5XmoiLmhgDgdiof6hu8yoaiBmpbHFZVDLkUY1PgK5GHJdGeyXmcbjjb7NAMUR2yzjVyvQc54wyDnDU5zspZZQ",
  "key29": "ZmaLQwprLyj7CBVg1NA7DvY8DVFDe57k8wtNoNR6KyCDYgUjUxehMWE4hWpB13cN33hkdFBdUZ8u8sbkrJLed16",
  "key30": "R8Yc16Jcox3EF7jQuJpndU9UAiLG238aPhxk9wjZ8GAynFTxZE1WM1sSUujRrBEGsqW8eHPeMKi1oJZPp6rexG4",
  "key31": "JRaU8EWeB7jVeAde1K1Wy1Xm71pYG5ogef2ZdvjiHLo9jMQDkjMeKJF5PoAMbD2jcDJppEX6uUjdnLUn5RtVQFn",
  "key32": "5UVbMGrY8JxFWJfFrS4sAKzk7ttJkQ3hk7HbowqvhTnokAzvWMCHES26wNgmgzRBqdp2A9WxdPCFW1EsuSnfy7S5",
  "key33": "2PgspUUfkbhU9gG951nnc2E8WXbn4VF8DsJXmSSoeAoxxXhg84GCoxvSZ1h1j9soSuDqKoBLdBXW9r8zbaJaNEnp",
  "key34": "5Td7bnmgHQvCJyisrsGbAnYqT2qzA9g5WAH9QgoXy5MpZ9MPKR5HuKjT9TFAg1V6Se7ws3Ty37psVJL5RTiDohQ7",
  "key35": "8mjNAF2EM4jBHN3qFvfpnFUTc2cXsRpqnXePhXZgnYaauDPNKrsQZorb6AVPoySE3ssgBuuaveZCiCP4eAFWeq4",
  "key36": "4bFLAqJcdckznVKDpvhR6RvqbZiEsjn3qyVf65i2u5vzVLbbMGH1t77Dk2fv8zayDDYaqmmavrrB1QfQC7S7qBbH"
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
