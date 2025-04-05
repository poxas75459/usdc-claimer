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
    "2KPXYW1Zmwrr9DoaPz5prt76EiKDqn8oqAX1hJHnjsXJSpojYTMGBKpVqS5n4dEnCVTQmkwpsd2cpoNjKjzhtpZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NQW2Exsow9xSwRapPz9XnGqdoBaKdVThmP5J8kk4fJTykPQX21WMbr3PjkPigzSfJP1c1fdhBBzHhn8gRwG7uCY",
  "key1": "64D6dyAuAoNJ4vn3LUtyHUooZt9oWFUvCR1RLp6by8dQFGBQhMLX8RVorFYn3xHZjt1nAEWoDDib8DLKtc68aqfB",
  "key2": "jrt1YPSi8c19heNwgssEYgYg6wTDZtNx9fpLPp8kUPo2ocn3hwvtQuQZUvvQYJH81LjSwBuC5PeRqM9DqSvn84H",
  "key3": "3idPNxYRHzJ7CsQLe3PDs5cwmUEZYW4eBzBXcXHnGq3pd5515PQpfAQCTg9wXGUSFVyBLbLzKLDSPRRyqzNV4Bed",
  "key4": "4b5T8iUCDrcmGJ7S56egsdDJbkW7iZtAkw518y68BVsBLjcfk44XztMKpzP8FFzUh6f1EUkLQb6pP9A5tSCnMNrE",
  "key5": "3TpqAAuamCAQeGHLX5kkz49Aq6WesGpto4KB4VV2LtE1whbe1ok6TsSFZYZs7prr1PffbMSkH5cBnEcYpLMkMknJ",
  "key6": "3aSeG41xbcUMdwX5hEnNoXtWvLCKLu3PJ5wLdtBhLb5AMraLe3x731MNMaudnguZnQ25UVvBx8nn9CefpVgWu8cH",
  "key7": "2jLSn92EP3t6QgsGaCiTJmhfVHGczQmZ2ZXa6DA3md816LAK2kFPL3BUVMXGKzxt3JzMsWQ2XarTkRGEaAAQfWZb",
  "key8": "4MzwsdiU5g7qvgcDTHTQWGT6fooioFCD6wiNLFeYY2KirGpfbq7QsB86WcmjXknznMECN9ayvb72iwEKcaBE3Ky6",
  "key9": "59tgfdbvPfddkgfMUcPaDHaDr3EjYkRZ3JFac9tbKzQZqtzuboxTnpdkJJQ5cc88JWuBeWR9sZC5hgVGNyU9vqYM",
  "key10": "4JFiqoE4b3mkCNak2h7M1S2pvJwp6KjJ8aad49rsSohihujG4ea2WnW4AyLbTzC58JruFCFgTRr8szpPNbtpPg1o",
  "key11": "3BfPaEuUcYpUuwF7o7tYfCmNrrGqT7Ltv4uvwWgSRvTYNwkh76mEVgkgvbqGi7m2w2Sg3zsk9fnfxhsewrran1ky",
  "key12": "5HLprLpVn9mfLm3Mgp9pKaNBTJd7uhknvEtjLv5GNF9avkhmUCyPhLrF5uhReAoFTSGHpxxJ8AYvpqNRNMuSgrEd",
  "key13": "2K2sspv133kAWxMiog3Rwst1bUQ6xNuhBGwubVNuAg3Py4hQet1MLwXvUhHXYJbSi5eKkVaiVGphsAhpcxCWyRV",
  "key14": "4BENy7XV7j4J6Lo1mCP5TkNnCn6ApuYXqGShQRQuaArEcBMF88Vktcksd6fMTNWVLszpWhpnDcYyhg11o1wComvy",
  "key15": "5eiBzLJ14Q8mFQinGocvZcxNh8PKaKsgGAN4ZV6mXhaoB6AP8hwbsdPGsN6kNaAtYogpvUCsZGGx3tqdGzN9a6zP",
  "key16": "4LYqR73TrbbzYrP39zwwe6R6yz5VGo3vLR2VmH1Hjh9KMUv5qwvSwc5PxRMmBKMQThfVjnFH7Ej73fbVyFWf9GTt",
  "key17": "AHaG63QXwSx4aBfAJMnaayq7pCqzb7Dr1Uu5S85UwpuSgzeTGCmu7UDQsn6JP2pEtoAb3c32H5YjhGWXzQBdvPk",
  "key18": "4ZMMDXQHLvuxQEuxuMUr9rDHj19ayhrNkQAjfcwYPRzZBJiZQSFn3zPevVhSdA4rntS97D27KoiBE85tWHo43HTk",
  "key19": "4z8n33bz612hnmaxfmMJ8Jw2R8ucbwb9kBvviTXM4tEhvas1PnpRR8HS8eC6vvT4BYgbRaioF8mLrZbxx3X2BQgn",
  "key20": "2kmQtzp2PcrfoyTTB5v4upYoqqB2W5nMYdDKHhne5xknXnAdhjuXq1CXazwdBfhRF4W6GFRGW77XooUMcMLFnWTQ",
  "key21": "5ALtarbsWMBro4BmRt7CCKnrUVTZ29Pkhsb8QCi31o6RBig2vqqpqcKJCdug7QgdnwutnhcBhDopgRTjFkNddjCt",
  "key22": "5FsYuS651TWpv2yANWb5fy9uoUcPNAR8foqSpbFubxSDcHmE5EUqHGycxPe4xchiFnr2Wz6ADuPyoCjGSva45LpY",
  "key23": "4pD1aL2zLcVY1zukW6GD9GdqfiTpYPm1xD9J91wEpoS25NsE8kmtz8MqCVYAbB1CAkMtvYdq8Rhi9i1hXxzHLroP",
  "key24": "2NQXccNmXrnMGwgmH6CtbR5gqx17VCP6sV3uBxZ7hUKQg1mM7z4FVN83iFLVubTCkUZHndHfp61JHpQmddweLF6A",
  "key25": "2MaiZqE7qAMAoUbi5DcG8Vpw4zy5yvJwFEAw1F7dh5Y8biojqyXh7q29qGVqAsQzBPoKsvD936mUraHdhHXQNdnH"
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
