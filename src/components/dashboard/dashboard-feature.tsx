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
    "3wSfEc8Tn1RWx9ymmp29w3Y7Tp6mYDCkQM6SU2rYCJzQ8wGotjou4tamYUYcVXrqVL5q8TtNKSs3daQs7mmCcr6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3s4QrASPzBAvC8zF4Q7mQ8yZ4pwYnCsGt9DEVYv1unxEhg9kLrk7ruT4kxwxEQx9Cc9uaee2SVSz52CY4r14vPvv",
  "key1": "2xPpZn82BxAjass8gb8dE6Pi48uuuifkFjnZiQ5Jt1ENcskuEkRn2tcDt5hcWzLP9UkXYsQvWWnAHUuTefC5NXsY",
  "key2": "3aX77rQxFoPMPBkkDipksFHVZ5emMb7F3E44Kcnv9rSdESnFRcDi8aP4682vFDW5xqdYnVqMjBtXYPz6fSCuYzoL",
  "key3": "4vg3ZZ4JGYGTtWCKfcZhop7rzssLTGtfUnXzgpg43HMbo6JhUxMELdtY4ZqDtbFsTHpDY8ZmJkyq9Sc3Vay7EGum",
  "key4": "8sx3BtVoV4wnfrQk7VLot6Jy6NEQF8M2JsoJJHZ7svLbC1RPax75cnhDA9nE7BbKdjMnUuRa1NpW9wEoyn2brLt",
  "key5": "4fnLHVDfi1bQw3wPhizdBDbDvCGm8k5fmAgyC225WVyJfwuUXq6LJDG4zEs1Awuhu1ZXQcQZem1VVzhZwNNxdg1",
  "key6": "3mHRNVhj57J5yW3Fg7o8ULxKgD6RuhUnYnUMoJcNmMrnJj57XtagNf6fEgWeS67G2J8gFSkLpfN3iAxzqscLyN9W",
  "key7": "2aAEWoZwwrZGHPJXH58fg7t1xANRA9HBJCy5FuDd84Qba1QqnPic47gqme1aR6JoUGxh5XXQydX6pHcoFHje9Amz",
  "key8": "3GixM8aARYV2KQucFkujxYS7eVogbRaTZ8sG6Jjuhw9FPKYRFX9rBqVcBPUUeEmir4EeYirKgXovYGkpKK8QYkCW",
  "key9": "3xGCa5q7yXUADWoaYKtmvKryA1iT5WsVHCHPAyor11xrmYTR6o6LrofmbLCncrN6MQz3xPDyaxGDVrjD5pxJCQjU",
  "key10": "5Tu6k74uyBQQD6kJHArbcqqCaK3WJH8czPnA7kQfKQgLUj33ZvpJBEabHZiaEDAiMMptQHhJ48F1pvmXFc9WVyXe",
  "key11": "52b9zmo893MbNkLsnScvDSW6NQXREAKZvkf8Cquz1cbrdDoWV7LiF1dwVRsgG8KZrNTFdz1zDsmnKQio66J9XHRL",
  "key12": "2Pvmy3MsMHyggyRBb7f3xrR87eeG9RAm16ReuAHrPKhnEMGTUi2aqRHPPs1VRMAwD6P4cEUw1QbsBkD3hff278Mr",
  "key13": "537VDfQt4F8Fm7L5wNyBqniyoTymvgAP3z2LFfaU2gA2Jec8jforJyA8n8q4Xb5vQEV5LFv4Eb79mfmjDF2jRpUj",
  "key14": "2PSomVEHCPVHP7oTKDiY3tyLSc33LC11cGFHh38d52MNvDGUfZ4WE3EUPMZdg8u9NABvw8sZDDTvDH31pLtX4L2c",
  "key15": "3JSyeH4xyASFqkNUsgv3TGM4BcLoB6hnPzmx4zTNoTSCQQWvnyWcrdB2GE5JYskNSpfAgMzdmhCtLwWP7ogq2HG7",
  "key16": "2XuMpez4FgLnQBKR4aL4oF5cHt7E9zur9pURiG5CAzXR8KZwxiat1ddztgrPQsoqTPb5yEj5YwzicFEcnTT8NUJv",
  "key17": "frsYQvAZxNXNRyU6ThDzWi8cPwbPUzq9w51QZoh3bY5LE8aFp2LcN8C3PfhSBvgJbQrZHQMRtRtDGufw3LFeoMe",
  "key18": "2WS7K5QdG4tihUxcReMWcK75UcgTeooY7kmpiAKmYpn7RqrCWwHygqhEM8vhBDgjb2J54qMzMJFviFWWZT7hd25g",
  "key19": "3RtywycnaqC2s46Me19pJME1qFuLGjH5ovw54c2piLxFjkicVLFJ7wtS9q5axEa3jVQdaWrR5QMgET4URQ1CvV4r",
  "key20": "21WiVhCVAC6AVcqntXDFJvaEsApVHzvz5p2UitSbGh88NESxekxE3CrYeudjo3skVTwBH4sG7uT57oFgL6nkKi2m",
  "key21": "3c4AEjyJu1XzcacUKwoh8pP4wB9rzeY4SVdd5pEQ785RkgwxL8HKDencQ8EwQTX4w8HLFFgeSJ5c5NYeCCzNx19E",
  "key22": "dS6XnkUtLtcdYQfsRqBiu7t5HrasoeMbyrC5QAkUeEZTELEH1vkRrkney3vjEzJbyk4rswA3imySP9mAPtc8gD3",
  "key23": "4zbHneMqV871MEoU1Mr2B8u2d7FHUWw5FZQmYVrdu6KaDws3CRyiDpmdBm46ivjLDZwydFBzPZWjLEphjtwKTnyV",
  "key24": "55nNxWjb3eosD4Tk3NEW1LahcLrUyxzDoh6P2v9gtFXbWoodcA6w99JStpeiwW6NqE9Gd2nyy7wtwJaZaNR5DAWz",
  "key25": "67qTH5tFk3fZ42gKMcXuoFS23HunpxJQsS7P6rHyrvLormhkshsBF5yeMaCBxE2WyfajoteSwkBysAiuqmwnKRwM",
  "key26": "5y8tmGchdmmgtS4hJG67bdFbTEnHorGxg6P37hZveG7dWqV6yZ8EjzwKr5duk6sxVsvKTg3cKq1Lg1mbzkrkeRm7",
  "key27": "4dzQskvEXKwGwrGq2uQznrg4AKU35Nuxems57ciE7dfuhThvHsE4GxAiKDi7uD54DDtJHCbKs3RVrEYyv7KTSDGZ",
  "key28": "d9qKx3NKtZ1ZmejdJegUgLNc1A8QgckEPF1QazQFsH1jpR1w21V367rT7Hm6pLQuNjdwE3orC6Y7Mzck2cg3DHS",
  "key29": "btMm4GMbWeaggdSu8G6dhvLtR4H7TcJkWZnrkafDUS7WZJDa94dKb9WmYCEMVBAMFaZ1QJM7kX7Y3FJV9hNZd1a",
  "key30": "3u23WqVaxg9b8y6qWTSXrAKBZFsEks7diE8kYSiNsdGAdPZXie5B9F52rriTndjnvMHKpcT8s9S1cbdsqFH7MUvy",
  "key31": "61mdDJbTsG6sECzcdv2kRQRfRGjE67FrZH3E77S7UikRr1JRKC1GJy2rfcmC8Z1oWuwKoSAsdaKd2wLQNdgofMPe",
  "key32": "4Y2gayMa9PtJBoRtczUJSA8HaxJguqRhKiEYVGpnEfRxJKoqVnzpy263UqxTu6w2xWMUH9V1e4JFsfGoNjSySGLG",
  "key33": "2sXgK2ZJiH8f3UwdSmSY5tN91hNMBCMo1wTYHvPx2WRqqbthMNKxJCgx4vDXukB7vGcFSrpQA6mgk11TyKQk1eJA",
  "key34": "5hH9aZVikaQfAFH1ZT3pBv5PCnjNsGJtoMyaCsTXX7LBdDoGtGmGYbTrdFWF6rcn2krDvH79MRCgZX6YLcSWAp29",
  "key35": "5b4zXPvgbtpMUxxsniJ2kej1v2PBDuJhXoiG77R219tUJL9XJyhFYx339XW5YYoJyrVfSV57MD8vzVQWat1GPjRs",
  "key36": "4VBd99s9h6kXeVvMTNTotDgDqsDEEsNJr66ueqDznuttJUVf9UThK94eHQiQ6Wqkd1fjieyhEJXeHGm9cWGGcC7D",
  "key37": "32JaPfgDE2BrrgM5jUgY3apwMifA3Sm665T4EB16NFto8YRcANtQcJRL7iFcewfb9VZXuk3f2t9vR3GL9yDqCVpB",
  "key38": "rFSgLNNmLEM3bznj2Cf8AyF3Jx1LzNEBTtoNhXSnoPGSCygPinrU5gBLafYKomdjdh9Kf4AT9hSmwCkG96WFqKL",
  "key39": "3FCCpxcaNNqJevq9BopJuxF1sR6V16DP5UnnXnxtRjv3Y1WBmSTYWP7NVd2MHeenhWo25XkBRdwtLpnUKd29azpt",
  "key40": "4Fux6mUFaAXHqej72q8Z2TKBCcQhjc8U2TY5kkMqB6esYBYEA9djZyMgsvLeHnhKdaZ1EbZyJKDphL9qTKUAw2ah",
  "key41": "5oFftEknFt78DnyC8rV85iGGakCRcZBU3GsYRBF7Qoose85URqDYzjDJ7ySJxDUWYaK3HQB52f7XCYDfyGXyLCqn"
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
