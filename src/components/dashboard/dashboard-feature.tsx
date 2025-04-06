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
    "4YPWaBQTPnE5KJf9qrFkG8Bv2fiiZ9JkuJVkJffQJqqef66UcXDx89FqFDxYiduJENJAwo4B8cSp3NoPqkrmg99n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G3bwUcbYqxDXMkMeG12Qfx8Q2K5YYDFPyodkAism7WykAuysyQdXkZSjwWjTVZkMMZA2MB3cHbASJNa8YQXuYsm",
  "key1": "2GtzdmWKAHfqSgvfDq3Kz9KXeEVJxLDSEvhaT5Hd4PDayCeqhwdFmS9QYQYXiKx39AsGn21pdYeVxFvVp18K2rjb",
  "key2": "5oqQAgDNURzxUfS9Viw3MG9BWNtu2zsZF7vDfSH19LWpvERDFJvsNX7ifYcMxKarKEbK4me1Y7MGHbPism1UeNHA",
  "key3": "kCwTehnKkGVvTRUhzzcASgykKHUQVMaGVxPVwoV3cvdrkL3F1CUbgnLu7MATutqDm6CJBbcbe7BdFXBR59QgrH6",
  "key4": "5ptoshBeiUAFvKDmHT41rmn5BD2EASNR2m1AK8onnzBr6KGTs3MUevJDSkinSufo6BymjxrVbtt2GmK4DL9aA8iB",
  "key5": "54tshETjKguC4XUiEd744U2RcUyakYmEF3kmnLZLPqWAjHH8Vd9etrUqCKkougJtigYor9vwb7eBriEQiuyKbj5i",
  "key6": "2qGnWm2MionsjTv8jw9Br3jgpfD5cWmnercFbqTS12PiZvvBnv7dsx2Xqh24vzU7NMBuswx8WCvt7FyeuwTNGVtJ",
  "key7": "2h98hh4SNg8h2uVdtjaozmxqw3aP1LsbLr4HLy5XVdxhd3pEgx4BC5NCaKsgmXM4Xp5XCBtfzDTNzKByMJhbv4co",
  "key8": "57TmdFhJfi7qag5ZBFBcqccPK3QNW4NjzH8SuQkS2FwQfk9aq7PudM3wWNZTceKCEDwhMUDjCKPjfMzRUh8pqVB2",
  "key9": "4vjuiLWnJKopXVfUwHy9zviXsjSETjuP1xciGgFtpzPq1XbQVB2zLof1H56KMmVZRsAq6VSu37Jsf89CooBh3T4C",
  "key10": "3jUgES23EoZkiJTk8KLzkZoyjZBjRUunPAJ4FmG7wpRJirR4vPUFpjJBjKEfP273forPfHuJijuKZKrZmfvH9MfP",
  "key11": "5GESpoEhsaucQe8UuSiZojTWLCJHXyxSvo6B2b35wU9jnESTdf6GChkv9NSckgj9PF8rtp2qeps5wynVwe9nwfwg",
  "key12": "4JqpbG6KqqndQk2gZPPwuqyW8SWyDGfbsiMJM1JEy6p5HDAPUbKb1ovtngdh9L4U9Bic9JasSAbYbu3PHf7tDfTZ",
  "key13": "2YgydJf664svrz9Ww51QbxiQXyNbH7WV589ockBHJ9MGXnTFJjHrmD8S1MqGsZQuNT4kZxqMy5pDtWkRQP2F6ze7",
  "key14": "hZYPiw1X2JaUu2xFRWSk3rt7imqarAE4SWcs7xv7CNu5oKMdFL4HNBjKzCew717zHyKSWZHk21QoKNfSABrQXYq",
  "key15": "2zwwNfeCtftRPYEJtGLPK1h1KmhPjSKN8pbQxNuJmJuoznARgvpqERbYH6pv1oXiWL6MGYXatWCvLJRZBQdh9S8z",
  "key16": "5XKmAF5xz3HudDXHRZQQPvtsncTeTaze9og2sni1fUxnDj91yn7RUTtw3pztK58FFDZH17LbtcPNTXT1kKZpyEu6",
  "key17": "tUHtE8wd9LnomjngL8EhyFJAZafMFraLUEYkheWPRRr6x834dP8AFf7dUweGtjJ1Th6g7pAQpAZj4FyP4KtGQA8",
  "key18": "4UuP3zU7ouE45LpQsbTGmxUyAnbEAzUroHSD2qTCb72twyBpr4p2vL83Z3sRiQXZxRsQ5hiiQ6KhWyXDMkC6UFjj",
  "key19": "5a3XaSaviBR4UQ2Kj9F3du9hkaauMcwXYYtgNirzH7GEH8n8SPERoYSKugu2zntbgyfxEEjozoCd3sJth9ML8AzW",
  "key20": "VVFwprWkVkZDqhq1ZsqjW1NdAgi88sug6H6f7fNVpXTqLgkAU4MufxSpF6qoo9zCBU2k5M1ZaujVesxRTErepZs",
  "key21": "9ft5bhGdDDrrsoCq3dhk9xJA8r4TMozqehYWxgh2M1ZzbmCKYiosiyQYzDKZ55HazsNgM6TSNiaXJi6QVXSeseK",
  "key22": "2paLR1sErrXTDbuNyZyEMDCRw4SFCzWQL73AnXUf4jM1CxKFD48kU1AJST2JL9kCuXSGKCtnSBqGtfCPeAXNPLAY",
  "key23": "39bYwQJuysBJEu9SRAhP2HABAXqcUHwxERH2uwwLDSgmWtZf1nSNe7nGXAD81k8NetzjyZqzbvwaMMuivd9PB1hC",
  "key24": "pQTytPdA5G1WYuMHr5J8u8mpgjJ3LsEthpx8hMRHi1VQEcrYDdHswHsuryTVy8xHp2QRqXf937KUxg4w3RRJ6iC",
  "key25": "3Efu2yuA8tkd2qkaxzCGR9LquGbhhpcxSfEJY1BSosrtk2g3s1CUa2qtaonVKxmDUAu6nzgedjXZdy7XkoV29TD5",
  "key26": "2NcsGPoRypwMJtWwBxRofMFTqFS4CHZjUfqhjuXHAgkqT9VMAHbYy4M2C1p4NQFrWBpZGRfnbjPXgtR4Zu22CLmV",
  "key27": "3fDy8vUDiVP3sV4EebjkCW2gPdjZ4fD2FTRwhYQDWNEeZpVxuz6yhLj6q95cUuTvwvWRxSJ825kDhM3wtHVhq4rc",
  "key28": "5XobE7wrLS1GKyfDxn9jW6FJszYKhjdJ27NrxTirk53Lxeq722DXQNu33LqEYcRA9j3hm2JQxwdXv7NUY2RxHSEk",
  "key29": "5rUexs39f77ASnCoiGdFqDMBr4Hx1vKmeByzzWVf14YqjCSYuh9nPuwuiZUpZbZWcWY2Ak9K6m5akxC9dN4NpHbQ",
  "key30": "3jCByd4Pq8mayjxC1RLxyyrkcW3PHEU7tMpeSuVbDDPSFHU5WBJAAAvLqxu14tUivmwPbjVndiavFGCq8BMrCVQT",
  "key31": "5Czpzp1dE1BMzRH43G4mwz8C9WbTzvWy7JXjcZ5zeeRACGc7t8zTUuGLFnvqfxwvsTeHEFa7z9X9DPLcLujVE1Ke",
  "key32": "5Wq4UaqksBjhCAUnYF36nWiKXDouFVUjtUhotBVSLzWHPopkiZBRfrFtXgaj9fF1HFGJGTa1ZqvEJPoLwSiLdVBg",
  "key33": "5A833G1GhWLCV46DEZRugAqRDmGx65EaQPiwQrixAJiSMzGKpM9njyUAi8ReAUWGUWaBVp41u5Mg94DEDLs9TZn9",
  "key34": "5dAV2ZyhjfzuB6QfW3wh2NGif7gVZFJx5vJcyfaYEtSr4GjYP2tvYqWw6Nz2uZbHdoMsgrNWo64ugFamEG2E97gN",
  "key35": "5iDUg6wdS4q5Yc86NWBizDrsXBQwsD3ugMamXNKgtBmXVZcQX978pUVecxrvFesTUPymfVSZYPydpc672SwuXWv9",
  "key36": "3v9rbEjodY4h1Pez2pCjszvGeT15EnbrbTmqyKT66Z2nNqd9mYaACLndF6Bd4JhwActLM9vsuMfRpUMUoDuMsCYg",
  "key37": "TW6Qe7roRCjiSEA6iBomAQ4iGMXAscxKpDw9y1V5fA1ffJCkGFD8V38zth9RV9HndALVPjf3S2dpwdKr5Gi9Rf1",
  "key38": "5ThKWit1B3ZrG1QHx8Wdz1rP69VhiT8j5mQchVdDFNfmXrnQMx1ccxtWUnRMfwrxonvcZe1dwngCMrj2cFgUUWPS",
  "key39": "2SSyHCCsmGPM19uAafHJjyefuhR21xHzMhv1oW36ENz7VE9Xj16hiC5i25nRXfDpNqByte3B6iuaCrQMJZngjVjE",
  "key40": "2EzvgLFEeLDFgN3Xr8xxXzpeExMzXbSYPa3wSjFbAnLuD6L5iaXSzLzQRV9RfAwX7ucDaJqoERSoTUAfSWYkFUwV",
  "key41": "4xeZdsMkL5BDNzFhatpPV56EgcLrkc5DVu6Qc2jYVqZJgh3bT2PXhZT1Uz3f3nteW6e4pRnJuMgoCjP5RNXd82Uc",
  "key42": "3yTWGKqaCu5ykRKaqZPPBepJRS5Q5TYuXF9ZcdW3wHfjLSFRCBgUjGTnpXJ1WQKWCPweuGfof6cs5uiutKFYYgSf",
  "key43": "3QyKGEkLs9CRDtbBvMJsMyabt6GAQfcWiC1WxDkDv7bU58LVjW5XwMMjLhMx7PKsvp3fyPHJpykPsMnCt34HZko3",
  "key44": "3hqtuKygzKKHpdBvi1bnga5sxJ8KWzY2tbfGCJa6tVW52oniRFdNFVZJ7nYqoBW3ajQz2hYwfvtBfxxL4VG2AUq3"
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
