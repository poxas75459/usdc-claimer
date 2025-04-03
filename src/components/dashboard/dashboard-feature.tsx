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
    "2hZefNmVrVVxRfmRBx6oJbfdiE3dpLHRnvn23TCvZRMZm1oMevYDQGL1XuQFQjRGePVv6RATN5tEiwkAzpgiq6ot"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24rX36eCT6XDpjtFRooqTADwXNEjy9oS1QKdsfCcZP4FZrzCzsa4yQTV5mdRtpU2roobKx4YKVL5B7rNTxtGYW2W",
  "key1": "2WvxowSDDXdng9efLpssfr9nUZcAdEAArTGArng4wLPv7ypTmQBvFWdMnB3JpBKM8o4hHjAWDkEyaptExk2aTLWC",
  "key2": "4rqGSD8jyNGnQP941dbkixu8EqJxi15CMgGVwmejcjAMZ6njbzSLnoNHguzekQ912QuKDbYNjtLw5RgCzp4XLXDK",
  "key3": "bvJFfTguBUksvo9rxMu5KHcc2eQyhPxfpvYPbKXDixjjkJfQfX48URP7EhEGKx3r6xny4S27PJ1gA3PAD7LpSrd",
  "key4": "HFqmMAH4NPzgFriUH1H8ZfcY5NhU6XETwYYE8An3fYhxeyuaDckgvtzJwExVwUEpAaQgP5KrwgmPLCF6eW9EikL",
  "key5": "5eLJuCFdgfy6AEPm5tUSreDTgHjcympLiAJTnzmbUzbZyanNsVjN5PtUpZu5sXe45419cpKWz5RNsDjNNzfeBwTy",
  "key6": "2texiLUMiiFs9YYxcXZkSBzna71gxKTWwCxd616NhScbsq3dg4u2c5F6uqLfGTbr9mwgmmVp4pihLhzDcaAEx4zS",
  "key7": "3ovZD2zK8k1CU794V6dFzjThjNheygFVshZRSMyDhV6RD6m6RCCkVdCUTMzZu39ZuTH6q7aHEUZ7fEW96k3r2r5s",
  "key8": "3mFBb1QHySRg9yLUCPKef5FCsMBGaPE4qL7jUYAB2EL5r5wGxVU9vCZJnYq9xmBtRNVnwS1KjeevHnbyaYd2QfmW",
  "key9": "5wj4HrpcaJQ4QoEygE9YWoPeSvxFRTiPaHH1J8RVQKiVQWxjGzQk8mQe1n2ejzzxtZEuXXwDpyMuR84BSQW69Eg1",
  "key10": "5g6PtBo7vc4X9oVYxiJGqF3oJhRaRSAWTGXhZsDVDtAMwUMqeNoae65vfWXtDLda5iRSJVuij4oveHmXcuvx8KFz",
  "key11": "58VE5HyxdFiRagbKt8HHP9mYrnQA3z4EVjj4Pge1EtAZU5ThgZ4iwFTGwiAmws9LGWJQP1Yv2u9cKhYRCb85Br99",
  "key12": "2HhTURU92C8dgpbswW5ijwXYACJGTpANmmRTdKPi9FXCeZ8BET1BEycw2zzrmt6brkuUv1QZNdyHjLThsMRgZ3LP",
  "key13": "3adB3Q9SAe8QwwCwge3eZUNot7LGU5NTywYong2T2m2W4ysKUxRJWA2sh7z1L7KQfjb6bhpiRSSuohSykS5khBxB",
  "key14": "3fytufmbCW4YZLhsA4UixcccA6bwCxBSrTYA6PP5e8gyw9VGSquuvc9sdjrv4MkDv8EDbpNdkqe5zbjsCFydMm9J",
  "key15": "4GTRnEU3ScjnTUfdUKsaDDsVrgVUByPUJh7BfhwD8RNCBGPf7JR4nvnfkiPHiMf1t8aQ9R7yLdf2kZ4SEDN7CMss",
  "key16": "jayaxEpaxLFqLUu9ucUCWWx6GETu7A3f8fJKn4vNryR8ckVKywcbdQLGWbkMcuFXee5QnqY9ypD3Qfj78XSYRGC",
  "key17": "2uKAY9QcPXYTCmcbXTJe3qUBno4XeBJUptJRfYSBiSSZE4TT54LA93vMtjJrsDb3XB8MC9qZkTKEyUwz6Tz5kJe4",
  "key18": "3BJhmaeKeAUMbgDvrVrHSHJN2PpmGvYBKPMAFJgYuWTyzzsEobKj7hNb75JeR8M9iUutqGoxWJLkHHGUHeynQHCE",
  "key19": "3KiFeLTVNMCLT8eRQQgmHhNJ75jyiUT17ib4AaJkDTLoatFDAFEvD4959q8qtGNFLD327p6NDSS5k6aVnKTo7WcY",
  "key20": "45AXyX36iC6wsYR6SL6CEDBGZqqC8xtixbHsypRYWXRedDiKEUrfLCNYXk7cEHV9Cha7tzayJxWLc313f4eEawEF",
  "key21": "2PDx6mQp7cG4c4mjN8WuEA1fcRcK6LULWEnjgmB3X93wYC9vCg2BjZQpycgaP7nSCCDMGw49TjfCY2qCqE7xSiTf",
  "key22": "M19ubphgaTxrnkJcUfJqBrEw6VW4MrYWZpqTV9GWKcExnbrNjTuQDv4w8oBezqk98sR49su1ZSQS37cMHpvQ8u3",
  "key23": "C9PbTntNBx6PnUgxWSTLmu1bQGN6dGFELXbmpi993BGxWbaeo5fpKWAiLJhq9E5ZpxgRbfJH588SLCj1jsD7pho",
  "key24": "URw2RSTbbvr66qJEDyoh2HVxVQAwihYWxk7UoUCb9k3QZU9ydsy5B7YKco8Cem2frJvEUaB8SmEWbgccHaQ3cp1",
  "key25": "hztj4jDhqs5VhoKYowq4HFZTT8rPcNJKXmCPnKrbMaWguZhAp1uUVhFjK7f2Udovx6Swy2vojvwoeL1Wm6rR5Nk",
  "key26": "3nJpSgnEGwyhQKnqy1EMhhBhWxUTUWUUtbQq6Lj2ZYivgrrWUtDvJzQr8kq488j8A95soygcXEu5dUDpWe71fiih",
  "key27": "25rRkFxybyNgbjXgGSn6DNmyrYTwJ6aB5a7E3uYAqTDGAPFzaTDbtSPTPDbMGBTeb8ZfecQkgbauNBujUkg1T6E6",
  "key28": "28deCR4tSQqPkG17kzLUu1uqnVa6u8XKFvmZwFw7szu9bkAv7mSde6PzkP1Z5eBgpKSD6JBkr9Fct8XXvrGjyjTC",
  "key29": "2pVL8jW29QCtreFBTNjvun9Sng1nG3nQhm8qzVXdS5TCuz4PrdachuS3iJ4RtFeGooYAj5rNXRzzX67EqjwTdKpi",
  "key30": "5XynSDaZ1Co7FdoCzsEe9iGxjSgTH3pykUBhvB4FALR7CokzQWW9zHuQJYGoMdzFyBPnHcYDasu7H7yRkvPj8fKs",
  "key31": "21hGwuPkWJajEydGf11W9T4GqtX5UAwrZfgThBgABYJsmCz6WVuReFvM2cT5rptuuvLStaBFKQfoK7RSbQbwedi7",
  "key32": "9NUzQKf3DswvzEt51AUWcGd7pjnaPzRt7L5B4uNiHN8kBmT3vLFePgqUH3jifLXUECTzHwNVb4nkekGh8kaWf8G",
  "key33": "4MnWJvvXc2x9DXe8qJdA8SoUUXF6rT25oGfYGAXFhHBaGmWWrLcYYA9ZbimxVSUE4WZPDuSw7AgEBabhirC3QH48",
  "key34": "5t5b5b2AGwS6j77ThZbJ1xiGBiacQkrJTFkb47PmgjWpsjfkUW6RKKL4ha5Vk4LQfc9JwPZ1waXriSw1sgq4yLF6"
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
