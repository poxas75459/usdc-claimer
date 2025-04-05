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
    "PXnpUWoFGmnJq8mxgyNnaECAJ9t92w3Dv7P5kHLxswJNmRzNenhkguSccsYQxrxDuS3uuNNPoV2Vx7dY1qbgTDw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "V5pskSD7c5zFg4Ptt7iJfjQExVB7B3yrPfcJ5Tpmwnv3EwKrCqagdGkCQMe8yJHLs3eDCT8i7s2q7bqHXkJ53gR",
  "key1": "WGJHSpVoLxHAoB79q3CWsogwL9NAo23VTqqzS7p4oLwrKMrxd3hqp6CY9FUyGPwUqAYyKSSv1CH9PsU4aNkqDiz",
  "key2": "2fc5Dag6a7N73WzdRVN6nxy2Kf7HsrjkKJVgRkqogryJTtzhUoV5L4SRpLfL2PJLuHgeyKRzwynFKygydNarvf1P",
  "key3": "J65J73eX5iA3LjaJeSLCxPZWZh8BTM59bNq1rc2TqYrK5uVg73VRekmHnBx45qMQjZdCWKSvHxpdozw53BdHNha",
  "key4": "5NyAAMoKp2keEqFP3tviNLfPivBtNPCVKPCwp55tSxbxJ2TbRYCXALLseT5MdEiyzcXKZ5cbpBz5DSFJGN3cCxc9",
  "key5": "2crqpBvLNukcT5CUfW91TQv1kosGybfjLDaKAjaH7stq3PCAtiv65jgNKNAgBAYMy2G81eCkbg6a6yxC9nr5LA4Y",
  "key6": "2s6fESY1ckCspTGkQM1DtwzHWANSdfQDRTU7FjmmAQX9m8tVKzozR66zYd1zE6ahxpTu7Lzj8qUSf76dUDyfRQgW",
  "key7": "2ZfQF6t3nAUqR5AS2XCp9Lrv8ZKEGWgd8USqPqC24VZpiDj7cbTGwNU4P8Smnawh3T1e7rfdKvm8QQhyuw4JbNs1",
  "key8": "3ezaaiLVQ8kTxExeBnxqTV96xrAjQFwaG4Gh5u3VwrnMjLEysqghQVYzuKJzvNYcpMNqnAEercTN1q1f7iYiUhZU",
  "key9": "36KG9TNH9CHgDBQTby6KxFXDsfzta5CHnqU6jzCuJyNQUJS8DktP5iCByggdJA3itKDHBGi3axgXXD5XYtGKePzX",
  "key10": "3WPCC1y566j4yH9V8b6tggry9hMsPAEp1B1Bg4BZZrzAFNg5B4bQGtMWTiuT6ztHQgXi5cEY1PmtSFwsPQYtg6JQ",
  "key11": "55Vekwf1NGBPpbNg7MgBrR82nkW1DAJYWxMxzpEDMQ3LRPthvMcxvNou2q7PRvkUCMsuQyyjWHMLitXykqdnA6NV",
  "key12": "2o7UnV8JGRQSGasRPCmR16SZZKJxD69W5ZQEHwpC2DJ1uSR7PjfGXXJgjoZv1n6fnHVoz6R8MeHAWKEjhkx2ZmwL",
  "key13": "5HHoMTVg861GDCUD97xUjKGc9BpyoYwKZ7Q8tLpoGtuAyxC9QA7bc3LjYtB9ef7BG8jLLoMTtMWiuVHLBUWZYZBQ",
  "key14": "5oy2DVeiHtBa6ntHcVFfyRaTcHkht7P7cm9hmHb5tEJSMWdW1dGXpKKQoj7T2D86ZqR7mxdNit4Hthg5Xz6JiASp",
  "key15": "4vGLZ6PUJjuWwQ1J4jixTSQdQa7A4bx2M9vjPymJUXGwf7BP78Gbo85kTxbS2yHve7x5yPKkWVnGYmfEX7jVpk4E",
  "key16": "2kW2b2814uXnwRs2fLvf6K5M2f1Rr2pwafWNsx2okjB2Ds1JRQRd2Y7o55d21rNLN4RJXrwD3Qsm5LVLhcEpYZtY",
  "key17": "2xGQCJEw39gU42pn32pTwEj4pme173mBw8ET785T3N9cnCRHr7mAUXD9nEEEDmbaqA1KLz8jmCGWnpJq6HSqzcJv",
  "key18": "4JhBKaVaYXhHsEsjLcxaFaBrSAQtVr5PsmqoamwRnSkcc1K9yqsecsjnBFqrwdTUddfeFQptykuxBFfw2LJ6WcFL",
  "key19": "2mALCezWBNxg8Td9T1nzMsUPepnCTSK2xcYaEfyvNx9NREAZYh3EbgenqqFKjq9MsZNLKnMuZbbjUzPJoUggEYay",
  "key20": "3bxhqMEY7fsWMcqm4szXWZsUzBXi569JHbenPg7kYLWZ8UYwaLT4zgQVkKUj1d4hT2CahJzwqMVVERHJs4gAtrKa",
  "key21": "4wj2EdD6hoSrBEMmHvnpdbMWy5pAeio319wVTwDv7jfmn1ZSKguMTSTdAh66LbbgqFcj3oNKvv2UdU3LwiWeZNKA",
  "key22": "5CT2UmyF1xwTygT2MBdvoZFse4VyyPVYAaHAHfFX3nd4gwmiSU8zyvFdnV2BXVrYifRw27fARGquxMizsJcopMun",
  "key23": "58VzonnkaYPNo9BW35sNZB6JmH9Ux9Yz144si3nvmXjnAQvtMRLdmTjtWSh3a5Vk7zYBZyw68haaYkqHdm6aVu3f",
  "key24": "56N7ewUL8mct4ijpcDhHgeP3aESFte9fdzLXCraBQRCriufEF2idpp5Q3NiQay89y9d8TiETKHshWK83EcT1oXT3",
  "key25": "51oBAszXMsvVBK131TPnvipHnqyHt8wuvHNU3dDLkPM1cBEnhd2gXg7nVq5pawUK2VxkN3uLwbTr1UHyB5xnAHKo",
  "key26": "aUuvtZp1psZCrzFUfX3KwKeEWZ4ZxKe6UcUmLrpsp94nzSu6jjhFY4TAcZ6ku3J1jPxh31FHWbqT9dsd8tXAxDB",
  "key27": "4kbmDD2ZgRVPbMr7MdvMqBHLsvFquCj5GcsC5TmTK79uL2uDyAt1vMsJUn2gDxQVjYtxnCTLJeHtVY63KUBSCbtE",
  "key28": "4tUaPRcPVYabHfh88sQdjidsPEDEhemFXkF7wFRzNYouz6AFTD83RSFzqzQ68Ldz4LDJiixBeErwdCt3jeQDLRZj",
  "key29": "EQxemP3o24Gx4BK4iUpKrUh6wGkvagH8VY8uSpLuCQGgQupFk1SdXyDEJS2FwGsTTZDBsgf8n8547ZWkV4op12c",
  "key30": "5PU1SaePmLjxh5JaF7pnzy7UhfLxHb4S76EL82PZ3eYs8EEaevkjFcLboDFTcRn4ELcL17QAm1UYXu3xJfWdQGyR",
  "key31": "2US2QRfL5jA1p8T2rKJD9tXSSstguTyAPjQQiMaVAF7QByFcU12q5AUEeV9mKEkhuBz6S2zPk55FeisYZVHTHvHS"
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
