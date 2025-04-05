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
    "hHkjTRkdX7gFg1NwZBskJSkwMbcsnNq6cmZXADetHdt8BvDxY72mR8oPu16SY3Ngx35p12pKX5aAW8SoY6Chqj6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kppaeyaPSqkE18HgYqdtLgfEtVUnADdALuyN8TkoPiv3imuQfEFUVM8rLgPSPuCLa6GjCZoeGA6mdCrvE3VYsxr",
  "key1": "245XfUV6stNDwc5yn51184bzahByK83AqwFLQDAXdLXrBhHbaicm5P229FZuTWCFrCBf59oziUJ4NtkodgjVk5Zg",
  "key2": "p2n3mLHH54SzBdZiP69uY23H9BwQ2PFh5FLV7WWA6dsUyg9e5YjxUB8ZGi6BEk7AUttZqbMiKLuHFbxbrH6hGDt",
  "key3": "3QnDQ6Nmg3vupN3RJGZ1GVfFSspxhLtMfFJGW4kN2RiWvKnqLkE9KwjVBwzYo7tXuVsypkiD8r999rKdpKxGxDPT",
  "key4": "5dnoJbJe1Z5mFhArck3CByThPYua4nxyJhGybYzb82rcXUKG8PqyoxqDcbWedDs7KXR4hZ7ByFdYjcvxB9o53u3V",
  "key5": "43giWHyHPBkftoMiEB9gdrg4rZq3yZtk7SFsjvr6xZb6Pv4XdrTamQPJp45tJADZvHx7HfgWezSgj2G9sXoF4WFv",
  "key6": "3SNwtLPp8FU3DXm9bkuVkoiUVebJT9nJ5vpBU24XubxnX7Ah9W2e9pjkaARaQtDMgAFk8FEE1GKZamwdTkbpjGM",
  "key7": "5p5SQYEK3AGxvqthieEHhuoLw5LjUKKzgiPt8Y8EyUV1EGDGBbhZY8CK1b4whtM7egCKntUhMMFQVPDMwEu6ewnf",
  "key8": "375tKma9xQophLSgryBonCoqYTuDjuTmtWHRRTnZzT69duKEyzfVfsnVngY5ZAkkukfcs7P1Lo9jdHu9bps4TP1a",
  "key9": "3LAyx1u9QqfG4rBt2VvsEJcNcp1au7DJptdBxNL83cNRAnjLkrjzv9fyjf7ztpVLEmqByxigCgLKEgbaqJZ312R1",
  "key10": "5SHhWXFcCFmymRjZr84zWS13dCTfSXsiKrL9mpcB4F4gabL5Ady5TqxZatcGriycQDSyZc8snixaZd4F8mHoYXXs",
  "key11": "4xvGEGWmxT2FeS8VgWTXgv4MnuzfLS1VyivjMKQh8bMpC3aJ4qjeep6oWzvqYCJtLBv6GkLAtijjKdv1K5GmboEM",
  "key12": "zDznNxUyRdTy2JhehsHa2zYwaHUjBwc1KxmiTYTsRVvwchyR98qTbrddiqYLswfUHsuHSzZyzrkKQTpRTFsYyoB",
  "key13": "GyyE59VMC1RriL1463iPoq42bd7G8FPAtcoLXRpE6h1NKNsBLPwLgF96tA7air14CuzazqWt3ifcHjkE4mkasyv",
  "key14": "2pWmRXYbRKfM8aRZDAxLzyA6spYtrS1NnXcviDpF5mPv6yRJhbmMBh6RBanvg9UaAMYjnPtQF4RCJiNoQXf2spVo",
  "key15": "4exQuoWCyjJrVSM8eRjr4RxJ9pFajgSm4Yr4xnG16KzPXYB8QJ7FNzQYDSpBL7MZQBBCbYXdhRSwk6Aj2QcMmdie",
  "key16": "23Zms86MVcYP7iM2Y4Mbvc1YqrYWM5JXePa3WLioRbFxZpUxHESRH8Q1Ah9scHTpBd7pXvmuuuZKgSw7LHHZk6Br",
  "key17": "3DMA7sa9QHmAwESZF2mHSV7LUkkLPovhaQ19rbK1yZosV22eTAEx4QWzujmwK545RGWWwmQvFkypamLYFPnyN5xP",
  "key18": "3DcZZavzSqHAFmMBu9Zzmv3gmjiX2uJSRpY6gcM2BP5JtJs8fe2U3wvBo2CaGu8nzCnHZdrPumHhgjsYP13PbmYA",
  "key19": "5HnFFbctHp3rmzz2ApynMUPPdrLLQ3k1Y1uSC2MEdauxeuypJsXV3UZpa9hABhhRACE3zjFiM2Q4ZNjiuf2GmYsh",
  "key20": "62mPqV3U51NPdaDUbRnnsCsR5gVB4LMhautwciGJwqPwxgsQPUgTEGwUnZjLN6hd8UV2oMrpWoZi9TDjZB69N8AZ",
  "key21": "3aay37jybDXXvj2UhZR77dpjbYxf1PNDcJz1UeuKE9jTf4NtqRNK2PXJyJB6Nw97JGhD1iUouKcfAGQ8UuZ92CUt",
  "key22": "4MdfXPLFXmNGPjKUw7NCrZ1Wqp7J6Ywi1udFev9DiboDyo93a5kQD1UXwrTmBrWMDwKzDabUbCJwXT1XhZceMSQM",
  "key23": "5qjufnTJHXoiKyYZQ9PHmo6Q5rAPdnpfWX6HZL6SP45XzvdnqPPTu4smVguW4AGcCkPZhettXV2Fq5zGbxSEGjG7",
  "key24": "3G7cggBZdVxkiHy99KcoT8MFyZymjeRSKpE3tA86m4RdsvEhiMtamyrrXc89tHx3qpUQNQNuekV7vWSz5WjhckzT",
  "key25": "5BBXZt6eDPwnEzyzF5NoPpVPx2xeFMFurpG5sgxMqL9EXdbhNeXBap7pwu2D6ruA2D3jh7WNqjrGhB9h1nbYfxX1",
  "key26": "5reQo6NYJ2fdpJoHuLXhfQA7come6k5gr1yS9fTcus1Q7KqqYQqKeHKUu3kGjnQpTvN2PsmHm77jeHD3xVcDSkSS",
  "key27": "4RTsVcpoGTGhmLS99oyGxwhUp7sojJubpJQCMiEHxy9R59xjwNan7X1sLVzEeQHtok59sv1hnLeRcS5eaXNP8RqY",
  "key28": "MHczwVHAPAHSQVCjywhtpUy8zyp8gz2fqYvBEwCGhy8uChHbZ3m9KY5nB3jewtypezW8WQKBNb8buP2HwxcFqQu",
  "key29": "5mui6kxP8smKrVY1hREye1zaVWntZLgR3iVuZ3E4gR9s6bMCbX1A7152vp2qSMrAEPzk2kvkHrCYrKik1Xd6JjNc",
  "key30": "2MUrgz2Kez24Eqjw3Y7C3RcpK1Gj5HMj5JHwYcxKP23rSqBYR5pMTcDD5bh77ax9J7PAbBDkUSSHm5YTBJk5xKxz",
  "key31": "5waJ7Hp6Y6HNDAEAS44wb6hnD9BJFhoQDXUnqYroXQxGob5NAKTx6Huh17AhiRwercyqCLazhiN4b9Xj5LvH43mL",
  "key32": "jfdzSiu8kERKAs2RGSb3FzVZgBb67rPmEPLPJhMhFE8cnt62vgoFh6RPE5GQvn2gqJFT3rDKTogPq8MfGTgZcWz",
  "key33": "2NiBtxVgxsTygc487RzBcnHo5czWfaQgcLAZYK9ck9R1DQzqm9jUojypZFhuoQDVS74MCHAxHz3gPTX74GRpVkcF",
  "key34": "3TjDSjivsjELy9ZAmAQ9LFWn2k7qcMruRkzvSRQKHZkkyiDir4vi7HoxwN1RwEwkdgau1xGnBTUkxj4Ha2mMcsFd",
  "key35": "oXTtMnDQeNJf1gbPxob77SRqnKYpvz8hERBigLYkpBuvpP6ucHZX3unEkCrp2k8RpqPkxtqnwpGFrHf5cZgm1hc",
  "key36": "XGQLEVMyPZy1eYanE1VBcqbKT85uX6MBRrJxGgxdG83AWvxNZviWPiziCPq7TekYKQKsFZH1DRX7r7btgPaoe54",
  "key37": "2mr4Vefi1R4heSjTyBZ5WmX9wpj5yzWEraNavMm8KT6VnzfQeb41KBtwVqXnMcrYeyBo5zJu8QPnucwv7xkZnfjJ",
  "key38": "5tkw25hxTRiz92oymYEcS8ehLPBJsLrzyWLEMz6VBWKsbHtkkEwZSLpenRrXZscWNN6oQzG9HD5ksVYujWCXoREv",
  "key39": "2hmYEUaJTfuNZirikJyBjNWqC6o3ZDxaTRuPgmGJHxc1MnD6NczVSCcBz7E5MGodLKAnXetw7CrN6mEoQwkXstjq",
  "key40": "2AKKtri5g6pkAieNiaJVpcg23kkfqGrPUhJhngZ1Zr8gZTXFx9hB5LyEpBiSCkqpF646AVRuUxUu5uy3v2R4VdJR",
  "key41": "2KJgoxLBw7YYwxbYRyQP19WceHEPCGgsNrrm2gvaXwaXaL9WsWBMf1ndGHEeFw65q32kMGqNHyQkHKDshGgECaHg",
  "key42": "23dqHUQKzeFPih5b1uBDbcESaCh1e1ngPnn6Dct2P5Z7dmJQULSWKmepPH6xXLF3SoWizqY9SgWjbxZt8bjjwGUa",
  "key43": "2UFuZq4P6ymmpTU1pLYWiV2pQ4nEHh4vRX1doropP8bhDBeDsomMAABWQ4DnCohVaZ6pYThbGBo8L5uDfGhPkUsN",
  "key44": "5pdLiqajkqyEaEBYjDW6amVn6Zks9zF5vZhmTx6tnAMhYvMrvAqMY6pQ5bzDSB1rD4wzoEE41EjqSZjXg9vsnjWX",
  "key45": "4oaCkCwy8NmwHe6Bs5VwuKnJYQXWM3qaaFgWq7LEu2u8Pqnz4nDRDtbzH6mLiKMHz9FSspDWPZYhubU22FDdHwY2",
  "key46": "54ARayKsqcsjoaR5grLMUfvhRqJG69pJMmycqUqiMnYwZc6hAH93HB8EB7rJzGGJ8ftu3AJwyJnLKvzfnMw8rHmZ",
  "key47": "zCnopoFRstoNLUSnafroBJKSQRG5w7NC7YjtezsvuNsRNWEqPhXUzTPpx3njYd9BeH2bUzJF4dQQXJVRa5GzVW7",
  "key48": "4LHGDasjNiqwXcgQS9BSsZSWXfcjRHHBsGYjrnicrp7hDk5KqfVM6mR2QbPNJrP9j2wQRs5z7CtwWvht1AuN2ieK"
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
