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
    "nGxbXjY9gSvXXjUnKKqPqHHrJWgva9sJZ1CgdrLSJ7NKM9ZPeBaCGZ1Qb1MU2g2bCZooDMAhirGUxmiuoyBnMwy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PttKtbpo81EurQZSAoAABx69Y6sPAukjKH9X16YWxLX9SLzzjk9VYvqsdfoA8GYY5pFWWme1zNjMpQQ9CkwxaFT",
  "key1": "4KdgS2LjhfwXoAHkcA82Zs15XdsHCpTYindJtGtNKbfeqx3HGb24ipkkqyTtfTzhMw8NXP59tRzF1auVGAPYfC59",
  "key2": "2Wm44AzR9uLiiHgMtZ38xDWFKYdv4sL3oZGpxd1AMNbJETqKmH3jc9ey4WmojpK5ktXQbfeFAFB4VwmuxW4o3QNK",
  "key3": "4uoWSnwyMC5aJ3xpSTbyuCpEEPS4rKrZ815mxbCNUdHCa3Q11bj2wkGfEMKTiNimoLSTyaFrbNYaRpyabpfNkYWP",
  "key4": "3ThQp3CuHKgdiNrBf45JgMtKWtik7iK36DPTmXCSi6qoiP6TM5abEoAGszupp28XkEZQN1pkuueg4P94KMJjKQCU",
  "key5": "2W5cn4Gd8GkWkKruFnkkz57jLpwApnMpLmyChZpbU8zjvW2VVhvmjsMUFV4EgrR6api4yMm6TFrkNQGGCKusEDbS",
  "key6": "4fbmnLiXdX5ELvaJcUT1HxujvWKHfibxDtVrFanJAoQuLnFXpY34ArwxNbSyeJhvcmJSeDdXj8b9jWFbES6wA9TN",
  "key7": "2upDR5oqYPKaCZDaKgCiXRa6t29hbvjDJ8tYmveKqeiQLyjQfvNn8hu8aUxBYsgdQnwQsZ6R3JzrqbueaK7mZLhM",
  "key8": "5YBE47saYrRANm6nhXsZWGdWmfQqEdY8WoUmuDnZgMzzJWWArGsL3fjuorPdoM9xguhVpZE5yU8FLQHhATeJxNYb",
  "key9": "62UgnXZdyirp9BRGQbK5RqDYEE1anwhB6Qc3PPj5bjgf7jkaoNh1g3DcjrQqQAE1GAM1Srb19rqNyh6mHrnYYGWq",
  "key10": "67pAY9CJv6yQjBTWynX3EjvPR7e4VBFkboyRvLKnJxXu4ZH1X28pDRW2SAP2gs2wWhnScN6kA7qDZAnrNusxiyux",
  "key11": "5RpxiANUB6D4sh3GnPjR3FGJzP2eBrK7bm5BsSGCfjjByqtegqQiRC9jBjsvfAFeDxjztZeuhyoWnUTE3bdDpzZW",
  "key12": "2PzG9rYiND7x95mqqTPhxSLwDcaChcfXVnkMkt1sCNdJD9mygNA7mcK1kg7FvHXm5LQ15YzfgNuDuGzaUaYcEVoJ",
  "key13": "u72t9yqPoXcnTf3fQskXGyJdBM47eKTJZVGyZi9WGGFXjchN1WpzGcRvwwPAaHyxk1XybTwmDV9xMhVj7C9QMo1",
  "key14": "5G9PTtH8JpiXpR8ZdJFvx1r7GXToUpTxoo9NVYm9PxJLXGafQ57wbSmNDNSJzyoXX1arStrqLuzinZFb3bW3Wbz1",
  "key15": "GH2KuBiNp7RjnNrwXspy9GFNShFWCZRFDeiTSe6JGfX1q9FjSNq7fcPYnDrqmDUHgRosAUf3bTRKzfeCxZHcHUs",
  "key16": "5u2M6BTgh7d46vdDMFWhy81TqHLZB66a1dHxQbLaRgYC7MXoJWwzGdaWVp6SUTFm69DxWm8r4aodZsE9E47w4Zp8",
  "key17": "oDV6dvh2ESW2ZSNPqujiXyH2GTcFwszZGDXf1WePpyo52t3Pe7NHBZVNkv9b4Ki733bP192No1R3FmjReVxmSDH",
  "key18": "4x3BovUKfVZy4PtMa6m2HX4q6YS9oQzhFNJyZvZLC1sDKMXDxjnkhSZ4Btz34yN4qTAnJtpu76iRM6QWGFYWTEVy",
  "key19": "5Qqan7hQUWfc6LRiEbw4dtecV14FmvZbojNXEomkz5GM3rXz58q7mA9hba9u8tghNKTsbFDpqw8kcp1VSiJMnP5x",
  "key20": "55K4gF8sBqhtzuJ8ZoNBQeQUtqzRcKKfB7cVMLHvshVYuHcbpzbdx6aVRVjmoFCKtXkKuKRgzkstB8JeMfzKsBX2",
  "key21": "2yoQKpSayQAuU28WiWcksSmUUVc3xXNpDXBX3qHgjyekaxm5rUyh2QrSk7D2xqWCpXm31W4gS18T7jRxMtQiMUx1",
  "key22": "65Q66Y2VHQoiFKSgCASrA45z3uwvHu4ek5Sh1KH9KC64xXSgbYH8o7Bx4iWuNda3gFoyz78v6CdXPfkNb8uEAcRi",
  "key23": "L8Sf6MFQnaMTNo2Er4P25iRr5Eg5jJpMspckVVWAwGzmFopzBQhtPiDHxquqro4nHk8BL9WER6omCyTx9qyviAY",
  "key24": "3keukfpp6Paz6wQrU5FGs5qwcwVyqkRM3rZvXmJy95xvAvC159smVtGbP5gT5dM8k3u8GRSE2coon1koQ2nMhnaX",
  "key25": "2fEfMXv9QwJgTpmS71jAmtfcCY28HVsmsZjyEysL5wN4p13CmSRrXMBHjNQ3GVRt9Z4FbwVDzB2yds495sh8UkuA",
  "key26": "23SWhPhokW1Hy42BhNyrHNtUirRuGapers4pG2DgrjRYL4KZDz2uBppbrV89GLAe4upbvXjWbs5juUe3JGh9n9Fx"
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
