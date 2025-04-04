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
    "3JWP2oFY1EeTE7quVLYm8CDFSnoHug6c6QnMP7RAn3q7L2zB1HQeAfLCBewQkSpZ6iWp61L4PK3QcbPurXJPwapZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ov2HQXzpCnWQGa6PpqdL2rbnQ4Uk4MagagWeG8vA3r15BME1XQxo1XWdkkn9sCZkN1FqZkbMsAXCMd9wSxj3yYt",
  "key1": "2DvDEjdkqARrF7oGtZ3U1BnPrfC56qssQeDgn1m85pmrnUCTTupLpMMbgisDH3jarRAeuXx3MBZubtKYLGWER4Rb",
  "key2": "3VzPPfoLHr7uRxtsZc5s6Y6YtusKVMK7GtWsuWqugErXdLg48VC3DVSv2ia6oUfNBQ979mASPQ5BxKRCYW5Wp6L5",
  "key3": "5DWGc4LdXuihz9C4gWzpUod2WHk1qGFS6iehf48L77sEDFFsLxs4P6HJM6C25rZ32nQHX4MkcS6QdicphyFQpBN7",
  "key4": "25hbQK6zPPsbW7x4WVt5WLxWh1NBUU1TeaKB4QNS5cn5x1nm1vAH42okKPqtwMgvZmYeA7pceokUAhdqe5pTAJXD",
  "key5": "321PXhgMnFpY58JTfwpPNg3F2emLUmVqZ8seJoaYzzusCAUz1tutEP1nNLSF1gC3iQuSgujkG1eZs8ty6vrhJWKv",
  "key6": "iT1ZLpM5u2NvdvxhYy3oygsB5NiuXgC99UVW51Dadc6vhS2fPz3WSiQYACDj48HUc3FE2eJmqCVg6nCH5jJhvK5",
  "key7": "2jwswGtSnKD6FyftHAgf6KaWUQPasJTAQbFxFrqQhe4dvBj5Ba4RsKsBV8cr7EfLAphEbM2M2CM1Yqh826Tk74Mq",
  "key8": "5piWrvA2PJg2cTYAHH5UcpT3WaukhpARes3Dp2Ccc6m5UjuZvXqFCYszVQxUzFuedZrj7h3CUoPATdEPeD4pDvBm",
  "key9": "Zr33Wd9voer2SYW642Fwb7mnnXpm5beTPpWBXXg1YSjtC5gHB9pNEMyxNPZk87wVoVzEDnHq3kCkDQvLP8smUnz",
  "key10": "4pEFhg653cd7dsTJgnyKnJwRYPFVzH2fgmJwhv1GNMkic2kQNzxHoqdgjre9dNTzomGKs6ALFDoXBfs8ouuPZcgg",
  "key11": "4bjuLNKH3J14Viwvum9AASPR6r49J9YETnCYDX5vFcnXakJfEYTXw1tWQ3HmUePnXqdseUDX5kPFiL8Sm1ok6Vxp",
  "key12": "5w9sHpU5csNB3ZnE3DnvDn25WdWMG1pzcxsGE1mJZBKoQfg87Mk81t2UCLDRupxzjRrGRbeewNiDSjbaafERd7rq",
  "key13": "4Y5yaVLBSKpy63sEND19FHhsiZHediNxwvwrMrQfwqWsmUNFmpgx8DkcP29azeM3jc7ZJRmEonMkzjeEcJRHDQyT",
  "key14": "5BZ6RJSHiPEn9mgCChRiGQFgfLbAPaiqk3KTvboVZ9LvjRnRinWXmrct4Q3deBK8qJrUSmQWoW3nK9kF8rqTN273",
  "key15": "4mcyHsNdtD7WdsZZBBgG3J5JgdS9nDC7rjWsaHcPyXhrHrbffi9EPD3nscDrS4tLRSx21CKJWoLnA9vnu9prQrxT",
  "key16": "4JVQqpShBWYscPTn7bwVks9m7Ton3cwHiso1dTjyhUAN4v4EejPbE7GQHfvbmvT3EtJ6Pmksig24cbZspCZppuvQ",
  "key17": "HRcPPzEDda4oBpGjQQCPEWou6rvE2TcBLPQGEKYrVEX8s1dUwod4QDJZVYssxo5ZnU2U7BZjtjNZXkD67XVGzEf",
  "key18": "4jpjHqzD2ZCqYWvRREhh2nf9aD81FZYvnRZXE7xeaNHRb9S9VQamB7hX1teHSwhqaBAqidBM7WeagbURGsVUL86G",
  "key19": "32PVTmYXfgGmWKVaLPpNJsqr37ZV2RNAm5muVASxyBqeiyaQ5Uozre42i8nE2NLpjjt68ewZ7oarUFs8ntA528qr",
  "key20": "5V7oc5HzXe3Ej7TkGkP6aPvgSbmMv6bEAKb5HWbgWdUEz13qcPq3fKYWwFWHwdSK83jxt52PDo1SEpZzHusGe8CY",
  "key21": "4Vd7xAL5xcySSVcFe4wyTacyn4tKhoeCLfa6mSNyrMeL8F7n11ZoqRpMjqxZGguZPQdkjZ43MFw441iDnaRaquv7",
  "key22": "3TGmxDwJUySbNApW72joxWhabJoTZzbmTxdqMg87xWWAbgDm4pRjStCeUCDnyFr2iewuEcvzvGmWrmoDNuSZpDyD",
  "key23": "3AnJaVdH46Xzf8HZWDYbjGqyPCdKzLdH2DzdnBhpVKikoXeBJjsSmGv8XzyUfqMN1BkL2fywTr5NrYUBeLM6ctus",
  "key24": "4WmtJAfs3cA3batUrvyD5eqvFMLDPiDnRnrhni38fimB2H8Mpumqfyk2iRjzNGSUx3VL6twNafi2PMTrz6jrT5cM",
  "key25": "5bYw1yR1TVuHVL4fgynUQGHv1eJMsx2rxxDk2jXviEXmKhvLFPP7qqN9rwKfkAJVhe1SMFeRc69PTRs6Rqp918xG",
  "key26": "HRsxkDf4v413sWs8e47PztyXwyKw8LpBe9uHtnsq3AnzjSRXeuvVMKGRGsTXwHyJjWLZb5Vms3fSdu5LM1qDxJu",
  "key27": "TGKruPTFTdMukByjXtnseh3KAxuDGe3vGnWpNNfsPihREoji5Jv1skzRjmniJTcJo79GSXuq5nGbhBRTFVccdv8",
  "key28": "6qfUCuWRnTi4Z1bPXpatx79uCk3vrBduQH6DJo8hLHyGErf7aKE1kzoYmzFzBgYXNPn3TkzraVDQbqPnFnyD1TS",
  "key29": "5Qq33u2JvRFf22Ni1uzZR96PeXcbzJZf4bDZYk6nUCr1XocimAxy9zQfUz3VFxgsQc4yQcBebn3KrVq7VXEW2UKJ",
  "key30": "66dhjCtEQdKgVJhcuK9dK1PczMWpgzRnSFjgY8MzJCP1eR6kqNuxD3aLGks2vJz8QqsRZs2z2K23Y6mchbqhwh6q",
  "key31": "3MVE1181mz7nRu7X91Ja6ApsMjoLuur65FkxcUA3Y4J86gNxJn751f6TwtzNjMCanRs7d9QAqVb4WqDqrMhKAG8B"
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
