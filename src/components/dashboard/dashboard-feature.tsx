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
    "4M7PHiF1JTyNh5rNEw44h84WHkgU67v772kf9wKSH9qv5T1bou61cDk3DshHKvQgk8yemXxbt1Q8EK1XMcDcatJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ydLAGYY9edGr8msKUoH9adwiHsHTcsM3CBGFj9w2fSTJZfzBzPUGRsy7AERaN3qXq7b5V5oeq1PYsuQYvUQv5hY",
  "key1": "3Z8kPr9uwJEBMHJ1YJbBizwjuwnNqAfwpqVBbhdJABQRhGPBtvo8NbMj7f3LxqafozLQfdA1QpaXnJHKvnh9FX2Z",
  "key2": "2RM6Qdgk2jbN466yhUJXGMNRPGdL99b5iiXYMsvc3sD9jGY7xcof34FEbQupJsfoPEkzLr47u7RR9KGxdxmN2uEE",
  "key3": "5Wa6Fsfwod13SweZxhxQrAVk76Xwkt57gCEgkZmvdq8LSy6vgppUWDKcyWoLJd9jipkQ7cBU6Fw2Yth5sSQbUFfk",
  "key4": "e1mgeDVGVGX6LR1dnaB8JycjN62ss2MKchy3xNkmoanJfNan963VaC5PD6BWW6VXy9Tpbg2uscRA16gzSkZfnaD",
  "key5": "31niV19pZSr7jDXp9k5qaUpdQygVx2GDKhe9YEPRW3sV2VsWhkAyCyPENCVkmyCwtD4tardJLkn8GuyWgQhF6jbh",
  "key6": "2NLC3ywJ4unhXTz99dqrXYFAuSfyHt9Q6q1QkqNiYBcK9UVbTFYnVCMAMxi9vrWeB7onQuNwjEnwHnFHzHTMy8qu",
  "key7": "3AaDbnqEpoYY6qfTBKyyTQq2xQUyjSjrDnQQ6DmMj9xi1aeDqoYkemsZfdqVDV6cA6sRsbhMcfepVvED4wULsUtc",
  "key8": "P2fAq4VsS9xFfi9M4xrzKGAS7q4Xnk6vnogUbtHyaY5QF38HUvB4ZtHTCrF5RRVU8VCh2atqyTo4XQpxDk5PoHY",
  "key9": "RGXT41VeZKfE7kN9GmhwowvEvoY6rxwnE745r4FqXoX6FGBpeBRtfJzFzf47m7MRDMgxbn8rt8vixzbV23AG1NQ",
  "key10": "4njb63g85QA7e4DF36xx6iynSkNhxqAmYXD8nuRtGUHnMThQT8kbNtoZ8XnYpC6j3ScAtQqTFkQQejgDhM12PzwM",
  "key11": "5oyLVSBgN7NpbFCozACMyhfFyrdsk3HtR7hahbajWfekmZHLSrx3YqFHWXbieeShHJkmefi2Qz6ti4AKi3VduQvr",
  "key12": "3zATezRyEhWi7hHYrnhdButsXL4hFUkGREUpopsPbX7fQVwAaBFKmKWpSyG82jpTPDgiRHDAqkdTyavZbMgEiVCT",
  "key13": "45wzpXsYg9DGxyqQwjuX5NyEXFENbWiFKBGbFJMctP7kHUcZfTK3EiZrxB47p3MJZVNKxmNX78UPpdN8iYcLSxW2",
  "key14": "39yfLUR9SARgCWMztDRMqxbjrzn9Jxkk8XpKkQhTdceqDajHixExcYkACxuADKdN2AaXGwqe6zqqkEULuieeWJBd",
  "key15": "36xFCjpAZpJVxNQLAkhKPrXKD3CCyExdY2CxRmkqTuVjbwcjWYTdkYQHFsM1MPKhCaC6XXSqiLXaa49t2FKjsuow",
  "key16": "31iMJEdCeb6hVcjXWyyMMtJcXnmEHT5mpbWzUU85dEw29jupMjL3EuaE7aKhQkweiRotebhkmco5f2QbUTakXts3",
  "key17": "3Sp7ftS61Ptr61Qso68uCiiBjEXmBSwRkvvHbKGj9XNkUPsTaQ4NowwuchEYrcuUgVVCHtZDBuEjKerYU196Z51P",
  "key18": "4N7zUDMzEeqXvohM3ezJUv5b1Q7Ep4HUoDsX4iNjCFQwaGbn1Ru8w5PHHxPcrNxSicHWmshi36AGtdHik3oNC6Tn",
  "key19": "3CZCiWz1QXWB6j6HBR9bGZj6M3r6ZtyA8dJ9WcWsqii6wTNPczmDEPRpA6HhgXe4bESr2nnqdE6ejs7uoP7diQnU",
  "key20": "4GASi38xCutwB5hSNRjzNFzA8VDLfzs2BjFDeHm51FdkWxm9XT3pLmPbttkeJ8ki5DHwo7z7r2ntFGezzMfbc8G3",
  "key21": "sBm67hW1W5eeGWTcWvNnVXSTKJr7aiaFPYcVHxuK8b5NXCsXWe9QtMCjLXCSakdY4728zunabBwLgDCNMY88hMW",
  "key22": "DrF8zj9mkwz3Nq6PNURbaSGT4iB4JkLMWav8rqfoySLnni8ytCoiEc2nuDjXgWZzsx2jECGXbrG3ExHrfqU3Uoi",
  "key23": "3SHDk2PTW7csmQH3t8W2NxPkuY3xwDoTJPa4b7JNnaefQQ3q7wKirnqu3TUEBTPoWwFJoUDYjGz1pp7WftuwzQuV",
  "key24": "5fREq5uKc9qUuZgLHbsBojfmAqcD2NtbkdEUiCBT7hhPYwuayPGRcnJh32r7cu8uwqLcxryE4TfGKFB2zcTTaHRq",
  "key25": "VPHFtwbGxMWR1y7ntA4ZMPXiFfVqoT9A1fj1dg5kFoLW4JFothhgwrW64F7ScNkzGVi38HU7SaCT6EeLxRVkPuA",
  "key26": "45s7tQpY8F8nJGoXx5uAcFHBUrnoF4Q8Tjv7D81hHAyXMRunGUtk1VbEsNEZHNhhMngTQoJQm9MQYJkAkF1Die1Y",
  "key27": "5LhkxHDXVafo7ijp9eiJPCQadRSgQYfHAJMvqTuYJ4w8vACLoWPWgzTYo3wXx3H1tzxL6P55cen8gRCxpWEnwLiX",
  "key28": "3s9pR8Ru6YDcye92CJEmK7Z4w4zpY4ZKUsgVdLWc1kRM26aqEn1RvwtmtTrpciLKtursKfoCJmmcQPiaEwsDPZUD",
  "key29": "2vUAQBikWaeT4wy4yKtBS5AQXxhMGNkTP1FarYk24sHgT3UsxyuPpTJ62ZAKbcCoJpYwgGbrM3AZCLGHfQEEUPiU",
  "key30": "2WzepCLzC5nebB685MsLht3HFiXTh1PYP9vD4QpZujajcoHxoyPe5kkbQck8DgggFMUSsrTsuDhsvmn6UapuxhBr",
  "key31": "4WDCyjFdnL4jmy1Gaim4Wg7kH68BEjEcfrjDHKeaejRx7ncL8UJ1KJ85wULv89NZFcBnA2U442PAjTSTdv1epWkU",
  "key32": "3n8mJRrXvKwF9M6jukPVYRzxUPCGr3mC2nGoDWu3JZ6peyg4RfBS7s8ybq9KbxnDSB5wmF9jrQQq87iBKJjqBVza",
  "key33": "WW3X9zhctBBrntmJnpy7NEJPAUWiVw9UT7innsYJ2n4PE9UZUB5S5dHD73eyNSN4EFKzNDurvMDbLmzcNxTX1Pp",
  "key34": "5j74ECY4rrKPPTUpT2SbJzTo4EAqR6K4iuU2Z4waCAx7sHDSnWsR1g2DdqDV55CYqroqTmNepidZUayBj6LDrvuE",
  "key35": "5cUWhKw8fJFhkVZVyLXtz6Rrd1iywVMuMjQLAtK5MTLK1x3mg15NYicRLTDi34XoveHksD4z6HaYfh8X1LSaMmUR",
  "key36": "8b1Q4kZ96w83ozB7paP6KeFboE1Aer2wkuadAhLWctyR1jAg9oMJzF19FdXzEU9XZmpWhgWF2Q82ffH9MUP3aqW",
  "key37": "2Yvgujqmd34Ppqtn9mx5ULc1CcUTqbhRAFQ1y9J8iP62mUi53SdqTR1so8EhW3C8Dm8sGB8XND12fA5Ym6Rhg1LY"
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
