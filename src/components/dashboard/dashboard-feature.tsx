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
    "63agvkuHQoHkcFVd9Tk29JZrHhPEhxiAoYjCDg9fxrP7XmHXAt7QvD28MwKsrvfXva3MYPKnmAdPMkW9zQGYCQuX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42BWphcQYQX2vVbX6pfynGNM7GNnKPTXPksQkPke38dhgukX6Ru643dxx3wDALCFLY2K58NpnUYMXdc4ocxJnoNo",
  "key1": "2n6A3HKLRck3WT4ZDRfYpxJ38t2J2b5S9AkhoPSsiH8nQRnzAnbMeXcunHtCZdRUmm9gEVC8P4qqKi98JjfF3YqU",
  "key2": "BuuAinfgDqffSqfN7UQUjPTpV8LFXPDaNaxAy3PgDW9CtqqWkcQogskHgKCVbbMKJZTZgg49yPdCvBCXEcEtgJY",
  "key3": "4zKqqBUx7bVSmxd4H86W2jsiUdtsjL9Jh2wGvA4GgwF7tWuY8mqX7sR1nQ71MNKiYYZUrPBrhoMkkRnUAFbPKkhE",
  "key4": "2kTC1tms9CXkxTm9iR1rN4XtwFirgww7roiHsDFendvQYAx6m2Sref2s2fkZtoeS8BjW7NqV9SMrRkLvC6idgdAJ",
  "key5": "55ueMovajRxFqpYGLDStmABaRbVMLPrYgUVcb63XHbak3EFMmoUnWcqnFzQtaJXBJZEABuL7uEsDi8z5bbeYksJo",
  "key6": "4EXLZ7AKGstfJSHroTy61q6edmbi2Kvvdwez6efHWoPGRj94q3qnBz5ULw4K1H9bKV4uNLVBYitnXBANLtZ5jMVq",
  "key7": "2aWsbXNXBGFq1xCXD2uGy7qCBtn8d2KAmbUJbVgaM8cyCnYzYLtLCCPR7akMzQCpPmsYrYMpJcHsAPAmJTMvtMFT",
  "key8": "47tV5E8wmbQxveJZuBRUkdCNUkCbtk32Wt9FycLFAzbHvgmRYkh9Dpu5ZkbQY3ydkgE93uDP8X2EowhGFXkVhtPL",
  "key9": "2GFXNC3yiiwE9GDFP2jLAr8zimzeGDDSdGS6j6uuUxNxjJMYAggwiw5Z6efYpKXBoMue5rHJv4EMpq42aGo5BDAh",
  "key10": "4SJYKYNp92ykhFgmZR9ixQyb3tpbGJGEf3fy2kG3DW5QEs3jXo6zGNHaLhpmbVZFALFsa8jUvSwXf8wwPesZmmDj",
  "key11": "3M2ktMN8u3hr6NofzPML8en2T7LGhR3hL9Wd1rGyk7vTZNR6i9qi6b9ogyA1EsHPCCX1VLup3voa8yZ5Kncwv1n6",
  "key12": "2kYkCqHTwdrhkQmmUkNMj8Q5ZR5kSDEeRo9sQ9uumviT6xowX5zDpYGCk2qhScV2ifgfxRtBbG9Wv21nKBgocmJ8",
  "key13": "CZToV5QLxcK2Wm8Pe6hsXaU9WgfGd6VfBayph9s3Dp8DtER5G9ME1oU7zGKQmMZBMn4J8tejfC86vrMy7yzEmXy",
  "key14": "4AWWummd6bgbVAGgLqMD7KRjRzXGWmezCz4DwzVXmUqR1xVV2RKsU2B6ej4oEXrJNM7SvMMKiJbZjvkVqSEvXUXS",
  "key15": "srgK27SeHqoi1mT3ucNWB3qS1WmaC4AigC5M6CiWdoczxUTWaFThJgMDTHY9WBHumKFciHLtK7eMpZRToK94Hdh",
  "key16": "4HFK6CStW24NhPtzyXaAuu6yhtwANRo9jxk2h6xaUSbMZDiR2GS5DCfp4me3vfZJNyFhpwbooEM4HgUmzLF85jSp",
  "key17": "2bz7g1d53U4XxWfzfghb68UdenhM8kt5ux8hVbEG52w5Lm3SU9Nn9ejXwudmGMxZ3MXx5bniByUY9k6ZvKuuCycg",
  "key18": "51GiHZK5zvhha4p1vFMcQPn584XcauW7uLHYNGAc5rAGoTUc9VnL3GPxZFiZuYRvRPVnCoPG9b6g24iMWcAVoN9v",
  "key19": "QRmwx7hVQsYmECSG5cHTNSYrreCEUfu8z53zDALBJMgdcUmpeshuL4CXEVjoCDhvAKrTCXApk3AXkgYQahq6xFQ",
  "key20": "5zkXDGFrhBjsp5bEVdRdfS49u6CLbhwuvhys5drJNbBy5cReBU9CLxGpAPFDwrgVzmWBtES7mWnmUHPEhBsj3xH1",
  "key21": "QHfLQcV9gZxhUC4avYSaeBHtryLC2XKnFpP5rwVMaH5gmous2DCj9AvLWccXJurBymNobd7Qbvno9eHWBGvBsni",
  "key22": "2hMPUMgt4YUxAk3wxvHWLEjWVSDoE5qYC2Kqsyh4B7S4QeRaMLSJCxukQK6kTY6zR8zWEuRq79eKwaf2sgDKb6MM",
  "key23": "2W1WwcwsvSohzJ1QuU8n6JzBXTpAESLehRw8uhe17LvZoJjJkpVMrXL8vyBdUJ8ot77xL9wxZRvTBXgYfZ57A6Gv",
  "key24": "1Df5oc523BPvVP628X7PecJXzzvGh7RB9pabrQXymiXRtS6igf5Y1MvwoeYucPyLttoLuBT91EfUYpMbW4Lx7a4",
  "key25": "51jeLZJcAYBUrcWjdPoGrBSyXBnNoxVURzHaR28GrzgdX1Reodb8snFakHRRTiuyZk9nPGRRytR6sxYMrUA8RxVU",
  "key26": "3dvLD31Ru8LvW4DizLVMGwtimLYviAXJnnFDeTmSX1uDn3UP4p4tfeK5BhXFvcRZKjKTSGb9GRCKP5XBxGRoo7pf",
  "key27": "4oJ8iSYmR3HfysfLuyB3pLobUKrhc3KxcnUMst5hLuiGH3oPgJG8YTL8vN75GpsmqBJgghf22oUWe1f1mgiXFfgy",
  "key28": "5QmKmYEeLDSHfq4eCjaguqM37f3XRvgjbmX8jx9J6oxRJ2qtzH33J81CYWFmgFB4EfUkGu6poo8FAXETuearK2p3",
  "key29": "4v6pcJvRWogsYXzANTEj7HP8ZG6wW9RmMYqP2kjNz1oy3QkaaQaNrZpRbWGEthZb49g7zvecDMcocSV9TftWLsEq",
  "key30": "4PdeoDLJXnHiVbjcgLy787bnjgqogwSehNe36iFNx1Nk3EMBzhtsjJBdwThKzFHgx9scmTssWBuvg1vtSPf2RN3v",
  "key31": "4Wj3L4xHtuno2AzkWgrGH52JdGVDvjX8cxYUdKNMFQGz2yooq3RMLk5Caa2MUvehDX9twGoUbXKzCLaMAb9BMJ2Y",
  "key32": "5TNbG9YdE47yYUUwnPcngRU5NVApyVfN39f5dt3k5usjW31eoAwgzACsUopJEr7JKjWX9ZFH3dFxfHUj1nqvYU4Y",
  "key33": "4pbUBLCSbqRGHUqQuCguU3u2ixxgxABUzt7X9R5u9D43LfPB1YdrY17wddtVw6RmhyaR13eV7SdNYCpwfGh7Z1Pi",
  "key34": "4GyQPvRyTehee7R5P7NgNVEbpEMSyoin7RSwmFaVgHFXaT8D1scU3qehkcjQBLws94R4xocHh8kk9R2GBcS2ZxZN",
  "key35": "2CDpcxrqN2Qj34N2TTLwZf5brNHSa5EgoU1PkPJyTrPHng9bQbxzJijgQVKENU6mzG5B6Fun7VEiFEZpsgyoPQ73",
  "key36": "pZbcMggEAJcYH3Uhc6wduHMbu5GAuLHfLuUZTmLgCJKLWMJwFX3EcdDuv6SihE32q9i8f8MsLLsbXAeNWrfDsmJ",
  "key37": "2EvWB98cSA5N4JpbkBMs8VqWSWa5PP2kyXADjvbbLfGj6s1rMcSvTQMgGfkNqBVFuasCbtAew5xwouWhkyufh3Zi",
  "key38": "2npLwdSS8WHLwFicuSNkRJLQakGXfU9AXKuAgMZhDvBec1QwNUTtADLpiGteyATXoG8xBMEhsf7dpEjWChmhwJSg",
  "key39": "4Jp5XLqgjjaANSeudxfg7imwR9HJCPd2Z5AeD8EnU6GfJrn1GPHPrQxDexoq9M2cNozJJGyWSDZtArh5BMqnzRuX",
  "key40": "4aZLcJxuncLD5Hk7JLUZ8hACwZnFcRLs9vFfMtKeXdNqjcmGGbijYyRuhp9eM3SV147Sc9D9cuXtiNCSGYbAkCCn",
  "key41": "AWA5XjKLy9ccKzkY8Fx3fd78PxYgvcKUPhA8SYh3iSgTvEaTfLmexHeeLgRDiazT7qJ7PKwk7edhLGjX4nmff1k",
  "key42": "2Q6J2QacVthiJnjXfCmFj9AVpkwWrkvJzRSanzvKGGUVDMvQifMVnynvfUg1JfcuUg1Lb9rFwmZyri39wazaqk9c",
  "key43": "4GBSjRdybKCLBxmDM3oqnQhEHsckndmUkHXEYzE1EYzecVuAiEMGXrZiZL4ikXPHUfzcWZUtNvivgk2cBfZ8wzFe",
  "key44": "aRypfryoceTUvy6xu5WR9iT5ZgjY1sKfE7giJf65wXUqxrvvJUz9QbLZUkjMxj3vQwwuvc7GKSzkRZHi5MJ3wsn"
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
