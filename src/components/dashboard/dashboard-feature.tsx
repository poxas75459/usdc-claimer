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
    "cs67xfamk5ouRjXzdt5myPtHwHaJyrGav7dSDTDP77HRqvpvxFn2nHoW9vyvLZaBXK1apFzBi7WBQcfiG12ifUx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nNqHf6LNdHvngxZGEDpiaokmAx6rPfjZXnigK9ryr8cuhmcefzEzFmauFZysy7xRErPmipCJsTGHwcptbnegeoX",
  "key1": "57pSb6ftG5ojjJZgGag6QmBpYc1DEH2c9wxKHJibqsdnqwemW5kzJWxXMHnJGrJpwVbQ9v2KTm25huNthdgLYgfk",
  "key2": "61W77X8YCSGCLSpPewa6ZvoXtTzZmNJ7S9aK21tF5dCWRSQEkhRNFP3cKfCcqRxbFY4Fc6K1s3Mc5gUe6xBqLJ1r",
  "key3": "2iUKoyaXWjeMqRP2pCRF9r9m4gnBUiKyuugvWgsh9Ns1BdTC2MUsCQee2sG6cKhLSd3KmmnPHCRZmHRdUzYMiF2P",
  "key4": "23TyarXJ84jDbnCw2UWDMP3m9JK7eT6gUbDXzHSFHLzzj8PoqQbVzoRXa7N8MCxT75rvpiXKejqFPBJFA9SCKnMB",
  "key5": "8n8TkbcFWqww5ifmYMjVyJzqLBVUwjG418aQeG4eqSducWPMtes6bmJGXNtL3yyTTpxkmcNebYYwg3cvJiN3uyQ",
  "key6": "aDm85c5z4U5NWeBe5WJkyYJ2qgdUmEvPHYUi15JBy5KHoMjVWaU3g8cSiHfQLXQP5js6UwdSVz7PMzLHhjMHKAE",
  "key7": "3rnhRBzsGRrFoomMCPxciCriM4CwVF3sVCPvbdnH2qJsBRafcMHHPumTnCtKiXt4woCovkmQi9t6oNQWX9D3FFnn",
  "key8": "3RZYkk1si9yDmRLCewzLNH8MxeffDxTyY3DLyvVwyrNeM3oQQdMqfPscHn193r5v3HjKHzEyQmWsdvXowuUABQ5j",
  "key9": "398AuJbziyhyNuKXq27SawVZYJR6jvwGtjW3hFMmcToYJc76QExStg9yxDiT3FkrunYxUDQuvmXNJB7LCtKnTKjz",
  "key10": "5avs6oLKts9B8tDcpzRk8TSc1B96rMewxdpPfCAB561sSGNp3SovtTjEYBHQR75fMYcNh7aJtb85L1V7swDo9ZNA",
  "key11": "578rr7PVXmYj6kpfPj5diA1sNorTB6S9VZrjqPBRzu3aoAuABQKtvBVXKCicqaKoo4qMJLhGbzRABTC8etKyyTva",
  "key12": "4C3dwADbk3tAEWJjhrzk6G6viBE8YPKzEhmEeULdoSf1WCZAHpjYFHizzMhn1TWBc2eS15E4zaFCciDT4VYFrUjt",
  "key13": "gdzqsTpXkuR7hj4kVbQ6K9bVLG2MQgGhH9gJ7S8muYQHft2wCMyUiwFH5ZYV7omiJzjT9A4m58Smhn5oo5dUzi2",
  "key14": "59To1neemyibrumvB3jimxa6p13Qs2wW6hvjw5MTrtjuDfb6NBTaTPbfnWMFwjffGrMHYUjNrT35Xeiu7WeN9CGU",
  "key15": "4V2ZR5RX6kDz17v4Wppri7ckTDHKp3v8b5iDC4UBsDiGY6M1yZnNCsm3kpc5AqYi889DN5hXzBfhuGPN6d9jCPA",
  "key16": "2sXrZ4F7VRxhgGawBfVp2rSMDzvteYKGMiVRy4nL3Tbj7jSppLDKKrNZn2MjsTjh5GTzgS3FX8SaBxvXAxiKWNga",
  "key17": "5Qy4tqS3U7cgVXcwWLiKAvfKWAaHWxcTVdx13E6XCydK91uHgyrMj4hZLh6VUGgNvKs6yBcbsK9CbQEqc4P4QHwC",
  "key18": "5ppjTfQEU6yJjXrwhi6gaPgtYiepnjrc3KC9mWuMdw9bmaHH3hTSHQNQcREi12ByyRiT967hm7DVJZJyinpFWkbt",
  "key19": "1raPUbkaJWUzAxZQUD5UQp2TRBqn2RPdB3bQd6yiVNbGJt8PJawha9C2SAqQsMU6Bhgtojy5G1kBaQCCUukqi2S",
  "key20": "3SGRKeavE4EgRsKREGWQvzv1AhXEUu1A3ZJSygAevBbufn2P9fJSStEMvPyfYWxAjSLvx1gSXusdKCSZ2vYx6AtS",
  "key21": "3ovmrSRN9bLxcwsriUygEkdLRhwu1J1rDVRM6NuPDV8KdCk7Gwj6vdytcbVdnVv5A6bLboWdq88iGcnUDTBiiDQt",
  "key22": "2AuuYXki9DJg2qM7u5rurvXYGyARRYQaXugsovxWHvex69uNrvKC3zAajAsFtheHU2a3oajjgtTQYdMXTMBrB5C7",
  "key23": "2ZghMFetK7hsbks9pJTRmaEv6n5WxmyDsRAHt8ZFCcJiWhEQGpLoZ67jrLMMZtR9ERvMg99PRQh1AQ8vwAWcgwDU",
  "key24": "uLGdqHGGA5tGVvz2wRYGi522dnxGdGNwwNHit8Dd7U4mYEvFzHPiNFv2QTnqkEeJ3qMYE5rhJrDz7K23D7GvKRG",
  "key25": "C9kyGC9pQAHipnHB9GCMCP59yqG5uF1K9iopwKQCTbw1WFGSgfkjctNCHrdgqY1RTvPdsZKZPuU988vGtH9WhtX",
  "key26": "5MuN5aF8ZHZafeN6eGK49eoXs9pN258gaDxYBQbCiThkuuLntpEGbcR21dc2Z2p9a58EeqBVWnu6TxVKpdoL8FR9",
  "key27": "2oET3A1qRn6X6h7QxSc3mMCJswYQ5KGo9WcXXCinV1vUsoWN4S44YBCVk4yhN7HoCJB2wDtJk2XJ59qXyzWqY8o6",
  "key28": "2guJJKDudC29A1Yc7fTnRNZqx5G5P2j2mUDBKfvT8CDyFQVdT2GQWDRjBq7ewoZWxEzPE4Bmr1JN89DrnrHFwkAm",
  "key29": "JdxTTzHUXfMAGz5CNXDPpTkCDrCApK5wXajV56DeghXExxhnDjSCUx9e7HuT6a3VR8D89cRfdmq5QycBWfztRjp",
  "key30": "58KorSVQGM2BJTJQCT1b7fNZdMCxWxVoKamZKZMd3k51nSvfC3bWU8covamJXndLcyDBxEV1FdmYjCbeLYAKCXsK",
  "key31": "4rjoFbSNesyuBxXGsPPfQ3ZbJ6RQQWmUC2keszZXrUUiSAdBLhmLtPxppHPryhSeHvyYqattA5Nqgt2oLfKgQD98",
  "key32": "3FBbMnL8dkeAJsUtZdPXsHpipxWDVnW8TiHLtPT4dW3mC3YpXkLKKgNG6x2bt6K5qFbWgGRcPcibc45G1gZnMFkC",
  "key33": "4EPbHMstYUGo232a5R86zzqnjnnsPfx94aMSGgRbg7kWQgJ5go3mfJeCSAn83qgUspLaKpJv54UKgqUudNCEPWvc",
  "key34": "2YjB4ZsPpRPiQDMuk38dBXDx1Y4sAWuaQuqptSKaR4ipvhtK8mJ5GM9bZtxWZp7bnYSaqABwTBwiCcgtzsYguTga",
  "key35": "2Rq7bTmAbAAk7vFuag9xzufkpaPLyfmskyBhHJqr5mbWvEGufoNeY2MRWuomu34mo35DbUnZuQEUK6F8qcN6cya4",
  "key36": "2TugqbMKm7ZDV2pFYHcMWruGagpeNkXqqWi1XxBM85xET5LASNGBMvovMBrxCUgpsBZApjXNX7YtEYQeny9KQdMF",
  "key37": "27gA3M4dpS7PRysjdfdngKNzfZsy4ABMvve5SkyrqT1oWdPu7ysMTzyo66aYpLsidFJapv1J7wmrFfr8KJ32pdPv",
  "key38": "p3k3kqhsRsNpv7tirUcNvuRdWpEPJdJyMo5dXGXNii2Fsm5Cw5uzZhttHVHQ3VNhdW4uRFmoJJJ4Tobik6jfLVk"
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
