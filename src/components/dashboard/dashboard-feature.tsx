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
    "3UUFudAXYXJd3zugFEm2YiHgx7V6r897Az9Voku6rKXDxgYwQHYECfD1xGgieBUpZT5hNiFrdzwh3rPvXsNXC2Rm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wxNWWdVhM7fYxNWPns2RmxsVrsqNKTmo4StHzB2jA5uQcVUBjMxjZiEfYye6EpLtXFXH6L6C9YQUR7wKB2r51Dz",
  "key1": "dQZdQJVZ21P6fN4tbR7FPu7fSkuhFmKYfjoVzfNT1ESnt6NBJvWgCd15BEbnQ5PKAynfrbBueFTJu1XD2yFahxb",
  "key2": "2Xa1TU5DxLE7DztiovZooY21zN5KGvtHkWUiEKtT5J2oEpaf2SCnTtijL6LmuwgfFG9qoZmUKb7qfcwcNwaubvNg",
  "key3": "4zzACtTcUc3SzbNLo7vsBir9MvJ9RErQc1JFFDSi2rGEiVBykEULVMfhSmsGYRxGmxFKJfoZSe3maqS4NhYvbx58",
  "key4": "iAUjsVM54Q53W111qnMKivHzhryC4UgS1uPJ4MY7321uf93SasANCjW3Zz3xQVbaemhmPCN67uZvKnGnqxczp4G",
  "key5": "5EbQbb67hS8tBWyo1eZfNX8xQEb9XJFVdujgZ4dBHTGtkudr6n8dNv9q3R5FCD14J2YfAZWUpCyHSpDDSkgZD9Hf",
  "key6": "3RazCSDpwzdVBv3smGxQnB5XbeUqc597HUwYq2Bp9Sx9S4E4tRZXEidgSb4u4SQthwwBw4ubqrPsiJjNhihRqAk",
  "key7": "5DFDZ6GY3Hrkwf1pigmDb2w4PcXYCh9jpE8Qtbk6W4hM8SQzqsCVKEC96nvtgRoeaicPzVbecSJKuj1soHyQPubp",
  "key8": "5iTyxC5whyUbqNf2NdhaUFPVAYr2anJLgHm232bq8Z8j3MzjNaay7chawsa242i1XCM4Gs6jxQqD6TPrBT6iQo3b",
  "key9": "2BoQwxBDmLe5P87UuSMwh6jNxvVZicqEcrHoLD1S34quK5Y1FrrS7CEETCrXWQt7S61zA5W1PzpSEVLCDeeZrUHv",
  "key10": "5b2V6DQDME7eFZ6VN194NTPVk4SVjEX6rLMN7XHx8Rjh25CRog8JtA1JPYBtFnTj1YQbuBGVN2kdMtj9CBDgR2er",
  "key11": "Dxtfcn5uac341TTTcYENnY6CtRKo18ppMBg8FbFqoDeNLc1cUtPd3UCpVwftWJiiv2oqEsajMemWGFEZgBTwJgA",
  "key12": "3iotSx3x487NZjMzRpd9GtKKpDzsYxUuiUdzUGXfjA8YP3pUujPXBTQgnAZz3wR2krg4QiZTyiHBd1hPawQ6QdgN",
  "key13": "R5oELJMVoLptftHtKkCj6jpQpKQyvEDkbopGaAtKz8Ypxr67ABtEXJ4TmmW2QbnrJ5oHMpyDUYXZssmDSCLeweH",
  "key14": "3nFkMnEAvT2KjNmNWioJuCa4HmqvSJAyNEZcSqBzzmhxr8CG7LibkUUgGjG9fXLWYVf9LiwPdQquy6M94Cu9F4SW",
  "key15": "53iRQwW4rVYV6ynKEZ2VWTAPdfpHUwW4Dan3TTVFijTkzsw1QKAuK4GGr2eMLaJQziShixCBMmvoqUKknx1cR4hM",
  "key16": "EN46Mb1nRpbLDN9n4Yb1f8ANv56DBxUyQjA9t37kXP1uf9mVATtouCZobbs4X4wt8YqJiH6UKie7CWh9rqnzss8",
  "key17": "ge2c6fjPkTA2Hb8KBjh7h13ZB4QFYebbkBtqznTPgGpNC5svNogbvGG6JqyxNAY7QCXH5AWfgmnzidj2GGDVHaz",
  "key18": "4dtEA6GWuWmwvUy3CPTmWRmnuyjookALDCKJDj1Z6mQTC3i5MMvb533ZHzc3bjVkFXLzcRaVP6iXfDN55LcA5c5o",
  "key19": "3vq1a2CGy9xwsxmEmtoHEgbQBWhY277baAWQ88MRSV5RaLcbcF7ZvKJpnDZg3y8aAMwTCiv8KSuT2iGSabHL86dT",
  "key20": "5AJfW9zZXGofGSde1Q3yHHaA5nGjP76HX27A9c6fD5ZCBLoE6t6W2EKZubMouCH7CSBbbuqJnCHcbL8KGroEWrFg",
  "key21": "3tZDRvrwUJqYWrLJ6DCVC4wFLBn5ZLyRs5osKMepi77bKrpsZWzc2XuLtCPD6P9CY5uooDzw6TAXoxr9sKjz7NbF",
  "key22": "zR5yThXJN9uLUkrf1bThdYyGddSzHKuL1tc9X7RWNs1scawfE8rPxsQDM8Q2bYFrxk9tHNegskdE1XYUXNdNQG5",
  "key23": "3BaH1UdXG7Ae9TKCQNWH6365ufHGWzH98EszGegQPsEJwJLX2mTvHpkEY3P1mBFfKUExvBoWQ6UtRZrWaqQumoms",
  "key24": "41VnUvWrbJ2nzG12pKMtAiLpq2dhHKKBkJYmw4iJ44jw2yoMcWwQh6eomjjtGoLiYRREnMHdU19fgoSrjcKoykKz",
  "key25": "5PEh54f4oSZAHnrNmMEFYmyTAu3Yq3jrpqB88U7y4insy5fQYW9S4MpumnMp7i14aEJzXtMnvNGSoAE8eNWgr4ML",
  "key26": "2kpSvpB9dHDnAxBWejbAyDkUvNLqgwPNiPKAR86vm2BhkzFf56aSwq4udjs2fmCCgpf6WYc4JaiQwJYDZdiSDe5n",
  "key27": "ws3vLcM5ucPJcMRE9WE7p2ahn7i7bRjGVBdLUZnrw7v15bfSyaoFH1zpyzjEYBnhkZEteYLbLVFTS51Tkayg5ev",
  "key28": "52LR3D2vSs1DwHqYkn8kfK1LacKwK8myzTPmgXNRfuKP6JMtKWaRfdsUD1CdBFNFxWprRi8xfG2krupdXtDPBfKk",
  "key29": "39M1PXhkDwf8sFyMK72bAtLRkxV5D4qZVpNoewQP1ZrEjXnASqa7HYq9M6m1JHEUJpv8j92iVcUqkiD164bJJtCa",
  "key30": "5ksxZSHsGexUgW6JAcP6hGyhQSFeELcjXfVoQu9UwGwvyX48FzNGAbAducUamZytfGioHKLowkgNcdPhJAjNRPQo",
  "key31": "5WEKo433JzES9B2Q9fqj3RXoDa1GxoKwfiGMjLxiRTcPKiDfDW3mzLi23yAetDTADvr3JiK9vQQ98hjqQWPNAY5x",
  "key32": "5pYS9ZAuohAkXwzpvdzqKL7hKfEMXjApR3KV1TpsmeoHGYHRtTFovCRFHGMvF9nvRW4RX9qF9gKTGMN3UqtmsT59",
  "key33": "5cLmDnhjtVgN8aAo52ix6cKAfBRqciVCrt6vt72vEzoye5gweHX6Q82VvF3kJ1DTGMgBvjiR2oJDPHYwG4ABYWkR",
  "key34": "5ojrmfDrSugJ2uk6ygS5CfuWJSvQhGQxxZjMKGYUF4uwyiWAdLyoyhavGoM2UbuhpKFCiEi44u66yd25N9GZ2r1Y",
  "key35": "61ZVmdSr2WWZBhPsj4ZbvLqc1iJpWEc9UbZrHbz71CkGtrwjFNJzYfXUwCQRA8DY6K3hizucBgTiXa4X1SUhyaE1",
  "key36": "4LGx5H1VhkddJgXt6VCnprz9mAgVDEEiwavwpdWYyGnJ3NjjzP3E5gLNo4K7Wsfshd7RTmd9TF2pahFvMbZQYjuW",
  "key37": "iP1PQqUQbtnxTTYRifDTqXxWP6ZVaQgKUF23Hik1giVgnDaYwWcs4mu1jWcxeqDhTeRwYwf7NtnnBDmf1TzZvSE",
  "key38": "z5ZBKo288DTXbZ8GmQNebrpNNApaiFAQ5nLyTcKaPtSJURHTchVGL5PLoQvZA6mUm6Q8iUomXqrVPCvMEEJ9nrn",
  "key39": "zZjAiQo8qg1usEi1AjoonAAqDHeRpoFby3wm8hx8JJ3VhnSr1NZNcTpBgFT2FNmT9vXjfo84NodhyAbTyNdSX36",
  "key40": "2tkf9f4CLVsjPGApqZox3LXzCLdksL8pAGCyqkquWyX3QkNzqB5wEVU47SsZNv9LxLmA6utYEV3nLLMrpS6RDSYf",
  "key41": "5zHA7keCd6bBiZKPnpdMpjFt7yugYUt33REnPEnBkzcMb8rqXgiAmdTB2TKJASRsKYpFEt7xgChZRAc2Gs6HaMT5",
  "key42": "4gyg3gTsQ5M7xWUVSUsaRLqgL1kFGPK6ogBunTgSgSTH61BcHdwcnXazqvMeipgaDrmWoZGhojj7SwUQ1dLH46Y2",
  "key43": "wG6wZL24aJzguQtaTJN1mRqFEDVxzjrWaUtYUj6YsiRkjXBZdS8aGgsHbMaBTTDSeP6f3RLso56aciSfiv2KKcW",
  "key44": "oj1ExEguSBFFfZjUzr1aj2qjGYRWC4KG4deFMjupxSCjfcTdnVkdCViUSUTCd6SVSivFMHu33eakba43k4FFPiL",
  "key45": "4HBoaNbPuMpfkGGXZAXeEuUpemRsrt8cDjcY51GemC2BpMq86vdQe8wqBHxKqqcxp9gzJnPdq4obfPZ1UvinGKgj",
  "key46": "5AvvnbHaFmapPEGXZFLjiAXyjfVqyzaqd9kDGhT8sDfzU1zZEbSbVYAXxUQfb7frVCjVMSGZ3gj4663sLqzTah2E"
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
