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
    "4GAbPhW2ezjoiBbV4UchLHLD5wuzKZeyLcZG9QezFgnjV1Kg6B5zd1M6SWoDRM4AGa3sVmZAuw8CSGn4Z72oNHWp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2f9yj9rcw2bVVgYgVwPRr3hUdbNiAxCgmaXp9b3ykk1fs47MTKSswFDgseiFT85EWdYcNfZWh95s6r7LGMnz1geS",
  "key1": "5C8baA58p8kEHinodKZEcsjjfs1K7aBaoD4cZ2uYRMDmB1kHyMk8GZMkZE9o9s4ZDqy3ukc2UgQvqiFaAKmojS1a",
  "key2": "2weJx2psNvo5PbDeWj3xiVPkmb4sXPfLCPhuAb4xCRGuqZz5s6EFCAxtodqzwXazwvK9wYHixqbJnM8Rs4T2PjpT",
  "key3": "Vp4AW2hpJ68qs48aA2DF1BspPJEM7DUXYmWmoUr8zXZsXbNmt5yuS5mHdcNhYGksSFXo9uXg11Q2ZYpX1yXETmP",
  "key4": "58XTJt7oCeYakStvCFewHuKekUGFSS8VRMYNEtEFpPDHNR5cWrEgiGdsMuJKQ8sRhFfK8pQrxNz2TwGFN6JivvhK",
  "key5": "jsPXHN8Z9FZ8ZSWKTdibX92L72Y7xR2ptpTo6A3sKaV7rN1PKpyoEtEgPL81qaqR3edaxuH2uH4GDzdnvx3RFeY",
  "key6": "3ni2HksrgC2FMN7GNy9b8RmJ3uMD1qzQgw2D2uc3nw2DXEywiS6MG1YMnumDci1FBFaiAkfGXBNCBi1pW7Q4uLSP",
  "key7": "K3J9WofbRpfNVjEZynW8DcwXFW149mSg5t3UWcanwjjvLaXZ6KufV1CqcKBSeUBP2fmLVuZk6oSRfMbCipRX9vb",
  "key8": "2iLkTVHxywUKVx9zbiVZ3z3r483PGy2DWkjHS6rjfYzhjF2PpDeU8rzc38ZRCWV2kLCkodeLox8zjQqvDUxqxjRD",
  "key9": "fjHKKsWZwj1hE5F1XUCRJs1qdREHaC6tuGVFWDgkVrnU1sJHmSfsgCkrU2o6L7msTHwquVYWoDsKdMnSZGJsVgw",
  "key10": "3VdEDf87RrzoprHsgEcfM9SRhNcwY7k4ftcgFUe3ptf6Pv1Y4uPimZ6PxSMsBkxVXXQmmgdBceZV5wJgk7xBsNA9",
  "key11": "3HFF12MBvDizSWgJBB7vxfHQxi7RZncRxHcbY7zt16tfe86yLYo17v9uDhuWpXiwL1dFU3XUeByWESFAWhqwvxoU",
  "key12": "SLD2bQ9XF2FQxqCJWcEkBs68AM8sZNMX2a8Raj2h2LebDuqSvECwg3pVDFh4MZTrFy2KwaUCaGwGCPuhahqdjdj",
  "key13": "3mKvXvgAMERTKiKaoAFNLnHGwyLX7E5fKHSWTomwE5KRmuWPB4ArB8rcGjwGGNFPMCa7TsLkbPkugtYXEkgSTU86",
  "key14": "58zR2b2HPZFtSkuTEodDn12eT2VsQeTxomRoPkPGjBQcVwJzheMLDiUPnbS5wK9iLHTx6AMEWypR6oLL6VPpmwRD",
  "key15": "48URNMQCzMumFgMeVX1Kew7TZ7hRNVa3HekM4VRaS82nTvGufDSATBquPbTWz4SoAMQTZih9evM3eLm6fsL8CVjK",
  "key16": "2Wx8Q6ugJngkPUJCi3euwWaSAaJQXbFF3TJSr6KLLYrYcdXfJLq94sEmNsz5Px2SYGhk23PnMLN5rEPQSirKuFe3",
  "key17": "RaKqcq1aidvxs2U3fYTy1bEggkAFjMW6D1WsAPz6V6MtZuFFuoPRgaKCA6wyU63JciAdRhoCVs2cCDBRbW1uzi4",
  "key18": "5vtGquk4rs1VPFjSRYret2kcZSZkRdLppigS4A4bT2bXnYtw1GyBKcK1Kh8RLEU6zrGFY8L4eDzenp8Q1S6ToHcV",
  "key19": "46gk7zfDuFRLN9uxyPZ4YvPaM44BKtsSLPndR2cp7GY6b94n2G2JjhwWBfEbp7E34gaAtFftciufsWuJwedyX1Hp",
  "key20": "ts8hTrRbds7arsB5R31JDVvxiuWQ3R1wiqu2PhDmkFFarjjSx3DuW9J3ciixea2pLsYvy7ewtnavC7hxv4RheaM",
  "key21": "2mDr5QuL2GBhmae1EPaXseJuLfeRUVeS5j41MppJwPWKsyZu5oQSxQt6GxTtWP6hkCnAzmgbCijJfHX5f6Uc3PCC",
  "key22": "2sYC18XRUxYe8a84r8gShEd9PevBcLqqMj2eLJX6DXrREupr5rh62CwPgif4nprtQWWGW6g3BwfhNf3mKHA4DA3c",
  "key23": "2pjtPpDGs5zYJhrDhLRxtLuFyNaFzm8sTNNHffHRDg3eC4aTspe6prBPtaLH4nJ8KFGHnGzqy1642Yohjo4XQiA5",
  "key24": "hE9TEvE3X1J2UzUMBhkBdNGBZQbtAqFuuSDSqj6r67XDGeTttvWMBRbZs8TEKVPToNRm9ivBVS6hMVxrKYfDSTS"
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
