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
    "4uAsSqX4CacaWRu7viQeKjTRoto2BiVpxbrFRd2ti2BgC83HzNKn3AqrZhBeaFduWJ3KiJSsG8fXpX75nzJqHmUn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YGTMTkMDbEBPPu8XbDt1vvyYT2rpu5H9CahmKJCybT4vaX1y2jVtPA1wVJLnCjedsW4ambCrMSCJExrHH1ZpyAg",
  "key1": "kWShXSbDv9tDQZaUm4oHyaYoH8svqSiNogNjcri4urZQBKcJnTiA79pz7s9Uzkki6SB1KMeEiQLZzobv3skYdsA",
  "key2": "5VuzHzRoC9pScVYBNQVhbPLsPxojYhVfB1WvmHFPY4mQrAJ5abJrfA3yvc1qp5z9DMcfBdYmXs6xd1Ne1Gr19CuT",
  "key3": "Y9bimAkgZrvvnEXPVEhMP1NqXHLCSiFsBNFF1rG6wh4c9S3A6Lpg3wKw6uLsqqRoVpBqbZpz69yaaqEmZE9MS7k",
  "key4": "2aGMCyBG3rJRwZPZKHupLxEbf2aX83HD5LqHL5Ttk6HrUuB8MsFeAB2ygGqJ3SaBjHJEV8LZHVgZXwSKkMHu25nB",
  "key5": "42EZivCQx4do1oEnFQdvecNt5Lidq9suQH9P4XRxT8LGD1mwBVHZvmEWTscRZp3oJxtQtpHceMnAu2JdGHBgQAbm",
  "key6": "46FUAEquAuHuMsq6pB7bBBAwjxtvNcJseLEG6dYkCW7gRmvmPfs3g94PvzoPxRQDzqCTbWWNv2xxFBzEzUTZN7h7",
  "key7": "5Geh2JGCXW6mPrNWPdJW78Sm4Be63kMJCs4s7HUDroyzLmcdg8XpSuH3GeUFs4gcDrgrCciMH4CXbd5jWdQihREZ",
  "key8": "3Nb9DUzZPkcybd7ak7RoF2n4GB6mY42EsB2B6DnDWhLcGo9hUR8ZygChD1dWHDSgLC3REfrTTZEcaQiaYhP6VdRG",
  "key9": "2zbZGJ5HPy1ZAyyRZPkKpdu9phSdsjZBsbKkZAmMAMUJzBrtCwcfqs7T9RhTDM9AKGTXVM95epWBuj6ri9FNVAR3",
  "key10": "5V1wXvY59XGmWYpTH9z6cRkSg4baxJtPstCoqu3R6tmzPS2yH1XJX3qNw9qqUxWQoC9uG2PiZy4MDFXCUFJAGiUw",
  "key11": "3CnCm3uo4DfLFTVRUDhqMdSN7KFe8ZvwJrA8rnw8HsTXv1Y1p6AFCdxEsAQfXqAmEEKFzsLB96ZYHZF3LnWGbFUB",
  "key12": "48EuhBhFXfes8JqxV124xR4Vqyfv2d6F7eNBJVTz2WumuSbd6oWDSseD1hZrtY2GzcW5h1RYvdpHtGXR1dAGGHsq",
  "key13": "ZZmsJcSL2iGpDYSomnLShyusGRVW1MZNgVxfVLwj8GpWoGwzqfg94zWHfiwwuHnYTonGoAo4xfP6aMvyvY9mLeR",
  "key14": "5toe5M7sGKYedvzMJbuzYmvxZiVYHjfvFGZigHfK4ZLortyD91dK8bwnGFgAE7AEiQxTimBABSHLujAtUgF75axp",
  "key15": "5nkq6AMep1HqrXcUmbs7VaEgxAMLFf15Wy1fLQqBq3pcChy2SiKvcTZoQPu5KEUfRue9HPF9vBEQd1s6dDr6vA8Q",
  "key16": "3Ugy6bcsm7bcCPsQC2z8FGACrHEfvKaVdZkA4xr4z3b8FDZgGMSQSC5jW8kvSMDZioJrvUtkQifssVhtT4vteXwC",
  "key17": "5npQ2bsSjEsG2L27UEkEE35N8fZjAk7USjQew98UFNz9jAhWyyUzstVES7Wu5cJ36X4hr5wdRKsKg1NWeVJnzG2g",
  "key18": "KHQwGVw6YSKaG5eNfpYXUh4Po1ZuhcWbBsa66ogMVatXw2VGwZEAQ7ee3Y5zNwjteXhhRkgNr6Ej2cw6d5ttVis",
  "key19": "B4X6CBiDepkWkizhFhfoaQYFP9E9N9VJb2CRirNeruTm9oVsA6RswZHCBZ2gRNkcMS8qBSV9MjMge8dA8LyzPFH",
  "key20": "5jBqURj9SkPGdyQ1suj2eo8t15N7nxhVDxUaAPA94U5DJ9DNipo8pduhas4joVvrNWUKywsjQpHwkEmQydsRJWSi",
  "key21": "2CAGCCedF66EhbRmTkEHNbYWSx1Boeb1WJhnVYcGg6x2dU153h6uAo6iEgag1GkR2jKa9RV8WRPUkKouZyvnkejT",
  "key22": "55oTPLFQrih4bRLWR1H8wKR6gpirSQozgYXrqrueqr2rqBo64VPVeEL4DotnUujP7fca2Q5x8ZJYh2m1rvQVjFeH",
  "key23": "vRmj65L2QRRRnb74nrqQimFTqPAAfCe3Ryb63MJnfknyVZ7UuxDgvMcJb9D5u32rzc1exdqg9AokNCRZq4qEPyW",
  "key24": "mV18ZYCRjMP4rzJMHDT7kQaT5xnk1gBSoKMZjS9Jj48UTUXxLnsuioXYDSufakDyeFSbBtdqWKBBjD8dL8GttDy",
  "key25": "4nkTUwfKMngr9tJy2CGpmuxNedK1AATM1yEtoqVTy3hvpzGW4k3WcSYNNieHscaeWX4S91a7UwVRDV2qoosfxKFd",
  "key26": "3FwDfcoeawx5SzqtCufWmq6eTNvjisob5ezCKcpY2GPEjUvpmeuFefiPrNKdchb9X5zskkXuKa2q7mGsH5y3R1i"
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
