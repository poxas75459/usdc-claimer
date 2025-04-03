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
    "4xHeuvJSKu99K4YK6mvKsCdZWt3qz6j3KC7eBbX2ewMenmmcTEdnNHnHKcoXxA8rgKC75GRjFdWnX7Yg4CbkuiTq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "uzZyhyQRuqEN2qLuHkTaECDwo7zXzMthuYmx9Z18vu23Qokpnh7hYsGUf8WjfmpmLnnpkh6cW5SxikjcEXMPNrv",
  "key1": "3ayYfzrKkXd15B3zdWcQPHmZSaSjvJcQwWHrePdDKCWbKv1CT4nhA3AKG6ZBAbpZqbmNkS9V2pfnmLt5WRghX3Tb",
  "key2": "2sLWHYA86JRBxqhwfVWSK44pxdZHUzPhF7RJYxNLPkuEeGG4Vjvw5paGTtQ56QAoHSk5KTtNCEZtGyP1PmcbAs7u",
  "key3": "3g8XqkS2ZGifyKdNpVecZZfJeFQGGwg6TrBSzyw3YQBG7KtJbkqRHJhAfqqdHhW2KHCQVBACya4rJ4Uroz5G4c7e",
  "key4": "4kkxQAqT45f6asZDR52m1pQiR7nmCaYBWv6PhkvTPA9HgYXoMetgmuGabhx1USCatkhZgdeksCF8EoiLtFBPPaua",
  "key5": "5i2uiR3MZDs7EgdmqTDEGv7XyczD1aTPpoHodMk9MxtSac3pXUoCjUmxBgCBdHVQWc4U7jriKUSeTZPHXYWxscwR",
  "key6": "4g3BDt1hbtAb88sgGy365bzfDZ7w3RPV4ps1zCB6uyxa2Xqegdsgj27Xns6ska8fAsXEhPsv9xmQtbq1vPaMJJEg",
  "key7": "3Ac9HnL4VD9gbzJU1Nt16RP44gfk9Q9axstBtVJ89x89cxB4w9ePfjf5ybJTcr2PQb9E1jUuTT5LP31CSo8Yuh6m",
  "key8": "31UgEkDHpYGdpsaheyBfHjMy1YXmxtgxn24za4uisBsbZH1bP8zWWJXBENpFbcaRvmcH8K1xyfD5AbNL55C9e1fe",
  "key9": "se3taJknwTR8wFLSdd5pgeyXBrTK2NAsSHxpMewXePSN2JpxWMoogAZPp2dqZ89Zz5xHyFKpNrZM8g4gX3x4ftX",
  "key10": "48PMcHQiVaWfxXx8QndnVcRFcf3edLZrfXi5SFYQwfwSXTVvSyn1WMQq6nTrPzkQNhSVQrnaZgH7tafziW11kVfV",
  "key11": "5P26E348JrbayG3SBc1vm4LoAi4ssoFcUmCdvKvqWSKatk8r8SNYVDDHEmmWtay6YFjhnkrXFLf3hKLifZknDQCu",
  "key12": "5W2fwFjc5BrUrfMFgpQDQkPthFUQ35tsDHxtFP9ybcNsW61DXeZxtjUGrRytVa7AK6Yu7vbrrbcEyQZdcsrfT5TJ",
  "key13": "5gibB6vmd4uB1vjxXGGJ1xzWPq35psfFWBAJFKMMnHFLgJiZ5f7gWw3UrypufZVqeNrb8Rpe3ukjb2aLPRJig2nE",
  "key14": "4Ts4FjrxVZcehGKCo2faiNSH9UnX2JTHcajQUUqM77jgXQQRM36TKazYn5T61k7eNWExbYgkd8ahyUn8DzcdEN5k",
  "key15": "5RKkQEAN5QKjL7nwuaMNxpFx15edDGwyiJ7nA8yJvQpqKy9tXyedVqErRxL3hUH45pfQvwTw9GoN8FxZPDeAtbHu",
  "key16": "D7jfNVsygcytvbpYNHTtPk7AYSzgzfWNouB9wEz3JvRhwnnRtWWUgJrCQPqxxUqFVidEW7DBLjn55YVoXgZN2ws",
  "key17": "4zWCVGwnBZR9CR15z1p3s7pSmJGccntNmKYqT5kq1yFWYWcXTqwWvoEe4n1ikygPW9UfmbPoecmqwNybENK6aNdN",
  "key18": "2o8pUEe5yMi3uJFH6P5qPiMU8RfoyurPpAPYTcwnrny8b7CGYwXQdcFaph2D3D6CJBRSbw1W3JWdpiuSXAgra9jg",
  "key19": "51pZKoVEmLiou9cuTuhvBaPGmaEk1CU7BQtq6Zy866QsWwNzN4bu4Pcyf9sMWcstEHDP8GwiRsxeER6KyoY1oQLT",
  "key20": "3okL9GGBwnzTjsjHajQD3sGAzeMcvNtakM4sUyywswDymArbBvG988qyJq53639StbwLAovLfFrT7gJcJzH13S7p",
  "key21": "2L1UCfiotKKP72A1NixPNibscSvBZJ5ZWFdE5JXAGFN7ugC5Pe3vF9xmuYLAEr4urXFSfrgCcmaZhcxtmco1Y2so",
  "key22": "32X8b661cAuZ6KrHLGQyjhyp8FkotenhuTDKrCiSprH2a8ESSAtsGX6Gs4krv1Xqyi1iGT4otk4MLdhHxyHGKUQ4",
  "key23": "5dpZFrLi3HgpXvNLgaQJQWhPfapB8m89w11M4J8LiprZ27fimiNUHNYx8cC1jW242BpsB2WjE4ja7vtvDpnu9tE4",
  "key24": "sXnR6LT9efKWzaTVNo7ytFMFacJ4G5HtDRBwfKDjmK5KUmKqAUDy77sMNyURfRtS5qGeN7EBaghaysM9qHvum3R",
  "key25": "62immVx8Nt9PeHr6H8gX6xvfFrg2ygDy2NFaQ4vNsnNitxU411qSgrXB3dRpcLYhppUez9kzjTnk16USG2WfgNP4",
  "key26": "4NpoGc1APAfUr2q3M6DG4M6toh9dkyLjHtZj9naaQV64BbC2rKkDiPvbBtQtgQB3VznrY9PkAwadd9tRSA4w6FCX",
  "key27": "314SzR4CCr4w6nckWdrcVD1sEqfwBP68d4VHz2BEriBXCdaUVHFNJhsG8oQV2q53zeXW4BSgH1uqGjHqasCiCzhU",
  "key28": "2wBLLvQV7V3H9bRQjUPjnsuaPRWYxNdjogYwMBrSzjPrSLpYdbPpeU1u7aLHHDdzmAJ9BRytBRGMuQR9NkG4NAnn",
  "key29": "5nwAbC7JM9VjHDcPspKGKJN4rXUpd66oUsx9KD8ByW3ac1Y1K82k6zyXjDDAPVRF9gfx2BRVNipR9pwguLek7jSf",
  "key30": "wXx37eU54UbCVL5eacJ8NpY13N32RpG1F1cR7nfKUd6io3jbQ7L7VRymCazuwnVke7Ewv8MQK3nQvdbNC6Nau9e",
  "key31": "27CyLvZNP6bW6z64oJrGmB1bv7M7RmYFfLbqHDTdjJUu91SmLbEMPFHFcnHFoawgCmTz24TLVvX5of9UZVtnGVfR",
  "key32": "35e9mUvnBkdgWR7dRmKk7apjF4azoZYg2Az1b5uP8bp875bmxmXkW1s4MyZNgWsqipNXEC1KeRCSXNcU2pQHhuGM",
  "key33": "5YGh9PFBaXBJMtJpwfRXuFDrpH4gCkgn59VDXGx7ZVQ2Dn6H1j5jJHHGDU3qs18HBbgt16ERpqcLd4rDFXBT7dG7",
  "key34": "Ur3AFBmTHpva3tyfXzQswNWffMSt6aasocn31Y8q96H2mVheBe39c8pKyr7rQpj6ftNndJvBgCTwA5ttHUvTbFj",
  "key35": "2FSqKUv1pDwtGc4DC8CRbw4qDoVHd2FbvvPpbZzhvWSM2oCbdnFj9AEAtGjJ2K4JkUmjsXQVd8nT5LhxpQfA8Rhb",
  "key36": "3M2UeS6rm4dy7TgieaHjWT3W9qc7tUSmzNkB5Lx97G3hqLDWmVk6Jeh838QnjruHqRq24yYBFFk4wVtPiVPkbz2X",
  "key37": "658gGJYfogHtFTEHYFwVK6VFapLYngjb28scMtD8Fe7AQ9NVZun167FgZuDDW8jn7ijNg79zFpQ9WgFeabrmN8e6",
  "key38": "51qBCLHnmi8yPUUdhNeBLHcNa23wEij6NBeG7g7VB39EK4juTpr6ix2YYtMWNBVCB2j7e3RfqMK62kyywbmEKR5F",
  "key39": "2boYQC2jtzQuPG9WwxXDkjiN2hQ5GsWSGMzTFM5zMYpGFpjYbGM9RXB64vn3rBRUzHbD2HsdbvmdQvgzru2NfJsi",
  "key40": "5V1xk6CvjsfCJHCgRNW5VWruMa5GdiZUP91DQasbDB4rGvDojCqzEwrC7wjR6YweytBkYGjfu5Tz1UNGSahY12TL"
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
