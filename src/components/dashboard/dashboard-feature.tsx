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
    "4aqKvu9voK9n4SU7tbUxD7WAoQ4kMwsY3Gms9DWSeTePfNr9kq8qYEiNyMs6MHi9YbY9j6Royr7fvigGRTVevDW2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46GzM5eYGLWGfkwBmTQkEDT2ZEpJxx9jotSPJGuDTQL2o2owoVXy43cYMp4i5CnaGZeBP7RsLo7jBFuoXsWZEA7k",
  "key1": "5jcvki5RLwpbVwPiFLxu2rFFrbYcf84NTvaqPKuJpmkF8b513n7zrZrpnEzrcARUmNnYkTWS1xwdCedjRf12hz9Z",
  "key2": "5oqvERcTKS97h2FzzWWofGr4ibvuHGCzdBBo61kBFrNUCbziiN4ynW8RYZCyK9L7auQxzatnui4WXECtFjr9ULJa",
  "key3": "4kwsWmonKMLhvnDfCH7eFbfy9KDG1zDK9vkybY5ojtE9MZRDz2eBbzyKL3tSdvJXo465HxJzo9So2igrB8jE8q9g",
  "key4": "21bUtUfFSBSxGRdcjd5Mi3a69MYh3jsFH9g8hPYVjt7PjPqnv9mta2rRW4VLmuUnErxnLpAxtFbmxgDTqY28onnr",
  "key5": "uqLpQ4ZYHfrfLFArfYyEZV2uPicWPsH79m6MMt2uxYP7FR6Ycfm9rBywyRgqChrvYPFevRJwrXntZLQtAzmzieC",
  "key6": "3pzzCQqK4ZrfMmnnXhvXTe8fUFAXJ7ZgXJT5PLnq8ycrrkQ7xJttoufScskcKQ2QbjTyysfN5GMfB3Eha1knrwmd",
  "key7": "5CEF3TLT1Tumg8s86eDYLFpJ6MXSTyQU3vSerJ9j18jLG26j3TW65UfuXuRpUXee13VAcCWBNiNnpiETbpYJ7euf",
  "key8": "3dyRvqbz4BC4FPyXmoBDPSmHqLuuNXYMjjs1kZFEF788S48o5ufBy1kk3EqE6wQ4NJ6RvbVAw5d4wehRTdvem8Fc",
  "key9": "28my5dFUbfQFVVpGnMQSo8UDAUxdCDGCYwW8RJmMhmX13j362fJrtj5UegXjrxeNkdGBZmJTL18BVWhKjyyrzzaH",
  "key10": "585McSY7qPzxxw98sCLAg7KRgtoa4zDUyjedA8ndBqgXNfENEEdEuhjhfDpYrCLbEEhqavB2xbbdva9hfecnFMZN",
  "key11": "KHjAjHi76z5RNeavG3d2f5v9mctn24RPn2SHtUiSvJRygEMyNwxxyAekNQUmbgw9vif41kYKhW6yZ95FgCBwqxE",
  "key12": "3VS5jDDFLhvg57scjNBBgtZ7RJWSsxLmwvC35iFjnUBts3osvoV5fWSSzMwJ6LXrZ9ZRhCbggbDQmptLDwo9FZpB",
  "key13": "4EU78rodLJCSkdm1c92sRnUFre3fDGqkwTm3wSdX4mEciYG6qmbDWedpravtWXtGhmALzryMpbgfmYBxp8JCChBy",
  "key14": "5U95vMG9mu8nBVtFSauZD89DsD5PqERM3v7Hq99mKEkETkEqey5rGerazGs1svJwFB4VajX9u3vz55njP8ZB3gwy",
  "key15": "4HJFxbo56WyZjyKdYWwyqZukz4whYL3BKAi74UsD6EEnUWeQ5gh3jT2qkPj6DiFuyTRB7hwYWSoGz8a7N9UYQjSc",
  "key16": "3J7gxUBWk3hjHabUyDuGq7W616YgcoSJLVDqB16aqjD4cdLNV9aCUF2qGKv41fyaYTW9Hbz7pPhc2hUwRoTNGaz7",
  "key17": "5qC8WAuHsrm2Hr4JSpvYP3dQfgFWycKPfXKCH3kHZBK9o9X33FXUeZb1hQ9Xzkam92fwjWjCLBbFXXrfauXcjwkm",
  "key18": "Ts71jxHCqk68kXz44MViBoVqgd1tNQER9UVtuF1R1DGjgh3bvbte8BFRX8KomerA3hRzgsfQuwhSH5gUiQzMytH",
  "key19": "HGmBL7XjeS3JEPWH1iNETQQHoWc2aNroNGN3WwAzFF9AdpdfbaKrXscQ1zHzaecDaZrBLvjYyBTdLFSUepaCNpC",
  "key20": "3bBreaV7wqhFZgdL5PsyZTxtuu8D3JTYq8KZSMH2xt7iezzbpxri5TpsrjtEgpK7QPSkpTUnGCbUQjN2WiScgV2S",
  "key21": "rWb85X4m2TQwHiCsv4N8Hdb3n8dZxgAbsW9jmoXNEP2tpuptieo7Kxfn5TY7twfz5uHw8z1iP9Kb84jaaw4YGud",
  "key22": "3YxfTpnwcJ9Ws6CLFwPx1m2g44Cuw1H81aRWB5ajPvB5ka5EmJH5nCLYt3d3oHzDnGiAwHs1Nk2DFCLZ2vURVsNV",
  "key23": "2oZ1BNTSF39Phew6oR2PBHGt8N3pbF22i9iURLQarBCEK16YhNvhn3FRZP53J3U1o9VSy1t5WadWTzRW5gDUrwYP",
  "key24": "382zFDH4YRTcRQGnGNALqRDVMJ68fKdHrKU7Kss9AxNU6ra1eFm8DphohwkhDeGTbgjCJR96wNoNPZGVnZMWDXWy",
  "key25": "5ZTWScqXZrGZRCH2669jDXZWdoPURHGmki4ywGxWLtcR5o4djZAqNf6ZTqK2znJPWJQWQfwwi1AMH7xWqC9ZuX4d",
  "key26": "5YDd1cF7m9WjAjESs7FtdasJNEYV3wfxgUFLAWQHGeEBeF9x3Wa2jhhpA6mrc47TPuwVN9gqgEqQP2Gqfbum56qY",
  "key27": "MsWEei8duqFww2aNEQm9v7LL6L2TuYHHkq7qLN6oq9v2v54HDoFbcpufUBU7fBPAHmYqfNHuBZWinZqNr67r1Sw",
  "key28": "29ZrfzewNe1JZJ93PcTfDwekyzR1z7QCzASE4t34nHDkdHtU9NjYfXAuMsFX9Upo2yHybHWwAzkeH9ebu2xUE1FY",
  "key29": "hFL3A9okBdDBEp6PrcQRcpgsGsyCGpgGWVjNMm1Vmn36QbomZ42kzx9QxkbB4W3sPPU8NeWc2VeSqsoaTavkkdz",
  "key30": "3e3vvXW8jD1jyn8Pykxy6sRGypGy3ViMtayGv8tsmoYHiskPuezz5GVbBnWavc3aJNoDtjNq89fddXNRuVGSqAdk",
  "key31": "SCiTiQu2K16HGEEBiHGDKhJEMP8UqzkTRiq5nBpEFRECmUNTSDDjuFxzZYbgDGi4e8p8LUhXPCuEGA8xbrDqbti",
  "key32": "5sC168xBFCqGRMbFxZe8LNHz3ZZpGXKnMpwYd4owX7d1hwNjDoJ885kByu1DZQdNhXoLYGsss3Hh3A3nQSQ8DUWp",
  "key33": "2vd3oX5jpy16i1TDZyyerfZQK9drHDpLV6S7myrxiAbzx7cAYDDK6PqbB3gHYXxCGTrJtuSMvNoLZU1xaPMgTrSj",
  "key34": "5ukKqjKfujhzhgkEpTAYbU9CaG3CDBUmagYkd6iD9HY75ToMPfGGUY9Dd49zAAfSNkpRmHs8VRKPDB1TvmhfkcQR",
  "key35": "4Gar5niGsCu7G7uNwEk5gu8zqWvWZBw5RS6v4LeR7VfBL5zhfBS3xpnMmoi3JUjtWCEjhLErnmKjKfN83RsJnpjR",
  "key36": "dLhB5YSF594N6Wi98hqZi2vby7oSaJj9JRNgV4hXrU99r9shpCTFDMtF2LTN2Go85JCXk4i4D3czFnufPJr3efp",
  "key37": "qa1GCW4F8AaxMXxAmSYtNeaTJH8jn81SEXhXEGR7D8kBKs91Tjc56U7dgETMRZZUWwSZsd6AofHniYZs6ZN5rEv",
  "key38": "4q7YX2aNtKGWp8WFpmngyYDPuAYX3t5vwvhY3PiGTxA2n2eDbCM99igNWYeABBNeKJmum859MABY5722ZPRDoLTh",
  "key39": "59NzhwiY8SzLUx4QHkzGfxDK4A3Nrw8vv6NmXeENL5HrCuK5zhA5ctaGfFyercRTBVRXhtAvKGxfrMiL47PN6z7c"
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
