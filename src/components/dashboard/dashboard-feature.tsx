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
    "5qpkD6T5DxzKVVexmGYM4tWji9YJhQGJ9vgmDbj16v5Wu4ARVtLNYbTYgni4tD8Yo8KscCpmq4YdJekjnxwHEFwA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gw1WGVZuu6ZY3uZ3BdMgP21jrA3Zo2ZN4kAbwEg4qDmFy7gDiMkEqSKu6Vyk8JUTWer8buhQ5ZMouY7dDPhityn",
  "key1": "46SRW86FSLq5sNjwCdScJhbj86xKKhKCH7uDwo6epgMCqGwCzdPDRR3HtQ9GtnyqkompHDWvsRQ4Fh4SN35fkq3F",
  "key2": "Eiet3Ht8BqJ53us8DVgfRstWpEeitMVmjL1RzvyzYRhLF4SaVWSNMHfYyx3DUxt7XRdZMrucmDbMJutSKqJSQva",
  "key3": "2Ram2zXuxSnawwVsEXKqWJMFkAXiforcTVeWq5khAP8STpszPipUUYx8QhMLoQVEsZZwFedmQo4W3N8TxEGAabQV",
  "key4": "czdsYKTeemrWjGgjvk1Bvt7DKxVAM2K99tKk5iwneLHmDMt6ReQKt4t6t3MTMUweJm8BCXVq7qxCBK2MCA2rVTw",
  "key5": "4dhzi3rpb2A5iKdYWFtVQDktAumzdBkqQkDfBQtZiJvATKRNtoj6x4VcXyurXdvi2J4pzDM7qgBDUm2ghF23j1Nn",
  "key6": "2Psxj8qS8SSFYGZ6pidzTEBi6HEXP1jrsnA3f67fMHDoRhusAwiNgBeyQbpKk5VvrVzx1jArF9VL4RRr96fxGpSo",
  "key7": "2nasGYQEQDbLwt4k5mr6spgAFvE9j7Pkk46LaXwzNGomDyiLH6kPQ4fT7tyRBZ2mASajze2wM6bBE8xZTxtnh3g3",
  "key8": "5ACZVQVdUywYW15j8e97wtiBAp6Eznd7JGitVYebQJ5rY9pbYsDepppuQrDqSaMSxqMNdnvhztnJTpsHQCHCsAHX",
  "key9": "5V4v4ZU3ikDd6cCowEM5pLJbWxBLucRyTaAh3RGeAi19f5mp3vsAcyFUhMLRJoyT4MCoPLccFu9bd9ieUwG58Aqx",
  "key10": "8ctMFiH6yAdWDbjTh4CjTpfnkc1BhYjQfLhYKGcwRvVmK2129H1QXt4ZLJ4egSVvAPwERgZxmFxQ2y23A5CsqrR",
  "key11": "4fTCYUQiE88AoWDTogdAryvJUFP1q8YeU9ErnfszargZNN4Fcikm8gHcXMjRNov3sykFnmd9AcWrYwhr9aNAnf3K",
  "key12": "4UoeTBfTTs5m7CBe88nGpN2ogWBFiPQjTaBJ1QA7UWjWWbwUMBjRtPJQvYPscCAQW44dKWtXBSDw8rBjjhBBZHtD",
  "key13": "4KsyFXuABZWTNfGwkBPSMG6LFEzeKpdDFcRdPAxLPukBBYFMocbieXW6Z5R9xnR4Zk2EzUJpG3iZXK7XBhBU8bgo",
  "key14": "5tmC3QpzQU8kpdyQArp9DDSsUy25c6Pvz8mYhztCuYRZh7pJ9xa8PGF4tuTPGRqWLneWTyWZUQKi9DWg637mizV8",
  "key15": "5VAjbgBemm3Zq3M7to7pBpqgPLBtjoZ3syTZzxMXQyREno3p8YzonW9T1p92ugTivnhzBECpCLivyHKvGD66916u",
  "key16": "EbFMGWF6GmJXKSqdqtQprjTFBhNUYgxK7d94tnTS7B7RtF4fdL2iC2nESeWPoWWHpm1pTpDcjpuRwxgNqtYhcJn",
  "key17": "2Ece3XkDQrdHATYiHQ2X458koZqMfiULPbcxQaTVFsJb16AENXqoXDnn4zCab7RsMLErhfauwfMBHJt7PXN2diTH",
  "key18": "28mP3NNMZ87i6VAC5WxeJTtrkoGmCH35REnno75QywL92MeSvzYsKvGcixiW4Mykx43zR57wd29Q6nRNP668UCNq",
  "key19": "59W2vmAE1UieNGQoJQt1Jk5BBy6DgeFiq7yZU7XChTP85GBEpbxAtNKcuXkQ3ktEoXau2YxQtb5jQcDMrAstLE6M",
  "key20": "2nKobprE9U5w7goVDp8MyMYNqrYLXb48Tsyt9pTMfmaf33SbpU19wTbXbWuHys8wFhprcYajpK1iPSNqwrpdGx1V",
  "key21": "XdnH4Y3U9SHxn11JeKBFT8pVd1piwKaNuNgvJvvcCLcHJmMeBKjKtZqwMtytQXEkq639Gh643tK5S9T9Hc7Y1Af",
  "key22": "3ZzoG2jBZcHTEEg9hPAbGzoxi3nnxHTjcnsZDV5wLBZdZD3yiBUA1zdiFDVEH9xJp2XMFvtW4Mj125G8Di5rUMAd",
  "key23": "SBJ3iC8DZfLhRfmKWZXekGmG6zTyPqc1EFp9iHE25i5eBzY94jsh7RZM2yrvg4hABqJCFueAiBQcbDGe6n19EYj",
  "key24": "38qDoXvaGFahR8WFpAmbApwpoRmNeVMW64zea3gf1aeH8zZLC72tp5kwXrQSDTiA8vxj2ikJnhQH2TeaZedVsTcU",
  "key25": "2V6iwGXZsG5Gehz4jomrvQHHsEuweBQVFAbSyqSdqnwAJi1pu53QFbdyezVp5qcworvQR1s9ae7kCGqKDkxFccRq",
  "key26": "qm6astGK3mZLartRbmDUR6mL5zVYLp2yk3aasVEJmh8fYBjW6Ks5F3wzUje4sP9JW6xsDLW2fjMjWuqXbT3wBPW",
  "key27": "5dTMDzgKnuDo2m4FHVyupUkYhpkeWundUt3zdfoT2XLY2MAx1r2eUcSBrbBQFa84VG9jWogVJUYcmHjYyYBZdo1u",
  "key28": "3nW3xKPzseNpyo5Tdm3Gjr92x1kAncRQBdePYUkS34Zye89LP9uLbS9SbktNWeHuUP9webgHQWskPcUHceinueRL",
  "key29": "2np6ptxzaM2ZuHZGWHpSovrNcw93RMgvZ7kSq3XoXTZD9jWqAXBenS1v8WWU575s6Qv5A95rYXW9PDR9yGUvznxR",
  "key30": "DLM5xSmiPRTKN7SYymyUqhcFL1Pj3TaEE7gGzEa3XpY33Fbg4jRdQh31dgdfv2Tfz7LW8YVrmb2uYJFv2W7vJkT",
  "key31": "5zv4S4PHbFCmcgiuMQ676Zq26Zewih9W9d92wfYxEgHq8vxkvfFXUfKoVj9hu5qJTeWLwuzgKGii8vcLftG6Vq69",
  "key32": "5LTvwQgEWWaGZaGBWrcaG3nTD91GBkyEtAqEeG3jZ7woUFtdvnqZHGwgEfQmzBQ9ComexFDaVyB9z5x7VowgxuuW",
  "key33": "4zNCFfF1ACJndotvp4qUGXKeo9NTixfLzJsYTMqCrwq9HKzpJAUFgqs9vS4hMVr2zc4egdRzLHejJtistJNovUDT",
  "key34": "3SQAqdAs45u1XKg3Vjps4fAsoB4FsqN4VgFDNDGeqzbC3knKZxkWRTNsXMzjDNffCriuDqnHGNwTq179zQnVg6hL",
  "key35": "2o1nbyrbN2b8WDLCpeVYcj178shTxWvFurzKdR3QWr1fjGdJYNJytsmVA7ofVwoGqUf5FWxi78m88oVdKDtaKU8G",
  "key36": "5FN4j2tD9xznaaJvDxmxC4eh9sTUmj8tA4tAqrmB55dwPUtKQgkbEmoWDSSHfWoX4HuRdgpGnZz9ZFcgapB3tjzz",
  "key37": "MF1HenqagDTjEjJcXYmgZFSwEKFqW9stpA7jh5Xp6Pb8DShVaYoYjy334pefvQx8RFTKor7pbg7MUr21xYHDjRX",
  "key38": "3DWspaF1N95X1UvAn5oTh5CcetsjXgBVpiAKAfy9YBfieghB9NbfvDPijYGvJPsTBUe1KWxDAZqbvVKGNKi3e1dQ",
  "key39": "46gLXiTdk6heHLiUP49xatq5EsjnrvhCiyKE5wCkVZBVR9FzYDz1Q9NgzpsbAPMMAw1SkXFQNYoVvzYZm2kAtxUg",
  "key40": "4BfGusnJNCzNDvjVevwFfFfEKPRz5ZUnq6EsKcKKvbNWL8XgZNmxi2vBnnQ7CKi7HkMRqSnYrBa7m4eT5k1Gi1dv",
  "key41": "5m55ZrD7TFKhB9DfvsPGG5JdVK36ZFu7PnEHAk4E6BZQRdaSgd3Z8JD3yBrYTaG9Bp8mp3DyAda1sEMXEoUJ5HEe",
  "key42": "5xm7bqYHUCsXNRD8Ay27A5AAaE16asxY1re5iejq8WX3y2ZJhf4Dz6J6UKLMLMtDxZ84pP439rjid1eHa7xdBZZm",
  "key43": "X6nwqACAMDWhLZGhvGvoEo9qHvzoxCx3zK8FMNNmNruB5z2uwZ9yJDNxA8iMQVxvEJevN8aMQ5M9cHVDt8khGqQ",
  "key44": "3SExEYFgdyxrGJcEStec1KD8ihdNDqrFLFMMp3113o4X4giMj4j7KqxAXAptua7hEMnj8qfQQMoZmH58rPcmyJQS"
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
