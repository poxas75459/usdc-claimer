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
    "2cfyk2Mhks2zK3zVWFiLCW63sUAASzx4BdtSVhyexdk2BCeGrbkasFVQyosasmHV36MEbWqFHVegneVbuXjCzZzi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JPAecBCVaDe1hn29dt5AwqqVLFKEeXRLCZySwLqTKMwLUvxZscMJxoGuesnbH4ufhcpKvioksWc53RHsNPwQaW2",
  "key1": "4QVVwfPbxnG5oa3A2M7fUrNq9PBBCFiVVKY2J94377gJEJfxGh21byb9pG435oMvB3ALXYRfoCVWEyRtmihKRfY9",
  "key2": "4Aztz8wAoHphgf9pSUJEyP5uTTJ1ZbdvmsvFXV9kvxHZYt8QgYPPCqH13Qp15rJpatTAQNH3rYyq1cbL5zVRjZpT",
  "key3": "2u8ZqpRcTryf6b8VePgmxApgNGD2v3FxTXaRduE5uPvcF4XjP4QYNxRuiZGPoT1Gn8fdKkcsJQ6qjVXzkwpv7TBk",
  "key4": "3pYLipbC4zfB9M5HYSVVWxTT8j3XtAQeYwKceXPcfJvkbNV3xBLPFr9qNPiKFbGTXbnnAfSxWBWWsKfCPxNSmq6t",
  "key5": "3w9LaYt3kApLKhJXmv4trQhJhFh49WzuXrJznwuLKG1eLi5chvxojadiKAyP7cMTQ84kRVfwYBFsEDRYXEmiDN7E",
  "key6": "3fGgDVFyBeEc4QvAGykM1xBiFk1GdeemURvhtKVuqDSkXWjCNwWz99jQW5DTh6AMVouJv1bkXa82S8s5pMNRh7it",
  "key7": "2dbX8R8cXdyMJTUjQF2vv8JevXGum2y1tNP9wRrKtiXgjfWYaGNScX83cSZjja8oTrtEXDqj7SML9pt4rLBj1kGL",
  "key8": "2nsFwnxUCTeXAkM2zq6h3fC1FfjDPNsvhjZDUco22CDtBBUqkQBT6AfiCcpVqHWRrxnibDEk8MKXMm3hmE6EPdQL",
  "key9": "2EbnqtDm2kqTudSSvY5MksEbSxAsceWomBXkHHXM5KWuWd3YempynxxrBspWKe3F3Nmeon9rV5t5WPbAqtHQsan2",
  "key10": "65w2usw3cLbcCnmzt3rMh26ekH2mom5YTPBpy24tsRoeis9EsLhTqbERukGErRRhXbMnTDcUMhCGMJvoNBKDcuUd",
  "key11": "4z95Bxd9dKQZ27sE56kQ9K6cFPTUbGVkmW8WhUrFXJnnYpUTkFokzjW1yHpkrHRJbjdbmwAQzL4x4f5r3Gf2zkY",
  "key12": "2W6WjfcbjS8yFtueicETCHkwGxX9ZUgRGCLQjYW596uQJKdp7erP8AUMG52Ez5hHUppYCysNW3wKMCaHxQNHtrnF",
  "key13": "2MS1DMtcMPAs5KfHvxXL1ZPcGg2KD31R6DysJgEXW3yY4e8C27R7zu8rkPiwmkLFTkiKmy2i59jsfzNEQ2RB1SAh",
  "key14": "2NKTKjLpSNgNaLN7mmjyQZe1YPv3i6KNWGRQKP4BhSHEjqiQ45SsHL2ZKtmaZq39Co7FsW3DbrGQ9EV2SxopVUAx",
  "key15": "66oCCCVZTuZAwJHgxApoTrPiSy2ynXwNRLP8BpdWdRynCntqiNr7YPiGXKghwsmEuMyd4R1fRGaLijyrQTJu69f5",
  "key16": "43vr5EqGvzZep2N8YxVHo2QHGDacydXoAsDZ4tkGBhHh6od8m7ZEpVX3u6GvwcQibAF22vfRaJBDb2P7BMYwwGA2",
  "key17": "3bKPmaF7mpKGwXApANJ1A51Q7cCow2EAfB6MNZQtwsqsQBS7FkNKikjzj81jVcxkcuuGeULAgYEv2mYRw3uZkxYz",
  "key18": "2FHCVLHjedUm4xSk9PYuZNX1nFchUYsYYWf5MT1oBUn7wcKJgojHASioSMzUTFSySWXZdnQgZo1m3ewX6BVww4Mb",
  "key19": "2FPjTf61yiUoDGFtpfnRKT22K2NzEBFFYNRo4LBMfJs8fNBLVACABBdiBQamif3qtB6oeXkMd4khirKHeVRYj77g",
  "key20": "8Wx84uGcg83vxbVheg75Lk8JWQSztgUSDSaYbZJeopQ9bKYqc97CNE7cr9iTvsxoWGpQAxeZ3CtvewXhU4ypDWu",
  "key21": "3YE8HHSwe9zxgdnfywi2Rn94ixYGtqb2PvrH56XenTHiCpMcnHpKkNjaQrfQn5jPcAJJ6obxaRYG1kexiVoctriH",
  "key22": "2AVecY1fFTSXgnz77RM1aCLhGyrKpMVcHcugHQTjjv6FR3bQG1Tk5jJ12qdEV2no2DKxNZeusvKkLpm23ffvvU45",
  "key23": "2wrtCZQUb3mMEmPbMpdFczqemUrTqEBkpk3sSjtwFmFniGk9DJqDrUDnpRGHUePsXiWNXZ9HZBSxYpFrhEfqQrY2",
  "key24": "4aJxBKEjhg5KUTDL1fYL8VWEe8M4Mu2Rt6M8UbBEgPZSmLV88FShuuXZYBHHjUkjtb8x7349G5wpmdd6Jrn6sZJP",
  "key25": "ZA1VnxWzJif8mivzYbCfTEBJFRL9pnvAwpGfua4znJhjLaZ95tS1hrsUfZQCLj9rDE1dvnUa2PL4yHxBVbkpR7q",
  "key26": "xA6Z9jmraDeAtMGPe2bFWCew66y3qcgKAGfADPyyddRcvb4TkgkKavQgeMNRAnB2ZMnoUHLmP3eExZ2jWvR47Zo",
  "key27": "3ufTY1gbBq6dWFzWd7Mz6pVNnn3wiGGsQgY7hSn9FFr2YfZw7DvqnUtdEKMHAcWNv9dCgUBUzxeBpwk6tuFPN5Mu",
  "key28": "5E5yeRu4GQ7XTH62DkGFChNR8o1JJafcYzj4WFMWQZUDNt3kbEbQ8ee8RngTJmDYXkR55podmBp8HxJsKpJN83og",
  "key29": "YEyE4aKUarmZ9nZXv6KVAvu2396PuRL737BfBQzgCcscD62hjTJdBYSGR3f7fNvjvM6RBgPCeR7Aih9cf5cTtF7",
  "key30": "3VPvLH4KtxjYdFHC45yVFimAvRT7QuGquBKMYHMPjV4Jum9Ee4iMjPTN7YAcakfEwXZYgRxC5mo8CYfWQCn2zdeq",
  "key31": "4sRD5pURpWDNm5K1phfpuc4ozySshm6peLkysVkBxLPtUeCNjMWVLcb3yWiXmxo1xHiCYPppd77TzvDhHSGjEZw2",
  "key32": "2Tg2J6uHdie9mY96GejGe4P9osB4UFNXdM2USYW2KnLukoGYa7J8viuPrMr9LHJevG78NdJiFTzT3G4CQEbHV5Ec",
  "key33": "fDr5GPCxhksnpKLcMtHPbRoPUbiAK8yBQ5jifbbMTtF4mEVzaK3Gap6i9RpdKBxZcSJQrUgJDubcWYC9BjHJwiD",
  "key34": "23EXfACTAaB6eErTyCx2ZZ2s87jtB6wZqHae9m6TyKtw7Dcu6fi8ohWtCL7njLJziTsFDPJq3yg1frGR55PzP4zF",
  "key35": "V6ZyVYPVfvumafd5z3MJgC8KGMvykJ4vEtu6omsEcnaf46HpKYPn692gzMhEgYF1baze9XrenE8UFt257Tx7F7V",
  "key36": "b34AHZkXRZL7TvL6uUyqHW1iYvGx9dZuq9MpR3F7WnwnqdAcWZ7iMFGABfzhv6SvopaqDcczJuKnhc3n58GWrj2",
  "key37": "49Srp7Qh8TtV4VaGDTon8wqvv2kNafaeYqqdjPWNTL7zmX2mvVyahnh8v6zUEg2TPsP1sWfVVRvLEa1XNeyJratA",
  "key38": "5jYrD89ev24H1SibzjtH8RQiJc4Wf5UZrpdoufFWfXgQTRJebnfj3TMou3DV46ECTCG7dfpHTAheWT29MEvz6Lc6",
  "key39": "5HCWAi11pTxq62MUKCCwLUr1quQqTL2oc3inzqabaNNBfRLikVus2hAMgVoq7uZrtcNLz2iRg5GYwKJrP2xhr9JC",
  "key40": "4TRmYHWfLt5CjxTbuA79FtFXwuAExptSkKmS4J2Um2FXXbEwYtfYsvqPKS57YqoZ32WkCyWXrTAECX87YRyxmQLb",
  "key41": "4a5vJax3vTdzVt9KcHV3Fdcr2Q3JWvtBooQDLK5tSvdWfLEgSqpNCL8BVf1VwMxhq1h1G8dnUmJLQno3LS5BWmF",
  "key42": "3n1GJt51JAcCyQ3tfZU7Zf76Qmbog5i2RSwSSBRadc2wN3vpn9DLADLN5P9Qs4cavdWmePw9QR78dKS3TGCsXHDb",
  "key43": "4Lboj5ecPu3Xh5dGR85vEHAbHQWa71JAQiH3qQTbsX8KXmcsScyxCrXAActHo9CPv9jxGGAPUojy5NazEbqUw66",
  "key44": "3f3aVqBmGdbKBgT7ad3FTqvwarBkoXcMV8FH3xndGb6wrewRCDhuwhPjWHJTYYbWrLTrY4iFXT5nw56d6X1NvnAB",
  "key45": "4sxXm9oz8koEfn6mypaXwdFPrcgxCs5UubzgQdzaT3rnmjhZDSmHYWTPB62shN56NuNxaEtXZcFtqFHY7SWERQeX",
  "key46": "o7dsrQGuTUQAKpgajsVCDkLoMrDKWuVRMep2MHz4585sTAYGYUGY7FWX6Ki5eYYpzPbognCSaGf7N96EiKTX9JW"
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
