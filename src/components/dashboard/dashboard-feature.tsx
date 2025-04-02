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
    "AooaEPgaj2cwbvqpc8LqUVe51Bn6BxHD31DqnVFyXjgA3C3J4x2kHXraYoMzu3nZrXkBwn5FU1iKQXhN31pQKJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WoJ1HPW58LJRRvcDRWuHkPF4HEfhuZu1uvFh1mQ9cHgLHThiTXVPbaidvyps2LDCdDn4xLMMmNJ4seWeuHifGxg",
  "key1": "5eA53pDYmkbAyxcZHcMsJFDYSoWKNEBnF6JHKBESJcHc7X64a5jHabwFWyN3cJSLxY5MQmFb4niihLzMLkNe2ehQ",
  "key2": "3pU2TBC1Dmw8JuRUoBMxzo5njeDVyjFQToJyZVd3QbEx8QEYXUccV3dZTywW1hCeJYP6hWV1sNKyAqaEdsN2P2Hu",
  "key3": "5y9brg8jXjsAsK2JsPhbzMLoxb9t16q7sQGuYWXx4bTNXsn9QAt8f5D9sA6Zatim1e7Ns6GVAxVkRVcMB8Uvz76x",
  "key4": "ueZnKmPCTchgj5Fodo4HviDERNaxZeCyAd9QEkySegKA9wMzSQcyMXtWPpTB6t1AmvBX3aW3Uu5SR19nVkmVyHW",
  "key5": "3PGtNf4DLwty5uDzmBZhyDgP4ZyhcZab54uX399GrHjpB24hykMriN6Ku33nQ5zGdhqSBafKcoYg1L8i1FhWrSNs",
  "key6": "5x1mVCWyZ5MDTeA8sokXDSgC49HdvQ3yqczEabvboPCqZwkBgyvoPqh7dJmAHyDMZ38tMAGUSosY7nJQahztBG37",
  "key7": "248JgPykB8H27LNR7UDH4YLxm6jyL4RCHas2EBXN8ysKqhwiorGMDzvSQWzNptguigPrdnMCoZx4c7A3BhNnWR13",
  "key8": "3Ka2a74y5esGXJ84QDdwm1Ev6fhz4dx37xecre644vmKkdctNA6BtaEkVSN45pAVnyDTeuXhN4BHasisWkZyP3Mb",
  "key9": "4SKT1CfvJpKRwGa8yTiWmr3mCNyuDsZmbq5zL2gmmLiTPiALW7W2jpSU3ZR3Y6wqL2n5pP4BnEc3tMvw9h8tgt1U",
  "key10": "5EoF4kJexKDDz1vCQNxbTxsuzLQtUSTNKSXjbSB3Q9ypuRNYxBk1s2iRqayDfhu2qrtoMvb3wTkDsysJpga9KQEc",
  "key11": "47wujrDZkzN2jbbhqrr8gMT3iR9p6fX2ahVnwRz1gdjFcbgNwqoxbagVPyw5iAgLmSaksoy3BW1w5rwQM2rGYCmP",
  "key12": "zR34QPQuFdgmASzPVfMJNMVAUVJ4o92fqRk9LwFjGN89t3UUqca45s5y63Wd3wkkPcR2WvcGGL4hnXnNj9ih1AS",
  "key13": "ubu5okr3yFrUXfo5GPVVKzzh9XaNRchf3QE3rayiN5J33B5EdKYhe6iVU6sLHPdQ4zDJhsGXFCAavKQNnsGQZJp",
  "key14": "3KYLMgdJR8qY5ZdCFsA7yePBmfj8uJjK8q4NxmRb7aMMepTWqiYezEWusbgS882mYE1TgvUuUXsaqzrU6PsPVYrq",
  "key15": "TQQfESx7wxE4fpURZbVvEtGrmnFQektjgiUzZ4D4y2GbMd338qrnbLFUkKoragwXf55BPJpuM8kPCy6Sast1ZqE",
  "key16": "4ygUNeqeM4h2REPNSXpSdCa4iZF4WMfZ1ygC2ULgdscBAKPmBm5HsxrGKJSz8c3ds9Q2cb77wEuifDbUNAnCmf3a",
  "key17": "JV3pmmhoncqHsJJxBU6czTey5WWvXYgCkogKTsNzQRAyUFDhVXVAkWcFpj3wMXdAGz6V7QNZivQL1zmmJigCpP6",
  "key18": "2hAxQvuVAcdReG86FVmfZocyk7q6a2hez9Z2bqTvfq8r3q1ZxwuZGpHRDt3eSAw6BkPendtbztvNi135BAoowLP7",
  "key19": "5ZQnz4HEpcLCHy54vRiumF6ynKa7rzbyCVyMHkvp91P43W4Nn879pzEEcRFHZxcTdcRQAyZ9EEwiPk7cb5LJVcun",
  "key20": "48ZoG5c7qW3FCkaijATLyt2WP6uLuuH5Ff9ufogVPMVrxNwWptZ25UgHPDKiuFwnP5vnfdwfraYYtf5UQoUrUZrS",
  "key21": "yj652a11PhFhcCduePf6oWfnojLFiWthvBjuWEE6rhBASk9DfC9dhev2xxXMcZLS5EVeQjDmpBrxcUGYiFJRFM1",
  "key22": "3MezVsj7gvjqGKgVfNAVD8fGGhGhaydSreXdugGrZYFxEr5jH2EDXm4zdzSWKw3o8CPSpv3zXpPD71oGmc2fVUeL",
  "key23": "5QpkaSxoZvij2PCsJ4C97XT34Zn4n8eMwwXpyAaTkTZUmPCUVAwgxtPT4iSfHQne8dofxDM8roithbPCk3JrKYMn",
  "key24": "2w6hwS7JXvBS2FeiA51BRTi3p9JEMhB7dgKofy3kexV7y9XcFcvNUqEuJLp4A8DhyEgZYN5PXckWa73oniHNRLfY",
  "key25": "4BJfvVko4dwvt9NjsCCMJFmzuNbdEVYwYPC84BS61vd1j9nSPfUJmuqD99xGyN4khJpM8LK2ihxkgMu9CjwYt9rs",
  "key26": "24JYCXUSfwDLpNon2zaGhTvPaia1Pe2WREw4wfAxAJXktwiAtXz9YeM1Q3K5AGj3b62sk6AX3hSXWpCcCSG627nt",
  "key27": "3LVZDZXxaCm6gZ3XsGJfv6Hg59xHohhMNpAuDhhdr2iemvfip3ikmTQELvT4S2Jnhi297iywh4d7b59YbC2QXrd8",
  "key28": "2DPVwa63rVUvmM7sYeYRFbUFWoZPt2dQvfffv4as3GoPjTUymUUCEMQv8azeX5iw8GwwzsL9dbMMZnaXZb25b1bF",
  "key29": "2bmdwiAdb9K7kVmgMxLNzTTWQLTRx1gKjceAPmquK7GhxKCsBVP7AfgNoYryL4RqH2CxN6uzW6MQtXbyBHwVey9z",
  "key30": "3dyaKDC99n7uwtdVdzWyT4qPvkyA6skDjW8EJpobBaJadcMkJyqhA6inNzArAEk5gRNxuvwLL3priHbPjCD1BVeo",
  "key31": "5djTHuwAjmrmBM8qUd1dVFfCRaD15gXXvVmsazrWKkoHYafmqrGp4sd3FUHtUBk59oD2MmwUzfNJFZYxtiWpA4oj",
  "key32": "f8nBtcwhhxM5erxpNxnLbQ57VdHBeXKino2rHwgh8qcoNsU1DZBbTpx5RbrkiS1M1tzECZuF4Ha7joCkvFjdi7q",
  "key33": "5HtmEnvyzLzppopDpekDicowvbBf1iNiQxPYKK5rp3HmsV7C53U13dYpDx3uZnYB2BHb3Ew17Mseuj3hMzr5AyvG",
  "key34": "5zCFYEnFDGhoECYoxHpvdvnu18eFQJiqyM8D2TmbbNZyK35s2FSTbR5Mt3Qw9arcTRmgnMgSfbnsNqUYBUM8CDMC",
  "key35": "54m7UvmdRS8pysVhZYVeDf5GgMAytF5fsiS94YigzuRPhXCeTbSa1yXAnaxT17UhbLHtoEqz2aT2AWHEJbHsNC65",
  "key36": "5eiJ9gE1o4vPLP8qTSbfEaJ87J85cBzqG7eDnsz8rdAuFyXr5SsjETYvghDhFQRttdCRCRzPwGGxDb36VwD4Zv1E",
  "key37": "5qvXCTf98P96WikNwmmvcVu84CiaeMRhhrx9tDpCFJm5VG6Td1ZZNNQ6DsWTm3rp3eoMsuzEvb4wMwPyhM8RbXNR",
  "key38": "4yzhucZTzBoitHp5BnEBCHTJconTaTpn8P93PawLym8ECqQyft14j9K9j5hjTGURd574ouBEhfAmT9eZNUeYLm6R",
  "key39": "FaWPTFFRX9qF4k4XxgxZFoppdikYpTc2a5J64bjV46fY5DBvskjcpvBsFfGenW6VqXU5sYYxySed2FDBvhLPd9V"
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
