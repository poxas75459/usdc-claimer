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
    "2arw1MkJB1KiF1S1KPB9wLUM9g5waLixbvp5N1oDSg3jPQDDfhf41zH7rkmi4EVUQQVzwUTfk1P1i8XBebagdsXc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZCrBomGWVBaKx25tYA32TdgwRF3GBqz4ih6fT1uRiwXAcZ1Hqua3n4KnFQAwTGydpbCFuJHJpF1AzU3H21NqFWG",
  "key1": "jDf9FFyN4Ps6vdZjAMBpepZqRXzpectyvQ24iQmsaCM9c2TsdM6Xs1yRYe32GBVxXnNkUvy4eE7ZJemNfkztN2n",
  "key2": "4qWHVR7ZYkV9EKq3xRtDsoLb6ba8ZuZ9x6yWAdQeUz8k82V6APfJKJTAUGdmqM9kHSjYLJasAf9vHXuejUNH1xgN",
  "key3": "5PseJkNpUVS19Ydzyp1iJGNWdfxqv9kSNWwZ7NnRfWW6CTR6HM8S6e8QAAp62mPH4FPFEdGkAGRoiL8Q8bdyfBpn",
  "key4": "5mBygrbVkFgxf8vZxap6Yq7FgHGHtrsS9ebdBZP6CrMah32ZyDSAhXg7qytstoBExXJVcR2hyWv9YD1cRydLumR3",
  "key5": "ki2pUEocy8kSm2CwapTqxJC6dzugpZzoCotkr1DihhPaeYLqjtRbkuae3ibi3TPf2qyi1qidXTHGpHpCJKWVA2K",
  "key6": "3jZqbiDRzSVqvyKAtbS7s9b8nm1JsLsQivJgcFxFabJXhsBtYqQA9kVfjq6U2gjqKybhKtH5Fd1mBgyhUPJBNwDN",
  "key7": "34teDoSUFPynw2nSRR3pkirJfFHhHPrvD2DebaWubTX7k1zngocQLN2n99uPdaCmjkTPkHR4M7ggmeLz6g1pP1hq",
  "key8": "64C661APzMUJ9i22whCNN5yCu8LQSnhy3nsySZYrTkGVHVvyhnFfaGKyapJwkumJRHs3ohH2CmvVqKZGmUmeygRm",
  "key9": "4ntCKAhnASEB2SterfL7XjHmBQ8vjThxhtVXUxH5wJvygV1KP4Ps1u4Cxop4dzDpeWffofv1c55VD2kHs6ezMZai",
  "key10": "3bAJsBY23oQ3y64V24G8Tg158M4CP8xgjUmKbhdngMViypSsSxiF1UnURjtBYxgzrfw7knzdPDyD7nTfT9Cn4Qwc",
  "key11": "2apFnAwLccLTtnC7Cezdqsufez34s4oWmDL2Efwur74BGe5eoYHmvkphHpkrZVovM87PShyduhieXWNfXQRs4r2o",
  "key12": "65PzJm7DrEpMWC8Uyn4rEbf1rgdt4XR2jodev85SpT2QBuYuS7KYeRioP9NLT7KiMSKa667n9gAmfDsoxsJeuNnw",
  "key13": "62NEqhnJCCEiktY3GC31C9GaZVd7bL97ntjKsxERnFfMyGyK8WtzFa8ZGAHW3vshXigvN9zGFyGUK5sKgxqMzz5Y",
  "key14": "ygr3tVVa2KXes57VYNcDY2yp9MmaLGpV8Ci8LpuhKhB7jJsHjmwLKXeu6xpjNNkfyEExax24pV713vf1HwxBM3i",
  "key15": "4AiDd3Xfq1knTzk3cCGq55tsUWgASkbqA23Er6T8pCMfis5GaC9oeadLh9Y1GQUvcrfgUf81cLC2oFUXLV4v1f8F",
  "key16": "4VdHu2cA7rbt82w9zUPmDj8TFzfikV5UFYT1TvSX91EQjXgmpMc6yjdNJq4QakCzgUJPVNa5jru6vDifaTiGP539",
  "key17": "W58z21GocT9rUGvQjzqn2WvcoPiNJ6ySeMBddvALJEm4YUCQjn6QUrdWGzmGC8997nGPjBUksSTkwcMmc2ZoSxW",
  "key18": "2MgGsT7bCLFoThi69uLgQGgsxvU5Axquud7sRy8kDAvCBLS1ah2aoMGWWDuBFxai5edfAxzPPSK4PZeMzT9EqYNs",
  "key19": "5wHyRvfJSe7t7rF23WykJnfdrrHDpRpttpxJg3x2eLPtQfKaTS3JukFTR6owTwAoAa47Li8WAFSVBJD7DJEU26ve",
  "key20": "2gQpVMywvCp17qDraR67CZrJL64R3ft4Y4CygcfW6ozbnx6LK3S7BdroAsKnADNZW9yEQV8J3h2AmQgZau7tcdjX",
  "key21": "4n5uokarmr55BNkdFzvwnFw5pWcSRCmFu2Gz74uveqKycfEZcYrkddK2FbD7bx5WYLZDRQdAbkLk1y3s3KwrvjbW",
  "key22": "f66aBZrHjsySnHufqSPKBnDdoNyLn5XVW9d4pSomj8YsPKxnfqzdTLfNRB5tuGiC1jbM67k43tSHgSuSY1R55ny",
  "key23": "3YKVT7JUifd6HBYNk7JYbVfR9pbxSmnRLjZ7q7NhqmvmCS3863tEYAvGCwxRsuyXjT1vQgHVDpVjSZ2d2GZE4Bpf",
  "key24": "3eaaxYyxThvQXY2pWCk1313BYrDYBcs9iKVHKNnvEPV8hzyQJ8a3ccRYG8J2zZ2LSbSxMxrgXqcj7yEMEQhUNeMA",
  "key25": "2otEhDhuSFgCyP61ZukNJqVcUCEafbcX9XyBcKf4EdGw5qa53gkGYm1ex2TbjUectbdU3wo9FTvagPW1EzNbe6bw",
  "key26": "3duYyR68CcdgyD1GQAS7TWTTUzhh2vM7MhGHeED45FAcQGXwuLtAfKgZU7he3C7waDSDzy3cdcLBdXTgUwT5jkge",
  "key27": "JSTgZEZt9tpesXDkhu8B3YRB9vMoRs8QYMhArf7S7LhoYg7EdAnEp5W9HFbki8AdRmmU3qS13DD6emymiRTNfX5",
  "key28": "3d2GDDDBCcGbEdTxg14XVHLdomYa7PR6NW7cAzy4AbgVYtqeL1BdpWL3kFu5YStEafVHvnWjyGb5VucQ3s4TJr2Z",
  "key29": "58HA2XZnoQhtVGeQqDPacHxHPYXjLHUmfjtozhyV9UiHBuE2KpyHGFXGkKHed5EiQAYDCYMrHqJN8TXsRvKvGQ9M",
  "key30": "3kGLrG86Ng4TFpKoJio2SuiLiATsqmR4tnKgbE3PEH3kmtc1Boc7VSwqegG5Z8sBcQ5hVW9qtd84JPh2P6mTwx2b",
  "key31": "JEMDi1UEVvQnXVRmnvRyB7JB8ycBMU2GMKS4PgptRrFuU5kyTjQN66CDgk3t4Kdj8vrp7FmETM3zresi3YwKKtR",
  "key32": "3w2p2zHH8iqmfxg3oMxDexK8aKfWAxgNyf6vgoMtxb7hLCyzSAywakts8jdFPP8tmsrEU3mBFRvbhcGTWH3k8QyM",
  "key33": "2j3mM9PakzPXk5j84xBcCCcyx1PBwqByxkNjsK3XEDh31XRM8x8yaMkM95hrUHMvTFdtW9JwwNvNqUA4PrKn6ia6",
  "key34": "38vWzRx9y7AS4H4DzqBmTMY43dV39gbbCmurFXof89VP7JzkP1Qp6px9EqLERiVyTuitorPYMEDEQbJVVpXJ5m2M",
  "key35": "3PSC7mJq2K2XQXssGEQnYAYQaNFiHwjvV46KUs16zUdd8CqqWpJiS9F925JdxyPPTpbR2AMoPzcM17hr2SV3Bgn4",
  "key36": "283sKBNAYBpznR6L7evfS2oApQbPuCcNDHKYYwLzxRSZUUkRUEAbGHX2aQeUXuEmBVSoF43JB2HHoWjwdfCrbtEb",
  "key37": "5TpCHHEipBkxvWGYQnaNWVYXF1S9qH6jZVQhzjZetaNEvF5r1HEkUTwr4LbvXGXjVpSBRushWBnohrPwGKte2jwq",
  "key38": "3o1tNSWqB7kKwiYqLzpuyHJmYaAS7oQ3p2zdBAzdyC5bhPm1xgA74y9NfNoKiwkwQTxpXj9Bmct6xjbMDS5h956t"
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
