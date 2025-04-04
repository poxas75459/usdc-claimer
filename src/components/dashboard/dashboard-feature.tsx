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
    "4iYysZKKjNHuvuGUobioGSGXFB2XqniMWtwbx2sehE1qy8Qg1wjDpfL7SRV8vw4HoReS4T25DEUnr7ssN5WZ3Qn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Zj4v91FFmzGhxZsLeY4vDHE4fjozaaZHVXj2NGFQgrGXUCCmpXCCyMSHyab2cjKrgyddcsjMeJhNRRHe37iFyFj",
  "key1": "2HrypQxWPhjzjkgcJneb4jakAXJT9HhV6BTjggqxYw2fX31F7rHnJyZQb2x3RqfDeEAxJ3hhVNtjVfxsE3M9LgAk",
  "key2": "s8N2h5XMogcv8QXtf5RoJhGF1uqqaHkZn8wM5sgjwMPjqiowivzMnw8baocB3dddmZLHjZohEKkDqfrfwYFkuM3",
  "key3": "44KZidu1bZUQfjAKujyrjDMKAgVauPXKACZoCxd4XUvGkXzSSumxmwYr6S5MeCA1tDEPPk51Ywy7rknkUA2eyTks",
  "key4": "2t5Ba2bXfEy4rxXS6kGS6fTKwMj3i9B81ajCnNG8EVmQNnPFwH5j3CGbV5Fvws1YaxtG9SxKwCNsJ46FbyvEKgre",
  "key5": "45cGYTnxv4jwDjr4EcCarryVSdkQ8bXKkcVPcCdVVHHNxCJRyTL4scfsknUDao6Tzfm8XHsURZZpoxaGdu4vYGxH",
  "key6": "efH8zZdXC5GsZpNYPSCYxNASccGtJhg2zCfimdSGw9MRcax1STarwVj778J8CDaYgz2Mj8HhA6sSMNfiWnMM52r",
  "key7": "5Qo6WwKCKwbA1NrDocWPiPvHFtcKXqwS8MAHjZ6AQL4i9SSgbR4w6M5pXCtREZ9i7cgfSnt3nsTHcBpoLZRaTTPf",
  "key8": "2FKwffurFEyaJyvjGdWzxB9pNgR5DWuhSi1toanhEZZexzTeF3sJN66H3BPZWYHp83oYKTVnKfWnoAhAAxy7uBCV",
  "key9": "YNGyEdT5eNgevbZNWVUGaibajBKwWYHvBc4UBjEaf7cXAkW2CBeNDNPi2najAExWd6MKZ7tfECQSLMUUuvuffVC",
  "key10": "4hE2VFYNKweereLwyZrMX6vcwbRj5AymLUkq6vKcWWXHKw2DyU6Zuu1D1mK88FZQWme2iV73LcW6JGjVNVGkCbED",
  "key11": "EP2AonF12hQodrMjmd2xugnAPQ5iqyFzSscrvkcv8DvJdCE8owit6J8uhRCWYYGs35PZDbucrrBMdj2KA1jUieE",
  "key12": "3VeciYpQpYHDqo8wwyWEPXVa42utkHNGmY2AMihvacDDLS7NRvVoygrifawpUapHsw1JqrYeVwKGttVBGvR6TRmK",
  "key13": "4b3a8AnSNor9imHwWs2U31KEd7gXmsAASaamGHpyNL2pVyAo7ySa8XNdYro1r3nofRcDQwZpzeq5hE9ekWCNrHXL",
  "key14": "2qnb2pikpYjwc6DYgPJhzsyDRnddXVS3omkTf1abL7FGp3Y9rqSCi5Rb2MmCZK415UptEFPzgyvLUFbwqJW4pZZr",
  "key15": "28ByPhstqcv4HqnHzsuxe3sHzHjPqCSrDKui2mNed9DjrKQsoZ4N7YApBUcNA3MPvQADxYkJkzgbboJBKTpHnd51",
  "key16": "4XBZ7h2mFa1MgaJKZLnssBYFXZXSWozKAqehTK6bcjf1C2KBJF4WCtBbHU3K4zDE9HUW9jWzksPmbkJUxPCorubH",
  "key17": "LzmzaXoVLujSH3xZuxpSAwLCL1wJ9SDMjtdPwpGjniUjbuUAWYB7grWLXbVF4axjaQLofkJi5j5JV1hK9G3WdPw",
  "key18": "5ms2hhnybKkFgBvQVLoJuAdy4vCVDPqX8AZLq7QsJVEDXeY4WXc15CS2ErDmCfxtMabbm8b4o7SAT5XGr4YHAReY",
  "key19": "5mVtkiBsSWgdnxXnHv9tJSVKaybBscfqdzZYud6BfAAWBu2nqWhsifZuC6Ajf2ArKLjyuFHfpLgPqkpxzzACvqDL",
  "key20": "5jVSReTQ5SQW4gDfiPYyrVBW3pa8sUxHMvWUTikerR5sWRTHPdQHF4SxgW57Tfutx8K7XxWkDS4up5GMMKTiJFPL",
  "key21": "4Ge5PV7KZ88uqtjsfdwHUppf7W8A4u8PChfXFKzhdrc4PyaS2qmgH7ADiC4fH9UinGAVR6ow3oYq2CUux9VRtjok",
  "key22": "4Ebpkan9XLNMSusw36Q6ZALqfV6PqH5a1ftiE8dGeK1kVgmesmKMR5fmiq6aED4hDa7oAgztT6YKCdKncg8udR2Q",
  "key23": "2Jr7ftKXBH8W5TL9ukeH9BBEnjVLcCNSY1Fw7VfoFpfRjU3WH1GBzcyoGXTDhiaFRutTFA72yPKqqfRaZwEAsH7C",
  "key24": "25ZBSSRCJKgWBSmKh522QjMeYFvg2bwNAuG9eV7P736BziiTSyShpoiks7MPorfUNd3hvqNxXYkZbPzGH86s4yau",
  "key25": "5e7Bh1sHy3KERb19HjE2voXPRBzs5LZnSfpUHTCiPdxjygYkBFfdUBAeVoh9upRUdsbhnSSMuLXKciLbgWTVVV3k",
  "key26": "2ke474kKhFkroKp7jHrygdLhJSSrFnGfaXwbi4agrpVQnNmYEwoJwUEJvP8erAbPnwhPZ2jsG6uNHUSpYyZ7MVZ5",
  "key27": "4MevLUHd9uPYgzeZdY2LLGqxWKKKtVqgndsVC4R4TBXT51zmQAAHjj5xqD16XxFmVkGuTMZhgRnMENugFy21xkh4",
  "key28": "5vZT8yET2AxEnM4aHqtwb2KxnvowGeA5AxgZQthBk38vXqZM1tbvC3dw7Vn727SZdoMPGmFbSwquWrHuNTzQezGz",
  "key29": "2JJgXZd7f4jUvY2B5cFdbgG7vUt7K95Y2g4Ms2npBogk5XTZQhA3Jyd1e2kJBszgcBe56zv8u3SFhRPHW8SDReW7",
  "key30": "429ykQAKmzxjf7ePV73qaB1tx6sHNxZBiLvC7zcSfHjXnAVoCLHfQaAQWuvyqCA6UM7zz6htLpdgFy5GvTinze9Q",
  "key31": "3yes3BSdJ8Ufhun91qG8PcyeLF656siJ7HazWakh9zbxbRnar78jZdyRij3YHaRr18W7Tjka9k7wfhatAuVgv3MB",
  "key32": "2gEKdwHHYQxjuSNUQq44vjbLdRm3FHLkmgrMX8F4qtYokypqd17iSTuu6bZvZWFCeDphAzETiCpAnd4eukbMsn59",
  "key33": "4aoaxu2wQhZTXM1U2UqTBKGRT53RCvzkhaCgitFWuKSToddDNEv7JKSE94kmJ3J7MbBgH3NWgsFgkAhkrz7ubPew",
  "key34": "2Zks4e4SgQnBBDCpSBh1bDrBxqFGrcHQhxALc46V1S6iim5nB3WPz8Y7cqTYrKcRPixyk18JVLoJQRpoAAT2iPs7",
  "key35": "4dVHW692p45t1mxiCjCsLhVo9Gm1p37okiHEE4S9YZgEeVcpweUgJFdC9LH6sR6A9QpPD97SLnfwg9JQeK83ip75",
  "key36": "vxyA7ScTxChFEroLqa17WEWrg7gjAfkfFAqV5mcgnCQDo84Vu4aBFKvzkXfV8SF8CPPyiWTVtn64tbZqrgNGKMi"
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
