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
    "s2ZuSMfxKECQydfQEoXWS9774S1bQwh5iqwmHnUFPythmFaceZQMnn62K3XqGvw5FWjKSGTSWknyBQf4SWkchdW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qzL3Kz4KdMDVnqW8UXaLYJmJerAMNowEzFmYcH3mNdB5PBmv7fQ1sc2xZBS86y7Fq1Mm8PQdgAfuAg25JcF6bm5",
  "key1": "p49AXFun4a4VP6A1Axk2PDVDA6cURAxsEzUcUyNXfpjjGkBf1B6kny5qoQXoZQYTo6CKGLAKmX79iFq13GWHppa",
  "key2": "CwSFU225RhPePcvaDYDXq9peDw5Q7tzTLNbyt4XwA9vvU3GWwKuzRgjhAMYo6P13p5t7rrmcCxL8k9WqB2fv3CT",
  "key3": "5AeZejhFJjySh2Tw7E1AerNPPp4c7xy6iU4R69oudW4jcwTVaNvb6hxS7GwTsLBvKoKWsBdhV7ZV3YErkcHe4DAj",
  "key4": "2LXdHVnM1xUtA8S1g2SPCsePKC94rq1oHVax8fSd9B1v8gWykM5VrdAF6gdMK93X3NaL7EiyaaGYUjVbvuwG8nmP",
  "key5": "4WAvNu3xsCsAkQoDwresJpqcNfygE1e6gNHsScnq913jgzvMZA8mRaJfbAHvZG1ic1HQAHSAghNLvCctLGmBUtMQ",
  "key6": "5XQNXh3xT2x9o8Xu7HCd9eesTTqFw7LZg7QmwTSKpeYrr6M9KoJqBajh3GuyNjPbS8jUFx9fP5Tvbq6tER75im5v",
  "key7": "3QGfZJboiK3ugdcbwyXDSWsxtD4eYWVDSZK42CzWk5M1vY9ytsankdgXQ7MwgvyLMopGizzxCXTxbjPQcZWL7KNz",
  "key8": "4Kh2CdXnjPSaAaYna7oPEwu34cjF3naUuD1hAoHE4aou7nNuDJ1uQN3KYhw9bHYYz2Z4pYQYibM91F6ysGyuaT31",
  "key9": "3ayPQWeMeN1cRx31q7dph15UBBq86JAj8ZtmbCKLmV8k7XCh2wAgszVQ5oC2WppTaDMNunTpQUVWvpJPVxVgNtHc",
  "key10": "2nL72N9v1mztXTcTp21mX7KmiJpp6nUj7rU1S2zBcULoVq4ecuqaMUom6JnBLsqqqDBtvAVS2M6K5VAdNCZm5hRB",
  "key11": "4ycYTWS7JoktrYr2pzitTPqRKQS3feGv866YYMEM1783BDNdg3wTKeBhQBcm1QmpHtyztZmam54cCfGenF7pGBYT",
  "key12": "5L3hPt2BgZ4Fmx2tfNjA9NDDtcFjEsNDu3uUPRjJoA7ziL77vYbAm25gwbJM8txyBhz3NQN8gBxRPn6FtKKvNHQ5",
  "key13": "4AqkPuHvz2xet5E9itzK9rYE19EjFi1FBrE66zi8RvAT6HUbY3uZjorVxZ51StAeYRPrytiZ2F4DDTg2ABFVMEdc",
  "key14": "4kjso2gfJ1JPG4mHRYhX64C8eNef6gFAaCTjqGEc2BFQpeLaRWySntqA3gU5YyabXy9fjYSKtMzpwMVehDr18sTA",
  "key15": "16c4RivSaZAf84SGWmhf8L7dVgMtqauHneiSwCZekwVqQ6QUh1Ndu1bnSrt82bZPsqKhfWvLJSW2kwcNoLNRrng",
  "key16": "4XMtsqqF813JKUZ48nUVunetQHKya2Dcm8FpyamWaBCNjRqbAeAN3k4Sapa3fytCCDcadfsa9jyqydZ3D1ZMg2Gw",
  "key17": "UKFKn8dN11VVewfai1tmjTroadcXJod9KurJfcrnbQHkT1JtUiCY893kuRWX3pfHPK2jVfnkUSyrhF6dQyBKzXo",
  "key18": "5FfZ5MQZuzVyFS3hoLhuY1PSrvXxwYkcqYeFF6Gp2xjrjmeLpWrwqMW1WRYmMWMxSW2oEnxb1GPY8LiPKfLxubd1",
  "key19": "5tYafAo8DiGPbXvWpw5v8qXBnKAZ2ue8S6sMxsDXWGBMsjNu8d7KhDB2n6dabWauUegki9DCnAmtmEUFWNmg61M3",
  "key20": "5qALLzaQy7BzQCAbVxeGVTSHGQZtaypc3ygVaVDzXm2BgRDkszZhFzcAQvcVDzdcTiPw4pdkYLB7eXn3d4bPYiKL",
  "key21": "47Y3G6xZst23iNm9Rf4kkPz3susSbrDm62DRKrZ5Zco9ySgRdNg24mZR5jUm73SdTKgrWkB2h6CUZj6xgrD8QNgi",
  "key22": "9jGMSYb8FndnCMf32fJpWYLDGFt8i3m89TisFRD7o5CQ3HvxF6DJPkCR9VxXpdjWmYY7N4AD5bNDjYHCWE6tkoL",
  "key23": "3QBLmG9NYU7Phd6Y3abYt9qn3b5SHy8fLG3nHSw29Rfj52qjXfeVvE6jsUXTeTr2UHbMoEj69xRr5zgEXicTbcfu",
  "key24": "9BT2GKUiqZ7BHF7R9MR4PxGcTq8Jvfsfmx1VRcfui9BpNgA2ew9pcXni9kjd63YGXAMTt5fRJroCcWTMtadiM8L",
  "key25": "W7Rix5fJh6PbbsGgZvsSx45hpmF3oMMnHf33X6D6fXwqipYEoUkiFe44oFyUwFvR4WvRvSemqFzW7BPrBnp5eWt",
  "key26": "5VGLu7pgXLAGThqW119Gi6nLR8AUuHGzzJV9ucScts6afAWwu1iqZXHjmaeEKbkYQxT1khpCbr799jrYTwxduzQj"
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
