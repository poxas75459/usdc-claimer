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
    "3kC6i99afLjzeG7KMayqAKGiTDvBid6FH3YQ739UYfHrgNZ792PYbdq9ovLHi1PKJFoqjheGRjQAzxG1XRArPprr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4odsfNP77krQWmUXLsQvnogfKPiuMdLfMhfpFzUWhjDvro5jkKrgxABkmEv1fZagdr3MsSiFuBRgM4o5zorwugjE",
  "key1": "3T7c1pZrL8zWS4k3sqsjnzkdLCR6Cu6xWpoyPDhhHAuZCskRXfK8RBjy98sTXzd7PnFKUcDyn9Y321rcdkvahY46",
  "key2": "2utQRsWgmjawLYoqWiKZa8MTF87P6bKtspZZKHisERsC8okjecuVDdhXxisnpCHE195h2Cst1pwKy4siBHAPm6yY",
  "key3": "nhPGYA4u71x3iHw2ZDXfu5WJaqut3UPx8ZKipgGxc2dZVjhy3XbTQgnLfmfy9Wd3JDBk5PaTce6YuiKrjgnv88D",
  "key4": "5Px2vxxH2175e43p6s84fpe1Vv5cexz2oHvcV51fUXqJHMqQQpTLpRGF3qKQCAnXzff13KDeiC69HwMGWeMnVm2j",
  "key5": "2y1grtNcqZRjjDhVEWFHVubeGgPuTbAVAPaC62JTTCbbjNMykxkqiSqXp2RBPtsQHGwu9ADHimNjpztAtgFviCk8",
  "key6": "3kciB3fpbqveJs8WmXwDzrdaJx6SmzGS2TesCWnm4DnKzuR8rgH1yk931Q1MUEfZPoLXi9LSw3X3qg7neKG61RG4",
  "key7": "pxML5ULqEMvRSTw3QbeiiZKCUViD7pN49Ki41kDE8LccLYaEamW2vnZaTcyfaT5f2qMCDiwpDwUkucA95VRsLRc",
  "key8": "74KEMXt6cSt14qdcdJHMBZaLaZYsPLmNmKWa48vNqsMtCQpy5k9he4vRv3KvqfopqA2YF9tuYg6D2sRMymLY1wg",
  "key9": "3PQ1bKzEWZqysM14pzpSErZEMB3EktPniWvfAa8wJ9zK7jdhMnirQ4KP78KLLeDKSnFqHBFkYacx8YQzTZVHhKtD",
  "key10": "2ZKckE1XTwZddnr5c4Zd29gTasUFfrJLYAkks3rbw9QHVkgLBuEeZwaeVhjnc92VCnpXJpasJ6i83zg19Cug9btE",
  "key11": "22VCewTz44KpsuXUocScigZcgd2LsxHessbsBTHr9sJNry9214zCCdreoeyZjjPWyDPcmg5AQJUWsH2awsXLVvdg",
  "key12": "296sCor7mqCtMdziLdYXL4kCofFHYnbjcm8gzzwDHE4yNuZuoPY33WUDmQvxPWFXzYzq6jZe4QU9U9VDBuzrCUC6",
  "key13": "5Pjw3jqYx8kt63unL7zUmgB4fbkiAqG5mtT97K7EVfkPuHsXakCRBmBbxXth34m69GRhiQAbEnWdHWi9VidEewNP",
  "key14": "5EVTTU1fmjeUaqwjaQdDcu9SUwUxF8cDj6UkHAFULQicTUgrFLjesJpvyaxqLpQdgu22frQJ1HQ2CaJaRXNKAdPF",
  "key15": "5UM7EYkXesenxDyvP69XLMgnoxSh4MKC262N8CKTpxB7jj54ZQCyEkBoPe1BwGDNFgaufdfQd2hkxPcHhJPNnTBn",
  "key16": "3QBNGjJkmmpVYVfpzTgVrGsxexXZnhwwnnkVntzABM1WbZMko2unn5koncm3BdxQzwfhvLhhWok7yF7DqXfCL9hV",
  "key17": "5V4WZFgb5yS9wVk6mgfeU4ntXQzdGZRjsMGctxQkqxyr2efag8bjJpSJcBsqNR8nLP1ku4g62De5k1uwRqmUmhcE",
  "key18": "aia1cL9Nc7ny6goKQwbtPBhbuR1UGV42CfB9vBAvGs8JZydiRD5gRUEfyNSEofprk7XXrFqLBLEN67RqR28ZRsU",
  "key19": "3bymrsQzLdyt9A3ozP6WaXzR8AhkaDYjoxJZdp5XjGAUA5vauComxp7axYj1uFnGyNw225FKnXiMULpCBMcfYoxV",
  "key20": "2pqkJiCBhhpp9Fc41jACVEwJman1hTMnrB29co3jM7yyL7vDn8ZNtshG6uC45ZPAEQDtt51RnDDotUao2ezYDouq",
  "key21": "4crYmw9CwBvxtr5cB9Bp8nqm9rWhwXb84Z5e9ofrcL4YtowCNRH5rcZJqNLfNx3XoSjyxMoFeFb7dmYJESTojpfp",
  "key22": "4ZRskfvpKJxpPBm76JDPrnPems7STDwPzFTHK8eoqJhB7FpRNerwucoqGShTwZ5c4cbhgcZZdU7gCwJENQab3r7U",
  "key23": "axWmUKKsuLdhjTY6aLFLE8QZTXekS2kPmukdpWG1bE6wm9vFzMUwbd6HZ7dQPVzBRRBLJ7zzw7LimTuFLSkfxWk",
  "key24": "Tsdd45G5aCasfvmEDfsFNM8Gu1A3i6p344Z1yJ3Zcw5VEoQePFFttqqEm58uK3KBevsvts68wJ9qekjTZqtY5Xc",
  "key25": "2yy6HCvxZvPAR8L8VQtmQBrRpNtsEHa2B2Pk1Cuj1N4aGJdYNTBkVmAkkhgDoY9kzLW2tbC8c6drmSAHn7BGWihv",
  "key26": "2D8yyTzB97itUFpdojdFaJ7CEqiraSNvxAQJLmkicbbSBJGPemhfX7oPddwQrrZSqbpzX4saQoQ8eAPgTSFFsM39",
  "key27": "4PTXkB4RyKRpKMRXDXeY5zKfG9sscUMLX4wQS6ooAq7DwTTXjtztKTPyTnUjSphBtg8CwuiygFYqidVmWXgxHF9w",
  "key28": "22MQsRF6QayNjJJbcwQXa8aVsM8SMECQ1dZKkkZD7MPBp4KBPsFhdaNP52AfxaG54h2kao2Dy1CrWxpGdVRg3PPP",
  "key29": "5jUnBpQh8A1UeURmEtGGHTrrwjZ8Sbqv4k1kkk33bep2GMkiNgzZxTJShKk95SJ7MWfLVvcy93XDj8wfmietwyd6",
  "key30": "7kpX6JAZZZZZWCDL9WGEXH9U9ZQuXCCQ4pkF76huz9qzzqaYiTMG7U6ZceeC5xJFKwr47A4JL5QVZhuyRx32rmX"
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
