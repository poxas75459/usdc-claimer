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
    "3YGUGhimhYhmkRA8tx3Fy4ffQfBhxbQmcU1pcLaWLXLng1HqU42qDGaqxyk4Szurzgue51UVCNXQtSHnRMePAtyg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49dU2DRiEqsbdtMrWRevGKSEQ4URBfUXUNfZd345NR7SDD79zEFZTpvFk5MvCpZ1EPYBxNDztt4A64cNpn2HiwKi",
  "key1": "3fSPYgyJCAc2Da4sCMie7M6ZpgS3QkVtoQvKtD5dySeH1eLXNURoByccVo8mmPqmKUCdtE3NHuTW3oFCP2GzAbSU",
  "key2": "5zu5opX1LzaD38Fih7TyGzermt6TZNnFwAscjdkGanfbpxwZ19aa3mfPBjxFnx91i1syMjJeyZAUvHszoGJoMJn9",
  "key3": "252VdKummgLyBPPGghkZGEggXURD5rtSik1dN9HgVGKA6L1JA1V6A4ZPDwz1cX3LU2eeWGyEw6LpUNnhkit8NraW",
  "key4": "LyEeDgMpDhPmjRqjRiZPFP6W3UqST1up4WRxtfXp1omsWWnwm7j6ich5Tz38gBTdVfU3QvFMb8RPCFDwmR6TkEX",
  "key5": "MazwAVEpSUaA2pRRLLEYKRTWZXNjWbudE3zT3YrFMfyq9VwmTobGZKQps7HxNKCAay4AX7XLYcT6rTQ6Uu5j3W8",
  "key6": "3XkRHS9i71EPayqva7RpeUyQfo1YRkMJYn4GVyNrENf3TMsZP4bDrdR6w9Suh6SudS12cQquM6PL3a7mWDnHKBAD",
  "key7": "gpUc9Dfk5cHphVH26vmmnF3vZbS5sW91xJwK5SwuTR9c7XULGpybMihQ7zoqNu2sQG6JynpXN5VjtaKgZbEzgaA",
  "key8": "S3d63W5qYrfXxo4Z2rdNrTB1LqA64sRyoRth37Vwc2VURhx9EH2xLYjfRXqqZYhRGjuqUtinEWPM8j9GU3bo25B",
  "key9": "gV32H7jAJshBhyM9NSkQqZ9FjYQQkXcz8fiw8dscDpc8pahbXRUREc3W34KBm3U34ectVwev5bEzeAW4XjxUUwW",
  "key10": "PK6Q8TiV4FmhAAaLoeschYUUBkxLuxXNK1uV2vrjXDg9kQ97yJUg7ondNXJPXjFCDs26SxMRpyQsPYx9zWyX8vx",
  "key11": "3X4thWsqE6orRXbQQW6wWNP1AxuhMKB4FpDzAF8hRyZSCHZGqpyHdiP9aKX1WkWaTTytqBz4Q22mPse9veTJ4BKo",
  "key12": "3c8Trvy3fssBUppaUE6fnj9fFCK8ZdhpetuRJBdHzFvpA2mtFhxyzVBR3jQXrbqQMcKwba4DRTiG36b9fVRkCoNA",
  "key13": "36cq73S4gGT2aetmVBsgUe4N1vKLjq3UjanzkU6m7Cp9Qk4PiGi4TV5vsimjQv9hNxaGJPxSXCAZ8F3R6uf5S2vw",
  "key14": "wqaA6b8XHeeY33LeYjVjhi8F6X2F1TF9rtzbQ9kzvnDs5Joe7twMezPEgeJ3Uug5fSWCgy1z5N9LJSxMQi75Bdh",
  "key15": "5V1q72NGtsKFipnRxWfvF47GtfDAAFNp6pDt2jQWqR7oB6JBYQwJpzPf5RS6GA2zdnxu9iVFwTkDhNzsxrscTZnd",
  "key16": "65ay6RxpmttNzp1PqkHMAj2PwGQns5HpGpWX1j5evm34FZLgSUMPSsavPveVKubLiGvBVyoZWjpTHdFkJbPyqGSF",
  "key17": "4r8nxXxyqPyAdd5Shq1NBzn3MisEgh39AFGq64TK2J41PjKiMsSFdh3rEN5SH8gLrBfXXeurcixoZ7bzG8SB72cQ",
  "key18": "61gJpGaMBrCbLXmPMxcE1tKA8sPYGdoZPxrnRC94okZCGtEEGkxxt89xxwN48MzaaFG8SodKQzaXLypbRkNzuNg4",
  "key19": "x6ZuLpqeQPZcZ5XRrLy4ufHBme9Yrw4XzPPxCE7xbXb64q28FjoekGnmzFQ9JJLvZJAZeSEpkHHAV8tQr7dW3Sm",
  "key20": "5K6qtHfM31CC4x1dAYprzFyw5wfut9ckLvseM1aXewwWMjoiwRuR1uweGkD7gfqC57uGHKa4pRgtGcLdvm8xThib",
  "key21": "65Wmr98uGPx2JypXckGwXR2Q9RKpFTLUCRWyDUPeh6oHcsFZbfim8ZVxpT45NkHmp4DJVeWm4QZ7Qsprv9TqTCub",
  "key22": "2pDbaCqL21wrkXmwEr6aUYtcd81w9DMvVcdRz1ddzmMC5uuioB9akMqt8YdZgXkZ3Ky8vPquEvd6mWQ9BGwrcb9J",
  "key23": "3tMs4BE3heQgxFgqDDo41bQ3vxUfAACz4gyETD1fgW1Fs6F4oM7m19Z4FcsMbAfjaiKsXPyYGtPd3A5V5ZFEw66p",
  "key24": "3Km8hQ7yfgKP2NRPgZQuHfg9er3wog7nbbucjzKXdetxjjLmTu5idxik4WNnq15kXfXdNcLjM9kWTnFUzTEn5uoW",
  "key25": "4owN2DqvP8Jyqs1tSQ5cVnipua87L7ckDKjVc6ffKstJarVjYhNoXfRod9XXtT95J1vMSkTFUCwfQDU6Vz7tJkjF",
  "key26": "5mZHxYmgqK9ujNkFSeCAYPkTq7uMyEfs1UCeHN9govFL9asF4xGNcRCNpVYiiXvu8eqpRNGZWYYXFDtWgpQpV5eB",
  "key27": "5KQQhmYteWBTVhLhyASBHJfY9VFgjxpYAGgQDNFSSwVBNdWJSLMqE8Zv7HbxM6Mheecpr8EwkPU1b6Ur3jTF1YpP",
  "key28": "jaepNSVK5FnSfw8XH7wCQFgT71rB3LxApJ8RRqhppGrKnro4gALtYhoMVuR9rgJaqzGDK7MZ5Stk4CzXrPVupCz",
  "key29": "35Kx992ErUcZgZw1ANJQ6PCR3Xp746baLnDD1fPHjJcA7UEuCqkuQ6NT75Cfs2SnuHWzTsmQbJhw9VpznhRpeDew",
  "key30": "3wAC2Q62XwxnTzWtXaeFatQtVVR7FrxsgjBRqcWaTUb2iEbmPc7epjWx4opQXUfEiXYCMhyCrxMVzbM6wYmvAXSF",
  "key31": "KGoc97ueimbnoepBE3XgFiZu1zeRrQ8QWXmVaoPfNHrJgMZVh2eKzq6MzbKihyLKHig9td151n9nUHDW3LHFJKJ",
  "key32": "2LJem4oggrJZdvmNoEdmJGAzX5yZmXeSbfH5yxz4Z13ezqwUdtN5q6kqzMSD2YcGP3mGTjpuQUeyyhCUJApWubLy",
  "key33": "4z9yGKB4Ahc9Wve492MkuexHmeA2LG58yH5b9fxfS5xXvYdw9yrbGXURmuAnXhAhoDWPhMq49JtGmHCrfqVBbyjY",
  "key34": "2VX21uAcPgnzR2P1zYsgxHpHCFecVrLeVBQKH3ausqTtcpJhqK79KcSGTPkHqmgWuw4vxotQpEHZDzS7b69qo8xa",
  "key35": "3xePvw3ggwRBjM1xmUMkKcnzHg38TmA9Pg3XGm9AgtBVD2THN4ntp33RtgYq9N8QiSBopfnxqWi6w5LXzbf1Zz5Y",
  "key36": "MS5MXGnDjaYvsE6anPaPKeQAdQgajgoQZci7GhfQLpUZjUe6Y1LJgrntnDYEFaqaWbSvEZKpJAKi3tJbX87icYm",
  "key37": "39Gty3WYF2JDA9vh1XKMB1cRHdCrAYobA2J9oQhcv15BdoL9UzS3tRg96RupWkNPptDMWpha8UtogKcLGa4qPBhX",
  "key38": "38dBBwFt9zRSaW3rTiKckADb1YQRrLMbW7XKWSDnadQjgbBmfzwwyrdvXqE2JK34KeAjdMieRfdCDHCywvU4i65h",
  "key39": "5hc3HNo2kdStCr9Ztza5DMMqQzJwsD8nd4CTgr1mxuovbCs2qSEWd5VsNHGhnABNm3A2S8VQR9pvvWkm3tPZrPR2",
  "key40": "Q9jSuZUBjnQJPaqmGuFdZ3CfDajT7CkSZPosZBN2F5qmKnn2wPu7nLCLYRTrT1J22awKQHh7AV4DWHZqTvrKZMR",
  "key41": "4ySCnhh41ffS8eQHUyAgUtehQxwMbHhucr4ZJf6qCeoGRzYE8HhejGrUcRHxndsST5aZTJN4GZacDB6YSfGJZaD7",
  "key42": "4Z2HL2yt3CtcCpQQ2KEHP4KoVctqPP65i7T8YTnrHo75rhu4zVy54Nff68LkGfQkSAWY73cMLCDJhu4pa2KCyK61",
  "key43": "3RgKAYiZoQs2cws6cUhew8PWuV25a4jvP8TMhtt95fnLePgaCUURqFWjbTg9xTEcqiK4eFbhBYFh3jsWY7GwjMhs",
  "key44": "5myMCRMBftim4XM4jB9g2W3rszPhRa6F6zRziZVv6uY8opBX5kMS8zBBGLWj65iN8fzVvLrjdwCyeNJFDnGphute",
  "key45": "4HDEvhJevWTN4dm3B2L3thJDBhCccMqSjpq1dC74T2mE1fCjDKWXPotLo2o2rM6A5rkRafPaFGnQGiNkYLh7zYia",
  "key46": "44ezwbu8i66GwFzw326H3g862q9TowjLx4YovRXSHBuJoAXQ4ZhNJapZHVQ2so3ecZbxbwryhwvPsRfuR3C9zhbT",
  "key47": "5sK88GwCq9YiPeJ3Xs7rUEskk7AEMRw9v7eVP32RgjmPVTeLETAhvub7gvCMyF3FDB7iszh3pEZ6GiSRbH138hAH"
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
