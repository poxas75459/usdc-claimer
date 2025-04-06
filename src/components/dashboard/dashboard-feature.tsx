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
    "3rsmqWn3PvD28F4LPkmfoA54RWyBuBKa84Xk29GFysrWiWHHMMK1wbEsp6cm8Yx2dCa2jgwx1r1FBwgou17ctDgD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tf7czkbVWrFbMxrVzXgdKFWbXMvjj5qPMXEqWdom26zXuMqRmerAWrVwKU2KTZfUJhtoNSFJsg9ZFo1vR8aDbt2",
  "key1": "3y1jYp82TQZLqUgfd2hR25SKst6aQLirKJJCSF1btjAvXtSyP2QK5c2Q48bsNUtUt9yqyM4Fp2f3NoGtbpon62Ew",
  "key2": "4heKHCNNkA79neCGTzrWd6gUYUKrBjYKHxK4VU97gBHF1c2Dq7sRiTeixzdUGYe4BLYdp9oNFpBtstr55jnBL66R",
  "key3": "2PvPSmjZe13XKDaUoEBhqMGsdbRQ8Do9TdieoYMSJYJZ3zGiLPDjDWScLzjuykdRVh5U8Bx5AemzCRCisBaTjwUy",
  "key4": "5JsQRq6CGv6V7Tavvjb5GGtHgjMiRHCEwQduMRdbDreXJ8tTz4fLNjSDZSniFo82ErSA8UgEvXmzTKBN8YNokHTw",
  "key5": "3g7NYkcbkM1k8nGTLHJiTtqRP2DKYiqzJQLNa3iBUgwHj7BKgiTyMZrsYgs8air961jeE5Y2h75BZhxqweqJewqp",
  "key6": "3rLYGggpfDzGgWbAWXGvXmbcdhuPRsFVFzQ6hzQwxMjVig35rANjmfXuCkzJP4VBZW2gKzxAgf9S1WhV3ugiJK64",
  "key7": "37RWsUFhW3usrBDRHdmatmqhvDa24FygPFXsFmxr1QH2bcNLnfjGnrd8DJWnh1xc27HTA9BaZyL9HyUxuqn6Lg9Y",
  "key8": "5uBfMCMi7oxx49hpiMh2PnZ81oj1DmLm15NY7eAhdkzBZSkStvGhPxWacLsjsZ5oipt7eeU2jcskb4CNjUbCKgML",
  "key9": "5S4RadFf1iwhDGXc3XaF6rQE8VzPYKRiEuV8Zn5bA2xB4udirpEhTXePsD2o7No42Ca17uCCeTBPxPMeTTEEA65z",
  "key10": "4FPrWsbXN5jdAi2QkfjiFUBVim5D1gZVjMnFoUULNNgBcRciuAJBJdxfQgCF4ihquhnwMghTh71LUKC9Gd3datVA",
  "key11": "6576pTJU6cGNK8Woi1NrAmJFLeHbJMPqU5mCCj64s7VAEjwkPeWSeUcoVvTM2Bq3qEwb2TmM4V2vvAWy1TfdbrJ7",
  "key12": "4zPtFgyfSM5V2kHHHDtWSAsbeo41kxdKmS5xAC63YHwC1YS6RGXqSLow4vXFTuVhrxD2a4wYnj9FoyNJhncqfiCq",
  "key13": "3FdFpro8x63B5scZ3ToJ6JpzPJea13asprBam9nD1TTDFhqLxTbc1UD2WbeKEkZrDme8iGj2dSceBu87sDQqMchA",
  "key14": "5acKWXLz9D4EfVsTih2bkkKMsrrwkkt8TYMcYVRmwvk3sstY3VubzGnR7dyJCLkCnncEiNqHtMs92mUj8fMufeVw",
  "key15": "5ZpRNTpU41CZnxsoDMs6DXqaY65mDv9SVYhhX2g2PLTnSWxQzBZor8UkD3wnrFyr6zhNhv6dsruk4z2EUABDLTg9",
  "key16": "5wyqCeBo7y9igdxMXX3HsxamTF8DbJpgKxoBKsNrf3AiMCKeYbdySwAk32ENn4q22t4qqm3Vcc17shSp3XM6QBJE",
  "key17": "4NQGsk7JvwuRhvcFtv7y8kfKo27YKvYput1ar2c6wJFyzsmFPZrZnbUUSpAjV5TZkHeZC85TrxLSp8AsKxTochQd",
  "key18": "4WeZCxm7whvr1h2hg1XBpo9ouNdetzvbamY7LH6mfZtvaZdBiUYUBAih6MX5jwhWLyp7Hwebt2RcN6T1gh8Nc2iT",
  "key19": "3Sg86UcGDZ8WkGR9Z2rUcKB8wJdbecgxrStEvVsGoWiS6T7FNPVjL3H6Fc4rgekayqZSCEvaTCtK3aBvHeVi9Sb",
  "key20": "4AjtExzSR9M57a4aoNsjAgpZEG1pvhhKojU37vzysAt8GEPcnjb8kHyVpfGxbhcE8hF9Yf75Mr2C3NmnLUNBACaU",
  "key21": "A6EKqocLcZ3fqBdvWcfwrpBy3e4VUQCVhzXXMstLYfxAf5bGUq4VorYnGkjvKQrGsddA7B2De29A5MmdUtwsfPo",
  "key22": "3nujPJ9zHzKyUABcg45qd9xhj4bvmyDN1QNyQKFceqATwdC8okF5Mvfjqw1HAcUHSAYdMo6GPAWTCApfe8ogosft",
  "key23": "2n13AdsPcRSendZ2qZ12eq1T2L6qLY7DhtiXGVfgSSuCW4TXoApQAJnaEXcvb6hrsLc5naTpu6hmH5N4g4QsiMGH",
  "key24": "5WPeA3a54DfxYZg3cxsd7U4NMGLQw3gRqhtLxpTT5HjsDhq5uWJiyJaoWmyNqbQJrgHoi49wcuLpG8v6PnbKweuw",
  "key25": "31sk4owspxW22wxU7pdPanqf6UpgqBWRbfPtBPpGFJu7ikgkWHViKJRyKnTAEhrM2gUnYkyVcSzCV4mxT1Yy4aPn",
  "key26": "5ZVCDpZvSswggy9TP65V8BkRs9cxJu3EEKWa8NZyUjTV3JdyP6NYTWv9VhCdPXDQxpLqkg6PXTBR6pwHAVcsSJ9U",
  "key27": "2QEoW4WyKGtbRs4vZYZ962hRSmGSrDwjfYZMWjkWZr2vnbJf16MsqSQrTwQqZZTv7joqnbThrs9Uop6JD2hjnPD5",
  "key28": "3HHVuQk54EotTZG569SS3633ZoCkvFqhyhvSmCfX3LYqMgXzw2JwrkYPxdKwGM2kvFD1ghYnW8UuQRHDaVoUw2hV"
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
