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
    "4vk1hPYamrVnb9aM2gc9BTzZyynbjLEKcMRedbjmU91C2ffJD9G7e1XHWSRKSTcjkYrxLVyiQUSHAWzR1cFxXdMZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kVv9Hb5zH6iYDw1Q8pAGfh5DcJj6s9U5S1LD8yTwCNcPQtaxBhhCxvzG216z7NfHRtkxh1grjzTvCu7ZoPEaWg2",
  "key1": "3wDrFyAztfhsfKgLemhncF5C4rp3RA4UQYWitzdVctcaVNWaBZJ1FPnvgTBiqprNmGhC9kYevPPTErXAttn5jYkL",
  "key2": "4dA3epHqkzbxXQMJV9xBb58bVHy3nAJEBeqhBAo3WFh8di5McSBz1comdyzsohKEdoXbQj4sJsYqujQvB9T64Rmq",
  "key3": "Bqd6U7LoVvdqNJaEMeoH8Rg3KcXqYrS8JD5zz4dRo7pdoCL46qpPAPHDBELG6CisR7v6dxQHGk4xrdVJs4uNdY5",
  "key4": "4j9hwrbjZeW8M6mFJjbZmEcu8Fbv7C6sWvimoWEn978e7ns3twzEwszQGQmZibP7MpTSoUkTyTzcoUV62cYEMD7E",
  "key5": "5uetp7nsMMxfdDDtRSJnUorTdKRsk69TYMtXsMvh2xSzPXUvYFXdvuwwMC8PgPMA7EEpcXzGMVXh16T5CBP5zCVM",
  "key6": "64UJP9DUpZG9DadNsLXQG7SrqpyBWsYdxchrM7LFobAFpc7LAktPRcdd82Ro4JegUTWniRBpjkBSrfpCNeXPzUcD",
  "key7": "d2tK86Kx7i5YjeducidvAkB6MgjRwPYP5rXpF4Ft4CkRo47FEU3aYzohiam2NiAbCw6byw5Ljcez6pLd3TGCNWE",
  "key8": "3Dhu8isHy3QfYfZFaXrQjJYFuw4hnaqL3EEYZux3LZmm3HgZwYModrsvpJwmsQgD2omKjRSvEh4wRzAZjLkUqogR",
  "key9": "2JdkMYK4ZZwy2DWyEQLUdN7nGZyY3NqzEGRi8homkwWonbsyZf4cbZhPfjSndsztxnvAeigFnx3LuErbeGuaoyYC",
  "key10": "ZkE6ZHZ8UDFD2x7WM9oT6tjsVXaZBJ2pEyfjs61Mc8mMT5esZdm7uQ7vceBLPULwj9p8HpaiYinzrTqvStwSZS4",
  "key11": "2CyM6btQHqn7BLikCncxKY6DMkvaZpErhRTAYt1XD4h5pcX5NFRiLbEnpopmtG4WngXmFS2rJrBuNaPGJsPhp9zX",
  "key12": "381AhZMMx7EMXQ2zZ8S18WoxazyjdqWACjMv5F2h8W4KtSKFGpCKLFqeSpLho37VcYXRM5Bz1jqRGC6ataeTSkyy",
  "key13": "4RFeqGs9FPFDNp188eduQhtLZLpFyUT3AY35VtxnmsoLMgVeSbQEz1UcCELoJNn2HHiCFtdzAMVykYDNiMk9MA2e",
  "key14": "2c4MgcL8dsmH4SZgoZY8ArRoRWhE3Sd8qsjyjf7SVBnSgmDbXmGLv5SJzEQgCXKSy8ffJ9wSjXzHbrpVj5yb9ZKA",
  "key15": "5CKMRtYXZ7m4hc4S4mmHn4MTH6prwtdo4FYzSueRQ9aLanEPaE6kZe3VqkREJtcDcyPutw1j5sNR132KLbMKdw2H",
  "key16": "4qbqJ82Dvem9abqd7jvL5rRzpPhEx3hWEgpKd72dFQyKYvr32fZS7fnoWC9MyJDxz96NiDGFV5NwxsH6Uhk9esa5",
  "key17": "5mi2KnsUeTHtmfR4WCKA8wvr7uuZ8pZdaBLvqw9FenDSTXKb1iZ1dzbfahPVMmovfTeYg4yhjDkNdPPsYrzeT4H8",
  "key18": "54NQMtCpcu6kcUhdq2f9h8r8VZuv313g75gTKQT6gWmXySvkQ1xi6HmWjWBhqLnFR9K5fQGGN627gwmfQMf3ADzb",
  "key19": "2jQQjBnVzQojxCNHRRVR6GPg72ahGWRdkXupHtbuX5qWKPyGbgMh1RvxFSwAXvZ94DKQ1CXe6RY8wCLC4GcYA8D7",
  "key20": "SRpVAfF4DCPFKK6SUdUFcGTpsgL3QHhyoTRjN5HxEqmqD2aBTTXjguU7iVdkb5LpooE4wdjoLWG9GXWKTaNLd8m",
  "key21": "5PXucx5TskahU1NLWUg79bcNCB9eAPUSQEo8pd9T22m32XCNjnUDxb3V1JS2yrd1ATFdbWW8gqVctH9v9ro5ciN1",
  "key22": "5Ge9rbb117b5rzPuxxJANwPbMoCjG5J5pGSRPpx2aMczM9SfWNeixGYbWFaYceNEjaLV5dLuSskRpuemZHzkCvK5",
  "key23": "2Y4cU8uCJzwUSFFg7TqVPFnirRA2Dc5Du7wuSyh6W61XDgzyNEGmweBJaVUSDSipyRi9551V4gcJoxUhbDx5LVMD",
  "key24": "2ZQK9F7UabViMjb1r8vv8mu26wsaCwfNxpu5uegc3bkRquc7WcPQ3DKMnWF3h27zcAqRE4xgUKuQAvEE1uYkcs3F",
  "key25": "3BU2hSBt7h3pK8iF1SvGd8XMNwjGmXF9YXeqyT2bZRKSGDcdDvHv6RWrSoZkEcFXfzRn7sgES2uNXu96NATLgooc",
  "key26": "YZf2Q9peh3WaqtkwzWrMAbfu7ioZfjHnP8VqLS5MYWAB7Pm1Bzr9X4hZamcWwnVxjbVSPLHunRKpciBb3ty4zqb",
  "key27": "5Tderbo1Eub7JZMWJb7GqtKyGQ17MsvF8G2oKEAFT4aQZR8uxMaMjLiaHrjHQkiTv9vQ3m9TSNT6v8RzeDJRVqJt",
  "key28": "3hDK4mCBE1XUKKbyQwY4YoyLaNND9DjikUvbZ49rE6QbWMTAuTxWDTCvekuT5BVMF4nvDcN2YN6i3Shu7iRQGZ1h",
  "key29": "2g61R1repm2qJ22CCQX3WMSxDrDw2N4AYEBpNmdZQEaWeN6Z5uveQx3RAbR2nNsu9RsMd6BAdsw3xWXnuhDnua73",
  "key30": "4EEkF5cx2NcoMtRS714mqVk4GXgXyTJnDoqB2a6HjZpwkCNhjHEg5xxsgun11ZTWMB8hsocjmuYU5uRxP9Dc4sKJ",
  "key31": "r4x5GFmHBgTKsywTQuhHEF3cknYZRGhETc3wWBuyXj88SpmAruec7Pd25VaT9iT6e5TzybEyTqH6n1SpMnrFL28",
  "key32": "3PbzLpGYizXnAA1FwPva9u4hvWzpQoYZuDXa272TWACaPKHqaGcQ81N6qbgmcZMaWYQNjfmxiQPgTvU5FCGBNPHo",
  "key33": "3v48U7qeKiUh4JtyoAwzhg62BBSUtUGWmqWgYStQEJcroaZ82Ma3eL5wZvvnLNNf2EXJ9VjGFwFwd9FVixJED9YZ",
  "key34": "w2aQgbNJv2tAzZa85sot1nJczbADrP7FuEmjTEEob7eropAnWJxLZY99JEiAW6Et1nnTLALPYdmgj81QdtKtD2E",
  "key35": "2LBL5yBCxSB8TG1wtgaWK9aYJ4Cc4He99EwgLAb1DWucTKHkxaiWAY3tGePfqyJavzuC6GymC885XyR1tnCEZVka",
  "key36": "54YG7sbjCURXNouyQrhdR7kUjveCbZMjNBroSRoGdoVhcTRe4ZcvXFaceoViq6KaBNCTcKXsFbr4YnE3EB9q8ssv",
  "key37": "2Xu62iMLgm47ZsFCPmRzJZheJz24LzPRooBGA1LUbQNXq2xGu1CXyVpEQue4dJzEmzT1Am47PknmgTLEmo1Y1ZEC"
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
