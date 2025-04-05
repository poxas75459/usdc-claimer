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
    "3GRnB1vTs2e5mDdirVE2GnVFVRnzzX11X4W6JJJunz9nh3jgWNK8XSYUrnKh87inLW4sbyftJdn4Tz4yGTZmRew8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wkWFeTBbxDZKxdFNh8TkNXZRWb2EmcAsjYMYoJV6b7r62N39pyQ6hgTUX5FvZhbLwiff2LyYMEGFhABo18q35b7",
  "key1": "533ZpG8vekzWpuj8ShdWUiYocdHeHLsUSbGwPKBve9vEMikwDcz987bPxyt5CEf8hSyBuENDPQEKm4Ww8SdkJksh",
  "key2": "44823ZSxoN539tCwGvawZwmMcxa7dB1pYnWngKvWhbKWTnAGgwpJcT6geNYnoZ8q4F4isxG8GWDpZLKzNHYb1BHp",
  "key3": "4AkcsDQRt1h6k6XtEhNt1VK42oxmn62RxnKtZtcQ9vQH2hCtLufpJqJnAo3JrxTK9GFxdAqPHUTdK66pqVHHin8W",
  "key4": "2g3XKAvJG4W24Dev2KYNdG1zZxP3rR9gMkwoiRFZKcmaFHAkYmjbe5QD3ssJLCQ2rKkGspmTtza8CrmU5bJUaTUA",
  "key5": "2SzVGFaTEjsy7yxhYLd6WnQJcmu5dq5epj8yr9Ctyco7zAXKah1oB4hNEbkAGkEPMaArAtqMwgYpc2U3CDoeGphq",
  "key6": "3dmmBjoVmiSHXxfTAdAW5QqyBQs1AzT8Nd11UU1eV4459qZ7YPMFfFeq4j6Bgb5vbS4wtv6dag8RXNvzMXBTbNm2",
  "key7": "53uMtni4snwzmnv6CsiMhvfhs8EpvJZrMgpJBMVQi9YPDEuHPso5B7LHvNBzpT8ZgfgQP8QCAZYS6Hz4B3LGbPfx",
  "key8": "hiBekK7hhGTVfP94E8LEAyXMn96gXT6GJhzXxkKmWBorCr25d3ATBNhgSn6fWczusZNPRap8x4kkC4G72AqMnKr",
  "key9": "2pi1Ah42ZhAM23ospj2cvymyepQw8TVKnsqP9CexAU5LpndigcHtW641ecyLHpQ3AcNCmvF1dDgkWyJ6qt5T9NSS",
  "key10": "279RrfoeGQW5V3yuDrtRdeuacYb3d6w654eWh93pgGNCP6TJiHFgjtvwyALjojZfktmfnqFSPocm7Ada6zWuhs2v",
  "key11": "4zQkNEUG1RRyTT2kSPbQdTJxw7xfoQiSx3iRqURj24KHwBDi5j33bSnAkxkqVBxAkZLctjivHYaHfjCCwHLx9ssy",
  "key12": "2YG378wm654fzpfnkkzYCg5bSy1AsHfD6kgSzJFa6uFY2k7cfR3P9yWSp8HX6v9kCBktCiK32ozo4BMxKyNpotcr",
  "key13": "329LjwN3ATbm9coivqoaChVLvQacLaLUzgFSkbR2h35UZSiRKGhFHaRLMhFZmsEYLTJotdToAnWjqwu6K4jXRBdm",
  "key14": "5PGQ8AsMwY4skRk7eKavoMAJCAsoZDW8CQXFD8VrPSn9MLATHtior8HyaVREAvFjNA5Fx4bhy4r32qinFvbTPDtr",
  "key15": "34XvHdiHZHxZgnFkREhTQyHXxVF48331C6THmYksDLzViABTEyN8fgXADYbMe5rfomExfnT1tQvsodpWwsVxuF2F",
  "key16": "4j4iFioJwjSo8nnEGC7xBZgLSieaseegHyo247sZw3fiaPENf8KjB8ULxcSWQWhFS9GDEqVZLzbUiw6aLi5Rjgs1",
  "key17": "5Ew3RjeAq1pe71hMxjyMyaxi229GZV3QWrDdhyXikgzdDXRXX8HUndEWn3Uvh5xMLdK3b2jBtzd9hmeSbqu6Hzy3",
  "key18": "5jHzhdvzR4hjTTpL9exEPFjp2HgpPd6GoLkTCdS3Dg2UdNToj71dA3apL3834oBBKFPbrKvVChMVMXsd3d3HNeUZ",
  "key19": "2newC1McofP64BjmU58j9ZABrweyVGtqahg1wkMnmLqNZq1VcWr1tPgyhdFhQzg8DfA6HP7U2wxg1AqTo1CjWfHJ",
  "key20": "4TXMdT5q1DptvaAgZkZJWMgfGZZkRVWsoyZvrGQs7aYDv38pzNQ8cjgs5AZATw8iSs9SEgoe1JJ3vvx9NteJjiN",
  "key21": "31mwqkZ4ZFyZtrEYZ56c2N1yF5FdoNt2g59oRj3m3RrvVqRT9hiyegjQ2JXxqn4VLgDndHvp7hK3be7ryw8TKWxz",
  "key22": "2D7sibmyxJ7vWNHSSQF88fuei7czVdvLfoNw7t9NCKxU47UEGpCHbxDo8bmVMCCxnazH79aGtVeuG75iz2aLTwey",
  "key23": "kAsCYGYJfZVw2EzjcwiX6mZuS4rgnkMZDgTHhh3g8LRPECYbjWJta69ZBYsoVZwqrxKQPPGM8ebxcMw1NmScmxF",
  "key24": "64g5kPvAQvY4zh7SCnMF8CzChCfp5SMsCFD87QDKwu3z294NvwAqS1bNPW4whTEHUikRRxyyvQY7QuBZ48U1tWTP",
  "key25": "4xghZ26ZHh3qqQ64jC46VxaHf8aJoNgwXUqzj2juoMpV4GcZcve78JtVUCeegQitznYuBxQqipVAwLHnqV5HwdgE",
  "key26": "42cRggSFUrKxc3oQx37MA1dd1U11h8s6rz6aLmCvMGfncBSS799GNA1kwKtadRDaCikAjAGqCamSSZWB3C8eNLay",
  "key27": "3nrCjexZch1eMAc8snQe1RPaKa64QRaF3156W9ukJAyxeDrraBVpi5xfFuekpd8jDLTaix5xGBNoL5p4qZ7H3Uxm",
  "key28": "5UauDf4gv1cHuBSX4d5kzw1WP6CVGtRDdpTXQHVWMNKyr6Ynm2dFAyLMscmh5cKMxk8v7hqnnkSvnZjDGbBcqGkY",
  "key29": "3NNdT6wGeNppxxQ8gvc9RgfzErDZdwHK68Qbbg75Fr5MFkzqKyU1uzzSFb3u8N7fb6kDrYQFy9zTqQaBiuCY7sKV",
  "key30": "5ufmzhwcgNv9MPnWRTpXa8NUTZoS2Q1k3PuxQcND6mjREmjE54UEGLCMqgXs7riMVz1UapUdMNpCtAYSdhpoVoFh",
  "key31": "5SsKGUPoVgMk1maF9CG4mfsGkENUDiQtjcVrgaMERP1GG2ARjDTzrhzY53RxArmebrGwJTcUfaNs2AWr91Sb95rP",
  "key32": "5DRNxnUA1QShyc57wr6NVQ1nuY7VhpD7S2XP5B2nYwGmuNqVvSNvG9AuPkHQLZegEhLmzReJbJRq5wgP8Cq6rgiC",
  "key33": "3tjQmnaKZ9KbAVbS69ygPzWdYzBd2LKcMWj6koLY9xGtrqevLrvpd11HwfDd3ynwo5gDd4sMaujRZSRdS8YyCu9m",
  "key34": "5x1cmhxxPpo1Y6qZ47PcQMswT7veQuxpEeY3tTtzLeaCcoZuXuUvSC4wHJA8vbDp3uAwHE2fQXtEVYeajHnXJZE3",
  "key35": "2Q7GMvoPThSkCEhii8hWd5AE7fGxYBz6cZwvjzSyA8dPsnhpkn51NGwXgah98Z2XiiodUVuA9WRPWPvjhKuX5hKJ",
  "key36": "2yfYfkHEdTKiiRXEsFt8V3z3eq3boq3mCvoGugRxkowjDoLXVipRSEtDYuhozBD9cRkgUMpZaEGtEqVJwohxJ4eH",
  "key37": "45iF8hCVjYcyNtb9HmaXeQZETjgbnMevmBdeUE1BpK4HYsodqVExoLLYZ5mEr7nonU94upStt1nCDHK1Wjb2HHAp",
  "key38": "28TQDSbcGkvVtukkGpDz8cYGNoBwpYMRkg5gThYqRZQypAfcfvbPhxz5YgukVxqE7DxrV9ymU747kxfn9tkSrY8P",
  "key39": "4W9vyBi8GU1UpxRQxKTkkGLue8V1Zb2UNhK4eYrFG1L4iCFvonSDpE31XK3tiFYuXYKt99tTwXQXAozXVCGFwFqP",
  "key40": "d93Ds2hE9aiqCLuyP9MeErU46aGGEnmbRRFTND5y79MkE5jsds11jmPLcvVMCkFpK8pHp7VfnzERUTEfTXaz1xy",
  "key41": "3xvJj6kgwbz5FoSid9K8az4JrVn4FnFXQe9bVLVBgRjRAnKzPqcgdfC1fof8A3PNg4RD9AetmHKRzWcQXTYYmLxQ",
  "key42": "2qva1JhLz9g1PtKgH6gMakCK9DUtHxxEV4Rtq4SH3dGsXHamzy39Bhic517hSsTKFv5LbwAsfGbSL2jSW4rfk6W8"
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
