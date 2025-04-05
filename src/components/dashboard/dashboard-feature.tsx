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
    "56Yrj7nuVV2Bedk1qhToZ2t5KRfpDWFyRtWMG1N1c3VQaYzdKPomNrTQfNW6hjLgSj47k7ebPmpXVUPt5hNEgDPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iX9o1rhB8ze5U8z7Z4qVDL6hbaksSNiWCZ6sCQSoQPJo5wS38wv52wb6hB7QDPvEX8cndbPTXcHW4UCVgt6m6Kh",
  "key1": "3Ucp51xcyjDfn9TVrCpmR3KNWJuST6A6AjUq2Ra3BpN1Zy3uwm3DScK9jo8dP6nFVY61dTpHJEpr7mfJ6YCaC5FD",
  "key2": "KJ2ZaMefMeHHTFxaqWzY3avsFC2SMjfhnTLbLBAmSSfDX4WHqKM7ph5rVaxp4ekqWiPrMYfMr5PMyGWiUkrM7Bp",
  "key3": "KrYWX4d5fpPwUN2JecsbtPyyaukuzKp4MtTQMoaPT96N6YdyCnSnzrSq8eVnkgK1HLvJyDNEtNn7YhAmA29H2k2",
  "key4": "5vbfXUUfvdKPqjmN8MPWHriHXTPEDca9uLUthEgAj2c5LoeQCFVpkWSfkH6zB9f8zSufUV4qx6QwqrSMwuuEF7VS",
  "key5": "275P2cD888uJUAJTG5x2tR9Lk2kMhj1EUVZUkukUsKhjsdy9LNprj2QZmU6vB7bv4Zg21TEbtpQRRBrJLzoCTUSW",
  "key6": "316kw8YifGACZTY84QwtFUc39wutVeTZPniAfYkfrnHnoGchh9eWEnVbd7yvDuSWqJqN13y9daMgXgSxUCXTyQyN",
  "key7": "3nRZVdeBYEWWSVANfBAkQZ2R95BfEsbfjM5EFPPfodSRDwjtueTMYyZucqwD1fiSHnzkdjFFx99fCSCPBuMQFPy1",
  "key8": "4ySkw8fySAc1YnyA5YvD9Tp96MQZQDKFvmN6BUpYY9J8bqxxapYYPJ9bH3fz8qg4E7f8QjXGg91JoYsm2TGcjSEi",
  "key9": "65fZ9NqVcm9UjHgmbco8PSNPehoP5HQSUBRVRwhtDSJfnUNrkRk1jwSMzNYB4s7S9yk885m4cucYqZ6pCjAo9B7T",
  "key10": "2WrHixiGGgDabA9b3AmtxJqBqFdCB2pC6y1zpjhHpEjXcgQfg9tgtUSbJmEPcZgcbYNQHbZoPTp1gUTDSDguY5jc",
  "key11": "3dxVrhppuWSaLsfHYVzYdqPnj5z3vWvUPMV6XMkPGKba5im5hJj6ooTV9PsFvG3gfHa98SPKqvCLBFMQTzNp1yDB",
  "key12": "2a544yFGConxNtvV7PcyU7JoDc1zXttyvSVAA7pwpTe7dCYABZupfGQFv3eqwAehisDjWJFmT93PQdJDPyibtQux",
  "key13": "7wLJQyZyTVvZdaLbT9JXX5w8BR9KZxoFnfYsck7kgduogtohASVesgzxQ6k9eUMLiWfdNrBG6LnjRbZLFUqn1XK",
  "key14": "2Sy5hkbkK4rf91AuvEGgW18fkiXEhfVsmLTRTd5LFAzzJ9dfrLwYHaqqJkSo3kWfs8ChH9qevYjJpeYmNnHS4WF2",
  "key15": "56qW6WubUuWAon3rRibVkbABS5BVDg46HjDPJU2GQYgBVzHpaVAYQ26o8oY67uzqhzuw3MQDszdspxFAuXKrncxf",
  "key16": "2WQCHXkwQErbxga9KJf6EQYMn8hnxfaF45Y7LDBqdeoHuUPyMyEinV8hCoWkz97uZYHdKTW5As9g2hwyxv2VMZph",
  "key17": "4pbYnypP9oP3DnDyKcpuydsFYhtvYoKiNqhT7PGBENFvaGRnnx9eNymuqf96KKY3ESKupFq4pX665rKEibXWvw8J",
  "key18": "27oMuRygWBPyhi5EQrzNoRzhxx9pXaATVdNWjLZp1aW1Y5HujQgpcg1r6uxoBuNFWJQFjESpwD5VmpM4Pbg3wimo",
  "key19": "28gSdNBmumqA9D2EmcjBhJMnwgdqsSMgdaumSSa5RMcHMRQ85mWYVcTY1Gmz7GvDuhxZ7EcY5HYPBpgpteqKu69a",
  "key20": "5NMKcXJDKq8RH987afrBzN7Thw46SzjUtqmWxNZnWxBKbtimAWhx46bPdBr5hN8NZQ6M2zZomkMdAcQq3CiytNNx",
  "key21": "613Tq26NS6UQMyr4UxhUjvKfD6Wm31aPYpnRBRZo9hnK2VEj9GvbcmQju1Ncq1LkZtzaSBDMEUBjfv4FuNa8hZha",
  "key22": "2QfjLXM8WXaqYZGwLiBrmG2JiSNzkeTrJGkyWM1A5Nupdh7wNEofhwBRjMAKENPNVUuFKzaG2hNkw4zy84z7mUEb",
  "key23": "G756BsBeYCFqFrv3swaTsxa5y2wtbUfkNxAFqGYRa4cbDNEpQWBmAaMjHuQV28ed6vN8z2x4fheVB65kig15VxX",
  "key24": "JKMDNxrXuMGgmht4tsPoEWqthZiLRYnLwk6yuNvs25e7VUREDEiZDqXXm2L8BbU3UoRQx7Np1re5vicwhSFrpsk"
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
