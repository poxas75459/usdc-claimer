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
    "38CPDwwkJ7Cz2uqZv89B6Fyi6LbbH35Y5iLbUmdXBymkQ5hHW6Znh2g1ZeqpKgaEcbtNH1SiAuzsEzKNAMMpfDLR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64BMnL1DR6mJtqDBTWesNEoiAbJN56pMxJxqcXtoZNLCw1qNApriMW3MsUTuaNkJG6Y4FdVSpnYj6XigB5y9n8K8",
  "key1": "2btD6PDTvKvdoFfHVvSu2cZLE3y3U74i1wQ7cfW1mqTxyYuhd5E7XAwe3KiiFwzE2kvMsUxvMmuujNp9aC1tezM7",
  "key2": "4fA23NLa8kaEfMEsVhrAsqGFcjwdCijVRsGdocqTckPk6aZfnMRKhCZHQwkVqUPVGTjphubErLmZTikic47ZhKwd",
  "key3": "54jPXpVKWBDffR2PeaQvK9STm1LPtgLDxVFNRZPxiXCdEB4gnc6i6qm8vnq6bBPYSUmSzSPS3kVbtPGrpdVDh7yn",
  "key4": "42whLpKJxps7YRa9c1gJ64ha5ZmMQMBp188F5kTRAGgqRu7GkWPSKNjjZRaD8iUCdHusPCnPE2BmRmDQn7atB9b3",
  "key5": "3xFGFt3LkA3ienZBt2QCPms9Wn1Zu6keX2nDmiSobFRHBovv5AYJ5vFUghcAQkvrsGPEEjxWdtfu7w1KbotYNRs1",
  "key6": "54ZTQWkmS7MN2P9mhpiHHXiEcXf9iWFzgHKEnKsJfZtrL7UEiWa5NJH9s7moYUeSJ4mRXrHDXpmZ77DvEKt9Dgnz",
  "key7": "2MvBXZV1TpB35HaqMCUia8uoQj2CgUfqtsjvbYFppacURDPFzLaz428aNsKivoUefdm6Ei2mup6WnbNrkNe4NszZ",
  "key8": "52pL8GKjaorWiCDMaR27aajwhC7Px586P4nfPu2cKyu8wypyYUiJeKqMBg6PCEEjckx1wiFTA9ymA1Wt2aDyxW2p",
  "key9": "2Huor3NSkMsEPENnDbeLrFEd5beSchponKLo5Nu5oWZxAAzukeH2tn4LviNWvAx8aSyitJLuCd66hfsWv2hveMCU",
  "key10": "345iTy8yitor76irQ7ymLgVNVchVRpEwYgTRQDWmmCkuJuz21xx5ckD9eqrvRSLeuYmwmFTuoyTcPvNqsJzbiybu",
  "key11": "3CH9bnUKCAAJLLX3HT4CRdo1eMZ7fB5qUQe8SYb7dMTyfSooUD8RQeDAQnCyNBzsb7owhZ443GRoKuiigATjYsxE",
  "key12": "4pihkHM8AobvxGVgW3r6sU7abmSJjJPqt5RrBb6GuDELzPwKzMW56PYg1Au6n4o3Qw8hJJoaRbS6Cgi4xinYety7",
  "key13": "588AWurCrj9s8Ld4BVMp7qLqimzaDJ4jxbdaApFibvYXPX2xGXuT126mZCLCA8rVWXLkXZsUXHCYX1i1HqnR8QbH",
  "key14": "2vUnAnkixRHnyx2xBexQiRicGTJvYU7mb76RRZBqs19K9A6GwzTSgqJ4x9AfjKcMLZ9kZbgvmMiFp8dG8VaofmJZ",
  "key15": "4oiAbGY1fgrkSzWRtWTPdJFYy47YG9AFJFGfGyH6A3qCYiSyJKz1dJrqMo6ZwQRjNRfxStNrbJK68rFrrRZCXAZ1",
  "key16": "4dQBbk3yTCyWggPy6dhuJTcQ1b6c5NigdtLoQmpKHWpBJ5MpgNoNtDyHNnJq73KPrdYWhDcSSXxVuJEPdM4tJJyc",
  "key17": "5BHNTeHvsuaDXWWG4QepE6QJd88wG9etjTk9MpyUBonmAi83hQWULDHt8WqNHij7biQSFgxzGc7LG5yhXnECWvqw",
  "key18": "gav6HQUpzZLHQuR9G3aWU8daau3xEMPGUsPA4pDaatjHKEniUgt1tNX8FUWZHbbECgA8kR8voPvcSXJwctF3znp",
  "key19": "292YrmXR2q5zTTN3La4Um4CFZ9EUMDwVhm4RVH9QWgoLHPzDUYaNUREjPS7WojH2psUB4Wc2B95QR7XHoyuD7hpz",
  "key20": "2e9Cw8WCJdy8siqzCna5pL3EUJTjht4962PysnZbKfxJA7aXPFP5JpgAM85GA2pBTozyVoUp28ngwpgGgEFJMNQk",
  "key21": "2UMEAD7W75vF9YAqUmaEtg56ZkMiARtXSg6oKwUBywo5FrAzrVntJvcCs5TFFXxocvjZ8PtrxdfQMHCQSSKj7VNg",
  "key22": "3wLggzxJioxSmAL3MPb1gJTmz1xHQ2tWSAaGEhvL9uyDbRrw3N185X9x4SaCjvsJyM19QViKV4Kj4PKMYhtrA4Ef",
  "key23": "5mJcse1cg4JwCnTw442EZnEhWhwJ22xDmEoDCbj7nE6GmQnWqGWrVdYgZWHXY5c2YYhPjpigx9sM8t3NdPTZVDQ8",
  "key24": "5YyuBJqL2jfy2jfE5qdB688FWMWkVeFg9qNhqYyqjjqsDfzLuKQgrcXkY85rtNuFPkztwHXkbXvhjjfjzkZsuyeL",
  "key25": "28VicK8KfcQu1mBzr9HASFHo3b83junvhNhWwLxvxQtMRsevev1nkzTLXLEGcDn7WzYntXQv5kspwPTkhptQcdRk"
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
