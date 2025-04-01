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
    "5Wgxwkb2eCptFpqx6QDbu31db1Wix8s5eb3TYhgr58316figQ2joqyzadwNj61icVxUYFR6CsMeu2QsdD5qPZ57S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57hKCJ3UzcHUkefmomspb41zrTCvkYQiPgM5up5n5M4UNcCWeqYyqkXkd4eumYfm1ZSF3wnEdKp3emqCuf8ncJDW",
  "key1": "49hoJytVLTRMkSzdP4dD8LzJghrZGAbMjEnaNpbywpqmtkt5Uqj7F9gkFFFd6oDeKQNFnMnesyT96DNfLBxTszaC",
  "key2": "5cVCEMjNResd91xwFtXyAM2zxp8WLqCKzVmyGc2UR2yvZ7jF72ht9xuNygH1W4ckjhSVmAWEp6DaggfsszeVxJXe",
  "key3": "4oEYqaG1R6AGySumupJjg1hfutuVukKXjZoKWZnh2ExBuGLQLLdyp1NrDz9j89nwTSaQvi9uqbdphuBRWTdVGbCm",
  "key4": "5oCJsbK9JrNBdMnCfnpyqjZLEtu55UxST4qWTJKT3FrUSFgVEgBfHNpJsjfz8q1uKgzavtBQH7EVZbRB7ki55nAF",
  "key5": "52yg1M7WDv5qBXEKLke97YsGVR6hwvP7WGEt41KnpbF5MaJh19UeTjemov2RctZtvEsyyMbF7UzkJ16YDosVuSvk",
  "key6": "2fLDwfRXmR7kS8fhu3ad7EHwTVLwWtdYzyWpNj677SbQqrD8smW987DtBh7WafidNrHkh6Z2vxypKWsm31eBQuUo",
  "key7": "2ioqb6kErsPZugtjrLBSXZb91h73xKoD2WcLA5SW29yVEK3Bc1oqXy6NzWgxYfjWUp78WozFQ7awrEGbdPiK9tht",
  "key8": "2Ver1GP46uhUWbLAwYSPBQ2iwTkRkt1oQ9piNg16QwPg5yKEBvx5vjiPEFrTbyn4fLVJkimm5Y5fcpxH7Rfb6uW5",
  "key9": "5AQeq9hhiqvQWVSe9o4joU88ZMYSF5DocUinnmrdL7bwZBwzgnhaewLTouAcvSjEDXgwcmPngMMkgNTjSTR8Lhn5",
  "key10": "2YGQaFhNH9Rni9joosMngip3sNQi6r89zc1fXyLewn72NVnybJTaTeepX3vuRggeAMUUMhDqnnUM3jxxaKiKUd9U",
  "key11": "4rMn31W9Y9uemTXCvM93KsDVQRHGEg2XchqySHHZD5C2VQjE4vTnoDdJfvkNPT86W1kDgVu1HDY994AGnne9bL2m",
  "key12": "fHYup3icPbDY2Dbz58QuCjxcTUpT6jNS3wv9KgLJ41BcM2TDSpAg6wNNMTHkwAi8jCwXM99qvAT7Sjy4qtaFMJb",
  "key13": "5n4ZVSCc5Q8zuQtHgX41YFia8Mbh6FB6pPXg3pAQhZ7WqVKpxfkLv4MMBDYUVRLzb69qqpKDGymKiPB8gv7pXnJT",
  "key14": "3eXRd4V115aUFw13Jw7vmQBLGm2vKjbHcAkQUVmAAA4cCN8xZJR58hqH1Pmqd5m2US2Vi9oznz5fhFYjvmE4a5UP",
  "key15": "vERbArtkyLueDCX4TVHvAd4bkuwXbSRtUSfabJbbuD4VU5CRK3E9BNMp2EjHsettRM1jeUFeKofCtMQqjv97nUv",
  "key16": "5YygBxArPZ5ks7j38Ho3FgUjGKdq8T7NTzqhBJGtdVyrEYCMtan3jfMFdZJ1ngCXNJi7JhzQC333Hbz1sfU3Cn84",
  "key17": "2G4b1R64Z2wsXhMsJ4557hXdZttAyRdpiaxnzWoBESh25fAEu7YpFMaWNCVnnepE1Ysgmd48u9twtQZdLZ1PQBnE",
  "key18": "47Bj3gByCfqmESmJGxL4P6dEShSeaM4EGgjWbW5Riwhee5MJMXytCokWKKaaAm7apqGcZLLisSeS43FCu5awtUTS",
  "key19": "5761CB9mhN5hnpwHvxkEPoUjhZJtNzwqexcHw2t9xuWqsKc2tH8E29sRv6RTsNmMry9GfwFDQi4o3xLYMLUsz4bo",
  "key20": "62DBP1K4JsX9ewpV13C1qufMhijsiM82vwQuWLk4JMKToMRzQJid3uF9iNBLdRyHLvFLkR3cKx9QJ9jeeJwHBWmf",
  "key21": "5fnxoLp7eDMGnMJuAMSqSHiWVq4anjwtAecEwGhrZ1AWET1tiyxvCyxjyuWqZ4xkQFWnvK2Eg8KMJffiiEUdcMdL",
  "key22": "57JxScNG7hYSB2iA1XMRNVFNi4ChugD24xfBkbJox6aa8oReEPafLQPq8ZDZ8Li4aKNzsutna49Sutu5NohBzgZZ",
  "key23": "4T812tenWH68BQapKob8H1cD6NSRvyxJVW5quq7qnbXNPFLDt9ujdkJYd7HcWqD6kRY2hHfnnPHVznGp5XaibEGN",
  "key24": "w12T95bruMRwp4PiAAJ9dEMuXWNB417jWZEsnyd4UEy3HKPV1bVTehx7Ax6GMXeGXDJwLfQK5XEoMBZj7K9F6az",
  "key25": "4u3jcrDLYJq3k2nEmP2D5reLteG4xgYAxacFb2V9KEmVB65x1U5PitCNV6prVp19FsfgyWt61xRTxS1XhXMuXees",
  "key26": "iVMKLc2QLyCNkbviQG8kg49k5tPd5twyp6HAgYaXBzHPjabHH62tQ56puNJZHsve4fkZnAzejjb6s1BBV1KzFX4",
  "key27": "33yD4LHizYaQAU83LStmBiwJDVW3tujp6s2LZXQJqJ8apTR7cANH4YXhJQAQhRBTW6jVa1i69gKBEdoGpmwcKFmi",
  "key28": "3KMM1csVFLYqrsLihnRBkpfn9Po242voskQMxd2fpidoqYG9EdKtiGMGVoBzK7ji6kfWocNyurU9tEdK2UuL3MzD",
  "key29": "3VofAmzi1QyVifaJSSYep6FhtnNdQzg8d3Vi7t5c5WeQPNMEfivcMRGGrhhFZZfzNqKb1nQ2sAozvMJHyBdCaben",
  "key30": "4KiXSk1j4d4MExBnaiXzGQxHhShNgH5foCmNnqVDMBWD9LPoUr9fceTe4kAdSbwchL376VivyeemTHGWz36mkAGU",
  "key31": "674gSTVHkamCmAmpawrR7Az76UEzNWf17RnxwDXAoYJMdJzFo3MniHqK1qVDnuMFdVjkKZdcqtS8t1GTyAnZETgg",
  "key32": "4NJp1VKFku6EAgSSw3KZLvrVTpGyviupPjNsnxYCdTHZqTNidbUu2SbQ9UjxTr46Ky1XL2XfBfo1usw11jG4ZBku",
  "key33": "4nCYGQ8u6pE1uCabaPpMYNgemytpH8tmJRepSbXYFDT25KLSvMUizcmPHUaN1APWAq84pdKL1AETFSCYNi71yzd8",
  "key34": "5b8XhFqN9v97UKMZfXd8JztkJMRrqCc1dhg5dCc9mpYjenNGB9BxTRszKvqr3ZviLG5yPorVvZWV91R6yjkL5br3",
  "key35": "3Wiu7vwRVG9C1PmYpw4PpJaB3FqLpvbvKyR21q69cVR4arUFhw5WneN15VJYQy8AfUVfQhy9DVnhABwE9zFDnVuz",
  "key36": "4N5LkAaYXbZtJvjhDZQWoLipXbSUdcxzwL5dGEv2fP2z4YPZpTAHK1vrehPF1QVB9kxsWXkWGeNvQVJnxM9ALPPq"
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
