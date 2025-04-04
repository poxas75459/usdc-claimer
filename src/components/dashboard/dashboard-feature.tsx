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
    "3SxKHYwbmpTJhLELkuu2QFAehZsGCeo2x6HSMPhCEkQK7M4uPnVjWWAwp2xSrRRqzsCCxwwsze16jHswg3sCKx8P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YpFzoebQ1vri1nfFBGJPTntf7RDfQn44he8hxuzKE4bXWizzrYcycvccYWNyXznhzicrZWs46jHWKNVaWKayREE",
  "key1": "3HSykfADUFtCcGpDMNb6bbhxeCmSXks3jGhfJDAbHF8vzZqRM8UcPZ2bP4yBWcnUMBU3vCuQwYaH55NBQcm2RVDt",
  "key2": "5iKRz8ecdUiU67DwEHPaLHWJLNjgNcRnMpsFGcWBEddLAPk5A2UtYxXkp7V4PorqBBbURuVBafBoJz5h1uMW5VZe",
  "key3": "2VYfQihtPx9xF3a8hJCGpW4EH4J1BDzKydqk4eoQVWoCmhGfmckVRjpnBwoKiSo5VtasR651TQTvZ7X4F2frmzGZ",
  "key4": "5MN3vr8haGM6cvYJZDw27U5vnQektUgBzC8fXnzMWwM9Hayh5sM9RK4LrS38Tqs3Vzjj7iLZM4qwV4ViAQo2M5Vw",
  "key5": "27x4tCgtuazG33YNxeswVsheKTrWEAbQ3T7AWWhzvfGxoAXBFomk3hdxDzzf1h97nDxvqRx1xteFPHsBFqrxiSij",
  "key6": "3bJxKCA56FVEFEYBnciTT97gN4A5KB8LZHzeZbfVKhgSsc3JmimUErbf9geK2P2AHX3D1RVzGJaHAMTvT1j9CxZu",
  "key7": "TDt3SqG8nAkdE8KbgkKYXmL5snWppjni3Ak62FeWtTd6fYCf5vwtYHg8hHDiN5ZbGpH62hLtH7PMCBPLu1dC2KP",
  "key8": "2XZ3PEHg2z2xq6tB7LbPZJiW798jMAk8gVxRCK6Mb8HDVgMK6mLfdNajQ5F55BSpG98f4YCaqqpxtE7KCjB77JUd",
  "key9": "4HYcWd3H6q24CuAsaZeMRC6CyMYR21nHc882Hxit2e1dEo8w881WT6Na7feHwapSYKjsH2AvmihdJVL8bFNjjWeh",
  "key10": "5s8uZf5UAEe7HWZhKBioAjt5SXKEFMzzHV8ouzreyJsdAntAGeDGmQdmdFDnYz9pt4kYXkDTtPc2SbY8F6q3DL9u",
  "key11": "31usiyAFrgmFKTsZcsMLT8oHJWKMxWPMFGj1RT89wNYVUX3ySwb5y73RXcmN6oAn4Tt975a8hqjca4JE8VbyanEE",
  "key12": "s6wLD2du9sk6EczjRKfzxkUghKV4wFj7DptJ8Pv9XnzfozDrsv55t1YcimhdpqBDCHM1NCgJRxfLh8FFVf5DyVB",
  "key13": "2S7zWL91Hk1Qm7hwgoDfp22GwNP9uieaw1KCESzJrPDcoaKZ64oHi9ACMPW4rzgAqPm13YgLkJHzTm8Tt9Q3Qvw2",
  "key14": "29QHuUuFe1sx7x6YLzLjyne1vLVfBWBxmzVf6hu2H5gTvyLdKorLGT9CeRGDN6HywWKE8uZ61YssZQTZZBmQgSuL",
  "key15": "3KbPAfBV1QeeCjgbXzJS67fkCxmMpVRcWpcfTTVV1Rus9NoTcLGew8v5b9NZB344vFLerF4TpqhyPsMbaJL8hNC",
  "key16": "4R1W8ex1EUiW6Uj7x5nmh2YBFw88wCy9xN6czyGZMgJFzfNW4RziyztbiGbTMKGqmjcqHSgFm7D49ogYyBqKij6D",
  "key17": "5R1G66o4EsrEksogLfrxk8ctDgUwKaoC5h8miZv3oFaTe811MS3n4uRLZWGR98qkEdvUscByvC6zSe97xQffuox3",
  "key18": "5teMNGDHSu46VsejR3SLFMPKUi2EVZFGFgHstjbF3thPZB12NUnFEKeYBG4auxFoAU3XcE79Cn5ZWBZw6stxXVP2",
  "key19": "tJn9t9up3ur3RE4dG5253yAsd9DZ2p7Ym1pnbMSagxZHBa2PkrAUtbaXDw1BPftEZEFbUPWAa6Guc5Wa5Hzq33A",
  "key20": "248iozzvHQiTTHYq8HdumpRi6JbtMP8AxC6Yu3P6NSLcDvHFMGpGAkYFGR2xM3s3dsVzVw55XBiGzHs6qyHc5MDL",
  "key21": "5YAM37cHPDLzHCnt6UVvnvqP1YGkYFcAnNz65352FfWox3Tby5SWogUGNm6qiL7iLrCvwYaVpN2SYKMVAPG9pe81",
  "key22": "43jaFkuQ8JU5y19YKQhFrZfqH68PsQsTG4mmHwPaz23r1BYRKAK2eN21N8xKaoEhD8tXp3hZSWptguxyh8i7xZR",
  "key23": "EcFfjB8fHUQrtx2BrfZFhY7JgNHdbfHQ39q2veCno2ecR5Tw3LtUfPV9ZyKRLzEewC91M2bA1roVUAY3jCFBusv",
  "key24": "3XjcNY61GHnEZZQHY5vnLBE1njUAUeS28NKWKZXexF2V2jdxZEG7cAS5CwpHZgWTKAZGo1VMQdP16kk5yDVTTQN9"
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
