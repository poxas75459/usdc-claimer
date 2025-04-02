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
    "4NMGnF98gZt1vhXptJGNXg32VpRHLtAB4ZdetoS6PUGnahbyfxqELzYWjEjo9srfjThXnPFYMkPJX5jCDcG8a3Gm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43vCrCYBjARdxf2nqbCico9ymGZ6y1Xjiu2LZY7dAbd83ALfoHgD8KVyxdP4mfGQuCTaKJ9hcufep4CFEXZEuiQ",
  "key1": "LYvyvGxHNiwbJPYE2XSgrVipaPUz5ia1VTYfJtxTAS9oVr9P5kXsRiJMY6Aaexh3qRvm3tSUo8h7qQ7T9LnVDsD",
  "key2": "65ARu3pyEpo27kSQwiCAvU4zWJiHh8KAMZhGf4LYYVKmg4niBU2DShdVPZeGmoW8GxwSENyBi2QAvwCYfG884WTr",
  "key3": "2UvmE2MmHDd8QCaFHRZR53rpjbkQvbXf6aG75ihbXbFJ3YrP4mFkH59je6vdxioHB9vzXZ9Ff7pniZ7Yr6d3NWiY",
  "key4": "jG9eixNrBfr7uwsXPDPGiHYnZHHAx4jp5CjotnCcBT8kh1dKWRaSt7F4zg4udYztXiLbnayGeU2s5b7AcuVM6HU",
  "key5": "2RzNzGz3SnTbWfnDzRXUZKQRH9STvEGMauAT2Fkj3is4QPURWyha3AuVTbHDAdYPktBnQsWCo5pBvCL2KSRmwRML",
  "key6": "3ejjNhJwJY9qAoezc5N4cJGe53KB64SWx3YXNwRu56AP61JjEzdSvGxgr1TYYXxoN6PCr9tbrz7AWB4m7hHR74s8",
  "key7": "2K7TyeddLiTDwbAXoRf2nHbTEYbj1x9wfLGrTtjfd9msTQQ6WuXrmf9bo97h99joGK1ZN72UZm3eDGVoj87wPVi1",
  "key8": "25F5hcmhMSnp6GgA1GVQdHr5HRGVkJgSGthpVfZmN7aek34vzomKZmB9ZpvND2F7rjVswqzMxYpKCwwzfrDxGKwE",
  "key9": "4ijyfT6S1PcPuEuGhQWXQjWTohgio5g7Y52drQLGZqKFChvpSHmtsveU1cd3PtUkPpnMoRsjdxid7gRy12Kx8ucQ",
  "key10": "2fFB5AXzYy892wsMhRULPc8qG6pVSeYaLskNvv4gnDkFttmxcCyEU7KzT3YBcLwy1XWq9uM8NsmUu6BT1UctdPhM",
  "key11": "5QvdxxQQT1pvYCZK7WXGmq4p25qMc24EqYKLaiXwH2wFvuB71goMRaF8SVfVqPfcEdYLnzPguzsvigtirnPoZQk",
  "key12": "2YmXZeT74HE8ZbBvGQgVJZ7u9pK9f4FcggMf4FRjAMWiRoVibGRze4mv48dXzKEnHnyjQPdrKH8jXi1vpcwECWF4",
  "key13": "56ekiUAggWeB7gJQEKRJg19ZC3Zn91xv94Q8hCmbppsGYQAL2NAgZf7nxQL4gSZUpxVGB2wkULuxjMxHj28tzzbV",
  "key14": "5mww5SehLXhar3fuew96gCGbRKeBgEnYKyjBWhicV6Lqat5QgcS1ZVxg4z8zoEpZB7brnCvehpAxvYC2Bj3s1KUb",
  "key15": "5QDUFE6qioMBopLKdAyvG4XnPADX5sY96sqAzDd8bCUraGsM5ppqHNenDuvW9xjwrpo5MrxKFCxTxcnio967iAyX",
  "key16": "SwMfia4t16AUW7hhR528dDXWozRoBdT9fSdnHyQvgpnGqzPtdejRmYKvzAuR4iYAKqsVMva6xeZUzcqVwnfZ3Ux",
  "key17": "369Qo3Y6YR5LDvXp8jsEgxVyhTa7mUTPLvQnZMoSt82qrFAtNE3dMPPd9mopoUV6HtM2C1PqvMd9KFxeUMCXggVm",
  "key18": "5Ci6cZNmL4JKEJWkDKT7PgdR3ANim9nSnU4T86t3MDPnZE5xa1mNR1j6kNQnwQQNmhc96H1peomGNJtuaBPzxqKT",
  "key19": "4w1ybMe34SGTCiWEbG1LvB1na4GmpfeeWidXPu7xBh7oo71K77GgYpQbEqgWNSwUWsiTVMKWU1FWtkJ8ntfNRFd5",
  "key20": "3ngCmVnYdG6iiULwScEwPRLgkwrCvsMJAGqc6X2rwu2bYV4MpU4BtVLanXs6dsjeW3ZaCRqH3EhBWkL9eBbZFZTZ",
  "key21": "5wx1LPQcPocXfep6yZ6JFyqX1gu69Xzs96m8ZK8MhNAsAkUZHye4jYviJEZ8Kh4dVhkEg2Jg34ej1DusMnmWpZia",
  "key22": "5kxL2bCj1n8TxzJJ4vbXVXSmzJ9pNFbXDCmLaqGGuNaHkpkAkfhpDxx7KqPiuM9wGTLjJHzH5axaAC5NscbXumGP",
  "key23": "ky4pvLtJCxacQfFBJsXWRiVCMQdLPTKdNurSrsF2DZapE2SLdTML4aF8KEkdfmJXZqaeG3WapbCL4Qhd4xXSD5M",
  "key24": "3GJfmwgeWX1SUWP8mmae8DEfDTBqwZijng3caQ66ZwhTxts14THr5XCoFZwDJGgoNcrSmvgb6PeEArc8X7DyKX7q",
  "key25": "5krVHHNPH3S5erAgVFUvbuWnEyx5uCNwYsU9VLVUv5Zj7L51rmrWZ2NdgDrj2U5S4xGGVRM2gi7qxSbLXNqUu79F",
  "key26": "35VCaBMBPnhnVJuR5yF76ULD1fAbd3B7NqajJcvnCzVF6gJBGQs6TzaNg349nrL9a5FgUsoZy24kkmBfyPaT3A9",
  "key27": "3n7DoLw9BiL7cP2kvomiyLrXxDm3m7qeCaauAPtVPpeYF3JgyCyxn4etFRAgk5ghASQ4uvCq1okYFVjSnEDodVqV",
  "key28": "2kxTXWRcchKeBUfeVpg32gXLii2AFpPvqruGnCNevui1E8iMYofrTbK73qXMcSJBKJXzTX81hS1TwqP5o6mVySE3",
  "key29": "2nF6gc8uAesM2fc3MiU1cmqT34XhTEUbvunh8KLYRbVHwLuYGVZv94f5cnydFhp44NMckaE3bJHQbqP52m84UhxR",
  "key30": "2hAsQnTEQRooEQqtN8h2DeVqbG4hrR5dFFtJnJL9tUN9NWt7Euj2jgL2EruWKTkL5zGrmWJgvVdTQrhnMWYQjcRn",
  "key31": "2BMBqGvrc1rcXQsvyt9oVLpnXBDACVoPHhAEDmCG7pquajy71jtV4roTGTwikYwJzSMYQr4SvM7RZDhRSgedZXfu",
  "key32": "3VDHn6CJJDo4d2sDKWAxjbXSqT3CiVB7vRMEAJP35ZpoTcKikx14stkZUquAZHx6tD4ebo7awqyJLM2jYf7gftvF",
  "key33": "4UuqSvV4Z9Dc5hhWGLkkvQbVE3sHwg7N5KEp4zGVxXAyAGrUDK86QwZ72AteVBPMwPoqMqL3VgmAfvAYAc26Bi8B",
  "key34": "WesVMBZzZPerivqGMeu9sHFR6hFTfpkbiZJ3hvhMENS9ebqq3bCbzCESJj2MGVzvH6fK3FwL3W8HiVTMP2kxyUS",
  "key35": "MWHxisF8h52ALzaaEFpU7tHe6sMp8uefv7qMgL1E6a4qZaXYJ2DFouLN8v9zGR577btjJJFUXn9jc9MyroGtPC6"
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
