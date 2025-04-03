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
    "4uMCdRhMcC2nuZRpJkNH2XzSW3phUD5rLeVb5CXcvHz6KPWo1h5ueN7QRP5q8RbizisNrbKbKsPrKaGLKu5W3iss"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Sn1JhJYjYbochnCngP4hkEkrUYBm7p1msBBJJwgCnRdAfgLuXiyyk6YeQN5jBSiS9RVkoqzz9b1aQ6ZBhCzWMDH",
  "key1": "5NE5d6nDD1kxF2Mwi2Ra1dkCgGFVmWT9uuzzMgxsDhwQCTUEZqP9P5CLkWsUYSFiSdD92Bi57B83hN8cgY1FrVnw",
  "key2": "39i3CYQXDcoYP4bX5VnBZc2YBmZ6S4sNMDwdCS9EVUiuP7h75BcHMFkj8KSK8CCrCpwYfm4xK2KuHiWwAFLPdAq6",
  "key3": "3nq13QCtKMy3SQnJufqPJa3xt6FUcc59VRLFbMvf4QRfNnfyiugpa6Ct4oHnKAC6rNLbXMg92ncktmq62LWStEus",
  "key4": "24K635CP23WZLktuQbh8b8kWdeHoCceieAj6vQJYphGZuaZwTiNv3c6GBmR9gtayGJrp4J7Azwi5QMbtodJr38C5",
  "key5": "3eYJHGX6LYn5SgGU59baX7Fur6fjLLNTvRDmcRGUTdLnSnPv8LPJxz1N4q5sv4vyF6pZ9GMKowBPiTkzXiHPQjaZ",
  "key6": "5WESmNsVqnVrmCh34UvAHqMVhKGa7c3CeAFqVQKGjUMkV5Rw49aEKSJizsE6sXAxBptY3jhgeYdruPU1M9qcrjLs",
  "key7": "2sbasBRws56mrq1BBaetG6D33WS8TjAFPF6PEUHHVYgCrtmAaaxZwyLZ6r7z3apBQnQRCzvXHLg6U5aR26pY3WVb",
  "key8": "2H1wNSyh38UQcC7zVdfwxKTC6XjVAEpWKZmhKk3SF2iiESvWQL6inF3aQZjBvUnvpGnAcVPZSbCuCHHpy6cmYu5d",
  "key9": "5QL5SgcM386Cagvx9NsrsEpkriLRd6xTZ1QMjUvYPnU8sKQykJ27qsQnFSssr18MVAAnHH4UiGYFQJ8Bowaoaskc",
  "key10": "3DTVagePVxKaZjrffohYZwTc1aXrUBWyJrywTzbjUZzs6eeY6STAVPN9cxmDVhcbWUa9YTnNVLg1F9jQpcTRUWFz",
  "key11": "26LLpHnrdR6utbyuDQa431shFatWjqtCRghH7MyM4UoXW26WH8v32YLxsBX1zgrfbZoP8WvoXgaiJcJRuETFE8JG",
  "key12": "4mvYDorkm5sawaJfnn3SCNF3a4tcB6seV4MwCu5ZvbqsQk33pXooZP57nyQLRE953nLkQ2QTVXkeLymxLYHpWRRt",
  "key13": "444bB63JpdPx1ofZFc9VhacrLNd8zar8zNZ41DjGaWXjjBSpgrXXdhZcSLrKGRp3MWagQXJm36mHMiVDBBQGHWdA",
  "key14": "5FTwEcDrLrBnCKw3Qg499saU2Pbsp9tLwyBuWRYfvbCgEYnhGWMMv5GuLyQLTroW3aqSuiEGn43H7joeShyT2Fz",
  "key15": "3BCdoiL3Bc6fxxE8BexAeaWRBgqvg9vo9j6Vo3jCKdS2phByyDPWfvXt1JNcqjZo6YNgVWByaKNa5zxmcUE4cMS2",
  "key16": "558dpwQeRxZkxyrqsuTeDvZi3GrSEZT3Y5WHuzbgyemctMznfLn59Fx4QzBkKCyobQr3YNqJVySQArQEDJ4NHLwN",
  "key17": "3RQFybu7futY8ArqVAxCQtd6q5DiStvq744Xo8dU3dgAkDqKpTRpErrRhbbTS9GTqtGVHDtqkjwa4CkiFbLt2SPn",
  "key18": "31qCUf12dwjG1Bhe2ewCdtG8GUKGSyysmFGnGBLRkApnsDEjg1Erfc4dEJepMFNpoemjCjJqfvoM8VmDCgZk8Kda",
  "key19": "3JNvZp8BFDvx2cvqk4kvat1aZFTFwXsVaKfmTNm8JenAndgp4gw6vVwFPnmA8PiQpuvEj9BbDiHJzXnGgn3doKxu",
  "key20": "5D9uUUQ4aULpccHQ8wnyVZKjxtMFRCdXG9nK4oY9yS1xFvFSBhGdmsHx7ShNEcDhUVj91PVVxbczJEroBUMwzY8h",
  "key21": "2cw1y9VayXwqjFzmQq4T6YNUhsLJ1qfEF27DRxh5pBmJ2B4LaJLbCuJDnciyEHBjhjCX7GADXf7KeRMo1hvHzwkT",
  "key22": "JVcFD3pmPmrBj3SRjkDgN4e3DbuAi4c2wrbs3XQzwX7vkcLE5n3PRWZi9imeKx2XK5pZyUYDwfc6xeS3KPYRXqq",
  "key23": "TPGMgYge4prGikALPDUuEZv3wZWVSTfbW9LaeZjaoTTGXz8n5iiTAomvUnKjaE2V1FLC1tg327xupfqzk5RnD8B",
  "key24": "Woga2LX1TquNssVBjqJfsuiTfdHKxqMAgPxyVTDXQSeoYEkBAiVGvSw59W8PPt2ABjhZD4ubbmTSajc5mAnMSkZ",
  "key25": "549p9SMwqaKTJNkeZP1ob267wE58fqm2nzb1MaoLJtjUEh2JeDcm8ZamxytxZb8uktJJCPFacsWtBZJB6cciQ4Ju",
  "key26": "AQ2mU2uEyXmT2vDZAoUaNrwNQYxbtfqLRKDGwfucMTRJt9FkADuBZTQrzJ2NjvD3jEUr7H6T9AVCWbRjrG94zqo",
  "key27": "66xt1pXcD8x3cUoYdtbKLALaXDUCRMe2uY636NQZpM59NoT5KHhNZzSd7GvVqfVLe21Be2EyKeEztfPdbJuxmaTx"
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
