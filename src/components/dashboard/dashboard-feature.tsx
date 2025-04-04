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
    "5tMm1KomyqxfnwNE7DCn3fM2CdKovmW2ESBD2eNnmppeN8QuX4V1zSMUvtrzfLnHWvBmFojWoCKpVhK2fcNFdSqY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZtGzmCafKKR1fUSKVHe6Hxi3fFh5PLmhn9eTpxDvbLVsUVUHdakNyejfEk3LJEdiUk8pYsd3qt6tYFyTReh3fKi",
  "key1": "46ZGyTEizRFbg3jLGUv2Yj8MieeiktJqqmy94WBBHkZHCDBFa6EFbKXucwG4SzS5NNYx5QxdVf5anvWySj62aUf4",
  "key2": "2ZVBksZSyvBUsyZvmxDgLxLYaGUMRbhcYggd7Cp1MhACQCznYtdadisSD2mxGbMrAwBKjUjTaQJrkQ3ztkNRAVDd",
  "key3": "5SocrbWFePmTH5pzBex2ftK7MU8qBG7WMoyEBXWygNQPx912uUTWNinS3Ue567JW8MfatJWHMoQ1nywfEJEfyUvZ",
  "key4": "5HFUn7Fmfdi3khkDjswr3oWdhSdGgSVY468NQ9i5gZUPpDLxwm3KcMEiFCwaBheeXCAqs2nxoz34agroyKw1PYGz",
  "key5": "BmksMZBvMV53a4puMwEZ8PojNn3MEBvRX38hrpa6td1LmYfgX7TNg3e5Cia2qdEFnmmZHxtjbfs3JCW5kxy5cPW",
  "key6": "42LPQZDUCEANmABJSPJr6yvqPwhcYjWCGBWtZ5HednLagpPrPdmyxhuQBgD64B1MBkqSe9EohK4REqiiKz8Uv6Kd",
  "key7": "GxsbvySNthTS2DFPymQNGqxboxyPhDLE35NeFopiT7xhadE73fLY956y4HBFrpXcdVsEw5b3M1kcPUamU2kp4P1",
  "key8": "2bHEz6TcUxTPkz9hva3KW5NUYTKLzuFkoCCJyjZsuwQPm1KMegjSRxLv3rVzJX3j7YU2cHNwNNZkmj2mTMDXdCNc",
  "key9": "3fY69XEDMsGUJSv98hfCgQabva3P3rEtC8CE9KUDdstb2BtbSUZ3373zQ5zkniM6LmsXqwb5PBFTvga8XR6tuKgZ",
  "key10": "tfV65abLmJP7uZR6SFikWBdn2p1V3sv9jC8S7TGMmtmzSm7dk9r7NENm7u2iJMFg6Rsu7gQP5Fq2ym58tStY6cd",
  "key11": "GWVxfPeF51qKpC4ww9vkuSxtuvpVtZBCbgrrCAdJyWDfhRARhND8RxYWbgbS5WxJPziAd7FatvopLYbituypz7u",
  "key12": "2fQdqxpNQqhgYuD5yk2f1orZyDHdAqDN47LFDPaPJ7LVGnH7abPKJuZUXw4FsEVvRcaPcavKrYrPiR4smSYbG7WL",
  "key13": "aU3uLcwVGW62ciXHmsaLBoy2tCaUiEN3i57HWUGBFgzeLEES9r3pevmSkAbjjKNUSCj2MAg91ZQG2axvPxwkipa",
  "key14": "4dmRrRUV9BcbSsnuQKjpPMo3Xw7AuVfAcrkP6tuW3qx9ne27BsuokZAYWGKSnmu1kbve5pyoU9a6EyufmZxgCXc1",
  "key15": "5etv2PYFjSQ4xYDp6c9HMkArarEyskFxAyXHmvqwfsY1wbLYMBQZi8dFbrjL8MaUJsbzcz63hxnYKiwnqbK5qrRY",
  "key16": "2E6EjbXLQ1gRc3jJed97dUuaJ853jQ79bgWnf1zu3vNqawKDS42wFVJj1fnqKXZjDzrb6iUmRodDaoyTTBieaAQd",
  "key17": "2smFTj8i9TTnFyQaTTwPaCKv4U7u6bjFHE9fPVx4ZFW4BVcYNk2nNxWja5qzKN2ZihYEUkMrkQfsEc5BA6ozWXXB",
  "key18": "59gRBSS3gYthLGmaRoPzRoMWszAj3GNjLzjWmhCcYDWS2y4LEXC9Sj3h73YDFXmHMQjymMf6iEdNXtHgJpsF9oJX",
  "key19": "5qM1NjrWtTATchqde6JHKiF3r1uTpgDhknWnS2wjeDnmw5vUzKTL7vEDFiJmELDGJWtrgix3TeDGSaVdbH6rrjRL",
  "key20": "49PneiL3ubRMhYcpZvhea76aiwjN7iSTF5rXH8iiQq6E7roeWPjMbu1cKYeCWMNkv6jgoTscVxcph9HecgZQ6DhM",
  "key21": "8djQExdoTZGU8fBEZv6citVjLBz2GYwwCitD3bYfNon9mUuNWVx8pNsEszfzxnP8nwbXn5VakDYhRjBs3SUs64G",
  "key22": "3GdgiVMtpGjHgJqUm2sXzMQRqzXEEDzmPC6Cdd3nHchvbgjWUekCtwobpc8haDYyoZfUkynBqhsquYkcEWHydjYX",
  "key23": "51mA3npGSRFUqaYzHETnjjPsGieWEJeHv2wD5T7hYFts8Bws66fcZFANqA57wd2AWwznw7pHU8JrBASWMph7Fe1G",
  "key24": "28RmDkiNfawabnUa7FPCYvRWFSUK8toa4JNufuSA4sSf3Rp5SMgLTvNNvQf6iNTbWvWQfSLN4vwB5w4pPGLiExfi",
  "key25": "Jc41TYWiPCX6mH2T6UV5yBbzZcsgHz6TtQhppjsMDTbaNfoC1Qko1SwJk72mfirj92VRKEkg8UvzH8N5Uc33c2d",
  "key26": "5fQf5ZAmnYuNxXvCisNJ4NM2fHZ5bc9jButK3Rk6dKY87Kq8UJEf3xYjJ9fPHnS7iwksFaLZzGhgycAYrE6cZN6h",
  "key27": "5Hg55XKae1ZXiNhWfEyife9dKtew6p7j8JVeGVh71joMaxA4utyFcg8LbD6wo3jWGtCuQojNFbkWamggjnJCc89m",
  "key28": "4izDp3TVLM4TtPGUX1Z2PAXCboK6sJFiaa6Vy1c3w6ngkF9qYhibe2YGUragdqA6jjk1zhx55SSkhwB8donHHZCX",
  "key29": "M9mgREcxRJnmyZiGuKhXuVc94zKKKrYZDUJ1ZwhjzM5bvPZVm4HPMPArRZsaPKCbYkrTRXctAWm78UGTUqnbHk7",
  "key30": "4VnfH9BMvViNjKPEEoQHBkegBiyDqdFsxy4huEqmA2SaxTifdE9YgztKtrxZBQfLh4o4MsbRyA3316icJi5voAEg",
  "key31": "49LM3P2XwRPeSCMSYNZmH1SzE5ow9AFKaKS8zfSiHebVTZt562W6BfTAHeMjW8E4Sred2A9HM2w5B7sVkhZKCXXM",
  "key32": "TjinvwttzTXy5KVvzr66dF3QYBDH2wzphpkMSYBkmnbMDTzPQR4Uf6m7Q4yQwWM8PpP2zv2axsQM8dRvN3dGvVm",
  "key33": "5zMeNxhtestv4ViiqNitauf5FydkMn77E2dyQZgkMEnMHpY8QKpWDT4iWUDUXATpwQXa3duoxGU9zowphztECZXJ",
  "key34": "63nTYtERiso3p8xnmajAn4G776jKg5Cp3AHpYJPjpQFmYMpuivMprzgncU5qKJ17EPchnMP9aRSrHdcER2Q6hrpv",
  "key35": "31C95K1UYH4E7VsNp1fF2VanF2zzAtxrqL1p4TPdFHkz1Dboq9bfzEbepg5daoFAcPYJZWdhxxcchBML5x9mnGkt",
  "key36": "5vZHXzm9XdouyxikBpkoS5NzeS8wK2WgjydFXiqaXLgwzZUk3VMkcaew1wtnrDBAaxTHNVzuykib5Qm3rjeEoyKv",
  "key37": "4cNE697Ye3WVy4bqTbnPyFqRpXFLrRHryJxrKLEFzohoFPi4XnGaYUTsXCE9zjypWGtJd7Ey5QSHoTPiVdRxAc9v",
  "key38": "5HHTtoynTBQKLRxEn7wpvRFdk9hue5Zsbfcy6UAWcMQ4gW9fj4b6arEmL1kL1x7NLQJxzRAzNSGoGCrs7xQyb8JQ",
  "key39": "2XQCUrWkoLvcBTDAW7LY1ydqg5yqk832Yszdw1SsrBFkWBEPzCDbTYFMvp8EkB3mn8gasG4utaQHYcCvtfXQhoAy",
  "key40": "3T5GbzucWt2esVqR5qSuEAEswX3QDZhpnitoPVmt26dKUG96wKeVsMBqtiqvrcwvBxLUjub8efdztDz6W3vkimTi",
  "key41": "ShSx3j8PU4U6a62xsYsFZstEaYPeb33CDowyZ6pk7HPtHo3Wur3Zv9L2XUZGKwCw2AfBVkE6Qey9NW88YSQbfTw",
  "key42": "5q3oz4g2D1V8ZdZ6jtT8ZKZkqbrmBakQAsG9GCjXgd1RjqETk9wP81Bnpgo3TRHLhgFr7zocR7xgKswjb45LCo2F",
  "key43": "313zr1f6nofT1ptpdcyU6ckkYMgbi5SpUvXrwsN9ESSHHcU117865oPU8skCJ3fH1VnxSk19RCMa2nnZCHsVV6cq",
  "key44": "5Eq5GPAy8kdbzA2QhuDRNYg53Enawxau9L3ffi3oBkfAjSwwKx96q2J5wSgQYzG4gfgSqLjcXbJQBpt3ogGEbjZ"
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
