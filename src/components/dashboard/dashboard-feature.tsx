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
    "2iHQQApCDFsP1T1adSgWC9hjMosyauBgVqfRoXQ55Nhjzp4ikvWarqgA3Ts81dSBMeyzTP1a6PG8WKoceZ1eFYnW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DFrPh6LozHrGgVnZHwom1kgdDQkS92Mu1uKywhPtRnwRrttYTWjBMgssG3Ba6TXfav8YNHU1fsv1sA8v53Pmire",
  "key1": "37EqCSa2wsWCCYJmTV1AkJh23vCGC7H7progrf7GaXRSSg5nmWPQXTqMhhByUqL6TaKur8MiHv3ufNx1VFiv7bXh",
  "key2": "4o5Td1v93GRB4ui7ckSE6DLTeVEngfyUyWSSg9ozuDTCK11a9k3gD79R6dtVHswca7rYiqfGuE1f4mmoq1GUroJu",
  "key3": "2XiZaYTJFbvUKUSrBzE8PptpjayGfxzfHJeXxpbMAS25H2CdibHEareJ8m8thyH6QVHfdZq9ADbryVAUSdTjvPfo",
  "key4": "2wCrtQBt36RWkAmGrQkm7EfkS9vsJQZ6Ghg1qWGNiTQhZC51vndEQLpsqe5obu6xgmwxnqvrwc4At6VxpSzw3LfA",
  "key5": "3sWDE5jFqK6uKHWWdXNNSoJhB7mhX9qMT7tJJsA3AXsQvpTsriop353ou3ja1J9grJVhj8Lb1WTkiFeJMZ9Ymnt6",
  "key6": "43sZQ14dqkCwsfmB6VNSgFmmjErxE5gEMx8fey74w9S5rQe8aNYDyCrGamjCUbow2nK13p96hJmCTy9CDTXPeGho",
  "key7": "2RpNMArGhQWNkeB6bMagwofG9iqjSY5VmzZoAtLCZb2d27qNG6vzJn4swQDb6d7Bbi5kn72xL8HBrZBymNXa4jCG",
  "key8": "4LCEqcNhuZyW7vbqw6XTWSpWbCzLebwJHdLNBVZJhdWYXx95dngfA6txgXhefnDt3RVs21FHLLTEcsZFPoBSLvrM",
  "key9": "4ZxzQm9k3HGEkvDE9X7rdWZRz7qKuDUTLskQfm9Aqsf6kmuapuAU3FPBnGhgjudmnnibigXgZNBJV4xepRSSrWQC",
  "key10": "4TaTt3JszV4XTxZgj5BRmQ416mtUMsU6h525gf3pnbELpUGzSbjXG73Z75ViCdWmn5dd66nfL6Y51bdp1hPavrJK",
  "key11": "GfGNLXBYXcdQPwyzS5894K6xpUSTybuq6upHyxokw2SCpUqfFzK5sV5PkS9oibr6sNjb3ng8WaQeQM1ABUCWtCv",
  "key12": "4AkJJj9ygnJjxQ71WEic7tfijK16TVWFhKcDS5PvVwVnW9wzn6thWjeMGcmsZdpwfRbbg8JvzXm4h7qDkkrrdLzJ",
  "key13": "5wQdNd1GnnKxCMJuJErUdUhSbMkNRm5nowTNniwqzZz6mP6ssWNgfX3Q7EFjd6DwMd9zcSjYtNHNwAVHFw79V9rX",
  "key14": "2yk6NufiZP5NHwZkeVD6mw1TEQXUBejy1JEHFD6iZh8cc33Y1ZrB5AUhY7VbQCaK9DRtDEcSpiYR14EvMxhFcaF8",
  "key15": "2Xwxs1UXA4GUr6rwkTfS4svvwYqDwHt9k7UxTUGfq7gzzCwi1auimRmvKY2RqevsgwktL5VT3SFpSx6HGSRRDfvs",
  "key16": "32tcKGhR2ewj36nTH4LmDbqd6wgy1PrV98UsAgMbKn9JZwLRvGtoRVV4wB5KkbKn1izFGyJ26ZB1mDsi95hemDqW",
  "key17": "5Xi2HyeTwNNYnJNJAMqzdqxBN8FGemyTdNfrTBDsZLtXraUHwKGitBvU1C5M8Dk3FcfZjpuedJ4bzRzKsheGotLP",
  "key18": "25JRK1qKEchsebZG2oA9YRktHbjA3EioT29SoZ5mANpiuiKWJL6VVvCKHpDE1ZsoNd1n4Lgy6DAUS92VAL3o6U7m",
  "key19": "Fr7XymMLXTd9JcR3BbF1n1o3ZWaHsL1XTy9E35grx3SsHQiNY2AozLx8djkZ8S2WVw5VLfsZHcuB4MCuoMqiCSA",
  "key20": "5yQ8WjQMVCsbP5ra2ipAzWce6ogkBzb6kVfgW2zDBgP5Y5LzF3ENytaoi72N9JrTsRBHE2Qr6q53Hdy9N8vUgEH",
  "key21": "UoXbxHv1t5383tXqACa4kPgHRYkd5CBZNvrP5NTdGmYHDZwGXj9nZeayoLmLmbyPgytpzMvQPHo9TUztxiBskdQ",
  "key22": "5e8z9c8FwKCX6bQNLshsBtxVn6vFm4cB42opkzLkxLstB7NXkNita8MwG2N2mjVPPrVZDfFVyMe5uMEKAZiaHgzP",
  "key23": "2FVfxkRcnbGVfPPKyj6xWYuqPJpjxnfKVYC3JuWu2dTJhmZEW2jBVQcSPSW7EPYm3zwUQuxmytFQJ1bMaYsdMW33",
  "key24": "2uAXfxVDwM2NBXbaKKeRwCVJ15ASzsqAy6PMdHSp3drsZuT7nkSiCqWFrbKsqFQwZ3wHEFp3PVJBGEEtKUH6BbQu",
  "key25": "4wo5VHH7rQ4FMmbpVMJ3AMMhT87RGhtdjzyTKZgnUuxBXtkjWHKBew3jtW27h8jKE5BZ5rURKcD3RU12DjSrhwjt",
  "key26": "3zBtM9gko39oc2gyQ42X9Xfecx3F9XHTbmpBeDoW5GyFx8aSiNVEN8SWi5KXzMG2ywSGWA6nEVRszV48dfvTkBeg",
  "key27": "5HYoRq3UqzkF33WhPP8riHgTTNvH1QYHKeoDjAhQk29sDRtKQRAhxwnwHkaJLiZp79a5aVFwFPhr56CjDtm6hmBq",
  "key28": "4gR4MxUW7QNAWcB5SDM6j8v8M4iN3GfQokEXpzyugmSFhsZkPPco4hEjkxf6QSNy13oikHXngQ1Dg3282aqPeuqq",
  "key29": "2SbjH7XEyiaoDz18srVRq6wirfsp3oTpHd151cMztCs6FNhMNWZq1P7F3HcZtwu44Hq1KQFAWesfWQVRC8HY5J2s",
  "key30": "5AbgMcmndWCrYqu5xvz2bhSvXpA9fFrfTrDa1oQR1iS16MZA6LUWqFin5hks6Jr1uqqrqNDe7SMwwWreAY3nSgp9",
  "key31": "5HFdkARSmpKHSu7UQjJfLUv4mTWAG62zfv3MmzkWcv5BA6uRv4xtarvQNMX1UEU2TiWLuZ9eupczw5AUrYbeN1oZ",
  "key32": "56UncPq6UtSTzm2FtKp1ewPbd1jxNhDG7iVpzfrcBdiMgHW9e9Gh2iPefXrrq1u6eRDfK55FNyk44ZimxJQbVAFN",
  "key33": "27Nk3Pd1KvtrfCNzcpThtx9Hze7Yd4VWoC9PsqwQ2H29p8MqG1qgKqdw6oyaHpDeSuaAC17pz9hFnRsyLDgeGk4T",
  "key34": "2xSHiYC4L19tZuXUAoQnnZ7P9g9Q25WWfpEXVLynZopGHmkEouN9HMSSW2WuHzsszXdc9BP6L1txGygp9oZKcH8G",
  "key35": "2jppqiFLLaVzpkFVPbePBtho4AxEC6fzp64dkQd5bSQrR14o2FvB5GHLe7VdqiSV4tAvc4fNvhsbY4v2vjc76djY",
  "key36": "EyaPNHEKJx8Gd9eg2vT4XSSqPq8ivGXPRioGRYCTEJgfGCLUrA7LrBsmFuvNbESbvXVwV8jDMVdAnMSZvqC3c9L"
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
