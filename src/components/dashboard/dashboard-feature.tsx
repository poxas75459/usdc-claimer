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
    "4pTCNyibeWHGsxh2CT9zSaQHy7hHgtBizbV8CRGya9KBc3oGNBTTQsf1qGM4AVAHiccsNHwx1DWsAVJ5D1icCtzZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UkbgtejS7sHtZDosD81eaeD1W5TUm5FzZJPdwoFXM1FoiXAvacGTxoL9G9p4nBjWrGhSp1HVJTFpgzRS8oezNka",
  "key1": "3wx9fKuhre7WWZaByjc4ke4pHhX4naetX41XimNg8p2xBafckYbpvGXBnUNR4cFBYtGH1G1AwdU5BYFNBNqxNWDo",
  "key2": "5chBjav8eTRF8yAHaL8W4uNGzMofteMU3eTUv1Lqzz4dnRrwcxz239bh2HRzncpJJs1QiFyqQnm27fY9oipjx7wz",
  "key3": "3Nc7cyfZ4XikRcE2Ds4BSSr4hTHdNtGiUceX4TJdUJXbtkLDFHJ8wF1iYNPsriaouJgbJ4vC4nu8C7MLmDiRon6u",
  "key4": "u6QzUrUHQSm6oCyrXoh8yAMX49auK3pFxSX9nwPfywGAvGdZehdP7jmBUa2AHXg2sZPe8ApWJJsUb9EtDnCKdAQ",
  "key5": "5vfdaGZouv4xqaiyWrgfNcSjYAwo6Af3Ygjq6rfmU3U1yUVozaex7dDdMX2qck5WUSzNudTpHBtc1ZpZGxK2D2bC",
  "key6": "58dL86YqAjXj7D2TLQwrsWZ7kMEpfJf99QQN8swTAT84XsavX5WN9kcQyZWVegzSQ2qKMBBZix9vxqxJgWhKYRRM",
  "key7": "5Z1ajmHMa8JhRsm2cm1awhuxypDbm7f1ASJNPxCQRvbhByc71AHrda7DXPTxhEYESpTQkTmw8fbAp5pbsD2QJ6XX",
  "key8": "4WxpQk5SL7s8xSDMcuDTADAXZMCL8DiRj3BagwBrF7wuXfXb25aF7yub2uYo29UZKY6igWLCyzd8HG9hKwiEKSLF",
  "key9": "2ji7nFP6fQJAzy4tjZqHHMKyun9RPjRvN2UDLUprHmnsRjFoLtKtfHoaAcdWWG6t4EnverYLj5fYbo3tQy7HKBbv",
  "key10": "iTLfdNWT79CPeA4PZgF9Yr9QRTkn8oTwnneGc661LBmmfiGE18txWFYoEEubmP6SDbUNNRPhSRTVPxVJ9FaiTGE",
  "key11": "2w2ayAhLJoA4xQLdgC2o5HsLGoo1ttK7TmnRZxGMXPWi1o32DE9RKeMQUPcbhmumcjjzaQEkZkEgr3dvS6B5wh4R",
  "key12": "2rnFop8HCewL1mNqHFw5cskBEKr1sPdFBNLkPxTwKUsR1rfSuk2XY22sVtTfMLcQGzu9oBnnJ8xKiJSnhKtejD8u",
  "key13": "4LhTcaYAmyGnoNL7cVAqNjebeqdstrEwxj8PPEbXVL23fBzHDTsamGV6QJknsKqVztQZTHdSKW2xCCvSwYUtUDN5",
  "key14": "3xLEfy5NG6Lt5H1uVCzx3EMbCUCWhfQJ7k5yvjFjhYTNC96ZUsoyMrjwW5WoyF7axmvJc3snDedntib7PB7NX6sB",
  "key15": "5DeuRP3wwa5wxD5pQvzGhyLha5MFuVkAPkMxCPcpPzVayGeFg2YbioMP2GqAh4TqaASTj9BBPoBi7LexjurMA8hR",
  "key16": "2hd29z4gC28wFR7x8bXUnsrF5GeZ6Qa2bM1MTFJ7v4M4aPd77LUBz8pETVivd3y8CYq9yzB3ZkicArgS3aXAAmiv",
  "key17": "9eNkga6u6XJn6y36LycugEisZJmLjPWkpeuUqgEnrEbiCkJUcFKQycVnC13BeFQyKuVGbX281orZRo4ABwaWMdU",
  "key18": "JZ2Kx4pajuNVr9vPDSazD4yW2o7Z85m3o3C67Rzpwb6yBJKrP2ZitSTaeYpDKFJ3gaG18qDFpVGTsuhayVNf1SQ",
  "key19": "3KcW2umEQ82WWnPc7GKxJxt3GBWSzTo6TaDtWSFsZzFmsWBg3p5MVZaPsGxDVWsdYWu72ru7tP1a69vuUPWYsgpf",
  "key20": "2VZ9USzTLNXwW2HVFYcAyktzAbBJriWoMUMn4EzLfst92WbSv8rRWRsWwB86USAnY3VW7REvqkyzgChtMNp2LuyQ",
  "key21": "5GMnAs5fDYkz31jYsu4v6dBYD33XTgzCQc5nwTmufKkXsenWHdWGBsUznzyAgesFALVS6dQBg58Vcku5g3ZKZeGp",
  "key22": "4zVnux7q9pJ1yv3A2weU4k6ahnARJWRdEdP6gCisCs2Rq8x2YB5HvjPLzYZtApexs9AuWrCko9KrMwmqAi9BZqRF",
  "key23": "PLoRTVgxZR5w9oBkGSry9WJ3XCBEj9uR64m68VeFsigWngp8YdmZLxzueTBNkPRp6GwiEehmtdwSwSUj4mQLP68",
  "key24": "cLKWcFTMGjGicFEdHxDrX5LwND8Mdyc6Pbg7u9WChsyWyNuVhKacJoKL1UrkhN7BnuUWrW4mbnrWMhGbjK7LSny",
  "key25": "x71VkTXsHo2BFLY1KuupZnZDZEqKXeASNaLnenqpYwpHTrVu9JDo3iBvR246sVA8ds4cMCcaMwreDUQ5duEFgrX",
  "key26": "3Lu9tSuho57Y31Eo5Yf1njLYKqFmR6i367QiTotdefUBVtA7EWiSPA5zKc3VgQ92VT7e3hJZvCndVuSrT4bMx577",
  "key27": "2U6V8mVhup15SbQWW7oGUgxhyqkLeisJjEGsGJQeZHQCFs4Z5Kq16rAi9G2mwdzW3gCiBA22hoeeNaer9fo66QQw",
  "key28": "u1n2E6ZcmrgEd4JcvwgDDdwKzgSmVU56CYWym8bEDTtVQHofzmbYeMfEchS1AaEZ8qjdkvnmCfQt7XJLnTrcRXU",
  "key29": "2jCppFyRcmpGRrPe3Unvg9Hsm8popyYhWifHxxRRyo7VtcZzT75FjJY2ec1VvuzvS7tnsiA3BGocaJdwDMzMxNaa",
  "key30": "2PZZVVYMWtSTg3nvJ8y1pShwsaZmjxX76Jtrxo1kyozQbPiRxo9ASqaxREdC3azL7sBkCMXVUhz5aKEp6Waj17fo",
  "key31": "5uS54geUct71zfCUEpk6GoVZLRPXsA4MLYGjgwAMQDqb3YncHkqVWepCJcqgngK7ns4esYEFnB4gGq6TTgELp3es",
  "key32": "26udsKJyvFzQuabFqTHixVY62uvyNxZo84abEsakbJFeNNiie8xYRCSbo1NcJugckL2gYAUCEECKgySVrWVLPRFT",
  "key33": "28Zq1qHpwvczUnuDQSJ4dBrXFy5iEChh5rA3Jc8AsHgkXHhMHHD2kNUyP2tNiZuqyitDUH9eUksu5metPbu51HRo",
  "key34": "5cU6gYYRt6nmGRiL7viEvR12wwrV9gWrJrfrGquq7LJVBxUZdhYVBG47fyQrtyWQth992hRkywprUHimVZfZxber",
  "key35": "2YXmcdUjSMzBDxJpn9U73xZQawZdE9RT1tWNESc7PUFEHgah9GUtVYgbdVJNSXQGTFurQmmd2YUXGD5sgB3TaBjY",
  "key36": "KsAPkPcjUyhXqeoQqokK7TikazqA2N3jsN99CpaJvZmCT9SDJszMxQGkFsD4BsMa2uwCzwkMEqLKqRgS2Mhcfkq"
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
