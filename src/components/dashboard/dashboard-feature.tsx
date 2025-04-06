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
    "31wpdnZUQhfa5XQ53hwkxkzv631FQ8sVuDhC2Yk9fmLEYmMeuPaVFKn23ZYRkZ3jkt4yiUSnMTePZvRuioU1YwUB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4h1NHKDXo9ySXdK957CjX63mRg54CHvJ78yxfCt2ja2QY9LwdK3TV9xtYqSxBU2U4SwQrRZpuxMjZkeE9EKKA7iv",
  "key1": "avVw6GakcXsRQdcXEf24JwhK3k2e7SG522vsgub14jMAvJdaWZfgruwN5j7CK6sKmnTjM7PdJLkXGe3e5m7VuDZ",
  "key2": "frNKmYKcSdmcuEzUAWJC8rX2rLoxNPJJheoMdj7WP1cRRLZmgrYuzdG3VkCuRYNVyDM9vFHbRRSY8jFeg4UWjiF",
  "key3": "3ABg39XwLKcokAeT7Syp2d75wGfaBzPQ7P2CGvDxRrTFrweBbtWdHpjFirf6kTPUW65V8gb9hNVD2XR8W65974Zc",
  "key4": "56P3Ev33No5Yzrkt3nVB4hxufNQm1sUKZWiUZoNYAmjXEAPqv6BzwKPjKp9hUXFVF8PggCZmuce9moMtHFpXrqzP",
  "key5": "3LgmRatKxbPmWh67SVL5uPtNEkfXhJ95q9LeVLyFrHk7BKRnG66XJ5SSVsHTCyWziQRUiFbFD1H7qYxgNZqoKzgF",
  "key6": "5C76pfuwUgzKtVMMM6g2DUwLend3ZkkkRnTRfWQ8tujYYWit78o4pW9Ui2EHnNmL4j5eJoYnEHz3disi72fazHj1",
  "key7": "33bp8UAwn9C7tLDdTCLoHGiNxGwwxJ923oZF3KMJKdtFSwCoJB6c4kSWWeuzVDC9E3QtexgbiBMPSDVRpADNQMyT",
  "key8": "66E8waQJbZz7FyFkoUFVpTB9bxMW8z4etgVU2KYgnLtkN3gTuXiA14re8wAc4LNBDCg4zPZgYwhQqvHL6GjMyCxz",
  "key9": "s6oKJELtBa6oDXSCmgH2hRJGkNLiAjpULcXzv6Uqdwcx8nm3Bnn9qRLXadywtQiREX6GFqaLR1HtitNhZ6XB8rc",
  "key10": "5rewF6TLZ1ZENL9ditBL7CarC3Y9bM5tpQ4KpGXQX7pTjn3vJhs8Bbz7NRst2stxmM4MaLtBoxbyFCcv24sq4yyt",
  "key11": "2GdLQueKGwS2gpSStGeTjksu5gjhmCiTun3qqkUnJqxCXW1Np4gjZW9VAnvyNz2RMNTD4gqjiY8Q2pEGm7MWoQua",
  "key12": "2LprEz8TxVrxdXiKSiVPYTiaqAqsCmbcwpQyB7n9d94j8vzD6vB55X8qMzjz3C3DNbtWMxbC4WYitKV9YV1YwvzE",
  "key13": "3z4iJzU5Et4JHTtUsuF7VD6eNtDaNMR2nacvm3qTavfcpo5RtvwRFRapoToQu2ef6noScvFNAL6fPPakuM1aGiDq",
  "key14": "YmbeSZziWpGLfHoHJxAcvVWAUZuwqMCgKtKUEoNKGi4FnPSPCxkgjsCbQhKEEbCeTCNKpFX1Qwqxc6tdeYepxMp",
  "key15": "64CLLsXAMmxWSeX1GfZ8ceAamqVNSaBPRef17xRm5wmhUEGF7F6sK7bJK2GurtUBJCTHoUnzjsrZKWyuWuoJj75p",
  "key16": "5ggF1MeJSmHdA5aKs7xDKtrqvee4RBxsUVMzupL1s8eQjY2of8cu4eCWAEwqhdg951zrcBopvdjrFPk9NPsTRKch",
  "key17": "2B1JzbhTCGQpFBCqzfRHDCGbRc9MYcUkGZxYqUDvQZU9cqPSg2wpZH7TEUatCLvN4yqp5rB7QMzEN3nGxCyh2XCS",
  "key18": "4koBXAz4HQS1tnGBknoTafKUU8KHj8CZgmW7rzxT4RD3WwHs9sJXd9n3YKECTBPwCFqE18hvCgPumExS75Ygxgo9",
  "key19": "4cPxyvQRBNzWP5WMxvhJmW5GQWNouoqEmMfYyQrS4LXBH32xnV71njfkwg9ahkVn1wr6Q25yZvtDTHZas6wBPY9",
  "key20": "ULMUhMECpzG5mFreL1AqTqMkPSDpgKVpakLoszDBCWjLCV6AF64GQBuAMvKEzQ9hUzi8sf2uqoUX4ubbQdnKsdW",
  "key21": "4P2w42KFYhNkA2bwWN5RwXf3xJanxxoSR83V5KvZ7g2hKBiKmbv1qBtBpy4EZduFuWnw2ghFJGDUrfADEZvXyQjY",
  "key22": "2ERdrKSApQXXq3tNuPxQ7gtft7T2HiCvL97UzntdacghrH3Akx3PKZQTrdxarGcWJxqRiqAvmE26mPuay7ssVQo4",
  "key23": "4V99cnyCAJRdXSs6XTwwNkPGXVC11FXoPdNFvC7F2HRCvr4tztv1BAXsYvyNiwh77cJfQKk3WYr8m3V54NPU2AmP",
  "key24": "1ccYHawDxstMvPusF3WwrQt6jshzbAsKmowpi8SBzPvKbgxvWKAYmmk2m1148ftSKFY4YJB5oReznA94cgiopiG",
  "key25": "3eMAMzDZHX8jdExQpzeT3rGkStesBaCvJjQsR4mfgaWuUGoicqF4hfp6i88EY82dm4df4hGsmahdPmxo226z6FCY",
  "key26": "2gp6UkkUWqTmvuXcT2y3eGiphsEUCw4JrLzew6hDrG63CLiW5RRL7rMFXiMHhZwauSVgm7ueq5L6cpaD45EDtK2G",
  "key27": "5vKT7JxGpa9M7YNxY3YKTzfNXgjF2PVsN2XY94jAn5pmeqnM4F5ZoxpXsQ2dcEW3HzbYpAnf8bi1uFFpEkng5pvc",
  "key28": "39brCLPCfJ8Bhga9czcu8zyPNATnjdS5yBhC4FVvF2hVF83JP5LnMdF5BcPHLmjmJGNqkbZFKg7DDmG25iny5jsJ",
  "key29": "4SpcytrrZ28L3SvBA2Hsrn6aL9MUgDXgw2emfsBVX2CEvEPetBQL8XHuwtvJhxXwFmZ2qZFiQUVkXh2oPxgZmsGx",
  "key30": "uPCRBuutvG4dcpHJk1s29j7sx8tTr3z8GKA9b4vXcEkozFob6M2M9roK1YCvXZj2HWDAfG4shFufodsHNvBA9zh",
  "key31": "494SypxbJK6NMbRB2kJS8nhCuCvbUBYE5MBkS7L5mHLU52E2ErW7ggmWSJx1H3eqPhz6qaS9V2zzLti6RfWB9wJi",
  "key32": "5G3YkLVtN9ypSWakSHa1HKXJmE8xcivbLnRJJwDg18CSZBv5YLhPjz6bTG8CrqT5gMxmNABUZHZMhe5wj2bqPiPm"
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
