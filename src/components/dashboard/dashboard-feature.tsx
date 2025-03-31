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
    "45Dg4tdMRithDDHQ7LdqVL4rKArLrjMLzQyN1tnWvgyAaAtRMLwWwBQcct75GwcRqq12mgfBFyXWFhXWbWeBSUzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ga2euGoVkGP2UNWJpbbYFWFdG3M5bDLAJV29ZkkpATQHB6PQVERAx8wvC1EjAieH67hY9ijoCyAHfmarkHTGfeG",
  "key1": "3UGrB9xMKh1GK2m3HgnXavYruxQCLnKRrkB78UGUtJ1WnfWZ8tUDRk2hZaFdzH4Tm2vJsCMRiBY7ogj33hafBSpb",
  "key2": "WTieX1P19AvKnyBg2uCKiwBcBpUcZr3GSkEgZbE4pjwQVBCSqbAhkGXqQ5sm5i6ME3bVrqJDgu7hkCLwiebLeS5",
  "key3": "5k9umTScLu1XtXfJPHhWfBoBqcGxC3UMqdqQtCtEvRWfQxJq4P4mBvHtuE7oNgjAXgQqP6vrWEAF2qnpVWYCcUdJ",
  "key4": "4aFRTzu8JBnBv5SnZHLWAQuQGCiFFjVVJEuW3pM7zoL8cTKJMDoScv4NEqUqfcShHnJEfghjWSKD7X2RMjUtz7wD",
  "key5": "2MsZghoBKUwiK4rdYxJ5cxperTciLk9pyUaf6NHPedutmNcKDVQnZsvZuoedgiyCRFNCMuZrLrLE2CB9TZG1CTPF",
  "key6": "4qrKV6qvEmsxRA9LYt5vrcVoiHTbokCxzwtoAFsY3z1u3eMNVNsQw4ZLktLY1i9s5bqjd8CNy1sPXtbJjkAZ7dfk",
  "key7": "3D15fQitV97rVmZHrZQ62wb4isAkNFUfCkzSYwXEcoARdwbx4oJNpvqGnwU6csGVEfce6hjyPAfFyqZ7y19Wr5ft",
  "key8": "2Qj2ScigatLHv6KkJvWKsidwEXK9nqpd4bYdALj86VE79zUn7TUPSwVmiKyTGi6ZLirJjCKPGNUjjt7dt9Y9vvfi",
  "key9": "5NJKEAutPNdrHrCVf9wf59oZ9djWnYpHhvJeLfjKsc8VePn2G5d572gSrJz9592TtnSNvLSg5ooPYDYsYr2Hd8Ak",
  "key10": "27WfH1mmfDA2gmnTW1oao5t1YQTNW1VowYecx43V9fXHdE21E3W1DojdgfBqsR8HzrdfjGUNpFRkUMVuGAN33i6E",
  "key11": "3PhyQnjFyjZ5AhaxXjjyScuTdCY6nacJX3fd7g7595kc12TwkkSN8Ch9ctgJcdV52nhmEFbnvu6XCueRAUAu5K5R",
  "key12": "5UyTKp6ChxnE5NiKhfvFR7NmBVdHzb5A7mHciHa7jmZn6Aw17kL1uma1NMbsj4t9tFJoBNfrPeGLAYBUBrrBiwjp",
  "key13": "4FF1wXMnrJBzpDs9hiS48kqsypcGmH9j683q1fxKM6Y48PWq8jvZqPcvtcXws5CFhaFTqQ1UCGPumZnTiHPE7tU4",
  "key14": "3PLm7FTztGy82qCB2M71x8XLtuzNx6QEZ6jkLH2sTkse7rQixjuMAK1zKwP1zuQUTnKTiJ1aGF4K17MT2mFEGgAW",
  "key15": "5Y1yAedcxi4KvJRBziyLaXqivTbunQrkc1yJjV96FGuKhbfa6P3R3vjCMpmwoVCeDCSnUDJJhVnLotYVZPaEDFFV",
  "key16": "3PMSNv27cQbbNqn91mRDcQ6ogY22DG4TnukMmwNwfCXF96Ztfk1Zu6athRFMW7pteGZcTzeW2abugNPTK31XWzjP",
  "key17": "UFmTNn6aZHLenRWsELucAqQvVx8KRR3vUXsubKvQkKos1HQh9W6S7CbdDCt19uQodF5m7UpcNmAhMFNUHCMc6z1",
  "key18": "2oeWzxmFtvXDSuf48eCjq5AScMycoo6gV9UxTcaJZkgDDLJktz9oyu3PnAGywWNqqLJEQqSsYkEKRoKbHR3HnGXZ",
  "key19": "4VhBhBkYJPrATonkwPP3Ug5FHBAQmTPmrQ3ZhruqiYDV3TH4kzYzX4LDXy6qZeTojav8Q7Sz8npP4sc2iBEkqjqJ",
  "key20": "2wBnT2S7J4jfcfX9pgjUpjMA7q1Q6voMvwNQRQ4Gpe3VRED4xqV4G2WfdUnwemXRchQRYqaUgjwaaKvtMcXP9Dxz",
  "key21": "dyYZ1BnWwWPDkie3AzJdnejP6boCDe7tVyHDkr6bkJh3X3H38zLoja6Xm9Pcw4i3vsTokMAPwzdJfxPPfT7Ut1k",
  "key22": "2w6QZHVNShqVePBYHtfiYYv3i5fTKJU2uh9M33uaJxFrQTPjUPGJyGQQciGDBFx4ZGHQbJH9wyiHy6DEnpYFZMvM",
  "key23": "W6bSuSTTe1Z4Cx4AxKqNm5YvMhZk59TT9WuAgFcH3rB4Nn1mPsTuw5sCVNpz9XL4d5gBiJwFQhDpPBu3gPzjXRi",
  "key24": "4ya1xpSkZqpiWP5Uf2TGXUcLJm8vVEhckhGxkJGcW427MCTAP7feRCjjqD42YhT4qsfVwNEAEnehDULvNArUYKbD",
  "key25": "24LKyd7NSPnCRg9eogVwPwGmtKAD9uG2KLTGJJNRsd9kyriCB4wFSea5BL9VG11wcr7xs2HmhCUH7k8omXgouNqC",
  "key26": "3WNAvPfkvaEzWDixgujbzwrqP9oNSdSMAXcDdUkJAhswMycJPuzJnk4saXEmaUENiuewDs6x7b7Tv48J48Xoo7sZ",
  "key27": "56t5dxKXGa6fG9DA6nLSaSMavdVowT8kGrmwqYTAbFLtHwzfJdbVCHthRpgCw1EnfWYxcfBqRwjEjRtBzHcWJRrX",
  "key28": "63JZk9fyfMPLaRkwbAdKGFuvNPi5FmAU2PrYRGNysD3EcSGp4moMvpuZXTpnH4WUD2rPVPBBSokzdjz2TwZCUkW4"
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
