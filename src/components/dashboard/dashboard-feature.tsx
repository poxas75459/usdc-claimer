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
    "5GMkJzTN42zTUyGT2yJRy2LwcAr45gpVVo9uRvWEzHfjuK2KEem2LbvLdqBysYNY2vRvWyD5ZV2oH3wSjNNCdq1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GWqnUYiy3X1rq7gNEfX7N2NvuXFg3Dk6cbwRWfM7oKGey28BXAYKE2VchBavkKWB9atxegRrNr1F5zzzEXg9Xkv",
  "key1": "5rq3zENf8ihnaTBk17KbpSsTzGnSRGbQtyMBiS9rZVqJUpf1PrgGFFi8pC1GppweNtVoULj5kdPHtZ7iiVroH7ez",
  "key2": "6Uh8PTdJt6XhGjRwwMucJcjRtvEkAi1MX63tLY8KStEKqChQK2nmzfpXL2JdUkqfjvP4ZUEssmfkWX3nySZv9Kp",
  "key3": "3hixypNDN1e4941J3S4JyUXdknxLPGtuEKWbWZP9Ub1NT2NNPREEzJUd2N9kP6D9TqsDxQqsXBeTzUwFMTDKWRLE",
  "key4": "5Q6ULNPe2GuscTcUUq84C6xQ88UjNRHT9yhYKzrdZVSk888MPnjRyh53Ggdv6Spkt2SfE5e2UghYFKUVVuac7cJb",
  "key5": "5qdL4QA5wrvBi81GBqqmKv5fVuoGr1M9bF8Hr8uJe8cP8FEY3V8YGxdVirxYfweA5vYq4rMkc6KT3PHLsKUyTg8t",
  "key6": "3vYMp614aqUCB8X3YpMFb7yYABeSVVGqACx1t3rByKvLeMGu1FYcqmYdZAP9JsdfCbhAmuJS9bcwqeSqx8qMYkmw",
  "key7": "i3QDxskT4TDXN6sQkjfziEEAwg6ohCEY1i3CizdQ2fA8Uag6tkD6qgUxMgz7Bteo8X4sFx6ipruRrrUQCQKpUm6",
  "key8": "33wBMDSFTRkrcGgyodNKapFgaESmjEaStJqqkWAzFZ5wBQSgXcigimSVK76esBmEAGSNAYV9JxDZA7V9DnkC6T9B",
  "key9": "5Cm7RwXx933VXkQDTrA8QbuYndxC3fxBAPTB4jYDRnMYJjS5tQKLm7yN1VP52DrmQGiSrT4DVjczX69H1B6DEEau",
  "key10": "66FEZX8QcuXhQEeFyj635veX5m38rJcNexYAhi1hnyfkzW275tkTF822kAueKBcMpAJTVwoLtK4XMQJ5iyrhBJ2E",
  "key11": "5uMZWnVhFcvKQCAhcZoHM8wQp3RYMuAEuQQbW8FJo27yrcz6yUteKTP8W7Xkrpo3oc6DigvyRqzzBqx6h9CFEnU",
  "key12": "4hN5VYtaNDA1wtNod4ZVo3incgCMppj9jt4skUT8SsWk46RzocQuao8gJ3PqVBJTbSFwEkbU78YPkimmpdvFA9Xz",
  "key13": "4rYoM7HY1qACtRACf4RA5ZbqQqeb9PjFAdj2dxLGtMfhvBTSnX2yx3vbm86L2LTPohbGTNRkqf1hnkKvkRT4wCQJ",
  "key14": "ap14QjjYmM33yhXbt369ZVnxHeG54QuVtjXHDuYbH94rD33NY3FigWnQ9vc1dDKof9ET8eLPHs3QAhJT2aHaaq9",
  "key15": "4r7GwRteSNGsWZdiMnPBETdHn7fUc9iJkA2LYc1WVipVPvXAF6gqrqtTekTnr6jMggGJqLzoj6rQYhJsjJtZ3PXa",
  "key16": "5okchj7wfEHgb6i4iqeJHaB2i73iPhjh3c6iCUJMdHAjPnFFScTTfSKAPYrBmgVTPLFhJyTZfaT4RbtNWswCsn3i",
  "key17": "2EkGLiDbTSrxY4rT698diEJuD8HYPoQrAp1xrxGqEp2PHjrmxfW7Xvv9gNkPMkw174gb2j9Wzvv6Dom9DhYsKbzg",
  "key18": "6JMQc66RnVHKtTSQnmbnaEibFFAJbzgiMKFzXqYTLqbBUCwbUvCSKtYoNspCwPa4Umfyy3WRX6NZNNd28ZTJc7c",
  "key19": "2jMNkFRkFJ2hRB1T9Hbr6Ar3Qqj9y6mVHwY7r8ZjbmnCtji7iRsys6qRWXMsd8T51RVUpfgo2aa4i8NLMLRCabAC",
  "key20": "bp92XisidDPJ1CLWs4SDkYR7qTcxNyiPcgrYFLRAdDkp4vbssoLemnZ6fifx7CrexSEMaefgSQRf7kqh3ViFny5",
  "key21": "2ptwygSfMQH2pnPGt7RuGBB5Ng8fFFpdGEtunu4yfnm6U8Qzsi7jrrEnHSkhz8ZyoTzZbecrrJLkSDaqoydFESeL",
  "key22": "ypR8ZaWEsWcSvSvfVqiUX8Q4ci16NLaCMezae9BB7TxK1Go5KSS3vqEe9JxfzU5yD7Y5CesQd8BUZgdZiGcnkPG",
  "key23": "4xQuWCnT9npSNLAidToXtWXNjNnk4KfJgDE7gaM1neKLrgVsM7dwr1ERiqNQxupJnF4xgqnojkKbhfKbX4iScVwk",
  "key24": "2TiiLunmrejrGUKydwUqsfoJBiH6P5sDeakoeCThi1CZYNCQmVYe7MuZ3t3EK1PNtJ36pQHjj8N6d4gMLuKQpWr9",
  "key25": "4e2PRCqX5B9w8tgDjScs7edyNy75faayzXs76b2jNQUzNEjPHjFwZebqCpvtyppofqJMYna6QchPmhnpPpx73Cyh",
  "key26": "449ngNBMWMedxRNmctnpmB4rY1tZs6fY3Xh8cCF7MLyWnuj7zv2yY9uMmCEqdosGtcA3ar8Pwg7vCrxFtW2X9syT",
  "key27": "5iTwgAZcDHaTAJLJZ7VK7q18xbRNohU1zmrCn2By8Rj9yAAAYkvByCndEysg3yLsM6bi3rBpeYQen72DYgRzmcrH",
  "key28": "3GnjB1UAVmNLEmjz3AqszPLKCMbq97YP45qUrkgtpFxpbtkecBbQgsMcfUc3RsmYVomtCksrpVMPzyxTkJcxnEVX",
  "key29": "2g4tAC7e4FnDJuNZNChyqaXU7XQ5PvgBF4DGFbpt5MpZN4Qx8Q1uA7EjzNkfMn4RksvYQ973gtCNe2uT561Ea8YX",
  "key30": "3wSogVXxcVJKpLhTyEVvoXUj1jv6e4uSaYbQAY2fsBuYhVQkv6Pjfmykr118VDYnsuZEfUz9mN21WwCGT26MGgNX",
  "key31": "5oaiWA4D93cS8cFdTukVyoWTHTzSd5Qy8FWbcMjAcnbsq2LBHcikMZ2ooFALCdzkj43kzhV1HpKBoc8hA81njTMT",
  "key32": "5xjKzR1i8of5DVShUS8tYfAud2yG6fE3ALVtLejpGGqff23bfdN2vubKcJXkzoUfBY5AJrxgPey2W8b78ZwS9sV2",
  "key33": "bfc1QmYfRLr94MBAKYoYExifC2K9e1KfUFJd9oX3vBQzDC8WsQMQnH4jq17NB4McuL6tcpFNdVsi99iVYiRgBEh"
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
