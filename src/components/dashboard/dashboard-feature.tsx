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
    "2qi5AfoKEr9VUZcjsuJmHyJJV7eDp1c9CPPSsag6pSzjPuifXedcLSEFBA8ogGwRk3bJGYn6siAFVHi3onG6YRpb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Bhan8pCGvvspSZF6wGRLRRBtaMhuS4zguxBNcyqvHZhdczx3Jn6phyo36Ky5sfDGX1SoQAkP7TWGmmGYXtfFdgh",
  "key1": "46xYtw5cEKNm4DTivzQmhjihivbroa3bohLQVoQwYidrFq2gFHtk9YHnBXZRLQ82wi1PERHjbKZ7LMxRcwsuptDg",
  "key2": "5NnisZK3MZu97awrmh1CRorvW3hfbANCEovENEygSJNnaAdGzP6pUT9JXzC8Me67GxVuQtoWJuFQg8BXQj22rU3V",
  "key3": "4G2CBioARC6Sj7sJzgNtTrfT2iJvxa9gnXszfPMdn9BjHcQSpD64e8TmAme1uTC1bbeZNkUqzzFg4EH168xUEeib",
  "key4": "2ydEykA4auWqFRXW3UqmwjGGL3UH2wSGUQFbdmSffmTLM3ko18w9QXPpKWaK9LT3wngnRtrGknEc2VvVW9WULw4B",
  "key5": "2VxHjGDRv3RXxLqaR86LxcwXAPoxsGfdj7A54z4vcKgwt2dcicnquitCYRTTfvxf8swYXBPry9yRtem56m36ENZ9",
  "key6": "HBioRMiYdF7KFQ6EZWWpYNqz5Pw8Twf8Khc3dR6NAKVjSUegzxXoJpNs8gApw3zNWxAeX7VN1BYVuXuVdae3kmK",
  "key7": "26xdAGDNsB8gTmTtkxp4ZK7fsd78CfVGus4vTfV4GPw9MbFFSVEaFwxnoLrR46xZ9vVqwTzhM7XPBsKzz447mtB2",
  "key8": "3LZkebiJJJGZ5KJNJUWjBxy6kHezBqbeX1eQFwBGaJPuinz7zoYt6WcWxemPEjkvspCFq5qfyxVCS1VRXGLpETXV",
  "key9": "2eWPJaYh3brjWyjWcNxEMyuUtKEYdtqnjQgo3vwewytPY3ySsDvB5buNKvTntQixsCNCstsPq9Z2MBwdhhEkmX5U",
  "key10": "2XfWPDnH2WdDJFAfBZri5uaVeW5aJhPeupE4zcEjXm46uBzFkarYMWsXu7iYkKACbw8pGuZtPbXfDEZ4ZbZpYs95",
  "key11": "29t4jzLTLc2jC9BiYH6raetdHTpW4bkgY6xWexNowpi75jRf5cATMBYMfAMxFRnaCjUMiu4kausa4F4uvGczwNDe",
  "key12": "5A7TUgggkzY4B8JAnRoG5RxrgqemGsquk9jLizY4zTU15kvxKr4iNTztdCq1hoAb14JZbV44TCeWE5MdVgw5kxFR",
  "key13": "5S134ntGP7NykWpwWC9VKx4JujmKhmJ86QasRqFLhZaNis3n3TPb4jR6DfJaqvS92D7B8otN4pUy4snHcni1HfCk",
  "key14": "3u2q61nuZQk58zGdXDikLu9qY78feH994onwTLNw58BeAMzD6CtcLSTz51HpXoihegMvQTMYH329rqRcjnzwGLtA",
  "key15": "5FG1LLnstFGtdymk15LU6Bh2ADbFPrhdtj3gx9uFTz7TAQ6mfFChcNL9WeiSavyfQXwW6BGMnMCMxingCjU6hKRD",
  "key16": "4URJsZv8tsD1VrRKVAFYxRfzqvzTdVEUGCsHfutDseYsxGiBoi9WkzDEf1TJZdcL7NxuTExzD3hxjKGmSRMVQmyY",
  "key17": "2se8JmSLEvuQPLNfWG8Fi6X3Bbad5mYhczg8nxFe6V1rDL5hLHvVcgkBMpuPCVVVQ46hkYqMPp8SdR6vzhRVFKgx",
  "key18": "5w9zPB7Porysf17fEJUpwzuciYPSrdAHsAp85DmY36h2Uo6xRBMuEYqxjt1YNSDnPDmi96VzbaUkfRioxJM1HnZr",
  "key19": "4irG5hSS6KgNVzdpsTJ7DBkkauvpW3aAt6XQkUJhm14LedXaZbVDVqLZ8Tkpc8RQjMMBPwE91qbweBqGz8QaZTru",
  "key20": "4oP5pvMiEC6hKgEuYdaYLgN3HasZ9BLpqwYUXwH8RtC3tSPjmaWhokmyJqy5EshqBCMTPhBiBGfsZLa2Z5Ee9td9",
  "key21": "5LsHcKPQ67BGErJBfHg2RCS62KKcxnmXfigkSLtiyAHLn4mfKRBD7sHBcSJkvMTVRTXJZ73V4kLFVS13iSmZ7RbY",
  "key22": "41WniRYJomnXjqU4EXrdEVx9Pu6HFf83vvaJKBtxhwKsXkd7jzR11U54EQPpFc7TeyyebGepXH5bQRkTe8KNchYe",
  "key23": "4xtESyACTunLGAbvjeJKKVHnKNeqkztVUk4UDmjH7YYi6sTN3zMX563Q1sgP1dw2bFXUgu6H41pPX5nznwoZAK3S",
  "key24": "zB4Gin6ePmLKpbLhnknGsZwXtKfdzM44Y82RRWxVqGQAZm3qomv9uTnDYpv1sX5jqvBJwv8LadR2husmVfm62Bf",
  "key25": "2xRittyc4jzjYPi53fFp122eNzy5CBbnTsaHh7BLqrS57AHTfo38wXe1Xqvxrenvk2hsa5pBVPLHmv2PaXzSeRnX",
  "key26": "Gik9FLeA43Jid56hsiNao6JhZhEW3pKCAqZDE8yEFLQqViYdLibT44YPziaczTrkuu2NQqxpwVE7GFSWhQ13hBU",
  "key27": "5vS1UqaRjbQBMVf69BXuVHsTL5U6fJ627tB9ddm8166Mtoj8dexhN8vKfXiBUbpahR23TgXFq96AQa2RjFZaNKwU",
  "key28": "37cWg7iFQ2sGevXXhUkqebVmFYXFPargrNvNLw1ZGQva6nhsDsJM29Pp5fYRRZ24oP3wEyd5C45Pcgj8iLJv27a5",
  "key29": "2XDFWnDZaBkkibC3CCzgr3gR71CbewAAEYKfSimDcjskVNFEQpV9QVCAraSVcTH4ynoPnvhpDafUKFNHsNuEFEF1",
  "key30": "283YqyKR3fbqJhnMiuAwjCBmPhPQC8FoBmawVjLKy7WY8rwgsarRisxHiJrwVCcUnt5Cn1fcKMKiE89zPvmyFR6b",
  "key31": "DJHRjNLtEkwS99qsaHsLYtV5RWoLX3E4ovUh9HXM1xzPPcuyQvQ8hF2HxSrR8Utfm3asmUygqDW5ebtqzQiqt8p",
  "key32": "3xnbijow77um8A7jeGYPtuci7CtJZjYCmapf61EcuMcUTkQiSaNhQMaMf87Ddp2qZGK6RsEPdnCdjfoxTfEqLwCk",
  "key33": "2i3W5PUdY9zKVQ4C6uamtpk7BZzNt6TjXxa1tpC83H9V1zLn9D87mu8PktDLDvAcFVpb6LEWNcihoMC9X7a72B3s",
  "key34": "5U652MJQrHspn7fMUbhHy17YnBfSANE1p6R51aBn7iMUZyBk4aHcYLmLmPa1Zbyi4LLfZbHUCMTwCE4e25Yq5KUB",
  "key35": "XHX5ZdsVH7sgmP1tu74cYsahodt6T31a4QNrsGy3ndcyFvgU6WSQ6cndLHFK1Zgvw3rxURWmq75YW1pKbBopQAd",
  "key36": "4Bi72gf8DgUCrAbsRqZ8LPaBR6s7x2WnYxgwKzJPLg5Y5rD2GnCfco5HTq1dJX51yANYuhy8kWMxwpMAqc6vspBk"
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
