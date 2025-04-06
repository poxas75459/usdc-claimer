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
    "5v8V3ctAMfrur9wEqrgvAx1uvAYGCaqgxDXr4KCq4i1Sn5KMSzdYk5WXQ4g5wSMJtbm3nkXYXdiS3CnXA2vQW9HC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ntygYH8Uk9D9xkab4DF1KxK7ZRAwGjtqh7EiTVRAuhmrTkaFrV4gee54PfAY7i5CP5aGKaLrZtkigr92RzhCRCk",
  "key1": "MGsyvEDVdjsaoU224EFCbqT7hK4N69mPYnAq1EhcsGPDCE5DxKb9NzbFAt3F4EEtD46mAi3f6p2BJSE28hZWZox",
  "key2": "3ntLPJTgDNUQ5p3TRSPBWXXDi5nm6YDjeYg7pSyqowAxJz3WRgPp9pa3EvZ7wGvtpcHEdGtdrnFrgpU6VbppFQSp",
  "key3": "rG3h3UJmZizn3ApVLC7CTVNdtofeGpssovNMUcWBenFzV5QAnNCy7nqvNtnDNH8ZRZYMc6H2LPfCZ7QybvFrPfh",
  "key4": "5rv75fNp1t1Tuqt4wyXkNe4JHf9NYDQCwnKVMvBH6iLA4Kbptws9Uyn1nYhijPZUweco5upg7i583Juhj1VecpY6",
  "key5": "3hBBZL8m8vVSU1hKmtFNjshhSQYtom65KQCb7MQ9vUvfhqgR4GPVYhzwN6SjkDExgFSNzgzSDoCjkatruU2DJQiR",
  "key6": "633bpHXdad9ySmMD1KWijScVP149E1dyXmZvW2X56uaRLWJvuLpxtBes2piHnx5LjtNAQNEDqhgRV3PSrH3pzmbC",
  "key7": "dVC3smnvdPS6s8VULe5zPD3X3n71shtvKFxWjDtyRkhtpTiJohqxFnaUzA1Xw4hCZqt8fxeAypck95fbGkG4fgx",
  "key8": "45uo6rVigdrhtsZtFaDUZtJs6yzLC6AAFr6N4XwPKbwMja2CpUAyZaKxQ9MrJsVdn4K7zVpecygZmE3EUAbvrdpX",
  "key9": "2c8Hb47Thiy8KgCv5uUwSxLRxStuAHJ1wm8rt8zoDXYeDoJrshSP3vusc647M15ow4Czwvb6Q7xAWU6512QBerS8",
  "key10": "2wJtLSGWQHLav8uR59VygmZUgxjTyjif6XiY1xxgpq3qkA6qQHudgfm12pEKpS7UqoJKB67moNKQaafx42xcfPTb",
  "key11": "3XzGgZ3AxuK6vAkyRpBYNmptymXYJ63p2me498XzdHKSurbzzw621aiqXEdxoWj8VaQKgZKeUuggMbwVhe9RHHzb",
  "key12": "35BryRtFpUuCGcyPXYLREvkWhbd8sJ1GFStCAidfo7CzLQYLLfnpmxDkFKo2ct31axYZ2Ead8CDePNqP9rHhfe6u",
  "key13": "5wuPKrMDfZvaVu3wepgiVKHo7cbjMNmi3ne5rCS1nSQEFvx5zeuAtCCf3uf62VrvDNVkxtj1bTk1BtLz4p4PzhPG",
  "key14": "53SxQkUmN8x19RwgtfFyB47pU1Kbg5YaHT5XpcGiarVtnS8cnWyK64Gz2VmCEvrcYhvyo5XtbiSriiYgixxHfPVg",
  "key15": "Rq1qwTxRNZ7HjTiNKmJnvzYcJ3VqjYt64dboBpk5Zb5XSHw7hEiSsZMLETDxD1bDAXARLNPMGM34fjkX5W3EMod",
  "key16": "4szjEMNEA6wvMF2BdPbDrr6PoN4Krk2QEUsBYoh2daijFCsoTGJyDTsyYcKaE9tTW8iHrxy8pjFVQATBNhja43Zx",
  "key17": "4g5jEqrA9ZCx82QSa5zXAAcmYmgbQV1wGXD3uvBCLnu3buEHLBJVkML3hsmfwz1d4EwM3w97GsXM7D3TeoxENosG",
  "key18": "5jowbdinXNZytNeiRFqNLfBzjeaJQUdWVbiqJ2Q6i2QdpyraT2atc5vtrARKegp5dS7g4NirBEu8LjV9FVDMs5FH",
  "key19": "2syzGYWxz5ndDac2gdwXzymUQRLwE6Rkz1aN5kjn5uzutgXjqNQgxrLDaTEZM9Ft3JZ6BLjsp2MUsjxFRD1k2iN4",
  "key20": "2EJhnt36kgoMP5VoRBqat6QubVQRA38LzE6ihQiV6RPpSZggKCPk8djvphB5vjR1zJQ1wegmS8SFn5chUrvHSzHW",
  "key21": "5duPB1tLQcmxCrHwA7mQjjDHJYZx1xM3mwMLesyjzve4W96gVVe8xPK6rMtChcLS7R7YhMp6Ne5HCWMuPQUYypPJ",
  "key22": "4ANqnaN7hiqdLBAQAGKCqwA1G6Sbvq3bqyUtMmLbYYV1KjjQVqapGw3mS9Gtfy9jv7rW2Q8NemLE1CM14yuJSNuM",
  "key23": "qdnygvnikxPBvyr8nVTdwULquTGzuuByYekQWPBpKMapMVT2M1VGv98MKWcFD2mUtKkVwDw2XREZsEc4ER8Dgf7",
  "key24": "VGz9iXbvDMtncs4jZBt3Qo3512T55BAq2u7XAuBBfrtwWfbpkC7VoQkkpUbGvAWHHSJ3Dy6EzhNxpCL1Mka2pGr",
  "key25": "2znc2DdKzhfiwQih5yLqUAngoLz7ivuK3ftU2AhnejcYzRvg17sJKmFtDb8xkDuKLTdL43c1PHoHrZ6QvP1izZea",
  "key26": "2i9cMMAfp8GTcKtRntLEL6Ss5k5cxwft4fJbe3Wi2R3QKSy6gT7cLEmJb8vJvQqUXA6DzXUEFGXfiUeivD9HvkAZ",
  "key27": "5SfxQpt2aqHQq9VYN35sKeeSD62FvNATFJ6RNGAY1Tezz8YK7EcKEtuFHcfwDDedQsweDvNr3ov5VyTJUgnGxGX6",
  "key28": "49FDgd4YyCLff6bhW96xNabvZkyvNXAKGT1n6erSx1MbPjKevrRf4c37o7X7jHV1TbZPr7Bw8ZS78FGgQPaZN1Ft",
  "key29": "2hHuAK6iF812bS7MQr9o1wBeLUxLRzP6c4ARZe7ijcodnPEoYpMHGsTRmTn5gGDsNrmnDrvCGapGhJrGDsno634h",
  "key30": "mLnkcjAP6yKTQgvB6zjkChYPxJX1ejrGrHVW3d9dVeGoZuzj4EiUbwNt1f6pLiGrNdgXWFr7UvxupRSnzfuzndt",
  "key31": "MEyLSFXwVS6i7g368pvZQ85wbUeFoFD5djNQdspVU9aj2gyWPt56dzGMJCHDaLdaQwerKPuC6LVbJG6y6MyvAwf",
  "key32": "4NzStey5pxdAEMihzY1oZutSLSgALUSPhuhcknyrtj2voX8svrk5VpcJ5fov3EpRtZhZ8bo6JyDzmJRT3v461qQi"
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
