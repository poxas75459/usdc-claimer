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
    "4YGVq8yhr74qpk7fPMwUxZZqTc6ic2sQqNmXhJbLcXe7f24mZNd8aqMx9X5rtPnVJxeAEQLbCHGUG8Cf6Mb1i5sM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rMutdPKXeEz4pprXrTTcSGdD6VhUUB75DtYGz7W5k3DATVhwBZXjSSQYQ59C1KtrkRxkPvacdGYtCv6fnddHxqb",
  "key1": "VG9mJkcpLEuDYLGhFPe2qhwwvffwRdN7yJCW1ocNR2KMQGfXenBWnarNckE57HcB3YMHPjrZkSos5dSsnCeK16Q",
  "key2": "NCrauMiysCXpHCu3sv8ruNFEGsb7ta4rKJZLunv91LXsuGmN2EBmbbbNQM4eN1nypbZxJhd61Mzfj1BZKdjNwy6",
  "key3": "4yKugVzHwhCHTg9Ue6knea2dz57uq4Locq7nvdBJMhDGMMtLutscDg38MU1WXMDvxNwWeJnCRdujavPeHWzo54td",
  "key4": "41nvUTo1ZCgw5mQgaEdXwaKJuVM8w5MjeJWZD6y3sv32pVbb7qJ87wUR1Vv1ZAAwqcNkU2g6xjxChhm8pccS7ko8",
  "key5": "36UCMy7LZCQW2y5QvrDnXcQ5kBhtH3CiY1onewr4kk7WMkVq2hMgwvVzAJZHnZuWriaenGDwHT8CR5BEfbLN1zaC",
  "key6": "bMdoDE7sVWVERHmEGzyKtNpjdduG4oEHEcQRkhUdYb9qNZccazmz7DWh9ZaTAsMjHP8W5fjkgVXSUkxmADRvZfJ",
  "key7": "2x2hQELaLymXEeh4W55hiNSUPsyPQ2RSjuZtqB9uVybHYLZfdKQZv5sxVwxWC8xuPymP1HvYrvdoL1kvYDfNcUam",
  "key8": "3FVY6QWiCc3sYMj6XPiGoh5d731g59agyAdikjFbq3LkLtb5ueVbY3SP1AK9sQvdBUX17RUss4z3YFP8ESF2ufnM",
  "key9": "4vjQgRQ9evQFitbeTG89XKSH3WShG7i7ac3Z7TwJTzQkF7NeVzYdPXENhkkehkWdMN59pJvc6QhkQuAwYiaVfpR1",
  "key10": "4BhdEKyeiWX5RHvv6zD2ZA8DbFfBupuAfKNjLUczvrYcmBNTzMxTumpFhBAJhC1BJVmUwBNrZ8MmjjVmChAyub6R",
  "key11": "Aaa9somKgGSeD3fg6mMgmRfvRKfasU9FBRAbaTGiobgNWvBSVCtTd7smMjg916Mk2Kesfq2erduqYRiCgnmokMV",
  "key12": "4ndP3G7zuYTkC5UdLL5hBctptCudHthStMpMshS2zUAvmyQAmVusoLwmqwLXc8y9EskCt3Cp2kfWZGAh1z54aRz9",
  "key13": "5dsPPCvifhHorieomhJ1NzWjLZJqjeKb2xxnH91J7wa7SXitjS7VH1wBVNaRQFMN6cFoYWvfrv8ZmC51XCf4PnJP",
  "key14": "2HAioy4EjMo82SoEAMJ9jxfxPa4oefoB5eY3MwHAYD1e1bYpCMPq2heEDCuj2DZdQpCQB3A4ZgqVrN7Y92JPQM6B",
  "key15": "2t7YbEGQXDkNqjskUQ1CkhHRoVPEkMrThMre5ECAkasPEwB2V8DENwJvpratBtfJHyKhgRDd2Kpiz9RzTijts1V6",
  "key16": "nuxuBKx1TiRnjb1X2oKFWhxba54FVg3uurkRTj5ghChKFQVrsT1jnZrhzAXrfiF6wYuJ2sg94pFC56opaXFaj3S",
  "key17": "2ULRGrAQ8U5A8TmAJuVb4ykYHqkhDia9VwxE45GQcFx5Unic5X7LrkLFgVTMTFT6t9riJzH1KQjWspRiwkhbgn7k",
  "key18": "64osxcafBaCj9tYR1Ta1Pp2cWnquatT41rBq3u7pRMLttTUba49DQqM2W4d6ctPKwgJ29uCGJEiqjtWEKUfDwmhB",
  "key19": "VLE762xcJpeUUA62aZZEo2gCrZGYpbELrtht3AXZ9KpRPNPcba7NCU47yYGhzHpenBsrRQbnFphbAz1r46KaQ3A",
  "key20": "5eoXBXucALfFYT4fW1Sf7qzwPjRnzwNq3TsaN54BZCbz8Ev8hMMbFf5PwhZvsf5WyFhFvYX3bsjtqdZLXeYnEg7s",
  "key21": "5n7bDyJxHYNgwr4neb4UiwLwxsLgx9Y2ykz7PB5wjKSsLRGW5raLJFHMR7wsqEBF39EecDEYUmpjpKLHFo4H4VgJ",
  "key22": "3Sm4ChcxvXYKgCGyeoRiHzvCjcr329Q5sh1qE3KGpwaGaCHKhQJjeXRdCSo3nhGceqDhNZUVV6NeshbNCivgSKrj",
  "key23": "5RoLKipGibiJnMwjX3j3UaTRedjafpEMyrR3CEeVqLYF5aRd2CoB3r9SKBUYN46ir12wVyF5B8xbwMuNzb761w4b",
  "key24": "3HsH8je6Wjqp5jyqrKDZc4UCjWJMyRzchiHysNNF5rFNCVZobKNEZzveRHdpg5pFS2vc8pP1vFGYcgxxTCu7N8QR",
  "key25": "5fMrg2241sRoLmq9DW3zekcMr4JnmNLQKPyQEmbgL9uMmTCcBWsh6YuUVEGmy4XLCf4B4ooP37cQwjAPxtvrbTr8",
  "key26": "4GfZAEDdcDwSVWX3bv7JBpDGzUsBZDbxeAqmwNpSxZZDwig7ypEexZezZbEPVuLf76LYePvrc4Sa6eAk5x1MV7mZ",
  "key27": "5gpYPLDShxQdUajVp9AmRr8dFXBr65kn1NsSow1BgKsE8yXK2XQ6Enpo83e71bwn2E6ANvdyzdQdsC15Z5hhR69q",
  "key28": "457nWt49U11SPpZ3V6kNYaFw9SZ18wVDsnNrgJ8LQ49KoBitjKSNeM63Y7J7buxVG5hewQRZhB2PQhjkBYBnRGNM",
  "key29": "22iamxg1mAps63JywfN2tGssAb1jrbua842gf5cuGxbPycp5yEtgtUYqBN3KE8uSp3Ftun9fhz7vFmjSFCEUo4xW",
  "key30": "51zD3EHBMCk1HKnSL2YejxjdBNj75KhPJykhDXMBdSU6Jqgd8RPJbjqBAwTMtBvSbXM61ByYP857yeFiAoXtkcCa",
  "key31": "5KA2ERsrXTa3kPykbSrNVeXQGjFUrzzgg3uJn3cNVCCkDGQSjm8Ed4ThCKNbhpgiTMWwwozEeii7LVf5Y4cwmid",
  "key32": "3287sWcRiVoMcreTDFvZBjw7qPPycQGSpS1EqyJbAXT6Wc69Gqbfe2iJg9nVM1imUBwjBtTtynGCZ7YV7Aj6zzuZ",
  "key33": "4Suohpd7BzFBb5GyuWYM2Rv1gcU9yhcaxUfiKcMp6CC876rZ1Dqze9Baot97tA7x2PEMqnm8fQxg38C1jHQfyw2S",
  "key34": "4GkJXGyPFLDmzug1gCwoMYLP3bbMyNpZZ2nGFh99m2dBP7rAqsJXWDhkcLZK1MR1MUBi834uvs2jU1vYcAAE34gt",
  "key35": "ipm1SyAFqvfscWe7tBFN8N5brpMnA7pwkc8GMDZgrziosT61B7xCVdDg4XCkq1TAYj3Mg5FKHM3Bsr8pHLyKdKc",
  "key36": "4LUgKRNcrvnKkfnDjyLf2tFHN96pgLvkUJ1ois2Beg2wfRxrQ3PtT5UxtfX1W4m1CfiwefGchs9PjboWjMiQ9Dn4",
  "key37": "7hc1RocHeRFofhWjGpCxp7K8hrucNAQDBtwkmcziYzus7owYsbQvrSGufTvh2Q1j3EBT27wxU7ckUczEtExTw2Y",
  "key38": "4KHtRKk8chavp2ZZJvYHBg1BUFbDhrTJL7z8UjQveAxC3w2xv4dvBTLrtaBUGy9td6xUwHuXKDpdJBdzxukmkWBx",
  "key39": "46Xkq3okrRwfDfaYej9aEjhqXGj8JTrDWDARFmP5KHCJQmH5VRorfJUqAxXiEwKdsScxyoj1zc5r2AfbosGgN34p",
  "key40": "2DEoNFA6Bz1MbFnrxiDKafJ3rxhic3Fw7Fen4NbhX7YLn4ob2jQtjSa3McxMhdDspcnqJLWAcMZGszyfoUKvdBrW",
  "key41": "5waqQNqT1T9PLVXYTiNMD9L19EE7D1RYLC7CpF5cbJhy89fTtkXuRFMQsWhZDPcp2wFLQmPxzyQLfbfart9E8RC1",
  "key42": "2orK1N78YLBJjzEN576QyV5bE4CJuJQueLgSxG8rSSELxAaG8zpmdwukFv3nj34JoJQPJsSnphtV6jp9JFWsU1hv",
  "key43": "5Rm2cWUYBGg1mVHGWu1pqWYYvRyP92z8BWkKFJe289Lehfg42vTyCmdmnStYJ8jFEpZWw4FGf7G7V9nV9LUSDpRm",
  "key44": "2dgJLbroaH85vmMLfmUzMq4GHNpiyJuGavE1pmrkG8soWmyJGD8XbCzCVFjMt2KGWiHv6VNF1KLg9Z8n5iTP2qXW",
  "key45": "2AbGqgCHzt8HegvSYQsZ8YrainZrP8wUm4JwoSrGRHvfpntgZys2T8nP6MvzAfH471Use1GtZokDggmHzSxqXg2C",
  "key46": "y76fVpUYV3v5dj5WViSe7J6HmMeTrEFtuZvqsmLoTc6AtBFyq7UpsDggF1pKJqyw5xGRvfaabuxHxwKCGW1ggAz",
  "key47": "5qNBxo41CweFzRsg1vmQrzJPeGW3XnhVhGXMhwdyNmJm9FUDwdGif7bES4jeErM3hW6oVpMjFACfHDda8Aa5ictu"
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
