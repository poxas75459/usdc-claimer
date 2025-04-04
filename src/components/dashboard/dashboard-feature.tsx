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
    "3434it3aykkdnHnFycXyRdBNKia3FK2sAdrDfejhiRJFcanssLa9aKjUL18MWYB6iw9ZA95ohvsh9Z96jSzQkf5C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8HfvABcTuM9NfkL5UFsiTDgBYX1dKQCGc9c1Xq8hvkjLvJKahhJMq4K52CTkUBYqfftEGQ8yoidDRwHqVRpYSCL",
  "key1": "4K3HXjYb71DkSwMYUu5jNmEHTpPsSJmSmdaH7j16rkUfC9ECGFwFH5xwmhApd8vU2kThATuk3N6rKREgVPnm5pQs",
  "key2": "4GFNexY7DcTPyxqUocM4M4o6gFcHg2eCs3TkzUHxDonwtVos8WdwEctyc9yP5c74syFLQRCj29mhRL3TSzCav3GN",
  "key3": "WWkaJAVTMbsPVWSnCnAbJmisVesmi6b85WDEDVABgmVpteaLSwzVN7Qh1ejBqkAN6qZ87CVZ8J5w7VKCP914DGj",
  "key4": "fkRK9JF1mGxZV87F1gRxmuAm6BU4JVyB9XEQFyri3i5ngpwMfNbjhPvS9D1sR7kciLDLQhWAJ1oHHqZYU8boNFk",
  "key5": "3511qwMugU2fG5xA9GrrRRopJ9Mrdc6JKV1Ay9Ym8rDhw3RWg98SWmSqbVD5bfwaR9pUTjaBHj5CVGorN24tfjkq",
  "key6": "3Sp8R9QczJ4BjEaDFqqmJ3Mkdh5XTaB4dLg5HRDXPn5TJowg4iW6Tap5ekjiQjE3ByBoTHXJxvgpffRjW8KK1k43",
  "key7": "3jA5dJq8c3y6Nfb87DgzWciXFaM1RxVns8G1wa1xc74Geqn8227bxm3jmoumQtXDoj3mDnHDFKKYUucLHYYv9A3f",
  "key8": "4camNrF23o7SzTzTsrtd8mNkFgBZA7kSdUMnra3q3Htxha49DzNmMwiXF2w8Jq5yTJBP6Apqm4X9WJuc2Bju3FMW",
  "key9": "zgRbYwZAKyyvF7U9CNmAXM81YK4F6xWWNwyT25JQLGrs1GDLAiaJyxt7Ak3tHAN7kFVYoBjftFAUoXyKXuD8op1",
  "key10": "2JHBH3gsRhHgFx5JPZp2JRECAKLysdgXzgZWDNfi4qTCxTEJRfn4k1ZPF1GspD2BzE6ZPfYz2fnuQu3zjmxSzEoL",
  "key11": "5gHZ8qpnvLrKrNxsnhQ47kgZrTQNBGacNmvkcHLSijvdqK4XxqoCi8Q64Wr7DVH76P8BZiv8gSGeAvoSHwRUFyu",
  "key12": "4fsG7JzFtLY2p1kxvvqka3ZcDmA8jWve5MXD4ZUgnbGCmqe5vTar3orMTKLSUNTN3bCCKfo6UE5wLTShGChNGfbS",
  "key13": "586ZmfGbQ3oGBe7YKbXwqtgn34WBezgoSZiZ6BMSp82KMwUitruK1kAyp4BUYFYiYFEoxTD5JcxM3MSeuiyg55cq",
  "key14": "4RjRDKHYCm2DXW3hVchqexHBLKA673NypyavK2wn1EpMjFptiPhUEfDsZHxDLJwTsmajeyUuhwA7b6sTsQo9RkUV",
  "key15": "5UhiqgkCTrWLkew3uzb8XQYGihihNERLmoFQL5qA2XfvEjjJwU1nDsXEbEnk4x1i5SKzdDMmxNZEreVSu6N7Umuu",
  "key16": "5AaN8kFyHnhB4cUG5F4wZbfPo33ef9PwPr2nPPMdxgKP4tEkkBv1yshixBXrY97d8SwL95EuBDTVjeEZm2TGaifN",
  "key17": "V8K8xhhaaWSjQ5WsLjMdiu7rYgcDrtQ9owsjki4KU8YnTFcZ46vRohp9zs2MDLpZcsHZmri6twNBZ465QdHWDxT",
  "key18": "5faNeZs79sAFFx3XnPtx2B7Q2hyXd1EQcvize82TVTTRg5q5BVwziGkHe2bm44xxnNqAC6zmEJ2YAEdFCYzo8sdu",
  "key19": "2CWkjq31DU5tzJZzFaKKWDM5cUjxTQWA545u3aTcBbBasrjG3DrmKawE5VgKsJfNPuknfVaqY6ifx3k4SptfcVAW",
  "key20": "5BLber2dV3r3wKUF73buX7nkTfwthPWNhKTuwbNrtKAR9T4mXtf4rrkBRNCqU1ijXLSateJgN2F56At8kDQdAWNH",
  "key21": "2dpF9ffCaBJA4qw8we3yS6P4ee4c4FqADkDgcRNKpis6GkZC3RsrjQVUBB8pc8ii76xaWRYjC4kgQW7nPcQ81v7S",
  "key22": "3jySyXCAV5VkddM4WayVufY6CrQFHcukvQsKTVwW3RfMeNVMpKfRP9fuqGW9j93uAWsnrgZLwrXyfarXir2pZUNt",
  "key23": "2eVxNCrPnaH5Y7kU5rTsNVUGACMRYyMQFiSCKfZvXeU1fV1gGvUaULUVzNquGR49qf8rj58nbcGtrLkdoeVdwVK5",
  "key24": "3WGtPWyv4x8cxnEZWnd3WvgXmFRNvFnyCh6CdSNj8NyLQdExmhzjZ7AeZUqM6YjqTrZ4RaVRMdJUVAFJ7jT9yCkc",
  "key25": "5sj5ftFnsuEv5WAhJipTrHiA5ojQN1diEeuWZ2SALQLMzCMovnCgVe6fxcdP7d2JEqpfjfrSy24i5TBAGdSLWLtw",
  "key26": "5Wq2yCPX9K9bi1TiwxyGtmMywx8ThB1gNesN9K8QYYu4xpzEy8uc7pXyMP7qnHNjCkfGTtawyzFkmuhsaUzAvieQ",
  "key27": "28bGjnBsycFmrjvMwsmedKX8vUfHarttLpAmhj2Muswd7SqAwPEsDby78D2ooGWz81he9q1t8cVehXSDSziHrmDt",
  "key28": "5QF4XSC8NjPnvuK5AJPVNNk1jhJa9nw2ww4oo7HUT3kvvL1AB5W6niz4D4RGkfy3UUYnpfzNWhqqZmyKaSAYqo8m",
  "key29": "FSCVd6WGLnz7UhRfCAA2XjBUcfKUBJAVnJFxxAKvV3wHiBDtm5QXpq2xf4U7f4hptHjVUeCUvNxnAZh3peNB5pW",
  "key30": "4zMMtU7Kyw9K3Xaeps4PWe5buuCkQtPEHDRKVJvSRR9W1MmgA5WLaBvXfiKQpkDzHeDdYLEgksA7PyUNHe8VK4ch",
  "key31": "3AXpy43nCq6DrbgamrSqkhGQv1gcxg3mVt7rJC3tSjzqN26L29Q24hBcL8pCfPFGHzNygEjd4UsuNHCdsULmT4eG",
  "key32": "oeoiG621VmrJ9ezhRQmc5nKYNWLPDyDMDrbNBJtkJZgCapcwyqdendSM8YA52DutLEAc65spfsKGx1Y3Lwv6Nsm",
  "key33": "5xHX5E7Wn2rE1q8MEt4VLzoWmqSYiskvopid9dwa9cRMCu7yE5pYvu8jshBbhY2zdYgEM9YwaukU8EMm2nwEexCQ",
  "key34": "yjMsVa65HwDLoFkjKLL12ZSzaQhATYVxBVYNEsHV4Wotot6WrcACorh3f1nexiuEVGEUkDE6zHpK5yxvnAk33HQ",
  "key35": "41aG5vTUQ62VbCUrpdGDGHK429Seh6kwNiPJbZnWnyiLbPvsVyP2wK6urbJKGKDzMt22xV5MG4U3sF4uxhhErXss",
  "key36": "AVQtefsLU7G9veCpuhVhGpyeyeNN8eUaBf3GZGrsqQaUgBFUvCGwCLkLJdi1PVsVMgpYfY7M9LjXjxEDkR4Jvsa",
  "key37": "4PrVjrwNz6Kr7Pu5gpsj5uVw2NVriqnYLmukXTsNPkY8wJDda8b75KwGKH5VT3jDF7VDLXpomnksvPifaVHoafPe",
  "key38": "TXJSFdfBq4oQnZqDDE96tKzySMwcAN7cM98HiNEBWxarN6ErLwHPjcBQPbK6BpijopMzmYZiPk822vrz6uidkqH",
  "key39": "27BGx82nVbwtLwmcRH3gecpmEaKsFCc5W8FT7tt9k5gRn1pKv9Eq1iQWJ7jmA8QJC1boFouvBLQghbu2pdW2m3m8",
  "key40": "25FY3PcjKSMS8C76ijbU6JSNRNczNoYGxzjzMDDqPYysUaHair4Y4TpGqcWRZEkqCZYtWMVQfCEonoJD2TtvyQY8",
  "key41": "5hhmdWAU3ghBym3TVdrpuKpZcgaPXMN3NCHVHJhsUp5Rc1xf3WVzkpFX5jgdaknmzJj5MB7vxANqriCRGHh8kzyF",
  "key42": "5dCCQj4WbCo8DvgkSTer9GZAKuNWLTdSZGDoJbzEJM1THjdaHQnksDAznqk5EC9DzsSBFs6nfhJZ1L88t8p1zxRj",
  "key43": "7oRbvvWv9hvRp1ewu8kxNCwoznjsm4udvAn72uS7KbrurDUXgb7wdLXDYWYV5e3hgC4SKQ2KLxV5L9r1LsNCi4o",
  "key44": "3LSAG4tYrDKfZw1PuBUVy7AFyvGFryCPULqNq5KiL8M34khACNm8cTodBE8SswJcUtnCTtZSrNdvqDBBDAukr6Pw",
  "key45": "66nt9ES9zhJyWrupQnhUYAurve7k4MnpnLmgcm3za1LZFCuUcXFCbgVmBpUK9TX6TDRtZXEnWgyBiQGBty83TVUS"
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
