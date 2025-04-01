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
    "2F2SGAKnsTzgFFDWz5kYpdaC5hDgLs8vNZVvX38snUsnQndouEHuiPqqWw2x2S8gJe9NUKhYd699QszsueBACgdY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mZ97diTyYS7nuaJLbjSw9PNnQoEMLvf5tRnBgcKFBQjBi94MbgoJG5PGEWDXXqt37dur7JYDwdfXsnNkd6rhqde",
  "key1": "wX2nypwaczSQc5FJw4R18LvCjjmv8DhebTxLBaXP6xczUgGujxkS7XHDe1BTCedTFMYygzrt5KiTLjgpKmfgueo",
  "key2": "2HKZJkpaWTTYWHc15UXtS63NWKwQwmA7ssQRkDX8KMeddixTBepkqqKXCW19eSXa1TdjGKYqAZrKqSkDxi1t2xUb",
  "key3": "4wzdCfj8YDcwdpmmmo4dY6pgBeLAuE7fNyjRPWMn2JbLiiTTaLAVcibwdkHzsEPASJhMAw8PnovieZcnJGxsieSb",
  "key4": "nVhSt12RT452FWNKs2FnNUShGQKfbLAkjwUQ6C2br2fMU5PJ7yqN8QA7cAw2zNCjmmnzqAjhGdDUqP58y1zHhUB",
  "key5": "5uDNT4PUzfm9cwqQVBr1yT5zDhiJzsivb8uzxjp6nGnbphCE8acybzxePppLaqPnRZJonCFE8L6sfJ1rEvQrweCV",
  "key6": "5N2ft3zqj3tSnPhwNqrcbu6Hp5gNZ8T8wodVokpwQPbj2gYtL6JcAwNgYC9G8mWHKtp8M9171uugnAjVFyaTFaRg",
  "key7": "34ZntFierqLgiieJwqbUAc63o5mdMJN1Hpuk4TgufWuBfBTPRSgsE6XVugS1voU8LVMskkeHmC35ZsCVtcCgKasP",
  "key8": "58VpTcpfjVv3kYteroCzKFtbg7SYq361nTHqys5hEwSE7B8AxDscuHB1cKCNXsuVrxXSWtsM6fKEEMsC9e42wuLq",
  "key9": "2pafiJ5SEGoqcZWb8qDxSmUKvK7n9Jw13zHE5RLJo3gKQVGd7MzeLYJvNSX3bzTcfMDLzX2Vn8RY2nPmYeYGWq6n",
  "key10": "5UqBURXrZN8bRSmdAkkz9g2csPUcrN8TZpp7rHw6Z66xjF6hku2s16PZGHRoEbzz1PZp4rTEDdMWue8embBGYb2d",
  "key11": "3UQjmxVN5BE1X4R6JnqUSWVZYD2weEDrNj6zoLHXHqXF4U8cHKt6XnEJCMGCBq4fpUBDzqqPiNvQtRw76gDUWjLG",
  "key12": "61WhhpM9PFMXLGpczgkzTSBc8xBuP8PWqEWdLx1jpc35mha7a8b56QmiXydz4WmAavpVKkvPyjfmpRz8PaMcaU4s",
  "key13": "44PCdWLeVn8tesTdppZ1gjo7R3SrN6uq9MckAu6AQLSCi9sNvcn3UUQW1H6CWLy2j4itTgxKE623nLLSSAfNR6W1",
  "key14": "5QgHsE51g9Tw2MquDzRuWh4sDM5dXTqUGLnFKHUaeAvSdcTG8aMKXFxakKMopSVhAS4YeCi4QHBNsL6ArJfhS83v",
  "key15": "4DH8uswv7pXwggUEqB42mmzLfm5DDGaczHR9dMznb7iaD6Pt9hJ9xwc9uTi8TVHkxZeucJwZraV9jLWFzkExVsxE",
  "key16": "4DdPML7CqQGRXHzgv5kdSgx24L3XxdcS6wmymBvZhxmoKkc1u79SJXTBnEuH74dSF3TYDqFSTcWWkHsY4TMzLMjQ",
  "key17": "AxoPGH3N6fFVpgsGgk5XdWeVMhqGcDdXYpmLPWBy3QNGhvdxmizBv27edzamaLokNJM3BSpT8DWp4vXy7rMjcyu",
  "key18": "2Tc5E4ZBB8mShyfQ6CgFZt38hkNS1E8Hy363wpYvUv1Pd1dtpDsWgKD2j8CgEZu3ALWHsdDzC2iwN8jd6RpzEQAs",
  "key19": "46y7D6e73xjEhwCF75CVVkS9wGBQfjH8LcrwSf8de5c5Yi37eNnuoWApLHvzUCCsvGqEcrubNiQKqUCEWpG6ABDZ",
  "key20": "39CxqCXuKU7MAvS9ZSEjX6CNN5inFkVzmLxhupZMhvsiCqC9YoU1MJGV3f6kwmL1aYQEeC3xXHhRqXvYmXg9taPQ",
  "key21": "4NAZAPmLM2qfvpUi81ApjiVcTnBNenn8gdiiimjb6T2k38sQYyG3Gf7e5623W9EM2S7d9HkA98hSZHYZD2omMHRP",
  "key22": "2Vn5o5T2tRbKkc2E5F5V5qMNGorbdoKcuZns9pyGbqC8ea5fvfKeidup5GEfm3kZqKTbvnFv5zosPhNP3zxrWVh6",
  "key23": "5uvYJ6YuFeKsfEs7DqSJCCBFNr1EvUskSpx529iCrCf58pzGLafc6Z61xWbc9e4MnvzfG5ftEWtdhbHqESciQumB",
  "key24": "4af9sbkWDDLtefYSN2WnGtA7DnSupQrYxoQP5cboqgBj8gCRDwyEV2fbP9b3U3am4F67SGK7LbcEDUYXEuy7WUJJ",
  "key25": "32rgpPX4M7kZUZJH15WjBm6zXoGBrjc6NDXGjV5GXtPApCeWcQMRZRYV6A1t7jGBvxnugKG6i5hXsezyoBJH1Sow",
  "key26": "2V5bYQYHmBo7hoC17wtLTXCTFf4skk9K579NucMjH8e5kfoRk2dpE9jJQFgTAwVVRT8DjCUd9jEYdNPmEx3Z1zeu",
  "key27": "5x7y8e24Sr47Hu731RXAUHE92EdMJN7avd7FQmfdpaYtuYaGG6v4ASSnA9R78WDVxrtd7mM7674Vhg8cUVCepSiu",
  "key28": "5UZFuwfjjPe7ikC4Fw3mHUVLCq7xnzojT1cf2qNxppC4Ec1s1fWjdV8AS4Sw1mLozfk6WMS4z1gF7EJ2Yphuz1YP",
  "key29": "oXCB9JHaGKqYATPUqFCcWPNDbvtyXxpkZhjDLmwCaRBGgdchB2NZQJyU8eN1TZLaHj2fGYgb24NuqacBN8RB6yc",
  "key30": "5KF4j5W2N5m1YJYhH7iWrQERm5vb6ZDhytGVQiPVu7M8GFdg2wLU1r6ETprbXVZMGi4Px5HjDVju2Z7CmLMfaAA1",
  "key31": "HeuToJZueSZmYv61rNMcY6Hy1z9TK779QcaTRYexv1bqV6WZsZtZDT9YMFxn1rweWbXkLx9WqLV8vMR7PLjGuJp",
  "key32": "4pLDo6iMLQH6hQPg9SPE52LWQDzT9TicmHerAUe3k2weK63RdXrcW6QKqmPVhL3wbGL9b4qMj3JhsJQJqgMkga3E"
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
