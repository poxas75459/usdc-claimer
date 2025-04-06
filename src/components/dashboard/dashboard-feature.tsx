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
    "3ev5Tq45gAb9Xe2gVDgSS6KXPq2m7zEymKe89Wsi8zPJQi94sVp6NLk2LTXFVuzkYCNcUUzXJr2Y7kfSwRKWqxYG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66vGueqbPo6kn3TNnaUabUgS68TP87uyCET1vzqh6kYDzZigJuSyvmbvQxrDpxHC3uxHQF3GYF1SjrghX9y1hKH",
  "key1": "5bRoZEw34gpb3pJsH5eizS7CcmYUy5Rw3vbjLYx8MFhdNXocrKrmabKhbSGwXvjwSLojs8YroWbCiAAQPNwnztKh",
  "key2": "4bEPqnaFbyiH8GY2EXLnN4MZFNTbS7a64GoqubuZqaXUWCWPK5rYycj9cKEZxS1Y12TjvP6uaUBKbzoar2ECmPiN",
  "key3": "21PPUV4zwYkhSnJ3T2WgMz95Q9oTeyxkjHU8UWjSCnuowUzaZjNcmK59V1QdjqupjcpRWZP6NgTp2maQtyVm99GL",
  "key4": "2Dbfha3hjsuTwbEqmieERKAqVjpzToytdfQ9YDAviacUQqM9Y6Uvn9y7AqfATnX4w4H8SAFLXc3Z8piBaeC1YVuw",
  "key5": "2v7jx2RZVggWGXXhHvKFWNRXiRTbB5t9qHMz9e6JPmkoKqPf5yCo4ZKmhWN2PqbB4WK18A7UTHMncW5tVsYufy4U",
  "key6": "127jQv8uX9sCVT1qsQJKfNrk3FyngUhx1iaNhLw3imuN9n9w257q85SoX1tpz1n4juwUPFv4H2THRuT46zttjogP",
  "key7": "SJr4jrkx1VHy4z15AWjcZ1bu25BddA455ej1NKiEwVh7MsAJqAipUFHqgxAvS8fNFT1mTVm4S7xpcPbEwWZujAZ",
  "key8": "3fnbzuhScVofjjY7T5Lh2gR8krvLNSGGjdt4y1BF3ViNcbutHCaypRhDd5vyeA8QWkh6piXXTdniXYtBMP9uEwu1",
  "key9": "4CDG6eLPdpVjQx1iLgmvkyFXVY1MNHe2MybZFeRCUdkZXQpBYm1QCQs5cpJyH9kbTRuJkX61BTJV8fj342P3ZYNR",
  "key10": "4EN7TMwcYKuSB8HxTVfnbMj5kzrZAGoFpLJoomeSw5af4xNLGMvVeQK3wWzMwGWsYvNXYsKPn3KAzCBgT3h1LSnN",
  "key11": "2NqhyVMKBD5WgnYuDvb2raKfcbM7oMnuETUtbJcaQUhKqP7i17ZTWzJVgHo528LP5opVhbe96yc2rpGjNbyjUyeT",
  "key12": "5ihKabzkNJWL7tVNTYwJjE3K1FvobjVrUPEPx69d6mXkicqi5tP2y7xK9Mny9bsdPDsxR2y9Q1L3n55m4XFFFgrY",
  "key13": "VuHaAqd8vZ3QkuyYqcNJW8hNq8H2J7c3nsJwHmz3rhefh8ggTkrtUMyZoK6mATrooZY5khp6igt4drNLV4YynK6",
  "key14": "61ioWStuAKYQttBw59NeP2jR1jNWDBPJ7BkgrTAFTd5pZdpuDuAb5kn3ZwNzTFTbt964L24FzQ5BeEHJrUvKLF6K",
  "key15": "2kFn5bAYafz9FZomkxhgJGru89F1fVrkvY2kFS42kArcUgyjSWn4Hk7ak2EDPSDYdMv5dgMHSejBFuqYMLRPA3jm",
  "key16": "2xDbNHt4BV1BAsVstG3Vye9BRaqv9kj3ep9nS5QUFDnjPG9o3P19cRUkANnftk1D6HWqyszBNiF4dPdLdWxJuMto",
  "key17": "22JmsH3KbnX8KBLmCXXKieuZP3azt3UW4YpQwX6z5KHcrsmApWXsKP755hWfMuyrvUG3iG3osGCn3SExRbzX1q7m",
  "key18": "TMMm5PgKgyfpQox9HyvA5BSyBFXdZhKhoptTCKvKXaYh7YhEhJRDWwjuVJbz4WoR5RTnBJeiC6CVSoYt6P8u8c8",
  "key19": "2yXrfGJg9yyv8iwWXNaEVCic6XGVTFucEDvSdqhhmYt2APT8sxpbUfKkrBN3apW5mHreo8kJEZBzWyj25MF9ubHb",
  "key20": "2sJUUcwGQq32WuJytLD8PuHMuxYpzoW8ynxkp9TQSxEeKxsprKptXTcgsZKrXWMRKBBYJLcChGSwsJ765y3Wrq1R",
  "key21": "5HUHffVS68VT1ikEGWzjP51L4fVqR5R7Cr4oSxdroBCttWjwARu2898KDbTWmiyXzYTckWZ96pxzJ99fBT4g3Ev2",
  "key22": "4DfrdtxCLBba9jDMVULZvykfBWP3jyX97EeCadsx289KyVu92rhHpYNr9j25GZdsV8w6zzJSLDTrazPWS8uoudfb",
  "key23": "5TdQEMNznW8WxGdB97jh7rszggzx8TpZvdsjdoTo1FbJzYB1h4oVzH69M5WuiVNLZEprgMxXuzCnDa9QfPnisBSx",
  "key24": "3rryxPdmVAGBrNyMV7kAGZ1T23s2hkgWDosqocJcD3rUP2CPZX26rEwUXqdJGWwkqYKgTwgY2JwQQ3BT4Tcy6SNG",
  "key25": "skbUkS7DenKohb3wVDAyo4XDMJEmWw195bBPTNUx9nZT4VSGkpNR3xxqYtH5B1zNYr3ruHYLyg8vvP2nPoknmCm",
  "key26": "2Xy7pvG4VixMA7T7f3bH77r9j8BMyR3MEqneo9RBffKBevCpDhN54rX2Wa637UMu3g1Di8ii1A2hpfnepYQwE6gj"
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
