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
    "2rweA6NCCgxbXUBmp5wxN43CZ9Y5BNYgtwwcnRrkVjoKUYU7eZZyWvKqTPBhpsWXTEe5WtPEa5VRb3LgVT8CrpDE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dcfjq2DCaNQEqpsemU8ZwB35e3QqoQcwHnJrUJ3zDEtJ7AXkDSqbayExyFHK1f7QbZqtUA6kVLWGkUcZ1Ws1H9D",
  "key1": "eBXRKWNk4gHS5W34M7KCDAxh2pbkA8aYEqUF7ZSzgHtd9ComxUDF45Q6cFtWq8aLUXnHu3Nwm3LTHqcCQ6G6JQy",
  "key2": "4ooG6CwigU2HdPQgpybQzrKU2H8uEkyEDtTHunX1gByL5s8wG362ZrEAdwU1UYShzp9cNQ5PXUxcgDsc9bXbjing",
  "key3": "4h87XAedhLR57uXG7MeUdydHj6KbQYHLtdrK7DLWywxFGRdhaw1HtmgQ91JD26vSvKF5ajzM5daXRcF36FivZZRV",
  "key4": "4gwx8erUyTEhFWGftFhzBuuv7vZZvCZGKW7KndRQ2puaJ1LYXsEeNrkQcWc3LUX9KsGx5wzdsxkhcBqHVpAPu68r",
  "key5": "GvrZWxbywuMXks2K2Du2uMu4tv23D1vemZwTD6vyocCK2QAV7JfUfp5pFVeNcgVAucLmfjL3dxsKEVEydMoMkLQ",
  "key6": "3kXBdpAisuj2bNF9H7he89NpHQg4oYJ7o5bNP4Sa2qxRAhQSgDZTGwiJ8sTteYfX8UvbX7R3KwcyQELVxZYwQjMy",
  "key7": "rN336zo9tP5oRyzrjtZxjs6DkzfuivvE7qaYdT3sa3E88EBn9vJ62GkTS4Y7zj7SfvD5eqiscQXhxTo7erQHb3t",
  "key8": "2Tu5QBcDs6pBw6YnM86gKbdCZaHvMh7znjQa5y8NuMZpMVcDio7HQF2Q2GBXtZNxESwK2qUoDVBSBQKPbTw1jyHR",
  "key9": "42eXuE3GXfaXPo7Yzage8keiiyMidXxtxvgLfk6s5m3AznnqSbfLTQdr4Zy9QaH37NhY4x5Kqn4bWUgvtUPhLTPh",
  "key10": "4WyybZWG7Mj8fxExo62ff82NADP95wEtSAoXLpfgZnWP1hthfVqdY7rzNk3QF4kSTLHdmegoe2d2feEwoSAYiZdg",
  "key11": "5VnrdpAJign9EkWfKGGtXP6v8PB1DkfCWrQ5QxCKiDpUJHmrmuUjtSbjMRtxVL8k9dsBYQ38PiN3BNdWSfLRa3DS",
  "key12": "32NTF82cw2DAAEQdJJf4kwpxVcjkeaCYtLsf3tdgc4J8Lfv7HCEcCLB3ybM5cF2pxkj9QJrokrB72ANZkEhUtBrh",
  "key13": "4SP6zbgghjFjq78Qtj9pNv4hXeda32bWfCE74a7MNNP87EPytdsALC1LnQ7BsjwYhQT6mGndoqj5RVcgu4N1S5wE",
  "key14": "65mrc8tbcVEz4FXm8iFf9RXB3YsnPRRxJ8k5YD89aCWxbgMRtUJ64PDNV76GZKNyVXk1X2KJqHWw2VBmFuyq7quK",
  "key15": "3QoztH9GMiHhgF2PNki2pY6TEabkAx1AX8GvWc5rCyoWfmBHNtq1pY3Cyk6TNSfk893tFZ72n1aLVJx7ZpVsdzVU",
  "key16": "x3bfB362T2fPg4AXq8TUFtorkAo3Qc7EY3umJTj2bTPSWi4j2tX8ts94WEJ7zJDVZ26zr84pSgdWgHTPAUaVRnr",
  "key17": "2oXoBepofQevoLvSPXYGZHV9spw8uGDhXhZL7waWcS3ekJEZ9Q4d4fDpUPQ4AVntMqxj8vuSz6YdmFcHagmATk7w",
  "key18": "x5JrNhw3w6rgjPURxkBpgCxCb8TPMi7b9Szr7mNzWdDE1toMVYWaZfqgn6fCHUyj5hGLRtQkQSgpKQ7DXWckzg1",
  "key19": "2zeNDnXdd1xA2yAmR4iCqpu9ANpgMe5o9fD4SHoyARFDzd9QePCpQa5UbY9vFB6mHLZjAz4axPyE4mocXUKhqE4Z",
  "key20": "2GPjaE7mTDa1bbeV9pGGcCF3n9W2FsjdZqeRLHUDXhuCKN48DFgoKjTaFM8oznLdgHivo4odLjAEMcLq1suYhnuP",
  "key21": "2hQjDcQxLWiCRMRd3j62CFMn11H1AzPW9YLxbB2aNJVFWkQdfvWSDgtcVWNF4B7SBufiQRxvLurFyW28vEd4HmwC",
  "key22": "4nuPPEQnU2yG3YSgYaQ2GLuPhQ1TWM7HMyNuxCoqhyLUEVimyDubkdBXseaHpdz6hqhuKrSEMFpXCiiMhSPcKgsP",
  "key23": "2PtVa8rsXDLmL7WmDbEV9Q1NVSCVMUa8LaDKcpkauVdx1WKKmbxm3EnZLZyTJBE9iFBXokq8dHS1KXX2YBqDbK8a",
  "key24": "5XowDcoz9orGEGtgrkCQF3Dc2zaKtuG2A96rBSG2VRuvKhnFk2NbFY86nyXEKtWFUryQtPK7skmyix55XADHje8p",
  "key25": "4B7kKidAbAcoaFXugdVga1WjedxcEXdKptnTFYdB4Q28Z6TkN34SCvK6vmFmHXVDeAqcNRH8yvJEpS3ehFcosVvx",
  "key26": "2hqBucgVBouF7eJxamxgJaKV1fEjoMfPqXwuo1FvraXqHKZvNyubss2uXhVKRpjv1muT9d895Hc4SFbmB1NQ9oZ5",
  "key27": "27CkHboSo7E4s9TVsP9pWque68JS8mDZpiQXGF4zX4Bq6LWdwEy6nvv88ptwZgUu6oXUbhcbfZTjkygmYz8BQwNu",
  "key28": "2vaGYLavQU3wTz2pknQUozwPsRTukZtxY5GQgAgJfbzTkNfs7VZFdV2SUq92pTvZQq4RcqaxhNAxiCQwfwx43Fv2",
  "key29": "5JGFXfPbA5G3oUV6ssKeSSgbRxEvHDSpwnVzq3mfDMffDJq1vqqNZFxnxDzTX8YDh72af5vcCF3gnimRx5jJ7mMc",
  "key30": "Cht95QqQ5nkTLRRtnEuaGiqHKXu4gEyWNEEvKhC99uosYWKRM4cUgToPj8WBEzEP8cEHASXgadWHSSuuQ44wH9n",
  "key31": "jx1sA8C1JwtBgpeqT1D8WG9moAHG9B3yzbaPmvjKezTHJHmgpdTfzqL1GeHu7eQ74PxUGb4W9sjsRx5Ta4zuDJE",
  "key32": "3mRrHtKvFcSE31xhPyCUXda42hMgifAQgGpme3dvL3wubDcfJKbcRPBQnwBAp3nzowDpmtKnbsU2fnLyEFDNNcJn",
  "key33": "i6wXdkkrUEQFuakmCi6rZykXKdMs2hd58NRdQqv7fXSPXt2yPdzG7j19GwBiKrKUrffsx3kHdPUk5bBxPDcVm3s",
  "key34": "3JrJhYkyUBc2KV2vMsvQvmM6rBREd1srQ2VAcAbED2SgeQFgYF19jQ89oNfN5uP1cUCZQF3X7YEX11J3K7Yh2Li8",
  "key35": "rzMxByDJU3RRYTnmDVtZBjwJtV2D8GWHb2r2PPtAZhrpHbSmT2Bkor1PQfq1hnebHL29aBx6fBRbAarYGeYM9S1",
  "key36": "2TPNrd4KLHRfQPGNr1t3GQhjMCAtiCfN4hyBP6kgctgthqfzUZaNJhPGTwMzTrW7t8CQBZBaRWU4zV8dUv7VpkRr",
  "key37": "5U7zMiXBBA6cH81Pm49NvWbPywdgfBm84NG1z55nfyfr8ievFWW8bdPPyfwgR1Yc5KPSbjo9LLoGFGHjR61o8AVY",
  "key38": "4oUDzKey6LwuzNtNtYHxLrfk1Ec94PFBaHuxUzmyMz5Pj8i5cUtpVbNoSfiqc8LC3vRryHPEVbvShGVmgbnzkDvz",
  "key39": "4YFiZV4iBXtAsCJGcQqF2waaagZocpGTtGfGQ6At2rGm8Uc4PLZfhnDxoYiosNPFeFkSA6NQkzcoC294PcXvMWp6",
  "key40": "5xDRR6Edi5yCinLYatzUMhBXJCVjzX4PKn9ZeFzwSmyoNvmSpHLBF4tELwsjJJtFfd2iwntbDtdK2aTRHNDqB4hx",
  "key41": "3wV1i3zHtRbWA2CLGejLK3bPxujhvp5u5LUab87NRVW2KGMwkgvfpR5jdT84CWmLJYvJCDtrfrfiAio9Y78QsL1n",
  "key42": "56NPqnD3Bi4ShcUu52K657C1tpsWjjGK1RtkG2w2ogFHDZHKEnhW6KMvjwCzVz8Mh7Fjr3sJUmN5CW6dDh4VUK5A",
  "key43": "3PKRi67kf9kC4fSoA5sbjsvVdY4G4hzRkKhjvxTTXDXNascAwYPSRLp9sJjgDi8ETFRaC4G2KTrH8GALkkcDj24J",
  "key44": "4f3TDHZBg37JJc7HME5ego5YHFErWisGFy3NEXTy3uBjDYzxJE9zwgGc5jg9kXFEwt1DQj7uQs71DKAzEAmWWot6",
  "key45": "2PUqXt69k4jRFh3Ux1cJmg6gcSFoabJvjt8miXgvwefcRvhPhxswd5hi6bRhHoHbU4PMqq1mygF7i91iM5qpgny3",
  "key46": "3U8d4CcAzgv1oWiwQ2LbwAC6K58Y1wHFLA3JrAPCwHu9vejtpbSP6qLFt4bewpNvhSjbRwN3nNbzqT9eBV3RJu6m",
  "key47": "5eL3yQp97W66xTzVq7UBS9t2McjuZXP2rPFLuq7KQER7MuEBipN8rDetJBUxTnzLCh2QKt6JqJfVnP63dsSVnrF3",
  "key48": "3De5iraTuQzxMfEfJNYVwoSupNuzft94wK96ftU6FaHzx2vFpcBk69Q9XAdiWLMUC7bR3p1UFM2ybdHAQrksxCo5"
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
