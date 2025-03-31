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
    "5veDewJjeNPU2LhWoRGVfzc7DufypAmDdVRTk3Uq8ZYmdEDEax8rUJvCSvP8FSG7ZSpy8epRy2fR3QV8FmZeZ6Ai"

// DECOY_KEYS_START
// These keys are intentionally exposed as decoys
const decoyKeys = {
  "decoyKey0": "495CMz63aKCWQNgXKdzsuSX88wq2Whcn62ix8V1a2GZgjkgXu5FCfdFcxxU8k4vUS1QQr7NRvmRaBRb8NeVkhEGZ",
  "decoyKey1": "3EynPGVWs63k1isdPvcESYovV2sRXfbRLS6BKV9R94BpoiMvqRHc59C3SBjrZRrvZNbteHmPHPUyjDyxRyQLNSvw",
  "decoyKey2": "Qbgwsry5fv9bwbR69PaS7ppcKz9JUpN26iSqJJ7uRbphJCKEK7fo1JzHfYLCqfoLe1krvFduToG87BYfErymvRk",
  "decoyKey3": "5CqrqUtxDAYz9fsNHKXejfugg2JXhymxxFoFrRGPXShPky2tSvLRUdf7ntMUXGmrn4my4NUET94RvYy4RWJfftJM",
  "decoyKey4": "4rSK142ZiCLVjQKK9N5iMUC1c8xg9x4RUoaq5M5i4p8MGAxUfxV9VcHA5iaQ651r9bwtaYaqb9WkoSeYmp2KFrK",
  "decoyKey5": "2QK4pJmVwSMGj2t5WnkFhDrymUyt1uDqtMehPwVVXGZQsXk9CSWk2N3zFAU67u86da3kxb2ncoxQFzozTYThTZCQ",
  "decoyKey6": "36tLjfDaAcVXvAxNBSi61xZBVe9S3mgstmTe8iBviE4JGc1sCkyWvtH8ekjwWCrFLFdq1U9nqCButvSSHi66Nnou",
  "decoyKey7": "4ddGLoxVimXY4JF7WYCtf7YhHvLAJR1JD4uDaGuuELA9TzRo8pJMYkneeq3ApCvWSKGLSQrAi9kXiQY6kE3GBBvD",
  "decoyKey8": "FQfnFc7KGcSna8vG1RSmuDyT8vAEqg5JJ4s1sV6rzdUWbxWwU5wKowVScFZE8vE8cRXJkRRictYfBm4PLMCVmWw",
  "decoyKey9": "4nmysmdn13VrwVLaqM8H5uXsAL3nnggVor3oPeSEyhwhpFG1v7sXspgPqdhrPBZtr4wXeCwjjQU9hU1B4H5dP4ZJ",
  "decoyKey10": "4HpSxH1ufwEHHkutnfHjYKAdGFDLh6nxthQWzxBMjToXJoLgo3fNUNdcUmdkxahorCvTgukqu3fQPqCuq7xquZzs",
  "decoyKey11": "5Q7LS7zpCwdfV1c3Tsi6BmWpZmgRNixskk6TTAU6bVAUK1cJrkBEUHyuGKVmh7Y1deW32iGxaGkHDEYVSCmXNJaz",
  "decoyKey12": "QWXFCsQFtr6StCEztLM3FnU9ou2yo75RCrHWypNKUautqBhMiNZkZafEopA6Fq6Z4cFPByonAe8rqJtakrfQqaa",
  "decoyKey13": "kFgpoCzRiScWmewG342HzAHdQM5GCXEKXyf3tJ4vBa5MnAebwqEhHsLYtViicpykEQmoAtvGD2sv1QeA4Ge8ydo",
  "decoyKey14": "2zeatgcQJeHWLYFvyDbw5P3QNdfcqZdwrQ5r59MPVUzra2dWyjjkLcckY5Am4CbRGcNMJK4b3UPFBe4KcrumgY18",
  "decoyKey15": "6sAMRrVwMmzjzuRctxd1pBwSbawoHJ2BTnrXLmKAhogvDJ3z6kuGPQP2vEzgvvsrgFuAYn66AomfbYs8HkcWuEB",
  "decoyKey16": "2e5cJTpRBqpbhS9dXzf7qct7RNyXcmmeX9XsiQGYaimMmx5zu2X2GDkak1VXQowxkU5CtiGJLW49fgzZA5bc3Q2S",
  "decoyKey17": "3wUqeZsoC9phZWm2JKQq9tnEjgZrNqyz7DwR1FSFF2KcA95q9uTz6wnbJ3L12wBB7ewk2LsvaAfS8BWg1TvacVfG",
  "decoyKey18": "5QPDPeLiA3W8He3tJs9w7x12hSRpctrLW4RFYFQ1TwyyL8hnC2pUTiKZPuRauUqbCMLB2BzsHuWCBHDzSrm5y2Fj",
  "decoyKey19": "5xhs9MRWcqjisZxJ7mTZdCtcMPHXHCFyigsS19T1i9tifWnDUMxbPFy4Majtmif64nLQBbaVdNdEu3pF69SVACgN",
  "decoyKey20": "5TkcgKdv3csuZ3UUwhH6VFLCDKCz3EQGJhDmsxcKXMGzDLmhKahPw5VpdcHUei1Ghr6duVwqyzSxCgY8j1p5GjQY",
  "decoyKey21": "5b26K7g4hzb65Ft8w1hWWfUVsdqh7MnVWW6xxqS6cgV9b7mKbpgd6yXpPSu7o7QUpGTNF1WRKQctY28LkZvAibqY",
  "decoyKey22": "K7wPzGRoAJ1Xdd8gNUqWDGeEkymK3KLSJ7cMPGcbXwEfQbyCAsJwSxWNi2iweeZWXWarjDwgEfP8nFM2nUNJoj6",
  "decoyKey23": "4FuQ4ArqX6aSKEddRpLYut5BXjZCVJnobc9u9jnkSADWMoKjDJym85FbYTBnrMtputnKFyqWTjmchWJXAeUaZXSv",
  "decoyKey24": "2KA3AVUSyscWrgC1mMCk3gR4QnANnaCCgHTCTNmTyuprwrYEMbvcfSk1edfBSabB6si1Na1weEqhJ4u2sHCvkjQm",
  "decoyKey25": "4Scz5P2Mv36Hrd5spo9Lf72Gs3fyzLsLhgvmiAVeufYaFzC3cyRj94bXkBcGrsgSd8jR4QnAvhwmQ7PnbS1dcXyT",
  "decoyKey26": "2WRvLKxFTmBTEmaUT3owBCXaU265XE1PoVZ22dD3V8y9TuMb9tG1EQpe2FJrRZ73XHhirWhW7Gd9DUTwmceEf6uA",
  "decoyKey27": "2VWyzsAJrjdhpa2HY5BCWxEiSJQfvLncrL1T73hpnaEHC7oAYZtaGsigpuvQECWoxtpwh1mWq5EwoGCr1wcDTZXr",
  "decoyKey28": "356ZyywjAgKsgXgntHi6wVFCkpbb2Yx4CKQDPTUw3gP6BnBDzem2bQuMdTqVWpHKEwNMdJnKFKSbgbxnR54AmK6E",
  "decoyKey29": "2Lqca4dDehSoP691EkazfPkoDNFXoyaNYq4rDzmGh4dB33meeme25U4mL53UpgxDiQR4Y9vqLJh7QUkhAqmH2JGG",
  "decoyKey30": "AZ1YfyorSBTfJTksjWPZ4ALy9E9XjxM4ZQae5Qz4h9dJaKny6en4u2WZJCVhse93y8YL4bY4jepRc4xQtMv7c44",
  "decoyKey31": "6236MhwwNLMEUfyXSdASFqqqd6mY9xZFK1DoK75SLmwzTgXFBRFEnnm4CWLAz6NHzgvtxTt68GnNc6deLrAuBWKd",
  "decoyKey32": "2vmt6RbREbThKt7uDFfepv4V9NTM2KBVSGrQSb6DLHJY3J1BBKf8PDLZFRd5Uk23Qk1jJpnH7mJtLWgUoxmqkc8N",
  "decoyKey33": "uAuR8P9wPqehhUQRjSZ8n87uSZRKeHNi2w8UN9yoijgXtY1L7s6pmqk1X3YtVi2vXBQ7MRBJ2RF6tceX3mvEqMw",
  "decoyKey34": "5sU2pwoUZcnZxHRXrYQUvTsxfSNAGHVAmAFZ9a9nJ7pNXpYqZZ16twx8JC6FvfVizcDTjNPyfB9nTjPs1chjr8Vs",
  "decoyKey35": "4QiGLFQmGmnVNVDp2phmRHjpa3rSLqK1N1Ak9SnxqUNSdaPGUXMGASZ8nDWCQmuDcqhiGQHyn1ScKhM4e6YzFuKp"
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