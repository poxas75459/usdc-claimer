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
    "5WXPN3EL8nR2o4UGMh8eYYYpd8bADi4c1FZ3dNTrjZQtCCwHLYd63cexwFRmiWkDpyF6J4z8anw88nmDJZ9UVX4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Q8DBLbW1U1YrdUtfrG5aEVb33v7FqSnYuizQN2kbYxghSEzmZEQThrrSMdsJz16A7LwZm6gp48PuyqZEM4DCe8z",
  "key1": "5DqJMgEbe4zn7ChjjsT4bxyLBg8Pizxdi6cDeGATU5GV5bTkC1xitPpd1YpHLSF2uqTdZpMhvBCdK7wNij926v6e",
  "key2": "49ukngn1UH525VgYEV3fzK5gCLBiFZYgNBFymwdoVb5wKCvALqVkwKuns6YjKB94ZcKPNeZowtHKJ6zAW57U84qN",
  "key3": "47oz8hMRi5hdBxjmjA3fxn88gRgFamFVA1TQsQkqk1XTSJHkRyDy7SREg4BggW8UBee7YMTFwVFrkDtPu8srAXdx",
  "key4": "3sQgSr6WKUX3cmrGQhqE3Vpswj4Yg1V7YQys1zNehbDRoPCnA49hpLXsKgZ3aZLbGesCXTWnEh1aZqtM2K2vvGLJ",
  "key5": "2vBKqR2JKH4jdZxQMAo5DP7x4x5WjuVLqBrzkSvYAsWTsawwSy3VEiQ7gY4Et1DYWikXwGmRL2ytpsrzf7Ph2G2Y",
  "key6": "559gGFi9pLaxmmSar5ebsCReyHEdsu1HFukd7eiYp5dvPNNv1XD7sXhChsbyDotQ1t2jX6mEg9RwDmLvHNJnANw4",
  "key7": "3YgZfebcf4DXj2SJHbdLzJb1syuUcGftWBnWVBVa9dhYoyAG9SgEtKXHXgzAmpwhowyZbARpuacnHQQPkVZJ5AC2",
  "key8": "5WQCKFwcaUAx2qphxWLhv2NhiyagNfkZ4X7pMz9Dz3gKX1GezDn57SSGAnJTMGtLMpg1PManeJ8D3LFTzzG7xmB8",
  "key9": "5cvUCFm77NRmJcDRJiCmXf1QoPFkhhbGRFmczyNfXH8wMcmQ3hS2SkixFEG8M2xehW7qexN9Js5egqwyeLaa5UJy",
  "key10": "NmrisEMpUWnoswXTgP6mGLyKEMYx6fWZ2VoMX5ABSfPhr3tko5hCQjigdpr1b6fZUt434BgTk2s3oZu44FCEprE",
  "key11": "5KiZNcNfGdZenpWtiqeCHoxWtYkQokvAZj2NvYaxBmdEdSPPnL83bYYKPakB1sxqWeCmVWR1cQudrNDxWbayCko7",
  "key12": "37FBet9TjHvtM5NXt8yD2QQv9KiXkL7VWtuCj6CkCXnbn1D33vHcAJSk8BxaMfUxHKckzdSC4uBheak6uKxeVcLs",
  "key13": "3YG4W5J6zifjrHEvtyLuerQATGwD4DZy4F8vH6oZyKzJp5RBfrQvGDQQgr7CunMHwQvXYepeASabJRL4VhEmsz3k",
  "key14": "4j4jTUSgxDeKYAjq61Bggte3b2atjxwv1eC49sWf9tqb2VXpL7GD6kxcjGMLF77txBurhMisQHTh9iA5u7CuNiAV",
  "key15": "2o1SWktQCAsMT6tuKaJX1H41qYgtBT5ZphnNHBhAsHBQgJJ3sRvbo9VU4p7a8JDukFuUUyCjKMGNpCWrDTXnoNSx",
  "key16": "3xHMsChuyzcUqviz8fbWmmatLEhQRVg71NwixTVyGZk8tAxHoacr52S5wvFC3zXHUbsNGHkwrc9pzzG9dw6zQPbu",
  "key17": "2KDGgi4wvzvBD8B9T2sJQEgojf74ZeKRqQ8kJc2FCCjTnPvJsrdNfuyErsj5fWiGhNYRuJUeUmfzpirFh5h2AH9v",
  "key18": "34dQDggxSWFSVBk4W3s2N8hp9yXoFQYAGdPX8EodH4vrc9V2MoLZP639RjcukyXanS5oYBosatVyqZ1pTK5z5j6f",
  "key19": "5bASxpCgdU1uKv5vjHvgnMMLSWKdJekWnFkTpfeFzME7Vmk1GNi1CwnZtmczjaUDA82gxgGcwxMNfRQgRs5ptPSi",
  "key20": "31S1PDfLgzhjaSe56e8V8nMkzumnM8ayShdVKEf3nfKzf3SVqdAGsqUGmbuuw6BgE5eowLyzxXNbhTnMmo9Unnd5",
  "key21": "6341QdTLjBeAxAtNhX29CZpaUkfwWW33n1pHm66X1LRBk5X2UyT42oVorvRycUyjWGzQT4S8ub3TNPkcctcMmN8P",
  "key22": "3y2YcTgyLDUJrqVQBrcCvAwtawkvxJyLu2GqfqUjJ5HvWsT84NnYjTqkQXKpUmJRkQRx1DNLpasK2LTWkcveJTGs",
  "key23": "342PRbgXxfEJr5cAiTse9mSLkNUdfMpDu8VZb8NzHEMqHFx9iG5tsZekfRysVRRvLxLwqZNx8diByjDu8hD3YFm",
  "key24": "5PLc1fJqmFKCU8ZXPtJbRd4N9REsW57wA2zQ279EpiYzyHtW75Pbdqj18oLhUUf1WDtevk3aHB3qbk7Fr62BVB34",
  "key25": "23GnaTfdnygvUCAJreHtgkTh4Ww6RQpRqbvZYHXdboSdkBfizEsKmt8qqYZ53PkRpQ2VkmR888j77nwKW7WRDPe2",
  "key26": "5ftkAvNTcjwtd9TthEGveaEe2zEHGQx7CQRLtk6Kz6254SpfzEhffhzSNRWcmbs9RZTgdJHDFP9iy4AZvJQQE9JM",
  "key27": "2xR9ySJYtMUeELgj9d2pmF3gyqU5WTHWcLE3WHACtr9AR2bnf9cXqHfot6WefMPMGbggA6stNpSP1acim5r26xCN",
  "key28": "2XnvHast7hp6FMsq1rqEVRGT6JQ5U5ynTuN9yfvWoP3vhgKxmw1ka7dvz3okQZAPGZxss91FNUrbodSQB2xghpcN",
  "key29": "4QHruAFXJXibYC8qCzGnFZVinrdN2Db4AAQeUU1REM4yAt53w1EjHNaPnJhZwLw7k4QwwGWfbENMhiMqoerVNNT1",
  "key30": "3bHy3KimjsrJVhSFVAgjaAscMqeVVmddSP83uDXEK8CaH5SP6XSa2h2cEXQr1Wh6k7cfjbeARPEvcWVpLMRyVm2d",
  "key31": "7UEsukSJ7YMgV1cXwbjfp1RU3Zg2YG9db2UuPAD4FwqqFGn79aDKYtTNQXSeLtjer2FkTA5Q4JYZB6M6F3o9V5Z",
  "key32": "3cB4wctZU1v8FFGH17VBkEkNY7kTmctGRfgfSVFyNZpAo6JQRHzN6Xporq6VRVLJ338Fgy1tsjmWHvNAp3nztMdN",
  "key33": "2qcKjKnqXp9g33nG4GdKRWFsYWGS5Dxygb5AEjFircjYA3RtHGuJd9pgT7x2RM7PYoqhrJY9ZcBzrPgJQFwnYGP7",
  "key34": "27ynxENpt3LWSsRFGMS7hH1crhqjd4BLb1ntybDfdjohA6dLgpUB5TUGuT9cMrjXrWiUA8zXChpmgSDxhXnF7tHU",
  "key35": "26M1GkqGPvbmn9wURKTmxrZPa2cnm5jcagtCCa9Lmqi2tGXPS7kuxYGZ4jM5SQWNonoijgSxTHexgWCv3uqehEyf",
  "key36": "5iNYJyvRpW81jXPWZuvepNCL7Bi6VSZrBpcoWm1JU4MyccRwgjWT88VWTmhLddqqEJcrf17uv2CwB8uebFdX2C3M",
  "key37": "5rmyBhst8E2CU6zWnByaE94c9BFipknbB37vGtDokNqMacDTk7Auf2wYKr5sEDy2A12GNYVKMcY6Tvd8tHnFiLHp",
  "key38": "4gg7ti9jMGZs1QvF6ZVKXmsrNYcjzwFWYnGN23emAna4DrBL8WY2MzjWqR4EtxoWmU23TvDs3dSi3x6moLKfHWKi",
  "key39": "4WF1Kwg68Zco16jvucTYpL6rxyqfBErDRqAnChvRt5A5iYqiy2hQqYS34wUAp1FswcH8EBRyBUJfc5b5VBJU8mRR",
  "key40": "63vWL5zd81gd53pPLUv2ufP2dNVXRtLFE7B1ZGAQLE7n4rSmGLwbyX2akLFfXmcf9fhCempzxmqc2ZcwBABmhpLv",
  "key41": "3n87TGYREKLWMFYiormvYjJ8vkzny975DoeAeibQm56R3LrzsjQiEFFE4rhqT3kAXNkgympbphyPCYGX3zqMqfTE",
  "key42": "2poCYKTRbczXxEkhsBzaUYAi9KxhnPBdjWmWC6KNmGumP3RKjTTHbb3vjR7YcLKNPW4LsCxWy5ce3ERG5EsrMNuD",
  "key43": "28UpTLyXVCZWorhYatpZbGeqY66TDGGjXWcx13MBF94PMXqB2vpzsqNKMX9m85NmXhon6xM1ttJQFhryuC5E8C2K",
  "key44": "4SfceBVegn6KzFQcJFP1HLGGtHcKaVWXaWcEbphvEtQ1PQATYKiNXtppMDhdCkv9qs7mXVzDPpUwvsDHjBJAqPum",
  "key45": "3H6TnLHnfii7xDfFW4qs6RgFWvZTGqsbMmbMs8VP8zC8everMhGAm3QcpAtybtQKoobrp7xNGdiHFJJeSarsjmLk",
  "key46": "61fXcg5L17gxgS3QkU8FdfJyyiDA46c4RLy442BeeMedKYuShE6X7H4Vu9r6J1skMqJjsKZLiL9wPj65WZPmCCcz",
  "key47": "63FNsuGNhzjmCykHFBitMEC6Qar3rGictc8ybEYinaRkG3yNB1MTpEmdYdqR2wKdMb2dYoq5k9TEPCyMRsgKYSLW",
  "key48": "4s4714FaxP1GS8RaS7D39GgNwV4nfBCNEauszy292zef5nSodGXSHrA7r4uPwDZGBdicUkRLuDME4KGPnkwMzRnV",
  "key49": "24uYV4eLEHgdTbS4Gme5bHjTpLE2ZJgSHJy6HAHW4Uf4Moug5SWURMiETjM4WXyjRRzWsCCR75rMsTZLMhdQ4m5J"
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
