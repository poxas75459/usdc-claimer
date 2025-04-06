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
    "2wqcwKDq9XxK6A3jXgh6TWLS5tkh9gza5pMX7PN7Fmg7CfGcsuLspt9W6NFcJZiYt9rwnSnN2dcsyNzV237ycqyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23g5FWJB9yRLFHMa2ux322Jq6hLkB1i3DFa4c2Y7RFLoFLbGcNiLTjYyMhWj3C4yJQmAvaeLYfwc7jCatwpVPo2L",
  "key1": "5Mq5CH4qsWPQpRfV8Vwd8YByiTBgihubfTapPWDUhP1YfZjn4QvgJsmPb6e4g81AhDEmCYTVY4dH2vfKGsjqqpDg",
  "key2": "2ZPjqFz7Bbhm7BHWRy2ypdopBsxq6YnLbNJQHXaWbXaWywDyURxkMKxiTkN8Vq5wJKND7tCJV3jhSjgZjDToRQdu",
  "key3": "49W3JwrVWUmUiWjs9q3TaKgGDVd4h1RJhGLUg4vfTpbFUrVepSPvEUFAyEqXCzLRC342LXYW1WsTRnu5JgwtukU4",
  "key4": "3oyjGcfp7y2i21gJjTPMQAsaGQBrh9vfJLTzw1PQsVn2p6wonHqVXH8DMRv51rqL9aGJvxZWBdEuUAgFvHAB1157",
  "key5": "2PxgzrtXaNUzdaP18zLKDNNKzmfPUU6xqJWxaEVCj1mBDN1JETg5QkSZQtVrpSHg42Nj75xNGDfB881dJBxAYG7p",
  "key6": "5psfqs2NYEqw5Kq7tutPeaF6YUvTE9n11rAd7ddFh7mJjgcBmKBqsVFq1ci7z7UhVjmfTXUCbSBHq9pQd31NyXsH",
  "key7": "w4hhbNpxNwy1UBnTsqxhtUZrfESmaqcm4GL2WF7nhHEes7nkpd7qVkuVeFGb9KmjUKR3fhHZ3be9PjkqKLifmBv",
  "key8": "2oFKeHP4TxcJVKKmynoCqFujyDvCm97yEFQXKD1YDCBdkCYRa9j6iCnD1mbmF1QPs4q4NNrXa4GPNadwJHYnrNkb",
  "key9": "4NXKGmUQgptz192Xx453M2MACavYtuBhStPTH1LwmoDpPeaZ1xfT1YXmfnYdrnD6HaCk1VWzdVCZbpHQTeEweR49",
  "key10": "FAuGKihWgg73Qv9yjcWpmGdJ6JWK88fy3f1vCcz7eairXNTKWmkou7pB5JbC4YTPwFatVC27CqHyJd1SfsWqSEL",
  "key11": "ZJhtzh8an7BJ7kSyCAsNotDeFifBshKi1FUyHtXwmfrF7vqKGhmCKyrRmKrr8Q7GKpkLJcqXsu4n9T441FMqFaL",
  "key12": "3gW8wnSSxopi7veihYwQB4UE64PtQtKx318vUYTJkfCFmMaTw3kks8CE6zWFJtTHykCLZ1pwkg5AkJrFVyaKXVyi",
  "key13": "5DH3CRfZXzLDsVM12AiFByhecasPezhptDb4hjmANSubCvM1cxcepbpqog2UL9nqMAZ5v4xdmrZLx927o4LGP9nG",
  "key14": "5ceDfpFNwR2P7JiGx6BFqavMDdx6xVFPqjzLmdWNYFz3gbsrCd8Tt5ervPKoh4eANMk9FNJEnxECAsFX8xRziNU2",
  "key15": "5XiH4F74iGoVpFnc9pVKZVCKxTbsdWwM675h63vs7euWhCJUN7TLzbXbbN5MCtE8ZyWfq7Yo45NiyX9nXgTmCEHK",
  "key16": "5anctx6y3hZpBN6WyYLpn64TQQ6t7TmYziankmFZksZGs9mdHR92sh2jUK9yZhXrns2CDAwTpYUjMUxaBnXVqynr",
  "key17": "qDvCgTCSY7us52r1eUTxb36ocgjgyb4ddERHuh71qMGG3g3BFcfG9yBc5hPVShmDzaPsp3WaEqd2oxfKgyQx43p",
  "key18": "XoPupZwDos8tfPrMDm9v12MTS8eEVZeive5K4At53jEbi5fEELUpuexW6sJiwm9JPDUv12GaBuN9xdDRSDqYm8f",
  "key19": "3Eb6b3WuRrSVZg1fBavHUV9CNBXsVGpQq3e7F11TTZ5MK8K3y4BgPenpBeXYq3sVbZNaCWMdpZdceAo3S2edUS1r",
  "key20": "2d7AKyThTacDXoMvfLLYt3eeJbZkmp3at2pE4dTGKWbvQAkJVcWMXhnXtGAUEy3pt5XiCs8yr96KnGHrpaGnHrw4",
  "key21": "5rLuGuUEDrU5iCr3ZjTdjJRQJXH43Xhkp6asrxMySFUpiiNj5DNEBBSaeofgzRtp6dFkCmgfanv5MexYxGjmPzBE",
  "key22": "3R6ZA42LRdcmq2RfcLxieG4BkwysYf1tnisD6mudFee4zdq9oD7ppuSHVXeX53HoexZdm4UZC5sZthES4RRkWd27",
  "key23": "GPEgAWvbL27dd16V2DVJGt14oPknN3QUoDd5ieus39i75k84iBE8KAbi1mwty8wTLQGFookTMWr7pZzsp3K2cqJ",
  "key24": "3LQinrbDtnzTrHLKfNdkpZ2UxoJNvRreE9FYkXiXXCewjHN9PAyr8dc1f7xnSpzrbMzqYeVi9HnzLy2p8Vx2Nx7W",
  "key25": "4dsT6DfjS8L2BJmXHyHWa5pyQeXCho9D7kSPdvwcHrPYjiSi5VDjMzxJkccGYXNzcnY4yEFb18CojNGNtW8Abtgr",
  "key26": "9XSazHRRMwMFHo6d9a2FuZxttjoyUUL19UiF59zRMYZ2zXiSSG9NB85mp31Fai6D4b7UJ7ZQbQRepZ4QGoqnyVd",
  "key27": "5TJvppXQyCGDohjCxur58DxaRn9D3QwVDn6BXLWU2mrxfywAVfncqRnExjFNRZMmrK5R95ze6VRyzEiG4iKZvhb2",
  "key28": "2ZY4Yq49dUritvzJWdzvYoE8HQ4GyHnbrGNoMM1h1eg4nJT9sZ26DLLne9scfzd4A8FmJNGmPhr5eC5TjYYCA5zT",
  "key29": "Awt9kSHf3qeanUCgbxfVejpsG6anYJTjos4b4smsuVvDQ5fR8xTEGW3Q2UaxXyZsKvmpc5MNVjzhGG56LvJf1Wc",
  "key30": "4v8ZmyDR2AJFHcXhowk14eqw9XWgbtU2toV1zu44NtDE1RzYAiSfzVfNQeezC8soXiAdWgfZtNLv3mUD3zWptgR6",
  "key31": "3qYbsLorq7357WgQwnQfhDKCdDo2tHbgYWcE7SKhPzZj1iRNBMort6oUzVCHaweY7zHQbzLmcx9Y6fVMAEQawL9z",
  "key32": "3y9Eyy6yRgW6LmFiT7FN8kUW2HaCfZk3QzWbwYXhv8XrcDUTUzbN4mQLsTvFMNsCnpQWxxU6oZeenv2GVpYPm3zE",
  "key33": "5BH6XEzo1QuR3ztGRJ8MLYrduBoHhPLwuDJZjc9ihVGxnUxNpHkyMJuTiExoKZRcDKxK9ZMftNcqDxhQNdkQTGdX",
  "key34": "3B2frSi8QNfoASC4XBCJaL9paQmQVkFRKarF5ZceuCnh9iYSxS6GWZQoeUtShAqcMFunmzAnz76k6zfXrEnSj51y",
  "key35": "2wuTCHMkoaQfLaVNUoAjHLCN1bMGWmdMh9rJSEMYuwurpdMWVwaCotS2fNZg3UcRfKbJ22Fhni2KiQQ1tgai62ee"
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
