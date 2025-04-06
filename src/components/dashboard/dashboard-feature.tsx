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
    "ymxrFWmNpwCt9jYt7kctNur1qRq2H1H7pqvVV8WbzCPxDzgHFetHJerv1c4819ZNu9Sf4Q9cVGaaZtfhGvkDSkv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AThwqC1TnhJYXwENgZ57d3QxhpXdSnQcPvLVwcUT7kePKSmG1tL39goBP5Dg4fD58Km15sSMQD2f49iK1jape3A",
  "key1": "5xfZkR9s2f1qFwGTH3ocXj2kaJyZaCfdgUE6dAm7S5iidEkNQr9UFBbnCx2GdpfmGZmHfvmMxLVDS9G21sj6111o",
  "key2": "211AsAVAVS87ikdJxVDzph3ShxHTdjMGmseaXtnFN7rZwuNSevi6vV4bUeNS2F3kLf7XSe8g9joRoXV8FLrf146r",
  "key3": "hz6x9RPE36r2hBox1TK2MUgJCt8cTpyTqZUFFXvvpJ97kSuS9yZEs57EUYX8FENrXp1CeQ8uoBsupex8Jj2Y9g4",
  "key4": "36EZkgiTPKkWUagHqbRx7j8gSqBW7hA7bkTyF8TXjgRPAT1pJRKb2XveGM5dRBPoXJu3PHzrKwPnoqvEBzvFeDJD",
  "key5": "5HGUmpLTka8osT6c63a93eXpwVH8bzPGw459HV9pHDoQRTCZgoXGFHDXEwuSx8KrP4tfRNvWs5867PYpqJJkMtcQ",
  "key6": "2puSAayVfVLuxN3BVAMhtfXrTETTWNjES6szewch4K1DicMyUKV466m24zBEPCNLNkN3enFiYv42pkBwjeqXD4Eu",
  "key7": "4CNLLw5sUydTFM8JjYUFvoKpZuwjtwVUzbcGfn45xehyhK78uvQiwuGpyhWa7hQYBBYbjswpYEQm1eFHG8M2toZq",
  "key8": "5xKjiLk7ZbCCSD3xF3ZrcRGwAe3YpQ6XcSPw1UEybxsw8h3xrBFJ2gkwYBYcc5eCR2vECk96h4b7X5ArUwW7677z",
  "key9": "qGerAPjpesvGdYiYi3wmggGesunbHPUprMjtMsVbfJquDgJz2wwxEnakomese33CP6BUab6BfzkAz1zGrMMjLnZ",
  "key10": "2apZiwq41K3cHh6doXQxQ3mYf3bd35AfQkDpxo95ZfNWDScmiHpY7DzyG575pPHLWBFp4z2DeGgJip9M4x9ZciPB",
  "key11": "4mANehFDD9YrCskhYEFLP6LTy4mD97V122ZibCYVF1dUKh3iPvVJieWNpQ8JiwujPLBannnMrf1AjpA4sQJco4N5",
  "key12": "5cFsu7dbbAS1VCzuScx4DLq526Rb3hkkYpBpCuXAwWPz16SfnsNHC7vGAek5ShoWPPoV7ZS1oJhRVy6mJF68vaGX",
  "key13": "56wRUmbGcEXnWysSnUbGFM47HLBANArWkf1pY3RVLkyyv9KwGc3ArUVBy4N1Z2g7XjAk4chFhXNYcYneHDfMwEmN",
  "key14": "ZTWKadK2N2aSEFjGzkHMN8YBGo36Q6YrCqr7LaiWhJTU9KnyB3us3WsD2DfziEST2UUNwem3b3KZha6TUCggPaK",
  "key15": "ihPXfMpdDL59E4DN4XdT52huke6pXTARGysbjosCfuTDB2hKmNBNAwoETsSMrQqoby1Nj2X9LKHTXhVmnan8pQh",
  "key16": "4DrVhBLUxv4UEeW2VKr7xZGt2BHCTDgg9MnaUyBLsVrNqyEfLvpRkau5r69Bg2NE74UFJFD5U4Kk4eiJhMkkDh38",
  "key17": "J3ZM8sNSuc88oat7ptKoos4pnLkA6mYhPsjW6wrdfWV7GBouMPBcreD4HMi5S6vyfzFfvQ4UvwPeLVV2Y2nUq3D",
  "key18": "4HBwcgvmKNTdhbzpNEGjdx21VVjKWr2kEcH7oZBejVv7E1bmYDt9mYitZFs1MowwzGaPVSotX8vw6xTBm2FGX4n6",
  "key19": "3ge1cVV3ZcK3qiJ39yVAe6UEQzMX9xfPb4gZ9sRCxtDtv5ehHfPa4CFwKT6t9FCLcKyojnSyc34W7oKMN321qcDF",
  "key20": "4V4uxwZQGj5Rpf9ZRAdcfggd5hZo3gcRi9dydWN9jt1WFeicBQXhS4RmHnSvQCxQUrXW7rSF8WELvaAgSb84zA3U",
  "key21": "uFBEwVHoxkqTXhZy2hvo3x5kgPWRotYhryy1teYD8jMBFjCE8VGmstxWiY9xwQ7gpztFEhezjWzGw5Y6s6upqZD",
  "key22": "6ExddatmnSaUVShgwjSCR6JJinSbKeCmr827nvWHPY5FCinKu46WEy9vCYLcSiQai62dWR2TL3ST68pjxfe55vb",
  "key23": "2RbiRY5Utv57tQBxTeGx3kibb4pEuXTu1YdCSfz4MVcDxC4FaMTpdPhEV7CWJw7xmazTEr4CnkkEAevUuEcLAC3P",
  "key24": "37uPcZpxBVaJLryAPP8KWEUwqayGJUr2rcqUjYE9Doi5QXwVnacExJS18shBprjcpnDG6kUBLTXX4hV5aVXnjKgL",
  "key25": "ZGXVn6DEAUCUnkZUAZjSbJszvbTZZREAfG3ckAaJNLr67WNBGakd1C4To6k3ENPqVgEaynCQqMhwvj54BKtpfjL",
  "key26": "4jEvCSFLg7KGFS5q3gdimBMiJNPj3PNEnNjiiutS9hfQjyMuE88ENSVZ662U8x3mJrz99sqfEXNSPhWTFRx2QKwn",
  "key27": "2c2xg2JE6W8Jk8EVPBwypkDH85SCQrqGEjrgJT4VvBAR5nzZUK5fiAwnMo6hbFd2jSXY4Qx8kbXo42GGXj8wHDB5"
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
