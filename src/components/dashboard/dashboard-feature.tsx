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
    "4PubFXVvFQ4gBv8j7Ywtmq2NXw6aLmQEkdSjotU5vH95TaFtji9MuYEmXki1XSKGT5nvGveSwwdSiJNLsmPnP9v2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "339aqgBqypUrJeDPU53tL3zKzFwnLAKsRCBjKkUEoa1q5o9u8uLvLqTDi7pMzAfphTtv8dRKRsuei3c7im1vQiX4",
  "key1": "3D4s31FLi341rBqpn45GmkA2sWfbprGXdu2k2Cb4bBZieYTMsV9a7nQhFzDDXsnWvUhQM7unMGWVjKGMkaAwvXb1",
  "key2": "42Qpv7D4a8vhrpPZKy4JELSJz3Y1oFVzuTPF8DMkFEQ498GSXMdvZTC3wFRF3LnJwRA4qd15s9FSCXp7ob5EDzRw",
  "key3": "4okspvjeNUiBycBsdTgefRoExxeR96vQD8R2219kpD8t6AL7ATeudGwD1fc6ciE1h6JLVNppB2XiZXqanPtt4Lwq",
  "key4": "65fq9jkGwrZYoUZjevrDh14YDcAcQMfDJ7QiQdTKJMGQtyUX9xD2SQiyKEi4DyvaFSPCTNf96dWKm15wbsGGqKE1",
  "key5": "a71AMQNsDDiFBJYGcCoJm519g8UhztkXvANRyudMYUNQZrDwSkr4ivz6i5VqqJkqoXepSqKwzasVLJKEXZXnUbh",
  "key6": "3WxdaSmTbfCEW8ZXkpV39zZNWJgDAHVGbxKDrpxhqm92riNadrTqeeqcY1cfRRJBdx8BE7zMXqxfwDHUxFgiKkK9",
  "key7": "2U88KChjorND3dxfvvnSush44fuSp12Eh7R1xVo1aKRDYKu8tE15CWsgzKwjmKwcJ3d7Wjx2cZ4SmsaLpdcVFwEf",
  "key8": "59VTuAFdsj9YTs9D2H3DPw6T1fuWdgvp7CG58dC3gcTL2gUXhtaPjh7nRidbRDmWwtXazivr7DYKZq3Gk4Ct6ghn",
  "key9": "sMu25WnchThv8cdvkaiqvDtvMSdMzznbPtJTaLvtgWvsc5hdG8ATY1XuuwShN1iZRf2yf54wnSnPRkuiALua9oA",
  "key10": "6X3tZHy6ujx4yTxUz2w26wJ6931LK9zMrGGFjzxC1hGqYLy3CLkhECdR5LZXaqXaqcPh7quHgEB7gi38GEkTEWq",
  "key11": "2EpFcivfaeiSosvg1G8e5hirSbexmY7qRqBdXqm9t75wkannPrFSWNSqeeuJEsXqL83JgmDihWJYjFAW145xAY5Y",
  "key12": "XD2tpLZhcWR1xmXf8RjDiRfG4HbLZ8CkQQ66Nx11CEBySwNqbqAvy7nDK234mHmSHa7uFUD9h2SAtUHnMKp4YUG",
  "key13": "2VzrtxzHQmoWV9AVbvpuzg9qNDd5xUVBR4PUULrUr72sR6RVC5tsdtBiJVtf2ENfyW9tPjNZZrUd4o5AiBJGpeKe",
  "key14": "56vN4V2LyEz2aZ7EtpirJtAxtdYLUFZ2hmF5rELeWCpVF9eycNSYmN6Y8nRLLxx1xRkW3wwGbo9psjdfmEwguZ3h",
  "key15": "459fWJsfYw6vhwVE81eVvg7e82Drkpr4AKQi98kgCNtkvS37bCteK3ePXQcw8rM2i5waty3ULfaufS7R3rVsjcMJ",
  "key16": "4iq77jG7iGvdunjT75u3KeqSVTR6yZqG7Gr6ZqidnhqtunHtGbH96L855rm7om5QzRTEyQcHCnh6ue89vGLERp2J",
  "key17": "2a9fymXhM9WLFZMtWRy9pYnKBzaQLgUvjXRwVN78Z5m6C2nyHtCbDQbk73vsiYFVvyH9RmK32nts7rmu5vkFQGH6",
  "key18": "2QTjZFuHmc9vnascg1AP7LZJZVcgEEJcpjgArkLbPyrqijZaQVvkCgTuVZJqGHi6QRTZ4JrycvZkqN3AGp43gYzt",
  "key19": "26JUp1kSCUEHaBKtYM1xhgCjRwDq3mrpLBuiiwvgq5Vfhq3X8t8CtVpbHuVQjjLdAap2j3m7abFmAx1eXQGJGRV9",
  "key20": "5gaTJg4EjuJiXjmyN83p23GsWhH2nZsYHzN3XoPAq9KHE2N94KsHa9x2GafAyfrZ5EsFfbivUJtkfNM11NKwXFu6",
  "key21": "5BrkbYws6nRb96CDiGQPp1CJzESL6cdq4gYBww7MwuQdLZo17nLPvN6fakmnh8xGfx486nxQZWYCxBGrFugdZjKN",
  "key22": "2BejvkK1FhKM1uDwi6HZandJ1U6oDWam197ykVtCf8nShSSf5ZUy7x8Woo3Buftu3rZ7jATwiT1X12hQetyt1Mtm",
  "key23": "4UK2iMXKSKqLcxm6C19F5QnAqcsrSvohRWtUDdFzKhb4D38weWPFd1vqNvgB6X2qoF4pbg6QRG7nbM6LVLiAByBM",
  "key24": "2VPL5YAJiMzyUhvunzXuEWoQ3B8a7xnEN3PFSxXBfLiqCrTViUsCWUyi6ztpc6A4xiCd63uUcG9dpXSaQKniw9nC",
  "key25": "3nryedrCfXe6rPoih6Xuam4ymFw5dEG2F7eDyWfLUW9tqtL1sDz5nXynBw86odK1mzu2rxpAEPYJ8hp52txfxD8w",
  "key26": "3sPHju8KxMPDGspXcyHsrHpdaa4ZYnkPyXSjLnPeZxwLdziknhqdWqZJTnfsdRGho5nQ4TWoRkahPPZqMYCaAwQ",
  "key27": "4Zt3SKAtziWuZSF567Y1QxtTg82JiB8uV77wrKe3FMb899PaJvzJ4FWXunBxebDHHWDUNT11Zuy6jLN1pyMVD6xr",
  "key28": "3XMaFfLkCWPGcVVSVEu7HS5FLe2VLJauvs3i1mWGHCKqX2mA8T3waq93oV8P1iAhmdHVWeVbCh6EHbVYZZ3ymoYi",
  "key29": "2z1DL9YjXEPbk5gcTZixxdRnJZFbRqoHY8XJR1bWuuARUaEWwzJVxgYn8DczyvhRH2ahAeVYpTU2DZNvdP5y7coi",
  "key30": "yFuQwKEJ7Wy3i5gmcQ64MBj6VKpAHfqQ3Lq1TWWA8ELE6b8Yvph9BWYBLBN8uhYtEFMVPgDAyF49Ap5kHGRNdES",
  "key31": "5ECzPCFPDdcuxFM3MnF7raJTNwKU2HPT4PVhBq9hG4cdSzB8FJmJHMTgQ18JttPuiTMXdazT91DRFWSKvVGDCh1e",
  "key32": "bkCTeri5gZE4MLFwBsjj5XvMTZ4rv3L95y3JfHgoy68Wmw8grihF2bU4F3mhQi2wmi45nuBLHUtSVnwGA93qvb7",
  "key33": "2tQ6KLw3BzKwKM1xMtPbac94ac77XxDdTTCvnQk9akSpEtPrLbfXK4Lgy9qA33MqLWKcYMN9R3xwgafVvCjheadj",
  "key34": "4XCaqNA6M4HVGT3xDBaBw1mqU3fAN6CzmSFsua6oCH54qTSzMgLCFucSapGKhywWB58imySE9CZJozcp3MiZGGCB",
  "key35": "55FmMwby6EqeJGNpbRhvitdPjwV5yXyZS3MBQQuX5ezMJEaog2w7JXsdKLucL7eJCijyqGjgzdT742tPE22iKVJq"
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
