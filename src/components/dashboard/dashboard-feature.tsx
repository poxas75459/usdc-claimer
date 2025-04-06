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
    "3d7xGYohR52ZZavnJsfKkXm1mRfmQHS8J3tJQTBxHfQbzvzPskavFzTgyEDG2J4GZ1kMthhvNzxgH6F2U8cLTZhY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5M3CZU7kG9bzvtHo7iZZraHFu1KQqNHQxU1DG6f577qJwfFSMp8Yx2zP2GKtBZEZD75TJPWTg3b5mLUj8XGmjwtn",
  "key1": "YuNVNw5vEtMG2MNoGrGNEgic1w9yhVHkbFPhRwvKfJhKuUfPh9nrvYfVyNs34i1inHZYCZRor8exB66h4RTJouo",
  "key2": "5ZdJ13CsxGTwPcw8fX3M6MZeFYrXbz4UW118o144BzfNZF1FhfqtFjmBBRTrrt45rYDywkpmfeEt5n4hEYaQJ7Ur",
  "key3": "2Go3ojgbBpvtLtjjX9LJLAZ4QsDSoqwnx7vycY421nU4m3vnyLLjijHh6AZnYRm2yauSxPoWK5z64YBKqczZ3xtV",
  "key4": "gRuXtX69pDT9ntRvKe72dHuUJeXwfCyDUCYzu9UnkzUr3tsLexYp5S9X6zAZbuQ6rgVHucgt1YGkb2VEKUiwMin",
  "key5": "456Ueytyw6FCKAX4Axp1yPxjeUCSyH6v7np6LaffCiRL3ySduUodvaa2SUuc1Puzh4PKxeeYVGzgY9P7LgGXuuiZ",
  "key6": "37J4xE8z96C8ik6kB6e41LkTuP52kZA2bvWUjMvEmGk8bA2ShoWwryV7KWYg413LAW3kiwfELhEpWq9quDMMkkxP",
  "key7": "4wS9FF5RubBqkTdkGSsWmsNqwZD9turnB67Zcxej4KmrSz9M9ZrCkpnykQWZhVkdk2fAKFUF9ospychig4edqiMp",
  "key8": "5nxVaiaLEDePVWmBr2UXFQjbrDzevRuWfvbJXdey6EPz8kNTpD2M1Hshkhsf9mhNAL752aSdV6zbZ7LXxvrsaXUh",
  "key9": "2xnq34ZY5ncZuzdpZkipUp1TeQrUi6anN69nVgh2Gue7SeWYKsZJs8SCLgYrovFaUg1ARdsaDqxwLWamf4MrSxRL",
  "key10": "mvW13o1tRL3NdNugkKY6eHCYhLFiUJaJpPz3BwyUfY6MsrSCBHp5334zWwshmgiwuB47hCXC76McCf1vCF4zXUm",
  "key11": "hWFvsHPQvjJoZ5uYvRhb6jpq6jNqxwycjticMCmQWmddub6PPEhR7CnBkJfXDFNqpzwNaWrL19Zk7ubTdvsJ7dG",
  "key12": "4LuCLAJ7X92kKMGEPFwzitwNNGSiJLQkAh1UvDKMSRCPLoxScsEXXog74iqdaRPszyq2SfNL9yg4gSXukN6NdrPf",
  "key13": "3GdnF1B5UhY5cTyN3tQZjUZyqDtMQJksjBKW3E9BvFjtU8hGA2ixMDT5DPwgkJ8knDKZrQdYUgf48k3XFycd6F6x",
  "key14": "5pgp49dKc9WsvPS5nu5CDmUkBtMwA7eGEzT33skx5R4ToD4tThsmoqsH4h96F9V9hsc3i2xwLt6yZtmANdrXgBiw",
  "key15": "2seW5K2tbeDrsj27HuEF7eNGrHGUTQfScrqFPkoNr21wMtNnTgUZxBmrJLDBWjc6erJDpy7V4tTgr9fpDJhLmG9g",
  "key16": "285io9J8gPXxVRJ4v16bMj2irjFMN5C6pHfRwfJN6Vtb1E78tHZNBmNaA6RHV2FtAthRfhdsrrjaQqkmvKMuQ4um",
  "key17": "2EsPotKXzQH29VXxAnD1RHHfp8rmMWDanTHTvRUBQyeCtkFqFP5ELRdPwGdZHroEDoomdB85ats8KSAkonVT5vFF",
  "key18": "5D9nnLL8SFQVpn9dguapDci2ncHDdrtg1GbbLmpPTC1Y7dTymZRYsepF5zdnddbH9M47g1gPvP6oA7AMmUbvT7qk",
  "key19": "3ERyhGxAsDhBpSdeVKHf37VXXogeSwao2G7VyvDBFYvWCHBcpULCYUFVvV2c9fqB9sw4ioPvmFhHWcWhEqy1NqCH",
  "key20": "5RUq5GSH2UeqUYSjNbhjbDGv6apM6t88Hkptz3x9r8na9x81gPMerNuHFzDyWQu6GoZ2Qg3xW2t7XAhMgT22esw",
  "key21": "4BNghQJrbsBeKpvXhXktk2UrKxmtGwMVCMgRYxCEd4qs9zxg4BtewCq7oHgaG2ccJtc8LoRfkUTokrjJeTQR94Uh",
  "key22": "2WD6MhEMcyTZEypAyR32rxvgWEbqkVXgaTHeL6u2nPXn3iV9t4awMyPwf9mAWeDaHX8VTwPyRsWfNzz4Ai165ris",
  "key23": "4qyGH5eZiAJF2DTSN31DPf2tQJ7kJ3mapJpg2PrdrhfuQkcpmZ6FQYt6J6BbnAoxFWmHFQFsABMV1ffG4guJkpp7",
  "key24": "5PULq6SJpj6yMJ1SAfGzWhDhx2e9VUa2NDUjCxrVgYbVfW9BhJKHuSNYc85AikwJC8TfRVRiSf9FF9PfzxLr9rHh",
  "key25": "5dxgMawh9tKScJhbkuixWXdcVPeRL6ZG5zAzPth8Gt2AAiSEpBqjnZ4ukFAKwZ5Fyb5KwFNxS9KAVzKZWgdwbq4H",
  "key26": "4zymesCP6q3FsgPu718CCMBakUC1GCb3tjqBoCV1H3omaLCUzVdoqtKNZPrtbwhaXCWw1emYdc3LZHk4X4dR4fGx",
  "key27": "5gsiUtoP5hg75WSX5jHgmSpAiVsriGk6oadvFTRXbmsxNfveEyjSMqgdY59D4xT5FFVnceV2devSYnwFeyfEUg3T",
  "key28": "5nGs8MGVV3K32AkzX2gtGazL8KkPGgsX1xRJg5wJ8k7WkEuryZomTrmPFXTryV79EifvGi55FMfBGRm9CmatuRQy",
  "key29": "dqPbgpkpnxSi6gwzPmrZSf7YbPypYbAKZNR1zu62i7Y5RY4W6Y2tRVuX73hRwjJzao1R5powP6QV7kvqwu3aqZa",
  "key30": "5RAUUY3HFHV23jKjx6RRaY4C1gAGPqo4pr5rC2js28dMx8zKCXukdRnib9r3uLAqPy1KVi8UgTs4qwiisZ29Gudk",
  "key31": "4m3mCk88opFpRQPSejbD1CnjAh4VX6HE6W1T6QXgep8V4zJZMW7fJYvKE8qtNJtdFUSnHAqtWTNNocjQDhp8bQYK",
  "key32": "2cHdiB9JyoccXbzw9hfDf3G9vQWjB2EDDdrReBKyXqtifHj3BN1UUPK3nTKEiFcZn9xZoVZzeb4Vmri1QbjvLZeJ",
  "key33": "V7n9H1j5rJiMmBSouHcuc173egDR7AtBTGTWFbbpCXCWtHDacZZD4XA8fn1VuJSZoTXnRxaaDQqwdqHMDpDY5w1",
  "key34": "5AaYjhurqZyNPUiJmAEFUv6ZVmxP38yD449ueSvPAvPdJN6arWwduNfd1Y7ybWsDvu9cHsLZRqsap3aCHduwPHKy"
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
