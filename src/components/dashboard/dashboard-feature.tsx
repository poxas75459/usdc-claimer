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
    "3UTbKMMaP57FWhixyDVm7nqkBVMifWbCpah4ypALU82zJiyiqtvizUyRUpbBHVxsrtmzbS4Thzzuvg1so4ZGw3FE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dinVQRreTKPFpreNVwdpkuHsuqr2MN8JkPMMgJmUgqzokdmaYpoG1E2b8hcYy2zu6mrHwjJ6m9zotwsmKr3zx8b",
  "key1": "tpJyFTE1oznAu7ZF4dyaRkpxhPMucrdmtCqjitsMPCYYYRxViqqFytUvbnQTozSFVuN4Ls7Ag1pvufzLnmsTym6",
  "key2": "36orxyFEEG11b6qgacit2ktGRh5YPyJYbG5Nx25UKj2yaQjWMLVXLicmurktLLYM61DVEP6ptw6j87BoPswa9RjY",
  "key3": "4sUuUP8RJSQTCHBeTAFC9VykoikomyJB9i2yPYCpcZB76WM6BVemfvBfGY9iZXXdmuFFJyK52ynkkaDZZ57Wj8NW",
  "key4": "YSj84iRmHrqVBFZFp7AJ55poDFGbnTnbSbF5SWLPQX4h5UxY7mcEJojEWxott6MfDMUY3fMbBswNnyURmWMLMGp",
  "key5": "4Uo4ZhFbrrxZ1xUkt1GuNU7xKoWWMmhr1LLEd5UJraZ3cHRBTxg4PDYBJKL4fxAFUyqebh8PQkoQ91XheKKJV5UL",
  "key6": "4RrxopZBdSPMeh3d37mha2pwEHJBA6ttkBmxQtV2HWfXtcfeCofyna6nLvGjJyMCJJtFnMzhCSsFmdmC6QDLi9Nq",
  "key7": "RLKb2fkGw4hGf7fb6oWwj4VnLb6xwWxarwVh3E2aRGAqBTAz7duuLYokfiFcQvBxgNkPqid5UWtUB9VbUKu58La",
  "key8": "eAWGocgiawr9QfRMNV3FqyFfUwQpxewKC8Qg2eiboYAHkPvh7KQSYswNZNaJhnJ2jg7iHtRPjUTvJ3in4N7Xj6Y",
  "key9": "4njcAfRYriRZezamnoUGmD5b9YT379sRsm883yQGHMGTzKi1T9jikYRp7UzyT3FYFUE8YhkGmitgW97HPWWQBYVt",
  "key10": "b5KuSdoKttdxPpE9tRCRPhBxDdQyrQSrRokyGmoEzbfRnXwyJXgPZ7965HhnuhS9BdVHwqMpNgwyhDQr94EVcHu",
  "key11": "3bFy6GPSdBSd6vuHy5W31e9SH8AL5wDfK3naBn3VmTKbc8tpn3cyVkwPsqAxyjgWGE5aHw5jquF1XBXU4hdvaxQH",
  "key12": "3uxATpSdqB9i39p5PvCmn1GGC5ZpKVCuibBQp1iT7Run7cSde7E7sghQJ9M12GyMMQoueNx3N5Vin5uq78SjJwCH",
  "key13": "djS8kbSJFxg3xpxgaSFwa35e1Z6GCKxtAmZWqZP4aCkq7FXPg7HJYk53FC9L2mWv5P7PsaM4QjRj5wXPNHFpBHh",
  "key14": "5rxwrS2ugNEi5gAega3s3u9iizVATiP82WAz9F2hikhHcK1TmLT5SdgAE65XPmQuYfU2NFWM5LvKGqrNDVYhkrtX",
  "key15": "2aV7he883GRzWBDypr8LnMMcAbR3CYzLquBruSQFHu8H4dj5ocbzjeKS2ehZb4f5BBAXHLGUn2ZXrMmGamh18E3A",
  "key16": "C6NEyipSN4vZGqyci5ghuWdppjgeMh4SZcACyinSQYQmZC3f8B7XsnjiB5ahCJjNVxRod6wfe1e3vSY3D7ebdXb",
  "key17": "BCs3pVUiPEsGEEqof5AyzHjdBKyRWTq1nwAeHS7zs87niQdZZRfZBN5NmcNtaWis1VkPrJzarGwiUjvD4QEgG6m",
  "key18": "5Xjhr7ZT52356of6XRoBQTeE6DGVT71GsCbL1eW4zP59Gbg6A8PMZpGxMA4L6FtFCkvRt3QcYzGyAGTgJDGHXFqY",
  "key19": "2NYMuJ7S2a1sceWTM96yTo6MbedpERqNoDkJopXmuEzsomSYTCcmx82PGeN139azvb4LMNQFP8T8gG3rQCdtowmb",
  "key20": "5vNYtVPvR3b3Kc1r31R4eJSXoDa4odZVajXcfAZCEJjx88ASLQMRrpdj7CAP6aSENmNA7ADvYdVhmHCRRyeZ6b9F",
  "key21": "2wEMe2NDHV4P22DJCp2bTESvRjom9yjfhQ88ggjghRGRhkgo28Eua8vMquJSru5Szeo7Jf9amtPM7DZuFP23Uz8x",
  "key22": "2VCrCwadMa4XQvKsRNeUAmmdoeSineHbQL6XknkNwhsKDCjJ31Asm5MmcUf3qwcuRADAUVvAs5NK1oFgh6MX8ecC",
  "key23": "bTBPMzi2e5vAkZLuEp2rZdG35SBFm8yNwWNGcyBY4upSBKnLbQwbj2GgPi5S6wFo8jEJfzc7nPvbnjxhzgu4puF",
  "key24": "2P7cGvUZv5RuLgcUXmorZPsnmgbyeSDi8bNubQ6gxUJDNpq7q75Dy8oNgWSem9id15P2L8E6LtXh2xe7euHdYv5n",
  "key25": "4xxuFBdRtXj11YZDqWMYcJt3cTXhTXGxnTPmCE4cq24PQqKNNAQnzRetTM3YnAynHqtDPrECum9QDmuV2maD14ww",
  "key26": "48UUnYcnbsokr5Do6peBRC26CiRQAoUYCuqiQKnbiE6xqfjDrNvyTVGxY6nX1oN14TBSEV1gNxFz3BLHVniKHEqh",
  "key27": "3cP8c4jLb1BRp8XoJbqwMKnHndyMwVmStnppFNSW8zWmsnHnxQ62bhrm1YPLWS84y3kPkebXMiKkvHdADH8Nduk9",
  "key28": "21ptHsricFRfNQiDtM73moSr2Vpa6arKayMNQdGiLaSTb5YDtqcws15EuSeNhkw8tR6QEbvw5FZfxZD3feUHvXb2",
  "key29": "4sGdTUUH69FwsaisRpAYSLEjDrAnJDj5nwKmavB3EGfi8Srqj2qCk8m3bxMz4Pwf5YPGWWpJWcC148q4Fh2xwJmW",
  "key30": "5GaZC5DjUZFjggEwcj6TAeFkeKhna1N9uF8NxtQHSusMoAcSJ9xEwr7Z5d9mYWf73HSwWj9LiNdRmrpEuVAnvZvy",
  "key31": "2a2SgUNvan3tvSscR8HzWp66uBpzBGHbtLuiJpfUpUAyRJKyM9uzNv3xraS3U4Lt92MFAkVcc8273Nj2fiz1etHc",
  "key32": "6o8JpGBV8bPqWqByRF5eJJXax6678Kxq9TgaMjdh8Q7LHmzejM1H9E5JYiJLPXWBCN6ehM5xyag5NC82Njk9Pus"
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
