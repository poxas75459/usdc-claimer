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
    "3s7e3z7J1SeM8XL7WkjASTVrCMX8nGjmjNRpQ4Zx3WTjPazot5UyzPwve2uvUBtFKFGu5NCQJRqpS8xktct5izRQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vd3mDeKTrCNX1sMJZCkEW6RmTXs4kvkcoCtaSSvdYCy7qFGPYjxnKu3bbjLSAz376VtF7iYUVUj5cPtDFRoinjQ",
  "key1": "dz2W1wu26mJbGzQkTCyDYEdC5AcUqNriovLbaChhuLmfbKYyhf214xN7qEHcCV4S79iuPdkgQ8uTmuddg9WMdFg",
  "key2": "42QUx6c13ukK8ymPzUUoQ4w6aB4LUST4TexPmkeHKs6Rp4cqa3LQBE4NfJ5Z8mPmBmYujndRLnbM7nuaxFain5SD",
  "key3": "3XgDjtQqTg5TVczbkc29HTxb4WyD3yih35Pm7a1QRNMnNTfbZTZMcjGggKwMNqNA3WSSSofcssDV7MRwLAjrZCSq",
  "key4": "3aK5zC85keT8R3iLDun2vgtJM3PUcpzt2mBShEqcHZp4WhsiSCUNGH2Vf6zNrHsNYERfhyQZ8aMinfrsoRbvpMe1",
  "key5": "5RbTztk2BCzdRfvGP5B3FhbVKNh7WiYNjTaZArMD94zqZD34unVtyKmPhmjDgmyo43eN7sByfkc3LhQYHor8BH1U",
  "key6": "3rXSWAsagN9B3VS9ZAQay6jGbxTCzNgBVSqJyHzhGdUTC52u1MqypkmCDS1D9e6ya3JiNv3zLapqDF4U3VcrFLoH",
  "key7": "38NvNMtDNdrRDxMCZgUqdFBdrQStD3fw8hR63T7zXLndx52kFf4eVsywha2TMTgaehiCKfgayX13T9cY76Bci7S1",
  "key8": "5fBdUECz4TjXDgC1ZEmah42LN23YYvQCVDDxAab9PAjnMiNv6io2VqS8fB8kfASznM1SVMY5LceQqFALUEFD1SSA",
  "key9": "3QFXMLXogKPuk4XqHzzi27o2XBhiSwEpVZDxDDNxBNLkcPHXLsrHE5wgA6YLG5NPYaNq3yMdhP4zt2aCpNQBqtJb",
  "key10": "4zQbAxQKgmy1nJ5hYJ6koPLnXEH2mTcTVfS2S3aaJTgqRtXghHc7ox8mzVQEm8HsguzQNAEvigzPpNdCwpN1fM6Y",
  "key11": "vE8AtAbxymsRcf4KhFCuTsjBTQNX9jGZMufXzKJiG7Rhrv1KuJEu7AGkHQmdngbaFzj8W1FM6LPUYZJMRyHKP3q",
  "key12": "5U3WtvdyBez69XXcbGHmPVuaMaMd1vqtkn9qHn9WdDYrvMcHgwBiCr6aETn5imayvLVfQ8cHcTVuQDtoq5VubFr",
  "key13": "5RhZYsL82c2d662KwJzLgqdNRzZe4H2R9BjDu9pBHXgyThJfpJ5sJhmMt9tJQE4V44dBwvxJxaHJv2VS9wpLF2Qo",
  "key14": "4KERf2MxRUqdkzTBvAnpzZUWfpmeH8vm3uFN4FqQRF7tAebRAMgdfF1UmD4YGKWyzwVAruWtwjgwX66c7U8Vb4Au",
  "key15": "3vmkozsuFZfRmxayvbxrxAkFQAJYDtkh5Y3WuGBRpjDMfvcGDkJb19NqGXvJ9iXnSZo8vE5DR5V9ieS8a6HBib58",
  "key16": "nyVP5C6wW4VkYj1PgRFVKAy7rWHLiWrBLxJAHTgMtbGez6UGCSSvTJdEBPELN4RxSyyxo5Nn4JB9k4jvQ6PbTjg",
  "key17": "YDxLhUKMx4tyNLrKk4MhvyyhJcgeBmMQHQf4bdFL6BkvoNpZWCDSnnngFEt912arraQo7yRUzrwDfnLpbDeCf44",
  "key18": "5AHgVri5FCojummQ3vDMyRnAPZ6WXDeA6QqamvXM1NHp7fPoyLQZZK5yTa7PPAha2EGwrBbYzMLn26xaee8RP2xh",
  "key19": "5Y3bMzQKZnZf6ghYh71CWjV8ra3AphKYwN99dBxkZyhtV1QShb4FuZepZ9cesZVMcKGtTu7FtC8BHXg2X6ht3oMA",
  "key20": "4eXKPHipAcWFm4hiVdeof4NFPsvdcLsk69GVhQ79Jxabp853181K2TocprKx56XAcq9nM79yFXpYDrJQVFMV8cCp",
  "key21": "2kkwjFAAZcf6vdP1eUueURtyPoyb9mTBTBADnrb9vhy7vbDr7sEXxgGtVaFuu4j5BReHeun9Bh8V3xNbQCsxGUds",
  "key22": "VXtVeWvWWspiU7PRK3HnG8BEp7uhRwZ4C7f8JcMXnzziRBjd2v1Q5vmN4AFsnrQ8uudQ4xnqDbMvRQ3XzVqRuWM",
  "key23": "3e2s7h5gFihB4Yj7LbDcDdGEZXFV9YXrqzdbujg8swA5GowPoShXP7woreQVigyRTdNEC47kUZx9qednUiJ6MABE",
  "key24": "3nN1or9umfT14ZUspR69dC13qphGUpNu9XyxZFYAuC9f4sXWdzsRvdkY7NcspDMgWfbjPvQSkqcFJE2UP4otWmQC",
  "key25": "33DXXixmbnsBHzUPzPdk4Q1Sosp2S2kyu4x4ihNqPxDnDj72xPCGkBfvFeTiieAZgCfsG3XQmeUkkmC5EPidqcdM",
  "key26": "4cScoBr1RgZi68W2zyMnxiXbmhPJVBh46C75yv7mucKM4cvmjFrkwy8Jg4QahUESXKGegnnCf5vRgkUb1dDwbQBr",
  "key27": "4rtGZYNq29GBULVJcTsZucwoAZtQcV2PoTRhgN4SHFuab6soDmcgKaN3KWcaQQqCwt7kgsswPX1NTUkMV1qJeV69",
  "key28": "5QWwBjdyJgMHHPVGcK7btTPda86frWBx4WgoSoU6oDBogTuyH3PLnjvpZeUkERBBkVZwQrgaRyACn6BgKbEEY7Y4",
  "key29": "37VkJRkistSmrkprYRrnPyMLyD679hAnx7wgVGMfvpE5Lh7Q3cUpqhAHyKGNeCGYKdEv7xad2fWgXgCfMdU4S7AE",
  "key30": "5Ejbb1D9GmrnTrT8vUpsMTt5xU2Wkj5wyP3bA5WC2MDUQMCkXyoFP6f2F9LDityecno2CWMAASWtmfksrUmih6gm",
  "key31": "3mB4gbqsDLwFNMjhjdDGdc1Ck8B1XLu1ZazVxTfRTmYtzMTFxB7UbYrPWR6AyNe7QMEMbEHAGwGJPMCJEt9LzVoN",
  "key32": "2t9un1DrcrhYPpK5jDvoaKX1ztBcAdN4dD7TuUqshkZEYtiSPtBe5kGYUZzKX8Xg79gHrjJuyJo3rFRwUhfEoSH7",
  "key33": "5tNDtQQT9gG8bsGb4Fg91NMQU4fgxxcypWkZJ5mmkFhFsUnemnYt1rTAD6smn6aQx9pwjXsXMS1yh8egi4tqUKxv",
  "key34": "3V6ArChE7bg7KhVCogRJtMPKZbjUA6vh24VzssNKdsHRj9Ks1jwo5MyAUH1PEi936uBPg8y1F3Q6o71S5CokYyAb"
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
