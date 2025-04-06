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
    "4CQCAmENPdkEWmHBBfz73mrgAtRj9xURwZGrn4n8u8t3dTjvJAxCWGKCCdzBJ1ugstQn6Xq6MHXFNcBvpVYcxKeY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vUWXeBdNM89EHo5um1ERL3jUminHtbMUunzdmFDNC9pseLXZ9xWt3pZVaERcCiGvXRXh4ndcbWkDv6mWDX3x7v",
  "key1": "5JY2aPydxPDL82ZANV96ZhGBN2YbW66Mhs43wTicq2mKbmRXAV1eaZt5huk98rtCFQocHmHpFVqFJvtMvxKGEdbr",
  "key2": "2PXzV3XSH5mX6wYe7jnN7Kuuo9rVH8rWNDcGdAfcQaHPVgoVss4XNcHRDR8WF7DwroPUJQZsqFEAUbPacLo7utow",
  "key3": "6CnL3qv4QyGRUpAby1V9yVkJxGyKUyVeHQdLXPsUqZR58U4KNPsjDKwQkEMqAdAYHt78m9fsMhRSYMGjb6FTrux",
  "key4": "2M7gW1rHUTmxHHWrhq2yeMrU7ycsqZkTBK8ux3PrGgB16Qj3cQp4qCV2A2E7FBp9NXULMikVqAA6dkg3piJsiB49",
  "key5": "3kowhKxqf1x8QAjNziJLs7Wj3z1xa1TYCbxvUD6kmo9ti33cLqf7Cdy8V36XxvPXshRXVFeeEdKGJ9uA28S6ggZb",
  "key6": "4QzofQrYxaZDcB4eBM3b4WARPBmbXWj4LKMLzp7tQoeyy5XS9KpsYKqNgMxHejaXkrbm83jrqWejyZdFzd1TfBP8",
  "key7": "4kVmhi21z4Ashi162cuFchJLHVi1QtN2jc2ZL98j1bL1VcdgeTZPenwnFDWBzuuMP12jEnEfdPNq69N8gyVwLw2G",
  "key8": "R9CU4aYCxiqhE9SAtmBnazop53uTfRfHRETqLs8hF8YqtPBXNSoVKSEQSgebkhbW2nvR3GfDm434EgNXLRXWD4E",
  "key9": "5HxyxVLqniibnRAxaPsAVVzXTLAc7fu5r3SpRxqcoMAVU4ojhbqs4eSM9R8ChrNuDEV1J1YfoK6FXqTysCBEYZ44",
  "key10": "4dT62VsnWgosSV5mpHgCNdV9MoBwakPuN9SaukrLudF5J3NKndtEWcX1zcFfyPpUFdJZQhxhmQtr7v6FmJNdnqip",
  "key11": "3FsVP4Xq9Xqm83rqKvcHexmSyDeXH7yinYuVY7rcKWzcm3hPEAZNXU8ujDGAPHfgnagW4Qo7hFehWJEBwZBj3igr",
  "key12": "2ZETVtBuRybQs4JGJeq68haoDsuCdAejkj9Erwaiv21hvkiELdgy8Yfkjza8Jbf7jk1RKBacoL8amTGf6k98sz94",
  "key13": "62A9hscJjiwDxKSmaFGW7paR1hERGcrfzkeR3h3ThXjukY5djstwYpFay3oGVnNLqMSDyivKZnFQ5dVuEvfScANf",
  "key14": "NtVzCypDbM37d41wpdZZmJtxiLkzx7kjNRTnACADmUaHPAYtNC9DB9URLDUguLJ7twR8iaD9UUFVjr6jh1zdG1m",
  "key15": "4YEd5yDiBNfU9u1qWxwJfrcAMmUyXTs1o8yduHb18xdX9zxicqNE4fQuYTj6kn4QzESpmCxrEETWNs1pnLYbsfzE",
  "key16": "2DSve4ohsuqK8G6nNMkbyHNhi7UaLTAnsNxWPCRksai2vJvSi7CRxcT2NXxE65fuanfWAERQio8aScaLpBw6Dj95",
  "key17": "3FLZ8dAu5JFF9nPDZ7q2MMhMh54cFUwYLvB1DqrE8s6eWbWKuv4eLfWGGT8BLBBVxjUVDsd55bDqDCmg26X4Y2aA",
  "key18": "5DXkycMZZpcge6XRakBTSfgxRjyq496e8RhCXHnLtU2YQerXDq4JNMwH3nCV4QkvXU6V9G5VS88GijHXHUbVj7QP",
  "key19": "2sUZGzHUdWdxDE9nM3Y1xzcD4n9NWHErzXMmxtnBMNj6B7nGHdPAE76oCRTkvbvYgycg6MonqAf9Ev9wG2C4ZekW",
  "key20": "3s51iD8b8V4wDhz1ZXVyqkGTbbsiS5Ww2Kjphc27jcsdpoLB8KV5FwAhTUAmWFMbnMsznWWpxedZhrPpYUh6jhk6",
  "key21": "4KbCSqqpRZbyiJSeqQk6u87ThLqyRKzJVj2T5ujpAKdtvfCT5kRZy7F6uRGnSZDTUssqLAkDJfya9gRjKnxoozkw",
  "key22": "kV1YW25Uhc3ec1G1F85kjJEYPnhKZCbp3XjpAKAqYu9uPatc5yakCWqXj7FReUCpFnGvBoErETvP7oQYfHTa8Ca",
  "key23": "3jxmH1TQgSD16qHeuZXSt8PY3FPyMR56vttHjF1Nyu2ey6cw2argtGc6uLWyga5nx5oyhtaFsxvanS3cyaE2NsMw",
  "key24": "2AfYMuxWpWE9cgCAqxwoGo3SecS6kTQYnmCAkVJNdDr39B5UrUB25rpouWTLGC86KAZdg3dRgrCnxcXJQ9SnYibC",
  "key25": "mqRr3NNZX4ZopuQN5Rja4VwfcQ4urvoriyrRYJY7WNrPAmQno3dUQ1NifFnHjHnR5WzcBqfwVEb4THRrajK7QAR",
  "key26": "2Qz8jwpLjTm3NqbqgnPtaxXdkeXDeucGEXF5VWVspevR64Li7sk9EVRoKMGpimT5xgsEzvdKbauoUYLutTFFuUBn",
  "key27": "2yCrtjBwgYcAFtVJvfEDbtpeTeAyyURznC12gc9TH1gEsWoDHbhWqBKfepVj2hD2aNRnfDJ3d7BcyvxKydMzMSQw"
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
