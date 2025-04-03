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
    "Ty7y8WUuRZ8rAwAZSwrCijSqYRgVsgwyMi7FwJqerhrs2whjEvKwc3ADHrhQxukZ2SMVwz1PzsWVjKUCPyE4EiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2x7kNkUXAsT87vrKHA97j6vmV5d7L2jSaouiojTaW3yBfwjhCAs6DoBsn9n4jntjk8FbK6QdQ6LfaTZ2fvNH4A7b",
  "key1": "2g2GbtcAbbz8BAkon7dvsbbrDo5vpM9RwFe17g1u4VWnaA8RJtt6N1brNeG5kZckiFs5PJPAKB84FXDKeXveF2xJ",
  "key2": "BqUGzPi7PZdCYbTJWDp2b8wxgBBDaXvmHJE5Pg3HnBYqT6qQnGDrKzT4BrLongm9w8JXK6aoU4j2Rigpop1yFge",
  "key3": "2F9XFeLLursdaj78Q7Mtm8aTt6kQWGsHPatRNfmKkkyEUxFWg8jtYYMYLdvHSez5wxwV9jfei1F9xiphjp8tE4N5",
  "key4": "25u11sBwhR9WbS9KeS7GTqxBfGLhA9MF4t9REW9p93kfbU9votk7NbdGmwxBgeNtBLEVbXJpzDWceyafHfvBRgMw",
  "key5": "KgYVWsuDtkwXYXxMp6ZHeZibxJneXRWtVM5nVTTv4PxEr7wnDieYLda9Gggd7Cteh7KQdVtvYKnrgw35UMRK8kE",
  "key6": "5Z6d17BgFqXACHjsaxz4rgU9d4xuHNqDe2aonMXg77zi1PuLxmDeKZCFvMAYvkztkDegP7XsS3oAkNfoA3QwmWUn",
  "key7": "5ca51twaeCLNifpVevL5xPbstoLZqz57CVGfUfEx8r5e5juowwTKbZZ4R6VQVKom266e9fVYTZAJ7imxwL7NsW1W",
  "key8": "1Kwb9VAG3DMFA6rpTXxp3VzgG4MbLh86MkHRDCwbT7KX4VaW9RCQs9rNV8nsZwRLTjycprcYDCmHKSYQEYhGEuc",
  "key9": "j6GUgzHrMsmbqYLcXKqtHPAsMeEp9psqTw5gr4K9rn8361zuvFWeXk3SXFQqFBiqLyCHfek65JL1q36ZEhtoQNH",
  "key10": "TUZFdKQ9DedZFirCAqA3t4C28T6SSz9i21DnfKopJcf7uoWRgZYFtpNFejTfTPNm2HSLkbTUT7eo46ZnYXxLtgQ",
  "key11": "5NcbEjAGxUYjBCRjmQXnYW5YHHQ6Nh8gY8mNt5TqWkMU9hKfCBgBuMhQcNHB4LBv2jbeNEEwCJqA3ExftVwTq9Xd",
  "key12": "4mvEtvvqmS58acbegmuLQtwT7z8UGNeCBXKBkUuJ6KtZfU9gogpZDRzNR69ZY8A5sL87omtDtcEqJDWJVv3j3bc1",
  "key13": "6eCFoiNdiFcsVFxpzjYoPsPcmCzTVtkT3VKU9QH9iPsVbmPHU2k1AddZ5bzSEmtisKW5kVCDwhE6TQs53PWVhxA",
  "key14": "CnGynRmaQPwjbdqHFgMScDhFcY4bACXpYk7tV7w7pMrPtgpPsxCZus7XJwaFkdpAWmTQb51h6iU1VDBzhkBeMDe",
  "key15": "3nLThnysvnud8gieDK76QPCqNCXkoB2T9sXq7m6v3BytxBtckbW3PhaUY5zWiX3DnKJJ934uZnMyQsUKKcdkRwNR",
  "key16": "3u4TzXiVjGe3zyhaaE9mnREX2aKiWZx4ZbM61bdTq1H13XKVMfF6m8S7mKZdKBYFJzkWwHREBXWXEKf72V2UFr47",
  "key17": "3ZtsoztkitXMZTCXryRxqzX8e7QJzVkVV4ig6RAgbhbMxmxeTupaheDjvBSg9xLUSw1he41HMG7NtudT8EbPjj4w",
  "key18": "5t6k36avU9ESbJcsqAuch1Jv57B8UwvbWS8Wt7htoy6C2WFteCuGYzmoh3FUvhPyPN95q8EpVyfqatDfwMYhQ3Hr",
  "key19": "5r7vxaPNAswG2MYuiknEFu4Y7kZNkhDrQaqvniPxHFKrC4GMnATzsfa2YJrcKsNrrHWVCUCij3C1wpZL82vtMEG3",
  "key20": "2LgofyiQ4C6kEDAvB4Gav1S4UkLkDH1d9ginpngRUhDNA1bLbVH8ZR9i3D1c6vWustpx1o5Fv8dR6Dawo5zQqFH",
  "key21": "62oUVckxDHEujhrqiTkXjCZXg4Rry3cYh6Jayi39X5fb8tgg7HCdKpewD4JHQkW8Sdycs8U6DRwfC4VPRPt5jb82",
  "key22": "wmHBj7tyAeuL2mygE8effYuf4pGTf3zP2A9bfn5kHwFS95KHE2dFBSUxfjGYkYoduiG76jXYsUJgZnAoba9t7p6",
  "key23": "43NjXz65mp4sjGbAKttzqRqH4JUaAzkKxMbtUfJuALrNH9i8yk1QTvNRbWrMiKj8HhrzpPp9iUPtXHxWc9W3mJ3i",
  "key24": "yaA6qst8QGQeNcJYR4NoqaQ9AS1nq5TWxEk3HWM26RjAkMAgsbuPPet27oCnzWpgu4nYFCiAa1tzWEUd4QbFpDi",
  "key25": "4BBWZnHcNq1LLtfwSB3DgAU31MzTCRvrbzc2AigoAWgBUvC2y4MuXuzHP7SRVaZrzG25KbG1MLPitmVprBoSPu5Y",
  "key26": "2nJ1bFM487jGAaTgHnc5HrMpNyBXz9L1ZzHG5PEMshXQSx6PHg68oD3Ch8bcfHYShhS4MeAPJFHSk35FRPzqjz71"
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
