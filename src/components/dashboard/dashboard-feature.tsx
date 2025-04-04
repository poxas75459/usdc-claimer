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
    "7evsXKtyg4Cvho89HoqgtJax4XeThKqDX4J3ve3caK1oS3KmRr6d4Tn5U5xvSHPzCC4naoxSimiwm3XxyBKoStQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Wqo1gFJHpKeFtsyyDhfv5mxuCHXJqVbXkovfGncWtpc2ewLjuqpnm6F7BiEZKi1b8ddMsoJJX1rGXphxobpAniU",
  "key1": "4dURrU2zjtF6YZc67kNZMAsSLFzaVhc5qxhMYCgpwfV1i772jy5NeAmwwmESi8p9wHn72aXS4Ekktawuxww2RxAJ",
  "key2": "5GKBJZfaSuaEbYJAhWXMsjbYDNPo8cZrvfgADJ7yLQDKwMqcKDsN2XaiudLSncRb2nKxeUSbdFnpxC9f9LHKfRk4",
  "key3": "5cycQMtvn157iUijbSczUcpG7jzVj1QG4uiBdLvba6HiwF2i3Lbrt5zTQc4vfv2YRwd7RTtsiDaxv9ZF1ewc5sq2",
  "key4": "3oRset7xFRyAnWKF7DWgyWUwMEUMSefaBcNqyYaDDZsCRdKGvKeFNB8PsqNCdsSC2ZF8fmbnkPQqei7W4tnaFTGF",
  "key5": "5kGyZB1RytgxxnmdaF43Te2FNbVcKbWy1jPjocMT2mJozgMRCLtbR1VnUL13BEY8M5a4tFpqenqXvapJMSrYFCZz",
  "key6": "2XQxL6NQzxTFXSRZtCGvVxfDk9LdK7DTehYaeJZcAgJDGdDuBVyBQqbZSYVswAJHPJePQTKEHKeNNU6BBpxvcsE6",
  "key7": "2j57obwXUNgy6jmKYtUaSAHLSPLYkR4HuH7FYfP5Vd8csEGrx2b52jctbkGiJo7yiWbDKbjsLVQoifCkJuzMCBET",
  "key8": "aMrJkrg4DzvPWiRD4aEogWL6de9c8PFYsbyQ2HFq9QA7ZBM9gS6jKRCk39ihTs63wQeq8FVNe4e67cFQMkcK2nw",
  "key9": "Z68oTjex8r3vYHogBFMiCLP8BRWuxXfHV6okr729ogKxPpTAaiLbp2FC6dGQkvjse2GA5UdXQ8iV8xJppPYdjEQ",
  "key10": "62n3zgYjioVfQ3wcCByS9N3aiWeHxTCqvok8g3ZbdrLMBBCcMPkh3Tr6o9wiKQVMVyhpd8LVGenUC9Q3yw4nX3y3",
  "key11": "2pYDr77P5wBstTqvDBHbK4HuLoni1aiMjfJjUgzwxjoTEZtqdSEv3UpCQYVdM2rABG3kMpPJRYQUkdLTmNyNLpJU",
  "key12": "4jk4Wd2uq5jFUTLbA8cAMauzFADz39F2LthfF7fEmu7hkCWCxBQfxzJ1bEYtDMbQcFtwYCjidqM88mXHPeuDs5ZS",
  "key13": "57ZDfYQhdQwojPboSvj3xyuqmXqMupYuBdFWNGrG1QvfBMhprZDszZFwJWQV1TXgQJvYJkqMbusQ56v76mF2Advs",
  "key14": "38XxqoPwtGRhfawxeN1DJjYwkpbTWEWuUkAn217baDaUxjprjL2sn3FBBsoeXZSWpni5BSD4JSKqZiMWeU11GcRK",
  "key15": "enV2EZMzUWwQoWTmgWAK4j41xmN1heHX1bJtDV4YVisSzHoAcPx8iWpVTQbkbCCJWwmDDPCEVA9WF2zdSXQfV2Y",
  "key16": "514UeEKibo1zfYNGJ9FSG8RPszLUugAPQjrKGFAebnCiM1Q4j2vetxakwQKiFEe6Vw4u2eecDYjLt9LcQZnPNTph",
  "key17": "2pF3dFyKbvV1pDxhKVv42jbgSMGNUf1fezKUuPSUqmNexwks4P7EvcZs6oX6bJ2Jzc49g4qUhbECC1CZFW5R3nhY",
  "key18": "3e91AxWL9Bswdo5CqhyMPqtgZUctzWvkFb2JT7U9MNNT7Pg5NNdnyteHjfRnuscMqgAZBUAs5XuV9zWixTg4RFJn",
  "key19": "5f9mNbJaqNNv95yybmG9c63q7yheKSbkF4tHUc95V9YPTdiASKSRPg1LXHogotWaERHd57k8qwjgxhB6gx7WfFzG",
  "key20": "33oCa3XnMo6iBtqxPaYVXKwtyyeRaF7bARo5YSipf66jew33MugLpiotwn55nhqRJVZsbUiutsgZo4tpvhuKN1si",
  "key21": "3t9aNC2qPsaoLZhF9xNjXJBMbnrHDShxyckRpeHXmCPvqmZMLKxaft8Wt44VkTsrJaEQG3VqEKEtqBgVu6MM5YUE",
  "key22": "5o9kUWUgu4h2x6xN7VsB88vBhTaTgyyBUBEHEUgAZjjTjWHbTUC8XDXCQgf7Y8kSpdLwZCArQddtHNzdbWL9xGyG",
  "key23": "4N8GZ3eQRETH4BPTSKtyG3MCJ4iTTKkE8pYGvxweaWwQa7TfuRQLd9HVKfARo795jJ6hTd2ywLHPNSmwW7kT9vyN",
  "key24": "2oQdEmycwZHj8UnjWwRvwHxyprvfUMp5ZGFJ3SV4tmjy8ptd31kLyX7nPVJ4MFFgioywVE1Wu5i2HTB4H5eF4qjd",
  "key25": "41sWyky9TvWR3MccciMdjwTUVEDUEPFUEN82HKCtowkq2ExYEEJgyjtXDEWrZu9SMNKYqa7PoyPhBUbcPhBbTE6c",
  "key26": "3sYNsMoQqhA1S5RvWaVtdr62MxX69Yzcr6VfdxMy91EpCQjao6UkMYZ8d9vz4ayFjv5ZMSUEvNNNxAFViyTCnSiK",
  "key27": "2NpAwPpMo6igM1eEJyBnWnnT3dJmoD1iMenyvwVqs4e1uDA96LE2sJqoaGWHsjfMegrRVTSWK9oP3oiE5YjkmX5D",
  "key28": "5GaKzTfXb33QrGn9N9yni7VuLJK8cpAggmZqCPdpdxZsykLXeD6uepBsw67u7SKHp2ExyH6o43aGBWW9zdY3NeFc",
  "key29": "3RqCFNkxRa8dbFhoj4a3Wgfbutm39o3GuusgCQuTix2Mnd69AcbYoePLWCU58BikC1Hcw9ht2M61xy2XAebCVsL5",
  "key30": "3rUKNWzr7rFZUe72q9kpkPGjaVyvynCLrRz36q8PMKRfDiM2Ak9Xz9QQKaCQYrbbdPzutyQNzLDtEEU8wHyPm116",
  "key31": "4fV9D25cqip2dZMkJP2vt5F4JKcg38D9Pyk3r1Pzwbj9NeBiu3UWqdR42MDcNpoiTLT1ssLWKmRKxjb5pKkduULr",
  "key32": "364NCf9yP2Qva23DEg9dGGZswxCJEE19nYzNbkAtm2fZBMwVTBfqzdUNBiUArHJUkzY4sGxXEwFExDsnnVksBiKb",
  "key33": "28JM2U2QvpjiMhKTJCXermy9mAtX6sPPRH6vgKw2NnG7T3Agw3xLVnfS1mhQ5cwgqvxy689UBhDiFo8eAiY3D5qA",
  "key34": "53xJD29tb321KcYmrYdrBomdFXE6hf4cTQJLkCNdHyYZqx3RDjSyMebDcnkkSUqMVMiqqwCsquZXUm3hd1HpbsRT",
  "key35": "Fhxg9ohtsq7WnNtsdNXRZPfwp3yR2zRCg1GUri2jfEqLyJKdtry1q1LQjJytxwrJHbcv9AYNBkoRZJVLkvXJKGq"
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
