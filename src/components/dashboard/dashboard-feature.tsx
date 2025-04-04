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
    "64gZZh4WTG4rdfMdNKAdCSe2uEGDvWKN8TeyXSwak87GPmBkYaJgsCFkkrprjp69oB62FavQKY7xJ93qrMLJbmtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AMTwwVfce8bto8AhpfG1zY3PidiQo7EJ7kxmFU5BBXPEH2sMu7NDoFzj3tRAWN2ijnhGQCJK8jft4kNNuXZjAi5",
  "key1": "2xZZWYsMth8QisSo6E7xQF72RvisK3wEc6Jgd9wZ2Rj4BrecMmgNb26TKcbv3BfayTurvNAJhhSBdbFQLFRiaZmB",
  "key2": "5B1vMLyrga5h732hoJQbncbUUiu2dKJqpg7vK4dLrVFxwmPXDT5cKzc6ECPyZ94puXcfh8c7cUkjru6hFzztSPRp",
  "key3": "3nvXoY2zf8b5EYRCQsWyygGnpjHGBtiQhvFiM4WPpRqEPNiRhbYqrQ7ZKEm2pu9gn1EXAPyd4GKA2TV6nxfiVJC4",
  "key4": "5qSVB2S6yb6GRLBmVen5RLPbjuZ71QMMBBd6VJHJgLBi3mhYjzxo8V571hgT4qr4tGgB5FR7nRqLo9bUFdmSUX7V",
  "key5": "3DuA2w9f2d4at3EUazkAz3X9mx9NrMBe65MxjoNdXLDF4CXEjTvFy1MWPtxe1cNtBz5qutVpipwxnJzoZ6tJMCDo",
  "key6": "2ycGgFPGGJjtqfd8UdCFLEDS5baix6Emnd3XuQdgdBfNTD2PGdk4o5oB6Pkgb2AA23kYPdZiiLu6wjGKMWXoqz9J",
  "key7": "459X55jS882ZCzGejkPDKdeUiD3BsnjSRWL8t4VLxq8s4tMwuBeQkgeNBZp9B5Zjm3ieAK2NthTfZiW5NHzH4aMu",
  "key8": "3rfm3XKFGEzeQvXsXgcAh44o9Mpe4DAwqXvKqn7PATLbSvhCGLwQEZJ6hauKwe5qB7VyxVtSpFFtBgmiTpND1b6E",
  "key9": "44bzYok86U5sxXM4bzNhqf7oZ3Rtg4PNfeds4EP2n78baqLvbgaPM8ZXgpDnWK4rq69EZf6gko6N5oA42aUtAsj5",
  "key10": "4yw4eZkJYczkbLddWcFTEGyorftBjbxd2oCjMAfXfWTw7H61afqbzUioS19Qv9g7XahGQFNNAutf7TWMsWMRXXCj",
  "key11": "411xtuwhzczhkNcWY4Ajjxcr1ia5Lk3BYhUwKLu8Dx8wP4piKeUz1cu8GSLeUXn7iTgbrUABDNdXogpLe47ojx3Q",
  "key12": "5RVznEEUvdXheGZ6dt6CtgNd3GZH9FCDmnhMma4Kdi8FroftNEFD3YBtRasGXUseaPe8SdpX5KZzSk5EPPjmMa62",
  "key13": "4yYhy1XhQxQxdhoXr9uhUpgTCW3cdJ6CQ6hUuevobkHhDePKtF2RgGKaRHLKF7GRoajXesQS6Swh3Lnf9UwCU7ot",
  "key14": "5Kfz11dXLi2VH8GjDPBofC4BS6zKkKEiXNZ91xinAoEoPfvC4NMVi4CUo3PckToRYhLfKvik4bj8v2t6iQqW9A6u",
  "key15": "3HbeHR58bhGkQCQEt8geujP9skmbaq6oXKzaC7TkhQ9pmyXt3BGecsZMQSRH8zcEcgNDVB4b8tSEm1FAbED74WPP",
  "key16": "5RgjsARZ3BXGJUwVzNYzxaEbo6yddiFajYYDmgXBrpzCqHxhs2unyitEA89bS9AEGmh3Ftfw4ypp6CSHoWWi8d2x",
  "key17": "2subQFsLPqKw6hPCzvT91xyUXaGJJWKN1N57syqoPGigkpwxTXrwTTnbtM6B2d4PhyTwWsEPLJvC6hppsAG4tLZM",
  "key18": "2hgbrYrYgtbPXpZRBuzv242YGWqbR6uPP5nEo2WJ3DQi7aMprgsa4Yv9rXpdb2xiZZaYoftVVnzFJwr4SQpkgGMF",
  "key19": "iS1113kH76DgGmcJMrpuxViH79toMy5ZF3JHmxU1jD1ZNRfye3dXyWCY2N3FpJqCauS6Qcsi6uQpyFr6LQxKWwY",
  "key20": "5UWatRFjp48FpXHSvRieXopJuM9mEjRNCGasgRBXMYs4AfeY1uCbF6Dz9tJAoKXjT9tLQ3T7PL8qCptBjnZvdSXD",
  "key21": "2FLD2V8Mo8K4ahf2Xk3XTw4THMETdmvbEnmUomj3yh9PErkS8RLon17kdEnKSZAvTG2BBhaQuGwXcpb77xh9e4Go",
  "key22": "48fBeq28huJw9QPB8nhNVoRPfqhS1hJPToYuw2PghPe4dCxWyaQshsctCza7QUrp3ztvdEsEuwZWHNVCyYEx4oh3",
  "key23": "5TyeoyTyEf27AqXR977Ne2DwGAnprhqdhb9ak7KkNVdDxQzM5DVGzTSHLeNnuaDwX9hQFNKZMi4CgzM2XLeZXjYC",
  "key24": "3CzdHHQwDZSTERLr8aeKhfiZJsm2U2WCANzkCBg69heKNjYaK42vNijLD2L4fKPULjnosbG8RyBy9Px3pXt28RPX",
  "key25": "4VzWBVKXbjGz7SBdcbpRcWnCkxQywbkXyEn6mfwkv1kNRdtkhJ3Zm3KyKQpRRc9SnGoCKb4tdbToUq2shi6BEy3F",
  "key26": "5DeEdtNWjfENHKuDaCr37Whju3Lxoa97SgfE63EtKdUYCGWqBeRfnzoGKJ32jJf74tgHRVRPLqUzygREgYg1dKYP",
  "key27": "EBZYhasjTqw4j194noJh52eCKHaNwr2Uo6WvmmQSDBbQJZ2ZGBSD21cy8sagQW5RABViat5RvsqWf1tZdHiXgYi",
  "key28": "43PEGKwoaFygJLMYbEiPYumsQevtQfMuKYx1Ev9L8SwhCaEK5e8vVCPuTuymg7sRBuaZsYSHjvavzd7yw9m1jqq",
  "key29": "27TXLVLeyqmzDvBZXLtqgXS79rgvU64gK99AUNrkWSq56bnPC6Uua5ELec46HNZsuifpWkRKNxkA956JsZtXTho4",
  "key30": "2yYw71iX3sBMgK2JdARKnNo2MHmmPnLK8zxZycgVKkYvNEmrYfT2eygmxKwWwNcLLLayU8z4wdxwqZTbWv693W2S",
  "key31": "25AcGTUCqCV5ii5HHMPLeiVQGvotSx317adVrFs7kbHPpGEg9Cpmt8axwWvzokwsRWFxGAjNubstNXZbDNb5atPy",
  "key32": "gjcHqKUarXppW9mssgJmaPvAqPK6mx17T8YGvWQ4AUoXGtNSQc8xVJP6HCRCRPL5UcYKfrLk9rg5TRzSMcFHedc",
  "key33": "22m4AQSe27x2qpsmKTSKuZQzEYTAQUtK3YVbaADUKLbTgtRsxtHMRvDzT7FYeGEEfaEwsNf9n6JjARLp1yXJETC7",
  "key34": "5smDcKgqkukuecbVJMTzSZrBjscQVjsjy8sTZSGtXgknis7LAJibycsG33f77gcdaiS5VTttbUQw4sqsxmjfeUBR"
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
