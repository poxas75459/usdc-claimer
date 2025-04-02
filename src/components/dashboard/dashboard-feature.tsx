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
    "RE1kWJZUzqrcYFY49ZVLhpqRT3N4AcFGB4PkE6Qvb9yHkyx8wma2fmMRkAcajxMzcpT2CcB3LhTVXXCjH3iZZut"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jxjHniZjuWmvDF6rHdMKzvw888joeh2at4L3xYDUAYvHSwpoYEUdC9VKyQGzGV8ghX9uceyj3mdXZC6poRA6UBx",
  "key1": "2VBVmFHtictHBuoYhJHNvdmEQemqpy8Zk2fkXqhKYFw8DhtuyfcktQeL8DbBCVniXuZMuWugMbF9F9YK4svmyC3o",
  "key2": "3waHBmsJRhayLKKHyu2H2qUJKrvmc2tid3V6QR2Gtwv3iMdyatExEXHJYp3FZLydsZFodEEL5kMQokXrMYs1rPYZ",
  "key3": "2vBX2CJ3xsLsq7aFdj1c19hcY2EvvjGaRTN2asdLXSYxFhmRu4n5sDVY46UM5NjtHFSD9RxvPnckzwkskPwh1DD3",
  "key4": "4fN4TXAL752j95nVEh2zUNmuNnbb189ozZosk6KU2Rvx79h5Niyi27tpP5zqWypg36FANFQnus5DxvqabLSyxaK5",
  "key5": "4FcHUbJ2vwRTH9oeFosrZ75tHaX5gUxkbNkRBJEZ9HRkeiCpC5cRAq1a2G8ivGuhoAqgh5mouxQstbkf2USxhizY",
  "key6": "3Hu6KeB6KFrth2FWQrmefTfstpz6dpiycmdPfFvjpo3FfnPcyChEEXBak8JaUL8MrcpurHwV2oA1dbiGZ9AUPLu4",
  "key7": "5BGZwW1dhGgEvK1g4mPvAkbXFPZam5MQV1ivFkopEK7XokDjb8h7WvP8kRG66fsVgNTXD1jQEJGNjDkuBJv8V5M7",
  "key8": "4tdJYCFht5kFDKA3Msib89TowWeN8dXT9vNpdyb3EChRKwV4hRUQ1MFdVC1eP1vv1gWJjmpFWMy1UKCPGv6Zsi7u",
  "key9": "4ZL7gWVsWFuJvegGX4qCrFN8Zn6HuB3iWRd1eYrx979zuJSPuNSEzPJdzfPhtNCgqe2VgRCSoKdFqcLwtM5a9qBQ",
  "key10": "6mQdE5ZJSeShJd8qv6ZBzc24zK76ZSTyqLqHoa9eNo8cy29xDER9nnkpd7F5D3fsagyJUG397VUeZGVZsDajUna",
  "key11": "2yqYYWe9d1NFt8bp3KAXwrmXCdMbJ4BiKzMshWWDNDUotMrHmSb95KkzNcumqaJ5eizTFFywqVMM1vmZaPjP2yLw",
  "key12": "4wvoa6tsapuoWXUpeoR1CZaNJmNqyTnW6SZsciWdJy5Gp6ozQEEpBtrYYqSvzTsqA8HN3A6pBZo7ZMKqgawrSDAM",
  "key13": "2Y4Ej7Tybh8VCeAmwCUX5n3Vm9Q995dZgRLZsvvLyD1G2qL56unhRv1V1hhoU6p5yKQboQTbqoLesBVKFnQetuNJ",
  "key14": "2gFNsCrwsd1AyN9efJytYeDDLgT2da6gSMPSgRzxftnevmMZtVVkAovpebGnE2AtGgX5w1Qj6BbUKxxqXjE5m1ra",
  "key15": "2WrKu753inE7uJquz3xfBJFq21QZ5zuQrq9SFHkyVNhZSW388YWBecrC3Jf7EVZX3Tr1w67UzJWZVeeSYZVXx36k",
  "key16": "5bVXLuDJeM85NEdwWPENZQ1zMM8uhyqayhmD1pWgkxhXNWS8F6qkqEW2Jg2D3i84NEbbTcGk3SWxLiigEtez32Py",
  "key17": "5PHaE8f4b1pXEAnRfEbRB2Qr4mfNWRmBaoxDEAf1PtKAQUA1M6oCr9vtE8Q8oDJUY8Ku3jXh3RptpAu4gpAVeoQ3",
  "key18": "5aK6yVugP7HtWVv9Pu6VmGTe2oHoR9oPKwCMm3vPvNLAygd59vSoPYFjCFcN2gUBrFphNDc83aFBGuX7MaqqzXYM",
  "key19": "4btTCsfGw818TT816nZwF9pSLc696381co2m5suwEvnukP8rscab4Eq9pjA3jsa4pVraFAGUe2o9TpLGPhRLqVVJ",
  "key20": "5292T3Fz2gfTqGJtUDs9cYNsWXr8AJPqcf89Fmouy3erE2faJHsvhSzbKCciopFfRE6sVFtVJxNUXJmRuuwCzCJX",
  "key21": "2cpG53Z2dCaXuJghvT9gpoTYkeVA9YJeM4DSzbvZsdHTot5etgkasA8m9xEZUm5nLhDKNQpjy3zG778JtBDhZweF",
  "key22": "48RYhJFGfHzKSQ5FQMA6hF3d8VPY4aAjfgHCV2KucnF36odyXHtaDoVrEZATaVbuixHK6ZWbmqZ1e7xr5qJrrFC7",
  "key23": "46HwZ56isqyFNG55N7yBSZ8s7hXE9YTnW1oc2MkAEQqc2XGtcNTLSNaVgdrAVu1uyCcNkpWky1wFEFrnZQCWo6hk",
  "key24": "aB5wSYNtUYG81h7YtdBRu3WzVMmUWBmajpYTjdupvU6o15zktyvgqQvL57p4gMzrM1HdLT3HnzonMtzDQErhfmp",
  "key25": "3NEAkQF36EwdRZQdTjkWvKZqgxodzdjAqthrGbEX18obpzahvbYpd5Ekyf7D7NmxNbgzJuHGEFW9eS9ZB6sqgTML",
  "key26": "2BG7vq5LoPXTFp4P5aN7Vbj1YkP6DMAqKeQSMk6UQ8DkNzShBiTLATcCwK4Wkcn9jysdbq1BvxryUUcBW91KamCQ",
  "key27": "59FUhWHqAz2M6YguAtkZpMfLcKbeemiNVQW8Xcr8EXUpbHrzB1MWkwJwyVemwjRyLrbw8qEK3Z3BwLSaSQ7wZSMw",
  "key28": "3N1W6JNUypyNTqYUy1wGFKNNLb3Lk8Bj51dUbSNiviTyTpmkyCWeH9B2Rvbbufrag4j1pjKu2LSdJDbFU7ipphG4",
  "key29": "2gTxHBpSrw7hJvX1dmMU4Kqr6h7dT1ZqAEZrFqddNgez32Qt1WGdSTQtdKRfs4rTqYGpHicCYxiyafpZAy4kQBG1",
  "key30": "2SRLFHspuXMGj1gaiHCsy45RhnhbXzCsk2pxPjXHC5RfDdCu32FMPCMHZrC1wUvmCtoZr4AMkbpuL6Njmuyn6fQz",
  "key31": "4qKUr3GVQVZQ7mfMpNpUMS11gTJcSSVWn36PGCAjpNRrDUWNZcae3pbdxfukm5WsvS5Xs5iUrAsNshKPXwFKRb6v",
  "key32": "5sKFPDD2kP3aHeo3yhR836fstFQ8RS3cT7M3AXmZVfm7FGypxDzwHumuLSYw3uGCTgqofwTaZ8xkjr6gXk4sZxae"
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
