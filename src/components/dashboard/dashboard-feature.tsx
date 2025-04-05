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
    "4EibHn2WZG5dZXTW4hupT8LB6SwPivWQ1ULgLDAv9dkcBaVzsUKejrqp276r1NVdDxgPGRa89kTB91vQPXyUjAF9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TVnu3wy2cwpviM27xeBgYvF79JfKmg6UjJUiDuWFauNosGHPsTYDfMQivcpxNbZpqJWgMgmZBiaNdo1JF7SFzyu",
  "key1": "5UsgMQrwomn7PnTtC1RDLAmbWm7uBvaGoko89FTejhFL6szsQhZ3SVNy6vjzR5ScXcJqMnTH4mCPKiHwC76DUjV5",
  "key2": "2xkvXSBdYS1cXHUay9as1yX99XMfLUBQdkbBf54zK5wEfq2Dn19eo9RkCAqK6srvzFwqp87DfWYAdvw35Ra5Ctb1",
  "key3": "2KkNyTmN1wFy7HqCC1fQ36WQ3mrzhhF4m6rGfJhw5mD2UynsvmKm4qNozrvX1gCAHVC4y1bcSXddubDvoj2x5Bcp",
  "key4": "3qd2MVUy1hCm3qxCCjxv5wx5P6ptQMxqzwzDFQ55h63i1hdWLQNjDtL82DmEyWaV93F8dgWPiVZB1hxzV7VJ6A5e",
  "key5": "H87a2fvZNgm1syBAYvnwPozggZgAvKYUr5EyYKBN1jbQ8YA61NojiM4WhBKghNUkFjAPN4HPChNCrTsGpwJ6jKQ",
  "key6": "2VZmpw1MoLaW6pAmEGb5eZBMVirovcezuBqQFpRWuBc8MUrhLa9zPnjJonajLYQvBRuJCffyk6HZMYXUuXMqeLH4",
  "key7": "4EDPaJVmeEtiJkxE7TvSaJ5dCBmYQk62GhkkiLJFNLS6v68EEzdYLdicFi4h887g2yL88Jf29AxtBTYFQPzAExtK",
  "key8": "2Za6RV5HhBbjpSyfHK9n6TxCWTAMDHLwcDiFZFgE5uE8E4rXUxYJPjiw2N6qepMFeJeCrKSbtAGMxqF3gjJUFt4a",
  "key9": "46nh2KD5w8UCAts2FVSzhfsXCWUHAP8XwxTYVD5Cu6vtEuFufMauc81GqP3PuuzESjLv5TcaK6AEbusuqsmc29bY",
  "key10": "49ZFVZoKD34V6Hsgv5GrjXzwX8DSGX7qtwPbjSbBXTJ5EdE9Xj2yx3xKVvrMJ2LTZsJWKMgFUmYvbZkAsLLqA2AJ",
  "key11": "3szqsomBK9pFG4LxukDbaCMkSyk5wvsAdcNA99WC6KB1udQ4FhvBPZvabNQ47YmS88aV2a8kYYD32n7xVNmgs5hW",
  "key12": "5XGoZo2hVMQRvu35bnyFsk3oExgAgv7AmRTNcCajtdfLwTbCZ7Y7iPCud4sPyxHWtDo4bVuTqFwjvQb5REoTLxzd",
  "key13": "3JnRv9ZXGQPZgE5anEWwVWsn7AhWqaXQmnAmk1Wm41yhSqXBcSh5L2XiDPJfyWo8A52Y8CtGoyCae6Qc5yf7c6Sa",
  "key14": "399izknd6YD9KjmdB42k48gFbuzJ7YnvZ2Y2TB9qL9J5nqKHjmRpYxYUuRKKQbqvkwtV3VwhKdX2o6sqiegkvf9E",
  "key15": "5Y2C9NH3jQAhp8h7uTaFvwTrf2wCmkBtEPuFpdAikG4za2h116Pk5njW2oZcZ2adNqK4rJrng3spCVufX9gkmbDc",
  "key16": "2vTq9sArc7tYHJwKRWJrqFYitv6LKZAqnjftrzRxjZixanxCP7b3CbtLhUJsC42zvpdaaBE1B4viJTYAiTXSZvB",
  "key17": "373tGpuVU9HHPf8PyD2FRwYoJdq4bhjUvc8VEV2p7QEywU2BDUr1VvFxhycEikpf1LiknvV24wAm4vr6NvC3rDkV",
  "key18": "4VR1LdtRjZ83bLNZc26XXMee1EsBArQRf7hfFp5nm75CSUboWKGDuuaekp9gAHcvXdnL8mTgFihWQrKgKQ1r5JBE",
  "key19": "35qfHU15TEcY56wMYNX79ncU6ZdDVcLguRDr897G3aV6nxiAaQgMXDQH5dgjPY3TDZjGpYvAHKksmx5cCXEm7v1z",
  "key20": "4F7BkZZpTpfSVidbPCXGfLEXj8b7M94SH7x96c3nifGpzts7Y2KANzHC4u9YJSmsgGmFiL5DeWaGHsAsKzQ212CT",
  "key21": "4RKqUtVwMqNfveZ18UxZwtZeBn1EVo7kdWpHpVFDSHBB4Jo1Qb1YP6ky3RfDzu8fhumkAjBMJnqGv4TdrRvzyxtX",
  "key22": "589vY2AFvBKpVya8wnbUAgZ9ZiZRV151CxrQm8Sp5DhPRuFBohQNCdeTtMnmiFxyCqRT7QNHnDzUVYkrd4Emk9M9",
  "key23": "2NWPSyUVMJMntnNDx8671apLxFSgKfKQ4SCYLyUMbeoaRAbAoz56st9VC3ashn6r8rpjf9hEGpKd83fk52bRmvHM",
  "key24": "4CcsueRPfzPMTxfEXVjLnuQtBKTvqPmPw3PzeBQcBoCb1ad6s1cuvcrXr5GvS5dqmjLCCD2adMBvKBLJRziiFGUo",
  "key25": "5ULodzPo2ueoEqdkf8TVDXnT3gGWBArZLviwMVRmVFVXm14zshhVk4aBnkPGBtf196jfiJtDxq1mCHDN3cGQPchm",
  "key26": "4hH5z7CqdabzuQ6SdBsLkHLCdPo44KbLzpgiVs27uzdrMgyYGxXfNTnB7jU1MH8S9ygmg4KmZbzPYwdNYdN2Naux",
  "key27": "5jCesgzyZHeTQEyjcdZj3QWqi1H3dF5S3rbrMMU8UgdeGiHJF5cJQUgG1k6bwZLdPuFsqG21vaQkytoE4SSY3QPU",
  "key28": "F8W5Ff4VpcsGJ7rTxhfn5jiDTwBajfs5NGFx2FBJd7Leuq4pAfer2Fz2tTGLasWxBjS7ePdvbJqwSiptenVp7oJ",
  "key29": "u6D4u11dPMDNaPqxSqxLTBYKuu52s7hoJYBUiXw6aNF4xQRrtSZgpFs2BNsHnMpFFu1CjAk9Dre4nmK8ESiiYQC",
  "key30": "5sSnzA8JXcaHyMjdext2MqnZMtRRooHAUYbHbaCVchYeqbgYJHFAVR6Ykq1bU5jwnKCKcMnXphVnvBVPdDUk2G4A",
  "key31": "52pBgLNoFNvyqdZiurA6TDbtNYfmAihSsYyxX8EnoG7a51LUDQLj2YxFVqvd4kEoXast8UUkXkKj6jpCQmMdk717",
  "key32": "3QMcM1xCKUJJD8NFJE1qkpSMsM4Lu72GTTc9U6yvrvQ7L5QpbaukCSBLLKaDp7ZyKKJdV6ve9MYm2PjawCRHo4Dv",
  "key33": "5XSndFm18K2TpQFJq7phoTiiA379KbQj3CxwFURmYYpEvxnL2UXnbbSPAD5DoZf1ZeWPUJSiGY7TRjnvx8bTR5Sa",
  "key34": "3VYE8FjwjvFZqyNcqpq8xk8WTpWAQyE9GBqShkT3U1Yn9ama8YvcLTZV7veqYnSzPXwd9x4b6bQcGm3vsuyz5neX",
  "key35": "2wPzpkabtbdzWfmZ6dt96Z86vw5s4f7CbVYNLkgz8NLHoT16F6xaKrM9xvsS5YAEgh5UEiJ5yAVytCt9JXSSKAfi",
  "key36": "3bBQnGag5jGFUNmL9XkcdqYQRrbzCxCGbgtsRm4gdHQpEJ9pN6c8rUFYHrgZm96yeCsx9fPm5fpKSCK52HPoxLa7"
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
