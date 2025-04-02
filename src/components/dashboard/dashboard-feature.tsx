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
    "4szLJaa7JpFCFpqj8M6XTkxUyMGEPswx61iRDCEhyegFqqzJ2G8CXSJG2DEH5vNCy66DpNRkFXrAwKCrVHXrMs8W"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yi89WiHEZavjog2Efg7y5wrbwWN4fGQBq2mNnqGjv9csgcMaHSXUeHkZbR2R5qj6DwW645Nekx1XLZ3Vgzosa5Z",
  "key1": "45KeLknEXUp4Jt76YVjiejyrpsGSix9UZmAnrWJhgH6ekFNzcyPM9wE8Jnug7JUzuwDXSt7WfPYP1ew4NWQT9gm9",
  "key2": "5Ms8d4AvPAMgu3x3qLNrCxG11CdraY9qs4nt4UKCYCXpNiQf5e9fvk7rEsPoCQ2sePCTyXtXc2wGxZwxfuGVxHG1",
  "key3": "3YNCK1Ssz6uCvWtg2mSYBu3Ntk8jRupjL3nG6knYBKEazf7LTGqbhL6UuCcon5MXhZTVrrF3kPMF1s1p2EfQZ7vg",
  "key4": "5UXFKQPJSZHMPiLMt59LGBCqavJnrLrv3K9F4kuWnF85mKqsozdqHD1JDKSAS2uCTAMRYKdSXdWPgCzqY36spauq",
  "key5": "iL12XAsbqbJC7r6zS4mNivuXQMi4hCtiddkNAqDuWH5yG8PeLz6GHthhzxKbt7zjaeAqSMTamko4yhQeTNd2rsV",
  "key6": "5W6FifpW26NNmp2y48eiKspqzQpCYXBWTCzRGvKfqAWGuaMC3dh74r12g78NFQWF2ey2X6XLpLoUwKyUkG1SbWu2",
  "key7": "2ts6MeqK7vNJDnxrfAY44uy3eY36Kc6cuvihZgadWPS8gP95upBqKAj8WiRscXTPfQLDaJUeLHCuJGxFp5xJoQPW",
  "key8": "3Zo8Bt8V6NRwAfkwLoaPLwWsXrBp47qYTUzzsd2TCvVi2JdvDyWvf9V9tMNBnY3q59drLrgvwWjabWew9qpoafkB",
  "key9": "3fNMCTiPhJkuL6pRNuDaSnb3nj9KfZARytprMbQMjRsvs35fieWsM2GUeTBUY8JUz7NYzi9GHtyJgQhMXJTKkKxh",
  "key10": "kAFUXaNwJoPQZ8WakvWUX8ABnee3JVjTnhUTASrh3x3gfzie1RjpczHrcLnPvUUEnoSp38zaxPgXZxxiYkSyinF",
  "key11": "3RjGAJuZ9FqAbiyNNPUnkR4y38LzDNXVcgpktJJAZxKTwsmcCgXacFAnEnC6aagNHu1BH9FuhGmYcKG6g7UrAcvy",
  "key12": "4ekqvr7bfNkFnomWVVanCWBehQHh4jKHai8wQWZxbhyaMHSdo9MiEvEiB6SBtwuLDeUSh6Xp7JwbzHxaMGSXnp4c",
  "key13": "5tSfWmKakAARGG8X1D9YKvQUFpLGi3ADpBHo5U9gKmjnUzPMppPrSEUEnPSAnvHV33hMexeaYqgX4A5m9C2QMSEE",
  "key14": "pPnt7Qwsk33ggQ7XwmLX8Cznj6R9tsEAbV82TCxgoyeoZc3Tfqrpvaq7watFGia8c17XMoqwCZFpmHLoWYzvXar",
  "key15": "2eKYb22oRMBDxtSbBdJtyR3P8kuXuQFGe5AnhWwHWnXLd3MqEtAr3HEwBC9uvGce5xfar8oJEtBQDFTh7wN37kHM",
  "key16": "tS1V6auVFHi1Gsub4t5cSRNquQ1Vc3TWb7ju8BdQyaZChoBeWg4k3f8ceFuoCnywXQzdt9AYcvpfvwcq2mSkvdm",
  "key17": "44qmiac9RpuEQSeeizps2xPSQVP5vuX91JsSmRSVy1RvB7YqPb5mNxSuAKfU7hJW2F7Ho8uXDfiZkGaHf5DDYkkU",
  "key18": "4Nhz9oEdVzTk2hxVmZb7bzAPQibSs3sjpjJwhe36wgQ7E2wJSVpEb96UGkFnm99N9kKk1amiNSTEVX6rGdzgyoLT",
  "key19": "wZyit7pDuRSkc7ZamXUrusHK9ec7G5ZcSbJivEjpweVbqHoWfykiaShsBoMHVKxNpkwhMD87KeA7WW1BGUyT15Z",
  "key20": "5z3JyvZyWsxYi6UrYh5BBRDiCfoFPt74djE369tAwhtK7ANwVA94y3cLtLr3nvVYMjAgtHKcFLf4gu3simcHivu9",
  "key21": "67XZNJqL7upZKGoWPqv543dY7MawMgGWdWcp2VQKkWT4RAmFSf1rJy48zspfx5q8DyJCi1Lqjdhb7k5wxSusYcTy",
  "key22": "4RftwZJhq1sbGgggJoucaQmfA3YSBeNY1D1pkDsL3GnQhVQURgXnkDPHAc4rCaNSw4gB8wP9xPraD2DhUz5XfspK",
  "key23": "2fykiC86JJn7UCDDTLtaENfZv9aydfj5QxZTWGJPzN1pxdN3KRKJ2cBhaMTnNLXeH8GgxawWJvigi83DVK81xPFb",
  "key24": "39j71R3rm7hiS7caudhm9mTtsrGshzzhWY5fghuERYgbeAKZ9LXXvkD8bgTSt6GAVafyik8XdRnnzRtADfFfGxo8",
  "key25": "3SgxuduSEBTqU1bzGNwQv9KxVNuzEcbkTNavAXGrowTDRQWLD7DY8GcKV1Yxk1rKgUhqtmG2X6bhomLxG7Kxse5w",
  "key26": "4ith5pqVZecDTVcGnudYKcSkS6iwafuC1g8SFrvNgKnLeUqtAX86n3zFcFndP4FCdmv3FNGmtxPUzfuMPoEQkQ6L",
  "key27": "5YQBkJgBomDTrKCQ5Wj1XGzxfqVwnVUf1b1vZGtVg6bte6zXTr7iVgVrEduS6G5A3RT2LHAqhJRenztFL4Uhu7Fx",
  "key28": "ZKvUX9LsfVbcFZPpP7nxKUXDtbzBizZS1YR7ucsEdHTJYUAups3Tv3JfhXxzijikD6YKF5JKsPe7kLXxLTHUkZc"
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
