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
    "5SpVaEwfYtMoUXbWmzThHFFjQitXijnoxxRqUELverSvpz16MYEdSMWHqtryeDgcjNMKukFSvA78WsKmVjPzkE7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2g1SiduEzvKvbWSYn6TL3TjDwULycJvzfNHHwpb8iyLtWeAQJErTQy96qDCdjKEowHriWb4XFYT1SLMEDo1GEDwi",
  "key1": "5pZZkb2TcEZGxqviqJfcYVu7DNLpJT8JD9iWRX2T58ho1EN2eXDqmW9DHdo1DQ9bTseVDvZaHWCuVeaToTfgjGjQ",
  "key2": "5UKUHQ3kmoUpirNzFtFnh88YDtnrJHQZ8JWFbbsFn6zSawDAZzYLoGuRLiKrBfF2zYotQJGgm48BwCR2XZcjUAFK",
  "key3": "53RC8ihFxYR3SzMHFfREUrZnipri7a4dkj6SHAYF5bcadr5DY1RTGJRZ7QNPK1H2HFNfKrcoGmxFZQma6qR46Grb",
  "key4": "624bM9P9oYp6XsKwksvirdM9xXnbJSKGuL6CyAvKAV6RvuqpQnqpeGeBMpBKggcecjKsisJ2tff1ZVr8EAjKTdh4",
  "key5": "GLanQcFUB4gHXDmVSkV7PUF3Quz8KDUdoTd7PFyAxDKmpF5gL8GGCTywsN4XhSRnf5RS8BbVXXLxBoxFBuxv4fi",
  "key6": "5GWGy1BLRuMMm9kgdDpnWJNFC15hisgChHnSmm8XUa4X2Nq2VkmoDUJnqUz6RUxvK649NhUfzi43nFByqDLNpumE",
  "key7": "2izzXaVfBv6TyTSWX5y5bcwCQXrvApXmxnrAJ2QapdubzKS1qhna1vCiwxnBXSW2Vh2sJheJ77hKdxuTyVGm6aQ4",
  "key8": "3Y9w7pEPF3LuNBDa64rjUvCGtxmQPVzjeU9y8RY4cUasAo2FDansGFTGoDH6Sn2tRRe3Dwxc4DWNyQMk4Ndyz98N",
  "key9": "jAkwq5fz3dn64hxRXL29AHytwVvbbUXioNF6rgktZM5g22QzekiFLnBh6R2NazTEsZxywkzYXWXhaQJu8d752ZX",
  "key10": "BmMFcAPP865mZTF2NZuChvS7JC7p2WMK6uPBDerENgQmTau61XWbE1SsAJ2q39izwxszdGLTtqVHU4UuneVXRto",
  "key11": "2zjb8xbks4ypfeGLn2UMYHDDwxaMCJmqaR4NDfBfyukZ3VwTmEBrdSFLAb5Df7cwey2K6ZvsMQHdh8pPuiwpS6mW",
  "key12": "5PQB6SY6USQoEFH8Yz2qtCbHSimaY5xD2FUzVNE2h5h9dLsRwgBU2tdQYyVA9idnHbKP4CTJ3Eh3M4nkiJQoPnue",
  "key13": "4Uzh7ZrGudr9Ku1K6xYKPQFadW8mf2VV59bj41DcAiCEE3t6s9upByFxwhKQUJh4b2VEcAsxAKY2Ub7gYatM2CvX",
  "key14": "WJcGPXdsCs9wS7Ti5vau9uwsfUUM9o3chECosiYSf2DEbWVxqu7TV4S1fiX4HdLAjMMM3LxsFqdMCZGVRkLh1Nn",
  "key15": "5ujn9TKp6pXkRtLJuxPVomkynkR1x4jJPrrAEGK6trmL6fX596ybAwVsfsKK6vsUbBw4EapRsyTDooDHHwmg3qGL",
  "key16": "2sSnLhQN3YCjxpvco82GhsBRUwetDwEwKSzxxr715DRVF3X6iXhDJXHDhHjaYoJBtmdJAhXJeQFNvhhKNCfd7k3P",
  "key17": "3c3qE984Qcf5BCQssgbHUnt9qL8bxYBHJSWk57QiPQYajUb1xSviQfzi2afsm193KAnyGCEqrCDY7sABNpxqjibL",
  "key18": "4xxVU5uXy3gyEaVNmyF76sutLnN7TGgtBbLL6bDUMteZBZtVEBwckQxM3psYDGhBy8ytYiRRWBVruWnHmD4sMj1n",
  "key19": "4jCR82aU84LiXAEdbJHvTdo8Ah6czFPeLobsuZK9wBJ2KPDLedaqNmGjmdo8M1p1BEkzoZzz3kBBekTawLy2fc2F",
  "key20": "fqZRxk14nupDhgUuq43evEZJFRXRzxC7EHUAwftpBrfAmXaVpyHkqbiFUJJLNMF1Nhrrmm4RJgnDk1TYtKNnyKB",
  "key21": "2QSS4ihFryqVSEE3ktksF1YmbUvMCM7jJezYJ5xVVnJXzcgqBr7Zqg2PqB58C4JQYuGHWRuqvwGFGgyiTm6nhkYE",
  "key22": "38c9Uq6rxnHKisNbb9erELpCbih8x7Cm1MHYzTE4T4z5hwSRZg6dzhKVeem2x9TdXPYnhE7gTxZWjEuTgVz1f4z6",
  "key23": "5fv2RHnwMz9y4ZQpBRRq848q3UEPqtQF1m8BLJCC5DX5y6qHGAKeXTTuFt6cAPr8ehUXRkteEqUxLQEnkVRrjQ3x",
  "key24": "5iZkctRSC8TWM9HqXmdtqcLJLFqpoPszyGoUfhRx78hj5H8hXaYfKDAfraU3GgRmV5xtv1kuK6hCHju4BZfDDCnK",
  "key25": "wDi3AbTDmrYJhfsDkRZoMLtCPhXUwAiBi6iP9W1eympvSAaKKDuYMZTNQ9Y8E1ZqKxLcBwxKLANy7Px8x5ki4NL",
  "key26": "cpprS8j1VYTQRtNZ8pHmBv4zYAq8CCQuoPcZCGQguY5Q4NH6iDDBSQ6LcbJWkB9usSVtVRXsfgVuvX4xNkkWEg1",
  "key27": "5teAxHsgLir54fuBehnTjVSQjMgsCxgTzQLs4j6jhRYdDeCZ1CNYJV21kNB6qNPTchp4pWg5h6P3EeCshaSrVk67",
  "key28": "E26K2Wmi3iPjG2EjW6XG919UeB4LYeSJo58ofpeaqf2CarKUzHEnwfzhRieRm6LQDw4354JXS7jkdEKr7rDqZiC",
  "key29": "3ip78JBT4PWoocPB2JbQcTzoguwPnqJwyHbthasGoHzcUZeW6RSZ7fAai5nxncxcPZEeZTH23ekihkHHafv2BymX",
  "key30": "2nZZKqHvbhgGWASaE9vcaqo26aRkRmpU6GMGLyGwmWTYSTK2EXp4aPUcxtp6v9ZswZfXx7brtY7ndZMCo7CTxAm5",
  "key31": "5TRkymkmEXzzH5VPr9HKSB4QRJgtpq61ACQoMTsDKnWmrc6Wpndr2RoygRQd4ZqE1x1bbevXejsD8KDMvt3vojxa",
  "key32": "29zDJjXxgkfB6vDPtGwu8xUBEJceapSbzDgksrYgX49ewNAqpmcUmdP9bFB3mkUF1VeUfTCDSAfiX9LpCnxcPhGn",
  "key33": "25NxZDuMAi2EiMiLw8Rm7L9skJUeByHB3Jth7TKbJ3N15o4ezKQ6PJw35dvUiMSmJygLfPRXEDUoDQG3fFDJKCxH",
  "key34": "4GAb4HReTXkHsst5rGsp22GWQdfTk9brsrFCkHrnndRzYQQz9qJHkesdiNsavztcP5shCu1a4LTUMF6wkFPKtgQY",
  "key35": "2Ae472aVvRPMQzh91gtTcqneELuCrut2CEwN4u18QoSbpoT9qVgTrG2GW35ngKC65KK4hgMbfN97pribXdjJDS2J",
  "key36": "589SVYg7heFEmHrWXs4Qv5TdCfhUebyMPFLBPZqkzn2TNo4gU3SyAkbDduFzsGzC3PSTt8H5uMyJVbTsC81zSa7N",
  "key37": "5SiCUkLwGfjudQ38XEH8FcQF3xZt3XAnNWkWWCuyQbutgRphotRY7xX4tm7mEK3YdU472gegsgJg1eDN1Q2jrkJz",
  "key38": "37TUzS3dj3H6gs3PZAyZXuaAXnsxe7Ucxrxf6PM2WZmyuEdtKsLQ7cSa1oc58AHsLjMuAtMMWKD8o8vDzMps9CKV",
  "key39": "2dCAb2DfegRKTfx11wfcLumcoRT2LC4nuxjEY8sEyBTyg35qBV3A8AfMy5RB2wXtdC1JhCRnEN3wzSZ37RbumXxm",
  "key40": "494LvY2nC631M2JpKCTSApPTGkJ2ew7hXv5nHnK4E56XbExDAe19SmXV6hyfRtTwHyE9UPK2FFKJFmexLvQ1awhE",
  "key41": "2ae5yWJ6dH5Z8AaTmUAp5dui1n7cwHoPXuYa8z9KUtpM9iUNF27VZoEDNewmspMh8vgKAHGetWFbHZ1PTnMTpUaE",
  "key42": "63a1E6vRgW5yKnU6iq8VMGg3qgwZQJSZ5UdsQr24JWG298WEoxtNauDThe7ay6y4GqJbJT2WGCHCUJBA1zJPT7UB",
  "key43": "5npKeF4YvUgkgVVT19mnKrgQm6XVzTURWrDtiSYTMNaxM4ghLax4XQ27AFbk8TM1rhvUkYm2N8UYMkDex41uWoXW",
  "key44": "5jBHoXzsPZjFCaEnhdjfSnbKjKvtPEnMN1iewC8vrLJhqZtvMdC42e8YWVpKqTVZR3521my9Cjhryyd4jmALpmdg"
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
