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
    "2A1jEAgZtFGsokFooDSitSKXDtuEVjQgJeWq4n59kANASpkeqZhhr2662nTR1rApiUAj3Ymv7rJLroYy7eM5GwWE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bUStwHY5cbpkoXyiDnEqMCbhcRF35cpoDRNpvbLc5qLx4yeTgcEs5Xd4A6uqWWLidUB2YHsrpDVKunWvAksZ76X",
  "key1": "3o8HDYa8LuUGoegLZNgnj6JK8QsDkvD72rp7KnLqRpwKyxfweWkmoEuYGa3ucptDX9Rqpsqz1c8gKEt6zGRpS6Ld",
  "key2": "4AYw2HiEzFJ1CthXeRJ4u5TjN5tZbheiiUcSBFwpajsXZrA7G6WZ4JymsBTerX8p6qq4VCEYJuVBh8TkCryTcJyU",
  "key3": "4pJ7vp3KKsAgwWdDV31dbL54BUWJkWd3PmFbwX2QRUYTnJ4veHVUwMHmJoFoLKA2L5hdVZ64ky2aeJBEKpSfpKAL",
  "key4": "4citqgB6DjaiymmQCq4UzJEwbbJAhQ1QjXmmKeY8FmpzBHSgF3Y3RL9c4cLwmxQT1LNDbrhoEdkuNriE6UTxSRZ1",
  "key5": "BbD9vswNsG6odoRdMxbkwSi19cAtqDJhMPbLrQiaNqFWRgA8j4ou4u1UEHQkT8eaCUXkAnieHQiezDxhkwdtuFJ",
  "key6": "4NQ564F1jJ5NK8Bb4ZjaKuMCeAg53C3HvSCkAGF1GBXfXayKdeJACYwV3wPzymhC1HYaa5XRBR3g729SZ3wkPyL",
  "key7": "5YsEdy73DnYBsgFCHMhUMK41k6UiREBdY3nGUtFk3hmb1NZZ5nvCv7H4TNQhQERoeUeveNKmnGFwEsRz3a6rdViA",
  "key8": "x4RhSWy8GYqqQzVodjyJyPLeEdY2Xbe4TKzLbohi7BieNzW52BpKpDov2X7LT3UQpK8KG7fS8axQA7LjDvge2rG",
  "key9": "5B4rxTCvpBF6otr6wATMMGc5zcbhaKcTmq4LgQLTNbdzZh3ZKZqPamXeNaaC9WxGSwiMVyMFbt3w2zTxAv4PPaDh",
  "key10": "5KJD29dtLogjDBEKiABTM48zvV21iZvrShdeESYo8Gem2P6FoewBsnR5xWdzKz5z7dbHkcSijgTyX8byLVvCoAtw",
  "key11": "31JoPCUKVmJiUNJ8fRygWakVNhQSiQAZdpffFomUisTCpiexYR7GoWJYw94JijCMWsbJJoefqcv4ug9cvWA9RnL1",
  "key12": "2r2meP1yrycDZrfs21XzSzm357qBrQHh3b198BvYrRPQYnHET6rehEMsEjqVvqo3R2yFnYGH44DzGyY8mYV5RnZc",
  "key13": "2wviiSWBqjaAZhTxTn42nLQCYK23VCRB3vVZxydFmxXguDJcLiMWL5irLz4UGvUUsq2VUQH3rf51tEvgZEBj1V2d",
  "key14": "4nw2DAJn1XTNKWbU4zp4ZdJva8L2dF8YA2jcqQ9BVwaAHtFFcJXj21oYLVaeyq3YonZW5RffvwNPwmXQUdNvM6JY",
  "key15": "7eDnYXxyvvrisn8FNiET49FEujzxXgyxNUTvvfonGsoTYvbqWHJ7VS4UUppPHo38tWrp5hJvqJ7Vv6YEqZQDct7",
  "key16": "5fNhJkyZwTPGrv4nVLN6H8635RmYBWQM7Ehfw7gstgajWuSdMeM884a1yDKNhZJ5XN2uaRsqi4BRcxEbCDHBNY8u",
  "key17": "42tFQwUxnU56NkQrAo9HzQEM4oGpMsRBohsdBXdvrw27ycDfk7WgrmNncDnE65KFonVZeQQzUZi5oy9LxaDVeQ2p",
  "key18": "3N9Ay5uKzKJTRD1fgsvPBRZ6UM9kAsACcbkrHfngvjVgQDzdYxaFFRg1D1hhcKAybsE4J9JFWTrgihZAt4rsGDSh",
  "key19": "4NKYVmTwnzw3mG68k9aSrT8kSmKN48LaJx5ccTyi3QPn1oBFAyTj6MSKj7AuFBC8aPEjQS2SiaR8CyQoCfrEQxai",
  "key20": "5cYNwp4i2VCuV7ZpSSuiinpXA9QGszioPLmKTEpFBaTacKvshuKxqt64SoVS9HW4dc76Lu4AjbDuwR9LTSLqfCsw",
  "key21": "35vR7TspkbS5XX6NPH5CURQC6oLvUbHhwXLU6i627CYPsDnBTfKBuZgzYRpmxonT2vruFsRTTEeBs4tW3nQvc2Aq",
  "key22": "4PSHvnrGDHwwLjPd7Zdi4j7HxNVhRMecn99VvAptZZ4uzwsVnAKzRqjX3gxgF2bg98nB5xiA8JRB76LfBJrU2mqP",
  "key23": "452L7uNVB6sGgPLumJuBWzja19DxypfYyfUvgrei6cBYGRoYuDzgkBwGBadjrtdWFkwH8smPK46LR8FKYduwYnBL",
  "key24": "5MKcpZ2XWcetmcFgCJqvtEPQJjTSqiWw5Ek6Svxw4CzBiuX1HuFp9URXyb4NoMFL1kGJW1ZAutYWAqUftDpLWFPk",
  "key25": "3AqGN3h8KtSVTUiGj1Jc9T2SYwGkq6jPPKsEuFH6huEXRp9dhmJ8BuxvokzmnCUSdasB48yRPG3YFLqNRsd89h4s",
  "key26": "22F45jQ9hvWLTkKoHK8FPXJFsrHXmq3GJuskthHVUNAxNB6CHtv8PEisMKLzBjh5yPNttd8LLuBdaQJ8wmjJyLUk",
  "key27": "3qgcEmmV7JTbxseACTHDSz1ScPG4oiirY2dPu3NdZDUXMRTtXQ3MVDF9dJyowafvipTJvzbR9KGGYjcBETTBvwsg",
  "key28": "4wzTj46drT9uGB9AY5dPCYeR2EmwjM3CjTRhDbgN8g1noagVGP22pmc63L3rnpauwiTx1kTJjvfTCwYB3axgPaW6",
  "key29": "tFsf4Tjzt5LNc8Bsbyy8MGRyKaX97juhESdRDbdH1PBH3i4y4h11eu6bmft1AmufkPXGJNVUJGM3WqRqxdMCJoy",
  "key30": "4qYU5B3FkYJXkAKRrAKSihdoAxAq1cQ1aPEQyzx7RRtcVrB7SGdzcBUmu57EsYcZZXdLUUGg9dHSVzah9w4KB7eA",
  "key31": "tVMgQ6nJV9N3mo2cENViyXqZkzj5i7pDEDnAx71BmFRkiyfcmWhMVSEgoUrQyrc3RtCKN5XH2jJhBR3SyB2PHuh",
  "key32": "2tx7qhtFQEZ2iJvXSFg857d2tPCeVDsN1MYiuGWSF954U9oE8UDX5SsY4CL92YyHpGh8S4eV9yWue9RxfWFsuqNE",
  "key33": "8zPejKhSQVr253iyKHND31Ai9nSa3e4QzuJZhryTrARkKbcSh6LsouKZRc3tKQYBiFmy9KJfJ1rweMehM7cdd59",
  "key34": "3AxkjGVrvCEKm17jgxaM6fTLmDgw8qVZV2hghK63Ypj9Ag7g6Wt5pNRQaNjdontzASpUqR47oPuTrZJnAdygPiQG"
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
