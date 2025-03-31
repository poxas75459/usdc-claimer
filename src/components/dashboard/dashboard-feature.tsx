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
    "XZSbty75zHBfTPBG3cbgePcdMkcQgjecmSPRezr3bULCFutezfSGrdQxJDp4W2F7EwWNiW47k7q7a99NmDnWLwz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xi8bKjtWgCMDLazVvk2B3FmV6kPDe92whoU5JMxfr8B3wicFyWR9qgPbzgMLnnzpJbQZndxpJkqQihaBeuGU3Qz",
  "key1": "2yKjXKWZGzrXGNjRC39J34ApYX332hNB4p3BoMePhWtaoagdiQFVv7n1BqzkLPEL9DVhaUPik7FtaaFopBX1pq3N",
  "key2": "4vLGsVouKZ5T5z3682i5LiRNJ5zSCKFu1PYEXGCFoj8HJ9v7yGXtPboeQL1iHJ5qPmmvzDaxTQyCTzLBn8KvTogj",
  "key3": "2YqQmFdsTbMVtpgtME8VTv9fxibGhQxTmFgm76SVDxsmZrxUzhvcWzyLRgRqXtVTcpn3QhDZ9Q9xS2gea4ZGvcHs",
  "key4": "qfFTZq7rBzW32WDCPEEW8vw4eG56zXSNaYq2c2i14SewHoeAEgmnPig5VbMSJJdYxVSm6WmkDMD1DKN6WJzCuym",
  "key5": "5KSbXnioQzeBcG1vbZHZRS92ypFJW73MwBDdUzfdYp2MdBhgtRXNymfShLwnUJVG4xSMeYtAQ2Frfu8K3MgtfnF8",
  "key6": "3dbgxnKeqZtYvGJSuw8By1YBxCF1nz73eJmjnCbUxaowsRM5zDFDPWeDwXwMQVQ5ECQMDmZJ7QXAWYdDQnb8z8ru",
  "key7": "L3bXiFiqW5GzYDTd2t5oLPZ16fqgkSbNy4W5JsuFXmV55Foo9EzPm9jcqGcd9HCSPFrkuCxoVU3GvMhkQFxxCA1",
  "key8": "4hnEVUtTSSQasJ4pw1Ahbdrcj9cmWGorSUwP8gviEuDqnBJdRJKyywwjDGMEgDw3He3UXPhP4NSo6ja5QByLTprj",
  "key9": "2XDW6YKC3ywxMBuKtUVWXJLXMGAfSKacyDncwQDDS3aszonRg46LTR7eeUQTU5JmcQJSHWJWAzUsxtqgJdBo7BAo",
  "key10": "4K9sHo73H1r3Mz5c6NQzgCtZLius5udiyJyyfZXZ4adtuo2cGnVsaCKwZGoqXmc7vSP8ZvWjvzUoxP4NyTkz3qz9",
  "key11": "2gKi1aFG5euCeHy2zHK8oKvG3CmSNurShZWh9TMK5GEKngh12dVeVwYyMyS6TQYvjs4yf3GX8Fn5vHRNDfvkTp9C",
  "key12": "4RSkHBbeJfE4M652rPWEWzFC1bCYdjjza8Fu9QEWuPhM2qkkLhhAcrRS6SYxj6ze2YVAs3BhC1sk1w64ZsGn8388",
  "key13": "5Pn5E2HmRp4AWvcaD8oh4pESjs6JUaJnaxccZ623jcDEhQ1A75MB9VijapKwDP4bMDiP9Ks4DgHMMowTeNLxtLkh",
  "key14": "bW298mnPpBGxUjwHzLHkkxB26WPTgJ7zisyhxvWadC2HMCqxsEiH5Y6uNv3DKSYbEQXU985TSJZNBo5WTvD8ZGz",
  "key15": "3uKvzVsUCJzM168bj6mXZuDct7MXyLZPyNgcyhNg6rjrmn7TD6kUm7adt9HTdMcd7Y2HjfeSQyHcmZXoBJFK2Ww4",
  "key16": "5WSnyAbzF3PrdRRGGUzcppz4rcRhYdW5WKvKA8wsDeVaU7cSozkuTouv8DuFLBCrpD17vtYEnkLvXbR293cfVgVg",
  "key17": "22qM86WLmzLu4h5obP7UY8qnHBfc8rj77oyQci9zKDxpgBWkViWkNFPVbwkeudojerTvLmWG26UTmGquSpgbgUm5",
  "key18": "BFcLR2TiQyi6EXh6ENyCoB8zCJcsmF5SzY7JKEGo7K8swVY4dRuP7DtsL5c1aD7G867WDbfD8CyH6uKnSCtkUL3",
  "key19": "Rf3mc1Td2127i52B47sk996U2o2ufNkTVTeTA6Ghhj5giTkbnWcRey6tK7Cp1bqwBuy9hnkARnhRKqwgpdsdGCR",
  "key20": "48kgAKnPPWNfKByVq6AQ7ZZPLoecXTHUJRcYBwaTQfgCg7CMbe32FBZE8PbehjjggX3tL65f59bF1RDU38tvJvvr",
  "key21": "3zNTR8SsTsFvrsn5tVaRwx7SCcTMr3hvnjXes36ZNJfJgggmS6Cv4BHTWeeNnxkh2HErBNaZMPaftCuVKEn7eGLf",
  "key22": "3p74zTsf1TdaECTNtVaLu6BJrcMaGu6iZreCtyEZRdkT5ApEt9aBsyxAECdATYrEUMghyh7B42nc7P4AfuV3hdLS",
  "key23": "2zb2gM9CLWT2UPjfUXyRTTz8Lg1MKq8cSH1t7fAaoUj32jEKtHNa8DmSBhKgetqjSxgYufVV91w4KdWUGp2BRm2Z",
  "key24": "3FXqrdG2tP7zUH3e8YuaXRfK5CjLhPLJHEePgBiNFpBiYm89r72UY2sWqo51Y4G3dRqxBAYZac5RxWAHw4P8QXf4",
  "key25": "4k9kg6gDTuNShqXpv6mRMBHT4LqJLpLDCwvUsDS1JPJcyX5XnLA1RnWNV3DX1rZsJW4Kjjqfw8bghZtZDnTHEGTG",
  "key26": "4Fg2KTGh68wBPF66WGjeGqKxUXuBfkekPgpgLnXzAN3aXBwfMS9hQeW55Edze2VpcCLGBRb5mAnFT4oPnyduHbBd",
  "key27": "2jqGVKU3wut1pGXoS62nKDqW3k5bJGCTJ5H5v3CeD4ou611TT8hgHr4cKMFJUa44rMA5gKAK9ABehZMF1ouupf6U",
  "key28": "3Bgk7rZkqf7JwtbpkGziSzF1MxKPEqwGQUXNufSCA6akhTytoHzgGZ3mELwZhgGJvz7N5Pr9MMZL4ZkPJ2hvYcKD",
  "key29": "3GtAWWS6DwbcPDjv6v5vf3BKZ9LuigT7jNgCa4RYgvTtDi3FZxsY6ATdnSBHi4AtRTVppj9nSuU9vQWzn3RVBUDq",
  "key30": "2cbtpqZStDDX32dBKsfWzNR6XB2J9qjy5PfRUqz1q2nHALVqToZvXdYyFQ8WHeYLLTdAdEmqpokKEkz9wALF9wYp",
  "key31": "2N2eJV9DpPcagnuLBPUoYmZ9WtG24ZmUkXFUaNTuqoZdZUCwCg7kxBcTgNdecUe3v8BXs6E4QxSofDAyWRz2CAwA",
  "key32": "2CFFn1CFoM4qQFqiPbTwQtUJKMCY5CUDFuYmoDMwAXUhy4dSYRcaJQKbLb8xtMbLjQ1BLTVfxNsXfbbVHWc9fuNr"
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
