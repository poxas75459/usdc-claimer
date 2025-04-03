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
    "2PfTYArX15pdNc1i7CwaiSXJB7NvpuZh1YdMgVoBxZbMnZ2vtx4uwaeKFxmMSPB92oBMTkf9P7HuwQPHXNhybekS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qYxGMuFZ7wREJPP1fbgBpkYZsm138xBL6GhnCCHRigfAEW542gD2tMULooC3vhqtbFtWTy1kDEUm1tMtYtvc795",
  "key1": "5Xj473diWYJWmJbPBo9nNwwB3LBkhyz8w7VhEKQjPN6HJMX8xEZkgKHuJM9qV3a2pkDCH9Sz2RkJ2Hua3ibxA7LG",
  "key2": "61bphFEatFMt9KwPu7bq43z43pjTueP6mrAzVXquT68GhFVajSjJBiWnoHoKSy3jrsrcpfinyFjZpFigtLq2h6v8",
  "key3": "Bz8DAZr4L3vxXmGLTc4t326EsHEEZq9yhzrEht1znAzmiATpPHWksTHcsfJEox5FcnMfp8qxbg7Myv8fmcSR1ed",
  "key4": "5dLPGAnnxW3TnwbyYbLfw79c7ckpW5KktKSD56ZewGp5pNHeVY25UQDDd1YK1rb7fJoUFAF5ThqbEJr8eSLu3ajh",
  "key5": "41f6H61hi6B8F4gbNj9HCxeifLsjw8FhJHSBY5j3Gp8RGoS8PL84sVUQsyvToQ55GzVyXzytWCjp48oky4iMwB61",
  "key6": "56eVUVSBA3KsyxNzTxwL3yv211rpuyw8oA97GT72h1Mg93Xwy9tePzDkeg5awRSy1o4juqiJM3fNMA177nWZ7i56",
  "key7": "5o6KtFVnKEheWePrEWHToQeBPHCSpERYBe6jbYkf8FSh8zVEpkUre7Ei6FFVveXLAuQHTLYSwBb57erdEDYWrT5W",
  "key8": "4oC3pQg9UJoAR548SBRBQZjAMSjbECGoo68ecRNXQ5bGUeRRCf8outSUtppHwUEULqSzxQXd1LhrzcTkGwKB3MT1",
  "key9": "grSd7YbEuypnGPgHe2FAwGHWHeZ913LNLBSL7mWMENkHMusds1ub9NJaTxt3dWbwKKv8qRpk6dg1GxuPgg4JYi6",
  "key10": "376AGZuJiNih9xVNzFrwYFLi6m1UBvDUk8UnkZgeEtdbySUENDR3Dc46KPgTR8gkUrKKjadZ2srofd72NpG3JCGQ",
  "key11": "587MUUzPoeM97wLxPFbiUQd6HCkE7SpUst9gLB1t31pUNGRKzmYzb2GDpmN5nvDyG9Bfim4u1f6D7wsnGzqW7FNv",
  "key12": "2LipJYq2saaSu5iCPLFxRFJx5SVkYfqLNiYBb1twKHX2WMVqyyTRYaRq7VxEWFoJEgEx8fqxHBDz9tHTnK4FzgKj",
  "key13": "5Q7x6YwUZgcCdu7ZyeuqeXk2ca2yTUTE7KUC9SzRkT5Wn8YJryZZksjvD76Hy9uTBA9rh6C4aGVBvAZieHxrjcnG",
  "key14": "2Qpx8WRT8jk348Fei9AkPMkuCHMEMgSn7KyQAGNMoC42FMTZWjLEzhBpUc8djw3dMSUHptiDroMWdNQFx63i7vND",
  "key15": "3nhaF5XNThRihBfoG6cmamd1TaJodYTVcuhADfE3iLA1ZAsMfpiRhwtSyfepjW54zUE2pAXkeLd3cDUhcujf8ELe",
  "key16": "5NV4kZPVXMYHSrr84aXAqF9ZBGfFdgeLntR1ZbH1RnxgYyFponfd5rnFVN8RR4CrWn7Q81qak91KqhkP3Em3qeV8",
  "key17": "9V2SoHPBBnZ6BxYBC2JUyAXKUo4AqMYeEzuEeYMC9qYc4DxemxJhiojfNnFJeLDjAt4oWqYTFgH4mKs4qyjL4B9",
  "key18": "5aDs18dqdaQ2KGc8W9esDx6vFEX1fuyki6AmJxYRB3wg8mW2Td5RbPNo7LTrPgcZPUD4876Xqkh8Gie47ernoprL",
  "key19": "3ZsbNum1tBLjAvo2akoA28wTAP94dGvdBK5gSLb2V6zYoxc6AkdXQf7L6Wir38r32nfD6EodBEwncb1W7foX29kh",
  "key20": "2vAMmwaAt5pHMDqZJ4ia6gSwo3xHNLxEhg3vdWzKbw6bN2nzY3cbu8ZfkbRSXJekh6JNkj8b5WwJC16K88ob31Ta",
  "key21": "5bUm41ychzXdNASUjkUZJonJrWTQismvMCpnzGpHyjm5ovD87pejZ9DY1TmPW8Ev57EBGApQsbyYvns98LX8TWpC",
  "key22": "43io3nQWapWdGBobgs9sef4R5z3rX6VVh4Xxf6kPhxzBexg2DtQBGNvji9x9HNxEB72UxfGkpTsLmxFfQqtQtRTb",
  "key23": "3o3BQyf1nZM1cCpZ3XuiktP9KNKV8hCacZbJdY8CwaTxVwEjk2ZFxggoypsGyH12WXrmnnBFpPiup5BWzz4CGNQx",
  "key24": "31gXiFVuoTzMhKnYKyKvo5GbSDoF2ggzzXB52dTq1Q81FRksAqEQJ6QdvmoBECq3ni6Fnb317d2ZpPEChftxHhHQ",
  "key25": "46bSew1F7T99K42iiAaZd861c7n1v6k8zFuXLPTH8sqpJHQXtkvumT4ivFynJqZmukZWn3i1VU15nphBSCQ1GsJR",
  "key26": "4HMYE1kdezbd1wqeUB2BzUTRh2M3J1WizbkZ1wErg85RBRoqzqsZWdBm5NYTkBhZ6Dvvd4w7UNnuAKZntg973FHF",
  "key27": "3GT5hGDLix4XoSB1DoUB9D6B1p7sChQf4Fv4JytUdcmWUQchuiUznxckCCLp3cczEUvCex3XQBA52SVUBzkbXhzA",
  "key28": "4vMxqVRxNhaSRFKW8TUXBV5CixBAnSz5j2MpE75mWg5PZo9BC6qxVEx1CwakKeKxUCtTRgBkyCzygvkFH8RXgjct",
  "key29": "54heSFhGDrdvRUGsRfD8zzhnvvgaA8fxYT6KEPrtqAeaWEaUyfFs3V8RREjHeggWKQuS5gGhBTnYvJ6Yr6J6gBX",
  "key30": "2pFTqBqHjzvLXNjEHemRSWYpxMPRCTrzsyGzTPgLLRFKpjzf5sWTv4iNLFCV4cbqsFu3VcaNSJoSvYV34TuBXaV5",
  "key31": "3NGpiC9ovU6AbKLneqdzNFBsUFJozuLHfdMktqPhYUzfScuoJCFodtibRTPLjjHY8iPLddQGLpoEpJteZsRkjeDh",
  "key32": "5UNd4sS55c7naRzp4m9PTjyNSdio4J8rCnP1REmLHQ5ACW2HXf6nLb6xJS3T8Sj3ugXXzBhmnmFALbwTcN7Vo6wP"
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
