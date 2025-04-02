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
    "5PHjRcoYaUhyqg1BKfvrbLQw2NtwUqjm11d6FtCWNGrEzyoTjFMPrHCy844iG7QSLVGBMrpJf8itK8c8Wi6o3ctY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "449EpjmWV19efvfuWhBwy4tG99CXop5oo8DD5FfeX2GXFHvKthYB9jWARkgpqRvz6oEkaMhQRikbkm65xJ7ob4kA",
  "key1": "2Urb9tvtGESQcyYhJpEpcyPWNaKCNDYjnwfn8P1xWwzx6GBErwRFfuUgPp187n4xSkZJQJEgsF98UKze1yd2djth",
  "key2": "5q4iRJQZpB7VEFbULXb27vyRHab6Q3tpXbXsKT9qXjpAmKzmkxhh7ryhhWYZYyhdGCu6DWvdwdJURwzvNf2RCYMn",
  "key3": "2cy8XY84wVMVtiaKKn5esbFnY11zzzt5Pj8QzFdBsVpoDPHVQPkEbQgUTQ6y1A4ncmwFyUKQp8pWxo3fUP9Dcwxx",
  "key4": "54fP2uRrd3LzXKQdpmGJpC7Ho5h4kdHABGXM3KPnxtuT47HqYAJj5BmbDPpkMESmCsfJRgQxhQyNdevys5aEai9",
  "key5": "3nREPg7gJ9ieeN7qUqwZLBmeJuTeuUmmany91yeggzwwWZGyv8M1f3PVMXTpD3nfarjjDuizGBcyeiiWMyphQhqY",
  "key6": "3FEBKezKKQ5JneDcjyTUht1Z1u7UhBmRbBqjvFwfqyinhyGWCbMaAYdTaXbTwqcxx1iNs6a9jCMVt69eYDuKprRd",
  "key7": "FEFTBPk2C6KDzU3MVFYZhmZSR4DeFqJ2drENdn1P7Kf9H4BCBXrcmCvWMrEKMAJkZR81Ggjoj5TDzRiYCvzK5Vu",
  "key8": "56vunHzrFzfqYPjaU13gHi7vNjvpAi2zf3VimnbtuVqKDCPtPkoQWaL25oeidE98xvs2qdaSPchJM6UajcNrwhBR",
  "key9": "5jaYTirMeLe4KyTr1HdHoGS93XCyYCy9he1762JStkrTxGSPanCVSTynxiomWqM7cHEte88LVmq2JJ8hVya7jMD4",
  "key10": "4E9CjAYo4sZGxFMQpafwV7o2wXPSyJD1rDfSmWDzeyi3Unigh7QcNjzRTRi3F6E2MWcPsBZ4XA6e5BvJYqnnN1hh",
  "key11": "4NE3bSYxoDvbmZmMowDgnS5oZV12aj9v6e5KT73pui3ufvYUjBXuJZbc49P3ZRJRcKD5frikx1EvgSfQVXYwpAHF",
  "key12": "5oBy3WrCPwAATohBS5XVjwDHntbdfg9zJ29ydtz4axpghU6vJqmnC2XEh3CNfbeQdK8zEF6aAsKPCaNXCS35vFHQ",
  "key13": "49h2UeF3TZ9PWNgWTANiW5MYrj34N8EX1kJGuhHjWV6m2V1oFRzkKzm6gJaLLhAyQKkYHZ3SPeKimjVTTj2xK9wp",
  "key14": "5MYudCzoECQCsoaRZkYQWtZQEM8HpmHqttsnaR3Sh8bua5iWE24JCY3ZEL6kVrM2PetL8wGaUnmPKeDv9FmE4N87",
  "key15": "2BhHAaq6obfNqYdQ4FeGKKA6ukAdVpsP9eSa5vzK5imVCL5JzQ6eoqJfZBr4ESfNE1M4ynT5nSkkFqq8NHky4ouN",
  "key16": "5CJyREDBeTq85662uWgA74bjtYMWifNgEQix4ht7jbwmH3n8RuvbfyeWqtnQ7uidk8YHyfZGCHEe2SnM9EfNMoT8",
  "key17": "2bfobZDfxN987otuR3UzWYidXk7WT3BiRmkNZDqxjzD3wFHMDY6XpWV3KHdhtCoWnGjS2YsRY3vEkrWTPzSdnNpa",
  "key18": "4VuSJFsQixv5brkjghS5WjqJhzcP7vw8zfmUS4TkEvJqpq6YKfjfEiGqd4t5in8zVJzQNfqmjPpnAVmVdcgYAhXo",
  "key19": "43Na5mVCjvmB4dVE9KfJP4gcW3dEG4A4r2z1LfjWbmbC2Uvm76ixkViTKpmkqMUsxqDWKu9Jn5CPeqpGVob1XsxA",
  "key20": "24Ua6qqazK4EtAy7623pR7PUY53wmnd3MgYwXeKtEuPzU3pfdsLkzPuXFqbU8pTb8hHPmG38CVJxkYxabDJBjWEB",
  "key21": "SSk3UafkDFS7R49tETBWUgyRVfQyrJgwWCuMEeg3swW5v4wftStxTWy82n3DLYGurYqTbzv9Jebreb8EbhuGhbE",
  "key22": "5wXC6dnTmXHvg5qDM1YAAS3EkanLGbwE2B4KxDH8J4YnXcpFPEgs5Mv2QJGuWymGQ2MBZeeGY6PQU1su3ebw8o5W",
  "key23": "2Tg4UgwDzrNEWNbRb6cbvmwyahkXQHhYVRL7hEykMGJhZjvSfFm8Hy4BfEjh919NfHp8Fjd2DxzCuTjZbQ7kcGZP",
  "key24": "4m2qH1UBidsioi2TGoxg7uNhxKbWWvNhCkbyzBzjoKUQTzqxdHbNP5NH57HjGrZp1FbYh46Ujm7RobSqQbDzBed1",
  "key25": "W9mhBQ9ZHz1wMSE8jz5rjzVVdusW5V7mqrT1zaEBu4quMuinAMyc8sksWXfm6hQ84XwByMCW52MAju12T635NwE"
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
