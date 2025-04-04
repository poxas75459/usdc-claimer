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
    "cWqSEroEuXBDkJ2kG8MjyqMdCYcewcQ42iA6MvZ7urcJ9SUtA9WtoexnJykAVyb8eWesCxPwxxQXKVZeuHVVvEy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4afYqhmVFtexx4cKi6ggseg4TGH8dVGZQ3FcPDhugGAMxiQRdk4v8CrE2yTHP2opMR8A4sY96FLr4Y8D96C5jmJM",
  "key1": "vaxFyUWdUyiFExYGmAWmrjsxgbrjkp1S8CyB4kn7nsnCRKAu5bExdawwJuvq3VTdtUR2Gb3S4CqJFijQSxnqout",
  "key2": "56RsLZESjQn1ngrmc6Zt7djLdgfbMWgTJ9tCgWvatjtJu3i56c1UbpYhKR3YcBPWxfwyxmW9zWgBUSdeMf2jwmhB",
  "key3": "477UPs5Wk4xtWAKh33o2hGd6qkVFAwaEYNV9EAyNBwhD3BZo2JcVxKfER8HgUDDWe5E7vpBhrFkYLkrrmR87Fv6m",
  "key4": "56UiHeXzXZbNhZVb3SgEnRF3cGBiK7VjrN7CtDMRPVvPVpj9QkwLnosM1W46R8uecBw4ocBUAwVGmCriSPPsuLgg",
  "key5": "2ENDBunaAhQgRx1pLdmTSCVsZXGvoisDK7zC1aekSv39h6UsjHizEAGCUXyfy7mipXD4fD4aweEAHrpMV6qsUrnL",
  "key6": "5M6kGA7RgMYyYm8TWjv6DEQ5Pq9HF5PWjJJ6XwsDis6T5w8diRrzAfwqsambQnLGgwkTV3Ee2MS1uNKaxpwJBQFH",
  "key7": "2XSabm8TLeaHXTsymYprPjuwHbJCt5hceQUorBwHoqYfenga8BLvx4go6Kb9G24YUaJBiNjkGnSMPQU8MC4xE5VQ",
  "key8": "3toaJsSGzk6Sf5jDqJBKAKDAeKTwJ7NhGvXyNLJB5eEDZMccsY3MtxbX5stMw9bE8iaWcnaVaR5RZDETixhcx4wk",
  "key9": "45RS3SqX3JYZsgDA24zQvsNgYsJcnUXPLxctirG7DUUFpy4tnxDbS7uQ865vXM8hnua81YLdDmhgBEqZ7aPU89Q4",
  "key10": "8HWDqDMANSeDcEiUATHfy4TnABGaySgvihxsvCkiZ5XkpTRtgs2p457zLSBGs5Bk3ZCP1PXgP9SwWvUpHoqK1z2",
  "key11": "4eo2cbBwXWb4Ssj5kHkDjbQYJn9hX47Yea5nxA3qnrc32ytrtijGKAK1BZsYXDheZzEzrpRt7ZbuV2HEKJ7sMC1B",
  "key12": "3MUM49MQHaH27vvtknqhMye9HaXfnxyYdjp9puYXi6UWRNTmGXfPjrWqJJ66sRQ52tgHvXJDQNZaZfCJVJHsMQZw",
  "key13": "NUD84AZR225iy7S1mu46cnRtBxs4UWfsTLuhB7vWFVcuvfgQV23MBuLuM1RyZEoMaz2F4ZfE7VNiBwdZby1acvH",
  "key14": "5aMEbUqDbrQGPqBEzvbhR4PW4Tg3UxivV1SQ1TPzdu8kxiaQnn8M1PBQaPFNLEAV96P7t3agywQcaSesuoZk9xU9",
  "key15": "5S6fkwLekN1ZqgppReFifewaaRhv4tZSXuLhwRxkYwXvuhJRirGk9YNKBXcC6Ci1DrqdDwgGQutNYMv9DwPtVM14",
  "key16": "3srZrWexEGJv8HL2aDDq9MHsfX8yLzVW8RNCmbjux64WwUYWHazU53yta3nHu86EdmeHCmkbd2tDcaeeshRLruLT",
  "key17": "2ovvK75iE9Pe1BBzXpziHy7KEhUoSUQ8HAC3QFmhb4NMnw5iUNBUstyKsT4eqTHe8XMqtCD4oLcYhtKh7PzPbmLG",
  "key18": "M1miLwz8aueummKRv23PTt7PwAq1iN5yWbaXqbFWrkqeAsGwTfozGpANHctk9eoiTRHZ879oQC199Fvbah9qMbi",
  "key19": "42QMCMwkKnUsrpg1qeEqDR1bEzRid6quooHoJ9kidaSWQRRzppb2VtECeD3pw3iqbrNXsA5FCVfTcVoft1ukAnLb",
  "key20": "5a9kLd4NaK9sic4ga87RdY2J5vsGgxmfXw6tzHuHEuuKdGeiCudyyH1aeueVhkVwssyRAgqSgsq5pFwUMno3Cp2h",
  "key21": "5aYLevxhXJ5NPtYaK2tnc75mG6x7gXgAZ9MisTyD5XNRpozzfUnkX8zx4ZozPK1TV8pTdZSy4yUjLbLoQgHdR2Ph",
  "key22": "p9LTjMNBqbb1yz3FRxyuyBuRr4pRdquGXvgDQJEozR62uhLsu2NEoFr2dVxrG9KsQnpTQJQpkiHdupTaT8ySGPK",
  "key23": "21xc5naUnpEj7Zao1aCk39wR3gAnpz5RQWZJrjpFqYF7nx8d3mdLJyhUXNaujg9J91bddcYao1BuV7YYaxiZbwKd",
  "key24": "3LQ7q5fhoez3mdSumSVtF56aZNU5pf2yh9bn9B1addLRUyUCiAEVcBDiKZX3BVxntRuMVZwxBmig9RkFLuyhzSUK",
  "key25": "tE5utiLrteCzj7kxUkMupQoiicjK6ZLYvneR49J67JQB57p8nrBePnR6wCNxLnBviTpqe6btBRx7qofq4L1Ge1Y",
  "key26": "5BNCvfNqPsMVuigoCZBgHU9mHaWh3MHiFrjBiVkX1FZpHLanVV1B2NafEqwLfPTNhGtHyiQa8uRcQrN8Kn1pQg3H",
  "key27": "4q8n5q8NTfTbtoE8JsUuvH8fGW3ZiSJvtdUWtKARW1b922jXXeRXCdDiJMdk8jQkMDB3vaUqeUVkM3nV4ZnKB4Gs",
  "key28": "242Ggh6gDfGdvB8xzSqSeJeCa2wSvJKfevTTp2525cSBk2SRBpfLYRgmxrpfkaPGtpxL2SFHKTP5cUmPt12mNSka",
  "key29": "3Y5tTFGah76fWxJQbfnh6QzXXYPv2DFKxt3mEuyJiAjb8AiUuPVtdLnBMkdVzZjfWoLZZjsyadKMePB44dEkuhV6",
  "key30": "1v6mCaBdoiYjuTqV1ak5LVgdSAwaZmw138k4pSbsHQYst6oS8FVwR4UuWiiT9cjrRY5HXYL2V7HbhLh5Hh2LGmB",
  "key31": "5CUdMwQwGGR7WGNNWRJ9ktCpGXbacUqN9axob8hgsLMDws4f9w4E6P5ySLsfWVB8RzoZws4AFAJYhEV3mPLquexV",
  "key32": "59EsmLSxbVc9otWzoVKDEFTruymNe2m23cdUwTmQR8XRHLNRYMqT43bdxEhj69axG37J3NNQeFV94gP6ix4jJYNJ",
  "key33": "5CzRAv27eTxXEtZHyHMj2R9NmXeiyDVnMGbhc18Gt3LRBNMx4Xma49WcNFsH73jshBEpa53wKCLKPfZppP6PmUZf",
  "key34": "62E341E1gfRtUiNVX4VpwSfcpj3MLUST9eU5jRjaRqcwGSEEShEM5GXm4ZhVdpAecgtPB8snwY3SDRzjuYNCETsV",
  "key35": "2skA9EZXQxAUz73Yja8uNehchAL1HR3SDZrp9BsuSpveYDAVTAVtEKEV6jgVmPQ4gKDpZpPUwEd3n4LdTma4qfkf",
  "key36": "3cPvjCzZpJTttXDHobjkyThcnDFLttzRQT7UnCEXwKLoMzygDuNvsApwfFEAVXqMjoxaeFu75xiRpCwhh9bNdgXW",
  "key37": "sHxzJ22MYDNKQUmJiDdcEwz5HDa99bBvDaFbWnmqfRUg8hw6AP5gKquDZ4sfvnf4YNAHM81maHHHvjktsCXvzgz",
  "key38": "3M7ZPZFdHF7mnZrPX8fBUHKZAiUZECaTQkdarcvGUL5EhXShvcWDsnGQ2mxwtosZUQvKcHaxuBALRqWBSLUCVnt",
  "key39": "yaexJNnK2NJQEnmqHL4CMQsLHTttTKD5WMXy2L5iSmuHLUFasWbRX2cc22e3bhmhGJ1GrFEJRSt1Bp7hnzEYnrm",
  "key40": "3rXskAseHNdoY59Rhww6SsUpRwPkCjDNPMqztzGyXZpw7WnoMyYMadi6wkbnchawrjtwHe2CnhJtHFm8ntSb1pFt"
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
