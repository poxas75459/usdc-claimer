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
    "2cTM73bnTEQnCJ7VAPFtDZrg6Qhu53f8jjUfZytpkuruRKkW2xNBBjjjf9j5N9JyNbmhJ9VKmf7Hq9sGsjx1tCas"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FEPkrbrjDBMYZazdFsnoGU4wB7qUiy3ibfmXGJdoqgjQC5a7y7wdJ6E87bACkay3HbTwKCLdrkRa7tmQRC7Zhw5",
  "key1": "iG55ggcfQ5yh2TVTD3BhSAskmuLaTt8ZUiDaf6ET15MKTjb6Hs4u4QoVDCtWDksh4s9fx6gK3qhWVZkAXorjrQn",
  "key2": "4776LfQqNNSKQfyw1JfxniidRTdupbjwwcqzvBtH6CLpkttqHLxW2198a9LD4G91xd8hTQ5AhCob5DYLAFoxNrRT",
  "key3": "5LRu7ykGrHcsSnP73Rho7yrsPa9gnLsAgNdTK1RUCdDcyeeDCgkHcQj7E5hhWCk45KfPWriLLRNdGYiozS5jEUQD",
  "key4": "5v4A79rjFw16JRgN5v8ThcUGXUhvPi51Nyr9UqvW373JErJ51ppBz3Z5Pg3EK5gkRrc7akrQsJUaiK8DX7mt6tNg",
  "key5": "35hFrcCQxFExdfDD1avVCQCzSVjcQN8XYdvoL1UN2FGDcrmfV9ioxYTuBcCjzZidwFEfcF98V41ep7uf91yGMcDr",
  "key6": "4BQgwbctoF3ed5N5dqpnDLsp5oMT8CMVxEbT4ukHArcp2QtEd23LSRFeS88aSBNXDKfPpyrmBa2BS24D6dRiSF6j",
  "key7": "2C74Qbq4e7DtPiksSxuF3FqNpkoYGonjefh5AdRwAv4WbUXjJV1CyfhT49Kfuj6cZEaURe7m3DaHde3bvpd8JbWr",
  "key8": "4KxUVusqfnnEW6YNrDUX5Kw1y1XCKgs2ufdPvYTSwaf7zSALCzaVtuCkm3nrYEP1d7NcxNNBWQ8GaN86NPmZAmhP",
  "key9": "4czCqeKpg41ZjfkiM75cKq3TF4FTiL4UsyVxB4T46kp5BmCjaNhiiMYEpuFwkForEMQncu4ZMUBVRqX7tu8pCGVi",
  "key10": "9cxWsiYhyeyoBd9L6KeTuLQ5piVkfTF5nsYPR9RjP6rthhGkzhPtuQM474ZrRVnFFjNk9mefqjCV9ErzkJ4aWNU",
  "key11": "4AYrb2Be4eehaG6GCB79edmDiayCyGTK8RegDGYJy9WFnDRBzqxA1fQPWv3oGNFK4HoC93JAQA51Es8CYseGgt3h",
  "key12": "2ryMbSS4Lz9xdyEJuLVM11xEtab3cEFwBcZiHixrN4fzC6WzufuwWxxXuFPAGCHdTS398CLqDvmiEegM5FxZBsJe",
  "key13": "479i7CxHUHM7mzcbXtqHdgDphPpzeG5SspquSHhZodt9SM3XgYB2Stk85wHX5qeguyvwK4ef19LUaN64GswuKRWY",
  "key14": "5iG8ZSAXznq8F7rowGcrFCHCJDRaHcPiEKAr7Ck2ouXoXSYfRo7r7ShbhvncKzhfhdtK36z7ZJzPW2QVNReuzoc",
  "key15": "2pCUWoHUpSGSFNn2yFvfbxCkjJB3VwVomsAVpkUf777MCAxUPus4BgjtQqEmbFWHj79xjTpk17jnEfgkEm15VfK2",
  "key16": "5G5h5posMp2WnZ18BfxGDMNgoP3Ryf2a9cfN5MsCuz71okSxvFUDnzX1tPHQ7DXpJx2K1DpvkJKZ8zpzXoa5eSf2",
  "key17": "4MmYNRnLChVbcyW7gVqEhJowQVRgSxC5frjhCuUn7gu5ZRsa6uHKe5FEsoSNoNUSE4MtCC86dT7wfhB8hB268S6C",
  "key18": "5CSUycyJxutzLgNur54GEDhWrZUmsop9wkGq7tJW7XbYatGeLFEbGjY7neZNiAKn8v9r9YwMdsN4o9KWayuSrJKA",
  "key19": "wkEaEkSEiXxuu2qnFXVzhWJN2Bx8gtYtfEidJ9spMCLusFnxKppDLSjkS7Hnj8UYPiPxwLHbsxX2MbVDz5wRMJs",
  "key20": "2qZWK4CYDzr3AjNZpBNiFJLq1QrxGwzt4Rrth9bW33fgneK9ssr557ak9qrBRRWUQ9xQzXSA4EKbApnBHQAhvvDB",
  "key21": "5CmtszX8p7DnLA9YtXTfoFE3x9nMDUfZYETvC2ZhuDkkfocs4impvVtDWg4egNi2423qrqp9yxNkRM5SnhUrMo3g",
  "key22": "4tnxgPb4pcbUr6WCRamcaPUcnaAu3uBW1vuU6FvzGCE5neTYFxyH6Qh9zYCzHk3C1aEKaZoSN35PeoRZnmGEi8g3",
  "key23": "2Eqe2jtcr2E9Js1CmUyGkadfMpWDuhQtX8mRAJjKbrGZxPB17EfucMpS4mzo6urHzr8NDYaJoK1HDaeQ2ATcrsNU",
  "key24": "3ivpE9qkJL9qdc8yTz2kmyTws8w1dJGehVf9HttGhXpxGceUBG9Ujh1NYyJGPCkq7GUZ1fLad46fztPrSJvZ4ovV",
  "key25": "iS4FM4n8L7jW2gxAB9o77Tjand4ecnf4XagbVC3P4Jkx2zoxBEiYYsEC2Dkm6cPoGascgWaaG1sFSLjfLnHhE3i",
  "key26": "3Q96Tfpo8p3MHCQ8eBg8VahHmYjWh65Eipq768vPesyodVPbcDHijjaqz1gummyLbfmnb83G4qhtaDzCqyWtQXGt",
  "key27": "51FXVbVKTuzmC9wxe7CgbBVCrbAWvKLE3ZizWxhCYH95sSwEppwAHiLp6inNKdnFaCB2jjxY5Kg1NvuQkqm4oN5D",
  "key28": "51CWSCFxEeGxbyPpNdhVh1u5nQKnLjnLKez3oQfZMXCJyoRfPwAMs6y3k7aZYQP354X6TRag8PV8DBed5d9V7KFj",
  "key29": "3voZURYSiQjgbDT65MTsW8ftkfBoCmdeTJH6WMGYxWyMSUktAmsnQ2fd5oj1U85QFWUikZZSekeu4rFWVY1BhdDe",
  "key30": "3xrkHi7xTq229fDSKLRpoSNSECZNLhQnNeNNXQPH8LAJ9LVRWvTagcpHC3rT4kLzkPs8WiTF7zp7AL3U9ZgTxjj2"
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
