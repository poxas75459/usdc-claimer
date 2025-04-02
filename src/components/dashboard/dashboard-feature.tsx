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
    "2dsq6JFZSsjfFpk7bfyuQ7fuJDtJfPj1ufoHxrAiFAZm1DgMsBmcAPFjPLkSqCcZVcdAm89ng1HNAG9XN13FKtC4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cruAU9Ff72PzcVApQQCFVL9WgXzBtcFFvvx1HzHWgaL1L9SzxiQfh8fNFi2HsK78ky2WL232xTYV3epw4oB57ze",
  "key1": "56sXWZRDJUD2xKoozvmzZVY6kvzNVg56wr8xqfwWaKNqdjcT29AkKXaPxGmSYW7sT5Gdbh9nV1H5fM9BfDfqfV1Z",
  "key2": "2Xk19wUFm1ixdZBydrAS8oXAkmqMN1Eti3UvbPoNrQSZSWUFQgT5Jf4w3JJBCGjpQxKRSq9Ep5Lv2JM1PcfCJw2k",
  "key3": "5jE6n5zNEzwekJcJubGvEqgp55GgK26tMtVWgffm2sTmYPwddN5JhNg5SwQvneSLsGEhMQFMMZJVrmDsT5a92oL6",
  "key4": "F7pvUkYDrT9sV4HqxFQZKJ5QJ6TV8JuNVvvp8mkmjAcekRwFJMuFxpQT9YfN4sPmxAvm8Wh3BJ9sFCXv66RVZ2T",
  "key5": "588r4ich5NzoK5b1sakz7ugDUYtj1Hjn2sduW9ZDvoxJSBUh7GiFWVgbEgDt5qCnKGHh6NKqLHqUKk8yKipH76BU",
  "key6": "5ayBX7cRby2iU9VqgHRCes5MbL8dZL6PK1NwxhYFFgCs4AHVV456LxnxYZ19dS4uZEy23iXv26yuj64StBEmfBxa",
  "key7": "4vEWb43ivdMAvNuj3uH8xBovdnHaFueGesWKeR3QayjU92yNVBWFDHPdh7kWkucPsypTf2Jr1vbuzwKMg1sXXyQq",
  "key8": "2AWtAcz4Kb9vEuEQL46jXxFB2gXVQFTdB6MUHnassBDtEdnnE2Ua6FhhbwZDBq2aXMqsz41T7k8YeKiysM3Pduuu",
  "key9": "5NM6ACwdovyuSQFcgdLwDM3wnHArrAM9VrfQZrnKNuTGaFobX8mYgMiCbyTp6Sn7BEB4C5ZSZEbGGBmMevfXGiwQ",
  "key10": "N5i5QLUsP248tVVKQmMfUZQH1bW1ii2YLcQBhijKUsa5hgmHFNM9XtpGJuzjo5HmaEwPbvygXicjKZKnn8auQbM",
  "key11": "4ULvcgLeTqED95HhFwtapqpbPya4UohXRvii4tbHaeucmqAXHQzr9Cxqk7DbMfrDiaaC5TtjWxXkZj5tZVMTMAP1",
  "key12": "62wM2mj8Q91Zrwn6F2iXAGCDhvM2wpzSZyGbz74TYhrLNwoyLM15ksVWd1JqniEA4pMvcCUrSBtQFkqwf9uWscFW",
  "key13": "4SMn73hq7mdnEnSfYZHnd3s1nWkmAuFRaBwYtMHiM4YjxjM6744d5iDc42HVjn4vdfuCsvqoh39zLreUPKCKMjrb",
  "key14": "4Gcps3gBgFzQhmniTKHTQQua34h57jUBDBng9TP1ndwkW8ficLVYdSLVXDjwBb39ntoeJt8StVatCpkqC5cZRmwe",
  "key15": "bqk6foqTv3TNEC8AAa9ejq36r3BRZrPMHTEdVw5LEpS57qxVf9Hej6g5qjNAdE5dCZKUtDYiB8DipLq99AuxJQE",
  "key16": "qBAr2iSqLtgJyPL2pMc8KFRGA8oxGUAHduJo48sNiSt1BQ9cmbPkTqM6vNE9rUtWVZuFJ9BhsW9eZGjhgqfNEue",
  "key17": "43pPN5gWLEZ8KUuW8qD3H9L6gkZ1HCpvcHogMaM2XubsMPAzuwkK8XtNG9bp1ZFstbdjrwvqmQoKuQdvUCepY2NC",
  "key18": "4yAwJxxbhKD4KRhDcJhFsBXrEi5Amx2nU6sUXaAeBrDyLNHwvDyFEwtZZ4WmqaF1H6EK1g2FaEcL4sHdm9TGyaDo",
  "key19": "5v4V6qGo6RSJYs8ZSo2zmhXV9Z5PcaaspuL3KaZNAWDwSNAPZVbtefsgXDfMPk3auqngqGkH9sfrNerdXT2SVhjt",
  "key20": "5tJAf9KNTfTUJ6xFKuosgxz1pChq9bVuHTcdwgvYpexCc8aLzcLGDQCfdWppXbfdCBuLAiPoVmA4KYNmYVV3ehb6",
  "key21": "3RDVSjGQHCzkgp7Go9kv6PHd4eaSFDwYRzMBu6MzPhELY8ow7mDdtCQbqZHdogjnMdV2AWQHqTyurDFjdF4UwWPU",
  "key22": "4L1KD5tYhrnWAYqHGZKAnoJFeG5Lb3Frzgcv4f57KM4ZR5G8f22adAeNqKJSRDCRCP8jZPhFq1hrxfBGVLBSmkv7",
  "key23": "3ttwBiXkz3XykFwAq3Bxijk2wLBTToa1dhAS1KwKumRQiLJc6HTyCtquxCjW6JB3yGUm6gsEdGRmBycyKQ8Wdeao",
  "key24": "2DxKAmSfDEHocDFwzn7e12EqYDyaxCHSb64c8xwMrvLpBzcGp6Zeh1Ub131roAccZHUcvMh9iibqGZidDuYR6vaF",
  "key25": "5nw8gFZS4soQpjhomkCWktCLzpXyBqVMRaUKByT5gHifq5pByacHfvoFG6z87B2FJA83yibC9okrarRiafVRGKmh",
  "key26": "2gkB2vbGA8bvN65ZHmgLxwTXetF2xQZsYW9AmekPGhzf1zxhT7BAHHq8rHmjcdybNQnzWgofZBJaPsspe1QdorPq",
  "key27": "3SSHgRUmQgkWCowkKo4LHC2SVdBUFT4cjSFKAfPGSoqKZjratCW39byPVcEe8nAsFbZhFxSmXBzo8ax1on4Girx",
  "key28": "3oT9VroqCur9v7RVZmsNKRJ2RTpTCSEF6vUXtR8GxtVkvkW9mrJbnSp1C9FDrcHkjeCAgMgJ3zkqpeHgRzdzi4Fi",
  "key29": "3xDKR6AupCFhkGYGCWV7TMDVSNvZoixyjA8soj1bR7cwZ76TWfDXAMsPAYBczugvREkTY2RFT847es7MwRZQcS5K",
  "key30": "4GVb71ZvTwopiJwEVJdXYhfPK5cBBmQDYYxzbGjveJ11peyV3ZGnTtuZEUTWyxRU6Uz75Uw6vtdPDJnx3PjBAAu9",
  "key31": "rrgrA7fGN4jWJguxZv8pcRa5LZ3yaeKxwwyntrWxRvUAMk16vY6ziCnWm7GjtQPqQdsBpwh98pcShFVpBPCu6NE",
  "key32": "4Rsh9MNinfZiwKgiPcj8v33XcuEgqbxG64J7p4nwu3AMSq5zubTtGP7sLYeHF57uoY5eHZmicuKgDbZKPQbn869L",
  "key33": "5rGF1BkzEEodDhdSuKfKGC2iFqsWcojxADbeBdMBwXNqNiVgPbauHFLLbqHiHzozkeEDrynnvtfPhw3vMEDQQuGe",
  "key34": "2PHGo2eaCcF45K8NV5x8xpoZW2f1qRznZJebLEFY217eKBK5BWm3st4nSmdTZHAbXD5a32GtnBRePjzyZVr9r3GF",
  "key35": "VVB4oh2iesnK1AfXz8tCYik4dFs7zAoDMta2tJK8Soh64PiAGQujb7GE9Cxhn3iRurcYHeis1ayTBKvxP3MigVx",
  "key36": "1dHGbZc9kUzt1fTpiNMPSFc1heF2ifaE5pRrkftxnyMSmFjZoa2SLx5j13QRKJG5gNqAZ2Eosp57gEeq8ymnmmx",
  "key37": "55eDgDSSnuMUqiPyXsnkDFCHYR3TohW4whTXWe38CL5o2TYmLy478bLkmX1yK5SSGW83EpYZSgQ5vnbQKB5LJFcF",
  "key38": "38Gdnktiwcyim8CGbgZdakr1kEB3gDvtUBJtoeBsRm6fMKwygjzVe1GTbBpYwtwiAZLpPEUmQ3BkpXnDkNznmYEk",
  "key39": "21ynzjGKSCTWfuVLbY32qGUsi6an9matVN8wnBAsvNrwXrqBYb6i5GZJ3ehU6aHp4pJDm93rC2Mt6sbyE2HcF8sx",
  "key40": "3GiBb4ShzdeSQ8sDARicA5UcamS86Hg1YV4bwvpLNV8y6Tj8tUsvX5W2sa5nfNag61pWiksgcWiJnEhW9TWNkx69",
  "key41": "5ifXX5MMNbB92mMA35y6NfqoWPUepKnPQGPtF5r3MBhTeFHopG7Y1gEi3Ps1i7ULzM586YfLYZrpZKn7caDticLE",
  "key42": "2dMMCvBSoCrQF2jR4cqgzkC24vYZEKV3yDKkPfJWujDwqZMF95bgP54wbiVbxQ47HtaKrrBwJ7HQG19pXUQvKhtH",
  "key43": "zx71CKJW8nFcfi5ez44TgByK2ESEjtybCRW98Vtt3NHg9k5T6fMKDJgtqQFRXM5E4xDTd69cVb9UXf3VY9tQn4Q",
  "key44": "5BNHY15qeD8MnsuSQtKvdAdE5XYZQhGPd2bfJMHRDW7aPkbGM4EB53L8v2uuLaXNTv8Ff5X5PyuaDToUi65pynAx",
  "key45": "2oL8JmqAx8xoJMyEWMTqg79pvGdXDyWGN1FTt2J9DrSxx8TyT943gV8iieWVWFdMF5yA3BkPRbNK1KpmGSpVNJ4W",
  "key46": "4cecWRX87oQB5g992vbpDVeTh1QFspU8Tjio5rSKSPuwJJKQARcywv5TR8AeGd7rzVJFr6eDEA8ngeSSfLNxUpx2",
  "key47": "31BYvdJqLbawKy2uZTpRY3fN5iuMVB9D5KEspYLg2d5j9fhSYGJTEsjerNiPFNn4GS1iK9BNukE5xqfUPE5fBjfu",
  "key48": "56hV1uTroR2r6cudF3yUZygRQSkxiHzgXcGPup8RwzeZSvfifgq8crRsjYBmi1hEAc8xQEn7s74QwgKSuBCRnsXE"
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
