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
    "vZbVpD5KDWjgNxwfcJoU4FmdETSNPn2qfRsABErjiadWMamud8LgpceQgsyfwuAgoQK6G7A96dxAv4Kfcv7PfTB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gSd8BABvndWZ8bGjD4KhMjXsb9oUsVCNRjKatGo6wKfnZLEaNUii2EDCQCgr7FteP9yhtfRVt8X6NWnB5WKumUN",
  "key1": "25hmQ1J6fsrUsdog4r3yYSVFKJPNxTQvpsdNPSRLfhFcccbeLHFfRYta5hnZkjNDaKLWrenbS8uoLkss8pMaogXU",
  "key2": "67UvEaAiUoihaMJrWkPTYYpi959m8JmzP9uH4yyGscoug7XAcumxFG2Z2fgWSnX8EGjr1CjZ25ZkMkk8Rb5nszP6",
  "key3": "3CgG37xdSmNwZ7r6bdvPdkDMNGrG5wjHCXHwvXTeRhqLidoiRddtw9hMBu5B6wvkrBzSTSgkaVppc8ei6462pJXq",
  "key4": "3xy6Ht9ZAcHsUZd9C9cYYhL9K7pXaBAsa4V37vYyq7onBc6M36msMkbNj3ArUZBfjPjtowpFgM1GSJEMQMbuZUHU",
  "key5": "2UJ5r191uiwaqn5EgtKfb5ZwzvtkFc2mY16sMZbQ2X7XfKCt48vaBpLn2VE8VdQ36yjKZFW4B5H77hQwifwYo8YE",
  "key6": "413sAL3Jhv1Z7hzRa2HecPab8PijP5zJPNruchyAENiVs2hURt4cZr1LXE5YT9tS3Cwk2LzHGTK17K7B6PiakDPF",
  "key7": "4dUYTJr6ah7euUUY669sEoj8X5UMwBHGSRrYfUWM7q565TrSiHbkEDExPJjzsXBCiagPqjketSDaXx8oYxxv7w8k",
  "key8": "2qGHERnSkeX2xjUg5EtW3Kf55uvMrQEGFooYmBDEf35pNuRgqt1rc5gPz3N8dXvQ7T4JKW7GVyi6VMTVq8Xo77wY",
  "key9": "3v5CUT5vVsQiRqYNmy5HpH5kvWkcChm2ZdU2iH8Njb2rVCSofuisKDxrLyYAk4DA8bKH6ck1nSuVbcywTMyaa1so",
  "key10": "xC9NEpJxxMdYD5huh8Baav2r29uonCTePgNbm4zYnQbC2b8UB2W8oh1AXbNUMdYe46KG9cYTanna41Ng7vpeiMe",
  "key11": "4nonw7QvktbvMkxkbh6xz15ayWBqSdZqJCQmj9RALC8SGMUjrYDEzAsq3moJbjRQzgJShMCSEecjcPCTMb2PaRR8",
  "key12": "5ENSN9NaPUFWaydYXcWciBc8F3vd7XNNB23xrtaK2Z6yUdR4mpT2zACkgBtK2ZMWUpGGRTLhw7AfCYFagVwfeKwQ",
  "key13": "4R7foqF6Quno6oRLKwyaXbTiMxZtXweKrzYRugpThgkzxC1VcpWTNS74BSsjkKyupizdwU7CCjojaHcuVSQerNhG",
  "key14": "5K9ymLqEPcm8TCbU4rWKKw573ZdWapXpDZZp6whaz5yxLXegFt5QRRKttGPGjxCM2dcJPHUcpokZEpz4jzgP4Hih",
  "key15": "wcJ3nhsknaeGA2HAEkifBm7HfnBLtBjtPwH7RvmtRk1rBaAwgmx63QjZAg29TCeaixBttanUkufxncBXbtuuc4r",
  "key16": "3ExQujg2kR4o7dDEsCyuSPxxH3E3TFZ9j2tkyi9FUGHeeWMVuFyySyife7N7zUPY9dcWwXNMTVV3KAMS2CwcXjDa",
  "key17": "67Vqc9vTGW1VFdLcTpTe6z6aGpDrMx5c5xsFFQE1Tiy4mevHLRs59dpVBBPWU6guinoyNn5fJqA6fU8MLAAym1Ux",
  "key18": "5ppAZPxfRF3zsKrmvyYSEk9MrH5pF4366LckGUSrKjj7qovGKArnAUihra4ceTCJnE85ygcALthVcf4nQEgAsPJc",
  "key19": "T18PVHvxskeKYoi7ff4Nv4LXrPoJCUPbCqjKHcoeH6gXZzTwn6ZGWaYxDbyJbQQe1ecgq6Ho59uvJrvfZgmmawV",
  "key20": "33evrhwfUnCirAS7u4ikoWars8a6hg5JuRmZ41QgKWSVNK1PTDHv57LxWFc6NTuxZHWjxxoma83mN7ArdFHDvULa",
  "key21": "5WdmHV6mw2dZ4fFmBCV4AQnKxpdwgT2JXgyiYdrwDg5UakxCprg6xU7DpuFKP7sZvJFU9FWojG8irZyeA64JSvYM",
  "key22": "spMsCVB8z2fbL7MieqQQZ21tmG2eNqESTyeGs2Q3g2uUxmd3UPgmCEZKLznF3xFLwjXmr7DqWMxmtmYuUsx7TPg",
  "key23": "4xpAKKVJhFsiV3UQ9dTFqisNSjdGafQ2jhSDHVuarYZEDkbETJBBWp5kwH8RYmCPQkxUMVQqzai112rafZC6SR6r",
  "key24": "MfC8sYLXgsTrdPomYkDwUwapXm8BWjYPJunGgY6zA7PEEDDZMt3XFgv8eFtqPdqM3tsyxwW31oiNY12XUTSfP9S",
  "key25": "4cYptZU1RHCBpMGQMMqePcuxmpYvH1wWFW1rX2SuYLs3NDGVNovyRqSnUJKkUBJ5V4zGgMVrKu74ZJbGs4dKXRuo",
  "key26": "4t5iVKDZabLmCyCB13b6aUbv6V4vnysQyjLiwQtkAWLGZzLG58qnhTps8JPdjo48arGa1g3AzAMJLZUAGMh4g1sF",
  "key27": "3swGTnnoEmZVjY7YvHvmWemcVWNS5Qb2dai1uNn2pa2yVKTTEAnt7VmnpE3aUNpBYt3xuUjCEJK34EkH8gqjjwSi",
  "key28": "qgzLnWwJdN9ZajLvgyUbadgUwPMfHCfT8h21V9xtxzZ82vET1ogJGpg6wcA8t6B81ANZYkp39D2ZeYQe9LfXJfc",
  "key29": "3x4paHjujCcuv1tPAxxPYMCqTKRaN1Nz6EPp4YsKm98jCZ6DPJo1mxjh6Enc6TKpc6HRfDuyrWmsta3GximKxw4V",
  "key30": "2PGHE4eKEsFYFmrsJucZUHLZw2N6ac2Qpg1rrCe3SgrszS9Xth8492fahTSDg3m7zPyvjdJB9kZdmvbKBXRj8EqN",
  "key31": "4xrKsnJ9m3JUQkh9KjSo87E6dDPy4sUyUrWxfLLsu8Y2A2yTcBCERpaGaDtjcYgNjs9XsT1pduUwuNWNUU4jDdyL",
  "key32": "Yji9xcZau1W4tnBhfkssba8ZRVdPGpVCfmR9APUzqpoNJ2aFnTS6di7SWCjmgAb9DPimm6zASc1zanHgCpCNUp9",
  "key33": "5VGfRSjYXJ5aya5nCvLZbSectVttS1JJ48JoKnwCgrWpfs2MWKubtAMdix9nRXzJg8jibjQF2gWCby5KL5iWEYdj",
  "key34": "2jHaC9KonVGzDAVQf6qahdg5VCp9TMx12aNf2Myetxiiovwq7si9tm14WEK9tQFWY2BqgZRFLAVupfoEH2M9ymzr",
  "key35": "3fWjyYiFFF977XrxYSHVXGn7tpkchRoizqPsHWk3Wr7vBF5d2HLMDFMV1hcSXP3KpgoSdjiaQeL7Tur3h7Wtt4Ht",
  "key36": "3NBpsBfCSu4QftvK73TXZGcj6Xu2tMByDv8JJMyrWgcWMrhmZdSbzZM4CuuzXhUjZpeK27UifrPWjUu7nZbUE1W8",
  "key37": "4yN3nid9e9eKpDGDZFrMbgoXPH75Bht5KcCoZiXqmmfsKKRwvX3d8GcHULV8e3LmNdRfbefuUUi43gNcdCsPESUB",
  "key38": "2gdfGR4PrUYvGdyEPzMsCu58rUNYXsgek5jXU9dRjYJV14ao4txhf3LQAdi7rCJP3qdVqg6QJ5D8z1WTismNKze9",
  "key39": "4vJb6VKCYfj6bPEEdvqrnu8eZ27NcxcpbJwA87hPe3WeEFwpiB8ibvioy8u1Gq4TUrnR8A64pSADMfcmaid2NURE",
  "key40": "5EWKvcWjHRFDhAMhvnBciR2qT2Lr6T7PFe2DpNBL6BGE9b8DvLwPmwNMBSMYsrSMBLWqvcDMeHdnSHdwiZJEeDCH",
  "key41": "5JJGXEw2PpobpX1SbxcPbz2P6nhLtCwKXb98D15cFgakifzpKrEVMrv1QN3cp2b5fUe5UYQjZeTD5B4j4sjz73Z1",
  "key42": "4K3eNm7PkGvrhHBPTxCmWeWiRhSb5TMJME8LM43ZuNcXNDtYWhYrmseHfKTEtw9CeUsR98c2yEKidV9GZPHh25VC"
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
