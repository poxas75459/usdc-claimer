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
    "2rcsGSki1hmaNUKasewChtnmAhB5fnqpJK1kd6XN47kBhFTtzsRDsmQeByFuo3JPkBYt7c5gVfSpzGKaVUgVjSaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "438A7dqXUjTf4oF1ZqRpcwi5f73ZRKe6X62hYEkbnQkdi3ojCLn1AQ5dmUC3CZYDWof2NWUCpxazDi7YcRTjtHgb",
  "key1": "5SGrBBuRWC5g4BVozBBk1VBrEB4RiNTrwBjPTR4e4LsXkKRpNcwpJoEavCop2aFcFfmKZNAKvh4mxV3KDjckA2gV",
  "key2": "51z88Mskd3yko5nWGaRCxZ9ZGVg2Ym1uSPyX8YaLSHLUEArMxfh1Js9F8oXteFx3rGn7j6HnY8m6tvvsfoXGgaeH",
  "key3": "zwUr7SkwWEUZrwsA2LLi5YUaVnc3SoVDF4WjwwLGhc5d11u7DvhMMxgCZRawLamyC8j5UuGGQcryhyQ51bgeHYn",
  "key4": "pojNBFgG5JTjbuVynLRrBNa1BjZwfDFhfNrHZ8mib62jKeA9mJVf5FbVYJhVciDWLckt1DFLwjKKXYSM8AR8u6M",
  "key5": "2Fj4dxLv9g7JMvywqsg2zrJ2TqTDZ9bLSkPSsQMCjWntnqwKY7D26ks2eLeJZeAwNpUEqwR8WUi2R4nkqRxE1ZxD",
  "key6": "2bproESKAeTW1Dbzy8JfiDuYCFRcWeGhMocY13BbC1YTLVA3LqENCQhtkb5a9VnuYrRUPmraqw7reQfHRwyjdqmv",
  "key7": "5nM9QPXWKfpbEsEi4RMqpcEbM9ZsEduLZLdsRmxSPTHpybSGaUozV5NBswNGdssfQdsos8XAqgY4cp4ZhFycUoD",
  "key8": "3bfNoZuttMBJ2Vf4a4JFk8jx63fUkNaQAWthbhJxV9k2z5XMmBrEZfs69LDwBtD2e14LTdsYFmQQ4iWv6XdnAA1R",
  "key9": "3yy7B1BFXkUZTRVcUs2KoPtDvPTsQQxFnYbrzfiiHyE37HHweYQ88DzrmzLCTjKrkAVSKmy4mKQt9eiusRZw1drz",
  "key10": "5mhXFp2pYMHvXyTXLECtuiaKPxT8YxvWtpTdo6BYppvUP8LyHgEnghtXq4w7b4CYaEMTjCKxZ35o7aF9fMRrcjs9",
  "key11": "43dQ3ibZFMT8aw3hWYT1pP3j1Vm77DCrwWp9VJ2tcLiXocRRvJBwJCc2W1k3iGSLxbRYxrBnt4v2u4EEq2Rrjtbn",
  "key12": "2z8S3ujty5ADitVTrU6xCRozrX8R1rhxsi3DUGf4QFw1P1S6jm49yHzk1uaLi9WuLqjNzVN9rNRMaSuRizysu9Uw",
  "key13": "3xV4AumitzBCYTRxYbk4Wuoxhx5XdYqNB4SFKuV1hfwX3oqai6pqbofbNbczPzTqUJ99WLi1zSp2H3JzRynh8jan",
  "key14": "5jMHJCGzC3vAXn7knaSGc1UydadYcKpbZ76AFn57uCrAXx5KBciYN58Hys7V8dS2tNMxhtCt9z1h2A7NxaFZhgeX",
  "key15": "4nEuGDHjQRXohWdF8mtYAh9aCv5vSHvuLhbTGnzS9yLF6aaMBZoEMBLGbw68tv9wqeo2iTaFfhUMeFaSTnPFvftj",
  "key16": "3LezRr6UeQGdCb3Jzzu2Qy4aTnwqu5MWNy3TnqVcNroizeHab4CwhMcnAFqQ7KeMm4u6d9tyxLFivMbvWdzwXxBR",
  "key17": "32GQh32kb5LvG9QzJYRyrBqMufWWMPyX7MEgYYvEEtyXVqZ4pG2i1VTCJ3xbSaTFn3ngXrpsmLaYyWLS2h7pksHg",
  "key18": "5D2824Q7btVL1cPDWSia9eah941KiMYqDuTHavrfG95rjUiNpkdUxNwrTYqjvvcUEtGsMcZ1spuVH3SSKmMSDrcG",
  "key19": "2jJryzAd6TcPGTVtdZU3t7brfGSC5TJm92UJEcKCTWXdB2Szod7QRxkJoEZFuG1kYTMNPMLmJgkUpppcXzsinV4q",
  "key20": "22byewi2pz6UwM2V5kP93yHYfiLGHJd3ejUE7AztdK9dLThcpG8WUxAdzEDmv1gWKxF3bGBApghjb6nNJttqpEDm",
  "key21": "2Udtsfi1GbRqJU9twhbPq54UFBXy8sYw7yaH9g1eunn55fLyh4pf2ijYDmcCsBqc8SRJA6wD4Lj8bKLgbWrAWiv9",
  "key22": "VddfcB4CpqBWfEkKbyQ4PVjYTsUGyszi322PngGcJ8zF5qk472WQXojXN8AGYkWtoEHKJ69HHm9Qf6FCHaJaWfK",
  "key23": "4zKYyjLoDTJS6AFjUMwrtsHebsQEaHJUZGKT5Nkciuze4Zug3LVs1jRmNPecEvSRxxWRP5SBNej8dS5EJxFGUUA",
  "key24": "h8EfPt6tGYvsnEKvHm3WgyfJcATxtP3EPTgab4gecQS8952cLJYh4NDJwotEH2hMtktTNSU8NxgKRU7ttL7BUCc",
  "key25": "3LVgbmB33h1UiRCQ9Ujh2tCnrZbWAh4NsLH473w8kwfWMhVdrG7kkYm3LD94LqB9FyF2rorX2ddWLrvrnjDy8Nk5",
  "key26": "4vd1kyPgUeJKU2pJJrhf82oW1aA5sfTYJnnZu7fVxy6j8eJhyqfH2JVdzp9C9VH8CDqJWz2F5y9EWtxpLDH3HGQs",
  "key27": "2SoBjpbuYQiE45dhceobXBZ2YFUdHB4Vog1WaYSoRimd8WRM7aD1PgpQNevZ9ptgmwsu7beCZqn7b1RvzMgUwJ6e",
  "key28": "5Q7FCC7rtMT5RxD4WXVbZ9L4dsSdur8zHgBrYACrTEXGSJCNkMTwogzcgMkwHtamJitVyPCVaEd5PdDsTr5c3YtP",
  "key29": "66U4zU3Y85Cg7d6zb7CAnKg3Ukvikb33H1biP7JYAeVqPGReeXm9oVRUY9A1giw8oP7S9mAHCH1XyHBPcto3fxk4",
  "key30": "3d7GDHxxdeiWWE4Yv4kqobLpRi7VrfGpjNy4P8phEBv2tyExszKTUFR9MHCPnoSKxhedgMYB67gobzpfev9egSzc",
  "key31": "3MwRhbWfxEeMNtsvs12vFBmFE5PYixYJ31T8YP5bx9roM7PAsuKvghYVFgV3Mbsg8foMSrDTeV5Vek4JGvko94SK",
  "key32": "4zaVeFKEWPLh9w5YtQuXLCNFioKLDNkgB5efUye8pWM6Cf15QtQQHSyab3jWTYyauhpvK3Uh8wiu2D2qu7s5F1xc"
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
