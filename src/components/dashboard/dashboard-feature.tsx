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
    "22HPQXfBrALFiTnqZfZZM6GuCHZypNL5vmgPXKGsotw3bQHthxRj1f3HxCG7x2HLGA8UgFAc61GWLho9LsU9T48x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4sDaitXj2NSNAxHUXF8ExoVhq2Qjojvzd2MCcYRZUUchP93sFfz1QWYxMao7yeUrM41JYtpArC35vUzXi3osWAqP",
  "key1": "4URrnRPgbQzW81eiEGk1Y7ofdbbW3q2kFiKFPPy3RPkgMCRPkuDTbgBbrTS1EmdVm6yyHEXdKF6PbGohi4k4ZpJE",
  "key2": "58UGssx8PYrwr1BXRqT7Hz1yWdq8NsmAztNoQYsZCMKYjS9h3TLBraTosfGQN8YD6NCTCuhkckZhE1d4nPe8AfsS",
  "key3": "3xrDvcWu9nzYWyGjNaQa7D513QChE1zxHnPui5W81Na8teiS45Ycj6XcUf4VNXKZLmC9CYmbWHA8qQWiDzV2d1SQ",
  "key4": "65i3BYooWJv9Sr6wFKP9q2HRbQ9nUw7jzFe5QZD44WBGdmU5m7soj7JZzPtRWuBHRyRkYzkLt7KhHKifLSBYZic2",
  "key5": "2HZWcDEdWZBuqw45sbjDGnzwsr2obBgUBCBbCxXpt6jTsDh83NDnBCRpnx8RajuL13mbupSF6rTaLkN7QueJankb",
  "key6": "5BXpwno8gqjgaZLMH29Ny39iA6JAfY4fQyFpM1yHrNRGMNrKNivzuG7GfzgHXLgndXiXeiFZkJX6FCCksgamuwkH",
  "key7": "3gRfLtMNXPyzqcgdoMvC2XpBNFa9yf4LLfpD3HR2dHVWvrwTyXPZxB7TH3y5vqbuDpn8AiUBYSZantu2TmsAP1w5",
  "key8": "4NWyc3TgwDWf8zSfeuHLu7tDYRsTzF68svWqxnmgHiBhR4QhxN6zhZYnDMqBwfSERZAq9UrCywB3rd6LY73xMyXr",
  "key9": "23dwgqG4uPfqXTe6w1U5SidyfDzkFDePzMZGvnGk5GwpyBR5QuooWn54VuVcZgvKMPQR7EBK6vvzv5nw5gcDtv9W",
  "key10": "3jB3tpLFLDH14TZJsH8WyiGMfHCsjY9WFNDhwYHC7MAxzFEFTo1Jkj71weVPKY2M9PnuxKsCdacaLX9JAk5NeCxR",
  "key11": "2E9AuQXm5PHQmk8C8kEPPHtEepvjo9Q8L8AFBcSZbEwUYHXPxGNapFSYduRi7P4QunwtPC4noo8ATqoBc7vZY8kZ",
  "key12": "5NaQnLbv4yB1HmCfnJPSbeGDisWkcWuZkJBQvWe1bYnmLPWdAcd9BGwDMXFosaiDTEpDtafJRKF4YTBWy4wsZ5ho",
  "key13": "3jsHcb15xn6fDHCBxEVsde5BNBmPxadfDaaioJMYi1yyPgermN6uvre9xGWzz4Y2QNbUZE7S5rcKX11hk3igY6yK",
  "key14": "2N6sEixiCEYmbQSL48i4YfRMCDk1iJMf73huoemdKMbzeUMgAVU4yqQfMpJQe5P8R3Hf4L9QToRApLd29WTbEnjP",
  "key15": "5K3DTq1iKC8E9VEtKgmm8k7Jfv15rprxFhkj7Qn8Gk3TMbHn5Mk9gKc7xsZv7wb5Cad4diZagUtLscE4H6uPzkZm",
  "key16": "5tNF82SMSDb7PXotxYg9qANjNgpXET6DPmapGAR7n1wWpRsgeM114sygVGfXfcaJbhVdRDjKhZ8oxBLTH3whc8cX",
  "key17": "dNMiPJHzb6gsKKjAZqVKfifsYPNfSyANriBSripjLAK6wn4x8zUcpK3k1cwhof3ndCm4ZCLSpp51Xtdh8kQmM5b",
  "key18": "4GtiY4VpT3cGA6CsG5ynTzUW4qJhc5ctksSfCHZ3w5zjTP16jiMCZwkN1AUNr2BBFrtYedW5jH6X2USi8hX3ZEkF",
  "key19": "B7fKUiAjHjvEn8byCUkCXWuRJErpZJNGr572LFGEPHLCBBKqQ6i1WjrHf9Vwh3KpTx37W7pex2QMPPEwpH38zch",
  "key20": "4YjsnjqetNTQuB6L7JLP5uYypbJUPLUY6cNWjH6EAqJzAte4JAz2DdaQGnzW3xvPb2EW4KA46PR3QEnXJZuZYhPN",
  "key21": "4jaxTxT27uR1ZijZcSeZr5WexVNDC1vETHq8WvHMngLfA6KmBErdb8GRoCbjBixJXiTeuaENsDqTtUB9pdJZVVdL",
  "key22": "41qM55v6N6p459b3d1vK8h29mroQFriNcHBNLRKYRKCBCAe2XwPcLQTzsYJazcJr8JhQ7TtwsTJT33mTQKfLLFRP",
  "key23": "2Pff5fd66ZF1BpoL1bLo7SxpZ8QSsaStjGYCGSdG8bdYdDnYVadz2VyM4EF68SiM5havjRCepwM5vDmw9aNR8BTz",
  "key24": "42LxFLJyCH7xe533y5VaUU7UuymsSezp2CdehkccnQGfsAxEjiV93CNyZkMQKE1DdHQAZM7Htk9LXXF2R3tA2mTA",
  "key25": "4QJchJfgJcjUtNw1G5wNwbkrSeMU8CU6oPSRbV1T8aVvsKngCfXP1RkQCgcb96GrGsSX37jifiFx6Y8vt26NXgkx",
  "key26": "2AatZgoDq2K46z6ESaD3jej86eR5UkQ3Uq9oyyQbe9zir7d5yWAQqMY4RJgQa8LK1SDTZ8ogLQwxgenX39f8cFZS",
  "key27": "2mtTNbKqHVCYaRCuoqtDgWwjnwQkvTwo2q5CTVkunrUSeu5ap8Pcd4vgspCDFwnofET5rQT4hvNyCFpPAEobcpmL",
  "key28": "66WSwtbEYffBnUzE8KyGSs3mqiPzACeNqPjE9R8NiougvXDtu1nPLWrT2QNnrGzSAgvnCkJ6YrQTXS9T2dgESVkB",
  "key29": "Lhy1X9wTWG8wt5whF4sKNMRMGkapFBVwXSXAwKgZN3FECChv1o4s288BoeaDw1takEpBfxf5M94gRXiDzWJBSPy",
  "key30": "676yMkJ8x6D1Vjhf4aiddWCVvWKvcR8jrzuCC4X9tSzFNcZ9u2NKhaUksFFhiUpZbQBnBXyEZRscTCiYf92ypHNL",
  "key31": "2bdK4KqURepzxX7fe64Ykt9gx4CFhfPSVJT4yGHrMhNSHi2MrotDWxL3VXUKLZVQD4pRMAMqBt8PBQpPGi5nGdj3"
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
