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
    "677cKk8hwBHETV9fA8fAahePu22do6kk6QsM8653WVXN6iScwUExartJnyj1DgV4q55JH5nyGS5ek7tVabYyFkdd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GBy5cvzouh1CvN5j1wkBhjub7bL2EZzaA7ew63M5RjM4B39yH2eFem9BvaEai9Ej7WKLwuoiS3F1M7LLLCrvdSM",
  "key1": "5G7WrhmrTJ6gKQ46s9Dr4sgnoznVXJfhNq8PweofqFQPTidxmZnRLpKST5KKFoZZ78ibKfFYVtXE2MbJf7UW43qK",
  "key2": "4WCPL9is2ykjw2mpkaZruECVcwRd5m7Yvr3UoNYQeiocRUVVQzxNU1coASk7WQyZeY1SNwFwaTnT43B9KPun6Wim",
  "key3": "5hBrqba6rR4D7WzP1GjhfgjiqKB91iH8eUuZrnRyoufvXmgvhfzXqdAqvXEaSkpMiVkhoGAuNe6yBZH4iyQy1DX8",
  "key4": "2GSEF9NtMR5kX4rADCAdQuFfUbVU7nMxpwqjAinRkvGG4jxhVMWkfj7QfNsCeUpV78M5nwhDZJhTKDQ7ENdwi6J6",
  "key5": "2mF6CK5vJWR1SsvyTXWUNBZSahJNXSC9ztTRjRUeofuoMYi8YL7o5jmnw3wgGpMTieWLGpnWKvXdTHTvN1omSPSV",
  "key6": "4ooZMmA7bNQkzowa5t4qGACNu565HTCEcMdfwqgnE3h8dzVG2tKPzWaxXekR9Dn9buHSuMqfdJDP77RZhnnfjURz",
  "key7": "2RKZDqCYDK61uGNdFtCqNtR5fELE7Mw5atbFVwcvLY8i2gSvL5KvtibSRhYv2DFSKN27883xMvoHKPTURWHxoULs",
  "key8": "3TZqWUjJmtvgfjVt58yABcMMNTFJoh3F4mstVUywznXf63QSt9bm5Fvg4ja3bwG26b6n2pUqkt1tkTcJPDxWJ3ff",
  "key9": "56vabje7xMjzBWLVBxbsrVGWACyhGAH1TfQhTidWL89A8M2qX1E43mzCSNUcMwRbbgGs8NBkMycxS9fmuc485Gv4",
  "key10": "5i7wK4xkALDoKkBpxd1ujVGSV3ymJcwJ6yJaMTHNfs2HcwN28ntSsPmQH8xSG269E9h4d24yCqXYX5KJMcJ9Qw3",
  "key11": "2dG49AWdQoY6tnqy2LNnxxLkEfTyWi9cVtjd72wMnFMUGCPnwnrxfvn5GCDfGvoZCyR5wVjtKXTpgtyZr1EPbzvu",
  "key12": "3iaCj1UaTDFtpa1vyfKsMgkzuD8zitTNsLHrVWcL5iudE26FGWaHPNUtYSna49bjajoCM8VEcXwhbXaKtZezBGCp",
  "key13": "3w5rRNGu1bEhMsDz9g2YmaxzwWxoL67U817LGTR61sAV5rmeEeeGX1pHAQucydyg6FW6nfjhWQCZxihFPu45HKNX",
  "key14": "3niNRgQAnuJ8dxs94a4TtSto6CynEhe1w7CLZ2D7ecmaMNNwGARjAdJRUFhjGC52CgcSNR12STwz81iLQwtFoCTu",
  "key15": "5jY71DRBbrAngFBPqohF8dfsXPLEtLzypNePYEyPexNLFdW38H5YqoCCrU8ewty88PoE7S4VHWRm8iRbKcMyGvoc",
  "key16": "3nVdbgeNERBnRmLQAiN8mvbM98W58NSovCKkG6fh1SvUNWMHTCR7kDM7PYadYAEBxspQBazVCWEu5Gi6g346yG5P",
  "key17": "sLd2gZ6zXG6DSwZ5Pdx2KB8tEV2kVxYTpDXkPTxTT9nRLBN7USGTaSU6ZmkVgEjcFhr4JfepatspW4SxhroLvDT",
  "key18": "uzR6dHCNc8pmKm2K9EUk7YwkHWSnUSNWPBkqUgShyAPC5usgrY7rmdAXAqHrrunxMpg9VxwjevoUWjsEmtjFHr7",
  "key19": "4RHCQsJDMFh5A9kZBmH4a5qPiYSywHG2RPqDt9mAFU8FipuBTtpQhE7vZFVrLhZq7URAi4SKg6BqXqpDwsiz7YUm",
  "key20": "5SRCLQ8VJpoqEVV8bzgTaDQ4EBd7TGW9bGb3mvRmTsmpvRM5FzNPycvy6P1ZctEXCi7gnfzembBAKgFNPm88LEvD",
  "key21": "3tV4EU9rA2E8BhDt8yPCTjbB8qLFWTPzeALCi86ZsVuCKxwPau1cAy5vE6eB9x9fhAXVrXbVpm8hSDrUJAgjJMVk",
  "key22": "3WBG7NbcR4ydM3um7XTrQU9y9SYYuCR55MTie8YBtHnqVNn5Z8vEe9hZjYnKrbrBRqWysTyJ3QayPv8kkqxiXEZS",
  "key23": "39wzzKEp2ZX83S6VRoDe8qVJkDE5n1KCAbytyuzsteasnSaz5Bc2gaJbUpQQJSjEmG4GK5adxm3X7meEktT8augL",
  "key24": "hLssUqWuz2ZeqCbUUZRhKyydrfvNVUUry7gJCBwa8ZNZCFAkyv2JQnDu2fPvjShuNXSupzwBjTu3z2ij2bW4EJY",
  "key25": "3uFB7K9sHhEDHmthpKAPuY1KRbSu76mxe4pnhfYRefof1oVhJLrwEf9zLjAtQ6T4MHE6aK9415jN4X8DDtiHJKWp",
  "key26": "5gHxeasGAKcdpbWh3irK32X9PEPosL2ndBCWonmLotLq7bfUwE3P5GsQ8UXB4KyWrLEpm7tSbASMC58bUPbSPtJR",
  "key27": "5nVBPXPSDmMMH9dA6mHcxBRj1HX1vHV9CYbrKkupJ7Wpoac4xWMuBrJ9pSpfXrSXrB7698A8at65TEfAVsGReQ9C",
  "key28": "Sh23VSAFfLX2Whx2yD6FZYV3k7egdGfFEXARqkyUYv2jEwic2WnJrHR1WkZMbU4ZMYUTWSZzM63DjxPikFujnLg",
  "key29": "5gRtbGwRCvgojc7qE8G9PAeUAhxv7RjT2emeqhU5c7LTT2uSs3KwwEjTWNdFFpfMAHfEe9YSbcS1F79nvaik5NVK",
  "key30": "38EQDMfpEXKbrXq4fv6fMjycMFE19sp6zCEjTasHinhVGix8WrahXbHBAamy5Hgpm6i1XPAapaB5SmGkHFNGBDLZ",
  "key31": "4zo4vFrUFuRN21KxvyfPUHmyYNfogj7wTopuTmMQoNJjJTgeAWNYkL4wdUKeCabx7hvGZ4oFT7kuwWuhMJHbJXp6",
  "key32": "iewxqg4Y5FVxtG2GqwZLsmQaDJFN9pUPi3kWq2nidzDcAEGzfQ7HJgyJPSeRdNAx2NDsR3gxMUKKiamK8yzMG4y",
  "key33": "3LoqufAskDXg6p4AACXANRerBvjgXL6PqDyCJVPNQpCL3EzSeHG5sz5664B3vfJFMB7R4TzUZQQwyhEsxJuDJTdS",
  "key34": "2eYr4233abb44CuMYNQ76upkj1TVxSck1ondepcSyvtyfnoRKQgz2Jygvhzk2sXkh47i7wiFyWsPVvBnNEbzgcve",
  "key35": "bFYfcyuJfSYcBBaU4XYYhhFHmMUkEtEFs8X9qRwDqpZrtWywdV54qz1bem7648PNC9DmFWVVygL9XbJQ6dCcJuk",
  "key36": "5WKKzJPcrQG1R1Tue6PhPaFEgoPhHKaLdJQyDLZA8G2dvvp333HQVeDrh2qP1t42m23tdrQ3qk51SRvUQKwdRR74",
  "key37": "3Lke1LjqWyCZVvPdKaDM3eTjYG2VCWMgzecM5T6k6FJpZi1Sd4aLvofSGTiCe6eEtG7jx9zwAheZKo4wjCF9L69m",
  "key38": "4trSo86BsQA5xGVjggAwEXUvXrToHELbEz6StErBGHH8qQXGJgwmQc7eUjprhAHZbgaqhRyM3dgx1wT8sFXPniFG",
  "key39": "4KxiqmHLqMuqgKibrc6iv3AwU66gJjtsDiKndroPJTPgsTUSxXvVM1PQSNeKB6Nnu9vB6QnyzgtemSuz2FafJc9g",
  "key40": "mYAqaHxYvDdPymVnJKADv4eAaMc3goxwwAkm5fZaU5weAxmkhMT5pxBjArHSgBcp58wnZHjbCNM9kuG6QAXzQ4W",
  "key41": "3qupVHJTrLFDEhgm2PgvSNGNZkxFkkq2MQWaUphw9c3s3Wh1SLGsKNfSwbXQTvVYyXWuXvRydF47Z2B2rAN3Q63u",
  "key42": "kTgkW6dKEdrMLBZTHtxARJdiEjzwKBkfqMzgataLa62z4K4hESqg4HFzwati1TSp5nkdrWWmzMh3dkRiTGBxDY9",
  "key43": "323Rjq95X5V5E8HM6WMCXKFJnofL9q7829Jsaqtk4UTLCHPjsW37eGNGjLNgeetmHh9V1mmwN9eDpEySb1azL4VX",
  "key44": "4a8rLmJrVpjjJogySTqBCNhNMipghFSmzNbnnGatRxAgBJfcb4cjcuZHXWwVKPcJ5EfSNXbh7oXut8iRbrwNA7qH"
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
