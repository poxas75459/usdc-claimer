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
    "3kuSoJTR56fxyobdjkKQ5GzS4wKxzpuEVdEnm6DnccLNDrXj46bNFQP2PvWtomqsfuEvnfU5qSioRv5Q5AvebNbf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2szpYr6mcUaJ6MCaK9kufnKEBB3v3MZR9oTs3BE2cEPpGyJe9XzaU5TYNHLnYQXDSAJxq42xG9RQj3Tut42kyMUB",
  "key1": "52k6Q8mqG6koTJyUARLALHkuJR9ip3kQh8jfUUQxkoje81wxEGXA13qsEkBAeifTd7YRMvAKoQUmBETd1RqVAmnQ",
  "key2": "4DiMW5sBu4yk6zkrrRBFcidcb34pNvxgY1K1soiM9bkot1HBiy2MSFQbGkVXZ2KupycJwbQNe8xbf8hie7VLghAp",
  "key3": "4oAbyZSv7SJeWUyqEn14xA4giad4DMHW2iVABr1RaQQXJwzfkN8xdYjcDmTzGNMKcSZrHANvPWCXXyQf26A7FxRM",
  "key4": "3Zd5KqacoVzHbJZMiRPyHXSt4Xkyv89EY1y7o5JtY2gC9fAMWGoib3vYSWeFrz5jVkqpXgqmvgeHtHtiuAtBkMeR",
  "key5": "21aTRsvBT3sM8NWRN55BQnQzjWMSviCJRwpH6qD5eT2wRKUiVpR45BQzKP675SuSVhszzjK9GgS9Sj5A3bn8gNQw",
  "key6": "4KT2nddmVZKcNu2fX2bXb6Gxfjix2FS4MHVUEzq8RwLGjNcc7WAcJvT6bTZUcc55uSriDkaf9pcwUkqdEJJo9d3S",
  "key7": "jzGXrAeQvi4HERoLRk74bmpnRb6DibPALSMdHSYA9VCfrpSKcjZzRvpbeKcjsXCeyT3pxo243dPbWG7PDBk2pci",
  "key8": "5DFttiMGfFpjrMCewwSE8pLZF7rj1hbfquw5BcSiRudBo98DZ3wXkDy8zZ6M1GgWVhGRFZLQpKBKVgHb7reVbtjS",
  "key9": "5W6uAsKgAh3Y2nCB88ndFVMDz7zjdjhaCjdCVccdBLohjQCWSKoWAbQbmdQEaUdcb3LQgfV9GMvMKnnVgiDXK4Su",
  "key10": "2zX6AfMQpvYE8rscZuFzGiQUwR82UYWZn6RDZmm3hvCtjiRY8tbjgpPKJKR3u9Fi5jwPiSbUSNWtoU3cKMCMm5Vd",
  "key11": "3xoLCsCmuxLksEdjd4n1NkKHVxa5WsdbTJ5djrQ4yT2JB63W3BsjfVjwQ3WKrSm33fsb6CTAXfTDq3K1gUG14bLd",
  "key12": "41XCCHVGj9LXznNqYPgNoWVUQcRaavd3Ws6psnb7bnXqzgC5MKtCg1LUaU2hiuxuKmn1JF45dNxy6fEsvJEAy3pz",
  "key13": "2CAuS3KCv58Tvyjz31ckZEm7vWKNBPcq8izcTZR35KBJ5ipvodeXSVBW3kuZP4yKhCiP3kRiukWk4KipSPKHfxbT",
  "key14": "zJTe6Jz78Gf9Krt3qTwQyV8bngfUfTXxZjJVEpRTLEBqzgMZb28YnN5Num774CfEKE1L1pCFSayQbvc3bN34qsg",
  "key15": "rexLmYVAy6kS4G2Y81fLhz16WngQDUniHAXi2jtDkb47pZz1rDo213yNrgdVqtaHdT7q3v2dvzihYo6CHRZRUJn",
  "key16": "Ga1vMQ8msKqY8QjEQojXBGt7Ydf9JpSrDYPpsRDrvYHivzQsV462QsrTnkm33N9GAsxi7rqWPNBVz3BSVaKrGKE",
  "key17": "2RhHYderdxoNRim8SsgQqxv4DhnrWEgdLg7iDfRPq1LKD6CXXYYwC8rg63dPXJvJo7paPakiWWTfv8sooC1XSJ6P",
  "key18": "2Pj5rho4vTd6T6t8E3X5tgA2BomCgpEFwYhdndEYsi99Eh7NrxY5hQNg4UjCScjmKUMuSEoTfCx7UqgysrY7MWSd",
  "key19": "3sAdmnKvyaz43jrZzV7jnQtPKbJCBjBwWKDe5AZbNCaccS41RALfdMde9YZHrmAssp9YFvT7G22gXqM8PbohHY8p",
  "key20": "2WLqyrFYED3uEZd2wcR9BW7kEHBwQ5Mmu79pvLMd5sbxz8AMzn6nyBRTj8dgLzet9FpSZA9YVG3K6vP3yqgGVG4x",
  "key21": "4yj282UNcXbhQ9k1gZmwPodxcu8SLvWE3LCyDvyFguniH89V4HGrBBRVpxoqzkMZ7Tf2PToTJ4bQQFrX8FU5pRxX",
  "key22": "39a5vk3rRHQ39FFwB4M1kARUCk5tdzUtTqbxqKjL5ajWYkH4s9erBVUSysFxYHkLFHUNNLwgWnVCC1SeduFoEM8g",
  "key23": "4L8SYiLCxHKuS1ZJYBSasfmB8iSWCB8nHTjyweonpFQohYNSwXStPsmL5eoRFqUFBgHei7FCjGLdMbkdcSWQuDLE",
  "key24": "TwvxWhatHNzPsKEm9KL1F378adAi8t3XyoA1edNbYjcgXxmuxa7YaXzFxqK7LWoPw1u8Kvmh3TxqCGY9a5aZKyN",
  "key25": "4QbcMWgyq7M7YL8WiBJGBzDKoY4szvP1jnfcDWwPf7cJEntgVfGLcku8xLZtwHutaUnRiRPZamMfiktNPepKMkB2",
  "key26": "vDrr9U3RdiYfxe5DtvazzX6KTQP7Xh4yL3H5dgf9Yr851nnbiZJD6VpwY2GKv4ngk9Y2NN8ah9bTbLWWtP1kG77",
  "key27": "rBkyc3tCAXLmz1rdJnWUxspAMjLnv8x3gtXTh3bzya5p8b284yskHLVmPC2cPaqb9PyVRVYe9ESUuguuLCXNNAb",
  "key28": "3kMCknGw8t9yUqDhVfDsJyzMvMSmeksbgytmJVfVW38TqwzewvMyAK8obHQbx2JCHohY1h6Ax15Gct4xY4tJY9rf",
  "key29": "5ahy79nXAiXS4MNAGGns7Yx4HzP9QEeM1HAzErVpi2qcxbFxMbeZzFp8UxpkeUQkXGE8ecxtWjHQwr3AMwkFZaMQ",
  "key30": "3u7kyUZTZ5qvUhBVyGpX3oVCozTENbSWARdmz9uLRYANSy5jEct3fAQmGHGm3bfanDpWeeZ8wnt41aEoSA16m562",
  "key31": "4hUWwAsft18dDVeJZ5RQr1afaAfHctzitPrWtvUqB98gp4yKMCr3AsJX8XdDrWrHDyCFQuGNVkHwqaqHpsb9GfgP",
  "key32": "2JFYERpvqgojrwdB1UPEXD5hms4gWdmss4q1entv8jGFLq8vAFSPZuPG2accfcGfJZh1GFDkPfawwGSAkNu9QabH",
  "key33": "38GvruxGJ13J1ApksWgYhL7Djv5qoiTsAiLXv7woQgZKeWZy5eMrCrfVNp7tc7hj9WfY1oieZ29gLUfoLycr3tio",
  "key34": "MZowe1rZxnAWW6Eprz9DHsxyxbjTacF5uw8bC9Q3UH966AN8cpqu7eddyHwMvtLk8HG1nZNYwtnK52KDSU5J5rz",
  "key35": "38BMgB5sYR9RxECdn6vq5YssofbdA9DpmU7tWscMyAPcwdQ9aHvLze4hFypNSTzBxybN5SuuegpzQVUaJQxpZUz9",
  "key36": "2jPkMMfkRjMGr71NjXPeV5aR1zeF3XPEBVYhwpsFSCdyUYTZ6xyxyR8pWvmC5p1xgz1ZJiE6EWNt7je8nHuhEfaK",
  "key37": "4aMuMwwB6KedwybVXgVYXi55o7RBK6TDtVfBvJw7FtFjPeKa1JyZGUdrmyaLrLFNEuEJk1V2iTGQsmwiGJXN5sod",
  "key38": "5taoZb8AhcyDdtm2e8rXv8xYNB3EY4eB4kLjui54L7mJk9aoRtGbCdvTYUXpfoxsX6AnMTeY3RAAQZcPAJCmxc54",
  "key39": "2bFi6K6zmRfQNUBNxS4nRiorcpB12WU13x9ALgYWFLhaorLZAEWg3aAFFLKcHCdKgH4SXwGngENoe4capvtwkbye",
  "key40": "3you94yQMAvVR774qTM86DJXyNCvScHVP6PH3TzXjHcs7pQBcXTzeNrbKZcak7LE2nXYxEomJzc2C71pMAn7MCV3"
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
