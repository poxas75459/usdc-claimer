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
    "4rp6mX8GDBkMePvHwDDsWWt6CUG6P3t2boSmYttFx7ftecyHDDNxQEo9TJcBbq1yK2SdwAD4sbntxruFRqeo8m8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26h41JBXvu5estFu8KmC2MU5VvbPHjtXbq84Ld7rdBFu1TzDHjwKFUiHWWcKqWEucwEX131GUp2EMEhZmgeuc1tM",
  "key1": "qBoxXSjB8XsyjpeMfme4DhVbyVJxfsWodsiAenuaD4kCNyvskMosnquaEYeNJwxex3dyUXXuCTNBZAYrxLCU6by",
  "key2": "2iFiSsxuZdCnazhQfFwwQYLtX3tDZAk9yp9V5fkeiHUFqAgKrDszU28vaJ43LNd6isTXwAsqjqhUfibhRrWxQX5V",
  "key3": "4ihJbBm2minthfDi4csJuRB5pDzY52j4XP4iCpc3Czj1cwQgGazNtmp4cgXfQLqo5Y5QD2gqeGsPF2o4ZLfQR9Tz",
  "key4": "5YHT9eCJ8iJrfELGvzPNUbQ7VeZMkeutGzTyUFL8bmqcU24EDUiaeL9GedDmZ1udYoJaJGxQYxH8sWoVhHMfRVv1",
  "key5": "uYv4MMMTcwau9XjoKy5w1saANMCYiGuAiF4f72JHDNcGcP9MjRosjYqcW1RFu4kG8YSxsWnGacTxH8phjHviUev",
  "key6": "2gucffRoZAk3ZLbb46Tx961v3CrJNowqmzkQQXAXMtfbASPyN2X3gUd25DQLJCGrtakfiDNR1FQiiDB3DGWiMgEa",
  "key7": "cCBYFokw9PQ9RcoNwPSSTtV82tsEJoh58xkNm8ag7JWuY1tbtzZEdP9oy2gXVBU9v2fey9VBHeGYJJi2fxFS4M6",
  "key8": "2f2EVgsQ4yQpgiFe63FebQXJhNjSJtQhYdEfr7j8K1UFXnxwVWo6fqihCBAoXoo9any4QXNL2bNWrJ2KVnneoASr",
  "key9": "5Pb8fgWWrd5nF8axqDuakYe48EADJv8JDPWrj56f1WVax73nemTYimZ3uTQpwBQT3Dd5hu1F2f3Nh4o8a58NhzVC",
  "key10": "52KeJBHPgqXnkqUfopBtRF7okKzBaWzTsPzqVdD2yeEitX2BMLpCVmWBaoQYedwEEWqUzcHF4Uyiw9JDpPNxaLu",
  "key11": "3QdseMEzXUTLYrfXbzzqKBip6pEmbYfYbbNPgq6nGA8Tse2iDwsmiGsGpJFdWnPvyTJPXtUYGPvmpRq6JkiFgRwY",
  "key12": "3aFeymM1xSxJhkvudLQKH5cZp3KzMzNUN9LJUXqofPdDByyHQX6KirRHiLZcSjjs5KLnKzzdzSraB1KNff8y2DJe",
  "key13": "3ztRWTiUZTwzjSEZ51EQzsMA2eBj6mJL5mk4Jqimkkz5MpquQt2LKtLRn4PcX16XFEQXuDpJxRRtZBCYtx2fVXvg",
  "key14": "4wccsXArRT1iNbxZb7TsvE2AmbxgBnZBKsENrwKCXzDWer64PLZX4f4dfujcGeuyzXxVTPPZiK6CvFQ4Amit8jMe",
  "key15": "3oUqDPP1iPZsqCqwqLddJshgoPmywVi6QdLNWKDR7WrJM83jcZkMZBPcLywXZyWgz1dwhTsbPYWbNnW2EKhD3PwR",
  "key16": "3AQa84VbU2ZQWcuRzjeWrngXFQAtYjcD5mFane1EZDe8upVefYFgJioeFmRcEFsxUNXxk4mQ8SjMCfok8ALZoSFx",
  "key17": "5Shhva9KKYRUtYTqjvnTobV2545XpgydheQL1h35Eck8dbyDPGENE618kNgyFDAcwpFAYrZwpcY2q7MpMtUCA68k",
  "key18": "2d3nogZkZJQjj4sAbCZkBu2PhPBPJUHyAXdBjUNkUmni6wDgpD1Y61d8UYGgJUjWtnyVBgooaKVxxU7NtQ2zympx",
  "key19": "4UmKPrdAtsgQJjYmwVqSeKTepgvpsJXx6FUZkVUR59kaiLf4rMFdHzYFhtZdAgCDr1QyN8mkrCBeGQsGtB1ZWjdN",
  "key20": "4ehiJvPRadYRMKzhR6KfHvWckkyHvqGtfL1w5rcCE1XaxzSXTVdDbPNvoVk4tYQYSw2kLyNJF3M9XemxutS7jWx8",
  "key21": "5ST1Lv2Bt8RrDyhABy3pYDpGsKUKkvjTjDz73s11UFSbZQcm5vQWXJa94yQCToXrs2bQSWL7PaQbfWw3DWCenPLP",
  "key22": "hToeFs5HDAadYMefbDschsefNoRZMhoRnoma79w6VvDCb72M25f2dFuXeJjnewmj2gWGC1eSx8VmHFTEf8yL7t7",
  "key23": "EPuCAxrVY7Abg2KjcAdrAA7PVimvS5CEPnU1sKPMdTQyy3MjBNQTTV9VmGGZYTYhSmeXUFeVsPH9z4CRRtkNam8",
  "key24": "2S3Y8Zc36qF2XwhaokaY1of3ojpsHUNtKv3VHSma3UsJK8JTdpZMj1QrWBeuRsrCcwbnyUAkVkHZkaonrx5j5Ke2",
  "key25": "5dAoC4r3KFhw93PEmcmEtm2t42kxHVB7MYTQwTvZ5EP4tqcrdh76zvuoaMN8CKBCnfu7xD2TNChFfVMPd6R7AjxE",
  "key26": "5ag5HgwTkmxSeqqSsrqUYtrXgRjRiCpqkmrjt3WQTaVDfkTBVDTwxYBpyPafQzcN4jp9xfNAFP3zA3boPFykUcaa",
  "key27": "46hxXEQ5D4Z4GPhvNrir5qPQmDj6EZug9Vzxzdi9XRCssV2Ncf3dT4tQgxweeVNFgauUpwVBGqGUgbFK7EoZ9TmB",
  "key28": "56MGrAJtJpxJicPFdB4fDSLrn1UeGSrbvMGwxcwJVLuxDm7btknQdUpZY33nJ7yjFfos9WQddE1Tff2sciTKs2wc",
  "key29": "41bEehekAdUQFqM8anpRt9SQRY2vRQEoS1vwwuoeTVqWd52GVx5uE2Pva2YVEEuPk1dK3pAYrvRoTt39kS9jP5yU",
  "key30": "35AhrqcngJGSi7BEW3iRX5sNb795xarBZjjAN1YSSqLu2hzXyCpi8wDAWxiQsCDVYAfVt8kpAxXGK817t65dtShE",
  "key31": "GKNqpYDbRAm1Q8DKfEdwBd3E52b6hWZGLSdyXq6X6BfzJEVXZpiMpyoYxCanuMQo3cBzfPsFsDd6HFSXLuJGa6Y",
  "key32": "22a4FjccRETauCB3geYiu2VsiHVZQSGv5jjdwDgHGeAYcQm7kDB6g62Tujoc6DefE6dVCXCScFEc6GK23yiHs6iW",
  "key33": "5Sgr5CbaX31xNXpxzBcMjXc8JijhhjhRBSXnmn44MR62fPR7wBnUMy5Mue3fmzDJoSizwYY4pFv8JiXmXaAbh6z3",
  "key34": "7a6ujZGyGmmKjEk3sNNs9J5Px9FJoyLGbTEV8tTjZpVig2fkC97ARyUrEAmUtdS4ZnzrLAV8PuhpXqqWdkNADsJ",
  "key35": "3AtjNpV9HXgqxBfjKES8vmvVo1H1JunHmMGm8bBvA5mzVFy8HVkneMf4V3DBsHio7Z6gryNS4dBgPhGBpk8NMUjz",
  "key36": "3AtDSVqXgKxGr82TdBSnFYcH2nHxNErv2Ah6utWGHdu12FkkhoRtJS6kT6uiM2hQTvYU7HTTGxfGAX2Kk5orit63",
  "key37": "2dfDv877yGuG4EZCh4eBWr5ZRwAob59rpkRkTuhDmKHq9iRxq4pu6H8HMWkiDhmDdXs7QmQ3qJ6cXF8JBMxjhohB",
  "key38": "47bDRXdXbixY9yUL9QCxT6AX5nTFjf2ZfMhfaiPJsXGs551DqGULJ5fi4tWpXd7dPPLmnrT82vWfBFTtnGdhoiuP",
  "key39": "2D1ELPPazh9KJ4fn3YoL3wjd4HDvuEeQCCPx5VBLyyYGy7w5nDhHnYy4dnZNJYwcp5xCwXYmgCSNxgLL5SM2Bsmn",
  "key40": "3URZ6muGDKMFKxPD5hYyMStKDPKoZUt8mHB19sS1E2cQLTvpBqZe1JHhoaLWPbVCyyYDLZNvma5aSMK3AEoPLys",
  "key41": "4JUTbyS1Y6bdwaFytyo8zDzAChbWkgGZbCU1S3mfTXzsc3hUwrS6yo52W3sEoMde6xn4TWymhYB7XLoM4STSBdij",
  "key42": "2ccUwX3Yfi8RScfQSu1Sntrh68QKBmdUvBN5ePLLUjahtVRX4QGTUAeHJtM4xuY6Yok9ZK42YDm7o61kKeaDP7Yn",
  "key43": "JQvtyXAzWFszeVRNRwCYgP5jvwuZKm31zDrmDNUuZAs7c9dh9BnmKLgMKr1MU5JH4KcGSXweQSbE22a73vv723u"
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
