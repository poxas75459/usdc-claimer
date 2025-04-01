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
    "5VweAr8ENhgeH9iDNh9Lh7rVqv4AmmCuDrkumQDkBkAMzJK97pKYQpbLGNt5KVaWTM7GkzSgcCY4KGCT3GMXcvdN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Um92qTMygGgX7wWBRPRXgC9Eq94jX2ihFFqHGpJfYKSUamA67XYP7sJzXY2pN5dR2K5miP3XVr8pk4cSHNfJ2fR",
  "key1": "2jRis3jqjqC3iH3j9zZzZThbCEXUc8nqZbTNYWn5ryQZtttbnunDKL52xcXxnqdzXndPMtEKcEgSBmYeNGfna8fX",
  "key2": "23FRXAZTC6Q88zaG9snKxhFVP2ZteZV7HFSL7ftLVLdmvnhZczEGfCx1wX7pPfUQ3zSrc3UEREeiKdsgt6BfjbQJ",
  "key3": "3gkjb5EuN8aqCDaJYxTgGSiswMNSS8c856Ed4k32AE6GPFV3gAbeqFjBHwit8BFrngU1iws4yDEs9TW6QN54ddVm",
  "key4": "5FhR1f85c2aYtPV1Q3M6qnBsQqQJqU5vxqb54BPs92AJjGrzsHKy5gkXkPfsXyuykbQ4PDsz5HVdqE2roJdpdA35",
  "key5": "3bLxSLVU3wB4VZSkci5S8QCv27Le9QKt6vLPcP1jpiXN9VoR6yR8dGe9v1Ghj4TwNHfrcDspdmxz39UNNtaYitS7",
  "key6": "22LyckpmstD7L5i2jyCcirmoDXqNV9Byc6UA2mogi82JbPBsGo24nfiMxz8sjhcCTipJL9aFUW7PhugxyZoaWYZ1",
  "key7": "22T1ZDuwdvNDUo7Aou7zgH1qt2o6NkWuy8Yb5q3U2fudXkPafHnTLaHKCwQcrJiHcsstqz97qtEkLGTR3ij9SXmD",
  "key8": "E2QiCMG2dSMaGwCpzbV2oc6GtMbxWHA3QREw7JmLG82FtYRkrUaFbp6iaYYoNcypurXBMjSHsp2AdFLbKDdSTWA",
  "key9": "3XLpD9Kvxi5cEQfP54QrAwaPhPdtFq1zDbuvsbjCf63amgpJXrQ8PMk9GwEqa6meeqEam9huM5vtBos9YmA7AEEN",
  "key10": "4V295o3aSqLRHVFZDoFdMqFbjEyUJodPVFNup7sLqg1JqidJgyu7JRoD6QQkgG6c7tKoZwXdajZqbPyCPEnrexow",
  "key11": "5F9DzVMbhngB1vvciotVkJ8ubSh2FH3smftAknemWHXNcLEcDcTP2EgvFbrnUf1wx7LXEQUkmy1x91GLLNVTbnEW",
  "key12": "2VrkGfpdH8sfaWRX8CKHSqmSv7ciALREFk74p5ZBwRLwdzaf4m4SLynRiRPonsJ3qXhJZGLzQvshiLi1DVjcwLya",
  "key13": "5qSkSvZ1XJCcJFS9SG7o2nKeRxiiZrw6DsubwDoSbRtm8YbM4B6PsdiCGNWrUr93GzcwRfoWyQaYb1NvadsEP1jb",
  "key14": "2QKqkGsR5VKmdv6E6CRtoQ3gS7wo2BzmQ6fvXK6maKeRYRGthHoPfi41bVJkFWhWkf3bmE3aKtnoEUpCFNceAWRZ",
  "key15": "335vWDFqfiepNhNJ1eg5WKPyBUjiRdVHrcn8eC2Y9kgn82oK3JfN9fXfwBmsMhVhX87g7jkqcPAWeNxHqkuFAHsg",
  "key16": "5Nr9vYPYHBJQ61yxQhSE4SN85bBSvytV2SbkfXDWnVUdNsYL7TR33F9mDpipXrM83BDQN3CGeb4eFGq2pXif8BL8",
  "key17": "x3q5gFVCRJevdxmC5aduqFSt4hPT4doZg5YvFBVMqEyGMJDgiMpCTJDZj2n8o6yBgZLoXLFYDhigu5cJ2DhhBM9",
  "key18": "5KkJ7bJnjBWtu4jd6T6bUEfmqHBVBT7SDSEtMqgHuBKXvMNTRNu9LHM5jrpL314cQk5TZWYDHBBcG6DBA2orTYPw",
  "key19": "vWqcrHSv7gCKCMADoVLTjNqB2DGdQAdV3bFU9vRijKXjbmZTV4zEmGKcfVUs6BA48L32H6MryUUC95x8nZbH3Ac",
  "key20": "2RUmZTMzCiuRswq7GHm3Rvuuxvq3WiYxFu2uauRtn263K9f392CbTYoSbcByksugUfsrm9T2thhAruABMj1idyNj",
  "key21": "ZdGoMKW2f8V2ZKmxqSxwd1iC74GND4G1WFi2SX1FwzPU55xLkAcWMxBD9gj1hoPNhgSMDhxNcce4B2iYwsC7nHM",
  "key22": "3MdCfJbeVTpHMVg3YwMKUxtHJ5tJMZ76jJkS6xH1ZucCxXhaiowpcYuZ6JkCW9idwMvQrdLfLL8Dmfn5SJF9sFiw",
  "key23": "4pEysdx1E6xXG43avVMj3DTiknTRo3W1GRJfLQ46VBTfeuKPxYNRRCupyfqEhHWHypPm5tJtrRx5DENSLcc5cto3",
  "key24": "2k3r15WyS3Yrstv9ZcEShKxb2GgDViaNDPFZD6yasDtpedR7aWgDA4v6Q6PPT4b6EF7zbZ6rFdmJtsSzsHnwBGnS",
  "key25": "HSTsZR5Ca9DV3ELoteU5BS16XVDjykbJuEMpDZvgfWD4vDXiWvzJ34LUTzVwgTLWRbGj43QpWNLHiGfubiKnPQq"
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
