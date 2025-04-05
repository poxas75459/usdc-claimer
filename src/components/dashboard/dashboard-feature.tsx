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
    "3wSjWtZyS9eVG35QuPRAKzy2PrDk1FHCcAsTSWoSnr4gtsFpT4Tu3a2A6F41LMqd2gbrv2t5Lr1hjMVPFEsQDX8j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3trBk9Zw9AXnKRJMVewtCeEpyDVwJAUEXCmaLzpMbJR46X5on3SNsmKENoqJMoZLZjVe4uquw6Xz4SeSkroZwyCt",
  "key1": "VWnZzM9uKbXnGtjXdTt8jGN6pE649kzDyWk7FmyNYEoo1drzw4reyXUjtRiAqQ9TJwFqVRJ7kfyq3TRrH7LBaT1",
  "key2": "TZCEEWbvnzndRPCWdHrFCqUh6eGWoaRvtK9HwUwfr3FbqJquV3eSP8jCMdpZ1C4jnt8ZwG6de5pKGtSi6hHfmbN",
  "key3": "JUwJ5UoFyo6jLHFEbT9H8FH5cywiiYY3VcbxFVJsfqmZTn29kUH42CZEjYSKYCcU3nPx2KhABcRkzczctXKAnA5",
  "key4": "2Mwj2Ma4Ypf74qXSfQCsRYbsnus5cWo5Lc5coFsrKHzMQyxyT2HmsnNbZu515vTLC31mKVZ4W5PUTyCZdme8YaZK",
  "key5": "2fPrahnStPsvH1SjYjvPpRaT3bVV5XSoJqKUHetwi8WFfDVb8GERpa1K7D6SdZa4TekE7qZLoWCFHuYiBA8ZYFfm",
  "key6": "4JDFkvb4h15yPR7KaTit3fc9Aziu8g59BpG5jdZ7mLeiAARR8C6zZFV6XxW7kEtf7qpwFd58zXJnwD31Hsp2qJ82",
  "key7": "4gT4QuUqjjKoH3CRgMTFPKdk4CfuR9xcmFWjVwRLqC473Rk9RW9hiGhWsburWh1whRBo4Cdbnzw3dq1igJAX24UV",
  "key8": "2yxaxayG3kZ2XisJijgWrRkkJPyF3v5uXguWLrx5rppLcTuPdcxXQa4JQgAvdkfkHcRYFuX5oCwJeSipyXQhLhNQ",
  "key9": "iTkoUZEKzGSe7WXqCgxWDW2MgkLvVzPtZxPr8jVZbFGajs7XbKxDdVGfnQBsCFTCJ29KCeys4SnJX2P12q66HQj",
  "key10": "4V9pNeLJVpxYw4uJ2EZLGqGi8GUeb2eS4CAuQCDYo5frGdngNEX8uSNji7QM8bdsqRR9q5fKBvnQ7PsMPxPSo347",
  "key11": "2wfX47iEfwRsjkmkVQZ6QFDhrxRnM4GRfhfBmG3eRB7hYkvNJWDQFD6EbeaPvyDWQLwpDH894eCtGV6XYnEWSaep",
  "key12": "4hfYYyrUdT2zjJVaRucsecWWx3Pkh9sYgi4XwDPL1BUBe6iRHw2mieW1HmHqtYH6v5xaCed1cie5EX9zNaTR62J4",
  "key13": "4PZRH5BCgpch6yChXidnYvc6w5XwcbK4PbFqrdFHcPve5p4paFmi8xTAYvcqztY65yoAQj55v9VXDcsXBP93yWXe",
  "key14": "3hURaHXfRqQKEo8RApDJKHitrG1Y1Dv9iCgLuJ62iY7gJYz3h1JEN2z9FveD2jYt9J74dUcqrPHgZpM834cYMWj5",
  "key15": "57EzVTZ2RMfzxAN8QCwgG7F4n3bDpoV6SQUB8d4pCnjMhisBGhrjcfTe12GEoGiLPXUh6hgWK6w2NE1ghdXUmPH2",
  "key16": "rkXRFJMAXqqL3chxYt5AthctUG9Dr7zhiemAJPnfaGYBQwSpfTcTUxmHXotmM1vNCChHAXMtyzGeXz2T7mMyybx",
  "key17": "4xF8Rxk3rAgMXWe2n7x43mZxef2Vdo7vErr5ok3adzoA2V463HdE5owKP1wvKLa8R4HbRd3KeRmmkBp34ffszM4S",
  "key18": "5iiFJ4TLJ6gyyaXTfX2kS9WWtEnCbVe4mRL8abFpP5cR1aCrrEYKnbxKhAk3vTLfKJRYtzpUVD4rSzCPYbZnUTgj",
  "key19": "5j6VPQDxux6dMCBe8E38VaKxri85vwULU9T3X6E3uqMWzud7SD42kqPLcvQqLF7b5SmZqRXSpQmTGcNhJ4wxWPo1",
  "key20": "awGPj7qWbDeKUAs5cS4FGCvqvVFfsFpyaoYwz1QfVVnBXEs7aU3agnppkZdCAq78LZcJ2tbFPSiFCF1umFk6zQR",
  "key21": "2eGY17nWb758CQYtm1E6MiJ7gYXZDpk46WCVKdV6tbYgMZiyq9dsKGaNUPW3FTSEVT8mZzYJYoKt4CHuVKqZPKNp",
  "key22": "5nZU5uSAL7AaeyqTgAB9VGRznFvArqHtkiXzTpLTLJ822vxxzEvXR1ZUMSqSXck99VxYkDXpQanvxY6o4huaardp",
  "key23": "4GrRxd7r92mJ6w33CuwdF4h1waXMQoXm4P6epViLia3fDUE3PYDDC2kqWiSGufVLgHH8xACyVPuYusbz5D8deyWA",
  "key24": "3cp8SLZMhK3At1oQnyfn24T8WWsmCSZLfBW9KfUScUN2snwimMfpy3XkCncJxMWGYzfAJ6BQAFDWfWxVHkYMieDf",
  "key25": "TLV5w53seQiTziV9jmytcbXz2FdXoWxVxdADEnmdYXati4SYu1PhPCU8aobYhgABayNLQMacUxa5Gh2tDNQLY8M",
  "key26": "5W8YycHaHe8rRK6STfQ72MLv1i4vqwAv2htkz79haPvydsUahejt8KNNMt5Lp1yFMzruHAKxNpNqbT8uEgivra3s"
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
