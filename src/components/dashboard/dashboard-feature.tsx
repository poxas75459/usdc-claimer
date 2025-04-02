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
    "3aXFaVjJBDaa73mNGzRiVgnkKQFH4iRCmwsnDh3nz7yenkwAueoUqm1yHB8u5dL74XbsAbMci1fQ3iQin5aaJatN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UCPb1KTTj7QnwvVn6xTmJCVCmvq1pYj4UpNvk58rVFYEihZNU9kVqyRZHYeeDBnVtExVy8y6P7bzwQJc88fgZ1C",
  "key1": "4odVaM8qesUvh9RNZFVhaZdWsr7vWbc8cJuPwVTv7N5ezPhtx5a1wpZU37gqSivB7bmKqaZsMfmUHRdQmy9UXiAb",
  "key2": "2GDcR3S3fPhhxTv6ng5mZufteDyLkVfVc9UZN7Rhqb83uFpRW6Yt3AWDrsnQ4L7GuKEDpmT76E16vPPseDPyMUBN",
  "key3": "44FF5rHmbcGkavzpGQayy2oczM7cKNQ2s89spZxhQR5LKK1PGoTm25GTXfzwewHQGS1xZGBN3fTgPzrzoPqVgVxJ",
  "key4": "37UrHwKgbTLN77PRszttR4rUxNWucYh9uE4jubJjjTbKVjB6qEikoJ1oEtneh5fsgRJxameqiUzKEgS8c41rELNt",
  "key5": "pLgYDAPzfus68Lygtf6ize9858qRPoD3WJNwjuwrT6WgbDTHnUrJyB7EjE19nVA3TgjqK54carzGYGyu82pGU5M",
  "key6": "4LDdUPQ4K47oZwZMcfL5WqKZL5GM7w6S9z9MiSAyXbyM1BZFN3adPUDe6GfJZWw1ULBfgU4dxeWfa514zQLc6vE5",
  "key7": "5BmrV1CQsW1Lpx3XWc3piwhrxvLmgpHNWhE39iLRi6N1g6af79ngspm25UVLvutfmhxuaeZvhfF2VvEyXDSDrvAE",
  "key8": "5kNavpVkQWzhPbTztD962gPGt9D5rNg1sryLhJfwPjf5PsYdEyTJNeBrDJ7tr71geFgdaxbGzgj3fvjazUQqGABT",
  "key9": "zaMSqKbCiJqtbP7nfQJRianw3dhdTQHGbykqwfuFvaiSpy9EdXE98gXKDYau1CX7VxtYaUrBec69kdFcu1SfnVY",
  "key10": "21m5k12Kybhq5Dwvtt3Dq9hmQSzYXjPrR3cXsgy9TGcu1iJHZuFKt2pDvKQkNUWzA8TsPECJZHJugW5Z2Rh9JmS7",
  "key11": "56j4sRWRJQvT2DjMGFn2ydkPwShxGjPYHrgL7yDjgFBLZrSPj5DVmton3s8zoinTgm33o8cKRSHFoc6yzQpVX1S4",
  "key12": "56778HZ24onTTMVMziAwtxK1x33me86DRz1H4uvMaSZBFJ9Ci2Z6KPmsnYXjUXSjB6QqBUFCtdPHF3hRLKYsFLak",
  "key13": "3gVwfbQEwBnoqDbueXXHKPJfiAPMgcyCQvrAXCGcFRaJ3mvKGXVEnWoaB4zbcRA9Jq5g52KbUrfrBvRPNpojhyDM",
  "key14": "2YX1jB2P9w3HzB3K4QdzdHV4tEXraN1K7VPgYD5iYk819j9vFvxe7aDRRsPNwFHsrrsraQKqCGGY47qDXuJkAr9X",
  "key15": "22ADLPhCrnrA1H7VYKuahZiAAKN8tmx7HkbTZ6kBtJeNz6SKn9G5oMWrpMa1oUFQqqXKDfjeHzeFVR5qXMR1UFEr",
  "key16": "38quMGod1pTjdvTyQkkHQXk9FgQRENnbfTuEfe23U5LgJhWLkPuKKjr4q7U45CFuL1zd3dd1aSTCcKz5NYh11Ue2",
  "key17": "5Cf2wANUVfLjB53Wj78QydFzpY2QsxDJsPyfj1zceokjnLatZyiqzm5c6K82ApZNUWKWxB2FwQcUVCmKbyR4QJWh",
  "key18": "3pHUR3o4Y4x1gZ256GfYNMF84ys4aRFNGFeNuFjufKMejgFQa9162hVsnYCmTX6Pv9hAxG3mmrAXzwQPRmbeFsc",
  "key19": "2F3avDLLps3JU94ap5zHdK4exsHNMTKPznFHbpxd2PfjqQifrwYzfbHEW5dMXxLf8YrgZMpjrHbvz135EZKunAjy",
  "key20": "2vDHEfxdsuReaVEi6rWedBECrThzA6YxxXitCmKBiwBiNesuGn2FMZNr6FRUX15E7NFci4j2KuBDDfTzWhH8NY8t",
  "key21": "5c7mbiZYHXWLPt8Z4atNoezpt3oQQETzVysqbGsAYpfgNAWL217PmDTqXZiXSjs5vpCuLwMXC78HBLk35JYbyZHx",
  "key22": "3jvteEfhuxLH5mckziFsLHnjg78hR6KHrEHrdzawDoBd9aLCUbxsLaX95dKGZkcF47e5EqwaCRqtahdUX4TstsC2",
  "key23": "5TWyiLNGECyb2v7pfeu3sGKWHMMvceA6eoWeCTZTztdRVM2Hsop8BCHdKNSCbjXHm8kC1woVFKNLyqNXrbCYyGVw",
  "key24": "2YEqDkeNHPbjwz6u22nF3Gv8nsZM9MoutbPY1Pkv5nzH3runbMM8ZXXo8c1bjATUVpATjWs4ztQXhrKmEeaxeUEQ",
  "key25": "349kABjc9caEGyLYAvHbtHr8fxRe5funyKyNAZfCo9VazXgt5xe4GXqMJ8tvWB978N6mN5aQ1mxPC9GoFWKjsrsZ",
  "key26": "4W1haUPny17RQzkvkNKczr8b3EFMCs4NgyDy3sbZ164SkJLrvtXn5J7fjruXshcWxYYuqWTE8ZcuJqvpgYKBpXru",
  "key27": "GZNNJqF8NRRBGxczscGH4iSULTCWnLe2mHFbP9vz2i5PkE2EZL1CjhjaGYG1xf9mDRCCSpNFC5NCEhN2SBRxe19",
  "key28": "47Cxw2Dyjo7WFREmZZNfAbegFFXqZXLJfnp6QVk7vsS6iS3wTvjTTbf2UXphRQcEpQN1HAGoTaT1QoKpPCqsLCpv",
  "key29": "3dCC7RQwdbi7NJfYRdZuUs7KUPDeq32LdTgEFaKwAXpuQrFjTSi8EYEP5Z6YkjVhZYHACw2Nw9i4ssYFFQ27do4R",
  "key30": "8xF1Qm4kRAWHZQJtfzBmtzyiBV5itFUxW2JRMQmKx33igx9VVCGrXmx4gmg8DkRKKP3zVS78a17oYcJ6qtc1zKw",
  "key31": "U6eqQFjEDRirGzSwBYdWMNf1Tmww2bBBzgefu2193BQ8WqvUUeS5UM1QJ3HjarPTkrHpdffTjYnXRtLfSsWfvux",
  "key32": "cVbTs1wJ6xpJowtDYR2FY6HgnRBJgsGR7LQ21necFyx7Sj9ZD1rZaudq2NLMiWtSsxubZ7roCQUz697NmdssiNf",
  "key33": "4rZ8TV4aPPC5voN8qgZ4zyhzEg4vZ3g38ffW176CEK4qmuMFvWxSeohLfUXoYiz97Xk7hRQpjTJgM7BfXsC7exiF",
  "key34": "55FKxrUsx9McyYq1jM22QKSvadShAd6p9JLztTkB2RFsrRYKqvLKruhTo1foiACuWGnUbz9MHXrhc3T3ddYDqdYU",
  "key35": "2maJAKNR7E1mifArTsQ27Pvf9dnsgbojK17SE87JZLWiVUrf2mRJb8bFizqheiWuGWK7rdTBr9AJ9nhGtFNxnXHY",
  "key36": "2S72jBCoES7vy2RwCLG7EpVHWKTxBDqXSrsKMnafSAMUtWX4Pod7TJ1xk1aVuuaeuxVck6QpUCroeg8Vkm8LdXd2",
  "key37": "4YQgauD3V5yRfbaeJ4ySkjkoqidYrPQy3VRFDU5AHmqq4PbFVcWCTsiny7kseErEMXv4j3Vj6Z98R4i1xYjcwi31",
  "key38": "4pyGCdm73ThgytnjJkBZgeJvwq2HHi28nnZuVMTrgrSSwYXQCCoaS4yFoaUqbbXeX4JZdm2VRhXpr9Jz9aagNiDM",
  "key39": "2xCMuDEZgXhpNEnP87hn3GPzAkb3yNuYdM3arVbVRzhWtyrD8mg4CY52Re7X1nGYuVkW5S4hLR8V2XNAJGoncHqV",
  "key40": "4cwErgJMvvTUHB8pUe8mHENAGPRmYzFrsG63gUVUuFM2GGfDVUxZuZNBdpP3NM9B7Ur9X7ttF74B98ksLQkXXSdt",
  "key41": "4AESeumjyVvXaGGgvndSLNf6b2QxjH51vDnYVLGttCK5dSwor9m4QVCFUUWqepCkeL5FgS544SKRfqtKn12QytRK"
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
