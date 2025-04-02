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
    "5UJgecdCQMqJoe9bqJteUJLLKNtPBkUN7KNF3YCUt1T4tcnEy2x49YBjcMwmuXUhtwEQLNGbSQhzq8TaP7o9PdoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SsxZTUDHZiKTaVgAhjEwZ51fGHpY8Znth5yJFxD1DtH4oy3mNmDEQ21DzUezCAdVLnizFaWcRht7RmAfKjnBCjw",
  "key1": "57TMuhNYNZT1yY8B8pf9GaiLgdeMRmFg39bFY6CCwhGDopNwoiNZ1PJMp52f5Q67yVCtLwoWGVf52XRm9YGJvj6b",
  "key2": "3ccvBGpPjgy6XAyMtd1mKWeBXU2k6J9zJmq2BNJXAoVioBQXRoynGZc7rc57js4LBd7bTSK2FLiNV9YnHei6iNha",
  "key3": "519XEp6PnKNkLoznkdhZ9PZZMKDjfaA8SNvTxKbbMFwXxzPqhgDff5rCBTeLATCXU4gK1ftB6uBrEPojFiri61vT",
  "key4": "5F3e9KH6SeVuEFdR65cGmwEfS8E8hzrZoymKASUC7dJYDJ1Vg7cHxEhL83HtKcoGayBDE3owZFL5xQ4rKMQ76QqL",
  "key5": "4q7NbFFsH5Sn1hd7zVrWARmJNWeaN3mS8dCeZYTi7v8QEfs8U2dizBsvePgWwAmotwwRXPYY4GUxKJ1RjCG7nRKP",
  "key6": "31kkR81o7CycVmWri8pMFXZiYLDdGbeu6rUn4Yp7x5QcEBp7YGzkmsZxhvVMTT7ofFfdUAbupasc6tGcJcV9PdCC",
  "key7": "5e1SqHSEppE5mFxTguVBaPpeEDKzgA8d4ZRrL3eN1WkdpRjtkeCDufg83T66FtKKMFZKoMmYFGEPTFL64uEp8PPh",
  "key8": "3uJjCJEwW7AJtUptbLhSRSTxKqeshtj1suGvo5iGS72PajAWLJCXbj4Fndo4xEwduvu38yp4JjHoCPiirMbAnqPE",
  "key9": "2xT4gQdhc5dK76tvazychZXRPAPDe3Gd8UsWnB5CNmmAdusDAuskETNSpEsVdyexWspW6BpBri4m3VxqAeKsARc7",
  "key10": "4KuiaJzdswuyksQfpSQQDLmwaVx9j2XBwsmJoi3xSQ75bFLa1YynjZjna2gHRbjSJBTEB4GxKsJj7ugocXV6KmC2",
  "key11": "2wLkSNF2dUzJSFiZfDShPYkTfH6usFN6kFQdUgJgExnij47ezNQUcU7n8XDgzZgnBg9Xzrj2UTZURAsZ83QGCpYF",
  "key12": "ZNndVmGANxb4ZKP7bgweALA4x5iETMvZfD2DFR2XdxxnYxXWSfCCB1CjetWWNTQ39wpxEVHrVFdq3dxHFo2fL5Q",
  "key13": "2tPTmR7fFhJz5vBk5ZNdMVvTNGmxvoGgv6exBtopUAbpCzP74unzBFyo21TpA2LdVG99FzXcRS8BJvMtfgYiRLnE",
  "key14": "yAqfx7DqPd9SaT7oXhpNjCfamRZnfSqfHN38SERgczoRUfDs5Vr3vKH4pz5E52KVf7BiJpQuqdrBE4v2BZqL9aT",
  "key15": "5wUWHG3uuHFTVrmRf31S1r6Xn5QMvjbhpg9dV2QQNyMedi9YxQLGLQ6dxuFmtvuwSuA8iVm8V2MEJd9rkQhXmgj3",
  "key16": "2Z6kdEciJUb6Ud1fWe1pm2tyvBV9EH7jded5BUG2yiCDkKzYbfLHnjNyPjt4AGmqZDxKrf7sXAQuSsbfukwc7mRF",
  "key17": "4jhv8GFp3y5vzHriEdi3tZcU2jRDYF8de9obmu9HZVKPtXRGvJm8bXKyPMqcsHPAzL9Zjf5YuyeLi3BZ6H9Wc854",
  "key18": "p4DAqL9JQtaY3ojMJ7UNtwSDjnvMn3RprBqf3WhtjpoGGhLCCP1KhathWwA5PTPep82akz6vtaCxPfai65vSiTY",
  "key19": "6mh77Lf5DAsNLBzj8skgdo4SAx5WLwEg4Hnvx8vXaYwXst9LcuXZZc7jBizPnLf5fZKcEHEvWxb9gHhft9ApvLe",
  "key20": "3BrruC3d7F1yTwG8LcYARFQA6wnu5B547RKNHXMEcQRGRcKJP5eCevro8Jw8qDjjFATRNJpKchQtphmJmC53mbtn",
  "key21": "3i9WZJyT9p22KGSaAa4rn4YbRsjpxDh1w44NFwsig2ZhiqCKKv6PbLEi4kQU8FMDmo6Hhn3CSiKRhxgY9szye5F",
  "key22": "4y8MXdw6BuyPrxX8y79VEA64HjFevbHBs8Fj412KKcVFUvrqikNxAcapkQ42isEbVh7KiuYRSXk9vQ2KLsdA5rru",
  "key23": "3ovA5JnnTs9bFc1petsgCtCcqueugRR7rL5R5Y41PPwmmag8iMo8szmV12JToaPQYtvJCXBaGnQ8XoqH61hRZL2p",
  "key24": "2eKCe6TLPvhXbgynSdGp6Gz97nHHW84JkRaAgSDL3EAT8qKZyqmm5oNtQz6sqqkTyyX3WudDUebC6Gn493GifS8W",
  "key25": "GmK3boFJaMA8jENSJiqJB4sozdMEqSJqfQaZNVDG5DrzXAKYKWRddezWVQY2uRPaBQbDodvM2KMWu4Vmmkh92rX",
  "key26": "238CQaLZSCRfoTokuryfPohYY1LCjD5sokuKhobrG2jrNXFr1BjGHWqA9kzK83uw7DxcZqcxcbtbiQabaCAZ8xYq",
  "key27": "3hWdQKEw1u7Y9ag6n1JFmaAGF8YDgGLuRyFtnmhShxMNEhfbDwGAUHXJRdhjTUTwXRChKgM2FsyJqMCG5wXvuueB",
  "key28": "3QYxDFik2LZ1XK4wzoMQGAphxmvncN5ZrqeG652Bjx3xW1DCQrC3uBnYDudnhEA9oABMzLbJAEYgW4owas7TTVp8",
  "key29": "22biSYeHjRp1uQqxkuXRpr5DvaWDhJBke9vCXbRGxLLoMFWQ2cz8W7qxasXhoUY7zavz17vvKjJ74RGosDSY2bzu",
  "key30": "3KHnkRaTVmFk7rsiJsQtjgW2NFSEnVnnLMQTvVmgoaf7SNNbTrWdaA7L3WBUX5g7LDZdp6iM4hBdaHrKo1CbUrLL",
  "key31": "4Dyak6JZg9sR5pPq1zGyasiAGMDmgvLLxXeTGkT4fiVKmMUkVzno6V6KSY9r2DsVc1FRbzicDxhitz3iAUCudYoz",
  "key32": "5y5pkDaj5UgvXd3eywQhosH8gY5qMQWskBAPS3DEjCZ13FGcFZEbim5cVNm5Xy69kXxc6gxgXDZGSFNyY4oaRBgz",
  "key33": "4g4yRaoUiN693Mg948JqL1ixahhnSdNbfcf1gDyvhSHpFth2RBjTwUrDcwXXiZwTM7G69qhoSvo4qvJBSw44vB9y",
  "key34": "2P2oaBQKPESUGVQATyRNZn3X567HYZu3ZgDpfMuW8RGsEUhXnUSqxXxjok2dv7zDGpPbZySCSfTUXWNHsNqbpzJz",
  "key35": "4bC6RTj5jAzSLKYwusrF5omCpdvaxoAXMigpN2NEtdVbMaQRg6UeGp1a1cLWmdZpLhVJ4iToo8uQdhqgcUDF7VRZ",
  "key36": "41USeBRaDaq6zbVRCYaoT1ztT2gSMZ3ssF1p7pvDc2RhiDNUSMasWo4JENtNeyJZTp6QSUzMvD9TpNU5gQ7zz5Wk"
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
