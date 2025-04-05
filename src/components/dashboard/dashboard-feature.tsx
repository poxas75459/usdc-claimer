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
    "2upV3a4KcmxqPxGKXrR9Dk5zXxvxQvuoSHqtFMTeV5AZVevdqbVgy7KmGxLd7WviVzBqo1U9vajCBoZg2LR6knk4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "inAgYow2bJDxKHeDoYrzmDTGCNaPrcsTZKbXSov4qvFv5D4KHuUFDjio6dXV332iGkmw86ykatRkaTAjpZMEQZY",
  "key1": "3yp2SKyEPWp2Ed7fEJfbm1uDX7EocvogVjusW4uLBCK8WCwGZLVLH69uXKVSc841j13x19ZNMW1fNujZREzzPFo9",
  "key2": "3He1vfjRrbJ1S1HsvnnKb5iPKu2h8DuRAtHewdZ7eBW33hiLEuzuBuDUDMiB7Vti6qAUMVW9B21Amiku7AuAGWHV",
  "key3": "5eg1wMEKrrNT3rLkZGVgouA8WhYTqpaWPwrBPJosCAHQ3znmjAzM21RNWYvPSjrg6ZQtgcpWVUTuqPKzbHT9uCXq",
  "key4": "2xcs3aVJ6shrni4rFqaiHTA6f7Ss5gjgtEfE1wnrKakdjBUpa65eNgvR2hoV2ByqZU6RBdS3VSkG2EeWgcUgfRD",
  "key5": "3yQAUEoLJbL9rpqdTunNYTkwwf6X9rcDps1DxN2eTjbsXe3GwgQC633nKnEASoRKxPRT78eKK6XJgirB6MNiVChT",
  "key6": "2sqKXnxDhuqzp1tR1Pz8LWZsaNt7ktuA6jSiCvEnEVKxRSWj47RzjpTFGUQMLQu8E3CMq591zVRSLnhV7bxrmWUL",
  "key7": "5dDeAFFSEdZ6wmc477dTWAfeLgMkfaw6VPoYPezR3r46CC51fnXJXsLzwoHKBcWJXTs6gu1UpyMcNiodZxHbYYH5",
  "key8": "26XauTkRE4WiuiVQXPA8eeVrxhJXe9qEhRpMfobEDoKeYUd7VMVDHQ4JnK8mctbwn6QVeabRsqQgu9z8eaDZJEGU",
  "key9": "RPcJ1pRGdzXwRat7gpJ54ZPypGwKHuXy2kc9GZj3mYyoDjru1A6xUNsGeqB21hhXS9utRgke6GyXjidvByQZGaf",
  "key10": "2AN6R2QcwauxW4wvbwLQhqTaLt1yRLHw8gn67nF7xi2Gh5CyEmfuuw2oHpmNQzSz91t35NBH7e4PkvM213tYfvqE",
  "key11": "2tKDhffqHU7ThQZwATGKNBobuwT3Ucz11BBCoJMD9gbq2eKH9sQJy31i5Q5epfYAfihML5Gf61Z6oNF8pkNnZs19",
  "key12": "2MezsFMKHL9JSyMSSsJmspju1AcjMhZGvaJp8tWK5udLHDZWJd338j9SnQHtBHv6gV3z8GqUXVBaAnbqwAqNm977",
  "key13": "3g6cZUHz7Q1JpWs5GGAzzaG8CvrbU185ef7NWVPDpkM9ULBfLSkXnARUPkYUX8zfS6FuAvX7ifL7TW9tLm5a9vGz",
  "key14": "92KEJGqEghToRyBWabRzV7ofxZfRXCibEW2axZomaTESmSsmX5LSf1ZgkbGg9DNYhvFdb4joK5tp9RZmsSFqNCj",
  "key15": "2nGnZnrjkz228Ei4fQtcLuFmcVAtC5bd6CAeQiX28nGMwrtfS2L5wGe6Z1Lc54WkF3YDGNzcoTsKzc2cZeMNRBHR",
  "key16": "3ZCKnWiCydz8tiLqoPdFh2SXyGm7mLEN1LFVRUNt88KaLfgsa8Xt7LM7fKVKn77fRpvqpeJkVniFxhYGRY7VtqVE",
  "key17": "2wVEXaPCnyC9VifywCXhbjQkKj8LoCCpkKnKFPrdFrNYnp15xfgD4iNWmidj6Y2YiHtJHJcgQs8njuMZLQiUrYVg",
  "key18": "3jK2b7Jm1uh8yvhwHzWfeSbJeDvgkZBq1XNMFXfLVsaoQF1L922rE1hNFo7KAWb7oswKCFiKb3DuSfqkd8n7L8xH",
  "key19": "5HrduhctDoaH9GVzjHLxYHBHCPnThkCtABxUP3A9qZtEMb9HPVcYkdMWkfssU2LgoXAfqwNhRKsdxarVYUE3PpSY",
  "key20": "2WHZ6DRWCKcjvGF5HBGUV2dETJh3f8CjG5RHc6EzmHYfXzJUHpQgEPjkQfWEVhgAyggbdizaNHL9crbgBh1SiwF3",
  "key21": "2EUvbcz9LvEUJg3HzNLJnrYnNGUDbRy5FW6M6Wp3qNe2XGzZ2VYV9gpeDMW6yahcqfF8KB4ZhWxqHWKpUUeervqt",
  "key22": "2WZsc1ngDP5irqJHAyN1D15AZHU26QaTipKeg8sYgeCb2SYBUAzo3tMhK2JogRAJvgSyEAAykxbbXChCphGEMZZt",
  "key23": "4qJHZyrnMpX5x3oH5kCrwXBc9QoPCivoMvvVpkaUYAadC7PMcC8J7VFyXgWAbsxTReM9mcQnnztq76ZSg9PZPkEX",
  "key24": "3tsVoMMe4PCewNcq1D6aW1H6VTrTSNe6ACDEgYrzwRx2rTXTbN4ZDLQzEtcUyiNNfH1PJ63q9DCKJE2Ve9YnnPo9",
  "key25": "3PUqaB6pgxTF9r1XoSm41uaqkCk43aCQA5CtWDn8hutbyR4xQ8jaSn7qcCNEhbr42DEtpxPGKJ7p1SCRXXVdJyaz",
  "key26": "4eWkfJ7G5BUitAjHnrViwLWnHKGszzuHE9FujJqpPq3oN7cUbZAVYiK6kXXdC8M7sAaKKkhyfiryJLvnfgmaV6Gz",
  "key27": "26Y4tgjbaXBEBE7BLzDaCXMWt58sxPohsd3o4ziEb2bJuWhaqDdYyDpBsEUgMj57S3nGgGEQ5JduXVqKhibTYx28",
  "key28": "5SCkerSyW8wW29LuivBpCoNKTxkguDBmuqpHAF6cDAjQmVd6dsw5Q9Q9E9gQQGgtQeMwxEbeKQnrLexgmu3AeDV6",
  "key29": "377HnRmqkGLmSWHD5Urr9jVwEG8j9CjCe8vvfDSVN57WmhisJXFvKQa7SjgP2Vto5wXtxs9Gg4GbAiYBfWDYjcBg",
  "key30": "4H33Jon3nwaWPg9zeeQxcSvL7ZmmX2e6Ao6Tyv27kqkqUznEoJXFvDxa5YXxLDJqg31YH8ib6pFtZWjqVHW7w7Sh",
  "key31": "5sEAeqQt4Qwd6T7vox3VuXaTj6U4Dg7Vr55Xyq7wd7GB9UMpT8aWFbei8QM8NcH1EaaTskJH31AnyV4U4qF9ipTC",
  "key32": "66AYchEfo6huZHDwDo7euSzDMa1D8D1St8YLVieBBxjK1LP45UACLf5EAnLd9M9UizVF3y5dmUTgqfwC8K91kDZj",
  "key33": "231ohJZwG4ijfmvifZcCAAf29s5bwjWEy7voVX9rBWVPn2E12zGde2nw1fSZfFCaptCFgVTMjmG9H6wcEKpfcV9u",
  "key34": "gs3eXpoRef2Ye1FrrEAr5jWtpKRQ98TigQofycD7Gg3ZD9iUDzCS9jjxabeMwgP2JS98eppVGajx2BP5EL6HAmN",
  "key35": "2oXUsNt4TmEr1XXH4Rbv5s3oJuonFVAMrVyHefwj3vgR6Pab22i3jeRyD7kt3Xw7Qtz1eypb7D5DFcp5G4wDXQWe",
  "key36": "sPpCcL1VsZd1LTPtsnjfCHUaZhwxCkwCFsAMk5UeYcvAXK7HtEf9CUxJwJ3QxCNudyhZ6ThiJiWwcJsDgg4ZMH1",
  "key37": "4PEJYm1pwxeytJ1EAnZ467LQEuhac4oF28hjTZzhoGmhUdSzEygE3NbxG9pvZK32LyMVRZ9N1rby3hR6uP7pQSzV",
  "key38": "2Shpbfs9rhaqjELEAAGPF7jBeX8Fm9GupBs84FpBvGcCBwd9Zo5A2Fxv3HHAvgSX3XWnoqUzCeMh1UEWiub1J3UM"
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
