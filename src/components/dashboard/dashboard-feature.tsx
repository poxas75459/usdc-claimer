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
    "c5fCd4dTbpfgJMrtnC6FNc6EdsCQT5Q3HvwemRbh9kCR5EajSCt2bUE6NqhzfDRMoDdx7ZP9WXX76LijJypj48x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "X2RdL92MXKcNyrs8tXVE2kpqkqmevpv2iXS82U5ARS1QAFRfHoU6qeDYjtcdUiPmgZXnBE9YmUwanC2sCnsN5X8",
  "key1": "24oWohfUvzuHA31DQP2FBpDesLVEUuTcPtDEvpKZCBJsWEqkiysqUmnqiff5Dq5FfoszY6ufikCRdXoTkXPDgXfM",
  "key2": "5k8CJNVs4Bqkrv3tk3x9jDB8w9pp2xEQPRGhX7PFE5cqdoVb7WM5S2GzHqPKTUnLZHCnxJtfNC9NVXcGRNKnkFrP",
  "key3": "pttwUrKWzRtTbLxbC6bykXnNEkA2PjSjwPULtqteTBqNcbZSEJrURvbHGe94SX9WbHSwLGPPWPKJH8GvtxFBESu",
  "key4": "66Vw3hX9VwYa8jT3harSJya9hz71yfiURhveUMcLe9fXMz5J1jC54KNXPVuZ5NZGK8o1XYumvS4ShgN7w6Cmqv9F",
  "key5": "3fQ3k9bWAw2daynfqwf7UWQ3wpqJPTq3Ng4dwC7FwWN1bw8z9LvyGdSPvpzN4KbAbR5DudzPkNUebrWd6m6FRvFU",
  "key6": "3ZCivAg5nhFZeiUBCeYU2GC8sD9aY24ghACaqHpEDgN3CU4ogdivdSW9QAarvmwFbXzmVxRV4cLJsTucxpWCWP36",
  "key7": "5g9yGdVeHy8XwjkSoZrWncVUP2Ja74am2asHsw59X6eswxwnbSCGK1GeS7mgZ7mbPhhueA27rA5859URcCuTWF9r",
  "key8": "4bL4hyJ2rNPEpX1ofVvV8ysH9NEfXJmrea3sRRA5GL7ZHCtgoBE7YBYoTPx9Kp6yfcpAwwin7XAfu62XruesKuWy",
  "key9": "2UZfM1CsbBRtfrc6jnvWdhK96hMjRGezh3ywfmVe9cUSLHdfxu5QaFLLgmodUmNTe41yU4HZn3FXjorjFqqvcy5K",
  "key10": "2CVn3c71SUYHbty63K6NCUsNYFUrvpgD9hJDGEE98787eLhb2RM11n7kjbE7UtUi2bqR7xMjFPwVKtTpYyVgDXxa",
  "key11": "4uenNL41KW6HQTSgQs2ctPuw2ahgabf1uuy9Yd9vJqbu5dAg396PuCg7zntNoxKkd7HDfAMqqLArbMW4tAUheUmW",
  "key12": "3jaR5tsoeMPinUpciPbng2AiV2Xg7QiwZmRuf5iQVsvZhTL2R9RSyJTME9qNRuCXHWtPmPYgLSAFWysmtJ9PN8qA",
  "key13": "2qNMSYPzseUda187UijzJp15xxRrGTZLkajcuMZaPTGo4PqqEwoLsQTsRZVVdjbJ1ZB9X64Vo8hM5DxW8K75S9E9",
  "key14": "2V4s7nFEX64vPSfUJjZTqcNZUw53k8Y1pCWEgHSRii6BE7JVjL8iKrZNRYUqgDUwUXbibfiE6xiVFwy17NTTteyE",
  "key15": "5Cwdm2dicKZ9fRVCmcYx5ei7cJ4EkpaYazRxE2qk7RfJGkBNmwhzJXMY59oEEgQ72acC3huPGyYwa5SjAhtaDoww",
  "key16": "2gJfw9tC8tEfkrYEk1aHDGgvmQMdzg3NEmZyLho1T1Zt5TH14Rf7ivoan4Bkbp4qVWaDAmHDeKUbUdxE4ycKJUi1",
  "key17": "5u5VsgbHtbbCRXiq1t1gM8tdJrBVNembGEYpEmSMmxvUitoTwrJcV1QwUzRBa9ZqAsn9mnVmG9vH6cyXnSTbvTLA",
  "key18": "ZriyL4H4xhnU4iCNoMi32u2MWXxEHrmbyvYRLk2mytxggL9D6SPCrcmNAo8cg6UrfNBR8MtQy1uctrARFSxX8XQ",
  "key19": "Y4iS99st3nntjiczau9WdcQ8fQqGegmBmXdsfaJZ2aE1xTwD592nJGBniqrHU7gBXxpaBrrQJ8g6vyBCA22Q5JK",
  "key20": "36uTPfAH858H9Jpr8AUqomC8dHnLAt2nuZopQgRw91EXaFRPxvrgufvaU2k8kiGTcGvc61fTHAVuAYyVqnA6K4XQ",
  "key21": "51QFJk1vsUvay3N9ukyi6kY9d2c7wyBrKX6QzwkMMG4ofdUi7GG2Y3jhDXhefR5kmCShmMdpRgDDjRHUsg8D6q6U",
  "key22": "5vbH8AD8mseLw6DorAta5sM9TxwuR43y48Q1oriunzasw34SgrMzPqmrwHPmL7LXvpFx4rbgKba9MU1awbweMb86",
  "key23": "3dpcxVRdwrQgEreKJye99Et1jJ414jk87p8Cw4jjaoTVGfukocmkm63CxtXNoPcK1x2EkV3r6KCXcn1rXwdHr66H",
  "key24": "5NbUxXdZ8VbyokhAcPHt3gwTCAxTQCxET5WFVosv9CyhXdHq8CVFQXkC7LuYAFDQ7x9LsEJhsePHv2neL7Zj9FSf",
  "key25": "3n2XZuxgD7VqsALkdn7xybVHykg2zdieiR7wdzpzBaV6aoPUrkk6rTZ12BEA97WAu7xNMZB4niyJZ6YEQHS1QBbw",
  "key26": "56Dd8NhKJzdaAtHdZCJK9rpgvpkVwmoUReYSDSzezwB2fNeiipYzqppBNXS7mWJDfjDBYg78wdtXQP661t1CoosB",
  "key27": "4Gb1ZRJoPHRjnqY5EVdRUawVXai6FoiJaWZKVqgd2Z8cmFs4Fjf5nis7GW6uoYYWVG6XHDm2KsMkgbp2HCjzPGcD",
  "key28": "2SgKQtypp6uY766xAMnW7W6b8kpUao8i1uvQAahtbg4pAnrAWw6VYNEHQkWbGUhGXM423HBnfyGHvmKz5gTJ4QEV",
  "key29": "vzPnjbYbD1XK2Uar8Q6XfQrboBigE278QTeYUWexxU7EEx8pWb539HBTyVAXymo8hEusFhUPa9HQjD31smdASN7",
  "key30": "2fVhDqmhUdJNoKpSZpY8RtKwCWbNH1ru673Yev81Pii7kBLA8czbwvfxjF23nvw6EchCjWpbeaRWuBrP89NatCi8",
  "key31": "4M24ndK2RU9yvg5cRkri7W6AebCyEzPHCSavSd3gHLwLNbyv99SKXDviL82H8H4sBLdVrFZvR3RubRFY2Q78FW9B",
  "key32": "somPUgSU9UpfFDrfu9TiTYKBAwdAu7DJpypEBAPHAnvRgmdadrSxpCivdUnxv4z4A6mhX8dpzPYxXqSQF9uMP4Y",
  "key33": "24fwLq96CXu79ouvRMWAdn4aCE2ynTbWLs8CtGGUMBx2B8Vr6VMVF8UUvGAv2vXeJ8hNH1zPBY6KfYuGEeySRKQP",
  "key34": "Qqg4KQg3kj6g3QXRk7XCHJM1jiGNohyUWxmUw5KFCRUj9cM4kuQPzxXcfrzqPuQAKSZr71yMDbbrRZDcxXosF9M",
  "key35": "H9Jav9XpTPTVb3EXgZdmBbZ2zCbPSxZyp3eW1WbH5j9rpjcrH6zLQz8HABjBBj7AMAV6qGHA5LEYeLUK9i3meAp",
  "key36": "tiBxW3itbnYxbvMp6yvipx5a5JipaheykQoUX1YwE245Wq9rr2k5gEwYvrRYrQD4LWUX575pwQAGWk2Pi4Sgqg6",
  "key37": "ESHrEDfkePnifMQxDaXWFqNv3evYziJ4oewzYJAvXb15DRHT4dD1Q3njrmtFULRyyWdVK1Cg4x3fLVxin5Qyu41",
  "key38": "2VXjYRCE2FWbWN1pit1Euoyb2avqVz9QArS1yzdwErMgYNxfNro2iMx3TT5vjcmggtLE6oZ42n52MSAiFhrkp2pf"
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
