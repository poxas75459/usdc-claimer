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
    "3ogYd1xVFadfL8CRcXsuXtfLZ3xze8SHDg2omzkEFj7M7CBfrBZ9oYrFDKs4NYFd1LxYmm25D9YrdBv5uwzAWo7S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rX91LwEdSgxc3Jmyyxt7KtKAy6haGJnHjCnea3q6N2zEzaa2b2BMuMLqB8Fdv3HPWTrLmmRvh8io68pEPsw7zHt",
  "key1": "4XKeCAAbyv5b8cBeCZiUdn17cVmGTXnQeNtofy8LQrcJA66Uf1wakBxnLciQ6W1WUdEcoV3pFYpMz7f7yMUU4WRN",
  "key2": "5ApyZC6z1WC1eMz1dYapAT6sx1oCunBiTnYimgStDYzTd3jLrMLuL6FvAifpj92nPg4ZpBD2tALsN3aFaT2wsM7d",
  "key3": "4Y33mo5Hx77CXwU832WMmHzvrTQcDAehMTzHL6rA8ppMVC2ZpYxCSVY4LbtD5862Z4oinDEe2cTCsDCcW3pfhqPe",
  "key4": "2ngXvRb9XuqC4NuQRc526UAJN2ePaTRZjwhpj5irRWdFJDk1Dii6cR99UC78bZrZSVUoMnJxvBuMNBjYh36SGv9E",
  "key5": "45ACpx76mosecVUcLj1ey9fbDHxtb2RhrZhUPyTVaf9kmmcPYTBMkmnnyonK6hdhq1sHbtxum5MKDKVovcR5WF8E",
  "key6": "3hGgrdowZnB71kbaPMVtoNVCpGEtLQB3oh4wuEzE1CVXArxPjGbHgXYnKcv3z2fkz1692oBBYVTYgCWSCQjtbvz7",
  "key7": "53DNatKhBqk5ShquQQrszrXQYt9fGDoeSb1Bu5BrQa4qud54LWXksANyMvCkPKtSmucfXHE5jjjX1DHuHSt8ZkuV",
  "key8": "3qUqCWpT9BxN5QGT1Z68NP7EJqgMAtFJgXdvfnawDKzscF1onX2mdKMWvJGdVr66ubm7EnKVY2RREoPN6F2jjTn6",
  "key9": "BWy4TH8Yb22FHyZixRti2ckJ1mvcC6Y8WVF91Gk7LBtqPhqvgEPtNbCTYPWSBiDP9JbyCYQkUnMF6N3ZpKovKhg",
  "key10": "33UKeSDt17PSyHdfYSrwS1UeLFk8buWvmmpKcaxrvRthDfuiygTeVtinzqTLzgUDpqhKHrbbMC6xhvJu4ZAKj4JE",
  "key11": "4hPgGM3MzJQbZvLZjKPCvivoqS7HbRCb9sSFWNVbRyrBMxitV8VPK4UjQmebNaGveARNSCfQQmN7jxjFMPEsVTVu",
  "key12": "2YUPb1Jg5xj5DESWaVe9WkzPv2LPBgLjR93sc6cCuiNhZ2mhWUjooTxufpKDQ7bhkXwDePv5G83CX8WFXFSLR9CZ",
  "key13": "BFrJXLpoy4XvHxYTXzbhzWMt9nf9qBBs2BWhY2uR4QsLhLWsFo2jaDrWi8Dpn4QnH5nmmFCYr6cxaD5J4Fzdapm",
  "key14": "5KRETHLk1Fg1dADMtKesernpGY6SUwr9o2jJSijSaL4oZYCb9VV4E4cex1jLBbahkTUfbcamgqtMBkynBYjndQX9",
  "key15": "5vjTW32uReGYgJZDPXQQyF4a1phGJTLAQEge6xq13386yqjjwodZkN15q4VS363ySLZcbq885rEhUepUuxoppcvq",
  "key16": "2omGvLqUS78kgT2unqterTjzoSHD5RkJfEJD5tz5zZg62TcoGdbz2Bws8TExhymbyAatGoM42ouJzdY4GpTcvvBz",
  "key17": "4uRWjrk4ZntQd2vQQUv1DcUWrFbBvnLt84fh9sMWHmsEYjocJJ4CWsDAPVZvm2QjX3x2yzX1umQtahzL2U1cqqYA",
  "key18": "4S7eaAPPTDvgYsgAwUuHDwyiK1MPBcL5iGMK48AvhiYTwqejvhkc4u836kkRjw3c7fDc7sMzB8PBvwqvUy4VBZds",
  "key19": "5WzkDPG2CbuiPs7kCHubeH4jbPoTzU8iREiknoADCtUfYZBKvtCRFb3osmWMebZ9PAL1EYLWmktwfjs6LbzSShw1",
  "key20": "3LXB8yoUdvrTmfFGfeKpsmcHsGs6gfeQ1yByNGDfxBQRvQ7ZADmt9CfjiUHhz27LuoCqg6iQs3zfEnugNY22qLBh",
  "key21": "4ZaakRokbXAVeionstMyooATnGfxN1ezqfA2UvvtPJ4ZXJmGwWfJ3yPn84LaeT1AM3HPJT8Hpz2pD1ftnNMEsvBk",
  "key22": "5BjUgR7NZMbSy9LNxBk9RkVXP2AGwd2LSLfU4dJPFfk6vPLhY8N2it23Z2n7ipb8VfSjn758YochhsgW6MYaxtZT",
  "key23": "5bBN8CNadXvUVSTMavJBk1CkUB84mD6rEVEcSmeJYaLTBHLwYPCXNoy4az8SXbuBrVCWb8wAMtnAvfNrYXCa38fA",
  "key24": "GqN6zdb5ZjYPcRyHAKZQb6uRoGEtaB7eQnqrjhCzmvsT1Kn1gWRmWAvgiA1yGBAtNVgDohXF8Au4fNPaXmejdba",
  "key25": "SA5buaYd2P1JqoHcX2ESbkgja6WFA7nutG1tSnt7ktRAkwAK37i8HWtsGfwH5y9FBsyEWzkcQCtwutYXxKuRFPh",
  "key26": "4KpPB5oPbUdahUJYnZpVMtZqLcxB54tULMr5utRF6UvjHPBBvhRDDdhBQwZ6W63mFjSr81uyNXyfnaKPjBZFwuD",
  "key27": "2L6uZ6T8pn1n84EeSumDhnabBEXj1Sz2XdTzh3hoDACn8KSouVMMEYU8ESqrjgX6cL2xAXGJneWupmVKk4x5DsHw",
  "key28": "4XKiH8rtSkEHdFwTCGgLxyMnkVWiexiR2ndGbGQqujVjhLw4ReBN4zeBwuLApmqtEnYdJuzC88gsjm2A7oo8yNv7",
  "key29": "3UTQGTbn7sUUjeYt7CLjaDi4WqNXzXQYzKXtRSZT3PLmN4kJkRZ9WpftbwUccsQjYe4ucV1MeFCJmfDf86DPAzY7",
  "key30": "5DKuN6RYtixUSW1mpBj2KKc7gH6NCszejvMWuh9Ltut1tzUD4WFUwG8AvHGnwoFduXDg2uSgsYLpbk2EVVBsuNDE",
  "key31": "4oHtSZ1d8RfYnDn97vmnaFkB44RRLf98ouWty6BGruCwG89mSNkwqPpseVan1hkozhhMUuo9ovJZvxv6DpXrLz3F",
  "key32": "2qxmQwZrADgRR2w3Zis9JHSiM5KD8jaBbj1ZMHjmwJ3RAKYXPERL8eRKE9eKD4uJsvhHWZHsP59nzgNgL6YeDyZc",
  "key33": "3eHhB4ujYXG25E7Z8E2JhUXzLJcFvoKczEbetabNWFPERTJfo6mywwcWKZUS3JYY9YASqWZ1kEwV7XQ2tPe8MC5u",
  "key34": "5tVLL7yrnNuGVwnuvLMg1pEqzPRp9vwrAQqWNhYMhAMLw2s6zbiKU4s5wRMgJzgYwfEtjLUrPrNbquX823bBhRSN",
  "key35": "fLBzcMXYArk6N4jAQ3dsVJ2d2ongZN1CZmRywCrQurTX8ogPi1WXPSfJP3hReqntkRLHNU1PEaomMxnEFw3AKTY",
  "key36": "4GKRNYDTmiy3kbXiqncr9nd8EoyuM1yGRi8Xw6nMhE3wbYTaTnc7XdP8miyzwW1dThi5C1gn7PkmseJuasAD2CCX",
  "key37": "54RpNQKNsjkTBhEnJnSrjJL2J5QVy5779Hfow3RdA7SQi5Lg2gghbTmL761oGzAcn9QTTkHnMNBn2Qkpm2poZvir",
  "key38": "jXBwfXEt22Kvn57CUp7siGCa7694SfCwhM48q3uT8rj5X7G7xjAM2e5BFidMWhdiDa4KnEm1Z94FjZfhjUgx6sm",
  "key39": "2DszEDuj23qZYJSWynQYPHdwCUokNEBi9Vrcdw2v2YCrSfJYEzwEAzHRh3LpUqxyhykgQqDEsVc3VmThjdwam2Zr",
  "key40": "4DLDf4ZTcKTpUEUsArPwQfACVKs3hJTN1D4TBjgQKCs69BmCmAUw89X1fG933Taxbxf4UExN6JPCDV9NUBTEjCBJ",
  "key41": "AsqRupNDHCJGRJm5q5eom7aqTdsdQJ7hDWbU6qhMwSMK7fTBUHuNLKM5Gbm5vdXz1EBoukbFxBdFtaMz5htmmva",
  "key42": "5D4kEqfQYVRyuzQQ44u6ZoCozmfxv43pH2n5E6XNedww7XuyUxWK9GanMKYa34GGGvUguK9JD9mH23Knj3cJh16c"
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
