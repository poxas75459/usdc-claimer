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
    "4EsbSAFYUJM63SLocZhYsLwYoii3gzPJwMfUH47jLNBH3C57F1pGK847J6HWYQskRLiiu3JhMW98tNgUHQXKTXjM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A2z4ZZbKYcg3JtC2Mt4mH9YabmeRGZ1tqnvurneWsHakWMprhfJbALor5z4pVCCmvMY8uxnnCi9Ukiav16tB96w",
  "key1": "2e7Me9TtzbKdTS69Pq9LkZngDrBHWMB5x7z9hy1usnD7DJS5x5htNhpmE4BHTdNCvij23riQTenEgwHiRamnDmtP",
  "key2": "5X6sn7Mj6Ww4R6RdAYbAdw6GXYjtLfsHbcWKCK1Wa2biup7ZwsrU41iznW32GHohbHCpADGvk7yRNByPYLgVCbdL",
  "key3": "5Y2JwqPo4mB54KFJP8bT79RoEag4FdBzi4TG1xRZVA4TVfzzxh5tqnPBHLjTee7Vq6mpsTdTaDdxeEVBbLjtNiq5",
  "key4": "fyFdAao5G5avgibDgnhaRrWa5E29nFTVEv7aqXN8Y8t7F1JDPpL37LFWzg4RJcbeem2LyC2HTHGiwfpobJcyGfa",
  "key5": "4WtAgeVw6R5EbWja4r1RFeh2gJmbsuyYWqbSK547ub3pHNfA3bTdFVxhzBqHLCpTUHiSLAC4d56Fe7BoTef7AFLv",
  "key6": "n6hWwzFB4cvWHoPLh2as8FH8wHgfEVPnCExTFXLEpALe556D2ugTHR1KwNPvQm6c5wsJFkRjFd7Te6TqpUMtZbq",
  "key7": "5zXSMg7XZkuYs8XrNZqAptAZaZyDP3nqDwbatefCEoo9tL6J1g5aiwArsBCYqjmJHYAkHhbpbfeRnAtk3XBZW5Qp",
  "key8": "2MaQ8SSeAQgkN5XkozAWzCh3HXnUQ8sx2QgGxnqgLipyNvFr7rNy1Rg9gpChnAKYN4TcY8qbxKDmBJGUen5JTX9U",
  "key9": "3ngmEoipDDEWTrVLXo9pM44JqQi1C9kkQbNTY8wQW7eRXEYghX76odWWbrEvkTRokF8KZsyZF3iowBZapboAkfaV",
  "key10": "2dJ2qgZVaLs2hfNiM3cDbVxHjFfcYnZ8cBdWbtnKK1KLwa8QZmioS5zktyvwnWaFBi8zT1SQfMQEAivimL3YnPTn",
  "key11": "3kzqkMqxS1cmdqoiFQKdHrhT1ao48JmSBtPZJHpLANNze3ECYAteQrZCtVvPUWo3oFAKCw7CgZoPCBj9QXZkPybp",
  "key12": "dzDfJo2TcNqVxwLS2L2EfXNX3ksRGWAMbEdrrPrKSf6WKxVh2VkeQWjUj4vJm9DyVpnEMVx8sqdE6uXRNa3NEC3",
  "key13": "4Jcz1aRvNPiYidUWE18Cxac9HhjF9RgrWjgRz1sBQhAUKUEU7fB685yAaCwmMjSdui5jjvAMT2d7SiFqh1AD7gB5",
  "key14": "33bCvavZwx6n9XBzHrDcp9MK6oJMEBri6vji4UnMuJVw7v9o1yhcYGSP5U1nrvEaW35G5XvHsKFjNtdhS7p3WQfm",
  "key15": "3eDzFWWjtBoTKQYBHrS5PRuCWRwaGL2wM4nrnUYVRf6Vd4xdNfTNwA4NuSqeXLQUQCeZWFaJ4XwqqShPMy3r3eyv",
  "key16": "4B91nkpnab3KY7MgYcfvjFYDYvMJr3t4zsRB12fnBFcUXTx1VYkAzQWjfW5H32fJEpjQg4XV86rQMgwjMCKbJ92m",
  "key17": "5LYDN4zd15hGcwWDyZoSRCkg9oVBwoziQ4BoQSa4efkQHNT9Fm6CZwtEXLeZyzHf3K62zcp3wLA6pvjpXKV1zPQR",
  "key18": "4KoTLYr6J8FGR4YahoQTQTMTabgLxpaBzqRqV23ATNGhXwJNavRL6158mQJoWcndY3uMYTS2daDD6EwzsXpFvwhN",
  "key19": "3asE8rbv8kwASWfZ1V1gCZGneHwN3NNoDW372Vc25h2bQQZJhtkqXEeAZRYBsiCNUfrdjspaQYfFFN6wdvAoQdSz",
  "key20": "4ZmKGJXft7sXnZsMorvDXyMVgntvYT3hfDomfqcjche7WeZTXKREDFtfQv7hDuVGsQqvmjsH8GedysyUom2fmiaM",
  "key21": "39V8tjb4bSVEzWXk3GeaJmmDAgreV6mfkxyxCe6WMPCrRYR2eJMYdupwQfSRzRsqrY6vVhXKrA4vaHv89F96y9gP",
  "key22": "4F1YyaWFjrcSkjAR13ZqdX1wYvrTyzxwtZZ5gUusBRmBh3XWCQFEQLHz9xcE9XaJTikxwEVyEyTqCUhMDU8DiVTv",
  "key23": "4iceYBoJZRt33akyKb2YwpXMFWLNwS6ZtjvZEe7BvqAdFhsYPkkPzmDZ9YiwbiUY5pe86FZoHzGD6WhADd5W1Rm2",
  "key24": "51ZMHJAqig7Ch54zHQ19zh4ZpsiZm3TEfB29h4ZLyVo2XEWV6T1ch8dNCbC1nY3mSkeRUHKf13h4VVNxdWx72W7H",
  "key25": "4oUmBjpmEFTZkqoM3Ura3kt7svc7nh8EbTttKvT2wSioj727SpWp4ko6mX6cAR9n5WMU1suuFvpWiRuXvZi6PNG8",
  "key26": "ykj8ABbxe1o93aCrtw561bLZux6X5tdKMvZ9gc9WyD148mPzd1VJhW8pscqgCc71pVFZoC3jicAZU4znEQWsVwW",
  "key27": "3ybTiAntyy6F9UMDKpZ3dmt5MEnMz7MYXVs8ZXMHccJj6Mnr48eptEqc1WVj1fF7KJQLtLaVdDoLwDVdmDmyFFGm",
  "key28": "3zf1DmuKCyP1cLPJdcHvZWJt8b76nzyH8KftY5RYJwbY2y9USbvXQhd2pWYaenLW8aN4fzc3H4MDpX42oC2RU16U",
  "key29": "3oR9u3BAbupswPPkg53NBtHqkBVbWQCT4MPQavpRow7yhntoekiQjPxoBdyXNYSb4sbpZrs8SgZEsfuSfgsCLjWd",
  "key30": "2D5t8A6rkk5oMZFFUvbECn51w9tAv1Moa6jWiE17fcWWwiDBkyNy4duk4DD7kYBpRjiEyzHNzyjDFtsSHj5gWosm"
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
