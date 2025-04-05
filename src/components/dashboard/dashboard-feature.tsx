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
    "5UggnoX8N7TdcBoxyEW5tXrjUHUFFNFD7u5bnd4yKZ9tyYi3svvxFabrrhF1XF3H8EvKEqMV9bWkBpVhbhsQmv1e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eBTLVkHzFxpz72TDWPhvf5Ast77AbDqUKkB5tHKkWxCQa8m9J7DwYn7fbYPw4NBBV91Rav6du9GsGU71qYBYuvx",
  "key1": "5nBwAiQCohhNPPeZZnoEQxUsB8MSV3te4CZ1RjYap7wdFAQJCyR1P1LPwfwqwY2xqKEbQURMuHEokZCuGBeRSa9U",
  "key2": "5YfjSQ9uSLok9MpHv5S812DK89yxxcTxrdPXG3B5zvta9vyhv3kb5DKCvQKn9QRvXGKsCMAh3T3aCn7PzKmYeVVd",
  "key3": "5b2ATbFhP3YRkU5fSuzTHWAS26GrTmo4sXaNY2Ji273L1xKT3ExZ4S9x2KopQrE1tcYb1gLroZiaLz9sV57WcFkR",
  "key4": "5Lj5y7HmXdKBUysuARiKCyz4h6MKNZwXwG5GkTZMvw5zhqPGFrSGDuuasMTGpRpnpMb3PvyjdonWtsCqZNyLxdzN",
  "key5": "3Zsym7LiHfhdeToNT8pJKjxrf7YMM61TddqpVxiQZfmCWo7iW558gYBL6CyjhPqF3k8zKyEZ573znJ6wW4HnPzwA",
  "key6": "5dAp6fU5oPd6furEgYhzGcz9sSsjPLBN8zDe4UJCGFpBkzCPFUdkBm1M6zThh6zZpJGCrdwT57H2qR4CevA2NGhV",
  "key7": "4cDN1VWPd1rCqxcBNrdwhD7NXMRAsXk5hGAPwBFDwVthKrdZkEy1qNd83fAQQSfCp2TpGwxKuxdy5v8jL3DYTFDy",
  "key8": "2J3kwq6fvqYsMCa2PEEme86Q83Sod9Gk4SGia6xTur4paCG25QFHtH5eQbiGyEdxuNZiQeLHZiorChP2p9naoA1M",
  "key9": "GbpPao8edywC29myoSoLZnQoTLc1Le5YmuXLGpd7QBsrx6ne7NAkFVNRaq32MqoF7LkFgnsrzZde4BzqWd2dRjD",
  "key10": "4xFsvmktukUePTGwH7uQLypUFkv7DcP7W6sWkLyP2aD5jkUSRLP5LRTRQXjcAGJVvf939GG2jpYigNu7nL1t12QN",
  "key11": "2SChnZGfPqsBqqyNvjNT9Pu73KxYXUWfcgNhWmMteNJe9yx9vLnwGoJoZaPc4Hb6TgFaXJzpCVzZcUre5UXHLjCp",
  "key12": "4XPaq9j15VvRibmhfzAaUWyu5538p8Y5NRE8M8tk6sqNooU1VLdtzrGgc7Wkxp9sGSeQjmqtEmkaZbVJ4AB3JWFe",
  "key13": "31DeQS2px3H1YKmFMCyofZaVnBTX3Mxf4ygZDTGbrrfugWHNJCoidy4MLXr21g7LKiMxiCCFNgUjVz9zsUw8ZRmt",
  "key14": "41KjTGiEvDRFuDPWTn91jNiQp5m2oQp5utzpSnML88Z56czjqFF3sL7jj4vUN4hAWcMyQ5MjQDePd4DNo27s1U6J",
  "key15": "4nPNsPcWsGA6GfcAPG9JNLXJKoH2qwJMcMRbQAMim8e5Qv2U9vw5ymeRuF5pnQTtJhnXAQ3X6S6iho9ATyxDmN1p",
  "key16": "2cEKVrJKrNo4GuaX32yjjqDqHLkjGFTNkSNBqVD1Qv9iWBKWedUU471ttQ7h9NHAZdAB59ANfB5szYXtCQwGznMf",
  "key17": "ymPt3RpufbjskpGQSB5XozyfYFH71nzUscpEbMJ4HftWTDQec8bEC9SycRNEH6XzmkjJnBFNHAshBEFKmc34Tnx",
  "key18": "5ZqoS221XbcBnneYwjfUeSTjwV1R9GdNejurVxc8LUzJYFgbwUJaB9xRNKXK4qRkHTNnLdkT7yAXJ6aUEsiFseHh",
  "key19": "2otqfC9M9TkYn2GiPi6f6RiqNPvtycjNd5eC4Zw4x6NrTzFhUZrzLwZE9SRvdxSmMeq4KBBoUEn9b1LxXjgQwDG",
  "key20": "4QJQazFExb9krwgVNxPw29z9VLeE2gHZjbkrwET1RZPwfVhG7xeDPES8GjwPJXmYjeDcFdpWqMef9cvEY8zQ95XX",
  "key21": "ogFxjDHFtZs4aYYnRLzdERMi3nKZqjCYhjGrqi1jX8FnSGJ8YygVdHt65yqBm5bUd6CEoyP927ZQeiuYMepQWZd",
  "key22": "3v1kBNn5otTYgA8QcbYWNBZAt2kKt6QF7qv2n9taK2mUQYhHuKwaTMYiN7ZDgrEeXjFA82mqhaKE1ZrbaiciiasF",
  "key23": "3FRB2H7XArpPFprBbQk9NcG9anptfEpjzzh1VGUPcNpw1EKx7yip1K6LTHo2yJjuhrL7P674enT5AjTicFViKu25",
  "key24": "5sfbRyB3Mzn125kFLhVXAcmqX42Yhbwk2ak26Vr939qYwKFtDFvsH6ojycXoMxp5uGVVCEKdo9qwA9wHxdV4HYPs",
  "key25": "3stvLSC6RQD3duwJVBzNrhaJwXssmpgHDhjwG68HyrSLshgCytnpyBDhFjpLTnz6wo3n6gNv4rZiwVtMzDjZeEED",
  "key26": "3rYL7BL854XUAn7Y33YJZV8BsZu6FafWzfe4JsgAUheJ9cC9eErzLivyKoTtqGywXe3M3PSFZxzZoX8J7VKWNBBF",
  "key27": "46jZ8CqdvRkxPHG9JYiXY2nNmrK1pMQkPfB6Y9pBdNV3irMVB63saiBiWctkKSQkF5zXSVMRHUWTCoVYQxdXNHvf",
  "key28": "3ismwafHnJ7o87ukARdcp1msS882QYMspJPZXfgqKAhuc78167TVAvkhq6Yz9c2qk73uqEDTogHvo7dXBqzDLtVC",
  "key29": "4jiZDDtccrYZ1nxusmRUcV1gTbqLaYognwFqt9hsKsPUkq6UZ6efnGNHiKQTbhp3SGkRchQHNYM3CWiSy7fRfcMo",
  "key30": "5B8aF1vx7U39XmxbuMbTPQRgJFu5um2gm3mkUt6v7j5fdkP73rLLPzUJ8njqt9cDN9jQEbvpr16s5yaf7u8v47ZR",
  "key31": "sA1bhe9EEpTvjs9EM69gw2oDH2ZmpLSjFYfRNn42ELvJVXU65FbDgTmR2vr5uMitd15SmrvShirige2SB1Qxv9b"
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
