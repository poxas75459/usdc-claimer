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
    "Yg5xWANgPsy5wUbNjA482FF5hrbN8WPnzkBw39MmtGHddUFhaDdpQMn8wSwvgkBkWAFPqffA7C1p1Nvii2GgH5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LX6TbGyaX9z5WadPZBL4xuMNQRwAV7E6Hxyow4TvVyNQdyLFcf11URnXyJZ9WqmG8fMjDE4nc6pmrhzFgZs1YuQ",
  "key1": "2cwaS8QcR8SgKumR2c7zSdZEmofKd4sX7FYCw8MvkiJxQCLpiEwNutps1zE83eyftUTh3uVTe3FBkwp3KhuouCir",
  "key2": "5p5vi562qRY732S16duUUaUfhGk4ZeddGaf9HkhVfiut9FySAN8AxoLqxziUQ3Rym1QP6nkLbPerTAg1cqyKKVvn",
  "key3": "5zQHw5L9jRfk8Q3C2cZWJmy57znhvDLvgKGarveXoKzWSmXvHKLu8nsUfvLogK1iz3g46ZnDhokN8sx3Db3QGPL3",
  "key4": "4T66eECaT9mjJghucHB64WicJueGwEqiw4PUUWALMmt3rSX76sBXi6qs3R3rAA1HS8iQY91G3bfDSYCMHib94C9T",
  "key5": "5SZZuALvcp9dz4m15u3ibzYmuM7TfjnWXLKfvqwyQmQbykZYH4oMCQ3EYZbfHPQdXQjjXJD89RcFqG93YY4LJDdQ",
  "key6": "5TqbJ8U2EbMAbiT5XcdM66daot1a2Yb9sW6a5LTD82JM5XLWVYRQ4DQi2kJjg8PU5JaLK6kz5L9x4nof3Kgv5TPq",
  "key7": "ZqEQ8FrZNwpeSLBnE56XPi2pLdjUpA6zsbP2J27QvxszAehwP9B2niD7vfyGStpUyr3N223Aneyp5vj37Un9iFb",
  "key8": "2yNHqtQgVW3ZFwa9kJZmfMoY4nkkUAGTQjF36BaCwZuvKvyMfthJRvCpehnYRGc6EcoX5Zcybh5TK2XzxPSXfTPp",
  "key9": "3ni9goeaiTVpgxRTm1McMKTX3ZEqtStxmkNPyYamWrLJz53STua2Sb1pMUsWnfLEZ48ZVKcirZqK5PVEWUQdZnQ1",
  "key10": "5T56ZRcWNfY7QrZFy21eyxNGz8NRJjEVwNXAfhq5pNkt8YcsigKw72HbkPmY4NwQBPbZcrH76DZm6ddPmNqrNXFd",
  "key11": "3gqTDMoVRXxePpYRXhheDvUpbcD35b8zeiX27t3be1NA47dvU3p6go7tmVhdL2My261beiC1UHpYzsx1AVefU8fT",
  "key12": "2BsKgkAdpeeiVBJgYeVqSUJBr66awcLaDi8xbo4W1ab3dtvDDsyi1inJgrAKDdtnhGXi9ke48C5mz4f1SmjekMRC",
  "key13": "2KiuGevcNh4jjySYow41JdLSNgMVd3LPzybyXfWzhAmpYjXx9A9pHMsw2taqGYnMrmu3LoBK829krsSot8x8ewtg",
  "key14": "GsbNfWHCF8Mue2xe21rtJ1xGnWWDHzai2QXyJafypLYG8182b2hDrJv1m3EWsiiLT8rjyXLKnvEqP14XS2vC8kR",
  "key15": "BJE8PYnMriddynFDRHQNTkZ1gV1Pi4Qa1GBZopezidbhPDpypz5iw1SqfatyWpxTZJdR6NpH9Wgexbn7ZeXr8XZ",
  "key16": "3asSZkhcSRsZ9cMtqKybwkZ6hULQ5BducfgVQfRfpFJmsbb9ie1jzVsFBNhAGXZSLKWt9BJwx6kkmgEvqWJniobj",
  "key17": "5yeiy7JL3ZeGR9fZivGfoQFBPXHTgwkmE2zm9TxySQsb75868VAo2yNfqqjCFyJBJ6JjNCwHamoUk6qUp5GiC3gt",
  "key18": "2nTkvwvuaryVJayuNUDum6YN6x159GoAHUENPzyf5XC4ng24iSrNUm52qf6f9wBXdB5qrmRpv2qoaciddnaCzG8t",
  "key19": "5nJHcu32Z8LfbFA1QHTbfmgk894AeTm9GUFzkba9q1sz1JRYZrmCDviaFMShqezdo5PXaizJcYfLP1bKFXzZ6j28",
  "key20": "3RjYEAjTicmtAfU1YB43FKoamFHA4qfbjfVsonjnbpTTJkoGz2rptbzBY3Z9oZSZW5NypdyCTZCWDC5DPAjdcCXU",
  "key21": "5D113mYRBujXDE8iPrVHQW1o1oCKKQFVSGs35kF8YmKLnoEvivw53Xag7gKiyRn54uZp5DqA3v7MRJqH1msWnhXp",
  "key22": "59FF5bu6YbuwSDXKPMqiTGTDfDcKM9x6mXtrUa3Pj7KSK6U4vAYyVHzjEjDEm2XAfwVPTykQSBHrUMrBS59XxBvV",
  "key23": "3Eot2TmuTETwKejNqoUi8BrnTdTSgqmXwqMyT3UkV7r8h75cSu6hjMEJ3sVv9HpTUzzGFZ5tC7oDT5rdk5RygB3F",
  "key24": "2sNGN5sk4KTukVoDRehX1vMt69Y85yMkYDqRu5QKTcJxqp4MQCNgXZSDKHgjZuWhAPhNR9bxqikXs9ZFNUa8Dukr",
  "key25": "3ESU4dvRHTEE38eF154aBBvw9DLfWYjVbbwXaznnotcjLnRybww8zCc53siev1CCawYCAEKGNSXG4JLTFx2VgZmC",
  "key26": "4CYSbacNi3kxeusXV5wRLeZgZw9pnfHYvGwWTu1v4NRaXMgx2fgvbH5CD3p4cCA54uUtiGYRGxWArSWSKmYnUqk1",
  "key27": "3RkPUZtb9y3bFEQFoKYzhQ9cf87Zn8cLpgfobp6zQpXXdRJD4ZWHnxy9qvKFV2UPcfN9VDbZmpWvPjAFM6dPNoG1",
  "key28": "5AMmZQN6ErkWvWYntwUuQgRvavVFtmHwLJE5tydptg9YiijUiFQdwjYdWgjZLQtcLfskNsaYEcDo3GFf67nG1pke",
  "key29": "3rPFNccweLUiBeWPCbYWnkcRYQBdcjq394WH2QJDxAyoBBD7G3eM3QwtP7ZKnrYWg2y6cm3L9Q2A1s1HDoaxmaCD",
  "key30": "2NMEFKXjun3y8Kfia3Cz9HxTMBMWiHs1aSP2SnuhCYx3tx6sYZ4mUyGaDTaSiu1QEHukfSQXnnMWBLQ3U385AUuZ",
  "key31": "4iLxjCVkN1XNtuw7avUbdqfkuB3xSgnWCJ62c7c1AsPaHKNiyvzGTQUy25NxitdSztGECJQ5AXyEu9PfgeoxFVqB",
  "key32": "3SuA6biwsiyBPeRo7WTMXDoJaP54fRD9kUnRXjHdr1fttrgq23sxKEtz5qyJDJZWHBJ5ZvmgGjmSxV23G68VGdXc",
  "key33": "36Rgfn2CPpjByvJqL3DmRVs6MjTqnPjn2BWypTmJwBk2kFmajijwF7Qjz8QgaVx6TcX1r6mtwgDqBv6ECk4DLWDC",
  "key34": "5zeS1exWgCGYenwY8U373pDAyMe7PjKPiwZeVVajTMGReoTup5bVXqztsajCy6jnSsgZgU7MUekQRY2oQ98qw6Es",
  "key35": "3zWvKUjG2pa27tGGwzjHiER2UULTM1HXzfX4ZyDBKuSrCEa2MC9NtQVQWvHc5GGm3gxsfdUnKe5RCPdwAz8GTUXW",
  "key36": "Wqqgpz5bdFQjiJwFNv27uFPEeQYMH8m2dPNuwZk6TdoD6XecKUGXVUqv4HemkwKMP7TdW3byJgcyAquFViYQek7",
  "key37": "22Bkne7ZhXs4UpduwALvjXFRtsGJNgJXSy8Lcj8JyhNUzkw6QcCc3CGvMgthKc3Rzmw7krA4RhNZPnHBbxfPvK9q",
  "key38": "3dxJyDrNEF4evdQqxPk3RppS7FfL3Nx8qddEp43dFCmzSGvJ4xFec3RgaB3Yoo2kDMV3Di6fjZCQRcXccVgF7nYs",
  "key39": "3EG9MQRg35ufa372DaC7Lj1WMMUdZNTqTFPRv6d9e5SBwqiHrprSKyJCLjArj12FVGbcYWgjxKz9RXrnhiyU3Xou",
  "key40": "JRqt9fCBBdcHW13wHaqnGHX7d2KVRhgbgd7xPDBxcwY6cvP1QGAB3E1un472A74sFYZUTkdziLzJTxaS8WDU13B",
  "key41": "4qDDRXo4Mis24bfBac8aWPUcVi3MeLDnv7PeQWJkYPw3cdk6m1XP2gJXtXZtRABRMTwJ3XVkQwjxkZEGh7TsHfPA",
  "key42": "3JeJUaAEFXLCH1YT4qaan27Jysm2BwiEWWGpHmi58HawFSnJvmdHJpveKv7wquxpK6pEGG8PbkXzxuAeTgyk1dU8",
  "key43": "4Hh45UufSA9m5GefHqrL3r8HL79bkwkeWZMfJBEcmtDowejfTNJMC6xi3QwtrgXXRB8eqyoc5vujyQKE3FyGZD1e"
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
