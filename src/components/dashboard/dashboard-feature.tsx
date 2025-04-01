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
    "4CMXAzeByt6QNkj4V8GHfnmB3vDYKfjgEwmRjeUyKRAFsGJWWk4MYjiDC4J4yVTbkUg8UeiRSox9EmS6cn8iGx3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ic5sibcEt6D3dc2FwPEHiVRgMkxc1JMW9BaD4MM6PzE5neaLYqXMgaeQbN2q9KK9xU6mbgUm4rTEsq8PLghGo4n",
  "key1": "B6tXKnq3LuirXHAqUVN4vr1gQH5EnKkKixzX8JrY7ZRvr3qmoCFtpxwhHCWLznFxTuvGRkRonRG6PXLE7LJibmo",
  "key2": "4abNnqsUBVaggNbvWZtctqYbfQ62d4NWQCtERZ8VNXCfxAKJ91s4xt7W2voQT3C7pKdYAP9J8UVuFBP246wyaCyh",
  "key3": "5HAVYgEfVLVf7aEhJxbsjMxA1w4njvKhwvFuYPnvnGSG6D6SFtzT4QM5KopjA7KZ4YE8qDYeGk3ZrFz9X31WWyBN",
  "key4": "r56qJonQTg5icrvREtUrnBiQ9HRj8YyMcka6TXzc1e53dswUhRiAxW8WCFjNerNneZ4i6hEkh2B1rZXQRRe5qC6",
  "key5": "DogS5GRCSZkT5eTcQxsGW3AWByUmGVsJZxv4KQLUbEZ7wZ3Mhtot88YmCVJygJCq3Gt1rDDrYAvNGKe5oL8VChW",
  "key6": "21siKKTkxS248ukoBbKJRJdNuoGTzZWkQhq24gntfFXu5JvsvzKvk45it28Ug8r6XpkLGRbFib2bGQEdNjxmuBum",
  "key7": "2LZdZQVfQPmgDkzisZdg6rgC3bViiM2UAfiGTpp2NSsq61ME4NZKyt812Hvy7titv2Fd5DQ7c3iEbf78nu7vauxU",
  "key8": "5txPL284jPimJmMsRJSPJBSChKPbhN1Vej2MktabERkNJ2KvyQGb584X4XVysaNhbzMdZzj4pX1zQ7Tz9Szhsi92",
  "key9": "5nPTRzc8TSK4fREQWVJUH2GPXkS6STYovtSajDDqcAHkwVTrPXzUofzZVUPESy3NnGw185zNpcskrAGZ4Gxgktru",
  "key10": "2yThdBvKfCu6TFo5ndPNm8wvG6k3ETP6VNvy1iuM5Hrza7xPXKJsFmBSMhF36VHJLXJmr4ehYCjCfX47LDi2c6hr",
  "key11": "aV4fBDgUB1YgMvAzm2Hf4eBmyP77xrQBKMcSG9FPyQUBYLGsXddwaa7CAixeAEaaR4JMcBADz3yzeSpk6umfi8C",
  "key12": "3BhhkfFgwDLGYZB7Bu7yUJ2iaeP3ykEDGKFrc1qR8YRze3M8oU1pQwsMbffjx3oyw8TBdLiWdsuw7K28nELeUCs",
  "key13": "5TM3eiwLBZFynK9Ubt1vUqFaRi3PXMWQ9bepnqF4TXEsGpVK8qwtDeyi8hMqsK1iATGKcZPeccbjxPQgzcG7NLkz",
  "key14": "3yAeKqo2W3g3u1Y4twvXsY8sxvdQsHG7fc7XDL1HaHpYrcQ2q8F5VcsKkJQ5t5dyd3WrjBvSYuYzYjSYSsn7oEco",
  "key15": "5fYsu9dEXsFZJh1utKP6Px1MXY198wvfiWbWL97mmjnqwUgfMARnkTLSiBM5qkUTSqXEr6raRHxLAcyA9W3SqW39",
  "key16": "4hXiUMTDXCvFVVPFFCxtrWewcrE3HQDoDJ12sy6zm5TRWpFHTTECRgFf84eYhLuxqdS5ZGA9faPcSAMgwrFLdzbU",
  "key17": "3PCuiJEha2wum9qH6GbDkVEbngvkRabzh9WMjg32ipC9eic5s6iZtnq17BWNYSqaGdjHCWitpEgjHdoHZSuud4RY",
  "key18": "4u8cYYoVbDdWLsCUtL4DP7yAaWPi9Qu7dvN3Q9WVPoEk7tKvX577crmUeik8yryQAsrpk8isJSwYg8ec43QmbxBf",
  "key19": "2hSguFX4aX28o67dXW4QHksTRMYsG5Nq7eape4fiWVpfmnQSxecSgDCxRT791K3aWnptqNXUZ2Cw4qmWcmHmirzv",
  "key20": "5oL6Xmm8C5asBfJos4HoiQvnFzV3nkwQPfWRVVc24beLk88HfTr4Xuu791yK5Urv2Lu3y3CTjsKW3BJsMEywpzDN",
  "key21": "3rnHeLQkABSbGxx8E2nHiUCzTWjD3h7oB1pHaLxtt4dZs2NZUCPn7mtkVde1nWqoc2Pf996eMezzQrSEZnyTaLSs",
  "key22": "4RjSk8hDiiicDR8v4o9e3yX74zXbPhS1Txgd9BRhbSnL1sZnQhwAXqCQepDAyBZAVtvXu2znt1DrjWJHR6tNQ3r3",
  "key23": "5orEx7yyTcwx9xkiwae98rvUVi26LrRbfkpHAWBCAyHCojsNwwNaQNPr3jrQZexVb7tdEFbJ2MC9tBPdwwWUezfq",
  "key24": "37i3DxrEJFTY8ETYyEBWxpoSmfU4Gb2rTgX5PFVXgyMz44rB7xgkEkgBUVZdnJF9uiHSfrsDbjWPpZAc7i7d2Uyn",
  "key25": "K8ARpQ4R2mSscqfaCa5P6fMCKMWjjLXVG6ncitzrQdV5nBUpDxm6usarVYTbicvucd8oKRR7U1iWRSek2mvqcx9",
  "key26": "4srXQUsXoYA6q9B15oVRcEXiCatTkqbuzBWNXLrTLBWk9xfszwcZyo9UebEbbngRJ89EcWdyVhyN1Y75jSEtXqBC",
  "key27": "3UZwytbtXpE7SNWKHEVpbQvYvkjDHfi8TP9zF2Tk6Ks5c5c1bANxfJrjaMmRPhM8bEDrfK12xQYfqhN5PXBMB3oq",
  "key28": "4LxvSHFM1qf4kYz8sVTita6eWfYVjCmYKSipcUNAkwwsebrdTkdV3MfEa4jPQdq41d9KaPhDjE9NjFL8Do6kJ7cH",
  "key29": "3nq8kbRP5w7MjZcPjhg1pY5UEMQw5FmSpUurdk1w8FjTyX6w5DM88WVGNye2KEotBxjiv9eWwNZShaPxUizef7Xq",
  "key30": "3AKaAzyZ4HefB8j2hCnTZpcb5wEePU4Er3whg6Mk6zjKfseKnwnp1YACBQujcaiF18nc1ZwnLJ5XViNZsJQm3aDn",
  "key31": "4Vsz14Dxr2DmYyPSwhLkrzo9L14qN8yEJqXAc4MTaDSKMKUuMktzJe2sB7opsLBrFZsMZoAUKLZCL1c3FLjGKdvS",
  "key32": "3NieQmuPR78bS2WRobsQxqYNgU1KBBsY9xCf9KV36mX5tncNNJfSWupjdvHQCt6Xz3GmCuURG6aMf2Zp5j36sZSu",
  "key33": "2XtgAjuDV6nSi39eWn8ud6zwrHPaEdAzieKYk3c3ZTgGF4hXVECHxyj1PMjDWQUc7GrZXiAFuAmXKmb3cBEQK1ov",
  "key34": "5GSmQQUp3DPba812gHktSnNy2pH8gsnG61qsk1UhihGGv962BGU6T6ptrbMNhBqLLnaqpwPKwfTUbNx9DSGovYip"
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
