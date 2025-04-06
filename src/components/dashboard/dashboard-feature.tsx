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
    "2KWdKZFrdAiVvPGaVzF8MX29PerEfmrnBhi9FbgnArn3usu33gW91gqeBWWyb3sg7Gvwq292qpfqodyEHYMmPTem"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p3Z3gXLD3Fs4YtkQJcTCrteWvy8T5TWAwwWBMRrAchezJ6WsEsQBaDkDvQgkHS3FjJznMmN5T57ungUYafiA7eD",
  "key1": "4D3XpckNjMHnRQqshUCkjD3kJs6xQy2NKEAgpZDHRKiQ3qGeXVWYZShwkCgPdxzm4CobQehjJFhvKpwmorvtXKVP",
  "key2": "4ASkbsRGz3K7G1jnNkPkhYWszbEJVpbmUA5HwhrEw8C1dhzFvCRpsvkaQRzJwKhS5zRJpHPGfAzhfpcTHcav7KVM",
  "key3": "128tpoG6LPZZpNtBXXBExY5wLF2rA1N4SMpvJANvTS6trQtBpUbmBJR5Ns1f1Tm7Jti7Go1tswDq8XZA53j2JSjX",
  "key4": "3UF3JVHerJxH24Gdm6k82WQDtFDdaZqMDs9bq3BKmBRizE2wAzongFuaYK1ZXMFuJfiKabhFQTwZghzhoKdcgrdg",
  "key5": "5uKpRCRUs6RzjFQJkjnA2vSf9ryNobL46wWq9vJ4EpjcPoasJuPH1QcvxAQeyqy9eHGKUNwztve1bYTojCcAwXi",
  "key6": "3aRruk25tbFq6AH4Pa3pCrSeBQLvYZvCtQ1AKYRdQGyU5jDLimWAn15GpGxMCzvB8DVmE8dzBFMWNrvHPVKVCgEP",
  "key7": "4yU3aAcpUxCWybiNWso44rFzcFSGbg3nJGX29v7ZFpF3Hs4YPxVhhyomHwina9GGGpwDFWwbEPafvSaaZKfGEAn4",
  "key8": "2H5NAkLg13e4FoSZ9GVKmQVboz7bcG9eYA6VeJtaE5po5qiV66dBUYp29VRBTsYedr5gfB93iEFKodUnFTCW8pfx",
  "key9": "2jS8JrZ8AP3NmxL8a8pjXBAMBia73C8CQR7HxyGo8MEhgDWfofCvJh3r2XezNsbfD7DhaFqK8xdXQqCASh6ztkVC",
  "key10": "2t7mqzY4GqZTLHvNkiECM73LC32KCeykv2geviPsGFJqXGdebymQuEHk9k2y1HgSigHg1wrHirENYZbjFJWVHEhB",
  "key11": "5YQVDUk8fuanTYZjNeS16Yg7ryFot78eHBLi6qa9x48Ydf8mRDusJy4vT4z4hhSHTJEDoARkD6fUSZy5koNMiiQH",
  "key12": "2E3FfSLCfFfMqzruw1Bkc4zfuQWXehwGsp8W9GvZWjMh2BseMTEqvujAsjE6zkmqP6vMbgtdNoW1xFYsQWcxyRR4",
  "key13": "4siY4CUrXVMvhNCtUkNnk4xGmzUUZke8fS1VZXFzfsiYAecJXREM6WV4t3CwSuuRzrV9PfFdhJrnSn3MzSduBdjC",
  "key14": "3gaEFPyCjFAERr5VHNn4KnEPsjSqYUThtSMYFfr5vynzouyVbYk3ckQeAko7juFS5MNwr2oWdJmvQDEFa54gPzmt",
  "key15": "44yvwcXgH5Mz3FPSzCELRdjsjcERDZzWHULwiqB9HxKFgyojNT8PmRDtS3pytfdytv1EhQVZkAooCFL6pG3xKJhP",
  "key16": "5th8uyvZ6hS2RCukSwyeT4zfovGTx6QRzxdw6QPrevvzEDVpDFcU5MCfy3kpGWDB6GxBdbRpbFZswYH1avPv3uSY",
  "key17": "3rurYiEoo4A8nUjKHp4nDHPZdhMex2EEPJW5B4xGLrPAiwcz1cuxFcr3QFWH4covQmSZ9EtmDrfSf1JACY9ipRjp",
  "key18": "62xPGme8Tkz3FYFmtwue8pZZ1ZMSMStsdCwKb8ku3Q3MxWT35dtndDpyWhsW2HjKh3HA4J6Eo41cupMXx2Bv98xN",
  "key19": "r4aTHS9zo7UbcxMvnLddjTFVTJHmxJ7mKVQ31zzdsUUfMHKPCKPua8kNbY5ixsk7MnGNEjkYLZaeePcX9zuJ6UF",
  "key20": "5v1LABcgkKCzZnuQk1ikcVcFArXDf8FvB1F5BD7QUibWrfMccw8nPXDJPPyVnYNn8ZzhRqC7gsHhd4nEQEF4Z8fw",
  "key21": "onRuu249591gv9f2MDNb365YTVAw1x3V8r9odozzLRm4QwE2ipQTtLXqLvBJRXDgwvUr2YKuVJetsYJcmUqp74t",
  "key22": "3TEVMfo4SuQ5hcWP1f18oYZvf4ECscMVhTBoV4tfyd88FYJH8WcMgkRJN6TWFXw7gbDobT1XZW2ufLNN34odVxPi",
  "key23": "9np39csRUPmoavFkiHGY4WPzroBf7k2dq7CmDpvhhBMyL13p8vwaKy5ynLxTuZdABV9pMAAcN1zCw4Y5fW4EwaJ",
  "key24": "4CcTWUZ1uFKsH5TR4h4rn3W72MVZH8s3v41jfn38zfvgHvdTBeYUWim8WbYhDGmibVg2pTHdQFu6xGQcRDXLdED6",
  "key25": "3snRFALFz21baQe6nDG8SBPhZoEpNwFGGFE9CW5q1UVfQ7PPhLfx7UJpCNfoVjRTiRaHeHVyJ2iVNiADSLvT9BJZ",
  "key26": "5zQZnLGxVjuPucxjX6NTozDxCLp7LffQoKeZXTJFh2ogbhD7DgreoyAC8dPcqUJrXZK8jrLTBMyjdqNn9quKcar",
  "key27": "5uxqRqtG2HU4spp9iR3rVS2Y71dv2Hdfm21WoQK1qyWyWZMfcM6XSx85gbrhg13aLjwGEeHDYJtGRqbWHpoq64td",
  "key28": "2pVR5uxg8eBcjdgP8nMtJ65SzrX3xN8mq7u5LXwGvu5Z2WXb1j7D1hiEQ9EvBTw9ttQsR2AsyasjYFDZ5cWxA39d"
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
