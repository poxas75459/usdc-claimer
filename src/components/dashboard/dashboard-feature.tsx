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
    "3XJwfKp3m1XGPfgoLosJGp53ouZMJgicKWsJmYfnm8cUUmE2bPNTLkVuLUzTs9Qa5ZTSapPXperVNSfAAegV1Wdi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iahGNgU1JncqsNNtdCRhg419rwqZeE33heAaG38CzNeFfihaeuMGHbkqYY7HpLMDUBqyAugV7NE6qQHZGKkdNKy",
  "key1": "4te9op96S5Kzt5apsAcU4Bz7gVLt1PoiPqDCirZjyPcz5tFYYQAFbQR3279WkMcWmwwMU4JjPgVuA9k2YsVFJBG5",
  "key2": "22pdmVvphwpSF2omsw4ogP6XPUgQuVdj5zdBJFEf3e6dBcdfhss3cB1K42yJTZeMV1d7aSCLoHcrBycNP2cSoxKK",
  "key3": "3JzA6TFP2NcDq1cZk7HijuDD8cYRSKL2wYvneBgYfzQW1uyTCQJ5LJBLK8ayKCQVgpEbFEJFTt6arFuug2LKq5sS",
  "key4": "4x7QsjLKA3ZLPGd9hk68hgU179dag8vxvBJZ7VtnB3jyYLG4rrefJdC8JMS8KQuGDhMBx5HPiC4AEsJeppV8pAMz",
  "key5": "5Zs6GTAEA3Hw6NwZtUeHtQgStXz2RUb5XqTCUyhkjr772uaba5F1u4UtojmVThzT2CprQw2b9DCGySCoPGepADnf",
  "key6": "2qb6p6m1i5sHKygFkRsMRSaK8DxqvdWhCcMrRNBfTRFQM9vyvqf4wThegXXJYsnWwv8ZcoFb2MeU1jYGEf7VVq6o",
  "key7": "39VtWExekxsUvUGDUD4Hku7iYd5mSMUSgQHZ3byJ4kgXi9s49k9NJoxoD4pKLTUBzAdHs1jcGjrAU7eGHKxfhwWb",
  "key8": "2M72QHniqhyZrKYzSTTqjQFFXLev2C33zujJdDVWzTFeUa3MtZj43L1zheNRyWBcPmA9z25RK85ePHFYZVDrGUiF",
  "key9": "SnWTHkNU93m4WXUW7UWh2PPeHZPhxvwYFfDyZ2wAiXHdwsqP1fnT1QWt41gyDTsLVJNzWKPQnM4FAoakez6dGLw",
  "key10": "45jEDk36MHoP8NBDCXNbyu5Cr2dWW7DQjydEcGrf7Q3SQ2a7zm5qAhbjHFVJLRMX7THC7ZEYdkc9QzoZZutctJLu",
  "key11": "ZwRxhrButtnXW5mxe4ndjxdzYmY6KSx1TV5YCm8jGPibCg2zCAe2yLhxp6EZSwoXhs8U8m6VM9WQeCLTCLWchYA",
  "key12": "2s2JNkpnZuQhe23zqkc9WJLAAwQ2G2bztX9Jo4cbpePA26PvJb8kYXorPVLjTcw41aNQngMYCWtakpKPPiPW6zxE",
  "key13": "62wpuFqXpUssLCFgZ6j4eMAAbQBZo1YauBUdV1L5x2vj62cBx7CkGBDx2DBo6NnD1STmJ9wo28hW4H6jqoYGgEVV",
  "key14": "51FPWAry9ri8FpgxEzWCmZ7A4bUqo9kgTS6AHyngKjGypmokedSUro95CNMEwCdEeQZh6A4PHnaKLuBVwfRvpoiQ",
  "key15": "2Ztb1YQVamqcGMHVebeon49r3WnXhHXcTeSiPzLHW9MKUEZdV69wL2WxpgBSmrVCjtBwMUTTxJwossxCidkNopth",
  "key16": "44JE14SpthRwNJinAvYLoepGXttZDK89WC3nyjFVe9BdJfycqQUKgsMP814rwTsJ6GFB51VzqPkuqp2ujmSMjqoN",
  "key17": "5sXEx9dXtMAZjZfokK4fnRTgHJLSeo4PARM6nhVmZFPpbqXkj3uY7jMS635DxqKu3AC5k7eyZ2cpVz7CkSwXfnQ3",
  "key18": "55gCPnZAiwghqvNyDKoWLhtCoLqGWcPNgyC7QJFi1Yd1F41BHhCip6wyiZUkUZFi16vKjvy27JWVHQSmcqdKZNpX",
  "key19": "r49z3HS8VEk71GjJivguL6nW2voxfkc18K3noXV3aUfWjbukK9VyqStnPfk8wynhPWdW6dCadJ4VwhxnGBhq3JH",
  "key20": "4Zc14BWUWnANP5C7vvPLje9qNPyRbRz3EYPYtkq8atvmFAYwrSJyo2g5bTyNEwpuvRzofuaLQaycwm5thzAZQcDn",
  "key21": "4QccBYzNkYddTUvpMyWZ4g9Zy5t69W93kyVsSDhvFFJp13BZXN7xyG2pB14UFudwfC6N9vo4FtGSpx1av1qGgzHb",
  "key22": "5zxuteXGfXrCRvDvLbVQvQUyWGrAQGTYYepW3pBaFoYh5pcsBV52QLeim3LXicWEtHvxC2gBKtX1v3jg9XhCCbQ",
  "key23": "2niYyyVg1gWuJujWagdbbQ1CVc8h5tA1fAuBSVXDnNaic3ezxexNhSn2Lr6UHKhhCyzLKR4uw6RLPxHF96cgK1Ug",
  "key24": "er4QXvp3LgGAgp23G8dF1aFCTad5m7oVmhKjweZUix8gEJ8xMXBYMd1m8VepNczV5g8kk9aThbuAxfprT9oNK5h",
  "key25": "hGfXmU3KwMjwxq1msvv6p38j5vLP1pz4MX5Ct7FGkgrbKufmbCjyozxW9ds7wqJn2x9AqGXBxt47ZEbrAviHAao",
  "key26": "3e1aL5e4hAum4JMSiTjZDUxfqyJ3yUz5Kw3LWLShr3eW2e3kHnFQf1jYBgEa5s745YtS7kK6zs42v1fe463tF423",
  "key27": "53hcy23K3x63mYBTTDvEUhkGR223pHjnPFZP2jgV41KR5qa4Brk4UygRTSAjEsd1mTitZAXkpGp2mBq76iC8pD9y",
  "key28": "46F3GSkbzYpE7EfJpdVE46CA2PW8bDyJQXUaNGwW1Dhuj5SwAci4pEGBTWB2y2tPYCHmLJMv2JJhEChAkpFUwkVT",
  "key29": "76c2LMXLPvV2QToJKBxwdqBdccLpoeGtBmv77esT59TUeoEBZMe9YCavo6WkK2CtkaKvG3H9JjqSyyMvKTCWgqh",
  "key30": "mS9yuzNZYwfxgF9gbUy3J2Juk2My3zugXwWQXFtTaxNQNhCTyMNeA1DfThuBEWdpQgg1ssbpUaDr1CUu8eKqiLT",
  "key31": "4NJza8KbQKT2YCWJeaVV967YwSmGdtU7YzMNicEdrLFTnf9RvyxfMJYat7T1uziMmHoJq3mM4umXVAkzhaymoYhW",
  "key32": "5RmEKWxdvkA3AjhP1929KLVpKYXBrYnviTmXg4MofNyQyXHTx635GyNCHVn5gVZYiVL3aGJAgDpY4WapnzET1QXR",
  "key33": "24oVyjdn77CYqJ2RK3LWq87rwcebwRd4ZFH9kQnBxy2yWsYckEPXYaiiHmeLycaU2bTkGooD9GsTNhtSLVm6NLyP",
  "key34": "56Jh8zcbL7u5uQWMxq5qLxJpyKRW7As3iH9M2dKf5ZCtnRRFzwDvzi3iJWofC6UzQXZ9Eev2DFvScTTTJ8YtEkyR",
  "key35": "VvjewUVAYLEbPooQ6i5BGQp8qBELaLAUZjmVPXzXNYSw1DA1hPCYdeU2ZFaSEY1m7Jf3vgXzpUeFR71gYRYJtcf",
  "key36": "5q7pJwPvAPEeo6tAX5WU4eQcPMGUCUVg3kbdbYsERFevaVG915QGZpdAK4DkBnoyH4ff5aneYid2sLvzg13PrJFL"
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
