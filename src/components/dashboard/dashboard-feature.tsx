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
    "29W9nTSVcLJgu6YdUuie2dKQatszrDrEKCR6QGgUM1uDUggDd1ntPDLxeprBYWwmPrrX8rS4D3RTfKdwT6XJGMP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SaVJcvVvBVgd4zpmPHcSxWsBnsRetmPrEGAFfxcXB4Z5PyrUcBVE4x3rwcpZ9JJgBjSd3p6cPcajFzCHF3nCB75",
  "key1": "kztAPkvt1sKAQTSfvnSTVhS3CUgWd7oU2azqaPs9XHu3La2QTn1xK3sZ5vgTbtWcn2q9vhyfbjW1uWCrSs6xSdr",
  "key2": "559tzhRVVy4muZ1sg9mgfgTAS4g1ojmAhDZCiL22XWu7zobbSXaNaAybBkHPv6AyKb2zhjnn3QpMGPNTP8142YgY",
  "key3": "4wiZ4UFjZbcSdcZFukFNmNqLTKzc7R8MqxeJohDhDWTA1CxGCr1HWDapG5GK58R3imRM3sV797jUxDiNVdaXsa2J",
  "key4": "29nG73ayBbnd7qsEGDkBvVENfLnEcmEq5jBkcqmKnc41fs4QurV471rrkV4LRHjr7Htd4jGfMzmP7dtMnn1HLFhQ",
  "key5": "3MrqP633THxGLqRUSwx1j6nPE4tUJtNniFfDqzeBFAbTBX3RzsJyTrhqsiQp1J6UAPJsYksUZfM3U6n6i91iEmUV",
  "key6": "3gVXjTYr3naSMEGPueRMtSaU9j6GTKgndVSx5pKfo3JvYLjoABrP5ysvo3BgypPQggc731DDjPTV2jD4hnQnpvtY",
  "key7": "5jjDudo9BsXpEeCmtvYBVSUrxsLRnkWaexY4ajP84Gj78YB8T3RHyyVCXGS51r5GpMSbe7NVvjYLzeAGKUUuKTdb",
  "key8": "3W29uKedgW8uWP6DyDXuR8mUHNVrK4JHsWLUVRJYX6q6CyikLFjAvPobn5rPXMusfCWmhTguntPPzHz5Q7MU13K7",
  "key9": "24qCwJLJzXEETj3Rmc1RYXsHhAsSXEQYZkuhvYwjZvWPgsaPzhN4QRZYPDit1fty2jFkQxgHgGKFSkFMiaDS2L2R",
  "key10": "5kaurS3jfhijiHchRSU9aTu314FM91TKBrUjC66KiYYeQwALwWNWGtMcrjWETbctun63fxKrXXgRw8AdgsyuZ4mU",
  "key11": "4ZZNmrHgHLLxA3ESQfc3vnRghyBGgMjGQqoR4kx2ie9ynUqBjvQazquZx8zfVDgkSVkn2kEkV4HCjfUpjVusuXqZ",
  "key12": "5criyqFhT6ZUWRuQvpDupLkoy72HhQ2GbvQfcmeDVZFwoQV8hxMPcKztneSu5cHzuz5iFzV4hUTqdwnAT5zUJVso",
  "key13": "4V73QTLjzybt4Au3uoGfiAXWgWdYzcCVApRyoTXWdyCb7hZMyho66hZ5bJuqKMYazbhUzuetwzVBQjci6whf52dB",
  "key14": "4ikSaNSBnhVsMiKe7jSU49Zz8g2wWQAwFuVDYxqFhmRpwAQzKiNdcW9EGEjSSeDheKX9A3xyb2waMLAaAxfaMzvY",
  "key15": "2JNyePnXoRX9nni335zsknZ4ZPW1arPCRB9hKyihJ8KdGHqh3p3Tw5S4o5pVSgnrgZZQgZujqbhaPKnCLCGuezyR",
  "key16": "2vkWbSTfZppogyZ9w6fdJbpE7kzNbaVoPdFZo89Tmor9aQXuWdJoL6nMVfiz2y1JPquTsT8ro9rfuEmyC77EF4A9",
  "key17": "5iL95Seri73SwKMUrKgP8VpN5aK6ue5EyGMuW5SqEdxHh5d39RA6Vu3BqpghftHrQvKpd95WBJ66jqtNrtHYeJi1",
  "key18": "3c7e2XnhGguCdz5bmn5KTHEA2MNV8Do2mXgUQ548NEWAPj2f1m7p8b3StwzXMXhqNB5HADdtbw9UGFy2PF8Aw8o9",
  "key19": "2ivvkGd1hv2UfukM13exzctPpsM8Vvo5YJp1sEVHTxk1P5GTJ1XTKGpqdn9kuLwGejHxpQJKujToF2pG9u1JDrcU",
  "key20": "4C4MKcPJapwUmfYMGnTkSQcuZDWZPequeL2pGxyJydjHMeKALFiWcYHWSZyDbDJqFkc7u4rECTmjy2fQJUgYGMLS",
  "key21": "3qLMSx1jwhTaFayB8TGcC6Ty6fnzD61vap6UJhFh6VmexTxtnJjp4GsjEahHcdfGdFmbrxjg8pa9pCyxZLbnhR8Q",
  "key22": "4WafhPFCzEqh3XW48eP4TCRuiHRPfosApy91BZb3ScLquZfHLRmeTLFqBuj1HKcyDnH1g7s9GmmYFE8uqC8d5R5M",
  "key23": "aM97tZ5jbMN4zGdUmTZUARxyPyomu5sCh3nW4he7LPFodfVtkAk9nLabLsPWMvB1gowpe1naXPZLLgrTJH5YtA4",
  "key24": "56RPHV8YbEUafnPAR9D3CrbYqzUBTQYAKQb7Wg1tnR3BEWgpizBS7WrWEpDpBQFZXYXzP3KJGqGa8WXErCvwRx1z",
  "key25": "2g3jDvDkBUhWSCEJupRhQ4BdxWLac1cHuURkmo36RUusunjqANZNiN7jc3H2hBtZyApmx5TfspxgWhQRUWSrP6Fj",
  "key26": "4f2pMW242YMMQj59qh3sHz1aumtVp9rgqgm8jsoZoYGp6DEW1YwUMNyRpC864a4EPpfVV4tqAuNbvZ3Ru6JEr4aQ",
  "key27": "5KDY1N47UqZztNo73jWixv2b5dahox5oc8qasgAetes2v9ZGXoiASgruR4YKkWGxU2XFPkJjxR6UT5fxX7ApoWih",
  "key28": "24WFKJFFqt4shUVeVsManpDPWr6T5XiTjah3XkA6fC86zwTXGC4BLdXnQzGsT9rsJBKWU15N49jvtajKzt2FoC8q",
  "key29": "3en8Z3xNK7QSapbEU98UibFFsQEUcBQhxquVJpnpYyCj1zJyjaw2QDyDd4E64FtpvEYrUn5cy116FRLQqPVtttnB",
  "key30": "z3A1QcQ8LsCphyFTyc4VEcNC62sCpkgoeQeC2jFj6L5g6fEvoKbCgHBF4mApATU3ijY79hdAp5hdzjtgi9tUvDr"
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
