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
    "4CghvYmgk5Mx8oY9shNWtcWu8MjoxDeaUqARugvneuWYj1SJrv1G39DeaomGrWEfNvZh9zxkNsLVoA9RnckaPZ4Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2fqSPuLGCW9GbDcL18cL5pinwgj8z7BSngDh3AdqDvPD65wHJXoZycb8KubRq9aMAoUMm6qJRciwLFrQSFP26mkJ",
  "key1": "4UvSR9esH4CRSGV9H1xCwYWaJXctDYuMMmgnB3QhJFgpByGYJwRiYn2LFtXgk1kAnjHKG8H4GnBj8zx9yJkBa3N",
  "key2": "5x3YKTJi5H9271t8xxbcSmXgSJqKK7coDtdKmHBLmXb4QqoeQTELAdWPoDvk9GfahQ2kd2vFVPYV3qVY3P1d37QD",
  "key3": "gUydZPhEn7oBiEp9qxn9bqGbt35m4qihXMSHbhaotatBkpUVChmWfZ9J5jpLtNsaauqYF6QToetHZT76gmf9tu4",
  "key4": "5Y2cwHQqzDZVShvQi8sEfZYrSd12AGB5NF19X5GTLCdS4srTA6Thggc1ajjVS65bJKoMeih2kC8gKpdM7KX6Ce6b",
  "key5": "4JMNnTNYm2SeMWEQTSpW4uURUFJH7BtK5kydinSxxMXcnoWMqkGZ4VgZ4wJQznJ6R62oxCVWuqmgJuevcLRgg6uq",
  "key6": "4Qon25Jyzk77wqLr44nGu2g1LEM4GGrxD6vK1CCAz4eoMgHN2ZMfdaaNSfy57ZzCACHnbiNhuvv5JBgKYm6gNWT1",
  "key7": "2zpUo6pJdD1ZkfTNs8wAnWPoWwbwsJRdVLCYRZF32PCcEhWEcewBqK3yBUaDfQ1it9kbeeYWs634SCj3T7ktVqWx",
  "key8": "JACvjUk8H8vfuNAuZNJhdmYz6sDjS3odfEEk2ZKPFxoXb4drvHHwxhuqYhX5xNVPP9chYhSm31eNWFEFumf6Apz",
  "key9": "49UddoVUqnkjW3tAUNWSpyXnL9znoLa7fdgSvmLngahPddWhJtcKnvmdbif9xyg5QeKy4yP9EsCmNU7ojyrvLcv1",
  "key10": "3zod7aiYFUzx35skKcajt342E8NuCmYfZzD9hHhPt3wChzyxrLU61pq7pvbbgErzJPsvzwCnsMA8ieqW2STBFkt",
  "key11": "5EtQECqBYGS1NmexKBVXBMv9cjGDiu92rT5XJzYUNPMMvEj4kKVAudr2McWezvq5oAMR9X5cGUcgKJ4Bt23aos9s",
  "key12": "441529FZocyAHKZDLu6V4nf6Ct9Nb4LVsYW3ez7bkGG8pnfncLdfLm6BFk9GpprY238r8V3zZR2kEi3pjP5FpToW",
  "key13": "5YMVNPdpLTK71eyUKkZRDW5mrYuVQpfA84XXtQFNunqqqPd2S2NFrZnpWMCdp5mta1K3PR7LfeZUenPweL2fPAdc",
  "key14": "5FCehd3wjQuaoD6CKu7DS8Qz44gHmt7JeX7fQY1GiKy1RoyYCkVLuuPAv9L7jH91y73vcFc3mgXky2aHBw2GX7pu",
  "key15": "2cXAKicVTbJj7KniGBmwvrWAGsPBWJtHvPuj94DdyTXqCyzdoJx2jLyiXBiwBjrzZsfLV8ViAGBwRMQRQ77AiJsT",
  "key16": "2pHZB3RhLFRa6atkVsojkmCDrbAhXfu2DFh2pU3dFxE3hiKA1q3t1j2beReZFrXV2RJXQYkuTbsaiYgTC7n84iRM",
  "key17": "35pKE9bEtjCpPLEafDANLdoSopvAw7UrpL3ETpcHfyPpxf1HBw9TnHqGs9bQ3QpHpfrr6yWFNo9gJ3RtzmVtR5Hd",
  "key18": "26gdCP2Ksayry1JJWKqoQ2juBXzNdyQmk33Lr6m7Rt44j5NSP9y1rB6od8THLK6rxWUR8kVijNWFdesNghtSX1h2",
  "key19": "2AGAMv6AKRU7RsbNmmrsrgXRG8owUBR1qqiQYAH4ab1AKp3a2Tw5VZNyPQbBUfUig2ACxCzESMwNMBWjuLWKdgVo",
  "key20": "3LNcQnN5S7Bn5pcx7UjWbqhq3yzdnE2TNXhGaha6dhRTtzKmv6HtCN7Fg4rnXp8cYiV8g4YWJMiSyehgNqR1D2DQ",
  "key21": "478nrRukVpoYdxwaMPbKFoWVBG1syyRW7KxM1NUtfDS42YYjvGbgZKE4hoxHf7HPVpPboDhvsu1cSQzL2umdftKs",
  "key22": "3prV8qa2NPiZSo9BKngUFUFvcivE6Hz9h5NdMR9j8os8csupzGgURceQ6zC7792gPzqMhDYTP8SnHVTdyvdui4Li",
  "key23": "23VHbRmZCS5sv17SQPhr8ztr4cepiotuNYv1MdqDqKCUpg5AdVWJqQJmEzr8Pss1DXg2viif441tDSrdGSJCQvtS",
  "key24": "3mDGXymXSg2xdXgWyocXcAjw5n4de2oNJF6Hwq7gKnDcZ5xULkTYoNbYcMo92LX5Tg2ZeVtoHBguuUBmotQznoXh",
  "key25": "47w16xTqtkGgwiqmFbcJqGAdNteEYfsXwV4PayRJF9BMAsWxS3wazLhNCBqoyAhmC3wATHJeiPydDS7npUnbyCED",
  "key26": "25R4MA2xgGHF2saj7TiA8ZLkPPoUdwL2ErfNYfThtb4JrdHRpJfatXMnGC6UZHVpGw9UD6bGsraQCMTCj9Yk5KYR",
  "key27": "5oApUydzEJf6sRwNHPWhpFDkHrWnX6cjQ4vJyHM8PtNB5Vu2yXeSzUy41NiPf4tVN7MUqL4r6QV6zUaVv4vWXK68",
  "key28": "8Yy1ziCCJNukorCQ8hxDRJeihwpzTVcJdr6ghDy3d2RpNacHMzbA7hH8r3EpQCKFo3XVf85TtJNJS4gB5SfcMdj",
  "key29": "3NZCv7UEHF4cet3rtW1S7cAJYv7SMvMk8oGGUWvwHSLqjFQrMKwzZkefd4KAuNoz6oB8GbanxHJQrXTvGM9Kez2V",
  "key30": "ci4mAYGye8RgAHELw8GfSav5RxdnVMVEXGNwPnbPTZhpJEafRiXTwD5SFx5MTciTPawBpiLo6uin7rkSjp29tki",
  "key31": "3HGAoPmrNaoAAp9xwrFBxoFfxzrqsVxWTghBeGionf7P9DHMPdSVpYnpJAXqeu1AyqsaY1oAPdDfPNY4RhtEE6cP",
  "key32": "3Z5MBbgRn8AWRR4ErspSNGhtqFgPrcZJMi2HiA8DThXomq72TNTCftMP4Z5YGhzTJvjAtchCLKgAuMJegbLQ5bVP",
  "key33": "5AXWHvhV1UjoeqH3h2XAdoBy8tXvifZbzETtsbeZMrwuu1biJxRdkNTMLwLtRKZxrGRBWvXzWviqoH7ypi1pVLcS",
  "key34": "xfcYjijgdsynuoknFn54TZGR884WLUUm1Rf76BorUTy1JT8ta1RWTJLD8RZk7A7qwBpU5FkPDLRhAFRtb35BEs5",
  "key35": "uqb8EkA358f2qu3wPGX2WLc8bf6pFhxYUZ8F2XauW4S6B65uQpKTztpKYMhyPkWU6cUGXjRktgzB8tdNZ87GQGZ",
  "key36": "4dz4wrjFChzR1Lctpj1SiUqTj2FnbZLTFc58MR33XKrJ9Dr8dN9afSWhYubgREnxQcrkcrq1oMN588ztDQXeyike",
  "key37": "32cEYbxMAHRQgwpNkGDYYX6JrhUHHzXPp1FfeErHF7M1DFMZxETYHjqBYNcriZpmgVumx42dDWNoFsxVZvWMBEfA",
  "key38": "3e9tP1TW8ur1E8oXjjJcp3Ce6hTfzCNjREr234Y3Qj2zWkyXoSKGqqQwBktNrqrEYuVmMMrdKoS2DmexCsSV6dzV",
  "key39": "DP6NXAGp3KyN7774y7W4rfTkazVakwvNjUrKdnmEESD2fF1g994HHQk87oJBFZyBrgaNmU4wcGmSiQg32NeuvwQ",
  "key40": "32DMs55B3ZFFETtLVwPVwnkt9LmbUhDkkgcDh16UrH7QaWxjo6xZ8YGkC3keKWxcdVE1JUKBZ3VqWSCCEdK2rEZN",
  "key41": "X1kwt9bJEA74UmpaANN8TfgbmBXsn7qneyCzUv7XQwkg3ByVXb4yMBMemXmWQVxb95UmGH9n1HK1DgQkx6Mh2Ma",
  "key42": "5EEDPnp6EQEXxEvyffiChiW5NNvpa1zfyvwpWhUhcF9a78hutCTTgBi7ArN1BCQnvScGLDJv3dr4isjAaN7KGg5r",
  "key43": "4Dzu2DKKBJUangGsdU2VAqdjmqsHwD52RyxaqoXGEH1MMVJGn7A1Sqtp5X2hvJqYVuJVZebGNv23Zeaqbv7La57U",
  "key44": "AHoYxiiF3K34K6nsRyNQFNXXLBy6CB1PRNi9S7QtAvmQgpGWjm4vaP5vEzJTe6uPag1LHHnMpzBdwoD1DEGnYo3"
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
