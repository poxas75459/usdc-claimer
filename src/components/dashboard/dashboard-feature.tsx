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
    "3yphEGGDJim5R5FbZyqLkgovt7LuPzbi3BkCEr3LZvas6FftEUQz9bcn1VyhaQLbCfs5xMbXzXV6aTgNd9KH8dzo"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "2gX4tqzQwFnaSJCSszu9MiVBvmcwj3KNE4Miw9UP4KjnR4tVyfYrVKd4jVPHHg3KjMCUQWgKm4srPFvfFK5SV5Nn",
  "decoyKey1": "2nZuNG65UNfeQrxpNNAxRpMVbegqd6b9mCYLUiZiZK4sbeVHNpioBBv3edkePpzAvNoZX4arbGVhXhqSR13bJ3YV",
  "decoyKey2": "EPpXd2H2NsewMwChCecN7g1L6FFbPYgPURFyvTs7uFvGNyLgysj5g98jrmMxVNk41Tv1XpXyahUgBjggUNGyPLB",
  "decoyKey3": "4fzgsPuvxfPcNq5im6KAv4nQDzYLY2R5W1bgfSNMmkthU4R7bHU83egKCa4rareTp2kYSY1yNZT7ckHMNkmx2xo1",
  "decoyKey4": "2mDm5wTj2H3LyKM3R271vgQdbahgCozXzQFt2Hser1wsNkpmcdHu5aazm4fmkY9g6yhND4DATxQGx5cY8vEYFLrs",
  "decoyKey5": "67NbYggjjhf33zoUu2Y1nFAT3iLe2JK4EYcQryKbREJMAkM5WYt7WH2g5y8LFrmPyfm9jD2jJLCyHZdeWdXKciZE",
  "decoyKey6": "2Mb58mQRERta9JytSr7RLDU9Kii8WYduwwjYTRPtqKJgJF7A8UszxXQiangWYPoPL51rEQAeybZHC65h7Nket6Gn",
  "decoyKey7": "2H553mDM44ewQoqGimbs3Q1PHYvU3QCqqbsQxKW7GqDmPcEqMkbSJqK9VCYKXEGjN3xU7eLZSP6BmDWAWj2Jv9J5",
  "decoyKey8": "23az7nb9hEQmvCXnLG6Rk6JkusTupijZr5KTnZSrVrVREueKEnWaT7SptvJvjR33yztN7wXRGHN1EhFUprB3JrDN",
  "decoyKey9": "3YmsFjXAkgfvjNASdSbFzpwFyRBurx1ESvKQrshqqr5AtfgFnVnn83MRWCqah4ct98pJEaMV7zWHuDqQB5AXAYF9",
  "decoyKey10": "d27qiMJxuYxpVuyHZLbRiLRQZBFBzydSjaJW71Juxk2wQAtnP1YkKXs93PEMQNdDBkg5GGKAnBwyWX3QWvzjdSm",
  "decoyKey11": "SJGbJWyVSqHJfFBDfGoYjRZuvjr9XU44Gi5NKiSkDJL1BATvDVXzvsLPq5wYzX9SdgnRdS8R5HQjz8eZrGiuf8F",
  "decoyKey12": "wBvKYNgyF7B8dM7zn6UAxaKpcQbwkzYJZyX2QByQ5s2VHcfFkXHaY23bmKXpcQxdmMkMCShHdcMGibNNiBcDjDB",
  "decoyKey13": "2h4dksVLjYh5FuCKUG2S6erTcNEJp4GrAa5HjJhSNyk7d2L4hACZQujJ2eFe47vy4uH4oKD8B93WVJrFhFNjcWKH",
  "decoyKey14": "2hp6bMs5gEKkRZfGVR6H8DHbGeVhTi2cMG4HJ9kzimR5MTmDYZWrSPsmVmWhVgB121pYSDaNM8r8g5GFyQKcJeRg",
  "decoyKey15": "DkstHYSa4YnbigTNJTHrEeQwPPvmPFfPkVVCAk7HqTChxzh6jcwvesGaNqLZkTPjyEKuXuU5ShyaALyYuP5jbce",
  "decoyKey16": "5vtSEei4baVoqkaiYHgpZC5smj5j38pAsmXedH3rnaq2rNmQptjbiUNduLk5HHXrnezR1eLoC4FMUhzyP1Q8Zq2G",
  "decoyKey17": "5o4i3yzMgX3FzP1xEcjxQ42upwGiDJktLrTVoGwAbp1BVxBW6WJKWnf8er31YHYQAUmHc7PLTQhFADUp17p4n6W5",
  "decoyKey18": "4j9crAUEmbEe1gbipCUFW8V4gU99Q6U5QCAVvoTEkAUBRAEozCMVtr8WXkxYQ4Gq71gDMMVmqs9qb7MhkAGSH792",
  "decoyKey19": "uK3ksXePWaT5i1ULEepvzxgnSnBRcXPeoGBXcaLKdMFt4bjMe69dKpdneg83QSEFeb5KauzdFd5SomVFoQJHQMj",
  "decoyKey20": "2BLD9xoZFEet84JZdwpc8hvpz3yHF6hLUH7fi7AHUT6CZCTrBUshLUw9HuzDBc3Z8N2PKtN2t7Mjzu1v2ydWb9Gi",
  "decoyKey21": "4ky2JiVPJmNVyFejR6cDcLM2u4BdLX7Ech3c4FkGZKVNurgDjdPnPAjw32EtzqXd4i3oU4xTymL8jsRszHhNTDdJ",
  "decoyKey22": "thPxmZCJ6ugw5zZ8PNMg1czHu2RovmuTyVzzSnAmqpfuoY6t2kv6X1p7Tj2PtXBmtDf7424fSA4GCYzPw82RFCk",
  "decoyKey23": "5Q6YPnfBm7KnkxEiXu5CfxCM64R7HzZH2nneq7YZ1xxRuvtMJzEvbcpwMNDYo3gB7sm56brSgrbpy6pwLgwt6ZhE",
  "decoyKey24": "5Ta8ypWTCNEWqhQrKBPG3GBAvfMSjG8QbTjthSpkhCed9L4GRvbS7vxT4nr65SqwPd9SbPrUkaUD4ye7F6D3mTBN",
  "decoyKey25": "24xDupkx9tsJFBaQ2EBrYGYVkUvoidvcQfMunfmPE1oCv65ZL7j1n7Y58Vg5BPexQtTc7E6GDfLFsj2Ap4SXXpDN",
  "decoyKey26": "3nATLmyLE4sP3aw3Z6HChUfnnK7cN7uoNLj1KLTdNPKwBqxP2nc6Ctjhmqvd4kqaSa6mBAH2rf6PzXWN9F9ynGz5",
  "decoyKey27": "5zMhuJgYDppgrHuqRmaiw3TQfEj3GwJixn6yh325ZHyXCGEZeouabw2L6KSF5yLgDcGcp56SGfbuz4YwA9DG5vRR",
  "decoyKey28": "6S8za43rGue11RvPPNoNLes7UtEkFEr4sVhkFaM5J4sDiZ1TBXoyGn8sSNKAnM894qhQWPpd8wg8dfz1jFgtjtW",
  "decoyKey29": "3gURckLKsBA6qL7ziQkiJHLAWC4X4JjBqKZzufZyJ5Twf3TpgmMfTYebKMj5vXmhE3ZJ1umi6HgJou7AJUJLv5x7",
  "decoyKey30": "28PCgkPFSuhkGw3CqWJ84dU1FEC5YW5zxdkLfYDvetbk49XV7da6dgEjhhKgaN4HwECC5aE3WVX6TBVZjwYrHgcB",
  "decoyKey31": "3sHLJMV74Nz7Ps2B2m8kw32CQZfXz6QeZCqYa6xsNEt5Y1byrVTv11pMYLQZEKeqvYp1QJw3kAD6AnBR6KicfSjW",
  "decoyKey32": "3HxAZSkwJAaZ5HAAtCwYDaMQ54cSZdePForf8geZ9juZcQvx4Hhs4SWtxiRKzqsBDhMadGwe58uU3vKwW55zmewL",
  "decoyKey33": "D2vtuTQDhyS35XcGd8hj1PuaGUj6EsgwjGeswxG3nYXma4wncux785YaWriAwt4BmYwxfhJ4GejEKEkqH8FriHx",
  "decoyKey34": "4Vpphz6DfN7Y7A8DmZeaGpKefKp7vr7zKn4eaYiKmVuntWSiEXgyeLUuQSmn6D31p7oM9818UvP6Y6KWU7Z5ntii",
  "decoyKey35": "Cq2RVozeNW26pxAajup8R2zAxZcEnegNh9H2bMPkkzSECbMQdFGGAf3wfE9sh1KH6f96FzuJ2ZqiPaQTuWUqFtM",
  "decoyKey36": "4j9Vv7P1YVU7EgeqCfo9YNHhg13xZvFhbhmhBR7Mm4mLkLdjZewmATBaEQ8KT193EVTYvBMJFPvrfXoPTJPCcMNt",
  "decoyKey37": "51jTGW1MddxN1s81jG3e7kExtD2Pat9zCAa8U5obCEyMZVfDjfPfViJVurrnKEzEkCLXf7jNuANneoMfRkiChPZA",
  "decoyKey38": "3kCaQACL3MWyoVg3d5pFASWN2AfqcSgXgFDw7qrYRZQ2w7DH2prGTYTDyfvYknA5yc2T7RKrHGfWpR4CRiTeWcXy",
  "decoyKey39": "2WwW3Q2avSBfszoUahiy6y8Yvs9SFBuaAEacUUcubYewovFFi7AkwykvdXvvGGchiDvtm4JLABn5ngXqAm2VLNHu",
  "decoyKey40": "48xPHkkP88gg6gcg4fp7bUrJXacfbCSvKMMbMoeNxBnsGSambzEtDNx4pM68a4H3JmoRGwL1bpFr8mSbwUM5j1dn",
  "decoyKey41": "2BgEyWayx693WqNXuG7C3z58Gv5aGJBd3tHnZnjjaY4HN7T7646KKymt6vyouKZUPzc8p22qcAuhPxidZRtVGzEe",
  "decoyKey42": "5b2yLeYmAzxoGhdp7jgi432sJjcYiYng1vLJu8WRsRUgSDbV9JaeaFdcPdMEJ33KnSR6GAf9CPvZ6aY4YCG4S8Jd",
  "decoyKey43": "3SmbZgKAxx7Aoa6N6K2oSCKS27fuLoMbuJfpCakffzEJtRkadJQRbZgxrRvn4WMYXBdkcnPDRA7FLg5UxW3BcLeq",
  "decoyKey44": "4by8osR6ChUujGGs6r46a5Ea3Cp4tS1jeKQKLsEjN12GJqzJpd9qyGdS2deX6UuwbJCLHYEx1wcPc97tqcfMWHSU",
  "decoyKey45": "5udGe8SZUH8kt7iDedm9N22TtkD8Qp4wrz7WXPXipusV5bq76WtriUA8VE3ihcCeoyZUGPnr8Nrg86UsyrsAzsr2",
  "decoyKey46": "2i8d2kTYNE9hiXr5LqJYz6uDBgNK8xGLy2YxHF6tVDCbm46bSa7xwfeabExhHAUiyQDJD3MjUaNDfCAv7FuLYZSP",
  "decoyKey47": "xBqPAn43RRdy4ZnJ2YiTbPUoEAHC4YuGvaNBAike3qCC1j2W8yRBPyLXSp93VMfHvEk8Poi5Th85Vj7iD1P6S7n",
  "decoyKey48": "4KWyKYg5p48re5s7qgtEpCwBZ1FQPX7Ep3UjEHPrPBBxg5ZKSvxytcAaksrYEouJF4q5g6jDHuQaEvw4SMYV1YhZ",
  "decoyKey49": "9st3LsANg5gxA5yzMhBtr6KdKppX5k9aXAJ7Qc77VQKS7gYXCpL4VG2w2J8xqq7DwLhhQzEgAXh1dZJt3BUvLgW"
};
// DECOY_KEYS_END
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