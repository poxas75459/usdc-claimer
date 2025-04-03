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
    "hfrCd7Gc5baPDRpeyouR1Y9BpqUmSn95a3tTMR1kP45Mfn6akmLK24hNQMNxD2VdKU9rX1JRSGH78oUuRRrL1kG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aSjLxXgsLS4jiKmJX96mjdy1SzbfimwSqj2xnfn3xvxm3oVDe6oWBiquaEozzFhAw6LMrvh4tX7MRaj3o2QDs69",
  "key1": "429NaJ924SexcZK7uKzTQvGNGTRGbRireoKaqCpcGRLJNKRiXWWpSdL5CuP4g7f3hoNycSGQYA2qC7LZmMsB5kHE",
  "key2": "byEUYyL6TPo5sDQXWQUubsmTrWRoQdhKQgZvYTJyQvYYn9A1187apyJrPLweHVCPtPAcVbwTcWu95ho7jKnkonT",
  "key3": "4NfLcQDNSTvRtjuxdA1KnDkSePrnwG4JWeVzckpmeKE9LvcGZVwQuudmf9WNnX9B37MYehYdsm7YiV9dHi2h9tEt",
  "key4": "3Yyaw2B2ZPAynENY1F8SfdSwqp4t6ntMqqq5JGknuVDq17mcCSQ3KfHhYM4kap22bUZGfcpofzAn1cqFUeuC9Aib",
  "key5": "2CjxV1igJ93vkcrKmATb1RGURotMzVtRSsvHNnJQj694TnyfiAse2gmLc7Jrf9qbdabv64WGNBuEkRs7d2iSceD7",
  "key6": "3oZzxPguPeBKVaafgY8RfipMeJc33QZW1o68w7aGY3nmiAz5S8wv5hmrYHHESuYcKjnw4xpLxq6Ccfiafy1gRFCY",
  "key7": "2jbKarENfctjrbAksYiJjnq7JkPRHsMDLc3xHcpzzkGWppkpve42hPog2Z3cdYGVFDuUf4TKqGpD6QG24SRFgein",
  "key8": "QHCrf5eAM7bzfTnTxxX4BiUfasufcTinZTg6tm2J3EuoPJe69mUa4JC4eTscmxUjgU6uX93brh6SkVXsL1W6cUs",
  "key9": "CkSTsw4gUUtvrk72YUXafkPiJLQkfhsu9A5skhq2Anj6vLLx7KRgQyfqZ5EmqGtpfJjypshFKZMuijScEubB7y7",
  "key10": "48uooKbf18QKY2CiDjZzmBySPYTK3qH7357Vxns4mMPgXmQrVqqSGv4bQ1y4PQc5Bzvj9xsyn4aNWXfKaNZ29jaQ",
  "key11": "34m9iaKBH27HBrHyhz1X9vi41qxyendMAjsZg8eM14dZUcvP8aXvNYeLfqWw2bHLR6jGMaconxPVdnufB2Yk8zmg",
  "key12": "dmNZB53mXunZG3uiR7dqa5H6mWsBA8TMhMBCukwRmbrzBk4Vge5ZausFTBf2kBuALQpURnMwVvg4GUt2BU6SzeK",
  "key13": "sUwwG9jN4AKRTzLCFex7dZPaRXRUVJ7VLuxBiCCH9w35EGMd8xZ1MwSac3Qwp8HiyndPXyee3yAeZ2Ku2iaQRxP",
  "key14": "3ANPmcSXsDiyZbaANh8mRUbn2VdfpSgLLvWPEs35zQSkwui7p7hscXcYeuoDGq55WRZZNhfSZVV6Fi7tT5AYc4p8",
  "key15": "JbEDHorohgcNtjbrAvYEmno1CFiqZzgK8WCqwBEkthZuj6hFLTCtaG7gE8T3KENinhLpUsA6CMfCNR94AENR56U",
  "key16": "A2DM58jELz1rZoPnzZuUzhWGEiizrW66XZXctg7CSeWPbKVeAx1tuDJQ76hb5zyuB7wRRg4pGFkPeF6W8cEkumA",
  "key17": "4WtdUPwMuiFATyfHPDHW4KvoHdjEjSfSqLEdJpDXACmhUvsbdASKtCfqU6UXYRPTgDyk6gVD5uSwi42pBrhcQVa",
  "key18": "5XnZVY6T6aw8djdHLjBSeaT9brytuziMR64bEkVRVC3JZLyEWospkUKcGanNcwpKKJw9t7tC5Mw5BTWvg1NeCLkQ",
  "key19": "22iAtE98yT4oWuDYdWTVq3yE4XsaKX3CCZ9gXa4HP5PkBnRKRpYa9wiVyEPRLCyN9gztXv3zujqLCtRvTzRLU6Ny",
  "key20": "3NgGehgD7c3cT7adpGCnaL8sLPjTWVKRhgST3b4X3hDVXoZmZU7mrvKvqSKHk2y7LJqVhWubdXk6vpKq36fBB7Wf",
  "key21": "21K7ExMHpgfA7GCHJAQT6eA5vdMqQFXLeg5MD3LACAVqhJKn3RVnY7mQeeQgaTvFsJkseWrPvcd5xpUYau4sBZAC",
  "key22": "4cXUHpfF6y9YZcnhKz46aevhmWiVfQENGm43RSTwHMxPDdLpGcb7WzsaumM7dWbGdJRad67CofBX8DvsEQZtxqzc",
  "key23": "21CusdjCq7qb5RAQRzjCKiPnKcyiA5YVjmrntBS57EEzcaSqkvK1jBmAgVdcYrqLda9sGRTZcC6n3WgmoPMVkuQB",
  "key24": "ixk2YwC7UrVhmxfeSssvgQM4RebuTa4tiqYEHyQkehMESmQHnw1wFDz7YdtpTMg9bE4pDzur5FjdsezPFLdLf6d",
  "key25": "2XDsGaYYtueLP9jnCaMqY15WbEaNyRwFzSBB5WpUGErEL5cE12fTd73nEPpb49c17p5aAZ9YNWfqtmTNV1z2aCws",
  "key26": "3KWitntEeyLY5cyVeCcGwH7tTMNCK5544pXizGa5bcE17tdXm2Zi49RovWJL3mrXkhXLn7VPKiK5GmW6NWca6CfS",
  "key27": "65mmSt5VuVCE8qziBQApLFLFe9EwcAsfSA16JpjwbQDM3wn2CPfSZzVkLBbmSbDHw7v3tPWEDGV8oCBVV9kYPGTA",
  "key28": "2cyxh1L5BZRSmifQmwEXRimShQJJ1KmRLiy9AwMV6UL7uqEcB5s9HTDtZ2x1CrDYL2pgK3ahHPFnPr4i9hZS2nZG",
  "key29": "4s35Kk6U2ifWdaYbXBZTZfiS3APfoewrYCwW5tDEb13jfiTnKawxjYwc5GbEHXdrS7Asswn8DeEDZNBs2DYyB28Z",
  "key30": "kAzshX8xFu7UKVtJaxbQP79aoF756qkRa6XDDDii3mRHGBEz6wb5HW3HZxruqMQbFMozYxg5as9ZQeqCwHUts3N",
  "key31": "4d1vxNpuWjTgZTso1vrWKZA6L2S8LKVn2XrC6noV75KrQyS5ggwnxDPhd1xTFTMcsHu7rzsTFkTVTpVi1JdRYYDM",
  "key32": "35R5JACeTxpNk1Jxhgn1UwHDAiRFaZ6AVAG4Zp7ZJx44Fm3tUiQM9rPxUzqmcEorTX7dXoFbE4wBMEP6tc46pt9v",
  "key33": "kqcyPRnfdZvDf6U7GHBByUS83f15YTb93XHNR2xApBixTKiDn6bMvs6MHRL2rQyxKxos9U3fa1ewCyjdXTTd498",
  "key34": "5Qn73ymhCvVLa57Y3D4xswjZ5UuJkaML5QBcJq5oZ2a5MfTY239Df9YZ8BFHmHnXwtN6xh7vWXpGZZkAHwqvRJd2",
  "key35": "1dMzjppnVtfZCH9wZ1SgcdYz6TADkyhvxuvC9YPJrwb6abdk5J2MxgDBqPoua9kgHa1h3QYmFX5xrp7gE37fUeJ",
  "key36": "4Y87SxqE6joQL3ZxUki893tvoovapwnbEeisGXkPqm8tDyNVaP1dJk8PKa9NFp21urMhi1s9okxYYfQHK2rQiPGG",
  "key37": "3qU1iRkoAasFfLom9MHccFq7mmebb94EsoSk646XuX3jDXRL1MxXnQsvEzQerq4ns7gq1uFg4xfu1wtMGqoX3rg3",
  "key38": "ocQwGsMaWW1WAteULUrRXd52Vm28TjR3xTKW9nYBcuRsfkFAXEtBcoGZZGwTeaMh7QQHLzp9XdCLkBGQZ83MsEn",
  "key39": "QvJVAA53GhUXPdyQiJqS5G8RGAHmA2gBcN9McXheYqqmR9Z6wdKW6kYzaSrZZ6HRYievshSwGB4SPEkwsRvnyra",
  "key40": "4WFQJwpbTnH9aBnaDrsxRUmr7QKGJyxnDnY6Js8EjA95Ss12aHu6FEcYfur4MomLnKmcxBHEPhn2rvu3sweBzjkv",
  "key41": "3GxipTehsTbBerqoaTNLGap2frA9Y6PS5kbXfbwUsF6bbKfLGPPMAz9RcnvHzdvmun8VyY8GzfCQe3LAcKscggYa"
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
