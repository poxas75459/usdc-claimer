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
    "3YiPLbbV3PW67tgDi9P94UgTgJ3Yvcdi41RMhevcgiGVYbA6gdwQKeLDMjxiXHEoy9vt3FVhJuWpKwpEH983cr5w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bqEiTCwb2NKzdxc4xZnyHHV5rGwPe9noFw3JKmWn3L3AnLnqQuPVzi96Be2mAEBhS4pRpiGEH97fHQLydn1f8qa",
  "key1": "61vFAaGc59ADbSs2WawkCZuu5VtjEavTvEZjraPwnmgTt5i9mBVQQTaMTNg2H8AVGRVRVLbwV3Atmy8eK4XsUUx6",
  "key2": "2Qaiuq8SgrUHtmVQqTPWnjmf9N6xMJpwDEPWujdWS9zf186deg3uJES9Tpr9yvNjHkTH7kWyyoNreksEfZ3E7LqE",
  "key3": "2QHwiUAYQx6ZjXPtpwKxtwLyJocR7Te8GRgh9NdfeVoRq6uZoYGjZpfESR3kvs8JyS3PU6k6C736pkLijiW2iR1J",
  "key4": "Xty6AZCqKo6Z7p8zaX1uAPqVetVffz84hcNuyet6iVVA3RSZYL3SaMe25nvbYvAb2XRmBQHWsFqVwVdzxYkphEb",
  "key5": "54hzw6WQgnh3frX23DR27ZkmoKpECUwK3tB3nSu1c6hMLNPv6goGn5wdraX6vRxYcy1D1r8MFEZZysgMmxabXpYk",
  "key6": "1MAYLGL3B4Mk8xgvJzQyHdZzbStxy87UHuEhPY9rofmz3VSBqxTEbwNrR6Qab8kKpp9E65q4D8ZMjqTJkhP1m9u",
  "key7": "4fKygfXNvMCNknNZjfEmnHD8q2x7Y87uLbWKCntHsuXjhK5cibG3MjLtC9qceXaH9natGQrMKo9WV6ZZPmNZpwh6",
  "key8": "3oYncjG1V7o37jH5WMoRpKHnmRsyQZaXaCjSNRDWNiEkLLwJ4Cwg9kTXcz57h3ai7VqhFse18gyyPJ4y2BCAozN5",
  "key9": "49SD4trPwXwRanyEf4QcphW3yCpF6xV23p57HdT99e1atqvvMetSt47oXTYi6rAszBGdakqei3D41JGR35sGjSJW",
  "key10": "28jfbeJiKtxWETNfVWxR196LgB91gYUR1zGHtbax4UdbbArYFdpTChxPL76ikEY96zQANXxBThutgVttfC1EoGDg",
  "key11": "22r3xQ2scQyp1pwAjW2vPUsWJ5s94AV2nQ3T4AYsFjjekTvA5nRJLhHsJ4GvQjPHLmnU7JL6FGLvcMfBe5xWTfWh",
  "key12": "4G44DwL1bte6s79rNHfPjdrqYz6efNJjpfpGKsuD7zH2hEAHJjxnT7gxb642RzcgPYkBejHMdd7V7VjpFZVDRMqy",
  "key13": "4raWuyHC8HaZSdrJaUEyNQaH2wpLtq71YGaLhp4Nf3mrv2XABN6gu56e7DTBrkTxnejpcapWqvLoXqZMGsWmhMwo",
  "key14": "hg9AfBy3r8c3QyFCcQtaK39ffTkAibYQkeKQ5o8453pG1eQuAXz56n4MZQCVgkiCiQ41qpMvYCRbhfoPeBSFgvc",
  "key15": "P3QBLP8kEipGFsFidAnwFQdBoMbueaPvyndnvhayGtUbkD9AX6XQGJzfeJVy3FWAW9B6NjCpdCLe1k2o4maCvyF",
  "key16": "AnUc2BsyJrBWCNFDF24sAgXKyGRfuDtaQPSgCL66NmDNXti13fQQFx1EGnmiBCqiTVuRsf5zRCm2t7fjwsc79FN",
  "key17": "4r5amQR8kRJcsSJZZkWCguvSArMNtxigTbW7pPaefHdEJeNnVT6obA2UWMGMxZTcrus42WAfvUADZKPzXucHU8V9",
  "key18": "353xRAZLFtCQxmes8krZ8tmZR9qXo4HutGbzebwx7Ugf2dHishHoCQyBex63LaMPRY4ppjX6bP4ibn4ZMS3NCSGV",
  "key19": "2VTxgQJuJDnUPvrobJWZvQ9f2tLJ1FCMwNQQXRsKSpXo9owSyZoCex44EL2BNttj5cbZNLgS9CLKpFg1nwn59qKp",
  "key20": "3z7mrpx6uWg2jqK1Cm15mrRjdEHd7AX9yxFriSV34oV13SENk8W5axi9hUKwJZcVbWmBbjrxT9Pz9pxi526FHKcD",
  "key21": "BK7TW1FjxNzEzwUfsGSoV32hEzdR4Ugd27K1thWUueGV6UTZcaDPqo9n5GjKusrha2P6JaGimsXL3AChNeZQvT9",
  "key22": "4JHkKe3HS51DU37eMRR9pctyW5hypqmBuzawv55PzJwPLKqiyKcB5SdiccPiyC4dNVkccECj3TmtpWLRNrF6qqz8",
  "key23": "5CeFAnPBTRMLV1qyJFDYwRZfwEpDzjLQvt9NVC4fzuU7GTe5MHnsZBFGVtqSkkSAiSemfrgMwXqesweKY3XVcCQ2",
  "key24": "5UNAxiDVuYxNvF4rPVGCtxUk6mYdPAoABYqYPSq5PReBBYtAap5mTSQqJG9ug8LiEDewmHQUavXLroZfq4nnbRwQ",
  "key25": "5n7sn7dBi7MpqXXbVK31BmQRagvYmkTxjiTfhS5juYrsDFbJrrCABuxAT19bG6pkfnHKfbPEkiSY4coKMta1zVZ1",
  "key26": "vzqvunyej1PANs93HoHCK5kBMtFic1tWGKJCGKJgf6m2oEEuviwPWScBL2E3kSLqnPZoAKLEQ2K9CTqWPDaTkGw",
  "key27": "UMDvrULsZTkZ3jQfdc1JPLYJNFFY4j9P2t9bnZCuZKWMpyTS8p6uRUV6goff13fZDmSZTtgYvUtbjMrcPrBm9HU",
  "key28": "2jNaXZ3zGgbUS2E61RNUVxEScXfDuZY9QeCBnYK3yLjGHsssj3e8pDzwSckithj2NvenLK9VjFJ4Vh3vFPmdUcnV",
  "key29": "3ovbRqwofzh9CwmBj33qNW6XM1Dr9Dhqfekcnh5mpTrtft8WunwxABGxHLnQiNpZTM8Tq2jCFW8cGdfXc322N2N5",
  "key30": "5BHctH9rAhVBJ9mscKhgrSwar4G6CcLkSA8W6SJHZs6d3tkDgotgh6sxsbKVHrrygT4WvZHj7j8s8fNjo6zcrbmD",
  "key31": "2V7PwtZT6Hm5KTmq3RLD65YY4YQb4KSBWTupnVsZgshVi649QMoAzKbfQ2HGD9Cwz4pYYFTwL19ZjeenSpKrSbs5",
  "key32": "62MR8FgJtbmNEKcW3tpvm5JiRVBUvQnnRWHDMPrgv6AeDm9VSwfRJiokCQyMqwRAyqdkCXvaYa1gWvudK4Nkdzm",
  "key33": "2wtigiWbC5wpoPyJwyQiW2SndUr32nqbFbV8GagX7E64GxdMruACsPkenZEQwj3FLtESB8nz49Pa4yedSLz3vQb7"
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
