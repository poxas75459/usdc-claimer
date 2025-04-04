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
    "4grNhyxTASB2VTeQrmrakD2hPqaqTU1vKk7mvWrGdi72Vwytvm6yrLN3o5tRCAiTragG6vRgzacUk3bA1QoA78NK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Py6Fb4pd4fGjV41q6aKLz2K9tNB3HX4aSMGz3dfDakQzx7B4btbEuiZ32KwbnjMV27hRgeqGo1XYYjDrNUus7R",
  "key1": "9nDTkTcj4ZwRW9GVnwrT2VYLWdragfw9pubDD9snvqvyce89UBKVYD46bPXcA6CAQCo1FaQgNQvsWojQirRWfhR",
  "key2": "5PqqsH2yXZo2fAeSG1hM7i6NGSfv38QqhcrVFfpRD56X4TnWube1Yv5vkzV11Zz7X8EgWYc5ThL85CEjfng8pzVw",
  "key3": "3PGtHNtmyfd8EaKujizTkYwnVgdxJHKX3SSAGpPVg58siWbcyBQXnPGXLcbPyA8UUvQk1RvUfQFPUEJKrzzWsX9q",
  "key4": "5LZs7fg4iRfXeWXuZAcYywbfkfGjMes9gf4E6CBEUpm1xMYqqzb5ZSUAZUKkqMW6FiTn8rXA7SFAm7jk7xyJHcPB",
  "key5": "2NBJDYGVe6mSqxfmrUfjAq2B3cRyq4hnsHhFv1vCe6udf6eBB1a9qLGumaXLSg4Yx91EF2CFivnW4vVsP6z8M1ak",
  "key6": "42142nMMz73URy4hD5xJbQCedypWya8a1TgdDe21NJQaxoaipZBRj82fnujNH43GCypYyy2QGiL5Prc7Y8WDyUX6",
  "key7": "wnoyB6DWEGbtBj2ScXtCZU9uE7w8DNHi72hXecmZvzsPZdVdwqr4aeU3DS2QRSj9eME6awAYY7ABnWz7m7xS3g2",
  "key8": "sMqDeBdhm1z14ZtqdSHM7B2cHCLnc9cdTwXqDPYkZ5iFZWZAWWsTuH6KfU8Bf5Nx5GGq4SegNCm9sT9KCia5JQo",
  "key9": "4ZxznrgTVnqZut1LLjc4kVF7Wg3khNg5ykhWZbZvHxXyNuaYAArT2YBQ969cCqYVat46dqdLV96ShAsb8zbHtvFR",
  "key10": "2ZLEdQhvsdMFT3FfdYER1mtVLpVwmp9By2CdWGW6M4CnH69YXumHDBTyqigCc9tCdZ1rVTzioVDUhwQTpYaeCpSs",
  "key11": "4mMRj28WjLw2XMXchRunYWM5SJRM9CXjmwHp5d9imVzBrdsERCvDiW2198X1VdcftyWeKr322nNB13NMoaudzwDp",
  "key12": "4C1CFLAfybD8EwSHrjU9MuX2APHYYH2kR2GPGnrn543LAHNYZt3TaAW7mj8AJJ3J5MDDdN46XL5rsESapfkUwfcv",
  "key13": "2wkHWHJaCgLgnrusfxdWoY2coURNeKFKvU18QWR8LNhWJvSHSwFHC94edRtVHm1vJjG7yVU9nU9QQ45WfFCK1FPn",
  "key14": "47dnpTdZgqpDnav6EMM2AT5mtBtQpTNkBmtKtgBgbt1YnC9u4R5AYXBqZL7qSHXhVKiv8oDgwQgxbz6qu2E1yetz",
  "key15": "gwd9CcmDMau3e6mowEUpRBYLmiWeXvvLzu9caVWJGcuKh6VSRk46GcWqXhN3i9ZtNPsgXTCQD6EnxoHqgAtSwDu",
  "key16": "3tSHN6E7JbRCtHkRPUACKzncCyywTysr42BKMtWECQM6APQs4FnugmDfbDDSzJmzUoKwrKn9aYssokPZ3hnX3nqv",
  "key17": "LX2w1tv21thWeATzb9LSMu4HkgvRsDUyXjWxWJNbPHWCdQqN4CMjvp6EXq2FSQ6rFpqkRH8Linan7bzGgqYqkeN",
  "key18": "2GYAmmMiqh3t1AoMCkkQctn3SKbjTh5aqnFcYDncXZKzn9T17rN4s4HhszX2YhtyGvzEGgPd5TagfTCd5wnEssoy",
  "key19": "8ZK3MpPQwP9GFCr21CQnoEQYLZ12NvCW1XXsCcxxG4hDiiAXtUUSMVwyCD7dj3BaogApVaE53zwJRRBb2AfBG2F",
  "key20": "3rJQKoGUapi8Zg8nSoQKMMtdWbqcNiQjb8yr8Af8iHmVukVjM9NRfDR5D4NdfAsP5VNF8g4LCErdwbhs34nWd1Jz",
  "key21": "4Zy8qNUCJXsJxw77njVZrGRZ3Mzvm2291D9dqB97PYA2ajWA4ZB91GfheNDd5mTKDik8uDp8Y2C6VveyeHete4a3",
  "key22": "2NPjmxe8fNUAtu3igEVN2s3jfvvj9BAUhj1ae39pEmq4tqQWh9KX8mtD98hFfAEom3Eorsweg6i9g3ZzKLBuFpzK",
  "key23": "44jnPGdSYVCTA4BCFXDVHhTHBNQiLcEaYrB7Em9S4xpvrh8hWMDm3hS5CUPbauhwagNKxrQQcpmRdc7SVYyQ2DtP",
  "key24": "5TbLL6UW3KCMQejULRihXVN7pY5UY1qrB7muLKZEsApjSdccfqL5pYNeK4uEJzkZaCWgF7UhG3N9QCj2uuKQQL8a",
  "key25": "TMQGiiaSoHgbYTHVMYnNMVPmGQadBZh4dmWmAC27pPQF4K1SDDVc8u2qkH75Ray4NbnPcXUtmereDwfQNjJ6Kg1",
  "key26": "2MNrcHDLjx879pG8DTZGJGugndENPW7Sz7Q6RhryuU2bDxch9fMLkyxnYeZ4NbFQ24U6iQYcKXbgdWMiSstjT6kq",
  "key27": "3EbSfQVBU4Er4S8f6gYJwu6iMLuQFCe6iXkK8zmQbf4wKGtnNFqbnQnK1P7SmxnKYejwj36czMz6QVquxC3QpQye",
  "key28": "46wYdoJXAhJAwsT8QGrLyKkaZaW8pytGg8xT7YEwWD3RM1cxXCdsocKmE4mUy9EeeeBtTeTZLthN9smqmXmiNW2n",
  "key29": "2vS4X9ui9iuRpr52oNbEV4kUmt382r5Ud3W21mqyMmFbit1Q6eRjZvVBGNd65fFz1uxNJBXFybmHFGv4sc6qcD3k",
  "key30": "3sPGqtZReBdxVLV6os2T1hW3j2LhQ6D6Dmkvok8MGkYngYtSwCfYCoxUNpns1TBAAaS45E5TWgs1CbYKniKQb3uk",
  "key31": "ochP3Y13LGYbtQLenDzPQy1C1GA397kf6nrmrweLbDPppGvUa3MbdNHWvkbDS6Cwr1B4gT46wEuo8XHzD7X7UP7",
  "key32": "2BgntJQkkH86nBRdUuwrcQFwLnDitSQQmfPPoHp19uutJsQJZJR2q5wsWePMaqvwrHQqZTaDNaSdM6sBCScoThCS",
  "key33": "5TttWao4yXdQV687Tpk3TU4uiQcd1GkNvRmZVhc7WSzwvWGEpXh3Amkh1kgEZRhhCfdTfopF42xd1ujiPGgS6gmc",
  "key34": "54KnmKXMBnAWuhBE4GL5j7kzo872tuT2c6PFxrUvhMEDyYHpeG6L9Hi8WTJLZh2gG8CNMdxALJhUyrEEYESgnxde",
  "key35": "2yha2K8xAMZVmx8uERfoCaueKmfUrvaMXNQVpQjkSdCtmmWJAiVHmWVzkJtQUQgtwQn9xUCcFdDMxmrgaKRUbqih",
  "key36": "2AhgEwAZ47erTd1fyGmbCPjtD3QhpFvDhgnLmiGRiMj5ed9nEkYYEBt3dTiqnhE9starLvsT14AstNVxWXHef5as",
  "key37": "24eR2jeBHAMDkg3dWXmhkRXVhnhF1HXb6vQchNTNxH2b7mJK16Wu5vJNmRTwJL46V476x5CTd71Fa6T6fJtB43Ys",
  "key38": "2SSBRGsREgi7ckALYF9fjQzgobianQuQcgwCNQep33UWbdAMEvPDWLKujRJEhqY8NQWyVuYybp9duim28xQCcr6x",
  "key39": "352c3EeuSj584NASQLKTm12toaEXzs1UUfHA1Q1PXJ1o9WGK8c2GeBUW4rm781vWFgxEPcPpcUfPbjqGCdPPfVyB",
  "key40": "3CmEFEb9ZKrTFk51811WEwi1EhgPqA5BzPjUwUBGderXvK9z4jLNt4dv4G8VXWocAcM41qiY1iAyqVJjQxbg7uRQ",
  "key41": "2AM7xrmM6BxTzfxNSYf2qzjj8wPzN3ZrPh6p8xP49TcqFAAdM9DqYw5CHBwqgcwG9XRK4aTkhiL4wKg4RMTEbBBt",
  "key42": "cjXUXNb8nAGawuQpGv1ctWmw7BLgQwn6JKH4nvnq5PABKW9AraQSGPoR2W6M4eCJZFWsc6Z7KYTwszUzwrHaFzi",
  "key43": "kvDuaynPNHMSe373QtWEpRHZqzyieiWJ5HGNMiHJRNHcTfphhyV4bDuMjhXW3tXMKokJFmFJ9QE9vumtqnqgiAS",
  "key44": "3NZ7a4hFXBdDiKXMb3ZmXij4hbz113zbuMT2nrKnvEGU3ftHb1r93iHfwG4KoxbaScvMRJExcKarP5Se3TU36QC8",
  "key45": "AoQQT1DVd5qgDpRFbB3NmrSVWg95oDgEmAwaJfE6roo7xp5urRDZ7W6WZvj1y6fuenpKGePPbdxfzRE8voBdo3y",
  "key46": "3YpjDj27H4ZR6XEKTGJ2ZmvzbUhfftNiRc2w4o3nNC138tToDwv45qQryYmV51iahLUe7sovFJ8fjRT5c4WZKwFv",
  "key47": "5gGFsUzEgRMksG47FhCY7xbUSBTMhnVjGEjY56gAGUX8whGpGxw7X2Kp4KfpH5XcFksVwUEaRdCbXzsrFLapmzus"
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
