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
    "4Cf4bv39gyxQMSk7B8poVnzu1MjTzjLPzVB8e7SG2Nqq2NdG3tjcerK3DfbMDG78Sa334JarfzMPqUHgc5cSZtn4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "coHjpZy1kcAU6HjhFE2upEf14N4vdMmi58vdExsruRvKLutSGEj6ZctTxHk9EAjAfyozjM96Aeg8QQXdoVXk26b",
  "key1": "65jP8BEGbqq53EcKDnK7p1UFiMFWwxdypFBkMPfXpj8o3tq1ohjLu3BMpG478jPDMJBiDDCvTXboVU8QiTxrFjjE",
  "key2": "5nHTFcJpcBqmip6yAss93f6TFJ2RcjUqFdTHhz8ug26YpQzBbhhaCxzg3RqphHaaPnG6Zd7ReioaeH2Rn1Wxr9Cv",
  "key3": "4wT4X4yxFzBiiN5Ya59HqvGU3Gt9bT2AK1XCXBCgDvsvve4Av23o8Z7TEoCUVPQ78bH2ixSsShGDc41gsYVWZ1FF",
  "key4": "5x7ckM6bJQ1sHzEnzg6y8zLXQpPeGhGTkUpJmRRGr37WYB1dqY2aFGyvX5R3eXUhFUr3NTDKnagRLWpNXKvkqKRS",
  "key5": "4ThdefaRi8FJV4mwNkJgvmezASHHXgtgCkbaZB4wuNRm3ykYX1pt2TzEwARYBqcpAyzdFERRC7bLGJr3eZKJnCSg",
  "key6": "3MJsehF935BrLGLVqbdFrQ1ypqep8nw8Hi4AM5MfsaGaLj2wijWXcPbNZZfmvFWDVroJqUKvAGsyHFUMsyQyiyWT",
  "key7": "3g4G4u8wyVqFGWAKsPoB13XrB6fyCicmnrD4ZsDYMLxi3ZwdRvC2wnc58t7aeaQn6aumkZ7DCTQfXSLAn9aVJFyQ",
  "key8": "2yiXCfGP4Fan6o37UssPaXcipxZfJQn1FFpAezdNmcF1cMXApp8DYe5RTMP3tCnF6cpc8Ab5QguhHTAm8r65WsEJ",
  "key9": "5s1RDe81JFGkMF2Qc1AwSUayiAjKJ3kY6U6SwNtcN4CuywhwvbWUmGbS37bK67n22zUp1hUwnqXm9Dt7Te1zRWQz",
  "key10": "2Z7gYbtVtQJgxfZHhRfDabuVr5U2inZuCDMANy2WwH17Uf9cHAp1TogJKttEDAi1fnV4B1wEHmiGfMDHB5J4sSiW",
  "key11": "vTNe6AbQBbaFsEPVo4v6xWuCy95KNdYgBut9c8akwxv5zAiuqSqkUUNrTdrTKK9SDuR73hgT1i7YadjB5wGo9dS",
  "key12": "4f2svtfNNsGRzP3fgh9PmfzVk3Fao99jfiY4P9NyufB6yqb2LonKgUYvPCvepSP3GCMXnnSyHKoYs9giX81CAAQo",
  "key13": "57ztJu43ikTiLx3JTqmbupphWQZNsc2KP49GWYpUy7X92bf7KTrR6EbKv3E4wS6dUiSgyWgV5dFUP5LQP4Gpeonj",
  "key14": "5GRBEKRzP2fbuEcaDHcPYzUxTyfFPP7BAg8y4JNTvn86BU4ebMxZWdsitbzfdLwydpQUt4vf9XJRK9m4JsvX4kcM",
  "key15": "3GVvam4wbqoTMzQbMdNGpoqbANoCrwWUe2fh8pUhiJWUbV8eHvsz62ZHFyPzwKaxAsGAScAUAhp9a9crzUUkH36Y",
  "key16": "4v8i1WqMRRk5f46786upDDyj8SNpcyxfeVp4m2hWRpjLhs3GU3LXoAQqihifetzXLCB4XWdYtEnb9AdxBdpppk19",
  "key17": "4nSZDkSHvij8nVWaoorFM9kDYastVxyabGj7dnVk4UBaDbibJtmmhQDp1hH6c1xhpp5D8J5f6st894S5tE3huprv",
  "key18": "4H8uT6d1hG1vkhTLxGzGvZqa7irCbHqJRDU1wMiSafpEiZzvQorfzzhuSH5j5HtfLVYqXU7PoiQC4TpyoyieSh7E",
  "key19": "43qagcpDT38n42K5yLucrZNCGjvMn4H7eCihLvHvAuMt9BrGUVmiGnwXYVBzMfCUaY5Hjnn81Fq2mfpvtY6vYHFq",
  "key20": "3AUeuS1HEN8aj4fJ3gBjMed5pnYHVv4feUVEeH6obW6eZYJcc5PRFYnPBNE7tzi5zcg4jQbKyDbkP73NgM2cQyQ9",
  "key21": "4aa6yyeysiE5gVydMxRGxLMwQB5HLvZncuXJrDsMqXiykPS7opWEVcSQ1qXZBzzrNi1xEP1PJunFTND6XZbdDAqP",
  "key22": "5nZFSHYF971GjfDHFkXWwfKgJxDZTAzxEmZNKhu2QzMckoEMjpQP89eUsoQKcJhCCf8hQ4Nwb2QTG4iiV6y8AZss",
  "key23": "3nTHzsD8sXqG3pjBDX2Q7MZZEH5GhuLebqJc3uaUkcYjsQELj9KW9aqditGNNcTjAm6F8p3kX61KaBoUkztQ2mpL",
  "key24": "5jH2kM7fHNETJsw7pbypx8v49v4trj89si9NA43Tqdb6MFdcyPxyU9iVoMSFK72wxn6h5saDyjkTKMDPojt41tEB",
  "key25": "5Dc5VzErEq7NVgkArVn2T9i61urki21nEhsAoZzaCysMam273FiMqiXJrCbHRbTtMbktn6mWMFFHjxDCEzhdppjH",
  "key26": "2gojowQZ2UM7Je6fx2ET1j1HWMnSX9QW5rJXCXgmX7YAv3i1oaARgVBqT9j2qz44k8f15sjcjpUzbHFvhcxfJ4Pm",
  "key27": "3pAxx8JFREfkpbfEpDgFequ48fkztq9xHsCRsrv61j4fBLUpqiNr1RvCqU2frF5j8TUsbxbkzQCHJUgs6hEJpbhF",
  "key28": "4XjKqk6DoWn124miL8anvFpM7vrQginKa49DhR7FP1omNTj9MmVt1dCDz4ovVxhGycJ8r8JqCGQbRGH9KR5rj5Ri",
  "key29": "3jPvFS5Q5vCyPWxPZ2jUhszpvpwQeaYhaqkg5L9hmVaRAnWT5BfYFuBYwZjDYTktt49kEJehxZg7DwBfb6FzxDXW",
  "key30": "2GxQedRfY1gJQFAZdKeqd5zvJBndNqRAqMWLgria5469HsgsAUVCtnPvVP8xwrgDT1VpkzCbAcSwQTMqdGiJV5Pf",
  "key31": "3vz125QiuJBQ56aqueB67nTrBjqjptb8zHusMCwgGqpiE2ks1qRGsvx7Meaucd2MuyRoizpSCnQGjZXVaQiBvSZR",
  "key32": "DpKXBePG577mAEp5iBJvxyc5Ehq6iNcWr3b93j6onsVk2xrocpj5eQ62BdyFG2v7QCkGA1dKu5EdkmbdejvGkDM",
  "key33": "3jRQx636Yyt8N3tTmC1nJbPe7me5XsrawNxHB8KpsDWYcRwgReGNUSJNcDn4TkaTwm59UhDLimfstyrWeocfxicj",
  "key34": "AcEYo2wdQA9uttm4KKKumQxQk3nN5c5pE1HN8wAN9NgnFSpewrj4468j4Z9UnCeS6PZXapNnAnkjb2cuGiPyNo2"
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
