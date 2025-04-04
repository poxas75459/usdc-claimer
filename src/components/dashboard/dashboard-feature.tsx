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
    "4FVw5M29K49XmssGKVaiXSqqTCJPEs2KZ3vaR3zzmijMfUWMJgHSsmg3bvNX3ZAuLxAPYZEdyWrpU7KFtijdveou"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yMC3KZWHMuMt1m2c2rbfUsRLkdNFTjPkiYvjNorC7fXmihpg5NeLWiEyjRrk6zSHnRs3Cje9kHSCS2tnS8R2WTj",
  "key1": "394NRj7EWigNZZL9VUVHvZR4D5dMLrRAvQpsQXaksPUxfch5E7cUJvZSyPa3EryhdTSj7XCM4jbHWjMNqERZdR3t",
  "key2": "5eZRadL7pf8SG9qCX6mV9kDF92Nyi2P3dkGvKpw3ghMZsseLXxJ1rHZyJpYyHUxpyiWFjfbkPa9GqXVNRBR6oC5r",
  "key3": "36wwsAHoSCupP2FJjjZ2EaPZfuoc4HLZW6v4ihCQu49XhEYujWk2xQRAvm3MH11SdPGD1z4A6uVVKS6bykdWBgmk",
  "key4": "2JoTLy6EP4nZC7tVLZqu4UKYQbpYDyjWLwM3J1YMnpGJdcCJnrxLUjXokkGJqnBt1Gxpzefpz57wajuiAYHQnRsv",
  "key5": "3N7VKzHJPNPMADE737x67KobwHefMYBEkMy2z8FX9FD41qchjEYCWfTzkrqd2cSHaYeiNckvEyRk5gp1ces9Xjeb",
  "key6": "2k2ERvof6miQVufxJzHFbbXK5HFZKtFTju1npx3RogcE5dWhATFbskxWzu379n1tpx261PXYehJEidWfEQ9LH8yt",
  "key7": "3ikTLKk9qraQaj8ixUcgTvdR6ei5sLryFBXw4dyoWt3CmR4nhYCY9y2p6DipcymVG9jGvhqA8ae3jYtQtDtEQGaG",
  "key8": "2TpPBxZBtAV68Ze1BffeRtqvE4k5nCRRVtBSDcMnew8rnio1GVMwgDmxBmaPKzLvVgz3BHYXHwzRH7bpuUGcfFnU",
  "key9": "2sYq6gXW4ZXsze3DZm4Gh1Ntm353gC9kHzy52asGPuCsts4o6HGNeaPpWsGNS7y4k1v76mUaJHzoGzLffXG11Hgq",
  "key10": "5dU2pNXBMRrCa2sZWUvYWAVqAioM9DZqXHmhwqH4Txdq54sbH8c7Uk6ah91WngLeLBuapC9juLZicdAx594fxTFe",
  "key11": "2iHRMyn8pmHimnv3p8A1UYgrepQ2KMDzhEqnpMSVZs3opdi3pGiRhcaG1pz9P92hkYrurUQHuNQ31acsNfaDc9Z7",
  "key12": "xs7XVYMBuC1vyGyK5pKFnCiHw2HroCSdrLkxjsUvrdB1FUWh8CtnmxSP39y3AcMbufkc3ensSBYXazc3QH4BEYr",
  "key13": "2vGanAjyKp893zdm6T98nRkWdKUCNUGTNAZPF7UgXbXLxANZJt1RbaJdZ1KJVeGHvwEf51Zg3Pdray2rNQg9nzEg",
  "key14": "4rd7M7vP7qrLRj5DeJwSnJPx9VnJWB7b1U9ZWn1HzZdjyYUPhWt4v1g8DePyecm8TqBAZboQ1zDt4587Cu5pH6kE",
  "key15": "3FkKa996oRrDdk64iota3Ud6J3g8P4k5GhXTUKvUvvkaXcV6FhRJDXK9Syu42onnRHZcxNQwKHcYsYpNeKf9XzuV",
  "key16": "5YpHD1atiEEjyUbrhrBayiu32dABCBaNDFoeKQuj3d5bTvd2a2iL9sif1PvrKzJEVRunvP3TDq9oiLZmMzn12oo5",
  "key17": "4PbeVf62fnxkFi4aju85jucM5vd3zEx9Ak6ELMzRvfribDDV7Mzf3bNDD2gXAB8abR4poDQB5GSMYu7RRitoLzZR",
  "key18": "JoTXMpucaHxnDZTuzkw3C2MqCHkTV3B9K5HCcm3eUhUwfJCHXGaTqcZ5Ebqfw3jZvJcrzuD2Q6CSUN163HnSP3N",
  "key19": "MPzJfSU5oXERfGpASN6tXBMGUNYA4mTsETu7uHMe5z6zLcPCScifKujEEgEgkecwQKhreyDoaeWJ5RWZ5hfK94n",
  "key20": "4Rme8Gb75j6MBeD4n2wEtdkV91Lyn6ik8mw5XqXemjzmRqC1VNXoeKcLJViZSd6w2eoR4YDd8apVWKNyb6wpqVJo",
  "key21": "2ctt9Y5ET2FWCpRaF1HNFPZpS1ZbgdW6TacD13n9RXgthiPFAredpMRYbLDGk4SJPAMfKSTUFzM4Xxa2qRZiYQWh",
  "key22": "5iRDtemR7biKim6ToMr9QPZwLgWqfZL3dJsxZcf8PWrhsGxU2SvxreYq85C6CG4fFoMDoA7bqNUNqdFrxCVnGw2s",
  "key23": "NMRNKKjfzCDcUScLWnRzcoGwnPRB2HQfkemjucJSHfb1ZbGdUTDoTbVaAoHd6qZm99YTZEzbebiAccikXHodVVo",
  "key24": "5dv9Jbz9jxKhcvYZfoqWJfrWeQwyTCCM9aT5yCUW5u3KiQ8aa7F8yqdkAR9oTRqdT3nRVkxLDSnrmaDYvaeEwEzy",
  "key25": "3PSFEVQ1Xz7J4TaVDFQWSgashJA3Ksb31dKCBFZZQKxWrCuFYRGH79Xyi8KJJYnSwyrTpDACCGLBzrzMHhZT6e38",
  "key26": "4yqedHyoFBvz3KNeepCfBfEmsZHuvqEmXZU2HDLnfK8KxGuLy4FAyV2ZTTtho2NNLbAVZBUUsjNpPqSp3oNiKsxm",
  "key27": "4FP9m7ZT2fqAYumx4B3FvaunTCsEyCJaREQJu6zBJKDLhKoLEgfxecAqsViB3UPkWhyn2E7gtkfkb7GUTphtMF4Z",
  "key28": "5AJTAe1gRJ1mjAtLbB734orBRf4Se1zk21d176GUmMiTC1tJLw9poyxzPhz4RjCbaEtNMiuZfrWcB9mzDT7FDVGo",
  "key29": "5fYf3f2pkYdeBYL2q4zEpLtReDjMAqgJeVUEDkuJaeaDbtCSvBvqDsdBbwpydyF1ozrbuHGrey9Z9vhifVVVjo14",
  "key30": "TppUx1WuiUp6C25cwDeXG68jJt1nTA4EWKSwb2WcJ92C8DM4Vg5osWiZSDy9rAAnadU23BHDmPZ5HS292jab77K",
  "key31": "28eU8Kh4ZGeasUJPv6CKRSvsMknMkFvG8eYVdwXvNrvyYVSwsxk2SYsArvRRWyHTiwCnNamsFvKnmiRurRTPgBxw",
  "key32": "2wV9WbcX5AwmK3pKcBfByP6ycADfhSxofDzPajS15nF1xCBZWoKvQNNQGB4BU7sim9dvwMjLRA7jme2J8xfQDfL2",
  "key33": "4uQJhrTbEeF18dkNwePzQkN7q2y23XKjEB8RxPsuEQubDAu3CcBhbzGYinwGfyYha8G1ZfFJEWEzCakKFRcFsEWz",
  "key34": "3HVBX6Uiw7P64Y3fmgoPGfbfsFP3nmSUxQ1AKznjxMm5bHotkrQUeFT5xSUsr4LJj9pq17ZfDxVmitKVD5FgECYu",
  "key35": "5N2o9tVBkAUsxUTk2C199SDmrcrcKksDr2XtyHzCeHcNkQX2dMW2nVEXsLSTWY8u6w9F2zoYz1BmdYK18rhWtHAE",
  "key36": "3yYEYxjLBQKhhBKLYWbWGZxQyAEukpYs7ncxTEAo5WNgkDZz7SMU95g5sEmbjo5NR1xwVzmx2q1jz5cv1VppLBaH",
  "key37": "4prwWjdNcev9pkjnrRDnugtE5jySB7rXEVMq7589BKnsrfESueyU7n48oYKDqVTEnpCabzeW2b9TPhrqXtGZ92tv"
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
