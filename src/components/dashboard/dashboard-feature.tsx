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
    "4TBYPLMdw3b2QSQYYozs8a9fSB4NBVKAHTdPY9eA5xxxkmjRmiFtUzm94sM8nHP8VnqA9yvDBCYDL5qqXVpNowJc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LpJZJ3m75xPKKW6ktbAcyFwTHp31ZqQ1QWZNNC2WrUDVbCTsgMQgvdfEBo1rTkXbLp8EzBNeuao1YKmyRHe7gVD",
  "key1": "5gFCeYQeyMPPpphXzbZFuTwK5hZ5vFGckuxUPN5VcJ2bya7YWmQotmsaLLPeQC8eaWSQhDMautXdEod4S7adya1o",
  "key2": "37hzpAYPCSx1ZofPNu6cQgrnyrTxyR6VJtyvAnmis8XGBWB5qrSfRYxfGqtwpAQRsJzGEubHMqctpSnoYG3HVR4Q",
  "key3": "4LX84YF5Pc17M8gnr8bNxFdjQqTMHDNbREzi9afmo1JS1FBa8aChKhR6PnoLLvwbSdxUDWtpPZHfeU1yxW8f4pFr",
  "key4": "2RXNgesavFmXWGtat9NdRnjqqCKqTriARfyBAygGSBPEM9pm4Q7pHU1iAJFwAM9e5oQwceZnqn1ZNqu1oQ7cG9zx",
  "key5": "4dEFsmdBrTLHGu4v1wMrmUToX4vJdn1ShGX32JPmWukF7rUiTH3qP9fw4db9PKVcPsNibrvUph3EoAr533oGiisP",
  "key6": "ma2CCWJPC8vAgGDEikVygQsw3oir1scfG2E8WbMTHRWqCkVvH7U5JZeUxmC7euH418WGFW753rbmqasWVZSa6Re",
  "key7": "5tYfdLPB5Az75d7C3jXS9Uj4LePopEd91CpZVeC6hv7zXQBYbAmN3FYhhLNKiJGMHLnWSyi1ZXpVj9882gkdUEhf",
  "key8": "4FERQigxSkq1WtGBopEsReU9MmEvfCVAeCHKp3hCy23QHiUZdbKZYZYaRQpajEdL2HF2Lf3DWjvhjyECJ8UCjVNZ",
  "key9": "5kc9fcafCrBtU4H7V5WYQvqfpuMHPDbyfJjSHHJwtkAsbEkEudibrb8cpP9ETGjeNvTQQcwoJ9HAfSDco2GYVfMz",
  "key10": "4fXN4z1j4CjaXXyMdZkAQ1Cx6vBywRRQN6U3D9JcL3EQGKDy8BZM1TXd65fPkS2jvrfGY1j2wRFRE4dPkqsXWCnh",
  "key11": "5ne1UBbTb9Rx1XjBMg3mbxyvxuwg4q2HhoNnEQX9fUK2SxzUUJcVTt9JqESRo9Y63oGjZkaxRuyUsEpSKh1nVQu8",
  "key12": "3FkEi6biNPYPM25n4atxT92qVNLs9D4XKutbeYoSdrCpWixPTq57kBebeYjayT3fenMps6u4o6bELQXr2j2Tq3yb",
  "key13": "2F8dJFvtRT865m6FgZNgn5isc4d3LGimrUpoV6CZNQS9Tu1omTSdTfh5ZV64mBadVVRRbKFzQkXUdF2byksb1v8r",
  "key14": "5o4AVNk5ftCuLkxVAHULPmnQ5G52yrMFrpbzxGeJFM6zzJmyQP9M97thK2xhpaGD4PSnD9ager1Tdy53FCsNSr5p",
  "key15": "4Vz16RFJepGUJC6wA6myC7tbwSDo3ufmyzsNdX5mEXKrWHWUNPwecxLgK65z7L4EomTubYwvEYf1EBDVyBtZCH2q",
  "key16": "5EBudN5RhynBYEnffQTJZgqkvfeeDPxxL7LdEvoEqTJrF1yxDtwXHxqYX7RkUZhpwgd7EDLrA4vjDzfh3D6MBZgZ",
  "key17": "5JvEakaTZ3Hxvqc6ckqPSDFven8mFrKcjWSrbwFqoZ7y4W4LpfMBy1SNt3omwPES5h6mFuCC9pRiKHYKb8YWhP4X",
  "key18": "5D2gQEGf1ysb3cJRPkBamhKGhiLgeDzLtLbXRRriyk6Hu7LCw2AUFdmezWFmyGjapxVDCvr6hZNBom6nkxn2UHf6",
  "key19": "3wZUekeEoUyztE81qbjJNPLCFydD9z6QrvGL6P5qCwWZukDAeXcMWW4akcQh5M7QMYdCcdD6NKeHCf1dmYiNQ7d2",
  "key20": "Sv44ckpf2Qdx3KqFM5QMrzdmNQaGHF8rbbsrexGpqR9nyFBt6MPdCxPXMyLcMBjPPcEYbt6hVQw8Yn2GjdQu1mN",
  "key21": "4yHdE8JVcsCWnaBycpKW755cNyHvB6twpUrEe3vT3kPspdz64LVYkyC7VfgJ7ubdswv1xUEhs3dijubGvGWrGjti",
  "key22": "jDMAkKsVwSP5UQRv2VeFonomqVYR8qUsx2D7kcUp9rTBuzpc82kFR1WVW691onDSZyQcbSM6xXkFSKv1Kbro51T",
  "key23": "3RfA1Mt3XutyUzs1ZPdzomU71j2z1fDLZBg7eGeEzW5qWNFdELVoBvxqSS2WQ48jM522cF7Uf5zTziAr5XyrR8Y",
  "key24": "2ctJEqja6LyVv65Jgbfk9Z3CHpvKqwXq9aSudRnj9NoMgEnrJxbQdYu5ztaLusYPUPRWTYrD1kNFFRbSg9yKuucY",
  "key25": "39fVLoV98u9jG6Q2E3XrvJetPKGPEt4JPG2c6op6d4DSQBXod5FZoURQHWTm8Ur94wssqRSUPhuotWRRiHTuG1R1",
  "key26": "G7eqnDJFrdygzjY2aYXBobH56DG63aq19XkrKH3BWHF7DcXuJK8zRxy35JjM6cxq4Kwyc7iNVnPCEg2YZSK6kp6",
  "key27": "2SavCbaai3VLsvgNfLsUhy6cGsJpk8Uk717m5xfMvdorArr1DPVckt2BHNG8mCdoxScL4r8hR4pucRiS8bnQVohS",
  "key28": "5Je98jNwXss3y9KK4aDKBjVhoW6ChvgVwAGG7rU5W7HAttJshKgYLpby5hR8U6SymQYXFUUchwkVDkJj8NUC7rpW",
  "key29": "ry9AgPCEv7s5GqaQWersBKUT1XyKchAPcERTHBfNvGjzwgRrZJ3PUMy9A3gLk2jnmpxmU1sH4JQU9MaMH7wDbSt"
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
