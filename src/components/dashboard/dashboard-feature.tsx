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
    "2Qnrxct71d1wTvyMH62hZKsR5gN66PrLeDvxQT1DcuCp9cA2JmxrUJK6qiLxKXmoxicaqArAyV1dpbGCGuUx66z3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iybGsHpiQ9mDfYPy1v3CTgQ4JfuodJPLiAqF1QzBBr1bkwB6VH4i9yREEHcrxSatmsXQSqanZqDc87ZRLiSkMnu",
  "key1": "5XR1QWnR6ZiDbvTBrh3k62fWJaDjGRKUP9W5wgXS6TuV5LUMbLrNbMfaqDVU8tTsKqiQfZnAzzsTBJNR3RYBr6WP",
  "key2": "4zCGAM7kpKge1P1LVLqwfznHvmCFa6hPyGncVNLSyMC9C73GCHgVmY5JekuEYkHB7472xatnseKh7qbRFSZUwATf",
  "key3": "31gQUiKZhqdkAvmhCkrLAqSo29WFk34BWmTMQujH1yBeKHn8CronEjbq9VJuPJsXHMJbiTB1uztpYYmE7U13L5YR",
  "key4": "4Lmr3tRBE73ggPxhmDEtiy3V4niXtVbY6B5S673zXa1SrbioZAR35d2mbN5KPNaGUFpesGqQPNz1mfkfDspcQkSb",
  "key5": "VZJUbPiHBsVXjDw2fKhaJAXbLak8Ky1g1cZBG5Tsusab5mjfYzVziDVKHFd2T48xedb4QuEXY98RVmhuV4mAdFD",
  "key6": "22N7U6eXm9TbswTKJxFbcoSK1NM6Dmqf2Hi6SXBMMLDSGgvecEps3ZP2ih4nPBqCon3tfTRCxJXdWx6jyZNFWpzm",
  "key7": "5BRWpWoRW1gDKXSUsxxp8jJBFJ5E7x5HyHB5ACnqjLDthivJjWVfYNDxdQ4qzcbiLLh2x6DseE8K4brTNKDmorKk",
  "key8": "2qULGMBQXQCePbjcckHFde55SY3csmD1EkPLX2r8Nfa88xWYgSUvta3fmtoApWoFaNkdqyYsybrxnMZemS8iUHyE",
  "key9": "2T6NDiRShYiijxfodkQ7aMANTnMudPz9PsnbSo8CXHWM81Ngqm6XhXCUvWtDQ39usqVRZJDMhf99xdyPZf8Tc2HN",
  "key10": "4BNyPzjAXKZ3EjoZGkC8qWexALjKYpJmAba8b9tk6utH4VzWfGDJcKJzjimYP7QbFe1EgzHLD7RHcwMxukYgdfi2",
  "key11": "VBjrgRUnmQRdtuhPQABF4H5WHd8b94uTPaNGPRZJp2HRZt5aR86q2mXyF5wYHboArHhGiRPLGBEPHYFmfjUmCrm",
  "key12": "2phjx6JFsiQT2PPqTgBCj98o7NgNMjsPk4FSxDF2S2YN6BbJLPYb1Gnh1kXUdk9j9bwXUPWoGRF9DmQdXcu68NPT",
  "key13": "3DJ2FaKuXCDg2RrweXPy8hR7fp59HbKFaQnG9HBk54zaCwFgfs2VkXDUgGQQ4xJaPC9gJGSgFrVM8iYU7Ns2ULq2",
  "key14": "5PwhpteZV4z8w2kNZuvUfLEsyK6XHZP9Mu4Q2D1AhCUvv931wSrhXNK6A1yhMVwyQi9VPBxXAgRkSAk82sKtymir",
  "key15": "cnHNouo4kCwNtxkc6Uiw1zKsfHR6L4cQ6eXDGdvkbVGeTwFCAE5CWM2sxrn1Ux65jQcyrLVBaJkFYqwhvxxKvgK",
  "key16": "494ASawrmFHK5jRJPRytw4JUWp3uARmX6fiDug2rG1Yi3AzWVm3WDb1YqVafZ6W11FCtyu2XNQ9N2NXUdDsPFJhQ",
  "key17": "4EDPnEL4kNHpfBmGKULvr2SVyaULPCvKtAQbrLHLT3vcZYbiy9UTeFotrhjQ3UTnQbySspWusz95V7f3Qzmtm4kk",
  "key18": "4RiSKsCm5ZNDNg5fefz3J8QkKigqJrdya7i1VGfVhkpMm54aHofacZu82PJK4GPZBT1EotnEutUA7YAdxfAKd34E",
  "key19": "2nF5PqvzJQVhqUUcYA27J5G4PWJAgUe71QPGsjDDmCPKJWvDQG2yUqGF7FvS7Tqf8N2We11xQrBdYBPenVF38Pxn",
  "key20": "fWegtd2onHSkpd1aUoF9iid6dVBfTXvuR8gajaePJ2ZCgznQi8cAuKCiQJW1YJoPvdoqvZDkFdEr82poynAY374",
  "key21": "22bDM3kKWFQ5YcaKP1o8SVvChpa81KjWdpisKvZRrjkqAR7h96oR79RwbX2wLxE3Pe6gJhcMsyXD6B3fPRAjrCsi",
  "key22": "4MhS5ELYWDmw7kHZ1gDBBCDEfSzLTB29e7xHTEZTrDQ4oWq2CzwYqwv2pD9yokGZQLLRcUnddcEcruaGsQJz3w5",
  "key23": "3HnUDYVszvSJ1V3NYQwfqgR8AxDu3ucnBLjgHJBD5eLB51Y1LDQg4HaBG9ro9YuefxGXZv211zS7F1S1sFf5Sbfx",
  "key24": "2YsjFcjmLFTmAwafGDaXDwjL79JJnYKozCw8jnZ7c7y3VVPTAXFsp6ugRzLBKd9pS8EDpQwBQjwNWJsaqB71qr13",
  "key25": "3S6Yqb14TgvdCFdjuwBab1zP5VQvxTuxNmhK3yJTJwUgWXnxztMiPTsXsts7BS2JKBirRQ2CqP44meiUvLb8XbSY",
  "key26": "66ZHC5zWLBRRy9SPVuHL24DD4Y5GJ9ADCe9HvdsCyZBjWRW2Z67baPUni3uYNY3KD7kZTnDgA3jfVm9TRHy7rMo",
  "key27": "2wsTY73krJbSF4gMH31CuAgaQ5fZJfdWvfNFxH6whCC17Bqm2QkPSU9eA1Jpx3FsBk8jZQxbDwDTZvcG66C6qwni",
  "key28": "2WGcULpTJkgCPaR1A7N2GQu56CNMRjUdAGkLDkFrqt26kCFefFwmRzRvUxZbsrb711jYjvbSWxNpiMqgSpPtoNBf",
  "key29": "2VB8K7sUaMmLcMkJYqNe8N81w7cRDaxPeArVPcM689dkZ8nB7Jb7hb11csVfJKWpUymsaeRXFyBzZiPFjoYn6EU2",
  "key30": "29gMfuznwgWAmWjC9QjtYK3vdofiJkcSzu6fYHMrzFeNAqSdLha7EaCDV2DKpHU6kXLdvAkd1UsniHPyyT92SHye",
  "key31": "8SPeNCKB2q8kzBXQbVpdS9Qc5n8tCsdjv552mZNP3kgYnbv4q3SuVUF6Dq3n8hKN8XgQUNhPc1kC3ScLthtYH5s",
  "key32": "2n7393UMxkLFx8Ej9MqGFRF3UKraCApdskvMd71qDHLpoRw3A5avYMJxwofsG6kj2MgTgDkMWh4PcWxCHBRyoj4K",
  "key33": "4TgYfWjFmB8wzFYgzRcMVy5uSWjXubC1BVJWNhCJaWAhdiyvdna3eVw9xj5EGcEZWZV5V7xhR5YvCyjk7qzNTcVJ",
  "key34": "3HHUfJRMVWVE3W2dhzfWLyMnVUrRUe1T7UHwSxC8n3on4ApMPMEVByA661XnEBGyrow1uvApXcr3p9swhZ2PWLEx",
  "key35": "36WXTStfAYYJAUAeUz8je2M2cmFTpp88t9HSuWYsm1fLZ1NW8dTgAwAiYGieR1JLscArjEBjNRGctwk3RhiUQgMV",
  "key36": "2bjaR7JsR1PSE1TXvzXUWLdhk36kmtRT7jEqiCGP7ETTAktUMEoRs91jQt6UEq1zJzKbZwFjqw1kvCMhaANs6WqQ",
  "key37": "4hez6aNCS6UD3mXofBYXiFaYSyHdimfr6cwEr34G41RgDKQBPHLr5JCd8GRcZ9v9Gk4RddMe3JzYzNAcmw6MSXLb",
  "key38": "gvujqPH88j1T6WMfyp4on9fmqFRu4NNfG6mz4WJvKjj66TkKV42Nah3SKWGvByzMk9HkuvogXmoS2Cyo2bqZLKu",
  "key39": "5qnoUnKvM4EtDMcNYkGQq5GkWprYYMvUGzpgTqEa3C4A1jJnrB5yqyMnjCn8gCtJJCgJUpBPzSKjgBb9bmDuYcPH",
  "key40": "5tDWcdQHEM9kJMrQprgJD9jmqME81tTexJxdL8w2a1scFnAo62enjkVEEMDi8mcY9SnPc3AkGerhpGeHGLWBP9qx"
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
