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
    "zAtiHwUr2WXcT7e3h9fcdjzS2Z3Mf1HzbbpAZK6jHzZcZ4v5HrJWYE4YjmphRmnNCeg5SjUz15X4YxUzSmYjdm9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sUv1ofiVLe8ajjLEVk15RJ2bGeUtDCwdCV8BhKjLA3neNuheUuYECVd1WEKESvQ53iL1NLd2b2QgDTiuqgbCvbN",
  "key1": "xbG1DP3XUKkNAvnhtbPgBw5fCZMoN9L8bUjkPGUSLnD9EwUBxG7h7iCVqT5nkrH2oYBrB4AeCzBMB5zsm5JkQ4p",
  "key2": "4T7Czm6QnFxXDxWBPd3EaKzs9X42h8iFkYZj7ARZNuX6ujdiScV22hBr3CtPNMxrUti4MqcwcbcrWxfcBA9YDEW7",
  "key3": "2aVmbd1rzpBMjpBgW14S62AuieA1WwZw6uvFEoUhBgZQiufwktEvX5Hu5FL2UPtUUTDNGuJYbeGDR8wGLL8Y7DKR",
  "key4": "3JidSidbqzeaD4R4wxh3sni4T9TewvVot4dZN9WqcyxZHpz79DJuUDnkZmB9rptVP42yjXz9XsV46jUPsgYoguQ7",
  "key5": "2GpaCgo7K8yEoj47nETqcBfbxyw7hAtoioJmgsBmnJJKFLDxTrWRZz5QaotMizuPwtoWT1R9txgToMScDMnBZByv",
  "key6": "424Nf2tnsUcmqLDXCaTZEAtJz1AKjkjP5Tb88cFbU75iadbca7YADTea9dB2AcPKLEGJWtuBKCAspGE8GrmLK3Gx",
  "key7": "418w9WfWTu4o5cawymkxstESrhxqZzYeyjcxYnrRZq9RMpHcT1KuwDrF6sjUL4EmRurcfbmEyQEi4WWZWs3RxsN7",
  "key8": "Gz5P95pmQsm4sTkCxyhzzxpsyLnA3MNfHUARHB8RGMGXez6J5arGVhdQf89wzZuHSYn3yr5deF2JWpT1bHJf82P",
  "key9": "2CPgvqogub5Etrt8ko3aPyBS3fAksX8jdsFx5WikFurmDPvcSLycnQuBtaAbX2Vwkksha1n2pzMLW8AJ3MqUBX8v",
  "key10": "5Dxa4kUhqWbUELRqp4Vp1PZFWgiFHWsU9m9JSCWXpDEx12WVv84so8Zxuafou8FcDYhryne96ihnE2QvsbFmSh7h",
  "key11": "2kpv2YhbbMTYBFrVTuWfcvMXDfFpAPRrWYY95yZAVSFkD4huVS79X5CAuG7xwyUZuiQgXLQgH5cj9N6J9jpjjv9m",
  "key12": "5z21Hbi7qQG7TrLnoeBF6Nxbxe2MPtaEBQJHuVo2E9qW9jnmvX72qWfnvedPTL79H3mHU5wpM6z5a5CCy8kw4yxi",
  "key13": "5Wye1cj6tVjg3LEdnXjPHnhrHWPCrzs1raSu2xiotXoGQpeCJZxEri12c9BfBLgv4HXtQMmvZ4zWkx26Aqpj7g8E",
  "key14": "5SqdgxsB973d1SzjHGf6vTG5uDjNu94mieWmHAvYvmPWmewr6R3YFw4LY2TNUPwF49fnCNncm19Cycs7E1iR9dR",
  "key15": "2yHD9xCt3Em1Eu9GstwjdoeJ8qN2aogDtg1sK5sbSLs3d1MJoXCygt5KQ4cVf8ypTQ5jDhtt2Pz2R9h8maYMkYWP",
  "key16": "5LDFg6CBL63hGhUGjmj2aBZbUSK4ee4R8fRZHBdxzNHt2T1QPTU51s63HUfuRxauNtKyoXALy8VzGsEKtc6vT7hg",
  "key17": "nd1Vf4uoxVke6yGpUzxtPU5BtfabxxBGihB4D36EyDa7fByFQgR1ftoVqVUyvFJXYrUbtsc2WTv5TJ2G2ZYAdwR",
  "key18": "4NgLUdPhrsVyAsunqVoB5sbCWwGcWfrTfHyioZvX9SSBXz5rRiXA33yamzdS39PMuiSeZVYyp3jcSTNwVwuhbNKP",
  "key19": "4xfMtZYTFDe5eC3L3WMpLcFwWsudG9nurCr2h11KhvgcQ5Q9sChBcJrNpqHJiWsYXuKKMHnd7VviKjGpCz31b8zq",
  "key20": "27tsqxxnbxvgUqAFdkMd9bZGKjKx92GU4p9fafU8SE34GjCjKEGYWc7t1J9Mi5fggqL89qBvBsLJWLv8dnLVmy2M",
  "key21": "32NbV8W6w8HUuhRKkcVtTDWyi49SWNMXK6pmcR2ny6Pip5Ga8nZKuutkpJEuEsdJSWJgTzoexMKHPG1JwU6wD4wk",
  "key22": "3CqmAEEAsyEZmfaeVNNLhRsTi8VEHtmas4uMqMxqmfHtFqzUfQvwaqDpgHwnk1e2UP77jGzRQGFfV6fadM59GBoN",
  "key23": "PQoge6pihFAFex4wXhSDibDw2Lujs5KF3AFutK2ncKGhapSA9X3eWKvhaqLhAo9FYdikMw5Wjf3J5CpB18C7Tfk",
  "key24": "eZM6HKuJPTENAWAxzKzqqSggb2FWj4kjy18P1ybbnLg55C7SU9SSvPmCUvKFFRnwULb6vA9RwbEyf7AhdgS7cMR",
  "key25": "2WQaLE8k5JUXsxW9bCnoSPNKwERHvEXZrgCvCSycPC6CeBC72czpadgMEsyWAYrSSyxu1ioaM13Ee8AYomjsSzrU",
  "key26": "4GWBic7BxmGizNKMhXDA5d9Epi4pUsMADghZNX5FsLZCY3Hitrt77KNGPpa3Rfd7nvbUQTQ4mti6MqqV71iiHQeu",
  "key27": "3xXTNpsWKA27ALwZwJES7F9wUFNGxKsxBQTi3bdaBxh7NLj8uFZE4vEXT9EUf3y9PB6VRTUnrZHpBj7MpfrQvuJg",
  "key28": "wBSwwcSm3jwobLZiavCWEwJKNVVvTv4tuqi1srqGNTmUgHpLSS49HTJY7ABod4Pcj3qxfWZbKc5iGKbxj4LtnPQ",
  "key29": "5Vut1YpR5uvGpfv7b3KVM3VHGdzTJ7v4SFyRePhxee4yTELPYYW1ssWtsQg7JXkxS5GubqGYoXWWrs1oUXnJwM9r",
  "key30": "35wkfhKgdh27TWTtR36BaRgxuVw3vqXbXCzdmygpPSZUot3gmmBTMPfG5ays3V19awHQWeDbJHKMDiLaY793eiWX",
  "key31": "qUY5tWJbvcG3yNNMhKeNZB4RRQWMtq86E1bFigbqCRfmagdyQNVwjWRnjxTawjHwGUwNwH2YjnA7spnkVr75nUT",
  "key32": "2sCARe5J351saoUJdGtFinMZRpfSMiStohvEwkngxrhtDTA4nogxxng2ftsposp4trV2b1x7nMnHXTjQ73LaJut6",
  "key33": "2PVS8TANhds8r8APGJZUFKNxr8uXNZHCGbmNajV8cKaMJvr1sYoHn5HtX3EZXDA4VCKJAnPSufcbcnoynUGdHZfm",
  "key34": "5rR32iyPhxqWFmDWbLtCPcuFVqYUMn4waaj6g7CzcBEXng4B82eijDMUSeNzLv42LuKJFs2EXquZhtoSPS7vu1C",
  "key35": "2rf2BRQchYG3kKhQ7gubEs7LgDQfmNEzJBEhwZFAVVMBFiB862wF5rMNyRqqXFJHgJD7pdMbPxaa7DyvQjkK9cXn",
  "key36": "5jtPmbsqEqW4paxZWGVZ3DLEbLyHecsTFZ9PkuDD6ZthjWhnuChyQswsRcFrV1Sd276iajrWitpBr5n2kPTcrZ6q",
  "key37": "2j5ASZzw2bthHuXeYetk74J3dWwDgc2enAgMn4zY7XTzRRaHTjHxVFzSUo87a2xYTTThswfmcF3SF3PeFJ6zXo3X",
  "key38": "41gnv5siLkwqwSYct8B4nGHGBzdJxReZHbuJ3XJ5kqXQc7povKWQqDWz2B7Fbz3GtH6ujDwbuVFXmHdMpL7JzJii",
  "key39": "3BqEGgcjK1dS7URceMbuPu9ouGruqEN2XUNYv6K6QzWrhfuDKvLBYrWN5RYoYEm55K1cYesdHFQyB5QkdEXrUgL5",
  "key40": "4tm3BSiSoFo8rtUtUFb9XdqUNteWqDG1C58vaz66yAWP6kxygN8XApk4htXgNFFWt1rZ7FR9w6wfC2qmK8hNRg9V"
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
