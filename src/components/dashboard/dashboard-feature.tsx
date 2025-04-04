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
    "5VK1D7kW1aeyWhQhtCKUxes9rk9HFScGQgAALxgrridAdWs8NYP5NL9ZjbSZtUCXfmogT9NkFmK8ouDMLQsgg8WY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Mh6wM1NXiuQ4JCztPuf1NiQcoSWooPr12YZpsmwYWS4KEf8T29rXZmpMHUWRjpLGuRtW7LfHdHoW7Cg7YUHFdJw",
  "key1": "XmaRUzao6coVGv3DxBL2vMmA1c38QT5qm4gHxS5effPaoYfdvPrrxntVcHAk9rGAcWHjhWouFriaMSZXoVaBBpc",
  "key2": "KSP3u9vBSTYhg2H7HoM2qHoKAjWUsAZ1jhHkW5GTYruKQ7htpHKA61FbEFA2KyzMeW8jpQkZj3gFeEcfgrF1GTN",
  "key3": "5fVavVeP8iLpm6w6AsAB984SYotZiAcnp1sSJuH3mS7tnxkqWLpjRTubzrTJQEHJsGaQ8uUpYQNsAeRYnH55zUQu",
  "key4": "3ZaUSpwPfYWxYQxUdSycWHC9omCqijhPSqyWxQh25rGJ1xfbaGYBQ38k9Qy1gAR1XLbRX27YJraocQdi4K345eih",
  "key5": "4Nhfe5S9wzQdhpezrrj5hVe3JeHoX2Fp4NmfNYyfQ67Ceg2ttysCA2Nenc9ts3uWWFEiurazW53XCMrG6LvBKKEQ",
  "key6": "5LMZ9otFpVZ6i6rbEZWeoNFaaqJpaqctNB5SA9i9U1TvaTuSyai5vZpLSNwBEch7ecTvrsyYu1ff8Xu6ouzepfDh",
  "key7": "4kUPcc9sPyV9TBAsDuo4sjKMnX3PsmhfgRfaRpVfV19JsDxrr231cjmaiUTDzLtnEjDrYFGX3VinajeLaY5bJK3s",
  "key8": "iuDrssGzqX2Lgz6JW6BiTuXgh38x8CTx7GHr7musZNkQxvQzLpa2QxUe2X8mZ1hfhpNSMN31WdKvpBjp8LyXqYb",
  "key9": "5m7ofxtUVyd4Vog3U6mcMEyuk5PpV6a8dqaCCBo83LKU7B89hgfy1mCPaSkGn7E3gAQKuBFwv6Yv2zzFYcXq3KPD",
  "key10": "35asyCJqFskpCDNJALyfLy4PPc64idQMYMqhWguLZLkNzoE2rzwy3UsSEZ9p8CsWbwQZUK4gHtsE7abPAWLJA3e9",
  "key11": "3UJQ9vormZCLoB1SBHGToqso4oArX5wC5LCzKtcw43bHH8EBM1a4j2eTcNoNmXioRVbA5jVhgkNZntrSqi7JQofF",
  "key12": "4818z7UDaDmjfrBPLtuahf8FQXJDT7QKU2HMJaydizzsSaLdAx1g9DBUFn4WfduGntLFpGUmUKfWTNp98EQngAH",
  "key13": "2D2tcVqNxWjy2smgdY9XuBifksp7vTe76Zia2GGWqZKznbnYaCiASgfYdspN2TLg8Ve2vCqiDS6cnKjS8wy4RaAy",
  "key14": "4AqE823pvCRsgDTnzch1hHoysEkdN4PgvbwKcLBKC5uC46mGxHf3WNZe1JrBbGbHw5H7zjMCQMdoY7S6mGDDNcrU",
  "key15": "28hK33C61v1axVCXx4ykXUJBrbsBsAqXdAFiJk4er8oXQSMHbBN61QL4oe5MaPHAtgJrxoMNDCRNjG9AzcPCRHGY",
  "key16": "5CfqTE7V5e9ibGpaAfHmScsfK8n18GwYx45hBjyA2k2TvkJgQqQ3CBMcBsrDfs3D3co6TjMKF8PU84fkBgqmxi8Q",
  "key17": "35vBRVLmChbxsdCR7jXPmNMUuqqGZVzzbrrtJbjKMGpReaUJiBFoiUP9vFqD7SPVvETZjnGCda3v2Enoqit8Aftn",
  "key18": "4TDKtTwo9tfAFSw2oxTLw69ddR4sFBnhFkpVi9iySXcY1VTu7A4vYuh329e5QWXEw6iAKJFLhzBwE68DUwb9PKDY",
  "key19": "3yXJVXjuCXA5R6fqiEZcp65G5yhqtBiyB52djztvfCFCWTtCo86e8wjL5LYMu6CKqtRbvke8WSqARu6Nn9XnF16x",
  "key20": "4seYwpdjtoq6voZ51x41dLZLVQG6pcJYoVhJN1SGjj3xvEkC8kwgJkLj9cQzGqh4m1cT9HL9c55jXr5pNHi7Tdko",
  "key21": "dsBF4TTYPForQVFeRfbSqC9eTuuMBFfNUqVfGzxpjw9GA2CdrcsByPtiyedfmMEy2r7dta2hsXyj8Wp1cJSpW5R",
  "key22": "3WWdCoWS86tB8Pv2k1wkJEEkjYrdxT7UN5eAEuXYBWnNZZVQnJj8bAVbyT29xDf2s8x4nzXSAskC3SZoTVQSwCxB",
  "key23": "ZUi5SRr4G6JwnaopC1QSGVDPCJH7G23Cn9TfPkiYjeniWDC4wsxdfYF3KdZx56TAeTkaeiFnZeCA5PEnHmQkZCR",
  "key24": "62r6rc5XU3VEnjicNZzfdJWiMF1He8k2VbbzshP7u92qHBZHWcfs2pSUVvkF2qVDDm5mN2WYp5t98RgsJkk3eMdh",
  "key25": "2zDCx7E19Mj1p5sjm7KCZ44Hx9Z2h1R1LqEf11ZPC9VgZCLm8tWYxo1WhHeK71Y6MHJ3qdqW4WToWajsjUA7skHm"
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
