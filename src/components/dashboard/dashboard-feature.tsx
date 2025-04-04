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
    "3Xcuz2pSZL8qWiGNjJN8tpuAkRMtj6bDTw897GN5NTokdqufk5uUFUWSkjLs93dP8yzeTqbcU7gWF6ocWSL4qq3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ropn7miFA8YLYqM3SxBhiLqMLfypZwWyiZRQ6QXasNRAK2uU1GzDw4ZxrvYGjejCAtAeqq3JKf8MXC4o3paUUVm",
  "key1": "eJRmHEF7F4o6mXz6mwenfrCNnc2hGX78UqHehWVUg8vLWuEwQiThi3vYTToEGgWTK3jZUDMWaXtkCJMDhBZvX6L",
  "key2": "4Mnzmufvcx2HQctCmFBbWLczj1eNQoZBFFLyRQfvx7wHnq6CRPX3zDoyenkKo3h5qwJNF73RWDxfdSZGqC4NwFy2",
  "key3": "43eJ13wEBP9bWEGwsaQJsNZNPWiyLd4f9ZvGqu6bQA8wLp7cnV5i3fW4vRRk6cBg12Jr39wfUZbkDJj3DuWoHrFT",
  "key4": "4j1LeX7vVXeiUcmzY7fWsTnshb7F2Jj64uaUoGjrGawS4YEefvSCfuzrKn4tPmUGUvkyxdM9o4WNvwk2ANY1jUWo",
  "key5": "3SRS2sB6wqJwTMsQQTYEL78WkyM7bRDkjzEfzdig2ota1EoHKB6izqDiGYwGUgZDc3mZxBvPwSdpZQuZmKCzWQMf",
  "key6": "2dxJrPGAd3o32kMhXusS2dKAewhN3e6iBwxDubqPdygkWd1dujW8myF4vaLuKAnXLXPPpMvajnzHvqdNQrSEgpuk",
  "key7": "4a6o25cuJby9srA9r7QoaYHLQa9p8b4KpxZqoiVfHNSSJUopcdVshFCpnhBDCicz7HAgbkr7BGEyMKfr5BE7USaH",
  "key8": "5UiyzHj6psPQvyU4MpSErnYtpDB24kqZaLXzsWSyMbvHqpGNAZFa162RiD6dSk1Rs5aACZTBu7vcacrGM6T4GK31",
  "key9": "63YmChLr2YN7smdTeNhtAncJ54sT7XaVUe4QWyqxGiiiQXEJWBadoap9Z3XAXRbLpAN3TMSLBAfo4hooWP7SuEaB",
  "key10": "3AFwXELyunQW7gSMDZuGKxyziSEsZQsaj9eS5wkmSaubUYbcEPvcQPzopRrZWwv5ySkUTVZeRXBnxPAtdiXJk1TG",
  "key11": "4NXVdbKWbCXTNWne7kfroW7YjtjG7UpESQoL8eQkH6amcNhSnsSr1FSgPLZ1CGi7WgpBzVAeQtLYmqiJ8QkKPY5Y",
  "key12": "4iwLwv19nwyTmDJDWWKzc4A8N1fGLCmXd69qo4RkqtqF389sEjCytYH6eWzmpMkiZMdu7BpyPFVv2wuiVPPTCaAm",
  "key13": "2YJS8iogsa1oaUAabbMHgmVT5ViTHK6uSUQjykZALjphGAvDWE5168HerQVXS3XyJU6GHhcW5yRtPgLrR2dwfnKY",
  "key14": "5VgpxDmoL5Su9HHGks1E3zLdRRbGt5zEge55aZgM4LAZMFvAMDN8yq73hVRK4c3E9KBMZ3BwDQpbAEXonZ1mjd7g",
  "key15": "21QNkxDi1W2cutvm2XiVsmzJsA2taA9urU9Std9GbVxy9sjcHjb27W49C9DKTZdT3JAUJHvx176HnqkZqBHQWjKM",
  "key16": "33j2jt7o6t5Skn7EAoFvvUVcAJEm6jb8iK4VwmgjGS6cXaRq9osBwWqpKoL1w1Ymr1AQRkeAeD4duy6dgymfBoQc",
  "key17": "5YeQfskmyMHsFwpmmm78VAHkD7ufbXD26xa78MKBoowH64W83agrgcycnDK6ZvRpuq7LVrQH1xEGhV6oDHdaEYDA",
  "key18": "4DJHk85q1Hmfii9MBjQYgEUchRuPGdvXDr4oYoawptHPp4owAmrQKRPVNarqp6cvh115RZoCC11fk7Cybzpe3i1x",
  "key19": "WXrXjA3bUAm8RPDoqd18wJx1a2dXQFdLMLdwh4PdAPscM818BrGewqLXtVvRZBNSyheDQPb81j39sdDzKM4Vxk4",
  "key20": "5aM1FZmV7Nnr9tsWeXHTG8MUDk18Sn2rzhgMXFW15om5h6M2XxAYNfhmUXGAzwE7SvYqCiU6vVYPh22EtcnNkUfi",
  "key21": "2mgyDaj8eF7n29g9tdMiQm8SVjrYMP1kFmPMGsJztXhLCZ2C4U2eAmCMAsPYMdW9QJBJJAgvDYQLPYbuzGsZYC6A",
  "key22": "32gLzn4VcXUVMMHr5D1iJYNvdEKEJKNGSWV7iEWCJwQaB4GTCvsLjMFFiUATxWHpTwQEGYfuiW972VQLfED7mv5K",
  "key23": "58B3etCwq1W7xNJ7srq2wJpQPifaHVE1d5vMw5A8qJiAU1WLqL9YXJhsRFVNwBRd8YevxoBEiVfGsvR8EuNiXfLN",
  "key24": "5nJT3K5rV8vF2d78pm1c4yYGGYRXUD9Jy1qKmKNYsUhyznkvcVedi6aSbfnBn1d5ADehq3njCNriKnw9tzNdoTeK",
  "key25": "5XHbs2e3tFYHwiJMRhJnaar2HVRYwJB3JMmF7CVyPxE57MZHA33T66eQfFaaPYbizo2nLgzxdGmG9fVgY5b2JE3T",
  "key26": "4eBdSfMuMw6mUmSZYZJzxua69uaTt11Vb7Uuwy75hEHMiVZoebHfE2WrNxHPV7Q9PYvAYZUYDrSiLznJPDtyXe3b",
  "key27": "3sPdgsfbv9YHKPq2QXkPa6ZeC6FTZLVtqeiCwH3XFvhABZn6ZeFHGBHh4Fpw2PMJ6Z2KMTFSph3Z97jN5b8zrs14",
  "key28": "3aWVyrpNesaJY4S7kpA9UjjZWkkjUrp9A4xrNssvf66EKaPRsCDWq3TjdMoDvvYEJeBJYfyF1w9Kv7bpVw9jmj9o",
  "key29": "5QRiYpaVof4TYACFXUZhyWBen3H33wndRQZbRqvS1nTrjhcZ9mkwQGkoWHHusXCrm5MCwztDBwFs4kz3ym2WS6CR",
  "key30": "4JjaN8BFVAN7W1DrDgiX22qBkHn9ggSSQ4GRwF2Dc6c4Xf9GBvETLyCkujGRFrthtXXa33ADCXkYkpiYk6MyMnoo",
  "key31": "45rYaX3SsdXLNu7fi7isyCTGCk19yMpGwpoTzKbPh74Ci4z8qiJgmJDPZaR7f9xzJsQJNnMSRevdQcCA4yy3UZop",
  "key32": "3Ka6tHMmdfbQwn515aDW1Vb2pyUBTDwmQN2Byo4mFCTmcEXaUFDkjPTGABKFbZXUgnfDbGiZqdceimDZLQ8V2U3R",
  "key33": "2fNfcj9odpjCs9AttuFjkgxepMS2f2GmEiBSynpxHB1DwFsn3Wa9QdqcpmegDBBpkGH2ebrWBf9iS3hvbny3qaEE",
  "key34": "2pjjf5sSqrs3xW36CkYZRwLDAxdyes45Rze1655PfRYVTTjnEAsoSCjYdxyKqjBsonyud1Cq3eoGsghg46ztRSVy",
  "key35": "47rQriUbozsmZqY8X1YTq4sEfR9i7DMXFMRcAZ8Pinc2pJaSrfcuVLtsaRAxZf3BBmGAiJE9vAQVsTFXs2dJ756d",
  "key36": "4asPEqGecVxKoRnLXva6Ug3jZ7g8aw5RrNWfF9MLbdaxTBFZSqNaPmbbBhtP5emdX5SHo6cSZPGxWoHrjHmnezU7",
  "key37": "aJmv14dZea8rgfSt8aTPtAFZk4gbiGj5Ye47D2j4pJgTgh8yKy8qRa9GFUNRfNKD1UHvWVBDf357XUs8ovdtPS3",
  "key38": "5k3LRNYFmo2qt9WtrKvxAzgEstUhakyiwouHHzJBYXz2EBcrrRtucyndRvpAgDL1do2aEjx8iAAFtqJVaXBxXYvb",
  "key39": "2tvBD4YEMM8pvdig2J5HMGvVYpBRJg8JRQg7yR4yTBbVrtEQfLkxn9ExkEsPudzNiawyAXMrjqbPXb3NH6czyNPi",
  "key40": "4SdciLuyPm6z1Wn2AgHtQXoy5yWf83tHXQRwDKokMEXr6kwwjyLVaio34tM74CWhPGdCmLs4zbgK2r5UkWEzc7Np",
  "key41": "5CnubiBWeAvnkwD9MvXKWwUY9Au84Jw8d3GjvcTXE5oSBehUWjSgk6RphXjKZs979FbAjE758y118eGtWbuCLT2B",
  "key42": "LAPscCACNdeJnpafmShnWDK7RiNixkcukTNCKhEPcJGMN94SmVPSgKoXwyaAnDaN3s5aW1JaSAJecMEq3wdDjqn",
  "key43": "4iCR9yYBfKy6GALpzAYyw7BFQkxkVtAwuPH9f56G2s6TMpxNAWiWzpAufQ1U85C5MBhpx5wbK8y2s6hhEbZ77aVx",
  "key44": "2FL6mnbqSLFyatfbAZz1gFo4EfwMZoXVka5Hx67eFLt1rRMLBoAY6fBxh6YxayHBLk4pWgtrQFiYd8NYZBZFyS8G",
  "key45": "yz9UD2pnKusVPc8SK8LRXhhTF7VjcVLAFqdruNUaX5v3182uV4T4NeUgvibgtNDN4jGjtiTQvrXcyWEWagiVZD3"
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
