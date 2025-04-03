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
    "3cm4FYcZfGqVFTZ1Y26oD9kV7czXiu6Rb4qooxjnebn5bzwWPEKoKNa5X5ZU1EhuPHPTr15HiAb6xRKpta5tsnrE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44mpXwMh8VURq4z4PiDWfYKp4rDRm4uJVYWVgBZZ5UQvMv6T9bp3z2Er5vqF9XyfntV1VEaAFERyLyAv73u9qG4p",
  "key1": "4L9rzxtwPoPVEbayWpPPGuUKJGZFEitpH4W4f97CGXpWFN9uzHQa6GerHhuhDCAzztDA9WXm3JrmMahzdrom64iB",
  "key2": "2HEVw23h3rdMjbhYc7RMz6sNX73HbXTVnSoeuTjU9x4yiwZETs4h1jNUWR1GhKUXBVHAPEiiooWuQ8yP5fThrQQn",
  "key3": "3eGSSTwcrGyXEkDe6mSgswkxoeWxWJR6aMAnVhLuuWA6G2NdNyGzdSpKmd1sM7my6ubn2jGEoNun4fDdXByPWQ2P",
  "key4": "3usMHRBQ8B8Rri6uUXxFauNFY2XgYsgNrA22pWyUqbebhuLHqpdkQvFsHNzgHz6UKveEp8d8aYci1KzfxdhaZLqz",
  "key5": "5MVMEeG1imx7gv9oc3zZEm7oF61E854NgK2BJ31sg7ZFf5igR44UFDLtNTCZ7SfBScKiFfYDTgngKthfuKbm3Xzi",
  "key6": "5weEA9uP4xs6MBnVfbV7akGnX3vbD3jF73A4T6F1kW3Gog4c7zFTob3QzjW7T6w12SAFZSkyJgHm21YrnLL7rhGc",
  "key7": "3bFKvzPMQuDDWmhfWCCgMevGcy4T328it5fkshCWJpBVtCDx9sFQG8WDJdsdsVSApFcZKFJyyht7J8GhEs6xrLAo",
  "key8": "22tSeBYVf9ULTyy4wXsKbnHNGit5usbaxMhA6KYosR3LYyDP9bLiKkPghQECHWapKpxqhmoLefbYsqJv8FwWjat2",
  "key9": "QGAeFTKwgR5az57SxoZ2Lx3Q6XhorLgrFZcRm12MpxxdQr1gEQyU9ziedzCfrSF9H67zzNCuJ17nN3h1vjwDFVD",
  "key10": "2EgBHK2EhrAE2ZT5BM56sC81jgQWG8vSqU3jN5w2psFBdXGrQguzQVUpQLQvTADmB5D5eDss5jsqnuDg7bUosKjb",
  "key11": "2nHLwYeVpT5pQkJw8JtuExWnQ7yy3dpkMuBaQjixeV5qDcMVKk4z1oWm6KpuMmA62MdftEs1FDE5eQyYgdq9ZiQV",
  "key12": "37CjQxcpcuR7xuN25SckMpp4Lruc1srKGe7dZky1C9hFN5QMxGCzZf4dVnF1UCSoDFzqfX7K1aDTtpWuXJMv7jyf",
  "key13": "uZH72jVo2ZLBo65WvrBswiazo7QpnP7UMLjVzpajwthJMkQxjHfKTMVzdeh4d5uJoDrdpuLQebNzBUuXj95qu6P",
  "key14": "5Vow5QK878JS8dZyNTMFG8SWxBg32rztsChMzSQCb39BjWJiiteV8pGmsvP4zRL76v2JyxEJBAnmoffxwJgyx1MN",
  "key15": "sDXfWUQSh51ugXqxt3tUySpfBDVLfXqhBDHXap6ped8Y56rezYzMExcjRjiLiUUCE45rxeQzMNmeWzbkqFn2SGe",
  "key16": "5vNbiXsidDMgJphgH3kWuv6Z2UtLYJyn79SinAeHbEYqXoDjVgrxE4MRSvw6NkWLiNN5aSqsMEpBtqCBRuZyQHfL",
  "key17": "2FB5AwaqCXB6qkggzPsJy8SGEWERwUAZZ4eaCmHVCJPfi2qCJDSbaJ1tfdw8DhzoCASgg9Xp2obs5rbAcMt4mBFW",
  "key18": "35TBVKdXQzvw3rsgspFp7niiP2PF8DQLiWHEW9WP7qW76yUPwVeCdYqb2dEZi7VT16xGB4nrpnzgvgo5mxF3JUEK",
  "key19": "5GKCuq2CYYJHPKsXNPyExChR4AUdT3iM5PRaTD7p8Gp7UkMBen9wxyxSeBeEFADehyrh2wiLbZzXKh7taEiG5bs7",
  "key20": "5XWpwnWUutCPNTCR4NgCF4jCn8iHo4sZ879jV83GGKWan2e3RaBYkaz73MxAPk5TUMaPrJo8s1XNpoqoVvkpv94v",
  "key21": "2ALCzfAu2wHGq22xeyyqnKfaZRVo7C2dM9NtFACoN6hqi7yHrgiPrMz3uMMBhGFEaH4ftjshiuQPr1TkmfzsooBc",
  "key22": "5Jb66NxhC9Uwcf6rWjfMs51tX2eA6Z25JWMEVNjPYkrngga4BpcLuougNmfcr5D4vVKJckjxGBdZeDiKeApVnJkr",
  "key23": "4tBKHSsaSbPCNvUHER5Qc6iExKiUaDpwWFkuoPht1B3YBWpaFpzuSWRT5TggMHKNw1Wr26pPXENsAGbwxJDxuLiq",
  "key24": "4Qmmb7jKJQkjV8V46AWj5PHKUpfMSHkBVAF1eTQWZWn659Ks2AAB5GxxWksPnfY13mL8iVBgJ1a6yns8CEdA86Yg",
  "key25": "5SGzWFfkXe58y83LypfUcMojBFRje3rUnnZ2dNmuRxUroZRgpkzq2byf1M7LKaqTvKVRvZrUbdRiKekvgUwr8CBA",
  "key26": "5KT25qiUL69JTMiFxMsEz3NDcv8wgpHENuB2aYd9tL9nLGaN9xsYrAojJ556MbX9U1v9SK8rE9Xr4W4ujhzE17vd",
  "key27": "3xWpEC8rMTbae81bBYTCrVj7CL2G5AF2aCojoBzSegku3qfu37tMymYWZpp8ndVFY87sn1KD6XNh1nZp2uCHwdXw",
  "key28": "5KMaWtxNZkXEwR7kwtx9TMrxzvesaoBowLdWkHYbn2UDaD9ZrNZmFrh6THC15cGRq6ELqxTPKJ5Nv6fEWj5sNUo2",
  "key29": "3QEaqWktdfhtYjf67Z5mQQMHV1iorRGK6edv3NBnn6vao95qk8kKekyVP74djV3piueD25tiSUDBCgH3QGyCLtoU",
  "key30": "55zsAX93BqTL4TaTfWQNdoAzZFyoWP7HRjivD5dchqRuSzeWVHahcX3d6L3rEQ6EMatGheHfk1HxC1VuBViM5maf"
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
