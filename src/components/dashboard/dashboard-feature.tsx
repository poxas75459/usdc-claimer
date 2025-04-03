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
    "63Purf5ybEqw89whNyEVahg3AnfhkdPBp19AcErHiQTRK1rbx4b9kW1eoRskaMebRwz4SGzLLYmS5nmf8qYzHLqL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pkwuxq5JwZ7b7QSTTpJ9sNh7LZjX4isU8FdNxQCP3U44tyf2akbxHHFobFHxotoxrDmzhLUKjM1ZKcCRsJqQbXE",
  "key1": "KDL8G4a9r9BcAiSPRjZqwkF6CE5rbyirdU7CY9mccaNvQ1rmyD42SfG3FJaKYZ7GzDHbFvpG7wYKMAb8XvmEQux",
  "key2": "3JQSwyShapq8UQ2X2zjPCefKoxzBnmbFb7GeuUfeUGiGx4yzSgUQZN8geBoo4qMsNcEXsB2DEBgmP4c7usr5qwH3",
  "key3": "48AkLAjmJWfLtfpFbNPMFHQdhedbU7wXm2dGPPKXadAzEKvogCEckTfxHxAWWgPNoQoThhpVyxwjCgWXVMaG67xo",
  "key4": "5cB1oagAc6syWQmhHavgaYq93inU1V7VKVp8br9viq5Sr8X7fZ9NNTgNgiUKVCtFtCzpm4CTep1hb6Q6a9RHjJqq",
  "key5": "2vjFc75Ck9zaZrJgX52wdG2QM64kvoSmtRp9h1kgJr2RUZdXpF8ML9dm6UpMDEfgRgcRY2M92H3JhSEx8Lp5CKxE",
  "key6": "Q7KCkSsK1WavehPPhk8idJuGc6cY1adwbQCXMrPx9tQ3iRhLno8NqQTo43bs1Yh16C15Lxdx8HqaRzQaWxnnTtZ",
  "key7": "4pHZoJpbfVm3tzzTAuL1FdAJ5a1FDAiUkQum3YyXDCsjsFfzZK8oFXruza2BUsHN5M4ZdasgampBP96V7Kux42Le",
  "key8": "5oNNSMKwyQ4HDyhWEJVePhJkkfCiYxnB1m2qBDoeRFfFMvsJHMgQZ8D3A3su66ZTvxwUJLcHZgkGPj4kjL8weNdr",
  "key9": "4DU3YGNSMfbNqC41bpMeFqDHdBZafHE4mqW3w3tNBSfxNf5di8RXUmifsxyRb3otCYsHMBw43EvCF7TdKd4E2C7s",
  "key10": "NxKe8AvVSC9BJqGYR6u6GT4mn9W3YW6Mj7mze74BBj8n884HEky4BJPNDkT2HimS2zAta2CT1httpWFR3VFYrPt",
  "key11": "2QSbG4WfcspFiTFAV4kZM7MHkt1rfeGNpNGN9J6cqvacL3JhVkV3G2MhHUpkwmyX3MDkjnm677LyPGEZZVvb6PTv",
  "key12": "5LdAyigmFcyfT9N4eXB8cxengdbohk59wEcmC46Wp7jpur9CddkPVh2GDPmsJL2Jn742mpGZbY4KMjrfSZjeSALW",
  "key13": "3cK7dZwAsh8dpr8fJnm3C6VHdBTzBu7YNVKzkd7DU8sXQzGadycreAijRmY7kEH1pb74p77D6HAFL9EXMs19hB3A",
  "key14": "5MDpdfD9TjdwamYAJGV8pyzk8pHcxaXi3hDdm6Fbv2FQfKgbTdyiaxh6H5RVdXFNSqLa4p1LLR5BZyoxuzLDS2uJ",
  "key15": "2mgBVS52PrAFcdhwAN2Rnd3ypYMUk15RdN2kUjaCYkoufkfN8XYjXUhd7SfbHjjSbqj59RCM54xD8chfgAQ4uJCw",
  "key16": "3QEzZEfWygfgoQMm57LSRf5TVSEg9LHS2auXd7a2tQJfCLNh6EqQwG1wkmUKqaxAT88rq33zAnZjjCagKKezso48",
  "key17": "4fpvs1RyqESaXcHCuctgq8G8fDzfA4DjX4v16q9RFysJWMHyezzhaVihwppokfcY9kV2573tCGcFMcstz7Uk5Rhg",
  "key18": "5q9JdSDetXfe9htvJyFswHKZxW6BnF94pUYw9KfyKJG7RCpijug3968N9EgJM96xZ5cyo7a1sqAu122C372aZLCe",
  "key19": "568sp2jymBCPufDBwzTF2hBHRe6rWpwXJrrsXVy89v1YY956icwMcA59Ffex2y3SQLkCgimEPnPTzfe1JjAmd7Uo",
  "key20": "611DzJDWddGtBWvCkknnRxQ3f5BYJVCwGwQMqU7L11v5kukYUbRsEhgRvgJy5KBPVLdmnukrJdUzRDFBX36xraqn",
  "key21": "3SRvgX8b6ydU7ehAgEBeWJ7umdNgod5gXdy6uuwyXHFzZwWgYaAisenMcN3EzSjsr1ZRp8hgDrnxMqL857JtLjmm",
  "key22": "5GJEQXe1oiJ8K4EWvg471U62ASpL6jftrYhfTcrru6SuqvKnWPgmZsFzxwDWLoRGa5c4Jdx49cxWbrHkZ1dikj93",
  "key23": "5219DwevKyssyQA19mvbQZ2sPap4S632UCF5MXbZp4A81nksUsokhrR1EGXTvJhR8SRL8tY3iaDYb2JizJy9hzE3",
  "key24": "5RYq3zkhiTLqY8t2UK4DizzWZyC8H6eaLRWErH9K6cj8YUb6bKTL56s5yFmqFMvM8LkP5Cnx8Wg8h8gh8emk5cPv",
  "key25": "5Ckx2mrTdViLNjjLLTtKDyVAFD7ca2XHfLffoALqQWjCbYH2MvG1kwNuaFFa4ZZeja1bXkipWac1j6M2NkPsfXTo",
  "key26": "5x8FHdpmbXHmMVd8xeaEDMUgmeJJF7m8WuTbmFzkSF5RfSPijab8B7qEp5VqL78eJAdTeDF1zqRZWwcyUFPFt7Jh",
  "key27": "4QZT6hkscPEnaMKodEhgRLaDeXDwKLAGBEgae9t9JSEQwdejMivAZS7XBmjzx1MMSdnuBxMor6sf5aQLnWpHpVYP"
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
