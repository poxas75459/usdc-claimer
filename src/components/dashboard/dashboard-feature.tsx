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
    "4be3Pwnm26z2omBShKUi1Pc4dZ1RhTFTjGyeUkh49drh9ujJAAWNMzvyTLFbLBfHVLVgpqTvH9pPDseobKr3Bf9x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BJ3mpFyqR7EsoMgLAuNNBiMTJdZGFYSMBcfFWRxhkhCWWdSdwQFb6yfTu3Vs3tQvkLPmyqFWZ2VKsmJRnkFdaSy",
  "key1": "eHJHw47qg54gEyXCADSEo2xi3jFdvCbrreUEYAFCcD9EZZkHXn1ACQw8FrnbvC7hD3b93hSL77TFqVrxtKjLPgF",
  "key2": "2xyxwuZCktWAcDTiqNYguwpdLuZr1NHQ5i1gjUTbVt4dRrt7cC1jTMDxC924yjF17hMBffkezYeTKZjp6ZCPDfj9",
  "key3": "5YVCZeUaaJ3z6YRMNojE2fZgTCNeduPDdPHyeFrf3wr5C2tVAW8VLLo9HFTkg4oMTjuiHAf7pfq26YHgaynBwsiZ",
  "key4": "46NnjXhJ3pMUBJiGUb6hHEFKSZjKEeYNFJf3DDq6Cra8x8Za65Y3ssv51iZuueMN6qZW83HHK2BTuE3VzrNvQ3N9",
  "key5": "5YRNWFXDoQCugRzFN9g3MQnB76vhMXJWAz66zH9gsJQyYSkiPaKhHCpRAWouEXvKT68hxTQhQg8vmrHLvcSimNHZ",
  "key6": "4Tadtrfvc86KiFhSge4K3yiJnRvkrk4iaDQHPCXbTkpnffn5BrBpyVhjDis3EkFT6m5eot1vPFvgut2uDXtTmuu6",
  "key7": "cUfxWsTk3ichRLD3VCCYy79Z1usEiC1KdAWRFtmEdk2UuKHZxnCGV6pnzE9q1AgYkY8c6ZYyApidnjS3gDZwg3Q",
  "key8": "4YgXMvhT95BFU4PB2vojVjKbRNGhcWcQJAbYZzcSUCpSbQ3HMW3PWNKNTbgXZNeZCXB8Qx8sXatodTB6aMFKJCWM",
  "key9": "uoF6mx9dWcpv2sPm5Ac6ZKHKfFPUqjZQ2AtT3PV79yUsN7MUS5kLMzemEWJuxjME6eXTwfnN9dPhjkJf6wsQqJT",
  "key10": "1WE2TbwEuWmfC1Tj56SY3f5DsFJoq3EN2BC9XmyXxPh8mHB7WNhYPGHGXT1fFQpAfUZm957TdveNYpzG8MWGraY",
  "key11": "2GAnQS19suhQX31eBqRnhGAorHAoPV7o6qRLEVA3e5PxVoo5SzZShNqCBwQHPVgTsdXhWK84VEgDfxDtJpE8HvCs",
  "key12": "5ka2i3dMnDNzUVuR5n9rgTWHDGmpNUy3TLi16cj9UoSphiYAXxgWG2iLb793zoME88RewUtBiyCwPMDqfCtXpKWB",
  "key13": "65h9uzi4nMy1YfAa8ArAUWkvomJvW6M9x1gZXtBesDH4F8MoXqYYpDVQUsFuB6gKiFviK1kr3TbwLA6VK9nvxnQ4",
  "key14": "5UuUTiY4rEdnMUcD4SSNjULDaevTnC5anjL34kyphvDx2MUx46RfuuFFeuj5sroL8CbqBfSqRjvXnEmU2LqyEgk3",
  "key15": "4JC7cSEKXubQp5wtJDon5bmVqdxKPu6WKA6gcKHjSi9LZzgshbHHC3FjHoJRpszV5gkMZH7xDbtMo2cQXGefNEdi",
  "key16": "5wH9KSsa1tppGwmBGm8yH9rqCWRExDWLYWXPPkB7FWbrJpJxvPij2uzi2RBUS9hYYFnqF5b2Wg54eHBsvww3tVRg",
  "key17": "5FsPLJBhxFWEdLf1AeWNXp527So73f2ejusauJHcrr3PpXwHcXapqcP4wTUHLUYcsLhtNZkoKW4dBi9qwvCRAAfc",
  "key18": "3nY6WV7ED3WR8cJUKjzRm7HeqbyUx47knQV1WNb23wq26L5USQYdzEZNASxkwXMmiqTVrd2fn8j6jenewEPh2cu5",
  "key19": "mfKgHgQCGGyTo93QX6rKoJs11paSBAPyq5vTikt3Mydm5bQRPjcQSf2sBYHDKd6pQiW9oYhaZnpi5wPTaV5Brr6",
  "key20": "51WLjrRTXpBiJD38uBKQsvnvzw1LTxqPSysC9nS4mHf5KdQkJmTaeTKV8oFqAPYUwFCpVNyegEH3B2zVS2t28yhf",
  "key21": "2kkRxfo6nZmfEhLBtxZMa9BGJ7cK7PJts8F2FjRjVd7SBz9fEoZJ7vpvAJbHJfSwe4YB66Aqk1QCzav29SbqyZ9W",
  "key22": "4SJVoTgjYCHcK6Vumv5LCww5exsbVrMk4bPYk172kuSYVzbS2o1uonetAd2MNVELbjQrV84BAJLAygC7VxEQnPos",
  "key23": "mpitnmryssnnVMiekhSgYEx32woJ2NC3VTK2xDrweufmugc3KwiJ8myZiu2xc71hhBfKd1cLSfdEEDss3FpXWbf",
  "key24": "676wApMvhQeLVmoKdicFjegD8oDUNujDKxWPfiKj4ixJXk53atZ4defTDW5i2bVS4XdGjCPQfDCg57Aag52asPet",
  "key25": "51JqRX3YxGjSiVruWLkmrJnXrTtCyQc5FHTQLbo8BNQDMLKYDazzTCeFrGjD9e7NuHJ9w1SYbwfNSMeVf9JLQ1tU",
  "key26": "5rKk211NcmT2ipU5ofyb7vxd8jE3gRdcKwNNDSuVk3pJySzJa1NGw6ZT1oruL9vpMkFzdJtmupCa5iWF159b5kJn",
  "key27": "3ZDCPADnkHvZKHXkweQ3LDfNPFCiabwdHHSYFb1HjJw7EvqCJzD6J8SQ8FW4Fc1GWmjfp22sF62bSSav6LPPrW8G",
  "key28": "2yWjnjad14QY1a4ZLxHM7EbRZUwx42xunpZSPXtiWFeB9DNXfvQUqTzHJJytQtN7p2PiiquAcM4NWzzXSArD9j5w",
  "key29": "2M5F6GFVykaET83D15rBiiBdhRg1Z1QvTBYnHEyRWAYEi8FyUsq9wpNL3FPfPFntx8kCQqskYWytjP4LNY15jBE7",
  "key30": "3H9yNBzyNP7cEK2mLWHQR2M5G6C44CthwuFjBKM9cYpBMPDnHbxHzH18SutzbgHcyVf5KMFsRXwZ5bQERCfD6P7r",
  "key31": "AVniCwVYfGQTat1M6orN8PEDf2sD1BsXWszUDygsJPWyaTZm2kxwbrJcoZGbLzgJdMbB3Hvq59s8syFYHKpaPix",
  "key32": "4Fc3KXnMRL3JunrrZmAWNDfCffUo4jx7SHjmjH79hCjSXFMcF1eYEhgkw7pBYbhAZk9XEvMv2NE2jQKZTM6M6w1J",
  "key33": "5veK6oUamiJEec9obXZzCvAeZECpfYQhbs2VdsYkEcZX52kvUgHcAJy27GFJ5xzrYUYvfAR2tBrnrWvFs7ygWrkx",
  "key34": "3TiE5JCEJMX3X5aAnRmQsfYvDof2QVi2snrztNhyseZVNViSKEVKdTcStWpDuo5S6eaqc87tf6UuEiQp3KP1cnPy",
  "key35": "2ShKmR299e17MrSVaXVDNoqTvUMARgF6dka9XGjfU98PTReektmg9b2PHzy3hR1VBnPPmof3KfjBsBmbspuhgJXZ"
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
