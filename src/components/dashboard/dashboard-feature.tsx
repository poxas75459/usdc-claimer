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
    "2FtPrUVYEJmrz1gyrk4E9Wtzz7VBoynAqxsrvCRiHct4wxDzEwKumyycQUhewE1GsvVJy4WRVaXk5ZYBezhwa7wS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21k6xjjujV8bWNNhmKGsRVv5y81arC7FmygCPv4JVYaCESVpDZ4PNY9KQJxy9Bd9LSQCGeWYN1dBYACuQwrAwDJd",
  "key1": "4gaLGCFFpGovkvB3UHeCXADe5fFed4iQANaeAK1qMDtdb9SxU9brWwk2voH9qFSb6LSLTEYTrp4ybLVxJ4dUzBvA",
  "key2": "2vQYWZwwPJhJA4fKsLVMhfoQWRvrJC2Y8VE1bEuaTvnNYHUpMbQoVgF2jy4tvbr14rQ8oyNjPLn7WiYxNvj9oVXW",
  "key3": "rox3L9JAgKYSDpnAxeEWP3QmtcMUX2pUVJHtLXqqswWBUAvWNhKQq8X2x8Yx7JgjeW23MfAmyjyVtFBu6S3Pnjj",
  "key4": "2UcpJAzAD4qRwVLUstH47Cn4cttAXbXEDA3wYYn5DmwvrtMB2btntUWcssAwpQtCvw2zfdmi48c4keyVwPuKLFBA",
  "key5": "4nhskiLrhwwv36v4YEBr2kmc23nzoKR8iqhdRB4No6gfQTHwo2QgGmHJHdJoM8EbKZDDccgVDj3UhB5zdAQDjuNj",
  "key6": "67kqjHKBT4zzYgRSK19e1JBj18BqsNt2P795FfqUtsyw1TLUAkRaBxKtj8nftUEteHKkqZ4mZhcXCUnGuA3TfP1C",
  "key7": "3u4vGYg7gf3hByz4ERAddyvYjDTpgUxaXNrtTbhNykd6tXv5WDxR5GsVZKixkWLR3qKFvzpLKzt1aypbmKtL6kuT",
  "key8": "3m4sAhvnYbhc1958rGKTtaoFVZcff7UYjwXPNt2D9LY7F6KnasUAts4UsWnb8ozmjkxakM315JtuLMDfMMnHEsqD",
  "key9": "2kt5o6ToD9dndE7XMc5z4DuzsiFT6MhAmTFRWE9rCjn23Jpov9smwMxBos7o8NxV9wWT6BkEdDResfFLxp8iM7FX",
  "key10": "5Jdc2mpQjezZu5rybUxA9gF4VDxxkAdEYPD3szUB3qyVhKfC6TX4VqZiL7vYfgwGeG1NGv65eJcpgNNyiSsg1Vb6",
  "key11": "4rauvRqWyfnkCYLwDXtQJ2HYdzLXzxvhxRt5oMAE6tyoQbmUqUMYJy1XZKLyzYm15DTEAcf7fReqRwrFffy9NKRo",
  "key12": "2AFxYxnLEwCTqS6Vt2JJcYM5j1pG5vSz9di5RsjPEJz8UvJDAiiVdK2LTDxeZ2mG8zPWgAsfQcjU4t27DF2yFdEi",
  "key13": "3e1zZw7FsFgZA4TZjMS3bvokB7xiXSpc6378LU5bnph5GHuErtDov8C31WaHuHb1UDFG4DNYAqP7X8SRnRrmrjp2",
  "key14": "64bRmKhYBvSY4tuctCu36YdkPPrSzNuWUwhaJHq4hgGn6rSYvn49Xx6Qf5ukNrx4XpVLAK26BMFDP84RZZsmG8pn",
  "key15": "H7tnsgVrM2Ru2ky6mRTjWjHW1BGkTrsTgNLUKsjhcoQw3ndhURjwDkjviTm5kBBUvM8wTaDdiZhYKy6ae3LeBkU",
  "key16": "2DcMpLAyrtsbaGLNzK2m5u1YMQn74dgMSdA3yvrexajjSNaXVcDoxY9Gu763G6LHjdgqmWzSFs2pz4dH5c8FoFmg",
  "key17": "4QccZRMMaxRH4qnKsSStNNbpPAGyDojNJwDSoyKhQws8f9E39Sd3qoewRt6mJSzdZ8eWfygELRqwjrpWH4L6tSkg",
  "key18": "39ozQAnjFXRpxroP6Pw1zFMm4TbyhrobeYWK371qv5T4ieqMnQEZCZgXBHrpLK4Tkvf9VoK1J4cHyhVTL6r1QPYW",
  "key19": "5x7RBmuv57ohTVQCXPAfonza4VawJGUREyJjxfeYCBAJ8ZNLrANDobhMLLadYakqHAxGPKNh95sZqM1xqSM4B3DW",
  "key20": "3Hna7LWtd16MBGZst21PXtEjUMW8h4SLM1xFHV7ehUbXc7iA8iuRuRffrAnSKrsYWSofKTKNks2P5aRXUq3rsQUR",
  "key21": "tN9nSnvRi1Edepqt4RyHZtRt9D3FqzaqaVodryFoAecg9V17VpWtHV47KQ8r8H66gUBjG8W8TgmLqGaEDHdESVX",
  "key22": "49ju1Pr55KSbNpLcjWdACxJt4c8n2CrbYkyah4exX7FSaTcJmkkGbv6wqvoydMq6jsAkiQ5jPaG3igTLaAxJYH5X",
  "key23": "3Z1GqzMfMAqT8sqWrYGdXaT9BUvy56ZDEe7kWuhBVM58JSgxF4QfrvSMJwS6ktYcixQ1xZ3uvBkZurYdg86vtqHo",
  "key24": "4D6srYeaXSASwC8KBzpU7MonMWTpfTn9xNy7zXKTjMokyrX9WmuSVU3G2vCRvYA1UoraqjfKVzM9K3skfrGNQUmR",
  "key25": "3si6Encz866Kv8SCstVrFj176nKixhGs4XczmBrNQT26eqDYYQniA7dAyAYb3qbtsDbxgrNM7e7H4BomJCvNTh7W",
  "key26": "347VcNjexbsLwgcePsa66hNyBbgXcsjZLN3EisRu68isyRn5vfK314wPRhCR4WEoaM5NaJrpLJzQPLE7N9gBDVHF",
  "key27": "4xMKrteeXVmQsMTbjGKYFK6PoWqSe2Kj8S4U83BkzHrzjmiDnZwmJGa97MqhdVoaTd3dLGoUpX2auh94BrPjFFSv",
  "key28": "g1Pa1N8ccJDE7kgBRmwXgQudxaoX4Q1HuTBdSL3CuWd1idygTvnwBDwdFHM82TUJSrBnbMUk4S3sAG84mbSxGMd",
  "key29": "d5rqaS8ywaon14MAoSgsK2ZWHYASSz7hUCEcWuHFPG3ubWNEYAb99KNm35F6q8npD156TS2jf2ZbefoDSaiJTV9",
  "key30": "5JNoZdCc6ZhgnJWZ3hpecitqM28kbdYNti2VgJ73S4ga43ZabMQfALHthhAz39HZZi7FQL7hGRWsBiMrPgVosbLb",
  "key31": "3GCtnAXwSmKrX8goof1JtPW349fAD32J1bdDXyNBAjBXys9uZN5Eyg2JNW4K2gD4qBkFu4Hrwxzf17SBNxmS57Eo",
  "key32": "5fBV8PKZAMzGF59s8Wm18g5WcPwynZm1xNfvwPADWtqWmrMPmHRKX8T3eK3wfiCATpSFn2Vrn7Qxqj53UAeapmiz",
  "key33": "FSWzfrNUxwkxUojrqg127G2VFbJnBPZLYmqsbCXXMamUphWRgsDXTmZjPGmLWVo7Pycbt3UuWan2UXbix4whdzP",
  "key34": "2WobquVhmWzY9ELcCvk5arYZWWcdFnEcoDzUYTf1KNbnk6Xb3JgVKHADuEkvtDzyDRbKZosPxHHXDXqg6jfDXyFo",
  "key35": "2WCv5Nn9FigpZcJZhcZMRhvvJt1kPZWaY1AvRs7mhX6jwcMXExG4g184fspASNRxJD2jx6MefxVsMw9nehgwSDHu",
  "key36": "LaJaTfhfK99JqTVZqmRAFHE29G8y6fgQayvh3R9U983oUoJKVJK8r71pyYy3YQg7Hgs16bSLAxx81JCxYQGFR6c",
  "key37": "2SJBsog99yBeNALPGH77z1tAkJeZxTpLPYoJY7kqCp6Gx8mGvatxuLfVdqhsXhunpM1uSFPvQ9js26C1euGsfn9Y",
  "key38": "4jMya1CQBNixvbn4Wr1xUoTn2MSwFEDcDsbDQSbJnWKP1LmcVXLH1i2mTFxrtnfVFvUSi4se7yFTW8KZxcHZyeiH"
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
