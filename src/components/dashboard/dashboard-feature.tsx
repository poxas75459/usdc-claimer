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
    "2V3T3tmhRmQgrGELAmZChNYEUPJ9Ev6qVypxhXCpXp7qgyX2FiBp6HLzNt7iZA5VVoVWN2aSGs3Fo2dGpkgVJYFQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22dkmUjFQnG2FfFnUe1EB6SFq1p8fdjCE3WvC7uJr8atfCniiUFqKuMzrJvHzr43Mg6RPaA11FUdJP8QfiydjjM9",
  "key1": "4ERG9MQ4UeaXjc6CtzJyLfMvE67UtQ4Bj2oGKJHPdyQmKKgAFZ5nqHZF6my1xt4bABLkgdtxBVoRgnnTS2YkYc6Z",
  "key2": "26mB6SNY6pdBKgYr52XX4NxTaW1pQzi62MLHQnFHCV8ffHBQKc4LsBiXEzAUBweUzrZLHW392H5EeTDHPKJutwBA",
  "key3": "3JuGi5csb4NDaLQAY7Ty81tR77a2oyc72rVqLx6Mw3KgabZKpS9DP2XvHwauLwCXubYCK7T1EhGY39566j2sxC9W",
  "key4": "5KdDEptEMTxr28sNsZCT8TUqsgMp2zmEzTEw87Pg2psUjb1ptxevZfJ7DiXTy9DzKZzFtsKJrmMysULdd2neTaPy",
  "key5": "5KSWftDrfcWQaCrDnhBwGXYsuGkBSgHobLi1eseKFExWAFGurtjW6qGfP3sYwWVtcsnvuNpD6CXw7uKASohKRip7",
  "key6": "2Hc3LJ29YZx1Xn2McFesy4bFJ71jTDjNUyMgwXQ99sgnRgVVF6Wn7toVZ5RLT8HgRPSYXU3XVPo8WzaaecDvNYwS",
  "key7": "42Ub2M7Hu8mZm7WR4Sk4rZN36XEG96WQCoVcU4crnAh2FrGzw9oz5c69pvooJqe7rFEpJ2xCXZPwFJjEahh6YBs9",
  "key8": "2wLFBREv3LBr3Y3FCer5sDK8dVj3n3uzaFkRpFjK4hwuGRNVEn7XLP11kpXz1roU61rYBtVVjCRPqCAforuVjxYz",
  "key9": "RvvzTWc59DthzmsskZVQqWXuz5S2hmN1Wt7D86GKJTVWTEghFDRe1WeX2VKtw3QNivuDsDRAHX5XprSkiee5KVE",
  "key10": "JiTzSj5K7bpi85oaLKEHQVqNc4KqQXUbo5fHUF2iLHfe6j7nLHRTY5AGqHpQ8dBpvZWRu91TsWw2MBQSNpMbsRV",
  "key11": "2PX5cA1549R4HkMUFHunJHAbvW1XK1qeAuGRix64ChagGXH6oBWD5BXm1sMtyFtUSbXvSKFRamrkvSxz7jyxYL3d",
  "key12": "24aezsaiBsVYsufyjSFcyJimRKLGBHRqLgQ9v5Bs13rK5ijbrmhhnaHNUiSVi3j8oFBSWHD7j2VqhCjvtnMiT2JJ",
  "key13": "2Dqr7Cz3FdsgGsGp3T7Nip1WVXtAPWFKVhqWGK7eimubF4L1vcnuBHRk7JUca2McXsfBLnNuzvudMh3ommY11Cg1",
  "key14": "5JZND3QYChsm7PuPL45nMXAiJPzNsVgCUfsBkJJCTwcEMu8kqod8QTakQfUy4NgTKvk9q7PFjrqSnA51dMUFx5VW",
  "key15": "5hw9Z6WZ3VwQhdjs3RyFMgjgr3416E7szr9BBxkCePFjYLpAZMjy7yEsUs5tVdM9robewh9KkHpQ3vcn6JxhposC",
  "key16": "4uJvnytfBVhsngsFYenhRBJe7QimNMpziKwcMP53hrhjSvT7vB5Ct6EG2XU3XCgnr3YTAT6SWbQRU4M9QzrtyRfG",
  "key17": "4LyjqNW6k7ttxd3XCu4DFLcRVeJWzFd4FqxNGF8mqCcJ7hFiRHiHyGDm2wCDRm7qHnJQgNBa9CzGYfg5GbRjAtTJ",
  "key18": "hQ9FU2MjZTCFhoAc5EBPgvpMPttHK4niQvVTaRP8b83dwzR4v6QgVjXcaMJTyUypafDAHHNB3M9qVeHzLSvzJ1i",
  "key19": "4ppcHyooiEmgL29eEKKQvKLCHh6hFyKjR5LUvGV1dTo65QWKH2mrXssqGjpPV3s6uUhB4tx8odUPoYTS8h4c4h3A",
  "key20": "SxuVzChwgkWYKf9fz5cpJo4MshozwceEuSgxD9mVce96ptfBU4AZCviVJy6iNu9NzmiwShUJwuGpbrgYA68Fdw8",
  "key21": "L97R96JbuiiSwLXDvu1eoLnkk4yHPdHPEGxKxjJ3iFpPDzyE2e76bYQcUCjqBnHym165s8PYbydWSDaEoqowEQ1",
  "key22": "3wVkCA5T8C17S7bseXMRZA14HNTAojrgJYjQwGyctBTZKtbJvwjnNueJtE7rrx3x9gzQYMBRFKPSnuixSSBv8t6X",
  "key23": "613Toy1wY796eCkQoptwbCeiksWafnQ9fnpcV7mkTmBU1JUSGCRNkHPqHjbcBkHxt7qVmHSdCUtLphrAShkJqRyJ",
  "key24": "4QRBfFDutjHs9oimTmKmbogV3meDG7ELZav2M8Y9uQ9Sc24poG9CLrdWY9RNX8A1on7Rm4u3QpCmeE4mA2dhx6uW",
  "key25": "4BK1GfShxwEtDVdW7vK3EjebHzdvufygi7R9rjpHmcBR88HtsrXBCQu3XNowM3REhkMcv67pgNAyaQfp2FwkERPW",
  "key26": "2NiWLLGtkXioPq2Jf8do7y8h6KQRecs3CuTJxs3PS3tho759bZP5Mdffeu6VK8NPcsbw3grM7HkoaD7va6KQCSRv",
  "key27": "39gEXYvNUkfCg7hvrWxMpHz93ftX5piQSuFHeBmrSKUeBxRmz1wXEJD74kGghXVyPoVApkNtquQYPkqYGiLGZhHo",
  "key28": "3XFUmm86TXzPSRctJbC8zRSNgWdVWrzSKQbfgBm12FeSHLqBy22BcmNQK4j6CHNp43KCM8FSXhRHd15tRPJGFz1T",
  "key29": "2ZorTVfu5fJSrQ64FZ1oUmCzESdG8voWQwVs8oJdy9XLmhBE17jjMKLz3ufmqJMSASUhhTpuK1qs36A938SDGLZG",
  "key30": "4uWdSGPRFZ3kWfBuy5PR24zrMKMAGuUL4V3T1n6L8ekXvcULuo88XXgRv5oGmMUJahDo9eQhTbeyooBryehdanXM",
  "key31": "35ssC6tcnC2vgGy3ghAS5qxjAxcEvAo3an7Cnj2rxUw8ADxkbe9yVASLCoXRfy1ZVhJNBgAib1ge2iTxAQXwnc6J",
  "key32": "5nDxkac8LQkv9NAKUaZbqFWJRqiupJW8ugxVG95dB8u9BZgYSTDUXtkJ7Lj2W9qf2ENVNR53wN83nbUfzPZEUdtN",
  "key33": "3xT5K2Wr2HARaZiHU61CiBMzyHYz5JZjD2UNBxPC9FBkXfdVLbXPMCW5r3QW8PEwauchUrZ6ZDWbEEtpXuPgCASe"
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
