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
    "4KnU5bAfH6VRdHere2RsuhFrYQgQC28CKCyPvHpTHnzepoystosTpqNVDHJjCCZeh6cYroL7mVuf549ppWcPuQkb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GkzbdR7e7CRzFdv5vMqKeAzCZ4NoHjeptodZYMKxBbxUJ8tMv2SP7KzQzMdgBfvrtJJrsHpw5maK7y72TDsFe3B",
  "key1": "3ASPytZHQgAhpSctKDE91VypERbUY2mnpyVePgMoAzyQtYV6gMGua9sjoxZvtQKwwHtafjphkcLbaMsgWDZuitAk",
  "key2": "2RNpnpKd8t7pB1sWPnNSe83Y7zDtnAahgStu4QUUrUqZu2BqvesZkAVUd7c79HsTbCHQMnDqRvV6EBLhjYqoKbu3",
  "key3": "mux5mF19LdMbcX11kKWCE4VY93iLtta531GuMSJ3Mu1sPs7xjRMgXthCtfPZNfraXX457soecVi5ckagxutpjnf",
  "key4": "2AD9nX533FfJHHbQvcAbpLTikutDb5zD4RS48afzEMfB6yDhmvTj9xdh7gTPS4XTKw4fA4sTGtMdKf7GaUwSShua",
  "key5": "rT1WHfget7jD62woZZAqCKKUaaRhuAbCYRnAnM12RZxLQeiyPshm6Ffe4DLc5T3RRznipdFjimejpNLQAnKVsUw",
  "key6": "5RqgZBoDcZgep6obsDz4ibdcam69TrMhDVYrzEnTmVa8B37AwgUhdQNf6vcbpanLd3Snnxe9GuZieTErd795NCig",
  "key7": "3cUABXgr5pgbyAdnyS3NF8oZjJG1HqaCoPJPR6UgphDHeLpfdKE7uxQscNh2hYHmqw7cXYiXMgD5iyfoqhphfv1R",
  "key8": "2yG5BeZQai1GrCAnv3oj7mQTxpiUWXEAuq1pzEjc96qf1UUqei8jk1Pp85WVui4AwtFFZt7Jm5S6Hvdokqe1bUHm",
  "key9": "5yJ19FfqFea8EoJCw2XtHBjTwrZvpbUKZbEafSTTfFLq4EBNR6fumqwHACYW7jivdriFbXNTBgknJBbFphR5vQtp",
  "key10": "2P9SpJ8zMKWHNEQ4NTPRpZNoT3o6dZzPNaMbGV7q4UKiY7sCxzJhyzxirT3x4YvDYF1XsDLdtEpjXhxrdQAodBqt",
  "key11": "3ks8VUMEzQcJDQFxMh7GhaXyoMP5ZQ3VMc2R4rHTJi9RMi2oWHEU4DY2e4dX7uqqWqznS17Ekmzehz55WFN2P54a",
  "key12": "3Ymv4WVBwKbXpkFAuzW9c3rL63D7huiRedk7zNVCAWhqVTkUjzgy1hQqkdw62kinrQRs6R45EYou2ZW8yXTbcxsH",
  "key13": "5TDLJ2ranKWM3Am2kkQTWKPTkkP44YjPEZiRTcftop4zFqyyurnXsJpxtmMZUFZYHwicvbT35BXGyrqZuQUf68rA",
  "key14": "46r7iqC6hHmEfbmgzCTfmUq3MmWXxv9Q4joRU5ppVVU2d77aL7EakX3nk79YRn2iQtHF6XVq7beasFyBcZp6gAdV",
  "key15": "9kJYm8uxnpmvzEGcpzXYPviMYEMsanEUQjm4XEKU89K6Kd7XepHEJHW5efC8EftVMJoP36jCBZAjRmAQvmc9xu5",
  "key16": "2XCcntpPjrt2Ae82EnAnQE3QZjKTzFAwjVfk1aXpnjwaEFe3WU71p6fBUzYCK1HEsfvcikVDmD9KYM1MuwbwYkx7",
  "key17": "PgXBee4L8aJBytBaBwG8P2fH9bZrYLoir9mCRmsm1TCw78Zftm1mfC1cVAUTrZgL5opBXwW7ttiHJa1iSHkY8q6",
  "key18": "3EXcaNwq9vV6Z8gq4nWZTujf9gP4dxCMoLuFkXvGpH6TZ9tFagF8qWTVBXjWU7eFGmvw2i6h72SSC8NP52vP8Dgf",
  "key19": "36yieJC29fiFg9udymC3iNpedc6GFWYZSx2msiVKs7rV5LfsgQ8Z4cTzcPgYxqQSss62ZTQ4bdbYEfkC9sc2VNBY",
  "key20": "3GmgPgXjqhFvpYfSe99zpL5u1nM5VRFgNAFGXZf5aUcZNYZD8bhKxBbjTBBhsqfw4Px7joUiuKKGthvsyggNEsfY",
  "key21": "yD7G1a966nZ3tCiELmTay23pXwxtUnDq1qnU8jDHDB6q2idHJwbEUYkSafDznJdD9zhjDhuDRPmAvhmCdYQ4bej",
  "key22": "5LwruMjgjEJzDjzrwtR4jBrEra3dLBtpZGNiA3ojQEojCQExQPTsWH4RxvZNTzLtx2FA8mTnNptK3ofDB4VfT1be",
  "key23": "7vcRdZeeK4ASQ9AA1w2RGG86Y4HFuoCwZaqAkisENbZzwrAzyXL2B4aqfbPJFW7joU329MFmSbyHz41uULAcbTj",
  "key24": "5Bwqqd54bjDCWfWNrBgUfLhb7NqN5z1SraCBzX3qCeAzGcrnkp9WKMwCZhMPwcYCnbfUx5ZqNMHepsJnWpCpaSoa",
  "key25": "59ZtPY9L9sUuoFnChrd3rwLnJZFXH9E1y7gq5ARtwyXyBVBdTGcfgWCzMdyKCM5cifn1BgwSPDiSJBcwuSYPWE7F",
  "key26": "4o8r2e8TnJ4EPzjBeq4KEi9HcBzrWtR1Zc1Rgt2F4ig7GRzes6hruhAWhGy8nP2cXQuTWPEYT2E628MMbghK28s4",
  "key27": "5u6b5tSHY2NnBbagssqcBpn2DpZC5QnTUWU8HMFiPnKEhZzDeUnbo16ywTLafwCEwGniYFBRhSab8qXb94mNheYQ",
  "key28": "2KJk26ZQTEJ1YABUTB2wvAeJbPzKxx1xroYJyqwLnXPS2fijwKcEFYCVZiwF1UxSZyW3SeYNH61A1aj8L5iKq1hP",
  "key29": "5NqXu8pjcLTp31VgFQvAvEozbDMZUc2MmNnDPVQ3j3qFY1fgLKQfC4QoqtaMnwhTjpx5ePytdtBvMrky1SvfLCqS",
  "key30": "3f44KqAz7AcpWLzMDWFZUKFCSZCgdXLVCPWrb7ujfTKQEYAwdhjjHNoVmFAqE6kYDVCaT74DfiHy1RvQPwHoL9sq",
  "key31": "4Awpi6jTeri9dtMiv3G7jJMbapYjoBRK3bXvQPBxaqcdZh98KWp1fECuMyiECfNPidc4mQiztJcdsnytXUc1fdSk",
  "key32": "3cJbiXdv7mQnzAvLYR1qgkdJamuRo1sSArQBinK9k64SikVbgRuX2BJm7UuYnKx4xYpxG2RbpAE2wg7SPzk5kZnA",
  "key33": "3XPfMmyfriCmUX6kmkS1E8zDw9kLNECsRJwuoXNYQ6JD6vuVuPzD3ue4ACNh8wNPdJtJr4TtJTifDhitXcfx7Wcb"
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
