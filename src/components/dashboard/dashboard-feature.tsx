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
    "uqwvPdqsoutvmCfQ2g5ZY24sW8g8ZGDRRxSeUw68XWVQCMs4drStxnXcSHvhzW7CfVD94Ra1cMYJnEH1RXPr8rG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qUXBVKuQy7UaGsxRt6ofz6m7SLZDdReVVexZFakKX1GjSKahHPg41afX4sgq1i1FvEdfsDh3MR2THRsLKQGsG5m",
  "key1": "4noncDfZhoNvB2BSE6m53vacT9k1GUUCNDVnYWDZhJHSFU1qhaUTV25S6aej1VktESsZtbF3V419GavpERN48TM",
  "key2": "4LRmBk3kDoXWiUakYGVV52riihe32HUUM53sFHN68HkbgFVPm2fEv7apv843oZMEqKGYSmw52tzHfMfM5pWy9YLo",
  "key3": "mnAod1xXV2ZjCfDtF5xZoDeW4z166Y5ZjXzBSSSYeMJxHp9iLfkjbhMFrkA5YMFNHLEvbAA1eMgBmbLR5zt9NGF",
  "key4": "25hCw7qbfBCMfULiipzdtWd5xaKZmgsxBWowZBt2ec9znhbW4kPdn6iWdMH3mo5SFTuWE5xRxyhACWyg3x5NtQGb",
  "key5": "RDFa4D9eBnncxGADSBQRpM2eXjA9PiYX4T71viakUWHsExuesUPYFm3PeqbkSdMKpsbh2Cx5WnJUct25JKvVBXf",
  "key6": "DtNq3qYP15hM9VQg5XDpY8veriJuAoG4iGC1hHk7GNZyhyXA6XzeWH62ta81dkq1gxLfPwQfSuxtUPzT1cXVz9k",
  "key7": "5TpP7Vfx9ijBSQAKFEi1rxydtsNgWHch2itPhs9Q39xFdoYtRpY8E8J7cki7kQKS728G916FHGbeyVJvAx2YBYnX",
  "key8": "53Gjg76KNxpox1jcaSrZ1z3suCiKxfXFrLGUfDWWkkU4TZXpZheqbMb5heZEUygHfzzozj3dVEe5vWgHwTyPsgmS",
  "key9": "2hpDW4HuX8nzRQmeYGyqeCCBjX7pfVYmVoS1kasB9WCcVrjZeVkrExxFCx93oK1gk4x3vBpcLZtPmmn5kZexvRxW",
  "key10": "4k3b1Hmo6KvmtkVakwfXy1kU4W9Dwg2Vd1cqtqzYf1rdjXR5UawnNmRdV5C6DfqNbFyqB8yAjvAjWeQf5pLLyWpy",
  "key11": "35UWNPXtuEcBwjXq5uVgzVhXsksEm8DPGB9kgtNYaYPD3dhpkyNsf6tGNTroJeiDeNrcGkVjNH8gLeYAjT2Pw6pz",
  "key12": "vnLGukeCbARMamNGCUYvekMvXLXswmjMw8Sk1bHToA4CXTvFQvtnpMpNXiHhKhcPRVEtZN8CYnW5NLyJK9TQpHX",
  "key13": "4p8SArko62Xk2tUkeVuAc28ksbhz9Wx8DPDFmKVt7WNn9faJQ3oSqUP8up8VtnFEEr4MT37J2Xo7e2GBvciNoSvr",
  "key14": "jVsSjwtWwvoiE54Npxs2kfqpnWQDUbDCd3mpZToyeqFrunwJ7LX2sMjxufEzKPifhS5ScpjKyeAuZQP7tjfQpYH",
  "key15": "5S5qWFxzGYG5pAwc8vapJYVVrhU79ZyPt1nSLDszsHK7MKC2Gg8Ha9Jt2fwH9qpeh2oeyM9JgX8U2y5cq6y3h7kZ",
  "key16": "31nBd8JiM32VkMyPdNm6FJBFXQeEkVXAQCm68UA2GXdCjgvYJwdgdvLZJ9hXz9EDWQZKRc98NpDr1td3NHrHaSgr",
  "key17": "4qE7jAyVgR11sW1wyzPp2646F7DV5xVnCGgDAcMsk4ngyeeDWt2zMtnR3HVJ5Vv2JJXXPB195KZsKK858sPsXx7i",
  "key18": "2SMAiXVBPm9HHhYPKQZeCQ6aPKuimsB9eerehxML6VhV388KjZaB3gWJogiEwDfJdWtGkx5vZdrFtKQxWaVTPLPF",
  "key19": "3Lk33dqWz2W3LN73XHwDHdXhzH1EJTVQ55Y4HBd6SP4UPs7RLb7ZZQ9ZUMhPDq8hXb5xbVrzpQZQaqyTjZ7rjoA3",
  "key20": "54C222NTaRxhrqxmXnKX58guN2dH6fj1BPCrMSnW3oAVp4SCU3ba6fh7Nao4Tg9bDENhmnDi5eAz9UvH11MgDpui",
  "key21": "5VkLVc2ki46ia5qEjsoDQuy1HW6u4njpAPwjM6L4dYPN4q4mcLXF9BiW4KrRPJMUKpvN928d3Ynf5AZnriuRL5bE",
  "key22": "2kdeT31bkMvkMZxTdZ8wcx2nX5DrAPgxy3Htceuy9w7pFWvXwfgCrzpxg8KR9MSsj2XABpYHGecP8yzR9aGxgjWX",
  "key23": "2AWU8FtQAqY3nWNxYR2akbDSGfm49X6j2x6Di5EsU7oGLJTgLtvgQTaCpDyfEKHUiGrUy7mUMeEdAHeMRrDjDAwR",
  "key24": "28wDcvLyATCtmbp8k6rNDr7zpY6VvpZwbmagEPfcyiEvPjxMmAbcUAKa6cvG2SsPV7NFLYtZrNW29KvQFCaeGSs3",
  "key25": "36rEUNcH7ZFgB9fvR1qoGqDijwSANQ7bJMiziAJcxMqjK2h3BwTpzNkYoFByB8ZCNt5x1UJPPwCwRJkUorqapi6Y",
  "key26": "CtGEotCRqaJ5MNXFyGv9yWq6BrfUKFNJivU1S4pmVSQbRidK3oqt64uARvV3St8BhXMdWX8q9dCdbckJGda5Wvp",
  "key27": "RshAfGHzG7a7eV7B6crUXEXQEu2bw9RQKaUCNvfq1DKTU4Sq3wbxucgVEzdykNUKUSLa48RCMW95htJ7EHYoYdY",
  "key28": "4QbHZhbXktp5eTqrn4GbYZ2dAZoUqKPEuWveXzqVrrSn92Q6KW4Ucmwmpb6P41T6MGgZoeFAcG1xoVc8rThmnhMx",
  "key29": "5BMvzJ1jwbzT6FtJWP8zw5U1WbUeVyomQoQgk2ea7LrnjNWizysF3WUJqxRNHXCAAW4Vio4oPMAD5iMup94ypiFf",
  "key30": "2BBBJDZLgyFGfJfHfDLxx6cAh51UB5f3yhjniiNhcD9XBAE5TrUnLRvjLYqxYhzTbtYHP9qdotJqPZVX8y4ySjgL",
  "key31": "3iXc6suxHvwC2tb5UB2PpjuwswULKMuvKHXv9eEDUKm5cnDWh78CFUrpX8rmmDZWyBVjEf3DA8qyywp5tkb7grgv",
  "key32": "37e148T6cP5Cdmbj7xKrrpD3fc8Yqi1nBzFSsP7kKzuZUBNXpBb1ywTMKykaZWuXEW7MzukMYvn8MxyGqk27fc44",
  "key33": "3FQfsFxTXLbRZcf3zD6nguwje57ykhPsp7TKTmdJ4jKpNwdrHVtwLRG5tyQPohedhH3zeFU937fRfJ6qPY1aQifA",
  "key34": "2R81PSmN3zBsygRWpkUZpiGtLRDP2ARsKh69qgcvgDgPazyAMFHUJGxyYmV1hA2R9iE9RQaJmTWAm9CmMgWDUgx",
  "key35": "2MbQFmjvbdPXX5PyiZ8yVDZVNz4rsqgJ2XW6imUqht4ijFHKJYexmv6UxSkxHNBwDMhvnKuUA43v54D2T5rzaUoX",
  "key36": "67ZPVcm7Anvh3bdPwXxrE5sSCoLY1TChn5feuL2gkELFeKwkhjJ4QbiH4KTLA1aDXTYN3TeDkWW6uZuZ2VekCAc3",
  "key37": "43scFtQ5qEADzpjqNeBr7ujGzF9KRwShWgH31cRqgyaTzkoA7ZWghB7QxQXtQVNbyNPtPeNPhMab9y52WrP3ZZmu",
  "key38": "xM6TWjRot8P2R2NnE3Sqbq3FdB73eiUG6tvZx5uE6aBu5gFN4wmQaxMny5BeYG9Y8FofqFZ97SaU2SRSLqDCqkx",
  "key39": "TtqVtvd6QqiqrPAhioVMMfUfgqz3U75pd4Q641ryc9uouZ9hiuN1odfZCqxa33brYTHNFJKL2b9GDJ1VdJ9Qg1m",
  "key40": "5Z45nyYp6iaGmqGaSt4fVdGC1Rbs7xiQ3b14tvqPhS3dQfjPh1pYQCDM7s5UmEwnExn7XpT7QZMmdYfcScjxxuia"
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
