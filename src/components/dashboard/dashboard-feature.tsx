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
    "kGfXMewdokPs5hZRVkaFjxaNjk1cKTafZrzBYNf6azMMg9HdQXMuENpQKGxrUSypzGD3QmyWXZWfeGyLh8noboZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MawwebmU9B4CXdPo22JVeDQs9k3Umc37qHkKjscjggfvLSG1735L94oMnmWsZ3CUKkS971kVGkkvwPay5oaJQ62",
  "key1": "5JY9zVj2Dn1JpzGW9vJz5kpBZSseYxxhAebMSuMgPqAVFEPby7wuYggdg3gatkUT7TPM2dtzNBkbFThbfgJWJ2X4",
  "key2": "2QjutQb4DpXHNARAS35AVvLuQZYdAaoorxc9yQzKkswDe1fSKr2THTqgEzx3jLRcMpoaPBe8JtbKTGqUfsNUoCj9",
  "key3": "4mRinkZXizwe7aRS3aoTYd5Hh2NTHv1ANJ7pxKVYg1ucY45RS3r9ARecrwmN14uVUyV7W9DTDYHCtqPL7FUGybfq",
  "key4": "2KeUkHgtfEJJ52KbtTQzQdYs2kcgts41GFSdRqdtQw5DgqznLVESaBU5Ko9HLoZibTGhhDHFyoFrsvy1QWqucwjN",
  "key5": "9PnTSFCNrCbohc2B4guf3VoUHf2A6YCS73KihmJeX6mK2ZSpDxrLJkjjpriEYY4r6n9iSbmSNQGievnLEpZDv3L",
  "key6": "yCKbynyaC6FR3nXEraK6Ed9LRbW6y7Hd5rNMMQ2Y8naPQeksGBpm7Fh3omyf43VE5ysqRRGDdBTvHRjQWxqiiXc",
  "key7": "3NgAUdYzHfW4WAQ527cj5jGTh2wGRQgNJvi6cPMTxXPeUiMv5ESgSzDSwAs7WpnP5c3nX78eCoU6Ek9T9JGFYSKB",
  "key8": "YuB6qEwzFo3wJTeik7NT7vVvbzxfXwKPzo9MGw5rmQHbk8Snas9gNbZ5LdjBNCupa6zQGj2uRbyNjTHBce7jdWz",
  "key9": "2LEUM6mzx7CTFGaSv2nw1K3Uh1zHwTVWWDaY5C1tY2YCbRpUpt7KzR49TVJVTQ6rvkNUXfj2faJwPtHwm2N5XMKh",
  "key10": "3i2FGb8SnqTaYHXvzt1ZFCaDjCp8GfYiUTYR7stgtws31uxDNyxUXoemyhQkPKEwdRvj2RrwqqX8LFPME6iCgg65",
  "key11": "5Y2UmjdkePj1vthyPVCdU51HVTBaq8rt9qfUHFqrgsQSPmutUsJQKqP38izrzv5dQcynmTWPVnqPyr3p7TsUavpo",
  "key12": "5g3RShvrs1LsopSrmagvTSaszUwcovbEAFJtSkRvFLDQrwVvwgQDTMrMvgUecdxdN2aNdrBkAZPnqts4eQ3VxsxZ",
  "key13": "3ZpwUDkKE8X8f2ZCCwaGKDFsiJY3cSTREApDe7QXUBBs87wLCU4iTttbEJb5WkaXKUxSVRvYGMEBdtYw5MUCeafz",
  "key14": "2r8MhCiJoPxK54hq6wwZNV8fLeaMy5MGGfLkLj3YBtfZvxEU1Kvz4hKAGDuVCTMxK9ndS79pTygYGidcxVaMKgZX",
  "key15": "gJ2hbHjvoom7DRKhnipT8qhXE9Np8tL5P1hWKRByzLWybbtBKsM8yeEzzEip8oR17n2KH9tkYfDVLTceKMpgfQK",
  "key16": "5r6Dq82p7wNgjnoFMp8zSfMYYFubDMM1eWV87wjUg5vqjPEHrYtsGeShG8oQYXxbS8axniJw22upBfzgumJRDcCm",
  "key17": "EuC83cXPaoyUcoTyV93u4GaDhUM4FiTDPSD7JfdGW7NeEHES8QPDrdiWAE7TM6BJGhzpiz9SEK8Bsrz8aaKEF2A",
  "key18": "2qfdZ5MwQgU563MFiuh1sfLixgtgoNBDVrDyUmhdUAjRm6Z4YL9yVZniJ2LR3CFiAPebaMQa6ZnfzRGXYeRqLVny",
  "key19": "56NUeaSSRrBgDHJTHgS9MVM6xHJXbLUz9UnohwoW4hxSvMpRT7JM5NWEA73d2zi8LMqZ4Yb7KhazwyDczjfCPmr1",
  "key20": "34a4JmCBfFeB8gbSERiiuSrnb4ohqUEV9rXvkc7Qsr8TyweV6NUXsx2wbhdbS5mRXG4hByAdSFGTtEaM5dKu9kBZ",
  "key21": "3vrJqF2au1GxWpfKA6x4R5Gp78WRHJCk9heiAND1CtqU1fPHrxG82UedW1v4cHdWrvADHo18Mwn6f9i2Eg8Rg1yt",
  "key22": "wnKsm6gcLfrueWdzAJXSXa8KBHbwfCF9nktJLaiecaqvwVzMNFSHupbE4pWxmegAJFEHe25wL4rRbdtFfMGaFXJ",
  "key23": "3p2TnKmAYLXqYjWHdg9QFxE6WY5BrHTRjjhszd1YWLXWfZynH9NbbyQTyAoNJajV56ekPh6DhjagAsTJ3FgwQ4rG",
  "key24": "5ToFTAJqT9JFrdV52yNTUQyj9Q2ZHWVZZzzNSDrSQcAABRwsb6tCnGjR22VbFhZBqGEVQh1Yuo8dqEz8yj4kU85v",
  "key25": "3MpPzKZJ8jH9KTCDL7K1z5sHGuxBovTUBnX4jYFVP3T4mz5iv9K5HehEixjNq76nMYeFTYLufqaT8nafMLv5MeTD",
  "key26": "33LfhoHnH2XjojDbbQxXUyuSrS2H6TqTVPTyg9ENfhUcksgkEtGBmz6Vgq5XuPA7zFCd7RhKKiZcLKPNE35jqjej",
  "key27": "4DWEZbfAy6czeuCa3tkg5FBwkQntu9pR6MtpZUV4J8NXSrtfyi83C5yzaNNdsQdGgE6Q4ugEWEbfhAtrTX4jn42x",
  "key28": "3KLJ61NiivGRwk8fdEQzuFxVvByjd3BQcFstUrbzTybPsCkx5hVMMPJi12uvchhaoddYXMtWF4mWLWondptkwjzK",
  "key29": "4yUqyxebgrZsUBUkoQMVfcyeH5BsSk5S3Keo9ZeViXfRxMHPuwLNuP3TUvwvHMUrtB9sE2ZZ4tuHgad4qz5kdgmP",
  "key30": "233GU69yo9ekbK9dvKfAMj8bi4ExKXTfCwp66roVKyVVCUcFcchZMTdc3cjodrF4wCRXbExkstF1cpUgPPt59yyt",
  "key31": "4ZfjFgTVFFVF5AKNS8wzjc51KsGrxLWyg4yH9naWGQMRzjVL7eMUgyqXb5rzXC2gxd7jFMTrt7yXHY9R4CQ7YpRz",
  "key32": "2FgKbxQcn1PeNVvLCMpYYRrgzGEbv4BLz7PC4zNannbmvbVVXfSz2E1Yh1xw4p6MWD549U4qK9nGnmJ2eKVCX62Y",
  "key33": "3xdAdEfD2sy9RaWKd7Lwpk1ewtC5dHiDikKDgAPkYxr2uCKscWesKtDyjhNMVRE8ayVpiHNEn98WivQhnZpYya5b",
  "key34": "52X4Tt6y5CUdXzpf1MXdzcJh3SQZrSi5GdN7PCenyWagHhjbGdfJEvu57WJW1NqnCmb6gv4xAeVPRQ4KsAtGZK3N",
  "key35": "pWqdjPRmD1wJZDSCPvX7Qc5RQqmeKjNpbugdB2DvCKeCBxdHJoXGjhgFyrcGMux5fKMw3FFJs4Zn18CF5whi3ro",
  "key36": "FzdcrwdHv1EwfdyzvqRuQMkdK5YgpE1fHiSoLcZjqAPzMn7saboC75yzm6r4aMNGNjcbbz4mf3MzPzTgVtj1uig"
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
