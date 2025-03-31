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
    "46s2C5HCNe4LcN8jmutMBEV1JLGAPujBmeu6Gue2aFJbXZmFQvQqFrmKB986XDU1kFqK6bYzbgDAWeBPHsEG9YJa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27sGeNbnTBEhGmP1LapKFYWHyh1DTBKdWxrkXe7E4vj2BsnhnBf2ygcGWfS1zR6eYcHzaqc3vhoyT1x4vEJsWAiG",
  "key1": "E7p9sQtuoGZrmn2g5ECXvb9KivA8VTbV8vX8yW8YxvTb1vrRQS9WY3iAPzjs4mT35raK1Xq2MGkGwXKvA5Bg3fr",
  "key2": "3JgaHQttMpNgZujjrXH2kGD1bkErk2Fs5oPw32VTvtgooiBB8dQHxfEAJNSZEJndJvHvN83jbmhB1X89z28aEPrZ",
  "key3": "4mWmTrgjVPKvYTzfoybvRr6Wat6jiKk4khWJpL4x9jwCtCeEP9V8Bopac4pZrAmcbcUFsX1Hu7TVFNMxtGdnk2eQ",
  "key4": "5F1oytBozYZGqYXhctFT8dTKx2P6c2Tg1mpdvgWTbfWg6783hXz4PBnDWmNbKpXcuzHawHZjS6Q65Zrfp1ivJpRQ",
  "key5": "264bjoTe9vYpHUuMi5TtCxqURyN6FKmJkoNoAD4JJ7sgEJVTt86sfC6EYiqnC8Fhvm4VUXoR3bnwMQRqHPM4QyMw",
  "key6": "4UfKwf5FKMooAKK7M1pnuPLGPj8vbE921xVtLjQ7gYut85baKnS4yqJHoLjofUGAqqPHQutfznW3ipqiqDk89eEc",
  "key7": "1DeunMbLskFXMW1VmZnaRiEaycNnLPqfqRSHSWvfbbKgXzPiBmXf3rxgp4jNw5vxD21baEQHak4gZgMpXuFXEXn",
  "key8": "3P66mSLFvDezgJ1w5b6cv5nKELQqMA8hMihU5ckeWKT9u5g7d1oE5rYCdyRLbituPf7fshi8W1fi3jC99pAqdDeW",
  "key9": "4eTzV5tWvRrbebTEL2oZAf7iaJvQSWSGkX73auDE4a6SYSCL5c1AUVJMrPNS3jF3GfXnJaiwfCJQ6PuTXhf9kti",
  "key10": "5k2Xnkznwn2V5VGA9j6cwj1gXktdoAmFzFZE7T1z5nEbxYyzXrfX1iQjRhkb8kfbws5b6S1oVXs5nqKxuC3TdcFt",
  "key11": "4BDbHY6K9ZhjNPtC2f2Xhzf8PsKEjTEoGR4kqZPcCyL2zrTSD1zkRZiNGtTGqcjfvYZF7hgMj7o5HUAriGK1ZjNq",
  "key12": "4spwTJj1Gt6YYSuPwcfDRm8WGkM7ojZaTfZdQbMtBpgaHoUYTn5Pip7kfRiAyZeZeDpCZcMaojMbnfs1puD9mkZy",
  "key13": "3g6Y9kwfnKViyv1k9xUdRTWmZWg1MJkt1zpHnBYSaWSdUJwRWZ1nTMjPonLZpLx3sS8LGt4SHiZyNgcUwKPPiP7X",
  "key14": "2n8DLfqCojxnkcn8PbF36AdFH9HJLbHToJvAnbdTH8axmcjmtEgqngiDX3BFY2Mp9XpuD9gS46BFFAhcAA1RLj23",
  "key15": "4pDV2C7aGm3EkXe4XZeMMVbsAX6pDcPjyjtSXLbt493Hzp2pqKapL8fEXx97zMi8hGLzGBQ82DroE1J9t8SHuD54",
  "key16": "H87KJJ1KKA3UA9WNGNHhsH217j1vWJ9uLHZhPAYFpsX16xKSLqREht1NsyVS1gxGMNfrTvTmgsKWzZcjvB3ueuF",
  "key17": "5hWPrCRLE9eDdfX9NjGmYFnPELANMtKMrMBmovrEiL197t6uuxT3o3pJivQqTUZ4n5C8bZP2SUcxJLxdRHXuaDut",
  "key18": "5edxZo6vjaPwtcepcX5DeGckiZKTTqP5UVX7rWxqUSAoecmSp3hv625DYSn19VvasXYR3yu6AkZvhRcn9F977zYP",
  "key19": "4kS1LcSX9FhXSqw8ycP6M48Tizpbe5oBLPJwwoWjYNx4HfkCFwuiJVUtBoDhCGdnEboaQuLkkf2YtF9AQSJKPQJ5",
  "key20": "GC6LjupoxnnSypNRq6hz5mmp8XK5JThKnEU54SGTodjULkqp2qZF9c4XbbcPbMMCfnUhK8c4pmo7rD2DePRGzPt",
  "key21": "34zzkjyXzfH9tnZef7nw4zJBPB5FPFLwzwtbfD7oe6mWL53LazocpQvHFvwcQoiJqSMgJFLadS1gc4waqb55gNNm",
  "key22": "KKcgd79ikPXdQn2dRX4BBXxLJJt4CcdajyLdt9ThWR3RB3imCEZzzDKgTuk2YymPzUr9vrRRstapNkRwznwMTiL",
  "key23": "CyKKeMn1x7ZHwKs3xsheDENNu58WSAC4ex6JxrdoSbtVs1XdEMKVFmMimvJDd6iPT1DiBEQ4SAuofHFUiYaMwL5",
  "key24": "2GBqzPbSeBX2r4d3tKUm71c9T42fHX7syUpLoAm9KjiCDxMkxkGecmFuycG9eY9QjpZf7CtKVoMACsvbwwVvytje",
  "key25": "2A6bCGM9narYvYpBFjaB3eB3P6LWTA9g66LoqJT6y31ms6xuxwEkgxAAk8rUtJBNVhS2ykJyCCnKLuEm4eVsg7ea",
  "key26": "Cwv7ijuaR45SG1ddEUARGFSD96Fcjr7kfCtP5R3y9yfFa3wMY4VbPgJr394Ez1oaQDCVMKALHxN3m8s38RfY7xN",
  "key27": "498kAhUDZqHgsMcY64cPEU96tnGW2WNDmMmjR6j1AWNDEcAZupPoyHwXsFkxDdYcnJnai93XvK1gTtnuu3uogPDm",
  "key28": "s4bUciFNYcEqnbqfRKpU95tto14gh1YiLaEFwLj8gediCGLGBRkV8JLJSNwAXEWfpow4ThW3VFyTP3BWC2vzcLq",
  "key29": "YGErZt7VAx2XtNnzDVKT9AP66brfg9jioBtGAbfunB5eTG39hkVNSJ7VNbfmDVKzHcWAzsz3ChXdvMMfRqsKmK4",
  "key30": "3Fn2mX3QmTguJceuov6G5jcY9JEXaPLPuKrz1kwxdf88jZb8i2AGTnoigbw1kbeVNZK5Hvah2EqDyfXChi1P4L3C",
  "key31": "25SytKi4EC1qkAb8ogvenM6PrWVBF8rMKH5kg7qWYS8GMNSUnfNqAiVCzYmUbhYQN5BkffKfq1JJ3tsCzP68WdhN",
  "key32": "2uXA4kMQb5eyX8zfTv3TD83m3hVNG8EMRqqou5N3cr7wpmBMYsYtX4g1ce6oyHDXmUqWmdC78mubSD7VeUWnjHzX",
  "key33": "2yjthBD6N7e9Pg3Z2Mc56qEEziJxMjmNvcadDiUqpHVB2pJi2Er4za1NgdZCrt7JDoLD1M7YPwpe6Bp2uRv5LhtK",
  "key34": "3VAmzbAQLHPuHebE2MgEFQZBtNiA8gNpZSTUMn5LKD4uwZ16sx8mcjyZi3JMUV93YZaBMmqbVonBsN4PqHyHXkWR"
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
