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
    "488UgzbG1YXutHM359DPWBmM3rEuNhhX6BdhUWNgvPfEbMuLcHmhs1k36fWHitmyZSWvw3xaTScsEKbWhvSRztSR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5t13VuoRF5SbyLx5CwUNgMbRaYnazBcFyPPWZU3YYRyrMcaUpCKQbvkhnL529dNbKJGGM73hKPZtY1dYSJ1ahSXq",
  "key1": "2tNXT2kbvDH1k5mvehXY4vhAM72y7xn5e44vXVkzCQH1SQxKXKfMa2xArKBvdufX3GTB2HzZ8eN2rhidkTWggz1N",
  "key2": "5XHV2oRv545jX2pSh8w2sjSh5AJ7u7Ly3bZcAbJNuwgbPNo7Muesn4bRxapWHzQkNgCT4g3pB5RdYVhKUA2vrMbh",
  "key3": "235Q38FH7sjGXmy42Q4SECa89GMbkvRfnoPmwkVjw3WMKvJX1uH61WGKs6dx8nhVo55EVHAhGbsW8RFzhwPwxeFf",
  "key4": "4F9Y14LnvhgL54vkR654pQ7Ss1uU4nQsETQ2ux2iATFkugNMPrcCfcdHrc3eZKFjYCgsX6Xw6JeAUxpWCVA7oNT9",
  "key5": "riio4bMRKknZKvHzeEQpoj4ub87VGRN455Q7TeZkA4P5KZWfii6zzbn9oo2uaKnotAv3gXTURNivxhuPvtWgCX5",
  "key6": "39UbTzeVAmxqCsYCKsy96TGgVqHhGnmNn9M1Pihgm2JvizbmUWTmzYEoG5ndpYLA2JhfHGWmXKcb1JzQbbG5TzQL",
  "key7": "5889hDxC8iJ2sH3gNvYtc1pUbx4cTiGss73U415BL566JEyUoyvsGw2xEjxjgrXXfxBSKkzsoX8dnRkd2BgqoRPo",
  "key8": "x7ZBNBhy3ibnysLndpsGeEecva1f4xyxyt8bxKxkYzpTtB47GWMn8Sv559puMFZroMt7CkX9K3GXqvrPdGWZ9sw",
  "key9": "5pBHuck4WGjnjFd3n62xJwsvV3YkAfKDqEhbSu32jsfnETAPRQLLLtF2XsX51Pzxgy7Q5afg9nkfkKaWbWtNnAov",
  "key10": "3aufWyQDMe2mmAYdqTq13hgbuVScoFPctxJQvqzJEsY4zcVLGkmgQA3BkxYMq6nSJfDDXbpcFnHpbpRFQ1cU9xNj",
  "key11": "QgqLb71cSq6uDrPgcNPKUPBwzoLCmGa561FsvTzHUpC5hHZiZ31SKKp7yWNfiiEonQZ4MjXgFG4wm3xECAKytAe",
  "key12": "5QfzKgxpX2sboSV8DtVQ8ZYXZ5NnbnYaoUoSvL2vEVKn5rwnyWuQsu7VhZEz29TWwHF9QZM7cWeXZCMFWmho1Jby",
  "key13": "5xvvrWHJKbGFWWciYk2kghxLh47Hcxss5JoC1g73wivPnnVuNYdkEo5ieQHZYAmPm93XKK71tPnoszxwLrdpbH7y",
  "key14": "3BA9Qn6uonEWB7KiyNaq53vt1XuTyPEusmWkvNhh58rzzPajDfPYKCjuxTYyyUFqxgsuJP4gr2N5V7971YWLJ2Km",
  "key15": "3owHSDhJEnkFL12J91S3Lig9kaPYdgnUbEoA2jvSd4dF37zj4TEEf1kEDhwfGmDZqTmQBPZ1Bah21yeFLLEsyYUq",
  "key16": "4edgh5DXcwMT9n8xs3swWRHb1VmriVGqT4tzTfV6CkyshDd9GjztUvTXQU4hp7vKCG8fkbqZ3DworV4f9gwKjRme",
  "key17": "2nRLBCafRBiz86KYxh8uLU2h2S3ggVhRDzEmAzisJcwMouY2e59qbYmmYdE4k811fR5nkmpXFjDBUbbGShVkNRQt",
  "key18": "3RYXtyjdbySvrbaAn97Qh8J77oWJQ3x6fzsQENoQUdoJbuzjD77P1ohp56dRCii4cK5hkUTiPnxeFoS4gEjGCRzf",
  "key19": "5hSPviQDYy1b2AmmcnUta6wk51FV1ib7wA1yGVK27maDAEXWunoDbUbVVR66nqXx6Jdgh75mPxkzdJGrQ3uh6Upp",
  "key20": "3qMSJWMLicEyomjJWPJddYbh34r13ZSEs3MkFFQNLkRaEEB1FHjqgUEmGrfEVUcvbq2zhNEjiEMFaWg7ieMBQDvR",
  "key21": "2LZBcZ6BiyEcP4qqtxPjJXZj64B66cSbKACgJgYUQNcyaaX7oVCdoRRQ5awGBMW5SVB7JuoyssYyCaMbJusrVLZ",
  "key22": "hKKLheGTZQQMHnY3WpVEt4Jzi9DK3ChrVTSyZSeaDggA9Knoz4NMT3HNB3ymDDSmQkfo2G2vF791chD87CXzZiR",
  "key23": "39eu2toHm1pg1QXJboYqEVd4hnWZPgQM4FMA3DyTKn6T9o3yaxuCjE7tgga26ha7MeToMb6vLCczFURom9R65P4D",
  "key24": "62nD4rCM7mw3m1j2kU9kJnLcWqTWtFnGWv2ohv2XfnaGCnyUygTLAvAxEyc3Az9dCAWYzjjjPqq6CrVDgUU21fpV",
  "key25": "2iASRJrPKPFaSq5qnWS1gDsS1QaKgWWdhj6AWDNTkBntYRHkP2nZaaydKPujNxAEtGMnQrNaToF4yeyb7hadE1sz",
  "key26": "5S4dRRUb9yV71cVdCrU5E5tFxztnkVTowyzAjhsCYqxFrFqvWKW5oKbCLQraPPVyXwUquAq3fpud9mRLKMZ6TXHB",
  "key27": "25tMDdFJxi8meJcFmGf3Zz6ZDcf45kfWU6BwXZaCx9D7UBEgucaQXjbtzThsMaTatRAQ8yWE43u4j6EGc6fBVQRM",
  "key28": "2jJDfJuKWkvDihpxVUiAwNjAkGn4quMJoEA5m9UR3rbRGa6Y6bo8Cge1PkKVzboV9vMErmn814mZBn8NTiYuKwp4",
  "key29": "48g4FiZWbqsdDkJRXKuSd253L6dTNHUa3E5EGEKuTGdX2hNDWwx4dvpfu1S7Asc353ZxPL3ER6DjHXT57tARqJmS",
  "key30": "4mgWF1a2N2GfQhManPKMVa5wbXVZbxNJfq9hFfjgfhwW9jFUaBZ5UspMFBpp6NvH2QnDgLqFdqyiUadEhUx1KAth",
  "key31": "4nHhEGDSWXydBeXoek7C8iyHzeKx6y3ZJDJZ6TfThobHTmCJzTReW3qEWfXhvFr2ee5jtj25x4KDLzNxfK42PW4V",
  "key32": "2VNQq7kWrdwUKBL3n7KEVeZCfyCKsugcXJV16qsvRvjHipS9osYJ5oMwq2dYuEgsD1tb7eBHh5Jw54MHicMrzZkK",
  "key33": "YdbfcZcYfwACJy8rwEWpUaRTHosAPDiEzTJYPgo9ANuGK7x3iLV1JFMoG7wx3oTx6QZBMvQm5xmxdAzXvwKeTQq",
  "key34": "271pS51UgBwqLm6PrsqSyKovUcxWWEs1tpgg7uKYRaNhjJkMQbRozJybYVNk8jTrE5QJQs4bxoRgZbfSPwpyqTkp",
  "key35": "2d6XFxz87YTPssG23kJK8Jmr7yYx1eeVaLADoGNgJk989yMCErvDUcEM8mywpwaK8LkQfy6cdK7uQZDeTFoMKaXa",
  "key36": "4tLUjKfD6UpeoT86or3Qe1mK1U7N1aRLZVqTR3FrgZS2gKDTDRmACgjmVSYT1yrNyVUVdu1HGSVwZ1KcVyhDAjNJ",
  "key37": "4upywCyYEizDRtJ4nRjbRpMheVkWxnCTnHafWsA2jtJW1yiZchCycrYduDTRD1wCSUViNLLbMcC27kaAT6cvZcyX",
  "key38": "2xDFgDdnJDbMKqELGPKwRfzhxVJu4hCHSe54CBVE8kfT6RF1cHS1MxKsskaUMXhKM2KyMBnQr96kD2HuTVHLBgrP",
  "key39": "2DYWQDMtft6Xi5zSpj7fMoa4qrHu5ZoWidURPyNX852EPFCWgiSqNxw1EAh862qnfEqQ3LswZ5gcsDQ6bcqbcn1f",
  "key40": "5SNFoxhVf54gn44bQVndvk5FEKrX8yfiFJDVXG8x3FFPjXraAJqeQB9Ko9DYpjijEs9KfPDEELtBgEbVawJtxKaB",
  "key41": "4PqtLXsZTcT9MGV8YGKrqoGQv5NzshSGr76TYyUAaFMzR2Wd5BycfjP3ZGUYgMv7y9ci2VT3EyJ1fFWYSLkUoEHT"
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
