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
    "4Cwiaru96LgdKUa47cFhoBkrjgFT3eVYBtfcTQmdtS8C28qrWpKu5FPyNHqKtoFpWq1afKoBBMXDCVjZ6RxmraK6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ghGQnrsWJJGESZG9pVeamMocB7WFf1PTk3n79xmX6TeeJtR8yQRBHrXYWCQp4fA9sLLCQyXgWZYBdBexm3fvFyZ",
  "key1": "5syXUAQhQjraCw5fUJaMS43FGkqAdSbL2kkPyCMejB3RuH7wbcCr7Ug84mtmbsQ2avac446BcV7nLBRt4Jzxa8YM",
  "key2": "2zd57xRmKjhpQFgPP1WFVBwXk5YdNWXLJ7moUeAk25MXp1NrMe139F29d959BVM8fzruksBh3GsYf51MRxEppnS8",
  "key3": "4yAywuKosSVEBLwgtndNDradiZsVaxf5BPTp2nWdafE8K2skmEfHLaCcz8Vp3S8cC52BxntESabY1miYdqs87rBt",
  "key4": "4u5K5YqERp47CzffnVAMCunDiKNkxr4Mb1djYxhKp6u3buJ6QV35cmacZdtS9JZdTMUWAGzE3NN7iVZkp1Uxyz3Z",
  "key5": "Ej26CM7NNkeMNk3jFSL7tEcQFEtW7TfUcmTCtGBCXjGLrmFfMnQGaqyCgzSXwXBWfeEP27yaekZ7g6mP4JPRptp",
  "key6": "2Y1DmQNikMdXFjmERRHWgD56Qaoju5JDLkCoDu7ftwVtorxgBu2bgdqgZjixDD6UZq5b1AeyLtgCXAitsqwp5Pdu",
  "key7": "36RFvaFqEMDV37BdD7QXSUSUgwVuMJz11SiSn81DqmrzERKAhjFpmHptoE8siNH7ph2Q9RodZLfsjssMEtVdmJ4E",
  "key8": "5VtP8MExTMqTrCYCMUJv5JHb4viPnKdfwnsJCaE1ZCDXVhgpKgPtr1dawmn1sfgCW4jWxHEHZUBGCP9GP5m6Qta",
  "key9": "5141LTB63ZgCrMYi6zQg8uheLwXAcW8hREuNYJvja18P1ZF2ZQyfuK18yNY4hUPYr7gqeqXh37gJeHpGDaNbNrAu",
  "key10": "CkMSBkX3RMbWUF5WDek9eJqBg8vyKbUR9NZUZicEbB4hgZf7AmLXXpCChk3Mwh6kVEJyzr7bknxdBkwyVX3uNFc",
  "key11": "2FYN9gecyDn2SEXw2sirf4g4Y7j518LAdNMuXTHiGq7gnWPS83t5gKQN6WTRwR42RsAm8HazPRnKJMNcbTMxQVtS",
  "key12": "5XsJRHMu5iJUGcECRufENjtKX8t1sF4E8msm3SJTGTUtDeHhviVo7YTREFYJwfRDchtQijd1kZJ8CGnFK7TcsLLy",
  "key13": "4vCLk7fp9A3vRTmVJkngCXytvgkmhSu1LahjZxqSSrYZwjuQBNjz1czsKkvHtJPL9WWg3yTU7LdkqhGtBN8MYU7p",
  "key14": "4Dw5ZbadAf8hbouUmEZ9GuSH2AHn81AHMJoWi53VsyTMEBjzjZPBuoBvSkiCQLSzdMyBKbZphfyDKi5jHtjcQAM8",
  "key15": "24fcfczCKxqx6pdQ3A5U8EH1QH1Jk7sBkK7i7zaLdwE96TT3FzFEMbhXQ6ooQxqEZNT4SmLxB27LEcszL4eBBvs1",
  "key16": "5xqk6CEdTqTAMVj4XBfAPiRqESiJxUZYDscCavwptWA8gnvW59aLNnyxf6yXNeLCePTeABJBLktFXeriFQc5Joat",
  "key17": "3wFdUNEPPXo5yB3Thb8iqEEnu35tGcmKdNkqxgSu7insT9cZuVBv9YRuzckB9HE77K3abrdN9o4S16q92LHGKsr8",
  "key18": "3WxNSENz6DuwHw9jYpod8Xq8sNDRcj43K2mFBLc8Twh42yfAKoPkm7Mph4WdWUfsbD3sshQVYYNuiHuRCTY2CMv9",
  "key19": "4besBYUhtiRq5rVsEXXDgLCo75grRpxHJQ9SZouesVvVVsjioKhdjkfHJYhBL5CqVBGJifdTikFaAw3mbcA6Deyn",
  "key20": "4NiqxzBUkkFzC2tAsh4xPsX3dzWpQUtDtHEkx6F3NFnjcTBY6gnvWozJ7FP3vJB4VkiUeRC2G9P2F2kfqNHBQ2oi",
  "key21": "3MwzgpG1z647Pz1CHvByfqk6ZexJHfPo8cpp27ckihT7Q71xU1Dbojod2qLWVmXq35mj1n6SEPkXoud1RXuE4MTD",
  "key22": "2U1J7g2FvhXB6JP1KvZpxaerCuhTrQCvEm8GrCbJinzcPH55eBEeCPsHS9XXtVcX8h2H9zLp6nqT9DYg5SMpd1C1",
  "key23": "ZT4dvfQyApq2EiLGJWfP9Ae3FzAF8cHHsv3nGRPdtAJnqjyQd6dZ1yRrMing7WNxb4dks91JmPVHqzULXzZhn5J",
  "key24": "zvW1YyNanppQQzBrEr47AAcpj545KPEidFu8Hjonu9KeYzncK2HmGQMhgeSV1csqk8xz2p2ZZ17VRkYXEo6nz5f",
  "key25": "2Hbt61vcNDog2f686QHygDXgSJwXVP82bSHVKaShLVcLEKdegZa4F2Ss3iY9ZU6ZvHuBCFAqMZKYB4BDFWKusxnZ",
  "key26": "4WJ5zpiAfCTMKU5D56Ka2VALVULqHWE2Q9GKHf2agJqmfdsFAzQMnH4AFmvjN3FLcWSTJCgexzQjUBGUodNr9qq4",
  "key27": "5rwKjfKVvfaGgCxseZC5tW5ubQZMwwPBrSr1eJy1i24pBzXxaKJA2ZwmfnZMTfoESKWwgLTVixgRYrnBbDdJmhfH",
  "key28": "4rBPozhNNWifuY5kyn4BNfHodHqoyFaM281qyEsnoactRrZvuS9xpT2rKkPitNhbapi3dSxQPNQtRquEg8dVhquD",
  "key29": "5fZVoWjNyMcxG9JMfkVZPkyLAaJYyCbWu7VmiCNxCfAq6on1jMRogdwHMg7t2tZbnyo3UpaXysxbFmZbHuZHdBH8",
  "key30": "kU52gRwBiVfYWjrbgNFm4QSmcTDmN2QovANVbDgXBv4fGEJcAgso6R3RKgNeWutY2J14ncf75YrDP7MtWnuiWCK"
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
