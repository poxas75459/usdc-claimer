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
    "5Unuz1QWnkVMiphxgfBs4cDbMeAUdX5vvTSH8BvxfKPoxmmuaxNVgGr28qFmcLwdm3SvfRD7p94dn9tw5BrREdzP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54QzJZr4oqF8FXqrsCFL2kXUXeDHrsnuVCZDwweiyk1gEEfmeuh46QsQYndnWFpHEPLbaUiVmcZu3e4fpJvok7C7",
  "key1": "5Jy6ibDqnsr5fr4LUgQbLorPoVwm5jmGJfzrBckLR6pauGoH8qHUE2j23YyQqHVhGdXSJ91qFxFRX4GvHCEFvkye",
  "key2": "4Mh1G3qiHctmJmnefrZ1wzLUQn8EjoKpDGuN92B8vrcU2WxTvTmdcanvDTxX8p2TBCx4FzJbkzUA7cW19V6TsdhD",
  "key3": "H2LmWknGDJ2qKYNrgrdGcARgFQLxeveF3tM7vYwi37NDiLyMa8VmJf8LQpMHJmRmjXVxoajoDtwkKxNbbx93suk",
  "key4": "2S2k7yNiZkQQxSRFFYm4k3BcMM2eqyLXUsysaYoFdYwCXHRgksJsJZFLAJ2ELofGQpuu7RKiJtTRGMuKcmmoamWu",
  "key5": "67GXF6kvRq8i3mZFrAC67WhDshD8MpfDD2r529BBLXeasjWLbU8BzLLhocwMyt7q8Sn3qUFFGZAns99CVnUuMTd5",
  "key6": "2WAs7YN3sqL3CHjV8mJyac2WDvGNcVk84npRracCrvxQJ8mojVsLioUxZ9yvrg3NqeywgVBjL98qkht3VLNkBuBi",
  "key7": "46hwuUZDtTYsxTdmBXNdfQxJcXiWTmmCtzZVSw9LU2ddxu5XBncr7yL3JWwsgTiZapVxcpSioCnu8x1cKMtFnAer",
  "key8": "4EHbZgLexF9NHkAR3BYGHEWNLrHCZdDCn7hzLyzBd2GAGeKbUSRKXsPqVyxZjG9VjLCQpkQkp3sypK1P21MKEuQV",
  "key9": "poXA49JpCFhr1Vjr2TXVXc4YjEKn5ivfrG2HA2LN9WE67UNa38DFjJvobE4uxAFKqKxNz8wRdAtThNYaX1QPrgz",
  "key10": "3CtURYheFs3wSg8j6dwQ2HMEgz9MYSbHut3uospzTCmDR233BP5JjVF9vcEiFZWiZ85JrUsCrX9sooo7tuRRRrtv",
  "key11": "5pMCenVoUXD95JDY9Kfr3dduUcEfwFTKWm3evqQj5R7fBL2MK1M1pZSGV6EJPwBpqAXVUbp4fCutvhiuV2KJ44RQ",
  "key12": "897pAuktYQhpw1TeZ1oTyiPD7XJ3JbBW98pLNdBKZ2PCNYE3W1M3P9rFuXYY78avVSevZDBisKqo828bJY1n6XJ",
  "key13": "57dWPkrUSvuNdZZjHmSDUBn1z4h9rvgk3E4TYrUAiF3gYL4LNXrTfkMPUiztPMYLeGHrzPqTx6VC5qA5Nvr67nto",
  "key14": "hBCaLCgHET2NF5obYEW1Bzsit8macGq2wFgYRKGdbUKnM2JCyLwXFfngE6NJAwzUHurQvgNW3ApZKHdatGDD9kw",
  "key15": "3XqyixrtkEVk1Bx3wB8H7drzTHJnhqJ8vty23jS2Lc7HocQKsUj5nEbFgeh4t9Hk3jp5inPLWVf2wPA13SwjAhj2",
  "key16": "62GZZbXsUVAgqAo54PHFQ4DscfJEVhfyYgFsDhg6Nw879nitzPvJej3sqCRzFmiyH2HVu237obv4kY6FNM14euFE",
  "key17": "5N3vmUpzfHt75DHSudGBH9GHdPzPx6JXSqQZNaBvaD8YqjqLmBwXiH9HrPsNFwnbxdQi3ZtopzKFnCDxvqyGos6S",
  "key18": "3biTU4EX7DMra1MAkt5dK8jfyUbroZucYF9tRzvB9a9P6RqfLJPfhtH7ZkeUDVC737u21aG3gfViGfLwKjXvXdHt",
  "key19": "3AND7rKCp4NF78PacGji2hVUdwHFwWMPvBG9wZdCXWbM8LeWmCakMtLk1aT2Evz6Fqbk5Uea4AoUgdxXwg7KHyVb",
  "key20": "5nJyXv5gG6QPjqAiPpA55efQt7oLkCPAADww4RZ3BdTef9qJXo69zm5BCLBz73tYGLaAp3A6iSixNmarQAQKkwrD",
  "key21": "oYzaL7LWHixnju7DX9mbvYQfAs86LcB7879fanQ5CsoUVJS5G6JsAYYTqK73nQssJqHpMB8xtR8J8C3FjiUfwy2",
  "key22": "52Ld4egJKaGeGxw7RnSXUjuvxYJQwyABzrrXVr9T1873LvwnAdHXeMf1f7KZe3GM4cSbGjmLsWDQ4b1iedVdXzE9",
  "key23": "5ysNzzrqkD5GpHEkSc3hrnuiPfwTaDV4vqvdam6J69Er3r3CV6SrGAHP6erBSJ3WrKWmx9of78uHB3Fsc51aSaw6",
  "key24": "2PyeTtFJBnXGtSVwvHWRupjoTsWy4CEDGHTVnNob1jyBj6QRqBCTgMx4AS5QZ9XJthYqfD8TR7yK9k1ASuDQMAWe",
  "key25": "2eFhyffQe5Sb3pbypcTNGXPNhwgkqMQNEK62UykdYeK2ZcJGK8sYFA5K3Dht39SCcc1ZQ9otjExNvfUW5xahKV8x",
  "key26": "3KFbpPzYzzPgoBoDio2utvVV63kvz6TxwxcyMXVLH7svemgkiFWaycpvt8Lqspups4FjjbGpGBma5n52bCcjDKzo",
  "key27": "HVWscnVz27iQv3H2j9Q8d19yjHk66nmLCMUmWwfrvbvrTEHSNMHJp4YjX5sgnTNo88yNRPR9u78yzkLDPrw9vWe",
  "key28": "5khdHpjxTSvi6gin6xBH4Ju8z9K8mK7AYfttoujHoTXUm5DeDi8WUpbw1iK6TiEWsNQuoqHfmwAqndkYXAZz8XjD",
  "key29": "4WhPsh1xMWUyLZ1TCkKG6G3GyLNPhkmXBpNeP8b1fGGFZtMj88e2CyLK6RJcKBMxhEiAU2GY4yfuowwRFY4Nfkem"
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
