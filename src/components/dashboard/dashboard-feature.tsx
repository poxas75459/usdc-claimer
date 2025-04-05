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
    "4CCi76NGFbM9tzc8tNGRm2PvztnDaQRrGK8Uz5L1vKnXwJfSGngYjDmq4Vs5e3tGUqbMjjStiPB3WraXyZpJUxbX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "529cTJZF9jTUTGav8PH8zpUwwjzP5b1RegKSmfQhCpiZHFUaamLdnhX75TyJtkZdL8KP98yuGcmLUMs3J9UZCot7",
  "key1": "2sr7buz8cCzSMKkKZTyTzhbjZLez1qsnxwkRGHGBpcXb4Ju2K3btgXocfjrQzAyAQcdSvuWZMBE5WPeKjAHa6GDd",
  "key2": "5SxdUo3g2s6kv6jYHuvNxMcJThLNE7FndWHzaTeMDpcFE65JkA3LUDkEkYXhhKb4Dqexk43ajhnzznA6CiBFvKov",
  "key3": "579yfb1TFkPkM1tASAkRRJcGeQzGEHdet7eH8RkEybXM84ytDAK671D1v4mjqnNR4xYjbxCbAV12to8QGXd7a5sn",
  "key4": "4ZMJc3RymGEFciCvg35iurv4FKSGnWu6tStHzchdn8pfgXyzqtVgfyYL1aewv1paapKYG4YvprWAcyhwFBSXrtFV",
  "key5": "678FfH3oUvFQrDoJSYyq4BZqCu7iq4uRHE2dvfm3PfPAV1R8wPJzafXgQhe5CQKihRUq2cRnaSSw44w3YDLGTEV7",
  "key6": "35brkDMJM2CUiKR1wcgv62W843LSEVoQdXv2hz5ZzkKU3f2qDFtT8DeqTLKLmgbsbXMgFggv86pnXc3xd9wBbyH2",
  "key7": "4RK63ZvhZoKAGuq696fFDgJj2TUacJx3hMFBe8GeL7zSLhKmdM1XL4S9hWegfav7mgEsmymxg9acLUu4GwvzoCXv",
  "key8": "3Y7rPmUr77hipJJJdBJjNsGLo323gKxA5W1EGt2cbLZtwvW1WdmmYaNT2WG3Bqgm7rZadgeTgVYvT4Quk4YPdWSt",
  "key9": "LchkaWZ49zfN2SGcskUVY5xBRgkrPCBu2zH312m4yJWqrdhtvgSveTWzHgZL7J8eny4ZMbWQjgU83tYbNbsK9f3",
  "key10": "646jV4hxSirf5Vrmy8FEdZBbkgZKnqPndc3pVCL8J5RVDUygaww1KRR5hNcyTkjbZbcfVU4uK3EKCeHGT6TFT9Qa",
  "key11": "6okwQ16KKuNT5uhwKKZtwjCrjQheb9TrxwEM9SpAZAZxjNXLjTaTRbLSPWqJRPUMWW44hKw1yqRp39CdNjdEnxZ",
  "key12": "3P1GHbfP2WTfCyQUdBJN6w39CWKtZGMZfiaBhrd5gNLVo5dDAVhz9MjPSJMybEkCW9u8GbzZpnAqXZb3h51n561u",
  "key13": "423w334U6hR3zcYVbkMPBKpnXDNWHieKhFJFHR1ErcNPbhvRqWLZvRyoRsitLeCGAvfJXS5viaVUfiBg5DPENfNj",
  "key14": "4h4fzP9SiHYmc5RNp1y8NkXfAbNmQ9njcdYmCun2rFtMqSFddqsrNpukWVbmirWBidg8QjQeD2imRE7eYRSNPQHL",
  "key15": "kFynC4uoXKjDmjuESrbTSTZnpvnK2gSNCConRkEiDECAaDaNMV44oFNzcTjsgh78RsmzBc5vAUArUBm5w7QrAkN",
  "key16": "1Fm4oErRrXcgoUEqgiZhtWWd3uvSC4njQFWoh7tLBMvPkPeJretgDJpHYgbex1wxC8TnMHbXjH3Q5Ww61QYw8BF",
  "key17": "5sh2vPKBF2R4mbXXU5vY8QRW51XjLkkjmJHB2cFkgLDZ6HfTabduerqw8XfTJ5b7o2XFD2gKXNszvvJMQh8UUGnd",
  "key18": "2XDZWFiA4MPFLEp2WCsbBxxTtH97qVGgyfraJfEqnMP5p7fknwvhpFH8ePxviQaz4oAKuUJp3jBPLXVzeiLA53Ss",
  "key19": "2RMMiy4qRhRTce7qcyczPidNwXr4C1AvvBmB54MhF6nRaeXxddejowyPLhSSD1BxVK4XoYXo6cXhZuTNFBQW94Aj",
  "key20": "3deW91oN3uE9MAWfwzPv1pZmTzd3gHXqYAXT83o7kBfJUGFNmLG5EP1zuCnu3MiVzxRWK8qYzKL7nPtDZiBpRVAn",
  "key21": "14HhvZznoxzsN7QwhBoT7tPkDLE5ULBcwvHb7MSu2DNFaExCs2AvVEvuFp5EDfFJzbXJWVBcxRnHjt9k1WbkMFr",
  "key22": "GefsDQkMPXjSY6HvwqqXd7KKFd4qtktoUeR8Hg7vgpBpqPJmH1Gp2MwSp98Hqfx7sELEesUPQEx4AuVmRx2LjP2",
  "key23": "3GKypMvW25Xkdv3HE4giDcCCRpJG43opHBSwBL8EWNEkJhbG3dCqSzx9XM4Uq74hb8k62JRjn2AfqvAmFTqF5ykp",
  "key24": "fXSnKkqU7eUQUGJ6XUKu39d5RiyqqkW65QYEFwh9Cecoehhiz4B1YQLsmvM4tvwsgiDV2FpFHS1ucfjrhm4BVPt",
  "key25": "5hwg8NM9iBwD9aXbS7LNDHE6XyKdd9jri9eisXBpQLMPPiJKmBmzzN26uQb1F9TQ9B5cBwXWDyN5cJ2ZZUjLNEbt",
  "key26": "4haEF4NMo8jr2UwCAqznUkeDVQPJ1G5WFPibADteCgY4CCwJAY5Cm2yvJe4wXPkcEouj5W16bwt5pQBymwEFeBms",
  "key27": "3BSLY6UkcAVeEiMDWoLYTKcJjk94YZtZu8F1w2ANQFZaxeZmNXmMk6hCshc45xN41oRvzRRJhr6X9DxrQhteeFtT",
  "key28": "3djGJL7qGBAs4GK5G3Qbmhjem8LExpmbh3hRn5hPj1vPQzrpRkS6C6ifncSmcmR6Ne3UhcEd1pzbTxP5SSFu5KLb",
  "key29": "2gy91YVi8J4po7uKfHpQqpsCz2FxaXSjDsD1CZ16AeQaLYCYwZQgYdHi5SFkeCczGKUEsFNgGq89SoaA4nPd6qyg"
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
