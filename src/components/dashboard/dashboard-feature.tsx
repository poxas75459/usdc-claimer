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
    "3P9TcpT1Y9qb7bnew4Jurr6K3p5b8Rg23vB49C5SWhbf219nnuuiv1BE2gPXCQJuf4dywkZoX7xf4A8DtLRs9srK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31Vanptnko9YZBqnHS6jV4RbuLmYTgQEhmys3z96zY8Q545CncCSwg1t86gnDKtnujRGbCUCKEi3Px9UFwW1HB1K",
  "key1": "2y2dLqQB137QuBByjAhDLUnqTQvhY8g1HyyFznadMdyAQxzrj7qfxQe5CLQ3CEJNuTbmqWAr148R2M3tUxX9f2Lk",
  "key2": "3NktgSQ4QP45DyQ3fmGk8fNoMYjmtFBX4K1C8h6KzhXXuZwEH41YSojHXgHuQPb99deat75vcuDT5NV2DL9XKUMd",
  "key3": "5zoNMrKAWb5chxPpr3EaYcYtHTwXkmsVtuN3cKZv8Kc9Kny9NoHte3sYnmSDM3fqLdb1jn8HespwHg6m6tQGHhtm",
  "key4": "5QFG1JmuDi6HvgkN4FaztpCVy4dbNHrSKUNqpqv2zSMqmy211CR5wvvsXRbDasq9EWkZoCTvZCS7HM1JP3ezdoh3",
  "key5": "4JeBxNMSN2qtg28JmM8UkZsmQa5CK76UGFNeEVHihfzmEBZQtr2zMP82YtvgE6HqDYcJSvSo9Y2XrpWtwZwejn79",
  "key6": "2buwypfRYfcEUcPsPJpFSLqUJzcdKPqPjHM6S9KgPcqP8FyCbooBqo88XuQ5XXeUQKLJw9CQfybXp1Ptu8XybLey",
  "key7": "pLppPdTj1D4nz29Qr7Zzqh8e9ymmVX8ZmD6hHTQM6tnhBEDUetWeGVBDPPKznJmgnk7hCfaHBvRWNNSrMD3s99r",
  "key8": "5HWRVhPFzezWhDQAFqJTm4iLwWr98ZV7TthR4KUEz5gdddcXKTAR5ULmJQx8pkNKM2gJ2JHmU4L2ymrFVMzLqXTn",
  "key9": "2hzDvCQKvx9y4uVkmZjYz5JRY3Y3TNvyPFiFLSmz9iWL1r5etecYeczpEtPLfV1ay5xLhSxXRQDbLbKDTLnY24r7",
  "key10": "2reo89Gv3CN6NcnA5NngxK66F9XKuam6Z4WturvnNn3Cbr2PTmzCv3GVTTBmC92g7VRwdHCUDutmTmLUdFsZwNGM",
  "key11": "7BX4JHfrrDgrsavsRmkYXnmRanvk59oyAzxADsn7BiW3pKm8v3Neebxyav9AqNv9LCwS7dxVLZK64ogopK4dXv3",
  "key12": "51bBW8FcdRfsYV7B6QxcyYzuWKu3gvDoSV6EMNfyvVp2WRd16shHj2D38uRi4VDgiWvCXyyi3NzTAHMgDGGmcSXr",
  "key13": "49U1Jb1x6zSaKomSHZCNFJZptiYzdHrs58Y9D9T2yiRthhCDwhPMvxb891gSzyQ5fC3HrKLi1g8JWJ34U1xbZp3z",
  "key14": "51hLrjAVGVhLVYBbRMbHdAgjm3uEXos1SHudkxK9ynyLG5YReL6w5bB8FTP3jZWR9TTRmN8KFQHA8WVh2FzUXXFv",
  "key15": "4uaWa4wk4JaLXz7R47DbV3bBaBJAGnzScDLTzREzn2dg8SbgEnQFfCWAXxJhevb5eJw3pgfoc2xLr4TMew4nG2MH",
  "key16": "2wSAqteJRorJLmG6zE1EwQ51o5bopENfDsJ4RXdp1GmzMnWJqvLbZQFRUxdHXiUTdD3Hcv8Cvck38mTDFEZvJaCC",
  "key17": "4oScBwaUTHLzafQfkop3WjGvXRGEtxLCejsxu67MrhvNQYnH7Az2Mv95fjVkDbRD8x8SVr8KDWG1PezG9njxzAMn",
  "key18": "5k4ujsYgUruXaDrwvyw1RBBiQcVcxZPKA4ikhLV4RjBdNuSS4z9LDsrFfhQizs7L2Kp5z4Kn1TDbJifaHyqCNEhY",
  "key19": "5Ss7oTEZH4uYQzqhbpEuZZFYqQutQE8C7G7PQFmEL8Q83Zy9BijGM6Ks8XJ5C1eQ51zsaJVErs4aTZnzJn5D6sWB",
  "key20": "2WKbQc7rBqb3xdQqAERu7AYDPTBBWc8Fbca7NuAdou7CPbKKfRDszu61ewFhgimahxUY8Ma8RcuXDwtFJCD4T8xg",
  "key21": "4TCLjroGWHnwoqPQm41BJg5GKbh2LKehLqdBwHWAv2TwzvWed8xiM7ATPwadKhJky5vCzaxS5u6HRG2FgfoVoM1w",
  "key22": "2crXGYtkD3A7e9f9f8JEMCMEAPsdj9MtPyuBBfnLFJA83uE6adW5AMjwUKQTa8fFrsLHwJV1d4hVwy5ujV2MYcCK",
  "key23": "2Bnk8jMHoN6HSqkLxXUCKCmUxKu6zndZ5hn7d5dbhhLrBN5LSkMQwtPTX6gcCXAMUt68isF9UYBe8mLx92S6ExjP",
  "key24": "5EeX5thwPU1tMoCEsstzWA3HSHRdrgKMNnEovnmS99k3gvzbG2avgTMfQ6s1exj1CADdoV4QEnY52MkBuKmBFg5C",
  "key25": "4HTZB5FU1nxnE7sNHihuSxKZZrSWLYFT73GbTqgd4m7WjjStM5KNfGPDs6WxT1ppGfcxRyVZyCEsUFMENWzvHRyn",
  "key26": "wU95eJnXcfsnaZPhXxpjLqgaSru48GDntuDy4cQK3xtpURctgqATvBB2PBUAM4xTWbKW31gYSgVhpULAyEbCgX2",
  "key27": "57q6i8kjVqcAo9ZGuASFWorjHKpqy9GnwA9waegKBqB6yUSYKUkwWLjCqroq1JDm19YJU5BXvZUQLopPVCWW4NEV",
  "key28": "25e5yU8dqs8HRFQGEyKVeqBtZohymnvhHtuyhxBoR1BqUnY4U56UPMQEpDxvA12DKATcuFLkErhuirRqJq6BmbxH",
  "key29": "yhHTcbBgL4aKfgNAB9zvPu5zmTevYqGTFeFU6cjSoRKtBWq1gW3ovqyKCT5xM78ppfSNYnvtADkmYT9gddyXKrA",
  "key30": "2adG9DeUNpPUCJoo1YcCV4TjjRqH4woedw9782R9kwV2kdD56wRSfZHENSoeSurzWpVEbWPrsojn1Dm35LSypcsU",
  "key31": "5bP87pnpkCJVNPNNujAykngYh5Q7z7tScjfW425mvtkBBTYUcPmY8xhiV8cDKobFHQAP2ZpkxT1pm1p6HoR1ekDc",
  "key32": "4QvrojDvrnsVecLWa8N6TvYFyR1goARkrpF6mRiFBfXGNuZZRfLUP6pcq18MGqXpcwVBZPc29iAD3jbSzQoHvc7n",
  "key33": "2pqeRmmcz1PBryYhvn91BwT8QHTny7cPG6XCcNjq3vXWj5UJMJC88CiXHLdsEBirmJ3zeTScgh67scqGkPwo1dUG",
  "key34": "4XQRy8WSFhJofuHGnTcZvPc8ncKwgEaSLtYzms2QKzzqZ2xwjyXbvn67EpUue7t6GCDihy86aQivkgLa35K4fcYu",
  "key35": "4ADeLyrYLgP2y8iXgARe9UBqmcsjRKvCDjKn4AKggJs8rxkATK5JcHCZuBmNU19QdudhzG1Lw3J5QXF6tyGXXte",
  "key36": "zfMJXhN4xodBRYqSVLEwJHoKkrdwodVfnbrHUi3EBAvmPUKj88Ezvsu7g5etYrDuwGw57ZwoFHK6AwiGH8vzJMg"
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
