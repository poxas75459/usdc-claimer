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
    "4qZD7sVMT65E2ZHcVaZBngMdXTiCe6gwDoxggc3H1ohJYuy8chM49ygiWYkRzSrYtmATr7oP4d4NdLxvP7at6rp8"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "3AM6KaLaWvnJDeUMQaVWVyXeZLMQsRDgxARKhsg3LGud6jbp7iaNw22dJ26VsajZsKPXEhQqi5GLkvuFagYPpxje",
  "decoyKey1": "31mokbcsmf4aDC5tKsbP2FDnHAV72YmSKUnLajhw4iVfBXLu1wokVJpo3vmdYHtf9Qo3H3dRzax1sNkvCiDdQswK",
  "decoyKey2": "xsL15DGoWfkRWEJAUuZAcwEqSAoz3wwkLWNsQBGdtiL5LB8KewgrnpcwTahB7cKdoew8LRCbxhYekhFaTCUTi1y",
  "decoyKey3": "TMNWMxFtgueYZUG6m9viphWwWtHdXmH4GdTCLmSNLX7Duuq7gMLbhvnRn3apqxqiLQW1dvLeLNgVGgA5HVgB2oU",
  "decoyKey4": "2CP2wctScZK9GtFPRLapMsebWcCS3S1ty4u9LQNE23aqrj2ZyQxsTqMcpuHMKACD9BTZ6Y9sF3WSfXQdnzUJQ1j2",
  "decoyKey5": "3gbKRz8eLpfG5R55wzbt1nmjr5pQTVGTj7v3owsUYfmtMqZaFXuxvsKzS6NEjrxvr6BNG8VGmPC8Nvt5Nq6cUkCv",
  "decoyKey6": "275gsVH8TKpRF33jF29xhYegV4yrciyBWEAZv2a8kkurxNrCQU95RxR74anv8D8BVsLiEociFSci9puaEzEE9hxE",
  "decoyKey7": "3h1nsE3KUJ7LYaJAa2c6s9nMts4JFaQjiDcQYf7bpLNCesRbjLXUJ9yjzS7FBVpHfh5YDVCLGe45z9nHLHrjbPyV",
  "decoyKey8": "HjwFEkVoKEpt1pC4ZozCstXPKgRiGPxn6N3pfcuWKQ2gVDEd3t87ypTQvBkECQh1LZuj6n2k6hzKhY3QJ8ok61X",
  "decoyKey9": "Kf5UN8G6hPkcXPwpmTEcabds6wXbp3Sez94uNyyhKrJYqwL98wbP7zRFuevDJawVUznDKFdnAwWQUTp3tFsAign",
  "decoyKey10": "zjwt1rTrHz7ba3W5FR2B1NpuMRyCsM5v1wv24zCz2N9tZzbJ8xdDm6GXX641eqzXwKfqtrxUkcVSaDvEgBZMxSp",
  "decoyKey11": "3v3rkrWz1qfbdd4a3z8pGT3zUF8oFoKg6d94KJbYWUw9Vmyi5VnZ1dehArvEw4mxJnvhwjJK6cXJmYfhMsyRTWhd",
  "decoyKey12": "5ZSUSUWPpY1L4hFsTQpaUhsjKpYqjfQQMduePGwvLcmRQHjCfEgUyntVspiusDKL4Q4GugnGCzz9ue1d4W2Havnr",
  "decoyKey13": "4V5rLYziVoScaryZG1DWRQZYwPvjQMcMEXsoTY2cfq2rVqfszYwtpzKwjs6i4rUaC4dh4RRs5jNTsk9X5qVKxREW",
  "decoyKey14": "5BvUqr8SJVS9QmE24234EbfzJtgziSKu1RD2Cmv4YkJRT6hDToPRexhxcMu3WMWsCUMW6jjGgcs5E8L451aoGmax",
  "decoyKey15": "4S2RUqXFp3XkBqGEprFiCQTEmN9wK4qh49zKbGA6KjYDbPXQUCuFg4Vpo9xRSSi3FnC7mwWoVeV9QWSWTe8Tavie",
  "decoyKey16": "3cxkXRbKU8UvMYYRWp6oE5kXT4ZJKMiKktibNmcQ6ZQxJBY8rfy11vyndfzpQqqWbfCTNd6Py5QCDCptyP8sXSZu",
  "decoyKey17": "5Nd1u1bsJDrCLCqjEH9rKWmbADenoa22BNUYN58JXfPFiuBMt7DxRFQZ6vzekoT56gztdZwNpygY8dwvmGhhctRn",
  "decoyKey18": "2nGB8N881MgL3JiWYn5GwPTiR7QzvrinFYuDVZ3KyjBMDLsjL8ujMvSyCdarWVhGgxzBHheAWAHK6pLgVKpp6iPb",
  "decoyKey19": "5huDpdeTzJcGZVAoDwUw5e5y2ifCVZ1XjRqfWa8FfzL4Toq8NvoQ2nj8tG5Et79N7wqc4HJEyM4AahYyDsHtcg7c",
  "decoyKey20": "4M4MpZk4zWvY7pg5pVSYLvmmYahYZTuRK4Frdgh6UxjqqGZQfPubG1k7UgJpHn3YX4MRGizFRnfcqgb468ZpXyeD",
  "decoyKey21": "JaxVCSHDebdAKCzGMLSW4uRHwpFwsKbxJexnpQEMZeYUtyhKHRsery18gcYzUiyu2k8NAPyPBZZuzQzYYTZDVug",
  "decoyKey22": "2arh3FWuT1vM3W54A7CKadeL1fhDUUeF2yHcpx1a5hWvCXb5kUbmouGHQshUVF5JfQ4aV6EdLntFswx1K5DUVrpL",
  "decoyKey23": "58yMZv6dWGhANNsvnDBp9WjR3GujHbdiMucvziryrCFtdSdFUDLnf9znADAn7R1qyrQGjTQxtmTrqSxknR1WwvsN",
  "decoyKey24": "5uyCTBkCTqvE9tHpEFYsFSrBVc3HhN3e9EbqCgW7ihURYKEohHP48omL7sVhNv4XFkH3T2p2azvu1eWLSHKV73kk",
  "decoyKey25": "2hfs6GDFSvVdpJihtSsRov2BoU8que4rZnaf6KpSn67NKwZpYijR2pvuAg1bLJFSMN5Zk3drVyE5VcXcjCKUDh5m",
  "decoyKey26": "2hWomzjHSpUsP9sDJ2iS1bMh2zbRto4nX3rQqdrSpJssjx4vKXbRNagM2jRqrspfsYYVcQP8WZL2cvikqPB17hWB",
  "decoyKey27": "4js4vxYbHdy5tuFddosoZ9Ni6LcLzNNFhqf1Azvtm4LHrKPKw8PEa1xZRn77rLdAYBfdJvWxm7xHiptzCoQ6LXiE",
  "decoyKey28": "3XoLCyxaJAjJ6esAvPwEVtTq1NvngQbhiwhGpmDXra88eNkPwrrkmQ18xxs6SAduMdfa1RPPryTmXGPd7LMmqfBm",
  "decoyKey29": "YBUFuhkGt5n6Xtau76nkgdCELLEafKjUsRaeTUu6HbMTj4wJzqn9h8ofnPjE2dXm1Dce6Abn1undYAJsM78Hk2i",
  "decoyKey30": "3UzrqyWgs8M4GD3VVKnfvE3mDQsAJTJxEYuC8Fv32yXHL8Lk6WWqtsLTuz2Rk8hfU6decNxsZxRSqpp18FGNP58d",
  "decoyKey31": "5E89CDLmHtgChVLpGhvecBrdXzqu5vM5tqnDvCGD5DVYRsg2QcYuWaaYNYcgyXYxHEnEkJFJ8zXV1jbNrjj7ttXR",
  "decoyKey32": "E24at4XDCMbm7ft5NLSfUpTk1doeD7neC93aC3KsYUjJwNnLKML4bMb6Ec1qt665FLSNb9FRZq4vTRYXvSxis4q",
  "decoyKey33": "5V2CttzNApeqk2MxRQ9rYMboQRPSsAjHTRSEFw4FBjywmEdXcRQcdj6jQ8g1Wb48HnkaGefc29iNJZwE3uXyaemu",
  "decoyKey34": "3oHaLuaY5PaDero1ezzdLn7DdK5rud5jb3nd95zt56xfGMdQqdXUogBugCz6ijX4PQwWmg7eE9ziyfGtCobRb7eB",
  "decoyKey35": "48oFF3WEQWqaRdWcEsbP6ftDi5fa2cdK6mHLmFZcfFbtB1NadqmKsFW6TLTeDUVoYiNyTZEsGtLmxidhJxMk45r3",
  "decoyKey36": "5DRw2ths1ojamnFw43ZTvUSfztGqJcJrVjgxfugL5hCCqhWF5gRYHnDWhgcwJajPhizDDJfoR9XtzCTiLLXpKFqF"
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