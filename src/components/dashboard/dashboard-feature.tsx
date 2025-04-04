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
    "2wd7ZFK2fG1vcEc7gK4f9CdxKZrVu96vCFfcR3XpqwZqbgTqYaZKD3ZkpAtiatoNwpngnxCKoGztjVy8zPfU8XyZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VYichWxTzPaVjGAMfAYWKrhrUBUbCvB3HeAuUL1b7bM7mS8VyEsPZU7Jnzwh8tjAMnJLzTm1dSQFzvnXaLvTTVA",
  "key1": "kMwCFUXZEsxXfmyKSsCVgAhxKu2zmuUBpJ3v79wdw1Lgtn6anr3ctafibNSPu7chutnYbxmuQYP2UbudmJAymb9",
  "key2": "2NGXSTkbwsPTAHqXfVYfqjxTYbob4HAeKGNNrv7AobU1wzhf1Ut4pM6G2gTNVazFmUDC4gXdZb3jhCFR5epZBAWW",
  "key3": "KTWyUKBxdJLYBBJ3gvmLPz4ocf2MWcPrkatRYZ9Nrrz7BbMA2B2KeAL4wmi3fc3UK1hXTK3XcKpMa8AmniJWi66",
  "key4": "KGrS5NSutU7qgvXhjg5izm7W5jRFf89DJWTnVfSLZZg1wCkLa3hHWXRfutyhR2pzgThdjjXwMfP5MtnPzSNnpCV",
  "key5": "21y6mWPZ2RkVCvMBjLzetTFkJLoYhpcAbbZYgmPgeccumEcLYeLLZQDbubQo7MapuBpmLgVykdLcHQkpReGUaRzr",
  "key6": "TsZSVMrSiaq4jUWqB5vDbebe8UY1QiTcTuQbXH37b5uAMahDhic4UH32cpMnjm5oPWWvpDMLs8mG2brshQRT4jB",
  "key7": "4tVqRWf5faAKb2FQ11hgVvXeerURyrDHMrHPa16NXQJeiYiEosogjBjhMGUEMhAYBb1QkRNgcSbyeMgEXrq5F45r",
  "key8": "38xyJ7nT8N4ziUPySGVn2KRrPjYrSDtwDqN3kHpq4gtdpy3jy4t1tNXwcC6qCaMpF8nrYdN4dZX6yQ2WzUMWzsNa",
  "key9": "2vz83uevVgc1LX8dSQXSpdykQECYoWoETVNHyvUyjUxcT7FHWd6qhFjFMmY9s68EY8aLd2eQqbUufbdNVeUWV1J8",
  "key10": "5tcfd2UAZRNK1r6XDLqM1VW9cHesuwF7Kxassr4anyncej7GA5e2PZci6tbjsjuEbQ2KEbNsC9p9eB6k9wRGsb7B",
  "key11": "aQqBomF3Fpu3WurSAhkNakhGYAPRA6rR7ha4pu9YHnmdn6SqU3BRrLvVCZuDtgxZ9BBGnChHGtUBX74c3ZAn1Z5",
  "key12": "366UNX36HNcEx1A6coU1w73YGtipcAkHkjjEqP2Nn28maRSrGEuTnfgVoGMVbykxCskexFgFAMD7rdtCJSXrAnbE",
  "key13": "3ugZ8Aj2LMxP2P4ku6pJ7UceAxm3CcSkXG27B6tK7ZUskC4kke88xsYo5htaGgRWNRs5yx1MhQTtQ1CHyY6W7opd",
  "key14": "4fRh2DyBRYKPfdvSAKM1KBDmfLhBQfNcQuqcJDvKAZzpkN1fVV5XdxUJYKAgkV3J4vp43C7z8TcdJLyYWbYwjNuM",
  "key15": "4FQ4vzW1JR5WmP5V1byC6FvwKL1Yx23GhiEzoanFJqxkJw3gKFeMuCQLffvdFjkfv9oYNXB13D61J86ZhytmDABm",
  "key16": "9Zq39HcpbTbG3aAWErFV35TbACnoWqiFz9SBrUNAvQfhQyWDZc9z9Ts4wYYDKN8wpYhvaNaaTCRMmRvhRj1SZWd",
  "key17": "61G1awVfefmv6kBWBxm3G8icsr6Sfx9yHWTq1GUAq7NaNvMskGjcpJ8c586u7Z4MVKfCmbip6poY1dsRpWg6gg95",
  "key18": "4UgzPHjYHnw1BquGCrNF6YQpAA9E6Q6XMod52iQoXJFqZd9yddU8VAbLiCYoP7HAkoKbiL4fZsvdvQCu5sMLcaEB",
  "key19": "2HVeWGWWxUjxvkR186bWuzCa2tsn6idsoELhrVBK75tdV4qC24oT3npSZ5XqDXWMmLqjbJXCdMSvDWJsLRQ9peTN",
  "key20": "zRyHE5dBBezKae2x7zFTLXTsHbDjx5xXZNAVvijahzHMhdDi4RxJk2zU53rggsdTiB8zUFWCRXnU5usCnU6nY3a",
  "key21": "26oH3RkeBF6RfRHCtWhyHbHrswQi54ibxnKDzx7W4oSBaCmXmZ1eQAGfRcHPddAYQeapKUbNz9NVju1Q4YmhswP9",
  "key22": "29QTUrfrieVcK2ymYd7eeFYd1MRJs6mSEiawJ3CAmTZbUW3BX1t18KAdxydP2K5PTXRnZ989mr9bbMMNyJcUjiZK",
  "key23": "5vARYeKUq7ieL2CjorJXusM1ksuRCJXKKQ2p69P3xCz21WdgEZ8EX5DWRQ1jYCRyTkvLG5vLCLbtX89V9wszzf2n",
  "key24": "jiMxewmSQwVAexRAfTFWrT4EjmAJiVNzpvL9FW1wPEGoM1HTNkmZ9oJiwr9rHSLxx6ygoXCCUWLEu13Vj14cxQy",
  "key25": "4FYNPBLm4zKYziMGQpdPc1iDHNx6DWYPXvLNwMirYDiK5JQoBWdLDLzeYLXEFXcxnPZevCjsYcfxXb264C8rS9wX",
  "key26": "N4Rw3czzUnMKJkbDMQ3k5JKokCvpVzbzUVBBsVhNPAQ5zYMuw1H9Djzo5xVULtovyyQ8Any9yiBhX4EBi26uKTX",
  "key27": "3QqMVBpCy17cTisZbcJxnpbHDwqQLbJACp9cvxsLh9YRgLxG6H39MBMTzNN2T8AajwGG2XG4cAs667E4hsUzVD3C",
  "key28": "4LKsG2sBbMfmFSHph92BqrmUTPazk8g48EhY75SfPGbwDQzYC2TkA4ZZJzdsVrvnxAumF2jHJPNKZfCvW38NyqJa",
  "key29": "Yd7ZfMHfU7o2gLeW4CHksBNq4ePodCFAewJq5rW4fbGJ3xH1TsgSWSR6R4hMBvYSWV1v5oRLCS4Lim4Ci1yjjdq",
  "key30": "X5cVsmrvV4YQVXmCVTpDFGXHoQ5xiToknzevw4YCbAmSy2MjuRggsPde26iwXQeweK9gfet3hGTtzH1dNMrPoWu",
  "key31": "3QH2k9qhgYqb44vA3NdQSWYh1jNJMTd2fTJzbW1yuBbq7TMNAVpL99mLPvBrWFebKgWvaoiE9KYrp5imwP31v5jC",
  "key32": "3Bjx4HGYRXGj55hreQLrsHCuoUeZt4jAtKftkvqk6M7PJHR4QxWdYT67sCvGxfFUxT8Fkr2Qv9GTyoxhKz9Z562Y",
  "key33": "gYG6FQfk5LMSZRva4LPAvCr5ZSDeAbdEiEKr4BGKFXsnFXMU1V45DEQKPxDUnpZJDKPmVqnUPRjQZUzuR1jVTCw",
  "key34": "35y3zHs4FfA4gbQ5jwZ39LGJgzwPk8iLBvSHtkq87TSfK3VsGLLDupnSdtPA2fPGMqjLsDB8QE8fcPR3g8GJhFvT",
  "key35": "nBAyjF2zSwJikJoz9YThSsxiTb6UqzGBvTwYJSZPLuthEJMGHch38TYsvTYFu8J4N2MWWAJsjzffLjErVCcozk3",
  "key36": "otSDxRXee536xoXuNtgRsdKTTwLJruS6oPBxy2eUdBr1YFRyf4Lhu91QZYeVdjhUzXYrFjkCEYNR6zA4FEM84ce",
  "key37": "3C6e31Y1vKgjXZfLnMYPX2EQ6gAtKe1npXCSVKzq7CtLT7xD8K3BLfXQvmwKpmY88A4NvKstHraCdiFoBe2EYsFj"
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
