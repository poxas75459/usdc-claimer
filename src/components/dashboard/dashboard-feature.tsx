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
    "3gTiHRLxVobn6jqhAankTsmgvD215vb4kjhZtVKFtGjABm9of8Gtec68G5aUEZE3ENerq5V96dY6ULDtxoLNMxxG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dR3UJHE6XUkLcT8jAq5yNUTT7iKygo8eqpjrCjUovUYV9PwfAn2VmRoZ6FtpVYYNWus5yeNRy6Sfc3uz7SPvNyM",
  "key1": "2QAp7hcgGhrWFdLBfwUNJCWCz6uoV7SUYdNDa5TEwE1uwBwvhgDqVw3xTo7dPvHmTNbRYENSEZTGdJasdg44RnwG",
  "key2": "4rWK2yUSRfaekSoCRLGk68rpLXgWEPhPFRECkuUQgm8zt6upRLbsDZwoE7aTscV5tH6LmKDCQ7knAaaL6A5uEXrU",
  "key3": "5rZ8tNKPDaFc1o1MLWYukyzoWhvDEsGfgMfaJhVTJ6oeTM6651CNNapH7qcG1v3YemJJhKQNp8nut6ybmoLG7NwN",
  "key4": "5tTQoYbdK89C7DfqDSDKLVoByirzPUv1yNPscFkEPV87PGKS6ExCyQSU1k5xVs5Bp3oeAkp7b97zEmdgXTZD4a3z",
  "key5": "2fMWgdj76ExYa7Ex2sYvn9mvn9QKrXCfsXcyY8GYJoEwNjfHJsn9hdHxcG1gFD4pMHYjivpZ8kd6qefh7J1Juauh",
  "key6": "4QU3mVpisEzGR81XoAYpBJ2oQv3p1uvxgk7sViwsnefnS7fCU3qAuQM3hb38wYCEGYKfVDvwx6fPyLFtSQuC7sBn",
  "key7": "5Vmsi33T6TcHqLzBqUTqHTnH2ThXbX2opyMeogK8awfXoXq6Kaqb4dpdS9FJN2HTrF823npwMGGRUF9DJcQ7dZYC",
  "key8": "Rb8383jb49iUaaF88kmgiVwPyZoKrWRSY3hhEku34rjrAy3PEZapvqnm39ZDjL81dCLFQzxhX7ERubkLd8m4cjC",
  "key9": "LUFURhQgbyzckRrpjtoHYXsmggyKbazwhpSwLa3vJmV1pUFaxdYGaiVzbvHunrDDyX2FNd3i79U9ACdXzQusKLt",
  "key10": "ZvCiE7yGqVGe8RyEtVruMtfLo1qGKJsD4KJHfgxaayAfht9CebCJRGyEdcR6Fwwciry4XTnMU6n1CvYhxV2zktF",
  "key11": "5Qg5FE2Mrg9qRrawPHcuJjW1aq8oiHHysWXCVDMkqo9occW98RdzhGThAEAm6up1u9ZVHiSDBBHHcFJrnEd5ZMPe",
  "key12": "3hwbUVW772Arw7r26kX2rT8SBcm73cDGrVZAXiBh6hAXeEg52SAfs2DMwEM3YtaUVJq5kjBrDefzuvDamVFWxwDe",
  "key13": "37Bmopu56g59ipzq94FQHaGRQoodvGgW1ydBZT3RKNAeF1AutaDEyWEe4LrQGqAfABnkzay3sGdbGgHbMBsqxgXJ",
  "key14": "5WWjd3cmyjyrQJXiaQodLySJsQJKPS1cjrv8ZS6xds36ipBuSY1ytt573wTyeQ48DbvaHjgUrvNNP6egchNE1oUS",
  "key15": "3h83jGuxHr4V6KpcPHdorf7RVNJEiFnpnTfLPiosLCHKdf9asSiP8PAqSud7v7N6t6kcxTtcgZajZi86sANSPtGH",
  "key16": "2kfRXREG6SmrRxsEGeNbz6H4QCYtiaFbR93esea8ZY4oqsJPvA5S32JQeP1vtVwgZCpjkf49ZzwkiYQ8A9jVXEiZ",
  "key17": "58KjrPHSyctayDAVry6ge3WMw9KBzdL5Qhgujm23cetsVUw6Wdqk1x9XfrEqVx3VQ1p8rAVqpQkdvKxGoSczzwSL",
  "key18": "3FrFeTF7fb6jiYrjinmiwv2N3nJNrDBKAWNi6jZx9mTzVhnV2QWBKhwDezn7rD7Uo5FrSYx1na6cSvhxnhWXudeY",
  "key19": "2At8mD378Q7Crp4SA1ozdjcoiGZEW6Z6YM79uCxjM1Ewcnfzkc2iNYbRUqMxZ3DdV7umkwjyqTC41Xpsx2MAWRt",
  "key20": "L2irQAhBL62CPAsRr5eUPWR81XpV9AaRSfe1Y2CsKzaMv2nLhEhM26h362frGXWvbsiPTtVrmavBLRvoEKodwMN",
  "key21": "22Vzw5VLuDRnFdVz5fiqvGMPaSVs8Ywnj6G2wmhEHaMrFR9TgbDS7BMPAwo9zgf7uQWFzYQQRDJ1kExcWk8TuXyD",
  "key22": "65zU9cMcD2JD7mvXcbE6DBRcmG3ya565BXRubY9UyR4UuWgU2wRpmmfEk3oFJiA3FP51BmQxo1JS7WRDHk7beEa8",
  "key23": "2smtavmkuBUD4P8WLmPVPgQJkkrP4nXYQfYpNduZkhT7vLFD96n15iMxaB3fpTR53fnUq1MZdmHmdPm9eW8VZHmx",
  "key24": "J2KDE9eTyECbCqX6JT2dQuopmHkN6n2GqyqYqV8S7PKThJUkt77ZWJVpa74f2HBtabfU6Xi6RZjWE4tHTcEANup",
  "key25": "YXHsJKBfRtZepAhzPFae192b6f8n41amDFYrUXj1SSQX6KNtKwgB39h7HWwobzPDn3mkJpXyoVLWn283xXareAt",
  "key26": "29AaZ6zmrc5PDNfzzgz3piwYWjuH1FnKYZLyNFmzpY4ah6cmpMyt2gvNbE1MFLoTN96T6QUZZpvQ5PK7CvFVMPbP",
  "key27": "2NZXwhPWza2o2HvjzPAR2G9rS6kvxyNATKyiLcktxJ3WFtcTS4vuRC34uYHciWbdmwKadrADAyLwEw3BgqsjehJ",
  "key28": "4bjFQoEixMk8XScXZFzun5JqJ39PhX3mSHCStQwviVhPo3sQGJpCK6xnQzXefdaPY7pJaP27EL8x89Eeab2kLKtb",
  "key29": "3z6pVJ9CgvM6pZ7yZDyJWYJTqt7zXE5SgTqK7THwvBQBApemTKv1k8n7CwqKT1JUQBaWY9xfKi5CAJndxngh7SDF",
  "key30": "3XNNuat7tLzW8PThbNUGHGQPeKtM31KDfXnptYfxuofu2418zJ51QYfKxs8gXi4fHiCD8QwfNoPTJS7af1vjDNXD",
  "key31": "MQx9WopLx66D4cBNfzFmFKFDBH4Jd2uKXHPQVPVVY5Nki9VYzdF8wz4j89snUNVPFnRB2j4BeoscbE3UYw4m97C",
  "key32": "4CyNERPgLGwnbqPAKrjHj4HJ2ohTu3mjpYfRBFCrWxBetLjdRvNgGjPau95RHL7dn7fmxv5SZMjEHck4mikTaX8D",
  "key33": "3Ykii3SpGMtwXomn95bv9Li8crppfVvzFVKye7p3Zk5exJooKNB8ypJ4GZb68tDm3FKvxbgRcnWMDHvXGJzvsJR7",
  "key34": "22GYLc4ErhPfMGQLNPz5dhZfrEJgwvho8hrWfF6W29frhwkHy5vyy6QxsWbEFg1r1YLaLgDPUfuvpgqYnRqXcw6K",
  "key35": "5ddGHCAFZm35uJVL5V5jRjcsg8TBdDpH1qYpmByqLrzzXMPa79F18nm4jX7vqZKpYsJtCQoqdCEu1uTSaUenmbnb",
  "key36": "5EMHp28Z2zLeAjkstuTVGPeogzhp21gs2VR2jSKgRUrRy9Z7y67gBSikfQpp5SJLoUfM11MrRruvLxFgffhJfQEi",
  "key37": "5KJudQrb6B8scBg7NAJKTpraSVMbmAGrE2ZQhrMRAujo1oAEAXB37zhgFC8oJTXLAdEcqPHKRiWoeavVzNKourAt",
  "key38": "44VPetWTi7MD1zHmjud6jAL5z7pJy87UMwnofiD7wkQLBe5DHDqtXhtcfxEj7K5242DqiUjYzEaE9un2sRAYJ191"
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
