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
    "4YY1fPwsw95EFupEVXH2qLGNomXoK7vyxELLjxQpCGk6orQiJEU4E9MVprsDyTr8cEdb6BxPwM8zzFwtx6BywX49"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37Hb2MeAf5un7HXYPM6L8ykR7xEuYsHrR4yGkWA9NzA9vky176MZRWC3QZc5erf7XUDFRwadVL7tmoezaJCxQKpx",
  "key1": "5FBmveLUEgvdZNq1dqxP7jNXhFhkDKjSSj2nfFLog72ozk5UAtoVDR5tfNroCqKsQtStAswQuiYVXNncdG6RTd2z",
  "key2": "ppkUbgMiLPkKX2zdND38aK7tG5denkaEgSLsFJUbfnaFnu8JjK19n23o1Q52YTzaWP9mYNKK2fEqKR59AroMSWs",
  "key3": "kjc6KLJzFcAjkkKLkuUAreKuy3g8PRzvXycH5vHJ9wWFcTHywwFQVjWXQKBHXEcM6nobJ551HzhzQv5mgmsK576",
  "key4": "2ruteXTtEiA1tCQSkPRsP3ZueMPn8Zy6qsAUgGNbLFFQws5rXyZaE9T9e8BY1Fe7MhKQTVPfM8YFUrDyeJeYBHQL",
  "key5": "4E6Lw2RrdskABwGnr6rVbs2xddA4m1C7fMcNgLxarTJieN4QjK7jb4m6E4U1QWRSqgPmxcTJbnsA5W7tDCcd2Mod",
  "key6": "3zWWVd1KbhZxgtebPyQREFmxSJdVDY3vr11wTUzGKf1eMQA1FpRjfTLqRbMrTMNhohNPsDYft6cXgLNeJGtwnTBB",
  "key7": "5c6Bjjx2rrP6VExMNtmRsaGLcToTpgBHzCrwqeXUbgXhKGvjAUmwuWKBztfJ1StkKyTpcqd11HHrazYeSMeoag8g",
  "key8": "4iiT7wbkkzXgXnW4E5usoSJdmmcJY93MZWGJSNq5RqdwCpENFbThkyA6kDvjF2RxEvGYzicGYo4dsREPJ4DC4eGf",
  "key9": "CZRd5po9zMAeLD4XCCa9dEbZ5Q8FgpnGVYz7tu6ZqVZEeCL87uXT9ewzPCLH6TKswdBgwHhV2F4TuGZL3sHxjSM",
  "key10": "5UMWLizWHMMHxCsRyX8Jw3LxQT7dNmqXUrJ61keXBhSjyaVZkWL8oPYGZ648AeHvKYaXTw1SY22KpTWrJbRQVp5q",
  "key11": "vLDET8iEDR7fjswGU5NqiB3ey18Nt85gYuALKX7Eu2u6Ns6DDeEANUyaFtCsoSetTKXZGURsuSnf5uY7WGNCgoL",
  "key12": "3AHdKmy7cVYi9FasZPYHsqz7XCzKR2MHmVewz8PpPh1weo7ZwFtNt8K3KrWTMbyUGvbJaQdF9k29KyzZiCNDuYHE",
  "key13": "HyfdzAg3QvopucKfTBkrrxRu2HP8AZKRKFU6hYTkfyNcCwgBp75PsZtCxcWmB2RfLkEXdHBB3itp4sSLeqy2X8H",
  "key14": "4FW2B2fbafcLN2TnjL7MZAKHJB5RCmrFa99ePgZVSXu73oUk4gpXvcGWp2cvmxh6wNaYtJy5hWLxtp5sQ49fx1qo",
  "key15": "2DtNnEGEs3DStAmsCCKD7aa7oRV5BDEMddvps5yc4Nv6ocsB645QSQVtUc93RVJUuqgVZ2BdPQaa1XPN6TEV1Zmr",
  "key16": "3M1hPANqjmx25r7nKJVYZn1Lyk3rV9g4g42b46rj7VYUL4u6Z1AJUCsYjAvC7puHJtpy6AH8HdK1yGYZA8qaEMaY",
  "key17": "3PFfRYNCHuAnrrEJYZopSzWvfMswdsDgTkqGaj8WJuy5yJcM1A1ayfgH3EdaqVeY1ysvGECyLx268sE54JiuxydR",
  "key18": "5MGtgA5hN4az6Zm9vsVtefdiZfM8VHaSsFVN9oJ7gfurr3k9REftLHzxiQ4K9aiKh6KhPr3592fgWNC2kHcEQ1Ay",
  "key19": "k3yTevnDtAt2XjZoqdBXorGg4qBTZFr27rcvsp3C35Rh1bdu9TUDDFQ7nJC1Zv3HZFsnqf7iCR3gmLpsftgjmzd",
  "key20": "3fav9qyS5MKZWdrGFogRozSTJtVFbUD1gS1ru6PVMyugyCDHAjKehY3wP5GiyNCJrxMxwVsiaZL7Xygyy4jf67ac",
  "key21": "7ip3J12WX7etuQE5VYfpv9fH65nHTFLWfw9u5YiBaWfwWnw5qAWrXSWp1KAvYsax7BXXuQN4zddLXKYgW4fmzrp",
  "key22": "3URH72byaCMA3cZ25b5BbVtrkgdhEUq33CkZ8E5Jvv2RuhHEJTVBcKU6SX1vbpSbyY8Zyk7p2ud73ngSet32W4ez",
  "key23": "vt7WWNSzCvE4yWj6FbkKposGCLump6R7AuWmoi3pMRgEK5pAGuTzFY3iZk6Jmhy5rvUp5ssoeZ7vkeGo8gebaJX",
  "key24": "4P3tQhC6DA9K4UmEaPVE9B2AiSK7r1sCsmJiq2ZGTh2bKi3QswujpVENyhLkGjFzjHfzFGUDtp5JZqi9h9TcDXfP",
  "key25": "32Ju8LZyrSQidmHP3TwvzDvfCdQr3ZNjfCdcG3eskKeGjofb3jWZKv4M5LBcS5eZiZSJkb9xAfCEESK5ND9Kc9V7",
  "key26": "3sJUD39CPi1bSGyv62CQ2x3U3pk55zTz1nE4NgPrAgHPs6VU5gZBSae8QFmPS547cVcEcTzbEEK4pgqT46y9ewQw",
  "key27": "5NFpaswnLsyFzPtx2DokRWTN1wdd73cq9dwgq8d7P63F1rWzTYhZQH7PRmNmAUWza9UEgo4BjbttNHD5hDHFgUMf",
  "key28": "3xVrmzBDH1VyXPzMLKbqc3sL5vz2APMTimarD95pAn2MySMCP9Z79jSVKFadeYGXboj2AscKK4Wyq8a3pViJymCP",
  "key29": "43xhBKeDZsrEGzzRfj4spU4WGA2DwCKnqfm1HmydYVXGgJSMnaWNhMxkTKWKacs6wzjkUeVH23CvoxGyiJA6JSmw",
  "key30": "5XSMSD38pkxQm8Wy6BC7d7cibd4KhibkGBFxbh2xbt2pPGw1h5tifwAZY4GUfk6AX7Fi7jXac9sgyf4i63DmFUBj"
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
