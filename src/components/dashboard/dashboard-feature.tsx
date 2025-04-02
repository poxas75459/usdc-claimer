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
    "uYxjS4a1YtxJnwoF4MwiMny2Xsye4iy7Ukb6r4XVNYwSvMWRcUJNicECj3ryHD8zV5Gk7WsbM15wtB1oVjSBRC1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2T8ofB6sSUxXZL5kLUZ9Sg3AfADJYwhoZbXivVajYg8W7b5r7zjTrpCDsQ2VRnQPtZe5VTrVo5QLeVQgXhnHW21R",
  "key1": "5qNvSmYfxBthQLH6uGGjo32jj4U3hFQFqFFEdiw2aswQCH4cBmGrXm66GkpzWkAu32AaR1vUk5a941iHjmC4X1x7",
  "key2": "5Cmx8rzed9DE6Qe8nCWAUUrX5i8rwZQepFGUnVu46yRouCXTUZL12AKD7n9i2h6zSJaDUTXxt6pRBeyn2RG36LrP",
  "key3": "2n29BxiXbyEi7hS3i8eqpNgp9n7o3cVv1bci8trtFfL5KnfPHSp8FnYC2djvuk3nYM8mtQ4bvoBD6bvn2GXDvn5W",
  "key4": "2Yhcs6bA3KU9eth7fM2L3FmpeNc5YybZDhnmGxKGbeRKgM597sxBKxP51U49j4qVDpaKDivx2x49V2iWpevskink",
  "key5": "q6ckZZ43GfzSfZHAeTGvcL4uVU3L7VXjuZUpKgEyasofSQATUG2Hmv8Ra9eKqkRCaajkv4WqVKPe2FBo7KPenLj",
  "key6": "4eG9QzXabD3DHbcWofzn2AnujhRmNH8F4vZesJnC9LEbA3HnYSgzVviGMJzYW1GpnopuPY9JzXo5dPcqHCahF3sY",
  "key7": "cYWbCi3xzp9pk9jfMecm8JJgKnPsgmRwnLqr2HHvk6TGztSGokeGaFMmJLrhMETrk75P14hJXVbU7QYWFdMLdyP",
  "key8": "4TFfpDmujfcZjxsZMPLoMF2X6qxPjCYC154gwWAvKdvtWRRGPDXC3kfggo7AaP54xxVJLLc8Sea3LUNeinMnXn7",
  "key9": "m9Ao6KG9qzmBi8SosFWpNtxtst9bXxr7QvEm6Whqz3T64xo5r1irBHjrQ1epyzGHB9SFpcAtay7yayb5qMbmd1M",
  "key10": "2UjeMxpKWoLEjdxNarMYZDiExMxoe4pYnXRik8L9YRrkWJYc9975xfjHJWR5r9ywiV5PsrBKHZ98xCb7tLPoQjBN",
  "key11": "4KeMhsHZnUurZT1KPcKWMnqHyUCLxc2UNWDyW4qcDc94Hg4VYrXf3G2ScvHfJsAqegMrK9gaBBe6w4abEEdr8gNS",
  "key12": "2zDhgA4QW1bwibDGvZN4mmsQmhgoCCfUmm6fQcuXjMN1Pr2AiRgKWwwWcqpcJhJe8eQyspHxDHQbRQUpXUMiNUWL",
  "key13": "2b2XMaAznax6DRbc19stLcUs87FMxjPux2UbKpjzTEo6kF11jwsJ1qCB2nE8j3Hev3gkTCADfmZGAur9Ug9FsBNJ",
  "key14": "4gujgK93i55Mgk2xpYuZHh7iASSXEgGjvrur5SBn3XVfqmoXEso99eHGqUXwvpDHWb7dDvqEbw5vb3z2CHxfRvzh",
  "key15": "4crLhrKgYuqFJF5gcqUrwU7CZ3UaPoHpGv6QUKkEnT9cRzUSwZyxYTdSkV87fqN9rZEL1CunbQQMwK3Ss8J1dL2s",
  "key16": "3QU33KSDhwvh5ew7i1z3nCHe2wohQqePAxePrUjq3QWLhdCaXA1AcARkiczjuwEYF5towiT1Bp2jisGTeh9Vh5iA",
  "key17": "NB1JsvRFT9MSih9egzmXuGQ2SsfvKbC3E8bw7ri5oceHKxRkUMqi6TbKxmfsAc6MQeE1ZnAWn6q6vpBCpsXCZty",
  "key18": "Yr7XaMFLNashKUwkZgCb27TYMUV4FJSCyBj1SfY6eqLBDcMBtYv8WYtoa9CGxCUSv1cR2BUCKKgHFMLeTkrUMJH",
  "key19": "2MmLzVL7SJgktL1sqM9xBUK8haftQpJ32cMdPEnwrA3T6fFz7jyqe6QFKsK74hqRoFf21QWFheEsADqtv85EG1JH",
  "key20": "5qcruv5ZiLrbuXJHXmYsASjQUEr1BJVryZ6wPz2B5pE9n1N1Ps9mvLKfBbV7YYo4DiiuKhQjR5okpZu2U2rnjy1i",
  "key21": "5jK5c1S23Aptyjz6QHD1C2P2Ywjx2VhESNC9VU8havfVQZTfgzS7pZoA4ruDwepSFPpLjf9pRGNRseJWGLEc41C4",
  "key22": "2b2Nh7XPH7azgsTUNmLria84GVfpmutAwnqK5Es6DP85B2HdhPM2waXUycggUmaEfNL8Y3NFovhe9ZoNKo9uhNSE",
  "key23": "4TXcEHo2xUYaz1x2Ka4QaSpGGmbTFDx1hT9LkR4HZwSWKuWrrAuVegZ5LRsz4uwPJoVWybdraacCGfhtEDkLRb5b",
  "key24": "5EtsdaYGBvhFwzSpXPuiAdqChpNfE3CymdZ1Fuz2bW6QMZZhAx6JB2ZMDAFESfEhmK2kzNVixPpLNFg2kumuKytX",
  "key25": "4eLBLPJd2dx4w9r5UgWSRzqbQr9VCoHZoTBdB2nQCQVvTDkzxBQyKHK5kpLEFaEeCbYhVPqMFzxhYtidd4eyqWz4",
  "key26": "46w6kagAGWMuHW3i5bhGAmr4bpZu2d2D8v6CqG5yKBsD2wqeh3figpKZ1BpMEs2UXLP13To8vgPUTSa5wuwypDz3",
  "key27": "2mTAin7Wsx6QgPdviDyDT9UCHXEVq6AXQiPZ2i5BJhcHdQaCrbYoEvynGfg4FYicionkgbKtreLdyXYVRUQrzLon",
  "key28": "5Fg24mDmLz3X4Jdnw8LpFzpqLhDFk2ppyoPS9u3NWGPay9XgysC4PpxGZVS6DLmhR4GuRPJvb5BsW3yqPPcyfofu",
  "key29": "gSSnVbj2Tbywd4YH3izyA3gWraAVMCB7JjQHyn5Xn7L6bZiijW5cS1CaeFLdfRDuMEtnptj45ztqKf8eWmFQ6J8",
  "key30": "38K7xrymuRb6c6YsS9PPgRhcXPikxHvRGZT7igJcK7wCsw3g6e7tWCqZ9Nk61Tsw3H67q337h8YZXckrqTREs9Tz",
  "key31": "BHiaadGimc4EVioXiMswbJmpgf1ARsfr7d446hbSoH2fTCPmDGSseuQAZaFcf4MaZ5TqZXJkFh6gFHZ1SccrTpx",
  "key32": "WKvPLhkZPY7BEeNGiNe8QUopzSAUa1u4ZYrJJnSYXu1g5wTKAuitRJMzXF6tCnsUt7Zu9gMzd5bKgHpYzW6Qmoo",
  "key33": "htaRCss3JM9cebVRh18NUV3sEaC2mDN3fZ1VKHN3XmhLTEqo2y8isJYaJ9cETZQi4orVkBaCTQNQd4CS8XJvxgn",
  "key34": "56tpBbC8WzbYmdD5ZCoVZgQH76U4NQL5rcR66XomLJQx4upUhmX9YjHemtY2xLTdcbGp14eKTSPzfBPxyYBwHhrB",
  "key35": "2vXGkw4nXdgtBgd9Rf8TpzrcoadxgsK8Z5aJJP2YiZ7k4mAj8VAvFfRHMfAfKGAfAsxiM8o9BQQLHPDSbWX2E3Z3",
  "key36": "5LAvD5ZhPWCce9M1ZQuTNK53pWMLBF6xati2wT61zuFCzLTM4Bnviju4HTHKkCVqRJnwiFUJD18xJD4dyuP1qTq",
  "key37": "2L23dPCbTepLboCNYhAmEjoeAZmda7cBrM8GCnCRfrt2tvqdrKy96f1e9Y2rD5LHafw9dJmi74wVpFdsgpffQCeK",
  "key38": "2scpTs1tK76F9qrgMv85DHfb9Ujx2GE4M3itmXpiMQjxJHYqGehGXkJQkE6j9rJN1ViSPgJsrZqMvFQLAV93m4A6",
  "key39": "3qDBeLEbJrDfBaBezZ6YwCZHE6p9LtdYX87uTifq4kuvWjcX6tCsi5JaLKTGP1LMipfjRQgmidHqAt1YQjjGJYiu",
  "key40": "3GJnnk7XgcrXDFBHtUatkAap9Ly5iv7apm7LrcyReLB715c7v3yxXaMpofSGnQpzWFexBHLC1dx5VhjVVdc3w1jH",
  "key41": "ZrsoHn6WkRDXeqVXe1nafni12pFQSkesyY9xHwd13mrChrEmjTjjBu82LG8p2Fu2erhbmy8aqmgGsUqVeKjtyp9",
  "key42": "4Wcksr8xir8vsDk8T3fViUWK2qh6SWX5WofTsFKC8xFroMiYJ8quMhgEkBPsEi3v3vJ1ESbZFJTQKGoZvU9JSLjH",
  "key43": "XSrfnXCx494vz5xRvr4WN4f4p4nYFxwdBLN8syTiotuTWhCUYWPy6ZJnaMckZASJDfXZRokGfZ422gPEqcTaP7A",
  "key44": "3JsEjJjh7fJoZCMkaeTdsviRop8vUXpYzctsTkG38Lf8hj6shsoexXdr5LN81kHhjZdDsM6n6gTn893iqt2E1wps",
  "key45": "4YavAiqW61gwj6amSmNyxiheNMboZZ4i4D2Waeek1TWMRtXHiJF4KXchk9r6HoAJMdvuYYDcnYcS4B5P4Ei1vLmw",
  "key46": "4RA6YsebsFASGqi85M3Ko4bTkL8UpjuoBqU5bZ6FqzaZ4hwX2givBZ8oiqikrgGokYSdX55a62hNoQxhAZkuWhTA",
  "key47": "3ghtd5c6N1KYWvCUxS5kTinKPEZRM4kxFFFkLCbuzUETh3z7GXjjgnemb4cuWfE3jF9ua2ihNdpekhi3RfBukZXS",
  "key48": "dZNT9KR9Cn63AUgUBmqxX6xfDkGwDrFRMEGYiNUqZyTRE5oTPhSRmDHrBQjZRmgPR5vSMKfyAWSeuFVMa6dP4xk"
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
