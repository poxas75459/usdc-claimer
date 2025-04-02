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
    "4dpD51gyRr7wwgRGXnz1Ta9qq3Y96uCvcZ1BoG3BAiorSaRsPrexrJy4JbggpfxkEmcsbFXMx3V6aiA6eGWFDLFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4do9b6EK7u6b1KhaKhAYKjYjKFNedqGNUm5bJXudeWL1GtjpJdtZodQg6mM84BbmJLuhwFL6CsX87TtjkiszWpC5",
  "key1": "3YpMeTe4EHkha4gNUA6qhSvprqmDR8H2W8yX3erpvdLZMWoCn42PpKCX9fdx7i8q3vWGtNpjdCCN99bZPBDVcBs6",
  "key2": "4nozCDjy4PmnAoqpN22iA7L5JpLC8VidPGAGYYb2z4N5xwuyp9Je848BdMMhU7gHpiNkZtVF2DFAaKNfbjDsLxVT",
  "key3": "hSuzYQeojbWMyFeZj6SS3zwqYq84cEvKMhPtWcU3fXGMSoaQtQEFxhum92UJH3e8JzhkZdr8RCUPdm4ByM4PHnu",
  "key4": "4RgKNWr5inX3J9uFL4utxuLHSRyNQrZs8iyZsKEB2hwH11vF1tuArBwYJ6kbho5N4NG9c7RfoBA7Nt5QKxpgjpMY",
  "key5": "5XrfNfhcLSRF6AjmfACCnN8DxoWrK1M48zkBdqxoWtAbpuAjh5MJPhSGdicdwmsVUD4PWsXyyhJ5LZGVxutoPTPd",
  "key6": "42BwLddUFoz9y2kvHA9oBfGxjzpyTPG3bfdRYM7QcVnaNZTcqCMnK6FXi6XioEaknfJyYKM5dczbgU36eFCTmeA8",
  "key7": "4tN9F6CHmxvK3mrahk7QfD9wwbAYd2Wj7vSAtx2jKmW9TWpRKDtVz58rznrAQkpV8eLt9s4b9kcBqgoXzcrtZDUL",
  "key8": "2JuMt7khWTCorkVx2BS9FHxJyEcbseeDSAFEcnWNeFUaVDsU3dna8JeJdYDDuagpSEzkcA2A4K8MYFeQ9Nt4zhvY",
  "key9": "3Bgi7nX6stzNXdCuMbt4qRmo51MiWLYEMbRQgnuAdetdr8ZgWBQGtBBecpFrr44ey5CXX1nNAHGP7C5kEhTdqAHM",
  "key10": "52mNK5bha4ukozaonkzftVJ9NbNRL4ZqLXP8PETS2pgq7h7qWPK4JWSzCsR5k8VULLCyB1x2o1moNo1oxyXhSAfW",
  "key11": "36qxgRAXXcRFHq2hxVtYRQHqWwFptgU45fysxqYMejtMMJ2vtjWBHtfJ2mjGaYyBYHELScBHe7cfM8jMqNXiyPQQ",
  "key12": "5yUd6PLKpcfJxNK3f9NzuSB5MbCQ67H6UwLQSm43qkSHdYFF4YrVGgGu7JSSCQnGLquNkvV58h2y4JUMMMtqp5Sx",
  "key13": "4MSTDL7JFYrUtCT5Ef3y15Ngx1NC8DaQo78ti2BXbd4MgycacHSaQexQE25iPXGgsEaLfvgCc9PStH5b1aGCadBd",
  "key14": "2DSQ17MDyrJibZb3ds5Th5Aceobj1PNs9CZKSCDce5wVzocxRY5QRZ9Lw7mDRYrbe9ytH5PQ8J8Zf5Pf2WqtLY2L",
  "key15": "48mdTBWrfnjNHmQTKpn2HwQjfRmmQ2gDFEdYiUJLfnATFiCSozEdh9bnotB7A7vKXTnqExhV54aUcmRnza2612LG",
  "key16": "JcrA1aDxLA2EEXfoZ7x15wM1okw1Qx4s9YNLamvwijrri1uXBpsAfSZeazLpmZ21sEvBVq9XzrgeGRy2HH5f4S4",
  "key17": "3vMVcA7Re6WjhBKKC3qRUmjrBp4R6MzBYPFAx77chegowaErNSGah5Z2NmoZdAFgHEnJfce17DgBHCJriAFppCqA",
  "key18": "3KiUzd4mZUp9x1B61hL8mtZm4rZB95KzisRCBasiwYyZesDt7oDC3wi9SChumTfVZGjnj7MsVjbNpNCkb1MNq5LB",
  "key19": "5CURbGLPRA4WhBFCLNWXUyXu79yR1fqPgypgvYhNL4PW8i9NNPmGC4fVSJFJjtTn7Gw5hYJEqD2wwM1T4ccxE7fh",
  "key20": "2jg3698DH2RJxyLvyb4j3i9hqXnGES7deMizuUPCYDtEnNbEEwmTSycsUUW9fAMUrCsPC39khzzQ1snqdsrvhj81",
  "key21": "5oEDJDXU5BuqA4ECtDVfPCbnYkZLeJF2Drmas2MhokdpBBgnP4Cik2KGKbQga2jMazgjJL81XoZqReYrxhW38qjY",
  "key22": "4KKXMRPHPpMVZbU9ezsYYBsjLAAUr45DGMq1r75mVTKNQMP1DxXrVETo9v5RnGLXqEPPLkx2uCDWMWnwq1qcCXCL",
  "key23": "YFZEUgyZCeCZ3g9Gr3oqbqPwRUz7ZreGz9gAjRSjBamwavdwRLB9jpnY6ztposY8CCpi8vDtThkviAp1pe6h9FE",
  "key24": "2WDPNw5s8r3st5NwbiA6agokMQWDhG4Sp7YqXi5HEt5VJxiunXU9bijwJKD6kopZMt225TSh5iTp9gi67n9k9Eio",
  "key25": "5kfRTT8hmtxnafSViezb2MttAaA5HnfrhNQPL9TFSTcpMNmh4ghWFV3NmHsrJ5PHf39JbKU9x9UgmUmiKQSjWnuA",
  "key26": "4ikcaR9pF3abbqHzQKDDVudLZBggdqNYsKKXjmWGK7bs4XFhGS1sthc9SWcXBNT4W2SSMPJJonT38AKAm771sgsW",
  "key27": "2qckp3AYUo8JAguxTgrrGy5aMUtZvmzW9MGQPEXU9UeNXgRAyfJYFRczHfxvqjsLk65C3Zn6Zh3jJjWJSUQozVXg",
  "key28": "4Y1NxJB5KfjLURQFSh9rUr7WFGmZkjCnqpSF1AxmqVUb9tMgPGcLePNsj1n64pH3k3a3BXsQUY2T5KbGH5Kd6fey",
  "key29": "5oGU8cfdSKJXX5dMzA33DKhfVUX8QjTFhMXJtCMbZYsYBKa6kfNHr1jWJWWNMYb5txTSistaTQ48fzBR1G6LApt9"
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
