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
    "2pBSE1ZT4bUpi9Dv4ZW8Lsx5vPLzgRAScxCwJVPw5J2vzTsmWYX3H7oGewJiy7be1aFhhMNUs3d8Tm27Vsa1X7ui"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TCmfgEeqy5W4adEnxzGBc25x4BMGwZNnK9grsN3j4Snw5enMWP92AHdGBSnQAY5FysgPgvjKY7EUo8gV8Q8PC16",
  "key1": "2Yn5DHqwNa6H2mXdJ1myvd5WTAZg7gcX8jfKvgdqZqq59JDeaseHcm7tf2wZf5mCUNdxYT8k9dsqe9jcmG8DNXyT",
  "key2": "4SWtfdouYZkyap4VFwwwApJWFbwNDE15t71XB4hnsptULXnEfmqLPggbJbqmS6fakeRR18F6aARwJipKrP42zYyB",
  "key3": "3vkzun3z3VtX5PRXPk9fZpWDW4Sf5R7jGFkF8B9wV2GH5Scm5y3N3c3gGreZeDhmxE7yXXQU4WBZ36bc4pg8iMkc",
  "key4": "YrinEKj5HzWfH6jcYMM82jLpzLZSozS3Mjc6u7A6pVfNtxi5rHPPEQJttmurQ9dx3NDk1mEshCHFvJiou7MiMiJ",
  "key5": "3gq3y2sG1Yr2tsi8EDKLWQuW9C3vdAHFnmpG6oHW7qyXF55oc7u99YGSKhJhKY7i5Cabq3RoTN6xtKzm2DjXXH5Y",
  "key6": "4ugoHtkHk6zrAgnnxhdjMDF57VQ9WTWHK2fF7HmGd4mZ9JMYz7q2ar96cuMVZYXoUwKqVU8odXQVZJT9Ctf146Un",
  "key7": "qd2tC6EYpGaipWonFoQzB7tGWxFpyCa6GDawqVRTDHGU6kFDg67rKQjthR1pMCzQ4zimtuCtvzjvsx3N85UDyeL",
  "key8": "YutYhpr9pbnibDr4xY6Ya4nWbuTRs2yto82E17TXFJpnpAUJDa7WiRDoytdboKUTALfr54uc7TCwxVGTqC8jtBx",
  "key9": "5cNNW84rD2JFkKBEupHzNbBRBLDqFyx3RQbPyxEgmGKLKvWovCowuDaWgQC6gwnH2YjfZypQbWaLnobJWFsxMJTL",
  "key10": "DU6AF3NYmudRKe9n2cMp2zEozisANGVjWP7qAjnrZCobpAAzuUdKWmtGcpkRakaMKm4KxdcgXjfTULyHV8QWkPf",
  "key11": "3LNK6hi2MjmfqKydwsuJrrix8VXXKBi2zsqJXEhgxDv7gRT7Eo7jShV2NUAgEmEFqpV5SeCAqLqrxCxRAea7LFtj",
  "key12": "4ciUiuay2CRB48sRwAhYQKbZNeuZwgmxppXuSFnKUXLYaFytE6ZmmR57EqhsKYgU7YpdkNQRw9Q1iRxcdhcNrDdh",
  "key13": "4eh3ajkVoyBaM5NQoTLBf84oYk5KPWXUBd9xEmmDX96jzwNuY1sLMx7AgPADdGcovnb4H3tTSKuAuWKL5ni5pCHP",
  "key14": "62tHnhYDiVytTJ7epRiCi1faBLvFHdiU5nWio5pwP4CWWNs72Vhtj8d9f7zck9hY9QyFDpqkgE4XNoRiSa8JJvqW",
  "key15": "3KJa4F91GfTYieKz2QLPzEvDMpGxYTYyBG7nEdkYfT1CTWW2DnWQScmhREfQCWpDHNNgmWaST48aWAG7G7sJ2GiL",
  "key16": "5mf7b3YUjc1S4poxHwbQUzukZizZdnsGhyNpQF77nAPjKuvXGnxDodhmdqNDtAbV5i9LAfeh5G6fDmqpMDpHK2WA",
  "key17": "67ZBHoiFw8NFpvtP8r8raNCtpE2sDfWdj74AwGEdsF2WfcHTk1qYD83c7CfSbZaK6LHw7nKTrZvJSHNGDT4ka9K4",
  "key18": "2tappeS8wrkCkacfWoTWTxMT1kWYxHuvLFbDtNHKHd4hpRS8JgD4Fhosap4T5iYMtnspBRQKaPtFbomNDHbi1VjM",
  "key19": "5qobRbfx7buCtDTEGjw4fDBFLycZc6yumR9xh7HqG1fSmjwNuvjsKcQkaKgKDaFKyGBTGVPapVkWXvzV9BcXExVQ",
  "key20": "4DLidMYEiXRqXYCKNrWk4Gs3DWtoEWfF9p2Cb6pmrG4ppmpVuz2eQ1dFLBT2mDfZWEVG6DxVkcg6WwFD8f86ws2K",
  "key21": "63ZsbwEXuiXbX4g8T8Pyhn8yzEYCRQPwK59jvtmiYmi7whjBcvdKzfAazhxycgg4oS21LKuHxt5zquLsMnNbHvCX",
  "key22": "2RHnofRrGqQKQ9x8SW1MYHc4xTVwVBGwwxHCybKLhcAePRruPgKQVJruzUeftEm6yGsiMm9svmzaPvL3gQX11ZJn",
  "key23": "2JAsR6f3m6sdKw6SHWbjxEH81YbfapTFwnEigR4XGuaf1Rp3e2mS9CMouVBgY6znVuZBXDBu1aDkEJuK76ubCWhF",
  "key24": "AHkPnKDa4HJGXty8KFwpGLWiW87QvcPrD6hcjtgoimRMunGKcMbxTyQ8yCtDRvkqqGQUnTT4SGwxVxztLt6fPzm",
  "key25": "2Sa5v5X245eMjRGB8pCzYuCZ1qPAEYp3pJuVRcmbhKZ4rJZnoCbPzxAZYX5uzZvtx3z8Fb6Uya2fJbsknYPEap85",
  "key26": "2NeNpnmR3gUFthgmK2t8XvzknxQe3neW6ANEjqSVqewa3y2VieoSidUPG9wAxeug3kSmdNuwDLVVqoTb7pCuF5Xx",
  "key27": "5modHsTAtwS5Lz7rixti5Q2d29F1rqX2Xwx28gw3nQpMGZXnKtTsJMgfFc7yKrRYWirkFGfXomZqqGPeEQ8Hd5LS",
  "key28": "xfvfpg8aVs1Fcga2RZSwRkRE7mHAuqWyQV6kuHAd33KgGNDYZmeqzftCmojynAQgrtgtzUj5CnoPEGP9USBuTi1",
  "key29": "32einYW95rnzkgKfJtCLUANDHYKori6Ce4VPEWfSxWg8Cah8wxnpjRqcddbdRkXFVeqGSYmRZWHKThUm9rsbrCje",
  "key30": "3Xi3f97UZrYzL68EwmTcA6YH8Sw6brtN815fAmootDka1u7rDwDaXbW7qqF8dwVftB4AvLvvwSkfwDHNtMxsHko9",
  "key31": "47UPwVtwvZ7c5CaRFVoR3d1f3fHWchhKgovctgJxup5inFfeFyUAxcnWBDUQovLJzLzY618MZJAVfMdECx49k9md",
  "key32": "5KiVc8kEtvH7swTom3ZAYrwg1vU9e9h68hKANpXhZoc6yF7ssmZZdwn5nkcwB7y75S72VgxUnLBSxgpz34874TWg",
  "key33": "Qz2nhvagahCZDtoWGzrvtQan1tCR1AgysFChQuYRYe5Gd24BPR7ALuVCYiKvQh6DoeVu1fBqMrSoXhauJudJ5fV",
  "key34": "63NS7kx49CnpiDG5eKKosASa75XASqty21oeamrSStdNT9NnZpeACtjdUAYJjP3jDW2JkCwm79gKWqgWkhm1uLVZ",
  "key35": "2qtRsiYRktPQrwRdytjQ3g2qy1WQPKyyUcr4dtSiH1ZCLBDVZPaCv74k12z9t3fHEkoNoz7sAEYembVGRWcTsMbt",
  "key36": "ZhoBLx7QCtAUrRCurxxj1vYTWA8pfdc2DtMRbYqtJJ4kmbxcM3uGYnky29CxBVcpwuZLeD5GuWUQLGvhdWREzLo",
  "key37": "3FHsoVLSx3Zi68LmGrWRRkAKR9HD8mEyGPfUxinPCDwXmRMrQqHqL7tP8KyuseAL6iXbw7CiA28kg2cZS8XDvaDp",
  "key38": "wFpSkPLpmEmtrFg5phXUE13uAr8xnWo1VprwPxLEbHqtJH1FJZVKauQTBy3FGdYbCKYhi2b5pqQwqyL54fKtfXP",
  "key39": "2kD7vng8ESUTMzhtUuEwkEjSTMs8pRkGGRckN5Eo3gwUVbDVJ4gByGet2R3xG4Q3iSGgbeJUD6zv581UXPUqrCoK",
  "key40": "5BQ5TY87fYgwvx2XrahdYJGzQULYvCnmQGfeQYMKSrL7mSEEsLoBX93HssKqUnTKzoNe8gyowNQFkJmeuepB56Dg",
  "key41": "65hZHXZk99ePP2BPWMsu2Skt3uDN8T8nVMsSsctKDVnSvrhP15F45z7zHrGntrqRxrgaeWTmHUWEpN5oTqrsrj4J",
  "key42": "5KhZDDU3dMA8LemDD1E6UaG9xVZufWth3fQ4gxec4XvcZxdvheDtzvSkrghiHyTedEDtq9Qt3SukZ3qXxwzFxXNj",
  "key43": "2ATRydL7Ph8J8cWyfMgGtNRtFi13z1TBXWtk3pAv9ftiExvMX7sWdxVrtgaZjjnx6NxHaq7yX2xdJ2SfqSTwNyXx"
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
