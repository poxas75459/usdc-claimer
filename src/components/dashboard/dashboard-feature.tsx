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
    "3p8EG5DGK3QtYZcGvSfoUKhJFRZpjLjUucf9U2cSLKpj4Zczr92F3yW2WVDhkJ4kzbP94uXggsj4KFoDgC67JQtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YBsdgt1NP2H5CjpG9jDPoJ3smyrTjRF3cLFSjktzQYfPKRXZkuZq8AYmEXzVVHkrQoKfuaNRUbbVdhcf6jr55Jc",
  "key1": "2XSZW3BaBzo9XpCfR6GrV8Rxjufmc76r7Nj3KodB15JnS2T1SQVaFiRR1pEuoMrVKnwJu2MAx5oyC4TNvBKxUMcM",
  "key2": "51Dk6dvN6zyk6RXRqW4ff6wqcGqc1t76AB6CEyTb8neWShqwk8KhdE3VMfR5vYwcJkpEMCrYmtvDVhMbGBLHqoNy",
  "key3": "2L4Wt9PeQKYoLoxEoG7pVoCGPRtzSTKKuHjVoV9Dn4ioiNi6go6ZWS4onFDnh9aEAdz6VjzxEoSXCDmhg2VuFpQo",
  "key4": "5G4SFiRTFvt4CY6F5yujpMMfo6HUUJqqJGa5Csb1Ak1YmZt2L5ExvqjypPt1UeJGL5wnfjA1PBnWMFb8uxV9AAxR",
  "key5": "55x6K9oDwXXnGw9Z2vMLkTH48Ue6iLKNedfsaDJpxEH9tA3QQGXDHdJX4Y37G6i4gnmtYjcegmn3EVniRcL8Zhcg",
  "key6": "2cz19HUhUKSCsC3gf7A1LBGsskcEQEvr1X3LtqqdvXpN4Hb8JmtrKLzAFPJsDLJbaNMHDdYJ2PBoMy5f9oBGToiH",
  "key7": "4xwE1NxehHHXfEraTcTo7tjoD9xW86vkaybzEcAVxa5fgNE7TU92HiDpu2eCfcTVNvNVRXdHCx55NbbYmhrreMob",
  "key8": "HXYyG3kNXgy1M7YMFYPGzLZ58tkWeavWR8PKE3QkKDwsZuvPgMubrJWTn5roKeoXe5JfDGzA3arpi8xGsEEqEj1",
  "key9": "2TeBQinhpE3h952CmiuuorP1aXWnP8p1zgfoLr4emDPkpe3FmXUDEkmfoqm1AXD2q1KwrkgGc3CJfAAniajuCsjF",
  "key10": "3QNC6oYFwqNdEsU3PvHyAN9R8ahTbLyoGi24Qpayt3gnbve491Ju1VcqBtdKJ8fzciL19Hsm3zxDfpjZHJkX6Jdw",
  "key11": "2peVhqCEbyg1NyVddmVgtsoFNsxu4ruyqueNVjCKUc2eDppRkuENgWqA57VHiFgAx7kENcXPRypjSWSkvbybZVQ",
  "key12": "c7BHb4QffgWYQpDUd8aXPoKkCpmC6y54LJEHkzLKFzUabmULzh4arbek2eYf6k8HE7FiqFGLvXocPVhZmZo8Pi7",
  "key13": "3C7CyNEbLdKtjT1M7WBggu791RW6sHiVWxVUSFR8F12wG1ktVdwCAgNx8Fz6T1z4w3kkvkf5mwZMVprbZUYSwLA4",
  "key14": "4LW5gwCEVFYUW4jhen6pY4ZpQgfJ3wtTEc56UBP6mwG7SnZWx7dXLGqLp1APKQfzXmSKiqe68pQ9yJbpQ2nryzDM",
  "key15": "2qZqy1aRQgHkiE8eUYoTTz68atPcCnoE88LGWUFKoBYc1mX5WPe7tYy65Zs9xxYss14BoseihAgGGVyKnKRGvDgq",
  "key16": "3E2Sktt1pnJ9UZdRzNdfVUVPK2XMFBtdXQVnDYuKDXNitniVqdPQvYywwWZgfJvbYPsuWsbUK3upAgQgZgoEMou1",
  "key17": "n1f8gMtxSFtWMDzgDWMGnuVfMLwgatvg1d9GxNC7bELXz15qfChqmzdu4msRT6BnMik6cxA4UcyvomXxsu8asuM",
  "key18": "SjpaMgvrHLjdJRetzCnYpqswE5vZx5Ai6LLp38heNqyj9tUhVotrdnKgK4PR7QscC9bfKgqbbasNpZm321qNcbB",
  "key19": "oPFfCh8UQXqAPA6LsPmTrMXuzE9Jc4TVZEsn8CJWNeCiBxsyU2Sm3Lmo1yH7grQrYYw2PtFh2Mpuv4iCuD7sLFW",
  "key20": "5Ku5K3GmMkVmPohQDSZ2pYegydAwzEw5d4jbp1fVpotdsBsRLrKrqXGrAaM43fHoQdijeyFNv7DPMPnBGCzzX51D",
  "key21": "mcTZtL3Fnytdb8GSLkVSZtCVvA76g3awsdRYXyA1Ddge6mNBvcvErxMn6hFUgEm2XxMZ9TveCjP6TvwuLVkPa37",
  "key22": "i2pjxaTpVmeBfbm9dShyHNspxNojkrR1tqe4JAV6TF7qMLLj3nDbtady86abigEDpcDFkRtvP8fFN1bNScwkSxd",
  "key23": "XjFC7e2RFwqBcXqfHjpAK1QnD3HzSL7xDPHF2ToMFM1fcSdf4J16qnNkavP6BdYAC9TNNAXWPs1WYCs15tVPMZL",
  "key24": "4pqocGDYDrJZw7sRQ96ry9a63Ag2RyQTnQa5er7qX5XR698iH7c7gFCGbbZnFtSHfg8X5XgDhbXiL5Y72Y4gwBBW",
  "key25": "3TV6cT2dRXgrfFsUeo2es2HptmBTTj21CuT2h5KekDtq2RZiEd4SYusg85M9wCdZJfASdX94ikR6YWjASemDJSBm",
  "key26": "43EWnGJWFgTZWRqFVQgPjrxs2dz2EfRhAdcfa4AMD1mWaj8wru5u98mM5fcRToS43kdKnZG9vXb7EKEBkdb7UZF9",
  "key27": "5gj4zDW5QJ4PmzJ39gy6CuNFVj9RxM7yEJZM5LTDVrfnDFGrcZovxtLDvwfLcfNR4aLhiDkpEXdkHjDjd8L3hRPv",
  "key28": "14iaPRL6WbwBrLFrSj2bsrWnijmAc6RNSCj4VAi7fu4xsFGnmvRCsWTYH6TfbzLiVNstNTFLgyEM2L6zZQnDmwq",
  "key29": "4aNJV7UerNUJxHZmSWjixkgT78dsQPfn1o7JgqWYDM9fcvsYHRhoLyocQQVyHH3dfcjrAGjVoXGKuDEe64vrMmo8",
  "key30": "5rUHTAMYSpHLQhXo3V14Ft9qhXq2mWst2DoJLSvhz979iAqhXbNu8AhQvH5rss9oUqfeyYY2i91t3dP6Qf5WSr3R",
  "key31": "rNBhhsgdfp7MfEYrvYTxJ1BtHgEsuCWaPvCWDmJvnVKjuGx2fuarK6pLixMsAb2ZyUBsW24FEch3ZV44edPJVUL",
  "key32": "326yjyk2uVWhZsXBgpdS3F3PUe2jLKS6UcRp5dfu3QhcmJKJokP7rqy976FSab3SdFCuMj9LjzFdYiFMXaMFXmAr"
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
