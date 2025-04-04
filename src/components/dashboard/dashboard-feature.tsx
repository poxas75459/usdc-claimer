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
    "32s87uc3vJ1VKtsCXPuatMdQtgdPXHBGsca5jEeegDEqk5zXLaC6acLsRygeq8USsgFvcnDxJ3sRqv1F8vt4PbA1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "o2vmqtCQVRvSJLuUSNNbgS5dvwZ3iY49B97gfX9bmqFeJMxgg29vjwyzV4ZA7MokRYebWYibL6yyJ59TbZuVdqm",
  "key1": "3rfsMukreH1yFZzpttW1GKweEgmiGTCbFJCv54CdRmtB5zXJHa9tJxWNnAvoCgmX8zMBqcucWAHu87898gBnr3cG",
  "key2": "5WQ1UdZaiX29EF2Ufdbhku53qjiYcgJFTqwTXtQnQcuS5ELW1Xo1Kmk8pGDRzwTozJf5LhmZvzmkdwfgFu4AjGHH",
  "key3": "421ziT9qR2RayvcbuMWENq2eng6rALphopVdM7NTLx1e1i26YF9yBZSQttZfVekHyrKgQkqXaDJHTWbi6jNEJ3Nq",
  "key4": "4GtRfuE1BXcFxDb13Czs5ZDCV5CqxxoKkFQGKVAMysxurq7S2rNGhngQz383a6Bzt46spiTMUvjGaZZqNXN2DLoF",
  "key5": "2gXMsqZPzucLcXaHXQ3kNVBPZcXcjPJbPXRNDnUzg74WNrpBZQ7tk6wVM3n5Y4wJ9j3DquCHamndmdSM14bWVztT",
  "key6": "Dh5pCfEwEvA5qUrG3cnu394nEUGP8ocvBwhTLBBDWixpDpZJarVD3VpvSqJVsgjvXSLpAsofLY8anc7Qsew29HM",
  "key7": "oEX8V8usn3CmaKxD4HHSrYgcpRR5brg8SDKsEo4mtsvViqjTVcxi5xb5cHS1UmbHh9oQzwbfzarLRGgAt9Yhvbu",
  "key8": "4a1pX5m2AKYPAppJNkj2FEpei8enRGjzsTK6rxEUxSx9FUGJVjGEp6RS35K3YkxmX9y2NQ9tZGT8VvH5BgsYojZU",
  "key9": "4Qs3WWaDAXTzgpfmdMYEugw7aptPqtogiM2TzTcT38Zo72vUVb9M9AVsBu73XBEYAkXrYy7wZQchB49PPJCeCLTR",
  "key10": "3zs1rTnzSrAej3517WJ7C34hgiSmoKuDwFYCvTSCoDw8xCau7W83PFBFuo8w1GcrzuozHkWGdVGJ2Zg9njbCrzJP",
  "key11": "4DEZrtiTXitGVbyNqvU4D1RTZcC1oLnrc24WajWF9eG5UrPFgCXJd7pvfaMR398VpD2a4UggXd6DZwLV5MCpmNqG",
  "key12": "2s4wnCLUs2FUZbmsPeaYuWkQVZnmtxJkGCBeCXjB9VSc4dYefqczPDudDXFvcPVEbhoGTRo6aeZSzLWgpJFk9NFG",
  "key13": "4WgKn3wcaDoafTGrvxDq4GRMtvaBiuHpDdohUMCWtoLKvrU9ZfRBMHYiriVGsnH9PR68YEfVuQ64msGEUuym35Gk",
  "key14": "4cY7ykUqrkXKZTy5zF8Xttr57Y3oikQM97YZrb7zcerocvarnmtagbGyGs9QmjUNXbKMqSQEmpyVJsJUdmWEDH37",
  "key15": "2ANVHTo5qxRNapiTz1ox6pcpqU2Sd2Utc8P2E6sBZAfXGtXXuJrPPjiKux4tsmhakRXjUs9WALUoiuPfo3wuZ4o9",
  "key16": "2yLzpEy3fs8XU8jmrRmGZDHJufn2y9AKwuNE6TAyuXJzmDtRAo69dgH6GanE5BjV8swuUohLj2WRgm9bRkomY7yc",
  "key17": "3VfNKJsSuBp8Cpjdbasn5V8GCaZxeEsSCXJYrc7T6W6t7gRzSVUDXQ1hmiwf3SnsWhLb46fvQFhjGZaLLB4fHwtR",
  "key18": "5v2FkP3Jyxe3xr2NaL59TBUR1khisi2JYwKJww4FnLhBLSkw66NRKz9oqSeELe7ixErj9NF1Z7F4NKtZrj5rMHGh",
  "key19": "3KKm5a55HfXLqiWfdpVyj2EWN3LBB1oUDjLqbejc6KpRXPHWDiVFT34kxBcZMgqSbXnV1P2rNBdUxktM9niFPPGQ",
  "key20": "2XV6y3e5r4ZjAB2RnKht4VGXLoHV2KrVY6oPYNChPSjkdBpKRpa9CN1QQDgiBR7TirixVeZUrsipv9vgt542rcA3",
  "key21": "4reQDjoKJSo5R4L3WWTUtj1fqBtuFLsrGNcf7eUk9u5926joWZ5bjD7sb4kSoXKSdWE7zEKSohcZv3AD7823TURU",
  "key22": "3KwpYLMktreMKrB4YMvo3RAtfsqTBW4hPt54LmZkFmxqASArf3S8HZpaffaNj7dJgxuAtNyqppht5XgCYPToAvzV",
  "key23": "2qtu5kY7wUAVzxMV4K77GsknTNeT3BX7AxQ5G5okwkuuvzKbKcgb9HJo8o7nX3WUYxtgvxS4egi1Xj4BRgeohEXk",
  "key24": "5KySvPdpjzzjjKon9XxHgDQDngFDv4ZAS8xRgpUGBXwaJ2yrQUXGtppC18WtApKQLsTNaaDmgFMEhcFkh4jdszR3",
  "key25": "5FKLRcLA6CTdUvikZ5FErfw7iSj9HpWh7Jik5vDroUMUGQS1XZi2WAu5xv3H3NNrgJkrfTTWemPaxYCvjvT4SoFz",
  "key26": "58G7mpYisv5cfaVfLEiVzjLaibyuRB1bchrmvKXdaiKtjBhcd8xBaRRX6czQ31S6R9Fp1Dkm8wAa3wjjCnpNUsPm",
  "key27": "scphocjrqRYoEjuAxQFQQieTSyuXDfgCSmMpiTHvCeTcKYwrPEsUqZdQ1LW62sMLWV5vkSNnJEYADazkWpHVRjG"
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
