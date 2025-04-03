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
    "3wo3mZXkkV9wa3J1YisDMRPe6pthXjkzXYZ7CrW8gSVry9rgxbjUq6gddttQLC8Z6XpVjqJZCLbMpVFec3vXJDAU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vTGwmfN9UVAZMzcLEpPnCyF8v6w6uJdgpSct6oGA7Aj1BPZgvS4ywgSMEXRzbuVQiP7j9GTfqpewUjXv66k5j2r",
  "key1": "4u4aDx3uNuY5aY3AixoqytcA2BbnU9AZTSAuWCMg1kJAzKHY1EVF2qsBcKXbXLU7aMu29LmGegZD6v1j9CMz69NG",
  "key2": "MmqQi1Vg6x2MvcqqXvHajh1y3dgcDfaVEVuLpTEToXktSkvato6C4yN8oUCAGt22ak4vzt2KGtaM2CG2XkEnnhT",
  "key3": "4RnsPZgo2t4SPzYuJ7sVzRekdFy2wQsG9cPXZFtNSDiEKirkTozJVPV85jtKeGxQ68vCDX7gSQUndcvtxkBioK48",
  "key4": "3eTg8MWcLBEqF17r1Fay6cNAjGMEbL4o9y2mi1TKTK8ifZx9RbCckPnT5CcvhZTb2CcG8p9Xr4NSUDrxfbAG8rqu",
  "key5": "3gz6uyAkMPD8XGafjfr5E7BCZ4Y5xs9tj5uZKrxmUrs6YHxfcv2tr6LNGmM2qG1AEVgcD3jR1qjAVQLsUGNk9o5x",
  "key6": "wb68SbM8XvgFbcfa6KojrHzQxX7nyrw6YRr4Nv9cRRvC8DnPfcRox65J3fHeMvZCrU1MYs1Sg2yk4Z4NuNwSxZ8",
  "key7": "4zf87BEeNUatGCU3J2unTonDTaagPe48fBhK7r3e9baY4RDq4nXABorQo9CSdac13RgbPDdCFUmobv1ohxxbu1iR",
  "key8": "47kqrCejsZwNo2M9hGxWRMniEwB5Q4qoDEpRvDKMPUxziLe8TCtSfoPHAmPBw3X5jqwnC3QgfJj4m5amaoo4z2tF",
  "key9": "3WC84anhNW7iHkUmvjpMDLXfSjBdv79Bwtt5Daus8Z9rWJWm9fuA2r4pLnbP8aRzLXpVewo9rsLbaUA6ZVTBYkBJ",
  "key10": "2m3WjiYauiDUeBunz9NcV1mZfNcAExBkQdhkunifMKRteUEUDRdXz6Y44FJtQM5zJL5igJBJzxEggtQCBSahwtrN",
  "key11": "5ncXLUyQeqHkwFQrStgWrHxjXriBKoAEYtbJY5m1dsFrwg1z2qdu55AT6pRWLAu6ALzWaAY9VZxQ8Lopamjp39aF",
  "key12": "34i3v9Zvj7KuJCXk2Jbj9mEBRcpXaaZb2ja8WQhYcqjctDdBgEsWe8P7BPVFDTegWc2j8UZbHkVMSh3WoPjVYNbq",
  "key13": "3eHoSbxDvACbn5j3wh7Z3aqxiRob3uNgQMA5s6kXg7T1wCMw3cLwSXPJEo7cKprCDBVpKvBzUY2Db7NpFe1Li5BQ",
  "key14": "4MDZ2CzVXpKgXZxVUCsx2w5tvH6QWLDX4cFzJd3G65GhZSaPEzCCsfWTFabLp3opUr1QNNxqj9dwoKfVv5LciADt",
  "key15": "4KjVwr5TQaG3asZfvmRfLzJWeP7KjEGoX9ozvBj9s16jHXYhcpxYt9QhsRPLbtG4yYbsMREp5GoCuhcGY2838V2e",
  "key16": "5naufuoEaeqyTki1DBFYa3wfGT7G9SbKp47LavgDPgZAeVC5LkxqubBnUp3wcJzKeW9LVX1oTRkHnnJnStzXL3iH",
  "key17": "126K8gLZSgAkiXt1KYsufBd7f8Dmne9B7oCbhmbCdv2x3BGd9i3Lgyny3na5fZarTi9ayJkNGSrXX2ru3pNvUTAY",
  "key18": "tmneodUr5ut2WF8MkRu6kKC3rVgHca3Mt7eiYUG1BoehzV3gpnJ9mJn5ixXGxeWj5HN2CXsDJR9iPJFc8q6HtCx",
  "key19": "24nBPQ7x8VpN1UJmFucR9GyE1tEzkWEA2d5UHE9marpT4A1xi4vhqnr4z13bTDjc6FDYN7e3vnw2P3Qrh8zaCkws",
  "key20": "3G9u2XDBkegrRoQ3HwX2ctqQUbBcBGUspaVgQxQRRfSAjMoUeHPoyAbb8W77uuNJKvuVAbvwA7DahNKurAAzuL8P",
  "key21": "3kzriKj5bmEuaSQSyNAKWStTqf2L9BiG3zEXEnXbRQApnRUaDTV5DWLmB6FAwQWFSGgnntWVnVviH4Q7GcYYZ7th",
  "key22": "3avXM8AvV7CnhVbdCtsyrAK5Px5Qkx1JCGme5gzCxmn3soYgniWBPoaJsdZgzWJZ3CQF4ahsh8UDiy8jgZGCCjrQ",
  "key23": "25mUf2it3pHcMFnG8MCVjaa82xBuKUkqdCSQ7np2nW7tGFMnsUEBp9PT87uXw8ovx2iLvdAAoUojNYWRgVnhXjBv",
  "key24": "4suzioFmVB6YcocGo94nuDQwZkzcjKcUMKeCU8afyjkKsDsSLMkAL72inuyFFfku5VAbhprJF3KCFv5qEC879ufL",
  "key25": "5baPEJn9hQbpzLfyNqr7CgrQxxTW1XDhF9ikQtXKf3PH9V7oNU6QmqE5PWLK6ETMzvcFvbUnFJzxV6vp9EoVQ7FV",
  "key26": "3SHHEQ51xoCxPtUGdzTUQEmUrTLN3qFQkRi4n2bjtFE5qSqGXtzUvLTVVemgYGb32YHLaqSVds6XKazQTqxdTf34",
  "key27": "4bCbrqhBthRikccduH2SqA3vViu61dYnCsAjzN3DpQWEu2XnvykW7CsU2y7sGV6rpg1ieRXaLkVQ1YnPkgE8g6eY",
  "key28": "2MoyptUxGBPjgDgTg35pBnuFCHcbUFU86EGL4XVEzVY1w8BdPECNx1odndSMN5q9uDypbnUuJVvPPiL4gdcPuJqe"
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
