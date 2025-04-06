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
    "3ojjspM9wByDx4uhTBic9MhTSPR6Cu7ACE2UxS2U5M7Tc9tyLv1pbFEDh8VQztiN6339KzpNGtJQgFRr3yLFmr6u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YKBZW3LksgRUFDGJqYKMhLyrJNahdLPN9qq1yKPu9f3e6YPhqqGxuV8rQiSSQ5Sfsi3r6n74GmNjiUbSMtFMTk1",
  "key1": "3YJD9XKfcKMiksHoXzTXrcceTk52TrUxUjoZ97fh59G6VEJwZkkUYEmRJEYATp8po2diE9Evff9vUKZBYN2oMJKe",
  "key2": "3cFugoeU5DU1hLVCYdmE7Zs2y4uRag4RxYyMesAG9pHKqTSjvC1grZnVqPiCThEKSTHHveHFym7tXoWSU4zbqWsy",
  "key3": "5vWf5a8wSG2SBozkyRz52MiN6FM9Epqs9e4aDscAqcSzCdbZMgsvPj3vL2A3giSmXwJ9ZCUoJ5RqmDNXZQnuQUxu",
  "key4": "3P9svcQbbvouL27kjSdQ2zEFC4UsYSVqoNKggxmh4WHT6bkCPprMvknyZBQ8AogXPgBhNz8BetugqRaqRy3vQ56H",
  "key5": "FRQwzN4EVrE6n9FvWfNRUXXDhZdgenyqnaYUacW2J22y7Hq7eUX2pe1YaAKPEWjiGvxsQJ5vR5oCgvvCJS1MNP6",
  "key6": "kfs34mnKoJPXJFyYLEevV5ckPWgjTs4mnQFCadXGJWa9EtfSGz5YLbiNTBvHVwp83TwasJ1mvPkTRWhEnT7KNrs",
  "key7": "29obiqySnYAtxmdZmAyRgjvJMo2rv1dwnxiv2V4hL3RVbxMhMEwCyw3Sbmi3CD1MMbCAnVNnzzQSWT1jJTXigncg",
  "key8": "5HwCpnkXutGxpTFSV5z2pkYo1ry2EidUydTw3DmWTPamwqDAVEzN3CFLusSdBZjEw6pEzZwcU3ruuMUVKkfmqshw",
  "key9": "54y6PusTH3km5b6suCXHA4NPCaZJYBjku5P2czu4PGMnpk7WHNJEu2MBGkjBso8TUXmE3dfJEXQHFMqA2GAEvyYi",
  "key10": "uS46zahJAntDZBnRAySP7Q2hDybS9rVdVp9L4rcMQ2WgtsFsmCjPh5DWTYejkyDZiP7Xu44TMQmGs6gMZRHGgwA",
  "key11": "31h8cNroZ7N6JjjiLmQCYuRHGyTAm4efCGGNrso2Bdz5EZA46j9feGsQTTtw33vV5rRYVH7ZuqW1Hdr4kTFKnPHh",
  "key12": "5Sd2e3FsU3otLtMiVsgrNcdGQKUK21b7qVLho5oBDEsSTTd2fGT3ajV5pNwxaycneRUR8Fdh4aieqiGe17LxmMmH",
  "key13": "4VU5dWD4UkjSUGyN3s6SPXXNQofh7xkUKZ9pGY6rB5qZEToxWvG2NXy2pLvum2mFSKRyRvAh95dtYGbjhy7kPYRg",
  "key14": "5ZhBKk9aq3hqux1XA9ntFBLwkbpUFiagHwJ5icWqt3d79FS8jVAKufkT23JYgwr5o2QvNjVJ2tx1nfA2Tgyea3Uq",
  "key15": "4yCqjgEje2cmCn4AkMpyfhKYKY3ukAtc9KhQp9TAD5uxVAeNQHuhd6KYCbLxaK1f4YJ5hP7EqDdwJM1r5CALAQdf",
  "key16": "5P6McVJeBF44fw93hq8ixCkR7ZVkZApdo4NZM8wJCfbaEnRpQxtTX2WqgtbzU1yhnBbHXQQUbsFDhkmGqrXGNNqK",
  "key17": "2g5V1F3JinyPWvtg4zzjBSri8kEgq1cPgtHPsZfFk1PQX3hJurU4mGsnLbgCzx52rPjz9eKC85vEjj7Y1u8BySjA",
  "key18": "5AVNms18ExKtSC2T9v4usnm3Lyc8aVAJ2czJ5uoYzcCsGexhcHWP8BmDR4ub2NuCoSPrhAa78xuHKi3GoFeDMaEo",
  "key19": "4cAFMsBgL1Hbk26TSzY7TzY8evtEpVQpT2WTf34mqLtto29QKyyt1Bvy6xHGejXh7Gdp1tGFSjYFN9wx8jfmjXaE",
  "key20": "2p7mQjr9TqoL63agS27wa3jioqBgd7Aro2eYvb8KxztR3snYnZSRksUQei3x7xkr1MWkgxen84wR1J5Lo6eHtGvv",
  "key21": "37BPX58qESY9vB7bo7mtVuijS6EW9EMfuJ5JHLnrGBh91X3nwMMBZvpBoxhesDBvxgYwBeJX9K2mWUKu6SidWRG3",
  "key22": "5P8PfUWHqYh5Agc1aqrcEGgYP1XeNMSM3EucVtakXyENWRUUhWxdGeaFUUmwkoAqrHepX9b4WtnPAn2g8LntmB1J",
  "key23": "2sUBspy262YuG61oTUiyUN2bxGnGQ9t2eogRPrhos9Ynx7VeaqJXw1pzZNyuSWGDmPDQytjPq1ZGpapFeVRhCorU",
  "key24": "2Tw32pkpjLx2VhpRYFcz1BohBiVJnFbrFAHXqN2RzxKJUTcv4xkvUZSRLXiF8qMX7pZ5z8FKUxvuSsY3DEJCwEZJ",
  "key25": "2mC1yhe9jrHdNXsCyNtjRuKpvU2GgHKmpyzLA88zqZd5o2KyNZMyoN7nTJLQaorEHsjgekUoYkfpCTHQ1mW1LKCw",
  "key26": "2i978QQwTtwn3CpNyuAaSWqyrTca6JJUyn79SADGB5w7MgrYj7HxVvp2AwADB4jmZg5oRTLhv4yGW3f39HXPj1tF",
  "key27": "4FwWgBZnqbqr8yJ37icpYevgefDJTwk5STMmx6FC2gZFMwyR6eSQMgHggwMr1WzLfwcCHUyRPGz7hvWrsxrEUrVf",
  "key28": "5QNXWW6gBaDpZ6xx4Xbuh8ic8xS7gVxcguyHDibxAuP75LoJWG7jfE5d8iReEjN5U73M2mykvZJuEAy3jNayRBTM",
  "key29": "2hPLgAM8xB498dbwNa5zUuEBoBT4QF98UfqhhJvZSQexnKu7eVeibmCzJb8BsqBh5a33B7rntzLFAAqSjNmqYVGu",
  "key30": "3AZa6nDT7W7QrL8tYmQ4KTjh4GNzxHR45tV1M3K39vk1wcbwGnw45C86mtC8r4x4yoGehTc4ZyS9dEXFgDY35h9t",
  "key31": "3waqBpNHnK49ekQype1eACysbmg6Lkn57zkP1KvHsmTcVotikNnPG2hM3wNhQ5JncRPA3jW3ukCQMPiufL8WqQpf",
  "key32": "5TpTaJievkMCKRtKuAqFVmnAzEn31PzTrdC9NgqV9Tp45vdyY8C2dv63K954nPFuKrkeXusXmbThkt2eFQUGg9B7",
  "key33": "5ZrJJosTpKrYb7mMprk5S6Akw8fnApjCAJLGmkMRW8eqKfGwLdhuNdvjuKCvZWMyY7Kz1pZAaKXyUTtDtcCCHVru",
  "key34": "4YuH6zTDoxUdcJSkYLENG6iHk8jEsHqmtdBXstT14RFSQrkgap7UjePAFVfsQmZEZSpmjJqK2KLFNqFpLiG7hp3n",
  "key35": "28cNfF8jWUhzmTpfsQeXzzAinYRcyuZWoznoCF6iTxZWqhuzef8XUPW1nn1AktuMrSNP5yLpPz5S1XJh8JWrqmzH",
  "key36": "3Pa4BKQuBhFHMcmFiTQjb1G4NwhAowUNv1XwMi4f4D9dtafS64pYcBZR8GRYXY6RpPCWdkSRn7CbgZQLCKY7Jras",
  "key37": "5zcPRot4xWsJnyda7jpFPjWv32sX853LC8cQW5iRu9pWb68yE1ZACurMcDbE5ADqsnjbxLL2A6Xuha9VyPHLup8z"
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
