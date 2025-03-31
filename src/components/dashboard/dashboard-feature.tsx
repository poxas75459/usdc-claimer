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
    "AvHFXCWHwZyNbUzwNWXpZeFTPRQGqi4CqmgjRUV9K7ewLYZB9udQ3BLDhbJiT5AZg8rdfkryYXsmeZ2q3rX1drY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36bvUb1uNLbpBdboyw9QnDTT3MqHen9ePQLR6Qpn29YBgSw8QXjY9AUfjTPhrtemBNSCNNcL2HsThehk7i8PHwhw",
  "key1": "2vFBr4AcpbKJAVkdVbUdi2Y9LaSCq1oU1W6B5aQR8tyPNkjstQgzXagHPUdTYVQWqvHF2WrfYkY5bs41HfdNNj7A",
  "key2": "3US2EpjU7rNkwsCYtQn6fe9x8r1qBKQicvh7AEi4xc5arnPy6z9rWp27BJ78vpCnx7aznfZtxicXbg7BKFDjQqVu",
  "key3": "koN5Dtm1AUvrHVQke4YycjSnqV1PwiDZUQ4x69pbb6q9WXbGJVtB27EKRGV3tfZ5fr5vuPL3NBWsYsAugHCkGZz",
  "key4": "4DMKgMKaX1621wfQ6rxD3wPmNjGVzxjH5Au2NaDyaaKLC554ELGPsY6fBz5fFUCnQqwuEfZ4uxiCiad4ApCLG4Ap",
  "key5": "3G4qqmRRyMZw2ToukjPWoSgC4bizJyHtrQoiMvVBgwTCmGM69L4Fupx8ruYYfvpiB9d6Ajd5rtzouc7Z4S9coXDu",
  "key6": "2THtDS1aRzMenYqLm9xrhCmF2TrjNknd99GUh9qPqot3wphJ4YiAEnV1LHGLpLEm1V5geYcoExh3HxUcXWEf6LZz",
  "key7": "422jq5Gxe8XRvFtk3FeJ3xow8iL8ccEoXdYedzbhiK132buV2AASbXNicoBhtqSdXGCSUjhqr5mST6BkDvH2opA3",
  "key8": "4SZi7ktjjXCmJErkTPGru15qUZuvQNsAUq6KoLptmEJJcB32xGXMmP7RWV9XjPfwjBS1zbcAsUB9iby1tDAd7woS",
  "key9": "2jmdASovzrUMKGLPv53Mi9euVVSasRsRtocfiZaPrjpSax78GHCkdY2YEyhz57S7BQd5jNYGyqE1N8ukGePUEdZV",
  "key10": "4B87Q1JYNpPMpzJSLiSPfBTt6JxsdACfERwJvTUmoh6G6ttBnEcoZA9kFbG6VwpsjUmD9tY64AD97e2zEAS6r2aF",
  "key11": "3ZzUNzVW1i4NmwhgaC8fSycVY2ripeiFZL6cwmpmjTu3siwLNtT9JWc1QvxUEo7CDA9L6oQ93tNLZwrXTsAdX69H",
  "key12": "4ALdE2zhUJeW5i8jiKwNDftenFNNaVwQkN9fGWd3x1aXawP3LHH5hoKHFUaYLLDAgvE388Jkotvrf7NqvxEU1ttJ",
  "key13": "4VWxzacW9Zr9mjWJihULr2BWoSsTRcDqq1vxVnco4zRtJPep7pB8WJjNpDh2uLr9wLrabMbij2FtaA2kRe6ZCrDA",
  "key14": "4aa9C5qQpwP3Ykt2JuRxznv13Zjx1XcFqi4Uj11oHM61Div3d6yBmQWrVXJYwLWqsepUBnc3xgCeJYa8ApXtPjDN",
  "key15": "23VziqyWeYw6GhzyJ8sEzLk6sjHAPu9bwFfECniUnwhTDEGBSczmTHPBVxUra485G8M1N2iCZWzRebepM1dBsjCk",
  "key16": "4Wejrz1aBr36eSwWJUFLyAbVgLaBs1jDcbPS9thwUQrZqPMpiNP3jodehrzj1K7RHpUyGDFzHRWGEGLUgEXB44ez",
  "key17": "16eo9RbzR66mPR8Q4vmjuYTYxasajMvoNymGXU9dHxYjwwrUYfuFB35jMr5jvY6yhwSvopFTDZye7Cgmm7MKzXX",
  "key18": "5xiKuWnHZhRJveENU86X6LomUPi3RjpzDs7kDoEZMQeV67xH214uZ6McPDRi349gkTS6RjCmbvRndp6JyeRSPkmY",
  "key19": "2QpcvgBDznqERPohYLh2YFpu3E2tzo4M93t8G6pKDX3K5AYCJUYhQgvvL9CXv6qBuf4Te6ajCzzkyF6AbAn8RCVP",
  "key20": "3jhDx8UqgBBKtHDUQWFFftx1wo5dk3b61bCQVaMbrUyNRtnCS3uQJsYSH7iXjrf4fTLS9gErQZZS2PY2QUsgdoc",
  "key21": "5Tu2woRFHTu7ypwjUViDjdr36CRzqm7v4UxBxB9KzPiTXb4PEXRSr9u67ngqG3Yo3dRXBnuLXqjyTiN5nqeRUAFT",
  "key22": "2qEwqRFHfinr1KVqS4UuDyfyBZYaMUasr93cnEacx3SPBAxQ2fsxuqyVfcLZmruW1U7qmsagVXKTBvFdD1mopwgs",
  "key23": "4s4k7SGoAQbgQLhqMD8YBKGKytj1fqzMKP7w4euP8X9272RZ67WTNShb6LcqFuNHYZNn66KRjQTskXhY8ZEyZHYL",
  "key24": "5CoKyFALxs23uyWEx2MWx7gHpp6qanpJEuh6yTTSbUskHauJd7mQaoGqyWXk22pdqZ6wqdn4viSXDtinfUJXtjAS",
  "key25": "5bg66HCC6LvrEWat31BQke3PZ48fcw7GBJx8nvUDEtsKaHtiCnztVghxLEasYdVsoLhcGEymZ7q9Jc5Pqf7RQAvn",
  "key26": "4DDu5WjHHg4FrfiqWRi61sqU8qcDx7yRTFMZKSzjzTGsBvg97f9VPGPhsJdZuyq3Xxft9ZjbGRkuwV3qMBAX7DHZ",
  "key27": "gwHdVZ4KnzmY9qkPY5Zg6VhRRznssyFKqEEzaiJSf582d35sZUcBCyZSBqvgXJ1fp2uyj2bF2Mq1h93J7Zbcki8",
  "key28": "3GxVAjdnstQU7smhNBfNkE7b6B5GZAr7zuL8CCpdVGtJtD4mpacbBDGSgquZuvQudHnyA33giJ2tCj4ZsJ4NDcWu",
  "key29": "2wQ1WJgUumfwayqh8QNi5hjqSCDtmpXrm1W4uGUTgpZmiC9FDWrYpptjL1yCA8SGprdWd7EZE5KrXwTHgoJsKp5g",
  "key30": "4gjwYTTAG3RpuwW3FzryQfMWMEzEkxd5XtEHJTHmR453nUmRF5expr1w9gQSib3mkzVTvAmmHCZhd2bwqMUVtZpr",
  "key31": "582c5EbFcF5WFeCM13GxV8FaGACHbJnvtgAoTmg1fEUZeR9cQQyzgoT2FHEPg2BJKbjPVYeiG7VVQk2mMVAqEh5H",
  "key32": "2m49z7nj7MoRKm9iruTe7WjSk3TNd5FDNvFtrDM24LxnmNb6FgDMGJ4nbB1yda2a6oyaWiCbUrjWvxemVp9DJyXw",
  "key33": "22tKLn6reAa5ESWMR7x4aADg82qbCHfXt8dEeXLpCWwQN1EeJqxhioGvm5b77J7XwC3SRx18tEMTERrUtwGVQTgH",
  "key34": "3bJYk7boYZwXLcoFrDkSVaXBFawSiPV6N6fsPSZbZdVXKBVGjU2yw3hPRENNAs6pkxyKveo29hcaGqbojp4mMTq4",
  "key35": "64PPtCXArkxZ65QRdWJWggxLnjJ3MR3CPPTkTtsqf7dc8RYPvMhfUvyNeewk6TgSs9jRgHdHUVAaeCfiRqSdv8Ka",
  "key36": "28KhZtk4YFcjzA4mF4qrG6Vr6wm7H9Dsctgm7AGQRUTAoKLrLGMhjWcc8aSrHg7bkxTDSMyPVh75sfFc7xfyHpG9",
  "key37": "XCSiBhQXeiGMKau9uavqaSwaNdZYJqmJBP3qpC6erwzejJzUatdLf1KNjKoEwY4UMbDgRWdjerZAiUPQ4HGGRnb",
  "key38": "64pdEHEx7UKChP32vxNFCZr42aokxevJVjeQo7ua8P2Mi2yKfc4nSAJuczmJs5EsQnt5JegLVDJFnSEKGKSWtFwF",
  "key39": "3tugFJab4JDU74MimZepzKnq5DVa1X3gJnoeF7DRRQSED1KSu3bJnJq9MFt8Qi8CssEdeTSt1FqEK6hypDFb9zLR",
  "key40": "4J9JRC9mTs2v8WwsFYvr6F8e1L21erVcGxdixDgjFHRgwdXWa59rxUxModwi6VNxyT5dSv4JFm1tefEo7BiZhjcH"
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
