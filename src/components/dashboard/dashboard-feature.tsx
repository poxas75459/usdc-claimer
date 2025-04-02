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
    "3kaUTSXBwYzpC6B9GcQgqGbwq7FH4GwAus4rx5YuXErr8u5dm126vwkFfmzGzwjqgQVndTaRMNhuwDrPY6BEwX15"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wi94wkwtU1NdoshQK5SVd8coF89Yy6VzQKfi1Uc1TaEhFRpsP1XYM4yo7HAe5mmn2oZkjEYuvZfzJRPs6jPpD1a",
  "key1": "3ubT9sc9xUKnxxShVmHP9qHHLWX7GQkTJJe3xcb5PjdVfWDAs3KYkkmXCFJ7GUgMZjEBxuRwBbnpGr4vd6SfnTLn",
  "key2": "5dqn2odkpWbQW3JNKrndnp8vmhfEiQ59D8quyxZrzgERFxtqVgfsy6z3j3y6vPRZZo3KGRg2XdaWs9xWdUrW5pke",
  "key3": "52JW4HtuUrkCYgumi6xd3L2F2CwKSCMA3eoBjbG6Sa66vcZCyJfEcaXVdBzevwFuKUTbziEgK12MwsPtFqHwxVHc",
  "key4": "3rpBZffSXRRAQKuKh1MCnZeeuuzb4ZU7TKyoGRJSyezuGHNuNCJ7xFqZ7Kw9Xq7vV65q2DEszLKQ5rz7zFpXE1s2",
  "key5": "2kqLH9EqaaJoy7PFkwiK84Pmapen3GqaZrFaj7uPhJbyt9ckcftU2XaxQwC6ZMkdrbBAozhGn3nwoM8D6Bybm9kn",
  "key6": "39MADfgqdUqzHV2EssQ7iiLAmeo2oZX7KNoXkEtokf7PZFFuWWptNZdEfBGbtcDap3oNWWCLhN7Yxt5upVob9fB1",
  "key7": "2vuom5sHrP448p3th8RrZ1PifpB9CAB6Kkpgw3NNN1DFVH1g8WJauorjvmbTar6qY8gDsGGNpTAVgCUgHic3KszM",
  "key8": "9zZ5ga9mS62n8HxgH1h1qiz3mjiNA6LZTctZAR5QtXQUiMicHCKEo1ht58BbX4Pg5hz4Hx682WYSo8RLfGcH3xo",
  "key9": "2zMr39qs89RxAKWbfajTZsSAaLKYqxxhhdfGm5yqKxuget8Q1K16DErbkCcPkuVWDKrwT3n6tZn1aCeppPEk8CsV",
  "key10": "2w6tojWLdPnhAXhrX9BpW6BPTaPe91gJfqTvwK5LwT8ndJckgC7VUbjZZGYUjsbY3LyAUMUx4a7X73Jsv7mek2q6",
  "key11": "4WcphJtssCzuB2gdtPj9epFaLoDb9AWQTxd5suiJd5omzsi42FLGFtp8c67P3Ez2xQUJ8uD2GH9gfyzvPGreLx97",
  "key12": "2WR91hcVAX4nDYg1CmE8zM584i5sDJgd8BsvRSzo3cVHxHyxmPDhnvkYyYwtZuRkw2nkwuT341PpGoVaAokY7f2b",
  "key13": "2dr578iAzWBY2r73jj7hJP2mEXyTfCuo7vABtHtAgoF6bD2sbesNzb2jQg9D7Q3Vr1dK5TNTbjXUpLVEhyAWx6hT",
  "key14": "29mj61vScDEX3YzUjNLoJi4WKayTNgxF4usX2QT3BeKMTheUvff7oxK8pZ7q3DtjjV7MJMQ5y5bGq1hMs76zwDiu",
  "key15": "2vWA9mcjD4BnvDrHScAat2u8FAZRAqtiURL58CqPn5Qo5uXvx5YcDtyJZ9JcxBoSXpWDhMG6vTHt6bQrPStmsL9P",
  "key16": "Ug2JYaY8Ubno8VtFoY23kX4EhU1YcDRWk43YWQhAhFLnwztS8FX838LevUHKfpKXuK75kcA6ye17HZW349eYSyx",
  "key17": "2LJmvm4iDkBCUR7tbAWyGCMy7fJ558mdLWLu8JJo418WPFuQWX7hMs2JGBE8ZQG2eJcNvj16pV7rw3obEVeRsFVZ",
  "key18": "jyzDFSep8tMDgbodrGSoy64MXmFk3uNND41fjBmTM4nBnyfFKst2S4tVhcAzuvsvnq7Uum9owRZ2zwLCXrNbX5S",
  "key19": "U64fkXSUdjr7mttErjbd2e66QemHhX3D3ozVSgSt364k1qjZRvUAnJpeXj2NT23YcLPBLQ9XaSCXMDPnY33NaxU",
  "key20": "2BqRXFteS9Nf5QHCyqLD6mVmHMutpL77DPMhJzKp1Fi5c79bn2DqeLpWYFwVEhJv1g4sVbzrXntjq8iqKDkFUF9q",
  "key21": "5DHQf495JzUG54jTnanGb7XSYjBLtWYpF8U6MmrNNxGzoXe7AA8yNnSxQj1C3k6Cd7LJwmYiDHNXgrnEfgQ29GmS",
  "key22": "XAkWGLoH2YF9ekR8m8UDzd1n6yesMy7qBmBUpQs1jwiB4TwH1srycvJ9DnweCy7kViQFMzo5cZebwXLrZxycjmT",
  "key23": "5Tpk8M3tUpxAmZFvnuAJWNeg4B9GhsVQCPdzS6gZeGq3MY1eWrri3AP8noVyeT8LRxHv7bfs8RDMexdXrwpcvW2v",
  "key24": "3Vstz1DqjV8nu66rXcHPTUuAW9MLYMEx517Ut6soEB5p3ZZ3NAdkximV9gAoX3G8VjwCFSypE4hugEFzPsUBuqj7",
  "key25": "2No2jmHVo3dh45FDcS9nMQrrRf9SLaREvKLzZ8jkFxerE3d4kCrVhR1PGqqfso3swR3rRNKEmThnh3EfNJceDXZA",
  "key26": "SiK2Fm2rtfdcdpDTw3iKd5tGbhGnhD8WGQDScx31AUgDTs3ctBCge7oUaxLLg1NwUcNCXbzgrECGpPDWgr8TPYd"
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
