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
    "48HKvgSiUwoGFSMcVP9wTVj77PbTBXZP9HPWZDwfWghT2C3tJeBGNfdxnu5sBhMMJVDu1B3L1ZnYxbNYZnyvbJSS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kRGSCYEHHpn5XdWHf9fWjLjHfgE1QBHBsLhvsuhin6sNyQheN9KqEySRBV4EpwEqFuJ4t8TFDNekHgXZ4DSTVaU",
  "key1": "TU1iqBxF4ZahXGb8C5GCFsdheXjvCGKesjmfq6kUkdTELqMWqdGVcgvGBcnoQPd9m7ym1QCkmq2YXkXLog7r3HA",
  "key2": "55oyiokDpt38Rr9tLNnPb6Qr2w32wNRPpsbYsNANYa1W1kH6MzsXRJK5TXoao1PjeEdX8sqqmZzpDu9sfyGrmRAV",
  "key3": "4iWgiPNnWTH6DMVXZP5qyrrGrz1vyEj3sePZ9T9PnHEBUVDPXwoHNyySSnLzqetWacG8TaFA2tw3JCCYHWP5zStm",
  "key4": "2WkQvFmnKu4TnCpwGmaviWYBNhuJj3gvhNF9w18kQnUYGVpoZup4PE9RLfhGkZ2tpDP2EeYQdNGzdytAUKYHTBcT",
  "key5": "4u4Ejvo9G1KcZbv9PHrg3E2VNJR3zYqQkUiEfPY3F4mFXH2cUV7acmHw5FpkQYkkaZi6W7g2Pdsr4qBxGRhbYJrg",
  "key6": "21i9fB823GW7VTTWYmMoP5PMU758wAJBQdtAw2JobHPJtYL7HrQsmhLQFJ5bCDa9vZyJ6CXfnCqcQLfeyuiaRude",
  "key7": "465GccBxuJsYjn42aFXDVb2eSxm3iuZU5KgJXQtBjr7BiAjpBdR2GbvzduSVEcePu32EHm4DfFfabgepGEAcnXeD",
  "key8": "2Pf9jSxdpRe9MepAEFkWLAPL9S3nm4nfyu2HsErxaWKcf8BKnt6A9drbocmxDvW79AbQUkDucrZnuxRXk1ZFB2si",
  "key9": "Sw8veJA9HNffv7MFfdSFwuLXAJ5xVG7D8amACiw3CGwPCfDxcHtPcDB1YGep9Y8kv29Mg4HL2K8G7p8vVmf9xeR",
  "key10": "2d6pV3vM1yprBAXpCCwFMpT4inbxXMJ2FUNSaV7QgM2XkCEGTTTSNxhSnakYudq8DVdtcAXDsYN9pJTvvhCXURqT",
  "key11": "47CwNchP6NswCKN57LMZo13spPuyQCCCsK3WMcAkykfpJZ52SkPhm7XSyQ85PmqRkTRS9otq7HCphqRZeB1n9ySo",
  "key12": "3zXUuZyGhYyt5MCmE6ad9qiKRQ51QRGDB3hR7XgtQ5DaWD5tsts1yb3rKdxNDcetgSRRqdEYHx8s4h4ajJSWHJwM",
  "key13": "3uUhcueEmnyP3Y1U3sWTLJPvJeir3W45KF2K45HufHrpEDVoDZVnzZDSyUkgZgxXuqXucKboErZF6KZEP7Cg47yH",
  "key14": "X7jf7yiJ5mNGSK6aeeKcASahQxxzf4wegVpTp5saJzaEeJzDTMo47kh5QHgHZaKGpFi2hTnbqqZapfTgWfZn6gV",
  "key15": "5NRFy7HtUBpzUdBnWMRY4Z8EnzBhWDYUz53W7mVGkMe3f6HwPBpJMFaazHqTjjMoeRrdRChiXD2SLEbgmiJ95VoV",
  "key16": "41rLKnFmrW2DyGPKe5PR6JtPs55nb6T6De3ho5bit94ZyMBzkbGLr6pVYSGqCK7mjocfjxUbLDYTYrAnq7mgqpFB",
  "key17": "ukgErwkCLLEP9T5fEcyi8svf2CgozcBimirqT85KQFwT3L28bNKSKikVdyc1Ay5EFhidFrCZ9DH1jYZMNuq2wKf",
  "key18": "4FCgJTStbk4JH1WJo8FUPLKxm6iwBRDQKndgrmmcYqSx7ezdxxFQUAbxYMfUu2qrpLcXYL2Rr3p3fobiS3Ako18U",
  "key19": "2NCxhvw2USu283RVkm6uVrZnetcq1b5vYzwXhGM4n7qKsbFewFFCqvLZKBxu6nFbf3s2gSodqmPUYp2arn4DVSHJ",
  "key20": "ELqenXAVvK3oReDiHnNks9EX3xdPS56EgvvprQsTJF9D56hz2xmkVhngTLFJaCKJY9zw9xRiizAbSS6F7RCjUyg",
  "key21": "2YzTaYZRcnU6rPG4LESK6YaDSRvkpWC2steeZK8qHKFjAKmdScYAVbuwueMQEE2RUMBY7f8NDLKAN2PhfjFiPWur",
  "key22": "2LJgSo67b7NDNcjE1YQD5pXx7e3DwJLPJzZCzfGcB4ggozNvoJktgGnzmQRXWaE7Y6odNyRBatSwS4tU62aX1jfo",
  "key23": "2pfHaCsvPAw31ACngk7Kvvyyze9gPoDJW1fvcijPXHcaZyDUrBPJ11rwThBkFG2yb2b4AjuapuLeuRqCYszFeCkw",
  "key24": "5qAk6gsh65UAsPicwG7reQdoLdgaRo1ZRDmfqwc1mHRp7QbEVnQWYHiJWxyiPwYe6PmvVMBqfan8msuH25SMhZxW",
  "key25": "4nXE52FJTVszRwfpbdkVjWouDSgZzDQtGB1tMy4eukDSX53TAAHVawSrWbA9CSgB8JgKQhJD4xZCS4pzY31EsGbN",
  "key26": "zFEJYHDnxKjKSGnooHTyDkgP1G9Xp6FYtkNPAVAEkq4uMysP48F1Jr4SWz8TzkRtKf9bE9G76a1jwhRFAUU9BFc",
  "key27": "5echvCre4xgTUVGp7etZTj7GcaT4gbNGkGixv4pL74zdK7hApoV1mJLCrD9ye7xi4cXMphzT7mpb19cZQzSaW8Qb",
  "key28": "B5x3yH9NoT5DD6kGp2xnp2ywCXkDfrmf3X57p2nYPZHPLAJiTfuveey8rn1pv6ZdfUaLwaPwHBYJCAW9m9ueFcN",
  "key29": "5CPghYfReojv6HEmbbCCTcNn2sMBR28sh4eXDX2cnJqkTHzhgufLPi3ZiiXKousuraTEuo3qMBgbxUFDMMeCuYgq",
  "key30": "K2QFeUH9TmTzXoogKKwbGe7csAFVL2b2wKEss5CDK38DgUM3mAoFDTf3Jn9N29RwEdkmUX5Ux4PVuDB4SMtYgpM",
  "key31": "3eVDqXr4wBaTpdKdkHgvPsWasDmH2N7tbtELH2Un3YACvEh1MESRU8eKJu3cKCEXZKrwoX47g2awM2PfhFxiCVoY",
  "key32": "4mkGqkgbYxMmi5UcxNQx72Jt8hCd1DYRwMG5W8sViie2QbJAEFeLSccVg9Zn1cHTa9EejDsYSssRFMCG7cDHK7fQ",
  "key33": "4HsqmDU3oSnkjcMjw4nqWo2jsC7y458kXuyiHMjts6FPeijsCBLMiM6ZUa6XDJDzoR9YEyfkwVtVM59mRD2ib6MP",
  "key34": "5TbLm6aBAX9u5KPGDKP7bndouwbEvCSC5NK76x6V7cvoJvtdtS18Sf1Bk2AeCV6FaUk9hMhNGa1XueSDJeVUbiQp",
  "key35": "FTGHVdVQ3v8SGouFBdyGzBP29sQ6SnGi75eZnTtxpUeMuo1Uedd7L9BN9kZkEXnjaam4otJww2TtKTb3GBpngX5",
  "key36": "673xSqmtWJP9rJVQfEu14RTLD2r1WM1UQ8MEfQ21bRgyhdAcJxU6XJ17yYZBKLfV7Ghy9RGyqkNy5WLBXYaMAb7y",
  "key37": "65Zcx44aySjGpvXYD2HXytfEyWMF1qWHZhuGSSudpvJuT4AXuzkxxxKtr6oaZNPRMwSjfkYhFgHyHgGJDUXDCEbg",
  "key38": "kAEb46Hi1WBWbKKhe7nSxcPuNbkjSKRbvP9aM1ZU3VNkBHKth2XhG5C2M4c2deTY6tXZS9B9BkyhftJyBMaST2a",
  "key39": "5sJ2f5jqdTLnw4WJa9mCv6E9FVFwqdXc3UaPJhFHaq52FA3Fj6wvFf4CJSGUqQzMu1T4XNVopDXYxuQVSjNKYXmM",
  "key40": "U9ihyUwDJZkc6yVCHqZN52brKTZqt6oegRoooSxHTVVLS8tAYzn25n4ku8bDF7RjUm5mXFzp9THhwW2RBtZANV8",
  "key41": "3RwW8xDHrJEtsHZ8tv2ZvTZbJVCcXCq41pDD8YgVoHtEMAhgUEJ7DioXp9x39xiJ9gjmXMCVFR6kQpvQekY6sEHX",
  "key42": "33spiKCtSgGyEXZBicscm4gC548Un5vuWZywhxqiQ9b4A3T1v3pSgS48K9U3Ci7sd7EKvAUGe1DyjEy83dMdxx8n",
  "key43": "5EFHY3LQnmoKZw8ahWqg3ZiRjgchWX8WEH91btz6ZE7y7WBYsrR6GApymZhD5zfm1bMaM9RUaiYyxQryr4HgwjXD",
  "key44": "3RPNv4nnGZzzyypxi39AUnHG2aK5SPdVyykoifmq9wLQiiEeKQiVTRePgjzGVaVx29jp1AS63zAFCo3DFeaQ93rw"
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
