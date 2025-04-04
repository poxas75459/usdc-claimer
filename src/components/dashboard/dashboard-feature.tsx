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
    "2UffykGRhRTZ2VKWfJRvWsNXn8huHDiUKXnPbK4sQthV8Pzf68MPdCbmrzhRpzzSpHHmCnhv5Y4J7BwQevfA7uJq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33qrmx2Xe89m5MNQYxb4U2JR16wUBRMVpYJBXPriaWDET1pyU3zouU77KnFJ9fdZFt6jZJ6soStHNQSfqHXcH6Jx",
  "key1": "3TBVs4UD8nKyiQYMT5nGXD6Yd2rEsv4epUY34Gx87wZ1CRkPjKnxFDDDLytgQSYYuMtByUmqpJxJrMzPma4ygp9o",
  "key2": "4SnqDao5AgaAf39Pg5PiZ797yMKDAwJW638UUKypgqKqJPgDDWyuUsACgqq946FmQ4p6A9TKPAtNbyoW3ZRQdNAN",
  "key3": "2DKTJmc3nKqD8aK3JHwDbEFfty8a19RkmGrgbGULjsVXqbVUgxpxRm6Uv3myaoNB62sWv4Prd5qvp9Q9z6g4pAb3",
  "key4": "2sLLYfS9JZgztXGCM18g1ceKrDkVV6kteXXJiw29btwzAVWs6sfWwYSoS7DQsFsuCHMY1jPa6bPGs5Ds2py5Zz8M",
  "key5": "3cZWPLAmRJNttGohvyYhw3j8KMAiZGJwd14WzuUuyTCNFMfazL9bysPnjsJ4V2vGxihv19ctAxKj7Xhi9WKgBBaS",
  "key6": "2Bz7RcARH6DZ7GE7fSvjoo657JeVmyTJVfpRFjeVtZPAXT8fYQsZw2Y97UinwzEsjCHQguxR6xXLunAgTv8XqeSf",
  "key7": "j5CYoX59kp5d3Pd14nNT6kDLwqZUAkPidozQgm5hXGygLB3QRrhUgdPjDdyKbp1VrFVhnh36uWUAx8wVtcRbqAn",
  "key8": "2VM2nLC7CKsB6K2zp4M7FHgAGDCF9wexQEWw8Wxu6WkaZ2eRDgbTWHz5wmLmzZCMj9LHTV9PmgoJFdSCCe5crpYW",
  "key9": "2osTX1e5gYTV9ptapBoUdW11bFE9vcxGL7oQg2zGFBJ4R5pP39k3XHcXfXfcWr48aAfWEuYputHvwZpmUEHHPbpM",
  "key10": "37nJqgFioeyFLkn8iaWxdxVoayEQvRpoekZQZFPRDbNZfPwtmxXw8xmy8Ne6itYrzLdMY1c3RcMyWdSPaAdYeKdb",
  "key11": "2Db2GdDuYKoTd35QSLSaBGrfpD1TjC7FPu12W8K7FNY6BeBXFPq15djRrynhatLYezqg9icwcT8fR52hKWSVKEkD",
  "key12": "2WSvondExfYs2tUyT9kkZjMKaKSz9bY3SQ6Beq5kuYTb4tyeYpuHGkAtbQgFDrYcqduLNCvo5pR1Pp6NBvhaHsFk",
  "key13": "5CWKZgVHWaMmmT2JUtW378j5SadUhzXjnooesDE9B5nSSqi75XQBfn19gLE27M5Cy2szvi1uXhoFpBLxPQsrjmiV",
  "key14": "4Jw3yHZbdEfxTE11p8tPBmuB1QC5zGmu4ytTxjhFq2DcRq97XpTjiV5wRvUqGADB32zDajfSyRWQDCipr2vvk51F",
  "key15": "5XJAZ9SEZUQzek2aSCEKea6ZRoMNaWHEhmsvCTdwoQ1vZf9RvX16F11XTW5bjTEFJzmCjn1EmrbQ4nuL1RejtdjT",
  "key16": "cJaXMsi3QKVXcUSwebqvehV9hH2GDMkbAyyqSVF1RnEkovQTUNeJ4mMPUNYuddwGNV2d2chc21GbLHwPjaKXrvZ",
  "key17": "4EP1iAYCFr1HPbW9fA1j2kjmZN4SExwaek5DDCVDzAaXVYNQVQEU2x7npe1LyYiW29ozhPtRrtDUe1hRWch4i7tv",
  "key18": "5bqTSp3Ajx3qPPHomvYcY7mu7e9T6imKueH8Ee56QZozrisSYkeBH2kpcJZ6fBuSHFYV9jjEcsz64ZC397xi124g",
  "key19": "YYK2zgD9jLgmNEe85iNp2xMfLZurT4zt1Vp48NsPuDPqYps8jbCNRT7uirDJH2EmsCNSbBqC6RBiNdTXMjtbyja",
  "key20": "2PK6irza74hqWWxCQfSprhqnRopM6bxvCWzqGHFtzzZwgFvTFkFYs9RfuKGXwU7kiqQHtshM3PkZvTSBtwRQ5kzW",
  "key21": "zNszH75woNsABEysuQiYZAcj2UVEtkRbhMymf92CBj8WeCurSL3hgnGFyHaJFoZHUJ2SrQyroEcheEhNnpwrYX7",
  "key22": "2TMg8yBxxeuXtBBp2UAy17X7dmXNG9FJBmmM9MfB4QHVsvem6ww9yU2f9cL7eXWeyhyqoACtVNgRP9LQow9phiRh",
  "key23": "aGDAhh1HGWAGFeJ7FwPdjPDCmGDjreB8wG5x1p3Pu3WnKYBMSvLvDoAamUsFaNwKKCAvY9ZJ6RE3CfQwo7Ekzf1",
  "key24": "wYwrnPv62UqFqFvqFq5sqRGnUd7jRfWCbrziZsP4VqLSknULDGzztoYyGdWyi7Gkdah86eAyKwYsEqqrsWx8LmY",
  "key25": "3jDWF4B6Me4BeJqpj1pPHBTjL5voBCEjE18XyRZLvWvyx7uNdT7XByaDXDd75hMN8sdrruZ1K9T68hkzpHCf3Gz8",
  "key26": "2EHi1Vxihda9Z8TPCZcKxFUmp6npqgVKMtiyRzcnKg76vJPQwrCDNGg8jLaV5dHjXUM4z41CtL8gjAza6CNk81Kh",
  "key27": "4E2THrbGnnkKhEePombeJ11ngqNJjxGF1o14HwgtRR7DVyDti5v71Fim9eosRkBgaToQWj3jabZCrRrqum6mxQ3o",
  "key28": "8QJpCLqkueqYU8J9vbKTu14uPDEjFeVaaM7CZsC6ZXFsSEaKKrRyzDqEqU1earwUPzVD2xQWk9EGcmEZQKHHvpK",
  "key29": "2LF3S8ivzXbNiFgS5jKFydxw8xMeaUuPnywwWTxcoACwebdUBJ65qXT1eaSN63kB7YNtijUiNUKbxGLL3k5M9HJt",
  "key30": "34LXQUyKN5GMteH6QcWQMduGCBJ3BXfsmLHu9oYtVtAvK5tX6CiZzhS2umh36FkvK9A1mHg1nsUPdrWvox1Yw5Xw",
  "key31": "5pspM96cS5FcvDuMjvne9fntvr6YxEASSo2ZGP5muemA5bNmQAp82qcwFsmxhV3usuvoAnvGGjGmyW2PhVJ3Ljic",
  "key32": "29rFDzCc3pDHeRZsff8bU43gfoqg9AhKK16nPkN4WCDZLjYpmZctCvQP4QZBzuftKLWs9r3Jy7tmtNnDZX4H572c",
  "key33": "4TMHcVqv5TbMKUjKNvhQeKwqFBd1pnyhR2Gcw52J3xYAGeki3sFjXC9aHEq7HaeXumdKJ1jXiUdwKasTTbt3Ei8c",
  "key34": "2Uo2FUdugvmfUpnkKrRyetT7YVC9Ux1jgcaDfy3Pr54B48oecZ9nXVwRS6ZtF5Bxam8M4NfN9sAhNUMCoxQetYEu",
  "key35": "285oGMLDktWzgwV4TTn6eeJfdbCYPuPgq7BHDhyN7jay8JQGGXgjkdihUcoNBP3trXoazfDJ8iBEyyPgYXzafymE",
  "key36": "3yTT2rxSrSwgbujWpRRLkbHn7izr2s8ETTiSzjazwwgEmMqSYvZgBoiUFDaSi2pNLf3eqUskyTdY1sDRBugm44VH",
  "key37": "3rznvGAb7vtSM56x3QcgfHVk8D34khc8qE3vMZ7TANaWQcFa2KQiZnsrMSMPqcuNZDdF6rsb32rAbu6Ldg2z2EaB",
  "key38": "326M3aG4Y9pNtAjnY8mpFBEbAFzYi2zRgrhL3YqzxFnPqcjsUqdbGPb8DhMRrmgR2jYRGdqh6QcJyaeAphD1ABrw",
  "key39": "2Wo7QnWyXHMMPcsd5umCdYeKm7DhUPQWMg251FsNAVSkidgMH3fp6Kkufai2qbFoycvuQZ2nzaxFMYrDzh28Sqdj"
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
