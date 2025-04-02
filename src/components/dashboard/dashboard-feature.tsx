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
    "4iRDaQ8HhU3q1S1FHt1yHp48MUxxFsDXf14oazktcRHf5K8hEaop5dqMXonxxRRNyKhpKimPnnmAbXnsedDThASv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42Ef2YZ2UYN4H4iMmVH6uPmiWSrvSVDVEerBxMsaBuEvQSjNsrtDBAkphnWfFuV2J3mBjsEdN23NqvbAsZJ3UGdd",
  "key1": "4kyTYjGTzbMzPLVecQFqQcWQSH9s2aX2AmtYDLbpRAQPzrGSJohmfHDuKHmK3aKUjQCaW1Do2EXr2p5qf1BSbC4r",
  "key2": "4u4qtxrch69gNpYNiPZCqPSxwLhTZaU7wCLW5T2JRjEAdCFr2Rwwy9dAycvwLGuDEnSqbvEUAgj7MPHBkMgE9bSF",
  "key3": "5EoWmrL2rVvEeCHY3Loi9FfZ1XJAVzDy8dBunp6jk3QhZ798uyByB5LeFfJdJMRhLyZye74g9XEE4oyktBQpZeUK",
  "key4": "34cBUZiqARaEmEHXN2nm4sfbuSZvaNuyrbjP6rN8nsRAC2wxegBxhBVxCLSNpN2BBx8KatvmQDDk2iYqF4AFKnHt",
  "key5": "3Y3kVJy53RfmWgXHLwAFJgYd1qoniqGRyhUXrQ3hn8wy4Frxa3JTiN7xPkKovnKbShzsZEjFDv3h6QebJYZGnSbN",
  "key6": "48XrWtdarV6dPe8ksJwcmGZsa3Wu2gfGU4wU6rptMF4ohUC8fugg4hjVaC59j8T8qizUWv7RieHB54bxbdHMCLSJ",
  "key7": "xcVhPzKJHeC6kYZozuFDuF9hJAWwxR8WJF8nwejBZCyAEgb3nipfykXSmxhhsqvsm532fUQyuHqrgzENNE1VPvV",
  "key8": "2nApAuBVhBShbg4jE1pV8AET6trWYSJh5mgS5TVfwhdxM9g3xrZ7nv3n6K1G9gtwWB4TcbTVmsXvLdjk2GKuFuPP",
  "key9": "3y9r9QWazWJ1DiMCc2HUQkzUdR8vtowBB19WMJsa4g4yAXBkMFDmaqCCNNFqp7FcytsjUTXmyMGSyCbU3KKGpSRU",
  "key10": "5zhKub1sxfALej5wsMRpnnbt2nLfJ7yBPygie8ngeaC9UFYhiJBUTYdWc2pdivhD6aFnGsj1HC2MWx3niRcmewXX",
  "key11": "zALT6YF9AoAJwHmPQ7k9WG861x3dRfrdrjw1M948idDc4pSFoCjndcegKpXfWSBwqDMcVdLkgRZ9GhkPLDupkWw",
  "key12": "3UcoSJCas6SZtM3CEQY1g4CdCYLNzZcvKvfC7TvcebALb21VfeYDfjJrxMTr6ppbAi2YSSkVgE9dgPwhyAdRu3XZ",
  "key13": "GpVHE9thFvvBdBRNVW5Rp7Did4Tki74vURve7PNvtTweqQHr4t7g9zKPeY7bdcTrDXFSFhFDULvzaPKQGYyvCcH",
  "key14": "3iu7wH19TYzRkc73m5wCrQuQ9B36Rm347vysg6YEFyNZ59ZWddDxFc53Jpdb9gCWdhSBj8Xoqa2apXdqSAyEDWQ3",
  "key15": "3EH27s6YkCLhS9diVvCY8GnFDDp2vNNrQSrWZZPTW3FszkjnMgKVrkEGUc1B5jBfyv8hxsTkS4qHnDLtY2GozTo2",
  "key16": "5yFyrBzrKu79WZD2svTTnU2kWV3hcjUiLfKSAgf17eUUmdiv2sau19xCFvMEo4keeVNTqkvjbFJP4kBtCVHAWRtr",
  "key17": "38qTnBKRYr8JRKeedpChNucTLB9Ne4d1tucaAzDGow4uFiUwFGgTHDmgGa4AFDE9uAFDKJGG9yxY6e6mGCAWozXN",
  "key18": "2EYSYk7rGSj8udokZNGNQ1CnjQJuCBtwP799u5vj3bDy9qw7MEGc4Y6zwFGmxDQiTb5e9Jegw3M7VMCdsh6qxaT8",
  "key19": "43tFd7FZ9Ka7YTmxeW2X4LZDWS5bSue6F12BNVV6WkT6xXfQkC8yT7CvWFc3V6UfbzGgRt5Jt3PymgM3JkwSTqGD",
  "key20": "38AQ6dkTmJ3idu7ihCEzyK6kmhcWivgCnkazfQw4L6p7BxnUp1cha9i7dYRDR8woeckBgidWhiHpGYH1ucZWmzLa",
  "key21": "Mv7onMJ2Pg2B8jj3F7ib6wEBZCvWnjYZ3sH76szugYEJsMbx2y1L7zs7jJ3fasHL4bmBmgK5KXzoP7yegcmv7Ct",
  "key22": "YZxLRfEwPA3SacwFG9HB7BV7jUb1VWTaQRQkJJDPsMFqA1a5YxLqkAmVTPtGDMnQDT1JRnS3kuCzj92oafyYEYC",
  "key23": "3zfhVZuSpPvvM6J5D3ziF2CGVUFLGNrkgkZbTYyYUvDEwpA6mS6oM2Jmx1WLsHuzDHrmWt36LdWT1tLk2FMrRJTp",
  "key24": "UNf6dSWrBAAKLtgBewAoFkDYtBN5cAwPhsDfGGHT7PSxJvjALix7HigVB5nGsTsLHPPjnB1UETYYysBJk8BrwvB",
  "key25": "WsYcNHrtvu5Z81xRY6YW46mp2Xda9FkCYeDoR7w48wKHS2ZRswGNPVJCYk6sg26DUnGv7KfMT4ZqJiMJuYb7EYG",
  "key26": "2euZ8L1gF2JFpiCMPxq8rVep1bZpkMTdcccuUYcyse3yVnm9VYvQptn7c27niqmEuerSDz7usjTiBy244QXBXpoc",
  "key27": "3A8RkgahTBL8gPi96qqDnF1zcDUEDHMN5aYraW2kAKwwX6hxYajyY1xV5TFaA6zZ1qXWggtRgAjfRNWB9dZAcjFK",
  "key28": "2K7HdcMQfhXvqY68ct6vXzPVGj6m7ZvPx5fc4owB8qobRcwM1ENpQrNFVxpM9JnEK37KZJnxzcBXJWDAac1jfFTH",
  "key29": "aX1pBs8Qu2SdX3qBRVm5e9qDvrLVQ1PtNWrdhVvtEWmhGQjBWMQnBFw7DoYnPznS7jMJDTwkmZ5urXUezZ73tt4",
  "key30": "37uDPwqNv2CoNnsaoPchpz4UgjiVGq79bceCzt9b58YNFQVTwUnfyvYeoFiT2rHKmzkpAEegX9ojYqytxAT75wxY",
  "key31": "5HebGUewNM3XYZnqXWTYw6LuKLkqHNeZwgk2hioadab18dLrub64TYEkJJJouErGkgQi9F2BRBxxTHMcjRZ3W4Xu",
  "key32": "4X4YrEDWeGFnd6SfXm7WSJQhN5QjaoVjzuWW6mpsC3fQf1jcmboy2Pb9JLv1bA8QQwyHgnHtcmxSsugCvGEEEkVF",
  "key33": "3eKmTx5kygU8VpwBPBiCc2aAQgSNNPw4HVi2p9mworq1R6wPzDDgcPKQR5CQ6CQedNT9evTcbjt73Zqwb8zJWHeV",
  "key34": "2TeWGeitvqgnxiBwijrPYekH7TDf6NWux8pQzQmSKMvbKLvL9y2nhddSJqYCNz7mtf8XHC5roezyCFhRbuWQfDmo",
  "key35": "4fSzcFSr1bnmu7p3hC3kzMYJLZg6jqrkfGk3ppAq5DtFfjHFoHA7YiPBa4VvbBz6mpHgyGzy28xxkhT89svqD7TF",
  "key36": "4juj9XMcK9cjnYeqTfGWCZUDVraqhcj1wALLSzNrH2mqdS6GYVjU9Y5NF9YAqDYCdH4G2WjBCQDERNtFwCrn2nfX",
  "key37": "4gLoSsJJtM1Rhewp8t29kDddjvWpehjo6XhzC8fx3PBZZSaiWob2N9jk7CX8J5oxqkHahPCki4BG22vcB7JY1kDf",
  "key38": "5fcWLitFuZmFm2VYTctPXgBXi3gaAeQGxW7EVXjVxLvWBai8rEHYvXYADLoS6T1WgHhrHGWHarK2zLczEvJ5And9",
  "key39": "2s5MzQzN9YwaEFPCLE8Eoh4NieWibEtuBJWVLQ5xoWL9epos2Lyx1Te4FhDUUWbJX5Ri6p28vr7sgtZ1TfNh6SAE",
  "key40": "5oGVPDmuqaZ9pAbzFbRemPfimfCv613GXU32kWqLpkaTbq1EsyTypMiQZMyd9WMQb6j8b5ch9LPgfNPW2FySR4wx",
  "key41": "4NPNMgGipDn9GgD2RuZ8yijDy71cAjYW8EdLrath4pUwquUdrmv6HVGJpVKgMC1gQwZVcaaEP26ShS8QeWbmaCMo",
  "key42": "EjaDQfRumKSX1rejGDHqxc8ekLJuF3pPmbwQp9QuYGYhrDN5ED3vHC4747Er24J1uXshdh6tyWe2qBsjerdRBwd",
  "key43": "Y9UFVq1xLa956ibzcv5hZEtyW2buck5exhW4o1mVUbapPW3Wa8Ni1EVb1ihrvvY9SVQek83KyrYg6PLwMW3wx4H",
  "key44": "pmE4NiiXu98k7wnMC87CX8y7TcuDkwCRjY7aeko9LAGZZZJD6gmmGeBFrEsnmLXeV3AS87zdNTJN7R6D7NGcSpS"
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
