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
    "2WYUXarhd6eu6SNc6v3kXdodUWk7bBqZZ4eoSfMKvhAzwu1vy7MSrrfuFS5LpyMSysTK6ZM7WfbUdPkAZR5NHZoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EedUHXQVa3cexeayqFMLnZSGYiexTUqcSXz6dscyHr69bALATZoij5MPgY52KTe7vUUkFNVtbHdNoYP2wn7ixvm",
  "key1": "ECcLCip8NGYDEAA8K77qy134ZhcTpUFCBYi6iiPAgqRkEZLwPjzqTkHv6tdN4vZG6rLQn6au66Jbyh7egWoxnHP",
  "key2": "4utTzAT2H71rJw4BGg3V32j5c65kdAKV4Bg4VxKVLvaPayTiozVfpeyp8gUE4x7e1r9WCizPCgFyU7Aa992Kt3hF",
  "key3": "53zRjJkb1JQANfbkXorAq1z7Q4qrG2Nh2ee4E2zyVZR3gpPmCS4BsxDm4mgYQgkzi7XwnEgRq8t1vuFMp7Ld97kw",
  "key4": "4chLCGay7Le4vxHV8evrjq5zggvSPJ7y1nWTUJ3x4fVnKRnbRgM8W7UpnV3t5JQ4QmZk4CbFCZ67wQ48biXKVnnt",
  "key5": "42DJNvMGqCS3FkiNw1zw2hDiRaoXfHMLjuDabUH6e7CFP7ur2MUXNvQoNbLWASsjQTkHwLF8Zye1Tp7k7okLKgVP",
  "key6": "BeYiEhVxQ2wMsRnbnSHk6vKCA7VDVfpaWDDwShihPk4sitdSNj2bLXNxArVUpc4wRQ3FApnw2i6J8f8MRjN1i5X",
  "key7": "5myjrFd47AesLMuLEZ2JfBxr4aqeSmLNGJUFu44B897VwFQ8jNiMUBedsZXK7SaRKC39QvpfdRzRNrc1c3ja8Udh",
  "key8": "2TTynqEVmTbBfH2BAACzgyxYdh4yezo8Z4ckKtNVzGtv9VDAaHtqzjRBwWE9jH6eTJfhkMrGHNqHC78BLEVX4sw1",
  "key9": "4dnoHbMcQbHkLpzRCyg8CvQhBHrd1jqVWEX1h2JrLEie3dvyPzyEcW9ursZfadDaZGuH6Lrbnb8pir5QgJacjqdY",
  "key10": "LizkCN4Xboaq6k3tKmkH3dFAmhKAQ2fE9QkT21FFBNXHeBia8QjbHTzJAJtrjviP3xSBsiQtytHi9RU8qqaqJBi",
  "key11": "rgG6JbcHrPbgVZhiKkzCuScdCStJWTpL9pwXBQpqv7PP2xyyxsoKNFUik4anfwb7vw8VtGRXQASPvnV9PBLw27s",
  "key12": "U9Nu5rPzgtEmTqkUu9yFXtkay7YxGW7oqUZtCWP2tFC7TMjSfF8WpxHPem6WFtQhRQDAAy29Dr4Rr9YvdSEWGMt",
  "key13": "2Pe3DuUJhX1jWPfHE1yqr6RmXALEvvtK6vFkQibmt9N5JraqQAPqnKRrrf1ViSXw6PzwccQ4MQFhiHXL6ekQhxnJ",
  "key14": "5E8dLD1jqjtfr2tkfSmepgUer946TgyaKnucL8YRUaM7CoVF4MVM2nyCtZMHuDKsejV5iVZdfV6mpnvDEUqd1YZH",
  "key15": "5c9sqTp3kErzuT5rVDS75qBBrtpCAeXd9YecmzYYyVDqsGr12yhPcp5qxQXGYpRfgbyHyeFX1R7Ze9NwL8DCN4Ze",
  "key16": "hMir2neTFaweTuXS4UYiFBw3vSVq4A8rHkR6pSauuUGLKjiMuSNmiVsPzQK4v2r3PfVpfMb3uLedEYYJ6FuWjrR",
  "key17": "617B54LDEVpUFhnPnQHv5ANpGvbRCAFexkU9wRivVuZZ9igt2oJKK36pk5kKsirf3YS4u6by14zCBd8aE7wp81j3",
  "key18": "4o9HUCi3ZbduD8pXoiPGNN2imJcMURzrQRwoTZxuYCmSk2NwVDihbbDQpUgVyj2VezADn4DBuyZGg3bjKMwZD1gX",
  "key19": "5zLb5P9S2kvT6URaNAHMyffaVYec62aUGaqSxotb5t38wYW1dNxALqe3GBJNffGBWAA3WpSeHqWo83J8WQbwuq6F",
  "key20": "3QLP7X6jbhkhuSDqXmu7x8UWHHhjxuLnYCTMGctreAGVwSmWgR7aqeZ4FQyNuqtu5FS5w7drHUbjNaGejgYKNY2p",
  "key21": "3a59XpuQMvNcTyLb1vQdWXm7uYmZNdQF9LqjwPTsycSSFJ4kfpUgdJD6eSnK3qkKJF5AC6mttV3Tn6167kEM11TS",
  "key22": "hP3kr61vMMjmTfJjU499xUTDMd1KHGJtwCpuXvgNgA4FDNGjaM6ihDtrHq9jk2d8oXnqg6bixZYjf91PwwpAxMo",
  "key23": "62fjJ5yFw5wUM2KdRoQ79EvXPdLa7SK5B92obUpHPw2cDHUSxJxuVrzFKV2GJz4vMduPbM8d8bAUzJBp69csxzEy",
  "key24": "mddsvfe6RJAUxsPdLNkbj38sKtWfyBs47WqvgpWk7VoL4V4MUyx19DSzQoFNV4FtQnWuj1iSA81T7kjuF2AnHoi",
  "key25": "33acbutrUnycEh4yDqfmzRM13rNg69DiwyP5HeGjh6gbCHcPz19nNEqACddVc97JByftzoc84XVsdXQn2U2tKJZR",
  "key26": "4MbdzFHuXg9Fq9GCfnaexKVE1AchcAS6w4LK5i1WkAW5iFuBcvfUoMaqMpmys3VNacT5Nqx3VSs975nDhwdcjATT",
  "key27": "4pbHty6WbV87p9JhSBukcSh9mtC3VGBz5LhUr5FLLDb4QptWLwwLg1ueaVNo7fvtNKJ6m12bQhsL8BMfaiKPhYbH",
  "key28": "42XWUj91ge5jjSAADeQWBgqx9zAvCdRdE9b8oT7iUBMe2zoTf3exUX8RxUB2eAxjwrmcEPKKCS3ZXQ9z6yq4RL3f",
  "key29": "54SWZwvsWf4XyqtXNkMTaSU9Cg2kvtuZDSfAqLj8Tuz2p915VhFP1NhhjhsM3TEg5AozHs53yZRpBvzZqXPCQfSb",
  "key30": "3KJsJx6F4A4kX3dYv8qcZnTZeMPU5fPD4pchPbckdLuhJjfmFuDbSsecAArLdCdnJFSnLRxS9oDR3zVC6Dzd3tbM"
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
