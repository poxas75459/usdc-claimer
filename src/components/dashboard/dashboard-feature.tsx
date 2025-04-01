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
    "4tzJAbjfTbZyZLXjFHw2Ne8mWqHRFigvprDZZ52Td2u2e7fmfGTYGimsJLLEXxJqNHYuEMUqLcoGcGiEW4kSobzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64fUNYqZ4TtByf6J38TH49D1HpvMqcfDWoeHRA1rBSeSFbgGrAKkPj52quXCk1PqwQ5xihntkraq8pWxNP12pSb5",
  "key1": "4p4q1XZZJTeBGqrwCSCusHWjeaTgHrhNz4uywRRTavJP6gJNmEp9KXbkEkuu2fDN2XwX2UtaeGFPRcftCHHwsF1c",
  "key2": "4jQeVZipneADGrYJtkaiScBL57Jo56KuC3jB2y2sqZZVFHN8wCPaTQdAWpPhQ27gd9obTh3Ge8ws9dXDiX235C9Y",
  "key3": "2cE4YY1NF4g7ZHMotHfUFrdaifCpLRsvPHn4ZwK3htFLcEP8hTKnymSkVescJZKcyRUeVSBycqFivdX5asGzWxqZ",
  "key4": "2b231jpLCLijoS2n3m8QMFUP1gGvMURbaACNK899YG93mcENuPpGEr8gMA4xto4zBjnYTSmREqN9UnttdYQuE6Nc",
  "key5": "2UPgkFVRBYZGLQhnfkoVphDHq6W2jaRxhuTT5KuSGANcCchVRWzVWNdVXKYmt8mRenkp5dnNe8bYtDE42fuwumPN",
  "key6": "ihNsjuM3RQmsT3U1EyDjpmy6DT3YChQbTvQYThKLvaufsss7CXv7TgDdVgWE4YQWfyYLGZBv5K91WRaeupWJAH2",
  "key7": "3TtDN7xu2J4Zs8Ygc1V9Sw7q9btFWCcn49uhravf6oC8gFhDHTpi775piAnKSQm98YJ8GbnCs2ab1LCzNYDnAFMV",
  "key8": "2hzV6dhaX3PEXyhiWByEECJtBNTU4Ad3srSXZ7BH7VjWxnrhjhXTFYD3YRFVyJwQPbN6XiEcBJ5yXV5uWogA96Zd",
  "key9": "9ZQwaiqG9FnAy9eGrjDwSidgXHUBJocNBHsza2DGHu4LMPMSuTKygkgbsRdG6meMCgQGVLB4rwNk6hebc2bEoE9",
  "key10": "2EowX7yRPG5zScWed4FqbnuzLp3RjjMUNCjj2mn26W1BSwAvJXWM8aqwi9u8F2hh9QdQ2wXYrtxWpdNfsQRiJSBq",
  "key11": "2XjMrEwgCBziFYzhxbXDhMtCKNA8kSt3Zsz4fwZRhA4p6zVzP3eSc9kX7W7r7jd7EufM3BrEJQB6GuY37vysvVHP",
  "key12": "4hwLoA2NFD3JKUJeo3DA4YanV89x54wUbgW4G3XbHEW6nVuc9xB7D9gArxfvg7H5AfpnPqJ3eedoSwpzVJLdYXzZ",
  "key13": "2mguaz4FuE24JUyPDTVAQQGyE1gDXNAkrxFWoE8n3efUgbtRZkgcPRRHpeniLTfe1zcUanMAofdP7KHSeTpf2wd7",
  "key14": "4C8iEUKzZoGLF2E6tvmWVmKtkYK7NnPCyejfnmBtT7z56FJjErWnYPnfsbrfoDFiTttB6EorUNdyrigShP4zqzzD",
  "key15": "65w8LHmVJig5BwA9Zx5uoF2r9fa7AtSsXc1NT6nFMX58ra2rwmoi8qyPtU3MQrik1MzBt1snZ5ex6GmzKTWVXVE4",
  "key16": "2pPqqddcFn5E3hptZAHT7hL29VpwYWo3mPMCDLyXmLwpkwq9khinmAyAMVmpFUBVB3iLG7LujUJw9xtHTZ22azoF",
  "key17": "4oG5ck2u7RsHAecXnaEfmmVYgSXPZ1FnjM2rEASTiztthzNeVxe5JNP9M1WpFjiCeHpGJSRUcEPxRbZLGW2ebTPW",
  "key18": "MLZut8jTQT9z2BuaRKzhNFCBqhBdQQBDNpJtbukjK1eFx3GypiSxL1AuUBJLYq8gRc4qXGhGFJg3riRkfoXD1cP",
  "key19": "2BcrP56Yy5ENUBFDTJSxvki9kwyacdioDMxPhXPCBXbFcLbt7dhkzkqLoGBuUuAXpwtExBAaExptEari2ovGSkuQ",
  "key20": "29cjAjfGFwyDaCUNW96kW48KLk7UABbx5fzwF8GRoThMU3jjY9JoA2u7dihFNuYRKR4ZHHiL9tFBbtMX83Ve55rU",
  "key21": "ZMzLu5ujSUwtp26e7Bj9wdDhNCfa2GXz5mqSGfVuS9H4xmTG4CsbdNdRz8HkPtEEBcBYEuoZAiBtmXpgAHPN1zB",
  "key22": "3PsewoF1SoG8yLSBCMW8B2Mnc2sKzbhYzPWs6RiizTXiiZzj8v18Md3b4UUxaEapBKSNTwFALhAypXByBZFGUgbq",
  "key23": "2k48kiq6YdM9Zgs7GJFd7JatNPPQAYxMigqcBGr7Y9kLqabSUMDwN4TB6gPriGtcxzhhH7ouGmCPTYhYJwZ51rTp",
  "key24": "5hhufZX5aZUJ7sb58ykS4ypHwU4v6jet61qGKNtYNkBWSHiWPkvEmDCZa4VkQk1gaMSHv31VEBauR5K2meBLy9oB",
  "key25": "3hYrddPRkDpnK5aLrYavRRBCM7Pe8B5KJqawgKHge7YbXap1XtauwD3Km8KsjMVR5AH62h8jEyHT95Nq2FvMRCGs",
  "key26": "46YJPTZsKAiWsmC8bVoVHjhA9yd2ubBV36UUpVqWeDwMvmWLnoCh8BcV5d6GY3VMJSHua7khCxhHwp1aANQMpMrq",
  "key27": "X9f8Ld1CK2QYyfrjWwXnt1TjwxehwkUqymfX7Ntwt822gcxyooBdumrNU8w3yGE4b4ytd1pHf3ttFn9NggjwBeh",
  "key28": "3WGC8CHNEPwBe63eqvRYVagBRwJEDP8RmgrJXQtbNJbjmjXr8jNozqoFMob3MJ6H4FP3TpjughxVpACZnVEdRyvG",
  "key29": "dpAexbhovAs68XD53e6N3DQUtwNhNGht3JsjkhkUnQR4d9mNA6TY5CwiwigHuiLAYfatVKLk3TAvHdhUUF4Pkoh",
  "key30": "4VjDbaeS94bntKyA6thGEfezemsn5XXwAHSDp6vdsMMW7G4oXTwRjKyasFJtiLX18t9VD2JXBbZMcRdgCu4jq5JV",
  "key31": "4pxddisCRhGsNkMLqg4riHkA1GFFAf3tkUo6m3tJxjBEdgALJz7o7JQ2CTitFWLkVm8sbuJLg8GkCvgUAnHBFyUi",
  "key32": "5auVaUDF7RA4kg2HU92FJBd2SZmgV6ctXGSYTCKm8Dw18VBYRwk9hcEQCVmv8znre959Rigr3Y4RRQ7Ny6JFXyAa",
  "key33": "7AkTWnzP9xpfjZ9qkN2HtuQBT1W6oCMBfyKLCbz2GukeqvTqkpqEogmENqLf5qaFUxBe9yxdTcwGndncLz4ZRKm",
  "key34": "bnEUcPPvNkbeskKPgztAvF6UVzxptfbTuiGApVLt4gysVJ7xZgAkUxTTbG1QWDAt2nfMqZNFRVQ5gLb2vxb9U9U",
  "key35": "28Fv87wAu7Pifbdp25Zj3s8bLv4btRBT8Zf3iQBdR5dmL2A2C5KMkttYTgKtmX6W4LvxZcCePZFssdUJKkQkGHgK",
  "key36": "2htbL1AwjW1qWC46C9ubJTMbzFbxuZd3jbYBDxyvPTp6YgNzugWHVHsd45prz5qZyqByt6SWQN6W3Ty7Ym3Xstw4"
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
