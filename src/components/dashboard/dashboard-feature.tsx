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
    "3DfgrveHfmBGqHVwWqX7GAzsNcv1cvoajBbZwrA3eJ4trbvc2SNAS9hUdZtS54oC6Td9q2E1PtBUMYn2uUMKnu3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zwb3BJfzgd54grXZkgecRuMbAvNhQNa5rMVVWAQYU1eR8U1C9ZxVRPUtzvTHGYQ7cgNeaJyyQeqhaz9hS5bZfE3",
  "key1": "71YAqttPg5qibignq3WoVZRQcvNHERgjj6tNAiBSCJvA8DCxiKJmd9T6h1ALEK4pK3qPcCia7FvmafroVDUidFp",
  "key2": "jbV3mcLr3KfDWdkqde6hgzdk3ktTQAnGgBormbdLK6d8JRZ5SK2xMD1Fr4wXD5paNWNRLtUpCFx7xSWsD9W2Enn",
  "key3": "2xSiUi5HJYwyLQogZ3AG26eVZgqE8vM82HgvQcb6gDpTTK5tPCpqQaiw7r2Ra5UUubxEdtT6xi6MKros3Kow3tzV",
  "key4": "4X9eDuA9SshTCcXhSwCBGXjx5yRcHqm56LL4RLabK86Lh2JMa41azib2GzrzZEXr8c2oVT1CENAQt19LNdozMK84",
  "key5": "QhAE6rhFxYfchtjT49JQdG7Ukgt98iutozNy5updM5eXB34ZXLFQNGVVL4WQh3gX3RxAmyraad2fxRTWowNDcqp",
  "key6": "2GD1q9v9Nzac7aKJDxJGrtSnpmSfFqfqHE1SaB9Zt4VmJzC7Hkns3fjPivCMmzPfygSRqr99pLyMbGF4FZFxTAUW",
  "key7": "3TZAFGU1vk22AECRW2B3CNDGrBK1fSfWNjaLzLnJkPYUrkUgcvTPc3niT1VSQ93thaurnaCmQygt74mQFNbp6m7J",
  "key8": "4AZuReBTw8DsQygNjtmxgYeVF3gk1ZkVVF2Yt9xkEPrUZBtpXgZBZjir1nDTYbLoajzBfrSPB8otGFAqejAsmrgG",
  "key9": "5mkxGQRK8fjhpsrViVUzSEddEp5SNdJJrTd83tDD2rA8BRAtkDe3f46XVcZCoaZxs2n28BG3VAiAwbuG3CRDJipm",
  "key10": "4328wRp1zgVDCJFxxeBrPiPJePMCWzsamwVz6vJmLWy1MLVtQu9oM4He1ENNU662PVb9ye7UGeSvaD1DC6apcj4q",
  "key11": "3BR596Y8DEhZZ2hRWubozXreEGUd78eYp2CsGtn71ZxLBHwJkLzfFyVTBgdfaqXmXKoA1WQnQKZWGVUtTnepLLGo",
  "key12": "3bxt3uum1fGWdj85bUAu25pKCxvxNpcxN6Kpe2S5i5GCEcbheS62bBMsn5F4bwSqwHFDwvKeyGUkTSFDVXTMHu3x",
  "key13": "28V29EhEaczzxwUxCbSYbae4jPKVbnqafQS3BfqME72HuaEK4ZcEfbKh3bMfeKz9Noc95HhnvsL7RscxqduPTH8i",
  "key14": "mtgySoru9zq2xcPH775NsxLVPSh46ytVyDtVF1L4KTH9GaHSe4GTsqdfH6mrQtWND4nhJFCkrVSCGQ6EAkCjG5V",
  "key15": "48YVEGCXRsMfW9MQhCoshotkPqwFf8LtGRyB2Y6CKEFxuAJHKmtcYPdNVd9JzAjcDtXoYnMeqX6AgWPtuQ369jSA",
  "key16": "3CnvxoQFdpurxWhvW8JZs8HUoJnimqbASrYHt1S3DkB6K4apW2ttcoF61TdYMGkbsZ9UhP7D7G1venBgNsB415QR",
  "key17": "3rhib1wYCSmjWrzKEWJTctk6LMfroPfP7KtxMUkAygFy3Sufo5gfXL3gUm6BsbJe4fWWM86o5v2r3QoLj88UdN3T",
  "key18": "5DQrG6u3NSgrTFFLkVrS2ZVK2Dw8teAp9yB4jYWZZkxY9RxNFeBaTVewkvhdPyB5aQaKL4Nn93qoKSbp9wL6jeLa",
  "key19": "8bHMwuShrNGXnzoRZGbWkT7JPezBJB3654iinmJVUqj9EpZuUeMrEbZ6QxBB59FjaPMpDvZFvbSEFuYokH7o2hT",
  "key20": "5dJ4RCKwSx5fNnR7jjZy4ahRpn8gZTAVRB1Gokvs36ko1ktykcYY6o4qckX2xEEkBMDAMwa2C8P6C5nmtQKKywEt",
  "key21": "4ttWADDHUnyZQXVQWaqWY65UmG6SSimEpB5okmPXfEAWLy5r9gTeG2KJpMNqbPd3M58rFN4hRgrwC2sRBv7LwCv9",
  "key22": "2ywcfhQexSk1pKPgV62hhUffzC2s7ENpmF4gQQ1tVxGzyeeH4FxLq34o8FtsJMSEBsoRo28sP7j16BKf1hkPFPe4",
  "key23": "3DjvX9rMyuSZAy4NuSNUb7vV1DG98p8rabXn3TDYL5EZHMWm2RxwjK7o9f9hU48f51TviSDsehqnZCN88oVXRRBe",
  "key24": "5uhjBUu6mXipBJtgJA7WY92SZr72qHBVsbDGhdrHzMxvBf6y9QaqqWZVgRtGeYVKXiZUtNqz563EcQnRtZiGD3h7",
  "key25": "5rJyeGreBAw4qfyCvVgdMfhw1Ar6iuBxDzC5hFQA5kNmPADjb3PLCb1KLY3SkLCBSeH88xXeXubaHyoeavNWnBFW",
  "key26": "5TsQabLAzwksgWVHKwujhRnwWE67uAP7g8YiPnwoKyiJwvrA9UxeUWQwa9VV8HMGtph8XaD7ErwiAVjdFkuqrJFF",
  "key27": "5chM8DenyYutFXxjUo4Gx8Lg12WvgtRPiQ9r66aJQdnCh8kxDUzk1cPLGrfuHZ119W6iegyrVirFabKXZttDhRxP",
  "key28": "5Ef3t8doe9J2Tj9Ps1VjqrcGxgQS9whNE6U98gvEfE3ykxp6XzZqJ2hTMvFgjhYQKbxZCZ53mtkCqXHbY6C9Y7Cc",
  "key29": "oF9TidZYn5DQcE2mFtf3iX4QLae6SzrkwQ2KdJkK9AsWuSfRsB7j5TH4xZjB5TyuKS3eMZVSPkFSr431SkpFZZx",
  "key30": "3NvkNnQHT1g3fVgcdkmiFzDruDSKzxb6H6FQPSyRhb2rB9kPqS972LHEbuS9jdXKbVvWRy5sWQjqfeB47ytfMgzo",
  "key31": "pRxZy3L2LbtFbFZCRdNZhQB6JGuH5rWMnU2jkSyQWrpXapAVrktNFFa6hq3c6st6ByWz8sLVEp6Ky453SujsbuU",
  "key32": "4jqLU8KF3gshHJy9zC6EGgGWegzQm9UNYjBetVboKRw1xhFBAueBhZJHh1PNmp6HoGfquRCxSxKZBQZMUXKFQew",
  "key33": "3kV9nZt9qf77DzZ8iZBDbR8hR9etQ5KiDArPSHcRv1JgNNdjZNw1CHYRhycU9dBGmiUgMaDH57DQPfiwMbfRB2SQ",
  "key34": "3azY18LTPGiprq6fhuBPFMxDdrPxDUqg8LrqKVjFqiiUqxk9XQcy6sQa52AhLqSUguuGVSEfbM8XPNmuV6sD51fo",
  "key35": "4MQ3yHTsYfBxgechcET4V9fte4bTRUoQJTh27Gd5cV7piFpM7xhgafEqwgcj3NZa3qswcgFwUjr1DkmR29vxN8y9",
  "key36": "Sc631KmWj1ie9ycvHDcpWBWeGbpSY3i7TBRWqDvQyZ4p5tX1fqrejASSWReHrEaT5nhqmHfzbVhxbHpCpy7xz67",
  "key37": "5FkjtFHP5qpgJP8gZt7nYQsXQsvHvj3Stt27nhsmoiXVkHw3Z9TnrD5yySF1byhGMAahvnFGkhwd8yoDM6KgUDa3",
  "key38": "2BHyvb9k2hAMvciwfJukGRPxiXJgZJYQpVyZR695fhAYi6Gmo2mXRZrouVhBLaVp9kKKVdmrHSRrx1XA8aJNMu3F",
  "key39": "5EFhMCAngzpKF36soN8tp1FznJyysPN7AV9qJoJCcKxhn7hs1Jyv9hDCEUb6vybGJojR44EobueeZTJwom2mxNTB",
  "key40": "Du4Zbiz8RWSqBQ8KLndjQga5qi2oiHcPCpJ84uhoVJLBPVXFQsBYPiAGghBCRA2cJT1MUVXydaMfvcFz67mCeNj",
  "key41": "4V73TBc6CjntT3zWPybQepbAeyRc3TF3FwphmfA9ybhnMF72pgRWF7JzEJAXeeS1HUr7mtZ39xR63627PPnhik7y"
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
