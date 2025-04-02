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
    "3dMiPfe1CJfRs1gCZQamh78LgVHkb3TidWZLgtwaJoT66jjst99xP6H7MVvNn1fzTG337V7yfdf6xv4EfzaT7Kce"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JnUtQq8Np6CK3iDZj1v5vS9Rf5G3A6DLDS3DaJ7dGEVR18JRn15ontznXD4SoXVYXTKZB6peGSKGkNDmmqSQs93",
  "key1": "qjjCE1q85AzgT4kkqK8vUduRQUSZBt8TWuRNHa13biUHCsRUKkrCxSnez7FQ9HiVESWcbbsm1ZkQmV2qkk9pWM9",
  "key2": "xhuAeEt1EHFWhrwab57B3fUET5KQxxerN3FMRS3Vi9cPnJYZV5ACUjMjKVeiArkwqqxyRqo7fpMQbTmrD8brE41",
  "key3": "2FN6SVuC1Ja8JaHrLJLTHZwyi6PEyDA7HKD7xgurY12Nt2uX47KJxSK5Wc9J11v6QWRg813TL6m55eSwej3L8sWX",
  "key4": "9YT9DL37nsdn7BA175UyqZ3sjcyzJJJQi52qQvtMNMShud63mpybc5detnWxXKF6Qx57TjXf7pijpkKGjaGxKpu",
  "key5": "oWRNRLLXXxofwwCUsie626Vxcp7fmDX4kjDa1KRbraMVTagVWNPh3pdHzjzSNxJZS6sKh413wQ772CrDBrnWPca",
  "key6": "kBuXGcW5WEDEoQxGTR2St7i4vaQ4fCtTUUnyciUH5xtx3kUF9BTAStVCHXKphG9JpwX8eAJzkhJDg6djZzkRSM4",
  "key7": "D4vitfszqQ8TtXXnfrMmqPMen6DVKEbjrb3MYBVAdDJ3Lsk1Fns5auctUALTLW6jRJAoyEeDCuCi7tTcovkmGcf",
  "key8": "2NiRAozKJCPueVz7W8io8FzjHb5y4DcaV7pz1DroWkWDTvkDsXuTEoiRXxpcJbuS6We5enDhJ8tXPUr1azJkbxMW",
  "key9": "2bS2hGXRqFcRuqZscwiNSQHDEUwsCzR6MDDqTKErQ577U9u72rRhVnkTXUF7xrjPT3nYfRkby2KZywhdGjPjpbev",
  "key10": "t3W1LCUTtKkqhdTP4KyXgQj2dcG6CWUhXGS3iDpoPK3AtZerafuYCHdEoR15Tsu4JfZg9q7euw59GzakJsWVYtc",
  "key11": "592nBQoG2PsmU6Y5henp7DGHHpUPkc1jUMQmZRbaTuhJzVFkLuAsowQWSauuggNSSXzTj1oQ9buESd6aUEJKVdPz",
  "key12": "59erLd5jvppsQnSujrnMxLLYa76Uqa8TrFXuoix7YiUVrAPJpCQFKLJi8cCMqEnNK2xMuDBW47SqDLBUKrPTPrDz",
  "key13": "fugyWeEBTshE6sspp1p5E8BcwMKHKgdJqRa3Xzc4QRoZi3RpExYz98qNdMLcuHyUELqaEe2sN4LqozE37yRhbAh",
  "key14": "LbcjNynySfYYt4Qb3Rb5KvT5P73ExHHrAoQKMGet35UrjSiPKDPd3ipdKks8odGbQpsMyn3Pz77h5ZTtSKbbL9a",
  "key15": "3iPcxDvL9Qhk5SDZmKpDJqZwYgcRrCC3T2dQ5GByBaLdu3NQXxKEtpVjiTS4H5DMg244EMGcGCAMzKotaLjYFTrJ",
  "key16": "5uoSmoRakQ9vh4aGQ9ykWS2s4jX2AHvTs7NPHJ2eoFzpm2qtjMCj1KdhMmo1sgizQRWRhnes281j6yRJm75MwYeU",
  "key17": "2wa9BPZxavMJEAbCxvHTqG8WCbiNJiYBrFWEZX7sKCxQVc6UBCQXZJF72cJE2eaVthCyoUvynrCysq6KkQ88RZF",
  "key18": "23R5yGgMzzpcMrgCUCXBA8a5mHjW6hUre5cTqXQaZkNJkmkzb3TEiFnHjzBcgRreYGN7DXGKid1wYqZ33SESaeaT",
  "key19": "2bbNHn4KuprYygTasSpY3WEnmKSKfozKenVT7NYXRsu7dyhRtZhrMvMaquG1hdPCC4BosDFKxje48CcL73U4Rjnb",
  "key20": "5TPnAd51o81wD4ZSVG9fT9jRNAyYPPN8k7CCGSDKJCvpjmySpSDo4YQQ2qangFyyhtVRGmjxzkuPKPe2FsJuUZT2",
  "key21": "4Po7HEgMgJDmbP2anEV4PFGV8s8TtDqbkrsDfE3bheScPRCcF3RBRPNAhUDPpuCxo2A1oqnnEQycoDfBmLSmMzEQ",
  "key22": "4ziyNaWYMYKUYUFvY8JU5AGLmtFQjqFfc9SnuVMXjmPmheRGV7k5FsJ1JyX5riiUdN77EMsKBqgiFh88YBgpm7rV",
  "key23": "3pMemVro2ieDvDQeZfJYDKo4SVtPMSSoTcwocGeA8G1hB3WfqaShoAHbiz9SQoJp4jHSwudVazL539b1DgHk3hby",
  "key24": "2aAdgFAXUZgzDyTbVirtW32a49UAPHvd2H7FDNCRapNbxMx6w4jL4ubZnyQLZea8QbtXy8sNpTmu84UgGzKvtqy7"
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
