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
    "4aGV5wQMGbWSckSw6cjB82xTVCeWKfDFsqabRePNWT2ReX2Jzj7CkM1mt1kD3GSDgyXxvtAAGQTZ6AJZynF1TLTF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pZcLZerx3qpAc5kVHgUQR5uuUhzHkcDbsYu7vMMcc61nBNmmRTzMMGUy3LgmikuTEhZT7GQwDhK5tX7BUph2fjY",
  "key1": "4JRdpXXPK2WGpXUo3G1ch4HyCWshnSJFj8uyF5K9Ec1kYnHre8ty5FnpaKTeUon9yb6nLdSYk43P9kvXPScvXA4u",
  "key2": "bDgVvcb5caY9S9u1v8VpvUDXMHqd19nu55rRn6h8m3xj12pf7HMHR5PCS2MrMsVf6pUY3qkxe5sfCAhDe5ihqQ6",
  "key3": "45sKPyK2d1YPoqmg21zmtmVtKvgmu4iQfLV2mfhVzt4xFsJJxpUwGhTgiJBWjm5f4LDE8ZnsaSWveCDbzSm3mTUr",
  "key4": "2zBHqgq6E8g6NVAoLgsRcFGQoSf1wxMhNXoJnvPeG5TeiN6neh97cnbTy67LShEyrrUsUNUStYKr2VoAt5RuQv2f",
  "key5": "3WPGBJSrBLCE8JoQYBZECRkpT2mEeP6qT5NzV1r4uW7MB26ssiZbpcxjLwbmX1jvGDyxR7W8LTy1tzCUdZp2hCrx",
  "key6": "8MQV5qC7ytsZcXuZRh2pLB3sR8NYPJqdGeUYcJn4hwki2kjC77QyFoxbyTDkyrr752FWmJoVLUwU4G7JroFPQ6y",
  "key7": "2sv35UXkGPkQi2ZjqtmS6SoMMQ2zsjLYqCGmyDLPMGgAS4jMqhnBFj76fevLTCHie8faP1wKg36wfXMdyLkCUjv",
  "key8": "5WvdV7VZPg5Y8BebsCt6VzqfMttZNfg2yXtivJCkNxxyseEJTs8G4Pja5Jqo7zZCsRvbFKr1cAPfZikxfCAyNBNH",
  "key9": "YCYikCgV67JT654dLbgxr2CJrcCLUjtZoBnhKjsBDzEQ3matfFgSs3R9b5z2XbqsPYEUZNypio8H4mcwbAQ7vqU",
  "key10": "2VmuCH8vXwg3yESA4mL9aFDjqbBHYUaCeyKYoKH8Z4cWNcQwy5F3TcaVX8v3P8L1xfwzZFu5CH5eatneBv9o3TLG",
  "key11": "2JFYotLV8WWL9vPRGdSVV4SaS8tXciYm2kiJkpkiCnQGA4GhvTSZwZBKZFJJ5EChWsQ1QkcFVGgdNHsEwNM16FES",
  "key12": "2dpchxWPjbHRcABsVZApjkeZXVe4yMeQoNVMgS9PtXF6L7q6n8o9r6ep3viWyh1Vm7w2fheGbBmB4cLYw9JsdLhr",
  "key13": "57HRUK3EeoX5TB4iSnQLDYAXVCnwvyAvJbVWvgRTTN56Zwo6h8c645U9m3hR3F7Yu9PbpBc4UMzkxZD965FqmgZP",
  "key14": "4RJJLLPpYDapSFYC9N6qEVZGjmuo18XYm6tQiJMH4WRVsxsTCAeTijjb1XKGekQKao3X8whadBYhPQbwDn7fRR9W",
  "key15": "586XKdB27Tom4easfBe3omd8rkEspegoWPbJczWwG46gJHwYdbWCS29P7MKZcGF6VE9L1wo3Hbi4FJAYwftUmVoM",
  "key16": "3Qz2Km9dSFSS9uZV1LPAKStZJFFa6A3Pkm6frVqG32ihUozDwJT28nPZpWozAJ2q2jGZTom7AFiwNciaT7kJLnCh",
  "key17": "2x5ptzkfkfJSHR7MUgp47cNUoctTHpi24QhyubsDUmm5Z3LB7FaYaNjBx55fX2TJgrLhtuFxxPZuJvcN4Kir39jj",
  "key18": "J5zRh1WhFoxpNheDrDgTLQJoduw7ipWyC338pbdgCd5ckXpyXk1tNAbbJwofsU2GMZKznx5HhSRK75Fh5EFnBaH",
  "key19": "61SBkfZigUZpLZCPVt3FbnxuB7GVsfDAJF1hxxmjPkCt5qwsxJC1KopbSfz79P7fX87BfYE5Mth4cycMZSFQMvzK",
  "key20": "52SHuctmkBnR3hxFN5Hgn4Dvv8dxeDNdwt6bW1WTQqjwjjPcsd6pihY9y5nM7wPmDPE2n2MLnRRv98xGuLP3ya3X",
  "key21": "3LSZLmFe3B8RgJWiu8uzN2VioLe3HQKSRtV8KVmKKRkN6uyPmGagSDwwxdpkdK5KovnuHv7T7nMabvPYi9r8VN7u",
  "key22": "2WzShTZqnWYQGspf6KEv2SBc3o6X7QycAT75DYs121YPn5v7jqjvLYv755EReyPWv2tHocoXmL4LjuZghfcS2Zib",
  "key23": "22oRn6PSWQUrsSBrZ8JEiRfssCbKcMdceVgtsmfExVoq53R4DFXuKZMeQA8FVcVfTLdCfYmLd4G8PTrWGz6EevSQ",
  "key24": "ZkP4YAvSmhneUwpa4QbXfa3WAcNfk8wtU3a2qZqFkot3r67qTUNYYNyz6Lb4wVCzdk4Jg67dSc3UBh8irCKHrLP",
  "key25": "651PerbwpbmPhXVQA3iSj8zv2qmevqcT7Yof1TykithdN6gK4mzk5LpWDnqmEdi6EE3fcFYaf7o8h47KnydEg7AM",
  "key26": "PxKMBtf4yst1aiip9xWw7qgfKfibnzdRfZeLvxCPthSyaiUafdPXngPSXbGQdF3sA2BSMvW7LnoAKGS5rgXktGx",
  "key27": "4uqS9R8fL3XAUkaHQkuEx5LXZ8b8iykhCyoYpfMyaiEKTWdvoGnWMTePUZLXYFALqThjKV76Y4t9xay9TpdjZ4X6",
  "key28": "2dfZdsawzjB6ANKYE28J3xhAAVpZ66u8tauY64586f81xGhAqHurirbxP84BMFpmGSzC6nL8eSceprURGvnEfAnV",
  "key29": "4zv8hrE4QWa7x5LAzJCuoo1YxT7stUzM5CUvBjcWrt7HjvmFaVd1jiUxKErNYJYCiX2NDg26sccDVvmPNpBF8Rdf",
  "key30": "2vA1Wpih81wSFSbQVfmVNesoCWqF6Z8MDY1xGNAszdoWEaA22wLe4D8jfPwo7W1KZ9g1VmnRgprzUNhbBcqR2VbZ",
  "key31": "2rxJ117MFo5g8u8PADvaWjupb18d1WjTqLToh1idmVNajYFfB3ZvZb7xSFQunLUha1n6VdrGgaxxf1nTxPdZzxCs",
  "key32": "ULUVqJVfm9avUAAdEw9yK7xG5xB7vzYQikzRU1fZL3kzpmELyX29EVr21zRtShweL2r4rWYMwVk9mJjcB84zxmJ",
  "key33": "3yV4RNUfQ4zzCng3cWBsNww1o6KuHvm6v8AXRM9mTJzv2CSpMw55Yn545xPooUXjhAbKVSjLXeHotYLmmZPMajXf",
  "key34": "2nBfsp7W8xgndBFkDkeMZZmaLTQGFQscHNxxUhhxmjr2u5gP7akX6sw1nLFUnufFBbN3thRsvvPQa9TPNCTYRztQ",
  "key35": "3PCTqoehiLmDrFeLMYabEgszhKCfAW8UhVEKthKrAiyzXtCts23sy5TbRkvTRqATcLn3yEaZtTt6RycyvdgMLJ7Q",
  "key36": "9S9cN7WQHbqVryEKKhHw5ANs6aBJb323Q8irqM4q9mcxjYG43NgcupRQiiji9wVGupWbFriRt5UDp59pVb9yKTj",
  "key37": "5rLycttkPd39MKZH3UfZGXd6oemnfgADonivcgT6YZYKnsHA1CkfcgqoPsUUPEwXeu6HjkpCBDP7X3iaaECs78Lh",
  "key38": "65C2AkTDNF1BxpbbGCo8W6rQAMKkgDFkjgcsgu5WhARxNNkB1ZUYpJ8W6JguH8EkXa3MQTokm8o59HnkcxwgyhWk",
  "key39": "j7T1JU4WfZtLj7AJ4LP4AcVbXTCe3xk8CHiSPPbQdmoBe1NFtiQXocfYQ5wEa3QCYo5x9faLL3drENcPpHCa9Wt",
  "key40": "5ovtYGEyXnheKsN8LedfgfRzSYuMth1PiRUuHqtrZjJjuMDEJwQeBRPJCYJVh66NB5tgHAfhu58m2cg7kJ5wETxL",
  "key41": "41W5eHrZSrpxGpbYbwiU5svreK6ndmYHbp59AQAuiQGQNLkJAKuh5feCUpvbnfyRFDd97WxXC6G9u63xZHZfgyFJ",
  "key42": "32vUGAa9Y2xLJWfJUKb2MbVXuYW5cMnv1wBLRchVf3oDRazkYdhZ9P25PihGLnwPCNjSvzsLhgbYTSAqfveVa46L",
  "key43": "Jc5p1hwERTUvHJyrUcAcUYiDM7PMFZR3n1wnbJa2HnpgT2pQC4dpvngCshfj2KiKS883WQXkvA8Vs6UpLQb4F25"
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
