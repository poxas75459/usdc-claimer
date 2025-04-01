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
    "4j6QK12z2Gks5sazfknksWCFzwtkPaV89z5TQC9KjDZhpZE5vtCbmDJbUmpAet5Te8B7t6ZGjohbvMtLhVuNg8tW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "PaZKsFbdhm2r88PsAhdzRYaV6R2ho5UpLACFgp294pURNmDVKLNuLNXAN44saMdyvR8mytDDCMn5hpwEJL6UxYG",
  "key1": "2AqN2iYyrx7RNdZUCwBLF8F9Zyvzmp3kSTb7zvGYMmzVWg5gAW12AN8Qry1AmpEZS69eN5wfxi9HAefTrAonpYag",
  "key2": "3wMYXcmR3cs2u4rETMLtmKFgzGrApFDmJnp94t17s19Qb8RnBWmcrVT26p4HDwy9fbvMhY7De8PxWgmJAqhyt6ae",
  "key3": "5m8NPE1vGHm974aq8pHCKRmpr5hiQ1JE9EU6f1oWRHqaEwL94agqWCy6mTwqNQh34bM6kFjz5DM5ZG7P9GyQxDFf",
  "key4": "29GFpnJykWPfhWswYkwsyUK75Exjs11PYAQf2ffYiTBnUQbQ112JCebTnah73erCMekqA1f2aTaJMayYRnCEiyGi",
  "key5": "22fJXjZkcZLrZL1a3iibscKGXUxm1Kgvz9EQUCTNbTBsyaMGkgsTY71dWnW7TX6amZBmvCMBjVQh6aDrRA7EsaPa",
  "key6": "5ndWF5ovxMX6x73qhHXVTXFWc7rrkCZYNs9X2Ktd2ovxkN3iCh7RoHP3YygLy4djrqB5iHrWyCaXVbo2WNsJcxtD",
  "key7": "3LXSP6ratVP7KYY3yxhQb9yzFA4cRT8hMBhCZWz11g4HxHFVNhVKmknfrZ3Q3Dfyme2uP8nWWekzsNFmdyd9HuSK",
  "key8": "5xDcXgLD4kEV2MU1Mh17oKbjX5E2RVYf3Y8XgFRzRDJ5Nfvg5T9ZuoA4DQDeKAUTCkotUJDUbTUBuFzfzTUHfFVU",
  "key9": "49rcrGgS1tz7yCgV3wmJAak124od9a1VYG72svsc8gFCDALJoGQ2J593nuesGDvXob3Jz536tiozV5pG1M5kfHoj",
  "key10": "5Cc5TnBzhhutXtNrDgBPsN7QPuBthW2HcWY2M2BaJy3Ggmk5cyGfwAXV7AtrnRsLfSumaLRuq1oxgk88PKn2ofDT",
  "key11": "3TNpcp1EvNdzYoVAPN735kdFDxfASt1fsgchR3TkrtAUYarFwTc1YJByLXzcAzceFAX1cgoLaKaCedAyUm2AnvaL",
  "key12": "h2GQcjenv7S83Vd5ei8W3K8EwkQk7NJBJ5rT8EQT2NM5i6yCwLH1sRVvgG3Y3wdrwoTKDpFhuV3DUAToHP8PMDE",
  "key13": "53r12q1HBciMXqHyTngEU7MzaUdZRzKgbqMsfya9GrXPNHw7VHhUu18jgVky9paHYzH8PcKr97LrFX1KoGXjDguq",
  "key14": "33jNWitxo8W4zEpjrEavpez39he9NZ7WBKqmERH9iHjgZqXzKcP9qrkPmfaZxxzMx7J4SPVEaMJ7x2xF1uGpMJCb",
  "key15": "4uiVqiwiakZavXjwqXXm3WiuEF7WR1XfBLST7nXPV2CREtD7JdsR311dUkJcPQgQx8B1dgFzroEmzb6vUQFipYQ7",
  "key16": "5tdjwcULDiLpvUJjhBpECR67mCxmWaEwXohubpwjsQuWYVsd8hoSZeFqgPgoWYtTJJXRyggREVFjVKj9asLXcLij",
  "key17": "232q2G8UB33oE7AUQ4Lh4vAdxrcMBdHXnw3Svq2i92DhvzH3RwBBmAs4wHrEQgz7Amnucfu13VGAjAAYeJ3UhP6x",
  "key18": "38wou9gDwPPYrQmYa5mxHQxqNgbzuUuA55MNsTX4GF422s33V3t2LF56WPU6NTRYvwARyxqjUv2qdfYRq3mm6DyV",
  "key19": "28PHevVHjA3LyXmNqp9kgHPYQdmBoiDQ3AE4jK67emPThowDMuPKZPWBhkWVAGsnCMaDuGiRmRvjGjFEh8BH5AAM",
  "key20": "XwtLZ9Pnm1iUkGQoA557TaJ8Zmin1iN2Fd6hKzkQ7TaTQkBRBqbH3aeAnZgw9a3zWNLg5MLMLA8Cb8VEnhHLreA",
  "key21": "3VZ8aHZzVWhPih2WsjcvmoEFN9ydKQ9Lyvtikm7BrKAjmvvoGxHm1BvZa6uBY6sFAuNjoqcSnfJ9hEEsqeJrN8qt",
  "key22": "3JpGiPTykqWJhdrKFt1ZwKZWRL3NTK1vtspTfNTf2thL3fqbEHcmE49w1gip3zmYXmciPdqc5aiarJ5FavXBWWf8",
  "key23": "9xP6U14hKpteqptAMt8pwVMcDsHmPV7HLHDPpHkynrUV86bmjZ5nGzfKef1FHEYMcEiLs8tEfMTJvAAdFnTLgTB",
  "key24": "5yysFtq9HU7J8b87yfj4V4fyGwjGPE8Xw2pRxCievFJNmz5AosaprS79cNJ5HKUJwfgM6We96E5oe7EavF2YeXRN",
  "key25": "tkKWBtqCoRrWd5YjHYrKBdowpahVXec3sWfa7Sq1Ko5g9pCVUsJbZX4aZL5z6gxgaTGLLhh846jpRap6JrAadSz",
  "key26": "3WgS2tg4NS9mHNiTiZ3TgnKGoAvn28PqFSVEVgqZSaLNsUzkDJp4LgtL67fU6FSBNrKwm3qLyW6oPGViwSvff8X6",
  "key27": "3oXPVc7PMkYRXYk5wMRDvC1AAPpBLhq5vZPP5WNfY7fRMvniHKLStgr3ia3zrqz36ruSXwp4nHHz2WJpTh1sJ9iS",
  "key28": "3DAR9qoaeVtq9cxGP2tG7fzchzRBWf5hjvHLHDKbsWQEcDAX1Y9ewLNwGwJVWcXMMBxmNDnjsZ8ZD3PS4dHhSxWG",
  "key29": "4Di5CjxcfGriQDsSnYhYxS8EohfSdTuDJyaezoRtdhQZNkGoVqKrPHE7MuYqAy5ieD4kPqa8kTRQMUmbCAUiHLeG",
  "key30": "4Kt2rsjA1zpsAABGe22pt94NpCewFTC4Ko8hTa8WqTTK3yqGvfjbJpuTFEEYUPjwqLSxeBeLqirEnsnNJ17hU7JH",
  "key31": "5AdcXabkj29FoTCukM8bpLw64cQutb3g2A9Wju2qZKiwKnaA5wjtpvmzG4j7V4ReiCzY9sZYVi3kJ3gKrM7NF3Af",
  "key32": "5RpVHhAEPVDBMkWkBaa6meB8rJyng7QnKBdHtUwpHA3yqsi8CPpiQugtABHYrYJ4nmoxyiqXFGg2kJ7Qb8t2EFaY",
  "key33": "4Xh2jCZ4m95wpH41pvUHL46J6rawA3HUeaCYi3RnuTHyXd7YdZ5rXT66ozE539iy2RqZ8TGKBWiB6DNoxRubaT7M",
  "key34": "3rWBpPLmNAR19eAtNUgYDauALQc1bKLseqjeg7C31kcMUeHNbp4khwfcXvQDbjPeFcqj4L15DsJyHonTUgF1Bhpe",
  "key35": "3UMq2sR1GMq7W6FBjo83EJtMonD8f7oqW6vs3R77R5Yrmo6QadXwXW89aUbAJUrsmKXDBqWiFjk3yYuYyV2PhUHX",
  "key36": "3i3FRRoptGTvcDXPo5TGVJ4QwhzWxnvdMYz2PahPXugnnDunALfd1fcfGkRab82bnwobDZdeYnbpJCX7kEPhaeHN",
  "key37": "27WXEnaPLopgZLzVaWMpqwJLpdRXoY8Ddxs2wwK8gCKykZUksCVyD9sn4xxGHZ1zb2WbiqVLopCoQHwymNEab2SU",
  "key38": "4oftN34u7TP5rujcDFFNTivTXZP3ATeUJhX3vTnenkPKVUkEHLetGkywn9uSuTvtYAJ6nrzN641g8Kg5WUaKF3oE",
  "key39": "5xchsVfFtYpqG4DsyPqNT4xQ7eRRXTELwCDtA6mHCBKp6MjfPbaiB3KtAZpf9rQELftbqa3fAiWNzZJso3m77eqk",
  "key40": "2jv9WgpUSVRwxHUjaUkj9vNpwdwhuVwH88qh1LQQRAe21QoNkQtwbtXZBEPtqLXAd6XjF2nNCMaQvpxUcFVgyh9Z",
  "key41": "2L8yrEmp7xJT1E7gSy2RqgCEBxAhHANQAzeAvMYrTPsdEmhnQzpUZQXL1PE8BnPixsfGKaRKej85fxpLhjz7q4cd"
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
