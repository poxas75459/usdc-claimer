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
    "5NjrhYM6obViDT2wx3Sd7RhFPrtrLHewozzf3aR8jvdrXS1kYXQc5bdvAhSqJ2ZqNmhx5x3MMrWYvRTVwoDZzRr5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fQodqBGaesV8CMS6gTHuTxG62Tt6SKVLc4BcRHiaP7Q9p76Wqb5aqMkqyqXikY5FfnUng22T2oU7Qmv5wbmVj4R",
  "key1": "4XzkTTJkgH5D5SK5trPpwvKdwGjSyLwcJ1HwHB9RDdMDJtitzpq2vMDU2CaDg9z32kijSQXBoTsSRWU17nSM3sPm",
  "key2": "2HUsXkBVkCAMzXkXLSECyJMy46XArNuG6A8Tn5qiG13axFFEJzk3ZAp7B4YAKnraeeB9P5E5922ybuuwQbyDv2Kp",
  "key3": "2hH82JFmL8CxG9gx7Dq786dw6idj68o7DsdbsBgARjeE4xmi84zjsFSWNvNyi6Gn27DFc9P4ktzzUyZ8qHStvRhM",
  "key4": "5T8f153jt5MqN6Vz6uMnm1yJLfi83yaiwYQegfpLyPSxUx1w9jeg4CRimwWWBxNoFmB4DPbiGMYsGJwY6VsqBZre",
  "key5": "3zQ1ddyeciSkp3VAePsop7EA6BkwhJ34PiiWxoqAHZEGckwdxko2DpbZ4F5iJqUT5VTpvyiS2SdXrr4DiLVUYt9R",
  "key6": "RP5WgK8DjYNCeA3odvHAzHKTBAib73WdoweYXBCsMKQNtFUakvS57pHoDyb4GuPvmceuxuJbTNnpPiU7gkLhfGp",
  "key7": "FLkRZzrB7ffVDPtmAoffRL5yLx4c7v9nNbHWhboShJ3d4ZsA7GCZzuLAGAFZDx8oQUMDZh5jfHhSyiPRsd6CLH5",
  "key8": "4cBuPz5ZLqYJo5Y5eRwc8oLsGTA5oiYvHYTBDCCAZrW6Ky2ZpayXp9xXDqAHxvdBsWPNCy8GBPNE9jARCcCx7vM9",
  "key9": "vGcmKKQzHo6x9bJ8bbADUAvKEtpUirMY5Ch8WjGDys26aAxCJyh3EiLFAunbwuM8RU69LsqiQP1ZBSMSxNLSmiY",
  "key10": "66whm9XgtCen7TBcBijg2s8Kc7hVwM3QmLXHEZCcRUZdVsC8Ces3KxquAtn4u7W25Z19GKk8G4yAJ7Vty5Fdgk1j",
  "key11": "633knzFA4jsVJPbeYZzmkw5iYvQfaNmW7TZCXpPrTc1ZzbQ3CG2hERMzGPRbSX2wnyNVUePnuRcpaCapz6AjBafy",
  "key12": "4qUPKLKFnzHaB88tzx5ivJVondJNuLeMVPq9inUyPS7H1FmWnUHEQiQxh4fiDQ9jX78RWgYggZujv1MFbKPVgSjF",
  "key13": "2SixCYHjVSs2d1YvdjCJoUsvthxugnmnkztYyfywH8jmm6FY1aEMxBhyk7Q3voxkbXNaSScxgsux4Z5nFsAzJ6Ur",
  "key14": "5MGxfEYc7d88BwKgqPTeY4sdQEd3oAk7dUx114VZ9Q9cMNzuwhAjdUGTCgrr2vQWQkVJ89WoANTpdSPaqHbVAiT",
  "key15": "3BcfYzLvh9BwfN69d2wtMe2emtPGdUFqc7bumfRPwJbb5YSRo4pPzjS6F3gfYCfJsHT7A8NM7aZYQk6hREPKPGoo",
  "key16": "9yq8BhArKqEdaWj4ciGUNP4j1m1h78qPdcDJ4TGhMvT93h3TFovCJWxEPfziS2tkvzR8SXrgkLUkkaPFJDZXG8B",
  "key17": "5CKbkJ9AvoEvirZiwvB1ttzZmwGRJuBnntCiSdJm2ssMqPzBVKxekMT4vPM5H1tqdaHPdnJTTsnQ9wvCd52nkvuH",
  "key18": "3mHu8BCBZbB9fGvPKQECMQzuCQPjtRfk78sgdRCPAraMW9AakeJcmAaT17RMeK9sWexmvPGTYDp2a8Adtn784Q77",
  "key19": "4WwryuAHb63isyu3X2JuBywsnRZUZuxaYV1fJ6nWFSHR4fgqdrZf5qHNw4Wf2rTezpovCCnb6M8p1ZFGWSC9Yxkk",
  "key20": "5HwvVB8mCY3FYVUWPyhkkPdp4STSoTrrGvjFz7QvVJ3Gr3Uh6Cdv7JBR57eGhN2uTUDbVev58iSZBJoWcyxVUcye",
  "key21": "3CDjub65rNVokomXabmnkdYuvTUBLiw5K2RZZ5f5NtkxQBh17dJviEmwJud62vKHD742sQ9X2kLR8VnLxnPkn4by",
  "key22": "sD3Y8nz8YboKLBth1z2zkaRvUpBUhe9MCQ9vhioSv2s48myUhs2eHFALtU5tLXebc3sxLTdZQUKB5PriHsbEmYH",
  "key23": "4qSXSvihVFp3p6wYMmvWiXvuXkgYYg96b6hZvUB24xkYHHQLHMr4FP8uyu1PsvxiHwniSShesqcTTHanvBC8WU2R",
  "key24": "4SGbaS8rCb6k2PV3t5NnoMeup3ZaYSPgifnVwudYZ5A8uYKCJKWfcK1kLiPzb9LcmuTXxjbxHZpanXFr3uKHdcNT",
  "key25": "3N1yuH3Ym6DwTBngCCCTyz8n7i9FLUh6GNXQmRZz245mwR8ZPxcdJthFTv1aAxS8Ajs9W17CTWVeHp7kgK96xcCr",
  "key26": "5DFfcfBMJ4PQwNcm8QRbVEfqoRkSbcmSx8ZLdAaboPynkgaCJ9NYD7UAZtjcycw9Bhatj22inQ2HkVacp4Jk7KUx",
  "key27": "5ArSroSxCYkpzZHWW5wb9gBrv3N2NV8M4vkCPEw8c9rV59BrRYKV71sfhsqcz4ukFLXDYPDRDfyURGR8sZATJX6f",
  "key28": "5zr8bxuv5F4YgruLPzH2gAXg6u4LD72F7GiRmuSaS7tqMia1jE4HCWVM938F9WErT2auWJ5vxDXAASbi2uQQKiu9",
  "key29": "5fmtpX5LUZXxKbU1Lb8NRaf2YqFsD1DJEqh9JmKUZSXZ1CXUWTqeXXuYVD8xHhcKoWDsHHSTuQvCHYjYkSBaNSab",
  "key30": "fXZyZaN86rXNsuEsYPpKCc6FErzAuZLfkVxwjxrxiAsreBtwnbacKfr98WFvemWsgL84BoZibSJZNzN19rY9xkT",
  "key31": "5GyALgVAnEfRvZM9Pa1vwHdMFNomvEXPgYQLFMvBcY45YftQ3QS4GcWKd6ApCJqMMh1hDyXCUV7Sr4f2zdhZWADk"
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
