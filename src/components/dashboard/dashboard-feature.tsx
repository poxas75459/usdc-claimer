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
    "4YG99pWrqRgSMSi8Cga7MjzpkV2NEWMvY9kPKqJRmn4mSdTrfiBhDGupT7JbDnpiehiKrLkeSQ8EjEGgzbLdk8Af"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Gh2RX9G8XECR12y6KfkWZ2TU2qiVaP4GBHqGMQDGuDnCTMHkcTeGUHbspsj9Eg28uabKr67pZ5U8eGj1JN1AeQW",
  "key1": "35i2CbYJnMmcrUTBjzMrm57PcTZtKrXfdFbUgTNBzEmTxfpxtgBcuCW3iWfoJVXimjoChetS9TAnNd5ih6GZahXM",
  "key2": "42dZ94bc3NKnumTRwbjxQAb3fDM5eULM7vaMWGSm23vVsrwnmTjQ6aEBM2NRuTrxGn1F3AndmaUjyrs31L871LaM",
  "key3": "2aJr11bGpB4reZU6xzdGYALw83Nh3Z5t98gB6XW7h8kMdZGJDVS6c3TMdk5wmRo3G9bjqN4M9BnYjVjiaufQ1x74",
  "key4": "4bDx4zti7GWMbeCpNUjynCcfV6RetfeojFzZ99AKt9ZHdGUrqxR8h3sNLxouN8Fd7jpcw2zt1JDMneyBYNqh21ug",
  "key5": "fnJDK7QVeYcTohsbAngQbDeNhovFxDoH76Ype4CEdgy7fR7r43bEtwUi2VQCPx2iXMWmnqs7m2mdML3QMepyfoE",
  "key6": "3jd7gxpgubKagT7ofkqCGUojuZAJEYL9ma5S3PEdFCpZ6T47gNUgxKzeT8xo9wNsnKT6QWhdLz6ro3gDtJUh11R7",
  "key7": "5z7on31J5BpRqH3w1kJ8MPbYmgydNYKXDkXp9sR9xxagem1D2x9t76NShkNqWFYAFLDD9ZLUUQCQVTQbZHXvrVTf",
  "key8": "5RrpFWq5YTcPZeRvZvG8Dq6HyCYLBeNrUmgVhDnJj789N13Bq9oLTcPzUST1DzXYWYZzyAgHCgscnLfoq8aXXiCd",
  "key9": "7AZ9vEZxZUu9RpofrFQpRtMkDGMdtjXrx721AS3kreWwZMuXAufbi95xp8YzK2wrviNU2BXD9x57h38ZMri68bW",
  "key10": "2eCVHJhyjD1rbXoSZKAdW88MaWdU6VfborxaVo97JVHaX1bQhWVxfEJHsyg7pUTyD2nohwXYCDka4Bo44FYseMr6",
  "key11": "3mtXgkCuHxgFWaygrfbu353kx6Zf1nRzTUooAFniKF1Uj1R9S3LZ5nLw39JP29APkPdhL73wkyNqtCDjxbXVkEhQ",
  "key12": "gsCmUogfcdbPpBCNFwweixxBrUzHM76f9GWnUvL4RUzA3xaxtg4RiUpiktq6s1C5d9UsJoXYaPVZBLoGbX6yuHj",
  "key13": "2zwjCNj4jneyMwLJpQcCYU8J3MvnNEJwMJA4aaTFuk8pcDrHwWQ5xqPC7mYc6oQoHE56bov5k7k7ndLimSv15JR9",
  "key14": "5imih8YYEJEZModGAM4fVQ2zf35oLU3HRnV2NV7vXMNnMRH2KMumFN4NgDeqXsv7XHzoU2n4Uz4nv7LkbNrwpNb9",
  "key15": "5VYaoLZq7EoAUuPrWJupQwGjtegzcNTCRtZ5ASwdy9RG2jShA1pRFTjPJ5HLBLbtsUESfmmm2N8dHBkDPKSQL7bF",
  "key16": "UfQ5J9FZ4nVSKeL9CUJyNgwA6hNXEsevfFzgLEuGSkRKiYdrWEDyrn3bXR1sTH2ZkkLAu1XRFsgHmKXBCcS614z",
  "key17": "36dRccpKFDsaPLc3crqocjEThsdDYt9hD2VpqXZVzdvTai7au7m6vrHpbUHrjH4QLYnpziZRogPJoFriBnWXj3es",
  "key18": "HcwCPUPyePTFXzLcSY4gRJMTHqdhPiq8EaTJwg27BdRMMC6oJg9oLAtRAb11p9uc7QnpVcM6Rek3Zpp4FDaJVSK",
  "key19": "5bken7B9AjXY96bsGtqnARJ6LvpqNNiaxgiZ2pe7Px1DEtvxiwWX6ZXEPVuSWUqS2QiPPoJknrDuiLyyo1P6R2DK",
  "key20": "3WsJqvGDb6ipc8JYtTNTq4yyGHAbHbN8sMjKfAWumHJxzhWTdE3Gr9XcGcmfarkzSVXvtLYEgkwKJg1gDD8VyjUA",
  "key21": "H2SMy5K42og9WQ8Vz1yhfKpD3kSqxB3V3oGC3U6ooYmpfsbPUbskAGsxcEcZGvxFwUksnxw5eXxyLa19kDe1g8w",
  "key22": "5Riw9F72Mt1EVeC8ETLhbDNy5TkgDXJC8hK9ngGbQ9LVm2vVugY8uWWG7BVUYSZLYWL6ZnxBxu71MXN94yzRGyRJ",
  "key23": "466vKggWZnbgoeCsaqLBmdSr3NXNHFrxpPSqZMjDJLUTW7m1p4s59x2ZajqmF6dqh6kwvAbppTA55UsszJVbBfeJ",
  "key24": "5vGUD8TnJSqLo8UkNjSuZP51P3DQFqcVmZqdX1Wk351m2B1zHt4za9CQg2j2oR4n4ukU1n6JX5CYmgzfPixNeGXY",
  "key25": "gPAvxi7MwbhGSUD4DKRCkjrceAspAPRN4k9Xm1NVyjYMHMYUCVyPNzMQpj1QGs8YRXrZFwM85DH9vPMTPefys9p",
  "key26": "a2SDUZXPDUL4cKJXrsKmGat1Lw1TDdbwRSfgsSXZDbGtqtJayR8LPTcPYk8KdMFjW72wfEQyWGeP7eC7RoVTi6E",
  "key27": "4utMmpUj6fid5RDY9kMo3MWbfjVApDYFjnCyLTDBDTzJJjuUfBD3hvmTa97QkWiuyAxBd7D17eHuqXFzV1Rv2Ek4",
  "key28": "3msbv3zr5SfJwbT4uVi8AmbWicoc8hWa1cqXYfhszRgoqZCP2s5xzwSrx9y4N3bR3pwKU8GmBby6aYiTZhwVoTfD",
  "key29": "3HYXw5jpQJ2LKE75Mg9GYNFFMRtWreHKqDB9pSLBTVz8XGfjCc4k6sr4RcPf1sneH5h5mE9qp7L9455yvKZ1QTf5",
  "key30": "28Pd2k2h3rtAsNuH6ZoMi2SjfwFHXpNY9KESUzhMviwFztLAKB8QNq7wq6FmSUULYGTFgEV1t147YwLFdvNocB6v",
  "key31": "3wS6ihv2AaukE829XMcSyhGqAxZR1DU5nN3eekq42q26PT2RRQV62Mzdhv4KwPKwrubdFCVMhwD8FijxQi2W5ZBE",
  "key32": "3kZhaPR7VUHBHnKgGXgx1DQGunZxwgaS8mGLT4mPowR3syWspa61ycqSU5HUbbLVg298qpYggaStmMwvrb3tVsPC",
  "key33": "5reaG5mZUtgDYcPc7r51JGviBny21mSZC31TTXyAjzwK9xCaiUcce3Rfd1tng4QY2AuE6dTgoTCVuK8U45zRmfu8",
  "key34": "3xwBG1gAxKXn8bAeqyh2PvBF3zxhkSgu1i51VWbonMBq9DSgwZDs96XXsCiA2sV6ZsekDPZ5sG6bL3dyutZC7Q6R",
  "key35": "2YUQYjAmKybukfxMxFG3AGJyQT7NGNjA9ibcFTLG9WEMLFmKFZKehE3yyEphV4bgz5MkRg4mJEKfQCL7Ey24htcA"
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
