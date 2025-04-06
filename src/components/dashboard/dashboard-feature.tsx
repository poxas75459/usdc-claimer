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
    "FdvMqKJLtxDP7p7F13dV2EeJ5er8zpEzXrH54p4mx1ckM1DtRpk8m5vJTsFvzvL62uMsAfSRYpLX8Fy4TkVjGhN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hNQBPvnuYr5YtLQ3Fp9ai6F6aP7YFHisZtKsvpoXvESJg4Bozs4Lnx7wcduhBcpmPtaWHfAmh77pXBc4u8tWrFw",
  "key1": "4tn6zS9aZ5uzkTDm6KX2TEgypXpjrQQhLHSMLQRAa7L6vWBkDZmVeSB7638NbQ7azx9zRfPHmCX8ia2tVRiVgRXP",
  "key2": "4Rei5FABrL8bdF39ZBeQqEAjKvMuJMWW12BNaKP5vBU78QBcd2JK1madkZ5LW1sS1Lb5x6mTpdVQrHdF2gYPh7Th",
  "key3": "2tD5jxhcNnCEwUkjiYzCyXWZtG5ytyJ5yApQGdSFcEMLV45Y36FGuZtVRicnpirBba3NSe2BA4EyjzJw8APkVa7J",
  "key4": "5VvvSEWKpsj2PZxzWqdqyhhzkWixGJ8PD5Ur47vTTNZqT6c5fw1ek2yQHX7VsaC8KDzQrQJkzePfNKP9jGtCdLiu",
  "key5": "3cXruEw2r8w7BLqKgKqUfCJWatPRuycfqU2XTPL4tT2NjXv5e6BXwaj5M3ci4vGH4dgTRRGQyK2sguqto9Q48Rt1",
  "key6": "44Qtf8AjfqG8j46Lek4hWhnfLWhM7wbdQWsge2vqERf5HPsmS6PSQ4Yank3quemivcXQvJQdZjhft3mFyQyKQtb7",
  "key7": "Ci7AyrxPb1MX9rsh3u62wu9SUKQzeU4zdoheoda9ufjvmv2eNxKfvcAMpti7FB6MtxwtV1MXPAeS2nXCMbYnQvf",
  "key8": "5p3hYrzEWQZdC3x6U8J36XwPo8Q3sgQAZa5F47w6G64ztmZ2X8Bprr2u8f8TSsGeUPYZJGkVZLjKy4uM85ou599W",
  "key9": "4dSFTETBUJ8nauN9nDb3oEaF7aqWYg8VmzC45wQUDbb3tMe34obmkTYqazZSSNCck6HhTxAU35eQdkb7yYPkAXyb",
  "key10": "2pJMbQV8fH5YuWkh2NSf9QvEUe9HsQxHVTq2baN35n98MLYC2gshFaeqiBsF4b82fkqJecXLbYCtc4aGEg8BK3K8",
  "key11": "Shf6wkgtEJcF2SiqCCZ4uvtg21wRoVDvRNZTAyG76XnsBRAU1j46uDxipVjD4RTkfiB3idQqcDJteJ8ScFhDuxC",
  "key12": "4BWUQebAiAa7pBjMA6bTNsdo67onAc64Nh81HTPdYhqWu5QXv1WLF9GMMr7ziaM9veZsd4cg5y6sfusCkSqgT4x4",
  "key13": "46cNazXdYf2mRNUU8iPjMzxw7J6iDZe8KfKCvvbt2Q9H7t6NknMsftXJEYJ3BTAJhPG6KrcWUp969csREknZ4e66",
  "key14": "4rFznMi4tADad3hhAcxTR1N5HhV42bBBJiTdi2EXeDEMxnUAb6QFqBD4MTELT7ZG6brgQDWx7bzvbDm4R2y57JVy",
  "key15": "5PEFt5wUYsqYqgUZxg4Vve4qxUYW8VQyFFW1J1Gq8LpHJ42wNfVYNZWeof7LW98QKnNfdsAFiBPwF8G1zvGKSuAJ",
  "key16": "p7qvPLA1UEP3CA8CDgtPTQ6r63j1fqxxGoave2qm8K99rxe3zL8n3ZHZ1L2eRcuFRwzSYWCqa898MNtorFfip4A",
  "key17": "rmDohHmG6wAsGPYhXbkSkRdEi59rsFfdcb9TeTTdw7fuYgduchPTrGpzaQNate6pzyc4uh4oXccd877mrEvxgZA",
  "key18": "2JpfUrxehEwh2fy9eZiZcujrYbWteRss3m18zL4JPajzdfkhi1wnhNK4B5DKpN2z2gM694g71aECthJidAnWct21",
  "key19": "3ag7HDKsSBTZd24Crfnfq11kK26vNqfuMhgHpnbAauv9h1AZyTKB9Uf25GFdZWfM1hyJoPBi7mGT3uArbTDiqKgb",
  "key20": "ihLnbtkZ4pzPWPSfubbJhPmuieMEye3k6y5pjPLdxuPRwAXsfzNHWkvVMneedMTzJzFmXmninX5VKZ4umPwADsx",
  "key21": "57dCaPhSFXCSf54pobPCaNiki86JRtY29Y8uqZeYJCT6JURBtHnYf3hpVuY1bHva52UTqNZLzY46sjgoFFYh9mAA",
  "key22": "2RmnTxtTDsdbZ4KPNhECYGDPZ2EuqZkdQ25wwEh7psdLJdTjro1QTxN1qAggyJ68ZuyGsG8XPSZ5MLQkdq6yyg6n",
  "key23": "2FPigkqy4cbVtiUUkJxP7zthfuQLorTRyzsKa4p7vtrtzqq1UW4wFJzUuZZ6xmy69S83AsygRjHaKwhWDDWmby8r",
  "key24": "Uq6uNDhgdSY7ziaQwCCmDEiL2ysALq3zmntTueKboGfoBfj5NKMWtR4b8meZKm3k8JyzGRneNB6AbX93hfHskc4",
  "key25": "4oEYnqUq5hZpZM4V3aELNLpFfibAo7tPL6vAWZKG7UndAAfeB4cYHN8zhcg3JTBsGwMTHFWRQBqU2REtw94myFsL",
  "key26": "2zfMaqEiomLyMRs2RKcxDKZNxPEjtoEaZxyxnRvDzn6RDFWRZZp2iTxiUeHTgNQrwMWS8u8hYwaigasrTFMUktHT",
  "key27": "21Rv2q1dF9xnL9H4kGTh1LiQS8S2tjW1FGagPTbrhQkiBaTBHujMfWdL4aafhYZoe9M3LiCsFhqCfEfHNFPHhXc3",
  "key28": "4sRQvK9TwD2HqUGhoY2mGjkBWgZ137JqrH8CCkktSSyxg2ESAfToaJeepbyruf6Zk4U2omwqtYUHuqYyFcmVZpqZ",
  "key29": "2mtokJKLDW5eBuPJdmPaaVufD2r2fpP6ZQatrN57GgZiNzDh9tePzdQpDyyc3EA3PMoUACuf6seK2VuYYnG2rQrs",
  "key30": "5CFtndcb5PhmpGRBZsGkmcVjKNP2WTVcHccpq8TqjQtaYRnpXRmM7YyvBBZjrhj57UVhw9kuTDZqYNo6MXrjJifm"
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
