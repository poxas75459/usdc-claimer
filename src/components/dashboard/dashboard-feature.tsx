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
    "fqWUJMrsKW7Bpb4CPHKu9ub7GPqMPBoaaikDfhyT9U8PdwBi1nC3VVgoWwSVvBTtKtntAapWtdBq5Qjnn8u9Ra3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42oSX6GX4NR8p5vBaUzToyy8g18jCtmutj1v8ipiE9h6DBhZGGDJudwKxFT1LAAJARbtieRorcvZF7vznSX9j9Mj",
  "key1": "652BtUJgTtPyd8tddwfXnuNKAAsBjmHJdbW6NCoGi3MYgAg5kaNn7DL7SWSWMcz1HYXdQJRXi1wR2SiJC4kRBs3u",
  "key2": "442TUApmxRd9BR2ovHjBKqxfJpAy5eVXhK1Sy6hZiXmJoKp7kXCAPtaXiV3YwcuyvARYt4TyMQGLT72iTdFr863e",
  "key3": "2ykRYMKTwzSLhERSZj93iWLUwPNEfLQ5VmdZrAyD8vxmqXHfn3btE44rPFcymyJcACZ75fYJHCcREQHRvYaPD2Xp",
  "key4": "3DQw6xRbZ5ctUjmSQYDvNgUZtc21Du1JHKPAYucx3MvJw5zSuWCDpqqmHbjHjy5ZMbkatBhDVfXgARzuHypzZnon",
  "key5": "4UhXYC9HWe71Brq5nKCcdkAG3PR5wqHi6VotSX9w46ombyWVDQgnQ9WWeHdhg7fhe4mJcXfNGPMA7Vbjx9GnHB6Q",
  "key6": "3EKsgUdvqor2tmiPJyNv2MqKZ5txfA4pXz2T73Bwqx561BEK4ZWTB5Ef8xVBGTfrjvV2hHrGhAhjsXP4gG1FZ1L",
  "key7": "39WGwLqYgvU3LvNLfs2WVZXwTxjCnHCF2hYUbweoGbc8Asptf4BqSVBgBa658geffrBjJs9pnemozoT6QMu9wXp2",
  "key8": "29qjzKJ9ZxGPabVPsSXpvNi6UiMaLPE6Wy3x9GPPtHQkaKAjePwB81AD2g3oi4VzsDGyWFEVTcy7E32VDMJp8emw",
  "key9": "218yRhVqEmPnr3WABgtLCiKS1EZKJnfn9ReWsqfAXksRJFeAzuwcrJGDBDMJ3rCpNH5CPbUcZHcptHxWbE3PMNQN",
  "key10": "XTuhLzUxPChqrXUxQiLrB3ukKDuix7qhxzENRGiJBDCiPsANAo9D6vnNNPbiZpGDeEfGYvx4ZTzv9xR2C8v7xKR",
  "key11": "5pTb7K2TEnV6jPG6YrBzZTyweHuz9DNBJDVbKyvTBD3BjCSbmNQFoncAChUh6aFDuje2ZMenZskeMNJEhYduJzVm",
  "key12": "5qPDHoyMcfsfcactRrUhJCTYnbF3cgzPKjXPV7MDJAd7wzLAkzo1SDQLK5S1LtCtoaXqNwLQXLDN46HhN7cY6dCd",
  "key13": "4xhASyw2CrXFonvf9a1G3j2FGDuvVCUY5f8CoiviWzAy1zQVqUSfSBqM4wXzxVnLZQNuXdhHnCLzgJ11VK47meMK",
  "key14": "2RhnqKXcfnTecNuJuYthz8sxRM5AmR8NXCB23VTQvWM7Ji1Gmd6JyK7p8f4avAgyEh8yLqH36GySTdHQQWsVM9iy",
  "key15": "ATHZZ1L9jqHGE9ESgd8ZcBKyGpGKNKxWLQTqehje7VdrfyB6Jo6SXqeE44QTCXM5pFUMXWbJPXRLCxpcNpTQNJh",
  "key16": "3wcxtDJMmVHx2goSgCdkPEbFLjLPPoGM6NXu1XQ2dU3ffasuaB55JAp9yiu5wy4pafwzvvQTvDLTHsFmCqGTLqYy",
  "key17": "4bSCKsfM4ks3QAubtFa4dUNK7inKNhX1fs6UeLmKeM3K5HxtKbgwPmgGA52NWEN1Bi8pj4Ja24dfnsjVGHthEjCe",
  "key18": "4KtPdnwGdEoAxvUYKth1ftB3VHSBboZoR7NqWbEkn4qocDDcuh8dJHvowWKQMScX3wDsUMpjky7mEQ9SK59VkeYK",
  "key19": "2WHfEkuPeXPFHCRG5jYiqSZvwH2HaoM9TVfgAGDkW8SNM3L8Lw7KJLVMkLwn8h41RF86cmpWGcdWT3BhMsVTpL81",
  "key20": "7Zt5zn7cF6D8XED2F42p31ZtkN2vfzpMZUB132a366c8fPtKWz9aX4dcUDdVm7oPjGVHzgirniQZzx2ute6hkHy",
  "key21": "5HUCTL61UiVTfA9TaG8Tq3eMAkmrnFsM32dPDdSGZWuytp91TTWDWSC5tFaQx9kQNVgJaAPZpNLty8hFU5L3KpGj",
  "key22": "4yY1JvEU8UU6ujyaFcubPc9GkZWztD7Kt8ER6cvizkVJSpxZE1MfKyMeLD7CiiSbpu2cubD7BtV3b2p7W8Za3m8z",
  "key23": "aXMadetT1zXehC9NpRSegVs2E1z1i942m5BmovsFDaZHr1CXHVPDyvrMLWgSMdC1fKV3DHoqDhqVTjZ55YC5gJK",
  "key24": "2x53u8a7BkUk91LQ7b9wDdVe6MdNSR42vHJzMTwgZKQsfwtmgLhGqGjpFeBWMoCRgHdGa3SdD6dBFLBjvLmcJhLh",
  "key25": "22gfg8bdYNEaM5FMos7CJzAveCkqmYDPjdMetx4tZML4q6xeyDPQDqyAG2BvqE4rJcAY7THHABrDYuLUtbz9gHAF"
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
