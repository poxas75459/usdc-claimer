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
    "33qpjPnUJjPGabiKtvorSsfus72GGv9N5QLH6Yfup6fdiRBY2SGuRQVzRq5qZzrjsxjYdjBBFPEuHbe5uu8ozZMv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aCWGNuyC9ethVAD84cgNwbsao4Tcxup4cGyJsag9c5252Lw9CZpc21wiYcf438oLdDUaFSkK3S3bJt3q7Kr7ruu",
  "key1": "5gJ8whrRxJD5GNMEfuqb2hPt6mpBnLTB7RXUH2hBCXiPn7ePqM1LNpZi94xZUBoUiK44p6JPbo71GRGmrfVeopeM",
  "key2": "4y2B27MoSfSNQ15kNtdtgnTgUrWACETbzdjXHX4CgH2HUP8rS3Ut4Rg1oy8eKkDLA8w5974NvFp59UNTcsH128Fe",
  "key3": "2Paudwahe7bQ5A1Kj4o9hRPMVA6t7AFAkbZp1edfSBr2YxGGeNm1wAx1bzjGSsBzLywaYfF9gYj3mhssCKNh5dyR",
  "key4": "2WyfpBTSqNxup92dTmwoSBVtGST7r3jASxcTzbn5An8ZXNDbHQiphAFvbu3AUWKLPJ3HT43fgUbodkYcdszALvfe",
  "key5": "2dqQKkCqijeYsM2LDPuMazpKzf4tXPfhNCbNowTNqPRxF5LEiJ7ptD6BMnQLRfX6RdBrtVtR6kwJzrDXeZ2Cb7b2",
  "key6": "CFZaScmEg1GrEiAjAuzXVv5CALzJ53pMpzSGerHxszi1t3mWUEeYBkQyorHKn4UsGABAkM5Sj8Kq8xrWk6o93Fd",
  "key7": "EKQ2wzijXsBeeEdzSa4FFhDuYHLaMt1XvtvW41ockH6fYQbK4HHFnySVxcmTSUeDkNLnkE5aLaXm6xEpFQysbHo",
  "key8": "iQ8ec3NUyHr4NdHobySGhm1n1Q7hRBwmzxiyW7eo2jUzAhg68VEMVP2DVviMk4X47HskP2WthpDNZMXNPbcGdDb",
  "key9": "h4g1XmdoHuTd6JPj7futExomfizMrAdk3zaUaYz7RHheP6TfF9fDB8aKzgm392YjoAepSJCdUspyWvszGsJhvyB",
  "key10": "2J5T8ea7BBQLyQV3ztD4UEgnApdsQtDzqtAL2LUrAPuoFw3mS2q5611HzDomUM7EqApD3XWxbmAHGq5UYKcVkyWv",
  "key11": "bwjvKEPuZAKCunJ52oi6eMATJbztck6FEgtGZFLnTCAPLTWeay97e7ejWDKu45qvrMJmS9b7iLGziM3Pca1AWiB",
  "key12": "4kJWvDVLQLXjtq27Pk8y4TNMygREHMNMN1trkELWtj5AuHfR4rKhggbcBUYakDadZb7imSXL1JqaTTFFahhWTnt8",
  "key13": "5enLXsVghc8X16BGoki5ve71Hut6jzD5pewfwijVoSjTmQSyPr1JgPQWQ2sL7zjJtdgAb8pn89Fut92PHpBxYUAy",
  "key14": "2k13HG1z8sA5SCKJ4WSaYbt7fi8od99M8i28kSXcbqZvbq7L7cKCcZ7PnTosLXqZ6tLZvKboMGKiBG1Zb8nBAiow",
  "key15": "5iYLtKmvrYLMCeQQvo4RcSnSHwAob6xjMYpg73KTNgLQgzXtU2QAG4bPU5L2CAKLt4sLqxjBsV5xPgk4g6tbtkqd",
  "key16": "2dxKhBcDoznK6uA9w3yg3RAzVisRt8y5DLJThuE1mkjye9egbo3DXKRhtY1CvB5uA1w5sTYkywBKav7LCBEbr4o9",
  "key17": "4yBUhqcrC5xijVciWsfuqW9ArWwHm32X6KzWfNsXZMmuoFyYrsWAPrc9tFbRZNWKApedEngGx9QUs4jaHmkM6NQ9",
  "key18": "2asc4j8Goizaqfi1eduZGQGRCyyEd32fiRMqdqY2BwSqtQVUcStebi5mqhB2MNJRVL1zKntWVnJPSbNZUvUfUD2j",
  "key19": "5DfXYNmP6CLfoZAEYqbyUWsUfDzQfSWVCcRvf82VEBkAxUoPxa11XAyDAV5VhQXD9j8neybyXT1LSLQhGqTQgWup",
  "key20": "3TdJUiswQpuCjDsZPjobAKZzjHzzoFdGbp7f3HLa81dMCPKp7dwt8nibcqMnmx7qco3Ers2mU98kvGSB33hzjtjj",
  "key21": "34Ui1N1qTBJ38JUSG3UAQRQBwWGj7aDrFqvJukvMhYM4VPtTbJ2vSsJswJKjk4rs1F2mB7fgTpVLHNxAJZS1TxSr",
  "key22": "evd7Vz7KCr7zodYRHhSoQnVhVcSKwFj8iESXgu7SV17as8tz6pvR49hT1LGaMiQBg6SZCGVTmGyTKh6shdCkBEP",
  "key23": "4HFgaXoFa6HmzQsPCHxYsmVYX5BUmPtSopu5p8Q2xH4mVS97HVRPLyDgJzDqXraggtPr3uQ83BhbkTkF9iZNLhG",
  "key24": "3CiYuC57SqceTFU96n5Jvycw2UYUJnpbtoZaBaPNfg3fQyXA7CCBME99yKJKZMaLXPwmLp1Nuq2V4tbEZgLQ8SNH",
  "key25": "3ck8fBF5PAFSeHPFCKD7YGHCNvkbkoEEh4X3w56SR4QSCKRyaC38Y3wGD4ZZb7fhLQXXPSg6dh9nTXbSXYkVvtEw",
  "key26": "4ZY5JVmqHA8c4BZSjZds19GnT7qwLVFNLKC39mK2ofMMEirqmytf7cxuSSqvNWWLdQcDN6sd9aUTGXevLz7L2MFZ",
  "key27": "4dzGrdotDtzLGjXxuuRsrths7v5QtphBM8KfCqPALRwZDwmud46nDHcctCe9SZUDsEGWHtCmFcqpnMXXq8MtjgY",
  "key28": "4FwbwymUMesvMhBMUizpAyv1AwxGBWAvuLVpCarW8KW41LHpFtMNswmqSiTGtJth5CnQSQXaa6HW4r2Uge6twnUp",
  "key29": "2djnWwTRoWh2JPHWtfSygjvKkt4rHVGmvMdTSi1f66CYKfuHdEF99xRJiA6SVUH2oiU4yE49GVVFn8CbHWmVtLKm",
  "key30": "cvmWhMduYMWkfMuWXNBDGpw7p1jJuUV8UpNZsUKMD5NurXq9pYZkruTNBB4q8yp9FzUHPfNjMf4dRuJyDjyr3Da",
  "key31": "55NiXLs2e3kN284kunXnSnuHBuJd7BFDkyLrBdYPVTAATboDmNSkpV7kLVZCMKis4M9Thb1rz1iuuWY7xF6N52qR",
  "key32": "3f5XfTA36bLVnBqjqVfNkmC3Jk8WnoAJS3QV5zyDHJUK1ocV2DyqBQcSjmUp8zQ22D2H5z1EkmSBhCvbVTjBnbxS",
  "key33": "Mu2SbJd4UzWDsHeqi97PdWyXWdFLRyGDno99jeWcWDr3egSVYj2F4mMz1N5hJP3KbmT85UfrENLjZ8Yv5BCUoBB",
  "key34": "5jYeQYLnrG6N3uvYi626sYnvbBv89q9qkjwwZRnZQhxqG6bJmaxdhQk8R9dawPrngHJJiEz6VzS1wqQEQFbHRxsS",
  "key35": "CVtJ7zQvxhGANTb5j2Yg7pJS1ndq84SXuSUTamoXkDe6eVwsido9S3PH3mFFsmoXqLx9ueJbSB64rRM1BF4mS6s",
  "key36": "2B8kxfoohpzpChyrobnKUL4hMNH84Dy9gUunVGUmUez56DyVRRKdBn69ehVJcLhDwnGwZRuJS5vs7XMfatrDyPxF",
  "key37": "4BHzaJ4Kp5hJCWNm4LJpPPN9EKHT2MXRFgZne2nfaddwqQ4FvtJn6zPvLvx8htEKV2YH6nJa6an1aRKnnYBgEJA2",
  "key38": "23uaQ4e4PtJV3Wt6ddHgbNZK3jnPxpfyYu8xBBVgU3C4r8Gu5DFBCMBHFG7jmMkGSyYvPKGpHRH3kGZih2G8P2gC",
  "key39": "2obayWW4CqnrAzL8CUcyCfzprNWusCZkp9p3HNzzYxPJ5y7UEGCaR6iSCcQw1L8qDC64y8Hg4AS5K7McUtLjxKxG",
  "key40": "4N2NpDAGhEJELsYWGCfCTpAvty31usoMR69q9URdemUaekaH9zWMQZkiZMjvfWQGNctkox765rsEyZ6gpEuqksGE",
  "key41": "2NnAbL4NfFgo5jFbs6ZasPW4uP2bZVRockMj89pQChNkLx1jHUVkbfqFinU9AzPLmCiiFXHSbVi1ajc7D4jiEh4P",
  "key42": "4AkgmYdwP9mNH8fRkjBFiX7n6wv9SyH2RCqCfiyaYj3bmHCZF69sHmoxxpjHFA3QViF69C1BXLbBdB1Vho95qZoE",
  "key43": "5eFCaALAL1Wd2y2LimuwgwvTJbVFtXWVhJLhJV4cWgcxLL69tRf9kgjDwQ6DLM6oSaLCciHrtxUf4UniNqFU16bM",
  "key44": "2VKtFjXu76KbVDcE7CGXTE5yuTjgvj1aPcM8s4RZCW6BHc1dkRz6bmve9D9dB9ZEtTYcbrWpc2zu5PKgshBUuR5a",
  "key45": "budRCfuTY42oA2orTZaNcnaQr9ykoQvi61ZeKcobwDGRPv58dt6cp3gUPJasThyKf8t3o87BU8qXGo8W651HPb6",
  "key46": "3bmxQ8kw3AAW7zRSpf45mAPGYAZRLuQo1yDVjxKd81XXgr46AnxqrdkguSuc9CakXNhdB3BbJBd9AqZNVM1yWwRH",
  "key47": "mqVdXPLAGQ74SiM51x8jEFGj99k126r8Xu7UhR7CdLgYtLXb17FFYw9K6acfQGCyzGugfRGrr6QTRMckc8kbwbn",
  "key48": "XgiCExhq973GUSGAbt5X9FNirT3pmrmx4JWd6zgdZfpmeDH7aVxjD3jQTKMKGCshovxej7cHuxB3Z94GFT7hBPx",
  "key49": "2G7THgAW3ZcJaaQiZKqzvpHvtaBqHcm3suxppBdP1DGa4fL13f92h4xZ6foUEf5Xqb3MZQ49LQuQ1iWyrgDTm5ES"
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
