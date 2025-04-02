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
    "4N5RaQQ7Y6s2wG6WeJH5hnJo1G3yJE2Hkrhge6VnPSTPczcqZQadCamPopBqpQTQdmcB1qW1q6Ca7v9Z61KZYPXD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fQNxp536BZjAfSC8wEP33hyzjMAKZKjc7wrZhDtptqneyeHK6pkAqzL6kYQYEouLmYf7eVKftdJhEHjVdHAWaDs",
  "key1": "3uBwqUwAjPd64WvxhzphouggYhwzs3fksCmcXxEQSPhyQ547muAGHLcaGdJhJreUGxZbctjhPE74DpM6HRQrKpNN",
  "key2": "2mx4e3AVoFNizRKYjQXRvoGB1rVVkVsTexjnjXj9kyzyPTygUd24J1eoYUbSjiAEeQzesKaruh9ebuUmyrRbZ6z5",
  "key3": "29mZ7XS3wXCBNzCrED4pkVYMTJvs1dqM5pqg2LZdJwVLz2mSMa2BiPNRtKa2WBg9i1hvsYYtQykpVdtHCApjKNrh",
  "key4": "3nEPCtMdxbZajN4sDxabpaL2wLaR6CfWGxniLcdqmwSrUC5ft3LUVhLeEopd4nYbvsnwQudLzKDfmyAvbZvGjXNL",
  "key5": "3ETEuTgCmRMyU6Tmz1vEsXSqJ9qr8eis87LSDkB1TdykRgviB2y2rRv3XGnCQPfaz82nFrN3J5JpFWE33vu3APWe",
  "key6": "1sLA8E6buhfDPamCDF77sas6cjPjzLHQWRLr7HhfFCQzoUjvPZHqc2a9KV4xFjtNFNxLuh8nEf8hkV5B5ws9tV4",
  "key7": "257NLVRF692Rmxo41Nb8LsDnvdDuUUjsVsmQpPV49oq6AYsTTcCnriTHSdzBTw2dHEzqcq6Toi7v4ZLpakncfiMJ",
  "key8": "pwRMqUoMgz6TnfseWmWJgDdtYxC6hqGTRi7FqXhBZZZeYcqZqyPbt173B3VPkuBA7mWpvaS2M5MushazHxAGrWa",
  "key9": "5oKhEe6MdvxrxRBm2LDZaay2DoHyDmhK3zQX2mFGo5MnQrs8VxhCCV4thBgJANpUcY9PJMAFddfXVaursttPmWvh",
  "key10": "3SJEFnfVSZo97Vv9FYiTigUAWp2TKaqeaPmVyFMdke1dk5WReWu52WCxYWNacntkxq1PzZexgeVgUXNX9NZv11HW",
  "key11": "ztU2omr4Wk32hSC7ZhCNZ6gjSP5yR5CE8nbcvjQKx5Eqra2Jgdc9CPHs5pWQaYURfwtNsDpiAsN7MeXdf8fQaQL",
  "key12": "45kiCXdsXLgT7YirvrnhGhXTzzivm5DUAB9ydWJG841NSxYM2FWxSnYMCJeE2S23G4f1UVYUaARMBztbKBkHVPR7",
  "key13": "2cPUeXmEYhuxtMSZ4WsGkUxBjJexTpY3ihhFKZQJGavE3kpyioFe7UnnocDLyNfsyq88HfE6gQ4iDKWbZYfEpZ7b",
  "key14": "3Um33UkJcune6ANYya5G75RE6Ai6qq8tsEngHuoBywQghVDdEXuB4ZL3L2fw1czULz83SEw2L3wzGcPbGamjpHQa",
  "key15": "2NokqMUQ9RjoNEMGQxwrRHkdkCjP1Mo45ZLoT8vgEU97SxRevjexVByTa8eoUMGgGmvQMXJgPiZ2rtAvjvcTo3sb",
  "key16": "AVXoaTc1Ly3BZG6vaHTgWkugbXYfxbasXW4mmntUAxKu5kpr9qezfVmPxPz18UviZxCegJxfjZF6jWbdK5MERqj",
  "key17": "23bcCpYeHmmv2fQpUe12H4mkqNkSERztZjLda1VyGB8kukdy62CpN3RwBk81rXxQqocoh3VLqL8ck4cb6WCJM71L",
  "key18": "3S4DNbK88BKCxjvboXxqMtQFEWc1LTofpoEiWNdieLYBxVaabQp9HQ935j1rCQCkFStVVSLcsPSTwwrzPHfhST7Q",
  "key19": "3ZEpuUokNmfvV4k3vW2nXwqVqHTGsoYkgi3Ede5VqTwUMLaRYck3XfmQ6NCK3CuJjZb288RTJFFDVNHqqUNaai7c",
  "key20": "38NZRTyuWWRQZN67QT4ANqxoerAbuP2vYgGCdpi64UJHaHjHJz5D2wgdmjqkHgD1iBRUcbzPpwGPN2VBRRwhnc8D",
  "key21": "5mr6Y9MucL874bTN1xF5SVLG3tUspaYj7uHfiVF2Jq3Hsx7avatVbyFi9uvJVJ1aJ2648kGv4eyYjgLUW9hSMkTH",
  "key22": "5As4QDWv7W1c4B6y4E3w8pDuvydtFZxE8pENfiLogniH16LLHx2QAUhRcJd65FxMj5kX4BDDehAZwtiMBisx1Exe",
  "key23": "2pGTVLNHmdyRAwCeoLwDz5NnCt2Q4pUCUfUM1cdLLZW8rDJSvW3PS8ha52sz7Tx8k5kkxyS5bGC31Pb4bwC7Jt1G",
  "key24": "2vhhXXZSdz5fHLa8CYDgDPhe2XPqXytt2FXuu3L7ixUqdMjpMuDbLzEeHvWkjae8vbiFYcCFMCL87FuNt21MLEeB",
  "key25": "8YJogKTd5kCmbaGNosUGQxqWnWqLNqsdB5BqeNou4Kom8kDr93sSHNNyp7sLdGRKsaVvFjCTgGw9W6JyaEz7GtA",
  "key26": "64HJz7xMLXqpz9DBVnnm9PYqCDNPXCdpdrt4JS3JXrywVxAjXpYEpfXU72HMqQMpAT3teuEfR9gck9Ty2Jq7E9Eu",
  "key27": "NyT6GbNkEfq2L8JHyi8gg82mbd1UHXhH4ef6JrUud91HVBxui1RHYUqtiedqfgATerEZTTheWr8vewn7UCz3foM",
  "key28": "4jY7uPPuNtCR2uJDwv1Yq2ozfQcT4XWZbMhq5NUr7yPxyjmT59Zao4D6Gge16symx4znUVL9eJ8f3iGhgMXZ7GVc",
  "key29": "43dxsBQxE6ZgwEBdGGVFXWm9HPwqLMJXQ47H4HoEsZzN3p6173Gb7ZJNuPwNZRzMW2kc6iARBDcoUXf92oNvzmG2",
  "key30": "27rzT2kpL1mQBCvsM7gaquBMHfmnNdh3Q4fbBvAncAxtpRxSVVaarV8dxmmvhg77PHm84MghEKveJ33i4tjaK5CF",
  "key31": "2zbv8xMyAjVhtpWbx4uZzoaWGS1Ep3P7esvMcJFrtDNcorST6Vf1cFeUnCzipZCXJ1DdNM4E8Lnhx5wYVJ4nhrJb",
  "key32": "BYDAE52SFVLa6mxoyXoXHEqCnSBEVeMzQ7xCGotfeNDTyZ2T4yo7utqufMdoaXAXCm21MMFy7MGn1Wi1y7UfeDU",
  "key33": "2RBEUW6P7pxyvgHX7TAz3VV79wTDNArV6nyy8rkXTif6LAkdVBe83232qvPjtTNrZcbwY6Zo2JigPP65NQ2zZpMd",
  "key34": "59b8wXnvmv6whQ3vhmasNeY4DB2pjnRKSWb78f5hRRftvoAjyZ8x4gQyFCfB7PnVpD4KZQ1tYTZn52iHyhwRAHov",
  "key35": "3Z53dNNxqMbbmAXFvU21zTj3wqUHbqpUeRcjSFaAegQ8aZStXTZPRf79gQ9GT47VxhG4AThLe7WnbvvTpGYGpKTG"
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
