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
    "2AreJht7kaDTS424jQXdwyJKiWWpZ1RGAkLX1uM1AAaXPd2a4tX2zCvcZwHgSossA59nkBCMyRSDS5dwNfhisrpT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qVPByydw7g9wcoFwJnCNnjRNyXEWnHJ2mMAk1azWxzZfMfDPjkEoPi9xuSEAaL6DZs5npJWSaV3Tr8JUzVod1bE",
  "key1": "21XXS5zNCLmj7PbXiGfLx7XTNf2KYCkujeCT5AczwbZvQwTh9m3WGTtWgrXVuWTLNFKzC4WvYSGLKgWMzvBFmFxZ",
  "key2": "33q8eSuuN9WXtohkEEkmguon6AKJqUJQr8CUkxRzvYG5X8ybcn3Vpu6cgRMunDpkGeqByXtikmYKq2uiiq7rzqva",
  "key3": "61wv6Fd43unddNMJn9SR7n5GJbhcMS28SFN9SzQGxkTHEmU2RNTuHYwNJLhL8bJxh4UnrDSvrM9QFZ5jKeQbvgiK",
  "key4": "5Dpr1aKYZ5dds8S9ntULqarbo7PCEqfzMR5wCjsUH8UEqEm9QGUAsJG1FKDygtGfe47yiBPa3vQwRB4AXJNjeVFN",
  "key5": "CTDphEYccPU8QJP72pzoMqxUhzt1ZyuKEXZLaSbYLNzhDVDL9HGFESVHQ3hCXHMCmKLC1MdaNdsAMGXicBGGAb3",
  "key6": "3WCxN8BVv4cWPPuEQK5k2H4jK84MdiBcq78VgW7JYQNPhnPkgrDBKVKT9K4gq9L9S7Rd5JqnJRZQwD54MXb2K3Dk",
  "key7": "3jwkKrzB2kt6AP5VgCmzVKYUHeft46XzW4kQktnfsN1q9j9hc4JdNS8hDrnR4cnY4kxZCxSjfs3kyoJB5EpTQyoz",
  "key8": "5J5L6MLJpmFRcxZjqkT7Yv8FDqqscpoyss4FGxBQTCNhx5v9PTySrPDmAhYutTMDiMnQ9PYvCGbwGphv3ZAnA5c4",
  "key9": "Q2SkAX22pRSKh3pirzsPd6t8v3Wyg39MJsGYSVDFc722at4ut54Fbz8m1r2ubBi9texkMhugKcdg4DoEUq3Bizn",
  "key10": "4zeCnXqKxLRAu7hAUPunqJFZAf1n6hzpXgcYmm3aCntJaCDLJwHV1ujMAP6iqMH7v7B381Ae88r8LFBykYzJXcx5",
  "key11": "VQc1BFuz77txCeT8stdyeMyMk1rc2TescV91S4dFHHtoQDWBQieVRfRT35PgCUahAqB4XAw8t1aM2b3Y1bppJU5",
  "key12": "2sAX5avG7KFhNShhRTEqpXfGCeLdUuYPNfTs7iUvjeAP2595GQ3J3n1xkmwR1hNVVHM4Q6w2ooeLDaNkYEXhYZSN",
  "key13": "4b7fz4ogCZGcW8vB9mBzHVg4Yqev4BB37dzJw4WQZkvgYgEuz49epkL5GRQzHqYsMUPBH3Kf9MYqwuD953MwB7QF",
  "key14": "5FKAmfioBGLtNwYoSwgXsxDGXY65T6JD5fwTEtY52PBaAjAGVvj5w1YpSA7wqZDyPbz1qBLMnMdiy1QaZDGFS3au",
  "key15": "3yWNjtEdmsd8w9PdDNzo6Pf4ZnpnTXEHESh54bKdKshKyWQBLs6AJJYt456bs5oWzcDh19i7EARHdxqttxfWEbsm",
  "key16": "59JacYrgdX5MX7uheg5FJBHThvg1hWpTubdWMLRe5JEeRVd9EdpjqNbgadwQk8HafjSTNnUXbRKM3YtmQTrVzVdU",
  "key17": "3SqGfzBnT5eASVWMPAhw1Dc9mkAcddxAywhSX5ZbLpmq1yVNRuhExfo53qfHER6EheugndBpGAsTryxwPtjDCg1Z",
  "key18": "H9pKPTy2FDZiBu4bUruAtXR83ADPWssJFoUJZpgwCC9uyrwY6VdDDGR4grcnWkqtRVVKZz6MC5KcGXpJ88tV1C6",
  "key19": "5AbUWk4xrvUZBLLjpVDafEcESyxJZoSPmFppraHgZ9t1pxHysha42G4Tz7wu9zkXgSwVAX4sxZriq96NHjNqCCUz",
  "key20": "zqCyae3YkhR9Po4R1FwRL9ZwQZAFknpLhR4mB7g7qJx45mvMaa1rCscuaipRLjAkbT4QoLBqK7rsMhK4dvZmMZ8",
  "key21": "3NXq89BefJ3ri7xPdJAvdn5MqvMVz7qGN5wGskjhSDacGRsbECChmB32Md9VbNpJD54poR1Dz9tfwpqCTrFP4Srz",
  "key22": "2hLEYPoNn3AmTVMYDyWXAEa13sG7ZuDRUcdvGQv54nzNAUTrWtoRbPKYtom1UusJaVSVbwuV8Fw5YncwYm9d7ZgS",
  "key23": "3xCJ7hrSo998kqgWRqrzKqrRbdSnC49gL2RrA4DCGWGiP7h5DQaAbaHPMcDyb2Rcpv39uHELQLx6vmhrRYGoMNwE",
  "key24": "4bEuT2JtEqbPaEXTY843p9xixMgxxC7voLvcBgwK9a8hGWjyound8gq5EYZ9XSoYmnVrnq9oacZdyQfipvCLt22b",
  "key25": "2fgBN8EUDyL7MiBY2RG29vPQhXBPPE9euvnKapt6xRP3qDZ7EyHWW4ibHkbAoxmWFP5QRkfkx4eUj8CwHJVNzSfT",
  "key26": "2p5SLLcVPLdpG1Ei6iXSvwEaXrqav56vLzp1uNRN6j3a6W3e9CdHSH7DHi72VfMTwLeqEbeLQAFAGCi4jPMuYjdM",
  "key27": "ZLApYGcnNP8rh9ww2oscfmPG4qJyj2Hkh7DztRh2Gc5oo8a5CRfeFTjaH2VmoRckoP8oUiXFEDxUUZgrm2Texwj",
  "key28": "48T4nUankEvfTtG8hXFAon8YqmEHPVzkG7kPK3cNnC6Mjpt6eUMYXZrq7CMwVzeu9TMcL1KYA61hCmXXoeJ6BHs6",
  "key29": "WfB7TrVpzozMS2on4ttYcrytUm1PQTghvmzXjK6WBsX2fq68rbRm1wZFccvxLtn5rHqvCVsttF2LHbRdNY4A44u",
  "key30": "6JXkQSyDAmBrQ5b22YKuF4NEV2WvtnmkLoVdTz77daYGCo1madvkF1W1c9rqwNXPCbgckTrZ7kKKdQUFQsXNxQp",
  "key31": "ENtTY6mehhyomwkmwYUutCW7GRpUyukkYhApkPnuSKpg89jhhNktUzNKtfxZWgZuc1DHTDU3ELRWgcsYTmv1GXy",
  "key32": "5dG79tLWbW5SiwJpFcDDoHEhAZKdEtY3QRwcVXrmjGEZRDnuh9rv23mQGbxH4EEN3Ccwaityo1NuwdDPr7MjCCPM",
  "key33": "5w9H79tW1MuSphzix2f23bFKTGxX2ea6vdFCi8yNdinJTNt1qBeGQc9tM5EjNRgTnm9Nyuum5rruWLbQ9GpTWGJQ",
  "key34": "2gR4a3GjQmNy42aj8RhahECsQA1sj8udp8N3PXS2BFzXYTW4z54ykQtAk6N3XBTmuo9MoXLpvpx5hg6ueAomntMt",
  "key35": "2R4qSAXcEYYs4PnTBSFqWjPjCUo882WjU15JJcL9GeLNdxf91Xa2UUR9Y6M9UhXQRcusQYK8WuXPLKTpak1rW2D5",
  "key36": "PEWqebTbSV91aRJwXDrDPPRxwp65RV8ptiQaXPbZ19fKMH5nLYEXpKczvd96YaFLS9gHonmjALhf7G1yRU3umas",
  "key37": "5UzY8yvUFtw2BybCjUKVibEqWad8icVoKyoZXXxXTURPRKXnHX7XeB9ybFk8yshFiKg3ezeVpH4Ca3V2tReuVHtZ",
  "key38": "4BKLjeW8VgHRtNLwbWZfPabHfnjoZHDdD8pwJ6JCvumW75yqBuBkKKM2CTbAhnsHRQf2ubQcQHGtxGXJkmjgXeNv",
  "key39": "3rSCY2dCnqiWSuMjS7RyyAYpge6Wk3XqqmGWFUkZT9tusP6yEFpiHbtBCWXz42vJdMwWoN9x72eRCfEcvoPpGYoi",
  "key40": "qdMrKWJZEirykuvdx5aZSbbsZCfn3rJWmq52mTkpL2egnr1RWVyEWBKuXEdzmn6RWPfguu6Kt7h5rTgC1hxiDqU",
  "key41": "4uXCc7LGW2WMCLw6W51bRHp9ZqP1npw8bDyNe5GYMPQ1EGd7kt9UW4WTnfoyTbk1op6NjYTCkwSVBhhYrZciii3S",
  "key42": "5TCMq69qiKj6m8b5Ma9uUcLx667HXeoK4jnQPRxmqzVYU4G4dr2MtVE9wPJzNarzEhRMAGRwc7Lo57ZaGEn4QuRc"
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
