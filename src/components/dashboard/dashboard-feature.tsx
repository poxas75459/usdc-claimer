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
    "2y8UhkPyPFRTeJo2hCVBGykyQZxByMGj7MrQJ8pkchiBrn3q5LQPDLBYjKS9iZPLz1J5kA1BYKmP41Z7khXAUeiP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43TyP8Yrc9iHFF17XdBt72XupF2pX9Np5s2LpXhPM128yZu9Nr3gZaB9Gqsg5fAsGB5vWaya9A4jivVqzeM6iuQ2",
  "key1": "3oV4xUxZ4LeCcb8CAMz9oNNDuHbNQhXWP6enkYmYA5gQy7R7Ht6b4xz6PL48NBRUsNzNUKLMSPhedxryqK9KPF8N",
  "key2": "2RTeuqu5Jzv4c3YpTqxJ2auBfrsiJt9S2WsZvNnuGctwQa4ayu88dv6Cf2z7GN9RFcAYeTMxu55z6i5paa6w63oE",
  "key3": "2Lk9VtGJWumd9JVmtLJ8gTYKmV9xPASyJZNwbGWTzpuL1Nhd8cVU1MkDkwrNm4RP5Y5MRK9xdsbNnmHYYWuiUK7v",
  "key4": "4FABATazLV81Lq1NqmdnYG9faxTrYj4FBghpjhmF6h6xWRwaQ9WaLfB5pjUeHgj1EDCsGArcwj28udQNzcw8BjWp",
  "key5": "4K3fqWQSEwRuvfS4em5ySpsHaabeHfMUfJRYMwwWUqG5gXBBN3bBCCk2EYmkfabKsp49bWuxZVqEeneiZxxipcDv",
  "key6": "524txJV9tkAxit45WF3ByAwJYWVK76L9iAZDz3oh58gAe4H38EEiuWZkqGpoaRbZL6JE2ZN3PXwoE3b7N5bwYVQM",
  "key7": "ZAcRJYSvwL8MjfyHFPFaacec7Bs3n1yH1xjYuvus3KSdhcEa3K8XA5FF3Ws7r9JRK17z4QU4gTptNb2XrwW1EqG",
  "key8": "4WbQXBvGHbEQQWw945XD1upqQXq829NSFtqf7RWiDKfpTPYimmL684LTjjqBDpKsc2LtniiErE2cLtcpAggcLmUt",
  "key9": "eJoB6HQvGq4wmYc6QPBbKkfL2pAtS2dNtPSXrRc9dBa4Eh3KoGaadWPzb9qfZbJoeg5wbN6EUXqr17byaU2Y7oE",
  "key10": "3Wxq2KNpexyAbQojC5AY1oQf3oY8Rx3Ayhp8mAJsraifKKR3WYGEEDFzVGBfLDop4h3dwjXUx1SottR6z1tdc8CV",
  "key11": "5wFnUfm668ayA16N2jDgx1DofuWN6etDVHBXbh3mdsYyShzLsLHD6C2ohxvvZbM71TDKJQqMEVCo3PZZnJvcnCjD",
  "key12": "5YFQqy9iXptZT5Vv7tpbM92mhjdpskAbxasYVsSAT8rKLjjG3kb8zFCqdBsDD8mp9qYjpfAygnnw26qE4RF1vAgM",
  "key13": "5e4r4GE5fHqCo3s17kM5DKXrDMT66cBeycZZm3nPVd2tzFVBiLMQehWwpveeAnRoWApiD8PNWW9NFsCvmx9T9QAx",
  "key14": "53Adgns34KFQcea9xMkyu9eGKtDb2oiT4Bup4ZVNA3EnmFEoJmk3bjUuNWFEZqj8uggkFXcYA8DDQF2sKDa9EXKQ",
  "key15": "2W9TF8zmiDuiJ42LJ8YrQicZTdHCQG2oSqZzSku5dVigNoRWwJXuYioQ7RJWQsukrKcagL3bCCXk8DrdeJUPJPiv",
  "key16": "4EUY3xAJajhY77NB4RHMYqL4XpwiiCHmbrjejwwAaxb1aPm1MM8Vw8guPwoCgcPCDkuDdvMSy8XomEUa8mKSpd1Z",
  "key17": "5tZ9VK5A1i3Mv2Pm5rDevL2QHnNdAqYSm6JvSGRR3PJU9A1MhEVoPPnuEThJb2iC2ev1CFaidpm7oJJmY83u4JcA",
  "key18": "gkr9KpVCNEKetEeDQ8Uap62UqoAzZqeK7jbjvmUKiqyyy5dUt4NRpFcXda3cmR4KBGkDVk1WEF996Za9YfFTQ1C",
  "key19": "41vQXrfqadJYvSm7gsvUevvVbWAipmWGRuNDMHbDo3qeZBsXCxaaYRMTbobtAX9CEBk2kuaZnmtxwmisJoyGDvgp",
  "key20": "4gGuUrTwqFxyaPi4pjP4F37jtr4ECBChcZnDmxNLUa4cuixAfRgQSmEgAQLmn74TbVCgoyn7b42Zri2uizkyGggk",
  "key21": "4oDfm4HgYqp1r4uzdqsUZW4qSU1SgQ3p9d4gBbQrP2htt98n9LmXS8hZQBBhPougJKGzDV2arroiWfKuqH8JaLLh",
  "key22": "33Z25zJkQXJaZvd8btRs7VCdc4NzJxEQeZyRuWCJ8YqdDYALa2uYktiSwZPxCuRVw4KrbiC6uf6Jvb4DDaZwqVTX",
  "key23": "4xMwLNbB3jCUio9M4sL9Z1MxXqBPPqpabAZqcoms4yGcsqMdjpMrNjyQQV3mHsUHzs5M1metsHJVViLVDt15y7Hw",
  "key24": "44j2kgDckkVTLTF3H9Rv1pygd169C4vmQYtWNTnLhCjjp22tp3uaJeqDt8nkkEWyoVK49nidh4VUWaDqoJnz8Aqk"
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
