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
    "4S6CUnAKUgcwASmfcWHmhhX3Tbbu5kmtiuRrHvfSaH9jk1qfzTbNjxgzjUjRwfa5Qedd6uXW8oGNbExghUHosHq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NUbDQSGiv6yTYoR3UPu2QFTUc3D6vvhijF6ewShn3hzw56m7gyW94DeMVbs4M55PTeFEuPyrCSqDu9tr4REHpZ5",
  "key1": "4sonTXTLNFignnNfXZMBANYSsgneJuqJXho8aDcdNhGth2jRvUYhVDJkxDtigJBKbJFDy3Hhr3X8eATR5BCmu3Vm",
  "key2": "N1nYNgHrUp4drcgeQ6TPagxykby9ymr6gYgrbGj6yseMwoR6giwfFSGSqxRXTaiJtGw4oL9FUdnYDxwUEhqtyyn",
  "key3": "3uawSx62yShYe85rpGPBJxW2yYSGF8Tnd1tvno1P7MQDFAELKFMK8HiUHgto4tDevypVUoacWNkhFr5zJEZXDyzD",
  "key4": "43RZRQ66e4aWjHG35AFcy57fPV2gJqYj1J5dvLv1hh3dsv3GQnpzdvJMaWqMcB9ryeK9FVxCwHzQyHugpWwP5UdH",
  "key5": "3W4Kb3ZcPQWYgENsFoHuEBrjt1eZEUqqPMPHWa967YmBeeNCWyd624B9MZ1A54uwZQFKi8nw62coGrquDev9CsjU",
  "key6": "2h1wxtzN5p3Zu8qbV5tDsiQmKHmUpP8odUMHaB9497LgJTAdk883RaX4KkEtbyVFdKbYnKFrpK7vNeTritcSG2HP",
  "key7": "HGqhyKXcQnXLtFoeQBQwnygMdPrp3p6yQ3npU6w6HwktwrGjYHSLD3sHb8WwcbrZnM7dFBm2jSXSgJL9zVW3ZJ3",
  "key8": "RARAqSqYkEGtwp37b2c7kT5XsBJvDyXbNRy5A5SwquhZ6dFHUKH2zaeekeoLkyYJMVGiMikCyMxzwbFFyQH8CuX",
  "key9": "2V5G9p69d7NksVju28oaAxozGcGdKQe2RmKoqKFFWsabF7zcHgjMqfbMJSYqbFgpECbmfvkDxhYKAzdPZRJWiacM",
  "key10": "4rcS2LEeUCSECDhWcJJDHmr5bSfgTJxj9QPmJwmPCVNsrtA6wamgCYoiRWSbiaFegVoifw8XM6AYZYEq3PfRhW7j",
  "key11": "2ncGM4pwFB51AYKRMJFT3x18KtY7Q7niw9akm5ELEe6mVT79MFfFB4s4DRoogoyHixAt3S1MLQnfsY763K2QtPtS",
  "key12": "3W4GmzZfhwaa3hpYxSyUV52zFWrNpPkes5BxAVQaNG2nWS8vseMCbDQMLyx4YVmknLm4QNDhhb3XSyMUQUSmL5LY",
  "key13": "4ScJg8uRwkpX56Me1RQybP5CaAfmnxKMqm1qDLrMas672hyWWXMaxK8nF1FadiUKaG2z3GMZM3rwfqLShbqyJBW4",
  "key14": "41qWcaK2VsoCN75Gnp7WChX9eG5dPuakqyeXBgWJ1VszZwpnRFNm1qRs2M7vUUdft4cq42BiPVHSkkf5KGc9Sh5F",
  "key15": "2FmdBofkEcnbqyjAtJkZKGGhSPT2w2oHZ8TVr5NF9yiugdenXGmsxdDzPPAe94ESL6r3AUHuZCfos2a6PD82tbnY",
  "key16": "2w3rPFPVAXZWRjktQuVy3QBSc7tN6mxn4ecR9idt5wPs3BMStFGphFge2mMLY6oPo9NLLrPdGc7DR3324udXZpc8",
  "key17": "4wjjnxnjQE4FVibeMKjzsi8Z4Du6iPFbdovRGbiCyaBdUK4dJiAY5twM9ZuLxUqX3JQ3ebCvXusQ1cp6koaGpaWy",
  "key18": "5LCnoDaHNfuobwfv4KhZqZtkwSZmPcEvHWJDb7KGhJW3LkmwsoAsNm6rz7wwLt7v7qDXGaXe5iUS1sp9f5KSwDC",
  "key19": "2kmsxzX6PjBn5GWefGXYb3Z9BpxtXFpJyvb79e1DxqvHbTicjXdf5dAa6nbctFL7TbqYPUExFWTJcQhyQzB1M7Ng",
  "key20": "4gLvDJLEM2banv935XCoen6UkBpg9w4BrohU5ZXXphc5ErijTGmj6oa5FKdhiNgLAq5etk5WzXijwCwo63XMxmgh",
  "key21": "3QnsV4aLZYZ3UuaPkYJVVkkVuuYJ11NJPJ7ADP3HbjVWW1Qer7WfVzKYfJ8AgzLuYKcq4snPPAmTvbRDEgnpLyrV",
  "key22": "4REFdyvhh4APai7kW8osS75XozyMTWC3W7k4xYRbFzttzEUc16BCJstJcBtS58KyPSfeULwNa9H3dyzKTXtkVMoj",
  "key23": "2eJeYfeUx8Apb1f5ugqwFaMh7yBTdK7Hp3nHykBX8WMV41hW6rCgoXnefr3hdfk6TKJnCGPSxMx9FDtCmcGHdVNh",
  "key24": "23sEBncVd11Fy1orPhjGAJZKQVXhEH7uZuavBeWckDr8BFp6gyHKvokGeBszmLeBttdZPYsYMmy5Vc1HfHQ9L4FP"
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
