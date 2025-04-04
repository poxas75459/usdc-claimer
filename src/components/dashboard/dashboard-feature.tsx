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
    "2rnXoDr3kQkwDVMYxjMA3tceyb57uiPvEbZxU41NiS2Zytjwqz1XzjxZsqMQdZ4TYzXWUej1frbZUwGbGQZj1ZvP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t8E39m9kRFX7WgUDYQKhGqbfdnf5Bs6ZoqyDBH4sQ7DMd8NdVPm8skBxVgxj9ewV8pBGs9UsDkTorTKESXPFTV",
  "key1": "2CNbBdCeq2AjzygR4Cp1s4agAANWoDwC81EGCpmm4si6iNCDqpFGkKoVQeQV3oHCQXqqc9y43CpLa2Ki8UbGXdJM",
  "key2": "4cT8jcrw4F8b2DiF4zN9TVLx2reM3RX7JDwoALhWoYYTtp8LE7e4SZKBWaXSEUX2C194NHcmYSqX8hYTL8PRwS1J",
  "key3": "4mQHFQj5zXMMqft3gng7J7yr6Pekdpfz96GQZj66s91NDisnBGQJV9ujTuZhecMSbTMBRak4yVgPH9KCGJVTozuP",
  "key4": "67BF1KVLN7Maq7nACey6xvM4dMdqNuhfpy5hhFkDTasx7UpFSjP1Qvv4LDfRo8WEfrWnKG9Hh4R6qRj8cQ93UujG",
  "key5": "5ytw5bM5FZhJB1tULypt2DLSRrgfbaGZPDqgkQMzacBn81fx2L7zEjJXLCeQa5udqR1nEeVi4cJpjcj6ZPpC2jNp",
  "key6": "3CKUUk5UUTUeVELfFjpXPnqMMrqBoaLWUdipxxjuKLdHJCzvA6XtTBCQYxnSP4tfFnYaHxE7fga3meEiqkWyuLVS",
  "key7": "dXar4nDLgghb8avPYP3w6HQkdxindMNGMGAdHdzsgDhWcQL6j9nA66zHi4jaeG9QmaZs5rBzMrNZqnmCgrmPQrn",
  "key8": "2ZapfpaZudtNJy2K1x7waabcH2WWCbGewvczax6KuGmr9AbfUT65GxvNeEz3JLCVw9YuPEfJbYZSsXJXv2LULXyM",
  "key9": "Fuv8Pthxw9A1cNLmp9oma2dWTHkQEiW7RzFaQ5uSCLD15wiWJm4zAVtkzKVoXmVk9cXs5XqgjjffMFfxKedLaBR",
  "key10": "5swHgyWEy7AUEs5WJ8EKMVuxsg1E4bahy1W7CyiRopUU3t48TLnTfEXQDvAs1ZRthvyJnRogKLaWp5JuAzFjDyEc",
  "key11": "5eGktj4ypyuDwvvJM9Qtgxj3ZgesJUMwk743XyZdBcMiKJV9ZbjgEz512FMwDTAKCyPasRHnSXqUZut8h8nqRETC",
  "key12": "2kgT1njgvVjirZK6b8eKsd1W2QczSTitg51yqc5AAPLdQFpAnFtMD4JcH15bJNYha9pVGbSrHTTcFoSySHn7nRxa",
  "key13": "9bCEUktPyGQGWGHFYjE4Zqs7hWyx1q6xVjzBTmWBJSyBFyU9cXoSAndWKCRys9qZtM1iwHP9RgafF9rQfA4jUzh",
  "key14": "3VkFge6Zerau7a1cJPBMVz5ZtrCUYaMZ3fq8WHHbXjpR4mNQK3eSPcxLZtXh3KX7rtHBaDk9RaEXW6bAAbnBYmTc",
  "key15": "5njb966hyw39QREKsAzngW5VGgCVRC5WRsuLz4RTQ8K3vMrfVEFEaMbx25BAKXoDmGNQWQiQZao6v4QHYsdqtJk",
  "key16": "5YLQ2KG3b46SZgcJkgWVYnBiX2nSo41pf2F9nJRLDRfmK6zW9vjziVjWNaH2DrgWBF6E9pTNKP9ifi32KxgCVqxz",
  "key17": "F2Wkh3jPWNsg1WcdipL7JsGVQBVch9dsh7BpeotxuhTtwZEmy76pSDodUUREAimoM9HpAaU1PSEtXSikGHQ29j3",
  "key18": "3EQm9ZSSzZq6dMhJmgeDEKW4ce7QTLuYS84kzZ1WBC1Xc8vwUvztYrxYYmENGpTX47M1iHrvNid7cuagZgdR7kot",
  "key19": "4j4WBnw3YifnKrBLQLN2c6xwB48KMomwNv8g1nswdFq2nwzb1nB7b2fyGLchWQd9mS6VEDviXYdkuwMdu84cpYU5",
  "key20": "3xoSCWvWtJycMxMXfF6RGwjGG6iDD8XKpUy8gbMMb3Sbt9gDb7dYhTa423qL5LsbpGSBxdzcash5fEDX3cbYbsMZ",
  "key21": "AaADMsisfdsjqicnw5X8xhXrb6KUDs6uVNa3HaE3kG37F3YyyJmsaCvz8FaWehJrhj6tktFJG2g5M7safPdnNv5",
  "key22": "2Bsw4X1RGLcXZtAbHmre4KjkJEESePrpKpBT43wQkX7xqzxtd79TBJVRqmniKzJkvDBxqesQhQNPj1WN8SQnc9wd",
  "key23": "4724G2d8EcjQb7yxy4nznJHqdyG4hPkJDm2AdDxX4EZpfsFN4TysuYuik6A87ZGE1vPdPi4k71iZt5WpS7dgHyAY",
  "key24": "4XnqZ2nE1UfwvZvohSvWjPmTmc1h81iMSLrCqiMoR99k93Z7marW2RZKc7GqoyPJgg5GQvewQM2Pxc3o4h4smAcV",
  "key25": "31LiQGG9ur8ffhVD7BKz8unqdw9gVfSzfmQqmgYYZSjWUy6pQFpMWo3RDTL9TnZMjWgcdnyad9XgYzCuuHWUsVZi",
  "key26": "41ydes5JbdDbmWTjZzGsFhWLY6JTqf4rLq6wH44knNex1EraUWpksQvH9FBj6ewWATgvwEuFNLeJDpaPJnKoWCR3",
  "key27": "4D8VRUQqhAa9jiUFaAzPBHhTnTxZe5fFtNupfowoAb61uuEaXQt6Vr7VZpJcEx8Riz4qHiakDTEGdFQcNFS62N4z",
  "key28": "XoAwVRnDgStTPqmwXW93CoWN5Nafcr6JPQcuzFStuiXY7yBjQiKt81Zt6d3mqPz2doLyDzrUzMHxpHWngfX34zq",
  "key29": "67ffZxWeTabYKktiwA9NsSyUz9FcpASvEcnbJE1VWMdm3XABpu2fKnNMyi7SL6EPmQtdTggZMzrCP3XTYTJeGkE6",
  "key30": "4BLct3QheNfE9pKmqHdg51ZCLY2WwoGxr1cWKuhidCE848FtwoMrkTU5K2r1GrmsweHVHTEp8nFiHCVdMBzWTqdG",
  "key31": "3Le7rHBsQcveWFhFKZBfCpb9XLfFdyUSjGxGQxu3FL2aF1kydShspfa8sV3N16C4vn61cYuKmYSmcz9sy2n1tj23",
  "key32": "iordTvDPWX8gHbqXF6yhsyziCT7jrR4zQ6ETqjenLMuD9KipdJ4v3BbNrsu72Rit5jzakX49Wp2DY4x7MakWBxD",
  "key33": "3FJ8Xtw1ovLgXWkBKmFRWEqsm3L24c4ubpEKLNtvwFuwFEQsXzMCCzyRn7CzwW3cfYfw9eB5vZh6K6cNV2WuucwF",
  "key34": "4iqx6zfwBFUbShsYKAnNSMscyRwiceNT8QBLRPneNVJDpgt177qUBytoVMdpvH2TGK9nUATJjKi1eWSMN8V9t1ZR",
  "key35": "3Ebk8AKsPHTwgp4TqNtywkuRQ2uER63mguNzPQtUiH9T7Fga3wrFzJzMi3BoWDSDGA9wRZoFcs58RXh1yLvCvRXh"
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
