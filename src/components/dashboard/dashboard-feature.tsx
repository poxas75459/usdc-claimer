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
    "46EYCrEKQoQtcMiQBsDvP1hXUsAdMX3Gn772DzJwgpbfYier92R78uWmBAeiSCr3Xt1Py2UTtQxZiJpgZaqf83x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kVGEQxxUsfgPchwoQrUSonytko2u3gLxvH16u9Qrc4NcQKLBr57K3aPRWrqwW2syT3GykGsZk2Neuadhw2GGx7z",
  "key1": "55U5YYY9NMHihpk5sgPAc5cw3cip2zKEWpBxtYRVLToHE9MB8pXob1KStxTYbDAy5wc4fd2a8cSudWbJ1MuDRHux",
  "key2": "5SgiQFBVTghVtzazg2CGukVn2rB51PppW8oCivhZNqV39VeyVQbxKsbipiSfo4FpPPAhnniaVtGaGuoDE3yvyTLa",
  "key3": "4GkenGW9UdWrByidT99gbeFEUB3zu9Bp4achczVC2N3dayCVgVvJpmb3GuFiE3xzHTYumHDPvTrRLPs2EudaV26d",
  "key4": "5hanC7H6gKJyoJdwinm3yQ7M5h4V5vsB8CKc9yiYRdEmv8G2EdSoAdgnfqiBUJr3c8JNRQzgLK4Q8R48VKcUGQb8",
  "key5": "2akuTw9CAw147ucr7fZo6hhfjkC1YYh5at721BUtg8FpxJNF9qq6TwAgLpmLVJGtLeJou8xsJjYthyMS7qrTaVoy",
  "key6": "36Wy66gEufQLdgz17rUsuUQHWJi8a79FqdkjqebeD6i1JSjwtyAsgkMLgEL77ovNpV7jrVXpRwFY9jk8WwacByrR",
  "key7": "4kTfwd5TwpTHrGJivkLeazq6a5cHyRjNyfYRiP2TYSC9dG9NPjj5gaNjZ7aSoLSpxkcZQyM5U5cFbFsHU9LdxWGC",
  "key8": "5si4t7Re8xhH7wpCNoJrS1gFH8wAsFkFP9f8X4sc72jeZsb7xQo5bHyTJwGaEJLwK8uT1DNA9P29tJzC9L5YausS",
  "key9": "3cNeVcDpxvLBDghmNDNc3SeokUA6njGjz6DyKwErmtmt8KnSiJrUFCLd17LB3zNPE8XYavWXbWnNqyrg2HgTVexz",
  "key10": "4TxWGnEaDPeujrQMRG5C5JGQMQbjyye46UmiRmoEdeoov2bdyDys4f8ugR7Z6H8tvn9ixENV5kjLHvNPRcrNy6aF",
  "key11": "3oauH6GreKnRYETer2JNnNfg2m6btu5tLEjxu3MFhxnhSPpTto32p4gz5sapoqztaVi3tnH6izaC4k8L9ibNBwPk",
  "key12": "39TYQu4KHZcy8bigiuE4b4A7yWuGvsX72KCe2RDqocm1pbumGuZvyHbQuuvfkeTA3w1ba4HnJwSvUUCqH6uTnmS1",
  "key13": "GvgqUDyxzzzDKYZFNzGUbCeLZVotrhijKmsWYJ4vVcNRtVYxEgtqbJxfmSxGRkbd2FPnSeDiEpaUYPDVLANhZJg",
  "key14": "rLoAF55D2x3M7pScEDo8Sy42LQC51Y1JQmpoHJtGYCYr3KraC99EdaqkTj4yWsKyZ6fCbSJfiAEzy5zJf4CNDCV",
  "key15": "5WuNC8STBpheHT1AP6BWcpTh7kxmMzM2Bo5N3piwikk1eWjRsriwwpY6BYHjtfLS335DWwz4TQBuXQ9Fzu9amEXp",
  "key16": "3mnAGUVTNkyWnjENLC42wQVvnGKdSnku844zjwmemMfb7PnheZ2oekj3NmTgi4NZzR6Yw5Sp66LoFEh6sriFqcsS",
  "key17": "379T3GNc6FDkENpqkrQwmZa3cKYJ8jt7bpGbrdKKrHwyiHqjLnPzjcyKLJf9QddRjEeQibH7DT7ZSjJsCFyZTMEU",
  "key18": "2R7ymMvh2HDpSZ1eb9zKt8ZnMQKGdvENnSbQX1SSX67RHPsoS57desCqppWZtcAXRWP2ZLpjwRTwZVvwHJxoR4ZF",
  "key19": "2EExi5FjQieqtMfaFTnqDHiHUyMJgqBgM4ub7JoYyLGGZkbzwkDmGNuLvLji85s6hcDXggWQkJDDfJpvPsc84quQ",
  "key20": "2vqpSvKheY3Hsz4MyTDxnwoDdy5U3K4KKy2cbGWpPHjnDaRfu5RP7anxuNJ4AxEXPn47jpGS1atkxDAQpPuCcb6j",
  "key21": "A8xkYhqDvDeh9XWZ2q5mDcBzm1QEgnGifbib2iWVqxijnWNrmBz8CyoBo5wjbyKpYJqPMv9yJdBH5YwkBaTieXc",
  "key22": "5ejqUAQuLjsAkrYR4LaRUkY6Ym9Wzz5ciKLQoR65EQMj5nkzE2183Nd311nvQP5zPehyjSKMYXqaV6boURdkwa3g",
  "key23": "rwasroY8qFe8hkG8gj4DFQrMQn75ondrU95v9T1whGZgs4e1kfcwuDNdUTU4ydftKhRRPe4hF3XZiLxQumx8nrn",
  "key24": "28o7dYTkVXkwXfjYC3pqRikJRs9KzSue89kgNagkcetnD6oxr7kK2sq42unvhaAoSaJCUVtUKG8z5fQbUmkyL2Fx",
  "key25": "4W22pLNxc4VMVa89N6V6q1sRfYrQiRoy9tz1k8zg3QTPPvouWF9YA6XJw59tjJjh6BzmphLCFkzp3TBhDMFcMvAs",
  "key26": "3HEooSv4Musm1rUE3SHYNcMZbdShowxTsVsFY8CudUff41RidUNcRe1tcyvoTfuSQWL24YPECBNhbKXjjMh3WvVn",
  "key27": "38hpuJFRzcJhTTzG4GUbCRmHeXRJepc5FfWZV2JKRrNTPPBtyAfGZchUZzJDz1tN8fe9bKtigcd18zq3QCMDAFNg",
  "key28": "2uwF9W1MP1RGV1fZEq7FNDvvRjiJi6LSDWxmVRZzxsBA6LYR3mi8HNkahz85WVcHz56pH6Zkcq8iB8nPQzCtG9QD",
  "key29": "5LTBbuxS7cBrWf2SE26YW1kaWcD3Bc2PzJWc28werHt5aN94oyk8SQ2u7WxCPbYCMgHquDkAo3UJcXZZ3gosM3H4"
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
