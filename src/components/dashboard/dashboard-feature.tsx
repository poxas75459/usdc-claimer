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
    "3Gy4jueKaLWtNtA6kXqFJkuMESQsmWa6s7qQQue8Knmny8sdGWgHj2fT3QJR89kqFuraDw1MJyzCHg6qbcYXvfzf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wM2hnZRWRxpD3mSSXjsZn9xVFFGqYKpHRXV7Hn3rf7GG4XFqQxXXk2WHVqnPyuhaTX965UFakZnz1B2E2eS5nvj",
  "key1": "mbr5Gq1oS5dbm7QshPe5G8i2b7p6c1jYSBoQECUWmKj4t3X6fqGRzBZUpsms2Gpu3ggXG1FcuWgjXvrhnapW3gP",
  "key2": "45sLu3ALsPmiU57yfpjeMEWWEAwregH2LWe3ELsv5K2wavqhEXyikeA4nT5Wde6tnX6kXWV1urYx8pfU6p9tQFVV",
  "key3": "2si4kWhUYgrrCvym4WXz5YH48YHkNgXQv74pQiH2vrtZNsSeA8Sm8dnEECp3UwDfQ3KfYXUYfLDkjXqB4WvVsfhP",
  "key4": "2knvCy4yu26iZWSY6kQg55BvMQfx6HMoW3fVqYgwbjUeaVXB11EkgapFx83ubbedYkxbRYBrX5SUjM2kU2jHQwSa",
  "key5": "318W2Mvh1Aoff9XAuvnBbbi2hBMLAtzTc1txjZNoqXQ81rK5Q31G6p29pnbSpcTeEUps6H2zefkHo78h9o7yryPu",
  "key6": "58heWe1w2WeZ6HL1R1yzvvCkGvbtoGtzG4BnLeQGbfFH6DPDHhCptkUGFzfocqBvCszmRrpon69mDwtt6CdN2DfH",
  "key7": "2CrLGYgwxAHDFBTp5JV5iM1EZVX7QmoU7DQjPuQKk7upmWgErfMqjiWvvRWndDPY7GQuyydxzaZybVF1nNQciPgV",
  "key8": "phoMCXCcfaCQTzBbMvRGs9n4sMnwWHr8XCqqwrwWGEGWsSeg1uFAFfKaHAWQDSJDvp1ppreFxzrztA29EVQysEp",
  "key9": "5YqfJvQnCPcaLXpLz1UpUpaywKd7UWpAaa5uceNyV2bhXLD3hxz2qhh9gAMgthJK7uL5iVWDsMLKCNS93RgbmLcC",
  "key10": "3vT8f6EDW5xXK26xFtEcJMcne7njkihL5eoK3EkbHKisyXrQUayE8do3kwdWnnEjJ6rJNGAfJikSPtcLSmXupCMM",
  "key11": "ecJhq4HtPH8x3FUMuUCtZcZ2h7ZYvfRXPH51XBdgaTMB3uACAsSFRs7EA3VxU3PdKr75f7gwyzduGQft7EVU7qd",
  "key12": "4LdRpjpGRXxYU38Qdjx5xzxeu5bA8QA2R4Pa2NkQHE35TCbhsBK7K9MfSDcdAYrEJ3Awb4iRu9C4GJmZNkR1T1v7",
  "key13": "3t1AHSFsdRpwwNBXoPKGr46iM5r7Sfih13TDBWz35dxviS57hkAhNoogfd551zhdRxbShASpEnzwDgp5wWVWKxu9",
  "key14": "3Ux8WH5UCbWjk344SNnztUKR9ZXsWm3ncZDQF2BgyzyeCq1VhgD3PPUDfQhceLCfEozyMrfBeoxzLFbZGNYHZN3T",
  "key15": "3YAHU7wSvYuNu2AZq8gMj31d9z1pntpW5RJ6MmXBagETrCeyZVoTV1JQhFnYNgX42EkByf5T1WVxL2qVyCfVQvBT",
  "key16": "A4ysK9GexpNcvVvKTVRQiWWvdyE5a6nNDnTf9gRBuQkv1h6keZxKPQLYaesp3SQfvPUKi7BbHndQjJEE5zHgRRJ",
  "key17": "5xFEgBDz7GN2JYccmYWeec8a7j8XbDX7D8VqJpS7KWdrM6uJtH7ozsAaqHFb1trf7nDQ5koznA6bHcxsHXVPjams",
  "key18": "2ZaTH4qDzorK456qFLsd78fq6igYvzSdZA1TNj9L2SX9tLfB5oCuxQiz9qbTBsbE5nMCGGu8CcDn2V6nThT1uuqJ",
  "key19": "4dmLf6YbhbSs8VzG8UZUgLaLJhfNSMX2HyEuJqUP56J5vopirR3qjEnEXeqqQjHx4Sj9Pe15L2syXeMT4Vi1yNwD",
  "key20": "2RjtKkjRc1aXr5NDxsYAJMWkziD8Varvt744VDGk9ervFf4cZEQyer9zis1Do8inJqHA4Tp4wQ9GLnF1g551ii7E",
  "key21": "4e1vNsLAwPfE6D9yY9YEqSFCPEqxBGhraw5wvQ5vNsm65xehEJmSRekV19GxgfzbSRD85gAWX5wwH8F2fmkWViKj",
  "key22": "2PgCRn2tdubA1X56WxtKPkR33oPjSXYAs6EBGSDXqaDC4euBMtF9fbtsPPoAd2XgHTnL9gtDNtUMotZbU7e2N5mn",
  "key23": "4d6TVtYZW737p18BpohXA8QEUf7qe9DBSmXskbYeVXwPrjbJamr9nH78wN9qNZp1PwEaPdakCftpwz9FEX3BJjGL",
  "key24": "4rQ2r7PfFHMXDeBN9TcX7BQNJphrqeoB4Epj5neZJgjTM8XU8gw4uBtN4Dogfkrg8qU8HmdkYw4reWePszm4AJtd",
  "key25": "5WxGck6Rkax98rrndUYDPwERf1sZ6kEiZGGs3uuRCkSPJrf9ejv1he8dTkoSecXtFW3QLZEV827ouuTHSAfU98CW",
  "key26": "2YDWsaiWSzQMJd6iAihVRnj4FyEpofwHsJs4DHWY3hc6kBnQnmse7horMMCNLbg5cHxXjgcEPSvxtM6GqV9kHuBR",
  "key27": "3muuheD92TE8N9aNHsXLxp2bzTCptndsru6NZmkMmDT5UHE1CCLX35TLKt3EEBJfjYsaryje3Hh4qcW2UcVfuXso",
  "key28": "54u1uzkSUGtvb9aHJtnksfhBu95qt9sJfrtEfwCy3Umo34FoskW73qYczrY3bXQqSfNkynLsweMTaKD7ghQMnekj",
  "key29": "4UsHiwNLAxwBfTJS1sZEjYYaLjmj6e5ZdpKiqvSP93CgLXrGncbc6rt3n7gn2zLeNSM8TLfePAj4ZWp3GK4Y85xQ",
  "key30": "m31ZmLT69n1wLCF7s4oSPDdJtxKQmUJaPcRXMm3u4K2TTqoCrjCUbkqooToSr65EKcrnEoJLommwhCvTyoGmLTc",
  "key31": "53wfUraNQDLAantEYumY73mnVzrjce8m9URQbdSjo12uJJFed8rAaghuqFAEyenWapJ7akbrow3eCjxwKFkeQCBf",
  "key32": "5Qi97grxGABMvodQg9hSUE49CwATXnuyAM4T5Gut5f1D7nQPhozbikubd5pwKbsxmPrds5XWKbfveved82QzKLVc",
  "key33": "49v2HJNwt862ySMXgr6XrNNGS2DHJasxrwVmc6d5j185kBWXBSRCH4PwaeM8K4myLZ1Uocty67YcjiCFm9EnFSZ3",
  "key34": "4SjGrmy3qtrejEPch9HbAVtdLqEti5C9NQxpRyzcxhy85gQsGTqzq18CyHH3Juix178K2yoZfvFB2s1dp3zTzGVM",
  "key35": "2jFnfhAYQPJpxVHcnSdjLxSx266RsGctf2WaxU76HN6NCJdiTXMH5ZFvEjC37xE9NhqYpP6y9aGX2PhCLqyfuS5S",
  "key36": "4NvNqN4AD4qRtWKvrkS8ucWYDobN3Bk9nC2QLQECsEw666zCiiXyTaZar8p67LHQLnPmyWz2ix2EN1ThYTp74ZT6",
  "key37": "2aqdL571RoQwUfKHuvMWcFu4gCjERhgmUVupCPcsWrSbaDRxmgTrDf7A5dLyyfRUwV6CtxgjL831KCi5iNesNYp2",
  "key38": "kqoZqP4mG27Gn1geh542ZPAKWKheNERSGSLmuqPurF7PKUiiH1px6xd7xzP8HbnWGV3YNsSUwXU7RTgchBrStro",
  "key39": "fTtgppaSz1nH1otaSbQVavnqZcegPEhhjoyKj5PHx6LqRpG9Ghmu1S8fYUK2wWd6wWByaaKqxnf9saMCNoQCL7M",
  "key40": "jv6GFfEKQkdvvaEes8ZXnqLtSBYorX2gysSjj6Ai1D6HQteukNheTSQjg2Kx4tpMwtkTNDb2CncsKMPtxJ8Zv84",
  "key41": "5W1NuHoL1fQ7CSjhozXwJS3qAwDveCuNAdtEgm6xBMj1vRFqCob9dV79rdWaEm5CzQcnCJDsRzSAD6umTniGuwjo",
  "key42": "43v6zEyN2ry3yThXyPDXSwcLsg1R4Y1pZzxHHBQiM82SoAQc7E76EevVezBHdYrXtxiWF2bmBT4koBMgriyhaegM",
  "key43": "4QWB7m7vXHid72sM9Rx66LdsGa4SikVNJcXw8RxPyRxmDYvno9TXWypVJXLWC2EUMrAr9CQ2rvth5MxyRXYphnCz",
  "key44": "4Uj6jRuzTC7f1wwpeKDnSZZRf49ceWT1bazfhXgkPgUrfQpoE4vcynTw1Ji9ybrpytoZqahaFiG8pxaPMmPTnKLP",
  "key45": "6162xfnc2akJkjLq5MHtiNnrA4kipuDueaakK8pkQPHj8zdbYHnf6mYFFWzs8zaSisjoqp6b3PqrCpd3HyS9WfTR",
  "key46": "55W2LSwj3XRiARtnDoCCm3CR5SKFLG1Yh1rYi6EENBP86MQTwAsNgfaaqGXhvXqZoeLqQoChUfdifsMt8ef6m7bP",
  "key47": "5Y98RnoD7nH493zK2gUqYJXQd8VefbykGtoehSssogDPayiJF9pm4ZKWBoAQubim9N3R5kwQkFokohivNDT3Xqnb",
  "key48": "2ALMQbhTErYfbn1Zshy5VALk5ZE6m7K8pXnvWsiWZze4fquo2JyhuXkSpciLrfHSPLLJf3xNcqManDcwqxdf1VDU",
  "key49": "42XqJ3aTkNxpvPYCz8emzzhif48LABqC24gmXbC2ynm5QQP15HXQBYsX2cWbrQegtLijxDvVKRjAvTWStyPntML"
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
