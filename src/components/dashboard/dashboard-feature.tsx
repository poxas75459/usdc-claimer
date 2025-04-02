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
    "TRqaHcwv9AqLkUYFQ32iuNe6g837BxzhbnhhCeQmyEge2kramvvHEfjx7cRtPcSxCdFZLXqHc6rPMQZUErLMvzh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bS7jnEs3t435HqD4PEUpfTzr1CbLZnyiapQRsw417Rrx5MZzq2TjF9tGKCJWJgibvxucmP651pfwsBbcfY8BfLi",
  "key1": "2u9y7PgjpQbcafFm5u1HhgfgHTujbcb2SRMARKe9FbiUTLHXEGF2W9ZZAq1wHCejxYkTjzR9sbm62gqKwa4B7AQX",
  "key2": "PDZ3GcSxBcccRLyK5AxqRmunKkys9k7adfy9kuTXxtkUGKSixKoYLBKdJSxeBpDwyjR8sZFq5tESgKbGJYTBmpf",
  "key3": "2qS757HQZNSLzJ2VXQNq4fbGcABUM4yUMT48HCYJZkHRprBU5oLiCoecCGb2yWi4odEs7UgERaNFKe7fqR5dgcwz",
  "key4": "4HCa5gk1uDo39XS2GPFJTsviy9dhjZ3xqGVWjhtsFwycvAtJscc1gSFL2fa36oCuRwNGWemuygUFXvrL8MLgbYYW",
  "key5": "2ib1aqy6VkMVQfrH4hZgPQe7TyHz1BoHVqd3QSsRZzs7t1SyGwqKKTSNgBtij4Sox9enTMNjFTJMMu38yaLXVcNY",
  "key6": "3qwmLyJMvWzVK55x1ERkFumjeQ48NrrxY2gh6Pf3qsr3RjL6ChkTuH6Le44LCDsXUG2Xg4P3AyUJ71BSXaS9VEfu",
  "key7": "2MdE4wcncvK8TN2AsgGJooP1KFLBFBA7i229d2fPkTSB7ouisJB1B48Zh9vmotDpNW532fZxTiz256Zh8VxWXeCe",
  "key8": "35SJdriZwccDF47ewdEUxU1gNVhJwYadWwjQ6yZTVwLeQFFonwpr1js4WjeX4cH2xs8fDhm83tCwoJEj4fSX1fCc",
  "key9": "SxXaRJ7ueBiMWfoXp5fcfFvENNPY8vTmLSEznTZaQhuQX7uWSeABAkNptVoXAP2YHa7VZ6PXjg9oaeqACEG2GN8",
  "key10": "L7fzEyXH7Xp5DwtXncx8vcfV1ASB4L3c4Bj9Z2utZJV2GeuEWpZDSuDj8cyCeJajV7EWZy6WgfYon8PNcK6x5AY",
  "key11": "63pUxFJBstprwnWyGmZ2MyLNBdUYxapFxH4ojHAcKakAW56rgZdDYW7EZDwPU2JUZ4G4kZBdhHATyikMSQ9sU6er",
  "key12": "24Z3naUPxiDdS14zFUVJqGj8qWY37kwnyjoXpukmfhSgU1T9gkjSmASeWvmqcscYCPiHdLGiUDk7zYjD7CwH2C1n",
  "key13": "jLoSJ7aDaSqEzbyHMLmHjhUzZDA7mdkWp4Va47EFS68n5tWWQuVkGQNKeRtBrmy1vKXQwUDFhrf4BCKvXgfUTyz",
  "key14": "5sBCAY8S9RPCiNm8pML2kgVAhhGgEXubZUzeZwYPoXggfrFLpGGqeCpW5JhgufNR6VmKLn2owR2YmtqZUcns663S",
  "key15": "4mjmnJAKE51NJAxw7szVQTn7A6dHCduj7UvDX61Lfi8S5LPDHvc7AUARVXWJpKK1frKKoJ3RxMD5XeisfLpzFpFK",
  "key16": "mz8RUBp4q9SBL2sLbpWmNepeNX9fosJGBPpMiXURX7UY1iANwHmH1Dhs4d2rBw2EoC3E36CzktudfnuAQTs4DN3",
  "key17": "5D4HXzV5oi8aeSnMT7uH3tfYx7EFfBYoWhUJJZC6aAGKiiA7z8cJr3CTy1QcLy5kCN6FAVPmxEMd4JJ2hpJC8hUp",
  "key18": "5fSM4VtM1qhA1R66j6zJmTCJwPVViNkyKn19j3r6j7DJMEcMPXZRk9497qCyTuvviTYEiWmfoai9vJtuvBp94t2a",
  "key19": "4y3ikX5G2z9DtuBdRnxrH6Cgec5iH4EUe5RcCSAmfKeM4MZcLSRZNAJZWoMSGqjivoHqhdbRNBfrbP4Jkvfajfwp",
  "key20": "4vXRTgLCd7A4ytnimV2rKcQzEe48eHc7QukCYuDgjvDey6DgusqkcGbUq2sXTq2Gp15hQwUYsYs1nehq1V81mHHv",
  "key21": "3YpNxPnGPCTQ7cviidgXL6yppa7NQGqQNDR5JQ95rz3Q61J7gE6NPchci2vrjHfwoaLprmGSUjWHvU8sEkkGcw8c",
  "key22": "3hfpuQ7E1YQZduLvikVsVbsqCPeak83wR1jtm1b5iwdiHNHsTp5diog8CJ6XXf7nqeiEJoQRpgFQCDycXfFmBXfT",
  "key23": "4txdphhcUcYMZHmYVybuF1CwJAwRE5acoFacT5NoWj1n5JKN3sox6DgtBKfdK8xWMm8w4u5hEPRJkbCsyDRFveJP",
  "key24": "5bP6fqGP2PHsiPpb2XjM45YRTYebHXkPbfEtzMkKW1uNi16m3PB9FaxJnJ3BSLLzg25frDGQBnCdPuB2i6oDTCdn",
  "key25": "3uejbKaH4RYC4HdQxnwXnpU7XF7HF7a3Ps1mM5AdgF7CZEjexaPariP7XNHkJt2ZRe3v6xKJAS7wx5Epue2q4Kkd",
  "key26": "2YBpu7rTXxsUGwQFScQNDJ2yAPTsGdHUGrQLSJbHTWPh1PFEtFfaQQh7hsZus8hYRi2obPvC3quwegcbDM1tGWhm",
  "key27": "2yPa8uzegkJNGHUBy7fAnB428YYLysZAfBTeX8xZkxSemfiNRwAvBnuzaGV7XBjUxAJC1nCEeJ4maEr3YCHdjCUD",
  "key28": "5Q7FpVCoHLZTqJmCBKTpipD4VC6Xj7DvmXm71hEBafV4ePJPA9KPxwPpsphH3eSEvuxc4EAG1uaknhD2oAAPJh6T",
  "key29": "46DCxjToYhwzTiF2QnYykQ37SgfQmk5oMwddSq4sG2gN1hhxa8jKb5n94odxeTYGcMvEaz1GgTAp1hqMnQjQ8ohM",
  "key30": "5MT6mqKaAE15ny214SqHHm5e5yzfjr1GG43gQeCZtHHLZNKtJahGToi3iJbRb5HsWCjZrKdGGVZoHCwLaL5itXfv",
  "key31": "MLHRQNixYTGfqjvJKDApEqPnyq3AmFx354nEcXhFuHVKKMhHpiXYki6k6KunnVf9gE2PqhHbrYSbnUWv6C2rkLf",
  "key32": "E6dGDWFdFYeVws3ryynZfRa6iVFJLkGAaRK7FVMGubu2HSfTzfAWtXyBaXLmcYDTCHb4FZNWMoWs2BSyUEEYe4x",
  "key33": "3bMcMDngmmPya8FbocxffbNc5VQD5pABRkLTxtDRTfBS1Ks5uB2N9GBCoqJG3USFx2yxwVER6kahLASUdEo9G2z6",
  "key34": "3LTmc9QfqkrTvEBcd1nuD56CM1b8xo5LeTgtCBHKdWwFQUn9xt4unTstwco5TaqxZHGA1RRT7Xd4z4ubsdASo5eT",
  "key35": "5vPtjxsC8JCv984W5vr41fJq9rJAp48Zu7FnaNRmiU4dRUq35LUDRTu4SwgtuTKsGPNaz8KsJoNDQBmJrSpcYcba",
  "key36": "5rYemmpwzR6qtjzyb4Lh4MxkioVk5KF8WCNC1SkYA58gG6ShxFmM3WRkLDHvpafv4j8Tac4x8qdZyieuxmmnJgyM",
  "key37": "1226dKNhkpiaaySPWX91hmsfMSEff5M9upRVLiPboii6wWBvwEZwc1ZirTK9Dvjwgg68V1tuxR45XHDThWi1JQuQ",
  "key38": "4ouvGZaAwpAUNr6KMtBqAoUTwXbnL6hcrkHdRiAiFst5BD9UdCi6gFf4v7UNDcZJhXMyz5JJESKpgu3ZH3rbSiay",
  "key39": "5Ht3dsaNNZ4LNMWk8hkv6v1hVF1DggfRNkcKwVMYZ4udqF2QB1FHjYcKi9xJJNu1bUfrJE9fPMjAS1hDSAWaicvw",
  "key40": "3cVmqF3r7HSCEhqrZ1HXDiBCJByJ3XTLFMCTsXQM8LSk9QPZv2pqRv9yF4TJZ73B8Lc1bVwPagtXdqNgvLAZj7M7"
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
