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
    "2vAZF6hxypnmd4EmZUPtpZJPDjekLXRvqW2ASAFA2z7qmJEA3XnwjscfTNxX3L2Gbjskupvn6R6LHep3kQV3xJtb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u9RxfqFZiDvV4VW3EKVmKP9MjfbAsV7soJSGuL6sTdR34BYkw7j69myVavsWRF2vL5RHWxYsFYkPVwXapM7yLjd",
  "key1": "5xyBTuZaZzUWnMjLF8SYBywbcCdR2nyGjCFs4QZ8U1qJajqdt6AmknWTeNEZov6pcLPFnXua1Woo4WMcU84isZPK",
  "key2": "5YG1Y5Y524KAdHLTmfJHJKeFjrjfQDCHVjQMtijkAXYuRrsENFVjwmmJvwEeLD1B1dm7mZVWFbxeahkAXx7ymoLF",
  "key3": "67BiEzcUYg9477pShkdtScmeK9uXp5NnW3p6mwNhJ8hPndXbwWeyECLDAL1wjWFnxbJFnBMS2z8P6HyoBR7cAnuE",
  "key4": "4zcvLbCxca52JQnzQaBh5ZZPU7pYnu5k4AgfSyowPrShqQ1D82oT9HoCnTLmBkpPWuN3zFHBNQPHWFXYWmLqNcum",
  "key5": "32pkkkpLBHrLBiAk7L2FxW4GQedD2n3cSCtfBy2DvLggkZ6xz8h28znzugEHrSnm35Xe2LeqLnGajz8YynWE4m8u",
  "key6": "47GfxRBuM1Ph2VcvpgxEdFDP2peUWns3Fxunm79ptY3D31V3w7UzF918BECifui9PFMauxUZmiHQeVaz4GUnpSi6",
  "key7": "5rUT5bhApRXapcLkCuvfXp4gWSKBT34TSJ9UuoGrHNcZA9XdHbCXqTpRw52iNcGUwCLWaBBqp8YcqpvYuzHUrm4e",
  "key8": "3hhqC6d8FHzypHfb3ET1rt1d7Nu82rFVjpj99rr88Ekqjrfc8aX7C2b4jKRucd6x5N7QnG2vWvYnojza5dxhn63f",
  "key9": "4j4zpJy9T9WNsaZVk4mFrqJBcQNWjZWn9Tggzd8nA6Gb48538YQvB21Uqc1citgVyEPSi3eWU95iiPz7VgtutS7L",
  "key10": "3psVUbKazwXFCaLXht4eMc1tneYmcXHBSUyrHGgEbQUqRfqQfWNrtb8AoRGVRQLoCGXeEBuu2SVqzbbirBNwVjTS",
  "key11": "3m2ALXWUSgLbQ7EnBrvdHG2wgLLbELRAtdkJLmP7R6rg3jpiHdNxTMwuhVCB1nH2n7UXnX1W6BhcASMURkSyEKBT",
  "key12": "3WpVY6QSGMWQdfqRvRwKribLJ3vaMUQV1ivgRKgHzGsHDcQ1H46K9Ga23qgyN78xoXiyhsNzUVpe19bfTfm91c7Z",
  "key13": "2AnygoGsXfqnJoHjkZuPr7WK7mRVPaaLo2Yp6K4aSBj8c3oDf4P2qymfjZy3R46H8eHinKnf33rCfCVshbQehBNq",
  "key14": "3AWvDkmVTH1SUw9Lhp3mKMfsrkN1nN8F6iZ68ef7TbkGWq3ohmxjBZMKzPsLCf3y5p2pYs5xgUpLKu5oVqBZK1oF",
  "key15": "ce6pZmkDTKQpsMNdqqKkq4rJrq6P311UgXznNyoUpGrJdS2rX2ca6LAwp1bGySXvscz9gAJLRZPH2Fkm1AerViW",
  "key16": "m3XrHZJLYr6dwkbMdm7ePZtP1Zdmk9erLGXKew8uT2cza7SAAjBuECEZoiVAQhyQR8Kb1B5AWnAcdaDoc1CRoUP",
  "key17": "2PBuSvdHJrZ3RucVTNxNjgvhx48q1WCLW2RXE3wNFHdPw6DiVe2cZoVE4GbATYWuC8V17Rf2ouQHxp5ucKkBqeq7",
  "key18": "4uXc9eGJvfMzTo5BGBDVXvtoM1hzJJ3pGmnys8SsrJSuv17U5JvEbNhDWwTv19s2gr38BfjXK3hCBZVg4wdaNYo5",
  "key19": "2Z4Yt4mGDhEJS5P3nHgGrf5Cers4CVBqXRREWbAaR7RfGW9gKR9Dmdmz9VYKUhGae9GQ8iVkEhy3nRe74FmzUnCR",
  "key20": "3DNRcRQuJ1LZRhJPUkDbxrvjDxSAufG7swk6j6f8hAMEYyasfhx798Sd9ph52XthhSdFj2vZgn85VwHJM5B75bCQ",
  "key21": "4JprZ9fSDxgHhqJktX2pigEtNEUbKkXC9S9GGKW6xJZcDjKgQVX8aJxZjfEXvwDisU7KUPXGa73LHt9dsvfjn2Rq",
  "key22": "4CRwXrVzfRGeycvE2bsr6ADZbLtrvHBZxX5n3WUP8PxKy6JVTY2pq9SF5Ui7NBUfLbNNfBJyTFhzDGdXq355Y6R",
  "key23": "zNbDNPK5utdxMR3hLyPuCEd1rVLKShpEvJ7ryfQ372KMUojTcVDwoVmn7sNEGjbkHw8DbWgXYhkZbsxSzXK38yY",
  "key24": "3kdK8v3XE64t89TZkX15NVhsasZTqu1v71XuzLGqNXPAWX2rEtGd3MoSVUjdYGXetNFcbi1QrAEdwCwg4vqhWck6",
  "key25": "4CmX7zRWM9a23DFsTQayUyvczgQEabuDdkWEuQFAut1ada8ktQTyxnChvvWTLFs33SrCk7Lm61eSqNYtH2J3az3A",
  "key26": "2XWVMsLKRURhabQAyaLTpSTTRTvcNkntSYzuyMShtbnwuZAc1n4QnVSqHtQ3vRpYu1owQULWSFAmtG16nJ94YtHS",
  "key27": "22mKCN2pq14127pATEScfoUuCiizG6ScX9DmwqVefaRQgrxd7zSRDXCkA1CCPvGzcXFaPN5xqsyL3eGBFt4PmDUs",
  "key28": "ja8gfneEo3smLETU9X7BqQtX4qNCXpbRc3hCaAJ7vn2Q3Yo8mxvXCmG8i9Sge888nxwH9VTWPXfN6NNn4SY2axd",
  "key29": "2AytQLdD8gCpFv1v85a6CbLiWeVLSamdkY1Jgxhs8orQPYhLShu3whNbR4Dem4SKDTJ7pjUDD5W5Z6we8BLWgm4a",
  "key30": "2rvfZEco4XuhHY5qVgF3EVgbFrQDAZ754gAA86d6xVjfbCWtutGnnrn7Watim7S9BW2ZiDVExG5LkfVjyPwuMPwM",
  "key31": "M68ugDNY8TkNQCdVRDLuKNv3z3GhqmLjwnQEzbdsXHz5D57zKkqYyudVytWmZpgHio4UnJqb3bbabYwF2gHzxJX",
  "key32": "2sxX9kQUWySv2yyZXvamBhZNgP5r4nHW8fS2u13VW6eFWw5K23taiQqcJKUb5VuPG8A761fSFWDof7GieYKWHMrb",
  "key33": "2pi5jCm7wFzPjdJ6fx5xjdyo83ytn1XuoRcRQVnvw4Ec4gGcMiz3iW4tQu1R7vPQpymmMAQ59ikWzJzqGgRHZz7B",
  "key34": "5NCLBZdFULVxx6zed83D83dLqW8MF8npsJER6E9WAW4SuVS6GvsrYkgwXjbQn7h7hFuT1RsaUCchYV8RwB8DM8B9",
  "key35": "LPFbZGVCUJ5JAMtaRhMkecVXtLnpaAGtRXfuvi9ATkT9VtBo7bxErPfadHWHCn3herMTeMCvWWXBwjY8iHtXs2r"
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
