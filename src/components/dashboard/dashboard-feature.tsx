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
    "57aVPkz1yG4TkRsJXB6AcFSwkovMXNjbdg8HZQv8MezjLKZE6xXmorbqNgHcxoRMbL5WQhXeRz9t8ZAT8JYj3YAn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "y9eqV4ES5e4moesMzhTekJ39gRdQ762BNSVdQhLsQ4eS8BpjUp1jeRi9pM3rPoNo7pS6m4a6W3JbzYyqhFk7S3z",
  "key1": "3ir36EhpFkW4JRTGEMwvnLc9YfE6UTDXN3iBJw7Eh2j7BM4ibbGoVvVjcMEiFxxM7Py7x2MSzbdoVUMfoxiktX19",
  "key2": "5XVFwjYXFeb3UZGPiWrLufSszT1R2iRQAJNoq1W6UDjFzW8MkBM5sg1LnFUtQ2oZy3Q6G7VJo5mbzMRc6rubKaUY",
  "key3": "2jo1TXX571LoiZhJ2gvXLhQ4kiwaxLGsHHdbKwKoA3zpWGSu5t76YBG77GAFNLpfoRAKsgLc2XUJDdxoX2j82wcG",
  "key4": "4cfbVpBiDYdLym9aa1XgzfYRGwR5Ysb4LxXwWyAmscxravEQQZwMZHMQqUyeRyvMFMJXDBYR1EcDtiZV9cDgtZ7n",
  "key5": "4vC2zyeQe8Wi43o3ZneVXPWW8zQYMvD1Jk6qToNQeo2wkHYjzFNFdfja4notY4XrFo6W8CL465qdQQHf2tnSRrUV",
  "key6": "2o1RLnzGTREfTWVYp5ewVwZiB2JATB1pDAPoW1BG3DAQmP3CGPzEFfRQJGdDh1Q1PaHvD1bSwRwhcY3FRZL1WhJ2",
  "key7": "5N5n1wdCY12u6qyJFTNJFiTfjG7bo3ycfBPZyybpJcDXDaP4QoS9sVw9zuL1uo4pzfyeX38E2SUSLy4uv6yLE3yg",
  "key8": "66V24twkMt5SEeDXT4EBxDPnRtkeoPBy6ouwb4kdnAh6WBr3xwPXKXpw2VyLSPJfJ7D3TWyWnd2FJoKC4RcmoE12",
  "key9": "eMdYQyjEDHAhkvBemFq21MLsYXTXfWufXbCnaeKkGXfSaZC64rmiqmviGAnjQJSsgchaCPoLArBCdm68zTgvF4u",
  "key10": "VeQ8Zmk6B7HDi5ffdKaziVHFsYyvXXjfXHdpWkGudmczzCKuFUr8GXko6VA7LSqogzRYgmkQbmJFLVARs8LEaWB",
  "key11": "4uQ9exUVJsYuVaRCK4zxYnXFEPa6hz2gFdkRWeaBMDoL6CJ4ZrazWpaTFf1Q1D9Z7WiMwYvBKGuh8Xb4qJSiYBKC",
  "key12": "4G5oBcxaos1HJPg4LQ24d9uVdVUnP4pNNyNs2Q3TKm7Lo7ChJQCxycKv66M4vcT7uPFFEqhj3L6nVch4D6MWHsn5",
  "key13": "3D6NEJv7xw5hktvACar6zwDqegH2ZNGVcYTCNbkb8Q9sPuntP5BHES97fdmJNe3HRTKaViFc2xcctwkgC5Lidvdy",
  "key14": "53rQermvmH3CNQsj7j6QVz27NN9DvHtZ6xMGuQ2e3eXC6HrS4PcjYhJHt8SfZvVohCdSPoVha5B7Pii1EoSRN63R",
  "key15": "3Bruat6adJVNJnEKxPYXeSoHcTcikP7NUcfPHBfrcJL4wF7xLtzSGfsAFWMHXbP1HpHzPJs8A4gYDGPpAebrc7YR",
  "key16": "4u2ZstPiy11RoUX1B8vqTyYK5b4m5KifGFhzpAxF8YL6qD6sWMtCKzmDMnuTc3LqWwP5Afxp8yisSR2hDmAVqT7D",
  "key17": "4sNGoqx7qKYSc9b4BiTRuDWKF7ajofrEVc6R1LWwF7sCH8HxApdgipRYPNFsyY4uG7kYv59asQ7agUmNtuScv4GM",
  "key18": "3X5vMkGDTjoGmHyYEAXhk8WyaK7vxH48d96vnKtWxQYaU5JmRRTbjT17d4stGjRKQ8c7ESLQabY5hbWXyPg5L8SM",
  "key19": "21RRJP1RC2rJQmhesN3aguZYSp4uFSd8YjmR1Et9LBfSFETHYiMRKYWkXJr4cHkH7v822KobzHLNBTFVhwwFtiHN",
  "key20": "3VsFUPUs3M5N9uxqvxn2fvqcsNa3KJYaKEx1D8RxjadZFYQXgKscNEm83YEUu8sherrBdfTkbjbc8FBBHGLPBQ7D",
  "key21": "4Lss9NF2ohT1YcexMpa4Jh6V2H3TQ6hXU88vrAafWjiJ4DSWQomuSZSBCJTxZ9M49tSsuVzPSbKs2dQjWZjeTh5z",
  "key22": "3x7ATuttApqNvnHMvGqhNcqp9nfPhk2x7zFkVy9b5Hd2gDHrNwq3Uo4v42z7AVUCANVggS88APTvNv5Yc4RdVwri",
  "key23": "65qinZK9y72KyKuLFNZfbCVz3PnJjtfpKno87NDBDX8ukwdppXSDiDTio9d8J1pYxytqgsFASBokbTwVTQwnG9se",
  "key24": "5gqT7EhMC7Z5dkBYmbHB89XdvKRMWqFBDQ1RSXYUfyGpTEVdCN8sa3GV2N9QLagG8uyjFnaBTEqer6ZqdpnhwkwF",
  "key25": "3rpAZL7J9UExZbSTE1pbeK9uEXvd8w42WUaRP83rLrZ66a9S7SDXhRBwK96XyFynCu5QuwVZtwMfbBUhZ9mEL67Z",
  "key26": "3tSmMjQdoXzb68UJRdQjU81yPKQ6cpigR1PutwesGWD7FV6RRy1T75N2rKWzQvSuTRDJQqPsKp39So5QptECnTJN",
  "key27": "53mve983tna5wrGtLMgfHgHQj8RFg3NdB9GtL5bNWMiwNQeinsNNWckLAmWpV4HMFoeLzLUxoX1wLzqjDgdWAbwC",
  "key28": "5XT5CW9Ah3x3uYZrFYRcAbd5VQUqG4DBFRzQEL8FTfEM7G6qfj2co88wA22pxaF9w7Qc24YnKReXbDDrXn2RYvfc",
  "key29": "4o9tzTuNnhxeF3ihKrgNDU9ge485Q5ZAvkSfW3Vqw9ZB88LDxzMr4hdC2dz2Ub3eBhn6ECaN5rKAGKh8TcidP8Bc",
  "key30": "RAFrMtzwudEB4JMNSVJ3rGFCSfF7VDXEPMfHfrm2FmbhSaEjDYq4rGWtcfEyccqPjnHcmtd3yNPDJGxJ96J4kGY",
  "key31": "2hmhxiDpcosBhofmVdcpBUiM2Va52Z9Tyd4gDmjherZVp6ZiCpaJZEm6w8HGYtHxFJhEDkexmASKiTxYk694PKoF",
  "key32": "41GLSapirbxnLJczTnveDfzF55u8WXDzYDLTy3BZfNHj3XRpY4GXda5D3uFcDuoYrfYqqr1UB19pVeEB6UkzNGmH",
  "key33": "TYt4mdmwE6X1kaunaDcrLid2WYwzA1W2yKerqS3GC8tvY8rk2e88YakH1yc6Nn1UR9J2LidxQ1JXQfjHaFAZSWp",
  "key34": "3WeQMGf3dgqJLXoFshRNPVRTkUGC2DRvNtKq9L1vwMGqBptT6zTyyf185TbvYLpEarBwqVg77RkDUTwYa7sTBM5Y",
  "key35": "3r7cq7r7ZwqtuL7yaTe2qKLQnccZL6XJGfx35mcNNnDQAp3DZ8WiHcBEpHLDVRchQrgLZNJgiFfdaXFgejjgKBM1",
  "key36": "4KFD7L3erAnJ4z4KeEnDNXrNWbAGEUVuqVr9z1RggXVmaHhsbKtzP9r2SeqZbtdDCx2jHb2enrCtoF7Kefwxm5Sp",
  "key37": "59hhVtA2Ue9zr3KzBCt2XkSrRPfmXUrpuhB92WXqsnbJ55mSxeLejtoAFzdfMrkgpCNDuGDet4jGJM9ep58rc45i",
  "key38": "HP4HFcCUUQsUQqrzkkSLEakKbCeRxxzVGXrYUWWYqF4xhLjwPjiXG8Daf4L8Qd6agtDpgoy87YKgwWFzoPL5dKd",
  "key39": "2DUp3PgcpJQ466d3Rf142w8zGa2ek7bPX7HLSrE5isZMa4uCmY3zjfjpCgLTTcvx3JGZKd7vz6ADd2DBBqFmxTyi",
  "key40": "2qLs4d8v8MWgouXW8EvQBcmUZUdFMg78CzZvH83b73tEoZGrUthqxyFNFRNNrzzWQTNWvZfDrav9MGkjQfyGMBaT",
  "key41": "2FKAbZad8MdA2CiDTe65uSV7haovM7TZiZBZkAdfAsfuQLjwsWyomW2f5fFU91aZM5FvsjBxebRQZWoy42cwxniA"
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
