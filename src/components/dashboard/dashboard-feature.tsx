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
    "4c7xSbzQcTE389ofStCd7iXaJyU5q6Ya57kWDQ5vJKCiCJjdXLuvXHBgi7kKzWJE335CvF3ZvYWchyax6SjSKoEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ugDnk8KBt1kGvAboj7VotmmaAiAyasharf6DwaQkC2XxawUemPDWxs4KWg2vSyMZQ3LycUgNcVxM9GB4HTcJq7e",
  "key1": "22QcsxNYw4oUhB1vyHFYcLZR3CK5kB4sFcThUtxsdFV7PMuQqK6GuhvJmUEJXSfa4bXg5c5eqE17P7x6SzoztKQt",
  "key2": "53mcxuzWXPuBot8dCN85Qq5uY8kNAFBJxs6hbypasc5jVXmfgb927FCTReJ5tcj1vAqmeNNNnmfgjWLZxEPuSabA",
  "key3": "3ccL8ptkZwjpZ4Cob1EVoXBJwLua9f4gFXtUS7pEaUxL3dkLSGmhpwrj35C23iEqynari7Gxi9qDZa7cpC6h8FAU",
  "key4": "2d6kxT9CeEtEurCyxNpRubbiajQJ2trJLBYLA992PC5m4UbLCfxxGYDvMLccyYxpZs4iE1FTEyWhKsu31ssLunbV",
  "key5": "wbZeTXstc63k5UjStHnEbFfW1C9kyXyyJwWdSxKWTqeoRki6xXchYkqBdrLxWueF25Z5d3hvAHKzYFwB5kJwZ3m",
  "key6": "2gCxLbxUizK5BgGRuenR2ZpcpaCF8A4afxLWrfNXZE13YLYdwRmNG66ToZ8S9rjqFE49PaUQLg225EdcdKgk65zV",
  "key7": "5qcpPZeP3FhFzvMZXNg3pSyUHzDv8PPRakbadRFYRwjh4SG481YeAfBx8Mb4u1bYBU336SbvvJhfofHLkkcNPBLh",
  "key8": "5ACKGXvrntvQ8uDpK52vcCVE26am5fjtEsnkr5u8wtsv7JW5cf1DL38hDAKASbAnWrN4buWys41xbURRtTeRCk7E",
  "key9": "2WTtSfXWnySDcug2jWPm6YcH2MFSfYQtdMtwxp7zvqsqdVsH5Lv9HJTTmYWLCBTL6HWbgHNj1Q8uLChm1mk1Z9tD",
  "key10": "4UeofhPjGniC2FGFjpxRhLt5urzsdN3z3BcddMqpkNMuFHc38GGPCQkXzHztHCSHxpXPH4yQvHxDvT3vs58EyKRL",
  "key11": "24kVD6zhPoKnoLiRoaAaHJHtceVYCVojmyAUiLmYiLTSpfHJWJPRG2Dqcz8QTJCo4gg6CdXdjD1epvy22TYgvdeU",
  "key12": "4aM1H2kjbaixKj2WpVThvsqErfckrhf7ys3JrXoHyz9vVfojETbj3wtZmXCjdGMNHQzsjHdt3ecUwkGgpMAgJqkf",
  "key13": "25hGysTeLnEKSdYW6hKXhx68tQCyc2fDJngoNkb2DqhpmGmLC9D2NhTcAMbup2hzbZ9RBMNLXGPAWFTb5hndAvgw",
  "key14": "7qwB12ajs6v3J1h4282fDyBUXEmkTDtkvzwY3LcvTd7Q9GLHHx2TjaAP6L8kj27U4Dsp5Wt9Cfmcyud2NVfA6oA",
  "key15": "oKfpuFFBvV9DxC52nfXRUXLSbhMD3ZGqyiS1so2vAbkBswDsBd6aaksS9ccuENc3AYDR681GdUWZfFTpahC4Js5",
  "key16": "519CvUzLbxG6TnYxiVy4tVEKBgXD9tKeZhRGJpD1LETtP45ZDnSeTKPDQxau6GgS4iuZngjW9C2iSVMt9cxFZ3qh",
  "key17": "42RAb8xzZJmDbwZhuCzCsgMgUWNCuEHjG5LsP8nEFeST7mDYM6DrKvWWCTVAX84GuY8MfMTjeVvawjYaixU3mEge",
  "key18": "4HYaK7zVbdarLPtR8tfsVgmtEEWUWvWetA3m2QQXYqUCiSEUnR5GVA6DeGL6dx8XXR4NJCj44mhQEWyTk3kxS7Xo",
  "key19": "JeXkuSgTcPwj6aCaK88utKqCmrk1Z1nzgF6vZPod11oWZBfnevygndWjd3tmJTUgjopZVJYEQ2xfdNM7RTVeCkA",
  "key20": "HhwmGEXuBLGUSuUVQQtveux53qHs1kVDeumGCtKkWeNtnTdoykpTknVoNJcnvbbewZznwZ41nK37E9EbwavSDMz",
  "key21": "4KeWVKvpZrHyikk6MBUQXzmt9kBbPodFLgTYKUbMq4TU18dJACQiWQoZiKUsHomd86AitV8VvCiPaYKkVuS4RGch",
  "key22": "2bmDgZ9GY7QkgXchuQhBVwCVdUJbuV7MAku5C5Ls9YFsMpqZSjAPxnG6LvVoK46ecdqBCrBZRrtDAErYJ89uQoE5",
  "key23": "3zZGmceVuUCwpnbYm7KeSQvy7yMxQ13hrfsW56ioHRb9Rf8UNUxyBfKpiyuXMi5o4ezBE1tx8qu4bk3FgM1ZD9tJ",
  "key24": "5VdPbKSUkTYYB2D4GDHnbV3p4m5oZPZsPEDNmT2aijBVJQVrAK6pXtDncADFhpW4QV58MATwKPxYuEMXwou5PmLd",
  "key25": "41ik6GEY6YFhUfawiu4bRYaQRSNxLkixksLcGUiA1QAcZdU7NmwAN3Rev6qWoszRoqRQ6Nmn3rMcEuvvoT9XuaRp",
  "key26": "4nEddS7D2YacEJf5WF3dE1XxNZA9reRWVsN5E2vEm4xZe4iShn4rvXMDRCrgUSY3BPQuzhZNw7R5LUcTh8BjhB1i",
  "key27": "58arYFNryr5VAGPPdy5VqVSpCgv3AVpzfZvwRyGinWfDo6VC1vAVw8sZs2KcHBZRCsi9u7shHgihTjjXvE7Yv96y",
  "key28": "Y2eQAtbWkHeM6obycytpzP6pwpMFqwMwercoE5ZzBiWLF5CrkSXDo1hHpys27To7LLBUAsNFB2NAqyyZpr9tPpd",
  "key29": "41eiihAcEGR5yG8imR81B1NwdZSQnCJmK1QgjbWBdLTBQDBBZW5R5KGSKCY2WJVdVEcZfzUY5eoLXSvc8dJnLBeq",
  "key30": "Hj3xJLHDNF6ejTz9E5mXQQLV4Yti9foYvSyLsKSJQiJHua4kKzQgcSCDFgP2CYFPVDVhtRxYF8Z4mVBMwvnqaWk",
  "key31": "5Np3wGbL57KNqt6DYqsSuWczV5k6qL3qecQB5mhvPDp8hkb8XfDaJ1mvtQy2nHNo4zjL3Tzq5D7GvzcXQjCwjzN1",
  "key32": "4LUQvXyFX2c2ZqAxUbK4vWGz9k68iQbxSeGtp6eMAFbLoBWCLGeUA5b6RZomEYYKuaosyhPjv338k5YoC6LKEps3",
  "key33": "2hU5fD58TCggMR6V4V3YrXEr2AMwrqsLCXFdGFQw9zdwwBiYEje7vGhoN87MPb13mbMHEdNcKSLWWHtr8Nowquwm",
  "key34": "2ikrpZmFk7oKDTKT3rtwcSQm7jcfTp5k4GAfBtgwgPxivHYsCnkdawnxPR4TByPeq1x1D2WSo8TNzxSWXHuLwaBy",
  "key35": "4WaqUWu6HrEVaj5nNPskGETrxjYJbhGGfEUXRoGqKBLcJekvUJ4MCi6KAt8bztme4Cs4xwk2rugctRz8osSW1umn",
  "key36": "7qFUxivdKZ3fG1LwWY97eixz9tyQBgNWYJVPi2CvrHr54B3onwyFpECT9Zob7Ytfigp3UoYjS9dVyYcJtxANvum",
  "key37": "3JudTVsSqMKn2iQNgiQvir81yMDxnNUJRkMR3WzRkYtHZvLSZZjcQd2iA38WwAFWSmw7sVTnwsM7LK3fVQarQjLi",
  "key38": "26YBDvEQp8khKFoFSq85sNDfUzGeCYYzFpir9M9hViVhKLoR6RvS9DWgNPGTPgaX88htkzmrzw56gDVgNT3NR4PB",
  "key39": "3zsc7eHGJD1eCiiaaTnVQuTEULUQWaeMQ9my1c5h2oAdSDY8vZpDzhPyHUePzs7JT21uEBzzEdjAPa3qZ78HSgDG",
  "key40": "3c8YmY9LtSUBu9JWxbY5q21kyKuLLZHBwxE4swZMBWk2YCAroCqAQ3PCHY4QnQaiCzoJv8b5MaPMZtGJeqADtgWm"
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
