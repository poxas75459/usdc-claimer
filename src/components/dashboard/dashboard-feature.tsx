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
    "39rdx3V1s97QsiKjiAEkht9eaWZoyWkiSsoXVPpGQ6WmNAa6B435Qgt4dQBmCAdCVQq62oMoqAh96XuimKTANv35"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wwh8nPmzjrJV6EsKCjUvWVfEdoEdXVV4ksZgbWnxyUT29X6KYmLTUCCGQ97yuqzA3azqzMobVchhbSn95RrFC7i",
  "key1": "7QhdGWSA4nfF32st8UExvCz9yzntMCTHV9EfLUhBmdMruiQqbciMGbDp45KHChGK2zif8QgDrgehf96uVbFWds2",
  "key2": "4GykMK5AjLtCnZ2QXi4sAapBkD4WChm1oDn43eb6BLQiUmNFZNcVMojsQ7RChRrBqmGK2jntTXQLhtVr6V3GXAwc",
  "key3": "2xe59ykARuJ8LHUPYxUaKxpLeYWBx61oAWw2asZCnF3kpE36y7bag8vSB7jTn8suRuNQAVN9XidsQpMrVJPtEHmz",
  "key4": "4BJMGe1yYHvEfmk6Cjsqd4jdY3ca2DnfKsRZy9gU3rVH9k5WwpRQUQK2iA4hUF5c9fXkyvUVo5dTzwKNdcaXAVGU",
  "key5": "2YJi2vU1A4dAbpf8FzctctL6Le6R5axGTmn2D5N1RBvMdLEYiaY1oJVF51uVcNZjwHyMPEwrfU1Vp9ekwjL94qH2",
  "key6": "4oyV7mhAhzk9cmy9MiW2jasbzoHadEe2LHLPByL5GBcUEMkVCk3nCEfKxK3owYDovek2SoF6aGDM6bxYh4MeQD9v",
  "key7": "3kEJxZh68T57bpQsr2yfi9naCXrM3s3Gj3Q4oGNtcuQk48ECaJJBCLudJuRotDTQSv7rszPDC89qVdq7SRHz1v2t",
  "key8": "3zsSYhZXafBzrcETwCgYjdx1FDoBJkme887kjraAx7kWeGD3GexExzB3a1XCg94iQ1AyZNgJL2mdqNVRXvRbCBwh",
  "key9": "4GV3oU5jFkhCHCx2XJwdiJ1yyEz7u45M1ULLhWi5RwRi7A4jbkMz1p7mL9UzZh6s3sAZ6FzsXoTSTPxsD6PVFUgN",
  "key10": "48xWFVZ6BwoQHfvRsuX2nE6hbbkwTr3FSygtP9Se1UZokbyZrbnUJVzvBaVkJA6oKwP9J6Fmswqzq7DUw74HuWWJ",
  "key11": "52YGEVAZo5PeoVwADHmjFX5TmiH81fsNWLi9SYi5dUACXRwa6X9ikQijmGGPpr8BUq5hfHNLspRgZtx1pHJzPoFS",
  "key12": "3h3mgzBkWt82FEZCqYQy7oSXLSiHTgmisi6s3htNy59NzzLdMj86b4T5xUomULwu9iiDzkmocXA8GfbZKSZGXwVq",
  "key13": "2NHVEJE7oxpe7SJhyen14EQmGBzvp13GfW7FxKXNo94cweLfL1Sy8rMtgutxGAYFsTepWcrEDbk7zd6ebx67PaqU",
  "key14": "2Uju1GLYSXC6S2qGMYLh2a6yuzxxUTKvxjqsRe2WVgqXP9hAtPY6P8BkUTMmnZAEwdXNmPdBnF44da7jDYL2J4na",
  "key15": "257SKatZfrajBbxEiQTTVsJwVVmXRNea5Aph5t15iP1Cubu5NwRJDBtUwER6cTJoweYdtov5yrebGaX8vn9R6iSJ",
  "key16": "48Vb6c8YZGtthGTNvA7WoK9XwdmS2FSdkVHUC7GzLH8srMWxk4y5XrSJy8fLAdipoYpekdk7XkpT5cwNmJpPGSxY",
  "key17": "2kjkFqv9xQeJcfCJunB7HeQ5kPpegVnioQTe4wTBxBkHAWhQ4fCUfm1bMsw4c2CkEHJagTWyMHDwC6e6yjPeqR2T",
  "key18": "2tiZvgRwceTvZzofjPwRdfiyW5dhmGseDRzMgSnAeCs1oLoSx8WzQ9RuUznaMnCFoGr2AjV91Mtg3vDMhAKu6Viv",
  "key19": "2GCUKBzsdjM8tNfoBBjxfeJdvtRSAFKFwDFtRy5bSioSigmJqvB6fSN7uNYYiy8X5wHTGHuitW4U4UUjCfgYsMHL",
  "key20": "22twqCbUthbaTDa2XwMXvSbaWFis2ECBBLsvBmkKskZsVVMFTborJGhaeWXsSsJbiXsGfShr2Nffr9Dvtmy7Jjxk",
  "key21": "4Hp44NYeeFStRaJXR4wtVHKo3UVwWPYdnbytU8xMyvrKBqooY3ezbbcdUGdFVGWJnMwjSsDAX37VrhZGCTYFTxV7",
  "key22": "4TYVKzFJRw2m6EcHJ7CPeBsRtMhNr9AiQ6JFFSh8yhdCy82nJ1fBFqeuM8mGZ4Peho2YQHo1qJsEBA4JisR8Qcvr",
  "key23": "4WSoiftcBV6VgNsa1etmnkDT6tpCk5UY1MgPmoE5FCV54kgDMCYgYHGFvFSjgQMuwAgvEX178an7ASmfZ8F7CgL2",
  "key24": "2DtunPUnQJPLite2ZhUkH7E45BNJsNWVC8GYYxhgRtidYEvZ7D1EUpkBXyTpSzpgjsGppL42tDnGfejZaVtGoLNT",
  "key25": "RvKgiKCAJvgXrz2vB3cacJuhvvXgofxHw2iUcAABrjgdmJUXtA9y7ZnkeEjJ16jZbVsyTS6mfRbbGuHJzfnowDf",
  "key26": "34FWPj4VdpjDyYSdVzHmXrkW4TsrCE8dMeaYj2qYcC9z3ZJSqojf6KctQtmMGUvhU1kUvJZmMH6txEaTdaHLwzSz",
  "key27": "2V9H8aUxbSbsU4pwXkQypSuAJDtcDNZps4QB571fthNq6LdC3iJc5iu9ko4xEeWKQiPbcfXg3g3rvQENhXbpKU4o",
  "key28": "NKkKfNkcdMozDYkEmyFU35DndjHZEcVQ5SSXr2mnAqPn4czdvojC6v2m2YxxM8uNFzEroT5F9CnTiMJKFA9mFPL",
  "key29": "5CEj15eJ2XnQm5jd297Hz3WegMpFByW3EBHiPV5QncHJ1BTeeyc2PoDzA9rQMR1iGZvLKv8vqjrjvTH3S9sYGbzU",
  "key30": "xhhV1M7cGmEQvoGYUzg4REkZ5KCa2L8ZgkhwDUYuSSyfjRjHDtEC8ZXhMVkksuc7DoMF6MvCGXyvwGLnunmEaFN",
  "key31": "5itCSYaboNwKH3TH9wsR41kKcREMCPhKHEiMFQ9dDBCAnx5yUnSCAnLH733EN5EDjh8BvsCyDWeqWApS1nBTWYky",
  "key32": "5hcECu7SxG7hU1agWtFxpujdYEJvWHsY7h72MsEkXRKYV8Ut8v711Tr9sPjaoF63Avoz3hmZ7kRtLR2z9ogqfjY2",
  "key33": "tZ2nibENhzUCPxM1XMuX3JXun9K3LacKPocKRFYw5CDsZhDUK27uj1VkTsuwBjyKRNZrW13ri8CauoLizTbGFZg",
  "key34": "4QQbyEhCpFdHEz2kuV21hEBamfKAmFboBh4AfPVdh5Ky77qsQVqtUosaaw3jSMp2wFMaerqUmnkKHTpLZqPguFsw",
  "key35": "2kcWY3vtFcyonZMMYyNELGYwqV5dL9zLUTbAXHAE8xDpxn6Bu5bG5jN1PXMwyjhudhLLeBrne2xakf84R2aEtsvQ",
  "key36": "48q6HV3c4me5nHJrv3cb4BTc88H758FmrG56rTQemyuqMPJ7y2To2hEmjK17x34oxcHuncvZHvowAiEy9f9ap6x4",
  "key37": "5eoJDXVky76AWq7Zkj45oK2MrwwD7hMcMoy9Va4JBoRyoUSM6Aqb1rFvQa2CR5tKVspqF3zbz4r2Kjr2WSUr5BET",
  "key38": "HsaMkcDeewkgpaM1xgfYQp2LgLvKuudhTkpdUTjxMYmgzCkYyx6cDtjxuJ2tGx57oQ4o3iq2yBy6T9E26PQWQoe",
  "key39": "5RRNmdxwBf4XLH7h83Htbm7SLU9D1xyHS33e8C5rLpL1mWRmncPSZDgnoJEZr2nndp4GSN9QYH3Jyp66zAgqSxnn",
  "key40": "2U2o6rcgdj6nrQJa44GH7D2pqB1ySPXrCrcRykTfg9wKA1HM1TztqHLDkwNSZGKs2PwX6K1usrCXRLCL8gHEJvpk",
  "key41": "5DcTF4PZ9EDF6jf4gkXj8Jzvzt2of663cJ9VroUUiWFBbRGWSaDCpeQRP5m1Yq1b5QqXdf1S4LgKkaGm6i5354kL",
  "key42": "5jaLkTszhV33ux9ro3E1zt2T323ikbjtusuarbWdq9FsqHpwk7miRHtEkRC5yoPEpQButgDyXukZKKGMWG1QiCE1",
  "key43": "t3nkryiKPcfQf4wL9ZuUwSJ52YvhGJ6753GcZGu31uxVEzCmXv5JkmRgeRnYQ1fcSG2WbYcG3KTYHUB5qkWMWop",
  "key44": "4uuhJwouauW32Wa1AT7XTVe5EGjvCxRYaXjvvGTW5zhVNP1n7RScbYh1vJQashxSxGZ7YXtrQBKejHtnZTDUm8Yb"
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
