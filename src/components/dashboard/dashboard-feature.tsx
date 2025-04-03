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
    "2tQdPJoRdfXnGvpL1Yk9DVJ1kf6z9KjGPPR14XL57WAvnwVumyzDmnPLmAZCqUDw3ggTknzTybJvpcJPu9Lg6CmS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TL1yQ1m4uj5n5LxMUU8eqoSFsFfyW31W2KoZBc3Qw77Y7knu3yiMjmh5hnFdaxtmyt9J6SUnvFXZXacJ1QuaZRL",
  "key1": "5jxJKPZE2cx6sZDg3Bb29XvD8hqSe6ta5DKesxfCBvZtQTZV8nLVwhtN5BWbhtZ6xTxT94HBZo6Q5Y32aLDmxj1",
  "key2": "4tamAxXWQwYLLEPUQCarC9VNjLisfSV1Yz3r1c3nT6XQa7aPEymbQYLz9gNbcfC5HhwDGZ2BjKgSsSbjRref9aQu",
  "key3": "3i3Vr1pUv1qeRL3pLK8rLGN6ACX7oQUf82wNXPeQGE9sNATcSYnghoG4sB4F2fQFdDCfqr2ojCvKrskoppNYdx7T",
  "key4": "2XVkHm7Vrgye7GZNgzwGRFqKw6EmXXzjA8o6Kqdk5XjpZTqTnTS1o6ATzeNAUhD5WuubNcZWrg9Wo83mVBaH81xQ",
  "key5": "4cn1ijRqdw7tvE99eeD1qx7k8QiMCYReJhCoAnccnfgBfWNcnGb7AS7cEm71Gbcu47bzBzPdVcoVwHa4PHNnXqB7",
  "key6": "66y2H2LSKoiuEb6Hsj3YFrfVXMm2ieVTc1YQktwPt9vSmt3MLSzHqjiXKkwpMfU215AHyAwDxxYa2LydhLX14su6",
  "key7": "53LFUocT9MvfTrSm8EmqyKF6xqr11eEEcYWEgQFHg7z8XiTjgHWCigPy4A7vwtdBrvb8sbMhRxwFTb6M5kUrsw1e",
  "key8": "26jNQz4V444zs7PJ4HKE6AJZikj9LimbKkuQXxEqTxiXk4JxXjXvvePWXqoPNm2cwmmVpTesd5R5Z1YyuUTsCtgD",
  "key9": "9aMmMEqESShtitcmJUoi1tngFoTedeTa57McMtpxsBBB9KXzPbE3UJZrPqVibNjR9miAyTBoZPi4MN5yaSW9ttS",
  "key10": "3RKvZdZqf2T8GDyx2pZMF2faQiiK5SHAgwREqNRLJXBGMCfrLHPDh5jeFJMLSvSxJfgP2R6Eha5Nf4TW1o3cxduA",
  "key11": "55fSiHnvKP7f8S8RoppgAMcDB8YxR7Jsb1wAvRKJkV2DBiBC5gUkPVzSp4w1uYgLdRxupSYC95LJjy7kYYxzibLd",
  "key12": "3Qv256QhtbnP8hd3A28avG9eNq79RAhvS6gr5yRA9EZ7Nuh5TccyAPU5YtokX25A5Z4GKrDo9KRaAXZ1LbqphdA2",
  "key13": "3tp2PvwpsgDP8uZaD6VmCMVHedPbMtyocpW8QSUEe2yRibNz9k93wi9FEEKkCawNPiP9b23hoRmjwjBsvzEKEpWD",
  "key14": "2qQydLA7GU4FyFP82Ug43c9yg4efwppRANu33gwQrHLw5ihoLck6LkzSRYaCu48L7vD68DuXks7vdsxK8fDD8Vj1",
  "key15": "LNspqQCkweBPq4fbErsQzHTJRggb9LTMB492RjaQzJtDTDPpd84k5CXJjkMyZPaGTt9Gh1KrGEiJXL9g6yT4mFv",
  "key16": "5zCjwaLFF7w2TUr5KrergqsTkUPTczigLa3pNr2qqvpoG2MpXwjbyuQk92L6MGR89xnD7Di3ozrVUrMLVS15AnFp",
  "key17": "2U24Uc76JHabkj6ta8RS2ezYm8FGUFDhabw7tcYBjPHk5PjtDL8jhoEF6XMYyiHMkGGo8QBjNQTEmGGq2T8F1Am3",
  "key18": "5RQPfgvTkjSi9oEnq5gvJqa47jcZgvrjfXx2eQx3o1BWfp1W17LcGVKLFSYjjKyVej2vekJMuu4acY7gENbbBo6e",
  "key19": "3Q3xjFW5hcKryWBmt56tm1HnZh2nKgS5LhvfeC7V4PepKRcCpVQ4Nd6GzUh4hByKviQ45bYK6t86a7VFxDLBzKtR",
  "key20": "itRLZJvysJbtsfYbWn64YAxgDeFtbJYMFdq85977oZXM42Pnyy4KuDLsWfmspDnqE4Ne66y826XYQ2QhaCfCJHM",
  "key21": "2gm9T5TQZ1otv5XU9gu74z4p5D8WD1VDfBmHCU1tCiPi1pR7r6m9zeLbXYbdkWMRbyjywrVCgLwMnG5a3Xg9Nt3B",
  "key22": "2QGUEsEZz97LGcbksYsLyzS6gQt4s8uo8CsR1ft9Pi3L6rrHZZAoLumz2Q1FMG3Ux3SCXQAF2fGyZjfvPgVHEBPZ",
  "key23": "E4Rbj64EoyZU44KSCeozZMgdBnuiSvfKMzHjNYGcmyDv4LiyZedUqsdXQLBJYYaypap3bUwdULpufzCcGE4GS43",
  "key24": "2UfyeL5qVRva2S1zEJPyHNqTP2tadgRuFRpuX2yvr8bNCs6HsVDuASsf4DDuzfBVMPEY7kPMAceYseGteCwtTGkW",
  "key25": "DzCR3ME19PEq2PgCg5sxGb8dhpusEcXZX8jftXRtEgMZ9crnrimDF5EtMBdXUzjcQoKgZNT9V6wfztDC1JewSy6",
  "key26": "41gWjnaPRL4NM7SnELo3Apf9hE3vrer2M4dh19p8FGxCadVKipwH8SDcFocs5mj4joYJm1nXcbqCJVvHFY2damHN",
  "key27": "3dTLAqnMRNh1Xg7qnVsmZPKtSsfLeMj3u1nmEVr2dbztLserrE7PiTXfsC834aoiF18LTu8EvY9b1kCQv1J6yEgi",
  "key28": "61WL6idnzGcxf8JraKFEchWQefawysM4Xgbun4EnLgzPvMqdXbkSucfmhy8Pbdr8VcUxbr13as163n4HrpYpfuZV",
  "key29": "2kBdd4cYV9rJgYovnhs8UP6tcJumgeyGaDGmpfFfDWzEWvWsHCA7eb4yZdNRHJReKaAGAmpbEVukxrrv4fWogN7y",
  "key30": "2KCkW6JwTAj1fjVwSSrwXYb1LGKPUhmUR7H8pWgjKpnyo4yEvJtt6ZDSAM3AHnzXffCdim94MrZipBys7E4YvVsL",
  "key31": "TjVYPABnrhJviHajoKr3xhxe1ejbVk4zaApFeAaMJGfMVFKzppD1oNiSfs8PVDp1cixDxvp7i2CZKTrh41rBBcM",
  "key32": "2Gb6t7Ns2fRMQ9chom1AomnxS4HX8T8Jw24JmzWWjLQ5tgFKKXwnmHQXcu6z49bUPzEzyuyQUFiNhmdtDJWJ8HGE",
  "key33": "4B77hQXXqPtdF97PyNUK8cKcVitFp8VAb1YtrAAu3HwBhWE2Q4MNqdCr7LgjLMPRSw8Z5KRtZsavn2coufHajKjs",
  "key34": "5XN8vDCBhueUPxewsxmgvFoBsmZr8vvbfmR92M9UB2B6Di12rphV2fdmVwXNfS61hAMCeyk12yWgxQtxVUZemkbc",
  "key35": "3BQHzC2LViTBhzucZjSh66YQ8PJwtvuPABNfCqD1pFZC45bc8DomGbTR1ynjvwic12HLWpXNSHmG4L6NG6rEM3xN",
  "key36": "52esRHWuxs77a9jw5YkkwZQDkUCuquEnZk7tQFQxm7MUgAsZSjeQz3qNtp3vpMxQeXhqD1RR87GmLtNbC7qfAFMz",
  "key37": "j5mftAFLpDvFz9N7tR8hokYkctuz7gceLbjjr6o8HD6GEyix3gvpDHuh3LQC9XgA2xvRDBdct5JfNARLPAycME8"
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
