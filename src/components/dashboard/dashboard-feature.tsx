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
    "2moJPQAsdhiTFWMqrN8PpKiXvReKAdcPfzDwFRoJQUd6NYc7EFWMvdftbhAvhp14zaL8YTmNrJ5toDGjLLwjpygZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2m69KzZHytBpbhAPvCiJtWo5QEnm2RVQ49euMB2C17P3ogmA6sHJR6aT2xTE5LZpSoj3h6DtQ2aJJ9wbjwNvWuL3",
  "key1": "5QsU3ZfzQgqU1QXgHcKgqjGzzZj5yeboGEWvgjMFx1VwRRccXezwGLeVfcaiekPkc4hse43HW8S9HqirA56puxYg",
  "key2": "5pzRaT48VtvLw9rDn8CAzd3j3AhPJBJFRyc4CGx6xPAnhvp82f5yozPayDV8jPUMMoA3rZCtaS61kKVBrzHioRx7",
  "key3": "3RypSharPnRzNbyzGYRGToitdwc2v8DgS4eRtNARnCAUeMbfbQowuCEYXj2WGZcfQ3deCxWvxkXizxnxeMfQJgFY",
  "key4": "3GnwpXxWhq92qXvuayAoZmHu88KzfomFxG1B5hfMW7G18o253bmx9JQS5MftRJCd3PfkCiyPpoJFgw3xAzReQxGg",
  "key5": "3s6tZUF1oJzDoocagkgabMt3L2KuJHK3LkukjTVgE9ZpN7WBprEieEJjK24i8AedjmfpNT5JaaPuPUvotHgeTAZp",
  "key6": "2LUBW6ye4VFbYMrZcBRxBZFzsnJugsW1obKW9EhjEozABztNivM11nrw8Mzv4bDDz7SRkHvsrnhbfBfgmH5RZnXp",
  "key7": "3XSonqxS9BuWzsEi3uyVCgMV8fvGQN62LCchC9HqLBDBpVFywyLrR3V8sE1eLiEcDjBkwTfWTXP4nU3biK689gyj",
  "key8": "3NsfiUQHrP1zGDLJ2q5xWEsK4xsdjVQTwAKiTPPvDQyhLkjKMrLyGJCzudTiQUnVAWnX8nG65AZVkkLi2wA2n18j",
  "key9": "2GWUtjiU5GY5KGgYc3gsEs3CyWDVDauVF3HT1grcoqWua9RKYonjhJzJVmwusmrrufHScpk8MvcANhiFvWw1Reau",
  "key10": "dbque3tKc4CAHNpdq1MgDnFQ6tgENwtUyoKpMXcfUQcrAPdnhdgLX2UEZYB7G4wiTFqkecyf3tueoLEkJ79W2Sq",
  "key11": "ZsEsn9M14tQ7TZg9Zme2WtW7oYRPRueYnDKmMkHr23yuKbB3MJB9qV4Yxx33d92p1i1ebzXpCQAc6ZFewaTToUn",
  "key12": "4qFtU1d54u3hbrbfsatx2cCGgFeaAgTCaTu4pw3YJzjGxuHnboT4hJ9yhW3RMLTYUeHvAwTdSGBsWFL8zLEfsr6k",
  "key13": "3Jf2LgCkgWgDUkyjx4D7xk3vGLJUjfDEwDBR6UUarEe1Tki6GpJWxBq8vTnJLauLNPByRqH6LA5Yeu5PcYhJ4Mzm",
  "key14": "Pm3qfV1eUUofLshdEAkBSdrY4ZD8rmkGHVsirp7JcYY89nMehxgxwkziJyiYC4txFqqwQ1vU9W4M2bcq1SCVVCK",
  "key15": "5peb1rwsQhoRtcrmB9KPgpCwgMh36HDnXXPzRYFV5pG2m1jKbyLaCgviEPj3Cd2LBEsKwUWon1XJPEmDStnKtjoh",
  "key16": "5GTvWeWDFSfeqSo26ViCcEFBvTuRAxz5RdMMaqzQAeHzSfxX7cj25HYiBLxqsyH8WLgTS1Q8nFHP46fE4k8tvaME",
  "key17": "5QWLTD8oVCaVLVk2uatyABd7iVaavYLu8PcN4rqXhF7RfDDnWKyQrCufzPCtsmUp5kue9v9A7i7TNebgn85Ksyka",
  "key18": "3UeGzZv7ydoCkrL7vxWvmC88rHUFx84TzQHLiKuhNYzBHghyKmsigC8TYxYBi1s9br4H3Wjajj1NqQA85Whois9P",
  "key19": "3Cj4e1GY8D6fKpsBL3NRQmFXjUnbgxw7iF54xLdXSCJPxSuBSpKHycbsXKYfTFByYsbm8nj3zm2wsRPb8jb8e3ep",
  "key20": "4KTpvRcWc5t5dhUHWXMu7FPRVEozNbxXaDunvCQe7qVuETuiDnw9AFrnLEHS1qfm2WqPacWxm5QjdkvRBCc9hY7i",
  "key21": "4i8teB2BT4giZWbegXL23xSc2AzfNxHaEuir7rA3AK3a7mzXY76LYN7aF4xBu2JnBV4DmxANAE6mWsSyNgENet76",
  "key22": "Dju5VYs49NaZNHEG25cBJk9uUVvc7oHxLTBgn3huVP4SqP9z45xc9jEhC6YJUwKGN6UMag2DbMY6TacpyUpLSYc",
  "key23": "3EQqLuaTW8ZbhkhMxHR2TSA7PLTTSjDLMQHGgYqbzv7PHcEjutGGZkMaeVpToLUbqchRhpNhnyF15zYQLC9vTVjG",
  "key24": "33cwd487D3dfkyCQPpB53Xwsfr5oxHXfwuc1KM5rsh4Lyz8kUZx9YMTSB5hNzH15QPRBCKNFygNzeKS5WrThWrYn",
  "key25": "5Hs8wBbwL6gNvzRr83VAtt6DB8S3VB3uryjYsMo1gGruda3sQQh3QQWCGrX5HxoVXCfJ3M3xVUhtVxQxVn69x7rt",
  "key26": "2eusufGGuby1nVcq3TCf375w3JG9j3pk6N9WGCSHK4NP7k1ciXqsQ3F3avqbyhQX2ruevhk7tBqJU3NCJ1w6iyEx",
  "key27": "5CvBiPxVYwrzMYxz24w51YtpaJQ2F1KQpgxFybkp2mZUt7w85cDqZkPXVtNe6STNbUFckZXkuqo5wkTBPpnB5unU",
  "key28": "59sN9MHoQoaEBi9TTiPhQR2p4QvK2d8Ce1TDRVbwfyj6ssivJiWy6c7Cf9ardahi1kuAtJB3xogo1Wj2ynfmcosx",
  "key29": "2dApj4uaLTfFnTjGqWu9nnAzVhjBPqZJyuSVpsHDRNVzaHRteLVpYJuJkFALBHL2Hc5VVa2mQ26AfVfrqLZm4HAp",
  "key30": "5hoJkHCxTexanpBErmdM9dQdQmGy5dgXUfE1hJLMVSTqZgGMBX5YaiEth3a37HsyZzs3biZbAEiXdoeCgniBcbaB",
  "key31": "dydFJxqPJjYuunGY3RDqdrBYWk6ym2jN9xMPrdDkUhoCezcWnxrWfSP9LvXgxq8uiqzux88wcggnNWSzBu1btSG"
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
