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
    "4Zxc1eFyLaY4xnpxz7LLzB3GRGVDBN9Yn4MFCufuJNGPzvshPxEDMUnGqgXbNoBFifMJpiynf8WuZappHptUx23e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9sj1ffh21rbLhMCiefm9uWBSuYuUcNZzz17bok8iqvPwgnt6doC96C6umn6Y3ospaXhgvJ1NucHLZ43mRxC3UL",
  "key1": "3yf5HyWBVA7HWcXDsPEkrkSRV1Mmbwb8ExvSsLS9QzoLTtXvtcg9Rhn4VWdSj5xDGfByQuYBjAPNt9dyvN4Dacjt",
  "key2": "2xZLSSut6AKcTFNoxQrERxCr7F9owBGw6tKGhqB6DVYr18usHwnw2kHf3ueji8djYsmfRdsxYF76fPif4MTLPEgB",
  "key3": "bPZWREMARvEEhCUCPmurLkh7oe8z7WFRJPb2C4DYpMtTrL4PS2e7pv9Mi7CkdtmbwQxsCebZYP8rrguDiej16Pv",
  "key4": "2hNEt2jAb8NcRsn8FWtQ5fpXN1wnzuUowdy64bivQqiK14o14wewfVzGE8xLQVYh9ompvMLJkC6La4WhXmQUhVyn",
  "key5": "G4uv86tZk4ARCvV1VGvWEKBojKJyZJr7ykPg5SarCZ967jSWVV4g9ss8FYqfb7w7UrC3sJKBFadGWyVALs4fx8o",
  "key6": "2Qzw78yo9JdcGFtAhNxmSc5dGL7zkmhN6C3sKTyA5hm5ogybfdm44UqCoyFtH6XkAYCqvV5nMEDL5tPrymmZA3jZ",
  "key7": "4Qx84xrG5r52eFV9pd2e9U4L5jYg8Br4raAcazBoc8qeeBWBPhs7GxduMfcGhQvHrcoVQwZz85NvtjT2zEj7npRk",
  "key8": "2zDWkjQNLJ2T1heS8icNMZEFk7WNvJx87ckBCEhnnZ3nkxiAyjNG15uRFz2A4FJGu4kJJgwRMzzY2yXuvZxeNUh8",
  "key9": "2m2gPnpaRzSjNhUXzEYvLhTp5keycAbHWFJG2bcau9rDYRsyhp1mAXwFz6ooKNWQfsHctRxZVdBP9BkPw2SEni8j",
  "key10": "2MXNxjyMv7Dfb7DgB1nPM339hNzvyip2yTgmH8PHQizNtV4PqbfrdFfHcDRuVkJZhbNstNHk9vv3FV8pjbH3FJGW",
  "key11": "4jhsDceZ6y9euhRqsJ69LrSqvRf9ygH3DmMtyEzQNTxZnX656KLUZ6TtSRP86cAKDeFYjBaYLqcRdXLAz88XfbSE",
  "key12": "4evdQFwkjDgSjjaH7SjgrfifDZs5nMvifRpLR6hUHofnfSq3M34gr7ydUtAYeJ5NbvQMJRuGqBdJVmYkWKeVB7s8",
  "key13": "3NzbLvyRDT6k2UEL6fVJedY9ixTyUGrE5ieQyRRKg4YP2Fu8hbGVz7jRWysvYUU5rs2SLrx2dRZRz7W8QSVCqeuQ",
  "key14": "5wenvfPxDbVRSzFeASuQfb2E48R4hLad7CYUgic7uRcUxoCxAQzc9bywRJGV3Qpg8Ctbd8eot7d2vc15n9chemUu",
  "key15": "3hFdixtFc6fDB2qsuRH7VXW1p6msESbF81G2dbaC1cfpoqytLC9mEAh88sAApYHtUBP2pQsAoBdn26RTXiSkENpQ",
  "key16": "4ZbgTL1XDJCUuNcDH7Anxuxib95VUcbkWWdasRDvi6v1AAjgBLtoBb1XSRM3McJjbeF9Fd6K4jbzUPrXcqd51ox7",
  "key17": "3NJupcDw9dBkPrb3PwoHEyKafYevuK6Z6HshJ3Yq59Aw79deWktJMdRwWpdzxWRsfKUkqeroeXaBQVWoameKGNTb",
  "key18": "5kPsdfELKfXU9vRvhtDVwioDrMopsKThTT18fEivq8WMS9iKfzVRfwLEFjBjjR9BBw5d5rsxt93mMPsYyfsCRLSF",
  "key19": "5j9LAhS98wAwxpRkFxPRBwJ6pEtTu4kMaA9Nsjv8JFHBGJFEnewL295467rQF6vmMMAhJVnPAezvdub2mf8bRVfo",
  "key20": "qzDrvFkdhsMjwZVtaVQNAKwpA1xzfNLvXWsWTtphEEnsqdHv1DGGHJTZfvKTNv4hbSBdnhR9qQQk2nTEnbP2bMC",
  "key21": "3fHESsPyDNVWK1YrCLnhRz7twbB8X2KXcF3UR9uVCUaWdQSobz4b4FT8iDNhGgRdUrrA3V3VBfd3QrcQP5Jq2dXw",
  "key22": "2BeMuLYzC6JWx9dYmaxEQX9pH7QMFNMnMoQk2jxLEPBrcAXCLy7fUEnUojDPdTsgGr7qchkVDjYu2rQyitJAFDAs",
  "key23": "33mBPUgYzZcLLu7pJySvotmyXUuUBRChSx1MLezsksBijE7RKTUCmVsLnmTSa6YgcM2zaYSFrmzeH3NrnftzaQWv",
  "key24": "5NiJUBgY8tR9AncUtkAdYrrH2FHdJeUE1tUG67945sUutruQA5Z3UEEyrYUQZtBXG2Louh4AtKu2rnCdNfeqYvEA",
  "key25": "5BWc2wFDGfQ7dryfpSTRy4Y2LToykXqonLmjQmVLQ3dN4SwPNcw6gXWgAsbRp3TxYpBSxYF2DVxh2pptF3KcNkL5",
  "key26": "5BrKzyv2hYx7R2imzKV1bqXA8ajPTovpvANUXJLdtYq3jtMuVrVeFtPFPeCaiRSkiRC17RfMCHGnDgrefijvqn5L",
  "key27": "4m1byADLx8iXzqRZCFadb5eQifY3iLi4PHKk7ULJo3YhVuuHDGgTn1WrVWSm42vqaAoE9BFcF6aQhBrCL6EF8RqD",
  "key28": "5bq6i33aMmS5Y2Jky9nEe3f9MfpdtuVnCwqbN8yMqtNFVKvMzGsYCLna3fLiGFb2VcSiRgVU3bokZEoucjvaeA9J",
  "key29": "5mqGqn6ghMmk1n9V9WZyFAdG69MQbWxR3BnRKCAKKhpSFkJJH3MMcHQboTYvzgHqtGboyXsCBNReQkxyrVwUCnNK",
  "key30": "5HsV7GdHko5EXkUmySkUjNJUBSdGDASTLNduHwKugCfwv9yeJrTyKgyzuisN2yB9GjCttoD5BFgMCmtc6qSbxvwy",
  "key31": "4NbKhP1oEyK8rbEWBg8EMesvSzoyrGgnLWPg6WiJKdTFVE9toybDLepUA6uX9J7CJj73ZmE1FrfWbiwN4e5mWvgL",
  "key32": "5jCN5QWZvxTqyJMLotPAzxZ8vdoJ4xoCmGGhaJiMmDHRfwHGE3j7sRy8UKTbr2VmR5xVCfTo8RegpG1TQZj77CuN"
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
