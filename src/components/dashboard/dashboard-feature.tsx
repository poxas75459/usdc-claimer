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
    "23E2YukWo4Tsd68sXKp9Uxf5PsavpE8tAvs7KW7PNZSCpoKWZ9kA1wqFiRwQRwXfpQicTd9VXJ7z434guMwBcGa1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EEyXiRq1VvFMX9PvLiP2qdiqsHgc5NvTsz6HqJ5wpD4tgaJbbVKyzEdpDyM2fSbSH5CLm7mv41NTdbUkkd52yBw",
  "key1": "3JCv9G4MiRQqYmvaaMmGR49jvHEhx5maV3diQFMTTVJWEsXR7kJ1iWicEyGqbB6cMthD91YC762X4sBZmoZDdp5x",
  "key2": "dpv3zg4MMJre76LEjCt6y4K8YKg2KSMCpYUZ6MHQBqDctvXxtxMaAByharCcwPKXj2FGQnwCGARSdb8sy5CQ81U",
  "key3": "2ai6LxJGLod5nt3QMhTkxb3DScUq5FnmAQMqyWmVmppVx3cbe9EKGMLMUYVpYYwCRPfHRwUEaUWZjti5a5astkXR",
  "key4": "3v535PExXhPRLonSVZWE4S2FEJUtqMqRzoNHxs3b7GDkuy2uoj8FK1mnJX94RnaUpGTGpvw7HKCqVJXAaPSSRxwj",
  "key5": "M3KaWucFq7mvxKHpoA69kNU12sNbtpzQJ2QjvaLFKBdnE9zz9tJyYxr7T2svgJ3qQP14v5HU2KWmYcpAKmSaUA1",
  "key6": "2CCmNKziV6gkqjJCyYErs1ed1a7RQkFsfWUBd4gRkMZRvkRDVX8bQzRu6RkzrX9KQdywELdkiF4hp8bEGWWDdv5y",
  "key7": "5P8nkP38JmXDmSG3BSCiKdKJWc8wvC5PW5a5i53aXvzR1a3QufvAut9u2yqpmTVZhvLBaa4vT3L45FAYCxYf5Dx7",
  "key8": "2XK9XENzt8YMLY8LKw76UnMFoKLc3yvEUZdb4Y2FnP3nmzEvgkDPPrUaWKhqUtpyuzWopzy8phuBHrhtp2Evm7wK",
  "key9": "3bfhBfqN2kdfLnufbmReyo9wggY7BuFrcVsgSezsYtPfGV9iywcuKFd12mf7DvVhxE51eRzLgtXHUjvijGz8B1yT",
  "key10": "2fpBP5FhHTJNx8yi5kjB4cD5fpjojPZ16ywqSJoq6s6mb7SiWYz8FzueTEUwCQeqhux5Y9EDKDfaX6N2aUV3UC3m",
  "key11": "361utTzhe4xfNJ1H6Q61pAjgMGicrbWZCDL2HV9DEp4tQJ9UiEqRCGB5mPEdmyzXnijmSvvavJ5AkUCNhNXTt7mY",
  "key12": "32PBFPvDbnkJn1ZKpywgPrA1JPDNkPEB72A2v8wcfQaLUCw4cy9Sm2QzmgoB9VfSATbn9yJdf4a5TpcdhVfZUG3u",
  "key13": "5EYZnxyj1226xW1Nw9LsiG54PrMEPi4y1G1tWnQwDDsK2tat2AEmn8TFAVYwoZWchDkBvGxCJcYRXuc8x4yPkXZZ",
  "key14": "4EWNBcBkH2L2s1iQ37p4ktqZX5PKC97Z7G1XEc7kUhbccZoDb3kjqmg9C2PVLGUkCnZZfvxSiHDjLCWDbPVVNa2f",
  "key15": "2D3uti1Q71MJb4bWcEtJPShESX2e2z8wA6tZxQ1VNqwyx1EJcsXb5jhBpaSQ9ShhpAko8PNd2Y93nvrDDH8VUeAT",
  "key16": "411PEtYKGEX91mCQzSYKzzEy69edi4xTXz6jhjRMGxecm5zonuehhMy1LVqKH7hDgVSVFuvusUUJmCUwCCLTRJSP",
  "key17": "3kLhhmJmsRP43pEN1EBDz8K4SHnuR8JgFvzdhAUMDborASa7cdNeefStkxPx2MoXLBJotJLQBSfrvQSTmqfATPG4",
  "key18": "3jYZuDh5HqtztAjGFxufGuYwkqsJ3EPziC4ju31JYCr6pgeF6XXqRRUpDiT6e8hbiZoxuEZC6e2aEgN6hgB1QPrm",
  "key19": "2NzJpVcmD3Cd3EPZXLrXtP7J9qSZkteo89jNFScoPa5H8d7bp2zEsHBpfqcS5Mu57xybGzsnXsJvLbQYLEvLoXtS",
  "key20": "7yRzXKGCKFDHWJD1dLU4PrFMJe1Qkby2ULq1sfCpsJrBwkeyH3ngXDdkWNSVvPLeF3xXRxrV7JAVVgiE8MtjUZS",
  "key21": "4DAYaio1Huzs6UXf9oRfHqFr4szB2PzEHSzvsvcy1PevrmSsYaMoZQhPh3QacDq8peXMQJjzEqPL16riLASwwcFn",
  "key22": "qtcL2eoXLKe7ckDmaL7fKqfcd3oHJDcndHBfPDMu2bVk1qoYAszTXFRRTHJi47ks95nxzCTRPKf7b3fBgUT8KXQ",
  "key23": "59CNNC1nLBbEzyZNg2ha3j1QwBMbacSi6JGv9iAitmjcrcvQuk7DwyCGghBbrbR65K336E2kjPdWCAQLwfiGuGRJ",
  "key24": "5NHcr7F77VmzEiSwwFFfjhGYnMUPEKiNynmeVvMXX2tvekiwTsuHd6yHkxEzipF8WCrListDfX4PTFAYERJsC3fU",
  "key25": "2vTycErGBADYbQveREQeg5u28QUwy79cF1bPmmjTkE6cyVCD2KHTspd5zqMdVDNCWNcNGy7YGJa316YZLknqFf4W",
  "key26": "5M8WY1vGdYV4q2NpDn9yemJjGQKsZiMMTQ5LyaZZG3Wds2dXfLGbBQcs52RYimVwhUpCe9LjtCNMJGxp9tuLjKuY",
  "key27": "3jc78tbxL4o32tKijn4gyvNVcHnKw6vmXubU2NrZJmqGVFwu3V2owDArrvdfws3JSodsazRyfnCHw6JJBh55skez",
  "key28": "4Cq4Naqbeh5YxNcvMA9xWqDmFuguLVsekqJ7L6F7UJTymUsVWiNUAjJTXS5SCYpHVC7AR8kyHefTB4qDzvhvYMZq",
  "key29": "3u2KV7ks7c268TKVE22EbKHJmCatsi1JaTmhH64BZZqyRLvtVvoQkxVbqSL94CZEeJAsVdvs6pW3uYjN9a8exaVw",
  "key30": "3WmmYGrpsruMW58EJ1EQbyUfwFF8D5Enz7nwvvZGf49ysVE29yJ65BgpCPjW4UckkcVEyhf3SQVFQWs9fqDsRqWh",
  "key31": "4ALpDk6fpa7BrY5HgfPQV1eHpYQkDNbUm82o6gVyi3RHt9xZn57Ukz5DGuzZDn37M7Br4QaEfyuZiVHL4giNXNRR"
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
