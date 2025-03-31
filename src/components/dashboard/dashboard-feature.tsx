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
    "42MKZf4MhxVdbPTwffnvWZ77NAhqXEqGi3bX5fUTEXYhg5iHzSdqdfPjydeyb5sZmCcMHwJqCznMciQTxRRf8wwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gHbiqotVHWviNFQKasFQzMueYnauW91dhGAQr82TRtKDGT1i5veFdsuUXhm8KaKLRmajQkEmBbA4Fb1i1PpxZrq",
  "key1": "66czVZ9s4HjA9w5JaoWF94iuoRajqUXzYe1pwY22nwfzDB2ebPdb7cphXqkbvtZNcJsE3aJop34oyeoucV7eiMVr",
  "key2": "JrwLtFSxHRajxynxotWfvEjmS23Gr86PqSxtWLhD66YjkCxsUpvyB6nZuY1kt1bgpZ5mqF371osFZf1jbgx1of3",
  "key3": "54E1QJt3oKyX94dVD4SJY8V8Y7QKDyZHC1rXkCw6bAwimKUXBnXDUCcAW3DhcwxYV3eKypyK5NyEiJi5BNZg8hKS",
  "key4": "4ihw2X7PyxGJGf74CDuNNAoVuSn2tjDckVFnbxCegMhrtANWurf43CKVywuCUJQU8WsZbrak2hs6NFsTsSRSxB8a",
  "key5": "2BZMx9ntPdJoEU932d1m3kiS1MjnwzgREVBjWg8saUppbpwFot6NB1fAiscumLhEz9yXQvxxjvGxG2bry5AJp5jF",
  "key6": "3vRX3g6Fgav2AWmiKhdNkSmcpPL3TmV4fhbbdcVLEQ2yPReLzEzTZ3MThY7KZgAampRHiaBcdT7bDLMsUBVrRkhV",
  "key7": "2GwupSDUyf6AzHjTqekZ3XTiQ4TxCdK2KNVoNBoDErH63911G7FMigxCozF8QDKPfiUEgWtgXjSwXC65FPTa4rZf",
  "key8": "2xGt5RiPA3wy1BwvizXpjCE2vyNXf6sdGHJprLPgjVRNc5LbFhxRhoJnmS7bUbyWjZHMT9TWjcCAoAviagJKdHEM",
  "key9": "i1oFKGDRxUPVztW8M6ctEQEZWiuZmezTH74GpQaLh4uBomjjcxYGCtk8ZNjVLoim9HBPXVQtrbqQXxu1NWqzNUt",
  "key10": "4Y9Vy52mXkcRJ2EjfK7AJeGpnQaWctXaqwzkYatCWabBCewvwNQGBqJ88Jn9KdZXzswKPUqEXMsZGFvbdwmzjAdQ",
  "key11": "3aVZcLc42s8YCFGPbRUEHS5aBoxZuPDe3W7VYzqQZadF833fzf2PNpFJgKQHApsX9T8RfAXkfs7iJQBAUUrneMzc",
  "key12": "3amdZmeAyGCWbje64HQT7ri6NZNmAk28AZEKrZTf4AZYWy4v71ZkQtQqBnEw2xwsgB6RX8cKtth82AxErWJXggLx",
  "key13": "5sBHNxUJnZH9Rn48LsgyTpnPdRYK5TwNCWmkGt4kwMHCU31sn2f6F91TdLM7vhdWjtPUEyyQ8jy2kQshZWZnNUCa",
  "key14": "2ebakUHgYaRMMb6ScZiN6VH5tHzf96Vn5V7ELp74NAU1jV1EytFTNgiwbGidrvH6mg1PmsnXjEWNkUSgnMKJgB6g",
  "key15": "KFUM7uzMos2hrZKTzg2izS7W15AiYJwJQMmYRB6R6PqWzbkbqZJuUv23aQuvWur926Csb58KU9an5Pzuj3hzrDv",
  "key16": "5ViRGuFaqVyoE14mwa9JLz4bZwYAFKPon7Q8sLHLwzPy4XQvVseYLFi2vWLWGK1U3QG8krZucSkjUaMWo5yowkB5",
  "key17": "3DMBG32qJjpci9ktys66Ty3sGuoPD9Be6KCo8xqKTAFkSZPrgzqFYS15XVPGZXmHZufraVKdD9dCuoLqPGBaSgAP",
  "key18": "55R8wtfZW2wAZmvDuiWTAmTMb92hNWT4ee5NGaAztJzLc1P1kN6Q4FiwaGqrnZVYUxAZBabzQd3Fy4Wpnc2A422X",
  "key19": "2abnskVZLH6uqveJAwBcjN4Hn8jYMeoJbWVzPtT4Sy9EcZLNxKCTiND4jdsCYbvQ4XuDF6GjFgUHV3L5UJqiobXc",
  "key20": "27tP11W6qxfs3b5bR6sVUrpZnZvGViq692VNUqCgfsa3Va5mPPEHLKbaznf8UUi7LTebKRjoMnLmY7UmTwBnJwem",
  "key21": "4wZHh1XheV5LUJU3hH7VNjDZ98sFWdUBwgUsbSkVTvZSkVtPLA4XsjGpQfLHgbDw5nsg5yJ96H7XaCNTRT6b3axS",
  "key22": "2JxBaVhdGBebB7WoEXV4FBvgo4bd6JgoLQSmYZ6D4EfZReumPYaFAAoUBjsV4TVhWcRfFwdt2BLsAWRtF89tXVhM",
  "key23": "2ggL8kmU4NiCeF6froKzM1XKEF4T7h86cEPBFMTycHRYGwULTWDKB1hPqJHK8TJL8SFvWk7aXTGbSqta48Bx2Vxp",
  "key24": "3CUHXN1aaJLCakQoemdYNbjzhwvBq9KfCmQPG5NghjDmzurhj7kBJs8eN33oDVNfaFoUJu9nBZoLH4cQaz53zC6D",
  "key25": "4dqJDwXUcbsbM1VDQ5jKPdTwqwUFXnF3NcFfFMF2XEE1VmdEsMK4wFBU24s7peax4LiEa8my7xftYenm54hQq1Zn"
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
