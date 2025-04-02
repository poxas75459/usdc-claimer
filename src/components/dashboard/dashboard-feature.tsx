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
    "o2oYW4vY3H65CtwT7dFNsL5LsxQdTd7nZTdnPtkMq13X2E4kipQx4w3MnLcMud35tJfXKNPvfjYSGGTKsapS2oo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EUuNUzpXA3UsKxsMNTyXE1p4gVx9UmrR3ebSQRVsBDNMMbjKzws4WckAP6RJwYVkcRHBwX6FLYkDgwtGp8xDGwP",
  "key1": "5VxbhyotwnEDveqpsUB2tPZFafy5cLVuJFujpQpFU3LvzmmUPkKoPqxhHRFFYMGNfQxz1NvfWLFdqR7M94fPAJAQ",
  "key2": "4PoKsdK928Hq4sEZEunVZNoFMEkQPKhj7xoiqfHUGazYXLyRZw1ZRqFtoduXhaohs18GLzWgiWbnu6dnzkr6vzv1",
  "key3": "3R3Mc3AQ5KTKaRW1td1Eudugfq8QRqskmAv4oRCDXb7q2BRZhTtEiqQm78DsBwmZziJk2fzcDgPq5yNsxYX7UnNj",
  "key4": "5peyRpXkwbFioED6y2yEqfKtB72Uedgi8sSt9JkwbmoFPD1WbCmexYZQ4idKTBc8pcR8Nsr1ADwmEh8wPVQ73Jrv",
  "key5": "3zr4Wzu9WFud1wU6k98UkDijc3EGeTPKxytWeR75vmhjiD1RVqtrgohd6VduHBHUjT3NQuAhwexhVcaQJgof3Yar",
  "key6": "2c4NTYNPjhwbZy2pB8N2LRuijsBL5DZg3a5omRxCjXmyZXV4y5wQZrBYMZvYMxZRgobiaz2m3G1VYUwJXEV7Dc6X",
  "key7": "5ZEmE29CF8rG8Kfx9FqAhwW7grmWBY7v8zfxMi5fK2FqGcFJcKYh6pUyY6qAezqRRXgRKfDB1nyQPhdpKFCyrvas",
  "key8": "5K81fBf3QMEbCupZRCmd5QPwVpZadK7pV41bufiTw6ZEkbHi3sqGRDsvxrYxLQt7YLvgnX5tLbYUUM4YnaowEmux",
  "key9": "62zUfRuyAR1rx1sEoQacpAS9NzPDrbdUwQDioGxVxkXkeX21aVK441oC48eeuAuRYvCkNtNB7wRTSMPbVjtAg4j",
  "key10": "pLgm3xatD2894bbyvyWmcfT5N4HfNDNvE2LjVvExnsnGrnByYFn1uuHasUdGBs1xYtEaGrtwQV1kWxi9uZZNzkK",
  "key11": "1ukwkM3ZouurUreYZDJDbPhiooF6bHycPGMeNhizAaaVUctHwVmD4XHg3YUicWQSrC1aJqmhvqvKbkBghaBkw8G",
  "key12": "GWQNbbd2kMzMUuk9xaqsEo9RiXQVvemu1izDwmE82ZGpS5WJsvgdffU9b7oRDyTju6MTS7ejG9ykWDfZoHhMXta",
  "key13": "3N39JTWerSXTCidzU5yXSbB7eGWgJeTwizcVHJ2kRoHVCsWY9uBNBYeEhqfdJXAx2yoz1vNFh2t7tDTL2u6D1ZM7",
  "key14": "uMNTSRttHpgQJhYRdLuXPwamFeS7WfE4s4Vh8TwLe6cwgxz9BnzUoQFehX5ytbDNh1NbFxa3Sowe3JZYJcCP6Wy",
  "key15": "5HdehiMB6uRr9qdChX1j4vJ8Xz5keWvbobUuP5mavtHifnbhRL2shS9KtXtpLtdUMbQM6Bob5CcssAczRcBDxF9x",
  "key16": "46v1NjzXz8LFXLVAti342xgGZsJgJ3xyfN9Wt9yuyfy3btZDpyJUUikdnRrh922vxptqvK44fNaYM3dX8gLM368i",
  "key17": "sGW2aeMdXBmX8Ce3BMqLRgaG52SWEzjB5H5A4EN6c2rSKnjiSDRzWNsDEuVvjaL5NfmFGjsg17X9seBFFMe5Dmp",
  "key18": "57SaRbVyHmbaLkbXtL8XzSjDpZ1GMeTjqtKbNAta1ec1n8wFxHC43HMP1Hxyxq8f2LZZL3tyjQdZjbTcHPsZu4vi",
  "key19": "5ExmZAjkvGSgBP7ZjvuCPJfsTPRYdWjGjWmcUFLt6AZPz7b8EsGwFybgATECwsHDtjmdUD4S9g3vHGUYwxNwigpr",
  "key20": "K4hTN6khET7wx351uuRSJuDVQFTJjc4ma1ZHwVg7zm5PTo2tfk97E2CqFuG4ozuBYDnze6LMNLcUo1Yo3JChkPk",
  "key21": "AAAKLBsrk7NA3o5gM8k67ZQXA8QUuTj7ZPUMECV7UbmgbYTW4aLbMc2wsTW5Tj9uQkkfbiPKEZezbZJsV4EHGcn",
  "key22": "5NQQ6M2C3MDi95xp3nrnyT6TwfAFTWPSvQFjptXdcta8WbQjGkV4ko9CRVEY3m5Zp59Zd96iXbghcUGUPpfLUN83",
  "key23": "5FvSZRm6TYGb2Wmh7wHz3JytJXdLLz41CiqkxjvXsTT1qx7gZAjvNFFU4sddbtWu9Piz1476QsCC1ZHXKmvYMQZs",
  "key24": "3Ks2xSDKTuCByCYrSVmMWPJgHD4T4WFTaFPsUcU5QaatXt9YXu4HcJJJgYrfoMwkrnkYRwwgm5Md2bdZfK1twTMW",
  "key25": "3xfarT1yrgQkGmXnYet4dzAHF664ozuM9jvW2joDXjESuPxgMzW9QFyrMhGb3Dmxu56SzQQdrnNFSvzAVsZrwd4c",
  "key26": "kWq6M8ZFzx8M5wEuyThfpDKY2CcJ9kCs8ZTK8Yp2bMFPxXWgqujMcw1Ejys9FAkKEygU4Wjwg2JcqyDzFduoUnF",
  "key27": "4LXmFWGfrNEnPhdFX9XRWMVU5Lz6Pc2vpcWk8DFun2VgN4zH6X1gCaCwrWYy6VhYXvs8rQ4GKf7MMkwzbRiZMDF8",
  "key28": "4wvV8yzAFaGqBRp24wzXQmMCRPfmBHWQyyzB858PxiLa5h2Q2gJyNSN25stbRL93wP3xNcwYzJfxbpwi4NngnaMX"
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
