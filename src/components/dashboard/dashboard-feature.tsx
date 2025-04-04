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
    "a7hcRfCUyTkovsjMjYPis8MvRvPgpTL462T1ABu92hgVFpiftZBEajseSVjWsgoBBCY3fzokbJ4Ww673qDPQSLh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M9iZ24Ve9t4XwyaepBXE6XT5kEHVqjHoaF33oRT2kJJHLfaVCH5Nxra4URFxabNFovqKrKPLo5W9c6rfMSSb3BP",
  "key1": "5yLAR9ayshXQ6vL3Ki8m3KRcUUEmpnG7YVC44e1ehLvoJe7sa3beBz6R7SkHLSX1SWNfkGVPLMWEuoJowDpFMxdo",
  "key2": "5zpUmmekyvp2hxbYu5dAo2wE9MGjbgy6jHPAUwuSskxVD1DFi47upZoALdKXd3aFeNnEVbWMUJkbHo3e6HtKjZAA",
  "key3": "V83too52nzwcwphQ4S6s2oq5hC2YrhgxHo3ckY6fijVXtDEZ3fKsCTddUQnrrXnvWGGwNhSqdQAXhHQJvevauR2",
  "key4": "2qEGjZHQCpcPxWzhQVMK9zdEtcCTYmBrEtDQVpXarjJKUi3xjGiwUwC4KuePvKwft7DYpB6on1x4XHa8VWsBbYc2",
  "key5": "9hSeLM4S1JD7cLhfqNyddk2a1cT7VNPhhAtDfXT8QmuT7zKZGKcpJoAa8tjjD9pzkvAQ4G2HFbs7Y4np6NSAXLB",
  "key6": "4zZ72m1j4dAnhjB9aYzcPoPZU2LYAznU1ZzZZvqJYeg2nkJ4NbT7PpbFnsM1QM7PCZqmvLoRbbaDeQig2rw7szDq",
  "key7": "24M69mcRPBkYWGQ5ZHxxkhX2vpf99NkhVKXqiB9fhsV6BS1wBJ18BZBoAo8vp1Mxk35wY8iV9RhfeCGeX6K1kaK3",
  "key8": "3YM8Mf2tvJajjguRPtM7M8BqFihBovdRbUe6KtuXYiLc7dRgW9ee6W9wuMQqNLtJVKBMZidJt9PksLvLbCPGaJ4R",
  "key9": "DNLbQHRzBn8248da5yXsZGSqqBBi3BxmKuZEpKZFSU8fQvtgUohhyCM647YtPs4VRwsNg28mJVaJ7CVsdM9FGRd",
  "key10": "632ZPdhUY3HXXVaFyudhhdzawaP8mGsU2ZsweJighYQMEYLTmmjqHYxcCaBgzV9EiBL2RzDqYmwre51PrHU3MFd9",
  "key11": "t67UZdAkjnEWUz1GDCVTnRtcEaR3bjtTmYTU17PvkdtqdztznuHgam5bfsFJH3L4PTZtWDGfLTeG4TqiDVor6S2",
  "key12": "4vfnPfkYcTJFtF8ynPmU5gdGU67VCs36icVjU1okcvwjk2WzpYd9NQjGPfCmpQAjV7BRQPNNNAbqTpUvYTavtX7j",
  "key13": "32YTmPph1f9MCTHVvtv6jugbmFMc5gF18gNpUTmbNbxWYWgwAmPeu4BgReJvG847Yy2tYja6w72JtHidkPunXMaX",
  "key14": "3wjM4pjrQFkhGxwyKnDdDXwHDyA8otPwLr4gCWJEjX4Zb4HhR5ToyGjKei5yxUtiztNomokp8o6K62L4SQwb6Jrc",
  "key15": "2gFH1uviSpq9XK3wYQ4aB1VuBY3x8HK7aJwp2sq8H96P7SAp89MGBLAkV2B8sBkPemm3wmHtbUvX1pw8R4BY7MeJ",
  "key16": "3FARtQQh3mKwfVYnMmWozymk3i49rAGnxRHfBnBPoovdyuD35uUd6SBErZgNiJ64Ubq3ngvrUBGXk9AqSDRSv2WS",
  "key17": "4W1zzaB6if94zq5XB8n4baBBJDpLuHW2qVszU5VpqtWfEpQSdW7ZYcv9h8rpjPQ4tv1aqa4u9FfVU2qruTVnwZiJ",
  "key18": "QHrE64whQGG6xdyXXZPPKZyFxPuyr2XYNcVnyu4g7APXXHumkjqDZB2r7Ma3onDKvTErX6uUNaX1rYFs1LUfDwV",
  "key19": "3spcqTxuWJgQgnuM3RX1bgePoaRAGRdHfn7WdmqArTJqkKZtpk3CanwXDidpsp9FUkPqdRPtyE8vhXQyQ2W3JmQG",
  "key20": "2ACrCAZaQYqkQdMURJUmkMTVazDdmMHoPFuGuzfapPg6BRc96fsu6tRnLhZLJv3wNuapm1N516yqG1JegZ9pupkX",
  "key21": "37ZHv8g5dF4X15pBTbg97CfaGbf1E2AtA3iwWmNgzkZJzEJqPe3rUCEHDLBTUpSrTKeFjheL7vm1WiyzAcdjWri9",
  "key22": "3UceZe67AiEAjnKBVWieG4w9KX2Q76x9io63c7oRgdAmU5mMwCovFah6FDxr8R51j481Pca34RGbhb82hpSRCkfE",
  "key23": "4UgnzBJqjxrbwpZGEohMHYo34AjS1AUc6Hzksdozsae7VLNAi7n2shHc28RCK3sFXSuj5XrJ5fjFfmwWxnuayx4K",
  "key24": "2VzS7x6R2Nbh6Zrpbk88Yg6PkRpRhtoDzKTEwXELPWMuTcBRvTCg9stYmi6ba4BcEuycYEn11wtTL1KWbY5xJjVe",
  "key25": "PrAdeuRAJZfFHB4knWab712En347jB9N7UFRLAmDF9g63Mnu5RJHyN69R9y7cTfgXEmWyfZJsDLTGEEEY41uQdq",
  "key26": "4tpdRPfs4LRpWAQ9wbgW562y8uuMeDSUVQ6peM6nn5itqzQnJ1jUZtMaCDLqUyVyha6mGdTgKB82XY2iq3w99qoV",
  "key27": "3L5SRTVep94yxJSUfr3wpohtNoPfXWyRezVZSGi5Pm49JMkCaSZBYDc6GdvZ2kVJDYcPWb7UxDUZg4f1sfzJi3Gf",
  "key28": "36qbycaav5YH2o1qQKPUvJM87zyKhm8jjfBmuYyCwfaMi32x1keagru2W4UugN7JsP2TFFLGf4j144ZUEogmE7Ka",
  "key29": "2tM4KFjaxkkT2dAPKf65gfq42oDk2dczh87Ts8idSxsihuztQR3e66x1ev6cYaV2La9Xe4xbC5mYFfp8Dqghvo5M",
  "key30": "3LMEzcnC9k32UbkKnS1dvTAoXbhqJ3NXU6CFQMqPiPYXCyxjjybESpz4LktupMcDSjqG1cL1DcqcitZ6MPXDuvLD",
  "key31": "4wFn4ZoDdN5bLs2MP17Rmt4evcYPsUgymcuVs1NgJ8cSoER2Q47cXETmUNvQ4ARroQkXCUkfnWgTxw8f7wPUNYQ8",
  "key32": "5YDXAGuqqzja8docfZyM4mWSgP1PezwD63heor89hV7JCdm8Uj6szW7bmiXW135kHPzW5Ea5EPcDMYp2vkHTyeP5",
  "key33": "4ZmTDYmJP8yLcyz3yDTsGLTWNja6A4NNAuu7c5NVsHtwKDLdqLhUTWsJnfyx7iRTVMhPR9sdFLUBMwEjkuFVr1Sg",
  "key34": "ijAC2rfVTZX7pZJCa31iJVUTTAFaHDJN3yS9HyUQSYaDRTAHti5KnJgB6jbcuQkPHVFRewfGhxninwnUXSdemtD",
  "key35": "3rXsM6otzn6ZP9eUfBAJjsdPogNPMeWoGitxEUMoUu5rSvHHUQ3bxP65Ef625o3gaJWXpmYQoCeSFrp4zHYevVV4",
  "key36": "3rarbezGif4JXx31BVf5QfAyurXvGwoXMPwf5JTaMzJvGJSyfY8qgpmNmc8A3QkPFaGYvfjpLABd5SQPYnNen7An",
  "key37": "4zrEWbXtKypdd9ARqaGj9VA2YLK183hFXGHcgvy8DUykMJXAGxSTmKA3T1y1ptrGFLQCwqotATTfZEnEX5ZDMMLi",
  "key38": "38Q3yxTqRvdUv6rm14dK3s2AfPfW65Ab9SyzbffcYc3qT8zr8Jx7j5HmvLU55xRmRB2x5CDydQxRb8YD43aAqu9W",
  "key39": "tjwewZhB2krfVFghZ3o1WVTEuct7WMLCSUUcrUVM8gaxcn6Z4fGb5ZLN44NhxRZ4nAQo9cUjE19m2r3B9RTJryt",
  "key40": "2N49PeE2HmZdcyDqaUxE9FDmARYNVyxi5SKydXNmBCh8qYqhCMFw6qjvdiDQRxJ79pHEgpb5dKSNKg1Cki4fPHGB"
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
