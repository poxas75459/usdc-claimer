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
    "4tK6YtmZAwvMEp3okvkCzfZdyexeeGykTcXV2tAxhHnmcL1uBWcVcdTbRidCMWT2f5omjsbVHpUWNTYnfUit4zVa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "62ymhz9GVNPJgZ4dahs7BaqoHk9781xvHphJcQoEZnoGgcrGGs3Wdu6NydUDTV2EqNzDajmLYARFHS7Q8tiQ9Lnh",
  "key1": "Q5FWyE2ve7yV4ir2snmwsNa97EJTgkDwi4fYo9thKLAqZfJdgYpcoiC62n2G2fu1PTc7CcY8D5GWgm7DazTaXGM",
  "key2": "22Xv44BhkixwhMdoAfMoHrKwcHdUCNimYmfetfo5hLXBo9FSmbx9zNMLa9KDYJhBC3skmaNZktv5mBdC62kHu1Vt",
  "key3": "2dXothxUTb5tqsarHrP2cuwUjGYAfh6kGvqzLf9MrVG15LZaPv1MrN1GnuRqciFML1FsmAWipnx9gqPN99yXUUWp",
  "key4": "FfoB7o1ysjWB1dg6hrvsEmF5S3r7CAQHhLrCAi3ReWmqrqNywMUZohewcaqbkLRTpaFG4yU41ka8Ff1mDuFGTTw",
  "key5": "5VzwbNVPSz2GKkmz6bTXjCout8zxGNUNKTKiQWBmWsQf8iSkHLCyVM37eccUhSwyw4jQ1tAufE58NqvAn9kJXCfD",
  "key6": "4HZrg75tjYt1s6Thc9NyDtvB7VgmjuJ365gbZBkLsu8m6GjK4Rcq4dLiQpnC3LYByrJTr7fBMUnigXriqfsdjC2r",
  "key7": "5PbW8U9G4MiPqzXdxCrifoBEb7dLjZomvU1QXHdeAM8guKoR52G9X7mjyxrNf5SrNoks1TH3ceK84QC6aBFssHia",
  "key8": "MGYimJgeyYM2RD28FhDyMi1bWNGPKK7ARjxXBFc61GngB128Bp1RHB8gbw4Nx7YJ5PZT98SMS8PanV7MwTkLoWk",
  "key9": "2Nf8rieKjy2k4fGb2uh2rzv5FYDoAm7iwghtpWnYWsZT9THwLgowmn6BuSDisHuKPtFxU6PZBkfmTjQZPc2Undtn",
  "key10": "5kscUj3jkgDi4yr7YFQMH898CfgCLQW1gznmbanU3FRdPVyfgtu1JjZ4KDc1hSHyqVqSmeFsMgmkb4VLtAHKuWgz",
  "key11": "53J37DEbaaaEdjzpoZPg41fgi4K6gNJ8toW1poMFht4XHxtuypHhZ22UzviZNZ6cCEpwpujvSYAPmMGPYb9S8Ui2",
  "key12": "5QaLSoZLG6fCnPotTeznQvw3ahUhu9QjfGqEoTbzN55EQbLAxWvprVkdzdsZ4DHnEyQsKxP68fdQCkLWSoB3SEP9",
  "key13": "3dhvH5HcCU6rfCNuAsjqPso1LyjaM97zgyE65VhWYGKuomDpNxMsAkftcxFKAAJ9wUTfCvBHj4TA2xsfznR9LrMd",
  "key14": "3Q395CT71bhD2EhocZGCPcAenWDCb98oEjMdkyJ39jTJFVKMbte9E2n9uxRj9Tjepa7p2kESeeKhPAcTE5WwuUoe",
  "key15": "4GaCBEDRryymBEfWUxtMd5RzsEFcKwKMxLc84YGfxk6MHpuatoGZAazQSeMbDWMjGfbX7kJyMcvQHDWxxQerva9w",
  "key16": "5WjXzHCqXSkspJumLEqyNNVeHY2CXGA4545fSwsygCTKf5642X4F87NHiCCE1SoGUwB1FRAEs8cC2N3anKKSpLbj",
  "key17": "5hS2917pP3J1mBhuHG7r3HXQE1wfSkA9A1GRLVDtoeVfBCeVvfsuJDw2TzKa6g57vyJicwmry5kFA8kFGquQezyk",
  "key18": "2TTY5XCgoNyY5bZCPT9umWFEodrUEspZCu9pfPgsH7ZDFsguQymp4cnV6L71HocLkbGoZe3oR2b7FYrSaotFWGe2",
  "key19": "dRxEzqGsD6GnLUsnnt3EFSVQhrE5FXMQHrCNrFmRU7AoWgsFgHKShcccc8ajMYPyADCDJbNt8JkqG45kLfwq61R",
  "key20": "5k3dcFgh1BsUmFwp2VNmHhu2g9FC4uo6yxXx3VTQDitzUA6oFE6o89MXbzM99g18tr61UyUTuwVKhQhYhS12tWYA",
  "key21": "3oKc4BMqhMPAkUe1t1bCxLbLreF8eLtxKbedkCFsf3c1zovQWPabjtnVQjpqcCBg9sf4xnnUazCM42jHNMXKkK4v",
  "key22": "kLBJXvVgMXQjhvrbPN4wXKJFpmYgwuk8bYgqhCcPjf4RNHa9ywQYpQP8MuqPrAASHgH4roxR58E8JpHaQWKTDKb",
  "key23": "51UjaAdYYBGbWqVZXw3NjKqSDJbL1KDs2615ap81H3coGnRKyNUBW3b68FETyWsSi78Lt4FbKXcGXx8nbjpjRfTq",
  "key24": "4XSq5gUojtzKWvWpBPmXf7WDqfefhr1YC1YvfiZoJ2fmh6tvpuGpzJFWHfSWBKF6UVJytiovWAovE4PWkbknRrJf",
  "key25": "fsvfLDZGRsfqKMSbmgR5gg8bvCBzctvAYfKgu1HXZK2MBTuFShsAp89sZ2TKaDBZotDCvU5qSFehFfSLbTUkqNS",
  "key26": "5zCB6RZ3UfNoQ4xfHXcgcop3CfVuHisdVuzvPpd81cGLtVBpHGYF56qNH3XQ6TTy2ctLSMtdb5DAPhgzorfVYEEi",
  "key27": "51auXMnx89PUzwQwp6SzTumX7siJYPGxc19ah4m8f9PAQ8xYFz2eFiGL94F936nM2UvGQyVsD82cRQFf7NLRJgd",
  "key28": "LCATxNYxZTmBxjSShdnpFQs1s3GUJiufJEk6tT7dmty5GX1ezJLyxG7yotjeKQ2txwxEEGJVe1ZWnKN25roP9Za",
  "key29": "55mFRyadJFG2hXtg6tP7AkCzn7ZGgyPQNXjukuKra7byg5Xupr9mgmJfZ3NrQHhvM3isya563TzjDoMrZ8DvGZ1Y",
  "key30": "2A5W2sgMFXd5C2EfMEXe8FM2qysHRPGGEU3aB7rk4dVcqzP6zZv1EFA9HVyyVDDiB9AErL6UsKrhQFwSsGw1XqFf",
  "key31": "62tnAe5faNV75tgmiKxDcPSGXhe6wqZtQa6uCCV9kDvYqaRTQdiMJ7pKVtFGd2NkYDhmVFD7qRJaDWzWNfAnDt1s",
  "key32": "3ihV2MSVyG25UMKhArsdD3SxH4KPNAi1yWaZisxZBx7md7d3bKKTqeKCUQUQ6QshdmrRKcp3wBd7b6cRDGfZyMtZ",
  "key33": "4VV82WXyJ5QogRDBtZsVhcBvVb5gAYBzpXD1pzDoWFRDuKhir8QM5kyiQntDvsXd9F3jBgXHoxdhgqAXnFHem6Xv",
  "key34": "2YYeUQhTFSy2psygCK9FwmuiomSnZZ8LXbHXAic5y5SXnTMoLyXvvgbEhxoRMo25qvtexypt7UN9V4mMCU7j7nc6",
  "key35": "3aKkHEPH2sRnMq9Abe6AaWVuowpQ2ZEaD4raY1DMWoPPwFi2pqwyaGWedTtrGDqYTkJ6PiEGuG4WTH51ZuCyj7KS",
  "key36": "DyNyEtju6UxtF5NRPWrg2R8JUCckmpoPknEqNHm35AAbuD5jihcuepMXWV8dmJS9izvx6xyABQ5L68ZQW2W6z36",
  "key37": "KEFbCtxYaJUd5v15oT4U357i1Y5ZKcuibZybzHajFaeQueJBVxAsjDVvjSt6SUbBhGQf9moCLNtNtvqNbHv7Wtn",
  "key38": "4xqW139pgo8FL4AiQArPxZERuNWHdW1GB9TN21sGzwmYjvoU7M8DD2WrqjJC81WkGck1WnDu6G52q1USCeP76ZJv",
  "key39": "2TfddTXjSyTosQMMQrehF59XYz2QXhjxoWe2rBiEhxgVZ475Z7YHfCrkLKkfvZuAXni9aW2wc2qsJ5Fr5XxXYNkj",
  "key40": "4yU5qvnVSBQ8bUZ1DXaKXvsQLmFA9JJrzKDpymo1QztYjAaBZeL96g2pNCeSNxUuNompSANE9W4NoSfqkP3Y5mfG",
  "key41": "52LF1nRT8CvDufP27HpNds2QGdMWq9eF4X1kZiTHGHE3zYTsrdzR4NWbEvydjmT8S1nU5Qd79DdArnaABemtzZyF",
  "key42": "3aEqreExsPiXGU3EH3e1xv5LrYuiQ6HAXrzoub8529vYpskNAUjTeV5zVUoxtKD4fR7xRrRg7M4ZbnphfKCP8pjd",
  "key43": "4iQcV9N6gb6AiD3mG3ruLj9ys7RT3WELXhCPxsjVndcJN1aoh13pb8Sb4iwrcXhdDnrUZNSXDwmioCQ1UoWoyinW",
  "key44": "5h8RpYhhCUzQY5UD9JPBBKYiar8ksmq7Bk2BtiuG8r3sS4AQYGuAWim5pFUET3Apy2RUG2sD8QmE8bZvjNX9ABhT",
  "key45": "VeEvrHSohZ84FLmcQrN9oHW5cWTTUnxyfQvwvws5MwsGACK6jXyuCSki5xd15xcSJdurec7qvC3dLB3JLBEAJFn",
  "key46": "3Sfgb15F3txDzEpEXNrpy3cWwpbdBDGz6F63JN3qwkbYCKK3z7Xrdgpc2MWTxHre1ctm6un4u59mtu95wVvugKZ7",
  "key47": "2EKf9vEz2fVzrWn6n5b9tokMwQdSXrmd68nuuAmEMNm58u3HrZHPufDrFLHX8tunKZh22pnPGrk4bq1VFNenSyCR",
  "key48": "62AnZMLfp5fVuaQrjDPx4M131YSwc1Ke7WXHUe4r5uuTi1MG4FDLdii6t1h5CsUzHna6p1eEMCFJ5xkjhihL8Z5T",
  "key49": "66kjzgZAZWXDJz8mJiNqCrEbDUHop2wGEttTPpBRoWovsh9RYyr8UF2uzDLRFtcBbq4dSMPWtjbiph9r1aa16bRr"
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
