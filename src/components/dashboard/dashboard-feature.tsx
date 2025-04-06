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
    "4Ng4ptHX6DJAvi3LPzNL1pvDegytQ7bhZDUqjSirz7iNvYr51VeC9p3QQjiwVMBQQJ4sxw1zZQDDwn6PTc5kobeq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ED7mW9ULFTh668V8cABijXnJNiNLsd5H1TXWApXmvbprnyRrjrayyCy6RuNbtijm2WMTTNw1CnZa5A9JFVLjQyg",
  "key1": "oWVRmydMKKwh1xpxiSfT922SAUonuqWLyZCyRi6qHpD72R4A5M3iqh82rZhirR2CwQ81rYVDpjjzJoQ66a3677k",
  "key2": "4QFmnG5SjovGneqMxsMUyeTx3YLgHn8vsodNkD3iykGnVr3WYjNDEpR6v71qRQrHjFQFnaSRfifFsMZHrrF2CVuE",
  "key3": "2hGnJ2nsycqtDGDyvNRqwa5bFzd4yWNFMXZ4goRC1PdP7CkDXbrxLQmt8QU1Za3wZBfzyzt4sLBJQEMZ6F6DDHiY",
  "key4": "5iLEfpKV1sVappsayLXh8tC5uAJgudmXSAc8MNQfeRpAm5o3okGemQBAisFZFM43vSNk2cWaLD78yfZ64oG987zd",
  "key5": "HA1C5VtFCnt9oTGLGr2R2AjRTXn76iZTztCDDPfRyQqyu8viX6imw5X34UbaFRXrw5DhJMkjULdtB4Ga3eXp9Qu",
  "key6": "5KyNBiT5R9RBGu4bbS8ufp1DXFHcf1WEX2RUgZANV5KbLgbbGARuayxB9vYnhhGccRXdnuvehZLgphmmvRVD9afb",
  "key7": "23Ria3kiBtd5BcJBKhPQ5ESzg1EQZYmuTzy4LpsW8Nbu1hBp3oVwaJzgQoUdFsH8S8iF13AYGATpk4ZwUQMLMf79",
  "key8": "3hBT6cZhkaer9P2BqskNjvVvptLAvy65EGdsNz1ENdxqFVK5FcTjf4HCppmYdmHBdsmZNRcMEMAfc5wzNtu2TU9J",
  "key9": "327zQFXxymZcDv5cnJQiXYUFnAgUQaJ6UvqVbu2evSLLc3crAke7c59k54r5jW6FP4yndEErhyusJL37A7rQvHyb",
  "key10": "35gidj68YgUEfpyT6Yyn5mXoydi2KCsrYQg1zufMatuXecmEm2eKMz95ChRRdL6iy4WbnEv6MzMT3sgSVd7EZpNn",
  "key11": "qsgszvCKV38i5dgpsHsx7Rq4tkjvpwBpsiamZZuWtBGimEr53kiMZNvbieGpfisD5X9pMxR5VBdWxZmyYXwRZPH",
  "key12": "62unPVZYBUKJSXxupqgHRKZndFPSeVWgfBVQUdgZitaJ9v3iXTwVdPxHmCknwJxpHEjb8z5VbjEqLiaoWbVZpstZ",
  "key13": "3vUCQjc4HqspWh7k8Mxc7HuucRrMCEUPBeQBTGReHTWwEoT9RHiz4U7LaEcRoXHoc5dTsbqca8yK3NSzUySsTfeh",
  "key14": "5hQ87xSS1nshCqPiVK3fUSwf9EphqpuiSbtcrBqEskrhUGogqjvJhnWCu9gYTXhjn2BbtWt5W36HEXNDixLoV7Fu",
  "key15": "58nFF5XaZwZ6ePLSDcuWaVATJQWW77yzw7rryEg1titBBjubttgi1ZCvHEYoEg8VaLskkj1VJzFwsvTxrJQ8kThi",
  "key16": "5siBwqzyohdUd4QLGWY44cPaEwFkhvnJGXsbPXyWSy3MMkb2Tci3LE1yRDLDqLdLzSu8AxzngMm3pQuey9q52DWP",
  "key17": "2QjzUPbZdfXS63dySKhpsD1uGpWQ9LJwjZnXmPWB97iHHqQZJa4RCreACFZFbiUs42KyiQwgevyqg97c4vLmcNXY",
  "key18": "4ee4TzrCNrfAogJvhiqw8XxotyKHsyPj7RCCeASsxYTeZVykqkrZJSrsFjXo7AkiZr3adtJ9EESznhFJf7Q2B2Tv",
  "key19": "3pAU47XrwZTHRw8oxRxfeainTRG7ZbUpdG65c11cCqF4CRRzpu3Qv4TswCLcskRZE2DxnzHzmoYFNnpayfZd7oWm",
  "key20": "3SFAqh3Ma6Mxft9JDA5xHQZKDNqgvM4uChx9XiC1NuKZBUjEVEeX5D9ifYS3fNDTdsDspmqgB9nsMVT4jj897Djb",
  "key21": "4G3AN4aFau1KgMmvdCFNGAy9Z4BqorE5VZJxuHkZQ2JU1KgJbRxDyAJwV5FAX6AtpgYQwmAixLQTHiJTeCq7cvUr",
  "key22": "5bEkVTvbiEt6P4LC5F4U4QiZJYCaGC5qkPGd3CthZLjBhKCo4buvkzaBG5awoJ9KcD8gmNBSeKyskfWd78y5h3ss",
  "key23": "56M2Q35s8ef6rcCRSeUYPwK9oEvVNeVAKsqtxY9z1d7YojnmUwq8Nhie4JbLcf7QzZDwoa5Ua4FeHBXwwUQprE7t",
  "key24": "5yUgztxHKHE1hMMKx6RDPFY78NmuJ7Kj19Rw9dRdK6mzggtAGaFjE7Mp9svgDyuzPTiunDx1jWtiQJaE89iWBY4F",
  "key25": "46ing2wgU23LUGqTK8iTCNcwUx6eZTgyrgDk9SBzuJustvybhekTs76sWqaC2pHZGXk9vHL3KzsNRS2quYEGADBb",
  "key26": "61pGb7UCupKsHK6xxJ9nLAUpVGVMTV6NMEZMjXFm3npYpxKjQmvLQWvKasqtWUHhJBrzXvcgd4zHCn54FjgMikVv",
  "key27": "2WiunFeMDKDHwadb8PUmE3Ah4cawoxWp4VcqEjNnmhrnCEgFQwjuggxxs1vvAUPgEndwGkq7Q9KAxRs6Gvgg5L29",
  "key28": "4LwZShsPqREXQ5AryMhbxUtdPEo92XyS6jpMeTGpz7E9YDNw7iFwLDCHN2n8oVQsLdf89TyDqFevsRP938tG34ZL",
  "key29": "BepGZep8d14ZfGkvYiVEDUriuej7GqLWXXtDA21dd9sgQvCunNdfwh7haN7bZiXXrG2PqQaFr7asXFAmaBVgwmh",
  "key30": "2dt7jpxnGRsMqkZ2gxG9Skp8AFfiF4HFTLTBAJ9LvNBqTE7FKNNhzFywL8ep8LtsMpG4uhtYrqnJjTF8LnP1ixfJ",
  "key31": "4WHF67TTQhUep9ZYXeE1oCKSmm35DBuYmxfTikRm4z8hX3sZfJF3A6viGzs6dMWEZ2HDWUrBWdfiHDXxWgg7oo4B",
  "key32": "5pP4iDsBNz6GUWJQ6tAXTcKPFDBsMqnbWw1VP1P3jmsXdGxfoQnbNpf2kj4HPYYuw72Sn2KfhSszc8fNTbFVNaTP",
  "key33": "4MVPJpYinXKP2HkYSzgiZagiWcoye8HvWQjL7yqRTdkJcPb88KgaZopHaZiPLvMXE4DJGLQ9cNpe1xm3zZV7rqDE",
  "key34": "5mp2Zk2mmarAkQ5ZxVqvLX3vQrN9dmFZePArqZh3hVMCKRNFcatyh5zNXGsjAFtMXsnfPYxTYSguNgiQZBgw2xoe"
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
