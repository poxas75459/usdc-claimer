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
    "5t7EwnoP1oghbi7fdjwvdkkvBJwoFnRVrNztKV67KUBnt2tHZK3o6pmBnHmg97k9k713zMJSYztggDStqg6GmNs7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hNnX5LNEiH2KoVmvbEiV2twA1r2KuYGDfzvXj7cjcWoJh9GmWDeUX8sAJEyvmoPPm8kRuRYBy4jbrVoXVaGxvgy",
  "key1": "38a1LecFgkFK3rj3pvB24e3TrissgMgMJL2jJMh8hSGGtEULtZ2ea9sWn5RRt3nQ2t61WBbUz8u7Hx8ubS631EyH",
  "key2": "2s492QHJykufo2zgZiSRMLwZLzKSJ9rAcpG9HNEtSyvfFBa8YH6qnyHucgHAfv1TydNc8nDziHpqKJUdR4Eqhdwq",
  "key3": "HzmtNXgKYB95QtuiH48g4bFj8DGShsNo6qD7CnrkirWLyLyLKk9RWCGCwuei7KQfvj9spNPtM18BUEA8xuPCUSx",
  "key4": "Q57A2Vr46wRAv7gGvCU2jX8uiqv9kbeYiHnmQaSwuMCUbSrQrAzYjLgh6aaykcmVfpWjgzjrjFjs8XtHtMaR3As",
  "key5": "5QkoqKCT8RTqcikYeY6b56rteLxkrXbB1VzM3C6GDgDLPm4bgmhfH5B1677Bk32HgQsPHVPaB3rdbi1NmPhKQeod",
  "key6": "3bdhqEyNrwRm23zwYJVc3qqZ3T6YQZdzbHedzLkTd4q8CGebNC4pJusgdnSb5WhnSzWXRkbcnQ6Z7stvh4soLY52",
  "key7": "2Qh4FFBVsBtaYkzMxouj5QkMS92y9FjtHtLcVSVnjcYsgJaPEwvhciWGZctD1EYxUQGsaNRGfm7d7kJRcTxqo7vo",
  "key8": "fjz5USjfvEaDTHJXw95km4UjNW5dJG4VBe2tgcc7w5LsRpBRVfPtH67qvRdf8ui6BavGwEg5HS4Qs24KzcaGpC3",
  "key9": "29v61iQNo95ynqwHZGhUBhSTzMsm3xQkYhLSznaYtAhdrjj6K9TnQq14hEfv7cKYTAAHTGmgYuTvGZu6kFCx1J7v",
  "key10": "2UCmuZAumEWWKAo7aQtX6RuBYNShBzkABkmsdtA3UHBfo8rRAKb4v35de2ctaag62gK1oFJKhzqnKxcneM313Jh1",
  "key11": "MPx5YHh3yNh2ooer4p74H9hRkru8F6Z5aXfa7j6Zwm3MmuWvC3c11nw2tTkYJfqjhwa4BJ1Nsu5BWFQtM5WySEd",
  "key12": "4wx2sRMhXnVpNwEEEXHL73c9CvzTyiDmxjju9uP3ntCg4jMjJB16MVNE9wadWALVFXidSWVKZwAPdCJDHste8iH7",
  "key13": "4Qqu8EHcSYHCybu9z1wMFPgW7k8MvHj6tDNhvUYR9zuML4eqqTDNF3AdLjBNrQg2Brzbe7PRP5G2RDf5X9zBjrZ9",
  "key14": "vdQpZPZYbyc6A6PiFcLNEtGTcUPjhArBcvLVmP6cDVGwM4B3wPpD4JQLMdFrGr4AkCrAeTthXe2k5D67F8wE5Jk",
  "key15": "2cC622gCLpuAutDEFPM1ka3q5JHsV4XT6VdonT3ntZd1qswbVkRNYJUKo3yttUmzLxDDfmaPJX619XAD1mwkNeYE",
  "key16": "hQ8EsDv1p5rVHQsY3qy8VAwMLyzU95hur7HCEWtRnBT7HJcZUohBsfm1FQtPxRgPFMhLG9Wv9NacEcdyPGr6gRW",
  "key17": "5KYzSLBKwBq8UAkKKELCFtjT4b7APx2wK8AnVJ3LrdX9y8NwK6UpHN5fasfwzry4r6SMSR9Nm68SXEtJ2DLhR9DX",
  "key18": "4MYx7ZW8WRfyNeHnbpHsRNnZNHzXVajoqp8xFJcaynBznNmVgdsPh5kDXwN1Gh4HymV28e5PhZVSuW14uWMG4SKX",
  "key19": "5tNm2bsAjjdb5oQCzkTEfamnFU6V3Fnj6PpTXHqEyWmTH6tUZGpHUYJLF7nPLtRPSMYYbSd7fL5GUsCUwe7VFpiA",
  "key20": "4q9K2jqdsADfcP3ft176iKbwR7HASinPXUAGLFmA3D1U1amKGNudHLSXJSLTswep4GaD41sM2NdaJHwxXepxp5EL",
  "key21": "Ng5hoFotmjpbuKQp73JEsP7udp6fdBk8jDXEzUv7zpnfVGtnUGRCq91ixv9gQsPPM2cTKxzxTDbAWyFvCmMJKmB",
  "key22": "4oai5maJJvxjEEooxw9j8KS1qXKoEPQdZaBX3zhQ8xVUgJ5L6R7mZz9dZqVkrp8A6fK6RZWEhfer5oNX5mrQRrYD",
  "key23": "3bsr6efKJiQhM1YnZ5uQn7PYgAxGNv1J9o5MYVGxyEw2GH2wawpECRRSpBdMitB9VzZNQEbrCNmquQUGPo5dXg93",
  "key24": "4bHM6MAundeBz316Dy34jwf9QPQ2oHFh5d2y15gJmNdoppgi8UUsrMNiKRSiLNbaK1UKChVV291v7vR84CCLaGQv",
  "key25": "5iA2rqzf64NhGVTJEdDpy7u5Cp22S984aB4DcGobVZ4mC9YeHfddxA2w8R3ykjcaFwc76S9WH3xoLTeMcPtdgoqH",
  "key26": "2cxCn3bsKL4ekwsvJeCYoYr7fL3eAikNjZYe6WsEXRx7C6eVUunu9r7HpC3Nh3t1qAvW2P14689RS7kDLwR4YRrD",
  "key27": "5cwfcCRZ3Fq7ZbmokCDt3pJgNShGXLxNgDedgQAD1xRvSUUrxMZegYKK8RsL8R87J361UY6sc2xchkaBVzDdjVuC",
  "key28": "5rXf4MjyyByzqg1Z4tnXUduwAWZnXL289Nfb12KTp7to5BVkVL7SCyKEoYHtKru7qTyTS5Mi8yJPiHUpLbXJLrUS",
  "key29": "44iCefaRxFWXoJ7BCVmvz2uMpjQjEVDXFUNY7ARG2nEEAU6SunMX5HMuxLRYhL2iktePAqwDd19W2h7GpWVC3Rc4",
  "key30": "4LRP8icroCqa5fGsZeMWJhxUaDwNRh9SZdtPwh7BivLp6tyc1JiRSvH1u4TDU7cMxw79P52CxRU37SrN3WZJPrnv",
  "key31": "5PzZ7TAmUFzG1UDy4EfPxRbcCfS5ZtdZ946mtJPWcJCXRdbyW8nLFSykU635htUzTVVpjcXh6gXoGHoE6sfLASvV"
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
