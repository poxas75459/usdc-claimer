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
    "5swqR8LjFmuaXvtttStrW5APwceSvaCTeDQMRinSGpVV6iQyume478WaifGUpio4cmB4DGBMiuBkL19cZfKvHJRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MZePkXGmTvAbbmhuvvyP1mr98uqf8b6EBCK9TcJVP2ikdh8yppTiJzwecBKvdbGkvHd8bNQZaKxEs1rqT2f7aJJ",
  "key1": "5SxCruhi43mvmeANXSALBmqpdJgQ4o2csNhbhadhko7SFoTzTwQVhv4iUyriE612J3Upu6Bp344w9JE7GVCRshvn",
  "key2": "JLhLVycz9wqgujpj856hjud3XMW8oLuq1kGH8zpbXy26Ju3JsBGXhiKEEJxFqDmrhPAUijCQgeDdwCFTkUjMGo4",
  "key3": "vPttTV1qwMr4QsefPFW3bm1CHgkebA4VGNzcn76k2q6EcSxyuXDRg6dj9YzZL15SsdRh7a59N7hWQXrzoe9RHfc",
  "key4": "5H2MqeDrSJm27tCKd6v7zvSdmJP26MEL6tdXKho77J9evbiWre4bd3e9GD6Qa5Q3q5nb46qfi792ba8whz7vUp5B",
  "key5": "UsH3H7KCLcTVTDCjDjGLByz6A7UcE3QdV5CQfC5ac8gWhAeuS9rwSEgLeBu5fvPY5fLnzgdfZdVwzuXEmo4erv3",
  "key6": "u4w4CjAHnjzRobnhHoM2Z6Sgcz6NNyeVgh7phFDg79o9C9RARUtPcLc63YruMhrgc5toi2xmWgyopsEdAW1Ur7o",
  "key7": "5TQC4RVmrRA8kDNsaF1iJHwMDqfMyTmr3GV6vXFRd8hm4WYcyjHMBfBeDor5xW9ZRL3BVbrQfKNfBeDAAPUiqM4b",
  "key8": "F4z5ZPyWuDNnuVuUKuN8udQQTmHm8Y7zooxAeHjuaU17Lb2VnnTDMrwJzR5VSP47zHTWveJafRt3bW1qgHXxMrY",
  "key9": "3CczMurdALXxRcnsngUvHQGAaRvfqKKDDijvuvTxZ4ju6vSy6TLuF5enfBGMzsgpzjArtjfdvek3NHMAQ9kvG9UE",
  "key10": "2aQ3BcydAFJx8uAQPf7mSWf9mzGQifYSJj38GFHhdgnd2wgBRZEjQpnHfySafUu5o91hY9AT9ZFz5MWhr6KUsoRc",
  "key11": "5TTdzNsCHZQiDDevyW5H8xfYRZnr9s9s7EsCbwPQhZPPzsM8ToELd1bKzwCL84a5XxAi8udR94dXC4SNgtK9V1Kk",
  "key12": "5ZMb3sKCZPnRtxB1a4yAYgbzswz1ohSM8deS9bVd4WaeveiovLYgQjuRZR6nMjm7PVL6HFaR2eAYAbby3V257RNQ",
  "key13": "4n4BH3XDqQbssceT1Ff9myTVTzcv9fdGeHmkzVFd7Nhc4wR8TjDwdxXJEvXA1aXijsgzTgxaypA8ZTVMpa8tkseE",
  "key14": "ubBFdAXzaemZ4Har4Bie55Wzf2AaSQu3FYFUtg9RUfjhLd9D9tNeELrUo8Xj6zxKMS2qRF6XB68RerMPgGqrPSA",
  "key15": "4fNdzHd7AfXEqGUG1T5AtyPpLNDUedUWpYC48zWo9K2tnLTPo9XWQxf4AZA8boMtvGnMFNWDERNA2GEJRd2neuDF",
  "key16": "5h59cJCQKQDy1Qo9CAbvxbsAcvfFxrFfyc9yhG3jQ1rsdCDUa62Kg1tgJGM3e8u49MhDwh23MS9vxu67z11AwQAU",
  "key17": "32JWSaXcDcYNZC2kKU2m4DX6DxDwDfUk68CUZoVaiiuPoZPTKjjE4NGjPSY1gTQXMYddEw7gdvibEQ1EBu3DXXUY",
  "key18": "2UnbNn32QLZKpjPTgZCh17EKST9BaWDZyKXrRfEDp4Yq5myCp35heieP31j6zg9CXYUDjoiJWp4rRR3qEaKmn4qt",
  "key19": "3hL99LkABoDLNyC3kWkMUnihRQwBpb4Gg7bznU4XKQpuSM16HfFJhV1CatuX9iHnU1sxC4MvfYrhbBxBzQGJGxTr",
  "key20": "2T4R64b3eqpLXRpmwqDUx6HUHQwM3rM4UwhYvebtTR1MWx3aPSs87LpFKwAMS888GHG6wm4d3YAEZ3sHsFtMG2cM",
  "key21": "5oSFc2brMdVrz9JvrPxtqY5ucaY5aNUJ5mekYVxcbCqQqyFa92DRTgFd6cveM7pc59VSyNuV1BTmQuomq5Yi9gAg",
  "key22": "4fpnmLWScr3xsK7YK8NFmbvo6iYj8qDRQTXCqdo9kRRvxwbNbWVLLDtQg91E6GS58mdpVWNcyeFg8Q429t5Gr9tk",
  "key23": "5KtMCAqZPF6HPft5NFKyrijxxG9kv2e8g4oRG7M1c1jCjBAKGEnLRwnd8PU5yBLxsmm4DHL2g9Uu9RyCf5uHDNjM",
  "key24": "3DRE2x1RHkA4ZeFSHkJu6sfzMXTDNhxbTqqgxEUjHt7DNHipCp7Fxduu4tRZWyK2xifWdgsD5zH8miTQ5hB4J3fx",
  "key25": "56dV2toAfJYkHCuS6TcQbrfYgZ3pvgu59sLChgHjq8UAueTtb5w6GcQuqfXjb4GTSrSZuDEmFqUGDkqSfK4JK3m2",
  "key26": "5Ny5G1Eao5u1eT35AtC2pwkXbDGrK5y9cAMbNxwSDzute3tvKQ23kDEPNVar6Yimi6Z3ZfV623A2ATySniv8yT7k",
  "key27": "2w5MMRgLc8FusKaNxoB8A7TdSpJ1nj1NHTkCKc9g9WVUwZC5qrupvSw8CTXpzBRpwk7B9RBZCqrjyJ82VJH4sjpM",
  "key28": "5zsAgdXui7EfDm1Xi7biWJRbNg7w663iYGfJxA3njewjxXY56kcG1NUupkguy8AMtB5DmsvuP8MpehntHrqPRNMd",
  "key29": "4QyBUphwK6Xnw2KQ42t2fnwg1qiUvzkQyhYnMnxxVvKaPAHmS65wtRkAwdbBvy9qu3ZvstgRFm8jyXs89broYDHD",
  "key30": "46Km33YK1zwQig6sARrThHZt4R6H82hwyxQe5XrqfKWubvTEvNMTRYpN6Bhp2HV4fLmmZNau84xy5cRs4NBbPwi",
  "key31": "5XC2P2KLWL2pmPQJEu7wugX72KyBRp435P9xbA5ruoHK2pRpSsVUNNQnggkKR3aFFaocki1MLMTYSJHiQvQ9DePu",
  "key32": "2mYLVBSfQ7xhGNAymBdMz7jxpDFkrCjLVqEJ5k35L2RYzEzgcRFhyn8dgJMskuFCHzYT5SoR127Z5ghQws5PpAsf",
  "key33": "5ghM1Ucn7TCu3W6Q3J2TczRoTviopbuZ3X9g2EgouQJiTmUKk75D7qkav4nXdDSSeEqutUfuxtZTYiPZuG6RYQBe",
  "key34": "WYVnxzjYcahxY8tD5SUGqpJZYJTEk2D2qGBZ6UvvW4MpoRzhwCyuH2qMzu7pv3mHi4b7dbExK42n1hcWT2Kf79c",
  "key35": "3Ta2GjuT6uLKxypXUw4HGfFE13aLtLPXthbX7KyYrDtjFc28VhkwSQEDNrkxWKCmiZFftrgtgySahPx3h7nkbRdd",
  "key36": "96xPRJxBWMLSshK6c5puCijEqrZqgTm5xhW5nmnyLkJmkJZh98XVEwxQJR9J5WX4H14ib5PKcHofJ5hhXrEViXi",
  "key37": "4wsA7eEAcEjTiXD3awg7w3qDZ1kzX2qyJGsHtEEdJhe2VMF9yNEHqud4odh3nMZvUCXSo2HaMxt9uLk9jhBcQPVg",
  "key38": "2bbw8p56MAbC9WvvenQP9mf3UmrUeHXASDq4KEWbfi5kTYCYLbq8WuZuwmvWZZKxrp4cJ5EwK2R1d2fGfaQHG7hR",
  "key39": "Wfi542nXwMnYwZ7juh8qxVR9cjEQpCihYNn894QTyqmAgjG1hcLDHLAjsqKnfxenB4QiV8pvKkJkFMsrrRwhy5Q",
  "key40": "N1rumXKJqcVd73vdHoDrxKw9xBmoRuaguWvgxkuGBX84nMgJUXs2ip5mRCodw91zuvQmsjgrQoGmjYfMYYM61kz",
  "key41": "4W94ebQ3BqhCMSqHv3Wjnv5AvgAfiT8eGb4CQvdjAcpE1FnUW2y5LZNeegfwfYubBAcejPNDdD4WLPp5wKibXNbq",
  "key42": "3uGqyURLVu5Z1aXvTSUGwH5sAMtbZsA2ms3jcqwoL24GHgggeXQCTFVLxiYt1mdypu99P5vtZmiTc4FsCPhAu5uo",
  "key43": "kt2fscTYHxTB6rEJSKJDsybidmM3jD3u6xGfCWXyXNDpLaBBGxAzF5TC56PNEvU3DNt4Z32XzraNv21qncX89KD"
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
