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
    "4sPpVkHmg15nMsnERNfAmuuHSgwW4NHUFYmJfqreUeR857CMboSiBtNJHro7nHT8Pm4dHzEKrsBBAHGHGYSeEzQz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wWu8PTh4viK4fKbpEmPhxLV1JCv2kiRuw1orUkXBRNCfNLwtZkNvBJxYbW4ajVPnDLy4bomkLpuqagyJjMWr1xY",
  "key1": "FwALVot7vW2LM8wC9f7uV3Gdtmuewy8vbwqNJ1KhSNehgej1dHePVRdmURwziLTEM9pMcEfd1AJmvYyrPUs8rmh",
  "key2": "25JzcRoJaijdrDA4CXFRwJKKp71AvWffLWnQvJy4XnM531QYR5v3NMwUmPNkPqMirX3S6dNuYMCuF27VYUi6wkkJ",
  "key3": "4FA1SsnSL9TAUAcH18GirBi9CfAgfP7t3G2EtQLum3adzhiwDX6cwReoeHQSFb1e3ZkbAwkmbx6tkARZJz29aj3b",
  "key4": "2AXg9VMLWZYESr22joCzivsTXeC4kAaYWKWhhBX6Q9rXVtzy89o8PdF37nkSQdMgMHSjTNr7ufxYYRhfqoNNeT4r",
  "key5": "3jUzvFLYusw4t1dE61ZdUbn8rcNA1aEzGQ9st77LyEpMy9FrBnQDoCJigr276JyXmzzYAvcEg15bX765uQy2Ch6D",
  "key6": "2NvcMbBUZvpgPvn9cpBKrNasNjhXC1zf2KJi8iwAjSAf9Qbsb2BqjfUf8A3xXf34fX3LXNBYqCv7qAUj47vXfqAt",
  "key7": "5D8d7pbhNqVbZMKsErTMV4c3SmAhE96waf8Vr4WDyvVHxY6PovXtihdYwByDyRcG2dd9MShBcX4yYadEUp3xaKMq",
  "key8": "4VSk19rfVWCxUzYwXrbVnFcAvZEKee8VzLdGpHsqhLKkeLvze5pPmchnGW6vHDPVqoVc6Z2hGVhL2fduutEQ5HRm",
  "key9": "4uj9iVBjJRtH1bGfX7GJWNbsWQckUZYwq8zX7eYWp83JtWFFvHySUDpamdoeBEiM75j6gotpfSn2j6mMWJyHB56R",
  "key10": "5KLnSEqqAyDA4WcrTR4PftorZzkUt1JpsRYsZX5fWfUb5RYQtWQWtTxuXCpav9BUsTdSui6SXRSkUcbuQiufdAzs",
  "key11": "272UGF4GtSQjq12VR2DFPGMj2HgpgFDRjsGFVQBL7WTHesBLsgzQdKJ6w9tLyerDdv3nSJ5UyBUGubdyQUZYS1RD",
  "key12": "2rqkNP9qVaM7r4GdvujrZ29bnCwfo2hBfimWyV1zLrrdUpHGx8swrESyGYDUYQH9gBtgvo8YoUUn1wJwVXaGq8QR",
  "key13": "5D8Mmr2ihMn1ggN3HhBZpjCCV3PLdKnLHyNYXbCS3Q8n619L6NBsS1ShVzKB8M54Q1Zbpyr38mbhk68boqCPBJ1N",
  "key14": "48A8dhfESio6UFiwkjbWrzyoLL83HNKmkXF5YTQUmx4TT1DUPyom1H8eroM1DDE9K5edSTXDu9uaXmoLEYhonASU",
  "key15": "2S39NT1wv2sLj15UCVSoVRQQVgvDe3jH4hqfyzu9SVyJkGzgjjrVZH7X5MBfN87BWjy1qzYf9CyQ8YRe7oRgvdj8",
  "key16": "2YzqZntDARjf4gNPFTHrK79cHeD5w1jfPTvxJt3rctrgg6rAxCcQaXxQWfy5GfazTYDEJRZrGTc4JsjaSZFTpy2w",
  "key17": "5unUhnoGp2CBqJ1NdrhNmKRL5Vc3nTvni4Ru4JoT7Lmo3oZ3Bfk2uEsxeqhmXScRvNavMwjpyMNgBW6ZaJpx96r5",
  "key18": "3HShLyhySYmnQ9RAgPK7hsrGbwb4KWknRtZBJRpBTHbb1kc6G1B5EfgLWsuPhECDa6EnYpjLaWLv88pRPHXs2GBa",
  "key19": "2BZ7DNg2qT6TTd5c3QL1bkJ3zBWN5PckxBsk2TyDGsNx5qFrV1erW5Qkh1uWqNNG89jx7vhz6JHCbwdF9J4Gy5wn",
  "key20": "3BoZjEYqFa8wetgmFHPNPzbBzWuTQyjrgJZeaoqkduse6tmgAo7mTVVnBBaSAZixCEYYmgcwLi1g2o3davNLnaZV",
  "key21": "2DRQhxVrxMsjd4FQDAEnLefDQGZZGGZEuE84zFfa83tdFa3RFGS9J7HP7jBgHG4yH2SzUFUD2NmkzU2emYUt92RC",
  "key22": "2V5aF3rFnY4AbBKtpALx5AWwt4eDuZiagv8CtexBL2hBhp74Yw72i58LJYLt8NcTx5PU7wFKqJC3JhkATg3dRtLP",
  "key23": "2TbvaeryafShexp4EhGsFiaZacTZJHWvuUB1ShL5cJRpCDt23TmcwjFD59a6H5aU6kXrjSBFnncXXz83Nh6Yp2ex",
  "key24": "ycsxpRYUPbWsG4NFTRaHPYCgqaxXM68sdc7mYHJzbeiXZbcDt4b5U7oYbDRbrUrzNp8jJfdzW2DcBHcwVBsQ6B8",
  "key25": "4LbbrVwjNuxDGnut4cWUnjcos2XQpBmsjqkBZMVbyoXEakZKBHYhhFkqdpREFtbT8HDyDNGreFJBno2VpXJYMpVS",
  "key26": "5hGZvs1e6U4NVodimTaE3JyN3pJaPAnRw34WyNFYaHHnpAjHnM1UZHZXY3LmbNDmH1ZdEQJiuhdPfG2yJismjwTy",
  "key27": "3sZEchJyHiy5c7DKf2UL45xh6VopN74fXJVWqCLVar3isdWKUGrxZKPC5rPGJoVnFThLXvn17EMoqtuumt9JXBUr",
  "key28": "LQGVvpQyYwAYjzeVevEATkMhpgZSejgZikqTsGfP8ws87xCQTX7QfZGbcw6Ciy7iYqUxZoMPFTFbmUnDrL49asF",
  "key29": "5FZv9UP7zbYdheNp6Q9u22qcsaRLh8Q4S9ex4p8YBqEnARTeA514FrCpNfmwek4pMW1jed7Tuqxp7Xyp3zE2wKzZ",
  "key30": "3UWfiKUtghAzu6Pb9o5YQwVDgFRQk8txB6u38jLwz343JWDTjyq44WY12c7mrzvtHQov6PHZC7Q6eXgFF7DqPHHf",
  "key31": "hVc6CZaJDAaDhx2wCEuouin6P67JFgD21rKxdph2yqyGbB22TxWBmrgLuXhwu8HFiwfAcsGX5egFiTZ1h1EFQVH",
  "key32": "3kfDwigPiFfK52tqncjb1q34nQfoTNNuAGhdhoVmkLhQYN1jYB9iWszi89LbftNyfnHxcqbN1qKrPXZS2ZRvfVDF",
  "key33": "SPvzZtYz1nWmY2cZZWpKWme36QY5WjLRWc7JvGuK4V5mPkjEWRn53Bq25T2rxgtPeP5o5uZ8ovDwRMzAU3asaVB",
  "key34": "26h8wgzRwsbEuZFcVFLgQJD6GARFyhz42VPgThRDkYLbVvPSq5Q6AvZLWib8GRUV6W2vVS9GGPwDKmXPmgxz64RE",
  "key35": "2CMjwFbmDFkJS5Rzei7yLSAXQ4S8EYkqqztK9hrRabT1KqwLGY5imkwxB8Urqffiz7RmDaDUT9ZEKTf7QCZuFpjq",
  "key36": "Kqs26F3dieEsoVXt3jevHPDzJFNNDvTtjeu7YHwajMAAHx7TfrWJgULjxZGt8QBJbsNDRGuyPFeKykKVFuL2sHz",
  "key37": "4bEGTzEnQFYqdbsrsmgbsswdD4ypZA3p6mgziT1EVsu6LDVvFFQEMxVPD8rB7Gg1jtytHcsCtk9mXFqMkTBw6vAp",
  "key38": "2WkDeDC4ViAdogNHZaSLfHVW6RbwTXJvLvR8ayJfDEvfgtPVjn1hcEuY2A56tyk8BaeM1vRN7co53eAtPUCi2zm2",
  "key39": "4xcdzUfn6SmYoRRJZ5DwA658LDSQ9QdZiWyUuu2m3NcydjmWEzePMiGpxJc7HMN8mtBz5asThoUrv1skiuAWcZyi",
  "key40": "2pH1iENV8syUwoo37dX7GGjtGx9jMq3WVsP8pAYtb2zbsLrCosPm2nFELYZkUJXDbJq8gsYyuUzBZqgmAKjqDCHS",
  "key41": "5AoHW1oAUBY6jbn5xkkueVF8UN9XRYtFizoSFrZYHKrwksQ5tYi5MBgMJewoU4fhvPhwMwb2rCDJLfCFw2Bwx7Q2",
  "key42": "fN4kxc5q5SLpZn6AG9zDn3RaEVsUPU5t6vcDYYcbrCirFMR9a9KJzbRBAvKWNNTPpJty5gTX16zRaNzzmpy7QLv",
  "key43": "atrUnunKdhe4CALzZwtfgtmeoEZxy5P7Ft73ZVzUUxVPo2qBTVMRSTMopTtTmbSUaJoV4byEPDG4ingjbrwEKPz",
  "key44": "2PtXjvx8fr5U2UfpFWXsaCVTrCFsXyDvSHLqecy6pLdDYsJW8FXodebDYv59to3Aks1tyYckurk3g5CNQRo8p2dD",
  "key45": "4NyGa9MoKKQ24uSQYCqcD8UukXgknVDD8qEqo7xrSu67kbajGpLTCAJwbHvW2gT7zY3fqbZx2G2Csbf7fddEbWbP",
  "key46": "3dESuWqb4JEgdX6oqm3vKWFeDLc699r2MkABMXFJJxCyTPFQcKwzUeiLQdnFE3yPtyG1zAHHDJ8r8EUFU17EwUK2",
  "key47": "3Vy9fCATbP6Kh88pxzVnxvgshAWU6jDMcqkCfrvPTcurXyS6VCY8R8BqdQG6pY3Ne3mjoZkWS1AavwigM9hSVX6L",
  "key48": "3jDMHgUqPD6M3BRhicrpcmXfkAWHqj42gsbgSbq3oBTqThBc2NhVkSKpDwgWAuLFc8wa8gFNcsRqXbhtXWaVLU7q"
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
