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
    "211X3NrvXmstrCyCei28qdvN5sLCkpYkuC738MVLhcj6DZgToYHX95EkVyxHqRbuG5nFuS5MXrm15ARhgHvzdL6B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XTn4JLiNeqDeYVFVnWwsphLMnrtZ9Jfzx9Se9XsP4ZCTYMcRc7BrsHmM7D2gunDaC7iNnERQWuvc7voHPHEUBoj",
  "key1": "4fnq5ZzztfL1L98skLzBnDa5WnHfzB81agPo3XF6nkVtD2PfSb9cQBA6cJFMj5XSJwTtKrpMysfkYVpQJAL7hWQA",
  "key2": "3zCmuSDZhWcoR9n6UGZ7tampyNWujfbPnP5e8Sev5JTv9D7ZhGKtpECwyM2CFzdnUHXdSCMST83XD1xqrQEsQa1F",
  "key3": "2tjXZbRdcp1cYyDsQu5wFivw5rNZzgwN727fSYXespRZbmMwnNe2njcFYmD1zcXdfSQjWLLVyhkAvjRaieNpJofS",
  "key4": "2FCjL1no2rFFRV1mkBnF2xWNij2pqvi255eDdJq6iXHhR1Z3cHJDxLEHHzwfTivKLMCKZSjbT6ELAMxtsZuhBd2C",
  "key5": "44MHAhzBi6UvQevnrAKv2NCV3CbfHSSsNpjXML36T2pJahSKKFi9GmdKH7VTeUC9PYnFLtDMLsCCpsNX8ei3Ft8y",
  "key6": "5xYvqAoyZZqquEKpxmwo9vJASBUmFHDTZVTj8kr9rp4VP1g95DQarB5JbN98vmR78L7cNpfYg95TCtpgdtRxam7g",
  "key7": "3NeFHxvBeyyT9dti2zVsmBu3qE8tuXKo2a6fpwm94sqAnSUjNg4VRX3tdSJnPyWzg2ScboLM1ykRMLbbPpSL4gnb",
  "key8": "4WsjtEFd4NkbBY23RPbVa1tAbmYKawBZTM2DNGhimGxNHfAkbLtbs5FkUfczHj23iU2ZuLBWn7gRk3UzUT1nuApu",
  "key9": "2XKLMwVJmCzYUhdCBs9QUWeH6LMPE7UkkPjLveUPPHjjzreyrmvSV8Bpr72fHxFyhZPwBgLUL5NGGwhJ3vFKTt8w",
  "key10": "5isMd9keMaVJp4j3QxNmS858zcH4e8LxswZjXqL4eyrpw6b1VsayaXNi6ftUPeQ7rQjxm2DZnBDF7QQvakpaoN6E",
  "key11": "2DnYmwn7AnhKyNkxCYTYiTu2TuadyCXiGxa8NiGR9KbMyhMA6JWAXyQ2MY3iSDb85EUvj5TxPRpdF2Zr9WgGCFUw",
  "key12": "4dvGXttiA9TdPg93EWe9gvH6uPwrjDNNTUWDyPftX1SZGckcoNs2xPw4abo8tySPTzGAa6md9ph1Pekj4EkGQGcq",
  "key13": "3D4HHG9qB2sJV4oD9aQgLpgfm9eDuuW4kcyKLpZgArsphVaEmqTew4PpriAFWRnheWSmMXLSibVX7irf5RxFsxCp",
  "key14": "5FUVWVKaMQi3xtMRbrdsEi9BqHUvzPrQtgFABkiP186ppW2mCEaetLhPD3tqutwYL7fXLmZsRpgsqHXbckFS9jY2",
  "key15": "4LrWLJac6MnBUcq7s5Cc7mcBvnsYK8D6QZtRcpDZcGSqQ3R6YukDNXBcX3ezvC4ErLcp5YvfnhScVfG3UgMAznBe",
  "key16": "3Cxsybpkbjokdww4JkgZNNghmQ8zbFgwj9qUJ4a4MpPGYehAa7JXyanPSr9d2W8BABGNgAY9VyURMzT36G6sx4Rs",
  "key17": "4mM9nBbwDFs6daeAuMasGhLcTiHVpKzskGEPiSby8VKTFzcdpH79SWppX6RsTpQ1SNmQhkHeP4DydHQ5BsTDBVPt",
  "key18": "51y1iLMWZHdtvM4UV56kafj3sJrAjaXUKLnxRcRRCxQAx4sMDAMJL8rW9MaaBGeUcrepWgPbSXP8AQpA5dSLwkzr",
  "key19": "4U8wmykzsBEweCRvDkvEDwtksivj6PsjYVnuEgKNH2GM8GhBvCmAHbMnPMbzXua5zx172Q3B7HJu75QJRMd1q7bw",
  "key20": "3nCbpZynNSrCEoVi4hiBJqtY6bDZZVPJoCD9fJiyqEenvJjQZ1yBBsCR5dYssv8SFrx9Ye92UF1WeuPmD65emQNY",
  "key21": "2f1L8ABVwYN43QWt3Vw6jMc6EdsbNAUuvWVxacU82rjnKzsDMnxn9LLg1rBSFxR2Zgo3wsNVXugT2gMNW7vmp2xM",
  "key22": "64Z6dogMM81MtFJq5VXcPduWV19ntJHdvYxruWtmrN88kmwZhjRqApQZxReYqzcpn6QfqoJ6muaRntSDAnkLduDi",
  "key23": "3NdeoHBjS6XPSPiU7LzUDEAQ7Wx1qkvCFmBEAsZNMYvfDNc3b1ivLWZSqRKcedDWAGrYFjSeLkdHABuQkFT2YPwk",
  "key24": "4t8YFunego8d5cEPtEkeX14vLQAkWXrBeFxfMgWgmxSdeVUttPwYwewrvJkH4qcR6VD9Wo4uzuq9RHzk5XDA76qx",
  "key25": "22Uza6BoZZj4o2HkYH1x1bdXk632XEf8nfWxpaWxRydsUz59th2TyTNRpKz6H3zaFTuYWaowEHRF1xnEjGdc8DYF",
  "key26": "571gz35mSBR8Gm4qQXz5AEMVhnFCXuKUxjvFEVXMYjPLKKfw1Fg6A8f93UURrXXqJzsPjL5E5tfj7cNAriesVQ7p",
  "key27": "5QKW2avy6aUVNoHSHwSV66Zyc7HdWvTQJDcmunZtAgcLdsiMw46khSZebbbZXbnRHwurNGasYCjhaz26h9GVj1yb",
  "key28": "3fKLgLqr9AkEFouxYBzJRBCEjyH3LesGwGvyYUR8875e8qVK3TXcehm6sB3MgzQESKswmTgSCe9QZ7JAgvohjRwV",
  "key29": "3Yw9wAMfCKeyxdnY4gjvdhxiZ1mrPLQcRbdBYSgtoYyafF5QhbF55dyC6sHXDbqiQRGe4VPRp74NTzL5Kx4a9XYi",
  "key30": "2FTzQJQgnVZZi8MwxZvFevn3QgKNsDBrFC1B9o43HsKt3TNRqNHwdkC8HTbge8ByERbGDHtjDv3EZmQ9bufuw8eX",
  "key31": "5frJAQEAXhgyLRqHMQ5m5yu2QoVJP8UNDo6GpChurMxubjzt2xexJzkK4WfWvbfTpEgiFcQegKEyHSJsVFJUighj",
  "key32": "2wV2MwJoJkdTwzVRJrtvmAkNTUKiZfYrLd8BsTaGQYiYSR4VgEoCvM84WN52hcJW7EJdJQukut3bFDLde8BGueoS",
  "key33": "4Qe6uSaQFeRQq8jVw5mMigQck6wCHTVz8MafjSHZhiZdSNrGzokR7mpEC3jt7jCVjNR67e3TjgponqRUCu3YG7gy",
  "key34": "62nx7cZB6TwTSaHPBJjB9uUcZJnfX9zfYsKTEtRqFp6NZcoaUp6bC2AMAmtZicheh28nbyNUrj953cYwaVNjGiSf",
  "key35": "2kETucn5DdF6zYVDV6JCUSuyhMPziGzjo18HQSifanvA1tyen5Zf3Y8KdEqzWPvjPvcJtvoRReJDbboJSdV32kiG",
  "key36": "4P5Rnr6W2kVX3D2wr7J9AKEAn6GhHHct7nxYtieGMRDMFPNPQwzEvMGxwJfuqpoEABD5psne9VF53GTdgmvRphRH",
  "key37": "2SAz86bpSC6LbjwCsQ4PscYGqEuZTdvmCmsqrfpY1YRPyYU4VrWAYqfHYaMHEq2Kix8wAjv9axtdT2TXKff5zgeW",
  "key38": "C8P4wF4oYS73XqtirRQt9YAaVKbhHwWNZtTBo8mzNKvb6uh2Vr3ZrQwqNwsb1K8DryCBCZshMHycZ9tCcZWD7Df",
  "key39": "4g684N2z8VG447umvCPzELb2pbyiff3wdfuiSXsWb8fXr2T9ijvMtbKLKAFdX6QsmCof26Go6j5h22qEkZWspEhi",
  "key40": "2wg5pmQ7aJmAt63cXwTrFNcJf8irQhhaPma7mTS6GYLD8QkztK8HFghNPP2TThJ47TCn96BsDFqSeH6ys5L3ya2a",
  "key41": "4GmYiNtpu3isH4tJ86uamzzKbk7tfTtSsed5u2Mbrf73rRXTSh96d4FQwFQJMMCtcbYbCceoiEFhwyW82UiCdzZG",
  "key42": "5d12JGwdwWNKSQeSpstzzK12k6yaYsY73biuXPQQ5PuhHnJiFoVE1JioQFXF6iwhqD8rKTcFbBtGJNHYY2ht8rqk",
  "key43": "4U5vPjfvVdT2vCUdbbqF3pHCJFfw4ASvVZLFLh5iU7Ybx5EitPn39YSnXBbkGcN9oTMhjMxsQrfyBA3xD2Vsk6zH",
  "key44": "k7nhhqdaYpq8j81Kuw2QnXb6ZamTGvt1iQ3zfbGRC7kLPh51puEdSw4uBwsoceMZo7HnSeHZ2Gqum2u1a2bFWNh",
  "key45": "4rjfKn3CyGHchfDxLTG3frAfKfBAHivFZyUBmgL1jC8PvEouXnd3VCYDMDLAVvE4Mp2kLCXvzcnDKpj6pu5e6YX2",
  "key46": "BgxVuhKcn8pE1SktXiZNY9gsfJiCpD2cGtPex8AduoBd7VLgNuWz2Vs5HQGyPcJvD97LK5ZZnKshktzbhqrk7BE"
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
