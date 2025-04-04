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
    "t31iAKeBPi6vXcuZP7SDowqzxgiUrGg7YeVVud3c3G4rMRttq4sCh3irvmqDSj3G3G6ELeseKPPeFn1ERhSRYPk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QB4QPPANo4DBBYaRS5ts3f4WPJnHpdTfaAMYoktmR4gBZsquhAb4gRN6k83YNkRGa2sM3m5apRMKEjkpNrgbz6Y",
  "key1": "4EuUWmrBMwcmawPBr6psmQbTF489phzvjk8dwdAXFazJVVa26xBCbQHutn1LnZxmYJYQ1pseVjkwnCZ5ao7hR2tR",
  "key2": "2CfTjWxhzjiBG1sU1UK8YjTLSam1da79bGT2swRp5gvyoXAWniTSGxVEkqWyyUSqAYCZN95PzY4dF5VNwAApW5s6",
  "key3": "5PRpg6yAybEs1pmMRk2e5oZ4okT9A9voNzaACjokBJY1xAgScMWDFmuJtRxyZjLyUpGb7yyhFkSdxoF9avYUbeUe",
  "key4": "3815cCEBrdG72kwZTbSTg4GzRb5iM6y1R2KUJmhFnvreDLrhe85BnatsQrQySPeBHBLBsPzp1CW8SKAXG3KqzsZZ",
  "key5": "2UP1iKq7qDzbRTsmsYSWap16fWsyx91jRd3A2VQmihgmVPZ3BjhmCpTXj4GBE1G2uMZ3EfkqafLUDfANJAthdkcH",
  "key6": "3opHLceJC739xACxwZYRv5qPjxuvqHRcfybRTdbdE1hgZjNxU5Z9MvyzQKes47jz8zy4p2PBCwFtwunbDCDRjwMe",
  "key7": "2b8VirBaCJfyjVZjj6kTkYUD1xj3bKVMqhtjTL5p776jiezHjgjkFDpjkMYuDRsFf3ND7P3uZfG81JwpY1CWF1Vb",
  "key8": "2VqXL8vuK1ZmGm76zBYXkZNE1hhUWxF8q5NgSz68oNN27pPc5yVKVVhx3aHEQFn3RPg7rwefe922s93NPvM8yXXt",
  "key9": "4aq5Q4jzXyeSqqWwEd32XGTrvKvsRS4JT4X5frgHc1QydyenRc8hxtP9P4BxJG9XioEeVSdfFf7f6kxY37EBGx3i",
  "key10": "55LTxSdHrQTrtoowk2Af5pwsLw3zRMagM7vxCTzQB5kiPMTRtZxosVKcPPLhtJnp3RNfdkwgWpoYLazAuosbDiWD",
  "key11": "ivwMnjfJPtq975EhtjVP2VuRmSxy7YVQqVcVKB5c99KUybk7P71nLhm2etqMrgkueTf2z3p8HekcnQJUcsqFigq",
  "key12": "2uM26t4QkdoJtbnBdq25p82xqiXb75M6LWKgmSUsUaMPAxT7X2792nzkDhLByCg49p22wYPSdcSmBWeu4AVpGfA7",
  "key13": "4fX5AKY9ZiCGvaEn3ovxTKoKitJLvJDEgupUHzzAMVk2p6UAiuX68KZ14mzru9j43M774wMZJsMgnqPKDqeyuE1b",
  "key14": "DwVjVj5CeurYtJmVqeqEsKFDX3Sp534sNNwTPMhNFDyeHw4MF5q6uGH7ggjPNbTwjFLmdNegTAAFeGgThxW4edP",
  "key15": "5N4uJTDcpaKUVFVr3ThRbpPeigyQZrZGVtGrdXwBssxwhtbd66iJn6Bsg2CMJscFPxENDw4MgXcB93gJh2NbxKTu",
  "key16": "3i7DEV5wR3kyPMw3Cj5Kky2CACjtnddxWCAiDDJyyjK3HVqBrQHniwwYmKGR3HaVkgBZbHRJiY7wUA4qvNpzLAjU",
  "key17": "3CdtF8126HqyCAwjNBCR3PYxNybuwMV2ktRy1M2prh7zeNYSHMuaMiqsf9cVnqkJtEHPLqQidWLsqLPhF8MssiFp",
  "key18": "G8GvEMAYRdPuJxQroAiYoMJeKGtWynse73SgEuZWvm4kKRut7p26qngqRdasyEo51kzvLaeHMTzSo2vw4XdAUqA",
  "key19": "2ApEBaQ36MrHNR5u3GVzjfRwUCvXchBUBt38aAJP2g4NoHrLhntwYqSxpZy3kjFPHu8DZzjiUMNZegVRXrKNLRTR",
  "key20": "R694tdSCnT8y7Fk26zBsuspBYejBW1Y96WkDsm8Bsm1qFvpADsr139LiMae7b41C6PVHjaJGTdxvgDY2gbJvicC",
  "key21": "kNW1Topw8jFRboTbwEd38eCyAbkUEZwR1hqaQbGJceG28hkLkbj1T2GyZdJ6H7L1wHKRhqEjVgXNVNTf8DV1Si5",
  "key22": "4TYiwDiW98N7WR6ffGnhrHrwJRJSHjQEjRcYudi6HUK7N4qH2fjKwDMDDLdR3yNJ5YLVsCKsrQQCpapvh3mDMULH",
  "key23": "5L6UDr6bh8CrLPtABANqmgoKkqvCvsM9rzTAYJMxtcM2GsDK2wkx8RTDXE5ucq3JA2R6VGfuChVwgFAcmEhcbskG",
  "key24": "31LYRC1NhXAr25xDqPF5oc845sod63gmtX4LLCUJceyhB2AKwBzFFrfSKjyQTSJUbE9rf9e19t6Nxs1a5HSN6nNX",
  "key25": "3nUYjdRpKTY6CjrFQzqa3i5y9BYbQQVcJT76BebteohJX8QSJ4bkS4earGUsX5uRZzMnx2g9AB2BXQsFd6U6UCHH",
  "key26": "3RppvR2KfrSj6HuYMtg9RTnBCbhbEP9ULgiPnNnypWPXK38dxqfNtuVDUT7sz6haNHR4mmBV1LbCDmdV34nKCVWv",
  "key27": "5AgX4bZErYm4QtEPqxCtKiiSTme4AFmapD8XFRrQgPDN11WUTiPMcsVCSLQbVSE5UpFFNBmx5eFFM8X135dMeigA",
  "key28": "21CqNbi8HoDALzqrRFnm2cPUHDfVvre9XbJx85uYhc99cJEY6nordwx7nDZC6SpXzEKEaPYrHJDRcBxENhCCPHyA",
  "key29": "o6tMVAUJTVfRu6cWPrYbv9QbH2uhduNs1wLc5buiafSa3WaZPTX7rBd14DzwatUqqQdGtEvSjFMVvD35eFsZZRo"
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
