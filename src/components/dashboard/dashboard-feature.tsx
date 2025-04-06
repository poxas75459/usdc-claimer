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
    "4iSZ2aJfZUBwpz2CL4xTbJ14z1CUrQMBZEhMwwXGYxmth2fpJiG5zyPeNhD2EdBQzWYPHvPUGsKTmi6dAjMdQM5t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2HAAHeRm8e4kVPtjhjAHT7fXr6uLXd7mbPsxDmR5bMS84jxm2khxU8YHt37PK7Y5zYUmBxwdmuFinTusYRviBaK5",
  "key1": "2rap9661KsomKGhdVvYJqk3WvVgbbJ4WMrk2VVKy3srE5fmGdkgU8GKbtJKSURfgLZ8X8pWqGyRqhGddnjzp8ZwU",
  "key2": "5sZTQsjXdKvDoktnJ8fn7RAe1eC7GGbqVQyGVYjJRBnXDvYi4xXfJ9qfG2rPSV5KT24ZxfPnPC2iqhR2L78cFBdd",
  "key3": "595UMLNVg6SwChLhxfmADHyq65t4kRbbZJptAj7aJWN9a9eqK2DK3K5no9io8CVQdtc7oJHwaj2PJwhBpAAiqHni",
  "key4": "48KBZfomwnh6sCy9QKjbuiBBjMCBunAtxu2LqDzGP6A7Vxk46WskkoXj9JBC5CtcxDpgfaZw4cuTGrZuA2pg8R8U",
  "key5": "5ffyAFLGAzKyMaALXfCbCVqe6FQW6WNWKuJdvWktxK9otGo6qDy2vk8aqETz9wTD8XGFq4dcVGSbXgQTjMTpAmZN",
  "key6": "4BHRkP5gBDNx7zLUaDrcemKQ9U2KRVPpKvxNguXSP868iauSD8W6VqWfMahviFYhj6jAnWLx5Mbp5enAKV8tVPEA",
  "key7": "mQ7axaCA2hQMMbWuLAHjZEcjeKHTdYNbeFoE4fBYxwTzJg8iT3NhrCwBRA64VWDQE8KFysEr6W1uhuoUV4MEwYu",
  "key8": "5Rrn3rcjENjBAj9TeWaC45ygzQEmXbmFKktiJbj4xnTtcgXBSGakJTcSPm5hczHQMBFRNDcHF7F6ZYN5rUNJnGEw",
  "key9": "2kVTVYQMvQAGmABaCyXCRnYbGvcK2MNMx2jrhe6TVbiTVMXRxp7AHjCLDXU7MTna5L1oPyVVErX8W5zAeuXBSQ8c",
  "key10": "2vKF9X7bYuRkBrYNevodUPeru4wMsgzVdYVxbfDKWyvUvupcCyUAPBLUNfhjiB4PGZMRnz1FWAGuoszMDSTx3yxR",
  "key11": "4DQPmcVanDMqq12pwdPvp7VcRNN1KbZGyRcX1PErXBzyqHrjCzXKkmviZntyb5uUz8AupExRvYff1FQqE3jnjCjb",
  "key12": "5RsLMgDkk6ocUWbgp635izqTX9Xuw9gVh2wDodvq3zeFNAS1RnpP3xiv3uWpwqifaeEjkorT8Dpd1gM4j2kVi2Gp",
  "key13": "3rpGyeSjMYBS5ags9SkURseoLZN7DnVgxewFYAYSn24ZPgALwdFUemLoEUEPEbZnLBPPCfxH8w8hzQ41HPYv1w7G",
  "key14": "3VwjCZ2a1Lfu442Yi6JyzKZDANWAPEiZJqCLTDzNRnQfz23zjZJaHkgq9BnZzXGTiJZxTdiQw3R7aTDM58XbyXEA",
  "key15": "4Ukf2gp6X6Ncm7tAzv9dT4bjbZr93SY7W3NkzpnNYGXB1mejwYdJfQCdyExZy6iW2MtSoXmViv9m2TX4HVCUuYhD",
  "key16": "3Cyznp2BnyjwzGEXczRJoGBx6jhU6B8zHLigeEv4xiHQrzyisBSaRiPNGfnDnHtv2JJZ5g3TmpSvZAxbW8Stv7z4",
  "key17": "2ywH52ZZk2Z9t7UR3VQB5o7RrtBVNFx1EFWo6HmJ6bjKJeb5aAYsiGTDEVb4REzFzkwzuW2EmbmuF2LyYu6geBDm",
  "key18": "2TcoEAi11g8Z8WNTqFFoWT2A7kmAWJhYzuNENPmbd6ts7fYfUYytsuJ5NVugj4PKHd9bju1LbybTQMUEbFpKg2Fi",
  "key19": "5nQkGUGtnjBzyReHL1Nxxt5RqjSqUY4CUvtEHDu1iskAccBKgPJgCPgqeF5orKSQfQquL2Ki7AqzhDSUpWwtLck1",
  "key20": "5emc8fQz1XEBcecmDhyf2vRcz19E1kFAZacmmPub23nqQMDGZ4p5xvkssTT7hs1wqVR3ESkxLURPfmJ6tA5gz23A",
  "key21": "64V4C6Tf4VL8ytqP4Vv2y2tyKmm3AeBQtUkutHDgDdkBKB6UNgx9xvvF9KZZJCZy2VW5jnQHKDoP1MMMoM2Eaqdu",
  "key22": "qVw5Bs12ZAVKRdQU15n8ZYVsj4Vg6eanNBs8oWGXqzMGYqH2Vga2Ld1adeitdVtWSUDpCXRDdZk765hqERaGdh2",
  "key23": "5eZe4ACXS1tVDhP1z94VJyhc48scfcn9iUUhhFJMb5bYKwk37Ng5oq2ThMz9mmxrUrDMAadoEFWDwX7NbAVuQqHa",
  "key24": "2i83qYAKkLTGPcbSQGtp78AWGD29CR197fA8rsxCWEAZsBwt2HsGxt2FxCqBD9oF81dNzQ2SuXWN5X3R9pNs2w92",
  "key25": "5wUT1ARGUz2ZVtBQmuL9N9AbR4dkw3FjrwPFrkwFRjL8FRFxyPfHAnB7BsJgsUU12ohysLNgPKbqDkZvGAvrfbGR",
  "key26": "rWoS3gxpL3WQtDb44YCYRuuAgq3PVaReJYyQsFeAN2fKBNRBFKiS37VV56Axz4jyWRwo7RboaaMKn3wm2arRh4V",
  "key27": "3FMecXB96Drphqx3wN7ChBe3A4rzuJ2iWYKX1dS9AXgcCVof1DZmz8KiKvdk2fpiFLFTvP9JLJkbbXHmrz1aiPU6",
  "key28": "5cc1KeLoyhqzsqdAwws7cGM46w47sqksZxmoCL7XhMY7T1EQ6JZ8LahAeV83njqcJCeiHxDXHicNWXHMnNxK91Ya",
  "key29": "5P5T7LNGmMW625PRmsZGjqA5cp1PBLC4Gwnimmw82YFSqSWY1vMRu588c7dvkDj9dVcfR6YgjwDYxRK1F1TR39cL"
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
