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
    "5Ha4XJPnSKrioHD2rY1qXWHiuoLM7nDpojs2216fq6w8GpBSQzP4WUSPYkFAkMxyUX6fPJpSAMEhzCGS3MxUjKMD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57QvV62ADXwV6S7Rk9SBufmNTnNaUbTxqbbSGQb9GRLt9iLF9kChfY3EVVp1pDvT5gQtoXrQWD7Abu5E7jugHB3L",
  "key1": "5C7Wf1tkVuJQwnoB2vXHNvf8hyKzcuTTgVE3iaP7J9t9cxBAXZq1L9wLuWFkYb1aCc5bniXy1BMZ8HcHJbs9qZVD",
  "key2": "4TCY7Az85k6nd7d4C1efneckmQ5KZ3DnN8qkiCRxpCKks7E4oQ1K52mGmdC1KNYn8NGDu1FifGETVHMKqEF8ussb",
  "key3": "476WSezbhNDoynRXaYfLqVz16sQMdps4vc62cihj6sEWWJbF6j2hyyhpehme9hqB9dmH4PDxcUQt5ufnSovVrHhY",
  "key4": "5FSNDdR57BWbazJ4Qo9qz9dfKAQkUC3DqfhpfN4Jp3b1TWQvwMvuyPxg8g2JykFWUzx654WnyYzy9mwtr2Rb4cPd",
  "key5": "4mSepkwb9jVH9YZVrFQngNjYPpFEHDPsL6yecAk4d18YnpzXWQvh3moXqWV5YgdSxswXmoBC32pNJsuCdXqbPpgJ",
  "key6": "ZC4tWBsigvvTi4ZeLbo4hjuYCuyVGt6ZixP3Bbb4XKxHP4ugsGAXVbVWvLBst91goCu6dYkGBxLoVoKi3eGNDbQ",
  "key7": "229ehLaJPKjGBstDNLz673gJ6NmG1Rq86gm3e2RLU6haAy1pPrbapi4tPY98p1dyqLi6Mt9ZWtTPgBF3MvJuorfj",
  "key8": "USuJB995ANJVPmTLdfQ9ogwmAa3zXQb9kCYURPNEG2o9K3dZfRNa4Ysc3jGUmaWUrRTvh9WtfnQCRNfiPMnKNv8",
  "key9": "wcWgSxJZx6YZ34WZjPnJ2SuKUvpeFkbhLj1FoE5GU1Q173ENZPZWZn6dkD2mZmsPiPHWRDkqL8DkECJ1SZjow4f",
  "key10": "GDuWKjtijCHWzoV8pE9LCcuunzQynwgu9eBbHW5RGxyj9YahQ5bTFpZfAjRji6wYpuru69dJyvAJr7EgWiK8pve",
  "key11": "5fehdNXKKdCz8p6kXTf7Q1YAD63QT8FzTdYBRnzwaWQKmnyHFZNnu9HysdswdjBReGocAtJuoRyPtS9LunwyBSXQ",
  "key12": "F6Fet8QEDg9EzrEc3bJtaTUBGtrq6hL19FmNG8miKvDHiyJdJR5RJVr8dMypUSupJnH2cBoqr6u5LWBreituEyS",
  "key13": "3wiAL9ZGS4wRuYiJTrsWkqHdcejUkjSJrJ7p64yFGRw9SrxQ77ZKwgbExRcqefnnBstS38Goee9nirwUMhQPYwha",
  "key14": "2VpfaGv2xG5SoDU9yAVqwnpkaycAq2wCERtD6NTrX7Q3CtWHcAw1TwP4gBRWWee6yRuwRyuSV8jb11LN1DBzsLDH",
  "key15": "2nGv3gTfZ6hwvvsfbLNp8ZFbZaD9d5m2NTpctzdAHFeha9dxZ5Zf9JNWBriYX9rrwKWWH3Th8uKsTSDpX2cQ8juE",
  "key16": "5jMwtVVbiH8tdAiodwF3syDiCNr77fjow1fCVcLZpsSEHByYDXL4vQw8hTCdcSd3isNsbJMdkPm7fJCJvQV8vetC",
  "key17": "3jrUfdBUbp4sAW7DsE7w16PNZoqasWTA7XV84coHxaNAXAvzyL71crZPUYboudsSRY1xhP3e5vZwL8jPS5Z8s3CE",
  "key18": "4RqcnRi7pRGzeS2xS9j68kPBcbqDFa8sR8mQkXJonbmq4ZXH9tDTffN14Uq8zbuzdqAGbujwc6nSbe7y6Ts6JoC7",
  "key19": "4dJdmG6ANAqpLfrtyPYSbfn1FnDKWZAmVJpD6V92uHKbztVtB1yT8mmRzr5LK5wkNEnKyzz2Px7L9MovanghjuPg",
  "key20": "4bRXZ7b4XhJfAbKkBphZecMLwBxbBsyNWGcWtdPEzC9FmV8SCv4nYnphyHQ5foYc8BDzXBciAS6Wd3NG6QWgXkAD",
  "key21": "NcUndcNiMkymjtg4eD3dRvT7syJuMRDbSDoMsFnJfX8TeAaBvgcsJWUu7hwPjSeNGcvDfvDcsoUvBCbtePp3WGm",
  "key22": "qgwevbENjtqAiLg83wpJ5KYtJQoPk1t5j7RKLZVbAc3e4TbLAkN76cjRZj8NGqxuCco8fk246uEEK2yUreESX8e",
  "key23": "pfvWjPK1rk9GrJPmtxJjqpFPa14Qp7W6MBYmwd2SibKBkxCVMancdrBqPcuEThMVvxhhcP2fJ71rLmF8mYkTxDT",
  "key24": "37tHU5oo7YF8vokAAfy4oWSYtXWV1S9QiJrY9pK1g6gy1gt8XiAZZQ8uSEcbG15TmdLReVN9jtXPwhB9m2uaeZAo",
  "key25": "4DbbicawxdMohNxLH6PiYnPoJTe3cH7QiHQAbkWK5G6oMLaXWhpAjDrZ97GMB1GS3RrkJQFqTvJEpyfskYcSaEKF",
  "key26": "3oxc7HM9RFkMGbr7vSxhvUdF4FtzPxVTCMTucgAKhBQez8a1y7mUJMRUWRwUEjzeGczdDL97DoDR4GSCVypZ98n",
  "key27": "FFAPJx4FMVCcFwE4D7zVnGp8Jfo45AmyoKMHuPMhMW4iDtmWHqvoYazy1XomBNVwkNEhkeHNrUN4J5GVVAennPe",
  "key28": "2wTrinHoZZ8hiWUCWshhGb4kQGfLJ4u7pD76ymjNk2xvZzS5W1y1dKt4Cq7DyuSCk1XZgqukBKjbbmE7oDM7xAUG",
  "key29": "2bEP4U2ct7aTwrKP7z5jMWcDPB8UU7t4wywEdAJvoC3Gzfp1dMVHQWp1GN9sieqHuxMJsKHLd7yzvWbgjc6uMDgk",
  "key30": "2KrPsYZXeSpjK8YTcyP1gq5Y7KhmykDhfGcS1CRDiyXrpKrniUzELxejRK73Gb6ghk3CCC7hXik3A2DLq797FxW1",
  "key31": "5MYEKEnpYX2aM4tF7hxCks6TNHXjd6GrGujvUWwT6sf8n94nM4seR86Cei4MzVV5grRdJ9wxCC62VJrToH3VdKbe",
  "key32": "5LK2vTpLFsVBHSWKuM1BK2itzTMB2f3vEnmoXMii3QYjpEwUK7xPN6fmssUTkwRmMYAmipyk74mntkdff5iEbsNZ",
  "key33": "5V9PSEXNtyZahiFgDadeicY18u8C1qMEXUm6ekFQQ59AWMrhufgzRZ69dP1zxcGN3wxBr85qpqtvGVHzawBgJsEP",
  "key34": "3TaPvSoiFivkAgicNe7QiJ875sxZBH4PPcLbtmcRQGYumd4ip86p3KGidVrrqcNzMmkrNwD17WS9SuwJLb4s4ZUW",
  "key35": "5P57kcm4kXtBHgSZkeLCKxwK7ub22Ko9BemBFxQr9gqQyp9eso2PKfcAU8nqquru5L7mMsGVcU2Hb5ug63TTZ2Bg",
  "key36": "4NP2Bfzo24MTXPKFQj3jX6VRNkPjJdhjYsHpF6nywkfXouD1mePbXWiiN1YLpVYSs7RMtfsMS1CjBASP2fqZy6qK",
  "key37": "5KD8fqR7g2VWr9TDFfBBeuQKZSHC6TLAo9xkEyv7TqeXHo7uxGoQvGP67vpqGoKVbMucEt8NozDZgCFCF4m6RJn2",
  "key38": "4wZn8djC49RRgzQxKXqnVJ3JgLv78WdjHMMCwpMfA2WYEZjmpGQVCV8KXktsxSKS23GYWsK3FYZbuzCXfd4jhzgR",
  "key39": "2pFhq9E1gCVpLwFeYPN9xNo2CYYp2KqethLa4KFBo8sa6t8YPVBgm1sxr56p268FpyciyQ5EG9cWoQxTYsdDGZCz"
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
