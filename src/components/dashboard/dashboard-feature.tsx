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
    "3jh7SXmXKuewqGPeRNyRupfkGFgGbx9755wbEdHoyR24TETKTBMZtV9YurnHud1DChdLfrNasqFBbHN3ixuX1mhu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "584U34qLJaxZM9xsau8ptgy1NBhFHg6mvxyTuuWc6cbk43ujXBQrFGLJm6NSbYi7PHwPzzC7rUEH6PQZC6rdM7aA",
  "key1": "2CV1gFkcDnWvZCoEBGPVLCYeaMrDFh1rQZhd9LZKjvKnACL13KDBdQsbThCmf7EQhU9G5iPWwNyRaLVpuDxVhVuA",
  "key2": "C4jUfvSaYuUSHG2CwmjDVwuW3si5A6rhcEGQWr3QEBKKEJCtMRYJW7hZLE2Ver8ft847neLuUzBYKYqSuowmNow",
  "key3": "2KQyG49V6RorLCiLsoRQxY32avWPhvBXWuo9uoPcLDjJgj1LvDWWspxTehNNoL9eJ1BgbBjA4b4STXjoiA3rCZK",
  "key4": "2mG69h4617TF6KUy8n5AVNT4ajK2aTkb6YtWZESBuqRTpPjvDBdH7SiW1kWYr2xg619o87Je7PkjN6v1QsAiSfwL",
  "key5": "5UsQSBpKisQwnuVHpYDcX9gAVgdr8KWSMmXkun4QYtfakKyPw5heZjDDYmMCDcXR2KTVKbKu1KM9ziw6qXwzBBea",
  "key6": "3DvVaoBbweV4yY9LHb6tsjJUeAaCPfkyoRANNF75otZnqmczGSKsAs8NV9CpXvcmeh5vnpPBEQe6nxqRnTHF67xP",
  "key7": "5ssWHc998QmJjfQHNhKCKyK2FKT1vTdZMQ45fzUzcu27NXWyJJjgzbKRFQQrzMVdi8enPqRoLYTWEpAgfNZ4hNKk",
  "key8": "1zehGLL3bpg2FwruuFDGQBBvjuvavQzPoh4Zgx5uH7ao8T2wqjYJUPVLwcyPPiX4VM93dnL2fkQHthsgEkZ6RP6",
  "key9": "yDhaUxJBb3hkJuXzkt1ZYwnXz16QByM8SHNtuvbWQKL7QiS1SYtvUXDiv6dT8iuE5SDqzoqNHvXjMPwpUM2zoig",
  "key10": "3d3UYYGw5EQtQw5UBn79KVBRHtqZvxkE5CpEreh7mg1VjeRwSPDsbR2fabona8qCGfMKrckjzqKMixgenzLLMzD5",
  "key11": "4DBtRTp6cF5vxrg9ThBYkyj1xg4JWPMJvMmKmSoFWcK9T6eonqu9NJPNLDAqQDyFzwFqHRPDWUYwNyV1LTzTTgjz",
  "key12": "BH5YV4y8YGDVpvvuXomkE3vLtRojzza3qkTLkuGePmJsnXd12x4jSsMsTn3Zxq5EGySNk9U15tnZq3cp8PoHxs9",
  "key13": "zidehkzDRjRFUKfncrg14G6GvpUozTzQiGpicsitLD4YX1RMW5KaCFMUgDArWkivZ55swYKwTLpjhRftgHWM1hu",
  "key14": "5UFS73Kg3WNnwN4Jw54biXf2A3v9aTTwTyyGbn5BJcFoHhMmBHzMSmADjmnuN8ZkB9VaTvgecrhxqtRmQPWV5H4C",
  "key15": "2yTjBTJvrWMpCwGeB2AF9h8yFML3nx3Ag19SBiZ8aGczFBaX9vxh4S7puYc6KKiT17nZErbtwGbor6TBDzsvh5z2",
  "key16": "37NFDQrLgRbXgy73VQmbYBQAqZgAjGNnRTvpQQFgDhAVHsJWfQReMd8D3to5RxmQU7haXTfce3qEHQdgpTGUypsn",
  "key17": "5TicDrDUYM2VErEER9qjcDDcbMrZmUpaqASpGpvmDWQUwZGqD5iZNeTu2oy7xo3uDbm1LeCWxDk5mjn6Nv3r4rs",
  "key18": "5eTUEnFQz6yRQhdcYWaZY8WswA8NFgSLNbM7dEEt9KEJTKHa47NfSzzBMmSTRLhhGF8EfDLYz9B85SgTNnbbc7MC",
  "key19": "4mBAHMjZsMRcyWNMYQeC1WsGGwHVKcvbcg4qWVevm1Qep1xYJukdBGT5Dm3ctM8xjjtsd1y5BE2g3ayHj2ZynCN4",
  "key20": "38X8c5U1Ejmv66Ari3dSmubi3wkuqA8JDWW1PoESnuZp2JUgreTWqgNrwr2EYCnPSLEXL6TJoqhd2V21D5tA8euL",
  "key21": "5Nv21joWEGCytXzRe3UBiKFgyUy77shriPEGtsMrbPCFoR8hgy3nYKzNEZeFxEQ9pJBgJ6MqMMXXVs8i46QzdYf6",
  "key22": "4jm9CrDFf1eHg8RAtUrWbQLbjL5WyJYqSxd9hscf748FDYnUdUMTBshMh3mefqE6GdpwntmQjFFecE3gfEu5AVig",
  "key23": "5kg5rfvztp93MnYrRKSEN8qprTCNHAktXMKpNB3sgYyn8pREPDXbHDe9M5UtLKoBmoL1xNTLx6u39CFkuGAbyJsh",
  "key24": "2vbySoQZwX9hjFLR824PLB67yGELNBxCHBncjLQXXkMcuJ2StYR3yE3aNHqTDzzQtFwS4nzxRjxFxJE3mvJ3MhP4",
  "key25": "5bs7oFCopzvyNdvPH7DECBQdkZoiunrbmMPdQa1D5wghw1h6KQR95iQ8R15scZh3RjgPyQfdSe7B7tqmf5GYPfcK",
  "key26": "2VhZyFZjHpqbTEczU8kuiKXVNSswHc5PyQCJcrbNMxyR28hGwkrCaEhBJAqPpWkxopC39dckLFi5i3uAwzHEHvW",
  "key27": "M3iX3ngjKq4PU9gAYH6bFEcH2Nx5sGcnbKEJ3EZEhdFSUZKExJcmHf2dnroCb94nB3gaeqjh7gFZo8NnLqZwAem",
  "key28": "428V49Z9bL1B49bSbMyAV9AbLpHQAVTsvcK4ftd99XHZYBHeSUki3yuaVxGYF1vPwJjFMYXygyPi4KHnrtLfzcaw"
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
