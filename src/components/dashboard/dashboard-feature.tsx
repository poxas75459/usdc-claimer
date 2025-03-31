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
    "UCv8hNUgCnJfdP5urvF9exgggBKvoCu4ty9Ty4Z6T6WyUXDohQVeEAVNpCDF3t2WyRBRrz8dkfiutTcEtvR8MJC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JceL9TLKGKYhroCZHsKkdZKnsfugYLsDR2Ek6G8Fy4iaJsiwUs2TiCkqotAo8ToraGe2So1bRqXyqVW41AbxPQd",
  "key1": "4so3ysWfSxbdciSDE7vJ3MtjcVx3vt9qmzEHPX3hMsPtDipCDZv2i7XV1NRk986dH9QWqJ3jTPfhpEJZW85eXETf",
  "key2": "sj97Lp95UpeyNzKgY6PXiT2u4xgwaM63e1u2hnx4HkDnLgzZYSCXCoa56T2YbJKEDCKYHzDcRPVrYE5z9NjpnoG",
  "key3": "4BTu4NzerNgsu8PhWkKmfpTB1GoSzDBQNWtWUJsGHBmF5kXkp36n68p2Q26vMtmLF7gyygBP93g2sfgXXMmjf5Vu",
  "key4": "4e5bKxNhpoHik9S7Vwrkue8gxVfMTCn6mdSkqiuxg9K8Lvn1rvBP6RtgbKENK1mXybea1NyeJEEQKaQPYTdry68Z",
  "key5": "JujtvKLWfaGQFhwMNfFcqBEd7e4mg46Zowz9YMB79qxrhFZTzdBZsxG3fBvuX7hZat2TbhdporxkXiVVeRHiW3c",
  "key6": "61cMPETpkN1bx4G9dwnDvFJQC3NmvLNKMzKjokw7LjAEo8xDkbxgw6CjPJaCFEZK9dWW4ChxqKmeQCc2pAKM1JU2",
  "key7": "rzGXMGwZD8mWcRxQAG7zc2vdMEhX9cwpMiTsBxpxK9HgQt53gdavmxDzypQT47s8w6xzrBf1dWMEPZjN6RHhS5K",
  "key8": "5CeAxLNYb9S1aYhGt5859AsEqVVMuDw3yWCCzC4JY8YSg45raoLsAjYxXbhMwetB6dEsufnpWMTaDSgygKpEXBen",
  "key9": "2BVFSJxiqtvBz5ANN1o2edmsTEz8eSoUb9TyD1xaGbkxDNdHYkzS3soHvgaFvV8ujrRoviQZkMjk7RjYfEqEaHPE",
  "key10": "2kmN9EBrmSb4vCvDxsGR6qt1wJ8izdAsqRXWacaqKgdxniPeGZHEiZxUtmHQZMriCeXwSd5QYgpTZzutHAjgQnKZ",
  "key11": "297q74Froq5bZ2CScAxKYiRbcRcyNdt6Bjq1Gd1ah5WE72pz5ZKfGUvCeezvaWUkXPYUGNozdpZzPYDKaE19s628",
  "key12": "2jBfMLd8JPBy4Q7CWe8xpLztLRQ987DksA5Zjdttg7LRWEoZgB35E9dVWxLqEa4CvyiTUckKtqHNizUfbVAmMhKZ",
  "key13": "UtQwT3X5brtv7uZvoSr6kf9iw5zfZtGMPrwYydg8RmgvL35Y5AksFQgcEaoYfHXhLhACL44prVe8pCKLigJVX6v",
  "key14": "2dbVPDwvs7qa3cqNVxDd7F6AHXuDW1rSFaGiksPeW918hBGyfeokeJ2VoBXAZpVtZJwqSpa6rnw7dceVyWTZcf8H",
  "key15": "2YiFBV3eijpr2yVZaUdcnxEzs9JRryZDMuBRCJ947kmtweRTy8gxkxwQPa5tt4YTi4BhFXeBRmgAupoZ7Qe4jTWu",
  "key16": "2GgV31B3LHBTLhDAT5xnDmfD64GdBSYs3EpTqynYnXe9GekFrksVVRLz1ydjZGsBqSXjFAnhnkzyiNcHnEFixsDJ",
  "key17": "5JdMAvu55JwXTTwbDPSLw5nK3SXNPdqfTAk9CwZRSBNkQbqC1UkfubC5yXjwsCeM22KiMsB2pdkkspUku2RbzkUf",
  "key18": "3sGRmMeax5vAPrUwPWgeLiLrQ3CMbLn8kNEZsaRx4oeZQph1E774CGUuvSo3C66A3hAEwBzsEa5sVC1ovER6WS41",
  "key19": "3TSdSujpMspTSnWyuEHw3nwBm3coy8vi7fMnkhXHXu3wHstkhXjNKEFhP8dZgL8S3kXt8hMANw5meew6ijYhdVaz",
  "key20": "4Z4eDHpDAU5iN61TmvKPozypYC3Cpar3nibx8BsSnsvMicst4Unm5xfwY2STENf3TxWKDuB9pEeooinVLSUG6mPt",
  "key21": "27E1YWbDECjUVZFpZT3TqArwoqoL3LnpTRkYvXxQ4y9fziX8YeL4gNvgK1g5uAfAVR9rjYgozyAiKRrA12BDgnwf",
  "key22": "2bG2vzy8Cu6B8cQvmgnUT8W2o8qkC7AQCXLU7fizd42dB66yYL2D2ApAYjez18hVKxeusDyP3679PzgMddh9GUVJ",
  "key23": "5XiY2HnFUnJLUMfmZCyVk1tfrPoePjvrqjC4FT9mQr9hHW8fdSLKyT6m5sKxzfCiLSphw3mdwoWwydW7xKpeK8kk",
  "key24": "4teacV6PSHCrnJTfvgFTxdw5Jb82zKxcyAZEYN7miwavBjoYUAqJDNYytHLgMrgS1epRttett5kvDqJtWhXfvPSA",
  "key25": "BxdaFGGBMur9fr5Z482cYp25LdvWG6bPMfj4X11LoYDe1nmZTVrtGiJr3sP8HEF1h3i2jo8xASAS86HQvTjfutd",
  "key26": "5XyZnKWUdhKuUZmSyn8Ktiw87BHfsJ5jCSctQ1ZurQQhN3BwRu4Kr31Bjo4jF7Ssc8zDgnu3Vq9MSSKT7i1ijXyo",
  "key27": "648rQQTRdR2YRM7tr32iDQCLL384S7VDnpyd9y4P7gEpFrUe3pr6twLwEEHPbLjHZn3iA2EPNJU6Qms3CBtzGRvo",
  "key28": "2cvndWfr3mpHfFxomWqXT81R7YQaX8gEeebLqfn1anmYhnRivj5BV1bJce8Puv7QWWatRcyHiRZZAt8s5LCWWvdx",
  "key29": "BjfhUATP3A313i9z4WdQV6wYPAxorXbFkiduosjVCK1zJY9ELbnyk1ifPciJjN4QSUZhnkFqM73bvNgysMtLov8",
  "key30": "KY8XZk2cAa8h1y15fHCwfV1XYEs4pWPwVcCyRn3TSwX9Aw4tP6SQWfSkwPuw8YgmVEX5hm5VjJ5woQmZfxarGXX",
  "key31": "3VePCuFBPoLnczKvkTCTmPVQQ21fZXqCCghY6KoHMEwkyVVK7Qjzfv1yqDVkoVfrnunxSZvDmEMZ9wRH5BVEpNjR",
  "key32": "3fkbkjxXE5hW37qiM4Te26op4TyQCjBzgvmWZQF84xNnjK1EHg5gRt6BpzGxPTdSVhcTynH2pnWWbfPA5BSRZhgC",
  "key33": "2dWVSdrFdVRWHwviAEQJrquFg5czuQETpNHyX1WB2nqGpTS56zsRhskxkKEbkbguXJM5n4u5xCg5atCP99KMqnHM",
  "key34": "zqKp2kH8G4LG4Hj2aWXcp9pmRTVKoZnkfsDoTHDCeP73WhQg39q5y5AfSTz4MjZGuVercyF4e2ycf9LJiuZbVxq",
  "key35": "pe1L7PXnXVe6v3bxciTipxYZSRzJ2YDAEWdDyRF1Fc5wra72CJ7c9cFh6efS6MVow3fUWWd7fmPgkzfYFA8co88",
  "key36": "5Q7uTGBhpL7yan7tKFKpAj8KKafpsPPNr5vWJTwb1qVkt3EuuAN2GwnXriUuXhd1UmzpUCmtyYKEPMw19BZfYQhV",
  "key37": "3FEqnB6zXJPG1mEFKqKTyiDYoFBm9C5qypjTR3aaNayyqBevmaUdJZSHftdYQ93d9PZjFnt2LPCPZUEiQhNVbCmr",
  "key38": "5s9ZCzgkKF8g2Lzu4tjCUWcaiMJhc57vBSLcSPh5LVGiWXwrb2AKkWiAK3CsxpSYypVJVeAig7e73N5qTeT62Q6h",
  "key39": "2Zkjdu6vqvRRWYoS5tmTBKBCU1D5PsbnDX9dbG2NwX3pTU7w8SQHTxjWX7rsppvq1P4ABBC56GTmwXnbgUXj69jN"
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
