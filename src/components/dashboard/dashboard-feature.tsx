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
    "DoJA7kBcTtfsbcR2DQgVGUmti6YyEeQrWDjg264brR4ir7bFy4aCQCiyp1AfTiSjttfpEUKXDwyA4s9YyVgAkFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46mfQGtSHviMXT6whT7PJoLeCn51cdkibKtwMxkePuBYgC3vuSBmknTigXnMg5djYcCFxV4ddfgotmuzKf7du7kG",
  "key1": "4MLt47EtmnwBg26MbnF7mEjxY1HrFprNnDjpHP7vYS3PcPvRvGGhJYPRPR9Gay5mitkmjSq2pa2BhLcTGxLjAubK",
  "key2": "MqRJz7BYx2Xo1zFaMpnKsDpayFsbzu4JDviPjiuHfTZFamE5yzoUCmWqNeCTHnHrDyA1Yxa6mgcArXFnhVe3bSF",
  "key3": "5woc1DhunMJYMApBcRrE7KRQuBdnFyt1GD8Ze2kSnLRdpxYnxV6YzdtQauQ6EucXu8tBEAEjwpLvbLxrBSoy4DWs",
  "key4": "5vB9PrVXV9GqRX3DYtgELihEkCVZBH7EbmqKMvqTxL4eDd6WCgFn7wCZKgZEpZtV5ioLnFfNZUWQvuYKUocNwjZL",
  "key5": "2NbWYEUFwnanPUtZLMYycY9W5idRXnWyzaUbvnzcTQ8DNQFmwKXzBZBoHfXBQW9wM93cnivEXPR6pZeTw3k2W66y",
  "key6": "3BzDKLtpxXnvcxLr7rMEGyQbmwzJmBC7GLPkrkeqehRsnWNwJ4WoZKnvnC2jeuQDMcpFwm62Pj7BpxEYXPix2625",
  "key7": "LqMoLDurENB2JDbYQTayrrkZZZMfcxb9SDGSyqFu9f7xpuY6sVatAQBeT1kqT3qzwfwiJ3kMsCMapBFLU3fQkAT",
  "key8": "2QXFcJT967GDTd1ABNe135sgMgiJ4XD9H8kZApVZdC6omARvL5EoLaZ8oQ9RrTKtQqpbRdRf2RgBCpGhUHtYxkRY",
  "key9": "458wZk8cUeoy1L3RT5i5ekZMHhgnpCdXTePNXbM4zJKtobsGBuUhgXKnsZtSeGH6HofAGp68AaAb6NysEYDhAyW6",
  "key10": "2NvFzaTKzEqpLxRfFdDvKk9pSknhmBBCGfF2urnZsACRy27eFUDeuEfRr53v1dgtVFxyNj8FJ1WU3mH84TR19LAf",
  "key11": "216QW5ijoBbAPQw41NkdxDzwmpZRzCdqFLX3L8KULaiHdskonggV2G4g34nk8SEoZRTVzfZ7cTytSrqFNPmaaLpR",
  "key12": "29AA69UfonJvHaGut7MzzMZJzm1kEKuzPmoAMuMDWKJVJYeEjkGDM5Xnn8pNToSntaVmwGJncKC7ptRruvVnhRTW",
  "key13": "3PUgHhJaxwEDsEVn2ZcvC3ouaByqEEnexvvCxTg9vAdifQCCP5ahFuewryMgX58HW8b6thPdbJufo57unGgMimrV",
  "key14": "65QThAWBnU7aUKT49EH55ouoVCcFzJMkEL4B2nfPV1es9QVA1k2bkW5Kz242JCHTbnVmfFjiWui7EK8xas39DGMw",
  "key15": "gG9iMfhRSH8LDSLwjVjFnogKoHiAW2xHtjJudhr9PG35VsJ1FczeCe18awUTzbP6aJ31X74hGy4M726hNa95pRi",
  "key16": "5e2YDiozez6dVLFmHSp1Hoad1QKAjPPhmGHJBUfNAHxSLkhsyPit4yz3sJZT6Kb68aC2996svkhJQj65YtQvve8P",
  "key17": "3awbnNQoQuadgosANAENpB2r9CiVC6VB1fHcSzhqbqtExjdD9CWmjwmDoPensfwbGt46gQYexQ5sUsUUnc5LU7et",
  "key18": "3n1ZoJXHg7tNA1CCJpEprzxNWCwPWm4jaxJAMn8GJpCJrHUVZF2KgpHfap4jG5fw7hunhxrJNFrGLGpMazhHLfB1",
  "key19": "2uke2Eyyrtzkpu5HkUaEhgPytoAaEvrnAtmJRX8ZoomGZoVLYpSLPQ8PeuTXgE49EJ2vLEEw6zVJoAjQP4NSTb48",
  "key20": "2vCM3GiaKnRDDAqsrafqATr2fdgn9vTNFvExXoEbwrFJjXGWjhcLNsTh57QtALYtAb4eyWVAvNuiN3pDu3xdcuW9",
  "key21": "5odXShPgrr7hWBajiZvScVZ25LxHWjJUKm8tFjmriSmruXEZRUFaqFNAzZji5yZy3aujB4ETvyBpDCmsitb9dYGQ",
  "key22": "3mKnaMTQGEMXtM4fUjAmg1MnE3rxSDBPBU7bzHvkbEuwVWXrog3bShXv37uKbk9MxkqHJRRLEao9tVd9eijXHK4b",
  "key23": "5CtTLoFowDZvrTVm7RYm7xGJsdYANwJ7bvrSR12RZFTqt6PuvWVgzX5U1R6iD2totW5tC86QgqgFNu5o33krCa4x",
  "key24": "D1zkh9pucyxg3tzVdH3yztiSreuTpEqN3tCUQitzrDF8bRQWo7qP4eBPsiL13qiB5DR43SH7EwPMEi8DioqFykv",
  "key25": "2q6iV2UiksqLCcvxAkBvQVSaEm2nYh7LotuxPix7eJ55s4V8eiBp6ujfaMd2EAdSnhud2qCzg7GyyecDorJMZdyp",
  "key26": "5QNvHXGCmhxMY5vKQJ5NDYX8duroJDB2HMNS2twtvkMKBsArgZhesRFujNHUSFJm1kyzgejhbXnXm7CivuPnewCX",
  "key27": "3BZUpiyFFTEsY11W24gQYuZteKxcy1fMKpXyGybnLFfPSQf4kBoQaMUnjYaWbBRtddgHGm1kSDP2QjeaHKow88eQ",
  "key28": "64Uej5vJYHraWLznscguGBJ2pmCHaCbvjiUh7KZUvQubbwqSVUm5qym4YCq2MRp7eZbiVwo4qAupA9U1xxvh6ykC",
  "key29": "3vLcD2mpcc83z1gkUQTHCtWQpHvDGAGhTSk7ReQPmgawwvootS1QujfLvQM13zC7Dd8nVazjXnyRYwmSh1gsMKjt",
  "key30": "3pZVTDs8oL4c22uToDoCGHBceYXZm37usZ94GGpjrUjN9gDUbN18QYHfmBRKiAArgSrnVfVM1WVe4oy2k5sY328e",
  "key31": "5KEQymyHV3zzPqSb1TVD2kLCrAZMoiVYoHugfjaJbX6NeKoDGjHVXantbzYH2dm6ETTVspZmF8v63jfPErv9szrq",
  "key32": "vwjs7vERr8ZRqdm4NFdFPaj9ysKkiHW7kGCRv6P12TqaEwuwmE9HvdXQmd82dM28dVvWLj8G85HFxb43vfqBqHj",
  "key33": "2k868mbbAMWokZBx4m6BdzamLfbNuxEzywpMQsApAEaearj7SEu4Q6Vku3N2D4jGyUHV74WLrKFs9VFRZeRchtEy"
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
