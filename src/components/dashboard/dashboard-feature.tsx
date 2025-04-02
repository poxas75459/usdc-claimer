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
    "mXHdbLA46YyQMrc2K7rFJicmoCFe1ZiAP27SBx8ss4iRshMTRk1L9iUdy3snw7bDu5CsYWJC2ZzDzyYeCZgtgFv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3azM2Ma58irgbuqy65E9w8qvvDVdh9utsexG92t9uvDgr38hnkyNwSbQ9Ryh8L2gUfjpvBHLo2qo1iuWRmNCrFmz",
  "key1": "3fC1acxiaE3KNojtRSJTVusm5GeEmewxjHnjNhiYBPLGU2at8y1GzEfn4feUnpPnubqsDeaUpWTYFqcRAE5HSqUK",
  "key2": "66NqzKaJQntYWrhtRe7ykdbnWawhWeCxrvAvWfUmd2THMwpg2JcUikaecx976BHJb83vxoPx5xrWu5hhdPALLvSF",
  "key3": "4MyCheaNUyKpMeipCmphm3QXbWY9BjeyUR1H5mnXQ9B5ogJ2UD4paVG5HpWtGSxFWuEv5sL6swkaDL3yqWWTvqzt",
  "key4": "3NtQFo8Z4PCj7jba6cLVWfDA1kBAsJ4vFiXTvLZX3tCKP3hyeTbegnr9jSxFctye2pS1jEEoiDc2v1CKuaSLBBFy",
  "key5": "4hZ6qigrojpCdLgDx251NBELd9GiinVHXAfmit25taDL4q8pDK2U8WunY8VqQqJoJHH6sUKRiFkfkebH8VwyvxeV",
  "key6": "3qFyKAXSmZYPSxvSLinA4qsbxT3669yibBWf1CnkPgLXJ23EHCGmph8mL45CzDofBBhKv85hGabJVGtkKH3zPCi6",
  "key7": "4mABhKmhSSqzEW2f1s8vhaZMNB7ASG416WREcB52DzcpUqeVJQ6DGnJrbPFMAU5sjVtCKnWrBhSvoz7VrkD71Bye",
  "key8": "38zczndTCB3DSynCHjf9zMvRaNvx53ZmEWdjx7yuEUnkojb8nHCEwRa9nykzMf6citae9imzsvp4NEJ1wtusv97Y",
  "key9": "5cevEvyiTL3aoNxKCnumntdaUCmuS47GJweG6yLGi2zMND2Qy1SZEpvLpqS1YZn7Tf7RzZ8CxbMZRdmHx6iCrBFG",
  "key10": "2dR48hnqHwAXvNVJcWdWEJTGoAgQLxVbR4QF5GnYyb8bS3cAVg7tfjxZV8C7h5tfJzi7qj5sdc6qtbRzFPpBUKdP",
  "key11": "2db32t4EzDCzWuHVpBaePYy6XYgWtkVhuEEZdj259Ma5QucpPpPDTd4PvVBqYRd8rfkcpXJRaHpoU56zCbCnGsS8",
  "key12": "2U4UfQuqveBJkj9C9Q2vppSmG8Lu3dNsExtyJfBGGUjqbMytdbLDshdxkKufQ8khFcPnAaW92kJyJUwY1gFRXbzt",
  "key13": "2MzZh6NqL8KFB2HsdzvrUQbo1XjxFgaiXeAm4RRknpcaaYvBaAme3iaJRDNzyQoVdDCTJunmPDtRS4X47k6uUxKD",
  "key14": "2TKsC5NykAgwKxJuC8sNtBC1wk2VR7eo4yqooLT5YZSEiNaokzazwaNcjVTvmNx28awesFquDZtjoj2j3CwEHsvy",
  "key15": "2fa8GvjFJ1uYZ3bcAe6b7Xc6xeNZs2XX86oBPCcAdmSKqTmRiJRWhVUewgUUWdQrP2CKKG1RTH75YzU2nuni1dE3",
  "key16": "hjNW15xyUBW9hUyYdX7p28BknGHwiXyZgqPL8zdm3dpfsECE1p2pocvEEFEzztRYnxh2dp1ukdo72aE1Jf6uGr3",
  "key17": "2ao5XjwiG1MRQe6tH2XY4uBCA8LquB9joZ55EzgnuU4vMBDUDFnqnZuzCoSrNh9xGk7YnppF7KrdzDNBRf96AoEW",
  "key18": "2JKSopnz2WiaXkMFCHP3jZzdCRpqAraoVQM7PDbnjqh9pApuNHoXTfrTpASWBepZLsWje1C1VzzpEoU4yBeXkYeM",
  "key19": "33GsLf9Yiy9m88a1xPRHknv8Vo7KcVUm3dYoL1njYZtbW1D4Tu5po7cUA4VhspwkyqWiA1H2oFADsNrZn8aShGx1",
  "key20": "48mDZoLMeVbuH3hCYmb3hTZKbwP6SRGKzX8EwigQ2LGRrEqguwpFz2JMtZWXzXgviV8TkGE9C9VVKWaV5D1ojCcW",
  "key21": "jwdMN8FEUBJRtFLhCK6g6G7QixtxubNL1gPLWrccgEELKWf2whNhCaK3dg7LqGqHNDd4Q5ZfKi6UDdbiJfkrLHD",
  "key22": "4tSczSEAPbK38tYoHJtAQtiX6ied3vWqYLQQTXvpAU3WvAb1EvPsnE1m3tZbTYXMxtcVkt7xJHpcTcRV5pGm96B6",
  "key23": "2AXmLUBLcr5DHMWxJXKVLGzWRHuZiGwdiF7Tk2JXCqS52NnYLPbp1h7qrHzR4NtuDNYdXv3pXx1GZpAkT3rSYtdH",
  "key24": "3uHJ5uuZA6ji9SGnjnuxV9Bb5Tox4sGAusE8HsGtCFmzvD1EWYycHe2qs2qsnUco2y4gAvfDTCwP5hgojoDhf6Z4",
  "key25": "5wj4nnJYYeBi816Axvhs1ke7p4bdJbi3pw3XgJouBA7GyZgTbbZH8NVty4WtsknK158z6M7Sqt7UAbzsnENwSpUM",
  "key26": "2MVsYX2kjQ3ucZCM7gAovWk42jp619zHbCwAoCr1Ab3jpstLXDJZSCXndQ6WXrPJJzWvr75Smkvyr7HxVgqeTnyG",
  "key27": "3hM7Svsh6p4HcDQU9MUFnHjqPRyqZcT6sAHcGuFJuWoGckJcAaXn9nj1iHV2KYzLLR8LjQ5HF9hBvwUxK1F6r2e3",
  "key28": "35PseuGZzLXY7H4WVFfgb4paix4n5G1zRZYaDGaPKZkur5fp4KdP4QgC6jZi2jSLnM87EpGqKupzcdKQM2qz46vJ",
  "key29": "2znjvz3QMWfPqrVkVJuMgndKD7NmiMwqxUuwLRZokfrZdyCCC3rqcep7kCjAZw1tNwmR4zuR3dE6XZKZSMdH78KU",
  "key30": "2TqATL4o6HJo5qkwSASm5EcrhMfJaZxgVtSi2GfvKgSA2m1qcaPJbQjxLCYEwSh7vbjzZvjXpGyNTRsKq2dzxtnp",
  "key31": "pa5k8rfBNnshv8W1SFz7eWBrTiAFksRKg9nVqrMBAbwo2cv8as38BrbyZFgAyBVgX78BLdokpP2zLkDGoJw4kQa",
  "key32": "5WNYe7J3XcXgCR74ciK8W8HsNQ17cJrheBvhAskZqrJkU5dMpxEKKVcqnXBwdX83zQBzXrCj53DrhmgVEyPEmNM8",
  "key33": "2fGttVnDvzzDXMrpuZXWnDUVUoJYCX5LRH1YFAk2a7yuAtnjMysttjMzGpcrW1F3GUMRnNua2WMdHiyyPRdS3d54",
  "key34": "5RbxK4AgnHuTsQiF3oMVTmSLePdVewNjPsBARcMs5sZdXYLjTtoyVwS7yLPZJvL3sLN6fnHE62XUNfhC9fKKzzci"
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
