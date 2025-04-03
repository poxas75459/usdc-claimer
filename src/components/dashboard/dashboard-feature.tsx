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
    "34KdBuAuK1xGAS5k2xnrveb1WXBWdUwXMX4atb1CLRwHeKVrzrN2EGTE3LKigVTGD5qfpgBV9pZuTwxGvzwuu3gx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bU1PribDVozkBnmJNKgrZ6yiFFpUUpLKc2tmzTksnrbB12Ec95LbS8EAL1SNTy56Ba34Uvh9ejj37xygGdnD6NB",
  "key1": "jg6MhQ6v5TkQgDuL89P69QfGWcYy9HMmfoxPga5GufS9Z55QBjLJCEixPQEJk29kJThZ8xaXpBA26H3YSsXuLeG",
  "key2": "4dFr2NVYuLrCoUvywfxURVjnz8n5fBUAs1FL538BcfHx5jvY9uCUmgpRdyCHLNLghn6GsWDtWchjrhvk48XrMgpi",
  "key3": "4W56gxCq1LcpqSUEYBk6JxDnJrWV4z55Z6DobphkwfdAJpXwiRS2oQdWwDpzkUzzPXG3NW3bF15scZUqEsuLogBA",
  "key4": "41Lop5jxKFnzy9SWrnYophU8fp8rYuwzpmixe3a58z1g1X4ZoT2zgmcRUFfdLsW6fq4j1ci15YHWhiw3GtbLaax5",
  "key5": "gRyrMxLYZwLokGXWBmg5p6qQRaxBYcPBWyQETGEEqFLWZyxLfdsmwQyKc6WavwwWbGRziH2G7kdSsoNbkPRBuur",
  "key6": "GWqgrDAKFMgTNj679cST2m7V9kYhC4yRtizzK72vxH7kc1nicMHUdMq8ny6nK28r3bvV21ZmztkVAjx2RaUmL2P",
  "key7": "kMgBUY28gfLzs52jMx8tYNmXMUMWbyusus38UiEziKY3WfXt7zjNaK83NJdq9c1AzEXbEksUdeUMUoUKMhgenpF",
  "key8": "CVtfQH5KRdpwV3ApaTpbXrWWQLBos9Q8riUJRuPsxNguJDkCFRVBVSmLh44BqSLK5cboDQoxXHWUqEffMVCAWyq",
  "key9": "5GdUyYepJyi95qxQGbpSeDKLzgiXpX2kANiWtjuHwAPY95NJf56RYuUPHoqCJs665kNa58HXk8eCHgv3cK1fyieQ",
  "key10": "5otN1ooW6bgn98RR64TjziipGKuYttkviMVxcp4EEdshxgMii4pFaRfCBRgYfPRdSDafxVuftdZ92GG7TPD9cZMu",
  "key11": "33f2vQmujDtJyGEQ4yAwFpYox8AvAwDSrMDFqvjtjiFTqfHGDJkihmVdSv9NXeSyD448A8knZMsSAj53f2JKEEHP",
  "key12": "4ztkdWYLn1Hd4onSB5zhCuVPUnP5YCLzE7xGhzfoFC1Wt5tLGjkhZFGhQfDENxJBsfzQ1EwKoDGceL2B5KnaDJdQ",
  "key13": "3saj181xPjgvcDQfVSsZf12j9mQxA4j4LhbxwYb5sqDUXCGDvWWfzL7d9swRfTJ7k4R2khjXaZMBo8DMKTR79SEF",
  "key14": "2DohwCr5GLnHung4HeD5nTn6nuy8Uf8yGkidTGoodm5v293hK9835ZNU1PhHLRzPa46d9qRNYe2pxC6S4TFbe4C1",
  "key15": "3HA2uYUfN59NJAvBZLAmifBF7KfY4h9q1etMhpyhbBqcaGr2xT7KZthw3ojHvWbHUr7k5hee5con7brVsYZ1otcE",
  "key16": "344brpRgm4qYYV1jGTp8KAyBXAdqorJZ9U4uDnpzQLQGFkMpQqU9Y6teaEbChnTe4UncSjLyBPzusr4unYfT5qNc",
  "key17": "ww9tugkuw1CnVAtcXs7jQQAGyfLq4EFsPJfiJRgSmDapuKk3rSJDz53Ghi2hWKjsgEifpiwNRYhPjVgtJF6cCPg",
  "key18": "37nirgSAVJtdjYNg1MjCgaVhXeMFK14bn3MnYQuGpL81ue8hC6oyWox2ZvDBN3hUP2dTMBJxGLu89hM8n83tpsMU",
  "key19": "27U8mdzWAEdmjwo3PCaFdi2v34e4fwpTK53m3ohMnvQ8KN2f4CP2vnyY1tHZAkZGZho4tBHVFtVKpCuK319RM4T7",
  "key20": "5EpoJ5yuAPS55kk7AW48pTZhNzqAm3J2jiPtN1R2uz6GV4sw8vEpadDZ5ifQwJN1ALAA322mEL8otiRYhn4nQXnz",
  "key21": "2rfxUr19fsye9VY4Qe8CUSw2tDpJNf4MozcwYK8mP3zcpaAfEnaihVu5YTng7P5eCaoT8Njp9AhMAkS29fDx4jh6",
  "key22": "4FJ5xiVuLCjMTULT7LW1zo5j2dDT4P5yC1nJngBEmR5tmJTaVTCFm7gbqjxyCpMZnRy2LgWGqDxpzTYEgz9GuE3G",
  "key23": "3eii2pXf5484EtWvivBN1Y1smT9TvxLeAWBH6YxFzKi6RNtNAKuftmjxUKtyyXgz5pNHhwBeG4EAqrnfHHs7CowV",
  "key24": "5xHmzJ3bYC2UUZGf37GdyCezN8SMJ86G9uaioHxhhivZBSJCg3DGiMiTiEowZn8XqLKx9QbZJ8ngs4GksVqRx5hT",
  "key25": "3WwTnRHyE3a3iK6on57JiYMFWJEoqF6cNUuwpo4gZNc16bqBDdiW1nXDQFpdAAxuUzpoeCu4h6YQni3db26xeqtn",
  "key26": "5iyPpqS5noJhuu5qqE9xB8GTRxLpEfdSQQUA5Ht9sfP4u8mNNvJD22tViy3ArDWiYtcvofLmLx56hBDVwozqnEyz",
  "key27": "25x6iGxb9U9Ji84GT1JG2pZXUbcDMgLHJauhcF1RjHRDhxfXcZp6HPrLF2M6pXVuRy33swJj5trk2Eewfx4VDXRX",
  "key28": "57xUZSXRMPNs1SYHQKZkrnN74DS9kBhS24x7tAczXFYRCKQ76aUuJjE4CnRGHjsNLP2s6pSQL3Kn4SFrs1RFvkMQ"
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
