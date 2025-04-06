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
    "3PcDNdtYarXpBJSwtaXukfp4fYrZsgMeHhAnHGAFx3kgmLsQtneQ6GeRV64m9y7MJpaYnWDEBZwuxTKCBUFFKm8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2pno3HP8FG1tSfh9gragVr1DxHTVm8RTjKQC1kLx6obViRE7jv3v31cwKDjhDQmyWeuwd8JLSEMGRviBvfVXb9Nx",
  "key1": "CFZidEeEmvHFMwBvSQVqnbg6oYRNWxgAi72C8Db81CUwS4zAk4LfG71CEu4GGV69tEdhNULLXdNyV37a8yzhLSQ",
  "key2": "5RKU3PUSBbBjCm2wXBofZr4BzAb2ZWR3GjY4T6UnmY5WS54372M1ypvXiYD7WYzux4acpjbkWAozpwtXBAdkZMS8",
  "key3": "31oLH6eLjijrbu2harjaXptjisUu6cD4ZWM2NoepxonEm6cw4p2AGmp8SRScSVWnvX3fJBEj5UVRcNg1ChcsRV3J",
  "key4": "2bHnEViUSctUDuJhWZyFrvUPyt2Yvit6Rq5uc2ncTf6oCNvgL6dXwV7UXNKikwmhMhLgVXZSLMmKaVYoK8qQ3pcY",
  "key5": "5sUUkHQtf9ms6gvrpaEqqaAjFjfNCuNpaKs65DW31v6jVNt2ojujCdZ9Z4CzMxNSBxheGeyuWfiALFXfSfr4NTkX",
  "key6": "4Jc5Scst55eZCSHNrQayh4xJyH4eYoPGgmL1jE8wdpYcmFddS2nbUPw2ZnAPzB3nLahPg7TMh4jnEhjTio8Yaz5v",
  "key7": "fPtWzDzL9Cf3ZiNX3nFzuvQYk7qwd7vunPLHc8ro884XySv5uXRYHY4P9n6kWpdAsDLVVAjg6nGMRXGPpheUDE1",
  "key8": "gcgL9gUzjv5kRYqMYpkBUqfUEdzMQW3g9mHjFpw1SgH1PFEmeQgaGuFeCxXV4tXeHLZmHkUXz63LNtJLEPhshFZ",
  "key9": "3trs4nWH3p6DgvibcqkEJxa9143MKzyXeudp63u6UcRgp4gYGhbzHKSr6qNAWg3yNRZZrKs4Mvd9Luwg5XSHt3P3",
  "key10": "46HnRLeBse6RiMANb5TBX7Q91FaqE5YLP8bbWqNufZaFVb3xcyVUoPhyAQq6vKt4ddoYzaQCGUhjPHbkf2SBitDv",
  "key11": "4LPwDqG4DSx6kMJByscVZkwt5KiRzLHRt3vPMxpn2CH238drUxVxWFpjEfmB89ZGDeEjYxgGsN9bFM3fRBfZx6ps",
  "key12": "4jeQNkqjQzJFWFvAERMfz9Xxn8KYTEqxzCk2L5SdpD8cuajSmLHGXC88MhTrab3hjH9VR4rJ5C4Xpveqs58NvwTY",
  "key13": "4bYmM5fgHNohJBnHfRvW2aoECuF8oWirhT2UwdrXukCYUepvFmU4iHdTDRMGT4W1i2FvvW4J38GMNvHbZtQ8iT6t",
  "key14": "4i56emoeWo94cGvnRWMmsm5aT4JvNvxMJZTAG9TjfpJpf3Vw8gJB8mzJdqkHgj9PPUDeYTPhdiF7RFjCfAebSFZY",
  "key15": "3Qeh43XP2F325fRmBKNtdNDzjBdkAk5jsWvHC5ogo5s2tsromgVevb2XKPTtoux2A7NStuBmtgPomCWsYoHg5Mq3",
  "key16": "2dNfomu7gvwzXjcm83zNPnRuU2Ri6mTSCYVTP4AE6W6iDkgdK675LAj8esxkWpvbkPSv9cEstvNwuGAPYvWfYoRM",
  "key17": "4QRgy2eVbbTm8St7zbjQNinxoy2LgNsmuuoQMmnC4qWb7YxfkqKFDL3Fw8NGBSS9MzsPbpzZ7JuedzeLSGvAScD1",
  "key18": "4PyeaHnu2A1eKBuvZ88HXeacPmGtwrTFVhumGtK7FVJ1Gr6RYZdwQ8gAjMugMjMT3XwxvnofuuTsHdbUcozkd9hP",
  "key19": "1xGa5aNAvhnsaeeeT1HnKBVsmKPFb8euiaaxDCKEbH5pQ23HXKPHT8CoD5GJ9K2i88foXWCp2DfqYjBvy6nWoat",
  "key20": "54PPK44DJhk5n4S9REUob5M48EvLUPAaDzQ56cuYNKarVYUWgSbQvMVyozZXqKDfa2fFdX3MTC83JFwamXs5d9En",
  "key21": "5b2PUZNoScWnrhgBM8q1vVFwNv3HjDjg7HfzkUvamKftriQW6LQf1iW4676Yc66fUobKxABHGgAK3Uq3aPeLaf8b",
  "key22": "2QdfK4X3f4duf2wi6WZvumbrB2y9Lbwy19yq7kJsZi2zeyAH2geJaiXt97CsP4HaWqoFSjBYbGr7zamwEnRD7gKv",
  "key23": "zrgdobBXPWNuTRh6Mny3y9mDfzJPwyxpJGrDEB1SnXk8pp7CwapMucUaC6X8kgymuxBCnEaViDPcXdAzziAb4Fd",
  "key24": "2c2LEipUq9AXpZqpa8sJpXnC3LsReuujJ5hGTtcQ7ZovFZuwvrqF1Ze3kCay8oGMfuLnNq5C1boC1jFEPdMHsGWD",
  "key25": "2oU4YmpEziWrBP4htdpttKswuL2CxxBnPB5F6kkjqKBZ2gWTP7igVkMfPfpuxC8CohmnNrSy1gKmAJuBorC7FCTY",
  "key26": "BnYTYksUaXEUF126ZNK4RYddvshGQivWZGFwemmZSxdyhPtPj48C9qHcXrnuSR9b6V3g1J4FtAaYj8RDRQ1kFS1"
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
