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
    "3m2UGGzu8oENZJYwcnMuTBMY5CLtVRks6afHHTHtUHErUyejZRxBSb1xrnewwd3bvW8RVccqEpDuBWrw2y8U4awu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33SyYAuFt1ZyoLK2EBGPysnDqiLMuL1zPsPQ4FUq2iyPE8dkNdmUVLsvX8PSn4ZW8sva3bLoqc4PFU6z9UqikLTT",
  "key1": "FXJCqBzaiZ18HRTZzxyhNPxY6a8sjeEATsQw6nifkwo3skUGY4K3azKaMe2npkiAu7osxPe3zX7XqsyfSt1BLdz",
  "key2": "32xiss5EZDd7pV4ggqiD5UFDD8qwomiUDbLiDkQJgZ3Vus6rGmWexN524MGyVcgXjK59MPbmi83euyX7wf8Zh1eC",
  "key3": "4Kw3T1wiJXVVDtqp59GJSpsbRYa69sPCBSc83nMpFhUHT94TMextEKuUe7HS89sXPLEW5SLWdCNZquEfJz3G1KkL",
  "key4": "54K93CC13hSot89vwzKSPeQL54dnyKp3zYore5rgZ9rPVY7SfHJoEpcFuBqVhKpukfLyGyrVH8cDLnqbuZMCfxc3",
  "key5": "5p4FZEQTmUqVhtt1x5ehkfRopVecpnGz8mKYT9xyFcfMT4vsPC33iauj714TYZ1zNnq9uXmpeFiJKQXntPGkrvNE",
  "key6": "KkVMiK71qfGgihsogu8DEuWx4RwxG6L5t4uGNGsTteJ33euxD28qR5GCznyNhZc91Vrss1Vz2rSSkSLwJWyeJJo",
  "key7": "4xjZjdMbyHwWf2GHrf18DDDAV4SpVizuxtVZxME84HoXMjRTVEMiXJMydzgFsEyu7srqKXPkQFNMrtThivN9QFLY",
  "key8": "3avu8AUD3odDMCm4bkPRWhr9BxKWaJg22dSyujiUfPAPzmnHoTncxNM5hyHe4dNdKQfxtGoUJgvkmBRWPTPRF9Dc",
  "key9": "4pKB2UrEhsZEKvnqFtuZh2Em8YW7bWcrBNdX4319dyf9eQifk4HMzMLPb9HHDMmA4e6cM9Zy166Cdf2xQUm1pWHm",
  "key10": "J91546aUGrQMeZRRZNBMJCmHXHrKBUe3zCGUFgoWtDGkxzHfjnY5QjzHNdao4pNxf1XuSg1sqnM8YUnqp7DqmgJ",
  "key11": "2Ku9sByKdUddUumXMaE6T6V4W2kiYiMtdBdrh2KKExn3jfBLAbXfooPXrPo9oo1ZSC5PLXNvNsSRvoJ6WTTof5vE",
  "key12": "29ND4KmRpax4epRrPb1VqDBYg55Uok5xicJgBLEsZ8MG8T3k8KzVrNuzQFDs2NA5oq2WPxfiNnqJhnAWKYLDURLU",
  "key13": "4NxoUAhnS2gmk2JUJPhVhPpPtrAwDRhX13bEEUADCT9cLCMys4V49dYqCz6y1Rm6rk21WV2RY7FFQ8A16yU7A1jU",
  "key14": "4xfXfutZdKCvoC726SnyCZLoWkguPjYkJqe6en9Qvv4LUNvBHE5tjzLwP8cPkvbQ391RxDn7ZpgJAUB65arH8rxe",
  "key15": "27HicQDzjDaWGgTVoqtPGpqSV2sbPT31Q9q7KVJDQUZjDGQCA92WynKcujrqXzp4MTtD1m3VsW6DZoqZJkV4GNWU",
  "key16": "2cC6cDHpd5KKz4D5fGmfWwMdAXvEg8Ud8KfFK4ZmkK8e9dD1pAtxLrMuY3pF1U46QNnoem2nMJc86EUoR6dGaYhM",
  "key17": "66ak5g4u729faQdyi9EeAb4mKvfB51USDZdchCeqdvJuEuLhVFjetobV3qfJibcDXn14guwatow2jPdFjVTAz57j",
  "key18": "mN5hpcdqZ18N2aG8tu9QMazeMMuMqMLLsvYpbydsEWyhU3ymUjMvfxfwaUd9BzfyZmSTT4GM6vkZitJeurVAWch",
  "key19": "29pA7vW4CaUoPtfN78KUXib7M6qCz6Zm73wA3AZKS85EfR7k6F4Tw8mfRLd1qkSBGXyG5j987s8Mo5GULRMdRyUN",
  "key20": "5G8JjRUUMBrB1TQ16PEicF84gtYLDtUgiFxpgUefPCHrD7DPnr4pD9mdg8FtkVVMvM9HK4mRX8tt1J3cX5SE1PHd",
  "key21": "4JbDBvk3ERvkJaACrPpr3NwJWZc52UWCeHugcjsUMESip4bWqMN6xzeFW454ZG4S1EeXScV4BLNqiNQuZmiawfNo",
  "key22": "49CQJY46WUFudUM7zpNubWZcPFA6k3YaC6sEzyws4xY4XvE9akFtzokRgHLrybS1Sb4Yft3DAikw9HMBZ2rf5omn",
  "key23": "441SVD7nYszRfTaiMF3RZRjdJA5JJwYu48MATGwkm8Y6yQ8TQnqykoRvZxwV9J98VEsv43N5MP6oJdHsetRWNMQm",
  "key24": "HN5b9rSV3jvE5Qy28tn5rg8WSh4EnjCMU3W9PS8y7ibXyUQN2FheLLqJmdosUXFYSvmvxjhfPsqB2dXKoF5qVEG",
  "key25": "4W2LvmSxcM83H4WBGt6snTSUDA72t9NCtXE6wdMKeBGBhHAXz1QxYkzWR6jdZUwfZtUx34Km1LfsPq2bgAjctRJb",
  "key26": "3KjHsu6RzTtYQisDoc7xbMfYz6PoVKaFmvhPRc2QtmUMa9Z2fbMY3gjt9tEQupgpnC68ypkT4Hy3J8VjW7DtBfmT",
  "key27": "4nfZtsCTEdJt9hj3kNED2tczmM891b4qNkjZhhqWsPzfTKFiZXurSVTVZ4aNCNtxy8V1F2vkDndEjizSB7sBFgLZ",
  "key28": "fq4ZtJVx55MXNq3ZmqzXsgQPYSnuAYw8gdg5WKqxavPqjZ7MFsG1R9rgDyxCJHS5b1FX2HvK7wtCZT3ZxjaokWD",
  "key29": "3h1G1U9zURiwB2wiqvCSh9XDoCDBBy9jGPQRs35h1EjXMyXqiGXmCdpMcNAfdALG6mGPwh51k87dWqsFS45KFHy4",
  "key30": "2DcrS6ez2pHiiHKjibTSYvcYUTJUG7DgtYiAym3JamvpWbHoGPwzYmHDaQmQCSqJHP9r1gF33mqQEZ2dmApk89qq",
  "key31": "3ps7eFUDRrez5D8ERN8c91owLZ63RAn25Gun7k5jCvS1bCvNGbcPpVz31MFjPxkQNmw3R7RGGU11R86gdcERfYcW",
  "key32": "4mMHrxtMkvacaTEb4DNXANUp99rvuGaJnSGUJX5BtB7sQ6Lrc9wCxcfPavDUb6wSG1bQRToT6fyuAZewyb1BxYNo"
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
