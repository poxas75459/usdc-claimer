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
    "4omaFz3S8KRrhbmtX1Q61CJfFWLVCvQFZgxupDWKrNmLiwiHb2pGZMAXehLaVneivRNxdbvif7XiQHXd1ZvDKZvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SQuDZqEfGeurx7JCZbSjLkEEmviurVkjgTfSdakFBAxM7uFbGfGYN9DLcbeNbgEmRRJgE8Bjq47TvH5KesK5YfZ",
  "key1": "4k1b5tQRBEoMgrsAD9hGNdJHkt9kvBB8G2ZrFRUutCu1mhN1KxngvMW99c1CQ6TVB7nLaPU7zmbGkNEVXTYrhNAW",
  "key2": "3CiVoRGFVuwPrxXKL4xptB6tpjgeWzWB2nqubU1RggM1CGZx2k37gyYGsbY48VKp64bDVw9jACrLiXHSB4fSPqJm",
  "key3": "5GGV68fkXfoFmLqhXfYeX1pBhjDPYHbuyDtfV82oqW8N3acffUx4DTGxijNBPHubUc8mdfPDZfy24xD1MwdJ19xc",
  "key4": "HXDqh6U18bSYJQtJpnDyAxbW5SUhge1PcJTEBTyrfhNpwsrht6Zjgar3as8gYyvZJw3HDSU2HqehUpiCW7EfUk1",
  "key5": "3J1b82tpRZRN1FqqnTHBgt7XYpuNnUYoAgVRqxTcPFPPbW38wCwdVkVtak1PCiRtHnm9cVqNrJSUJkJ7Y2JkSmSa",
  "key6": "3St2cTWQHTNcQFKZzd3RyDTzhGFhm8FLcPZQbAe7SKmWFAWJw7MLmbyn3WPwjpBvVdannbpp2KScwdYn4hGDc1Xa",
  "key7": "5opRQG8Jwtr4FCig9apxnJnUnUsZGVy6CNMixCqqNBMyZFp4KhJkDf87BydgWuXVjRoVmGXVaqMpi4K9oQ54zc9n",
  "key8": "3fsRKuyP7WawL9xLNG6AQFfkP2V2KK1rjYa2mzTGLBoiBNPRKoXz9eb1ZBvtfddCHzhrcQ9PwTxN9fRXJ2Sa5MGQ",
  "key9": "zcbjLq2yZ92rDt1w43fBy2qDFpsN3Est25HB78b8VbEw2upeoS5B2HVFRuvF2Up4hCeSAkEDbkfEoiksuVRgTxM",
  "key10": "2p382MAV2VdjwTM8Hhv2fWMFxApv3xXx22uViLfRcrr7sMZ622QHFgBYcrmFrTpt3qqyBFuMEvR8fdKKwAFCsf6U",
  "key11": "2SGq4aTbFwKJPpVgz58VfUDruQUZGeDeCkuVCzkLWxWYj6XEdXokew5g99PzctWsLWxVXeYBb9FmxR4P2t55THTT",
  "key12": "5Xa9FP6HX1GrFJZHoiYFsuzSkuBt3VfpjaLy8Cbb3rshGhxZK66bh1DxXsYg8nzWZkzerEXSpKf792MnBThnbgrf",
  "key13": "3maNdKjRWVHHdhhKNFkKegmfJvh1FnL4iLY87mLFVzJA2dRWE5wcKcif5niRdPHzd4oEz3BaxYaRCxgS4QBUS488",
  "key14": "4YZSV8oEPQgAw2o7SHTr6tLnNcixGvcyyLYnYdSyA5X71UAXdp7FR2q5Z7HxRWTxqj7yJUrxW4bHkAxTqrPsjqL9",
  "key15": "2X4dHAYJKaQRA6DGe1qakAhcj1AW3Xctc7Un8MAfVHTPQ85PFLK6t2WXbgGYFmeb8knTfoCv4EVLWHmHf3FtX18n",
  "key16": "5EwTXYbu8GQtZ7pksKrft19JX2CR6SuAcocqDZUVbwxjrh1819m3auz5jRTYAPnF3v9M4HFw3RpMWHSEoSFSsKkG",
  "key17": "5d2MgruofUJMHsGKD28v3kHmhUaj44ucw7vWYuqS9uWueGFAqQrzEYJJHa9hw7EyxsajqpEvywDmRqNferNmyA8X",
  "key18": "33dMGCCjuaJN7e2EymAquqihpN4Gs1KsrjSywhAH2q8E25SQcMDqrqojTUV8TMPUgRXHGwE3PhZ94RQijoXen6y4",
  "key19": "XAz4r2yndhwEqnbNF1bPZkxKTfsTgyuNJXHwsmn19MUEhwUG35UfKhAvhVwZw3gdotTE6rVVBo6Ee6WMVjVPUJg",
  "key20": "3Uvh7af2hSbaq8rNvPxHGYKFrciPxTtSXXWXhXeqcmRakRVffce1oNq3zg6VBgZiXaHmQgcgXiLhuFm5vRyF4GVv",
  "key21": "678r8bqcWN9oppSHimZ3jzP2eHQG2AmehJ5My4HoihBVdVbfJv3mCZk7id7QnWqnHGcDFm1cftvk9fUgDVKuJCTR",
  "key22": "4SeoEe3HSk3hG4pcKAtzWnXBPUQPV2zqnxiRCviJHkUU2Nwmkxeamz5eUT4z9eQ3Qdk9bhon9LvqaTotbTAuhBpf",
  "key23": "2YeN6FFLt6rcfk3i4Da6YRSW3LjnQb2MJXVt2resPDCDtWnqsAXQ2PUEcC8wFzi6ucfKKXAxpvcAsvyg2wRhgvHN",
  "key24": "3tWMQNiWDwtdnURtaQVGV9rTyk5ks6HQq2bk3V3rks8EDMb9hJGponvS6zz5yUCPuSytLWXRNg7xhMyokzfVwq1u",
  "key25": "2XtjVkYACG6i92c866MdHMPypvUUAeYHPdNWYJeVCCJZFvNMWX9N6f1cC3m9oUASUSBa5vAbH9cXTNaChgCVjKxv",
  "key26": "5wGLU4g63HQR96iCJM19mJf3CDMDhm3GgVe3LNrBdZADajFBAdscqkfV4sgzgVDEN7nip2j5KJDCxTswfHTz2wMF",
  "key27": "3Ugoq1riCM7rPH923pzoiG5hCT4uJBR8b7Km4VrMzPQrgnQ5MXtpsy5Z1o9h7sC7cLuRaK4gTuu7UaZcLiXqaBH",
  "key28": "4BsE1TAJTXeJNA9mjXAH1pTfPvD2B3Wwx29a2EDWHfzncEWPQxWsFsVWXx8iq6k5XTMq14cqdhB2udwZ87EzDyit",
  "key29": "4Ldss2Lb5bbbcubJNDVnfy1CPFHbesVStGUpLuzn1np9JLCgF9tb9MAaY4yu4Hdv75k1YQww1wM8WBN8WkNAP4Q9",
  "key30": "5kYWuH6ossuKxRw5i8xQ8jTSCpv8EjuFtydKeG31vQ8xGLnmxkiuJzGhFQq7Ax3uw4o5AJYHG7CLgxFabv9Ya8zH",
  "key31": "vGd46BZkho12Si3FJr2MGywkDwSLpNX1qo7r8DGHLAA4FtGB234Yibsqt4GXKZpawnbHSVhuvDFuE6bDt7N9qMs",
  "key32": "4n8FmFNc9pMyMJ48MyGigYAMDqcVVVXpkKhbV7DRR1m9JRPmgy1T5wzjdEc5MomxWUJ4RiLArGC2sPZqdy7NLcAE",
  "key33": "Jt6fTetStSXTDiPyPPKMo1aWcgeadsL7BsWxhE4Y9bDBGkuEwjYmCgNXFwQHP7U2UcWB4rop7mZWYeZ5SwMN4Nc",
  "key34": "3EMgcttW5a5pZos6Q8hFxfrAPfYSoRKuDe5fMrfurx1MLteEHLKyXBuLGsHQ1wMesX6NfEbtubxaA8cFv6rHK2sq"
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
