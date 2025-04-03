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
    "3vzavUmhP6sKYbj2ff2VxU17nxUrARkf8gXvVcvbSCG9ZfKW2m2agMAAAhbno5isDVaPSosaB6JbRGocTxXNEa8w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U7BpQnewtKAG7d7yeS3kj5xLs9K8He6xvyEyDTnRsYBrxobZdyHE6wKbL7qRonZNbqnCN73MGQCxozFcz7JwFJt",
  "key1": "2jG4YjyvgETQWWKugGQ7kCECDyC2uyVVzzTkrh5JJXtjW9gangAAfu9uDpJoAHo7LUYSxXGCVP2pAkcr5xSc8iiE",
  "key2": "3EJYQfZ2NELVo7BZW6cPSrc4Jy4nYb8Wmyg6fqbZZ8rq63MHWrTM9ziiNZtDrvQSsPsaVqmtEY3Ax83fqYM5ywc1",
  "key3": "3bQWnjdSdPGNojj5MtJaYgBiq8j487gRxV8AAbAuNA97PHSYPhdKfagnKwuhmvrGz3xuJL8vDJ5HsuEZsvNUXFWq",
  "key4": "5UznriCw57wXJdZ1B8paF2ETfMSqZFMT2dXpNi3Sakdnd9M2fY3cEV3buzMP1P5CNC1zjj9m73dSimZpxaWrkY7j",
  "key5": "3Vz8RGxiBrskeQhrBDdPbBnfJfX1EJ9hZrkS9G7P9ar1t7sXWLSE6RwL2tDjgLp5MZamj9CvVw1D3XKugNUnZw4k",
  "key6": "5v6Dq4tmKwqXPn6SyQQxf5Ro1wUcUKZyCiwx7Eub3hmRBwTv7PzSJQeoijXA5ekTdQNumt98G8Gm9t2oDVBYMgjB",
  "key7": "4NFNTrnNYfiFaGHA59fhX4ADR8Gd7GkrRAwMZyP5zxnoBznybSFKF377Vhesu3iHpbSc8YhAQRV7qBCpx1xWd4Uc",
  "key8": "G2x4ic7P9GWfanZTkYN6vLqEY9UQDF8XcucUKrzX7n9HR52eD3FsNeB7pVnwodBzAAkLgPMtu7wVVDo6GhUwjxC",
  "key9": "2HAZwYV2AxURnrWSYEaQLNX8Sk8kuFziWsXcUraqxowSWgJaUpoK4MfnQmDENLEfdZZXafi4gdPbd11zDXfkwwnj",
  "key10": "4NSnrZxTpcMJijyFjBLnidw1iXVwvQU9xQ8cVyStinEyXsiHFPfFde6tAFCJaQyVxq7usrLHki9kDpzzGjjHCebH",
  "key11": "44hjxJtrzAbRGoUnxKCfT3opJZ59FTrxsNGU9ZKnLJ5AmcMFVCyMdagAJo8DaiTbUtG7wxLg8RUTpRP5eh9k7yzj",
  "key12": "5fQFLuhTKY253fCeK2tRWC2vcqaNBuRXLbqFFGTcG76oc7EJWvCdfVKJekF7StWphdUsYUSKWuyqmHucqSDYJV5k",
  "key13": "t7CjWvMA4g29hzSpA4nDm5C4UN2xv9iJSvYk7go28GV3bP3Noe2kDBg8uP8G4jJzaTSCtUAVv9JwmkYSwyp6g8J",
  "key14": "4EcEcy9sBzX7SbgbwsJ7WfS7CTxfZSCkLMP4bDoNuciYM3wgLMUZAqf76pmfi2reAZkQu7JTdXCksT9zX1YMsPXu",
  "key15": "2jzThRUu1cEnz9ggsgmiiSdbh4mNrofxEroPJPWCMvG2r61MjKEL9qDHGQysXFQ3fG9nqYFoFvHPq753arFgAjvK",
  "key16": "4Wc9DvUa7G3b4CUksSgdmpe35z26VrKbpSGRYMtw2w4PjEbQfjmZyEAKXr5ACVw47kfAjH4ob6zmWiK3Qbs6eAdU",
  "key17": "MUhQmdvFd3YXJAcstoRsSkDohQadYhVYDidLfSD4FEovQnSpsGawRAv1mDXojvjgjqBqnaAVEVAeLFunHjPTgYr",
  "key18": "m67BUwujB2gGypUZhGkcb1jbXg631qvJLjjjHmmnJtni5SvWGkZFHwLgRtWfjmNEQGmMWMZueKTJRMUXJPXCYVJ",
  "key19": "4fFrBWKRVtbm1ATVSdpRidJmdBzLtyRhnoVRme12y5rNgzdjbsao8enGfUJJCexuRP9qqvic9KLSN6bErWLuHeXh",
  "key20": "5RgZzSsiUJGgyZDqnFnqXLPX28U1ZXRaeAmoawz93oFBFH5caHoet8RenpqFG5EQAhHH8RjsZxyHHSnmBRQ36SBj",
  "key21": "5WxYuPChV9oz3PFSgtLqoSCf1n3R9orUTTpg5opA7qdDpsRWeyccGWdkPc7HKrF4qV3PpeeXbPYGnF2iyTXisbDo",
  "key22": "5LGjuiN8rdFXHmwDHhLqu3WguKjZt4HRVPajbAQYbGZosrUkUaHNPRHKhZMCdr1C65ocY4Gn29g6pS9p5gDNbYRJ",
  "key23": "jqMP5a2ry5WsWyv9CDAptwixVXD3B9EJ3dzMVBTrwydtMTHFVoETfzuVK7Hj4EippoVkWPz9torUp8MH7jASvYn",
  "key24": "4uLVCkbTTgWdMsVeH1QnLtoFmdkDD8g8dhAvX9ye9CmbL3hBbbmY6W8gm41riqH7Sp8otzMkdrqAvhWbN7wgyMJw",
  "key25": "54s1TT7z79PbJ4wqE3Ht94Yh7Fw5s2MjrfYegFL8FtJyf2ZwrNLpAsYso8RfsowSP9EkDcWSHmVHM7kSqW8WRngT",
  "key26": "4bNtgs2S7uysJsYbMM6HBgbP7nedD8M8vhLwhhakXCFkYL8Jthb76qSxYK2rSH7WXFr1vLuxfafKtADiXdNMgUoX",
  "key27": "kTSMQyXyYBgXsVRbN27FjaxJS4sfq2PNPUuNk7TU27TXG94HamM83eqaAZHb1dCz9iZsvESwsTLK6Zih9VmoqRq",
  "key28": "2xd5r9cwd4BQUzwpxx24iLnMiyzW5PSx3T7jaMPvBCKC7fBQkUBW7tM5ohrmyuMrKY9TCntHu4yg1bH4Tut3honk",
  "key29": "Uscn7AbpCqEE9VWucFEAb5kzixgphp2vEC4MyCrC3T7TGsAbNDGAn38AYZEZdmw4i3xsRPT4LsKhppKMzmtUJ8D",
  "key30": "2mn3Zz6WBj2NmbvteTPBPcjyGkscEf1F8XvhHvMMXjcKs9eF2fQMzbPBXkZtNBv1SiVK5ZWZSi2EstGxUwgJM8SV",
  "key31": "dSd68wZsxm4watvb7taL9M5938fzCZH1YD1ENNuoSQpe8oZynxJsGB8smGsXk8YVYcqbU69NrgbozpsDjEPNVsM",
  "key32": "jiMQouet2aNc7dSZcwQzmcRUgWwodoCRMyu8B5pSMN7WUzTZ6D8cHtvUDpQYPMc8R28SJBaC6PCtB4wYWGiuYe1",
  "key33": "3thVDztMDx4R8nFvoanS8A9xfyGxBLyDkeWBqCzKYCbvNBapYP7mY8zwRiB7Zsxqiei7gqPm9Fy2diExCbxJYBTU",
  "key34": "KVhooTWsCQi58zcFAuKp7YSCpXhbbibT5YPiPjxTu9Leaksa59PQG4QH4pP12UPSUgRmnmWBhe5Fv6hgBrSnV11",
  "key35": "3tQudnJxNCh1SkP3cELzs4kTFMNtMfAq9NYRT9xtPQ3YbM9QE3RtQkVN8qyKTgyzERgaiHeDLoCPM1hiQjx8FtRf",
  "key36": "e17FztUMoGd6Unrg44PQbzUgsKFtqPEiSMwjQgiozwcmPEZC3e7bjhsQgypHX7nHFDdqoxyAkmNaBKJmJK18pKz",
  "key37": "4M6HEFZ3NjGeuniJ4thxgcU6kcHd78PHeEVxmkKtpPa6fUSBsq15Z2wQ9TVySvwvBTF5bCFV89WLM2f4gqyKM3xf",
  "key38": "5kbyYoVWXLAHKS9uYr49u1PTWUAWnxgprygquNygiSHPD1mCSFD3yXskKTvCipp72RV5dHzMNtsgLXzLuuP72Hz1",
  "key39": "614SUYECYxiFjhDDGEuZ62WaGokfbedDXUoBdCgRcg7MxYEcBoizGUvGhJjdpG7ybopi4X46chr6uL16X2Ra5tPi",
  "key40": "3ZJk9UWf2gce26eXwxhzcggDjzYQHcwht35vRvA5AXENpP87CL8Y4S28sNmZMpdbYZpBQusCUqha27ye7uo92N6G",
  "key41": "5aYR9GaT7jbV7gTNaw8PU1pp4Wgb82dmoYVhL6SXZE6LkirWJej6g7kxAaAK2YaTNaCWvUiPQsATpXAzSqxXv1rc",
  "key42": "2dxtQBzxCejmgftBh4k2kxrztsWPk5dfdV4DW99wYYn993p7JwBQ5NxiTXRbMkXpwxrRegkdoKaNiXzHqhZcdNtj",
  "key43": "4JX1DFmYdvCvUhzXBdkdqPuSe64LwixHaJNdzZM3H6F1KFXrM1sVPKcH7pxmgaeHpHc6m8CDohZbd996BBgamNnW",
  "key44": "2BvrUVrhzJSGmnGACjwmMnJAVhwqwiTeWCk6BJwG1KnGKZh7uSK4rAGY3fzLtFSV1SRUZWmPxr7EY189vUKTKZ8G",
  "key45": "5G6QzYp8EiXvbaQUBA5Nk3CtkrzuBEmD36CBReCLZNJYmmHz2r1Mh2x1BQoPnFMAyqfgQ8XqbBsNuRs4piwSDbtK",
  "key46": "2uy4mxb6tMRCEuwXBpuSGEPWFJuwja3m895Km7GYb7iAqBLH2oK2XSU4NnD5pcWh1xCsTMtkau4uS5CcU2Bd84S2",
  "key47": "2iNJZNpkvdfGCqDar77FaZWieJUwANuLkjM8bHaaEKVagPdPBH2sTRdzcQhp5MQfzAffMuuDi4ZTY6TQuhYzCs8A",
  "key48": "2MAXJZdBaRc9mPvk7DX1n6EMQQGUwyRepEKnFzGfJMmGNZUtXVRPnKgepmLb1ctJmzx42rkHNAYSNMbiTaGg6QD4",
  "key49": "4hFN1cvZ6xxa3Di3aWAPJhauq7otjZjwinLKf7Z1A797nAgFtusAUSu8nTECm3ewec9bxUsmsjHzw1CssyC4iTFx"
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
