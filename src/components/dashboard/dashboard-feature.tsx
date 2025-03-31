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
    "2KcwJxh6PTcYE1BZn5kEWGdqCXsoZnTzH4EkznJN5LnjFKrjc62kEH3RHTRG7oGY4iXy6j5mmV1oDdJ7dMggj715"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vw3NBGpcxcb2mynSh264vdHcgZWcEPbukUffVYYyv4wZWKyPTr5iTeQPyE8Huy2RX4f8u7NSBDpqbNm1MQDtQJc",
  "key1": "2B26u6ADt9RopvTiS57UQwwUGXu7waP7nAtm9WZxcLMwWV9o5CKYb5CVVGrTEGQFTJaR63xDr9dcjmzaMBZFeFns",
  "key2": "2nCNmntEbqbDq9jWGjCamtkbBvt6dp5EupGL9G8AebkyuTwhtXvrd45ezn7bmbYUxjdFpBHnxPf9WjRFaA68gSSB",
  "key3": "4j8heyvjUV5FDWERRzqYojNmPWVfPWWkS9GE8bWgkGS251K9RugDagHwAvrHghLhg63ZzpSsvm2GHuyNi195qRxU",
  "key4": "3MJXgXTU5CBCY3D96fvm2eF7xYMuCktbiEWi2mb3ERQ5JPHkv5ZUeUGY6DYTgojEqC3fu1Q5kc1HhwZZfQ4pU3gC",
  "key5": "3eiJgi55GncniU6wrhScGf2giNn2ZKRdqYTdHHQw5AVSKhNg2GDL9r5UQuPToXztfoK7fB18saxRtVhAM6CsSvhT",
  "key6": "2bBLEKJYMCE2k9Y3Cxw58FKrR5xTh56rxq7mXgPoEkcQwsD95U16K5zTcygvZeMqHo3nk5bM8QbkwLesEJJtT4yE",
  "key7": "5jRGbaUxPRSuBBDqay8Ky3CiSvm4Q95AqKGdqAP6Ncg3yByWWS33fpoeEYGKFXduQ1pryiL2joCAcQ33fHYRu47u",
  "key8": "5aSoi9Y7QDeB7tdFdajCVoqPKSFGXDLi7NTbo67eNtFcnQV3vqdxL1XFESVqsSpGJ2RdAqUkox2vWXFPzceEq1uH",
  "key9": "rEnpVcrrB9haLs1c7HZGrBcE18oaA2HCWFGdwCWii3kSwfDM47vY3K5fHtBMSd5drHtypAp3BSDKqiC74UhFLHK",
  "key10": "4PtPF5VSwKoMuKMcbKtmLnuU5rbd4MurNYLmrMQwK6Fjxxp3HppyBnSbn58KFpLQRVCeTsPrswT6wWAN2BhrPinH",
  "key11": "4HFtYSQp2To7mYfYMrxdNZ3fpcWmtcxbWBpRara8JDqLdT5sUpH2U56YcCpACyvthYKRAVWLP25yGzpED99KajWT",
  "key12": "ENL2jcErtjqmivoHDFndPteRbqZSDE2Vf5vAr1P4hvEBTNDJJ3RCnBsxMaD438cApqPGBwTsUgAdfoQ7cZU7AqH",
  "key13": "2q27sfYJvKBVVvu2zsbdAy7pg1Y5MWpRMe8T1xke1ePYb9TwZQgpf5MbkrB6sZRmxX4Zywm8sJLLAZgWuUTkDm56",
  "key14": "2FqtfVcEw1kXtyiM61BbiVSU4DbDXCZcN32zaVsPw6WYSaK5VJpYCp8YXhXo7W7brUf39SPTZHfgqq7uD5BkyhxQ",
  "key15": "4bqbi4JMsXFdTUNhbKHWYFXDsTyoJ98Wyhhf5XNomPPrHEugiCJgfCJEnXPB2WsFxeY5c1gbtQmbp5FNypGG147a",
  "key16": "ZN6jDd6PDpKompfiERm5iTZA3SFzZ61iyzscfSFPvM4PZy17trTFNJi9rYUT7SbrB184w9zHJ9PgexAsX22pFtn",
  "key17": "2fwhgwkzYTDiFzMxAVBqcu3CSDbKBQeiDBiazhUmyCmd4NWucupU1hHSiV4WSNjxnHN2oERRGiLoQgRNuPGuJ38o",
  "key18": "58CCa3HZxgc1zK3u34K5hvxvqYErt4vPkziRqiM8nLcdxV7TCeUymQgbVrWKmTURadYyUoz4PW8x4m2Cg3iM4PMR",
  "key19": "ihC6VKsXu93bT4dUZL5DSLNRaHLdZaw669DeyQxhDrfA6h42n6TWdsmEdiHgj5t1Zgfh4BPp8HZcZD1uQjaAWq1",
  "key20": "59VSfs4eaRojezttCfeC5gMMSqsjk8kc8fk9Bd9tafAByjJFtMurK4AhimaGm4ECibH9DEsE9MCQxX33Cthy4bf3",
  "key21": "3nZDidRb99p1ALj2JMhiqh2EQ513BtktAhuQTU7o6hbMpP4daZE8aAEnx4c8mS35WmEMCwmP5WR5XguAHfcWYt1i",
  "key22": "4ybwucBBeD9GT8VQEPqZXcdwTggt4JeDsGjQEC8L4GaxxPy4nXxNFKb7nFkrMBiRuewoH8gu25hY968AFZDkvEuH",
  "key23": "3zb9iGPZRQvjhfPn36Sq3WiSNJx7zY8cUT7ZoqfUQyAQFkNFGbXqpeycMu3T8tVt8Uogd25fa7mHwh7KmGMBoTxj",
  "key24": "jDQLi7GpUbjXvxhCrQJL8CF1ixHjzb937A9UV4T7VqaTCbHNmQbDCPM4BavyB5MYwDnQfYQmBbZKUC2JkdkhbVz",
  "key25": "5VgpiqKzr228B5t6RGJFMgcD9evNEh5mE7DMDJu4MxrWVJ9UKjDdA1SDBpvzRQGiyogLYGSFCNhNbiv6w1zCuf2U"
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
