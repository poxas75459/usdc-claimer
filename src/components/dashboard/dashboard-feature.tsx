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
    "3EBsD3KFp9gepwLZniHtpLXvm7Wikun7eprUwPAzJtjsXT1eC7ibdCsRC48HdGJNz21piUkbuEN7XdmGCqnLsrgL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nGvoey5kfvN8DAcXgWpET3tY2o38Q9s8gL9qQ6WcALYyNqpd8qMcARbkhT9eWPzAsfg8rMK3L7bdrm5wzZqSPth",
  "key1": "66pD5YBtt5WcSUjvKVTWwMANNFtRNcFMihoEkh7o4HvnhZ3YRv1zkknAq8EGCENAivQBZTjLcrvWRYm5MWq2LJuJ",
  "key2": "2D3EAtYk5HWjFWCrHTqGjqDw4jKLKmXGdxghqBXUyJE1g1cxy6nYH2VRWvb9nhY3ChVFe1LVK48DurY2LhyswFHk",
  "key3": "3V4SWgUyCU9x3Atk32bWxe8PtwUipB5jBjGT9ExTpBLosgGhpLEmeSew4juVMALFu96R9QJXC4gGmCscUn5C3Q9m",
  "key4": "3JGa6QwFy6Kcu54TPLteLbt51CosUFfdHfCaWZ4BLdAUc4b95j19DhQRvi8NADeUNcMGxGN7tk2jpGRVhegCfEM6",
  "key5": "w5RZoEmvxpV9xDvpsoLgR7e7Z3EttKC9Uhb7fhQat7mYJz61Bpu5BDwuvjz2qCsJwRKgXqeypRTjxpv7vH4TcPW",
  "key6": "4JEfc9Cm1U1G3Eabms2Gn2Qmkv26QJTwypnHUZjFX1sApUtwh8oBg1GLQt3sYQsT6Fggj7vkrpCoqpW3wqD926ca",
  "key7": "28CcY1766jckggNjwi33MXynse1bLqpivygiiVFtAqV56nMRYvh6rUC18D7XJghmxi8Tgrm1FmzDmtTxq7hNvXfk",
  "key8": "Y7sVLCHf3NPe4tnnJ6eBeW3G92Xkft18U1DbxffSLodTsqWA5arufPFSCEWHyMhX99uC3nLDYMBrhEyQ3mV2ouy",
  "key9": "2eneWZeRGk8b4CSRuSzo838EhBJ6s6xY9hT9B4WAAkEVkbgBnWgow2JnSpieKEX4Wov3Jn3qneLZCjq14bFwga7d",
  "key10": "5dX1kUcBpuukr6jM1T5UMLb3WGdaMwG1tQJo3XGCoRWtbCENd9t2dpszfumQKyyJstPE1j1CosixmsnPy8ionEig",
  "key11": "4gHN82gabyYNxnaaR2iUgUUren8EArXkoCZpaPkJrUtB14qnLeEg3rfaYfkNsWAySAgCPgG2ecDD5AXHW9gC1h3A",
  "key12": "3SBQH2BKXPkqbYqHCeZxmMeG1bUqXn9u5YVSrmf1muAXLn1SgvdxsWrG6mTeUANJpQDGxU7um4Sdvg4wmxxNDgCo",
  "key13": "2ANnkx772JYphMBrSR6B583Moc9aigRnMFRUgfnY7TeeTusJaes3uAcMWv9fEDXXfpLgBRvNeKNrfFCyG3E2c9ht",
  "key14": "5X7bu1mg5shAtE4fwnDLvXjYscnyAAsTMt5srRFrrJnbNUkydSrAkbUy7D9wcJRJw1W1kiwerRmDytgeH4dcSPRv",
  "key15": "FqyWhPQsbQoE7njeDwdWADeRtqW7EMo76BdPWTFcqE68bepQYGRWANKGJB6hYFEQy5Vq7GqqXc3TxsvVY262BtX",
  "key16": "5oUVDi2ebErcy655nGni5Ln3QeZ9kYsyVG6a2qaPN8SG4GdrBDJWcZVDdVPfEK2RaRoaQmUNjM6rZ23WqD7opBpT",
  "key17": "27QiqeNQJqPCcv6r4e21UvyrNMgcjxR8GJ5BcNfdG3zG5pMRaXiat62vHJqwdXC1pwK1QXYSox1FDqD2vvzmRt7m",
  "key18": "2czHzT3n3QiCNRTahEyQeLKqkCuAPfJp9oTU7nVPji7g77esWcpREx9eMNni7xg6s1wEm7xp77Tp643t8K8SttZs",
  "key19": "3xKmELagqYKkBzXw25oqqXEF1aK3xhbsnU6pAYakRj25xtt5rud4u1GCe178qbKupUcCTi8sDtyaGkh5oQMQKEfv",
  "key20": "WijyuqfowukFmjesg4o2nZbuudnT4HiTVQLEib9oVpv5u4Mz2zn2wgMau8rwAomcSsHPkiFWomJGfg4zRhcdycM",
  "key21": "5ZNqQwTUcwRjnK3agqAxPig7aJ6Nq7qtN6HyfZoxdQjLCijsMXLUvTkhJPKssP4c6zBckmDqrD7AeC98tNyEKQ5j",
  "key22": "2dbQ8gkKq8tH19Q9Qn18Mnz8e3noYCWaH1XS9Tt4oe2EYrmnYjLqSs9dfdW9wwrfW5YaDbC1wmLmCCJJYDTj7ZFr",
  "key23": "3SBAazputFhhYBNQzWwDcChaXgzXZBv9dKjZobvMVUFbrYPtLnDt7AwJ1NG5DsXBDtgiNDbgzSqsF2a5iBpu56Jc",
  "key24": "TcEU9TCwuiZtHGX879tNaqZbMXxRqYeZ289z5xoM9GZ7Ti8zQjtP7CPj12VLFX6VU13ezbUgvgB6Dm4LrMZYXai",
  "key25": "5qhVF3BtLWai9qj7oxMs8m4jkiNZVdXXsPfW8vGnRenzE6xGasZLZRumk4GDxfFdcYpuBAyu7zcgX13ke11Ev9uq",
  "key26": "53GE3UNqbJbap4gWdjYzzKDH9pDB9UqGPEnn2MHQCnQXWnfYgtgoE4UnCKoPERdM4EtheTQpyeVU2LWYzJNAXEpj",
  "key27": "3iaimGo13EZc3t4Qi3iheHg1sSCu74WBAonbScjRtzvHAZ8dKpBC4ni6hhmUXMnoQnwmUceeiB2S2uDSmpUy97pa",
  "key28": "5jKVNpSh3eSSr1DUQ5UUKqtqJKZNCKpGK39v8bqvnvMeZ3JEpn9yjiaggEa5bHBEns9YqCDRPM1aUv9nHcERjpRs",
  "key29": "4tBVSBmmBRuvC3VYp8X4ZQuFbJTDhjjJ64nnzuDBu42LZFz5zdtcoWEiTpkt7G6oPgohHTMvyP9pCkmRwibfuSxZ",
  "key30": "4x8A6V7zDNc39UjRVx1VJfYosMPiAbSwQdyqxZWQAWwe1e5TuwwKXbLTUXbsqdzXZJZTkD5zR9nsC8Qahp8Y8WdH",
  "key31": "43zaSQF1eUf172MrZq1yHyyhmbSbErj1XesP3BRVSKsNKakfgD3JzFcLrjbAKhefzwydKwtmnkorDpbCty3UoL96",
  "key32": "DHfyrUdurLhm8JVdV9bQzvSGsshCu54H3G8CTwaTU352jdnafRJ5E3AYKWDwVF51XjuvbBrZjvtpLXEaGJmaZdU",
  "key33": "kyYvuLyeLuXLev52QstDM75vAh3NqNuGfmQ4pHko3iawSwNiVY3NXCeC2DxSGu3e2zD7dE3xHpLSuMKSFnnzaG1",
  "key34": "652pFh4bWtAWEB6BJLZqznYPmnWYsUrdyxwiWD2hc3jQdr18Fd3Q14bUQCU3B9qXEq2d2Cty2epjHtKRZ6qVutFY",
  "key35": "2SYYgrE4fNvPFk8Tx4GyLtDDqVEDrkgNNH86pjrETMKU4CVUPxL57WiPpT2MRqzsZQF6M2dBsGwz5JestghNd6v6",
  "key36": "2EZgut53w1L6LCRuoCzwXbRpuqBvwQ8SWmowfxN8bLz6eGP7NcXdivbpYYT15JZKL2aKhpTUEc3uQZLPbCG64AQ8",
  "key37": "5knTKDwevLtwPvpmjvdCpYgtyYySFkMg9Rin7SfTSc69umxmGKBrDcBgMhk35zFNgnsESqeZcBELs3hk5GtW3G9W",
  "key38": "4BmBwT3Amz685gwDR8trysBX7FX1d3Kw2W6xcvCiAur4w7b82kQjeGswQ8XxgqyBXW3MdcYMrmwfRgHCvFZoHCTY",
  "key39": "VjcJadqgDTpACNMxMUMwTrUiW4DFwMHXeaTfVPb8WE9jvuk9SN7BBqBfkC4MPcUFpvSowT9jVXk17w4wuzxmWpR",
  "key40": "2rXAG4ppjgAxdBF8J8tGQYvjy6L7JjV1mMyatfs9bMHywCHiAPAFt1bmx5WtRvC3LNZsrvdY8oBrR9x9kLunUuh9",
  "key41": "3WxAsTGu5UQJfQZ5t8K3m7TkdeeYa2quhap53NqUNBWBcSLosvzuHWWAjMr8bXNCTcEq7JiR3cgjJzjsvVeHqSLG",
  "key42": "59QJTu6m7Sj88u6Auhzask96qcySGkCnGgTFPy8SAfHD5TyN2RnqPt29PPNGK6Djy1TiJv7t8ARxjchWEUxk21da",
  "key43": "5Mz6kwnE23xjgD2LMKYFnqmQZb5UAfRjUNyzKgVQSDM3gjzECywSQYse2UfYKNL9BLyraRyV4LWezNVKjTHqByLJ",
  "key44": "2hGDLzFf6CdugEmMmF8bEXoGNG12q1Wbep1jw9jHqHBHSAgKdVdcimBDnAj7dGVxikAc6S53WwE6s2LyrkUGPg1W",
  "key45": "33St1EngdjbTLHvWVYYttiQPgLTjx23e5UGUfEHfGj9nb4nv6G4Jv1TNGuQQdMEWXdTX5P5GoM4KiUWsVkM9o2cB"
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
