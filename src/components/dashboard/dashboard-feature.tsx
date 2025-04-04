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
    "21F2P2B5gHfg3Lh68Dj7xDCkoMHG8ha4pXuYRaHTxQNUe38gtY23xptjYgqFe53Zf3UxhxAMSFen168QsjKw1Nm2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YdSRGL1KueKWPmJ1fZ47jrMK82NrMbccQYANh3mSoNXTymqcQctqZ7kCMzzWKjaiP9yjNY4MCXSFWc4qejeWdYt",
  "key1": "34Jc3sL4tfHfMJH6uDcEE7uesjdJuNXbyzFZgSaoSBNrSvm75Lt1GKwQrsVtp2V4hgeZrhREQx3rynQd9Vif8vtP",
  "key2": "4bk52sNgSnT4bJ6dfPW4pN76PD6zMXwuY8ttbHooDzVpQvX7gYa5yUVDqGWFPVcpGoomoks1o9q6NCqM7qMSdZps",
  "key3": "sLePTNJU145azhCKYAZbaLr8wuAULcerdNiwVUbuj9dpx3guVbkpmL8fH54fGBHbPtowFvMZesiefY2oGdEJttK",
  "key4": "2Y4n48R723R1kLTzHiphCqxJWRtjQFgS8rAFNPzijhGkRADhgZT176Asp6fTeWwbtAk5U7gFtA5j7NqTTjDbPioK",
  "key5": "6kx85rrqMzgMMjgm3yshtMgDHejpq9nMiWop2WvWMwBiFXSJTbw5aXz7fY64q526WxDosUEV3xdDcpWKEcZ6aMz",
  "key6": "tqTMge8Peu2C8ubY2mLzeURhzhBacvP4RqBcADcNamACF2CwGfCRc1EmyVF515uvbnfqrZxVNYx9qV3LqEgz1dt",
  "key7": "2wGZnpF3tcnbbZaSpiVhSQznWHzJzt9TiT1Php4AjmqvRWyQfMvDDDBuBnrQFzp8TjGsxrub52mVEnZe9mPLMTFE",
  "key8": "2FwegZMdRbbZxNN5iuhnHYAuh4schwmPoFGk7UvZwbvmggDaKrET3dYghbhS7ZWv7UWejRZFFT5ibasi2wtrsppX",
  "key9": "56XMyktL2dNySWvqTaP1c7gQGyGB4T5VrgJqbqk5iabcexAgdyLLELrGsZxW7gpoCN1T1hrLUgyiUu2J4Nd9DDc8",
  "key10": "hEAGy8HDyPC8NRcXrExUWkTqEKX1UvwBJch5eY871cjec4v2YnpMKNaifwqfsJNc3FQbEhoAKsx98r6gnL1HaSW",
  "key11": "iwxyC6pd74fYZF7qZZus3gLaQpqTPu1yBskSA16XPrBEeEK39wR7cEc4gcZnLPGtY5bV23urUYERmeuiiiPQvLd",
  "key12": "34rT8ub9m3bwSbWAwDYj3NiD7jZFfyNCmg3GqTkLkUz7eSLA7M7PPC4taEkLSFu6n89GLU2oBQFERudjiJDTYvZ5",
  "key13": "t7nyK5qKrYZSUrTpQFNi1vG3CaQFfeFNTMvfMpQCEJT6bzh3Av46NoDnpPeMioYzLmgD6HWddSaEg9W9eusxT1L",
  "key14": "D7FmnYQx1d1mHfhaetteinodgS63M728o5WfJxDmcmNrbme68rryTVVcfPJtM727iQ3wRG2ZRxfyMPBMsTMihQT",
  "key15": "48EcsVK8kjdF3wSbA4D6Eui4RH3SYzm9NwBGD8vwWC6LZF8wckMUCGGQq9w2VKg9qvr5L6deVuCjRqruuJ22xBDn",
  "key16": "5Bars6MtABEqtyVZCYAzZ8aGJkzDMX5PjtXqP4zi1dhxXHPwAefUdvWAXNMGwwREbPbvxQdEEY9afB1nhhDGnRRP",
  "key17": "5Knc2c5uuzwrw8NCVJ6PXnEAD7KWLJN4mbgkdSkghpJnwpB1gdzRrT8SpAim2wzGmUoNuXjne63KjCxXe6VJndTY",
  "key18": "4VRuRurYsRrTKuGbpwthikn8RiKC7FNABb8Q3pfuMEZPSAf5cSatZUHEJ1eRS4p7AeDaXFEy8VxrBW6CHCdrZXK9",
  "key19": "2gJ29AFBwTaaecLuASMg3JKFoZZEYj66gnnmLcLr7SNRmdbmW6v4Qjip7dxUHVnedAcAx3EAb7NSPqLvWPJgKufA",
  "key20": "d24qWJfqL8a7rgtU7bSJbjcTAHoZF3cjbUMjFw54oybwbqcXRRBhJ5c4tyYdiCAz35TxZcxDvBThL8ZLWFaB2Ta",
  "key21": "2bbMyTw8utYDsta94ATSkF1T3w8bw37vNZMtNxKKkn9VYDnr1Q9QoiK62uMALh4y2UjZN2sCyWpDQmsX16WtB141",
  "key22": "2rEWMbZqCPkjYYzTbCudaqktqPqFWj83FXMWcPYCnUNHtjabLUKpQuwTLxu3TEQHCXJecEWhY4zABhRR5qJcysDX",
  "key23": "94S5bt8SRo1AA44xXuza9dQhmU8aLnqYrxJ2zswkmgUPU5JEBh1gqayqvm72avGTxf4mr3mFxq79CaGfsXyw3wu",
  "key24": "4uuDzUQRBArxkCtFUg7Y2avbHQeohWmMovqiZ8xMrD9wi3ZtEXyb1xZpUrVpYwuokKqc8oKBvrRGgUbRqaVCp96r"
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
