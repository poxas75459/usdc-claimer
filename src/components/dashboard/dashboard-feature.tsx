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
    "52gnUUjaG4G9apsMqHd8xUpphWC2vPaxN4fh5UQoYbpMjL9FJEDWK3LZrWJ5y1x9qh2yjiou2hsE1oFFFpFW8Apx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S3JL6HhR8CqpdFkW9o9r8XwfcYLCeFMuu9TRwWgFZD2d3vErjQ5Ff4VhujwrKUq9CyXLkTZkUMJFjzB5ZnPR52H",
  "key1": "46WbYdh3HS555E9brxcZ5eFYBALu9fT8VrKCC1ncaxRJdGt7VXTwDA94kQAuFK6GDB9mY5J1WQDHEBpQmgDtLNZV",
  "key2": "aVw2Sc6n5mmJ5hL7vde6qBhRZu6FRLdP2Yw9zKLtwyBy4dk5zfxceNdM2XWKDcSEFSzi6SWB1iu8qk9DTHFWmU4",
  "key3": "6635EF1aTrX8KbdLkMcjEYUX1zeycK9dhLPnBusoPBPEo1CRG5BLy6NYWNWTfFDpxiozTbmJ5n2R9bLzpJ7Qo9rX",
  "key4": "5evfzenTgTin7e1xYrGd7xE98U14qEhCyuSrF8vPdCZmyTKBFqrXaNHj4aAjtm7nDUJivEhgCXR3ayog7mv4G5QF",
  "key5": "3oZPt229u2ikTsakSomfoMFwRvZ88ZnfMdse6DHAYp9Jc8gkHzyfDCixBuJk6pCnSzRfLCT7TRmtymbrzYX7s27b",
  "key6": "5jmeJ6tic1nBARYMKKwL3MPZDcBSmfGBBxLUfjQ2NcvDhGNhV8YoEntWPP4pPsCQcKk6fQkQiRFBQAfYsxtYZA2S",
  "key7": "5bcWiZfbGt8qQNftVFWc1jzFUJTpG4BLFuTQNtPTJHAbCTDeUjtwJPWmbU4QiocEbUcnBZ2wV2C3NGgJW19VRZBv",
  "key8": "248j9mMLx4qV8MyZGzuYC35uabY8c9gY5UxHdGZxHLV4CdiCutCLx7Pqx6MwviXMZJzfLzW5TPkiP9je9baq5Ksb",
  "key9": "3dwxgpnDCT6Pmcrc1z4zv42zQGYY1iSf1yZvSmRn3eFXaZivfEMNctmfxjsaq7JRc3d5fKZ9ZmGBtrviamgwyPVA",
  "key10": "AnLghSorwy6PPfyB5Bm4JAFhYL2nq9D6vNj8V7y3FPDyjLwzBshDUyJyrsPVtUZjnLpurBaogNaZ9JhvhmMEbvJ",
  "key11": "bofbFV6wpgYenTikLF7GF5NKug92qGYJpByMREDbK1yzQc61Rn4UTgP8fHiP1AGU2L9ZXezioj5EcwcoEwvKrN8",
  "key12": "5m1hmjLtPjVqBHVNYJVZ7TKBWHV3VKzUWiH9G9QBarSXV8oCdPXSaa58E4Y9areUbLJWEsu4RtD8UkdFJu5LMK4o",
  "key13": "2ozw2RuTkd2aXPFytsCtSVKG6riEq4Wv2P4THqjVNXuFzVE7iJxSGzKXWBR9aqiFDKE7AT3Vi5owLa3tU9o5bZ4b",
  "key14": "1PPWg3KxX6PkBEA2nbTknCXNQF8y78WojPcfKLoZBJaBPxuQkJuXk9CM8pFD1QTUa4iiCvFLNSxT1JTiAd8qdkq",
  "key15": "2Sqi9G29Lj5wMWSXKN8SgiJFsXVE3WioeRQ39fY2N7YLFwvzJDXo7pieKQGEYhTzwuivfYxkpYGc6tAzNfnKe5F5",
  "key16": "3QziLQvxUrmpC4MS34eFqyAXpb6F4mAe4834VGecuw5Fidj6FCyQ3JTaJtzyDHLSxV2yRgU5M21nSUSrQRBSg8Qz",
  "key17": "3fgjf2cyTo7qcT6XCCMVH2GmARZcDZ9AKbL5R21QBX9Fq48ho8atondeEDZoppr15nN3AwM33y7rzKN3XKfdqat5",
  "key18": "CBFCs3NaFqxZST54NGV6FaqatpL3NpkUiKxztFQr3xAV4qY2fjrXJaQT4qZnAi1pb6ZwZmtNc4kuZCAn8oNoMov",
  "key19": "4dGBASywqQCXTYhpdBcowtEfGjkSEYKYgpGm9r2XGw23q4zDSY7KKxNgmax3eDG1toPoHHCfEDKyQGsfEdLkAu1D",
  "key20": "3EcKRGbqSN2CepjasEwFJ5LKBZR6shwQTTCvvUzAEbS2f4rvdcyj9u5RLmftXSQbxe1Uh4BxDPycmw3Ua4PcsFwY",
  "key21": "2DqKtpYTbetKZZQM1ZtcKP1qt9FQtRqmZ4rYhJa7LCk7Kgz65SaB3TTgnELwVVvFsh4f6h653Uj1Zp5c75MwxkJM",
  "key22": "8sscRpZEzNnPHxrKziBY91bC9yM1fBPYHuzwpENVpUUDCBPbiaJC3Yqr46cyByGhduVp5ViSdcW6qLhwvfQT6Tk",
  "key23": "3t53LVhEwhA7sJx5z3miV2offqsPzyajpcnpoeGNh4K7ga8ddsyYYh1ZnENGkCdtPD7PuLWYh7PSkSdJ4j1PRXgk",
  "key24": "3v68iMTurh2VsJ2NmcFeAZxM3hiNot7h92kZveWBxLriiaKE2vb8eh4PZGqKK91wCrWsC8B61VhL2JrwPiHeN5dY",
  "key25": "64dttsuaJMkDtLPKwhZEyFLqz2pcrc7Ckk6pvDvCXkGP2DAKoS8fLYjpGHEuAzQnes9s6YbUdXgEjivnNQeSVARs",
  "key26": "5PYntFDBrs9FsMK1ZL1DJ9wQncpPZFSGsTcYdMhHjj796LQ5GNPzVi1DRGekHdjykoXLV764DhPoCRbvkRjswgoU",
  "key27": "2sSRXZy5ZNdgRStrfn9a3Rigc9zrQN19nH5rJVa4159bCSLyjM3tbj29UTr4ZH2hsg57Usxhba6jkzsQb22BwGr5",
  "key28": "54ntjny1jwmVjSyZMX6TD65KHRdpiKqeCARzX1ByosjVQaSqHHZMU4m2hQWQF8doA2amEmFU3Tq7yNFmNqJ8immH",
  "key29": "58YH7PABdrJtxqJa8nP9MpixJ3zgTvkKKVZjrMRV7UYd6SNdC6fisP2bxd5V4Pqo2GMUSkJRNtahYkiH3AZUWoEy",
  "key30": "3A9cRj3fCS8Hd6xk6D3yk49WbdiBGS3bgX5fm6k4YB2bEr6YkAUCt6Cd33hyULSGPz1wkowoMWUooWKnnAcpPZhw"
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
