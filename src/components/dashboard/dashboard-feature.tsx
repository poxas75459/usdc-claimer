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
    "5fZBCMXx1HyVaTFqPSpfjVneREpoo7ZcciJGQsgzn6dxJTAESkJVo6RqQWQtbFXdjyUDzTMEbLg3cfEYZky4uByM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sMQtZb6sfLQvD3tCjc54QHZj1nzB1Qk8dvSUK1jfYmDSyFnFDBjaG8Ts3ysrqUsGF2kWt3cjLNPuK3Gu531gQ5N",
  "key1": "4LqkE9cTLYjcPWxSvG5rUMsVkbUKsFoGpVg9cNJvnkRxHrWyS8dzegM9YjXfGEFiVCosF92K8nrDEbhGpajQB4ib",
  "key2": "2bpQ6vJAvSE7AHXzBvGE5U5U6PzhEGy5GEjprFYkAtjyXj4kGmSrmCBJmACTJDwpkXWiTCJiuJsvgK5wYtsrHyU6",
  "key3": "8jB64gVKz9wyvZWPfiipQkEKtQYktve7NuXPu9PNdPt1vkde5w7XUSja8kPcLrXv4yfAJkWev59CGSXaXMRtPPB",
  "key4": "5W4kRTMX47oqmjkWKG9BMZKyahjTLj5Cq3cr5pseZAJcpaUfiuxsmwXseJkh8MQxpp4nQY1v8v6XiNjhG5XXALhK",
  "key5": "5GJU1jtNTuVMAxh9e1A9hAFVg8PUPwLN4feKG3C2FWJHdZV52nVFCUfBuKaSzP8ijYYbUXRdCMRfx4rtBZqtroq2",
  "key6": "4RKaYSpeg47NKdoUBqaJjMwK5DoM8tviqhrAyXMz75gqudZAWuiqsuHjEsFLK5t2xK1DMWECugqdCNrubbhu8t57",
  "key7": "5BEYXCLiGSbg1ibssoskwXS7UevZamkLJ1tJg5HvEQkSkkad9jJSKJYV9p3djCCSEFfmMzVVmeS3vJUyNGDwEJPJ",
  "key8": "2gcrcpPHwQ3paD6YoX4zAqbQwRsEioUMChTkBwA4VpmfkxLznASvGoMgh7E2RDcKproMg9FSMcrp2cPCG12mu1dh",
  "key9": "4UMcL9zDMDQmFygvTdRTRchYjeqUYFe4rDS9Fr8k7TjhhnZKQgnynJTzThetgTTUmWGnSv8otkdZYyRtbFcURaXx",
  "key10": "37o4ZvaWBT3FiDXXuBLfEKFnwWwsZbpCPvHz6TLT83jDSN88cpZyCfGvrFzJW5YEigUXGbi9xEMcyHeV2pWu5tLY",
  "key11": "DYgpJSDWfJndSxUuH39Ss23armSHgd1dx4BgwgaFKftbn5SnahRG58SxSD8okBr6f3Q3AnXxBvfLSn2MTu211Vz",
  "key12": "ujKigqCYGi4BkUr4ytxUjf1PnBDQvzJfNPLYBNCT34qo3LkTvd6xVbXBMrUdhSFgwNDBK2pLbxowqo4WdbGnejp",
  "key13": "2HBso97WrzbosJZQ5NAWXoNGmW7LEVApLQp6tWo5u6vcPBMn7AqaxFdLjfzGTJPTWVds6j59a6GARcNBiVeJQDXd",
  "key14": "39aGVcCGgv935h6qieshacxYvS57oY5Mmr3UnT2XhqEXW6VbpTqY1bXjhdYC7aCo4MF7AzqTUDdVoLrAAY6Peg6M",
  "key15": "3HPcd1cyzN8YRpAmJbK7mFYXqoXcY5tjV94BJWkKWB1Fhe8zYDtAhq3PptEcTb2on2TB5Z4a8SeWypCRWqdHG5qc",
  "key16": "25M7do1Fep9FTizpFmvoZkXLYW1R5z8W14eQFcQUjsbWAWxgfCGL5SX1PXuYhZgc7tgTrNDvyyb6L3eGxfEJrTVg",
  "key17": "s9wTBe7PfqEHVESnV55GEuuA2GcrKweRy5qbV1PFSFdY2NFLbtyZhgG4gLHmMx6CPWHJ8yaREkh2nDpUhGxi43R",
  "key18": "5MwwB7PBnntTdtxhfagjHhhMytxDyemiRN4sLn1L7sqe7hiYGsb7YzQ2oXbiqn7VEGawqTePuhzUZ7BeiLiyj8Uk",
  "key19": "osjZUX9iirgeLRENCTBDeTuV36qkBfmncEeGmgKAwp5YTZghagSL9uVjPDwDV5h5jB7oZ5VXHc5tJXa4cUiWism",
  "key20": "2KQ5uL1UVSq5THtg6Bwq91GKykULkE88MFhaVMwzvoY9GcWGi9v8ah5wLNg2E8pzYFqqCCnr1xYiaaH93xnsGJzn",
  "key21": "5ZBoVUBc5j3bd6in8r3UEGX9WVNMFjD8U7n97z8wQ8EfAivsKrsEKUkvPDmJJAcd7Pu34mau5rbSafRV3M1KpVu5",
  "key22": "5fLWW77PcmZXd6WdYV1SirQBXZJpFHBqcQRMVG5fLcZYR7dAS1n6PHQz36NFdzdUus4wSoX3shFsHJpShBBBukjE",
  "key23": "3QJPAJ19F41JGUcaAFXrexzyqRccyidrQBMyjgGP4i6ezD3HnN11aHZ5grsfmrHSCDXsCTRDSUobRuRT6M1GN999",
  "key24": "5AZxViHrw6K7ZCKKULHgKYzTQgeMGayN5wDmg6SKcwNxE8GjrK8E7fFGyZS7vMCsJde5md7QWx5pSibn1iYZPmSE",
  "key25": "4DHeSLMFdyW9C7viemJzdwj9XiUdh74SPKdiNt29mrhMvgS1BkcFQt3kjqC2EWpPXb6pqev8MVV8BNTEgaGpaTcT",
  "key26": "3rbcEx6xxfHFH4gQpZyXc51UwR3dCkgwUptfW6eqGSbEmata3vUA3pDd9QH6eWMQzUpPkZGETRPob29MhSFZ2P9K",
  "key27": "5ML3RypF7AC4J3x6HE77XDqdQ6tRga2trhkaSaynhxXchMoE1GTpTzxQ4nqZXMAnn1xBW5TvLNMknVw4tM5bd6uR",
  "key28": "3xctBRQ3xhaZWzUdVyaLASyqUc32jJigHDPdgCBpMnAzwVDLcbucysyCMybMEmYb4NNXnXGkLvYjawXtzmJo6BLj",
  "key29": "4HVXgnkrm9fCdJsh6aBjz3hsfD6An33Cv6W6W742CbMiMdsVzmUwHREcwRkmRisbYeTVKHcGcFpYYEryPnXPkDhv",
  "key30": "2qD1TYT2ZJWuS6EcaKYoW7epdimZVY5u5RCznQVLNWacLTr4kocB3saScmfinfFPr17CdoK2BJqLu1ZuEJpfjy7A",
  "key31": "2jYfdLVXvjL9yBsecbdLL8mDXyy5aM5qFPonyCz5V2BdL92ELZDqQ2uSmRcDwtK9vjDDg6m5pVAcJEHBWNvqq9ze",
  "key32": "9WJXeKsg2qYEqEQ5hdwoeKEhdSLTUR99cDhsTMLNruJD5ZrRiqwYdC41qyvcVH1Ui8KaCqoJ6dfi9GdnzWGJHxH",
  "key33": "47AAcZwZQzfECU8npN8AR3xdhmP2GUonDbt74XVLWurdftQ6mB5ZbBN7RJBfZ49wsqaM5gR3KSFsDtFoW6mfcBx2",
  "key34": "289Ys4mvbMS3sC6K26XNXFz1aMeETEAboWDtjQ4Dpg6eiM7Do4mkMw4xwN8v2HyjNd1gh6Y9GHzHpv3b3Z5ptFTV",
  "key35": "5rwqxZTWzbzP2aEryiJ2ebmvt1FeCezzwyS2mJuVdeFaJzZNM3N6ZFWaT9uPb1eJyrDvSwX7DrgwDRfc8GM6RJxC",
  "key36": "aVcMEVfBvNhcx9V7rYLMPyoPmmTWHRHfg88AuyTCLug7G9aPuX1BiqKf77cjt6R7cBUVQL2TDwNLLp3rq6XhNJZ",
  "key37": "4iTWvA6ZFomvB7vLV4c5A8CthUyDT7JY6kmSeufsRZ1y5Ys7P4aRDThjxuNNBdsnpK32UE8iB2AjeFCDsf9ZYpjF",
  "key38": "2xLdYDDF9RuzkpwZtFy5jGiE2MgWAM2hiDZpsYfbFtFny921tojyQtrzdSRDm86LXbDgV1zuj8eKxjLyABJsRV7V",
  "key39": "65f74n7qSWWNRmf3ww8iq1vtBbVgWtm9sGqZUhuMbEZp5P1LxQKTHX3hKfJ2pUiQzcABp64hNfdWaSxPssJ2YU4N",
  "key40": "3BhJnycTrSx7XhjqFBDsnPxScps3cT24gUK8hnYVriAM4GP4eiDGKB9sKHn59LcD9CEwYSNJ4oE6W7PajSRkAScG",
  "key41": "3khBoCrURtru5WfbUymrKKwz5dyDCWQbKhgJi6XMBbbprfygtQtEfYQT8cTtjVfokUTEXVPPxB5zhgi5wf3yw23k",
  "key42": "2QdzKSUG55yudqyW4NEkJDtqtDQYm7WuJM1B1fHdAgwacoqXmGmV67AGiZWsUs8PNynADBk7uYcwYzUoJXPDFgMr",
  "key43": "4hFjhoQBy7KoNR7X8K6nBJFspEEhd5C16WDniKqDhCaKfC7fmmxUfdJJbZKPTq9ZLcbbTsVHU4Xh1kLnEdeXw1KZ",
  "key44": "5duymtZANym6DenGivFVnT3LJcdKPDVFFngRWaPucxsVxTYEwsHGGbmxUkss4XmYdLHpaxe65UbJABGbKKFAMoFv",
  "key45": "3PpdaZaStG5jpPGT49erVMmy7acEjmf11kuMHPSgniLnuD6g6RGPQXrvDW7wUi1oZtgZEoEUUyCztKvnf9epCXvB",
  "key46": "4JMKgGmZJe1Q5TKdTmdhycPdbr3RwyV8TuoM9ETNkKw2Aa4KWzu97U9NL9sSifeWYdxih7kdrPEDAQxiV43Xz7vS",
  "key47": "3VLNeWesvb3J4oBYjC35xu1QVyaSqkjUgnE4CJeRW8jNQ6pNfWN4TdeGqhHiJLy2m37iGt9H5gQ7fGNbFX4ZDePL",
  "key48": "55aYUtx7WKnrthENYmuK2u3pFpTrRHPXXEKRj6qgpijZGq7nhWjjjxamSp4ExNBGdYoVtq52E96uv2VZd9tjdjD6"
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
