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
    "4J7FdxxSgeQ67yo6VhPaSth5LX6tH9auXqmF2tu53FMGyLTLUULEh9Y2PRjNx5SfWa5xgRgXq9PnZFE34KwmWC3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tge6cELPzx9PXnWN5MHr1JfAv1sigu4BBxhMere4rW1H3KDpGaaFNBoMT8L683EGo5KaTg8H2nB2vfe7FsXmXG3",
  "key1": "5ke2kwynFeodjfrSmU5WcS8dGKECnXLMfgpr6kescFKXisogbotx5jtzwBiLas65qPrgarmWQA6BXrXeb6SimitE",
  "key2": "2322Fh8huHL8pV9cpMWZnaYtS6zaTdh94RecXqd9JEuQyYBrpkrFv5M3V9QBkAoVanJFt7nJibZzgb4cKkzKq5r2",
  "key3": "dNLq1A1HEV69eyrC5Xxk1SgJZnq7x979JGGXcf6cJdymRPS3D7h14ALGqgVzydEJHh62gMiHyFbDs32vft8mnR8",
  "key4": "4NTya1ijrptftoppFTyeHC15sYjf5SkGZSmB9aXsyKsCqBuu72U7CGXYoBbus81fgf34B7qhB1B8bQsQZSJP29wZ",
  "key5": "2Db7qweBtgLJfyr7vHGw9CVBuoy486GdLJikxeKg5NFCRkzEXtKSfWYByFwyDVuRiT4Kr9Rj79HPbJhMoa6VTX5p",
  "key6": "2oserEE9288LPJo4w2TRV7dYc5hLbwLCoagttD6URWDJLqG5F98uiJAF17XtwwjTnMSKjReHnUTbng73cBZmPEGx",
  "key7": "5Lfjkniv9egkPyyuXuWok8o9fdXhmhukWoomjjQTTkizoGHckh43h8tSXjc9wg8oEfRTF3B2MLUaJoeJVJKNgKnG",
  "key8": "5xSZWPNHTKZ8qsrc3ahRh6b24vHzZvRUTekTZwkSL16FHhV42X6ryM9DL36xZVzN9YCgMJVgSveyjNmEZcunCasH",
  "key9": "5Y4bLUdjJkqL4ftKxcJyCirBGEqKxcsaGfqVmpUKE7GZKD9tDqWJbbTgGQ1jmQuSij4NmgNVYf2gk7x2mj22jrGo",
  "key10": "Vxvi7eEHCkvvyHij5bQpAousQChTLPLzbfjQL1D3PpDx21FfpN1mK48HeEwk7Mer7toc92SBJtgsw1KLcuz2Pcr",
  "key11": "4HJbyF58kDkvfYAnqqoGFSc6wng421spxpqM5qWpsTctVouYpUDaL5sMjJmJ9LnmSP38TbVTQUhWvbqrXMBqVRVC",
  "key12": "y6bLkcU8iNpTRuk99n27aAZxzva5Y7TcDzpnmvLnkLSSndvV3LzSaABphVhPqmHEGKwa5vbjHYn77MRrRpZRY3N",
  "key13": "28twFZXNhUpCR1Mwr3VYYVbwPaYcQyoc4gymhKnLFcFofqHR48YLfYf1dq3BN6fvSEq8xcGfBp9odpDPPNy9EfCB",
  "key14": "2k7fwjkGs2R8ery7KEBhNNCTiLSXwugiBHUGm3ja8rnM7paM9WiPLUipx5JffF4Br6yg6YidRwc94vuritKRFxZT",
  "key15": "4k6xUEApnjdxS3TdnDZFiyg1um6nj9wPnQX6nDazyduKhFEbXgjc2qEEhqMq8QBoXLxj6C14RhHhWNfMgADTzPhg",
  "key16": "5tdHC3SRWBbdv7MEnZzy3CGt9R2CgyfUUgEsJHq8fVbDJSjYabdNrqH1ACmdMpwYX9t9Q9T6HjzSgkuy9RWP9PYK",
  "key17": "2Z7hTEan5whPU8hBbGSBEERUg6QYn5HSqZdxshLky6U79kY1gcsiDdUZge256s8rr1A7biZ4ucHW9gH8V6qrHsyJ",
  "key18": "51R71ZJxYnPCKaiNcLzqroPKMEESDrUaveYVB3K9VN5oG8obRGWY4xTEiDnwKLv7rHgZD9iKahzB53wDURqoq2cQ",
  "key19": "3vgfffBJkysZkmC8GGTThKHYbMyvoLdP97Q7cYtp9LiVcby2Boe1KynCySHQr6uA5pmKnZveTaBvz8cKp8MCcrqV",
  "key20": "3QE58WgUKJp8tdNWffB3W3KQ3mFRg4Pi7n7VkzK9uZAKeP24VDzURATmpjNhuMuz4dULkgof3UpU4AuCJKuv1AVg",
  "key21": "5Abz4RJKp6f3T47jg9NUj273K61BGqvGXFceFBQwU5biLtytATTYvTpDRiLWrENT18HQJzoLuvhLcocw2eA5npfS",
  "key22": "63dvpmqjuga73Y8N1ABnzsXVi8uD4hD5vYxhvTWiRxENovrsBXRin3FBVBgsHVU6NN2y6reYamm1AxpauCqYry13",
  "key23": "34xS44Hw63fxF8ViVsP19ytCCEEQoWqPMsvy8ak9BzuBW7xDPtuGW5tGWbRZbnEvmurvvL2SXSDA6t6TziybvJd2",
  "key24": "2FiBWYynnXJGk2EXrrRwJgL8KD1EDMJsgAWGeH8bZz4eVT3y1DCZkWcm7DSwcjU59d2U7GVYWkStNPiyaZ2fnqZc",
  "key25": "4HUg9ShboS48qAwbn88Kzpguiypzw7dKweWqLXS6GDcDoCg7BZcnQ1s6KXMBWbRQSfiGbVANxtDUqSMBRSdLLyGN",
  "key26": "5mqwxT4tZVGXbvZcsimwa1eqPiG2ngqUDpqN6hZn6MykapqwVUMhgerUX7AGbMepE5qk3Kdf1tTQwe6yhgYymKvu",
  "key27": "3VjxeJXJNg9xpe2zjJBEVHJpfuLfESB1uEB8nGZNgKeMU2ABg8voTQnrQg1BFLGmNpEeMaTu9spjgVWrMsxEZjLr",
  "key28": "4F5sdnhX3jZdhaQ83u722TLAhW1NyPQpoJUgsS6CVUWd7G2Nia9M98HisnLUZH42iLmGwSaAE8eyKeyFUqk7fG5G",
  "key29": "34PnN1N6ABAvcb3HnQoePiEFfATuqipMWTxwarRAYhAj7TYE1oTSRgeU9KKZvZFttLnMUYWfT8fhZ8cpwe72Bgc5",
  "key30": "4WRzEDCrvnaXicv4zAVvvedhXUhBLz7naRuhUfesaLWmoAVK6k11fD9FJuqNeooEojui9WSbwJPvwTgWYokxu4pp",
  "key31": "539WXDZrCajggFo7VF7eqg2U1pqGrEXRoa9ntas7JrwmVFr8f76cnBb5JxTnWm9s3sNS1MWMjpWxK7UR8oSxTvc3"
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
