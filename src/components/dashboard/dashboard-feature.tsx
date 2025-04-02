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
    "4TzMpQLJ1FsYhJtR257tcZucVjNbNXSbr5KuPzJzMbGJikySh2DVGS9YqdEgkxn3MkVsSYyGbccbVYeKrx9nNJRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39MFiEGS6izEWqgMnBdV6esuGp11qeV5pZoUmjkdjGzzz3Lk1SfcuczfXZ8hRS9iyRBUJiiqnN2M3rAgwz6sBqHe",
  "key1": "2N6Ru65V7FyorR2HtG17rBFY4iVjdjf3W2rjHBEsAxgChmuDbrYJKeSRRCcYCA12vuTiA81MtYU44MEnU6grs1Qi",
  "key2": "3yH7StiT7vL15mEanQZgbs2Vb7hDs5PtHvgnk7vvHJPR3Gpf6T6pmU1KgpCqszD2vdiYu4FQyPJ7AeMNDXpdA91E",
  "key3": "v8TYp6rCZeRmxnat1EG6HqNStvwAfKRztaVBTcupWaMNnhZ8zSB7EorGo8PuVwQ55au6GdbZwYYD7nGfRxVhPBz",
  "key4": "A8sz9qKJEv7ESbUfdGZNdB8ybf2Sb6Zn4NJ15FsErkkrsncJPX8pP3TjJt2meqBwsiA9jFDWLqDPFu2Y1AQM7Ft",
  "key5": "3QaUkTEMoXU8DuNzBDLatEAoUaUCvjYQ19iHuSzVCJYAmwq63PB16KPVyxD8Dyugperw77r2r4fh8SfQypi4xtDn",
  "key6": "KFhTgwKtErkraQ8X5WUJafxnuNyNCb4oKyJoxd8kpnP8CL832nZRv8TDEKWqZbhK716eG8RewqtKs7hAQ7u5Xg5",
  "key7": "65G7y8Hnm5xAFxVzJEgpygLHcXa4sZ5VDCQrFmaPXHcVY7XzG45ArJgAbmaFXvpsy6aFQGBvKMUdr5c1ri9JYJgs",
  "key8": "2ubEW8SiYYgcn26n3UfoAofEFTNojC7oxvmWYLW4sKPvJMXaSfoyFHPyFTUXgZNMdzkm5XE2eiR4pZP5Mk31437a",
  "key9": "3YAkDv8eK554G1ow8McoyD2aVFn4h5WvZuqYbZU3PEAxmyuWDzPiff1XJ44vrNM8YYm146VXb4zNfhD7xnYBWtor",
  "key10": "5fdXFBU67WbC4Bwkx53zXzevgksSWrGDAt9paEChe5b1bvtRH2YMrZKEkvfw6XKxXKevAh8yz2R3UUTiG3dznB2",
  "key11": "4ajtYXBDNjzaVcGbQPxFvDedfL61dzDc2xp32ZXkLTpeTtPozsgN84BjhFHqdviuknBvfFr8L6WG7e5LCZn57WSH",
  "key12": "3FXePPTSfmjkaeBGia3YGBnQuGzAiuVuiA3cRDcS4AihHY3UYdb37LjzLdFkj3HUMR1mUrXvrj6kD62pni6yHH2Q",
  "key13": "3uq7woGre4FqKebVuAXuHW1CSH5Nrt9QoiYvnqey1D43Fw2BGwQhHjASsKvQCXNWtjNrdoxtc3FonopgNdbyHGqj",
  "key14": "gqJdwiLSYhtxfkLzFSW1dGbWuh7g5acu4dRQLLAC7xsZswZYRHN8Dt8P3bg8T4mao1DhMKGyNiWbsksLYQKJoue",
  "key15": "55tHuFu15ajBWn2KMtmVt7nfYG9awi2pnwCibjGEGMUUEFgKeQQZfECrjUpUTWB97qKkdGEeQmuxNAmouSWbxJfj",
  "key16": "5gP8oY5wxP8NWYK2zTQvSUbMv5U1mtbBopYhvNZsdScrnAVQ1DGUNsxiMXYpy3eiroDp9BMWDy83gf4XxKqRkxMh",
  "key17": "gWGxrffBh8qgRLWMYyPN7ZobNxrpaZCGNveSBS9sFZiU1CvmkL7DF1G6PmKS3NJ4ECRysqtp9ZsYdHoAWw5i4xV",
  "key18": "2kziJ6fGSFCSjH5wf1Q8FJA23oXGvqRPCDSEZKJhs2Auat8LYHWEgsGcevp3M9fWTi4YainFtJMxjrfT8MeQcaJM",
  "key19": "4FJJaip6cEe6xM3QzCx6yt9a1LsJAjaBJvL5P1GD6LcUysjw8qdYmY8JEknyNgzij5Nqi7RtF1gneRz1Ufy5cWth",
  "key20": "25X3zcQY8KzWBab3cqzURoVwzNq4HtTC9kcHcLtTU3fABn4bQM6XDCDetFJ8tyMd4gPnNb7XDJsHBY5WfDR1LK5B",
  "key21": "3B82RC3GekrUihDy2T8JVf1HnC4wRrYMutQwF4Wfq1kgsdkbyJ5j5f5cNSddDx87CgwFN4ELBCeZqNirTCA7kZLN",
  "key22": "3MT2QBsb4yDcQUD48xd27ZBipCt6EgWEsENASmwiVtnsQ2Vh5BpFCDNXXUZFtFLURF17x8dX5yZTXFmRHPUPReeh",
  "key23": "2DYJrKqNiqWKsHE6meV4k3Mah1ghedtnX9gS6WxhWDgR7shrhBde3DdYaaoWvse2eMADExjheFmujCY43hmnQdUP",
  "key24": "35iNhEruqYtzeWcDuXpyZeJKHhiUH7MQKWHXApK2SHSH1APUCS4HgZ6c51woWibEwrkmiRQPu7csjJKcUq1MFV3M",
  "key25": "5HNbmvLvQxBWj7zUDDejBBBuENsJguWAosH4qxcw1948qTJAB3fM3QQPSg2cpgU5obe1ViiH8bqF9Vmi2DfHnXXs",
  "key26": "2E2PBUQ74Vmx6516Zuxph5LQuetd7oX2c6DUc8f6HxhrnNK8EKx48JpJh77jnYGHLVa1b4dR8vqzABkeEU9iRMhp",
  "key27": "2dkoYAXfpPrtJZANaTv7WasZjxsqf7nHR211gkw2TmnkgAaAzVvqM3f258fJ9mZhDXyuWjKRgCybtxzNmAjrabBh",
  "key28": "4TitYvHMC9vt2rzPs4WcayxAGe55UCv9gSPKszaWUGBSyKJ9bztLA25ZckSsEATbgYAs3pbBWVCuLp5hNkmPjipy",
  "key29": "5YUfijXaebRwnqXCjYKYzH7Ze7Wgp55cKDfyD887PB3SLjW9L3GVuMVVQTXdzVyumNpRp7XcXgiwQkFmtEYuKrbv",
  "key30": "2rU4MtxxeSWBNiJJbBeU48ds47h7AxVPYKddgfDxfoRZWPfE8mpwAQy4PuVZQwTZC41MarNHrqRPP19T7A3Wm21Y",
  "key31": "ZBVPbte8Ldiy7EPUoY5tbUqcBJeu8u6XMi4Q7gneS7qdHnSHLdQmkF65B73toKD9m2u3wFGm2bmN1fEhPX9yJ84",
  "key32": "21ETTv87w3K6W2tCjJCVDxUz8PgLkgZhxRQjUnkt4H1fFHeV9xk6MVWxr4m2Ch2Z4HRDsXLqkedLu8q3gQMcoMaR",
  "key33": "5Y4ej46w6i6HHgkJiVqWLLFPHQG25wnUzhgBC3oxE3pbveAkAptpdmwMFyy2bG57gyXXwQygQKtg9Gri2YHZhVfJ",
  "key34": "aAGddwYZYzzL2ew8ZgCtA3Yb8ALQZt4vWuUJebbBaGc7CbXLpvKUKzWnRcMJLp2os2br3g6CT4mDKr2x9aR4UwP",
  "key35": "2VJXvcF3ENfsB9ius1naaLj8LtiioQGEdoPrGEFVUiXf5GiYJS4q5Vz6UDbhVT8Cc5LSFk5NtN2MFxuaPy9rFwj1",
  "key36": "3kwusukuoWpjwCV6nTrEt5MDvPdtx2WxDjAm7dzceae56Xw2kdYnxuAtrXyEnj1UHJRraidnSBwFrPH3hHedstuw",
  "key37": "22rf7i9T7gxxnizMBFtCoQaggvYeppyuziPZcJQk2nuLyhazgMPY9g4KZzK2qHEjF495NQWfQqh6dun25b5NQGnm",
  "key38": "3AwxMzEtgypSiNNi1D7FDuep3M3sdnqrBbPc9neD35QNtGpuib7kDqrpKNX2aSoRBdyHCmHJ6RLGMdPFYhjC6C21",
  "key39": "gxtykwtKwrToy9f8UeLQ5Ujxzn1VEM312RnFZNmfS6pbUbvdWESMj8Q6WoimCoNpwPdcNHTHVCkp1V96YJRVWHJ"
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
