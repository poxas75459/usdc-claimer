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
    "hhJj9ZNwx37dShGJpG1T8F87W2Y5znTuAkuSmALutsbfTpVnj1gNcBnzAJ9cpjgWhS4S6YKkdqLEd1QVBXrjeCd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QMrQtcP4LVoGLGCCrBpH2BdFqAr8PvRACsZ6U9xwR7gJ7WxP6WEYFDXTK28sbz8m7kwJCseG9Dz9kfjNS83afy7",
  "key1": "4bDE5YfRXdettkwQ9eYpZpnALyDDXJnQSP4XQSMNckytQEkH8oZivvcJyFwJLhRcxW6Eg8MD1dvM7aFpzvY4dFEP",
  "key2": "5TVY3kNUAdGVPP6LWH3P2gKtSN4gFXf5rgcy795UaGz2F1UtoyHrd6qxfToz9pX1QojT2eKBivy4BR3sUzy4BQmZ",
  "key3": "46bWGasScMNRVUSFBQ5nZEHeFJWE4dYn4Gj5PgDAuBZ6wggooEMmZLdNyCcQpewTrgGXBYXS42pktABmZTS9oQKB",
  "key4": "5yUCbsW76ESuaP66rKNXMRGkLWrzvnW2RyWSCF8XFWdQTr6jzdwboLUCGcGu8rQDDZLZzu8zPwekaSeSdHcXFsPX",
  "key5": "2HbGVkmMLgMw6FZ8wWXMdtC75A6cRxdwyWGPbJFUubhJeDRDXZ9SUwBUemHbz93T2p5HpUZGrdcEJb4bEosNpri6",
  "key6": "3cBZaPvyqnyHbmzjKBecNQNHyi9F7vuu16vFLUySWfytoz51WZJifZBFFSJVW5QqqRAyPACpNk16dy5fyqmPirZr",
  "key7": "3eYBUs9v3FssqCamQuySq5pwgQk4G3qVp3W1sgAwFu4HqEFYvBsgKuVsr36yBRqpULAyCmNyceoM5kTFHQnBDgah",
  "key8": "3ZrQ6XqN4H1PrF9hc9kkKgNnsv8HXeE6dfcFenKaDfKFSyDoccdPQpKNz4j4EnG1Lw6Z6Sc9Lx1KLCEUVZMCKkd6",
  "key9": "5jEfpxHuJhueUvShzCzzDteuqfJRhwKrJdL1ixv2KEMeWfY3JQi6KzFrwz7KzpwAT2jYmWGubg7HzFBg6be41So2",
  "key10": "2s9LrJe6mqz2CoEg4yws3sbTSvmrbpSxDMf8FPyVebB4YBSdVEw24d3uZDckChr56Bqt6hRp4W4QQUvNhpCGcwvi",
  "key11": "4TUbVs5bFKN6gqZQgxHMxVVfKPjUNSsYawWRS7fC1MutG4J7swosrb1h1QaMYP9wXXLnnXPUwF7hjR4FxYSFBtGA",
  "key12": "3v46PtoZ2owaKPEYsduMCf9WFRpmeLam6yS4bJ8cf6R7MqqWupTQSuHdVV9z8zf5cKoUXmPAVBzkB9F1rrHv7HYc",
  "key13": "3sePgW81rx5rQzPWZag12ya8QgKNApqC9emfE4XwbxMoyWNPG1zXxztcJWGRpzJeHRQmJTkmKyExGJuWncjX7BFN",
  "key14": "5CJ78d2L9vgE53ZUBNAY3LiJmdkikDU62N4njaRTg8eSBL5FU3RDxuLbkuVfnqF6mo4JgtYL8sc69SfuqCrBJBaA",
  "key15": "5c9gLzxvSXBsywfTURyMmq1FXkwBmDPBXAffCmhLCVrD91Ch65ETUNTiydcmZ2dq5E9oPLTLbFNaJjiegUfb2y6n",
  "key16": "5oXk55TTk5DZ5u7VEgfxrQHFVo752RQqF4PJHNXtRACijqj8WRAu53Y3aMBxuXc2qfmKbvsbKVHWSqAmbPkSy9rD",
  "key17": "2bN3PNkadCuWzPeY9yxozzHkJWsQ3RmMZYqfgWxBGYyPxBDyEQ6TdnwHqRoJQf84agzEr2cFLh92MdCQ3Rj3CtS4",
  "key18": "67PZqCWuXHfSoi18w6mWvUrCSPfJoAomm36DC3aRomuSEz2BT45hHFUvgdiuirW7nhEdfeG3WSxMKksKwWKBaUtG",
  "key19": "41cCmV4zFpBhtwBPCqKEfeVEQZ5CTLhkvrgjVNGWoUQrzw75oxo9wnuFg6LekpZzyTFH93zQdp138xAT4gTTxiZ8",
  "key20": "3faaw7RQkkdTQk3zzyjiLw7WUfyswUQULDvh2uYQkSND4e4ftZXkSNrj86ANWv1Wvp8L9nbRNjJm5yA3q3THDc1L",
  "key21": "9KLt11aQ2NmHZcuQTYyVFMUBSgveZJtJ4swvAmjMVh1zmwaRpJuy2njPjZGRJnzfY4eLWDWKSpqrm1GqCxpe7sX",
  "key22": "4KZSUw1rBWh1hBAhsZpNQkjwdUeVh1wYstzCvHb9Y315Kvzf2ZiYHCXzRzfYCqWvHmZzFVcCUshWS21udK6wTaqP",
  "key23": "5Wntin96n4oggnKRFcJpHFKb6BLJ3YQX6zDvBSAdFv82XChkAtiWyRFUNLcdosUMwUSJ21eafsnwYWUCw12Geg3s",
  "key24": "4gauQeVKhwiudoZKQewrGkE6y4yYTqhvf1F8vneZWV8YcLd8QSNf1MaMnVt8amvhGxpZ3E3yhgPTFFYCCZ1kptMh",
  "key25": "749CwrJcYS29YV9ykzofuJKLqXppHMXU9wCNHszDo4hp9CvhSo5mBDEgof7ZAshA92CMBzv8pSWAYE33Hmos5jR",
  "key26": "4bMVRngumXgCmWs21fv175miNBdVEcEFSiwXnkf9WRwXAZ4rmh8oP8Jxfjhk2hR9PwmHbxF1qT3D9xVyEKVAnnfm",
  "key27": "5QpChuNk5e3uvkVeQAvXKRj4HzsjAHpKp22wxtkyBZDBwnPSGh9khbbQfeCLPcoo3GpFKfeDCERf8haX3SmZpWYG",
  "key28": "5ygGitFDA8szNzhsB5WHcGSiLx5yjeNpz34uufYpR781oJfHPTekaREdCo8Dhkp9K9QPUkTJwJARTKnqotYf3tzg",
  "key29": "5R8ijSU491RgRE1RbKuzUAgUETzYFZFvSdB3MhoiYFkDHQHT4WVqBhHbFUF6Lj34iF96n2TK2UP6DycrfumUTKzb"
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
