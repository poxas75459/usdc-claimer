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
    "4mhcX9wdVGHbGLFXnzGT2Av6HBbFuDGq5BsrEnzMqGFxkY8oWbdh3Tb5pxbPeyDZYv4YfyAd11T5FSZUXt5fpL9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UiFJetTz4xrXbEayVJXAgi5jYAmyq43zaUKT3eMewbeTw7td5WMt6uSJsucJ2vHbwz8dm5u247u5EK11BRgdePg",
  "key1": "4iSMgxfrbB54ehPe3F4mLYj7du7YNb1Z8RvRZNJkcxJ7GBxHzxTrT4mehTUStCpe3r249yXi8j2LDZVjV89gwfAG",
  "key2": "4MMQpQyL6jztpZ1BKUMkAVs16j8KSyx3VdrELu7cQTBvRcRFLr4hyism5e7Jcymc1ZNQ4WpixupJsxGpKKkFxGFY",
  "key3": "2UcXHAqJ9Vi45bZJFhaSpNZWpFqxoXPFzcCGqbmYpCLz3suew9wNGPYm1XpGquRDsq6UEhAPBzVifGDMk6WQHrxK",
  "key4": "3DoEV3kijq64XMcqo4Vqb2FFpDUhRmzwDfE3hwo2gWDV72aRVYMvyVLgWAMu3DpJ6FXeBbg94TwsiHsH1Dntxkzo",
  "key5": "2EjJGTT1Hc69sUZTWLR48n7xsfq6H4twhbjY7UiYguSh3AntkYrMYMgjGzUriQXqTBxeZVttox5gKzdBzGumVUBB",
  "key6": "3xjoG9uuoCsqWmsVKRQugNZVx9PwRfKFr41bDkrwso8nY95SQMgzaCfCz6TSMQR8ar7HzpN7YUXxRWU6MyjfiwK3",
  "key7": "5sokSQSVnrW2xdRQv7U1pHh6gv4YWKbWzfH7Ekvw3wsGhbbpvf4pjzrwyaaGBESpm1JiyC3b8KDCXgRnHCqe23Bx",
  "key8": "5JtCSSuMgZiiNedQwtHcy2vL1sUXi1pYQjNPeEDQ5rky3VFowQWMT4MddNnNTm5tq4nXmAcxSkkR6rdP4ANmUWQ5",
  "key9": "2kpg9vJehuL4sjjo9WJqVSV4YcpHAhC6jmnvRUkhvFMM7AQobSNep6aJcGL8KjxypmbHxUADxcZX3SLFtAsddE9Q",
  "key10": "3CU95wcGZoa1J8Yva2mk7GD3XYKAfZ4VewB4CJ7CXmNteeqSbFdwgJ5ZfamtbJLEf3PRECCvxzoBQsc8dDTWvdhQ",
  "key11": "2uXwwTXmwoBavf4LhC1XERJTePX56cbJ8Epx6oUHPVPdwQCwhJa2YSE4ksijTZtTdrr2hHxbsZ4HTMruZquumwcD",
  "key12": "342AYvoVn7K9dz4wSUU4XqHrmZUrXEn9Yu5rgQoXSMJkJgHdLdzTi9ARbCnwCrdLRoWe1JbnDrTFxyTKKDGzKQs4",
  "key13": "2yRvaX4PSJvYbxVppgfjm13LxmfRD5V1w1owA6vzwt7gS8X87fs3UHrhZH9dXZHY8JQZDBGpsueGnyc4btwJEePA",
  "key14": "4fr7yLyyrBbfUF1RSVZKXneqyBdvxVvjaev84Myv9sQiujybZ5DabQno7N5NZE27sLbuwhzae8VUbCjShdfktvcu",
  "key15": "4HgJM6c7NoWEtDuymcrPnA1d4K4vXyfXJo1DQ81TsotVzDNbMgrcKXuJ6FeW1ckrL48eVe1UcWkFDzpoJmd3JeNs",
  "key16": "zHd52bMA5sV6MV41HArPTc1WyhMgR6dLWnDGd6ZqNrHKJS6nhHn87j8bS9uyd2p97DUfGWVLgAtTgqrcqurMbMP",
  "key17": "oafNabX6XTXe4mE214kXAeoGiHtnmuHf8Q34YkKhcmH7TWLTDRRU12Raj9cDDnnNr7eUERsPa5k9965W6uMCbPz",
  "key18": "2pjscNmd8B41ZaAGv3GRwimEY4Mg7Yqa5CxuusN4wtQ9fgSxKBodprxotcW4qFfvPwoJCJoVscndQPcvEs1PEiX1",
  "key19": "2nbgoXWU4NVDy1jW58WGDmoFuSpsVFHLJBGGjzyQdRh5R7ykpKu7kreR4e8ZNUdRp3DHFA8kXHDP8bXkkopGB2eq",
  "key20": "F8obAUM8LS6qTKsoeMNXzCChA4FRkHA2mbhbiCdtd8XNh1yzVccpGewdWAcMmcq55KmmkCk4SmLAiDejEyBgFYm",
  "key21": "228EGeKWMafAb4vKCxE4JuwqmnbuTdyFT2CshxXueiKgmA8qwoeiTbXxRznehxCxUSUUjvoDbSSU4afaTZxEX8QL",
  "key22": "2GghnqUuQzDCoAfxiL8gD3Fg4NX5nxVr3H3wQk3Q9swXgM1efmLJRKHm6T1yMHcBgoAAzdRiiCn88NjPf2nx8Czz",
  "key23": "bhZnjpFNVtH91DdEA3T4R9pHXhJQNaELHuyNQZvVpk95AcmbmVdLFNuuzh1F9MwoPu37xwLDr3VGyJFt6AYuzMC",
  "key24": "443kGrc3LhDfdb7moRZKT3h6BSPPnmQUvV4r5yovXsQ76KKLC3t88HizN4Hd9vRJhLwk9dUc1KQS8gNQ4K9MHuF2",
  "key25": "3yQWpWvVKEfg4uG4kYcWBcuxv8DQ42gahGge7ku45n1kutrohGDb5wPWXTvTdTMpoTKLGexy4fnYSTfzz1N5QFcQ",
  "key26": "3K8x696BgByPwxcKgjLq2K3UiUiLz3vZcwuvdgWNT22VaKtgXqKpNf2AvcnfkqnmCEuKZMCbGTvExgYnAJjftv7m",
  "key27": "2rngxvfX9gzGxyC8huyksHwvAvGXBTSe5BkrYZebMexGVF5RD7WdWT3nfoAF7ZPos5woCtP7arU2WS74Knzev3ns",
  "key28": "47NiCwkauYwRqHy8TAnPbMxzXACE2JCTnEyMfQoD9xZcq8NXUDaXhtAWVPpzP8EhjEab9ab9e7rK9WTB1MjFWsiq",
  "key29": "5DDz77L8Q2SLvbP4UC41u97Zp3AT4HAs2ZmFNfPbtsHABxKGGLqDh26yHfcP7fECoziN9jWr95mSq4EsX8HY5vJM",
  "key30": "udnv9xNJySszw1dLrm7Tj7VdvEAsxQTUzZYM3dK73ZL5KnfY4g1qp7nELdLbE1VbeKbhHRDMeuNn5KkQuMyvswT",
  "key31": "NcuKv72ckDzkUsSCFHWyQWkeW1cgcPGzwDHs2Ja879Dmzdo2qCN98reZAzkGv3n7eeix73Sgc4aHLu67oLcfSJm"
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
