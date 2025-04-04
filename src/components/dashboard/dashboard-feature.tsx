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
    "5wTzXvV73yAHsXvhdF8AEXHCRE8WZyHHpcT99a7oHtqrNDG2wrFn26r71fu7tkjecpbxu6Pn9k2htnSPKy8Y8buU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3g25t6gz3JBPmK6AtsvooDvhrXkDUompL4HkBFYoeqKRMFpSq3d7wavh2KLedoFsaQVwrjasnzrogdngXoo7kZzV",
  "key1": "2hdYv8CtzpPCWsRqLGsmXTtkHh6hSC2cj5eiwznuvyQ5gP1Zg6AEfiZtMVyJhYjZbt7QbmAnVfV9UctMerhB4ezJ",
  "key2": "5P99NYKJxmKSmcVrNgCKpza8CTQR8AQWyLdiE4hwBxquWrzDu3KhqRcDA828PocsejLhxFto85G169ycFSgsKARf",
  "key3": "3jP79Gzr3xYobVWTSrMLQ2kUWuuzpKLFpMQTfowMtngN2SMivA7dykS8ecJRgmo2PafAKTixvsPavAx4KjExJn5L",
  "key4": "3HVeMtLMntXanbodkUfNfcKkTLNBcUcGRoVxHqtF3xfy38X5nMwoAJBis8mGCGZAH3rhnE5EYDfcAqYduSZgqEuv",
  "key5": "3PZ5fwmgBjY7fdQ1vJfit1EaNc4nRvMddKfmuERyMh6MN7CcVU73jmFEfMzukEfi5fvQUBNHYaoB9pkacZ5AsVwu",
  "key6": "29CcFDByrg3Kw4yGetznGZ9Y1mkp7iSDazUPpDfX7btmQGrxsAYKbhqMSVfch65fuqoimYANPvnqsxV1An9NBkpH",
  "key7": "21344BwTUBBE85rWM2MLPAPKAzwyR3WkZpCy8SrLXpeeqwKEfVvJzqkEnVywfuTqUA4PfTaYti4jqaPD49QAttcn",
  "key8": "33RY5wGvxXFcL5Y9CcW4176HjzpXoEU7V1UoueYGhEh2hSuWFdD5BFEES76a2CZzSaFUHU33ph868bKGaybZBXJ7",
  "key9": "4279EP1zXKUVvbK6jAESiUNXiiFEHeurdv3o89UnL7dpNgxjq3bebnPpizbJ8CEeTrEKpoZmUrxSnupXHv8uLWvi",
  "key10": "5PDQX1NWGsLN2snnphpGkNMvviQCwZX5E4jJcpZ2XDMcBiJ48NyDWohrKw76HhfNVqpmpfSRXKEt5yRSLvm8d1gt",
  "key11": "3TXMiyvvipERuqEtffYgUnojac8DbAGmcbVWXChBTidBKq28dz9txF3cidnqxfufy8EqNUZyDwGRNJUBfw4tJYy6",
  "key12": "5vL1Viwp45eS6A1t176txBMQ37dU3bdYoVs6PGNBSwVPgqTkH18yFhG6Yyxkyrxvnjyjgpm9rZQprJBBSRXxFfyu",
  "key13": "12xkf5Gn1egkjYEQfMpgDd7VtMuVGBuZG1T1grDBMJb7LNNAbNtXMd2BTmZ3iLwku2TYuhT8yfag8P4y4KT1Gpr",
  "key14": "2PVUFAwt1u1HMFX4fryk93VXHHEsoGaTVo3x3ym1ANXhBW4JQpkcWF3NArbd6QEGpM3G259U79mA853HoWE6wghS",
  "key15": "31PkExFsfEpZtsjB5tv9tc285mwn1dq6d8LYcanJM8MrNBbs6g8HjbBN4fuH8yq7WmffPK285e7adWFmMhU3SNgf",
  "key16": "3pRVSLHTmydkP3nrUPjuk4qQQGFRqdRegrwQ7oY8rA7raF5h2XZumamzpo7Z17c3KHxQJjaU7JyAhVgDewzrdjB4",
  "key17": "2YW23KNv8w77CGZSwUAXQiag4wvSCALkfPSPPnsU9d6p8n3pm5iFMiDyYrHV7hfiesjPM8vbnnyGveBM19wbG5GP",
  "key18": "5yN6e9QryR5VpowJnBuASVYi9acvSgzcmQ1Y1hxYMczCSQ5G1YEYmhUKsQcwPhzgEMj4mhGF7QyyVPqjfnJNrw2C",
  "key19": "4nhmJSZ1J58YDKD6W9vBpBD6zAaz1o6iuNz85WY5mLXa9gUzhwzwpdRT4Mi56HrZz4U1QmUBrazULXye2ZrMv1f3",
  "key20": "3i1TNN64LTvdwBh5ycsntc7HNmvsMGJxEcF3ewKMfCMonr8jNmtgnP5AYDFeY2NuY8iFLfbUGVCLPE5HyHCjtYKz",
  "key21": "2uVYADipuRTbiDvZfvJGXyUpcU6iW63AFtS8zN2CPun5da9NJM1b1WfP9gRYzzQbZ1VoPm19KcePkJFvabp67GTP",
  "key22": "3wMJhbqmQihsf42aoGSFkEQNU8QqS4tBw3pxEkYzX5cBgYBoFSfxCv2XeUxrV5g3QuHpXPWPZQbV9YzatHbmeSct",
  "key23": "KxyWhX9TR2bNrKjjqo95dSPaaWHibUXsDgbr4jpdbvPwcm3B6P9BmPcvAXrh59ryMPd3L75XxohkcgYnjtVjDzX",
  "key24": "u9AFKc6ADYqsrBKeRKZ7nKCySbXyVVmWoeZM6ZH261BU7TXjpFpNHCNZzxLQw35fKFmrTypeXDK8tE6QoVpUizs",
  "key25": "5hcb8hMJy5SdNiTcm119o7vuCvo7EPc3LWyD8mkDsE723UP3LGVAPRFN82ctJNjyHWJep5v5tTubUFfjQGE8R893",
  "key26": "7b5AxkSRUp5RXACZzd5Swc2VEcNzQN2ZPABCYchwgRX8SHSc3FLsXR7uE9LJSFqXgHQbPM2J1pK9JCVYzhSrtpo",
  "key27": "Y1DwdkLDGQgGJCHeMichP4va9kELQPAvc5kiw9mb7eeDEu9q6EnHEvqjMr7nDXBLNPk7s1fQgAJmfHwNMgxt4fW",
  "key28": "5jP815rUFsZKLpoaVtj3cJuEjbbJ9qsYLC4bo62adGoMJqaky99mu6d699p2nXL2RvvgUmxK5MeSu3tdNEHDATHa",
  "key29": "217CjMpauxxppPpHicYr5fEdxEZt7tezphECpa1dr2n1ZSS1xTVzRLpNgdnWWm14cpuqqnXe7n3DBvQcuQYXk3Ub",
  "key30": "3DPXrwpCRsfrxv3rHrA1MBea1Kbj94GFDRPaYK6onNA8kr3H7NdtgntpNhimxWj99TfQyfPXqkXAuGzprLVropfr",
  "key31": "3GPABhm4DPYFMZ8JXgd2epH8TproNJze6EtFWaFXj1xfyEjE1buceTUMdmFkzwvQRRmxcdjt6UsD1naNmTLNv2Mb",
  "key32": "635uBvuHdxiAVPiTDM2fA1CS4ggtdApDqRYNhQwbDbTG82NnUKno9hrafPy1x3i6B1GA9J9qdg1uGv9rSxrYWhKK"
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
