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
    "yB1WaYxiMJ5XqBBsVNxdU41av3ZCtw7zUZmnqp2Y1jNHm8kA8C5XDu2cBWaifXJi5U28vZCffTV2XamZvjokS6b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oyFW6zJmnvE5Nq2em6aAvmdAn5GaWL1M7mnC163utxjbSR47ik9aLi2hMZuwuXep2HyvHru9sqvzLyqX6MU1fL",
  "key1": "3zpcRBVFyK9wCK7xj3BtcudqnrAX9HYrjFYcHA2Mc2mz1JcBnNtK6AiDUJMsTmwgmz9mBVCWLYCiyhYTyMVpCSvv",
  "key2": "5bs2NnWxDfU6vFSkRf7exFs414SdFq1n4njXpN7gdgvaFXbVynL7BQaYnvoE3McRbBj3fFFZswDwbk3DTBexygYX",
  "key3": "5EXesg7B7aadQEG1jytcYtdUgqmqPtTohgp2EyiUAys2ZXAeWNdZam2c5y24EUBx4vtXWyGxJoHp8G7CWLC9YEDN",
  "key4": "4g7YL26H7zJKkNDYUi2LKigaKrNc9rgDJYmKc2CKhfxZwRaVbST7B9uLKKQnrAucCxTJWjCkxFsBgUV6srbiiKtn",
  "key5": "4zFnSbVf52e2FAQQszPs4i6oSjy529uizqp1etWHrvSo5cShGXMmSnBMrBiSeqF9NXYskGEy51biUXnLPSiyVbzu",
  "key6": "5CchNy18j7VnYMxmRioUDSs761JMLCtotp58sohCS2quKrvFSomUT314GdUbD3FXXjFxcx4cAXcJQhnN4kMJ7L8N",
  "key7": "3LEuUeQqETj4oX1vQ7Vm7Fhd9ezCokTvpt7oRXoKWoMBsTkP1XudEmViyZfphWCbDHropqwfggaFpJi6JTH6saMR",
  "key8": "4bwkajZXQrYpwVKyqCqs9o7cYM4z7s1SxMkrL9gkJHV6uC4UbpLFhn5Y5KBs2Ehr5CGGCz7JZxUQSKPSJfGuD5Tf",
  "key9": "qpZD5aUzZ4cSnJekRvbeN1swib2iaXyE6TGHHfNvWyeYw55gNsD15yXey6fP4qCbAcswNLLKrHu94P6HtFXj83r",
  "key10": "4sXYsc889gUCrX4DtrHBb3MPyeyM4dPh6Py2ZaXWey9g6CTDqsgrrxKxrubekSNQEApVVGMcCEjtG6x9uM67vug",
  "key11": "w2qtqi6yLpSe4Ra6CXM7y7NtcY3ckDhZn4uQZWUVH3VNtqU6jQDyZFJkyWrryUkm4N5e9yrBAvkB5GJcPDuGmXe",
  "key12": "42h2kYzffB1dUMmxQ1EP8SWJHNXKXmbuhW5e7UAUWyMyHzQFze1Jv14C2i2GunDBeNgiuS4sBieMbFjwKqmKyNcq",
  "key13": "2LvhWb32VUGFPQofPjPDryAQrurfKnZxx77iueZXxAeF7is9f98yXNk1maHgBd3EQqd6BEhgfg5evGruT6MYKS2",
  "key14": "26Dqkoann6GoCDVsaaD1vq6xL9BVPXQz5YFGGxFZQFLhkbAG2GB34RwvMJwuGuEXpY3qv7pdpe9uiHp3VfJCnLnL",
  "key15": "4ykcEngz6HugXzGpD27FNwHaDNXMbG62Jneve8jccjdjDdDHNwTvFi1e2U2mg7FTM26BzL69tWCnukG2rra3j3gW",
  "key16": "2DHzDYT2FkZZHdKxJRp86vDmfPXT7ajT11Hf1TWDwGZz7k4zxCr1jt5M1YJ2SwSuygYhv2cKHDfrLyRGRi65TxbN",
  "key17": "2jft24ifw9S5m1AH1cPfrYEaFFGmB3GKi4zokRujJVjRXDjNHGb687k7m8i5dcq4D88TADw9ipe77y8rE3Busy4X",
  "key18": "3q3xJhWvjTPDQ9Hct1vTJaoDNoLdSRmpvWWiZpRJP4sJwDDZ38n3cc5JnH7KgP2oiztusSwdTnrRswZ1vPQVU5gS",
  "key19": "3vb5vuEguaP6pbCrMK2M18gCeqy1jmc3bMfKqbNtDJjNgLGfyMC5ZpzMQbKxwYWqRZ3SXyhBZXZNmTc4qUshDgkg",
  "key20": "QAHhFMYFoohZQzANiu6BxnNNfy3DXxkrRzPoR5WNr9stobmsk8eE6nQAvDjpPhyjb3tLoapEQjwJzLxSnV8qUfB",
  "key21": "ogwZ722kF8Bqk5kiUSAz4CroPYHtPr1m3Wwu4gKRH2yaUDFH39CBK3MgEGZCHgFQHLjVHcZRmpcpibGcHfGXodo",
  "key22": "4fvRkBJAquk1TLS2JbMj8YLe9DguG4AWs13wPfQrv9mCdpAb1cC4LAaUyWMZGAkSKzXhgj8WJ3EpmZDy3YbEy4AX",
  "key23": "4RALKxkpVrU8Dbu7G4y1VfbYPPevjYZ6KUJnVQg9fk8uvcFHA79zR99PwZGKDPxc7VAqhbVDDZs5DqAgi6e8kope",
  "key24": "67QCGRL579ecDvzHowExtAR8gYQ4weUamPMbHF99DNedt7bhMLqSTke7zNKM9wYxyiGDvQ2EprsxdeAtDHcmbXBm",
  "key25": "qkhtc6Sju7iLMRsgkWD8HzWdVER3FqCN7nfeAR8XqPVnrsxJvDaXeAXk2LK6S9UD9niaXYmjXtWdh3SSMnEADXa",
  "key26": "4FJEMdDiqejPW7bU8zYycy1ZDSefJvycaRSkrfJisPLW94GERK4vzxFEcZ482SpMJrBSF14qbExDDgisdqAfkMfQ"
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
