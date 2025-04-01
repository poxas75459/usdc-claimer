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
    "5AohP2KbiLpZs3Kwgp3L7gV4LA1qRWjrZM1UNmbNJ5JjGgW3GiyF7p22M3u7wwdxSvg59eGWDHagcad6L5oHGZzK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4T7i8quJZFmBJzMW7jCKe6QSzJuqiMXj1UA1WS54fxhP1nvbLiqfVkdwpvphyhtPaZg3n7FK7x43L9yq5YJ6dFYw",
  "key1": "5c8PfUdKLFTWCNnG19K4t1Frv1PzQnZrp3XV6J851qSeERjZMwSwzmgiKZeDpymrrYcBsucC8FPT9CGy76Q3BZ7C",
  "key2": "4LoVPjbCaWrssQS7kFhKpbpFkKMLWDkYULSQuvQo8xmSvca1XmHVdLEkz6xy4pXpK9Z35p9oA1P5AjxVaydRerJb",
  "key3": "2HRRJuLydsCrA8EEFDCUN8B4FXCKsYegdFn6jmiukQPVBACjjU8FKSgcHUNsAS463qYjyemqXftKUBjRVC7KWDQt",
  "key4": "4PNrFJ7QKAHzP6Xt28CUUXcCPNBq6MRmnrDQJzK35XP99kAG87PfLpDaW9pFCW8uo4a2oTFkpopGwfwKGxpWEiWi",
  "key5": "ri6Lb3xHSxfnJCNDMuaEVTMjoyyNbCfP2Z9kaWbVSbHQMwkpqeBfsDQ6AHY6Z2PyXayjBguDrc4X2X4FBas9GVz",
  "key6": "AFMKbAjhpXxktr5xwTaSnWfqboh9db1SDpg9pRqYTG5EgXqBV39ZN6ovGQu4QURVzU5mjV1YMXNtCTfWVDfnUha",
  "key7": "3nt72LSkpKMeUGVxSfrW1Fty4gL4Fu8BbTJH2bAkQLx4bbsnQoYHvcsZ24EWvXPAYLXQp8LCebJSoFpjmUuXwwaa",
  "key8": "3RwFb5bP7jXQCg7nj1fHbkiZ79gF8tyUw3mM8KC9q2VGWP8SbDe5GjTVQYYW7njEVDPQnX2CmxL4Fgd4xA8yYioj",
  "key9": "3VyDLPLQiXdPE48YzVF9YrLz2Uod4pLGFug1ZDYBiPstWLvaQnHsvLfTUo5x2ufXK24XQ74HUbfXDGFQRo6gaeaP",
  "key10": "DAx5VbapdohxSuLXHGubon9DC7zMWmZHdxufxTQKZSBmqT6UiAT3w99D6J4dba2H6sVJ9dQ5hvewW5JAKj3BVZu",
  "key11": "ozpw27Tr9pNW9d5D43byigKbu59eP5M7N4gniMsFKjLxkxLV9poX8rEg6zWVKCf6XEVE4pL6xGFNhvFsrLUnxMm",
  "key12": "2aPrGbpfPuRCEfzR6D3abQrDKzQQdwu8vNGBBrBTGpvxxi6AGFjCTkny2Eo5h545szAKaFopxcQY2mZPEq4ksPTF",
  "key13": "2WYgyQeSAgRdSLCJ7DWsFCjRkgf2XbXqTrwvWJSAzs3TssmPNda6Aoe9JzrGaCgPx3xWPdUAKFe1q9pGgJtvqf9q",
  "key14": "49NKfLswgYx7tXNHj2swJo5Q1D5qbybxgC6rCUQoqzVd2wV3UNKXmaMJDKryx3tHCTU5GQHPWCsHqDzLZViDmE4a",
  "key15": "4gMTBQvBc3pprHzpyZUFX8Wg3jmbyu51Yu6BzbdfK2vesbuBFnyCDVYmwJXzMKB5peBNBfs63wtsCwaHgJqEKwcH",
  "key16": "2r1woCvV5bqsxkyJ9u7F2KJhXZUdGJdAVz5KvvCdEEXt8DTxHZPo7LXYiSkJi1XmLX2EHxStzVVJP7QY6Dcuj4aB",
  "key17": "37Qcbpj7iwRWhkgCbopLAKUmsrracFbG57VE57sxYqsT4V2nHG2CSS3DyE9ccqsD9KxBGNGfaSrkrhnvoMys3jd4",
  "key18": "3AnnC3SxH3u4cGMSbMVnLzkc9pBBeiXfsbVtnD9Yk1cxzxb7B782S5342AAUUqxG9NZgw3sBXTw44no86GzombUh",
  "key19": "4afDSrDvDz46xsdLuEnCD1LYfQ9z1h3KG3CGyfTajeUBjqshajZyXudrzxj9s37oTtUari8DGcmugxFg6Kiqitn9",
  "key20": "3brLsM256n7iMTpvCDfZVydhh5htoXtbgow3YS5Gkf26bSWCBqJEqN5GMfmrae9SBzmxqvy5gD5Rtq4TM1cJuVeV",
  "key21": "3NfYsLcb3uzc5Jdy22iqm16sYsduCnLg12DmYMCiKLZSqN6XpJyVrq45vv4eGnfuEMJgXjHwbRCkFWfZg7kxqVRN",
  "key22": "5HHCPpVfW9HWsmAkALewNMQPokp756vbtHsSwpfFqmdfsiwokomUYGMR6sjm6HdxVRA2BXTUEVqyAedfnaKMWooa",
  "key23": "Mdta6pV7rLELCerv6T2Y4SM5WXVttB1XBqb2trh9fuVLEEogNEtmfFMxLw1paLTx2kBR35ih6Zxm55pfboxDbEV",
  "key24": "4We5dgLJHo16kMJ7JeJ4GLNZgT6S1FDDRnnadqGfw7bXqDuKoy9ta1i59ifvbhkx4bgd4rDjoWfDknqMYDpDJUZA",
  "key25": "4aKcBCQiPB4ZFhH4kHmPoWbYsecvvqKJjj7iZ9Yv48KpHwaBcJnyZPmuYSzyr4NnwEwsQGNPzGS2fw6yzjbHebML"
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
