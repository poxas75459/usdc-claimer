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
    "4oa6RNLU4Td2pMNY41cKJL85aJB6xz2rHV6o8Agzo37sB34kB1n14xrz9NC3MGPRfrAXpDJHxZQz8JAcfkG7JmrD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "349Ly4gJDmhUpgD4Xi31Qgs9VWjt49Y7xcCLdPuJRWWogXTJco21HMphDbcVZT5t5KqCtzoDXSsvhN9UKeHAU8MT",
  "key1": "37RdLAk37iXhdrBy23PaBqVnwHAe3BEVdhEF3e2k313vX4aM52KUbkoupxP3jShTkvVxDnGrxzCStdAEyyCo8siX",
  "key2": "4K1gtLxKJ7aMXbPqgEMqrLtuGKzpXXTfv7SRvkKWuHQWZTxptWNQ8Mh9MgjQbXVMpWt7BtQxFXWw9PGcUpdFxWj",
  "key3": "2brVVR6sYyzGTo1ppQAW3LdwRSCHwkCAk7f63FDfJAV6ULtG9sv1gqZwLWeFWAg1cwEAKN8SXz6nFgeYCXfJKEVG",
  "key4": "fpqcbTJd86vJqtdFAtC9WyLtvPQZRVe54DemhysnQ6kEvkT9nya2DsLCMkpMN98dRnc7jpJqcj88JGMyZeC8Bc8",
  "key5": "4NCqtrqm6DCX3MdLi5dzrSSBs9L9qjKvrQsq54J9pRd96wuXKzCnGNnXiDQ5sUEdeNP81qxxJBqU1uxaMhhfVnD1",
  "key6": "4X4EkRmmwy5kGmXFLKXAv6TsjgJCYyCyoq4ZmbQJbgCsN4hDmmwwod2WAcvquEM42byTBKEFixo9Z3K2P7niaRgM",
  "key7": "21UaHA1XK12oaGw1QWxyZZs68K2rToWVydUazzDpemTaUV9SvV3DrcBdqBSaLzLXddn2ubKf3Z4JsNikup29ogfE",
  "key8": "4FtFvzJb6UhV4ZHVy9c2RQD5fs9y7sCuMEuirc9Zjr5swfjjih2cDXX1TGpKRBw2FsFH2uTp84KYgga2QtNHCMAY",
  "key9": "43cVfcFX47JLCoX1sZuztAxJavVU4oL65utN1DQUcEtZwa7D6Mzswp42DiXPV2uFqDzzP8xmnmC8aVdeLp2X2Tzg",
  "key10": "3vtqZKLSurHUkeUGfWMFUd52pvVemKYGMwZ2WFBmBghiJM5DH18SAa7KbVdfjqFfJXbcHmUgvitLrq2XZCKhbNC9",
  "key11": "4SjY9o2uREe1hpdJjKwo61sXxJAZ1zHwpRCLy9jWoxc34tb1UEVwYWqSykfHVVcbsCqC5qcjFQCCUC29kj3zFWZV",
  "key12": "339gSmGM7M5PuDB3T2ajYd5afbGSaqLoPs1A5tv5oc6XNqwVUpg84M8j66EEfo9aE13AxogSp9F12DTSA6ZCBNmH",
  "key13": "3Arzu53khBemQhHKwQqZFNNP9Pbn75nqnksivxaB6qqj3HcMhyobsmnMzKcYZYWmqtheFyViSqgwoqrktwGg4x3k",
  "key14": "5LsAEU85JG2iEkMw1eN1XRywLrgETgHjKsrhqdh3YH9LgK94U2Fx6RB3w95tVxk3PKp12sohafLESzVNafQZDXXm",
  "key15": "LAFCkekvxHC5ARdXv4xjBVEQY86T5rkm9X2eiHGRmg2VRSi9VwzyG2DcXvmtCrHanwKgmd3e52PuWfDyaLTrvm1",
  "key16": "48E5AwSAtUVZY6FEg7Z7u9XWNBZX4JseQFxAbNXPsfnWAV27GD9f64hUu242fNEncCHb1jKzv7NNo7y8gxSzN9tD",
  "key17": "38GtHhQN2JBPBXr5ZRbfjJvppkAvmdRWiyMVpoVMCdeBfWJkQc3kzcdGDDzNpyoYoJScg9xbsZ3o7RtVJxMUce4w",
  "key18": "oErVQGTQiCD6dLNHu5ZSS4gBA7gWtTPs45RSW86RPdskU2eJXebJNZ2XkfSAGm5Cz15EwZRpzhDvTcsW9fZ7kxw",
  "key19": "55Pd8e4b3YSuFV2WvXzAe6PXwyavqYYBVQqiWVRpLYpnBW8hqPGXfHw5GxghWMKzrSesQo53LDVZfxXqTyq7h4YE",
  "key20": "2UGyRNV3okEMRukEoHd4PxzKxsntbQs1qhr2d3uqM4gPq4fs5f1VN9h1zE6zwgFTJ6TKi5VgLunk63pYoHqfQcxL",
  "key21": "2TfXYc9WQeUYMX5rFXkUdtx9P2aEn5EAaPdVuGXTQ7GXwtm9oPd2TfMDxv1GG55dYpth3z7kS44AkZwfKbzdTmti",
  "key22": "EgtZo6tthSg4KtdFMSkQJqifJzNHb2EwoH9A5Vd43mcvGNrbZ5kGzhFKjEQzhKt8Rx7n39QRWVrFp7DE3fwKR8s",
  "key23": "5aBMouTUGYnW9DDriTkktQNNfQ4c5j6xxiHLALY9bkVj88nq8iVCwt3bEJFUtjDxarYJunhb21RMrVE7DiWQHpLG",
  "key24": "45Gfs9cSWwUxo1haQtfBtLpZDrmAhc6WCnKc3eEKYfquqCLrxZwpgrE1x4yG6MCthiugyXzi9Wwm5YER5VriabPD",
  "key25": "4Pmn8Vg9RCtpog1UikRh13acmGr93G5Wu1pPiced2pSQ7Yi6RbZ1wvpx7VVEEGHwhmRhNoq9Rn4eZXASzfLBmbsC",
  "key26": "5sn8WKVuUpmVtmitQxi3PcGTUkogKUs9FgUmwhbmCFqEWPvLAabxFUT19W3AfuLSJVo2uJMMavF31aDXH48aoWE7",
  "key27": "24b44TCJQpdkuiAhnXRbevGuyNwZX9aXqNLRZoKYXN8Rq8C7pEUannEgqwXreEMam68YuqssV8d7rV9JsF9rGSqM",
  "key28": "bRWLYZmMd6bwHs89u9xeBxGUL2hckTckkkCRgahxA6ajMm8BENAwejrHHzjDQv62e9Zqvax4G6pdB7XakYnX9TX",
  "key29": "3gFSBxQ1BJ1Zhie3CUSKCgXDE6PUafche1k3fwBCwysUDPoDfAdB6NXfh95f5oS9M1XcwMdwa9QpuzsRNFzyMmUX",
  "key30": "4Rd9btdjHZZ992qsBrtDwVGCCq88FLjvtg3TatLpkM6stU4WFALGoxqpEArZR8SeSKnnrqUJMHRBGMfrBv2uZLc8",
  "key31": "2eF1HP3B8jAeXkvoPgpYjEHc8zTGXHQ5toVAGhHAunP21MCgKgm1wQ5dFrBe7CbLN1zFVqWZ1CgVJVBD6EwVwZMn",
  "key32": "5Gz3qC3GQ4uo4jEPvGHcv17xB3iYo5sEisvJaMTRfZgDTL7MkZa1X6ZYTfMPPfUS6tyEgFitmXBL7zstdYwzZh2k",
  "key33": "5VxkjsDCXpMCr2dGgG8x6S5pS3e87xN33bRTEBgHUjQa6EdBztCzxi7XUWpntANUUMQ3t5SXBGBFKQfTk8nAZ2eB",
  "key34": "w9AYhVNz1tAvanjoYaWRzpYYTH2kRt2CoVPQpfiNDXBJatV4XuuTxKgp7PjnPPj1FPFQDVNqmvDuQYk3bFYkBpE",
  "key35": "5cSN7Shyn8F8KYNqADaCeFpmd9cMExjvrWPLvdS4P7yVb8v5oBQBjfrXUxCFGDLWsFnWHjH5njx941iMjWJ3E9gF",
  "key36": "af4negncLTepihmDmMi2WBTgz2ev9Ra8UktmU2xd39ckwxtkhwX1E1tj84wYZUKvMfmQtb224eSqzhDMyBKMC6M",
  "key37": "2p5eTT7RwcKLGhWHaCM75mULo8pEPXeWF3tDKevijL6yHLVRgHei8yyQbXGnCLopygHZ7z6H1K54diupym1DDZty",
  "key38": "65N7Px7UbcvvMLceZYhxWB1acadHji2kx1hw59LFW2Ansj2EHDecVsqcsVdp8S9iwSrXvxcj4LmL87W14PuXMn1m",
  "key39": "3LaYwEnNyNXKcSVoW9XoLsxQxDkoaDkmSreVSDjC8gmKou9dxckC7ZMV3f4B7aL1aRpBbSzwZZuPraZiEAbWH4fV",
  "key40": "Xcc1LtKKjKSFyCDVHXn4Sc26VNExXobYRPyGEtBoLM5o99F5YR6bEKxMMtm9vQesMsgrFmhNUTGAm3Y66tF9rrR",
  "key41": "2unPsAzR99vwuNRLG23K4P4Vcqt5Tgc3t77tEDB73sbC3n9YXQkmARCtoJ5TRZJCHahTdFHzt4BgUJLChYxoY7Lp",
  "key42": "48oXzac64Vkkf5zXAwwJohVCWvLYA76XAtWc89td8TYWzVpBZ3nCJo8pJGUDi57uPm1QQZ4wsp27dBVDF5jXfvzv",
  "key43": "itqvDFJL2AKKwjf4LncX4Wn6wBUoP4oxFwJbHSJqou3WjCu358MGwMkCGd4JCiGy26B96FhfH4RMwBKDxJmwvyw",
  "key44": "2h4VQLgiDCj2YjzWxQ29qj3vRNJhXhaDf5fGNG8LWjpvDpuTdE2osFpL5S3Wr6WtmDujcxMjYE7eYo51aoiGQo78",
  "key45": "257j8CgKgAADuYS3fsoKDS8WXc2YtUqFufTrRMNcLfLDei2bi7cZ2ZXofKXUhaA6uCSaYRbq5qo7Htug9xg3Few5"
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
