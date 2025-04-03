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
    "5YoHuxYzwAqRWh8hZLT3kSzPt257Wa8LknmFAKJnezwjHLd9CaUxySZNGTn8CXSnT3tMt2Zha4kayenmwSFznYR5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hL6vK2Gzarx5MFkKuqwMwEk6VqkB7wG2kXc6ZJZbUpVBaBhdaWJtPRynYDi28fLRMDVn2ssprHgG4VFc9gfxwUy",
  "key1": "BthKTkNsffbmt7HEWhen6eqKGoVRvfqMhMuAFjrJgEnEpFcBnHJNkhVdAp3u6VmdGZ9bhoAgY8WxSJGHhKYz5SN",
  "key2": "2r4JjsY7myAa1sfg8qRJ5KgX93K118MAjhdwe7yJBLZXprPbTVKipR6ge26aKKa7sZCnRTqV9bwsndt82niyKLh6",
  "key3": "2HYxRTTEVhdiqdRW4pQrcVAp6hyW6wYDFGXYoV5D9B6avB568FeXtwdTcCdzFzXuGbt5D4RNWBD8YWV3HfFNk1hj",
  "key4": "519yWEcbRbEYSAsQuUniZBRoE5idET18ywNJhvcaFzAq3CaDTsNEhSaFBV14ZZUYWekjN51A3R4fCDaXQxFDmK1y",
  "key5": "iWcj14zSf9gvgRnoe6fhvDTzJLotqVN3h9rWz7k9z3VGUshYiaQ1BDJK3ndweW2UZntYVVoyryZGbEqjtscw4DN",
  "key6": "242i6V4DEBHXEhPHUgzhrH3iJWz5uqxd1ERXpRzsQ31kaDkDuhvh4jEMCugyApko9kY1hf6ZbcCoaBSR8f6hqTxL",
  "key7": "45LTai6R9YSYatp7Eag9rmnNsu2MRBYDZFABCpSjTe644DkrVuDWmJU8EoFrPs6GxJZBpYFKwp7rci71qBEV2bBW",
  "key8": "21nqsdnNdPaAAw2mJh6GcCwecLfuhV4Q2WJ9AgTk6YfnpKtf2urBujjJJ64A8bSdwrG3QWraziWgxaCgfsMkHwgp",
  "key9": "515HXKFzXWFD6azNELUPEuQohDioWmC7u2Gz8vtYZEXsitsYuoz8JSKJ46f1ZMf1SHq3Coy5RymTqGcMY3rpgfLC",
  "key10": "F3DypRfwa52YQAp7bpGooyuMuVwRZNM81NVBEMdT7A2XoYR8NvbxcR7CrLpUw3hRirv32z4yo5H2XX2do6Yat1H",
  "key11": "3bqPK2c25hHdR8oT8vdtTBHggPacubLaG1k5p4YR4vuQVRP6CSAijoMBPxX5y79FG3boh2QPxRDVcn5aMbYQe2CX",
  "key12": "3Yqtj6Ptwxho9MyfuPfFzH4rzNjfyb4jNZy1z4WbjSdP2vFPynmfFe7LcTvxu8mfDAzZjZBn48wMDM7LLHjA7ENc",
  "key13": "5Avf2pStMcgcVvjiyHSmh2syvjs8vJyENF24HEj93LiLXkJL7SnzQwQ6fHa5sbNmcSx7EuwbWBPQt821xZVCj2Lo",
  "key14": "5WmDS8zgFfZdSLzcKxgK4ULsywkbgPD6eBFGTz5JH1ReaUuzNbTHzg56oY5LKEQKBsdNeQ5NNYFfAQ6t9om2FBc9",
  "key15": "trEgzTDiZk6GcdpBvqAURcvEm55ESViYD2fuQQhudUySMqDrFGYzLevD6SxFmgs1R5pR4yNuAfGUqzkcxftAwxj",
  "key16": "42hsFHDdAWthYhBXujNbj8KQMoHvgHJEgu57LeiLdenbpTdiGx97uKC3cwwvAKw8EMpp3Mf6aFDytR5874aJ7ns",
  "key17": "3J9cvQ325QmESs87WT5MwprwsxBPXZfiWwGAWtVC8jE9XqV9SeGxu8Zt6JELpcMaC2dac6qBwZYf8GYPASLXpkGN",
  "key18": "8c6QTTREh7K3EVToD3m5dik5nVmpHPydcmb98buGaKBbc81hGFNHDgYiQp1ySPMLfDkDMqZaaD97o9Hm1dKcffV",
  "key19": "5Mi2omnEzCE84ACLbWdCuco2TreP6ToFM2A7wGo1M2xGoWaCK9iuuu4p2d11JWo3hicMkPny1r6oZoPs6fX7nnFL",
  "key20": "3zfBgNrAqTVcpFrkTdcD7n645dpYkM5WqG5wDjRXyujCmkeEeWPThTxQUg567MfBhFJuMdVyA66xDM7KMEfLs76g",
  "key21": "VkveDcp8LkikCMejQzoQAnvS1usqd59SoiLHzHUYRWPNb6TF2jVihzqDomtsyWGLx4uLMLN89684MKPvEPCWiCn",
  "key22": "3WqbysRmBXmTqvr2veBcZWN3o4NDYR5xKWKQBnTcPThrWC71mstXT8mJ3Hc3zdCvYrRdHnitJsCrvBUrtH2NqDUz",
  "key23": "R4y4t6dCKweRyUxZdFfeXqACaPFZPCWwqj979gHEq17vPALVFHgGhjNDpLzXfiBSZADuU7cGpqvvAsKGAvFmsLZ",
  "key24": "2mGxoW5smSZHtrRNski73JbGie8GEouJDfsf7xZLcS7nJD5dKTu6KiLGhBvdnN3pKeMj5Kv8kotNXHxUqTanTfeq",
  "key25": "3gqrPCDVUcUCR8HetxZpvWma2aFViugVav4X2dRmybvAK6mjhGBLfk29vf21VVwi8xEk2ehtqoRwp53yQgWWjzoV",
  "key26": "4eZ769VKK4duLR9gLPzzDvnuixbkKA3oiydnk3Vay8XaeN1JYkaYfB8LMMhnQXVW6DtjHk67U3JE74oxLRvrUpQw",
  "key27": "5q474TJVnpswHFAXZjdF2QwE39NLigBfkzr1KocqFwkCNsLC8twu5tDZyRhN1nYMFcKZiSKy5i4RwadDFw2LuNwA",
  "key28": "3RcsvSHZH8DXs2fwK7e8xhz2VLMhPKUFbUMntaLt9jV9i93ECVSQGeivop89rdQm8dPtH2oNTAv2JzqFcXWJsz4b",
  "key29": "3YKVRoe3cBLB3j5bsZ3FXuwvpbBemK4EFARz1eAZeZs1mS27abFRUui4wRQ5pAhHbsjK3mh9r6AWRig9oSt8guZu",
  "key30": "35H3w2ugJGcusLtoGh3ycLkyFNffSLsV6GwYEiMCf5iFf7VdXmVkgG3mzdcVcMQM7YDtfnTYfAFx1mxFoCjR17L5",
  "key31": "5smFAgjcrCfFv1P91fiFGsBMnjgvmJCSf7i9RjkVUQyeHpMWf3a68ZhuPgBKp3onyK18d1MV1W5E3qWQQHk5V5ot",
  "key32": "33YUgX2acLdoVHzNtSEg57kjpzsXzWVuuPqZyuJe9Vm6goJFMURbzA5BGb9kVMnFeMpSFGjM4QuEYJHQpn95GVPV",
  "key33": "2Seoe1ETtEuwbRTX1vSDL2gRhPh2wFeF9cxrCb1eveGbRbxVU29dYPSvYQVyqg3158jZpoJXEaqoDYu3GqMvW9S8",
  "key34": "hnJvV8BwhSYfLtBnTPUJB1uYGbvTNVNzqis5sjHT5HnqPgaBU4Ep3mRVYp7Az51vMToRK7349iFXWEeaHRceShr"
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
