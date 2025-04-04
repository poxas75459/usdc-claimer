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
    "64bP1y4KfmZGk82MNRTd9sD4iCkn5stmafaiUZErmWFKDzJuCGFEDHDEMMbLDQnUzMqmuu5DY2VnKjsQeme4L6za"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3V8DZkkdQYfMMxAixnTcrpTU2nQH13phkszptoQvYwApUjdaTiHD5rEcbAWxzxVV5W1rjD1UrhsPFNaXhD9u8KPi",
  "key1": "4WuEaHSD9fvjvradAKJ8fc6krfApSapweKHDbGTAPtWL5ZLcg882ytqDkCpoUM3YnQDimrRZ8BYpSdcUhmWoRpzi",
  "key2": "5RMBRmMmjbGL83Sz4h1BySgqMsH5th62eRtHUwqv2sMjGGqfQSgttfe3Dh4QrNXAdSgcqKkyidXLtbZjdFEFrmPx",
  "key3": "5UKZfRQyq79sMe8RrhQU5zFk3x7wMRjBTNKZTF6SpyYEGAUo43WABMSNKCCwnkQKBmVFGi7UtzSysbfAwF8uqpWb",
  "key4": "3UowxtEteBCNqtXvCptBWVwABkGztNqoUBgR1npHSQxJetEUMwzib3mLDN1mnguNmKWbj8FLX9ZBUXJtkTU79ZJZ",
  "key5": "WQCExjLRSMF8ygZRR2C4FTCXNvnhjiVtbQPoUo1p2SwritXZYDmc1KDEeBtqNYgR7DTMC8PnVVPQi2jKXTc2hhG",
  "key6": "MmXdsade4Q9stTSwiJtYWgM8g2XxVApS23bVU7oFfphBSRqeiiMApc823qRkZjyi6rXr9WD38jhwcWN8LTeT7RY",
  "key7": "25NfgEqgYGTSZsCUAtCzf6zvV5wbs4kXS1a8cJDdh3HzW2LVD7tEkn6ZXVBynvMyME43NJjCUe8q87uEFSTHWJEY",
  "key8": "3f3yrHFUjp8TbozNyZqK2PtpD3ezh8nntYjDuaSC7XYueLBC5yJo3uoUWNX77j9kRefF4WxcRKnriowMrMqrhYev",
  "key9": "5GMLS24ahpwZAryDCEDMRiLBPcnjMKFLCNsK5f37V4o3MBfst6ihZKMSNdmSWdvTz1vLuCVAK699yFSbcdAMKpei",
  "key10": "4BnfKZnfG1DEHDRgy44HuVsVcqyasEjQnBg1jptSEhA3AjtgnywhDoTtXZq5cCFiu8TfYbCWKdAjq9MfyxrhvFF5",
  "key11": "C2fpLBLjAwtBDQyMRDFYt9U7Bxej8WmXdu4r4WuR9kBixeWiRU4BNYrcxCVn1bnraTDLQoi87XZcFFpG6wPwbjD",
  "key12": "2B2Bp4CBLboweMp6WRLGjokErJPwq7LQNBhVv5LGnPPE8XMYnBebHWyoWryLQixVhcNtxUnYZP1TV2Y7WibMRTWi",
  "key13": "4AXHAZtK3Kjuk7iiHLSb7MPPBunjvPhNAtXshwdXT4EkyRBUizoZZCcX9bNdK4Ri88KK98yeU8s2Yg7mc7yRfVhT",
  "key14": "3woZzvGX4AZJ4Nu7ghyqSi6yNCBqUoG2wqdKiHJ1NEijaDJR14m8TnJRKeaFDn9MD5fbvn28kFkuWNTQ6Cn72GKA",
  "key15": "GE32J2k2Be8vnYFHcysWq6kc6nxVPuGhbSkjZKaZpecKxatbxUyMWDHuLWLbBnUXGPTXFTnRWTkSXrGnfYbKBaL",
  "key16": "2VtACRNHZFA2rqPB7GBiQ3e2qPz6wMguAg4ZqpGQfZthFdeCpuuYTifjkUD29uJMnpqQvZVjg2JRQNpNZcA5itJU",
  "key17": "4yh5Bb9nFF6DmXCct5rvLmXzZVoJiaZRFWoCBPgsaJkN9WUvg1krwEP15VKRCVZ1Z97jyVfEYuHwfWSxdpu82AP1",
  "key18": "Werp2V2vPxeXGuBaJdpE9Brrotxu546pdgBvqPHNtgoJuLsPJYtw7XyGx6HJ8Wn9PcP9HsYAJNba9TY8qu8asdd",
  "key19": "3KTWF6YK3NJTac4uNy7iQdbwzhdz2o4Nf1tBvmgr7cZrVFL3SrbpdWnvBFKWJrrGNde97cKxqj7T7zW5jDGhxLBw",
  "key20": "2aF4P4NMGs62sXMUgC2kHmZmba1YgZM48xX7Lvzi4WVwHcPzRX3euHE42GY7sxyq59CpuMHLAgQyo3jE3Qc27AnJ",
  "key21": "3m53nPnWc21ePdBTiyHdJtZaTxfsmAGUd7jTbGF88JvRLHXcU8wqLoedVTwMb4CKtrEN3XP7CpGBad3seoKNVFXG",
  "key22": "NySxBoMK9WJE25ekJ6Lnhw58b4E4YMJ4BujYxThra98ZLUc29NfnoRLG2nPhi7Naxyp1SkRBH8v3VC1w473vQVV",
  "key23": "3z18u3fu8LVwD9sddMmWWorNW2Vr5dXNgGZQfQ5jSCGpuTrbzEsDoWGs27bTK2h9S7TwMP6vzzGnJGQoiTLaVFrM",
  "key24": "9mCPJ7qb2chsXYRJeoYutsaGsU7mviJURr3gmNTiKhfw25DmekFc2QFMkczXhE1WkY4tHoezQn5K4w517rpuhQ7",
  "key25": "mJB7JqY84e1rDuwPUmU7ChDmrNXyNfc4hpPqRM5YUfYiMF5xYTQsoaxtYjVQp3RzT8CyUxsTmkGsFeCNaKDDVfV",
  "key26": "3sQeHvuigUy74poC4vK5Pwo2AtxxDpZ4Jo2LdB74Gid6Yfs4ix8jpBsWG9gVYBJi6JkJ7avj4eeq25Q5JyGjw1tV",
  "key27": "5gCMMDx9fBVaget5dzGtYkXLeRhVw3r2doRC6dQyQG5b2nXGaF42P8X8UzdR899MRCJyxcUgWwK31qey49vbYWLj",
  "key28": "2x3EzgoXNbcwZs37y2fekeX2sidQabp4PB1FJfTGAQwzTDXEAURzr7eRZqu2Wfntqn1h9ut2R71LLSSLk7fCj4FF",
  "key29": "2xEQ6dcYGqtmEq2vNHYaX2sWAftGAgdHgzTZL851cPHPh3LS9JuLMzCzxaGq3E8pGtjKxyUzpZyFAaCyaXwaprX5",
  "key30": "4seFdgUjDTSncsdNKh4hWVa8QLpHTejFpC6MVQZAkspdyJ8nX2LGvregv5JLGannwLpK8sVdvrH9LhuDqvh3aTJ",
  "key31": "2tkEq2mTP85jmdHDMgJYX922TtGFmYWmRiW7wPSXYBWNwAmp13UToyDnhZEjNRZ8iZYqnjdBA7BfwVkNL564xL3T",
  "key32": "5XnAY5LBRYQ52DNM9UTE3wFtXvtkYMaDEaaUwp2iPdEQXdMeTPp7VrvHetEZATP1y7LF2Z3E6y9yb9JmQC4CxZSD",
  "key33": "4oT3z385nJu3kKudiwdpXJGmC8aoT8RvEEw6dqka61bdGN65FPE9uvs5dVrLSyPkynmFk1Gsr1efSvcaXjqL3khP",
  "key34": "2PbzNhFf1wMa9ExK9ZbWHHvDimb17fqeeyr6TKrp9Wx4izYXLVUtmWVBZv7xgHvWtYD3eFSzgbvwXRLcQdz8RAAA",
  "key35": "2DZJTFzM5atJv7Q8QBpnUE6SHrWqrtuJ3kFZCXtq9qn8qM1aW6BUzcbQJ2rGbi2RjaJCDWnnWWMptSfvU7towwiC",
  "key36": "54P5AKFfixr55naas9JUA4o8jKWacgLA8fTUtqf3VanTnyB1Jsiv8qstdsqBhq4vKzdJXo1eWCdsqjpwcNRgs8Me",
  "key37": "3RcCrhBEph9Tb9L4AhKkMfDrewVwRNwvLrVFPDzpeMKdb8CYMwTMyRPZvgfLTXAqjAGThzCXVnzxCvERMHAuVzqP",
  "key38": "2GtJx7oRJicCH9XZ11FMqxT5z3joFdFv5M5bHC7pPGfFazpECWvz1D4CKXvhrgwaZXxqsMDx7EnEJkJDeRRC41GZ",
  "key39": "9tGYM4xhWMkNJ2yXiupHmmTvk563CYxjBLas73bBELiYbLsL7JNeub3RThec2K9ASdcHvswWoJNgXSsjeBrEbui",
  "key40": "4Cata3sk25Dn8Ea1BWzrxA9aDGiiZyVgfKjcFbaL96UFVPCa2az1Sy2ibiNW4AzJ9YiKpcsvFAPqRs6Gqq3wtAWS",
  "key41": "2nNZcF2HyPNd36iobWEAaSSRodwkJcu1K9zDGHW2D9Z247TtZ4srgArCTEPy5t6vzC1L2h1MGo3USWg8bEJyngdt",
  "key42": "4kDgYFHcbmsDcVWn1eXMEuSMjRTT2bUCNaBsT34tq44ik4bwMUVTS8SgcPchUpXPXVFw1rDAzPMDLT9tjUfLtm76",
  "key43": "5FZRVrcgWQVenqqjPBwdtwsogwFjysbGDn7EeHxDZzmN6V2Dd44piNqbk5WaTryBBGTAffzNNdFJgoLNyDC7VkYw",
  "key44": "3KmT7TGRXPhCxsCdk7EvRZsUz8dquNMDoKutbfPzFKLWpDq55Bn8eCBPWULH4y6kw83e8d5vypnqPamwSc39pr36",
  "key45": "3YUbp1tRbjBTjs9ec31Nq1XcKmrbg7yQu2zGNSLxB4APxbW7UWG6XbTQNpmijfMLFa1Gcpy4czZE94VsrcuQnHRd",
  "key46": "5hHoqg1XUM8psRNNzAZxS6E2L6W9nBTjXUN2c4CxdGXFsgvpzTb2RPrrc3z21U3QSXPNTH6dYrEL2moW49VQH1X1",
  "key47": "3aH8XGkGyyBemEbhXrivBK17bq6ZbWNVr6DRzjp5h2ULie1nAmQwuPnbjr5Jmq3cfq2Pjr3mfDEKjMHqwNxc8m8f"
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
