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
    "59b1ixkKbLN3LuttnPfWnmx5kTQLhdd2bf4FKRVUqtnUbmcGfwbDCLJXBVKSVpxgARb1zV1XKKMiv9GxAKV8vWUs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XiM4kbtvyuQuXu97oVqTLW2Kv4ubtC1fZWL2rFucneK62hVdZt5GCPLGA4qyuC9Pr5tYKbyynPLniuULMVZb4rf",
  "key1": "3iuzzDNhVyrEXDLG7Tj683owJ1DUc7Q7uvH2fdrrxvENdmw8ssM9X5a9GWX3ihKYgfZrFWspB748MS3GuJFk7Jwt",
  "key2": "5AC9w5sn7d5wGwRyAQWt3CLQpRfBigTJAbBBoEdwswwmepaCB9M6wBmMXBLUNYj7tHE6YDeSR4wapkDA12DtAcV",
  "key3": "44vcD64zp1mv7FB5f9fn7nd66ezMShZ3zattzAWHhx24ag7UnYjG7M3qnJ1FvfjB1BAVww18LZ1ANoYD6JzGfTms",
  "key4": "3zaR9AyBrhsgr7Ts5GyT7G8NJADm9BE1rGudHNVqqFLUTGhGDVieA58WrgnjbLoyk3p71GANTWU4bksrarLPXZbv",
  "key5": "4NpkvyasejJpcqgKSNq3bPdK6DDQLzPkWm93yAtErDN8pkdD532JZt2J13S73dC7CDas6EuouFEyhXcBxSSw5333",
  "key6": "5MxzrzDNDDaca8u4rSDp4LKRBRkCmEJZt82wbRqUGgJcQF5S6XmzcMKbz3SVvxmnkF6mgdJwsryKq2bgQsJ3p8tW",
  "key7": "5Q2YKGezEJVzDEof699WBGq64WALa21w96c3ihSg3eJVWmFxunVXzwKemnR9rG1z9vVf2u5p8kv3MuSHfWZBVmZf",
  "key8": "5B7CL52z8JJeQ5231LQPeisXV5DbxZ8UM9WDRMHhQyZ4YL5rysBX4Axs2XTZMUCLGsy9p65KTEj2nNPZ4g2uueab",
  "key9": "2xJhftn6fPJAjx44hsBR6eD8bYUKZYtD4BjDoAjwVfT1dXKfP6sGjs5vhtX8vuWrtySNpNGLEVrHKa5wVezH3BgN",
  "key10": "gVryVBMEgRbnezUpKViRybmGqF5PKX8bQ32XNdjUYjWY7iZqagGAyxJP7JtPDate4ZAfACqbRr1FYomipHZKvJe",
  "key11": "2QRFNm7HYWtxKWejJc9pC1Lo2wHiU9qGUfbtAvueYyKPg7sHJj96AtQ5Qa43aSZw3e2xkXyzXPBt3CgPus2bA7Mn",
  "key12": "6gXtkzGbCr1427XQoh8spSQoTuUF27eCY6NKR1JL9kL5rqDiVxL7UwtXPufUjuGN18RGS6pkLQdPRLF99nWxCoS",
  "key13": "YkiW2wFJFhMGyFJu1iB9gvB99P1oD7PDga7NHzJSt8RM4y1yLoy9rDF5eS1DJEarsBwEFe3ffej8pneV5TQEDat",
  "key14": "5t6hSURnE3F4d8SRExjAv7Sx2WwGxCyS3rdZghwjpuoaGsT2VNddXic5BK1vHZfkMerGMncvCa7veHvqubGNdHEn",
  "key15": "4spiyy46dBj8U6DbqVogsRuG6k117672McJ41M7cco7gZXCeUy7ee6UkHiYgmn7kvDTnTxHtQjJLVBrHGFScjZu8",
  "key16": "2nDzSEThQwxsXnQ1WHcsYXovk7QJRBvJD1vMhwnAACc6LK3J5wZpDSJEdbAgHpXW2RtmzyqhxHCDzzWy7PwBenad",
  "key17": "5G6HesgYaCkgxox5BxapUq6vZWYQNgoeVHJrvwADEz8Qnq25wzt7GFQxYgw5NM6ansLgawkGra8cF1NsxcoRkfCA",
  "key18": "4Uq3Sgq5RaV3JgPMcKD6GH9PSsVojADHutPtK1RBL9CEYsR1Jep5Lxq5TX6HJEgjo1XDAQrMsdzo3hAD7KWqYKTC",
  "key19": "4bQkYgHGgPrw3R5FpTtAimeSaZhauKNx1JhPdng2G7HMgte6AnDCGqtbpNbsWyTQ7KAYPk4ydbjrcBnNPMo9ubhN",
  "key20": "xY6EeELq58inmA37sz2KNSWW9oF4bgjejNQ278KG2AY1m4FhRdBonHqHQBV19hqykVxmggd445rmBuHdNacZaYa",
  "key21": "5uGCUqYe9Lwt4SXELvoXZCMi2iEmtGTaVyeGmNfwupAfRpz1GG8hJjSHB3yZCMDatGT6nzAzAgbPXNpvTQTJ3vT7",
  "key22": "2BPQKGnsmvtweXCkrKZSj6hmZDxGDBTWiXMdLHcsRXrpM2MERiS3AKoMzAGFpzRymmxCE1GKER3o4DjMC4sVdrtT",
  "key23": "5mxJPquowjYPb8S6fpmZBpzZt2VBeCEnWJv3vBpYYZKhEmwc675LXBWFj4G8DkoEUX2qrepAW6WwseSU4dZDPoSW",
  "key24": "21H2J4FmZPr4nE8zgKK5SdTB51tx9khykdUEyQMXjm7aPZSLoSwtLr9sU35pqZVRJJ99Vzoku8gRUpYJfGMtCM1G",
  "key25": "5u8H2WaaGJD6PNNDkctFJkV3pewX8totEnUPrteP3a8obbChGBbchKZ8jWdERaFPNTAn6d7rHF8u6co7oqgLvKLh",
  "key26": "3oZ1s4Met2w6D89K8UUToTe8XfxrE6SeyZEkTe9hLT1m3A73js8Z6i9njTjLiXq5SzfUV5PZd5PWnzEK1ehqazFH",
  "key27": "ZvFzUZDRu5WhqtxN4vxgBnTACQKNxNCFdzoVyEtW5f9npWiXX4cysHpTh6NSWs975pGLErqHCFUJ69R4HoSr9Dr",
  "key28": "5Hv2mMERSY3iEavrZdpqebhavZnSs45SyxcwbtrsqpsSZHad1HT81gjtQqcWGadQmkbLwdqHN4BjJZfBbNFGitFN",
  "key29": "5JQ1vS3HcTgAuVu2w4RzQk83o5vyCrFf6Auvow8sEbruEtZFTcJiftbv8WBH9GHkgUxf6vDz32YQmFcgtC9Yn1qB",
  "key30": "43G1jBRkfuHVwexX6G9Bg3FnHo4hXRqjeFVJCCh3tvx673JGv7CibbZTiTAGxTJppMmkFCcM29PVrwAhWvGmgAxa",
  "key31": "59qtVxseUXKFMtnpEEirV9SWfg2VQNpSuiJ6addwpYGX6to3pvJF5Un8d74h8ZcgjK4a9wWAvL886QDrYPX32Brz",
  "key32": "5Ehd37ztqVJF47k83ndkK5qvMFvozn5nz3tv2cDhQaNz2sW2DrViKt3mufsNHsUs2zQoy39KjKXVxdnbFcwZNXoJ",
  "key33": "56U3pb9ozwkBgEeoSDSMC5xDne1Vf1GoYTgVaC6vxCBYgzDaKmFu3FmvhJh1MYhRwwnt1apgAvUiPfc114FbY1Rh",
  "key34": "DxRM2AJ2bxkxoG6uyoJk6K2R6NgqoeEEKdNbDaLPXkp6msYCaYNwb69Yv9zXzct572kqXBoMVxg48D98SpB1L5v",
  "key35": "568pJgKfp1xneSW8uJGVuTowDuizvBJMBjYj6vJVFKTJZZU3nmLrpATbDvXhC55XpXjY5BPZpDcXPt57Pb2SviW6",
  "key36": "22YwZLxoEu4mzEyG8ZhqDUwgPAU8pkaUCekBJ1ExNeiXrop5zM2MTiFE3ApPCeCw6BFh7fUdyqVf91AJnQXh9MpS",
  "key37": "3s2GoLdm2aCAJmfouyZQMMN5jrmw1C7LyvjMDkgdDjyjrEUxSqMDaLBF8mWHAowH6UcydFjgnviYmSrMU6JXAZzB",
  "key38": "4Ho4rms2SXVQ9BnULLdZJywP5BDSqM4Cyut6wDi3HHWTL5wmMG4fnQj6Kj9ooQR74HCEtKD4pMNky5zeqA7kVA8c",
  "key39": "3XGz1WebDPSGAaVriari5djG1QWBRJvVX2EzRD8WdCz4qKYPCvjhTSWk7khmDoD9qN5UseR6rvbiLDBXoFCpJ3Lx",
  "key40": "4sAqLarJM6mDJRVwRmHuEZfo4ET6ceQuYnvazJBPQLDVdraMVz2f3iQKkdiypUtNaA2817G6UQ3Tjbv8SDvAuRXW"
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
