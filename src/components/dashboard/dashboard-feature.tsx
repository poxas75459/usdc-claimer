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
    "4f3rw9Hoym4C5sYo2yPFT93QLsghds7zbmZAmbWydKj4QRsZv2wVQqxTnLzcq6hfkBAqJoes78Wew4EWzGEWqbVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35dbWDHL3GejoBvK1WgKRs5o1gAiAKuBLFSpCdpX1aaSiv1BT6MDPHUvtxy8yGp8WX5dRD1H6HhkMdGXdVs4SZ2B",
  "key1": "4nhxfTk5yNimzXVeywzEwqexetxz9ceQs88PfH4RLNEz9BJqXcxWDGVsSBCquZQxoU5WfP2nTcZvr5KDCk1Cy2SM",
  "key2": "3o4gJdATBejwsrn4Wsjsov1g7gvUJ7CbqeD72F8ADPA4q9nsqTtpcJzdXyNT4VG5fNjixcNfSSCTC1cMYXDtbbFQ",
  "key3": "4T9HmoRNxv8PFK4gmpqP5PYGocxq4xGEHgtQ73MB9PUqpBXkELgsyfyJcKSpFo7JvwfShGtEFiW7yuhuvKKncfzJ",
  "key4": "5y3EXQfFB7Spx2ywdypA97mdrqXd7Y6GX6cQAsqoh4JdWZ8rCbcQN2UEAzVKsm6fbF2fetmSKraArahE4sBWEHa4",
  "key5": "5rkQGuF77WCudiKGDpHmPvCjuWXw3LbPLsEjwMnY4i8Z3UBtkAg265UuohoBFrJTG4sNHGn59KXVYN8q8Y2d8HTH",
  "key6": "4UdxRpo4CUn8DGZFG47L1hE6NxV6zRDQPzZvRi9Fmyv7qBSu54mhUDhZnp8mzgjf4WfG3hyWwqK35tGqQ48TUKMo",
  "key7": "2PxRHCnhxTaXkLK3eELpcnTH9dU5RsFUc9jKayqKKiRFdxvGAHLuZH5PNRVsi1szakdViyaLheW5RjvVf3cvpL3Q",
  "key8": "4fjnB6XAwNvRMKAS5s3VbZ8zaGXPLDJvdnFoj641pRCMFrPNHzKLJCUj6oJJVh2Eq5HezPN47ih4vhcXnNamwCfG",
  "key9": "3oKnTNKNHSpKChBPVYScpEMnZLic1q5vvfy6WVMrd5rBkxcauUkcVguNxQfVioYLnzv5nBVduuT6MEwWCqzam8WM",
  "key10": "5Xi5jMtgUCxjvFk2jp8BF4f9w4vHGYXe1kmheo6vYbm74dG6zzr4TpQQ8CHYUtraihFvtZ9et3cEAtLSXVGx6pM5",
  "key11": "5JqbHm4hwo3uqftAWqkMXpxY7HvRHM1cVS2EiW79ZCDbhDBVwQcmpXKb8bAoLu4WW8th39jc25ntesiVeEapGhGp",
  "key12": "5qCwHkS4TWMGVnZjTQqyH9eY4kkbZJXS3fzS9rsXQqWtCPzsQhAo2iJukwJECrTas8E6TKUV1sGkvaLtMKRVYVkQ",
  "key13": "2nbLeAT8GdrUqSusMU3TaUD9LGLWsHk68sDfCP3xBYrZhduF4TS3LZi456gXF65cs8G16FJS7wPKYt8TRdWLAFbk",
  "key14": "4TTFWKbcYSpsuwYL9DaHjVyUiC3URsJRtdzJCXqnUvdNZ5ZYHjaARczTZ7xT7M4uQDWe6oLDY3Vuam36q5UcLEzo",
  "key15": "2cbNovMM9iec9R72gdmqsZW2RQNH4UzucDpUE4Ms6xubjV2XA2PDSTt3EacePm4gtasS6pMKdFRY7ZH1XYR1XJJf",
  "key16": "5fi29nyFT4AaB3yFk1UUSVpF1U3ySVSMJdM1macBYtERQzvcsXCPShYq9uhiXhDMuCHdpkJepCZThwtndFNkQyEL",
  "key17": "n5Pp2cA3j8JU27L7YUkuNs1S2MkEBY4aGR3pg4Y1WmRCkpe5u5QC3Xk2c3wFDFCTAKcUKxrQfqLWw1X9FHxyx7a",
  "key18": "2ja5if45NN8HAVynXJEvraRuGKuDxE55k73WVALCVVVo1TNTC3Dzegm15GuiSBWbvbUghWJZdwohY4qxLMsXxfCd",
  "key19": "3Wnow5n2ocguCp86APisU6T538JuzFXmRXQv9Bm3GXLXFxdKzpSFgYkYMvzAUkYSYKojuManCQTEAfmGapaYeYig",
  "key20": "5xJciKUW2hxPnz1XEtdDSarvQYxWra7rDmHVGFed9agSndT6EgVtRjAYvVxfXidXtDzyveErecD2CjkRiCUtkSUo",
  "key21": "2xJV4yAWoHqWGFikakuJjaHs7bR9sy8QcCcUXxKAaAkA4SDs2jWeM2XKFF6fnP7qgKPB1M1zRrnNLR7PfNQ2hGDv",
  "key22": "PD1jA2k62vUkHmrSNJerHZm5VQ8FxfsFumyCB9Vj67uSKmkYKtkktkrASVfGEnEzwgyDGnHCRxTCX1eEcSrBcEH",
  "key23": "2oAWhRyfPMSpDaDExAmHbNdq6Bf3syQD6v4fK1aKs6NeCSaykXs9L8Nuz3vdzZHtz8k2ZaLjDRQpQ4b5oZtJm7NK",
  "key24": "CHEruUtyZXF5hmkVd8XyJsXV9g2Ab2URyzmMGCAZqRKTwP1DsFtLSAAEV4BsXCxZNBpkjKyPPwVYnQHbRmpHXQe",
  "key25": "2pxQxupXsggqMwxW9nUhCoLx8AjUAVcL8GQqvqknFGKtEE4CPEHfRTsn2r3DSb13JDmAGKaoPwHpaFTXQsKpFv5a",
  "key26": "bR7hxkFe4HoyBmtpNGJhMvjEUvs7yDXQA2bja3ptLYMHNbaQaWQjvnVprqaBwqak4JD8yDDoG2NPVPiydxP7RNH",
  "key27": "29WFDLPDhJPrzUoy923hzJADNM8aV1obQaiWKdDJpALm7uAsktMbnv7Mpe3kduhRZEQEPUGsRuyxuxwr3TJsGqnF"
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
