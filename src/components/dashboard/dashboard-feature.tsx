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
    "2HRw4EsFR8WQgDvp2k2Zz3TZeTYSZcXM6haY4d6SvhCcDDXcuLBtvv647xUu1Gvg7H2D7qYvEpKNZHNrr5zhtW6g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DfV2H7LPuCmYSiWNTpGGPA45FaPL4xzc3TDLSxjGc6x9qPDEFR2VNWjLWgmKt6efYx5UWCuddYAW6Ny15KnLe3e",
  "key1": "5G93Nk2ibgB8huubo8o2LFfvBC6Mrobg2wi1b2DvZ6hpF5ewvQJ6Wj6UVqwL5ypnRXaw62HhoTLyV8dPpbVLV6eQ",
  "key2": "32Kue2MKxomcbDTxqoLAjZ4krCAygm7XNAaVSpTMmB5CjcbEVwQPxzB7qyZUuHcZrdEbJ2GfX7jg9e2mqTSfYMoH",
  "key3": "5dKvMhuQFJxd6YUDZjRvQzY4qJ5kECYELRhTccJDb4PCx6j9ECS4MsF3ByvCsAqt4jciGJVxYf6vxYEBGmi5UPuX",
  "key4": "5WoNUwPTe5FMgaAD1GH8uxhT7pxF8CC4QESpAdYBmAfoXNs3c9H7AvACT98oRuS7zuDEgbPn6HBne5bG35chUExY",
  "key5": "4pnNyWNZBvpNWF4ye8bK9gSrS4YoxSUq9ooZDTjeGhqgmR4jLVEJY4jsQ61TsPC4t9aMb9rEFtwYxf2G6GAZwzsP",
  "key6": "HCD7pbwyb91pUVEiu4BchDXPU4LzwPeSL24h3C3oLtvwsSqACJ94YaYpSJEgwU9qsUZz6CVMyj7urVCs9gmkx1s",
  "key7": "4FBXoKKwsqVdjcawbJTKdtFf3p2CetXXTdWehRqr5KsvATabwdLUBkB1v4XV26WRjipHnBizVT6u6tbBraGgXdi6",
  "key8": "5f6DFtpnSCKqXNWypLocWeD356E7ndmuAxuJGSRtvMELxXGHoJHTcsra3fm1ur6eVQqin5XDjr9Bg9q7z7GGeWD9",
  "key9": "652fS9DXmwyPPKC2HBuis6WN3unqeL7kADcfBuSPMi73M9TJTwsmMmB7KZgVkUL12B7scG2VmrtK6KiDMTK8hEcQ",
  "key10": "eJVdrj6SCZzU22ZRNgGrtpeX9UswypdboASjSRP5b3N2G5UEM2jxZXoGy7qVNuz3ic8VKyM2KDH2sbsuYxdEAzG",
  "key11": "3r97PMVmnqtCP9vrySgaXxTQQiDVvHSAbCob1CFoDfQtEFsxbRLVUffB8k2hJvzkzbpgnY8tz4HTtCaes18atfDo",
  "key12": "52NBzyxdFtQ2DkdxQXonhuJYNTyiRD2Y6YKEu2AuXen1Ef7bdFBKhTsSYR4YzYEkBKsMVXw8QpkqZb35UaCMsbfY",
  "key13": "39Khbq3muK8TxF78zHkUEHJQyfzGJtRfXgy5nkHJ59QNZxRGWN3qwynwYNBtrjZRror51PpHK1QG1hg3tkPYxxXD",
  "key14": "2wmk7sX7bNTKgeYWg58z8F91vLXZWrH4cRhXacCWV4AETLKaWzeWPJ5Lh9aF8oCQK5RhtmNEZprmCBHN3qgUKTMH",
  "key15": "2ydhodoqJXR35QyQpXBtttv8Y2ppDqrNLfu8mzq3rWNH6tt2NzhK33sGEYw68VKthZUNoo3D6swRaegeBXK4uPjo",
  "key16": "4N42erVyoAcsvqQCtw4x1F16XCZHdfX2Y5Q3SSZ97gLThVozwhZRGEujNwCtjFec6D71D3hg3ZPykFqfjAwEbd8q",
  "key17": "X8JqR87DgUKoJYWXNH4fJ55WWVGQJ25AJWPdVEJbtqDGG28FDvn7ihFxZdVR6TAwiVqimjtKmxCCEcpfgQevr8K",
  "key18": "4KogLf2eZZJtKbeuZKqupv61LFcVSACH8dX5WcKeoUHEeqaWexWgsGLbrvnatP5MEwnDbgFFEhpLPrJQknK6RE5t",
  "key19": "5jzD4Ctr4M5gkD24J6AV3uUASuTB6JL6zLNTpwfWYk6oNK4iBQmbJWgrBSRdGyAhxC7qu4DgPbMEY7g9rcbDKHp7",
  "key20": "4LXzQA6x3DQzV1vvqZMRY4Amr9jAS7MHYS2w8AUc995xJNFMinazkBjjZkBwVPX33aYbfzWsosF2Cf6dK5iRDkpj",
  "key21": "5oBsLg6H9V5Xa1Rj9AXfHnyeX442h4adgy9pzn87kWQiRYsR8rFjNXYcT5SofNsPWrsTRGwg6WEC2vkSQjeZQwWX",
  "key22": "52fNttscxgeb8oftC3boaVei1sFqtWtpD7bHaqaLspywigMG1uUBfUg8ANp2x7fvLshYz4VgMDBybV2ttc4HANQ7",
  "key23": "29UNVEjnGgh5Z6745D8hVGVyjLQLyrVm2U4bPy24ojmKYdSaASRLrP54YNhaxtXk8nUVB2qqb1X5FRvwXbyrSQwo",
  "key24": "2S6dn2zPJk4fJePcgtRr2xkHuAUisqocH8fHBuLxkWZfYMM2ene6QUcCWAZbAnRFKHZsReW8oWCQ9EhQcKEoh72Q",
  "key25": "4oTGqvYZFDrwYTJ8VKrip4zmJzbo1t4tk47Eg1av8Rd87tALBtV2VQanUQ1FnwvFVA5M6z1xH3HuwT6ihirnGbFc",
  "key26": "N9KjRC7dUpRPzFEKukiHmMcYcbuZWwkBEga8fLrgNFjDNDYDyy7o4hH3M134vcr1iH98YqLCgxW1bMXGM3Z2B5a",
  "key27": "2nd9793XWHYDicsmCPt8zphWNrPKjPHXEbVtDnnWKcyfp1YqDcA2YYpRTBs7d74K8XErvyu4dN2GX8szBxVWp2p9",
  "key28": "oDxfiPT8HGzs3s8dGpfz4AYXBJCbGUY1veSTWTrvpSbQmH1uV1mvq8WjUKbB4qP5wNdBGb1X2EjZXD3H1NSvCXJ",
  "key29": "58uc5SgXWJXRTF5beXAkGs9e5eKgxNwnfLP7EMjFFUGrksKBW2YoZXM5bS4rTJ6mpCdbAQ2t9mh5kwKHwypWvoqJ",
  "key30": "2cuvx96kh9WvPQ5WRpjnT5JebLLFWjBPCU5vytbCGANBeGb7RQu5mN9wWNRrySUgEvArpPAkpuHQGBmCcjEgWQmH",
  "key31": "4R2w6hsZpcWAfnUyFxGaLdy6fmaMfedrVhJktHH6ySJaAo3uQB9vTAcfxVpqMMR7QH4W76m4ymi98Xh37pQ1DQYt",
  "key32": "5Bcq2KnUynEvjrrXiz99yKTH3VP6Ncag9qz8SHDaSP7bFoJEvTQ65xeCYK1z6A6VyxiVMrUNZFnHX2zXBf6virYp",
  "key33": "VvEe2ydPNLQcuH9DB2WBphuhF1jjcSHQphc3RmhXiPJ5CoWKvJyehuSML3BF55PWiiwWys4kzsYTn41HEuo7FSA",
  "key34": "3NdU9pAfsUm5qA4jaFjyaFQmGPPiQjkS8buBisDX221HkrXFDoZjRWh9zDFCyB8142Wnvs9dHM4tgHpWEPEXhpXe",
  "key35": "62pstdiUoPkJDovwAtE2AvL5RDi6U7vDYHEaX7FRVaupHWaCLQXjAMsMUQ8aLCvWfW6iM2PfDK3TDfw2fowMXYJv",
  "key36": "FuBZ2gDVDD7KhLKK3P2DhC2Suo9pAT4PGmcZWN4KE6kNVyke492PNRq9zXvp8AzNEkmDCWHJ4xbKTmfNyinyzQ8",
  "key37": "4dRLadhsYLfthSQ4DvN9oeogRVQTG59dhCQwF7GFwzuN8GzQb1ZBoSf8FEyR3FM4NS7xwZg8VYENBDQ1jn3ZgMMv",
  "key38": "3HDQViZ6fvYknwQEiABNtyNt4cDc9UxakuuntGCrtmXKEUCFifvXQjN3nDDCSbtsMUMRvewpxBexQvCfQiEe9CRL",
  "key39": "3pXyKLNAVoq6kZKvmanQ7YUAwGSqTChpkmjgyqVhJxdD6BV3DC8TwR913gCAGUcR9HPSwaZqqekh23a2v49B7nf5",
  "key40": "22GRTR6YYSEYG4dR2RqpgMiHRMNryrmwJU9E9sKZub9PUQMeBPqP5z7Rbs6zQ1ZeG2JZpz88MNx6XqS37hHTnSBf",
  "key41": "3owsxHtrnZnefJ4njxnaqk5jxe1FvPeeS36Kzi6NcN6LL4PiW7ofne6cWxhJJg67hzXGxce3kwkR3fenZ994mBsb",
  "key42": "t25sut2ELUWE3BqPbyUbERWovvMfESRsT6zwf4oqBkEdLxZgb2CwyaJafwmitxsBagsMVKJtzUxw9hzXFX7ieUy",
  "key43": "3q3TkFNcBvVsPmsmfVYDdMvq6hBcvqrrbEnfhSM5inNVvizRoZppdeJryXuenUVsuoV2mBDEUpavfqkzdyJLQ7Xy"
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
