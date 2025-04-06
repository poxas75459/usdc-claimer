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
    "2i8KB3tDNvxPSBqEWC5uJPtvfbeFjTNm5Qim7cnnFurWMFvh6wthia6tiBKVZ3CvPmUffb6w8hzSpWpNUkyjeqFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pWYvSJHQSd76XT87NGdt4K9rc6D5JnYmgSKrEFRzA9RH1UL4ffcQ69PtJHYBBeZrspM41crhEYLG15gTMDMnHw8",
  "key1": "63Hfvf6FS1kvrRLEGgopK28LdLhY12Nxhk6YWnvtD6A9Amw2HtNrLr5CybkpKQTt31bYW9mGcptGs3D1BP2a5G3e",
  "key2": "uGwQGYhcwjZ3nsvHSwhG4GkSM4CDS7Pw3RuaeZxCMDpES8sa3tJZJwZTLFzic6W9WcxKRUY58aANsQhCVTDuxTj",
  "key3": "3bkfTyZjaUXQzwdQyjfN6xtP6SZvynpD8bdeyqJxVS621Fe1xV84VYtjRSAVyeiCfDuhXWxR3bd5VCLDzLgu4Ud2",
  "key4": "2sur7sRFn6fFZZPXHPdz8x2iJd3eF7juHdkqWBJnYgLuAbwzcrmGjMdnHU9ifuJJ8cP4jdGp8ujTY6k1uQ6FusCt",
  "key5": "5jV3FHf2p3A23oJ8Fbpe1qDUqjrgvVCyDpmYzBhz4uN1e35NSxiUvvBC4pmPKw4SyG3LuoVi8AW7esVW74jrkjNW",
  "key6": "2uvPoJ1wJEvqxN4aXoEx4NFk7X8f54nUQUeBETcVNWMJxfBGsUrtioBGxoufRoXPBdin5SMLidZYK2HnA6MEfZjC",
  "key7": "VLt85jNBDbkG2aLt3RwZUgeGcvq5s86GHtGRtr3Go9u6pw3S4vpJc1Diz1XNiQ37HWUFDdhVLDvq92UqSMpr7T7",
  "key8": "5B4qLidvA1JsbkagwsxAqPJEx2jE3wmdN756MmBX2kA9djfT6eCCumKFaWL1rYiiyBM31BqXnbsGdTxZjFGh81H2",
  "key9": "388Lxd4wLwQSLwtUyP31y3y6gxRrpqXSrWhwH2JzQaZx6YRA53T5H6uxdQZAvkRWERs8WkjDJx3k6qiWWScAjKk6",
  "key10": "5MdfvKw4wo6WjampBTsvZ9u5yee3dxJPM9fai15Q2F9XZhpqT5SpYqPmrC2uXSXgPMUCFPV3t6LGX5f7nWYgqM1u",
  "key11": "3A22LWjYYVxYkyWBJaNFxhvTDYkDpjbB5WYw7nKP6YuNq775Tt9QK45ttKqFh2tocjrFKjaaRRvjdEZEW4ivAFJG",
  "key12": "22SxWRBiR5ApvdRLmRCYLKzJw75qWSGqmuJ2TtwX3jsxtfixtgFGcHsRbNkfYwtRayFNUPnKhy8yCC2giHnfY5iJ",
  "key13": "5DTcb99AbHdXQq9gyyDtmttZDH2wN8KXRiF4rUncTccT8NSeJ9aN6a4AYHSpbxXpoYPeJbSX28XuSa8ePhGvJ2FZ",
  "key14": "5V7ePqdge7RuGMPBvpZxMZE5S7qVEfwvLoe88RnjtxS9stBFKTU1Qsp7FTHJKXSZC1a3EChox7uEFpn33cFy1YiU",
  "key15": "5iB4nRKRJR4idtggTyF3zQR26TJfxaaE4UVUXvyodrjBNKNiefjwyYRjgzLUK5TecPDkeybzVhe97b922DN6QHmX",
  "key16": "37N7wYAiXd5SjXGo9rJ6KBLAQN8KZDzywpPZa3uwfJ6XLZZeQ9kuB25rXicYaAp7bqepE7JSJJvWk1KEKwLhrkLs",
  "key17": "5XJQeTpKPFcB1WK4ZFDr7eRVMcUdtrfLQREakf2aT8HHbzM18u8dA6SwhNyy18fX8RDMws43D4XDqUEyzfzgmRNJ",
  "key18": "8iNf6XdhvdGciHupXJbQiAu2WTpxdBD35wG1NKNfvyPt1VqkNjMUSRcRQuo6vpGrZoyQJao7vwsuQmVNNjF6zgF",
  "key19": "5GsLC2zCobfA42f2HmXgsKpaT3GtyjdM9kMN3QDKzCmoQM2BwWkMgwYA8HZt5zhW7rkgvK1Re2jLLYG8vnMT7T37",
  "key20": "2FQaYEGLLU4Fb21JWfB91qM9stEWfHtVXwGh9bh2wxgy6nkJUy1XfNBvf1TAo7NN9wuWg1jnUqpuwDeKfFa4vKSC",
  "key21": "KyjbFFkfWGtFBbr9QKRc2URH3NTeKiVg4TZZsFJSSy4H5eUwM5ffTvix7pMJyaiBBA8rVs5PdgLNW3Ktv7n2AFM",
  "key22": "3AqutNK3AZTgxBnLhaFxg6pN4XcKX9MvEvEZAszqeH2gHcCPpw8MeiD4JGMoTsyvmP47aqNQ3m843nXVuf3C4ivT",
  "key23": "62qzFJQHr2Bo8Mjp6xdJp2ohJwXVtfAn3gkDbFyHEQ5M2mCYdiB3aD293rZAXbEeg1xx6jkSTCNA7B5CaDkyMivU",
  "key24": "3pqGmDfk1dg68v2g1Ta2CUmEg8Vnxx2Laovww4jDV19eTetqS3yKNA6nhpdV3XAgvNxjWmsnBP3Emc4G6hVYMxUe",
  "key25": "3dhADNb7t7A9QW8TugSnpJgoRYGDvaibW7vFKYeKpKiSV8GbQpkdBSG7e6WBJVfs8fMpBL9yseCaFKHqU83ws7gs",
  "key26": "5j21MwwBGZhUazxtXdCFDJ8r56Qvp4FHJFgGsPq29azLwvD454LpmF6BQgcegP7P31jLm9nmpbGa9KBe3kuyn49d",
  "key27": "aePGzjVe366wYXBjvHhFuTGHqvdqYwSyMgm73zxXfQRsQ6Q1v7Xuh2kHYeuoM7GKEGdbweeDcVMXZE4Cx5WCpD6",
  "key28": "4gaMQsdYPAK7sHCb3gqLi36jUz8jXcnXyQR6aLe2YYqGVQLPxyN2yhLtV8ZVt9ERgzDec5mAxcTkQiNAqG4JG6jv",
  "key29": "2nK7EK2RT1vm4BT8rXwPTFeburho8zcezRFA1JLcTK21gBAwNyVMqoyMjyEz4mRPmbmA8YDfkqgL3Wv4UXduzncw",
  "key30": "C8tnsms9cwEdwuic9Aov1RhaYUwyZqZHvdck3TDcHvPKs5V6H2NoJe4hUL19DCz4TxNrkpgx9rzRpWBnY7LqfPB",
  "key31": "AKY3cztJsyeRjTXAAYfxZc5jQwGgAwQ5RhX7U7gjxLJmpPs73Wfoaopz5MbzVB2UWF3vR9Q3xRCuSjMar8Qcz5m",
  "key32": "4gpQrKBQH1UdhvdEQvhBJLujgtn8Aczg1XS72wKUjXkYg6DzBM8yuVTWrBWCzu4KFo8NCRRKNwAM3s5PPkaFusmF",
  "key33": "3LkoQna4FcdaUjAdgzsEcy1Fo1wuzmThXex1FvqqYdmuc5TUXstRGsJd7uqtW4iCRu9LizFYPqSDPNDiG9VNfwer",
  "key34": "3raWdudzigawNZE5S25fNf7yc58qSbe1uYhauv8Gvk3LMXGRrkDRUfPPHWBCcnPkQLhs6hHFjKSk7qufKJYJgM36",
  "key35": "5zoigdMH238xNTq59DQrLRnoW2b3UT3VcFb424gHgpEYtn3yXtGprgB7eWJ9K749kVtdALVPj2dQXzm9Nfo5iArM"
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
