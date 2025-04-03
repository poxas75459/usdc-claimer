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
    "5EeQA9Rzi1wVsRxDJWbDQ62DCn5PZbHQcAJs5YFUxn8sX6kHusGmrUqt2Bs6ZyiTht5znREE5E1dF4mg9kg22eCH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rkuyyyXVvK5aGzL5zgP3h277PicqfcUqN7HZLdan33iQ3di6xvUM5HC6XdsfDACJCG9FtFsuBsqGWDsBNzpBXfU",
  "key1": "42CEFor6JimJGB1MZD1Fvx1NxrLBbL6F5fu6VcWvveGdbNQ5FumVtKURoV8JTjHrUj5U5wZApUPdQ2kcLGLJSNfZ",
  "key2": "3oj6qv1GTv5iZSVdYeaWkVwurB4826GS2AcG2YRihhpGQf6fYp367YTrXSgW3jB6ZmtHerummRXqmAA976EGNXfg",
  "key3": "2Ax2iGUBC37bnwQhCBTeT82JEsbwFaaynBgmsMkd7sqKg4HM72jsRqQER3WQuQiL8h4RFBJNLQTZSxDvQqAsek3D",
  "key4": "5AErreCypRePAR7WPopmAnmeTPPdJwjBwWPgaoBsrNPdPHsVpLhpDAm2ywNJsSRnWReu877tVJ1YwvDzUSSWkBPr",
  "key5": "Hzymfc7EaMQBqNrhjdUHr2xGUjM1uWGdF4MyUJ4Updk5abCuiomiUwsiPCg25UvfR5SPQ3yvKv3VUdSg8vXuixK",
  "key6": "5vuPjYrCDcLGzTV9jZmSkoVLbPCHNr8YVypwnXCoMY4YyDenz3Jp87NdtSYmBWqxTLHa71MB2wA48oWCFUkJ29wc",
  "key7": "55FfQnhN7M1jCqroYRX8uLrJL56hJtTp8Jwa3RTPkGWpRDNNTL5HKfq2bizY1whubgSdxcz4ND4e1WMTz5KdpRnH",
  "key8": "4EVcVQwwbeqfWsR3emG2VnAVhVnbRDHp1w44VJv79Jepd85tg9pUSkMA2oRhvo8SK8PXHTTfMN4DxChvBgEq7SLh",
  "key9": "37yaP5zsmGiSHn9DWXDvdwkVoRSLobDsJWQAdZT61AQZbiQnpkYX2YARiajdYU9TSbDH8VbMMmB2GRAwi5hmqimA",
  "key10": "4cdeHFKfDzgoiAWWs2idohV34DKS7meSusBEvtWxLyZcaVrweZFxLDYEWBeJns3z1US2j8cgCwktLbehL5EvTFVT",
  "key11": "2SuSWXDhPCKEhn5KrTRxfUQ7eCRs51Xwj4Va1stGwSRzum2sTZTA5AoE2QZvNN1AeQV6JuzXfyegXNne47cHxCou",
  "key12": "3Y1atTsnTwuuzrRn1fxMCM69kcnCuEPECfhcxNGaXgvdp44DowQ2ANfgcCiJbc8CHP4BcU9HMgexrQtYhkaR9v2L",
  "key13": "3GtKh4gcUYkyko2VmasfCKUE7frepeggSY9h1QmVe7Fns1eCT2zHAs1p8N4GEcXcA2sAi82CYaRaN1NJS2cJpck8",
  "key14": "3g8qrnBy2B9TH6RNaRtEVkHgR5fZBSB6ePpTLVJUPEkB8EKSXvvUFLsv3LiaVAF6RpvGgXsvGaAdq1ULydtRr5x9",
  "key15": "36he8Fyt2QjB58r5mT8CkWLiLxaKAdtpWQDGKAKf7MAxHDfviZVdwJ9iwqNJMKaYLFSYzPoU72tZA3wm9CFS3F43",
  "key16": "4NfN4niQ1sfFFK53UBARmCLL5c19V1SWH5p4h2Xo9KM1GjhoCHH2Beq7tHN4RvJdrwVGBBvNVziT1E29JoASDy2n",
  "key17": "4K9niUhqEtv5NTbN57wdSgNX69Nb4CTrPeTSSZPNWgbzKzFWAjM8yPMzBDhT2vi8HGTrt3goSzYy4wRQXZ9QyuiL",
  "key18": "33NU3MBsWmmR44L8JR3ZbfhwUD1DRgZqJk18AJD4pyommVfGfa6Km6FDMcGP7SxnBragEM4N8yqrNcunNonxaGhg",
  "key19": "4ATrzWZaBDHCHxZFpTcueJ5NXysZZFHSsqJqzfP992CLaJ84ydHCmZPfDPmJguZVEH2eGqdMFU6FvP9idamEhgU3",
  "key20": "49SkFTmfa5RXfPF5kGu9J5h67r2M2ohds4qSuvVyZJBS9ynLP5CtjwHFjqXXmjBRszjFYaT13mQvZyysfRNVwvTA",
  "key21": "RtTPTKLPweShxSPGpnHcY7Bo5mbCQqNjog2XyQoo4UUnzXPVHX1s8fcUgh5FF7UDQteRDT2gR4iGNVH4GzTMCE5",
  "key22": "Ym9xsmHd7VyVFFPjwFmSxJNeLHGEvvEDUGmzZwwWxQn844bGkMTAnHf8zWRYCSbv31nrPGQhdpa5YKrRoTsJmku",
  "key23": "4mCFG4NKFQaStkHPHDRc2iNhm8fzN8ufrhpPjXFnZzXonqD7JeW9RABDYuCPP2yQXhdo6cfFdmkVCwFpo3zcJXn8",
  "key24": "4iR1Zi5BSKWcSmH2eS64cscnihorykChgoiDSyi214R5ptPztWMDQAcrFEFGDBqBxtYc4cQxSvMWmSv1Nc7cy5df"
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
