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
    "3rbyuRdTjYM8kvs11KVebTcmPxV7F4gRmtZqFZA66hxHK1bfa6ocuewXQNzGg6VdGqJtw6EGGHj7BPfyomVBwttz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yToSXoxcASSMqnxodCDVfLaN2U86ixNChokngsyWcEboYZpgK8Kp73yX2Qixe2Hkbct3sxNoskrQCREw2131YVj",
  "key1": "8c24NyqwJCgoL1vtQWMscPwBhyJ8LmGtZmtAHJQRepYrz6rFaYUQofb1Z8EkGudA6ETeYUNJBQ4jLdH8rb7KoF7",
  "key2": "8Xd9ieg63VQ3zGKCTGnUkmpznAYuuSLK2qr1nwR6GrwwEKWtnuvhJV6eZZq3EA54miriw1ocXiryxnRMWffGMj9",
  "key3": "2uUTHUKaRGkGX6vrcuYHrb2FV79DZkb6kKLSSDgueXy4DgUULDMYG2GdHyYpBYzUqZe9ZyQmwZKwKKavVtGkwwwj",
  "key4": "4fsA4X6PikjhLXr8uGDhXyGJ1DmVuh7WVBPdWRXfcKQikaTkRrtuKbHtFNk2UX6zsThQR51orootc7s6e4tLaJZg",
  "key5": "3XbzzGRj4wCLVDr1ZaaZ5gjjn2SVpcvuM8L92u8pAkZ1SYrNUYZg2oVjS4GPeTuPnBogqccCxBAaZZErWenErfnz",
  "key6": "663rfZaVxHU3LJYH1pvmEiHyVviEXwNLnrDfFa6yC2fLu3tyhh1Vx7REzDxW2CZg47uwGHFPBpwXg4VkcdayJpZT",
  "key7": "5Lq39hEvJTAPrKxt9AQct64y88SpH2W55NPjpyT9KUkFev4TnurumtVHKNWiHJU66n3tYBKkXz7beG5rd6uYzdt1",
  "key8": "UHURR1AAMAr2spRPGvoYVsWpm3qgbjkRAGZ22E4NN79Gp3jagyVMbWty7asqGQffDj2yuYaYv6LyrHGJvT6b9fL",
  "key9": "4a57BTggmF7C5J6bensVRERYAFqRyKmZrBheqqE6bZdSmAZVtQ631EHFk4P2N22uDaUCFRzzyTm1W72Jw432kbmn",
  "key10": "chAq75FnvvJDkTDh3MsZzcYc2pceEHZQKVrAwVVErSMrUdwMNG9kvmBTCFGxSH4gfRjNuYf1Ywr1M78UUUUPTwr",
  "key11": "3H4i7euaAXrpm2ii3tHZ8Hnj9JJHJDCpYfu2ohERSdaQEwL5N369RcoKL5SosGkyHcotZL9mc5HmfnQ2Z9xe4EC",
  "key12": "55Nv836bRkXXRs5f7kZbpy4GU1BdWegpoir8ZxJhrVpgYxBgV4YNj79HzeZiG6xBU3PHnDA7CoFRtLpyf9KxAGxE",
  "key13": "4ox7QcaqGjCT2fs7a3QEdxn2vRejWUJteLraa9q9oDDd6XUqBQbZeGa86E8vWYZxtwTppFdhvCyrvhhf5FMRNLkZ",
  "key14": "3in3pf4ZNSnHzLDDhAg74t9ZNpHM39tbTYarWadz4ZZbtTzUAhx2bNx3EAiQDcxih6oKvujtGyWikN6jTo3293my",
  "key15": "3jKw2wnRZWeaoDf4rtcPcABDt5CLDxu7yhi98Sq19EpWF793uXRwG3pKeSVmdyd1gXdxdZmrS4AHoUwiZ46BtVpy",
  "key16": "4NaxL6dLY2KBs7AEawpMhnUAUqg54m2yXVhyJdE51nEqNGWDffnUM4hB3cb4R3TG1RRM2iZbpDnU62wjjWakDYqk",
  "key17": "X1yFiKqrSKqLcuvReaZivrLLc5b43ZjKyMxxCT6vfwWtGzZeQ6HB5SSaMuUhFM7F1ehTAa5bywmGdRyag6AzN43",
  "key18": "4LBjRDUq3avzBV7sG69sQ6UwcvhawVU9pRpvdQvEtB85Pg3wx8bFmvLxvf89KkJiHyXC2FCAqNDgkbxchccqcvrJ",
  "key19": "bzTCVZHAYw3VRzZdgzD8bNE96VT51FEykbBLRzE5RqYThZMAWCfV9GwJJPotsXhtpqbTnTrXHva2pVvH4APmf56",
  "key20": "27d3fxZNYp4jTG9gLE3U9m8ri1GHWUirkGv2ukYNiGTrJwX1kCdeMaFS4hrpeJ9VqcUAQqAyShH7KWN2L1Cfw3cw",
  "key21": "2FEh8DchTKsGLMEwwEPGXUrWbWQqP4eophC1TMwba3PDzobyyYis1TnQheUru2sqUL7xKJ5NGrUoi2kFxCpqp9VA",
  "key22": "42mCiGoaqNn3G2CQde515RMkXyhouD3wgYiVLhZwSAKBTk37YM5AYEM8afSMM38Vqr7uBf19DHmD4eaCxJwNFwj5",
  "key23": "2EyAS5aLhUqJ7JLntdZdtWxEY7nqfSSPiyxm8Yh9Hk6NCuPg4JaRSqMpQQAqUcqCndnfMzGgG7h7fHBiNfFLBNfp",
  "key24": "4k1UzuQojwmRvRMtF9PXC7HMBHF47uYuNKq9HPK4NUWzBjbegc2GhwmbdDhFeobk1DddmpN4V9RXQpDDhBbNA41H",
  "key25": "ccscKUhoCpiDvjr6BWfjaYULcLQJc6bUz2tfXdWhMdtPQcJxFnrfghUn1HdAMTwsRrK3T3behULy5WnyXcptFQv",
  "key26": "4E1G5apfeWdsYd6pFbwv66mTzASLUFjcmUE9hRbW3iz77ZuDVKWSxJb4LQvSdvMtb8Kz55dYfSbuiamVvbw5ixcf",
  "key27": "qcwYtnbYNGmi2N1pRrEFBd95ZSCBP9d1N9HaKuuLYTQpQcdgbZAq96nBg6HbGrB3AuXV6TcBkBeyf7W98rVcNJP",
  "key28": "KGDYqx3iSUrwj2D2GgCxJMxJVPAMAVyhHHQyfKnaFshvF2wPaH2oaxDpxid1ZnRBsN8mu9U11JvjCRWJ9aYS5m6",
  "key29": "5mjftxR8GENZGbu9zbqFYE2eQE8ySq7i5HnTWYvioruuHsibn8you3PBupMEfEecoStUoNinUTg5GBGN2TAPkyxb",
  "key30": "5Xj2wCtM1NDcWe9iRrpaNC79fatSZKi4Ekzo4tdseyQR8U2NJipt5qYr36mozxkX3iDxyC65JCQXgZ97AjK1NAWj",
  "key31": "29f6WeLS3BS9qTnn7ddt1TjaJr264JsCMFDs2h98h6UJPEZ4Q2g8zjAcpCakRMYZS3Pu1n9XnENoNHPRXMoDvZnV"
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
