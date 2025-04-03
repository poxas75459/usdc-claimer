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
    "2Mqu3HZmVWT8ZdVnNgbadFGjVVGGhiNa8BcvPgiWmw4UiLjix9wQjhG6KRSC7M9HB62S6gWj4bVn2XVoWkVCj7Ky"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "261WbYgsBhPQe2H3VVDt4DPGRVCSzD4kPtnwc6G2BA8DWZeegbU6BiTHc8AW4LyGuuQVJ2ANJfBzDibMSyfdC2jD",
  "key1": "4hyneJp5sszttMkoQ7JUEF6kRNkybNLYz5Yrbz7uyrZuborhfGgXbg5BFVPQjj5NbXfFVeN14AhbeNEZ4mqKTY2Z",
  "key2": "31htURHg1LwQ4ougXh5ugTXq1Ps6gmMXV9b11CXz3GyNcyy7Dd24e97k1c1ZgSi4Q84aZNuXvqiBYKos7oJgDzFu",
  "key3": "2DUY8SK1tMV5UKvb89PJuTWmR6R5S2uy3NNmSKtT6Qvs4exoq6g5fCJ49Dt1fmeJJBdDMPjCUPCVaTFJjsurzGea",
  "key4": "2nc6omymHKRFSHCRuiSbr65sKuLqkVMFkBbg98MvxYz8vmWDXxJg48BAB13u8fhVSD9gubLHMPmbM2MyVJ4vSAdr",
  "key5": "4jHGMH6dzWSJWqUW8jmMZZaW321WgKaS3zYz1hSVPkCyaYSevQLDqRc9SaSnLN7uS5yRB4cdnxy5iBvEfpTwxt66",
  "key6": "49bqVraXCZWhE6mckU4euj1zdJgBPrEoqaNWFNXpKY55HzXzUT2QY3A9e8WbuAFE3HaBDYjUoKvMzvhx7iJZ9k5r",
  "key7": "5ttVdY9v3ojNBvvA2h3sUwey5ZRwDREz4ZHkzDZMK9hzoyaGLVq3hfHQG2WdSVh6WFJUgNHzJg83Qd5EKDCKguA6",
  "key8": "4T9GqzNRH5L2Vj71z5nanSQ9Ao9s4sF9BwS63pTMwJLF3LEpMba5KZUQPu5kyCw8Dk3mFzhe2AZrQM4VfQrRkbVL",
  "key9": "5qhmsfgwkMa1CL9cWnP25dZ7fNJCLZdgo8DcYJ8iGfeafm7kWduRbagyBnEqhpcbvL9y7kB88nJyAMdWzU1cSrc1",
  "key10": "5Rkt51TURSDznXwAwG9YnS4HywvLFN8A6NVC7ZrBD5GE1pB4Zs1sgoGxiKDBL2PM3ns8TY2pnk2zyFbY6mgSrsMU",
  "key11": "2AgbBWmoL9VAMVGart2BKBvb9nzkPFCU7tmBuyu4kuw3tR2NQXw2UkifhHARfgyyckASd49csZ6nG4mBTL9A7GLq",
  "key12": "31HHP9X6mJ7y8nEoCgdW6vKrzok35ZqZVZhqqT5m1J3cniJ6tR3yVuqTvTYTZapQPZKNGFHMGb1yRBwChUt7fUxs",
  "key13": "FHzuPPTJWvEVNcKFy3zxPY5JgKgLnoGhmgs2oVo8SQ7hz9cDw13Nqoj6fRxYL2gq2EgUnmfoHbUFX1RfmMpWTba",
  "key14": "53CTdbRhLugsuajPtSxUoEPfsjcj9mxbiWLCQgMk4g8zbYJC62CNFLBccKYpnyTfXEPbDTYGJvmQ75ebLAg1qWKj",
  "key15": "4wj67SE8WSz9MpX33Qr7NVYZmXH4r8cZJ2VUukzFQgM3NYMgj5WUDnvWTCwUJJnFWypzdkfFRyvDLGJ7YFPzSLK",
  "key16": "5bsh9nLjdCethaKDAiv7QMzphyiG7k8PniDk7yRA66JxF8usANDNumizYioFLHWRqdRGVfXqKhX9hRBZBt6wwuHM",
  "key17": "3Sf4pr8WythP9Gmd5nGjhPdvz6kGMeFDC9fFreoSAGThz9VfSciZ5oHq1ybNYpC6ZSaAK5RwmhfuarF8jgtL6AHt",
  "key18": "2DHpKXnfpmSNdwLrrWcebKjyWqfQPeeZ71Nqk657QN7G3YVVku9STp7Knn6kbpTkKYZ6tJjNtyeY9V6HQvneB13m",
  "key19": "4RAbWkvKfe3caWmtgoq1DxeUkAJDVht2BVEmQhbnFzXv4GbzvtKKMFeRAbLhneiToMcaWdcjLtLQVbx13bArXSCW",
  "key20": "3W1xrceq5zuXR6djwFw7cfiuxkhAjqqdi9B4wpuFkmQy11YrzHoPWRjBgbwzP3TMiKjkrz7sZA6sZvNpnpZTDQ7w",
  "key21": "2XQMy9XiKwokzmYjhwygjPEj7u2PpagGUDMai22psXi9N7K1gwvwet61Scxdng6NHji9yM4mNiHCJDSZdKdZj1Tt",
  "key22": "5KHiAzAqcNREBUA4ic5ATVLB7fwhMVsacBQ9m8JgwQXJX5BWcfDYYT4EK7bGFQKP3yfy9ypxuUEaseninKKHGPWj",
  "key23": "2y45jALB5YynbQW41Uo8BsNrJ1PxBG29c8fm7qp3NK5py7tssQRuRFP48qjXLBhhVbpiKvZCBQiDHHJ8onUTZVTQ",
  "key24": "4vuKG92SqKy4aageJmkYfTA9q8TPdJHE4rEwDfDFsVTyihdMKzmiade5wUhz1EP9x98DQpxv3h2Zy7bVZotTEtrM",
  "key25": "521fh53uZvyN3fzqVAzLEkPcfm23e7CF5yaKpvVBWA8ADydcPsQmyBcKRDJByFG176mkra2mdB42DxoCXmM8MdK6",
  "key26": "3wuBoxLymCP4ooddkzGEoLV9d11AaRNikbTMreEdHjb7Wpgq4x7VJmYRWgergfxaXh6f3NzAr38BLtkpXSg6d8bj",
  "key27": "sqD5c1NKtpfrC9ZHLf8oJUi3YFeoi8PdGwfHi8cHYV1P37FDEPLTwiCS4pgbmwUHQ6ntW86zASVQyenK3bNH1J9",
  "key28": "4p8mPeB99Jq4c2YDApr2nTg8BvbxCd3ZRVQcgb3c8SZfcTHtt46VnbHQxDeF1KMog9uANKm6m9RAVaE1A2zzg4o6",
  "key29": "5YPkNSCYVMA7vP3DTYSjjYAFB4VJQmWmwMErgzgXEAQJ1sYy2PwFLRXBNpSC9LCAhGfd8vUqpN9NBPiTE6bmQuXW",
  "key30": "5jEHFjwy3pdyEvBX9eiPdrxNpMLkj1Sgwaj53DLjXpdMFTjZsiVMZjnoZQDQJcvptVHg8c1eQaqoYqQKoXgmvzT",
  "key31": "3norAZqRDPSHwHpkL1NPNGWbvkB5KTyf6c5C5LAYkTjBdCNe4YQMzkegRihk64DyKA9opYkemSHFF6pcXzUthimE",
  "key32": "2aW9HY2sjDk8DVk2Ebp2QU4WHz8HszBE2f5d8DuYcTxnEFsGKky7gfvuYVbFwjcvpsijVGgPnaR2dBVbubyMJuZ3",
  "key33": "42U39GuAoBHKbQikYDW8PV649PEhL1jSjxMp3puqPUJMheRekCwzzYLVAi56PhEbuRnWfwX88mnmE9P5uCGGh4o6",
  "key34": "4NJSzhwTZMDBVDbEGLBux2Q85Yi9XBZz1AN1fKRXQCaWLvz6eSRuRjXbDXCoZSc5H3wXDWWpVFwjBSsr1aQP4sXN",
  "key35": "5HZKaLX37XBwWmptVN1VKHz3Nvmn8XvK1jYRg4mMdkvkswdkcUY8S4bM3wej8UoLrnWKgFJpMAhBNEWyQw27x4pa",
  "key36": "57P4N4KQazBSX3jiB5dZvgPStRrfYi5aBjQ6dmtDSjLyjyTXFWvtxABATpHxHV8EzinF6kAopgxDJZVFoATbPehp",
  "key37": "2tFVJsRqLMsLXD1haNbmhudYrE1PRYUDeb8C2MM2cqqxz2Ms6qE3S7T1cLLYA3UbHS4EwM2xCDuQDVjqXBd2de3D",
  "key38": "5Dvg5yPhUJXBp1sx8xwcJ8ff8jBV9YWjC6APQK3hvvx7Lze9d26SN4Cv5gb37QeVz8BGpGjSegFpCnUccct7BmuT",
  "key39": "3N7hP7eMHCaE3oXGEZn6WxNaBcsoArt4Spa2jk78whH9chdN2vjrxBn5PEzskiTjwyEcwATBsh3FFGDc5Vr4Nnjo",
  "key40": "4aDTZrvbJGMbe9QMVvSvAa3344aK57PQpguXZPfpNP7Ad2CQuNWWnmUxdz9BhW93Mck3UztWWoYcZq6iA4JR74K1",
  "key41": "4cDirszS4xX7vxY9WxdKAxwiVTSH8nL2XFF9fV97HRPkvGpKGc6AkbBX1k2pYn14VTw12pyNeD6A3pc7MoUhaP68",
  "key42": "Zdudtob9oLcbTKPP3GHVDtM72bbxskoHvwNGFH4VSMhoP28PNGK6j86kWpKhXgec9GStrKkUQE1JGrqTFiEPQi9",
  "key43": "4oBw7AuY8GX52WxtsWRmTn3ZQb3is8sbv2gNdxavzANmVxsgLMpxvns2kNF9i1aygrdrNxkifmqbZGDCDpf8tSjb",
  "key44": "5BFDkUM1wKYxF4WQBNaMs621t6SbyMhPTi2cjVSuPGb4fC8RSYjswxJusQUiGi22GkJroFo8xfjpAN8v9Btu8auy",
  "key45": "4xGZxNKVZvJczrue5TqVYKHdJWBT3kJLuFe1v5Qbekyi1JSv6AbpoMv7v7yPS5rsPwizsxgadWDFyBWH2VdknvXQ",
  "key46": "24e7wnmSFHeQ4UADt3v8TLkMJbTJzJ1uDyKA6xaS7x4QqLcU3zDVxkKbAsoGDWyCWPBtbCLDdCY3SvZHVNfggeSW",
  "key47": "2GGvL5FT9V87GFqPkz5W95yVDd5bvgij2ZUeufDxeqSrwUV9ACD2AuCeGdmtKVvtKXi1iU7WDw6KYW4hkA81VR1g",
  "key48": "2Mb4qp8NUA4G2BbozqyBuJ54U3AFTpThAkcY9ogzH4N3R13hCy2RmvtW2w2ZDZWGxpJ9DPfbDZPBmEEfMatPh8n3",
  "key49": "3sf8Q21T9Gne4fgFvWwMCsayjTjfrNrycz1pZknueJXevFFbYgQBpUEkTwd1BeNwvgPs8Uvv87VEThJ4bo8TYBqz"
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
