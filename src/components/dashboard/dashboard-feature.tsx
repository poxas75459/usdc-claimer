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
    "4SFzuzomeBP3aWK2mxt53hkeSCqtNoTAMzXJHcCRWS6GKsr4E8SYSAXC2LHs8wpnNm3htecAAsDz1SKQ1WapVT7y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PQrLEyXjPTxGcypb8NUaxn5uai4Zm1HESLzH3RAdT7AB3tqUbRcBe97UhJfMu2WnvYkL4aS4BadChoFhZNyGHgN",
  "key1": "4zoGrP4fNxU5XmjtyjPhbK82yB5kCoB6MKQ6SMHfQL59ieuB2Dq7S3aawRguhiqobFs6bMhbu9dxMKN2tzxrPHQa",
  "key2": "3Vb5b62wNW5PAxgcfxx9To39zVLJeqpbBVqZv6rHr2bPRed5ZQFNrrm8Es2vL18by8wt8GDNhEKZRPCQ5jQVsyVR",
  "key3": "uRerrBYRs8p3U88hjLoZbQuGQ1KKQdp5Hr98ZTPCqAbYmsFrr6ExRRvfcgq67HuNciuXTgQWv9ocPEJdXid6U5P",
  "key4": "2R7s7fqrtws6TfhxKT8JDczVzLqsh95R9vHFhopg2W3tgmGEmNkSNfHQYRQwN8EXTFhGKB98W34j1k7cfsKE2tkW",
  "key5": "kkE6RXNkpCARjiU3rnMMKvNzh7pGg6XGtGbQtKoFfdQ7eKeSvUd7jjFkZ7eKEKpUACBfDSZHBydH2da6z6TPAvd",
  "key6": "dr6gLyrUgXQWEHvjVQGDi8t1zQy9qcL7ssonS7Te1VGNS7V3iYGgwvDdfjuYbS49vswbnfysVoooy3G1eTxiabm",
  "key7": "2cSYRMmCxZUP2Uw5exy8ZpmD4Twt8TSnu3dhGXZwe37cT71rXNnssjmjHYLrtBJkQcEWdsJpp4H4hQdsXWQxeuay",
  "key8": "4LTKGmpN8ETxMiSCTTznNyd9TuDfogyVv7tKhwC5vJG3K9E9e3G9JSxYCmxNcqngMCBBLKCgWQwvx3UpKBq1PXNb",
  "key9": "u3zYuJQARYVf6ZJ4gLyZgXxHyt5XpyQY2w2o4hMsrZF8rx4vZruaH2mi6gmWUHVSeKmzikHhanaxvrVzBHCk6ST",
  "key10": "JLLixE9CQBxQeuA9nmrMCwvmLo1SXaVnb9sEhw2rHpiu6Jnvv1SwPcTxNniWnsH6bQyQ9JtPmqwzAmzAR1MepNv",
  "key11": "4h1wM6SydnDF8yEsJdNchBs9ys7X2V2yJWFrz6Ba8rmXFpdc4QLEtoaPNmib5pZuCVnvzs6XChEbaqZGnaQZKC9e",
  "key12": "3ogAYkBYZbBLwxZQKXuJUfFHVYxaCp4BeZo98DymLUxidYReLcA12VidzHoK6Gpxxo6BwWDELbv8rE2AoF7V5sNz",
  "key13": "32GHoeSqHLyuLPeb8RDKohet6W3Xx4nrs2LCVEjVqg1j99eEax4gUmkViKYUEv3zjqnrwWfFZfBSPSNf2uPejNgT",
  "key14": "2TsvuEHicRZUXEjoQoiei7cbRp8eB3gzW6S8YZhSxpMqzkP61L4S4WbBiHHRCwzaJm8svpQjTiHPNkoEPKbZQvCj",
  "key15": "3MtA4SUzvmajQG3eZQRR7349e2JoaJ7XDNqsy9VwiCqojXsbPFwmq3hho1deTSrc6TFtrwT2XgMtdBUoKRdiiMtC",
  "key16": "3WovTx6ibxPNS485nYqGdc9oNx2j3UKQnRof8YGkEjV9ninoKETWpsohb2RkjvECZLbkgxJFAW9J5Ge3uNyeYCDU",
  "key17": "5rmPXpqNoUBBZrq3VDgeHvAQ6YZU1H671GQFx5hpLLpG4681nQz3X2Z9hzV384NSqKfXadQQsG7biXbsJHeuaUmV",
  "key18": "RAwkE5aWsm7b3qJwYcvd6PLbvouU93qKiNEAUMZCizeSJShJPtERAg9w9rPX2ngMunaXV1Mj1kPhkQcEaP3L7GB",
  "key19": "wSKpWCKZCXNLRfnnh3V7b7U6BCtFQS1QFRM466aAUB9BmJYbFHN1SGf5QnH8fdxQS21Qa1AFBP5kWSpkKu6XAPh",
  "key20": "2D2DYAT6pGanMsPbMNfKrpPuNKbin2TKRG3N8iQwijdZxahxFBb9P5EuAL9Y29AtiAdhbhDCv5wuSgcbToycjWPe",
  "key21": "NP8tJH9pmbiFk2nNuicjqwH4LybWAyc62M5oP2t9guXoYFA2oPA3gfzkqHkh6r6TEKBbpJjRbv6wnSDhd9R6pxY",
  "key22": "5oaUXVm8giHYWv1TaDbF7WAVQFwhL9rTQQqX1eP4SpP3bugzvysTUbFkEgbbDnYQQafNfkUX3iByNiacPW5Lz8Q5",
  "key23": "quQgk9JwUDTQvfEuazwWExCGaApmWHWAikxXqKKXy28xVDGmSkWVPpHCkWLaxPBzKeoPjwdsZzcs6sDNfJADRhq",
  "key24": "5HFBRwKSLBe9G8sPDxedYNnJSwNbQBpPTM5GKQFn2CdHJUUauB2T3gQkcuqQCmkDRYS1JDj9v3S2wQSVspFE2jTx",
  "key25": "2J9dhvFsJBp9tJTNkR39mVXPggASrvU7YhWN8ygsF7FMW8XjaABHs8wfEYTEAawieKQcvmXk3EghCrtCa7c6oEP",
  "key26": "4Gz8m1yksycb1wGc1PHSEeQTBfSMYapsSkwEa8tRKgxipoixXBxBdsgKp1PLm741y1JzgJVPSBaoWyFcFvki3nEx",
  "key27": "Kznh9dRMszxQ8kohKiyxNWkbBgRwpEGfwxvKJsJBFsA75zSsF8bpgsZBMPhvykXvASNw7QZm5WRzwzHZra495mx",
  "key28": "DUZmYAxcQ2gudJszUrkzZNQ1sShrFaz1V8jBP3ue4eUB39qkyRB3zC4VcQWGkL2xuwJqvBjefWp9b33N1jPczXe",
  "key29": "2Jq43LbRJKf3X17936VDum7FAqKjNjxTgwz8Qcg13FcxALLQjqzxLqNY6UWAut6MwgC9Q8Dawqh88Pe97AfwWrqW",
  "key30": "s3gUKyrSJdwhZnMRwmv2faNH14PLq1WQ5tYG2NMop31Xh6NQsvrrvboQwsvy6KoZh7XCxYZMyScbuuVPdpqRrUY",
  "key31": "9u5sg6or4thoUogYf5qsVXDEkK4bd1u2CUq4ZhrzHBoe1rEkvz2tx7QMJC1Z3sjhW33s5otXUtquknq9Nt2um7n",
  "key32": "66XueXGSomB5Hek2meQ9DY1REQbEQMXPiHJNtkhwfRcNZ1LtciPrk7kfDXPSL9myxVDzFZupTFYhXjyCDut4kHTq",
  "key33": "2prjAmTUNpGysYBVSZguWnpxqWY78NHR54rEB9xKpqyJZJsftR2pyRxvaBDbz1RrBRcWEmHsZSjgLBmtBiBCNKDu",
  "key34": "5PpwTWd6W8dJENkDBZ49E2rWneodNLZcg7wSB81MnfJNnCDet9N3RMzMQ9y2v2v98ywACSJ2KVJnoJhxKLhpwD7T",
  "key35": "4RbjG6p58ZqyR1T21ZVwhRVuGD26tHm12XJgmAPXFXNajN71ZeEwb4cjeMmBPE9PbFGLPQNMGncMfDQC3dAYZibc",
  "key36": "5CtiuideT2Bzo85DQwyej7i1c4rhXUE4C5SnqDYH7zTJs37Tk5hRzsJ2AbXSVEmAZvGBng77KUNeLWgMmNZuvZ3d",
  "key37": "4ybBG78gKjTH3nY9QF7mnXAWDwxuPDMrPuvyxe53bkrxcAcPfatWq5j8JKvmXRfQvCiKETqnYHjZjagDbZDGxGdV",
  "key38": "5z8rmnFbF7pZwA3CVMNjeHzxgG4tDWorzym5difeHyov7KCi871AFffFojXGb2ioPKDiffLtwAa8QywwbXvLGmkY",
  "key39": "4m1gSLsTxCY4LbsLJo3EA4Mw8aLmp7y6AANzMXx1AgF556BQ8w8U3pUmaqsF9GZujqrwDCQNe5xXZZTxsAtEkPGz",
  "key40": "f1gCPLStFZjq1Z2kRGk9wKM8NRAbUmEm323UMJuMNPs8cv25FfJuVdLUgNm6BVUtJfeeQrWN4s5T5AQUFTbFyEr",
  "key41": "4P74mVPVeD9hv4k3ScXMCWT5bvFFtyZXpRZqe3zcAKY2rtWZhMnQB12M7acoRPbQaM94ZvjtRrVzHTAo8HHCjtrH",
  "key42": "4BYM5vAnwYhB1bnWtteBhism7crKQ96LCzNifHt1ksXYuRyZiCRZQ4WUFhGVeuHRxgDVRAKKT5ozPCEDMZB4C3hZ",
  "key43": "24ucfcaM4qssJLqcazFntjjqACZAFeX8vUbioe7LprfZoC1gcv9SYccqwCnMExVooc3qRnCJZfbj7emHKbzntbg6",
  "key44": "NspLn2k77CJwMojcqAPRs8QF1atknXGCD1zx1rTqzwYzvuWQ77y4LL2bKCDuZUs8tdVA8AjFR3NszE4956sAXmP",
  "key45": "5LU7GJYhJLrHXzjDJbpLYJ9z3fx6tiX4o3vcYjUXnEsqn8HXDZekv72dWHuo76K5DkwHHJsoECJwqkNS6PAvJxJE",
  "key46": "2pDraC6XbX4PYgBWVNzLQnfS4Tqw3KRnug1q76Tczm69qyMg8kUVKo6sRp96ppGYXVXySvqoWQH8kbbygQGx8Nr2"
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
