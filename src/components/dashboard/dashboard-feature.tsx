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
    "bfwAdVHjTscMhUdBGy6xA7WA6pLu8SJimwTPWAE1Mq6GWjCMGCMGZ4mpae3Kgti7joqNWPeHTz11sMxYA1AAreJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SBZ1G59Gn7XGoan2wqFyf8Ar6kHCvZJMmDdxi1h77DTsaK8DktCMPESjJoUS4zkuULSbRGeXgfR1HgVjRzeU5BV",
  "key1": "4LHjT2vEqwxfJt85jmKyf1LEySCccWgn3FEpNYEofPxDY5QjqUxFRhk6AEDiNtu1Bhj6MVcSCWLWV65PSQfaUSRx",
  "key2": "2NoFjWHSKWF5GFhXa9EbYFLEAZSZm65JP2NMv93wFdEJCiDtgQqRsLTr3eP4Mw14dCEYrzk2rvo42Nw3jutDGYyB",
  "key3": "3k54NGy2bBPERDqbZUUnqzeXheWpk8gb1ADQfgBcSYSg3Ut5XTqKfjwHDt1GkrmfVVE3xpmRBh7ksWK9YR11icxP",
  "key4": "kT3AcYhmu1dCudspJ29YWLN3t2msVsFkP5fPf8WUDiWYLPAQbF7xxZHWKbksXnGP4sXPAakjCwPkJdjcJxfLovh",
  "key5": "43Pps4NRfkDP8a7m1MgTL8bfeSd911XNYhD14sGh8Yn1yu8SrRTAuc3y2DAMNba3MnZfV9TiMr3tr7ZLXvwcpNjF",
  "key6": "SxfdBDcGC9EGb3HBeKMcfnNBHVhBL3WMpTVij6TXNLYh59zj8HQaoSa5XhMMPHzQNHo3JLFYxnmDS6GpawPHpS1",
  "key7": "3GSEoXq3gMWmGPpcRBk5kKMJKo9RzCmqbdHVhsiFovNcBJ2kb9xgVq5rQWxYvBwJsvpijt8J85cngiRvFAURPcJf",
  "key8": "37fS5aBXDThnCrj9XiG1xNB1bRfDkqisMcgSNMLLqrPZpeYUDULkQBjsgj6w91nUrJ7bLmed2YCnAWmuQnGdnTRA",
  "key9": "2hgKMJDDyH2sffVVPuK5Ag4svysWfkcpce6hi8rHvG75E5k7WHcyoMsCpb9jq8sw6XHzvTFUVVfGZ7VbfGdshrFt",
  "key10": "ayuCSK3mfeC7kJDDTCP14zze5bpsXBwxfRy2iE9YHyqsjE95iq9ArK3X9xxq574mEeayqEBTQQpL92bXR3W8GtQ",
  "key11": "nhTPUvBJ1RZ8tXxZ9GGYAR7kUC9nXwRWrz3C1PZHTD2Sp86Bo2jCebFDU39c3GS9quVmzzeBdt9mPzJzmXhZiUD",
  "key12": "VaMnQmmJMJxMFiG4n1K32kJy49i59gEPoNyBD5eBuMeyEErFX1SpDaGfmvopksCsJDajy2GZvyDV7EqkXhy7uyX",
  "key13": "4c2MMjdnqJKwhUBUDnpznCUudZgu49hZSqJHzX6WaFnRFFvB6foNDK3xVBpAQfsK2KKhnD3ftVsmusz1WD7mFfKJ",
  "key14": "5Aab72i1PQWubuv18QZTGLfwW38YWpyYyJHYavMhQLykBTqv5dgZf2ybXooJdDzfZLgKb9C1pzHPFwdSSCM8L9tN",
  "key15": "qwJ617vVHimtGzbo4CzZTgMGeRMScFRfR9pajaSqGoGSgYGePUEcgfJR8cXgPepCk3B2jpYBWJ4qTmJwLLwdbZD",
  "key16": "5iGTPifjYCyvRjyo5pSJyTXTzewhLCEyG2CYwratmwNmUsEZqJ2QD5Ep3QmyERoZF3vBN2Whv7MU3sHgjx8x8LAK",
  "key17": "FJxYbPncugWAzbpWGgNJtSa9AmfycorH49H6oxxp9pV7iWYxqqa368HpwME7fU3y36rMCJKJgXsAv9vRMmwiVvm",
  "key18": "5FRrdyzUpt2VbUwKuRNFdEfSCAWtMu2o3rJ53M4NTubeMvC7QZrmuPbmwoZBjHX1qRG76rUYQiqNDURb49Apghce",
  "key19": "3EUJtmY7hzucpuYcVJfsvGyu3goYbF6iAEGUSwYT13QTcpzL3SiEhFyJqdHyfkdoMMYPbU8NyotLNLaVXUM8xDbM",
  "key20": "5GkEHtg3LmbYWTsZo7Tf62BpD12RN3wPxHxU2GBX1c1YMAVEpejqje7p6LLUkPzEmkRXMkUT5gDHmEuTEsaeomZS",
  "key21": "Zr2CkE5xcq3azp5SxTfbdVuzdJYeaUzUsd7n1ncLzjiqWHCdBdaQBMhhbsVCBdbTSHoZL8pt23Ri7zM6kaoqXDt",
  "key22": "3KP2uPVzZBYvjef49H6L9b4Mpud2dWyv3i73TqFiGQZp33sFBLcnq4FPMacCJLv3iuk6rNekYXVzHy2cUoWjwCt9",
  "key23": "2towkZ5qe8bYVfAPfCbmpi2mBzKD8k8j3UVnUfdXtjrPfC5VM6ZpWJJEx4xi3YirFV8P6tB3ToKLg4Q5iovp7aB",
  "key24": "5yrDQBWtyC3hRRdTPivoK79vT3n9wdZzvrxdqcLgkCQnMbmVqJ2vAwGvDbbEmNMHtLZbGnPdLGqAfTEeww4FUsf9",
  "key25": "61kbYc9PmvwNXwcbGYqwdCDXdh9eMFHSQcfuAAi9N52B7DwWv6uFQ8YsqpEtQ8pkUTTQa3o64tMGPYyp9pMCiLsE",
  "key26": "2gLSf2gSCz1cq4Y7K4SaGfChCUVRqwpNp8x868kurtDUAsKvQP1e3bD677aStu4nswLuJvbvKnq3mCGERNJX5oR7",
  "key27": "39P28kaFuSVjCTqrDUm8Dwd7T8SvabFAkFP52X5yaDSusth1X33m8CGdN9CVnY3DyJj5BWbxLA2NqMwHFKySY6h4",
  "key28": "2evMweLnwGPZnHTraENfDtDXoYmmmSk2n6fcx7bnhdVj9wWSV2fzPBk9kGvU15Mxe5fFWSHxwg1Zsj99cMgNpZd5",
  "key29": "2yYYXLv98ZpL3LaYbKDmH2AyE6QcuHYAjiT14EuwpLdx6QCrScrBbFuvKdsN6cCzwXpod9eGDhdw4yVPQ3xN39S4",
  "key30": "Gv16rNj5vb7yoyiRqDdH4gCP9rPBjcuu8oBCZGoAKpkyrjLeoLxTYeb5nronSHLZCGo7bLoJKDdtwPSZ8SjSuZP",
  "key31": "4GjQiWuz5BPcFrdzCVthT2ZJkEpwWDgWarQP3rq86G6nrtvMeVnqkaVTxswoMi74ZRBXWJBRB5Xq54nHAEjfke1t",
  "key32": "3yBMwcopPK6PfzFWkVd2jer7ToYqYiDsvXVNpYbTQNAzXr4NbZAMCdtdn2n5tHdrF3XpoTzuaEb35oTxToDemQuT",
  "key33": "f4TbHBGfPZ6sZN1KkZjnHgBkn4jdEjkG7CVDqWj9BbRW9qi6SxBerS7USzRNwwJ21VX2ATP1iKV2qS6JgnkorUK",
  "key34": "3dTtF28bCFEcHobttkCV4HiiXkMdxwNSZ9UVJfz6o5Ao2PXbG4XqQnKHkMHw4Kmepqadah117VEqP64s1oLzZwmd",
  "key35": "3oz4zuUNrTyJJFgdMoMZ6m4MgmGmnzrP56AS5gTtmd6MkK4UQtAq2rFGHVdG428SdAXwn33PkJ1uXXgriF477mks",
  "key36": "4ByApnMCCFuN2Sf33eA65zPh2xZXHkD4yZUEHidPZW6Gn2kjrq6cNLaebrzYqryScjutJ4TtorP5cJLHyGz33CEX",
  "key37": "29gJY9NHQWFEHQAH4DfMi2yqRSoqEZHwPzaykEtVajsutAaaAmomPyjCrGCD1ii2NZ1AAEbWFaBezAgzZAR29Vh6",
  "key38": "vk5Cyyi8BVHmHCPGFDvrvUGkJH7YepYg2s6zZzMnN4Ab2PVj1ndBwSzYvs5V136iaM48BpzFC5ByHkdzuxV5bNq",
  "key39": "56Nydxhh9Au3MEZkXRLv2PmX45K2sSabm4yDxWe4Td4w8x7dNL1HTBDVWVyXcpBCwCo2nGhZJpr3ocShU21AMJwn"
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
