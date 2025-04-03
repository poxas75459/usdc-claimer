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
    "4F2w3eRSxSpciMCL3boHUqUGpXzWwvxkJsXJMUfTwsvbwsocz3H2NJX4ZmE3U61putq5tVvxL9eUX2LsywAP2x5i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pv219Uq4FRnC4kZm6eHEL8vni3WetnamBtniAhk9pns41BaPe6cCY4hsUT9wqPDvyX1HpDNEyiivKvejc7KXeJv",
  "key1": "4rVSzkfoioWFkwCm3rCr3orUkswaHcEzFbPL7wr9kBaYJSkyvKmX9wmpkEa3NFFTfHC6RX5pZPbSbiSBqbaC79Ps",
  "key2": "48pGRSebLwAgM63JkgJWeyguWnhSLEjWYmGatJTts7KYHswn7ySYXV63jAJVNvF7pkkVpso3cz4vjmEDdZ5R2Lkw",
  "key3": "67D2q2WCJE1p91ABjmWEVDASGtz9DFABhvgmymX9Y13Fx3R5FTWoKh9Se7nBASenLpnTXjkiSSUnSjfGAmNNSDT8",
  "key4": "4rXnmDpXy3fJXXoDHiN1SMcQFyZMPEHmCWY5pCsXgm2DueeaACgnEy1pyxhG6ymZxbQZYs4KtgzaNmHGgtEUuQxq",
  "key5": "58rHztEG7BSN9yj6QiTG8gJ6W4ToeXubBw3jN3RVyyuM6SZsbc9vDW44bZJSbnJh5759mT7pvTnDy1EM27St8wST",
  "key6": "424oDhU44WhcMB8MpHfTp7GtSsaSZErK3tFtk8JoyTrP7DLvB7kMstZXK1Gzp2E8serh7KTcbHTDouzjJZGkoN7B",
  "key7": "pgJo9C887fM1cQsqc2c8ftykrkiLqzd1ENp9LLpwpyegs57oefUMmEEg6ZrgNiwbfwXhACPS8NpPG6sTSDQgG2z",
  "key8": "3pPzdx9c23PTDKZxSmprKDvpZAJZcrbn4o6KysQTYF6XdAXEdPoeZxadnPfnP6DAzKruTRqR83bAFqeSVELYj1nb",
  "key9": "4BinpdsyWTV2T72viNmf3Vue5JJuXNh4G3inH2i4iChbbyUtCVwuyYHUrZEfuUFtDvRdTBkqKNVJ8WJoF8RG8Cdv",
  "key10": "8Eg579hvkQpdbzRPhQGU7zeWMiTQcG8TWbT6z9uBC5rq1Hg1i1A2CbiPhHWBEHYQLuBwcwv3cAt2bG19VGnS6KP",
  "key11": "hs3UxNwSDBDT5roSKxZEhWwDJHt9YHw3stHyUGVdHc6fkbaZJrtmUCkY12SUW6gsMJvMCZ88AkGzM5GxSNSgBJm",
  "key12": "crDo8g1DwLFE5nRrFTRHFyqz3z7RirP5oaY5y1hQBBpbr5Qss1nLSmGbd7L7PAF6QxckbFQYqVvp8h4zzrdnJxd",
  "key13": "srwo4UnwxUbbNQi9QcBSnnYcBiE7oGJ9fSFq5oXNnJgpCkBbf1AfGtdATzRxp6LpLmYsSU6EVAk2Nyc1uHHbuSG",
  "key14": "5LAXH3W7LJcyxWmkgZXgQjJoDRyTJgHgMTTnGZRXrz4EpfVd9Hkj4bWRCfYYG2Xxcp5fdpm4zy2EJ5eDioD2bmtT",
  "key15": "GMKfsQgSFJfwWSshioacKpqiBt8moaBMks7kSXfRs33FSe8DUm6h5QwEWkccgVJ23EyV4XdU9LwgsWPtFMFxY1q",
  "key16": "568DjDqeNptZ9tBtLkG9XDS17usAxhmAX3GcXVMmR4LQwYcdJQhyw9qDeeYDU6iHqF8bq6JJAXXtrsV1bSbGnHFR",
  "key17": "3cczHYMC2DidUvkBPigqESP9A6LK1sBuq5bZbhdwCPR5HnaDcDHfRmKwAViDcreGx7cJijjCGUCkAZPbQXH9egnX",
  "key18": "2iTaCySc3QF27SwR5CKAsQLjuSUgfdgpqqm4P3P8ujVtLVaAcptNf4WiMJRY2DyvaE3SEQtkNWUpPkqpaogjVL6y",
  "key19": "5M4t2s2595TzEqzsmkbuP6ZtXK8ePiwh1QSVD2KBtL2vDDr11FzZm3GrWSeoUPG3BzHFXviwK6eZcwKwYyGQf2PH",
  "key20": "3d1ytrnnZwhTdAfS4YhPxa5ApnkWZFWjjBCJUCeVw2CyuBbuNCjVtZ3omtAnMVBJzLhW4twpty4JJxGUSkVTbf8Q",
  "key21": "33kxw1rG7mZQo8WwhjH5JwCMiR1QWKC9XKg35gjf23we3kFhSxsvsVKQc4ogG2uLvf8o4X9XQyFB53eDwokkAash",
  "key22": "9E7fCqhLs6xjEwMaS41vMVMd8XakgsurrkKrLHsjMN9ygfFXhs6ZiHGaBUvT3QGiu4eiu6Q2cs32ewDWATmWWn7",
  "key23": "618EDPqnDuC7ReAgVGp28NgGKpRtgp6DnzaALw1MgArneEovWUwDAjPwFSEpUeYT98enmxaFCuEykeYAjeeFwXon",
  "key24": "47FAWTGmxtaoWAywN1yM8qRya9iPwfuQQbrBFZ3uYxh7Tx1vPawoK4iKBMtXbfHoYJXYpkhxzBpUxfbCYPQQUW79",
  "key25": "fHxJbKTtKCfSJJ5kXVeoxrxpVnmNGCbDZxWb6xMHczsLAMB8i8EMX85GejtmwdDpCkDVzw13eBcXho7v91jgc3g",
  "key26": "5D6M4QqD9X4NaCQpGLRuTfY47LJSpSF2GcnEQgbdx5vmY2RyLKpoGs2Xfydm8wvdkGdDzR4DXEwWbiHrcmzhN2ni",
  "key27": "4neQ8QzPDt5HJGQK3TtDBrtbR3UT7m3xyMW6RmfX1AjUNEn6YyUAoCBedYKNCz5uFh4ppujTa5x3Egm1ibMm8KYd",
  "key28": "4xPtfNRach2vSyXFyasoTf3baupb3t7U8Xyjr79pPcYz7JMN6GQVhc55MFAXVSefb63cYkaeWGefJdxTqScRFYU",
  "key29": "5QAqHYyC2zJXznUebyu65CkvDWFJqpXuT8DSeKvNbSnQpPty4Rnp51Fffyhg7abyZrfrKRUGxDFgYSnehL6For6H",
  "key30": "5G7yHHKbLxk7aMVXuuqYYrF3BEKEHbFE8zyJPjnStaXFWonuMvUk4Cu16W8UuDJQQ3Jco768Jqgi5foqnQi2Pqui",
  "key31": "mQb9FAVBS2VAZrGApeGWpTQ51FY4XS6hrQkqDZpePwW3h9CeWn2WrCVQgHBHqdccokK8f2CeB9Qw8VKDMGZut45",
  "key32": "2WzmUGbRLZAWVCp4z4Zzt8KA6iusGtMuyZm9cX8GBHUTkZYbF1HVjTUzjHPkL4XVenKMKYysjfEmtG8eN96H8YMb",
  "key33": "2UhwPFxnAcRGpknoqMPknuokctBAUGzCmtg3a5BY6mASTWhpYEBwecNp5wEqPGYSG6dNQyZ6zwRpLSMdmh7mwLbd"
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
