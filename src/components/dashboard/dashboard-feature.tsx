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
    "3iPuMrGRtJ3q2hQei4TWGZPrgciJDCipWWtzhxScoFrdpJM1CvBFV3o3hGNAnFpfuDH9BXQ1k2M3vRzD1LGZ4Hrb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5i5HdesWYX43zDmJRo6tRHyFwXyXn3Yw6ccEpUgxWzAGcc4thXK4U7i9CpxtPhh9aMzrhAAhtb8nSmrjdnS46rFX",
  "key1": "zSwU8GRpS9D8mYSCKWkALYX2mwQUP3654JhMaS3SbJ2jJtGC3oqArpxsT9wUppH3VefxqnQuDHUg6kk6Qrmm2rF",
  "key2": "T1QG5tfRrMBDZfqKV2YwvecKTWmXF6mx3ZTiLmLc47QQypvVr7VvN5FrqstuvbeNrdpbVtAj1eYd2mtaGiVJHTb",
  "key3": "4AyFK93jfNbuNPiukxnoH63rnMvMWx1QoiHuggVeCyxrar4xFLRuWKY7jQYgwfPjQ9AYy5cVBw28NjvnD7CVQBoB",
  "key4": "46vbpuXoDPxkqB5iSZMKGvmQ9hC6yZjbxwKT6mGofKijAZeK8hvRVgqoy8rh1T55iHHBJ9gHtWjJRuSZsQCDfKH4",
  "key5": "7HMJ2i1CUmjoGxnL7wWVHZfepUxEeojwixiqj7DdNyUr8S9ExDNrNLBcnr1tXpekWwxiwsyYxrCBLGXbSt7t8Hs",
  "key6": "wyDoboLEAS5Rs4pYVZJY7Paxrh3F9P93avdeEKpW6gxcoJFJMpcDtk4gFT9rL3Jw1jqPWZnBvpme47ah6EKqvxY",
  "key7": "2uZAdFfYstV7SXiupVCvRAuVWS8vHiQuA5ptnfhDTkNVGzr84d1StXDAFxv92WBwAZYwCWT4ZPqKpjtYtYpzn4Vp",
  "key8": "4Zbzhyh1cadewiHHGkDcg39Gg5MiSh6Lq9T35NPZaAJE8x5YG817VquH5AkWZbLpuxZDEDG7wWJSfsBDyhebV2Qj",
  "key9": "3YZZcopraaP7r54AmE1jXXjwzqQrGgSq7SXwLS3ikRRZxAnqDYrV4fVi4EJXWCN6QmhYLp86dNCN6fpPLqDHSco7",
  "key10": "2v71yyKVYQTfYrUiJ7cUKqJK7GGUtt6kqZRYaawvACJyovUFBheY9sJi9Dt6MLoiDdBDLHRQLpTVRsnSkk1vPWUo",
  "key11": "5naBBR2vXepyvCGDmzaY8qABHqGCafKVaQMHSNV9zmLCjhL5zXZc5TnjEm1CvazfixrPaspR15vECRioQoXJUAt",
  "key12": "2qCtzA8NdYeuqsvxuZMuQBCEuyhoZm9Saz2aAT8kPpNijMyLwR2kGN1gXnYboRBCQFuQtTqJ7i1LgqbZBfFNvhAH",
  "key13": "3hjWWrpNSBXFJQpM3JAengkxwj7LHkFGN8sBgZkuX2KzMro5TJeHxBob8BDLMGuosJShcMsND2iPvvZ4KqS2gL4d",
  "key14": "MQDzv3qiNXVXQt6ybZ1rrmAf3guM9vfYzLzEzXUpMrdn7caSGBn1okskhEVmwY5hFNazapGLVqeRckFSbYsxK3w",
  "key15": "2B2zyjm3FHEPtgRqs8tH1hZWqP4LG212aNNQYbX4W72hauULXksYZK9h2AFC67R7HttAeYs9YWCkzSbuoh5fZFsv",
  "key16": "26AsF3fFz6dK5BAMgs7BSgN1UFqWBipNYBsgTWXVe4ft6EsiaGRuazhoD5CkBNWutQFCB8E9xJBL4XVXj3b2pQZU",
  "key17": "2L4xbrkRW5PzCX3y2CPR96ukRwe1CSBeZQVUSu4UXnMR8zHsZy7Tz2WrhUnbzEfgMR7fWTek8htpxrxa9iDPCyP6",
  "key18": "51g8MHvrWknwVXjF5oaGcyaTqgU4ZBRTr5jUad6PCgsc1wknXMPSxybgDz1QjPdhjHumC56YjyGc47XKtNja5Lxk",
  "key19": "64ET169XT5a7LbKJw4KitMSZuL7R9CTzhMT97zhifudtVZCy7BrxbfU4byJAoEPazxeVkzmtddW9V61yaCSC3yZc",
  "key20": "2EkezeXU1SzSQZnRPBbkDdLNFSV3CPZP3DeU5FcYCBZMa6NxhyG4FGESefrNzcoJB6vdiCgS2RvZ6KkXYvaK6o6t",
  "key21": "5x8wP6pZBWp4XPHEN9TViG5wdZvkaYnFAxPxGwr2HxaaFWhJWCUKodDKfUTBYpFaZtGdmRaDTeXeuEzLfzq3dSqZ",
  "key22": "2GiTYigy3tg9pWiaNmgxfBwiM1y4NYDfy62B2ZyQC34N5oiCgiFiTYtQcpzgVey5rLiF5m77Yy7BHR5S1Gw6E2a7",
  "key23": "54DvZHzKASXMzNP9HYCyabE7vW7jdosdULbNLG3qJUzrWgZUQQSYMBqwZzY7DtTcaEroVX824KXj1Taq1N79gvLN",
  "key24": "5HUPiBfpzhkfKzvmrWyvTdgVwLzLTYoL9zy5YPvUZfKXSA44dfvL6rDxVSD2bUi73oxQtEeSAYLzidLEfXn6pseq",
  "key25": "45sgMwwhVfDEgWtiv6ZKfM8zRCnUThWekg76ZZ1tszemm44D6TzhhSrkEwfqV3zdg5sNh2fv2YvS5Q9yh9gMTqcG",
  "key26": "6ovsNev3GWCApAr2ioZRE1wCYx9ZtBW1jMx7V5BXSZAzKXG7XZJoE68NX6GTpA6EHurU583FTz5RpaRXV8qRokj",
  "key27": "2kiLaE3p4NgMALq3qgpn97QnLUAnk6buGJyUbSZBJWZAgtXHVrfHKTodK7xtSsryPwigJWR5ENWQrR1hur3YS2FX",
  "key28": "TacSLygCBbBvtbKYeDLEBxu6EvGtpWQZQGoA1gPa4RqERhpyqZbLZVx3c8iirGfX7mAeziuW7S5NgHUQDnq6ygE",
  "key29": "2YuERxCmPBNJebsr7FBCd7QLopQw46zTLvQb6N5BqT3rLSvDSgCEBpYuNjqwUzDArHJmPo2zF9fAeWyMao4ruxdj",
  "key30": "4Qu8qSTNkf6C4obV9KybSZP94X4gpcF9xZLu3LuWYRK3gPj3bh6BNCYkjzUDQGtGAYMMghCfvb57YziHpuXH1ynq",
  "key31": "2bpZyJspbFDYkHi692YhUxbTT8AiwxP14poBWoMAgTzhbdxuDD4uh3b1PwX2FbGvRUfhgU5BuzHkF7g7DYcFLW9p",
  "key32": "o6jHUcKin8mkVR5yW32BqfuieKiedGR2EjiQhY6ySn3QvDzAUd94zhmcsNRgN4dfyLPSD5GsWK3W9quQ3htPkfo",
  "key33": "46DFz2QENUEq3fr78sqAvDkFdhKCDrJxnGTXiPadcVr9WToyx3qUXefJncWqhgq7hcEZ2hoiCqpZk8ZJYztC6KhN",
  "key34": "5kXuzohNNZtwmACYdHQyBH6TnZGDP66RxiPyW2ZZCoBiKpVXMfs8RxCRgd9BydmNWkHkjEnTLc4KQrtu5qPnph2N",
  "key35": "qaY14tr6NRCVTNLdVSsykN9S61k4yCHgdBzYvUo6dN9km1DucftKMHrbCiRZqmUKSNvHHrGJ4mAWU3E87bVDC68",
  "key36": "2hRLGQn6iBFZMP8y4viT5uuVqBBMJsAcpDQc152TqC4ejMeLcjP8dsD9CoyutvTx9UqkkxgoVCFJkn91oqEuKRPH",
  "key37": "3h6ZvMggCnTGhFGVFWMazYn2JTpkAkzcxcTDdLTgPyPKpvMdpydTVNnwPHXqeF41SXsgSBKNMkKMXTfTdBZPMcwB",
  "key38": "tqcfFRarqTZUAT198PfgnzZBtraZXyKwQSDdi3ygSd8GA3dFSqHR1qJittrWyy8gRd1LLHSjcjFHM47NN9Vie1h",
  "key39": "4vNscUoV8gWMcgnwL7joKM9bom18VMg92gUj99fdAQq75YTij1X75vS4vqEm9VREzV5uE4ctqH7BSfUJgnRPXhT",
  "key40": "5k7bCyj2WQRPFUxE12iHnJdyL8wzVcLV5Mu6TsAAkruchdgoNSxbRBYM5KAPA58uoivZeSbqRWGLK4cRKWykDVZj",
  "key41": "3xQEb3EnvKTnqBxStxXZTMiVonjia76BvS474kpr7DuuYhGn7ZQ2coMrzxUQJ78HpD7p1ey5pbnkjMXf86FA8s4t",
  "key42": "2qTuaDqtuXxhdTnjazrFj8qZY2Z6KbZ9oQEVG1LJ6zeBeHLVNxhS4YQy8P8LTXjbo27AvneD5KMngqHivXeRC9p7",
  "key43": "3psDmKtVz74oWr7QCsJc5zajGURAtydWo1gfTdQJ4NNa7LFWXqgGcMMey1MT6XNxALaXevFXA58VD69dbczXoU6m",
  "key44": "3MRKxAduyBmbaiFuUNeg7wiXqkhucLfWtvne15LnwQ6Yevb2TTHoyE7WmwSpLmtZdvdJAbLuiWqxd6LAqmjGhkA6",
  "key45": "4HacWuBioAmjeVv2EMPWDyGsBYsjKH2Xn3yqsq7HTYzGhrruRLjAwWqbA9y8drZF9r7F1vRnjNGi8Jvf45FxhTH3",
  "key46": "3EbV3wBtWFai7ccyuhcZqBtcAAXqaN1T36HBJQ2FLsHMMmVrt2z6oFfyytEHs4SULJPrBU6Au1CDewURqkA4fkLN",
  "key47": "55EGFVogg2opCrzZPAz3RvT7nAAFNn5k5kB4vx1Jb6nG5wUUmTpvDs9JENRChW2Gv5S28r385rG9DdKYSoJxfWXt",
  "key48": "5fVZt8nwNVLGmsxRz5pttSchKuDqpBES1H7bAGAw4zcxYzc98kd923EYbumnqLXvHE6YCULCr8Sa72x5HCvyiqW9",
  "key49": "5kDKE9RUKK2WZFBLaGqwx9mV6oafJSZt1uH3DwowdwENjzkFChDyNanB2xtKy45DJN3dRdbk7KBy3dn8SjN1pk2x"
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
