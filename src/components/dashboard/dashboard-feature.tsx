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
    "5JPTN1U3dzmgqJK4c7QgWiDBEvHPTbfPiC9LFppJmz9c2nEaPnNYP4Cj21ScRW9BL4JRPppDrLrC15EyYgnKHwRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44ChjfQ7614dYa2YVgAhYNjJqZdSMUzSStChMaHu3ChGb7btMaj1ff2k719Dj6kNsiC7qa9JrhhcqtZYqTy3oQWo",
  "key1": "5GW3zxm71Qe7inNaZMK8sQZZpsP2CA9ijTj5a8pWxswydmQHmrNzxq5JV7arPh9UtZ6NRApFcCq84YujT4HyNYR4",
  "key2": "2BqHRdCDtLmzPGx9ZcfbJe6JVSQZ3jVTpFpJMZGzDRXXhZMjFDyg3E2EPto86xdKLLzHUx2dm2fnWHrGXRm9ejhX",
  "key3": "2ZserkSnjKH9m3S2HLE4m1YvLZEstUwRLYv8rWQ8wVatSNu3YHmcTQz3BcBR31SuPeCsTUQz1Yr7gsctXfifrDU5",
  "key4": "vwnpzCkWxuz7pBZrBVVdt8cM7LKBYag31u27Q9XLpNxmRXo4m25xYELRc5bNo97GxMq6JVStFdEp928gwM2KTiS",
  "key5": "59eeLd9YLuLCqASUMxkt8eGzJdH196hKqLWhgagPgjSBfNNP8yqZQKsYNXX7QGnYd3Xi4MzPDzDQhek6Qspdajsq",
  "key6": "4zU9t4XEZELTEdxhJG6gvmk8ESW8Ami7HnUVVuKBEQokt5z16QFT58H3hn42WmyY6NRVY4TwUJbjE9tNLG7VML6p",
  "key7": "yF6emnU6Snf8FcyRmWNVJKsZ2T1JmLqrpyQZ4iLWX65RZmKFJkvtosjSzXXpk1vpU5ik7j2wk82Bo8ktE1xGSc4",
  "key8": "65dEy8KvFyFSRsvCrr6mW9VSqnT7yxRVDaVcTkZdSSX3ySdg387VunEqbGXKDbWetM3CuBnun2A7mpMaZPw3uGVp",
  "key9": "58nMxyQgAMqxV5W7WDew3KQW1Js85ErusEYKZTEHnRcdBW5dKmr655wVVRcfQe42bCrf936qDHxfBVnjvJxLwphb",
  "key10": "5neDG4QHPX4DCdD9ZELmdL7QHTRqTmQAZe2ziJaHyca7PxRyS9r55yYBqfAGgrDoZNbTiL1qQR2KJoAuWaDRRtma",
  "key11": "4YAtUDapzFD1nkrqUjvn5mbg4SCizgzVoaKtuLWL3LdWye1tForNYUSyRehNzMuyo4P2EfkrcDoSpuZ5qbPD9rfN",
  "key12": "3dvR9qekpF7dMbMmyxTQbK6VvwrFQBSGYrkeyJdaF3Dfa6jJyv6EWBgs4qYCWgKizLeNEamC13raC5aFnCMoe8qs",
  "key13": "53BMSUF951tAaEPMwM5fAntnuZo3728vBFjcUGoEtBC9W8yaXvf72BticD5UFFhFwtE7DNd92hSDiZSJRkH5TYF7",
  "key14": "2vbqaMbYq9en6G6RzZ1qcF2iao772rj3zeSCeZurmCA4r1E3HZPV6BmLG9swbWgrgAwZCTeQJCawHwBMzMut6EW6",
  "key15": "5uV183WUb5ffsb1dVo7CRyCbwiV8zs82EwCCdAVoAs9rz1dXVjJ3V14sXhZ84JeLph5F4SjNGFr16SFMDux3w4VF",
  "key16": "mgKNCQmtga1WHfBNRBNGBVWKWx78fooqQ3f6HCG5NxSYXgH5VHetpr6hnWTECuuxLC7BaxVdJaiJHFyQdiRMFRv",
  "key17": "ZQTNDkPv6zfJ9ggiAAh5Cde2rEARUS1jqP195MPh2BybGutkHTW9eoVgnJeVir1N8HbLiFmTrH9HpoPBDYJEzQ1",
  "key18": "644EaUSFjAPVgsmWYMbLk6K8jkHxbRuss572d7QjvYt1Ntn7gsS7TjhdDS7WCFxdj486XquzfsFZx9voHyQr4zT4",
  "key19": "35mDnSqhp47GspNYxHXFXBj8m7eFF6uMfRm5V2DwgtER1LgCE9WpSnYAdzmMxz9viPWL9CRUkzo1GNU1qqGJiBvy",
  "key20": "5UBTuEWCuGCosvrmZJncpogRP9FrnNTCp8Rjz9wNhMdWy1RMG8Q6T7XeG7P8fq5Y29i9Un2ikN6zVPoGaiYnDmBa",
  "key21": "5m6MWvUGPVy6yrwFN24rh6MxrvQ1Ns6tygXnWvX7bedQFwvX4ZNeNhfueiFYq7yGT6SGfZVnyokPqNtigNqfrD2o",
  "key22": "4So9TQpopVhLSkQS8RtsXojKuhMwrT9ncAmaVG1seH5guZVQRecdxJbASsKHDty2JCBGeWXu7HTXdrWHvv1pFm9x",
  "key23": "5QRaSBq6MtcSVS9vWXDshgJ3GK1D63m3jxy1h7orKB6QXXACVdKhNjWFugA9diNkdQQm5LHRMnYssTz5xQonsGmP",
  "key24": "58Nm4hjawM56mNcTmrePhn6dYYdMWmrvAx4mMnfWpfSxhkemGrFFauVqakT7N4MmiaQRxrqX6kCn51iqU4EneeHd",
  "key25": "2Ph465ZZSqcFf5MqzftToG547qNwn4fL5ejnk7AqRV55L7EScWNwcBYFLvoPt8DKqzwZsi68gZgny6iQJ6xEMpjv",
  "key26": "9nE2DQNmG4NqrMhrMV4EwTsgYy2EQ1M52NpyEx1LKvNd6i41W2fZTTksBZTHXtQ5wX5miuzS49nt56ou5sZzbZW",
  "key27": "3eySesmPzgnYTB526SfauDgKshbZXopmwGcghMFaua1h3iDJRS6gPDqEMe3DhvGbsnU8zY1qDhsWMyeoddbe6bwC",
  "key28": "DW1w1TJNbkTezDkYgf94wkjrTS7c3mfe98Dd3DK12ZqXPEecZfbqpVz7BTDzLE9TemSrR4FJch7BPr4pds2uzJJ",
  "key29": "2MP6hwQjLfyh7dPtkf72LRLcE8Qk63S5rhGviv9fw2wf7md58pXfi1xGLtcV2vhHUhAGJh8yNf7HNdbATA3wazLy",
  "key30": "4G72XaF9Ww9h8vcizfgpto4Zrhy3Tef7czLCuUJjGAei7ZqtYo7UrHAc3p7WEAv7r4mZidFHXrHCwp61EGX9HSAr",
  "key31": "39aS2fg7vRjmYSJqfv4vM2vCZZaB3PMgqayNHfDpebtvDpHtfiXvXbYuic6em1VWxTfLNYXtnhEXknoe9PwnJznG",
  "key32": "3LrN1kQbeqZcPwPQdppSz9GrxRCArameqe8tsdhpvjGEE5MWU4hGXFQjFvNAwJdvQy2c1HZee2SmuxBPZsWkQano",
  "key33": "2n3MWNLaTzrp8EQYfs82H6RcPRuDwHVgnRUn5MFv2UyGvGq9vnaec7JdV1SkfsXxFXYuH77koAJ7NasEBSzTrJsH",
  "key34": "2YEJHyaceHSfKja8zpV6MeAMadHKRQwdAqDH9MQfoXYcGyPZ3tZSdSrjWknQJiZMaViCw9A7uJHvRiACTRfon9zg",
  "key35": "53RYhhDzoWJkM2oea3MS5rP6cv6BHRCTeijP8XJVVYQsknQWidfU3RQjDLJ7uKEyzN9xpt5HffmbzQfy2LYi7GgE",
  "key36": "ibmtwkNUJYBVpWsykG9bfoHEFCPCxVQN3izQoF6pLyz76XkXgu1smNU26ufTXj5mp1nGg6QSVn1h9THuj2JYeW3"
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
