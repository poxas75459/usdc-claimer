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
    "5sd6rkRqvBJdGUY2adhUiHUaJQ4N2b6rYmguZ8SUqF9X8RdVf99cqkTunqxKckEA2gU6JNAy9HdZrcwoF7n1tgLW"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "4RLfiurPNnvPt7HnG3fE9RwHtgXGazdrzMesZkByPZn5vy5iuZFLTrAoX1tCpt26LWoicJ3X9xBfiH1iYkoao38Q",
  "decoyKey1": "LKGWCoN5grULVvEjCdHHPe5ct3cR7w2tL5tjCyeLsiz5wjkqJNkf7BkDpXCPNtyGuwfNtfMhPjTSCPyGoJzRi3K",
  "decoyKey2": "5XSQ3zFVMA8UFN8JY2kFL3bzdMrXPXPvhLpH4mYCR8FdedxPkZ462eKhPttWQSTmRZRvne7g27HofXuVivMEQppY",
  "decoyKey3": "3eE733F2ZmWqyrLcP5RANJwSsCB4CDMuFa9msyvRhuhUo6P5jaW3W5DN3CNYFdKxcCduGJ9CiQtY9erN6N4CLRit",
  "decoyKey4": "2KawCHvWSqMmuAYQqVwsRFecM5QeFo7ktyDkdPGBxMUpeAMnPjBRripaZL7cxEeiJwEchDRYFDbmmy7DAFw5zUxi",
  "decoyKey5": "nQkjbEYgtv6iCE1Z7yQp5Qui4rGdHyPqeHzaH9LjPEQnAVsfJacmiNJeS7PCkQEHrVD62G6Bfx4aSwfxfbtYvww",
  "decoyKey6": "5Pep9eWXP8Tqyp9mBQiJooixEvmMrdFAdK7ukGzXde4wcjxs3rLtvLSQqnMApUEm29e1Qq89DWm4Bt7fAno9hHX2",
  "decoyKey7": "JB4Yet5rLChpeyMghPmeWKi54LkTDbSGu93fX9dSpBp9gFJzmHETKXNpgBZrB8nfvUDhGEpsEhvK6do85paTM94",
  "decoyKey8": "2BYyZAGSbSrFAa5FzMS4J9aCBvFCYTCHUXfybbcF1KTqZ9Tv9rCB1kTXHjzxtKLxxNe5gBYzHQNXXoSDRrA5REbs",
  "decoyKey9": "3Yo6FRsNR2E4uetcCiNdvZEJjQQobR2g6R8CZgEr4xSLc2WCMg5xHgsrPGUoEQziQjfbtNHyW53cVenBV3m4E42c",
  "decoyKey10": "5yz7EEFkLvq1Yi1Qk8JNTn3LNvcvNvxBGHAZuL6TKZVZ5gyottsqRpuBSm8QbWyLKJUDB6qmPC9xd4bd2G7h7EA9",
  "decoyKey11": "3JQxd8NStBFZQ2perRkareSYVh8xA8qDgWPV6LbLfGrE8GKF46WTbTFYdW7aUnft1VRvk8MAZPqKeyv2chq3Q6hS",
  "decoyKey12": "2B273higDC9a6kjUZJjff7EdJgMcfMZF2WmsqxtwpAQPKaTo2bC48cZHd7AHbscEM7YYKTkgKJyp86m9V3dRf9bm",
  "decoyKey13": "3G1cwgJL5gzx4UcRNeNoZttkJGNkHEYXon3Gm9SJyg12jxAQdxr9bGDp3hvAwbQXiwyMkX1JMiy6HRTEYoHLAT2J",
  "decoyKey14": "2LaCrdVC1uPjGXkUx2LMCNxdTZ592rD1UE1HAcS3AKVMuGLj2XCg6qN8APKAWY6t3jAUpZiyxsWYsobCV6aHEFZm",
  "decoyKey15": "2ZvS2pcQbQS43skJTMzh2qwmeKdYEvAFkykLtA2sBQ7vJyvLrnDpf1jvVHThdTg3cAS942fxwa9L8VFGRHJyT5LF",
  "decoyKey16": "5ub27PBiiN9xVjwhBFz22wH4sDdp9mBnCarf7M3zL85iGAmGnRnVdcMyjHgWSgzotmAWNWkHpF8dJwn6EydqjhxX",
  "decoyKey17": "3399x7DHW6Gz5exVZCAP3jwwv4kNjHZ3WmUJq2R5sWqMwx7AK3WV5cms7Phg3GWrzFCNFMFSnNbaDdjyi6xdmHrm",
  "decoyKey18": "3u6Lyj2mAytZsWCuJ7F4hRhnbPZdLaoG8eHuXPuShGGXh5LdgKnD3EBgkQnDJwWpuX19HAzyJbFMhd2X7LDr3p2W",
  "decoyKey19": "5tKyeNBDegeAf6XfE9UNuphwufXHM5fFk9pd3LKKiJoM3MVRGvhb7Qcu72BmRYrzYvsrxAwrEvPMxmSrgzeM3Uo8",
  "decoyKey20": "5Esmisr9hiXw3J35F8oR5cM73NUs75CPbFSqAutsHUZxwhd4UYHR6jntRFCt1FWVTVVvAWLJHJMcMtbY3Z4rFQFb",
  "decoyKey21": "3sunUBWntE8WQW1cubCroruSBBYMk6fTEMV5pqfQYvUNAWmeVp5mrcXwqLzWReDSLNBz9dVBDmnQkVwZTzKRaXsE",
  "decoyKey22": "5axPaeRShtgAQTRJJf9SztX2NWm7TWCbVFm2B3SmPTTgtJdvTG14ufsYzcHUwAuFJuZcM57rTdgUFFDjTNbAMHZ6",
  "decoyKey23": "3j9nBJLJo1K3pQ7YoxCn48u9EK7KFXZygtCgtn2CPEJGYGjraoH2GkzDwNu5TKuz9fgzrkBTWEwRRFCCtdBs2Hym",
  "decoyKey24": "2gJaWQwbcZn2Qcd7BpqnW9uBgXDCvS5RP4LViU9v5Z8mrnWFFGZeFoZXWuReJm6Az2dKRyxd3RBKenYjqz4fgzaz",
  "decoyKey25": "ys7TbG72uxemSxVu4Na6DDykFkzX2cnH7XTdjyqiK4baAzFJRK6xWLEqiocvPk33ZhFxRrBEYBX2wimyhiGJcfi",
  "decoyKey26": "xSqi5jKMZuaYZ33uaYxBAy3k5uxF6Fg1xZNTy3rVe3HKkTVeKqVJGZpGgCQo6hxPueoKgGTv7d4WiqBf2auTmxi"
};
// DECOY_KEYS_END
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